import { FC } from "react";

interface Props {
  hints: string[];
  revealed: number;
  onReveal: () => void;
}

export const HintBox: FC<Props> = ({ hints, revealed, onReveal }) => {
  const canReveal = revealed < hints.length;
  return (
    <div className="card p-4 bg-purple-50/50 border-purple-200">
      <div className="flex items-center justify-between">
        <div className="text-sm font-semibold text-purple-900">
          힌트 ({revealed} / {hints.length} 단계)
        </div>
        <button
          type="button"
          onClick={onReveal}
          disabled={!canReveal}
          className="btn-ghost text-purple-700 disabled:opacity-50"
        >
          {canReveal ? "힌트 1단계 더 보기" : "모든 힌트 공개됨"}
        </button>
      </div>
      <ol className="mt-3 space-y-2 text-sm text-purple-900 leading-7 list-decimal pl-5">
        {hints.slice(0, revealed).map((hint, idx) => (
          <li key={idx}>{hint}</li>
        ))}
        {revealed === 0 && (
          <p className="text-purple-700/70 italic">
            아직 공개된 힌트가 없습니다. 버튼을 눌러 1단계부터 확인해보세요.
          </p>
        )}
      </ol>
    </div>
  );
};

export default HintBox;
