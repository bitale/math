import { FC } from "react";
import { Route, SubjectConfig } from "../types";

interface Props {
  route: Route;
  subject: SubjectConfig;
  onNavigate: (route: Route) => void;
  onSubjectSelect: () => void;
  wrongCount: number;
}

export const Header: FC<Props> = ({
  route,
  subject,
  onNavigate,
  onSubjectSelect,
  wrongCount,
}) => {
  return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b border-navy-100">
      <div className="max-w-5xl mx-auto px-4 md:px-6 h-14 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => onNavigate({ name: "home" })}
            className="flex items-center gap-2"
          >
            <div
              className={`w-7 h-7 rounded-lg bg-gradient-to-br ${subject.color} grid place-items-center text-white font-bold text-sm`}
            >
              {subject.icon}
            </div>
            <span className="font-bold text-navy-900 hidden sm:inline">
              {subject.title}
            </span>
          </button>
          <button
            type="button"
            onClick={onSubjectSelect}
            className="ml-1 chip bg-navy-50 text-navy-600 hover:bg-navy-100 transition cursor-pointer"
          >
            {subject.subtitle} ▾
          </button>
        </div>
        <nav className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => onNavigate({ name: "curriculum" })}
            className={`btn-ghost ${
              route.name === "curriculum" ? "bg-navy-50" : ""
            }`}
          >
            커리큘럼
          </button>
          <button
            type="button"
            onClick={() => onNavigate({ name: "wrong-note" })}
            className={`btn-ghost relative ${
              route.name === "wrong-note" ? "bg-navy-50" : ""
            }`}
          >
            오답 노트
            {wrongCount > 0 && (
              <span className="ml-1.5 inline-flex items-center justify-center w-5 h-5 rounded-full bg-rose-500 text-white text-[10px] font-bold">
                {wrongCount}
              </span>
            )}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
