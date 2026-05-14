import { FC } from "react";
import { Lesson, Route } from "../types";
import ProgressBar from "./ProgressBar";
import MathText from "./MathText";

interface Props {
  lessons: Lesson[];
  completedIds: number[];
  lastLessonId: number | null;
  onNavigate: (route: Route) => void;
}

export const HomePage: FC<Props> = ({
  lessons,
  completedIds,
  lastLessonId,
  onNavigate,
}) => {
  const lastLesson = lessons.find((l) => l.id === lastLessonId);
  const startLessonId = lastLessonId ?? 1;

  return (
    <div className="max-w-5xl mx-auto px-4 md:px-6 py-10 md:py-16">
      <section className="text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-xs font-semibold">
          개념과 문제를 함께 배우는 수학 학습 앱
        </div>
        <h1 className="mt-4 text-3xl md:text-5xl font-extrabold text-navy-900 leading-tight">
          변화율에서 편미분방정식까지
        </h1>
        <p className="mt-4 text-base md:text-lg text-navy-700 max-w-2xl mx-auto leading-8">
          평균 변화율부터 편미분방정식까지, 32단계로 미적분의 큰 흐름을 차근차근
          이해해보세요. 각 단원은 오늘의 질문 → 직관 → 공식 → 예제 → 문제 →
          요약의 흐름으로 구성되어 있어요.
        </p>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            className="btn-primary"
            onClick={() =>
              onNavigate({ name: "lesson", lessonId: startLessonId })
            }
          >
            {lastLesson ? "이어서 학습하기" : "학습 시작하기"}
          </button>
          <button
            type="button"
            className="btn-secondary"
            onClick={() => onNavigate({ name: "curriculum" })}
          >
            커리큘럼 전체 보기
          </button>
        </div>
      </section>

      <section className="mt-12 grid md:grid-cols-3 gap-4">
        <div className="card p-5 md:col-span-2">
          <div className="text-sm font-semibold text-navy-700">
            전체 학습 진행률
          </div>
          <div className="mt-4">
            <ProgressBar
              value={completedIds.length}
              max={lessons.length}
              label="완료한 단원"
            />
          </div>
          <p className="mt-3 text-xs text-navy-600 leading-6">
            한 단원당 보통 15~25분 정도 걸려요. 매일 한 단원씩만 풀어도 한 달이면
            완주할 수 있어요.
          </p>
        </div>

        <div className="card p-5 flex flex-col">
          <div className="text-sm font-semibold text-navy-700">
            최근 학습 단원
          </div>
          {lastLesson ? (
            <>
              <div className="mt-2 text-lg font-bold text-navy-900">
                #{lastLesson.id}. {lastLesson.title}
              </div>
              <div className="mt-2 text-xs text-navy-600 line-clamp-3 leading-5">
                <MathText>{lastLesson.question}</MathText>
              </div>
              <button
                type="button"
                className="btn-secondary mt-auto"
                onClick={() =>
                  onNavigate({ name: "lesson", lessonId: lastLesson.id })
                }
              >
                이어서 학습
              </button>
            </>
          ) : (
            <p className="mt-2 text-sm text-navy-600 leading-6">
              아직 학습한 단원이 없어요. 1단원부터 천천히 시작해보세요.
            </p>
          )}
        </div>
      </section>

      <section className="mt-6 grid md:grid-cols-2 gap-4">
        <button
          type="button"
          onClick={() => onNavigate({ name: "wrong-note" })}
          className="card p-5 text-left hover:shadow-md transition"
        >
          <div className="text-sm font-semibold text-navy-700">
            📒 오답 노트 바로가기
          </div>
          <p className="mt-2 text-sm text-navy-600 leading-6">
            틀린 문제는 자동으로 기록돼요. 시간이 지나서 다시 풀어보면 개념이
            제대로 자리잡혔는지 확인할 수 있어요.
          </p>
        </button>
        <button
          type="button"
          onClick={() => onNavigate({ name: "curriculum" })}
          className="card p-5 text-left hover:shadow-md transition"
        >
          <div className="text-sm font-semibold text-navy-700">
            🗺 커리큘럼 개요
          </div>
          <p className="mt-2 text-sm text-navy-600 leading-6">
            함수와 그래프 → 변화율 → 미분 → 적분 → 급수 → 다변수 미적분 →
            미분방정식 → 편미분방정식까지의 흐름을 한눈에 볼 수 있어요.
          </p>
        </button>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-bold text-navy-900">학습 흐름</h2>
        <div className="mt-3 card p-5 prose-kor">
          <ol className="grid md:grid-cols-2 gap-x-6 gap-y-2 text-sm text-navy-800 list-decimal pl-5">
            <li>변화율 — 평균과 순간</li>
            <li>극한과 연속</li>
            <li>도함수와 미분 법칙</li>
            <li>접선·근사·최적화 등 미분의 응용</li>
            <li>부정·정적분과 미적분의 기본정리</li>
            <li>치환·부분적분과 적분 활용</li>
            <li>수열·급수, 테일러·푸리에</li>
            <li>다변수 함수와 편미분, 그래디언트</li>
            <li>중적분과 벡터장</li>
            <li>1계·2계·시스템 미분방정식</li>
            <li>편미분방정식 입문</li>
            <li>열·파동·라플라스 방정식</li>
          </ol>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
