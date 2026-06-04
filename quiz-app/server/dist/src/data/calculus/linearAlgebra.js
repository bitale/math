"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.linearAlgebraLessons = void 0;
exports.linearAlgebraLessons = [
    {
        "id": 53,
        "title": "벡터 기초",
        "category": "선형대수",
        "level": "기초",
        "question": "수가 아니라 '방향까지 가진 양'을 어떻게 다룰까?",
        "concept": {
            "intro": "벡터는 크기와 방향을 동시에 가진 양입니다. 수 하나(스칼라)로는 표현할 수 없는 위치 변화, 속도, 힘 등을 다룰 때 등장합니다.\n\n2차원·3차원·일반 $n$차원에서 벡터는 성분의 나열 $\\mathbf{v} = (v_1, v_2, \\ldots, v_n)$ 로 표현합니다. 같은 차원의 벡터는 성분별로 더할 수 있고, 스칼라(실수)를 곱하면 방향은 유지된 채 길이만 바뀝니다.",
            "intuition": "지도 위에서 '동쪽으로 3km, 북쪽으로 4km' 라는 화살표 하나를 떠올려 보세요. 같은 화살표 두 개를 이어 붙이면 두 배 길이의 화살표가 되고, 다른 화살표를 머리끝에 이으면 두 이동을 합친 새로운 화살표가 됩니다. 이것이 그대로 스칼라곱과 합입니다.",
            "formula": "\\mathbf{v} = (v_1, v_2, \\ldots, v_n)\n\\mathbf{u} + \\mathbf{v} = (u_1+v_1,\\ \\ldots,\\ u_n+v_n)\nk\\mathbf{v} = (k v_1,\\ \\ldots,\\ k v_n)\n\\|\\mathbf{v}\\| = \\sqrt{v_1^2 + \\cdots + v_n^2}",
            "summary": "• 벡터 $=$ 크기 $+$ 방향\n• 성분별 합 / 스칼라곱\n• 노름(길이) $\\|\\mathbf{v}\\|$"
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
            }
        ],
        "problems": [
            {
                "id": "53-1",
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
                "id": "53-2",
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
                "id": "53-3",
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
        "id": 54,
        "title": "내적과 사영",
        "category": "선형대수",
        "level": "기초",
        "question": "두 벡터가 '얼마나 같은 방향을 보는가'를 어떻게 숫자 하나로 잴 수 있을까?",
        "concept": {
            "intro": "내적은 두 벡터에서 스칼라(숫자) 하나를 만들어내는 연산입니다. 정의는 두 가지: 성분 표현 $\\mathbf{u}\\cdot\\mathbf{v} = \\sum u_i v_i$, 기하 표현 $\\mathbf{u}\\cdot\\mathbf{v} = \\|\\mathbf{u}\\|\\|\\mathbf{v}\\|\\cos\\theta$. 둘은 같은 값을 줍니다.\n\n내적이 $0$ 이면 두 벡터는 수직. 양수면 같은 방향, 음수면 반대 방향. 사영(projection)은 한 벡터의 그림자를 다른 벡터 위에 떨어뜨린 길이로, 그래디언트의 방향도함수가 곧 사영입니다.",
            "intuition": "한 사람이 손전등을 들고 벽을 비추는 모습을 떠올려 보세요. 벽에 생기는 빛의 길이가 사영의 길이입니다. 두 벡터가 같은 방향을 보면 그림자가 길어지고(큰 양수), 수직이면 그림자가 사라지고($0$), 반대 방향이면 그림자가 음수로 깁니다.",
            "formula": "\\mathbf{u}\\cdot\\mathbf{v} = u_1 v_1 + u_2 v_2 + \\cdots + u_n v_n\n\\mathbf{u}\\cdot\\mathbf{v} = \\|\\mathbf{u}\\|\\,\\|\\mathbf{v}\\|\\cos\\theta\n\\mathrm{proj}_{\\mathbf{v}}\\,\\mathbf{u} = \\frac{\\mathbf{u}\\cdot\\mathbf{v}}{\\|\\mathbf{v}\\|^2}\\,\\mathbf{v}",
            "summary": "• 내적 $=$ 성분곱의 합 $=$ 크기 곱 $\\times \\cos\\theta$\n• 수직 $\\Leftrightarrow$ 내적 $0$\n• 사영은 그림자 벡터"
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
            }
        ],
        "problems": [
            {
                "id": "54-1",
                "type": "number",
                "difficulty": 1,
                "question": "$\\mathbf{u} = (2, 3),\\ \\mathbf{v} = (4, -1)$ 의 내적 $\\mathbf{u}\\cdot\\mathbf{v}$ 의 값은?",
                "answer": "5",
                "hints": [
                    "$\\sum u_i v_i$.",
                    "$2\\cdot 4 + 3\\cdot(-1)$."
                ],
                "explanation": "$8 + (-3) = 5$.",
                "wrongAnalysis": "성분을 곱한 결과를 다시 곱해 $(2\\cdot 4)\\cdot(3\\cdot -1)$ 식으로 곱셈을 누적하는 실수가 흔합니다. 내적은 곱의 합입니다."
            },
            {
                "id": "54-2",
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
                "id": "54-3",
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
        "id": 55,
        "title": "행렬과 행렬 연산",
        "category": "선형대수",
        "level": "중급",
        "question": "여러 벡터의 정보를 한꺼번에 표·다루는 도구는 무엇일까?",
        "concept": {
            "intro": "행렬은 수를 직사각형 모양으로 배열한 표입니다. $m \\times n$ 행렬은 $m$개의 행과 $n$개의 열을 가집니다. 같은 모양끼리는 성분별로 더할 수 있고, 스칼라곱도 성분별로 합니다.\n\n행렬 곱셈은 '왼쪽 행렬의 행 $\\cdot$ 오른쪽 행렬의 열' 의 내적들로 만들어집니다. 그래서 곱이 가능한 조건은 $(m \\times n)\\,(n \\times p)$ 처럼 안쪽 차원이 맞아야 합니다.\n\n행렬 곱은 일반적으로 교환법칙이 성립하지 않습니다 ($AB \\ne BA$).",
            "intuition": "행렬은 데이터 표라고 생각해도 좋고, '여러 벡터를 한 번에 변환하는 기계' 라고 생각해도 좋습니다. 다음 단원에서 후자의 해석을 자세히 다룹니다.",
            "formula": "(A + B)_{ij} = A_{ij} + B_{ij}\n(kA)_{ij} = k A_{ij}\n(AB)_{ij} = \\sum_{k} A_{ik}\\,B_{kj}\n\\text{곱 가능 조건:}\\ (m\\times n)(n\\times p) = (m\\times p)",
            "summary": "• 행렬 $=$ 수의 직사각형 배열\n• 합·스칼라곱은 성분별\n• 곱은 행과 열의 내적들"
        },
        "examples": [
            {
                "title": "$2 \\times 2$ 행렬 곱",
                "problem": "$A = \\begin{pmatrix}1 & 2 \\ 3 & 4\\end{pmatrix},\\ B = \\begin{pmatrix}0 & 1 \\ 1 & 0\\end{pmatrix}$ 일 때 $AB$ 를 구하시오.",
                "steps": [
                    "$(AB)_{11} = 1\\cdot 0 + 2\\cdot 1 = 2$.",
                    "$(AB)_{12} = 1\\cdot 1 + 2\\cdot 0 = 1$.",
                    "$(AB)_{21} = 3\\cdot 0 + 4\\cdot 1 = 4$.",
                    "$(AB)_{22} = 3\\cdot 1 + 4\\cdot 0 = 3$."
                ],
                "answer": "$AB = \\begin{pmatrix}2 & 1 \\ 4 & 3\\end{pmatrix}$",
                "lesson": "각 성분을 '왼쪽 행 $\\cdot$ 오른쪽 열' 의 내적으로 차분히 채우는 습관이 중요합니다. 한꺼번에 머릿속에서 계산하지 마세요."
            }
        ],
        "problems": [
            {
                "id": "55-1",
                "type": "text",
                "difficulty": 1,
                "question": "$A = \\begin{pmatrix}1 & 2 \\ 3 & 4\\end{pmatrix}$ 의 $(2,1)$ 성분 $A_{21}$ 의 값은?",
                "answer": "3",
                "hints": [
                    "$A_{ij}$ 는 $i$ 번째 행, $j$ 번째 열.",
                    "$(2,1) = $ 2행 1열."
                ],
                "explanation": "$2$ 행의 $1$ 열 성분이므로 $3$.",
                "wrongAnalysis": "$(i,j)$ 를 $(j,i)$ 로 거꾸로 읽는 실수가 흔합니다. 행이 먼저, 열이 나중."
            },
            {
                "id": "55-2",
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
                "id": "55-3",
                "type": "number",
                "difficulty": 3,
                "question": "$A = \\begin{pmatrix}1 & 2 \\ 3 & 4\\end{pmatrix},\\ B = \\begin{pmatrix}5 \\ 6\\end{pmatrix}$ 일 때 $AB$ 의 첫 성분 $(AB)_{11}$ 의 값은?",
                "answer": "17",
                "hints": [
                    "$(AB)_{11} = $ $A$ 의 $1$ 행 $\\cdot$ $B$ 의 $1$ 열.",
                    "$1\\cdot 5 + 2\\cdot 6$."
                ],
                "explanation": "$1\\cdot 5 + 2\\cdot 6 = 5 + 12 = 17$.",
                "wrongAnalysis": "$A$ 의 행 대신 열을 가져오는 실수가 흔합니다. 행렬 곱의 '왼쪽은 행, 오른쪽은 열'을 잊지 마세요."
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
        "id": 56,
        "title": "선형변환과 행렬식",
        "category": "선형대수",
        "level": "고급",
        "question": "행렬은 벡터를 어떻게 '변환' 시킬까? 그리고 그 변환이 면적·부피를 얼마나 바꿀까?",
        "concept": {
            "intro": "$n \\times n$ 행렬 $A$ 는 $\\mathbf{x} \\mapsto A\\mathbf{x}$ 라는 선형변환을 정의합니다. 선형이라는 말은 $A(\\mathbf{x} + \\mathbf{y}) = A\\mathbf{x} + A\\mathbf{y}$, $A(k\\mathbf{x}) = kA\\mathbf{x}$ 가 성립한다는 뜻입니다.\n\n행렬식 $\\det A$ 는 이 변환이 면적(2차원)이나 부피(3차원)를 몇 배로 늘이는지 알려주는 스칼라입니다. $\\det A = 0$ 이면 변환이 차원을 줄여 버리고(역행렬 없음), $\\det A > 0$ 이면 방향을 보존, $\\det A < 0$ 이면 뒤집습니다.",
            "intuition": "행렬 $A$ 는 단위 정사각형을 평행사변형으로 변환하는 도장 찍기 같습니다. 그 평행사변형의 면적이 곧 $|\\det A|$. 만약 $\\det A = 0$ 이면 평행사변형이 납작해져 선분이 됩니다.",
            "formula": "A: \\mathbb{R}^n \\to \\mathbb{R}^n,\\ \\mathbf{x} \\mapsto A\\mathbf{x}\n\\det \\begin{pmatrix}a & b \\ c & d\\end{pmatrix} = ad - bc\n\\det(AB) = \\det A \\cdot \\det B\nA^{-1}\\ \\text{존재}\\ \\Leftrightarrow\\ \\det A \\ne 0",
            "summary": "• 행렬 $=$ 선형변환\n• 행렬식 $=$ 부피 확대율 (부호 포함)\n• $\\det A = 0$ $\\Leftrightarrow$ 역행렬 없음 $\\Leftrightarrow$ 변환이 차원을 줄임"
        },
        "examples": [
            {
                "title": "$2\\times 2$ 행렬식과 역행렬",
                "problem": "$A = \\begin{pmatrix}2 & 1 \\ 3 & 4\\end{pmatrix}$ 의 행렬식과 역행렬을 구하시오.",
                "steps": [
                    "$\\det A = 2\\cdot 4 - 1\\cdot 3 = 5$.",
                    "$\\det A \\ne 0$ 이므로 역행렬 존재.",
                    "$A^{-1} = \\dfrac{1}{5}\\begin{pmatrix}4 & -1 \\ -3 & 2\\end{pmatrix}$."
                ],
                "answer": "$\\det A = 5,\\ A^{-1} = \\dfrac{1}{5}\\begin{pmatrix}4 & -1 \\ -3 & 2\\end{pmatrix}$",
                "lesson": "$2\\times 2$ 역행렬은 '대각 성분 교환, 비대각에 마이너스, 행렬식으로 나누기' 라는 공식만 외우면 됩니다."
            }
        ],
        "problems": [
            {
                "id": "56-1",
                "type": "number",
                "difficulty": 1,
                "question": "$\\det \\begin{pmatrix}3 & 2 \\ 1 & 4\\end{pmatrix}$ 의 값은?",
                "answer": "10",
                "hints": [
                    "$ad - bc$.",
                    "$3\\cdot 4 - 2\\cdot 1$."
                ],
                "explanation": "$12 - 2 = 10$.",
                "wrongAnalysis": "$ad + bc$ 로 부호를 잘못 적는 실수가 흔합니다. 항상 빼기."
            },
            {
                "id": "56-2",
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
                "id": "56-3",
                "type": "number",
                "difficulty": 3,
                "question": "$A = \\begin{pmatrix}2 & 0 \\ 0 & 3\\end{pmatrix}$ 가 단위 정사각형(면적 $1$)을 변환했을 때, 결과 도형의 면적은?",
                "answer": "6",
                "hints": [
                    "면적 확대율 $= |\\det A|$.",
                    "$\\det A = 2\\cdot 3 = 6$."
                ],
                "explanation": "$|\\det A| = 6$ 이므로 면적이 $6$ 배가 되어 새 면적은 $6$.",
                "wrongAnalysis": "행렬식과 행렬 성분의 합·곱을 헷갈리는 실수가 흔합니다. $2\\times 2$ 에서는 $ad - bc$."
            }
        ],
        "summary": {
            "keyPoints": [
                "행렬 $=$ 선형변환",
                "$\\det A = $ 면적/부피 변화율 (부호 포함)",
                "$\\det A \\ne 0$ $\\Leftrightarrow$ 역행렬 존재"
            ],
            "formulas": [
                "\\det \\begin{pmatrix}a & b \\ c & d\\end{pmatrix} = ad - bc",
                "A^{-1} = \\frac{1}{\\det A}\\begin{pmatrix}d & -b \\ -c & a\\end{pmatrix}\\ (2\\times 2)",
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
        "id": 57,
        "title": "고윳값과 고유벡터",
        "category": "선형대수",
        "level": "고급",
        "question": "선형변환 후에도 '방향이 그대로'인 벡터가 있을까? 있다면 크기는 얼마나 변할까?",
        "concept": {
            "intro": "행렬 $A$ 에 대해 $A\\mathbf{v} = \\lambda \\mathbf{v}$ 를 만족하는 $\\mathbf{0}$ 이 아닌 벡터 $\\mathbf{v}$ 를 고유벡터, 그때의 스칼라 $\\lambda$ 를 고윳값이라고 합니다.\n\n고윳값을 구하는 핵심은 직전 단원의 행렬식입니다. $A\\mathbf{v} = \\lambda\\mathbf{v}$ 를 옮기면 $(A - \\lambda I)\\mathbf{v} = \\mathbf{0}$ 이 되는데, 이 식이 $\\mathbf{v} \\ne \\mathbf{0}$ 인 해를 가지려면 단원 28에서 본 대로 변환 $A - \\lambda I$ 가 차원을 줄여야, 즉 $\\det(A - \\lambda I) = 0$ 이어야 합니다.\n\n그래서 계산은 두 단계: ① 특성방정식 $\\det(A - \\lambda I) = 0$ 을 풀어 고윳값을 구하고, ② 각 $\\lambda$ 에 대해 $(A - \\lambda I)\\mathbf{v} = \\mathbf{0}$ 의 비자명 해로 고유벡터를 구합니다.\n\n고윳값·고유벡터는 미분방정식 시스템, 주성분 분석, 안정성 해석 등 응용수학 전반의 중심 도구입니다.",
            "intuition": "행렬 변환은 보통 벡터의 방향과 크기를 동시에 바꿉니다. 그러나 어떤 특별한 방향들은 '방향은 그대로 둔 채 크기만' 바뀌어요. 그 방향이 고유벡터, 그때의 배율이 고윳값입니다. 마치 회전 + 늘림 변환에서도 '늘림 축' 은 회전하지 않는 것과 같죠.",
            "formula": "A\\mathbf{v} = \\lambda \\mathbf{v},\\quad \\mathbf{v} \\ne \\mathbf{0}\n\\det(A - \\lambda I) = 0\\ \\text{(특성방정식)}\n(A - \\lambda I)\\mathbf{v} = \\mathbf{0}\\ \\text{로 고유벡터}",
            "summary": "• 고유벡터: 방향 유지, 크기만 변하는 벡터\n• 고윳값: 그 크기 배율\n• 특성방정식 $\\det(A - \\lambda I) = 0$"
        },
        "examples": [
            {
                "title": "$2 \\times 2$ 고윳값·고유벡터",
                "problem": "$A = \\begin{pmatrix}2 & 0 \\ 0 & 3\\end{pmatrix}$ 의 고윳값과 고유벡터를 구하시오.",
                "steps": [
                    "$\\det(A - \\lambda I) = (2-\\lambda)(3-\\lambda) = 0$.",
                    "$\\lambda_1 = 2,\\ \\lambda_2 = 3$.",
                    "$\\lambda_1=2$: $(A - 2I)\\mathbf{v} = \\mathbf{0}$, $\\mathbf{v}_1 = (1,0)$.",
                    "$\\lambda_2=3$: 마찬가지로 $\\mathbf{v}_2 = (0,1)$."
                ],
                "answer": "$\\lambda_1 = 2,\\ \\mathbf{v}_1 = (1,0);\\ \\lambda_2 = 3,\\ \\mathbf{v}_2 = (0,1)$",
                "lesson": "대각행렬의 고윳값은 대각 성분 그 자체이고, 고유벡터는 표준 기저입니다. 가장 단순한 형태로 이해를 시작하기 좋습니다."
            }
        ],
        "problems": [
            {
                "id": "57-1",
                "type": "text",
                "difficulty": 2,
                "question": "$A = \\begin{pmatrix}3 & 1 \\ 0 & 2\\end{pmatrix}$ 의 고윳값들을 콤마로 구분해 적으시오. (예: 1,2)",
                "answer": "3,2",
                "hints": [
                    "$\\det(A - \\lambda I) = 0$.",
                    "$(3-\\lambda)(2-\\lambda) - 0 = 0$."
                ],
                "explanation": "특성방정식 $(3-\\lambda)(2-\\lambda) = 0 \\;\\Rightarrow\\; \\lambda = 3,\\ 2$. 삼각 행렬의 고윳값은 대각 성분 그 자체.",
                "wrongAnalysis": "비대각 성분 $1$ 을 함수로 곱해 끌어들이는 실수가 있습니다. 삼각 행렬에서는 대각만 보면 됩니다."
            },
            {
                "id": "57-2",
                "type": "number",
                "difficulty": 3,
                "question": "$A = \\begin{pmatrix}2 & 1 \\ 1 & 2\\end{pmatrix}$ 의 큰 쪽 고윳값은?",
                "answer": "3",
                "hints": [
                    "$\\det(A - \\lambda I) = (2-\\lambda)^2 - 1 = 0$.",
                    "$(2-\\lambda)^2 = 1 \\;\\Rightarrow\\; 2 - \\lambda = \\pm 1$."
                ],
                "explanation": "$2 - \\lambda = 1 \\;\\Rightarrow\\; \\lambda = 1$, $2 - \\lambda = -1 \\;\\Rightarrow\\; \\lambda = 3$. 큰 값은 $3$.",
                "wrongAnalysis": "특성방정식 전개 시 $-bc$ 항을 빼먹는 실수가 흔합니다. $\\det = ad - bc$ 의 $-bc$ 를 잊지 마세요."
            },
            {
                "id": "57-3",
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
            "nextConnection": "이제 벡터와 행렬, 그리고 고윳값까지 갖췄으니, 다시 미적분으로 돌아갑니다. 다음 단원부터 '여러 변수를 입력받는 함수' 인 다변수 함수의 세계가 열립니다. 그리고 미분방정식 시스템 단원에서 오늘 배운 고윳값이 다시 등장합니다."
        }
    }
];
