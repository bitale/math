import { FC, useMemo } from "react";
import MathText from "./MathText";

/* ── 블록 타입 ── */

type BlockType =
  | "definition"
  | "theorem"
  | "proof"
  | "note"
  | "warning"
  | "example";

interface ContentSegment {
  kind: "text";
  content: string;
}

interface ContentBlock {
  kind: "block";
  type: BlockType;
  title: string;
  content: string;
}

type ContentPart = ContentSegment | ContentBlock;

/* ── 블록별 스타일 설정 ── */

const blockStyles: Record<
  BlockType,
  {
    label: string;
    accent: string;
    bg: string;
    border: string;
    titleColor: string;
    textColor: string;
    icon: string;
  }
> = {
  definition: {
    label: "정의",
    accent: "border-l-blue-500",
    bg: "bg-blue-50/50",
    border: "border-blue-100",
    titleColor: "text-blue-800",
    textColor: "text-blue-900",
    icon: "Def",
  },
  theorem: {
    label: "정리",
    accent: "border-l-purple-500",
    bg: "bg-purple-50/50",
    border: "border-purple-100",
    titleColor: "text-purple-800",
    textColor: "text-purple-900",
    icon: "Thm",
  },
  proof: {
    label: "증명",
    accent: "border-l-emerald-500",
    bg: "bg-emerald-50/50",
    border: "border-emerald-100",
    titleColor: "text-emerald-800",
    textColor: "text-emerald-900",
    icon: "Pf",
  },
  note: {
    label: "참고",
    accent: "border-l-slate-400",
    bg: "bg-slate-50/50",
    border: "border-slate-100",
    titleColor: "text-slate-700",
    textColor: "text-slate-800",
    icon: "i",
  },
  warning: {
    label: "주의",
    accent: "border-l-rose-500",
    bg: "bg-rose-50/50",
    border: "border-rose-100",
    titleColor: "text-rose-800",
    textColor: "text-rose-900",
    icon: "!",
  },
  example: {
    label: "예시",
    accent: "border-l-amber-500",
    bg: "bg-amber-50/50",
    border: "border-amber-100",
    titleColor: "text-amber-800",
    textColor: "text-amber-900",
    icon: "Ex",
  },
};

/* ── 파서 ── */

const BLOCK_TYPES = Object.keys(blockStyles).join("|");
const BLOCK_RE = new RegExp(
  `:::(${BLOCK_TYPES})(?:\\[([^\\]]*?)\\])?\\n([\\s\\S]*?):::`,
  "g"
);

function parse(text: string): ContentPart[] {
  const parts: ContentPart[] = [];
  let lastIndex = 0;

  for (const m of text.matchAll(BLOCK_RE)) {
    const before = text.slice(lastIndex, m.index);
    if (before.trim()) {
      parts.push({ kind: "text", content: before });
    }

    parts.push({
      kind: "block",
      type: m[1] as BlockType,
      title: m[2] ?? "",
      content: m[3].trim(),
    });

    lastIndex = m.index! + m[0].length;
  }

  const after = text.slice(lastIndex);
  if (after.trim()) {
    parts.push({ kind: "text", content: after });
  }

  return parts;
}

/* ── 블록 카드 컴포넌트 ── */

const BlockCard: FC<{ block: ContentBlock }> = ({ block }) => {
  const s = blockStyles[block.type];
  const displayTitle = block.title || s.label;

  return (
    <div
      className={`my-4 rounded-xl border ${s.border} ${s.bg} border-l-4 ${s.accent} overflow-hidden`}
    >
      {/* 헤더 */}
      <div className={`px-4 pt-3 pb-1 flex items-center gap-2`}>
        <span
          className={`inline-flex items-center justify-center w-7 h-7 rounded-md text-xs font-bold ${s.bg} ${s.titleColor} border ${s.border}`}
        >
          {s.icon}
        </span>
        <span className={`text-sm font-bold ${s.titleColor} tracking-wide`}>
          {displayTitle}
        </span>
      </div>
      {/* 본문 */}
      <div className={`px-4 pb-4 text-[15px] ${s.textColor} leading-8`}>
        <MathText>{block.content}</MathText>
      </div>
      {/* 증명 끝 표시 */}
      {block.type === "proof" && (
        <div className="px-4 pb-3 text-right">
          <span className={`text-sm font-bold ${s.titleColor}`}>Q.E.D. ∎</span>
        </div>
      )}
    </div>
  );
};

/* ── 메인 컴포넌트 ── */

interface Props {
  children: string;
  className?: string;
}

export const RichContent: FC<Props> = ({ children, className }) => {
  const parts = useMemo(() => parse(children), [children]);

  // 블록이 없으면 기존 MathText 그대로
  if (parts.length === 1 && parts[0].kind === "text") {
    return <MathText className={className}>{children}</MathText>;
  }

  return (
    <div className={className}>
      {parts.map((part, i) =>
        part.kind === "text" ? (
          <MathText key={i}>{part.content}</MathText>
        ) : (
          <BlockCard key={i} block={part} />
        )
      )}
    </div>
  );
};

export default RichContent;
