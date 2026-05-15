import { FC, Fragment, useMemo } from "react";
import katex from "katex";

interface Props {
  children: string;
  className?: string;
  /** 블록 모드. 단독 수식 카드 등에서 사용. */
  displayMode?: boolean;
}

interface Segment {
  type: "text" | "math";
  content: string;
  display: boolean;
}

/**
 * 문자열을 텍스트와 수식($...$, $$...$$, \(...\), \[...\])으로 토크나이즈.
 * 이스케이프 \$ 는 일반 $ 로 처리.
 */
function tokenize(input: string): Segment[] {
  const segments: Segment[] = [];
  let buffer = "";
  let i = 0;

  const pushText = () => {
    if (buffer.length > 0) {
      segments.push({ type: "text", content: buffer, display: false });
      buffer = "";
    }
  };

  while (i < input.length) {
    const ch = input[i];

    if (ch === "\\" && (input[i + 1] === "$" || input[i + 1] === "\\")) {
      buffer += input[i + 1];
      i += 2;
      continue;
    }

    if (ch === "$" && input[i + 1] === "$") {
      const end = input.indexOf("$$", i + 2);
      if (end === -1) {
        buffer += input.slice(i);
        i = input.length;
      } else {
        pushText();
        segments.push({
          type: "math",
          content: input.slice(i + 2, end),
          display: true,
        });
        i = end + 2;
      }
      continue;
    }

    if (ch === "$") {
      const end = input.indexOf("$", i + 1);
      if (end === -1) {
        buffer += input.slice(i);
        i = input.length;
      } else {
        pushText();
        segments.push({
          type: "math",
          content: input.slice(i + 1, end),
          display: false,
        });
        i = end + 1;
      }
      continue;
    }

    buffer += ch;
    i += 1;
  }

  pushText();
  return segments;
}

function renderMath(tex: string, display: boolean): string {
  try {
    return katex.renderToString(tex, {
      displayMode: display,
      throwOnError: false,
      strict: false,
      output: "html",
    });
  } catch (err) {
    console.warn("수식을 렌더링하지 못했습니다:", tex, err);
    return `<span class="text-rose-700">${tex}</span>`;
  }
}

export const MathText: FC<Props> = ({
  children,
  className,
  displayMode = false,
}) => {
  const html = useMemo(() => {
    // displayMode이면서 $가 없는 순수 LaTeX → 그대로 display 렌더링
    if (displayMode && !children.includes("$")) {
      return renderMath(children, true);
    }
    // $가 섞여 있거나 일반 텍스트 → 토크나이저로 처리
    const segments = tokenize(children);
    return segments
      .map((seg) => {
        if (seg.type === "math") {
          return renderMath(seg.content, seg.display);
        }
        return escapeHtml(seg.content);
      })
      .join("");
  }, [children, displayMode]);

  return (
    <span
      className={className}
      // KaTeX 출력은 신뢰 가능한 라이브러리 산출물.
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\n/g, "<br/>");
}

export default MathText;
