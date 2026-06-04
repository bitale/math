#!/usr/bin/env bash
#
# quiz-app 배포 스크립트
# - 빌드 컨텍스트(math 루트의 quiz-app/ + src/)를 tarball로 묶어 test-server에 업로드
# - 서버에서 context 교체 후 docker compose 재빌드/기동
# - 배포 직전 이미지/컨텍스트를 백업하고, 오래된 백업은 최근 N개만 유지
#
# 사용법:
#   ./deploy.sh                 # test-server로 배포, 백업 3개 유지
#   KEEP_BACKUPS=5 ./deploy.sh  # 백업 5개 유지
#   SSH_HOST=other ./deploy.sh  # 다른 호스트로 배포
#
set -euo pipefail

# ── 설정 (환경변수로 덮어쓰기 가능) ──
SSH_HOST="${SSH_HOST:-test-server}"
REMOTE_DIR="${REMOTE_DIR:-/home/com/quiz-app}"
KEEP_BACKUPS="${KEEP_BACKUPS:-3}"

# ── 경로 계산 ──
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"  # .../math/quiz-app
REPO_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"                    # .../math (빌드 컨텍스트 루트)

log() { printf '\033[1;36m▶ %s\033[0m\n' "$*"; }
err() { printf '\033[1;31m✗ %s\033[0m\n' "$*" >&2; }

# ── 1. 연결 확인 ──
log "SSH 연결 확인: $SSH_HOST"
ssh -o BatchMode=yes -o ConnectTimeout=10 "$SSH_HOST" 'echo " 연결됨: $(hostname)"'

# ── 2. 빌드 컨텍스트 tarball 생성 (node_modules/dist/.git 제외) ──
TARBALL="$(mktemp -t quiz-deploy.XXXXXX.tar.gz)"
trap 'rm -f "$TARBALL"' EXIT
log "빌드 컨텍스트 압축: quiz-app/ + src/ (node_modules·dist 제외)"
tar czf "$TARBALL" -C "$REPO_ROOT" \
  --exclude='*/node_modules' --exclude='*/node_modules/*' \
  --exclude='*/dist' --exclude='*/dist/*' \
  --exclude='.git' --exclude='*.bak*' --exclude='*.tmp*' \
  quiz-app src

if tar tzf "$TARBALL" | grep -q node_modules; then
  err "tarball에 node_modules가 포함됨 — 중단"; exit 1
fi
log "압축 완료: $(du -h "$TARBALL" | cut -f1)"

# ── 3. 업로드 ──
log "업로드 → $SSH_HOST:$REMOTE_DIR/quiz-deploy.new.tar.gz"
scp -o ConnectTimeout=10 "$TARBALL" "$SSH_HOST:$REMOTE_DIR/quiz-deploy.new.tar.gz"

# ── 4. 원격 배포 (롤백 백업 → 교체 → 빌드 → 백업 정리 → 헬스체크) ──
log "원격 배포 시작 (백업 $KEEP_BACKUPS개 유지)"
ssh "$SSH_HOST" bash -s -- "$REMOTE_DIR" "$KEEP_BACKUPS" <<'REMOTE'
set -euo pipefail
REMOTE_DIR="$1"
KEEP="$2"
cd "$REMOTE_DIR"
TS="$(date +%Y%m%d%H%M%S)"
echo "  배포 타임스탬프: $TS"

# 현재 이미지를 롤백용으로 태그
if docker image inspect quiz-app-quiz-app >/dev/null 2>&1; then
  docker tag quiz-app-quiz-app "quiz-app-quiz-app:rollback-$TS"
  echo "  롤백 이미지 태그: rollback-$TS"
fi

# 기존 산출물 백업
if [ -f quiz-deploy.tar.gz ]; then mv quiz-deploy.tar.gz "quiz-deploy.tar.gz.bak.$TS"; fi
mv quiz-deploy.new.tar.gz quiz-deploy.tar.gz
if [ -d context ]; then mv context "context.bak.$TS"; fi
mkdir -p context
tar xzf quiz-deploy.tar.gz -C context
echo "  컨텍스트 교체 완료"

# 빌드 & 기동
cd context/quiz-app
echo "  docker compose 빌드/기동..."
docker compose up -d --build
cd "$REMOTE_DIR"

# 오래된 백업/이미지 정리 (최근 $KEEP개만 유지)
prune() {
  local prefix="$1"
  shopt -s nullglob
  local items=( ${prefix}* )
  shopt -u nullglob
  [ ${#items[@]} -eq 0 ] && return 0
  local sorted i=0
  while IFS= read -r it; do
    i=$((i+1))
    [ "$i" -le "$KEEP" ] && continue
    rm -rf -- "$it" && echo "  정리: $it"
  done < <(printf '%s\n' "${items[@]}" | sort -r)
}
prune 'context.bak.'
prune 'quiz-deploy.tar.gz.bak.'

# 오래된 롤백 이미지 정리
i=0
while IFS= read -r tag; do
  [ -z "$tag" ] && continue
  i=$((i+1))
  [ "$i" -le "$KEEP" ] && continue
  docker rmi "quiz-app-quiz-app:$tag" >/dev/null 2>&1 && echo "  정리: 이미지 $tag"
done < <(docker images quiz-app-quiz-app --format '{{.Tag}}' | grep '^rollback-' | sort -r)

# 헬스체크
sleep 3
echo "  상태: $(docker ps --filter name=quiz-app --format '{{.Names}} | {{.Status}}')"
if curl -fs -m 5 http://localhost:3001/api/health >/dev/null; then
  echo "  ✓ 헬스체크 통과"
else
  echo "  ✗ 헬스체크 실패 — docker logs quiz-app 확인 필요"
  exit 1
fi
REMOTE

log "배포 완료 ✅"
echo "  롤백: ssh $SSH_HOST 'cd $REMOTE_DIR/context/quiz-app && docker tag quiz-app-quiz-app:rollback-<TS> quiz-app-quiz-app:latest && docker compose up -d'"
