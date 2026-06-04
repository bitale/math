"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lhopitalLessons = void 0;
exports.lhopitalLessons = [
    {
        "id": 5,
        "title": "로피탈의 법칙",
        "category": "극한",
        "level": "중급",
        "question": "$\\frac{0}{0}$ 이나 $\\frac{\\infty}{\\infty}$ 꼴의 부정형 극한을 체계적으로 구하는 방법은?",
        "concept": {
            "intro": ":::theorem[로피탈의 법칙 (L'Hôpital's Rule)]\n$$\\lim_{x \\to a} \\frac{f(x)}{g(x)} = \\lim_{x \\to a} \\frac{f'(x)}{g'(x)}$$\n단, $\\frac{0}{0}$ 또는 $\\frac{\\infty}{\\infty}$ 부정형이어야 하며, 우변의 극한이 존재하거나 $\\pm\\infty$ 일 때 성립합니다.\n:::\n\n**$0/0$ 형 예시**:\n• $\\lim_{x\\to 0} \\frac{\\sin x}{x} = \\lim_{x\\to 0} \\frac{\\cos x}{1} = 1$\n• $\\lim_{x\\to 0} \\frac{e^x - 1}{x} = \\lim_{x\\to 0} \\frac{e^x}{1} = 1$\n\n**$\\infty/\\infty$ 형 예시**:\n• $\\lim_{x\\to\\infty} \\frac{\\ln x}{x} = \\lim_{x\\to\\infty} \\frac{1/x}{1} = 0$\n\n:::note[다른 부정형의 변환]\n• $0 \\cdot \\infty$: $f \\cdot g = \\frac{f}{1/g}$ 로 바꿔 $\\frac{0}{0}$ 또는 $\\frac{\\infty}{\\infty}$ 형으로 변환\n• $1^\\infty$: $\\lim f^g = e^{\\lim g \\ln f}$ 로 변환\n• $\\infty - \\infty$: 통분하여 $\\frac{0}{0}$ 형으로 변환\n:::\n\n한 번 적용한 결과가 여전히 부정형이면 조건을 확인한 후 다시 적용할 수 있습니다.\n\n:::warning[주의]\n부정형이 아닌데 로피탈의 법칙을 적용하면 완전히 잘못된 답이 나옵니다! 또한, 분자·분모를 '각각' 미분해야 하며 몫의 미분법과 혼동하지 마세요.\n:::",
            "intuition": "분자와 분모가 함께 0이나 ∞로 갈 때, '누가 더 빨리 가는지'를 비교하는 것이 로피탈의 법칙입니다. 미분은 함수의 변화 속도를 알려주므로, 분자·분모를 각각 미분해서 속도를 비교합니다.",
            "formula": "$\\lim_{x \\to a} \\frac{f(x)}{g(x)} = \\lim_{x \\to a} \\frac{f'(x)}{g'(x)}$ (부정형일 때)",
            "summary": ":::note[핵심 요약]\n• 부정형 $\\frac{0}{0}$ 또는 $\\frac{\\infty}{\\infty}$ 에서만 적용 가능\n• 분자·분모를 각각 미분하여 극한 재계산\n• 여전히 부정형이면 반복 적용 가능\n• $0 \\cdot \\infty$, $1^\\infty$, $\\infty - \\infty$ 등은 먼저 변환 필요\n:::",
            "visuals": [
                {
                    "type": "function",
                    "title": "부정형 0/0: (eˣ−1)/x → 1",
                    "xRange": [-3, 3],
                    "yRange": [-1, 4],
                    "functions": [
                        { "expr": "(exp(x)-1)/x", "color": "#6366f1", "label": "(eˣ−1)/x" },
                        { "expr": "1", "color": "#ef4444", "dashed": true, "label": "극한값 = 1" }
                    ],
                    "points": [
                        { "x": 0, "y": 1, "label": "극한값", "color": "#ef4444", "hollow": true }
                    ]
                }
            ]
        },
        "examples": [
            {
                "title": "로피탈의 법칙 반복 적용",
                "problem": "$\\displaystyle\\lim_{x \\to 0} \\frac{e^x - 1 - x}{x^2}$ 의 값을 구하시오.",
                "steps": [
                    "$x = 0$ 을 대입하면 $\\frac{e^0 - 1 - 0}{0^2} = \\frac{0}{0}$ 부정형이다.",
                    "로피탈의 법칙 1회 적용: $\\lim_{x \\to 0} \\frac{e^x - 1}{2x}$. $x = 0$ 대입 시 $\\frac{0}{0}$ 으로 여전히 부정형이다.",
                    "로피탈의 법칙 2회 적용: $\\lim_{x \\to 0} \\frac{e^x}{2} = \\frac{e^0}{2} = \\frac{1}{2}$."
                ],
                "answer": "$\\dfrac{1}{2}$",
                "lesson": "로피탈의 법칙을 한 번 적용한 결과가 여전히 부정형이면, 조건을 다시 확인한 뒤 반복 적용할 수 있습니다. 매 단계마다 부정형 여부를 반드시 확인하세요."
            },
            {
                "title": "[기본] $\\frac{0}{0}$ 부정형에 로피탈의 법칙 적용",
                "problem": "$\\displaystyle\\lim_{x\\to 0} \\dfrac{\\sin x}{x}$ 의 값을 로피탈의 법칙으로 구하시오.",
                "steps": [
                    "$x = 0$ 대입 시 $\\dfrac{\\sin 0}{0} = \\dfrac{0}{0}$ 부정형이다.",
                    "로피탈의 법칙 적용: 분자의 도함수는 $\\cos x$, 분모의 도함수는 $1$.",
                    "$\\displaystyle\\lim_{x\\to 0} \\dfrac{\\cos x}{1} = \\cos 0 = 1$."
                ],
                "answer": "$1$",
                "lesson": "로피탈의 법칙은 부정형을 확인한 뒤, 분자·분모를 '각각' 미분합니다. 몫의 미분법과 혼동하지 마세요. 분자 따로, 분모 따로 미분하는 것입니다."
            },
            {
                "title": "[응용] $\\frac{\\infty}{\\infty}$ 부정형",
                "problem": "$\\displaystyle\\lim_{x\\to\\infty} \\dfrac{3x^2 + 1}{e^x}$ 의 값을 구하시오.",
                "steps": [
                    "$x \\to \\infty$ 일 때 분자 $\\to \\infty$, 분모 $\\to \\infty$ 이므로 $\\dfrac{\\infty}{\\infty}$ 부정형.",
                    "1회 적용: $\\dfrac{6x}{e^x}$. 여전히 $\\dfrac{\\infty}{\\infty}$ 이므로 한 번 더 적용.",
                    "2회 적용: $\\dfrac{6}{e^x}$. $x \\to \\infty$ 이면 $\\dfrac{6}{\\infty} = 0$."
                ],
                "answer": "$0$",
                "lesson": "지수함수 $e^x$ 는 어떤 다항함수보다 빠르게 증가합니다. 따라서 $\\dfrac{\\text{다항식}}{e^x}$ 의 극한은 항상 $0$ 입니다."
            },
            {
                "title": "[응용] $0 \\cdot \\infty$ 형의 변환",
                "problem": "$\\displaystyle\\lim_{x\\to 0^+} x \\ln x$ 의 값을 구하시오.",
                "steps": [
                    "$x \\to 0^+$ 일 때 $x \\to 0$, $\\ln x \\to -\\infty$ 이므로 $0 \\cdot (-\\infty)$ 형이다.",
                    "$x \\ln x = \\dfrac{\\ln x}{1/x}$ 로 변환하면 $\\dfrac{-\\infty}{\\infty}$ 부정형이 된다.",
                    "로피탈의 법칙 적용: $\\dfrac{(\\ln x)'}{(1/x)'} = \\dfrac{1/x}{-1/x^2} = -x$.",
                    "$x \\to 0^+$ 이면 $-x \\to 0$."
                ],
                "answer": "$0$",
                "lesson": "$0 \\cdot \\infty$ 형은 바로 로피탈의 법칙을 쓸 수 없으므로, $\\dfrac{0}{0}$ 이나 $\\dfrac{\\infty}{\\infty}$ 형으로 먼저 변환해야 합니다. $f \\cdot g = \\dfrac{f}{1/g}$ 로 바꾸는 것이 표준적 전략입니다."
            },
            {
                "title": "[심화] $1^\\infty$ 형 부정형의 처리",
                "problem": "$\\displaystyle\\lim_{x\\to 0^+} (1 + x)^{1/x}$ 의 값을 구하시오.",
                "steps": [
                    "$x \\to 0^+$ 일 때 밑 $\\to 1$, 지수 $\\to \\infty$ 이므로 $1^\\infty$ 부정형이다.",
                    "$y = (1+x)^{1/x}$ 로 놓으면 $\\ln y = \\dfrac{\\ln(1+x)}{x}$.",
                    "$\\displaystyle\\lim_{x\\to 0^+} \\dfrac{\\ln(1+x)}{x}$ 는 $\\dfrac{0}{0}$ 부정형이므로 로피탈의 법칙 적용.",
                    "$\\dfrac{(\\ln(1+x))'}{(x)'} = \\dfrac{1/(1+x)}{1} = \\dfrac{1}{1+x}$.",
                    "$x \\to 0^+$ 이면 $\\dfrac{1}{1+0} = 1$. 따라서 $\\ln y \\to 1$.",
                    "$y \\to e^1 = e$."
                ],
                "answer": "$e$",
                "lesson": "$1^\\infty$ 형은 로그를 취해 지수를 내린 뒤 $\\dfrac{0}{0}$ 형으로 변환하는 것이 정석입니다. 이 극한은 자연상수 $e$ 의 정의와 직결되는 유명한 결과입니다."
            }
        ],
        "problems": [
            {
                "id": "5-1",
                "type": "choice",
                "difficulty": 1,
                "question": "$\\displaystyle\\lim_{x\\to 0} \\frac{\\sin 3x}{x}$ 의 값은?",
                "choices": [
                    "$0$",
                    "$1$",
                    "$3$",
                    "$\\infty$"
                ],
                "answer": "$3$",
                "hints": [
                    "$x = 0$ 을 대입하면 $\\frac{0}{0}$ 부정형입니다.",
                    "로피탈의 법칙을 적용하면 분자의 도함수는 $3\\cos 3x$, 분모의 도함수는 $1$ 입니다.",
                    "$x = 0$ 을 대입하면 $\\frac{3\\cos 0}{1} = 3$ 입니다."
                ],
                "explanation": "$\\frac{0}{0}$ 부정형이므로 로피탈의 법칙 적용: $\\lim_{x\\to 0} \\frac{3\\cos 3x}{1} = 3\\cos 0 = 3$.",
                "wrongAnalysis": "$\\sin$ 함수 안의 계수 $3$ 을 무시하고 $\\lim_{x\\to 0} \\frac{\\sin x}{x} = 1$ 과 혼동하여 $1$ 로 답하는 실수가 많습니다."
            },
            {
                "id": "5-2",
                "type": "number",
                "difficulty": 2,
                "question": "$\\displaystyle\\lim_{x\\to\\infty} \\frac{\\ln x}{\\sqrt{x}}$ 의 값은?",
                "answer": "0",
                "hints": [
                    "$x \\to \\infty$ 일 때 분자 $\\ln x \\to \\infty$, 분모 $\\sqrt{x} \\to \\infty$ 이므로 $\\frac{\\infty}{\\infty}$ 부정형입니다.",
                    "분자의 도함수: $\\frac{1}{x}$. 분모의 도함수: $\\frac{1}{2\\sqrt{x}}$.",
                    "비를 구하면 $\\frac{1/x}{1/(2\\sqrt{x})} = \\frac{2\\sqrt{x}}{x} = \\frac{2}{\\sqrt{x}}$.",
                    "$x \\to \\infty$ 이면 $\\frac{2}{\\sqrt{x}} \\to 0$."
                ],
                "explanation": "$\\frac{\\infty}{\\infty}$ 부정형에 로피탈의 법칙 적용: $\\lim_{x\\to\\infty} \\frac{1/x}{1/(2\\sqrt{x})} = \\lim_{x\\to\\infty} \\frac{2}{\\sqrt{x}} = 0$. 로그 함수는 거듭제곱 함수보다 훨씬 느리게 증가합니다.",
                "wrongAnalysis": "분자·분모 모두 $\\infty$ 로 가므로 답이 $1$ 이라고 단정하는 실수가 있습니다. $\\frac{\\infty}{\\infty}$ 는 부정형이므로 반드시 추가 분석이 필요합니다."
            },
            {
                "id": "5-3",
                "type": "text",
                "difficulty": 3,
                "question": "$\\displaystyle\\lim_{x\\to 0^+} x \\ln x$ 의 값을 구하고, 풀이 과정을 서술하시오. (힌트: $0 \\cdot (-\\infty)$ 형을 $\\frac{\\infty}{\\infty}$ 형으로 변환하세요.)",
                "answer": "0",
                "hints": [
                    "$x \\to 0^+$ 일 때 $x \\to 0$, $\\ln x \\to -\\infty$ 이므로 $0 \\cdot (-\\infty)$ 부정형입니다.",
                    "$x \\ln x = \\frac{\\ln x}{1/x}$ 로 변환하면 $\\frac{-\\infty}{\\infty}$ 꼴이 됩니다.",
                    "로피탈의 법칙 적용: $\\frac{(\\ln x)'}{(1/x)'} = \\frac{1/x}{-1/x^2} = \\frac{-x^2}{x} = -x$.",
                    "$x \\to 0^+$ 이면 $-x \\to 0$."
                ],
                "explanation": "$0 \\cdot (-\\infty)$ 형을 $\\frac{\\ln x}{1/x}$ 로 변환하여 $\\frac{-\\infty}{\\infty}$ 부정형으로 만듭니다. 로피탈의 법칙 적용: $\\lim_{x\\to 0^+} \\frac{1/x}{-1/x^2} = \\lim_{x\\to 0^+} (-x) = 0$. 따라서 $\\lim_{x\\to 0^+} x \\ln x = 0$ 입니다.",
                "wrongAnalysis": "$0 \\cdot (-\\infty)$ 에서 '$0$ 이 이기므로 답은 $0$'이라고 직감적으로 판단하거나, 반대로 '$\\infty$ 가 이기므로 $-\\infty$'라고 판단하는 것은 모두 올바르지 않습니다. 반드시 부정형을 변환하여 정확히 계산해야 합니다."
            },
            {
                "id": "5-4",
                "type": "number",
                "difficulty": 1,
                "question": "$\\displaystyle\\lim_{x\\to 0} \\frac{e^x - 1}{x}$ 의 값은?",
                "answer": "1",
                "hints": [
                    "$x = 0$ 을 대입하면 $\\frac{0}{0}$ 부정형입니다.",
                    "로피탈의 법칙을 적용하세요: 분자의 도함수는 $e^x$, 분모의 도함수는 $1$ 입니다."
                ],
                "explanation": "$\\frac{0}{0}$ 부정형이므로 로피탈의 법칙 적용: $\\lim_{x\\to 0} \\frac{e^x}{1} = e^0 = 1$.",
                "wrongAnalysis": "$e^x$ 의 도함수를 $xe^{x-1}$ 로 잘못 구하는 실수가 있습니다. $e^x$ 의 도함수는 $e^x$ 자기 자신입니다."
            },
            {
                "id": "5-5",
                "type": "number",
                "difficulty": 2,
                "question": "$\\displaystyle\\lim_{x\\to 0} \\frac{\\sin x - x}{x^3}$ 의 값은? (분수 또는 소수로 입력)",
                "answer": "-0.1667",
                "hints": [
                    "$x = 0$ 대입 시 $\\frac{0}{0}$ 부정형이므로 로피탈의 법칙을 적용합니다.",
                    "1회 적용: $\\frac{\\cos x - 1}{3x^2}$. 여전히 $\\frac{0}{0}$ 이므로 한 번 더 적용합니다."
                ],
                "explanation": "1회: $\\frac{\\cos x - 1}{3x^2}$ ($\\frac{0}{0}$). 2회: $\\frac{-\\sin x}{6x}$ ($\\frac{0}{0}$). 3회: $\\frac{-\\cos x}{6} \\to \\frac{-1}{6} \\approx -0.1667$.",
                "wrongAnalysis": "로피탈의 법칙을 1회만 적용하고 멈추는 실수가 있습니다. 결과가 여전히 부정형이면 조건을 확인한 뒤 반복 적용해야 합니다."
            }
        ],
        "summary": {
            "keyPoints": [
                "로피탈의 법칙은 $\\frac{0}{0}$ 또는 $\\frac{\\infty}{\\infty}$ 부정형에서만 적용 가능하다.",
                "분자·분모를 각각 미분한 뒤 극한을 다시 구한다.",
                "결과가 여전히 부정형이면 반복 적용할 수 있다.",
                "$0 \\cdot \\infty$, $1^\\infty$, $\\infty - \\infty$ 등은 먼저 적절히 변환해야 한다."
            ],
            "formulas": [
                "\\lim_{x \\to a} \\frac{f(x)}{g(x)} = \\lim_{x \\to a} \\frac{f'(x)}{g'(x)}\\quad (\\text{부정형일 때})",
                "0 \\cdot \\infty \\text{ 변환: } f \\cdot g = \\frac{f}{1/g}",
                "1^\\infty \\text{ 변환: } \\lim f^g = e^{\\lim g \\ln f}"
            ],
            "commonMistakes": [
                "부정형이 아닌데 로피탈의 법칙을 적용하는 실수",
                "분자·분모를 '따로' 미분하지 않고 몫의 미분법을 적용하는 실수",
                "$0 \\cdot \\infty$ 등의 꼴을 변환 없이 바로 적용하려는 실수"
            ],
            "nextConnection": "극한이 함숫값과 일치할 때 '연속'이라 합니다. 다음 단원에서 연속과 불연속의 종류를 구분하고, 연속함수의 강력한 성질인 중간값 정리를 배웁니다."
        }
    }
];
