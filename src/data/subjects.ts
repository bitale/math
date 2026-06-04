import { SubjectConfig } from "../types";
import { preschoolLessons } from "./preschool/index";
import { elementaryLessons } from "./elementary/index";
import { middleSchoolLessons } from "./middleSchool/index";
import { precalculusLessons } from "./precalculus/index";
import { calculus1Lessons } from "./calculus1/index";
import { calculus2Lessons } from "./calculus2/index";
import { linearAndVectorLessons } from "./linearAndVector/index";
import { multivariableLessons } from "./multivariable/index";
import { diffEqLessons } from "./diffEq/index";
import { realAnalysisCourse } from "./analysis/index";
import { setTheoryLessons } from "./setTheoryLessons/index";
import { algebraLessons } from "./algebraLessons/index";
import { complexAnalysisLessons } from "./complexAnalysis/index";

export const subjects: Record<string, SubjectConfig> = {
  preschool: {
    id: "preschool",
    title: "유아수학",
    subtitle: "5세부터 예비 초등학생까지",
    description:
      "수 세기, 크기 비교, 모양 알기부터 간단한 덧셈·뺄셈, 시계 읽기, 도형의 이름까지, 초등학교 입학 전에 꼭 알아야 할 수학의 첫걸음을 재미있게 배워요.",
    icon: "💿",
    color: "from-pink-400 to-rose-300",
    lessons: preschoolLessons,
    flow: [
      "5세 — 1~5 수 세기, 크기 비교, 모양(동그라미·세모·네모), 같은 것끼리 모으기, 규칙 찾기",
      "6세 — 10까지 수, 5 이하 덧셈·뺄셈, 위치와 방향, 짝 맞추기",
      "7세(예비초등) — 20까지 수, 10 이하 덧셈·뺄셈, 시계(정각), 도형 이름, 혼합 연산",
    ],
  },
  elementary: {
    id: "elementary",
    title: "초등수학",
    subtitle: "1학년부터 6학년까지",
    description:
      "수 세기와 덧뺄셈부터 분수·소수, 도형·넓이·부피, 비와 비율·경우의 수까지, 학년별로 차근차근 수학의 기초를 다져보세요.",
    icon: "123",
    color: "from-green-500 to-emerald-400",
    lessons: elementaryLessons,
    flow: [
      "1학년 — 9까지의 수, 한 자리 덧셈과 뺄셈, 여러 가지 모양, 비교하기",
      "2학년 — 세 자리 수, 두 자리 덧뺄셈, 곱셈 구구단, 길이 재기, 시계 읽기",
      "3학년 — 세 자리 연산, 곱셈·나눗셈, 분수 기초, 원과 평면도형",
      "4학년 — 큰 수, 여러 자리 곱셈·나눗셈, 분수 연산, 소수, 각도와 삼각형",
      "5학년 — 약수·배수, 약분·통분, 분수·소수의 곱셈, 다각형 넓이, 직육면체",
      "6학년 — 분수·소수 나눗셈, 비와 비율, 비례식, 원의 넓이, 경우의 수",
    ],
  },
  "middle-school": {
    id: "middle-school",
    title: "중학수학",
    subtitle: "집합에서 삼각비까지",
    description:
      "집합·소인수분해·정수·유리수·실수, 방정식·부등식·인수분해, 함수·일차함수·이차함수, 확률·통계, 도형·닮음·피타고라스·삼각비까지, 중학교 수학의 핵심을 주제별로 정리하세요.",
    icon: "x²",
    color: "from-lime-600 to-green-400",
    lessons: middleSchoolLessons,
    flow: [
      "1학년 — 집합, 소인수분해, 정수·유리수, 문자와 식, 일차방정식, 좌표평면, 기본 도형·작도·합동, 도수분포",
      "2학년 — 순환소수, 곱셈공식, 연립방정식, 부등식, 일차함수, 다각형·원, 입체도형, 닮음, 확률",
      "3학년 — 제곱근·실수, 인수분해, 이차방정식, 이차함수, 피타고라스, 삼각비, 원주각, 대표값·산포도",
    ],
  },
  precalculus: {
    id: "precalculus",
    title: "기초수학",
    subtitle: "인수분해에서 자연상수까지",
    description:
      "수의 체계, 곱셈공식·인수분해, 방정식에서 출발하여 다항·유리·지수·로그·삼각 함수의 성질과 공식을 익히고, 등차·등비수열과 수열의 극한을 거쳐 자연상수 $e$까지, 미적분학의 출발점이 되는 기초를 다져보세요.",
    icon: "f(x)",
    color: "from-sky-600 to-blue-400",
    lessons: precalculusLessons,
    flow: [
      "기초 개념 — 수의 체계, 곱셈공식·인수분해, 방정식·부등식, 좌표평면",
      "함수의 세계 — 다항·이차, 나머지정리·인수정리, 절대값·합성·역함수, 유리함수·점근선",
      "지수·로그 — 지수로그 계산, 지수함수와 로그함수",
      "삼각함수 — 정의·특수각, 덧셈정리, 배각·반각·합곱, 그래프, 역삼각함수, 삼각방정식",
      "수열과 자연상수 — 등차·등비수열, 수열의 극한, 자연상수 $e$",
      "이차곡선 — 포물선, 타원, 쌍곡선, 이심률",
      "경우의 수 — 순열과 조합, 이항정리",
    ],
  },
  "calculus-1": {
    id: "calculus-1",
    title: "미적분학 I",
    subtitle: "극한에서 미분까지",
    description:
      "함수의 극한·연속·변화율부터 미분의 정의·공식·응용까지, 미분법의 핵심 기술을 익혀보세요.",
    icon: "f'",
    color: "from-blue-700 to-indigo-500",
    lessons: calculus1Lessons,
    flow: [
      "함수의 극한 — 기본 법칙, 부정형, 삼각함수, 무한대, 로피탈의 법칙",
      "연속, 평균 변화율, 순간 변화율",
      "미분 — 정의, 공식 유도, 연쇄법칙, 곱·몫, 역삼각함수",
      "미분의 응용 — 접선, 극값, 최적화, 관련 변화율",
    ],
  },
  "calculus-2": {
    id: "calculus-2",
    title: "미적분학 II",
    subtitle: "적분에서 급수까지",
    description:
      "부정적분·정적분·치환·부분적분부터 급수의 수렴판정과 테일러·푸리에 급수까지, 적분과 급수의 핵심을 다져보세요.",
    icon: "∫",
    color: "from-indigo-700 to-violet-500",
    lessons: calculus2Lessons,
    flow: [
      "적분 — 부정적분, 치환, 삼각함수 적분, 삼각치환, 부분적분, 부분분수, 호의 길이·회전체, 매개변수·극좌표",
      "급수 — 유한합, 등비급수, 수렴판정법, 교대급수",
      "멱급수, 테일러, 푸리에",
    ],
  },
  "linear-vector": {
    id: "linear-vector",
    title: "선형대수",
    subtitle: "벡터에서 조르당까지",
    description:
      "벡터·행렬·행렬식부터 고윳값·대각화·조르당 표준형까지, 선형대수의 핵심을 익혀보세요.",
    icon: "\u2192",
    color: "from-teal-600 to-cyan-500",
    lessons: linearAndVectorLessons,
    flow: [
      "벡터와 행렬 — 기초, 내적, 행렬 연산, 선형변환",
      "벡터 공간 — 부분공간, 기저, 차원, 행공간·열공간",
      "고윳값과 대각화 — 특성다항식, 케일리-해밀턴, 스펙트럼 정리",
      "심화 — 동형정리, 조르당 표준형, 쌍대공간, 이차형식",
    ],
  },
  multivariable: {
    id: "multivariable",
    title: "다변수 미적분",
    subtitle: "편미분에서 스토크스까지",
    description:
      "다변수 함수·편미분·전미분부터 중적분·좌표변환·벡터장·선적분·면적분·그린·스토크스 정리까지, 다변수 미적분의 핵심을 익혀보세요.",
    icon: "∇",
    color: "from-cyan-600 to-teal-400",
    lessons: multivariableLessons,
    flow: [
      "미분 — 편미분, 전미분·연쇄법칙, 그래디언트, 극값·라그랑주",
      "적분 — 중적분, 삼중적분, 좌표변환·야코비안",
      "벡터 미적분 — 벡터장, 선적분·그린, 면적분, 미분형식·외미분, 발산·스토크스",
    ],
  },
  "diff-eq": {
    id: "diff-eq",
    title: "미분방정식",
    subtitle: "ODE에서 PDE까지",
    description:
      "1계·2계 상미분방정식부터 미분방정식 시스템, 편미분방정식까지, 변화를 모델링하는 도구를 익혀보세요.",
    icon: "dy",
    color: "from-orange-600 to-red-500",
    lessons: diffEqLessons,
    flow: [
      "미분방정식 입문, 미분형식·전미분",
      "1계 ODE — 변수분리, 적분인자, 완전미분, 불완전 적분인자, 베르누이·동차",
      "2계 ODE, 라플라스 변환, 연립·고계",
      "적분변환 — 푸리에 급수·변환 (라플라스의 허수축 버전), 합성곱, 불확정성 원리, PDE 응용",
      "PDE — 분류, 변수분리법, 열·파동·라플라스 방정식",
      "비제차 PDE와 스튜름-리우빌",
      "분산형 PDE 기초 — 조화해석학, 리틀우드-페일리, 진동적분, 스트리하르츠 추정",
      "분산형 PDE 심화 — 부르갱 $X^{s,b}$ 공간, 집중-콤팩트성, 에너지 임계 전역 적정성·산란",
    ],
  },
  "real-analysis": {
    id: "real-analysis",
    title: "실해석학",
    subtitle: "ε-δ에서 르베그까지",
    description:
      "실수의 구성부터 측도론까지, 엄밀한 증명으로 해석학의 기초를 다져보세요.",
    icon: "ε",
    color: "from-navy-700 to-purple-600",
    lessons: realAnalysisCourse,
    flow: [
      "해석학의 기초 — 집합, 논리, 증명",
      "실수의 완비성 — 데데킨트 절단, 코시 수열",
      "ε-δ 정의, 극한 법칙의 엄밀한 증명",
      "연속함수의 성질 — IVT, EVT",
      "볼차노-바이어슈트라스, 하이네-보렐, 균일연속성",
      "미분의 엄밀한 기초 — 롤, MVT, FTC 증명",
      "리만 적분의 엄밀한 정의, 적분가능성",
      "급수 수렴의 엄밀한 기초, 함수열의 균등 수렴",
      "측도론과 르베그 적분",
    ],
  },
  "set-theory": {
    id: "set-theory",
    title: "집합론",
    subtitle: "공리에서 무한까지",
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
      "집합의 연산 — 합·교·차·드모르간, 집합족",
      "곱집합과 관계 — 동치관계, 순서관계, 상한·하한",
      "함수 — 단사·전사·전단사, 합성",
      "자연수와 귀납법 — 페아노 공리",
      "집합의 크기와 대등, 무한과 가산성",
      "기수 — 정렬 순서, 서수, 초한 귀납법",
      "공리적 집합론 — ZFC, 선택 공리, AC·WOT·HMP·Zorn 동치",
      "연속체 가설, 러셀의 역설",
      "부울 대수, 위상 공간, 현대적 발전",
    ],
  },
  algebra: {
    id: "algebra",
    title: "대수학",
    subtitle: "마그마에서 갈루아까지",
    description:
      "이항연산부터 군·환·체, 갈루아 이론까지 대수적 구조의 세계를 차근차근 탐험해보세요.",
    icon: "⊗",
    color: "from-amber-700 to-orange-500",
    lessons: algebraLessons,
    flow: [
      "대수적 구조의 기초 — 이항연산, 마그마, 반군, 모노이드, 좌·우 항등원/역원",
      "군론 — 군, 아벨군, 소거법칙, 부분군",
      "순환군, 잉여류, 라그랑주 정리",
      "정규부분군, 몫군, 준동형과 동형 정리",
      "환론 — 환, 정역, 이데알, 몫환",
      "체론 — 체, 다항식환, 기약다항식",
      "갈루아 이론 입문",
    ],
  },
  "complex-analysis": {
    id: "complex-analysis",
    title: "복소해석학",
    subtitle: "코시에서 리만 곡면까지",
    description:
      "복소수의 대수와 기하부터 코시 정리, 유수 정리, 등각사상, 해석접속과 리만 곡면까지, 복소해석학의 아름다운 세계를 탐험해보세요.",
    icon: "ℂ",
    color: "from-rose-700 to-pink-500",
    lessons: complexAnalysisLessons,
    flow: [
      "복소수의 기초 — 대수, 기하, 극형식, 드무아브르",
      "복소함수 — 정의, 초등함수, 수열과 급수",
      "해석함수 — 복소미분, 코시-리만, 다가함수와 가지",
      "복소적분 — 경로적분, 코시 정리, 리우빌·최대절대값 원리",
      "급수와 특이점 — 로랑 급수, 특이점 분류, 유수 정리",
      "심화 — 편각원리, 조화함수, 등각사상",
      "해석접속과 리만 곡면, 전체함수와 유리형함수",
    ],
  },
};

export const subjectList = Object.values(subjects);
