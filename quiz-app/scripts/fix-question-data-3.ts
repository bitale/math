import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

type Replacement = {
  file: string;
  from: string;
  to: string;
};

const dataRoot = "C:/Users/USER/Desktop/project/math/src/data";

const replacements: Replacement[] = [
  {
    file: "calculus1/limits.ts",
    from: String.raw`      "hints": [
        "이 함수는 연속이므로 그냥 대입하면 됩니다."
      ],
      "explanation": "다항함수는 모든 점에서 연속이므로 $x = 3$ 을 그대로 대입하면 $7$.",`,
    to: String.raw`      "hints": [
        "다항함수는 모든 실수에서 연속입니다.",
        "$x = 3$을 식 $2x+1$에 그대로 대입하세요."
      ],
      "explanation": "다항함수는 모든 점에서 연속이므로 극한값은 함수값과 같습니다. 따라서 $2\\cdot 3 + 1 = 7$입니다.",`,
  },
  {
    file: "calculus2/series.ts",
    from: String.raw`      "hints": [
        "푸리에 급수는 주기함수에 적용됩니다."
      ],
      "explanation": "푸리에 급수의 기본 형태는 주기함수를 대상으로 합니다. 비주기함수의 경우 푸리에 변환을 사용합니다.",`,
    to: String.raw`      "hints": [
        "푸리에 급수는 주기함수에 적용됩니다.",
        "불연속점이 있더라도 조각마다 매끄러운 함수이면 기본 이론을 적용할 수 있습니다."
      ],
      "explanation": "푸리에 급수의 기본 형태는 주기적이고 조각마다 매끄러운 함수를 사인과 코사인 급수로 표현하는 것입니다. 비주기 함수는 보통 푸리에 변환을 사용합니다.",`,
  },
  {
    file: "calculus2/integration.ts",
    from: String.raw`      "hints": [
        "가로 $\\times$ 세로 의 직사각형 넓이."
      ],
      "explanation": "$4 \\times 3 = 12$.",`,
    to: String.raw`      "hints": [
        "상수함수 $f(x)=3$의 그래프 아래 넓이를 구합니다.",
        "구간 길이는 $4-0=4$이고 높이는 $3$입니다."
      ],
      "explanation": "$\\int_0^4 3\\,dx$는 높이 $3$, 밑변 $4$인 직사각형의 넓이입니다. 따라서 $3\\times 4=12$입니다.",`,
  },
  {
    file: "calculus2/integration.ts",
    from: String.raw`      "explanation": "$\\dfrac{9}{3} = 3$.",`,
    to: String.raw`      "explanation": "함수의 평균값은 $\\dfrac{1}{3-0}\\int_0^3 x^2\\,dx$입니다. $\\int_0^3 x^2\\,dx = 9$이므로 평균값은 $\\dfrac{9}{3}=3$입니다.",`,
  },
  {
    file: "diffEq/differentialEquations.ts",
    from: String.raw`      "hints": [
        "양변을 $x$ 로 적분하세요."
      ],
      "explanation": "$y = \\displaystyle\\int 2x\\,dx = x^2 + C$.",`,
    to: String.raw`      "hints": [
        "$y'$는 $y$를 $x$에 대해 미분한 것입니다.",
        "양변을 $x$에 대해 적분하고 적분상수 $C$를 붙이세요."
      ],
      "explanation": "$y' = 2x$이므로 양변을 적분하면 $y = \\int 2x\\,dx = x^2 + C$입니다. 일반해에는 적분상수 $C$가 필요합니다.",`,
  },
  {
    file: "diffEq/odeTechniques.ts",
    from: String.raw`      "hints": [
        "론스키안이 0이면 하나가 다른 하나의 상수배."
      ],
      "explanation": "선형 ODE의 해에 대해 론스키안이 항등적으로 0이면 두 해는 일차종속입니다.",`,
    to: String.raw`      "hints": [
        "론스키안은 두 해의 일차독립성을 판별하는 도구입니다.",
        "선형 ODE의 두 해에서 $W=0$이면 한 해가 다른 해의 상수배입니다."
      ],
      "explanation": "선형 ODE의 해에 대해 론스키안이 항등적으로 0이면 두 해는 일차종속입니다. 즉 두 해가 서로 독립적인 기본해가 될 수 없습니다.",`,
  },
  {
    file: "diffEq/odeTechniques.ts",
    from: String.raw`      "hints": [
        "매개변수변환법의 출발점은 $y_p = u_1 y_1 + u_2 y_2$."
      ],
      "explanation": "제차해 $y_1, y_2$를 모르면 $y_p$를 구성할 수 없습니다. 론스키안 계산에도 필요합니다.",`,
    to: String.raw`      "hints": [
        "매개변수변환법의 출발점은 $y_p = u_1 y_1 + u_2 y_2$입니다.",
        "$y_1, y_2$와 그 론스키안으로 $u_1', u_2'$를 계산합니다."
      ],
      "explanation": "제차해 $y_1, y_2$를 알아야 특수해를 $y_p=u_1y_1+u_2y_2$ 형태로 놓을 수 있습니다. 론스키안 계산에도 제차해가 필요합니다.",`,
  },
  {
    file: "diffEq/odeTechniques.ts",
    from: String.raw`      "hints": [
        "미정계수법은 $g(x)$가 다항식·지수·삼각 형태여야 합니다."
      ],
      "explanation": "매개변수변환법은 $g(x)$의 형태에 제한이 없습니다. $\\sec x, \\ln x$ 등 어떤 함수든 가능합니다.",`,
    to: String.raw`      "hints": [
        "미정계수법은 $g(x)$가 다항식·지수·삼각 형태일 때 주로 씁니다.",
        "매개변수변환법은 제차해를 알고 있으면 더 넓은 $g(x)$에 적용할 수 있습니다."
      ],
      "explanation": "매개변수변환법은 제차해를 알고 있고 필요한 적분이 가능하면 연속인 $g(x)$에 폭넓게 적용됩니다. 그래서 미정계수법보다 적용 범위가 넓습니다.",`,
  },
  {
    file: "diffEq/odeTechniques.ts",
    from: String.raw`      "hints": [
        "합성곱 정리: 시간 영역의 합성곱은 주파수 영역의 곱."
      ],
      "explanation": "$\\mathcal{L}\\{f*g\\} = F(s)G(s)$. 이 성질 덕분에 역변환 시 부분분수 분해 후 각 항을 역변환할 수 있습니다.",`,
    to: String.raw`      "hints": [
        "합성곱 정리를 떠올리세요.",
        "시간 영역에서의 합성곱은 라플라스 영역에서 곱으로 바뀝니다."
      ],
      "explanation": "합성곱 정리에 의해 $\\mathcal{L}\\{f*g\\}=F(s)G(s)$입니다. 적분 형태의 합성곱을 직접 계산하지 않고 변환 영역에서 곱으로 처리할 수 있습니다.",`,
  },
  {
    file: "linearAndVector/linearAlgebra.ts",
    from: String.raw`      "explanation": "$8 + (-3) = 5$.",`,
    to: String.raw`      "explanation": "내적은 같은 위치의 성분끼리 곱한 뒤 더합니다. 따라서 $(2,3)\\cdot(4,-1)=2\\cdot4+3\\cdot(-1)=8-3=5$입니다.",`,
  },
  {
    file: "linearAndVector/linearAlgebra.ts",
    from: String.raw`      "explanation": "$12 - 2 = 10$.",
      "wrongAnalysis": "$ad + bc$ 로 부호를 잘못 적는 실수가 흔합니다. 항상 빼기."`,
    to: String.raw`      "explanation": "$2\\times2$ 행렬의 행렬식은 $ad-bc$입니다. 여기서는 $3\\cdot4-2\\cdot1=12-2=10$입니다.",
      "wrongAnalysis": "$ad+bc$로 더하거나 대각선 곱의 순서를 바꾸는 실수가 흔합니다. $2\\times2$ 행렬식은 항상 $ad-bc$입니다."`,
  },
  {
    file: "multivariable/lessons.ts",
    from: String.raw`      "hints": [
        "$x^2 + y^2 = c$ 가 어떤 곡선인가?"
      ],
      "explanation": "$x^2 + y^2 = c$ 는 반지름 $\\sqrt{c}$ 인 원.",`,
    to: String.raw`      "hints": [
        "등고선은 $f(x,y)=c$로 놓고 봅니다.",
        "$x^2+y^2=c$는 원점 중심의 어떤 곡선인지 떠올리세요."
      ],
      "explanation": "등고선은 $x^2+y^2=c$로 나타납니다. $c>0$이면 원점 중심, 반지름 $\\sqrt{c}$인 원이므로 모양은 원입니다.",`,
  },
  {
    file: "multivariable/lessons.ts",
    from: String.raw`      "hints": [
        "$f_x,\\ f_y$ 를 각각 구하세요."
      ],
      "explanation": "$f_x = 3,\\ f_y = 4 \\;\\Rightarrow\\; (3,4)$. 이 함수의 그래디언트는 점에 무관하게 상수.",`,
    to: String.raw`      "hints": [
        "그래디언트는 $\\nabla f=(f_x,f_y)$입니다.",
        "$3x$를 $x$로, $4y$를 $y$로 각각 편미분하세요."
      ],
      "explanation": "$f_x=3$, $f_y=4$이므로 $\\nabla f=(3,4)$입니다. 일차함수의 그래디언트는 위치에 따라 변하지 않는 상수 벡터입니다.",`,
  },
  {
    file: "multivariable/lessons.ts",
    from: String.raw`      "hints": ["$\\int_0^{2\\pi}\\int_0^1 r\\,dr\\,d\\theta = \\pi$."],
      "explanation": "$2\\pi \\cdot 1/2 = \\pi \\approx 3.1416$.",`,
    to: String.raw`      "hints": [
        "극좌표에서는 $dA=r\\,dr\\,d\\theta$를 사용합니다.",
        "단위원은 $0\\le r\\le 1$, $0\\le \\theta\\le 2\\pi$입니다."
      ],
      "explanation": "$\\iint 1\\,dA=\\int_0^{2\\pi}\\int_0^1 r\\,dr\\,d\\theta$입니다. 안쪽 적분은 $1/2$이고 바깥 적분까지 하면 $2\\pi\\cdot 1/2=\\pi\\approx3.1416$입니다.",`,
  },
  {
    file: "multivariable/lessons.ts",
    from: String.raw`      "hints": ["구면좌표의 야코비안은 $\\rho^2\\sin\\phi$."],
      "explanation": "$dV = \\rho^2\\sin\\phi\\,d\\rho\\,d\\phi\\,d\\theta$.",`,
    to: String.raw`      "hints": [
        "구면좌표의 체적 요소에는 야코비안이 곱해집니다.",
        "반지름 방향의 제곱 인자 $\\rho^2$와 각도 인자 $\\sin\\phi$를 모두 포함해야 합니다."
      ],
      "explanation": "구면좌표 변환의 야코비안은 $\\rho^2\\sin\\phi$입니다. 따라서 체적 요소는 $dV=\\rho^2\\sin\\phi\\,d\\rho\\,d\\phi\\,d\\theta$입니다.",`,
  },
  {
    file: "multivariable/lessons.ts",
    from: String.raw`      "hints": ["$dS = \\|\\mathbf{r}_u \\times \\mathbf{r}_v\\|\\,du\\,dv$."],
      "explanation": "외적의 크기가 미소 평행사변형의 넓이이므로 $dS = \\|\\mathbf{r}_u \\times \\mathbf{r}_v\\|\\,du\\,dv$.",
      "wrongAnalysis": "내적과 외적을 혼동하면 안 됩니다."`,
    to: String.raw`      "hints": [
        "곡면을 $\\mathbf{r}(u,v)$로 매개변수화했다고 생각하세요.",
        "두 접벡터 $\\mathbf{r}_u$, $\\mathbf{r}_v$가 만드는 평행사변형의 넓이를 구합니다."
      ],
      "explanation": "미소 넓이 요소는 두 접벡터가 만드는 평행사변형의 넓이입니다. 그래서 $dS=\\|\\mathbf{r}_u\\times\\mathbf{r}_v\\|\\,du\\,dv$를 사용합니다.",
      "wrongAnalysis": "내적은 두 벡터의 방향 유사성을 재는 값이고, 외적의 크기가 평행사변형의 넓이를 줍니다. 면적 요소에서는 외적을 써야 합니다."`,
  },
  {
    file: "generalKnowledge/age5.ts",
    from: String.raw`        explanation: "잘 익은 바나나는 노란색이에요!",`,
    to: String.raw`        explanation: "잘 익은 바나나는 보통 노란색이에요. 덜 익었을 때는 초록빛이 날 수 있지만, 먹기 좋게 익은 바나나는 노란색으로 배웁니다.",`,
  },
  {
    file: "generalKnowledge/age8.ts",
    from: String.raw`        explanation: "최초의 컴퓨터는 복잡한 수학 계산을 하기 위해 만들어졌어요. 지금은 모든 곳에 쓰이지요!",`,
    to: String.raw`        explanation: "초기의 컴퓨터는 복잡한 수학 계산을 빠르게 하기 위해 만들어졌어요. 이후 기술이 발전하면서 생활과 산업의 여러 분야에 쓰이게 되었어요.",`,
  },
  {
    file: "generalKnowledge/age10.ts",
    from: String.raw`      choices: ["한양(지금의 서울)", "개성", "경주", "평양"],
      answer: "한양(지금의 서울)",
      hints: ["지금의 대한민국 수도와 같은 곳이에요.", "경복궁이 있는 곳이에요."],
      explanation: "조선의 수도는 한양으로, 지금의 서울이에요. 경복궁, 창덕궁 등 궁궐이 있어요.",`,
    to: String.raw`      choices: ["한양(오늘날 서울)", "개성", "경주", "평양"],
      answer: "한양(오늘날 서울)",
      hints: ["오늘날 대한민국 수도와 같은 곳이에요.", "경복궁이 있는 곳이에요."],
      explanation: "조선의 수도는 한양으로, 오늘날 서울에 해당해요. 경복궁, 창덕궁 등 궁궐이 있어요.",`,
  },
  {
    file: "generalKnowledge/age10.ts",
    from: String.raw`      hints: ["우리나라가 속해 있는 대륙이에요.", "중국, 인도 등 인구가 많은 나라들이 있어요."],
      explanation: "아시아는 세계에서 가장 큰 대륙이에요. 면적과 인구 모두 세계 1위예요.",`,
    to: String.raw`      hints: ["우리나라가 속해 있는 대륙이에요.", "중국과 인도 같은 큰 나라들이 있어요."],
      explanation: "아시아는 세계에서 면적이 가장 큰 대륙이에요. 우리나라를 비롯해 중국, 인도, 일본 등이 아시아에 속합니다.",`,
  },
  {
    file: "generalKnowledge/age10.ts",
    from: String.raw`      question: "세계에서 인구가 가장 많은 나라는?",
      choices: ["인도", "중국", "미국", "인도네시아"],
      answer: "인도",
      hints: ["남아시아에 있는 나라예요.", "최근 중국을 넘어섰어요."],
      explanation: "인도는 2023년 이후 중국을 넘어서 세계에서 인구가 가장 많은 나라가 되었어요.",
      wrongAnalysis: "오랫동안 중국이 1위였지만, 최근 인도가 인구 1위가 되었어요."`,
    to: String.raw`      question: "2023년 UN 추계 기준 주민 수가 가장 많은 나라는?",
      choices: ["인도", "중국", "미국", "인도네시아"],
      answer: "인도",
      hints: ["남아시아에 있는 나라예요.", "2023년 기준으로 중국보다 많다고 추계되었어요."],
      explanation: "UN 추계에서 인도는 2023년에 중국을 넘어 주민 수가 가장 많은 나라로 제시되었습니다. 기준 연도를 함께 기억해야 해요.",
      wrongAnalysis: "오랫동안 중국이 1위로 알려졌지만, 이 문항은 2023년 UN 추계 기준을 묻기 때문에 인도가 정답입니다."`,
  },
  {
    file: "generalKnowledge/age11.ts",
    from: String.raw`        explanation: "모나리자는 레오나르도 다빈치가 그린 세계에서 가장 유명한 초상화입니다. 현재 프랑스 루브르 박물관에 있습니다.",`,
    to: String.raw`        explanation: "모나리자는 레오나르도 다빈치가 그린 세계적으로 유명한 초상화입니다. 프랑스 루브르 박물관에 소장되어 있습니다.",`,
  },
  {
    file: "generalKnowledge/age11.ts",
    from: String.raw`        question: "2024년 제22대 국회 기준 대한민국 국회의원 수는 몇 명인가요?",`,
    to: String.raw`        question: "2024년 제22대 국회 기준 대한민국 국회의 의석 정원은 몇 명인가요?",`,
  },
  {
    file: "generalKnowledge/age12.ts",
    from: String.raw`        question: "6.25전쟁의 현재 상태는?",
        choices: ["휴전 상태", "종전(전쟁 끝)", "평화 협정 체결", "전쟁 진행 중"],
        answer: "휴전 상태",
        hints: ["1953년에 전투는 멈추었지만 완전히 끝난 것은 아닙니다.", "정전 협정이 체결되었습니다."],
        explanation: "6.25전쟁은 1953년 휴전 협정으로 전투가 멈추었지만, 공식적으로 종전되지 않아 현재도 휴전 상태입니다.",`,
    to: String.raw`        question: "1953년 정전 협정 이후 6.25전쟁은 어떤 상태로 설명되나요?",
        choices: ["휴전 상태", "종전(전쟁 끝)", "평화 협정 체결", "전쟁 진행 중"],
        answer: "휴전 상태",
        hints: ["1953년에 전투는 멈추었지만 완전히 끝난 것은 아닙니다.", "정전 협정이 체결되었습니다."],
        explanation: "6.25전쟁은 1953년 정전 협정으로 전투가 멈춘 상태로 설명됩니다. 공식적인 종전과 평화 협정 체결과는 구별해야 합니다.",`,
  },
  {
    file: "generalKnowledge/age12.ts",
    from: String.raw`        question: "지속가능한 발전의 의미로 가장 적절한 것은?",
        choices: ["현재 세대의 필요를 충족하면서 미래 세대의 필요도 보장하는 발전", "경제 성장만을 추구하는 발전", "환경을 무시하고 빠르게 성장하는 것", "과거로 돌아가는 것"],
        answer: "현재 세대의 필요를 충족하면서 미래 세대의 필요도 보장하는 발전",
        hints: ["미래 세대도 고려해야 합니다.", "경제, 환경, 사회의 균형이 중요합니다."],
        explanation: "지속가능한 발전은 현재 세대의 필요를 충족하면서도 미래 세대가 그들의 필요를 충족할 수 있는 능력을 해치지 않는 발전입니다.",`,
    to: String.raw`        question: "지속가능한 발전의 의미로 가장 적절한 것은?",
        choices: ["오늘의 필요를 충족하면서 미래 세대의 필요도 보장하는 발전", "경제 성장만을 추구하는 발전", "환경을 무시하고 빠르게 성장하는 것", "과거로 돌아가는 것"],
        answer: "오늘의 필요를 충족하면서 미래 세대의 필요도 보장하는 발전",
        hints: ["미래 세대도 고려해야 합니다.", "경제, 환경, 사회의 균형이 중요합니다."],
        explanation: "지속가능한 발전은 오늘의 필요를 충족하면서도 미래 세대가 그들의 필요를 충족할 수 있는 능력을 해치지 않는 발전입니다.",`,
  },
];

const missed: Replacement[] = [];
let applied = 0;
let alreadyApplied = 0;

for (const replacement of replacements) {
  const filePath = join(dataRoot, replacement.file);
  const before = readFileSync(filePath, "utf8");

  const fromCrLf = replacement.from.replace(/\n/g, "\r\n");
  const toCrLf = replacement.to.replace(/\n/g, "\r\n");
  const from = before.includes(replacement.from)
    ? replacement.from
    : before.includes(fromCrLf)
      ? fromCrLf
      : null;

  if (!from) {
    if (before.includes(replacement.to) || before.includes(toCrLf)) {
      alreadyApplied += 1;
      continue;
    }
    missed.push(replacement);
    continue;
  }

  const after = before.split(from).join(from === fromCrLf ? toCrLf : replacement.to);
  writeFileSync(filePath, after, "utf8");
  applied += 1;
}

console.log(
  JSON.stringify(
    {
      applied,
      alreadyApplied,
      missed: missed.map((item) => item.file),
    },
    null,
    2,
  ),
);
