import { FC } from "react";

interface Props {
  onInsert: (text: string) => void;
  level?: "elementary" | "middle" | "advanced";
}

const SYMBOL_GROUPS = {
  basic: [
    { label: "분수", insert: "/", desc: "a/b" },
    { label: "√", insert: "√", desc: "제곱근" },
    { label: "π", insert: "π", desc: "파이" },
    { label: "±", insert: "±", desc: "플러스마이너스" },
    { label: "²", insert: "²", desc: "제곱" },
    { label: "³", insert: "³", desc: "세제곱" },
  ],
  comparison: [
    { label: "≤", insert: "≤", desc: "이하" },
    { label: "≥", insert: "≥", desc: "이상" },
    { label: "≠", insert: "≠", desc: "같지 않다" },
    { label: "≈", insert: "≈", desc: "약" },
    { label: "∞", insert: "∞", desc: "무한" },
  ],
  sets: [
    { label: "{ }", insert: "{}", desc: "집합" },
    { label: "∈", insert: "∈", desc: "원소" },
    { label: "∉", insert: "∉", desc: "원소 아님" },
    { label: "⊂", insert: "⊂", desc: "부분집합" },
    { label: "∪", insert: "∪", desc: "합집합" },
    { label: "∩", insert: "∩", desc: "교집합" },
    { label: "∅", insert: "∅", desc: "공집합" },
  ],
  greek: [
    { label: "α", insert: "α", desc: "알파" },
    { label: "β", insert: "β", desc: "베타" },
    { label: "θ", insert: "θ", desc: "세타" },
    { label: "λ", insert: "λ", desc: "람다" },
    { label: "σ", insert: "σ", desc: "시그마" },
    { label: "ω", insert: "ω", desc: "오메가" },
  ],
  advanced: [
    { label: "∂", insert: "∂", desc: "편미분" },
    { label: "∇", insert: "∇", desc: "나블라" },
    { label: "∫", insert: "∫", desc: "적분" },
    { label: "Σ", insert: "Σ", desc: "합" },
    { label: "→", insert: "→", desc: "화살표" },
    { label: "⇒", insert: "⇒", desc: "함의" },
    { label: "∀", insert: "∀", desc: "임의의" },
    { label: "∃", insert: "∃", desc: "존재" },
  ],
};

export const MathKeyboard: FC<Props> = ({ onInsert, level = "advanced" }) => {
  const groups: (keyof typeof SYMBOL_GROUPS)[] =
    level === "elementary"
      ? ["basic"]
      : level === "middle"
        ? ["basic", "comparison", "sets"]
        : ["basic", "comparison", "sets", "greek", "advanced"];

  return (
    <div className="flex flex-wrap gap-1 py-2">
      {groups.map((group) =>
        SYMBOL_GROUPS[group].map((sym) => (
          <button
            key={sym.label}
            type="button"
            onClick={() => onInsert(sym.insert)}
            title={sym.desc}
            className="px-2.5 py-1.5 rounded-lg border border-navy-200 bg-white hover:bg-navy-50
                       text-sm font-mono text-navy-800 transition active:scale-95 min-w-[36px]"
          >
            {sym.label}
          </button>
        ))
      )}
    </div>
  );
};

export default MathKeyboard;
