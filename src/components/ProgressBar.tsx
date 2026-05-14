import { FC } from "react";

interface Props {
  value: number;
  max: number;
  label?: string;
}

export const ProgressBar: FC<Props> = ({ value, max, label }) => {
  const ratio = max === 0 ? 0 : Math.min(1, Math.max(0, value / max));
  const percent = Math.round(ratio * 100);
  return (
    <div className="w-full">
      <div className="flex items-center justify-between text-xs text-navy-700 mb-1.5">
        <span className="font-medium">{label ?? "진행률"}</span>
        <span className="font-semibold">
          {value} / {max} ({percent}%)
        </span>
      </div>
      <div className="h-2.5 rounded-full bg-navy-100 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-navy-500 to-purple-500"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
