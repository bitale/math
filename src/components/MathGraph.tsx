import { FC, useId, useMemo } from "react";
import { GraphConfig } from "../types";

/* ─────────── 상수 ─────────── */
const W = 500;
const H = 360;
const PAD = { l: 50, r: 20, t: 24, b: 38 };
const PW = W - PAD.l - PAD.r;   // plot width
const PH = H - PAD.t - PAD.b;   // plot height

const PALETTE = [
  "#6366f1", "#ef4444", "#10b981", "#f59e0b",
  "#8b5cf6", "#ec4899", "#0ea5e9", "#f97316",
];

/* ─────────── 수식 → JS 변환 ─────────── */
function mathToJs(expr: string): string {
  return expr
    .replace(/\barcsin\b/g, "Math.asin")
    .replace(/\barccos\b/g, "Math.acos")
    .replace(/\barctan\b/g, "Math.atan")
    .replace(/\bsqrt\b/g, "Math.sqrt")
    .replace(/\babs\b/g, "Math.abs")
    .replace(/\bln\b/g, "Math.log")
    .replace(/\blog10\b/g, "Math.log10")
    .replace(/\blog\b/g, "Math.log")
    .replace(/\bexp\b/g, "Math.exp")
    .replace(/\bsin\b/g, "Math.sin")
    .replace(/\bcos\b/g, "Math.cos")
    .replace(/\btan\b/g, "Math.tan")
    .replace(/\bsec\b/g, "(1/Math.cos)")
    .replace(/\bcsc\b/g, "(1/Math.sin)")
    .replace(/\bpi\b/gi, "Math.PI")
    .replace(/\bPI\b/g, "Math.PI")
    .replace(/(?<![.])\bE\b/g, "Math.E")
    .replace(/\^/g, "**");
}

function makeEvaluator(expr: string): (x: number) => number {
  const js = mathToJs(expr);
  try {
    // eslint-disable-next-line no-new-func
    return new Function("x", `"use strict"; return (${js});`) as (x: number) => number;
  } catch {
    return () => NaN;
  }
}

/* ─────────── 좌표 변환 ─────────── */
function mapX(x: number, xMin: number, xMax: number): number {
  return PAD.l + ((x - xMin) / (xMax - xMin)) * PW;
}
function mapY(y: number, yMin: number, yMax: number): number {
  return PAD.t + PH - ((y - yMin) / (yMax - yMin)) * PH;
}

/* ─────────── 눈금 계산 ─────────── */
function niceStep(range: number): number {
  const rough = range / 6;
  const mag = Math.pow(10, Math.floor(Math.log10(rough)));
  const norm = rough / mag;
  if (norm < 1.5) return mag;
  if (norm < 3.5) return 2 * mag;
  if (norm < 7.5) return 5 * mag;
  return 10 * mag;
}

function ticks(min: number, max: number, step: number): number[] {
  const arr: number[] = [];
  const start = Math.ceil(min / step) * step;
  for (let v = start; v <= max + step * 0.01; v += step) {
    const rounded = Math.round(v * 1e10) / 1e10;
    arr.push(rounded);
  }
  return arr;
}

/* 깔끔한 숫자 표시 */
function fmtNum(n: number): string {
  if (n === 0) return "0";
  const s = Number(n.toPrecision(4)).toString();
  return s;
}

/* ─────────── 함수 경로 생성 ─────────── */
interface PathSegment { d: string; }

function functionPath(
  fn: (x: number) => number,
  xMin: number, xMax: number,
  yMin: number, yMax: number,
  domain?: [number, number],
): PathSegment[] {
  const segments: PathSegment[] = [];
  const lo = domain ? Math.max(domain[0], xMin) : xMin;
  const hi = domain ? Math.min(domain[1], xMax) : xMax;
  const N = 400;
  const dx = (hi - lo) / N;
  let path = "";
  let drawing = false;

  for (let i = 0; i <= N; i++) {
    const x = lo + i * dx;
    const y = fn(x);
    if (!isFinite(y) || Math.abs(y) > 1e6) {
      if (drawing) {
        segments.push({ d: path });
        path = "";
        drawing = false;
      }
      continue;
    }
    // 범위 밖이어도 그리되, 점프 감지
    const sx = mapX(x, xMin, xMax);
    const sy = mapY(y, yMin, yMax);

    if (!drawing) {
      path = `M${sx.toFixed(2)},${sy.toFixed(2)}`;
      drawing = true;
    } else {
      path += ` L${sx.toFixed(2)},${sy.toFixed(2)}`;
    }
  }
  if (drawing) segments.push({ d: path });
  return segments;
}

