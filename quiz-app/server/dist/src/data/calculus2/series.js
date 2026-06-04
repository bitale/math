"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seriesLessons = void 0;
exports.seriesLessons = [
    {
        "id": 17,
        "title": "멱급수",
        "category": "급수와 테일러",
        "level": "고급",
        "question": "무한급수의 수렴·발산을 어떻게 체계적으로 판정하고, 멱급수의 수렴 범위는 어떻게 결정하는가?",
        "concept": {
            "intro": "이전 레슨에서 등비급수, 조화급수, $p$-급수 등 구체적인 급수를 살펴보며 수렴·발산의 감을 잡았습니다. 하지만 실전에서 만나는 급수 $\\sum a_n$ 은 깔끔한 공식이 없는 경우가 대부분입니다. 이때 필요한 것이 수렴판정법(convergence test)입니다.\n\n:::theorem[비교판정법 (Comparison Test)]\n양의 급수 $\\sum a_n$ 에서 $0 \\leq a_n \\leq b_n$ 이고 $\\sum b_n$ 이 수렴하면 $\\sum a_n$ 도 수렴합니다. 반대로 $a_n \\geq c_n \\geq 0$ 이고 $\\sum c_n$ 이 발산하면 $\\sum a_n$ 도 발산합니다.\n:::\n\n:::theorem[비율판정법 (Ratio Test)]\n$\\lim_{n \\to \\infty} \\left|\\frac{a_{n+1}}{a_n}\\right| = L$ 일 때, $L < 1$ 이면 절대수렴, $L > 1$ 이면 발산, $L = 1$ 이면 판정 불능입니다. 팩토리얼이나 거듭제곱이 포함된 급수에서 특히 위력적입니다.\n:::\n\n:::theorem[적분판정법 (Integral Test)]\n$f(x)$ 가 $[1,\\infty)$ 에서 양, 연속, 감소이고 $a_n = f(n)$ 이면, $\\sum_{n=1}^{\\infty} a_n$ 과 $\\int_1^{\\infty} f(x)\\,dx$ 가 동시에 수렴하거나 동시에 발산합니다.\n:::\n\n:::theorem[교대급수 판정법 (Alternating Series Test)]\n부호가 교대하는 급수 $\\sum (-1)^n b_n$ 에서, $b_n$ 이 양이고 단조감소하며 $b_n \\to 0$ 이면 수렴을 보장합니다.\n:::\n\n:::definition[멱급수와 수렴반경]\n멱급수(power series) $\\sum_{n=0}^{\\infty} a_n (x-c)^n$ 의 수렴반경 $R$ 은 비율판정법을 적용하여 $R = \\lim_{n \\to \\infty} \\left|\\frac{a_n}{a_{n+1}}\\right|$ 로 구할 수 있으며, 멱급수는 $|x-c| < R$ 에서 절대수렴, $|x-c| > R$ 에서 발산합니다.\n:::\n\n멱급수의 수렴 이론을 익히면, 다음 레슨에서 배울 테일러 급수를 통해 복잡한 함수를 다항식처럼 다룰 수 있게 됩니다.",
            "intuition": "수렴판정법은 '저울질'에 비유할 수 있습니다. 급수의 일반항 $a_n$ 이 이미 수렴한다고 알려진 급수의 일반항보다 작으면(비교판정법), 우리 급수도 수렴합니다. 비율판정법은 '항이 줄어드는 비율'을 보는 것으로, 매 항이 이전 항의 $L$배($L<1$)로 줄어들면 등비급수보다 빠르게 줄어들어 수렴합니다.\n\n멱급수의 수렴반경 $R$ 은 '폭탄의 폭발 범위' 같은 것입니다. 중심 $c$ 에서 $R$ 이내는 안전(수렴), $R$ 밖은 위험(발산), 경계 $|x-c|=R$ 에서는 별도 확인이 필요합니다.",
            "formula": "\\text{비교판정법:}\\ 0 \\leq a_n \\leq b_n,\\ \\sum b_n\\ \\text{수렴} \\Rightarrow \\sum a_n\\ \\text{수렴}\n\\text{비율판정법:}\\ L = \\lim_{n \\to \\infty} \\left|\\frac{a_{n+1}}{a_n}\\right|;\\ L<1\\ \\text{수렴},\\ L>1\\ \\text{발산}\n\\text{적분판정법:}\\ \\sum_{n=1}^{\\infty} f(n)\\ \\text{과}\\ \\int_1^{\\infty} f(x)\\,dx\\ \\text{동시 수렴/발산}\n\\text{교대급수:}\\ \\sum (-1)^n b_n,\\ b_n > 0,\\ b_n \\searrow 0 \\Rightarrow \\text{수렴}\n\\text{멱급수:}\\ \\sum a_n(x-c)^n,\\quad R = \\lim_{n \\to \\infty} \\left|\\frac{a_n}{a_{n+1}}\\right|\n|x-c| < R\\ \\text{절대수렴},\\quad |x-c| > R\\ \\text{발산}",
            "summary": "• 비교판정법: 큰 급수 수렴 → 작은 급수 수렴\n• 비율판정법: 연속 항의 비 $L<1$ → 수렴\n• 적분판정법: 급수와 이상적분이 같은 운명\n• 멱급수 $\\sum a_n(x-c)^n$ 은 수렴반경 $R$ 안에서 수렴"
        },
        "examples": [
            {
                "title": "[기본] $\\sum_{n=0}^{\\infty} \\frac{x^n}{n!}$ 의 수렴반경 구하기",
                "problem": "멱급수 $\\sum_{n=0}^{\\infty} \\frac{x^n}{n!}$ 의 수렴반경 $R$ 을 구하시오.",
                "steps": [
                    "$a_n = \\frac{1}{n!}$ 로 놓으면, 비율판정법을 적용한다.",
                    "$\\left|\\frac{a_{n+1} x^{n+1}}{a_n x^n}\\right| = \\left|\\frac{x^{n+1}}{(n+1)!} \\cdot \\frac{n!}{x^n}\\right| = \\frac{|x|}{n+1}$.",
                    "$\\lim_{n \\to \\infty} \\frac{|x|}{n+1} = 0 < 1$ 이므로, 모든 $x$ 에 대해 수렴한다.",
                    "따라서 수렴반경 $R = \\infty$ 이다."
                ],
                "answer": "$R = \\infty$ (모든 실수 $x$ 에서 수렴)",
                "lesson": "팩토리얼 $n!$ 은 기하급수적으로 증가하므로 $\\frac{x^n}{n!}$ 은 매우 빠르게 줄어듭니다. 이 급수는 사실 $e^x$ 의 테일러 급수입니다. 수렴반경이 무한이라는 것은 이 급수가 전체 실수에서 $e^x$ 를 정확히 나타낸다는 뜻입니다."
            },
            {
                "title": "[기본] 적분판정법 적용: $\\sum \\frac{1}{n^2}$",
                "problem": "$\\displaystyle\\sum_{n=1}^{\\infty} \\frac{1}{n^2}$ 이 수렴하는지 적분판정법으로 판정하시오.",
                "steps": [
                    "$f(x) = \\dfrac{1}{x^2}$ 는 $[1, \\infty)$ 에서 양, 연속, 감소이다.",
                    "$\\displaystyle\\int_1^{\\infty} \\frac{dx}{x^2} = \\lim_{t \\to \\infty} \\left[-\\frac{1}{x}\\right]_1^t = 0 + 1 = 1$ (수렴).",
                    "적분판정법에 의해 $\\sum \\dfrac{1}{n^2}$ 도 수렴한다."
                ],
                "answer": "수렴 (적분값 $1$ 이 유한이므로)",
                "lesson": "적분판정법은 급수와 이상적분의 수렴·발산이 같다는 원리입니다. 단, 급수의 합과 적분값은 같지 않습니다 ($\\sum 1/n^2 = \\pi^2/6$)."
            },
            {
                "title": "[응용] 수렴반경과 경계점 분석",
                "problem": "$\\displaystyle\\sum_{n=1}^{\\infty} \\frac{x^n}{n}$ 의 수렴반경 $R$ 을 구하고, 경계점 $x = \\pm R$ 에서의 수렴·발산을 판정하시오.",
                "steps": [
                    "$a_n = \\dfrac{1}{n}$. $R = \\lim \\left|\\dfrac{a_n}{a_{n+1}}\\right| = \\lim \\dfrac{n+1}{n} = 1$.",
                    "$x = 1$: $\\sum \\dfrac{1}{n}$ (조화급수) — 발산.",
                    "$x = -1$: $\\sum \\dfrac{(-1)^n}{n}$ (교대 조화급수) — 교대급수 판정법에 의해 수렴.",
                    "수렴 구간: $[-1, 1)$."
                ],
                "answer": "$R = 1$, 수렴 구간 $[-1, 1)$",
                "lesson": "수렴반경 $R$ 을 구한 뒤 경계점 $x = \\pm R$ 에서는 별도로 수렴 여부를 확인해야 합니다. 한쪽만 수렴하는 경우가 흔합니다."
            },
            {
                "title": "[응용] 비교판정법 적용",
                "problem": "$\\displaystyle\\sum_{n=1}^{\\infty} \\frac{1}{n^2 + n}$ 이 수렴하는지 비교판정법으로 판정하시오.",
                "steps": [
                    "$n^2 + n > n^2$ 이므로 $\\dfrac{1}{n^2+n} < \\dfrac{1}{n^2}$.",
                    "$\\sum \\dfrac{1}{n^2}$ 는 $p$-급수($p=2>1$)로 수렴한다.",
                    "비교판정법에 의해 $0 \\leq \\dfrac{1}{n^2+n} \\leq \\dfrac{1}{n^2}$ 이고 큰 쪽이 수렴하므로 작은 쪽도 수렴.",
                    "참고: $\\dfrac{1}{n^2+n} = \\dfrac{1}{n} - \\dfrac{1}{n+1}$ 이므로 망원급수로 합은 $1$ 이다."
                ],
                "answer": "수렴 (합은 $1$)",
                "lesson": "비교판정법은 '이미 아는 급수와의 크기 비교'입니다. 비교 대상으로는 $p$-급수와 등비급수가 가장 자주 쓰입니다."
            },
            {
                "title": "[심화] 근판정법(거듭제곱근 판정법) 적용",
                "problem": "$\\displaystyle\\sum_{n=1}^{\\infty} \\left(\\frac{n}{2n+1}\\right)^n$ 의 수렴·발산을 근판정법으로 판정하시오.",
                "steps": [
                    "$a_n = \\left(\\dfrac{n}{2n+1}\\right)^n$.",
                    "$\\sqrt[n]{|a_n|} = \\dfrac{n}{2n+1}$.",
                    "$L = \\lim_{n \\to \\infty} \\dfrac{n}{2n+1} = \\dfrac{1}{2} < 1$.",
                    "근판정법에 의해 수렴한다."
                ],
                "answer": "수렴 ($L = \\dfrac{1}{2} < 1$)",
                "lesson": "$a_n$ 이 $n$ 제곱 형태일 때는 근판정법이 비율판정법보다 자연스럽습니다. $\\sqrt[n]{a_n}$ 을 취하면 지수가 사라져 극한 계산이 쉬워집니다."
            }
        ],
        "problems": [
            {
                "id": "17-1",
                "type": "choice",
                "difficulty": 1,
                "question": "비율판정법에서 $L = \\lim_{n \\to \\infty} \\left|\\frac{a_{n+1}}{a_n}\\right| = 1$ 일 때, 급수의 수렴·발산은?",
                "choices": [
                    "반드시 수렴한다",
                    "반드시 발산한다",
                    "판정할 수 없다 (다른 방법 필요)",
                    "$a_n$ 의 부호에 따라 결정된다"
                ],
                "answer": "판정할 수 없다 (다른 방법 필요)",
                "hints": [
                    "비율판정법의 세 가지 결과를 떠올려 보세요: $L<1$, $L>1$, $L=1$.",
                    "$L=1$ 인 예를 생각해 보세요. $\\sum \\frac{1}{n}$ (발산)과 $\\sum \\frac{1}{n^2}$ (수렴) 모두 $L=1$ 입니다.",
                    "수렴·발산 양쪽 다 가능하므로 비율판정법만으로는 결론을 내릴 수 없습니다."
                ],
                "explanation": "$L=1$ 일 때는 비율판정법이 아무 결론도 주지 않습니다. 조화급수 $\\sum \\frac{1}{n}$($L=1$, 발산)과 $p$-급수 $\\sum \\frac{1}{n^2}$($L=1$, 수렴) 모두 $L=1$ 이므로, 다른 판정법(비교판정법, 적분판정법 등)을 사용해야 합니다.",
                "wrongAnalysis": "'$L=1$ 이면 경계이므로 수렴한다'고 오해하는 경우가 많습니다. $L=1$ 은 '이 도구로는 알 수 없다'는 뜻이지, 수렴을 보장하지 않습니다."
            },
            {
                "id": "17-2",
                "type": "number",
                "difficulty": 2,
                "question": "멱급수 $\\sum_{n=1}^{\\infty} \\frac{x^n}{n \\cdot 3^n}$ 의 수렴반경 $R$ 을 구하시오.",
                "answer": "3",
                "hints": [
                    "$a_n = \\frac{1}{n \\cdot 3^n}$ 으로 놓고 비율판정법을 적용해 보세요.",
                    "$\\frac{a_n}{a_{n+1}} = \\frac{(n+1) \\cdot 3^{n+1}}{n \\cdot 3^n} = \\frac{(n+1)}{n} \\cdot 3$ 을 계산해 보세요.",
                    "$\\lim_{n \\to \\infty} \\frac{n+1}{n} \\cdot 3 = 3$ 이므로 $R = 3$ 입니다."
                ],
                "explanation": "$R = \\lim_{n \\to \\infty} \\left|\\frac{a_n}{a_{n+1}}\\right| = \\lim_{n \\to \\infty} \\frac{(n+1) \\cdot 3^{n+1}}{n \\cdot 3^n} = \\lim_{n \\to \\infty} 3 \\cdot \\frac{n+1}{n} = 3$. 따라서 $|x| < 3$ 에서 절대수렴하고, $|x| > 3$ 에서 발산합니다.",
                "wrongAnalysis": "$3^n$ 만 보고 $R = \\frac{1}{3}$ 으로 답하는 경우가 있습니다. 수렴반경 공식에서는 $\\frac{a_n}{a_{n+1}}$ 의 극한을 구하는 것이지, $a_n$ 의 밑수를 그냥 뒤집는 것이 아닙니다."
            },
            {
                "id": "17-3",
                "type": "text",
                "difficulty": 3,
                "question": "$\\sum_{n=1}^{\\infty} \\frac{(-1)^{n+1}}{n}$ 은 수렴하는가, 발산하는가? (수렴/발산 으로 입력)",
                "answer": "수렴",
                "hints": [
                    "이 급수는 $\\frac{1}{1} - \\frac{1}{2} + \\frac{1}{3} - \\frac{1}{4} + \\cdots$ 로 부호가 교대합니다.",
                    "교대급수 판정법의 조건을 확인하세요: $b_n = \\frac{1}{n}$ 이 양수이고 단조감소하며 $b_n \\to 0$ 인가?",
                    "세 조건 모두 만족하므로 교대급수 판정법에 의해 수렴합니다. (참고: 이 급수의 합은 $\\ln 2$ 입니다.)"
                ],
                "explanation": "$b_n = \\frac{1}{n} > 0$, $b_{n+1} < b_n$ (단조감소), $\\lim b_n = 0$ 이므로 교대급수 판정법의 세 조건을 모두 만족합니다. 따라서 이 급수(교대 조화급수)는 수렴하며, 그 합은 $\\ln 2$ 입니다. 단, 절대값을 취한 $\\sum \\frac{1}{n}$ 은 발산하므로 조건부수렴입니다.",
                "wrongAnalysis": "조화급수 $\\sum \\frac{1}{n}$ 이 발산하므로 이 급수도 발산한다고 착각하기 쉽습니다. 하지만 부호가 교대하면 양의 항과 음의 항이 상쇄되어 수렴할 수 있습니다. 절대수렴과 조건부수렴의 차이를 반드시 이해해야 합니다."
            },
            {
                "id": "17-4",
                "type": "number",
                "difficulty": 1,
                "question": "멱급수 $\\displaystyle\\sum_{n=0}^{\\infty} x^n$ 의 수렴반경 $R$ 은?",
                "answer": "1",
                "hints": [
                    "이것은 공비 $r = x$ 인 등비급수입니다.",
                    "$|x| < 1$ 일 때 수렴하고 $|x| \\geq 1$ 일 때 발산합니다."
                ],
                "explanation": "$\\sum x^n$ 은 등비급수로 $|x| < 1$ 이면 수렴, $|x| \\geq 1$ 이면 발산합니다. 따라서 수렴반경 $R = 1$.",
                "wrongAnalysis": "등비급수의 수렴 조건 $|r| < 1$ 을 멱급수의 수렴반경과 연결하지 못하는 경우가 있습니다."
            },
            {
                "id": "17-5",
                "type": "choice",
                "difficulty": 2,
                "question": "$\\displaystyle\\sum_{n=1}^{\\infty} \\frac{n^2}{2^n}$ 은 수렴하는가? 비율판정법으로 판정하시오.",
                "choices": [
                    "수렴 ($L = 1/2$)",
                    "발산 ($L = 2$)",
                    "판정 불능 ($L = 1$)",
                    "수렴 ($L = 1/4$)"
                ],
                "answer": "수렴 ($L = 1/2$)",
                "hints": [
                    "$\\dfrac{a_{n+1}}{a_n} = \\dfrac{(n+1)^2}{2^{n+1}} \\cdot \\dfrac{2^n}{n^2} = \\dfrac{(n+1)^2}{2n^2}$.",
                    "$\\lim_{n \\to \\infty} \\dfrac{(n+1)^2}{2n^2} = \\dfrac{1}{2}$."
                ],
                "explanation": "$L = \\lim \\dfrac{(n+1)^2}{2n^2} = \\dfrac{1}{2} < 1$ 이므로 비율판정법에 의해 수렴합니다.",
                "wrongAnalysis": "비율을 계산할 때 $2^{n+1} = 2 \\cdot 2^n$ 을 정리하지 않아 복잡해지는 실수가 있습니다. 지수 부분을 먼저 정리하세요."
            }
        ],
        "summary": {
            "keyPoints": [
                "비교판정법은 알려진 급수와 '크기 비교'로 수렴·발산을 판정한다.",
                "비율판정법은 연속항의 비 $L$로 판정하며, 팩토리얼·거듭제곱 급수에 강력하다.",
                "멱급수 $\\sum a_n(x-c)^n$ 의 수렴반경 $R$ 은 비율판정법으로 구한다."
            ],
            "formulas": [
                "L = \\lim_{n \\to \\infty} \\left|\\frac{a_{n+1}}{a_n}\\right|;\\ L<1\\ \\text{수렴},\\ L>1\\ \\text{발산}",
                "R = \\lim_{n \\to \\infty} \\left|\\frac{a_n}{a_{n+1}}\\right|",
                "\\text{교대급수:}\\ b_n > 0,\\ b_n \\searrow 0 \\Rightarrow \\sum (-1)^n b_n\\ \\text{수렴}"
            ],
            "commonMistakes": [
                "비율판정법에서 $L=1$ 을 수렴으로 잘못 판정하는 실수",
                "수렴반경 $R$ 을 구한 뒤 경계점 $|x-c|=R$ 에서의 수렴 여부를 확인하지 않는 실수",
                "교대급수에서 $b_n \\to 0$ 조건을 확인하지 않는 실수"
            ],
            "nextConnection": "멱급수의 수렴 이론을 갖추었으니, 다음 레슨에서 함수를 멱급수로 전개하는 테일러 급수를 배웁니다."
        }
    },
    {
        "id": 18,
        "title": "테일러 급수",
        "category": "급수",
        "level": "고급",
        "question": "복잡한 함수를 다항식의 무한합으로 표현할 수 있을까?",
        "concept": {
            "intro": ":::definition[테일러 급수]\n테일러 급수는 충분히 매끄러운 함수 $f$ 를 한 점 $a$ 주위에서 다항식의 무한합으로 전개한 것입니다.\n$$f(x) = \\displaystyle\\sum_{n=0}^{\\infty} \\dfrac{f^{(n)}(a)}{n!}(x-a)^n$$\n매클로린 급수는 $a=0$ 인 특수 경우입니다.\n:::\n\n:::note[참고]\n계산기나 컴퓨터의 $\\cos,\\ \\exp,\\ \\log$ 가 내부적으로 이런 다항식 합으로 계산됩니다.\n:::",
            "intuition": "곡선을 점점 더 많은 차수의 다항식으로 흉내내는 과정입니다. $1$차 근사(접선) $\\to$ $2$차 근사(포물선) $\\to$ ... 더 많이 더할수록 곡선과 가까워집니다.",
            "formula": "f(x) = \\sum_{n=0}^{\\infty} \\frac{f^{(n)}(a)}{n!}(x-a)^n\ne^x = \\sum_{n=0}^{\\infty} \\frac{x^n}{n!}\n\\sin x = x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - \\cdots\n\\cos x = 1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} - \\cdots",
            "summary": "• 함수 $=$ 다항식의 무한합\n• 미분 계수가 곧 항의 계수\n• 매클로린은 $a=0$",
            "visuals": [
                {
                    "type": "function",
                    "title": "sin x 의 테일러 근사 (1항, 2항, 3항)",
                    "xRange": [-5, 5],
                    "yRange": [-2.5, 2.5],
                    "functions": [
                        { "expr": "sin(x)", "color": "#6366f1", "label": "sin x" },
                        { "expr": "x", "color": "#ef4444", "dashed": true, "label": "T₁ = x" },
                        { "expr": "x - x^3/6", "color": "#10b981", "dashed": true, "label": "T₃ = x−x³/6" },
                        { "expr": "x - x^3/6 + x^5/120", "color": "#f59e0b", "dashed": true, "label": "T₅" }
                    ]
                }
            ]
        },
        "examples": [
            {
                "title": "[기본] $e^x$ 의 매클로린 전개",
                "problem": "$e^x$ 의 매클로린 급수를 첫 $4$ 항까지 적으시오.",
                "steps": [
                    "모든 미분이 $e^x$, $x=0$ 에서 모두 $1$.",
                    "$1,\\ 1,\\ \\dfrac{1}{2!},\\ \\dfrac{1}{3!},\\ \\ldots$",
                    "$1 + x + \\dfrac{x^2}{2} + \\dfrac{x^3}{6}$."
                ],
                "answer": "$1 + x + \\dfrac{x^2}{2} + \\dfrac{x^3}{6} + \\cdots$",
                "lesson": "$e^x$ 는 자기 자신이 도함수이므로 매클로린 계수가 $\\dfrac{1}{n!}$ 로 깔끔하게 나옵니다."
            },
            {
                "title": "[기본] $\\sin x$ 의 매클로린 급수",
                "problem": "$\\sin x$ 의 매클로린 급수를 첫 $3$ 개의 $0$ 이 아닌 항까지 구하시오.",
                "steps": [
                    "$f(x) = \\sin x$. 도함수 순환: $\\sin \\to \\cos \\to -\\sin \\to -\\cos \\to \\sin \\cdots$",
                    "$f(0) = 0$, $f'(0) = 1$, $f''(0) = 0$, $f'''(0) = -1$, $f^{(4)}(0) = 0$, $f^{(5)}(0) = 1$.",
                    "홀수 차수만 남는다: $x - \\dfrac{x^3}{3!} + \\dfrac{x^5}{5!} = x - \\dfrac{x^3}{6} + \\dfrac{x^5}{120}$."
                ],
                "answer": "$x - \\dfrac{x^3}{6} + \\dfrac{x^5}{120}$",
                "lesson": "$\\sin x$ 의 매클로린 급수는 홀수 차수만 등장하고 부호가 교대합니다. $\\sin$ 은 홀함수이므로 짝수 차수 항이 $0$ 인 것은 자연스럽습니다."
            },
            {
                "title": "[응용] 테일러 급수를 이용한 근사 계산",
                "problem": "$\\cos(0.1)$ 을 매클로린 급수의 $4$차 항까지 사용하여 추정하시오.",
                "steps": [
                    "$\\cos x \\approx 1 - \\dfrac{x^2}{2!} + \\dfrac{x^4}{4!} = 1 - \\dfrac{x^2}{2} + \\dfrac{x^4}{24}$.",
                    "$x = 0.1$ 대입: $1 - \\dfrac{0.01}{2} + \\dfrac{0.0001}{24}$.",
                    "$= 1 - 0.005 + 0.0000042 \\approx 0.9950$."
                ],
                "answer": "$\\approx 0.9950$",
                "lesson": "$x$ 가 $0$ 에 가까울수록 적은 항으로도 매우 정확한 근사가 가능합니다. 이것이 컴퓨터가 삼각함수를 계산하는 원리입니다."
            },
            {
                "title": "[응용] $a \\neq 0$ 에서의 테일러 급수",
                "problem": "$f(x) = \\ln x$ 의 $a = 1$ 에서의 테일러 급수를 첫 $4$ 항까지 구하시오.",
                "steps": [
                    "$f(x) = \\ln x$, $f(1) = 0$.",
                    "$f'(x) = 1/x$, $f'(1) = 1$. $f''(x) = -1/x^2$, $f''(1) = -1$.",
                    "$f'''(x) = 2/x^3$, $f'''(1) = 2$. $f^{(4)}(x) = -6/x^4$, $f^{(4)}(1) = -6$.",
                    "$\\ln x \\approx (x-1) - \\dfrac{(x-1)^2}{2} + \\dfrac{(x-1)^3}{3} - \\dfrac{(x-1)^4}{4}$."
                ],
                "answer": "$(x-1) - \\dfrac{(x-1)^2}{2} + \\dfrac{(x-1)^3}{3} - \\dfrac{(x-1)^4}{4} + \\cdots$",
                "lesson": "$\\ln x$ 는 $x = 0$ 에서 정의되지 않으므로 매클로린 급수가 존재하지 않습니다. $a = 1$ 에서 전개하면 수렴반경 $R = 1$ 인 급수를 얻습니다."
            },
            {
                "title": "[심화] 급수의 곱을 이용한 새로운 전개",
                "problem": "$e^x \\sin x$ 의 매클로린 급수를 $x^3$ 항까지 구하시오.",
                "steps": [
                    "$e^x = 1 + x + \\dfrac{x^2}{2} + \\dfrac{x^3}{6} + \\cdots$",
                    "$\\sin x = x - \\dfrac{x^3}{6} + \\cdots$",
                    "곱: $e^x \\sin x = (1 + x + \\dfrac{x^2}{2} + \\dfrac{x^3}{6})(x - \\dfrac{x^3}{6} + \\cdots)$.",
                    "$x^1$ 항: $1 \\cdot x = x$. $x^2$ 항: $x \\cdot x = x^2$.",
                    "$x^3$ 항: $\\dfrac{x^2}{2} \\cdot x + 1 \\cdot (-\\dfrac{x^3}{6}) = \\dfrac{x^3}{2} - \\dfrac{x^3}{6} = \\dfrac{x^3}{3}$.",
                    "$e^x \\sin x \\approx x + x^2 + \\dfrac{x^3}{3}$."
                ],
                "answer": "$x + x^2 + \\dfrac{x^3}{3} + \\cdots$",
                "lesson": "두 함수의 곱의 테일러 급수는 각각의 급수를 곱한 뒤 같은 차수의 항을 모아 정리하면 됩니다. 원하는 차수까지만 계산하면 효율적입니다."
            }
        ],
        "problems": [
            {
                "id": "18-1",
                "type": "text",
                "difficulty": 2,
                "question": "$\\sin x$ 의 매클로린 급수의 처음 두 $0$ 이 아닌 항을 차수 오름차순으로 적으시오. (예: x-x^3/6)",
                "answer": "x-x^3/6",
                "hints": [
                    "$\\sin x$ 의 매클로린 급수.",
                    "$x - \\dfrac{x^3}{3!} + \\dfrac{x^5}{5!} - \\cdots$"
                ],
                "explanation": "$\\sin x = x - \\dfrac{x^3}{6} + \\dfrac{x^5}{120} - \\cdots$",
                "wrongAnalysis": "$x^2$ 항이 있다고 잘못 적는 실수가 있습니다. $\\sin x$ 의 매클로린 급수는 홀수 차수만 등장합니다."
            },
            {
                "id": "18-2",
                "type": "number",
                "difficulty": 3,
                "question": "$e^x$ 의 매클로린 급수를 $4$차 항까지 사용해 $e^{0.1}$ 를 추정한 값은? (소수 4째자리까지)",
                "answer": "1.1052",
                "hints": [
                    "$1 + 0.1 + 0.005 + 0.0001667 + \\cdots$",
                    "차근차근 더하세요."
                ],
                "explanation": "$1 + 0.1 + 0.005 + 0.0001667 + 0.00000417 \\approx 1.1052$.",
                "wrongAnalysis": "$\\dfrac{x^2}{2}$ 가 아니라 $\\dfrac{x^2}{2!}$ 라는 점, 즉 분모가 $2$ 라는 점을 잊지 마세요."
            },
            {
                "id": "18-3",
                "type": "choice",
                "difficulty": 3,
                "question": "$\\cos x$ 의 매클로린 급수에서 $x^4$ 의 계수는?",
                "choices": [
                    "$\\dfrac{1}{4}$",
                    "$\\dfrac{1}{24}$",
                    "$-\\dfrac{1}{4}$",
                    "$-\\dfrac{1}{24}$"
                ],
                "answer": "$\\dfrac{1}{24}$",
                "hints": [
                    "$\\cos x = 1 - \\dfrac{x^2}{2!} + \\dfrac{x^4}{4!} - \\cdots$",
                    "$4! = 24$."
                ],
                "explanation": "$x^4$ 의 계수는 $+\\dfrac{1}{4!} = \\dfrac{1}{24}$.",
                "wrongAnalysis": "부호를 $-$ 로 적는 실수가 흔합니다. $\\cos$ 은 $+ - + - \\cdots$ 패턴인데 $x^4$ 자리는 $+$."
            },
            {
                "id": "18-4",
                "type": "choice",
                "difficulty": 1,
                "question": "$e^x$ 의 매클로린 급수에서 $x^2$ 의 계수는?",
                "choices": [
                    "$1$",
                    "$\\dfrac{1}{2}$",
                    "$2$",
                    "$\\dfrac{1}{4}$"
                ],
                "answer": "$\\dfrac{1}{2}$",
                "hints": [
                    "$e^x = \\sum \\dfrac{x^n}{n!}$ 이므로 $x^2$ 항은 $\\dfrac{x^2}{2!}$ 입니다.",
                    "$2! = 2$ 이므로 계수는 $\\dfrac{1}{2}$."
                ],
                "explanation": "$e^x = 1 + x + \\dfrac{x^2}{2!} + \\dfrac{x^3}{3!} + \\cdots$ 에서 $x^2$ 의 계수는 $\\dfrac{1}{2!} = \\dfrac{1}{2}$.",
                "wrongAnalysis": "분모를 $n$ 으로 쓰는 실수가 있습니다. 테일러 급수의 분모는 $n!$ (팩토리얼)이지 $n$ 이 아닙니다."
            },
            {
                "id": "18-5",
                "type": "number",
                "difficulty": 1,
                "question": "$\\cos x$ 의 매클로린 급수를 $2$차 항까지 사용해 $\\cos(0.1)$ 을 추정한 값은? (소수 4째 자리까지)",
                "answer": "0.9950",
                "hints": [
                    "$\\cos x \\approx 1 - \\dfrac{x^2}{2}$ ($2$차 근사).",
                    "$\\cos(0.1) \\approx 1 - \\dfrac{(0.1)^2}{2} = 1 - 0.005$."
                ],
                "explanation": "$\\cos(0.1) \\approx 1 - \\dfrac{0.01}{2} = 1 - 0.005 = 0.9950$. 실제값 $\\cos(0.1) \\approx 0.99500$ 과 매우 가깝습니다.",
                "wrongAnalysis": "$x^2$ 항의 부호를 $+$ 로 잘못 적어 $1.005$ 로 답하는 실수가 있습니다. $\\cos x$ 의 급수에서 $x^2$ 항은 $-\\dfrac{x^2}{2}$ (음의 부호)입니다."
            }
        ],
        "summary": {
            "keyPoints": [
                "테일러 급수 $=$ 미분 계수로 만든 다항식 합",
                "매클로린 급수는 $a=0$",
                "근사 정확도는 항을 늘릴수록 좋아짐"
            ],
            "formulas": [
                "f(x) = \\sum \\frac{f^{(n)}(a)}{n!}(x-a)^n",
                "e^x = \\sum \\frac{x^n}{n!}",
                "\\sin x,\\ \\cos x\\ \\text{의 교대급수}"
            ],
            "commonMistakes": [
                "분모 $n!$ 대신 $n$ 을 쓰는 실수",
                "$\\sin/\\cos$ 의 짝/홀 차수 혼동"
            ],
            "nextConnection": "테일러 급수의 가장 아름다운 응용은 '$e^x,\\ \\cos x,\\ \\sin x$ 의 매클로린 전개가 사실 하나의 식'이라는 사실입니다. 다음 두 단원에 걸쳐 그 통합을 봅니다 — 22단원에서 복소수와 복소평면을 깔고($i$ 곱이 왜 회전인지부터), 23단원에서 오일러 공식 $e^{i\\theta} = \\cos\\theta + i\\sin\\theta$ 로 마무리합니다. 그 다음 단원이 푸리에 급수."
        }
    },
    {
        "id": 19,
        "title": "푸리에 급수 입문",
        "category": "급수",
        "level": "고급",
        "question": "주기적인 함수를 사인과 코사인의 합으로 분해할 수 있을까?",
        "concept": {
            "intro": "푸리에 급수는 주기함수를 사인·코사인의 무한합으로 표현하는 도구입니다. 임의의 주기 신호도 단순한 사인파의 조합으로 나타낼 수 있다는 통찰을 줍니다.\n\n:::theorem[푸리에 급수 전개]\n주기 $2\\pi$ 인 함수 $f(x)$ 에 대해\n$$f(x) = \\dfrac{a_0}{2} + \\displaystyle\\sum_{n=1}^{\\infty}(a_n \\cos nx + b_n \\sin nx)$$\n의 형태로 전개합니다. 푸리에 계수는 다음과 같이 구합니다:\n$$a_n = \\frac{1}{\\pi}\\int_{-\\pi}^{\\pi} f(x)\\cos(nx)\\,dx, \\quad b_n = \\frac{1}{\\pi}\\int_{-\\pi}^{\\pi} f(x)\\sin(nx)\\,dx$$\n:::\n\n:::note[직교성 (orthogonality)]\n$\\{1, \\cos x, \\cos 2x, \\ldots, \\sin x, \\sin 2x, \\ldots\\}$은 $[-\\pi, \\pi]$에서 직교합니다. 즉, 서로 다른 함수끼리의 적분이 $0$이 됩니다:\n$$\\int_{-\\pi}^{\\pi} \\cos(mx)\\cos(nx)\\,dx = 0 \\quad (m \\neq n)$$\n이 직교성 덕분에 양변에 $\\cos(nx)$를 곱하고 적분하면 $a_n$ 항만 남고 나머지는 모두 소거됩니다. 이것이 푸리에 계수 공식이 성립하는 이유입니다.\n:::\n\n:::note[수렴 조건 (디리클레 조건)]\n$f$가 구간별로 연속이고 유계변동이면 푸리에 급수는 수렴합니다.\n:::",
            "intuition": "오케스트라의 합주를 떠올려 보세요. 다양한 악기가 다른 주파수의 음을 내고, 그 합이 풍부한 사운드를 만듭니다. 푸리에 급수는 임의의 신호를 '주파수 별로 분해' 합니다.",
            "formula": "f(x) = \\frac{a_0}{2} + \\sum_{n=1}^{\\infty} (a_n \\cos nx + b_n \\sin nx)\na_n = \\frac{1}{\\pi}\\int_{-\\pi}^{\\pi} f(x)\\cos(nx)\\,dx\nb_n = \\frac{1}{\\pi}\\int_{-\\pi}^{\\pi} f(x)\\sin(nx)\\,dx",
            "summary": "• 주기 함수 $\\to$ 사인/코사인 합\n• 적분으로 계수 계산\n• 신호처리·열·파동 등 전 분야 응용"
        },
        "examples": [
            {
                "title": "[기본] 사각파의 첫 계수",
                "problem": "주기 $2\\pi$ 의 함수 $f(x) = \\begin{cases}1 & (0<x<\\pi) \\\\ -1 & (-\\pi<x<0)\\end{cases}$ 의 $b_1$ 을 구하시오.",
                "steps": [
                    "$f$ 가 홀함수이므로 $a_n = 0$.",
                    "$b_1 = \\dfrac{1}{\\pi}\\displaystyle\\int_{-\\pi}^{\\pi} f \\sin x\\,dx$.",
                    "대칭성으로 $\\dfrac{2}{\\pi}\\displaystyle\\int_0^{\\pi} \\sin x\\,dx = \\dfrac{2}{\\pi}\\cdot 2 = \\dfrac{4}{\\pi}$."
                ],
                "answer": "$b_1 = \\dfrac{4}{\\pi}$",
                "lesson": "함수의 대칭성을 이용하면 계산을 절반으로 줄일 수 있습니다. 짝/홀 판정을 먼저 하세요."
            },
            {
                "title": "[기본] 짝함수의 $a_0$ 계수 계산",
                "problem": "주기 $2\\pi$ 인 짝함수 $f(x) = |x|$ ($-\\pi < x < \\pi$) 의 $a_0$ 를 구하시오.",
                "steps": [
                    "$a_0 = \\dfrac{1}{\\pi}\\displaystyle\\int_{-\\pi}^{\\pi} |x|\\,dx$.",
                    "$|x|$ 는 짝함수이므로 $\\dfrac{2}{\\pi}\\displaystyle\\int_0^{\\pi} x\\,dx$.",
                    "$= \\dfrac{2}{\\pi} \\cdot \\dfrac{\\pi^2}{2} = \\pi$."
                ],
                "answer": "$a_0 = \\pi$",
                "lesson": "$a_0/2$ 가 함수의 한 주기 평균값입니다. $|x|$ 의 평균은 $\\pi/2$ 이므로 $a_0 = \\pi$ 가 됩니다."
            },
            {
                "title": "[응용] 일반 $b_n$ 계수 계산 — 사각파",
                "problem": "위의 사각파 함수 $f(x)$ 의 일반 $b_n$ 계수를 구하시오.",
                "steps": [
                    "$f$ 가 홀함수이므로 $a_n = 0$ (모든 $n$).",
                    "$b_n = \\dfrac{2}{\\pi}\\displaystyle\\int_0^{\\pi} 1 \\cdot \\sin(nx)\\,dx = \\dfrac{2}{\\pi}\\left[-\\dfrac{\\cos(nx)}{n}\\right]_0^{\\pi}$.",
                    "$= \\dfrac{2}{n\\pi}(1 - \\cos(n\\pi)) = \\dfrac{2}{n\\pi}(1 - (-1)^n)$.",
                    "$n$ 이 짝수이면 $b_n = 0$. $n$ 이 홀수이면 $b_n = \\dfrac{4}{n\\pi}$.",
                    "따라서 $f(x) = \\dfrac{4}{\\pi}\\left(\\sin x + \\dfrac{\\sin 3x}{3} + \\dfrac{\\sin 5x}{5} + \\cdots\\right)$."
                ],
                "answer": "$b_n = \\begin{cases} \\dfrac{4}{n\\pi} & (n \\text{ 홀수}) \\\\ 0 & (n \\text{ 짝수}) \\end{cases}$",
                "lesson": "사각파의 푸리에 급수는 홀수 고조파만 포함합니다. 계수가 $1/n$ 으로 감소하므로 수렴이 느려 '깁스 현상'이 발생합니다."
            },
            {
                "title": "[응용] 짝함수의 코사인 급수",
                "problem": "$f(x) = x^2$ ($-\\pi < x < \\pi$, 주기 $2\\pi$) 의 $a_n$ ($n \\geq 1$)을 구하시오.",
                "steps": [
                    "$f$ 가 짝함수이므로 $b_n = 0$.",
                    "$a_n = \\dfrac{2}{\\pi}\\displaystyle\\int_0^{\\pi} x^2 \\cos(nx)\\,dx$.",
                    "부분적분 두 번: $\\displaystyle\\int x^2 \\cos(nx)\\,dx = \\dfrac{x^2 \\sin(nx)}{n} + \\dfrac{2x\\cos(nx)}{n^2} - \\dfrac{2\\sin(nx)}{n^3}$.",
                    "$\\left[\\cdots\\right]_0^{\\pi}$: $\\sin(n\\pi) = 0$ 이므로 $\\dfrac{2\\pi\\cos(n\\pi)}{n^2} = \\dfrac{2\\pi(-1)^n}{n^2}$.",
                    "$a_n = \\dfrac{2}{\\pi} \\cdot \\dfrac{2\\pi(-1)^n}{n^2} = \\dfrac{4(-1)^n}{n^2}$."
                ],
                "answer": "$a_n = \\dfrac{4(-1)^n}{n^2}$",
                "lesson": "짝함수의 푸리에 급수는 코사인 항만 포함합니다. 부분적분 기술이 $x^k \\cos(nx)$ 형태의 적분에서 핵심적으로 사용됩니다."
            },
            {
                "title": "[심화] 푸리에 급수를 이용한 급수의 합 계산",
                "problem": "$x^2$ 의 푸리에 전개 $x^2 = \\dfrac{\\pi^2}{3} + 4\\sum_{n=1}^{\\infty} \\dfrac{(-1)^n \\cos(nx)}{n^2}$ 에서 $x = \\pi$ 를 대입하여 $\\sum_{n=1}^{\\infty} \\dfrac{1}{n^2}$ 의 값을 구하시오.",
                "steps": [
                    "$x = \\pi$ 대입: $\\pi^2 = \\dfrac{\\pi^2}{3} + 4\\sum_{n=1}^{\\infty} \\dfrac{(-1)^n \\cos(n\\pi)}{n^2}$.",
                    "$\\cos(n\\pi) = (-1)^n$ 이므로 $(-1)^n \\cdot (-1)^n = (-1)^{2n} = 1$.",
                    "$\\pi^2 = \\dfrac{\\pi^2}{3} + 4\\sum_{n=1}^{\\infty} \\dfrac{1}{n^2}$.",
                    "$4\\sum \\dfrac{1}{n^2} = \\pi^2 - \\dfrac{\\pi^2}{3} = \\dfrac{2\\pi^2}{3}$.",
                    "$\\sum_{n=1}^{\\infty} \\dfrac{1}{n^2} = \\dfrac{\\pi^2}{6}$."
                ],
                "answer": "$\\displaystyle\\sum_{n=1}^{\\infty} \\dfrac{1}{n^2} = \\dfrac{\\pi^2}{6}$",
                "lesson": "푸리에 급수에 특정 $x$ 값을 대입하면 유명한 급수의 합을 우아하게 구할 수 있습니다. 이것이 오일러가 발견한 바젤 문제의 풀이입니다."
            }
        ],
        "problems": [
            {
                "id": "19-1",
                "type": "choice",
                "difficulty": 1,
                "question": "다음 중 푸리에 급수의 기본 가정은?",
                "choices": [
                    "함수가 다항식이어야 한다.",
                    "함수가 (조각마다) 매끄러우며 주기적이어야 한다.",
                    "함수가 양의 값만 가져야 한다.",
                    "함수가 $0$ 을 지나야 한다."
                ],
                "answer": "함수가 (조각마다) 매끄러우며 주기적이어야 한다.",
                "hints": [
                    "푸리에 급수는 주기함수에 적용됩니다.",
                    "불연속점이 있더라도 조각마다 매끄러운 함수이면 기본 이론을 적용할 수 있습니다."
                ],
                "explanation": "푸리에 급수의 기본 형태는 주기적이고 조각마다 매끄러운 함수를 사인과 코사인 급수로 표현하는 것입니다. 비주기 함수는 보통 푸리에 변환을 사용합니다.",
                "wrongAnalysis": "푸리에 변환과 푸리에 급수의 차이를 혼동하면 안 됩니다. 급수는 주기, 변환은 일반."
            },
            {
                "id": "19-2",
                "type": "choice",
                "difficulty": 2,
                "question": "주기 $2\\pi$ 인 홀함수 $f(x)$ 의 푸리에 급수에서 항상 $0$ 인 항은?",
                "choices": [
                    "$a_n$ (코사인 계수)",
                    "$b_n$ (사인 계수)",
                    "$a_0$",
                    "모두 $0$ 이다."
                ],
                "answer": "$a_n$ (코사인 계수)",
                "hints": [
                    "홀함수 $\\times$ 짝함수 $=$ 홀함수.",
                    "홀함수의 $-\\pi \\sim \\pi$ 적분은 $0$."
                ],
                "explanation": "홀함수와 $\\cos(nx)$(짝)의 곱은 홀함수이므로 대칭 구간 적분이 $0$. 따라서 $a_n = 0$.",
                "wrongAnalysis": "짝·홀 함수의 적분 성질을 잊으면 매번 직접 계산하느라 시간이 오래 걸립니다."
            },
            {
                "id": "19-3",
                "type": "number",
                "difficulty": 3,
                "question": "$f(x) = x\\ (-\\pi<x<\\pi,\\ \\text{주기}\\ 2\\pi)$ 의 푸리에 계수 $b_1$ 의 값은? (소수 4째자리)",
                "answer": "2",
                "hints": [
                    "$b_1 = \\dfrac{1}{\\pi}\\displaystyle\\int_{-\\pi}^{\\pi} x \\sin x\\,dx$.",
                    "부분적분 사용.",
                    "$x \\cos x$ 의 원시함수가 필요."
                ],
                "explanation": "$\\dfrac{1}{\\pi}\\displaystyle\\int_{-\\pi}^{\\pi} x \\sin x\\,dx = \\dfrac{1}{\\pi}\\cdot 2\\pi = 2$.",
                "wrongAnalysis": "대칭 구간이라 $0$ 이라고 답하는 실수가 흔합니다. $f$ 와 $\\sin x$ 가 둘 다 홀함수이므로 곱은 짝함수가 되어 $0$ 이 아닙니다."
            },
            {
                "id": "19-4",
                "type": "choice",
                "difficulty": 1,
                "question": "푸리에 급수에서 $a_0$ 계수의 의미는?",
                "choices": [
                    "함수의 최댓값",
                    "함수의 한 주기 평균값의 2배",
                    "함수의 진폭",
                    "함수의 주기"
                ],
                "answer": "함수의 한 주기 평균값의 2배",
                "hints": [
                    "$a_0 = \\dfrac{1}{\\pi}\\displaystyle\\int_{-\\pi}^{\\pi} f(x)\\,dx$ 입니다.",
                    "푸리에 급수에서 상수항은 $\\dfrac{a_0}{2}$ 이며, 이것이 함수의 평균값입니다."
                ],
                "explanation": "$a_0 = \\dfrac{1}{\\pi}\\int_{-\\pi}^{\\pi} f(x)\\,dx$ 이므로 $\\dfrac{a_0}{2} = \\dfrac{1}{2\\pi}\\int_{-\\pi}^{\\pi} f(x)\\,dx$ 는 한 주기에서의 평균값입니다. 따라서 $a_0$ 은 평균값의 $2$ 배입니다.",
                "wrongAnalysis": "$a_0$ 자체가 평균값이라고 오해하는 경우가 있습니다. 실제 평균값은 $\\dfrac{a_0}{2}$ 입니다."
            },
            {
                "id": "19-5",
                "type": "number",
                "difficulty": 2,
                "question": "짝함수 $f(x) = |x|$ ($-\\pi < x < \\pi$, 주기 $2\\pi$) 의 $a_0$ 값은? (소수 둘째 자리까지)",
                "answer": "3.14",
                "hints": [
                    "$a_0 = \\dfrac{1}{\\pi}\\displaystyle\\int_{-\\pi}^{\\pi} |x|\\,dx$.",
                    "$|x|$ 는 짝함수이므로 $\\dfrac{2}{\\pi}\\displaystyle\\int_0^{\\pi} x\\,dx$."
                ],
                "explanation": "$a_0 = \\dfrac{1}{\\pi}\\displaystyle\\int_{-\\pi}^{\\pi} |x|\\,dx = \\dfrac{2}{\\pi}\\int_0^{\\pi} x\\,dx = \\dfrac{2}{\\pi} \\cdot \\dfrac{\\pi^2}{2} = \\pi \\approx 3.14$.",
                "wrongAnalysis": "$|x|$ 가 짝함수라는 대칭성을 이용하지 않으면 적분이 불필요하게 복잡해집니다. 또한 $\\int_{-\\pi}^{\\pi} |x|\\,dx = 0$ 으로 잘못 계산하는 실수가 있는데, $|x| \\geq 0$ 이므로 적분값은 항상 양수입니다."
            }
        ],
        "summary": {
            "keyPoints": [
                "주기함수 $\\to$ 사인·코사인 합",
                "계수는 적분으로 추출",
                "짝/홀 함수의 대칭으로 계산 단축"
            ],
            "formulas": [
                "f(x) = \\frac{a_0}{2} + \\sum (a_n \\cos nx + b_n \\sin nx)",
                "a_n,\\ b_n\\ \\text{계산은 적분}"
            ],
            "commonMistakes": [
                "짝/홀 함수와 코사인/사인의 곱 부호 혼동",
                "대칭 구간 적분 $0$ 으로 단정"
            ],
            "nextConnection": "지금까지의 변수는 모두 하나($x$)였습니다. 다변수 미적분으로 확장하기 전에, 그 무대가 될 '벡터'와 '행렬'을 먼저 다집니다. 다음 단원부터 다섯 차례에 걸쳐 선형대수의 핵심을 정리합니다."
        }
    }
];
