import { Lesson } from "../../types";

export const integrationLessons: Lesson[] = [
{
  "id": 1,
  "title": "부정적분",
  "category": "적분",
  "level": "기초",
  "question": "도함수가 주어졌을 때, 원래 함수를 어떻게 찾을 수 있을까?",
  "concept": {
    "intro": "부정적분은 미분의 '역연산'입니다.\n\n:::definition[부정적분(원시함수)]\n$F'(x) = f(x)$ 일 때 $F(x)$ 를 $f(x)$ 의 부정적분(원시함수)이라 부르고 $\\displaystyle\\int f(x)\\,dx$ 로 나타냅니다.\n:::\n\n:::note[적분상수]\n원시함수는 상수 차이만 빼고 유일합니다. 그래서 결과에는 항상 적분상수 $C$ 를 붙입니다.\n:::",
    "intuition": "내가 매 순간 어느 속도로 걸었는지 안다면, '어디서 어디까지 갔는지'는 그 속도를 누적해서 알 수 있습니다. 적분은 변화율을 모으는 작업입니다.",
    "formula": "\\int x^n\\,dx = \\frac{x^{n+1}}{n+1} + C\\ (n \\ne -1)\n\\int \\frac{1}{x}\\,dx = \\ln|x| + C\n\\int e^x\\,dx = e^x + C\n\\int \\cos x\\,dx = \\sin x + C,\\quad \\int \\sin x\\,dx = -\\cos x + C",
    "summary": "• 부정적분은 항상 $+C$\n• 미분 공식의 역방향\n• 검산: 다시 미분하면 원래 식이 나와야 함"
  },
  "examples": [
    {
      "title": "[기본] 다항식의 부정적분",
      "problem": "$\\displaystyle\\int (3x^2 + 2x - 1)\\,dx$ 를 구하시오.",
      "steps": [
        "각 항을 따로 적분.",
        "$\\displaystyle\\int 3x^2\\,dx = x^3$.",
        "$\\displaystyle\\int 2x\\,dx = x^2$.",
        "$\\displaystyle\\int (-1)\\,dx = -x$. 합치고 $C$ 추가."
      ],
      "answer": "$x^3 + x^2 - x + C$",
      "lesson": "다항식의 적분은 단순히 '지수를 $1$ 올리고, 그 새 지수로 나눈다'는 한 줄 규칙입니다."
    },
    {
      "title": "[기본] 삼각함수의 부정적분",
      "problem": "$\\displaystyle\\int (\\sin x + 3\\cos x)\\,dx$ 를 구하시오.",
      "steps": [
        "각 항을 따로 적분한다.",
        "$\\displaystyle\\int \\sin x\\,dx = -\\cos x$.",
        "$\\displaystyle\\int 3\\cos x\\,dx = 3\\sin x$.",
        "합치고 적분상수를 추가한다: $-\\cos x + 3\\sin x + C$."
      ],
      "answer": "$-\\cos x + 3\\sin x + C$",
      "lesson": "$\\sin x$ 의 적분은 $-\\cos x$, $\\cos x$ 의 적분은 $\\sin x$ 입니다. 부호를 자주 헷갈리므로 미분으로 검산하는 습관이 중요합니다."
    },
    {
      "title": "[응용] 거듭제곱 변환 후 적분",
      "problem": "$\\displaystyle\\int \\left(\\sqrt{x} + \\dfrac{1}{\\sqrt{x}}\\right)dx$ 를 구하시오.",
      "steps": [
        "근호를 지수로 변환: $\\sqrt{x} = x^{1/2}$, $\\dfrac{1}{\\sqrt{x}} = x^{-1/2}$.",
        "$\\displaystyle\\int x^{1/2}\\,dx = \\dfrac{x^{3/2}}{3/2} = \\dfrac{2}{3}x^{3/2}$.",
        "$\\displaystyle\\int x^{-1/2}\\,dx = \\dfrac{x^{1/2}}{1/2} = 2x^{1/2} = 2\\sqrt{x}$.",
        "합치면 $\\dfrac{2}{3}x^{3/2} + 2\\sqrt{x} + C$."
      ],
      "answer": "$\\dfrac{2}{3}x^{3/2} + 2\\sqrt{x} + C$",
      "lesson": "근호나 분수 형태의 함수도 $x^n$ 꼴로 변환하면 거듭제곱 적분 공식을 바로 적용할 수 있습니다."
    },
    {
      "title": "[응용] 초기조건을 이용한 원시함수 결정",
      "problem": "$f'(x) = 4x^3 - 6x$ 이고 $f(1) = 2$ 일 때, $f(x)$ 를 구하시오.",
      "steps": [
        "$f(x) = \\displaystyle\\int (4x^3 - 6x)\\,dx = x^4 - 3x^2 + C$.",
        "초기조건 $f(1) = 2$ 를 대입: $1 - 3 + C = 2$.",
        "$C = 4$.",
        "따라서 $f(x) = x^4 - 3x^2 + 4$."
      ],
      "answer": "$f(x) = x^4 - 3x^2 + 4$",
      "lesson": "부정적분의 적분상수 $C$ 는 초기조건(특정 점에서의 함숫값)을 대입하면 유일하게 결정됩니다."
    },
    {
      "title": "[심화] 절대값을 포함한 부정적분",
      "problem": "$\\displaystyle\\int \\frac{2x}{|x|}\\,dx$ 를 구하시오. ($x \\neq 0$)",
      "steps": [
        "$x > 0$ 일 때 $|x| = x$ 이므로 $\\dfrac{2x}{|x|} = 2$. 따라서 $\\displaystyle\\int 2\\,dx = 2x + C_1$.",
        "$x < 0$ 일 때 $|x| = -x$ 이므로 $\\dfrac{2x}{|x|} = -2$. 따라서 $\\displaystyle\\int (-2)\\,dx = -2x + C_2$.",
        "이를 하나로 쓰면 $\\dfrac{2x}{|x|} = 2\\,\\text{sgn}(x)$ 이므로 적분은 $2|x| + C$.",
        "검산: $\\dfrac{d}{dx}(2|x|) = 2\\,\\text{sgn}(x) = \\dfrac{2x}{|x|}$. 올바르다."
      ],
      "answer": "$2|x| + C$",
      "lesson": "절대값이 포함된 함수는 구간을 나누어 처리한 뒤, 결과를 절대값으로 통합할 수 있는지 확인하세요."
    }
  ],
  "problems": [
    {
      "id": "1-1",
      "type": "text",
      "difficulty": 1,
      "question": "$\\displaystyle\\int x^3\\,dx$ 의 결과는? (식, +C 포함, 예: x^4/4+C)",
      "answer": "x^4/4+C",
      "hints": [
        "지수를 $1$ 올리세요.",
        "그 새 지수로 나누세요.",
        "$+C$ 를 빠뜨리지 마세요."
      ],
      "explanation": "$\\displaystyle\\int x^3\\,dx = \\dfrac{x^4}{4} + C$.",
      "wrongAnalysis": "$+C$ 를 빠뜨리는 실수가 매우 흔합니다. 부정적분은 항상 상수를 포함합니다."
    },
    {
      "id": "1-4",
      "type": "choice",
      "difficulty": 2,
      "question": "$\\displaystyle\\int \\frac{1}{x}\\,dx$ 의 결과는?",
      "choices": [
        "$\\ln x + C$",
        "$\\ln|x| + C$",
        "$\\dfrac{x^0}{0} + C$",
        "$\\dfrac{1}{x^2} + C$"
      ],
      "answer": "$\\ln|x| + C$",
      "hints": [
        "$\\dfrac{1}{x} = x^{-1}$ 이지만 $n = -1$ 일 때 거듭제곱 공식은 적용할 수 없습니다.",
        "절댓값 기호가 필요한 이유를 생각해 보세요."
      ],
      "explanation": "$\\displaystyle\\int \\frac{1}{x}\\,dx = \\ln|x| + C$ 입니다. $x < 0$ 일 때도 정의되어야 하므로 절댓값이 필요합니다.",
      "wrongAnalysis": "$\\ln x + C$ 로 절댓값을 빠뜨리는 실수가 흔합니다. 또한 거듭제곱 공식 $\\dfrac{x^{n+1}}{n+1}$ 에서 $n = -1$ 은 분모가 $0$ 이 되어 적용 불가합니다."
    },
    {
      "id": "1-5",
      "type": "number",
      "difficulty": 3,
      "question": "$F(x) = \\displaystyle\\int (6x^2 - 4x + 1)\\,dx$ 이고 $F(1) = 5$ 일 때, $F(2)$ 의 값은?",
      "answer": "14",
      "hints": [
        "먼저 부정적분을 구한 뒤 $F(1) = 5$ 조건으로 $C$ 를 결정하세요.",
        "$F(x) = 2x^3 - 2x^2 + x + C$ 이고 $F(1) = 2 - 2 + 1 + C = 1 + C = 5$ 이므로 $C = 4$."
      ],
      "explanation": "$F(x) = 2x^3 - 2x^2 + x + C$. $F(1) = 2 - 2 + 1 + C = 1 + C = 5$ 이므로 $C = 4$. $F(2) = 2(8) - 2(4) + 2 + 4 = 16 - 8 + 2 + 4 = 14$.",
      "wrongAnalysis": "적분상수 $C$ 를 구하지 않고 $F(2) - F(1)$ 만 계산하거나, 적분 과정에서 계수를 실수하는 경우가 흔합니다."
    },
    {
      "id": "1-2",
      "type": "text",
      "difficulty": 1,
      "question": "$\\displaystyle\\int (2x + 5)\\,dx$ 의 결과는? (식, +C 포함)",
      "answer": "x^2+5x+C",
      "hints": [
        "항별로 적분하세요.",
        "$(2x)' = 2$ 이므로 $\\displaystyle\\int 2x\\,dx = x^2$."
      ],
      "explanation": "$\\displaystyle\\int 2x\\,dx = x^2,\\ \\int 5\\,dx = 5x$. 합 $= x^2 + 5x + C$.",
      "wrongAnalysis": "$x^2 + 5$ 로 적는 실수가 있습니다. 상수 $5$ 의 적분은 $5x$ 입니다."
    },
    {
      "id": "1-3",
      "type": "text",
      "difficulty": 2,
      "question": "$\\displaystyle\\int (e^x + \\sin x)\\,dx$ 의 결과는? (식, +C 포함)",
      "answer": "e^x-cosx+C",
      "hints": [
        "$\\displaystyle\\int e^x\\,dx = e^x$.",
        "$\\displaystyle\\int \\sin x\\,dx = -\\cos x$."
      ],
      "explanation": "$e^x + (-\\cos x) + C = e^x - \\cos x + C$.",
      "wrongAnalysis": "$\\sin x$ 의 적분을 $\\cos x$ 로 잘못 쓰는 실수가 매우 흔합니다. 부호 $-$ 를 잊지 마세요."
    }
  ],
  "summary": {
    "keyPoints": [
      "부정적분 $=$ 미분의 역연산",
      "결과에는 항상 $+C$",
      "검산은 다시 미분"
    ],
    "formulas": [
      "\\int x^n\\,dx = \\frac{x^{n+1}}{n+1} + C",
      "\\int \\frac{1}{x}\\,dx = \\ln|x|+C",
      "\\int \\sin x\\,dx = -\\cos x + C"
    ],
    "commonMistakes": [
      "적분상수 $+C$ 누락",
      "$\\sin$ 적분의 부호 실수"
    ],
    "nextConnection": "적분을 일정 구간에 대해 정의하면 '정적분' 이 되며, 그래프 아래 넓이를 정확히 계산할 수 있습니다."
  }
},
{
  "id": 2,
  "title": "정적분",
  "category": "적분",
  "level": "기초",
  "question": "곡선 아래의 넓이를 어떻게 정확하게 계산할 수 있을까?",
  "concept": {
    "intro": ":::definition[정적분]\n정적분 $\\displaystyle\\int_a^b f(x)\\,dx$ 는 함수의 그래프와 $x$축, $x=a$, $x=b$ 사이의 '부호 있는 넓이'입니다.\n:::\n\n원래는 잘게 자른 직사각형들의 넓이를 더한 리만 합의 극한으로 정의되지만, 실제 계산은 다음 단원의 '미적분의 기본정리'를 통해 매우 간단해집니다.",
    "intuition": "넓은 호수의 면적을 모눈종이로 추정한다고 생각해 보세요. 칸을 잘게 쪼갤수록 정확해집니다. 정적분은 그 한계점입니다.",
    "formula": "\\int_a^b f(x)\\,dx = \\lim_{n \\to \\infty} \\sum_{k} f(x_k)\\,\\Delta x\n\\text{부호: }f > 0 \\to +,\\ f < 0 \\to -",
    "summary": "• 정적분 $=$ 부호 있는 넓이\n• 직접 계산은 다음 단원의 정리로\n• 적분 구간을 바꾸면 부호도 바뀜",
    "visuals": [
      {
        "type": "function",
        "title": "정적분 = 곡선 아래 넓이 (부호 포함)",
        "xRange": [-1, 5],
        "yRange": [-2, 6],
        "functions": [
          { "expr": "x^2 - 2*x + 1", "color": "#6366f1", "label": "f(x) = x²−2x+1" }
        ],
        "regions": [
          { "fn": "x^2 - 2*x + 1", "from": 0, "to": 3, "color": "rgba(99,102,241,0.2)" }
        ],
        "points": [
          { "x": 0, "y": 1, "label": "a=0", "color": "#10b981" },
          { "x": 3, "y": 4, "label": "b=3", "color": "#ef4444" }
        ],
        "annotations": [
          { "x": 1.5, "y": 1.5, "text": "∫₀³ f(x)dx", "color": "#6366f1" }
        ]
      }
    ]
  },
  "examples": [
    {
      "title": "[기본] 직사각형 넓이 확인",
      "problem": "$\\displaystyle\\int_0^3 2\\,dx$ 를 구하시오.",
      "steps": [
        "$f(x) = 2$ 의 그래프 아래 직사각형 넓이.",
        "가로 $3$, 세로 $2 \\;\\Rightarrow\\; 6$."
      ],
      "answer": "$6$",
      "lesson": "상수함수의 정적분은 가로(구간 길이) $\\times$ 세로(상수값) 인 직사각형 넓이입니다."
    },
    {
      "title": "[기본] 삼각형 넓이와 정적분",
      "problem": "$\\displaystyle\\int_0^4 x\\,dx$ 를 구하시오.",
      "steps": [
        "$y = x$ 의 그래프 아래, $x = 0$ 에서 $x = 4$ 까지의 넓이는 밑변 $4$, 높이 $4$ 인 직각삼각형이다.",
        "삼각형 넓이: $\\dfrac{1}{2} \\times 4 \\times 4 = 8$.",
        "정적분으로 확인: $\\left[\\dfrac{x^2}{2}\\right]_0^4 = \\dfrac{16}{2} = 8$."
      ],
      "answer": "$8$",
      "lesson": "일차함수의 정적분은 삼각형이나 사다리꼴의 넓이 공식으로 검산할 수 있습니다."
    },
    {
      "title": "[응용] 홀함수의 대칭 구간 적분",
      "problem": "$\\displaystyle\\int_{-2}^{2} x^3\\,dx$ 를 구하시오.",
      "steps": [
        "$f(x) = x^3$ 은 홀함수이다: $f(-x) = -f(x)$.",
        "홀함수를 대칭 구간 $[-a, a]$ 에서 적분하면 양과 음의 넓이가 완전히 상쇄된다.",
        "따라서 $\\displaystyle\\int_{-2}^{2} x^3\\,dx = 0$."
      ],
      "answer": "$0$",
      "lesson": "홀함수의 대칭 구간 적분은 항상 $0$ 입니다. 계산 전에 대칭성을 확인하면 시간을 절약할 수 있습니다."
    },
    {
      "title": "[응용] 정적분의 성질 활용",
      "problem": "$\\displaystyle\\int_0^3 f(x)\\,dx = 7$, $\\displaystyle\\int_0^5 f(x)\\,dx = 12$ 일 때, $\\displaystyle\\int_3^5 f(x)\\,dx$ 를 구하시오.",
      "steps": [
        "정적분의 구간 분할 성질: $\\displaystyle\\int_0^5 f\\,dx = \\int_0^3 f\\,dx + \\int_3^5 f\\,dx$.",
        "$12 = 7 + \\displaystyle\\int_3^5 f\\,dx$.",
        "$\\displaystyle\\int_3^5 f\\,dx = 5$."
      ],
      "answer": "$5$",
      "lesson": "적분의 구간 분할 성질 $\\int_a^c f = \\int_a^b f + \\int_b^c f$ 를 이용하면 부분 정보로부터 나머지를 구할 수 있습니다."
    },
    {
      "title": "[심화] 리만 합의 극한으로 정적분 계산",
      "problem": "$\\lim_{n \\to \\infty} \\displaystyle\\sum_{k=1}^{n} \\dfrac{1}{n}\\left(\\dfrac{k}{n}\\right)^2$ 를 정적분으로 표현하고 값을 구하시오.",
      "steps": [
        "$\\Delta x = \\dfrac{1}{n}$, $x_k = \\dfrac{k}{n}$ 으로 놓으면 이는 $f(x) = x^2$ 의 $[0,1]$ 구간 리만 합이다.",
        "$\\displaystyle\\sum_{k=1}^{n} f(x_k)\\,\\Delta x = \\int_0^1 x^2\\,dx$.",
        "$\\displaystyle\\int_0^1 x^2\\,dx = \\left[\\dfrac{x^3}{3}\\right]_0^1 = \\dfrac{1}{3}$."
      ],
      "answer": "$\\dfrac{1}{3}$",
      "lesson": "$\\sum \\frac{1}{n} f\\!\\left(\\frac{k}{n}\\right)$ 꼴의 극한은 $\\int_0^1 f(x)\\,dx$ 로 변환됩니다. 리만 합과 정적분의 연결을 기억하세요."
    }
  ],
  "problems": [
    {
      "id": "2-1",
      "type": "number",
      "difficulty": 1,
      "question": "$\\displaystyle\\int_0^4 3\\,dx$ 의 값은?",
      "answer": "12",
      "hints": [
        "상수함수 $f(x)=3$의 그래프 아래 넓이를 구합니다.",
        "구간 길이는 $4-0=4$이고 높이는 $3$입니다."
      ],
      "explanation": "$\\int_0^4 3\\,dx$는 높이 $3$, 밑변 $4$인 직사각형의 넓이입니다. 따라서 $3\\times 4=12$입니다.",
      "wrongAnalysis": "$f(x)=3$ 자체를 답으로 적는 실수가 있습니다. 적분은 누적이며, 구간 길이가 반영됩니다."
    },
    {
      "id": "2-2",
      "type": "number",
      "difficulty": 2,
      "question": "$\\displaystyle\\int_0^2 x\\,dx$ 의 값은?",
      "answer": "2",
      "hints": [
        "직선 $y=x,\\ x=0,\\ x=2,\\ x$축 사이 삼각형 넓이.",
        "밑변 $2$, 높이 $2$."
      ],
      "explanation": "삼각형 넓이 $= \\dfrac{1}{2}\\cdot 2\\cdot 2 = 2$.",
      "wrongAnalysis": "삼각형 넓이를 직사각형으로 잘못 보아 $4$ 라고 답하는 실수가 흔합니다."
    },
    {
      "id": "2-3",
      "type": "number",
      "difficulty": 3,
      "question": "$\\displaystyle\\int_{-1}^{1} x\\,dx$ 의 값은?",
      "answer": "0",
      "hints": [
        "그래프를 그려보세요.",
        "$x < 0$ 영역의 넓이는 음수, $x > 0$ 영역은 양수.",
        "대칭이라면?"
      ],
      "explanation": "$y=x$ 는 홀함수이고 구간이 대칭이므로 양·음 부분이 상쇄되어 $0$.",
      "wrongAnalysis": "절댓값을 씌워 $1$ 이라고 답하는 실수가 있습니다. 정적분은 부호 있는 넓이입니다."
    },
    {
      "id": "2-4",
      "type": "choice",
      "difficulty": 1,
      "question": "$\\displaystyle\\int_a^a f(x)\\,dx$ 의 값은?",
      "choices": [
        "$f(a)$",
        "$0$",
        "$1$",
        "정의되지 않음"
      ],
      "answer": "$0$",
      "hints": [
        "구간의 길이가 $0$ 인 경우를 생각해 보세요.",
        "적분은 넓이이므로, 가로 길이가 $0$ 이면 넓이도 $0$ 입니다."
      ],
      "explanation": "적분 구간의 시작과 끝이 같으면 구간의 길이가 $0$ 이므로 $\\displaystyle\\int_a^a f(x)\\,dx = 0$ 입니다.",
      "wrongAnalysis": "$f(a)$ 를 답으로 적는 실수가 있습니다. 정적분은 함숫값이 아니라 넓이(누적량)이며, 구간 길이가 $0$ 이면 결과도 $0$ 입니다."
    },
    {
      "id": "2-5",
      "type": "number",
      "difficulty": 2,
      "question": "$\\displaystyle\\int_1^3 (x + 1)\\,dx$ 의 값은?",
      "answer": "6",
      "hints": [
        "$y = x + 1$ 의 그래프 아래 넓이를 사다리꼴로 볼 수 있습니다.",
        "사다리꼴 넓이 $= \\dfrac{(\\text{윗변} + \\text{아랫변})}{2} \\times \\text{높이} = \\dfrac{(2 + 4)}{2} \\times 2$."
      ],
      "explanation": "$\\displaystyle\\int_1^3 (x+1)\\,dx = \\left[\\dfrac{x^2}{2} + x\\right]_1^3 = \\left(\\dfrac{9}{2} + 3\\right) - \\left(\\dfrac{1}{2} + 1\\right) = \\dfrac{15}{2} - \\dfrac{3}{2} = 6$. 사다리꼴 넓이로도 확인 가능합니다.",
      "wrongAnalysis": "원시함수의 양 끝값 차를 구할 때 $F(b)$ 만 계산하고 $F(a)$ 를 빼는 것을 잊는 실수가 흔합니다."
    }
  ],
  "summary": {
    "keyPoints": [
      "정적분은 부호 있는 넓이",
      "리만 합의 극한",
      "대칭 함수에서는 적분 성질 활용"
    ],
    "formulas": [
      "\\int_a^b f(x)\\,dx",
      "\\int_a^b f = -\\int_b^a f",
      "\\int_a^a f = 0"
    ],
    "commonMistakes": [
      "부호 무시",
      "구간 길이를 잊고 함숫값만 답하는 실수"
    ],
    "nextConnection": "정적분을 직접 계산하는 강력한 도구가 곧 등장합니다. 미적분의 기본정리(FTC)가 미분과 적분을 한 줄로 묶어줍니다."
  }
},
{
  "id": 3,
  "title": "미적분의 기본정리",
  "category": "적분",
  "level": "중급",
  "question": "미분과 적분이 어떻게 서로 '역연산'으로 연결되어 있을까?",
  "concept": {
    "intro": "미적분의 기본정리(FTC) 는 미분과 적분이 본질적으로 같은 동전의 양면임을 보여줍니다.\n\n:::theorem[미적분의 기본정리 (FTC)]\n**제1 기본정리:** $F(x) = \\displaystyle\\int_a^x f(t)\\,dt$ 면 $F'(x) = f(x)$.\n\n**제2 기본정리:** $\\displaystyle\\int_a^b f(x)\\,dx = F(b) - F(a)$. ($F$ 는 $f$ 의 임의의 원시함수)\n:::\n\n즉, '원시함수의 양 끝값의 차'만 계산하면 적분이 끝납니다.\n\n:::proof[제1 기본정리 증명]\n$f$가 $[a,b]$에서 연속이면, $F(x) = \\int_a^x f(t)\\,dt$로 정의된 함수 $F$는 $(a,b)$에서 미분가능하고 $F'(x) = f(x)$이다.\n\n임의의 $x \\in (a,b)$를 고정하자. $h \\neq 0$일 때 $\\dfrac{F(x+h) - F(x)}{h} = \\dfrac{1}{h}\\int_x^{x+h} f(t)\\,dt$이다. $f$가 $x$에서 연속이므로, 임의의 $\\varepsilon > 0$에 대해 $\\delta > 0$이 존재하여 $|t - x| < \\delta$이면 $|f(t) - f(x)| < \\varepsilon$이다. $|h| < \\delta$이면, $x$와 $x+h$ 사이의 모든 $t$에 대해 $|f(t) - f(x)| < \\varepsilon$이다. 따라서 $\\left|\\dfrac{F(x+h)-F(x)}{h} - f(x)\\right| = \\left|\\dfrac{1}{h}\\int_x^{x+h}[f(t)-f(x)]\\,dt\\right| \\leq \\dfrac{1}{|h|} \\cdot |h| \\cdot \\varepsilon = \\varepsilon$이다. 따라서 $\\lim_{h \\to 0} \\dfrac{F(x+h)-F(x)}{h} = f(x)$, 즉 $F'(x) = f(x)$이다. $\\square$\n:::\n\n:::proof[제2 기본정리 증명]\n$f$가 $[a,b]$에서 연속이고 $F$가 $f$의 원시함수 ($F' = f$)이면, $\\int_a^b f(x)\\,dx = F(b) - F(a)$이다.\n\n$G(x) = \\int_a^x f(t)\\,dt$라 하면, 제1 기본정리에 의해 $G'(x) = f(x) = F'(x)$이다. 따라서 $(F - G)'(x) = 0$이므로, $F(x) - G(x) = C$ (상수)이다. $x = a$를 대입하면 $F(a) - G(a) = F(a) - 0 = F(a) = C$이다. 따라서 $G(x) = F(x) - F(a)$이다. $x = b$를 대입하면 $\\int_a^b f(t)\\,dt = G(b) = F(b) - F(a)$이다. $\\square$\n:::\n\n:::note[핵심 포인트]\n제1 기본정리의 핵심은 연속함수의 적분 함수가 미분가능하며 그 도함수가 원래 함수라는 점이고, 제2 기본정리는 이를 이용하여 정적분을 원시함수의 양 끝값의 차로 계산할 수 있게 해줍니다.\n:::",
    "intuition": "속도 곡선 아래 넓이가 '이동 거리' 이듯, 변화율을 누적하면 원래 양의 변화량이 됩니다. 결국 적분은 '도착 $-$ 출발' 입니다.",
    "formula": "\\text{FTC 1:}\\ \\frac{d}{dx} \\int_a^x f(t)\\,dt = f(x)\n\\text{FTC 2:}\\ \\int_a^b f(x)\\,dx = F(b) - F(a),\\ F' = f",
    "summary": "• 미분과 적분은 짝꿍\n• 적분 계산은 '$F(b) - F(a)$'\n• FTC1 은 적분 함수의 미분",
    "visuals": [
      {
        "type": "function",
        "title": "FTC: F(x) = ∫₀ˣ f(t)dt 는 넓이 누적 함수",
        "xRange": [-1, 5],
        "yRange": [-1, 5],
        "functions": [
          { "expr": "sin(x) + 1", "color": "#6366f1", "label": "f(x) = sin x + 1" }
        ],
        "regions": [
          { "fn": "sin(x) + 1", "from": 0, "to": 3, "color": "rgba(16,185,129,0.2)" }
        ],
        "annotations": [
          { "x": 1.5, "y": 0.5, "text": "F(3) = 넓이", "color": "#10b981" },
          { "x": 3.5, "y": 3.5, "text": "F'(x) = f(x)", "color": "#6366f1" }
        ]
      }
    ]
  },
  "examples": [
    {
      "title": "[기본] FTC 로 적분 계산",
      "problem": "$\\displaystyle\\int_1^3 x^2\\,dx$ 를 구하시오.",
      "steps": [
        "$F(x) = \\dfrac{x^3}{3}$.",
        "$F(3) - F(1) = \\dfrac{27}{3} - \\dfrac{1}{3} = \\dfrac{26}{3}$."
      ],
      "answer": "$\\dfrac{26}{3}$",
      "lesson": "원시함수만 찾을 수 있다면 정적분 계산은 빼기 한 번으로 끝입니다."
    },
    {
      "title": "[기본] 삼각함수의 정적분",
      "problem": "$\\displaystyle\\int_0^{\\pi} \\sin x\\,dx$ 를 구하시오.",
      "steps": [
        "$\\sin x$ 의 원시함수는 $-\\cos x$ 이다.",
        "$[-\\cos x]_0^{\\pi} = -\\cos\\pi - (-\\cos 0) = -(-1) - (-1) = 1 + 1 = 2$."
      ],
      "answer": "$2$",
      "lesson": "삼각함수의 정적분도 원시함수를 찾아 양 끝값의 차를 구하면 됩니다. $\\cos\\pi = -1$, $\\cos 0 = 1$ 을 정확히 기억하세요."
    },
    {
      "title": "[응용] FTC 제1정리와 연쇄법칙",
      "problem": "$g(x) = \\displaystyle\\int_0^{x^3} \\sin t\\,dt$ 일 때, $g'(x)$ 를 구하시오.",
      "steps": [
        "FTC 제1정리: $\\dfrac{d}{dx}\\displaystyle\\int_a^x f(t)\\,dt = f(x)$.",
        "상한이 $x^3$ 이므로 연쇄법칙 적용이 필요하다.",
        "$g'(x) = \\sin(x^3) \\cdot \\dfrac{d}{dx}(x^3) = 3x^2 \\sin(x^3)$."
      ],
      "answer": "$3x^2 \\sin(x^3)$",
      "lesson": "적분의 상한이 $x$ 의 함수일 때, FTC 제1정리에 연쇄법칙을 반드시 결합해야 합니다. 상한의 도함수를 곱하는 것을 잊지 마세요."
    },
    {
      "title": "[응용] FTC 를 이용한 넓이 함수 분석",
      "problem": "$F(x) = \\displaystyle\\int_1^x (3t^2 - 6t)\\,dt$ 의 극솟값을 구하시오.",
      "steps": [
        "FTC 제1정리에 의해 $F'(x) = 3x^2 - 6x = 3x(x - 2)$.",
        "$F'(x) = 0$ 이면 $x = 0$ 또는 $x = 2$.",
        "$F''(x) = 6x - 6$. $F''(2) = 6 > 0$ 이므로 $x = 2$ 에서 극솟값.",
        "$F(2) = \\displaystyle\\int_1^2 (3t^2 - 6t)\\,dt = [t^3 - 3t^2]_1^2 = (8-12) - (1-3) = -4 + 2 = -2$."
      ],
      "answer": "$F(2) = -2$",
      "lesson": "적분으로 정의된 함수의 극값은 FTC 로 도함수를 구한 뒤 일반적인 극값 분석을 적용하면 됩니다."
    },
    {
      "title": "[심화] 양 끝이 모두 변수인 적분의 미분",
      "problem": "$h(x) = \\displaystyle\\int_{\\sin x}^{x^2} e^{t^2}\\,dt$ 일 때, $h'(x)$ 를 구하시오.",
      "steps": [
        "구간 분할: $h(x) = \\displaystyle\\int_0^{x^2} e^{t^2}\\,dt - \\int_0^{\\sin x} e^{t^2}\\,dt$.",
        "각각 FTC 제1정리 + 연쇄법칙 적용.",
        "첫 항: $\\dfrac{d}{dx}\\displaystyle\\int_0^{x^2} e^{t^2}\\,dt = e^{(x^2)^2} \\cdot 2x = 2x\\,e^{x^4}$.",
        "둘째 항: $\\dfrac{d}{dx}\\displaystyle\\int_0^{\\sin x} e^{t^2}\\,dt = e^{\\sin^2 x} \\cdot \\cos x$.",
        "$h'(x) = 2x\\,e^{x^4} - \\cos x\\,e^{\\sin^2 x}$."
      ],
      "answer": "$2x\\,e^{x^4} - \\cos x\\,e^{\\sin^2 x}$",
      "lesson": "양 끝이 모두 $x$ 의 함수일 때는 중간에 상수 지점을 넣어 두 적분으로 분할한 뒤 각각 FTC 와 연쇄법칙을 적용합니다."
    }
  ],
  "problems": [
    {
      "id": "3-1",
      "type": "number",
      "difficulty": 1,
      "question": "$\\displaystyle\\int_0^2 3x^2\\,dx$ 의 값은?",
      "answer": "8",
      "hints": [
        "원시함수는 $x^3$.",
        "$F(2) - F(0) = 8 - 0$."
      ],
      "explanation": "$F(x)=x^3,\\ F(2)-F(0) = 8$.",
      "wrongAnalysis": "$3x^2$ 의 원시함수를 $\\dfrac{x^2}{2}$ 로 잘못 적는 실수가 있습니다. 항상 검산하세요."
    },
    {
      "id": "3-2",
      "type": "number",
      "difficulty": 2,
      "question": "$\\displaystyle\\int_0^{\\pi/2} \\cos x\\,dx$ 의 값은?",
      "answer": "1",
      "hints": [
        "$\\displaystyle\\int \\cos x\\,dx = \\sin x$.",
        "$\\sin(\\pi/2) - \\sin 0$."
      ],
      "explanation": "$\\sin(\\pi/2) - \\sin(0) = 1 - 0 = 1$.",
      "wrongAnalysis": "$\\cos x$ 의 원시함수를 $-\\sin x$ 로 잘못 적는 실수가 있습니다. $\\sin x$ 와 $-\\cos x$ 가 짝입니다."
    },
    {
      "id": "3-3",
      "type": "number",
      "difficulty": 3,
      "question": "$g(x) = \\displaystyle\\int_1^{x^2} \\cos t\\,dt$ 에 대해 $g'(1)$ 의 값은?",
      "answer": "1.0806",
      "hints": [
        "FTC1 과 연쇄법칙을 함께 사용.",
        "$g'(x) = \\cos(x^2)\\cdot 2x$.",
        "$x=1$ 대입: $2 \\cos 1$."
      ],
      "explanation": "$g'(x) = \\cos(x^2)\\cdot(x^2)' = 2x \\cos(x^2)$. $x=1 \\;\\Rightarrow\\; 2 \\cos 1 \\approx 1.0806$.",
      "wrongAnalysis": "연쇄법칙을 적용하지 않고 $\\cos(x^2)$ 만 답하는 실수가 흔합니다."
    },
    {
      "id": "3-4",
      "type": "choice",
      "difficulty": 1,
      "question": "$\\displaystyle\\int_0^1 (3x^2 + 1)\\,dx$ 의 값은?",
      "choices": [
        "$1$",
        "$2$",
        "$3$",
        "$4$"
      ],
      "answer": "$2$",
      "hints": [
        "원시함수 $F(x) = x^3 + x$ 를 구하세요.",
        "$F(1) - F(0) = (1 + 1) - 0 = 2$."
      ],
      "explanation": "$F(x) = x^3 + x$. $F(1) - F(0) = 2 - 0 = 2$.",
      "wrongAnalysis": "원시함수를 $3x^3 + x$ 로 잘못 구하는 실수가 있습니다. $\\displaystyle\\int 3x^2\\,dx = x^3$ 이지 $3x^3$ 이 아닙니다."
    },
    {
      "id": "3-5",
      "type": "number",
      "difficulty": 2,
      "question": "$\\displaystyle\\int_1^e \\frac{1}{x}\\,dx$ 의 값은?",
      "answer": "1",
      "hints": [
        "$\\dfrac{1}{x}$ 의 원시함수는 $\\ln|x|$ 입니다.",
        "$\\ln e - \\ln 1 = 1 - 0$."
      ],
      "explanation": "$\\displaystyle\\int_1^e \\frac{1}{x}\\,dx = [\\ln|x|]_1^e = \\ln e - \\ln 1 = 1 - 0 = 1$.",
      "wrongAnalysis": "$\\ln 1 = 1$ 로 잘못 계산하는 실수가 있습니다. $\\ln 1 = 0$ 입니다."
    }
  ],
  "summary": {
    "keyPoints": [
      "FTC 2: 적분은 원시함수의 끝값 차",
      "FTC 1: 적분 함수의 미분 $=$ 피적분함수",
      "연쇄법칙과 결합되면 강력"
    ],
    "formulas": [
      "\\int_a^b f(x)\\,dx = F(b)-F(a)",
      "\\frac{d}{dx} \\int_a^x f(t)\\,dt = f(x)"
    ],
    "commonMistakes": [
      "원시함수의 검산 누락",
      "FTC1 적용 시 연쇄법칙 누락"
    ],
    "nextConnection": "원시함수를 찾는 일이 항상 쉬운 것은 아닙니다. 다음 단원의 '치환적분'은 합성함수를 적분하는 가장 강력한 도구입니다."
  }
},
{
  "id": 4,
  "title": "치환적분",
  "category": "적분",
  "level": "중급",
  "question": "합성함수를 적분하는 가장 빠른 길은 무엇일까?",
  "concept": {
    "intro": "치환적분은 연쇄법칙의 역과정입니다. 어떤 함수의 일부를 새로운 변수 $u$ 로 두고, $du$ 를 계산해 피적분함수와 미분소를 모두 $u$ 의 식으로 바꿉니다.\n\n:::note[핵심 전략]\n'$u$ 와 $du$ 가 동시에 보이는 부분 찾기'가 치환적분의 핵심입니다.\n:::\n\n:::theorem[치환적분 공식]\n$g$가 $[a,b]$에서 미분가능하고 $g'$가 연속이며, $f$가 $g$의 치역을 포함하는 구간에서 연속이면,\n$$\\int_a^b f(g(x))\\,g'(x)\\,dx = \\int_{g(a)}^{g(b)} f(u)\\,du$$\n:::\n\n:::proof[치환적분 공식 유도]\n$f$가 연속이므로 원시함수 $F$가 존재하여 $F' = f$이다 (FTC 제1 기본정리에 의해). 합성함수 $F(g(x))$에 연쇄법칙(chain rule)을 적용하면 $\\dfrac{d}{dx}[F(g(x))] = F'(g(x)) \\cdot g'(x) = f(g(x)) \\cdot g'(x)$이다. 따라서 $F(g(x))$는 $f(g(x))g'(x)$의 원시함수이다. FTC 제2 기본정리를 적용하면 $\\int_a^b f(g(x))\\,g'(x)\\,dx = F(g(b)) - F(g(a))$이다. 한편 $\\int_{g(a)}^{g(b)} f(u)\\,du = F(g(b)) - F(g(a))$이다 (다시 FTC 제2 기본정리). 양변이 같으므로 $\\int_a^b f(g(x))\\,g'(x)\\,dx = \\int_{g(a)}^{g(b)} f(u)\\,du$이다. $\\square$\n:::\n\n:::note[참고]\n이 유도에서 치환 $u = g(x)$는 단순한 '변수 교체'가 아니라, 연쇄법칙과 미적분의 기본정리를 결합한 논리적 귀결임을 알 수 있습니다. $du = g'(x)\\,dx$라는 표기는 이 관계를 미분소(differential) 기호로 압축한 것입니다.\n:::",
    "intuition": "복잡한 길을 다시 새로운 이름의 좌표계로 풀어 쓰는 것과 같습니다. 좌표계가 바뀌면 식이 훨씬 단순해질 때가 많습니다.",
    "formula": "u = g(x),\\ du = g'(x)\\,dx\n\\int f(g(x))\\,g'(x)\\,dx = \\int f(u)\\,du",
    "summary": "• $u$ 와 $du$ 가 동시에 보이는 형태 찾기\n• 정적분이면 한계도 함께 바꿀 것\n• 변수 환원은 마지막 단계",
    "visuals": [
      {
        "type": "function",
        "title": "치환 u = x² 에 의한 변환",
        "xRange": [-1, 4],
        "yRange": [-0.5, 3],
        "functions": [
          { "expr": "x * exp(-x^2/2)", "color": "#6366f1", "label": "x·e^(−x²/2)" }
        ],
        "regions": [
          { "fn": "x * exp(-x^2/2)", "from": 0, "to": 3, "color": "rgba(99,102,241,0.15)" }
        ],
        "annotations": [
          { "x": 2, "y": 2, "text": "u = x² 로 치환", "color": "#ef4444" }
        ]
      }
    ]
  },
  "examples": [
    {
      "title": "[기본] 기본 치환",
      "problem": "$\\displaystyle\\int 2x\\,(x^2 + 1)^5\\,dx$ 를 구하시오.",
      "steps": [
        "$u = x^2 + 1,\\ du = 2x\\,dx$.",
        "$\\displaystyle\\int u^5\\,du = \\dfrac{u^6}{6}$.",
        "원래 변수로 환원: $\\dfrac{(x^2+1)^6}{6} + C$."
      ],
      "answer": "$\\dfrac{(x^2+1)^6}{6} + C$",
      "lesson": "안쪽 함수의 미분이 피적분함수에 곱해져 있다면, 치환을 의심해 보세요."
    },
    {
      "title": "[기본] 지수함수의 치환적분",
      "problem": "$\\displaystyle\\int e^{3x}\\,dx$ 를 구하시오.",
      "steps": [
        "$u = 3x$ 로 치환하면 $du = 3\\,dx$, 즉 $dx = \\dfrac{du}{3}$.",
        "$\\displaystyle\\int e^u \\cdot \\dfrac{du}{3} = \\dfrac{1}{3}e^u + C$.",
        "원래 변수로 환원: $\\dfrac{1}{3}e^{3x} + C$."
      ],
      "answer": "$\\dfrac{1}{3}e^{3x} + C$",
      "lesson": "$e^{ax}$ 의 적분은 $\\dfrac{1}{a}e^{ax} + C$ 입니다. 안쪽 함수의 미분 계수 $a$ 의 역수가 앞에 붙습니다."
    },
    {
      "title": "[응용] 정적분에서의 치환 — 한계 변환",
      "problem": "$\\displaystyle\\int_0^{\\pi/2} \\sin^3 x \\cos x\\,dx$ 를 구하시오.",
      "steps": [
        "$u = \\sin x$ 로 치환하면 $du = \\cos x\\,dx$.",
        "한계 변환: $x = 0 \\to u = 0$, $x = \\pi/2 \\to u = 1$.",
        "$\\displaystyle\\int_0^1 u^3\\,du = \\left[\\dfrac{u^4}{4}\\right]_0^1 = \\dfrac{1}{4}$."
      ],
      "answer": "$\\dfrac{1}{4}$",
      "lesson": "정적분에서 치환할 때 적분 한계도 반드시 새 변수에 맞춰 바꿔야 합니다. 한계를 바꾸면 원래 변수로 되돌릴 필요가 없습니다."
    },
    {
      "title": "[응용] 계수 조정이 필요한 치환",
      "problem": "$\\displaystyle\\int x^2\\sqrt{x^3 + 1}\\,dx$ 를 구하시오.",
      "steps": [
        "$u = x^3 + 1$ 로 치환하면 $du = 3x^2\\,dx$, 즉 $x^2\\,dx = \\dfrac{du}{3}$.",
        "$\\displaystyle\\int \\sqrt{u} \\cdot \\dfrac{du}{3} = \\dfrac{1}{3} \\cdot \\dfrac{u^{3/2}}{3/2} = \\dfrac{2}{9}u^{3/2} + C$.",
        "원래 변수로 환원: $\\dfrac{2}{9}(x^3+1)^{3/2} + C$."
      ],
      "answer": "$\\dfrac{2}{9}(x^3+1)^{3/2} + C$",
      "lesson": "$du$ 와 피적분함수에 있는 미분소가 상수배 차이일 때는 상수 계수를 조정하여 치환을 완성합니다."
    },
    {
      "title": "[심화] 역치환 — $u = \\sqrt{x}$ 형태",
      "problem": "$\\displaystyle\\int \\frac{e^{\\sqrt{x}}}{\\sqrt{x}}\\,dx$ 를 구하시오.",
      "steps": [
        "$u = \\sqrt{x}$ 로 치환하면 $du = \\dfrac{1}{2\\sqrt{x}}\\,dx$, 즉 $\\dfrac{dx}{\\sqrt{x}} = 2\\,du$.",
        "$\\displaystyle\\int \\frac{e^{\\sqrt{x}}}{\\sqrt{x}}\\,dx = \\int e^u \\cdot 2\\,du = 2e^u + C$.",
        "원래 변수로 환원: $2e^{\\sqrt{x}} + C$."
      ],
      "answer": "$2e^{\\sqrt{x}} + C$",
      "lesson": "$\\sqrt{x}$ 가 지수나 인수에 포함되어 있으면 $u = \\sqrt{x}$ 치환을 시도하세요. $\\dfrac{dx}{\\sqrt{x}} = 2\\,du$ 관계가 핵심입니다."
    }
  ],
  "problems": [
    {
      "id": "4-1",
      "type": "text",
      "difficulty": 2,
      "question": "$\\displaystyle\\int 2x\\cos(x^2)\\,dx$ 의 결과는? (+C 포함, 예: sin(x^2)+C)",
      "answer": "sin(x^2)+C",
      "hints": [
        "$u = x^2$ 로 치환.",
        "$du = 2x\\,dx$.",
        "$\\displaystyle\\int \\cos u\\,du = \\sin u$."
      ],
      "explanation": "$u$ 대입 시 $\\displaystyle\\int \\cos u\\,du = \\sin u + C = \\sin(x^2) + C$.",
      "wrongAnalysis": "안쪽 함수의 미분 $2x$ 가 이미 들어 있다는 것을 알아채지 못하는 실수가 가장 흔합니다."
    },
    {
      "id": "4-2",
      "type": "text",
      "difficulty": 3,
      "question": "$\\displaystyle\\int x\\,e^{x^2}\\,dx$ 의 결과는? (+C 포함)",
      "answer": "(1/2)e^(x^2)+C",
      "hints": [
        "$u = x^2$ 로 두면 $du = 2x\\,dx$.",
        "$x\\,dx = \\dfrac{du}{2}$.",
        "$\\displaystyle\\int e^u \\dfrac{du}{2} = \\dfrac{1}{2} e^u$."
      ],
      "explanation": "$\\dfrac{1}{2}\\,e^{x^2} + C$.",
      "wrongAnalysis": "$\\dfrac{1}{2}$ 계수를 잊거나, $e^u$ 의 적분을 잘못 적는 실수가 있습니다."
    },
    {
      "id": "4-3",
      "type": "number",
      "difficulty": 3,
      "question": "$\\displaystyle\\int_0^1 2x\\,(x^2 + 1)^3\\,dx$ 의 값은?",
      "answer": "3.75",
      "hints": [
        "$u = x^2 + 1$.",
        "$x=0 \\to u=1,\\ x=1 \\to u=2$.",
        "$\\displaystyle\\int_1^2 u^3\\,du$."
      ],
      "explanation": "$\\displaystyle\\int_1^2 u^3\\,du = \\left[\\dfrac{u^4}{4}\\right]_1^2 = \\dfrac{16-1}{4} = \\dfrac{15}{4} = 3.75$.",
      "wrongAnalysis": "한계를 바꾸지 않거나, 변수 환원을 한 뒤 잘못된 한계를 그대로 쓰는 실수가 흔합니다."
    },
    {
      "id": "4-4",
      "type": "choice",
      "difficulty": 1,
      "question": "$\\displaystyle\\int \\cos(3x)\\,dx$ 를 치환적분으로 구하면?",
      "choices": [
        "$3\\sin(3x) + C$",
        "$\\dfrac{\\sin(3x)}{3} + C$",
        "$-\\sin(3x) + C$",
        "$\\sin(3x) + C$"
      ],
      "answer": "$\\dfrac{\\sin(3x)}{3} + C$",
      "hints": [
        "$u = 3x$ 로 치환하면 $du = 3\\,dx$, 즉 $dx = \\dfrac{du}{3}$ 입니다.",
        "$\\displaystyle\\int \\cos u \\cdot \\dfrac{du}{3} = \\dfrac{\\sin u}{3} + C$."
      ],
      "explanation": "$u = 3x$, $du = 3\\,dx$. $\\displaystyle\\int \\cos u \\cdot \\dfrac{du}{3} = \\dfrac{1}{3}\\sin u + C = \\dfrac{\\sin(3x)}{3} + C$.",
      "wrongAnalysis": "$\\dfrac{1}{3}$ 계수를 빠뜨리고 $\\sin(3x) + C$ 로 답하는 실수가 매우 흔합니다. 검산: $\\left(\\dfrac{\\sin(3x)}{3}\\right)' = \\cos(3x)$."
    },
    {
      "id": "4-5",
      "type": "number",
      "difficulty": 1,
      "question": "$\\displaystyle\\int_0^1 e^{2x}\\,dx$ 의 값은? (소수 둘째 자리까지)",
      "answer": "3.19",
      "hints": [
        "$u = 2x$ 로 치환하면 $du = 2\\,dx$.",
        "$\\displaystyle\\int e^u \\cdot \\dfrac{du}{2} = \\dfrac{e^u}{2}$.",
        "$\\dfrac{e^2 - e^0}{2} = \\dfrac{e^2 - 1}{2}$."
      ],
      "explanation": "$\\displaystyle\\int_0^1 e^{2x}\\,dx = \\dfrac{1}{2}[e^{2x}]_0^1 = \\dfrac{e^2 - 1}{2} \\approx \\dfrac{7.389 - 1}{2} \\approx 3.19$.",
      "wrongAnalysis": "$\\dfrac{1}{2}$ 계수를 잊고 $e^2 - 1 \\approx 6.39$ 로 답하는 실수가 흔합니다."
    }
  ],
  "summary": {
    "keyPoints": [
      "치환적분 $=$ 연쇄법칙의 역",
      "$u$ 와 $du$ 짝을 함께 식별",
      "정적분의 한계도 함께 바꿀 것"
    ],
    "formulas": [
      "\\int f(g(x))\\,g'(x)\\,dx = \\int f(u)\\,du"
    ],
    "commonMistakes": [
      "한계 변환 누락",
      "변수 환원 누락"
    ],
    "nextConnection": "$\\sin^m x \\cos^n x$ 꼴처럼 삼각함수끼리 곱해진 적분을 다루는 '삼각함수 적분'을 배웁니다."
  }
},
{
  "id": 7,
  "title": "부분적분",
  "category": "적분",
  "level": "중급",
  "question": "곱으로 이루어진 함수의 적분을 어떻게 다룰까?",
  "concept": {
    "intro": "부분적분은 곱의 미분의 역과정입니다.\n\n:::theorem[부분적분 공식]\n$$\\int u\\,dv = uv - \\int v\\,du$$\n이 공식을 통해 어려운 적분을 더 쉬운 적분으로 바꿉니다.\n:::\n\n:::note[LIATE 규칙]\n$u$ 와 $dv$ 를 잘 고르는 것이 핵심이며, LIATE(로그·역삼각·대수·삼각·지수) 규칙이 도움됩니다. 이 순서에서 앞에 오는 함수를 $u$로 놓으면 미분했을 때 단순해지고, 뒤에 오는 함수를 $dv$로 놓으면 적분이 쉬운 경우가 많습니다.\n:::\n\n:::proof[부분적분 공식 유도]\n두 함수 $f(x)$와 $g(x)$가 미분가능하다고 하자. 곱의 미분법에 의해 $\\dfrac{d}{dx}[f(x)\\,g(x)] = f'(x)\\,g(x) + f(x)\\,g'(x)$이다. 양변을 $a$에서 $b$까지 적분하면 FTC 제2 기본정리에 의해 좌변은 $[f(x)\\,g(x)]_a^b$이다. 이를 정리하면 $\\int_a^b f(x)\\,g'(x)\\,dx = [f(x)\\,g(x)]_a^b - \\int_a^b f'(x)\\,g(x)\\,dx$이다.\n\n부정적분 형태로 쓰면 $\\int f(x)\\,g'(x)\\,dx = f(x)\\,g(x) - \\int f'(x)\\,g(x)\\,dx$이며, $u = f(x)$, $dv = g'(x)\\,dx$로 놓으면 $du = f'(x)\\,dx$, $v = g(x)$이므로 $\\int u\\,dv = uv - \\int v\\,du$가 됩니다. $\\square$\n:::",
    "intuition": "어려운 부분을 미분 가능한 쪽에 맡기고, 적분 가능한 쪽은 그대로 두는 전략입니다. '한 사람은 미분, 한 사람은 적분'을 시키는 셈입니다.",
    "formula": "\\int u\\,dv = uv - \\int v\\,du",
    "summary": "• 곱의 미분의 역\n• $u$ 선택 우선순위: LIATE\n• 두 번 적용해야 하는 경우도 있음"
  },
  "examples": [
    {
      "title": "[기본] 기본 부분적분",
      "problem": "$\\displaystyle\\int x\\,e^x\\,dx$ 를 구하시오.",
      "steps": [
        "$u = x,\\ dv = e^x\\,dx \\;\\Rightarrow\\; du = dx,\\ v = e^x$.",
        "$\\displaystyle\\int x\\,e^x\\,dx = x e^x - \\int e^x\\,dx$.",
        "$= x e^x - e^x + C = (x-1) e^x + C$."
      ],
      "answer": "$(x-1)\\,e^x + C$",
      "lesson": "$u$ 를 다항식, $dv$ 를 지수함수로 두면 다항식의 차수가 줄어 적분이 점점 쉬워집니다."
    },
    {
      "title": "[기본] 로그함수의 부분적분",
      "problem": "$\\displaystyle\\int \\ln x\\,dx$ 를 구하시오.",
      "steps": [
        "LIATE 규칙에서 로그 $\\ln x$ 가 최우선이므로 $u = \\ln x$, $dv = dx$.",
        "$du = \\dfrac{1}{x}dx$, $v = x$.",
        "$\\displaystyle\\int \\ln x\\,dx = x\\ln x - \\int x \\cdot \\dfrac{1}{x}\\,dx = x\\ln x - \\int 1\\,dx$.",
        "$= x\\ln x - x + C$."
      ],
      "answer": "$x\\ln x - x + C$",
      "lesson": "$\\ln x$ 처럼 적분하기 어렵지만 미분하면 단순해지는 함수는 $u$ 로 두는 것이 핵심입니다."
    },
    {
      "title": "[응용] 두 번 반복하는 부분적분",
      "problem": "$\\displaystyle\\int x^2 \\cos x\\,dx$ 를 구하시오.",
      "steps": [
        "1차: $u = x^2$, $dv = \\cos x\\,dx$. $du = 2x\\,dx$, $v = \\sin x$.",
        "$x^2 \\sin x - \\displaystyle\\int 2x \\sin x\\,dx$.",
        "2차: $u = 2x$, $dv = \\sin x\\,dx$. $du = 2\\,dx$, $v = -\\cos x$.",
        "$x^2 \\sin x - \\left[-2x\\cos x + \\displaystyle\\int 2\\cos x\\,dx\\right]$.",
        "$= x^2 \\sin x + 2x\\cos x - 2\\sin x + C$."
      ],
      "answer": "$x^2 \\sin x + 2x\\cos x - 2\\sin x + C$",
      "lesson": "다항식 × 삼각함수 적분에서는 부분적분을 다항식의 차수가 $0$ 이 될 때까지 반복합니다."
    },
    {
      "title": "[응용] 순환형 부분적분",
      "problem": "$\\displaystyle\\int e^x \\sin x\\,dx$ 를 구하시오.",
      "steps": [
        "1차: $u = \\sin x$, $dv = e^x\\,dx$ $\\Rightarrow$ $e^x \\sin x - \\displaystyle\\int e^x \\cos x\\,dx$.",
        "2차: $u = \\cos x$, $dv = e^x\\,dx$ $\\Rightarrow$ $e^x \\sin x - (e^x \\cos x + \\displaystyle\\int e^x \\sin x\\,dx)$.",
        "원래 적분 $I = \\displaystyle\\int e^x \\sin x\\,dx$ 가 다시 나타난다!",
        "$I = e^x \\sin x - e^x \\cos x - I$ $\\Rightarrow$ $2I = e^x(\\sin x - \\cos x)$.",
        "$I = \\dfrac{e^x(\\sin x - \\cos x)}{2} + C$."
      ],
      "answer": "$\\dfrac{e^x(\\sin x - \\cos x)}{2} + C$",
      "lesson": "$e^x \\times$ 삼각함수 적분은 두 번 부분적분하면 원래 적분이 다시 나타나므로, 방정식을 세워 풀면 됩니다."
    },
    {
      "title": "[심화] 역삼각함수의 부분적분",
      "problem": "$\\displaystyle\\int \\arctan x\\,dx$ 를 구하시오.",
      "steps": [
        "LIATE 에서 역삼각함수(Inverse trig)를 $u$ 로 둔다: $u = \\arctan x$, $dv = dx$.",
        "$du = \\dfrac{1}{1+x^2}dx$, $v = x$.",
        "$\\displaystyle\\int \\arctan x\\,dx = x\\arctan x - \\int \\dfrac{x}{1+x^2}\\,dx$.",
        "$\\displaystyle\\int \\dfrac{x}{1+x^2}\\,dx$ 에서 $w = 1+x^2$, $dw = 2x\\,dx$ 로 치환: $\\dfrac{1}{2}\\ln(1+x^2)$.",
        "$= x\\arctan x - \\dfrac{1}{2}\\ln(1+x^2) + C$."
      ],
      "answer": "$x\\arctan x - \\dfrac{1}{2}\\ln(1+x^2) + C$",
      "lesson": "역삼각함수는 미분하면 유리함수가 되므로 부분적분의 $u$ 로 적합합니다. 남은 적분은 치환으로 처리합니다."
    }
  ],
  "problems": [
    {
      "id": "7-1",
      "type": "text",
      "difficulty": 2,
      "question": "$\\displaystyle\\int x\\cos x\\,dx$ 의 결과는? (+C 포함)",
      "answer": "xsinx+cosx+C",
      "hints": [
        "$u = x,\\ dv = \\cos x\\,dx$.",
        "$du = dx,\\ v = \\sin x$.",
        "공식 적용 후 $\\displaystyle\\int \\sin x\\,dx$ 를 처리하세요."
      ],
      "explanation": "$x \\sin x - \\displaystyle\\int \\sin x\\,dx = x \\sin x + \\cos x + C$.",
      "wrongAnalysis": "$u$ 와 $dv$ 의 선택을 반대로 해 식이 복잡해지는 실수가 흔합니다. 다항식을 $u$ 로 두는 것이 기본 전략."
    },
    {
      "id": "7-2",
      "type": "text",
      "difficulty": 3,
      "question": "$\\displaystyle\\int \\ln x\\,dx$ 의 결과는? (+C 포함)",
      "answer": "xlnx-x+C",
      "hints": [
        "$u = \\ln x,\\ dv = dx$.",
        "$du = \\dfrac{1}{x}dx,\\ v = x$.",
        "공식 적용."
      ],
      "explanation": "$x \\ln x - \\displaystyle\\int x\\cdot\\dfrac{1}{x}\\,dx = x \\ln x - x + C$.",
      "wrongAnalysis": "$\\ln x$ 의 원시함수를 무작정 추측하다 틀리는 경우가 많습니다. 부분적분으로 깔끔히 유도하세요."
    },
    {
      "id": "7-3",
      "type": "text",
      "difficulty": 3,
      "question": "$\\displaystyle\\int x^2\\,e^x\\,dx$ 의 결과는? (+C 포함)",
      "answer": "(x^2-2x+2)e^x+C",
      "hints": [
        "$u = x^2,\\ dv = e^x\\,dx$.",
        "한 번 적용 후 또다시 부분적분.",
        "$(x^2) \\to (2x) \\to (2)$ 로 차수 감소."
      ],
      "explanation": "두 번의 부분적분 결과 $(x^2 - 2x + 2)\\,e^x + C$.",
      "wrongAnalysis": "중간 부호 처리 실수가 매우 흔합니다. 두 번째 적용에서 $-$ 와 $+$ 가 헷갈리지 않도록 단계마다 확인하세요."
    },
    {
      "id": "7-4",
      "type": "choice",
      "difficulty": 1,
      "question": "부분적분 $\\displaystyle\\int u\\,dv = uv - \\int v\\,du$ 에서 $\\displaystyle\\int x\\,e^x\\,dx$ 를 구할 때, $u$ 와 $dv$ 의 올바른 선택은?",
      "choices": [
        "$u = x,\\ dv = e^x\\,dx$",
        "$u = e^x,\\ dv = x\\,dx$",
        "$u = xe^x,\\ dv = dx$",
        "$u = 1,\\ dv = xe^x\\,dx$"
      ],
      "answer": "$u = x,\\ dv = e^x\\,dx$",
      "hints": [
        "LIATE 규칙을 떠올려 보세요: 로그 > 역삼각 > 대수(다항식) > 삼각 > 지수.",
        "다항식 $x$ 가 지수함수 $e^x$ 보다 LIATE 순서에서 앞에 오므로 $u = x$ 로 둡니다."
      ],
      "explanation": "LIATE 규칙에 따라 다항식 $x$ 를 $u$ 로, 지수함수 $e^x\\,dx$ 를 $dv$ 로 두면 $du = dx$, $v = e^x$ 가 되어 적분이 더 단순해집니다.",
      "wrongAnalysis": "$u$ 와 $dv$ 를 반대로 선택하면 $\\displaystyle\\int v\\,du = \\int \\dfrac{x^2}{2}\\,e^x\\,dx$ 처럼 오히려 복잡해집니다."
    },
    {
      "id": "7-5",
      "type": "number",
      "difficulty": 1,
      "question": "$\\displaystyle\\int_0^1 x\\,e^x\\,dx$ 의 값은? (소수 둘째 자리까지)",
      "answer": "1.00",
      "hints": [
        "부분적분 결과: $\\displaystyle\\int x\\,e^x\\,dx = (x-1)e^x + C$.",
        "$[(x-1)e^x]_0^1 = (0)e^1 - (-1)e^0 = 0 + 1$."
      ],
      "explanation": "$\\displaystyle\\int x\\,e^x\\,dx = (x-1)e^x + C$. $[(x-1)e^x]_0^1 = 0 \\cdot e - (-1) \\cdot 1 = 0 + 1 = 1$.",
      "wrongAnalysis": "$(x-1)e^x$ 에서 $x = 0$ 대입 시 $(-1)(1) = -1$ 의 부호를 실수하여 $e - 1$ 로 답하는 경우가 있습니다."
    }
  ],
  "summary": {
    "keyPoints": [
      "$\\displaystyle\\int u\\,dv = uv - \\int v\\,du$",
      "LIATE 순서로 $u$ 선택",
      "두 번 반복하는 경우도 있음"
    ],
    "formulas": [
      "\\int u\\,dv = uv - \\int v\\,du"
    ],
    "commonMistakes": [
      "$u$ 와 $dv$ 선택을 반대로 한 실수",
      "부호 처리 실수"
    ],
    "nextConnection": "유리함수 $\\frac{P(x)}{Q(x)}$를 간단한 분수의 합으로 쪼개 적분하는 '부분분수 분해'를 배웁니다."
  }
},
{
  "id": 8,
  "title": "부분분수 분해",
  "category": "적분",
  "level": "중급",
  "question": "유리함수 $\\frac{P(x)}{Q(x)}$를 적분하려면 어떻게 분해해야 하는가?",
  "concept": {
    "intro": "치환적분과 부분적분을 배웠지만, $\\displaystyle\\int \\frac{5x+3}{(x+1)(x+2)}\\,dx$처럼 분모가 인수분해된 유리함수 앞에서는 두 기법 모두 곧바로 적용하기 어렵습니다. 이럴 때 강력한 무기가 부분분수 분해(Partial Fraction Decomposition)입니다.\n\n:::definition[부분분수 분해]\n복잡한 하나의 분수를 간단한 분수 여러 개의 합으로 쪼개는 기법입니다. 각 항은 $\\displaystyle\\int \\frac{A}{x-a}\\,dx = A\\ln|x-a| + C$ 같은 기본 적분으로 돌아갑니다.\n:::\n\n:::note[유형 1: 서로 다른 일차 인수]\n$\\dfrac{P(x)}{(x-a)(x-b)} = \\dfrac{A}{x-a} + \\dfrac{B}{x-b}$로 놓고, 양변에 $(x-a)(x-b)$를 곱하면 $P(x) = A(x-b) + B(x-a)$가 됩니다. $x = a$를 대입하면 $A$, $x = b$를 대입하면 $B$를 바로 구할 수 있습니다 (헤비사이드의 은폐법).\n:::\n\n:::note[유형 2: 중복 일차 인수]\n$(x-a)^2$이 분모에 있으면 $\\dfrac{A}{x-a} + \\dfrac{B}{(x-a)^2}$처럼 지수를 $1$부터 중복 차수까지 하나씩 올린 항을 모두 써야 합니다.\n:::\n\n:::note[유형 3: 기약 이차식]\n분모에 기약 이차식이 포함된 경우 분자를 일차식으로 둡니다. 예: $\\dfrac{P(x)}{(x^2+1)(x-1)} = \\dfrac{Ax+B}{x^2+1} + \\dfrac{C}{x-1}$.\n:::\n\n부분분수 분해의 핵심은 '분모의 인수 유형에 맞는 올바른 꼴을 설정하는 것'이며, 일단 분해가 끝나면 적분은 $\\ln$이나 간단한 거듭제곱 적분으로 귀결됩니다.",
    "intuition": "큰 피자 한 판을 통째로 먹기 어려우면 조각으로 나눠 먹는 것과 같습니다. $\\dfrac{5x+3}{(x+1)(x+2)}$라는 복잡한 분수를 $\\dfrac{A}{x+1} + \\dfrac{B}{x+2}$처럼 한 입 크기의 조각으로 나누면, 각 조각은 우리가 이미 적분할 줄 아는 기본형이 됩니다.",
    "formula": "\\frac{P(x)}{(x-a)(x-b)} = \\frac{A}{x-a} + \\frac{B}{x-b}\n\\frac{P(x)}{(x-a)^2} = \\frac{A}{x-a} + \\frac{B}{(x-a)^2}\n\\frac{P(x)}{(x^2+px+q)(x-a)} = \\frac{Ax+B}{x^2+px+q} + \\frac{C}{x-a}\n\\int \\frac{A}{x-a}\\,dx = A\\ln|x-a| + C\n\\int \\frac{B}{(x-a)^2}\\,dx = -\\frac{B}{x-a} + C",
    "summary": "부분분수 분해는 복잡한 유리함수를 간단한 분수의 합으로 쪼개는 기법이다. 분모의 인수 유형(서로 다른 일차, 중복 일차, 기약 이차)에 따라 분해 형태가 달라지며, 미지 계수는 특정 $x$ 대입 또는 계수 비교로 결정한다. 분해 후 각 항은 $\\ln$이나 간단한 거듭제곱 적분으로 바로 계산할 수 있다."
  },
  "examples": [
    {
      "title": "[기본] 부분분수 분해를 이용한 적분",
      "problem": "$\\displaystyle\\int\\frac{5x+3}{(x+1)(x+2)}\\,dx$를 구하시오.",
      "steps": [
        "$\\dfrac{5x+3}{(x+1)(x+2)} = \\dfrac{A}{x+1} + \\dfrac{B}{x+2}$로 놓는다.",
        "양변에 $(x+1)(x+2)$를 곱하면 $5x+3 = A(x+2) + B(x+1)$.",
        "$x = -1$ 대입: $5(-1)+3 = A(-1+2)$ $\\Rightarrow$ $-2 = A$, 즉 $A = -2$.",
        "$x = -2$ 대입: $5(-2)+3 = B(-2+1)$ $\\Rightarrow$ $-7 = -B$, 즉 $B = 7$.",
        "$\\displaystyle\\int\\left(\\frac{-2}{x+1} + \\frac{7}{x+2}\\right)dx = -2\\ln|x+1| + 7\\ln|x+2| + C$."
      ],
      "answer": "$-2\\ln|x+1| + 7\\ln|x+2| + C$",
      "lesson": "부분분수 분해의 핵심은 분모의 인수가 $0$이 되는 $x$ 값을 대입하여 미지수를 하나씩 소거하는 것입니다. 분해만 정확히 하면 적분 자체는 $\\ln$ 공식으로 끝납니다."
    },
    {
      "title": "[기본] 세 개의 일차 인수",
      "problem": "$\\displaystyle\\int \\frac{1}{x(x-1)(x+1)}\\,dx$ 를 구하시오.",
      "steps": [
        "$\\dfrac{1}{x(x-1)(x+1)} = \\dfrac{A}{x} + \\dfrac{B}{x-1} + \\dfrac{C}{x+1}$ 로 놓는다.",
        "$x = 0$ 대입: $1 = A(-1)(1)$ $\\Rightarrow$ $A = -1$.",
        "$x = 1$ 대입: $1 = B(1)(2)$ $\\Rightarrow$ $B = \\dfrac{1}{2}$.",
        "$x = -1$ 대입: $1 = C(-1)(-2)$ $\\Rightarrow$ $C = \\dfrac{1}{2}$.",
        "$\\displaystyle\\int \\left(-\\dfrac{1}{x} + \\dfrac{1/2}{x-1} + \\dfrac{1/2}{x+1}\\right)dx = -\\ln|x| + \\dfrac{1}{2}\\ln|x-1| + \\dfrac{1}{2}\\ln|x+1| + C$."
      ],
      "answer": "$-\\ln|x| + \\dfrac{1}{2}\\ln|x-1| + \\dfrac{1}{2}\\ln|x+1| + C$",
      "lesson": "인수가 세 개 이상이어도 같은 원리입니다. 각 인수가 $0$ 이 되는 $x$ 를 대입하면 한 번에 하나씩 계수를 구할 수 있습니다."
    },
    {
      "title": "[응용] 중복 인수의 부분분수 분해",
      "problem": "$\\displaystyle\\int \\frac{2x+1}{(x-1)^2}\\,dx$ 를 구하시오.",
      "steps": [
        "중복 인수이므로 $\\dfrac{2x+1}{(x-1)^2} = \\dfrac{A}{x-1} + \\dfrac{B}{(x-1)^2}$ 로 놓는다.",
        "양변에 $(x-1)^2$ 을 곱하면 $2x+1 = A(x-1) + B$.",
        "$x = 1$ 대입: $3 = B$.",
        "$x$ 의 계수 비교: $2 = A$.",
        "$\\displaystyle\\int \\left(\\dfrac{2}{x-1} + \\dfrac{3}{(x-1)^2}\\right)dx = 2\\ln|x-1| - \\dfrac{3}{x-1} + C$."
      ],
      "answer": "$2\\ln|x-1| - \\dfrac{3}{x-1} + C$",
      "lesson": "중복 인수 $(x-a)^k$ 가 있으면 $\\dfrac{A_1}{x-a} + \\dfrac{A_2}{(x-a)^2} + \\cdots + \\dfrac{A_k}{(x-a)^k}$ 형태로 설정해야 합니다."
    },
    {
      "title": "[응용] 기약 이차식을 포함한 분해",
      "problem": "$\\displaystyle\\int \\frac{x+2}{(x^2+1)(x-1)}\\,dx$ 를 구하시오.",
      "steps": [
        "$\\dfrac{x+2}{(x^2+1)(x-1)} = \\dfrac{Ax+B}{x^2+1} + \\dfrac{C}{x-1}$ 로 놓는다.",
        "$x = 1$ 대입: $3 = 2C$ $\\Rightarrow$ $C = \\dfrac{3}{2}$.",
        "양변에 분모를 곱하고 계수 비교: $x^2$ 계수 $0 = A + C$, 상수항 $2 = -B + C$.",
        "$A = -\\dfrac{3}{2}$, $B = -\\dfrac{1}{2}$.",
        "$\\displaystyle\\int \\left(\\dfrac{-\\frac{3}{2}x - \\frac{1}{2}}{x^2+1} + \\dfrac{3/2}{x-1}\\right)dx = -\\dfrac{3}{4}\\ln(x^2+1) - \\dfrac{1}{2}\\arctan x + \\dfrac{3}{2}\\ln|x-1| + C$."
      ],
      "answer": "$-\\dfrac{3}{4}\\ln(x^2+1) - \\dfrac{1}{2}\\arctan x + \\dfrac{3}{2}\\ln|x-1| + C$",
      "lesson": "기약 이차식이 분모에 있으면 분자를 $Ax+B$ (일차식)로 두어야 합니다. $\\dfrac{x}{x^2+1}$ 은 $\\ln$, $\\dfrac{1}{x^2+1}$ 은 $\\arctan$ 으로 적분됩니다."
    },
    {
      "title": "[심화] 분자 차수가 높은 경우 — 다항식 나눗셈 후 분해",
      "problem": "$\\displaystyle\\int \\frac{x^3}{x^2-1}\\,dx$ 를 구하시오.",
      "steps": [
        "분자 차수($3$) $\\geq$ 분모 차수($2$)이므로 먼저 다항식 나눗셈을 수행한다.",
        "$x^3 \\div (x^2-1) = x$ 나머지 $x$. 즉 $\\dfrac{x^3}{x^2-1} = x + \\dfrac{x}{x^2-1}$.",
        "$\\dfrac{x}{x^2-1} = \\dfrac{x}{(x-1)(x+1)} = \\dfrac{A}{x-1} + \\dfrac{B}{x+1}$. $A = \\dfrac{1}{2}$, $B = \\dfrac{1}{2}$.",
        "$\\displaystyle\\int \\left(x + \\dfrac{1/2}{x-1} + \\dfrac{1/2}{x+1}\\right)dx = \\dfrac{x^2}{2} + \\dfrac{1}{2}\\ln|x-1| + \\dfrac{1}{2}\\ln|x+1| + C$.",
        "$= \\dfrac{x^2}{2} + \\dfrac{1}{2}\\ln|x^2-1| + C$."
      ],
      "answer": "$\\dfrac{x^2}{2} + \\dfrac{1}{2}\\ln|x^2-1| + C$",
      "lesson": "분자 차수 $\\geq$ 분모 차수이면 반드시 다항식 나눗셈을 먼저 수행하여 '다항식 $+$ 진분수' 형태로 만든 뒤 부분분수 분해를 적용합니다."
    }
  ],
  "problems": [
    {
      "id": "8-1",
      "type": "choice",
      "difficulty": 1,
      "question": "$\\dfrac{3}{(x-1)(x+1)}$의 부분분수 분해는?",
      "choices": [
        "$\\dfrac{3/2}{x-1} - \\dfrac{3/2}{x+1}$",
        "$\\dfrac{3}{x-1} + \\dfrac{3}{x+1}$",
        "$\\dfrac{3/2}{x-1} + \\dfrac{3/2}{x+1}$",
        "$\\dfrac{1}{x-1} - \\dfrac{1}{x+1}$"
      ],
      "answer": "$\\dfrac{3/2}{x-1} - \\dfrac{3/2}{x+1}$",
      "hints": [
        "$\\dfrac{3}{(x-1)(x+1)} = \\dfrac{A}{x-1} + \\dfrac{B}{x+1}$로 놓으세요.",
        "양변에 $(x-1)(x+1)$을 곱하면 $3 = A(x+1) + B(x-1)$입니다.",
        "$x = 1$ 대입: $3 = 2A$ $\\Rightarrow$ $A = \\dfrac{3}{2}$. $x = -1$ 대입: $3 = -2B$ $\\Rightarrow$ $B = -\\dfrac{3}{2}$."
      ],
      "explanation": "$\\dfrac{3}{(x-1)(x+1)} = \\dfrac{A}{x-1} + \\dfrac{B}{x+1}$에서 양변에 분모를 곱하면 $3 = A(x+1) + B(x-1)$. $x = 1$: $3 = 2A$이므로 $A = \\dfrac{3}{2}$. $x = -1$: $3 = -2B$이므로 $B = -\\dfrac{3}{2}$. 따라서 $\\dfrac{3/2}{x-1} - \\dfrac{3/2}{x+1}$.",
      "wrongAnalysis": "$A$와 $B$의 부호를 같다고 착각하여 $\\dfrac{3/2}{x-1} + \\dfrac{3/2}{x+1}$로 답하는 실수가 흔합니다. $x = -1$을 대입하면 $B$가 음수임을 확인할 수 있습니다."
    },
    {
      "id": "8-2",
      "type": "text",
      "difficulty": 2,
      "question": "$\\displaystyle\\int\\frac{2x+1}{x^2+x}\\,dx$의 결과는? (+C 포함)",
      "answer": "ln|x|+ln|x+1|+C",
      "hints": [
        "분모를 인수분해하면 $x^2 + x = x(x+1)$입니다.",
        "$\\dfrac{2x+1}{x(x+1)} = \\dfrac{A}{x} + \\dfrac{B}{x+1}$로 놓고 $A$, $B$를 구하세요.",
        "$x = 0$ 대입: $1 = A$. $x = -1$ 대입: $-1 = -B$이므로 $B = 1$. 따라서 $\\displaystyle\\int\\left(\\dfrac{1}{x} + \\dfrac{1}{x+1}\\right)dx$."
      ],
      "explanation": "$x^2+x = x(x+1)$로 인수분해한 뒤 $\\dfrac{2x+1}{x(x+1)} = \\dfrac{A}{x} + \\dfrac{B}{x+1}$로 놓으면 $2x+1 = A(x+1) + Bx$. $x = 0$: $1 = A$. $x = -1$: $-1 = -B$이므로 $B = 1$. $\\displaystyle\\int\\left(\\dfrac{1}{x} + \\dfrac{1}{x+1}\\right)dx = \\ln|x| + \\ln|x+1| + C$.",
      "wrongAnalysis": "분모를 인수분해하지 않고 $\\ln(x^2+x)$로 바로 적분하려는 실수가 흔합니다. 분자가 분모의 미분과 정확히 일치하는 경우에만 그 방법이 가능하며, 여기서는 $(x^2+x)' = 2x+1$이므로 사실 $\\ln|x^2+x| + C$도 정답입니다. 하지만 부분분수 분해를 연습하는 것이 이 문제의 목적입니다."
    },
    {
      "id": "8-3",
      "type": "text",
      "difficulty": 3,
      "question": "$\\displaystyle\\int\\frac{x+3}{(x+1)^2}\\,dx$의 결과는? (+C 포함)",
      "answer": "ln|x+1|-2/(x+1)+C",
      "hints": [
        "중복 인수이므로 $\\dfrac{x+3}{(x+1)^2} = \\dfrac{A}{x+1} + \\dfrac{B}{(x+1)^2}$로 놓으세요.",
        "양변에 $(x+1)^2$를 곱하면 $x+3 = A(x+1) + B$. $x = -1$ 대입: $2 = B$. 계수 비교로 $A = 1$.",
        "$\\displaystyle\\int\\left(\\dfrac{1}{x+1} + \\dfrac{2}{(x+1)^2}\\right)dx = \\ln|x+1| - \\dfrac{2}{x+1} + C$."
      ],
      "explanation": "$\\dfrac{x+3}{(x+1)^2} = \\dfrac{A}{x+1} + \\dfrac{B}{(x+1)^2}$에서 양변에 $(x+1)^2$를 곱하면 $x+3 = A(x+1) + B$. $x = -1$: $2 = B$. $x$ 계수 비교: $1 = A$. 따라서 $\\displaystyle\\int\\left(\\dfrac{1}{x+1} + \\dfrac{2}{(x+1)^2}\\right)dx = \\ln|x+1| + 2 \\cdot \\dfrac{(x+1)^{-1}}{-1} + C = \\ln|x+1| - \\dfrac{2}{x+1} + C$.",
      "wrongAnalysis": "중복 인수를 $\\dfrac{A}{x+1} + \\dfrac{B}{x+1}$처럼 같은 분모로 놓는 실수가 있습니다. 반드시 $(x+1)^1$과 $(x+1)^2$를 별도 항으로 두어야 합니다. 또 $\\int \\dfrac{2}{(x+1)^2}\\,dx$의 부호에서 실수하여 $+\\dfrac{2}{x+1}$로 적는 경우도 흔합니다."
    },
    {
      "id": "8-4",
      "type": "number",
      "difficulty": 1,
      "question": "$\\displaystyle\\int_2^3 \\frac{1}{x-1}\\,dx$ 의 값은? (소수 둘째 자리까지)",
      "answer": "0.69",
      "hints": [
        "$\\displaystyle\\int \\frac{1}{x-1}\\,dx = \\ln|x-1| + C$.",
        "$[\\ln|x-1|]_2^3 = \\ln 2 - \\ln 1 = \\ln 2$."
      ],
      "explanation": "$[\\ln|x-1|]_2^3 = \\ln 2 - \\ln 1 = \\ln 2 \\approx 0.69$.",
      "wrongAnalysis": "$\\ln|x-1|$ 대신 $\\ln|x|$ 로 적분하는 실수가 흔합니다. 분모가 $x - 1$ 이면 원시함수의 인수도 $x - 1$ 입니다."
    },
    {
      "id": "8-5",
      "type": "text",
      "difficulty": 2,
      "question": "$\\displaystyle\\int \\frac{3x+5}{(x+1)(x+2)}\\,dx$ 의 결과는? (+C 포함)",
      "answer": "2ln|x+1|+ln|x+2|+C",
      "hints": [
        "$\\dfrac{3x+5}{(x+1)(x+2)} = \\dfrac{A}{x+1} + \\dfrac{B}{x+2}$ 로 놓으세요.",
        "$x = -1$ 대입: $2 = A$. $x = -2$ 대입: $-1 = -B$, $B = 1$."
      ],
      "explanation": "$3x+5 = A(x+2) + B(x+1)$. $x=-1$: $2 = A$. $x=-2$: $-1 = -B$, $B=1$. $\\displaystyle\\int \\left(\\dfrac{2}{x+1} + \\dfrac{1}{x+2}\\right)dx = 2\\ln|x+1| + \\ln|x+2| + C$.",
      "wrongAnalysis": "계수 $A$, $B$ 를 구할 때 대입할 $x$ 값을 잘못 선택하여 연립방정식을 풀어야 하는 불필요한 복잡함이 생기는 경우가 있습니다. 분모의 인수가 $0$ 이 되는 $x$ 를 대입하면 한 번에 하나씩 구할 수 있습니다."
    }
  ],
  "summary": {
    "keyPoints": [
      "부분분수 분해: 복잡한 유리함수를 간단한 분수의 합으로 쪼갠다.",
      "분모의 인수 유형(서로 다른 일차, 중복 일차, 기약 이차)에 따라 분해 꼴이 달라진다.",
      "분해 후 각 항은 $\\ln|x-a|$ 또는 $-\\dfrac{B}{x-a}$ 형태로 적분된다."
    ],
    "formulas": [
      "\\frac{P(x)}{(x-a)(x-b)} = \\frac{A}{x-a} + \\frac{B}{x-b}",
      "\\frac{P(x)}{(x-a)^2} = \\frac{A}{x-a} + \\frac{B}{(x-a)^2}",
      "\\int \\frac{A}{x-a}\\,dx = A\\ln|x-a| + C",
      "\\int \\frac{B}{(x-a)^2}\\,dx = -\\frac{B}{x-a} + C"
    ],
    "commonMistakes": [
      "중복 인수에서 분해 항의 지수를 올리지 않는 실수",
      "미지 계수 결정 시 대입할 $x$ 값을 잘못 골라 계산이 복잡해지는 실수"
    ],
    "nextConnection": "이제 적분으로 다양한 양(넓이·부피·평균값)을 계산할 수 있습니다. 다음은 적분의 활용입니다."
  }
},
{
  "id": 9,
  "title": "적분 활용",
  "category": "적분",
  "level": "중급",
  "question": "적분으로 넓이 말고 또 무엇을 알 수 있을까?",
  "concept": {
    "intro": "정적분은 단순한 '넓이' 외에도 부피, 곡선의 길이, 평균값, 누적량 등을 계산할 수 있습니다.\n\n:::note[핵심 발상]\n'작은 조각의 양을 적분으로 모으기'입니다. 어떤 양이든 '잘라서 더한다'는 발상이 곧 적분입니다.\n:::",
    "intuition": "케이크를 얇게 잘라서 한 조각의 부피를 알면, 전체를 더해 전체 부피를 알 수 있습니다. 잘게 자른 조각이 무엇이냐에 따라 의미가 달라집니다.",
    "formula": "\\text{두 곡선 사이의 넓이:}\\ \\int_a^b (\\text{위} - \\text{아래})\\,dx\n\\text{회전체의 부피(원판법):}\\ V = \\pi \\int_a^b [f(x)]^2\\,dx\n\\text{평균값:}\\ \\frac{1}{b-a}\\int_a^b f\\,dx",
    "summary": "• 잘라서 더한다는 발상\n• 도형의 의미를 식에 반영\n• 그림을 그리는 것이 절반",
    "visuals": [
      {
        "type": "function",
        "title": "두 곡선 사이의 넓이",
        "xRange": [-1, 4],
        "yRange": [-1, 6],
        "functions": [
          { "expr": "x^2", "color": "#6366f1", "label": "y = x²" },
          { "expr": "2*x + 1", "color": "#ef4444", "label": "y = 2x+1" }
        ],
        "regions": [
          { "fn": "2*x + 1", "fn2": "x^2", "from": -0.414, "to": 2.414, "color": "rgba(245,158,11,0.2)" }
        ],
        "points": [
          { "x": -0.414, "y": 0.171, "label": "교점", "color": "#f59e0b" },
          { "x": 2.414, "y": 5.828, "label": "교점", "color": "#f59e0b" }
        ],
        "annotations": [
          { "x": 1, "y": 2.3, "text": "넓이 = ∫(위−아래)dx", "color": "#f59e0b" }
        ]
      }
    ]
  },
  "examples": [
    {
      "title": "[기본] 두 곡선 사이 넓이",
      "problem": "$y = x^2$ 와 $y = 2x$ 사이의 넓이를 구하시오 $(x \\in [0,2])$.",
      "steps": [
        "교점: $x^2 = 2x \\;\\Rightarrow\\; x=0,\\,2$.",
        "구간 $(0,2)$ 에서 $2x > x^2$.",
        "$S = \\displaystyle\\int_0^2 (2x - x^2)\\,dx = \\left[x^2 - \\dfrac{x^3}{3}\\right]_0^2 = 4 - \\dfrac{8}{3} = \\dfrac{4}{3}$."
      ],
      "answer": "$\\dfrac{4}{3}$",
      "lesson": "두 곡선 사이 넓이는 항상 (위 함수 $-$ 아래 함수)를 적분합니다. 교점을 먼저 찾고 어느 쪽이 위인지 확인하세요."
    },
    {
      "title": "[기본] 함수의 평균값",
      "problem": "$f(x) = x^2 + 1$ 의 구간 $[0, 3]$ 에서의 평균값을 구하시오.",
      "steps": [
        "평균값 공식: $\\overline{f} = \\dfrac{1}{b-a}\\displaystyle\\int_a^b f(x)\\,dx$.",
        "$\\displaystyle\\int_0^3 (x^2 + 1)\\,dx = \\left[\\dfrac{x^3}{3} + x\\right]_0^3 = 9 + 3 = 12$.",
        "$\\overline{f} = \\dfrac{1}{3} \\cdot 12 = 4$."
      ],
      "answer": "$4$",
      "lesson": "적분 평균은 '높이가 균일하다면 같은 넓이를 만드는 높이'를 의미합니다. $\\overline{f} \\cdot (b-a) = \\int_a^b f\\,dx$ 관계를 기억하세요."
    },
    {
      "title": "[응용] 원판법으로 회전체 부피 구하기",
      "problem": "$y = \\sqrt{x}$ 를 $x = 0$ 에서 $x = 4$ 까지 $x$축 둘레로 회전시킨 회전체의 부피를 구하시오.",
      "steps": [
        "원판법: $V = \\pi \\displaystyle\\int_a^b [f(x)]^2\\,dx$.",
        "$f(x) = \\sqrt{x}$ 이므로 $[f(x)]^2 = x$.",
        "$V = \\pi \\displaystyle\\int_0^4 x\\,dx = \\pi \\left[\\dfrac{x^2}{2}\\right]_0^4 = 8\\pi$."
      ],
      "answer": "$8\\pi$",
      "lesson": "원판법에서 회전 단면의 반지름은 함숫값 $f(x)$ 이고, 단면적은 $\\pi[f(x)]^2$ 입니다. 이를 적분하면 부피가 됩니다."
    },
    {
      "title": "[응용] 원통 껍질법 (Shell method)",
      "problem": "$y = x^2$ ($0 \\leq x \\leq 2$) 를 $y$축 둘레로 회전시킨 회전체의 부피를 구하시오.",
      "steps": [
        "원통 껍질법: $V = 2\\pi \\displaystyle\\int_a^b x \\cdot f(x)\\,dx$.",
        "$V = 2\\pi \\displaystyle\\int_0^2 x \\cdot x^2\\,dx = 2\\pi \\int_0^2 x^3\\,dx$.",
        "$= 2\\pi \\left[\\dfrac{x^4}{4}\\right]_0^2 = 2\\pi \\cdot 4 = 8\\pi$."
      ],
      "answer": "$8\\pi$",
      "lesson": "$y$축 회전에서는 원통 껍질법이 편리합니다. 높이 $f(x)$, 반지름 $x$ 인 원통 껍질의 옆넓이 $2\\pi x f(x)$ 를 적분합니다."
    },
    {
      "title": "[심화] 와셔법으로 속이 빈 회전체 부피",
      "problem": "$y = x$ 와 $y = x^2$ 으로 둘러싸인 영역을 $x$축 둘레로 회전시킨 회전체의 부피를 구하시오.",
      "steps": [
        "교점: $x = x^2$ $\\Rightarrow$ $x(x-1) = 0$, $x = 0,\\,1$. 구간 $[0,1]$ 에서 $x \\geq x^2$.",
        "와셔법: $V = \\pi \\displaystyle\\int_0^1 \\left([R(x)]^2 - [r(x)]^2\\right)dx$.",
        "바깥 반지름 $R(x) = x$, 안쪽 반지름 $r(x) = x^2$.",
        "$V = \\pi \\displaystyle\\int_0^1 (x^2 - x^4)\\,dx = \\pi \\left[\\dfrac{x^3}{3} - \\dfrac{x^5}{5}\\right]_0^1 = \\pi\\left(\\dfrac{1}{3} - \\dfrac{1}{5}\\right) = \\dfrac{2\\pi}{15}$."
      ],
      "answer": "$\\dfrac{2\\pi}{15}$",
      "lesson": "두 곡선 사이 영역을 회전하면 속이 빈 도넛 형태가 됩니다. 와셔법은 바깥 원판에서 안쪽 원판을 빼는 원리입니다."
    }
  ],
  "problems": [
    {
      "id": "9-1",
      "type": "number",
      "difficulty": 2,
      "question": "$f(x) = x^2$ 의 구간 $[0,3]$ 에서의 평균값은?",
      "answer": "3",
      "hints": [
        "평균값 $= \\dfrac{1}{b-a}\\displaystyle\\int_a^b f\\,dx$.",
        "$\\displaystyle\\int_0^3 x^2\\,dx = 9$.",
        "$\\dfrac{1}{3}$ 곱하기."
      ],
      "explanation": "함수의 평균값은 $\\dfrac{1}{3-0}\\int_0^3 x^2\\,dx$입니다. $\\int_0^3 x^2\\,dx = 9$이므로 평균값은 $\\dfrac{9}{3}=3$입니다.",
      "wrongAnalysis": "$\\dfrac{f(0) + f(3)}{2}$ 처럼 양 끝의 산술평균으로 답하는 실수가 흔합니다. 평균값 정리의 정의는 적분 평균입니다."
    },
    {
      "id": "9-2",
      "type": "number",
      "difficulty": 3,
      "question": "$y = x$ 를 $x=0$ 부터 $x=1$ 까지 $x$ 축 회전했을 때 만들어지는 입체의 부피 ($\\pi$ 를 빼고 숫자만)",
      "answer": "0.3333",
      "hints": [
        "$V = \\pi \\displaystyle\\int_0^1 x^2\\,dx$.",
        "원판법.",
        "$\\pi$ 를 제외한 적분값만 답."
      ],
      "explanation": "$\\displaystyle\\int_0^1 x^2\\,dx = \\dfrac{1}{3} \\approx 0.3333$. (실제 부피는 $\\dfrac{\\pi}{3}$)",
      "wrongAnalysis": "원판법의 반지름은 함숫값 자체임을 잊고 $x$ 를 그대로 적분하는 실수가 있습니다."
    },
    {
      "id": "9-3",
      "type": "number",
      "difficulty": 3,
      "question": "$y = x^2$ 와 $y = 4$ 사이의 넓이는 ($x \\in [-2,2]$)",
      "answer": "10.6667",
      "hints": [
        "$S = \\displaystyle\\int_{-2}^{2}(4 - x^2)\\,dx$.",
        "원시함수 $4x - \\dfrac{x^3}{3}$.",
        "대칭으로 $\\displaystyle\\int_0^2$ 의 두 배."
      ],
      "explanation": "$\\left[4x - \\dfrac{x^3}{3}\\right]_{-2}^{2} = \\left(8 - \\dfrac{8}{3}\\right) - \\left(-8 + \\dfrac{8}{3}\\right) = \\dfrac{32}{3} \\approx 10.6667$.",
      "wrongAnalysis": "위/아래 함수의 순서를 바꿔 음수가 나오는 실수가 흔합니다. 항상 위 $-$ 아래입니다."
    },
    {
      "id": "9-4",
      "type": "choice",
      "difficulty": 1,
      "question": "$y = x^2$ 와 $y = x$ 의 교점의 $x$ 좌표를 모두 고르면?",
      "choices": [
        "$x = 0$ 만",
        "$x = 0,\\ x = 1$",
        "$x = 1$ 만",
        "$x = 0,\\ x = -1$"
      ],
      "answer": "$x = 0,\\ x = 1$",
      "hints": [
        "$x^2 = x$ 를 풀어보세요.",
        "$x^2 - x = x(x - 1) = 0$."
      ],
      "explanation": "$x^2 = x \\Rightarrow x(x-1) = 0 \\Rightarrow x = 0$ 또는 $x = 1$.",
      "wrongAnalysis": "양변을 $x$ 로 나누어 $x = 1$ 만 구하고 $x = 0$ 을 놓치는 실수가 흔합니다. 양변을 변수로 나누면 해를 잃을 수 있습니다."
    },
    {
      "id": "9-5",
      "type": "number",
      "difficulty": 1,
      "question": "$f(x) = 4$ 의 구간 $[0, 5]$ 에서의 평균값은?",
      "answer": "4",
      "hints": [
        "상수함수의 평균값을 생각해 보세요.",
        "평균값 $= \\dfrac{1}{b-a}\\displaystyle\\int_a^b f\\,dx = \\dfrac{1}{5}\\displaystyle\\int_0^5 4\\,dx$."
      ],
      "explanation": "$\\dfrac{1}{5}\\displaystyle\\int_0^5 4\\,dx = \\dfrac{1}{5} \\cdot 20 = 4$. 상수함수의 평균값은 상수 자체입니다.",
      "wrongAnalysis": "평균값 공식의 $\\dfrac{1}{b-a}$ 를 빠뜨려 $20$ 으로 답하는 실수가 있습니다."
    }
  ],
  "summary": {
    "keyPoints": [
      "적분은 '잘게 잘라 더하는' 모든 양에 통한다.",
      "두 곡선 사이 넓이는 (위$-$아래) 적분",
      "원판/원통/평균값 모두 같은 발상의 변형"
    ],
    "formulas": [
      "S = \\int(\\text{위} - \\text{아래})\\,dx",
      "V_{\\text{원판}} = \\pi \\int [f(x)]^2\\,dx",
      "\\overline{f} = \\frac{1}{b-a}\\int_a^b f\\,dx"
    ],
    "commonMistakes": [
      "교점 확인 누락",
      "원판법에서 $\\pi$ 누락"
    ],
    "nextConnection": "넓이·부피 외에 곡선의 길이와 회전체의 겉넓이도 적분으로 구할 수 있습니다."
  }
},
{
  "id": 12,
  "title": "이상적분",
  "category": "적분",
  "level": "고급",
  "question": "적분 구간이 무한이거나 피적분함수가 발산할 때도 적분할 수 있는가?",
  "concept": {
    "intro": "지금까지 우리는 $\\int_a^b f(x)\\,dx$ 처럼 유한한 구간 $[a,b]$ 위에서, 피적분함수 $f(x)$가 유계(bounded)인 경우만 다루었습니다. 하지만 물리학이나 확률론에서는 적분 구간이 $[1,\\infty)$ 처럼 무한히 뻗거나, 피적분함수가 특정 점에서 $\\pm\\infty$로 발산하는 상황이 빈번하게 등장합니다.\n\n:::definition[이상적분]\n적분 구간이 무한이거나 피적분함수가 발산하는 적분을 이상적분(improper integral)이라 부릅니다.\n:::\n\n:::note[제1종 이상적분]\n적분 구간 자체가 무한인 경우입니다. 예를 들어 $\\int_1^{\\infty} \\frac{1}{x^2}\\,dx$ 처럼 윗끝이 $\\infty$인 적분입니다. 유한 구간 $[1,t]$ 위에서 먼저 적분한 뒤 $t \\to \\infty$ 극한을 취하는 방식으로 정의합니다.\n:::\n\n:::note[제2종 이상적분]\n적분 구간은 유한하지만, 그 구간 내부나 끝점에서 피적분함수가 발산하는 경우입니다. 예를 들어 $\\int_0^1 \\frac{1}{\\sqrt{x}}\\,dx$ 에서는 $x \\to 0^+$ 일 때 피적분함수가 $+\\infty$로 발산합니다. 발산점을 피해 $\\int_{\\varepsilon}^1 \\frac{1}{\\sqrt{x}}\\,dx$ 를 계산한 뒤 $\\varepsilon \\to 0^+$ 극한을 취합니다.\n:::\n\n이상적분의 핵심 물음은 '극한값이 유한하게 수렴하는가, 아니면 발산하는가'입니다.\n\n:::theorem[$p$-적분 판정]\n$\\int_1^{\\infty} \\frac{1}{x^p}\\,dx$ 는 $p>1$ 일 때 수렴, $p \\leq 1$ 일 때 발산합니다.\n:::\n\n:::theorem[비교판정법]\n$0 \\leq f(x) \\leq g(x)$ 이고 $\\int g\\,dx$ 가 수렴하면 $\\int f\\,dx$ 도 수렴합니다. 이 결과를 '기준 적분'으로 삼아 다른 이상적분과 비교하면, 직접 계산하지 않고도 수렴·발산을 판정할 수 있습니다.\n:::\n\n이상적분의 수렴·발산 개념은 다음 단원인 무한급수(수열과 급수)에서 적분판정법의 이론적 토대가 됩니다.",
    "intuition": "무한히 긴 울타리를 칠한다고 상상해 보세요. 울타리의 높이가 $f(x) = \\frac{1}{x^2}$이면 멀리 갈수록 높이가 급격히 줄어들어, 필요한 페인트의 총량은 유한합니다. 반면 높이가 $f(x) = \\frac{1}{x}$이면 줄어드는 속도가 너무 느려서, 아무리 칠해도 페인트가 모자랍니다.\n\n결국 이상적분의 수렴은 '꼬리가 충분히 빨리 줄어드는가'의 문제입니다. $\\frac{1}{x^2}$은 빨리 줄어드니 수렴, $\\frac{1}{x}$는 느리게 줄어드니 발산합니다.",
    "formula": "\\text{제1종:}\\ \\int_a^{\\infty} f(x)\\,dx = \\lim_{t \\to \\infty} \\int_a^t f(x)\\,dx\n\\text{제2종:}\\ \\int_a^b f(x)\\,dx = \\lim_{\\varepsilon \\to 0^+} \\int_{a+\\varepsilon}^b f(x)\\,dx \\quad (f\\text{가 }x=a\\text{에서 발산})\n\\int_1^{\\infty} \\frac{1}{x^p}\\,dx = \\begin{cases} \\dfrac{1}{p-1} & (p>1,\\ \\text{수렴}) \\\\ \\infty & (p \\leq 1,\\ \\text{발산}) \\end{cases}\n\\text{비교판정법:}\\ 0 \\leq f(x) \\leq g(x)\\ \\text{이고}\\ \\int g\\,dx\\ \\text{수렴} \\Rightarrow \\int f\\,dx\\ \\text{수렴}",
    "summary": "• 제1종 이상적분: 구간이 무한 → 유한 구간에서 적분 후 극한\n• 제2종 이상적분: 피적분함수 발산 → 발산점을 피해 적분 후 극한\n• $p$-적분: $p>1$ 수렴, $p \\leq 1$ 발산\n• 비교판정법으로 직접 계산 없이 수렴·발산 판정 가능",
    "visuals": [
      {
        "type": "function",
        "title": "이상적분: ∫₁^∞ 1/x² dx 의 수렴",
        "xRange": [-0.5, 8],
        "yRange": [-0.5, 3],
        "functions": [
          { "expr": "1/x^2", "color": "#6366f1", "label": "1/x² (수렴)", "domain": [0.6, 8] },
          { "expr": "1/x", "color": "#ef4444", "dashed": true, "label": "1/x (발산)", "domain": [0.4, 8] }
        ],
        "regions": [
          { "fn": "1/x^2", "from": 1, "to": 8, "color": "rgba(99,102,241,0.15)" }
        ],
        "points": [
          { "x": 1, "y": 1, "label": "x=1", "color": "#6366f1" }
        ],
        "annotations": [
          { "x": 5, "y": 1.5, "text": "넓이 = 1 (유한!)", "color": "#6366f1" }
        ]
      }
    ]
  },
  "examples": [
    {
      "title": "[기본] $\\int_1^{\\infty} \\frac{1}{x^2}\\,dx$ 의 수렴 확인",
      "problem": "$\\int_1^{\\infty} \\frac{1}{x^2}\\,dx$ 가 수렴하는지 판정하고, 수렴하면 그 값을 구하시오.",
      "steps": [
        "유한 구간으로 바꾼다: $\\int_1^{\\infty} \\frac{1}{x^2}\\,dx = \\lim_{t \\to \\infty} \\int_1^t \\frac{1}{x^2}\\,dx$.",
        "부정적분을 구한다: $\\int \\frac{1}{x^2}\\,dx = -\\frac{1}{x} + C$.",
        "정적분을 계산한다: $\\int_1^t \\frac{1}{x^2}\\,dx = \\left[-\\frac{1}{x}\\right]_1^t = -\\frac{1}{t} + 1$.",
        "극한을 취한다: $\\lim_{t \\to \\infty} \\left(-\\frac{1}{t} + 1\\right) = 0 + 1 = 1$."
      ],
      "answer": "수렴하며, 값은 $1$이다.",
      "lesson": "$p=2 > 1$ 이므로 $p$-적분 판정에 의해 수렴합니다. 이처럼 지수가 $1$보다 큰지를 먼저 확인하면 계산 전에 수렴 여부를 알 수 있습니다."
    },
    {
      "title": "[기본] 지수함수의 이상적분",
      "problem": "$\\displaystyle\\int_0^{\\infty} e^{-2x}\\,dx$ 를 구하시오.",
      "steps": [
        "$\\displaystyle\\int_0^{\\infty} e^{-2x}\\,dx = \\lim_{t \\to \\infty} \\int_0^t e^{-2x}\\,dx$.",
        "부정적분: $\\displaystyle\\int e^{-2x}\\,dx = -\\dfrac{1}{2}e^{-2x} + C$.",
        "$\\left[-\\dfrac{1}{2}e^{-2x}\\right]_0^t = -\\dfrac{1}{2}e^{-2t} + \\dfrac{1}{2}$.",
        "$\\lim_{t \\to \\infty} \\left(-\\dfrac{1}{2}e^{-2t} + \\dfrac{1}{2}\\right) = 0 + \\dfrac{1}{2} = \\dfrac{1}{2}$."
      ],
      "answer": "$\\dfrac{1}{2}$",
      "lesson": "$e^{-ax}$ ($a > 0$) 는 지수적으로 감소하므로 $\\int_0^{\\infty} e^{-ax}\\,dx = \\dfrac{1}{a}$ 로 항상 수렴합니다. 확률과 물리에서 자주 등장하는 적분입니다."
    },
    {
      "title": "[응용] 제2종 이상적분",
      "problem": "$\\displaystyle\\int_0^1 \\frac{1}{\\sqrt{x}}\\,dx$ 를 구하시오.",
      "steps": [
        "$x = 0$ 에서 $\\dfrac{1}{\\sqrt{x}} \\to \\infty$ 이므로 제2종 이상적분이다.",
        "$\\displaystyle\\int_0^1 \\frac{dx}{\\sqrt{x}} = \\lim_{\\varepsilon \\to 0^+} \\int_{\\varepsilon}^1 x^{-1/2}\\,dx$.",
        "$\\displaystyle\\int x^{-1/2}\\,dx = 2\\sqrt{x}$. $[2\\sqrt{x}]_{\\varepsilon}^1 = 2 - 2\\sqrt{\\varepsilon}$.",
        "$\\lim_{\\varepsilon \\to 0^+} (2 - 2\\sqrt{\\varepsilon}) = 2$."
      ],
      "answer": "$2$",
      "lesson": "피적분함수가 특정 점에서 발산해도, 발산 속도가 충분히 느리면 적분은 유한한 값을 가질 수 있습니다. 반드시 극한으로 확인하세요."
    },
    {
      "title": "[응용] 비교판정법을 이용한 수렴 판정",
      "problem": "$\\displaystyle\\int_1^{\\infty} \\frac{1}{x^2 + 1}\\,dx$ 가 수렴하는지 판정하시오.",
      "steps": [
        "$x \\geq 1$ 일 때 $x^2 + 1 > x^2$ 이므로 $\\dfrac{1}{x^2+1} < \\dfrac{1}{x^2}$.",
        "$\\displaystyle\\int_1^{\\infty} \\frac{1}{x^2}\\,dx = 1$ (수렴, $p=2>1$).",
        "비교판정법에 의해 $0 \\leq \\dfrac{1}{x^2+1} \\leq \\dfrac{1}{x^2}$ 이고 큰 쪽이 수렴하므로 작은 쪽도 수렴한다.",
        "실제 값: $\\displaystyle\\int_1^{\\infty} \\frac{dx}{x^2+1} = [\\arctan x]_1^{\\infty} = \\dfrac{\\pi}{2} - \\dfrac{\\pi}{4} = \\dfrac{\\pi}{4}$."
      ],
      "answer": "수렴하며, 값은 $\\dfrac{\\pi}{4}$",
      "lesson": "직접 계산할 수 없을 때에도 이미 수렴을 아는 함수와 비교하면 판정할 수 있습니다. 비교판정법은 급수에서도 동일하게 쓰입니다."
    },
    {
      "title": "[심화] 양쪽 무한 구간의 이상적분",
      "problem": "$\\displaystyle\\int_{-\\infty}^{\\infty} \\frac{dx}{1+x^2}$ 를 구하시오.",
      "steps": [
        "양쪽 무한 구간이므로 두 개의 이상적분으로 분할한다: $\\displaystyle\\int_{-\\infty}^{0} + \\int_0^{\\infty}$.",
        "$\\displaystyle\\int_0^{\\infty} \\frac{dx}{1+x^2} = \\lim_{t \\to \\infty} [\\arctan x]_0^t = \\dfrac{\\pi}{2} - 0 = \\dfrac{\\pi}{2}$.",
        "$\\displaystyle\\int_{-\\infty}^{0} \\frac{dx}{1+x^2} = \\lim_{s \\to -\\infty} [\\arctan x]_s^0 = 0 - \\left(-\\dfrac{\\pi}{2}\\right) = \\dfrac{\\pi}{2}$.",
        "합: $\\dfrac{\\pi}{2} + \\dfrac{\\pi}{2} = \\pi$."
      ],
      "answer": "$\\pi$",
      "lesson": "$(-\\infty, \\infty)$ 전체 구간의 이상적분은 반드시 두 부분으로 나누어 각각 수렴을 확인해야 합니다. $\\dfrac{1}{1+x^2}$ 의 적분이 $\\pi$ 가 되는 결과는 확률론의 코시 분포에서 등장합니다."
    }
  ],
  "problems": [
    {
      "id": "12-1",
      "type": "number",
      "difficulty": 1,
      "question": "$\\int_1^{\\infty} \\frac{1}{x^3}\\,dx$ 의 값을 구하시오. (분수로 입력, 예: 1/2)",
      "answer": "1/2",
      "hints": [
        "$\\frac{1}{x^3} = x^{-3}$ 이므로 부정적분은 $\\frac{x^{-2}}{-2}$ 입니다.",
        "$\\int_1^t x^{-3}\\,dx = \\left[-\\frac{1}{2x^2}\\right]_1^t = -\\frac{1}{2t^2} + \\frac{1}{2}$ 를 구해보세요.",
        "$t \\to \\infty$ 로 보내면 $-\\frac{1}{2t^2} \\to 0$ 이므로 답은 $\\frac{1}{2}$ 입니다."
      ],
      "explanation": "$\\int_1^{\\infty} x^{-3}\\,dx = \\lim_{t \\to \\infty} \\left[-\\frac{1}{2x^2}\\right]_1^t = \\lim_{t \\to \\infty} \\left(-\\frac{1}{2t^2} + \\frac{1}{2}\\right) = \\frac{1}{2}$. $p=3>1$ 이므로 수렴합니다.",
      "wrongAnalysis": "$x^{-3}$ 의 부정적분을 $\\frac{x^{-2}}{-2}$ 가 아닌 $\\frac{x^{-2}}{2}$ 로 쓰는 부호 실수가 흔합니다. 지수에 $1$을 더한 뒤 그 지수로 나누는 공식을 정확히 적용하세요."
    },
    {
      "id": "12-2",
      "type": "choice",
      "difficulty": 2,
      "question": "다음 이상적분 중 발산하는 것은?",
      "choices": [
        "$\\int_1^{\\infty} \\frac{1}{x^2}\\,dx$",
        "$\\int_1^{\\infty} \\frac{1}{x}\\,dx$",
        "$\\int_0^{\\infty} e^{-x}\\,dx$",
        "$\\int_1^{\\infty} \\frac{1}{x^{3/2}}\\,dx$"
      ],
      "answer": "$\\int_1^{\\infty} \\frac{1}{x}\\,dx$",
      "hints": [
        "$p$-적분 판정을 떠올려 보세요: $\\int_1^{\\infty} \\frac{1}{x^p}\\,dx$ 는 $p>1$ 이면 수렴, $p \\leq 1$ 이면 발산합니다.",
        "$\\frac{1}{x} = \\frac{1}{x^1}$ 이므로 $p=1$ 에 해당합니다.",
        "$p=1$ 은 경계값으로, $\\int_1^t \\frac{1}{x}\\,dx = \\ln t \\to \\infty$ 이므로 발산합니다."
      ],
      "explanation": "$\\int_1^{\\infty} \\frac{1}{x}\\,dx = \\lim_{t \\to \\infty} \\ln t = \\infty$ 로 발산합니다. 나머지는 모두 $p>1$ 이거나 지수함수 감소이므로 수렴합니다.",
      "wrongAnalysis": "$\\frac{1}{x}$ 가 $0$으로 수렴하므로 적분도 수렴할 것이라고 오해하기 쉽습니다. 하지만 $a_n \\to 0$ 이 급수 수렴의 충분조건이 아닌 것처럼, 피적분함수가 $0$에 수렴해도 적분은 발산할 수 있습니다."
    },
    {
      "id": "12-3",
      "type": "text",
      "difficulty": 3,
      "question": "$\\int_0^1 \\frac{1}{\\sqrt{x}}\\,dx$ 는 제2종 이상적분입니다. 이 적분의 값을 구하시오. (정수로 입력)",
      "answer": "2",
      "hints": [
        "$\\frac{1}{\\sqrt{x}} = x^{-1/2}$ 이므로, 부정적분은 $\\frac{x^{1/2}}{1/2} = 2\\sqrt{x}$ 입니다.",
        "$x=0$ 에서 피적분함수가 발산하므로, $\\int_{\\varepsilon}^1 x^{-1/2}\\,dx$ 를 계산한 뒤 $\\varepsilon \\to 0^+$ 극한을 취하세요.",
        "$\\int_{\\varepsilon}^1 x^{-1/2}\\,dx = [2\\sqrt{x}]_{\\varepsilon}^1 = 2 - 2\\sqrt{\\varepsilon}$ 이고, $\\varepsilon \\to 0^+$ 이면 $2\\sqrt{\\varepsilon} \\to 0$ 입니다."
      ],
      "explanation": "$\\int_0^1 x^{-1/2}\\,dx = \\lim_{\\varepsilon \\to 0^+} [2\\sqrt{x}]_{\\varepsilon}^1 = \\lim_{\\varepsilon \\to 0^+} (2 - 2\\sqrt{\\varepsilon}) = 2$. 제2종 이상적분이지만 수렴하며, 값은 $2$입니다.",
      "wrongAnalysis": "$x=0$ 에서 피적분함수가 $\\infty$로 발산하므로 적분도 발산한다고 속단하는 실수가 있습니다. 반드시 극한을 계산해서 수렴 여부를 확인해야 합니다."
    },
    {
      "id": "12-4",
      "type": "number",
      "difficulty": 1,
      "question": "$\\displaystyle\\int_0^{\\infty} e^{-x}\\,dx$ 의 값은?",
      "answer": "1",
      "hints": [
        "$\\displaystyle\\int e^{-x}\\,dx = -e^{-x} + C$.",
        "$\\lim_{t \\to \\infty} [-e^{-x}]_0^t = \\lim_{t \\to \\infty} (-e^{-t} + e^0)$."
      ],
      "explanation": "$\\displaystyle\\int_0^{\\infty} e^{-x}\\,dx = \\lim_{t \\to \\infty} [-e^{-x}]_0^t = \\lim_{t \\to \\infty} (-e^{-t} + 1) = 0 + 1 = 1$.",
      "wrongAnalysis": "$e^{-x}$ 의 부정적분을 $e^{-x}$ (부호 실수)로 적거나, $\\lim_{t \\to \\infty} e^{-t}$ 를 $\\infty$ 로 잘못 판단하는 실수가 있습니다."
    },
    {
      "id": "12-5",
      "type": "choice",
      "difficulty": 2,
      "question": "$\\displaystyle\\int_1^{\\infty} \\frac{1}{x^{0.5}}\\,dx$ 는 수렴하는가?",
      "choices": [
        "수렴 (값은 $2$)",
        "발산",
        "수렴 (값은 $1$)",
        "수렴 (값은 $0.5$)"
      ],
      "answer": "발산",
      "hints": [
        "$p$-적분 판정을 적용하세요: $\\displaystyle\\int_1^{\\infty} \\frac{1}{x^p}\\,dx$.",
        "$p = 0.5 \\leq 1$ 이므로 발산합니다."
      ],
      "explanation": "$p = 0.5 < 1$ 이므로 $p$-적분 판정에 의해 발산합니다. $\\displaystyle\\int_1^t x^{-0.5}\\,dx = [2\\sqrt{x}]_1^t = 2\\sqrt{t} - 2 \\to \\infty$.",
      "wrongAnalysis": "$\\frac{1}{\\sqrt{x}} \\to 0$ 이므로 수렴한다고 오해하기 쉽습니다. $p \\leq 1$ 이면 감소 속도가 충분하지 않아 발산합니다."
    }
  ],
  "summary": {
    "keyPoints": [
      "이상적분은 적분 구간이 무한(제1종)이거나 피적분함수가 발산(제2종)하는 적분이다.",
      "$p$-적분 $\\int_1^{\\infty} \\frac{1}{x^p}\\,dx$ 는 $p>1$ 일 때만 수렴한다.",
      "비교판정법을 이용하면 직접 계산 없이도 수렴·발산을 판정할 수 있다."
    ],
    "formulas": [
      "\\int_a^{\\infty} f(x)\\,dx = \\lim_{t \\to \\infty} \\int_a^t f(x)\\,dx",
      "\\int_1^{\\infty} \\frac{1}{x^p}\\,dx \\text{: } p>1 \\text{ 수렴}, p \\leq 1 \\text{ 발산}",
      "0 \\leq f(x) \\leq g(x),\\ \\int g\\,dx\\ \\text{수렴} \\Rightarrow \\int f\\,dx\\ \\text{수렴}"
    ],
    "commonMistakes": [
      "피적분함수가 $0$으로 수렴하면 이상적분도 수렴한다고 착각하는 실수 (반례: $\\frac{1}{x}$)",
      "$p$-적분에서 $p=1$ 을 수렴으로 잘못 판정하는 실수",
      "제2종 이상적분에서 발산점을 인식하지 못하고 그냥 대입하는 실수"
    ],
    "nextConnection": "적분의 이산 버전인 급수로 넘어갑니다. 유한합과 시그마 표기법부터 시작합니다."
  }
}
];
