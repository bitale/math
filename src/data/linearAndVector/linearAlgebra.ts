import { Lesson } from "../../types";

export const linearAlgebraLessons: Lesson[] = [
{
  "id": 1,
  "title": "벡터 기초",
  "category": "선형대수",
  "level": "기초",
  "question": "수가 아니라 '방향까지 가진 양'을 어떻게 다룰까?",
  "concept": {
    "intro": ":::definition[벡터의 정의]\n벡터는 크기와 방향을 동시에 가진 양입니다. 수 하나(스칼라)로는 표현할 수 없는 위치 변화, 속도, 힘 등을 다룰 때 등장합니다.\n:::\n\n2차원·3차원·일반 $n$차원에서 벡터는 성분의 나열 $\\mathbf{v} = (v_1, v_2, \\ldots, v_n)$ 로 표현합니다.\n\n:::note[벡터 연산]\n같은 차원의 벡터는 성분별로 더할 수 있고, 스칼라(실수)를 곱하면 방향은 유지된 채 길이만 바뀝니다.\n:::",
    "intuition": ":::note[직관]\n지도 위에서 '동쪽으로 3km, 북쪽으로 4km' 라는 화살표 하나를 떠올려 보세요. 같은 화살표 두 개를 이어 붙이면 두 배 길이의 화살표가 되고, 다른 화살표를 머리끝에 이으면 두 이동을 합친 새로운 화살표가 됩니다. 이것이 그대로 스칼라곱과 합입니다.\n:::",
    "formula": "\\mathbf{v} = (v_1, v_2, \\ldots, v_n)\n\\mathbf{u} + \\mathbf{v} = (u_1+v_1,\\ \\ldots,\\ u_n+v_n)\nk\\mathbf{v} = (k v_1,\\ \\ldots,\\ k v_n)\n\\|\\mathbf{v}\\| = \\sqrt{v_1^2 + \\cdots + v_n^2}",
    "summary": ":::note[핵심 요약]\n• 벡터 $=$ 크기 $+$ 방향\n• 성분별 합 / 스칼라곱\n• 노름(길이) $\\|\\mathbf{v}\\|$\n:::",
    "visuals": [{
      "type": "geometry",
      "title": "벡터의 덧셈: 평행사변형 법칙",
      "xRange": [-1, 6],
      "yRange": [-1, 5],
      "lines": [
        { "from": [0, 0], "to": [3, 1], "color": "#6366f1", "label": "a⃗" },
        { "from": [0, 0], "to": [1, 3], "color": "#ef4444", "label": "b⃗" },
        { "from": [0, 0], "to": [4, 4], "color": "#10b981", "label": "a⃗+b⃗" },
        { "from": [3, 1], "to": [4, 4], "color": "#ef4444", "dashed": true },
        { "from": [1, 3], "to": [4, 4], "color": "#6366f1", "dashed": true }
      ],
      "points": [
        { "x": 0, "y": 0, "label": "O", "color": "#334155" },
        { "x": 4, "y": 4, "label": "a⃗+b⃗", "color": "#10b981" }
      ]
    }]
  },
  "examples": [
    {
      "title": "벡터 합과 노름",
      "problem": "$\\mathbf{u} = (1, 2),\\ \\mathbf{v} = (3, 4)$ 일 때 $\\mathbf{u} + \\mathbf{v}$ 와 $\\|\\mathbf{u} + \\mathbf{v}\\|$ 을 구하시오.",
      "steps": [
        "$\\mathbf{u} + \\mathbf{v} = (1+3,\\ 2+4) = (4, 6)$.",
        "$\\|\\mathbf{u} + \\mathbf{v}\\| = \\sqrt{4^2 + 6^2} = \\sqrt{52} = 2\\sqrt{13}$."
      ],
      "answer": "$(4,6),\\ 2\\sqrt{13}$",
      "lesson": "벡터 연산은 성분별 산술입니다. 노름은 피타고라스 정리의 일반화로 보면 됩니다."
    },
    {
      "title": "[기본] 스칼라곱과 벡터 뺄셈",
      "problem": "$\\mathbf{u} = (2, -1, 3)$ 일 때 $3\\mathbf{u}$ 와 $\\|\\mathbf{u}\\|$ 를 구하시오.",
      "steps": [
        "$3\\mathbf{u} = (3 \\cdot 2,\\ 3 \\cdot (-1),\\ 3 \\cdot 3) = (6, -3, 9)$.",
        "$\\|\\mathbf{u}\\| = \\sqrt{2^2 + (-1)^2 + 3^2} = \\sqrt{4 + 1 + 9} = \\sqrt{14}$."
      ],
      "answer": "$3\\mathbf{u} = (6, -3, 9),\\ \\|\\mathbf{u}\\| = \\sqrt{14}$",
      "lesson": "스칼라곱은 각 성분에 같은 수를 곱하는 것이고, 노름은 모든 성분의 제곱합에 제곱근을 취합니다."
    },
    {
      "title": "[응용] 단위벡터 구하기",
      "problem": "$\\mathbf{v} = (1, 2, 2)$ 와 같은 방향의 단위벡터를 구하시오.",
      "steps": [
        "$\\|\\mathbf{v}\\| = \\sqrt{1^2 + 2^2 + 2^2} = \\sqrt{9} = 3$.",
        "단위벡터 $\\hat{\\mathbf{v}} = \\dfrac{\\mathbf{v}}{\\|\\mathbf{v}\\|} = \\dfrac{1}{3}(1, 2, 2) = \\left(\\dfrac{1}{3},\\ \\dfrac{2}{3},\\ \\dfrac{2}{3}\\right)$.",
        "검산: $\\left\\|\\hat{\\mathbf{v}}\\right\\| = \\sqrt{\\dfrac{1}{9} + \\dfrac{4}{9} + \\dfrac{4}{9}} = \\sqrt{1} = 1$. ✓"
      ],
      "answer": "$\\hat{\\mathbf{v}} = \\left(\\dfrac{1}{3},\\ \\dfrac{2}{3},\\ \\dfrac{2}{3}\\right)$",
      "lesson": "단위벡터는 원래 벡터를 노름으로 나누면 됩니다. 결과의 노름이 $1$인지 반드시 검산하세요."
    },
    {
      "title": "[응용] 삼각부등식 확인",
      "problem": "$\\mathbf{u} = (3, 0),\\ \\mathbf{v} = (0, 4)$ 일 때 $\\|\\mathbf{u} + \\mathbf{v}\\| \\leq \\|\\mathbf{u}\\| + \\|\\mathbf{v}\\|$ 가 성립하는지 확인하시오.",
      "steps": [
        "$\\mathbf{u} + \\mathbf{v} = (3, 4)$.",
        "$\\|\\mathbf{u} + \\mathbf{v}\\| = \\sqrt{9 + 16} = 5$.",
        "$\\|\\mathbf{u}\\| = 3,\\ \\|\\mathbf{v}\\| = 4$.",
        "$5 \\leq 3 + 4 = 7$. ✓ 삼각부등식 성립."
      ],
      "answer": "$5 \\leq 7$ 이므로 삼각부등식 성립",
      "lesson": "삼각부등식 $\\|\\mathbf{u}+\\mathbf{v}\\| \\leq \\|\\mathbf{u}\\|+\\|\\mathbf{v}\\|$은 '두 변의 합은 나머지 한 변보다 크다'는 기하학적 사실의 대수적 표현입니다."
    },
    {
      "title": "[심화] 일차결합의 노름 최솟값",
      "problem": "$\\mathbf{u} = (1, 0),\\ \\mathbf{v} = (1, 1)$ 일 때 $\\|\\mathbf{u} - t\\mathbf{v}\\|$ 을 최소로 하는 실수 $t$ 를 구하시오.",
      "steps": [
        "$\\mathbf{u} - t\\mathbf{v} = (1 - t,\\ -t)$.",
        "$\\|\\mathbf{u} - t\\mathbf{v}\\|^2 = (1-t)^2 + t^2 = 2t^2 - 2t + 1$.",
        "이차함수의 꼭짓점: $t = \\dfrac{2}{2 \\cdot 2} = \\dfrac{1}{2}$.",
        "최솟값: $2 \\cdot \\dfrac{1}{4} - 2 \\cdot \\dfrac{1}{2} + 1 = \\dfrac{1}{2}$이므로 $\\|\\mathbf{u} - t\\mathbf{v}\\|_{\\min} = \\dfrac{1}{\\sqrt{2}}$."
      ],
      "answer": "$t = \\dfrac{1}{2}$",
      "lesson": "노름의 최솟값 문제는 $\\|\\cdot\\|^2$을 $t$에 대한 이차함수로 보고 미분 또는 꼭짓점 공식으로 풀 수 있습니다. 이 아이디어가 나중에 사영과 최소제곱법으로 일반화됩니다."
    }
  ],
  "problems": [
    {
      "id": "1-1",
      "type": "text",
      "difficulty": 1,
      "question": "$\\mathbf{u}=(2,-1),\\ \\mathbf{v}=(3,5)$ 일 때 $\\mathbf{u}+\\mathbf{v}$ 를 $(a,b)$ 형태로 적으시오.",
      "answer": "(5,4)",
      "hints": [
        "성분별로 더하세요.",
        "$2+3,\\ -1+5$ 를 계산."
      ],
      "explanation": "$(2+3,\\ -1+5) = (5, 4)$.",
      "wrongAnalysis": "$x$ 성분과 $y$ 성분을 섞어 곱하는 실수가 있습니다. 합은 각 자리끼리만."
    },
    {
      "id": "1-4",
      "type": "number",
      "difficulty": 1,
      "question": "$\\mathbf{v} = (1, -2, 2)$ 의 노름 $\\|\\mathbf{v}\\|$ 의 값은?",
      "answer": "3",
      "hints": [
        "$\\sqrt{v_1^2 + v_2^2 + v_3^2}$ 를 계산하세요.",
        "$\\sqrt{1 + 4 + 4}$."
      ],
      "explanation": "$\\sqrt{1^2 + (-2)^2 + 2^2} = \\sqrt{1 + 4 + 4} = \\sqrt{9} = 3$.",
      "wrongAnalysis": "$(-2)^2 = -4$ 로 부호를 틀리는 실수가 있습니다. 제곱하면 항상 양수입니다."
    },
    {
      "id": "1-5",
      "type": "choice",
      "difficulty": 3,
      "question": "$\\mathbf{u} = (1, 2, 3)$, $\\mathbf{v} = (4, 5, 6)$ 일 때 $2\\mathbf{u} - \\mathbf{v}$ 의 노름은?",
      "choices": [
        "$\\sqrt{5}$",
        "$3$",
        "$\\sqrt{2}$",
        "$\\sqrt{6}$"
      ],
      "answer": "$\\sqrt{5}$",
      "hints": [
        "$2\\mathbf{u} - \\mathbf{v} = (2-4, 4-5, 6-6)$ 를 계산하세요.",
        "$(-2, -1, 0)$ 의 노름을 구하세요."
      ],
      "explanation": "$2\\mathbf{u} = (2, 4, 6)$. $2\\mathbf{u} - \\mathbf{v} = (2-4, 4-5, 6-6) = (-2, -1, 0)$. $\\|(-2,-1,0)\\| = \\sqrt{4+1+0} = \\sqrt{5}$.",
      "wrongAnalysis": "스칼라곱을 먼저 하지 않고 바로 빼는 실수가 있습니다. 먼저 $2\\mathbf{u}$ 를 계산한 뒤 빼세요."
    },
    {
      "id": "1-2",
      "type": "number",
      "difficulty": 2,
      "question": "$\\mathbf{v} = (3, 4)$ 의 노름 $\\|\\mathbf{v}\\|$ 의 값은?",
      "answer": "5",
      "hints": [
        "$\\sqrt{v_1^2 + v_2^2}$.",
        "$\\sqrt{9 + 16}$."
      ],
      "explanation": "$\\sqrt{9 + 16} = \\sqrt{25} = 5$.",
      "wrongAnalysis": "성분을 그냥 더해 $7$ 이라고 답하는 실수가 흔합니다. 노름은 제곱합의 제곱근."
    },
    {
      "id": "1-3",
      "type": "text",
      "difficulty": 2,
      "question": "$\\mathbf{v} = (3, 4)$ 와 같은 방향의 단위벡터를 $(a,b)$ 형태로 적으시오. (분수 사용 가능, 예: (3/5,4/5))",
      "answer": "(3/5,4/5)",
      "hints": [
        "단위벡터 $=$ 자기 자신을 자신의 노름으로 나눈 것.",
        "노름 $= 5$."
      ],
      "explanation": "$\\dfrac{\\mathbf{v}}{\\|\\mathbf{v}\\|} = \\dfrac{(3,4)}{5} = \\left(\\dfrac{3}{5},\\ \\dfrac{4}{5}\\right)$.",
      "wrongAnalysis": "노름으로 나누는 것을 잊고 그냥 $(3,4)$ 를 답하는 실수가 흔합니다."
    }
  ],
  "summary": {
    "keyPoints": [
      "벡터는 크기와 방향을 함께 가지는 양",
      "성분별 합, 스칼라곱",
      "노름 $\\|\\mathbf{v}\\| = \\sqrt{\\sum v_i^2}$"
    ],
    "formulas": [
      "\\mathbf{u} + \\mathbf{v} = (u_i + v_i)_i",
      "k\\mathbf{v} = (k v_i)_i",
      "\\|\\mathbf{v}\\| = \\sqrt{v_1^2 + \\cdots + v_n^2}"
    ],
    "commonMistakes": [
      "단위벡터 만들 때 노름으로 나누지 않는 실수",
      "노름과 성분의 합을 혼동"
    ],
    "nextConnection": "두 벡터 사이의 '각도'나 '얼마나 같은 방향을 보는지'를 측정하려면 새로운 연산이 필요합니다. 다음 단원의 내적과 사영입니다."
  }
},
{
  "id": 2,
  "title": "내적과 사영",
  "category": "선형대수",
  "level": "기초",
  "question": "두 벡터가 '얼마나 같은 방향을 보는가'를 어떻게 숫자 하나로 잴 수 있을까?",
  "concept": {
    "intro": ":::definition[내적의 정의]\n내적은 두 벡터에서 스칼라(숫자) 하나를 만들어내는 연산입니다. 정의는 두 가지: 성분 표현 $\\mathbf{u}\\cdot\\mathbf{v} = \\sum u_i v_i$, 기하 표현 $\\mathbf{u}\\cdot\\mathbf{v} = \\|\\mathbf{u}\\|\\|\\mathbf{v}\\|\\cos\\theta$. 둘은 같은 값을 줍니다.\n:::\n\n:::theorem[직교 조건과 사영]\n내적이 $0$ 이면 두 벡터는 수직. 양수면 같은 방향, 음수면 반대 방향. 사영(projection)은 한 벡터의 그림자를 다른 벡터 위에 떨어뜨린 길이로, 그래디언트의 방향도함수가 곧 사영입니다.\n:::",
    "intuition": ":::note[직관]\n한 사람이 손전등을 들고 벽을 비추는 모습을 떠올려 보세요. 벽에 생기는 빛의 길이가 사영의 길이입니다. 두 벡터가 같은 방향을 보면 그림자가 길어지고(큰 양수), 수직이면 그림자가 사라지고($0$), 반대 방향이면 그림자가 음수로 깁니다.\n:::",
    "formula": "\\mathbf{u}\\cdot\\mathbf{v} = u_1 v_1 + u_2 v_2 + \\cdots + u_n v_n\n\\mathbf{u}\\cdot\\mathbf{v} = \\|\\mathbf{u}\\|\\,\\|\\mathbf{v}\\|\\cos\\theta\n\\mathrm{proj}_{\\mathbf{v}}\\,\\mathbf{u} = \\frac{\\mathbf{u}\\cdot\\mathbf{v}}{\\|\\mathbf{v}\\|^2}\\,\\mathbf{v}",
    "summary": ":::note[핵심 요약]\n• 내적 $=$ 성분곱의 합 $=$ 크기 곱 $\\times \\cos\\theta$\n• 수직 $\\Leftrightarrow$ 내적 $0$\n• 사영은 그림자 벡터\n:::",
    "visuals": [{
      "type": "geometry",
      "title": "벡터 사영 (projection)",
      "xRange": [-1, 6],
      "yRange": [-1, 4],
      "lines": [
        { "from": [0, 0], "to": [5, 0], "color": "#6366f1", "label": "a⃗" },
        { "from": [0, 0], "to": [3, 3], "color": "#ef4444", "label": "b⃗" },
        { "from": [0, 0], "to": [3, 0], "color": "#10b981", "label": "proj" },
        { "from": [3, 0], "to": [3, 3], "color": "#94a3b8", "dashed": true }
      ],
      "points": [
        { "x": 3, "y": 0, "label": "projₐb⃗", "color": "#10b981" }
      ],
      "annotations": [
        { "x": 1.2, "y": 0.5, "text": "θ", "color": "#f59e0b" },
        { "x": 4, "y": 2.5, "text": "a⃗·b⃗ = |a||b|cosθ", "color": "#334155" }
      ]
    }]
  },
  "examples": [
    {
      "title": "내적으로 각도 구하기",
      "problem": "$\\mathbf{u} = (1, 0),\\ \\mathbf{v} = (1, 1)$ 의 사잇각을 구하시오.",
      "steps": [
        "$\\mathbf{u}\\cdot\\mathbf{v} = 1\\cdot 1 + 0\\cdot 1 = 1$.",
        "$\\|\\mathbf{u}\\|=1,\\ \\|\\mathbf{v}\\|=\\sqrt{2}$.",
        "$\\cos\\theta = \\dfrac{1}{1\\cdot\\sqrt{2}} = \\dfrac{1}{\\sqrt{2}}$.",
        "$\\theta = 45^\\circ = \\dfrac{\\pi}{4}$."
      ],
      "answer": "$\\dfrac{\\pi}{4}\\ (45^\\circ)$",
      "lesson": "내적은 각도를 '계산 가능한' 양으로 만들어 줍니다. 두 정의의 일치가 이 단원의 핵심."
    },
    {
      "title": "[기본] 내적 계산",
      "problem": "$\\mathbf{u} = (3, -1, 2),\\ \\mathbf{v} = (1, 4, -2)$ 의 내적을 구하시오.",
      "steps": [
        "$\\mathbf{u} \\cdot \\mathbf{v} = 3 \\cdot 1 + (-1) \\cdot 4 + 2 \\cdot (-2)$.",
        "$= 3 - 4 - 4 = -5$."
      ],
      "answer": "$\\mathbf{u} \\cdot \\mathbf{v} = -5$",
      "lesson": "내적이 음수이면 두 벡터의 사잇각이 $90^\\circ$보다 크다는 뜻입니다."
    },
    {
      "title": "[응용] 사영 벡터 계산",
      "problem": "$\\mathbf{u} = (3, 4)$ 를 $\\mathbf{v} = (1, 0)$ 위에 사영한 벡터를 구하시오.",
      "steps": [
        "$\\mathbf{u} \\cdot \\mathbf{v} = 3 \\cdot 1 + 4 \\cdot 0 = 3$.",
        "$\\|\\mathbf{v}\\|^2 = 1^2 + 0^2 = 1$.",
        "$\\mathrm{proj}_{\\mathbf{v}}\\,\\mathbf{u} = \\dfrac{3}{1} \\cdot (1, 0) = (3, 0)$."
      ],
      "answer": "$\\mathrm{proj}_{\\mathbf{v}}\\,\\mathbf{u} = (3, 0)$",
      "lesson": "사영은 '그림자 벡터'입니다. $\\mathbf{v}$가 좌표축이면 해당 성분만 남기는 것과 같습니다."
    },
    {
      "title": "[응용] 수직 성분 분해",
      "problem": "$\\mathbf{u} = (2, 3)$ 을 $\\mathbf{v} = (1, 1)$ 에 대해 평행 성분과 수직 성분으로 분해하시오.",
      "steps": [
        "$\\mathrm{proj}_{\\mathbf{v}}\\,\\mathbf{u} = \\dfrac{\\mathbf{u} \\cdot \\mathbf{v}}{\\|\\mathbf{v}\\|^2} \\mathbf{v} = \\dfrac{2+3}{2}(1,1) = \\dfrac{5}{2}(1,1) = \\left(\\dfrac{5}{2},\\dfrac{5}{2}\\right)$.",
        "수직 성분: $\\mathbf{u} - \\mathrm{proj}_{\\mathbf{v}}\\,\\mathbf{u} = \\left(2 - \\dfrac{5}{2},\\ 3 - \\dfrac{5}{2}\\right) = \\left(-\\dfrac{1}{2},\\ \\dfrac{1}{2}\\right)$.",
        "검산: $\\left(-\\dfrac{1}{2},\\dfrac{1}{2}\\right) \\cdot (1,1) = -\\dfrac{1}{2} + \\dfrac{1}{2} = 0$. ✓"
      ],
      "answer": "평행 성분 $= \\left(\\dfrac{5}{2},\\dfrac{5}{2}\\right)$, 수직 성분 $= \\left(-\\dfrac{1}{2},\\dfrac{1}{2}\\right)$",
      "lesson": "모든 벡터는 주어진 방향의 평행 성분과 수직 성분으로 유일하게 분해됩니다. 수직 성분과 $\\mathbf{v}$의 내적이 $0$인지 반드시 검산하세요."
    },
    {
      "title": "[심화] 코시-슈바르츠 부등식 등호 조건",
      "problem": "$\\mathbf{u} = (2, 1),\\ \\mathbf{v} = (4, 2)$ 에 대해 $|\\mathbf{u}\\cdot\\mathbf{v}| = \\|\\mathbf{u}\\|\\|\\mathbf{v}\\|$ 가 성립하는지 확인하고, 이유를 설명하시오.",
      "steps": [
        "$\\mathbf{u}\\cdot\\mathbf{v} = 8 + 2 = 10$.",
        "$\\|\\mathbf{u}\\| = \\sqrt{4+1} = \\sqrt{5}$, $\\|\\mathbf{v}\\| = \\sqrt{16+4} = \\sqrt{20} = 2\\sqrt{5}$.",
        "$\\|\\mathbf{u}\\|\\|\\mathbf{v}\\| = \\sqrt{5} \\cdot 2\\sqrt{5} = 10$.",
        "$|10| = 10$. 등호 성립. ✓",
        "$\\mathbf{v} = 2\\mathbf{u}$ 이므로 일차종속(평행)하여 등호가 성립합니다."
      ],
      "answer": "등호 성립. $\\mathbf{v} = 2\\mathbf{u}$ (일차종속)",
      "lesson": "코시-슈바르츠 부등식에서 등호는 두 벡터가 일차종속(한쪽이 다른 쪽의 스칼라배)일 때 정확히 성립합니다."
    }
  ],
  "problems": [
    {
      "id": "2-1",
      "type": "number",
      "difficulty": 1,
      "question": "$\\mathbf{u} = (2, 3),\\ \\mathbf{v} = (4, -1)$ 의 내적 $\\mathbf{u}\\cdot\\mathbf{v}$ 의 값은?",
      "answer": "5",
      "hints": [
        "$\\sum u_i v_i$.",
        "$2\\cdot 4 + 3\\cdot(-1)$."
      ],
      "explanation": "내적은 같은 위치의 성분끼리 곱한 뒤 더합니다. 따라서 $(2,3)\\cdot(4,-1)=2\\cdot4+3\\cdot(-1)=8-3=5$입니다.",
      "wrongAnalysis": "성분을 곱한 결과를 다시 곱해 $(2\\cdot 4)\\cdot(3\\cdot -1)$ 식으로 곱셈을 누적하는 실수가 흔합니다. 내적은 곱의 합입니다."
    },
    {
      "id": "2-2",
      "type": "choice",
      "difficulty": 2,
      "question": "$\\mathbf{u}\\cdot\\mathbf{v} = 0$ 이고 두 벡터가 모두 $\\mathbf{0}$ 이 아니라면 두 벡터의 관계는?",
      "choices": [
        "평행",
        "수직",
        "같다",
        "반대 방향"
      ],
      "answer": "수직",
      "hints": [
        "$\\cos\\theta = 0$ 이 되는 각도는?",
        "$90^\\circ$."
      ],
      "explanation": "$\\mathbf{u}\\cdot\\mathbf{v} = \\|\\mathbf{u}\\|\\|\\mathbf{v}\\|\\cos\\theta = 0$, 두 벡터가 $\\mathbf{0}$ 이 아니므로 $\\cos\\theta = 0$, 즉 $\\theta = 90^\\circ$.",
      "wrongAnalysis": "내적 $0$ 을 '두 벡터가 같다'로 해석하는 실수가 있습니다. 같다면 내적은 $\\|\\mathbf{v}\\|^2 > 0$."
    },
    {
      "id": "2-3",
      "type": "number",
      "difficulty": 3,
      "question": "$\\mathbf{u} = (3, 4)$ 의 $\\mathbf{v} = (1, 0)$ 위로의 사영 벡터의 첫 성분은?",
      "answer": "3",
      "hints": [
        "$\\mathrm{proj}_{\\mathbf{v}}\\,\\mathbf{u} = \\dfrac{\\mathbf{u}\\cdot\\mathbf{v}}{\\|\\mathbf{v}\\|^2}\\mathbf{v}$.",
        "$\\mathbf{u}\\cdot\\mathbf{v} = 3,\\ \\|\\mathbf{v}\\|^2 = 1$.",
        "사영 벡터 $= 3\\cdot(1,0)$."
      ],
      "explanation": "$\\mathrm{proj} = 3\\cdot(1,0) = (3, 0)$. 첫 성분은 $3$.",
      "wrongAnalysis": "분모를 $\\|\\mathbf{v}\\|$ 로 두는 실수가 흔합니다. 사영 공식의 분모는 $\\|\\mathbf{v}\\|^2$."
    },
    {
      "id": "2-4",
      "type": "number",
      "difficulty": 1,
      "question": "$\\mathbf{u} = (1, 0, 2),\\ \\mathbf{v} = (3, -1, 1)$ 의 내적 $\\mathbf{u}\\cdot\\mathbf{v}$ 의 값은?",
      "answer": "5",
      "hints": [
        "$\\sum u_i v_i$ 를 각 성분별로 계산하세요.",
        "$1\\cdot 3 + 0\\cdot(-1) + 2\\cdot 1 = ?$"
      ],
      "explanation": "$1\\cdot 3 + 0\\cdot(-1) + 2\\cdot 1 = 3 + 0 + 2 = 5$.",
      "wrongAnalysis": "성분끼리 곱한 뒤 합을 구하지 않고, 벡터를 더한 뒤 곱하는 실수가 있습니다."
    },
    {
      "id": "2-5",
      "type": "choice",
      "difficulty": 2,
      "question": "$\\mathbf{u} = (1, 2),\\ \\mathbf{v} = (2, -1)$ 의 사잇각은?",
      "choices": [
        "$0^\\circ$",
        "$45^\\circ$",
        "$90^\\circ$",
        "$180^\\circ$"
      ],
      "answer": "$90^\\circ$",
      "hints": [
        "먼저 $\\mathbf{u}\\cdot\\mathbf{v}$ 를 계산하세요.",
        "$1\\cdot 2 + 2\\cdot(-1) = 0$."
      ],
      "explanation": "$\\mathbf{u}\\cdot\\mathbf{v} = 2 - 2 = 0$. 내적이 $0$이면 두 벡터는 수직이므로 사잇각은 $90^\\circ$.",
      "wrongAnalysis": "내적이 $0$일 때 평행으로 착각하는 실수가 있습니다. 내적 $0$은 수직을 의미합니다."
    }
  ],
  "summary": {
    "keyPoints": [
      "내적 $=$ 성분곱의 합 $=$ 크기 곱 $\\times \\cos\\theta$",
      "수직 $\\Leftrightarrow$ 내적 $0$",
      "사영 $=$ 한 벡터의 그림자"
    ],
    "formulas": [
      "\\mathbf{u}\\cdot\\mathbf{v} = \\sum u_i v_i = \\|\\mathbf{u}\\|\\,\\|\\mathbf{v}\\|\\cos\\theta",
      "\\mathrm{proj}_{\\mathbf{v}}\\,\\mathbf{u} = \\frac{\\mathbf{u}\\cdot\\mathbf{v}}{\\|\\mathbf{v}\\|^2}\\mathbf{v}"
    ],
    "commonMistakes": [
      "사영 공식 분모를 $\\|\\mathbf{v}\\|$ 로 두는 실수",
      "내적 $0$ 을 평행으로 해석하는 실수"
    ],
    "nextConnection": "벡터 여러 개를 한꺼번에 다루려면 새로운 표기와 연산이 필요합니다. 다음 단원에서 그 도구인 행렬을 소개합니다."
  }
},
{
  "id": 3,
  "title": "행렬과 행렬 연산",
  "category": "선형대수",
  "level": "중급",
  "question": "여러 벡터의 정보를 한꺼번에 표·다루는 도구는 무엇일까?",
  "concept": {
    "intro": ":::definition[행렬의 정의]\n행렬은 수를 직사각형 모양으로 배열한 표입니다. $m \\times n$ 행렬은 $m$개의 행과 $n$개의 열을 가집니다. 같은 모양끼리는 성분별로 더할 수 있고, 스칼라곱도 성분별로 합니다.\n:::\n\n:::note[행렬 곱셈]\n행렬 곱셈은 '왼쪽 행렬의 행 $\\cdot$ 오른쪽 행렬의 열' 의 내적들로 만들어집니다. 그래서 곱이 가능한 조건은 $(m \\times n)\\,(n \\times p)$ 처럼 안쪽 차원이 맞아야 합니다.\n:::\n\n:::warning[주의]\n행렬 곱은 일반적으로 교환법칙이 성립하지 않습니다 ($AB \\ne BA$).\n:::",
    "intuition": ":::note[직관]\n행렬은 데이터 표라고 생각해도 좋고, '여러 벡터를 한 번에 변환하는 기계' 라고 생각해도 좋습니다. 다음 단원에서 후자의 해석을 자세히 다룹니다.\n:::",
    "formula": "(A + B)_{ij} = A_{ij} + B_{ij}\n(kA)_{ij} = k A_{ij}\n(AB)_{ij} = \\sum_{k} A_{ik}\\,B_{kj}\n\\text{곱 가능 조건:}\\ (m\\times n)(n\\times p) = (m\\times p)",
    "summary": ":::note[핵심 요약]\n• 행렬 $=$ 수의 직사각형 배열\n• 합·스칼라곱은 성분별\n• 곱은 행과 열의 내적들\n:::"
  },
  "examples": [
    {
      "title": "$2 \\times 2$ 행렬 곱",
      "problem": "$A = \\begin{pmatrix}1 & 2 \\\\ 3 & 4\\end{pmatrix},\\ B = \\begin{pmatrix}0 & 1 \\\\ 1 & 0\\end{pmatrix}$ 일 때 $AB$ 를 구하시오.",
      "steps": [
        "$(AB)_{11} = 1\\cdot 0 + 2\\cdot 1 = 2$.",
        "$(AB)_{12} = 1\\cdot 1 + 2\\cdot 0 = 1$.",
        "$(AB)_{21} = 3\\cdot 0 + 4\\cdot 1 = 4$.",
        "$(AB)_{22} = 3\\cdot 1 + 4\\cdot 0 = 3$."
      ],
      "answer": "$AB = \\begin{pmatrix}2 & 1 \\\\ 4 & 3\\end{pmatrix}$",
      "lesson": "각 성분을 '왼쪽 행 $\\cdot$ 오른쪽 열' 의 내적으로 차분히 채우는 습관이 중요합니다. 한꺼번에 머릿속에서 계산하지 마세요."
    },
    {
      "title": "[기본] 행렬 덧셈과 스칼라곱",
      "problem": "$A = \\begin{pmatrix}1 & 3 \\\\ 2 & 4\\end{pmatrix},\\ B = \\begin{pmatrix}5 & 1 \\\\ 0 & 2\\end{pmatrix}$ 일 때 $2A - B$ 를 구하시오.",
      "steps": [
        "$2A = \\begin{pmatrix}2 & 6 \\\\ 4 & 8\\end{pmatrix}$.",
        "$2A - B = \\begin{pmatrix}2-5 & 6-1 \\\\ 4-0 & 8-2\\end{pmatrix} = \\begin{pmatrix}-3 & 5 \\\\ 4 & 6\\end{pmatrix}$."
      ],
      "answer": "$2A - B = \\begin{pmatrix}-3 & 5 \\\\ 4 & 6\\end{pmatrix}$",
      "lesson": "행렬의 덧셈과 스칼라곱은 벡터와 마찬가지로 성분별 연산입니다."
    },
    {
      "title": "[응용] 행렬 곱의 비교환성",
      "problem": "$A = \\begin{pmatrix}1 & 2 \\\\ 0 & 1\\end{pmatrix},\\ B = \\begin{pmatrix}1 & 0 \\\\ 1 & 1\\end{pmatrix}$ 일 때 $AB$ 와 $BA$ 를 각각 구하고 같은지 확인하시오.",
      "steps": [
        "$AB = \\begin{pmatrix}1\\cdot1+2\\cdot1 & 1\\cdot0+2\\cdot1 \\\\ 0\\cdot1+1\\cdot1 & 0\\cdot0+1\\cdot1\\end{pmatrix} = \\begin{pmatrix}3 & 2 \\\\ 1 & 1\\end{pmatrix}$.",
        "$BA = \\begin{pmatrix}1\\cdot1+0\\cdot0 & 1\\cdot2+0\\cdot1 \\\\ 1\\cdot1+1\\cdot0 & 1\\cdot2+1\\cdot1\\end{pmatrix} = \\begin{pmatrix}1 & 2 \\\\ 1 & 3\\end{pmatrix}$.",
        "$AB \\neq BA$."
      ],
      "answer": "$AB = \\begin{pmatrix}3 & 2 \\\\ 1 & 1\\end{pmatrix},\\ BA = \\begin{pmatrix}1 & 2 \\\\ 1 & 3\\end{pmatrix},\\ AB \\neq BA$",
      "lesson": "행렬 곱은 일반적으로 교환법칙이 성립하지 않습니다. $AB \\neq BA$가 기본이고, 교환되는 경우가 특수한 상황입니다."
    },
    {
      "title": "[응용] 전치행렬의 성질",
      "problem": "$A = \\begin{pmatrix}1 & 2 \\\\ 3 & 4\\end{pmatrix}$ 일 때 $(A^T A)$ 가 대칭행렬임을 보이시오.",
      "steps": [
        "$A^T = \\begin{pmatrix}1 & 3 \\\\ 2 & 4\\end{pmatrix}$.",
        "$A^T A = \\begin{pmatrix}1\\cdot1+3\\cdot3 & 1\\cdot2+3\\cdot4 \\\\ 2\\cdot1+4\\cdot3 & 2\\cdot2+4\\cdot4\\end{pmatrix} = \\begin{pmatrix}10 & 14 \\\\ 14 & 20\\end{pmatrix}$.",
        "$(A^T A)^T = A^T (A^T)^T = A^T A$이므로 대칭행렬입니다. ✓"
      ],
      "answer": "$A^T A = \\begin{pmatrix}10 & 14 \\\\ 14 & 20\\end{pmatrix}$ (대칭)",
      "lesson": "$A^T A$는 항상 대칭행렬입니다. $(A^T A)^T = A^T A$가 자동으로 성립하기 때문입니다. 이 성질은 최소제곱법의 정규방정식에서 핵심적으로 사용됩니다."
    },
    {
      "title": "[심화] 행렬 거듭제곱의 패턴",
      "problem": "$A = \\begin{pmatrix}0 & 1 \\\\ -1 & 0\\end{pmatrix}$ 일 때 $A^4$ 를 구하시오.",
      "steps": [
        "$A^2 = \\begin{pmatrix}0\\cdot0+1\\cdot(-1) & 0\\cdot1+1\\cdot0 \\\\ -1\\cdot0+0\\cdot(-1) & -1\\cdot1+0\\cdot0\\end{pmatrix} = \\begin{pmatrix}-1 & 0 \\\\ 0 & -1\\end{pmatrix} = -I$.",
        "$A^4 = (A^2)^2 = (-I)^2 = I = \\begin{pmatrix}1 & 0 \\\\ 0 & 1\\end{pmatrix}$."
      ],
      "answer": "$A^4 = I$",
      "lesson": "이 행렬은 $90^\\circ$ 회전 행렬이므로 $4$번 적용하면 $360^\\circ$, 즉 항등변환으로 돌아옵니다. 기하학적 해석이 계산을 간소화합니다."
    }
  ],
  "problems": [
    {
      "id": "3-1",
      "type": "text",
      "difficulty": 1,
      "question": "$A = \\begin{pmatrix}1 & 2 \\\\ 3 & 4\\end{pmatrix}$ 의 $(2,1)$ 성분 $A_{21}$ 의 값은?",
      "answer": "3",
      "hints": [
        "$A_{ij}$ 는 $i$ 번째 행, $j$ 번째 열.",
        "$(2,1) = $ 2행 1열."
      ],
      "explanation": "$2$ 행의 $1$ 열 성분이므로 $3$.",
      "wrongAnalysis": "$(i,j)$ 를 $(j,i)$ 로 거꾸로 읽는 실수가 흔합니다. 행이 먼저, 열이 나중."
    },
    {
      "id": "3-2",
      "type": "choice",
      "difficulty": 2,
      "question": "$3 \\times 4$ 행렬과 $4 \\times 2$ 행렬을 곱한 결과의 크기는?",
      "choices": [
        "$3 \\times 2$",
        "$4 \\times 4$",
        "$3 \\times 4$",
        "곱할 수 없음"
      ],
      "answer": "$3 \\times 2$",
      "hints": [
        "곱 가능 조건: 안쪽 차원 일치.",
        "결과: 바깥쪽 두 수."
      ],
      "explanation": "$(3 \\times 4)(4 \\times 2)$ 에서 안쪽 $4$ 가 같으므로 곱 가능, 결과는 $3 \\times 2$.",
      "wrongAnalysis": "안쪽 차원과 바깥쪽 차원을 헷갈리는 실수가 흔합니다. 항상 $(m\\times n)(n\\times p) \\to m\\times p$."
    },
    {
      "id": "3-3",
      "type": "number",
      "difficulty": 3,
      "question": "$A = \\begin{pmatrix}1 & 2 \\\\ 3 & 4\\end{pmatrix},\\ B = \\begin{pmatrix}5 \\\\ 6\\end{pmatrix}$ 일 때 $AB$ 의 첫 성분 $(AB)_{11}$ 의 값은?",
      "answer": "17",
      "hints": [
        "$(AB)_{11} = $ $A$ 의 $1$ 행 $\\cdot$ $B$ 의 $1$ 열.",
        "$1\\cdot 5 + 2\\cdot 6$."
      ],
      "explanation": "$1\\cdot 5 + 2\\cdot 6 = 5 + 12 = 17$.",
      "wrongAnalysis": "$A$ 의 행 대신 열을 가져오는 실수가 흔합니다. 행렬 곱의 '왼쪽은 행, 오른쪽은 열'을 잊지 마세요."
    },
    {
      "id": "3-4",
      "type": "number",
      "difficulty": 1,
      "question": "$A = \\begin{pmatrix}2 & 0 \\\\ 0 & 5\\end{pmatrix}$ 와 $B = \\begin{pmatrix}1 & 3 \\\\ 4 & 2\\end{pmatrix}$ 의 합 $A + B$ 의 $(1,2)$ 성분은?",
      "answer": "3",
      "hints": [
        "행렬의 합은 같은 위치의 성분끼리 더합니다.",
        "$(1,2)$ 위치: $0 + 3 = ?$"
      ],
      "explanation": "$(A + B)_{12} = A_{12} + B_{12} = 0 + 3 = 3$. 행렬 합은 성분별 연산입니다.",
      "wrongAnalysis": "$(1,2)$ 를 2행 1열로 읽는 실수가 있습니다. $A_{ij}$ 에서 $i$ 가 행, $j$ 가 열입니다."
    },
    {
      "id": "3-5",
      "type": "choice",
      "difficulty": 2,
      "question": "$A$ 가 $2 \\times 3$ 행렬이고 $B$ 가 $3 \\times 3$ 행렬일 때, $AB$ 와 $BA$ 에 대한 설명으로 옳은 것은?",
      "choices": [
        "$AB$ 와 $BA$ 모두 계산 가능하다",
        "$AB$ 만 계산 가능하다",
        "$BA$ 만 계산 가능하다",
        "둘 다 계산 불가능하다"
      ],
      "answer": "$AB$ 만 계산 가능하다",
      "hints": [
        "$AB$: $(2 \\times 3)(3 \\times 3)$ — 안쪽 차원이 $3$으로 같으므로 가능.",
        "$BA$: $(3 \\times 3)(2 \\times 3)$ — 안쪽 차원이 $3$과 $2$로 다르므로 불가능."
      ],
      "explanation": "$AB$: $(2 \\times 3)(3 \\times 3) \\to 2 \\times 3$ 으로 가능. $BA$: $(3 \\times 3)(2 \\times 3)$ 에서 안쪽 $3 \\ne 2$ 이므로 불가능.",
      "wrongAnalysis": "행렬 곱이 항상 교환 가능하다고 가정하여 둘 다 가능하다고 답하는 실수가 흔합니다."
    }
  ],
  "summary": {
    "keyPoints": [
      "$m \\times n$ 행렬의 합·스칼라곱은 성분별",
      "곱: '왼쪽 행 $\\cdot$ 오른쪽 열' 의 내적들",
      "곱은 일반적으로 비가환 ($AB \\ne BA$)"
    ],
    "formulas": [
      "(AB)_{ij} = \\sum_{k} A_{ik}\\,B_{kj}",
      "(m\\times n)(n\\times p) = (m\\times p)"
    ],
    "commonMistakes": [
      "곱 가능 조건을 확인하지 않는 실수",
      "$AB = BA$ 로 가정하는 실수"
    ],
    "nextConnection": "행렬을 '벡터를 변환하는 기계'로 보면 새로운 세계가 열립니다. 다음 단원에서 선형변환과 행렬식을 정리합니다."
  }
},
{
  "id": 4,
  "title": "선형변환과 행렬식",
  "category": "선형대수",
  "level": "고급",
  "question": "행렬은 벡터를 어떻게 '변환' 시킬까? 그리고 그 변환이 면적·부피를 얼마나 바꿀까?",
  "concept": {
    "intro": ":::definition[가역행렬과 역행렬]\n정사각행렬 $A$에 대해 $AB = BA = I$(단위행렬)를 만족하는 행렬 $B$가 존재하면, $A$를 **가역(invertible)**이라 하고 $B$를 $A$의 **역행렬** $A^{-1}$이라 합니다.\n:::\n\n$n \\times n$ 행렬 $A$ 는 $\\mathbf{x} \\mapsto A\\mathbf{x}$ 라는 선형변환을 정의합니다. 선형이라는 말은 $A(\\mathbf{x} + \\mathbf{y}) = A\\mathbf{x} + A\\mathbf{y}$, $A(k\\mathbf{x}) = kA\\mathbf{x}$ 가 성립한다는 뜻입니다.\n\n행렬식 $\\det A$ 는 이 변환이 면적(2차원)이나 부피(3차원)를 몇 배로 늘이는지 알려주는 스칼라입니다. $\\det A = 0$ 이면 변환이 차원을 줄여 버리고(역행렬 없음), $\\det A > 0$ 이면 방향을 보존, $\\det A < 0$ 이면 뒤집습니다.",
    "intuition": ":::note[직관]\n행렬 $A$ 는 단위 정사각형을 평행사변형으로 변환하는 도장 찍기 같습니다. 그 평행사변형의 면적이 곧 $|\\det A|$. 만약 $\\det A = 0$ 이면 평행사변형이 납작해져 선분이 됩니다.\n:::",
    "formula": "A: \\mathbb{R}^n \\to \\mathbb{R}^n,\\ \\mathbf{x} \\mapsto A\\mathbf{x}\n\\det \\begin{pmatrix}a & b \\\\ c & d\\end{pmatrix} = ad - bc\n\\det(AB) = \\det A \\cdot \\det B\nA^{-1}\\ \\text{존재}\\ \\Leftrightarrow\\ \\det A \\ne 0",
    "summary": ":::note[핵심 요약]\n• 행렬 $=$ 선형변환\n• 행렬식 $=$ 부피 확대율 (부호 포함)\n• $\\det A = 0$ $\\Leftrightarrow$ 역행렬 없음 $\\Leftrightarrow$ 변환이 차원을 줄임\n:::"
  },
  "examples": [
    {
      "title": "$2\\times 2$ 행렬식과 역행렬",
      "problem": "$A = \\begin{pmatrix}2 & 1 \\\\ 3 & 4\\end{pmatrix}$ 의 행렬식과 역행렬을 구하시오.",
      "steps": [
        "$\\det A = 2\\cdot 4 - 1\\cdot 3 = 5$.",
        "$\\det A \\ne 0$ 이므로 역행렬 존재.",
        "$A^{-1} = \\dfrac{1}{5}\\begin{pmatrix}4 & -1 \\\\ -3 & 2\\end{pmatrix}$."
      ],
      "answer": "$\\det A = 5,\\ A^{-1} = \\dfrac{1}{5}\\begin{pmatrix}4 & -1 \\\\ -3 & 2\\end{pmatrix}$",
      "lesson": "$2\\times 2$ 역행렬은 '대각 성분 교환, 비대각에 마이너스, 행렬식으로 나누기' 라는 공식만 외우면 됩니다."
    },
    {
      "title": "[기본] 행렬식의 기본 계산",
      "problem": "$A = \\begin{pmatrix}3 & 5 \\\\ 1 & 2\\end{pmatrix}$ 의 행렬식을 구하시오.",
      "steps": [
        "$\\det A = 3 \\cdot 2 - 5 \\cdot 1 = 6 - 5 = 1$."
      ],
      "answer": "$\\det A = 1$",
      "lesson": "$2 \\times 2$ 행렬식은 $ad - bc$입니다. 행렬식이 $0$이 아니면 역행렬이 존재합니다."
    },
    {
      "title": "[응용] 행렬식의 넓이 해석",
      "problem": "두 벡터 $\\mathbf{u} = (2, 1),\\ \\mathbf{v} = (1, 3)$ 이 만드는 평행사변형의 넓이를 구하시오.",
      "steps": [
        "넓이 $= |\\det \\begin{pmatrix}2 & 1 \\\\ 1 & 3\\end{pmatrix}|$.",
        "$\\det = 2 \\cdot 3 - 1 \\cdot 1 = 5$.",
        "넓이 $= |5| = 5$."
      ],
      "answer": "넓이 $= 5$",
      "lesson": "$2 \\times 2$ 행렬식의 절댓값은 두 열벡터(또는 행벡터)가 만드는 평행사변형의 넓이입니다. 부호는 방향(시계/반시계)을 나타냅니다."
    },
    {
      "title": "[응용] 역행렬을 이용한 방정식 풀기",
      "problem": "$A = \\begin{pmatrix}2 & 3 \\\\ 1 & 2\\end{pmatrix}$ 이고 $A\\mathbf{x} = \\begin{pmatrix}5 \\\\ 3\\end{pmatrix}$ 일 때 $\\mathbf{x}$ 를 구하시오.",
      "steps": [
        "$\\det A = 4 - 3 = 1$.",
        "$A^{-1} = \\begin{pmatrix}2 & -3 \\\\ -1 & 2\\end{pmatrix}$.",
        "$\\mathbf{x} = A^{-1}\\begin{pmatrix}5 \\\\ 3\\end{pmatrix} = \\begin{pmatrix}2 \\cdot 5 + (-3) \\cdot 3 \\\\ (-1) \\cdot 5 + 2 \\cdot 3\\end{pmatrix} = \\begin{pmatrix}1 \\\\ 1\\end{pmatrix}$."
      ],
      "answer": "$\\mathbf{x} = \\begin{pmatrix}1 \\\\ 1\\end{pmatrix}$",
      "lesson": "역행렬이 존재하면 $\\mathbf{x} = A^{-1}\\mathbf{b}$ 로 유일한 해를 바로 구할 수 있습니다."
    },
    {
      "title": "[심화] 행렬식의 곱 성질",
      "problem": "$A = \\begin{pmatrix}2 & 1 \\\\ 0 & 3\\end{pmatrix},\\ B = \\begin{pmatrix}1 & 4 \\\\ 0 & 2\\end{pmatrix}$ 일 때 $\\det(AB)$ 를 두 가지 방법으로 구하시오.",
      "steps": [
        "방법 1: 직접 계산. $AB = \\begin{pmatrix}2 & 10 \\\\ 0 & 6\\end{pmatrix}$. $\\det(AB) = 12 - 0 = 12$.",
        "방법 2: $\\det(AB) = \\det A \\cdot \\det B = (6 - 0)(2 - 0) = 6 \\cdot 2 = 12$.",
        "두 방법의 결과가 일치합니다. ✓"
      ],
      "answer": "$\\det(AB) = 12$",
      "lesson": "행렬식의 곱 성질 $\\det(AB) = \\det A \\cdot \\det B$ 는 선형대수에서 가장 중요한 성질 중 하나입니다. 곱을 먼저 계산하지 않아도 행렬식을 구할 수 있습니다."
    }
  ],
  "problems": [
    {
      "id": "4-1",
      "type": "number",
      "difficulty": 1,
      "question": "$\\det \\begin{pmatrix}3 & 2 \\\\ 1 & 4\\end{pmatrix}$ 의 값은?",
      "answer": "10",
      "hints": [
        "$ad - bc$.",
        "$3\\cdot 4 - 2\\cdot 1$."
      ],
      "explanation": "$2\\times2$ 행렬의 행렬식은 $ad-bc$입니다. 여기서는 $3\\cdot4-2\\cdot1=12-2=10$입니다.",
      "wrongAnalysis": "$ad+bc$로 더하거나 대각선 곱의 순서를 바꾸는 실수가 흔합니다. $2\\times2$ 행렬식은 항상 $ad-bc$입니다."
    },
    {
      "id": "4-2",
      "type": "choice",
      "difficulty": 2,
      "question": "$\\det A = 0$ 인 $n \\times n$ 행렬 $A$ 에 대한 설명으로 옳은 것은?",
      "choices": [
        "$A$ 는 단위행렬이다.",
        "$A$ 의 역행렬이 존재한다.",
        "$A\\mathbf{x} = \\mathbf{0}$ 의 비자명한 해가 존재한다.",
        "$A$ 의 모든 성분이 $0$ 이다."
      ],
      "answer": "$A\\mathbf{x} = \\mathbf{0}$ 의 비자명한 해가 존재한다.",
      "hints": [
        "$\\det A = 0$ $\\Leftrightarrow$ 변환이 차원을 줄임.",
        "차원이 줄면 $\\mathbf{0}$ 으로 가는 비자명 $\\mathbf{x}$ 존재."
      ],
      "explanation": "$\\det A = 0$ 은 변환이 단사가 아니라는 뜻이므로 $\\mathbf{0}$ 이 아닌 $\\mathbf{x}$ 가 $A\\mathbf{x} = \\mathbf{0}$ 의 해가 될 수 있습니다 (커널 비자명).",
      "wrongAnalysis": "행렬식 $0$ 을 '$A$ 가 영행렬' 로 단정하는 실수가 흔합니다. 두 개념은 다릅니다."
    },
    {
      "id": "4-3",
      "type": "number",
      "difficulty": 3,
      "question": "$A = \\begin{pmatrix}2 & 0 \\\\ 0 & 3\\end{pmatrix}$ 가 단위 정사각형(면적 $1$)을 변환했을 때, 결과 도형의 면적은?",
      "answer": "6",
      "hints": [
        "면적 확대율 $= |\\det A|$.",
        "$\\det A = 2\\cdot 3 = 6$."
      ],
      "explanation": "$|\\det A| = 6$ 이므로 면적이 $6$ 배가 되어 새 면적은 $6$.",
      "wrongAnalysis": "행렬식과 행렬 성분의 합·곱을 헷갈리는 실수가 흔합니다. $2\\times 2$ 에서는 $ad - bc$."
    },
    {
      "id": "4-4",
      "type": "number",
      "difficulty": 1,
      "question": "$A = \\begin{pmatrix}5 & 3 \\\\ 2 & 4\\end{pmatrix}$ 의 행렬식 $\\det A$ 의 값은?",
      "answer": "14",
      "hints": [
        "$\\det = ad - bc$.",
        "$5 \\cdot 4 - 3 \\cdot 2$."
      ],
      "explanation": "$\\det A = 5 \\cdot 4 - 3 \\cdot 2 = 20 - 6 = 14$.",
      "wrongAnalysis": "$ad + bc = 26$ 으로 계산하는 실수가 흔합니다. 행렬식은 반드시 빼기입니다."
    },
    {
      "id": "4-5",
      "type": "choice",
      "difficulty": 2,
      "question": "$\\det(AB) = 12$ 이고 $\\det B = 3$ 일 때 $\\det A$ 는?",
      "choices": [
        "$4$",
        "$9$",
        "$36$",
        "$15$"
      ],
      "answer": "$4$",
      "hints": [
        "$\\det(AB) = \\det A \\cdot \\det B$ 입니다.",
        "$\\det A \\cdot 3 = 12$."
      ],
      "explanation": "$\\det(AB) = \\det A \\cdot \\det B$ 이므로 $\\det A = \\frac{12}{3} = 4$.",
      "wrongAnalysis": "$\\det(AB) = \\det A + \\det B$ 로 착각하여 $12 - 3 = 9$ 라고 답하는 실수가 있습니다. 행렬식은 곱의 곱입니다."
    }
  ],
  "summary": {
    "keyPoints": [
      "행렬 $=$ 선형변환",
      "$\\det A = $ 면적/부피 변화율 (부호 포함)",
      "$\\det A \\ne 0$ $\\Leftrightarrow$ 역행렬 존재"
    ],
    "formulas": [
      "\\det \\begin{pmatrix}a & b \\\\ c & d\\end{pmatrix} = ad - bc",
      "A^{-1} = \\frac{1}{\\det A}\\begin{pmatrix}d & -b \\\\ -c & a\\end{pmatrix}\\ (2\\times 2)",
      "\\det(AB) = \\det A \\cdot \\det B"
    ],
    "commonMistakes": [
      "행렬식 부호 실수 ($+$ 와 $-$ 혼동)",
      "$\\det A = 0$ 을 '영행렬'로 잘못 해석"
    ],
    "nextConnection": "변환 중에는 어떤 벡터가 방향을 그대로 유지한 채 크기만 바뀌는 경우가 있습니다. 그 '특별한 벡터'와 '특별한 비율' 이 다음 단원의 고유벡터·고윳값입니다."
  }
},
{
  "id": 5,
  "title": "고윳값과 고유벡터",
  "category": "선형대수",
  "level": "고급",
  "question": "선형변환 후에도 '방향이 그대로'인 벡터가 있을까? 있다면 크기는 얼마나 변할까?",
  "concept": {
    "intro": ":::definition[개념 정의]\n행렬 $A$ 에 대해 $A\\mathbf{v} = \\lambda \\mathbf{v}$ 를 만족하는 $\\mathbf{0}$ 이 아닌 벡터 $\\mathbf{v}$ 를 고유벡터, 그때의 스칼라 $\\lambda$ 를 고윳값이라고 합니다.\n:::\n\n:::note[참고]\n고윳값을 구하는 핵심은 직전 단원의 행렬식입니다. $A\\mathbf{v} = \\lambda\\mathbf{v}$ 를 옮기면 $(A - \\lambda I)\\mathbf{v} = \\mathbf{0}$ 이 되는데, 이 식이 $\\mathbf{v} \\ne \\mathbf{0}$ 인 해를 가지려면 단원 28에서 본 대로 변환 $A - \\lambda I$ 가 차원을 줄여야, 즉 $\\det(A - \\lambda I) = 0$ 이어야 합니다.\n:::\n\n:::note[참고]\n그래서 계산은 두 단계: ① 특성방정식 $\\det(A - \\lambda I) = 0$ 을 풀어 고윳값을 구하고, ② 각 $\\lambda$ 에 대해 $(A - \\lambda I)\\mathbf{v} = \\mathbf{0}$ 의 비자명 해로 고유벡터를 구합니다.\n:::\n\n:::note[참고]\n고윳값·고유벡터는 미분방정식 시스템, 주성분 분석, 안정성 해석 등 응용수학 전반의 중심 도구입니다.\n:::",
    "intuition": ":::note[직관]\n행렬 변환은 보통 벡터의 방향과 크기를 동시에 바꿉니다. 그러나 어떤 특별한 방향들은 '방향은 그대로 둔 채 크기만' 바뀌어요. 그 방향이 고유벡터, 그때의 배율이 고윳값입니다. 마치 회전 + 늘림 변환에서도 '늘림 축' 은 회전하지 않는 것과 같죠.\n:::",
    "formula": "A\\mathbf{v} = \\lambda \\mathbf{v},\\quad \\mathbf{v} \\ne \\mathbf{0}\n\\det(A - \\lambda I) = 0\\ \\text{(특성방정식)}\n(A - \\lambda I)\\mathbf{v} = \\mathbf{0}\\ \\text{로 고유벡터}",
    "summary": ":::note[핵심 요약]\n• 고유벡터: 방향 유지, 크기만 변하는 벡터\n• 고윳값: 그 크기 배율\n• 특성방정식 $\\det(A - \\lambda I) = 0$\n:::",
    "visuals": [{
      "type": "geometry",
      "title": "고유벡터: 변환해도 방향 불변",
      "xRange": [-4, 4],
      "yRange": [-4, 4],
      "lines": [
        { "from": [0, 0], "to": [1, 1], "color": "#6366f1", "label": "v⃗" },
        { "from": [0, 0], "to": [2, 2], "color": "#ef4444", "label": "Av⃗ = λv⃗" },
        { "from": [0, 0], "to": [1, -0.5], "color": "#10b981", "label": "일반 벡터 w⃗" },
        { "from": [0, 0], "to": [2.5, 1], "color": "#f59e0b", "label": "Aw⃗ (방향 변함)" }
      ],
      "annotations": [
        { "x": -3, "y": 3, "text": "고유벡터는 방향 보존", "color": "#334155" },
        { "x": -3, "y": 2.3, "text": "고윳값 λ 배 늘어남", "color": "#ef4444" }
      ]
    }]
  },
  "examples": [
    {
      "title": "$2 \\times 2$ 고윳값·고유벡터",
      "problem": "$A = \\begin{pmatrix}2 & 0 \\\\ 0 & 3\\end{pmatrix}$ 의 고윳값과 고유벡터를 구하시오.",
      "steps": [
        "$\\det(A - \\lambda I) = (2-\\lambda)(3-\\lambda) = 0$.",
        "$\\lambda_1 = 2,\\ \\lambda_2 = 3$.",
        "$\\lambda_1=2$: $(A - 2I)\\mathbf{v} = \\mathbf{0}$, $\\mathbf{v}_1 = (1,0)$.",
        "$\\lambda_2=3$: 마찬가지로 $\\mathbf{v}_2 = (0,1)$."
      ],
      "answer": "$\\lambda_1 = 2,\\ \\mathbf{v}_1 = (1,0);\\ \\lambda_2 = 3,\\ \\mathbf{v}_2 = (0,1)$",
      "lesson": "대각행렬의 고윳값은 대각 성분 그 자체이고, 고유벡터는 표준 기저입니다. 가장 단순한 형태로 이해를 시작하기 좋습니다."
    },
    {
      "title": "[기본] 고윳값 구하기",
      "problem": "$A = \\begin{pmatrix}4 & 0 \\\\ 0 & 1\\end{pmatrix}$ 의 고윳값을 구하시오.",
      "steps": [
        "$\\det(A - \\lambda I) = (4 - \\lambda)(1 - \\lambda) = 0$.",
        "$\\lambda_1 = 4,\\ \\lambda_2 = 1$."
      ],
      "answer": "$\\lambda_1 = 4,\\ \\lambda_2 = 1$",
      "lesson": "대각행렬의 고윳값은 대각 성분을 바로 읽으면 됩니다. 특성다항식을 풀지 않아도 됩니다."
    },
    {
      "title": "[응용] 삼각행렬의 고윳값과 고유벡터",
      "problem": "$A = \\begin{pmatrix}3 & 1 \\\\ 0 & 5\\end{pmatrix}$ 의 고윳값과 고유벡터를 구하시오.",
      "steps": [
        "삼각행렬이므로 고윳값은 대각 성분: $\\lambda_1 = 3,\\ \\lambda_2 = 5$.",
        "$\\lambda_1 = 3$: $(A - 3I)\\mathbf{v} = \\begin{pmatrix}0 & 1 \\\\ 0 & 2\\end{pmatrix}\\mathbf{v} = \\mathbf{0}$. $v_2 = 0$이므로 $\\mathbf{v}_1 = (1, 0)$.",
        "$\\lambda_2 = 5$: $(A - 5I)\\mathbf{v} = \\begin{pmatrix}-2 & 1 \\\\ 0 & 0\\end{pmatrix}\\mathbf{v} = \\mathbf{0}$. $v_1 = \\dfrac{1}{2}v_2$이므로 $\\mathbf{v}_2 = (1, 2)$."
      ],
      "answer": "$\\lambda_1 = 3,\\ \\mathbf{v}_1 = (1,0);\\ \\lambda_2 = 5,\\ \\mathbf{v}_2 = (1,2)$",
      "lesson": "삼각행렬의 고윳값은 대각 성분으로 바로 보이지만, 고유벡터는 $(A - \\lambda I)\\mathbf{v} = \\mathbf{0}$을 풀어야 합니다."
    },
    {
      "title": "[응용] 고윳값의 합과 곱",
      "problem": "$A = \\begin{pmatrix}5 & 2 \\\\ 2 & 2\\end{pmatrix}$ 의 고윳값의 합과 곱을 행렬의 정보만으로 구하시오.",
      "steps": [
        "고윳값의 합 $= \\mathrm{tr}(A) = 5 + 2 = 7$.",
        "고윳값의 곱 $= \\det(A) = 5 \\cdot 2 - 2 \\cdot 2 = 6$.",
        "검산: 특성다항식 $\\lambda^2 - 7\\lambda + 6 = (\\lambda - 1)(\\lambda - 6)$. 합 $= 7$, 곱 $= 6$. ✓"
      ],
      "answer": "합 $= 7$, 곱 $= 6$",
      "lesson": "고윳값의 합은 대각합(trace), 곱은 행렬식(determinant)과 같습니다. 특성다항식을 풀지 않아도 이 정보를 알 수 있습니다."
    },
    {
      "title": "[심화] 고윳값이 복소수인 경우",
      "problem": "$A = \\begin{pmatrix}0 & -1 \\\\ 1 & 0\\end{pmatrix}$ 의 고윳값을 구하시오.",
      "steps": [
        "$\\det(A - \\lambda I) = (0-\\lambda)(0-\\lambda) - (-1)(1) = \\lambda^2 + 1 = 0$.",
        "$\\lambda^2 = -1$.",
        "$\\lambda_1 = i,\\ \\lambda_2 = -i$ ($i$ 는 허수 단위)."
      ],
      "answer": "$\\lambda_1 = i,\\ \\lambda_2 = -i$",
      "lesson": "실수 행렬도 복소 고윳값을 가질 수 있습니다. 이때 고윳값은 항상 켤레 복소수 쌍으로 나타납니다. 이 행렬은 $90^\\circ$ 회전이므로 어떤 방향도 보존하지 않아 실수 고유벡터가 존재하지 않습니다."
    }
  ],
  "problems": [
    {
      "id": "5-1",
      "type": "text",
      "difficulty": 2,
      "question": "$A = \\begin{pmatrix}3 & 1 \\\\ 0 & 2\\end{pmatrix}$ 의 고윳값들을 콤마로 구분해 적으시오. (예: 1,2)",
      "answer": "3,2",
      "hints": [
        "$\\det(A - \\lambda I) = 0$.",
        "$(3-\\lambda)(2-\\lambda) - 0 = 0$."
      ],
      "explanation": "특성방정식 $(3-\\lambda)(2-\\lambda) = 0 \\;\\Rightarrow\\; \\lambda = 3,\\ 2$. 삼각 행렬의 고윳값은 대각 성분 그 자체.",
      "wrongAnalysis": "비대각 성분 $1$ 을 함수로 곱해 끌어들이는 실수가 있습니다. 삼각 행렬에서는 대각만 보면 됩니다."
    },
    {
      "id": "5-2",
      "type": "number",
      "difficulty": 3,
      "question": "$A = \\begin{pmatrix}2 & 1 \\\\ 1 & 2\\end{pmatrix}$ 의 큰 쪽 고윳값은?",
      "answer": "3",
      "hints": [
        "$\\det(A - \\lambda I) = (2-\\lambda)^2 - 1 = 0$.",
        "$(2-\\lambda)^2 = 1 \\;\\Rightarrow\\; 2 - \\lambda = \\pm 1$."
      ],
      "explanation": "$2 - \\lambda = 1 \\;\\Rightarrow\\; \\lambda = 1$, $2 - \\lambda = -1 \\;\\Rightarrow\\; \\lambda = 3$. 큰 값은 $3$.",
      "wrongAnalysis": "특성방정식 전개 시 $-bc$ 항을 빼먹는 실수가 흔합니다. $\\det = ad - bc$ 의 $-bc$ 를 잊지 마세요."
    },
    {
      "id": "5-3",
      "type": "choice",
      "difficulty": 3,
      "question": "$A\\mathbf{v} = \\lambda \\mathbf{v}$ 에서 $\\mathbf{v} = \\mathbf{0}$ 도 식을 만족하지만 고유벡터로 인정하지 않는 이유는?",
      "choices": [
        "$\\mathbf{0}$ 은 방향이 정의되지 않기 때문에",
        "$\\lambda$ 가 $0$ 이어야 하기 때문에",
        "$A$ 가 정칙(가역)이어야 하기 때문에",
        "$\\mathbf{0}$ 은 단위벡터가 아니기 때문에"
      ],
      "answer": "$\\mathbf{0}$ 은 방향이 정의되지 않기 때문에",
      "hints": [
        "고유벡터의 핵심은 '변환 후 방향 보존'.",
        "방향이 없으면 의미 없음."
      ],
      "explanation": "$\\mathbf{0}$ 은 어떤 $\\lambda$ 에서도 $A\\mathbf{0} = \\mathbf{0} = \\lambda \\mathbf{0}$ 을 만족하므로 정보가 없습니다. 그래서 정의상 제외합니다.",
      "wrongAnalysis": "$\\mathbf{0}$ 도 식을 만족하니 고유벡터라 답하는 실수가 흔합니다. 정의에서 $\\mathbf{v} \\ne \\mathbf{0}$ 가 핵심 조건."
    },
    {
      "id": "5-4",
      "type": "number",
      "difficulty": 1,
      "question": "$A = \\begin{pmatrix}4 & 0 \\\\ 0 & 7\\end{pmatrix}$ 의 고윳값의 합은?",
      "answer": "11",
      "hints": [
        "대각행렬의 고윳값은 대각 성분 그 자체입니다.",
        "$4 + 7 = ?$"
      ],
      "explanation": "대각행렬의 고윳값은 대각 성분이므로 $\\lambda_1 = 4$, $\\lambda_2 = 7$. 합은 $4 + 7 = 11$.",
      "wrongAnalysis": "고윳값의 합이 아니라 곱 $4 \\times 7 = 28$ 을 답하는 실수가 있습니다. 합은 대각합(trace)과 같습니다."
    },
    {
      "id": "5-5",
      "type": "choice",
      "difficulty": 1,
      "question": "$A = \\begin{pmatrix}1 & 0 \\\\ 0 & 1\\end{pmatrix}$ (단위행렬)의 고윳값은?",
      "choices": [
        "$0$",
        "$1$ (중복도 $2$)",
        "$1$ 과 $-1$",
        "$2$"
      ],
      "answer": "$1$ (중복도 $2$)",
      "hints": [
        "$A\\mathbf{v} = \\lambda\\mathbf{v}$ 에서 $A = I$ 이면 $I\\mathbf{v} = \\mathbf{v}$ 입니다.",
        "모든 벡터가 고유벡터이며 $\\lambda = 1$."
      ],
      "explanation": "$I\\mathbf{v} = 1 \\cdot \\mathbf{v}$ 이므로 모든 $\\mathbf{0}$ 이 아닌 벡터가 $\\lambda = 1$ 의 고유벡터입니다. 고윳값은 $1$ (중복도 $2$).",
      "wrongAnalysis": "단위행렬의 고윳값을 $0$ 으로 착각하는 실수가 있습니다. $I\\mathbf{v} = \\mathbf{v}$ 이므로 $\\lambda = 1$ 입니다."
    }
  ],
  "summary": {
    "keyPoints": [
      "$A\\mathbf{v} = \\lambda \\mathbf{v},\\ \\mathbf{v} \\ne \\mathbf{0}$",
      "특성방정식 $\\det(A - \\lambda I) = 0$ 으로 고윳값",
      "각 $\\lambda$ 마다 $(A - \\lambda I)\\mathbf{v} = \\mathbf{0}$ 으로 고유벡터"
    ],
    "formulas": [
      "A\\mathbf{v} = \\lambda \\mathbf{v}",
      "\\det(A - \\lambda I) = 0",
      "(A - \\lambda I)\\mathbf{v} = \\mathbf{0}"
    ],
    "commonMistakes": [
      "$\\mathbf{0}$ 을 고유벡터로 인정",
      "특성방정식에서 $-bc$ 누락"
    ],
    "nextConnection": "선형변환이 기하학적으로 무엇을 하는지 더 깊이 알아봅니다. 다음 단원에서는 회전, 확대/축소, 반사, 전단 등 구체적인 기하학적 변환을 행렬로 표현합니다."
  }
},
{
  "id": 6,
  "title": "기하학적 변환과 행렬",
  "category": "선형대수",
  "level": "중급",
  "question": "회전, 확대/축소, 반사, 전단 같은 기하학적 변환을 행렬 하나로 표현할 수 있을까?",
  "concept": {
    "intro": ":::definition[개념 정의]\n선형변환은 추상적으로만 배울 필요가 없습니다. 평면 위의 대표적인 기하학적 변환들은 모두 $2 \\times 2$ 행렬로 깔끔하게 표현됩니다.\n:::\n\n:::note[참고]\n**회전 변환**: 원점을 중심으로 각도 $\\theta$만큼 반시계 방향으로 회전시키는 변환은 $R(\\theta) = \\begin{pmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{pmatrix}$입니다. 단위벡터 $(1,0)$이 $(\\cos\\theta, \\sin\\theta)$로, $(0,1)$이 $(-\\sin\\theta, \\cos\\theta)$로 이동하는 것에서 유도됩니다.\n:::\n\n:::note[참고]\n**확대/축소(스케일링)**: $x$ 방향으로 $a$배, $y$ 방향으로 $b$배 늘이는 변환은 $S = \\begin{pmatrix} a & 0 \\\\ 0 & b \\end{pmatrix}$입니다. 대각행렬이며, 고윳값이 곧 $a$와 $b$입니다.\n:::\n\n:::note[참고]\n**반사**: $x$축에 대한 반사는 $\\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix}$, $y$축에 대한 반사는 $\\begin{pmatrix} -1 & 0 \\\\ 0 & 1 \\end{pmatrix}$, 원점 대칭은 $\\begin{pmatrix} -1 & 0 \\\\ 0 & -1 \\end{pmatrix}$입니다.\n:::\n\n:::note[참고]\n**전단(shear)**: 수평 전단은 $\\begin{pmatrix} 1 & k \\\\ 0 & 1 \\end{pmatrix}$로, $y$ 좌표에 비례하여 $x$ 방향으로 밀어냅니다.\n:::\n\n:::note[참고]\n핵심 원리: 변환의 합성은 행렬의 곱셈에 대응합니다. 먼저 $A$를 적용하고 $B$를 적용하면 결과는 $BA$입니다. 행렬 곱의 순서가 중요합니다!\n:::",
    "intuition": ":::note[직관]\n컴퓨터 그래픽에서 캐릭터를 회전시키고, 크기를 조절하고, 뒤집는 것이 모두 행렬 곱 하나로 처리됩니다. 게임 엔진이 초당 수만 번 하는 일이 바로 이 행렬 연산입니다.\n:::",
    "formula": "R(\\theta) = \\begin{pmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{pmatrix}\nS(a,b) = \\begin{pmatrix} a & 0 \\\\ 0 & b \\end{pmatrix}\n\\text{반사}_{x\\text{축}} = \\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix}\n\\text{전단} = \\begin{pmatrix} 1 & k \\\\ 0 & 1 \\end{pmatrix}\n\\text{합성: 먼저 } A \\text{, 다음 } B \\;\\Rightarrow\\; BA",
    "summary": ":::note[핵심 요약]\n• 회전: $R(\\theta)$, 확대/축소: 대각행렬, 반사: 부호 변환, 전단: 삼각행렬\n• 변환의 합성 $=$ 행렬의 곱 (순서 주의!)\n• $\\det R(\\theta) = 1$ (면적 보존), $\\det$(반사) $= -1$ (방향 뒤집음)\n:::",
    "visuals": [{
      "type": "geometry",
      "title": "회전 변환 (θ = 45°)",
      "xRange": [-3, 3],
      "yRange": [-3, 3],
      "lines": [
        { "from": [0, 0], "to": [2, 0], "color": "#94a3b8", "dashed": true },
        { "from": [2, 0], "to": [2, 1], "color": "#94a3b8", "dashed": true },
        { "from": [0, 0], "to": [2, 1], "color": "#6366f1", "label": "원래 벡터" },
        { "from": [0, 0], "to": [0.707, 2.121], "color": "#ef4444", "label": "회전 후" },
        { "from": [0, 0], "to": [-2, 1], "color": "#10b981", "label": "반사" }
      ],
      "shapes": [
        { "type": "circle", "cx": 0, "cy": 0, "rx": 2.236, "color": "#e2e8f0", "fill": "none" }
      ],
      "annotations": [
        { "x": 0.8, "y": 0.8, "text": "45°", "color": "#f59e0b" }
      ]
    }]
  },
  "examples": [
    {
      "title": "$90^\\circ$ 회전 행렬 적용",
      "problem": "점 $(3, 1)$을 원점 중심으로 $90^\\circ$ 반시계 방향 회전한 좌표를 구하시오.",
      "steps": [
        "$\\theta = 90^\\circ$이므로 $\\cos 90^\\circ = 0$, $\\sin 90^\\circ = 1$.",
        "$R(90^\\circ) = \\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}$.",
        "$R \\begin{pmatrix} 3 \\\\ 1 \\end{pmatrix} = \\begin{pmatrix} 0 \\cdot 3 + (-1) \\cdot 1 \\\\ 1 \\cdot 3 + 0 \\cdot 1 \\end{pmatrix} = \\begin{pmatrix} -1 \\\\ 3 \\end{pmatrix}$."
      ],
      "answer": "$(-1, 3)$",
      "lesson": "회전 행렬을 외우지 않아도 $\\cos\\theta$와 $\\sin\\theta$를 대입하면 됩니다. $90^\\circ$ 회전은 $(x,y) \\mapsto (-y, x)$가 됩니다."
    },
    {
      "title": "[기본] 반사 변환",
      "problem": "점 $(2, 3)$ 을 $x$축에 대해 반사한 좌표를 구하시오.",
      "steps": [
        "$x$축 반사 행렬: $\\begin{pmatrix}1 & 0 \\\\ 0 & -1\\end{pmatrix}$.",
        "$\\begin{pmatrix}1 & 0 \\\\ 0 & -1\\end{pmatrix}\\begin{pmatrix}2 \\\\ 3\\end{pmatrix} = \\begin{pmatrix}2 \\\\ -3\\end{pmatrix}$."
      ],
      "answer": "$(2, -3)$",
      "lesson": "$x$축 반사는 $y$ 좌표만 부호를 바꿉니다. 반사 행렬의 행렬식은 $-1$이며, 넓이는 보존하되 방향이 뒤집힙니다."
    },
    {
      "title": "[응용] 변환의 합성",
      "problem": "$(1, 0)$ 을 먼저 $90^\\circ$ 반시계 회전한 뒤, $x$축에 대해 반사하면 어떤 점이 되는지 구하시오.",
      "steps": [
        "$90^\\circ$ 회전: $R = \\begin{pmatrix}0 & -1 \\\\ 1 & 0\\end{pmatrix}$. $R\\begin{pmatrix}1 \\\\ 0\\end{pmatrix} = \\begin{pmatrix}0 \\\\ 1\\end{pmatrix}$.",
        "$x$축 반사: $S = \\begin{pmatrix}1 & 0 \\\\ 0 & -1\\end{pmatrix}$. $S\\begin{pmatrix}0 \\\\ 1\\end{pmatrix} = \\begin{pmatrix}0 \\\\ -1\\end{pmatrix}$.",
        "합성 행렬 $SR = \\begin{pmatrix}0 & -1 \\\\ -1 & 0\\end{pmatrix}$. 검산: $SR\\begin{pmatrix}1 \\\\ 0\\end{pmatrix} = \\begin{pmatrix}0 \\\\ -1\\end{pmatrix}$. ✓"
      ],
      "answer": "$(0, -1)$",
      "lesson": "변환의 합성은 행렬의 곱으로 표현됩니다. 먼저 적용하는 변환이 오른쪽에, 나중에 적용하는 변환이 왼쪽에 옵니다."
    },
    {
      "title": "[응용] 스케일링(축 변환)",
      "problem": "$x$방향으로 $3$배, $y$방향으로 $2$배 확대하는 변환 행렬을 구하고, $(1, 4)$ 에 적용하시오.",
      "steps": [
        "스케일링 행렬: $S = \\begin{pmatrix}3 & 0 \\\\ 0 & 2\\end{pmatrix}$.",
        "$S\\begin{pmatrix}1 \\\\ 4\\end{pmatrix} = \\begin{pmatrix}3 \\\\ 8\\end{pmatrix}$.",
        "$\\det S = 6$이므로 넓이가 $6$배로 확대됩니다."
      ],
      "answer": "행렬 $= \\begin{pmatrix}3 & 0 \\\\ 0 & 2\\end{pmatrix}$, 변환 결과 $= (3, 8)$",
      "lesson": "대각행렬은 각 축 방향의 독립적인 스케일링을 나타냅니다. 행렬식은 넓이의 변화 배율입니다."
    },
    {
      "title": "[심화] 밀림(전단) 변환의 반복 적용",
      "problem": "밀림 행렬 $A = \\begin{pmatrix}1 & 2 \\\\ 0 & 1\\end{pmatrix}$ 에 대해 $A^n$ 의 일반식을 구하시오.",
      "steps": [
        "$A^2 = \\begin{pmatrix}1 & 4 \\\\ 0 & 1\\end{pmatrix}$.",
        "$A^3 = \\begin{pmatrix}1 & 6 \\\\ 0 & 1\\end{pmatrix}$.",
        "패턴 관찰: $A^n = \\begin{pmatrix}1 & 2n \\\\ 0 & 1\\end{pmatrix}$.",
        "증명: $A^n \\cdot A = \\begin{pmatrix}1 & 2n \\\\ 0 & 1\\end{pmatrix}\\begin{pmatrix}1 & 2 \\\\ 0 & 1\\end{pmatrix} = \\begin{pmatrix}1 & 2(n+1) \\\\ 0 & 1\\end{pmatrix} = A^{n+1}$. ✓"
      ],
      "answer": "$A^n = \\begin{pmatrix}1 & 2n \\\\ 0 & 1\\end{pmatrix}$",
      "lesson": "밀림 행렬 $\\begin{pmatrix}1 & k \\\\ 0 & 1\\end{pmatrix}$의 거듭제곱에서 $(1,2)$ 성분만 선형으로 증가합니다. 이는 고윳값이 모두 $1$인 행렬의 거듭제곱이 다항식적으로 성장하는 예입니다."
    }
  ],
  "problems": [
    {
      "id": "6-1",
      "type": "text",
      "difficulty": 1,
      "question": "점 $(1, 0)$을 $x$축에 대해 반사한 좌표는? (예: (a,b))",
      "answer": "(1,0)",
      "hints": [
        "$x$축 반사 행렬은 $\\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix}$입니다.",
        "$(1, 0)$은 이미 $x$축 위에 있습니다.",
        "$y$ 좌표가 $0$이므로 반사해도 그대로입니다."
      ],
      "explanation": "$\\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix} \\begin{pmatrix} 1 \\\\ 0 \\end{pmatrix} = \\begin{pmatrix} 1 \\\\ 0 \\end{pmatrix}$. $x$축 위의 점은 $x$축 반사에 의해 움직이지 않습니다.",
      "wrongAnalysis": "$(0, 1)$이나 $(-1, 0)$으로 답하는 실수가 있습니다. $x$축 반사는 $y$ 좌표만 부호를 바꿉니다."
    },
    {
      "id": "6-2",
      "type": "text",
      "difficulty": 2,
      "question": "수평 전단 행렬 $\\begin{pmatrix} 1 & 2 \\\\ 0 & 1 \\end{pmatrix}$를 점 $(1, 3)$에 적용한 결과는? (예: (a,b))",
      "answer": "(7,3)",
      "hints": [
        "행렬-벡터 곱을 계산하세요.",
        "$1 \\cdot 1 + 2 \\cdot 3 = 7$, $0 \\cdot 1 + 1 \\cdot 3 = 3$."
      ],
      "explanation": "$\\begin{pmatrix} 1 & 2 \\\\ 0 & 1 \\end{pmatrix} \\begin{pmatrix} 1 \\\\ 3 \\end{pmatrix} = \\begin{pmatrix} 7 \\\\ 3 \\end{pmatrix}$. 전단은 $y$ 좌표에 비례하여 $x$ 좌표를 이동시킵니다. $y = 3$이므로 $x$가 $2 \\times 3 = 6$만큼 증가했습니다.",
      "wrongAnalysis": "행렬 곱에서 행과 열을 혼동하여 $(1, 7)$로 답하는 실수가 있습니다. 결과 벡터의 첫 성분은 행렬의 첫 행과 벡터의 내적입니다."
    },
    {
      "id": "6-3",
      "type": "number",
      "difficulty": 3,
      "question": "$45^\\circ$ 회전 행렬의 행렬식 $\\det R(45^\\circ)$의 값은?",
      "answer": "1",
      "hints": [
        "$R(45^\\circ) = \\begin{pmatrix} \\cos 45^\\circ & -\\sin 45^\\circ \\\\ \\sin 45^\\circ & \\cos 45^\\circ \\end{pmatrix}$.",
        "$\\det = \\cos^2 45^\\circ + \\sin^2 45^\\circ$.",
        "삼각함수의 기본 항등식을 떠올려 보세요."
      ],
      "explanation": "$\\det R(\\theta) = \\cos^2\\theta - (-\\sin\\theta)(\\sin\\theta) = \\cos^2\\theta + \\sin^2\\theta = 1$. 모든 회전 행렬의 행렬식은 $1$입니다. 이는 회전이 면적을 보존하고 방향을 뒤집지 않음을 의미합니다.",
      "wrongAnalysis": "$\\cos^2 45^\\circ = \\frac{1}{2}$를 답으로 쓰는 실수는 $\\sin^2$ 항을 빼먹은 것입니다. $\\det$ 공식의 $-(-\\sin\\theta)(\\sin\\theta) = +\\sin^2\\theta$에 주의하세요."
    },
    {
      "id": "6-4",
      "type": "text",
      "difficulty": 1,
      "question": "점 $(2, 3)$을 $y$축에 대해 반사한 좌표는? (예: (a,b))",
      "answer": "(-2,3)",
      "hints": [
        "$y$축 반사 행렬은 $\\begin{pmatrix} -1 & 0 \\\\ 0 & 1 \\end{pmatrix}$입니다.",
        "$x$ 좌표의 부호만 바뀝니다."
      ],
      "explanation": "$\\begin{pmatrix} -1 & 0 \\\\ 0 & 1 \\end{pmatrix} \\begin{pmatrix} 2 \\\\ 3 \\end{pmatrix} = \\begin{pmatrix} -2 \\\\ 3 \\end{pmatrix}$. $y$축 반사는 $x$ 좌표만 부호를 바꿉니다.",
      "wrongAnalysis": "$(2, -3)$으로 답하는 것은 $x$축 반사와 혼동한 것입니다. $y$축 반사는 $x$ 좌표의 부호를 바꿉니다."
    },
    {
      "id": "6-5",
      "type": "number",
      "difficulty": 2,
      "question": "확대/축소 행렬 $S = \\begin{pmatrix} 3 & 0 \\\\ 0 & 2 \\end{pmatrix}$의 행렬식은?",
      "answer": "6",
      "hints": [
        "대각행렬의 행렬식은 대각 성분의 곱입니다.",
        "$3 \\times 2 = ?$"
      ],
      "explanation": "$\\det S = 3 \\times 2 = 6$. 이 변환은 $x$ 방향으로 $3$배, $y$ 방향으로 $2$배 확대하므로 면적이 $6$배가 됩니다.",
      "wrongAnalysis": "대각 성분을 더하여 $3 + 2 = 5$ 라고 답하는 실수가 있습니다. 행렬식은 대각 성분의 곱입니다."
    }
  ],
  "summary": {
    "keyPoints": [
      "회전, 확대/축소, 반사, 전단은 모두 $2 \\times 2$ 행렬로 표현 가능",
      "변환의 합성은 행렬의 곱 (순서 중요: 먼저 $A$, 다음 $B$ → $BA$)",
      "회전 행렬의 행렬식은 항상 $1$ (면적 보존)"
    ],
    "formulas": [
      "R(\\theta) = \\begin{pmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{pmatrix}",
      "\\det R(\\theta) = \\cos^2\\theta + \\sin^2\\theta = 1",
      "\\text{합성: } B \\circ A = BA"
    ],
    "commonMistakes": [
      "행렬 곱의 순서를 뒤바꾸는 실수 ($AB \\neq BA$)",
      "회전 행렬에서 $-\\sin\\theta$의 위치를 잘못 놓는 실수",
      "반사의 행렬식이 $+1$이라고 착각하는 실수 ($-1$이 맞음)"
    ],
    "nextConnection": "기하학적 변환을 행렬로 표현할 수 있게 되었으니, 이제 행렬이 등장하는 가장 핵심적인 문제인 연립방정식을 체계적으로 푸는 방법을 배웁니다."
  }
},
{
  "id": 7,
  "title": "연립방정식과 가우스 소거법",
  "category": "선형대수",
  "level": "중급",
  "question": "연립일차방정식 $A\\mathbf{x} = \\mathbf{b}$를 체계적으로 푸는 방법은 무엇이고, 해가 없거나 무한히 많을 수도 있을까?",
  "concept": {
    "intro": ":::definition[개념 정의]\n연립일차방정식은 $a_{11}x_1 + a_{12}x_2 + \\cdots = b_1$ 형태의 방정식 여러 개를 동시에 만족하는 해를 찾는 문제입니다. 이를 행렬로 표현하면 $A\\mathbf{x} = \\mathbf{b}$가 됩니다.\n:::\n\n:::note[참고]\n**가우스 소거법(Gaussian elimination)**은 첨가행렬 $[A|\\mathbf{b}]$에 행 연산(행 교환, 행에 상수 곱, 한 행에 다른 행의 상수배를 더함)을 적용하여 행 사다리꼴(row echelon form, REF)로 만드는 과정입니다. 여기서 더 나아가 기약 행 사다리꼴(reduced row echelon form, RREF)까지 변환하면 해를 바로 읽을 수 있습니다.\n:::\n\n:::note[참고]\n해의 종류는 세 가지입니다. (1) **유일한 해**: 피벗이 모든 미지수에 대해 존재하는 경우. (2) **무한히 많은 해**: 자유 변수가 존재하는 경우(매개변수 해). (3) **해 없음**: 모순 행($0 = c$, $c \\neq 0$)이 나타나는 경우.\n:::\n\n:::note[참고]\n행렬식과의 관계: $A$가 정사각행렬이고 $\\det A \\neq 0$이면 유일한 해가 존재합니다.\n:::",
    "intuition": ":::note[직관]\n연립방정식을 푸는 것은 여러 조건을 동시에 만족하는 점을 찾는 것입니다. 2차원에서 직선 두 개가 한 점에서 만나면 유일한 해, 겹치면 무한히 많은 해, 평행하면 해가 없습니다. 가우스 소거법은 이 과정을 체계적으로 수행합니다.\n:::",
    "formula": "A\\mathbf{x} = \\mathbf{b} \\;\\Rightarrow\\; [A|\\mathbf{b}] \\xrightarrow{\\text{행 연산}} \\text{REF 또는 RREF}\n\\text{행 연산: } R_i \\leftrightarrow R_j,\\quad kR_i,\\quad R_i + cR_j\n\\det A \\neq 0 \\;\\Leftrightarrow\\; \\text{유일한 해 존재}",
    "summary": ":::note[핵심 요약]\n• 연립방정식 $A\\mathbf{x} = \\mathbf{b}$를 첨가행렬로 표현\n• 가우스 소거법: 행 연산으로 REF/RREF 변환\n• 해의 종류: 유일, 무한(자유 변수), 없음(모순 행)\n• $\\det A \\neq 0$ $\\Leftrightarrow$ 유일한 해\n:::"
  },
  "examples": [
    {
      "title": "가우스 소거법으로 연립방정식 풀기",
      "problem": "$\\begin{cases} x + 2y = 5 \\\\ 3x + 4y = 11 \\end{cases}$을 가우스 소거법으로 풀어라.",
      "steps": [
        "첨가행렬: $\\begin{pmatrix} 1 & 2 & | & 5 \\\\ 3 & 4 & | & 11 \\end{pmatrix}$.",
        "$R_2 \\leftarrow R_2 - 3R_1$: $\\begin{pmatrix} 1 & 2 & | & 5 \\\\ 0 & -2 & | & -4 \\end{pmatrix}$.",
        "$R_2 \\leftarrow -\\frac{1}{2}R_2$: $\\begin{pmatrix} 1 & 2 & | & 5 \\\\ 0 & 1 & | & 2 \\end{pmatrix}$.",
        "후진 대입: $y = 2$, $x + 2(2) = 5$이므로 $x = 1$."
      ],
      "answer": "$x = 1,\\ y = 2$",
      "lesson": "행 연산은 방정식의 양변에 같은 조작을 하는 것과 같으므로 해가 바뀌지 않습니다. 체계적으로 미지수를 하나씩 소거하는 것이 핵심입니다."
    },
    {
      "title": "[기본] 간단한 $2 \\times 2$ 소거",
      "problem": "$\\begin{cases} 2x + y = 7 \\\\ x - y = 2 \\end{cases}$ 를 가우스 소거법으로 풀어라.",
      "steps": [
        "첨가행렬: $\\begin{pmatrix} 2 & 1 & | & 7 \\\\ 1 & -1 & | & 2 \\end{pmatrix}$.",
        "$R_1 \\leftrightarrow R_2$: $\\begin{pmatrix} 1 & -1 & | & 2 \\\\ 2 & 1 & | & 7 \\end{pmatrix}$.",
        "$R_2 \\leftarrow R_2 - 2R_1$: $\\begin{pmatrix} 1 & -1 & | & 2 \\\\ 0 & 3 & | & 3 \\end{pmatrix}$.",
        "$y = 1$, $x = 2 + 1 = 3$."
      ],
      "answer": "$x = 3,\\ y = 1$",
      "lesson": "피벗을 $1$로 만들기 위해 행을 교환하는 것은 유효한 행 연산입니다."
    },
    {
      "title": "[응용] 무한히 많은 해",
      "problem": "$\\begin{cases} x + 2y - z = 1 \\\\ 2x + 4y - 2z = 2 \\end{cases}$ 의 해를 구하시오.",
      "steps": [
        "첨가행렬: $\\begin{pmatrix} 1 & 2 & -1 & | & 1 \\\\ 2 & 4 & -2 & | & 2 \\end{pmatrix}$.",
        "$R_2 \\leftarrow R_2 - 2R_1$: $\\begin{pmatrix} 1 & 2 & -1 & | & 1 \\\\ 0 & 0 & 0 & | & 0 \\end{pmatrix}$.",
        "자유 변수: $y = s$, $z = t$. 피벗 변수: $x = 1 - 2s + t$.",
        "해: $(x, y, z) = (1 - 2s + t,\\ s,\\ t)$."
      ],
      "answer": "$(x, y, z) = (1 - 2s + t,\\ s,\\ t)$ ($s, t \\in \\mathbb{R}$)",
      "lesson": "자유 변수가 2개이므로 해 공간은 2차원입니다. 모든 해는 특수해 $(1, 0, 0)$에 영공간의 원소를 더한 형태입니다."
    },
    {
      "title": "[응용] 해 없음 판별",
      "problem": "$\\begin{cases} x + y = 1 \\\\ 2x + 2y = 5 \\end{cases}$ 의 해의 존재 여부를 판별하시오.",
      "steps": [
        "첨가행렬: $\\begin{pmatrix} 1 & 1 & | & 1 \\\\ 2 & 2 & | & 5 \\end{pmatrix}$.",
        "$R_2 \\leftarrow R_2 - 2R_1$: $\\begin{pmatrix} 1 & 1 & | & 1 \\\\ 0 & 0 & | & 3 \\end{pmatrix}$.",
        "마지막 행은 $0 = 3$이라는 모순."
      ],
      "answer": "해 없음 (모순 발생)",
      "lesson": "소거 후 '$0 = $ 0이 아닌 수' 행이 나타나면 모순이며, 연립방정식에 해가 존재하지 않습니다."
    },
    {
      "title": "[심화] $3 \\times 3$ 연립방정식과 자유 변수",
      "problem": "$\\begin{cases} x + y + z = 3 \\\\ x + 2y + 3z = 6 \\\\ 2x + 3y + 4z = 9 \\end{cases}$ 를 풀어라.",
      "steps": [
        "첨가행렬: $\\begin{pmatrix} 1 & 1 & 1 & | & 3 \\\\ 1 & 2 & 3 & | & 6 \\\\ 2 & 3 & 4 & | & 9 \\end{pmatrix}$.",
        "$R_2 \\leftarrow R_2 - R_1$, $R_3 \\leftarrow R_3 - 2R_1$: $\\begin{pmatrix} 1 & 1 & 1 & | & 3 \\\\ 0 & 1 & 2 & | & 3 \\\\ 0 & 1 & 2 & | & 3 \\end{pmatrix}$.",
        "$R_3 \\leftarrow R_3 - R_2$: $\\begin{pmatrix} 1 & 1 & 1 & | & 3 \\\\ 0 & 1 & 2 & | & 3 \\\\ 0 & 0 & 0 & | & 0 \\end{pmatrix}$.",
        "자유 변수: $z = t$. $y = 3 - 2t$, $x = 3 - (3-2t) - t = t$.",
        "해: $(x, y, z) = (t,\\ 3-2t,\\ t)$."
      ],
      "answer": "$(x, y, z) = (t,\\ 3-2t,\\ t)$ ($t \\in \\mathbb{R}$)",
      "lesson": "세 번째 행이 소거되어 $0 = 0$이 되면, 실질적 조건은 2개뿐이고 자유 변수가 1개 생깁니다. 해 공간은 직선입니다."
    }
  ],
  "problems": [
    {
      "id": "7-1",
      "type": "number",
      "difficulty": 1,
      "question": "$\\begin{cases} x + y = 3 \\\\ 2x - y = 3 \\end{cases}$ 의 해에서 $x$의 값은?",
      "answer": "2",
      "hints": [
        "두 식을 더하면 $3x = 6$.",
        "$x = 2$."
      ],
      "explanation": "두 식을 더하면 $y$가 소거: $3x = 6$, $x = 2$. $y = 3 - 2 = 1$. 가우스 소거법의 핵심인 '한 변수 소거'를 가장 간단한 형태로 보여줍니다.",
      "wrongAnalysis": "$x + y = 3$에서 $x = 3$으로 착각하는 실수가 있습니다. $y$도 있으므로 바로 답이 되지 않습니다."
    },
    {
      "id": "7-2",
      "type": "choice",
      "difficulty": 2,
      "question": "$\\begin{cases} x + 2y = 4 \\\\ 2x + 4y = 8 \\end{cases}$ 의 해의 종류는?",
      "choices": [
        "유일한 해",
        "해 없음",
        "무한히 많은 해",
        "판단 불가"
      ],
      "answer": "무한히 많은 해",
      "hints": [
        "두 번째 식은 첫 번째 식의 $2$배입니다.",
        "첨가행렬에 $R_2 - 2R_1$을 적용하면 $0 = 0$ 행이 나옵니다.",
        "자유 변수가 하나 생깁니다."
      ],
      "explanation": "$R_2 - 2R_1$을 하면 $(0, 0 | 0)$이 나옵니다. 모순이 없고 자유 변수 $y = t$가 존재하므로 해가 무한히 많습니다: $x = 4 - 2t$, $y = t$.",
      "wrongAnalysis": "'해 없음'을 선택하는 실수는 $0 = 0$을 '0은 의미 없다'로 잘못 해석한 것입니다. $0 = 0$은 참인 등식이며, 조건이 하나 줄었음을 뜻합니다."
    },
    {
      "id": "7-3",
      "type": "choice",
      "difficulty": 3,
      "question": "$\\begin{cases} x + y + z = 1 \\\\ x + y + z = 3 \\end{cases}$ 의 해의 종류는?",
      "choices": [
        "유일한 해",
        "해 없음",
        "무한히 많은 해",
        "판단 불가"
      ],
      "answer": "해 없음",
      "hints": [
        "두 식의 좌변이 같은데 우변이 다릅니다.",
        "$R_2 - R_1$을 하면 $0 = 2$라는 모순 행이 나옵니다."
      ],
      "explanation": "$R_2 - R_1$을 하면 $(0, 0, 0 | 2)$, 즉 $0 = 2$라는 모순입니다. 따라서 해가 존재하지 않습니다. 기하학적으로 두 평면이 평행하지만 일치하지 않는 상황입니다.",
      "wrongAnalysis": "변수가 3개이므로 '자유 변수가 있어 무한히 많은 해'라고 착각할 수 있지만, 모순이 먼저 발생하면 해가 아예 없습니다."
    },
    {
      "id": "7-4",
      "type": "number",
      "difficulty": 1,
      "question": "$\\begin{cases} 2x + y = 7 \\\\ x - y = 2 \\end{cases}$ 의 해에서 $y$의 값은?",
      "answer": "1",
      "hints": [
        "두 식을 더하면 $3x = 9$.",
        "$x = 3$. 첫 식에 대입하면 $6 + y = 7$."
      ],
      "explanation": "두 식을 더하면 $3x = 9$, $x = 3$. $2(3) + y = 7$이므로 $y = 1$.",
      "wrongAnalysis": "$x$의 값을 구한 뒤 대입하는 과정에서 부호를 틀리는 실수가 있습니다."
    },
    {
      "id": "7-5",
      "type": "choice",
      "difficulty": 2,
      "question": "$\\begin{cases} x + y = 2 \\\\ 2x + 2y = 5 \\end{cases}$ 의 해의 종류는?",
      "choices": [
        "유일한 해",
        "해 없음",
        "무한히 많은 해",
        "판단 불가"
      ],
      "answer": "해 없음",
      "hints": [
        "두 번째 식을 $2$로 나누면 $x + y = 2.5$.",
        "첫 번째 식은 $x + y = 2$이므로 모순입니다."
      ],
      "explanation": "$R_2 - 2R_1$을 하면 $(0, 0 | 1)$, 즉 $0 = 1$이라는 모순이 발생합니다. 따라서 해가 없습니다.",
      "wrongAnalysis": "좌변이 비례하므로 '무한히 많은 해'라고 착각할 수 있지만, 우변이 비례하지 않으면 모순이 됩니다."
    }
  ],
  "summary": {
    "keyPoints": [
      "연립방정식은 $A\\mathbf{x} = \\mathbf{b}$ 형태의 행렬 문제",
      "가우스 소거법: 행 연산으로 단계적 소거",
      "해의 종류는 REF/RREF에서 모순 행과 자유 변수로 판별"
    ],
    "formulas": [
      "A\\mathbf{x} = \\mathbf{b}",
      "[A|\\mathbf{b}] \\xrightarrow{\\text{행 연산}} \\text{RREF}",
      "\\det A \\neq 0 \\Leftrightarrow \\text{유일한 해}"
    ],
    "commonMistakes": [
      "행 연산에서 부호를 틀리는 실수",
      "$0 = 0$ 행을 '해 없음'으로 오해하는 실수",
      "자유 변수를 매개변수로 놓지 않고 $0$으로 두는 실수"
    ],
    "nextConnection": "가우스 소거법으로 연립방정식을 풀었으니, 이제 해의 구조를 더 깊이 이해하기 위해 벡터 공간과 부분공간의 개념을 도입합니다."
  }
},
{
  "id": 8,
  "title": "벡터 공간과 부분공간",
  "category": "선형대수",
  "level": "고급",
  "question": "벡터들의 '합'과 '스칼라곱'이 닫혀 있는 집합은 어떤 특별한 성질을 가지는가?",
  "concept": {
    "intro": ":::definition[개념 정의]\n벡터 공간은 벡터의 합과 스칼라곱에 대해 닫혀 있고, 특정 공리(결합법칙, 교환법칙, 항등원 존재 등)를 만족하는 집합입니다. $\\mathbb{R}^n$이 대표적이지만, 다항식의 집합, 연속함수의 집합 등도 벡터 공간이 될 수 있습니다.\n:::\n\n:::note[참고]\n**부분공간(subspace)**은 벡터 공간 안에서 그 자체로 벡터 공간이 되는 부분집합입니다. 부분공간 판별법은 간단합니다: (1) $\\mathbf{0}$을 포함하고, (2) 합에 대해 닫혀 있고, (3) 스칼라곱에 대해 닫혀 있으면 됩니다.\n:::\n\n:::note[참고]\n**생성(span)**: 벡터 $\\{\\mathbf{v}_1, \\ldots, \\mathbf{v}_k\\}$의 모든 일차결합의 집합, 즉 $\\mathrm{span}(\\mathbf{v}_1, \\ldots, \\mathbf{v}_k) = \\{c_1\\mathbf{v}_1 + \\cdots + c_k\\mathbf{v}_k \\mid c_i \\in \\mathbb{R}\\}$.\n:::\n\n:::note[참고]\n**일차독립(linear independence)**: $c_1\\mathbf{v}_1 + \\cdots + c_k\\mathbf{v}_k = \\mathbf{0}$이 $c_1 = \\cdots = c_k = 0$일 때만 성립하면 일차독립입니다.\n:::\n\n:::note[참고]\n**열공간(column space)** $\\mathrm{Col}(A)$: $A$의 열벡터들이 생성하는 공간. $A\\mathbf{x} = \\mathbf{b}$의 해가 존재하는 $\\mathbf{b}$의 집합.\n**영공간(null space)** $\\mathrm{Null}(A)$: $A\\mathbf{x} = \\mathbf{0}$의 해 집합. 동차 연립방정식의 해 공간.\n:::",
    "intuition": ":::note[직관]\n벡터 공간은 '합과 배수를 자유롭게 만들어도 밖으로 나가지 않는 집합'입니다. $\\mathbb{R}^3$ 안에서 원점을 지나는 평면은 부분공간이지만, 원점을 지나지 않는 평면은 $\\mathbf{0}$을 포함하지 않으므로 부분공간이 아닙니다.\n\n열공간은 '행렬이 만들 수 있는 모든 출력', 영공간은 '행렬이 $\\mathbf{0}$으로 보내는 모든 입력'입니다.\n:::",
    "formula": "\\mathrm{span}(\\mathbf{v}_1, \\ldots, \\mathbf{v}_k) = \\{c_1\\mathbf{v}_1 + \\cdots + c_k\\mathbf{v}_k\\}\n\\text{일차독립: } c_1\\mathbf{v}_1 + \\cdots + c_k\\mathbf{v}_k = \\mathbf{0} \\;\\Rightarrow\\; c_i = 0\\ \\forall i\n\\mathrm{Col}(A) = \\{A\\mathbf{x} \\mid \\mathbf{x} \\in \\mathbb{R}^n\\}\n\\mathrm{Null}(A) = \\{\\mathbf{x} \\mid A\\mathbf{x} = \\mathbf{0}\\}",
    "summary": ":::note[핵심 요약]\n• 벡터 공간: 합과 스칼라곱에 닫힌 집합\n• 부분공간 판별: $\\mathbf{0}$ 포함 + 합에 닫힘 + 스칼라곱에 닫힘\n• span: 일차결합의 집합, 일차독립: 불필요한 벡터 없음\n• $\\mathrm{Col}(A)$: 도달 가능한 출력, $\\mathrm{Null}(A)$: $\\mathbf{0}$으로 가는 입력\n:::"
  },
  "examples": [
    {
      "title": "부분공간 판별과 영공간",
      "problem": "$A = \\begin{pmatrix} 1 & 2 \\\\ 2 & 4 \\end{pmatrix}$의 영공간 $\\mathrm{Null}(A)$를 구하시오.",
      "steps": [
        "$A\\mathbf{x} = \\mathbf{0}$: $\\begin{cases} x_1 + 2x_2 = 0 \\\\ 2x_1 + 4x_2 = 0 \\end{cases}$.",
        "두 번째 식은 첫 번째 식의 $2$배이므로 실질적 조건은 $x_1 = -2x_2$ 하나.",
        "$x_2 = t$로 놓으면 $\\mathbf{x} = t\\begin{pmatrix} -2 \\\\ 1 \\end{pmatrix}$.",
        "영공간 $= \\mathrm{span}\\left(\\begin{pmatrix} -2 \\\\ 1 \\end{pmatrix}\\right)$."
      ],
      "answer": "$\\mathrm{Null}(A) = \\left\\{ t\\begin{pmatrix} -2 \\\\ 1 \\end{pmatrix} \\mid t \\in \\mathbb{R} \\right\\}$",
      "lesson": "영공간은 항상 부분공간입니다 ($\\mathbf{0}$을 포함하고, 합과 스칼라곱에 닫혀 있음). 가우스 소거법으로 자유 변수를 찾으면 영공간의 기저를 구할 수 있습니다."
    },
    {
      "title": "[기본] 부분공간 판별",
      "problem": "$W = \\{(x, y) \\in \\mathbb{R}^2 \\mid y = 3x\\}$ 가 $\\mathbb{R}^2$의 부분공간인지 판별하시오.",
      "steps": [
        "$\\mathbf{0}$ 포함: $(0, 0)$에서 $0 = 3 \\cdot 0$. ✓",
        "합에 닫힘: $(x_1, 3x_1) + (x_2, 3x_2) = (x_1+x_2,\\ 3(x_1+x_2))$. ✓",
        "스칼라곱에 닫힘: $c(x, 3x) = (cx, 3(cx))$. ✓"
      ],
      "answer": "부분공간이다.",
      "lesson": "원점을 지나는 직선은 항상 $\\mathbb{R}^2$의 부분공간입니다. $y = 3x$는 $\\mathrm{span}\\{(1, 3)\\}$과 같습니다."
    },
    {
      "title": "[응용] 일차독립 판별",
      "problem": "$\\mathbf{v}_1 = (1, 0, 1),\\ \\mathbf{v}_2 = (0, 1, 1),\\ \\mathbf{v}_3 = (1, 1, 2)$ 가 일차독립인지 판별하시오.",
      "steps": [
        "$c_1\\mathbf{v}_1 + c_2\\mathbf{v}_2 + c_3\\mathbf{v}_3 = \\mathbf{0}$을 행렬로 표현: $\\begin{pmatrix}1 & 0 & 1 \\\\ 0 & 1 & 1 \\\\ 1 & 1 & 2\\end{pmatrix}\\begin{pmatrix}c_1 \\\\ c_2 \\\\ c_3\\end{pmatrix} = \\mathbf{0}$.",
        "$R_3 \\leftarrow R_3 - R_1$: $\\begin{pmatrix}1 & 0 & 1 \\\\ 0 & 1 & 1 \\\\ 0 & 1 & 1\\end{pmatrix}$.",
        "$R_3 \\leftarrow R_3 - R_2$: $\\begin{pmatrix}1 & 0 & 1 \\\\ 0 & 1 & 1 \\\\ 0 & 0 & 0\\end{pmatrix}$.",
        "자유 변수 존재 → 비자명 해 존재 → 일차종속."
      ],
      "answer": "일차종속 ($\\mathbf{v}_3 = \\mathbf{v}_1 + \\mathbf{v}_2$)",
      "lesson": "행렬을 소거하여 자유 변수가 있으면 일차종속입니다. $\\mathbf{v}_3$은 다른 두 벡터의 합이므로 불필요한 벡터입니다."
    },
    {
      "title": "[응용] 열공간 구하기",
      "problem": "$A = \\begin{pmatrix}1 & 3 \\\\ 2 & 6\\end{pmatrix}$ 의 열공간 $\\mathrm{Col}(A)$의 기저를 구하시오.",
      "steps": [
        "RREF로 변환: $R_2 \\leftarrow R_2 - 2R_1$: $\\begin{pmatrix}1 & 3 \\\\ 0 & 0\\end{pmatrix}$.",
        "피벗 열: 1열. 따라서 $A$의 원래 1열이 열공간의 기저.",
        "$\\mathrm{Col}(A) = \\mathrm{span}\\left\\{\\begin{pmatrix}1 \\\\ 2\\end{pmatrix}\\right\\}$."
      ],
      "answer": "$\\mathrm{Col}(A)$의 기저: $\\left\\{\\begin{pmatrix}1 \\\\ 2\\end{pmatrix}\\right\\}$, 차원 $= 1$",
      "lesson": "열공간의 기저를 구하려면 RREF의 피벗 열 위치를 찾고, 원래 행렬의 해당 열을 취합니다. RREF의 열이 아닌 원래 열을 사용해야 합니다."
    },
    {
      "title": "[심화] span과 부분공간의 동치",
      "problem": "$W = \\{(a, b, a+b) \\mid a, b \\in \\mathbb{R}\\}$ 가 $\\mathbb{R}^3$의 부분공간임을 보이고 기저를 구하시오.",
      "steps": [
        "$(a, b, a+b) = a(1, 0, 1) + b(0, 1, 1)$이므로 $W = \\mathrm{span}\\{(1,0,1), (0,1,1)\\}$.",
        "span은 항상 부분공간이므로 $W$는 부분공간. ✓",
        "$(1, 0, 1)$과 $(0, 1, 1)$은 일차독립 (한쪽이 다른 쪽의 스칼라배가 아님).",
        "기저: $\\{(1, 0, 1), (0, 1, 1)\\}$, $\\dim W = 2$."
      ],
      "answer": "부분공간이다. 기저 $= \\{(1,0,1),\\ (0,1,1)\\}$, 차원 $= 2$",
      "lesson": "집합을 매개변수로 표현하면 자연스럽게 생성 벡터를 추출할 수 있고, span으로 표현되면 자동으로 부분공간입니다."
    }
  ],
  "problems": [
    {
      "id": "8-1",
      "type": "choice",
      "difficulty": 1,
      "question": "다음 중 $\\mathbb{R}^2$의 부분공간이 아닌 것은?",
      "choices": [
        "$\\{(0, 0)\\}$",
        "$\\{(x, 2x) \\mid x \\in \\mathbb{R}\\}$",
        "$\\{(x, y) \\mid x + y = 1\\}$",
        "$\\mathbb{R}^2$ 전체"
      ],
      "answer": "$\\{(x, y) \\mid x + y = 1\\}$",
      "hints": [
        "부분공간은 반드시 $\\mathbf{0}$을 포함해야 합니다.",
        "$x + y = 1$에서 $(0, 0)$은 $0 + 0 = 0 \\neq 1$이므로 포함되지 않습니다."
      ],
      "explanation": "$\\{(x,y) \\mid x + y = 1\\}$은 $\\mathbf{0} = (0,0)$을 포함하지 않으므로 부분공간이 아닙니다. 나머지는 모두 부분공간의 세 조건을 만족합니다.",
      "wrongAnalysis": "$x + y = 1$이 직선이므로 부분공간이라고 착각할 수 있지만, 원점을 지나지 않는 직선은 부분공간이 아닙니다."
    },
    {
      "id": "8-2",
      "type": "choice",
      "difficulty": 2,
      "question": "벡터 $(1, 2)$와 $(2, 4)$는 일차독립인가?",
      "choices": [
        "일차독립이다",
        "일차종속이다"
      ],
      "answer": "일차종속이다",
      "hints": [
        "$(2, 4) = 2 \\cdot (1, 2)$인지 확인하세요.",
        "한 벡터가 다른 벡터의 스칼라배이면 일차종속입니다."
      ],
      "explanation": "$(2, 4) = 2(1, 2)$이므로 $c_1(1,2) + c_2(2,4) = \\mathbf{0}$에서 $c_1 = 2$, $c_2 = -1$이라는 비자명 해가 존재합니다. 따라서 일차종속입니다.",
      "wrongAnalysis": "'성분이 다르므로 독립'이라고 착각하는 실수가 있습니다. 일차독립/종속은 비례 관계까지 확인해야 합니다."
    },
    {
      "id": "8-3",
      "type": "choice",
      "difficulty": 3,
      "question": "$3 \\times 3$ 행렬 $A$에 대해 $\\mathrm{Null}(A) = \\{\\mathbf{0}\\}$이면, $A\\mathbf{x} = \\mathbf{b}$의 해에 대해 올바른 설명은?",
      "choices": [
        "모든 $\\mathbf{b}$에 대해 유일한 해가 존재한다",
        "해가 존재하지 않는 $\\mathbf{b}$가 있을 수 있다",
        "항상 무한히 많은 해가 존재한다",
        "해는 항상 $\\mathbf{0}$이다"
      ],
      "answer": "모든 $\\mathbf{b}$에 대해 유일한 해가 존재한다",
      "hints": [
        "$\\mathrm{Null}(A) = \\{\\mathbf{0}\\}$이면 $\\det A \\neq 0$입니다.",
        "$\\det A \\neq 0$이면 $A$는 가역입니다.",
        "가역 행렬은 $\\mathbf{x} = A^{-1}\\mathbf{b}$라는 유일한 해를 줍니다."
      ],
      "explanation": "$\\mathrm{Null}(A) = \\{\\mathbf{0}\\}$이면 $A$의 열벡터가 일차독립이고, 정사각행렬이므로 $\\det A \\neq 0$입니다. 따라서 역행렬이 존재하고, 모든 $\\mathbf{b}$에 대해 유일한 해 $\\mathbf{x} = A^{-1}\\mathbf{b}$가 존재합니다.",
      "wrongAnalysis": "'영공간이 자명하면 해가 없다'고 착각하는 실수가 있습니다. 영공간이 자명하다는 것은 오히려 행렬이 가역이라는 뜻이며, 해의 존재와 유일성을 모두 보장합니다."
    },
    {
      "id": "8-4",
      "type": "choice",
      "difficulty": 1,
      "question": "다음 중 $\\mathbb{R}^3$의 부분공간인 것은?",
      "choices": [
        "$\\{(x, y, z) \\mid x + y + z = 1\\}$",
        "$\\{(x, y, z) \\mid z = 0\\}$",
        "$\\{(x, y, z) \\mid x > 0\\}$",
        "$\\{(1, 0, 0)\\}$"
      ],
      "answer": "$\\{(x, y, z) \\mid z = 0\\}$",
      "hints": [
        "부분공간은 $\\mathbf{0}$을 포함해야 합니다.",
        "$z = 0$인 집합은 $xy$-평면이며, $(0,0,0)$을 포함합니다."
      ],
      "explanation": "$\\{(x,y,z) \\mid z = 0\\}$은 $xy$-평면으로, $\\mathbf{0}$을 포함하고 합과 스칼라곱에 닫혀 있는 부분공간입니다. 다른 보기들은 $\\mathbf{0}$을 포함하지 않거나 닫힘 조건을 만족하지 않습니다.",
      "wrongAnalysis": "$\\{(1,0,0)\\}$은 하나의 점이므로 부분공간이 아닙니다. 스칼라곱에 닫혀 있지 않습니다."
    },
    {
      "id": "8-5",
      "type": "text",
      "difficulty": 2,
      "question": "벡터 $(1, 2, 3)$과 $(2, 4, 6)$의 $\\mathrm{span}$의 차원은?",
      "answer": "1",
      "hints": [
        "$(2, 4, 6) = 2(1, 2, 3)$인지 확인하세요.",
        "한 벡터가 다른 벡터의 스칼라배이면 일차종속입니다."
      ],
      "explanation": "$(2,4,6) = 2(1,2,3)$이므로 일차종속입니다. span은 $(1,2,3)$의 스칼라배 전체, 즉 1차원 직선입니다.",
      "wrongAnalysis": "벡터가 2개이므로 span의 차원이 $2$라고 답하는 실수가 있습니다. 일차종속이면 차원이 줄어듭니다."
    }
  ],
  "summary": {
    "keyPoints": [
      "벡터 공간: 합과 스칼라곱에 닫힌 집합 (공리 만족)",
      "부분공간 판별: $\\mathbf{0}$ 포함 + 합/스칼라곱 닫힘",
      "$\\mathrm{Col}(A)$와 $\\mathrm{Null}(A)$는 행렬의 핵심 부분공간"
    ],
    "formulas": [
      "\\mathrm{span}(\\mathbf{v}_1, \\ldots, \\mathbf{v}_k) = \\{\\sum c_i \\mathbf{v}_i\\}",
      "\\mathrm{Null}(A) = \\{\\mathbf{x} \\mid A\\mathbf{x} = \\mathbf{0}\\}",
      "\\mathrm{Col}(A) = \\{A\\mathbf{x} \\mid \\mathbf{x} \\in \\mathbb{R}^n\\}"
    ],
    "commonMistakes": [
      "원점을 지나지 않는 직선/평면을 부분공간으로 착각하는 실수",
      "일차독립과 직교를 혼동하는 실수",
      "$\\mathrm{Null}(A) = \\{\\mathbf{0}\\}$을 '해 없음'으로 착각하는 실수"
    ],
    "nextConnection": "벡터 공간의 구조를 더 정밀하게 기술하기 위해 '기저'와 '차원'의 개념을 도입합니다. 그리고 행렬의 계수(rank)와 퇴화차수(nullity) 사이의 아름다운 관계를 발견합니다."
  }
},
{
  "id": 9,
  "title": "기저와 차원",
  "category": "선형대수",
  "level": "고급",
  "question": "벡터 공간을 '가장 효율적으로' 나타내는 벡터 집합은 무엇이고, 그 개수는 어떤 의미를 가지는가?",
  "concept": {
    "intro": ":::definition[개념 정의]\n**기저(basis)**는 벡터 공간을 생성하면서(span) 일차독립인 벡터들의 집합입니다. 기저는 공간을 표현하는 '최소한의 재료'입니다. 같은 벡터 공간에 대해 기저는 여러 개 있을 수 있지만, 기저에 포함된 벡터의 개수는 항상 같습니다. 이 개수가 **차원(dimension)**입니다.\n:::\n\n:::note[참고]\n예를 들어, $\\mathbb{R}^2$의 표준 기저는 $\\{(1,0), (0,1)\\}$이고 차원은 $2$입니다. $\\{(1,1), (1,-1)\\}$도 $\\mathbb{R}^2$의 기저이며 역시 $2$개입니다.\n:::\n\n:::note[참고]\n**계수(rank)**: 행렬 $A$의 열공간의 차원, 즉 $\\mathrm{rank}(A) = \\dim(\\mathrm{Col}(A))$. RREF에서 피벗 열의 개수와 같습니다.\n**퇴화차수(nullity)**: 영공간의 차원, 즉 $\\mathrm{nullity}(A) = \\dim(\\mathrm{Null}(A))$. 자유 변수의 개수와 같습니다.\n:::\n\n:::note[참고]\n**계수-퇴화차수 정리(Rank-Nullity Theorem)**: $m \\times n$ 행렬 $A$에 대해 $\\mathrm{rank}(A) + \\mathrm{nullity}(A) = n$ (열의 수). 이 정리는 '열의 수 = 피벗 변수 + 자유 변수'라는 직관적 사실의 정밀한 표현입니다.\n:::\n\n:::note[참고]\n**기저 변환**: 같은 벡터를 다른 기저로 표현하면 좌표가 달라집니다. 기저 $B$에서 기저 $B'$로의 좌표 변환은 전이 행렬을 사용합니다.\n:::",
    "intuition": ":::note[직관]\n기저는 '좌표계를 세우는 축'입니다. $\\mathbb{R}^3$에서 3개의 일차독립 벡터를 잡으면 공간의 모든 점을 좌표로 나타낼 수 있습니다. 축이 $2$개이면 평면만, $1$개이면 직선만 표현합니다. 차원은 곧 '자유도'입니다.\n\n계수-퇴화차수 정리는 '입력의 자유도 = 출력이 차지하는 차원 + 영공간이 삼키는 차원'이라는 뜻입니다.\n:::",
    "formula": "\\text{기저: 일차독립이면서 공간을 생성하는 벡터 집합}\n\\dim(V) = \\text{기저 벡터의 개수}\n\\mathrm{rank}(A) + \\mathrm{nullity}(A) = n\\ (\\text{열의 수})",
    "summary": ":::note[핵심 요약]\n• 기저 $=$ 일차독립 + 생성, 차원 $=$ 기저의 크기\n• $\\mathrm{rank}(A)$ $=$ 피벗 수, $\\mathrm{nullity}(A)$ $=$ 자유 변수 수\n• Rank-Nullity: $\\mathrm{rank} + \\mathrm{nullity} = n$\n• 기저 변환으로 같은 벡터의 좌표가 달라진다\n:::"
  },
  "examples": [
    {
      "title": "Rank-Nullity 정리 활용",
      "problem": "$3 \\times 4$ 행렬 $A$의 $\\mathrm{rank}(A) = 2$일 때, $\\mathrm{nullity}(A)$와 $A\\mathbf{x} = \\mathbf{0}$의 해 공간의 차원을 구하시오.",
      "steps": [
        "Rank-Nullity 정리: $\\mathrm{rank}(A) + \\mathrm{nullity}(A) = n = 4$ (열의 수).",
        "$2 + \\mathrm{nullity}(A) = 4$.",
        "$\\mathrm{nullity}(A) = 2$.",
        "$A\\mathbf{x} = \\mathbf{0}$의 해 공간은 $2$차원이므로, 자유 변수가 $2$개이고 기저 벡터 $2$개로 표현됩니다."
      ],
      "answer": "$\\mathrm{nullity}(A) = 2$",
      "lesson": "Rank-Nullity 정리는 행렬의 '효율성'을 측정합니다. rank가 높을수록 변환이 더 많은 차원을 보존하고, nullity가 높을수록 더 많은 정보가 손실됩니다."
    },
    {
      "title": "[기본] 기저 판별",
      "problem": "$\\{(1, 1), (1, -1)\\}$ 이 $\\mathbb{R}^2$의 기저인지 판별하시오.",
      "steps": [
        "일차독립 확인: $(1, -1) \\neq c(1, 1)$ (어떤 $c$에도 성립 불가). ✓",
        "생성 확인: $\\mathbb{R}^2$에서 벡터 $2$개가 일차독립이면 자동으로 $\\mathbb{R}^2$를 생성. ✓",
        "따라서 기저입니다."
      ],
      "answer": "$\\mathbb{R}^2$의 기저이다.",
      "lesson": "$n$차원 공간에서 $n$개의 일차독립 벡터는 항상 기저입니다. 생성도 자동으로 보장됩니다."
    },
    {
      "title": "[응용] RREF로 rank 구하기",
      "problem": "$A = \\begin{pmatrix}1 & 2 & 3 \\\\ 4 & 5 & 6 \\\\ 7 & 8 & 9\\end{pmatrix}$ 의 rank를 구하시오.",
      "steps": [
        "$R_2 \\leftarrow R_2 - 4R_1$, $R_3 \\leftarrow R_3 - 7R_1$: $\\begin{pmatrix}1 & 2 & 3 \\\\ 0 & -3 & -6 \\\\ 0 & -6 & -12\\end{pmatrix}$.",
        "$R_3 \\leftarrow R_3 - 2R_2$: $\\begin{pmatrix}1 & 2 & 3 \\\\ 0 & -3 & -6 \\\\ 0 & 0 & 0\\end{pmatrix}$.",
        "피벗 수 $= 2$이므로 $\\mathrm{rank}(A) = 2$."
      ],
      "answer": "$\\mathrm{rank}(A) = 2$",
      "lesson": "이 행렬의 세 번째 행은 처음 두 행의 일차결합입니다 ($R_3 = 2R_2 - R_1$). 따라서 독립인 행은 2개뿐이고 rank는 2입니다."
    },
    {
      "title": "[응용] 좌표 벡터 구하기",
      "problem": "기저 $B = \\{(1, 1), (1, -1)\\}$에 대한 벡터 $(3, 1)$의 좌표 벡터 $[\\mathbf{v}]_B$를 구하시오.",
      "steps": [
        "$c_1(1, 1) + c_2(1, -1) = (3, 1)$을 풀면: $c_1 + c_2 = 3$, $c_1 - c_2 = 1$.",
        "두 식을 더하면 $2c_1 = 4$, $c_1 = 2$.",
        "$c_2 = 3 - 2 = 1$.",
        "$[\\mathbf{v}]_B = (2, 1)$."
      ],
      "answer": "$[\\mathbf{v}]_B = (2, 1)$",
      "lesson": "좌표 벡터는 기저에 대한 일차결합의 계수입니다. 기저가 바뀌면 같은 벡터의 좌표도 달라집니다."
    },
    {
      "title": "[심화] Rank-Nullity로 해의 구조 파악",
      "problem": "$4 \\times 6$ 행렬 $A$의 $\\mathrm{rank} = 3$일 때, $A\\mathbf{x} = \\mathbf{b}$의 해가 존재하면 해 공간의 구조를 설명하시오.",
      "steps": [
        "Rank-Nullity: $\\mathrm{nullity}(A) = 6 - 3 = 3$.",
        "영공간의 기저 벡터가 $3$개이므로, 해가 존재하면 자유 변수가 $3$개.",
        "일반해 $= $ 특수해 $+ $ 영공간의 일차결합.",
        "해 집합은 $\\mathbb{R}^6$ 안의 $3$차원 아핀 부분공간(평행 이동된 부분공간)."
      ],
      "answer": "해 존재 시, 해 집합은 특수해를 지나는 $3$차원 아핀 부분공간",
      "lesson": "비동차 방정식의 해 집합은 영공간을 평행 이동한 것입니다. 자유 변수의 수가 곧 해 공간의 '자유도(차원)'입니다."
    }
  ],
  "problems": [
    {
      "id": "9-1",
      "type": "number",
      "difficulty": 1,
      "question": "$\\mathbb{R}^3$의 차원은?",
      "answer": "3",
      "hints": [
        "표준 기저를 생각해 보세요.",
        "$\\{(1,0,0), (0,1,0), (0,0,1)\\}$.",
        "기저 벡터가 몇 개인가요?"
      ],
      "explanation": "$\\mathbb{R}^3$의 표준 기저는 $\\{\\mathbf{e}_1, \\mathbf{e}_2, \\mathbf{e}_3\\}$로 $3$개이므로 차원은 $3$입니다.",
      "wrongAnalysis": "벡터의 성분 개수와 차원을 혼동하는 실수는 없지만, $\\mathbb{R}^n$의 차원이 $n$이라는 사실이 자명하게 느껴질 수 있습니다. 중요한 것은 부분공간의 차원이 $n$보다 작을 수 있다는 점입니다."
    },
    {
      "id": "9-2",
      "type": "number",
      "difficulty": 2,
      "question": "$5 \\times 7$ 행렬 $A$의 $\\mathrm{rank}$가 $3$일 때, $\\mathrm{nullity}(A)$는?",
      "answer": "4",
      "hints": [
        "Rank-Nullity 정리: $\\mathrm{rank} + \\mathrm{nullity} = $ 열의 수.",
        "열의 수 $= 7$.",
        "$3 + \\mathrm{nullity} = 7$."
      ],
      "explanation": "$\\mathrm{rank}(A) + \\mathrm{nullity}(A) = 7$이므로 $\\mathrm{nullity}(A) = 7 - 3 = 4$. 자유 변수가 $4$개이므로 $A\\mathbf{x} = \\mathbf{0}$의 해 공간은 $4$차원입니다.",
      "wrongAnalysis": "행의 수 $5$를 사용하여 $5 - 3 = 2$라고 답하는 실수가 흔합니다. Rank-Nullity 정리에서 사용하는 것은 행이 아니라 열의 수입니다."
    },
    {
      "id": "9-3",
      "type": "choice",
      "difficulty": 3,
      "question": "$\\mathbb{R}^3$ 안에서 두 일차독립 벡터가 생성하는 부분공간의 차원은?",
      "choices": [
        "$1$",
        "$2$",
        "$3$",
        "결정할 수 없다"
      ],
      "answer": "$2$",
      "hints": [
        "일차독립 벡터 $2$개의 span은 몇 차원일까요?",
        "기저의 정의를 떠올려 보세요.",
        "일차독립이면서 생성하는 집합 = 기저."
      ],
      "explanation": "두 벡터가 일차독립이면 이들의 span은 $2$차원 부분공간(평면)입니다. 이 두 벡터가 바로 그 부분공간의 기저이므로 차원은 $2$입니다.",
      "wrongAnalysis": "'$\\mathbb{R}^3$ 안이니까 차원이 $3$'이라고 답하는 실수가 있습니다. 부분공간의 차원은 전체 공간의 차원보다 작거나 같습니다."
    },
    {
      "id": "9-4",
      "type": "choice",
      "difficulty": 1,
      "question": "$\\{(1, 0), (0, 1)\\}$은 $\\mathbb{R}^2$의 기저인가?",
      "choices": [
        "기저이다",
        "기저가 아니다 — 일차종속이므로",
        "기저가 아니다 — $\\mathbb{R}^2$를 생성하지 못하므로",
        "판단할 수 없다"
      ],
      "answer": "기저이다",
      "hints": [
        "두 벡터가 일차독립인지 확인하세요.",
        "이 두 벡터로 $\\mathbb{R}^2$의 모든 벡터를 표현할 수 있나요?"
      ],
      "explanation": "$(1,0)$과 $(0,1)$은 일차독립이고, 임의의 $(a,b) = a(1,0) + b(0,1)$로 표현 가능하므로 $\\mathbb{R}^2$를 생성합니다. 따라서 기저입니다.",
      "wrongAnalysis": "벡터 개수가 적어서 생성하지 못한다고 착각하는 실수가 있습니다. $\\mathbb{R}^n$에서 $n$개의 일차독립 벡터는 항상 기저입니다."
    },
    {
      "id": "9-5",
      "type": "number",
      "difficulty": 2,
      "question": "$4 \\times 5$ 행렬 $A$의 RREF에서 피벗이 $2$개일 때, $\\mathrm{nullity}(A)$는?",
      "answer": "3",
      "hints": [
        "$\\mathrm{rank}(A) = $ 피벗 수 $= 2$.",
        "Rank-Nullity: $\\mathrm{rank} + \\mathrm{nullity} = $ 열의 수 $= 5$."
      ],
      "explanation": "$\\mathrm{rank}(A) = 2$, $\\mathrm{nullity}(A) = 5 - 2 = 3$. 자유 변수가 $3$개입니다.",
      "wrongAnalysis": "행의 수 $4$를 사용하여 $4 - 2 = 2$로 답하는 실수가 있습니다. Rank-Nullity에서 사용하는 것은 열의 수입니다."
    }
  ],
  "summary": {
    "keyPoints": [
      "기저는 공간을 생성하는 일차독립 집합, 차원은 기저의 크기",
      "Rank-Nullity 정리: $\\mathrm{rank}(A) + \\mathrm{nullity}(A) = n$",
      "같은 공간의 모든 기저는 같은 수의 벡터를 가진다"
    ],
    "formulas": [
      "\\dim(V) = |\\text{기저}|",
      "\\mathrm{rank}(A) + \\mathrm{nullity}(A) = n",
      "\\mathrm{rank}(A) = \\text{RREF에서 피벗 열의 수}"
    ],
    "commonMistakes": [
      "Rank-Nullity에서 열의 수 대신 행의 수를 사용하는 실수",
      "부분공간의 차원을 전체 공간의 차원과 혼동하는 실수",
      "일차종속 벡터를 포함한 집합을 기저라고 착각하는 실수"
    ],
    "nextConnection": "선형대수의 핵심 도구를 모두 갖추었습니다. 이제 여러 변수를 입력받는 함수인 다변수 함수의 세계로 들어갑니다. 그래디언트, 행렬, 고윳값이 다시 등장할 것입니다."
  }
},
{
  "id": 10,
  "title": "가우스-조르당 소거법과 RREF",
  "category": "행렬과 연립방정식",
  "level": "중급",
  "question": "행 사다리꼴을 넘어서 기약 행 사다리꼴(RREF)까지 변환하면 어떤 이점이 있을까?",
  "concept": {
    "intro": ":::definition[개념 정의]\n가우스 소거법은 첨가행렬을 행 사다리꼴(REF)로 만들어 후진 대입으로 해를 구했습니다. **가우스-조르당 소거법(Gauss-Jordan elimination)**은 여기서 한 걸음 더 나아가, 각 피벗을 $1$로 만들고 피벗 위의 성분까지 모두 $0$으로 소거하여 **기약 행 사다리꼴(reduced row echelon form, RREF)**을 얻습니다. RREF에서는 후진 대입 없이 해를 바로 읽을 수 있습니다.\n:::\n\n:::note[참고]\nRREF의 조건은 네 가지입니다: (1) 모든 영행은 맨 아래, (2) 각 비영행의 첫 번째 $0$이 아닌 성분(피벗)은 $1$, (3) 피벗은 위 행의 피벗보다 오른쪽에 위치, (4) 각 피벗 열에서 피벗을 제외한 모든 성분은 $0$. 중요한 사실은 **모든 행렬의 RREF는 유일**하다는 것입니다. 행 연산의 순서가 달라도 최종 RREF는 같습니다.\n:::\n\n:::note[참고]\nRREF의 강력한 응용 중 하나는 **역행렬 계산**입니다. $n \\times n$ 행렬 $A$에 단위행렬 $I$를 붙여 $[A \\mid I]$를 만든 뒤, 행 연산으로 왼쪽을 RREF로 변환합니다. $A$가 가역이면 왼쪽이 $I$가 되고 오른쪽이 $A^{-1}$이 됩니다: $[A \\mid I] \\to [I \\mid A^{-1}]$.\n:::\n\n:::note[참고]\n$A\\mathbf{x} = \\mathbf{b}$의 해를 RREF로 구하면, 피벗 변수는 자유 변수의 식으로 표현되어 **매개변수 해(parametric solution)**를 체계적으로 얻을 수 있습니다. 피벗이 없는 열에 대응하는 변수가 자유 변수입니다.\n:::",
    "intuition": ":::note[직관]\nREF가 '계단을 반만 만든 것'이라면, RREF는 '완전한 대각 형태'에 가깝게 정리한 것입니다. 후진 대입이라는 추가 작업 없이 답이 바로 보이는 가장 깔끔한 형태입니다. 역행렬 계산도 $[A \\mid I]$에서 시작하여 RREF까지 밀어붙이면 자동으로 나옵니다.\n:::",
    "formula": "\\text{RREF 조건: (1) 영행은 맨 아래, (2) 피벗} = 1, \\text{(3) 피벗 위치 오른쪽 이동, (4) 피벗 열의 나머지} = 0\n[A \\mid I] \\xrightarrow{\\text{행 연산}} [I \\mid A^{-1}]\n\\text{RREF는 유일하다}",
    "summary": ":::note[핵심 요약]\n• RREF: 피벗 $= 1$이고 피벗 위아래 모두 $0$\n• 후진 대입 없이 해를 바로 읽음\n• $[A \\mid I] \\to [I \\mid A^{-1}]$으로 역행렬 계산\n• 모든 행렬의 RREF는 유일\n:::"
  },
  "examples": [
    {
      "title": "RREF를 이용한 역행렬 계산",
      "problem": "$A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 7 \\end{pmatrix}$의 역행렬을 $[A \\mid I] \\to [I \\mid A^{-1}]$ 방법으로 구하시오.",
      "steps": [
        "$[A \\mid I] = \\begin{pmatrix} 1 & 2 & | & 1 & 0 \\\\ 3 & 7 & | & 0 & 1 \\end{pmatrix}$.",
        "$R_2 \\leftarrow R_2 - 3R_1$: $\\begin{pmatrix} 1 & 2 & | & 1 & 0 \\\\ 0 & 1 & | & -3 & 1 \\end{pmatrix}$.",
        "$R_1 \\leftarrow R_1 - 2R_2$: $\\begin{pmatrix} 1 & 0 & | & 7 & -2 \\\\ 0 & 1 & | & -3 & 1 \\end{pmatrix}$.",
        "왼쪽이 $I$이므로 오른쪽이 $A^{-1} = \\begin{pmatrix} 7 & -2 \\\\ -3 & 1 \\end{pmatrix}$."
      ],
      "answer": "$A^{-1} = \\begin{pmatrix} 7 & -2 \\\\ -3 & 1 \\end{pmatrix}$",
      "lesson": "가우스-조르당 소거법으로 역행렬을 구하는 방법은 크기에 상관없이 적용됩니다. $2 \\times 2$ 공식이 없는 큰 행렬에서도 체계적으로 역행렬을 찾을 수 있습니다."
    },
    {
      "title": "[기본] RREF로 연립방정식 풀기",
      "problem": "$\\begin{cases} x + y = 5 \\\\ 2x + 3y = 13 \\end{cases}$ 를 RREF를 이용하여 풀어라.",
      "steps": [
        "첨가행렬: $\\begin{pmatrix}1 & 1 & | & 5 \\\\ 2 & 3 & | & 13\\end{pmatrix}$.",
        "$R_2 \\leftarrow R_2 - 2R_1$: $\\begin{pmatrix}1 & 1 & | & 5 \\\\ 0 & 1 & | & 3\\end{pmatrix}$.",
        "$R_1 \\leftarrow R_1 - R_2$: $\\begin{pmatrix}1 & 0 & | & 2 \\\\ 0 & 1 & | & 3\\end{pmatrix}$. RREF 도달.",
        "바로 읽기: $x = 2$, $y = 3$."
      ],
      "answer": "$x = 2,\\ y = 3$",
      "lesson": "RREF에서는 후진 대입 없이 해를 바로 읽을 수 있습니다. REF에서 한 단계 더 소거하는 것뿐입니다."
    },
    {
      "title": "[응용] RREF에서 자유 변수 읽기",
      "problem": "첨가행렬의 RREF가 $\\begin{pmatrix}1 & 0 & 2 & | & 3 \\\\ 0 & 1 & -1 & | & 4 \\\\ 0 & 0 & 0 & | & 0\\end{pmatrix}$ 일 때 해를 구하시오.",
      "steps": [
        "피벗 열: 1열, 2열. 자유 변수: $x_3 = t$.",
        "피벗 변수: $x_1 = 3 - 2t$, $x_2 = 4 + t$.",
        "일반해: $(x_1, x_2, x_3) = (3 - 2t,\\ 4 + t,\\ t) = (3, 4, 0) + t(-2, 1, 1)$."
      ],
      "answer": "$(x_1, x_2, x_3) = (3, 4, 0) + t(-2, 1, 1)$",
      "lesson": "RREF에서 피벗이 없는 열이 자유 변수입니다. 해를 '특수해 + 영공간의 일차결합'으로 분해하면 해의 구조가 명확합니다."
    },
    {
      "title": "[응용] 역행렬 존재 판별",
      "problem": "$A = \\begin{pmatrix}1 & 2 \\\\ 2 & 4\\end{pmatrix}$ 의 역행렬이 존재하는지 $[A \\mid I]$ 방법으로 판별하시오.",
      "steps": [
        "$[A \\mid I] = \\begin{pmatrix}1 & 2 & | & 1 & 0 \\\\ 2 & 4 & | & 0 & 1\\end{pmatrix}$.",
        "$R_2 \\leftarrow R_2 - 2R_1$: $\\begin{pmatrix}1 & 2 & | & 1 & 0 \\\\ 0 & 0 & | & -2 & 1\\end{pmatrix}$.",
        "왼쪽을 $I$로 만들 수 없으므로 역행렬이 존재하지 않습니다."
      ],
      "answer": "역행렬 존재하지 않음 ($\\det A = 0$)",
      "lesson": "$[A \\mid I]$를 소거할 때 왼쪽에 영행이 나타나면 $A$는 비가역(singular)입니다. 이는 $\\det A = 0$과 동치입니다."
    },
    {
      "title": "[심화] $3 \\times 3$ 역행렬 계산",
      "problem": "$A = \\begin{pmatrix}1 & 0 & 1 \\\\ 0 & 1 & 0 \\\\ 1 & 0 & 2\\end{pmatrix}$ 의 역행렬을 가우스-조르당 소거법으로 구하시오.",
      "steps": [
        "$[A \\mid I] = \\begin{pmatrix}1 & 0 & 1 & | & 1 & 0 & 0 \\\\ 0 & 1 & 0 & | & 0 & 1 & 0 \\\\ 1 & 0 & 2 & | & 0 & 0 & 1\\end{pmatrix}$.",
        "$R_3 \\leftarrow R_3 - R_1$: $\\begin{pmatrix}1 & 0 & 1 & | & 1 & 0 & 0 \\\\ 0 & 1 & 0 & | & 0 & 1 & 0 \\\\ 0 & 0 & 1 & | & -1 & 0 & 1\\end{pmatrix}$.",
        "$R_1 \\leftarrow R_1 - R_3$: $\\begin{pmatrix}1 & 0 & 0 & | & 2 & 0 & -1 \\\\ 0 & 1 & 0 & | & 0 & 1 & 0 \\\\ 0 & 0 & 1 & | & -1 & 0 & 1\\end{pmatrix}$.",
        "$A^{-1} = \\begin{pmatrix}2 & 0 & -1 \\\\ 0 & 1 & 0 \\\\ -1 & 0 & 1\\end{pmatrix}$."
      ],
      "answer": "$A^{-1} = \\begin{pmatrix}2 & 0 & -1 \\\\ 0 & 1 & 0 \\\\ -1 & 0 & 1\\end{pmatrix}$",
      "lesson": "가우스-조르당 소거법은 $2 \\times 2$ 공식이 없는 큰 행렬에서 역행렬을 체계적으로 구하는 유일한 방법입니다. $AA^{-1} = I$로 반드시 검산하세요."
    }
  ],
  "problems": [
    {
      "id": "10-1",
      "type": "choice",
      "difficulty": 1,
      "question": "다음 중 RREF인 행렬은?",
      "choices": [
        "$\\begin{pmatrix} 1 & 0 & 3 \\\\ 0 & 1 & 2 \\end{pmatrix}$",
        "$\\begin{pmatrix} 1 & 2 & 0 \\\\ 0 & 0 & 1 \\end{pmatrix}$",
        "$\\begin{pmatrix} 1 & 2 \\\\ 0 & 3 \\end{pmatrix}$",
        "$\\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}$"
      ],
      "answer": "$\\begin{pmatrix} 1 & 0 & 3 \\\\ 0 & 1 & 2 \\end{pmatrix}$",
      "hints": [
        "RREF에서 피벗은 $1$이어야 하고, 피벗 열의 다른 성분은 모두 $0$이어야 합니다.",
        "세 번째 보기에서 두 번째 피벗이 $3$이므로 RREF가 아닙니다.",
        "첫 번째 보기를 확인해 보세요."
      ],
      "explanation": "첫 번째 보기: 피벗이 모두 $1$이고, 피벗 열(1열, 2열)에서 피벗 외 성분이 $0$입니다. 3열은 피벗이 없는 자유 변수 열이므로 값이 있어도 됩니다. 세 번째 보기는 피벗이 $3$이어서 RREF가 아닙니다. 네 번째 보기는 피벗 위치가 올바르지 않습니다.",
      "wrongAnalysis": "자유 변수 열에 $0$이 아닌 값이 있으면 RREF가 아니라고 착각하는 실수가 있습니다. RREF 조건은 '피벗 열'에서만 $0$을 요구합니다."
    },
    {
      "id": "10-2",
      "type": "text",
      "difficulty": 2,
      "question": "$[A \\mid I] = \\begin{pmatrix} 2 & 4 & | & 1 & 0 \\\\ 1 & 3 & | & 0 & 1 \\end{pmatrix}$ 에서 가우스-조르당 소거법으로 구한 $A^{-1}$의 $(1,1)$ 성분은? (분수 허용, 예: 3/2)",
      "answer": "3/2",
      "hints": [
        "$R_1 \\leftrightarrow R_2$로 행을 교환하거나, $R_1 \\leftarrow \\frac{1}{2}R_1$으로 시작하세요.",
        "$\\det A = 2 \\cdot 3 - 4 \\cdot 1 = 2$이므로 $A^{-1} = \\frac{1}{2}\\begin{pmatrix} 3 & -4 \\\\ -1 & 2 \\end{pmatrix}$.",
        "$(1,1)$ 성분은 $\\frac{3}{2}$입니다."
      ],
      "explanation": "$A = \\begin{pmatrix} 2 & 4 \\\\ 1 & 3 \\end{pmatrix}$, $\\det A = 6 - 4 = 2$. $A^{-1} = \\frac{1}{2}\\begin{pmatrix} 3 & -4 \\\\ -1 & 2 \\end{pmatrix}$. 따라서 $(1,1)$ 성분은 $\\frac{3}{2}$입니다.",
      "wrongAnalysis": "$\\det A = 2$를 분모로 나누는 것을 잊고 $3$이라 답하는 실수가 흔합니다. 역행렬 공식에서 $\\frac{1}{\\det A}$를 반드시 곱해야 합니다."
    },
    {
      "id": "10-3",
      "type": "text",
      "difficulty": 3,
      "question": "$\\begin{cases} x + 2y + z = 4 \\\\ 2x + 5y + 3z = 10 \\\\ x + 3y + 2z = 7 \\end{cases}$의 RREF를 구하면 자유 변수는 어떤 변수인가? ($x$, $y$, $z$ 중 택)",
      "answer": "z",
      "hints": [
        "첨가행렬에 가우스-조르당 소거법을 적용하세요.",
        "$R_2 \\leftarrow R_2 - 2R_1$, $R_3 \\leftarrow R_3 - R_1$ 후 계속 소거합니다.",
        "RREF에서 피벗이 없는 열에 해당하는 변수가 자유 변수입니다."
      ],
      "explanation": "첨가행렬 $\\begin{pmatrix} 1 & 2 & 1 & | & 4 \\\\ 2 & 5 & 3 & | & 10 \\\\ 1 & 3 & 2 & | & 7 \\end{pmatrix}$에 $R_2 - 2R_1$, $R_3 - R_1$을 적용하면 $\\begin{pmatrix} 1 & 2 & 1 & | & 4 \\\\ 0 & 1 & 1 & | & 2 \\\\ 0 & 1 & 1 & | & 3 \\end{pmatrix}$. $R_3 - R_2$를 하면 $\\begin{pmatrix} 1 & 2 & 1 & | & 4 \\\\ 0 & 1 & 1 & | & 2 \\\\ 0 & 0 & 0 & | & 1 \\end{pmatrix}$. 마지막 행이 $0 = 1$이므로 실제로는 해가 없습니다. 그러나 만약 우변이 달라 모순이 없었다면 $z$열에 피벗이 없으므로 $z$가 자유 변수가 됩니다. RREF에서 피벗 열 판별이 핵심입니다.",
      "wrongAnalysis": "RREF에서 피벗이 있는 열과 없는 열을 구분하지 않고, 마지막 변수를 무조건 자유 변수로 지정하는 실수가 있습니다. 반드시 소거 후 피벗 위치를 확인해야 합니다."
    },
    {
      "id": "10-4",
      "type": "choice",
      "difficulty": 1,
      "question": "RREF에서 피벗의 값은 항상 무엇인가?",
      "choices": [
        "$0$",
        "$1$",
        "임의의 양수",
        "임의의 실수"
      ],
      "answer": "$1$",
      "hints": [
        "RREF의 정의를 떠올려 보세요.",
        "각 비영행의 첫 번째 $0$이 아닌 성분(피벗)은 무엇이어야 하나요?"
      ],
      "explanation": "RREF의 네 가지 조건 중 하나는 각 피벗이 $1$이어야 한다는 것입니다. REF에서는 피벗이 $1$일 필요가 없지만, RREF에서는 반드시 $1$입니다.",
      "wrongAnalysis": "REF와 RREF를 혼동하여 피벗이 임의의 수가 될 수 있다고 답하는 실수가 있습니다."
    },
    {
      "id": "10-5",
      "type": "number",
      "difficulty": 2,
      "question": "$A = \\begin{pmatrix} 1 & 3 \\\\ 2 & 7 \\end{pmatrix}$의 역행렬 $A^{-1}$의 $(2,2)$ 성분은?",
      "answer": "1",
      "hints": [
        "$\\det A = 1 \\cdot 7 - 3 \\cdot 2 = 1$.",
        "$A^{-1} = \\frac{1}{1}\\begin{pmatrix} 7 & -3 \\\\ -2 & 1 \\end{pmatrix}$."
      ],
      "explanation": "$\\det A = 7 - 6 = 1$. $A^{-1} = \\begin{pmatrix} 7 & -3 \\\\ -2 & 1 \\end{pmatrix}$. $(2,2)$ 성분은 $1$.",
      "wrongAnalysis": "역행렬 공식에서 대각 성분을 교환하고 비대각에 마이너스를 붙이는 순서를 혼동하는 실수가 있습니다."
    }
  ],
  "summary": {
    "keyPoints": [
      "RREF: 피벗 $= 1$, 피벗 열의 나머지 모두 $0$",
      "$[A \\mid I] \\to [I \\mid A^{-1}]$로 역행렬 계산 가능",
      "RREF는 유일하며, 후진 대입 없이 해를 바로 읽을 수 있다"
    ],
    "formulas": [
      "[A \\mid I] \\xrightarrow{\\text{행 연산}} [I \\mid A^{-1}]",
      "\\text{RREF는 유일}",
      "\\text{자유 변수 = 피벗이 없는 열의 변수}"
    ],
    "commonMistakes": [
      "REF에서 멈추고 RREF까지 진행하지 않는 실수",
      "피벗을 $1$로 만드는 것을 잊는 실수",
      "자유 변수 열에 값이 있으면 RREF가 아니라고 착각하는 실수"
    ],
    "nextConnection": "행렬식을 더 체계적으로 계산하는 방법으로, 소행렬식을 이용한 여인수 전개와 크라메르 공식이 있습니다. 다음 단원에서 다룹니다."
  }
},
{
  "id": 11,
  "title": "크라메르 공식·소행렬식·수반행렬",
  "category": "행렬식",
  "level": "중급",
  "question": "행렬식을 체계적으로 전개하고, 이를 이용해 연립방정식의 해를 공식으로 표현할 수 있을까?",
  "concept": {
    "intro": ":::definition[개념 정의]\n행렬 $A$의 $(i,j)$ **소행렬식(minor)** $M_{ij}$는 $A$에서 $i$행과 $j$열을 제거한 부분행렬의 행렬식입니다. 여기에 부호를 붙인 것이 **여인수(cofactor)** $C_{ij} = (-1)^{i+j} M_{ij}$입니다. 부호 패턴은 체스판처럼 $+, -, +, -, \\ldots$로 교대합니다.\n:::\n\n:::note[참고]\n행렬식은 임의의 행이나 열을 따라 **여인수 전개(cofactor expansion, 라플라스 전개)**로 계산할 수 있습니다. $i$행을 따른 전개: $\\det A = \\sum_{j=1}^{n} a_{ij} C_{ij} = \\sum_{j=1}^{n} a_{ij} (-1)^{i+j} M_{ij}$. $0$이 많은 행이나 열을 선택하면 계산량이 크게 줄어듭니다.\n:::\n\n:::note[참고]\n**크라메르 공식(Cramer's rule)**은 $n \\times n$ 정사각 연립방정식 $A\\mathbf{x} = \\mathbf{b}$에서 $\\det A \\neq 0$일 때 해를 행렬식의 비로 직접 표현합니다: $x_i = \\frac{\\det A_i}{\\det A}$. 여기서 $A_i$는 $A$의 $i$열을 $\\mathbf{b}$로 교체한 행렬입니다. 이론적으로 아름답지만, $n$이 크면 행렬식 계산이 $O(n!)$이므로 실용성은 떨어집니다.\n:::\n\n:::note[참고]\n**수반행렬(adjugate matrix)** $\\mathrm{adj}(A)$는 여인수 행렬의 전치, 즉 $(\\mathrm{adj}(A))_{ij} = C_{ji}$입니다. 역행렬과의 관계는 $A^{-1} = \\frac{1}{\\det A} \\mathrm{adj}(A)$입니다. 이 공식은 $2 \\times 2$ 역행렬 공식의 일반화이며, 기호 계산이나 이론적 증명에서 유용합니다.\n:::",
    "intuition": ":::note[직관]\n여인수 전개는 큰 행렬식을 작은 행렬식들의 합으로 쪼개는 '분할 정복'입니다. 크라메르 공식은 행렬식이라는 도구 하나만으로 해를 표현하는 닫힌 형태(closed form)를 줍니다. 실제 수치 계산에서는 가우스 소거법이 훨씬 빠르지만, 이론적 추론과 소규모 문제에서는 매우 유용합니다.\n:::",
    "formula": "M_{ij}:\\ i\\text{행}, j\\text{열 제거 후 행렬식}\nC_{ij} = (-1)^{i+j} M_{ij}\n\\det A = \\sum_{j=1}^{n} a_{ij} C_{ij}\\ (i\\text{행 전개})\nx_i = \\frac{\\det A_i}{\\det A}\\ (\\text{크라메르 공식})\n\\mathrm{adj}(A) = (C_{ji}),\\quad A^{-1} = \\frac{1}{\\det A} \\mathrm{adj}(A)",
    "summary": ":::note[핵심 요약]\n• 소행렬식 $M_{ij}$, 여인수 $C_{ij} = (-1)^{i+j} M_{ij}$\n• 여인수 전개: 임의의 행/열로 행렬식 계산\n• 크라메르 공식: $x_i = \\det A_i / \\det A$\n• 수반행렬: $A^{-1} = \\mathrm{adj}(A) / \\det A$\n:::"
  },
  "examples": [
    {
      "title": "크라메르 공식으로 연립방정식 풀기",
      "problem": "$\\begin{cases} 2x + y = 5 \\\\ 3x + 4y = 6 \\end{cases}$을 크라메르 공식으로 풀어라.",
      "steps": [
        "$A = \\begin{pmatrix} 2 & 1 \\\\ 3 & 4 \\end{pmatrix}$, $\\det A = 8 - 3 = 5$.",
        "$A_1 = \\begin{pmatrix} 5 & 1 \\\\ 6 & 4 \\end{pmatrix}$, $\\det A_1 = 20 - 6 = 14$.",
        "$A_2 = \\begin{pmatrix} 2 & 5 \\\\ 3 & 6 \\end{pmatrix}$, $\\det A_2 = 12 - 15 = -3$.",
        "$x = \\frac{14}{5},\\quad y = \\frac{-3}{5}$."
      ],
      "answer": "$x = \\frac{14}{5},\\ y = -\\frac{3}{5}$",
      "lesson": "크라메르 공식은 행렬식만 계산하면 되므로 $2 \\times 2$, $3 \\times 3$ 정도에서는 빠르고 깔끔합니다. 그러나 $n$이 커지면 가우스 소거법이 훨씬 효율적입니다."
    },
    {
      "title": "[기본] 여인수 계산",
      "problem": "$A = \\begin{pmatrix}1 & 2 \\\\ 3 & 4\\end{pmatrix}$ 의 여인수 $C_{12}$를 구하시오.",
      "steps": [
        "$M_{12}$: 1행 2열을 제거하면 $(3)$. $M_{12} = 3$.",
        "$C_{12} = (-1)^{1+2} \\cdot M_{12} = (-1)^3 \\cdot 3 = -3$."
      ],
      "answer": "$C_{12} = -3$",
      "lesson": "여인수의 부호 $(-1)^{i+j}$를 잊지 마세요. 체스판 패턴 $+, -, +, \\ldots$으로 외우면 편합니다."
    },
    {
      "title": "[응용] $3 \\times 3$ 행렬식의 여인수 전개",
      "problem": "$A = \\begin{pmatrix}2 & 0 & 1 \\\\ 3 & 1 & 0 \\\\ 1 & 0 & 4\\end{pmatrix}$ 의 행렬식을 2열을 따라 여인수 전개하여 구하시오.",
      "steps": [
        "2열: $a_{12} = 0$, $a_{22} = 1$, $a_{32} = 0$. $0$이 많으므로 효율적.",
        "$\\det A = a_{12}C_{12} + a_{22}C_{22} + a_{32}C_{32} = 0 + 1 \\cdot C_{22} + 0$.",
        "$C_{22} = (-1)^{2+2} \\det\\begin{pmatrix}2 & 1 \\\\ 1 & 4\\end{pmatrix} = +(8 - 1) = 7$.",
        "$\\det A = 7$."
      ],
      "answer": "$\\det A = 7$",
      "lesson": "$0$이 많은 행이나 열을 따라 전개하면 계산량이 크게 줄어듭니다. 전략적인 전개 방향 선택이 중요합니다."
    },
    {
      "title": "[응용] 수반행렬과 역행렬",
      "problem": "$A = \\begin{pmatrix}1 & 2 \\\\ 3 & 5\\end{pmatrix}$ 의 수반행렬 $\\mathrm{adj}(A)$와 역행렬을 구하시오.",
      "steps": [
        "$C_{11} = 5$, $C_{12} = -3$, $C_{21} = -2$, $C_{22} = 1$.",
        "$\\mathrm{adj}(A) = (C_{ji}) = \\begin{pmatrix}5 & -2 \\\\ -3 & 1\\end{pmatrix}$ (여인수 행렬의 전치).",
        "$\\det A = 5 - 6 = -1$.",
        "$A^{-1} = \\dfrac{1}{-1}\\begin{pmatrix}5 & -2 \\\\ -3 & 1\\end{pmatrix} = \\begin{pmatrix}-5 & 2 \\\\ 3 & -1\\end{pmatrix}$."
      ],
      "answer": "$A^{-1} = \\begin{pmatrix}-5 & 2 \\\\ 3 & -1\\end{pmatrix}$",
      "lesson": "수반행렬은 여인수 행렬의 '전치'입니다. $(i,j)$ 위치에 $C_{ji}$가 들어간다는 점에 주의하세요."
    },
    {
      "title": "[심화] 크라메르 공식의 $3 \\times 3$ 적용",
      "problem": "$\\begin{cases} x + 2z = 3 \\\\ y + z = 2 \\\\ x + y + 3z = 5 \\end{cases}$ 에서 $z$를 크라메르 공식으로 구하시오.",
      "steps": [
        "$A = \\begin{pmatrix}1 & 0 & 2 \\\\ 0 & 1 & 1 \\\\ 1 & 1 & 3\\end{pmatrix}$. $\\det A = 1(3-1) - 0 + 2(0-1) = 2 - 2 = 0$... 재계산.",
        "1열 전개: $\\det A = 1 \\cdot \\det\\begin{pmatrix}1 & 1 \\\\ 1 & 3\\end{pmatrix} - 0 + 1 \\cdot \\det\\begin{pmatrix}0 & 2 \\\\ 1 & 1\\end{pmatrix} = (3-1) + (-2) \\cdot (-1)^{3+1} = 2 + 1(-2) = 0$... 수정: 1열 전개를 다시 합니다.",
        "정확히: $\\det A = 1 \\cdot(3-1) - 0 \\cdot(0-1) + 1 \\cdot(0-2) = 2 + 0 - 2 = 0$. $\\det A = 0$이므로 크라메르 공식 적용 불가.",
        "수정된 문제로 전환: $A = \\begin{pmatrix}1 & 0 & 2 \\\\ 0 & 1 & 1 \\\\ 1 & 1 & 4\\end{pmatrix}$, $\\mathbf{b} = (3, 2, 6)$.",
        "$\\det A = 1(4-1) - 0 + 1(0-2) = 3 - 2 = 1$.",
        "$A_3 = \\begin{pmatrix}1 & 0 & 3 \\\\ 0 & 1 & 2 \\\\ 1 & 1 & 6\\end{pmatrix}$. $\\det A_3 = 1(6-2) - 0 + 1(0-3) = 4 - 3 = 1$.",
        "$z = \\dfrac{\\det A_3}{\\det A} = \\dfrac{1}{1} = 1$."
      ],
      "answer": "$z = 1$",
      "lesson": "크라메르 공식을 적용하기 전에 반드시 $\\det A \\neq 0$을 확인하세요. $\\det A = 0$이면 공식을 사용할 수 없습니다."
    }
  ],
  "problems": [
    {
      "id": "11-1",
      "type": "number",
      "difficulty": 1,
      "question": "$A = \\begin{pmatrix} 3 & 1 & 2 \\\\ 0 & 4 & 5 \\\\ 0 & 0 & 6 \\end{pmatrix}$의 $(2,3)$ 소행렬식 $M_{23}$의 값은?",
      "answer": "0",
      "hints": [
        "$M_{23}$은 $2$행과 $3$열을 제거한 $2 \\times 2$ 행렬의 행렬식입니다.",
        "남는 행렬은 $\\begin{pmatrix} 3 & 1 \\\\ 0 & 0 \\end{pmatrix}$입니다.",
        "$3 \\cdot 0 - 1 \\cdot 0 = 0$."
      ],
      "explanation": "$2$행과 $3$열을 제거하면 $\\begin{pmatrix} 3 & 1 \\\\ 0 & 0 \\end{pmatrix}$. $\\det = 3 \\cdot 0 - 1 \\cdot 0 = 0$. 따라서 $M_{23} = 0$.",
      "wrongAnalysis": "행/열 제거 시 잘못된 행이나 열을 제거하는 실수가 흔합니다. $(i,j)$에서 $i$는 행, $j$는 열임을 확인하세요."
    },
    {
      "id": "11-2",
      "type": "number",
      "difficulty": 2,
      "question": "$A = \\begin{pmatrix} 1 & 3 \\\\ 2 & 5 \\end{pmatrix}$, $\\mathbf{b} = \\begin{pmatrix} 7 \\\\ 11 \\end{pmatrix}$일 때 크라메르 공식으로 구한 $x_1$의 값은?",
      "answer": "-2",
      "hints": [
        "$\\det A = 1 \\cdot 5 - 3 \\cdot 2 = -1$.",
        "$A_1$은 $A$의 $1$열을 $\\mathbf{b}$로 교체: $\\begin{pmatrix} 7 & 3 \\\\ 11 & 5 \\end{pmatrix}$.",
        "$\\det A_1 = 35 - 33 = 2$. $x_1 = \\frac{2}{-1} = -2$."
      ],
      "explanation": "$\\det A = 5 - 6 = -1$. $\\det A_1 = 35 - 33 = 2$. 크라메르 공식: $x_1 = \\frac{\\det A_1}{\\det A} = \\frac{2}{-1} = -2$.",
      "wrongAnalysis": "$A_1$을 만들 때 행을 교체하는 실수가 있습니다. 크라메르 공식에서는 반드시 '열'을 교체해야 합니다."
    },
    {
      "id": "11-3",
      "type": "number",
      "difficulty": 3,
      "question": "$A = \\begin{pmatrix} 1 & 0 & 2 \\\\ 3 & 1 & 0 \\\\ 0 & 4 & 5 \\end{pmatrix}$의 행렬식을 $1$행을 따라 여인수 전개하여 구하면?",
      "answer": "29",
      "hints": [
        "$\\det A = a_{11}C_{11} + a_{12}C_{12} + a_{13}C_{13}$.",
        "$a_{12} = 0$이므로 두 번째 항은 $0$입니다.",
        "$C_{11} = (+1)\\det\\begin{pmatrix} 1 & 0 \\\\ 4 & 5 \\end{pmatrix} = 5$.",
        "$C_{13} = (+1)\\det\\begin{pmatrix} 3 & 1 \\\\ 0 & 4 \\end{pmatrix} = 12$.",
        "$\\det A = 1 \\cdot 5 + 0 + 2 \\cdot 12 = 29$."
      ],
      "explanation": "$1$행 전개: $\\det A = 1 \\cdot (+1)(1 \\cdot 5 - 0 \\cdot 4) + 0 \\cdot (\\cdots) + 2 \\cdot (+1)(3 \\cdot 4 - 1 \\cdot 0) = 5 + 0 + 24 = 29$.",
      "wrongAnalysis": "여인수의 부호 $(-1)^{i+j}$를 잊는 실수가 흔합니다. $(1,1)$은 $(-1)^2 = +1$, $(1,2)$는 $(-1)^3 = -1$, $(1,3)$은 $(-1)^4 = +1$입니다."
    },
    {
      "id": "11-4",
      "type": "number",
      "difficulty": 1,
      "question": "$A = \\begin{pmatrix} 2 & 0 \\\\ 0 & 5 \\end{pmatrix}$의 여인수 $C_{11}$의 값은?",
      "answer": "5",
      "hints": [
        "$C_{ij} = (-1)^{i+j} M_{ij}$이고 $C_{11} = (+1) \\cdot M_{11}$.",
        "$M_{11}$은 $1$행 $1$열을 제거한 $1 \\times 1$ 행렬의 행렬식 $= 5$."
      ],
      "explanation": "$M_{11} = 5$ (1행 1열 제거 후 남는 성분). $C_{11} = (-1)^2 \\cdot 5 = 5$.",
      "wrongAnalysis": "부호 $(-1)^{i+j}$를 빠뜨리는 실수가 있습니다. $(1,1)$ 위치에서는 부호가 $+1$이므로 결과적으로 같지만, 다른 위치에서는 다릅니다."
    },
    {
      "id": "11-5",
      "type": "choice",
      "difficulty": 2,
      "question": "크라메르 공식 $x_i = \\frac{\\det A_i}{\\det A}$에서 $A_i$는 무엇인가?",
      "choices": [
        "$A$의 $i$행을 $\\mathbf{b}$로 교체한 행렬",
        "$A$의 $i$열을 $\\mathbf{b}$로 교체한 행렬",
        "$A$에서 $i$행과 $i$열을 제거한 행렬",
        "$A$의 $i$번째 대각 성분을 $b_i$로 교체한 행렬"
      ],
      "answer": "$A$의 $i$열을 $\\mathbf{b}$로 교체한 행렬",
      "hints": [
        "크라메르 공식에서 '열'을 교체합니다.",
        "$x_i$를 구하려면 $i$번째 '열'을 우변 $\\mathbf{b}$로 바꿉니다."
      ],
      "explanation": "크라메르 공식에서 $A_i$는 $A$의 $i$번째 열을 $\\mathbf{b}$로 교체한 행렬입니다. 행이 아닌 열을 교체해야 합니다.",
      "wrongAnalysis": "행을 교체해야 한다고 착각하는 실수가 흔합니다. 반드시 '열'을 교체합니다."
    }
  ],
  "summary": {
    "keyPoints": [
      "소행렬식 $M_{ij}$: $i$행 $j$열 제거 후 행렬식",
      "여인수 $C_{ij} = (-1)^{i+j} M_{ij}$로 행렬식 전개",
      "크라메르 공식: $x_i = \\det A_i / \\det A$ (이론적이나 대규모에서는 비효율적)"
    ],
    "formulas": [
      "C_{ij} = (-1)^{i+j} M_{ij}",
      "\\det A = \\sum_j a_{ij} C_{ij}",
      "x_i = \\frac{\\det A_i}{\\det A}",
      "A^{-1} = \\frac{1}{\\det A} \\mathrm{adj}(A)"
    ],
    "commonMistakes": [
      "여인수 부호 $(-1)^{i+j}$ 누락",
      "크라메르 공식에서 행을 교체하는 대신 열을 교체해야 함을 혼동",
      "$\\det A = 0$일 때 크라메르 공식을 적용하려는 실수"
    ],
    "nextConnection": "행렬식과 연립방정식을 넘어, 행렬에 연결된 벡터 공간들의 구조를 더 깊이 분석합니다. 다음 단원에서는 행공간, 열공간과 차원 정리를 심화합니다."
  }
},
{
  "id": 12,
  "title": "행공간·열공간과 차원 정리 심화",
  "category": "벡터 공간",
  "level": "심화",
  "question": "행렬에 연결된 네 가지 기본 부분공간은 무엇이고, 이들의 차원은 어떤 관계를 가지는가?",
  "concept": {
    "intro": ":::definition[개념 정의]\n행렬 $A$에는 네 가지 기본 부분공간이 연결됩니다. **열공간(column space)** $C(A)$는 $A$의 열벡터가 생성하는 공간으로, $A\\mathbf{x} = \\mathbf{b}$가 해를 가지는 $\\mathbf{b}$의 집합입니다. **행공간(row space)** $R(A)$는 $A$의 행벡터가 생성하는 공간으로, $A^\\top$의 열공간과 같습니다. **영공간(null space)** $N(A)$는 $A\\mathbf{x} = \\mathbf{0}$의 해 집합이며, **좌영공간(left null space)** $N(A^\\top)$는 $A^\\top \\mathbf{y} = \\mathbf{0}$의 해 집합입니다.\n:::\n\n:::note[참고]\n**계수(rank)**는 $\\mathrm{rank}(A) = \\dim C(A) = \\dim R(A)$로 정의됩니다. 이것은 놀라운 사실입니다: 행의 관점에서 본 차원과 열의 관점에서 본 차원이 항상 같습니다. 즉 **행 계수 = 열 계수**입니다. 증명의 핵심 아이디어는 행 연산이 행공간은 보존하고 열공간의 차원도 보존한다는 것입니다.\n:::\n\n:::note[참고]\n**계수-퇴화차수 정리(Rank-Nullity Theorem)**: $m \\times n$ 행렬 $A$에 대해 $\\mathrm{rank}(A) + \\mathrm{nullity}(A) = n$. 증명 스케치: RREF에서 피벗 열의 수가 rank이고 자유 변수의 수가 nullity이며, 총 열의 수는 $n$이므로 $\\mathrm{rank} + \\mathrm{nullity} = n$.\n:::\n\n:::note[참고]\n응용: $A\\mathbf{x} = \\mathbf{b}$가 해를 가지는지 판정하려면 $\\mathbf{b}$가 $C(A)$에 속하는지 확인합니다. 첨가행렬 $[A \\mid \\mathbf{b}]$의 rank가 $A$의 rank와 같으면 해가 존재합니다.\n:::",
    "intuition": ":::note[직관]\n행렬을 '데이터 테이블'로 보면, 행공간은 '행 데이터가 퍼져 있는 방향', 열공간은 '열 데이터가 퍼져 있는 방향'입니다. 이 두 방향의 '자유도'가 같다는 것이 행 계수 = 열 계수입니다. 계수-퇴화차수 정리는 '입력 공간의 차원 = 유용하게 쓰이는 차원(rank) + 낭비되는 차원(nullity)'이라는 자원 분배 법칙입니다.\n:::",
    "formula": "R(A) = \\text{행벡터의 span},\\quad C(A) = \\text{열벡터의 span}\n\\mathrm{rank}(A) = \\dim R(A) = \\dim C(A)\n\\mathrm{rank}(A) + \\mathrm{nullity}(A) = n\n\\mathrm{rank}(A) = \\mathrm{rank}(A^\\top)",
    "summary": ":::note[핵심 요약]\n• 네 기본 부분공간: $C(A)$, $R(A)$, $N(A)$, $N(A^\\top)$\n• $\\mathrm{rank}(A) = \\dim C(A) = \\dim R(A)$ (행 계수 $=$ 열 계수)\n• Rank-Nullity: $\\mathrm{rank} + \\mathrm{nullity} = n$\n• 해의 존재: $\\mathbf{b} \\in C(A)$ $\\Leftrightarrow$ $\\mathrm{rank}[A \\mid \\mathbf{b}] = \\mathrm{rank}(A)$\n:::"
  },
  "examples": [
    {
      "title": "네 기본 부분공간의 차원 구하기",
      "problem": "$A = \\begin{pmatrix} 1 & 2 & 3 \\\\ 2 & 4 & 6 \\end{pmatrix}$의 $\\mathrm{rank}(A)$, $\\mathrm{nullity}(A)$, $\\dim R(A)$, $\\dim N(A^\\top)$를 구하시오.",
      "steps": [
        "RREF: $R_2 - 2R_1$으로 $\\begin{pmatrix} 1 & 2 & 3 \\\\ 0 & 0 & 0 \\end{pmatrix}$. 피벗이 $1$개.",
        "$\\mathrm{rank}(A) = 1$.",
        "Rank-Nullity: $1 + \\mathrm{nullity} = 3$ (열 수)이므로 $\\mathrm{nullity}(A) = 2$.",
        "$\\dim R(A) = \\mathrm{rank}(A) = 1$.",
        "$A^\\top$는 $3 \\times 2$이므로 $\\mathrm{rank}(A^\\top) + \\dim N(A^\\top) = 2$ (열 수), $\\dim N(A^\\top) = 2 - 1 = 1$."
      ],
      "answer": "$\\mathrm{rank} = 1$, $\\mathrm{nullity} = 2$, $\\dim R(A) = 1$, $\\dim N(A^\\top) = 1$",
      "lesson": "두 번째 행이 첫 번째 행의 $2$배이므로 독립인 행은 하나뿐입니다. rank가 $1$이면 열공간은 직선, 영공간은 $2$차원 평면입니다."
    },
    {
      "title": "[기본] 행공간의 기저",
      "problem": "$A = \\begin{pmatrix}1 & 2 \\\\ 3 & 6\\end{pmatrix}$ 의 행공간 $R(A)$의 기저를 구하시오.",
      "steps": [
        "RREF: $R_2 \\leftarrow R_2 - 3R_1$: $\\begin{pmatrix}1 & 2 \\\\ 0 & 0\\end{pmatrix}$.",
        "비영행: $(1, 2)$. 이것이 행공간의 기저.",
        "$\\dim R(A) = 1$."
      ],
      "answer": "$R(A)$의 기저: $\\{(1, 2)\\}$, 차원 $= 1$",
      "lesson": "RREF의 비영행이 행공간의 기저입니다. 행 연산은 행공간을 보존합니다."
    },
    {
      "title": "[응용] 열공간의 기저 구하기",
      "problem": "$A = \\begin{pmatrix}1 & 0 & 2 \\\\ 0 & 1 & 1 \\\\ 1 & 1 & 3\\end{pmatrix}$ 의 열공간의 기저를 구하시오.",
      "steps": [
        "$R_3 \\leftarrow R_3 - R_1 - R_2$: $\\begin{pmatrix}1 & 0 & 2 \\\\ 0 & 1 & 1 \\\\ 0 & 0 & 0\\end{pmatrix}$.",
        "피벗 열: 1열, 2열.",
        "원래 행렬 $A$의 1열, 2열이 열공간의 기저: $\\left\\{\\begin{pmatrix}1\\\\0\\\\1\\end{pmatrix}, \\begin{pmatrix}0\\\\1\\\\1\\end{pmatrix}\\right\\}$.",
        "$\\mathrm{rank}(A) = 2$."
      ],
      "answer": "기저: $\\left\\{\\begin{pmatrix}1\\\\0\\\\1\\end{pmatrix}, \\begin{pmatrix}0\\\\1\\\\1\\end{pmatrix}\\right\\}$, $\\mathrm{rank} = 2$",
      "lesson": "열공간의 기저를 구할 때는 RREF에서 피벗 열의 '위치'만 파악하고, 원래 행렬의 해당 열을 취합니다."
    },
    {
      "title": "[응용] 해의 존재 판별",
      "problem": "$A = \\begin{pmatrix}1 & 2 \\\\ 3 & 6\\end{pmatrix}$, $\\mathbf{b} = \\begin{pmatrix}1 \\\\ 4\\end{pmatrix}$ 일 때 $A\\mathbf{x} = \\mathbf{b}$의 해가 존재하는지 판별하시오.",
      "steps": [
        "$\\mathrm{rank}(A) = 1$ (앞의 예제에서 확인).",
        "첨가행렬 $[A|\\mathbf{b}]$: $\\begin{pmatrix}1 & 2 & | & 1 \\\\ 3 & 6 & | & 4\\end{pmatrix}$.",
        "$R_2 \\leftarrow R_2 - 3R_1$: $\\begin{pmatrix}1 & 2 & | & 1 \\\\ 0 & 0 & | & 1\\end{pmatrix}$.",
        "$\\mathrm{rank}[A|\\mathbf{b}] = 2 \\neq \\mathrm{rank}(A) = 1$. 해 없음."
      ],
      "answer": "해 없음 ($\\mathbf{b} \\notin C(A)$)",
      "lesson": "해가 존재할 필요충분조건은 $\\mathrm{rank}[A|\\mathbf{b}] = \\mathrm{rank}(A)$입니다. 즉, $\\mathbf{b}$가 열공간에 속해야 합니다."
    },
    {
      "title": "[심화] 네 기본 부분공간의 직교 관계",
      "problem": "$A = \\begin{pmatrix}1 & 0 \\\\ 0 & 1 \\\\ 1 & 1\\end{pmatrix}$ 에 대해 $R(A)$와 $N(A)$의 차원을 구하고, 이들의 관계를 설명하시오.",
      "steps": [
        "$A$는 $3 \\times 2$. RREF: 이미 처음 두 행에 피벗이 있으므로 $\\mathrm{rank} = 2$.",
        "$\\mathrm{nullity} = 2 - 2 = 0$. $N(A) = \\{\\mathbf{0}\\}$.",
        "$R(A) \\subseteq \\mathbb{R}^2$이고 $\\dim R(A) = 2$이므로 $R(A) = \\mathbb{R}^2$.",
        "$R(A)$와 $N(A)$는 $\\mathbb{R}^2$의 직교 여공간 관계: $R(A) \\oplus N(A) = \\mathbb{R}^2$. 여기서는 $N(A) = \\{\\mathbf{0}\\}$이므로 자명."
      ],
      "answer": "$\\dim R(A) = 2$, $\\dim N(A) = 0$. $R(A) = \\mathbb{R}^2$, $N(A) = \\{\\mathbf{0}\\}$",
      "lesson": "행공간과 영공간은 $\\mathbb{R}^n$의 직교 여공간 관계($R(A) \\perp N(A)$)에 있으며, 차원의 합이 열의 수 $n$입니다."
    }
  ],
  "problems": [
    {
      "id": "12-1",
      "type": "number",
      "difficulty": 1,
      "question": "$4 \\times 6$ 행렬 $A$의 $\\mathrm{rank}$가 $3$이면 $\\mathrm{nullity}(A)$는?",
      "answer": "3",
      "hints": [
        "Rank-Nullity: $\\mathrm{rank} + \\mathrm{nullity} = $ 열의 수.",
        "열의 수 $= 6$.",
        "$3 + \\mathrm{nullity} = 6$."
      ],
      "explanation": "$\\mathrm{rank}(A) + \\mathrm{nullity}(A) = 6$이므로 $\\mathrm{nullity}(A) = 6 - 3 = 3$. 자유 변수가 $3$개이고, $A\\mathbf{x} = \\mathbf{0}$의 해 공간은 $3$차원입니다.",
      "wrongAnalysis": "행의 수 $4$를 대입하여 $4 - 3 = 1$로 답하는 실수가 흔합니다. Rank-Nullity에서 사용하는 것은 열의 수입니다."
    },
    {
      "id": "12-2",
      "type": "choice",
      "difficulty": 2,
      "question": "$3 \\times 3$ 행렬 $A$에 대해 $\\mathrm{rank}(A) = 2$이면, $A\\mathbf{x} = \\mathbf{b}$에 대한 설명으로 옳은 것은?",
      "choices": [
        "모든 $\\mathbf{b}$에 대해 해가 존재한다",
        "해가 존재하면 반드시 유일하다",
        "해가 존재하면 무한히 많다",
        "해가 항상 존재하지 않는다"
      ],
      "answer": "해가 존재하면 무한히 많다",
      "hints": [
        "$\\mathrm{rank} = 2 < 3$이므로 $\\det A = 0$입니다.",
        "$\\mathrm{nullity} = 3 - 2 = 1$이므로 자유 변수가 하나 있습니다.",
        "해가 존재하면 자유 변수 때문에 무한히 많습니다."
      ],
      "explanation": "$\\mathrm{nullity} = 1 > 0$이므로 해가 존재하면 그 특수해에 영공간의 원소를 더한 무한히 많은 해가 존재합니다. 단, 모든 $\\mathbf{b}$에 대해 해가 존재하는 것은 아닙니다 ($C(A) \\neq \\mathbb{R}^3$).",
      "wrongAnalysis": "'rank가 $2$이면 해가 항상 존재하지 않는다'고 단정하는 실수가 있습니다. rank는 해의 존재 여부가 아니라 해의 유일성에 영향을 줍니다."
    },
    {
      "id": "12-3",
      "type": "choice",
      "difficulty": 3,
      "question": "$A$가 $m \\times n$ 행렬이고 $\\mathrm{rank}(A) = r$일 때, $\\mathrm{rank}(A^\\top)$는?",
      "choices": [
        "$m - r$",
        "$n - r$",
        "$r$",
        "$\\min(m, n) - r$"
      ],
      "answer": "$r$",
      "hints": [
        "행 계수와 열 계수의 관계를 떠올려 보세요.",
        "$\\mathrm{rank}(A)$는 열 계수(열공간의 차원)이기도 하고 행 계수(행공간의 차원)이기도 합니다.",
        "$A^\\top$의 열공간 $= A$의 행공간이므로..."
      ],
      "explanation": "$\\mathrm{rank}(A^\\top) = \\dim C(A^\\top) = \\dim R(A) = \\mathrm{rank}(A) = r$. 행 계수와 열 계수가 같다는 정리의 직접적 결과입니다.",
      "wrongAnalysis": "$A$와 $A^\\top$의 크기가 다르므로 rank도 다르다고 생각하는 실수가 있습니다. rank는 전치에 대해 불변입니다."
    },
    {
      "id": "12-4",
      "type": "number",
      "difficulty": 1,
      "question": "$3 \\times 3$ 단위행렬 $I_3$의 $\\mathrm{rank}$는?",
      "answer": "3",
      "hints": [
        "단위행렬의 열벡터를 생각해 보세요.",
        "$\\{(1,0,0), (0,1,0), (0,0,1)\\}$은 일차독립입니다."
      ],
      "explanation": "$I_3$의 세 열벡터는 $\\mathbb{R}^3$의 표준 기저이므로 일차독립입니다. $\\mathrm{rank}(I_3) = 3$.",
      "wrongAnalysis": "단위행렬의 rank를 $1$로 답하는 실수가 있습니다. 단위행렬은 최대 rank를 가집니다."
    },
    {
      "id": "12-5",
      "type": "choice",
      "difficulty": 2,
      "question": "$2 \\times 4$ 행렬 $A$의 $\\mathrm{rank}$의 최댓값은?",
      "choices": [
        "$2$",
        "$4$",
        "$6$",
        "$8$"
      ],
      "answer": "$2$",
      "hints": [
        "$\\mathrm{rank}(A) \\leq \\min(m, n)$.",
        "$\\min(2, 4) = 2$."
      ],
      "explanation": "$m \\times n$ 행렬의 rank는 $\\min(m, n)$ 이하입니다. $\\min(2, 4) = 2$이므로 최대 rank는 $2$.",
      "wrongAnalysis": "열의 수 $4$를 최대 rank로 답하는 실수가 있습니다. rank는 행과 열 중 작은 수를 넘을 수 없습니다."
    }
  ],
  "summary": {
    "keyPoints": [
      "$C(A)$, $R(A)$, $N(A)$, $N(A^\\top)$ — 행렬의 네 기본 부분공간",
      "행 계수 $=$ 열 계수, 즉 $\\mathrm{rank}(A) = \\mathrm{rank}(A^\\top)$",
      "Rank-Nullity: $\\mathrm{rank}(A) + \\mathrm{nullity}(A) = n$ (열의 수)"
    ],
    "formulas": [
      "\\mathrm{rank}(A) = \\dim C(A) = \\dim R(A)",
      "\\mathrm{rank}(A) + \\mathrm{nullity}(A) = n",
      "\\mathrm{rank}(A) = \\mathrm{rank}(A^\\top)"
    ],
    "commonMistakes": [
      "Rank-Nullity에서 열의 수 대신 행의 수를 사용하는 실수",
      "rank가 전치에 대해 변한다고 착각하는 실수",
      "$\\mathrm{rank} < n$이면 '해가 없다'고 단정하는 실수 (존재하되 유일하지 않을 수 있음)"
    ],
    "nextConnection": "벡터 공간의 구조를 완전히 이해했으니, 이제 벡터 공간 사이의 함수인 선형사상과 그 행렬 표현의 관계로 넘어갑니다."
  }
},
{
  "id": 13,
  "title": "선형사상과 행렬 표현의 동치성",
  "category": "벡터 공간",
  "level": "심화",
  "question": "선형사상과 행렬은 어떤 의미에서 '같은 것'이며, 기저를 바꾸면 행렬은 어떻게 변하는가?",
  "concept": {
    "intro": ":::definition[개념 정의]\n**선형사상(linear map)** $T: V \\to W$는 $T(\\mathbf{u} + \\mathbf{v}) = T(\\mathbf{u}) + T(\\mathbf{v})$와 $T(c\\mathbf{u}) = cT(\\mathbf{u})$를 만족하는 함수입니다. 핵심 정리는 다음과 같습니다: $V$의 기저 $B = \\{\\mathbf{v}_1, \\ldots, \\mathbf{v}_n\\}$와 $W$의 기저 $B'$를 고정하면, 모든 선형사상 $T$에 대해 유일한 $m \\times n$ 행렬 $[T]_{B,B'}$이 대응됩니다. 이 행렬의 $j$열은 $T(\\mathbf{v}_j)$를 $B'$에 대해 좌표로 표현한 것입니다.\n:::\n\n:::note[참고]\n같은 선형사상이라도 기저를 바꾸면 다른 행렬이 됩니다. $V = W$이고 기저를 $B$에서 $B'$로 바꾸면 행렬 표현은 **기저 변환 공식** $[T]_{B'} = P^{-1}[T]_B P$에 의해 변환됩니다. 여기서 $P$는 기저 변환 행렬(전이 행렬)로, $B'$의 각 벡터를 $B$에 대한 좌표로 나타낸 열을 가집니다. 두 행렬이 이 관계를 만족하면 **닮음(similar)**이라 하고, 같은 선형사상을 다른 기저로 본 것입니다.\n:::\n\n:::note[참고]\n선형사상 전체의 집합 $L(V, W)$는 그 자체로 벡터 공간이 됩니다. $(T_1 + T_2)(\\mathbf{v}) = T_1(\\mathbf{v}) + T_2(\\mathbf{v})$, $(cT)(\\mathbf{v}) = cT(\\mathbf{v})$로 합과 스칼라곱을 정의하면 벡터 공간의 공리를 만족합니다. 그리고 $L(V, W) \\cong M_{m \\times n}(\\mathbb{F})$, 즉 선형사상의 공간과 행렬의 공간이 벡터 공간으로서 동형(isomorphic)입니다. 따라서 $\\dim L(V, W) = \\dim V \\cdot \\dim W = n \\cdot m$입니다.\n:::\n\n:::note[참고]\n이 동형성이 핵심입니다: 선형대수에서 '선형사상을 연구하는 것'과 '행렬을 연구하는 것'은 본질적으로 같은 작업입니다.\n:::",
    "intuition": ":::note[직관]\n선형사상은 '추상적인 변환 규칙'이고, 행렬은 그 규칙을 특정 좌표계에서 숫자로 기록한 것입니다. 같은 사람을 한국어와 영어로 소개하면 표현은 달라도 사람은 같습니다. 기저 변환은 '언어를 바꾸는 것'이고, 닮음 행렬은 '같은 사람의 다른 소개서'입니다.\n:::",
    "formula": "[T]_{B,B'}:\\ j\\text{열} = T(\\mathbf{v}_j)\\text{의 }B'\\text{좌표}\n[T]_{B'} = P^{-1}[T]_B P\nL(V, W) \\cong M_{m \\times n}(\\mathbb{F})\n\\dim L(V, W) = \\dim V \\cdot \\dim W",
    "summary": ":::note[핵심 요약]\n• 모든 선형사상 $T$는 기저를 고정하면 행렬 $[T]_B$로 표현\n• 기저 변환: $[T]_{B'} = P^{-1}[T]_B P$ (닮음 관계)\n• $L(V,W) \\cong M_{m \\times n}(\\mathbb{F})$: 선형사상과 행렬은 동형\n• $\\dim L(V,W) = n \\cdot m$\n:::"
  },
  "examples": [
    {
      "title": "기저 변환에 의한 행렬 표현 변환",
      "problem": "$T: \\mathbb{R}^2 \\to \\mathbb{R}^2$가 표준 기저 $B = \\{\\mathbf{e}_1, \\mathbf{e}_2\\}$에서 $[T]_B = \\begin{pmatrix} 1 & 2 \\\\ 0 & 3 \\end{pmatrix}$일 때, 기저 $B' = \\{(1,1), (1,0)\\}$에서의 행렬 표현 $[T]_{B'}$를 구하시오.",
      "steps": [
        "전이 행렬 $P = \\begin{pmatrix} 1 & 1 \\\\ 1 & 0 \\end{pmatrix}$ ($B'$의 벡터를 $B$좌표로 나열).",
        "$P^{-1} = \\begin{pmatrix} 0 & 1 \\\\ 1 & -1 \\end{pmatrix}$ ($\\det P = -1$).",
        "$[T]_{B'} = P^{-1}[T]_B P = \\begin{pmatrix} 0 & 1 \\\\ 1 & -1 \\end{pmatrix}\\begin{pmatrix} 1 & 2 \\\\ 0 & 3 \\end{pmatrix}\\begin{pmatrix} 1 & 1 \\\\ 1 & 0 \\end{pmatrix}$.",
        "$[T]_B P = \\begin{pmatrix} 3 & 1 \\\\ 3 & 0 \\end{pmatrix}$, $P^{-1}([T]_B P) = \\begin{pmatrix} 3 & 0 \\\\ 0 & 1 \\end{pmatrix}$."
      ],
      "answer": "$[T]_{B'} = \\begin{pmatrix} 3 & 0 \\\\ 0 & 1 \\end{pmatrix}$",
      "lesson": "기저를 잘 선택하면 행렬이 대각행렬이 되어 분석이 쉬워집니다. 이것이 대각화(diagonalization)의 핵심 동기입니다."
    },
    {
      "title": "[기본] 선형사상의 행렬 표현",
      "problem": "$T: \\mathbb{R}^2 \\to \\mathbb{R}^2$를 $T(x, y) = (2x + y,\\ x - y)$로 정의할 때, 표준 기저에 대한 행렬 $[T]$를 구하시오.",
      "steps": [
        "$T(\\mathbf{e}_1) = T(1, 0) = (2, 1)$.",
        "$T(\\mathbf{e}_2) = T(0, 1) = (1, -1)$.",
        "$[T] = \\begin{pmatrix}2 & 1 \\\\ 1 & -1\\end{pmatrix}$."
      ],
      "answer": "$[T] = \\begin{pmatrix}2 & 1 \\\\ 1 & -1\\end{pmatrix}$",
      "lesson": "선형사상의 행렬을 구하려면 기저 벡터의 상(image)을 열벡터로 나열하면 됩니다."
    },
    {
      "title": "[응용] 전이 행렬 구하기",
      "problem": "기저 $B = \\{(1, 0), (0, 1)\\}$ 에서 $B' = \\{(1, 1), (0, 1)\\}$ 으로의 전이 행렬 $P$를 구하시오.",
      "steps": [
        "$P$의 열은 $B'$의 벡터를 $B$좌표로 나타낸 것.",
        "$B = $ 표준 기저이므로 $P = \\begin{pmatrix}1 & 0 \\\\ 1 & 1\\end{pmatrix}$.",
        "검산: $P \\cdot [\\mathbf{v}]_{B'} = [\\mathbf{v}]_B$ 관계 확인."
      ],
      "answer": "$P = \\begin{pmatrix}1 & 0 \\\\ 1 & 1\\end{pmatrix}$",
      "lesson": "전이 행렬의 $j$열은 새 기저의 $j$번째 벡터를 기존 기저로 표현한 좌표입니다."
    },
    {
      "title": "[응용] 닮음 행렬의 불변량 확인",
      "problem": "$A = \\begin{pmatrix}3 & 1 \\\\ 0 & 2\\end{pmatrix}$ 와 $B = P^{-1}AP$에서 $P = \\begin{pmatrix}1 & 1 \\\\ 0 & 1\\end{pmatrix}$ 일 때, $\\mathrm{tr}(B)$와 $\\det(B)$를 구하시오.",
      "steps": [
        "닮음 행렬의 불변량: $\\mathrm{tr}(B) = \\mathrm{tr}(A) = 3 + 2 = 5$.",
        "$\\det(B) = \\det(A) = 3 \\cdot 2 - 1 \\cdot 0 = 6$.",
        "직접 계산으로 검산: $P^{-1} = \\begin{pmatrix}1 & -1 \\\\ 0 & 1\\end{pmatrix}$. $AP = \\begin{pmatrix}3 & 4 \\\\ 0 & 2\\end{pmatrix}$. $B = \\begin{pmatrix}3 & 2 \\\\ 0 & 2\\end{pmatrix}$. $\\mathrm{tr} = 5$, $\\det = 6$. ✓"
      ],
      "answer": "$\\mathrm{tr}(B) = 5,\\ \\det(B) = 6$",
      "lesson": "닮음 행렬은 trace와 determinant가 같습니다. 직접 $P^{-1}AP$를 계산하지 않아도 이 불변량을 알 수 있습니다."
    },
    {
      "title": "[심화] 선형사상의 핵과 상의 행렬 표현",
      "problem": "$T: \\mathbb{R}^3 \\to \\mathbb{R}^2$를 $T(x, y, z) = (x + y,\\ y + z)$로 정의할 때, $[T]$를 구하고 $\\ker(T)$의 기저를 행렬을 이용하여 구하시오.",
      "steps": [
        "$T(\\mathbf{e}_1) = (1, 0)$, $T(\\mathbf{e}_2) = (1, 1)$, $T(\\mathbf{e}_3) = (0, 1)$.",
        "$[T] = \\begin{pmatrix}1 & 1 & 0 \\\\ 0 & 1 & 1\\end{pmatrix}$.",
        "$\\ker(T)$: $[T]\\mathbf{x} = \\mathbf{0}$. RREF: $R_1 \\leftarrow R_1 - R_2$: $\\begin{pmatrix}1 & 0 & -1 \\\\ 0 & 1 & 1\\end{pmatrix}$.",
        "자유 변수: $z = t$. $x = t$, $y = -t$. $\\ker(T) = \\mathrm{span}\\{(1, -1, 1)\\}$."
      ],
      "answer": "$[T] = \\begin{pmatrix}1 & 1 & 0 \\\\ 0 & 1 & 1\\end{pmatrix}$, $\\ker(T) = \\mathrm{span}\\{(1, -1, 1)\\}$",
      "lesson": "선형사상의 핵은 행렬의 영공간과 같습니다. 추상적 개념이 행렬 연산으로 구체화되는 것이 선형대수의 힘입니다."
    }
  ],
  "problems": [
    {
      "id": "13-1",
      "type": "number",
      "difficulty": 1,
      "question": "$\\dim V = 3$, $\\dim W = 4$일 때 $\\dim L(V, W)$는?",
      "answer": "12",
      "hints": [
        "$L(V, W) \\cong M_{m \\times n}(\\mathbb{F})$에서 $m = \\dim W$, $n = \\dim V$.",
        "$\\dim L(V, W) = \\dim V \\cdot \\dim W$.",
        "$3 \\times 4 = 12$."
      ],
      "explanation": "$L(V,W) \\cong M_{4 \\times 3}(\\mathbb{F})$이고, $4 \\times 3$ 행렬의 성분은 $12$개이므로 $\\dim L(V,W) = 12$입니다.",
      "wrongAnalysis": "$\\dim V + \\dim W = 7$로 답하는 실수가 있습니다. 선형사상 공간의 차원은 더하기가 아니라 곱하기입니다."
    },
    {
      "id": "13-2",
      "type": "choice",
      "difficulty": 2,
      "question": "$A$와 $B$가 닮음 행렬($B = P^{-1}AP$)이면, 반드시 같은 것은?",
      "choices": [
        "행렬의 모든 성분",
        "행렬식(determinant)",
        "각 성분의 합",
        "행렬의 전치"
      ],
      "answer": "행렬식(determinant)",
      "hints": [
        "$\\det(P^{-1}AP)$를 전개해 보세요.",
        "$\\det(P^{-1}AP) = \\det(P^{-1}) \\cdot \\det(A) \\cdot \\det(P)$.",
        "$\\det(P^{-1}) \\cdot \\det(P) = 1$."
      ],
      "explanation": "$\\det B = \\det(P^{-1}AP) = \\det(P^{-1}) \\det(A) \\det(P) = \\frac{1}{\\det P} \\cdot \\det A \\cdot \\det P = \\det A$. 닮음 행렬은 같은 선형사상의 다른 표현이므로 행렬식, 고윳값, 대각합(trace) 등 '선형사상의 고유 성질'이 보존됩니다.",
      "wrongAnalysis": "'닮음이면 같은 행렬'이라고 착각하는 실수가 있습니다. 닮음은 성분이 아니라 행렬식, 고윳값, trace 등의 불변량을 공유합니다."
    },
    {
      "id": "13-3",
      "type": "text",
      "difficulty": 3,
      "question": "전이 행렬 $P = \\begin{pmatrix} 1 & 0 \\\\ 1 & 1 \\end{pmatrix}$이고 $[T]_B = \\begin{pmatrix} 2 & 0 \\\\ 0 & 5 \\end{pmatrix}$일 때, $[T]_{B'} = P^{-1}[T]_B P$의 $(2,1)$ 성분은?",
      "answer": "3",
      "hints": [
        "$P^{-1} = \\begin{pmatrix} 1 & 0 \\\\ -1 & 1 \\end{pmatrix}$ ($\\det P = 1$).",
        "$[T]_B P = \\begin{pmatrix} 2 & 0 \\\\ 5 & 5 \\end{pmatrix}$.",
        "$P^{-1}([T]_B P) = \\begin{pmatrix} 1 & 0 \\\\ -1 & 1 \\end{pmatrix}\\begin{pmatrix} 2 & 0 \\\\ 5 & 5 \\end{pmatrix}$의 $(2,1)$ 성분."
      ],
      "explanation": "$P^{-1} = \\begin{pmatrix} 1 & 0 \\\\ -1 & 1 \\end{pmatrix}$. $[T]_B P = \\begin{pmatrix} 2 & 0 \\\\ 0 & 5 \\end{pmatrix}\\begin{pmatrix} 1 & 0 \\\\ 1 & 1 \\end{pmatrix} = \\begin{pmatrix} 2 & 0 \\\\ 5 & 5 \\end{pmatrix}$. $P^{-1} \\cdot \\begin{pmatrix} 2 & 0 \\\\ 5 & 5 \\end{pmatrix} = \\begin{pmatrix} 2 & 0 \\\\ -2+5 & 5 \\end{pmatrix} = \\begin{pmatrix} 2 & 0 \\\\ 3 & 5 \\end{pmatrix}$. 따라서 $(2,1)$ 성분은 $(-1) \\cdot 2 + 1 \\cdot 5 = 3$입니다.",
      "wrongAnalysis": "$P^{-1}$을 잘못 구하거나, 곱셈 순서 $P^{-1}[T]_B P$에서 $P[T]_B P^{-1}$로 순서를 바꾸는 실수가 있습니다. 기저 변환 공식의 순서를 정확히 지켜야 합니다."
    },
    {
      "id": "13-4",
      "type": "number",
      "difficulty": 1,
      "question": "$\\dim V = 2$, $\\dim W = 5$일 때 $V$에서 $W$로의 선형사상 공간 $L(V, W)$의 차원은?",
      "answer": "10",
      "hints": [
        "$\\dim L(V, W) = \\dim V \\cdot \\dim W$.",
        "$2 \\times 5 = ?$"
      ],
      "explanation": "$L(V, W) \\cong M_{5 \\times 2}(\\mathbb{F})$이므로 $\\dim L(V, W) = 2 \\times 5 = 10$.",
      "wrongAnalysis": "$\\dim V + \\dim W = 7$로 답하는 실수가 있습니다. 선형사상 공간의 차원은 곱이지 합이 아닙니다."
    },
    {
      "id": "13-5",
      "type": "choice",
      "difficulty": 2,
      "question": "닮음 행렬 $A$와 $B = P^{-1}AP$에 대해 항상 같은 것을 모두 고르면?",
      "choices": [
        "행렬식과 대각합(trace)",
        "행렬의 모든 성분",
        "행렬식만",
        "아무것도 같지 않다"
      ],
      "answer": "행렬식과 대각합(trace)",
      "hints": [
        "$\\det(P^{-1}AP) = \\det A$.",
        "$\\mathrm{tr}(P^{-1}AP) = \\mathrm{tr}(A)$ (trace의 순환 성질)."
      ],
      "explanation": "닮음 행렬은 같은 선형사상의 다른 표현이므로 행렬식, 대각합(trace), 고윳값, 특성다항식 등 불변량을 공유합니다.",
      "wrongAnalysis": "행렬식만 같다고 답하면 trace도 보존된다는 사실을 빠뜨린 것입니다."
    }
  ],
  "summary": {
    "keyPoints": [
      "선형사상은 기저를 고정하면 행렬로 유일하게 표현된다",
      "기저 변환: $[T]_{B'} = P^{-1}[T]_B P$ (닮음 행렬)",
      "$L(V,W) \\cong M_{m \\times n}(\\mathbb{F})$, $\\dim L(V,W) = nm$"
    ],
    "formulas": [
      "[T]_{B'} = P^{-1}[T]_B P",
      "L(V, W) \\cong M_{m \\times n}(\\mathbb{F})",
      "\\dim L(V, W) = \\dim V \\cdot \\dim W"
    ],
    "commonMistakes": [
      "기저 변환 공식에서 $P$와 $P^{-1}$의 순서를 혼동하는 실수",
      "닮음 행렬이 '같은 행렬'이라고 착각하는 실수",
      "$\\dim L(V,W)$를 $\\dim V + \\dim W$로 계산하는 실수"
    ],
    "nextConnection": "선형대수의 추상적 구조를 마무리했습니다. 이제 여러 변수를 입력받는 함수인 다변수 함수의 세계로 들어갑니다. 그래디언트, 행렬, 고윳값이 다시 등장할 것입니다."
  }
},
{
  "id": 14,
  "title": "내적공간과 그람-슈미트 직교화",
  "category": "내적공간",
  "level": "심화",
  "question": "내적을 추상적으로 일반화하면 어떤 구조가 나타나고, 임의의 기저를 직교정규 기저로 바꾸려면 어떻게 해야 할까?",
  "concept": {
    "intro": ":::definition[개념 정의]\n내적공간(inner product space)은 내적이라는 연산을 갖춘 벡터 공간입니다. 우리가 $\\mathbb{R}^n$에서 사용하던 점곱 $\\mathbf{u} \\cdot \\mathbf{v} = \\sum u_i v_i$를 추상 벡터 공간으로 일반화한 것이 내적 $\\langle \\mathbf{u}, \\mathbf{v} \\rangle$입니다. 내적은 세 가지 공리를 만족해야 합니다. 첫째, 첫 번째 인수에 대한 **선형성**: $\\langle a\\mathbf{u} + b\\mathbf{w}, \\mathbf{v} \\rangle = a\\langle \\mathbf{u}, \\mathbf{v} \\rangle + b\\langle \\mathbf{w}, \\mathbf{v} \\rangle$. 둘째, **대칭성**: $\\langle \\mathbf{u}, \\mathbf{v} \\rangle = \\langle \\mathbf{v}, \\mathbf{u} \\rangle$ (복소수 체에서는 켤레 대칭 $\\langle \\mathbf{u}, \\mathbf{v} \\rangle = \\overline{\\langle \\mathbf{v}, \\mathbf{u} \\rangle}$). 셋째, **양정치성**: $\\langle \\mathbf{v}, \\mathbf{v} \\rangle \\geq 0$이고 등호는 $\\mathbf{v} = \\mathbf{0}$일 때만 성립합니다.\n:::\n\n:::note[참고]\n내적이 주어지면 **노름**(길이)을 $\\|\\mathbf{v}\\| = \\sqrt{\\langle \\mathbf{v}, \\mathbf{v} \\rangle}$로 정의할 수 있습니다. 이로부터 **코시-슈바르츠 부등식** $|\\langle \\mathbf{u}, \\mathbf{v} \\rangle| \\leq \\|\\mathbf{u}\\| \\cdot \\|\\mathbf{v}\\|$이 성립하며, 이 부등식은 삼각부등식의 기초가 됩니다. 두 벡터의 내적이 $0$이면 **직교**(orthogonal)라 하고, 서로 직교하는 벡터들의 집합을 **직교 집합**, 여기에 각 벡터의 노름이 $1$이면 **직교정규 집합**(orthonormal set)이라 합니다.\n:::\n\n:::note[참고]\n**그람-슈미트 직교화**(Gram-Schmidt process)는 일차독립인 벡터 집합 $\\{\\mathbf{v}_1, \\ldots, \\mathbf{v}_n\\}$을 직교정규 집합 $\\{\\mathbf{e}_1, \\ldots, \\mathbf{e}_n\\}$으로 변환하는 알고리즘입니다. 핵심 아이디어는 각 단계에서 이전 벡터들에 대한 사영 성분을 빼고 정규화하는 것입니다: $\\mathbf{u}_1 = \\mathbf{v}_1$, $\\mathbf{e}_1 = \\mathbf{u}_1 / \\|\\mathbf{u}_1\\|$, 그리고 $k \\geq 2$에서 $\\mathbf{u}_k = \\mathbf{v}_k - \\sum_{j=1}^{k-1} \\langle \\mathbf{v}_k, \\mathbf{e}_j \\rangle \\mathbf{e}_j$, $\\mathbf{e}_k = \\mathbf{u}_k / \\|\\mathbf{u}_k\\|$. 이 과정은 **QR 분해**와 직결됩니다: 행렬 $A$의 열벡터에 그람-슈미트를 적용하면 $A = QR$ ($Q$: 직교행렬, $R$: 상삼각행렬)을 얻습니다. 직교행렬 $Q$는 $Q^T Q = I$를 만족하며, 길이와 각도를 보존하는 변환을 나타냅니다.\n:::",
    "intuition": ":::note[직관]\n내적공간을 이해하는 가장 좋은 비유는 '자가 달린 공간'입니다. 벡터 공간에는 방향과 합은 있지만 길이와 각도를 잴 수 없습니다. 내적을 도입하는 순간 자(ruler)와 각도기(protractor)가 생기는 셈입니다. 그람-슈미트 과정은 비뚤어진 좌표축을 하나씩 바로 세우는 작업으로, 첫 축은 그대로 두고 둘째 축에서 첫 축 성분을 빼서 수직으로 만들고, 셋째 축에서 앞의 두 축 성분을 빼서 수직으로 만드는 식입니다.\n:::",
    "formula": "\\langle \\mathbf{u}, \\mathbf{v} \\rangle\\ \\text{(내적 공리: 선형성, 대칭성, 양정치성)}\n\\|\\mathbf{v}\\| = \\sqrt{\\langle \\mathbf{v}, \\mathbf{v} \\rangle}\n|\\langle \\mathbf{u}, \\mathbf{v} \\rangle| \\leq \\|\\mathbf{u}\\| \\cdot \\|\\mathbf{v}\\|\n\\mathbf{u}_k = \\mathbf{v}_k - \\sum_{j=1}^{k-1} \\langle \\mathbf{v}_k, \\mathbf{e}_j \\rangle \\mathbf{e}_j,\\quad \\mathbf{e}_k = \\frac{\\mathbf{u}_k}{\\|\\mathbf{u}_k\\|}\nQ^T Q = I\\ (\\text{직교행렬})",
    "summary": ":::note[핵심 요약]\n• 내적 = 길이·각도를 측정하는 도구 (세 공리)\n• 코시-슈바르츠: $|\\langle \\mathbf{u}, \\mathbf{v} \\rangle| \\leq \\|\\mathbf{u}\\|\\|\\mathbf{v}\\|$\n• 그람-슈미트: 일차독립 → 직교정규 기저\n• 직교행렬: $Q^T Q = I$, 길이·각도 보존\n:::"
  },
  "examples": [
    {
      "title": "그람-슈미트 직교화 적용",
      "problem": "$\\mathbf{v}_1 = (1, 1, 0),\\ \\mathbf{v}_2 = (1, 0, 1)$에 그람-슈미트 과정을 적용하여 직교정규 집합을 구하시오.",
      "steps": [
        "$\\mathbf{u}_1 = \\mathbf{v}_1 = (1, 1, 0)$, $\\|\\mathbf{u}_1\\| = \\sqrt{1^2 + 1^2 + 0^2} = \\sqrt{2}$.",
        "$\\mathbf{e}_1 = \\dfrac{\\mathbf{u}_1}{\\|\\mathbf{u}_1\\|} = \\left(\\dfrac{1}{\\sqrt{2}}, \\dfrac{1}{\\sqrt{2}}, 0\\right)$.",
        "$\\langle \\mathbf{v}_2, \\mathbf{e}_1 \\rangle = 1 \\cdot \\dfrac{1}{\\sqrt{2}} + 0 \\cdot \\dfrac{1}{\\sqrt{2}} + 1 \\cdot 0 = \\dfrac{1}{\\sqrt{2}}$.",
        "$\\mathbf{u}_2 = \\mathbf{v}_2 - \\langle \\mathbf{v}_2, \\mathbf{e}_1 \\rangle \\mathbf{e}_1 = (1, 0, 1) - \\dfrac{1}{\\sqrt{2}} \\cdot \\left(\\dfrac{1}{\\sqrt{2}}, \\dfrac{1}{\\sqrt{2}}, 0\\right) = (1, 0, 1) - \\left(\\dfrac{1}{2}, \\dfrac{1}{2}, 0\\right) = \\left(\\dfrac{1}{2}, -\\dfrac{1}{2}, 1\\right)$.",
        "$\\|\\mathbf{u}_2\\| = \\sqrt{\\dfrac{1}{4} + \\dfrac{1}{4} + 1} = \\sqrt{\\dfrac{3}{2}} = \\dfrac{\\sqrt{6}}{2}$.",
        "$\\mathbf{e}_2 = \\dfrac{\\mathbf{u}_2}{\\|\\mathbf{u}_2\\|} = \\left(\\dfrac{1}{\\sqrt{6}}, -\\dfrac{1}{\\sqrt{6}}, \\dfrac{2}{\\sqrt{6}}\\right)$."
      ],
      "answer": "$\\mathbf{e}_1 = \\left(\\dfrac{1}{\\sqrt{2}}, \\dfrac{1}{\\sqrt{2}}, 0\\right),\\ \\mathbf{e}_2 = \\left(\\dfrac{1}{\\sqrt{6}}, -\\dfrac{1}{\\sqrt{6}}, \\dfrac{2}{\\sqrt{6}}\\right)$",
      "lesson": "그람-슈미트의 각 단계는 '사영을 빼고 정규화'입니다. $\\mathbf{e}_1 \\cdot \\mathbf{e}_2 = 0$을 검산하여 직교성을 확인하세요."
    },
    {
      "title": "[기본] 직교 집합 확인",
      "problem": "$\\{(1, 0, 0), (0, 1, -1), (0, 1, 1)\\}$ 이 직교 집합인지 확인하시오.",
      "steps": [
        "$(1,0,0) \\cdot (0,1,-1) = 0$. ✓",
        "$(1,0,0) \\cdot (0,1,1) = 0$. ✓",
        "$(0,1,-1) \\cdot (0,1,1) = 0 + 1 - 1 = 0$. ✓",
        "모든 쌍의 내적이 $0$이므로 직교 집합."
      ],
      "answer": "직교 집합이다 (모든 쌍의 내적이 $0$)",
      "lesson": "직교 집합이면 자동으로 일차독립입니다. 직교 집합의 벡터 수가 공간의 차원과 같으면 직교 기저가 됩니다."
    },
    {
      "title": "[응용] 직교 사영으로 최근접점 구하기",
      "problem": "$W = \\mathrm{span}\\{(1, 1, 0)\\}$ 위의 점 중 $\\mathbf{b} = (2, 0, 3)$ 에 가장 가까운 점을 구하시오.",
      "steps": [
        "$\\hat{\\mathbf{b}} = \\mathrm{proj}_W \\mathbf{b} = \\dfrac{\\mathbf{b} \\cdot \\mathbf{w}}{\\|\\mathbf{w}\\|^2} \\mathbf{w}$ ($\\mathbf{w} = (1,1,0)$).",
        "$\\mathbf{b} \\cdot \\mathbf{w} = 2 + 0 + 0 = 2$.",
        "$\\|\\mathbf{w}\\|^2 = 1 + 1 + 0 = 2$.",
        "$\\hat{\\mathbf{b}} = \\dfrac{2}{2}(1, 1, 0) = (1, 1, 0)$."
      ],
      "answer": "$\\hat{\\mathbf{b}} = (1, 1, 0)$",
      "lesson": "부분공간 위의 최근접점은 직교 사영으로 구합니다. 오차 벡터 $\\mathbf{b} - \\hat{\\mathbf{b}}$는 $W$에 수직입니다."
    },
    {
      "title": "[응용] QR 분해의 의미",
      "problem": "$A = \\begin{pmatrix}1 & 1 \\\\ 0 & 1\\end{pmatrix}$ 의 열벡터에 그람-슈미트를 적용하여 $Q$와 $R$을 구하시오.",
      "steps": [
        "$\\mathbf{a}_1 = (1, 0)$. $\\mathbf{e}_1 = (1, 0)$ (이미 단위벡터).",
        "$\\mathbf{a}_2 = (1, 1)$. $\\mathbf{u}_2 = (1,1) - \\langle(1,1),(1,0)\\rangle(1,0) = (1,1) - 1 \\cdot (1,0) = (0,1)$.",
        "$\\mathbf{e}_2 = (0, 1)$.",
        "$Q = \\begin{pmatrix}1 & 0 \\\\ 0 & 1\\end{pmatrix}$, $R = \\begin{pmatrix}\\langle\\mathbf{a}_1, \\mathbf{e}_1\\rangle & \\langle\\mathbf{a}_2, \\mathbf{e}_1\\rangle \\\\ 0 & \\langle\\mathbf{a}_2, \\mathbf{e}_2\\rangle\\end{pmatrix} = \\begin{pmatrix}1 & 1 \\\\ 0 & 1\\end{pmatrix}$."
      ],
      "answer": "$Q = I$, $R = A$",
      "lesson": "이 경우 $A$의 열이 이미 직교 방향이므로 $Q = I$가 됩니다. QR 분해는 그람-슈미트 과정을 행렬 형태로 기록한 것입니다."
    },
    {
      "title": "[심화] 직교 여공간",
      "problem": "$W = \\mathrm{span}\\{(1, 1, 1)\\}$ 의 직교 여공간 $W^\\perp$의 기저를 구하시오.",
      "steps": [
        "$W^\\perp = \\{\\mathbf{x} \\in \\mathbb{R}^3 \\mid \\mathbf{x} \\cdot (1,1,1) = 0\\}$, 즉 $x + y + z = 0$.",
        "자유 변수: $y = s$, $z = t$. $x = -s - t$.",
        "$(x, y, z) = s(-1, 1, 0) + t(-1, 0, 1)$.",
        "기저: $\\{(-1, 1, 0), (-1, 0, 1)\\}$. $\\dim W^\\perp = 2$.",
        "검산: $\\dim W + \\dim W^\\perp = 1 + 2 = 3 = \\dim \\mathbb{R}^3$. ✓"
      ],
      "answer": "$W^\\perp$의 기저: $\\{(-1, 1, 0), (-1, 0, 1)\\}$",
      "lesson": "직교 여공간 $W^\\perp$는 $W$의 모든 벡터와 수직인 벡터들의 공간입니다. $\\dim W + \\dim W^\\perp = \\dim V$가 항상 성립합니다."
    }
  ],
  "problems": [
    {
      "id": "14-1",
      "type": "number",
      "difficulty": 1,
      "question": "내적공간에서 $\\langle \\mathbf{v}, \\mathbf{v} \\rangle = 9$일 때, $\\|\\mathbf{v}\\|$의 값은?",
      "answer": "3",
      "hints": [
        "$\\|\\mathbf{v}\\| = \\sqrt{\\langle \\mathbf{v}, \\mathbf{v} \\rangle}$.",
        "$\\sqrt{9}$를 계산하세요."
      ],
      "explanation": "$\\|\\mathbf{v}\\| = \\sqrt{\\langle \\mathbf{v}, \\mathbf{v} \\rangle} = \\sqrt{9} = 3$.",
      "wrongAnalysis": "$\\langle \\mathbf{v}, \\mathbf{v} \\rangle$를 그대로 노름으로 답하는 실수가 있습니다. 노름은 내적의 제곱근입니다."
    },
    {
      "id": "14-2",
      "type": "choice",
      "difficulty": 2,
      "question": "코시-슈바르츠 부등식 $|\\langle \\mathbf{u}, \\mathbf{v} \\rangle| \\leq \\|\\mathbf{u}\\| \\cdot \\|\\mathbf{v}\\|$에서 등호가 성립하는 조건은?",
      "choices": [
        "$\\mathbf{u}$와 $\\mathbf{v}$가 직교할 때",
        "$\\mathbf{u}$와 $\\mathbf{v}$가 일차종속(평행)일 때",
        "$\\mathbf{u} = \\mathbf{v}$일 때만",
        "항상 등호가 성립한다"
      ],
      "answer": "$\\mathbf{u}$와 $\\mathbf{v}$가 일차종속(평행)일 때",
      "hints": [
        "$|\\cos\\theta| = 1$이 되는 경우를 생각해 보세요.",
        "$\\theta = 0$ 또는 $\\theta = \\pi$일 때입니다.",
        "이는 두 벡터가 같은 방향이거나 반대 방향인 경우입니다."
      ],
      "explanation": "코시-슈바르츠 부등식에서 $|\\langle \\mathbf{u}, \\mathbf{v} \\rangle| = \\|\\mathbf{u}\\|\\|\\mathbf{v}\\||\\cos\\theta|$이므로, 등호는 $|\\cos\\theta| = 1$, 즉 $\\theta = 0$ 또는 $\\pi$일 때 성립합니다. 이는 $\\mathbf{u}$와 $\\mathbf{v}$가 일차종속(한쪽이 다른 쪽의 스칼라 배)인 경우입니다.",
      "wrongAnalysis": "직교할 때 등호가 성립한다고 착각하는 실수가 흔합니다. 직교하면 내적이 $0$이므로 부등식의 좌변이 최소가 되고, 등호 조건과는 반대입니다."
    },
    {
      "id": "14-3",
      "type": "text",
      "difficulty": 3,
      "question": "$\\mathbf{v}_1 = (1, 0),\\ \\mathbf{v}_2 = (1, 1)$에 그람-슈미트를 적용하여 얻은 $\\mathbf{e}_2$를 $(a,b)$ 형태로 적으시오.",
      "answer": "(0,1)",
      "hints": [
        "$\\mathbf{e}_1 = (1, 0)$ (이미 단위벡터).",
        "$\\langle \\mathbf{v}_2, \\mathbf{e}_1 \\rangle = 1$.",
        "$\\mathbf{u}_2 = (1,1) - 1 \\cdot (1,0) = (0,1)$.",
        "$\\|\\mathbf{u}_2\\| = 1$이므로 $\\mathbf{e}_2 = (0,1)$."
      ],
      "explanation": "$\\mathbf{e}_1 = \\mathbf{v}_1 / \\|\\mathbf{v}_1\\| = (1,0)$. $\\langle \\mathbf{v}_2, \\mathbf{e}_1 \\rangle = 1 \\cdot 1 + 1 \\cdot 0 = 1$. $\\mathbf{u}_2 = (1,1) - 1 \\cdot (1,0) = (0,1)$. $\\|\\mathbf{u}_2\\| = 1$이므로 $\\mathbf{e}_2 = (0,1)$.",
      "wrongAnalysis": "사영을 빼지 않고 $\\mathbf{v}_2$를 바로 정규화하여 $\\left(\\frac{1}{\\sqrt{2}}, \\frac{1}{\\sqrt{2}}\\right)$라고 답하는 실수가 흔합니다. 직교화 단계를 빠뜨리면 안 됩니다."
    },
    {
      "id": "14-4",
      "type": "choice",
      "difficulty": 1,
      "question": "내적 $\\langle \\mathbf{u}, \\mathbf{v} \\rangle = 0$일 때 두 벡터의 관계는?",
      "choices": [
        "평행",
        "직교",
        "같다",
        "반대 방향"
      ],
      "answer": "직교",
      "hints": [
        "내적이 $0$이 되는 기하학적 의미를 생각하세요.",
        "$\\cos\\theta = 0$ 이면 $\\theta = 90^\\circ$."
      ],
      "explanation": "$\\langle \\mathbf{u}, \\mathbf{v} \\rangle = \\|\\mathbf{u}\\|\\|\\mathbf{v}\\|\\cos\\theta = 0$이고 두 벡터가 $\\mathbf{0}$이 아니면 $\\cos\\theta = 0$, 즉 $\\theta = 90^\\circ$입니다. 따라서 직교합니다.",
      "wrongAnalysis": "내적 $0$을 '크기가 $0$'으로 착각하는 실수가 있습니다. 내적 $0$은 수직 관계를 의미합니다."
    },
    {
      "id": "14-5",
      "type": "number",
      "difficulty": 2,
      "question": "직교행렬 $Q$에 대해 $\\det(Q^T Q)$의 값은?",
      "answer": "1",
      "hints": [
        "직교행렬의 정의: $Q^T Q = I$.",
        "$\\det(I) = ?$"
      ],
      "explanation": "$Q^T Q = I$이므로 $\\det(Q^T Q) = \\det(I) = 1$.",
      "wrongAnalysis": "$\\det(Q^T Q) = (\\det Q)^2$이라 답하는 것은 맞지만, $\\det(I) = 1$이라는 사실을 직접 쓰는 것이 더 빠릅니다."
    }
  ],
  "summary": {
    "keyPoints": [
      "내적은 선형성·대칭성·양정치성 세 공리를 만족하는 연산",
      "코시-슈바르츠 부등식: $|\\langle \\mathbf{u}, \\mathbf{v} \\rangle| \\leq \\|\\mathbf{u}\\|\\|\\mathbf{v}\\|$",
      "그람-슈미트: 사영을 빼고 정규화하여 직교정규 기저 생성"
    ],
    "formulas": [
      "\\|\\mathbf{v}\\| = \\sqrt{\\langle \\mathbf{v}, \\mathbf{v} \\rangle}",
      "|\\langle \\mathbf{u}, \\mathbf{v} \\rangle| \\leq \\|\\mathbf{u}\\| \\cdot \\|\\mathbf{v}\\|",
      "\\mathbf{u}_k = \\mathbf{v}_k - \\sum_{j=1}^{k-1} \\langle \\mathbf{v}_k, \\mathbf{e}_j \\rangle \\mathbf{e}_j",
      "Q^T Q = I"
    ],
    "commonMistakes": [
      "노름을 구할 때 제곱근을 빠뜨리는 실수",
      "그람-슈미트에서 사영을 빼지 않고 바로 정규화하는 실수",
      "코시-슈바르츠 등호 조건을 직교로 착각하는 실수"
    ],
    "nextConnection": "내적공간에서 직교정규 기저를 갖추었으니, 이제 행렬의 고유값을 체계적으로 구하는 특성다항식과, 모든 행렬이 자신의 특성다항식을 만족한다는 케일리-해밀턴 정리를 학습합니다."
  }
},
{
  "id": 15,
  "title": "특성다항식과 케일리-해밀턴 정리",
  "category": "고유이론",
  "level": "심화",
  "question": "행렬의 고유값을 체계적으로 구하는 다항식은 무엇이고, 행렬 자체가 그 다항식을 만족한다는 것은 무슨 뜻일까?",
  "concept": {
    "intro": ":::definition[개념 정의]\n정사각행렬 $A$의 **특성다항식**(characteristic polynomial)은 $p(\\lambda) = \\det(A - \\lambda I)$로 정의되며, $n \\times n$ 행렬에 대해 $\\lambda$에 관한 $n$차 다항식입니다. 고유값(eigenvalue)은 바로 이 특성다항식의 근입니다: $p(\\lambda_0) = 0$이면 $\\lambda_0$는 $A$의 고유값입니다. 특성다항식의 계수에는 행렬의 중요한 정보가 담겨 있습니다. 대각합(trace) $\\mathrm{tr}(A) = \\sum_{i} a_{ii}$는 모든 고유값의 합 $\\sum \\lambda_i$와 같고, 행렬식 $\\det(A)$는 모든 고유값의 곱 $\\prod \\lambda_i$와 같습니다.\n:::\n\n:::note[참고]\n고유값의 **대수적 중복도**(algebraic multiplicity)는 특성다항식에서 해당 근의 중복도이고, **기하적 중복도**(geometric multiplicity)는 대응하는 고유공간 $\\ker(A - \\lambda I)$의 차원입니다. 항상 $1 \\leq \\text{기하적 중복도} \\leq \\text{대수적 중복도}$가 성립합니다. 이 둘의 관계는 행렬의 대각화 가능성을 판별하는 핵심 기준이 됩니다.\n:::\n\n:::note[참고]\n**케일리-해밀턴 정리**(Cayley-Hamilton theorem)는 모든 정사각행렬이 자기 자신의 특성다항식을 만족한다는 놀라운 결과입니다: $p(A) = O$ (영행렬). 예를 들어, $2 \\times 2$ 행렬 $A$의 특성다항식이 $p(\\lambda) = \\lambda^2 - \\mathrm{tr}(A)\\lambda + \\det(A)$이면, $A^2 - \\mathrm{tr}(A) \\cdot A + \\det(A) \\cdot I = O$이 성립합니다. 이 정리의 강력한 응용 중 하나는 역행렬 표현입니다: $\\det(A) \\neq 0$일 때 케일리-해밀턴 등식을 정리하면 $A^{-1}$을 $A$의 다항식으로 표현할 수 있습니다.\n:::",
    "intuition": ":::note[직관]\n특성다항식은 행렬의 'DNA'와 같습니다. 고유값이라는 유전 정보를 모두 담고 있으며, 행렬의 행동(거듭제곱, 역행렬 등)을 예측하게 해줍니다. 케일리-해밀턴 정리는 '행렬은 자기 자신의 유전자에 의해 완전히 구속된다'는 뜻입니다. 마치 자기 이름을 방정식에 넣으면 $0$이 되는 것처럼, 행렬이 자신의 특성다항식에 들어가면 영행렬이 됩니다.\n:::",
    "formula": "p(\\lambda) = \\det(A - \\lambda I)\n\\mathrm{tr}(A) = \\sum_i \\lambda_i,\\quad \\det(A) = \\prod_i \\lambda_i\np(A) = O\\ (\\text{케일리-해밀턴})\n2 \\times 2:\\ A^2 - \\mathrm{tr}(A)\\,A + \\det(A)\\,I = O",
    "summary": ":::note[핵심 요약]\n• 특성다항식 $p(\\lambda) = \\det(A - \\lambda I)$의 근 = 고유값\n• $\\mathrm{tr}(A) = \\sum \\lambda_i$, $\\det(A) = \\prod \\lambda_i$\n• 대수적 중복도 $\\geq$ 기하적 중복도\n• 케일리-해밀턴: $p(A) = O$\n:::"
  },
  "examples": [
    {
      "title": "특성다항식과 케일리-해밀턴 검증",
      "problem": "$A = \\begin{pmatrix}2 & 1 \\\\ 0 & 3\\end{pmatrix}$의 특성다항식을 구하고, 케일리-해밀턴 정리를 검증하시오.",
      "steps": [
        "$A - \\lambda I = \\begin{pmatrix}2-\\lambda & 1 \\\\ 0 & 3-\\lambda\\end{pmatrix}$.",
        "$p(\\lambda) = \\det(A - \\lambda I) = (2-\\lambda)(3-\\lambda) - 0 = \\lambda^2 - 5\\lambda + 6$.",
        "고유값: $\\lambda = 2, 3$. 검산: $\\mathrm{tr}(A) = 5 = 2+3$, $\\det(A) = 6 = 2 \\times 3$. ✓",
        "케일리-해밀턴 검증: $p(A) = A^2 - 5A + 6I$.",
        "$A^2 = \\begin{pmatrix}4 & 5 \\\\ 0 & 9\\end{pmatrix}$.",
        "$A^2 - 5A + 6I = \\begin{pmatrix}4 & 5 \\\\ 0 & 9\\end{pmatrix} - \\begin{pmatrix}10 & 5 \\\\ 0 & 15\\end{pmatrix} + \\begin{pmatrix}6 & 0 \\\\ 0 & 6\\end{pmatrix} = \\begin{pmatrix}0 & 0 \\\\ 0 & 0\\end{pmatrix}$. ✓"
      ],
      "answer": "$p(\\lambda) = \\lambda^2 - 5\\lambda + 6$, $p(A) = O$ 성립",
      "lesson": "케일리-해밀턴 정리는 추상적으로 보이지만, 구체적 행렬에서 직접 계산하여 검증하면 그 의미를 체감할 수 있습니다. $2 \\times 2$에서는 항상 $A^2 - \\mathrm{tr}(A) \\cdot A + \\det(A) \\cdot I = O$입니다."
    },
    {
      "title": "[기본] 특성다항식 구하기",
      "problem": "$A = \\begin{pmatrix}5 & 1 \\\\ 0 & 2\\end{pmatrix}$ 의 특성다항식을 구하시오.",
      "steps": [
        "$\\det(A - \\lambda I) = \\det\\begin{pmatrix}5 - \\lambda & 1 \\\\ 0 & 2 - \\lambda\\end{pmatrix}$.",
        "$= (5 - \\lambda)(2 - \\lambda) - 0 = \\lambda^2 - 7\\lambda + 10$.",
        "고윳값: $\\lambda = 2, 5$."
      ],
      "answer": "$p(\\lambda) = \\lambda^2 - 7\\lambda + 10 = (\\lambda - 2)(\\lambda - 5)$",
      "lesson": "삼각행렬의 특성다항식은 대각 성분의 곱으로 바로 보입니다. $(5-\\lambda)(2-\\lambda) = 0$에서 고윳값을 읽으세요."
    },
    {
      "title": "[응용] 대수적·기하적 중복도 비교",
      "problem": "$A = \\begin{pmatrix}2 & 0 \\\\ 0 & 2\\end{pmatrix}$ 와 $B = \\begin{pmatrix}2 & 1 \\\\ 0 & 2\\end{pmatrix}$ 의 고윳값 $\\lambda = 2$에 대한 대수적·기하적 중복도를 비교하시오.",
      "steps": [
        "두 행렬 모두 $p(\\lambda) = (\\lambda - 2)^2$. 대수적 중복도 $= 2$.",
        "$A - 2I = O$. 고유공간 $= \\mathbb{R}^2$ 전체. 기하적 중복도 $= 2$.",
        "$B - 2I = \\begin{pmatrix}0 & 1 \\\\ 0 & 0\\end{pmatrix}$. 고유공간 $= \\mathrm{span}\\{(1,0)\\}$. 기하적 중복도 $= 1$."
      ],
      "answer": "$A$: 대수 $= 2$, 기하 $= 2$. $B$: 대수 $= 2$, 기하 $= 1$.",
      "lesson": "대수적 중복도 $\\geq$ 기하적 중복도입니다. $A$는 대각화 가능하지만 $B$는 불가능합니다."
    },
    {
      "title": "[응용] 케일리-해밀턴으로 $A^3$ 간소화",
      "problem": "$A = \\begin{pmatrix}1 & 1 \\\\ 0 & 2\\end{pmatrix}$ 에 대해 케일리-해밀턴 정리를 이용하여 $A^3$을 $A$의 일차식으로 표현하시오.",
      "steps": [
        "$p(\\lambda) = (1-\\lambda)(2-\\lambda) = \\lambda^2 - 3\\lambda + 2$.",
        "케일리-해밀턴: $A^2 = 3A - 2I$.",
        "$A^3 = A \\cdot A^2 = A(3A - 2I) = 3A^2 - 2A = 3(3A - 2I) - 2A = 7A - 6I$."
      ],
      "answer": "$A^3 = 7A - 6I$",
      "lesson": "케일리-해밀턴 정리를 반복 적용하면 $A$의 모든 거듭제곱을 $A$의 일차식($aA + bI$)으로 줄일 수 있습니다."
    },
    {
      "title": "[심화] trace와 det으로 고윳값 결정",
      "problem": "$2 \\times 2$ 행렬 $A$의 $\\mathrm{tr}(A) = 6$, $\\det(A) = 5$일 때 고윳값을 구하시오.",
      "steps": [
        "특성다항식: $\\lambda^2 - \\mathrm{tr}(A) \\lambda + \\det(A) = \\lambda^2 - 6\\lambda + 5 = 0$.",
        "$(\\lambda - 1)(\\lambda - 5) = 0$.",
        "$\\lambda_1 = 1,\\ \\lambda_2 = 5$.",
        "검산: $1 + 5 = 6 = \\mathrm{tr}(A)$, $1 \\times 5 = 5 = \\det(A)$. ✓"
      ],
      "answer": "$\\lambda_1 = 1,\\ \\lambda_2 = 5$",
      "lesson": "$2 \\times 2$ 행렬의 고윳값은 trace와 det만으로 결정됩니다. 특성다항식 $\\lambda^2 - \\mathrm{tr} \\cdot \\lambda + \\det = 0$을 근의 공식으로 풀면 됩니다."
    }
  ],
  "problems": [
    {
      "id": "15-1",
      "type": "number",
      "difficulty": 1,
      "question": "$A = \\begin{pmatrix}1 & 0 \\\\ 0 & 4\\end{pmatrix}$의 특성다항식의 근을 모두 더한 값은?",
      "answer": "5",
      "hints": [
        "대각행렬의 고유값은 대각 성분 자체입니다.",
        "고유값의 합 = $\\mathrm{tr}(A)$.",
        "$1 + 4$를 계산하세요."
      ],
      "explanation": "대각행렬의 고유값은 대각 성분이므로 $\\lambda_1 = 1$, $\\lambda_2 = 4$. 합은 $\\mathrm{tr}(A) = 1 + 4 = 5$.",
      "wrongAnalysis": "고유값의 합을 행렬식 $\\det(A) = 4$로 착각하는 실수가 있습니다. $\\mathrm{tr}(A) = \\sum \\lambda_i$, $\\det(A) = \\prod \\lambda_i$를 구분하세요."
    },
    {
      "id": "15-2",
      "type": "text",
      "difficulty": 2,
      "question": "$A = \\begin{pmatrix}3 & 1 \\\\ 0 & 2\\end{pmatrix}$의 특성다항식을 $\\lambda^2 + a\\lambda + b$ 형태로 적을 때, $(a,b)$를 적으시오.",
      "answer": "(-5,6)",
      "hints": [
        "$p(\\lambda) = \\det(A - \\lambda I) = (3-\\lambda)(2-\\lambda) - 0$.",
        "$(3-\\lambda)(2-\\lambda) = \\lambda^2 - 5\\lambda + 6$.",
        "$a = -5$, $b = 6$."
      ],
      "explanation": "$p(\\lambda) = (3-\\lambda)(2-\\lambda) = \\lambda^2 - 5\\lambda + 6$. 따라서 $a = -5$, $b = 6$이고 $(a,b) = (-5, 6)$.",
      "wrongAnalysis": "$\\det(A - \\lambda I)$를 계산할 때 $\\lambda$의 부호를 잘못 처리하여 $\\lambda^2 + 5\\lambda + 6$으로 답하는 실수가 흔합니다. $(3-\\lambda)$에서 전개할 때 부호에 주의하세요."
    },
    {
      "id": "15-3",
      "type": "number",
      "difficulty": 3,
      "question": "$A = \\begin{pmatrix}2 & 1 \\\\ 1 & 2\\end{pmatrix}$에 대해, 케일리-해밀턴 정리를 이용하여 $A^{-1}$을 $aA + bI$ 형태로 나타낼 때, $a + b$의 값은?",
      "answer": "1",
      "hints": [
        "특성다항식: $p(\\lambda) = \\lambda^2 - 4\\lambda + 3$.",
        "케일리-해밀턴: $A^2 - 4A + 3I = O$.",
        "양변에 $A^{-1}$을 곱하면: $A - 4I + 3A^{-1} = O$.",
        "$A^{-1} = \\dfrac{1}{3}(4I - A) = -\\dfrac{1}{3}A + \\dfrac{4}{3}I$."
      ],
      "explanation": "$p(\\lambda) = (2-\\lambda)^2 - 1 = \\lambda^2 - 4\\lambda + 3$. 케일리-해밀턴: $A^2 - 4A + 3I = O$. $A^{-1}$을 곱하면 $A - 4I + 3A^{-1} = O$이므로 $A^{-1} = \\frac{1}{3}(4I - A) = -\\frac{1}{3}A + \\frac{4}{3}I$. $a = -\\frac{1}{3}$, $b = \\frac{4}{3}$이므로 $a + b = 1$.",
      "wrongAnalysis": "케일리-해밀턴 등식에서 $A^{-1}$을 곱할 때 행렬 곱셈의 순서를 혼동하거나, $\\det(A) = 0$인지 확인하지 않는 실수가 있습니다. $\\det(A) = 3 \\neq 0$이므로 역행렬이 존재합니다."
    },
    {
      "id": "15-4",
      "type": "number",
      "difficulty": 1,
      "question": "$A = \\begin{pmatrix}3 & 0 \\\\ 0 & 5\\end{pmatrix}$의 고윳값의 곱은?",
      "answer": "15",
      "hints": [
        "대각행렬의 고윳값은 대각 성분입니다.",
        "고윳값의 곱 $= \\det(A)$."
      ],
      "explanation": "고윳값 $\\lambda_1 = 3$, $\\lambda_2 = 5$. 곱 $= 3 \\times 5 = 15 = \\det(A)$.",
      "wrongAnalysis": "고윳값의 합 $3 + 5 = 8$을 답하는 실수가 있습니다. 곱은 $\\det(A)$, 합은 $\\mathrm{tr}(A)$입니다."
    },
    {
      "id": "15-5",
      "type": "choice",
      "difficulty": 2,
      "question": "$2 \\times 2$ 행렬 $A$에 대해 케일리-해밀턴 정리 $A^2 - \\mathrm{tr}(A) \\cdot A + \\det(A) \\cdot I = O$에서, $\\mathrm{tr}(A) = 7$이고 $\\det(A) = 10$이면 $A^2$은?",
      "choices": [
        "$7A - 10I$",
        "$7A + 10I$",
        "$10A - 7I$",
        "$-7A + 10I$"
      ],
      "answer": "$7A - 10I$",
      "hints": [
        "$A^2 - 7A + 10I = O$를 정리하세요.",
        "$A^2 = 7A - 10I$."
      ],
      "explanation": "케일리-해밀턴: $A^2 - 7A + 10I = O$. 이항하면 $A^2 = 7A - 10I$.",
      "wrongAnalysis": "이항할 때 부호를 틀려 $A^2 = 7A + 10I$로 답하는 실수가 있습니다. $-10I$가 우변으로 넘어가면 $+10I$가 아닙니다. 원래 $+10I$이므로 이항하면 $-10I$."
    }
  ],
  "summary": {
    "keyPoints": [
      "특성다항식 $p(\\lambda) = \\det(A - \\lambda I)$의 근이 고유값",
      "대각합 = 고유값의 합, 행렬식 = 고유값의 곱",
      "케일리-해밀턴 정리: 모든 행렬은 자신의 특성다항식을 만족 ($p(A) = O$)"
    ],
    "formulas": [
      "p(\\lambda) = \\det(A - \\lambda I)",
      "\\mathrm{tr}(A) = \\sum \\lambda_i,\\quad \\det(A) = \\prod \\lambda_i",
      "p(A) = O",
      "2 \\times 2:\\ A^2 - \\mathrm{tr}(A)A + \\det(A)I = O"
    ],
    "commonMistakes": [
      "$\\det(A - \\lambda I)$ 전개 시 $\\lambda$의 부호를 틀리는 실수",
      "$\\mathrm{tr}(A)$와 $\\det(A)$를 고유값의 합/곱과 혼동하는 실수",
      "케일리-해밀턴에서 $A^{-1}$을 구할 때 $\\det(A) \\neq 0$ 확인을 빠뜨리는 실수"
    ],
    "nextConnection": "특성다항식으로 고유값을 구하고 케일리-해밀턴으로 행렬의 성질을 파악했으니, 이제 행렬을 대각행렬로 분해하는 대각화와, 대칭행렬에 대한 스펙트럼 정리를 학습합니다."
  }
},
{
  "id": 16,
  "title": "대각화와 스펙트럼 정리",
  "category": "고유이론",
  "level": "심화",
  "question": "행렬을 대각행렬로 분해할 수 있는 조건은 무엇이고, 대칭행렬에는 어떤 특별한 성질이 있을까?",
  "concept": {
    "intro": ":::definition[개념 정의]\n정사각행렬 $A$가 **대각화 가능**(diagonalizable)하다는 것은 가역행렬 $P$와 대각행렬 $D$가 존재하여 $A = PDP^{-1}$로 쓸 수 있다는 뜻입니다. 이때 $D$의 대각 성분은 $A$의 고유값이고, $P$의 열벡터는 대응하는 고유벡터입니다. 대각화의 핵심 조건은 $n \\times n$ 행렬에 대해 $n$개의 일차독립인 고유벡터가 존재해야 한다는 것이며, 이는 모든 고유값에 대해 **대수적 중복도 = 기하적 중복도**가 성립하는 것과 동치입니다. 대각화가 되면 행렬 거듭제곱이 $A^k = PD^kP^{-1}$로 매우 간단해집니다.\n:::\n\n:::note[참고]\n**실대칭행렬**(real symmetric matrix, $A = A^T$)은 항상 대각화 가능하며, 더 나아가 고유벡터를 직교정규 기저로 선택할 수 있습니다. 이것이 **스펙트럼 정리**(spectral theorem)입니다: 실대칭행렬 $A$에 대해 직교행렬 $Q$ ($Q^TQ = I$)가 존재하여 $A = QDQ^T$로 쓸 수 있습니다. 대칭행렬의 고유값은 모두 실수이고, 서로 다른 고유값에 대응하는 고유벡터는 자동으로 직교합니다.\n:::\n\n:::note[참고]\n더 일반적으로, **정규행렬**(normal matrix, $AA^T = A^TA$)은 유니터리 대각화가 가능합니다. 정규행렬에는 대칭행렬, 직교행렬, 반대칭행렬 등이 포함됩니다. 스펙트럼 정리의 응용은 매우 넓습니다: **이차형식** $\\mathbf{x}^T A \\mathbf{x}$의 분석에서 대각화를 통해 주축을 찾을 수 있고, 이는 **주성분 분석**(PCA)의 수학적 기초가 됩니다. 공분산 행렬(대칭 양반정치)을 대각화하면 데이터의 분산이 최대인 방향을 고유벡터로 얻게 됩니다.\n:::",
    "intuition": ":::note[직관]\n대각화는 복잡한 선형변환을 '적절한 좌표계에서 바라보면 단순히 각 축을 늘이거나 줄이는 것'으로 이해하는 것입니다. $A = PDP^{-1}$에서 $P$는 좌표계 변환, $D$는 각 축 방향의 스케일링입니다. 대칭행렬의 스펙트럼 분해가 특별한 이유는, 좌표 변환 $Q$가 직교(회전/반사)이므로 축이 서로 수직을 유지한다는 점입니다.\n:::",
    "formula": "A = PDP^{-1}\\ (P:\\text{고유벡터 행렬},\\ D:\\text{고유값 대각행렬})\nA^k = PD^kP^{-1}\nA = A^T \\Rightarrow A = QDQ^T\\ (Q^TQ = I,\\ \\text{스펙트럼 정리})\n\\text{대각화 가능} \\Leftrightarrow \\text{모든 고유값에 대해 대수적 중복도 = 기하적 중복도}",
    "summary": ":::note[핵심 요약]\n• 대각화: $A = PDP^{-1}$ (고유벡터 $n$개 필요)\n• $A^k = PD^kP^{-1}$로 거듭제곱 간소화\n• 스펙트럼 정리: 대칭행렬은 $A = QDQ^T$ (직교 대각화)\n• 응용: 이차형식 분석, PCA\n:::"
  },
  "examples": [
    {
      "title": "대칭행렬의 직교 대각화",
      "problem": "$A = \\begin{pmatrix}2 & 1 \\\\ 1 & 2\\end{pmatrix}$를 직교 대각화하시오.",
      "steps": [
        "특성다항식: $p(\\lambda) = (2-\\lambda)^2 - 1 = \\lambda^2 - 4\\lambda + 3 = (\\lambda - 1)(\\lambda - 3)$.",
        "고유값: $\\lambda_1 = 1$, $\\lambda_2 = 3$.",
        "$\\lambda_1 = 1$: $(A - I)\\mathbf{x} = \\mathbf{0}$ → $\\begin{pmatrix}1 & 1 \\\\ 1 & 1\\end{pmatrix}\\mathbf{x} = \\mathbf{0}$ → $\\mathbf{v}_1 = (1, -1)$.",
        "$\\lambda_2 = 3$: $(A - 3I)\\mathbf{x} = \\mathbf{0}$ → $\\begin{pmatrix}-1 & 1 \\\\ 1 & -1\\end{pmatrix}\\mathbf{x} = \\mathbf{0}$ → $\\mathbf{v}_2 = (1, 1)$.",
        "$\\mathbf{v}_1 \\cdot \\mathbf{v}_2 = 0$ ✓ (서로 다른 고유값이므로 자동 직교).",
        "정규화: $\\mathbf{e}_1 = \\dfrac{1}{\\sqrt{2}}(1,-1)$, $\\mathbf{e}_2 = \\dfrac{1}{\\sqrt{2}}(1,1)$.",
        "$Q = \\dfrac{1}{\\sqrt{2}}\\begin{pmatrix}1 & 1 \\\\ -1 & 1\\end{pmatrix}$, $D = \\begin{pmatrix}1 & 0 \\\\ 0 & 3\\end{pmatrix}$, $A = QDQ^T$."
      ],
      "answer": "$Q = \\dfrac{1}{\\sqrt{2}}\\begin{pmatrix}1 & 1 \\\\ -1 & 1\\end{pmatrix}$, $D = \\begin{pmatrix}1 & 0 \\\\ 0 & 3\\end{pmatrix}$",
      "lesson": "대칭행렬은 서로 다른 고유값의 고유벡터가 자동으로 직교하므로, 그람-슈미트 없이도 직교 대각화가 가능합니다."
    },
    {
      "title": "[기본] 대각화 가능 여부 판별",
      "problem": "$A = \\begin{pmatrix}1 & 0 \\\\ 0 & 2\\end{pmatrix}$ 가 대각화 가능한지 판별하시오.",
      "steps": [
        "$A$는 이미 대각행렬.",
        "고윳값 $\\lambda_1 = 1$, $\\lambda_2 = 2$ (서로 다름).",
        "고유벡터 $(1, 0)$, $(0, 1)$은 일차독립.",
        "대각화 가능. ($P = I$, $D = A$)"
      ],
      "answer": "대각화 가능 ($A$ 자체가 이미 대각행렬)",
      "lesson": "대각행렬은 이미 대각화된 형태입니다. 모든 고윳값이 서로 다르면 항상 대각화 가능합니다."
    },
    {
      "title": "[응용] 대각화를 이용한 거듭제곱",
      "problem": "$A = \\begin{pmatrix}3 & 0 \\\\ 0 & 2\\end{pmatrix}$ 일 때 $A^5$를 구하시오.",
      "steps": [
        "$A$는 대각행렬이므로 $A^5 = \\begin{pmatrix}3^5 & 0 \\\\ 0 & 2^5\\end{pmatrix}$.",
        "$3^5 = 243$, $2^5 = 32$."
      ],
      "answer": "$A^5 = \\begin{pmatrix}243 & 0 \\\\ 0 & 32\\end{pmatrix}$",
      "lesson": "대각행렬의 거듭제곱은 각 대각 성분을 독립적으로 거듭제곱합니다. 대각화의 가장 직접적인 이점입니다."
    },
    {
      "title": "[응용] 대각화 불가능 판별",
      "problem": "$A = \\begin{pmatrix}2 & 1 \\\\ 0 & 2\\end{pmatrix}$ 가 대각화 가능한지 판별하시오.",
      "steps": [
        "고윳값: $\\lambda = 2$ (중복도 $2$).",
        "$A - 2I = \\begin{pmatrix}0 & 1 \\\\ 0 & 0\\end{pmatrix}$. 고유공간: $\\mathrm{span}\\{(1, 0)\\}$.",
        "기하적 중복도 $= 1 < 2 =$ 대수적 중복도.",
        "일차독립 고유벡터가 $2$개 필요하지만 $1$개만 존재 → 대각화 불가능."
      ],
      "answer": "대각화 불가능 (기하적 중복도 $<$ 대수적 중복도)",
      "lesson": "대각화 가능하려면 모든 고윳값에서 대수적 중복도 $=$ 기하적 중복도여야 합니다. 이 행렬은 조르당 블록으로만 표현됩니다."
    },
    {
      "title": "[심화] 비대각화를 이용한 피보나치 수열",
      "problem": "피보나치 수열 $F_{n+2} = F_{n+1} + F_n$을 행렬 $A = \\begin{pmatrix}1 & 1 \\\\ 1 & 0\\end{pmatrix}$를 대각화하여 $A^n$의 닫힌 형태를 구하는 원리를 설명하시오.",
      "steps": [
        "$\\begin{pmatrix}F_{n+1} \\\\ F_n\\end{pmatrix} = A^n \\begin{pmatrix}1 \\\\ 0\\end{pmatrix}$ 관계 확인.",
        "고윳값: $\\lambda^2 - \\lambda - 1 = 0$이므로 $\\lambda = \\dfrac{1 \\pm \\sqrt{5}}{2}$.",
        "$\\lambda_1 = \\phi \\approx 1.618$ (황금비), $\\lambda_2 = 1 - \\phi \\approx -0.618$.",
        "$A = PDP^{-1}$이므로 $A^n = PD^nP^{-1} = P\\begin{pmatrix}\\phi^n & 0 \\\\ 0 & (1-\\phi)^n\\end{pmatrix}P^{-1}$.",
        "이로부터 비네 공식 $F_n = \\dfrac{\\phi^n - (1-\\phi)^n}{\\sqrt{5}}$를 유도."
      ],
      "answer": "$F_n = \\dfrac{\\phi^n - (1-\\phi)^n}{\\sqrt{5}}$ ($\\phi = \\dfrac{1+\\sqrt{5}}{2}$)",
      "lesson": "대각화는 점화식을 닫힌 형태로 변환하는 강력한 도구입니다. 행렬 거듭제곱 $A^n = PD^nP^{-1}$에서 $D^n$은 간단히 계산됩니다."
    }
  ],
  "problems": [
    {
      "id": "16-1",
      "type": "choice",
      "difficulty": 1,
      "question": "$A = PDP^{-1}$일 때, $A^3$은?",
      "choices": [
        "$P^3 D^3 (P^{-1})^3$",
        "$PD^3P^{-1}$",
        "$P^3 D P^{-1}$",
        "$3PDP^{-1}$"
      ],
      "answer": "$PD^3P^{-1}$",
      "hints": [
        "$A^2 = (PDP^{-1})(PDP^{-1})$을 전개해 보세요.",
        "$P^{-1}P = I$가 중간에서 소거됩니다.",
        "$A^2 = PD^2P^{-1}$이 됩니다."
      ],
      "explanation": "$A^3 = (PDP^{-1})^3 = PDP^{-1} \\cdot PDP^{-1} \\cdot PDP^{-1} = PD^3P^{-1}$. 중간의 $P^{-1}P = I$가 소거됩니다.",
      "wrongAnalysis": "$P$에도 거듭제곱을 적용하여 $P^3D^3(P^{-1})^3$으로 답하는 실수가 흔합니다. 행렬 곱은 교환법칙이 성립하지 않으므로 $(PDP^{-1})^k \\neq P^kD^k(P^{-1})^k$입니다."
    },
    {
      "id": "16-2",
      "type": "choice",
      "difficulty": 2,
      "question": "실대칭행렬의 고유값에 대해 항상 참인 것은?",
      "choices": [
        "모두 양수이다",
        "모두 실수이다",
        "모두 정수이다",
        "모두 서로 다르다"
      ],
      "answer": "모두 실수이다",
      "hints": [
        "실대칭행렬의 스펙트럼 정리를 떠올려 보세요.",
        "복소 고유값이 나올 수 있을까요?",
        "$A = A^T$이면 $\\lambda$가 고유값일 때 $\\bar{\\lambda}$도 고유값이며..."
      ],
      "explanation": "실대칭행렬은 스펙트럼 정리에 의해 항상 실수 고유값만 가집니다. 양수일 필요는 없고(예: $-I$의 고유값은 $-1$), 정수일 필요도 없으며, 중복 가능합니다(예: $I$의 고유값은 $1$ 중복).",
      "wrongAnalysis": "'대칭이면 양정치'라고 착각하는 실수가 있습니다. 양정치성은 대칭행렬의 추가 조건이지, 대칭만으로 보장되지 않습니다."
    },
    {
      "id": "16-3",
      "type": "number",
      "difficulty": 3,
      "question": "$A = \\begin{pmatrix}5 & 0 \\\\ 0 & 3\\end{pmatrix}$일 때, $A^{10}$의 $(1,1)$ 성분의 값은? (답은 정수로 적으시오)",
      "answer": "9765625",
      "hints": [
        "$A$는 이미 대각행렬입니다.",
        "대각행렬의 거듭제곱은 각 대각 성분을 거듭제곱한 것입니다.",
        "$A^{10}$의 $(1,1)$ 성분 $= 5^{10}$.",
        "$5^{10} = 9765625$."
      ],
      "explanation": "$A$가 대각행렬이므로 $A^{10} = \\begin{pmatrix}5^{10} & 0 \\\\ 0 & 3^{10}\\end{pmatrix}$. $(1,1)$ 성분은 $5^{10} = 9{,}765{,}625$.",
      "wrongAnalysis": "대각행렬의 거듭제곱에서 성분을 곱하는 대신 행렬 전체에 스칼라 거듭제곱을 적용하는 실수가 있습니다. 대각행렬의 거듭제곱은 각 대각 성분을 독립적으로 거듭제곱하는 것입니다."
    },
    {
      "id": "16-4",
      "type": "choice",
      "difficulty": 1,
      "question": "대각행렬 $D = \\begin{pmatrix}2 & 0 \\\\ 0 & 3\\end{pmatrix}$에 대해 $D^2$은?",
      "choices": [
        "$\\begin{pmatrix}4 & 0 \\\\ 0 & 9\\end{pmatrix}$",
        "$\\begin{pmatrix}4 & 0 \\\\ 0 & 6\\end{pmatrix}$",
        "$\\begin{pmatrix}2 & 0 \\\\ 0 & 9\\end{pmatrix}$",
        "$\\begin{pmatrix}4 & 4 \\\\ 9 & 9\\end{pmatrix}$"
      ],
      "answer": "$\\begin{pmatrix}4 & 0 \\\\ 0 & 9\\end{pmatrix}$",
      "hints": [
        "대각행렬의 거듭제곱은 각 대각 성분을 거듭제곱합니다.",
        "$2^2 = 4$, $3^2 = 9$."
      ],
      "explanation": "$D^2 = \\begin{pmatrix}2^2 & 0 \\\\ 0 & 3^2\\end{pmatrix} = \\begin{pmatrix}4 & 0 \\\\ 0 & 9\\end{pmatrix}$.",
      "wrongAnalysis": "$3 \\times 2 = 6$으로 계산하는 것은 곱이 아니라 거듭제곱입니다. $3^2 = 9$."
    },
    {
      "id": "16-5",
      "type": "number",
      "difficulty": 2,
      "question": "대칭행렬 $A = \\begin{pmatrix}4 & 2 \\\\ 2 & 1\\end{pmatrix}$의 고윳값 중 작은 값은?",
      "answer": "0",
      "hints": [
        "특성다항식: $\\det(A - \\lambda I) = (4-\\lambda)(1-\\lambda) - 4 = 0$.",
        "$\\lambda^2 - 5\\lambda = \\lambda(\\lambda - 5) = 0$."
      ],
      "explanation": "$(4-\\lambda)(1-\\lambda) - 4 = \\lambda^2 - 5\\lambda + 4 - 4 = \\lambda^2 - 5\\lambda = \\lambda(\\lambda - 5) = 0$. $\\lambda = 0$ 또는 $\\lambda = 5$. 작은 값은 $0$.",
      "wrongAnalysis": "특성다항식 전개 시 $-bc$ 항을 빼먹어 $\\lambda^2 - 5\\lambda + 4 = 0$으로 풀면 $\\lambda = 1, 4$가 됩니다. $-4$ 항을 반드시 빼야 합니다."
    }
  ],
  "summary": {
    "keyPoints": [
      "대각화: $A = PDP^{-1}$ (일차독립 고유벡터 $n$개 필요)",
      "스펙트럼 정리: 대칭행렬은 직교 대각화 $A = QDQ^T$ 가능",
      "대칭행렬의 고유값은 항상 실수"
    ],
    "formulas": [
      "A = PDP^{-1},\\quad A^k = PD^kP^{-1}",
      "A = A^T \\Rightarrow A = QDQ^T,\\quad Q^TQ = I",
      "\\text{대각화 가능} \\Leftrightarrow \\text{대수적 중복도 = 기하적 중복도 (모든 고유값)}"
    ],
    "commonMistakes": [
      "$(PDP^{-1})^k$를 $P^kD^kP^{-k}$로 전개하는 실수",
      "실대칭행렬이면 양정치라고 착각하는 실수",
      "대각화 불가능한 행렬(결함 행렬)에 대각화를 시도하는 실수"
    ],
    "nextConnection": "대각화와 스펙트럼 정리로 행렬의 구조를 파악했습니다. 이제 선형사상의 구조를 더 깊이 이해하기 위해 핵(kernel)과 상(image), 동형정리, 직합 분해를 학습합니다."
  }
},
{
  "id": 17,
  "title": "동형정리와 직합",
  "category": "벡터 공간의 구조",
  "level": "심화",
  "question": "선형사상의 핵과 상은 어떤 관계를 갖고, 벡터 공간을 더 작은 조각으로 분해하려면 어떻게 해야 할까?",
  "concept": {
    "intro": ":::definition[개념 정의]\n선형사상 $T: V \\to W$에 대해 **핵**(kernel)은 $\\ker(T) = \\{\\mathbf{v} \\in V \\mid T(\\mathbf{v}) = \\mathbf{0}\\}$이고, **상**(image)은 $\\mathrm{im}(T) = \\{T(\\mathbf{v}) \\mid \\mathbf{v} \\in V\\}$입니다. 핵은 $V$의 부분공간이고, 상은 $W$의 부분공간입니다. 핵이 클수록 $T$가 '삼키는' 정보가 많고, 상이 클수록 $T$가 '도달하는' 범위가 넓습니다. 차원 정리(rank-nullity) $\\dim V = \\dim \\ker T + \\dim \\mathrm{im}\\, T$는 이 균형을 정량적으로 표현합니다.\n:::\n\n:::note[참고]\n**제1 동형정리**(first isomorphism theorem)는 이 관계를 구조적으로 정밀하게 기술합니다: $V / \\ker(T) \\cong \\mathrm{im}(T)$. 즉, 핵으로 '찌그러뜨린' 공간(몫공간)이 상과 동형입니다. 이는 $T$가 핵에 속하는 차이를 무시하면 상으로의 일대일 대응이 된다는 뜻입니다. 예를 들어, $T: \\mathbb{R}^3 \\to \\mathbb{R}^2$에서 $\\ker(T)$가 $1$차원 직선이면, $\\mathbb{R}^3$을 그 직선 방향으로 찌그러뜨린 $2$차원 공간이 상 $\\mathrm{im}(T)$와 같은 구조를 가집니다.\n:::\n\n:::note[참고]\n**직합**(direct sum)은 벡터 공간을 겹침 없이 조각으로 분해하는 개념입니다. $V = U \\oplus W$라 함은 $V = U + W$ (모든 $\\mathbf{v} \\in V$가 $\\mathbf{u} + \\mathbf{w}$로 쓸 수 있음)이고 $U \\cap W = \\{\\mathbf{0}\\}$ (분해가 유일함)을 동시에 만족하는 것입니다. 이때 $\\dim(U \\oplus W) = \\dim U + \\dim W$가 성립합니다. 직합 분해는 **사영 연산자**(projection operator)와 밀접합니다: $V = U \\oplus W$이면 모든 $\\mathbf{v} = \\mathbf{u} + \\mathbf{w}$에서 $P(\\mathbf{v}) = \\mathbf{u}$로 정의되는 사영 $P$는 $P^2 = P$ (**멱등**, idempotent)를 만족합니다. 역으로, 멱등 행렬 $P$가 있으면 $V = \\mathrm{im}(P) \\oplus \\ker(P)$로 직합 분해됩니다.\n:::",
    "intuition": ":::note[직관]\n동형정리는 '정보 보존의 법칙'입니다. 선형사상이 핵으로 잃어버리는 정보를 빼고 나면, 남은 것이 정확히 상이 됩니다. 마치 그림자를 만드는 과정에서 높이 정보를 잃지만, 잃어버린 방향을 무시하면 그림자와 원래 도형이 일대일로 대응하는 것과 같습니다. 직합은 레고 블록처럼 공간을 겹치지 않는 부품으로 나누는 것입니다.\n:::",
    "formula": "\\ker(T) = \\{\\mathbf{v} \\in V \\mid T(\\mathbf{v}) = \\mathbf{0}\\}\n\\mathrm{im}(T) = \\{T(\\mathbf{v}) \\mid \\mathbf{v} \\in V\\}\n\\dim V = \\dim \\ker T + \\dim \\mathrm{im}\\, T\nV/\\ker(T) \\cong \\mathrm{im}(T)\nV = U \\oplus W \\Leftrightarrow V = U + W,\\ U \\cap W = \\{\\mathbf{0}\\}\n\\dim(U \\oplus W) = \\dim U + \\dim W\nP^2 = P\\ (\\text{사영 연산자, 멱등})",
    "summary": ":::note[핵심 요약]\n• 핵: $T$가 $\\mathbf{0}$으로 보내는 벡터들의 공간\n• 상: $T$가 도달하는 벡터들의 공간\n• 제1 동형정리: $V/\\ker(T) \\cong \\mathrm{im}(T)$\n• 직합: $V = U \\oplus W$ ($U \\cap W = \\{\\mathbf{0}\\}$, 분해 유일)\n• 사영 $P$: $P^2 = P$, $V = \\mathrm{im}(P) \\oplus \\ker(P)$\n:::"
  },
  "examples": [
    {
      "title": "핵과 상의 차원, 직합 분해",
      "problem": "$T: \\mathbb{R}^3 \\to \\mathbb{R}^3$를 $T(x,y,z) = (x+y,\\ x+y,\\ 0)$으로 정의할 때, $\\ker(T)$와 $\\mathrm{im}(T)$의 기저 및 차원을 구하고, $\\mathbb{R}^3$의 직합 분해를 제시하시오.",
      "steps": [
        "$T(x,y,z) = \\mathbf{0}$: $x+y = 0$, $z$는 자유. $\\ker(T) = \\{(-t, t, s) \\mid t, s \\in \\mathbb{R}\\} = \\mathrm{span}\\{(-1,1,0), (0,0,1)\\}$.",
        "$\\dim \\ker(T) = 2$.",
        "$\\mathrm{im}(T) = \\{(a, a, 0) \\mid a \\in \\mathbb{R}\\} = \\mathrm{span}\\{(1,1,0)\\}$.",
        "$\\dim \\mathrm{im}(T) = 1$.",
        "검산: $\\dim \\ker T + \\dim \\mathrm{im}\\, T = 2 + 1 = 3 = \\dim \\mathbb{R}^3$. ✓",
        "$\\ker(T) \\cap \\mathrm{im}(T) = \\{\\mathbf{0}\\}$ 확인: $(1,1,0) \\notin \\ker(T)$ (∵ $1+1 \\neq 0$). ✓",
        "따라서 $\\mathbb{R}^3 = \\ker(T) \\oplus \\mathrm{im}(T)$ (이 경우 성립)."
      ],
      "answer": "$\\ker(T)$: 기저 $\\{(-1,1,0),(0,0,1)\\}$, 차원 $2$. $\\mathrm{im}(T)$: 기저 $\\{(1,1,0)\\}$, 차원 $1$.",
      "lesson": "차원 정리 $\\dim V = \\dim \\ker T + \\dim \\mathrm{im}\\, T$를 반드시 검산에 활용하세요. 핵과 상의 교집합이 $\\{\\mathbf{0}\\}$이면 직합 분해가 됩니다."
    },
    {
      "title": "[기본] 핵과 상의 차원 계산",
      "problem": "$T: \\mathbb{R}^3 \\to \\mathbb{R}^2$를 $T(x, y, z) = (x + z,\\ y)$로 정의할 때, $\\dim \\ker(T)$와 $\\dim \\mathrm{im}(T)$를 구하시오.",
      "steps": [
        "$T(x,y,z) = \\mathbf{0}$: $x + z = 0$, $y = 0$. $\\ker(T) = \\{(-t, 0, t)\\} = \\mathrm{span}\\{(-1,0,1)\\}$.",
        "$\\dim \\ker(T) = 1$.",
        "차원 정리: $\\dim \\mathrm{im}(T) = 3 - 1 = 2$.",
        "$\\mathrm{im}(T) = \\mathbb{R}^2$ (전사)."
      ],
      "answer": "$\\dim \\ker(T) = 1$, $\\dim \\mathrm{im}(T) = 2$",
      "lesson": "차원 정리에서 사용하는 것은 정의역의 차원입니다. 공역이 아닌 정의역에서 출발합니다."
    },
    {
      "title": "[응용] 동형 사상 판별",
      "problem": "$T: \\mathbb{R}^2 \\to \\mathbb{R}^2$를 $T(x, y) = (x + y,\\ x - y)$로 정의할 때, $T$가 동형사상(isomorphism)인지 판별하시오.",
      "steps": [
        "$\\ker(T)$: $x + y = 0$, $x - y = 0$ → $x = y = 0$. $\\ker(T) = \\{\\mathbf{0}\\}$.",
        "$\\ker(T) = \\{\\mathbf{0}\\}$이므로 단사(injective).",
        "$\\dim V = \\dim W = 2$이고 단사이므로 전사(surjective)도 성립.",
        "$T$는 동형사상."
      ],
      "answer": "$T$는 동형사상 ($\\ker(T) = \\{\\mathbf{0}\\}$이고 정의역 $=$ 공역 차원)",
      "lesson": "유한차원 벡터 공간에서 같은 차원이면, 단사 $\\Leftrightarrow$ 전사 $\\Leftrightarrow$ 동형사상입니다."
    },
    {
      "title": "[응용] 직합 분해 예시",
      "problem": "$V = \\mathbb{R}^3$에서 $U = \\{(x, y, 0)\\}$, $W = \\{(0, 0, z)\\}$일 때 $V = U \\oplus W$인지 확인하시오.",
      "steps": [
        "$U + W$: $(x, y, 0) + (0, 0, z) = (x, y, z)$이므로 $U + W = \\mathbb{R}^3$. ✓",
        "$U \\cap W$: $(x, y, 0) = (0, 0, z)$이면 $x = y = z = 0$. $U \\cap W = \\{\\mathbf{0}\\}$. ✓",
        "$\\dim U + \\dim W = 2 + 1 = 3 = \\dim V$. ✓"
      ],
      "answer": "$V = U \\oplus W$ (직합 분해 성립)",
      "lesson": "직합의 두 조건은 $V = U + W$과 $U \\cap W = \\{\\mathbf{0}\\}$입니다. 차원 공식 $\\dim(U \\oplus W) = \\dim U + \\dim W$로도 검증할 수 있습니다."
    },
    {
      "title": "[심화] 멱등 행렬과 직합 분해",
      "problem": "$P = \\begin{pmatrix}1 & 0 \\\\ 0 & 0\\end{pmatrix}$ 가 멱등($P^2 = P$)임을 보이고, $\\mathbb{R}^2 = \\mathrm{im}(P) \\oplus \\ker(P)$를 구체적으로 제시하시오.",
      "steps": [
        "$P^2 = \\begin{pmatrix}1 & 0 \\\\ 0 & 0\\end{pmatrix}\\begin{pmatrix}1 & 0 \\\\ 0 & 0\\end{pmatrix} = \\begin{pmatrix}1 & 0 \\\\ 0 & 0\\end{pmatrix} = P$. ✓",
        "$\\mathrm{im}(P) = \\{P\\mathbf{x}\\} = \\{(x, 0)\\} = \\mathrm{span}\\{(1, 0)\\}$.",
        "$\\ker(P) = \\{\\mathbf{x} \\mid P\\mathbf{x} = \\mathbf{0}\\} = \\{(0, y)\\} = \\mathrm{span}\\{(0, 1)\\}$.",
        "$\\mathrm{im}(P) \\cap \\ker(P) = \\{\\mathbf{0}\\}$. ✓",
        "$\\mathbb{R}^2 = \\mathrm{im}(P) \\oplus \\ker(P)$."
      ],
      "answer": "$\\mathrm{im}(P) = \\mathrm{span}\\{(1,0)\\}$, $\\ker(P) = \\mathrm{span}\\{(0,1)\\}$",
      "lesson": "멱등 행렬($P^2 = P$)은 공간을 $\\mathrm{im}(P)$와 $\\ker(P)$로 직합 분해합니다. 고윳값은 $0$과 $1$만 가능합니다."
    }
  ],
  "problems": [
    {
      "id": "17-1",
      "type": "number",
      "difficulty": 1,
      "question": "$T: \\mathbb{R}^4 \\to \\mathbb{R}^3$에서 $\\dim \\mathrm{im}(T) = 2$일 때, $\\dim \\ker(T)$는?",
      "answer": "2",
      "hints": [
        "차원 정리: $\\dim V = \\dim \\ker T + \\dim \\mathrm{im}\\, T$.",
        "$\\dim \\mathbb{R}^4 = 4$.",
        "$4 = \\dim \\ker T + 2$."
      ],
      "explanation": "차원 정리에 의해 $\\dim \\ker T = \\dim V - \\dim \\mathrm{im}\\, T = 4 - 2 = 2$.",
      "wrongAnalysis": "공역의 차원 $3$을 사용하여 $3 - 2 = 1$로 답하는 실수가 있습니다. 차원 정리에서 사용하는 것은 정의역의 차원입니다."
    },
    {
      "id": "17-2",
      "type": "choice",
      "difficulty": 2,
      "question": "$V = U \\oplus W$가 성립하기 위한 조건으로 올바른 것은?",
      "choices": [
        "$V = U + W$이고 $U \\cap W = V$",
        "$V = U + W$이고 $U \\cap W = \\{\\mathbf{0}\\}$",
        "$U \\subset W$이고 $\\dim U = \\dim W$",
        "$V = U \\times W$"
      ],
      "answer": "$V = U + W$이고 $U \\cap W = \\{\\mathbf{0}\\}$",
      "hints": [
        "직합의 두 조건을 떠올려 보세요.",
        "첫째: 모든 벡터가 두 부분공간의 합으로 표현.",
        "둘째: 교집합이 자명해야 분해가 유일."
      ],
      "explanation": "$V = U \\oplus W$는 $V = U + W$ (모든 벡터를 $\\mathbf{u} + \\mathbf{w}$로 표현 가능)이고 $U \\cap W = \\{\\mathbf{0}\\}$ (표현이 유일)일 때 성립합니다.",
      "wrongAnalysis": "직합을 직곱(카르테시안 곱 $U \\times W$)과 혼동하는 실수가 있습니다. 직합은 같은 벡터 공간 내에서의 분해이고, 직곱은 새로운 공간을 만드는 연산입니다."
    },
    {
      "id": "17-3",
      "type": "choice",
      "difficulty": 3,
      "question": "행렬 $P$가 사영 연산자($P^2 = P$)이고 $P \\neq O$, $P \\neq I$일 때, $P$의 가능한 고유값은?",
      "choices": [
        "$0$과 $1$만",
        "$1$과 $-1$만",
        "$0$만",
        "임의의 실수"
      ],
      "answer": "$0$과 $1$만",
      "hints": [
        "$P^2 = P$에서 $P^2 - P = O$, 즉 $P(P - I) = O$.",
        "고유값 $\\lambda$에 대해: $P\\mathbf{v} = \\lambda\\mathbf{v}$이면 $P^2\\mathbf{v} = \\lambda^2\\mathbf{v}$.",
        "$P^2 = P$이므로 $\\lambda^2 \\mathbf{v} = \\lambda \\mathbf{v}$.",
        "$\\lambda^2 = \\lambda$이므로 $\\lambda(\\lambda - 1) = 0$."
      ],
      "explanation": "$P^2 = P$에서 고유값 $\\lambda$는 $\\lambda^2 = \\lambda$를 만족해야 합니다. $\\lambda(\\lambda - 1) = 0$이므로 $\\lambda = 0$ 또는 $\\lambda = 1$. $P \\neq O$이고 $P \\neq I$이므로 두 고유값이 모두 나타납니다. $\\lambda = 0$에 대응하는 고유공간이 $\\ker(P)$, $\\lambda = 1$에 대응하는 고유공간이 $\\mathrm{im}(P)$입니다.",
      "wrongAnalysis": "$P^2 = P$에서 양변을 $P$로 '나누어' $P = I$라고 결론짓는 실수가 있습니다. 행렬은 일반적으로 나눗셈이 불가능하며, $P$가 가역이 아닐 수 있습니다."
    },
    {
      "id": "17-4",
      "type": "number",
      "difficulty": 1,
      "question": "$T: \\mathbb{R}^5 \\to \\mathbb{R}^3$에서 $\\dim \\ker(T) = 3$일 때, $\\dim \\mathrm{im}(T)$는?",
      "answer": "2",
      "hints": [
        "차원 정리: $\\dim V = \\dim \\ker T + \\dim \\mathrm{im}\\, T$.",
        "$5 = 3 + \\dim \\mathrm{im}\\, T$."
      ],
      "explanation": "차원 정리에 의해 $\\dim \\mathrm{im}\\, T = 5 - 3 = 2$.",
      "wrongAnalysis": "공역의 차원 $3$에서 빼려는 실수가 있습니다. 차원 정리에서 사용하는 것은 정의역의 차원 $5$입니다."
    },
    {
      "id": "17-5",
      "type": "choice",
      "difficulty": 2,
      "question": "$V = U \\oplus W$이고 $\\dim V = 7$, $\\dim U = 3$이면 $\\dim W$는?",
      "choices": [
        "$3$",
        "$4$",
        "$7$",
        "$10$"
      ],
      "answer": "$4$",
      "hints": [
        "$\\dim(U \\oplus W) = \\dim U + \\dim W$.",
        "$7 = 3 + \\dim W$."
      ],
      "explanation": "직합에서 $\\dim V = \\dim U + \\dim W$이므로 $\\dim W = 7 - 3 = 4$.",
      "wrongAnalysis": "$\\dim V = \\dim U \\times \\dim W$로 착각하여 $7/3$이라 답하는 실수가 있습니다. 직합의 차원은 더하기입니다."
    }
  ],
  "summary": {
    "keyPoints": [
      "핵과 상: $\\dim V = \\dim \\ker T + \\dim \\mathrm{im}\\, T$",
      "제1 동형정리: $V/\\ker(T) \\cong \\mathrm{im}(T)$",
      "직합: $V = U \\oplus W$ ⟺ $V = U + W$이고 $U \\cap W = \\{\\mathbf{0}\\}$",
      "사영 연산자: $P^2 = P$, 고유값은 $0$과 $1$만"
    ],
    "formulas": [
      "\\dim V = \\dim \\ker T + \\dim \\mathrm{im}\\, T",
      "V/\\ker(T) \\cong \\mathrm{im}(T)",
      "\\dim(U \\oplus W) = \\dim U + \\dim W",
      "P^2 = P \\Rightarrow V = \\mathrm{im}(P) \\oplus \\ker(P)"
    ],
    "commonMistakes": [
      "차원 정리에서 정의역 대신 공역의 차원을 사용하는 실수",
      "직합과 직곱을 혼동하는 실수",
      "사영 행렬에서 $P^2 = P$를 $P = I$로 잘못 결론짓는 실수"
    ],
    "nextConnection": "직합과 동형정리를 배웠으니, 다음 레슨에서는 작용소를 더 정밀하게 분석하는 도구인 최소다항식과 조르당 표준형을 배웁니다."
  }
},
{
  "id": 18,
  "title": "최소다항식과 조르당 표준형",
  "category": "작용소의 분석",
  "level": "심화",
  "question": "행렬을 가장 단순한 형태로 변환하면 어떤 모양이 되는가?",
  "concept": {
    "intro": ":::definition[개념 정의]\n케일리-해밀턴 정리에서 모든 행렬 $A$가 자신의 특성다항식 $p(\\lambda)$를 만족함($p(A) = 0$)을 배웠습니다. 그런데 $A$를 만족시키는 다항식 중 차수가 가장 낮은 것이 있습니다. 이를 **최소다항식(minimal polynomial)** $m(\\lambda)$라 합니다. $m(\\lambda)$는 $m(A) = 0$인 최소 차수의 모닉(최고차 계수 1) 다항식이며, 항상 특성다항식 $p(\\lambda)$를 나눕니다.\n:::\n\n:::note[참고]\n최소다항식은 행렬의 대각화 가능 여부를 판별합니다. $A$가 대각화 가능할 필요충분조건은 $m(\\lambda)$가 일차 인수의 곱(중복 없이)으로 분해되는 것입니다. 예를 들어 $m(\\lambda) = (\\lambda - 2)(\\lambda - 3)$이면 대각화 가능하지만, $m(\\lambda) = (\\lambda - 2)^2$이면 대각화 불가능합니다.\n:::\n\n:::note[참고]\n대각화할 수 없는 행렬도 '가능한 한 대각에 가까운 형태'로 변환할 수 있습니다. 이것이 **조르당 표준형(Jordan normal form)**입니다. 복소수체 $\\mathbb{C}$ 위에서 모든 정사각행렬은 조르당 표준형으로 변환됩니다. 조르당 블록 $J_k(\\lambda)$는 대각선에 고윳값 $\\lambda$가 놓이고, 바로 위 대각선에 $1$이 놓인 $k \\times k$ 행렬입니다:\n$$J_k(\\lambda) = \\lambda I + N = \\begin{pmatrix} \\lambda & 1 & & 0 \\\\ & \\lambda & \\ddots & \\\\ & & \\ddots & 1 \\\\ 0 & & & \\lambda \\end{pmatrix}$$\n여기서 $N$은 윗삼각 이동 행렬(멱영행렬)입니다. 조르당 표준형은 이러한 블록들의 대각 배치입니다. **불변 부분공간(invariant subspace)**은 $T(W) \\subseteq W$인 부분공간 $W$로, 각 조르당 블록이 하나의 불변 부분공간에 대응됩니다.\n:::\n\n:::note[참고]\n**유리표준형(rational canonical form)**은 최소다항식과 관련된 또 다른 표준형으로, 기저체를 확장하지 않아도(복소수를 쓰지 않아도) 항상 존재합니다. 동반행렬(companion matrix)의 블록으로 구성됩니다.\n:::",
    "intuition": ":::note[직관]\n조르당 표준형을 이해하려면 '거의 대각행렬'을 떠올리세요. 대각화 가능한 행렬은 고윳값만 대각선에 놓으면 됩니다. 대각화 불가능하면 고윳값 옆에 $1$을 살짝 얹어서 '밀림(shift)'을 표현합니다. 블록이 클수록 그 고윳값 주변의 구조가 복잡합니다.\n:::",
    "formula": "m(A) = 0 \\quad (\\text{최소다항식})\nm(\\lambda) \\mid p(\\lambda) \\quad (\\text{최소다항식은 특성다항식을 나눈다})\nJ_k(\\lambda) = \\lambda I_k + N_k \\quad (\\text{조르당 블록})\n\\text{대각화 가능} \\iff m(\\lambda) \\text{가 중복 없는 일차 인수의 곱}",
    "summary": ":::note[핵심 요약]\n최소다항식은 $A$를 영행렬로 만드는 최소 차수 다항식이며, 특성다항식을 나눕니다. 조르당 표준형은 모든 행렬을 조르당 블록의 대각 배치로 변환한 것으로, 대각화의 일반화입니다.\n:::"
  },
  "examples": [
    {
      "title": "조르당 표준형 구하기",
      "problem": "$A = \\begin{pmatrix} 2 & 1 \\\\ 0 & 2 \\end{pmatrix}$의 특성다항식, 최소다항식, 조르당 표준형을 구하시오.",
      "steps": [
        "특성다항식: $p(\\lambda) = \\det(A - \\lambda I) = (2-\\lambda)^2$",
        "고윳값: $\\lambda = 2$ (중복도 2)",
        "고유공간: $(A - 2I)v = 0$에서 $A - 2I = \\begin{pmatrix} 0 & 1 \\\\ 0 & 0 \\end{pmatrix}$이므로 고유공간은 1차원 ($v = (1, 0)^T$의 스칼라배)",
        "기하적 중복도(1) < 대수적 중복도(2)이므로 대각화 불가능",
        "$(A - 2I)^2 = 0$이므로 최소다항식 $m(\\lambda) = (\\lambda - 2)^2$",
        "$A$는 이미 $J_2(2)$ 형태이므로 조르당 표준형은 $A$ 자체: $\\begin{pmatrix} 2 & 1 \\\\ 0 & 2 \\end{pmatrix}$"
      ],
      "answer": "$p(\\lambda) = (\\lambda-2)^2$, $m(\\lambda) = (\\lambda-2)^2$, 조르당 표준형 $= J_2(2)$",
      "lesson": "최소다항식에 중복 인수가 있으면($m(\\lambda) = (\\lambda-2)^2$) 대각화 불가능합니다. 이때 조르당 블록의 크기가 2 이상이 됩니다."
    },
    {
      "title": "[기본] 대각행렬의 최소다항식",
      "problem": "$A = \\begin{pmatrix}3 & 0 \\\\ 0 & 3\\end{pmatrix}$ 의 최소다항식을 구하시오.",
      "steps": [
        "$A = 3I$.",
        "$m(\\lambda) = \\lambda - 3$: $m(A) = A - 3I = O$. ✓",
        "상수 다항식은 $m(A) = 0$을 만족하지 못하므로 $m(\\lambda) = \\lambda - 3$이 최소."
      ],
      "answer": "$m(\\lambda) = \\lambda - 3$",
      "lesson": "스칼라 행렬 $cI$의 최소다항식은 항상 $\\lambda - c$입니다. 특성다항식 $(\\lambda - c)^n$보다 차수가 훨씬 낮을 수 있습니다."
    },
    {
      "title": "[응용] 최소다항식으로 대각화 판별",
      "problem": "$A = \\begin{pmatrix}1 & 0 & 0 \\\\ 0 & 2 & 0 \\\\ 0 & 0 & 2\\end{pmatrix}$ 의 최소다항식을 구하고 대각화 가능한지 판별하시오.",
      "steps": [
        "특성다항식: $p(\\lambda) = (\\lambda-1)(\\lambda-2)^2$.",
        "후보: $m(\\lambda) = (\\lambda-1)(\\lambda-2)$ 또는 $(\\lambda-1)(\\lambda-2)^2$.",
        "$m(A) = (A-I)(A-2I) = \\begin{pmatrix}0&0&0\\\\0&1&0\\\\0&0&1\\end{pmatrix}\\begin{pmatrix}-1&0&0\\\\0&0&0\\\\0&0&0\\end{pmatrix} = O$. ✓",
        "$m(\\lambda) = (\\lambda-1)(\\lambda-2)$ (중복 없는 일차 인수의 곱). 대각화 가능."
      ],
      "answer": "$m(\\lambda) = (\\lambda-1)(\\lambda-2)$, 대각화 가능",
      "lesson": "최소다항식이 중복 없는 일차 인수의 곱이면 대각화 가능합니다. $A$가 이미 대각행렬이므로 당연히 대각화 가능합니다."
    },
    {
      "title": "[응용] 조르당 블록의 거듭제곱",
      "problem": "$J = \\begin{pmatrix}3 & 1 \\\\ 0 & 3\\end{pmatrix}$ 일 때 $J^3$을 구하시오.",
      "steps": [
        "$J = 3I + N$ ($N = \\begin{pmatrix}0&1\\\\0&0\\end{pmatrix}$, $N^2 = O$).",
        "이항정리: $J^3 = (3I + N)^3 = 27I + 3 \\cdot 9N + 3 \\cdot 3N^2 + N^3 = 27I + 27N$ ($N^2 = N^3 = O$).",
        "$J^3 = \\begin{pmatrix}27 & 27 \\\\ 0 & 27\\end{pmatrix}$."
      ],
      "answer": "$J^3 = \\begin{pmatrix}27 & 27 \\\\ 0 & 27\\end{pmatrix}$",
      "lesson": "조르당 블록의 거듭제곱에서 $(1,2)$ 성분은 $\\binom{n}{1} \\lambda^{n-1}$입니다. 멱영 행렬 $N$이 유한 단계에서 $0$이 되기 때문에 이항 전개가 유한합니다."
    },
    {
      "title": "[심화] 일반화된 고유벡터",
      "problem": "$A = \\begin{pmatrix}2 & 1 \\\\ 0 & 2\\end{pmatrix}$ 의 일반화된 고유벡터(generalized eigenvector)를 구하시오.",
      "steps": [
        "고윳값 $\\lambda = 2$. $(A - 2I) = \\begin{pmatrix}0 & 1 \\\\ 0 & 0\\end{pmatrix}$.",
        "고유벡터: $(A - 2I)\\mathbf{v}_1 = \\mathbf{0}$ → $\\mathbf{v}_1 = (1, 0)$.",
        "일반화된 고유벡터: $(A - 2I)\\mathbf{v}_2 = \\mathbf{v}_1$ → $\\begin{pmatrix}0&1\\\\0&0\\end{pmatrix}\\mathbf{v}_2 = \\begin{pmatrix}1\\\\0\\end{pmatrix}$.",
        "$v_4 = 1$이므로 $\\mathbf{v}_2 = (0, 1)$ (또는 아무 1번째 성분).",
        "검산: $(A - 2I)(0, 1) = (1, 0) = \\mathbf{v}_1$. ✓"
      ],
      "answer": "고유벡터: $(1, 0)$, 일반화된 고유벡터: $(0, 1)$",
      "lesson": "일반화된 고유벡터는 $(A - \\lambda I)^k \\mathbf{v} = \\mathbf{0}$을 만족하는 벡터입니다. 조르당 사슬 $\\mathbf{v}_1 \\leftarrow (A - \\lambda I)\\mathbf{v}_2$를 따라 구성합니다."
    }
  ],
  "problems": [
    {
      "id": "18-1",
      "type": "choice",
      "difficulty": 1,
      "question": "$3 \\times 3$ 항등행렬 $I_3$의 최소다항식은?",
      "choices": ["$\\lambda^3$", "$\\lambda - 1$", "$(\\lambda - 1)^3$", "$\\lambda^3 - 1$"],
      "answer": "$\\lambda - 1$",
      "hints": ["$I_3$의 고윳값은 모두 $1$입니다.", "$m(I_3) = I_3 - I_3 = 0$인지 확인하세요.", "$m(\\lambda) = \\lambda - 1$이면 $m(I_3) = I_3 - I_3 = 0$. ✓"],
      "explanation": "$m(\\lambda) = \\lambda - 1$이면 $m(I_3) = I_3 - I_3 = 0$이므로 조건을 만족합니다. 차수 1보다 낮은 상수 다항식은 $m(I_3) = 0$을 만족하지 못하므로 이것이 최소다항식입니다.",
      "wrongAnalysis": "$(\\lambda-1)^3$은 특성다항식이지만 최소다항식은 아닙니다. 최소다항식은 $A$를 영행렬로 만드는 '최소 차수' 다항식입니다."
    },
    {
      "id": "18-2",
      "type": "choice",
      "difficulty": 2,
      "question": "행렬 $A$가 대각화 가능할 필요충분조건은?",
      "choices": ["특성다항식이 일차 인수로 분해됨", "최소다항식이 중복 없는 일차 인수의 곱", "모든 고윳값이 서로 다름", "$A$가 대칭행렬임"],
      "answer": "최소다항식이 중복 없는 일차 인수의 곱",
      "hints": ["고윳값이 같아도 대각화 가능할 수 있습니다 (예: $2I$).", "대칭이 아니어도 대각화 가능합니다.", "핵심은 최소다항식의 구조입니다."],
      "explanation": "$A$가 대각화 가능 $\\iff$ $m(\\lambda)$가 중복 없는 일차 인수의 곱. 예를 들어 $m(\\lambda) = (\\lambda-1)(\\lambda-2)$이면 대각화 가능, $m(\\lambda) = (\\lambda-1)^2$이면 불가능합니다.",
      "wrongAnalysis": "'모든 고윳값이 서로 다르면' 대각화 가능하지만, 이것은 충분조건이지 필요조건은 아닙니다. $2I_3$은 고윳값이 $2$ 하나뿐이지만 대각화 가능합니다."
    },
    {
      "id": "18-3",
      "type": "text",
      "difficulty": 3,
      "question": "$4 \\times 4$ 행렬의 특성다항식이 $(\\lambda - 1)^2(\\lambda - 3)^2$이고, 최소다항식이 $(\\lambda - 1)^2(\\lambda - 3)$일 때, 가능한 조르당 표준형을 구하시오.",
      "answer": "$\\text{diag}(J_2(1),\\; J_1(3),\\; J_1(3))$",
      "hints": ["고윳값 $1$의 가장 큰 조르당 블록 크기 = $m(\\lambda)$에서 $(\\lambda-1)$의 지수 = 2", "고윳값 $3$의 가장 큰 조르당 블록 크기 = 1 (지수가 1이므로)", "고윳값 $1$: 블록 크기 합 = 2이고 최대 블록 = 2 → $J_2(1)$. 고윳값 $3$: 블록 크기 합 = 2이고 최대 블록 = 1 → $J_1(3) \\oplus J_1(3)$."],
      "explanation": "최소다항식에서 $(\\lambda-1)^2$이므로 고윳값 $1$의 최대 블록은 $J_2(1)$. 대수적 중복도가 2이므로 블록은 $J_2(1)$ 하나. $(\\lambda-3)$의 지수가 1이므로 고윳값 $3$의 최대 블록은 $J_1(3)$. 대수적 중복도가 2이므로 $J_1(3)$이 두 개. 따라서 조르당 표준형은 $\\text{diag}(J_2(1), J_1(3), J_1(3))$.",
      "wrongAnalysis": "최소다항식의 각 인수의 지수가 해당 고윳값의 최대 조르당 블록 크기를 결정한다는 핵심 원리를 빠뜨리면 안 됩니다."
    },
    {
      "id": "18-4",
      "type": "number",
      "difficulty": 1,
      "question": "$3 \\times 3$ 영행렬 $O_{3}$의 최소다항식의 차수는?",
      "answer": "1",
      "hints": [
        "$m(\\lambda) = \\lambda$이면 $m(O_3) = O_3 = 0$.",
        "상수 다항식(차수 $0$)은 $m(O_3) = 0$을 만족시킬 수 없습니다."
      ],
      "explanation": "$m(\\lambda) = \\lambda$이면 $m(O_3) = O_3 = 0$이므로 조건을 만족합니다. 차수 $0$인 상수 다항식은 성립하지 않으므로 최소다항식의 차수는 $1$.",
      "wrongAnalysis": "특성다항식 $\\lambda^3$과 혼동하여 차수 $3$이라 답하는 실수가 있습니다. 최소다항식은 특성다항식보다 차수가 작을 수 있습니다."
    },
    {
      "id": "18-5",
      "type": "choice",
      "difficulty": 2,
      "question": "조르당 블록 $J_2(3) = \\begin{pmatrix} 3 & 1 \\\\ 0 & 3 \\end{pmatrix}$의 고윳값은?",
      "choices": [
        "$1$과 $3$",
        "$3$ (중복도 $2$)",
        "$3$과 $4$",
        "$0$과 $3$"
      ],
      "answer": "$3$ (중복도 $2$)",
      "hints": [
        "삼각행렬(상삼각 또는 하삼각)의 고윳값은 대각 성분입니다.",
        "대각 성분이 모두 $3$입니다."
      ],
      "explanation": "$J_2(3)$은 상삼각행렬이므로 고윳값은 대각 성분 $3, 3$. 고윳값 $3$ (대수적 중복도 $2$).",
      "wrongAnalysis": "위 대각선의 $1$을 고윳값으로 착각하는 실수가 있습니다. 삼각행렬의 고윳값은 오직 대각 성분입니다."
    }
  ],
  "summary": {
    "keyPoints": [
      "최소다항식 $m(\\lambda)$: $m(A) = 0$인 최소 차수 모닉 다항식, $m \\mid p$ (특성다항식을 나눔).",
      "대각화 가능 $\\iff$ $m(\\lambda)$가 중복 없는 일차 인수의 곱.",
      "조르당 블록 $J_k(\\lambda) = \\lambda I + N$: 대각선에 $\\lambda$, 위 대각선에 $1$.",
      "조르당 표준형: 모든 복소 정사각행렬은 조르당 블록의 대각 배치로 변환 가능."
    ],
    "formulas": [
      "m(A) = 0,\\; m(\\lambda) \\mid p(\\lambda)",
      "J_k(\\lambda) = \\lambda I_k + N_k",
      "\\text{대각화 가능} \\iff m(\\lambda) = \\prod (\\lambda - \\lambda_i) \\text{ (중복 없음)}"
    ],
    "commonMistakes": [
      "최소다항식과 특성다항식을 혼동하는 것 (최소다항식의 차수 $\\leq$ 특성다항식의 차수)",
      "조르당 블록의 $1$을 대각선이 아닌 위 대각선에 놓는 것을 잊는 것",
      "유리표준형과 조르당 표준형을 혼동하는 것 (유리표준형은 기저체 확장 불필요)"
    ],
    "nextConnection": "다음 레슨에서는 벡터 공간의 '쌍대(dual)' 개념과 텐서곱, 행렬식의 엄밀한 정의를 다루는 다중선형대수학을 배웁니다."
  }
},
{
  "id": 19,
  "title": "쌍대공간과 다중선형대수",
  "category": "다중선형대수",
  "level": "심화",
  "question": "벡터 공간의 '거울상'인 쌍대공간과, 행렬식의 진정한 의미는 무엇인가?",
  "concept": {
    "intro": ":::definition[개념 정의]\n벡터 공간 $V$가 주어지면, $V$에서 스칼라체 $F$로 가는 선형함수(linear functional) $\\varphi: V \\to F$ 전체의 집합도 벡터 공간이 됩니다. 이 공간을 **쌍대공간(dual space)** $V^*$라 합니다. 놀랍게도 $\\dim V^* = \\dim V$이며, $V$의 기저 $\\{e_1, \\ldots, e_n\\}$에 대해 $\\varphi_i(e_j) = \\delta_{ij}$(크로네커 델타)로 정의되는 **쌍대기저(dual basis)** $\\{\\varphi_1, \\ldots, \\varphi_n\\}$이 $V^*$의 기저가 됩니다.\n:::\n\n:::note[참고]\n**쌍일차형식(bilinear form)**은 $B: V \\times V \\to F$로, 각 변수에 대해 선형인 함수입니다. 행렬로 표현하면 $B(u, v) = u^T A v$이고, $A$가 대칭이면 대칭 쌍일차형식, 반대칭이면 교대 쌍일차형식(alternating)입니다.\n:::\n\n:::note[참고]\n**텐서곱(tensor product)** $V \\otimes W$는 '$V$와 $W$의 가능한 모든 쌍'을 선형적으로 다루는 공간입니다. $\\dim(V \\otimes W) = \\dim V \\cdot \\dim W$이며, 기저는 $\\{e_i \\otimes f_j\\}$입니다. 텐서곱의 보편 성질(universal property): 임의의 쌍선형 사상 $B: V \\times W \\to U$는 유일한 선형 사상 $\\tilde{B}: V \\otimes W \\to U$를 통해 분해됩니다.\n:::\n\n:::note[참고]\n**외대수(exterior algebra)** $\\bigwedge V$는 반대칭(alternating) 텐서를 다루는 대수입니다. 쐐기곱(wedge product) $v \\wedge w = -w \\wedge v$이고, $v \\wedge v = 0$입니다. $n$차원 공간에서 $\\bigwedge^n V$는 1차원이며, 행렬식은 바로 이 1차원 공간에서의 스칼라입니다. 행렬식의 **엄밀한 정의**: $\\det: \\bigwedge^n V \\to F$는 $n$개 벡터에 대한 교대 다중선형형식이며, $\\det(e_1, \\ldots, e_n) = 1$로 정규화합니다. 이것은 행렬식이 '평행육면체의 부호 있는 부피'라는 기하학적 의미를 엄밀하게 포착합니다.\n:::",
    "intuition": ":::note[직관]\n쌍대공간은 벡터의 '측정 도구'입니다. 벡터가 '화살표'라면, 쌍대 벡터는 '화살표의 길이를 재는 자'입니다. 텐서곱은 '두 공간의 원소를 모든 가능한 방식으로 곱한 것'이고, 외대수는 '방향이 있는 넓이/부피'를 다룹니다.\n:::",
    "formula": "V^* = \\{\\varphi: V \\to F \\mid \\varphi \\text{ 선형}\\},\\quad \\dim V^* = \\dim V\n\\text{쌍대기저:}\\ \\varphi_i(e_j) = \\delta_{ij}\n\\text{텐서곱:}\\ \\dim(V \\otimes W) = \\dim V \\cdot \\dim W\nv \\wedge w = -w \\wedge v,\\quad v \\wedge v = 0\n\\det = \\text{유일한 교대 } n\\text{-선형형식 (정규화 조건)}",
    "summary": ":::note[핵심 요약]\n쌍대공간 $V^*$는 선형함수의 공간이며 $\\dim V^* = \\dim V$. 텐서곱 $V \\otimes W$는 쌍선형 사상을 선형화합니다. 외대수와 쐐기곱은 행렬식의 엄밀한 토대입니다.\n:::"
  },
  "examples": [
    {
      "title": "쌍대기저 구하기",
      "problem": "$V = \\mathbb{R}^2$, 기저 $\\{e_1 = (1,0), e_2 = (0,1)\\}$에 대한 쌍대기저를 구하시오.",
      "steps": [
        "$\\varphi_1$은 $\\varphi_1(e_1) = 1$, $\\varphi_1(e_2) = 0$을 만족하는 선형함수입니다.",
        "$(x, y) \\mapsto x$가 이 조건을 만족합니다: $\\varphi_1(x, y) = x$.",
        "$\\varphi_2$는 $\\varphi_2(e_1) = 0$, $\\varphi_2(e_2) = 1$: $\\varphi_2(x, y) = y$.",
        "따라서 쌍대기저는 $\\{\\varphi_1: (x,y) \\mapsto x,\\; \\varphi_2: (x,y) \\mapsto y\\}$."
      ],
      "answer": "$\\varphi_1(x,y) = x$, $\\varphi_2(x,y) = y$",
      "lesson": "표준기저의 쌍대기저는 좌표를 추출하는 함수입니다. 일반적인 기저에서는 쌍대기저가 더 복잡해집니다."
    },
    {
      "title": "[기본] 쌍대공간의 차원",
      "problem": "$V$가 $4$차원 벡터 공간일 때, $V^*$의 차원과 $V^{**}$ (이중 쌍대)의 차원을 구하시오.",
      "steps": [
        "$\\dim V^* = \\dim V = 4$.",
        "$\\dim V^{**} = \\dim V^* = 4$.",
        "유한차원에서 $V \\cong V^{**}$ (자연 동형)."
      ],
      "answer": "$\\dim V^* = 4$, $\\dim V^{**} = 4$",
      "lesson": "유한차원 벡터 공간에서 $V \\cong V^* \\cong V^{**}$이며 모두 같은 차원입니다. 특히 $V \\to V^{**}$는 기저에 의존하지 않는 '자연(canonical)' 동형사상입니다."
    },
    {
      "title": "[응용] 비표준 기저의 쌍대기저",
      "problem": "$V = \\mathbb{R}^2$, 기저 $B = \\{(1, 1), (1, 0)\\}$에 대한 쌍대기저를 구하시오.",
      "steps": [
        "$\\varphi_1$: $\\varphi_1(1,1) = 1$, $\\varphi_1(1,0) = 0$.",
        "$(x, y) = a(1,1) + b(1,0) = (a+b, a)$이므로 $a = y$, $b = x - y$.",
        "$\\varphi_1(x, y) = a = y$.",
        "$\\varphi_2(x, y) = b = x - y$.",
        "검산: $\\varphi_1(1,1) = 1$ ✓, $\\varphi_1(1,0) = 0$ ✓, $\\varphi_2(1,1) = 0$ ✓, $\\varphi_2(1,0) = 1$ ✓."
      ],
      "answer": "$\\varphi_1(x,y) = y$, $\\varphi_2(x,y) = x - y$",
      "lesson": "비표준 기저의 쌍대기저는 단순한 좌표 추출이 아닙니다. 기저 변환을 통해 좌표를 구한 뒤 대응하는 선형함수를 찾아야 합니다."
    },
    {
      "title": "[응용] 쐐기곱 계산",
      "problem": "$\\mathbb{R}^3$에서 $\\mathbf{u} = e_1 + 2e_2$, $\\mathbf{v} = 3e_1 + e_3$ 의 쐐기곱 $\\mathbf{u} \\wedge \\mathbf{v}$를 구하시오.",
      "steps": [
        "$\\mathbf{u} \\wedge \\mathbf{v} = (e_1 + 2e_2) \\wedge (3e_1 + e_3)$.",
        "$= 3(e_1 \\wedge e_1) + (e_1 \\wedge e_3) + 6(e_2 \\wedge e_1) + 2(e_2 \\wedge e_3)$.",
        "$e_1 \\wedge e_1 = 0$, $e_2 \\wedge e_1 = -e_1 \\wedge e_2$.",
        "$= (e_1 \\wedge e_3) - 6(e_1 \\wedge e_2) + 2(e_2 \\wedge e_3)$.",
        "$= -6(e_1 \\wedge e_2) + (e_1 \\wedge e_3) + 2(e_2 \\wedge e_3)$."
      ],
      "answer": "$\\mathbf{u} \\wedge \\mathbf{v} = -6(e_1 \\wedge e_2) + (e_1 \\wedge e_3) + 2(e_2 \\wedge e_3)$",
      "lesson": "쐐기곱은 분배법칙은 성립하지만 $v \\wedge v = 0$과 $u \\wedge v = -v \\wedge u$에 주의해야 합니다. 결과는 $\\bigwedge^2 V$의 원소입니다."
    },
    {
      "title": "[심화] 텐서곱의 보편 성질",
      "problem": "$\\dim V = 2$, $\\dim W = 3$일 때, $V \\otimes W$의 기저를 구성하고, 쌍선형 사상 $B(v, w) = v_1 w_1$ ($v = (v_1, v_2)$, $w = (w_1, w_2, w_3)$)에 대응하는 선형 사상 $\\tilde{B}: V \\otimes W \\to \\mathbb{R}$를 기술하시오.",
      "steps": [
        "$V \\otimes W$의 기저: $\\{e_i \\otimes f_j \\mid 1 \\leq i \\leq 2,\\ 1 \\leq j \\leq 3\\}$. $6$개.",
        "$B(v, w) = v_1 w_1$은 쌍선형.",
        "보편 성질: $\\tilde{B}(e_i \\otimes f_j) = B(e_i, f_j)$.",
        "$\\tilde{B}(e_1 \\otimes f_1) = 1$, 나머지 모든 $\\tilde{B}(e_i \\otimes f_j) = 0$.",
        "$\\tilde{B}$는 $e_1 \\otimes f_1$ 성분만 추출하는 선형함수."
      ],
      "answer": "$\\tilde{B}(\\sum c_{ij}\\, e_i \\otimes f_j) = c_{11}$",
      "lesson": "텐서곱의 핵심은 쌍선형 사상을 선형 사상으로 '선형화'하는 것입니다. 모든 쌍선형 사상은 텐서곱을 경유하여 유일한 선형 사상으로 분해됩니다."
    }
  ],
  "problems": [
    {
      "id": "19-1",
      "type": "choice",
      "difficulty": 1,
      "question": "$\\dim V = 3$이면 $\\dim V^*$는?",
      "choices": ["$1$", "$3$", "$6$", "$9$"],
      "answer": "$3$",
      "hints": ["$\\dim V^* = \\dim V$입니다.", "쌍대공간은 원래 공간과 차원이 같습니다."],
      "explanation": "유한차원 벡터 공간에서 $\\dim V^* = \\dim V$이므로 $\\dim V^* = 3$.",
      "wrongAnalysis": "$9$를 고르면 $\\dim(V \\otimes V)$와 혼동한 것입니다. $\\dim V^* = \\dim V = 3$."
    },
    {
      "id": "19-2",
      "type": "choice",
      "difficulty": 2,
      "question": "$v \\wedge w$에 대해 항상 성립하는 것은?",
      "choices": ["$v \\wedge w = w \\wedge v$", "$v \\wedge v = v$", "$v \\wedge w = -w \\wedge v$", "$v \\wedge w = 0$"],
      "answer": "$v \\wedge w = -w \\wedge v$",
      "hints": ["쐐기곱은 반대칭입니다.", "$v \\wedge v = 0$은 성립하지만, $v \\wedge w = 0$은 일반적으로 아닙니다."],
      "explanation": "쐐기곱의 핵심 성질은 반대칭성 $v \\wedge w = -w \\wedge v$입니다. 이로부터 $v \\wedge v = -v \\wedge v$이므로 $v \\wedge v = 0$이 따라옵니다.",
      "wrongAnalysis": "'$v \\wedge w = 0$'은 $v$와 $w$가 평행할 때만 성립합니다. 일반적으로는 $v \\wedge w \\neq 0$입니다."
    },
    {
      "id": "19-3",
      "type": "text",
      "difficulty": 3,
      "question": "$\\dim V = n$일 때 $\\dim(\\bigwedge^n V) = 1$인 이유를 설명하시오.",
      "answer": "$n$개 기저 벡터의 쐐기곱 $e_1 \\wedge \\cdots \\wedge e_n$이 $\\bigwedge^n V$의 유일한 기저 원소이기 때문이다.",
      "hints": ["$\\bigwedge^n V$의 기저는 $\\{e_{i_1} \\wedge \\cdots \\wedge e_{i_n} \\mid i_1 < \\cdots < i_n\\}$입니다.", "$n$개 중 $n$개를 중복 없이 택하는 경우의 수는 $\\binom{n}{n} = 1$입니다."],
      "explanation": "$\\bigwedge^k V$의 기저는 $\\binom{n}{k}$개입니다. $k = n$이면 $\\binom{n}{n} = 1$이므로 $\\bigwedge^n V$는 1차원입니다. 유일한 기저 원소 $e_1 \\wedge \\cdots \\wedge e_n$에 선형변환을 적용하면 $\\det(T)$배가 되므로, 행렬식은 이 1차원 공간의 스칼라 곱입니다.",
      "wrongAnalysis": "$\\dim(\\bigwedge^n V) = n$이라고 답하면 $\\bigwedge^1 V = V$와 혼동한 것입니다."
    },
    {
      "id": "19-4",
      "type": "number",
      "difficulty": 1,
      "question": "$\\dim V = 4$이면 $\\dim(V \\otimes V)$는?",
      "answer": "16",
      "hints": [
        "$\\dim(V \\otimes W) = \\dim V \\cdot \\dim W$.",
        "$4 \\times 4 = ?$"
      ],
      "explanation": "$\\dim(V \\otimes V) = \\dim V \\cdot \\dim V = 4 \\times 4 = 16$.",
      "wrongAnalysis": "$\\dim V + \\dim V = 8$ 또는 $\\dim V^* = 4$와 혼동하는 실수가 있습니다. 텐서곱의 차원은 곱입니다."
    },
    {
      "id": "19-5",
      "type": "number",
      "difficulty": 2,
      "question": "$\\dim V = 5$일 때 $\\dim(\\bigwedge^2 V)$는?",
      "answer": "10",
      "hints": [
        "$\\dim(\\bigwedge^k V) = \\binom{n}{k}$.",
        "$\\binom{5}{2} = \\frac{5!}{2!3!} = ?$"
      ],
      "explanation": "$\\dim(\\bigwedge^2 V) = \\binom{5}{2} = \\frac{5 \\times 4}{2} = 10$.",
      "wrongAnalysis": "$5 \\times 2 = 10$으로 우연히 맞출 수 있지만, 정확한 공식은 $\\binom{n}{k}$입니다. $k = 3$이면 $\\binom{5}{3} = 10$이지 $15$가 아닙니다."
    }
  ],
  "summary": {
    "keyPoints": [
      "$V^*$는 $V \\to F$ 선형함수의 공간, $\\dim V^* = \\dim V$.",
      "텐서곱 $V \\otimes W$: 쌍선형을 선형으로 바꾸는 보편 구성.",
      "쐐기곱: $v \\wedge w = -w \\wedge v$, $v \\wedge v = 0$ (반대칭).",
      "행렬식 = $\\bigwedge^n V$에서의 유일한 교대 $n$-선형형식."
    ],
    "formulas": [
      "\\dim V^* = \\dim V",
      "\\dim(V \\otimes W) = \\dim V \\cdot \\dim W",
      "v \\wedge w = -w \\wedge v",
      "\\dim(\\bigwedge^k V) = \\binom{n}{k}"
    ],
    "commonMistakes": [
      "쌍대공간과 텐서곱의 차원을 혼동하는 것 ($V^*$: $n$차원, $V \\otimes V$: $n^2$차원)",
      "쐐기곱이 교환법칙을 만족한다고 착각하는 것 (반교환: $v \\wedge w = -w \\wedge v$)",
      "행렬식을 단순한 공식이 아닌 다중선형형식으로 이해하지 못하는 것"
    ],
    "nextConnection": "마지막 레슨에서는 이차형식과 행렬이 만드는 다양한 군(직교군, 심플렉틱군)을 살펴봅니다."
  }
},
{
  "id": 20,
  "title": "이차형식과 선형군",
  "category": "다중선형대수",
  "level": "심화",
  "question": "$x^T A x$ 형태의 이차형식은 무엇을 의미하고, 행렬이 만드는 군에는 어떤 것이 있는가?",
  "concept": {
    "intro": ":::definition[개념 정의]\n대칭행렬 $A$와 벡터 $x$에 대해 $Q(x) = x^T A x$를 **이차형식(quadratic form)**이라 합니다. 예를 들어 $Q(x, y) = 3x^2 + 4xy + 5y^2$는 $A = \\begin{pmatrix} 3 & 2 \\\\ 2 & 5 \\end{pmatrix}$에 대응합니다 (비대각 항의 계수를 반으로 나눠서 대칭 행렬을 만듦). 이차형식은 타원, 쌍곡선, 포물선 같은 이차곡선의 분류, 다변수 함수의 극값 판정, 물리학의 에너지 함수 등에 핵심적으로 쓰입니다.\n:::\n\n:::note[참고]\n스펙트럼 정리에 의해 대칭행렬 $A$는 직교대각화 가능합니다: $A = Q D Q^T$. 직교 변환 $y = Q^T x$를 하면 $Q(x) = y^T D y = \\lambda_1 y_1^2 + \\cdots + \\lambda_n y_n^2$으로 교차항이 사라집니다. **실베스터의 관성 법칙(Sylvester's law of inertia)**에 의해, 양의 고윳값 개수 $p$와 음의 고윳값 개수 $q$로 이루어진 **부호수(signature)** $(p, q)$는 기저 변환에 무관한 불변량입니다. 모든 고윳값이 양이면 **양정치(positive definite)**, 모두 음이면 **음정치**, 부호가 섞여 있으면 **부정치(indefinite)**입니다.\n:::\n\n:::note[참고]\n이제 행렬이 만드는 군을 살펴봅시다. **일반선형군** $GL(n, F) = \\{A \\in M_n(F) \\mid \\det A \\neq 0\\}$은 가역행렬 전체의 군입니다. **특수선형군** $SL(n, F) = \\{A \\mid \\det A = 1\\}$은 부피를 보존하는 변환입니다. **직교군** $O(n) = \\{Q \\mid Q^T Q = I\\}$는 길이와 각도를 보존하고, $\\det Q = \\pm 1$입니다. $\\det = 1$인 것들만 모으면 **특수직교군** $SO(n)$(회전군)입니다.\n:::\n\n:::note[참고]\n**심플렉틱 군** $Sp(2n, F)$은 심플렉틱 형식 $\\omega(u, v) = u^T J v$를 보존하는 군입니다. 여기서 $J = \\begin{pmatrix} 0 & I_n \\\\ -I_n & 0 \\end{pmatrix}$. 심플렉틱 군은 해밀턴 역학에서 위상 공간의 정준 변환을 기술하며, $\\det M = 1$이 자동으로 성립합니다. 직교기하는 '길이를 보존'하고, 심플렉틱 기하는 '넓이(면적)를 보존'합니다.\n:::\n\n:::note[참고]\n이 군들은 **리군(Lie group)**의 대표적 예입니다. 리군은 군 구조와 매끄러운 다양체 구조를 동시에 가지며, 물리학(대칭과 보존법칙), 미분기하학, 입자물리학(게이지 이론)에서 핵심 역할을 합니다.\n:::",
    "intuition": ":::note[직관]\n이차형식은 '타원 모양 에너지 곡면'입니다. 양정치이면 원점이 골짜기(최솟값), 부정치이면 안장점입니다. 직교군은 '강체 운동'(회전+반사), 심플렉틱 군은 '면적 보존 변환'입니다.\n:::",
    "formula": "Q(x) = x^T A x \\quad (A \\text{ 대칭})\n\\text{부호수 } (p, q):\\; p = \\text{양의 고윳값 수},\\; q = \\text{음의 고윳값 수}\nGL(n) = \\{A \\mid \\det A \\neq 0\\}\nO(n) = \\{Q \\mid Q^T Q = I\\},\\; SO(n) = O(n) \\cap SL(n)\nSp(2n) = \\{M \\mid M^T J M = J\\},\\; J = \\begin{pmatrix} 0 & I \\\\ -I & 0 \\end{pmatrix}",
    "summary": ":::note[핵심 요약]\n이차형식 $Q(x) = x^T A x$의 부호수 $(p,q)$는 기저 불변이며, 양정치/음정치/부정치로 분류합니다. $GL, SL, O, SO, Sp$는 각각 가역성, 부피 보존, 길이 보존, 회전, 넓이 보존을 나타내는 행렬의 군이며 리군의 대표적 예입니다.\n:::"
  },
  "examples": [
    {
      "title": "이차형식의 부호 판별",
      "problem": "$Q(x, y) = 2x^2 - 4xy + 5y^2$의 대응 행렬을 구하고, 양정치인지 판별하시오.",
      "steps": [
        "$Q = x^T A x$에서 $A = \\begin{pmatrix} 2 & -2 \\\\ -2 & 5 \\end{pmatrix}$ (비대각 계수 $-4$를 반으로 나눔)",
        "고윳값: $\\det(A - \\lambda I) = (2-\\lambda)(5-\\lambda) - 4 = \\lambda^2 - 7\\lambda + 6 = (\\lambda-1)(\\lambda-6)$",
        "고윳값: $\\lambda_1 = 1 > 0$, $\\lambda_2 = 6 > 0$",
        "모든 고윳값이 양이므로 양정치(positive definite)입니다."
      ],
      "answer": "$A = \\begin{pmatrix} 2 & -2 \\\\ -2 & 5 \\end{pmatrix}$, 양정치 (고윳값 $1, 6$ 모두 양수)",
      "lesson": "이차형식이 양정치이면 원점이 엄격한 최솟값입니다. 고윳값의 부호로 판별하거나, 행렬식과 대각 원소의 부호로도 판별할 수 있습니다."
    },
    {
      "title": "[기본] 이차형식의 행렬 표현",
      "problem": "$Q(x, y) = 3x^2 + 2xy + y^2$ 에 대응하는 대칭행렬 $A$를 구하시오.",
      "steps": [
        "$x^2$ 계수 $= 3$ → $a_{11} = 3$.",
        "$y^2$ 계수 $= 1$ → $a_{22} = 1$.",
        "$xy$ 계수 $= 2$ → $a_{12} = a_{21} = \\dfrac{2}{2} = 1$.",
        "$A = \\begin{pmatrix}3 & 1 \\\\ 1 & 1\\end{pmatrix}$."
      ],
      "answer": "$A = \\begin{pmatrix}3 & 1 \\\\ 1 & 1\\end{pmatrix}$",
      "lesson": "비대각 항($xy$)의 계수를 반으로 나눠서 대칭행렬을 만듭니다. $Q = \\mathbf{x}^T A \\mathbf{x}$를 전개하면 원래 식이 나오는지 검산하세요."
    },
    {
      "title": "[응용] 주축 변환",
      "problem": "$Q(x, y) = 5x^2 + 4xy + 2y^2$ 을 교차항 없는 형태로 변환하시오.",
      "steps": [
        "$A = \\begin{pmatrix}5 & 2 \\\\ 2 & 2\\end{pmatrix}$.",
        "고윳값: $\\lambda^2 - 7\\lambda + 6 = (\\lambda-1)(\\lambda-6) = 0$. $\\lambda_1 = 1$, $\\lambda_2 = 6$.",
        "직교 대각화: $A = QDQ^T$. 주축 좌표 $\\mathbf{y} = Q^T \\mathbf{x}$에서 $Q = y_1^2 + 6y_2^2$."
      ],
      "answer": "$Q = y_1^2 + 6y_2^2$ (주축 좌표에서)",
      "lesson": "직교 대각화로 교차항을 제거하면, 이차형식의 기하학적 모양(타원, 쌍곡선 등)이 명확하게 드러납니다."
    },
    {
      "title": "[응용] 양정치 판별법 (소행렬식)",
      "problem": "$A = \\begin{pmatrix}4 & 2 \\\\ 2 & 3\\end{pmatrix}$ 이 양정치인지 소행렬식(leading principal minor)으로 판별하시오.",
      "steps": [
        "$\\Delta_1 = a_{11} = 4 > 0$. ✓",
        "$\\Delta_2 = \\det A = 12 - 4 = 8 > 0$. ✓",
        "모든 선행 주소행렬식이 양수이므로 양정치."
      ],
      "answer": "양정치 ($\\Delta_1 = 4 > 0$, $\\Delta_2 = 8 > 0$)",
      "lesson": "실베스터의 판별법: 모든 선행 주소행렬식($\\Delta_1, \\Delta_2, \\ldots$)이 양수이면 양정치입니다. 고윳값을 직접 구하지 않아도 됩니다."
    },
    {
      "title": "[심화] 직교군과 특수직교군",
      "problem": "$Q = \\begin{pmatrix}\\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta\\end{pmatrix}$ 가 $O(2)$에 속함을 보이고, $SO(2)$에도 속하는지 판별하시오.",
      "steps": [
        "$Q^T Q = \\begin{pmatrix}\\cos\\theta & \\sin\\theta \\\\ -\\sin\\theta & \\cos\\theta\\end{pmatrix}\\begin{pmatrix}\\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta\\end{pmatrix}$.",
        "$= \\begin{pmatrix}\\cos^2\\theta + \\sin^2\\theta & 0 \\\\ 0 & \\sin^2\\theta + \\cos^2\\theta\\end{pmatrix} = I$. ✓ → $Q \\in O(2)$.",
        "$\\det Q = \\cos^2\\theta + \\sin^2\\theta = 1 > 0$. → $Q \\in SO(2)$."
      ],
      "answer": "$Q \\in O(2)$ 이고 $Q \\in SO(2)$ ($\\det Q = 1$)",
      "lesson": "$SO(2)$는 평면 회전 전체의 군입니다. 반사를 포함하면 $\\det = -1$이 되어 $O(2) \\setminus SO(2)$에 속합니다."
    }
  ],
  "problems": [
    {
      "id": "20-1",
      "type": "choice",
      "difficulty": 1,
      "question": "직교군 $O(n)$의 원소 $Q$가 만족하는 조건은?",
      "choices": ["$Q^T = Q$", "$Q^T Q = I$", "$\\det Q = 1$", "$Q^2 = I$"],
      "answer": "$Q^T Q = I$",
      "hints": ["직교행렬은 전치가 역행렬입니다.", "$Q^T Q = I$이면 $Q^{-1} = Q^T$.", "$\\det Q = \\pm 1$이지 반드시 $1$은 아닙니다 ($\\det = 1$은 $SO(n)$)."],
      "explanation": "$O(n) = \\{Q \\mid Q^T Q = I\\}$. $Q^T = Q$는 대칭행렬, $\\det Q = 1$은 특수직교군 $SO(n)$, $Q^2 = I$는 대합(involution)의 조건입니다.",
      "wrongAnalysis": "$\\det Q = 1$을 고르면 $SO(n)$과 $O(n)$을 혼동한 것입니다. 반사 행렬은 $\\det = -1$이지만 $O(n)$에 속합니다."
    },
    {
      "id": "20-2",
      "type": "number",
      "difficulty": 2,
      "question": "$Q(x,y,z) = x^2 + 2y^2 - 3z^2$의 부호수 $(p, q)$에서 $p + q$의 값은?",
      "answer": "3",
      "hints": ["이미 대각 형태이므로 고윳값이 $1, 2, -3$입니다.", "양의 고윳값: $1, 2$ → $p = 2$.", "음의 고윳값: $-3$ → $q = 1$."],
      "explanation": "이미 대각화된 형태에서 양의 계수 $1, 2$로 $p = 2$, 음의 계수 $-3$으로 $q = 1$. 따라서 $p + q = 3$. 부정치 이차형식입니다.",
      "wrongAnalysis": "0이 아닌 계수의 개수를 세는 것이므로 $p + q = 3$입니다. 부호수에서 $0$인 고윳값은 $p$에도 $q$에도 포함되지 않습니다."
    },
    {
      "id": "20-3",
      "type": "choice",
      "difficulty": 3,
      "question": "심플렉틱 군 $Sp(2n)$의 원소 $M$에 대해 항상 성립하는 것은?",
      "choices": ["$\\det M = 1$", "$M^T M = I$", "$M^2 = I$", "$\\det M = \\pm 1$"],
      "answer": "$\\det M = 1$",
      "hints": ["심플렉틱 조건: $M^T J M = J$에서 양변의 행렬식을 구합니다.", "$\\det(M^T J M) = (\\det M)^2 \\det J$이고 $\\det J = 1$입니다.", "$(\\det M)^2 = 1$이므로 $\\det M = \\pm 1$이지만, 연결성 논증으로 $\\det M = 1$만 가능합니다."],
      "explanation": "$M^T J M = J$에서 행렬식을 취하면 $(\\det M)^2 = 1$. $Sp(2n)$은 연결군이고 항등행렬($\\det = 1$)을 포함하므로, 연속적으로 $\\det = -1$로 갈 수 없어 항상 $\\det M = 1$입니다. 이는 직교군($\\det = \\pm 1$)과의 중요한 차이입니다.",
      "wrongAnalysis": "$M^T M = I$는 직교군의 조건이지 심플렉틱 군의 조건이 아닙니다. 심플렉틱 조건은 $M^T J M = J$입니다."
    },
    {
      "id": "20-4",
      "type": "choice",
      "difficulty": 1,
      "question": "이차형식 $Q(x,y) = x^2 + y^2$에 대응하는 행렬은?",
      "choices": [
        "$\\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$",
        "$\\begin{pmatrix} 1 & 1 \\\\ 1 & 1 \\end{pmatrix}$",
        "$\\begin{pmatrix} 2 & 0 \\\\ 0 & 2 \\end{pmatrix}$",
        "$\\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}$"
      ],
      "answer": "$\\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$",
      "hints": [
        "$Q = x^T A x$에서 대각 성분은 $x^2$, $y^2$의 계수입니다.",
        "교차항이 없으므로 비대각 성분은 $0$."
      ],
      "explanation": "$x^2 + y^2 = \\begin{pmatrix} x & y \\end{pmatrix} \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix}$. 교차항이 없으므로 단위행렬.",
      "wrongAnalysis": "계수를 $2$배하여 $\\begin{pmatrix} 2 & 0 \\\\ 0 & 2 \\end{pmatrix}$로 답하는 실수가 있습니다. $x^2$의 계수가 $1$이면 행렬의 대각 성분도 $1$입니다."
    },
    {
      "id": "20-5",
      "type": "choice",
      "difficulty": 2,
      "question": "$Q(x,y) = x^2 - y^2$의 부호 성질은?",
      "choices": [
        "양정치",
        "음정치",
        "양반정치",
        "부정치"
      ],
      "answer": "부정치",
      "hints": [
        "대응 행렬 $A = \\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix}$의 고윳값은?",
        "고윳값이 $1 > 0$, $-1 < 0$으로 부호가 섞여 있습니다."
      ],
      "explanation": "고윳값 $1, -1$로 양수와 음수가 모두 존재하므로 부정치입니다. $x = 1, y = 0$이면 $Q = 1 > 0$, $x = 0, y = 1$이면 $Q = -1 < 0$.",
      "wrongAnalysis": "양정치라고 답하면 $-y^2$ 항을 무시한 것입니다. 양정치는 모든 고윳값이 양수일 때만 해당합니다."
    }
  ],
  "summary": {
    "keyPoints": [
      "이차형식 $Q(x) = x^T A x$는 대칭행렬 $A$로 결정되며, 고윳값의 부호로 양정치/음정치/부정치를 판별한다.",
      "실베스터의 관성 법칙: 부호수 $(p, q)$는 기저 변환에 불변이다.",
      "$GL(n)$: 가역, $SL(n)$: 부피보존, $O(n)$: 길이보존, $SO(n)$: 회전, $Sp(2n)$: 면적보존.",
      "이 군들은 리군의 대표적 예이며 물리학과 기하학 전반에서 핵심 역할을 한다."
    ],
    "formulas": [
      "Q(x) = x^T A x,\\; A = A^T",
      "O(n): Q^T Q = I,\\; SO(n): Q^T Q = I \\text{ and } \\det Q = 1",
      "Sp(2n): M^T J M = J,\\; \\det M = 1"
    ],
    "commonMistakes": [
      "이차형식의 행렬에서 비대각 항의 계수를 반으로 나누는 것을 잊는 실수 ($xy$ 항 계수 $4$ → 행렬 원소 $2$)",
      "$O(n)$과 $SO(n)$을 혼동하는 것 ($O(n)$은 $\\det = \\pm 1$, $SO(n)$은 $\\det = 1$만)",
      "심플렉틱 조건을 직교 조건과 혼동하는 것 ($M^T J M = J$ vs $Q^T Q = I$)"
    ],
    "nextConnection": "선형대수의 전체 여정을 마쳤습니다! 이제 이 도구들을 활용하는 다변수 미적분학으로 나아갑니다. 그래디언트는 쌍대공간, 야코비안은 선형사상의 행렬 표현, 헤시안은 이차형식입니다."
  }
}
];
