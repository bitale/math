import { Lesson } from "../../types";

export const arcLengthLessons: Lesson[] = [
{
  "id": 10,
  "title": "호의 길이와 회전체의 넓이",
  "category": "적분",
  "level": "중급",
  "question": "곡선의 길이와 회전체의 겉넓이를 적분으로 어떻게 구할까?",
  "concept": {
    "intro": "곡선의 길이를 구하려면 곡선을 아주 짧은 조각으로 나눈 뒤, 각 조각의 길이를 모두 더합니다.\n\n:::theorem[호의 길이 공식]\n미소 구간에서 $ds = \\sqrt{(dx)^2 + (dy)^2}$ 이므로, $y = f(x)$ 일 때 호의 길이는\n$$L = \\int_a^b \\sqrt{1 + [f'(x)]^2}\\,dx$$\n:::\n\n:::theorem[매개변수 곡선의 호의 길이]\n매개변수 $x = x(t),\\ y = y(t)$ 로 표현된 곡선은\n$$L = \\int_\\alpha^\\beta \\sqrt{\\left(\\frac{dx}{dt}\\right)^2 + \\left(\\frac{dy}{dt}\\right)^2}\\,dt$$\n로 계산합니다.\n:::\n\n:::theorem[회전체의 겉넓이]\n곡선을 $x$축 둘레로 회전시킨 회전체의 겉넓이는\n$$S = 2\\pi \\int_a^b f(x)\\sqrt{1 + [f'(x)]^2}\\,dx$$\n입니다. 원둘레 $2\\pi f(x)$ 에 미소 호의 길이 $ds$ 를 곱해 적분하는 것입니다.\n:::",
    "intuition": "곡선을 아주 짧은 직선 조각으로 쪼개면, 각 조각의 길이는 피타고라스 정리로 구할 수 있습니다. 이를 모두 더한 것이 호의 길이 적분입니다. 회전체의 겉넓이는 각 조각이 회전하면서 만드는 '띠'의 넓이를 합산한 것입니다.",
    "formula": "L = \\int_a^b \\sqrt{1 + [f'(x)]^2}\\,dx\nds = \\sqrt{(dx)^2 + (dy)^2}\nL = \\int_\\alpha^\\beta \\sqrt{\\left(\\frac{dx}{dt}\\right)^2 + \\left(\\frac{dy}{dt}\\right)^2}\\,dt\nS = 2\\pi \\int_a^b f(x)\\sqrt{1 + [f'(x)]^2}\\,dx\\ (x\\text{축 회전})",
    "summary": "• $ds = \\sqrt{1 + (f')^2}\\,dx$ — 미소 호의 길이\n• 호의 길이 $=$ $ds$ 를 적분\n• 회전체 겉넓이 $= 2\\pi \\times$ (회전 반지름) $\\times ds$ 적분\n• 매개변수 형태도 같은 원리",
    "visuals": [
      {
        "type": "function",
        "title": "곡선의 호의 길이 — 미소 구간 ds",
        "xRange": [-0.5, 4.5],
        "yRange": [-1, 9],
        "functions": [
          { "expr": "x^(3/2)", "color": "#6366f1", "label": "y = x^(3/2)" }
        ],
        "lines": [
          { "from": [2, 2.83], "to": [3, 2.83], "color": "#f59e0b", "label": "dx" },
          { "from": [3, 2.83], "to": [3, 5.2], "color": "#ef4444", "label": "dy" },
          { "from": [2, 2.83], "to": [3, 5.2], "color": "#10b981", "label": "ds" }
        ],
        "points": [
          { "x": 0, "y": 0, "label": "시작", "color": "#10b981" },
          { "x": 4, "y": 8, "label": "끝", "color": "#ef4444" }
        ],
        "annotations": [
          { "x": 3.5, "y": 4.5, "text": "ds² = dx² + dy²", "color": "#334155" }
        ]
      }
    ]
  },
  "examples": [
    {
      "title": "[기본] $y = x^{3/2}$ 의 호의 길이",
      "problem": "$y = x^{3/2}$ 의 $x = 0$ 에서 $x = 4$ 까지의 호의 길이를 구하시오.",
      "steps": [
        "$f(x) = x^{3/2}$ 이므로 $f'(x) = \\dfrac{3}{2}x^{1/2}$.",
        "$[f'(x)]^2 = \\dfrac{9}{4}x$.",
        "$L = \\displaystyle\\int_0^4 \\sqrt{1 + \\frac{9}{4}x}\\,dx$.",
        "$u = 1 + \\dfrac{9}{4}x$ 로 치환하면 $du = \\dfrac{9}{4}dx$, $dx = \\dfrac{4}{9}du$.",
        "$x=0 \\to u=1$, $x=4 \\to u=10$.",
        "$L = \\dfrac{4}{9}\\displaystyle\\int_1^{10} u^{1/2}\\,du = \\dfrac{4}{9} \\cdot \\dfrac{2}{3}\\left[u^{3/2}\\right]_1^{10}$.",
        "$= \\dfrac{8}{27}\\left(10\\sqrt{10} - 1\\right)$."
      ],
      "answer": "$\\dfrac{8}{27}(10\\sqrt{10} - 1)$",
      "lesson": "호의 길이 문제는 $1 + [f'(x)]^2$ 을 먼저 정리한 뒤, 근호 안이 깔끔한 형태가 되는지 확인하세요. 치환적분이 자주 등장합니다."
    },
    {
      "title": "[기본] 직선의 호의 길이",
      "problem": "$y = 2x + 1$ 의 $x = 0$ 에서 $x = 3$ 까지의 호의 길이를 구하시오.",
      "steps": [
        "$f'(x) = 2$. $[f'(x)]^2 = 4$.",
        "$L = \\displaystyle\\int_0^3 \\sqrt{1 + 4}\\,dx = \\int_0^3 \\sqrt{5}\\,dx = 3\\sqrt{5}$.",
        "검산: 피타고라스 정리로 $\\sqrt{3^2 + 6^2} = \\sqrt{45} = 3\\sqrt{5}$. 일치한다."
      ],
      "answer": "$3\\sqrt{5}$",
      "lesson": "직선의 호의 길이는 피타고라스 정리의 결과와 반드시 일치합니다. 이를 통해 호의 길이 공식이 올바름을 확인할 수 있습니다."
    },
    {
      "title": "[응용] 매개변수 곡선의 호의 길이",
      "problem": "$x = \\cos t$, $y = \\sin t$ ($0 \\leq t \\leq \\pi$) 의 호의 길이를 구하시오.",
      "steps": [
        "매개변수 호의 길이 공식: $L = \\displaystyle\\int_0^{\\pi} \\sqrt{\\left(\\dfrac{dx}{dt}\\right)^2 + \\left(\\dfrac{dy}{dt}\\right)^2}\\,dt$.",
        "$\\dfrac{dx}{dt} = -\\sin t$, $\\dfrac{dy}{dt} = \\cos t$.",
        "$\\sqrt{(-\\sin t)^2 + (\\cos t)^2} = \\sqrt{\\sin^2 t + \\cos^2 t} = 1$.",
        "$L = \\displaystyle\\int_0^{\\pi} 1\\,dt = \\pi$."
      ],
      "answer": "$\\pi$",
      "lesson": "단위원의 반원($0 \\leq t \\leq \\pi$)의 호의 길이가 $\\pi$ 인 것은 원의 둘레 $2\\pi$ 의 절반과 일치합니다. 매개변수 호의 길이 공식도 같은 피타고라스 원리에 기반합니다."
    },
    {
      "title": "[응용] 회전체의 겉넓이",
      "problem": "$y = x^2$ ($0 \\leq x \\leq 1$) 를 $x$축 둘레로 회전시킨 회전체의 겉넓이를 구하시오.",
      "steps": [
        "$f(x) = x^2$, $f'(x) = 2x$. $1 + [f'(x)]^2 = 1 + 4x^2$.",
        "$S = 2\\pi \\displaystyle\\int_0^1 x^2 \\sqrt{1 + 4x^2}\\,dx$.",
        "$u = 1 + 4x^2$, $du = 8x\\,dx$ 로는 직접 처리가 어렵다. $x = \\dfrac{1}{2}\\tan\\theta$ 삼각치환 적용.",
        "$\\sqrt{1+4x^2} = \\sec\\theta$, $dx = \\dfrac{1}{2}\\sec^2\\theta\\,d\\theta$, $x^2 = \\dfrac{\\tan^2\\theta}{4}$.",
        "적분 후 정리하면 $S = \\dfrac{\\pi}{4}\\left[\\dfrac{\\sqrt{5}(2\\cdot 5+1)}{4} - \\dfrac{\\ln(\\sqrt{5}+2)}{8}\\right]$ 형태로 복잡한 식이 나온다.",
        "$S = \\dfrac{\\pi}{6}(5\\sqrt{5} - 1) \\approx 3.8097$ 은 아닌 것에 주의. 정확한 계산이 중요하다."
      ],
      "answer": "$\\dfrac{\\pi(2\\sqrt{5}+\\sinh^{-1}2)}{4} \\approx 3.8097$ (수치 계산 허용)",
      "lesson": "회전체의 겉넓이 적분은 호의 길이보다 한 단계 더 복잡합니다. 근호 안에 $x^2$ 이 포함되므로 삼각치환이 자주 필요합니다."
    },
    {
      "title": "[심화] $y = \\ln(\\cos x)$ 의 호의 길이",
      "problem": "$y = \\ln(\\cos x)$ ($0 \\leq x \\leq \\pi/4$) 의 호의 길이를 구하시오.",
      "steps": [
        "$f'(x) = \\dfrac{-\\sin x}{\\cos x} = -\\tan x$.",
        "$1 + [f'(x)]^2 = 1 + \\tan^2 x = \\sec^2 x$.",
        "$\\sqrt{\\sec^2 x} = \\sec x$ ($0 \\leq x \\leq \\pi/4$ 에서 $\\sec x > 0$).",
        "$L = \\displaystyle\\int_0^{\\pi/4} \\sec x\\,dx = [\\ln|\\sec x + \\tan x|]_0^{\\pi/4}$.",
        "$= \\ln(\\sqrt{2} + 1) - \\ln(1 + 0) = \\ln(1 + \\sqrt{2})$."
      ],
      "answer": "$\\ln(1 + \\sqrt{2})$",
      "lesson": "$1 + [f'(x)]^2$ 이 완전제곱식이 되면 근호가 깔끔하게 사라집니다. $1 + \\tan^2 x = \\sec^2 x$ 항등식이 이 경우의 핵심입니다."
    }
  ],
  "problems": [
    {
      "id": "10-1",
      "type": "choice",
      "difficulty": 1,
      "question": "$y = f(x)$ 의 $a \\le x \\le b$ 구간에서 호의 길이를 나타내는 적분은?",
      "choices": [
        "$\\displaystyle\\int_a^b \\sqrt{1 + [f'(x)]^2}\\,dx$",
        "$\\displaystyle\\int_a^b |f(x)|\\,dx$",
        "$\\displaystyle\\int_a^b [f(x)]^2\\,dx$",
        "$\\displaystyle\\int_a^b f'(x)\\,dx$"
      ],
      "answer": "$\\displaystyle\\int_a^b \\sqrt{1 + [f'(x)]^2}\\,dx$",
      "hints": [
        "미소 호의 길이 $ds$ 를 떠올리세요.",
        "$ds = \\sqrt{(dx)^2 + (dy)^2}$ 에서 $dy = f'(x)\\,dx$ 를 대입하면?"
      ],
      "explanation": "$ds = \\sqrt{1 + [f'(x)]^2}\\,dx$ 이므로 $L = \\displaystyle\\int_a^b \\sqrt{1 + [f'(x)]^2}\\,dx$ 입니다.",
      "wrongAnalysis": "$\\displaystyle\\int_a^b |f(x)|\\,dx$ 는 곡선 아래 넓이이지, 곡선의 길이가 아닙니다. 호의 길이에는 반드시 $f'(x)$ 가 들어갑니다."
    },
    {
      "id": "10-2",
      "type": "number",
      "difficulty": 2,
      "question": "$y = \\dfrac{x^2}{2}$ 의 $x = 0$ 에서 $x = 1$ 까지의 호의 길이는 $\\dfrac{\\sqrt{2}}{2} + \\dfrac{\\ln(1+\\sqrt{2})}{2}$ 입니다. 이 값을 소수 셋째 자리에서 반올림하면? (소수 둘째 자리까지 답하시오)",
      "answer": "1.15",
      "hints": [
        "$f'(x) = x$ 이므로 $1 + [f'(x)]^2 = 1 + x^2$.",
        "$\\displaystyle\\int_0^1 \\sqrt{1+x^2}\\,dx$ 는 $x = \\tan\\theta$ 치환 또는 공식을 이용합니다.",
        "$\\dfrac{\\sqrt{2}}{2} + \\dfrac{\\ln(1+\\sqrt{2})}{2} \\approx 0.7071 + 0.4407 \\approx ?$"
      ],
      "explanation": "$f'(x) = x$, $L = \\displaystyle\\int_0^1 \\sqrt{1+x^2}\\,dx$. 삼각치환 $x = \\tan\\theta$ 를 적용하면 $L = \\dfrac{\\sqrt{2}}{2} + \\dfrac{\\ln(1+\\sqrt{2})}{2} \\approx 0.7071 + 0.4407 = 1.1478 \\approx 1.15$.",
      "wrongAnalysis": "직선 거리 $\\sqrt{1^2 + 0.5^2} \\approx 1.12$ 로 대체하는 실수가 있습니다. 곡선의 길이는 직선 거리보다 항상 깁니다."
    },
    {
      "id": "10-3",
      "type": "text",
      "difficulty": 3,
      "question": "$y = \\sqrt{x}$ ($0 \\le x \\le 1$)를 $x$축 둘레로 회전시킨 회전체의 겉넓이를 구하시오. (적분 결과를 $\\pi$ 를 포함한 식으로 답하시오, 예: 5pi/3)",
      "answer": "pi(5sqrt(5)-1)/6",
      "hints": [
        "$f(x) = \\sqrt{x}$, $f'(x) = \\dfrac{1}{2\\sqrt{x}}$.",
        "$S = 2\\pi \\displaystyle\\int_0^1 \\sqrt{x}\\,\\sqrt{1 + \\dfrac{1}{4x}}\\,dx$.",
        "근호 안을 정리하면 $\\sqrt{x + \\dfrac{1}{4}} = \\sqrt{\\dfrac{4x+1}{4}}$.",
        "$u = 4x + 1$ 로 치환하세요."
      ],
      "explanation": "$f'(x) = \\dfrac{1}{2\\sqrt{x}}$, $1 + [f'(x)]^2 = 1 + \\dfrac{1}{4x} = \\dfrac{4x+1}{4x}$.\n$S = 2\\pi \\displaystyle\\int_0^1 \\sqrt{x} \\cdot \\dfrac{\\sqrt{4x+1}}{2\\sqrt{x}}\\,dx = \\pi \\int_0^1 \\sqrt{4x+1}\\,dx$.\n$u = 4x+1$, $du = 4\\,dx$ 로 치환하면\n$S = \\dfrac{\\pi}{4} \\cdot \\dfrac{2}{3}[u^{3/2}]_1^5 = \\dfrac{\\pi}{6}(5\\sqrt{5} - 1)$.",
      "wrongAnalysis": "$f(x)$ 와 $\\sqrt{1+[f'(x)]^2}$ 를 곱할 때 $\\sqrt{x}$ 와 $\\dfrac{1}{2\\sqrt{x}}$ 의 약분을 놓쳐 적분이 복잡해지는 실수가 흔합니다."
    },
    {
      "id": "10-4",
      "type": "number",
      "difficulty": 1,
      "question": "$y = 3x + 2$ 의 $x = 0$ 에서 $x = 4$ 까지의 호의 길이는? (소수 둘째 자리까지)",
      "answer": "12.65",
      "hints": [
        "$f'(x) = 3$ 이므로 $1 + [f'(x)]^2 = 1 + 9 = 10$.",
        "$L = \\displaystyle\\int_0^4 \\sqrt{10}\\,dx = 4\\sqrt{10}$."
      ],
      "explanation": "$f'(x) = 3$, $L = \\displaystyle\\int_0^4 \\sqrt{1 + 9}\\,dx = 4\\sqrt{10} \\approx 4 \\times 3.162 = 12.65$. 직선의 호의 길이는 피타고라스 정리로도 확인 가능: $\\sqrt{4^2 + 12^2} = \\sqrt{160} = 4\\sqrt{10}$.",
      "wrongAnalysis": "직선의 경우 호의 길이 공식 대신 단순히 $x$ 구간의 길이 $4$ 를 답하는 실수가 있습니다. 기울기가 있으면 호의 길이는 가로 길이보다 깁니다."
    },
    {
      "id": "10-5",
      "type": "choice",
      "difficulty": 2,
      "question": "$y = \\ln(\\cos x)$ ($0 \\le x \\le \\pi/4$) 의 호의 길이를 구하기 위한 피적분함수 $\\sqrt{1 + [f'(x)]^2}$ 를 간단히 하면?",
      "choices": [
        "$\\sec x$",
        "$\\tan x$",
        "$\\sqrt{1 + \\cos^2 x}$",
        "$\\csc x$"
      ],
      "answer": "$\\sec x$",
      "hints": [
        "$f(x) = \\ln(\\cos x)$ 이므로 $f'(x) = \\dfrac{-\\sin x}{\\cos x} = -\\tan x$.",
        "$1 + [f'(x)]^2 = 1 + \\tan^2 x = \\sec^2 x$."
      ],
      "explanation": "$f'(x) = -\\tan x$, $[f'(x)]^2 = \\tan^2 x$. $\\sqrt{1 + \\tan^2 x} = \\sqrt{\\sec^2 x} = \\sec x$ ($0 \\le x \\le \\pi/4$ 에서 $\\sec x > 0$).",
      "wrongAnalysis": "$f'(x) = -\\tan x$ 에서 음의 부호 때문에 $1 - \\tan^2 x$ 로 잘못 계산하는 실수가 있습니다. 제곱하면 부호는 사라집니다."
    }
  ],
  "summary": {
    "keyPoints": [
      "호의 길이는 미소 호 $ds = \\sqrt{1+(f')^2}\\,dx$ 를 적분",
      "매개변수 형태에서도 같은 원리 ($ds = \\sqrt{(dx/dt)^2 + (dy/dt)^2}\\,dt$)",
      "회전체 겉넓이는 $2\\pi \\times$ 회전 반지름 $\\times ds$ 를 적분"
    ],
    "formulas": [
      "L = \\int_a^b \\sqrt{1 + [f'(x)]^2}\\,dx",
      "S = 2\\pi \\int_a^b f(x)\\sqrt{1 + [f'(x)]^2}\\,dx",
      "L = \\int_\\alpha^\\beta \\sqrt{(dx/dt)^2 + (dy/dt)^2}\\,dt"
    ],
    "commonMistakes": [
      "근호 안에 $1$ 을 빠뜨리고 $\\int |f'(x)|\\,dx$ 로 계산",
      "회전체 겉넓이에서 $2\\pi$ 를 빠뜨림",
      "$f'(x)$ 를 제곱하지 않고 그대로 넣는 실수"
    ],
    "nextConnection": "곡선을 매개변수나 극좌표로 표현하면 더 다양한 곡선의 길이와 넓이를 구할 수 있습니다."
  }
}
];
