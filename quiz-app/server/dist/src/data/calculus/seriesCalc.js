"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seriesCalcLessons = void 0;
exports.seriesCalcLessons = [
    {
        "id": 44,
        "title": "유한합과 시그마 표기법",
        "category": "급수",
        "level": "기초",
        "question": "여러 항의 합을 간결하게 표기하고 계산하는 방법은?",
        "concept": {
            "intro": "시그마 표기법(sigma notation)은 합을 간결하게 나타내는 도구입니다. $\\displaystyle\\sum_{k=1}^{n} a_k$는 '$k$가 $1$부터 $n$까지 변할 때 $a_k$를 모두 더하라'는 뜻입니다. 즉,\n$$\\sum_{k=1}^{n} a_k = a_1 + a_2 + a_3 + \\cdots + a_n$$\n\n**시그마의 핵심 성질:**\n- 상수배: $\\sum_{k=1}^{n} c \\cdot a_k = c \\sum_{k=1}^{n} a_k$\n- 합의 분리: $\\sum_{k=1}^{n} (a_k + b_k) = \\sum_{k=1}^{n} a_k + \\sum_{k=1}^{n} b_k$\n- 구간 분할: $\\sum_{k=1}^{n} a_k = \\sum_{k=1}^{m} a_k + \\sum_{k=m+1}^{n} a_k$\n\n**핵심 합 공식:**\n$$\\sum_{k=1}^{n} k = \\frac{n(n+1)}{2}$$\n$$\\sum_{k=1}^{n} k^2 = \\frac{n(n+1)(2n+1)}{6}$$\n$$\\sum_{k=1}^{n} k^3 = \\left[\\frac{n(n+1)}{2}\\right]^2$$\n\n**망원합(telescoping sum):**\n$\\sum_{k=1}^{n} (b_k - b_{k+1}) = b_1 - b_{n+1}$. 중간 항이 모두 상쇄되어 처음과 끝만 남습니다. 부분분수 분해를 이용하면 복잡한 합도 망원합으로 변환할 수 있습니다.\n\n**급수와의 연결:**\n유한합 $S_n = \\sum_{k=1}^{n} a_k$에서 $n \\to \\infty$로 보내면 무한급수 $\\sum_{k=1}^{\\infty} a_k = \\lim_{n \\to \\infty} S_n$이 됩니다. 유한합 공식은 급수 이론의 출발점입니다.",
            "intuition": "시그마 기호 $\\Sigma$는 '더하라(Sum)'는 뜻의 그리스 문자 S입니다. 일일이 나열하기 힘든 긴 합을 한 줄로 압축하는 약속이죠. 마치 '...'을 수학적으로 엄밀하게 쓴 것입니다.\n\n망원합은 망원경처럼 접었다 펴는 것에 비유됩니다. 길게 펼치면 수십 개의 항이지만, 접으면 처음과 끝 두 개만 남습니다.",
            "formula": "\\sum_{k=1}^{n} a_k = a_1 + a_2 + \\cdots + a_n\n\\sum_{k=1}^{n} k = \\frac{n(n+1)}{2}\n\\sum_{k=1}^{n} k^2 = \\frac{n(n+1)(2n+1)}{6}\n\\text{망원합:}\\ \\sum_{k=1}^{n} (b_k - b_{k+1}) = b_1 - b_{n+1}",
            "summary": "시그마 표기법은 합의 간결한 표현이며, 상수배·합 분리 등의 성질을 가진다. 핵심 공식 $\\sum k$, $\\sum k^2$ 등을 활용하고, 망원합으로 상쇄 패턴을 이용한다. $n \\to \\infty$로 확장하면 무한급수가 된다."
        },
        "examples": [
            {
                "title": "시그마 합 계산",
                "problem": "$\\displaystyle\\sum_{k=1}^{20} k$의 값을 구하시오.",
                "steps": [
                    "$\\sum_{k=1}^{n} k = \\dfrac{n(n+1)}{2}$ 공식을 사용한다.",
                    "$n = 20$을 대입: $\\dfrac{20 \\times 21}{2} = \\dfrac{420}{2} = 210$."
                ],
                "answer": "$210$",
                "lesson": "$1$부터 $n$까지의 합은 $\\dfrac{n(n+1)}{2}$입니다. 가우스가 발견한 이 공식은 시그마 표기법의 가장 기본적인 응용입니다."
            }
        ],
        "problems": [
            {
                "id": "44-1",
                "type": "number",
                "difficulty": 1,
                "question": "$\\displaystyle\\sum_{k=1}^{10} (2k + 1)$의 값은?",
                "answer": "120",
                "hints": [
                    "선형성을 이용하세요: $\\sum (2k + 1) = 2\\sum k + \\sum 1$.",
                    "$2 \\times \\dfrac{10 \\times 11}{2} + 10$.",
                    "$110 + 10 = 120$."
                ],
                "explanation": "$2 \\sum_{k=1}^{10} k + \\sum_{k=1}^{10} 1 = 2 \\times 55 + 10 = 120$.",
                "wrongAnalysis": "$\\sum 1 = 1$로 계산하는 실수가 있습니다. $\\sum_{k=1}^{n} 1 = n$입니다 ($1$이 $n$번 더해짐)."
            },
            {
                "id": "44-2",
                "type": "number",
                "difficulty": 2,
                "question": "$\\displaystyle\\sum_{k=1}^{5} k^2$의 값은?",
                "answer": "55",
                "hints": [
                    "공식: $\\sum_{k=1}^{n} k^2 = \\dfrac{n(n+1)(2n+1)}{6}$.",
                    "$n = 5$: $\\dfrac{5 \\times 6 \\times 11}{6}$.",
                    "$= 55$."
                ],
                "explanation": "$\\dfrac{5 \\times 6 \\times 11}{6} = \\dfrac{330}{6} = 55$. 직접 확인: $1 + 4 + 9 + 16 + 25 = 55$.",
                "wrongAnalysis": "$\\sum k^2 = (\\sum k)^2$으로 착각하면 $15^2 = 225$라는 오답이 나옵니다. 제곱의 합과 합의 제곱은 다릅니다."
            },
            {
                "id": "44-3",
                "type": "number",
                "difficulty": 3,
                "question": "$\\displaystyle\\sum_{k=1}^{n} \\dfrac{1}{k(k+1)}$을 $n$에 대한 식으로 나타낼 때, $n = 100$에서의 값은? (분수로 입력, 예: 100/101)",
                "answer": "100/101",
                "hints": [
                    "$\\dfrac{1}{k(k+1)} = \\dfrac{1}{k} - \\dfrac{1}{k+1}$로 부분분수 분해.",
                    "망원합: $\\left(1 - \\dfrac{1}{2}\\right) + \\left(\\dfrac{1}{2} - \\dfrac{1}{3}\\right) + \\cdots = 1 - \\dfrac{1}{n+1}$.",
                    "$n = 100$: $1 - \\dfrac{1}{101} = \\dfrac{100}{101} \\approx 0.99$."
                ],
                "explanation": "부분분수로 $\\dfrac{1}{k} - \\dfrac{1}{k+1}$ 형태를 만들면 망원합이 되어 $S_n = 1 - \\dfrac{1}{n+1} = \\dfrac{n}{n+1}$. $n = 100$이면 $\\dfrac{100}{101} \\approx 0.99$.",
                "wrongAnalysis": "부분분수 분해를 하지 않고 직접 100개 항을 더하려 하면 시간이 오래 걸립니다. 망원합 패턴을 인식하는 것이 핵심입니다."
            }
        ],
        "summary": {
            "keyPoints": [
                "시그마 표기법은 합의 간결한 표현이다.",
                "핵심 공식: $\\sum k = n(n+1)/2$, $\\sum k^2 = n(n+1)(2n+1)/6$.",
                "망원합: 중간 항 상쇄로 처음과 끝만 남는다.",
                "$n \\to \\infty$로 보내면 무한급수가 된다."
            ],
            "formulas": [
                "\\sum_{k=1}^{n} k = \\frac{n(n+1)}{2}",
                "\\sum_{k=1}^{n} k^2 = \\frac{n(n+1)(2n+1)}{6}",
                "\\sum_{k=1}^{n} (b_k - b_{k+1}) = b_1 - b_{n+1}"
            ],
            "commonMistakes": [
                "$\\sum k^2$과 $(\\sum k)^2$을 혼동하는 실수",
                "$\\sum_{k=1}^{n} 1 = n$이지 $1$이 아님을 잊는 실수"
            ],
            "nextConnection": "유한합에서 $n \\to \\infty$로 보내면 무한급수가 됩니다. 다음 레슨에서 등비급수와 망원급수를 통해 무한합이 유한한 값을 가질 수 있음을 봅니다."
        }
    },
    {
        "id": 45,
        "title": "등비급수와 망원급수",
        "category": "급수",
        "level": "기초",
        "question": "무한히 많은 수를 더하면 유한한 값이 될 수 있을까?",
        "concept": {
            "intro": "무한급수(infinite series) $\\displaystyle\\sum_{n=1}^{\\infty} a_n$은 부분합 $S_N = \\displaystyle\\sum_{n=1}^{N} a_n$의 극한으로 정의됩니다.\n$$\\sum_{n=1}^{\\infty} a_n = \\lim_{N \\to \\infty} S_N$$\n$S_N$이 수렴하면 급수가 수렴, 발산하면 급수도 발산합니다.\n\n**등비급수:** 이전 레슨의 등비수열 합 공식 $S_N = \\dfrac{a(1 - r^N)}{1 - r}$에서 $|r| < 1$이면 $r^N \\to 0$이므로:\n$$\\sum_{n=0}^{\\infty} ar^n = \\frac{a}{1-r} \\quad (|r| < 1)$$\n$|r| \\geq 1$이면 발산합니다. 이 공식은 급수 이론의 기둥입니다.\n\n**망원급수:** $\\sum_{n=1}^{\\infty} (b_n - b_{n+1})$에서 부분합 $S_N = b_1 - b_{N+1}$. $\\lim b_n$이 존재하면:\n$$\\sum_{n=1}^{\\infty} (b_n - b_{n+1}) = b_1 - \\lim_{n \\to \\infty} b_n$$\n\n**조화급수의 발산:** $\\sum_{n=1}^{\\infty} \\dfrac{1}{n}$은 $\\lim \\dfrac{1}{n} = 0$임에도 발산합니다. 항을 묶어서 각 묶음이 $\\dfrac{1}{2}$ 이상임을 보이면 됩니다: $\\dfrac{1}{3} + \\dfrac{1}{4} > \\dfrac{1}{4} + \\dfrac{1}{4} = \\dfrac{1}{2}$, $\\dfrac{1}{5} + \\cdots + \\dfrac{1}{8} > 4 \\times \\dfrac{1}{8} = \\dfrac{1}{2}$, …\n\n**발산 판정법:** $\\lim_{n \\to \\infty} a_n \\neq 0$이면 $\\sum a_n$은 반드시 발산합니다. 주의: 역은 성립하지 않습니다!",
            "intuition": "$1$미터 막대를 절반씩 잘라가며 이어 붙인다고 상상하세요. $1 + \\dfrac{1}{2} + \\dfrac{1}{4} + \\cdots$은 빈 공간이 $0$으로 줄어들면서 합은 $2$에 수렴합니다. 반면 조화급수는 매번 더하는 양이 너무 천천히 줄어들어서, 아무리 오래 더해도 합이 끝없이 커집니다.",
            "formula": "\\sum_{n=0}^{\\infty} ar^n = \\frac{a}{1-r},\\ |r|<1\n\\text{망원급수:}\\ \\sum (b_n - b_{n+1}) = b_1 - \\lim b_n\n\\text{발산 판정:}\\ \\lim a_n \\neq 0 \\Rightarrow \\sum a_n\\ \\text{발산}\n\\text{조화급수:}\\ \\sum \\frac{1}{n} = \\infty",
            "summary": "무한급수는 부분합의 극한이다. 등비급수는 $|r|<1$이면 $\\dfrac{a}{1-r}$로 수렴. 망원급수는 중간 항 상쇄. 조화급수는 $\\lim 1/n = 0$이지만 발산하는 중요한 반례."
        },
        "examples": [
            {
                "title": "부분분수를 이용한 망원급수",
                "problem": "$\\displaystyle\\sum_{n=1}^{\\infty} \\dfrac{1}{n(n+1)}$의 합을 구하시오.",
                "steps": [
                    "$\\dfrac{1}{n(n+1)} = \\dfrac{1}{n} - \\dfrac{1}{n+1}$ (부분분수 분해).",
                    "$S_N = \\left(1 - \\dfrac{1}{2}\\right) + \\left(\\dfrac{1}{2} - \\dfrac{1}{3}\\right) + \\cdots + \\left(\\dfrac{1}{N} - \\dfrac{1}{N+1}\\right)$.",
                    "중간 항이 모두 상쇄: $S_N = 1 - \\dfrac{1}{N+1}$.",
                    "$\\lim_{N \\to \\infty} S_N = 1$."
                ],
                "answer": "$1$",
                "lesson": "부분분수 분해로 일반항을 차이 형태로 바꾸면 망원급수가 됩니다."
            }
        ],
        "problems": [
            {
                "id": "45-1",
                "type": "number",
                "difficulty": 1,
                "question": "$\\displaystyle\\sum_{n=0}^{\\infty} \\left(\\dfrac{1}{2}\\right)^n$의 값은?",
                "answer": "2",
                "hints": [
                    "$a = 1$, $r = \\dfrac{1}{2}$인 등비급수.",
                    "$\\dfrac{a}{1-r} = \\dfrac{1}{1 - 1/2}$."
                ],
                "explanation": "$\\dfrac{1}{1/2} = 2$.",
                "wrongAnalysis": "$n = 1$부터 시작한다고 잘못 가정하면 첫째항 $1$을 빠뜨려 $1$이라고 답하는 실수가 생깁니다."
            },
            {
                "id": "45-2",
                "type": "choice",
                "difficulty": 2,
                "question": "다음 중 발산하는 급수는?",
                "choices": [
                    "$\\displaystyle\\sum \\dfrac{1}{2^n}$",
                    "$\\displaystyle\\sum \\dfrac{1}{n}$",
                    "$\\displaystyle\\sum \\dfrac{1}{n^2}$",
                    "$\\displaystyle\\sum \\dfrac{1}{n(n+1)}$"
                ],
                "answer": "$\\displaystyle\\sum \\dfrac{1}{n}$",
                "hints": [
                    "조화급수 $\\sum 1/n$은 발산합니다.",
                    "$\\sum 1/2^n$은 등비급수 ($|r| < 1$)로 수렴.",
                    "$\\sum 1/n(n+1)$은 망원급수로 합이 $1$."
                ],
                "explanation": "조화급수 $\\sum \\dfrac{1}{n}$은 $\\dfrac{1}{n} \\to 0$임에도 발산합니다. 나머지는 모두 수렴.",
                "wrongAnalysis": "'$\\dfrac{1}{n} \\to 0$이니까 수렴'이라고 착각하는 실수가 매우 흔합니다. 항이 $0$으로 가는 것은 수렴의 필요조건일 뿐 충분조건이 아닙니다."
            },
            {
                "id": "45-3",
                "type": "number",
                "difficulty": 3,
                "question": "$0.\\overline{9} = 0.999\\ldots$를 등비급수로 나타내어 정확한 값을 구하시오.",
                "answer": "1",
                "hints": [
                    "$0.999\\ldots = \\dfrac{9}{10} + \\dfrac{9}{100} + \\dfrac{9}{1000} + \\cdots$",
                    "공비 $\\dfrac{1}{10}$, 첫항 $\\dfrac{9}{10}$인 등비급수.",
                    "$\\dfrac{9/10}{1 - 1/10}$을 계산하세요."
                ],
                "explanation": "$\\dfrac{9/10}{9/10} = 1$. $0.999\\ldots$와 $1$은 수학적으로 정확히 같습니다.",
                "wrongAnalysis": "'$0.999\\ldots$와 $1$은 다르다'는 직관적 오해가 흔합니다. 등비급수 공식이 이를 명확히 증명합니다."
            }
        ],
        "summary": {
            "keyPoints": [
                "무한급수는 부분합 $S_N$의 극한으로 정의된다.",
                "등비급수: $|r|<1$이면 $\\dfrac{a}{1-r}$로 수렴.",
                "망원급수: 부분분수 분해 후 중간 항 상쇄.",
                "조화급수 $\\sum 1/n$은 발산하는 핵심 반례."
            ],
            "formulas": [
                "\\sum_{n=0}^{\\infty} ar^n = \\frac{a}{1-r}\\ (|r|<1)",
                "\\sum (b_n - b_{n+1}) = b_1 - \\lim b_n",
                "\\lim a_n \\neq 0 \\Rightarrow \\sum a_n\\ \\text{발산}"
            ],
            "commonMistakes": [
                "항이 $0$으로 수렴하면 급수도 수렴한다는 오해",
                "등비급수 시작 인덱스 $n=0$과 $n=1$ 혼동"
            ],
            "nextConnection": "등비급수와 망원급수처럼 합을 직접 구할 수 있는 급수는 드뭅니다. 다음 레슨에서 합을 구하지 않고도 수렴 여부를 판정하는 방법을 배웁니다."
        }
    },
    {
        "id": 46,
        "title": "급수의 수렴 판정법",
        "category": "급수",
        "level": "중급",
        "question": "합을 직접 구하지 않고, 급수가 수렴하는지 어떻게 판정할까?",
        "concept": {
            "intro": "대부분의 급수는 합을 직접 구할 수 없습니다. 이때 수렴 판정법을 사용합니다.\n\n**비교 판정법:** $0 \\leq a_n \\leq b_n$일 때 $\\sum b_n$ 수렴 $\\Rightarrow$ $\\sum a_n$ 수렴. $\\sum a_n$ 발산 $\\Rightarrow$ $\\sum b_n$ 발산.\n\n**극한 비교 판정법:** $a_n, b_n > 0$이고 $\\lim \\dfrac{a_n}{b_n} = c$ ($0 < c < \\infty$)이면 $\\sum a_n$과 $\\sum b_n$은 동시에 수렴/발산.\n\n**비율 판정법:** $L = \\lim \\left|\\dfrac{a_{n+1}}{a_n}\\right|$일 때: $L < 1$ 수렴, $L > 1$ 발산, $L = 1$ 판정 불능. 팩토리얼·지수 급수에서 강력.\n\n**거듭제곱근 판정법:** $L = \\lim \\sqrt[n]{|a_n|}$일 때: $L < 1$ 수렴, $L > 1$ 발산.\n\n**적분 판정법:** $f$가 $[1, \\infty)$에서 양, 연속, 감소이고 $a_n = f(n)$이면 $\\sum f(n)$과 $\\int_1^{\\infty} f(x)\\,dx$가 동시에 수렴/발산.\n\n**$p$-급수:** $\\sum \\dfrac{1}{n^p}$는 $p > 1$이면 수렴, $p \\leq 1$이면 발산.",
            "intuition": "수렴 판정법은 '저울질'에 비유됩니다. 우리가 잘 아는 급수(등비, $p$-급수)를 기준추로 삼아 비교합니다. 비율 판정법은 '등비급수와의 은밀한 비교'입니다. 연속 항의 비가 $L < 1$이면 공비 $L$인 등비급수보다 빠르게 줄어들어 수렴합니다.",
            "formula": "\\text{비교:}\\ 0 \\leq a_n \\leq b_n,\\ \\sum b_n \\text{ 수렴} \\Rightarrow \\sum a_n \\text{ 수렴}\n\\text{비율:}\\ L = \\lim \\left|\\frac{a_{n+1}}{a_n}\\right|;\\ L<1 \\text{ 수렴},\\ L>1 \\text{ 발산}\n\\text{적분:}\\ \\sum f(n) \\text{ 과 } \\int_1^{\\infty} f(x)\\,dx \\text{ 동시 수렴/발산}\np\\text{-급수:}\\ \\sum \\frac{1}{n^p}:\\ p > 1 \\text{ 수렴},\\ p \\leq 1 \\text{ 발산}",
            "summary": "비교 판정법은 크기 비교, 비율 판정법은 등비급수와 비교, 적분 판정법은 급수와 이상적분 연결, $p$-급수는 $p > 1$ 수렴이 핵심이다."
        },
        "examples": [
            {
                "title": "비율 판정법 적용",
                "problem": "$\\displaystyle\\sum_{n=1}^{\\infty} \\dfrac{n^2}{3^n}$의 수렴·발산을 판정하시오.",
                "steps": [
                    "$a_n = \\dfrac{n^2}{3^n}$으로 놓고 비율 판정법 적용.",
                    "$\\dfrac{a_{n+1}}{a_n} = \\dfrac{(n+1)^2}{3n^2}$.",
                    "$L = \\lim \\dfrac{(n+1)^2}{3n^2} = \\dfrac{1}{3} < 1$.",
                    "비율 판정법에 의해 수렴."
                ],
                "answer": "수렴 ($L = \\dfrac{1}{3} < 1$)",
                "lesson": "분모에 지수함수가 있으면 비율 판정법이 자연스럽습니다."
            }
        ],
        "problems": [
            {
                "id": "46-1",
                "type": "choice",
                "difficulty": 1,
                "question": "$\\displaystyle\\sum_{n=1}^{\\infty} \\dfrac{1}{n^3}$은 수렴하는가?",
                "choices": [
                    "수렴 ($p$-급수, $p = 3 > 1$)",
                    "발산",
                    "판정 불능",
                    "조건부수렴"
                ],
                "answer": "수렴 ($p$-급수, $p = 3 > 1$)",
                "hints": [
                    "$p$-급수 판정: $\\sum 1/n^p$는 $p > 1$이면 수렴.",
                    "$p = 3 > 1$."
                ],
                "explanation": "$p = 3 > 1$이므로 $p$-급수 판정에 의해 수렴.",
                "wrongAnalysis": "$p \\geq 1$이면 수렴이라 잘못 기억하면 $p = 1$(조화급수)도 수렴한다고 오판합니다."
            },
            {
                "id": "46-2",
                "type": "text",
                "difficulty": 2,
                "question": "$\\displaystyle\\sum_{n=1}^{\\infty} \\dfrac{n!}{5^n}$은 수렴하는가, 발산하는가? (수렴/발산)",
                "answer": "발산",
                "hints": [
                    "팩토리얼이 있으므로 비율 판정법 사용.",
                    "$\\dfrac{a_{n+1}}{a_n} = \\dfrac{n+1}{5}$.",
                    "$\\lim \\dfrac{n+1}{5} = \\infty > 1$."
                ],
                "explanation": "$L = \\infty > 1$이므로 발산. 팩토리얼은 지수함수보다 빠르게 증가합니다.",
                "wrongAnalysis": "'$5^n$이 빠르게 커지니까 수렴'이라 직관적으로 판단하는 실수가 있습니다. 팩토리얼이 지수함수를 압도합니다."
            },
            {
                "id": "46-3",
                "type": "text",
                "difficulty": 3,
                "question": "$\\displaystyle\\sum_{n=2}^{\\infty} \\dfrac{1}{n \\ln n}$은 수렴하는가, 발산하는가? (수렴/발산)",
                "answer": "발산",
                "hints": [
                    "적분 판정법: $\\int_2^{\\infty} \\dfrac{dx}{x \\ln x}$.",
                    "치환 $u = \\ln x$: $\\int \\dfrac{du}{u} = \\ln u$.",
                    "$\\ln(\\ln x)\\big|_2^{\\infty} = \\infty$."
                ],
                "explanation": "이상적분이 발산하므로 적분 판정법에 의해 급수도 발산.",
                "wrongAnalysis": "$\\dfrac{1}{n \\ln n} < \\dfrac{1}{n}$이고 $\\sum 1/n$이 발산하므로 비교 판정법으로 수렴한다는 오류. 큰 급수가 발산하면 작은 급수에 대해 결론을 내릴 수 없습니다."
            }
        ],
        "summary": {
            "keyPoints": [
                "비교 판정법: 알려진 급수와의 크기 비교.",
                "비율 판정법: 팩토리얼·지수 급수에서 효과적.",
                "적분 판정법: 급수와 이상적분을 직접 연결.",
                "$p$-급수: $p > 1$ 수렴, $p \\leq 1$ 발산."
            ],
            "formulas": [
                "L = \\lim \\left|\\frac{a_{n+1}}{a_n}\\right|;\\ L<1\\ \\text{수렴},\\ L>1\\ \\text{발산}",
                "\\sum \\frac{1}{n^p}:\\ p > 1\\ \\text{수렴}"
            ],
            "commonMistakes": [
                "비교 판정법에서 부등호 방향 혼동",
                "비율 판정법에서 $L = 1$을 수렴으로 판정"
            ],
            "nextConnection": "양의 급수에 초점을 맞추었지만, 부호가 교대하는 급수는 어떨까요? 다음 레슨에서 교대급수와 절대수렴을 배웁니다."
        }
    },
    {
        "id": 47,
        "title": "교대급수와 절대수렴",
        "category": "급수",
        "level": "중급",
        "question": "부호가 번갈아 바뀌는 급수의 수렴과, 절대수렴·조건부수렴의 차이는?",
        "concept": {
            "intro": "**교대급수 판정법 (라이프니츠 판정법):**\n$\\sum (-1)^n b_n$에서 $b_n > 0$, $b_{n+1} \\leq b_n$ (단조감소), $\\lim b_n = 0$이면 수렴.\n\n**절대수렴 vs 조건부수렴:**\n- 절대수렴: $\\sum |a_n|$ 수렴 $\\Rightarrow$ $\\sum a_n$ 수렴.\n- 조건부수렴: $\\sum a_n$ 수렴이지만 $\\sum |a_n|$ 발산.\n\n대표 예: $\\sum \\dfrac{(-1)^n}{n}$은 교대급수 판정법으로 수렴하지만, $\\sum \\dfrac{1}{n}$(조화급수)은 발산. 따라서 조건부수렴.\n\n**오차 한계:** 교대급수가 수렴할 때, $N$항까지 부분합의 오차는:\n$$|R_N| \\leq b_{N+1}$$\n다음 항의 크기가 오차의 상한. 근사 계산에 매우 유용.",
            "intuition": "교대급수의 부분합은 수직선 위에서 좌우로 진동하며 한 점에 수렴합니다. 진동 폭이 점점 줄어들면서 평형점으로 수렴하는 댐핑 진자와 같습니다.\n\n절대수렴은 '부호 무시하고 더해도 수렴'이므로 안정적. 조건부수렴은 양음의 절묘한 상쇄에 의존하여, 항의 순서를 바꾸면 합이 달라질 수 있습니다(리만 재배열 정리).",
            "formula": "\\text{교대급수:}\\ b_n > 0,\\ b_n \\searrow,\\ b_n \\to 0 \\Rightarrow \\sum (-1)^n b_n\\ \\text{수렴}\n|R_N| \\leq b_{N+1}\n\\sum |a_n|\\ \\text{수렴} \\Rightarrow \\sum a_n\\ \\text{절대수렴}\n\\sum a_n\\ \\text{수렴},\\ \\sum |a_n|\\ \\text{발산} \\Rightarrow \\text{조건부수렴}",
            "summary": "교대급수는 세 조건($b_n > 0$, 단조감소, $b_n \\to 0$)으로 수렴 판정. 절대수렴이 조건부수렴보다 강한 수렴. 오차 한계는 다음 항의 크기."
        },
        "examples": [
            {
                "title": "조건부수렴 판정",
                "problem": "$\\displaystyle\\sum_{n=1}^{\\infty} \\dfrac{(-1)^{n+1}}{\\sqrt{n}}$의 수렴 유형을 판정하시오.",
                "steps": [
                    "$b_n = \\dfrac{1}{\\sqrt{n}} > 0$, 단조감소, $\\lim b_n = 0$. 교대급수 판정법에 의해 수렴.",
                    "$\\sum \\dfrac{1}{\\sqrt{n}} = \\sum \\dfrac{1}{n^{1/2}}$: $p = 1/2 \\leq 1$이므로 발산.",
                    "$\\sum a_n$ 수렴, $\\sum |a_n|$ 발산 $\\Rightarrow$ 조건부수렴."
                ],
                "answer": "조건부수렴",
                "lesson": "교대급수에서 수렴을 확인한 뒤, 절대수렴 여부를 추가 확인하는 것이 정석입니다."
            }
        ],
        "problems": [
            {
                "id": "47-1",
                "type": "choice",
                "difficulty": 1,
                "question": "$\\displaystyle\\sum_{n=1}^{\\infty} \\dfrac{(-1)^n}{n^2}$의 수렴 유형은?",
                "choices": [
                    "절대수렴",
                    "조건부수렴",
                    "발산",
                    "판정 불능"
                ],
                "answer": "절대수렴",
                "hints": [
                    "$\\sum \\dfrac{1}{n^2}$은 $p = 2 > 1$인 $p$-급수로 수렴.",
                    "$\\sum |a_n|$ 수렴이면 절대수렴."
                ],
                "explanation": "$\\sum \\dfrac{1}{n^2}$은 $p$-급수($p = 2 > 1$)로 수렴. 따라서 절대수렴.",
                "wrongAnalysis": "교대급수니까 조건부수렴이라 반사적으로 답하는 경우가 있습니다. 항상 $\\sum |a_n|$을 먼저 확인하세요."
            },
            {
                "id": "47-2",
                "type": "number",
                "difficulty": 2,
                "question": "$\\displaystyle\\sum_{n=1}^{\\infty} \\dfrac{(-1)^{n+1}}{n}$의 처음 $4$항 부분합과 실제 합의 오차 한계는? (소수로 입력)",
                "answer": "0.2",
                "hints": [
                    "오차 한계: $|R_N| \\leq b_{N+1}$.",
                    "$N = 4$: $b_5 = \\dfrac{1}{5} = 0.2$."
                ],
                "explanation": "$|R_4| \\leq b_5 = \\dfrac{1}{5} = 0.2$. 이 급수의 합은 $\\ln 2 \\approx 0.693$.",
                "wrongAnalysis": "$b_4 = 1/4$를 오차 한계로 답하는 실수. 오차 한계는 $b_{N+1}$이지 $b_N$이 아닙니다."
            },
            {
                "id": "47-3",
                "type": "text",
                "difficulty": 3,
                "question": "$\\displaystyle\\sum_{n=1}^{\\infty} \\dfrac{(-1)^n \\cdot n}{2n+1}$은 수렴하는가, 발산하는가? (수렴/발산)",
                "answer": "발산",
                "hints": [
                    "발산 판정법을 먼저 확인: $\\lim |a_n| = ?$",
                    "$\\dfrac{n}{2n+1} \\to \\dfrac{1}{2} \\neq 0$.",
                    "$\\lim a_n \\neq 0$이면 발산."
                ],
                "explanation": "$\\lim \\dfrac{n}{2n+1} = \\dfrac{1}{2} \\neq 0$이므로 발산 판정법에 의해 발산.",
                "wrongAnalysis": "'부호가 교대하니까 수렴'이라 성급하게 판단하는 실수. $b_n \\to 0$ 조건을 반드시 확인하세요."
            }
        ],
        "summary": {
            "keyPoints": [
                "교대급수 판정법: $b_n > 0$, 단조감소, $b_n \\to 0$ 세 조건.",
                "절대수렴 $\\supset$ 조건부수렴.",
                "오차 한계 $|R_N| \\leq b_{N+1}$.",
                "발산 판정법을 가장 먼저 확인."
            ],
            "formulas": [
                "\\text{교대급수:}\\ b_n > 0,\\ b_n \\searrow,\\ b_n \\to 0 \\Rightarrow \\text{수렴}",
                "|R_N| \\leq b_{N+1}",
                "\\sum |a_n|\\ \\text{수렴} \\Rightarrow \\text{절대수렴}"
            ],
            "commonMistakes": [
                "교대급수라고 무조건 수렴이라 단정하는 실수",
                "절대수렴과 조건부수렴 미구분",
                "오차 한계에서 $b_N$과 $b_{N+1}$ 혼동"
            ],
            "nextConnection": "급수의 수렴 이론을 갖추었으니, 다음 레슨에서 함수를 멱급수로 전개하는 방법을 배웁니다."
        }
    }
];
