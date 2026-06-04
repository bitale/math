"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parametricLessons = void 0;
exports.parametricLessons = [
    {
        "id": 11,
        "title": "매개변수 방정식과 극좌표",
        "category": "적분",
        "level": "중급",
        "question": "매개변수 방정식과 극좌표로 표현된 곡선의 넓이와 길이는 어떻게 구할까?",
        "concept": {
            "intro": ":::definition[매개변수 방정식]\n매개변수 방정식은 곡선 위의 점을 제3의 변수(매개변수) $t$ 로 표현하는 방법입니다.\n$$x = f(t),\\quad y = g(t)$$\n:::\n\n:::theorem[매개변수 미분]\n$$\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt} = \\frac{g'(t)}{f'(t)}$$\n:::\n\n:::theorem[매개변수 곡선의 넓이와 호의 길이]\n**넓이:** $A = \\int_\\alpha^\\beta g(t) \\cdot f'(t)\\,dt$\n\n**호의 길이:** $L = \\int_\\alpha^\\beta \\sqrt{\\left(f'(t)\\right)^2 + \\left(g'(t)\\right)^2}\\,dt$\n:::\n\n:::definition[극좌표]\n극좌표는 원점에서의 거리 $r$ 과 각도 $\\theta$ 로 점의 위치를 표현합니다.\n$$r = f(\\theta)$$\n**직교좌표 변환:** $x = r\\cos\\theta,\\quad y = r\\sin\\theta$\n:::\n\n:::theorem[극좌표 넓이와 호의 길이]\n**넓이:** $A = \\frac{1}{2}\\int_\\alpha^\\beta r^2\\,d\\theta$\n\n**호의 길이:** $L = \\int_\\alpha^\\beta \\sqrt{r^2 + \\left(\\frac{dr}{d\\theta}\\right)^2}\\,d\\theta$\n:::\n\n:::note[대표 극좌표 곡선]\n- 원: $r = a$\n- 심장형(카디오이드): $r = 1 + \\cos\\theta$\n- 장미 곡선: $r = \\cos(n\\theta)$\n:::",
            "intuition": "직교좌표가 '가로·세로'로 위치를 지정하는 것이라면, 극좌표는 '거리·각도'로 지정합니다. 회전 대칭 도형은 극좌표가 훨씬 간단합니다.",
            "formula": "\\frac{dy}{dx} = \\frac{g'(t)}{f'(t)}\nA_{\\text{극}} = \\frac{1}{2}\\int_\\alpha^\\beta r^2\\,d\\theta\nL_{\\text{매개}} = \\int_\\alpha^\\beta \\sqrt{(f')^2 + (g')^2}\\,dt",
            "summary": "• 매개변수: $x = f(t),\\ y = g(t)$ 로 곡선 표현\n• 극좌표: $r = f(\\theta)$ 로 곡선 표현\n• 넓이와 호의 길이 공식이 각각 존재\n• 회전 대칭 도형은 극좌표가 유리",
            "visuals": [
                {
                    "type": "function",
                    "title": "극좌표 곡선: r = 1 + cos θ (카디오이드)",
                    "xRange": [-1.5, 2.5],
                    "yRange": [-2, 2],
                    "functions": [
                        { "expr": "sqrt(1 - x^2)", "color": "#94a3b8", "dashed": true, "label": "", "domain": [-1, 1] },
                        { "expr": "-sqrt(1 - x^2)", "color": "#94a3b8", "dashed": true, "domain": [-1, 1] }
                    ],
                    "shapes": [
                        { "type": "circle", "cx": 0.5, "cy": 0, "rx": 0.5, "color": "#e2e8f0", "fill": "none" }
                    ],
                    "annotations": [
                        { "x": 1.8, "y": 1.5, "text": "r = 1+cosθ", "color": "#6366f1" },
                        { "x": -0.5, "y": -1.5, "text": "심장형 곡선", "color": "#334155" }
                    ]
                }
            ]
        },
        "examples": [
            {
                "title": "[기본] 카디오이드의 넓이 (극좌표 적분)",
                "problem": "극좌표 $r = 1 + \\cos\\theta$ (카디오이드)의 넓이를 구하시오.",
                "steps": [
                    "극좌표 넓이 공식: $A = \\frac{1}{2}\\int_0^{2\\pi} r^2\\,d\\theta = \\frac{1}{2}\\int_0^{2\\pi} (1 + \\cos\\theta)^2\\,d\\theta$.",
                    "전개: $(1 + \\cos\\theta)^2 = 1 + 2\\cos\\theta + \\cos^2\\theta$.",
                    "$\\cos^2\\theta = \\frac{1 + \\cos 2\\theta}{2}$ 를 이용하면 $1 + 2\\cos\\theta + \\frac{1}{2} + \\frac{\\cos 2\\theta}{2} = \\frac{3}{2} + 2\\cos\\theta + \\frac{\\cos 2\\theta}{2}$.",
                    "$\\int_0^{2\\pi} \\cos\\theta\\,d\\theta = 0$, $\\int_0^{2\\pi} \\cos 2\\theta\\,d\\theta = 0$ 이므로 $\\int_0^{2\\pi} \\left(\\frac{3}{2} + 2\\cos\\theta + \\frac{\\cos 2\\theta}{2}\\right) d\\theta = \\frac{3}{2} \\cdot 2\\pi = 3\\pi$.",
                    "$A = \\frac{1}{2} \\cdot 3\\pi = \\frac{3\\pi}{2}$."
                ],
                "answer": "$\\dfrac{3\\pi}{2}$",
                "lesson": "극좌표 넓이 공식 $A = \\frac{1}{2}\\int r^2\\,d\\theta$ 에서 $r^2$ 을 전개한 후, 삼각함수의 주기성을 이용하면 $\\cos\\theta$, $\\cos 2\\theta$ 등의 적분이 한 주기에서 $0$ 이 되어 계산이 크게 단순해집니다."
            },
            {
                "title": "[기본] 매개변수 곡선의 접선 기울기",
                "problem": "$x = t^2$, $y = t^3$ 일 때, $t = 2$ 에서의 접선 기울기를 구하시오.",
                "steps": [
                    "$\\dfrac{dy}{dx} = \\dfrac{dy/dt}{dx/dt} = \\dfrac{3t^2}{2t} = \\dfrac{3t}{2}$.",
                    "$t = 2$ 대입: $\\dfrac{3 \\cdot 2}{2} = 3$."
                ],
                "answer": "$3$",
                "lesson": "매개변수 곡선의 접선 기울기는 $\\dfrac{dy/dt}{dx/dt}$ 입니다. $y$ 의 변화율을 $x$ 의 변화율로 나누는 것이므로 연쇄법칙의 직접 적용입니다."
            },
            {
                "title": "[응용] 극좌표 원의 넓이",
                "problem": "극좌표 $r = \\cos\\theta$ ($0 \\leq \\theta \\leq \\pi$) 로 둘러싸인 영역의 넓이를 구하시오.",
                "steps": [
                    "극좌표 넓이 공식: $A = \\dfrac{1}{2}\\displaystyle\\int_0^{\\pi} \\cos^2\\theta\\,d\\theta$.",
                    "반각 공식: $\\cos^2\\theta = \\dfrac{1 + \\cos 2\\theta}{2}$.",
                    "$A = \\dfrac{1}{2}\\displaystyle\\int_0^{\\pi} \\dfrac{1+\\cos 2\\theta}{2}\\,d\\theta = \\dfrac{1}{4}\\left[\\theta + \\dfrac{\\sin 2\\theta}{2}\\right]_0^{\\pi}$.",
                    "$= \\dfrac{1}{4}(\\pi + 0) = \\dfrac{\\pi}{4}$."
                ],
                "answer": "$\\dfrac{\\pi}{4}$",
                "lesson": "$r = \\cos\\theta$ 는 중심이 $(1/2, 0)$, 반지름 $1/2$ 인 원입니다. 직교좌표에서의 넓이 $\\pi(1/2)^2 = \\pi/4$ 와 극좌표 적분 결과가 일치합니다."
            },
            {
                "title": "[응용] 매개변수 곡선의 넓이",
                "problem": "사이클로이드 $x = t - \\sin t$, $y = 1 - \\cos t$ ($0 \\leq t \\leq 2\\pi$) 의 한 아치 아래 넓이를 구하시오.",
                "steps": [
                    "매개변수 넓이 공식: $A = \\displaystyle\\int_0^{2\\pi} y(t) \\cdot x'(t)\\,dt$.",
                    "$x'(t) = 1 - \\cos t$. $y(t) = 1 - \\cos t$.",
                    "$A = \\displaystyle\\int_0^{2\\pi} (1 - \\cos t)^2\\,dt = \\int_0^{2\\pi} (1 - 2\\cos t + \\cos^2 t)\\,dt$.",
                    "$\\cos^2 t = \\dfrac{1+\\cos 2t}{2}$ 적용: $\\displaystyle\\int_0^{2\\pi} \\left(\\dfrac{3}{2} - 2\\cos t + \\dfrac{\\cos 2t}{2}\\right)dt$.",
                    "$= \\dfrac{3}{2} \\cdot 2\\pi - 0 + 0 = 3\\pi$."
                ],
                "answer": "$3\\pi$",
                "lesson": "사이클로이드의 한 아치 아래 넓이가 $3\\pi$ 라는 것은 '굴린 원의 넓이 $\\pi r^2$ 의 $3$배'라는 유명한 결과입니다 ($r = 1$)."
            },
            {
                "title": "[심화] 극좌표 호의 길이 — 카디오이드",
                "problem": "$r = 1 + \\cos\\theta$ ($0 \\leq \\theta \\leq 2\\pi$) 의 호의 길이를 구하시오.",
                "steps": [
                    "극좌표 호의 길이: $L = \\displaystyle\\int_0^{2\\pi} \\sqrt{r^2 + (r')^2}\\,d\\theta$.",
                    "$r' = -\\sin\\theta$. $r^2 + (r')^2 = (1+\\cos\\theta)^2 + \\sin^2\\theta = 2 + 2\\cos\\theta$.",
                    "반각 공식: $2 + 2\\cos\\theta = 4\\cos^2(\\theta/2)$. $\\sqrt{4\\cos^2(\\theta/2)} = 2|\\cos(\\theta/2)|$.",
                    "대칭성: $L = 2\\displaystyle\\int_0^{\\pi} 2\\cos(\\theta/2)\\,d\\theta = 4\\int_0^{\\pi} \\cos(\\theta/2)\\,d\\theta$.",
                    "$= 4\\left[2\\sin(\\theta/2)\\right]_0^{\\pi} = 4 \\cdot 2 \\cdot 1 = 8$."
                ],
                "answer": "$8$",
                "lesson": "극좌표 호의 길이 계산에서 $r^2 + (r')^2$ 를 정리할 때 반각 공식이 핵심입니다. 절대값 처리를 위해 대칭 구간을 활용하세요."
            }
        ],
        "problems": [
            {
                "id": "11-1",
                "type": "choice",
                "difficulty": 1,
                "question": "극좌표 $r = 3$ 이 나타내는 도형은?",
                "choices": [
                    "원점을 지나는 직선",
                    "반지름 3인 원",
                    "반지름 9인 원",
                    "타원"
                ],
                "answer": "반지름 3인 원",
                "hints": [
                    "극좌표에서 $r$ 은 원점에서의 거리를 나타냅니다.",
                    "$r = 3$ 은 '원점에서 거리가 항상 $3$인 점들의 집합'입니다.",
                    "원점에서 일정한 거리에 있는 점들의 집합은 원입니다."
                ],
                "explanation": "극좌표에서 $r = 3$ 은 원점에서 거리가 항상 $3$ 인 모든 점의 집합, 즉 원점을 중심으로 한 반지름 $3$ 의 원입니다.",
                "wrongAnalysis": "$r^2 = 9$ 와 혼동하여 '반지름 9인 원'이라 답하거나, $r$ 을 지름으로 착각하는 실수가 있습니다."
            },
            {
                "id": "11-2",
                "type": "number",
                "difficulty": 2,
                "question": "매개변수 방정식 $x = \\cos t,\\ y = \\sin t$ ($0 \\le t \\le 2\\pi$)의 호의 길이를 구하시오. (답은 소수점 없이 $\\pi$ 의 계수로 입력. 예: $2\\pi$ 이면 2 입력)",
                "answer": "2",
                "hints": [
                    "$f'(t) = -\\sin t$, $g'(t) = \\cos t$ 입니다.",
                    "$\\sqrt{(-\\sin t)^2 + (\\cos t)^2} = \\sqrt{\\sin^2 t + \\cos^2 t} = 1$.",
                    "$L = \\int_0^{2\\pi} 1\\,dt = 2\\pi$."
                ],
                "explanation": "$x' = -\\sin t$, $y' = \\cos t$ 이므로 $\\sqrt{(x')^2 + (y')^2} = \\sqrt{\\sin^2 t + \\cos^2 t} = 1$. 따라서 $L = \\int_0^{2\\pi} 1\\,dt = 2\\pi$. 이것은 반지름 $1$ 인 단위원의 둘레와 같습니다.",
                "wrongAnalysis": "$\\sqrt{\\cos^2 t + \\sin^2 t}$ 를 $\\sqrt{2}$ 로 계산하거나, 피타고라스 항등식을 적용하지 못하는 실수가 있습니다."
            },
            {
                "id": "11-3",
                "type": "text",
                "difficulty": 3,
                "question": "극좌표 $r = \\cos\\theta$ ($0 \\le \\theta \\le \\pi$)로 둘러싸인 영역의 넓이를 구하고 풀이 과정을 서술하시오.",
                "answer": "π/4",
                "hints": [
                    "극좌표 넓이 공식: $A = \\frac{1}{2}\\int_0^\\pi \\cos^2\\theta\\,d\\theta$.",
                    "$\\cos^2\\theta = \\frac{1 + \\cos 2\\theta}{2}$ 를 이용하세요.",
                    "$\\int_0^\\pi \\frac{1 + \\cos 2\\theta}{2}\\,d\\theta = \\frac{1}{2}\\left[\\theta + \\frac{\\sin 2\\theta}{2}\\right]_0^\\pi = \\frac{\\pi}{2}$.",
                    "$A = \\frac{1}{2} \\cdot \\frac{\\pi}{2} = \\frac{\\pi}{4}$."
                ],
                "explanation": "$A = \\frac{1}{2}\\int_0^\\pi \\cos^2\\theta\\,d\\theta$. 반각 공식 $\\cos^2\\theta = \\frac{1 + \\cos 2\\theta}{2}$ 를 적용하면 $A = \\frac{1}{2}\\int_0^\\pi \\frac{1 + \\cos 2\\theta}{2}\\,d\\theta = \\frac{1}{4}\\left[\\theta + \\frac{\\sin 2\\theta}{2}\\right]_0^\\pi = \\frac{1}{4}(\\pi + 0) = \\frac{\\pi}{4}$. 참고로 $r = \\cos\\theta$ 는 중심이 $(\\frac{1}{2}, 0)$ 이고 반지름이 $\\frac{1}{2}$ 인 원입니다.",
                "wrongAnalysis": "적분 범위를 $0$ 에서 $2\\pi$ 로 잡으면 $r = \\cos\\theta$ 가 음수인 구간에서 곡선이 반복되어 넓이가 중복 계산됩니다. 또한 반각 공식을 빠뜨리고 $\\int \\cos\\theta\\,d\\theta$ 를 계산하는 실수가 있습니다."
            },
            {
                "id": "11-4",
                "type": "choice",
                "difficulty": 1,
                "question": "극좌표에서 점 $(r, \\theta) = (2, \\pi/2)$ 를 직교좌표 $(x, y)$ 로 변환하면?",
                "choices": [
                    "$(2, 0)$",
                    "$(0, 2)$",
                    "$(-2, 0)$",
                    "$(0, -2)$"
                ],
                "answer": "$(0, 2)$",
                "hints": [
                    "$x = r\\cos\\theta$, $y = r\\sin\\theta$.",
                    "$x = 2\\cos(\\pi/2) = 0$, $y = 2\\sin(\\pi/2) = 2$."
                ],
                "explanation": "$x = 2\\cos(\\pi/2) = 0$, $y = 2\\sin(\\pi/2) = 2$. 따라서 직교좌표는 $(0, 2)$ 입니다.",
                "wrongAnalysis": "$\\cos(\\pi/2)$ 와 $\\sin(\\pi/2)$ 의 값을 혼동하는 실수가 흔합니다. $\\cos(\\pi/2) = 0$, $\\sin(\\pi/2) = 1$ 입니다."
            },
            {
                "id": "11-5",
                "type": "number",
                "difficulty": 2,
                "question": "극좌표 $r = 2$ 로 둘러싸인 영역의 넓이는? ($\\pi$ 의 계수만 입력. 예: $4\\pi$ 이면 4 입력)",
                "answer": "4",
                "hints": [
                    "극좌표 넓이 공식: $A = \\dfrac{1}{2}\\displaystyle\\int_0^{2\\pi} r^2\\,d\\theta$.",
                    "$A = \\dfrac{1}{2}\\displaystyle\\int_0^{2\\pi} 4\\,d\\theta = \\dfrac{1}{2} \\cdot 4 \\cdot 2\\pi$."
                ],
                "explanation": "$A = \\dfrac{1}{2}\\displaystyle\\int_0^{2\\pi} 4\\,d\\theta = \\dfrac{1}{2} \\cdot 8\\pi = 4\\pi$. 이는 반지름 $2$ 인 원의 넓이 $\\pi r^2 = 4\\pi$ 와 일치합니다.",
                "wrongAnalysis": "극좌표 넓이 공식의 $\\dfrac{1}{2}$ 를 빠뜨려 $8\\pi$ 로 답하는 실수가 흔합니다."
            }
        ],
        "summary": {
            "keyPoints": [
                "매개변수 방정식은 곡선 위의 점을 $x = f(t),\\ y = g(t)$ 로 표현한다.",
                "극좌표는 원점 기준 거리와 각도 $r = f(\\theta)$ 로 점을 표현한다.",
                "극좌표 넓이: $A = \\frac{1}{2}\\int r^2\\,d\\theta$.",
                "매개변수 호의 길이: $L = \\int \\sqrt{(f')^2 + (g')^2}\\,dt$."
            ],
            "formulas": [
                "\\frac{dy}{dx} = \\frac{g'(t)}{f'(t)}",
                "A_{\\text{극}} = \\frac{1}{2}\\int_\\alpha^\\beta r^2\\,d\\theta",
                "L_{\\text{매개}} = \\int_\\alpha^\\beta \\sqrt{(f')^2 + (g')^2}\\,dt",
                "L_{\\text{극}} = \\int_\\alpha^\\beta \\sqrt{r^2 + (r')^2}\\,d\\theta"
            ],
            "commonMistakes": [
                "극좌표 넓이에서 $\\frac{1}{2}$ 를 빠뜨리는 실수",
                "매개변수 미분에서 $\\frac{dy}{dx}$ 를 $\\frac{f'(t)}{g'(t)}$ 로 뒤집어 쓰는 실수",
                "극좌표 적분 범위를 잘못 설정하여 넓이를 중복 계산하는 실수"
            ],
            "nextConnection": "적분 구간이 무한하거나 피적분함수가 발산할 때의 '이상적분'을 다룹니다."
        }
    }
];
