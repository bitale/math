"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seriesLessons = void 0;
exports.seriesLessons = [
    {
        "id": 47,
        "title": "수열과 급수",
        "category": "급수",
        "level": "중급",
        "question": "무한히 많은 수를 더하면 무엇이 될까?",
        "concept": {
            "intro": "수열은 순서가 있는 수의 나열, 급수는 그 합입니다. 무한급수는 부분합 $S_n$ 의 극한입니다.\n\n수렴 여부를 판정하는 도구로는 비교 판정, 비율 판정, 적분 판정 등이 있습니다.",
            "intuition": "공이 처음에 $1\\text{m}$, 다음에 $\\dfrac{1}{2}\\text{m}$, 그 다음 $\\dfrac{1}{4}\\text{m}$ ... 식으로 점점 짧게 굴러간다고 상상해 봅시다. 무한히 많은 구간을 합쳐도 총 $2\\text{m}$ 로 수렴합니다.",
            "formula": "\\sum_{n=0}^{\\infty} a r^n = \\frac{a}{1-r},\\ |r|<1\n\\text{조화급수}\\ \\sum \\frac{1}{n}\\ \\text{발산}\np\\text{-급수}\\ \\sum \\frac{1}{n^p}\\ \\text{수렴}\\ \\Leftrightarrow\\ p>1",
            "summary": "• 급수 $=$ 부분합의 극한\n• 등비급수는 $|r|<1$ 일 때 수렴\n• 발산하면 합은 정의되지 않음"
        },
        "examples": [
            {
                "title": "기하급수의 합",
                "problem": "$1 + \\dfrac{1}{2} + \\dfrac{1}{4} + \\dfrac{1}{8} + \\cdots$ 의 합은?",
                "steps": [
                    "$a=1,\\ r=\\dfrac{1}{2}$.",
                    "$\\displaystyle\\sum = \\dfrac{a}{1-r} = \\dfrac{1}{1/2} = 2$."
                ],
                "answer": "$2$",
                "lesson": "공비가 $1$ 보다 작은 등비급수는 항상 수렴합니다. 직관과 달리 무한합이 유한값이 됩니다."
            }
        ],
        "problems": [
            {
                "id": "47-1",
                "type": "number",
                "difficulty": 1,
                "question": "$\\displaystyle\\sum_{n=0}^{\\infty} \\left(\\dfrac{1}{3}\\right)^n$ 의 값은?",
                "answer": "1.5",
                "hints": [
                    "$a = 1,\\ r = \\dfrac{1}{3}$.",
                    "공식 $\\dfrac{a}{1-r}$."
                ],
                "explanation": "$\\dfrac{1}{1 - 1/3} = \\dfrac{3}{2} = 1.5$.",
                "wrongAnalysis": "$n=1$ 부터 시작한다고 잘못 가정해서 $\\dfrac{1}{1-r} - 1$ 을 적는 실수가 있습니다. $n=0$ 부터인지 확인."
            },
            {
                "id": "47-2",
                "type": "choice",
                "difficulty": 2,
                "question": "다음 중 발산하는 급수는?",
                "choices": [
                    "$\\displaystyle\\sum \\dfrac{1}{2^n}$",
                    "$\\displaystyle\\sum \\dfrac{1}{n}$",
                    "$\\displaystyle\\sum \\dfrac{1}{n^2}$",
                    "$\\displaystyle\\sum \\dfrac{(-1)^n}{n}$"
                ],
                "answer": "$\\displaystyle\\sum \\dfrac{1}{n}$",
                "hints": [
                    "조화급수 $\\displaystyle\\sum \\dfrac{1}{n}$ 의 수렴 여부를 기억하세요.",
                    "$p$-급수 판정: $p>1$ 일 때만 수렴."
                ],
                "explanation": "조화급수 $\\displaystyle\\sum \\dfrac{1}{n}$ 은 발산합니다. $\\dfrac{1}{n^2}$ 은 $p=2$ 로 수렴, 교대조화급수는 조건수렴.",
                "wrongAnalysis": "$\\dfrac{1}{n}$ 이 $0$ 으로 수렴하므로 합도 수렴할 거라 오해하는 실수가 매우 흔합니다. 항이 $0$ 으로 가는 것은 수렴의 필요조건일 뿐 충분조건이 아닙니다."
            },
            {
                "id": "47-3",
                "type": "number",
                "difficulty": 3,
                "question": "$0.999\\ldots$ 의 정확한 값은?",
                "answer": "1",
                "hints": [
                    "$0.999\\ldots = \\dfrac{9}{10} + \\dfrac{9}{100} + \\dfrac{9}{1000} + \\cdots$",
                    "공비 $\\dfrac{1}{10}$, 첫항 $\\dfrac{9}{10}$ 인 등비급수."
                ],
                "explanation": "$\\dfrac{9/10}{1 - 1/10} = \\dfrac{9/10}{9/10} = 1$.",
                "wrongAnalysis": "$0.999\\ldots$ 과 $1$ 은 다르다고 직관적으로 답하는 경우가 많습니다. 수학적으로는 정확히 같습니다."
            }
        ],
        "summary": {
            "keyPoints": [
                "수열 vs 급수의 구분",
                "등비급수의 수렴 조건 $|r|<1$",
                "조화급수는 발산"
            ],
            "formulas": [
                "\\sum a r^n = \\frac{a}{1-r}\\ (|r|<1)",
                "p\\text{-급수: 수렴}\\ \\Leftrightarrow\\ p>1"
            ],
            "commonMistakes": [
                "항이 $0$ 으로 가면 수렴이라는 오해",
                "$n$ 시작 위치 혼동"
            ],
            "nextConnection": "함수를 다항식의 무한합으로 표현할 수 있다면 어떨까요? 다음 단원의 테일러 급수가 답입니다."
        }
    },
    {
        "id": 48,
        "title": "수렴판정법과 멱급수",
        "category": "급수와 테일러",
        "level": "고급",
        "question": "무한급수의 수렴·발산을 어떻게 체계적으로 판정하고, 멱급수의 수렴 범위는 어떻게 결정하는가?",
        "concept": {
            "intro": "이전 레슨에서 등비급수, 조화급수, $p$-급수 등 구체적인 급수를 살펴보며 수렴·발산의 감을 잡았습니다. 하지만 실전에서 만나는 급수 $\\sum a_n$ 은 깔끔한 공식이 없는 경우가 대부분입니다. 이때 필요한 것이 **수렴판정법(convergence test)** — 급수를 직접 합산하지 않고도 수렴·발산을 결정하는 체계적 도구입니다.\n\n가장 기초적인 도구는 **비교판정법(Comparison Test)**입니다. 양의 급수 $\\sum a_n$ 에서 $0 \\leq a_n \\leq b_n$ 이고 $\\sum b_n$ 이 수렴하면 $\\sum a_n$ 도 수렴합니다. 반대로 $a_n \\geq c_n \\geq 0$ 이고 $\\sum c_n$ 이 발산하면 $\\sum a_n$ 도 발산합니다. 이전 레슨에서 배운 이상적분의 비교판정법과 논리가 동일합니다.\n\n한 단계 더 강력한 도구가 **비율판정법(Ratio Test)**입니다. $\\lim_{n \\to \\infty} \\left|\\frac{a_{n+1}}{a_n}\\right| = L$ 일 때, $L < 1$ 이면 절대수렴, $L > 1$ 이면 발산, $L = 1$ 이면 판정 불능입니다. 팩토리얼이나 거듭제곱이 포함된 급수에서 특히 위력적입니다.\n\n**적분판정법(Integral Test)**은 이상적분과 급수를 직접 연결합니다. $f(x)$ 가 $[1,\\infty)$ 에서 양, 연속, 감소이고 $a_n = f(n)$ 이면, $\\sum_{n=1}^{\\infty} a_n$ 과 $\\int_1^{\\infty} f(x)\\,dx$ 가 동시에 수렴하거나 동시에 발산합니다. **교대급수 판정법(Alternating Series Test)**은 부호가 교대하는 급수 $\\sum (-1)^n b_n$ 에서, $b_n$ 이 양이고 단조감소하며 $b_n \\to 0$ 이면 수렴을 보장합니다.\n\n이 판정법들은 **멱급수(power series)** $\\sum_{n=0}^{\\infty} a_n (x-c)^n$ 의 **수렴반경** $R$ 을 결정하는 데 핵심 역할을 합니다. 비율판정법을 적용하면 $R = \\lim_{n \\to \\infty} \\left|\\frac{a_n}{a_{n+1}}\\right|$ 로 구할 수 있으며, 멱급수는 $|x-c| < R$ 에서 절대수렴, $|x-c| > R$ 에서 발산합니다. 멱급수의 수렴 이론을 익히면, 다음 레슨에서 배울 테일러 급수를 통해 복잡한 함수를 다항식처럼 다룰 수 있게 됩니다.",
            "intuition": "수렴판정법은 '저울질'에 비유할 수 있습니다. 급수의 일반항 $a_n$ 이 이미 수렴한다고 알려진 급수의 일반항보다 작으면(비교판정법), 우리 급수도 수렴합니다. 비율판정법은 '항이 줄어드는 비율'을 보는 것으로, 매 항이 이전 항의 $L$배($L<1$)로 줄어들면 등비급수보다 빠르게 줄어들어 수렴합니다.\n\n멱급수의 수렴반경 $R$ 은 '폭탄의 폭발 범위' 같은 것입니다. 중심 $c$ 에서 $R$ 이내는 안전(수렴), $R$ 밖은 위험(발산), 경계 $|x-c|=R$ 에서는 별도 확인이 필요합니다.",
            "formula": "\\text{비교판정법:}\\ 0 \\leq a_n \\leq b_n,\\ \\sum b_n\\ \\text{수렴} \\Rightarrow \\sum a_n\\ \\text{수렴}\n\\text{비율판정법:}\\ L = \\lim_{n \\to \\infty} \\left|\\frac{a_{n+1}}{a_n}\\right|;\\ L<1\\ \\text{수렴},\\ L>1\\ \\text{발산}\n\\text{적분판정법:}\\ \\sum_{n=1}^{\\infty} f(n)\\ \\text{과}\\ \\int_1^{\\infty} f(x)\\,dx\\ \\text{동시 수렴/발산}\n\\text{교대급수:}\\ \\sum (-1)^n b_n,\\ b_n > 0,\\ b_n \\searrow 0 \\Rightarrow \\text{수렴}\n\\text{멱급수:}\\ \\sum a_n(x-c)^n,\\quad R = \\lim_{n \\to \\infty} \\left|\\frac{a_n}{a_{n+1}}\\right|\n|x-c| < R\\ \\text{절대수렴},\\quad |x-c| > R\\ \\text{발산}",
            "summary": "• 비교판정법: 큰 급수 수렴 → 작은 급수 수렴\n• 비율판정법: 연속 항의 비 $L<1$ → 수렴\n• 적분판정법: 급수와 이상적분이 같은 운명\n• 멱급수 $\\sum a_n(x-c)^n$ 은 수렴반경 $R$ 안에서 수렴"
        },
        "examples": [
            {
                "title": "$\\sum_{n=0}^{\\infty} \\frac{x^n}{n!}$ 의 수렴반경 구하기",
                "problem": "멱급수 $\\sum_{n=0}^{\\infty} \\frac{x^n}{n!}$ 의 수렴반경 $R$ 을 구하시오.",
                "steps": [
                    "$a_n = \\frac{1}{n!}$ 로 놓으면, 비율판정법을 적용한다.",
                    "$\\left|\\frac{a_{n+1} x^{n+1}}{a_n x^n}\\right| = \\left|\\frac{x^{n+1}}{(n+1)!} \\cdot \\frac{n!}{x^n}\\right| = \\frac{|x|}{n+1}$.",
                    "$\\lim_{n \\to \\infty} \\frac{|x|}{n+1} = 0 < 1$ 이므로, 모든 $x$ 에 대해 수렴한다.",
                    "따라서 수렴반경 $R = \\infty$ 이다."
                ],
                "answer": "$R = \\infty$ (모든 실수 $x$ 에서 수렴)",
                "lesson": "팩토리얼 $n!$ 은 기하급수적으로 증가하므로 $\\frac{x^n}{n!}$ 은 매우 빠르게 줄어듭니다. 이 급수는 사실 $e^x$ 의 테일러 급수입니다. 수렴반경이 무한이라는 것은 이 급수가 전체 실수에서 $e^x$ 를 정확히 나타낸다는 뜻입니다."
            }
        ],
        "problems": [
            {
                "id": "48-1",
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
                "id": "48-2",
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
                "id": "48-3",
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
        "id": 49,
        "title": "테일러 급수",
        "category": "급수",
        "level": "고급",
        "question": "복잡한 함수를 다항식의 무한합으로 표현할 수 있을까?",
        "concept": {
            "intro": "테일러 급수는 충분히 매끄러운 함수 $f$ 를 한 점 $a$ 주위에서 다항식 $+ \\cdots$ 로 전개한 것입니다. 매클로린 급수는 $a=0$ 인 특수 경우.\n\n공식: $f(x) = \\displaystyle\\sum \\dfrac{f^{(n)}(a)}{n!}(x-a)^n$.\n\n계산기나 컴퓨터의 $\\cos,\\ \\exp,\\ \\log$ 가 내부적으로 이런 다항식 합으로 계산됩니다.",
            "intuition": "곡선을 점점 더 많은 차수의 다항식으로 흉내내는 과정입니다. $1$차 근사(접선) $\\to$ $2$차 근사(포물선) $\\to$ ... 더 많이 더할수록 곡선과 가까워집니다.",
            "formula": "f(x) = \\sum_{n=0}^{\\infty} \\frac{f^{(n)}(a)}{n!}(x-a)^n\ne^x = \\sum_{n=0}^{\\infty} \\frac{x^n}{n!}\n\\sin x = x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - \\cdots\n\\cos x = 1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} - \\cdots",
            "summary": "• 함수 $=$ 다항식의 무한합\n• 미분 계수가 곧 항의 계수\n• 매클로린은 $a=0$"
        },
        "examples": [
            {
                "title": "$e^x$ 의 매클로린 전개",
                "problem": "$e^x$ 의 매클로린 급수를 첫 $4$ 항까지 적으시오.",
                "steps": [
                    "모든 미분이 $e^x$, $x=0$ 에서 모두 $1$.",
                    "$1,\\ 1,\\ \\dfrac{1}{2!},\\ \\dfrac{1}{3!},\\ \\ldots$",
                    "$1 + x + \\dfrac{x^2}{2} + \\dfrac{x^3}{6}$."
                ],
                "answer": "$1 + x + \\dfrac{x^2}{2} + \\dfrac{x^3}{6} + \\cdots$",
                "lesson": "$e^x$ 는 자기 자신이 도함수이므로 매클로린 계수가 $\\dfrac{1}{n!}$ 로 깔끔하게 나옵니다."
            }
        ],
        "problems": [
            {
                "id": "49-1",
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
                "id": "49-2",
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
                "id": "49-3",
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
        "id": 50,
        "title": "복소수와 복소평면",
        "category": "급수",
        "level": "중급",
        "question": "실수 직선 밖으로 한 발 나가 $i$ 를 도입하면 어떤 새 평면이 생기고, 거기서 곱셈은 왜 회전이 될까?",
        "concept": {
            "intro": "실수 직선에는 빈 자리가 있습니다. $x^2 = -1$ 같은 식의 해를 적을 수 없죠. 이 자리를 메우려고 약속을 하나 추가합니다: 새 단위 $i$ 를 도입하고 $i^2 = -1$ 이라 둡니다. 그러면 $a + bi$ ($a, b$ 는 실수) 꼴의 수가 자연스럽게 정의됩니다. 이게 복소수입니다.\n\n복소수는 한 줄에 못 그립니다. 실수부 $a$ 와 허수부 $b$ 가 독립이라 가로축은 실수, 세로축은 허수로 놓아 평면을 만들어야 합니다. 이 평면이 복소평면이고, 복소수 하나는 그 위의 한 점입니다.\n\n복소평면의 가장 신기한 성질은 곱셈입니다. 실수 곱셈은 직선 위의 늘이기였지만, 복소수 곱셈은 회전 $+$ 늘이기로 변합니다. 가장 단순한 경우인 $i$ 곱을 추적해 보면 그 이유가 보입니다.\n• $1 \\cdot i = i$: 점 $(1, 0)$ 이 $(0, 1)$ 로 — $90^\\circ$ 회전.\n• $i \\cdot i = i^2 = -1$: $(0, 1)$ 이 $(-1, 0)$ 으로 — 또 $90^\\circ$.\n• $-1 \\cdot i = -i$: $(-1, 0)$ 이 $(0, -1)$ 로 — 또 $90^\\circ$.\n• $-i \\cdot i = -i^2 = 1$: $(0, -1)$ 이 $(1, 0)$ 으로 — 또 $90^\\circ$ 돌아 원위치.\n네 번 곱해서 한 바퀴 = $i^4 = 1$. 즉 $i$ 곱셈은 정확히 $90^\\circ$ 회전입니다.\n\n일반 복소수 $z = a + bi$ 의 곱셈은 이 발견의 일반화. 분배법칙으로 직접 곱한 뒤 $i^2 = -1$ 을 대입해 정리해 보면, 결과의 절댓값은 두 복소수 절댓값의 곱이고 편각은 두 편각의 합입니다.",
            "intuition": "시계 바늘을 떠올려 보세요. 12시 방향에 점 $1$ 이 있다고 합시다. $i$ 를 한 번 곱하면 $3$ 시 방향($i$)으로, 또 곱하면 $6$ 시($-1$), 또 곱하면 $9$ 시($-i$), 또 곱하면 다시 $12$ 시($1$). 매 곱셈마다 $90^\\circ$ 씩 시계 반대 방향 회전입니다. 일반 복소수 곱은 이 회전의 각도가 임의의 $\\theta$ 인 경우.\n\n복소수에 익숙해지면 '곱셈은 곧 회전' 이라는 시각이 자연스러워지고, 이게 다음 단원 오일러 공식의 직관적 기반이 됩니다.",
            "formula": "z = a + bi,\\ \\ i^2 = -1\n|z| = \\sqrt{a^2 + b^2},\\ \\ \\arg z = \\theta\nz = r(\\cos\\theta + i\\sin\\theta)\\ \\ \\text{(극형식)}\nz_1 z_2 = r_1 r_2 \\big[\\cos(\\theta_1 + \\theta_2) + i\\sin(\\theta_1 + \\theta_2)\\big]",
            "summary": "• $i^2 = -1$ 약속 $+$ 2차원 평면 $=$ 복소평면\n• $i$ 곱 $= 90^\\circ$ 회전\n• 일반 곱 $=$ 길이 곱 $+$ 각도 합"
        },
        "examples": [
            {
                "title": "$i$ 곱셈이 회전임을 직접 확인",
                "problem": "복소수 $1$ 에서 시작해 $i$ 를 네 번 곱하면 어디로 도착하는가? 각 단계를 평면 좌표로 추적하시오.",
                "steps": [
                    "출발: $1 = 1 + 0i$, 좌표 $(1, 0)$ — 양의 실축.",
                    "$1$ 차 곱: $1 \\cdot i = i$, 좌표 $(0, 1)$ — 양의 허수축.",
                    "$2$ 차 곱: $i \\cdot i = i^2 = -1$, 좌표 $(-1, 0)$ — 음의 실축.",
                    "$3$ 차 곱: $(-1) \\cdot i = -i$, 좌표 $(0, -1)$ — 음의 허수축.",
                    "$4$ 차 곱: $(-i) \\cdot i = -i^2 = 1$, 좌표 $(1, 0)$ — 원위치."
                ],
                "answer": "원위치 $(1, 0)$. $i^4 = 1$.",
                "lesson": "매 곱셈마다 $90^\\circ$ 회전이며, 네 번이면 $360^\\circ$ 즉 한 바퀴. '$i$ 가 $90^\\circ$ 회전' 이라는 사실은 외울 게 아니라 손으로 한 번 그려 보면 영원히 잊지 않습니다."
            },
            {
                "title": "극형식 표기",
                "problem": "$z = 1 + i$ 의 절댓값과 편각을 구하고 극형식으로 적으시오.",
                "steps": [
                    "$|z| = \\sqrt{1^2 + 1^2} = \\sqrt{2}$.",
                    "$\\arg z$: 좌표 $(1, 1)$ 은 1사분면이며 $\\tan\\theta = 1/1 = 1$, 따라서 $\\theta = \\dfrac{\\pi}{4}$.",
                    "극형식: $z = \\sqrt{2}\\left(\\cos\\dfrac{\\pi}{4} + i\\sin\\dfrac{\\pi}{4}\\right)$."
                ],
                "answer": "$z = \\sqrt{2}\\left(\\cos\\dfrac{\\pi}{4} + i\\sin\\dfrac{\\pi}{4}\\right)$",
                "lesson": "직교 형식 $a + bi$ 와 극형식 $r(\\cos\\theta + i\\sin\\theta)$ 는 같은 점의 두 가지 표기. 덧셈은 직교가, 곱셈·거듭제곱은 극형식이 훨씬 편합니다."
            }
        ],
        "problems": [
            {
                "id": "50-1",
                "type": "text",
                "difficulty": 1,
                "question": "$i^7$ 의 값은? (예: -i)",
                "answer": "-i",
                "hints": [
                    "$i^4 = 1$ 의 주기를 이용.",
                    "$i^7 = i^4 \\cdot i^3 = i^3$.",
                    "$i^3 = i^2 \\cdot i = -i$."
                ],
                "explanation": "$i^7 = i^{4+3} = i^4 \\cdot i^3 = 1 \\cdot (-i) = -i$. 또는 $7$ 차 회전이면 $7 \\cdot 90^\\circ = 630^\\circ = 360^\\circ + 270^\\circ$, 즉 $270^\\circ$ 위치 $= -i$.",
                "wrongAnalysis": "$i^7 = i$ 또는 $-1$ 로 적는 실수가 흔합니다. $i$ 거듭제곱은 주기 $4$ 이며, $7 \\bmod 4 = 3$ 임을 이용하세요."
            },
            {
                "id": "50-2",
                "type": "number",
                "difficulty": 1,
                "question": "$|3 + 4i|$ 의 값은?",
                "answer": "5",
                "hints": [
                    "$|a + bi| = \\sqrt{a^2 + b^2}$.",
                    "$\\sqrt{9 + 16}$."
                ],
                "explanation": "$\\sqrt{9 + 16} = \\sqrt{25} = 5$.",
                "wrongAnalysis": "실수부와 허수부를 그냥 더해 $7$ 이라 답하는 실수가 있습니다. 절댓값은 원점으로부터의 거리, 즉 피타고라스 합."
            },
            {
                "id": "50-3",
                "type": "text",
                "difficulty": 2,
                "question": "$(1 + i) \\cdot i$ 를 $a + bi$ 꼴로 적으시오. (예: -1+i)",
                "answer": "-1+i",
                "hints": [
                    "분배: $(1+i) \\cdot i = i + i^2$.",
                    "$i^2 = -1$ 대입.",
                    "기하적으로는 점 $(1, 1)$ 을 $90^\\circ$ 회전시키면 $(-1, 1)$."
                ],
                "explanation": "대수: $(1+i) i = i + i^2 = i - 1 = -1 + i$. 기하: $1+i$ 의 편각이 $\\pi/4$, 거기에 $i$ ($90^\\circ$ 회전) 를 곱하면 편각 $3\\pi/4$. 좌표 $(-1, 1)$, 즉 $-1 + i$.",
                "wrongAnalysis": "$i^2 = -1$ 대입을 잊고 $i + i^2$ 을 그대로 남기는 실수가 흔합니다. 또 $a+bi$ 꼴로 정리하지 않으면 답으로 인정되지 않습니다."
            }
        ],
        "summary": {
            "keyPoints": [
                "$i^2 = -1$ 한 약속에서 복소수와 복소평면이 자연스럽게 따라 나옴",
                "$i$ 곱셈 $= 90^\\circ$ 회전. $i^4 = 1$ 은 한 바퀴 회전의 결과",
                "일반 복소수 곱 $=$ 길이 곱 $+$ 각도 합"
            ],
            "formulas": [
                "i^2 = -1",
                "|a + bi| = \\sqrt{a^2 + b^2}",
                "z = r(\\cos\\theta + i\\sin\\theta)",
                "z_1 z_2 = r_1 r_2 [\\cos(\\theta_1 + \\theta_2) + i\\sin(\\theta_1 + \\theta_2)]"
            ],
            "commonMistakes": [
                "$i^2$ 을 그대로 둔 채 식을 끝내는 실수 (항상 $-1$ 로 정리해야 함)",
                "$|a + bi|$ 를 $|a| + |b|$ 로 적는 실수"
            ],
            "nextConnection": "이제 복소수가 평면 위의 점이고 곱셈이 회전이라는 시각이 생겼습니다. 그런데 회전이라면 — '연속적으로 회전하는 함수' 가 있어야 자연스럽습니다. 다음 단원에서 단원 21의 테일러 급수가 그 함수를 정확히 만들어 주는 것을 봅니다. 이름하여 오일러 공식."
        }
    },
    {
        "id": 51,
        "title": "오일러 공식",
        "category": "급수",
        "level": "고급",
        "question": "$e^x$ 의 매클로린 전개에 $x = i\\theta$ 를 그냥 대입하면 무슨 일이 벌어질까?",
        "concept": {
            "intro": "단원 22에서 복소수와 '$i$ 곱은 회전' 을 받아들였고, 단원 21에서 $e^x,\\ \\cos x,\\ \\sin x$ 의 매클로린 전개를 보았습니다. 두 토대가 만나면 마법이 가능합니다.\n\n$e^x = \\displaystyle\\sum_{n=0}^{\\infty}\\dfrac{x^n}{n!}$ 에 $x = i\\theta$ 를 그대로 대입합니다. $i^2 = -1,\\ i^3 = -i,\\ i^4 = 1$ 의 주기 덕분에 실수항만 모이면 정확히 $\\cos\\theta$ 의 전개, 허수항만 모이면 $\\sin\\theta$ 의 전개와 일치합니다. 결과:\n$$e^{i\\theta} = \\cos\\theta + i\\sin\\theta.$$\n오일러 공식이라 부르는 한 줄. 이 식은 $e,\\ \\cos,\\ \\sin$ 을 하나의 식으로 묶고, 단원 22의 '곱셈은 회전' 을 정량화합니다. $e^{i\\theta}$ 는 단위원 위 각도 $\\theta$ 의 점이며, $e^{i\\theta_1} \\cdot e^{i\\theta_2} = e^{i(\\theta_1 + \\theta_2)}$ 한 줄이 '각도가 더해진다'는 회전의 본질을 그대로 보여줍니다.\n\n$\\theta = \\pi$ 를 대입하면 수학의 가장 아름다운 식이라 불리는 오일러 항등식 $e^{i\\pi} + 1 = 0$ 이 나옵니다. $e,\\ i,\\ \\pi,\\ 1,\\ 0$ — 수학의 다섯 상수가 한 식에 모인 결과입니다.",
            "intuition": "단원 22에서 $i$ 곱이 $90^\\circ$ 회전이었습니다. $e^{i\\theta}$ 는 그것의 '연속 버전' 입니다. $\\theta$ 가 $0$ 에서 $2\\pi$ 로 천천히 자라는 동안 $e^{i\\theta}$ 는 단위원을 한 바퀴 매끈하게 돕니다. 시계 바늘에 비유하면 $1$ 부터 $i$ 로 갈 때 $90^\\circ$ 만 점프하는 게 아니라 그 사이의 모든 각도를 거치는 것.",
            "formula": "e^{i\\theta} = \\cos\\theta + i\\sin\\theta\\ \\ (\\text{오일러 공식})\nz = r e^{i\\theta}\\ \\ (\\text{극형식의 간결한 표기})\ne^{i(\\theta_1 + \\theta_2)} = e^{i\\theta_1} \\cdot e^{i\\theta_2}\ne^{i\\pi} + 1 = 0\\ \\ (\\text{오일러 항등식})",
            "summary": "• $e^{i\\theta} = \\cos\\theta + i\\sin\\theta$ — 테일러 급수의 직접 결과\n• 단위원 위의 점을 한 줄로 표현\n• 회전 곱셈을 지수 합으로 변환"
        },
        "examples": [
            {
                "title": "오일러 공식의 유도",
                "problem": "단원 21의 매클로린 급수와 $i^2 = -1$ 을 이용해 $e^{i\\theta} = \\cos\\theta + i\\sin\\theta$ 를 증명하시오.",
                "steps": [
                    "$e^x = \\displaystyle\\sum_{n=0}^{\\infty}\\dfrac{x^n}{n!}$ 에 $x = i\\theta$ 대입.",
                    "$e^{i\\theta} = 1 + i\\theta + \\dfrac{(i\\theta)^2}{2!} + \\dfrac{(i\\theta)^3}{3!} + \\dfrac{(i\\theta)^4}{4!} + \\cdots$",
                    "$i^2 = -1,\\ i^3 = -i,\\ i^4 = 1$ 로 정리: $1 + i\\theta - \\dfrac{\\theta^2}{2!} - i\\dfrac{\\theta^3}{3!} + \\dfrac{\\theta^4}{4!} + \\cdots$",
                    "실수항만 모으기: $1 - \\dfrac{\\theta^2}{2!} + \\dfrac{\\theta^4}{4!} - \\cdots = \\cos\\theta$ (단원 21).",
                    "허수항에서 $i$ 를 빼낸 뒤 남은 식: $\\theta - \\dfrac{\\theta^3}{3!} + \\dfrac{\\theta^5}{5!} - \\cdots = \\sin\\theta$.",
                    "두 부분을 합치면 $e^{i\\theta} = \\cos\\theta + i\\sin\\theta$. $\\blacksquare$"
                ],
                "answer": "$e^{i\\theta} = \\cos\\theta + i\\sin\\theta$",
                "lesson": "오일러 공식은 마법이 아니라 테일러 급수의 정직한 결과입니다. 한 번 손으로 유도해 보면 이 식이 왜 '필연' 인지 몸으로 알게 됩니다."
            }
        ],
        "problems": [
            {
                "id": "51-1",
                "type": "number",
                "difficulty": 1,
                "question": "$e^{i\\pi}$ 의 값은?",
                "answer": "-1",
                "hints": [
                    "$e^{i\\theta} = \\cos\\theta + i\\sin\\theta$.",
                    "$\\theta = \\pi$ 대입.",
                    "$\\cos\\pi = -1,\\ \\sin\\pi = 0$."
                ],
                "explanation": "$e^{i\\pi} = \\cos\\pi + i\\sin\\pi = -1 + 0 = -1$. 정리하면 $e^{i\\pi} + 1 = 0$ — 오일러 항등식.",
                "wrongAnalysis": "$e^\\pi$ 같은 실수 지수와 혼동해 $\\approx 23$ 을 답하는 실수가 있습니다. 지수에 $i$ 가 있으면 단위원 위의 회전입니다."
            },
            {
                "id": "51-2",
                "type": "text",
                "difficulty": 2,
                "question": "$e^{i\\pi/2}$ 를 $a + bi$ 꼴로 적으시오. (예: 0+i)",
                "answer": "0+i",
                "hints": [
                    "$\\theta = \\dfrac{\\pi}{2}$ 대입.",
                    "$\\cos(\\pi/2) = 0,\\ \\sin(\\pi/2) = 1$."
                ],
                "explanation": "$e^{i\\pi/2} = \\cos(\\pi/2) + i\\sin(\\pi/2) = 0 + i = i$. 단원 22 에서 본 '$i$ 가 $90^\\circ$ 회전' 임을 정확히 확인.",
                "wrongAnalysis": "$e^{i\\pi/2}$ 를 $\\dfrac{e^{i\\pi}}{2}$ 처럼 분배하는 실수가 있습니다. 지수에서 $1/2$ 는 분수 지수이지 곱셈이 아닙니다."
            },
            {
                "id": "51-3",
                "type": "number",
                "difficulty": 3,
                "question": "$e^{i\\theta} \\cdot e^{-i\\theta}$ 의 값은? (모든 실수 $\\theta$ 에 대해)",
                "answer": "1",
                "hints": [
                    "지수법칙: $e^{a}\\cdot e^{b} = e^{a+b}$.",
                    "$i\\theta + (-i\\theta) = 0$.",
                    "$e^0 = ?$"
                ],
                "explanation": "$e^{i\\theta} \\cdot e^{-i\\theta} = e^{i\\theta - i\\theta} = e^0 = 1$. 또는 직접 전개: $(\\cos\\theta + i\\sin\\theta)(\\cos\\theta - i\\sin\\theta) = \\cos^2\\theta - (i\\sin\\theta)^2 = \\cos^2\\theta + \\sin^2\\theta = 1$. 피타고라스 항등식이 자연스럽게 나옵니다.",
                "wrongAnalysis": "$e^{-i\\theta}$ 를 잊고 $e^{i\\theta} \\cdot e^{i\\theta} = e^{2i\\theta}$ 처럼 부호를 같게 두는 실수가 흔합니다."
            }
        ],
        "summary": {
            "keyPoints": [
                "$e^{i\\theta} = \\cos\\theta + i\\sin\\theta$ — 단원 21 테일러 급수의 직접 결과",
                "단위원 위 한 점을 한 줄로 표현",
                "$e^{i\\pi} + 1 = 0$ — 다섯 상수의 만남"
            ],
            "formulas": [
                "e^{i\\theta} = \\cos\\theta + i\\sin\\theta",
                "e^{i(\\theta_1 + \\theta_2)} = e^{i\\theta_1}\\,e^{i\\theta_2}",
                "z = r e^{i\\theta}",
                "e^{i\\pi} + 1 = 0"
            ],
            "commonMistakes": [
                "$e^{i\\theta}$ 를 실수 지수처럼 다루는 실수",
                "$e^{i\\theta} e^{-i\\theta}$ 에서 부호 누락"
            ],
            "nextConnection": "오일러 공식 덕분에 $\\sin,\\ \\cos$ 은 '복소 지수 $e^{i\\theta}$ 의 실수부·허수부' 로 통합되었습니다. 다음 단원의 푸리에 급수는 이 관점에서 자연스럽게 이해되고, 멀리 단원 37의 2계 미분방정식 복소근에서 등장하는 $e^{\\alpha x}(\\cos + \\sin)$ 형태도 이 식 한 줄로 깔끔히 정리됩니다."
        }
    },
    {
        "id": 52,
        "title": "푸리에 급수 입문",
        "category": "급수",
        "level": "고급",
        "question": "주기적인 함수를 사인과 코사인의 합으로 분해할 수 있을까?",
        "concept": {
            "intro": "푸리에 급수는 주기함수를 사인·코사인의 무한합으로 표현하는 도구입니다. 임의의 주기 신호도 단순한 사인파의 조합으로 나타낼 수 있다는 통찰을 줍니다.\n\n주기 $2\\pi$ 인 함수 $f(x)$ 에 대해 $f(x) = \\dfrac{a_0}{2} + \\displaystyle\\sum(a_n \\cos nx + b_n \\sin nx)$ 의 형태로 전개합니다.",
            "intuition": "오케스트라의 합주를 떠올려 보세요. 다양한 악기가 다른 주파수의 음을 내고, 그 합이 풍부한 사운드를 만듭니다. 푸리에 급수는 임의의 신호를 '주파수 별로 분해' 합니다.",
            "formula": "f(x) = \\frac{a_0}{2} + \\sum_{n=1}^{\\infty} (a_n \\cos nx + b_n \\sin nx)\na_n = \\frac{1}{\\pi}\\int_{-\\pi}^{\\pi} f(x)\\cos(nx)\\,dx\nb_n = \\frac{1}{\\pi}\\int_{-\\pi}^{\\pi} f(x)\\sin(nx)\\,dx",
            "summary": "• 주기 함수 $\\to$ 사인/코사인 합\n• 적분으로 계수 계산\n• 신호처리·열·파동 등 전 분야 응용"
        },
        "examples": [
            {
                "title": "사각파의 첫 계수",
                "problem": "주기 $2\\pi$ 의 함수 $f(x) = \\begin{cases}1 & (0<x<\\pi) \\ -1 & (-\\pi<x<0)\\end{cases}$ 의 $b_1$ 을 구하시오.",
                "steps": [
                    "$f$ 가 홀함수이므로 $a_n = 0$.",
                    "$b_1 = \\dfrac{1}{\\pi}\\displaystyle\\int_{-\\pi}^{\\pi} f \\sin x\\,dx$.",
                    "대칭성으로 $\\dfrac{2}{\\pi}\\displaystyle\\int_0^{\\pi} \\sin x\\,dx = \\dfrac{2}{\\pi}\\cdot 2 = \\dfrac{4}{\\pi}$."
                ],
                "answer": "$b_1 = \\dfrac{4}{\\pi}$",
                "lesson": "함수의 대칭성을 이용하면 계산을 절반으로 줄일 수 있습니다. 짝/홀 판정을 먼저 하세요."
            }
        ],
        "problems": [
            {
                "id": "52-1",
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
                    "푸리에 급수는 주기함수에 적용됩니다."
                ],
                "explanation": "푸리에 급수의 기본 형태는 주기함수를 대상으로 합니다. 비주기함수의 경우 푸리에 변환을 사용합니다.",
                "wrongAnalysis": "푸리에 변환과 푸리에 급수의 차이를 혼동하면 안 됩니다. 급수는 주기, 변환은 일반."
            },
            {
                "id": "52-2",
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
                "id": "52-3",
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
    },
    {
        "id": 53,
        "title": "함수열의 점별 수렴과 균등 수렴",
        "category": "급수",
        "level": "심화",
        "question": "함수열이 '각 점에서' 수렴하는 것과 '균등하게' 수렴하는 것은 어떻게 다른가?",
        "concept": {
            "intro": "지금까지 수열 $a_n \\to L$ 의 수렴을 다루었습니다. 이제 각 $n$ 마다 함수 $f_n$ 이 주어지는 **함수열(sequence of functions)** $\\{f_n\\}$ 의 수렴을 생각합니다. 함수열의 수렴에는 근본적으로 다른 두 가지 개념이 있으며, 그 차이가 해석학 전체를 관통합니다.\n\n**점별 수렴(pointwise convergence):** 정의역의 **각 점 $x$ 를 고정한 뒤**, 수열 $f_n(x)$ 가 수렴하면 됩니다. 엄밀하게는\n$$\\forall x \\in D,\\quad \\forall \\varepsilon > 0,\\quad \\exists N \\in \\mathbb{N} \\text{ s.t. } n \\geq N \\Rightarrow |f_n(x) - f(x)| < \\varepsilon.$$\n여기서 $N$ 은 $x$ 와 $\\varepsilon$ **모두에** 의존할 수 있습니다. 즉 점마다 수렴 속도가 다를 수 있습니다.\n\n**균등 수렴(uniform convergence):** $N$ 이 $\\varepsilon$ **에만** 의존하고 **모든 $x$ 에 대해 동시에** 성립합니다:\n$$\\forall \\varepsilon > 0,\\quad \\exists N \\in \\mathbb{N} \\text{ s.t. } n \\geq N \\Rightarrow \\sup_{x \\in D}|f_n(x) - f(x)| < \\varepsilon.$$\n즉 한 번 $N$ 을 잡으면 정의역의 어느 점에서나 오차가 $\\varepsilon$ 미만입니다.\n\n두 정의의 유일한 차이는 **한정사(quantifier)의 순서**입니다:\n• 점별: $\\forall x\\ \\forall \\varepsilon\\ \\exists N$ — $x$ 를 먼저 고정하고 $N$ 을 찾음\n• 균등: $\\forall \\varepsilon\\ \\exists N\\ \\forall x$ — $N$ 을 먼저 잡고 모든 $x$ 에 적용\n\n균등 수렴은 점별 수렴보다 강한 조건이므로, 균등 수렴이면 반드시 점별 수렴합니다. 역은 성립하지 않습니다.\n\n**핵심 예제:** $f_n(x) = x^n$ 을 $[0, 1]$ 에서 생각합니다.\n• $0 \\leq x < 1$ 이면 $x^n \\to 0$, $x = 1$ 이면 $x^n = 1 \\to 1$.\n• 따라서 점별 극한은 $f(x) = \\begin{cases} 0 & (0 \\leq x < 1) \\ 1 & (x = 1) \\end{cases}$ 로 **불연속**.\n• 각 $f_n$ 은 연속이지만 극한 $f$ 는 불연속 — 점별 수렴은 연속성을 보존하지 못합니다.\n• 균등 수렴 여부: $\\sup_{x \\in [0,1]}|x^n - f(x)| = \\sup_{x \\in [0,1)}x^n = 1$ (상한이 $1$ 에 가까이에서 아무리 크게 잡아도 $x^n$ 이 $1$ 가까이 됨) 이므로 $\\to 0$ 이 아닙니다. 따라서 **균등 수렴이 아닙니다**.\n\n**sup-노름 판정:** $\\|f_n - f\\|_\\infty = \\sup_{x \\in D}|f_n(x) - f(x)|$ 로 정의하면, $f_n \\to f$ 균등 $\\iff$ $\\|f_n - f\\|_\\infty \\to 0$ 입니다. 이것이 균등 수렴의 가장 실용적인 판정법입니다.",
            "intuition": "점별 수렴은 '각 관객이 제 자리에서 결국 조용해지는 것', 균등 수렴은 '공연장 전체의 소음이 동시에 기준 이하로 내려가는 것' 에 비유할 수 있습니다. 점별 수렴에서는 뒷줄 관객이 매우 느리게 조용해져도 상관없지만, 균등 수렴은 모든 좌석에서 동시에 조용해야 합니다.\n\n그래프로 보면, $f_n$ 의 그래프가 $f$ 의 그래프를 중심으로 폭 $2\\varepsilon$ 의 '띠(band)' 안에 **전체적으로** 들어가면 균등 수렴입니다. 점별 수렴은 각 $x$ 좌표에서 띠 안에 들어가기만 하면 되므로, 어떤 곳에서는 띠 밖으로 삐져나갈 수 있습니다.",
            "formula": "\\text{점별 수렴:}\\ \\forall x\\,\\forall \\varepsilon > 0\\,\\exists N:\\ n \\geq N \\Rightarrow |f_n(x) - f(x)| < \\varepsilon\n\\text{균등 수렴:}\\ \\forall \\varepsilon > 0\\,\\exists N:\\ n \\geq N \\Rightarrow \\sup_x |f_n(x) - f(x)| < \\varepsilon\n\\|f_n - f\\|_\\infty = \\sup_{x \\in D}|f_n(x) - f(x)|\nf_n \\to f\\ \\text{균등}\\ \\iff\\ \\|f_n - f\\|_\\infty \\to 0",
            "summary": "• 점별 수렴: $N$ 이 $x$ 와 $\\varepsilon$ 에 의존 (점마다 속도 다름)\n• 균등 수렴: $N$ 이 $\\varepsilon$ 에만 의존 (전체 동시 수렴)\n• sup-노름 $\\|f_n - f\\|_\\infty \\to 0$ 이 균등 수렴의 판정 기준\n• $f_n(x) = x^n$ on $[0,1]$: 점별 수렴하지만 균등 수렴 아님"
        },
        "examples": [
            {
                "title": "$f_n(x) = x^n$ 이 $[0, 1]$ 에서 균등 수렴하지 않음을 증명",
                "problem": "$f_n(x) = x^n$ 이 $[0, 1]$ 에서 점별 극한 $f(x)$ 로 점별 수렴하지만 균등 수렴하지 않음을 보이시오.",
                "steps": [
                    "점별 극한 구하기: $x \\in [0, 1)$ 이면 $|x| < 1$ 이므로 $x^n \\to 0$. $x = 1$ 이면 $1^n = 1$.",
                    "따라서 $f(x) = \\begin{cases} 0 & 0 \\leq x < 1 \\ 1 & x = 1 \\end{cases}$.",
                    "균등 수렴 여부: $\\|f_n - f\\|_\\infty = \\sup_{x \\in [0,1]}|x^n - f(x)|$.",
                    "$x \\in [0, 1)$ 에서 $|x^n - 0| = x^n$, $x = 1$ 에서 $|1 - 1| = 0$.",
                    "$\\sup_{x \\in [0,1)} x^n$: $x^n$ 은 $[0,1)$ 에서 $x = 1$ 에 가까울수록 $1$ 에 가까워지므로 $\\sup = 1$.",
                    "$\\|f_n - f\\|_\\infty = 1 \\not\\to 0$. 따라서 균등 수렴이 아니다. $\\blacksquare$"
                ],
                "answer": "$\\|f_n - f\\|_\\infty = 1 \\neq 0$ 이므로 균등 수렴하지 않는다.",
                "lesson": "각 $f_n$ 은 연속이지만 점별 극한 $f$ 는 불연속입니다. 이는 점별 수렴이 연속성을 보존하지 못한다는 대표적 반례이며, 균등 수렴이 왜 필요한지를 보여줍니다."
            },
            {
                "title": "$g_n(x) = \\dfrac{x}{n}$ 이 $[0, 1]$ 에서 균등 수렴함을 증명",
                "problem": "$g_n(x) = \\dfrac{x}{n}$ 이 $[0, 1]$ 에서 $g(x) = 0$ 으로 균등 수렴함을 보이시오.",
                "steps": [
                    "점별 극한: 모든 $x \\in [0, 1]$ 에 대해 $\\dfrac{x}{n} \\to 0$. 따라서 $g(x) = 0$.",
                    "$\\|g_n - g\\|_\\infty = \\sup_{x \\in [0,1]}\\left|\\dfrac{x}{n} - 0\\right| = \\sup_{x \\in [0,1]}\\dfrac{x}{n} = \\dfrac{1}{n}$.",
                    "$\\dfrac{1}{n} \\to 0$ 이므로 $\\|g_n - g\\|_\\infty \\to 0$.",
                    "따라서 $g_n \\to 0$ 균등. $\\blacksquare$"
                ],
                "answer": "$\\|g_n - g\\|_\\infty = \\dfrac{1}{n} \\to 0$ 이므로 균등 수렴한다.",
                "lesson": "sup-노름을 직접 계산하여 $0$ 으로 가는지 확인하는 것이 균등 수렴 판정의 표준 방법입니다."
            }
        ],
        "problems": [
            {
                "id": "53-1",
                "type": "choice",
                "difficulty": 1,
                "question": "점별 수렴과 균등 수렴의 정의에서 가장 핵심적인 차이는?",
                "choices": [
                    "$\\varepsilon$ 의 크기가 다르다",
                    "한정사(quantifier)의 순서가 다르다: $N$ 이 $x$ 에 의존하느냐 아니냐",
                    "정의역이 유한이냐 무한이냐",
                    "함수가 연속이냐 불연속이냐"
                ],
                "answer": "한정사(quantifier)의 순서가 다르다: $N$ 이 $x$ 에 의존하느냐 아니냐",
                "hints": [
                    "점별 수렴의 정의: $\\forall x\\ \\forall \\varepsilon\\ \\exists N \\ldots$",
                    "균등 수렴의 정의: $\\forall \\varepsilon\\ \\exists N\\ \\forall x \\ldots$",
                    "$N$ 이 $x$ 에 의존할 수 있느냐 없느냐가 핵심입니다."
                ],
                "explanation": "점별 수렴에서 $N = N(x, \\varepsilon)$ 은 $x$ 에도 의존할 수 있지만, 균등 수렴에서 $N = N(\\varepsilon)$ 은 $\\varepsilon$ 에만 의존합니다. 이 한정사의 순서 차이가 두 개념의 유일한 차이이자 본질입니다.",
                "wrongAnalysis": "$\\varepsilon$ 의 크기나 정의역의 성질이 차이라고 오해하기 쉽습니다. 두 정의 모두 같은 $\\varepsilon > 0$ 을 사용하며, 정의역이 같아도 수렴 방식이 다를 수 있습니다."
            },
            {
                "id": "53-2",
                "type": "text",
                "difficulty": 2,
                "question": "$f_n(x) = \\dfrac{nx}{1 + n^2 x^2}$ 의 $[0, \\infty)$ 에서의 점별 극한 $f(x)$ 를 구하시오. (예: 0)",
                "answer": "0",
                "hints": [
                    "$x = 0$ 이면 $f_n(0) = 0$ 이므로 $f(0) = 0$.",
                    "$x > 0$ 이면 $\\dfrac{nx}{1 + n^2 x^2} = \\dfrac{1}{1/(nx) + nx}$.",
                    "$n \\to \\infty$ 이면 $nx \\to \\infty$ 이므로 분모 $\\to \\infty$."
                ],
                "explanation": "$x = 0$: $f_n(0) = 0 \\to 0$. $x > 0$: $\\dfrac{nx}{1 + n^2 x^2} \\leq \\dfrac{nx}{n^2 x^2} = \\dfrac{1}{nx} \\to 0$. 따라서 모든 $x \\geq 0$ 에서 $f(x) = 0$. 그러나 $\\sup_x f_n(x) = f_n(1/n) = \\dfrac{1}{2}$ 이므로 균등 수렴은 아닙니다.",
                "wrongAnalysis": "$x = 1/n$ 을 대입하면 $f_n(1/n) = \\dfrac{1}{2}$ 로 $0$ 이 아닌 값이 남아, 균등 수렴이라고 착각하면 안 됩니다. 점별 극한 자체는 $0$ 이지만 sup-노름이 $0$ 으로 가지 않습니다."
            },
            {
                "id": "53-3",
                "type": "choice",
                "difficulty": 3,
                "question": "$h_n(x) = \\dfrac{\\sin(nx)}{n}$ 은 $\\mathbb{R}$ 에서 $h(x) = 0$ 으로 균등 수렴하는가?",
                "choices": [
                    "균등 수렴한다",
                    "점별 수렴하지만 균등 수렴하지 않는다",
                    "점별 수렴조차 하지 않는다",
                    "조건부로만 수렴한다"
                ],
                "answer": "균등 수렴한다",
                "hints": [
                    "$|\\sin(nx)| \\leq 1$ 을 이용하세요.",
                    "$\\left|\\dfrac{\\sin(nx)}{n} - 0\\right| \\leq \\dfrac{1}{n}$ 이 모든 $x$ 에서 성립합니다.",
                    "sup-노름: $\\|h_n - 0\\|_\\infty \\leq \\dfrac{1}{n} \\to 0$."
                ],
                "explanation": "$\\sup_{x \\in \\mathbb{R}}\\left|\\dfrac{\\sin(nx)}{n}\\right| = \\dfrac{1}{n}$ ($\\sin$ 의 최댓값이 $1$). $\\dfrac{1}{n} \\to 0$ 이므로 균등 수렴합니다. $N$ 을 $\\varepsilon$ 에만 의존하게 잡을 수 있습니다: $N > \\dfrac{1}{\\varepsilon}$ 이면 모든 $x$ 에서 $|h_n(x)| < \\varepsilon$.",
                "wrongAnalysis": "$\\sin(nx)$ 가 진동하므로 수렴하지 않을 것이라 직감하기 쉽습니다. 하지만 진폭이 $\\dfrac{1}{n}$ 으로 줄어들어 진동이 '잠재워지는' 것입니다. sup-노름을 계산하면 명확히 확인됩니다."
            }
        ],
        "summary": {
            "keyPoints": [
                "점별 수렴: $\\forall x\\ \\forall \\varepsilon\\ \\exists N(x, \\varepsilon)$ — 점마다 수렴 속도가 다를 수 있음",
                "균등 수렴: $\\forall \\varepsilon\\ \\exists N(\\varepsilon)\\ \\forall x$ — 모든 점에서 동시에 수렴",
                "$\\|f_n - f\\|_\\infty = \\sup_x|f_n(x) - f(x)| \\to 0$ 이 균등 수렴의 판정 기준",
                "$f_n(x) = x^n$ on $[0,1]$: 점별 수렴 O, 균등 수렴 X — 연속성 보존 실패"
            ],
            "formulas": [
                "\\text{점별:}\\ \\forall x\\ \\forall \\varepsilon > 0\\ \\exists N:\\ n \\geq N \\Rightarrow |f_n(x) - f(x)| < \\varepsilon",
                "\\text{균등:}\\ \\forall \\varepsilon > 0\\ \\exists N:\\ n \\geq N \\Rightarrow \\sup_x|f_n(x) - f(x)| < \\varepsilon",
                "\\|f_n - f\\|_\\infty \\to 0 \\iff \\text{균등 수렴}"
            ],
            "commonMistakes": [
                "점별 수렴과 균등 수렴을 같은 것으로 혼동하는 실수",
                "sup-노름 계산 시 $\\sup$ 을 특정 $x$ 에서의 값으로 대체하는 실수",
                "$f_n$ 이 모두 연속이면 극한도 연속이라 가정하는 실수 (점별 수렴만으로는 보장 안 됨)"
            ],
            "nextConnection": "점별 수렴은 연속성을 보존하지 못했습니다. 균등 수렴이면 어떨까요? 다음 단원에서 균등 수렴이 보장하는 세 가지 핵심 성질 — 연속성 보존, 적분과 극한의 교환, 미분과 극한의 교환 — 을 증명합니다."
        }
    },
    {
        "id": 54,
        "title": "균등 수렴의 해석학적 성질",
        "category": "급수",
        "level": "심화",
        "question": "균등 수렴이면 극한과 적분, 극한과 미분을 바꿀 수 있을까?",
        "concept": {
            "intro": "이전 단원에서 점별 수렴은 연속성을 보존하지 못한다는 것을 보았습니다. 균등 수렴은 이 문제를 해결하며, 세 가지 근본적인 **교환 정리(interchange theorem)**를 보장합니다.\n\n**정리 1 (연속성 보존):** $f_n$ 이 모두 연속이고 $f_n \\to f$ 균등이면, $f$ 도 연속이다.\n\n**증명 ($\\varepsilon/3$ 논법):** 임의의 $x_0 \\in D$ 와 $\\varepsilon > 0$ 이 주어졌다고 하자.\n(i) 균등 수렴이므로 $\\exists N$ s.t. $n \\geq N \\Rightarrow |f_n(x) - f(x)| < \\varepsilon/3$ (모든 $x$).\n(ii) $f_N$ 은 연속이므로 $\\exists \\delta > 0$ s.t. $|x - x_0| < \\delta \\Rightarrow |f_N(x) - f_N(x_0)| < \\varepsilon/3$.\n(iii) 삼각부등식:\n$|f(x) - f(x_0)| \\leq |f(x) - f_N(x)| + |f_N(x) - f_N(x_0)| + |f_N(x_0) - f(x_0)| < \\varepsilon/3 + \\varepsilon/3 + \\varepsilon/3 = \\varepsilon$.\n따라서 $f$ 는 $x_0$ 에서 연속. $x_0$ 이 임의이므로 $f$ 는 $D$ 에서 연속. $\\blacksquare$\n\n**정리 2 (적분과 극한의 교환):** $f_n$ 이 $[a, b]$ 에서 연속이고 $f_n \\to f$ 균등이면,\n$$\\lim_{n \\to \\infty} \\int_a^b f_n(x)\\,dx = \\int_a^b \\lim_{n \\to \\infty} f_n(x)\\,dx = \\int_a^b f(x)\\,dx.$$\n\n**증명:** $\\left|\\int_a^b f_n\\,dx - \\int_a^b f\\,dx\\right| = \\left|\\int_a^b (f_n - f)\\,dx\\right| \\leq \\int_a^b |f_n - f|\\,dx \\leq (b - a)\\|f_n - f\\|_\\infty$.\n균등 수렴이므로 $\\|f_n - f\\|_\\infty \\to 0$, 따라서 $(b-a)\\|f_n - f\\|_\\infty \\to 0$. $\\blacksquare$\n\n**정리 3 (미분과 극한의 교환):** $f_n$ 이 미분가능하고, $f_n'$ 이 $[a, b]$ 에서 균등 수렴하며, 어떤 한 점 $x_0$ 에서 $f_n(x_0)$ 이 수렴하면,\n$$\\left(\\lim_{n \\to \\infty} f_n\\right)' = \\lim_{n \\to \\infty} f_n'.$$\n즉 $f_n \\to f$ 균등이고, $f'(x) = \\lim f_n'(x)$.\n\n**반례 — 점별 수렴만으로는 실패:**\n• 연속성 실패: $f_n(x) = x^n$ on $[0,1]$ (이전 단원).\n• 적분 교환 실패: $f_n(x) = n^2 x(1-x^2)^n$ on $[0,1]$. 점별 $\\to 0$ 이지만 $\\int_0^1 f_n\\,dx = \\dfrac{n^2}{2(n+1)} \\to \\infty$.\n• 미분 교환 실패: $f_n(x) = \\dfrac{\\sin(nx)}{\\sqrt{n}}$ on $\\mathbb{R}$. $f_n \\to 0$ 균등이지만 $f_n'(x) = \\sqrt{n}\\cos(nx)$ 는 발산.",
            "intuition": "$\\varepsilon/3$ 논법은 해석학에서 가장 자주 등장하는 기법입니다. 목표 오차 $\\varepsilon$ 을 세 조각으로 나누어, 각각을 $f \\to f_N$, $f_N$ 의 연속성, $f_N \\to f$ 로 통제합니다. 마치 여행에서 출발지→중간역, 중간역→중간역, 중간역→목적지의 세 구간 거리를 각각 제한하는 것과 같습니다.\n\n적분 교환이 성립하는 이유는 직관적으로 명확합니다: 균등 수렴이면 $f_n$ 과 $f$ 사이의 '면적 차이' 가 최대 $(b-a) \\times \\|f_n - f\\|_\\infty$ 인데, 이것이 $0$ 으로 가므로 적분값도 일치하게 됩니다.",
            "formula": "\\text{연속 보존:}\\ f_n \\text{ 연속},\\ f_n \\to f\\ \\text{균등} \\Rightarrow f\\ \\text{연속}\n\\text{적분 교환:}\\ \\lim \\int f_n = \\int \\lim f_n\\ \\ (\\text{균등 수렴 하에서})\n\\left|\\int_a^b (f_n - f)\\right| \\leq (b-a)\\|f_n - f\\|_\\infty\n\\text{미분 교환:}\\ f_n' \\to g\\ \\text{균등},\\ f_n(x_0)\\ \\text{수렴} \\Rightarrow (\\lim f_n)' = \\lim f_n'",
            "summary": "• 균등 수렴 $\\Rightarrow$ 연속 함수의 극한도 연속 ($\\varepsilon/3$ 증명)\n• 균등 수렴 $\\Rightarrow$ $\\lim \\int = \\int \\lim$ (적분과 극한 교환)\n• 도함수가 균등 수렴 $+$ 함수가 한 점에서 수렴 $\\Rightarrow$ $\\lim f_n' = (\\lim f_n)'$\n• 점별 수렴만으로는 세 성질 모두 보장 안 됨"
        },
        "examples": [
            {
                "title": "연속성 보존의 $\\varepsilon/3$ 증명 적용",
                "problem": "$g_n(x) = \\dfrac{x}{1 + nx^2}$ 이 $[0, 1]$ 에서 균등 수렴하고, 극한 함수가 연속임을 보이시오.",
                "steps": [
                    "점별 극한: $x = 0$ 이면 $g_n(0) = 0$. $x > 0$ 이면 $\\dfrac{x}{1 + nx^2} \\leq \\dfrac{1}{nx} \\to 0$. 따라서 $g(x) = 0$.",
                    "sup-노름: $|g_n(x)| = \\dfrac{x}{1 + nx^2}$. 최댓값을 구하기 위해 미분: $g_n'(x) = \\dfrac{1 - nx^2}{(1+nx^2)^2} = 0$ 에서 $x = \\dfrac{1}{\\sqrt{n}}$.",
                    "$g_n\\left(\\dfrac{1}{\\sqrt{n}}\\right) = \\dfrac{1/\\sqrt{n}}{1 + 1} = \\dfrac{1}{2\\sqrt{n}}$.",
                    "$\\|g_n - 0\\|_\\infty = \\dfrac{1}{2\\sqrt{n}} \\to 0$. 균등 수렴 확인.",
                    "각 $g_n$ 은 연속이고 균등 수렴하므로, 정리 1에 의해 극한 $g(x) = 0$ 은 연속. $\\blacksquare$"
                ],
                "answer": "$\\|g_n\\|_\\infty = \\dfrac{1}{2\\sqrt{n}} \\to 0$ 이므로 균등 수렴하고, 극한 $g = 0$ 은 연속.",
                "lesson": "sup-노름을 구하려면 $|f_n(x) - f(x)|$ 를 $x$ 의 함수로 보고 최댓값을 구합니다. 미분을 이용한 최대·최솟값 탐색이 핵심 기술입니다."
            },
            {
                "title": "적분과 극한의 교환 실패 — 점별 수렴의 반례",
                "problem": "$f_n(x) = 2n^2 x \\cdot e^{-n^2 x^2}$ 이 $[0, \\infty)$ 에서 점별 $\\to 0$ 이지만 $\\lim \\int \\neq \\int \\lim$ 임을 보이시오.",
                "steps": [
                    "점별 극한: $x = 0$ 이면 $f_n(0) = 0$. $x > 0$ 이면 $n^2 x^2 \\to \\infty$ 이므로 $e^{-n^2 x^2} \\to 0$ 이 $n^2 x$ 보다 빨라 $f_n(x) \\to 0$.",
                    "$\\int_0^\\infty \\lim f_n\\,dx = \\int_0^\\infty 0\\,dx = 0$.",
                    "$\\int_0^\\infty f_n(x)\\,dx = \\int_0^\\infty 2n^2 x e^{-n^2 x^2}dx$. $u = n^2 x^2$ 으로 치환하면 $du = 2n^2 x\\,dx$.",
                    "$= \\int_0^\\infty e^{-u}\\,du = 1$.",
                    "$\\lim \\int f_n = 1 \\neq 0 = \\int \\lim f_n$. 적분과 극한이 교환되지 않음."
                ],
                "answer": "$\\lim \\int f_n = 1 \\neq 0 = \\int \\lim f_n$",
                "lesson": "점별 수렴만으로는 적분과 극한의 순서를 바꿀 수 없습니다. 이 반례에서 $f_n$ 은 점점 좁고 높은 '스파이크' 형태가 되어, 각 점에서는 $0$ 으로 가지만 면적은 항상 $1$ 입니다."
            }
        ],
        "problems": [
            {
                "id": "54-1",
                "type": "choice",
                "difficulty": 1,
                "question": "연속 함수열 $\\{f_n\\}$ 이 $f$ 로 균등 수렴하면 반드시 성립하는 것은?",
                "choices": [
                    "$f$ 는 미분가능하다",
                    "$f$ 는 연속이다",
                    "$f$ 는 단조증가한다",
                    "$f_n$ 의 최댓값이 감소한다"
                ],
                "answer": "$f$ 는 연속이다",
                "hints": [
                    "균등 수렴의 세 가지 교환 정리 중 첫 번째를 기억하세요.",
                    "연속 함수의 균등 극한은 연속입니다.",
                    "$\\varepsilon/3$ 논법으로 증명됩니다."
                ],
                "explanation": "정리 1에 의해, 연속 함수열의 균등 극한은 반드시 연속입니다. 미분가능성은 보장되지 않으며(바이어슈트라스의 모든 점에서 미분 불가능한 연속함수가 연속 함수열의 균등 극한), 단조성이나 최댓값 감소와는 무관합니다.",
                "wrongAnalysis": "'균등 수렴이면 미분가능'이라고 오해하기 쉽습니다. 균등 수렴은 연속성만 보존하며, 미분가능성 보존에는 도함수의 균등 수렴이라는 추가 조건이 필요합니다."
            },
            {
                "id": "54-2",
                "type": "number",
                "difficulty": 2,
                "question": "$f_n(x) = \\dfrac{x}{n}$ 일 때 $\\displaystyle\\lim_{n \\to \\infty} \\int_0^1 f_n(x)\\,dx$ 의 값은?",
                "answer": "0",
                "hints": [
                    "이전 단원에서 $f_n(x) = x/n \\to 0$ 균등임을 보았습니다.",
                    "균등 수렴이므로 $\\lim \\int = \\int \\lim$ 이 성립합니다.",
                    "$\\int_0^1 0\\,dx = 0$. 또는 직접: $\\int_0^1 \\dfrac{x}{n}\\,dx = \\dfrac{1}{2n} \\to 0$."
                ],
                "explanation": "방법 1 (교환 정리): $f_n \\to 0$ 균등이므로 $\\lim \\int_0^1 f_n = \\int_0^1 \\lim f_n = \\int_0^1 0\\,dx = 0$.\n방법 2 (직접 계산): $\\int_0^1 \\dfrac{x}{n}\\,dx = \\dfrac{1}{2n} \\to 0$.\n두 방법의 답이 일치하며, 이는 균등 수렴 하에서 교환이 올바르게 작동함을 확인합니다.",
                "wrongAnalysis": "극한과 적분의 교환이 항상 성립한다고 무비판적으로 사용하는 실수가 있습니다. 교환이 정당화되려면 균등 수렴(또는 다른 충분조건)을 반드시 확인해야 합니다."
            },
            {
                "id": "54-3",
                "type": "choice",
                "difficulty": 3,
                "question": "$f_n(x) = \\dfrac{\\sin(nx)}{\\sqrt{n}}$ 에 대해 다음 중 올바른 것은?",
                "choices": [
                    "$f_n \\to 0$ 균등이고, $f_n' \\to 0$ 균등이다",
                    "$f_n \\to 0$ 균등이지만, $f_n'$ 은 균등 수렴하지 않는다",
                    "$f_n$ 은 점별 수렴하지 않는다",
                    "$f_n \\to 0$ 점별이지만 균등 수렴은 아니다"
                ],
                "answer": "$f_n \\to 0$ 균등이지만, $f_n'$ 은 균등 수렴하지 않는다",
                "hints": [
                    "$\\|f_n\\|_\\infty = \\dfrac{1}{\\sqrt{n}} \\to 0$ 이므로 $f_n \\to 0$ 균등.",
                    "$f_n'(x) = \\dfrac{n \\cos(nx)}{\\sqrt{n}} = \\sqrt{n}\\cos(nx)$.",
                    "$\\|f_n'\\|_\\infty = \\sqrt{n} \\to \\infty$."
                ],
                "explanation": "$\\|f_n - 0\\|_\\infty = \\dfrac{1}{\\sqrt{n}} \\to 0$ 이므로 $f_n \\to 0$ 균등 수렴합니다. 그러나 $f_n'(x) = \\sqrt{n}\\cos(nx)$ 이고 $\\|f_n'\\|_\\infty = \\sqrt{n} \\to \\infty$ 이므로 $f_n'$ 은 수렴조차 하지 않습니다. 이 예는 함수의 균등 수렴이 도함수의 수렴을 보장하지 않음을 보여줍니다.",
                "wrongAnalysis": "'$f_n$ 이 균등 수렴하면 $f_n'$ 도 수렴할 것' 이라 오해하기 쉽습니다. 미분 교환 정리(정리 3)의 가정은 $f_n'$ 이 균등 수렴하는 것이지, $f_n$ 의 균등 수렴으로부터 $f_n'$ 의 수렴이 따라 나오는 것이 아닙니다."
            }
        ],
        "summary": {
            "keyPoints": [
                "연속 함수의 균등 극한은 연속 ($\\varepsilon/3$ 논법)",
                "균등 수렴 하에서 $\\lim \\int = \\int \\lim$ (적분과 극한 교환)",
                "$f_n'$ 균등 수렴 $+$ $f_n$ 한 점 수렴 $\\Rightarrow$ $(\\lim f_n)' = \\lim f_n'$ (미분과 극한 교환)",
                "점별 수렴만으로는 세 성질 모두 실패할 수 있음"
            ],
            "formulas": [
                "|f(x) - f(x_0)| \\leq |f - f_N| + |f_N(x) - f_N(x_0)| + |f_N - f| < \\varepsilon/3 \\times 3",
                "\\left|\\int_a^b (f_n - f)\\right| \\leq (b-a)\\|f_n - f\\|_\\infty \\to 0",
                "f_n' \\to g\\ \\text{균등},\\ f_n(x_0)\\ \\text{수렴} \\Rightarrow f_n \\to f\\ \\text{균등},\\ f' = g"
            ],
            "commonMistakes": [
                "점별 수렴만으로 극한과 적분/미분을 교환하는 실수",
                "함수의 균등 수렴에서 도함수의 균등 수렴을 추론하는 실수",
                "$\\varepsilon/3$ 증명에서 $N$ 선택 순서를 잘못 잡는 실수"
            ],
            "nextConnection": "균등 수렴의 중요성을 확인했으니, 다음 질문은 '어떻게 균등 수렴을 보장할 수 있는가?' 입니다. 다음 단원의 바이어슈트라스 M-판정법은 함수 급수 $\\sum f_n$ 의 균등 수렴을 판정하는 가장 강력하고 실용적인 도구입니다."
        }
    },
    {
        "id": 55,
        "title": "바이어슈트라스 M-판정법",
        "category": "급수",
        "level": "심화",
        "question": "함수 급수 $\\sum f_n(x)$ 의 균등 수렴을 어떻게 체계적으로 판정하는가?",
        "concept": {
            "intro": "이전 두 단원에서 균등 수렴의 정의와 해석학적 성질을 배웠습니다. 하지만 실전에서 sup-노름 $\\|S_n - S\\|_\\infty \\to 0$ 을 직접 확인하기는 어렵습니다. **바이어슈트라스 M-판정법(Weierstrass M-test)**은 함수 급수 $\\sum_{n=1}^{\\infty} f_n(x)$ 의 균등 수렴을 판정하는 가장 실용적인 도구입니다.\n\n**정리 (바이어슈트라스 M-판정법):** 정의역 $D$ 위의 함수열 $\\{f_n\\}$ 에 대해, 양의 상수열 $\\{M_n\\}$ 이 존재하여\n(i) $|f_n(x)| \\leq M_n$ 이 모든 $x \\in D$ 와 모든 $n$ 에서 성립하고,\n(ii) $\\displaystyle\\sum_{n=1}^{\\infty} M_n$ 이 수렴하면,\n$\\displaystyle\\sum_{n=1}^{\\infty} f_n(x)$ 는 $D$ 에서 **균등 절대수렴**한다.\n\n**증명 (코시 판정법 이용):** 균등 수렴의 코시 조건을 사용합니다. $\\sum M_n$ 이 수렴하므로 코시 조건에 의해, $\\forall \\varepsilon > 0$, $\\exists N$ s.t. $m > n \\geq N \\Rightarrow M_{n+1} + M_{n+2} + \\cdots + M_m < \\varepsilon$.\n이제 임의의 $x \\in D$ 에 대해:\n$$\\left|\\sum_{k=n+1}^{m} f_k(x)\\right| \\leq \\sum_{k=n+1}^{m} |f_k(x)| \\leq \\sum_{k=n+1}^{m} M_k < \\varepsilon.$$\n이 부등식이 **모든 $x$ 에 대해** 성립하므로 (부등식에 $x$ 가 남지 않음), $\\sum f_n$ 은 코시 조건을 **균등하게** 만족합니다. 따라서 $\\sum f_n$ 은 $D$ 에서 균등 수렴합니다. 절대수렴도 같은 부등식에서 따라 나옵니다. $\\blacksquare$\n\n**멱급수에의 응용:** 수렴반경 $R$ 인 멱급수 $\\sum a_n x^n$ 을 생각합니다. $0 < r < R$ 인 임의의 $r$ 에 대해, $|x| \\leq r$ 이면\n$|a_n x^n| \\leq |a_n| r^n = M_n$.\n$\\sum |a_n| r^n$ 은 $r < R$ 이므로 수렴합니다 (수렴반경의 정의). 따라서 M-판정법에 의해 $\\sum a_n x^n$ 은 $[-r, r]$ 에서 **균등 수렴**합니다.\n\n이 결과의 의미: 멱급수는 수렴반경 **내부의 임의의 닫힌 구간**에서 균등 수렴하므로, 이전 단원의 교환 정리에 의해 항별 적분, 항별 미분이 가능합니다. 테일러 급수의 미분·적분 성질이 이렇게 정당화됩니다.\n\n**기존 판정법과의 연결:** 레슨 48의 비교판정법이 수열에 대해 $0 \\leq a_n \\leq b_n$ 으로 수렴을 비교했다면, M-판정법은 **모든 $x$ 에 대해 동시에** $|f_n(x)| \\leq M_n$ 으로 비교하는 것입니다. 비교판정법의 '균등 버전' 이라 할 수 있습니다.",
            "intuition": "M-판정법의 핵심 아이디어는 단순합니다: 각 $f_n(x)$ 의 크기를 $x$ 에 무관한 상수 $M_n$ 으로 눌러놓고, 그 상수들의 합 $\\sum M_n$ 이 수렴하면 원래 급수도 (균등하게) 수렴한다는 것입니다.\n\n비유하면, 각 악기($f_n$)의 최대 볼륨($M_n$)을 제한해 놓고, 최대 볼륨의 총합이 유한하면 전체 합주의 음량이 폭발하지 않는다는 뜻입니다. 어떤 자리(어떤 $x$)에서 들어도 총 음량은 유한합니다.",
            "formula": "|f_n(x)| \\leq M_n\\ (\\forall x \\in D),\\quad \\sum M_n < \\infty \\Rightarrow \\sum f_n(x)\\ \\text{균등 절대수렴}\n\\text{멱급수:}\\ |x| \\leq r < R \\Rightarrow |a_n x^n| \\leq |a_n|r^n = M_n,\\quad \\sum M_n < \\infty\n\\text{코시 판정:}\\ \\left|\\sum_{k=n+1}^{m} f_k(x)\\right| \\leq \\sum_{k=n+1}^{m} M_k < \\varepsilon\\ (\\forall x)",
            "summary": "• $|f_n(x)| \\leq M_n$ (모든 $x$) 이고 $\\sum M_n < \\infty$ 이면 $\\sum f_n$ 균등 절대수렴\n• 증명: 코시 조건을 $x$ 에 무관하게 만족시킴\n• 멱급수: 수렴반경 내부의 닫힌 구간에서 균등 수렴 $\\to$ 항별 미분·적분 가능\n• 비교판정법의 '균등 버전'"
        },
        "examples": [
            {
                "title": "$\\sum \\dfrac{\\cos(nx)}{n^2}$ 의 균등 수렴",
                "problem": "$\\displaystyle\\sum_{n=1}^{\\infty} \\dfrac{\\cos(nx)}{n^2}$ 이 $\\mathbb{R}$ 전체에서 균등 수렴함을 M-판정법으로 보이시오.",
                "steps": [
                    "$f_n(x) = \\dfrac{\\cos(nx)}{n^2}$ 으로 놓는다.",
                    "$|\\cos(nx)| \\leq 1$ 이므로 $|f_n(x)| = \\dfrac{|\\cos(nx)|}{n^2} \\leq \\dfrac{1}{n^2} = M_n$.",
                    "$\\displaystyle\\sum_{n=1}^{\\infty} M_n = \\sum_{n=1}^{\\infty} \\dfrac{1}{n^2} = \\dfrac{\\pi^2}{6} < \\infty$ ($p$-급수, $p = 2 > 1$).",
                    "M-판정법의 두 조건이 모두 만족되므로, $\\sum \\dfrac{\\cos(nx)}{n^2}$ 은 $\\mathbb{R}$ 에서 균등 절대수렴. $\\blacksquare$"
                ],
                "answer": "$M_n = \\dfrac{1}{n^2}$, $\\sum M_n = \\dfrac{\\pi^2}{6} < \\infty$ 이므로 균등 수렴.",
                "lesson": "삼각함수가 포함된 급수에서 $|\\cos|, |\\sin| \\leq 1$ 로 바운드하는 것이 M-판정법 적용의 전형적 첫 단계입니다."
            },
            {
                "title": "멱급수의 균등 수렴 — $e^x = \\sum \\dfrac{x^n}{n!}$ 을 $[-r, r]$ 에서",
                "problem": "임의의 $r > 0$ 에 대해 $\\displaystyle\\sum_{n=0}^{\\infty} \\dfrac{x^n}{n!}$ 이 $[-r, r]$ 에서 균등 수렴함을 보이시오.",
                "steps": [
                    "$f_n(x) = \\dfrac{x^n}{n!}$. $|x| \\leq r$ 이면 $|f_n(x)| \\leq \\dfrac{r^n}{n!} = M_n$.",
                    "$\\displaystyle\\sum_{n=0}^{\\infty} M_n = \\sum_{n=0}^{\\infty} \\dfrac{r^n}{n!} = e^r < \\infty$.",
                    "M-판정법에 의해 $\\sum \\dfrac{x^n}{n!}$ 은 $[-r, r]$ 에서 균등 절대수렴. $\\blacksquare$",
                    "$r$ 이 임의이므로, $\\mathbb{R}$ 의 모든 유계 구간에서 균등 수렴."
                ],
                "answer": "$M_n = \\dfrac{r^n}{n!}$, $\\sum M_n = e^r < \\infty$. 균등 수렴.",
                "lesson": "레슨 48에서 $e^x$ 의 수렴반경이 $R = \\infty$ 임을 보았습니다. M-판정법은 그 수렴이 '균등' 임을 추가로 보장하여, $e^x$ 의 테일러 급수를 항별 미분·적분할 수 있음을 정당화합니다."
            }
        ],
        "problems": [
            {
                "id": "55-1",
                "type": "choice",
                "difficulty": 1,
                "question": "바이어슈트라스 M-판정법에서 $M_n$ 이 만족해야 하는 조건은?",
                "choices": [
                    "$M_n \\to 0$ 이면 충분하다",
                    "$|f_n(x)| \\leq M_n$ (모든 $x$) 이고 $\\sum M_n$ 이 수렴해야 한다",
                    "$M_n = \\sup_x |f_n(x)|$ 이어야만 한다",
                    "$M_n$ 이 단조감소해야 한다"
                ],
                "answer": "$|f_n(x)| \\leq M_n$ (모든 $x$) 이고 $\\sum M_n$ 이 수렴해야 한다",
                "hints": [
                    "M-판정법의 두 가지 조건을 정확히 떠올려 보세요.",
                    "첫째: $|f_n(x)| \\leq M_n$ 이 모든 $x$ 에서 성립.",
                    "둘째: $\\sum M_n < \\infty$."
                ],
                "explanation": "M-판정법은 (i) $|f_n(x)| \\leq M_n$ (모든 $x$)과 (ii) $\\sum M_n < \\infty$ 두 조건을 요구합니다. $M_n \\to 0$ 만으로는 $\\sum M_n$ 이 수렴하지 않을 수 있고 (예: $M_n = 1/n$), $M_n$ 이 반드시 $\\sup|f_n|$ 일 필요는 없으며 (더 큰 값도 가능), 단조감소는 요구되지 않습니다.",
                "wrongAnalysis": "$M_n \\to 0$ 이면 충분하다는 오해가 흔합니다. 조화급수 $\\sum 1/n$ 처럼 $M_n \\to 0$ 이어도 $\\sum M_n$ 이 발산하면 M-판정법을 적용할 수 없습니다."
            },
            {
                "id": "55-2",
                "type": "text",
                "difficulty": 2,
                "question": "$\\displaystyle\\sum_{n=1}^{\\infty} \\dfrac{\\sin(nx)}{n^3}$ 이 $\\mathbb{R}$ 에서 균등 수렴함을 M-판정법으로 보이려 할 때, 적절한 $M_n$ 은? (예: 1/n^2)",
                "answer": "1/n^3",
                "hints": [
                    "$|\\sin(nx)| \\leq 1$ 을 이용하세요.",
                    "$\\left|\\dfrac{\\sin(nx)}{n^3}\\right| \\leq \\dfrac{1}{n^3}$.",
                    "$\\sum \\dfrac{1}{n^3}$ 은 $p$-급수 ($p = 3 > 1$) 로 수렴합니다."
                ],
                "explanation": "$|\\sin(nx)| \\leq 1$ 이므로 $\\left|\\dfrac{\\sin(nx)}{n^3}\\right| \\leq \\dfrac{1}{n^3} = M_n$. $\\sum \\dfrac{1}{n^3}$ 은 $p$-급수에서 $p = 3 > 1$ 이므로 수렴합니다. M-판정법의 두 조건이 만족되어 원래 급수는 $\\mathbb{R}$ 에서 균등 절대수렴합니다.",
                "wrongAnalysis": "$M_n = \\dfrac{1}{n}$ 이나 $\\dfrac{1}{n^2}$ 을 쓰는 것도 부등식은 만족하지만, M-판정법의 핵심은 $\\sum M_n < \\infty$ 이므로 가능한 한 타이트한 바운드를 잡는 것이 좋습니다. $1/n^3$ 이 자연스러운 선택입니다."
            },
            {
                "id": "55-3",
                "type": "choice",
                "difficulty": 3,
                "question": "수렴반경 $R$ 인 멱급수 $\\sum a_n x^n$ 에 대해, M-판정법이 보장하는 것은?",
                "choices": [
                    "$|x| < R$ 인 모든 $x$ 에서 균등 수렴한다",
                    "$|x| \\leq r < R$ 인 임의의 닫힌 구간 $[-r, r]$ 에서 균등 수렴한다",
                    "$|x| = R$ 에서도 균등 수렴한다",
                    "$|x| > R$ 에서도 조건부 수렴한다"
                ],
                "answer": "$|x| \\leq r < R$ 인 임의의 닫힌 구간 $[-r, r]$ 에서 균등 수렴한다",
                "hints": [
                    "$|x| \\leq r$ 이면 $|a_n x^n| \\leq |a_n| r^n = M_n$ 으로 바운드됩니다.",
                    "$r < R$ 이면 $\\sum |a_n| r^n$ 이 수렴합니다.",
                    "$(-R, R)$ 전체에서는? $r$ 을 $R$ 에 가까이 잡으면 되지만, 열린 구간 전체에서의 **균등** 수렴은 보장되지 않습니다."
                ],
                "explanation": "$0 < r < R$ 이면 $M_n = |a_n| r^n$ 으로 놓을 때 $\\sum M_n$ 이 수렴하므로, M-판정법에 의해 $[-r, r]$ 에서 균등 수렴합니다. 그러나 열린 구간 $(-R, R)$ 전체에서의 균등 수렴은 일반적으로 보장되지 않습니다 ($x \\to R$ 로 가면 바운드가 무너질 수 있음). 이 '수렴반경 내부의 닫힌 부분구간에서 균등 수렴' 이라는 결과가 멱급수의 항별 미분·적분을 정당화합니다.",
                "wrongAnalysis": "'$|x| < R$ 전체에서 균등 수렴' 이라고 답하는 실수가 많습니다. M-판정법은 닫힌 구간 $[-r, r]$ ($r < R$)에서의 균등 수렴을 보장하며, 이를 열린 구간 전체로 무비판적으로 확장하면 안 됩니다."
            }
        ],
        "summary": {
            "keyPoints": [
                "$|f_n(x)| \\leq M_n$ (모든 $x$) 이고 $\\sum M_n < \\infty$ 이면 $\\sum f_n$ 균등 절대수렴",
                "증명은 코시 판정법을 $x$ 에 무관하게 적용하는 것",
                "멱급수는 수렴반경 내부의 닫힌 구간에서 균등 수렴 $\\to$ 항별 미분·적분 정당화",
                "비교판정법(레슨 48)의 '균등 버전' — $x$ 에 무관한 상수로 비교"
            ],
            "formulas": [
                "|f_n(x)| \\leq M_n\\ (\\forall x),\\quad \\sum M_n < \\infty \\Rightarrow \\sum f_n\\ \\text{균등 절대수렴}",
                "\\text{멱급수:}\\ M_n = |a_n|r^n,\\quad r < R \\Rightarrow \\sum M_n < \\infty",
                "\\left|\\sum_{k=n+1}^{m} f_k(x)\\right| \\leq \\sum_{k=n+1}^{m} M_k < \\varepsilon"
            ],
            "commonMistakes": [
                "$M_n \\to 0$ 만 확인하고 $\\sum M_n$ 수렴을 확인하지 않는 실수",
                "멱급수의 균등 수렴을 열린 구간 $(-R, R)$ 전체로 잘못 확장하는 실수",
                "M-판정법의 역이 성립한다고 오해하는 실수 (M-판정법 실패해도 균등 수렴할 수 있음)"
            ],
            "nextConnection": "지금까지 급수 단원에서 수열·급수의 수렴, 테일러 급수, 복소수, 오일러 공식, 푸리에 급수, 그리고 함수열의 수렴까지 다루었습니다. 다변수 미적분으로 확장하기 전에, 그 무대가 될 '벡터'와 '행렬'을 먼저 다집니다. 다음 단원부터 선형대수의 핵심을 정리합니다."
        }
    },
];
