/* ════════════════════════════════════════════════════════════
   SFX — Web Audio로 합성하는 게임 효과음 (에셋 파일 없음)
   클릭/선택/정답/오답/승리/패배/타격/KO/회복/전환음을 즉석 생성.
   - 음소거 상태는 localStorage 유지
   - 브라우저 정책상 첫 사용자 제스처에서 AudioContext 활성화(arm)
   ════════════════════════════════════════════════════════════ */

export type SfxName =
  | "click" | "select" | "correct" | "wrong"
  | "win" | "lose" | "hit" | "ko" | "heal" | "whoosh";

const STORE_KEY = "quiz-sfx-muted";

type Wave = OscillatorType;

class Sfx {
  private ctx: AudioContext | null = null;
  private master: GainNode | null = null;
  muted = false;

  constructor() {
    try { this.muted = localStorage.getItem(STORE_KEY) === "1"; } catch { /* noop */ }
  }

  private ensure(): AudioContext | null {
    if (typeof window === "undefined") return null;
    if (!this.ctx) {
      const AC = window.AudioContext || (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
      if (!AC) return null;
      try {
        this.ctx = new AC();
        this.master = this.ctx.createGain();
        this.master.gain.value = 0.5;
        this.master.connect(this.ctx.destination);
      } catch { this.ctx = null; }
    }
    if (this.ctx && this.ctx.state === "suspended") this.ctx.resume().catch(() => { /* noop */ });
    return this.ctx;
  }

  /** 첫 사용자 제스처에서 오디오 컨텍스트를 깨운다 */
  arm(): void {
    if (typeof window === "undefined") return;
    const wake = () => {
      this.ensure();
      window.removeEventListener("pointerdown", wake);
      window.removeEventListener("keydown", wake);
      window.removeEventListener("touchstart", wake);
    };
    window.addEventListener("pointerdown", wake);
    window.addEventListener("keydown", wake);
    window.addEventListener("touchstart", wake);
  }

  setMuted(m: boolean): void {
    this.muted = m;
    try { localStorage.setItem(STORE_KEY, m ? "1" : "0"); } catch { /* noop */ }
  }

  toggle(): boolean { this.setMuted(!this.muted); return this.muted; }

  private tone(
    freq: number, dur: number,
    opts: { type?: Wave; gain?: number; slideTo?: number; delay?: number } = {},
  ): void {
    const ctx = this.ctx; const master = this.master;
    if (!ctx || !master) return;
    const { type = "square", gain = 0.25, slideTo, delay = 0 } = opts;
    const t = ctx.currentTime + delay;
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.type = type;
    o.frequency.setValueAtTime(freq, t);
    if (slideTo) o.frequency.exponentialRampToValueAtTime(Math.max(1, slideTo), t + dur);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(gain, t + 0.008);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g); g.connect(master);
    o.start(t); o.stop(t + dur + 0.03);
  }

  private noise(
    dur: number,
    opts: { gain?: number; freq?: number; sweepTo?: number; delay?: number; q?: number } = {},
  ): void {
    const ctx = this.ctx; const master = this.master;
    if (!ctx || !master) return;
    const { gain = 0.25, freq = 1200, sweepTo, delay = 0, q = 0.8 } = opts;
    const t = ctx.currentTime + delay;
    const len = Math.max(1, Math.floor(ctx.sampleRate * dur));
    const buffer = ctx.createBuffer(1, len, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < len; i++) data[i] = Math.random() * 2 - 1;
    const src = ctx.createBufferSource();
    src.buffer = buffer;
    const filter = ctx.createBiquadFilter();
    filter.type = "bandpass";
    filter.Q.value = q;
    filter.frequency.setValueAtTime(freq, t);
    if (sweepTo) filter.frequency.exponentialRampToValueAtTime(Math.max(1, sweepTo), t + dur);
    const g = ctx.createGain();
    g.gain.setValueAtTime(gain, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    src.connect(filter); filter.connect(g); g.connect(master);
    src.start(t); src.stop(t + dur + 0.03);
  }

  play(name: SfxName): void {
    if (this.muted) return;
    if (!this.ensure()) return;
    switch (name) {
      case "click":
        this.tone(440, 0.06, { type: "square", gain: 0.16, slideTo: 640 });
        break;
      case "select":
        this.tone(540, 0.07, { type: "square", gain: 0.18, slideTo: 760 });
        this.tone(820, 0.08, { type: "triangle", gain: 0.14, delay: 0.06 });
        break;
      case "correct":
        this.tone(660, 0.1, { type: "triangle", gain: 0.22 });
        this.tone(880, 0.1, { type: "triangle", gain: 0.2, delay: 0.08 });
        this.tone(1320, 0.14, { type: "triangle", gain: 0.18, delay: 0.16 });
        break;
      case "wrong":
        this.tone(220, 0.26, { type: "sawtooth", gain: 0.2, slideTo: 90 });
        this.noise(0.12, { gain: 0.08, freq: 500 });
        break;
      case "win":
        [523, 659, 784, 1046].forEach((f, i) =>
          this.tone(f, 0.22, { type: "triangle", gain: 0.2, delay: i * 0.1 }));
        this.tone(1568, 0.4, { type: "sine", gain: 0.16, delay: 0.42 });
        break;
      case "lose":
        this.tone(330, 0.5, { type: "sine", gain: 0.22, slideTo: 90 });
        this.tone(247, 0.5, { type: "sawtooth", gain: 0.12, slideTo: 70, delay: 0.06 });
        break;
      case "hit":
        this.noise(0.12, { gain: 0.28, freq: 900, sweepTo: 300 });
        this.tone(130, 0.12, { type: "square", gain: 0.22, slideTo: 60 });
        break;
      case "ko":
        this.noise(0.32, { gain: 0.4, freq: 700, sweepTo: 90, q: 0.6 });
        this.tone(95, 0.32, { type: "sawtooth", gain: 0.3, slideTo: 40 });
        this.tone(220, 0.2, { type: "square", gain: 0.18, slideTo: 70, delay: 0.02 });
        break;
      case "heal":
        this.tone(680, 0.18, { type: "sine", gain: 0.18, slideTo: 1080 });
        this.tone(1020, 0.16, { type: "sine", gain: 0.12, delay: 0.1 });
        break;
      case "whoosh":
        this.noise(0.4, { gain: 0.16, freq: 380, sweepTo: 2400, q: 0.5 });
        break;
    }
  }
}

export const sfx = new Sfx();
