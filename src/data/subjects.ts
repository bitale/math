import { SubjectConfig } from "../types";
import { analysisLessons } from "./lessons";
import { setTheoryLessons } from "./setTheoryLessons";

export const subjects: Record<string, SubjectConfig> = {
  analysis: {
    id: "analysis",
    title: "집합에서 편미분방정식까지",
    subtitle: "실해석학",
    description:
      "집합·논리·증명의 기초부터 편미분방정식까지, 실해석학의 큰 흐름을 차근차근 이해해보세요.",
    icon: "∂",
    color: "from-navy-700 to-purple-600",
    lessons: analysisLessons,
    flow: [
      "해석학의 기초 — 집합, 논리, 증명",
      "함수의 세계 — 다항·삼각·지수·로그",
      "변화율과 극한",
      "실수의 완비성 — 데데킨트 절단, 코시 수열",
      "ε-δ 정의, 연속함수의 성질(IVT, EVT)",
      "미분계수 → 도함수 → 미분법 증명",
      "연쇄법칙, 무리함수·유리함수 미적분",
      "미분의 응용 — 접선, 극값, 최적화",
      "적분 — 기본정리, 부분분수, 이상적분",
      "급수 — 수렴판정법, 멱급수, 테일러·푸리에",
      "선형대수 — 벡터, 행렬, 고윳값",
      "다변수 — 편미분, 중적분, 그린·스토크스",
      "미분방정식과 편미분방정식",
    ],
  },
  "set-theory": {
    id: "set-theory",
    title: "공리에서 무한까지",
    subtitle: "집합론",
    description:
      "집합의 기초부터 공리적 집합론까지, 집합론의 큰 흐름을 차근차근 이해해보세요.",
    icon: "∅",
    color: "from-emerald-700 to-teal-500",
    lessons: setTheoryLessons,
    flow: [
      "집합의 기초 — 원소, 표현",
      "논리의 기초 — 명제, 추론 규칙, 양화사",
      "폭발원리·배중률·공허한 참, 증명 전략",
      "부분집합, 멱집합",
      "집합의 연산 — 합·교·차·드모르간",
      "곱집합과 관계 — 동치관계, 순서관계",
      "함수 — 단사·전사·전단사, 합성",
      "자연수와 귀납법 — 페아노 공리",
      "집합의 크기와 대등, 무한과 가산성",
      "기수 — 정렬 순서, 서수, 초한 귀납법",
      "공리적 집합론 — ZFC, 선택 공리",
      "연속체 가설, 러셀의 역설",
      "부울 대수, 위상 공간, 현대적 발전",
    ],
  },
};

export const subjectList = Object.values(subjects);