/* ─────────── 영역(면적) 경로 ─────────── */
function regionPath(
  fnTop: (x: number) => number,
  fnBot: (x: number) => number,
  from: number, to: number,
  xMin: number, xMax: number,
  yMin: number, yMax: number,
): string {
  const N = 200;
  const lo = Math.max(from, xMin);
  const hi = Math.min(to, xMax);
  const dx = (hi - lo) / N;
  let top = "";
  let bot = "";

  for (let i = 0; i <= N; i++) {
    const x = lo + i * dx;
    const yT = fnTop(x);
    const yB = fnBot(x);
    const sx = mapX(x, xMin, xMax);
    const syT = mapY(isFinite(yT) ? yT : 0, yMin, yMax);
    const syB = mapY(isFinite(yB) ? yB : 0, yMin, yMax);
    const cmd = i === 0 ? "M" : "L";
    top += `${cmd}${sx.toFixed(2)},${syT.toFixed(2)} `;
    bot = `L${sx.toFixed(2)},${syB.toFixed(2)} ` + bot;
  }
  // bot의 첫 L을 M으로 바꾸지 않고 연결
  return top + bot + "Z";
}

/* ─────────── 메인 컴포넌트 ─────────── */
interface Props {
  config: GraphConfig;
}

export const MathGraph: FC<Props> = ({ config }) => {
  const clipId = useId();

  const xRange = config.xRange ?? [-5, 5];
  const yRange = config.yRange ?? [-5, 5];
  const [xMin, xMax] = xRange;
  const [yMin, yMax] = yRange;
  const step = config.gridStep ?? niceStep(Math.max(xMax - xMin, yMax - yMin));

  const xTicks = useMemo(() => ticks(xMin, xMax, step), [xMin, xMax, step]);
  const yTicks = useMemo(() => ticks(yMin, yMax, step), [yMin, yMax, step]);

  /* 원점 위치 */
  const ox = mapX(0, xMin, xMax);
  const oy = mapY(0, yMin, yMax);
  const showXAxis = yMin <= 0 && yMax >= 0;
  const showYAxis = xMin <= 0 && xMax >= 0;

  return (
    <div className="my-4">
      {config.title && (
        <div className="text-sm font-semibold text-navy-700 mb-2">{config.title}</div>
      )}
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="w-full h-auto"
          style={{ maxHeight: 400 }}
        >
          <defs>
            <clipPath id={clipId}>
              <rect x={PAD.l} y={PAD.t} width={PW} height={PH} />
            </clipPath>
          </defs>

          {/* ── 배경 ── */}
          <rect x={PAD.l} y={PAD.t} width={PW} height={PH} fill="#fafbff" />

          {/* ── 격자선 ── */}
          <g stroke="#e2e8f0" strokeWidth={0.5}>
            {xTicks.map((v) => {
              const sx = mapX(v, xMin, xMax);
              return <line key={`gx${v}`} x1={sx} y1={PAD.t} x2={sx} y2={PAD.t + PH} />;
            })}
            {yTicks.map((v) => {
              const sy = mapY(v, yMin, yMax);
              return <line key={`gy${v}`} x1={PAD.l} y1={sy} x2={PAD.l + PW} y2={sy} />;
            })}
          </g>

          {/* ── 축 ── */}
          <g stroke="#475569" strokeWidth={1.2}>
            {showXAxis && (
              <line x1={PAD.l} y1={oy} x2={PAD.l + PW} y2={oy} markerEnd="url(#arr)" />
            )}
            {showYAxis && (
              <line x1={ox} y1={PAD.t + PH} x2={ox} y2={PAD.t} markerEnd="url(#arr)" />
            )}
          </g>

          {/* ── 축 눈금 라벨 ── */}
          <g fontSize={10} fill="#64748b" textAnchor="middle" dominantBaseline="hanging">
            {xTicks.filter((v) => v !== 0).map((v) => {
              const sx = mapX(v, xMin, xMax);
              const ly = showXAxis ? Math.min(oy + 4, PAD.t + PH + 2) : PAD.t + PH + 4;
              return <text key={`lx${v}`} x={sx} y={ly}>{fmtNum(v)}</text>;
            })}
          </g>
          <g fontSize={10} fill="#64748b" textAnchor="end" dominantBaseline="central">
            {yTicks.filter((v) => v !== 0).map((v) => {
              const sy = mapY(v, yMin, yMax);
              const lx = showYAxis ? Math.max(ox - 6, PAD.l - 4) : PAD.l - 4;
              return <text key={`ly${v}`} x={lx} y={sy}>{fmtNum(v)}</text>;
            })}
          </g>
          {(showXAxis && showYAxis) && (
            <text x={ox - 8} y={oy + 12} fontSize={10} fill="#64748b">0</text>
          )}

          {/* ── 축 라벨 ── */}
          {config.xLabel && (
            <text x={PAD.l + PW + 4} y={showXAxis ? oy + 2 : PAD.t + PH + 14}
              fontSize={12} fill="#334155" dominantBaseline="central">{config.xLabel}</text>
          )}
          {config.yLabel && (
            <text x={showYAxis ? ox + 8 : PAD.l} y={PAD.t - 6}
              fontSize={12} fill="#334155">{config.yLabel}</text>
          )}

          {/* ── 클리핑 영역 내부 ── */}
          <g clipPath={`url(#${clipId})`}>
            {/* 색칠 영역 */}
            {config.regions?.map((r, i) => {
              const fnT = makeEvaluator(r.fn);
              const fnB = r.fn2 ? makeEvaluator(r.fn2) : () => 0;
              const d = regionPath(fnT, fnB, r.from, r.to, xMin, xMax, yMin, yMax);
              return (
                <path key={`r${i}`} d={d}
                  fill={r.color ?? "rgba(99,102,241,0.18)"}
                  stroke="none" />
              );
            })}

            {/* 도형 */}
            {config.shapes?.map((s, i) => {
              const cx = mapX(s.cx, xMin, xMax);
              const cy = mapY(s.cy, yMin, yMax);
              const rx = (s.rx / (xMax - xMin)) * PW;
              const ry = ((s.ry ?? s.rx) / (yMax - yMin)) * PH;
              return (
                <ellipse key={`s${i}`} cx={cx} cy={cy} rx={rx} ry={ry}
                  fill={s.fill ?? "none"} stroke={s.color ?? PALETTE[i % PALETTE.length]}
                  strokeWidth={1.8} />
              );
            })}

            {/* 직선 */}
            {config.lines?.map((l, i) => (
              <line key={`l${i}`}
                x1={mapX(l.from[0], xMin, xMax)} y1={mapY(l.from[1], yMin, yMax)}
                x2={mapX(l.to[0], xMin, xMax)} y2={mapY(l.to[1], yMin, yMax)}
                stroke={l.color ?? "#94a3b8"} strokeWidth={1.4}
                strokeDasharray={l.dashed ? "6 4" : undefined} />
            ))}

            {/* 함수 곡선 */}
            {config.functions?.map((f, i) => {
              const fn = makeEvaluator(f.expr);
              const segs = functionPath(fn, xMin, xMax, yMin, yMax, f.domain);
              const col = f.color ?? PALETTE[i % PALETTE.length];
              return segs.map((seg, j) => (
                <path key={`f${i}-${j}`} d={seg.d}
                  fill="none" stroke={col} strokeWidth={2.2}
                  strokeDasharray={f.dashed ? "8 5" : undefined}
                  strokeLinecap="round" strokeLinejoin="round" />
              ));
            })}

            {/* 좌표점 */}
            {config.points?.map((p, i) => {
              const cx = mapX(p.x, xMin, xMax);
              const cy = mapY(p.y, yMin, yMax);
              const col = p.color ?? PALETTE[0];
              return (
                <g key={`p${i}`}>
                  <circle cx={cx} cy={cy} r={4.5}
                    fill={p.hollow ? "#fff" : col}
                    stroke={col} strokeWidth={2} />
                </g>
              );
            })}
          </g>

          {/* ── 점 라벨 (클리핑 밖) ── */}
          {config.points?.map((p, i) => {
            if (!p.label) return null;
            const cx = mapX(p.x, xMin, xMax);
            const cy = mapY(p.y, yMin, yMax);
            return (
              <text key={`pl${i}`} x={cx + 8} y={cy - 8}
                fontSize={11} fill={p.color ?? PALETTE[0]} fontWeight={600}>
                {p.label}
              </text>
            );
          })}

          {/* ── 직선 라벨 ── */}
          {config.lines?.map((l, i) => {
            if (!l.label) return null;
            const mx = (mapX(l.from[0], xMin, xMax) + mapX(l.to[0], xMin, xMax)) / 2;
            const my = (mapY(l.from[1], yMin, yMax) + mapY(l.to[1], yMin, yMax)) / 2;
            return (
              <text key={`ll${i}`} x={mx + 6} y={my - 6}
                fontSize={11} fill={l.color ?? "#64748b"} fontWeight={500}>
                {l.label}
              </text>
            );
          })}

          {/* ── 함수 라벨 ── */}
          {config.functions?.map((f, i) => {
            if (!f.label) return null;
            const fn = makeEvaluator(f.expr);
            const dom = f.domain ?? [xMin, xMax];
            const labelX = dom[1] - (dom[1] - dom[0]) * 0.15;
            const labelY = fn(labelX);
            if (!isFinite(labelY)) return null;
            const sx = mapX(labelX, xMin, xMax);
            const sy = mapY(labelY, yMin, yMax);
            const col = f.color ?? PALETTE[i % PALETTE.length];
            return (
              <text key={`fl${i}`} x={sx + 6} y={sy - 8}
                fontSize={12} fill={col} fontWeight={600}>
                {f.label}
              </text>
            );
          })}

          {/* ── 주석 ── */}
          {config.annotations?.map((a, i) => (
            <text key={`a${i}`}
              x={mapX(a.x, xMin, xMax)} y={mapY(a.y, yMin, yMax)}
              fontSize={12} fill={a.color ?? "#334155"} fontWeight={500}
              textAnchor="middle" dominantBaseline="central">
              {a.text}
            </text>
          ))}
        </svg>
      </div>
    </div>
  );
};

export default MathGraph;
