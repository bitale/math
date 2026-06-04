"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.multivariableCalculusLessons = void 0;
exports.multivariableCalculusLessons = [
    {
        "id": 1,
        "title": "다변수 함수",
        "category": "다변수 미적분",
        "level": "고급",
        "question": "변수가 두 개 이상일 때 함수와 그래프는 어떻게 달라질까?",
        "concept": {
            "intro": ":::definition[다변수 함수의 정의]\n$f(x, y)$ 와 같이 입력이 둘 이상인 함수가 다변수 함수입니다. 그래프는 3차원 곡면이 되며, 등고선(level curve)으로 평면에 표현하기도 합니다.\n:::\n\n:::warning[극한의 조건]\n극한·연속·미분의 개념은 그대로 확장되지만, '한 방향이 아니라 모든 방향'에서 들어와도 같은 값으로 다가가야 한다는 점이 중요합니다.\n:::",
            "intuition": "온도를 $(x,y)$ 좌표의 도시 위에 그린 등온선이나, 지도의 등고선을 떠올려 보세요. $1$차원 그래프가 $2$차원 곡선이라면, $2$변수 함수의 그래프는 $3$차원 곡면입니다.",
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
                "title": "[기본] 다변수 함수의 정의역",
                "problem": "$f(x,y) = \\sqrt{4 - x^2 - y^2}$ 의 정의역을 구하시오.",
                "steps": [
                    "제곱근 안이 음이 아니어야 하므로 $4 - x^2 - y^2 \\ge 0$.",
                    "정리하면 $x^2 + y^2 \\le 4$.",
                    "이것은 원점 중심, 반지름 $2$ 인 원(경계 포함)의 내부입니다."
                ],
                "answer": "$\\{(x,y) \\mid x^2 + y^2 \\le 4\\}$ (반지름 $2$ 인 원판)",
                "lesson": "다변수 함수의 정의역은 각 연산(제곱근, 로그, 분모 등)이 성립하는 점들의 집합으로, 2차원 영역이 됩니다."
            },
            {
                "title": "[응용] 경로에 따른 극한 판별",
                "problem": "$\\displaystyle\\lim_{(x,y) \\to (0,0)} \\frac{x^2 y}{x^4 + y^2}$ 의 극한이 존재하는지 판별하시오.",
                "steps": [
                    "$y = 0$ 으로 접근: $\\dfrac{0}{x^4} = 0$.",
                    "$x = 0$ 으로 접근: $\\dfrac{0}{y^2} = 0$.",
                    "$y = x^2$ 으로 접근: $\\dfrac{x^2 \\cdot x^2}{x^4 + x^4} = \\dfrac{x^4}{2x^4} = \\dfrac{1}{2}$.",
                    "$y = 0$ 경로에서 극한값 $0$, $y = x^2$ 경로에서 극한값 $\\dfrac{1}{2}$ 로 서로 다르다.",
                    "따라서 극한이 존재하지 않는다."
                ],
                "answer": "극한이 존재하지 않는다",
                "lesson": "직선 경로($y=0$, $x=0$, $y=mx$)로 다가갈 때 모두 같은 값이 나와도, 곡선 경로($y=x^2$ 등)에서 다른 값이 나올 수 있으므로 항상 다양한 경로를 시험해야 합니다."
            },
            {
                "title": "[응용] 3변수 함수와 등위면",
                "problem": "$f(x,y,z) = x^2 + y^2 + z^2$ 의 등위면(level surface) $f = 9$ 를 설명하시오.",
                "steps": [
                    "등위면 조건: $x^2 + y^2 + z^2 = 9$.",
                    "이것은 원점 중심, 반지름 $3$ 인 구면(sphere)이다.",
                    "일반적으로 $f = c$ ($c > 0$) 의 등위면은 반지름 $\\sqrt{c}$ 인 구면이다."
                ],
                "answer": "원점 중심, 반지름 $3$ 인 구면 $x^2 + y^2 + z^2 = 9$",
                "lesson": "3변수 함수에서 등고선 대신 등위면(level surface)을 사용합니다. 2변수 함수의 등고선이 곡선인 것처럼, 3변수 함수의 등위면은 곡면입니다."
            },
            {
                "title": "[심화] 극좌표를 이용한 극한 증명",
                "problem": "$\\displaystyle\\lim_{(x,y) \\to (0,0)} \\frac{x^2 y^2}{x^2 + y^2}$ 의 극한을 구하시오.",
                "steps": [
                    "극좌표 변환: $x = r\\cos\\theta$, $y = r\\sin\\theta$, $(x,y) \\to (0,0)$ 이면 $r \\to 0$.",
                    "$\\dfrac{x^2 y^2}{x^2 + y^2} = \\dfrac{r^4 \\cos^2\\theta \\sin^2\\theta}{r^2} = r^2 \\cos^2\\theta \\sin^2\\theta$.",
                    "$0 \\le \\cos^2\\theta \\sin^2\\theta \\le 1$ 이므로 $0 \\le r^2 \\cos^2\\theta \\sin^2\\theta \\le r^2$.",
                    "조임 정리(Squeeze Theorem)에 의해 $r \\to 0$ 이면 $r^2 \\cos^2\\theta \\sin^2\\theta \\to 0$.",
                    "극한값은 $\\theta$ 에 무관하게 $0$ 이다."
                ],
                "answer": "$0$",
                "lesson": "극좌표 변환 후 조임 정리를 적용하면, 모든 방향에서 동시에 극한을 증명할 수 있습니다. 경로별 확인보다 훨씬 강력한 방법입니다."
            }
        ],
        "problems": [
            {
                "id": "1-1",
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
                "id": "1-2",
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
                    "등고선은 $f(x,y)=c$로 놓고 봅니다.",
                    "$x^2+y^2=c$는 원점 중심의 어떤 곡선인지 떠올리세요."
                ],
                "explanation": "등고선은 $x^2+y^2=c$로 나타납니다. $c>0$이면 원점 중심, 반지름 $\\sqrt{c}$인 원이므로 모양은 원입니다.",
                "wrongAnalysis": "$x^2 + y^2$ 와 $\\dfrac{x^2}{a^2} + \\dfrac{y^2}{b^2}$ 형태의 타원을 혼동하지 마세요."
            },
            {
                "id": "1-3",
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
                "id": "1-4",
                "type": "choice",
                "difficulty": 1,
                "question": "$f(x,y) = 2x - 3y + 1$ 일 때 $f(1, -1)$ 의 값은?",
                "choices": [
                    "$6$",
                    "$4$",
                    "$0$",
                    "$-2$"
                ],
                "answer": "$6$",
                "hints": [
                    "$x = 1$, $y = -1$ 을 대입하세요.",
                    "$2(1) - 3(-1) + 1 = 2 + 3 + 1$."
                ],
                "explanation": "$f(1, -1) = 2(1) - 3(-1) + 1 = 2 + 3 + 1 = 6$. 다변수 함수의 함숫값은 각 변수에 값을 대입하여 구합니다.",
                "wrongAnalysis": "$-3(-1)$ 을 $-3$ 으로 계산하는 부호 실수가 흔합니다. 음수에 음수를 곱하면 양수입니다."
            },
            {
                "id": "1-5",
                "type": "text",
                "difficulty": 2,
                "question": "$f(x,y) = x^2 - y^2$ 의 등고선 $f = 0$ 은 어떤 곡선인가? (예: 원, 직선, 쌍곡선 등)",
                "answer": "직선",
                "hints": [
                    "$x^2 - y^2 = 0$ 을 인수분해하면 $(x-y)(x+y) = 0$ 입니다.",
                    "이것은 $y = x$ 와 $y = -x$ 두 직선입니다."
                ],
                "explanation": "$x^2 - y^2 = 0 \\Rightarrow (x-y)(x+y) = 0$ 이므로 $y = x$ 또는 $y = -x$ 입니다. 등고선 $f = 0$ 은 원점을 지나는 두 직선으로 이루어집니다. $f \\neq 0$ 인 등고선은 쌍곡선입니다.",
                "wrongAnalysis": "$x^2 - y^2 = 0$ 을 쌍곡선이라고 답하는 경우가 많지만, $c = 0$ 인 특별한 경우에는 쌍곡선이 퇴화하여 두 직선이 됩니다."
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
            "nextConnection": "이제 변수가 여러 개인 함수의 변화율을 어떻게 정의할지 묻게 됩니다. 다음 단원에서 한 변수씩 변화율을 구하는 편미분을 배웁니다."
        }
    },
    {
        "id": 2,
        "title": "편미분",
        "category": "다변수 미적분",
        "level": "고급",
        "question": "다변수 함수에서 한 변수만 변할 때의 변화율은 어떻게 정의할까?",
        "concept": {
            "intro": ":::definition[편미분의 정의]\n편미분은 한 변수만 변화시키고 다른 변수는 상수로 두는 미분입니다. $f_x = \\dfrac{\\partial f}{\\partial x}$ 는 '$y$ 를 상수로 두고 $x$ 로 미분'이라는 뜻입니다.\n:::\n\n:::note[참고]\n편미분 자체는 일변수 미분 규칙을 그대로 사용합니다. 변수만 잠깐 '얼려' 두는 셈입니다.\n:::",
            "intuition": "지도 위에 등고선을 따라 동쪽으로만 걸을 때 고도가 얼마나 빠르게 변하는지를 묻는 것과 같습니다. 남북 방향은 잠깐 무시합니다.",
            "formula": "\\frac{\\partial f}{\\partial x}:\\ y\\text{를 상수로 두고 }x\\text{로 미분}\n\\frac{\\partial f}{\\partial y}:\\ x\\text{를 상수로 두고 }y\\text{로 미분}",
            "summary": ":::note[핵심 요약]\n• 한 변수만 변화\n• 다른 변수는 상수 취급\n• 표기: $\\partial,\\ f_x,\\ f_y$\n:::",
            "visuals": [
                {
                    "type": "function",
                    "title": "편미분 = 한 변수만 변화시킨 기울기",
                    "xRange": [-3, 3],
                    "yRange": [-1, 5],
                    "functions": [
                        { "expr": "x^2", "color": "#6366f1", "label": "f(x,1) = x²+1 단면" },
                        { "expr": "0.5*x^2 + 2", "color": "#ef4444", "label": "f(x,2) 단면" }
                    ],
                    "lines": [
                        { "from": [0.5, 0.25], "to": [2, 4], "color": "#10b981", "label": "∂f/∂x 접선" }
                    ],
                    "points": [
                        { "x": 1, "y": 1, "label": "(1,1)", "color": "#6366f1" }
                    ],
                    "annotations": [
                        { "x": -2, "y": 4.2, "text": "y 고정, x만 변화", "color": "#334155" }
                    ]
                }
            ]
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
                "title": "[기본] 2차 편미분 계산",
                "problem": "$f(x,y) = x^3 + 2x^2 y$ 의 $f_{xx}$ 와 $f_{xy}$ 를 구하시오.",
                "steps": [
                    "$f_x = 3x^2 + 4xy$.",
                    "$f_{xx} = \\dfrac{\\partial}{\\partial x}(3x^2 + 4xy) = 6x + 4y$.",
                    "$f_{xy} = \\dfrac{\\partial}{\\partial y}(3x^2 + 4xy) = 4x$."
                ],
                "answer": "$f_{xx} = 6x + 4y,\\ f_{xy} = 4x$",
                "lesson": "2차 편미분은 편미분을 두 번 하는 것입니다. $f_{xy}$ 는 먼저 $x$ 로, 그 다음 $y$ 로 미분합니다. 클래로 정리에 의해 $f_{xy} = f_{yx}$ 입니다."
            },
            {
                "title": "[응용] 연쇄법칙을 사용한 편미분",
                "problem": "$f(x,y) = e^{x^2 + y^2}$ 의 $\\dfrac{\\partial f}{\\partial x}$ 와 $\\dfrac{\\partial f}{\\partial y}$ 를 구하시오.",
                "steps": [
                    "$u = x^2 + y^2$ 으로 놓으면 $f = e^u$.",
                    "$\\dfrac{\\partial f}{\\partial x} = e^u \\cdot \\dfrac{\\partial u}{\\partial x} = e^{x^2+y^2} \\cdot 2x = 2x e^{x^2+y^2}$.",
                    "$\\dfrac{\\partial f}{\\partial y} = e^u \\cdot \\dfrac{\\partial u}{\\partial y} = e^{x^2+y^2} \\cdot 2y = 2y e^{x^2+y^2}$."
                ],
                "answer": "$f_x = 2x e^{x^2+y^2},\\ f_y = 2y e^{x^2+y^2}$",
                "lesson": "합성함수의 편미분에서는 연쇄법칙이 필수입니다. 바깥 함수를 미분한 뒤 안쪽 함수의 편미분을 곱합니다."
            },
            {
                "title": "[응용] 음함수의 편미분",
                "problem": "$F(x,y) = x^2 + xy + y^2 - 7 = 0$ 에서 $\\dfrac{dy}{dx}$ 를 음함수 미분법으로 구하시오.",
                "steps": [
                    "$F_x = 2x + y$, $F_y = x + 2y$.",
                    "음함수 정리에 의해 $\\dfrac{dy}{dx} = -\\dfrac{F_x}{F_y} = -\\dfrac{2x + y}{x + 2y}$.",
                    "이 결과는 $x + 2y \\neq 0$ 인 점에서 유효하다."
                ],
                "answer": "$\\dfrac{dy}{dx} = -\\dfrac{2x + y}{x + 2y}$",
                "lesson": "음함수 정리를 사용하면 $y$ 를 $x$ 의 함수로 명시적으로 풀지 않고도 미분을 구할 수 있습니다. $\\dfrac{dy}{dx} = -\\dfrac{F_x}{F_y}$ 공식을 기억하세요."
            },
            {
                "title": "[심화] 라플라시안 검증",
                "problem": "$f(x,y) = \\ln(x^2 + y^2)$ 가 $(0,0)$ 을 제외한 영역에서 $\\nabla^2 f = f_{xx} + f_{yy} = 0$ (조화함수)임을 보이시오.",
                "steps": [
                    "$f_x = \\dfrac{2x}{x^2 + y^2}$. 몫의 미분법으로 $f_{xx} = \\dfrac{2(x^2+y^2) - 2x \\cdot 2x}{(x^2+y^2)^2} = \\dfrac{2y^2 - 2x^2}{(x^2+y^2)^2}$.",
                    "대칭성에 의해 $f_y = \\dfrac{2y}{x^2 + y^2}$, $f_{yy} = \\dfrac{2x^2 - 2y^2}{(x^2+y^2)^2}$.",
                    "$f_{xx} + f_{yy} = \\dfrac{2y^2 - 2x^2}{(x^2+y^2)^2} + \\dfrac{2x^2 - 2y^2}{(x^2+y^2)^2} = 0$.",
                    "따라서 $\\nabla^2 f = 0$ 이므로 조화함수이다."
                ],
                "answer": "$\\nabla^2 f = f_{xx} + f_{yy} = 0$ (조화함수)",
                "lesson": "$\\ln(x^2 + y^2)$ 는 2차원 라플라스 방정식의 기본 해로, 전자기학과 유체역학에서 중요한 역할을 합니다. 몫의 미분법을 정확히 적용하는 것이 핵심입니다."
            }
        ],
        "problems": [
            {
                "id": "2-1",
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
                "id": "2-2",
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
                "id": "2-3",
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
                "id": "2-4",
                "type": "number",
                "difficulty": 1,
                "question": "$f(x,y) = 3x^2 + 5y$ 의 $\\dfrac{\\partial f}{\\partial y}$ 의 값은?",
                "answer": "5",
                "hints": [
                    "$x$ 를 상수로 두고 $y$ 로 미분하세요.",
                    "$3x^2$ 은 $y$ 에 대해 상수이므로 미분하면 $0$ 입니다."
                ],
                "explanation": "$\\dfrac{\\partial f}{\\partial y} = 0 + 5 = 5$. $3x^2$ 은 $y$ 를 포함하지 않으므로 $y$ 로 미분하면 $0$ 이고, $5y$ 를 미분하면 $5$ 입니다.",
                "wrongAnalysis": "$3x^2$ 항을 $x$ 로 미분하여 $6x$ 를 포함시키는 실수가 있습니다. $\\dfrac{\\partial}{\\partial y}$ 이므로 $x$ 는 상수입니다."
            },
            {
                "id": "2-5",
                "type": "choice",
                "difficulty": 2,
                "question": "$f(x,y) = \\ln(x^2 + y)$ 의 $\\dfrac{\\partial f}{\\partial x}$ 는?",
                "choices": [
                    "$\\dfrac{2x}{x^2 + y}$",
                    "$\\dfrac{1}{x^2 + y}$",
                    "$\\dfrac{2x}{x + y}$",
                    "$\\dfrac{x}{x^2 + y}$"
                ],
                "answer": "$\\dfrac{2x}{x^2 + y}$",
                "hints": [
                    "$\\ln u$ 의 미분은 $\\dfrac{1}{u} \\cdot u'$ 입니다.",
                    "$u = x^2 + y$ 의 $x$ 미분은 $2x$ 입니다."
                ],
                "explanation": "연쇄법칙을 적용하면 $\\dfrac{\\partial f}{\\partial x} = \\dfrac{1}{x^2+y} \\cdot 2x = \\dfrac{2x}{x^2+y}$ 입니다.",
                "wrongAnalysis": "$x^2$ 의 $x$ 미분을 $x$ 로 잘못 계산하면 $\\dfrac{x}{x^2+y}$ 가 나옵니다. $x^2$ 의 미분은 $2x$ 입니다."
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
            "nextConnection": "$x,\\ y$ 방향 모두의 변화율을 모은 벡터가 곧 다음 단원에서 모든 방향의 변화를 한꺼번에 표현하는 전미분과 연쇄법칙을 배웁니다."
        }
    },
    {
        "id": 3,
        "title": "전미분과 연쇄법칙",
        "category": "다변수 미적분",
        "level": "고급",
        "question": "다변수 함수의 전체 변화량은 어떻게 표현하고, 합성함수의 미분은 어떻게 할까?",
        "concept": {
            "intro": "편미분은 한 변수만 변할 때의 변화율입니다. 그런데 실제로는 $x$와 $y$가 동시에 변합니다. 이때 $F(x,y)$의 전체 변화량을 나타내는 것이 전미분(total differential)입니다.\n\n:::definition[전미분]\n$$dF = \\frac{\\partial F}{\\partial x}\\,dx + \\frac{\\partial F}{\\partial y}\\,dy = F_x\\,dx + F_y\\,dy$$\n여기서 $dx$, $dy$는 각각 $x$, $y$의 미소 변화량입니다. 전미분은 '각 방향의 편미분 기여를 합산'한 것입니다.\n:::\n\n:::theorem[다변수 연쇄법칙]\n$z = f(x,y)$에서 $x = x(t)$, $y = y(t)$이면:\n$$\\frac{dz}{dt} = \\frac{\\partial f}{\\partial x}\\frac{dx}{dt} + \\frac{\\partial f}{\\partial y}\\frac{dy}{dt}$$\n더 일반적으로 $x = x(s,t)$, $y = y(s,t)$이면:\n$$\\frac{\\partial z}{\\partial s} = f_x \\frac{\\partial x}{\\partial s} + f_y \\frac{\\partial y}{\\partial s}$$\n:::\n\n:::note[완전미분방정식과의 관계]\n전미분은 미분방정식에서 $M\\,dx + N\\,dy = 0$ 형태의 완전미분방정식과 직결됩니다. $dF = M\\,dx + N\\,dy$이면 해는 $F(x,y) = C$입니다.\n:::",
            "intuition": "산의 높이 $h(x,y)$에서 동쪽으로 $dx$, 북쪽으로 $dy$ 만큼 이동하면, 높이 변화는 '동쪽 경사 $\\times$ 동쪽 이동 $+$ 북쪽 경사 $\\times$ 북쪽 이동'입니다. 이것이 $dh = h_x\\,dx + h_y\\,dy$입니다.",
            "formula": "dF = F_x\\,dx + F_y\\,dy\n\\frac{dz}{dt} = \\frac{\\partial f}{\\partial x}\\frac{dx}{dt} + \\frac{\\partial f}{\\partial y}\\frac{dy}{dt}",
            "summary": ":::note[핵심 요약]\n전미분 $dF = F_x\\,dx + F_y\\,dy$는 다변수 함수의 전체 변화량이다. 다변수 연쇄법칙은 합성함수의 미분을 편미분의 합으로 표현한다.\n:::"
        },
        "examples": [
            {
                "title": "전미분 계산",
                "problem": "$F(x,y) = x^2y + y^3$의 전미분 $dF$를 구하시오.",
                "steps": [
                    "$F_x = 2xy$, $F_y = x^2 + 3y^2$.",
                    "$dF = 2xy\\,dx + (x^2 + 3y^2)\\,dy$."
                ],
                "answer": "$dF = 2xy\\,dx + (x^2 + 3y^2)\\,dy$",
                "lesson": "전미분은 각 편미분에 해당 미분소를 곱해 합산한 것입니다."
            },
            {
                "title": "[기본] 전미분을 이용한 근사",
                "problem": "$f(x,y) = x^2 y$ 에서 $(2,3)$ 근처의 $(2.01, 2.98)$ 에서의 함숫값을 전미분으로 근사하시오.",
                "steps": [
                    "$f(2,3) = 4 \\times 3 = 12$, $dx = 0.01$, $dy = -0.02$.",
                    "$f_x = 2xy = 12$, $f_y = x^2 = 4$ ($(2,3)$ 에서).",
                    "$df = 12 \\times 0.01 + 4 \\times (-0.02) = 0.12 - 0.08 = 0.04$.",
                    "$f(2.01, 2.98) \\approx 12 + 0.04 = 12.04$."
                ],
                "answer": "$f(2.01, 2.98) \\approx 12.04$",
                "lesson": "전미분 $df$ 는 함숫값의 변화량을 선형 근사합니다. $dx$, $dy$ 가 작을수록 근사 정확도가 높아집니다."
            },
            {
                "title": "[응용] 두 매개변수에 대한 연쇄법칙",
                "problem": "$z = x^2 + y^2$, $x = s\\cos t$, $y = s\\sin t$ 일 때 $\\dfrac{\\partial z}{\\partial s}$ 를 구하시오.",
                "steps": [
                    "$\\dfrac{\\partial z}{\\partial s} = \\dfrac{\\partial z}{\\partial x}\\dfrac{\\partial x}{\\partial s} + \\dfrac{\\partial z}{\\partial y}\\dfrac{\\partial y}{\\partial s}$.",
                    "$z_x = 2x$, $z_y = 2y$, $\\dfrac{\\partial x}{\\partial s} = \\cos t$, $\\dfrac{\\partial y}{\\partial s} = \\sin t$.",
                    "$\\dfrac{\\partial z}{\\partial s} = 2x \\cos t + 2y \\sin t = 2s\\cos^2 t + 2s\\sin^2 t = 2s$.",
                    "검산: $z = s^2\\cos^2 t + s^2\\sin^2 t = s^2$ 이므로 $\\dfrac{\\partial z}{\\partial s} = 2s$ ✓."
                ],
                "answer": "$\\dfrac{\\partial z}{\\partial s} = 2s$",
                "lesson": "매개변수가 두 개일 때는 편미분 연쇄법칙을 사용합니다. 직접 대입한 뒤 미분하여 검산하는 습관을 들이세요."
            },
            {
                "title": "[응용] 3변수 함수의 전미분",
                "problem": "$F(x,y,z) = x^2 yz + \\sin(yz)$ 의 전미분 $dF$ 를 구하시오.",
                "steps": [
                    "$F_x = 2xyz$.",
                    "$F_y = x^2 z + z\\cos(yz)$.",
                    "$F_z = x^2 y + y\\cos(yz)$.",
                    "$dF = 2xyz\\,dx + (x^2 z + z\\cos(yz))\\,dy + (x^2 y + y\\cos(yz))\\,dz$."
                ],
                "answer": "$dF = 2xyz\\,dx + (x^2 z + z\\cos(yz))\\,dy + (x^2 y + y\\cos(yz))\\,dz$",
                "lesson": "3변수 함수의 전미분은 $dF = F_x\\,dx + F_y\\,dy + F_z\\,dz$ 로, 각 편미분에 해당 미분소를 곱해 합산합니다. 삼각함수 합성에서 연쇄법칙에 유의하세요."
            },
            {
                "title": "[심화] 음함수 정리와 연쇄법칙의 결합",
                "problem": "$F(x,y) = x^3 + y^3 - 3xy = 0$ 에서 $\\dfrac{d^2 y}{dx^2}$ 를 구하시오.",
                "steps": [
                    "$F_x = 3x^2 - 3y$, $F_y = 3y^2 - 3x$ 이므로 $\\dfrac{dy}{dx} = -\\dfrac{F_x}{F_y} = -\\dfrac{x^2 - y}{y^2 - x}$.",
                    "$A = y - x^2$, $B = y^2 - x$ 로 두면 $y' = A/B$ 입니다.",
                    "몫의 미분법: $y'' = \\dfrac{(y'-2x)B - A(2yy'-1)}{B^2}$.",
                    "$y'=A/B$ 를 대입하면 $y'' = \\dfrac{2AB - 2xB^2 - 2yA^2}{B^3}$. 제약식 $x^3+y^3=3xy$ 를 이용해 분자를 정리하면 $-2xy$가 됩니다."
                ],
                "answer": "$\\dfrac{d^2 y}{dx^2} = -\\dfrac{2xy}{(y^2-x)^3}$",
                "lesson": "2계 도함수를 음함수에서 구할 때는 1계 도함수를 다시 미분한 뒤, 원래의 제약 조건 $F=0$ 을 활용하여 정리합니다. 계산이 복잡하므로 단계별로 차분히 진행하세요."
            }
        ],
        "problems": [
            {
                "id": "3-1",
                "type": "choice",
                "difficulty": 1,
                "question": "$f(x,y) = x^2 + xy$의 전미분 $df$는?",
                "choices": [
                    "$(2x+y)\\,dx + x\\,dy$",
                    "$2x\\,dx + y\\,dy$",
                    "$(2x+y)\\,dx + (x+1)\\,dy$",
                    "$x\\,dx + (2x+y)\\,dy$"
                ],
                "answer": "$(2x+y)\\,dx + x\\,dy$",
                "hints": [
                    "$f_x = 2x + y$, $f_y = x$.",
                    "$df = f_x\\,dx + f_y\\,dy$."
                ],
                "explanation": "$f_x = 2x+y$, $f_y = x$이므로 $df = (2x+y)\\,dx + x\\,dy$.",
                "wrongAnalysis": "$f_y$에서 $y$를 미분하여 $1$을 추가하는 실수가 있습니다. $xy$를 $y$로 미분하면 $x$이지 $x+1$이 아닙니다."
            },
            {
                "id": "3-2",
                "type": "text",
                "difficulty": 2,
                "question": "$z = x^2y$, $x = t^2$, $y = t^3$일 때 $\\frac{dz}{dt}$를 $t$로 나타내시오. (예: 5t^6)",
                "answer": "7t^6",
                "hints": [
                    "$\\frac{\\partial z}{\\partial x} = 2xy$, $\\frac{\\partial z}{\\partial y} = x^2$.",
                    "$\\frac{dx}{dt} = 2t$, $\\frac{dy}{dt} = 3t^2$.",
                    "대입 후 정리: $2(t^2)(t^3)(2t) + (t^4)(3t^2) = 4t^6 + 3t^6$."
                ],
                "explanation": "연쇄법칙: $\\frac{dz}{dt} = 2xy \\cdot 2t + x^2 \\cdot 3t^2 = 2t^5 \\cdot 2t + t^4 \\cdot 3t^2 = 4t^6 + 3t^6 = 7t^6$. 검산: $z = t^4 \\cdot t^3 = t^7$이므로 $dz/dt = 7t^6$.",
                "wrongAnalysis": "편미분과 일반 미분을 섞어서 계산하는 실수가 있습니다."
            },
            {
                "id": "3-3",
                "type": "number",
                "difficulty": 3,
                "question": "$f(x,y) = e^{xy}$에서 $(1,1)$, $dx = 0.1$, $dy = -0.1$일 때 $df$의 근삿값은?",
                "answer": "0",
                "hints": [
                    "$f_x = ye^{xy}$, $f_y = xe^{xy}$.",
                    "$(1,1)$에서 $f_x = e$, $f_y = e$.",
                    "$df = e(0.1) + e(-0.1) = 0$."
                ],
                "explanation": "$df = e \\cdot 0.1 + e \\cdot (-0.1) = 0$. $dx$와 $dy$의 기여가 정확히 상쇄.",
                "wrongAnalysis": "$f_x$와 $f_y$의 값이 같은 점에서 $dx = -dy$이면 $df = 0$이 됩니다."
            },
            {
                "id": "3-4",
                "type": "text",
                "difficulty": 1,
                "question": "$F(x,y) = x^2 + y^2$ 의 전미분 $dF$ 를 구하시오. (예: 2x*dx+2y*dy)",
                "answer": "2x*dx+2y*dy",
                "hints": [
                    "$F_x = 2x$, $F_y = 2y$ 를 구하세요.",
                    "$dF = F_x\\,dx + F_y\\,dy$ 에 대입하세요."
                ],
                "explanation": "$F_x = 2x$, $F_y = 2y$ 이므로 $dF = 2x\\,dx + 2y\\,dy$ 입니다. 전미분은 각 편미분에 해당 미분소를 곱해 합산한 것입니다.",
                "wrongAnalysis": "전미분을 단순히 일반 미분처럼 $2x + 2y$ 로 쓰는 실수가 있습니다. 반드시 $dx$, $dy$ 를 곱해야 합니다."
            },
            {
                "id": "3-5",
                "type": "number",
                "difficulty": 2,
                "question": "$z = xy^2$, $x = 2t$, $y = t^2$ 일 때 $t = 1$ 에서 $\\dfrac{dz}{dt}$ 의 값은?",
                "answer": "10",
                "hints": [
                    "연쇄법칙: $\\dfrac{dz}{dt} = \\dfrac{\\partial z}{\\partial x}\\dfrac{dx}{dt} + \\dfrac{\\partial z}{\\partial y}\\dfrac{dy}{dt}$.",
                    "$t=1$ 에서 $x=2$, $y=1$ 이고, $z_x = y^2$, $z_y = 2xy$, $\\dfrac{dx}{dt} = 2$, $\\dfrac{dy}{dt} = 2t = 2$ 를 대입하세요."
                ],
                "explanation": "$z_x = y^2 = 1$, $z_y = 2xy = 2(2)(1) = 4$, $\\dfrac{dx}{dt} = 2$, $\\dfrac{dy}{dt} = 2$. 따라서 $\\dfrac{dz}{dt} = 1 \\cdot 2 + 4 \\cdot 2 = 2 + 8 = 10$. 검산: $z = 2t \\cdot (t^2)^2 = 2t^5$ 이므로 $\\dfrac{dz}{dt} = 10t^4 = 10$ 으로 일치합니다.",
                "wrongAnalysis": "편미분을 구한 뒤 $t$ 에서의 값으로 $x$, $y$ 를 변환하는 것을 잊어 변수가 섞이는 실수가 흔합니다."
            }
        ],
        "summary": {
            "keyPoints": [
                "전미분 $dF = F_x\\,dx + F_y\\,dy$는 전체 변화량.",
                "다변수 연쇄법칙: $\\frac{dz}{dt} = f_x \\frac{dx}{dt} + f_y \\frac{dy}{dt}$.",
                "전미분은 미분방정식의 완전미분과 직결된다."
            ],
            "formulas": [
                "dF = F_x\\,dx + F_y\\,dy",
                "\\frac{dz}{dt} = f_x \\frac{dx}{dt} + f_y \\frac{dy}{dt}"
            ],
            "commonMistakes": [
                "전미분에서 편미분 계산 실수",
                "연쇄법칙에서 항을 빠뜨리는 실수"
            ],
            "nextConnection": "전미분을 알았으니, 다음 단원에서 편미분을 벡터로 모은 그래디언트와 방향도함수를 배웁니다."
        }
    },
    {
        "id": 4,
        "title": "그래디언트",
        "category": "다변수 미적분",
        "level": "고급",
        "question": "모든 방향의 변화율을 한꺼번에 표현하는 객체는 무엇일까?",
        "concept": {
            "intro": ":::definition[그래디언트의 정의]\n그래디언트 $\\nabla f = (f_x, f_y)$ 는 편미분을 모아 만든 벡터입니다.\n:::\n\n:::theorem[그래디언트의 성질]\n$\\nabla f$ 는 함숫값이 가장 빠르게 증가하는 방향을 가리키고, 그 크기는 그 방향의 변화율입니다. 등고선과는 항상 수직입니다.\n:::",
            "intuition": "안개 속 산속에 있다면 어느 방향으로 가야 가장 빠르게 산을 오를 수 있을까요? 발 밑의 그래디언트 벡터를 따라가면 됩니다.",
            "formula": "\\nabla f = \\left(\\frac{\\partial f}{\\partial x},\\ \\frac{\\partial f}{\\partial y}\\right)\nD_{\\mathbf{u}} f = \\nabla f \\cdot \\mathbf{u},\\ |\\mathbf{u}|=1",
            "summary": ":::note[핵심 요약]\n• 편미분을 모은 벡터\n• 가장 빠른 증가 방향\n• 등고선과 수직\n:::",
            "visuals": [
                {
                    "type": "function",
                    "title": "등고선과 그래디언트 방향",
                    "xRange": [-3, 3],
                    "yRange": [-3, 3],
                    "functions": [
                        { "expr": "sqrt(4 - x^2)", "color": "#d1d5db", "label": "x²+y²=4", "domain": [-2, 2] },
                        { "expr": "-sqrt(4 - x^2)", "color": "#d1d5db", "domain": [-2, 2] },
                        { "expr": "sqrt(1 - x^2)", "color": "#94a3b8", "label": "x²+y²=1", "domain": [-1, 1] },
                        { "expr": "-sqrt(1 - x^2)", "color": "#94a3b8", "domain": [-1, 1] }
                    ],
                    "lines": [
                        { "from": [0.707, 0.707], "to": [1.5, 1.5], "color": "#ef4444", "label": "∇f" },
                        { "from": [1, 0], "to": [2, 0], "color": "#ef4444" },
                        { "from": [0, 1], "to": [0, 2], "color": "#ef4444" }
                    ],
                    "points": [
                        { "x": 0.707, "y": 0.707, "color": "#ef4444" },
                        { "x": 1, "y": 0, "color": "#ef4444" },
                        { "x": 0, "y": 1, "color": "#ef4444" }
                    ],
                    "annotations": [
                        { "x": -2, "y": -2.5, "text": "∇f ⊥ 등고선", "color": "#ef4444" }
                    ]
                }
            ]
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
                "title": "[기본] 그래디언트와 등고선의 수직 관계",
                "problem": "$f(x,y) = 2x + 3y$ 의 그래디언트를 구하고, 등고선 $f = 6$ 과 수직인지 확인하시오.",
                "steps": [
                    "$\\nabla f = (f_x, f_y) = (2, 3)$.",
                    "등고선 $2x + 3y = 6$ 의 방향벡터: $y = -\\dfrac{2}{3}x + 2$ 이므로 기울기 $-\\dfrac{2}{3}$, 방향벡터 $(3, -2)$.",
                    "내적 확인: $(2, 3) \\cdot (3, -2) = 6 - 6 = 0$.",
                    "내적이 $0$ 이므로 그래디언트는 등고선과 수직이다."
                ],
                "answer": "$\\nabla f = (2, 3)$, 등고선과 수직",
                "lesson": "그래디언트는 항상 등고선에 수직입니다. 이것은 그래디언트가 함숫값이 가장 빠르게 증가하는 방향을 가리키기 때문입니다."
            },
            {
                "title": "[응용] 방향도함수의 최댓값",
                "problem": "$f(x,y) = x^2 - xy + y^2$ 의 $(1,1)$ 에서 방향도함수가 최대가 되는 방향과 그 값을 구하시오.",
                "steps": [
                    "$f_x = 2x - y$, $f_y = -x + 2y$.",
                    "$(1,1)$ 에서 $\\nabla f = (2-1, -1+2) = (1, 1)$.",
                    "방향도함수가 최대인 방향은 그래디언트 방향: $\\dfrac{(1,1)}{|(1,1)|} = \\left(\\dfrac{1}{\\sqrt{2}}, \\dfrac{1}{\\sqrt{2}}\\right)$.",
                    "최대 방향도함수 값 $= |\\nabla f| = \\sqrt{1^2 + 1^2} = \\sqrt{2}$."
                ],
                "answer": "방향 $\\left(\\dfrac{1}{\\sqrt{2}}, \\dfrac{1}{\\sqrt{2}}\\right)$, 최대 방향도함수 $= \\sqrt{2}$",
                "lesson": "방향도함수의 최댓값은 그래디언트의 크기이고, 그 방향은 그래디언트 방향입니다. 최솟값은 $-|\\nabla f|$ 이며 반대 방향입니다."
            },
            {
                "title": "[응용] 3차원 그래디언트",
                "problem": "$f(x,y,z) = x^2 + y^2 + z^2$ 의 점 $(1, 2, 2)$ 에서의 그래디언트와 그 크기를 구하시오.",
                "steps": [
                    "$\\nabla f = (2x, 2y, 2z)$.",
                    "$(1, 2, 2)$ 에서 $\\nabla f = (2, 4, 4)$.",
                    "$|\\nabla f| = \\sqrt{4 + 16 + 16} = \\sqrt{36} = 6$."
                ],
                "answer": "$\\nabla f(1,2,2) = (2, 4, 4)$, $|\\nabla f| = 6$",
                "lesson": "3변수 함수의 그래디언트도 같은 원리입니다. 이 경우 등위면 $x^2 + y^2 + z^2 = 9$ (구면)에 수직인 벡터가 $(2, 4, 4)$ 입니다."
            },
            {
                "title": "[심화] 등고선에 접하는 방향의 방향도함수",
                "problem": "$f(x,y) = x^2 y$ 의 $(2,1)$ 에서, 등고선 $f = 4$ 에 접하는 방향으로의 방향도함수를 구하시오.",
                "steps": [
                    "$\\nabla f = (2xy, x^2)$. $(2,1)$ 에서 $\\nabla f = (4, 4)$.",
                    "등고선에 접하는 방향은 그래디언트에 수직: $(4, -4)$ 또는 $(-4, 4)$.",
                    "단위벡터로 정규화: $\\mathbf{u} = \\dfrac{(4, -4)}{\\sqrt{32}} = \\left(\\dfrac{1}{\\sqrt{2}}, -\\dfrac{1}{\\sqrt{2}}\\right)$.",
                    "$D_{\\mathbf{u}} f = \\nabla f \\cdot \\mathbf{u} = (4, 4) \\cdot \\left(\\dfrac{1}{\\sqrt{2}}, -\\dfrac{1}{\\sqrt{2}}\\right) = \\dfrac{4}{\\sqrt{2}} - \\dfrac{4}{\\sqrt{2}} = 0$."
                ],
                "answer": "$D_{\\mathbf{u}} f = 0$",
                "lesson": "등고선 위를 따라 이동하면 함숫값이 변하지 않으므로, 등고선 접선 방향의 방향도함수는 항상 $0$ 입니다. 이것은 $\\nabla f \\perp$ 등고선의 직접적인 결과입니다."
            }
        ],
        "problems": [
            {
                "id": "4-1",
                "type": "text",
                "difficulty": 1,
                "question": "$f(x,y) = 3x + 4y$ 의 그래디언트를 $(a,b)$ 형태로 적으시오. (예: (1,2))",
                "answer": "(3,4)",
                "hints": [
                    "그래디언트는 $\\nabla f=(f_x,f_y)$입니다.",
                    "$3x$를 $x$로, $4y$를 $y$로 각각 편미분하세요."
                ],
                "explanation": "$f_x=3$, $f_y=4$이므로 $\\nabla f=(3,4)$입니다. 일차함수의 그래디언트는 위치에 따라 변하지 않는 상수 벡터입니다.",
                "wrongAnalysis": "$(3x, 4y)$ 처럼 변수가 남는 실수가 있는데, 일차함수의 그래디언트는 상수 벡터입니다."
            },
            {
                "id": "4-2",
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
                "id": "4-3",
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
                "id": "4-4",
                "type": "choice",
                "difficulty": 1,
                "question": "$f(x,y) = x^2 + y^2$ 의 그래디언트 $\\nabla f$ 는?",
                "choices": [
                    "$(2x, 2y)$",
                    "$(x^2, y^2)$",
                    "$(2, 2)$",
                    "$(x, y)$"
                ],
                "answer": "$(2x, 2y)$",
                "hints": [
                    "$f_x$ 와 $f_y$ 를 각각 구하세요.",
                    "$f_x = 2x$, $f_y = 2y$ 입니다."
                ],
                "explanation": "$\\nabla f = (f_x, f_y) = (2x, 2y)$. 그래디언트는 각 편미분을 성분으로 하는 벡터입니다.",
                "wrongAnalysis": "$(x, y)$ 를 선택하면 $x^2$ 의 미분을 $x$ 로 잘못 한 것입니다. $x^2$ 의 미분은 $2x$ 입니다."
            },
            {
                "id": "4-5",
                "type": "number",
                "difficulty": 2,
                "question": "$f(x,y) = x^2 + y^2$ 의 $(1,1)$ 에서 방향 $\\left(\\dfrac{1}{\\sqrt{2}},\\dfrac{1}{\\sqrt{2}}\\right)$ 으로의 방향도함수는? (소수 넷째자리)",
                "answer": "2.8284",
                "hints": [
                    "$\\nabla f(1,1) = (2, 2)$ 이고, 주어진 방향은 이미 단위벡터입니다.",
                    "$D_{\\mathbf{u}} f = (2, 2) \\cdot \\left(\\dfrac{1}{\\sqrt{2}}, \\dfrac{1}{\\sqrt{2}}\\right) = \\dfrac{2}{\\sqrt{2}} + \\dfrac{2}{\\sqrt{2}}$."
                ],
                "explanation": "$D_{\\mathbf{u}} f = (2,2) \\cdot \\left(\\dfrac{1}{\\sqrt{2}}, \\dfrac{1}{\\sqrt{2}}\\right) = \\dfrac{4}{\\sqrt{2}} = 2\\sqrt{2} \\approx 2.8284$. 이 방향은 그래디언트 방향과 같으므로 최대 증가율입니다.",
                "wrongAnalysis": "단위벡터를 정규화하지 않고 $(1, 1)$ 을 그대로 사용하면 $2 + 2 = 4$ 로 잘못된 값을 얻습니다."
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
            "nextConnection": "이제 평면이나 공간 위에서 적분을 합니다. 다음 단원에서 다변수 함수의 극값과 라그랑주 승수법을 배웁니다."
        }
    },
    {
        "id": 5,
        "title": "극값과 라그랑주 승수법",
        "category": "다변수 미적분",
        "level": "고급",
        "question": "다변수 함수의 최대·최소는 어떻게 찾고, 제약 조건이 있으면 어떻게 할까?",
        "concept": {
            "intro": "일변수에서 극값은 $f'(x) = 0$인 점에서 찾았습니다. 다변수에서는 $\\nabla f = \\mathbf{0}$, 즉 모든 편미분이 $0$인 점이 임계점(critical point)입니다.\n\n:::theorem[2차 판별법]\n이변수 함수 $f(x,y)$의 임계점 $(a,b)$에서 $D = f_{xx}f_{yy} - (f_{xy})^2$를 계산합니다.\n- $D > 0$이고 $f_{xx} > 0$: 극소\n- $D > 0$이고 $f_{xx} < 0$: 극대\n- $D < 0$: 안장점(saddle point)\n- $D = 0$: 판별 불가\n:::\n\n:::theorem[라그랑주 승수법]\n제약 조건 $g(x,y) = 0$ 하에서 $f(x,y)$의 극값을 찾으려면, $\\nabla f = \\lambda \\nabla g$와 $g = 0$을 연립하여 풉니다. $\\lambda$를 라그랑주 승수라 합니다.\n:::",
            "intuition": "산 위에서 가장 높은 곳은 모든 방향의 경사가 $0$인 곳입니다. 안장점은 한 방향으로는 올라가고 다른 방향으로는 내려가는 '말 안장' 모양입니다. 라그랑주 승수법은 '도로(제약 조건) 위에서만 움직일 때 가장 높은 곳'을 찾는 것입니다.",
            "formula": "\\nabla f = \\mathbf{0}\\ (\\text{임계점})\nD = f_{xx}f_{yy} - (f_{xy})^2\n\\text{라그랑주:}\\ \\nabla f = \\lambda \\nabla g,\\ g(x,y) = 0",
            "summary": ":::note[핵심 요약]\n다변수 극값은 $\\nabla f = 0$인 임계점에서 2차 판별법($D = f_{xx}f_{yy} - f_{xy}^2$)으로 분류한다. 제약 조건이 있으면 라그랑주 승수법 $\\nabla f = \\lambda \\nabla g$를 사용한다.\n:::",
            "visuals": [
                {
                    "type": "geometry",
                    "title": "라그랑주 승수법: ∇f ∥ ∇g 인 점",
                    "xRange": [-4, 4],
                    "yRange": [-4, 4],
                    "shapes": [
                        { "type": "circle", "cx": 0, "cy": 0, "rx": 2, "color": "#ef4444", "fill": "none" },
                        { "type": "ellipse", "cx": 1, "cy": 1, "rx": 1.5, "ry": 1, "color": "#94a3b8", "fill": "none" },
                        { "type": "ellipse", "cx": 1, "cy": 1, "rx": 2.5, "ry": 1.8, "color": "#c4b5fd", "fill": "none" }
                    ],
                    "lines": [
                        { "from": [1.2, 1.6], "to": [2, 2.6], "color": "#6366f1", "label": "∇f" },
                        { "from": [1.2, 1.6], "to": [1.8, 2.4], "color": "#ef4444", "label": "∇g" }
                    ],
                    "points": [
                        { "x": 1.2, "y": 1.6, "label": "극값 후보", "color": "#f59e0b" }
                    ],
                    "annotations": [
                        { "x": -2.5, "y": -3, "text": "제약조건 g=0 (원)", "color": "#ef4444" },
                        { "x": 2.5, "y": -3, "text": "등고선 f=c", "color": "#94a3b8" }
                    ]
                }
            ]
        },
        "examples": [
            {
                "title": "2차 판별법으로 극값 분류",
                "problem": "$f(x,y) = x^2 + y^2 - 2x$의 극값을 구하시오.",
                "steps": [
                    "$f_x = 2x - 2 = 0$, $f_y = 2y = 0$ → 임계점 $(1, 0)$.",
                    "$f_{xx} = 2$, $f_{yy} = 2$, $f_{xy} = 0$.",
                    "$D = 4 > 0$이고 $f_{xx} > 0$ → 극소.",
                    "$f(1,0) = -1$."
                ],
                "answer": "극소 $f(1,0) = -1$",
                "lesson": "$D > 0$이면 극값이 존재하고, $f_{xx}$의 부호로 극대/극소를 구별합니다."
            },
            {
                "title": "[기본] 임계점 찾기",
                "problem": "$f(x,y) = x^2 + y^2 + 4x - 6y + 13$ 의 임계점과 극값을 구하시오.",
                "steps": [
                    "$f_x = 2x + 4 = 0 \\Rightarrow x = -2$.",
                    "$f_y = 2y - 6 = 0 \\Rightarrow y = 3$.",
                    "임계점 $(-2, 3)$. $f_{xx} = 2$, $f_{yy} = 2$, $f_{xy} = 0$.",
                    "$D = 2 \\cdot 2 - 0 = 4 > 0$, $f_{xx} > 0$ 이므로 극소.",
                    "$f(-2, 3) = 4 + 9 - 8 - 18 + 13 = 0$."
                ],
                "answer": "극소 $f(-2, 3) = 0$",
                "lesson": "2차 함수의 임계점은 완전제곱식으로 바꿔 확인할 수 있습니다. $f = (x+2)^2 + (y-3)^2$ 이므로 최솟값이 $0$ 입니다."
            },
            {
                "title": "[응용] 안장점 판별",
                "problem": "$f(x,y) = x^3 - 3xy^2$ 의 임계점을 모두 찾고 분류하시오.",
                "steps": [
                    "$f_x = 3x^2 - 3y^2 = 0 \\Rightarrow x^2 = y^2$.",
                    "$f_y = -6xy = 0 \\Rightarrow x = 0$ 또는 $y = 0$.",
                    "$x = 0$: $y^2 = 0 \\Rightarrow y = 0$. $y = 0$: $x^2 = 0 \\Rightarrow x = 0$.",
                    "임계점은 $(0,0)$ 뿐. $f_{xx} = 6x = 0$, $f_{yy} = -6x = 0$, $f_{xy} = -6y = 0$.",
                    "$D = 0 \\cdot 0 - 0 = 0$. 2차 판별법으로 판별 불가."
                ],
                "answer": "임계점 $(0,0)$, 2차 판별법으로 판별 불가 ($D = 0$)",
                "lesson": "$D = 0$ 이면 2차 판별법이 적용되지 않아 다른 방법(방향별 분석 등)이 필요합니다. 이 함수는 실제로 '원숭이 안장(monkey saddle)' 형태입니다."
            },
            {
                "title": "[응용] 라그랑주 승수법 적용",
                "problem": "원 $x^2 + y^2 = 1$ 위에서 $f(x,y) = x + 2y$ 의 최댓값을 구하시오.",
                "steps": [
                    "$\\nabla f = (1, 2)$, $g(x,y) = x^2 + y^2 - 1$, $\\nabla g = (2x, 2y)$.",
                    "$\\nabla f = \\lambda \\nabla g$: $1 = 2\\lambda x$, $2 = 2\\lambda y$.",
                    "두 식에서 $\\dfrac{1}{2\\lambda} = x$, $\\dfrac{1}{\\lambda} = y$ 이므로 $y = 2x$.",
                    "$g = 0$: $x^2 + 4x^2 = 1 \\Rightarrow x^2 = \\dfrac{1}{5}$, $x = \\dfrac{1}{\\sqrt{5}}$ (양).",
                    "$f = \\dfrac{1}{\\sqrt{5}} + \\dfrac{4}{\\sqrt{5}} = \\dfrac{5}{\\sqrt{5}} = \\sqrt{5}$."
                ],
                "answer": "최댓값 $\\sqrt{5}$",
                "lesson": "라그랑주 승수법에서 $\\nabla f = \\lambda \\nabla g$ 의 비례 관계를 이용하여 변수 간 관계를 도출하고, 제약 조건에 대입하여 풉니다."
            },
            {
                "title": "[심화] 두 개의 제약 조건과 라그랑주 승수",
                "problem": "구면 $x^2 + y^2 + z^2 = 1$ 과 평면 $x + y + z = 0$ 의 교선 위에서 $f(x,y,z) = x$ 의 최댓값을 구하시오.",
                "steps": [
                    "$g_1 = x^2 + y^2 + z^2 - 1 = 0$, $g_2 = x + y + z = 0$.",
                    "$\\nabla f = \\lambda_1 \\nabla g_1 + \\lambda_2 \\nabla g_2$: $(1, 0, 0) = \\lambda_1 (2x, 2y, 2z) + \\lambda_2 (1, 1, 1)$.",
                    "$y$: $0 = 2\\lambda_1 y + \\lambda_2$, $z$: $0 = 2\\lambda_1 z + \\lambda_2$. 따라서 $y = z$.",
                    "$g_2$: $x + 2y = 0 \\Rightarrow x = -2y$. $g_1$: $4y^2 + y^2 + y^2 = 1 \\Rightarrow y^2 = \\dfrac{1}{6}$.",
                    "$x = -2y$ 이므로 최대: $y = -\\dfrac{1}{\\sqrt{6}}$, $x = \\dfrac{2}{\\sqrt{6}} = \\sqrt{\\dfrac{2}{3}}$."
                ],
                "answer": "최댓값 $\\sqrt{\\dfrac{2}{3}} = \\dfrac{\\sqrt{6}}{3}$",
                "lesson": "제약 조건이 두 개일 때는 라그랑주 승수도 두 개($\\lambda_1, \\lambda_2$) 사용합니다. $\\nabla f = \\lambda_1 \\nabla g_1 + \\lambda_2 \\nabla g_2$ 를 풀면 됩니다."
            }
        ],
        "problems": [
            {
                "id": "5-1",
                "type": "choice",
                "difficulty": 2,
                "question": "$f(x,y) = x^2 - y^2$의 원점 $(0,0)$은?",
                "choices": ["극대", "극소", "안장점", "판별 불가"],
                "answer": "안장점",
                "hints": ["$f_{xx} = 2$, $f_{yy} = -2$, $f_{xy} = 0$.", "$D = -4 < 0$."],
                "explanation": "$D = -4 < 0$이므로 안장점.",
                "wrongAnalysis": "$f(0,0) = 0$이므로 극소라고 착각하는 실수가 있습니다."
            },
            {
                "id": "5-2",
                "type": "number",
                "difficulty": 2,
                "question": "$f(x,y) = x^2 + 2y^2 - 4x$의 극소값은?",
                "answer": "-4",
                "hints": ["$f_x = 2x-4 = 0$, $f_y = 4y = 0$.", "임계점 $(2,0)$.", "$f(2,0) = 4+0-8$"],
                "explanation": "임계점 $(2,0)$에서 $D = 8 > 0$, $f_{xx} = 2 > 0$이므로 극소. $f(2,0) = -4$.",
                "wrongAnalysis": "$f_{xx}$와 $f_{yy}$를 곱하지 않고 더하는 실수가 있습니다."
            },
            {
                "id": "5-3",
                "type": "number",
                "difficulty": 3,
                "question": "제약 조건 $x + y = 1$ 하에서 $f(x,y) = xy$의 최대값은?",
                "answer": "0.25",
                "hints": ["$\\nabla f = (y, x)$, $\\nabla g = (1, 1)$.", "$y = \\lambda$, $x = \\lambda$ → $x = y$.", "$x + y = 1$에서 $x = y = 1/2$."],
                "explanation": "$x = y = 1/2$, $f(1/2,1/2) = 1/4 = 0.25$.",
                "wrongAnalysis": "대입법으로도 풀 수 있지만, 변수가 3개 이상이면 라그랑주가 필수입니다."
            },
            {
                "id": "5-4",
                "type": "text",
                "difficulty": 1,
                "question": "$f(x,y) = x^2 + 4y^2 - 2x + 8y$ 의 임계점을 구하시오. (예: (1,-1))",
                "answer": "(1,-1)",
                "hints": [
                    "$f_x = 2x - 2 = 0$ 에서 $x$ 를, $f_y = 8y + 8 = 0$ 에서 $y$ 를 구하세요.",
                    "$x = 1$, $y = -1$ 입니다."
                ],
                "explanation": "$f_x = 2x - 2 = 0 \\Rightarrow x = 1$, $f_y = 8y + 8 = 0 \\Rightarrow y = -1$. 임계점은 $(1, -1)$ 입니다. $D = f_{xx}f_{yy} - f_{xy}^2 = 2 \\cdot 8 - 0 = 16 > 0$ 이고 $f_{xx} > 0$ 이므로 극소입니다.",
                "wrongAnalysis": "$f_y = 8y + 8 = 0$ 에서 부호를 잘못 처리하여 $y = 1$ 로 구하는 실수가 있습니다."
            },
            {
                "id": "5-5",
                "type": "choice",
                "difficulty": 1,
                "question": "$f(x,y) = xy$ 의 원점 $(0,0)$ 에서의 2차 판별법 결과는?",
                "choices": [
                    "극대",
                    "극소",
                    "안장점",
                    "판별 불가 ($D = 0$)"
                ],
                "answer": "안장점",
                "hints": [
                    "$f_{xx} = 0$, $f_{yy} = 0$, $f_{xy} = 1$ 을 구하세요.",
                    "$D = f_{xx}f_{yy} - f_{xy}^2 = 0 - 1 = -1 < 0$ 입니다."
                ],
                "explanation": "$f_{xx} = 0$, $f_{yy} = 0$, $f_{xy} = 1$ 이므로 $D = 0 \\cdot 0 - 1^2 = -1 < 0$. $D < 0$ 이므로 안장점입니다. 실제로 $f(x,x) = x^2 > 0$ 이고 $f(x,-x) = -x^2 < 0$ 이므로 어느 방향으로 가느냐에 따라 증가하기도 감소하기도 합니다.",
                "wrongAnalysis": "$f_{xx} = 0$, $f_{yy} = 0$ 이라서 $D = 0$ (판별 불가)으로 답하는 실수가 있습니다. $f_{xy}^2 = 1$ 을 빼야 하므로 $D = -1 < 0$ 입니다."
            }
        ],
        "summary": {
            "keyPoints": [
                "임계점: $\\nabla f = 0$.",
                "2차 판별법: $D = f_{xx}f_{yy} - f_{xy}^2$.",
                "라그랑주 승수법: $\\nabla f = \\lambda \\nabla g$, $g = 0$."
            ],
            "formulas": ["D = f_{xx}f_{yy} - (f_{xy})^2", "\\nabla f = \\lambda \\nabla g"],
            "commonMistakes": ["$D$ 공식에서 $f_{xy}^2$ 빠뜨리기", "안장점과 극값 혼동"],
            "nextConnection": "극값을 알았으니, 다음 단원에서 다변수 함수의 적분인 중적분을 배웁니다."
        }
    },
    {
        "id": 6,
        "title": "중적분",
        "category": "다변수 미적분",
        "level": "고급",
        "question": "평면이나 공간 위에서의 적분은 어떻게 정의되고 계산할까?",
        "concept": {
            "intro": ":::definition[이중적분의 정의]\n이중적분 $\\displaystyle\\iint_R f(x,y)\\,dA$ 는 영역 $R$ 위에서 함수 $f$ 를 적분한 것이며, 도형의 부피·면적·평균값을 의미할 수 있습니다.\n:::\n\n:::theorem[푸비니 정리]\n실제 계산은 반복 적분(iterated integral)으로 두 번의 $1$변수 적분을 합니다. 영역이 직사각형이면 푸비니 정리에 의해 순서를 바꿔도 됩니다.\n:::",
            "intuition": "전망대 아래의 도시를 격자로 나누고 각 격자의 인구를 더해 도시 전체 인구를 구하는 것과 같습니다. 격자가 잘게 잘릴수록 정확해집니다.",
            "formula": "\\iint_R f\\,dA = \\int_a^b \\int_c^d f(x,y)\\,dy\\,dx\n\\text{극좌표:}\\ dA = r\\,dr\\,d\\theta",
            "summary": ":::note[핵심 요약]\n• 두 번의 $1$변수 적분\n• 직사각형은 푸비니로 순서 자유\n• 극좌표 변환 시 $r$ 곱하기\n:::",
            "visuals": [
                {
                    "type": "function",
                    "title": "이중적분의 영역 D",
                    "xRange": [-0.5, 3],
                    "yRange": [-0.5, 3],
                    "functions": [
                        { "expr": "x^2", "color": "#6366f1", "label": "y = x²", "domain": [0, 1.5] },
                        { "expr": "2*x", "color": "#ef4444", "label": "y = 2x", "domain": [0, 1.5] }
                    ],
                    "regions": [
                        { "fn": "2*x", "fn2": "x^2", "from": 0, "to": 1.5, "color": "rgba(245,158,11,0.2)" }
                    ],
                    "points": [
                        { "x": 0, "y": 0, "label": "O", "color": "#334155" }
                    ],
                    "annotations": [
                        { "x": 0.7, "y": 0.8, "text": "D", "color": "#f59e0b" }
                    ]
                }
            ]
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
                "title": "[기본] 삼각형 영역 위 이중적분",
                "problem": "$\\displaystyle\\iint_D 1\\,dA$ 를 구하시오. $D$: $0 \\le x \\le 1$, $0 \\le y \\le x$.",
                "steps": [
                    "$\\displaystyle\\int_0^1 \\int_0^x 1\\,dy\\,dx$.",
                    "안쪽: $\\displaystyle\\int_0^x dy = x$.",
                    "바깥: $\\displaystyle\\int_0^1 x\\,dx = \\frac{1}{2}$."
                ],
                "answer": "$\\dfrac{1}{2}$",
                "lesson": "상수 $1$ 의 이중적분은 영역의 넓이입니다. 이 삼각형의 넓이는 $\\frac{1}{2} \\times 1 \\times 1 = \\frac{1}{2}$ 와 일치합니다."
            },
            {
                "title": "[응용] 극좌표로 변환한 이중적분",
                "problem": "$\\displaystyle\\iint_D e^{-(x^2+y^2)}\\,dA$ 를 구하시오. $D$: $x^2 + y^2 \\le 1$.",
                "steps": [
                    "극좌표 변환: $x^2 + y^2 = r^2$, $dA = r\\,dr\\,d\\theta$.",
                    "$\\displaystyle\\int_0^{2\\pi} \\int_0^1 e^{-r^2} \\cdot r\\,dr\\,d\\theta$.",
                    "안쪽: $u = r^2$, $du = 2r\\,dr$ 로 치환. $\\displaystyle\\int_0^1 r e^{-r^2}\\,dr = \\frac{1}{2}(1 - e^{-1})$.",
                    "바깥: $2\\pi \\times \\frac{1}{2}(1 - e^{-1}) = \\pi(1 - e^{-1})$."
                ],
                "answer": "$\\pi(1 - e^{-1})$",
                "lesson": "$e^{-(x^2+y^2)}$ 처럼 $x^2+y^2$ 에만 의존하는 함수는 극좌표로 바꾸면 $r$ 하나의 함수가 되어 적분이 간단해집니다."
            },
            {
                "title": "[응용] 적분 순서 교환",
                "problem": "$\\displaystyle\\int_0^1 \\int_x^1 e^{y^2}\\,dy\\,dx$ 를 적분 순서를 바꾸어 계산하시오.",
                "steps": [
                    "영역 분석: $0 \\le x \\le 1$, $x \\le y \\le 1$. $y$ 기준으로 재설정: $0 \\le y \\le 1$, $0 \\le x \\le y$.",
                    "순서 교환: $\\displaystyle\\int_0^1 \\int_0^y e^{y^2}\\,dx\\,dy$.",
                    "안쪽: $\\displaystyle\\int_0^y e^{y^2}\\,dx = y e^{y^2}$.",
                    "바깥: $\\displaystyle\\int_0^1 y e^{y^2}\\,dy = \\frac{1}{2}e^{y^2}\\Big|_0^1 = \\frac{1}{2}(e - 1)$."
                ],
                "answer": "$\\dfrac{e - 1}{2}$",
                "lesson": "$e^{y^2}$ 는 초등함수로 부정적분이 불가능하지만, 적분 순서를 바꾸면 $ye^{y^2}$ 가 되어 치환적분이 가능해집니다. 적분 순서 교환은 강력한 도구입니다."
            },
            {
                "title": "[심화] 일반 영역에서의 이중적분과 극좌표",
                "problem": "카디오이드 $r = 1 + \\cos\\theta$ 내부의 넓이를 이중적분으로 구하시오.",
                "steps": [
                    "넓이 $= \\displaystyle\\iint_D 1\\,dA = \\int_0^{2\\pi} \\int_0^{1+\\cos\\theta} r\\,dr\\,d\\theta$.",
                    "안쪽: $\\displaystyle\\int_0^{1+\\cos\\theta} r\\,dr = \\frac{(1+\\cos\\theta)^2}{2}$.",
                    "$\\dfrac{1}{2}\\displaystyle\\int_0^{2\\pi} (1+\\cos\\theta)^2\\,d\\theta = \\frac{1}{2}\\int_0^{2\\pi} (1 + 2\\cos\\theta + \\cos^2\\theta)\\,d\\theta$.",
                    "$\\displaystyle\\int_0^{2\\pi} 1\\,d\\theta = 2\\pi$, $\\displaystyle\\int_0^{2\\pi} 2\\cos\\theta\\,d\\theta = 0$, $\\displaystyle\\int_0^{2\\pi} \\cos^2\\theta\\,d\\theta = \\pi$.",
                    "넓이 $= \\dfrac{1}{2}(2\\pi + 0 + \\pi) = \\dfrac{3\\pi}{2}$."
                ],
                "answer": "$\\dfrac{3\\pi}{2}$",
                "lesson": "극좌표에서 적분 상한이 $\\theta$ 에 의존하는 경우가 일반적입니다. 삼각함수의 주기적분 공식을 잘 활용하면 계산이 깔끔해집니다."
            }
        ],
        "problems": [
            {
                "id": "6-1",
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
                "id": "6-2",
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
                "id": "6-3",
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
                "id": "6-4",
                "type": "number",
                "difficulty": 1,
                "question": "$\\displaystyle\\int_0^2 \\int_0^3 1\\,dy\\,dx$ 의 값은?",
                "answer": "6",
                "hints": [
                    "안쪽 적분: $\\displaystyle\\int_0^3 1\\,dy = 3$.",
                    "바깥쪽 적분: $\\displaystyle\\int_0^2 3\\,dx = 6$."
                ],
                "explanation": "$\\displaystyle\\int_0^2 \\int_0^3 1\\,dy\\,dx = \\int_0^2 3\\,dx = 6$. 이것은 $[0,2] \\times [0,3]$ 직사각형의 넓이입니다.",
                "wrongAnalysis": "이중적분의 안쪽과 바깥쪽 적분 변수를 혼동하는 실수가 있습니다. $dy$ 가 안쪽이므로 $y$ 를 먼저 적분합니다."
            },
            {
                "id": "6-5",
                "type": "choice",
                "difficulty": 1,
                "question": "$\\displaystyle\\iint_R xy\\,dA$ 를 구하시오. $R = [0,2] \\times [0,1]$.",
                "choices": [
                    "$1$",
                    "$2$",
                    "$\\dfrac{1}{2}$",
                    "$4$"
                ],
                "answer": "$1$",
                "hints": [
                    "$\\displaystyle\\int_0^2 \\int_0^1 xy\\,dy\\,dx$ 에서 안쪽 적분 $\\displaystyle\\int_0^1 xy\\,dy = \\dfrac{x}{2}$.",
                    "$\\displaystyle\\int_0^2 \\dfrac{x}{2}\\,dx = \\dfrac{1}{2} \\cdot \\dfrac{x^2}{2}\\Big|_0^2 = 1$."
                ],
                "explanation": "$\\displaystyle\\int_0^2 \\int_0^1 xy\\,dy\\,dx = \\int_0^2 \\frac{x}{2}\\,dx = \\left[\\frac{x^2}{4}\\right]_0^2 = 1$. 직사각형 영역이므로 적분 순서를 바꿔도 같은 결과를 얻습니다.",
                "wrongAnalysis": "안쪽 적분에서 $x$ 를 상수로 두지 않고 함께 적분하면 잘못된 결과를 얻습니다."
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
            "nextConnection": "이중적분을 3차원으로 확장한 삼중적분을 배웁니다."
        }
    },
    {
        "id": 8,
        "title": "좌표변환과 야코비안",
        "category": "다변수 미적분",
        "level": "고급",
        "question": "극좌표나 구면좌표로 바꾸면 적분이 쉬워지는데, 변환할 때 왜 야코비안을 곱해야 할까?",
        "concept": {
            "intro": "중적분에서 영역이 원이나 구처럼 직교좌표로 표현하기 어려운 경우, 좌표를 바꾸면 간단해집니다.\n\n:::definition[야코비안(Jacobian)]\n변환 $(u,v) \\to (x,y)$에서 넓이 요소의 비율입니다:\n$$\\frac{\\partial(x,y)}{\\partial(u,v)} = \\begin{vmatrix} x_u & x_v \\\\ y_u & y_v \\end{vmatrix}$$\n:::\n\n:::note[극좌표]\n$x = r\\cos\\theta$, $y = r\\sin\\theta$일 때 야코비안은 $\\begin{vmatrix} \\cos\\theta & -r\\sin\\theta \\\\ \\sin\\theta & r\\cos\\theta \\end{vmatrix} = r$ 이므로 $dA = r\\,dr\\,d\\theta$.\n:::\n\n:::note[구면좌표]\n$x = \\rho\\sin\\phi\\cos\\theta$, $y = \\rho\\sin\\phi\\sin\\theta$, $z = \\rho\\cos\\phi$. 야코비안 $= \\rho^2\\sin\\phi$이므로 $dV = \\rho^2\\sin\\phi\\,d\\rho\\,d\\phi\\,d\\theta$.\n:::",
            "intuition": "야코비안은 좌표 변환에 의한 '넓이 왜곡 비율'입니다. 극좌표에서 원점 근처는 면적이 작고 멀어질수록 커지므로 $r$을 곱해야 합니다.",
            "formula": "\\frac{\\partial(x,y)}{\\partial(u,v)} = \\begin{vmatrix} x_u & x_v \\\\ y_u & y_v \\end{vmatrix}\n\\text{극좌표:}\\ dA = r\\,dr\\,d\\theta\n\\text{구면좌표:}\\ dV = \\rho^2\\sin\\phi\\,d\\rho\\,d\\phi\\,d\\theta",
            "summary": ":::note[핵심 요약]\n좌표변환 시 야코비안은 넓이/부피 요소의 변환 비율이다. 극좌표에서 $dA = r\\,dr\\,d\\theta$, 구면좌표에서 $dV = \\rho^2\\sin\\phi\\,d\\rho\\,d\\phi\\,d\\theta$.\n:::"
        },
        "examples": [
            {
                "title": "극좌표 이중적분",
                "problem": "$\\iint_{x^2+y^2 \\leq 4} (x^2+y^2)\\,dA$를 극좌표로 구하시오.",
                "steps": [
                    "$x^2+y^2 = r^2$, $dA = r\\,dr\\,d\\theta$.",
                    "$\\int_0^{2\\pi}\\int_0^2 r^3\\,dr\\,d\\theta = 2\\pi \\cdot 4 = 8\\pi$."
                ],
                "answer": "$8\\pi$",
                "lesson": "원형 영역에서는 극좌표가 훨씬 간단합니다. $dA = r\\,dr\\,d\\theta$에서 $r$을 빠뜨리지 마세요."
            },
            {
                "title": "[기본] 야코비안 행렬식 계산",
                "problem": "변환 $x = u + v$, $y = u - v$ 의 야코비안 $\\dfrac{\\partial(x,y)}{\\partial(u,v)}$ 를 구하시오.",
                "steps": [
                    "$\\dfrac{\\partial x}{\\partial u} = 1$, $\\dfrac{\\partial x}{\\partial v} = 1$.",
                    "$\\dfrac{\\partial y}{\\partial u} = 1$, $\\dfrac{\\partial y}{\\partial v} = -1$.",
                    "$J = \\begin{vmatrix} 1 & 1 \\\\ 1 & -1 \\end{vmatrix} = 1 \\cdot (-1) - 1 \\cdot 1 = -2$."
                ],
                "answer": "$J = -2$, $|J| = 2$",
                "lesson": "야코비안의 부호는 변환의 방향(보존/반전)을 나타내며, 적분에서는 절댓값 $|J|$ 를 사용합니다."
            },
            {
                "title": "[응용] 일반 좌표변환을 이용한 이중적분",
                "problem": "$\\displaystyle\\iint_D (x-y)(x+y)\\,dA$ 를 구하시오. $D$: $1 \\le x-y \\le 2$, $1 \\le x+y \\le 3$.",
                "steps": [
                    "$u = x - y$, $v = x + y$ 로 치환. 영역: $1 \\le u \\le 2$, $1 \\le v \\le 3$.",
                    "역변환: $x = \\dfrac{u+v}{2}$, $y = \\dfrac{v-u}{2}$. $|J| = \\dfrac{1}{2}$.",
                    "$\\displaystyle\\iint_D uv \\cdot \\frac{1}{2}\\,du\\,dv = \\frac{1}{2} \\int_1^2 u\\,du \\int_1^3 v\\,dv$.",
                    "$\\displaystyle\\int_1^2 u\\,du = \\frac{3}{2}$, $\\displaystyle\\int_1^3 v\\,dv = 4$.",
                    "결과: $\\dfrac{1}{2} \\times \\dfrac{3}{2} \\times 4 = 3$."
                ],
                "answer": "$3$",
                "lesson": "적분 영역이 사다리꼴이나 평행사변형일 때, 적절한 좌표 변환으로 직사각형 영역으로 바꾸면 적분이 쉬워집니다."
            },
            {
                "title": "[응용] 원기둥좌표에서의 야코비안 유도",
                "problem": "원기둥좌표 $x = r\\cos\\theta$, $y = r\\sin\\theta$, $z = z$ 의 3차원 야코비안을 구하시오.",
                "steps": [
                    "$\\dfrac{\\partial(x,y,z)}{\\partial(r,\\theta,z)} = \\begin{vmatrix} \\cos\\theta & -r\\sin\\theta & 0 \\\\ \\sin\\theta & r\\cos\\theta & 0 \\\\ 0 & 0 & 1 \\end{vmatrix}$.",
                    "3행으로 여인수 전개: $1 \\cdot \\begin{vmatrix} \\cos\\theta & -r\\sin\\theta \\\\ \\sin\\theta & r\\cos\\theta \\end{vmatrix}$.",
                    "$= r\\cos^2\\theta + r\\sin^2\\theta = r$.",
                    "따라서 $dV = |J|\\,dr\\,d\\theta\\,dz = r\\,dr\\,d\\theta\\,dz$."
                ],
                "answer": "$J = r$, $dV = r\\,dr\\,d\\theta\\,dz$",
                "lesson": "원기둥좌표의 야코비안이 $r$ 인 것은 극좌표의 2차원 야코비안과 같습니다. $z$ 방향은 변환이 없으므로 야코비안에 기여하지 않습니다."
            },
            {
                "title": "[심화] 타원좌표 변환",
                "problem": "타원 $\\dfrac{x^2}{4} + y^2 \\le 1$ 의 넓이를 변환 $x = 2u$, $y = v$ 를 이용하여 구하시오.",
                "steps": [
                    "변환 후 영역: $u^2 + v^2 \\le 1$ (단위원).",
                    "야코비안: $\\dfrac{\\partial(x,y)}{\\partial(u,v)} = \\begin{vmatrix} 2 & 0 \\\\ 0 & 1 \\end{vmatrix} = 2$.",
                    "넓이 $= \\displaystyle\\iint_{u^2+v^2 \\le 1} |J|\\,du\\,dv = 2 \\iint_{u^2+v^2 \\le 1} 1\\,du\\,dv$.",
                    "$= 2 \\times \\pi (1)^2 = 2\\pi$.",
                    "검산: 반축 $a=2$, $b=1$ 인 타원의 넓이 $= \\pi ab = 2\\pi$ ✓."
                ],
                "answer": "$2\\pi$",
                "lesson": "타원 영역은 스케일 변환으로 원으로 바꿀 수 있습니다. 야코비안이 스케일 인수의 곱 ($2 \\times 1 = 2$) 이 되어 넓이 비율을 반영합니다."
            }
        ],
        "problems": [
            {
                "id": "8-1",
                "type": "text",
                "difficulty": 2,
                "question": "극좌표 변환의 야코비안 $\\frac{\\partial(x,y)}{\\partial(r,\\theta)}$의 값은? (문자로 답)",
                "answer": "r",
                "hints": ["$x = r\\cos\\theta$, $y = r\\sin\\theta$.", "$r\\cos^2\\theta + r\\sin^2\\theta$."],
                "explanation": "행렬식 = $r\\cos^2\\theta + r\\sin^2\\theta = r$.",
                "wrongAnalysis": "행렬식 부호를 잘못 처리하는 실수가 흔합니다."
            },
            {
                "id": "8-2",
                "type": "number",
                "difficulty": 2,
                "question": "단위원 위에서 $\\iint 1\\,dA$를 극좌표로 계산하면? ($\\pi$ 포함, 소수)",
                "answer": "3.1416",
                "hints": [
                    "극좌표에서는 $dA=r\\,dr\\,d\\theta$를 사용합니다.",
                    "단위원은 $0\\le r\\le 1$, $0\\le \\theta\\le 2\\pi$입니다."
                ],
                "explanation": "$\\iint 1\\,dA=\\int_0^{2\\pi}\\int_0^1 r\\,dr\\,d\\theta$입니다. 안쪽 적분은 $1/2$이고 바깥 적분까지 하면 $2\\pi\\cdot 1/2=\\pi\\approx3.1416$입니다.",
                "wrongAnalysis": "$r$을 빠뜨리면 $2\\pi$가 되어 틀립니다."
            },
            {
                "id": "8-3",
                "type": "choice",
                "difficulty": 3,
                "question": "구면좌표에서 $dV$는?",
                "choices": ["$d\\rho\\,d\\phi\\,d\\theta$", "$\\rho\\,d\\rho\\,d\\phi\\,d\\theta$", "$\\rho^2\\sin\\phi\\,d\\rho\\,d\\phi\\,d\\theta$", "$\\rho^2\\,d\\rho\\,d\\phi\\,d\\theta$"],
                "answer": "$\\rho^2\\sin\\phi\\,d\\rho\\,d\\phi\\,d\\theta$",
                "hints": [
                    "구면좌표의 체적 요소에는 야코비안이 곱해집니다.",
                    "반지름 방향의 제곱 인자 $\\rho^2$와 각도 인자 $\\sin\\phi$를 모두 포함해야 합니다."
                ],
                "explanation": "구면좌표 변환의 야코비안은 $\\rho^2\\sin\\phi$입니다. 따라서 체적 요소는 $dV=\\rho^2\\sin\\phi\\,d\\rho\\,d\\phi\\,d\\theta$입니다.",
                "wrongAnalysis": "$\\sin\\phi$를 빠뜨리는 실수가 매우 흔합니다."
            },
            {
                "id": "8-4",
                "type": "choice",
                "difficulty": 1,
                "question": "극좌표에서 $x = r\\cos\\theta$, $y = r\\sin\\theta$ 일 때, $x^2 + y^2$ 를 극좌표로 나타내면?",
                "choices": [
                    "$r^2$",
                    "$r$",
                    "$r^2(\\cos^2\\theta + \\sin^2\\theta)$",
                    "$r^2\\cos\\theta\\sin\\theta$"
                ],
                "answer": "$r^2$",
                "hints": [
                    "$x^2 + y^2 = r^2\\cos^2\\theta + r^2\\sin^2\\theta$ 로 전개하세요.",
                    "$\\cos^2\\theta + \\sin^2\\theta = 1$ 입니다."
                ],
                "explanation": "$x^2 + y^2 = r^2(\\cos^2\\theta + \\sin^2\\theta) = r^2$. 셋째 보기도 수학적으로 같은 값이지만 간소화하면 $r^2$ 입니다.",
                "wrongAnalysis": "$r^2\\cos\\theta\\sin\\theta$ 를 선택하면 $x^2 + y^2$ 와 $xy$ 를 혼동한 것입니다. $xy = r^2\\cos\\theta\\sin\\theta$ 입니다."
            },
            {
                "id": "8-5",
                "type": "number",
                "difficulty": 1,
                "question": "변환 $u = x + y$, $v = x - y$ 의 야코비안 $\\dfrac{\\partial(x,y)}{\\partial(u,v)}$ 의 절댓값은? (분수로 입력, 예: 1/3)",
                "answer": "0.5",
                "hints": [
                    "역변환: $x = \\dfrac{u+v}{2}$, $y = \\dfrac{u-v}{2}$ 를 구하세요.",
                    "$\\begin{vmatrix} \\dfrac{\\partial x}{\\partial u} & \\dfrac{\\partial x}{\\partial v} \\\\ \\dfrac{\\partial y}{\\partial u} & \\dfrac{\\partial y}{\\partial v} \\end{vmatrix} = \\begin{vmatrix} 1/2 & 1/2 \\\\ 1/2 & -1/2 \\end{vmatrix}$."
                ],
                "explanation": "$x = \\frac{u+v}{2}$, $y = \\frac{u-v}{2}$ 이므로 야코비안 $= \\begin{vmatrix} 1/2 & 1/2 \\\\ 1/2 & -1/2 \\end{vmatrix} = -\\frac{1}{4} - \\frac{1}{4} = -\\frac{1}{2}$. 절댓값은 $\\frac{1}{2} = 0.5$ 입니다.",
                "wrongAnalysis": "$(u,v)$ 에서 $(x,y)$ 로의 야코비안과 $(x,y)$ 에서 $(u,v)$ 로의 야코비안을 혼동하는 실수가 흔합니다. 둘은 서로 역수 관계입니다."
            }
        ],
        "summary": {
            "keyPoints": ["야코비안은 좌표변환의 넓이/부피 비율.", "극좌표: $dA = r\\,dr\\,d\\theta$.", "구면좌표: $dV = \\rho^2\\sin\\phi\\,d\\rho\\,d\\phi\\,d\\theta$."],
            "formulas": ["J = \\frac{\\partial(x,y)}{\\partial(u,v)}", "dA = r\\,dr\\,d\\theta"],
            "commonMistakes": ["극좌표에서 $r$ 누락", "구면좌표에서 $\\sin\\phi$ 누락"],
            "nextConnection": "좌표변환을 알았으니, 다음 단원에서 공간에 벡터가 분포하는 벡터장을 배웁니다."
        }
    },
    {
        "id": 9,
        "title": "벡터장 입문",
        "category": "다변수 미적분",
        "level": "고급",
        "question": "공간의 각 점마다 '벡터'를 대응시킨다는 건 어떤 의미일까?",
        "concept": {
            "intro": ":::definition[벡터장의 정의]\n벡터장은 공간의 각 점 $(x,y)$ 에 벡터 $\\mathbf{F}(x,y)$ 를 대응시키는 함수입니다. 흐르는 물의 속도장, 바람장, 전기·자기장 등이 대표 예시입니다.\n:::\n\n:::definition[발산과 회전]\n발산($\\mathrm{div}$)은 흐름이 '솟아나는 정도', 회전($\\mathrm{curl}$)은 '소용돌이의 정도'를 측정합니다.\n:::",
            "intuition": "지도의 각 지점에 작은 화살표가 그려져 있다고 상상해 보세요. 그 화살표들이 모이면 '바람의 지도'가 됩니다.",
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
                "problem": "$\\mathbf{F}(x,y) = (x^2 + y, 3y - x)$ 의 발산을 구하시오.",
                "steps": [
                    "$P = x^2 + y$, $Q = 3y - x$.",
                    "$\\dfrac{\\partial P}{\\partial x} = 2x$.",
                    "$\\dfrac{\\partial Q}{\\partial y} = 3$.",
                    "$\\mathrm{div}\\,\\mathbf{F} = 2x + 3$."
                ],
                "answer": "$\\mathrm{div}\\,\\mathbf{F} = 2x + 3$",
                "lesson": "발산이 $x$ 에 의존하므로, 솟아나는 정도가 위치에 따라 달라집니다. $x > -\\frac{3}{2}$ 인 영역에서는 양의 발산(솟음), $x < -\\frac{3}{2}$ 인 영역에서는 음의 발산(흡수)입니다."
            },
            {
                "title": "[응용] 3차원 벡터장의 curl 계산",
                "problem": "$\\mathbf{F}(x,y,z) = (yz, xz, xy)$ 의 $\\nabla \\times \\mathbf{F}$ 를 구하시오.",
                "steps": [
                    "$\\nabla \\times \\mathbf{F} = \\begin{vmatrix} \\mathbf{i} & \\mathbf{j} & \\mathbf{k} \\\\ \\partial_x & \\partial_y & \\partial_z \\\\ yz & xz & xy \\end{vmatrix}$.",
                    "$\\mathbf{i}$: $\\dfrac{\\partial(xy)}{\\partial y} - \\dfrac{\\partial(xz)}{\\partial z} = x - x = 0$.",
                    "$\\mathbf{j}$: $\\dfrac{\\partial(yz)}{\\partial z} - \\dfrac{\\partial(xy)}{\\partial x} = y - y = 0$.",
                    "$\\mathbf{k}$: $\\dfrac{\\partial(xz)}{\\partial x} - \\dfrac{\\partial(yz)}{\\partial y} = z - z = 0$.",
                    "$\\nabla \\times \\mathbf{F} = (0, 0, 0) = \\mathbf{0}$."
                ],
                "answer": "$\\nabla \\times \\mathbf{F} = \\mathbf{0}$",
                "lesson": "curl이 $\\mathbf{0}$ 이면 보존장(conservative field)입니다. 실제로 $\\mathbf{F} = \\nabla(xyz)$ 이므로 퍼텐셜 함수 $f = xyz$ 가 존재합니다."
            },
            {
                "title": "[응용] 보존장 판별과 퍼텐셜 함수",
                "problem": "$\\mathbf{F}(x,y) = (2xy + 1, x^2 + 3)$ 가 보존장인지 확인하고, 보존장이면 퍼텐셜 함수 $f$ 를 구하시오.",
                "steps": [
                    "$P = 2xy + 1$, $Q = x^2 + 3$. $\\dfrac{\\partial P}{\\partial y} = 2x$, $\\dfrac{\\partial Q}{\\partial x} = 2x$. 같으므로 보존장.",
                    "$f_x = 2xy + 1 \\Rightarrow f = x^2 y + x + g(y)$.",
                    "$f_y = x^2 + g'(y) = x^2 + 3 \\Rightarrow g'(y) = 3 \\Rightarrow g(y) = 3y + C$.",
                    "$f(x,y) = x^2 y + x + 3y + C$."
                ],
                "answer": "보존장, $f(x,y) = x^2 y + x + 3y + C$",
                "lesson": "보존장의 퍼텐셜 함수는 $f_x = P$ 를 $x$ 로 적분한 뒤, $f_y = Q$ 조건으로 미지함수 $g(y)$ 를 결정합니다."
            },
            {
                "title": "[심화] 발산과 회전이 모두 0인 벡터장",
                "problem": "$\\mathbf{F}(x,y) = \\left(\\dfrac{x}{x^2+y^2},\\ \\dfrac{y}{x^2+y^2}\\right)$ 의 발산과 2D curl을 구하시오 (원점 제외).",
                "steps": [
                    "$P = \\dfrac{x}{x^2+y^2}$. 몫의 미분: $P_x = \\dfrac{(x^2+y^2) - x \\cdot 2x}{(x^2+y^2)^2} = \\dfrac{y^2 - x^2}{(x^2+y^2)^2}$.",
                    "대칭성에 의해 $Q_y = \\dfrac{x^2 - y^2}{(x^2+y^2)^2}$.",
                    "$\\mathrm{div}\\,\\mathbf{F} = P_x + Q_y = \\dfrac{y^2-x^2+x^2-y^2}{(x^2+y^2)^2} = 0$.",
                    "$Q_x = \\dfrac{-2xy}{(x^2+y^2)^2}$, $P_y = \\dfrac{-2xy}{(x^2+y^2)^2}$.",
                    "$\\mathrm{curl} = Q_x - P_y = 0$."
                ],
                "answer": "$\\mathrm{div}\\,\\mathbf{F} = 0$, $\\mathrm{curl}\\,\\mathbf{F} = 0$ (원점 제외)",
                "lesson": "이 벡터장은 원점에 특이점이 있어 전체 정의역이 단순연결이 아닙니다. curl이 $0$ 이지만 원점 주위의 순환은 $0$ 이 아닐 수 있습니다 (위상적 효과)."
            }
        ],
        "problems": [
            {
                "id": "9-1",
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
                "id": "9-2",
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
                "id": "9-3",
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
                "id": "9-4",
                "type": "number",
                "difficulty": 1,
                "question": "$\\mathbf{F}(x,y) = (3x, 5y)$ 의 발산 $\\mathrm{div}\\,\\mathbf{F}$ 의 값은?",
                "answer": "8",
                "hints": [
                    "$\\mathrm{div}\\,\\mathbf{F} = \\dfrac{\\partial P}{\\partial x} + \\dfrac{\\partial Q}{\\partial y}$ 입니다.",
                    "$\\dfrac{\\partial (3x)}{\\partial x} = 3$, $\\dfrac{\\partial (5y)}{\\partial y} = 5$."
                ],
                "explanation": "$\\mathrm{div}\\,\\mathbf{F} = 3 + 5 = 8$. 발산이 상수이므로 이 벡터장은 모든 점에서 동일한 비율로 퍼져나갑니다.",
                "wrongAnalysis": "$3x + 5y$ 를 답으로 쓰는 실수가 있습니다. 편미분한 후의 값을 더해야 하며, 원래 함수 값을 더하는 것이 아닙니다."
            },
            {
                "id": "9-5",
                "type": "choice",
                "difficulty": 1,
                "question": "$\\mathbf{F}(x,y) = (y^2, 2xy)$ 의 2D curl $\\left(\\dfrac{\\partial Q}{\\partial x} - \\dfrac{\\partial P}{\\partial y}\\right)$ 의 값은?",
                "choices": [
                    "$0$",
                    "$2y$",
                    "$2y - 2y$",
                    "$4y$"
                ],
                "answer": "$0$",
                "hints": [
                    "$P = y^2$, $Q = 2xy$ 에서 $\\dfrac{\\partial Q}{\\partial x} = 2y$, $\\dfrac{\\partial P}{\\partial y} = 2y$.",
                    "$\\mathrm{curl} = 2y - 2y = 0$."
                ],
                "explanation": "$\\dfrac{\\partial Q}{\\partial x} = 2y$, $\\dfrac{\\partial P}{\\partial y} = 2y$ 이므로 $\\mathrm{curl} = 2y - 2y = 0$. curl이 $0$ 이면 이 벡터장은 보존장(conservative field)일 가능성이 있습니다. 실제로 $\\mathbf{F} = \\nabla(xy^2)$ 입니다.",
                "wrongAnalysis": "$\\dfrac{\\partial P}{\\partial y} = y^2$ 로 잘못 계산하면 curl $\\neq 0$ 이 됩니다. $y^2$ 의 $y$ 미분은 $2y$ 입니다."
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
            "nextConnection": "이제 '함수 자체를 모르고 그 변화율 관계만 아는' 가장 강력한 모델링 도구, 선적분과 그린 정리를 배웁니다."
        }
    },
    {
        "id": 10,
        "title": "선적분과 그린 정리",
        "category": "다변수와 편미분",
        "level": "고급",
        "question": "벡터장을 곡선을 따라 적분하면 무엇을 얻고, 이것은 이중적분과 어떤 관계가 있는가?",
        "concept": {
            "intro": "이전 레슨에서 벡터장의 개념과 발산·회전 연산을 배웠습니다. 이제 자연스러운 질문이 떠오릅니다: 벡터장이 주어진 공간에서 입자가 곡선을 따라 이동할 때, 벡터장이 입자에 한 일(work)을 어떻게 계산할까요?\n\n:::definition[선적분]\n**스칼라 선적분** $\\int_C f\\,ds$ 는 스칼라 함수 $f$를 곡선 $C$를 따라 적분하는 것으로, 예를 들어 밀도가 변하는 철사의 총 질량을 구할 때 사용합니다.\n\n**벡터 선적분** $\\int_C \\mathbf{F} \\cdot d\\mathbf{r}$ 은 벡터장 $\\mathbf{F}$를 경로를 따라 적분하는 것으로, 힘이 한 일(work)을 나타냅니다. 곡선 위의 미소 변위 $d\\mathbf{r}$ 과 벡터장 $\\mathbf{F}$ 의 내적을 경로를 따라 합산하는 것입니다.\n:::\n\n:::theorem[보존장과 경로 독립성]\n$\\mathbf{F} = \\nabla f$ 인 스칼라 퍼텐셜 $f$가 존재하면, 선적분은 경로에 무관하게 $f(B) - f(A)$ 로 결정됩니다. 이는 미적분학의 기본정리 $\\int_a^b f'(x)\\,dx = f(b) - f(a)$ 의 다변수 일반화입니다. 보존장인지 판별하는 조건은 $\\frac{\\partial P}{\\partial y} = \\frac{\\partial Q}{\\partial x}$ (단순연결 영역에서)입니다.\n:::\n\n:::theorem[그린 정리 (Green's Theorem)]\n닫힌 곡선 $C$ 를 따른 선적분 $\\oint_C (P\\,dx + Q\\,dy)$ 을 그 곡선이 둘러싸는 영역 $D$ 위의 이중적분 $\\iint_D \\left(\\frac{\\partial Q}{\\partial x} - \\frac{\\partial P}{\\partial y}\\right) dA$ 로 변환할 수 있습니다. 그린 정리는 '경계에서의 순환(circulation)'과 '내부의 회전(curl) 총합'이 같다는 깊은 관계를 보여주며, 복잡한 선적분을 이중적분으로, 또는 그 반대로 계산을 간소화하는 데 사용됩니다.\n:::",
            "intuition": "바람이 부는 들판을 가로질러 걸어간다고 상상하세요. 선적분은 '바람이 나를 밀어준 총량(일)'입니다. 바람을 등에 받으면 양의 일, 맞바람이면 음의 일이 됩니다.\n\n그린 정리는 놀라운 사실을 말해줍니다: 울타리를 따라 한 바퀴 돌며 느낀 '바람의 순환'은, 울타리 안 전체에서 '바람이 얼마나 소용돌이치는지'를 합산한 것과 같습니다. 경계의 정보만으로 내부를 알 수 있고, 내부 정보만으로 경계를 알 수 있는 것입니다.",
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
                "title": "[기본] 직선 경로에서의 선적분",
                "problem": "$\\mathbf{F} = (y, x)$ 의 선적분 $\\int_C \\mathbf{F} \\cdot d\\mathbf{r}$ 을 구하시오. $C$: $(0,0)$ 에서 $(1,1)$ 까지 직선.",
                "steps": [
                    "경로 매개변수화: $\\mathbf{r}(t) = (t, t)$, $0 \\le t \\le 1$.",
                    "$\\mathbf{r}'(t) = (1, 1)$, $\\mathbf{F}(\\mathbf{r}(t)) = (t, t)$.",
                    "$\\mathbf{F} \\cdot \\mathbf{r}' = t \\cdot 1 + t \\cdot 1 = 2t$.",
                    "$\\displaystyle\\int_0^1 2t\\,dt = t^2 \\Big|_0^1 = 1$."
                ],
                "answer": "$1$",
                "lesson": "선적분의 핵심은 경로를 매개변수화하고, $\\mathbf{F}(\\mathbf{r}(t)) \\cdot \\mathbf{r}'(t)$ 를 $t$ 에 대해 적분하는 것입니다."
            },
            {
                "title": "[응용] 그린 정리를 이용한 넓이 계산",
                "problem": "그린 정리를 이용하여 타원 $\\dfrac{x^2}{a^2} + \\dfrac{y^2}{b^2} = 1$ 의 넓이를 구하시오.",
                "steps": [
                    "넓이 공식: $A = \\dfrac{1}{2}\\oint_C (x\\,dy - y\\,dx)$.",
                    "타원 매개변수: $x = a\\cos t$, $y = b\\sin t$, $0 \\le t \\le 2\\pi$.",
                    "$dx = -a\\sin t\\,dt$, $dy = b\\cos t\\,dt$.",
                    "$A = \\dfrac{1}{2}\\displaystyle\\int_0^{2\\pi} (a\\cos t \\cdot b\\cos t - b\\sin t \\cdot (-a\\sin t))\\,dt$.",
                    "$= \\dfrac{ab}{2}\\displaystyle\\int_0^{2\\pi} (\\cos^2 t + \\sin^2 t)\\,dt = \\dfrac{ab}{2} \\cdot 2\\pi = \\pi ab$."
                ],
                "answer": "$\\pi ab$",
                "lesson": "그린 정리에서 $P = -y$, $Q = x$ 로 놓으면 $\\frac{\\partial Q}{\\partial x} - \\frac{\\partial P}{\\partial y} = 2$ 이므로, 선적분의 $\\frac{1}{2}$ 배가 넓이가 됩니다."
            },
            {
                "title": "[응용] 보존장의 선적분 (경로 독립성)",
                "problem": "$\\mathbf{F} = (2x + y, x + 2y)$ 의 $(0,0)$ 에서 $(3,1)$ 까지의 선적분을 보존장을 이용하여 구하시오.",
                "steps": [
                    "$P_y = 1$, $Q_x = 1$ 이므로 $P_y = Q_x$. 보존장이다.",
                    "퍼텐셜 함수: $f_x = 2x + y \\Rightarrow f = x^2 + xy + g(y)$.",
                    "$f_y = x + g'(y) = x + 2y \\Rightarrow g'(y) = 2y \\Rightarrow g(y) = y^2$.",
                    "$f(x,y) = x^2 + xy + y^2$.",
                    "$\\displaystyle\\int_C \\mathbf{F} \\cdot d\\mathbf{r} = f(3,1) - f(0,0) = (9 + 3 + 1) - 0 = 13$."
                ],
                "answer": "$13$",
                "lesson": "보존장에서는 퍼텐셜 함수만 찾으면 경로와 무관하게 $f(B) - f(A)$ 로 선적분이 결정됩니다. 복잡한 경로 매개변수화가 불필요합니다."
            },
            {
                "title": "[심화] 그린 정리를 통한 비보존장의 순환 계산",
                "problem": "$\\mathbf{F} = (x^2 - y^2, 2xy)$ 에 대해 $\\oint_C \\mathbf{F} \\cdot d\\mathbf{r}$ 을 구하시오. $C$: 단위원 $x^2 + y^2 = 1$ (반시계 방향).",
                "steps": [
                    "$P = x^2 - y^2$, $Q = 2xy$.",
                    "$\\dfrac{\\partial Q}{\\partial x} = 2y$, $\\dfrac{\\partial P}{\\partial y} = -2y$.",
                    "그린 정리: $\\oint_C \\mathbf{F} \\cdot d\\mathbf{r} = \\displaystyle\\iint_D (2y - (-2y))\\,dA = \\iint_D 4y\\,dA$.",
                    "극좌표: $\\displaystyle\\int_0^{2\\pi}\\int_0^1 4r\\sin\\theta \\cdot r\\,dr\\,d\\theta = 4\\int_0^1 r^2\\,dr \\int_0^{2\\pi} \\sin\\theta\\,d\\theta$.",
                    "$\\displaystyle\\int_0^{2\\pi} \\sin\\theta\\,d\\theta = 0$ 이므로 전체 적분 $= 0$."
                ],
                "answer": "$0$",
                "lesson": "그린 정리를 적용했을 때 피적분함수가 $y$ 의 홀수 함수이고 영역이 $y$ 축 대칭이면, 대칭성에 의해 적분이 $0$ 이 됩니다. 이런 대칭 논법은 계산 전에 결과를 예측하는 데 유용합니다."
            }
        ],
        "problems": [
            {
                "id": "10-1",
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
                "id": "10-2",
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
                "id": "10-3",
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
                "id": "10-4",
                "type": "choice",
                "difficulty": 1,
                "question": "보존장 $\\mathbf{F} = \\nabla f$ 에서 닫힌 경로 $C$ 를 따른 선적분 $\\oint_C \\mathbf{F} \\cdot d\\mathbf{r}$ 의 값은?",
                "choices": [
                    "$0$",
                    "$f$ 의 최댓값",
                    "경로 $C$ 의 길이",
                    "$\\nabla f$ 의 크기"
                ],
                "answer": "$0$",
                "hints": [
                    "보존장에서 선적분은 $f(B) - f(A)$ 입니다.",
                    "닫힌 경로에서는 시작점과 끝점이 같으므로 $A = B$ 입니다."
                ],
                "explanation": "보존장에서 $\\int_C \\mathbf{F} \\cdot d\\mathbf{r} = f(B) - f(A)$ 입니다. 닫힌 경로에서는 $A = B$ 이므로 $f(B) - f(A) = 0$ 입니다. 이것은 보존장의 핵심 성질입니다.",
                "wrongAnalysis": "닫힌 경로라도 적분값이 $0$ 이 아닐 수 있다고 생각하는 경우가 있지만, 보존장에서는 항상 $0$ 입니다. 비보존장에서만 $0$ 이 아닐 수 있습니다."
            },
            {
                "id": "10-5",
                "type": "number",
                "difficulty": 2,
                "question": "보존장 $\\mathbf{F} = \\nabla f$, $f(x,y) = x^2y$ 에서 $(0,0)$ 에서 $(2,3)$ 까지의 선적분의 값은?",
                "answer": "12",
                "hints": [
                    "보존장의 선적분: $f(B) - f(A)$.",
                    "$f(2,3) = 4 \\cdot 3 = 12$, $f(0,0) = 0$."
                ],
                "explanation": "$\\int_C \\mathbf{F} \\cdot d\\mathbf{r} = f(2,3) - f(0,0) = 2^2 \\cdot 3 - 0 = 12$. 보존장이므로 경로에 상관없이 끝점의 퍼텐셜 차이로 결정됩니다.",
                "wrongAnalysis": "경로를 직접 매개변수화하여 복잡하게 계산하는 경우가 있습니다. 보존장임을 확인했다면 $f(B) - f(A)$ 를 바로 사용하세요."
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
            "nextConnection": "그린 정리는 2차원에서의 결과입니다. 다음 레슨에서 이를 3차원으로 확장한 3차원 면적분을 배운 뒤 발산 정리와 스토크스 정리로 나아갑니다."
        }
    },
    {
        "id": 11,
        "title": "면적분",
        "category": "다변수 미적분",
        "level": "심화",
        "question": "3차원 곡면 위에서 스칼라 함수나 벡터장을 적분하려면 어떻게 할까?",
        "concept": {
            "intro": "선적분이 곡선 위의 적분이라면, 면적분(surface integral)은 곡면 위의 적분입니다.\n\n:::definition[스칼라 면적분]\n곡면 $S$가 $\\mathbf{r}(u,v)$로 매개변수화되면:\n$$\\iint_S f\\,dS = \\iint_D f(\\mathbf{r}(u,v))\\,\\|\\mathbf{r}_u \\times \\mathbf{r}_v\\|\\,du\\,dv$$\n:::\n\n:::definition[벡터 면적분 (유량)]\n벡터장 $\\mathbf{F}$가 곡면을 통과하는 유량(flux)은:\n$$\\iint_S \\mathbf{F} \\cdot d\\mathbf{S} = \\iint_D \\mathbf{F} \\cdot (\\mathbf{r}_u \\times \\mathbf{r}_v)\\,du\\,dv$$\n:::\n\n:::note[참고]\n$z = g(x,y)$로 주어진 곡면이면 $dS = \\sqrt{1 + g_x^2 + g_y^2}\\,dA$로 간단해집니다.\n:::",
            "intuition": "비가 지붕(곡면)에 쏟아질 때, 지붕을 통과하는 빗물의 총량이 벡터 면적분입니다.",
            "formula": "\\iint_S f\\,dS = \\iint_D f\\,\\|\\mathbf{r}_u \\times \\mathbf{r}_v\\|\\,du\\,dv\n\\iint_S \\mathbf{F} \\cdot d\\mathbf{S} = \\iint_D \\mathbf{F} \\cdot (\\mathbf{r}_u \\times \\mathbf{r}_v)\\,du\\,dv\nz = g(x,y):\\  dS = \\sqrt{1+g_x^2+g_y^2}\\,dA",
            "summary": ":::note[핵심 요약]\n면적분은 곡면 위에서 함수나 벡터장을 적분한다. 미소 넓이 $dS = \\|\\mathbf{r}_u \\times \\mathbf{r}_v\\|\\,du\\,dv$이며, 벡터 면적분(유량)은 발산 정리와 스토크스 정리의 핵심 구성요소다.\n:::"
        },
        "examples": [
            {
                "title": "평면 위 유량",
                "problem": "$\\mathbf{F} = (0,0,1)$의 $z=0$ 평면 $[0,1]^2$ 위로의 유량을 구하시오.",
                "steps": ["법선 $(0,0,1)$.", "$\\mathbf{F} \\cdot \\mathbf{n} = 1$.", "유량 $= 1$."],
                "answer": "$1$",
                "lesson": "평면의 면적분은 법선과 벡터장의 내적을 영역 위에서 적분한 것입니다."
            },
            {
                "title": "[기본] 평면 곡면의 넓이",
                "problem": "평면 $z = 2x + 3y$ 에서 $0 \\le x \\le 1$, $0 \\le y \\le 1$ 인 부분의 곡면 넓이를 구하시오.",
                "steps": [
                    "$g(x,y) = 2x + 3y$. $g_x = 2$, $g_y = 3$.",
                    "$dS = \\sqrt{1 + g_x^2 + g_y^2}\\,dA = \\sqrt{1 + 4 + 9}\\,dA = \\sqrt{14}\\,dA$.",
                    "곡면 넓이 $= \\displaystyle\\iint_D \\sqrt{14}\\,dA = \\sqrt{14} \\times 1 = \\sqrt{14}$."
                ],
                "answer": "$\\sqrt{14}$",
                "lesson": "평면의 기울기가 클수록 곡면 넓이가 $xy$-평면에 투영한 넓이보다 커집니다. 보정 계수 $\\sqrt{1 + g_x^2 + g_y^2}$ 가 이 차이를 반영합니다."
            },
            {
                "title": "[응용] 포물면 위의 스칼라 면적분",
                "problem": "곡면 $z = x^2 + y^2$, $0 \\le x^2 + y^2 \\le 1$ 위에서 $\\displaystyle\\iint_S z\\,dS$ 를 구하시오.",
                "steps": [
                    "$g_x = 2x$, $g_y = 2y$. $dS = \\sqrt{1 + 4x^2 + 4y^2}\\,dA$.",
                    "극좌표: $z = r^2$, $dS = \\sqrt{1 + 4r^2} \\cdot r\\,dr\\,d\\theta$.",
                    "$\\displaystyle\\iint_S z\\,dS = \\int_0^{2\\pi}\\int_0^1 r^2 \\cdot r\\sqrt{1+4r^2}\\,dr\\,d\\theta = 2\\pi \\int_0^1 r^3 \\sqrt{1+4r^2}\\,dr$.",
                    "$u = 1 + 4r^2$, $du = 8r\\,dr$, $r^2 = \\frac{u-1}{4}$. $\\int_0^1 r^3 \\sqrt{1+4r^2}\\,dr = \\frac{1}{32}\\int_1^5 (u-1)\\sqrt{u}\\,du$.",
                    "$= \\frac{1}{32}\\left[\\frac{2u^{5/2}}{5} - \\frac{2u^{3/2}}{3}\\right]_1^5 = \\frac{1}{32}\\left(10\\sqrt5 - \\frac{10\\sqrt5}{3} + \\frac{4}{15}\\right)$.",
                    "따라서 $\\int_0^1 r^3\\sqrt{1+4r^2}\\,dr = \\frac{25\\sqrt5+1}{120}$이고, 전체 적분은 $2\\pi \\cdot \\frac{25\\sqrt5+1}{120} = \\frac{\\pi(25\\sqrt5+1)}{60}$입니다."
                ],
                "answer": "$\\dfrac{\\pi(25\\sqrt5+1)}{60}$",
                "lesson": "포물면 위의 면적분은 $\\sqrt{1 + 4r^2}$ 인자 때문에 치환적분이 필요합니다. 극좌표와 $u$-치환을 결합하는 것이 핵심 기법입니다."
            },
            {
                "title": "[응용] 벡터 면적분 (유량) 계산",
                "problem": "$\\mathbf{F} = (x, y, z)$ 가 곡면 $z = 1 - x^2 - y^2$ ($z \\ge 0$, 위쪽 법선)을 통과하는 유량을 구하시오.",
                "steps": [
                    "$g(x,y) = 1 - x^2 - y^2$. 법선 벡터 $(g_x, g_y, -1) \\times (-1) = (2x, 2y, 1)$ (위쪽).",
                    "유량 $= \\displaystyle\\iint_D \\mathbf{F} \\cdot (2x, 2y, 1)\\,dA$. $\\mathbf{F}$ 를 곡면 위에서: $(x, y, 1-x^2-y^2)$.",
                    "내적: $2x^2 + 2y^2 + 1 - x^2 - y^2 = x^2 + y^2 + 1$.",
                    "극좌표: $\\displaystyle\\int_0^{2\\pi}\\int_0^1 (r^2 + 1) \\cdot r\\,dr\\,d\\theta = 2\\pi \\int_0^1 (r^3 + r)\\,dr$.",
                    "$= 2\\pi \\left[\\frac{r^4}{4} + \\frac{r^2}{2}\\right]_0^1 = 2\\pi \\cdot \\frac{3}{4} = \\frac{3\\pi}{2}$."
                ],
                "answer": "$\\dfrac{3\\pi}{2}$",
                "lesson": "$z = g(x,y)$ 곡면의 유량은 $\\iint_D \\mathbf{F} \\cdot (-g_x, -g_y, 1)\\,dA$ (위쪽 법선) 또는 $(g_x, g_y, -1)\\,dA$ (아래쪽 법선)로 계산합니다. 법선 방향 선택에 주의하세요."
            },
            {
                "title": "[심화] 구면 위의 면적분",
                "problem": "반지름 $R$ 인 구 $x^2 + y^2 + z^2 = R^2$ 의 $z \\ge 0$ 인 반구 위에서 $\\displaystyle\\iint_S z\\,dS$ 를 구하시오.",
                "steps": [
                    "구면 매개변수: $\\mathbf{r}(\\phi, \\theta) = (R\\sin\\phi\\cos\\theta, R\\sin\\phi\\sin\\theta, R\\cos\\phi)$, $0 \\le \\phi \\le \\frac{\\pi}{2}$, $0 \\le \\theta \\le 2\\pi$.",
                    "$\\|\\mathbf{r}_\\phi \\times \\mathbf{r}_\\theta\\| = R^2 \\sin\\phi$ 이므로 $dS = R^2 \\sin\\phi\\,d\\phi\\,d\\theta$.",
                    "$z = R\\cos\\phi$ 이므로 $\\displaystyle\\iint_S z\\,dS = \\int_0^{2\\pi}\\int_0^{\\pi/2} R\\cos\\phi \\cdot R^2 \\sin\\phi\\,d\\phi\\,d\\theta$.",
                    "$= R^3 \\int_0^{2\\pi} d\\theta \\int_0^{\\pi/2} \\cos\\phi \\sin\\phi\\,d\\phi = R^3 \\cdot 2\\pi \\cdot \\frac{1}{2} = \\pi R^3$."
                ],
                "answer": "$\\pi R^3$",
                "lesson": "구면 매개변수화에서 $dS = R^2 \\sin\\phi\\,d\\phi\\,d\\theta$ 임을 기억하세요. $\\sin\\phi \\cos\\phi$ 적분은 $\\frac{1}{2}\\sin^2\\phi$ 로 쉽게 처리됩니다."
            }
        ],
        "problems": [
            {
                "id": "11-1",
                "type": "number",
                "difficulty": 1,
                "question": "$\\mathbf{F} = (0,0,3)$이 $z=0$ 평면의 $[0,2] \\times [0,3]$ 영역을 통과하는 유량은?",
                "answer": "18",
                "hints": ["법선 $(0,0,1)$.", "$\\mathbf{F} \\cdot \\mathbf{n} = 3$.", "$3 \\times 6 = 18$."],
                "explanation": "법선 내적 $3$, 넓이 $6$, 유량 $18$.",
                "wrongAnalysis": "법선 방향을 반대로 잡으면 $-18$이 됩니다."
            },
            {
                "id": "11-2",
                "type": "choice",
                "difficulty": 2,
                "question": "곡면의 미소 넓이 요소 $dS$를 구할 때 필요한 것은?",
                "choices": ["매개변수 편미분의 합", "매개변수 편미분의 외적의 크기", "매개변수 편미분의 내적", "야코비안의 행렬식"],
                "answer": "매개변수 편미분의 외적의 크기",
                "hints": [
                    "곡면을 $\\mathbf{r}(u,v)$로 매개변수화했다고 생각하세요.",
                    "두 접벡터 $\\mathbf{r}_u$, $\\mathbf{r}_v$가 만드는 평행사변형의 넓이를 구합니다."
                ],
                "explanation": "미소 넓이 요소는 두 접벡터가 만드는 평행사변형의 넓이입니다. 그래서 $dS=\\|\\mathbf{r}_u\\times\\mathbf{r}_v\\|\\,du\\,dv$를 사용합니다.",
                "wrongAnalysis": "내적은 두 벡터의 방향 유사성을 재는 값이고, 외적의 크기가 평행사변형의 넓이를 줍니다. 면적 요소에서는 외적을 써야 합니다."
            },
            {
                "id": "11-3",
                "type": "number",
                "difficulty": 3,
                "question": "$z = x^2+y^2$, $x^2+y^2 \\leq 1$ 위에서 $\\iint_S 1\\,dS$(곡면 넓이)는? (소수 넷째자리)",
                "answer": "5.3304",
                "hints": ["$dS = \\sqrt{1+4x^2+4y^2}\\,dA$.", "극좌표: $\\int_0^{2\\pi}\\int_0^1 r\\sqrt{1+4r^2}\\,dr\\,d\\theta$."],
                "explanation": "$2\\pi \\cdot \\frac{1}{12}(5\\sqrt{5}-1) \\approx 5.3304$.",
                "wrongAnalysis": "$dS = dA$로 놓으면 $\\pi$가 되어 틀립니다."
            },
            {
                "id": "11-4",
                "type": "choice",
                "difficulty": 1,
                "question": "$z = g(x,y)$ 로 주어진 곡면의 미소 넓이 요소 $dS$ 는?",
                "choices": [
                    "$\\sqrt{1 + g_x^2 + g_y^2}\\,dA$",
                    "$\\sqrt{g_x^2 + g_y^2}\\,dA$",
                    "$(1 + g_x^2 + g_y^2)\\,dA$",
                    "$dA$"
                ],
                "answer": "$\\sqrt{1 + g_x^2 + g_y^2}\\,dA$",
                "hints": [
                    "곡면이 기울어지면 넓이가 커집니다. 기울기가 클수록 보정 계수도 커집니다.",
                    "$\\mathbf{r}_x = (1, 0, g_x)$, $\\mathbf{r}_y = (0, 1, g_y)$ 의 외적의 크기를 구하세요."
                ],
                "explanation": "$\\mathbf{r}_x \\times \\mathbf{r}_y = (-g_x, -g_y, 1)$ 이고, 그 크기는 $\\sqrt{g_x^2 + g_y^2 + 1}$ 입니다. 따라서 $dS = \\sqrt{1 + g_x^2 + g_y^2}\\,dA$ 입니다.",
                "wrongAnalysis": "$dS = dA$ 로 놓으면 곡면의 기울어짐을 무시하는 것이며, 평면이 아닌 곡면에서는 항상 틀립니다."
            },
            {
                "id": "11-5",
                "type": "number",
                "difficulty": 2,
                "question": "$\\mathbf{F} = (0, 0, 5)$ 가 $z = 0$ 평면의 단위 정사각형 $[0,1] \\times [0,1]$ 을 통과하는 유량은?",
                "answer": "5",
                "hints": [
                    "$z = 0$ 평면의 위쪽 법선은 $(0, 0, 1)$ 입니다.",
                    "$\\mathbf{F} \\cdot \\mathbf{n} = (0,0,5) \\cdot (0,0,1) = 5$ 이고, 영역 넓이는 $1$ 입니다."
                ],
                "explanation": "법선 벡터 $\\mathbf{n} = (0,0,1)$ 이므로 $\\mathbf{F} \\cdot \\mathbf{n} = 5$. 유량 $= \\iint_S \\mathbf{F} \\cdot d\\mathbf{S} = 5 \\times 1 = 5$ 입니다.",
                "wrongAnalysis": "법선 방향을 아래쪽 $(0,0,-1)$ 로 잡으면 $-5$ 가 됩니다. 문제에서 지정한 방향을 확인하세요."
            }
        ],
        "summary": {
            "keyPoints": ["스칼라 면적분: $\\iint_S f\\,dS$.", "벡터 면적분(유량): $\\iint_S \\mathbf{F} \\cdot d\\mathbf{S}$.", "$z=g(x,y)$이면 $dS = \\sqrt{1+g_x^2+g_y^2}\\,dA$."],
            "formulas": ["dS = \\|\\mathbf{r}_u \\times \\mathbf{r}_v\\|\\,du\\,dv"],
            "commonMistakes": ["$dS$에서 외적의 크기 누락", "법선 방향(안/밖) 혼동"],
            "nextConnection": "면적분을 알았으니, 다음 단원에서 발산 정리와 스토크스 정리를 배웁니다."
        }
    },
    {
        "id": 13,
        "title": "미분형식과 외미분",
        "category": "다변수 미적분",
        "level": "심화",
        "question": "미분형식이란 무엇이고, 외미분 연산자 $d$는 그린·스토크스·발산 정리를 어떻게 통합할까?",
        "concept": {
            "intro": "지금까지 $f\\,dx$, $M\\,dx + N\\,dy$, $\\mathbf{F} \\cdot d\\mathbf{S}$ 같은 '적분할 대상'을 여러 형태로 만났습니다. 미분형식(differential form)은 이 모든 것을 통합하는 언어입니다.\n\n:::definition[미분형식의 분류]\n**$0$-형식**: 그냥 함수 $f(x,y,z)$입니다.\n**$1$-형식**: $\\omega = P\\,dx + Q\\,dy + R\\,dz$ — 선적분의 피적분 대상입니다. 벡터장 $\\mathbf{F} = (P,Q,R)$에 대응합니다.\n**$2$-형식**: $\\eta = A\\,dy \\wedge dz + B\\,dz \\wedge dx + C\\,dx \\wedge dy$ — 면적분의 피적분 대상입니다. 여기서 $\\wedge$(웨지 곱)는 **반대칭** 곱으로, $dx \\wedge dy = -dy \\wedge dx$이고 $dx \\wedge dx = 0$입니다.\n**$3$-형식**: $\\sigma = f\\,dx \\wedge dy \\wedge dz$ — 체적적분의 피적분 대상입니다.\n:::\n\n:::definition[외미분 (Exterior Derivative)]\n외미분 $d$는 $k$-형식을 $(k+1)$-형식으로 바꾸는 연산입니다.\n\n$0$-형식 $f$에 $d$를 적용하면 $1$-형식이 됩니다:\n$$df = \\frac{\\partial f}{\\partial x}\\,dx + \\frac{\\partial f}{\\partial y}\\,dy + \\frac{\\partial f}{\\partial z}\\,dz$$\n이것은 전미분(그래디언트)과 같습니다!\n\n$1$-형식 $\\omega = P\\,dx + Q\\,dy + R\\,dz$에 $d$를 적용하면 $2$-형식이 됩니다:\n$$d\\omega = \\left(\\frac{\\partial R}{\\partial y} - \\frac{\\partial Q}{\\partial z}\\right)dy \\wedge dz + \\left(\\frac{\\partial P}{\\partial z} - \\frac{\\partial R}{\\partial x}\\right)dz \\wedge dx + \\left(\\frac{\\partial Q}{\\partial x} - \\frac{\\partial P}{\\partial y}\\right)dx \\wedge dy$$\n이것은 $\\text{curl}\\,\\mathbf{F}$의 성분과 정확히 같습니다!\n\n$2$-형식에 $d$를 적용하면 $3$-형식이 되는데, 이것은 $\\text{div}\\,\\mathbf{F}$에 대응합니다.\n:::\n\n:::theorem[$d \\circ d = 0$]\n외미분을 두 번 하면 $0$입니다. 이것은 $\\text{curl}(\\nabla f) = 0$과 $\\text{div}(\\text{curl}\\,\\mathbf{F}) = 0$을 하나로 통합합니다.\n:::\n\n:::theorem[일반화된 스토크스 정리]\n모든 적분 정리가 하나로 합쳐집니다:\n$$\\int_{\\partial M} \\omega = \\int_M d\\omega$$\n'경계에서 $\\omega$의 적분 $=$ 내부에서 $d\\omega$의 적분'. 이 한 줄이 FTC, 그린, 스토크스, 발산 정리를 모두 포함합니다.\n:::",
            "intuition": "$d$는 '미분의 미분형식 버전'이에요. 함수를 미분하면 기울기(그래디언트)가 나오고, 기울기를 한 번 더 미분하면 회전(curl)이 나오고, 회전을 또 미분하면 발산(div)이 나옵니다.\n\n웨지 곱 $dx \\wedge dy$는 '방향 있는 넓이'입니다. $dx \\wedge dy$는 $xy$-평면의 양의 방향 넓이이고, $dy \\wedge dx$는 음의 방향이라 부호가 반대예요. $dx \\wedge dx = 0$인 것은 '같은 방향 두 벡터로는 넓이를 만들 수 없다'는 뜻입니다.\n\n$\\int_{\\partial M} \\omega = \\int_M d\\omega$는 놀라울 정도로 단순한 원리입니다: 경계의 적분 $=$ 내부의 미분 적분. 1차원이면 FTC, 2차원이면 그린, 3차원이면 스토크스/발산입니다.",
            "formula": "df = \\frac{\\partial f}{\\partial x}\\,dx + \\frac{\\partial f}{\\partial y}\\,dy + \\frac{\\partial f}{\\partial z}\\,dz \\quad (\\text{전미분} = \\text{그래디언트})\nd(P\\,dx + Q\\,dy) = \\left(\\frac{\\partial Q}{\\partial x} - \\frac{\\partial P}{\\partial y}\\right)dx \\wedge dy \\quad (= \\text{curl의 } z\\text{-성분})\ndx \\wedge dy = -dy \\wedge dx, \\quad dx \\wedge dx = 0\nd \\circ d = 0\n\\int_{\\partial M} \\omega = \\int_M d\\omega \\quad (\\text{일반화된 스토크스 정리})",
            "summary": ":::note[핵심 요약]\n미분형식은 적분의 피적분 대상을 통합하는 언어이며, 외미분 $d$는 $k$-형식을 $(k+1)$-형식으로 변환한다. $d(0\\text{-형식}) = $ 그래디언트, $d(1\\text{-형식}) = $ curl, $d(2\\text{-형식}) = $ div에 대응하고, $d \\circ d = 0$이다. 일반화된 스토크스 정리 $\\int_{\\partial M} \\omega = \\int_M d\\omega$가 모든 적분 정리를 통합한다.\n:::"
        },
        "examples": [
            {
                "title": "$1$-형식의 외미분 구하기",
                "problem": "$\\omega = xy\\,dx + x^2\\,dy$의 외미분 $d\\omega$를 구하시오.",
                "steps": [
                    "$d\\omega = d(xy) \\wedge dx + d(x^2) \\wedge dy$.",
                    "$d(xy) = y\\,dx + x\\,dy$이므로 $d(xy) \\wedge dx = (y\\,dx + x\\,dy) \\wedge dx = x\\,dy \\wedge dx$ ($dx \\wedge dx = 0$이므로).",
                    "$d(x^2) = 2x\\,dx$이므로 $d(x^2) \\wedge dy = 2x\\,dx \\wedge dy$.",
                    "$d\\omega = x\\,dy \\wedge dx + 2x\\,dx \\wedge dy = -x\\,dx \\wedge dy + 2x\\,dx \\wedge dy = x\\,dx \\wedge dy$.",
                    "검산: $\\frac{\\partial Q}{\\partial x} - \\frac{\\partial P}{\\partial y} = 2x - x = x$ ✓"
                ],
                "answer": "$d\\omega = x\\,dx \\wedge dy$",
                "lesson": "$1$-형식의 외미분은 $\\text{curl}$의 $z$-성분을 구하는 것과 같습니다. 웨지 곱의 반대칭성($dy \\wedge dx = -dx \\wedge dy$)을 이용하여 정리합니다."
            },
            {
                "title": "[기본] $0$-형식의 외미분",
                "problem": "$f(x,y,z) = x^2 z + y^3$ 의 외미분 $df$ 를 구하시오.",
                "steps": [
                    "$f_x = 2xz$, $f_y = 3y^2$, $f_z = x^2$.",
                    "$df = 2xz\\,dx + 3y^2\\,dy + x^2\\,dz$."
                ],
                "answer": "$df = 2xz\\,dx + 3y^2\\,dy + x^2\\,dz$",
                "lesson": "3변수 함수의 외미분(전미분)은 그래디언트를 $1$-형식으로 표현한 것입니다. 각 편미분에 해당 미분소를 곱합니다."
            },
            {
                "title": "[응용] 웨지 곱의 성질 활용",
                "problem": "$(2\\,dx + 3\\,dy) \\wedge (dx - dy)$ 를 계산하시오.",
                "steps": [
                    "분배법칙 적용: $2\\,dx \\wedge dx - 2\\,dx \\wedge dy + 3\\,dy \\wedge dx - 3\\,dy \\wedge dy$.",
                    "$dx \\wedge dx = 0$, $dy \\wedge dy = 0$.",
                    "$dy \\wedge dx = -dx \\wedge dy$.",
                    "$= 0 - 2\\,dx \\wedge dy + 3(-dx \\wedge dy) - 0 = -5\\,dx \\wedge dy$."
                ],
                "answer": "$-5\\,dx \\wedge dy$",
                "lesson": "웨지 곱은 분배법칙은 성립하지만 교환법칙이 성립하지 않습니다. $\\alpha \\wedge \\beta = -\\beta \\wedge \\alpha$ 와 $\\alpha \\wedge \\alpha = 0$ 을 항상 기억하세요."
            },
            {
                "title": "[응용] 2-형식의 외미분",
                "problem": "$\\eta = x\\,dy \\wedge dz + y\\,dz \\wedge dx + z\\,dx \\wedge dy$ 의 외미분 $d\\eta$ 를 구하시오.",
                "steps": [
                    "$d(x\\,dy \\wedge dz) = dx \\wedge dy \\wedge dz$.",
                    "$d(y\\,dz \\wedge dx) = dy \\wedge dz \\wedge dx = dx \\wedge dy \\wedge dz$ (부호 주의: 짝수 번 교환).",
                    "$d(z\\,dx \\wedge dy) = dz \\wedge dx \\wedge dy = dx \\wedge dy \\wedge dz$ (짝수 번 교환).",
                    "$d\\eta = 3\\,dx \\wedge dy \\wedge dz$."
                ],
                "answer": "$d\\eta = 3\\,dx \\wedge dy \\wedge dz$",
                "lesson": "이 $2$-형식은 벡터장 $\\mathbf{F} = (x, y, z)$ 에 대응하며, $d\\eta$ 의 계수 $3$ 은 $\\nabla \\cdot \\mathbf{F} = 1 + 1 + 1 = 3$ (발산)과 같습니다."
            },
            {
                "title": "[심화] 일반화된 스토크스 정리의 검증",
                "problem": "$\\omega = x\\,dy$ 에 대해, 정사각형 $[0,1]^2$ 의 경계에서 $\\int_{\\partial D} \\omega$ 와 내부에서 $\\int_D d\\omega$ 가 같음을 직접 확인하시오.",
                "steps": [
                    "$d\\omega = dx \\wedge dy$ 이므로 $\\displaystyle\\int_D d\\omega = \\int_0^1 \\int_0^1 1\\,dx\\,dy = 1$.",
                    "경계 $\\partial D$ 를 4변으로 분할 (반시계 방향):",
                    "아래변 ($y=0$, $x: 0 \\to 1$): $\\omega = x \\cdot 0 = 0$. 적분 $= 0$.",
                    "오른변 ($x=1$, $y: 0 \\to 1$): $\\omega = 1 \\cdot dy$. 적분 $= 1$.",
                    "위변 ($y=1$, $x: 1 \\to 0$): $\\omega = x \\cdot 0 = 0$ (경로상 $dy = 0$). 적분 $= 0$.",
                    "왼변 ($x=0$, $y: 1 \\to 0$): $\\omega = 0 \\cdot dy = 0$. 적분 $= 0$. 합계 $= 0 + 1 + 0 + 0 = 1$ ✓."
                ],
                "answer": "$\\displaystyle\\int_{\\partial D} \\omega = \\int_D d\\omega = 1$",
                "lesson": "일반화된 스토크스 정리 $\\int_{\\partial M} \\omega = \\int_M d\\omega$ 는 경계의 적분과 내부의 외미분 적분이 같음을 보장합니다. 구체적인 예에서 직접 확인하면 정리의 의미가 명확해집니다."
            }
        ],
        "problems": [
            {
                "id": "13-1",
                "type": "choice",
                "difficulty": 1,
                "question": "$dx \\wedge dy + dy \\wedge dx$의 값은?",
                "choices": [
                    "$2\\,dx \\wedge dy$",
                    "$0$",
                    "$dx \\wedge dy$",
                    "$-dx \\wedge dy$"
                ],
                "answer": "$0$",
                "hints": [
                    "웨지 곱의 핵심 성질: $dy \\wedge dx = -dx \\wedge dy$.",
                    "$dx \\wedge dy + (-dx \\wedge dy) = ?$"
                ],
                "explanation": "$dy \\wedge dx = -dx \\wedge dy$이므로, $dx \\wedge dy + dy \\wedge dx = dx \\wedge dy - dx \\wedge dy = 0$.",
                "wrongAnalysis": "$2\\,dx \\wedge dy$를 선택하면 웨지 곱의 반대칭성을 무시한 것입니다. 일반 곱과 달리 $dx \\wedge dy \\neq dy \\wedge dx$입니다."
            },
            {
                "id": "13-2",
                "type": "choice",
                "difficulty": 2,
                "question": "$f(x,y) = x^2 + y^2$의 외미분 $df$는?",
                "choices": [
                    "$2x\\,dx + 2y\\,dy$",
                    "$(x^2 + y^2)(dx + dy)$",
                    "$2(x + y)\\,dx$",
                    "$2x\\,dy + 2y\\,dx$"
                ],
                "answer": "$2x\\,dx + 2y\\,dy$",
                "hints": [
                    "$df = f_x\\,dx + f_y\\,dy$.",
                    "$f_x = 2x$, $f_y = 2y$."
                ],
                "explanation": "$df = \\frac{\\partial f}{\\partial x}\\,dx + \\frac{\\partial f}{\\partial y}\\,dy = 2x\\,dx + 2y\\,dy$. 이것은 전미분(그래디언트)과 같습니다.",
                "wrongAnalysis": "$(x^2+y^2)(dx+dy)$를 선택하면 $f$ 자체를 계수로 곱한 것인데, 외미분은 편미분을 계수로 합니다."
            },
            {
                "id": "13-3",
                "type": "choice",
                "difficulty": 3,
                "question": "$d(df) = d^2f$의 값은? (임의의 $C^2$ 함수 $f$에 대해)",
                "choices": [
                    "$f_{xx}\\,dx \\wedge dx + f_{yy}\\,dy \\wedge dy$",
                    "$(f_{xy} - f_{yx})\\,dx \\wedge dy$",
                    "$0$",
                    "$\\nabla^2 f\\,dx \\wedge dy$"
                ],
                "answer": "$0$",
                "hints": [
                    "$df = f_x\\,dx + f_y\\,dy$를 한 번 더 외미분하면?",
                    "$d(f_x\\,dx) = (f_{xy}\\,dy) \\wedge dx = f_{xy}\\,dy \\wedge dx$.",
                    "$d(f_y\\,dy) = (f_{yx}\\,dx) \\wedge dy = f_{yx}\\,dx \\wedge dy$.",
                    "$f_{xy} = f_{yx}$ (슈바르츠 정리)이고 $dy \\wedge dx = -dx \\wedge dy$."
                ],
                "explanation": "$d^2f = f_{xy}\\,dy \\wedge dx + f_{yx}\\,dx \\wedge dy = -f_{xy}\\,dx \\wedge dy + f_{yx}\\,dx \\wedge dy = (f_{yx} - f_{xy})\\,dx \\wedge dy = 0$. 슈바르츠 정리($f_{xy} = f_{yx}$)와 웨지 곱의 반대칭성이 결합하여 $d \\circ d = 0$이 됩니다.",
                "wrongAnalysis": "$\\nabla^2 f$를 선택하면 라플라시안과 혼동한 것입니다. $d^2 = 0$은 라플라시안이 아니라 외미분의 거듭적용이며, 이는 항상 $0$입니다."
            },
            {
                "id": "13-4",
                "type": "choice",
                "difficulty": 1,
                "question": "$dx \\wedge dx$ 의 값은?",
                "choices": [
                    "$0$",
                    "$dx^2$",
                    "$2\\,dx$",
                    "$1$"
                ],
                "answer": "$0$",
                "hints": [
                    "웨지 곱의 반대칭 성질을 생각하세요: $\\alpha \\wedge \\beta = -\\beta \\wedge \\alpha$.",
                    "$dx \\wedge dx = -dx \\wedge dx$ 이면 이 값이 될 수 있는 것은?"
                ],
                "explanation": "$dx \\wedge dx = -dx \\wedge dx$ 이므로 $2(dx \\wedge dx) = 0$, 즉 $dx \\wedge dx = 0$ 입니다. 같은 $1$-형식의 웨지 곱은 항상 $0$ 입니다.",
                "wrongAnalysis": "$dx^2$ 이라고 답하면 일반 곱과 웨지 곱을 혼동한 것입니다. 웨지 곱은 반대칭이므로 같은 것끼리 곱하면 $0$ 입니다."
            },
            {
                "id": "13-5",
                "type": "text",
                "difficulty": 2,
                "question": "$f(x,y) = xy$ 의 외미분 $df$ 를 구하시오. (예: y*dx+x*dy)",
                "answer": "y*dx+x*dy",
                "hints": [
                    "$df = f_x\\,dx + f_y\\,dy$ 입니다.",
                    "$f_x = y$, $f_y = x$ 를 대입하세요."
                ],
                "explanation": "$df = \\frac{\\partial(xy)}{\\partial x}\\,dx + \\frac{\\partial(xy)}{\\partial y}\\,dy = y\\,dx + x\\,dy$. 외미분은 전미분(그래디언트)과 같습니다.",
                "wrongAnalysis": "$df = x\\,dx + y\\,dy$ 로 쓰면 $f_x$ 와 $f_y$ 를 뒤바꾼 것입니다. $xy$ 의 $x$ 미분은 $y$ 이고 $y$ 미분은 $x$ 입니다."
            }
        ],
        "summary": {
            "keyPoints": [
                "$k$-형식: $0$-형식(함수), $1$-형식(선적분 대상), $2$-형식(면적분 대상), $3$-형식(체적적분 대상).",
                "외미분 $d$: grad($0 \\to 1$), curl($1 \\to 2$), div($2 \\to 3$)를 하나로 통합.",
                "$d \\circ d = 0$: curl(grad $f$) $= 0$, div(curl $\\mathbf{F}$) $= 0$의 통합.",
                "일반화된 스토크스: $\\int_{\\partial M} \\omega = \\int_M d\\omega$가 모든 적분 정리를 포함."
            ],
            "formulas": [
                "dx \\wedge dy = -dy \\wedge dx",
                "d \\circ d = 0",
                "\\int_{\\partial M} \\omega = \\int_M d\\omega"
            ],
            "commonMistakes": [
                "웨지 곱의 반대칭성을 잊고 $dx \\wedge dy = dy \\wedge dx$로 계산하는 실수.",
                "$d^2 = 0$을 라플라시안 $\\nabla^2$과 혼동하는 실수.",
                "$k$-형식의 차수를 혼동하여 선적분 대상에 면적분을 적용하는 실수."
            ],
            "nextConnection": "미분형식과 외미분으로 벡터 미적분을 대통합했습니다! 이제 미분방정식의 세계로 넘어가세요."
        }
    },
    {
        "id": 12,
        "title": "발산 정리와 스토크스 정리",
        "category": "다변수와 편미분",
        "level": "심화",
        "question": "3차원에서 면적분과 체적적분, 선적분과 면적분은 어떤 관계가 있는가?",
        "concept": {
            "intro": "이전 레슨에서 그린 정리를 통해 2차원에서의 선적분과 이중적분의 관계를 배웠습니다. 이제 무대를 3차원으로 확장합니다. 3차원에는 선(curve), 면(surface), 체적(volume)이라는 세 가지 대상이 있고, 이들 사이를 잇는 두 개의 위대한 정리가 있습니다.\n\n:::definition[면적분 (유량)]\n면적분 $\\iint_S \\mathbf{F} \\cdot d\\mathbf{S}$ 은 벡터장 $\\mathbf{F}$가 곡면 $S$를 '얼마나 뚫고 지나가는가'를 측정합니다. 곡면의 각 미소 조각에서 법선 벡터와 $\\mathbf{F}$의 내적을 합산한 것으로, 물리적으로는 곡면을 통과하는 유량(flux)을 나타냅니다.\n:::\n\n:::theorem[발산 정리 (가우스 정리)]\n닫힌 곡면 $S$를 통과하는 유량을, 그 곡면이 둘러싼 체적 $V$ 전체에서의 발산을 적분한 것과 같습니다:\n$$\\iint_S \\mathbf{F} \\cdot d\\mathbf{S} = \\iiint_V (\\nabla \\cdot \\mathbf{F})\\,dV$$\n직관적으로 '바깥으로 나가는 총 유량 = 내부에서 솟아나는 총량'입니다. 그린 정리의 발산(flux) 형태를 3차원으로 확장한 것입니다.\n:::\n\n:::theorem[스토크스 정리]\n곡면 $S$의 경계 곡선 $\\partial S = C$ 를 따른 선적분을, 곡면 위에서 회전(curl)의 면적분과 같다고 말합니다:\n$$\\oint_C \\mathbf{F} \\cdot d\\mathbf{r} = \\iint_S (\\nabla \\times \\mathbf{F}) \\cdot d\\mathbf{S}$$\n이것은 그린 정리의 순환(circulation) 형태를 3차원으로 확장한 것입니다.\n:::\n\n:::note[통합 원리]\n두 정리를 합치면, 미적분학의 기본정리(FTC)부터 그린 정리까지 모든 것이 '경계에서의 적분 = 내부에서의 미분 연산의 적분'이라는 하나의 원리로 통합됩니다.\n:::",
            "intuition": "방 안에 에어컨이 있다고 상상해 보세요. 발산 정리는 이렇게 말합니다: 방의 벽·천장·바닥(닫힌 곡면)을 통해 빠져나가는 공기의 총량은, 방 내부 전체에서 '에어컨이 내뿜는 공기량'(발산)을 합산한 것과 같습니다. 벽을 하나하나 조사할 필요 없이 내부의 발산만 적분하면 됩니다.\n\n스토크스 정리는 이런 비유입니다: 연못에 낙엽이 떠 있고, 낙엽의 가장자리를 따라 물이 얼마나 회전하는지(순환)를 알고 싶다면, 낙엽 전체 표면에서 '물의 소용돌이 정도'(curl)를 합산하면 됩니다. 가장자리와 내부가 연결되어 있는 것입니다.",
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
                "title": "[기본] 발산 정리의 간단한 적용",
                "problem": "$\\mathbf{F} = (x, y, z)$ 가 반지름 $2$ 인 구 $x^2+y^2+z^2 = 4$ 을 통과하는 유량을 구하시오.",
                "steps": [
                    "$\\nabla \\cdot \\mathbf{F} = 1 + 1 + 1 = 3$ (상수).",
                    "발산 정리: 유량 $= \\displaystyle\\iiint_V 3\\,dV = 3 \\times \\text{(구의 부피)}$.",
                    "구의 부피: $\\dfrac{4}{3}\\pi (2)^3 = \\dfrac{32\\pi}{3}$.",
                    "유량 $= 3 \\times \\dfrac{32\\pi}{3} = 32\\pi$."
                ],
                "answer": "$32\\pi$",
                "lesson": "발산이 상수이면 '발산 $\\times$ 부피'로 유량이 즉시 구해집니다. 면적분을 직접 계산하는 것보다 훨씬 간편합니다."
            },
            {
                "title": "[응용] 스토크스 정리의 적용",
                "problem": "$\\mathbf{F} = (-y, x, 0)$ 에 대해, 반지름 $1$ 인 원 $x^2+y^2=1$ ($z=0$ 평면, 반시계 방향)을 따른 선적분을 스토크스 정리로 구하시오.",
                "steps": [
                    "$\\nabla \\times \\mathbf{F} = \\begin{vmatrix} \\mathbf{i} & \\mathbf{j} & \\mathbf{k} \\\\ \\partial_x & \\partial_y & \\partial_z \\\\ -y & x & 0 \\end{vmatrix} = (0, 0, 1-(-1)) = (0, 0, 2)$.",
                    "곡면 $S$: $z=0$ 평면의 단위 원판. 법선 $\\mathbf{n} = (0,0,1)$.",
                    "$\\displaystyle\\iint_S (\\nabla \\times \\mathbf{F}) \\cdot d\\mathbf{S} = \\iint_D (0,0,2) \\cdot (0,0,1)\\,dA = \\iint_D 2\\,dA$.",
                    "$= 2 \\times \\pi(1)^2 = 2\\pi$."
                ],
                "answer": "$2\\pi$",
                "lesson": "스토크스 정리는 선적분을 면적분으로 변환합니다. curl이 상수 벡터이면 '(curl $\\cdot$ 법선) $\\times$ 곡면의 넓이'로 간단히 구할 수 있습니다."
            },
            {
                "title": "[응용] 발산 정리로 닫힌 곡면 유량 계산",
                "problem": "$\\mathbf{F} = (x^2, y^2, z^2)$ 가 정육면체 $[0,1]^3$ 의 표면을 통과하는 유량을 구하시오.",
                "steps": [
                    "$\\nabla \\cdot \\mathbf{F} = 2x + 2y + 2z$.",
                    "발산 정리: 유량 $= \\displaystyle\\iiint_{[0,1]^3} (2x + 2y + 2z)\\,dV$.",
                    "대칭성: $\\displaystyle\\iiint (2x)\\,dV = \\iiint (2y)\\,dV = \\iiint (2z)\\,dV$.",
                    "$\\displaystyle\\int_0^1\\int_0^1\\int_0^1 2x\\,dx\\,dy\\,dz = 2 \\cdot \\frac{1}{2} \\cdot 1 \\cdot 1 = 1$.",
                    "유량 $= 1 + 1 + 1 = 3$."
                ],
                "answer": "$3$",
                "lesson": "6개의 면에서 각각 면적분하는 대신, 발산 정리로 단일 삼중적분으로 변환하면 계산이 크게 간소화됩니다. 대칭성을 활용하면 더 빠릅니다."
            },
            {
                "title": "[심화] 스토크스 정리와 곡면 선택의 자유",
                "problem": "$\\mathbf{F} = (y^2, -xz, z^2)$ 에 대해, 구 $x^2+y^2+z^2 = 4$ 와 평면 $z = 1$ 의 교선(원)을 따른 선적분을 구하시오.",
                "steps": [
                    "$\\nabla \\times \\mathbf{F} = \\begin{vmatrix} \\mathbf{i} & \\mathbf{j} & \\mathbf{k} \\\\ \\partial_x & \\partial_y & \\partial_z \\\\ y^2 & -xz & z^2 \\end{vmatrix}$.",
                    "$\\mathbf{i}$: $\\frac{\\partial(z^2)}{\\partial y} - \\frac{\\partial(-xz)}{\\partial z} = 0 - (-x) = x$. $\\mathbf{j}$: $\\frac{\\partial(y^2)}{\\partial z} - \\frac{\\partial(z^2)}{\\partial x} = 0$. $\\mathbf{k}$: $\\frac{\\partial(-xz)}{\\partial x} - \\frac{\\partial(y^2)}{\\partial y} = -z - 2y$.",
                    "$\\nabla \\times \\mathbf{F} = (x, 0, -z-2y)$. 교선은 $z=1$ 평면의 원 $x^2+y^2 = 3$.",
                    "곡면으로 $z=1$ 평면의 원판을 선택. 법선 $\\mathbf{n} = (0,0,1)$.",
                    "$\\displaystyle\\iint_S (x, 0, -z-2y) \\cdot (0,0,1)\\,dA = \\iint_D (-1-2y)\\,dA$ ($z=1$ 대입).",
                    "$\\displaystyle\\iint_D (-1)\\,dA = -3\\pi$. $\\displaystyle\\iint_D (-2y)\\,dA = 0$ (대칭성). 결과 $= -3\\pi$."
                ],
                "answer": "$-3\\pi$",
                "lesson": "스토크스 정리에서 곡면은 경계가 같으면 어떤 곡면을 선택해도 됩니다. 가장 계산이 쉬운 곡면(주로 평면)을 선택하는 것이 핵심 전략입니다."
            }
        ],
        "problems": [
            {
                "id": "12-1",
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
                "id": "12-2",
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
                "id": "12-3",
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
                "id": "12-4",
                "type": "number",
                "difficulty": 1,
                "question": "$\\mathbf{F} = (x, y, z)$ 의 발산 $\\nabla \\cdot \\mathbf{F}$ 의 값은?",
                "answer": "3",
                "hints": [
                    "발산: $\\dfrac{\\partial P}{\\partial x} + \\dfrac{\\partial Q}{\\partial y} + \\dfrac{\\partial R}{\\partial z}$.",
                    "$\\dfrac{\\partial x}{\\partial x} = 1$, $\\dfrac{\\partial y}{\\partial y} = 1$, $\\dfrac{\\partial z}{\\partial z} = 1$."
                ],
                "explanation": "$\\nabla \\cdot \\mathbf{F} = 1 + 1 + 1 = 3$. 이 벡터장은 모든 점에서 균일하게 퍼져나가는 흐름입니다.",
                "wrongAnalysis": "발산을 벡터로 답하는 실수가 있습니다. 발산은 스칼라 양이며, 각 성분의 편미분을 '더한' 값입니다."
            },
            {
                "id": "12-5",
                "type": "choice",
                "difficulty": 2,
                "question": "발산 정리를 적용할 수 있는 조건은?",
                "choices": [
                    "곡면이 닫혀 있어야 한다",
                    "벡터장이 보존장이어야 한다",
                    "곡면이 평면이어야 한다",
                    "발산이 상수여야 한다"
                ],
                "answer": "곡면이 닫혀 있어야 한다",
                "hints": [
                    "발산 정리: $\\iint_S \\mathbf{F} \\cdot d\\mathbf{S} = \\iiint_V (\\nabla \\cdot \\mathbf{F})\\,dV$ 에서 $S$ 가 둘러싸는 체적 $V$ 가 정의되어야 합니다.",
                    "닫히지 않은 곡면은 '내부'를 정의할 수 없습니다."
                ],
                "explanation": "발산 정리는 닫힌 곡면 $S$ 를 통과하는 유량을 내부 체적 $V$ 에서의 발산 적분으로 변환합니다. 곡면이 닫혀 있어야 내부가 정의되므로, 이것이 필수 조건입니다.",
                "wrongAnalysis": "보존장 조건은 스토크스 정리와 관련이 있으며, 발산 정리에는 보존장일 필요가 없습니다."
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
            "nextConnection": "발산 정리와 스토크스 정리를 배웠으니, 다음 단원에서 미분형식과 외미분으로 이 모든 정리를 대통합합니다."
        }
    }
];
