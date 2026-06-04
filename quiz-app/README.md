# 수학 퀴즈 게임 (실시간 멀티플레이어)

Socket.IO 기반 실시간 객관식 퀴즈 방 게임입니다. 여러 브라우저에서 동시 접속하여 방 생성, 참여, 퀴즈 진행, 점수 확인까지 할 수 있습니다.

## 기술 스택

- **Frontend**: React 18 + TypeScript + Vite + CSS Modules
- **Backend**: Node.js + Express + Socket.IO + TypeScript
- **상태 저장**: 서버 메모리 기반 (MVP)
- **수식 렌더링**: KaTeX

## 설치 방법

```bash
# 서버 의존성 설치
cd server
npm install

# 클라이언트 의존성 설치
cd ../client
npm install
```

## 실행 방법

터미널 2개를 열어 각각 실행합니다.

### 백엔드 서버 (포트 3001)

```bash
cd server
npm run dev
```

### 프론트엔드 (포트 5173)

```bash
cd client
npm run dev
```

브라우저에서 `http://localhost:5173` 으로 접속합니다.

## 사용 포트

| 서비스 | 포트 |
|--------|------|
| 프론트엔드 (Vite) | 5173 |
| 백엔드 (Express + Socket.IO) | 3001 |

## 주요 기능

### 닉네임 시스템
- 한글, 영문, 숫자만 허용 (2~12자)
- 같은 방 내 닉네임 중복 불가
- localStorage에 저장하여 새로고침 시 유지

### 로비
- 실시간 방 목록 표시 (상태, 인원, 문제 수, 제한시간)
- 방 생성 / 참가
- 진행중인 방 입장 불가

### 방 생성
- 방 이름 (미입력 시 랜덤 한국어 이름)
- 문제 수: 3~30개 (기본 10개)
- 제한시간: 10~60초 (기본 60초)
- 최대 인원: 1~20명 (기본 8명)

### 게임 진행
- 4지선다 객관식 문제 (수학 432문제 풀)
- 서버 기반 타이머 (정확한 시간 관리)
- 모든 유저 응답 완료 시 즉시 정답 공개
- 정답 공개 후 3초 대기 → 다음 문제
- 마지막 문제 후 최종 결과 표시

### 점수 시스템
- 정답: +1점 / 오답: 0점 / 미응답: 0점
- 동점 시 공동 순위 처리
- 문제별 결과 + 해설 표시

### 방장 / 연결 관리
- 방장 나가면 자동 이관 (가장 먼저 들어온 유저)
- 5초 재접속 유예 시간
- 모든 유저 퇴장 시 방 자동 삭제

## Socket.IO 이벤트

### 클라이언트 → 서버

| 이벤트 | 설명 | Payload |
|--------|------|---------|
| `setNickname` | 닉네임 설정 | `{ nickname: string }` |
| `createRoom` | 방 생성 | `{ name?, questionCount?, timeLimitSeconds?, maxPlayers? }` |
| `joinRoom` | 방 참가 | `{ roomId: string }` |
| `leaveRoom` | 방 나가기 | - |
| `startGame` | 게임 시작 (방장) | - |
| `submitAnswer` | 답안 제출 | `{ selectedIndex: 0\|1\|2\|3 }` |
| `requestRoomList` | 방 목록 요청 | - |
| `reconnectToRoom` | 재접속 | `{ userId: string }` |

### 서버 → 클라이언트

| 이벤트 | 설명 |
|--------|------|
| `nicknameAccepted` | 닉네임 수락 |
| `nicknameRejected` | 닉네임 거부 |
| `roomListUpdated` | 방 목록 갱신 |
| `roomCreated` | 방 생성 완료 |
| `roomJoined` | 방 참가 완료 |
| `roomUpdated` | 방 정보 변경 |
| `hostChanged` | 방장 변경 |
| `gameStarted` | 게임 시작 |
| `questionStarted` | 새 문제 전송 |
| `answerSubmitted` | 유저 답변 알림 |
| `questionResult` | 문제 결과/정답 공개 |
| `gameFinished` | 최종 결과 |
| `roomDeleted` | 방 삭제 |
| `errorMessage` | 에러 메시지 |

## 보안

- 정답은 클라이언트에 미리 전송하지 않음
- 점수 계산은 서버에서만 수행
- 닉네임/방이름 HTML escape 처리
- 500ms 간격 요청 제한 (rate limiting)
- Socket.IO room 기능으로 해당 방 유저에게만 이벤트 전송

## 프로젝트 구조

```
quiz-app/
├── README.md
├── server/
│   ├── package.json
│   ├── tsconfig.json
│   └── src/
│       ├── index.ts          # Express + Socket.IO 서버
│       ├── socket.ts         # Socket.IO 이벤트 핸들러
│       ├── rooms/
│       │   ├── roomManager.ts # 방/게임 로직
│       │   └── roomTypes.ts   # 서버 타입 정의
│       ├── quiz/
│       │   ├── questions.ts   # 432개 수학 문제 DB
│       │   └── quizTypes.ts   # 퀴즈 타입 정의
│       └── utils/
│           ├── id.ts          # ID 생성
│           └── sanitize.ts    # 입력 검증/살균
└── client/
    ├── package.json
    ├── vite.config.ts
    ├── tsconfig.json
    ├── index.html
    └── src/
        ├── main.tsx
        ├── App.tsx            # 메인 앱 + 라우팅
        ├── socket.ts          # Socket.IO 클라이언트
        ├── types.ts           # 클라이언트 타입
        ├── styles/
        │   └── global.css
        ├── pages/
        │   ├── NicknamePage.tsx
        │   ├── LobbyPage.tsx
        │   ├── WaitingRoomPage.tsx
        │   ├── QuizPage.tsx
        │   └── ResultPage.tsx
        └── components/
            ├── CreateRoomModal.tsx
            ├── PlayerList.tsx
            ├── ScoreBoard.tsx
            └── Timer.tsx
```

## 향후 개선사항

- 데이터베이스 연동 (Redis/PostgreSQL)
- 사용자 인증 시스템
- 관전 모드
- 채팅 기능
- 문제 카테고리/난이도 선택
- 속도 보너스 점수
- 게임 히스토리/통계
- 배포 환경 설정 (Docker, Nginx)
