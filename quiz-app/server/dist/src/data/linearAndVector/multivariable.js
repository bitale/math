"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.multivariableLessons = void 0;
exports.multivariableLessons = [
    {
        "id": 21,
        "title": "다변수 함수",
        "category": "다변수 미적분",
        "level": "고급",
        "question": "변수가 두 개 이상일 때 함수와 그래프는 어떻게 달라질까?",
        "concept": {
            "intro": ":::definition[개념 정의]\n$f(x, y)$ 와 같이 입력이 둘 이상인 함수가 다변수 함수입니다. 그래프는 3차원 곡면이 되며, 등고선(level curve)으로 평면에 표현하기도 합니다.\n:::\n\n:::note[참고]\n극한·연속·미분의 개념은 그대로 확장되지만, '한 방향이 아니라 모든 방향'에서 들어와도 같은 값으로 다가가야 한다는 점이 중요합니다.\n:::",
            "intuition": ":::note[직관]\n온도를 $(x,y)$ 좌표의 도시 위에 그린 등온선이나, 지도의 등고선을 떠올려 보세요. $1$차원 그래프가 $2$차원 곡선이라면, $2$변수 함수의 그래프는 $3$차원 곡면입니다.\n:::",
            "formula": "f: \\mathbb{R}^2 \\to \\mathbb{R},\\ (x,y) \\mapsto f(x,y)\n\\text{등고선:}\\ f(x,y) = c\n\\text{극한:}\\ \\lim_{(x,y) \\to (a,b)} f(x,y)",
            "summary": ":::note[핵심 요약]\n• 입력이 둘 이상\n• 그래프는 3D 곡면\n• 모든 방향 극한이 같아야 함\n:::"
        },
        "examples": [
            {
                "title": "등고선 그리기",
                "problem": "$f(x,y) = x^2 + y^2$ 의 등고선 $f = 1,\\ 4$ 를 구하시오.",
                "steps": [
                    "$f = 1:\\ x^2 + y^2 = 1$ (반지름 $1$ 원).",
                    "$f = 4:\\ x^2 + y^2 = 4$ (반지름 $2$ 원)."
                ],
                "answer": "원들의 모임 (반지름 $1,\\ 2$)",
                "lesson": "등고선은 같은 함숫값을 가지는 점들의 모임입니다. 곡면의 모양을 평면 위에 투영하는 방법입니다."
            },
            {
                "title": "[기본] 다변수 함수의 함숫값 계산",
                "problem": "$f(x, y) = x^2 - 2xy + y^2$ 에서 $f(2, 1)$ 을 구하시오.",
                "steps": [
                    "$f(2, 1) = 4 - 2 \\cdot 2 \\cdot 1 + 1 = 4 - 4 + 1 = 1$.",
                    "또한 $f(x,y) = (x - y)^2$이므로 $f(2,1) = (2-1)^2 = 1$."
                ],
                "answer": "$f(2, 1) = 1$",
                "lesson": "식을 인수분해하면 계산이 간단해질 수 있습니다. $f(x,y) = (x-y)^2$이므로 등고선은 직선 $x - y = c$입니다."
            },
            {
                "title": "[응용] 이변수 극한의 경로 판별",
                "problem": "$\\lim_{(x,y) \\to (0,0)} \\dfrac{x^2 y}{x^4 + y^2}$ 의 존재 여부를 판별하시오.",
                "steps": [
                    "$y = 0$: $\\dfrac{0}{x^4} = 0$.",
                    "$x = 0$: $\\dfrac{0}{y^2} = 0$.",
                    "$y = x^2$: $\\dfrac{x^2 \\cdot x^2}{x^4 + x^4} = \\dfrac{x^4}{2x^4} = \\dfrac{1}{2}$.",
                    "경로 $y = 0$에서는 $0$, $y = x^2$에서는 $\\dfrac{1}{2}$. 극한이 존재하지 않음."
                ],
                "answer": "극한이 존재하지 않는다",
                "lesson": "직선 경로 $y = mx$로만 시험하면 극한이 존재하는 것처럼 보이는 함정이 있습니다. 포물선 경로 $y = x^2$ 같은 곡선 경로도 시험해야 합니다."
            },
            {
                "title": "[응용] 타원포물면의 등고선",
                "problem": "$f(x,y) = \\dfrac{x^2}{4} + y^2$ 의 등고선 $f = 1$ 의 모양을 설명하시오.",
                "steps": [
                    "$\\dfrac{x^2}{4} + y^2 = 1$.",
                    "이것은 $a = 2$, $b = 1$ 인 타원의 방정식.",
                    "$x$축 방향 반지름 $= 2$, $y$축 방향 반지름 $= 1$."
                ],
                "answer": "$x$축 방향 반지름 $2$, $y$축 방향 반지름 $1$ 인 타원",
                "lesson": "이차함수의 등고선은 이차곡선입니다. $x^2$, $y^2$ 앞의 계수 비율이 등고선의 모양(원 vs 타원)을 결정합니다."
            },
            {
                "title": "[심화] 극한의 극좌표 활용",
                "problem": "$\\lim_{(x,y) \\to (0,0)} \\dfrac{x^2 y}{x^2 + y^2}$ 의 값을 구하시오.",
                "steps": [
                    "극좌표: $x = r\\cos\\theta$, $y = r\\sin\\theta$.",
                    "$\\dfrac{x^2 y}{x^2 + y^2} = \\dfrac{r^2\\cos^2\\theta \\cdot r\\sin\\theta}{r^2} = r\\cos^2\\theta\\sin\\theta$.",
                    "$|r\\cos^2\\theta\\sin\\theta| \\leq r \\to 0$ ($r \\to 0$).",
                    "조임 정리(squeeze theorem)에 의해 극한 $= 0$."
                ],
                "answer": "$0$",
                "lesson": "극좌표 치환 후 $r \\to 0$에서 $\\theta$에 무관하게 수렴하면 극한이 존재합니다. $r$의 차수가 양수이면 $0$으로 수렴합니다."
            }
        ],
        "problems": [
            {
                "id": "21-1",
                "type": "number",
                "difficulty": 1,
                "question": "$f(x,y) = x^2 + y^2$ 일 때 $f(3,4)$ 의 값은?",
                "answer": "25",
                "hints": [
                    "$x=3,\\ y=4$ 대입.",
                    "$9 + 16 = ?$"
                ],
                "explanation": "$9 + 16 = 25$. 이 함수는 원점으로부터의 거리의 제곱.",
                "wrongAnalysis": "$x+y$ 와 혼동해 $7$ 이라고 적는 실수가 가끔 있습니다."
            },
            {
                "id": "21-2",
                "type": "choice",
                "difficulty": 2,
                "question": "$f(x,y) = x^2 + y^2$ 의 등고선의 모양은?",
                "choices": [
                    "원",
                    "타원",
                    "포물선",
                    "직선"
                ],
                "answer": "원",
                "hints": [
                    "$x^2 + y^2 = c$ 가 어떤 곡선인가?"
                ],
                "explanation": "$x^2 + y^2 = c$ 는 반지름 $\\sqrt{c}$ 인 원.",
                "wrongAnalysis": "$x^2 + y^2$ 와 $\\dfrac{x^2}{a^2} + \\dfrac{y^2}{b^2}$ 형태의 타원을 혼동하지 마세요."
            },
            {
                "id": "21-3",
                "type": "choice",
                "difficulty": 3,
                "question": "$f(x,y) = \\dfrac{xy}{x^2 + y^2}$ 의 $(0,0)$ 에서의 극한은?",
                "choices": [
                    "$0$",
                    "$1$",
                    "$\\dfrac{1}{2}$",
                    "존재하지 않는다"
                ],
                "answer": "존재하지 않는다",
                "hints": [
                    "$y = 0$ 으로 들어가면 값이 $0$.",
                    "$y = x$ 로 들어가면?",
                    "두 방향의 결과가 다르면 극한 없음."
                ],
                "explanation": "$y=0$: 값 $0$. $y=x$: $\\dfrac{xy}{x^2+y^2} = \\dfrac{x^2}{2x^2} = \\dfrac{1}{2}$. 방향마다 값이 다르므로 극한이 존재하지 않습니다.",
                "wrongAnalysis": "한 방향으로만 시험하고 극한이 존재한다고 단정하는 실수가 매우 흔합니다."
            },
            {
                "id": "21-4",
                "type": "number",
                "difficulty": 1,
                "question": "$f(x,y) = 2x + 3y$ 일 때 $f(1, 2)$ 의 값은?",
                "answer": "8",
                "hints": [
                    "$x = 1$, $y = 2$ 를 대입하세요.",
                    "$2(1) + 3(2) = ?$"
                ],
                "explanation": "$f(1,2) = 2(1) + 3(2) = 2 + 6 = 8$.",
                "wrongAnalysis": "$2 \\times 3 = 6$ 처럼 계수끼리 곱하는 실수가 있습니다. 각 항을 따로 계산하세요."
            },
            {
                "id": "21-5",
                "type": "choice",
                "difficulty": 2,
                "question": "$f(x,y) = \\dfrac{x^2}{a^2} + \\dfrac{y^2}{b^2}$ ($a \\neq b$) 의 등고선 $f = c > 0$ 의 모양은?",
                "choices": [
                    "원",
                    "타원",
                    "포물선",
                    "쌍곡선"
                ],
                "answer": "타원",
                "hints": [
                    "$\\dfrac{x^2}{a^2} + \\dfrac{y^2}{b^2} = c$ 의 형태를 분석하세요.",
                    "$a \\neq b$ 이므로 두 축의 길이가 다릅니다."
                ],
                "explanation": "$\\dfrac{x^2}{a^2} + \\dfrac{y^2}{b^2} = c$ 를 정리하면 $\\dfrac{x^2}{ca^2} + \\dfrac{y^2}{cb^2} = 1$ 이며, $a \\neq b$ 이므로 타원입니다.",
                "wrongAnalysis": "$a = b$ 일 때는 원이 되지만, $a \\neq b$ 라는 조건을 놓치면 원이라 답할 수 있습니다."
            }
        ],
        "summary": {
            "keyPoints": [
                "다변수 함수의 그래프는 곡면",
                "등고선으로 평면에 표현",
                "극한은 모든 방향에서 같아야 존재"
            ],
            "formulas": [
                "f: \\mathbb{R}^2 \\to \\mathbb{R}",
                "\\text{등고선}\\ f(x,y) = c"
            ],
            "commonMistakes": [
                "한 방향만 보고 극한 단정",
                "원과 타원의 등고선 구분 실수"
            ],
            "nextConnection": "이제 변수가 여러 개인 함수의 변화율을 어떻게 정의할지 묻게 됩니다. 다음 단원이 편미분입니다."
        }
    },
    {
        "id": 22,
        "title": "편미분",
        "category": "다변수 미적분",
        "level": "고급",
        "question": "다변수 함수에서 한 변수만 변할 때의 변화율은 어떻게 정의할까?",
        "concept": {
            "intro": ":::definition[개념 정의]\n편미분은 한 변수만 변화시키고 다른 변수는 상수로 두는 미분입니다. $f_x = \\dfrac{\\partial f}{\\partial x}$ 는 '$y$ 를 상수로 두고 $x$ 로 미분'이라는 뜻입니다.\n:::\n\n:::note[참고]\n편미분 자체는 일변수 미분 규칙을 그대로 사용합니다. 변수만 잠깐 '얼려' 두는 셈입니다.\n:::",
            "intuition": ":::note[직관]\n지도 위에 등고선을 따라 동쪽으로만 걸을 때 고도가 얼마나 빠르게 변하는지를 묻는 것과 같습니다. 남북 방향은 잠깐 무시합니다.\n:::",
            "formula": "\\frac{\\partial f}{\\partial x}:\\ y\\text{를 상수로 두고 }x\\text{로 미분}\n\\frac{\\partial f}{\\partial y}:\\ x\\text{를 상수로 두고 }y\\text{로 미분}",
            "summary": ":::note[핵심 요약]\n• 한 변수만 변화\n• 다른 변수는 상수 취급\n• 표기: $\\partial,\\ f_x,\\ f_y$\n:::"
        },
        "examples": [
            {
                "title": "기본 편미분",
                "problem": "$f(x,y) = x^2 y + 3xy^2$ 의 $\\dfrac{\\partial f}{\\partial x}$ 와 $\\dfrac{\\partial f}{\\partial y}$ 를 구하시오.",
                "steps": [
                    "$\\dfrac{\\partial f}{\\partial x}$: $y$ 는 상수 $\\Rightarrow 2xy + 3y^2$.",
                    "$\\dfrac{\\partial f}{\\partial y}$: $x$ 는 상수 $\\Rightarrow x^2 + 6xy$."
                ],
                "answer": "$f_x = 2xy + 3y^2,\\ f_y = x^2 + 6xy$",
                "lesson": "편미분 자체는 일변수 미분과 같습니다. 다만 어떤 변수를 '상수'로 보는지가 중요합니다."
            },
            {
                "title": "[기본] 간단한 편미분",
                "problem": "$f(x, y) = 3x^2 + xy + 2y^3$ 의 $f_x$ 와 $f_y$ 를 구하시오.",
                "steps": [
                    "$f_x$: $y$를 상수 취급. $f_x = 6x + y$.",
                    "$f_y$: $x$를 상수 취급. $f_y = x + 6y^2$."
                ],
                "answer": "$f_x = 6x + y,\\ f_y = x + 6y^2$",
                "lesson": "각 항을 독립적으로 미분합니다. $xy$ 항에서 $x$로 미분하면 $y$가 남고, $y$로 미분하면 $x$가 남습니다."
            },
            {
                "title": "[응용] 이계 편미분과 클레로 정리",
                "problem": "$f(x, y) = x^3 y^2$ 의 $f_{xy}$ 와 $f_{yx}$ 를 구하고 같은지 확인하시오.",
                "steps": [
                    "$f_x = 3x^2 y^2$.",
                    "$f_{xy} = \\dfrac{\\partial}{\\partial y}(3x^2 y^2) = 6x^2 y$.",
                    "$f_y = 2x^3 y$.",
                    "$f_{yx} = \\dfrac{\\partial}{\\partial x}(2x^3 y) = 6x^2 y$.",
                    "$f_{xy} = f_{yx} = 6x^2 y$. ✓ (클레로 정리)"
                ],
                "answer": "$f_{xy} = f_{yx} = 6x^2 y$",
                "lesson": "클레로(슈바르츠) 정리: 이계 편미분이 연속이면 미분 순서를 바꿔도 결과가 같습니다. $f_{xy} = f_{yx}$."
            },
            {
                "title": "[응용] 합성함수의 편미분 (연쇄법칙)",
                "problem": "$f(x, y) = e^{x^2 + y}$ 의 $f_x$ 와 $f_y$ 를 구하시오.",
                "steps": [
                    "$u = x^2 + y$로 놓으면 $f = e^u$.",
                    "$f_x = e^u \\cdot \\dfrac{\\partial u}{\\partial x} = e^{x^2 + y} \\cdot 2x = 2x e^{x^2 + y}$.",
                    "$f_y = e^u \\cdot \\dfrac{\\partial u}{\\partial y} = e^{x^2 + y} \\cdot 1 = e^{x^2 + y}$."
                ],
                "answer": "$f_x = 2x e^{x^2 + y},\\ f_y = e^{x^2 + y}$",
                "lesson": "합성함수의 편미분에서는 연쇄법칙을 적용합니다. 바깥 함수는 그대로 미분하고, 안쪽 함수의 편미분을 곱합니다."
            },
            {
                "title": "[심화] 음함수의 편미분",
                "problem": "$x^2 + y^2 + z^2 = 1$ 에서 $z = z(x, y)$로 볼 때 $\\dfrac{\\partial z}{\\partial x}$ 를 구하시오.",
                "steps": [
                    "$F(x, y, z) = x^2 + y^2 + z^2 - 1 = 0$.",
                    "음함수 정리: $\\dfrac{\\partial z}{\\partial x} = -\\dfrac{F_x}{F_z}$.",
                    "$F_x = 2x$, $F_z = 2z$.",
                    "$\\dfrac{\\partial z}{\\partial x} = -\\dfrac{2x}{2z} = -\\dfrac{x}{z}$ ($z \\neq 0$)."
                ],
                "answer": "$\\dfrac{\\partial z}{\\partial x} = -\\dfrac{x}{z}$",
                "lesson": "음함수 정리를 사용하면 $z$를 $x, y$의 명시적 함수로 풀지 않아도 편미분을 구할 수 있습니다. 기하학적으로 구면 위의 접평면 기울기입니다."
            }
        ],
        "problems": [
            {
                "id": "22-1",
                "type": "text",
                "difficulty": 1,
                "question": "$f(x,y) = x^2 y$ 의 $\\dfrac{\\partial f}{\\partial x}$ 는? (식, 예: 2xy)",
                "answer": "2xy",
                "hints": [
                    "$y$ 를 상수로 두세요.",
                    "$x^2$ 의 미분은 $2x$."
                ],
                "explanation": "$\\dfrac{\\partial f}{\\partial x} = 2x \\cdot y = 2xy$.",
                "wrongAnalysis": "$x^2$ 를 $2$ 로 미분하거나, $y$ 를 함께 미분하는 실수가 있습니다."
            },
            {
                "id": "22-2",
                "type": "text",
                "difficulty": 2,
                "question": "$f(x,y) = \\sin(xy)$ 의 $\\dfrac{\\partial f}{\\partial y}$ 는? (식)",
                "answer": "xcos(xy)",
                "hints": [
                    "바깥 함수 $\\sin u,\\ u = xy$.",
                    "$u$ 의 $y$ 미분은 $x$.",
                    "연쇄법칙 사용."
                ],
                "explanation": "$\\cos(xy)\\cdot x = x\\cos(xy)$.",
                "wrongAnalysis": "$y$ 를 곱하는 실수가 흔합니다. $\\dfrac{\\partial}{\\partial y}$ 일 때 $u$ 의 $y$ 미분은 $x$ 입니다."
            },
            {
                "id": "22-3",
                "type": "number",
                "difficulty": 3,
                "question": "$f(x,y) = e^{xy}$ 의 $(1,2)$ 에서의 $\\dfrac{\\partial f}{\\partial x}$ 의 값은? (소수 4째자리)",
                "answer": "14.7781",
                "hints": [
                    "$\\dfrac{\\partial f}{\\partial x} = y\\,e^{xy}$.",
                    "$x=1,\\ y=2$ 대입.",
                    "$2 e^2 \\approx ?$"
                ],
                "explanation": "$f_x = y\\,e^{xy}$. $(1,2)$ 에서 $2 e^2 \\approx 2\\cdot 7.389 = 14.7781$.",
                "wrongAnalysis": "지수 안의 $x$ 미분을 빼먹고 $y$ 만 답하는 실수가 흔합니다."
            },
            {
                "id": "22-4",
                "type": "number",
                "difficulty": 1,
                "question": "$f(x,y) = 3x + 5y^2$ 의 $\\dfrac{\\partial f}{\\partial x}$ 의 값은? (상수로 답하시오)",
                "answer": "3",
                "hints": [
                    "$y$ 를 상수로 두고 $x$ 로 미분하세요.",
                    "$3x$ 의 $x$ 미분은 $3$, $5y^2$ 은 $x$ 와 무관하므로 $0$."
                ],
                "explanation": "$\\dfrac{\\partial f}{\\partial x} = 3 + 0 = 3$. $5y^2$ 항은 $x$ 에 대한 상수이므로 미분하면 $0$.",
                "wrongAnalysis": "$5y^2$ 도 함께 미분하여 $3 + 10y$ 라고 답하는 실수가 있습니다. 편미분에서 다른 변수는 상수입니다."
            },
            {
                "id": "22-5",
                "type": "text",
                "difficulty": 2,
                "question": "$f(x,y) = x^3 y^2$ 의 $\\dfrac{\\partial f}{\\partial y}$ 는? (식으로 답하시오, 예: 2x^3y)",
                "answer": "2x^3y",
                "hints": [
                    "$x$ 를 상수로 두고 $y$ 로 미분하세요.",
                    "$x^3 \\cdot \\dfrac{d}{dy}(y^2) = x^3 \\cdot 2y$."
                ],
                "explanation": "$\\dfrac{\\partial f}{\\partial y} = x^3 \\cdot 2y = 2x^3y$.",
                "wrongAnalysis": "$x$ 도 함께 미분하여 $3x^2 \\cdot 2y = 6x^2y$ 라고 답하는 실수가 있습니다. 편미분에서 $x$ 는 상수입니다."
            }
        ],
        "summary": {
            "keyPoints": [
                "편미분 $=$ 한 변수만 미분",
                "다른 변수는 상수",
                "표기 $\\partial,\\ f_x,\\ f_y$ 익숙해질 것"
            ],
            "formulas": [
                "\\frac{\\partial f}{\\partial x} = \\lim_{h \\to 0} \\frac{f(x+h,y) - f(x,y)}{h}"
            ],
            "commonMistakes": [
                "다른 변수를 함께 미분하는 실수",
                "합성함수에서 연쇄법칙 누락"
            ],
            "nextConnection": "$x,\\ y$ 방향 모두의 변화율을 모은 벡터가 곧 다음 단원의 그래디언트입니다."
        }
    },
    {
        "id": 23,
        "title": "그래디언트",
        "category": "다변수 미적분",
        "level": "고급",
        "question": "모든 방향의 변화율을 한꺼번에 표현하는 객체는 무엇일까?",
        "concept": {
            "intro": ":::definition[개념 정의]\n그래디언트 $\\nabla f = (f_x, f_y)$ 는 편미분을 모아 만든 벡터입니다.\n:::\n\n:::note[참고]\n중요한 성질: $\\nabla f$ 는 함숫값이 가장 빠르게 증가하는 방향을 가리키고, 그 크기는 그 방향의 변화율입니다. 등고선과는 항상 수직.\n:::",
            "intuition": ":::note[직관]\n안개 속 산속에 있다면 어느 방향으로 가야 가장 빠르게 산을 오를 수 있을까요? 발 밑의 그래디언트 벡터를 따라가면 됩니다.\n:::",
            "formula": "\\nabla f = \\left(\\frac{\\partial f}{\\partial x},\\ \\frac{\\partial f}{\\partial y}\\right)\nD_{\\mathbf{u}} f = \\nabla f \\cdot \\mathbf{u},\\ |\\mathbf{u}|=1",
            "summary": ":::note[핵심 요약]\n• 편미분을 모은 벡터\n• 가장 빠른 증가 방향\n• 등고선과 수직\n:::"
        },
        "examples": [
            {
                "title": "그래디언트 계산",
                "problem": "$f(x,y) = x^2 + y^2$ 의 $(1,2)$ 에서의 그래디언트를 구하시오.",
                "steps": [
                    "$f_x = 2x,\\ f_y = 2y$.",
                    "$(1,2) \\;\\Rightarrow\\; (2, 4)$."
                ],
                "answer": "$\\nabla f(1,2) = (2, 4)$",
                "lesson": "그래디언트의 크기 $\\sqrt{2^2+4^2} = 2\\sqrt{5}$ 가 가장 빠른 증가율, 방향이 가장 빠른 증가 방향."
            },
            {
                "title": "[기본] 그래디언트 벡터 계산",
                "problem": "$f(x, y) = 3x + 5y^2$ 의 그래디언트를 구하시오.",
                "steps": [
                    "$f_x = 3$.",
                    "$f_y = 10y$.",
                    "$\\nabla f = (3, 10y)$."
                ],
                "answer": "$\\nabla f = (3, 10y)$",
                "lesson": "그래디언트는 편미분을 모아 만든 벡터입니다. 일차항의 편미분은 상수, 이차항의 편미분은 일차입니다."
            },
            {
                "title": "[응용] 방향도함수 계산",
                "problem": "$f(x, y) = x^2 y$ 의 $(1, 2)$ 에서 $\\mathbf{u} = \\left(\\dfrac{3}{5}, \\dfrac{4}{5}\\right)$ 방향의 방향도함수를 구하시오.",
                "steps": [
                    "$\\nabla f = (2xy, x^2)$. $(1,2)$ 에서 $\\nabla f(1,2) = (4, 1)$.",
                    "$D_{\\mathbf{u}} f = \\nabla f \\cdot \\mathbf{u} = 4 \\cdot \\dfrac{3}{5} + 1 \\cdot \\dfrac{4}{5} = \\dfrac{12 + 4}{5} = \\dfrac{16}{5}$.",
                    "$\\|\\mathbf{u}\\| = \\sqrt{\\dfrac{9}{25} + \\dfrac{16}{25}} = 1$. ✓ (단위벡터)"
                ],
                "answer": "$D_{\\mathbf{u}} f = \\dfrac{16}{5}$",
                "lesson": "방향도함수는 그래디언트와 단위 방향벡터의 내적입니다. 방향벡터가 단위벡터인지 반드시 확인하세요."
            },
            {
                "title": "[응용] 가장 빠른 감소 방향",
                "problem": "$f(x, y) = x^2 + 4y^2$ 의 $(1, 1)$ 에서 함숫값이 가장 빠르게 감소하는 방향을 구하시오.",
                "steps": [
                    "$\\nabla f = (2x, 8y)$. $(1,1)$ 에서 $\\nabla f(1,1) = (2, 8)$.",
                    "가장 빠른 감소 방향 $= -\\nabla f = (-2, -8)$.",
                    "단위벡터: $\\dfrac{(-2, -8)}{\\sqrt{4 + 64}} = \\dfrac{(-2, -8)}{\\sqrt{68}} = \\left(-\\dfrac{1}{\\sqrt{17}}, -\\dfrac{4}{\\sqrt{17}}\\right)$."
                ],
                "answer": "감소 방향의 단위벡터: $\\left(-\\dfrac{1}{\\sqrt{17}}, -\\dfrac{4}{\\sqrt{17}}\\right)$",
                "lesson": "가장 빠른 감소 방향은 $-\\nabla f$입니다. 이것이 경사 하강법(gradient descent)의 핵심 원리입니다."
            },
            {
                "title": "[심화] 등고선과 그래디언트의 수직성 확인",
                "problem": "$f(x, y) = xy$ 의 등고선 $f = 2$ 위의 점 $(2, 1)$ 에서 그래디언트가 등고선에 수직임을 확인하시오.",
                "steps": [
                    "$\\nabla f = (y, x)$. $(2,1)$ 에서 $\\nabla f(2,1) = (1, 2)$.",
                    "등고선 $xy = 2$, 즉 $y = \\dfrac{2}{x}$. 접선 기울기: $\\dfrac{dy}{dx} = -\\dfrac{2}{x^2}$. $(2,1)$에서 기울기 $= -\\dfrac{1}{2}$.",
                    "접선 방향벡터: $(1, -\\dfrac{1}{2})$ (또는 $(2, -1)$).",
                    "$\\nabla f \\cdot (2, -1) = 1 \\cdot 2 + 2 \\cdot (-1) = 0$. ✓ 수직."
                ],
                "answer": "$\\nabla f(2,1) = (1, 2)$이고 등고선의 접선 $(2, -1)$과 내적이 $0$이므로 수직",
                "lesson": "그래디언트는 항상 등고선에 수직입니다. 이 성질은 라그랑주 승수법의 기초가 됩니다."
            }
        ],
        "problems": [
            {
                "id": "23-1",
                "type": "text",
                "difficulty": 1,
                "question": "$f(x,y) = 3x + 4y$ 의 그래디언트를 $(a,b)$ 형태로 적으시오. (예: (1,2))",
                "answer": "(3,4)",
                "hints": [
                    "$f_x,\\ f_y$ 를 각각 구하세요."
                ],
                "explanation": "$f_x = 3,\\ f_y = 4 \\;\\Rightarrow\\; (3,4)$. 이 함수의 그래디언트는 점에 무관하게 상수.",
                "wrongAnalysis": "$(3x, 4y)$ 처럼 변수가 남는 실수가 있는데, 일차함수의 그래디언트는 상수 벡터입니다."
            },
            {
                "id": "23-2",
                "type": "number",
                "difficulty": 2,
                "question": "$f(x,y) = xy$ 의 $(2,3)$ 에서 그래디언트의 크기는?",
                "answer": "3.6056",
                "hints": [
                    "$f_x = y,\\ f_y = x$.",
                    "$(2,3) \\;\\Rightarrow\\; (3, 2)$.",
                    "크기 $\\sqrt{9+4}$."
                ],
                "explanation": "$\\sqrt{13} \\approx 3.6056$.",
                "wrongAnalysis": "$f_x$ 와 $f_y$ 를 헷갈리지 마세요. $xy$ 의 $x$ 미분은 $y$ 입니다."
            },
            {
                "id": "23-3",
                "type": "number",
                "difficulty": 3,
                "question": "$f(x,y) = x^2 + y^2$ 의 $(1,1)$ 에서 방향 $(1,0)$ 으로의 방향도함수는?",
                "answer": "2",
                "hints": [
                    "$\\nabla f(1,1) = (2,2)$.",
                    "$(1,0)$ 은 이미 단위벡터.",
                    "내적 계산."
                ],
                "explanation": "$D_{\\mathbf{u}} f = \\nabla f \\cdot \\mathbf{u} = (2,2)\\cdot(1,0) = 2$.",
                "wrongAnalysis": "단위벡터가 아닌 방향벡터를 그대로 사용하면 안 됩니다. 항상 단위벡터로 정규화하세요."
            },
            {
                "id": "23-4",
                "type": "text",
                "difficulty": 1,
                "question": "$f(x,y) = x^2 + y^2$ 의 $(3, 4)$ 에서의 그래디언트를 $(a,b)$ 형태로 적으시오.",
                "answer": "(6,8)",
                "hints": [
                    "$f_x = 2x$, $f_y = 2y$.",
                    "$(3, 4)$ 대입: $(2 \\cdot 3, 2 \\cdot 4)$."
                ],
                "explanation": "$\\nabla f = (2x, 2y)$. $(3,4)$ 에서 $(6, 8)$.",
                "wrongAnalysis": "$(3,4)$ 를 그대로 답하는 실수가 있습니다. 그래디언트는 편미분을 구한 뒤 점을 대입해야 합니다."
            },
            {
                "id": "23-5",
                "type": "choice",
                "difficulty": 2,
                "question": "$\\nabla f$ 와 등고선의 관계로 옳은 것은?",
                "choices": [
                    "$\\nabla f$ 는 등고선과 평행하다",
                    "$\\nabla f$ 는 등고선과 수직이다",
                    "$\\nabla f$ 는 등고선 위에 놓인다",
                    "관계가 없다"
                ],
                "answer": "$\\nabla f$ 는 등고선과 수직이다",
                "hints": [
                    "그래디언트는 함숫값이 가장 빠르게 증가하는 방향입니다.",
                    "등고선은 함숫값이 일정한 곡선입니다."
                ],
                "explanation": "그래디언트는 함숫값의 증가 방향이므로 등고선(같은 값)과 항상 수직입니다. 등고선을 따라가면 함숫값 변화가 $0$, 그래디언트 방향으로 가면 최대 변화.",
                "wrongAnalysis": "그래디언트가 등고선과 평행하다고 착각하면 방향도함수의 의미를 잘못 이해한 것입니다."
            }
        ],
        "summary": {
            "keyPoints": [
                "$\\nabla f$ 는 편미분 벡터",
                "가장 빠른 증가 방향",
                "방향도함수 $= \\nabla f \\cdot \\mathbf{u}$"
            ],
            "formulas": [
                "\\nabla f = (f_x, f_y)",
                "D_{\\mathbf{u}} f = \\nabla f \\cdot \\mathbf{u},\\ |\\mathbf{u}|=1"
            ],
            "commonMistakes": [
                "단위벡터로 정규화하지 않는 실수",
                "그래디언트와 등고선의 평행/수직 혼동"
            ],
            "nextConnection": "이제 평면이나 공간 위에서 적분을 합니다. 다음 단원은 중적분입니다."
        }
    },
    {
        "id": 24,
        "title": "중적분",
        "category": "다변수 미적분",
        "level": "고급",
        "question": "평면이나 공간 위에서의 적분은 어떻게 정의되고 계산할까?",
        "concept": {
            "intro": ":::definition[개념 정의]\n이중적분 $\\displaystyle\\iint_R f(x,y)\\,dA$ 는 영역 $R$ 위에서 함수 $f$ 를 적분한 것이며, 도형의 부피·면적·평균값을 의미할 수 있습니다.\n:::\n\n:::note[참고]\n실제 계산은 반복 적분(iterated integral)으로 두 번의 $1$변수 적분을 합니다. 영역이 직사각형이면 푸비니 정리에 의해 순서를 바꿔도 됩니다.\n:::",
            "intuition": ":::note[직관]\n전망대 아래의 도시를 격자로 나누고 각 격자의 인구를 더해 도시 전체 인구를 구하는 것과 같습니다. 격자가 잘게 잘릴수록 정확해집니다.\n:::",
            "formula": "\\iint_R f\\,dA = \\int_a^b \\int_c^d f(x,y)\\,dy\\,dx\n\\text{극좌표:}\\ dA = r\\,dr\\,d\\theta",
            "summary": ":::note[핵심 요약]\n• 두 번의 $1$변수 적분\n• 직사각형은 푸비니로 순서 자유\n• 극좌표 변환 시 $r$ 곱하기\n:::"
        },
        "examples": [
            {
                "title": "직사각형 위 이중적분",
                "problem": "$R = [0,1] \\times [0,2]$ 위에서 $\\displaystyle\\iint xy\\,dA$ 를 구하시오.",
                "steps": [
                    "$\\displaystyle\\int_0^1 \\int_0^2 xy\\,dy\\,dx$.",
                    "안쪽: $\\displaystyle\\int_0^2 xy\\,dy = 2x$.",
                    "바깥: $\\displaystyle\\int_0^1 2x\\,dx = 1$."
                ],
                "answer": "$1$",
                "lesson": "직사각형 영역에선 안쪽·바깥쪽 어느 변수로 먼저 적분해도 결과는 같습니다."
            },
            {
                "title": "[기본] 직사각형 위의 상수 함수 적분",
                "problem": "$R = [0, 3] \\times [0, 2]$ 위에서 $\\displaystyle\\iint_R 2\\,dA$ 를 구하시오.",
                "steps": [
                    "$\\displaystyle\\iint_R 2\\,dA = 2 \\times (\\text{영역의 넓이})$.",
                    "넓이 $= 3 \\times 2 = 6$.",
                    "$\\displaystyle\\iint_R 2\\,dA = 2 \\times 6 = 12$."
                ],
                "answer": "$12$",
                "lesson": "상수의 이중적분은 상수 $\\times$ 영역의 넓이입니다. 직사각형 넓이는 가로 $\\times$ 세로입니다."
            },
            {
                "title": "[응용] 삼각형 영역 위의 이중적분",
                "problem": "$0 \\leq x \\leq 1,\\ 0 \\leq y \\leq x$ 인 삼각형 위에서 $\\displaystyle\\iint (x + y)\\,dA$ 를 구하시오.",
                "steps": [
                    "$\\displaystyle\\int_0^1 \\int_0^x (x + y)\\,dy\\,dx$.",
                    "안쪽: $\\displaystyle\\int_0^x (x + y)\\,dy = \\left[xy + \\dfrac{y^2}{2}\\right]_0^x = x^2 + \\dfrac{x^2}{2} = \\dfrac{3x^2}{2}$.",
                    "바깥: $\\displaystyle\\int_0^1 \\dfrac{3x^2}{2}\\,dx = \\dfrac{3}{2} \\cdot \\dfrac{1}{3} = \\dfrac{1}{2}$."
                ],
                "answer": "$\\dfrac{1}{2}$",
                "lesson": "삼각형 영역에서는 $y$의 상한이 $x$에 의존하므로 적분 순서와 한계를 정확히 설정해야 합니다."
            },
            {
                "title": "[응용] 적분 순서 교환",
                "problem": "$\\displaystyle\\int_0^1 \\int_x^1 e^{y^2}\\,dy\\,dx$ 의 적분 순서를 바꿔 계산하시오.",
                "steps": [
                    "원래 영역: $0 \\leq x \\leq 1$, $x \\leq y \\leq 1$. 즉 $0 \\leq y \\leq 1$, $0 \\leq x \\leq y$.",
                    "순서 교환: $\\displaystyle\\int_0^1 \\int_0^y e^{y^2}\\,dx\\,dy$.",
                    "안쪽: $\\displaystyle\\int_0^y e^{y^2}\\,dx = y \\cdot e^{y^2}$.",
                    "바깥: $\\displaystyle\\int_0^1 y e^{y^2}\\,dy = \\dfrac{1}{2}[e^{y^2}]_0^1 = \\dfrac{e - 1}{2}$."
                ],
                "answer": "$\\dfrac{e - 1}{2}$",
                "lesson": "적분 순서를 바꾸면 계산이 가능해지는 경우가 많습니다. $e^{y^2}$은 부정적분이 없지만, 순서를 바꾸면 $ye^{y^2}$이 되어 치환 적분이 가능합니다."
            },
            {
                "title": "[심화] 극좌표 변환을 이용한 이중적분",
                "problem": "단위원 $x^2 + y^2 \\leq 1$ 위에서 $\\displaystyle\\iint (x^2 + y^2)\\,dA$ 를 구하시오.",
                "steps": [
                    "극좌표: $x^2 + y^2 = r^2$, $dA = r\\,dr\\,d\\theta$.",
                    "$\\displaystyle\\int_0^{2\\pi} \\int_0^1 r^2 \\cdot r\\,dr\\,d\\theta = \\int_0^{2\\pi} \\int_0^1 r^3\\,dr\\,d\\theta$.",
                    "안쪽: $\\displaystyle\\int_0^1 r^3\\,dr = \\dfrac{1}{4}$.",
                    "바깥: $\\displaystyle\\int_0^{2\\pi} \\dfrac{1}{4}\\,d\\theta = \\dfrac{\\pi}{2}$."
                ],
                "answer": "$\\dfrac{\\pi}{2}$",
                "lesson": "원형 대칭인 영역과 피적분함수에서는 극좌표가 가장 효과적입니다. $dA = r\\,dr\\,d\\theta$에서 $r$을 곱하는 것을 잊지 마세요."
            }
        ],
        "problems": [
            {
                "id": "24-1",
                "type": "number",
                "difficulty": 2,
                "question": "$\\displaystyle\\int_0^1 \\int_0^1 (x + y)\\,dy\\,dx$ 의 값은?",
                "answer": "1",
                "hints": [
                    "안쪽 적분: $\\displaystyle\\int_0^1 (x+y)\\,dy$.",
                    "$x + \\dfrac{1}{2}$.",
                    "바깥쪽: $\\displaystyle\\int_0^1 \\left(x + \\dfrac{1}{2}\\right)\\,dx$."
                ],
                "explanation": "$\\displaystyle\\int_0^1 \\left(x + \\dfrac{1}{2}\\right)\\,dx = \\dfrac{1}{2} + \\dfrac{1}{2} = 1$.",
                "wrongAnalysis": "안쪽 적분에서 $y$ 가 아닌 $x$ 를 적분 변수로 잘못 보는 실수가 있습니다."
            },
            {
                "id": "24-2",
                "type": "number",
                "difficulty": 3,
                "question": "$R: 0 \\leq x \\leq 1,\\ 0 \\leq y \\leq x$ 위에서 $\\displaystyle\\iint y\\,dA$ 의 값은?",
                "answer": "0.1667",
                "hints": [
                    "삼각형 영역이므로 $y$ 의 범위가 $x$ 에 의존.",
                    "$\\displaystyle\\int_0^1 \\int_0^x y\\,dy\\,dx$.",
                    "안쪽 적분 $= \\dfrac{x^2}{2}$."
                ],
                "explanation": "$\\displaystyle\\int_0^1 \\dfrac{x^2}{2}\\,dx = \\dfrac{1}{6} \\approx 0.1667$.",
                "wrongAnalysis": "비직사각형 영역에서 적분 한계를 $x$ 와 $y$ 모두 상수로 두는 실수가 매우 흔합니다."
            },
            {
                "id": "24-3",
                "type": "number",
                "difficulty": 3,
                "question": "단위원(반지름 $1$) 위에서 $\\displaystyle\\iint 1\\,dA$ 의 값은? ($\\pi$ 포함, 소수)",
                "answer": "3.1416",
                "hints": [
                    "$1$ 의 적분은 영역 면적.",
                    "단위원 면적은?"
                ],
                "explanation": "단위원의 면적 $= \\pi \\approx 3.1416$.",
                "wrongAnalysis": "면적 계산을 적분으로 너무 복잡하게 시도하는 실수가 있습니다. $1$ 의 적분은 영역의 부피/면적입니다."
            },
            {
                "id": "24-4",
                "type": "number",
                "difficulty": 1,
                "question": "$\\displaystyle\\int_0^2 \\int_0^3 1\\,dx\\,dy$ 의 값은?",
                "answer": "6",
                "hints": [
                    "$1$의 적분은 영역의 면적입니다.",
                    "직사각형 $[0,3] \\times [0,2]$ 의 면적: $3 \\times 2$."
                ],
                "explanation": "$\\displaystyle\\int_0^2 \\int_0^3 1\\,dx\\,dy = \\int_0^2 3\\,dy = 6$. 이는 $3 \\times 2$ 직사각형의 면적.",
                "wrongAnalysis": "적분 순서를 혼동하여 $3 + 2 = 5$ 라고 답하는 실수가 있습니다. 면적은 곱이지 합이 아닙니다."
            },
            {
                "id": "24-5",
                "type": "number",
                "difficulty": 1,
                "question": "$\\displaystyle\\int_0^1 \\int_0^1 xy\\,dx\\,dy$ 의 값은? (분수로 답, 예: 1/4)",
                "answer": "1/4",
                "hints": [
                    "안쪽 적분: $\\displaystyle\\int_0^1 xy\\,dx = \\frac{y}{2}$.",
                    "바깥쪽: $\\displaystyle\\int_0^1 \\frac{y}{2}\\,dy = \\frac{1}{4}$."
                ],
                "explanation": "$\\displaystyle\\int_0^1 xy\\,dx = \\frac{x^2 y}{2}\\Big|_0^1 = \\frac{y}{2}$. $\\displaystyle\\int_0^1 \\frac{y}{2}\\,dy = \\frac{y^2}{4}\\Big|_0^1 = \\frac{1}{4}$.",
                "wrongAnalysis": "안쪽 적분에서 $y$ 도 적분 변수로 취급하는 실수가 있습니다. 안쪽에서는 $x$ 만 적분합니다."
            }
        ],
        "summary": {
            "keyPoints": [
                "이중적분은 $1$변수 적분 두 번",
                "푸비니 정리 (직사각형에서 순서 무관)",
                "극좌표 변환 시 Jacobian $r$"
            ],
            "formulas": [
                "\\iint_R f\\,dA",
                "\\text{극좌표}\\ dA = r\\,dr\\,d\\theta"
            ],
            "commonMistakes": [
                "비직사각형 영역의 한계 처리 실수",
                "극좌표 변환 시 $r$ 누락"
            ],
            "nextConnection": "이제 평면이나 공간에 '방향이 있는 양' 이 분포한 상황을 다루는 벡터장 입문으로 넘어갑니다."
        }
    },
    {
        "id": 25,
        "title": "벡터장 입문",
        "category": "다변수 미적분",
        "level": "고급",
        "question": "공간의 각 점마다 '벡터'를 대응시킨다는 건 어떤 의미일까?",
        "concept": {
            "intro": ":::definition[개념 정의]\n벡터장은 공간의 각 점 $(x,y)$ 에 벡터 $\\mathbf{F}(x,y)$ 를 대응시키는 함수입니다. 흐르는 물의 속도장, 바람장, 전기·자기장 등이 대표 예시입니다.\n:::\n\n:::note[참고]\n주요 연산: 발산($\\mathrm{div}$)은 흐름이 '솟아나는 정도', 회전($\\mathrm{curl}$)은 '소용돌이의 정도'를 측정합니다.\n:::",
            "intuition": ":::note[직관]\n지도의 각 지점에 작은 화살표가 그려져 있다고 상상해 보세요. 그 화살표들이 모이면 '바람의 지도'가 됩니다.\n:::",
            "formula": "\\mathbf{F}(x,y) = (P(x,y), Q(x,y))\n\\mathrm{div}\\,\\mathbf{F} = \\frac{\\partial P}{\\partial x} + \\frac{\\partial Q}{\\partial y}\n\\mathrm{curl}\\,\\mathbf{F} = \\frac{\\partial Q}{\\partial x} - \\frac{\\partial P}{\\partial y}\\ (\\text{2D 스칼라 형태})",
            "summary": ":::note[핵심 요약]\n• 벡터장 $=$ 점 $\\to$ 벡터\n• $\\mathrm{div}$: 솟음 정도\n• $\\mathrm{curl}$: 회전 정도\n:::"
        },
        "examples": [
            {
                "title": "발산과 회전 계산",
                "problem": "$\\mathbf{F}(x,y) = (x, y)$ 의 $\\mathrm{div}$ 와 $\\mathrm{curl}$ 을 구하시오.",
                "steps": [
                    "$P = x,\\ Q = y$.",
                    "$\\mathrm{div}\\,\\mathbf{F} = \\dfrac{\\partial x}{\\partial x} + \\dfrac{\\partial y}{\\partial y} = 1 + 1 = 2$.",
                    "$\\mathrm{curl}\\,\\mathbf{F} = \\dfrac{\\partial y}{\\partial x} - \\dfrac{\\partial x}{\\partial y} = 0$."
                ],
                "answer": "$\\mathrm{div}\\,\\mathbf{F} = 2,\\ \\mathrm{curl}\\,\\mathbf{F} = 0$",
                "lesson": "이 벡터장은 사방으로 퍼져나가는 '발산형' 흐름이며, 회전은 없습니다."
            },
            {
                "title": "[기본] 벡터장의 발산 계산",
                "problem": "$\\mathbf{F}(x, y) = (2x + y,\\ 3y)$ 의 발산을 구하시오.",
                "steps": [
                    "$P = 2x + y$, $Q = 3y$.",
                    "$\\dfrac{\\partial P}{\\partial x} = 2$.",
                    "$\\dfrac{\\partial Q}{\\partial y} = 3$.",
                    "$\\mathrm{div}\\,\\mathbf{F} = 2 + 3 = 5$."
                ],
                "answer": "$\\mathrm{div}\\,\\mathbf{F} = 5$",
                "lesson": "발산은 각 성분을 해당 변수로 편미분한 것의 합입니다. 양수 발산은 '흐름이 솟아나는' 것을 의미합니다."
            },
            {
                "title": "[응용] 회전장의 curl 계산",
                "problem": "$\\mathbf{F}(x, y) = (-2y, 2x)$ 의 $\\mathrm{curl}$ 을 구하시오.",
                "steps": [
                    "$P = -2y$, $Q = 2x$.",
                    "$\\dfrac{\\partial Q}{\\partial x} = 2$.",
                    "$\\dfrac{\\partial P}{\\partial y} = -2$.",
                    "$\\mathrm{curl}\\,\\mathbf{F} = 2 - (-2) = 4$."
                ],
                "answer": "$\\mathrm{curl}\\,\\mathbf{F} = 4$",
                "lesson": "curl이 양수 상수이면 모든 점에서 동일한 세기로 반시계 방향 회전이 일어나는 벡터장입니다."
            },
            {
                "title": "[응용] 그래디언트 벡터장의 성질",
                "problem": "$f(x, y) = x^2 + y^2$ 일 때 $\\mathbf{F} = \\nabla f$ 의 $\\mathrm{curl}$ 을 구하시오.",
                "steps": [
                    "$\\nabla f = (2x, 2y)$. $P = 2x$, $Q = 2y$.",
                    "$\\dfrac{\\partial Q}{\\partial x} = 0$, $\\dfrac{\\partial P}{\\partial y} = 0$.",
                    "$\\mathrm{curl}\\,\\mathbf{F} = 0 - 0 = 0$."
                ],
                "answer": "$\\mathrm{curl}\\,\\mathbf{F} = 0$",
                "lesson": "그래디언트 벡터장의 curl은 항상 $0$입니다. 역으로, curl이 $0$이고 정의역이 단순연결이면 그래디언트장(보존장)입니다."
            },
            {
                "title": "[심화] 발산과 curl이 모두 $0$인 벡터장",
                "problem": "$\\mathbf{F}(x, y) = (y, x)$ 의 $\\mathrm{div}$와 $\\mathrm{curl}$을 구하고, 물리적 의미를 설명하시오.",
                "steps": [
                    "$P = y$, $Q = x$.",
                    "$\\mathrm{div}\\,\\mathbf{F} = \\dfrac{\\partial y}{\\partial x} + \\dfrac{\\partial x}{\\partial y} = 0 + 0 = 0$.",
                    "$\\mathrm{curl}\\,\\mathbf{F} = \\dfrac{\\partial x}{\\partial x} - \\dfrac{\\partial y}{\\partial y} = 1 - 1 = 0$.",
                    "보존장 판별: $\\dfrac{\\partial P}{\\partial y} = 1 = \\dfrac{\\partial Q}{\\partial x}$. ✓",
                    "퍼텐셜: $f(x,y) = xy$. $\\nabla(xy) = (y, x) = \\mathbf{F}$. ✓"
                ],
                "answer": "$\\mathrm{div} = 0$, $\\mathrm{curl} = 0$, 보존장 ($f = xy$)",
                "lesson": "$\\mathrm{div} = 0$이면 비압축성 흐름, $\\mathrm{curl} = 0$이면 비회전 흐름(보존장)입니다. 두 조건을 동시에 만족하면 조화 함수와 관련됩니다."
            }
        ],
        "problems": [
            {
                "id": "25-1",
                "type": "number",
                "difficulty": 2,
                "question": "$\\mathbf{F} = (x^2, y^2)$ 의 $\\mathrm{div}\\,\\mathbf{F}$ 를 $(1,1)$ 에서 구하시오.",
                "answer": "4",
                "hints": [
                    "$\\mathrm{div} = \\dfrac{\\partial P}{\\partial x} + \\dfrac{\\partial Q}{\\partial y}$.",
                    "$P = x^2 \\Rightarrow 2x.\\ Q = y^2 \\Rightarrow 2y$."
                ],
                "explanation": "$2x + 2y,\\ (1,1) \\Rightarrow 4$.",
                "wrongAnalysis": "편미분 시 다른 변수를 함께 미분하는 실수가 흔합니다."
            },
            {
                "id": "25-2",
                "type": "number",
                "difficulty": 3,
                "question": "$\\mathbf{F} = (-y, x)$ 의 $\\mathrm{curl}\\,\\mathbf{F}$ 값은? (스칼라)",
                "answer": "2",
                "hints": [
                    "$\\mathrm{curl}(2\\text{D}) = \\dfrac{\\partial Q}{\\partial x} - \\dfrac{\\partial P}{\\partial y}$.",
                    "$Q = x \\Rightarrow \\dfrac{\\partial Q}{\\partial x} = 1$.",
                    "$P = -y \\Rightarrow \\dfrac{\\partial P}{\\partial y} = -1$."
                ],
                "explanation": "$1 - (-1) = 2$. 이 벡터장은 원점 중심의 회전.",
                "wrongAnalysis": "부호 처리에서 $\\dfrac{\\partial P}{\\partial y} = -1$ 의 $-$ 부호를 놓치는 실수가 흔합니다."
            },
            {
                "id": "25-3",
                "type": "choice",
                "difficulty": 3,
                "question": "발산이 $0$ 인 벡터장의 물리적 해석은?",
                "choices": [
                    "솟아나는 점이 없는 비압축성 흐름",
                    "회전이 없는 흐름",
                    "퍼져가는 흐름",
                    "항상 $0$ 인 흐름"
                ],
                "answer": "솟아나는 점이 없는 비압축성 흐름",
                "hints": [
                    "$\\mathrm{div} = 0 \\Rightarrow$ 국소적인 source나 sink가 없습니다.",
                    "보존장(conservative field)은 보통 $\\mathrm{curl}=0$과 관련됩니다."
                ],
                "explanation": "$\\mathrm{div}\\,\\mathbf{F} = 0$ 은 임의의 점에서 흐름이 새로 생기거나 사라지지 않는다는 뜻입니다. 유체역학에서는 비압축성 흐름의 조건으로 해석합니다.",
                "wrongAnalysis": "$\\mathrm{div}$ 와 $\\mathrm{curl}$ 의 의미를 혼동하면 안 됩니다. $\\mathrm{div}=0$은 무발산/비압축성, $\\mathrm{curl}=0$은 회전 없음 또는 보존장 조건과 관련됩니다."
            },
            {
                "id": "25-4",
                "type": "number",
                "difficulty": 1,
                "question": "$\\mathbf{F} = (3x, 2y)$ 의 $\\mathrm{div}\\,\\mathbf{F}$ 의 값은?",
                "answer": "5",
                "hints": [
                    "$\\mathrm{div} = \\dfrac{\\partial P}{\\partial x} + \\dfrac{\\partial Q}{\\partial y}$.",
                    "$\\dfrac{\\partial (3x)}{\\partial x} = 3$, $\\dfrac{\\partial (2y)}{\\partial y} = 2$."
                ],
                "explanation": "$\\mathrm{div}\\,\\mathbf{F} = 3 + 2 = 5$. 발산이 양의 상수이므로 모든 점에서 균일하게 퍼져나가는 흐름입니다.",
                "wrongAnalysis": "$3 \\times 2 = 6$ 처럼 성분을 곱하는 실수가 있습니다. 발산은 편미분의 합입니다."
            },
            {
                "id": "25-5",
                "type": "number",
                "difficulty": 1,
                "question": "$\\mathbf{F} = (y, -x)$ 의 $\\mathrm{div}\\,\\mathbf{F}$ 의 값은?",
                "answer": "0",
                "hints": [
                    "$P = y$ 이므로 $\\dfrac{\\partial P}{\\partial x} = 0$.",
                    "$Q = -x$ 이므로 $\\dfrac{\\partial Q}{\\partial y} = 0$."
                ],
                "explanation": "$\\mathrm{div}\\,\\mathbf{F} = \\dfrac{\\partial y}{\\partial x} + \\dfrac{\\partial (-x)}{\\partial y} = 0 + 0 = 0$. 이 벡터장은 비압축성(발산 $= 0$)입니다.",
                "wrongAnalysis": "$\\dfrac{\\partial y}{\\partial x}$ 를 $1$ 로 계산하는 실수가 있습니다. $x$ 에 대한 $y$ 의 편미분에서 $y$ 는 $x$ 와 독립이므로 $0$ 입니다."
            }
        ],
        "summary": {
            "keyPoints": [
                "벡터장 $=$ 각 점 $\\to$ 벡터",
                "$\\mathrm{div}$: 솟음, $\\mathrm{curl}$: 회전",
                "그래디언트 $\\nabla f$ 는 벡터장"
            ],
            "formulas": [
                "\\mathrm{div}\\,\\mathbf{F} = \\frac{\\partial P}{\\partial x} + \\frac{\\partial Q}{\\partial y}",
                "\\mathrm{curl}\\,\\mathbf{F} = \\frac{\\partial Q}{\\partial x} - \\frac{\\partial P}{\\partial y}\\ (\\text{2D})"
            ],
            "commonMistakes": [
                "$\\mathrm{div}$ 와 $\\mathrm{curl}$ 정의 혼동",
                "부호 실수"
            ],
            "nextConnection": "이제 '함수 자체를 모르고 그 변화율 관계만 아는' 가장 강력한 모델링 도구, 미분방정식 입문으로 들어갑니다."
        }
    },
    {
        "id": 26,
        "title": "선적분과 그린 정리",
        "category": "다변수와 편미분",
        "level": "고급",
        "question": "벡터장을 곡선을 따라 적분하면 무엇을 얻고, 이것은 이중적분과 어떤 관계가 있는가?",
        "concept": {
            "intro": ":::definition[개념 정의]\n이전 레슨에서 벡터장의 개념과 발산·회전 연산을 배웠습니다. 이제 자연스러운 질문이 떠오릅니다: 벡터장이 주어진 공간에서 입자가 곡선을 따라 이동할 때, 벡터장이 입자에 한 **일(work)**을 어떻게 계산할까요? 이것이 바로 **선적분(line integral)**입니다.\n:::\n\n:::note[참고]\n선적분은 두 가지로 나뉩니다. **스칼라 선적분** $\\int_C f\\,ds$ 는 스칼라 함수 $f$를 곡선 $C$를 따라 적분하는 것으로, 예를 들어 밀도가 변하는 철사의 총 질량을 구할 때 사용합니다. **벡터 선적분** $\\int_C \\mathbf{F} \\cdot d\\mathbf{r}$ 은 벡터장 $\\mathbf{F}$를 경로를 따라 적분하는 것으로, 힘이 한 일(work)을 나타냅니다. 곡선 위의 미소 변위 $d\\mathbf{r}$ 과 벡터장 $\\mathbf{F}$ 의 내적을 경로를 따라 합산하는 것입니다.\n:::\n\n:::note[참고]\n벡터 선적분에서 특별히 중요한 것은 **보존장(conservative field)**의 개념입니다. $\\mathbf{F} = \\nabla f$ 인 스칼라 퍼텐셜 $f$가 존재하면, 선적분은 경로에 무관하게 $f(B) - f(A)$ 로 결정됩니다. 이는 미적분학의 기본정리 $\\int_a^b f'(x)\\,dx = f(b) - f(a)$ 의 다변수 일반화입니다. 보존장인지 판별하는 조건은 $\\frac{\\partial P}{\\partial y} = \\frac{\\partial Q}{\\partial x}$ (단순연결 영역에서)입니다.\n:::\n\n:::note[참고]\n이 모든 것을 하나로 엮는 강력한 정리가 **그린 정리(Green's Theorem)**입니다. 닫힌 곡선 $C$ 를 따른 선적분 $\\oint_C (P\\,dx + Q\\,dy)$ 을 그 곡선이 둘러싸는 영역 $D$ 위의 이중적분 $\\iint_D \\left(\\frac{\\partial Q}{\\partial x} - \\frac{\\partial P}{\\partial y}\\right) dA$ 로 변환할 수 있습니다. 그린 정리는 '경계에서의 순환(circulation)'과 '내부의 회전(curl) 총합'이 같다는 깊은 관계를 보여주며, 복잡한 선적분을 이중적분으로, 또는 그 반대로 계산을 간소화하는 데 사용됩니다.\n:::",
            "intuition": ":::note[직관]\n바람이 부는 들판을 가로질러 걸어간다고 상상하세요. 선적분은 '바람이 나를 밀어준 총량(일)'입니다. 바람을 등에 받으면 양의 일, 맞바람이면 음의 일이 됩니다.\n\n그린 정리는 놀라운 사실을 말해줍니다: 울타리를 따라 한 바퀴 돌며 느낀 '바람의 순환'은, 울타리 안 전체에서 '바람이 얼마나 소용돌이치는지'를 합산한 것과 같습니다. 경계의 정보만으로 내부를 알 수 있고, 내부 정보만으로 경계를 알 수 있는 것입니다.\n:::",
            "formula": "\\text{벡터 선적분:}\\ \\int_C \\mathbf{F} \\cdot d\\mathbf{r} = \\int_a^b \\mathbf{F}(\\mathbf{r}(t)) \\cdot \\mathbf{r}'(t)\\,dt\n\\text{보존장:}\\ \\mathbf{F} = \\nabla f \\Rightarrow \\int_C \\mathbf{F} \\cdot d\\mathbf{r} = f(B) - f(A)\n\\text{보존장 조건:}\\ \\frac{\\partial P}{\\partial y} = \\frac{\\partial Q}{\\partial x}\n\\text{그린 정리:}\\ \\oint_C (P\\,dx + Q\\,dy) = \\iint_D \\left(\\frac{\\partial Q}{\\partial x} - \\frac{\\partial P}{\\partial y}\\right) dA",
            "summary": ":::note[핵심 요약]\n• 선적분 $\\int_C \\mathbf{F} \\cdot d\\mathbf{r}$: 벡터장이 경로를 따라 한 일\n• 보존장이면 $f(B) - f(A)$ — 경로 무관\n• 그린 정리: 닫힌 경로의 선적분 $=$ 내부의 이중적분\n• 그린 정리는 미적분학 기본정리의 2차원 확장\n:::"
        },
        "examples": [
            {
                "title": "그린 정리를 이용한 선적분 계산",
                "problem": "$\\oint_C (y^2\\,dx + x^2\\,dy)$ 를 구하시오. 단, $C$ 는 원점, $(1,0)$, $(0,1)$ 을 꼭짓점으로 하는 삼각형의 반시계 방향 경계이다.",
                "steps": [
                    "그린 정리를 적용한다: $P = y^2$, $Q = x^2$ 로 놓으면 $\\frac{\\partial Q}{\\partial x} = 2x$, $\\frac{\\partial P}{\\partial y} = 2y$.",
                    "$\\oint_C (y^2\\,dx + x^2\\,dy) = \\iint_D (2x - 2y)\\,dA$.",
                    "삼각형 $D$의 영역: $0 \\leq x \\leq 1$, $0 \\leq y \\leq 1-x$.",
                    "$\\iint_D (2x - 2y)\\,dA = \\int_0^1 \\int_0^{1-x} (2x - 2y)\\,dy\\,dx = \\int_0^1 \\left[2xy - y^2\\right]_0^{1-x}\\,dx$.",
                    "$= \\int_0^1 \\left[2x(1-x) - (1-x)^2\\right]\\,dx = \\int_0^1 (2x - 2x^2 - 1 + 2x - x^2)\\,dx = \\int_0^1 (4x - 3x^2 - 1)\\,dx$.",
                    "$= \\left[2x^2 - x^3 - x\\right]_0^1 = 2 - 1 - 1 = 0$."
                ],
                "answer": "$0$",
                "lesson": "그린 정리 덕분에 세 변을 따로 매개변수화하여 선적분할 필요 없이, 단일 이중적분으로 계산할 수 있었습니다. 결과가 $0$인 것은 이 벡터장의 '순환'이 이 영역에서 상쇄되기 때문입니다."
            },
            {
                "title": "[기본] 보존장의 선적분",
                "problem": "$\\mathbf{F} = \\nabla f$, $f(x,y) = x^2 y$ 일 때, $(0,0)$ 에서 $(2, 3)$ 까지의 선적분을 구하시오.",
                "steps": [
                    "보존장이므로 $\\int_C \\mathbf{F} \\cdot d\\mathbf{r} = f(B) - f(A)$.",
                    "$f(2, 3) = 4 \\cdot 3 = 12$.",
                    "$f(0, 0) = 0$.",
                    "선적분 $= 12 - 0 = 12$."
                ],
                "answer": "$12$",
                "lesson": "보존장에서의 선적분은 시작점과 끝점의 퍼텐셜 차이만으로 결정됩니다. 경로를 매개변수화할 필요가 없습니다."
            },
            {
                "title": "[응용] 직접 선적분 계산",
                "problem": "$\\mathbf{F} = (y, x)$, $C$: $\\mathbf{r}(t) = (t, t^2)$ ($0 \\leq t \\leq 1$) 를 따른 선적분 $\\int_C \\mathbf{F} \\cdot d\\mathbf{r}$ 을 구하시오.",
                "steps": [
                    "$\\mathbf{r}'(t) = (1, 2t)$.",
                    "$\\mathbf{F}(\\mathbf{r}(t)) = (t^2, t)$.",
                    "$\\mathbf{F} \\cdot \\mathbf{r}' = t^2 \\cdot 1 + t \\cdot 2t = t^2 + 2t^2 = 3t^2$.",
                    "$\\int_0^1 3t^2\\,dt = [t^3]_0^1 = 1$."
                ],
                "answer": "$1$",
                "lesson": "선적분의 직접 계산은 경로를 매개변수화하고 $\\mathbf{F}(\\mathbf{r}(t)) \\cdot \\mathbf{r}'(t)$를 적분하는 것입니다."
            },
            {
                "title": "[응용] 그린 정리로 넓이 구하기",
                "problem": "그린 정리를 이용하여 반지름 $3$인 원의 넓이를 구하시오.",
                "steps": [
                    "넓이 공식: $A = \\dfrac{1}{2}\\oint_C (x\\,dy - y\\,dx)$.",
                    "이것은 그린 정리에서 $P = -y$, $Q = x$, $\\dfrac{\\partial Q}{\\partial x} - \\dfrac{\\partial P}{\\partial y} = 1 + 1 = 2$를 이용.",
                    "$A = \\dfrac{1}{2} \\iint_D 2\\,dA = \\iint_D 1\\,dA = \\pi \\cdot 3^2 = 9\\pi$."
                ],
                "answer": "$9\\pi$",
                "lesson": "그린 정리의 특수한 경우로 닫힌 곡선이 둘러싸는 영역의 넓이를 구할 수 있습니다. $\\dfrac{1}{2}\\oint(x\\,dy - y\\,dx)$는 유명한 넓이 공식입니다."
            },
            {
                "title": "[심화] 보존장 판별과 퍼텐셜 함수 구하기",
                "problem": "$\\mathbf{F} = (2xy + 1,\\ x^2 + 3y^2)$ 가 보존장인지 판별하고, 보존장이면 퍼텐셜 함수 $f$를 구하시오.",
                "steps": [
                    "$P = 2xy + 1$, $Q = x^2 + 3y^2$.",
                    "$\\dfrac{\\partial P}{\\partial y} = 2x$, $\\dfrac{\\partial Q}{\\partial x} = 2x$. 같으므로 보존장. ✓",
                    "$f_x = 2xy + 1$ → $f = x^2 y + x + g(y)$.",
                    "$f_y = x^2 + g'(y) = x^2 + 3y^2$ → $g'(y) = 3y^2$ → $g(y) = y^3 + C$.",
                    "$f(x, y) = x^2 y + x + y^3 + C$."
                ],
                "answer": "$f(x, y) = x^2 y + x + y^3 + C$ (보존장)",
                "lesson": "퍼텐셜 함수를 구하려면 $f_x$를 $x$로 적분하고, 미지 함수 $g(y)$를 $f_y$ 조건으로 결정합니다. $\\dfrac{\\partial P}{\\partial y} = \\dfrac{\\partial Q}{\\partial x}$가 보존장의 필요충분조건입니다."
            }
        ],
        "problems": [
            {
                "id": "26-1",
                "type": "number",
                "difficulty": 1,
                "question": "보존장 $\\mathbf{F} = \\nabla f$ 에서 $f(x,y) = x^2 + xy$ 일 때, 점 $A=(0,0)$ 에서 $B=(1,2)$ 까지의 선적분 $\\int_C \\mathbf{F} \\cdot d\\mathbf{r}$ 의 값은?",
                "answer": "3",
                "hints": [
                    "보존장이면 선적분은 $f(B) - f(A)$ 입니다. 경로는 상관없습니다.",
                    "$f(1,2) = 1^2 + 1 \\cdot 2 = 3$ 을 계산해 보세요.",
                    "$f(0,0) = 0$ 이므로 선적분 $= 3 - 0 = 3$ 입니다."
                ],
                "explanation": "$\\mathbf{F} = \\nabla f$ 이므로 $\\int_C \\mathbf{F} \\cdot d\\mathbf{r} = f(B) - f(A) = f(1,2) - f(0,0) = (1+2) - 0 = 3$. 보존장에서는 경로에 무관하게 끝점의 퍼텐셜 차이로 결정됩니다.",
                "wrongAnalysis": "경로를 직접 매개변수화하여 복잡하게 계산하는 실수가 있습니다. 보존장이면 항상 $f(B)-f(A)$ 를 사용하는 것이 효율적입니다."
            },
            {
                "id": "26-2",
                "type": "choice",
                "difficulty": 2,
                "question": "벡터장 $\\mathbf{F} = (-y, x)$ 에 대해 옳은 설명은?",
                "choices": [
                    "보존장이다",
                    "$\\frac{\\partial P}{\\partial y} = \\frac{\\partial Q}{\\partial x}$ 이므로 보존장이다",
                    "보존장이 아니며, $\\frac{\\partial Q}{\\partial x} - \\frac{\\partial P}{\\partial y} = 2$ 이다",
                    "보존장이 아니며, $\\frac{\\partial Q}{\\partial x} - \\frac{\\partial P}{\\partial y} = 0$ 이다"
                ],
                "answer": "보존장이 아니며, $\\frac{\\partial Q}{\\partial x} - \\frac{\\partial P}{\\partial y} = 2$ 이다",
                "hints": [
                    "$P = -y$, $Q = x$ 로 놓고 편미분을 계산해 보세요.",
                    "$\\frac{\\partial P}{\\partial y} = -1$, $\\frac{\\partial Q}{\\partial x} = 1$ 입니다. 같은가요?",
                    "$\\frac{\\partial P}{\\partial y} \\neq \\frac{\\partial Q}{\\partial x}$ 이므로 보존장이 아닙니다. $\\frac{\\partial Q}{\\partial x} - \\frac{\\partial P}{\\partial y} = 1 - (-1) = 2$ 입니다."
                ],
                "explanation": "$P = -y \\Rightarrow \\frac{\\partial P}{\\partial y} = -1$, $Q = x \\Rightarrow \\frac{\\partial Q}{\\partial x} = 1$. $-1 \\neq 1$ 이므로 보존장이 아닙니다. $\\frac{\\partial Q}{\\partial x} - \\frac{\\partial P}{\\partial y} = 1 - (-1) = 2$ 이며, 이 벡터장은 원점 중심의 회전장입니다.",
                "wrongAnalysis": "$\\frac{\\partial P}{\\partial y} = -1$ 에서 부호를 놓쳐 $1$로 계산하면 '보존장'이라는 오답에 이릅니다. 편미분 시 부호를 꼼꼼히 확인하세요."
            },
            {
                "id": "26-3",
                "type": "number",
                "difficulty": 3,
                "question": "그린 정리를 이용하여 $\\oint_C (-y\\,dx + x\\,dy)$ 를 구하시오. 단, $C$ 는 반지름 $2$ 인 원 $x^2 + y^2 = 4$ 의 반시계 방향 경계이다. ($\\pi$ 는 pi 로 입력, 예: 8pi)",
                "answer": "8pi",
                "hints": [
                    "그린 정리: $\\oint_C (P\\,dx + Q\\,dy) = \\iint_D \\left(\\frac{\\partial Q}{\\partial x} - \\frac{\\partial P}{\\partial y}\\right) dA$. 여기서 $P=-y$, $Q=x$ 입니다.",
                    "$\\frac{\\partial Q}{\\partial x} - \\frac{\\partial P}{\\partial y} = 1 - (-1) = 2$ 이므로 $\\iint_D 2\\,dA = 2 \\cdot (\\text{영역의 넓이})$ 입니다.",
                    "반지름 $2$ 인 원의 넓이는 $\\pi \\cdot 2^2 = 4\\pi$ 이므로 답은 $2 \\cdot 4\\pi = 8\\pi$ 입니다."
                ],
                "explanation": "$P=-y$, $Q=x$, $\\frac{\\partial Q}{\\partial x} - \\frac{\\partial P}{\\partial y} = 1-(-1) = 2$. 그린 정리에 의해 $\\oint_C (-y\\,dx + x\\,dy) = \\iint_D 2\\,dA = 2 \\cdot \\pi(2)^2 = 8\\pi$. 사실 $\\frac{1}{2}\\oint_C (-y\\,dx + x\\,dy)$ 는 영역의 넓이를 구하는 유명한 공식이며, 여기서 넓이의 2배가 $8\\pi$ 입니다.",
                "wrongAnalysis": "$\\frac{\\partial P}{\\partial y}$ 의 부호를 잘못 처리하여 $\\frac{\\partial Q}{\\partial x} - \\frac{\\partial P}{\\partial y} = 0$ 으로 계산하는 실수가 흔합니다. $P=-y$ 이므로 $\\frac{\\partial P}{\\partial y} = -1$ 이고, 뺄 때 $-(-1) = +1$ 이 되어 결과는 $2$ 입니다."
            },
            {
                "id": "26-4",
                "type": "number",
                "difficulty": 1,
                "question": "보존장 $\\mathbf{F} = \\nabla f$ 에서 $f(x,y) = x^2 y$ 일 때, 임의의 닫힌 경로 $C$ 를 따른 선적분 $\\oint_C \\mathbf{F} \\cdot d\\mathbf{r}$ 의 값은?",
                "answer": "0",
                "hints": [
                    "보존장에서 닫힌 경로의 선적분은 항상 어떤 값인가요?",
                    "$f(A) - f(A) = 0$."
                ],
                "explanation": "보존장에서 닫힌 경로의 선적분은 $f(A) - f(A) = 0$입니다. 시작점과 끝점이 같으므로 퍼텐셜의 차이가 $0$.",
                "wrongAnalysis": "닫힌 경로라도 경로의 길이에 따라 값이 달라진다고 착각하는 실수가 있습니다. 보존장에서는 경로에 무관합니다."
            },
            {
                "id": "26-5",
                "type": "choice",
                "difficulty": 2,
                "question": "벡터장 $\\mathbf{F} = (2x, 2y)$ 는 보존장인가?",
                "choices": [
                    "보존장이다 — $f(x,y) = x^2 + y^2$의 그래디언트",
                    "보존장이다 — $f(x,y) = 2xy$의 그래디언트",
                    "보존장이 아니다 — $\\frac{\\partial P}{\\partial y} \\neq \\frac{\\partial Q}{\\partial x}$",
                    "판단 불가"
                ],
                "answer": "보존장이다 — $f(x,y) = x^2 + y^2$의 그래디언트",
                "hints": [
                    "$\\frac{\\partial P}{\\partial y} = 0$, $\\frac{\\partial Q}{\\partial x} = 0$.",
                    "같으므로 보존장. 퍼텐셜 $f$ 를 찾으세요."
                ],
                "explanation": "$P = 2x$, $Q = 2y$. $\\frac{\\partial P}{\\partial y} = 0 = \\frac{\\partial Q}{\\partial x}$이므로 보존장. $\\nabla(x^2 + y^2) = (2x, 2y) = \\mathbf{F}$.",
                "wrongAnalysis": "$f = 2xy$의 그래디언트는 $(2y, 2x)$이지 $(2x, 2y)$가 아닙니다. 퍼텐셜을 잘못 추측하는 실수에 주의."
            }
        ],
        "summary": {
            "keyPoints": [
                "선적분 $\\int_C \\mathbf{F} \\cdot d\\mathbf{r}$ 은 벡터장이 경로를 따라 한 일을 나타낸다.",
                "보존장 $\\mathbf{F} = \\nabla f$ 이면 선적분은 경로에 무관하게 $f(B)-f(A)$ 이다.",
                "그린 정리는 닫힌 곡선의 선적분을 내부 영역의 이중적분으로 변환한다."
            ],
            "formulas": [
                "\\int_C \\mathbf{F} \\cdot d\\mathbf{r} = \\int_a^b \\mathbf{F}(\\mathbf{r}(t)) \\cdot \\mathbf{r}'(t)\\,dt",
                "\\mathbf{F} = \\nabla f \\Rightarrow \\int_C \\mathbf{F} \\cdot d\\mathbf{r} = f(B) - f(A)",
                "\\oint_C (P\\,dx + Q\\,dy) = \\iint_D \\left(\\frac{\\partial Q}{\\partial x} - \\frac{\\partial P}{\\partial y}\\right) dA"
            ],
            "commonMistakes": [
                "보존장인데 경로를 직접 매개변수화하여 불필요하게 복잡한 계산을 하는 실수",
                "그린 정리에서 $\\frac{\\partial Q}{\\partial x}$ 와 $\\frac{\\partial P}{\\partial y}$ 의 순서를 뒤바꾸는 실수",
                "닫힌 곡선의 방향(반시계 vs 시계)에 따른 부호를 무시하는 실수"
            ],
            "nextConnection": "그린 정리는 2차원에서의 결과입니다. 다음 레슨에서 이를 3차원으로 확장한 발산 정리와 스토크스 정리를 배웁니다."
        }
    },
    {
        "id": 27,
        "title": "발산 정리와 스토크스 정리",
        "category": "다변수와 편미분",
        "level": "심화",
        "question": "3차원에서 면적분과 체적적분, 선적분과 면적분은 어떤 관계가 있는가?",
        "concept": {
            "intro": ":::definition[개념 정의]\n이전 레슨에서 그린 정리를 통해 2차원에서의 선적분과 이중적분의 관계를 배웠습니다. 이제 무대를 3차원으로 확장합니다. 3차원에는 선(curve), 면(surface), 체적(volume)이라는 세 가지 대상이 있고, 이들 사이를 잇는 두 개의 위대한 정리가 있습니다: **발산 정리(Divergence Theorem)**와 **스토크스 정리(Stokes' Theorem)**입니다.\n:::\n\n:::note[참고]\n먼저 **면적분(surface integral)** $\\iint_S \\mathbf{F} \\cdot d\\mathbf{S}$ 을 이해해야 합니다. 이것은 벡터장 $\\mathbf{F}$가 곡면 $S$를 '얼마나 뚫고 지나가는가'를 측정합니다. 곡면의 각 미소 조각에서 법선 벡터와 $\\mathbf{F}$의 내적을 합산한 것으로, 물리적으로는 곡면을 통과하는 **유량(flux)**을 나타냅니다.\n:::\n\n:::note[참고]\n**발산 정리(가우스 정리)**는 닫힌 곡면 $S$를 통과하는 유량을, 그 곡면이 둘러싼 체적 $V$ 전체에서의 발산을 적분한 것과 같다고 말합니다: $\\iint_S \\mathbf{F} \\cdot d\\mathbf{S} = \\iiint_V (\\nabla \\cdot \\mathbf{F})\\,dV$. 직관적으로 '바깥으로 나가는 총 유량 = 내부에서 솟아나는 총량'입니다. 그린 정리의 발산(flux) 형태를 3차원으로 확장한 것입니다.\n:::\n\n:::note[참고]\n**스토크스 정리**는 곡면 $S$의 경계 곡선 $\\partial S = C$ 를 따른 선적분을, 곡면 위에서 회전(curl)의 면적분과 같다고 말합니다: $\\oint_C \\mathbf{F} \\cdot d\\mathbf{r} = \\iint_S (\\nabla \\times \\mathbf{F}) \\cdot d\\mathbf{S}$. 이것은 그린 정리의 순환(circulation) 형태를 3차원으로 확장한 것입니다. 두 정리를 합치면, 미적분학의 기본정리(FTC)부터 그린 정리까지 모든 것이 '경계에서의 적분 = 내부에서의 미분 연산의 적분'이라는 하나의 원리로 통합됩니다.\n:::",
            "intuition": ":::note[직관]\n방 안에 에어컨이 있다고 상상해 보세요. 발산 정리는 이렇게 말합니다: 방의 벽·천장·바닥(닫힌 곡면)을 통해 빠져나가는 공기의 총량은, 방 내부 전체에서 '에어컨이 내뿜는 공기량'(발산)을 합산한 것과 같습니다. 벽을 하나하나 조사할 필요 없이 내부의 발산만 적분하면 됩니다.\n\n스토크스 정리는 이런 비유입니다: 연못에 낙엽이 떠 있고, 낙엽의 가장자리를 따라 물이 얼마나 회전하는지(순환)를 알고 싶다면, 낙엽 전체 표면에서 '물의 소용돌이 정도'(curl)를 합산하면 됩니다. 가장자리와 내부가 연결되어 있는 것입니다.\n:::",
            "formula": "\\text{면적분 (유량):}\\ \\iint_S \\mathbf{F} \\cdot d\\mathbf{S}\n\\text{발산 정리:}\\ \\iint_S \\mathbf{F} \\cdot d\\mathbf{S} = \\iiint_V (\\nabla \\cdot \\mathbf{F})\\,dV\n\\text{스토크스 정리:}\\ \\oint_C \\mathbf{F} \\cdot d\\mathbf{r} = \\iint_S (\\nabla \\times \\mathbf{F}) \\cdot d\\mathbf{S}\n\\text{통합:}\\ \\text{FTC} \\xrightarrow{2D} \\text{Green} \\xrightarrow{3D} \\text{Stokes / Divergence}",
            "summary": ":::note[핵심 요약]\n• 발산 정리: 닫힌 곡면의 유량 $=$ 내부 발산의 체적적분\n• 스토크스 정리: 경계 곡선의 순환 $=$ 곡면 위 curl의 면적분\n• FTC → 그린 → 스토크스/발산: 모두 '경계의 적분 $=$ 내부의 미분 적분'이라는 하나의 원리\n:::"
        },
        "examples": [
            {
                "title": "발산 정리로 유량 계산: 단위 구를 통과하는 $\\mathbf{F} = (x,y,z)$ 의 유량",
                "problem": "벡터장 $\\mathbf{F} = (x,y,z)$ 의 단위 구 $x^2+y^2+z^2=1$ 을 통과하는 유량 $\\iint_S \\mathbf{F} \\cdot d\\mathbf{S}$ 를 발산 정리를 이용하여 구하시오.",
                "steps": [
                    "발산을 계산한다: $\\nabla \\cdot \\mathbf{F} = \\frac{\\partial x}{\\partial x} + \\frac{\\partial y}{\\partial y} + \\frac{\\partial z}{\\partial z} = 1 + 1 + 1 = 3$.",
                    "발산 정리를 적용한다: $\\iint_S \\mathbf{F} \\cdot d\\mathbf{S} = \\iiint_V 3\\,dV = 3 \\cdot (\\text{단위 구의 부피})$.",
                    "단위 구의 부피: $V = \\frac{4}{3}\\pi (1)^3 = \\frac{4}{3}\\pi$.",
                    "따라서 유량 $= 3 \\cdot \\frac{4}{3}\\pi = 4\\pi$."
                ],
                "answer": "$4\\pi$",
                "lesson": "면적분을 직접 계산하려면 구면 매개변수화와 복잡한 내적이 필요하지만, 발산 정리 덕분에 간단한 체적적분으로 변환되었습니다. 발산이 상수인 경우 '발산 $\\times$ 부피'로 바로 구할 수 있습니다."
            },
            {
                "title": "[기본] 3차원 발산 계산",
                "problem": "$\\mathbf{F} = (x^2, y^2, z^2)$ 의 발산을 구하시오.",
                "steps": [
                    "$\\nabla \\cdot \\mathbf{F} = \\dfrac{\\partial(x^2)}{\\partial x} + \\dfrac{\\partial(y^2)}{\\partial y} + \\dfrac{\\partial(z^2)}{\\partial z}$.",
                    "$= 2x + 2y + 2z$."
                ],
                "answer": "$\\nabla \\cdot \\mathbf{F} = 2x + 2y + 2z$",
                "lesson": "발산은 각 성분을 해당 좌표로 편미분하여 합합니다. 발산이 좌표에 의존하면 적분 시 위치마다 값이 달라집니다."
            },
            {
                "title": "[응용] 정육면체에 대한 발산 정리",
                "problem": "$\\mathbf{F} = (x, 0, 0)$ 의 단위 정육면체 $[0,1]^3$을 통과하는 유량을 발산 정리로 구하시오.",
                "steps": [
                    "$\\nabla \\cdot \\mathbf{F} = 1 + 0 + 0 = 1$.",
                    "발산 정리: 유량 $= \\iiint_V 1\\,dV = 1 \\times 1 \\times 1 = 1$."
                ],
                "answer": "유량 $= 1$",
                "lesson": "발산이 상수이면 유량은 '발산 $\\times$ 체적'으로 바로 구할 수 있습니다. 6개 면을 각각 적분하는 것보다 훨씬 효율적입니다."
            },
            {
                "title": "[응용] curl 계산과 스토크스 정리 적용",
                "problem": "$\\mathbf{F} = (y, -x, z)$ 의 $\\nabla \\times \\mathbf{F}$를 구하시오.",
                "steps": [
                    "$\\nabla \\times \\mathbf{F} = \\begin{vmatrix}\\mathbf{i} & \\mathbf{j} & \\mathbf{k} \\\\ \\partial_x & \\partial_y & \\partial_z \\\\ y & -x & z\\end{vmatrix}$.",
                    "$= \\mathbf{i}(0 - 0) - \\mathbf{j}(0 - 0) + \\mathbf{k}(-1 - 1) = (0, 0, -2)$."
                ],
                "answer": "$\\nabla \\times \\mathbf{F} = (0, 0, -2)$",
                "lesson": "curl은 행렬식의 기호적 전개로 계산합니다. 결과가 상수 벡터이면 벡터장의 회전이 공간 전체에서 균일합니다."
            },
            {
                "title": "[심화] 스토크스 정리를 이용한 선적분 계산",
                "problem": "$\\mathbf{F} = (z, x, y)$ 에 대해, $z = 0$ 평면의 단위 원 $C: x^2 + y^2 = 1$ ($z = 0$, 반시계 방향)을 따른 선적분 $\\oint_C \\mathbf{F} \\cdot d\\mathbf{r}$ 을 스토크스 정리로 구하시오.",
                "steps": [
                    "$\\nabla \\times \\mathbf{F} = \\begin{vmatrix}\\mathbf{i} & \\mathbf{j} & \\mathbf{k} \\\\ \\partial_x & \\partial_y & \\partial_z \\\\ z & x & y\\end{vmatrix} = (1 - 0, 1 - 0, 1 - 0) = (1, 1, 1)$.",
                    "곡면: $z = 0$ 위의 단위 원판. 법선: $\\mathbf{n} = (0, 0, 1)$.",
                    "$\\oint_C \\mathbf{F} \\cdot d\\mathbf{r} = \\iint_S (\\nabla \\times \\mathbf{F}) \\cdot d\\mathbf{S} = \\iint_S (1,1,1) \\cdot (0,0,1)\\,dA = \\iint_S 1\\,dA$.",
                    "$= \\pi \\cdot 1^2 = \\pi$."
                ],
                "answer": "$\\pi$",
                "lesson": "스토크스 정리로 선적분을 면적분으로 변환하면, 경로를 매개변수화하지 않아도 됩니다. curl과 법선 벡터의 내적을 곡면 위에서 적분합니다."
            }
        ],
        "problems": [
            {
                "id": "27-1",
                "type": "number",
                "difficulty": 1,
                "question": "$\\mathbf{F} = (2x, 3y, z)$ 의 발산 $\\nabla \\cdot \\mathbf{F}$ 를 구하시오.",
                "answer": "6",
                "hints": [
                    "발산은 각 성분을 해당 변수로 편미분한 것의 합입니다.",
                    "$\\frac{\\partial (2x)}{\\partial x} = 2$, $\\frac{\\partial (3y)}{\\partial y} = 3$, $\\frac{\\partial z}{\\partial z} = 1$ 입니다.",
                    "$2 + 3 + 1 = 6$ 입니다."
                ],
                "explanation": "$\\nabla \\cdot \\mathbf{F} = \\frac{\\partial}{\\partial x}(2x) + \\frac{\\partial}{\\partial y}(3y) + \\frac{\\partial}{\\partial z}(z) = 2 + 3 + 1 = 6$. 발산이 양수이므로 이 벡터장은 모든 점에서 바깥으로 퍼져나가는 흐름을 나타냅니다.",
                "wrongAnalysis": "편미분에서 $\\frac{\\partial(2x)}{\\partial x}$를 $2x$로 쓰거나, 성분의 계수를 곱하지 않고 변수만 미분하는 실수가 있습니다."
            },
            {
                "id": "27-2",
                "type": "choice",
                "difficulty": 2,
                "question": "스토크스 정리 $\\oint_C \\mathbf{F} \\cdot d\\mathbf{r} = \\iint_S (\\nabla \\times \\mathbf{F}) \\cdot d\\mathbf{S}$ 에서 $\\nabla \\times \\mathbf{F} = \\mathbf{0}$ 이면, 닫힌 곡선 $C$ 에 대한 선적분의 값은?",
                "choices": [
                    "$0$",
                    "곡면 $S$ 의 넓이",
                    "$\\nabla \\cdot \\mathbf{F}$ 의 적분과 같다",
                    "경로 $C$ 의 길이"
                ],
                "answer": "$0$",
                "hints": [
                    "스토크스 정리의 우변에 $\\nabla \\times \\mathbf{F} = \\mathbf{0}$ 을 대입해 보세요.",
                    "$\\iint_S \\mathbf{0} \\cdot d\\mathbf{S} = 0$ 입니다.",
                    "curl이 $0$인 벡터장은 보존장이며, 닫힌 경로를 따른 선적분은 항상 $0$입니다."
                ],
                "explanation": "$\\nabla \\times \\mathbf{F} = \\mathbf{0}$ 이면 스토크스 정리에 의해 $\\oint_C \\mathbf{F} \\cdot d\\mathbf{r} = \\iint_S \\mathbf{0} \\cdot d\\mathbf{S} = 0$ 입니다. 이는 보존장의 핵심 성질(닫힌 경로 순환 $= 0$)과 일치합니다.",
                "wrongAnalysis": "'곡면의 넓이'를 선택하는 실수는 $d\\mathbf{S}$를 스칼라로 착각한 것입니다. $\\mathbf{0} \\cdot d\\mathbf{S} = 0$ 이므로 넓이와 무관합니다."
            },
            {
                "id": "27-3",
                "type": "text",
                "difficulty": 3,
                "question": "$\\mathbf{F} = (x^3, y^3, z^3)$ 의 반지름 $R$ 인 구 $x^2+y^2+z^2 = R^2$ 을 통과하는 유량을 발산 정리로 구하면 $\\frac{a}{b}\\pi R^c$ 꼴이 됩니다. $a$, $b$, $c$ 를 구하여 a/b*pi*R^c 형태로 입력하시오. (예: 4/3*pi*R^3)",
                "answer": "12/5*pi*R^5",
                "hints": [
                    "$\\nabla \\cdot \\mathbf{F} = 3x^2 + 3y^2 + 3z^2 = 3(x^2+y^2+z^2) = 3r^2$ 입니다.",
                    "발산 정리에 의해 $\\iiint_V 3r^2\\,dV$ 를 구면좌표로 계산하세요: $dV = r^2 \\sin\\phi\\,dr\\,d\\phi\\,d\\theta$, 적분 범위 $0 \\leq r \\leq R$, $0 \\leq \\phi \\leq \\pi$, $0 \\leq \\theta \\leq 2\\pi$ 입니다.",
                    "$\\iiint_V 3r^2\\,dV = 3 \\int_0^{2\\pi}d\\theta \\int_0^{\\pi}\\sin\\phi\\,d\\phi \\int_0^R r^4\\,dr = 3 \\cdot 2\\pi \\cdot 2 \\cdot \\frac{R^5}{5} = \\frac{12\\pi R^5}{5}$ 입니다."
                ],
                "explanation": "$\\nabla \\cdot \\mathbf{F} = 3x^2 + 3y^2 + 3z^2 = 3r^2$. 발산 정리에 의해 $\\iint_S \\mathbf{F} \\cdot d\\mathbf{S} = \\iiint_V 3r^2\\,dV$. 구면좌표로 변환하면 $3 \\int_0^{2\\pi}d\\theta \\int_0^{\\pi}\\sin\\phi\\,d\\phi \\int_0^R r^2 \\cdot r^2\\,dr = 3 \\cdot 2\\pi \\cdot 2 \\cdot \\frac{R^5}{5} = \\frac{12}{5}\\pi R^5$. 발산이 상수가 아닌 $3r^2$ 이므로 반드시 적분을 수행해야 하며, 구면좌표의 야코비안 $r^2\\sin\\phi$ 가 $r^2$ 과 곱해져 $r^4$ 이 되는 것에 주의해야 합니다.",
                "wrongAnalysis": "발산 $3r^2$ 가 상수가 아닌데 '$3r^2 \\times \\frac{4}{3}\\pi R^3$'으로 계산하는 실수가 흔합니다. 발산이 좌표에 의존하면 반드시 적분을 수행해야 합니다. 또한 구면좌표에서 $dV = r^2\\sin\\phi\\,dr\\,d\\phi\\,d\\theta$ 의 $r^2$ 인자를 빠뜨리는 실수도 주의하세요."
            },
            {
                "id": "27-4",
                "type": "number",
                "difficulty": 1,
                "question": "$\\mathbf{F} = (x, y, z)$ 의 발산 $\\nabla \\cdot \\mathbf{F}$ 를 구하시오.",
                "answer": "3",
                "hints": [
                    "$\\nabla \\cdot \\mathbf{F} = \\frac{\\partial x}{\\partial x} + \\frac{\\partial y}{\\partial y} + \\frac{\\partial z}{\\partial z}$.",
                    "$1 + 1 + 1 = ?$"
                ],
                "explanation": "$\\nabla \\cdot \\mathbf{F} = 1 + 1 + 1 = 3$. 각 성분을 해당 변수로 편미분한 결과의 합.",
                "wrongAnalysis": "발산을 벡터의 크기와 혼동하여 $\\sqrt{x^2+y^2+z^2}$로 답하는 실수가 있습니다. 발산은 스칼라 값입니다."
            },
            {
                "id": "27-5",
                "type": "choice",
                "difficulty": 2,
                "question": "발산 정리에 의해 $\\mathbf{F} = (x, y, z)$의 반지름 $1$인 구를 통과하는 유량은?",
                "choices": [
                    "$\\pi$",
                    "$2\\pi$",
                    "$4\\pi$",
                    "$\\frac{4}{3}\\pi$"
                ],
                "answer": "$4\\pi$",
                "hints": [
                    "$\\nabla \\cdot \\mathbf{F} = 3$.",
                    "발산 정리: 유량 $= \\iiint_V 3\\,dV = 3 \\times $ 구의 부피."
                ],
                "explanation": "$\\nabla \\cdot \\mathbf{F} = 3$. 발산 정리에 의해 유량 $= 3 \\times \\frac{4}{3}\\pi = 4\\pi$.",
                "wrongAnalysis": "구의 부피 $\\frac{4}{3}\\pi$를 바로 답하는 실수는 발산($= 3$)을 곱하지 않은 것입니다."
            }
        ],
        "summary": {
            "keyPoints": [
                "발산 정리: 닫힌 곡면의 유량(면적분) $=$ 내부 발산의 체적적분이다.",
                "스토크스 정리: 경계 곡선의 순환(선적분) $=$ 곡면 위 curl의 면적분이다.",
                "FTC, 그린 정리, 스토크스 정리, 발산 정리는 '경계의 적분 $=$ 내부의 미분 적분'이라는 하나의 원리로 통합된다."
            ],
            "formulas": [
                "\\iint_S \\mathbf{F} \\cdot d\\mathbf{S} = \\iiint_V (\\nabla \\cdot \\mathbf{F})\\,dV",
                "\\oint_C \\mathbf{F} \\cdot d\\mathbf{r} = \\iint_S (\\nabla \\times \\mathbf{F}) \\cdot d\\mathbf{S}",
                "\\text{FTC} \\to \\text{Green} \\to \\text{Stokes / Divergence}"
            ],
            "commonMistakes": [
                "발산 정리에서 닫히지 않은 곡면에 적용하려는 실수 — 곡면이 반드시 닫혀 있어야 한다",
                "스토크스 정리에서 곡면의 법선 방향과 경계 곡선의 방향이 오른손 법칙을 따르지 않는 실수",
                "발산이 좌표에 의존할 때 '발산 $\\times$ 부피'를 바로 적용하는 실수"
            ],
            "nextConnection": "벡터 미적분의 기본 정리를 모두 갖추었습니다. 다음 레슨부터는 미분방정식의 세계로 들어갑니다."
        }
    }
];
