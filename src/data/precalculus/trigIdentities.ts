import { Lesson } from "../../types";

export const trigIdentitiesLessons: Lesson[] = [
{
  "id": 15,
  "title": "삼각함수의 덧셈정리",
  "category": "삼각함수",
  "level": "기초",
  "question": "두 각의 합이나 차에 대한 삼각함수를 어떻게 계산할까?",
  "concept": {
    "intro": "이전 레슨에서 $\\sin\\frac{\\pi}{4}$, $\\cos\\frac{\\pi}{3}$ 같은 특수각의 삼각함수 값을 배웠습니다. 그런데 $\\sin 75°$나 $\\cos 15°$처럼 특수각이 아닌 각도의 정확한 값은 어떻게 구할까요? 혹시 $\\sin 75° = \\sin 45° + \\sin 30°$일까요? 계산해 봅시다. $\\sin 45° + \\sin 30° = \\frac{\\sqrt{2}}{2} + \\frac{1}{2} \\approx 1.207$인데, 사인 함수의 최댓값은 $1$이므로 이것은 불가능합니다. 즉, $\\sin(\\alpha + \\beta) \\neq \\sin\\alpha + \\sin\\beta$입니다. 삼각함수에는 분배법칙이 성립하지 않습니다! 그렇다면 $\\sin(\\alpha + \\beta)$를 $\\sin\\alpha$, $\\cos\\alpha$, $\\sin\\beta$, $\\cos\\beta$로 어떻게 표현할 수 있을까요? 이 질문에 대한 답이 바로 덧셈정리(addition formula)입니다.\n\n덧셈정리의 출발점은 $\\cos(\\alpha - \\beta)$의 유도입니다. 단위원 위에 두 점을 잡겠습니다. 점 $P$는 각도 $\\alpha$에 대응하는 점 $(\\cos\\alpha, \\sin\\alpha)$이고, 점 $Q$는 각도 $\\beta$에 대응하는 점 $(\\cos\\beta, \\sin\\beta)$입니다. 두 점 사이의 거리를 좌표를 이용해 구하면:\n$$PQ^2 = (\\cos\\alpha - \\cos\\beta)^2 + (\\sin\\alpha - \\sin\\beta)^2$$\n전개하면 $PQ^2 = \\cos^2\\alpha - 2\\cos\\alpha\\cos\\beta + \\cos^2\\beta + \\sin^2\\alpha - 2\\sin\\alpha\\sin\\beta + \\sin^2\\beta$입니다. 피타고라스 항등식 $\\sin^2\\theta + \\cos^2\\theta = 1$을 적용하면:\n$$PQ^2 = 2 - 2(\\cos\\alpha\\cos\\beta + \\sin\\alpha\\sin\\beta)$$\n한편, 같은 거리를 코사인 법칙(law of cosines)으로도 구할 수 있습니다. 코사인 법칙이란 삼각형에서 두 변 $a$, $b$와 그 사이각 $C$가 주어졌을 때 맞은편 변 $c$를 구하는 공식으로, $c^2 = a^2 + b^2 - 2ab\\cos C$입니다. 이것은 피타고라스 정리의 일반화입니다 — $C = 90°$이면 $\\cos 90° = 0$이므로 $c^2 = a^2 + b^2$이 되어 피타고라스 정리가 됩니다. 이제 이 법칙을 적용합니다. 단위원에서 원점 $O$와 점 $P$, $Q$가 이루는 삼각형에서 $OP = OQ = 1$(반지름)이고 사이각은 $\\alpha - \\beta$이므로:\n$$PQ^2 = 1^2 + 1^2 - 2 \\cdot 1 \\cdot 1 \\cdot \\cos(\\alpha - \\beta) = 2 - 2\\cos(\\alpha - \\beta)$$\n두 결과를 같다고 놓으면:\n$$2 - 2\\cos(\\alpha - \\beta) = 2 - 2(\\cos\\alpha\\cos\\beta + \\sin\\alpha\\sin\\beta)$$\n\n:::theorem[코사인 뺄셈정리]\n$$\\cos(\\alpha - \\beta) = \\cos\\alpha\\cos\\beta + \\sin\\alpha\\sin\\beta$$\n:::\n\n이 하나의 공식에서 나머지 모든 덧셈정리가 유도됩니다. $\\beta$ 자리에 $-\\beta$를 대입하면 $\\cos(-\\beta) = \\cos\\beta$, $\\sin(-\\beta) = -\\sin\\beta$이므로:\n\n:::theorem[덧셈정리 전체]\n$$\\cos(\\alpha + \\beta) = \\cos\\alpha\\cos\\beta - \\sin\\alpha\\sin\\beta$$\n$$\\sin(\\alpha + \\beta) = \\sin\\alpha\\cos\\beta + \\cos\\alpha\\sin\\beta$$\n$$\\sin(\\alpha - \\beta) = \\sin\\alpha\\cos\\beta - \\cos\\alpha\\sin\\beta$$\n$$\\tan(\\alpha + \\beta) = \\frac{\\tan\\alpha + \\tan\\beta}{1 - \\tan\\alpha\\tan\\beta}$$\n$$\\tan(\\alpha - \\beta) = \\frac{\\tan\\alpha - \\tan\\beta}{1 + \\tan\\alpha\\tan\\beta}$$\n:::\n\n사인 덧셈정리는 여각 관계 $\\sin\\theta = \\cos(\\frac{\\pi}{2} - \\theta)$를 이용합니다:\n$$\\sin(\\alpha + \\beta) = \\cos\\left(\\frac{\\pi}{2} - (\\alpha + \\beta)\\right) = \\cos\\left((\\frac{\\pi}{2} - \\alpha) - \\beta\\right)$$\n코사인 뺄셈정리를 적용하면:\n$$= \\cos(\\frac{\\pi}{2} - \\alpha)\\cos\\beta + \\sin(\\frac{\\pi}{2} - \\alpha)\\sin\\beta = \\sin\\alpha\\cos\\beta + \\cos\\alpha\\sin\\beta$$\n\n탄젠트 덧셈정리는 $\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta}$에서 유도됩니다:\n$$\\tan(\\alpha + \\beta) = \\frac{\\sin(\\alpha + \\beta)}{\\cos(\\alpha + \\beta)} = \\frac{\\sin\\alpha\\cos\\beta + \\cos\\alpha\\sin\\beta}{\\cos\\alpha\\cos\\beta - \\sin\\alpha\\sin\\beta}$$\n분자와 분모를 $\\cos\\alpha\\cos\\beta$로 나누면:\n$$\\tan(\\alpha + \\beta) = \\frac{\\tan\\alpha + \\tan\\beta}{1 - \\tan\\alpha\\tan\\beta}$$\n\n이제 덧셈정리를 응용해 봅시다. $\\sin 75° = \\sin(45° + 30°)$로 분해하면 덧셈정리로 정확한 값을 구할 수 있습니다. 이처럼 특수각의 합이나 차로 나타낼 수 있는 각도는 덧셈정리를 통해 정확한 삼각함수 값을 얻을 수 있습니다. 또한 덧셈정리는 삼각함수 등식의 증명, 삼각방정식의 풀이, 그리고 다음 레슨에서 배울 배각 공식과 반각 공식의 기초가 됩니다.",
    "intuition": "덧셈정리의 핵심 아이디어는 '단위원 위 두 점 사이의 거리를 두 가지 방법으로 구하면 같아야 한다'는 것입니다. 좌표를 이용한 거리와 코사인 법칙을 이용한 거리를 같다고 놓으면 $\\cos(\\alpha - \\beta)$의 공식이 자연스럽게 나옵니다. 나머지 공식은 이 하나에서 모두 유도되므로, $\\cos(\\alpha - \\beta)$만 확실히 이해하면 됩니다.\n\n부호를 외우는 요령도 있습니다. 코사인 덧셈정리에서는 합(+)일 때 빼기(-)가, 차(-)일 때 더하기(+)가 나옵니다. 즉 부호가 '반대'입니다. 반면 사인 덧셈정리에서는 합(+)일 때 더하기(+), 차(-)일 때 빼기(-)로 부호가 '같습니다'. 'cos는 반대, sin은 같다'로 기억하면 편합니다.",
    "formula": "\\cos(\\alpha - \\beta) = \\cos\\alpha\\cos\\beta + \\sin\\alpha\\sin\\beta\n\\cos(\\alpha + \\beta) = \\cos\\alpha\\cos\\beta - \\sin\\alpha\\sin\\beta\n\\sin(\\alpha + \\beta) = \\sin\\alpha\\cos\\beta + \\cos\\alpha\\sin\\beta\n\\sin(\\alpha - \\beta) = \\sin\\alpha\\cos\\beta - \\cos\\alpha\\sin\\beta\n\\tan(\\alpha + \\beta) = \\frac{\\tan\\alpha + \\tan\\beta}{1 - \\tan\\alpha\\tan\\beta}\n\\tan(\\alpha - \\beta) = \\frac{\\tan\\alpha - \\tan\\beta}{1 + \\tan\\alpha\\tan\\beta}",
    "summary": "덧셈정리는 $\\sin(\\alpha \\pm \\beta)$, $\\cos(\\alpha \\pm \\beta)$, $\\tan(\\alpha \\pm \\beta)$를 각각의 삼각함수로 풀어쓰는 공식이다. 단위원 위 두 점 사이의 거리를 두 가지 방법으로 비교하여 $\\cos(\\alpha - \\beta)$를 유도하고, 나머지는 이로부터 얻는다. 부호 규칙은 'cos는 반대, sin은 같다'이다."
  },
  "examples": [
    {
      "title": "덧셈정리로 삼각함수 값 구하기",
      "problem": "$\\sin 75°$의 정확한 값을 구하시오.",
      "steps": [
        "$75° = 45° + 30°$으로 분해한다.",
        "사인 덧셈정리 $\\sin(\\alpha + \\beta) = \\sin\\alpha\\cos\\beta + \\cos\\alpha\\sin\\beta$를 적용한다. $\\alpha = 45°$, $\\beta = 30°$.",
        "특수각의 값을 대입한다: $\\sin 45° = \\frac{\\sqrt{2}}{2}$, $\\cos 30° = \\frac{\\sqrt{3}}{2}$, $\\cos 45° = \\frac{\\sqrt{2}}{2}$, $\\sin 30° = \\frac{1}{2}$.",
        "$\\sin 75° = \\frac{\\sqrt{2}}{2} \\cdot \\frac{\\sqrt{3}}{2} + \\frac{\\sqrt{2}}{2} \\cdot \\frac{1}{2} = \\frac{\\sqrt{6}}{4} + \\frac{\\sqrt{2}}{4} = \\frac{\\sqrt{6} + \\sqrt{2}}{4}$.",
        "검산: $\\frac{\\sqrt{6} + \\sqrt{2}}{4} \\approx \\frac{2.449 + 1.414}{4} \\approx 0.966$. 실제로 $\\sin 75° \\approx 0.966$이므로 맞습니다."
      ],
      "answer": "$\\sin 75° = \\frac{\\sqrt{6} + \\sqrt{2}}{4}$",
      "lesson": "특수각이 아닌 각도도 특수각의 합·차로 분해하면 덧셈정리로 정확한 값을 구할 수 있습니다. $75° = 45° + 30°$, $15° = 45° - 30°$, $105° = 60° + 45°$ 등이 대표적인 분해입니다."
    },
    {
      "title": "[기본] 코사인 덧셈정리 적용",
      "problem": "$\\cos 15°$의 정확한 값을 구하시오.",
      "steps": [
        "$15° = 45° - 30°$으로 분해한다.",
        "$\\cos(45° - 30°) = \\cos 45° \\cos 30° + \\sin 45° \\sin 30°$.",
        "$= \\frac{\\sqrt{2}}{2} \\cdot \\frac{\\sqrt{3}}{2} + \\frac{\\sqrt{2}}{2} \\cdot \\frac{1}{2} = \\frac{\\sqrt{6} + \\sqrt{2}}{4}$."
      ],
      "answer": "$\\frac{\\sqrt{6} + \\sqrt{2}}{4}$",
      "lesson": "코사인 뺄셈정리에서 가운데 부호는 $+$입니다. 'cos는 반대'로 기억하세요."
    },
    {
      "title": "[응용] 탄젠트 덧셈정리 활용",
      "problem": "$\\tan 15°$의 정확한 값을 구하시오.",
      "steps": [
        "$\\tan(45° - 30°) = \\frac{\\tan 45° - \\tan 30°}{1 + \\tan 45° \\tan 30°}$.",
        "$= \\frac{1 - \\frac{\\sqrt{3}}{3}}{1 + 1 \\cdot \\frac{\\sqrt{3}}{3}} = \\frac{\\frac{3 - \\sqrt{3}}{3}}{\\frac{3 + \\sqrt{3}}{3}} = \\frac{3 - \\sqrt{3}}{3 + \\sqrt{3}}$.",
        "분모를 유리화: $\\frac{(3-\\sqrt{3})(3-\\sqrt{3})}{(3+\\sqrt{3})(3-\\sqrt{3})} = \\frac{9 - 6\\sqrt{3} + 3}{9 - 3} = \\frac{12 - 6\\sqrt{3}}{6} = 2 - \\sqrt{3}$."
      ],
      "answer": "$2 - \\sqrt{3}$",
      "lesson": "분모에 근호가 있으면 유리화하여 깔끔한 형태로 만드세요."
    },
    {
      "title": "[응용] 두 각의 삼각함수 값으로 합의 삼각함수 구하기",
      "problem": "$\\sin\\alpha = \\frac{4}{5}$, $\\cos\\beta = \\frac{12}{13}$ ($0 < \\alpha, \\beta < \\frac{\\pi}{2}$)일 때, $\\sin(\\alpha + \\beta)$를 구하시오.",
      "steps": [
        "$\\cos\\alpha = \\sqrt{1 - \\frac{16}{25}} = \\frac{3}{5}$, $\\sin\\beta = \\sqrt{1 - \\frac{144}{169}} = \\frac{5}{13}$.",
        "$\\sin(\\alpha + \\beta) = \\sin\\alpha\\cos\\beta + \\cos\\alpha\\sin\\beta$.",
        "$= \\frac{4}{5} \\cdot \\frac{12}{13} + \\frac{3}{5} \\cdot \\frac{5}{13} = \\frac{48}{65} + \\frac{15}{65} = \\frac{63}{65}$."
      ],
      "answer": "$\\frac{63}{65}$",
      "lesson": "덧셈정리를 쓸 때 $\\sin$과 $\\cos$을 모두 구해야 합니다. 피타고라스 항등식과 사분면 정보로 부호를 결정하세요."
    },
    {
      "title": "[심화] 덧셈정리를 이용한 등식 증명",
      "problem": "$\\cos(\\alpha + \\beta)\\cos(\\alpha - \\beta) = \\cos^2\\alpha - \\sin^2\\beta$를 증명하시오.",
      "steps": [
        "좌변을 덧셈정리로 전개한다.",
        "$\\cos(\\alpha + \\beta) = \\cos\\alpha\\cos\\beta - \\sin\\alpha\\sin\\beta$.",
        "$\\cos(\\alpha - \\beta) = \\cos\\alpha\\cos\\beta + \\sin\\alpha\\sin\\beta$.",
        "곱하면 합차 공식: $(\\cos\\alpha\\cos\\beta)^2 - (\\sin\\alpha\\sin\\beta)^2$.",
        "$= \\cos^2\\alpha\\cos^2\\beta - \\sin^2\\alpha\\sin^2\\beta$.",
        "$= \\cos^2\\alpha(1 - \\sin^2\\beta) - \\sin^2\\beta(1 - \\cos^2\\alpha) = \\cos^2\\alpha - \\sin^2\\beta$."
      ],
      "answer": "좌변 $= \\cos^2\\alpha - \\sin^2\\beta =$ 우변 (증명 완료)",
      "lesson": "삼각함수 등식 증명은 한쪽을 덧셈정리로 풀어쓰고, 합차 공식이나 피타고라스 항등식으로 정리하는 것이 기본 전략입니다."
    }
  ],
  "problems": [
    {
      "id": "15-1",
      "type": "choice",
      "difficulty": 1,
      "question": "$\\cos 15°$의 값은?",
      "choices": [
        "$\\frac{\\sqrt{6} - \\sqrt{2}}{4}$",
        "$\\frac{\\sqrt{6} + \\sqrt{2}}{4}$",
        "$\\frac{\\sqrt{3} - 1}{2}$",
        "$\\frac{\\sqrt{3} + 1}{4}$"
      ],
      "answer": "$\\frac{\\sqrt{6} + \\sqrt{2}}{4}$",
      "hints": [
        "$15° = 45° - 30°$으로 분해하고 코사인 뺄셈정리를 적용하세요.",
        "$\\cos(45° - 30°) = \\cos 45°\\cos 30° + \\sin 45°\\sin 30°$.",
        "$= \\frac{\\sqrt{2}}{2} \\cdot \\frac{\\sqrt{3}}{2} + \\frac{\\sqrt{2}}{2} \\cdot \\frac{1}{2} = \\frac{\\sqrt{6}}{4} + \\frac{\\sqrt{2}}{4}$."
      ],
      "explanation": "$\\cos 15° = \\cos(45° - 30°) = \\cos 45°\\cos 30° + \\sin 45°\\sin 30° = \\frac{\\sqrt{2}}{2} \\cdot \\frac{\\sqrt{3}}{2} + \\frac{\\sqrt{2}}{2} \\cdot \\frac{1}{2} = \\frac{\\sqrt{6} + \\sqrt{2}}{4}$. 흥미롭게도 $\\sin 75° = \\cos 15°$이므로 같은 값입니다. (여각 관계: $\\sin\\theta = \\cos(90° - \\theta)$)",
      "wrongAnalysis": "$\\frac{\\sqrt{6} - \\sqrt{2}}{4}$를 선택하는 실수는 코사인 뺄셈정리에서 부호를 잘못 적용한 것입니다. $\\cos(\\alpha - \\beta)$에서는 $\\cos\\alpha\\cos\\beta + \\sin\\alpha\\sin\\beta$로 가운데 부호가 $+$입니다. 'cos는 반대'를 기억하세요: 뺄셈(-)이면 가운데 부호는 덧셈(+)입니다."
    },
    {
      "id": "15-2",
      "type": "text",
      "difficulty": 2,
      "question": "$\\tan\\alpha = 2$, $\\tan\\beta = 3$일 때, $\\tan(\\alpha + \\beta)$의 값을 구하시오. (정수 또는 분수로 답하시오, 예: -1 또는 3/5)",
      "answer": "-1",
      "hints": [
        "탄젠트 덧셈정리 $\\tan(\\alpha + \\beta) = \\frac{\\tan\\alpha + \\tan\\beta}{1 - \\tan\\alpha\\tan\\beta}$를 사용하세요.",
        "분자: $\\tan\\alpha + \\tan\\beta = 2 + 3 = 5$.",
        "분모: $1 - \\tan\\alpha\\tan\\beta = 1 - 2 \\times 3 = 1 - 6 = -5$. 따라서 $\\frac{5}{-5} = -1$."
      ],
      "explanation": "$\\tan(\\alpha + \\beta) = \\frac{2 + 3}{1 - 2 \\cdot 3} = \\frac{5}{1 - 6} = \\frac{5}{-5} = -1$. 결과가 $-1$이라는 것은 $\\alpha + \\beta = 135° + n \\cdot 180°$임을 의미합니다.",
      "wrongAnalysis": "$\\tan(\\alpha + \\beta) = \\tan\\alpha + \\tan\\beta = 5$로 답하는 실수는 삼각함수에 분배법칙을 적용한 것입니다. 탄젠트의 합은 분수 형태의 덧셈정리를 반드시 사용해야 합니다."
    },
    {
      "id": "15-3",
      "type": "text",
      "difficulty": 3,
      "question": "$\\sin\\alpha = \\frac{3}{5}$ ($0 < \\alpha < \\frac{\\pi}{2}$), $\\cos\\beta = \\frac{5}{13}$ ($0 < \\beta < \\frac{\\pi}{2}$)일 때, $\\cos(\\alpha + \\beta)$의 값을 구하시오. (분수로 답하시오, 예: 3/5)",
      "answer": "-16/65",
      "hints": [
        "먼저 $\\cos\\alpha$와 $\\sin\\beta$를 구하세요. $\\sin^2\\alpha + \\cos^2\\alpha = 1$에서 $\\cos\\alpha = \\frac{4}{5}$ (제1사분면이므로 양수).",
        "$\\sin^2\\beta + \\cos^2\\beta = 1$에서 $\\sin\\beta = \\frac{12}{13}$ (제1사분면이므로 양수).",
        "$\\cos(\\alpha + \\beta) = \\cos\\alpha\\cos\\beta - \\sin\\alpha\\sin\\beta = \\frac{4}{5} \\cdot \\frac{5}{13} - \\frac{3}{5} \\cdot \\frac{12}{13} = \\frac{20}{65} - \\frac{36}{65} = -\\frac{16}{65}$."
      ],
      "explanation": "$\\sin\\alpha = \\frac{3}{5}$이고 $0 < \\alpha < \\frac{\\pi}{2}$이므로 $\\cos\\alpha = \\sqrt{1 - \\frac{9}{25}} = \\frac{4}{5}$. $\\cos\\beta = \\frac{5}{13}$이고 $0 < \\beta < \\frac{\\pi}{2}$이므로 $\\sin\\beta = \\sqrt{1 - \\frac{25}{169}} = \\frac{12}{13}$. 코사인 덧셈정리를 적용하면 $\\cos(\\alpha + \\beta) = \\frac{4}{5} \\cdot \\frac{5}{13} - \\frac{3}{5} \\cdot \\frac{12}{13} = \\frac{20}{65} - \\frac{36}{65} = -\\frac{16}{65}$.",
      "wrongAnalysis": "$\\cos\\alpha$나 $\\sin\\beta$를 구할 때 부호를 잘못 결정하는 실수가 흔합니다. 사분면 정보를 반드시 활용하세요. 제1사분면에서는 $\\sin$과 $\\cos$ 모두 양수입니다. 또한 $\\cos(\\alpha + \\beta) = \\cos\\alpha + \\cos\\beta$로 잘못 계산하는 실수도 있습니다."
    },
    {
      "id": "15-4",
      "type": "choice",
      "difficulty": 1,
      "question": "$\\sin(A + B) = \\sin A \\cos B + \\cos A \\sin B$에서 $A = 30°$, $B = 30°$일 때, $\\sin 60°$의 값은?",
      "choices": [
        "$\\frac{1}{2}$",
        "$\\frac{\\sqrt{2}}{2}$",
        "$\\frac{\\sqrt{3}}{2}$",
        "$1$"
      ],
      "answer": "$\\frac{\\sqrt{3}}{2}$",
      "hints": [
        "$\\sin 60° = \\sin(30° + 30°) = \\sin 30° \\cos 30° + \\cos 30° \\sin 30°$.",
        "$= 2\\sin 30° \\cos 30° = 2 \\times \\frac{1}{2} \\times \\frac{\\sqrt{3}}{2}$."
      ],
      "explanation": "$\\sin 60° = 2\\sin 30°\\cos 30° = 2 \\times \\frac{1}{2} \\times \\frac{\\sqrt{3}}{2} = \\frac{\\sqrt{3}}{2}$. 이것은 배각공식 $\\sin 2\\alpha = 2\\sin\\alpha\\cos\\alpha$의 특수한 경우이기도 합니다.",
      "wrongAnalysis": "$\\sin 60° = \\sin 30° + \\sin 30° = 1$로 계산하는 실수는 삼각함수에 분배법칙을 적용한 것입니다. $\\sin(A+B) \\neq \\sin A + \\sin B$입니다."
    },
    {
      "id": "15-5",
      "type": "number",
      "difficulty": 2,
      "question": "$\\tan 15° = \\tan(45° - 30°)$의 값이 $2 - \\sqrt{3}$일 때, 이 값의 소수점 첫째 자리 숫자는?",
      "answer": "2",
      "hints": [
        "$\\sqrt{3} \\approx 1.732$이므로 $2 - \\sqrt{3} \\approx 2 - 1.732$.",
        "$2 - 1.732 = 0.268$."
      ],
      "explanation": "$\\tan 15° = \\frac{\\tan 45° - \\tan 30°}{1 + \\tan 45° \\tan 30°} = \\frac{1 - \\frac{\\sqrt{3}}{3}}{1 + \\frac{\\sqrt{3}}{3}} = 2 - \\sqrt{3} \\approx 0.268$. 소수점 첫째 자리 숫자는 $2$입니다.",
      "wrongAnalysis": "$\\tan(45° - 30°) = \\tan 45° - \\tan 30° = 1 - \\frac{\\sqrt{3}}{3}$으로 계산하는 실수는 탄젠트 뺄셈정리를 사용하지 않은 것입니다. 분모 $1 + \\tan 45° \\tan 30°$도 반드시 포함해야 합니다."
    }
  ],
  "summary": {
    "keyPoints": [
      "$\\cos(\\alpha - \\beta) = \\cos\\alpha\\cos\\beta + \\sin\\alpha\\sin\\beta$: 단위원 위 두 점의 거리 비교로 유도한다.",
      "$\\sin(\\alpha \\pm \\beta) = \\sin\\alpha\\cos\\beta \\pm \\cos\\alpha\\sin\\beta$: 부호가 원래 부호와 같다.",
      "$\\cos(\\alpha \\pm \\beta) = \\cos\\alpha\\cos\\beta \\mp \\sin\\alpha\\sin\\beta$: 부호가 원래 부호와 반대다.",
      "$\\tan(\\alpha \\pm \\beta) = \\frac{\\tan\\alpha \\pm \\tan\\beta}{1 \\mp \\tan\\alpha\\tan\\beta}$."
    ],
    "formulas": [
      "\\sin(\\alpha \\pm \\beta) = \\sin\\alpha\\cos\\beta \\pm \\cos\\alpha\\sin\\beta",
      "\\cos(\\alpha \\pm \\beta) = \\cos\\alpha\\cos\\beta \\mp \\sin\\alpha\\sin\\beta",
      "\\tan(\\alpha \\pm \\beta) = \\frac{\\tan\\alpha \\pm \\tan\\beta}{1 \\mp \\tan\\alpha\\tan\\beta}"
    ],
    "commonMistakes": [
      "$\\sin(\\alpha + \\beta) = \\sin\\alpha + \\sin\\beta$로 분배하는 실수 -- 삼각함수에는 분배법칙이 없으며 반드시 덧셈정리를 사용해야 한다.",
      "코사인 덧셈정리에서 부호를 잘못 적용하는 실수 -- $\\cos(\\alpha + \\beta)$에서 가운데 부호는 $-$이고, $\\cos(\\alpha - \\beta)$에서 가운데 부호는 $+$이다.",
      "삼각함수 값을 구할 때 사분면에 따른 부호를 무시하는 실수 -- 피타고라스 항등식으로 다른 삼각함수를 구할 때 사분면 정보로 부호를 반드시 결정해야 한다."
    ],
    "nextConnection": "덧셈정리를 알았으니, 다음 레슨에서 이를 활용하여 배각·반각 공식과 합곱 변환 공식을 유도합니다."
  }
},
{
  "id": 19,
  "title": "삼각방정식과 부등식",
  "category": "삼각함수",
  "level": "기초",
  "question": "삼각함수가 포함된 방정식과 부등식은 어떻게 풀까?",
  "concept": {
    "intro": "지금까지 삼각함수의 정의, 항등식, 역삼각함수를 배웠습니다. 이제 이 도구들을 사용하여 삼각방정식과 삼각부등식을 풀어봅시다.\n\n:::theorem[기본 삼각방정식의 일반해]\n$\\sin x = a$ ($|a| \\leq 1$)의 일반해:\n$$x = \\arcsin a + 2n\\pi \\quad \\text{또는} \\quad x = \\pi - \\arcsin a + 2n\\pi \\quad (n \\in \\mathbb{Z})$$\n$\\cos x = a$ ($|a| \\leq 1$)의 일반해:\n$$x = \\pm\\arccos a + 2n\\pi \\quad (n \\in \\mathbb{Z})$$\n$\\tan x = a$의 일반해:\n$$x = \\arctan a + n\\pi \\quad (n \\in \\mathbb{Z})$$\n:::\n\n단위원에서 $y$좌표가 $a$인 점은 두 개입니다. 하나는 $\\arcsin a$이고, 다른 하나는 $\\pi - \\arcsin a$입니다. 코사인의 경우 $x$좌표가 $a$인 점은 $\\arccos a$와 $-\\arccos a$이고, 탄젠트의 주기가 $\\pi$이므로 $n\\pi$를 더합니다.\n\n:::note[항등식을 이용한 삼각방정식]\n복잡한 삼각방정식은 항등식으로 변환하여 풀 수 있습니다.\n- $2\\cos^2 x - 1 = 0 \\to \\cos 2x = 0$ (배각공식 활용)\n- $\\sin x + \\cos x = 1 \\to \\sqrt{2}\\sin(x + \\frac{\\pi}{4}) = 1$ (합성 활용)\n:::\n\n**삼각부등식:** $\\sin x > \\frac{1}{2}$를 풀려면, 먼저 $\\sin x = \\frac{1}{2}$의 해를 구합니다. $x = \\frac{\\pi}{6}$과 $x = \\frac{5\\pi}{6}$입니다. 사인 그래프에서 $\\sin x > \\frac{1}{2}$인 구간은 $\\frac{\\pi}{6} < x < \\frac{5\\pi}{6}$이고, 주기 $2\\pi$를 고려하면 일반해는 $\\frac{\\pi}{6} + 2n\\pi < x < \\frac{5\\pi}{6} + 2n\\pi$.",
    "intuition": "삼각방정식은 단위원 위에서 생각하면 직관적입니다. $\\sin x = \\frac{1}{2}$은 '단위원에서 $y$좌표가 $\\frac{1}{2}$인 점은 어디인가?'를 묻는 것입니다. 수평선 $y = \\frac{1}{2}$가 단위원과 만나는 점이 두 개이므로, 한 주기 안에 해가 $2$개입니다.\n\n삼각부등식은 '단위원에서 $y$좌표가 $\\frac{1}{2}$보다 위인 호(arc)는 어디인가?'를 묻는 것입니다. 그래프나 단위원에서 해당 구간을 읽어내면 됩니다.",
    "formula": "\\sin x = a \\implies x = \\arcsin a + 2n\\pi \\text{ 또는 } \\pi - \\arcsin a + 2n\\pi\n\\cos x = a \\implies x = \\pm\\arccos a + 2n\\pi\n\\tan x = a \\implies x = \\arctan a + n\\pi",
    "summary": "삼각방정식의 일반해는 역삼각함수와 주기를 결합하여 구한다. 항등식으로 변환하면 복잡한 방정식도 기본형으로 환원된다. 삼각부등식은 등호 해를 먼저 구하고 그래프에서 부등식이 성립하는 구간을 읽는다."
  },
  "examples": [
    {
      "title": "삼각방정식의 일반해 구하기",
      "problem": "$2\\sin x - 1 = 0$의 일반해를 구하시오.",
      "steps": [
        "$\\sin x = \\frac{1}{2}$로 정리한다.",
        "기본해: $\\arcsin \\frac{1}{2} = \\frac{\\pi}{6}$.",
        "두 번째 해: $\\pi - \\frac{\\pi}{6} = \\frac{5\\pi}{6}$.",
        "일반해: $x = \\frac{\\pi}{6} + 2n\\pi$ 또는 $x = \\frac{5\\pi}{6} + 2n\\pi$ ($n \\in \\mathbb{Z}$)."
      ],
      "answer": "$x = \\frac{\\pi}{6} + 2n\\pi$ 또는 $x = \\frac{5\\pi}{6} + 2n\\pi$",
      "lesson": "$\\sin x = a$의 일반해에서 한 주기 안의 해가 두 개이며, 각각에 $+2n\\pi$를 붙이면 모든 해를 얻습니다."
    },
    {
      "title": "[기본] 코사인 방정식 풀기",
      "problem": "$0 \\leq x < 2\\pi$에서 $\\cos x = -\\frac{1}{2}$의 모든 해를 구하시오.",
      "steps": [
        "기본 참조각: $\\cos\\frac{\\pi}{3} = \\frac{1}{2}$이므로 참조각은 $\\frac{\\pi}{3}$.",
        "$\\cos x < 0$인 사분면은 제2, 3사분면.",
        "제2사분면: $x = \\pi - \\frac{\\pi}{3} = \\frac{2\\pi}{3}$.",
        "제3사분면: $x = \\pi + \\frac{\\pi}{3} = \\frac{4\\pi}{3}$."
      ],
      "answer": "$x = \\frac{2\\pi}{3},\\ \\frac{4\\pi}{3}$",
      "lesson": "코사인이 음수인 사분면(제2, 3사분면)에서 해를 구합니다."
    },
    {
      "title": "[응용] 삼각부등식 풀기",
      "problem": "$0 \\leq x < 2\\pi$에서 $\\sin x \\geq \\frac{\\sqrt{3}}{2}$의 해를 구하시오.",
      "steps": [
        "$\\sin x = \\frac{\\sqrt{3}}{2}$의 해: $x = \\frac{\\pi}{3}$, $x = \\frac{2\\pi}{3}$.",
        "사인 그래프에서 $\\sin x \\geq \\frac{\\sqrt{3}}{2}$인 구간은 두 해 사이.",
        "해: $\\frac{\\pi}{3} \\leq x \\leq \\frac{2\\pi}{3}$."
      ],
      "answer": "$\\frac{\\pi}{3} \\leq x \\leq \\frac{2\\pi}{3}$",
      "lesson": "삼각부등식은 등호 해를 먼저 구한 뒤, 그래프에서 부등식이 성립하는 구간을 읽습니다."
    },
    {
      "title": "[응용] 치환을 이용한 삼각방정식",
      "problem": "$0 \\leq x < 2\\pi$에서 $2\\sin^2 x - 3\\sin x + 1 = 0$의 모든 해를 구하시오.",
      "steps": [
        "$t = \\sin x$로 치환: $2t^2 - 3t + 1 = 0$.",
        "$(2t - 1)(t - 1) = 0$이므로 $t = \\frac{1}{2}$ 또는 $t = 1$.",
        "$\\sin x = \\frac{1}{2}$이면 $x = \\frac{\\pi}{6}, \\frac{5\\pi}{6}$.",
        "$\\sin x = 1$이면 $x = \\frac{\\pi}{2}$."
      ],
      "answer": "$x = \\frac{\\pi}{6},\\ \\frac{\\pi}{2},\\ \\frac{5\\pi}{6}$",
      "lesson": "삼각방정식에서 $\\sin^2 x$가 보이면 $t = \\sin x$로 치환하여 이차방정식으로 만드는 것이 정석입니다."
    },
    {
      "title": "[심화] 삼각함수 합성을 이용한 방정식",
      "problem": "$0 \\leq x < 2\\pi$에서 $\\sin x + \\cos x = 1$의 모든 해를 구하시오.",
      "steps": [
        "$\\sin x + \\cos x = \\sqrt{2}\\sin\\left(x + \\frac{\\pi}{4}\\right)$로 합성한다.",
        "$\\sqrt{2}\\sin\\left(x + \\frac{\\pi}{4}\\right) = 1$이므로 $\\sin\\left(x + \\frac{\\pi}{4}\\right) = \\frac{1}{\\sqrt{2}} = \\frac{\\sqrt{2}}{2}$.",
        "$x + \\frac{\\pi}{4} = \\frac{\\pi}{4}$ 또는 $x + \\frac{\\pi}{4} = \\frac{3\\pi}{4}$ (범위 내).",
        "$x = 0$ 또는 $x = \\frac{\\pi}{2}$.",
        "검산: $\\sin 0 + \\cos 0 = 1$ (O), $\\sin\\frac{\\pi}{2} + \\cos\\frac{\\pi}{2} = 1$ (O)."
      ],
      "answer": "$x = 0,\\ \\frac{\\pi}{2}$",
      "lesson": "$a\\sin x + b\\cos x = \\sqrt{a^2 + b^2}\\sin(x + \\phi)$로 합성하면 기본 삼각방정식으로 환원할 수 있습니다."
    }
  ],
  "problems": [
    {
      "id": "19-1",
      "type": "choice",
      "difficulty": 1,
      "question": "$\\cos x = \\frac{\\sqrt{3}}{2}$에서 $0 \\leq x < 2\\pi$ 범위의 해를 모두 고르면?",
      "choices": [
        "$\\frac{\\pi}{6}$만",
        "$\\frac{\\pi}{6}$과 $\\frac{11\\pi}{6}$",
        "$\\frac{\\pi}{3}$만",
        "$\\frac{\\pi}{6}$과 $\\frac{5\\pi}{6}$"
      ],
      "answer": "$\\frac{\\pi}{6}$과 $\\frac{11\\pi}{6}$",
      "hints": [
        "$\\cos \\frac{\\pi}{6} = \\frac{\\sqrt{3}}{2}$이므로 $x = \\frac{\\pi}{6}$은 해입니다.",
        "코사인은 $x$축에 대해 대칭이므로 $x = -\\frac{\\pi}{6}$, 즉 $x = 2\\pi - \\frac{\\pi}{6} = \\frac{11\\pi}{6}$도 해.",
        "해는 $\\frac{\\pi}{6}$과 $\\frac{11\\pi}{6}$."
      ],
      "explanation": "$\\cos x = \\frac{\\sqrt{3}}{2}$의 기본해는 $\\frac{\\pi}{6}$. 코사인이 양수인 사분면은 제1, 4사분면이므로 $x = \\frac{\\pi}{6}$과 $x = \\frac{11\\pi}{6}$.",
      "wrongAnalysis": "$\\frac{5\\pi}{6}$을 선택하는 실수는 사인 방정식의 해와 혼동한 것입니다. $\\cos\\frac{5\\pi}{6} = -\\frac{\\sqrt{3}}{2}$이므로 이것은 해가 아닙니다."
    },
    {
      "id": "19-2",
      "type": "text",
      "difficulty": 2,
      "question": "$\\tan x = -1$에서 $0 \\leq x < 2\\pi$ 범위의 해를 모두 구하시오. (예: pi/4, 3pi/4)",
      "answer": "3pi/4, 7pi/4",
      "hints": [
        "$\\tan \\frac{\\pi}{4} = 1$이므로 기본 참조각은 $\\frac{\\pi}{4}$.",
        "$\\tan x < 0$인 사분면은 제2, 4사분면.",
        "제2사분면: $\\pi - \\frac{\\pi}{4} = \\frac{3\\pi}{4}$. 제4사분면: $2\\pi - \\frac{\\pi}{4} = \\frac{7\\pi}{4}$."
      ],
      "explanation": "기본 참조각 $\\frac{\\pi}{4}$. $\\tan x < 0$인 사분면(2, 4)에서 해를 구하면 $x = \\frac{3\\pi}{4}$, $x = \\frac{7\\pi}{4}$.",
      "wrongAnalysis": "$\\frac{\\pi}{4}$을 답에 포함시키는 실수는 부호를 무시한 것입니다. $\\tan\\frac{\\pi}{4} = +1$이지 $-1$이 아닙니다."
    },
    {
      "id": "19-3",
      "type": "text",
      "difficulty": 3,
      "question": "$0 \\leq x < 2\\pi$에서 $2\\cos^2 x - \\cos x - 1 = 0$의 모든 해를 구하시오. (예: 0, pi/3, 5pi/3)",
      "answer": "0, 2pi/3, 4pi/3",
      "hints": [
        "$t = \\cos x$로 치환하면 $2t^2 - t - 1 = 0$.",
        "$(2t + 1)(t - 1) = 0$이므로 $t = -\\frac{1}{2}$ 또는 $t = 1$.",
        "$\\cos x = 1 \\implies x = 0$. $\\cos x = -\\frac{1}{2} \\implies x = \\frac{2\\pi}{3}, \\frac{4\\pi}{3}$."
      ],
      "explanation": "$2t^2 - t - 1 = (2t+1)(t-1) = 0$에서 $\\cos x = 1$ 또는 $\\cos x = -\\frac{1}{2}$. $\\cos x = 1$이면 $x = 0$, $\\cos x = -\\frac{1}{2}$이면 $x = \\frac{2\\pi}{3}, \\frac{4\\pi}{3}$.",
      "wrongAnalysis": "치환 없이 풀다가 $\\cos^2 x$를 $\\cos(x^2)$로 혼동하는 실수가 있습니다. $\\cos^2 x = (\\cos x)^2$이며, $t = \\cos x$로 치환하면 이차방정식이 됩니다."
    },
    {
      "id": "19-4",
      "type": "choice",
      "difficulty": 1,
      "question": "$\\sin x = 1$에서 $0 \\leq x < 2\\pi$ 범위의 해는?",
      "choices": [
        "$x = 0$",
        "$x = \\frac{\\pi}{2}$",
        "$x = \\pi$",
        "$x = \\frac{3\\pi}{2}$"
      ],
      "answer": "$x = \\frac{\\pi}{2}$",
      "hints": [
        "단위원에서 $y$좌표가 $1$인 점을 찾으세요.",
        "단위원의 꼭대기, 즉 $(0, 1)$에 해당하는 각도입니다."
      ],
      "explanation": "$\\sin x = 1$이 되려면 단위원에서 $y$좌표가 $1$이어야 합니다. 이는 $(0, 1)$ 한 점뿐이므로 $x = \\frac{\\pi}{2}$.",
      "wrongAnalysis": "$x = \\pi$를 선택하는 실수는 $\\sin\\pi = 0$인 것을 잘못 기억한 것입니다. $\\sin\\pi = 0$이며, $\\sin\\frac{\\pi}{2} = 1$입니다."
    },
    {
      "id": "19-5",
      "type": "text",
      "difficulty": 2,
      "question": "$0 \\leq x < 2\\pi$에서 $2\\sin x - \\sqrt{3} = 0$의 모든 해를 구하시오. (예: pi/3, 2pi/3)",
      "answer": "pi/3, 2pi/3",
      "hints": [
        "$\\sin x = \\frac{\\sqrt{3}}{2}$로 정리하세요.",
        "$\\sin\\frac{\\pi}{3} = \\frac{\\sqrt{3}}{2}$이고, 사인이 양수인 사분면은 제1, 2사분면."
      ],
      "explanation": "$\\sin x = \\frac{\\sqrt{3}}{2}$. 기본해: $x = \\frac{\\pi}{3}$. 제2사분면: $x = \\pi - \\frac{\\pi}{3} = \\frac{2\\pi}{3}$. 따라서 $x = \\frac{\\pi}{3}, \\frac{2\\pi}{3}$.",
      "wrongAnalysis": "$x = \\frac{\\pi}{3}$만 답하는 실수는 사인이 양수인 제2사분면의 해를 놓친 것입니다. $\\sin x = a > 0$이면 한 주기 안에 해가 2개입니다."
    }
  ],
  "summary": {
    "keyPoints": [
      "$\\sin x = a$의 일반해: $x = \\arcsin a + 2n\\pi$ 또는 $\\pi - \\arcsin a + 2n\\pi$.",
      "$\\cos x = a$의 일반해: $x = \\pm\\arccos a + 2n\\pi$.",
      "$\\tan x = a$의 일반해: $x = \\arctan a + n\\pi$.",
      "복잡한 삼각방정식은 치환이나 항등식으로 기본형으로 환원한다."
    ],
    "formulas": [
      "\\sin x = a \\implies x = \\arcsin a + 2n\\pi,\\ \\pi - \\arcsin a + 2n\\pi",
      "\\cos x = a \\implies x = \\pm\\arccos a + 2n\\pi",
      "\\tan x = a \\implies x = \\arctan a + n\\pi"
    ],
    "commonMistakes": [
      "일반해에서 $+2n\\pi$ (또는 $+n\\pi$)를 빠뜨려 특수해만 구하는 실수.",
      "$\\sin x = a$에서 한 주기 안의 해가 $2$개인데 하나만 찾는 실수.",
      "삼각부등식에서 등호 해만 구하고 구간을 결정하지 않는 실수."
    ],
    "nextConnection": "삼각방정식과 부등식으로 삼각함수를 완성했으니, 다음 레슨부터 수열의 세계로 들어갑니다."
  }
}
];
