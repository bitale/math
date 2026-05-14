import { FC } from "react";

interface Props {
  status: "idle" | "correct" | "wrong";
  message?: string;
}

export const AnswerFeedback: FC<Props> = ({ status, message }) => {
  if (status === "idle") return null;

  const isCorrect = status === "correct";
  const colorClasses = isCorrect
    ? "bg-emerald-50 border-emerald-200 text-emerald-800"
    : "bg-rose-50 border-rose-200 text-rose-800";

  return (
    <div className={`card border ${colorClasses} p-4`}>
      <div className="font-semibold">
        {isCorrect ? "정답입니다 ✅" : "오답입니다 ❌"}
      </div>
      {message && <p className="mt-1 text-sm leading-6">{message}</p>}
    </div>
  );
};

export default AnswerFeedback;
