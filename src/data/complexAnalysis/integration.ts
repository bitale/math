import { Lesson } from "../../types";

export const integrationLessons: Lesson[] = [
{
  "id": 8,
  "title": "복소적분과 경로적분",
  "category": "복소적분",
  "level": "심화",
  "question": "복소함수를 경로를 따라 적분한다는 것은 무엇이며, 실수 적분과 어떻게 다른가?",
  "concept": {
    "intro": "실수 적분 $\\int_a^b f(x)\\,dx$는 구간 $[a, b]$ 위에서 정의됩니다. 복소평면에서는 두 점을 잇는 경로가 무한히 많으므로, 적분은 반드시 **경로(contour)** $\\gamma$를 지정해야 합니다.\n\n:::definition[복소 경로적분]\n$$\\int_\\gamma f(z)\\,dz = \\int_a^b f(\\gamma(t))\\,\\gamma'(t)\\,dt$$\n여기서 $\\gamma: [a,b] \\to \\mathbb{C}$는 경로의 매개변수화입니다. 기본 성질: **선형성**, **역경로** ($\\int_{-\\gamma} f\\,dz = -\\int_\\gamma f\\,dz$), **경로 연결** ($\\gamma = \\gamma_1 + \\gamma_2$이면 $\\int_\\gamma = \\int_{\\gamma_1} + \\int_{\\gamma_2}$).\n:::\n\n:::theorem[ML 부등식]\n$\\left|\\int_\\gamma f(z)\\,dz\\right| \\leq M \\cdot L$, 여기서 $M = \\max_{z \\in \\gamma}|f(z)|$이고 $L$은 경로의 길이입니다. 적분을 직접 계산하지 않고도 상한을 구할 수 있어, 특히 극한 논증에서 '사라지는 적분'을 보일 때 핵심적입니다.\n:::\n\n:::note[기본 경로적분 결과]\n가장 기본적인 예로 $\\oint_{|z|=1} z^n\\,dz$를 계산해 봅시다. $z = e^{i\\theta}$, $dz = ie^{i\\theta}d\\theta$로 매개변수화하면 $\\int_0^{2\\pi} e^{in\\theta} \\cdot ie^{i\\theta}\\,d\\theta = i\\int_0^{2\\pi} e^{i(n+1)\\theta}\\,d\\theta$입니다. $n \\neq -1$이면 주기함수의 한 주기 적분이므로 $0$, $n = -1$이면 $i \\cdot 2\\pi = 2\\pi i$입니다. 이 결과가 유수 이론의 출발점이 됩니다.\n:::",
    "intuition": "실수 적분이 '구간 위의 넓이'였다면, 복소 경로적분은 '경로를 따라 함수값을 모으는 것'입니다. 복소수 값을 가지므로 넓이의 직관은 통하지 않지만, '경로를 잘게 자른 뒤 $f(z_k) \\cdot \\Delta z_k$를 합산한다'는 리만 합 아이디어는 동일합니다.\n\nML 부등식은 '적분값의 크기는 피적분함수의 최대크기 × 경로 길이를 넘지 않는다'는 상식적 부등식입니다. 실수에서 $|\\int_a^b f\\,dx| \\leq \\max|f| \\cdot (b-a)$와 본질적으로 같습니다.",
    "formula": "\\int_\\gamma f(z)\\,dz = \\int_a^b f(\\gamma(t))\\,\\gamma'(t)\\,dt\n\\int_{-\\gamma} f\\,dz = -\\int_\\gamma f\\,dz\n\\left|\\int_\\gamma f(z)\\,dz\\right| \\leq M \\cdot L\\quad (M = \\max|f|,\\ L = \\text{길이})\n\\oint_{|z|=1} z^n\\,dz = \\begin{cases} 2\\pi i & (n = -1) \\\\ 0 & (n \\neq -1) \\end{cases}",
    "summary": ":::note[핵심 정리]\n• 복소 경로적분: 경로 $\\gamma$의 매개변수화를 이용해 실수 적분으로 변환\n• 선형성, 역경로 부호 반전, 경로 연결 성질\n• ML 부등식: 적분값 상한 = 최대크기 × 경로길이\n• $\\oint z^n\\,dz$: $n=-1$일 때만 $2\\pi i$\n:::"
  },
  "examples": [
    {
      "title": "$\\oint_{|z|=1} \\frac{1}{z}\\,dz$ 계산",
      "problem": "단위원 $|z|=1$을 반시계 방향으로 도는 경로적분 $\\oint_{|z|=1} \\frac{1}{z}\\,dz$를 계산하시오.",
      "steps": [
        "매개변수화: $z = e^{i\\theta}$, $\\theta \\in [0, 2\\pi]$.",
        "$dz = ie^{i\\theta}\\,d\\theta$.",
        "$\\frac{1}{z} = \\frac{1}{e^{i\\theta}} = e^{-i\\theta}$.",
        "$\\oint \\frac{1}{z}\\,dz = \\int_0^{2\\pi} e^{-i\\theta} \\cdot ie^{i\\theta}\\,d\\theta = \\int_0^{2\\pi} i\\,d\\theta = 2\\pi i$."
      ],
      "answer": "$2\\pi i$",
      "lesson": "$1/z$의 단위원 적분 $= 2\\pi i$는 복소해석학에서 가장 기본적인 결과입니다. $n = -1$인 경우만 $0$이 아닌 값을 주며, 이것이 나중에 유수(residue)의 핵심이 됩니다."
    },
    {
      "title": "[기본] 직선 경로 위의 복소적분",
      "problem": "$\\int_\\gamma z\\,dz$를 구하시오. 여기서 $\\gamma$는 $0$에서 $1+i$까지의 직선 경로이다.",
      "steps": [
        "매개변수화: $\\gamma(t) = t(1+i) = t + ti$, $t \\in [0, 1]$.",
        "$\\gamma'(t) = 1 + i$.",
        "$\\int_\\gamma z\\,dz = \\int_0^1 \\gamma(t) \\cdot \\gamma'(t)\\,dt = \\int_0^1 t(1+i)(1+i)\\,dt$.",
        "$(1+i)^2 = 1 + 2i - 1 = 2i$이므로 $\\int_0^1 2it\\,dt = 2i \\cdot \\frac{1}{2} = i$."
      ],
      "answer": "$i$",
      "lesson": "해석함수의 부정적분이 존재하면 경로적분은 양 끝점 값의 차로 계산됩니다: $\\int_\\gamma z\\,dz = \\frac{z^2}{2}\\Big|_0^{1+i} = \\frac{(1+i)^2}{2} = \\frac{2i}{2} = i$."
    },
    {
      "title": "[응용] ML 부등식의 적용",
      "problem": "$\\left|\\oint_{|z|=2} \\frac{e^z}{z^3}\\,dz\\right|$의 상한을 ML 부등식으로 구하시오.",
      "steps": [
        "$|z| = 2$ 위에서 $|e^z| = e^{\\text{Re}(z)} \\leq e^2$ (실수부의 최대가 $2$).",
        "$|z^3| = |z|^3 = 8$.",
        "$|f(z)| = \\left|\\frac{e^z}{z^3}\\right| \\leq \\frac{e^2}{8}$이므로 $M = \\frac{e^2}{8}$.",
        "경로 길이: $L = 2\\pi \\cdot 2 = 4\\pi$.",
        "$|\\oint f\\,dz| \\leq ML = \\frac{e^2}{8} \\cdot 4\\pi = \\frac{\\pi e^2}{2} \\approx 11.6$."
      ],
      "answer": "$\\frac{\\pi e^2}{2} \\approx 11.6$",
      "lesson": "ML 부등식은 적분의 정확한 값을 구하지 않고도 크기의 상한을 빠르게 구할 수 있는 강력한 도구입니다. 특히 보조 경로의 적분이 $0$으로 사라짐을 보일 때 핵심적입니다."
    },
    {
      "title": "[응용] 경로 독립성과 부정적분",
      "problem": "$\\int_\\gamma (3z^2 + 2z)\\,dz$를 구하시오. 여기서 $\\gamma$는 $i$에서 $1+2i$까지의 임의의 경로이다.",
      "steps": [
        "$f(z) = 3z^2 + 2z$는 전함수이므로 부정적분 $F(z) = z^3 + z^2$이 존재한다.",
        "해석함수의 경로적분은 경로에 무관하므로 끝점 값의 차로 계산한다.",
        "$F(1+2i) = (1+2i)^3 + (1+2i)^2$.",
        "$(1+2i)^2 = 1 + 4i - 4 = -3 + 4i$.",
        "$(1+2i)^3 = (1+2i)(-3+4i) = -3 + 4i - 6i + 8i^2 = -3 - 2i - 8 = -11 - 2i$.",
        "$F(1+2i) = -11 - 2i + (-3+4i) = -14 + 2i$.",
        "$F(i) = i^3 + i^2 = -i - 1 = -1 - i$.",
        "$\\int_\\gamma f\\,dz = F(1+2i) - F(i) = (-14+2i) - (-1-i) = -13 + 3i$."
      ],
      "answer": "$-13 + 3i$",
      "lesson": "해석함수의 부정적분이 존재하면 경로적분은 경로의 형태에 상관없이 양 끝점의 값의 차로 결정됩니다. 이는 실수의 미적분학 기본정리의 복소 버전입니다."
    },
    {
      "title": "[심화] $\\oint_{|z|=1} \\bar{z}\\,dz$의 계산",
      "problem": "$\\oint_{|z|=1} \\bar{z}\\,dz$를 직접 계산하시오.",
      "steps": [
        "매개변수화: $z = e^{i\\theta}$, $\\bar{z} = e^{-i\\theta}$, $dz = ie^{i\\theta}\\,d\\theta$.",
        "$\\oint \\bar{z}\\,dz = \\int_0^{2\\pi} e^{-i\\theta} \\cdot ie^{i\\theta}\\,d\\theta = \\int_0^{2\\pi} i\\,d\\theta = 2\\pi i$.",
        "주의: $\\bar{z}$는 해석적이지 않으므로 코시 정리가 적용되지 않는다.",
        "실제로 $|z|=1$ 위에서 $\\bar{z} = 1/z$이므로 $\\oint \\bar{z}\\,dz = \\oint \\frac{1}{z}\\,dz = 2\\pi i$."
      ],
      "answer": "$2\\pi i$",
      "lesson": "단위원 위에서 $\\bar{z} = 1/z$라는 사실은 강력한 도구입니다. $\\bar{z}$는 해석적이지 않지만, 경로적분 자체는 여전히 정의되고 계산 가능합니다. 코시 정리를 적용하려면 피적분함수가 해석적이어야 합니다."
    }
  ],
  "problems": [
    {
      "id": "8-1",
      "type": "choice",
      "difficulty": 1,
      "question": "경로 $\\gamma$를 반대로 추적한 경로 $-\\gamma$에 대해, $\\int_{-\\gamma} f\\,dz$는?",
      "choices": [
        "$\\int_\\gamma f\\,dz$",
        "$-\\int_\\gamma f\\,dz$",
        "$\\overline{\\int_\\gamma f\\,dz}$",
        "$0$"
      ],
      "answer": "$-\\int_\\gamma f\\,dz$",
      "hints": [
        "경로를 반대로 추적하면 매개변수의 방향이 바뀝니다.",
        "실수 적분에서 $\\int_b^a f\\,dx = -\\int_a^b f\\,dx$와 같은 원리입니다.",
        "경로의 방향이 적분의 부호를 결정합니다."
      ],
      "explanation": "경로를 반대로 추적하면 $\\gamma'(t)$의 부호가 바뀌므로 적분값의 부호도 바뀝니다. 이는 실수 적분의 구간 반전과 동일한 원리입니다.",
      "wrongAnalysis": "경로를 반대로 해도 같은 점을 지나므로 값이 같다고 생각하는 실수가 있습니다. 경로의 방향이 부호를 결정합니다."
    },
    {
      "id": "8-2",
      "type": "text",
      "difficulty": 2,
      "question": "$\\oint_{|z|=1} z^2\\,dz$의 값은? (예: 0)",
      "answer": "0",
      "hints": [
        "$z = e^{i\\theta}$로 매개변수화하세요.",
        "$z^2 = e^{2i\\theta}$, $dz = ie^{i\\theta}d\\theta$.",
        "$\\int_0^{2\\pi} ie^{3i\\theta}\\,d\\theta$를 계산하세요."
      ],
      "explanation": "$\\oint z^2\\,dz = \\int_0^{2\\pi} e^{2i\\theta} \\cdot ie^{i\\theta}\\,d\\theta = i\\int_0^{2\\pi} e^{3i\\theta}\\,d\\theta = i \\cdot \\left[\\frac{e^{3i\\theta}}{3i}\\right]_0^{2\\pi} = \\frac{1}{3}(e^{6\\pi i} - 1) = \\frac{1}{3}(1-1) = 0$. $n = 2 \\neq -1$이므로 결과는 $0$입니다.",
      "wrongAnalysis": "$\\oint z^n\\,dz$가 항상 $0$이 아닌 값을 준다고 생각하는 실수가 있습니다. $n = -1$일 때만 $2\\pi i$이고, 나머지는 모두 $0$입니다."
    },
    {
      "id": "8-4",
      "type": "choice",
      "difficulty": 1,
      "question": "$\\oint_{|z|=1} \\frac{1}{z}\\,dz$의 값은?",
      "choices": [
        "$0$",
        "$\\pi i$",
        "$2\\pi i$",
        "$-2\\pi i$"
      ],
      "answer": "$2\\pi i$",
      "hints": [
        "$1/z = z^{-1}$, 즉 $z^n$에서 $n = -1$인 경우입니다.",
        "$\\oint z^n\\,dz$에서 $n = -1$일 때만 비영 결과를 줍니다."
      ],
      "explanation": "$z = e^{i\\theta}$로 매개변수화하면 $\\oint \\frac{1}{z}\\,dz = \\int_0^{2\\pi} e^{-i\\theta} \\cdot ie^{i\\theta}\\,d\\theta = \\int_0^{2\\pi} i\\,d\\theta = 2\\pi i$. 이것은 복소해석학의 가장 기본적인 경로적분입니다.",
      "wrongAnalysis": "$1/z$가 원점에서 정의되지 않으므로 적분도 정의되지 않는다고 생각하는 실수가 있습니다. 경로적분은 경로 위에서 정의되며, 경로($|z|=1$)에서 $1/z$는 잘 정의됩니다."
    },
    {
      "id": "8-5",
      "type": "number",
      "difficulty": 2,
      "question": "$|z|=3$ 위에서 $|f(z)| \\leq 5$일 때, ML 부등식에 의한 $\\left|\\oint_{|z|=3} f(z)\\,dz\\right|$의 상한은? ($\\pi$ 값을 3.14로 사용하여 소수점 첫째자리까지 답하시오)",
      "answer": "94.2",
      "hints": [
        "$M = 5$, $L = 2\\pi \\cdot 3 = 6\\pi$입니다.",
        "$ML = 5 \\times 6\\pi = 30\\pi \\approx 94.2$입니다."
      ],
      "explanation": "ML 부등식: $|\\oint f\\,dz| \\leq M \\cdot L$. $M = \\max|f| = 5$이고, 반지름 $3$인 원의 둘레 $L = 2\\pi \\cdot 3 = 6\\pi$. 따라서 상한은 $5 \\times 6\\pi = 30\\pi \\approx 94.2$입니다.",
      "wrongAnalysis": "원의 둘레를 $2\\pi$로 계산하는 실수가 흔합니다. 반지름 $r$인 원의 둘레는 $2\\pi r$입니다."
    },
    {
      "id": "8-3",
      "type": "choice",
      "difficulty": 3,
      "question": "$|z|=2$ 위에서 $|f(z)| \\leq 3$일 때, ML 부등식에 의한 $\\left|\\oint_{|z|=2} f(z)\\,dz\\right|$의 상한은?",
      "choices": [
        "$6\\pi$",
        "$12\\pi$",
        "$3\\pi$",
        "$4\\pi$"
      ],
      "answer": "$12\\pi$",
      "hints": [
        "ML 부등식: $|\\oint f\\,dz| \\leq M \\cdot L$.",
        "$M = 3$ (주어진 상한), $L$은 원의 둘레.",
        "반지름 $2$인 원의 둘레 $= 2\\pi \\cdot 2 = 4\\pi$."
      ],
      "explanation": "$M = 3$, $L = 2\\pi \\cdot 2 = 4\\pi$이므로 $|\\oint f\\,dz| \\leq 3 \\times 4\\pi = 12\\pi$. ML 부등식은 적분을 직접 계산하지 않고도 상한을 빠르게 구할 수 있게 해줍니다.",
      "wrongAnalysis": "원의 둘레를 $2\\pi$로 계산하는 실수가 흔합니다. 반지름이 $2$이므로 둘레는 $2\\pi \\cdot 2 = 4\\pi$입니다."
    }
  ],
  "summary": {
    "keyPoints": [
      "복소 경로적분은 경로의 매개변수화를 통해 실수 적분으로 변환된다.",
      "역경로는 부호를 반전시킨다.",
      "ML 부등식: $|\\int_\\gamma f\\,dz| \\leq \\max|f| \\cdot \\text{길이}(\\gamma)$.",
      "$\\oint z^n\\,dz$는 $n = -1$일 때만 $2\\pi i$."
    ],
    "formulas": [
      "\\int_\\gamma f(z)\\,dz = \\int_a^b f(\\gamma(t))\\gamma'(t)\\,dt",
      "|\\int_\\gamma f\\,dz| \\leq ML",
      "\\oint_{|z|=1} z^n\\,dz = 2\\pi i\\delta_{n,-1}"
    ],
    "commonMistakes": [
      "경로를 지정하지 않고 적분하는 실수",
      "ML 부등식에서 경로의 길이를 잘못 계산하는 실수",
      "$\\oint z^n\\,dz$에서 $n=-1$인 경우를 놓치는 실수"
    ],
    "nextConnection": "경로적분의 기본을 갖추었으니, 다음 레슨에서는 복소해석학의 핵심 정리인 코시 정리와 코시 적분 공식을 배웁니다."
  }
},
{
  "id": 9,
  "title": "코시 정리와 코시 적분 공식",
  "category": "복소적분",
  "level": "심화",
  "question": "해석함수의 닫힌 경로적분은 왜 항상 $0$이며, 함수값을 적분으로 복원할 수 있는가?",
  "concept": {
    "intro": ":::theorem[코시 정리 (Cauchy's Theorem)]\n복소해석학의 가장 위대한 정리입니다: 함수 $f$가 단순연결 영역 $D$ 안에서 해석적이면, $D$ 안의 임의의 닫힌 경로 $\\gamma$에 대해\n$$\\oint_\\gamma f(z)\\,dz = 0$$\n입니다. '끝점이 같은(닫힌) 경로의 적분은 소멸한다'는 뜻입니다.\n:::\n\n:::theorem[코시 적분 공식]\n코시 정리의 직접적 귀결입니다. $f$가 닫힌 경로 $C$ 내부에서 해석적이면, 내부의 임의의 점 $z_0$에 대해\n$$f(z_0) = \\frac{1}{2\\pi i}\\oint_C \\frac{f(z)}{z - z_0}\\,dz$$\n이 성립합니다. 놀랍게도, 경계에서의 적분만으로 내부의 함수값을 완전히 결정할 수 있습니다. 도함수에 대해서도\n$$f^{(n)}(z_0) = \\frac{n!}{2\\pi i}\\oint_C \\frac{f(z)}{(z-z_0)^{n+1}}\\,dz$$\n가 성립합니다.\n:::\n\n:::theorem[리우빌 정리와 대수학의 기본정리]\n**리우빌 정리(Liouville's theorem)**: 유계인 전함수는 상수뿐입니다 — $|f(z)| \\leq M$이면 $f$는 상수. 이로부터 **대수학의 기본정리**가 따라 나옵니다: 모든 복소 다항식($\\deg \\geq 1$)은 반드시 근을 가집니다. 복소해석학의 도구로 대수학의 핵심 정리를 증명하는 것입니다.\n:::",
    "intuition": "코시 정리의 직관은 '해석함수에는 소용돌이가 없다'입니다. 해석함수는 너무나 규칙적이어서, 닫힌 경로를 따라 적분하면 한 바퀴 도는 동안 모은 값이 정확히 상쇄됩니다. 경로 안에 특이점이 있으면 상쇄가 깨지고, 그것이 유수 이론의 출발점입니다.\n\n코시 적분 공식은 '경계가 내부를 결정한다'는 것입니다. 해석함수는 경계의 정보만으로 내부의 모든 것을 알 수 있습니다. 이는 열전도의 경계조건 문제와 깊이 연결됩니다.",
    "formula": "\\oint_\\gamma f(z)\\,dz = 0\\quad (f\\text{가 내부에서 해석적, 단순연결})\nf(z_0) = \\frac{1}{2\\pi i}\\oint_C \\frac{f(z)}{z-z_0}\\,dz\\quad (\\text{코시 적분 공식})\nf^{(n)}(z_0) = \\frac{n!}{2\\pi i}\\oint_C \\frac{f(z)}{(z-z_0)^{n+1}}\\,dz\n\\text{리우빌:}\\ f\\text{가 전함수이고 유계} \\Rightarrow f\\text{는 상수}",
    "summary": ":::note[핵심 정리]\n• 코시 정리: 해석함수의 닫힌 경로적분 $= 0$\n• 코시 적분 공식: 경계 적분으로 내부 함수값과 도함수 복원\n• 리우빌 정리: 유계 전함수는 상수\n• 대수학의 기본정리: 복소 다항식은 반드시 근을 가짐\n:::"
  },
  "examples": [
    {
      "title": "코시 적분 공식의 적용",
      "problem": "$\\oint_{|z|=2} \\frac{e^z}{z-1}\\,dz$를 계산하시오.",
      "steps": [
        "$f(z) = e^z$로 놓으면, $\\frac{f(z)}{z-1}$ 형태.",
        "$z_0 = 1$은 경로 $|z| = 2$ 내부에 있다 ($|1| = 1 < 2$).",
        "코시 적분 공식 적용: $\\oint \\frac{f(z)}{z-z_0}\\,dz = 2\\pi i \\cdot f(z_0)$.",
        "$f(1) = e^1 = e$.",
        "따라서 $\\oint_{|z|=2} \\frac{e^z}{z-1}\\,dz = 2\\pi i \\cdot e = 2\\pi e i$."
      ],
      "answer": "$2\\pi e i$",
      "lesson": "코시 적분 공식은 복잡해 보이는 경로적분을 한 점에서의 함수값 계산으로 환원합니다. 핵심은 $z_0$가 경로 내부에 있는지 확인하는 것입니다."
    },
    {
      "title": "[기본] 코시 정리의 직접 적용",
      "problem": "$\\oint_{|z|=1} \\sin z\\,dz$를 계산하시오.",
      "steps": [
        "$\\sin z$는 전체 $\\mathbb{C}$에서 해석적인 전함수이다.",
        "단위원 $|z|=1$ 내부에서도 해석적이다.",
        "코시 정리에 의해 해석함수의 닫힌 경로적분은 $0$이다.",
        "따라서 $\\oint_{|z|=1} \\sin z\\,dz = 0$."
      ],
      "answer": "$0$",
      "lesson": "코시 정리의 적용에서 가장 중요한 확인 사항은 '피적분함수가 경로 내부에서 해석적인가'입니다. 해석적이면 닫힌 경로적분은 반드시 $0$입니다."
    },
    {
      "title": "[응용] 코시 적분 공식으로 도함수 구하기",
      "problem": "$\\oint_{|z|=2} \\frac{e^z}{(z-1)^2}\\,dz$를 계산하시오.",
      "steps": [
        "코시 적분 공식의 도함수 버전: $f^{(n)}(z_0) = \\frac{n!}{2\\pi i}\\oint_C \\frac{f(z)}{(z-z_0)^{n+1}}\\,dz$.",
        "$f(z) = e^z$, $z_0 = 1$, $n = 1$이므로 $(z-z_0)^{n+1} = (z-1)^2$.",
        "$f'(z_0) = f'(1) = e^1 = e$.",
        "$\\oint \\frac{e^z}{(z-1)^2}\\,dz = \\frac{2\\pi i}{1!} \\cdot f'(1) = 2\\pi i \\cdot e = 2\\pi ei$."
      ],
      "answer": "$2\\pi ei$",
      "lesson": "코시 적분 공식의 도함수 버전은 $(z-z_0)^{n+1}$이 분모에 있는 적분을 $f^{(n)}(z_0)$으로 환원합니다. $n$의 값을 정확히 파악하는 것이 핵심입니다."
    },
    {
      "title": "[응용] $z_0$가 경로 외부인 경우",
      "problem": "$\\oint_{|z|=1} \\frac{e^z}{z-3}\\,dz$를 계산하시오.",
      "steps": [
        "$z_0 = 3$은 경로 $|z| = 1$ 외부에 있다 ($|3| = 3 > 1$).",
        "$\\frac{e^z}{z-3}$은 $|z| < 1$ 내부에서 해석적이다 (특이점 $z=3$이 외부).",
        "코시 정리에 의해 해석함수의 닫힌 경로적분은 $0$이다.",
        "따라서 $\\oint_{|z|=1} \\frac{e^z}{z-3}\\,dz = 0$."
      ],
      "answer": "$0$",
      "lesson": "코시 적분 공식을 적용하기 전에 $z_0$가 경로 내부에 있는지 반드시 확인해야 합니다. $z_0$가 외부이면 피적분함수가 내부에서 해석적이므로 코시 정리에 의해 적분이 $0$입니다."
    },
    {
      "title": "[심화] 코시 부등식을 이용한 계수 추정",
      "problem": "$f$가 $|z| \\leq 3$에서 해석적이고 $|f(z)| \\leq 10$일 때, $|f''(0)|$의 상한을 구하시오.",
      "steps": [
        "코시 부등식: $|f^{(n)}(z_0)| \\leq \\frac{n! \\cdot M}{R^n}$ (반지름 $R$ 원 위에서 $|f| \\leq M$).",
        "$n = 2$, $z_0 = 0$, $M = 10$, $R = 3$.",
        "$|f''(0)| \\leq \\frac{2! \\cdot 10}{3^2} = \\frac{20}{9} \\approx 2.22$.",
        "이 부등식은 코시 적분 공식의 도함수 버전과 ML 부등식의 결합으로 얻어진다."
      ],
      "answer": "$|f''(0)| \\leq \\frac{20}{9}$",
      "lesson": "코시 부등식은 해석함수의 도함수 크기를 함수값의 최댓값으로 제어합니다. $R$이 클수록 상한이 줄어들며, $R \\to \\infty$로 보내면 리우빌 정리가 나옵니다."
    }
  ],
  "problems": [
    {
      "id": "9-1",
      "type": "choice",
      "difficulty": 1,
      "question": "$f(z) = z^3 + z$에 대해 $\\oint_{|z|=1} f(z)\\,dz$의 값은?",
      "choices": [
        "$2\\pi i$",
        "$0$",
        "$\\pi i$",
        "$-2\\pi i$"
      ],
      "answer": "$0$",
      "hints": [
        "$f(z) = z^3 + z$는 어디에서 해석적인가요?",
        "다항함수는 전체 $\\mathbb{C}$에서 해석적입니다.",
        "코시 정리를 적용하세요."
      ],
      "explanation": "$f(z) = z^3 + z$는 전함수이므로 단위원 내부에서 해석적입니다. 코시 정리에 의해 $\\oint f(z)\\,dz = 0$.",
      "wrongAnalysis": "경로적분이 항상 $0$이 아닌 값을 준다고 생각하는 실수가 있습니다. 피적분함수가 경로 내부에서 해석적이면 코시 정리에 의해 $0$입니다."
    },
    {
      "id": "9-2",
      "type": "text",
      "difficulty": 2,
      "question": "$\\oint_{|z|=3} \\frac{\\sin z}{z}\\,dz$의 값을 $\\pi$를 사용해 적으시오. (예: 2*pi*i)",
      "answer": "0",
      "hints": [
        "$f(z) = \\sin z$로 놓으면, $\\frac{\\sin z}{z} = \\frac{f(z)}{z - 0}$.",
        "코시 적분 공식: $\\oint \\frac{f(z)}{z-z_0}\\,dz = 2\\pi i \\cdot f(z_0)$.",
        "$z_0 = 0$이므로 $f(0) = \\sin 0 = 0$."
      ],
      "explanation": "코시 적분 공식에 $f(z) = \\sin z$, $z_0 = 0$을 적용하면: $\\oint \\frac{\\sin z}{z}\\,dz = 2\\pi i \\cdot \\sin 0 = 2\\pi i \\cdot 0 = 0$. $\\sin z / z$는 사실 $z = 0$에서 제거가능 특이점을 가지며, 극한값이 $1$입니다.",
      "wrongAnalysis": "$1/z$가 있으므로 $2\\pi i$라고 바로 답하는 실수가 있습니다. $\\sin z / z = 1 - z^2/6 + \\cdots$이므로 $1/z$ 항이 없습니다."
    },
    {
      "id": "9-3",
      "type": "choice",
      "difficulty": 3,
      "question": "리우빌 정리에 의해 다음 중 어떤 결론이 도출되는가?",
      "choices": [
        "모든 해석함수는 다항함수이다",
        "유계인 전함수는 상수뿐이다",
        "모든 전함수는 유계이다",
        "해석함수는 항상 영점을 가진다"
      ],
      "answer": "유계인 전함수는 상수뿐이다",
      "hints": [
        "리우빌 정리의 조건: 전함수 + 유계.",
        "결론: 상수함수.",
        "$e^z$는 전함수이지만 유계가 아니므로 상수가 아닙니다."
      ],
      "explanation": "리우빌 정리: 전체 $\\mathbb{C}$에서 해석적이고 유계인 함수는 반드시 상수입니다. 예를 들어 $|f(z)| \\leq M$이면 코시 적분 공식의 도함수 버전에서 $|f'(z_0)| \\leq M/R$인데, $R \\to \\infty$로 보내면 $f'(z_0) = 0$이 됩니다.",
      "wrongAnalysis": "'모든 전함수는 유계'라고 잘못 이해하는 경우가 있습니다. $e^z$는 전함수이지만 유계가 아닙니다. 리우빌 정리는 '유계이면 상수'이지, '전함수이면 유계'가 아닙니다."
    },
    {
      "id": "9-4",
      "type": "choice",
      "difficulty": 1,
      "question": "$f(z) = e^z$에 대해 $\\oint_{|z|=1} e^z\\,dz$의 값은?",
      "choices": [
        "$2\\pi i$",
        "$0$",
        "$e \\cdot 2\\pi i$",
        "$\\pi i$"
      ],
      "answer": "$0$",
      "hints": [
        "$e^z$는 전체 $\\mathbb{C}$에서 해석적인 전함수입니다.",
        "코시 정리에 의해 해석함수의 닫힌 경로적분은 $0$입니다."
      ],
      "explanation": "$e^z$는 전체 $\\mathbb{C}$에서 해석적이므로 단위원 내부에서도 해석적입니다. 코시 정리에 의해 $\\oint_{|z|=1} e^z\\,dz = 0$입니다.",
      "wrongAnalysis": "$e^z$가 복잡하므로 적분값도 복잡할 것이라 생각하는 실수가 있습니다. 피적분함수가 경로 내부에서 해석적이면 닫힌 적분은 항상 $0$입니다."
    },
    {
      "id": "9-5",
      "type": "text",
      "difficulty": 2,
      "question": "$\\oint_{|z|=2} \\frac{\\cos z}{z}\\,dz$의 값을 $\\pi$를 사용해 적으시오. (예: 2*pi*i)",
      "answer": "2*pi*i",
      "hints": [
        "코시 적분 공식: $\\oint \\frac{f(z)}{z-z_0}\\,dz = 2\\pi i \\cdot f(z_0)$.",
        "$f(z) = \\cos z$, $z_0 = 0$이고, $f(0) = \\cos 0 = 1$입니다."
      ],
      "explanation": "코시 적분 공식에 $f(z) = \\cos z$, $z_0 = 0$을 적용하면: $\\oint_{|z|=2} \\frac{\\cos z}{z}\\,dz = 2\\pi i \\cdot \\cos 0 = 2\\pi i \\cdot 1 = 2\\pi i$. $z_0 = 0$이 경로 $|z| = 2$ 내부에 있으므로 공식 적용이 가능합니다.",
      "wrongAnalysis": "$\\sin z / z$와 혼동하여 $0$으로 답하는 실수가 있습니다. $\\cos 0 = 1 \\neq 0$이므로 적분값은 $2\\pi i$입니다."
    }
  ],
  "summary": {
    "keyPoints": [
      "코시 정리: 해석함수의 닫힌 경로적분은 $0$이다.",
      "코시 적분 공식: 경계 적분으로 내부 함수값을 복원할 수 있다.",
      "리우빌 정리 → 대수학의 기본정리: 복소해석이 대수를 증명한다."
    ],
    "formulas": [
      "\\oint_\\gamma f(z)\\,dz = 0",
      "f(z_0) = \\frac{1}{2\\pi i}\\oint_C \\frac{f(z)}{z-z_0}\\,dz",
      "f^{(n)}(z_0) = \\frac{n!}{2\\pi i}\\oint_C \\frac{f(z)}{(z-z_0)^{n+1}}\\,dz"
    ],
    "commonMistakes": [
      "코시 정리의 조건(단순연결, 내부에서 해석적)을 확인하지 않는 실수",
      "코시 적분 공식에서 $z_0$가 경로 내부에 있는지 확인하지 않는 실수",
      "리우빌 정리의 조건을 뒤집어 '전함수 → 유계'로 잘못 읽는 실수"
    ],
    "nextConnection": "코시 정리와 적분 공식을 갖추었으니, 다음 레슨에서 이로부터 따라오는 강력한 결과들 — 리우빌 정리, 최대절대값 원리, 슈바르츠 보조정리를 배웁니다."
  }
}
];
