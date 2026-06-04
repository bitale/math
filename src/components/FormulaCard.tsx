import { FC } from "react";
import MathText from "./MathText";

interface Props {
  title?: string;
  /**
   * 디스플레이 모드로 렌더링할 LaTeX 문자열.
   * 여러 줄을 분리하려면 \n 으로 구분 (각 줄을 독립된 디스플레이 수식으로 렌더링).
   */
  formula: string;
  note?: string;
}

export const FormulaCard: FC<Props> = ({ title = "공식", formula, note }) => {
  const lines = formula.split("\n").filter((line) => line.trim().length > 0);
  return (
    <div className="card p-5 bg-navy-50/60 border-navy-200">
      <div className="text-xs font-semibold text-navy-700 uppercase tracking-wider">
        {title}
      </div>
      <div className="mt-3 space-y-2 text-navy-900 overflow-x-auto">
        {lines.map((line, idx) => (
          <div key={idx} className="text-base md:text-lg">
            <MathText displayMode>{line}</MathText>
          </div>
        ))}
      </div>
      {note && (
        <p className="mt-3 text-sm text-navy-700 leading-7">{note}</p>
      )}
    </div>
  );
};

export default FormulaCard;
