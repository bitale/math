import { Lesson } from "../../types";

export const differentialEquationsLessons: Lesson[] = [
{
  "id": 68,
  "title": "미분방정식 입문",
  "category": "미분방정식",
  "level": "고급",
  "question": "함수와 그 도함수가 함께 들어있는 방정식은 어떻게 풀까?",
  "concept": {
    "intro": "미분방정식은 미지함수 $y(x)$ 와 그 도함수들을 포함한 방정식입니다. 해는 함수 자체입니다.\n\n물리, 생물, 경제 등 변화를 다루는 모든 영역의 모델은 결국 미분방정식의 형태로 등장합니다.",
    "intuition": "온도가 시간이 지남에 따라 어떻게 식어가는지, 인구가 어떻게 늘어가는지, 스프링이 어떻게 진동하는지 — 모두 함수의 '변화율'에 대한 규칙으로 표현됩니다.",
    "formula": "y' = f(x, y)\\ (\\text{1계})\ny'' + py' + qy = 0\\ (\\text{2계 선형 동차})",
    "summary": "• 해는 함수\n• 계(order)는 가장 높은 도함수의 차수\n• 초기조건 없이는 일반해까지만"
  },
  "examples": [
    {
      "title": "가장 단순한 방정식",
      "problem": "$y' = 3$ 의 일반해를 구하시오.",
      "steps": [
        "양변 적분: $y = 3x + C$."
      ],
      "answer": "$y = 3x + C$",
      "lesson": "초기조건 없는 미분방정식의 일반해에는 항상 임의상수 $C$ 가 포함됩니다."
    }
  ],
  "problems": [
    {
      "id": "68-1",
      "type": "text",
      "difficulty": 1,
      "question": "$y' = 2x$ 의 일반해는? (식, +C 포함, 예: x^2+C)",
      "answer": "x^2+C",
      "hints": [
        "양변을 $x$ 로 적분하세요."
      ],
      "explanation": "$y = \\displaystyle\\int 2x\\,dx = x^2 + C$.",
      "wrongAnalysis": "$+C$ 누락은 가장 흔한 실수. 미분방정식의 일반해는 함수족입니다."
    },
    {
      "id": "68-2",
      "type": "choice",
      "difficulty": 2,
      "question": "$y' = y$ 의 일반해는?",
      "choices": [
        "$y = x + C$",
        "$y = x^2 + C$",
        "$y = C\\,e^x$",
        "$y = \\ln x + C$"
      ],
      "answer": "$y = C\\,e^x$",
      "hints": [
        "도함수가 자기 자신과 같은 함수가 무엇인가요?",
        "지수함수 $e^x$."
      ],
      "explanation": "$e^x$ 의 도함수는 $e^x$. 일반해는 $C e^x$.",
      "wrongAnalysis": "$y = e^x$ 만 답으로 적는 실수가 많습니다. 임의 상수배도 해입니다."
    },
    {
      "id": "68-3",
      "type": "choice",
      "difficulty": 3,
      "question": "$y' = y,\\ y(0) = 5$ 의 해는?",
      "choices": [
        "$5x$",
        "$5\\,e^x$",
        "$e^{5x}$",
        "$x + 5$"
      ],
      "answer": "$5\\,e^x$",
      "hints": [
        "일반해 $y = C\\,e^x$.",
        "초기조건 $y(0)=5$ 대입."
      ],
      "explanation": "$C\\,e^0 = C = 5,\\ y = 5\\,e^x$.",
      "wrongAnalysis": "$e^{5x}$ 와 $5\\,e^x$ 의 차이를 혼동하는 실수가 있습니다. 초기값은 계수 $C$ 에 들어갑니다."
    }
  ],
  "summary": {
    "keyPoints": [
      "미분방정식의 해는 함수",
      "일반해 $+$ 초기조건 $=$ 특수해",
      "계(order) 만큼 임의상수 필요"
    ],
    "formulas": [
      "y' = ky \\;\\Rightarrow\\; y = C\\,e^{kx}"
    ],
    "commonMistakes": [
      "$+C$ 누락",
      "지수 위치와 계수 혼동"
    ],
    "nextConnection": "1계 미분방정식의 대표적 해법들(분리변수, 적분인자)을 다음 단원에서 정리합니다."
  }
},
{
  "id": 69,
  "title": "1계 미분방정식",
  "category": "미분방정식",
  "level": "고급",
  "question": "$y'$ 만 등장하는 $1$계 미분방정식은 어떻게 분류하고 풀까?",
  "concept": {
    "intro": "$1$계 미분방정식은 다양한 형태가 있지만, 가장 흔히 다루는 두 가지가 '분리변수형'과 '선형 $1$계' 입니다.\n\n분리변수: $\\dfrac{dy}{dx} = g(x)\\,h(y) \\;\\Rightarrow\\; \\displaystyle\\int \\dfrac{dy}{h(y)} = \\int g(x)\\,dx$.\n\n선형 $1$계: $y' + p(x)\\,y = q(x) \\;\\Rightarrow\\;$ 적분인자 $\\mu = e^{\\int p(x)\\,dx}$.",
    "intuition": "분리변수는 '$x$ 의 짐과 $y$ 의 짐을 양쪽으로 정리하기'. 선형 $1$계는 '왼쪽을 일종의 곱의 미분 형태로 만들기' 입니다.",
    "formula": "\\text{분리:}\\ \\int \\frac{dy}{h(y)} = \\int g(x)\\,dx + C\n\\text{선형:}\\ (\\mu y)' = \\mu q,\\ \\mu = e^{\\int p\\,dx}",
    "summary": "• 분리변수: 짐 정리\n• 선형 $1$계: 적분인자\n• 초기조건으로 $C$ 결정"
  },
  "examples": [
    {
      "title": "분리변수형",
      "problem": "$\\dfrac{dy}{dx} = xy$ 를 풀어라.",
      "steps": [
        "$\\dfrac{dy}{y} = x\\,dx$.",
        "$\\displaystyle\\int \\dfrac{dy}{y} = \\int x\\,dx \\;\\Rightarrow\\; \\ln|y| = \\dfrac{x^2}{2} + C$.",
        "양변에 지수 함수: $|y| = e^{x^2/2 + C} = e^{C}\\cdot e^{x^2/2}$.",
        "$\\pm e^C$ 를 새 임의상수 $A$ 로 흡수: $y = A\\,e^{x^2/2}$ ($A \\ne 0$, 그리고 $y \\equiv 0$ 도 자명해)."
      ],
      "answer": "$y = A\\,e^{x^2/2}$",
      "lesson": "분리변수형은 $y' = g(x)\\,h(y)$ 처럼 곱으로 분리되는 경우에만 통합니다. 적분 후 절댓값과 임의상수의 부호를 한 글자로 모아 새 상수로 두는 관습이 흔합니다."
    },
    {
      "title": "선형 1계",
      "problem": "$y' + y = e^{-x}$ 를 풀어라.",
      "steps": [
        "적분인자 $\\mu = e^{\\int 1\\,dx} = e^x$.",
        "양변에 $\\mu = e^x$ 를 곱하면: $e^x y' + e^x y = 1$.",
        "단원 8 (곱의 미분)으로 좌변을 다시 보면 $\\dfrac{d}{dx}(e^x y) = e^x y' + e^x y$. 즉 좌변 전체가 $(e^x y)'$.",
        "그러므로 $(e^x y)' = 1$.",
        "양변 적분: $e^x y = x + C \\;\\Rightarrow\\; y = (x + C)\\,e^{-x}$."
      ],
      "answer": "$y = (x + C)\\,e^{-x}$",
      "lesson": "적분인자 $\\mu$ 의 정체는 '$\\mu y' + \\mu p\\,y$ 가 곱의 미분 $(\\mu y)'$ 와 같아지도록 골라낸 함수' 입니다. 그래서 $\\mu' = \\mu p \\;\\Rightarrow\\; \\mu = e^{\\int p\\,dx}$ 가 자연스럽게 나옵니다."
    }
  ],
  "problems": [
    {
      "id": "69-1",
      "type": "choice",
      "difficulty": 2,
      "question": "$y' = -2y$ 의 일반해는?",
      "choices": [
        "$y = C\\,e^{-2x}$",
        "$y = C\\,e^{2x}$",
        "$y = -2x + C$",
        "$y = x^{-2}$"
      ],
      "answer": "$y = C\\,e^{-2x}$",
      "hints": [
        "분리변수: $\\dfrac{dy}{y} = -2\\,dx$.",
        "$\\displaystyle\\int$ 양변."
      ],
      "explanation": "$\\ln|y| = -2x + C \\;\\Rightarrow\\; y = A\\,e^{-2x}$.",
      "wrongAnalysis": "지수 부호 누락은 가장 많은 실수."
    },
    {
      "id": "69-2",
      "type": "choice",
      "difficulty": 3,
      "question": "$y' + 2y = 4$ 의 일반해는?",
      "choices": [
        "$y = C\\,e^{-2x}$",
        "$y = 2 + C\\,e^{-2x}$",
        "$y = 2 + C\\,e^{2x}$",
        "$y = 4 + Cx$"
      ],
      "answer": "$y = 2 + C\\,e^{-2x}$",
      "hints": [
        "선형 $1$계, 적분인자 $e^{2x}$.",
        "$(e^{2x} y)' = 4\\,e^{2x}$."
      ],
      "explanation": "$e^{2x} y = 2\\,e^{2x} + C \\;\\Rightarrow\\; y = 2 + C\\,e^{-2x}$.",
      "wrongAnalysis": "일반해 $+$ 특수해 형태로 정리하지 못하고 적분 중에 실수하는 경우가 흔합니다."
    },
    {
      "id": "69-3",
      "type": "text",
      "difficulty": 3,
      "question": "$y(0)=1,\\ \\dfrac{dy}{dx} = y$ 의 해 $y(x)$ 는? (식, 예: e^x)",
      "answer": "e^x",
      "hints": [
        "분리변수 또는 $y' = y$.",
        "일반해 $y = C\\,e^x$.",
        "$y(0)=1$ 대입."
      ],
      "explanation": "$C = 1 \\;\\Rightarrow\\; y = e^x$.",
      "wrongAnalysis": "$C$ 를 결정하지 않고 일반해를 답하는 실수가 흔합니다. 초기조건이 있다면 특수해까지 가야 합니다."
    }
  ],
  "summary": {
    "keyPoints": [
      "분리변수: $g(x)\\,h(y)$ 형태",
      "선형 $1$계: 적분인자 $\\mu = e^{\\int p\\,dx}$",
      "초기조건으로 임의상수 결정"
    ],
    "formulas": [
      "\\text{분리:}\\ \\int \\frac{dy}{h} = \\int g\\,dx",
      "\\text{선형:}\\ (\\mu y)' = \\mu q"
    ],
    "commonMistakes": [
      "지수 부호 누락",
      "적분인자 적용 후 양변 적분 누락"
    ],
    "nextConnection": "이제 $y''$ 까지 등장하는 '$2$계 미분방정식' 으로 확장합니다. 스프링, 진자 같은 진동 문제가 등장합니다."
  }
},
{
  "id": 70,
  "title": "2계 미분방정식",
  "category": "미분방정식",
  "level": "심화",
  "question": "$y''$ 가 등장하는 $2$계 선형 미분방정식은 어떻게 풀까?",
  "concept": {
    "intro": "$2$계 선형 동차 $ay'' + by' + cy = 0$ 은 특성방정식 $ar^2 + br + c = 0$ 을 풀어 해의 형태를 결정합니다. ('특성방정식' 이라는 이름은 단원 26 의 행렬 특성방정식과 같은 발상에서 왔습니다 — 시스템 형태로 적으면 둘이 정확히 일치합니다.)\n\n실수 두 해 $r_1,\\ r_2$: $y = C_1 e^{r_1 x} + C_2 e^{r_2 x}$.\n중근 $r$: $y = (C_1 + C_2 x)\\,e^{rx}$.\n복소 $\\alpha \\pm \\beta i$: $y = e^{\\alpha x}(C_1 \\cos \\beta x + C_2 \\sin \\beta x)$.\n\n복소근의 $\\cos,\\sin$ 형태는 갑자기 나온 것이 아니라 오일러 공식 $e^{i\\theta} = \\cos\\theta + i\\sin\\theta$ 에서 옵니다. 만약 $r = \\alpha + \\beta i$ 라면 $e^{rx} = e^{\\alpha x}e^{i\\beta x} = e^{\\alpha x}(\\cos\\beta x + i\\sin\\beta x)$ 가 되고, $\\bar r = \\alpha - \\beta i$ 짝까지 합쳐 실수부와 허수부를 각각 독립적인 실수해로 골라낸 결과가 위 형태입니다. 오일러 공식 자체는 단원 21 테일러 급수에서 $e^x,\\ \\cos x,\\ \\sin x$ 의 매클로린 전개를 비교하면 곧장 나옵니다.",
    "intuition": "스프링·진자·전기회로의 진동은 모두 $2$계 선형 ODE로 모델링됩니다. 마찰이 없으면 영원히 진동, 마찰이 강하면 빨리 잦아드는 식입니다.",
    "formula": "\\text{특성방정식:}\\ ar^2 + br + c = 0\n\\text{실근/중근/허근으로 해의 형태가 분기}",
    "summary": "• 특성방정식이 핵심\n• 판별식 부호로 해의 형태 결정\n• 진동·감쇠·과감쇠"
  },
  "examples": [
    {
      "title": "단순 조화 진동",
      "problem": "$y'' + y = 0$ 의 일반해를 구하시오.",
      "steps": [
        "특성방정식: $r^2 + 1 = 0 \\;\\Rightarrow\\; r = \\pm i$.",
        "$\\alpha=0,\\ \\beta=1$.",
        "$y = C_1 \\cos x + C_2 \\sin x$."
      ],
      "answer": "$y = C_1 \\cos x + C_2 \\sin x$",
      "lesson": "허근일 때는 $\\cos\\cdot\\sin$ 의 결합으로 진동이 나타납니다."
    }
  ],
  "problems": [
    {
      "id": "70-1",
      "type": "choice",
      "difficulty": 2,
      "question": "$y'' - 3y' + 2y = 0$ 의 특성방정식의 해는?",
      "choices": [
        "$1,\\ 2$",
        "$-1,\\ -2$",
        "$1,\\ -2$",
        "$0,\\ 3$"
      ],
      "answer": "$1,\\ 2$",
      "hints": [
        "$r^2 - 3r + 2 = 0$.",
        "인수분해."
      ],
      "explanation": "$(r-1)(r-2)=0 \\;\\Rightarrow\\; r = 1,\\ 2$.",
      "wrongAnalysis": "특성방정식의 부호를 거꾸로 적는 실수가 흔합니다."
    },
    {
      "id": "70-2",
      "type": "choice",
      "difficulty": 3,
      "question": "$y'' + 4y = 0$ 의 일반해는?",
      "choices": [
        "$y = C_1 e^{2x} + C_2 e^{-2x}$",
        "$y = C_1 \\cos 2x + C_2 \\sin 2x$",
        "$y = (C_1 + C_2 x)\\,e^{2x}$",
        "$y = C_1 x + C_2$"
      ],
      "answer": "$y = C_1 \\cos 2x + C_2 \\sin 2x$",
      "hints": [
        "$r^2 + 4 = 0 \\;\\Rightarrow\\; r = \\pm 2i$.",
        "허근 $\\Rightarrow \\cos\\cdot\\sin$."
      ],
      "explanation": "$\\alpha=0,\\ \\beta=2 \\;\\Rightarrow\\; y = C_1 \\cos 2x + C_2 \\sin 2x$.",
      "wrongAnalysis": "허근일 때 $e^{2x}$ 가 나오는 실수가 흔합니다. $e^{\\alpha x}$ 가 곱해지며 $\\alpha=0$ 이면 $1$."
    },
    {
      "id": "70-3",
      "type": "choice",
      "difficulty": 3,
      "question": "$y'' - 2y' + y = 0$ 의 일반해는?",
      "choices": [
        "$y = (C_1 + C_2 x)\\,e^x$",
        "$y = C_1 e^x + C_2 e^{-x}$",
        "$y = C_1 \\cos x + C_2 \\sin x$",
        "$y = C_1 e^x + C_2 e^x$"
      ],
      "answer": "$y = (C_1 + C_2 x)\\,e^x$",
      "hints": [
        "$r^2 - 2r + 1 = 0 \\;\\Rightarrow\\; (r-1)^2 = 0$.",
        "중근."
      ],
      "explanation": "중근 $r=1 \\;\\Rightarrow\\; y = (C_1 + C_2 x)\\,e^x$.",
      "wrongAnalysis": "중근일 때 두 번째 해에 $x$ 를 곱하는 것을 잊어 두 해가 일차 종속이 되는 실수가 있습니다."
    }
  ],
  "summary": {
    "keyPoints": [
      "특성방정식이 핵심",
      "실/중/허근 따라 해의 형태 분기",
      "초기조건 $2$개 필요 ($2$계)"
    ],
    "formulas": [
      "ar^2 + br + c = 0",
      "\\text{실근:}\\ e^{r_1 x},\\ e^{r_2 x}",
      "\\text{중근:}\\ e^{rx},\\ x\\,e^{rx}",
      "\\text{허근:}\\ e^{\\alpha x}\\cos \\beta x,\\ e^{\\alpha x}\\sin \\beta x"
    ],
    "commonMistakes": [
      "허근에서 $e^{\\alpha x}$ 누락",
      "중근에서 $x$ 누락"
    ],
    "nextConnection": "여러 변수의 미분방정식이 묶여 있을 수도 있습니다. 다음 단원의 미분방정식 시스템입니다."
  }
},
{
  "id": 71,
  "title": "미분방정식 시스템",
  "category": "미분방정식",
  "level": "심화",
  "question": "두 함수의 도함수가 서로 얽혀 있을 때 어떻게 분석할까?",
  "concept": {
    "intro": "여러 함수의 도함수가 서로 얽힌 방정식의 묶음이 시스템입니다. $x'(t),\\ y'(t)$ 가 서로의 식에 등장합니다.\n\n선형 시스템은 행렬 형태 $\\mathbf{X}' = A\\mathbf{X}$ 로 적을 수 있고, 행렬 $A$ 의 고윳값·고유벡터로 해의 형태를 결정합니다.",
    "intuition": "포식자-피식자 모델, 두 종의 경쟁, 두 도시 사이의 인구 이동 등 — 한 양의 변화율이 다른 양에 영향을 줄 때 시스템이 등장합니다.",
    "formula": "\\mathbf{X}' = A\\mathbf{X},\\ \\mathbf{X} = \\begin{pmatrix} x \\ y \\end{pmatrix}\n\\text{고윳값 }\\lambda \\;\\Rightarrow\\; \\mathbf{X} = c\\,\\mathbf{v}\\,e^{\\lambda t}",
    "summary": "• 여러 미지함수의 묶음\n• 선형 시스템은 행렬 형태\n• 고윳값·고유벡터로 해석"
  },
  "examples": [
    {
      "title": "단순 시스템",
      "problem": "$x' = y,\\ y' = -x$ 의 해의 형태는?",
      "steps": [
        "행렬 $A = \\begin{pmatrix}0 & 1 \\ -1 & 0\\end{pmatrix}$.",
        "특성다항식 $\\lambda^2 + 1 = 0 \\;\\Rightarrow\\; \\lambda = \\pm i$.",
        "해: $\\cos t,\\ \\sin t$ 의 결합."
      ],
      "answer": "$x(t) = C_1 \\cos t + C_2 \\sin t,\\ y(t) = -C_1 \\sin t + C_2 \\cos t$",
      "lesson": "이 시스템은 단위 원 위의 회전을 모델링합니다. 진동 시스템과 본질적으로 같습니다."
    }
  ],
  "problems": [
    {
      "id": "71-1",
      "type": "choice",
      "difficulty": 2,
      "question": "$x' = 2x,\\ y' = 3y$ 의 일반해는?",
      "choices": [
        "$x = C_1 e^{2t},\\ y = C_2 e^{3t}$",
        "$x = C_1 e^{3t},\\ y = C_2 e^{2t}$",
        "$x = C_1 + C_2 t,\\ y = C_1 + 3 C_2 t$",
        "$x = C \\cos 2t,\\ y = C \\sin 3t$"
      ],
      "answer": "$x = C_1 e^{2t},\\ y = C_2 e^{3t}$",
      "hints": [
        "두 식이 서로 분리되어 있으므로 각자 풀면 됩니다."
      ],
      "explanation": "각 식은 독립이며 $y' = ky$ 형태.",
      "wrongAnalysis": "두 식이 분리될 때조차 시스템 풀이로 복잡하게 처리하려는 실수가 흔합니다."
    },
    {
      "id": "71-2",
      "type": "choice",
      "difficulty": 3,
      "question": "$\\mathbf{X}' = A\\mathbf{X},\\ A = \\begin{pmatrix}0 & 1 \\ -1 & 0\\end{pmatrix}$ 인 시스템에서 궤적의 모양은?",
      "choices": [
        "원",
        "쌍곡선",
        "직선",
        "포물선"
      ],
      "answer": "원",
      "hints": [
        "고윳값이 $\\pm i$.",
        "회전 행렬의 형태."
      ],
      "explanation": "이 시스템의 해는 사인·코사인 회전으로 $(x,y)$ 가 원을 그립니다.",
      "wrongAnalysis": "쌍곡선과 헷갈리지 마세요. 쌍곡선은 안정/불안정 안장점에서."
    },
    {
      "id": "71-3",
      "type": "choice",
      "difficulty": 3,
      "question": "$A = \\begin{pmatrix}1 & 0 \\ 0 & -1\\end{pmatrix}$ 인 시스템의 $(0,0)$ 의 평형점 분류는?",
      "choices": [
        "안정 노드",
        "불안정 노드",
        "안장점",
        "중심"
      ],
      "answer": "안장점",
      "hints": [
        "고윳값 $1,\\ -1$.",
        "양과 음이 섞임."
      ],
      "explanation": "고윳값의 부호가 다르면 안장점. 한 방향으로는 빠져들고, 다른 방향으로는 멀어집니다.",
      "wrongAnalysis": "고윳값의 부호만 보고 노드/안장을 정확히 분류하지 못하는 실수가 흔합니다."
    }
  ],
  "summary": {
    "keyPoints": [
      "시스템 $=$ 여러 미지함수",
      "선형: 행렬 $+$ 고윳값",
      "평형점 분류: 노드·안장·중심·나선"
    ],
    "formulas": [
      "\\mathbf{X}' = A\\mathbf{X}",
      "\\mathbf{X} = \\sum c_i\\,\\mathbf{v}_i\\,e^{\\lambda_i t}"
    ],
    "commonMistakes": [
      "분리 가능한 시스템을 복잡하게 푸는 실수",
      "고윳값의 부호와 평형점 분류 혼동"
    ],
    "nextConnection": "한 변수의 도함수만 다뤘다면, 이제 편미분이 포함된 방정식 — 편미분방정식(PDE)으로 들어갑니다."
  }
},
{
  "id": 72,
  "title": "편미분방정식 입문",
  "category": "편미분방정식",
  "level": "심화",
  "question": "여러 변수의 편미분이 등장하는 방정식은 무엇이 다를까?",
  "concept": {
    "intro": "편미분방정식(PDE)은 미지함수의 편미분들이 등장하는 방정식입니다. 시간과 공간이 모두 등장하는 모델에서 자연스럽게 나타납니다.\n\n대표 PDE 세 가지: 열방정식(확산), 파동방정식(진동), 라플라스 방정식(정상상태).",
    "intuition": "온도가 시간과 위치에 따라 어떻게 퍼지는가? 줄이 어떻게 진동하는가? 정상상태에서의 전위 분포는 어떻게 생겼는가? — 모두 PDE.",
    "formula": "\\text{열:}\\ u_t = \\alpha\\,u_{xx}\n\\text{파동:}\\ u_{tt} = c^2\\,u_{xx}\n\\text{라플라스:}\\ u_{xx} + u_{yy} = 0",
    "summary": "• 여러 변수의 편미분 포함\n• 시공간 동시 모델링\n• 경계·초기조건이 중요"
  },
  "examples": [
    {
      "title": "변수분리법 맛보기",
      "problem": "$u_t = u_{xx}$ 의 해를 $u(x,t) = X(x)T(t)$ 형태로 찾으시오.",
      "steps": [
        "$X T' = X'' T$.",
        "$\\dfrac{T'}{T} = \\dfrac{X''}{X} = -\\lambda$ (상수, 변수가 양쪽으로 분리됨).",
        "$T(t) = e^{-\\lambda t},\\ X(x) = A \\cos(\\sqrt{\\lambda}\\,x) + B \\sin(\\sqrt{\\lambda}\\,x)$."
      ],
      "answer": "$u(x,t) = (A \\cos \\sqrt{\\lambda}\\,x + B \\sin \\sqrt{\\lambda}\\,x)\\,e^{-\\lambda t}$",
      "lesson": "변수분리법은 PDE 를 ODE 의 묶음으로 환원시키는 강력한 기법입니다."
    }
  ],
  "problems": [
    {
      "id": "72-1",
      "type": "choice",
      "difficulty": 1,
      "question": "다음 중 편미분방정식은?",
      "choices": [
        "$\\dfrac{dy}{dx} = y$",
        "$y'' + y = 0$",
        "$u_t = u_{xx}$",
        "$x^2 + y^2 = 1$"
      ],
      "answer": "$u_t = u_{xx}$",
      "hints": [
        "편미분 $\\partial$ 가 등장해야 PDE."
      ],
      "explanation": "$u_t,\\ u_{xx}$ 는 모두 편미분. 따라서 $u_t = u_{xx}$ 가 PDE.",
      "wrongAnalysis": "ODE 와 PDE 의 차이: 변수의 수가 핵심."
    },
    {
      "id": "72-2",
      "type": "choice",
      "difficulty": 2,
      "question": "다음 중 라플라스 방정식인 것은?",
      "choices": [
        "$u_t = u_{xx}$",
        "$u_{xx} + u_{yy} = 0$",
        "$u_{tt} = u_{xx}$",
        "$u_t + u_x = 0$"
      ],
      "answer": "$u_{xx} + u_{yy} = 0$",
      "hints": [
        "라플라스: 시간 변수 없음, 공간 $2$차 도함수 합 $= 0$."
      ],
      "explanation": "$u_{xx} + u_{yy} = 0$ 은 라플라스 방정식. 정상상태의 전위·온도 등을 기술.",
      "wrongAnalysis": "$u_t$ 가 있으면 열방정식, $u_{tt}$ 가 있으면 파동방정식."
    },
    {
      "id": "72-3",
      "type": "choice",
      "difficulty": 3,
      "question": "PDE 의 해를 결정하기 위해 일반적으로 필요한 것은?",
      "choices": [
        "한 점의 함숫값",
        "초기조건과 경계조건",
        "도함수의 부호",
        "함수의 최댓값"
      ],
      "answer": "초기조건과 경계조건",
      "hints": [
        "PDE 는 ODE 보다 더 풍부한 정보가 필요."
      ],
      "explanation": "PDE 는 일반적으로 시간 방향의 초기조건과 공간 경계에서의 조건이 함께 필요합니다.",
      "wrongAnalysis": "한 점의 값만으로 PDE 의 해는 결정되지 않습니다."
    }
  ],
  "summary": {
    "keyPoints": [
      "PDE $=$ 여러 변수의 편미분",
      "변수분리법이 강력",
      "초기·경계 조건 필수"
    ],
    "formulas": [
      "u_t = \\alpha\\,u_{xx}\\ (\\text{열})",
      "u_{tt} = c^2\\,u_{xx}\\ (\\text{파동})",
      "\\Delta u = 0\\ (\\text{라플라스})"
    ],
    "commonMistakes": [
      "ODE 와 PDE 혼동",
      "경계조건 누락"
    ],
    "nextConnection": "마지막 단원에서 가장 중요한 세 가지 PDE 의 의미와 해석을 좀 더 자세히 들여다봅니다."
  }
},
{
  "id": 73,
  "title": "열방정식·파동방정식·라플라스 방정식",
  "category": "편미분방정식",
  "level": "심화",
  "question": "확산·진동·정상상태를 기술하는 세 PDE 는 각각 어떤 모습으로 세상을 그릴까?",
  "concept": {
    "intro": "열방정식 $u_t = \\alpha\\,u_{xx}$ 는 열이나 농도가 시간이 지남에 따라 어떻게 퍼지는지(확산)를 묘사합니다.\n\n파동방정식 $u_{tt} = c^2\\,u_{xx}$ 는 줄·소리·전자기파의 진동/전파를 묘사합니다.\n\n라플라스 방정식 $\\Delta u = 0$ 은 정상상태에서의 분포(시간이 더 이상 변하지 않는 상태)를 묘사합니다.\n\n이 세 식은 응용수학과 물리·공학에서 가장 자주 등장하는 '세 형제'입니다.",
    "intuition": "한 줄의 끓는 물에 차가운 막대를 담그면 열이 퍼져 균일해지는 과정 $=$ 열방정식. 기타 줄을 튕기면 파동이 좌우로 달려가는 모습 $=$ 파동방정식. 시간이 지나 더 이상 변하지 않게 된 정전기 분포 $=$ 라플라스.",
    "formula": "u_t = \\alpha\\,u_{xx}\\ (\\text{확산})\nu_{tt} = c^2\\,u_{xx}\\ (\\text{진동})\nu_{xx} + u_{yy} = 0\\ (\\text{정상상태})",
    "summary": "• 세 PDE는 각각 확산/진동/정상상태\n• 푸리에 급수가 핵심 해법\n• 경계조건이 해의 모양 결정"
  },
  "examples": [
    {
      "title": "1차원 열방정식의 해 한 조각",
      "problem": "$u_t = u_{xx},\\ 0<x<\\pi,$ 양 끝 $u=0,\\ u(x,0) = \\sin x$ 의 해를 구하시오.",
      "steps": [
        "변수분리 $u(x,t) = X(x)T(t)$.",
        "고유함수 $\\sin(nx)$, 고윳값 $-n^2$.",
        "초기조건 $\\sin x \\;\\Rightarrow\\; n=1$ 만 살아남음.",
        "$u(x,t) = \\sin(x)\\,e^{-t}$."
      ],
      "answer": "$u(x,t) = \\sin(x)\\,e^{-t}$",
      "lesson": "푸리에 급수와 변수분리는 PDE 의 표준 풀이 도구. 경계조건이 가능한 고윳값을 결정합니다."
    }
  ],
  "problems": [
    {
      "id": "73-1",
      "type": "choice",
      "difficulty": 2,
      "question": "$u_t = u_{xx}$ 에서 시간이 지남에 따라 일반적으로 함수의 모양은?",
      "choices": [
        "더 뾰족해진다",
        "점점 평탄해진다",
        "변하지 않는다",
        "주기적으로 진동한다"
      ],
      "answer": "점점 평탄해진다",
      "hints": [
        "확산 방정식의 본질적 성질.",
        "에너지가 균일해지는 방향."
      ],
      "explanation": "열방정식은 큰 곡률을 부드럽게 만드는 방향으로 작용. 시간이 지나면 함수가 점점 평탄해집니다.",
      "wrongAnalysis": "파동방정식과 혼동해 진동한다고 답하는 실수가 흔합니다."
    },
    {
      "id": "73-2",
      "type": "choice",
      "difficulty": 3,
      "question": "$u_{tt} = c^2\\,u_{xx}$ 의 다랑베르 해 형태는?",
      "choices": [
        "$u = f(x + ct) + g(x - ct)$",
        "$u = e^{-t}\\sin x$",
        "$u = f(x) + g(t)$",
        "$u = \\sin(xt)$"
      ],
      "answer": "$u = f(x + ct) + g(x - ct)$",
      "hints": [
        "파동방정식의 일반해는 두 방향으로 진행하는 파.",
        "$(x \\pm ct)$ 형태가 등장."
      ],
      "explanation": "다랑베르 공식: 임의의 두 함수 $f, g$ 에 대해 $u(x,t) = f(x+ct) + g(x-ct)$ 가 파동방정식의 해.",
      "wrongAnalysis": "변수분리 해 형태와 혼동하는 실수가 있습니다. 두 방식은 서로 다르게 일반해를 나타냅니다."
    },
    {
      "id": "73-3",
      "type": "choice",
      "difficulty": 3,
      "question": "라플라스 방정식의 해(조화함수)의 '평균값 성질'은?",
      "choices": [
        "원의 중심값은 그 원 위의 함숫값의 평균과 같다.",
        "원의 중심값은 원 위의 최댓값과 같다.",
        "원의 중심값은 원 위의 최솟값과 같다.",
        "원 위의 함숫값은 항상 $0$ 이다."
      ],
      "answer": "원의 중심값은 그 원 위의 함숫값의 평균과 같다.",
      "hints": [
        "조화함수의 가장 유명한 성질.",
        "평균값 정리."
      ],
      "explanation": "라플라스 방정식의 해(조화함수)는 임의의 원에 대해 중심값이 그 원 위 함숫값의 평균과 같다는 평균값 성질을 갖습니다. 이는 최댓값 원리 등 다른 성질의 출발점.",
      "wrongAnalysis": "최댓값/최솟값 원리(끝에서만 발생)와 평균값 성질을 혼동하는 실수가 있습니다."
    }
  ],
  "summary": {
    "keyPoints": [
      "세 PDE: 열·파동·라플라스",
      "각각 확산·진동·정상상태",
      "푸리에 급수가 표준 해법"
    ],
    "formulas": [
      "u_t = \\alpha\\,u_{xx}",
      "u_{tt} = c^2\\,u_{xx}",
      "\\Delta u = 0"
    ],
    "commonMistakes": [
      "세 방정식의 의미 혼동",
      "경계조건이 해의 모양을 정한다는 사실 망각"
    ],
    "nextConnection": "축하합니다 🎉. 변화율 $\\to$ 미분 $\\to$ 적분 $\\to$ 급수 $\\to$ 다변수 $\\to$ 편미분 $\\to$ 미분방정식 $\\to$ 편미분방정식까지의 전체 흐름을 완주했습니다.\n\n다음 단계로는 (1) 더 깊은 해석학(엄밀한 $\\varepsilon$-$\\delta$ 증명), (2) 실해석/측도론, (3) 수치해석(컴퓨터 시뮬레이션), (4) 응용 PDE(유체역학·양자역학)가 기다리고 있습니다. 직관과 공식, 두 다리를 모두 익혔으니 어느 길로 가도 좋습니다."
  }
}
];
