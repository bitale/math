import { Lesson } from "../../types";

export const integrationLessons: Lesson[] = [
{
  "id": 37,
  "title": "부정적분",
  "category": "적분",
  "level": "기초",
  "question": "도함수가 주어졌을 때, 원래 함수를 어떻게 찾을 수 있을까?",
  "concept": {
    "intro": "부정적분은 미분의 '역연산'입니다. $F'(x) = f(x)$ 일 때 $F(x)$ 를 $f(x)$ 의 부정적분(원시함수)이라 부르고 $\\displaystyle\\int f(x)\\,dx$ 로 나타냅니다.\n\n원시함수는 상수 차이만 빼고 유일합니다. 그래서 결과에는 항상 적분상수 $C$ 를 붙입니다.",
    "intuition": "내가 매 순간 어느 속도로 걸었는지 안다면, '어디서 어디까지 갔는지'는 그 속도를 누적해서 알 수 있습니다. 적분은 변화율을 모으는 작업입니다.",
    "formula": "\\int x^n\\,dx = \\frac{x^{n+1}}{n+1} + C\\ (n \\ne -1)\n\\int \\frac{1}{x}\\,dx = \\ln|x| + C\n\\int e^x\\,dx = e^x + C\n\\int \\cos x\\,dx = \\sin x + C,\\quad \\int \\sin x\\,dx = -\\cos x + C",
    "summary": "• 부정적분은 항상 $+C$\n• 미분 공식의 역방향\n• 검산: 다시 미분하면 원래 식이 나와야 함"
  },
  "examples": [
    {
      "title": "다항식의 부정적분",
      "problem": "$\\displaystyle\\int (3x^2 + 2x - 1)\\,dx$ 를 구하시오.",
      "steps": [
        "각 항을 따로 적분.",
        "$\\displaystyle\\int 3x^2\\,dx = x^3$.",
        "$\\displaystyle\\int 2x\\,dx = x^2$.",
        "$\\displaystyle\\int (-1)\\,dx = -x$. 합치고 $C$ 추가."
      ],
      "answer": "$x^3 + x^2 - x + C$",
      "lesson": "다항식의 적분은 단순히 '지수를 $1$ 올리고, 그 새 지수로 나눈다'는 한 줄 규칙입니다."
    }
  ],
  "problems": [
    {
      "id": "37-1",
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
      "id": "37-2",
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
      "id": "37-3",
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
  "id": 38,
  "title": "정적분",
  "category": "적분",
  "level": "기초",
  "question": "곡선 아래의 넓이를 어떻게 정확하게 계산할 수 있을까?",
  "concept": {
    "intro": "정적분 $\\displaystyle\\int_a^b f(x)\\,dx$ 는 함수의 그래프와 $x$축, $x=a$, $x=b$ 사이의 '부호 있는 넓이'입니다.\n\n원래는 잘게 자른 직사각형들의 넓이를 더한 리만 합의 극한으로 정의되지만, 실제 계산은 다음 단원의 '미적분의 기본정리'를 통해 매우 간단해집니다.",
    "intuition": "넓은 호수의 면적을 모눈종이로 추정한다고 생각해 보세요. 칸을 잘게 쪼갤수록 정확해집니다. 정적분은 그 한계점입니다.",
    "formula": "\\int_a^b f(x)\\,dx = \\lim_{n \\to \\infty} \\sum_{k} f(x_k)\\,\\Delta x\n\\text{부호: }f > 0 \\to +,\\ f < 0 \\to -",
    "summary": "• 정적분 $=$ 부호 있는 넓이\n• 직접 계산은 다음 단원의 정리로\n• 적분 구간을 바꾸면 부호도 바뀜"
  },
  "examples": [
    {
      "title": "직사각형 넓이 확인",
      "problem": "$\\displaystyle\\int_0^3 2\\,dx$ 를 구하시오.",
      "steps": [
        "$f(x) = 2$ 의 그래프 아래 직사각형 넓이.",
        "가로 $3$, 세로 $2 \\;\\Rightarrow\\; 6$."
      ],
      "answer": "$6$",
      "lesson": "상수함수의 정적분은 가로(구간 길이) $\\times$ 세로(상수값) 인 직사각형 넓이입니다."
    }
  ],
  "problems": [
    {
      "id": "38-1",
      "type": "number",
      "difficulty": 1,
      "question": "$\\displaystyle\\int_0^4 3\\,dx$ 의 값은?",
      "answer": "12",
      "hints": [
        "가로 $\\times$ 세로 의 직사각형 넓이."
      ],
      "explanation": "$4 \\times 3 = 12$.",
      "wrongAnalysis": "$f(x)=3$ 자체를 답으로 적는 실수가 있습니다. 적분은 누적이며, 구간 길이가 반영됩니다."
    },
    {
      "id": "38-2",
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
      "id": "38-3",
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
  "id": 39,
  "title": "미적분의 기본정리",
  "category": "적분",
  "level": "중급",
  "question": "미분과 적분이 어떻게 서로 '역연산'으로 연결되어 있을까?",
  "concept": {
    "intro": "미적분의 기본정리(FTC) 는 미분과 적분이 본질적으로 같은 동전의 양면임을 보여줍니다.\n\n제1 기본정리: $F(x) = \\displaystyle\\int_a^x f(t)\\,dt$ 면 $F'(x) = f(x)$.\n제2 기본정리: $\\displaystyle\\int_a^b f(x)\\,dx = F(b) - F(a)$. ($F$ 는 $f$ 의 임의의 원시함수)\n\n즉, '원시함수의 양 끝값의 차'만 계산하면 적분이 끝납니다.\n\n\n\n**미적분의 기본정리의 엄밀한 증명.**\n\n**제1 기본정리.** 정리: $f$가 $[a,b]$에서 연속이면, $F(x) = \\int_a^x f(t)\\,dt$로 정의된 함수 $F$는 $(a,b)$에서 미분가능하고 $F'(x) = f(x)$이다.\n\n증명: 임의의 $x \\in (a,b)$를 고정하자. $h \\neq 0$일 때 $\\dfrac{F(x+h) - F(x)}{h} = \\dfrac{1}{h}\\int_x^{x+h} f(t)\\,dt$이다. $f$가 $x$에서 연속이므로, 임의의 $\\varepsilon > 0$에 대해 $\\delta > 0$이 존재하여 $|t - x| < \\delta$이면 $|f(t) - f(x)| < \\varepsilon$이다. $|h| < \\delta$이면, $x$와 $x+h$ 사이의 모든 $t$에 대해 $|f(t) - f(x)| < \\varepsilon$이다. 따라서 $\\left|\\dfrac{F(x+h)-F(x)}{h} - f(x)\\right| = \\left|\\dfrac{1}{h}\\int_x^{x+h} f(t)\\,dt - f(x)\\right| = \\left|\\dfrac{1}{h}\\int_x^{x+h}[f(t)-f(x)]\\,dt\\right| \\leq \\dfrac{1}{|h|}\\int_{\\min(x,x+h)}^{\\max(x,x+h)} |f(t)-f(x)|\\,dt < \\dfrac{1}{|h|} \\cdot |h| \\cdot \\varepsilon = \\varepsilon$이다. 따라서 $\\lim_{h \\to 0} \\dfrac{F(x+h)-F(x)}{h} = f(x)$, 즉 $F'(x) = f(x)$이다. $\\square$\n\n**제2 기본정리.** 정리: $f$가 $[a,b]$에서 연속이고 $F$가 $f$의 원시함수 ($F' = f$)이면, $\\int_a^b f(x)\\,dx = F(b) - F(a)$이다.\n\n증명: $G(x) = \\int_a^x f(t)\\,dt$라 하면, 제1 기본정리에 의해 $G'(x) = f(x) = F'(x)$이다. 따라서 $(F - G)'(x) = 0$이므로, $F(x) - G(x) = C$ (상수)이다. $x = a$를 대입하면 $F(a) - G(a) = F(a) - 0 = F(a) = C$이다 ($G(a) = \\int_a^a f(t)\\,dt = 0$이므로). 따라서 $G(x) = F(x) - F(a)$이다. $x = b$를 대입하면 $\\int_a^b f(t)\\,dt = G(b) = F(b) - F(a)$이다. $\\square$\n\n제1 기본정리의 핵심은 연속함수의 적분 함수가 미분가능하며 그 도함수가 원래 함수라는 점이고, 제2 기본정리는 이를 이용하여 정적분을 원시함수의 양 끝값의 차로 계산할 수 있게 해줍니다.",
    "intuition": "속도 곡선 아래 넓이가 '이동 거리' 이듯, 변화율을 누적하면 원래 양의 변화량이 됩니다. 결국 적분은 '도착 $-$ 출발' 입니다.",
    "formula": "\\text{FTC 1:}\\ \\frac{d}{dx} \\int_a^x f(t)\\,dt = f(x)\n\\text{FTC 2:}\\ \\int_a^b f(x)\\,dx = F(b) - F(a),\\ F' = f",
    "summary": "• 미분과 적분은 짝꿍\n• 적분 계산은 '$F(b) - F(a)$'\n• FTC1 은 적분 함수의 미분"
  },
  "examples": [
    {
      "title": "FTC 로 적분 계산",
      "problem": "$\\displaystyle\\int_1^3 x^2\\,dx$ 를 구하시오.",
      "steps": [
        "$F(x) = \\dfrac{x^3}{3}$.",
        "$F(3) - F(1) = \\dfrac{27}{3} - \\dfrac{1}{3} = \\dfrac{26}{3}$."
      ],
      "answer": "$\\dfrac{26}{3}$",
      "lesson": "원시함수만 찾을 수 있다면 정적분 계산은 빼기 한 번으로 끝입니다."
    }
  ],
  "problems": [
    {
      "id": "39-1",
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
      "id": "39-2",
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
      "id": "39-3",
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
  "id": 40,
  "title": "치환적분",
  "category": "적분",
  "level": "중급",
  "question": "합성함수를 적분하는 가장 빠른 길은 무엇일까?",
  "concept": {
    "intro": "치환적분은 연쇄법칙의 역과정입니다. 어떤 함수의 일부를 새로운 변수 $u$ 로 두고, $du$ 를 계산해 피적분함수와 미분소를 모두 $u$ 의 식으로 바꿉니다.\n\n핵심은 '$u$ 와 $du$ 가 동시에 보이는 부분 찾기' 입니다.\n\n\n\n**치환적분 공식의 엄밀한 유도.** 정리: $g$가 $[a,b]$에서 미분가능하고 $g'$가 연속이며, $f$가 $g$의 치역을 포함하는 구간에서 연속이면, $\\int_a^b f(g(x))\\,g'(x)\\,dx = \\int_{g(a)}^{g(b)} f(u)\\,du$이다.\n\n증명: $f$가 연속이므로 원시함수 $F$가 존재하여 $F' = f$이다 (FTC 제1 기본정리에 의해). 합성함수 $F(g(x))$에 연쇄법칙(chain rule)을 적용하면 $\\dfrac{d}{dx}[F(g(x))] = F'(g(x)) \\cdot g'(x) = f(g(x)) \\cdot g'(x)$이다. 따라서 $F(g(x))$는 $f(g(x))g'(x)$의 원시함수이다. FTC 제2 기본정리를 적용하면 $\\int_a^b f(g(x))\\,g'(x)\\,dx = F(g(b)) - F(g(a))$이다. 한편 $\\int_{g(a)}^{g(b)} f(u)\\,du = F(g(b)) - F(g(a))$이다 (다시 FTC 제2 기본정리). 양변이 같으므로 $\\int_a^b f(g(x))\\,g'(x)\\,dx = \\int_{g(a)}^{g(b)} f(u)\\,du$이다. $\\square$\n\n이 유도에서 치환 $u = g(x)$는 단순한 '변수 교체'가 아니라, 연쇄법칙과 미적분의 기본정리를 결합한 논리적 귀결임을 알 수 있습니다. $du = g'(x)\\,dx$라는 표기는 이 관계를 미분소(differential) 기호로 압축한 것입니다.",
    "intuition": "복잡한 길을 다시 새로운 이름의 좌표계로 풀어 쓰는 것과 같습니다. 좌표계가 바뀌면 식이 훨씬 단순해질 때가 많습니다.",
    "formula": "u = g(x),\\ du = g'(x)\\,dx\n\\int f(g(x))\\,g'(x)\\,dx = \\int f(u)\\,du",
    "summary": "• $u$ 와 $du$ 가 동시에 보이는 형태 찾기\n• 정적분이면 한계도 함께 바꿀 것\n• 변수 환원은 마지막 단계"
  },
  "examples": [
    {
      "title": "기본 치환",
      "problem": "$\\displaystyle\\int 2x\\,(x^2 + 1)^5\\,dx$ 를 구하시오.",
      "steps": [
        "$u = x^2 + 1,\\ du = 2x\\,dx$.",
        "$\\displaystyle\\int u^5\\,du = \\dfrac{u^6}{6}$.",
        "원래 변수로 환원: $\\dfrac{(x^2+1)^6}{6} + C$."
      ],
      "answer": "$\\dfrac{(x^2+1)^6}{6} + C$",
      "lesson": "안쪽 함수의 미분이 피적분함수에 곱해져 있다면, 치환을 의심해 보세요."
    }
  ],
  "problems": [
    {
      "id": "40-1",
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
      "id": "40-2",
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
      "id": "40-3",
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
    "nextConnection": "치환이 통하지 않는 형태(예: $x \\sin x$)는 '부분적분' 으로 다룹니다. 곱의 미분의 역과정입니다."
  }
},
{
  "id": 41,
  "title": "부분적분",
  "category": "적분",
  "level": "중급",
  "question": "곱으로 이루어진 함수의 적분을 어떻게 다룰까?",
  "concept": {
    "intro": "부분적분은 곱의 미분의 역과정입니다. 공식 $\\displaystyle\\int u\\,dv = uv - \\int v\\,du$ 를 통해 어려운 적분을 더 쉬운 적분으로 바꿉니다.\n\n$u$ 와 $dv$ 를 잘 고르는 것이 핵심이며, LIATE(로그·역삼각·대수·삼각·지수) 규칙이 도움됩니다.\n\n\n\n**부분적분 공식의 엄밀한 유도.** 부분적분은 곱의 미분법(product rule)의 역과정입니다.\n\n유도: 두 함수 $f(x)$와 $g(x)$가 미분가능하다고 하자. 곱의 미분법에 의해 $\\dfrac{d}{dx}[f(x)\\,g(x)] = f'(x)\\,g(x) + f(x)\\,g'(x)$이다. 양변을 $a$에서 $b$까지 적분하면 $\\int_a^b \\dfrac{d}{dx}[f(x)\\,g(x)]\\,dx = \\int_a^b f'(x)\\,g(x)\\,dx + \\int_a^b f(x)\\,g'(x)\\,dx$이다. FTC 제2 기본정리에 의해 좌변은 $[f(x)\\,g(x)]_a^b = f(b)g(b) - f(a)g(a)$이다. 따라서 $f(b)g(b) - f(a)g(a) = \\int_a^b f'(x)\\,g(x)\\,dx + \\int_a^b f(x)\\,g'(x)\\,dx$이다. 이를 정리하면 $\\int_a^b f(x)\\,g'(x)\\,dx = [f(x)\\,g(x)]_a^b - \\int_a^b f'(x)\\,g(x)\\,dx$이다.\n\n부정적분 형태로 쓰면 $\\int f(x)\\,g'(x)\\,dx = f(x)\\,g(x) - \\int f'(x)\\,g(x)\\,dx$이며, $u = f(x)$, $dv = g'(x)\\,dx$로 놓으면 $du = f'(x)\\,dx$, $v = g(x)$이므로 $\\int u\\,dv = uv - \\int v\\,du$가 됩니다. $\\square$\n\n부분적분의 전략적 핵심은 $u$와 $dv$를 잘 선택하여 $\\int v\\,du$가 원래 적분보다 쉬워지게 만드는 것입니다. LIATE 규칙(Logarithmic, Inverse trig, Algebraic, Trigonometric, Exponential)은 $u$를 선택하는 우선순위를 제시합니다: 이 순서에서 앞에 오는 함수를 $u$로 놓으면 미분했을 때 단순해지고, 뒤에 오는 함수를 $dv$로 놓으면 적분이 쉬운 경우가 많습니다.",
    "intuition": "어려운 부분을 미분 가능한 쪽에 맡기고, 적분 가능한 쪽은 그대로 두는 전략입니다. '한 사람은 미분, 한 사람은 적분'을 시키는 셈입니다.",
    "formula": "\\int u\\,dv = uv - \\int v\\,du",
    "summary": "• 곱의 미분의 역\n• $u$ 선택 우선순위: LIATE\n• 두 번 적용해야 하는 경우도 있음"
  },
  "examples": [
    {
      "title": "기본 부분적분",
      "problem": "$\\displaystyle\\int x\\,e^x\\,dx$ 를 구하시오.",
      "steps": [
        "$u = x,\\ dv = e^x\\,dx \\;\\Rightarrow\\; du = dx,\\ v = e^x$.",
        "$\\displaystyle\\int x\\,e^x\\,dx = x e^x - \\int e^x\\,dx$.",
        "$= x e^x - e^x + C = (x-1) e^x + C$."
      ],
      "answer": "$(x-1)\\,e^x + C$",
      "lesson": "$u$ 를 다항식, $dv$ 를 지수함수로 두면 다항식의 차수가 줄어 적분이 점점 쉬워집니다."
    }
  ],
  "problems": [
    {
      "id": "41-1",
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
      "id": "41-2",
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
      "id": "41-3",
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
    "nextConnection": "이제 적분으로 다양한 양(넓이·부피·길이·평균값)을 계산할 수 있습니다. 다음은 적분의 활용입니다."
  }
},
{
  "id": 42,
  "title": "부분분수 분해",
  "category": "적분",
  "level": "중급",
  "question": "유리함수 $\\frac{P(x)}{Q(x)}$를 적분하려면 어떻게 분해해야 하는가?",
  "concept": {
    "intro": "치환적분과 부분적분을 배웠지만, $\\displaystyle\\int \\frac{5x+3}{(x+1)(x+2)}\\,dx$처럼 분모가 인수분해된 유리함수 앞에서는 두 기법 모두 곧바로 적용하기 어렵습니다. 이럴 때 강력한 무기가 부분분수 분해(Partial Fraction Decomposition)입니다. 복잡한 하나의 분수를 간단한 분수 여러 개의 합으로 쪼개면, 각 항은 $\\displaystyle\\int \\frac{A}{x-a}\\,dx = A\\ln|x-a| + C$ 같은 기본 적분으로 돌아갑니다.\n\n가장 기본적인 경우는 분모가 서로 다른 일차 인수의 곱일 때입니다. $\\dfrac{P(x)}{(x-a)(x-b)} = \\dfrac{A}{x-a} + \\dfrac{B}{x-b}$로 놓고, 양변에 $(x-a)(x-b)$를 곱하면 $P(x) = A(x-b) + B(x-a)$가 됩니다. 여기서 $x = a$를 대입하면 $B$ 항이 사라지고 $A$를 바로 구할 수 있고, $x = b$를 대입하면 $A$ 항이 사라지고 $B$를 구할 수 있습니다. 이 방법을 헤비사이드의 은폐법(cover-up method)이라고도 합니다.\n\n분모에 중복 인수가 있으면 분해 형태가 달라집니다. $(x-a)^2$이 분모에 있으면 $\\dfrac{A}{x-a} + \\dfrac{B}{(x-a)^2}$처럼 지수를 $1$부터 중복 차수까지 하나씩 올린 항을 모두 써야 합니다. 예를 들어 $\\dfrac{2x+3}{(x+1)^2} = \\dfrac{A}{x+1} + \\dfrac{B}{(x+1)^2}$로 놓고 계수를 비교합니다.\n\n분모에 기약 이차식(인수분해가 안 되는 이차식)이 포함된 경우에는 분자를 일차식으로 둡니다. 예를 들어 $\\dfrac{P(x)}{(x^2+1)(x-1)} = \\dfrac{Ax+B}{x^2+1} + \\dfrac{C}{x-1}$로 놓습니다. 이 경우 $x = 1$ 대입으로 $C$를 먼저 구한 뒤, 나머지 계수는 양변의 $x$ 거듭제곱 계수를 비교하여 결정합니다. 부분분수 분해의 핵심은 '분모의 인수 유형에 맞는 올바른 꼴을 설정하는 것'이며, 일단 분해가 끝나면 적분은 $\\ln$이나 간단한 거듭제곱 적분으로 귀결됩니다.",
    "intuition": "큰 피자 한 판을 통째로 먹기 어려우면 조각으로 나눠 먹는 것과 같습니다. $\\dfrac{5x+3}{(x+1)(x+2)}$라는 복잡한 분수를 $\\dfrac{A}{x+1} + \\dfrac{B}{x+2}$처럼 한 입 크기의 조각으로 나누면, 각 조각은 우리가 이미 적분할 줄 아는 기본형이 됩니다.",
    "formula": "\\frac{P(x)}{(x-a)(x-b)} = \\frac{A}{x-a} + \\frac{B}{x-b}\n\\frac{P(x)}{(x-a)^2} = \\frac{A}{x-a} + \\frac{B}{(x-a)^2}\n\\frac{P(x)}{(x^2+px+q)(x-a)} = \\frac{Ax+B}{x^2+px+q} + \\frac{C}{x-a}\n\\int \\frac{A}{x-a}\\,dx = A\\ln|x-a| + C\n\\int \\frac{B}{(x-a)^2}\\,dx = -\\frac{B}{x-a} + C",
    "summary": "부분분수 분해는 복잡한 유리함수를 간단한 분수의 합으로 쪼개는 기법이다. 분모의 인수 유형(서로 다른 일차, 중복 일차, 기약 이차)에 따라 분해 형태가 달라지며, 미지 계수는 특정 $x$ 대입 또는 계수 비교로 결정한다. 분해 후 각 항은 $\\ln$이나 간단한 거듭제곱 적분으로 바로 계산할 수 있다."
  },
  "examples": [
    {
      "title": "부분분수 분해를 이용한 적분",
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
    }
  ],
  "problems": [
    {
      "id": "42-1",
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
      "id": "42-2",
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
      "id": "42-3",
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
    "nextConnection": "부분분수 분해를 마쳤습니다. 이제 적분의 다양한 활용으로 넘어갑니다."
  }
},
{
  "id": 43,
  "title": "적분 활용",
  "category": "적분",
  "level": "중급",
  "question": "적분으로 넓이 말고 또 무엇을 알 수 있을까?",
  "concept": {
    "intro": "정적분은 단순한 '넓이' 외에도 부피, 곡선의 길이, 평균값, 누적량 등을 계산할 수 있습니다.\n\n핵심 발상은 '작은 조각의 양을 적분으로 모으기'입니다. 어떤 양이든 '잘라서 더한다'는 발상이 곧 적분입니다.",
    "intuition": "케이크를 얇게 잘라서 한 조각의 부피를 알면, 전체를 더해 전체 부피를 알 수 있습니다. 잘게 자른 조각이 무엇이냐에 따라 의미가 달라집니다.",
    "formula": "\\text{두 곡선 사이의 넓이:}\\ \\int_a^b (\\text{위} - \\text{아래})\\,dx\n\\text{회전체의 부피(원판법):}\\ V = \\pi \\int_a^b [f(x)]^2\\,dx\n\\text{평균값:}\\ \\frac{1}{b-a}\\int_a^b f\\,dx",
    "summary": "• 잘라서 더한다는 발상\n• 도형의 의미를 식에 반영\n• 그림을 그리는 것이 절반"
  },
  "examples": [
    {
      "title": "두 곡선 사이 넓이",
      "problem": "$y = x^2$ 와 $y = 2x$ 사이의 넓이를 구하시오 $(x \\in [0,2])$.",
      "steps": [
        "교점: $x^2 = 2x \\;\\Rightarrow\\; x=0,\\,2$.",
        "구간 $(0,2)$ 에서 $2x > x^2$.",
        "$S = \\displaystyle\\int_0^2 (2x - x^2)\\,dx = \\left[x^2 - \\dfrac{x^3}{3}\\right]_0^2 = 4 - \\dfrac{8}{3} = \\dfrac{4}{3}$."
      ],
      "answer": "$\\dfrac{4}{3}$",
      "lesson": "두 곡선 사이 넓이는 항상 (위 함수 $-$ 아래 함수)를 적분합니다. 교점을 먼저 찾고 어느 쪽이 위인지 확인하세요."
    }
  ],
  "problems": [
    {
      "id": "43-1",
      "type": "number",
      "difficulty": 2,
      "question": "$f(x) = x^2$ 의 구간 $[0,3]$ 에서의 평균값은?",
      "answer": "3",
      "hints": [
        "평균값 $= \\dfrac{1}{b-a}\\displaystyle\\int_a^b f\\,dx$.",
        "$\\displaystyle\\int_0^3 x^2\\,dx = 9$.",
        "$\\dfrac{1}{3}$ 곱하기."
      ],
      "explanation": "$\\dfrac{9}{3} = 3$.",
      "wrongAnalysis": "$\\dfrac{f(0) + f(3)}{2}$ 처럼 양 끝의 산술평균으로 답하는 실수가 흔합니다. 평균값 정리의 정의는 적분 평균입니다."
    },
    {
      "id": "43-2",
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
      "id": "43-3",
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
    "nextConnection": "이제 '무한히 많은 항을 더하는' 새로운 적분 비슷한 도구가 등장합니다. 다음 단원은 수열과 급수입니다."
  }
},
{
  "id": 44,
  "title": "이상적분",
  "category": "적분",
  "level": "고급",
  "question": "적분 구간이 무한이거나 피적분함수가 발산할 때도 적분할 수 있는가?",
  "concept": {
    "intro": "지금까지 우리는 $\\int_a^b f(x)\\,dx$ 처럼 유한한 구간 $[a,b]$ 위에서, 피적분함수 $f(x)$가 유계(bounded)인 경우만 다루었습니다. 하지만 물리학이나 확률론에서는 적분 구간이 $[1,\\infty)$ 처럼 무한히 뻗거나, 피적분함수가 특정 점에서 $\\pm\\infty$로 발산하는 상황이 빈번하게 등장합니다. 이러한 적분을 통틀어 이상적분(improper integral)이라 부릅니다.\n\n이상적분은 크게 두 종류로 나뉩니다. **제1종 이상적분**은 적분 구간 자체가 무한인 경우입니다. 예를 들어 $\\int_1^{\\infty} \\frac{1}{x^2}\\,dx$ 처럼 윗끝이 $\\infty$이거나, $\\int_{-\\infty}^{0} e^x\\,dx$ 처럼 아랫끝이 $-\\infty$인 적분입니다. 이런 적분은 유한 구간 $[1,t]$ 위에서 먼저 적분한 뒤 $t \\to \\infty$ 극한을 취하는 방식으로 정의합니다.\n\n**제2종 이상적분**은 적분 구간은 유한하지만, 그 구간 내부나 끝점에서 피적분함수가 발산하는 경우입니다. 예를 들어 $\\int_0^1 \\frac{1}{\\sqrt{x}}\\,dx$ 에서는 $x \\to 0^+$ 일 때 피적분함수가 $+\\infty$로 발산합니다. 이때는 발산점을 피해 $\\int_{\\varepsilon}^1 \\frac{1}{\\sqrt{x}}\\,dx$ 를 계산한 뒤 $\\varepsilon \\to 0^+$ 극한을 취합니다.\n\n이상적분의 핵심 물음은 '극한값이 유한하게 수렴하는가, 아니면 발산하는가'입니다. 이를 판정하기 위한 강력한 도구가 **$p$-적분 판정**과 **비교판정법**입니다. $\\int_1^{\\infty} \\frac{1}{x^p}\\,dx$ 는 $p>1$ 일 때 수렴, $p \\leq 1$ 일 때 발산합니다. 이 결과를 '기준 적분'으로 삼아 다른 이상적분과 비교하면, 직접 계산하지 않고도 수렴·발산을 판정할 수 있습니다. 이상적분의 수렴·발산 개념은 다음 단원인 무한급수(수열과 급수)에서 적분판정법의 이론적 토대가 됩니다.",
    "intuition": "무한히 긴 울타리를 칠한다고 상상해 보세요. 울타리의 높이가 $f(x) = \\frac{1}{x^2}$이면 멀리 갈수록 높이가 급격히 줄어들어, 필요한 페인트의 총량은 유한합니다. 반면 높이가 $f(x) = \\frac{1}{x}$이면 줄어드는 속도가 너무 느려서, 아무리 칠해도 페인트가 모자랍니다.\n\n결국 이상적분의 수렴은 '꼬리가 충분히 빨리 줄어드는가'의 문제입니다. $\\frac{1}{x^2}$은 빨리 줄어드니 수렴, $\\frac{1}{x}$는 느리게 줄어드니 발산합니다.",
    "formula": "\\text{제1종:}\\ \\int_a^{\\infty} f(x)\\,dx = \\lim_{t \\to \\infty} \\int_a^t f(x)\\,dx\n\\text{제2종:}\\ \\int_a^b f(x)\\,dx = \\lim_{\\varepsilon \\to 0^+} \\int_{a+\\varepsilon}^b f(x)\\,dx \\quad (f\\text{가 }x=a\\text{에서 발산})\n\\int_1^{\\infty} \\frac{1}{x^p}\\,dx = \\begin{cases} \\dfrac{1}{p-1} & (p>1,\\\\ \\text{수렴}) \\\\ \\infty & (p \\leq 1,\\\\ \\text{발산}) \\end{cases}\n\\text{비교판정법:}\\ 0 \\leq f(x) \\leq g(x)\\ \\text{이고}\\ \\int g\\,dx\\ \\text{수렴} \\Rightarrow \\int f\\,dx\\ \\text{수렴}",
    "summary": "• 제1종 이상적분: 구간이 무한 → 유한 구간에서 적분 후 극한\n• 제2종 이상적분: 피적분함수 발산 → 발산점을 피해 적분 후 극한\n• $p$-적분: $p>1$ 수렴, $p \\leq 1$ 발산\n• 비교판정법으로 직접 계산 없이 수렴·발산 판정 가능"
  },
  "examples": [
    {
      "title": "$\\int_1^{\\infty} \\frac{1}{x^2}\\,dx$ 의 수렴 확인",
      "problem": "$\\int_1^{\\infty} \\frac{1}{x^2}\\,dx$ 가 수렴하는지 판정하고, 수렴하면 그 값을 구하시오.",
      "steps": [
        "유한 구간으로 바꾼다: $\\int_1^{\\infty} \\frac{1}{x^2}\\,dx = \\lim_{t \\to \\infty} \\int_1^t \\frac{1}{x^2}\\,dx$.",
        "부정적분을 구한다: $\\int \\frac{1}{x^2}\\,dx = -\\frac{1}{x} + C$.",
        "정적분을 계산한다: $\\int_1^t \\frac{1}{x^2}\\,dx = \\left[-\\frac{1}{x}\\right]_1^t = -\\frac{1}{t} + 1$.",
        "극한을 취한다: $\\lim_{t \\to \\infty} \\left(-\\frac{1}{t} + 1\\right) = 0 + 1 = 1$."
      ],
      "answer": "수렴하며, 값은 $1$이다.",
      "lesson": "$p=2 > 1$ 이므로 $p$-적분 판정에 의해 수렴합니다. 이처럼 지수가 $1$보다 큰지를 먼저 확인하면 계산 전에 수렴 여부를 알 수 있습니다."
    }
  ],
  "problems": [
    {
      "id": "44-1",
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
      "id": "44-2",
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
      "id": "44-3",
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
    "nextConnection": "이상적분의 수렴·발산 개념은 다음 레슨에서 배우는 무한급수의 수렴 판정에 직접 사용됩니다."
  }
},
{
  "id": 45,
  "title": "리만 적분의 엄밀한 정의",
  "category": "적분",
  "level": "심화",
  "question": "정적분을 엄밀하게 정의하려면 어떤 수학적 구조가 필요한가?",
  "concept": {
    "intro": "지금까지 정적분을 '리만 합의 극한' 정도로만 다루었습니다. 이제 분할(partition), 상합(upper sum), 하합(lower sum), 다르부 적분(Darboux integral)의 관점에서 리만 적분을 엄밀하게 정의합니다.\n\n**정의 1. 분할(Partition).** 닫힌구간 $[a,b]$의 분할 $P$란 유한 집합 $P = \\{x_0, x_1, \\ldots, x_n\\}$으로서 $a = x_0 < x_1 < \\cdots < x_n = b$를 만족하는 것이다. 각 소구간 $[x_{i-1}, x_i]$의 길이를 $\\Delta x_i = x_i - x_{i-1}$로 쓴다.\n\n**정의 2. 상합과 하합(Upper & Lower Darboux Sums).** $f$가 $[a,b]$에서 유계인 함수이고 $P = \\{x_0, \\ldots, x_n\\}$가 $[a,b]$의 분할일 때, 각 소구간에서의 상한과 하한을 $M_i = \\sup_{x \\in [x_{i-1}, x_i]} f(x)$, $m_i = \\inf_{x \\in [x_{i-1}, x_i]} f(x)$로 정의한다. 그러면 상합(upper sum) $U(f, P) = \\displaystyle\\sum_{i=1}^{n} M_i \\cdot \\Delta x_i$, 하합(lower sum) $L(f, P) = \\displaystyle\\sum_{i=1}^{n} m_i \\cdot \\Delta x_i$이다.\n\n직관적으로, $U(f,P)$는 각 소구간에서 함숫값의 '최댓값'으로 직사각형을 쌓은 것이고, $L(f,P)$는 '최솟값'으로 쌓은 것이므로, 항상 $L(f,P) \\leq \\int_a^b f \\leq U(f,P)$의 관계가 성립해야 할 것입니다. 이를 엄밀히 하는 것이 리만 적분의 정의입니다.\n\n**정의 3. 분할의 세분(Refinement).** 분할 $P^*$가 $P$의 세분이란 $P \\subseteq P^*$인 것이다. 즉 $P$에 점을 추가하여 더 잘게 쪼갠 것이다.\n\n**보조정리.** $P^*$가 $P$의 세분이면 $L(f, P) \\leq L(f, P^*) \\leq U(f, P^*) \\leq U(f, P)$이다.\n\n증명: $P^*$가 $P$에 점 하나를 추가한 세분인 경우를 먼저 보이자. $P = \\{x_0, \\ldots, x_n\\}$이고 $P^* = P \\cup \\{x^*\\}$, $x_{j-1} < x^* < x_j$라 하자. $[x_{j-1}, x_j]$가 $[x_{j-1}, x^*]$와 $[x^*, x_j]$로 분할된다. $m_j = \\inf_{[x_{j-1}, x_j]} f$이고, $m_j' = \\inf_{[x_{j-1}, x^*]} f$, $m_j'' = \\inf_{[x^*, x_j]} f$라 하면, $m_j \\leq m_j'$이고 $m_j \\leq m_j''$이다 (더 작은 구간에서의 하한이 더 크거나 같다). 따라서 $m_j \\cdot \\Delta x_j = m_j(x^* - x_{j-1}) + m_j(x_j - x^*) \\leq m_j'(x^* - x_{j-1}) + m_j''(x_j - x^*)$이므로 $L(f,P) \\leq L(f,P^*)$이다. 상합에 대해서도 대칭적으로 $U(f,P^*) \\leq U(f,P)$가 성립한다. 점을 여러 개 추가하는 경우는 귀납법으로 확장된다. $\\square$\n\n**정의 4. 상적분과 하적분(Upper & Lower Integrals).** $f$가 $[a,b]$에서 유계일 때, 하적분 $\\underline{\\int_a^b} f\\,dx = \\sup_P L(f,P)$, 상적분 $\\overline{\\int_a^b} f\\,dx = \\inf_P U(f,P)$로 정의한다. 여기서 상한과 하한은 $[a,b]$의 모든 분할 $P$에 대해 취한다.\n\n위의 보조정리에 의해, 임의의 두 분할 $P_1, P_2$에 대해 $P^* = P_1 \\cup P_2$를 공통 세분으로 잡으면 $L(f, P_1) \\leq L(f, P^*) \\leq U(f, P^*) \\leq U(f, P_2)$이므로, 모든 하합은 모든 상합 이하이다. 따라서 $\\underline{\\int_a^b} f \\leq \\overline{\\int_a^b} f$가 항상 성립한다.\n\n**정의 5. 리만 적분가능(Riemann Integrable).** $f$가 $[a,b]$에서 리만 적분가능하다 $\\Longleftrightarrow$ $\\underline{\\int_a^b} f\\,dx = \\overline{\\int_a^b} f\\,dx$이다. 이 공통값을 $\\int_a^b f\\,dx$로 쓴다.\n\n**동치조건 (리만 판정 조건).** $f$가 $[a,b]$에서 리만 적분가능할 필요충분조건은: 임의의 $\\varepsilon > 0$에 대해 분할 $P$가 존재하여 $U(f, P) - L(f, P) < \\varepsilon$인 것이다.\n\n증명 ($\\Rightarrow$): $\\sup_P L(f,P) = \\inf_P U(f,P) = I$라 하자. 임의의 $\\varepsilon > 0$에 대해, 상한과 하한의 정의에 의해 $L(f, P_1) > I - \\varepsilon/2$인 분할 $P_1$과 $U(f, P_2) < I + \\varepsilon/2$인 분할 $P_2$가 존재한다. $P = P_1 \\cup P_2$로 놓으면 세분 성질에 의해 $U(f,P) - L(f,P) \\leq U(f,P_2) - L(f,P_1) < (I + \\varepsilon/2) - (I - \\varepsilon/2) = \\varepsilon$.\n\n증명 ($\\Leftarrow$): 가정에 의해 임의의 $\\varepsilon > 0$에 대해 $U(f,P) - L(f,P) < \\varepsilon$인 $P$가 존재한다. 그러면 $0 \\leq \\overline{\\int} f - \\underline{\\int} f \\leq U(f,P) - L(f,P) < \\varepsilon$이다. $\\varepsilon$이 임의이므로 $\\overline{\\int} f = \\underline{\\int} f$이다. $\\square$",
    "intuition": "상합은 계단 위에서 그래프를 '덮는' 직사각형의 넓이이고, 하합은 그래프 '안에 들어가는' 직사각형의 넓이입니다. 분할을 잘게 만들수록 이 두 값은 서로 가까워집니다. 두 값이 결국 일치하면 그 공통값이 바로 적분입니다. 마치 위에서 내려오는 천장과 아래에서 올라가는 바닥이 빈틈 없이 만나는 것과 같습니다.",
    "formula": "U(f,P) = \\sum_{i=1}^{n} M_i \\cdot \\Delta x_i,\\quad M_i = \\sup_{[x_{i-1},x_i]} f\nL(f,P) = \\sum_{i=1}^{n} m_i \\cdot \\Delta x_i,\\quad m_i = \\inf_{[x_{i-1},x_i]} f\n\\overline{\\int_a^b} f = \\inf_P U(f,P),\\quad \\underline{\\int_a^b} f = \\sup_P L(f,P)\nf \\text{ 적분가능} \\iff \\forall\\,\\varepsilon>0,\\ \\exists\\,P:\\ U(f,P)-L(f,P)<\\varepsilon",
    "summary": "• 분할 $P$: 구간을 유한개의 소구간으로 나눈 것\n• 상합 $U(f,P)$: 각 소구간의 $\\sup$으로 계산한 넓이\n• 하합 $L(f,P)$: 각 소구간의 $\\inf$로 계산한 넓이\n• 세분하면 상합은 줄고, 하합은 늘어남\n• 상적분 $=$ 하적분이면 리만 적분가능"
  },
  "examples": [
    {
      "title": "균등 분할에서 상합·하합 직접 계산",
      "problem": "$f(x) = x^2$, 구간 $[0,1]$에서 균등 $n$-분할 $P_n$에 대해 $U(f,P_n)$과 $L(f,P_n)$을 구하고, $n \\to \\infty$일 때 $U - L \\to 0$을 확인하시오.",
      "steps": [
        "$\\Delta x_i = \\dfrac{1}{n}$, $x_i = \\dfrac{i}{n}$ ($i = 0, 1, \\ldots, n$).",
        "$f(x) = x^2$은 $[0,1]$에서 증가이므로 $M_i = f(x_i) = \\dfrac{i^2}{n^2}$, $m_i = f(x_{i-1}) = \\dfrac{(i-1)^2}{n^2}$.",
        "$U(f, P_n) = \\displaystyle\\sum_{i=1}^{n} \\dfrac{i^2}{n^2} \\cdot \\dfrac{1}{n} = \\dfrac{1}{n^3} \\sum_{i=1}^{n} i^2 = \\dfrac{n(n+1)(2n+1)}{6n^3} = \\dfrac{(n+1)(2n+1)}{6n^2}$.",
        "$L(f, P_n) = \\displaystyle\\sum_{i=1}^{n} \\dfrac{(i-1)^2}{n^2} \\cdot \\dfrac{1}{n} = \\dfrac{1}{n^3} \\sum_{i=0}^{n-1} i^2 = \\dfrac{(n-1)n(2n-1)}{6n^3} = \\dfrac{(n-1)(2n-1)}{6n^2}$.",
        "$U - L = \\dfrac{(n+1)(2n+1) - (n-1)(2n-1)}{6n^2} = \\dfrac{6n}{6n^2} = \\dfrac{1}{n} \\to 0$. 또한 $\\lim U = \\lim L = \\dfrac{1}{3}$이므로 $\\int_0^1 x^2\\,dx = \\dfrac{1}{3}$."
      ],
      "answer": "$U(f,P_n) = \\dfrac{(n+1)(2n+1)}{6n^2}$, $L(f,P_n) = \\dfrac{(n-1)(2n-1)}{6n^2}$, $U - L = \\dfrac{1}{n} \\to 0$",
      "lesson": "$f(x) = x^2$이 증가함수이므로 각 소구간에서 $\\sup$은 오른쪽 끝, $\\inf$는 왼쪽 끝에서 달성됩니다. $U - L$이 $0$으로 수렴하므로 리만 적분가능하며, 그 값은 $\\dfrac{1}{3}$입니다."
    }
  ],
  "problems": [
    {
      "id": "45-1",
      "type": "choice",
      "difficulty": 1,
      "question": "$f(x) = 3x$, 구간 $[0,2]$에서 분할 $P = \\{0, 1, 2\\}$일 때 상합 $U(f,P)$의 값은?",
      "choices": [
        "$6$",
        "$9$",
        "$3$",
        "$12$"
      ],
      "answer": "$9$",
      "hints": [
        "소구간 $[0,1]$에서 $f$는 증가하므로 $M_1 = f(1) = 3$입니다.",
        "소구간 $[1,2]$에서 $M_2 = f(2) = 6$입니다.",
        "$U(f,P) = M_1 \\cdot \\Delta x_1 + M_2 \\cdot \\Delta x_2 = 3 \\cdot 1 + 6 \\cdot 1$."
      ],
      "explanation": "$f(x) = 3x$는 증가함수이므로 각 소구간의 상한은 오른쪽 끝점에서 달성됩니다. $M_1 = f(1) = 3$, $M_2 = f(2) = 6$, $\\Delta x_1 = \\Delta x_2 = 1$이므로 $U(f,P) = 3 \\cdot 1 + 6 \\cdot 1 = 9$.",
      "wrongAnalysis": "상합과 하합을 혼동하여 왼쪽 끝점의 함숫값을 사용하는 실수가 흔합니다. 상합은 각 소구간에서의 $\\sup$ (증가함수이면 오른쪽 끝)을 사용합니다."
    },
    {
      "id": "45-2",
      "type": "number",
      "difficulty": 2,
      "question": "$f(x) = x^2$, 구간 $[0,1]$에서 균등 $4$-분할 $P = \\{0, 1/4, 1/2, 3/4, 1\\}$에 대해 $U(f,P) - L(f,P)$의 값은? (소수점으로 입력)",
      "answer": "0.25",
      "hints": [
        "$f(x)=x^2$은 $[0,1]$에서 증가이므로 $M_i = f(x_i)$, $m_i = f(x_{i-1})$입니다.",
        "$U - L = \\sum (M_i - m_i) \\cdot \\Delta x_i = \\sum (f(x_i) - f(x_{i-1})) \\cdot \\dfrac{1}{4}$.",
        "이것은 망원급수입니다: $\\dfrac{1}{4}\\sum (f(x_i) - f(x_{i-1})) = \\dfrac{1}{4}(f(1) - f(0)) = \\dfrac{1}{4}$."
      ],
      "explanation": "$f$가 증가함수이면 $U(f,P) - L(f,P) = \\sum_{i=1}^n (f(x_i) - f(x_{i-1})) \\cdot \\Delta x_i$이다. 균등 분할이면 $\\Delta x_i = \\dfrac{1}{4}$이므로 $U - L = \\dfrac{1}{4} \\sum_{i=1}^4 (f(x_i) - f(x_{i-1})) = \\dfrac{1}{4}(f(1) - f(0)) = \\dfrac{1}{4}(1 - 0) = 0.25$.",
      "wrongAnalysis": "각 항을 하나하나 계산하려다 산술 실수를 하기 쉽습니다. 증가함수의 균등 분할에서 $U - L$은 망원급수(telescoping)로 $\\dfrac{f(b)-f(a)}{n}$으로 깔끔하게 정리됩니다."
    },
    {
      "id": "45-3",
      "type": "text",
      "difficulty": 3,
      "question": "디리클레 함수 $D(x)$는 $x$가 유리수이면 $1$, 무리수이면 $0$으로 정의됩니다. $[0,1]$의 임의의 분할 $P$에 대해 $U(D,P)$와 $L(D,P)$의 값은 각각 얼마이며, $D$는 리만 적분가능한가? (답 형식: U=숫자, L=숫자, 불가능 또는 가능)",
      "answer": "U=1, L=0, 불가능",
      "hints": [
        "임의의 소구간 $[x_{i-1}, x_i]$에는 유리수와 무리수가 모두 존재합니다 (유리수와 무리수의 조밀성).",
        "따라서 모든 소구간에서 $M_i = \\sup D = 1$, $m_i = \\inf D = 0$입니다.",
        "$U(D,P) = \\sum 1 \\cdot \\Delta x_i = b - a = 1$, $L(D,P) = \\sum 0 \\cdot \\Delta x_i = 0$이므로 $U - L = 1$이 어떤 분할로도 줄어들지 않습니다."
      ],
      "explanation": "모든 구간에 유리수와 무리수가 조밀하게 분포하므로, 어떤 분할을 잡더라도 $M_i = 1$, $m_i = 0$입니다. 따라서 $U(D,P) = 1$, $L(D,P) = 0$이며, $\\overline{\\int} D = 1 \\neq 0 = \\underline{\\int} D$이므로 디리클레 함수는 리만 적분불가능합니다.",
      "wrongAnalysis": "유리수가 가산 집합이라는 점에서 '0에 가까운 값이 나올 것'이라고 추론하는 실수가 있습니다. 가산 집합이라 하더라도 모든 구간에 조밀하게 퍼져 있으므로, $\\sup$은 항상 $1$이 됩니다. 이 함수가 적분불가능한 이유는 불연속점이 '측도 $0$'이 아니기 때문이며, 이는 다음 단원의 르베그 판정 조건과 연결됩니다."
    }
  ],
  "summary": {
    "keyPoints": [
      "리만 적분은 상합과 하합의 상한·하한이 일치할 때 정의된다.",
      "세분하면 상합은 줄고 하합은 늘어난다: $L(f,P) \\leq L(f,P^*) \\leq U(f,P^*) \\leq U(f,P)$.",
      "리만 판정 조건: $\\forall\\,\\varepsilon > 0$, $\\exists\\,P$: $U(f,P) - L(f,P) < \\varepsilon$."
    ],
    "formulas": [
      "U(f,P) = \\sum M_i \\cdot \\Delta x_i,\\quad L(f,P) = \\sum m_i \\cdot \\Delta x_i",
      "\\overline{\\int_a^b} f = \\inf_P U(f,P),\\quad \\underline{\\int_a^b} f = \\sup_P L(f,P)",
      "\\text{적분가능} \\iff \\sup L = \\inf U \\iff \\forall\\varepsilon>0,\\ \\exists P:\\ U-L<\\varepsilon"
    ],
    "commonMistakes": [
      "$\\sup$과 $\\inf$를 $\\max$, $\\min$으로 혼동하는 실수 (유계이지만 최댓값이 달성되지 않을 수 있음)",
      "세분 성질의 부등호 방향을 반대로 기억하는 실수",
      "디리클레 함수처럼 적분불가능한 예의 존재를 간과하는 실수"
    ],
    "nextConnection": "리만 적분의 정의를 세웠으니, 이제 '어떤 함수가 적분가능한가?'라는 핵심 질문에 답합니다. 연속함수와 단조함수의 적분가능성, 그리고 르베그 판정 조건을 다룹니다."
  }
},
{
  "id": 46,
  "title": "적분가능성의 조건",
  "category": "적분",
  "level": "심화",
  "question": "어떤 함수가 리만 적분가능한가? 그 충분조건과 필요충분조건은 무엇인가?",
  "concept": {
    "intro": "앞 단원에서 리만 적분의 엄밀한 정의와 판정 조건($\\forall\\,\\varepsilon > 0$, $\\exists\\,P$: $U(f,P) - L(f,P) < \\varepsilon$)을 배웠습니다. 이제 핵심 질문에 답합니다: 어떤 함수가 리만 적분가능한가?\n\n**정리 1. 연속함수의 적분가능성.** $f$가 닫힌구간 $[a,b]$에서 연속이면 $f$는 리만 적분가능하다.\n\n증명: 핵심 도구는 균등연속성(uniform continuity)이다. $f$가 $[a,b]$에서 연속이고 $[a,b]$가 닫힌 유계 구간(콤팩트)이므로, 하이네-칸토어(Heine-Cantor) 정리에 의해 $f$는 $[a,b]$에서 균등연속이다. 즉, 임의의 $\\varepsilon > 0$에 대해 $\\delta > 0$이 존재하여, $|x - y| < \\delta$인 모든 $x, y \\in [a,b]$에 대해 $|f(x) - f(y)| < \\dfrac{\\varepsilon}{b - a}$이다.\n\n이제 $\\|P\\| < \\delta$인 분할 $P = \\{x_0, \\ldots, x_n\\}$을 잡자 (여기서 $\\|P\\| = \\max_i \\Delta x_i$는 분할의 노름). 각 소구간 $[x_{i-1}, x_i]$의 길이가 $\\delta$보다 작으므로, 이 소구간 위의 임의의 두 점 $s, t$에 대해 $|f(s) - f(t)| < \\dfrac{\\varepsilon}{b-a}$이다. 따라서 $M_i - m_i = \\sup_{[x_{i-1},x_i]} f - \\inf_{[x_{i-1},x_i]} f \\leq \\dfrac{\\varepsilon}{b-a}$이다.\n\n그러면 $U(f,P) - L(f,P) = \\displaystyle\\sum_{i=1}^{n}(M_i - m_i)\\,\\Delta x_i \\leq \\dfrac{\\varepsilon}{b-a} \\sum_{i=1}^{n} \\Delta x_i = \\dfrac{\\varepsilon}{b-a} \\cdot (b-a) = \\varepsilon$이다.\n\n임의의 $\\varepsilon > 0$에 대해 $U(f,P) - L(f,P) < \\varepsilon$인 분할 $P$가 존재하므로, 리만 판정 조건에 의해 $f$는 리만 적분가능하다. $\\square$\n\n이 증명에서 '점별 연속'이 아닌 '균등연속'을 사용하는 것이 결정적입니다. 점별 연속에서는 각 점마다 $\\delta$가 달라질 수 있어 모든 소구간을 동시에 제어할 수 없지만, 균등연속에서는 하나의 $\\delta$가 전체 구간에서 통용되므로 분할의 노름만 $\\delta$ 미만으로 잡으면 됩니다.\n\n**정리 2. 단조함수의 적분가능성.** $f$가 $[a,b]$에서 단조함수(단조증가 또는 단조감소)이면 $f$는 리만 적분가능하다.\n\n증명: $f$가 단조증가인 경우를 보이자 (단조감소는 $-f$에 적용). 균등 $n$-분할 $P_n$을 잡으면 $\\Delta x_i = \\dfrac{b-a}{n}$이다. $f$가 증가이므로 $M_i = f(x_i)$, $m_i = f(x_{i-1})$이다.\n\n$U(f,P_n) - L(f,P_n) = \\displaystyle\\sum_{i=1}^{n}(f(x_i) - f(x_{i-1})) \\cdot \\dfrac{b-a}{n} = \\dfrac{b-a}{n} \\sum_{i=1}^{n}(f(x_i) - f(x_{i-1}))$.\n\n이 합은 망원급수(telescoping sum)이므로 $\\sum_{i=1}^{n}(f(x_i) - f(x_{i-1})) = f(x_n) - f(x_0) = f(b) - f(a)$이다.\n\n따라서 $U(f,P_n) - L(f,P_n) = \\dfrac{(b-a)(f(b) - f(a))}{n}$이다. 임의의 $\\varepsilon > 0$에 대해 $n > \\dfrac{(b-a)(f(b)-f(a))}{\\varepsilon}$로 잡으면 $U - L < \\varepsilon$이므로, 리만 판정 조건이 만족된다. $\\square$\n\n이 증명의 핵심은 망원급수로 인해 합이 $f(b) - f(a)$로 상쇄되어, $U - L$이 $\\dfrac{1}{n}$의 속도로 $0$에 수렴한다는 점입니다. 단조함수는 불연속점을 가질 수 있지만(최대 가산개), 리만 적분가능성에는 영향을 주지 않습니다.\n\n**정리 3. 르베그 판정 조건 (Lebesgue's Criterion).** (증명 없이 소개) 유계함수 $f: [a,b] \\to \\mathbb{R}$가 리만 적분가능할 필요충분조건은, $f$의 불연속점의 집합이 르베그 측도(Lebesgue measure) $0$인 것이다.\n\n이 심오한 정리는 리만 적분가능성을 완전히 특성화합니다. 연속함수는 불연속점이 없으므로(측도 $0$) 적분가능하고, 단조함수의 불연속점은 최대 가산개이므로(가산 집합은 측도 $0$) 적분가능합니다. 반면 디리클레 함수 $D(x)$는 모든 점에서 불연속이므로(불연속점의 집합 $= [0,1]$, 측도 $1$) 적분불가능합니다.\n\n흥미로운 예로, 톰에 함수(Thomae's function) $T(x)$는 무리수에서 $0$, 유리수 $p/q$ (기약분수)에서 $1/q$로 정의됩니다. 이 함수는 무리수에서 연속, 유리수에서 불연속이며, 불연속점(유리수)은 가산 집합이므로 측도 $0$입니다. 따라서 르베그 판정에 의해 리만 적분가능하며, $\\int_0^1 T(x)\\,dx = 0$입니다. 디리클레 함수와 비교하면, '어디서 불연속인가'가 아니라 '불연속점이 얼마나 많은가(측도)'가 적분가능성을 결정합니다.",
    "intuition": "연속함수가 적분가능한 이유는 직관적으로 명쾌합니다: 함수가 연속이면 구간을 충분히 잘게 자르면 각 소구간에서 함숫값의 변동이 아주 작아집니다. 변동이 작으면 상합과 하합의 차이도 작아지고, 결국 $0$에 수렴합니다. 단조함수는 '한 방향으로만 변한다'는 성질 덕분에, 전체 변동이 양 끝값의 차이로 제한됩니다. 마치 계단을 한 방향으로만 오르면 총 높이 변화가 시작과 끝의 차이를 넘지 않는 것과 같습니다.",
    "formula": "f \\in C[a,b] \\Rightarrow f \\text{ 리만 적분가능}\n\\text{(증명 핵심: 균등연속성으로 } M_i - m_i < \\frac{\\varepsilon}{b-a} \\text{ 제어)}\nf \\text{ 단조} \\Rightarrow U(f,P_n) - L(f,P_n) = \\frac{(b-a)(f(b)-f(a))}{n} \\to 0\n\\text{르베그 판정: 적분가능} \\iff \\text{불연속점의 집합이 측도 } 0",
    "summary": "• 연속 $\\Rightarrow$ 적분가능 (균등연속성 이용)\n• 단조 $\\Rightarrow$ 적분가능 (망원급수 이용)\n• 르베그 판정: 불연속점의 측도가 $0$이면 적분가능 (필요충분조건)\n• 디리클레 함수: 모든 점 불연속 → 적분불가능\n• 톰에 함수: 유리수에서만 불연속(가산, 측도 $0$) → 적분가능"
  },
  "examples": [
    {
      "title": "단조함수의 적분가능성 직접 확인",
      "problem": "$f(x) = \\lfloor x \\rfloor$ (바닥함수)가 $[0, 3]$에서 리만 적분가능함을 $U - L$을 계산하여 확인하시오.",
      "steps": [
        "$f(x) = \\lfloor x \\rfloor$는 $[0,3]$에서 단조증가이다 (불연속점: $x = 1, 2$).",
        "분할 $P_\\varepsilon = \\{0, 1-\\varepsilon, 1+\\varepsilon, 2-\\varepsilon, 2+\\varepsilon, 3\\}$을 잡자 ($0 < \\varepsilon < 1/2$).",
        "불연속점을 포함하지 않는 소구간에서는 $f$가 상수이므로 $M_i = m_i$이고 해당 항의 기여는 $0$이다.",
        "불연속점을 포함하는 소구간 $[1-\\varepsilon, 1+\\varepsilon]$에서는 $M_i - m_i = 1$, $\\Delta x_i = 2\\varepsilon$. 마찬가지로 $[2-\\varepsilon, 2+\\varepsilon]$에서도 기여 $= 1 \\cdot 2\\varepsilon$.",
        "$U(f,P_\\varepsilon) - L(f,P_\\varepsilon) = 2 \\cdot 2\\varepsilon = 4\\varepsilon$. $\\varepsilon$을 충분히 작게 잡으면 임의의 양수보다 작아지므로 적분가능."
      ],
      "answer": "$U - L = 4\\varepsilon \\to 0$ ($\\varepsilon \\to 0$)이므로 적분가능. $\\int_0^3 \\lfloor x \\rfloor\\,dx = 0 \\cdot 1 + 1 \\cdot 1 + 2 \\cdot 1 = 3$.",
      "lesson": "유한개의 불연속점을 가진 함수는, 불연속점 주위를 아주 좁은 소구간으로 '격리'하면 $U - L$을 원하는 만큼 줄일 수 있습니다. 이것이 '불연속점의 측도가 $0$이면 적분가능'이라는 르베그 판정의 직관입니다."
    }
  ],
  "problems": [
    {
      "id": "46-1",
      "type": "choice",
      "difficulty": 1,
      "question": "다음 중 $[0,1]$에서 리만 적분가능하지 않은 함수는?",
      "choices": [
        "$f(x) = x^2$",
        "$f(x) = |x - 1/2|$",
        "디리클레 함수 $D(x)$ (유리수이면 $1$, 무리수이면 $0$)",
        "$f(x) = \\lfloor 2x \\rfloor$ (바닥함수)"
      ],
      "answer": "디리클레 함수 $D(x)$ (유리수이면 $1$, 무리수이면 $0$)",
      "hints": [
        "$x^2$과 $|x-1/2|$는 $[0,1]$에서 연속입니다. 연속 $\\Rightarrow$ 적분가능.",
        "$\\lfloor 2x \\rfloor$는 단조증가이며 불연속점이 유한개입니다.",
        "디리클레 함수는 모든 점에서 불연속입니다."
      ],
      "explanation": "$x^2$은 연속, $|x-1/2|$은 연속, $\\lfloor 2x \\rfloor$는 단조이므로 모두 적분가능합니다. 디리클레 함수는 모든 점에서 불연속이고, 임의의 분할에서 $U = 1$, $L = 0$이므로 $U - L = 1 > 0$이 줄어들지 않아 적분불가능합니다.",
      "wrongAnalysis": "바닥함수가 불연속이므로 적분불가능하다고 판단하는 실수가 있습니다. 불연속점의 '개수(측도)'가 핵심이지, 불연속의 '존재 여부'가 아닙니다. 유한개의 불연속점은 측도 $0$이므로 적분가능합니다."
    },
    {
      "id": "46-2",
      "type": "text",
      "difficulty": 2,
      "question": "$f$가 $[a,b]$에서 연속이면 리만 적분가능함을 보일 때, 점별 연속이 아닌 균등연속을 사용해야 하는 이유를 한 문장으로 설명하시오.",
      "answer": "하나의 delta로 모든 소구간의 진동을 동시에 제어해야 하기 때문",
      "hints": [
        "점별 연속에서는 각 점 $x$마다 $\\delta$가 달라질 수 있습니다.",
        "분할의 노름을 일괄적으로 잡으려면 모든 점에서 같은 $\\delta$가 필요합니다.",
        "균등연속은 $\\delta$가 점에 의존하지 않고 $\\varepsilon$에만 의존하는 성질입니다."
      ],
      "explanation": "점별 연속에서는 $\\delta$가 각 점 $x$에 따라 달라지므로, 분할의 노름을 하나로 잡았을 때 모든 소구간에서 $M_i - m_i < \\varepsilon/(b-a)$을 동시에 보장할 수 없습니다. 균등연속에서는 $\\delta$가 $\\varepsilon$에만 의존하므로, $\\|P\\| < \\delta$인 분할만 잡으면 모든 소구간을 한꺼번에 제어할 수 있습니다. 하이네-칸토어 정리에 의해 닫힌 유계 구간 위의 연속함수는 자동으로 균등연속이므로, 이 전환이 가능합니다.",
      "wrongAnalysis": "'연속이면 적분가능'이라는 결론 자체는 맞지만, 증명에서 점별 연속만으로 시도하면 '모든 소구간에 대해'라는 조건을 만족시키지 못합니다. $\\delta$가 점마다 다르면 $\\inf \\delta = 0$이 될 수 있기 때문입니다."
    },
    {
      "id": "46-3",
      "type": "number",
      "difficulty": 3,
      "question": "$f$가 $[0, 4]$에서 단조증가이고 $f(0) = 1$, $f(4) = 5$일 때, 균등 $n$-분할에서 $U(f,P_n) - L(f,P_n)$의 값을 $n$의 식으로 쓰면 $\\dfrac{k}{n}$입니다. 상수 $k$의 값은?",
      "answer": "16",
      "hints": [
        "단조증가함수의 균등 분할에서 $U - L = \\dfrac{(b-a)(f(b)-f(a))}{n}$ 공식을 떠올리세요.",
        "$b - a = 4$, $f(b) - f(a) = 5 - 1 = 4$.",
        "$U - L = \\dfrac{4 \\times 4}{n} = \\dfrac{16}{n}$."
      ],
      "explanation": "단조증가함수의 균등 $n$-분할에서 $U(f,P_n) - L(f,P_n) = \\dfrac{b-a}{n}\\sum_{i=1}^n (f(x_i) - f(x_{i-1})) = \\dfrac{b-a}{n}(f(b) - f(a))$이다 (망원급수). $b-a = 4$, $f(b)-f(a) = 4$이므로 $U - L = \\dfrac{16}{n}$이고 $k = 16$.",
      "wrongAnalysis": "$b - a$와 $f(b) - f(a)$를 혼동하여 $k = 4$로 답하는 실수가 흔합니다. 공식에서 $(b-a)$는 분할의 크기에서, $(f(b)-f(a))$는 망원급수에서 각각 기여합니다."
    }
  ],
  "summary": {
    "keyPoints": [
      "연속함수는 리만 적분가능하다 (증명 핵심: 균등연속성과 하이네-칸토어 정리).",
      "단조함수는 리만 적분가능하다 (증명 핵심: 망원급수로 $U - L \\to 0$).",
      "르베그 판정: 유계함수가 적분가능할 필요충분조건은 불연속점의 집합이 측도 $0$인 것이다.",
      "디리클레 함수: 모든 점 불연속 → 적분불가능. 톰에 함수: 유리수에서만 불연속 → 적분가능."
    ],
    "formulas": [
      "f \\in C[a,b] \\Rightarrow f \\text{ Riemann integrable (uniform continuity)}",
      "f \\text{ monotone on } [a,b] \\Rightarrow U - L = \\frac{(b-a)(f(b)-f(a))}{n} \\to 0",
      "\\text{Lebesgue: integrable} \\iff \\mu(\\{\\text{discontinuities}\\}) = 0"
    ],
    "commonMistakes": [
      "점별 연속과 균등연속의 차이를 무시하고 증명을 시도하는 실수",
      "불연속점의 '존재'만으로 적분불가능이라 판단하는 실수 (측도가 핵심)",
      "단조함수에 불연속점이 있을 수 있다는 사실을 간과하는 실수"
    ],
    "nextConnection": "리만 적분의 엄밀한 이론을 완성했습니다. 이제 '무한히 많은 항을 더하는' 급수와 함수의 수렴 이론으로 넘어갑니다. 급수의 수렴 판정에서 적분판정법이 직접 활용되며, 함수열의 균등수렴과 적분의 교환 문제가 등장합니다."
  }
},
];
