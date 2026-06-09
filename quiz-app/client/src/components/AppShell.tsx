import { useEffect, useRef, useState, type ReactNode } from "react";
import { sfx } from "../lib/sfx";

interface AppShellProps {
  /** 현재 페이지 키 — 바뀌면 화면 전환 애니메이션/효과음 재생 */
  pageKey: string;
  children: ReactNode;
}

/* 모든 페이지를 감싸는 게임 셸:
   - 코너 브래킷 HUD 베젤 + 스캔라인/비네트
   - 페이지 등장 애니메이션 + 다이애고널 스와이프 전환
   - 효과음 음소거 토글 */
export default function AppShell({ pageKey, children }: AppShellProps) {
  const [muted, setMuted] = useState(sfx.muted);
  const first = useRef(true);

  useEffect(() => {
    if (first.current) { first.current = false; return; }
    sfx.play("whoosh");
  }, [pageKey]);

  return (
    <div className="appShell">
      <div key={pageKey} className="pageEnter">{children}</div>
      <div key={`swipe-${pageKey}`} className="swipeBar" aria-hidden="true" />

      <div className="shellScan" aria-hidden="true" />
      <div className="hudFrame" aria-hidden="true" />
      <div className="hudCorner hudCornerBL" aria-hidden="true" />

      <button
        type="button"
        className="sfxToggle"
        aria-label={muted ? "효과음 켜기" : "효과음 끄기"}
        title={muted ? "효과음 켜기" : "효과음 끄기"}
        onClick={() => { const m = sfx.toggle(); setMuted(m); if (!m) sfx.play("select"); }}
      >
        {muted ? "🔇" : "🔊"}
      </button>
    </div>
  );
}
