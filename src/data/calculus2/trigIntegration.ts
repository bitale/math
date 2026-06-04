import { Lesson } from "../../types";

export const trigIntegrationLessons: Lesson[] = [
{
  "id": 5,
  "title": "삼각함수 적분",
  "category": "적분",
  "level": "중급",
  "question": "$\\sin^m x \\cos^n x$ 꼴의 적분은 어떻게 다룰까?",
  "concept": {
    "intro": "$\\displaystyle\\int \\sin^m x \\cos^n x\\,dx$ 형태의 적분은 미적분학에서 매우 자주 등장합니다. 이 적분을 체계적으로 다루는 핵심 전략은 지수 $m$, $n$의 홀짝성에 따라 달라집니다.\n\n:::note[경우 1: $m$ 또는 $n$이 홀수일 때 (홀수 지수 전략)]\n홀수 지수를 가진 쪽에서 하나를 떼어 $dx$와 묶고, 나머지를 피타고라스 항등식 $\\sin^2 x + \\cos^2 x = 1$로 변환합니다.\n\n예를 들어 $\\sin^3 x \\cos^2 x$에서 $\\sin$의 지수 $3$이 홀수이므로, $\\sin x$ 하나를 떼어 $\\sin x\\,dx$를 만들고 나머지 $\\sin^2 x = 1 - \\cos^2 x$로 바꿉니다. 그러면 $u = \\cos x$로 치환하면 $du = -\\sin x\\,dx$이므로 모든 것이 $u$의 다항식 적분으로 귀결됩니다.\n\n반대로 $\\cos$의 지수가 홀수이면 $\\cos x$ 하나를 떼고 $u = \\sin x$로 치환합니다.\n:::\n\n:::note[경우 2: $m$, $n$ 모두 짝수일 때 (반각 공식 전략)]\n홀수 지수가 없으면 위 전략이 통하지 않습니다. 이때는 반각(이중각) 공식을 사용하여 차수를 낮춥니다:\n$$\\sin^2 x = \\frac{1 - \\cos 2x}{2},\\quad \\cos^2 x = \\frac{1 + \\cos 2x}{2}$$\n이 공식을 대입하면 지수가 절반으로 줄어들고, 필요하면 반복 적용합니다.\n:::\n\n:::note[보조 전략: $\\tan^n x$, $\\sec^n x$ 적분]\n$\\displaystyle\\int \\tan^n x\\,dx$는 $\\tan^2 x = \\sec^2 x - 1$을 이용해 차수를 $2$씩 줄이는 재귀적 방법을 씁니다. $\\displaystyle\\int \\sec^n x\\,dx$는 $n$이 짝수이면 $\\sec^2 x$를 떼어 $u = \\tan x$ 치환, $n$이 홀수이면 부분적분을 사용합니다.\n:::",
    "intuition": "핵심 아이디어는 '하나를 떼어 치환의 $du$ 로 쓴다'는 것입니다. 홀수 지수가 있으면 반드시 하나를 분리할 수 있고, 나머지는 피타고라스 항등식으로 상대 함수로 통일됩니다. 짝수끼리만 남으면 반각 공식으로 차수를 내려 결국 같은 패턴으로 돌아옵니다. 어떤 경우든 '복잡한 삼각함수 곱을 다항식이나 낮은 차수 삼각함수로 변환한다'는 전략입니다.",
    "formula": "\\text{홀수 지수 전략 (}m\\text{이 홀수):}\n\\sin^m x \\cos^n x = (\\sin^2 x)^{(m-1)/2} \\cos^n x \\cdot \\sin x\n\\quad\\to (1-\\cos^2 x)^{(m-1)/2} \\cos^n x \\cdot \\sin x,\\quad u = \\cos x\n\\text{반각 공식 (둘 다 짝수):}\n\\sin^2 x = \\frac{1-\\cos 2x}{2},\\quad \\cos^2 x = \\frac{1+\\cos 2x}{2}\n\\text{탄젠트 재귀:}\\ \\int \\tan^n x\\,dx = \\frac{\\tan^{n-1} x}{n-1} - \\int \\tan^{n-2} x\\,dx",
    "summary": "홀수 지수가 있으면 하나를 떼어 치환, 둘 다 짝수이면 반각 공식으로 차수 낮추기. $\\tan$, $\\sec$ 적분은 항등식과 재귀를 활용한다.",
    "visuals": [
      {
        "type": "function",
        "title": "sin²x 와 cos²x — 반각 공식의 시각화",
        "xRange": [-1, 7],
        "yRange": [-0.3, 1.3],
        "gridStep": 1,
        "functions": [
          { "expr": "sin(x)^2", "color": "#6366f1", "label": "sin²x" },
          { "expr": "cos(x)^2", "color": "#ef4444", "label": "cos²x" },
          { "expr": "0.5", "color": "#94a3b8", "dashed": true, "label": "y = 1/2" }
        ],
        "annotations": [
          { "x": 5.5, "y": 1.15, "text": "sin²x + cos²x = 1", "color": "#10b981" }
        ]
      }
    ]
  },
  "examples": [
    {
      "title": "[기본] 홀수 지수 전략: $\\int \\sin^3 x \\cos^2 x\\,dx$",
      "problem": "$\\displaystyle\\int \\sin^3 x \\cos^2 x\\,dx$ 를 구하시오.",
      "steps": [
        "$\\sin$의 지수 $3$이 홀수이므로, $\\sin x$ 하나를 분리한다: $\\sin^3 x \\cos^2 x = \\sin^2 x \\cos^2 x \\cdot \\sin x$.",
        "$\\sin^2 x = 1 - \\cos^2 x$를 대입한다: $(1 - \\cos^2 x) \\cos^2 x \\cdot \\sin x$.",
        "$u = \\cos x$로 치환하면 $du = -\\sin x\\,dx$, 즉 $\\sin x\\,dx = -du$.",
        "$\\displaystyle\\int (1 - u^2)\\,u^2\\,(-du) = -\\int (u^2 - u^4)\\,du = -\\frac{u^3}{3} + \\frac{u^5}{5} + C$.",
        "원래 변수로 복원: $-\\dfrac{\\cos^3 x}{3} + \\dfrac{\\cos^5 x}{5} + C$."
      ],
      "answer": "$-\\dfrac{\\cos^3 x}{3} + \\dfrac{\\cos^5 x}{5} + C$",
      "lesson": "홀수 지수 쪽에서 하나를 떼면 나머지가 짝수 지수가 되어 $\\sin^2 x + \\cos^2 x = 1$로 깔끔하게 변환됩니다. 치환 후에는 다항식 적분일 뿐입니다."
    },
    {
      "title": "[기본] 반각 공식 전략: $\\int \\sin^2 x\\,dx$",
      "problem": "$\\displaystyle\\int \\sin^2 x\\,dx$ 를 구하시오.",
      "steps": [
        "지수가 짝수이므로 반각 공식 적용: $\\sin^2 x = \\dfrac{1 - \\cos 2x}{2}$.",
        "$\\displaystyle\\int \\frac{1 - \\cos 2x}{2}\\,dx = \\frac{1}{2}\\int dx - \\frac{1}{2}\\int \\cos 2x\\,dx$.",
        "$= \\dfrac{x}{2} - \\dfrac{\\sin 2x}{4} + C$."
      ],
      "answer": "$\\dfrac{x}{2} - \\dfrac{\\sin 2x}{4} + C$",
      "lesson": "짝수 지수 삼각함수는 반각 공식으로 차수를 낮춘 뒤 적분합니다. $\\sin^2 x = \\dfrac{1 - \\cos 2x}{2}$ 를 반드시 기억하세요."
    },
    {
      "title": "[응용] 짝수×짝수: $\\int \\sin^2 x \\cos^2 x\\,dx$",
      "problem": "$\\displaystyle\\int \\sin^2 x \\cos^2 x\\,dx$ 를 구하시오.",
      "steps": [
        "둘 다 짝수 지수이므로 반각 공식을 적용한다.",
        "$\\sin^2 x \\cos^2 x = \\dfrac{(1-\\cos 2x)}{2} \\cdot \\dfrac{(1+\\cos 2x)}{2} = \\dfrac{1 - \\cos^2 2x}{4}$.",
        "$\\cos^2 2x = \\dfrac{1 + \\cos 4x}{2}$ 를 다시 적용: $\\dfrac{1}{4}\\left(1 - \\dfrac{1+\\cos 4x}{2}\\right) = \\dfrac{1-\\cos 4x}{8}$.",
        "$\\displaystyle\\int \\frac{1 - \\cos 4x}{8}\\,dx = \\dfrac{x}{8} - \\dfrac{\\sin 4x}{32} + C$."
      ],
      "answer": "$\\dfrac{x}{8} - \\dfrac{\\sin 4x}{32} + C$",
      "lesson": "반각 공식을 한 번 적용 후 $\\cos^2$ 가 남으면 반각 공식을 반복 적용해야 합니다. $\\sin^2 x \\cos^2 x = \\dfrac{\\sin^2 2x}{4}$ 로 시작하면 한 단계 줄일 수 있습니다."
    },
    {
      "title": "[응용] $\\tan$ 적분: $\\int \\tan^3 x\\,dx$",
      "problem": "$\\displaystyle\\int \\tan^3 x\\,dx$ 를 구하시오.",
      "steps": [
        "$\\tan^3 x = \\tan x \\cdot \\tan^2 x = \\tan x(\\sec^2 x - 1)$.",
        "$= \\tan x \\sec^2 x - \\tan x$.",
        "$\\displaystyle\\int \\tan x \\sec^2 x\\,dx$: $u = \\tan x$, $du = \\sec^2 x\\,dx$ $\\Rightarrow$ $\\dfrac{\\tan^2 x}{2}$.",
        "$\\displaystyle\\int \\tan x\\,dx = -\\ln|\\cos x| = \\ln|\\sec x|$.",
        "합치면: $\\dfrac{\\tan^2 x}{2} - \\ln|\\sec x| + C$."
      ],
      "answer": "$\\dfrac{\\tan^2 x}{2} - \\ln|\\sec x| + C$",
      "lesson": "$\\tan^n x$ 적분은 $\\tan^2 x = \\sec^2 x - 1$ 을 이용하여 차수를 $2$씩 줄이는 재귀 전략을 사용합니다."
    },
    {
      "title": "[심화] 고차 홀수 지수: $\\int \\sin^5 x\\,dx$",
      "problem": "$\\displaystyle\\int \\sin^5 x\\,dx$ 를 구하시오.",
      "steps": [
        "$\\sin^5 x = \\sin^4 x \\cdot \\sin x = (\\sin^2 x)^2 \\sin x = (1-\\cos^2 x)^2 \\sin x$.",
        "$u = \\cos x$, $du = -\\sin x\\,dx$ 로 치환.",
        "$(1 - u^2)^2 = 1 - 2u^2 + u^4$.",
        "$\\displaystyle\\int -(1 - 2u^2 + u^4)\\,du = -u + \\dfrac{2u^3}{3} - \\dfrac{u^5}{5} + C$.",
        "복원: $-\\cos x + \\dfrac{2\\cos^3 x}{3} - \\dfrac{\\cos^5 x}{5} + C$."
      ],
      "answer": "$-\\cos x + \\dfrac{2\\cos^3 x}{3} - \\dfrac{\\cos^5 x}{5} + C$",
      "lesson": "홀수 지수가 $5$ 이상이어도 원리는 같습니다. 하나를 떼고 나머지를 $(1-u^2)^k$ 로 전개한 뒤 다항식을 적분합니다."
    }
  ],
  "problems": [
    {
      "id": "5-1",
      "type": "choice",
      "difficulty": 1,
      "question": "$\\displaystyle\\int \\sin^2 x\\,dx$ 의 결과는?",
      "choices": [
        "$\\dfrac{x}{2} - \\dfrac{\\sin 2x}{4} + C$",
        "$\\dfrac{x}{2} + \\dfrac{\\sin 2x}{4} + C$",
        "$-\\dfrac{\\cos^3 x}{3} + C$",
        "$\\dfrac{\\sin^3 x}{3} + C$"
      ],
      "answer": "$\\dfrac{x}{2} - \\dfrac{\\sin 2x}{4} + C$",
      "hints": [
        "$\\sin^2 x$은 짝수 지수이므로 반각 공식을 사용합니다.",
        "$\\sin^2 x = \\dfrac{1 - \\cos 2x}{2}$를 대입하세요.",
        "$\\displaystyle\\int \\frac{1 - \\cos 2x}{2}\\,dx = \\frac{x}{2} - \\frac{\\sin 2x}{4} + C$."
      ],
      "explanation": "반각 공식 $\\sin^2 x = \\dfrac{1 - \\cos 2x}{2}$를 적용합니다. $\\displaystyle\\int \\frac{1-\\cos 2x}{2}\\,dx = \\frac{1}{2}\\int dx - \\frac{1}{2}\\int \\cos 2x\\,dx = \\frac{x}{2} - \\frac{\\sin 2x}{4} + C$.",
      "wrongAnalysis": "$\\sin^2 x$를 직접 적분하여 $\\dfrac{\\sin^3 x}{3}$로 쓰는 실수가 흔합니다. 삼각함수의 거듭제곱은 다항식처럼 지수를 올려 적분할 수 없습니다. 반드시 반각 공식이나 치환을 거쳐야 합니다."
    },
    {
      "id": "5-2",
      "type": "text",
      "difficulty": 2,
      "question": "$\\displaystyle\\int \\sin^3 x\\,dx$ 의 결과는? (+C 포함, 예: -cosx+(cos^3x)/3+C)",
      "answer": "-cosx+(cos^3x)/3+C",
      "hints": [
        "$\\sin$의 지수 $3$이 홀수이므로, $\\sin x$ 하나를 떼세요.",
        "$\\sin^3 x = \\sin^2 x \\cdot \\sin x = (1-\\cos^2 x)\\sin x$.",
        "$u = \\cos x$, $du = -\\sin x\\,dx$로 치환하면 $\\displaystyle\\int -(1-u^2)\\,du$."
      ],
      "explanation": "$\\sin^3 x = (1 - \\cos^2 x)\\sin x$. $u = \\cos x$, $du = -\\sin x\\,dx$이므로 $\\displaystyle\\int -(1-u^2)\\,du = -u + \\frac{u^3}{3} + C = -\\cos x + \\frac{\\cos^3 x}{3} + C$.",
      "wrongAnalysis": "치환 시 $du = -\\sin x\\,dx$의 음의 부호를 놓쳐 $\\cos x - \\dfrac{\\cos^3 x}{3} + C$로 답하는 부호 실수가 매우 흔합니다. 치환 후 부호를 반드시 확인하세요."
    },
    {
      "id": "5-3",
      "type": "text",
      "difficulty": 3,
      "question": "$\\displaystyle\\int \\sin^2 x \\cos^2 x\\,dx$ 의 결과는? (+C 포함, 예: x/8-sin(4x)/32+C)",
      "answer": "x/8-sin(4x)/32+C",
      "hints": [
        "둘 다 짝수 지수이므로 반각 공식을 적용합니다.",
        "$\\sin^2 x \\cos^2 x = \\dfrac{1-\\cos 2x}{2} \\cdot \\dfrac{1+\\cos 2x}{2} = \\dfrac{1 - \\cos^2 2x}{4}$.",
        "$\\cos^2 2x = \\dfrac{1+\\cos 4x}{2}$를 다시 대입하면 $\\dfrac{1}{4}\\left(1 - \\dfrac{1+\\cos 4x}{2}\\right) = \\dfrac{1}{8}(1 - \\cos 4x)$."
      ],
      "explanation": "$\\sin^2 x \\cos^2 x = \\dfrac{(1-\\cos 2x)(1+\\cos 2x)}{4} = \\dfrac{1-\\cos^2 2x}{4}$. 반각 공식을 한 번 더 적용하면 $\\dfrac{1-\\frac{1+\\cos 4x}{2}}{4} = \\dfrac{1-\\cos 4x}{8}$. 따라서 $\\displaystyle\\int \\frac{1-\\cos 4x}{8}\\,dx = \\frac{x}{8} - \\frac{\\sin 4x}{32} + C$.",
      "wrongAnalysis": "반각 공식을 한 번만 적용하고 남은 $\\cos^2 2x$를 처리하지 않는 실수가 흔합니다. 짝수 지수가 남아 있으면 반각 공식을 반복 적용해야 합니다. 또한 $\\sin^2 x \\cos^2 x = \\dfrac{\\sin^2 2x}{4}$라는 이중각 공식을 활용하면 한 단계 줄일 수 있습니다."
    },
    {
      "id": "5-4",
      "type": "choice",
      "difficulty": 1,
      "question": "$\\displaystyle\\int \\cos^2 x\\,dx$ 의 결과는?",
      "choices": [
        "$\\dfrac{x}{2} + \\dfrac{\\sin 2x}{4} + C$",
        "$\\dfrac{x}{2} - \\dfrac{\\sin 2x}{4} + C$",
        "$\\dfrac{\\cos^3 x}{3} + C$",
        "$\\dfrac{\\sin^3 x}{3} + C$"
      ],
      "answer": "$\\dfrac{x}{2} + \\dfrac{\\sin 2x}{4} + C$",
      "hints": [
        "$\\cos^2 x$ 는 짝수 지수이므로 반각 공식을 사용합니다.",
        "$\\cos^2 x = \\dfrac{1 + \\cos 2x}{2}$."
      ],
      "explanation": "$\\cos^2 x = \\dfrac{1 + \\cos 2x}{2}$. $\\displaystyle\\int \\frac{1 + \\cos 2x}{2}\\,dx = \\frac{x}{2} + \\frac{\\sin 2x}{4} + C$.",
      "wrongAnalysis": "$\\sin^2 x$ 의 반각 공식 $\\dfrac{1 - \\cos 2x}{2}$ 와 혼동하여 부호를 잘못 적는 실수가 흔합니다. $\\cos^2 x$ 는 $+$ 부호입니다."
    },
    {
      "id": "5-5",
      "type": "text",
      "difficulty": 2,
      "question": "$\\displaystyle\\int \\sin x \\cos^3 x\\,dx$ 의 결과는? (+C 포함, 예: -cos^4x/4+C)",
      "answer": "-cos^4x/4+C",
      "hints": [
        "$\\cos$ 의 지수 $3$ 이 홀수이지만, $\\sin x$ 도 있으므로 $u = \\cos x$ 치환이 가능합니다.",
        "$u = \\cos x$, $du = -\\sin x\\,dx$ 로 치환하면 $\\displaystyle\\int -u^3\\,du$."
      ],
      "explanation": "$u = \\cos x$, $du = -\\sin x\\,dx$. $\\displaystyle\\int \\sin x \\cos^3 x\\,dx = \\int -u^3\\,du = -\\dfrac{u^4}{4} + C = -\\dfrac{\\cos^4 x}{4} + C$.",
      "wrongAnalysis": "$du = -\\sin x\\,dx$ 의 음의 부호를 놓쳐 $\\dfrac{\\cos^4 x}{4} + C$ 로 답하는 부호 실수가 흔합니다."
    }
  ],
  "summary": {
    "keyPoints": [
      "$m$ 또는 $n$이 홀수이면 홀수 쪽에서 하나를 떼고 피타고라스 항등식으로 치환한다.",
      "둘 다 짝수이면 반각 공식 $\\sin^2 x = \\frac{1-\\cos 2x}{2}$, $\\cos^2 x = \\frac{1+\\cos 2x}{2}$로 차수를 낮춘다.",
      "$\\tan^n x$는 $\\tan^2 x = \\sec^2 x - 1$로 재귀 분해, $\\sec^n x$는 짝수이면 치환·홀수이면 부분적분."
    ],
    "formulas": [
      "\\sin^2 x + \\cos^2 x = 1",
      "\\sin^2 x = \\frac{1-\\cos 2x}{2}",
      "\\cos^2 x = \\frac{1+\\cos 2x}{2}",
      "\\int \\tan^n x\\,dx = \\frac{\\tan^{n-1} x}{n-1} - \\int \\tan^{n-2} x\\,dx"
    ],
    "commonMistakes": [
      "삼각함수 거듭제곱을 다항식처럼 $\\frac{\\sin^{n+1} x}{n+1}$로 적분하는 실수",
      "치환 시 $du$의 부호($-$) 누락",
      "반각 공식 적용 후 남은 짝수 지수를 처리하지 않는 실수"
    ],
    "nextConnection": "삼각함수 적분의 패턴을 알면, 다음 단원인 '삼각치환'에서 무리함수를 삼각함수로 바꿔 적분하는 기법을 배울 수 있습니다."
  }
},
{
  "id": 6,
  "title": "삼각치환",
  "category": "적분",
  "level": "중급",
  "question": "$\\sqrt{a^2 - x^2}$, $\\sqrt{a^2 + x^2}$, $\\sqrt{x^2 - a^2}$ 가 포함된 적분은 어떻게 처리할까?",
  "concept": {
    "intro": "피적분함수에 $\\sqrt{a^2 - x^2}$, $\\sqrt{a^2 + x^2}$, $\\sqrt{x^2 - a^2}$ 같은 무리식이 포함되어 있으면 일반적인 치환으로는 근호를 제거하기 어렵습니다. 이때 삼각치환(trigonometric substitution)을 사용하면, 피타고라스 항등식 덕분에 근호가 깔끔하게 사라집니다.\n\n:::definition[삼각치환의 세 가지 유형]\n**유형 1:** $\\sqrt{a^2 - x^2}$ → $x = a\\sin\\theta$ (항등식: $1 - \\sin^2\\theta = \\cos^2\\theta$)\n\n**유형 2:** $\\sqrt{a^2 + x^2}$ → $x = a\\tan\\theta$ (항등식: $1 + \\tan^2\\theta = \\sec^2\\theta$)\n\n**유형 3:** $\\sqrt{x^2 - a^2}$ → $x = a\\sec\\theta$ (항등식: $\\sec^2\\theta - 1 = \\tan^2\\theta$)\n:::\n\n:::note[유형 1 상세: $\\sqrt{a^2 - x^2}$]\n$x = a\\sin\\theta$로 치환합니다 ($-\\frac{\\pi}{2} \\leq \\theta \\leq \\frac{\\pi}{2}$).\n$dx = a\\cos\\theta\\,d\\theta$이고, $\\sqrt{a^2 - x^2} = a\\cos\\theta$.\n:::\n\n:::note[유형 2 상세: $\\sqrt{a^2 + x^2}$]\n$x = a\\tan\\theta$로 치환합니다 ($-\\frac{\\pi}{2} < \\theta < \\frac{\\pi}{2}$).\n$dx = a\\sec^2\\theta\\,d\\theta$이고, $\\sqrt{a^2 + x^2} = a\\sec\\theta$.\n:::\n\n:::note[유형 3 상세: $\\sqrt{x^2 - a^2}$]\n$x = a\\sec\\theta$로 치환합니다 ($0 \\leq \\theta < \\frac{\\pi}{2}$ 또는 $\\pi \\leq \\theta < \\frac{3\\pi}{2}$).\n$dx = a\\sec\\theta\\tan\\theta\\,d\\theta$이고, $\\sqrt{x^2 - a^2} = a\\tan\\theta$.\n:::\n\n:::warning[원래 변수로 복원하기]\n삼각치환 후 적분 결과는 $\\theta$로 표현됩니다. 이를 원래 변수 $x$로 되돌리려면, 치환 관계에서 직각삼각형을 그려 각 삼각함수를 $x$와 $a$로 나타냅니다. 예를 들어 $x = a\\sin\\theta$이면 $\\sin\\theta = \\frac{x}{a}$이고, 빗변이 $a$, 대변이 $x$인 삼각형에서 인접변은 $\\sqrt{a^2 - x^2}$이므로 $\\cos\\theta = \\frac{\\sqrt{a^2-x^2}}{a}$ 등을 읽어냅니다.\n:::",
    "intuition": "삼각치환의 핵심 아이디어는 간단합니다: 피타고라스 항등식은 '두 항의 합 또는 차가 제곱으로 정리되는' 성질을 가집니다. 근호 안의 $a^2 - x^2$, $a^2 + x^2$, $x^2 - a^2$도 같은 구조이므로, $x$를 삼각함수로 바꾸면 근호가 자연스럽게 사라집니다. 직각삼각형의 세 변의 관계를 근호 안의 식에 대응시킨다고 생각하면 됩니다.",
    "formula": "\\sqrt{a^2 - x^2}\\ \\to\\ x = a\\sin\\theta,\\quad dx = a\\cos\\theta\\,d\\theta\n\\sqrt{a^2 + x^2}\\ \\to\\ x = a\\tan\\theta,\\quad dx = a\\sec^2\\theta\\,d\\theta\n\\sqrt{x^2 - a^2}\\ \\to\\ x = a\\sec\\theta,\\quad dx = a\\sec\\theta\\tan\\theta\\,d\\theta\n1 - \\sin^2\\theta = \\cos^2\\theta,\\quad 1 + \\tan^2\\theta = \\sec^2\\theta,\\quad \\sec^2\\theta - 1 = \\tan^2\\theta",
    "summary": "세 가지 근호 유형에 대해 각각 $\\sin$, $\\tan$, $\\sec$ 치환을 사용하여 근호를 제거한다. 적분 후에는 직각삼각형을 이용해 원래 변수로 복원한다.",
    "visuals": [
      {
        "type": "geometry",
        "title": "삼각치환의 세 가지 패턴",
        "xRange": [-3, 3],
        "yRange": [-3, 3],
        "shapes": [
          { "type": "circle", "cx": 0, "cy": 0, "rx": 2, "color": "#6366f1", "fill": "rgba(99,102,241,0.06)" }
        ],
        "functions": [
          { "expr": "sqrt(4 - x^2)", "color": "#6366f1", "label": "√(a²−x²)", "domain": [-2, 2] },
          { "expr": "-sqrt(4 - x^2)", "color": "#6366f1", "domain": [-2, 2] }
        ],
        "lines": [
          { "from": [0, 0], "to": [1.732, 1], "color": "#ef4444", "label": "a" },
          { "from": [1.732, 0], "to": [1.732, 1], "color": "#10b981", "label": "x" },
          { "from": [0, 0], "to": [1.732, 0], "color": "#f59e0b" }
        ],
        "annotations": [
          { "x": 0.4, "y": 0.2, "text": "θ", "color": "#6366f1" },
          { "x": -2, "y": -2.5, "text": "x = a sin θ", "color": "#6366f1" }
        ]
      }
    ]
  },
  "examples": [
    {
      "title": "[기본] 삼각치환: $\\int \\frac{dx}{\\sqrt{4-x^2}}$",
      "problem": "$\\displaystyle\\int \\frac{dx}{\\sqrt{4-x^2}}$ 를 구하시오.",
      "steps": [
        "$\\sqrt{4-x^2}$ 형태이므로 $\\sqrt{a^2-x^2}$에서 $a=2$이다. $x = 2\\sin\\theta$로 치환한다.",
        "$dx = 2\\cos\\theta\\,d\\theta$이고, $\\sqrt{4-x^2} = \\sqrt{4-4\\sin^2\\theta} = 2\\cos\\theta$.",
        "대입하면 $\\displaystyle\\int \\frac{2\\cos\\theta\\,d\\theta}{2\\cos\\theta} = \\int d\\theta = \\theta + C$.",
        "$x = 2\\sin\\theta$에서 $\\theta = \\arcsin\\dfrac{x}{2}$이므로 원래 변수로 복원한다."
      ],
      "answer": "$\\arcsin\\dfrac{x}{2} + C$",
      "lesson": "$\\sqrt{a^2-x^2}$를 만나면 $x = a\\sin\\theta$ 치환을 떠올리세요. 근호가 $a\\cos\\theta$로 바뀌어 깔끔하게 사라집니다. 복원 시에는 치환 식에서 역함수를 취하면 됩니다."
    },
    {
      "title": "[기본] $\\sqrt{a^2+x^2}$ 유형: $\\int \\frac{dx}{\\sqrt{1+x^2}}$",
      "problem": "$\\displaystyle\\int \\frac{dx}{\\sqrt{1+x^2}}$ 를 구하시오.",
      "steps": [
        "$\\sqrt{1+x^2}$ 형태이므로 $a = 1$. $x = \\tan\\theta$ 로 치환한다.",
        "$dx = \\sec^2\\theta\\,d\\theta$, $\\sqrt{1+x^2} = \\sec\\theta$.",
        "$\\displaystyle\\int \\frac{\\sec^2\\theta\\,d\\theta}{\\sec\\theta} = \\int \\sec\\theta\\,d\\theta = \\ln|\\sec\\theta + \\tan\\theta| + C$.",
        "직각삼각형에서 $\\tan\\theta = x$, $\\sec\\theta = \\sqrt{1+x^2}$.",
        "복원: $\\ln|x + \\sqrt{1+x^2}| + C$."
      ],
      "answer": "$\\ln|x + \\sqrt{1+x^2}| + C$",
      "lesson": "$\\sqrt{a^2+x^2}$ 유형은 $x = a\\tan\\theta$ 치환입니다. $\\int \\sec\\theta\\,d\\theta = \\ln|\\sec\\theta+\\tan\\theta|+C$ 공식을 함께 기억하세요."
    },
    {
      "title": "[응용] $\\sqrt{x^2-a^2}$ 유형: $\\int \\frac{\\sqrt{x^2-9}}{x}\\,dx$",
      "problem": "$\\displaystyle\\int \\frac{\\sqrt{x^2-9}}{x}\\,dx$ 를 구하시오. ($x > 3$)",
      "steps": [
        "$\\sqrt{x^2-9}$ 에서 $a = 3$. $x = 3\\sec\\theta$ 로 치환한다.",
        "$dx = 3\\sec\\theta\\tan\\theta\\,d\\theta$, $\\sqrt{x^2-9} = 3\\tan\\theta$.",
        "$\\displaystyle\\int \\frac{3\\tan\\theta}{3\\sec\\theta} \\cdot 3\\sec\\theta\\tan\\theta\\,d\\theta = 3\\int \\tan^2\\theta\\,d\\theta$.",
        "$\\tan^2\\theta = \\sec^2\\theta - 1$ 이므로 $3\\int(\\sec^2\\theta - 1)\\,d\\theta = 3(\\tan\\theta - \\theta) + C$.",
        "직각삼각형에서 $\\tan\\theta = \\dfrac{\\sqrt{x^2-9}}{3}$, $\\theta = \\text{arcsec}\\dfrac{x}{3}$.",
        "복원: $\\sqrt{x^2-9} - 3\\,\\text{arcsec}\\dfrac{x}{3} + C$."
      ],
      "answer": "$\\sqrt{x^2-9} - 3\\,\\text{arcsec}\\dfrac{x}{3} + C$",
      "lesson": "$\\sqrt{x^2-a^2}$ 유형은 $x = a\\sec\\theta$ 치환입니다. $\\sec^2\\theta - 1 = \\tan^2\\theta$ 항등식이 근호를 제거합니다."
    },
    {
      "title": "[응용] 삼각치환 후 삼각함수 적분 결합",
      "problem": "$\\displaystyle\\int \\frac{x^2}{\\sqrt{4-x^2}}\\,dx$ 를 구하시오.",
      "steps": [
        "$a = 2$, $x = 2\\sin\\theta$, $dx = 2\\cos\\theta\\,d\\theta$, $\\sqrt{4-x^2} = 2\\cos\\theta$.",
        "$\\displaystyle\\int \\frac{4\\sin^2\\theta}{2\\cos\\theta} \\cdot 2\\cos\\theta\\,d\\theta = 4\\int \\sin^2\\theta\\,d\\theta$.",
        "반각 공식: $\\sin^2\\theta = \\dfrac{1-\\cos 2\\theta}{2}$.",
        "$4 \\cdot \\dfrac{1}{2}\\left(\\theta - \\dfrac{\\sin 2\\theta}{2}\\right) + C = 2\\theta - \\sin 2\\theta + C$.",
        "$\\sin 2\\theta = 2\\sin\\theta\\cos\\theta = 2 \\cdot \\dfrac{x}{2} \\cdot \\dfrac{\\sqrt{4-x^2}}{2} = \\dfrac{x\\sqrt{4-x^2}}{2}$.",
        "복원: $2\\arcsin\\dfrac{x}{2} - \\dfrac{x\\sqrt{4-x^2}}{2} + C$."
      ],
      "answer": "$2\\arcsin\\dfrac{x}{2} - \\dfrac{x\\sqrt{4-x^2}}{2} + C$",
      "lesson": "삼각치환 후 삼각함수의 짝수 지수 적분이 남으면 반각 공식을 결합하여 처리합니다. 복원 시 이중각 공식을 이용하세요."
    },
    {
      "title": "[심화] 완전제곱식 변환 후 삼각치환",
      "problem": "$\\displaystyle\\int \\frac{dx}{\\sqrt{x^2+4x+8}}$ 를 구하시오.",
      "steps": [
        "완전제곱식으로 변환: $x^2+4x+8 = (x+2)^2 + 4$.",
        "$t = x+2$ 로 치환하면 $\\displaystyle\\int \\frac{dt}{\\sqrt{t^2+4}}$.",
        "$\\sqrt{t^2+4}$ 에서 $a = 2$. $t = 2\\tan\\theta$, $dt = 2\\sec^2\\theta\\,d\\theta$.",
        "$\\sqrt{t^2+4} = 2\\sec\\theta$. $\\displaystyle\\int \\frac{2\\sec^2\\theta\\,d\\theta}{2\\sec\\theta} = \\int \\sec\\theta\\,d\\theta$.",
        "$= \\ln|\\sec\\theta + \\tan\\theta| + C = \\ln\\left|\\dfrac{\\sqrt{t^2+4}}{2} + \\dfrac{t}{2}\\right| + C$.",
        "복원: $\\ln|x+2+\\sqrt{x^2+4x+8}| + C$ (상수 $\\ln 2$ 는 $C$ 에 흡수)."
      ],
      "answer": "$\\ln|x+2+\\sqrt{x^2+4x+8}| + C$",
      "lesson": "근호 안이 $ax^2+bx+c$ 꼴이면 먼저 완전제곱식으로 변환하여 표준 형태를 만든 뒤 삼각치환을 적용합니다."
    }
  ],
  "problems": [
    {
      "id": "6-1",
      "type": "choice",
      "difficulty": 1,
      "question": "$\\displaystyle\\int \\frac{dx}{\\sqrt{9-x^2}}$를 계산하기 위해 적절한 삼각치환은?",
      "choices": [
        "$x = 3\\sin\\theta$",
        "$x = 3\\tan\\theta$",
        "$x = 3\\sec\\theta$",
        "$x = 9\\sin\\theta$"
      ],
      "answer": "$x = 3\\sin\\theta$",
      "hints": [
        "근호 안의 식 $9 - x^2$의 형태를 확인하세요.",
        "$a^2 - x^2$ 꼴이면 $x = a\\sin\\theta$ 치환을 사용합니다.",
        "$9 = 3^2$이므로 $a = 3$입니다."
      ],
      "explanation": "$\\sqrt{9-x^2}$는 $\\sqrt{a^2 - x^2}$ 꼴이고 $a = 3$이므로 $x = 3\\sin\\theta$가 올바른 치환입니다. 이를 대입하면 $\\sqrt{9-9\\sin^2\\theta} = 3\\cos\\theta$로 근호가 사라집니다.",
      "wrongAnalysis": "$a^2 = 9$에서 $a = 9$로 착각하여 $x = 9\\sin\\theta$를 선택하는 실수가 있습니다. 근호 안의 상수가 $a^2$이므로 제곱근을 취해 $a = 3$을 구해야 합니다. 또한 $\\sqrt{a^2 - x^2}$ 유형과 $\\sqrt{a^2 + x^2}$ 유형을 혼동하여 $\\tan$ 치환을 고르는 실수도 있습니다."
    },
    {
      "id": "6-2",
      "type": "text",
      "difficulty": 2,
      "question": "$\\displaystyle\\int \\frac{x^2}{\\sqrt{1-x^2}}\\,dx$ 의 결과는? (+C 포함, 예: arcsin(x)/2-xsqrt(1-x^2)/2+C)",
      "answer": "arcsin(x)/2-xsqrt(1-x^2)/2+C",
      "hints": [
        "$\\sqrt{1-x^2}$이므로 $x = \\sin\\theta$, $dx = \\cos\\theta\\,d\\theta$로 치환하세요.",
        "$\\dfrac{x^2}{\\sqrt{1-x^2}} = \\dfrac{\\sin^2\\theta}{\\cos\\theta}$이고, $dx = \\cos\\theta\\,d\\theta$를 곱하면 $\\int \\sin^2\\theta\\,d\\theta$.",
        "$\\sin^2\\theta = \\dfrac{1-\\cos 2\\theta}{2}$를 이용해 적분하세요."
      ],
      "explanation": "$x = \\sin\\theta$, $dx = \\cos\\theta\\,d\\theta$, $\\sqrt{1-x^2} = \\cos\\theta$. 대입하면 $\\displaystyle\\int \\frac{\\sin^2\\theta}{\\cos\\theta}\\cos\\theta\\,d\\theta = \\int \\sin^2\\theta\\,d\\theta$. 반각 공식으로 $\\int \\frac{1-\\cos 2\\theta}{2}\\,d\\theta = \\frac{\\theta}{2} - \\frac{\\sin 2\\theta}{4} + C$. $\\sin 2\\theta = 2\\sin\\theta\\cos\\theta = 2x\\sqrt{1-x^2}$이고 $\\theta = \\arcsin x$이므로 $\\frac{\\arcsin x}{2} - \\frac{x\\sqrt{1-x^2}}{2} + C$.",
      "wrongAnalysis": "삼각치환 후 $\\sin^2\\theta$ 적분에서 반각 공식 적용을 잊고 $\\frac{\\sin^3\\theta}{3}$로 잘못 적분하는 실수가 흔합니다. 또한 원래 변수로 복원할 때 $\\sin 2\\theta = 2\\sin\\theta\\cos\\theta$를 $x$와 $\\sqrt{1-x^2}$로 바꾸는 과정을 빠뜨리기 쉽습니다."
    },
    {
      "id": "6-3",
      "type": "text",
      "difficulty": 3,
      "question": "$\\displaystyle\\int \\frac{dx}{(x^2+4)^{3/2}}$ 의 결과는? (+C 포함, 예: x/(4sqrt(x^2+4))+C)",
      "answer": "x/(4sqrt(x^2+4))+C",
      "hints": [
        "$x^2+4 = x^2 + 2^2$ 형태이므로 $x = 2\\tan\\theta$ 치환을 사용하세요.",
        "$dx = 2\\sec^2\\theta\\,d\\theta$, $x^2+4 = 4\\sec^2\\theta$이므로 $(x^2+4)^{3/2} = 8\\sec^3\\theta$.",
        "적분이 $\\displaystyle\\int \\frac{2\\sec^2\\theta}{8\\sec^3\\theta}\\,d\\theta = \\frac{1}{4}\\int \\cos\\theta\\,d\\theta$로 간단해집니다."
      ],
      "explanation": "$x = 2\\tan\\theta$, $dx = 2\\sec^2\\theta\\,d\\theta$. $x^2+4 = 4\\tan^2\\theta + 4 = 4\\sec^2\\theta$이므로 $(x^2+4)^{3/2} = 8\\sec^3\\theta$. 대입하면 $\\displaystyle\\int \\frac{2\\sec^2\\theta}{8\\sec^3\\theta}\\,d\\theta = \\frac{1}{4}\\int \\cos\\theta\\,d\\theta = \\frac{\\sin\\theta}{4} + C$. 직각삼각형에서 대변 $= x$, 인접변 $= 2$, 빗변 $= \\sqrt{x^2+4}$이므로 $\\sin\\theta = \\frac{x}{\\sqrt{x^2+4}}$. 따라서 $\\frac{x}{4\\sqrt{x^2+4}} + C$.",
      "wrongAnalysis": "$(x^2+4)^{3/2}$을 치환할 때 $4\\sec^2\\theta$의 $3/2$ 거듭제곱을 $4^{3/2} = 8$로 정확히 계산하지 못하는 실수가 흔합니다. 또한 원래 변수로 복원할 때 직각삼각형을 올바르게 그리지 않아 $\\sin\\theta$를 잘못 읽는 경우가 있습니다. $x = 2\\tan\\theta$에서 대변이 $x$, 인접변이 $2$임을 기억하세요."
    },
    {
      "id": "6-4",
      "type": "choice",
      "difficulty": 1,
      "question": "$\\sqrt{x^2 - 9}$ 가 포함된 적분에서 올바른 삼각치환은?",
      "choices": [
        "$x = 3\\sin\\theta$",
        "$x = 3\\tan\\theta$",
        "$x = 3\\sec\\theta$",
        "$x = 9\\sec\\theta$"
      ],
      "answer": "$x = 3\\sec\\theta$",
      "hints": [
        "근호 안의 식이 $x^2 - a^2$ 꼴인지 확인하세요.",
        "$x^2 - a^2$ 형태에는 $x = a\\sec\\theta$ 를 사용합니다."
      ],
      "explanation": "$\\sqrt{x^2 - 9} = \\sqrt{x^2 - 3^2}$는 $\\sqrt{x^2 - a^2}$ 꼴($a = 3$)이므로 $x = 3\\sec\\theta$ 를 사용합니다. $\\sec^2\\theta - 1 = \\tan^2\\theta$ 항등식에 의해 근호가 $3\\tan\\theta$ 로 바뀝니다.",
      "wrongAnalysis": "$\\sqrt{a^2 - x^2}$($\\sin$ 치환)과 $\\sqrt{x^2 - a^2}$($\\sec$ 치환)을 혼동하는 실수가 흔합니다. 부호의 순서에 주의하세요."
    },
    {
      "id": "6-5",
      "type": "text",
      "difficulty": 2,
      "question": "$\\displaystyle\\int \\frac{dx}{\\sqrt{4+x^2}}$ 의 결과는? (+C 포함, 예: ln|x+sqrt(4+x^2)|+C 또는 동치 표현)",
      "answer": "ln|x+sqrt(x^2+4)|+C",
      "hints": [
        "$\\sqrt{x^2 + 4}$ 형태이므로 $x = 2\\tan\\theta$ 로 치환하세요.",
        "$dx = 2\\sec^2\\theta\\,d\\theta$, $\\sqrt{4 + 4\\tan^2\\theta} = 2\\sec\\theta$.",
        "$\\displaystyle\\int \\frac{2\\sec^2\\theta}{2\\sec\\theta}\\,d\\theta = \\int \\sec\\theta\\,d\\theta = \\ln|\\sec\\theta + \\tan\\theta| + C$."
      ],
      "explanation": "$x = 2\\tan\\theta$, $dx = 2\\sec^2\\theta\\,d\\theta$, $\\sqrt{4+x^2} = 2\\sec\\theta$. $\\displaystyle\\int \\sec\\theta\\,d\\theta = \\ln|\\sec\\theta + \\tan\\theta| + C$. 직각삼각형에서 $\\tan\\theta = \\dfrac{x}{2}$, $\\sec\\theta = \\dfrac{\\sqrt{x^2+4}}{2}$ 이므로 $\\ln\\left|\\dfrac{\\sqrt{x^2+4}}{2} + \\dfrac{x}{2}\\right| + C = \\ln|x + \\sqrt{x^2+4}| + C$ (상수 $\\ln 2$ 는 $C$ 에 흡수).",
      "wrongAnalysis": "$\\displaystyle\\int \\sec\\theta\\,d\\theta$ 의 결과를 모르면 막히게 됩니다. $\\int \\sec\\theta\\,d\\theta = \\ln|\\sec\\theta + \\tan\\theta| + C$ 를 기억하세요."
    }
  ],
  "summary": {
    "keyPoints": [
      "$\\sqrt{a^2-x^2}$ → $x = a\\sin\\theta$ (항등식: $1-\\sin^2\\theta = \\cos^2\\theta$)",
      "$\\sqrt{a^2+x^2}$ → $x = a\\tan\\theta$ (항등식: $1+\\tan^2\\theta = \\sec^2\\theta$)",
      "$\\sqrt{x^2-a^2}$ → $x = a\\sec\\theta$ (항등식: $\\sec^2\\theta - 1 = \\tan^2\\theta$)",
      "적분 후 직각삼각형을 그려 원래 변수로 복원한다."
    ],
    "formulas": [
      "x = a\\sin\\theta \\Rightarrow \\sqrt{a^2-x^2} = a\\cos\\theta",
      "x = a\\tan\\theta \\Rightarrow \\sqrt{a^2+x^2} = a\\sec\\theta",
      "x = a\\sec\\theta \\Rightarrow \\sqrt{x^2-a^2} = a\\tan\\theta"
    ],
    "commonMistakes": [
      "근호 안의 상수 $a^2$에서 $a$를 구할 때 제곱근을 취하지 않는 실수",
      "세 가지 유형을 혼동하여 잘못된 치환을 사용하는 실수",
      "$dx$ 변환을 빠뜨리거나 잘못 계산하는 실수",
      "원래 변수로 복원할 때 직각삼각형을 그리지 않고 역함수만으로 해결하려다 실수"
    ],
    "nextConnection": "치환이 통하지 않는 $x \\sin x$ 같은 곱 형태는 '부분적분'으로 다룹니다."
  }
}
];
