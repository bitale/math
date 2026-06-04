"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seriesCalcLessons = void 0;
exports.seriesCalcLessons = [
    {
        "id": 13,
        "title": "유한합과 시그마 표기법",
        "category": "급수",
        "level": "기초",
        "question": "여러 항의 합을 간결하게 표기하고 계산하는 방법은?",
        "concept": {
            "intro": ":::definition[시그마 표기법]\n시그마 표기법(sigma notation)은 합을 간결하게 나타내는 도구입니다. $\\displaystyle\\sum_{k=1}^{n} a_k$는 '$k$가 $1$부터 $n$까지 변할 때 $a_k$를 모두 더하라'는 뜻입니다. 즉,\n$$\\sum_{k=1}^{n} a_k = a_1 + a_2 + a_3 + \\cdots + a_n$$\n:::\n\n:::note[시그마의 핵심 성질]\n- 상수배: $\\sum_{k=1}^{n} c \\cdot a_k = c \\sum_{k=1}^{n} a_k$\n- 합의 분리: $\\sum_{k=1}^{n} (a_k + b_k) = \\sum_{k=1}^{n} a_k + \\sum_{k=1}^{n} b_k$\n- 구간 분할: $\\sum_{k=1}^{n} a_k = \\sum_{k=1}^{m} a_k + \\sum_{k=m+1}^{n} a_k$\n:::\n\n:::theorem[핵심 합 공식]\n$$\\sum_{k=1}^{n} k = \\frac{n(n+1)}{2}$$\n$$\\sum_{k=1}^{n} k^2 = \\frac{n(n+1)(2n+1)}{6}$$\n$$\\sum_{k=1}^{n} k^3 = \\left[\\frac{n(n+1)}{2}\\right]^2$$\n:::\n\n:::definition[망원합 (telescoping sum)]\n$\\sum_{k=1}^{n} (b_k - b_{k+1}) = b_1 - b_{n+1}$. 중간 항이 모두 상쇄되어 처음과 끝만 남습니다. 부분분수 분해를 이용하면 복잡한 합도 망원합으로 변환할 수 있습니다.\n:::\n\n:::note[급수와의 연결]\n유한합 $S_n = \\sum_{k=1}^{n} a_k$에서 $n \\to \\infty$로 보내면 무한급수 $\\sum_{k=1}^{\\infty} a_k = \\lim_{n \\to \\infty} S_n$이 됩니다. 유한합 공식은 급수 이론의 출발점입니다.\n:::",
            "intuition": "시그마 기호 $\\Sigma$는 '더하라(Sum)'는 뜻의 그리스 문자 S입니다. 일일이 나열하기 힘든 긴 합을 한 줄로 압축하는 약속이죠. 마치 '...'을 수학적으로 엄밀하게 쓴 것입니다.\n\n망원합은 망원경처럼 접었다 펴는 것에 비유됩니다. 길게 펼치면 수십 개의 항이지만, 접으면 처음과 끝 두 개만 남습니다.",
            "formula": "\\sum_{k=1}^{n} a_k = a_1 + a_2 + \\cdots + a_n\n\\sum_{k=1}^{n} k = \\frac{n(n+1)}{2}\n\\sum_{k=1}^{n} k^2 = \\frac{n(n+1)(2n+1)}{6}\n\\text{망원합:}\\ \\sum_{k=1}^{n} (b_k - b_{k+1}) = b_1 - b_{n+1}",
            "summary": "시그마 표기법은 합의 간결한 표현이며, 상수배·합 분리 등의 성질을 가진다. 핵심 공식 $\\sum k$, $\\sum k^2$ 등을 활용하고, 망원합으로 상쇄 패턴을 이용한다. $n \\to \\infty$로 확장하면 무한급수가 된다."
        },
        "examples": [
            {
                "title": "[기본] 시그마 합 계산",
                "problem": "$\\displaystyle\\sum_{k=1}^{20} k$의 값을 구하시오.",
                "steps": [
                    "$\\sum_{k=1}^{n} k = \\dfrac{n(n+1)}{2}$ 공식을 사용한다.",
                    "$n = 20$을 대입: $\\dfrac{20 \\times 21}{2} = \\dfrac{420}{2} = 210$."
                ],
                "answer": "$210$",
                "lesson": "$1$부터 $n$까지의 합은 $\\dfrac{n(n+1)}{2}$입니다. 가우스가 발견한 이 공식은 시그마 표기법의 가장 기본적인 응용입니다."
            },
            {
                "title": "[기본] 시그마 선형성 활용",
                "problem": "$\\displaystyle\\sum_{k=1}^{10} (3k + 2)$ 의 값을 구하시오.",
                "steps": [
                    "선형성: $\\sum (3k+2) = 3\\sum k + \\sum 2 = 3\\sum_{k=1}^{10} k + 2 \\cdot 10$.",
                    "$\\sum_{k=1}^{10} k = \\dfrac{10 \\times 11}{2} = 55$.",
                    "$3 \\times 55 + 20 = 165 + 20 = 185$."
                ],
                "answer": "$185$",
                "lesson": "시그마의 선형성(상수배, 합 분리)을 이용하면 복잡한 합을 기본 공식의 조합으로 분해할 수 있습니다."
            },
            {
                "title": "[응용] 제곱합 공식 활용",
                "problem": "$\\displaystyle\\sum_{k=1}^{10} k^2$ 의 값을 구하시오.",
                "steps": [
                    "$\\sum_{k=1}^{n} k^2 = \\dfrac{n(n+1)(2n+1)}{6}$ 공식을 사용한다.",
                    "$n = 10$: $\\dfrac{10 \\times 11 \\times 21}{6} = \\dfrac{2310}{6} = 385$."
                ],
                "answer": "$385$",
                "lesson": "$\\sum k^2$ 공식의 핵심은 세 인수 $n$, $n+1$, $2n+1$ 의 곱을 $6$ 으로 나누는 것입니다. 직접 더해서 검산하는 습관을 기르세요."
            },
            {
                "title": "[응용] 망원합으로 분수 합 계산",
                "problem": "$\\displaystyle\\sum_{k=1}^{50} \\left(\\frac{1}{k} - \\frac{1}{k+1}\\right)$ 의 값을 구하시오.",
                "steps": [
                    "이것은 망원합이다. 중간 항이 모두 상쇄된다.",
                    "$S = \\left(1 - \\dfrac{1}{2}\\right) + \\left(\\dfrac{1}{2} - \\dfrac{1}{3}\\right) + \\cdots + \\left(\\dfrac{1}{50} - \\dfrac{1}{51}\\right)$.",
                    "남는 것: $1 - \\dfrac{1}{51} = \\dfrac{50}{51}$."
                ],
                "answer": "$\\dfrac{50}{51}$",
                "lesson": "망원합에서는 처음과 끝만 남습니다. $\\sum (b_k - b_{k+1}) = b_1 - b_{n+1}$ 공식을 바로 적용하면 $50$개 항을 일일이 더하지 않아도 됩니다."
            },
            {
                "title": "[심화] 시그마의 인덱스 변환",
                "problem": "$\\displaystyle\\sum_{k=3}^{7} k^2$ 을 $\\displaystyle\\sum_{j=1}^{5}$ 형태로 변환하고 계산하시오.",
                "steps": [
                    "$k = j + 2$ 로 치환하면 $k = 3 \\to j = 1$, $k = 7 \\to j = 5$.",
                    "$\\displaystyle\\sum_{j=1}^{5} (j+2)^2 = \\sum_{j=1}^{5} (j^2 + 4j + 4)$.",
                    "$= \\sum j^2 + 4\\sum j + \\sum 4 = 55 + 4 \\times 15 + 20 = 55 + 60 + 20 = 135$.",
                    "검산: $9 + 16 + 25 + 36 + 49 = 135$. 올바르다."
                ],
                "answer": "$135$",
                "lesson": "시그마의 시작 인덱스가 $1$ 이 아닐 때는 인덱스 치환으로 표준 형태로 바꾸거나, $\\sum_{k=1}^{b} - \\sum_{k=1}^{a-1}$ 로 분할하여 계산합니다."
            }
        ],
        "problems": [
            {
                "id": "13-1",
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
                "id": "13-2",
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
                "id": "13-3",
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
            },
            {
                "id": "13-4",
                "type": "choice",
                "difficulty": 1,
                "question": "$\\displaystyle\\sum_{k=1}^{n} 1$ 의 값은?",
                "choices": [
                    "$1$",
                    "$n$",
                    "$n + 1$",
                    "$0$"
                ],
                "answer": "$n$",
                "hints": [
                    "$1$ 이 $n$ 번 더해집니다.",
                    "$\\underbrace{1 + 1 + \\cdots + 1}_{n\\text{개}} = n$."
                ],
                "explanation": "$\\sum_{k=1}^{n} 1 = \\underbrace{1 + 1 + \\cdots + 1}_{n\\text{개}} = n$.",
                "wrongAnalysis": "$\\sum_{k=1}^{n} 1 = 1$ 로 답하는 실수가 매우 흔합니다. 시그마는 $k=1$부터 $k=n$까지 반복이므로, 상수 $1$ 이 $n$ 번 더해집니다."
            },
            {
                "id": "13-5",
                "type": "number",
                "difficulty": 2,
                "question": "$\\displaystyle\\sum_{k=1}^{4} k^3$ 의 값은?",
                "answer": "100",
                "hints": [
                    "공식: $\\sum_{k=1}^{n} k^3 = \\left[\\dfrac{n(n+1)}{2}\\right]^2$.",
                    "$n = 4$: $\\left[\\dfrac{4 \\times 5}{2}\\right]^2 = 10^2$."
                ],
                "explanation": "$\\sum_{k=1}^{4} k^3 = \\left[\\dfrac{4 \\times 5}{2}\\right]^2 = 10^2 = 100$. 직접 확인: $1 + 8 + 27 + 64 = 100$.",
                "wrongAnalysis": "$\\sum k^3 = (\\sum k)^3$ 으로 착각하면 $10^3 = 1000$ 이라는 오답이 나옵니다. 세제곱의 합은 합의 제곱이지, 합의 세제곱이 아닙니다."
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
        "id": 14,
        "title": "등비급수와 망원급수",
        "category": "급수",
        "level": "기초",
        "question": "무한히 많은 수를 더하면 유한한 값이 될 수 있을까?",
        "concept": {
            "intro": ":::definition[무한급수]\n무한급수(infinite series) $\\displaystyle\\sum_{n=1}^{\\infty} a_n$은 부분합 $S_N = \\displaystyle\\sum_{n=1}^{N} a_n$의 극한으로 정의됩니다.\n$$\\sum_{n=1}^{\\infty} a_n = \\lim_{N \\to \\infty} S_N$$\n$S_N$이 수렴하면 급수가 수렴, 발산하면 급수도 발산합니다.\n:::\n\n:::theorem[등비급수]\n이전 레슨의 등비수열 합 공식 $S_N = \\dfrac{a(1 - r^N)}{1 - r}$에서 $|r| < 1$이면 $r^N \\to 0$이므로:\n$$\\sum_{n=0}^{\\infty} ar^n = \\frac{a}{1-r} \\quad (|r| < 1)$$\n$|r| \\geq 1$이면 발산합니다. 이 공식은 급수 이론의 기둥입니다.\n:::\n\n:::theorem[망원급수]\n$\\sum_{n=1}^{\\infty} (b_n - b_{n+1})$에서 부분합 $S_N = b_1 - b_{N+1}$. $\\lim b_n$이 존재하면:\n$$\\sum_{n=1}^{\\infty} (b_n - b_{n+1}) = b_1 - \\lim_{n \\to \\infty} b_n$$\n:::\n\n:::warning[조화급수의 발산]\n$\\sum_{n=1}^{\\infty} \\dfrac{1}{n}$은 $\\lim \\dfrac{1}{n} = 0$임에도 발산합니다. 항을 묶어서 각 묶음이 $\\dfrac{1}{2}$ 이상임을 보이면 됩니다: $\\dfrac{1}{3} + \\dfrac{1}{4} > \\dfrac{1}{4} + \\dfrac{1}{4} = \\dfrac{1}{2}$, $\\dfrac{1}{5} + \\cdots + \\dfrac{1}{8} > 4 \\times \\dfrac{1}{8} = \\dfrac{1}{2}$, ...\n:::\n\n:::theorem[발산 판정법]\n$\\lim_{n \\to \\infty} a_n \\neq 0$이면 $\\sum a_n$은 반드시 발산합니다.\n:::\n\n:::warning[주의]\n발산 판정법의 역은 성립하지 않습니다! $a_n \\to 0$ 이어도 급수가 발산할 수 있습니다 (조화급수가 대표적 반례).\n:::",
            "intuition": "$1$미터 막대를 절반씩 잘라가며 이어 붙인다고 상상하세요. $1 + \\dfrac{1}{2} + \\dfrac{1}{4} + \\cdots$은 빈 공간이 $0$으로 줄어들면서 합은 $2$에 수렴합니다. 반면 조화급수는 매번 더하는 양이 너무 천천히 줄어들어서, 아무리 오래 더해도 합이 끝없이 커집니다.",
            "formula": "\\sum_{n=0}^{\\infty} ar^n = \\frac{a}{1-r},\\ |r|<1\n\\text{망원급수:}\\ \\sum (b_n - b_{n+1}) = b_1 - \\lim b_n\n\\text{발산 판정:}\\ \\lim a_n \\neq 0 \\Rightarrow \\sum a_n\\ \\text{발산}\n\\text{조화급수:}\\ \\sum \\frac{1}{n} = \\infty",
            "summary": "무한급수는 부분합의 극한이다. 등비급수는 $|r|<1$이면 $\\dfrac{a}{1-r}$로 수렴. 망원급수는 중간 항 상쇄. 조화급수는 $\\lim 1/n = 0$이지만 발산하는 중요한 반례."
        },
        "examples": [
            {
                "title": "[기본] 부분분수를 이용한 망원급수",
                "problem": "$\\displaystyle\\sum_{n=1}^{\\infty} \\dfrac{1}{n(n+1)}$의 합을 구하시오.",
                "steps": [
                    "$\\dfrac{1}{n(n+1)} = \\dfrac{1}{n} - \\dfrac{1}{n+1}$ (부분분수 분해).",
                    "$S_N = \\left(1 - \\dfrac{1}{2}\\right) + \\left(\\dfrac{1}{2} - \\dfrac{1}{3}\\right) + \\cdots + \\left(\\dfrac{1}{N} - \\dfrac{1}{N+1}\\right)$.",
                    "중간 항이 모두 상쇄: $S_N = 1 - \\dfrac{1}{N+1}$.",
                    "$\\lim_{N \\to \\infty} S_N = 1$."
                ],
                "answer": "$1$",
                "lesson": "부분분수 분해로 일반항을 차이 형태로 바꾸면 망원급수가 됩니다."
            },
            {
                "title": "[기본] 등비급수의 합",
                "problem": "$\\displaystyle\\sum_{n=0}^{\\infty} \\left(\\dfrac{1}{3}\\right)^n$ 의 합을 구하시오.",
                "steps": [
                    "$a = 1$, $r = \\dfrac{1}{3}$. $|r| = \\dfrac{1}{3} < 1$ 이므로 수렴한다.",
                    "$\\dfrac{a}{1-r} = \\dfrac{1}{1-1/3} = \\dfrac{1}{2/3} = \\dfrac{3}{2}$."
                ],
                "answer": "$\\dfrac{3}{2}$",
                "lesson": "등비급수 $\\sum ar^n$ 은 $|r| < 1$ 일 때 $\\dfrac{a}{1-r}$ 로 수렴합니다. 이 공식 하나면 무한히 많은 등비급수를 즉시 계산할 수 있습니다."
            },
            {
                "title": "[응용] 순환소수를 등비급수로 표현",
                "problem": "$0.\\overline{36} = 0.363636\\ldots$ 을 분수로 나타내시오.",
                "steps": [
                    "$0.363636\\ldots = \\dfrac{36}{100} + \\dfrac{36}{10000} + \\dfrac{36}{1000000} + \\cdots$",
                    "첫 항 $a = \\dfrac{36}{100}$, 공비 $r = \\dfrac{1}{100}$.",
                    "$\\dfrac{a}{1-r} = \\dfrac{36/100}{1 - 1/100} = \\dfrac{36/100}{99/100} = \\dfrac{36}{99} = \\dfrac{4}{11}$."
                ],
                "answer": "$\\dfrac{4}{11}$",
                "lesson": "모든 순환소수는 등비급수로 표현되므로 유리수임이 보장됩니다. 등비급수 공식은 순환소수를 분수로 바꾸는 가장 체계적인 방법입니다."
            },
            {
                "title": "[응용] $n = 1$ 부터 시작하는 등비급수",
                "problem": "$\\displaystyle\\sum_{n=1}^{\\infty} \\dfrac{2}{5^n}$ 의 합을 구하시오.",
                "steps": [
                    "$n = 1$ 부터 시작하므로 첫 항 $a = \\dfrac{2}{5}$, 공비 $r = \\dfrac{1}{5}$.",
                    "$\\dfrac{a}{1-r} = \\dfrac{2/5}{1-1/5} = \\dfrac{2/5}{4/5} = \\dfrac{2}{4} = \\dfrac{1}{2}$.",
                    "또는: $\\sum_{n=1}^{\\infty} \\dfrac{2}{5^n} = 2\\sum_{n=1}^{\\infty} \\left(\\dfrac{1}{5}\\right)^n = 2 \\cdot \\dfrac{1/5}{4/5} = \\dfrac{1}{2}$."
                ],
                "answer": "$\\dfrac{1}{2}$",
                "lesson": "$n = 0$ 부터와 $n = 1$ 부터의 차이에 주의하세요. $\\sum_{n=1}^{\\infty} ar^n = \\dfrac{ar}{1-r}$ 입니다."
            },
            {
                "title": "[심화] 발산 판정법과 조화급수",
                "problem": "$\\displaystyle\\sum_{n=1}^{\\infty} \\dfrac{1}{n}$ 이 발산함을 보이시오.",
                "steps": [
                    "항을 묶어서 각 묶음의 합이 $\\dfrac{1}{2}$ 이상임을 보인다.",
                    "$\\dfrac{1}{1} \\geq \\dfrac{1}{2}$.",
                    "$\\dfrac{1}{2} \\geq \\dfrac{1}{2}$.",
                    "$\\dfrac{1}{3} + \\dfrac{1}{4} > \\dfrac{1}{4} + \\dfrac{1}{4} = \\dfrac{1}{2}$.",
                    "$\\dfrac{1}{5} + \\dfrac{1}{6} + \\dfrac{1}{7} + \\dfrac{1}{8} > 4 \\times \\dfrac{1}{8} = \\dfrac{1}{2}$.",
                    "이 패턴이 무한히 반복되므로 부분합이 $\\dfrac{1}{2}$ 씩 계속 증가하여 $\\infty$."
                ],
                "answer": "발산 ($S_N \\to \\infty$)",
                "lesson": "조화급수는 '$a_n \\to 0$ 이지만 발산하는' 가장 중요한 반례입니다. 항이 $0$ 으로 수렴하는 것은 급수 수렴의 필요조건이지 충분조건이 아닙니다."
            }
        ],
        "problems": [
            {
                "id": "14-1",
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
                "id": "14-2",
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
                "id": "14-3",
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
            },
            {
                "id": "14-4",
                "type": "number",
                "difficulty": 1,
                "question": "$\\displaystyle\\sum_{n=0}^{\\infty} \\left(\\dfrac{1}{3}\\right)^n$ 의 값은? (분수로 입력, 예: 3/2)",
                "answer": "3/2",
                "hints": [
                    "등비급수 공식: $\\dfrac{a}{1-r}$.",
                    "$a = 1$, $r = \\dfrac{1}{3}$."
                ],
                "explanation": "$\\dfrac{1}{1 - 1/3} = \\dfrac{1}{2/3} = \\dfrac{3}{2}$.",
                "wrongAnalysis": "$r = \\dfrac{1}{3}$ 을 대입할 때 $1 - r = \\dfrac{2}{3}$ 의 역수를 구하는 과정에서 실수하여 $3$ 으로 답하는 경우가 있습니다."
            },
            {
                "id": "14-5",
                "type": "choice",
                "difficulty": 2,
                "question": "$\\displaystyle\\sum_{n=1}^{\\infty} \\left(\\dfrac{1}{2^n} + \\dfrac{1}{3^n}\\right)$ 의 값은?",
                "choices": [
                    "$\\dfrac{3}{2}$",
                    "$\\dfrac{5}{6}$",
                    "$\\dfrac{7}{6}$",
                    "$\\dfrac{3}{2} + \\dfrac{1}{2}$"
                ],
                "answer": "$\\dfrac{3}{2}$",
                "hints": [
                    "급수의 합은 분리할 수 있습니다: $\\sum \\dfrac{1}{2^n} + \\sum \\dfrac{1}{3^n}$.",
                    "$\\sum_{n=1}^{\\infty} \\dfrac{1}{2^n} = \\dfrac{1/2}{1-1/2} = 1$, $\\sum_{n=1}^{\\infty} \\dfrac{1}{3^n} = \\dfrac{1/3}{1-1/3} = \\dfrac{1}{2}$."
                ],
                "explanation": "$\\sum_{n=1}^{\\infty} \\dfrac{1}{2^n} = 1$, $\\sum_{n=1}^{\\infty} \\dfrac{1}{3^n} = \\dfrac{1}{2}$. 합은 $1 + \\dfrac{1}{2} = \\dfrac{3}{2}$.",
                "wrongAnalysis": "$n = 0$ 부터 시작하는 등비급수 공식을 그대로 사용하여 첫 항 계산을 실수하는 경우가 있습니다. $n = 1$ 부터 시작하면 첫 항이 $r$ 이지 $1$ 이 아닙니다."
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
        "id": 15,
        "title": "급수의 수렴 판정법",
        "category": "급수",
        "level": "중급",
        "question": "합을 직접 구하지 않고, 급수가 수렴하는지 어떻게 판정할까?",
        "concept": {
            "intro": "대부분의 급수는 합을 직접 구할 수 없습니다. 이때 수렴 판정법을 사용합니다.\n\n:::theorem[비교 판정법]\n$0 \\leq a_n \\leq b_n$일 때 $\\sum b_n$ 수렴 $\\Rightarrow$ $\\sum a_n$ 수렴. $\\sum a_n$ 발산 $\\Rightarrow$ $\\sum b_n$ 발산.\n:::\n\n:::theorem[극한 비교 판정법]\n$a_n, b_n > 0$이고 $\\lim \\dfrac{a_n}{b_n} = c$ ($0 < c < \\infty$)이면 $\\sum a_n$과 $\\sum b_n$은 동시에 수렴/발산.\n:::\n\n:::theorem[비율 판정법]\n$L = \\lim \\left|\\dfrac{a_{n+1}}{a_n}\\right|$일 때: $L < 1$ 수렴, $L > 1$ 발산, $L = 1$ 판정 불능. 팩토리얼·지수 급수에서 강력.\n:::\n\n:::theorem[거듭제곱근 판정법]\n$L = \\lim \\sqrt[n]{|a_n|}$일 때: $L < 1$ 수렴, $L > 1$ 발산.\n:::\n\n:::theorem[적분 판정법]\n$f$가 $[1, \\infty)$에서 양, 연속, 감소이고 $a_n = f(n)$이면 $\\sum f(n)$과 $\\int_1^{\\infty} f(x)\\,dx$가 동시에 수렴/발산.\n:::\n\n:::theorem[$p$-급수]\n$\\sum \\dfrac{1}{n^p}$는 $p > 1$이면 수렴, $p \\leq 1$이면 발산.\n:::",
            "intuition": "수렴 판정법은 '저울질'에 비유됩니다. 우리가 잘 아는 급수(등비, $p$-급수)를 기준추로 삼아 비교합니다. 비율 판정법은 '등비급수와의 은밀한 비교'입니다. 연속 항의 비가 $L < 1$이면 공비 $L$인 등비급수보다 빠르게 줄어들어 수렴합니다.",
            "formula": "\\text{비교:}\\ 0 \\leq a_n \\leq b_n,\\ \\sum b_n \\text{ 수렴} \\Rightarrow \\sum a_n \\text{ 수렴}\n\\text{비율:}\\ L = \\lim \\left|\\frac{a_{n+1}}{a_n}\\right|;\\ L<1 \\text{ 수렴},\\ L>1 \\text{ 발산}\n\\text{적분:}\\ \\sum f(n) \\text{ 과 } \\int_1^{\\infty} f(x)\\,dx \\text{ 동시 수렴/발산}\np\\text{-급수:}\\ \\sum \\frac{1}{n^p}:\\ p > 1 \\text{ 수렴},\\ p \\leq 1 \\text{ 발산}",
            "summary": "비교 판정법은 크기 비교, 비율 판정법은 등비급수와 비교, 적분 판정법은 급수와 이상적분 연결, $p$-급수는 $p > 1$ 수렴이 핵심이다."
        },
        "examples": [
            {
                "title": "[기본] 비율 판정법 적용",
                "problem": "$\\displaystyle\\sum_{n=1}^{\\infty} \\dfrac{n^2}{3^n}$의 수렴·발산을 판정하시오.",
                "steps": [
                    "$a_n = \\dfrac{n^2}{3^n}$으로 놓고 비율 판정법 적용.",
                    "$\\dfrac{a_{n+1}}{a_n} = \\dfrac{(n+1)^2}{3n^2}$.",
                    "$L = \\lim \\dfrac{(n+1)^2}{3n^2} = \\dfrac{1}{3} < 1$.",
                    "비율 판정법에 의해 수렴."
                ],
                "answer": "수렴 ($L = \\dfrac{1}{3} < 1$)",
                "lesson": "분모에 지수함수가 있으면 비율 판정법이 자연스럽습니다."
            },
            {
                "title": "[기본] $p$-급수 판정",
                "problem": "$\\displaystyle\\sum_{n=1}^{\\infty} \\dfrac{1}{n^{3/2}}$ 은 수렴하는가?",
                "steps": [
                    "이것은 $p$-급수 $\\sum \\dfrac{1}{n^p}$ 에서 $p = \\dfrac{3}{2}$ 이다.",
                    "$p = \\dfrac{3}{2} > 1$ 이므로 수렴한다."
                ],
                "answer": "수렴 ($p = 3/2 > 1$)",
                "lesson": "$p$-급수 판정은 가장 빠른 첫 번째 도구입니다. $p > 1$ 수렴, $p \\leq 1$ 발산. 이 한 줄만 기억하세요."
            },
            {
                "title": "[응용] 팩토리얼이 포함된 급수 — 비율 판정법",
                "problem": "$\\displaystyle\\sum_{n=0}^{\\infty} \\dfrac{n!}{10^n}$ 의 수렴·발산을 판정하시오.",
                "steps": [
                    "$\\dfrac{a_{n+1}}{a_n} = \\dfrac{(n+1)!}{10^{n+1}} \\cdot \\dfrac{10^n}{n!} = \\dfrac{n+1}{10}$.",
                    "$L = \\lim_{n \\to \\infty} \\dfrac{n+1}{10} = \\infty > 1$.",
                    "비율 판정법에 의해 발산한다."
                ],
                "answer": "발산 ($L = \\infty$)",
                "lesson": "팩토리얼 $n!$ 은 어떤 지수함수 $a^n$ 보다 빠르게 증가합니다. $n!$ 이 분자에 있으면 대부분 발산합니다."
            },
            {
                "title": "[응용] 극한 비교 판정법",
                "problem": "$\\displaystyle\\sum_{n=1}^{\\infty} \\dfrac{1}{n^2 + 3n}$ 의 수렴·발산을 판정하시오.",
                "steps": [
                    "$n$ 이 크면 $n^2 + 3n \\approx n^2$ 이므로 $\\dfrac{1}{n^2}$ 와 비교한다.",
                    "$\\lim_{n \\to \\infty} \\dfrac{1/(n^2+3n)}{1/n^2} = \\lim \\dfrac{n^2}{n^2+3n} = \\lim \\dfrac{1}{1+3/n} = 1$.",
                    "$0 < 1 < \\infty$ 이므로 극한 비교 판정법에 의해 두 급수는 동시에 수렴/발산한다.",
                    "$\\sum 1/n^2$ 는 수렴($p = 2 > 1$)이므로 원래 급수도 수렴한다."
                ],
                "answer": "수렴",
                "lesson": "극한 비교 판정법은 '대략적으로 비슷한 크기의 급수'와 비교할 때 유용합니다. 비의 극한이 양의 유한값이면 두 급수의 운명이 같습니다."
            },
            {
                "title": "[심화] 적분 판정법으로 $p$-급수 기준 확인",
                "problem": "$\\displaystyle\\sum_{n=2}^{\\infty} \\dfrac{1}{n(\\ln n)^2}$ 의 수렴·발산을 적분판정법으로 판정하시오.",
                "steps": [
                    "$f(x) = \\dfrac{1}{x(\\ln x)^2}$ 는 $[2, \\infty)$ 에서 양, 연속, 감소이다.",
                    "$\\displaystyle\\int_2^{\\infty} \\dfrac{dx}{x(\\ln x)^2}$. $u = \\ln x$, $du = dx/x$ 로 치환.",
                    "$\\displaystyle\\int_{\\ln 2}^{\\infty} \\dfrac{du}{u^2} = \\left[-\\dfrac{1}{u}\\right]_{\\ln 2}^{\\infty} = 0 + \\dfrac{1}{\\ln 2}$ (수렴).",
                    "적분판정법에 의해 급수도 수렴한다."
                ],
                "answer": "수렴",
                "lesson": "적분판정법은 비교 대상이 마땅하지 않을 때 이상적분으로 직접 판정하는 도구입니다. 치환적분 기술이 함께 필요합니다."
            }
        ],
        "problems": [
            {
                "id": "15-1",
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
                "id": "15-2",
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
                "id": "15-3",
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
            },
            {
                "id": "15-4",
                "type": "choice",
                "difficulty": 1,
                "question": "$\\displaystyle\\sum_{n=1}^{\\infty} \\dfrac{1}{n^{1/2}}$ 은 수렴하는가?",
                "choices": [
                    "수렴 ($p$-급수, $p = 1/2 > 0$)",
                    "발산 ($p$-급수, $p = 1/2 \\leq 1$)",
                    "판정 불능",
                    "수렴 (비교 판정법)"
                ],
                "answer": "발산 ($p$-급수, $p = 1/2 \\leq 1$)",
                "hints": [
                    "$p$-급수 판정: $\\sum \\dfrac{1}{n^p}$ 는 $p > 1$ 일 때만 수렴.",
                    "$p = \\dfrac{1}{2} < 1$."
                ],
                "explanation": "$p = \\dfrac{1}{2} \\leq 1$ 이므로 $p$-급수 판정에 의해 발산합니다.",
                "wrongAnalysis": "$p > 0$ 이면 수렴한다고 잘못 기억하는 실수가 흔합니다. 기준은 $p > 1$ 입니다."
            },
            {
                "id": "15-5",
                "type": "text",
                "difficulty": 2,
                "question": "$\\displaystyle\\sum_{n=0}^{\\infty} \\dfrac{3^n}{n!}$ 은 수렴하는가, 발산하는가? (수렴/발산)",
                "answer": "수렴",
                "hints": [
                    "비율 판정법: $\\dfrac{a_{n+1}}{a_n} = \\dfrac{3^{n+1}}{(n+1)!} \\cdot \\dfrac{n!}{3^n} = \\dfrac{3}{n+1}$.",
                    "$\\lim_{n \\to \\infty} \\dfrac{3}{n+1} = 0 < 1$."
                ],
                "explanation": "$L = \\lim \\dfrac{3}{n+1} = 0 < 1$ 이므로 비율 판정법에 의해 수렴합니다. 이 급수의 합은 $e^3$ 입니다.",
                "wrongAnalysis": "$3^n$ 이 빠르게 증가하므로 발산한다고 직관적으로 판단하는 실수가 있습니다. $n!$ 은 $3^n$ 보다 훨씬 빠르게 증가합니다."
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
        "id": 16,
        "title": "교대급수와 절대수렴",
        "category": "급수",
        "level": "중급",
        "question": "부호가 번갈아 바뀌는 급수의 수렴과, 절대수렴·조건부수렴의 차이는?",
        "concept": {
            "intro": ":::theorem[교대급수 판정법 (라이프니츠 판정법)]\n$\\sum (-1)^n b_n$에서 $b_n > 0$, $b_{n+1} \\leq b_n$ (단조감소), $\\lim b_n = 0$이면 수렴.\n:::\n\n:::definition[절대수렴 vs 조건부수렴]\n- **절대수렴:** $\\sum |a_n|$ 수렴 $\\Rightarrow$ $\\sum a_n$ 수렴.\n- **조건부수렴:** $\\sum a_n$ 수렴이지만 $\\sum |a_n|$ 발산.\n\n대표 예: $\\sum \\dfrac{(-1)^n}{n}$은 교대급수 판정법으로 수렴하지만, $\\sum \\dfrac{1}{n}$(조화급수)은 발산. 따라서 조건부수렴.\n:::\n\n:::theorem[교대급수의 오차 한계]\n교대급수가 수렴할 때, $N$항까지 부분합의 오차는:\n$$|R_N| \\leq b_{N+1}$$\n다음 항의 크기가 오차의 상한입니다. 근사 계산에 매우 유용합니다.\n:::",
            "intuition": "교대급수의 부분합은 수직선 위에서 좌우로 진동하며 한 점에 수렴합니다. 진동 폭이 점점 줄어들면서 평형점으로 수렴하는 댐핑 진자와 같습니다.\n\n절대수렴은 '부호 무시하고 더해도 수렴'이므로 안정적. 조건부수렴은 양음의 절묘한 상쇄에 의존하여, 항의 순서를 바꾸면 합이 달라질 수 있습니다(리만 재배열 정리).",
            "formula": "\\text{교대급수:}\\ b_n > 0,\\ b_n \\searrow,\\ b_n \\to 0 \\Rightarrow \\sum (-1)^n b_n\\ \\text{수렴}\n|R_N| \\leq b_{N+1}\n\\sum |a_n|\\ \\text{수렴} \\Rightarrow \\sum a_n\\ \\text{절대수렴}\n\\sum a_n\\ \\text{수렴},\\ \\sum |a_n|\\ \\text{발산} \\Rightarrow \\text{조건부수렴}",
            "summary": "교대급수는 세 조건($b_n > 0$, 단조감소, $b_n \\to 0$)으로 수렴 판정. 절대수렴이 조건부수렴보다 강한 수렴. 오차 한계는 다음 항의 크기."
        },
        "examples": [
            {
                "title": "[기본] 조건부수렴 판정",
                "problem": "$\\displaystyle\\sum_{n=1}^{\\infty} \\dfrac{(-1)^{n+1}}{\\sqrt{n}}$의 수렴 유형을 판정하시오.",
                "steps": [
                    "$b_n = \\dfrac{1}{\\sqrt{n}} > 0$, 단조감소, $\\lim b_n = 0$. 교대급수 판정법에 의해 수렴.",
                    "$\\sum \\dfrac{1}{\\sqrt{n}} = \\sum \\dfrac{1}{n^{1/2}}$: $p = 1/2 \\leq 1$이므로 발산.",
                    "$\\sum a_n$ 수렴, $\\sum |a_n|$ 발산 $\\Rightarrow$ 조건부수렴."
                ],
                "answer": "조건부수렴",
                "lesson": "교대급수에서 수렴을 확인한 뒤, 절대수렴 여부를 추가 확인하는 것이 정석입니다."
            },
            {
                "title": "[기본] 절대수렴 판정",
                "problem": "$\\displaystyle\\sum_{n=1}^{\\infty} \\dfrac{(-1)^n}{n^2}$ 의 수렴 유형을 판정하시오.",
                "steps": [
                    "절대값을 씌우면 $\\sum \\dfrac{1}{n^2}$ — $p$-급수($p = 2 > 1$)로 수렴.",
                    "$\\sum |a_n|$ 이 수렴하므로 절대수렴이다.",
                    "절대수렴은 수렴보다 강한 조건이므로, 원래 급수도 당연히 수렴한다."
                ],
                "answer": "절대수렴",
                "lesson": "절대수렴 여부를 먼저 확인하세요. $\\sum |a_n|$ 이 수렴하면 교대급수 판정법을 쓸 필요 없이 바로 결론이 납니다."
            },
            {
                "title": "[응용] 교대급수의 오차 한계",
                "problem": "$\\displaystyle\\sum_{n=1}^{\\infty} \\dfrac{(-1)^{n+1}}{n}$ 의 처음 $5$항 부분합과 실제 합의 오차 한계를 구하시오.",
                "steps": [
                    "교대급수 오차 한계: $|R_N| \\leq b_{N+1}$.",
                    "$N = 5$ 이면 다음 항은 $b_6 = \\dfrac{1}{6}$.",
                    "$|R_5| \\leq \\dfrac{1}{6} \\approx 0.1667$.",
                    "참고: 실제 합은 $\\ln 2 \\approx 0.6931$, $S_5 = 1 - 1/2 + 1/3 - 1/4 + 1/5 = 47/60 \\approx 0.7833$."
                ],
                "answer": "$|R_5| \\leq \\dfrac{1}{6}$",
                "lesson": "교대급수의 오차 한계는 '다음 버리는 항의 크기'보다 작습니다. 이 성질 덕분에 원하는 정밀도에 필요한 항의 수를 미리 결정할 수 있습니다."
            },
            {
                "title": "[응용] 발산 판정법으로 빠른 배제",
                "problem": "$\\displaystyle\\sum_{n=1}^{\\infty} \\dfrac{(-1)^n \\cdot n}{n+1}$ 의 수렴·발산을 판정하시오.",
                "steps": [
                    "발산 판정법 확인: $|a_n| = \\dfrac{n}{n+1}$.",
                    "$\\lim_{n \\to \\infty} \\dfrac{n}{n+1} = 1 \\neq 0$.",
                    "$\\lim a_n \\neq 0$ 이므로 발산 판정법에 의해 급수는 발산한다.",
                    "교대급수 판정법의 조건 $b_n \\to 0$ 을 만족하지 않는다."
                ],
                "answer": "발산",
                "lesson": "수렴 판정의 첫 단계는 항상 $\\lim a_n = 0$ 인지 확인하는 것입니다. 이 조건이 실패하면 어떤 판정법도 필요 없이 바로 발산입니다."
            },
            {
                "title": "[심화] 절대수렴과 조건부수렴의 차이 — 재배열",
                "problem": "교대 조화급수 $\\displaystyle\\sum_{n=1}^{\\infty} \\dfrac{(-1)^{n+1}}{n} = \\ln 2$ 의 항 순서를 바꾸면 합이 달라질 수 있는가?",
                "steps": [
                    "리만 재배열 정리: 조건부수렴하는 급수는 항의 순서를 재배열하여 임의의 값으로 수렴하게 만들 수 있다.",
                    "예: 양의 항을 $2$개씩, 음의 항을 $1$개씩 번갈아 배치하면:",
                    "$1 + \\dfrac{1}{3} - \\dfrac{1}{2} + \\dfrac{1}{5} + \\dfrac{1}{7} - \\dfrac{1}{4} + \\cdots$",
                    "이 재배열의 합은 $\\dfrac{3}{2}\\ln 2 \\neq \\ln 2$ 가 된다.",
                    "반면 절대수렴하는 급수는 어떻게 재배열해도 합이 변하지 않는다."
                ],
                "answer": "가능하다. 조건부수렴 급수의 합은 재배열에 따라 달라질 수 있다.",
                "lesson": "절대수렴이 조건부수렴보다 '안전한' 이유는 재배열에 대해 불변이기 때문입니다. 이것이 절대수렴을 더 강한 수렴으로 보는 핵심 이유입니다."
            }
        ],
        "problems": [
            {
                "id": "16-1",
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
                "id": "16-2",
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
                "id": "16-3",
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
            },
            {
                "id": "16-4",
                "type": "choice",
                "difficulty": 1,
                "question": "$\\displaystyle\\sum_{n=1}^{\\infty} \\dfrac{(-1)^n}{n^3}$ 의 수렴 유형은?",
                "choices": [
                    "절대수렴",
                    "조건부수렴",
                    "발산",
                    "판정 불능"
                ],
                "answer": "절대수렴",
                "hints": [
                    "$\\sum \\dfrac{1}{n^3}$ 은 $p$-급수 ($p = 3 > 1$)로 수렴합니다.",
                    "$\\sum |a_n|$ 이 수렴하면 절대수렴."
                ],
                "explanation": "$\\sum \\dfrac{1}{n^3}$ 은 $p = 3 > 1$ 인 $p$-급수로 수렴합니다. $\\sum |a_n|$ 수렴이므로 절대수렴입니다.",
                "wrongAnalysis": "교대급수라는 것에만 집중하여 조건부수렴으로 답하는 실수가 있습니다. 절대값을 씌운 급수의 수렴 여부를 항상 먼저 확인하세요."
            },
            {
                "id": "16-5",
                "type": "number",
                "difficulty": 2,
                "question": "$\\displaystyle\\sum_{n=1}^{\\infty} \\dfrac{(-1)^{n+1}}{2n-1} = 1 - \\dfrac{1}{3} + \\dfrac{1}{5} - \\dfrac{1}{7} + \\cdots$ 의 처음 $3$항 부분합의 오차 한계는? (분수로 입력, 예: 1/7)",
                "answer": "1/7",
                "hints": [
                    "처음 $3$항: $1 - \\dfrac{1}{3} + \\dfrac{1}{5} = \\dfrac{13}{15}$.",
                    "오차 한계: $|R_3| \\leq b_4$.",
                    "$b_4 = \\dfrac{1}{2(4)-1} = \\dfrac{1}{7}$."
                ],
                "explanation": "교대급수의 오차 한계 $|R_N| \\leq b_{N+1}$. $N = 3$ 이면 $b_4 = \\dfrac{1}{7}$. (이 급수의 합은 $\\dfrac{\\pi}{4}$ 입니다.)",
                "wrongAnalysis": "$b_3 = \\dfrac{1}{5}$ 를 오차 한계로 답하는 실수가 있습니다. 오차 한계는 다음 항 $b_{N+1}$ 이지 마지막으로 더한 항 $b_N$ 이 아닙니다."
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
