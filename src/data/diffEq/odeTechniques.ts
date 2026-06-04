import { Lesson } from "../../types";

export const odeTechniquesLessons: Lesson[] = [
{
  "id": 2,
  "title": "변수분리법",
  "category": "미분방정식",
  "level": "고급",
  "question": "$\\dfrac{dy}{dx} = f(x)\\,g(y)$ 형태의 미분방정식은 어떻게 풀까?",
  "concept": {
    "intro": ":::definition[변수분리법]\n변수분리법(Separation of Variables)은 1계 ODE의 가장 기본적인 풀이 기법입니다.\n:::\n\n$\\dfrac{dy}{dx} = f(x)\\,g(y)$ 처럼 우변이 $x$만의 함수와 $y$만의 함수의 곱으로 쓰일 때, $y$가 포함된 부분을 좌변으로, $x$가 포함된 부분을 우변으로 분리하면\n\n$$\\frac{dy}{g(y)} = f(x)\\,dx$$\n\n양변을 각각 적분하면 해를 구할 수 있습니다.\n\n:::warning[주의]\n$g(y) = 0$인 자명해를 반드시 별도로 확인하세요. 변수분리 과정에서 $g(y)$로 나누면 이 해를 잃어버릴 수 있습니다.\n:::",
    "intuition": "변수분리는 말 그대로 '$x$의 짐은 오른쪽, $y$의 짐은 왼쪽'으로 정리하는 것입니다. 인구 성장 모델 $\\dfrac{dP}{dt} = kP$ 처럼, 변화율이 현재 양에 비례하는 모든 현상이 이 형태입니다.",
    "formula": "\\frac{dy}{dx} = f(x)\\,g(y) \\;\\Rightarrow\\; \\int \\frac{dy}{g(y)} = \\int f(x)\\,dx + C",
    "summary": ":::note[요약]\n• $y'=f(x)g(y)$ 꼴이면 분리 가능\n• 양변 적분 후 $+C$\n• $g(y)=0$ 인 자명해도 확인\n:::",
    "visuals": [{
      "type": "function",
      "title": "방향장: dy/dx = -x/y (원 형태 해)",
      "xRange": [-3, 3],
      "yRange": [-3, 3],
      "shapes": [
        { "type": "circle", "cx": 0, "cy": 0, "rx": 1, "color": "#6366f1", "fill": "none" },
        { "type": "circle", "cx": 0, "cy": 0, "rx": 2, "color": "#ef4444", "fill": "none" }
      ],
      "annotations": [
        { "x": -2.2, "y": -2.5, "text": "x²+y²=C (해곡선)", "color": "#6366f1" },
        { "x": 1.5, "y": 2.3, "text": "C=4", "color": "#ef4444" },
        { "x": 0.5, "y": 1.2, "text": "C=1", "color": "#6366f1" }
      ]
    }]
  },
  "examples": [
    {
      "title": "[기본] 기본 변수분리",
      "problem": "$\\dfrac{dy}{dx} = xy$ 를 풀어라.",
      "steps": [
        "$\\dfrac{dy}{y} = x\\,dx$ 로 분리.",
        "양변 적분: $\\displaystyle\\int \\frac{dy}{y} = \\int x\\,dx$.",
        "$\\ln|y| = \\dfrac{x^2}{2} + C$.",
        "지수 함수 적용: $|y| = e^{x^2/2+C} = e^C \\cdot e^{x^2/2}$.",
        "$\\pm e^C$를 새 상수 $A$로 흡수: $y = A\\,e^{x^2/2}$."
      ],
      "answer": "$y = A\\,e^{x^2/2}$",
      "lesson": "분리변수형은 $y' = g(x)h(y)$ 꼴일 때만 적용됩니다. 적분 후 절댓값과 부호를 하나의 임의상수로 모으는 것이 관례입니다. $y=0$도 자명해임을 잊지 마세요."
    },
    {
      "title": "[기본] 지수 감쇠 모델",
      "problem": "$\\dfrac{dy}{dx} = -2y$, $y(0) = 5$ 를 풀어라.",
      "steps": [
        "$\\dfrac{dy}{y} = -2\\,dx$ 로 분리합니다.",
        "양변 적분: $\\ln|y| = -2x + C$.",
        "$y = Ae^{-2x}$. 초기조건 $y(0) = 5$에서 $A = 5$.",
        "$y = 5e^{-2x}$."
      ],
      "answer": "$y = 5e^{-2x}$",
      "lesson": "$y' = ky$에서 $k < 0$이면 지수 감쇠, $k > 0$이면 지수 성장입니다. 방사성 붕괴, 냉각 등이 이 모델입니다."
    },
    {
      "title": "[응용] 삼각함수가 포함된 분리",
      "problem": "$\\dfrac{dy}{dx} = \\dfrac{\\cos x}{y}$, $y > 0$ 를 풀어라.",
      "steps": [
        "$y\\,dy = \\cos x\\,dx$ 로 분리합니다.",
        "양변 적분: $\\dfrac{y^2}{2} = \\sin x + C$.",
        "$y^2 = 2\\sin x + C'$ ($C' = 2C$).",
        "$y > 0$이므로 $y = \\sqrt{2\\sin x + C'}$."
      ],
      "answer": "$y = \\sqrt{2\\sin x + C}$",
      "lesson": "분리 후 적분할 때 양변의 적분 상수는 한쪽에만 모으면 됩니다. 근호 안의 부호가 양수여야 해가 실수로 존재합니다."
    },
    {
      "title": "[응용] 로지스틱 방정식의 형태",
      "problem": "$\\dfrac{dy}{dx} = y(1 - y)$, $0 < y < 1$ 를 풀어라.",
      "steps": [
        "$\\dfrac{dy}{y(1-y)} = dx$ 로 분리합니다.",
        "부분분수: $\\dfrac{1}{y(1-y)} = \\dfrac{1}{y} + \\dfrac{1}{1-y}$.",
        "양변 적분: $\\ln|y| - \\ln|1-y| = x + C$, 즉 $\\ln\\dfrac{y}{1-y} = x + C$.",
        "$\\dfrac{y}{1-y} = Ae^x$이므로 $y = \\dfrac{Ae^x}{1 + Ae^x}$."
      ],
      "answer": "$y = \\dfrac{Ae^x}{1 + Ae^x}$",
      "lesson": "로지스틱 방정식은 인구 성장의 포화 모델입니다. 부분분수 분해가 핵심 기법이며, 해는 시그모이드(S자) 곡선을 그립니다."
    },
    {
      "title": "[심화] 자명해와 특이해의 구별",
      "problem": "$\\dfrac{dy}{dx} = y^{2/3}$의 일반해를 구하고, $y = 0$이 자명해인지 확인하시오.",
      "steps": [
        "$y \\neq 0$일 때 $\\dfrac{dy}{y^{2/3}} = dx$로 분리합니다.",
        "$\\int y^{-2/3}\\,dy = \\int dx$이므로 $3y^{1/3} = x + C$.",
        "$y = \\left(\\dfrac{x+C}{3}\\right)^3$.",
        "$y = 0$을 원래 방정식에 대입하면 $0 = 0^{2/3} = 0$ ✓. 자명해도 해입니다.",
        "이 경우 $y = 0$은 변수분리 과정에서 $y^{2/3}$으로 나누면서 잃어버린 특이해입니다."
      ],
      "answer": "일반해: $y = \\left(\\dfrac{x+C}{3}\\right)^3$, 특이해: $y = 0$",
      "lesson": "변수분리에서 $g(y) = 0$인 점을 나눌 때 해를 잃어버릴 수 있습니다. 반드시 $g(y) = 0$인 경우를 별도로 확인하세요."
    }
  ],
  "problems": [
    {
      "id": "2-1",
      "type": "choice",
      "difficulty": 1,
      "question": "$\\dfrac{dy}{dx} = 3y$ 의 일반해는?",
      "choices": [
        "$y = C\\,e^{3x}$",
        "$y = 3x + C$",
        "$y = C\\,e^{-3x}$",
        "$y = 3\\ln|x| + C$"
      ],
      "answer": "$y = C\\,e^{3x}$",
      "hints": [
        "$\\dfrac{dy}{y} = 3\\,dx$ 로 분리하세요.",
        "양변 적분."
      ],
      "explanation": "$\\ln|y| = 3x + C \\;\\Rightarrow\\; y = A\\,e^{3x}$.",
      "wrongAnalysis": "지수의 부호를 틀리거나, $3x+C$ 처럼 직접 적분하는 실수가 흔합니다."
    },
    {
      "id": "2-2",
      "type": "choice",
      "difficulty": 2,
      "question": "$\\dfrac{dy}{dx} = \\dfrac{x}{y}$, $y>0$ 의 일반해는?",
      "choices": [
        "$y^2 = x^2 + C$",
        "$y = x^2 + C$",
        "$y = \\ln x + C$",
        "$y^2 = 2x + C$"
      ],
      "answer": "$y^2 = x^2 + C$",
      "hints": [
        "$y\\,dy = x\\,dx$ 로 분리.",
        "양변 적분: $\\dfrac{y^2}{2} = \\dfrac{x^2}{2} + C'$."
      ],
      "explanation": "$y\\,dy = x\\,dx \\;\\Rightarrow\\; \\dfrac{y^2}{2} = \\dfrac{x^2}{2} + C' \\;\\Rightarrow\\; y^2 = x^2 + C$. ($C = 2C'$로 재정의)",
      "wrongAnalysis": "양변의 적분 상수를 각각 두지 말고 한쪽에만 $C$를 두세요."
    },
    {
      "id": "2-3",
      "type": "text",
      "difficulty": 3,
      "question": "$\\dfrac{dP}{dt} = 0.5\\,P$, $P(0)=100$ 일 때 $P(t)$는? (식, 예: 100e^{0.5t})",
      "answer": "100e^{0.5t}",
      "hints": [
        "분리변수: $\\dfrac{dP}{P} = 0.5\\,dt$.",
        "일반해 $P = C\\,e^{0.5t}$.",
        "$P(0) = 100$ 대입."
      ],
      "explanation": "$\\ln|P| = 0.5t + C_0 \\;\\Rightarrow\\; P = Ce^{0.5t}$. 초기조건: $C = 100$. 따라서 $P(t) = 100\\,e^{0.5t}$.",
      "wrongAnalysis": "인구 성장 모델에서 초기조건을 지수에 넣는 실수($e^{100t}$)가 흔합니다. 초기값은 계수입니다."
    },
    {
      "id": "2-4",
      "type": "number",
      "difficulty": 1,
      "question": "$\\dfrac{dy}{dx} = 2y$를 변수분리법으로 풀면 일반해는 $y = Ce^{kx}$입니다. $k$의 값은?",
      "answer": "2",
      "hints": [
        "$\\dfrac{dy}{y} = 2\\,dx$로 분리하세요.",
        "양변 적분하면 $\\ln|y| = 2x + C_0$입니다."
      ],
      "explanation": "$\\dfrac{dy}{y} = 2\\,dx$를 적분하면 $\\ln|y| = 2x + C_0$이므로 $y = Ce^{2x}$. 따라서 $k = 2$.",
      "wrongAnalysis": "변수분리 후 적분 과정에서 계수를 잘못 붙이는 실수가 있습니다."
    },
    {
      "id": "2-5",
      "type": "choice",
      "difficulty": 2,
      "question": "$\\dfrac{dy}{dx} = \\dfrac{y^2}{x}$, $y > 0$의 일반해는?",
      "choices": [
        "$y = \\dfrac{1}{C - \\ln|x|}$",
        "$y = C\\ln|x|$",
        "$y = \\dfrac{x}{C}$",
        "$y = Ce^{x^2}$"
      ],
      "answer": "$y = \\dfrac{1}{C - \\ln|x|}$",
      "hints": [
        "$\\dfrac{dy}{y^2} = \\dfrac{dx}{x}$로 분리하세요.",
        "양변 적분: $-\\dfrac{1}{y} = \\ln|x| + C_0$."
      ],
      "explanation": "$\\int y^{-2}dy = \\int x^{-1}dx$이므로 $-1/y = \\ln|x| + C_0$. 정리하면 $y = \\dfrac{1}{-(\\ln|x| + C_0)} = \\dfrac{1}{C - \\ln|x|}$.",
      "wrongAnalysis": "$\\int y^{-2}dy = -y^{-1}$에서 음의 부호를 놓치는 실수가 흔합니다."
    }
  ],
  "summary": {
    "keyPoints": [
      "$y' = f(x)g(y)$ 꼴이면 분리 가능",
      "양변 적분하여 일반해",
      "$g(y)=0$ 자명해 확인 필수"
    ],
    "formulas": [
      "\\int \\frac{dy}{g(y)} = \\int f(x)\\,dx + C"
    ],
    "commonMistakes": [
      "분리 불가능한 방정식에 억지로 적용",
      "적분상수 $C$ 누락"
    ],
    "nextConnection": "다음 단원에서는 분리변수가 안 되는 1계 선형 ODE를 적분인자로 푸는 방법을 배웁니다."
  }
},
{
  "id": 3,
  "title": "1계 선형 미분방정식과 적분인자",
  "category": "미분방정식",
  "level": "고급",
  "question": "$y' + P(x)y = Q(x)$ 형태의 1계 선형 ODE는 어떻게 풀까?",
  "concept": {
    "intro": ":::definition[1계 선형 ODE]\n1계 선형 ODE의 표준형은 $y' + P(x)y = Q(x)$ 입니다.\n:::\n\n:::definition[적분인자]\n적분인자(integrating factor) $\\mu(x) = e^{\\int P(x)\\,dx}$ 를 양변에 곱하면, 좌변이 곱의 미분 $(\\mu y)'$가 되어 바로 적분할 수 있습니다.\n:::\n\n$$y = \\frac{1}{\\mu(x)}\\left(\\int \\mu(x)\\,Q(x)\\,dx + C\\right)$$",
    "intuition": "적분인자의 핵심 아이디어는 '좌변을 곱의 미분 형태로 만들자'입니다. $\\mu y' + \\mu Py = (\\mu y)'$가 되려면 $\\mu' = \\mu P$, 즉 $\\mu = e^{\\int P\\,dx}$이어야 합니다.",
    "formula": "y' + P(x)y = Q(x)\n\\mu = e^{\\int P\\,dx}\ny = \\frac{1}{\\mu}\\left(\\int \\mu\\,Q\\,dx + C\\right)",
    "summary": ":::note[요약]\n• 표준형: $y' + Py = Q$\n• 적분인자: $\\mu = e^{\\int P\\,dx}$\n• $(\\mu y)' = \\mu Q$ 로 적분\n:::"
  },
  "examples": [
    {
      "title": "[기본] 적분인자 기본",
      "problem": "$y' + y = e^{-x}$ 를 풀어라.",
      "steps": [
        "$P(x)=1$이므로 적분인자 $\\mu = e^{\\int 1\\,dx} = e^x$.",
        "양변에 $e^x$ 곱: $e^x y' + e^x y = 1$.",
        "좌변은 $(e^x y)'$ : $(e^x y)' = 1$.",
        "양변 적분: $e^x y = x + C$.",
        "$y = (x + C)\\,e^{-x}$."
      ],
      "answer": "$y = (x + C)\\,e^{-x}$",
      "lesson": "적분인자를 곱하면 좌변이 자동으로 곱의 미분 형태가 됩니다. 이것이 적분인자의 존재 이유입니다."
    },
    {
      "title": "[기본] 상수 계수 1계 선형 ODE",
      "problem": "$y' + 3y = 6$ 의 일반해를 구하시오.",
      "steps": [
        "$P(x) = 3$이므로 $\\mu = e^{3x}$.",
        "양변에 곱: $(e^{3x}y)' = 6e^{3x}$.",
        "양변 적분: $e^{3x}y = 2e^{3x} + C$.",
        "$y = 2 + Ce^{-3x}$."
      ],
      "answer": "$y = 2 + Ce^{-3x}$",
      "lesson": "정상상태 해 $y = 2$와 과도 해 $Ce^{-3x}$의 합으로 구성됩니다. $t \\to \\infty$에서 $y \\to 2$로 수렴합니다."
    },
    {
      "title": "[응용] 변수 계수 적분인자",
      "problem": "$y' + \\dfrac{2}{x}y = x^2$, $x > 0$ 를 풀어라.",
      "steps": [
        "$P(x) = 2/x$이므로 $\\mu = e^{\\int 2/x\\,dx} = e^{2\\ln x} = x^2$.",
        "양변에 $x^2$ 곱: $(x^2 y)' = x^4$.",
        "양변 적분: $x^2 y = \\dfrac{x^5}{5} + C$.",
        "$y = \\dfrac{x^3}{5} + \\dfrac{C}{x^2}$."
      ],
      "answer": "$y = \\dfrac{x^3}{5} + \\dfrac{C}{x^2}$",
      "lesson": "$P(x)$가 $1/x$ 형태이면 적분인자가 $x$의 거듭제곱이 됩니다. $e^{a\\ln x} = x^a$를 기억하세요."
    },
    {
      "title": "[응용] 초기조건이 있는 문제",
      "problem": "$y' - y = e^{2x}$, $y(0) = 1$ 을 풀어라.",
      "steps": [
        "$P(x) = -1$이므로 $\\mu = e^{-x}$.",
        "양변에 $e^{-x}$ 곱: $(e^{-x}y)' = e^x$.",
        "양변 적분: $e^{-x}y = e^x + C$.",
        "$y = e^{2x} + Ce^x$.",
        "$y(0) = 1$: $1 + C = 1$이므로 $C = 0$.",
        "$y = e^{2x}$."
      ],
      "answer": "$y = e^{2x}$",
      "lesson": "적분인자법은 제차해와 비제차 특수해를 한꺼번에 구해줍니다. 초기조건 대입으로 $C$를 결정합니다."
    },
    {
      "title": "[심화] 표준형 변환이 필요한 문제",
      "problem": "$2y' + 4y = 6e^x$ 를 풀어라.",
      "steps": [
        "먼저 표준형으로 변환: 양변을 2로 나누면 $y' + 2y = 3e^x$.",
        "$P(x) = 2$이므로 $\\mu = e^{2x}$.",
        "$(e^{2x}y)' = 3e^{3x}$.",
        "양변 적분: $e^{2x}y = e^{3x} + C$.",
        "$y = e^x + Ce^{-2x}$."
      ],
      "answer": "$y = e^x + Ce^{-2x}$",
      "lesson": "적분인자를 구하기 전에 반드시 $y'$의 계수를 1로 만드는 표준형 변환을 하세요. 이를 빠뜨리면 적분인자가 잘못 계산됩니다."
    }
  ],
  "problems": [
    {
      "id": "3-1",
      "type": "choice",
      "difficulty": 2,
      "question": "$y' + 2y = 4$ 의 일반해는?",
      "choices": [
        "$y = C\\,e^{-2x}$",
        "$y = 2 + C\\,e^{-2x}$",
        "$y = 2 + C\\,e^{2x}$",
        "$y = 4 + Cx$"
      ],
      "answer": "$y = 2 + C\\,e^{-2x}$",
      "hints": [
        "적분인자 $\\mu = e^{2x}$.",
        "$(e^{2x}y)' = 4e^{2x}$."
      ],
      "explanation": "$e^{2x}y = 2e^{2x} + C \\;\\Rightarrow\\; y = 2 + Ce^{-2x}$.",
      "wrongAnalysis": "특수해(정상상태 $y=2$)를 빠뜨리고 제차해만 답하는 실수가 흔합니다."
    },
    {
      "id": "3-2",
      "type": "choice",
      "difficulty": 2,
      "question": "$y' - 3y = 0$ 의 적분인자는?",
      "choices": [
        "$e^{3x}$",
        "$e^{-3x}$",
        "$3x$",
        "$e^{x/3}$"
      ],
      "answer": "$e^{-3x}$",
      "hints": [
        "표준형: $y' + (-3)y = 0$.",
        "$P(x) = -3$."
      ],
      "explanation": "$\\mu = e^{\\int(-3)dx} = e^{-3x}$.",
      "wrongAnalysis": "$P(x)$의 부호를 무시하고 $e^{3x}$로 적는 실수가 매우 흔합니다."
    },
    {
      "id": "3-3",
      "type": "text",
      "difficulty": 3,
      "question": "$y' + \\dfrac{1}{x}y = x$, $x>0$ 의 일반해에서 적분인자 $\\mu$는? (식, 예: x)",
      "answer": "x",
      "hints": [
        "$P(x) = \\dfrac{1}{x}$.",
        "$\\int \\dfrac{1}{x}\\,dx = \\ln x$.",
        "$\\mu = e^{\\ln x}$."
      ],
      "explanation": "$\\mu = e^{\\int (1/x)dx} = e^{\\ln x} = x$. 양변에 $x$를 곱하면 $(xy)' = x^2$이 됩니다.",
      "wrongAnalysis": "$e^{\\ln x} = x$임을 놓치는 실수가 있습니다. 로그와 지수의 역관계를 기억하세요."
    },
    {
      "id": "3-4",
      "type": "choice",
      "difficulty": 1,
      "question": "1계 선형 ODE $y' + 5y = 10$의 적분인자 $\\mu(x)$는?",
      "choices": [
        "$e^{5x}$",
        "$e^{-5x}$",
        "$5x$",
        "$e^{10x}$"
      ],
      "answer": "$e^{5x}$",
      "hints": [
        "표준형 $y' + P(x)y = Q(x)$에서 $P(x) = 5$입니다.",
        "$\\mu = e^{\\int P\\,dx} = e^{\\int 5\\,dx}$."
      ],
      "explanation": "$P(x) = 5$이므로 $\\mu = e^{\\int 5\\,dx} = e^{5x}$.",
      "wrongAnalysis": "적분인자를 구할 때 $Q(x)$의 값을 사용하는 실수가 있습니다. 적분인자는 $P(x)$로만 결정됩니다."
    },
    {
      "id": "3-5",
      "type": "number",
      "difficulty": 1,
      "question": "$y' + y = 5$의 정상상태 해(특수해) $y_p$는 상수입니다. 그 값은?",
      "answer": "5",
      "hints": [
        "$y$가 상수이면 $y' = 0$입니다.",
        "$0 + y_p = 5$에서 $y_p$를 구하세요."
      ],
      "explanation": "정상상태에서 $y' = 0$이므로 $0 + y_p = 5$. 따라서 $y_p = 5$.",
      "wrongAnalysis": "상수 특수해를 구할 때 적분인자를 불필요하게 사용하는 실수가 있습니다. 상수해는 대입만으로 바로 구할 수 있습니다."
    }
  ],
  "summary": {
    "keyPoints": [
      "표준형 $y'+Py=Q$로 정리 먼저",
      "적분인자 $\\mu = e^{\\int P\\,dx}$",
      "$(\\mu y)' = \\mu Q$ 적분"
    ],
    "formulas": [
      "\\mu = e^{\\int P(x)\\,dx}",
      "y = \\frac{1}{\\mu}\\left(\\int \\mu Q\\,dx + C\\right)"
    ],
    "commonMistakes": [
      "$P(x)$의 부호 실수",
      "표준형으로 정리하지 않고 바로 적용"
    ],
    "nextConnection": "다음 단원에서는 $dy$, $dx$를 독립적으로 다루는 미분형식과 전미분의 개념을 배웁니다."
  }
},
{
  "id": 4,
  "title": "미분형식과 전미분",
  "category": "미분방정식",
  "level": "고급",
  "question": "$dy$와 $dx$를 분리하는 것은 왜 합법적이고, 전미분 $dF$란 무엇일까?",
  "concept": {
    "intro": "변수분리법에서 $\\frac{dy}{dx} = f(x)g(y)$를 $\\frac{dy}{g(y)} = f(x)\\,dx$로 바꾸었습니다. 이때 $dy$와 $dx$를 마치 독립적인 양처럼 분리했는데, 이것이 왜 정당한지 정리하겠습니다.\n\n:::definition[미분(differential)]\n함수 $y = f(x)$의 미분은 $dy = f'(x)\\,dx$로 정의합니다. 여기서 $dx$는 $x$의 독립적인 변화량(임의의 값)이고, $dy$는 그에 따른 $y$의 근사 변화량입니다. 이 정의에서 $\\frac{dy}{dx} = f'(x)$가 자연스럽게 성립하므로, $dy$와 $dx$를 분리하는 조작은 미분의 정의에 의해 정당합니다.\n:::\n\n:::definition[미분형식(differential form)]\n$M(x,y)\\,dx + N(x,y)\\,dy$를 미분형식이라 합니다. ODE $\\frac{dy}{dx} = f(x,y)$는 $dy = f(x,y)\\,dx$로 쓸 수 있고, 이를 $dy - f(x,y)\\,dx = 0$, 즉 $M\\,dx + N\\,dy = 0$ 형태로 바꿀 수 있습니다.\n:::\n\n:::definition[전미분(total differential)]\n이변수 함수 $F(x,y)$에서 $x$와 $y$가 각각 $dx$, $dy$만큼 변할 때 $F$의 변화량은:\n$$dF = \\frac{\\partial F}{\\partial x}\\,dx + \\frac{\\partial F}{\\partial y}\\,dy = F_x\\,dx + F_y\\,dy$$\n여기서 $F_x = \\frac{\\partial F}{\\partial x}$는 $y$를 고정하고 $x$로만 미분한 편미분입니다.\n:::\n\n:::theorem[완전미분 조건]\n만약 어떤 함수 $F(x,y)$가 존재하여 $M\\,dx + N\\,dy = dF = F_x\\,dx + F_y\\,dy$라면, 즉 $M = F_x$이고 $N = F_y$라면, $M\\,dx + N\\,dy = 0$은 $dF = 0$과 같으므로 해는 $F(x,y) = C$(등고선)입니다. 이러한 미분형식을 완전미분(exact differential)이라 하며, $M_y = N_x$(혼합편미분의 대칭성)가 완전 조건입니다.\n:::",
    "intuition": "$dy = f'(x)\\,dx$는 '접선의 기울기 $\\times$ $x$변화량 $=$ $y$변화량'이라는 뜻입니다. 미분형식 $M\\,dx + N\\,dy$는 '작은 이동 $(dx, dy)$에 대한 가중합'이고, 전미분 $dF$는 '함수 $F$가 얼마나 변하는지'입니다. $dF = 0$이면 $F$가 변하지 않으므로, 등고선 $F = C$ 위를 따라 움직이는 것입니다.",
    "formula": "dy = f'(x)\\,dx\ndF = F_x\\,dx + F_y\\,dy \\quad (\\text{전미분})\nM\\,dx + N\\,dy = 0 \\quad (\\text{미분형식})\n\\text{완전 조건:}\\ \\frac{\\partial M}{\\partial y} = \\frac{\\partial N}{\\partial x}",
    "summary": ":::note[요약]\n미분 $dy = f'(x)\\,dx$의 정의에 의해 $dy/dx$를 분리하는 것이 정당하다. 전미분 $dF = F_x\\,dx + F_y\\,dy$는 다변수 함수의 변화량이며, 미분형식 $M\\,dx + N\\,dy$가 어떤 $F$의 전미분이면 완전미분이라 한다.\n:::"
  },
  "examples": [
    {
      "title": "[기본] ODE를 미분형식으로 변환",
      "problem": "$y' + 2xy = 0$을 $M\\,dx + N\\,dy = 0$ 형태로 쓰고, 완전한지 확인하시오.",
      "steps": [
        "$\\frac{dy}{dx} = -2xy$에서 $dy = -2xy\\,dx$.",
        "정리: $2xy\\,dx + dy = 0$. $M = 2xy$, $N = 1$.",
        "$M_y = 2x$, $N_x = 0$.",
        "$M_y \\neq N_x$이므로 완전미분이 아니다."
      ],
      "answer": "$2xy\\,dx + dy = 0$, 완전하지 않음.",
      "lesson": "대부분의 1계 ODE는 미분형식으로 변환하면 완전하지 않습니다. 완전하지 않은 경우 적분인자를 곱하거나 다른 기법을 사용합니다."
    },
    {
      "title": "[기본] 전미분 계산",
      "problem": "$F(x,y) = x^2 y + \\sin y$의 전미분 $dF$를 구하시오.",
      "steps": [
        "$F_x = \\dfrac{\\partial}{\\partial x}(x^2 y + \\sin y) = 2xy$.",
        "$F_y = \\dfrac{\\partial}{\\partial y}(x^2 y + \\sin y) = x^2 + \\cos y$.",
        "$dF = 2xy\\,dx + (x^2 + \\cos y)\\,dy$."
      ],
      "answer": "$dF = 2xy\\,dx + (x^2 + \\cos y)\\,dy$",
      "lesson": "편미분 시 다른 변수는 상수 취급합니다. $\\sin y$를 $x$로 미분하면 0, $y$로 미분하면 $\\cos y$입니다."
    },
    {
      "title": "[응용] 완전 조건 확인",
      "problem": "$(e^y + 2x)\\,dx + (xe^y + 1)\\,dy = 0$이 완전미분방정식인지 판별하시오.",
      "steps": [
        "$M = e^y + 2x$, $N = xe^y + 1$.",
        "$M_y = \\dfrac{\\partial}{\\partial y}(e^y + 2x) = e^y$.",
        "$N_x = \\dfrac{\\partial}{\\partial x}(xe^y + 1) = e^y$.",
        "$M_y = N_x = e^y$이므로 완전미분방정식입니다."
      ],
      "answer": "완전미분방정식 ($M_y = N_x = e^y$)",
      "lesson": "$M_y = N_x$가 성립하면 퍼텐셜 함수 $F$가 존재하여 $dF = M\\,dx + N\\,dy$이고, 해는 $F(x,y) = C$입니다."
    },
    {
      "title": "[응용] 미분형식에서 해곡선의 의미",
      "problem": "$y\\,dx + x\\,dy = 0$의 해를 미분형식과 전미분의 관점에서 구하시오.",
      "steps": [
        "$M = y$, $N = x$. $M_y = 1 = N_x$이므로 완전.",
        "$dF = y\\,dx + x\\,dy = d(xy)$. 즉 $F(x,y) = xy$.",
        "$dF = 0$이므로 $F(x,y) = xy = C$ (등고선).",
        "해곡선은 쌍곡선 $xy = C$입니다."
      ],
      "answer": "$xy = C$",
      "lesson": "완전미분방정식 $dF = 0$의 해는 $F$의 등고선입니다. $y\\,dx + x\\,dy$가 $d(xy)$와 같다는 것을 알아보면 풀이가 즉시 끝납니다."
    },
    {
      "title": "[심화] 혼합편미분과 완전 조건의 관계",
      "problem": "$M\\,dx + N\\,dy = dF$일 때 $M_y = N_x$가 반드시 성립함을 보이시오.",
      "steps": [
        "$dF = F_x\\,dx + F_y\\,dy$이므로 $M = F_x$, $N = F_y$.",
        "$M_y = \\dfrac{\\partial}{ \\partial y}(F_x) = F_{xy}$.",
        "$N_x = \\dfrac{\\partial}{\\partial x}(F_y) = F_{yx}$.",
        "슈바르츠 정리: $F$가 충분히 매끄러우면 $F_{xy} = F_{yx}$.",
        "따라서 $M_y = F_{xy} = F_{yx} = N_x$."
      ],
      "answer": "$M_y = F_{xy} = F_{yx} = N_x$ (슈바르츠 정리에 의해 성립)",
      "lesson": "완전 조건 $M_y = N_x$는 혼합편미분의 대칭성에서 나옵니다. 역으로 단순연결 영역에서 $M_y = N_x$이면 퍼텐셜 $F$가 존재합니다."
    }
  ],
  "problems": [
    {
      "id": "4-1",
      "type": "choice",
      "difficulty": 1,
      "question": "$F(x,y) = x^2y + y^3$의 전미분 $dF$는?",
      "choices": [
        "$2x\\,dx + 3y^2\\,dy$",
        "$2xy\\,dx + (x^2 + 3y^2)\\,dy$",
        "$(x^2 + 3y^2)\\,dx + 2xy\\,dy$",
        "$2xy\\,dx + y^3\\,dy$"
      ],
      "answer": "$2xy\\,dx + (x^2 + 3y^2)\\,dy$",
      "hints": [
        "$F_x = \\frac{\\partial}{\\partial x}(x^2y + y^3)$에서 $y$는 상수 취급.",
        "$F_x = 2xy$, $F_y = x^2 + 3y^2$.",
        "$dF = F_x\\,dx + F_y\\,dy$."
      ],
      "explanation": "$F_x = 2xy$, $F_y = x^2 + 3y^2$이므로 $dF = 2xy\\,dx + (x^2 + 3y^2)\\,dy$.",
      "wrongAnalysis": "$F_x$와 $F_y$를 혼동하는 실수가 흔합니다. 편미분은 '다른 변수를 상수로 취급'하는 것이 핵심입니다."
    },
    {
      "id": "4-2",
      "type": "choice",
      "difficulty": 2,
      "question": "$3x^2\\,dx + 3y^2\\,dy = 0$은 어떤 함수 $F$의 전미분인가?",
      "choices": [
        "$F = x^3 + y^3$ (완전미분)",
        "$F = 3x^2 + 3y^2$ (완전미분)",
        "완전미분이 아님",
        "$F = x^2y$ (완전미분)"
      ],
      "answer": "$F = x^3 + y^3$ (완전미분)",
      "hints": [
        "$M = 3x^2$, $N = 3y^2$.",
        "$M_y = 0$, $N_x = 0$. $M_y = N_x$이므로 완전.",
        "$F_x = 3x^2 \\Rightarrow F = x^3 + h(y)$. $F_y = h'(y) = 3y^2 \\Rightarrow h(y) = y^3$."
      ],
      "explanation": "$M_y = 0 = N_x$이므로 완전. $F = x^3 + y^3$이며, 해는 $x^3 + y^3 = C$.",
      "wrongAnalysis": "$F = 3x^2 + 3y^2$를 선택하는 실수는 적분이 아닌 원래 식을 그대로 쓴 것입니다. $F_x = M$이므로 $M$을 $x$에 대해 적분해야 합니다."
    },
    {
      "id": "4-3",
      "type": "text",
      "difficulty": 3,
      "question": "$y' = \\frac{y - x}{y + x}$를 $M\\,dx + N\\,dy = 0$ 형태로 쓰면? (예: (x-y)dx+(x+y)dy=0)",
      "answer": "(x-y)dx+(x+y)dy=0",
      "hints": [
        "$dy = \\frac{y-x}{y+x}\\,dx$로 쓴다.",
        "$(y+x)\\,dy = (y-x)\\,dx$.",
        "$(x-y)\\,dx + (x+y)\\,dy = 0$으로 정리."
      ],
      "explanation": "$(y+x)dy = (y-x)dx$에서 $(x-y)dx + (x+y)dy = 0$. $M = x-y$, $N = x+y$이면 $M_y = -1$, $N_x = 1$이므로 완전하지 않습니다.",
      "wrongAnalysis": "부호를 잘못 정리하여 $M$과 $N$을 뒤바꾸는 실수가 있습니다. $dy - \\frac{y-x}{y+x}dx = 0$에서 양변에 $(y+x)$를 곱하세요."
    },
    {
      "id": "4-4",
      "type": "choice",
      "difficulty": 1,
      "question": "$F(x,y) = x^3 + y^2$의 전미분 $dF$는?",
      "choices": [
        "$3x^2\\,dx + 2y\\,dy$",
        "$x^3\\,dx + y^2\\,dy$",
        "$3x\\,dx + 2y\\,dy$",
        "$x^2\\,dx + y\\,dy$"
      ],
      "answer": "$3x^2\\,dx + 2y\\,dy$",
      "hints": [
        "$F_x = \\dfrac{\\partial}{\\partial x}(x^3 + y^2) = 3x^2$.",
        "$F_y = \\dfrac{\\partial}{\\partial y}(x^3 + y^2) = 2y$."
      ],
      "explanation": "$dF = F_x\\,dx + F_y\\,dy = 3x^2\\,dx + 2y\\,dy$. 편미분은 나머지 변수를 상수로 취급합니다.",
      "wrongAnalysis": "편미분에서 $x^3$을 $x$로 미분할 때 지수법칙을 잘못 적용하는 실수가 있습니다."
    },
    {
      "id": "4-5",
      "type": "choice",
      "difficulty": 2,
      "question": "미분형식 $(2x)\\,dx + (3y^2)\\,dy = 0$에서 $M_y$와 $N_x$를 비교하면?",
      "choices": [
        "$M_y = 0,\\; N_x = 0$ (완전미분)",
        "$M_y = 2,\\; N_x = 3$ (불완전)",
        "$M_y = 2x,\\; N_x = 3y^2$ (불완전)",
        "$M_y = 1,\\; N_x = 1$ (완전미분)"
      ],
      "answer": "$M_y = 0,\\; N_x = 0$ (완전미분)",
      "hints": [
        "$M = 2x$는 $x$만의 함수이므로 $M_y = 0$.",
        "$N = 3y^2$는 $y$만의 함수이므로 $N_x = 0$."
      ],
      "explanation": "$M = 2x$이므로 $M_y = 0$, $N = 3y^2$이므로 $N_x = 0$. $M_y = N_x = 0$이므로 완전미분입니다. 실제로 $F = x^2 + y^3$의 전미분입니다.",
      "wrongAnalysis": "$M$을 $x$로 미분하거나 $N$을 $y$로 미분하는 실수가 있습니다. $M_y$는 $M$을 $y$로, $N_x$는 $N$을 $x$로 미분하는 것입니다."
    }
  ],
  "summary": {
    "keyPoints": [
      "미분 $dy = f'(x)\\,dx$에 의해 $dy/dx$를 분리하는 것이 정당.",
      "전미분: $dF = F_x\\,dx + F_y\\,dy$ — 다변수 함수의 변화량.",
      "미분형식 $M\\,dx + N\\,dy = 0$이 ODE의 기본 표기법.",
      "$M\\,dx + N\\,dy$가 어떤 $F$의 전미분이면 완전미분이며, $M_y = N_x$가 판별 조건."
    ],
    "formulas": [
      "dy = f'(x)\\,dx",
      "dF = F_x\\,dx + F_y\\,dy",
      "M_y = N_x \\iff \\text{완전}"
    ],
    "commonMistakes": [
      "$dy$와 $dx$를 분리할 때 부호를 잘못 붙이는 실수.",
      "편미분에서 어떤 변수를 상수로 취급하는지 혼동.",
      "전미분과 일반 미분형식을 구별하지 못하는 실수."
    ],
    "nextConnection": "미분형식과 전미분을 알았으니, 다음 레슨에서 $M_y = N_x$인 완전미분방정식의 풀이법을 배웁니다."
  }
},
{
  "id": 5,
  "title": "완전미분방정식",
  "category": "미분방정식",
  "level": "고급",
  "question": "$M\\,dx + N\\,dy = 0$ 이 완전미분이 되려면 어떤 조건이 필요할까?",
  "concept": {
    "intro": ":::definition[완전미분방정식]\n$M(x,y)\\,dx + N(x,y)\\,dy = 0$ 형태의 방정식이 어떤 함수 $F(x,y)$의 전미분 $dF = F_x\\,dx + F_y\\,dy = 0$과 같다면, 이를 완전미분방정식이라 합니다.\n:::\n\n:::theorem[완전 조건]\n$\\dfrac{\\partial M}{\\partial y} = \\dfrac{\\partial N}{\\partial x}$ (이 조건은 혼합편미분의 대칭성 $F_{xy} = F_{yx}$, 즉 슈바르츠 정리에서 나옵니다).\n:::\n\n이 조건이 만족되면 $F_x = M$, $F_y = N$인 퍼텐셜 함수 $F(x,y)$를 찾아 $F(x,y) = C$가 일반해입니다.",
    "intuition": "완전미분방정식은 '이미 어떤 함수의 등고선 위를 따라가는 경로'입니다. $dF = 0$이면 $F$가 일정하므로, 해 곡선은 $F(x,y) = C$라는 등고선입니다.",
    "formula": "M\\,dx + N\\,dy = 0\n\\text{완전 조건:}\\ \\frac{\\partial M}{\\partial y} = \\frac{\\partial N}{\\partial x}\n\\text{해:}\\ F(x,y) = C,\\quad F_x = M,\\ F_y = N",
    "summary": ":::note[요약]\n• $M_y = N_x$ 확인\n• $F_x=M$ 적분 후 $F_y=N$으로 미지함수 결정\n• $F(x,y)=C$가 일반해\n:::"
  },
  "examples": [
    {
      "title": "[기본] 완전미분방정식 풀기",
      "problem": "$(2xy + 3)\\,dx + (x^2 + 4y)\\,dy = 0$ 을 풀어라.",
      "steps": [
        "$M = 2xy+3$, $N = x^2+4y$.",
        "$M_y = 2x$, $N_x = 2x$. $M_y = N_x$ 이므로 완전.",
        "$F_x = M = 2xy+3 \\;\\Rightarrow\\; F = x^2y + 3x + h(y)$.",
        "$F_y = x^2 + h'(y) = N = x^2 + 4y \\;\\Rightarrow\\; h'(y) = 4y \\;\\Rightarrow\\; h(y) = 2y^2$.",
        "$F(x,y) = x^2y + 3x + 2y^2 = C$."
      ],
      "answer": "$x^2y + 3x + 2y^2 = C$",
      "lesson": "$M$을 $x$에 대해 적분할 때 나오는 미지함수 $h(y)$는 $F_y = N$ 조건으로 결정합니다."
    },
    {
      "title": "[기본] 분리 가능한 완전미분방정식",
      "problem": "$(3x^2)\\,dx + (4y^3)\\,dy = 0$ 을 풀어라.",
      "steps": [
        "$M = 3x^2$, $N = 4y^3$. $M_y = 0 = N_x$이므로 완전.",
        "$F_x = 3x^2$를 적분: $F = x^3 + h(y)$.",
        "$F_y = h'(y) = 4y^3$이므로 $h(y) = y^4$.",
        "$F(x,y) = x^3 + y^4 = C$."
      ],
      "answer": "$x^3 + y^4 = C$",
      "lesson": "$M$이 $x$만, $N$이 $y$만의 함수이면 자동으로 완전이며, 각각 적분하여 더하면 됩니다."
    },
    {
      "title": "[응용] 지수·삼각함수가 포함된 경우",
      "problem": "$(e^y)\\,dx + (xe^y + 2y)\\,dy = 0$ 을 풀어라.",
      "steps": [
        "$M = e^y$, $N = xe^y + 2y$.",
        "$M_y = e^y$, $N_x = e^y$. 완전.",
        "$F_x = e^y$를 적분: $F = xe^y + h(y)$.",
        "$F_y = xe^y + h'(y) = xe^y + 2y$이므로 $h'(y) = 2y$, $h(y) = y^2$.",
        "$F(x,y) = xe^y + y^2 = C$."
      ],
      "answer": "$xe^y + y^2 = C$",
      "lesson": "지수함수가 포함되어도 절차는 동일합니다. $F_x = M$ 적분 → $F_y = N$으로 $h(y)$ 결정."
    },
    {
      "title": "[응용] 초기조건으로 $C$ 결정",
      "problem": "$(y\\cos x + 1)\\,dx + (\\sin x)\\,dy = 0$, $y(0) = 2$ 를 풀어라.",
      "steps": [
        "$M = y\\cos x + 1$, $N = \\sin x$.",
        "$M_y = \\cos x$, $N_x = \\cos x$. 완전.",
        "$F_x = y\\cos x + 1$ 적분: $F = y\\sin x + x + h(y)$.",
        "$F_y = \\sin x + h'(y) = \\sin x$이므로 $h'(y) = 0$, $h(y) = 0$.",
        "$F = y\\sin x + x = C$. $y(0) = 2$: $2\\sin 0 + 0 = 0$이므로 $C = 0$.",
        "$y\\sin x + x = 0$."
      ],
      "answer": "$y\\sin x + x = 0$",
      "lesson": "완전미분방정식에서 $h(y)$가 상수로 나오면 $h(y) = 0$으로 둡니다. 상수는 우변의 $C$에 흡수됩니다."
    },
    {
      "title": "[심화] $N$에서 출발하는 풀이",
      "problem": "$(3x^2 y^2 + y^3)\\,dx + (2x^3 y + 3xy^2)\\,dy = 0$ 을 풀어라.",
      "steps": [
        "$M_y = 6x^2 y + 3y^2$, $N_x = 6x^2 y + 3y^2$. 완전.",
        "이번에는 $N$부터 $y$로 적분: $F = \\int N\\,dy = x^3 y^2 + xy^3 + g(x)$.",
        "$F_x = 3x^2 y^2 + y^3 + g'(x) = M = 3x^2 y^2 + y^3$.",
        "$g'(x) = 0$이므로 $g(x) = 0$.",
        "$F(x,y) = x^3 y^2 + xy^3 = C$."
      ],
      "answer": "$x^3 y^2 + xy^3 = C$",
      "lesson": "$N$을 $y$로 먼저 적분하고 $F_x = M$으로 미지함수를 결정하는 방법도 동일하게 유효합니다. 적분이 더 간단한 쪽을 선택하세요."
    }
  ],
  "problems": [
    {
      "id": "5-1",
      "type": "choice",
      "difficulty": 2,
      "question": "$(y)\\,dx + (x)\\,dy = 0$ 은 완전미분방정식인가?",
      "choices": [
        "완전 ($M_y = N_x = 1$)",
        "불완전 ($M_y \\ne N_x$)",
        "판별 불가",
        "항상 불완전"
      ],
      "answer": "완전 ($M_y = N_x = 1$)",
      "hints": [
        "$M = y$, $N = x$.",
        "$M_y = 1$, $N_x = 1$."
      ],
      "explanation": "$M_y = 1 = N_x$이므로 완전. 실제로 $d(xy) = y\\,dx + x\\,dy = 0$이므로 $xy = C$.",
      "wrongAnalysis": "편미분 계산에서 어떤 변수로 미분하는지 혼동하는 실수가 흔합니다."
    },
    {
      "id": "5-2",
      "type": "choice",
      "difficulty": 2,
      "question": "$(y\\,dx - x\\,dy) = 0$ 은 완전인가?",
      "choices": [
        "완전",
        "불완전 ($M_y = 1,\\ N_x = -1$)",
        "판별 불가",
        "$M_y = N_x = 0$"
      ],
      "answer": "불완전 ($M_y = 1,\\ N_x = -1$)",
      "hints": [
        "$M = y$, $N = -x$.",
        "$M_y = 1$, $N_x = -1$."
      ],
      "explanation": "$M_y = 1 \\ne -1 = N_x$이므로 완전이 아닙니다. 이 경우 적분인자를 곱해 완전으로 만들 수 있습니다.",
      "wrongAnalysis": "$N$의 부호를 놓치는 실수가 흔합니다. $y\\,dx - x\\,dy = 0$ 에서 $N = -x$입니다."
    },
    {
      "id": "5-3",
      "type": "text",
      "difficulty": 3,
      "question": "$(2x + y)\\,dx + (x + 6y)\\,dy = 0$ 의 일반해를 구하면 $F(x,y) = C$ 형태에서 $F(x,y)$는? (식, 예: x^2+xy+3y^2)",
      "answer": "x^2+xy+3y^2",
      "hints": [
        "$M_y = 1 = N_x$ 확인.",
        "$F_x = 2x+y \\Rightarrow F = x^2 + xy + h(y)$.",
        "$F_y = x + h'(y) = x + 6y$."
      ],
      "explanation": "$M_y = 1 = N_x$ (완전). $F = x^2 + xy + h(y)$. $F_y = x + h'(y) = x + 6y \\Rightarrow h'(y) = 6y \\Rightarrow h(y) = 3y^2$. 따라서 $F = x^2 + xy + 3y^2$.",
      "wrongAnalysis": "$h(y)$를 결정할 때 $F_y = N$에서 $x$ 항이 상쇄됨을 놓치는 실수가 있습니다."
    },
    {
      "id": "5-4",
      "type": "choice",
      "difficulty": 1,
      "question": "미분형식 $M\\,dx + N\\,dy = 0$이 완전미분방정식이 되기 위한 조건은?",
      "choices": [
        "$M + N = 0$",
        "$\\dfrac{\\partial M}{\\partial y} = \\dfrac{\\partial N}{\\partial x}$",
        "$M \\cdot N = 1$",
        "$\\dfrac{\\partial M}{\\partial x} = \\dfrac{\\partial N}{\\partial y}$"
      ],
      "answer": "$\\dfrac{\\partial M}{\\partial y} = \\dfrac{\\partial N}{\\partial x}$",
      "hints": [
        "퍼텐셜 함수 $F$가 존재하면 $F_x = M$, $F_y = N$입니다.",
        "혼합편미분의 대칭성 $F_{xy} = F_{yx}$를 이용하세요."
      ],
      "explanation": "$F_{xy} = M_y$이고 $F_{yx} = N_x$인데, 슈바르츠 정리에 의해 $F_{xy} = F_{yx}$이므로 $M_y = N_x$가 완전 조건입니다.",
      "wrongAnalysis": "$M_x = N_y$로 잘못 기억하는 실수가 흔합니다. $M$은 $y$로, $N$은 $x$로 편미분해야 합니다 (교차)."
    },
    {
      "id": "5-5",
      "type": "number",
      "difficulty": 1,
      "question": "$(3x^2)\\,dx + (2y)\\,dy = 0$이 완전미분방정식임을 확인하고, 일반해 $F(x,y) = C$에서 $F(1,1)$의 값은?",
      "answer": "2",
      "hints": [
        "$M = 3x^2$, $N = 2y$이므로 $M_y = 0 = N_x$ (완전).",
        "$F_x = 3x^2$를 적분하면 $F = x^3 + h(y)$이고, $F_y = h'(y) = 2y$에서 $h = y^2$이므로 $F = x^3 + y^2$."
      ],
      "explanation": "$F = x^3 + y^2$이므로 $F(1,1) = 1 + 1 = 2$.",
      "wrongAnalysis": "$F$를 구한 후 대입할 때 거듭제곱을 잘못 계산하는 실수가 있습니다."
    }
  ],
  "summary": {
    "keyPoints": [
      "완전 조건: $M_y = N_x$",
      "퍼텐셜 함수 $F$ 찾기",
      "$F(x,y)=C$가 일반해"
    ],
    "formulas": [
      "\\frac{\\partial M}{\\partial y} = \\frac{\\partial N}{\\partial x}",
      "F_x = M,\\quad F_y = N"
    ],
    "commonMistakes": [
      "$M$과 $N$의 편미분 방향 혼동",
      "미지함수 $h(y)$ 결정 누락"
    ],
    "nextConnection": "완전 조건 $M_y = N_x$가 성립하지 않으면? 다음 단원에서 적분인자를 곱해 완전하게 만드는 방법을 배웁니다."
  }
},
{
  "id": 6,
  "title": "불완전 미분방정식의 적분인자",
  "category": "미분방정식",
  "level": "고급",
  "question": "$M_y \\neq N_x$일 때, 적분인자를 곱해 완전미분방정식으로 만들 수 있을까?",
  "concept": {
    "intro": "이전 레슨에서 $M\\,dx + N\\,dy = 0$이 완전하려면 $M_y = N_x$이어야 한다고 배웠습니다. 그런데 대부분의 미분형식은 이 조건을 만족하지 않습니다.\n\n:::definition[적분인자]\n적절한 함수 $\\mu$를 곱하면 $\\mu M\\,dx + \\mu N\\,dy = 0$이 완전이 되도록 만들 수 있습니다. 이 $\\mu$를 적분인자(integrating factor)라 합니다.\n:::\n\n일반적으로 $\\mu(x,y)$를 찾는 것은 원래 ODE를 푸는 것만큼 어렵습니다. 하지만 $\\mu$가 $x$만의 함수이거나 $y$만의 함수인 특수한 경우에는 공식이 있습니다.\n\n:::theorem[$\\mu(x)$ 공식]\n$\\frac{\\partial}{\\partial y}(\\mu M) = \\frac{\\partial}{\\partial x}(\\mu N)$에서 $\\mu$가 $y$에 무관하면 $\\mu(M_y - N_x) = \\mu' N$입니다. 따라서:\n$$\\frac{\\mu'}{\\mu} = \\frac{M_y - N_x}{N}$$\n우변이 $x$만의 함수이면 $\\mu(x) = e^{\\int \\frac{M_y - N_x}{N}\\,dx}$.\n:::\n\n:::theorem[$\\mu(y)$ 공식]\n마찬가지로:\n$$\\frac{\\mu'}{\\mu} = \\frac{N_x - M_y}{M}$$\n우변이 $y$만의 함수이면 $\\mu(y) = e^{\\int \\frac{N_x - M_y}{M}\\,dy}$.\n:::\n\n:::note[풀이 전략]\n$\\frac{M_y - N_x}{N}$가 $x$만의 함수인지 확인 → 맞으면 $\\mu(x)$ 사용. 아니면 $\\frac{N_x - M_y}{M}$가 $y$만의 함수인지 확인 → 맞으면 $\\mu(y)$ 사용. 둘 다 아니면 다른 기법이 필요합니다.\n:::",
    "intuition": "적분인자는 '불완전한 미분형식에 적절한 가중치를 곱해서 완전하게 만드는 것'입니다. 레슨 3의 1계 선형 ODE 적분인자 $\\mu = e^{\\int P\\,dx}$도 사실 이 일반론의 특수한 경우입니다.",
    "formula": "\\mu(x) = e^{\\int \\frac{M_y - N_x}{N}\\,dx} \\quad \\left(\\frac{M_y - N_x}{N}\\text{가 }x\\text{만의 함수일 때}\\right)\n\\mu(y) = e^{\\int \\frac{N_x - M_y}{M}\\,dy} \\quad \\left(\\frac{N_x - M_y}{M}\\text{가 }y\\text{만의 함수일 때}\\right)",
    "summary": ":::note[요약]\n불완전 미분방정식에 적분인자 $\\mu$를 곱하면 완전으로 만들 수 있다. $\\frac{M_y - N_x}{N}$가 $x$만의 함수이면 $\\mu(x)$를, $\\frac{N_x - M_y}{M}$가 $y$만의 함수이면 $\\mu(y)$를 사용한다.\n:::"
  },
  "examples": [
    {
      "title": "[기본] 적분인자로 불완전 방정식 풀기",
      "problem": "$y\\,dx - x\\,dy = 0$을 풀어라.",
      "steps": [
        "$M = y$, $N = -x$. $M_y = 1$, $N_x = -1$. $M_y \\neq N_x$이므로 불완전.",
        "$\\frac{M_y - N_x}{N} = \\frac{1-(-1)}{-x} = \\frac{2}{-x} = -\\frac{2}{x}$. $x$만의 함수!",
        "$\\mu(x) = e^{\\int -2/x\\,dx} = e^{-2\\ln|x|} = \\frac{1}{x^2}$.",
        "곱하면: $\\frac{y}{x^2}\\,dx - \\frac{1}{x}\\,dy = 0$. 확인: $M_y' = \\frac{1}{x^2}$, $N_x' = \\frac{1}{x^2}$. 완전!",
        "$F_x = \\frac{y}{x^2} \\Rightarrow F = -\\frac{y}{x} + h(y)$. $F_y = -\\frac{1}{x} + h'(y) = -\\frac{1}{x} \\Rightarrow h'(y) = 0$.",
        "$F = -\\frac{y}{x} = C$, 즉 $y = Cx$."
      ],
      "answer": "$y = Cx$",
      "lesson": "불완전 미분방정식을 만나면 먼저 $\\frac{M_y - N_x}{N}$이 $x$만의 함수인지 확인하세요."
    },
    {
      "title": "[기본] 1계 선형 ODE와의 관계",
      "problem": "$y' + 2y = x$를 미분형식으로 쓰고 적분인자를 구하시오.",
      "steps": [
        "$(2y - x)\\,dx + dy = 0$. $M = 2y - x$, $N = 1$.",
        "$M_y = 2$, $N_x = 0$. 불완전.",
        "$\\frac{M_y - N_x}{N} = \\frac{2}{1} = 2$. $x$만의 함수(상수)!",
        "$\\mu(x) = e^{\\int 2\\,dx} = e^{2x}$.",
        "이것은 1계 선형 ODE의 적분인자와 정확히 일치합니다."
      ],
      "answer": "$\\mu(x) = e^{2x}$",
      "lesson": "1계 선형 ODE $y' + P(x)y = Q(x)$의 적분인자 $e^{\\int P\\,dx}$는 미분형식의 적분인자의 특수한 경우입니다."
    },
    {
      "title": "[응용] $y$만의 적분인자",
      "problem": "$(2y^2 + 3x)\\,dx + (2xy)\\,dy = 0$을 풀어라.",
      "steps": [
        "$M_y = 4y$, $N_x = 2y$. 불완전.",
        "$\\frac{M_y - N_x}{N} = \\frac{4y - 2y}{2xy} = \\frac{1}{x}$. $x$만의 함수!",
        "$\\mu(x) = e^{\\int 1/x\\,dx} = x$.",
        "곱하면: $(2xy^2 + 3x^2)\\,dx + (2x^2 y)\\,dy = 0$.",
        "$F_x = 2xy^2 + 3x^2$ 적분: $F = x^2 y^2 + x^3 + h(y)$.",
        "$F_y = 2x^2 y + h'(y) = 2x^2 y$이므로 $h'(y) = 0$. $F = x^2 y^2 + x^3 = C$."
      ],
      "answer": "$x^2 y^2 + x^3 = C$",
      "lesson": "$\\frac{M_y - N_x}{N}$가 $x$만의 함수이면 $\\mu(x)$를 사용합니다. 적분인자를 곱한 후 반드시 완전 조건을 확인하세요."
    },
    {
      "title": "[응용] $\\mu(y)$ 적분인자 사용",
      "problem": "$(x + y^2)\\,dx + (xy)\\,dy = 0$을 풀어라.",
      "steps": [
        "$M_y = 2y$, $N_x = y$. 불완전.",
        "$\\frac{M_y - N_x}{N} = \\frac{2y - y}{xy} = \\frac{1}{x}$. $x$만의 함수!",
        "$\\mu(x) = e^{\\int 1/x\\,dx} = x$.",
        "곱하면: $(x^2 + xy^2)\\,dx + (x^2 y)\\,dy = 0$.",
        "$F_y = x^2 y$를 적분: $F = \\frac{x^2 y^2}{2} + g(x)$.",
        "$F_x = xy^2 + g'(x) = x^2 + xy^2$이므로 $g'(x) = x^2$, $g(x) = \\frac{x^3}{3}$.",
        "$F = \\frac{x^2 y^2}{2} + \\frac{x^3}{3} = C$."
      ],
      "answer": "$\\dfrac{x^2 y^2}{2} + \\dfrac{x^3}{3} = C$",
      "lesson": "적분인자를 곱한 후 $M$과 $N$ 중 적분이 편한 쪽을 선택하여 퍼텐셜 함수를 구합니다."
    },
    {
      "title": "[심화] 적분인자가 $x$도 $y$도 아닌 경우",
      "problem": "$(y^2)\\,dx + (-xy)\\,dy = 0$에서 $\\mu = x^a y^b$ 형태의 적분인자를 찾아 풀어라.",
      "steps": [
        "$M = y^2$, $N = -xy$. $M_y = 2y$, $N_x = -y$. 불완전.",
        "$\\frac{M_y - N_x}{N} = \\frac{3y}{-xy} = -\\frac{3}{x}$. $x$만의 함수!",
        "$\\mu(x) = e^{\\int -3/x\\,dx} = x^{-3}$.",
        "곱하면: $\\frac{y^2}{x^3}\\,dx - \\frac{y}{x^2}\\,dy = 0$.",
        "$F_y = -\\frac{y}{x^2}$ 적분: $F = -\\frac{y^2}{2x^2} + g(x)$.",
        "$F_x = \\frac{y^2}{x^3} + g'(x) = \\frac{y^2}{x^3}$이므로 $g'(x) = 0$. $F = -\\frac{y^2}{2x^2} = C$."
      ],
      "answer": "$\\dfrac{y^2}{x^2} = C$ (즉 $y = Cx$)",
      "lesson": "적분인자가 $x^{-3}$ 같은 음의 거듭제곱이 될 수도 있습니다. $e^{a\\ln x} = x^a$를 자유자재로 활용하세요."
    }
  ],
  "problems": [
    {
      "id": "6-1",
      "type": "choice",
      "difficulty": 2,
      "question": "$M = y$, $N = -x$일 때 $\\frac{M_y - N_x}{N}$의 값은?",
      "choices": [
        "$\\frac{2}{x}$",
        "$-\\frac{2}{x}$",
        "$\\frac{1}{x}$",
        "$0$"
      ],
      "answer": "$-\\frac{2}{x}$",
      "hints": [
        "$M_y = 1$, $N_x = -1$.",
        "$M_y - N_x = 1 - (-1) = 2$.",
        "$\\frac{2}{N} = \\frac{2}{-x} = -\\frac{2}{x}$."
      ],
      "explanation": "$M_y - N_x = 2$. $N = -x$이므로 $\\frac{2}{-x} = -\\frac{2}{x}$.",
      "wrongAnalysis": "$N = x$로 부호를 잘못 잡아 $\\frac{2}{x}$로 답하는 실수가 흔합니다. 원래 식에서 $N$의 부호를 정확히 읽으세요."
    },
    {
      "id": "6-2",
      "type": "choice",
      "difficulty": 2,
      "question": "적분인자 $\\mu(x) = e^{\\int -2/x\\,dx}$를 계산하면?",
      "choices": [
        "$x^2$",
        "$\\frac{1}{x^2}$",
        "$e^{-2x}$",
        "$\\frac{1}{x}$"
      ],
      "answer": "$\\frac{1}{x^2}$",
      "hints": [
        "$\\int -\\frac{2}{x}\\,dx = -2\\ln|x|$.",
        "$e^{-2\\ln|x|} = |x|^{-2} = \\frac{1}{x^2}$."
      ],
      "explanation": "$e^{-2\\ln|x|} = e^{\\ln|x|^{-2}} = \\frac{1}{x^2}$. $e^{a\\ln b} = b^a$를 활용합니다.",
      "wrongAnalysis": "$e^{-2x}$를 선택하는 실수는 $\\int -2/x\\,dx$를 $-2x$로 잘못 계산한 것입니다."
    },
    {
      "id": "6-3",
      "type": "text",
      "difficulty": 3,
      "question": "$(3xy + y^2)\\,dx + (x^2 + xy)\\,dy = 0$에서 $\\frac{M_y - N_x}{N}$을 계산하시오. (정수 또는 식, 예: 1/x)",
      "answer": "1/x",
      "hints": [
        "$M_y = 3x + 2y$, $N_x = 2x + y$.",
        "$M_y - N_x = (3x+2y) - (2x+y) = x + y$.",
        "$N = x^2 + xy = x(x+y)$이므로 $\\frac{x+y}{x(x+y)} = \\frac{1}{x}$."
      ],
      "explanation": "$M_y - N_x = x+y$. $N = x(x+y)$. $\\frac{x+y}{x(x+y)} = \\frac{1}{x}$. $x$만의 함수이므로 $\\mu(x) = e^{\\int 1/x\\,dx} = x$.",
      "wrongAnalysis": "편미분 계산에서 $M_y$와 $N_x$를 혼동하는 실수가 있습니다. $M$은 $y$로, $N$은 $x$로 미분하세요."
    },
    {
      "id": "6-4",
      "type": "choice",
      "difficulty": 1,
      "question": "불완전 미분방정식 $M\\,dx + N\\,dy = 0$에 적분인자 $\\mu$를 곱하는 목적은?",
      "choices": [
        "방정식의 차수를 낮추기 위해",
        "$\\mu M\\,dx + \\mu N\\,dy = 0$이 완전미분방정식이 되도록 하기 위해",
        "변수를 분리하기 위해",
        "특성방정식을 구하기 위해"
      ],
      "answer": "$\\mu M\\,dx + \\mu N\\,dy = 0$이 완전미분방정식이 되도록 하기 위해",
      "hints": [
        "불완전이란 $M_y \\neq N_x$라는 뜻입니다.",
        "$\\mu$를 곱하면 새로운 $M' = \\mu M$, $N' = \\mu N$에 대해 $M'_y = N'_x$가 되도록 합니다."
      ],
      "explanation": "적분인자 $\\mu$를 곱하면 $(\\mu M)_y = (\\mu N)_x$가 성립하여 완전미분방정식이 됩니다. 그러면 퍼텐셜 함수 $F$를 구해 $F = C$가 일반해가 됩니다.",
      "wrongAnalysis": "적분인자의 역할을 변수분리나 차수 낮추기와 혼동하는 실수가 있습니다."
    },
    {
      "id": "6-5",
      "type": "number",
      "difficulty": 1,
      "question": "$M = 2y$, $N = -x$일 때 $M_y - N_x$의 값은?",
      "answer": "3",
      "hints": [
        "$M_y = \\dfrac{\\partial(2y)}{\\partial y} = 2$.",
        "$N_x = \\dfrac{\\partial(-x)}{\\partial x} = -1$."
      ],
      "explanation": "$M_y = 2$, $N_x = -1$이므로 $M_y - N_x = 2 - (-1) = 3$.",
      "wrongAnalysis": "빼기에서 이중 음의 부호를 놓쳐 $2 - 1 = 1$로 계산하는 실수가 흔합니다."
    }
  ],
  "summary": {
    "keyPoints": [
      "불완전($M_y \\neq N_x$)이면 적분인자 $\\mu$를 곱해 완전으로 변환.",
      "$\\frac{M_y - N_x}{N}$가 $x$만의 함수 → $\\mu(x)$ 사용.",
      "$\\frac{N_x - M_y}{M}$가 $y$만의 함수 → $\\mu(y)$ 사용."
    ],
    "formulas": [
      "\\mu(x) = e^{\\int \\frac{M_y - N_x}{N}\\,dx}",
      "\\mu(y) = e^{\\int \\frac{N_x - M_y}{M}\\,dy}"
    ],
    "commonMistakes": [
      "$M$과 $N$의 부호를 잘못 읽는 실수.",
      "$\\frac{M_y - N_x}{N}$와 $\\frac{N_x - M_y}{M}$의 분자 순서를 혼동.",
      "$e^{a\\ln x} = x^a$를 잊어버리는 실수."
    ],
    "nextConnection": "다음 단원에서는 베르누이 방정식과 동차 방정식을 치환으로 푸는 기법을 배웁니다."
  }
},
{
  "id": 7,
  "title": "베르누이·동차 미분방정식",
  "category": "미분방정식",
  "level": "고급",
  "question": "비선형처럼 보이지만 치환으로 선형화할 수 있는 ODE는 어떤 것이 있을까?",
  "concept": {
    "intro": ":::definition[베르누이 방정식]\n$y' + P(x)y = Q(x)y^n$ ($n \\ne 0, 1$).\n치환 $v = y^{1-n}$ 을 적용하면 $v$에 대한 1계 선형 ODE로 변환됩니다.\n:::\n\n:::definition[동차(Homogeneous) 방정식]\n$\\dfrac{dy}{dx} = f\\!\\left(\\dfrac{y}{x}\\right)$.\n치환 $v = y/x$ (즉 $y = vx$)를 쓰면 변수분리형으로 변환됩니다.\n:::",
    "intuition": "베르누이는 '$y^n$이 방해꾼이니 $v = y^{1-n}$으로 거듭제곱을 상쇄'하는 발상입니다. 동차는 '$y/x$ 비율만 중요한 방정식이니 그 비율 자체를 새 변수로'라는 발상입니다.",
    "formula": "\\text{베르누이:}\\ v = y^{1-n},\\quad v' + (1-n)Pv = (1-n)Q\n\\text{동차:}\\ v = y/x,\\quad y = vx,\\quad y' = v + xv'",
    "summary": ":::note[요약]\n• 베르누이: $v=y^{1-n}$ 치환 → 선형\n• 동차: $v=y/x$ 치환 → 분리변수\n• 핵심은 적절한 치환\n:::"
  },
  "examples": [
    {
      "title": "[기본] 베르누이 방정식",
      "problem": "$y' + y = y^2$ 를 풀어라.",
      "steps": [
        "베르누이: $n=2$. $v = y^{1-2} = y^{-1} = 1/y$.",
        "$v' = -y^{-2}y'$이므로 원래 식 $y' + y = y^2$를 $y^2$로 나누면: $y^{-2}y' + y^{-1} = 1$.",
        "$-v' + v = 1 \\;\\Rightarrow\\; v' - v = -1$.",
        "1계 선형: 적분인자 $e^{-x}$. $(e^{-x}v)' = -e^{-x}$.",
        "$e^{-x}v = e^{-x} + C \\;\\Rightarrow\\; v = 1 + Ce^x$.",
        "$y = 1/v = \\dfrac{1}{1 + Ce^x}$."
      ],
      "answer": "$y = \\dfrac{1}{1 + Ce^x}$",
      "lesson": "베르누이 방정식의 핵심은 $y^n$으로 나눈 뒤 $v = y^{1-n}$으로 치환하는 것입니다."
    },
    {
      "title": "[기본] 동차 미분방정식",
      "problem": "$y' = \\dfrac{y}{x} + 1$ 을 풀어라.",
      "steps": [
        "우변 $= \\dfrac{y}{x} + 1 = f(y/x)$이므로 동차.",
        "$v = y/x$, $y = vx$, $y' = v + xv'$.",
        "$v + xv' = v + 1$이므로 $xv' = 1$.",
        "$\\dfrac{dv}{1} = \\dfrac{dx}{x}$, 양변 적분: $v = \\ln|x| + C$.",
        "$y = vx = x(\\ln|x| + C)$."
      ],
      "answer": "$y = x(\\ln|x| + C)$",
      "lesson": "동차 방정식의 치환 $v = y/x$ 후 $v$ 항이 소거되면 분리변수형이 됩니다."
    },
    {
      "title": "[응용] 베르누이 $n = 3$ 경우",
      "problem": "$y' - y = -y^3$ 를 풀어라.",
      "steps": [
        "$n = 3$이므로 $v = y^{1-3} = y^{-2}$.",
        "양변을 $y^3$으로 나누면: $y^{-3}y' - y^{-2} = -1$.",
        "$v' = -2y^{-3}y'$이므로 $-\\frac{1}{2}v' - v = -1$.",
        "$v' + 2v = 2$. 적분인자 $e^{2x}$: $(e^{2x}v)' = 2e^{2x}$.",
        "$e^{2x}v = e^{2x} + C$이므로 $v = 1 + Ce^{-2x}$.",
        "$y^{-2} = 1 + Ce^{-2x}$, 즉 $y = \\pm\\dfrac{1}{\\sqrt{1 + Ce^{-2x}}}$."
      ],
      "answer": "$y = \\pm\\dfrac{1}{\\sqrt{1 + Ce^{-2x}}}$",
      "lesson": "$n = 3$이면 $v = y^{-2}$이고 $v' = -2y^{-3}y'$입니다. $(1-n)$ 인자를 정확히 처리하는 것이 관건입니다."
    },
    {
      "title": "[응용] 동차 방정식의 분리변수",
      "problem": "$y' = \\dfrac{x^2 + y^2}{xy}$, $x > 0$, $y > 0$ 를 풀어라.",
      "steps": [
        "$y' = \\dfrac{x}{y} + \\dfrac{y}{x} = f(y/x)$이므로 동차.",
        "$v = y/x$, $y' = v + xv'$. 대입: $v + xv' = \\dfrac{1}{v} + v$.",
        "$xv' = \\dfrac{1}{v}$이므로 $v\\,dv = \\dfrac{dx}{x}$.",
        "양변 적분: $\\dfrac{v^2}{2} = \\ln x + C$.",
        "$v = y/x$ 대입: $\\dfrac{y^2}{2x^2} = \\ln x + C$, 즉 $y^2 = 2x^2(\\ln x + C)$."
      ],
      "answer": "$y^2 = 2x^2(\\ln x + C)$",
      "lesson": "$v$ 치환 후 $v$ 항이 소거되어 분리변수형이 되는 것이 동차 방정식의 핵심 구조입니다."
    },
    {
      "title": "[심화] 치환 판별: 베르누이인가 동차인가",
      "problem": "$xy' - y = x^2 y^2$를 적절한 치환으로 풀어라.",
      "steps": [
        "표준형: $y' - \\dfrac{y}{x} = xy^2$. 이는 베르누이 ($n = 2$, $P = -1/x$, $Q = x$).",
        "$v = y^{-1}$, $v' = -y^{-2}y'$.",
        "$y^2$으로 나누면: $y^{-2}y' - \\dfrac{y^{-1}}{x} = x$, 즉 $-v' - \\dfrac{v}{x} = x$.",
        "$v' + \\dfrac{v}{x} = -x$. 적분인자 $\\mu = x$.",
        "$(xv)' = -x^2$, $xv = -\\dfrac{x^3}{3} + C$, $v = -\\dfrac{x^2}{3} + \\dfrac{C}{x}$.",
        "$y = \\dfrac{1}{v} = \\dfrac{1}{-x^2/3 + C/x} = \\dfrac{3x}{-x^3 + 3C}$."
      ],
      "answer": "$y = \\dfrac{3x}{3C - x^3}$",
      "lesson": "동차와 베르누이를 구별하는 핵심: $f(y/x)$ 형태면 동차, $y' + Py = Qy^n$ 형태면 베르누이입니다. 표준형으로 변환한 뒤 판단하세요."
    }
  ],
  "problems": [
    {
      "id": "7-1",
      "type": "choice",
      "difficulty": 2,
      "question": "$y' + y = y^3$ 에서 베르누이 치환 $v = y^{1-n}$의 $v$는?",
      "choices": [
        "$v = y^{-2}$",
        "$v = y^2$",
        "$v = y^{-1}$",
        "$v = y^3$"
      ],
      "answer": "$v = y^{-2}$",
      "hints": [
        "$n = 3$.",
        "$v = y^{1-3} = y^{-2}$."
      ],
      "explanation": "베르누이 방정식 $y' + Py = Qy^n$에서 $n=3$이므로 $v = y^{1-3} = y^{-2}$.",
      "wrongAnalysis": "$1-n$ 대신 $n$을 지수로 쓰는 실수가 흔합니다."
    },
    {
      "id": "7-2",
      "type": "choice",
      "difficulty": 2,
      "question": "$\\dfrac{dy}{dx} = \\dfrac{x+y}{x}$ 는 동차 방정식인가?",
      "choices": [
        "동차 ($f(y/x) = 1 + y/x$)",
        "비동차",
        "베르누이 형태",
        "완전미분 형태"
      ],
      "answer": "동차 ($f(y/x) = 1 + y/x$)",
      "hints": [
        "$\\dfrac{x+y}{x} = 1 + \\dfrac{y}{x}$.",
        "$y/x$의 함수로 표현 가능."
      ],
      "explanation": "우변이 $y/x$의 함수 $f(v) = 1+v$로 쓰이므로 동차 방정식. $v = y/x$ 치환으로 분리변수형이 됩니다.",
      "wrongAnalysis": "동차(homogeneous)와 제차(homogeneous linear)를 혼동하지 마세요. 여기서 동차는 $f(y/x)$ 형태를 의미합니다."
    },
    {
      "id": "7-3",
      "type": "choice",
      "difficulty": 3,
      "question": "$y' = \\dfrac{y}{x} + \\left(\\dfrac{y}{x}\\right)^2$ 에서 $v = y/x$ 치환 후 방정식은?",
      "choices": [
        "$x\\,v' = v^2$",
        "$v' = v + v^2$",
        "$v' + v = v^2$",
        "$x\\,v' = v + 2v^2$"
      ],
      "answer": "$x\\,v' = v^2$",
      "hints": [
        "$y = vx \\Rightarrow y' = v + xv'$.",
        "$v + xv' = v + v^2$.",
        "$xv' = v^2$."
      ],
      "explanation": "$y = vx$, $y' = v + xv'$. 대입: $v + xv' = v + v^2$. 따라서 $xv' = v^2$ (분리변수형).",
      "wrongAnalysis": "$y' = v + xv'$에서 $v$ 항을 양변에서 소거하는 것을 잊는 실수가 있습니다."
    },
    {
      "id": "7-4",
      "type": "choice",
      "difficulty": 1,
      "question": "베르누이 방정식 $y' + P(x)y = Q(x)y^n$에서 $n = 0$이면 이 방정식은?",
      "choices": [
        "변수분리형 ODE",
        "1계 선형 ODE",
        "2계 ODE",
        "완전미분방정식"
      ],
      "answer": "1계 선형 ODE",
      "hints": [
        "$y^0 = 1$입니다.",
        "$n=0$을 대입하면 $y' + Py = Q$가 됩니다."
      ],
      "explanation": "$n = 0$이면 $y' + P(x)y = Q(x) \\cdot 1 = Q(x)$로, 표준적인 1계 선형 ODE입니다. 그래서 $n \\neq 0, 1$인 경우만 베르누이 치환이 필요합니다.",
      "wrongAnalysis": "$n=0$과 $n=1$이 베르누이 치환이 불필요한 특수한 경우임을 모르는 실수가 있습니다."
    },
    {
      "id": "7-5",
      "type": "choice",
      "difficulty": 1,
      "question": "동차 방정식 $y' = f(y/x)$에서 사용하는 치환은?",
      "choices": [
        "$v = xy$",
        "$v = y/x$",
        "$v = y^2$",
        "$v = e^y$"
      ],
      "answer": "$v = y/x$",
      "hints": [
        "우변이 $y/x$의 함수이므로 그 비율을 새 변수로 놓습니다.",
        "$y = vx$로 놓으면 $y' = v + xv'$입니다."
      ],
      "explanation": "동차 방정식은 $y/x$의 비율만으로 결정되므로 $v = y/x$ 치환이 자연스럽습니다. 이 치환으로 변수분리형 ODE가 됩니다.",
      "wrongAnalysis": "$v = xy$로 치환하면 분리가 되지 않습니다. $v = y/x$여야 우변의 $f(y/x)$를 $f(v)$로 바꿀 수 있습니다."
    }
  ],
  "summary": {
    "keyPoints": [
      "베르누이: $v=y^{1-n}$으로 선형화",
      "동차: $v=y/x$로 분리변수형 변환",
      "비선형 ODE도 적절한 치환이면 풀림"
    ],
    "formulas": [
      "\\text{베르누이:}\\ v = y^{1-n}",
      "\\text{동차:}\\ v = y/x,\\ y'=v+xv'"
    ],
    "commonMistakes": [
      "베르누이 치환의 지수 $1-n$ 실수",
      "$y = vx$ 미분 시 $y' = v + xv'$ 곱의 미분 누락"
    ],
    "nextConnection": "다음 단원에서는 해의 존재와 유일성, 그리고 선형 ODE 해의 구조를 이론적으로 정리합니다."
  }
},
{
  "id": 8,
  "title": "존재·유일성 정리와 해의 구조",
  "category": "미분방정식",
  "level": "심화",
  "question": "미분방정식의 해가 존재하는지, 유일한지 어떻게 보장할 수 있을까?",
  "concept": {
    "intro": ":::theorem[피카르-린델뢰프 존재·유일성 정리]\n$y' = f(x,y)$에서 $f$와 $\\partial f/\\partial y$가 $(x_0,y_0)$ 근방에서 연속이면, 초기값 문제 $y(x_0)=y_0$의 해가 어떤 구간에서 존재하고 유일합니다.\n:::\n\n:::note[선형 ODE 해의 구조]\n선형 ODE $y'' + p(x)y' + q(x)y = g(x)$의 해의 구조:\n• 일반해 = 제차 일반해 + 비제차 특수해\n• 제차 일반해 = $C_1 y_1 + C_2 y_2$ (기본해 집합)\n:::\n\n:::definition[일차독립과 론스키안]\n두 함수 $y_1$, $y_2$가 **일차독립(linearly independent)**이란 $c_1 y_1 + c_2 y_2 = 0$이 모든 $x$에서 성립하는 유일한 해가 $c_1 = c_2 = 0$뿐이라는 뜻입니다. 일차독립 여부를 판별하는 도구가 **론스키안(Wronskian)**으로,\n• 론스키안 $W(y_1,y_2) \\ne 0$ ⟺ $y_1, y_2$ 일차독립\n:::",
    "intuition": "존재·유일성은 '출발점과 방향이 주어지면 경로가 하나로 정해진다'는 보장입니다. 해의 구조 정리는 '선형 방정식의 해 공간이 벡터공간이다'라는 사실의 직접적 결과입니다.",
    "formula": "\\text{론스키안:}\\ W(y_1,y_2) = \\begin{vmatrix} y_1 & y_2 \\\\ y_1' & y_2' \\end{vmatrix}\n\\text{일반해:}\\ y = C_1 y_1 + C_2 y_2 + y_p",
    "summary": ":::note[요약]\n• 리프시츠 조건 → 해 존재·유일\n• 중첩 원리: 선형 ODE 해의 합도 해\n• 론스키안으로 일차독립 판별\n:::"
  },
  "examples": [
    {
      "title": "[기본] 론스키안 계산",
      "problem": "$y_1 = e^x$, $y_2 = e^{2x}$ 의 론스키안을 구하고 일차독립임을 확인하시오.",
      "steps": [
        "$W = \\begin{vmatrix} e^x & e^{2x} \\\\ e^x & 2e^{2x} \\end{vmatrix}$.",
        "$W = e^x \\cdot 2e^{2x} - e^{2x} \\cdot e^x = 2e^{3x} - e^{3x} = e^{3x}$.",
        "$W = e^{3x} \\ne 0$ 이므로 일차독립."
      ],
      "answer": "$W = e^{3x} \\ne 0$",
      "lesson": "론스키안이 0이 아니면 두 함수는 일차독립이며 2계 ODE의 기본해 집합을 이룹니다."
    },
    {
      "title": "[기본] 일차종속 판별",
      "problem": "$y_1 = e^{3x}$, $y_2 = 5e^{3x}$ 의 론스키안을 구하고 일차독립 여부를 판별하시오.",
      "steps": [
        "$y_1' = 3e^{3x}$, $y_2' = 15e^{3x}$.",
        "$W = e^{3x} \\cdot 15e^{3x} - 5e^{3x} \\cdot 3e^{3x} = 15e^{6x} - 15e^{6x} = 0$.",
        "$W = 0$이므로 일차종속 — $y_2 = 5y_1$(상수배)."
      ],
      "answer": "$W = 0$ (일차종속)",
      "lesson": "하나의 함수가 다른 함수의 상수배이면 론스키안은 항등적으로 0이 되고, 일차종속입니다."
    },
    {
      "title": "[응용] 해의 구조 — 제차해와 특수해",
      "problem": "$y'' - y = e^{2x}$에서 $y_h = C_1 e^x + C_2 e^{-x}$이고 $y_p = \\frac{1}{3}e^{2x}$일 때, 일반해를 쓰시오.",
      "steps": [
        "비제차 ODE의 일반해 = 제차 일반해 + 비제차 특수해.",
        "$y = y_h + y_p = C_1 e^x + C_2 e^{-x} + \\dfrac{1}{3}e^{2x}$.",
        "검증: $y_p'' - y_p = 4 \\cdot \\frac{1}{3}e^{2x} - \\frac{1}{3}e^{2x} = e^{2x}$ ✓."
      ],
      "answer": "$y = C_1 e^x + C_2 e^{-x} + \\dfrac{1}{3}e^{2x}$",
      "lesson": "선형 ODE의 일반해는 벡터공간의 구조를 갖습니다: 제차해(영공간)에 특수해(하나의 점)를 평행이동한 것입니다."
    },
    {
      "title": "[응용] 존재·유일성의 적용",
      "problem": "$y' = 3y^{2/3}$, $y(0) = 0$에서 해가 유일한지 판별하시오.",
      "steps": [
        "$f(x,y) = 3y^{2/3}$. $f$는 $(0,0)$에서 연속.",
        "$\\dfrac{\\partial f}{\\partial y} = 2y^{-1/3}$. $y = 0$에서 발산!",
        "피카르-린델뢰프 조건 불만족 → 유일성 보장 안 됨.",
        "$y \\equiv 0$도 해, $y = t^3$도 해 (확인: $y' = 3t^2 = 3(t^3)^{2/3}$ ✓).",
        "따라서 해가 유일하지 않습니다."
      ],
      "answer": "해가 유일하지 않다. ($y = 0$, $y = x^3$ 모두 해)",
      "lesson": "$\\partial f/\\partial y$가 초기점에서 연속이 아니면 리프시츠 조건이 깨지고, 해의 유일성이 보장되지 않습니다."
    },
    {
      "title": "[심화] 중첩 원리의 활용",
      "problem": "$y'' + y = 0$의 해 $y_1 = \\cos x$, $y_2 = \\sin x$가 주어질 때, $3y_1 - 2y_2$도 해임을 보이시오.",
      "steps": [
        "$y = 3\\cos x - 2\\sin x$.",
        "$y' = -3\\sin x - 2\\cos x$.",
        "$y'' = -3\\cos x + 2\\sin x$.",
        "$y'' + y = (-3\\cos x + 2\\sin x) + (3\\cos x - 2\\sin x) = 0$ ✓.",
        "선형 제차 ODE의 해의 임의의 선형결합도 해입니다 (중첩 원리)."
      ],
      "answer": "$y'' + y = 0$ 만족 (중첩 원리)",
      "lesson": "중첩 원리: 선형 제차 ODE에서 $y_1, y_2$가 해이면 $c_1 y_1 + c_2 y_2$도 해입니다. 이것이 일반해가 $C_1 y_1 + C_2 y_2$ 형태인 이유입니다."
    }
  ],
  "problems": [
    {
      "id": "8-1",
      "type": "choice",
      "difficulty": 2,
      "question": "$y' = |y|^{1/2}$, $y(0)=0$ 의 해는 유일한가?",
      "choices": [
        "유일하다",
        "유일하지 않다 ($y=0$과 다른 해가 존재)",
        "해가 존재하지 않는다",
        "판별 불가"
      ],
      "answer": "유일하지 않다 ($y=0$과 다른 해가 존재)",
      "hints": [
        "$f(y) = |y|^{1/2}$는 $y=0$에서 $\\partial f/\\partial y$가 불연속.",
        "$y \\equiv 0$도 해이고, $y = \\frac{x^2}{4}$도 해."
      ],
      "explanation": "$\\partial f/\\partial y = \\frac{1}{2}|y|^{-1/2}$이 $y=0$에서 발산하므로 리프시츠 조건 불만족. $y=0$과 $y=x^2/4$ ($x \\ge 0$) 모두 해입니다.",
      "wrongAnalysis": "해가 존재하기만 하면 유일하다고 착각하는 실수가 흔합니다. 리프시츠 조건이 깨지면 유일성이 보장되지 않습니다."
    },
    {
      "id": "8-2",
      "type": "choice",
      "difficulty": 2,
      "question": "$W(y_1, y_2) = 0$ 이면 $y_1$과 $y_2$는?",
      "choices": [
        "일차독립",
        "일차종속",
        "항상 0",
        "판별 불가"
      ],
      "answer": "일차종속",
      "hints": [
        "론스키안은 두 해의 일차독립성을 판별하는 도구입니다.",
        "선형 ODE의 두 해에서 $W=0$이면 한 해가 다른 해의 상수배입니다."
      ],
      "explanation": "선형 ODE의 해에 대해 론스키안이 항등적으로 0이면 두 해는 일차종속입니다. 즉 두 해가 서로 독립적인 기본해가 될 수 없습니다.",
      "wrongAnalysis": "론스키안이 '어떤 점에서' 0인 것과 '항등적으로' 0인 것을 구별해야 합니다."
    },
    {
      "id": "8-3",
      "type": "choice",
      "difficulty": 3,
      "question": "$y'' + y = 0$의 해 $y_1 = \\cos x$, $y_2 = \\sin x$에 대해 $W$는?",
      "choices": [
        "$W = 1$",
        "$W = 0$",
        "$W = -1$",
        "$W = 2\\sin x\\cos x$"
      ],
      "answer": "$W = 1$",
      "hints": [
        "$W = \\cos x \\cdot \\cos x - (\\sin x)(-\\sin x)$.",
        "$\\cos^2 x + \\sin^2 x$."
      ],
      "explanation": "$W = \\begin{vmatrix} \\cos x & \\sin x \\\\ -\\sin x & \\cos x \\end{vmatrix} = \\cos^2 x + \\sin^2 x = 1$.",
      "wrongAnalysis": "$\\sin x$의 도함수 $\\cos x$의 부호를 틀리거나, $-\\sin x$의 부호를 놓치는 실수가 있습니다."
    },
    {
      "id": "8-4",
      "type": "choice",
      "difficulty": 1,
      "question": "미분방정식 $y' = f(x,y)$, $y(x_0) = y_0$의 해가 존재하고 유일하기 위한 충분조건은?",
      "choices": [
        "$f$가 연속이면 충분하다",
        "$f$와 $\\partial f/\\partial y$가 $(x_0,y_0)$ 근방에서 연속이면 된다",
        "$f$가 다항식이어야 한다",
        "$f$가 양수이면 충분하다"
      ],
      "answer": "$f$와 $\\partial f/\\partial y$가 $(x_0,y_0)$ 근방에서 연속이면 된다",
      "hints": [
        "피카르-린델뢰프 정리의 조건을 떠올려 보세요.",
        "$f$의 연속성만으로는 해의 유일성이 보장되지 않습니다."
      ],
      "explanation": "피카르-린델뢰프 정리: $f$와 $\\partial f/\\partial y$가 초기점 근방에서 연속이면 해의 존재와 유일성이 보장됩니다. $f$만 연속이면 존재는 보장되지만 유일성은 보장되지 않을 수 있습니다.",
      "wrongAnalysis": "$f$의 연속성만으로 유일성까지 보장된다고 착각하는 실수가 흔합니다. $y' = |y|^{1/2}$가 반례입니다."
    },
    {
      "id": "8-5",
      "type": "choice",
      "difficulty": 1,
      "question": "2계 선형 ODE $y'' + p(x)y' + q(x)y = g(x)$의 일반해의 구조는?",
      "choices": [
        "일반해 = 특수해",
        "일반해 = 제차 일반해 + 비제차 특수해",
        "일반해 = $C_1 + C_2$",
        "일반해 = 제차해의 곱"
      ],
      "answer": "일반해 = 제차 일반해 + 비제차 특수해",
      "hints": [
        "선형 ODE의 해의 중첩 원리를 떠올려 보세요.",
        "제차 일반해는 $C_1 y_1 + C_2 y_2$입니다."
      ],
      "explanation": "비제차 선형 ODE의 일반해는 $y = y_h + y_p = C_1 y_1 + C_2 y_2 + y_p$입니다. 제차해의 선형결합에 비제차 특수해를 더한 구조입니다.",
      "wrongAnalysis": "제차해와 특수해를 곱하거나, 특수해만 일반해라고 생각하는 실수가 있습니다."
    }
  ],
  "summary": {
    "keyPoints": [
      "피카르-린델뢰프: 리프시츠 조건 → 존재·유일",
      "선형 ODE: 중첩 원리",
      "론스키안 $\\ne 0$ ⟺ 일차독립"
    ],
    "formulas": [
      "W(y_1,y_2) = y_1 y_2' - y_2 y_1'",
      "y = C_1 y_1 + C_2 y_2 + y_p"
    ],
    "commonMistakes": [
      "해의 존재와 유일성을 혼동",
      "론스키안의 행렬식 계산 실수"
    ],
    "nextConnection": "다음 단원부터 2계 제차 선형 ODE의 구체적인 풀이법 — 특성방정식을 배웁니다."
  }
},
{
  "id": 9,
  "title": "2계 제차 선형 ODE — 특성방정식",
  "category": "미분방정식",
  "level": "심화",
  "question": "$ay'' + by' + cy = 0$ 은 어떻게 풀까?",
  "concept": {
    "intro": ":::definition[특성방정식]\n2계 선형 동차 ODE $ay'' + by' + cy = 0$에 $y = e^{rx}$를 대입하면 $ar^2 + br + c = 0$이 됩니다. 이를 특성방정식(characteristic equation)이라 합니다.\n:::\n\n:::theorem[근의 종류에 따른 일반해]\n• 서로 다른 실근 $r_1, r_2$: $y = C_1 e^{r_1 x} + C_2 e^{r_2 x}$\n• 중근 $r$: $y = (C_1 + C_2 x)e^{rx}$\n• 복소근 $\\alpha \\pm \\beta i$: $y = e^{\\alpha x}(C_1 \\cos\\beta x + C_2 \\sin\\beta x)$\n:::",
    "intuition": "스프링, 진자, 전기 회로 — 2계 ODE의 대표 응용입니다. 실근 두 개는 과감쇠(overdamped), 중근은 임계감쇠(critically damped), 복소근은 진동(oscillation)을 나타냅니다.",
    "formula": "ar^2 + br + c = 0\n\\text{실근:}\\ C_1 e^{r_1 x} + C_2 e^{r_2 x}\n\\text{중근:}\\ (C_1 + C_2 x)e^{rx}\n\\text{복소근:}\\ e^{\\alpha x}(C_1\\cos\\beta x + C_2\\sin\\beta x)",
    "summary": ":::note[요약]\n• $y=e^{rx}$ 대입 → 특성방정식\n• 판별식으로 근의 종류 판별\n• 세 가지 경우 모두 암기\n:::"
  },
  "examples": [
    {
      "title": "[기본] 복소근 — 단순 조화 진동",
      "problem": "$y'' + y = 0$ 의 일반해를 구하시오.",
      "steps": [
        "특성방정식: $r^2 + 1 = 0 \\Rightarrow r = \\pm i$.",
        "$\\alpha = 0$, $\\beta = 1$.",
        "$y = e^{0\\cdot x}(C_1 \\cos x + C_2 \\sin x) = C_1 \\cos x + C_2 \\sin x$."
      ],
      "answer": "$y = C_1 \\cos x + C_2 \\sin x$",
      "lesson": "복소근 $\\pm \\beta i$에서 $\\alpha = 0$이면 감쇠 없는 순수 진동이 됩니다."
    },
    {
      "title": "[기본] 서로 다른 실근",
      "problem": "$y'' + y' - 6y = 0$ 의 일반해를 구하시오.",
      "steps": [
        "특성방정식: $r^2 + r - 6 = 0$.",
        "$(r + 3)(r - 2) = 0$이므로 $r = -3, 2$.",
        "$y = C_1 e^{-3x} + C_2 e^{2x}$."
      ],
      "answer": "$y = C_1 e^{-3x} + C_2 e^{2x}$",
      "lesson": "서로 다른 실근 $r_1, r_2$가 나오면 기본해는 $e^{r_1 x}, e^{r_2 x}$입니다. 인수분해 또는 근의 공식을 사용하세요."
    },
    {
      "title": "[응용] 중근 — 임계감쇠",
      "problem": "$y'' + 6y' + 9y = 0$ 의 일반해를 구하시오.",
      "steps": [
        "특성방정식: $r^2 + 6r + 9 = 0$.",
        "$(r + 3)^2 = 0$이므로 $r = -3$ (중근).",
        "중근이므로 $y = (C_1 + C_2 x)e^{-3x}$."
      ],
      "answer": "$y = (C_1 + C_2 x)e^{-3x}$",
      "lesson": "중근이면 두 번째 독립해는 $xe^{rx}$입니다. 물리적으로 임계감쇠(critically damped)에 해당합니다."
    },
    {
      "title": "[응용] 복소근 — 감쇠 진동",
      "problem": "$y'' + 2y' + 5y = 0$ 의 일반해를 구하시오.",
      "steps": [
        "특성방정식: $r^2 + 2r + 5 = 0$.",
        "근의 공식: $r = \\dfrac{-2 \\pm \\sqrt{4 - 20}}{2} = \\dfrac{-2 \\pm 4i}{2} = -1 \\pm 2i$.",
        "$\\alpha = -1$, $\\beta = 2$.",
        "$y = e^{-x}(C_1 \\cos 2x + C_2 \\sin 2x)$."
      ],
      "answer": "$y = e^{-x}(C_1 \\cos 2x + C_2 \\sin 2x)$",
      "lesson": "실수부 $\\alpha < 0$이면 감쇠 진동(underdamped)입니다. $e^{\\alpha x}$가 진폭을 줄이고, $\\cos/\\sin$이 진동을 담당합니다."
    },
    {
      "title": "[심화] 초기조건으로 완전한 해 결정",
      "problem": "$y'' - 4y' + 4y = 0$, $y(0) = 1$, $y'(0) = 3$ 의 해를 구하시오.",
      "steps": [
        "$(r - 2)^2 = 0$, 중근 $r = 2$. $y = (C_1 + C_2 x)e^{2x}$.",
        "$y(0) = C_1 = 1$.",
        "$y' = C_2 e^{2x} + 2(C_1 + C_2 x)e^{2x}$. $y'(0) = C_2 + 2C_1 = 3$.",
        "$C_2 = 3 - 2(1) = 1$.",
        "$y = (1 + x)e^{2x}$."
      ],
      "answer": "$y = (1 + x)e^{2x}$",
      "lesson": "2계 ODE의 초기조건 $y(x_0), y'(x_0)$을 대입하면 두 상수 $C_1, C_2$가 유일하게 결정됩니다."
    }
  ],
  "problems": [
    {
      "id": "9-1",
      "type": "choice",
      "difficulty": 2,
      "question": "$y'' - 3y' + 2y = 0$ 의 일반해는?",
      "choices": [
        "$C_1 e^x + C_2 e^{2x}$",
        "$C_1 e^{-x} + C_2 e^{-2x}$",
        "$(C_1 + C_2 x)e^{2x}$",
        "$C_1 \\cos x + C_2 \\sin x$"
      ],
      "answer": "$C_1 e^x + C_2 e^{2x}$",
      "hints": [
        "$r^2 - 3r + 2 = (r-1)(r-2) = 0$.",
        "서로 다른 실근 $r=1, 2$."
      ],
      "explanation": "특성방정식 $(r-1)(r-2)=0$에서 $r=1,2$. 일반해 $y = C_1 e^x + C_2 e^{2x}$.",
      "wrongAnalysis": "근의 부호를 반대로 적어 $e^{-x}, e^{-2x}$로 쓰는 실수가 흔합니다."
    },
    {
      "id": "9-2",
      "type": "choice",
      "difficulty": 2,
      "question": "$y'' + 4y = 0$ 의 일반해는?",
      "choices": [
        "$C_1 e^{2x} + C_2 e^{-2x}$",
        "$C_1 \\cos 2x + C_2 \\sin 2x$",
        "$(C_1 + C_2 x)e^{2x}$",
        "$C_1 \\cos 4x + C_2 \\sin 4x$"
      ],
      "answer": "$C_1 \\cos 2x + C_2 \\sin 2x$",
      "hints": [
        "$r^2 + 4 = 0 \\Rightarrow r = \\pm 2i$.",
        "$\\alpha = 0$, $\\beta = 2$."
      ],
      "explanation": "복소근 $r = \\pm 2i$이므로 $y = C_1 \\cos 2x + C_2 \\sin 2x$.",
      "wrongAnalysis": "$\\beta = \\sqrt{4} = 2$이지 $4$가 아닙니다. $\\cos 4x$로 쓰는 실수에 주의."
    },
    {
      "id": "9-3",
      "type": "choice",
      "difficulty": 3,
      "question": "$y'' - 2y' + y = 0$ 의 일반해는?",
      "choices": [
        "$(C_1 + C_2 x)e^x$",
        "$C_1 e^x + C_2 e^{-x}$",
        "$C_1 \\cos x + C_2 \\sin x$",
        "$C_1 e^x + C_2 xe^{-x}$"
      ],
      "answer": "$(C_1 + C_2 x)e^x$",
      "hints": [
        "$r^2 - 2r + 1 = (r-1)^2 = 0$.",
        "중근 $r=1$."
      ],
      "explanation": "중근 $r=1$이므로 $y = (C_1 + C_2 x)e^x$. 중근일 때 두 번째 독립해는 $xe^{rx}$.",
      "wrongAnalysis": "중근에서 $xe^{rx}$를 잊고 $C_1 e^x + C_2 e^x = (C_1+C_2)e^x$로 쓰면 상수 하나만 남아 일반해가 아닙니다."
    },
    {
      "id": "9-4",
      "type": "choice",
      "difficulty": 1,
      "question": "2계 제차 선형 ODE $y'' + 3y' + 2y = 0$의 특성방정식은?",
      "choices": [
        "$r^2 + 3r + 2 = 0$",
        "$r^2 - 3r + 2 = 0$",
        "$r^2 + 3r - 2 = 0$",
        "$2r^2 + 3r + 1 = 0$"
      ],
      "answer": "$r^2 + 3r + 2 = 0$",
      "hints": [
        "$y = e^{rx}$를 대입하면 $r^2 e^{rx} + 3r e^{rx} + 2e^{rx} = 0$.",
        "$e^{rx}$로 나누면 계수들의 다항식이 됩니다."
      ],
      "explanation": "$y = e^{rx}$ 대입 후 $e^{rx}$로 나누면 $r^2 + 3r + 2 = 0$. 원래 ODE의 계수가 그대로 특성방정식의 계수가 됩니다.",
      "wrongAnalysis": "ODE의 계수 부호를 특성방정식으로 옮길 때 바꾸는 실수가 있습니다. 계수는 그대로 가져갑니다."
    },
    {
      "id": "9-5",
      "type": "text",
      "difficulty": 1,
      "question": "$y'' - 4y = 0$의 특성방정식의 두 근을 구하시오. (작은 수, 큰 수 순서로, 예: -2,2)",
      "answer": "-2,2",
      "hints": [
        "특성방정식: $r^2 - 4 = 0$.",
        "인수분해: $(r-2)(r+2) = 0$."
      ],
      "explanation": "$r^2 - 4 = 0$에서 $r = \\pm 2$. 일반해는 $y = C_1 e^{2x} + C_2 e^{-2x}$.",
      "wrongAnalysis": "$r^2 = 4$에서 양의 근만 구하고 음의 근을 빠뜨리는 실수가 있습니다."
    }
  ],
  "summary": {
    "keyPoints": [
      "특성방정식 $ar^2+br+c=0$이 핵심",
      "판별식: 양 → 실근, 0 → 중근, 음 → 복소근",
      "초기조건 2개로 $C_1, C_2$ 결정"
    ],
    "formulas": [
      "ar^2 + br + c = 0",
      "\\text{실근:}\\ e^{r_1 x},\\ e^{r_2 x}",
      "\\text{중근:}\\ e^{rx},\\ xe^{rx}",
      "\\text{복소근:}\\ e^{\\alpha x}\\cos\\beta x,\\ e^{\\alpha x}\\sin\\beta x"
    ],
    "commonMistakes": [
      "중근에서 $x$ 인자 누락",
      "복소근에서 $\\alpha$ 또는 $\\beta$ 혼동"
    ],
    "nextConnection": "다음 단원에서는 우변이 0이 아닌 비제차 ODE를 미정계수법으로 푸는 방법을 배웁니다."
  }
},
{
  "id": 10,
  "title": "비제차 ODE — 미정계수법",
  "category": "미분방정식",
  "level": "심화",
  "question": "$ay'' + by' + cy = g(x)$ 에서 $g(x)$가 다항식·지수·삼각함수일 때 특수해를 어떻게 추측할까?",
  "concept": {
    "intro": ":::definition[미정계수법]\n미정계수법(Undetermined Coefficients)은 비제차 ODE $ay''+by'+cy = g(x)$에서 $g(x)$의 형태를 보고 특수해 $y_p$를 '추측'한 뒤, 계수를 결정하는 방법입니다.\n:::\n\n:::note[추측 규칙]\n• $g(x) = $ 다항식 → $y_p = $ 같은 차수 다항식\n• $g(x) = e^{kx}$ → $y_p = Ae^{kx}$\n• $g(x) = \\cos\\omega x$ 또는 $\\sin\\omega x$ → $y_p = A\\cos\\omega x + B\\sin\\omega x$\n:::\n\n:::warning[수정 규칙]\n추측한 $y_p$가 제차해와 겹치면 $x$를 곱해줍니다. 중근의 경우 $x^2$을 곱해야 할 수도 있습니다.\n:::",
    "intuition": "미정계수법이 통하는 이유는, 지수·삼각·다항함수는 미분해도 '같은 형태'를 유지하기 때문입니다. 따라서 같은 형태를 추측하면 계수를 맞출 수 있습니다.",
    "formula": "y = y_h + y_p\n\\text{추측 후 대입하여 계수 결정}\n\\text{겹침 시:}\\ y_p \\to x\\,y_p\\ (\\text{또는}\\ x^2 y_p)",
    "summary": ":::note[요약]\n• $g(x)$ 형태 보고 $y_p$ 추측\n• 대입하여 미정계수 결정\n• 제차해와 겹치면 $x$ 곱하기\n:::"
  },
  "examples": [
    {
      "title": "[기본] 지수함수 비제차항",
      "problem": "$y'' - 3y' + 2y = e^{3x}$ 의 특수해를 구하시오.",
      "steps": [
        "제차해: $r^2-3r+2=(r-1)(r-2)=0$, $y_h = C_1 e^x + C_2 e^{2x}$.",
        "$g(x) = e^{3x}$. 추측: $y_p = Ae^{3x}$. ($e^{3x}$는 제차해와 안 겹침)",
        "$y_p'' - 3y_p' + 2y_p = 9Ae^{3x} - 9Ae^{3x} + 2Ae^{3x} = 2Ae^{3x}$.",
        "$2A = 1 \\Rightarrow A = 1/2$.",
        "$y_p = \\frac{1}{2}e^{3x}$."
      ],
      "answer": "$y_p = \\dfrac{1}{2}e^{3x}$",
      "lesson": "추측한 형태를 원래 방정식에 대입하여 계수를 결정합니다. 겹침이 없으면 바로 계산이 끝납니다."
    },
    {
      "title": "[기본] 다항식 비제차항",
      "problem": "$y'' + y' = 2x + 1$ 의 특수해를 구하시오.",
      "steps": [
        "제차해: $r^2 + r = r(r+1) = 0$, $r = 0, -1$.",
        "$g(x) = 2x + 1$ (1차 다항식). 추측: $y_p = Ax + B$.",
        "그런데 $r = 0$이므로 상수 해 $e^{0x} = 1$이 제차해에 포함. 상수 $B$는 겹침!",
        "수정: $y_p = x(Ax + B) = Ax^2 + Bx$.",
        "$y_p' = 2Ax + B$, $y_p'' = 2A$.",
        "$2A + 2Ax + B = 2x + 1$. $2A = 2 \\Rightarrow A = 1$, $2A + B = 1 \\Rightarrow B = -1$.",
        "$y_p = x^2 - x$."
      ],
      "answer": "$y_p = x^2 - x$",
      "lesson": "상수항이 제차해와 겹치면 전체 추측에 $x$를 곱합니다. 겹침 판단은 $g(x)$의 각 성분이 아니라 전체 추측을 기준으로 합니다."
    },
    {
      "title": "[응용] 삼각함수 비제차항",
      "problem": "$y'' + 4y = \\cos 2x$ 의 특수해를 구하시오.",
      "steps": [
        "제차해: $r^2 + 4 = 0$, $r = \\pm 2i$. $y_h = C_1 \\cos 2x + C_2 \\sin 2x$.",
        "추측: $A\\cos 2x + B\\sin 2x$ → 제차해와 겹침!",
        "수정: $y_p = x(A\\cos 2x + B\\sin 2x)$.",
        "$y_p' = (A\\cos 2x + B\\sin 2x) + x(-2A\\sin 2x + 2B\\cos 2x)$.",
        "$y_p'' = -4A\\sin 2x + 4B\\cos 2x + \\cdots$ (대입 후 정리).",
        "$y_p'' + 4y_p = -4A\\sin 2x + 4B\\cos 2x = \\cos 2x$.",
        "$B = 1/4$, $A = 0$. $y_p = \\dfrac{x\\sin 2x}{4}$."
      ],
      "answer": "$y_p = \\dfrac{x\\sin 2x}{4}$",
      "lesson": "공명(resonance): $g(x)$의 진동수가 고유진동수와 같으면 겹침이 발생하고, $x$를 곱한 해는 시간에 따라 진폭이 증가합니다."
    },
    {
      "title": "[응용] 여러 형태의 합",
      "problem": "$y'' - y = 3e^{2x} + 5$ 의 특수해를 구하시오.",
      "steps": [
        "제차해: $r^2 - 1 = 0$, $r = \\pm 1$. $y_h = C_1 e^x + C_2 e^{-x}$.",
        "$g(x) = 3e^{2x} + 5$. 각 항 별도 추측.",
        "$e^{2x}$항: $y_{p1} = Ae^{2x}$. 대입: $4A - A = 3$, $A = 1$.",
        "상수항 $5$: $y_{p2} = B$. 대입: $0 - B = 5$, $B = -5$.",
        "$y_p = e^{2x} - 5$."
      ],
      "answer": "$y_p = e^{2x} - 5$",
      "lesson": "비제차항이 여러 종류의 합이면 각각 따로 추측하여 합산합니다. 이것이 중첩 원리의 활용입니다."
    },
    {
      "title": "[심화] 이중 겹침의 수정 규칙",
      "problem": "$y'' - 2y' + y = xe^x$에서 $y_p$의 올바른 추측 형태를 결정하시오.",
      "steps": [
        "제차해: $(r-1)^2 = 0$, $r = 1$ 중근. $y_h = (C_1 + C_2 x)e^x$.",
        "$g(x) = xe^x$. 기본 추측: $(Ax + B)e^x$.",
        "$Ae^x \\cdot x$는 $C_2 xe^x$와 겹치고, $Be^x$는 $C_1 e^x$와 겹김.",
        "1차 수정: $x(Ax + B)e^x = (Ax^2 + Bx)e^x$. $Bxe^x$가 여전히 겹침!",
        "2차 수정: $x^2(Ax + B)e^x = (Ax^3 + Bx^2)e^x$. 겹침 없음 ✓.",
        "최종 추측: $y_p = (Ax^3 + Bx^2)e^x$."
      ],
      "answer": "$y_p = (Ax^3 + Bx^2)e^x$",
      "lesson": "중근의 중복도만큼 $x$를 곱해야 합니다. 중근 $r=1$이 2중근이므로 $x^2$를 곱하면 겹침이 해소됩니다."
    }
  ],
  "problems": [
    {
      "id": "10-1",
      "type": "choice",
      "difficulty": 2,
      "question": "$y'' + y = 3$ 의 특수해 $y_p$ 추측은?",
      "choices": [
        "$y_p = A$",
        "$y_p = Ax$",
        "$y_p = Ax + B$",
        "$y_p = Ae^x$"
      ],
      "answer": "$y_p = A$",
      "hints": [
        "$g(x) = 3$ (상수 = 0차 다항식).",
        "제차해: $\\cos x, \\sin x$ — 상수와 안 겹침."
      ],
      "explanation": "$g(x)$가 상수이므로 $y_p = A$ 추측. 대입: $0 + A = 3 \\Rightarrow A = 3$.",
      "wrongAnalysis": "불필요하게 높은 차수를 추측하는 실수가 있습니다. $g(x)$와 같은 형태로 시작하세요."
    },
    {
      "id": "10-2",
      "type": "choice",
      "difficulty": 3,
      "question": "$y'' - 2y' + y = e^x$ 에서 $y_p$ 추측은? (제차해: $(C_1+C_2 x)e^x$)",
      "choices": [
        "$Ae^x$",
        "$Axe^x$",
        "$Ax^2 e^x$",
        "$A + Be^x$"
      ],
      "answer": "$Ax^2 e^x$",
      "hints": [
        "$e^x$는 제차해와 겹침 → $xe^x$ 시도.",
        "$xe^x$도 제차해(중근) → $x^2 e^x$."
      ],
      "explanation": "제차해가 $e^x$와 $xe^x$이므로 $e^x$, $xe^x$ 모두 겹침. 수정 규칙으로 $y_p = Ax^2 e^x$.",
      "wrongAnalysis": "중근이라 $xe^x$까지 제차해에 포함되므로 $x^2$을 곱해야 합니다. 한 번만 곱하면 안 됩니다."
    },
    {
      "id": "10-3",
      "type": "text",
      "difficulty": 3,
      "question": "$y'' + y = \\sin x$ 에서 $y_p$ 추측은? (제차해: $C_1\\cos x + C_2\\sin x$, 식으로, 예: Axcos(x)+Bxsin(x))",
      "answer": "Axcos(x)+Bxsin(x)",
      "hints": [
        "일반 추측: $A\\cos x + B\\sin x$.",
        "제차해와 겹침!",
        "$x$를 곱하기."
      ],
      "explanation": "$\\sin x$와 $\\cos x$가 모두 제차해이므로 $y_p = Ax\\cos x + Bx\\sin x$로 수정합니다.",
      "wrongAnalysis": "$\\sin x$만 겹친다고 $\\sin x$항에만 $x$를 곱하면 안 됩니다. $\\cos x$도 짝으로 포함해야 합니다."
    },
    {
      "id": "10-4",
      "type": "choice",
      "difficulty": 1,
      "question": "비제차 ODE $y'' + y = e^{2x}$에서 특수해를 추측하는 미정계수법의 기본 추측은?",
      "choices": [
        "$y_p = Ax$",
        "$y_p = Ae^{2x}$",
        "$y_p = A\\cos 2x$",
        "$y_p = Ax^2$"
      ],
      "answer": "$y_p = Ae^{2x}$",
      "hints": [
        "$g(x) = e^{2x}$이므로 같은 형태를 추측합니다.",
        "제차해는 $\\cos x, \\sin x$이므로 $e^{2x}$와 겹치지 않습니다."
      ],
      "explanation": "$g(x) = e^{2x}$이므로 $y_p = Ae^{2x}$로 추측합니다. 제차해($\\cos x, \\sin x$)와 겹치지 않으므로 수정이 불필요합니다.",
      "wrongAnalysis": "$g(x)$의 형태와 다른 함수를 추측하는 실수가 있습니다. 미정계수법은 $g(x)$와 같은 '종류'의 함수를 추측합니다."
    },
    {
      "id": "10-5",
      "type": "choice",
      "difficulty": 1,
      "question": "비제차 ODE의 일반해 $y$는 어떻게 구성되는가?",
      "choices": [
        "$y = y_h \\cdot y_p$ (제차해와 특수해의 곱)",
        "$y = y_h + y_p$ (제차 일반해 + 비제차 특수해)",
        "$y = y_p$ (특수해만)",
        "$y = y_h - y_p$ (제차해에서 특수해를 뺀 것)"
      ],
      "answer": "$y = y_h + y_p$ (제차 일반해 + 비제차 특수해)",
      "hints": [
        "선형 ODE에서는 중첩 원리가 성립합니다.",
        "제차해에 비제차 특수해를 더하면 비제차 방정식을 만족합니다."
      ],
      "explanation": "비제차 선형 ODE의 일반해는 $y = y_h + y_p$입니다. $y_h = C_1 y_1 + C_2 y_2$는 제차 일반해이고 $y_p$는 비제차 특수해입니다.",
      "wrongAnalysis": "제차해와 특수해를 곱하거나 빼는 실수가 있습니다. 선형성에 의해 '합'이 정답입니다."
    }
  ],
  "summary": {
    "keyPoints": [
      "$g(x)$ 형태에 맞춰 $y_p$ 추측",
      "대입으로 계수 결정",
      "겹침 시 $x$ (또는 $x^2$) 곱하기"
    ],
    "formulas": [
      "y = y_h + y_p",
      "\\text{수정 규칙: 겹침} \\to x \\cdot (\\text{추측})"
    ],
    "commonMistakes": [
      "수정 규칙 적용 누락",
      "$\\sin, \\cos$ 짝을 함께 추측하지 않음"
    ],
    "nextConnection": "미정계수법은 $g(x)$가 특정 형태일 때만 동작합니다. 다음 단원의 매개변수변환법은 모든 $g(x)$에 적용됩니다."
  }
},
{
  "id": 11,
  "title": "비제차 ODE — 매개변수변환법",
  "category": "미분방정식",
  "level": "심화",
  "question": "미정계수법이 안 통하는 비제차 ODE는 어떻게 풀까?",
  "concept": {
    "intro": ":::definition[매개변수변환법]\n매개변수변환법(Variation of Parameters)은 제차해 $y_1, y_2$를 이미 알고 있을 때, 특수해를 $y_p = u_1 y_1 + u_2 y_2$ 형태로 찾는 방법입니다. 이 방법은 $g(x)$의 형태에 제한이 없습니다.\n:::\n\n:::theorem[매개변수변환 공식]\n연립 조건:\n$$u_1' y_1 + u_2' y_2 = 0$$\n$$u_1' y_1' + u_2' y_2' = g(x)$$\n이를 풀면:\n$$u_1' = -\\frac{y_2 g}{W},\\quad u_2' = \\frac{y_1 g}{W}$$\n여기서 $W = W(y_1,y_2)$는 론스키안입니다.\n:::",
    "intuition": "미정계수법은 '상수 $C_1, C_2$를 정해서 해를 맞추자'였다면, 매개변수변환법은 '상수 대신 함수 $u_1(x), u_2(x)$를 넣어서 해를 맞추자'입니다. 이름 그대로 매개변수(상수)를 변하게(variation) 만드는 것입니다.",
    "formula": "y_p = u_1 y_1 + u_2 y_2\nu_1' = -\\frac{y_2\\,g}{W},\\quad u_2' = \\frac{y_1\\,g}{W}\nW = y_1 y_2' - y_2 y_1'",
    "summary": ":::note[요약]\n• 제차해 $y_1, y_2$ 필요\n• 상수를 함수로 바꿔 $y_p$ 구성\n• 모든 $g(x)$에 적용 가능\n:::"
  },
  "examples": [
    {
      "title": "[기본] 매개변수변환법 적용",
      "problem": "$y'' + y = \\sec x$ 의 특수해를 구하시오.",
      "steps": [
        "제차해: $y_1 = \\cos x$, $y_2 = \\sin x$, $W = 1$.",
        "$u_1' = -\\dfrac{\\sin x \\cdot \\sec x}{1} = -\\tan x$.",
        "$u_2' = \\dfrac{\\cos x \\cdot \\sec x}{1} = 1$.",
        "$u_1 = \\int -\\tan x\\,dx = \\ln|\\cos x|$.",
        "$u_2 = \\int 1\\,dx = x$.",
        "$y_p = \\cos x \\ln|\\cos x| + x\\sin x$."
      ],
      "answer": "$y_p = \\cos x\\,\\ln|\\cos x| + x\\,\\sin x$",
      "lesson": "$g(x) = \\sec x$는 미정계수법으로 추측할 수 없는 형태이지만, 매개변수변환법은 기계적으로 적용됩니다."
    },
    {
      "title": "[기본] 간단한 비제차항",
      "problem": "$y'' + y = \\sin x$ 의 특수해를 매개변수변환법으로 구하시오.",
      "steps": [
        "$y_1 = \\cos x$, $y_2 = \\sin x$, $W = 1$.",
        "$u_1' = -\\sin x \\cdot \\sin x = -\\sin^2 x$.",
        "$u_2' = \\cos x \\cdot \\sin x = \\dfrac{\\sin 2x}{2}$.",
        "$u_1 = \\int -\\sin^2 x\\,dx = -\\dfrac{x}{2} + \\dfrac{\\sin 2x}{4}$.",
        "$u_2 = \\int \\dfrac{\\sin 2x}{2}\\,dx = -\\dfrac{\\cos 2x}{4}$.",
        "정리하면 $y_p = -\\dfrac{x\\cos x}{2}$ (삼각함수 정리 후)."
      ],
      "answer": "$y_p = -\\dfrac{x\\cos x}{2}$",
      "lesson": "매개변수변환법은 미정계수법이 적용 가능한 경우에도 사용할 수 있지만, 계산이 더 복잡합니다. 미정계수법이 되면 그쪽이 효율적입니다."
    },
    {
      "title": "[응용] $1/\\cos$ 형태의 비제차항",
      "problem": "$y'' + y = \\tan x$ 의 특수해를 구하시오.",
      "steps": [
        "$y_1 = \\cos x$, $y_2 = \\sin x$, $W = 1$.",
        "$u_1' = -\\sin x \\cdot \\tan x = -\\dfrac{\\sin^2 x}{\\cos x} = \\cos x - \\sec x$.",
        "$u_2' = \\cos x \\cdot \\tan x = \\sin x$.",
        "$u_1 = \\sin x - \\ln|\\sec x + \\tan x|$.",
        "$u_2 = -\\cos x$.",
        "$y_p = \\cos x(\\sin x - \\ln|\\sec x + \\tan x|) + \\sin x(-\\cos x) = -\\cos x \\ln|\\sec x + \\tan x|$."
      ],
      "answer": "$y_p = -\\cos x\\,\\ln|\\sec x + \\tan x|$",
      "lesson": "$\\tan x$도 미정계수법으로 다룰 수 없는 형태입니다. 매개변수변환법의 진가는 이런 '비표준' 비제차항에서 발휘됩니다."
    },
    {
      "title": "[응용] 론스키안이 상수가 아닌 경우",
      "problem": "$y'' - 2y' + y = \\dfrac{e^x}{x}$의 특수해를 구하시오. (제차해: $y_1 = e^x$, $y_2 = xe^x$)",
      "steps": [
        "$W = e^x \\cdot (e^x + xe^x) - xe^x \\cdot e^x = e^{2x}$.",
        "$u_1' = -\\dfrac{xe^x \\cdot e^x/x}{e^{2x}} = -1$.",
        "$u_2' = \\dfrac{e^x \\cdot e^x/x}{e^{2x}} = \\dfrac{1}{x}$.",
        "$u_1 = -x$, $u_2 = \\ln|x|$.",
        "$y_p = -xe^x + xe^x \\ln|x| = xe^x(\\ln|x| - 1)$."
      ],
      "answer": "$y_p = xe^x(\\ln|x| - 1)$",
      "lesson": "론스키안이 상수가 아닌 경우에도 공식은 동일하게 적용됩니다. $W$를 정확히 계산하는 것이 핵심입니다."
    },
    {
      "title": "[심화] 미정계수법과의 비교",
      "problem": "$y'' - y = e^x$를 매개변수변환법과 미정계수법 두 가지로 풀어 결과를 비교하시오.",
      "steps": [
        "제차해: $y_1 = e^x$, $y_2 = e^{-x}$, $W = -2$.",
        "매개변수변환: $u_1' = -\\dfrac{e^{-x} \\cdot e^x}{-2} = \\dfrac{1}{2}$, $u_2' = \\dfrac{e^x \\cdot e^x}{-2} = -\\dfrac{e^{2x}}{2}$.",
        "$u_1 = \\dfrac{x}{2}$, $u_2 = -\\dfrac{e^{2x}}{4}$.",
        "$y_p = \\dfrac{x}{2}e^x - \\dfrac{e^{2x}}{4}e^{-x} = \\dfrac{x}{2}e^x - \\dfrac{e^x}{4}$. $-\\dfrac{e^x}{4}$는 제차해에 흡수.",
        "유효한 특수해: $y_p = \\dfrac{x}{2}e^x$. 미정계수법에서도 (겹침 수정 후) $y_p = Axe^x$, $A = 1/2$."
      ],
      "answer": "$y_p = \\dfrac{x}{2}e^x$ (두 방법 모두 동일)",
      "lesson": "두 방법의 결과는 항상 (제차해 부분을 제외하면) 동일합니다. 매개변수변환에서 제차해와 같은 항이 나오면 일반해의 $C$에 흡수시키면 됩니다."
    }
  ],
  "problems": [
    {
      "id": "11-1",
      "type": "choice",
      "difficulty": 2,
      "question": "매개변수변환법을 쓰려면 반드시 알고 있어야 하는 것은?",
      "choices": [
        "비제차항 $g(x)$의 부정적분",
        "제차해 $y_1, y_2$",
        "특성방정식의 판별식",
        "$g(x)$의 테일러 전개"
      ],
      "answer": "제차해 $y_1, y_2$",
      "hints": [
        "매개변수변환법의 출발점은 $y_p = u_1 y_1 + u_2 y_2$입니다.",
        "$y_1, y_2$와 그 론스키안으로 $u_1', u_2'$를 계산합니다."
      ],
      "explanation": "제차해 $y_1, y_2$를 알아야 특수해를 $y_p=u_1y_1+u_2y_2$ 형태로 놓을 수 있습니다. 론스키안 계산에도 제차해가 필요합니다.",
      "wrongAnalysis": "미정계수법과 혼동하여 $g(x)$의 형태만 보려는 실수가 있습니다."
    },
    {
      "id": "11-2",
      "type": "choice",
      "difficulty": 3,
      "question": "$y'' + y = \\tan x$ 에서 $u_2' = ?$ ($y_1=\\cos x, y_2=\\sin x, W=1$)",
      "choices": [
        "$\\sin x$",
        "$\\cos x$",
        "$-\\sin x$",
        "$\\tan x$"
      ],
      "answer": "$\\sin x$",
      "hints": [
        "$u_2' = \\dfrac{y_1 \\cdot g}{W}$.",
        "$y_1 = \\cos x$, $g = \\tan x$, $W = 1$."
      ],
      "explanation": "$u_2' = \\dfrac{\\cos x \\cdot \\tan x}{1} = \\dfrac{\\cos x \\cdot \\sin x / \\cos x}{1} = \\sin x$.",
      "wrongAnalysis": "$\\tan x = \\sin x / \\cos x$를 약분하지 않는 실수가 있습니다."
    },
    {
      "id": "11-3",
      "type": "choice",
      "difficulty": 3,
      "question": "미정계수법 대비 매개변수변환법의 장점은?",
      "choices": [
        "계산이 더 쉽다",
        "모든 연속 $g(x)$에 적용 가능",
        "특성방정식이 필요 없다",
        "초기조건 없이 특수해를 결정"
      ],
      "answer": "모든 연속 $g(x)$에 적용 가능",
      "hints": [
        "미정계수법은 $g(x)$가 다항식·지수·삼각 형태일 때 주로 씁니다.",
        "매개변수변환법은 제차해를 알고 있으면 더 넓은 $g(x)$에 적용할 수 있습니다."
      ],
      "explanation": "매개변수변환법은 제차해를 알고 있고 필요한 적분이 가능하면 연속인 $g(x)$에 폭넓게 적용됩니다. 그래서 미정계수법보다 적용 범위가 넓습니다.",
      "wrongAnalysis": "매개변수변환법도 제차해를 먼저 구해야 하므로 특성방정식은 여전히 필요합니다."
    },
    {
      "id": "11-4",
      "type": "choice",
      "difficulty": 1,
      "question": "매개변수변환법에서 특수해의 형태 $y_p = u_1 y_1 + u_2 y_2$에서 $u_1, u_2$는?",
      "choices": [
        "상수",
        "$x$의 함수",
        "초기조건에 의해 결정되는 상수",
        "고윳값"
      ],
      "answer": "$x$의 함수",
      "hints": [
        "'매개변수변환(variation of parameters)'이란 이름이 힌트입니다.",
        "상수를 변하는 함수로 바꾸는 것이 핵심 아이디어입니다."
      ],
      "explanation": "매개변수변환법의 핵심은 제차 일반해 $C_1 y_1 + C_2 y_2$에서 상수 $C_1, C_2$를 $x$의 함수 $u_1(x), u_2(x)$로 바꾸는 것입니다.",
      "wrongAnalysis": "미정계수법처럼 $u_1, u_2$가 상수라고 생각하는 실수가 있습니다. '변환(variation)'이라는 이름이 함수임을 시사합니다."
    },
    {
      "id": "11-5",
      "type": "choice",
      "difficulty": 1,
      "question": "$y'' + y = g(x)$에서 $y_1 = \\cos x$, $y_2 = \\sin x$일 때 론스키안 $W(y_1, y_2)$의 값은?",
      "choices": [
        "$0$",
        "$1$",
        "$-1$",
        "$2$"
      ],
      "answer": "$1$",
      "hints": [
        "$W = y_1 y_2' - y_2 y_1'$.",
        "$\\cos x \\cdot \\cos x - \\sin x \\cdot (-\\sin x)$."
      ],
      "explanation": "$W = \\cos x \\cdot \\cos x - \\sin x \\cdot (-\\sin x) = \\cos^2 x + \\sin^2 x = 1$.",
      "wrongAnalysis": "$\\sin x$의 도함수를 $-\\cos x$로 쓰거나 $\\cos x$의 도함수를 $\\sin x$로 쓰는 부호 실수가 있습니다."
    }
  ],
  "summary": {
    "keyPoints": [
      "제차해의 상수를 함수로 교체",
      "$u_1', u_2'$ 연립 풀기",
      "모든 $g(x)$에 적용 가능"
    ],
    "formulas": [
      "u_1' = -\\frac{y_2 g}{W},\\quad u_2' = \\frac{y_1 g}{W}",
      "y_p = u_1 y_1 + u_2 y_2"
    ],
    "commonMistakes": [
      "$u_1'$과 $u_2'$의 부호 혼동",
      "론스키안 계산 실수"
    ],
    "nextConnection": "다음 단원에서는 변계수 ODE인 코시-오일러 방정식과 급수해법을 배웁니다."
  }
},
{
  "id": 12,
  "title": "코시-오일러 방정식과 급수해법",
  "category": "미분방정식",
  "level": "심화",
  "question": "계수가 상수가 아닌 ODE는 어떻게 풀까?",
  "concept": {
    "intro": ":::definition[코시-오일러 방정식]\n코시-오일러(Cauchy-Euler) 방정식: $x^2 y'' + axy' + by = 0$.\n$y = x^r$을 대입하면 $r$에 대한 보조방정식 $r(r-1) + ar + b = 0$을 얻습니다.\n:::\n\n:::theorem[코시-오일러 일반해]\n근의 종류에 따라:\n• 서로 다른 실근 $r_1, r_2$: $y = C_1 x^{r_1} + C_2 x^{r_2}$\n• 중근 $r$: $y = (C_1 + C_2 \\ln x)x^r$\n• 복소근 $\\alpha \\pm \\beta i$: $y = x^\\alpha[C_1\\cos(\\beta\\ln x) + C_2\\sin(\\beta\\ln x)]$\n:::\n\n:::definition[급수해법]\n급수해법(Power Series Method): 해를 $y = \\sum_{n=0}^{\\infty} a_n x^n$으로 놓고 대입하여 계수의 점화식을 구합니다.\n:::",
    "intuition": "코시-오일러는 '$x$의 거듭제곱이 해'라는 점에서, 상수계수 ODE의 '$e^{rx}$가 해'와 구조가 같습니다. 실제로 $x = e^t$ 치환하면 상수계수 ODE로 바뀝니다. 급수해법은 '모르는 해를 멱급수로 가정하고 계수를 하나씩 결정'하는 가장 일반적인 방법입니다.",
    "formula": "\\text{코시-오일러:}\\ x^2y'' + axy' + by = 0,\\quad y = x^r\n\\text{급수:}\\ y = \\sum_{n=0}^\\infty a_n x^n",
    "summary": ":::note[요약]\n• 코시-오일러: $y=x^r$ 대입\n• 급수: $y=\\sum a_n x^n$ 대입 후 점화식\n• 변계수 ODE의 표준 접근\n:::"
  },
  "examples": [
    {
      "title": "[기본] 코시-오일러 방정식",
      "problem": "$x^2 y'' - 2y = 0$ ($x > 0$) 의 일반해를 구하시오.",
      "steps": [
        "$y = x^r$ 대입: $r(r-1)x^r - 2x^r = 0$.",
        "$r(r-1) - 2 = 0 \\Rightarrow r^2 - r - 2 = 0$.",
        "$(r-2)(r+1) = 0 \\Rightarrow r = 2,\\ -1$.",
        "$y = C_1 x^2 + C_2 x^{-1}$."
      ],
      "answer": "$y = C_1 x^2 + C_2 x^{-1}$",
      "lesson": "코시-오일러의 보조방정식은 상수계수 ODE의 특성방정식과 완전히 평행합니다."
    },
    {
      "title": "[기본] 급수해법의 기본 절차",
      "problem": "$y' = y$를 급수해법으로 풀어 $y = e^x$를 유도하시오.",
      "steps": [
        "$y = \\sum_{n=0}^{\\infty} a_n x^n$, $y' = \\sum_{n=1}^{\\infty} n a_n x^{n-1} = \\sum_{n=0}^{\\infty} (n+1)a_{n+1}x^n$.",
        "$y' = y$에 대입: $(n+1)a_{n+1} = a_n$.",
        "점화식: $a_{n+1} = \\dfrac{a_n}{n+1}$.",
        "$a_0$을 임의상수로 두면: $a_n = \\dfrac{a_0}{n!}$.",
        "$y = a_0 \\sum_{n=0}^{\\infty} \\dfrac{x^n}{n!} = a_0 e^x$."
      ],
      "answer": "$y = a_0 e^x$ ($e^x$의 급수 표현 유도)",
      "lesson": "급수해법은 해의 급수 표현을 '발견'하는 방법입니다. $e^x = \\sum x^n/n!$이 자연스럽게 나옵니다."
    },
    {
      "title": "[응용] 코시-오일러 중근",
      "problem": "$x^2 y'' + xy' + 0 \\cdot y = 0$, 즉 $x^2 y'' + xy' = 0$ ($x > 0$)의 일반해를 구하시오.",
      "steps": [
        "$y = x^r$: $r(r-1) + r = r^2 = 0$. 중근 $r = 0$.",
        "코시-오일러 중근: $y = (C_1 + C_2 \\ln x)x^0 = C_1 + C_2 \\ln x$.",
        "검증: $y = \\ln x$이면 $y' = 1/x$, $y'' = -1/x^2$.",
        "$x^2(-1/x^2) + x(1/x) = -1 + 1 = 0$ ✓."
      ],
      "answer": "$y = C_1 + C_2 \\ln x$",
      "lesson": "코시-오일러의 중근에서는 $x^r$에 $\\ln x$를 곱합니다. 상수계수 ODE의 중근에서 $xe^{rx}$를 곱하는 것과 대응됩니다."
    },
    {
      "title": "[응용] 에어리 방정식의 급수해",
      "problem": "$y'' - xy = 0$ (에어리 방정식)의 급수해 점화식을 구하시오.",
      "steps": [
        "$y = \\sum a_n x^n$을 대입합니다.",
        "$y'' = \\sum_{n=2}^{\\infty} n(n-1)a_n x^{n-2}$, $xy = \\sum_{n=0}^{\\infty} a_n x^{n+1}$.",
        "인덱스 시프트: $y'' = \\sum_{k=0}^{\\infty}(k+2)(k+1)a_{k+2}x^k$, $xy = \\sum_{k=1}^{\\infty}a_{k-1}x^k$.",
        "$k=0$: $2a_2 = 0$이므로 $a_2 = 0$.",
        "$k \\geq 1$: $(k+2)(k+1)a_{k+2} = a_{k-1}$, 즉 $a_{k+2} = \\dfrac{a_{k-1}}{(k+2)(k+1)}$."
      ],
      "answer": "점화식: $a_{k+2} = \\dfrac{a_{k-1}}{(k+2)(k+1)}$, $a_2 = 0$",
      "lesson": "에어리 방정식은 양자역학의 터널링 문제에서 등장합니다. 급수해법에서 인덱스 시프트가 가장 어려운 부분입니다."
    },
    {
      "title": "[심화] $x = e^t$ 치환으로 코시-오일러를 상수계수로",
      "problem": "$x^2 y'' + 3xy' + y = 0$을 $t = \\ln x$ 치환하여 상수계수 ODE로 바꾸어 풀어라.",
      "steps": [
        "$x = e^t$로 놓으면 $\\dfrac{dy}{dx} = \\dfrac{1}{x}\\dfrac{dy}{dt}$, $x^2\\dfrac{d^2y}{dx^2} = \\dfrac{d^2y}{dt^2} - \\dfrac{dy}{dt}$.",
        "대입: $(\\ddot{y} - \\dot{y}) + 3\\dot{y} + y = 0$, 즉 $\\ddot{y} + 2\\dot{y} + y = 0$.",
        "특성방정식: $(r+1)^2 = 0$, 중근 $r = -1$.",
        "$y = (C_1 + C_2 t)e^{-t} = (C_1 + C_2 \\ln x)x^{-1}$."
      ],
      "answer": "$y = (C_1 + C_2 \\ln x)x^{-1}$",
      "lesson": "$x = e^t$ 치환은 코시-오일러를 상수계수 ODE로 변환합니다. 이것이 코시-오일러에서 $\\ln x$가 등장하는 이유입니다."
    }
  ],
  "problems": [
    {
      "id": "12-1",
      "type": "choice",
      "difficulty": 2,
      "question": "$x^2 y'' + xy' - y = 0$ 의 보조방정식은?",
      "choices": [
        "$r^2 - 1 = 0$",
        "$r^2 + r - 1 = 0$",
        "$r^2 - r + 1 = 0$",
        "$r^2 + 1 = 0$"
      ],
      "answer": "$r^2 - 1 = 0$",
      "hints": [
        "$y = x^r$: $r(r-1) + r - 1 = 0$.",
        "$r^2 - r + r - 1 = r^2 - 1 = 0$."
      ],
      "explanation": "$r(r-1) + 1 \\cdot r + (-1) = r^2 - r + r - 1 = r^2 - 1 = 0$. 근: $r = \\pm 1$.",
      "wrongAnalysis": "$r(r-1)$을 전개할 때 $-r$ 항을 놓치는 실수가 흔합니다."
    },
    {
      "id": "12-2",
      "type": "choice",
      "difficulty": 3,
      "question": "급수해법에서 $y = \\sum a_n x^n$을 $y'' + y = 0$에 대입하면 점화식은?",
      "choices": [
        "$a_{n+2} = -\\dfrac{a_n}{(n+2)(n+1)}$",
        "$a_{n+2} = \\dfrac{a_n}{(n+2)}$",
        "$a_{n+1} = -a_n$",
        "$a_{n+2} = -a_n$"
      ],
      "answer": "$a_{n+2} = -\\dfrac{a_n}{(n+2)(n+1)}$",
      "hints": [
        "$y'' = \\sum_{n=2}^\\infty n(n-1)a_n x^{n-2} = \\sum_{k=0}^\\infty (k+2)(k+1)a_{k+2}x^k$.",
        "$(k+2)(k+1)a_{k+2} + a_k = 0$."
      ],
      "explanation": "$y'' + y = 0$에 대입하면 $(n+2)(n+1)a_{n+2} + a_n = 0$. 따라서 $a_{n+2} = -\\frac{a_n}{(n+2)(n+1)}$.",
      "wrongAnalysis": "인덱스 시프트(index shift)를 정확히 수행하지 못하는 실수가 흔합니다."
    },
    {
      "id": "12-3",
      "type": "choice",
      "difficulty": 3,
      "question": "코시-오일러 $x^2y'' + xy' + y = 0$에서 $r^2+1=0$이면 일반해는? ($x>0$)",
      "choices": [
        "$C_1 \\cos(\\ln x) + C_2 \\sin(\\ln x)$",
        "$C_1 x + C_2 x^{-1}$",
        "$(C_1 + C_2 \\ln x)$",
        "$C_1 \\cos x + C_2 \\sin x$"
      ],
      "answer": "$C_1 \\cos(\\ln x) + C_2 \\sin(\\ln x)$",
      "hints": [
        "복소근 $r = \\pm i$: $\\alpha = 0$, $\\beta = 1$.",
        "코시-오일러 복소근: $x^\\alpha[\\cos(\\beta\\ln x), \\sin(\\beta\\ln x)]$."
      ],
      "explanation": "$r = \\pm i$이므로 $\\alpha=0, \\beta=1$. $y = x^0[C_1\\cos(\\ln x) + C_2\\sin(\\ln x)]$.",
      "wrongAnalysis": "상수계수 ODE의 $\\cos x, \\sin x$와 혼동하지 마세요. 코시-오일러에서는 $\\ln x$가 인자입니다."
    },
    {
      "id": "12-4",
      "type": "choice",
      "difficulty": 1,
      "question": "코시-오일러 방정식 $x^2 y'' + axy' + by = 0$에서 해를 추측할 때 사용하는 형태는?",
      "choices": [
        "$y = e^{rx}$",
        "$y = x^r$",
        "$y = \\sin(rx)$",
        "$y = rx + C$"
      ],
      "answer": "$y = x^r$",
      "hints": [
        "코시-오일러 방정식의 계수는 $x$의 거듭제곱입니다.",
        "상수계수 ODE에서 $e^{rx}$를 쓰듯이, 코시-오일러에서는 $x^r$을 씁니다."
      ],
      "explanation": "코시-오일러 방정식에서는 $y = x^r$을 대입합니다. 이는 $x = e^t$로 치환하면 상수계수 ODE가 되고, 거기서 $y = e^{rt}$가 $y = x^r$에 대응하는 것입니다.",
      "wrongAnalysis": "상수계수 ODE의 $y = e^{rx}$를 코시-오일러에 그대로 적용하면 풀이가 되지 않습니다."
    },
    {
      "id": "12-5",
      "type": "text",
      "difficulty": 1,
      "question": "급수해법에서 $y = \\sum_{n=0}^{\\infty} a_n x^n$일 때 $y'$을 급수로 쓰면 $y' = \\sum_{n=k}^{\\infty} n\\,a_n\\,x^{n-1}$입니다. $k$의 값은?",
      "answer": "1",
      "hints": [
        "$n=0$ 항은 $0 \\cdot a_0 \\cdot x^{-1} = 0$이므로 사라집니다.",
        "급수의 시작 인덱스가 $n=1$부터입니다."
      ],
      "explanation": "$y = \\sum_{n=0}^{\\infty} a_n x^n$을 항별 미분하면 $y' = \\sum_{n=1}^{\\infty} n\\,a_n\\,x^{n-1}$. $n=0$ 항은 상수 $a_0$이므로 미분하면 사라지고, 합은 $n=1$부터 시작합니다.",
      "wrongAnalysis": "$n=0$부터 시작한다고 쓰는 실수가 있습니다. $n=0$ 항이 0이 되므로 $k=1$입니다."
    }
  ],
  "summary": {
    "keyPoints": [
      "코시-오일러: $y = x^r$ 대입",
      "급수: $y = \\sum a_n x^n$ 대입 후 점화식",
      "$x = e^t$ 치환으로 상수계수 ODE 변환 가능"
    ],
    "formulas": [
      "r(r-1) + ar + b = 0",
      "y = \\sum_{n=0}^\\infty a_n x^n"
    ],
    "commonMistakes": [
      "보조방정식에서 $r(r-1)$ 전개 실수",
      "급수 인덱스 시프트 오류"
    ],
    "nextConnection": "다음 단원에서는 ODE를 푸는 또 다른 강력한 도구 — 라플라스 변환을 소개합니다."
  }
},
{
  "id": 13,
  "title": "라플라스 변환",
  "category": "미분방정식",
  "level": "심화",
  "question": "미분방정식을 대수 방정식으로 바꿔 풀 수 있을까?",
  "concept": {
    "intro": ":::definition[라플라스 변환]\n라플라스 변환은 시간 영역의 함수 $f(t)$를 주파수 영역의 함수 $F(s)$로 바꿉니다.\n$$\\mathcal{L}\\{f(t)\\} = F(s) = \\int_0^\\infty e^{-st}f(t)\\,dt$$\n:::\n\n:::note[기본 변환표]\n• $\\mathcal{L}\\{1\\} = 1/s$\n• $\\mathcal{L}\\{t^n\\} = n!/s^{n+1}$\n• $\\mathcal{L}\\{e^{at}\\} = 1/(s-a)$\n• $\\mathcal{L}\\{\\sin bt\\} = b/(s^2+b^2)$\n• $\\mathcal{L}\\{\\cos bt\\} = s/(s^2+b^2)$\n:::\n\n:::theorem[핵심 성질]\n선형성, $s$-이동($e^{at}f \\to F(s-a)$), $t$-이동(헤비사이드).\n:::",
    "intuition": "라플라스 변환은 '미분을 $s$ 곱하기로, 적분을 $s$로 나누기로' 바꾸는 마법의 도구입니다. ODE가 $s$에 대한 대수 방정식이 되고, 이를 풀고 역변환하면 원래 해를 얻습니다.",
    "formula": "\\mathcal{L}\\{f(t)\\} = \\int_0^\\infty e^{-st}f(t)\\,dt\n\\mathcal{L}\\{f'\\} = sF(s) - f(0)\n\\mathcal{L}\\{f''\\} = s^2F(s) - sf(0) - f'(0)",
    "summary": ":::note[요약]\n• 적분 변환: 시간 → 주파수 영역\n• 미분 → 대수적 $s$ 연산\n• 변환표 암기 필수\n:::"
  },
  "examples": [
    {
      "title": "[기본] 기본 라플라스 변환",
      "problem": "$\\mathcal{L}\\{e^{2t}\\sin 3t\\}$ 를 구하시오.",
      "steps": [
        "$\\mathcal{L}\\{\\sin 3t\\} = \\dfrac{3}{s^2+9}$.",
        "$s$-이동: $e^{2t}$가 곱해지면 $s \\to s-2$.",
        "$\\mathcal{L}\\{e^{2t}\\sin 3t\\} = \\dfrac{3}{(s-2)^2+9}$."
      ],
      "answer": "$\\dfrac{3}{(s-2)^2+9}$",
      "lesson": "$s$-이동 정리: $\\mathcal{L}\\{e^{at}f(t)\\} = F(s-a)$. 변환표를 알고 이동 규칙을 쓰면 복잡한 함수도 빠르게 변환됩니다."
    },
    {
      "title": "[기본] 변환표 활용",
      "problem": "$\\mathcal{L}\\{3t^2 + 2e^{-t}\\}$를 구하시오.",
      "steps": [
        "선형성: $\\mathcal{L}\\{3t^2 + 2e^{-t}\\} = 3\\mathcal{L}\\{t^2\\} + 2\\mathcal{L}\\{e^{-t}\\}$.",
        "$\\mathcal{L}\\{t^2\\} = \\dfrac{2!}{s^3} = \\dfrac{2}{s^3}$.",
        "$\\mathcal{L}\\{e^{-t}\\} = \\dfrac{1}{s+1}$.",
        "$= \\dfrac{6}{s^3} + \\dfrac{2}{s+1}$."
      ],
      "answer": "$\\dfrac{6}{s^3} + \\dfrac{2}{s+1}$",
      "lesson": "라플라스 변환은 선형 연산이므로 합과 상수배가 보존됩니다. 기본 변환표를 조합하면 복잡한 함수도 처리 가능합니다."
    },
    {
      "title": "[응용] 미분 변환 공식",
      "problem": "$f(t) = t\\cos t$의 라플라스 변환을 구하시오.",
      "steps": [
        "$\\mathcal{L}\\{\\cos t\\} = \\dfrac{s}{s^2+1} = F(s)$.",
        "$t$ 곱셈 규칙: $\\mathcal{L}\\{t\\,f(t)\\} = -F'(s)$.",
        "$F'(s) = \\dfrac{(s^2+1) - s \\cdot 2s}{(s^2+1)^2} = \\dfrac{1 - s^2}{(s^2+1)^2}$.",
        "$\\mathcal{L}\\{t\\cos t\\} = -F'(s) = \\dfrac{s^2 - 1}{(s^2+1)^2}$."
      ],
      "answer": "$\\dfrac{s^2 - 1}{(s^2+1)^2}$",
      "lesson": "$t$를 곱하면 $s$-영역에서 미분: $\\mathcal{L}\\{t^n f(t)\\} = (-1)^n F^{(n)}(s)$. 이 공식으로 $t$ 곱셈을 처리합니다."
    },
    {
      "title": "[응용] 역변환 — 부분분수",
      "problem": "$\\mathcal{L}^{-1}\\left\\{\\dfrac{5}{(s-1)(s+4)}\\right\\}$를 구하시오.",
      "steps": [
        "부분분수: $\\dfrac{5}{(s-1)(s+4)} = \\dfrac{A}{s-1} + \\dfrac{B}{s+4}$.",
        "$A(s+4) + B(s-1) = 5$. $s=1$: $5A = 5$, $A = 1$. $s=-4$: $-5B = 5$, $B = -1$.",
        "$= \\dfrac{1}{s-1} - \\dfrac{1}{s+4}$.",
        "$\\mathcal{L}^{-1} = e^t - e^{-4t}$."
      ],
      "answer": "$e^t - e^{-4t}$",
      "lesson": "역변환의 핵심은 부분분수 분해입니다. 분해 후 각 항을 변환표에서 바로 찾으면 됩니다."
    },
    {
      "title": "[심화] $s$-이동과 완전제곱식",
      "problem": "$\\mathcal{L}^{-1}\\left\\{\\dfrac{s+3}{s^2+6s+13}\\right\\}$를 구하시오.",
      "steps": [
        "분모 완전제곱: $s^2+6s+13 = (s+3)^2 + 4$.",
        "$\\dfrac{s+3}{(s+3)^2+4}$. $u = s+3$으로 놓으면 $\\dfrac{u}{u^2+4}$.",
        "$\\mathcal{L}^{-1}\\left\\{\\dfrac{u}{u^2+4}\\right\\} = \\cos 2t$ (표준 변환).",
        "$s \\to s+3$은 $s$-이동 $a = -3$에 대응: $e^{-3t}\\cos 2t$."
      ],
      "answer": "$e^{-3t}\\cos 2t$",
      "lesson": "분모를 완전제곱식으로 변환하면 $s$-이동 정리를 적용할 수 있습니다. $s^2 + bs + c = (s + b/2)^2 + (c - b^2/4)$."
    }
  ],
  "problems": [
    {
      "id": "13-1",
      "type": "choice",
      "difficulty": 1,
      "question": "$\\mathcal{L}\\{e^{3t}\\}$ 는?",
      "choices": [
        "$\\dfrac{1}{s-3}$",
        "$\\dfrac{1}{s+3}$",
        "$\\dfrac{3}{s}$",
        "$\\dfrac{s}{s-3}$"
      ],
      "answer": "$\\dfrac{1}{s-3}$",
      "hints": [
        "$\\mathcal{L}\\{e^{at}\\} = \\dfrac{1}{s-a}$.",
        "$a = 3$."
      ],
      "explanation": "$\\mathcal{L}\\{e^{at}\\} = \\frac{1}{s-a}$ 공식에서 $a=3$.",
      "wrongAnalysis": "$s+a$와 $s-a$를 혼동하는 실수가 매우 흔합니다."
    },
    {
      "id": "13-2",
      "type": "choice",
      "difficulty": 2,
      "question": "$\\mathcal{L}\\{t^2\\}$ 는?",
      "choices": [
        "$\\dfrac{2}{s^3}$",
        "$\\dfrac{1}{s^2}$",
        "$\\dfrac{2}{s^2}$",
        "$\\dfrac{1}{s^3}$"
      ],
      "answer": "$\\dfrac{2}{s^3}$",
      "hints": [
        "$\\mathcal{L}\\{t^n\\} = \\dfrac{n!}{s^{n+1}}$.",
        "$n = 2$: $\\dfrac{2!}{s^3}$."
      ],
      "explanation": "$\\mathcal{L}\\{t^2\\} = \\frac{2!}{s^{2+1}} = \\frac{2}{s^3}$.",
      "wrongAnalysis": "$n!$을 빠뜨리거나 $s$의 지수를 틀리는 실수가 있습니다."
    },
    {
      "id": "13-3",
      "type": "choice",
      "difficulty": 3,
      "question": "$\\mathcal{L}\\{f''(t)\\}$ 를 $F(s)$로 나타내면? ($f(0)=1, f'(0)=0$)",
      "choices": [
        "$s^2 F(s) - s$",
        "$s^2 F(s) - s - 0$",
        "$s^2 F(s) - 1$",
        "$sF(s) - 1$"
      ],
      "answer": "$s^2 F(s) - s$",
      "hints": [
        "$\\mathcal{L}\\{f''\\} = s^2 F(s) - sf(0) - f'(0)$.",
        "$f(0)=1, f'(0)=0$."
      ],
      "explanation": "$\\mathcal{L}\\{f''\\} = s^2 F(s) - s \\cdot 1 - 0 = s^2 F(s) - s$.",
      "wrongAnalysis": "초기조건을 대입할 때 $sf(0)$에서 $s$를 빠뜨리는 실수가 흔합니다."
    },
    {
      "id": "13-4",
      "type": "choice",
      "difficulty": 1,
      "question": "$\\mathcal{L}\\{\\cos 2t\\}$는?",
      "choices": [
        "$\\dfrac{s}{s^2 + 4}$",
        "$\\dfrac{2}{s^2 + 4}$",
        "$\\dfrac{s}{s^2 + 2}$",
        "$\\dfrac{1}{s^2 + 4}$"
      ],
      "answer": "$\\dfrac{s}{s^2 + 4}$",
      "hints": [
        "$\\mathcal{L}\\{\\cos bt\\} = \\dfrac{s}{s^2 + b^2}$.",
        "$b = 2$이므로 $b^2 = 4$."
      ],
      "explanation": "$\\mathcal{L}\\{\\cos bt\\} = \\dfrac{s}{s^2 + b^2}$에서 $b = 2$를 대입하면 $\\dfrac{s}{s^2 + 4}$.",
      "wrongAnalysis": "$\\cos$와 $\\sin$의 변환을 혼동하는 실수가 있습니다. $\\cos$는 분자에 $s$, $\\sin$은 분자에 $b$입니다."
    },
    {
      "id": "13-5",
      "type": "choice",
      "difficulty": 2,
      "question": "$\\mathcal{L}\\{e^{-t}\\cos 3t\\}$는?",
      "choices": [
        "$\\dfrac{s+1}{(s+1)^2 + 9}$",
        "$\\dfrac{s}{s^2 + 9}$",
        "$\\dfrac{s-1}{(s-1)^2 + 9}$",
        "$\\dfrac{3}{(s+1)^2 + 9}$"
      ],
      "answer": "$\\dfrac{s+1}{(s+1)^2 + 9}$",
      "hints": [
        "$\\mathcal{L}\\{\\cos 3t\\} = \\dfrac{s}{s^2 + 9}$.",
        "$s$-이동: $e^{-t}$가 곱해지면 $s \\to s+1$ (즉 $s - (-1) = s + 1$)."
      ],
      "explanation": "$\\mathcal{L}\\{\\cos 3t\\} = \\dfrac{s}{s^2+9}$에서 $s$-이동 ($a = -1$): $s \\to s - (-1) = s+1$. 결과: $\\dfrac{s+1}{(s+1)^2+9}$.",
      "wrongAnalysis": "$e^{-t}$에서 $a = -1$이므로 $s \\to s+1$인데, $s \\to s-1$로 잘못 이동하는 실수가 흔합니다."
    }
  ],
  "summary": {
    "keyPoints": [
      "라플라스 변환: 미분 → 대수",
      "기본 변환표 암기",
      "$s$-이동, 미분 변환 공식 핵심"
    ],
    "formulas": [
      "\\mathcal{L}\\{e^{at}\\} = \\frac{1}{s-a}",
      "\\mathcal{L}\\{t^n\\} = \\frac{n!}{s^{n+1}}",
      "\\mathcal{L}\\{f''\\} = s^2F - sf(0) - f'(0)"
    ],
    "commonMistakes": [
      "$s-a$ 와 $s+a$ 혼동",
      "초기조건 대입 누락"
    ],
    "nextConnection": "다음 단원에서 라플라스 변환으로 실제 ODE를 풀고, 헤비사이드·디랙 델타·합성곱을 배웁니다."
  }
},
{
  "id": 14,
  "title": "라플라스 변환의 응용",
  "category": "미분방정식",
  "level": "심화",
  "question": "라플라스 변환으로 ODE를 실제로 어떻게 풀까?",
  "concept": {
    "intro": ":::note[라플라스 변환으로 ODE 풀기]\n1. 양변에 $\\mathcal{L}$ 적용 → 초기조건 자동 포함\n2. $Y(s)$에 대한 대수 방정식 풀기\n3. 부분분수 분해 → 역변환\n:::\n\n:::definition[헤비사이드 계단함수]\n$u(t-a) = \\begin{cases}0, & t<a \\\\ 1, & t \\ge a\\end{cases}$.\n$\\mathcal{L}\\{u(t-a)f(t-a)\\} = e^{-as}F(s)$.\n:::\n\n:::definition[디랙 델타]\n$\\delta(t-a)$는 순간 충격을 모델링합니다. $\\mathcal{L}\\{\\delta(t-a)\\} = e^{-as}$.\n:::\n\n:::theorem[합성곱 정리]\n$(f*g)(t) = \\int_0^t f(\\tau)g(t-\\tau)d\\tau$. $\\mathcal{L}\\{f*g\\} = F(s)G(s)$.\n:::",
    "intuition": "라플라스 변환의 진가는 초기값 문제를 '한 방에' 풀 수 있다는 점입니다. 일반해를 먼저 구하고 초기조건을 대입하는 과정이 불필요합니다. 또한 불연속 입력(스위치 ON/OFF)이나 순간 충격(디랙 델타)도 자연스럽게 처리합니다.",
    "formula": "\\mathcal{L}\\{y''\\} = s^2Y - sy(0) - y'(0)\n\\mathcal{L}\\{u(t-a)f(t-a)\\} = e^{-as}F(s)\n\\mathcal{L}\\{f*g\\} = F \\cdot G",
    "summary": ":::note[요약]\n• ODE → 대수 → 역변환\n• 헤비사이드: 불연속 입력\n• 합성곱: 곱 ↔ 합성\n:::"
  },
  "examples": [
    {
      "title": "[기본] 라플라스로 ODE 풀기",
      "problem": "$y'' + y = 0$, $y(0)=1$, $y'(0)=0$ 을 라플라스 변환으로 풀어라.",
      "steps": [
        "양변 변환: $s^2Y - s\\cdot1 - 0 + Y = 0$.",
        "$(s^2+1)Y = s$.",
        "$Y(s) = \\dfrac{s}{s^2+1}$.",
        "역변환: $\\mathcal{L}^{-1}\\left\\{\\dfrac{s}{s^2+1}\\right\\} = \\cos t$.",
        "$y(t) = \\cos t$."
      ],
      "answer": "$y(t) = \\cos t$",
      "lesson": "라플라스 변환은 초기조건을 처음부터 방정식에 포함시키므로, 일반해→특수해 과정이 한 단계로 줄어듭니다."
    },
    {
      "title": "[기본] 1계 ODE의 라플라스 풀이",
      "problem": "$y' + 3y = 6$, $y(0) = 2$를 라플라스 변환으로 풀어라.",
      "steps": [
        "$sY - 2 + 3Y = \\dfrac{6}{s}$.",
        "$(s+3)Y = \\dfrac{6}{s} + 2 = \\dfrac{6 + 2s}{s}$.",
        "$Y = \\dfrac{2s + 6}{s(s+3)} = \\dfrac{2(s+3)}{s(s+3)} = \\dfrac{2}{s}$.",
        "역변환: $y(t) = 2$."
      ],
      "answer": "$y(t) = 2$",
      "lesson": "초기값이 정상상태와 같으면 해는 상수입니다. 라플라스에서 $Y = 2/s$는 $y = 2$(상수)를 의미합니다."
    },
    {
      "title": "[응용] 비제차 ODE 풀이",
      "problem": "$y'' + 4y = \\sin 2t$, $y(0) = 0$, $y'(0) = 0$를 풀어라.",
      "steps": [
        "변환: $s^2 Y + 4Y = \\dfrac{2}{s^2+4}$.",
        "$Y = \\dfrac{2}{(s^2+4)^2}$.",
        "역변환 공식: $\\mathcal{L}^{-1}\\left\\{\\dfrac{2a}{(s^2+a^2)^2}\\right\\} = \\dfrac{\\sin at - at\\cos at}{2a^2}$.",
        "$a = 2$: $y(t) = \\dfrac{\\sin 2t - 2t\\cos 2t}{8}$."
      ],
      "answer": "$y(t) = \\dfrac{\\sin 2t - 2t\\cos 2t}{8}$",
      "lesson": "공명 조건(외력 진동수 = 고유진동수)에서 해에 $t\\cos$항이 나타나며 진폭이 시간에 따라 증가합니다."
    },
    {
      "title": "[응용] 헤비사이드 함수와 $t$-이동",
      "problem": "$y' + y = u(t-2)$, $y(0) = 0$를 풀어라. ($u$는 헤비사이드 함수)",
      "steps": [
        "변환: $sY + Y = \\dfrac{e^{-2s}}{s}$.",
        "$Y = \\dfrac{e^{-2s}}{s(s+1)}$.",
        "부분분수: $\\dfrac{1}{s(s+1)} = \\dfrac{1}{s} - \\dfrac{1}{s+1}$.",
        "$\\mathcal{L}^{-1}\\left\\{\\dfrac{1}{s} - \\dfrac{1}{s+1}\\right\\} = 1 - e^{-t}$.",
        "$t$-이동: $y(t) = u(t-2)[1 - e^{-(t-2)}]$."
      ],
      "answer": "$y(t) = u(t-2)(1 - e^{-(t-2)})$",
      "lesson": "$e^{-as}$를 포함하는 항의 역변환은 $t$-이동 정리를 적용합니다: $\\mathcal{L}^{-1}\\{e^{-as}F(s)\\} = u(t-a)f(t-a)$."
    },
    {
      "title": "[심화] 디랙 델타 입력과 전달함수",
      "problem": "$y'' + 4y' + 3y = \\delta(t-1)$, $y(0) = 0$, $y'(0) = 0$를 풀어라.",
      "steps": [
        "변환: $(s^2 + 4s + 3)Y = e^{-s}$. $Y = \\dfrac{e^{-s}}{(s+1)(s+3)}$.",
        "부분분수: $\\dfrac{1}{(s+1)(s+3)} = \\dfrac{1/2}{s+1} - \\dfrac{1/2}{s+3}$.",
        "$\\mathcal{L}^{-1} = \\dfrac{1}{2}(e^{-t} - e^{-3t})$.",
        "$t$-이동: $y(t) = \\dfrac{u(t-1)}{2}[e^{-(t-1)} - e^{-3(t-1)}]$."
      ],
      "answer": "$y(t) = \\dfrac{u(t-1)}{2}[e^{-(t-1)} - e^{-3(t-1)}]$",
      "lesson": "$\\delta(t-a)$ 입력에 대한 응답을 임펄스 응답이라 하며, $H(s) = 1/[(s+1)(s+3)]$이 전달함수(transfer function)입니다."
    }
  ],
  "problems": [
    {
      "id": "14-1",
      "type": "choice",
      "difficulty": 2,
      "question": "$y' + 2y = 0$, $y(0)=3$ 을 라플라스로 풀면 $Y(s) = ?$",
      "choices": [
        "$\\dfrac{3}{s+2}$",
        "$\\dfrac{3}{s-2}$",
        "$\\dfrac{1}{s+2}$",
        "$\\dfrac{3s}{s+2}$"
      ],
      "answer": "$\\dfrac{3}{s+2}$",
      "hints": [
        "$sY - 3 + 2Y = 0$.",
        "$(s+2)Y = 3$."
      ],
      "explanation": "$\\mathcal{L}\\{y'\\} = sY - y(0) = sY - 3$. 대입: $sY - 3 + 2Y = 0 \\Rightarrow Y = \\frac{3}{s+2}$.",
      "wrongAnalysis": "초기조건 $y(0)=3$을 $sY$에서 빼는 것을 잊는 실수가 흔합니다."
    },
    {
      "id": "14-2",
      "type": "choice",
      "difficulty": 3,
      "question": "$\\mathcal{L}\\{\\delta(t-3)\\}$ 는?",
      "choices": [
        "$e^{-3s}$",
        "$\\dfrac{e^{-3s}}{s}$",
        "$3e^{-s}$",
        "$\\dfrac{1}{s-3}$"
      ],
      "answer": "$e^{-3s}$",
      "hints": [
        "디랙 델타의 라플라스 변환 공식.",
        "$\\mathcal{L}\\{\\delta(t-a)\\} = e^{-as}$."
      ],
      "explanation": "$\\mathcal{L}\\{\\delta(t-a)\\} = e^{-as}$에서 $a=3$. 디랙 델타는 순간 충격을 모델링합니다.",
      "wrongAnalysis": "헤비사이드 $u(t-a)$의 변환 $e^{-as}/s$와 혼동하지 마세요."
    },
    {
      "id": "14-3",
      "type": "choice",
      "difficulty": 3,
      "question": "합성곱 $(f*g)(t) = \\int_0^t f(\\tau)g(t-\\tau)d\\tau$ 의 라플라스 변환은?",
      "choices": [
        "$F(s) \\cdot G(s)$",
        "$F(s) + G(s)$",
        "$F(s) / G(s)$",
        "$F(s) - G(s)$"
      ],
      "answer": "$F(s) \\cdot G(s)$",
      "hints": [
        "합성곱 정리를 떠올리세요.",
        "시간 영역에서의 합성곱은 라플라스 영역에서 곱으로 바뀝니다."
      ],
      "explanation": "합성곱 정리에 의해 $\\mathcal{L}\\{f*g\\}=F(s)G(s)$입니다. 적분 형태의 합성곱을 직접 계산하지 않고 변환 영역에서 곱으로 처리할 수 있습니다.",
      "wrongAnalysis": "합성곱과 단순 곱을 혼동하는 실수가 있습니다. $\\mathcal{L}\\{f \\cdot g\\} \\ne F \\cdot G$ 입니다."
    },
    {
      "id": "14-4",
      "type": "choice",
      "difficulty": 1,
      "question": "라플라스 변환으로 ODE를 풀 때의 3단계 절차로 올바른 것은?",
      "choices": [
        "특성방정식 → 근 구하기 → 일반해",
        "변환 → 대수 방정식 풀기 → 역변환",
        "변수분리 → 적분 → 초기조건 대입",
        "추측 → 대입 → 계수 결정"
      ],
      "answer": "변환 → 대수 방정식 풀기 → 역변환",
      "hints": [
        "라플라스 변환은 미분을 대수로 바꿉니다.",
        "$Y(s)$를 구한 뒤 역변환으로 $y(t)$를 얻습니다."
      ],
      "explanation": "라플라스 풀이: (1) ODE 양변에 $\\mathcal{L}$ 적용 → $Y(s)$에 대한 대수 방정식, (2) $Y(s)$ 풀기, (3) 역변환 $\\mathcal{L}^{-1}$으로 $y(t)$ 복원.",
      "wrongAnalysis": "라플라스 변환 풀이를 특성방정식 풀이나 미정계수법과 혼동하는 실수가 있습니다."
    },
    {
      "id": "14-5",
      "type": "choice",
      "difficulty": 1,
      "question": "헤비사이드 계단함수 $u(t-3)$의 라플라스 변환은?",
      "choices": [
        "$\\dfrac{e^{-3s}}{s}$",
        "$e^{-3s}$",
        "$\\dfrac{1}{s-3}$",
        "$\\dfrac{3}{s}$"
      ],
      "answer": "$\\dfrac{e^{-3s}}{s}$",
      "hints": [
        "$\\mathcal{L}\\{u(t-a)\\} = \\dfrac{e^{-as}}{s}$.",
        "$a = 3$을 대입하세요."
      ],
      "explanation": "$\\mathcal{L}\\{u(t-a)\\} = \\dfrac{e^{-as}}{s}$에서 $a=3$이므로 $\\dfrac{e^{-3s}}{s}$.",
      "wrongAnalysis": "디랙 델타 $\\delta(t-3)$의 변환 $e^{-3s}$와 혼동하는 실수가 흔합니다. 헤비사이드는 분모에 $s$가 있습니다."
    }
  ],
  "summary": {
    "keyPoints": [
      "ODE를 대수 방정식으로 변환",
      "부분분수 → 역변환",
      "헤비사이드·디랙 델타로 불연속/충격 처리"
    ],
    "formulas": [
      "Y(s) = \\frac{\\text{초기조건 포함 식}}{\\text{특성다항식}}",
      "\\mathcal{L}\\{\\delta(t-a)\\} = e^{-as}",
      "\\mathcal{L}\\{f*g\\} = FG"
    ],
    "commonMistakes": [
      "초기조건 대입 누락",
      "부분분수 분해 실수"
    ],
    "nextConnection": "다음 단원에서는 여러 ODE가 묶인 연립미분방정식을 행렬과 고윳값으로 풀겠습니다."
  }
},
{
  "id": 15,
  "title": "연립미분방정식의 행렬 풀이",
  "category": "미분방정식",
  "level": "심화",
  "question": "여러 미지함수가 얽힌 연립 ODE를 행렬로 어떻게 풀까?",
  "concept": {
    "intro": ":::definition[연립 ODE의 행렬 표현]\n선형 연립 ODE $\\mathbf{X}' = A\\mathbf{X}$에서 해는 $\\mathbf{X} = \\mathbf{v}\\,e^{\\lambda t}$ 형태입니다.\n$A\\mathbf{v} = \\lambda\\mathbf{v}$, 즉 $\\lambda$는 고윳값, $\\mathbf{v}$는 고유벡터.\n:::\n\n:::theorem[고윳값에 따른 일반해]\n• 서로 다른 실수 고윳값: $\\mathbf{X} = C_1\\mathbf{v}_1 e^{\\lambda_1 t} + C_2\\mathbf{v}_2 e^{\\lambda_2 t}$\n• 중복 고윳값: 일반화 고유벡터 사용, $(A-\\lambda I)\\mathbf{w} = \\mathbf{v}$ 풀기\n• 복소 고윳값: 실수부와 허수부를 분리하여 실수 해 구성\n:::\n\n:::definition[행렬 지수]\n행렬 지수 $e^{At}$는 급수 $\\sum_{k=0}^\\infty \\frac{(At)^k}{k!}$로 정의되며, 기본 행렬 해입니다.\n:::",
    "intuition": "연립 ODE는 '여러 변수가 서로 영향을 주며 동시에 변하는 시스템'입니다. 고윳값 분해로 시스템을 독립 모드로 분해하면, 각 모드는 단순한 지수 성장/감소/진동이 됩니다.",
    "formula": "\\mathbf{X}' = A\\mathbf{X}\n\\mathbf{X} = \\sum C_i \\mathbf{v}_i e^{\\lambda_i t}\ne^{At} = \\sum_{k=0}^\\infty \\frac{(At)^k}{k!}",
    "summary": ":::note[요약]\n• 고윳값·고유벡터로 해 구성\n• 중복 고윳값: 일반화 고유벡터\n• 복소 고윳값: $\\cos, \\sin$ 분리\n:::"
  },
  "examples": [
    {
      "title": "[기본] 2x2 시스템",
      "problem": "$\\mathbf{X}' = \\begin{pmatrix}1 & 1 \\\\ 0 & 2\\end{pmatrix}\\mathbf{X}$ 의 일반해를 구하시오.",
      "steps": [
        "고윳값: $\\det(A-\\lambda I) = (1-\\lambda)(2-\\lambda) = 0 \\Rightarrow \\lambda = 1, 2$.",
        "$\\lambda=1$: $(A-I)\\mathbf{v}=0 \\Rightarrow \\begin{pmatrix}0&1\\\\0&1\\end{pmatrix}\\mathbf{v}=0 \\Rightarrow \\mathbf{v}_1 = \\begin{pmatrix}1\\\\0\\end{pmatrix}$.",
        "$\\lambda=2$: $(A-2I)\\mathbf{v}=0 \\Rightarrow \\begin{pmatrix}-1&1\\\\0&0\\end{pmatrix}\\mathbf{v}=0 \\Rightarrow \\mathbf{v}_2 = \\begin{pmatrix}1\\\\1\\end{pmatrix}$.",
        "$\\mathbf{X} = C_1\\begin{pmatrix}1\\\\0\\end{pmatrix}e^t + C_2\\begin{pmatrix}1\\\\1\\end{pmatrix}e^{2t}$."
      ],
      "answer": "$\\mathbf{X} = C_1\\begin{pmatrix}1\\\\0\\end{pmatrix}e^t + C_2\\begin{pmatrix}1\\\\1\\end{pmatrix}e^{2t}$",
      "lesson": "고윳값 분해가 연립 ODE를 독립적인 1계 ODE 묶음으로 대각화하는 것입니다."
    },
    {
      "title": "[기본] 대각 시스템",
      "problem": "$x' = -x$, $y' = 3y$의 일반해를 행렬로 쓰시오.",
      "steps": [
        "$A = \\begin{pmatrix}-1&0\\\\0&3\\end{pmatrix}$. 대각행렬이므로 고윳값은 $-1, 3$.",
        "고유벡터: $\\mathbf{v}_1 = \\begin{pmatrix}1\\\\0\\end{pmatrix}$, $\\mathbf{v}_2 = \\begin{pmatrix}0\\\\1\\end{pmatrix}$.",
        "$\\mathbf{X} = C_1\\begin{pmatrix}1\\\\0\\end{pmatrix}e^{-t} + C_2\\begin{pmatrix}0\\\\1\\end{pmatrix}e^{3t}$.",
        "즉 $x = C_1 e^{-t}$, $y = C_2 e^{3t}$."
      ],
      "answer": "$x = C_1 e^{-t}$, $y = C_2 e^{3t}$ (안장점)",
      "lesson": "대각 시스템은 각 성분이 독립적으로 풀립니다. $\\lambda_1 < 0 < \\lambda_2$이면 안장점(saddle)입니다."
    },
    {
      "title": "[응용] 복소 고윳값 — 나선",
      "problem": "$\\mathbf{X}' = \\begin{pmatrix}-1 & 2 \\\\ -2 & -1\\end{pmatrix}\\mathbf{X}$의 일반해를 구하시오.",
      "steps": [
        "$\\det(A - \\lambda I) = (-1-\\lambda)^2 + 4 = \\lambda^2 + 2\\lambda + 5 = 0$.",
        "$\\lambda = -1 \\pm 2i$. $\\alpha = -1$, $\\beta = 2$.",
        "$\\lambda = -1+2i$에 대한 고유벡터: $(A - (-1+2i)I)\\mathbf{v} = 0$에서 $\\mathbf{v} = \\begin{pmatrix}1\\\\i\\end{pmatrix}$.",
        "실수 해: $\\mathbf{X}_1 = e^{-t}\\begin{pmatrix}\\cos 2t\\\\-\\sin 2t\\end{pmatrix}$, $\\mathbf{X}_2 = e^{-t}\\begin{pmatrix}\\sin 2t\\\\\\cos 2t\\end{pmatrix}$.",
        "$\\mathbf{X} = e^{-t}\\left[C_1\\begin{pmatrix}\\cos 2t\\\\-\\sin 2t\\end{pmatrix} + C_2\\begin{pmatrix}\\sin 2t\\\\\\cos 2t\\end{pmatrix}\\right]$."
      ],
      "answer": "실수부 $\\alpha = -1 < 0$이므로 안정 나선(stable spiral)",
      "lesson": "복소 고윳값 $\\alpha \\pm \\beta i$에서 $\\alpha < 0$이면 안정 나선(감쇠 진동), $\\alpha > 0$이면 불안정 나선, $\\alpha = 0$이면 중심입니다."
    },
    {
      "title": "[응용] 초기조건 대입",
      "problem": "$\\mathbf{X}' = \\begin{pmatrix}3&0\\\\0&-2\\end{pmatrix}\\mathbf{X}$, $\\mathbf{X}(0) = \\begin{pmatrix}4\\\\1\\end{pmatrix}$를 풀어라.",
      "steps": [
        "일반해: $\\mathbf{X} = C_1\\begin{pmatrix}1\\\\0\\end{pmatrix}e^{3t} + C_2\\begin{pmatrix}0\\\\1\\end{pmatrix}e^{-2t}$.",
        "$\\mathbf{X}(0) = \\begin{pmatrix}C_1\\\\C_2\\end{pmatrix} = \\begin{pmatrix}4\\\\1\\end{pmatrix}$.",
        "$C_1 = 4$, $C_2 = 1$.",
        "$\\mathbf{X} = \\begin{pmatrix}4e^{3t}\\\\e^{-2t}\\end{pmatrix}$."
      ],
      "answer": "$x = 4e^{3t}$, $y = e^{-2t}$",
      "lesson": "대각 시스템에서 초기조건은 각 고유벡터 방향의 성분으로 바로 분해됩니다."
    },
    {
      "title": "[심화] 중복 고윳값과 일반화 고유벡터",
      "problem": "$\\mathbf{X}' = \\begin{pmatrix}3&1\\\\0&3\\end{pmatrix}\\mathbf{X}$의 일반해를 구하시오.",
      "steps": [
        "$\\lambda = 3$ 중복. $(A-3I) = \\begin{pmatrix}0&1\\\\0&0\\end{pmatrix}$. 고유벡터 $\\mathbf{v} = \\begin{pmatrix}1\\\\0\\end{pmatrix}$.",
        "고유벡터가 1개뿐. 일반화 고유벡터 $\\mathbf{w}$: $(A-3I)\\mathbf{w} = \\mathbf{v}$.",
        "$\\begin{pmatrix}0&1\\\\0&0\\end{pmatrix}\\mathbf{w} = \\begin{pmatrix}1\\\\0\\end{pmatrix}$이므로 $\\mathbf{w} = \\begin{pmatrix}0\\\\1\\end{pmatrix}$.",
        "두 번째 해: $\\mathbf{X}_2 = (\\mathbf{v}t + \\mathbf{w})e^{3t} = \\left[t\\begin{pmatrix}1\\\\0\\end{pmatrix} + \\begin{pmatrix}0\\\\1\\end{pmatrix}\\right]e^{3t}$.",
        "$\\mathbf{X} = C_1\\begin{pmatrix}1\\\\0\\end{pmatrix}e^{3t} + C_2\\begin{pmatrix}t\\\\1\\end{pmatrix}e^{3t}$."
      ],
      "answer": "$\\mathbf{X} = C_1\\begin{pmatrix}1\\\\0\\end{pmatrix}e^{3t} + C_2\\begin{pmatrix}t\\\\1\\end{pmatrix}e^{3t}$",
      "lesson": "중복 고윳값에서 고유벡터가 부족하면 일반화 고유벡터를 구합니다. $te^{\\lambda t}$ 항이 나타나는 것은 2계 ODE의 중근에서 $xe^{rx}$가 나타나는 것과 같은 원리입니다."
    }
  ],
  "problems": [
    {
      "id": "15-1",
      "type": "choice",
      "difficulty": 2,
      "question": "$A = \\begin{pmatrix}3&0\\\\0&-1\\end{pmatrix}$ 인 시스템의 일반해는?",
      "choices": [
        "$C_1\\begin{pmatrix}1\\\\0\\end{pmatrix}e^{3t}+C_2\\begin{pmatrix}0\\\\1\\end{pmatrix}e^{-t}$",
        "$C_1\\begin{pmatrix}1\\\\0\\end{pmatrix}e^{-t}+C_2\\begin{pmatrix}0\\\\1\\end{pmatrix}e^{3t}$",
        "$(C_1+C_2 t)\\begin{pmatrix}1\\\\1\\end{pmatrix}e^{3t}$",
        "$C_1\\begin{pmatrix}1\\\\1\\end{pmatrix}\\cos t+C_2\\begin{pmatrix}1\\\\-1\\end{pmatrix}\\sin t$"
      ],
      "answer": "$C_1\\begin{pmatrix}1\\\\0\\end{pmatrix}e^{3t}+C_2\\begin{pmatrix}0\\\\1\\end{pmatrix}e^{-t}$",
      "hints": [
        "대각행렬: 고윳값이 대각 원소.",
        "$\\lambda_1=3$, $\\lambda_2=-1$."
      ],
      "explanation": "대각행렬이므로 고윳값 $3, -1$, 고유벡터 $\\mathbf{e}_1, \\mathbf{e}_2$. 시스템이 분리됩니다.",
      "wrongAnalysis": "대각행렬에서도 복잡한 계산을 시도하는 실수. 대각이면 각 성분이 독립적입니다."
    },
    {
      "id": "15-2",
      "type": "choice",
      "difficulty": 3,
      "question": "$A = \\begin{pmatrix}0&1\\\\-1&0\\end{pmatrix}$ 인 시스템에서 원점의 평형점 분류는?",
      "choices": [
        "안정 노드",
        "불안정 노드",
        "안장점",
        "중심(center)"
      ],
      "answer": "중심(center)",
      "hints": [
        "고윳값 $\\lambda^2+1=0 \\Rightarrow \\lambda = \\pm i$.",
        "순허수 고윳값."
      ],
      "explanation": "고윳값이 $\\pm i$(순허수)이므로 해는 진동하며 감쇠/발산 없이 원을 그립니다. 중심(center)입니다.",
      "wrongAnalysis": "순허수 고윳값을 나선으로 분류하는 실수가 있습니다. 실수부가 0이면 중심입니다."
    },
    {
      "id": "15-3",
      "type": "choice",
      "difficulty": 3,
      "question": "$A = \\begin{pmatrix}2&1\\\\0&2\\end{pmatrix}$ (중복 고윳값 $\\lambda=2$)의 일반해에 나타나는 항은?",
      "choices": [
        "$e^{2t}$ 와 $te^{2t}$",
        "$e^{2t}$ 와 $e^{-2t}$",
        "$\\cos 2t$ 와 $\\sin 2t$",
        "$e^{2t}$ 만"
      ],
      "answer": "$e^{2t}$ 와 $te^{2t}$",
      "hints": [
        "중복 고윳값이지만 고유벡터가 1개.",
        "일반화 고유벡터가 필요."
      ],
      "explanation": "$\\lambda=2$ 중복, 고유벡터 1개. 일반화 고유벡터로 두 번째 해를 구성하면 $te^{2t}$ 항이 나옵니다.",
      "wrongAnalysis": "중복 고윳값이면 반드시 대각화 가능하다고 생각하는 실수. 고유벡터가 부족하면 조르당 블록이 필요합니다."
    },
    {
      "id": "15-4",
      "type": "choice",
      "difficulty": 1,
      "question": "연립미분방정식 $\\mathbf{X}' = A\\mathbf{X}$에서 해를 $\\mathbf{X} = \\mathbf{v}\\,e^{\\lambda t}$로 놓으면 $\\mathbf{v}$는 $A$의 무엇인가?",
      "choices": [
        "역행렬",
        "행렬식(determinant)",
        "고유벡터(eigenvector)",
        "대각 원소"
      ],
      "answer": "고유벡터(eigenvector)",
      "hints": [
        "$\\mathbf{X} = \\mathbf{v}e^{\\lambda t}$를 대입하면 $\\lambda \\mathbf{v}e^{\\lambda t} = A\\mathbf{v}e^{\\lambda t}$.",
        "$e^{\\lambda t}$로 나누면 $A\\mathbf{v} = \\lambda \\mathbf{v}$."
      ],
      "explanation": "$A\\mathbf{v} = \\lambda \\mathbf{v}$이므로 $\\lambda$는 고윳값, $\\mathbf{v}$는 고유벡터입니다. 연립 ODE의 풀이가 고윳값 문제로 귀결됩니다.",
      "wrongAnalysis": "고유벡터와 역행렬을 혼동하는 실수가 있습니다. $A\\mathbf{v} = \\lambda \\mathbf{v}$는 고윳값 방정식입니다."
    },
    {
      "id": "15-5",
      "type": "number",
      "difficulty": 1,
      "question": "$A = \\begin{pmatrix}5 & 0 \\\\ 0 & -2\\end{pmatrix}$인 대각행렬의 고윳값 중 큰 값은?",
      "answer": "5",
      "hints": [
        "대각행렬의 고윳값은 대각 원소 자체입니다.",
        "고윳값은 $5$와 $-2$입니다."
      ],
      "explanation": "대각행렬의 고윳값은 대각 원소입니다. $\\lambda_1 = 5$, $\\lambda_2 = -2$이므로 큰 값은 $5$.",
      "wrongAnalysis": "대각행렬에서도 $\\det(A - \\lambda I) = 0$을 복잡하게 전개하는 실수가 있습니다. 대각행렬은 바로 읽으면 됩니다."
    }
  ],
  "summary": {
    "keyPoints": [
      "고윳값·고유벡터 → 해의 구성",
      "중복 고윳값: 일반화 고유벡터, $te^{\\lambda t}$ 항",
      "평형점 분류: 노드·안장·중심·나선"
    ],
    "formulas": [
      "\\mathbf{X}' = A\\mathbf{X},\\quad \\mathbf{X} = \\mathbf{v}e^{\\lambda t}",
      "\\det(A - \\lambda I) = 0"
    ],
    "commonMistakes": [
      "고유벡터 계산 실수",
      "중복 고윳값에서 일반화 고유벡터 누락"
    ],
    "nextConnection": "다음 단원에서는 3계 이상의 고계 미분방정식을 다룹니다."
  }
},
{
  "id": 16,
  "title": "고계 미분방정식",
  "category": "미분방정식",
  "level": "심화",
  "question": "3계 이상의 고계 선형 ODE는 어떻게 풀까?",
  "concept": {
    "intro": ":::definition[고계 선형 ODE]\n$n$계 선형 ODE $a_n y^{(n)} + a_{n-1}y^{(n-1)} + \\cdots + a_1 y' + a_0 y = g(x)$의 특성방정식은 $a_n r^n + a_{n-1}r^{n-1} + \\cdots + a_0 = 0$ ($n$차 다항식)입니다.\n:::\n\n:::theorem[고계 ODE의 일반해]\n• $n$개의 근(중근 포함)에서 기본해 집합 구성\n• 중근 $r$ (중복도 $m$): $e^{rx}, xe^{rx}, \\ldots, x^{m-1}e^{rx}$\n• 일반해에 $n$개의 임의상수\n:::\n\n:::note[시스템 환원]\n$y_1=y, y_2=y', \\ldots, y_n=y^{(n-1)}$로 두면 1계 연립 시스템 $\\mathbf{Y}' = A\\mathbf{Y}$로 변환됩니다. 매개변수변환법도 $n$계로 일반화됩니다.\n:::",
    "intuition": "고계 ODE는 2계의 자연스러운 확장입니다. $n$차 특성다항식의 근 $n$개가 $n$개의 독립해를 결정합니다. 실전에서는 3~4계가 주로 등장하며, 보의 처짐(4계)이 대표적입니다.",
    "formula": "a_n r^n + \\cdots + a_0 = 0\n\\text{$n$개 근 → $n$개 기본해}\n\\text{중근 $r$ (중복도 $m$):}\\ e^{rx},\\ xe^{rx},\\ \\ldots,\\ x^{m-1}e^{rx}",
    "summary": ":::note[요약]\n• $n$차 특성다항식의 근 구하기\n• 중근마다 $x^k e^{rx}$ 계열\n• 시스템으로 환원 가능\n:::"
  },
  "examples": [
    {
      "title": "[기본] 3계 ODE",
      "problem": "$y''' - 6y'' + 11y' - 6y = 0$ 의 일반해를 구하시오.",
      "steps": [
        "특성방정식: $r^3 - 6r^2 + 11r - 6 = 0$.",
        "$r=1$ 대입: $1-6+11-6=0$. 인수: $(r-1)$.",
        "조립제법: $r^3-6r^2+11r-6 = (r-1)(r^2-5r+6) = (r-1)(r-2)(r-3)$.",
        "근: $r = 1, 2, 3$.",
        "$y = C_1 e^x + C_2 e^{2x} + C_3 e^{3x}$."
      ],
      "answer": "$y = C_1 e^x + C_2 e^{2x} + C_3 e^{3x}$",
      "lesson": "고계 특성방정식의 인수분해에서 조립제법이 유용합니다. 정수근 후보는 상수항의 약수입니다."
    },
    {
      "title": "[기본] 0근이 포함된 경우",
      "problem": "$y''' + y'' - 2y' = 0$의 일반해를 구하시오.",
      "steps": [
        "특성방정식: $r^3 + r^2 - 2r = 0$.",
        "$r$로 묶기: $r(r^2 + r - 2) = r(r+2)(r-1) = 0$.",
        "근: $r = 0, -2, 1$.",
        "$y = C_1 + C_2 e^{-2x} + C_3 e^x$."
      ],
      "answer": "$y = C_1 + C_2 e^{-2x} + C_3 e^x$",
      "lesson": "$r = 0$은 $e^{0 \\cdot x} = 1$ (상수 함수)에 대응합니다. 공통인수 $r$을 먼저 묶으면 차수가 내려갑니다."
    },
    {
      "title": "[응용] 실근과 복소근의 혼합",
      "problem": "$y''' - y'' + y' - y = 0$의 일반해를 구하시오.",
      "steps": [
        "특성방정식: $r^3 - r^2 + r - 1 = 0$.",
        "$r = 1$ 시도: $1 - 1 + 1 - 1 = 0$ ✓.",
        "$(r-1)(r^2+1) = 0$. 근: $r = 1, \\pm i$.",
        "실근 $r = 1$: $e^x$. 복소근 $\\pm i$: $\\cos x, \\sin x$.",
        "$y = C_1 e^x + C_2 \\cos x + C_3 \\sin x$."
      ],
      "answer": "$y = C_1 e^x + C_2 \\cos x + C_3 \\sin x$",
      "lesson": "3계 방정식은 1개의 실근과 1쌍의 복소근이 나올 수 있습니다. 실근은 지수함수, 복소근은 삼각함수로 기본해를 구성합니다."
    },
    {
      "title": "[응용] 4계 방정식과 이중 복소근",
      "problem": "$y^{(4)} + 2y'' + y = 0$의 일반해를 구하시오.",
      "steps": [
        "특성방정식: $r^4 + 2r^2 + 1 = (r^2 + 1)^2 = 0$.",
        "$r^2 + 1 = 0$의 이중근: $r = \\pm i$ (각각 2중).",
        "중복 복소근 $\\pm i$ (중복도 2): 기본해 $\\cos x, \\sin x, x\\cos x, x\\sin x$.",
        "$y = (C_1 + C_2 x)\\cos x + (C_3 + C_4 x)\\sin x$."
      ],
      "answer": "$y = (C_1 + C_2 x)\\cos x + (C_3 + C_4 x)\\sin x$",
      "lesson": "복소근 $\\alpha \\pm \\beta i$의 중복도가 $m$이면 $x^k e^{\\alpha x}\\cos(\\beta x)$, $x^k e^{\\alpha x}\\sin(\\beta x)$ ($k = 0, \\ldots, m-1$)이 기본해입니다."
    },
    {
      "title": "[심화] 연립 시스템으로의 환원",
      "problem": "$y''' + y' = 0$을 1계 연립 시스템 $\\mathbf{Y}' = A\\mathbf{Y}$로 변환하시오.",
      "steps": [
        "$y_1 = y$, $y_2 = y'$, $y_3 = y''$로 놓습니다.",
        "$y_1' = y_2$, $y_2' = y_3$, $y_3' = y''' = -y' = -y_2$.",
        "$A = \\begin{pmatrix}0&1&0\\\\0&0&1\\\\0&-1&0\\end{pmatrix}$.",
        "확인: $A$의 특성방정식 $-\\lambda(\\lambda^2 + 1) = 0$, 근 $\\lambda = 0, \\pm i$.",
        "원래 특성방정식 $r(r^2+1) = 0$과 일치!"
      ],
      "answer": "$A = \\begin{pmatrix}0&1&0\\\\0&0&1\\\\0&-1&0\\end{pmatrix}$",
      "lesson": "고계 ODE를 1계 연립으로 환원하면 행렬의 고윳값이 원래 특성방정식의 근과 정확히 일치합니다. 이것이 두 풀이법의 동등성입니다."
    }
  ],
  "problems": [
    {
      "id": "16-1",
      "type": "choice",
      "difficulty": 2,
      "question": "$y''' - y' = 0$ 의 특성방정식의 근은?",
      "choices": [
        "$0,\\ 1,\\ -1$",
        "$0,\\ 1$",
        "$1,\\ -1$",
        "$0,\\ 0,\\ 1$"
      ],
      "answer": "$0,\\ 1,\\ -1$",
      "hints": [
        "$r^3 - r = 0$.",
        "$r(r^2-1) = r(r-1)(r+1) = 0$."
      ],
      "explanation": "$r^3 - r = r(r-1)(r+1) = 0$이므로 $r = 0, 1, -1$. 일반해: $C_1 + C_2 e^x + C_3 e^{-x}$.",
      "wrongAnalysis": "$r=0$을 빠뜨리는 실수가 흔합니다. $r=0$은 상수해 $e^{0x}=1$에 해당합니다."
    },
    {
      "id": "16-2",
      "type": "choice",
      "difficulty": 3,
      "question": "$y^{(4)} - y = 0$ 의 기본해 집합은?",
      "choices": [
        "$\\{e^x,\\ e^{-x},\\ \\cos x,\\ \\sin x\\}$",
        "$\\{e^x,\\ xe^x,\\ e^{-x},\\ xe^{-x}\\}$",
        "$\\{1,\\ x,\\ x^2,\\ x^3\\}$",
        "$\\{e^x,\\ e^{-x},\\ e^{ix},\\ e^{-ix}\\}$"
      ],
      "answer": "$\\{e^x,\\ e^{-x},\\ \\cos x,\\ \\sin x\\}$",
      "hints": [
        "$r^4 - 1 = 0 \\Rightarrow r^4 = 1$.",
        "4차 단위근: $r = 1, -1, i, -i$."
      ],
      "explanation": "$r^4=1$의 근: $1, -1, i, -i$. 실근 $\\to e^x, e^{-x}$. 복소근 $\\to \\cos x, \\sin x$.",
      "wrongAnalysis": "복소근 $\\pm i$를 $e^{ix}, e^{-ix}$로 두는 것은 맞지만, 실수 기본해로는 $\\cos x, \\sin x$를 씁니다."
    },
    {
      "id": "16-3",
      "type": "choice",
      "difficulty": 3,
      "question": "$y''' - 3y'' + 3y' - y = 0$ (특성근 $r=1$ 삼중근)의 일반해는?",
      "choices": [
        "$(C_1 + C_2 x + C_3 x^2)e^x$",
        "$C_1 e^x + C_2 e^{2x} + C_3 e^{3x}$",
        "$(C_1 + C_2 x)e^x + C_3 e^{-x}$",
        "$C_1 e^x + C_2 xe^x$"
      ],
      "answer": "$(C_1 + C_2 x + C_3 x^2)e^x$",
      "hints": [
        "$(r-1)^3 = 0$.",
        "삼중근: $e^x, xe^x, x^2 e^x$."
      ],
      "explanation": "삼중근 $r=1$이므로 기본해: $e^x, xe^x, x^2 e^x$. 일반해: $(C_1+C_2 x+C_3 x^2)e^x$.",
      "wrongAnalysis": "중복도만큼 $x^k$를 곱해야 합니다. 3중근이면 $x^0, x^1, x^2$까지."
    },
    {
      "id": "16-4",
      "type": "choice",
      "difficulty": 1,
      "question": "3계 선형 ODE의 일반해에는 임의상수가 몇 개 포함되는가?",
      "choices": [
        "1개",
        "2개",
        "3개",
        "4개"
      ],
      "answer": "3개",
      "hints": [
        "$n$계 ODE의 일반해에는 $n$개의 임의상수가 필요합니다.",
        "3계이므로 초기조건 $y(x_0), y'(x_0), y''(x_0)$까지 지정해야 유일한 해가 결정됩니다."
      ],
      "explanation": "$n$계 선형 ODE의 일반해에는 $n$개의 임의상수가 포함됩니다. 3계이므로 $C_1, C_2, C_3$ 세 개입니다.",
      "wrongAnalysis": "2계 ODE에서의 습관으로 임의상수를 2개로 적는 실수가 있습니다."
    },
    {
      "id": "16-5",
      "type": "text",
      "difficulty": 1,
      "question": "$y''' + y'' = 0$의 특성방정식을 인수분해하면 $r^2(r + a) = 0$입니다. $a$의 값은?",
      "answer": "1",
      "hints": [
        "특성방정식: $r^3 + r^2 = 0$.",
        "$r^2$을 공통인수로 묶으세요."
      ],
      "explanation": "$r^3 + r^2 = r^2(r + 1) = 0$이므로 $a = 1$. 근: $r = 0$(이중근), $r = -1$. 일반해: $C_1 + C_2 x + C_3 e^{-x}$.",
      "wrongAnalysis": "$r^2$이 이중근이므로 $1, x$ 두 개의 기본해를 제공하는 것을 잊는 실수가 있습니다."
    }
  ],
  "summary": {
    "keyPoints": [
      "$n$차 특성방정식 → $n$개 기본해",
      "중근 중복도 $m$ → $e^{rx}, xe^{rx}, \\ldots, x^{m-1}e^{rx}$",
      "시스템 환원으로 행렬 방법 적용 가능"
    ],
    "formulas": [
      "a_n r^n + \\cdots + a_0 = 0",
      "\\text{중복도 $m$:}\\ x^k e^{rx},\\ k=0,\\ldots,m-1"
    ],
    "commonMistakes": [
      "$r=0$ 근 누락",
      "중복도에 맞는 $x^k$ 항 빠뜨림"
    ],
    "nextConnection": "여기까지 ODE의 주요 기법을 모두 다뤘습니다. 다음 단원에서는 편미분방정식(PDE)의 세계로 넘어갑니다."
  }
}
];
