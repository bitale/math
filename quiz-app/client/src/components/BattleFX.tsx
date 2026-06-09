import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";

/* ════════════════════════════════════════════════════════════
   BattleFX — 캔버스 기반 전투 이펙트 엔진
   게임 렌더처럼 파티클 폭발 / 에너지 빔 / 번개 / 데미지 숫자 /
   충격파 링 / KO 폭발 / 승리 분출 / 화면 플래시를 실시간으로 그린다.
   - requestAnimationFrame은 살아있는 파티클이 있을 때만 회전(배터리 절약)
   - devicePixelRatio는 2로 상한, prefers-reduced-motion 존중
   ════════════════════════════════════════════════════════════ */

export interface BattleFXHandle {
  /** 충격 폭발 (스파크 + 파편 + 충격파) */
  impact(x: number, y: number, opts?: { color?: string; power?: number }): void;
  /** 공격 궤적 에너지 빔 (발사 → 명중 위치) */
  beam(x1: number, y1: number, x2: number, y2: number, color?: string): void;
  /** 지그재그 번개 (시간 압박 등) */
  bolt(x1: number, y1: number, x2: number, y2: number, color?: string): void;
  /** 떠오르는 데미지/획득 숫자 */
  damageText(x: number, y: number, text: string, opts?: { color?: string; size?: number }): void;
  /** 충전 글로우 (정답 적립 등) */
  charge(x: number, y: number, color?: string): void;
  /** 충격파 링만 */
  ring(x: number, y: number, color?: string, opts?: { power?: number }): void;
  /** KO 대폭발 */
  ko(x: number, y: number): void;
  /** 승리 분출 */
  victory(x: number, y: number): void;
  /** 전체 화면 색 플래시 */
  flash(color?: string, strength?: number): void;
}

type Comp = GlobalCompositeOperation;

interface Particle {
  kind: "spark" | "shard" | "ring" | "text" | "glow" | "beam" | "bolt";
  x: number; y: number;
  vx: number; vy: number;
  life: number; max: number;
  size: number;
  color: string;
  rot: number; vr: number;
  grav: number; drag: number;
  comp: Comp;
  x2?: number; y2?: number;
  text?: string;
  seed?: number;
}

interface FlashFX { color: string; life: number; max: number; }

interface Engine extends BattleFXHandle {
  destroy(): void;
}

const TAU = Math.PI * 2;

function hexToRgb(hex: string): [number, number, number] {
  let h = hex.replace("#", "");
  if (h.length === 3) h = h.split("").map((c) => c + c).join("");
  const n = parseInt(h, 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

function rgba(hex: string, a: number): string {
  const [r, g, b] = hexToRgb(hex);
  return `rgba(${r},${g},${b},${a})`;
}

function createEngine(canvas: HTMLCanvasElement): Engine {
  const ctx = canvas.getContext("2d")!;
  let w = 0, h = 0, dpr = 1;
  const parts: Particle[] = [];
  const flashes: FlashFX[] = [];
  let raf = 0;
  let last = 0;
  // 작은 화면에서는 파티클 밀도를 낮춰 가볍게
  const density = () => (Math.min(window.innerWidth, window.innerHeight) < 520 ? 0.62 : 1);

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = window.innerWidth;
    h = window.innerHeight;
    canvas.width = Math.floor(w * dpr);
    canvas.height = Math.floor(h * dpr);
    canvas.style.width = w + "px";
    canvas.style.height = h + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  resize();
  window.addEventListener("resize", resize);

  function push(p: Particle) {
    parts.push(p);
    if (parts.length > 700) parts.splice(0, parts.length - 700);
    kick();
  }

  function kick() {
    if (!raf) {
      last = performance.now();
      raf = requestAnimationFrame(frame);
    }
  }

  function frame(now: number) {
    const dt = Math.min(now - last, 48);
    last = now;
    const f = dt / 16.67;
    ctx.clearRect(0, 0, w, h);

    for (let i = parts.length - 1; i >= 0; i--) {
      const p = parts[i];
      p.life -= dt;
      if (p.life <= 0) { parts.splice(i, 1); continue; }
      p.x += p.vx * f;
      p.y += p.vy * f;
      p.vy += p.grav * f;
      const d = Math.pow(p.drag, f);
      p.vx *= d; p.vy *= d;
      p.rot += p.vr * f;
      draw(p);
    }

    if (flashes.length) {
      for (let i = flashes.length - 1; i >= 0; i--) {
        const fl = flashes[i];
        fl.life -= dt;
        if (fl.life <= 0) { flashes.splice(i, 1); continue; }
        const t = fl.life / fl.max;
        ctx.globalCompositeOperation = "lighter";
        ctx.globalAlpha = 1;
        ctx.fillStyle = rgba(fl.color, t * 0.5);
        ctx.fillRect(0, 0, w, h);
      }
    }

    ctx.globalAlpha = 1;
    ctx.globalCompositeOperation = "source-over";

    if (parts.length || flashes.length) {
      raf = requestAnimationFrame(frame);
    } else {
      raf = 0;
    }
  }

  function draw(p: Particle) {
    const t = p.life / p.max; // 1 → 0
    ctx.globalCompositeOperation = p.comp;
    switch (p.kind) {
      case "spark": {
        ctx.globalAlpha = Math.min(1, t * 1.4);
        ctx.strokeStyle = p.color;
        ctx.lineWidth = p.size;
        ctx.lineCap = "round";
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 12;
        const tail = 3.5;
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.x - p.vx * tail, p.y - p.vy * tail);
        ctx.stroke();
        ctx.shadowBlur = 0;
        break;
      }
      case "shard": {
        ctx.globalAlpha = Math.min(1, t * 1.3);
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 8;
        const s = p.size;
        ctx.beginPath();
        ctx.moveTo(0, -s);
        ctx.lineTo(s * 0.7, s);
        ctx.lineTo(-s * 0.7, s * 0.6);
        ctx.closePath();
        ctx.fill();
        ctx.shadowBlur = 0;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        break;
      }
      case "ring": {
        const e = 1 - t; // 0 → 1 확장
        const r = p.size * (0.15 + e * 0.95);
        ctx.globalAlpha = t * t;
        ctx.strokeStyle = p.color;
        ctx.lineWidth = Math.max(1, p.vr * t);
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 16;
        ctx.beginPath();
        ctx.arc(p.x, p.y, r, 0, TAU);
        ctx.stroke();
        ctx.shadowBlur = 0;
        break;
      }
      case "glow": {
        const r = p.size * (0.6 + (1 - t) * 0.8);
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, r);
        g.addColorStop(0, rgba(p.color, 0.55 * t));
        g.addColorStop(1, rgba(p.color, 0));
        ctx.globalAlpha = 1;
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(p.x, p.y, r, 0, TAU);
        ctx.fill();
        break;
      }
      case "beam": {
        const x2 = p.x2!, y2 = p.y2!;
        // 0~35% 그려지는 중, 이후 페이드
        const appear = Math.min(1, (1 - t) / 0.35);
        const fade = t < 0.65 ? t / 0.65 : 1;
        const hx = p.x + (x2 - p.x) * appear;
        const hy = p.y + (y2 - p.y) * appear;
        ctx.globalAlpha = fade;
        ctx.strokeStyle = p.color;
        ctx.lineWidth = p.size;
        ctx.lineCap = "round";
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 22;
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(hx, hy);
        ctx.stroke();
        // 밝은 헤드
        ctx.fillStyle = "#ffffff";
        ctx.shadowBlur = 26;
        ctx.beginPath();
        ctx.arc(hx, hy, p.size * 1.1, 0, TAU);
        ctx.fill();
        ctx.shadowBlur = 0;
        break;
      }
      case "bolt": {
        const x2 = p.x2!, y2 = p.y2!;
        const seg = 9;
        const dx = (x2 - p.x) / seg, dy = (y2 - p.y) / seg;
        const nx = -(y2 - p.y), ny = (x2 - p.x);
        const len = Math.hypot(nx, ny) || 1;
        const amp = 16;
        ctx.globalAlpha = (p.life % 60 < 30 ? 1 : 0.45) * Math.min(1, t * 1.6);
        ctx.strokeStyle = p.color;
        ctx.lineWidth = p.size;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 20;
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        for (let s = 1; s < seg; s++) {
          const off = (Math.sin((p.seed! + s) * 12.9898) * 43758.5453 % 1) - 0.5;
          const j = off * amp;
          ctx.lineTo(p.x + dx * s + (nx / len) * j, p.y + dy * s + (ny / len) * j);
        }
        ctx.lineTo(x2, y2);
        ctx.stroke();
        ctx.shadowBlur = 0;
        break;
      }
      case "text": {
        const appear = Math.min(1, (1 - t) / 0.18);
        const pop = appear < 1 ? 0.5 + appear * 0.7 : 1.2 - 0.2 * ((1 - t - 0.18) / 0.82);
        const alpha = t < 0.25 ? t / 0.25 : 1;
        ctx.globalAlpha = alpha;
        ctx.translate(p.x, p.y);
        ctx.scale(pop, pop);
        ctx.font = `900 ${p.size}px "Pretendard", system-ui, sans-serif`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.lineWidth = Math.max(3, p.size * 0.18);
        ctx.strokeStyle = "rgba(0,0,0,0.82)";
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 18;
        ctx.strokeText(p.text!, 0, 0);
        ctx.fillStyle = p.color;
        ctx.fillText(p.text!, 0, 0);
        ctx.shadowBlur = 0;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        break;
      }
    }
    ctx.globalAlpha = 1;
  }

  /* ── 스폰 헬퍼 ── */
  function sparks(x: number, y: number, color: string, count: number, speed: number) {
    const n = Math.round(count * density());
    for (let i = 0; i < n; i++) {
      const a = Math.random() * TAU;
      const v = speed * (0.4 + Math.random() * 0.9);
      push({
        kind: "spark", x, y,
        vx: Math.cos(a) * v, vy: Math.sin(a) * v,
        life: 360 + Math.random() * 360, max: 720,
        size: 1.5 + Math.random() * 2,
        color, rot: 0, vr: 0, grav: 0.06, drag: 0.9, comp: "lighter",
      });
    }
  }

  function shards(x: number, y: number, color: string, count: number, speed: number) {
    const n = Math.round(count * density());
    for (let i = 0; i < n; i++) {
      const a = Math.random() * TAU;
      const v = speed * (0.3 + Math.random() * 0.8);
      push({
        kind: "shard", x, y,
        vx: Math.cos(a) * v, vy: Math.sin(a) * v - 1.5,
        life: 500 + Math.random() * 400, max: 900,
        size: 2.5 + Math.random() * 3.5,
        color, rot: Math.random() * TAU, vr: (Math.random() - 0.5) * 0.5,
        grav: 0.22, drag: 0.96, comp: "source-over",
      });
    }
  }

  function ringAt(x: number, y: number, color: string, radius: number, width: number, life: number) {
    push({
      kind: "ring", x, y, vx: 0, vy: 0,
      life, max: life, size: radius, color,
      rot: 0, vr: width, grav: 0, drag: 1, comp: "lighter",
    });
  }

  function glowAt(x: number, y: number, color: string, size: number, life: number) {
    push({
      kind: "glow", x, y, vx: 0, vy: 0,
      life, max: life, size, color, rot: 0, vr: 0, grav: 0, drag: 1, comp: "lighter",
    });
  }

  const api: Engine = {
    impact(x, y, opts) {
      const color = opts?.color ?? "#00e5ff";
      const power = opts?.power ?? 1;
      glowAt(x, y, color, 70 * power, 260);
      ringAt(x, y, "#ffffff", 80 * power, 4 * power, 360);
      ringAt(x, y, color, 110 * power, 3 * power, 460);
      sparks(x, y, color, Math.round(16 * power), 6 * power);
      sparks(x, y, "#ffffff", Math.round(6 * power), 7.5 * power);
      shards(x, y, color, Math.round(7 * power), 4 * power);
    },
    beam(x1, y1, x2, y2, color = "#00e5ff") {
      push({
        kind: "beam", x: x1, y: y1, x2, y2,
        vx: 0, vy: 0, life: 280, max: 280, size: 4,
        color, rot: 0, vr: 0, grav: 0, drag: 1, comp: "lighter",
      });
      glowAt(x1, y1, color, 50, 220);
    },
    bolt(x1, y1, x2, y2, color = "#ff315f") {
      push({
        kind: "bolt", x: x1, y: y1, x2, y2,
        vx: 0, vy: 0, life: 300, max: 300, size: 2.5,
        color, rot: 0, vr: 0, grav: 0, drag: 1, comp: "lighter",
        seed: Math.random() * 1000,
      });
    },
    damageText(x, y, text, opts) {
      push({
        kind: "text", x, y: y - 6,
        vx: (Math.random() - 0.5) * 0.6, vy: -1.1,
        life: 1100, max: 1100,
        size: opts?.size ?? 30,
        color: opts?.color ?? "#ff5a78",
        text, rot: 0, vr: 0, grav: 0.012, drag: 0.98, comp: "source-over",
      });
    },
    charge(x, y, color = "#ffd400") {
      glowAt(x, y, color, 46, 420);
      ringAt(x, y, color, 46, 2.5, 460);
      for (let i = 0; i < Math.round(10 * density()); i++) {
        const a = Math.random() * TAU;
        const r = 34 + Math.random() * 14;
        push({
          kind: "spark",
          x: x + Math.cos(a) * r, y: y + Math.sin(a) * r,
          vx: -Math.cos(a) * 1.6, vy: -Math.sin(a) * 1.6,
          life: 360 + Math.random() * 200, max: 560,
          size: 1.5 + Math.random() * 1.5,
          color, rot: 0, vr: 0, grav: 0, drag: 0.95, comp: "lighter",
        });
      }
    },
    ring(x, y, color = "#ffd400", opts) {
      const p = opts?.power ?? 1;
      ringAt(x, y, color, 90 * p, 3 * p, 460);
    },
    ko(x, y) {
      glowAt(x, y, "#ffffff", 120, 320);
      glowAt(x, y, "#ff315f", 150, 420);
      ringAt(x, y, "#ffffff", 130, 6, 420);
      ringAt(x, y, "#ff315f", 190, 4, 560);
      ringAt(x, y, "#ffd400", 240, 3, 640);
      sparks(x, y, "#ff315f", 28, 9);
      sparks(x, y, "#ffffff", 16, 11);
      sparks(x, y, "#ffd400", 14, 8);
      shards(x, y, "#ff315f", 14, 6);
      this.damageText(x, y - 4, "K.O.", { color: "#ff315f", size: 46 });
    },
    victory(x, y) {
      glowAt(x, y, "#ffd400", 130, 480);
      ringAt(x, y, "#ffd400", 200, 5, 620);
      ringAt(x, y, "#00e5ff", 150, 4, 540);
      const colors = ["#ffd400", "#00e5ff", "#00ff95", "#ff2bd6"];
      for (let i = 0; i < Math.round(46 * density()); i++) {
        const a = -Math.PI / 2 + (Math.random() - 0.5) * Math.PI * 1.1;
        const v = 6 + Math.random() * 8;
        push({
          kind: "shard", x, y,
          vx: Math.cos(a) * v, vy: Math.sin(a) * v,
          life: 900 + Math.random() * 700, max: 1600,
          size: 3 + Math.random() * 4,
          color: colors[i % colors.length],
          rot: Math.random() * TAU, vr: (Math.random() - 0.5) * 0.6,
          grav: 0.16, drag: 0.985, comp: "source-over",
        });
      }
    },
    flash(color = "#ffffff", strength = 0.3) {
      flashes.push({ color, life: 260, max: 260 / Math.max(0.4, strength * 1.6) });
      kick();
    },
    destroy() {
      window.removeEventListener("resize", resize);
      if (raf) cancelAnimationFrame(raf);
      parts.length = 0;
      flashes.length = 0;
    },
  };

  return api;
}

const NOOP: BattleFXHandle = {
  impact() {}, beam() {}, bolt() {}, damageText() {},
  charge() {}, ring() {}, ko() {}, victory() {}, flash() {},
};

const BattleFX = forwardRef<BattleFXHandle>(function BattleFX(_props, ref) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const engineRef = useRef<Engine | null>(null);
  const reducedRef = useRef(false);

  useImperativeHandle(ref, () => ({
    impact: (...a) => engineRef.current?.impact(...a),
    beam: (...a) => engineRef.current?.beam(...a),
    bolt: (...a) => engineRef.current?.bolt(...a),
    damageText: (...a) => engineRef.current?.damageText(...a),
    charge: (...a) => engineRef.current?.charge(...a),
    ring: (...a) => engineRef.current?.ring(...a),
    ko: (...a) => engineRef.current?.ko(...a),
    victory: (...a) => engineRef.current?.victory(...a),
    flash: (...a) => engineRef.current?.flash(...a),
  }), []);

  useEffect(() => {
    reducedRef.current = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
    if (reducedRef.current || !canvasRef.current) {
      engineRef.current = NOOP as Engine;
      return;
    }
    const eng = createEngine(canvasRef.current);
    engineRef.current = eng;
    return () => eng.destroy();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 60,
      }}
    />
  );
});

export default BattleFX;
