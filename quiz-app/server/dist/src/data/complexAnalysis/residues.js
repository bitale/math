"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.residuesLessons = void 0;
exports.residuesLessons = [
    {
        "id": 11,
        "title": "로랑 급수",
        "category": "급수와 특이점",
        "level": "심화",
        "question": "특이점 근방에서 함수를 급수로 전개하면 어떤 형태가 나타나며, 특이점은 어떻게 분류되는가?",
        "concept": {
            "intro": "테일러 급수 $\\sum_{n=0}^{\\infty} a_n(z-z_0)^n$은 해석점 주위에서만 유효합니다. 특이점 $z_0$ 근방에서는 음의 거듭제곱 항이 필요합니다.\n\n:::definition[로랑 급수]\n$$f(z) = \\sum_{n=-\\infty}^{\\infty} a_n(z-z_0)^n = \\cdots + \\frac{a_{-2}}{(z-z_0)^2} + \\frac{a_{-1}}{z-z_0} + a_0 + a_1(z-z_0) + \\cdots$$\n양의 거듭제곱 부분 $\\sum_{n=0}^{\\infty} a_n(z-z_0)^n$을 **해석부(analytic part)**, 음의 거듭제곱 부분 $\\sum_{n=1}^{\\infty} a_{-n}(z-z_0)^{-n}$을 **주부(principal part)**라 합니다.\n:::\n\n:::definition[특이점의 분류]\n특이점은 로랑 급수의 주부에 따라 세 가지로 분류됩니다:\n• **제거가능 특이점(removable singularity)**: 주부가 없음 ($a_{-n} = 0$ 모두). 예: $\\sin z/z$의 $z=0$.\n• **극(pole)**: 주부가 유한 항. $a_{-m} \\neq 0$이고 $n > m$이면 $a_{-n} = 0$이면 **$m$차 극(pole of order $m$)**. 예: $1/z^2$의 $z=0$은 2차 극.\n• **본질적 특이점(essential singularity)**: 주부가 무한 항. 예: $e^{1/z}$의 $z=0$.\n:::\n\n:::theorem[피카르 대정리]\n본질적 특이점 근방에서는 **카소라티-바이어슈트라스 정리**에 의해 함수가 거의 모든 복소수 값에 임의로 가까이 접근합니다. 더 강한 **피카르 대정리**에 의하면, 본질적 특이점 근방에서 함수는 최대 하나의 예외를 제외한 모든 복소수 값을 무한히 많이 취합니다.\n:::",
            "intuition": "테일러 급수가 '양의 거듭제곱만의 다항식 근사'라면, 로랑 급수는 '음의 거듭제곱도 허용한 확장판'입니다. 특이점은 함수가 '폭발하는' 지점인데, 그 폭발의 양상을 분류하는 것이 로랑 급수의 핵심 역할입니다.\n\n제거가능 특이점은 '외양만 특이해 보이지만 사실 아닌' 경우(고칠 수 있음), 극은 '유한한 세기로 폭발'하는 경우, 본질적 특이점은 '도저히 길들일 수 없는 야생적 폭발'입니다.",
            "formula": "f(z) = \\sum_{n=-\\infty}^{\\infty} a_n(z-z_0)^n\na_n = \\frac{1}{2\\pi i}\\oint_C \\frac{f(z)}{(z-z_0)^{n+1}}\\,dz\n\\text{제거가능:}\\ a_{-n} = 0\\ \\text{모두}\n\\text{극(}m\\text{차):}\\ a_{-m} \\neq 0,\\ a_{-n} = 0\\ (n > m)\n\\text{본질적:}\\ a_{-n} \\neq 0\\ \\text{인 }n\\text{이 무한히 많음}",
            "summary": ":::note[핵심 정리]\n• 로랑 급수: 음의 거듭제곱을 포함한 급수 전개\n• 주부(음의 거듭제곱)의 형태로 특이점 분류: 제거가능, 극, 본질적\n• 본질적 특이점 근방: 함수가 거의 모든 값에 접근 (피카르 정리)\n:::"
        },
        "examples": [
            {
                "title": "$e^{1/z}$의 로랑 급수",
                "problem": "$f(z) = e^{1/z}$의 $z = 0$ 주위 로랑 급수를 구하고, 특이점의 종류를 판별하시오.",
                "steps": [
                    "$e^w = \\sum_{n=0}^{\\infty} \\frac{w^n}{n!}$에 $w = 1/z$를 대입.",
                    "$e^{1/z} = \\sum_{n=0}^{\\infty} \\frac{1}{n! \\cdot z^n} = 1 + \\frac{1}{z} + \\frac{1}{2!z^2} + \\frac{1}{3!z^3} + \\cdots$",
                    "주부에 무한히 많은 항이 있다: $\\frac{1}{z}$, $\\frac{1}{2z^2}$, $\\frac{1}{6z^3}$, $\\ldots$",
                    "따라서 $z = 0$은 $e^{1/z}$의 **본질적 특이점**이다."
                ],
                "answer": "$e^{1/z} = \\sum_{n=0}^{\\infty} \\frac{1}{n!z^n}$, $z=0$은 본질적 특이점",
                "lesson": "$e^{1/z}$는 본질적 특이점의 대표적 예입니다. $z \\to 0$에서 실수축 양의 방향으로 접근하면 $\\to \\infty$, 음의 방향으로 접근하면 $\\to 0$으로 완전히 다른 행동을 보입니다."
            },
            {
                "title": "[기본] $\\sin z / z$의 로랑 급수",
                "problem": "$f(z) = \\frac{\\sin z}{z}$의 $z = 0$ 주위 로랑 급수를 구하고, 특이점 종류를 판별하시오.",
                "steps": [
                    "$\\sin z = z - \\frac{z^3}{3!} + \\frac{z^5}{5!} - \\cdots$.",
                    "$\\frac{\\sin z}{z} = 1 - \\frac{z^2}{3!} + \\frac{z^4}{5!} - \\cdots$.",
                    "음의 거듭제곱 항(주부)이 없다.",
                    "따라서 $z = 0$은 가제거 특이점이며, $f(0) = 1$로 정의하면 해석적."
                ],
                "answer": "$\\frac{\\sin z}{z} = 1 - \\frac{z^2}{6} + \\frac{z^4}{120} - \\cdots$, 가제거 특이점",
                "lesson": "분모에 $z$가 있어도, 분자의 테일러 급수에서 $z$가 약분되면 주부가 사라져 가제거 특이점이 됩니다. 반드시 급수 전개 후 판단해야 합니다."
            },
            {
                "title": "[응용] 두 개의 특이점을 가진 함수의 로랑 급수",
                "problem": "$f(z) = \\frac{1}{z(z-1)}$의 $z = 0$ 주위 ($0 < |z| < 1$) 로랑 급수를 구하시오.",
                "steps": [
                    "부분분수: $\\frac{1}{z(z-1)} = \\frac{-1}{z} + \\frac{1}{z-1}$.",
                    "$0 < |z| < 1$에서 $\\frac{1}{z-1} = \\frac{-1}{1-z} = -\\sum_{n=0}^{\\infty} z^n$.",
                    "$f(z) = -\\frac{1}{z} - \\sum_{n=0}^{\\infty} z^n = -\\frac{1}{z} - 1 - z - z^2 - \\cdots$.",
                    "주부: $-1/z$ (한 항), 해석부: $-1 - z - z^2 - \\cdots$.",
                    "$z = 0$은 단순극 (1차 극)."
                ],
                "answer": "$f(z) = -\\frac{1}{z} - \\sum_{n=0}^{\\infty} z^n$ ($0 < |z| < 1$)",
                "lesson": "같은 함수라도 로랑 급수는 전개 영역에 따라 다릅니다. $0 < |z| < 1$과 $|z| > 1$에서의 로랑 급수는 다른 형태를 가집니다."
            },
            {
                "title": "[응용] 고차극의 판별",
                "problem": "$f(z) = \\frac{\\cos z - 1}{z^3}$의 $z = 0$에서의 특이점 종류와 위수를 구하시오.",
                "steps": [
                    "$\\cos z - 1 = -\\frac{z^2}{2} + \\frac{z^4}{24} - \\cdots$.",
                    "$\\frac{\\cos z - 1}{z^3} = -\\frac{1}{2z} + \\frac{z}{24} - \\cdots$.",
                    "주부는 $-\\frac{1}{2z}$로 한 항뿐이며, $a_{-1} = -1/2 \\neq 0$.",
                    "따라서 $z = 0$은 1차 극(단순극)."
                ],
                "answer": "1차 극(단순극), $\\text{Res}(f, 0) = -\\frac{1}{2}$",
                "lesson": "분모가 $z^3$이라고 3차 극이 아닙니다. 분자 $\\cos z - 1$이 $z = 0$에서 $z^2$ 인수를 가지므로 2개가 약분되어 실제 극의 위수는 $3 - 2 = 1$입니다."
            },
            {
                "title": "[심화] 로랑 급수의 유일성과 환형 영역",
                "problem": "$f(z) = \\frac{1}{(z-1)(z-2)}$의 $z = 0$ 중심 환형 영역 $1 < |z| < 2$에서의 로랑 급수를 구하시오.",
                "steps": [
                    "부분분수: $\\frac{1}{(z-1)(z-2)} = \\frac{-1}{z-1} + \\frac{1}{z-2}$.",
                    "$1 < |z| < 2$에서 $\\frac{-1}{z-1} = \\frac{-1}{z}\\cdot\\frac{1}{1-1/z} = -\\frac{1}{z}\\sum_{n=0}^{\\infty}\\frac{1}{z^n} = -\\sum_{n=0}^{\\infty}\\frac{1}{z^{n+1}}$.",
                    "$\\frac{1}{z-2} = \\frac{-1}{2}\\cdot\\frac{1}{1-z/2} = -\\frac{1}{2}\\sum_{n=0}^{\\infty}\\frac{z^n}{2^n} = -\\sum_{n=0}^{\\infty}\\frac{z^n}{2^{n+1}}$.",
                    "$f(z) = -\\sum_{n=1}^{\\infty}\\frac{1}{z^n} - \\sum_{n=0}^{\\infty}\\frac{z^n}{2^{n+1}}$.",
                    "주부: $-\\frac{1}{z} - \\frac{1}{z^2} - \\frac{1}{z^3} - \\cdots$ (무한 항)."
                ],
                "answer": "$f(z) = -\\sum_{n=1}^{\\infty}z^{-n} - \\sum_{n=0}^{\\infty}\\frac{z^n}{2^{n+1}}$ ($1 < |z| < 2$)",
                "lesson": "같은 함수라도 전개 영역에 따라 로랑 급수가 달라집니다. $|z| < 1$, $1 < |z| < 2$, $|z| > 2$ 세 영역에서 각기 다른 급수를 가집니다. 이는 급수가 '영역'에 종속된다는 중요한 사실입니다."
            }
        ],
        "problems": [
            {
                "id": "11-1",
                "type": "choice",
                "difficulty": 1,
                "question": "다음 중 $f(z) = \\frac{1}{z^3}$의 $z=0$에서의 특이점 종류는?",
                "choices": [
                    "제거가능 특이점",
                    "1차 극(단순극)",
                    "3차 극",
                    "본질적 특이점"
                ],
                "answer": "3차 극",
                "hints": [
                    "$1/z^3$의 로랑 급수는 $z^{-3}$ 단일항입니다.",
                    "주부에 $z^{-3}$ 항만 있으므로 유한합니다.",
                    "가장 낮은(가장 음의) 거듭제곱이 $-3$이므로 극의 차수는?"
                ],
                "explanation": "$f(z) = z^{-3}$이므로 로랑 급수는 $a_{-3} = 1$이고 나머지 계수는 모두 $0$. 주부가 유한하고 $a_{-3} \\neq 0$이므로 3차 극입니다.",
                "wrongAnalysis": "1차 극이라고 답하는 실수가 있습니다. 극의 차수는 '주부에서 $0$이 아닌 가장 낮은 거듭제곱의 절댓값'입니다. $z^{-3}$이므로 3차입니다."
            },
            {
                "id": "11-4",
                "type": "text",
                "difficulty": 1,
                "question": "로랑 급수에서 음의 거듭제곱 부분을 무엇이라 부르는가? (한글로 적으시오)",
                "answer": "주부",
                "hints": [
                    "양의 거듭제곱 부분은 해석부(analytic part)라 합니다.",
                    "음의 거듭제곱 부분은 영어로 principal part입니다."
                ],
                "explanation": "로랑 급수 $\\sum_{n=-\\infty}^{\\infty} a_n(z-z_0)^n$에서 음의 거듭제곱 부분 $\\sum_{n=1}^{\\infty} a_{-n}(z-z_0)^{-n}$을 주부(principal part)라 하고, 양의 거듭제곱 부분을 해석부(analytic part)라 합니다.",
                "wrongAnalysis": "주부와 해석부를 반대로 기억하는 실수가 있습니다. 주부는 특이점의 '본질'을 담고 있는 음의 거듭제곱 부분입니다."
            },
            {
                "id": "11-5",
                "type": "choice",
                "difficulty": 2,
                "question": "$f(z) = \\frac{e^z - 1}{z}$의 $z = 0$에서의 특이점 종류는?",
                "choices": [
                    "가제거 특이점",
                    "1차 극(단순극)",
                    "2차 극",
                    "본질적 특이점"
                ],
                "answer": "가제거 특이점",
                "hints": [
                    "$e^z = 1 + z + z^2/2 + \\cdots$이므로 $e^z - 1 = z + z^2/2 + \\cdots$입니다.",
                    "$\\frac{e^z - 1}{z} = 1 + z/2 + z^2/6 + \\cdots$에서 주부가 있는지 확인하세요."
                ],
                "explanation": "$\\frac{e^z - 1}{z} = \\frac{z + z^2/2! + z^3/3! + \\cdots}{z} = 1 + z/2 + z^2/6 + \\cdots$. 음의 거듭제곱 항이 없으므로 $z = 0$은 가제거 특이점입니다. $f(0) = 1$로 정의하면 해석적이 됩니다.",
                "wrongAnalysis": "분모에 $z$가 있으므로 극이라고 즉단하는 실수가 흔합니다. 분자에서 $z$가 약분되므로 실제로는 특이점이 사라집니다."
            },
            {
                "id": "11-2",
                "type": "text",
                "difficulty": 2,
                "question": "$f(z) = \\frac{\\sin z}{z}$의 $z=0$에서의 특이점 종류는? (제거가능/극/본질적)",
                "answer": "제거가능",
                "hints": [
                    "$\\sin z = z - z^3/6 + z^5/120 - \\cdots$",
                    "$\\sin z / z = 1 - z^2/6 + z^4/120 - \\cdots$",
                    "주부($z$의 음의 거듭제곱)가 있나요?"
                ],
                "explanation": "$\\frac{\\sin z}{z} = \\frac{z - z^3/6 + \\cdots}{z} = 1 - z^2/6 + z^4/120 - \\cdots$. 주부가 없으므로 $z = 0$은 제거가능 특이점입니다. $f(0) = 1$로 정의하면 전체 $\\mathbb{C}$에서 해석적이 됩니다.",
                "wrongAnalysis": "$1/z$가 있으므로 극이라고 판단하는 실수가 있습니다. 분자 $\\sin z$에 $z$ 인수가 있어 약분되므로, 실제로는 주부가 사라집니다."
            },
            {
                "id": "11-3",
                "type": "choice",
                "difficulty": 3,
                "question": "본질적 특이점 $z_0$의 근방에서 해석함수의 행동에 대한 피카르 대정리의 내용은?",
                "choices": [
                    "함수값이 항상 $\\infty$로 발산한다",
                    "함수값이 항상 $0$에 수렴한다",
                    "최대 하나의 예외를 제외한 모든 복소수 값을 무한히 많이 취한다",
                    "함수는 유계이다"
                ],
                "answer": "최대 하나의 예외를 제외한 모든 복소수 값을 무한히 많이 취한다",
                "hints": [
                    "$e^{1/z}$의 $z=0$ 근방 행동을 생각해 보세요.",
                    "$e^{1/z}$는 $z=0$ 근방에서 $0$을 제외한 모든 값을 취합니다.",
                    "피카르 대정리는 이를 일반화합니다."
                ],
                "explanation": "피카르 대정리: 본질적 특이점 근방에서 해석함수는 최대 하나의 예외적 값을 제외한 모든 복소수 값을 무한히 많이 취합니다. $e^{1/z}$의 경우, $z=0$ 근방에서 $0$을 제외한 모든 복소수 값을 취합니다 ($e^w \\neq 0$이므로).",
                "wrongAnalysis": "'$\\infty$로 발산한다'는 극의 행동이지 본질적 특이점의 행동이 아닙니다. 본질적 특이점은 극보다 훨씬 더 '야생적'입니다."
            }
        ],
        "summary": {
            "keyPoints": [
                "로랑 급수는 음의 거듭제곱을 포함하여 특이점 주위를 기술한다.",
                "특이점의 분류: 제거가능(주부 없음), 극(유한 주부), 본질적(무한 주부).",
                "본질적 특이점은 피카르 정리에 의해 극도로 야생적인 행동을 보인다."
            ],
            "formulas": [
                "f(z) = \\sum_{n=-\\infty}^{\\infty} a_n(z-z_0)^n",
                "a_n = \\frac{1}{2\\pi i}\\oint \\frac{f(z)}{(z-z_0)^{n+1}}\\,dz"
            ],
            "commonMistakes": [
                "극의 차수를 잘못 세는 실수 (가장 낮은 음의 거듭제곱의 절댓값)",
                "분자와 분모의 약분을 확인하지 않고 특이점을 판단하는 실수",
                "제거가능 특이점과 극을 혼동하는 실수"
            ],
            "nextConnection": "로랑 급수를 갖추었으니, 다음 레슨에서 특이점을 가제거 특이점, 극, 본질적 특이점으로 분류하고 각각의 성질을 배웁니다."
        }
    },
    {
        "id": 13,
        "title": "유수 정리",
        "category": "급수와 특이점",
        "level": "심화",
        "question": "로랑 급수의 $a_{-1}$ 계수(유수)로 복소 경로적분을 어떻게 계산하는가?",
        "concept": {
            "intro": "이전 레슨에서 $\\oint_{|z|=1} z^n\\,dz$는 $n = -1$일 때만 $2\\pi i$이고 나머지는 $0$이라는 것을 보았습니다.\n\n:::definition[유수]\n$f(z) = \\sum a_n(z-z_0)^n$을 항별로 적분하면, $a_{-1}$ 항만 살아남아\n$$\\oint_C f(z)\\,dz = 2\\pi i \\cdot a_{-1}$$\n이 됩니다. 이 계수 $a_{-1}$을 **유수(residue)**라 하고 $\\operatorname{Res}(f, z_0)$로 표기합니다.\n:::\n\n:::theorem[유수 정리 (Residue Theorem)]\n경로 안에 여러 특이점 $z_1, z_2, \\ldots, z_k$가 있을 때:\n$$\\oint_C f(z)\\,dz = 2\\pi i \\sum_{k} \\operatorname{Res}(f, z_k)$$\n이 정리는 코시 정리와 코시 적분 공식을 모두 포함하는 강력한 일반화입니다.\n:::\n\n:::note[유수 계산법]\n**단순극(1차 극)** $z_0$에서는\n$$\\operatorname{Res}(f, z_0) = \\lim_{z \\to z_0} (z-z_0)f(z)$$\n**$m$차 극**에서는\n$$\\operatorname{Res}(f, z_0) = \\frac{1}{(m-1)!}\\lim_{z \\to z_0} \\frac{d^{m-1}}{dz^{m-1}}[(z-z_0)^m f(z)]$$\n$f = p/q$ 형태($q$가 단순 영점)이면 $\\operatorname{Res}(f, z_0) = p(z_0)/q'(z_0)$도 유용합니다.\n:::",
            "intuition": "유수는 '특이점이 적분에 기여하는 몫'입니다. 해석함수의 닫힌 적분이 $0$인 것은 특이점이 없기 때문이고, 특이점이 있으면 각 특이점이 $2\\pi i \\cdot \\text{Res}$만큼 기여합니다. 여러 특이점의 기여를 합산한 것이 유수 정리입니다.\n\n단순극의 유수 공식 $\\lim(z-z_0)f(z)$의 직관은 간단합니다: $(z-z_0)$를 곱하면 극이 제거되어 유한한 값이 남고, 그 값이 바로 $a_{-1}$입니다.",
            "formula": "\\text{Res}(f, z_0) = a_{-1}\\quad (\\text{로랑 급수의 }z^{-1}\\text{ 계수})\n\\oint_C f(z)\\,dz = 2\\pi i \\sum_k \\text{Res}(f, z_k)\\quad (\\text{유수 정리})\n\\text{단순극:}\\ \\text{Res}(f, z_0) = \\lim_{z \\to z_0}(z-z_0)f(z)\n\\text{또는}\\ \\text{Res}\\left(\\frac{p}{q}, z_0\\right) = \\frac{p(z_0)}{q'(z_0)}\\quad (q(z_0)=0,\\ q'(z_0)\\neq 0)\nm\\text{차 극:}\\ \\text{Res}(f, z_0) = \\frac{1}{(m-1)!}\\lim_{z \\to z_0}\\frac{d^{m-1}}{dz^{m-1}}[(z-z_0)^m f(z)]",
            "summary": ":::note[핵심 정리]\n• 유수 = 로랑 급수의 $a_{-1}$ 계수\n• 유수 정리: $\\oint f\\,dz = 2\\pi i \\cdot \\sum \\operatorname{Res}$\n• 단순극: $\\operatorname{Res} = \\lim(z-z_0)f(z)$ 또는 $p(z_0)/q'(z_0)$\n• 고차극: $(m-1)$번 미분 후 극한\n:::"
        },
        "examples": [
            {
                "title": "$\\oint_{|z|=2} \\frac{1}{z^2-1}\\,dz$ 계산",
                "problem": "$\\oint_{|z|=2} \\frac{1}{z^2-1}\\,dz$를 유수 정리로 계산하시오.",
                "steps": [
                    "$\\frac{1}{z^2-1} = \\frac{1}{(z-1)(z+1)}$. 특이점: $z=1$, $z=-1$ (모두 $|z|=2$ 내부).",
                    "$z=1$은 단순극: $\\text{Res}(f, 1) = \\lim_{z \\to 1}(z-1) \\cdot \\frac{1}{(z-1)(z+1)} = \\frac{1}{1+1} = \\frac{1}{2}$.",
                    "$z=-1$은 단순극: $\\text{Res}(f, -1) = \\lim_{z \\to -1}(z+1) \\cdot \\frac{1}{(z-1)(z+1)} = \\frac{1}{-1-1} = -\\frac{1}{2}$.",
                    "유수 정리: $\\oint f\\,dz = 2\\pi i(\\frac{1}{2} + (-\\frac{1}{2})) = 2\\pi i \\cdot 0 = 0$."
                ],
                "answer": "$0$",
                "lesson": "유수의 합이 $0$이면 적분도 $0$입니다. 부분분수 분해 $\\frac{1}{z^2-1} = \\frac{1/2}{z-1} - \\frac{1/2}{z+1}$에서도 같은 결과를 확인할 수 있습니다."
            },
            {
                "title": "[기본] 단순극의 유수 계산",
                "problem": "$f(z) = \\frac{z+1}{z-2}$의 $z = 2$에서의 유수를 구하시오.",
                "steps": [
                    "$z = 2$는 $f(z)$의 단순극이다.",
                    "$\\text{Res}(f, 2) = \\lim_{z \\to 2}(z-2) \\cdot \\frac{z+1}{z-2}$.",
                    "$= \\lim_{z \\to 2}(z+1) = 3$."
                ],
                "answer": "$\\text{Res}(f, 2) = 3$",
                "lesson": "단순극의 유수 공식 $\\text{Res}(f, z_0) = \\lim_{z \\to z_0}(z - z_0)f(z)$는 $(z-z_0)$를 곱하여 극을 제거한 뒤 극한을 취하는 것입니다. 가장 자주 사용되는 유수 계산법입니다."
            },
            {
                "title": "[응용] $p/q$ 형태의 유수 공식",
                "problem": "$f(z) = \\frac{z^2}{z^2+1}$의 $z = i$에서의 유수를 구하시오.",
                "steps": [
                    "$f(z) = \\frac{p(z)}{q(z)}$에서 $p(z) = z^2$, $q(z) = z^2 + 1$.",
                    "$q(i) = i^2 + 1 = 0$, $q'(z) = 2z$, $q'(i) = 2i \\neq 0$ (단순근).",
                    "$\\text{Res}(f, i) = \\frac{p(i)}{q'(i)} = \\frac{i^2}{2i} = \\frac{-1}{2i} = \\frac{i}{2}$."
                ],
                "answer": "$\\text{Res}(f, i) = \\frac{i}{2}$",
                "lesson": "$f = p/q$ 형태에서 $q$가 단순근을 가질 때 $\\text{Res} = p(z_0)/q'(z_0)$는 매우 편리한 공식입니다. 로피탈 법칙과 본질적으로 같은 원리입니다."
            },
            {
                "title": "[응용] 2차 극의 유수",
                "problem": "$f(z) = \\frac{z}{(z+1)^2}$의 $z = -1$에서의 유수를 구하시오.",
                "steps": [
                    "$z = -1$은 2차 극이다.",
                    "2차 극 유수 공식: $\\text{Res}(f, z_0) = \\lim_{z \\to z_0}\\frac{d}{dz}[(z-z_0)^2 f(z)]$.",
                    "$(z+1)^2 \\cdot \\frac{z}{(z+1)^2} = z$.",
                    "$\\frac{d}{dz}(z) = 1$.",
                    "$\\text{Res}(f, -1) = 1$."
                ],
                "answer": "$\\text{Res}(f, -1) = 1$",
                "lesson": "$m$차 극의 유수는 $(z-z_0)^m f(z)$를 $(m-1)$번 미분한 뒤 $z_0$에서의 극한을 취하고 $(m-1)!$로 나누는 것입니다. $m = 2$이면 1번 미분합니다."
            },
            {
                "title": "[심화] 유수 정리를 이용한 급수 합 계산",
                "problem": "유수 정리를 이용하여 $\\sum_{n=1}^{\\infty} \\frac{1}{n^2}$이 $\\frac{\\pi^2}{6}$임을 설명하시오.",
                "steps": [
                    "$f(z) = \\frac{\\pi\\cot(\\pi z)}{z^2}$을 고려한다. $\\cot(\\pi z)$는 $z = n$ ($n \\in \\mathbb{Z}$)에서 단순극을 가진다.",
                    "$z = n \\neq 0$에서: $\\text{Res}(f, n) = \\frac{\\pi}{n^2} \\cdot \\frac{1}{\\pi} = \\frac{1}{n^2}$.",
                    "$z = 0$에서: $\\pi\\cot(\\pi z)/z^2$의 로랑 전개로 $\\text{Res}(f, 0) = -\\pi^2/3$.",
                    "큰 정사각형 경로 $C_N$ ($|\\text{Re}(z)| = |\\text{Im}(z)| = N + 1/2$)를 잡으면 $\\oint_{C_N} f\\,dz \\to 0$ ($N \\to \\infty$).",
                    "유수 정리: $0 = 2\\sum_{n=1}^{\\infty}\\frac{1}{n^2} - \\frac{\\pi^2}{3}$이므로 $\\sum_{n=1}^{\\infty}\\frac{1}{n^2} = \\frac{\\pi^2}{6}$."
                ],
                "answer": "$\\sum_{n=1}^{\\infty}\\frac{1}{n^2} = \\frac{\\pi^2}{6}$",
                "lesson": "유수 정리는 정적분뿐 아니라 급수의 합 계산에도 응용됩니다. $\\pi\\cot(\\pi z)$는 모든 정수에서 유수가 $1$인 단순극을 가지므로, 급수 합 계산의 표준 도구입니다."
            }
        ],
        "problems": [
            {
                "id": "13-1",
                "type": "choice",
                "difficulty": 1,
                "question": "유수(residue) $\\text{Res}(f, z_0)$은 로랑 급수의 어떤 계수인가?",
                "choices": [
                    "$a_0$ (상수항)",
                    "$a_{-1}$ ($z^{-1}$의 계수)",
                    "$a_1$ ($z^1$의 계수)",
                    "$a_{-2}$ ($z^{-2}$의 계수)"
                ],
                "answer": "$a_{-1}$ ($z^{-1}$의 계수)",
                "hints": [
                    "$\\oint z^n\\,dz$에서 $0$이 아닌 결과를 주는 $n$은?",
                    "$n = -1$일 때만 $2\\pi i$입니다.",
                    "항별 적분에서 살아남는 유일한 항이 $a_{-1}/(z-z_0)$입니다."
                ],
                "explanation": "로랑 급수 $\\sum a_n(z-z_0)^n$을 닫힌 경로를 따라 항별로 적분하면, $\\oint (z-z_0)^n\\,dz$는 $n=-1$일 때만 $2\\pi i$이고 나머지는 $0$입니다. 따라서 살아남는 계수는 $a_{-1}$뿐입니다.",
                "wrongAnalysis": "$a_0$이나 $a_{-2}$로 답하는 실수가 있습니다. $\\oint z^n\\,dz = 0$ ($n \\neq -1$)이므로, 오직 $a_{-1}$만 기여합니다."
            },
            {
                "id": "13-2",
                "type": "text",
                "difficulty": 2,
                "question": "$f(z) = \\frac{e^z}{z-1}$의 $z=1$에서의 유수는? (예: e)",
                "answer": "e",
                "hints": [
                    "$z=1$은 단순극입니다.",
                    "$\\text{Res}(f, 1) = \\lim_{z \\to 1}(z-1) \\cdot \\frac{e^z}{z-1}$.",
                    "$= \\lim_{z \\to 1} e^z = e^1 = e$."
                ],
                "explanation": "$z=1$은 $f(z) = e^z/(z-1)$의 단순극입니다. $\\text{Res}(f, 1) = \\lim_{z \\to 1}(z-1) \\cdot \\frac{e^z}{z-1} = \\lim_{z \\to 1} e^z = e$.",
                "wrongAnalysis": "극의 차수를 잘못 판단하거나, $e^1 = e$가 아닌 $1$로 답하는 실수가 있습니다."
            },
            {
                "id": "13-4",
                "type": "choice",
                "difficulty": 1,
                "question": "유수 정리 $\\oint_C f(z)\\,dz = 2\\pi i \\sum_k \\text{Res}(f, z_k)$에서 합산하는 $z_k$는?",
                "choices": [
                    "경로 $C$ 위의 모든 점",
                    "경로 $C$ 내부의 모든 특이점",
                    "경로 $C$ 외부의 특이점",
                    "$\\mathbb{C}$ 전체의 특이점"
                ],
                "answer": "경로 $C$ 내부의 모든 특이점",
                "hints": [
                    "유수 정리는 닫힌 경로 안에 포함된 특이점만 고려합니다.",
                    "경로 밖의 특이점은 적분에 기여하지 않습니다."
                ],
                "explanation": "유수 정리에서 합산하는 특이점 $z_k$는 닫힌 경로 $C$의 **내부**에 있는 특이점들입니다. 경로 밖의 특이점이나 경로 위의 점은 포함하지 않습니다.",
                "wrongAnalysis": "경로 위의 특이점을 포함한다고 생각하는 실수가 있습니다. 특이점이 경로 위에 있으면 유수 정리를 직접 적용할 수 없고, 경로를 우회해야 합니다."
            },
            {
                "id": "13-5",
                "type": "number",
                "difficulty": 2,
                "question": "$f(z) = \\frac{1}{z^2 + 4}$의 $z = 2i$에서의 유수를 구하시오. (답을 $a/(bi)$ 형태 대신 분수로 적으시오. 예: 분모가 4i이면 소수점으로 답하시오.) 유수의 허수부의 절댓값을 소수로 답하시오.",
                "answer": "0.25",
                "hints": [
                    "$z^2 + 4 = (z-2i)(z+2i)$로 인수분해하세요.",
                    "$z = 2i$는 단순극입니다. $\\text{Res}(f, 2i) = \\lim_{z \\to 2i}(z-2i) \\cdot \\frac{1}{(z-2i)(z+2i)}$.",
                    "$= \\frac{1}{2i + 2i} = \\frac{1}{4i} = \\frac{-i}{4}$이므로 허수부의 절댓값은 $0.25$입니다."
                ],
                "explanation": "$\\text{Res}(f, 2i) = \\lim_{z \\to 2i} \\frac{1}{z+2i} = \\frac{1}{4i} = \\frac{-i}{4}$. 따라서 유수의 허수부는 $-1/4$이고 절댓값은 $0.25$입니다.",
                "wrongAnalysis": "$1/(4i)$를 $i/4$로 계산하는 부호 실수가 흔합니다. $1/i = -i$이므로 $1/(4i) = -i/4$입니다."
            },
            {
                "id": "13-3",
                "type": "choice",
                "difficulty": 3,
                "question": "$\\oint_{|z|=3} \\frac{z}{(z-1)(z-2)}\\,dz$의 값은?",
                "choices": [
                    "$2\\pi i$",
                    "$4\\pi i$",
                    "$6\\pi i$",
                    "$0$"
                ],
                "answer": "$2\\pi i$",
                "hints": [
                    "특이점 $z=1$, $z=2$ 모두 $|z|=3$ 내부입니다.",
                    "$\\text{Res}(f, 1) = \\lim_{z \\to 1} \\frac{z}{z-2} = \\frac{1}{-1} = -1$.",
                    "$\\text{Res}(f, 2) = \\lim_{z \\to 2} \\frac{z}{z-1} = \\frac{2}{1} = 2$.",
                    "유수 정리: $2\\pi i(-1 + 2) = 2\\pi i$."
                ],
                "explanation": "$z=1$: $\\text{Res} = \\lim_{z \\to 1}(z-1)\\frac{z}{(z-1)(z-2)} = \\frac{1}{1-2} = -1$. $z=2$: $\\text{Res} = \\lim_{z \\to 2}(z-2)\\frac{z}{(z-1)(z-2)} = \\frac{2}{2-1} = 2$. 유수 정리: $\\oint f\\,dz = 2\\pi i(-1 + 2) = 2\\pi i$. 부분분수로도 확인: $\\frac{z}{(z-1)(z-2)} = \\frac{-1}{z-1} + \\frac{2}{z-2}$이므로 유수의 합은 $-1+2=1$.",
                "wrongAnalysis": "유수를 구할 때 분모의 다른 인수에 $z_0$를 대입하는 것을 잊거나, 부호를 틀리는 실수가 흔합니다. 특히 $\\text{Res}(f,1) = 1/(1-2) = -1$에서 부호를 놓치기 쉽습니다."
            }
        ],
        "summary": {
            "keyPoints": [
                "유수 $= a_{-1}$: 로랑 급수에서 경로적분에 유일하게 기여하는 계수.",
                "유수 정리: $\\oint f\\,dz = 2\\pi i \\sum \\text{Res}(f, z_k)$.",
                "단순극 유수: $\\lim(z-z_0)f(z)$ 또는 $p(z_0)/q'(z_0)$."
            ],
            "formulas": [
                "\\oint_C f(z)\\,dz = 2\\pi i \\sum \\text{Res}(f, z_k)",
                "\\text{Res}(f, z_0) = \\lim_{z \\to z_0}(z-z_0)f(z)\\quad (\\text{단순극})",
                "\\text{Res}(p/q, z_0) = p(z_0)/q'(z_0)"
            ],
            "commonMistakes": [
                "경로 내부에 있는 특이점을 빠뜨리는 실수",
                "단순극 공식을 고차극에 잘못 적용하는 실수",
                "유수 계산 시 부호 실수"
            ],
            "nextConnection": "유수 정리를 갖추었으니, 다음 레슨에서는 이 도구의 가장 실용적인 응용을 다룹니다: 직접 계산하기 어려운 실수 적분을 복소 경로적분으로 변환해 유수로 계산하는 기법입니다."
        }
    },
    {
        "id": 14,
        "title": "유수 정리의 응용 — 실수 적분 계산",
        "category": "급수와 특이점",
        "level": "심화",
        "question": "복소 경로적분과 유수 정리를 이용해 실수 정적분을 어떻게 계산하는가?",
        "concept": {
            "intro": "유수 정리의 가장 인상적인 응용 중 하나는, 실수에서 직접 계산하기 어려운 적분을 복소 경로적분으로 변환하여 계산하는 것입니다.\n\n:::note[유형 1: 삼각함수 적분]\n$\\int_0^{2\\pi} R(\\cos\\theta, \\sin\\theta)\\,d\\theta$ 형태의 적분에서 단위원 $z = e^{i\\theta}$로 치환하면 $\\cos\\theta = \\frac{z+z^{-1}}{2}$, $\\sin\\theta = \\frac{z-z^{-1}}{2i}$, $d\\theta = \\frac{dz}{iz}$입니다. 삼각함수의 적분이 유리함수의 경로적분으로 변환되어, 유수 정리로 계산할 수 있습니다.\n:::\n\n:::note[유형 2: 실수 전체 적분]\n$\\int_{-\\infty}^{\\infty} f(x)\\,dx$ 형태의 적분에서 $f$가 적절한 감소 조건을 만족하면, 실수축 위의 적분을 반원 경로(semicircular contour)로 닫아 유수 정리를 적용합니다. $R \\to \\infty$에서 반원 호 위의 적분이 $0$으로 사라지면(ML 부등식 또는 조르당 보조정리), $\\int_{-\\infty}^{\\infty} f(x)\\,dx = 2\\pi i \\sum \\operatorname{Res}$(상반평면)이 됩니다.\n:::\n\n대표적 예로 $\\int_0^{\\infty} \\frac{1}{1+x^2}\\,dx$를 계산해 봅시다. $f(z) = \\frac{1}{1+z^2} = \\frac{1}{(z+i)(z-i)}$의 상반평면 극은 $z = i$. $\\operatorname{Res}(f, i) = \\frac{1}{2i}$. 따라서 $\\int_{-\\infty}^{\\infty} \\frac{dx}{1+x^2} = 2\\pi i \\cdot \\frac{1}{2i} = \\pi$. 피적분함수가 우함수이므로 $\\int_0^{\\infty} = \\frac{\\pi}{2}$. 이 결과는 $\\arctan x$를 이용한 실수 계산과 일치합니다.",
            "intuition": "실수 적분을 복소 적분으로 바꾸는 핵심 아이디어는 '열린 경로를 닫아 유수 정리를 적용한다'는 것입니다. 실수축은 열린 경로(직선)이므로 유수 정리를 바로 쓸 수 없습니다. 반원 호를 덧붙여 닫힌 경로를 만들고, 덧붙인 부분의 기여가 사라짐을 보이면, 실수축 위의 적분만 남게 됩니다.\n\n삼각함수 적분에서 $z = e^{i\\theta}$ 치환은 '원 위의 운동'을 '복소평면의 경로'로 바꾸는 것입니다. $\\cos\\theta$와 $\\sin\\theta$가 $z$와 $1/z$의 조합으로 변환되면, 삼각함수의 복잡한 조합이 유리함수가 됩니다.",
            "formula": "\\text{유형 1:}\\ z = e^{i\\theta},\\ \\cos\\theta = \\frac{z+z^{-1}}{2},\\ \\sin\\theta = \\frac{z-z^{-1}}{2i},\\ d\\theta = \\frac{dz}{iz}\n\\text{유형 2:}\\ \\int_{-\\infty}^{\\infty} f(x)\\,dx = 2\\pi i \\sum_{\\text{Im}(z_k)>0} \\text{Res}(f, z_k)\n\\int_0^{\\infty} \\frac{dx}{1+x^2} = \\frac{\\pi}{2}",
            "summary": ":::note[핵심 정리]\n• 유형 1: 삼각함수 적분 → 단위원 경로적분 ($z = e^{i\\theta}$ 치환)\n• 유형 2: 실수 전체 적분 → 반원 경로 + 유수 정리\n• 반원 호의 기여가 $0$으로 사라짐을 ML 부등식으로 확인\n• $\\int_0^{\\infty} \\frac{1}{1+x^2}\\,dx = \\pi/2$\n:::"
        },
        "examples": [
            {
                "title": "$\\int_0^{\\infty} \\frac{1}{1+x^2}\\,dx$ 계산",
                "problem": "유수 정리를 이용해 $\\int_0^{\\infty} \\frac{dx}{1+x^2}$를 계산하시오.",
                "steps": [
                    "$f(z) = \\frac{1}{1+z^2} = \\frac{1}{(z-i)(z+i)}$.",
                    "상반평면의 극: $z = i$ (단순극). 하반평면: $z = -i$.",
                    "$\\text{Res}(f, i) = \\lim_{z \\to i}(z-i) \\cdot \\frac{1}{(z-i)(z+i)} = \\frac{1}{2i}$.",
                    "상반원 경로로 닫고, ML 부등식으로 반원 호의 기여 $\\to 0$ ($R \\to \\infty$).",
                    "$\\int_{-\\infty}^{\\infty} \\frac{dx}{1+x^2} = 2\\pi i \\cdot \\frac{1}{2i} = \\pi$.",
                    "우함수이므로 $\\int_0^{\\infty} = \\frac{\\pi}{2}$."
                ],
                "answer": "$\\frac{\\pi}{2}$",
                "lesson": "이 결과는 $[\\arctan x]_0^{\\infty} = \\pi/2$와 일치합니다. 유수 정리는 $\\arctan$의 역할을 완벽히 대체하며, 더 복잡한 적분에도 체계적으로 적용할 수 있습니다."
            },
            {
                "title": "[기본] 삼각함수 적분의 복소 변환",
                "problem": "$z = e^{i\\theta}$ 치환을 이용하여 $\\int_0^{2\\pi} \\cos\\theta\\,d\\theta = 0$을 확인하시오.",
                "steps": [
                    "$z = e^{i\\theta}$이면 $\\cos\\theta = \\frac{z + z^{-1}}{2}$, $d\\theta = \\frac{dz}{iz}$.",
                    "$\\int_0^{2\\pi}\\cos\\theta\\,d\\theta = \\oint_{|z|=1} \\frac{z+z^{-1}}{2} \\cdot \\frac{dz}{iz} = \\frac{1}{2i}\\oint\\frac{z+z^{-1}}{z}\\,dz$.",
                    "$= \\frac{1}{2i}\\oint\\left(1 + \\frac{1}{z^2}\\right)dz$.",
                    "$\\oint 1\\,dz = 0$ (해석), $\\oint z^{-2}\\,dz = 0$ ($n = -2 \\neq -1$).",
                    "따라서 $\\int_0^{2\\pi}\\cos\\theta\\,d\\theta = 0$."
                ],
                "answer": "$0$",
                "lesson": "복소 변환 $z = e^{i\\theta}$는 삼각함수의 적분을 복소 경로적분으로 체계적으로 변환합니다. 이 간단한 예에서는 $\\oint z^n\\,dz$가 $n = -1$에서만 비영이라는 사실이 핵심입니다."
            },
            {
                "title": "[응용] 유수를 이용한 삼각함수 적분",
                "problem": "$\\int_0^{2\\pi} \\frac{d\\theta}{5 + 4\\cos\\theta}$를 계산하시오.",
                "steps": [
                    "$z = e^{i\\theta}$, $\\cos\\theta = \\frac{z+z^{-1}}{2}$, $d\\theta = \\frac{dz}{iz}$.",
                    "$\\int = \\oint_{|z|=1} \\frac{1}{5 + 4 \\cdot \\frac{z+z^{-1}}{2}} \\cdot \\frac{dz}{iz} = \\oint \\frac{1}{5 + 2z + 2z^{-1}} \\cdot \\frac{dz}{iz}$.",
                    "분모: $5 + 2z + 2/z = \\frac{2z^2 + 5z + 2}{z}$이므로 $\\int = \\oint \\frac{dz}{i(2z^2+5z+2)}$.",
                    "$2z^2 + 5z + 2 = (2z+1)(z+2)$. 영점: $z = -1/2$, $z = -2$.",
                    "$z = -1/2$만 $|z| < 1$ 내부. $\\text{Res} = \\frac{1}{i} \\cdot \\frac{1}{2(z+2)}\\Big|_{z=-1/2} = \\frac{1}{i} \\cdot \\frac{1}{3} = \\frac{1}{3i}$.",
                    "$\\int = 2\\pi i \\cdot \\frac{1}{3i} = \\frac{2\\pi}{3}$."
                ],
                "answer": "$\\frac{2\\pi}{3}$",
                "lesson": "삼각함수 적분을 단위원 경로적분으로 변환한 후, 유리함수의 극 중 단위원 내부에 있는 것만 골라 유수를 계산합니다. 경로 외부의 극은 기여하지 않습니다."
            },
            {
                "title": "[응용] 조르당 보조정리의 활용",
                "problem": "$\\int_{-\\infty}^{\\infty} \\frac{\\cos x}{x^2+1}\\,dx$를 계산하시오.",
                "steps": [
                    "$\\cos x = \\text{Re}(e^{ix})$이므로 $\\int_{-\\infty}^{\\infty}\\frac{e^{ix}}{x^2+1}\\,dx$의 실수부를 구한다.",
                    "$f(z) = \\frac{e^{iz}}{z^2+1} = \\frac{e^{iz}}{(z-i)(z+i)}$. 상반평면 극: $z = i$.",
                    "$\\text{Res}(f, i) = \\frac{e^{i \\cdot i}}{i + i} = \\frac{e^{-1}}{2i}$.",
                    "상반원 경로에서 조르당 보조정리에 의해 반원 호의 기여 $\\to 0$.",
                    "$\\int_{-\\infty}^{\\infty}\\frac{e^{ix}}{x^2+1}\\,dx = 2\\pi i \\cdot \\frac{e^{-1}}{2i} = \\frac{\\pi}{e}$.",
                    "$\\int_{-\\infty}^{\\infty}\\frac{\\cos x}{x^2+1}\\,dx = \\text{Re}\\left(\\frac{\\pi}{e}\\right) = \\frac{\\pi}{e}$."
                ],
                "answer": "$\\frac{\\pi}{e}$",
                "lesson": "$\\cos x$를 포함한 적분은 $e^{ix}$로 치환하고 상반원 경로를 사용합니다. 조르당 보조정리는 $e^{iz}$가 상반평면에서 지수적으로 감소하므로 반원 호의 기여가 사라짐을 보장합니다."
            },
            {
                "title": "[심화] 분지선을 이용한 적분",
                "problem": "$\\int_0^{\\infty} \\frac{x^{-1/2}}{x+1}\\,dx$를 유수 정리로 계산하시오.",
                "steps": [
                    "$f(z) = \\frac{z^{-1/2}}{z+1}$에서 $z^{-1/2}$의 주가지를 선택하고, 양의 실수축을 가지자름으로 설정.",
                    "열쇠구멍(keyhole) 경로를 사용: 양의 실수축 위·아래를 지나는 경로 + 큰 원 + 작은 원.",
                    "큰 원과 작은 원의 기여는 $\\to 0$.",
                    "양의 실수축 위: $z = x$, $z^{-1/2} = x^{-1/2}$. 아래: $z = xe^{2\\pi i}$, $z^{-1/2} = x^{-1/2}e^{-\\pi i} = -x^{-1/2}$.",
                    "따라서 $\\oint = \\int_0^\\infty \\frac{x^{-1/2}}{x+1}dx - \\int_0^\\infty \\frac{x^{-1/2}}{x+1}(-1)dx = 2\\int_0^\\infty \\frac{x^{-1/2}}{x+1}dx$.",
                    "$z = -1$에서 $\\text{Res} = (-1)^{-1/2} = e^{-i\\pi/2} \\cdot 1 = (e^{i\\pi})^{-1/2} = e^{-i\\pi/2} = -i$.",
                    "$2I = 2\\pi i \\cdot (-i) = 2\\pi$이므로 $I = \\pi$."
                ],
                "answer": "$\\pi$",
                "lesson": "다가함수를 포함한 적분에서는 가지자름을 설정하고 열쇠구멍 경로를 사용합니다. 가지자름 위·아래에서 함수값이 달라지는 것을 이용하여 원래 적분을 추출합니다."
            }
        ],
        "problems": [
            {
                "id": "14-1",
                "type": "choice",
                "difficulty": 1,
                "question": "실수 적분 $\\int_{-\\infty}^{\\infty} f(x)\\,dx$를 유수 정리로 계산할 때 사용하는 경로는?",
                "choices": [
                    "단위원",
                    "실수축 + 상반원 호 (반원 경로)",
                    "허수축만",
                    "정사각형 경로"
                ],
                "answer": "실수축 + 상반원 호 (반원 경로)",
                "hints": [
                    "실수축 위의 적분을 닫힌 경로로 만들어야 합니다.",
                    "반원 호를 덧붙여 닫힌 경로를 형성합니다.",
                    "반원 호의 기여가 $0$으로 사라져야 합니다."
                ],
                "explanation": "실수축 $[-R, R]$에 상반원 호(또는 하반원 호)를 붙여 닫힌 경로를 만듭니다. $R \\to \\infty$에서 반원 호의 기여가 사라지면, 남은 것은 실수축 적분 = 유수의 합입니다.",
                "wrongAnalysis": "단위원을 사용한다고 답하는 경우가 있습니다. 단위원은 삼각함수 적분(유형 1)에 사용되며, 실수 전체 적분(유형 2)에는 반원 경로를 사용합니다."
            },
            {
                "id": "14-2",
                "type": "number",
                "difficulty": 2,
                "question": "$\\int_{-\\infty}^{\\infty} \\frac{dx}{1+x^2}$의 값은? (소수 4째자리)",
                "answer": "3.1416",
                "hints": [
                    "$f(z) = 1/(1+z^2)$의 상반평면 극은 $z = i$.",
                    "$\\text{Res}(f, i) = 1/(2i)$.",
                    "$2\\pi i \\cdot 1/(2i) = \\pi \\approx 3.1416$."
                ],
                "explanation": "$\\int_{-\\infty}^{\\infty} \\frac{dx}{1+x^2} = 2\\pi i \\cdot \\text{Res}(f, i) = 2\\pi i \\cdot \\frac{1}{2i} = \\pi \\approx 3.1416$.",
                "wrongAnalysis": "$\\pi/2$로 답하는 실수가 있습니다. $\\pi/2$는 $\\int_0^{\\infty}$의 결과이고, $\\int_{-\\infty}^{\\infty}$는 $\\pi$입니다."
            },
            {
                "id": "14-3",
                "type": "choice",
                "difficulty": 3,
                "question": "$\\int_0^{2\\pi} \\frac{d\\theta}{2 + \\cos\\theta}$를 복소 적분으로 변환할 때, $\\cos\\theta$는 무엇으로 치환되는가?",
                "choices": [
                    "$\\frac{z+z^{-1}}{2}$",
                    "$\\frac{z-z^{-1}}{2i}$",
                    "$\\frac{z^2+1}{2z}$",
                    "$\\frac{z+z^{-1}}{2}$와 $\\frac{z^2+1}{2z}$는 같은 것이다"
                ],
                "answer": "$\\frac{z+z^{-1}}{2}$와 $\\frac{z^2+1}{2z}$는 같은 것이다",
                "hints": [
                    "$z = e^{i\\theta}$이면 $z^{-1} = e^{-i\\theta}$.",
                    "$\\cos\\theta = \\frac{e^{i\\theta}+e^{-i\\theta}}{2} = \\frac{z+z^{-1}}{2}$.",
                    "$\\frac{z+z^{-1}}{2} = \\frac{z+1/z}{2} = \\frac{z^2+1}{2z}$."
                ],
                "explanation": "$z = e^{i\\theta}$이면 $\\cos\\theta = \\frac{z+z^{-1}}{2}$입니다. 이를 정리하면 $\\frac{z^2+1}{2z}$와 같습니다. 두 표현은 동일하며, 삼각함수 적분을 유리함수의 경로적분으로 변환하는 핵심 치환입니다.",
                "wrongAnalysis": "$\\sin\\theta$의 치환 $\\frac{z-z^{-1}}{2i}$와 혼동하는 실수가 흔합니다. $\\cos$은 $+$, $\\sin$은 $-$이며, $\\sin$에는 $2i$가 분모입니다."
            },
            {
                "id": "14-4",
                "type": "choice",
                "difficulty": 1,
                "question": "삼각함수 적분 $\\int_0^{2\\pi} R(\\cos\\theta, \\sin\\theta)\\,d\\theta$를 복소 적분으로 변환할 때 사용하는 경로는?",
                "choices": [
                    "실수축 $[-R, R]$",
                    "단위원 $|z| = 1$",
                    "상반원 호",
                    "허수축"
                ],
                "answer": "단위원 $|z| = 1$",
                "hints": [
                    "$z = e^{i\\theta}$로 치환하면 $\\theta$가 $0$에서 $2\\pi$까지 변할 때 $z$는 단위원을 한 바퀴 돕니다.",
                    "삼각함수 적분은 유형 1, 실수 전체 적분은 유형 2입니다."
                ],
                "explanation": "$\\theta \\in [0, 2\\pi]$에서 $z = e^{i\\theta}$로 치환하면, $z$는 단위원 $|z| = 1$을 반시계 방향으로 한 바퀴 돕니다. $\\cos\\theta$와 $\\sin\\theta$가 $z$와 $z^{-1}$의 조합으로 변환되어 유리함수의 경로적분이 됩니다.",
                "wrongAnalysis": "상반원 경로를 사용한다고 답하는 실수가 있습니다. 상반원 경로는 실수 전체 적분(유형 2)에 사용되고, 삼각함수 적분(유형 1)에는 단위원을 사용합니다."
            },
            {
                "id": "14-5",
                "type": "text",
                "difficulty": 2,
                "question": "$\\int_{-\\infty}^{\\infty} \\frac{dx}{(1+x^2)^2}$의 값은? ($\\pi$를 사용하여 적으시오. 예: pi/2)",
                "answer": "pi/2",
                "hints": [
                    "$f(z) = \\frac{1}{(1+z^2)^2} = \\frac{1}{(z-i)^2(z+i)^2}$입니다.",
                    "상반평면의 극은 $z = i$ (2차 극)입니다.",
                    "$\\text{Res}(f, i) = \\frac{d}{dz}\\left[\\frac{1}{(z+i)^2}\\right]_{z=i} = \\frac{-2}{(2i)^3} = \\frac{-2}{-8i} = \\frac{1}{4i} = \\frac{-i}{4}$."
                ],
                "explanation": "$z = i$는 2차 극입니다. $\\text{Res}(f, i) = \\lim_{z \\to i} \\frac{d}{dz}\\frac{1}{(z+i)^2} = \\frac{-2}{(2i)^3} = \\frac{-2}{-8i} = \\frac{1}{4i} = \\frac{-i}{4}$. 따라서 $\\int_{-\\infty}^{\\infty} \\frac{dx}{(1+x^2)^2} = 2\\pi i \\cdot \\frac{-i}{4} = 2\\pi \\cdot \\frac{1}{4} = \\frac{\\pi}{2}$.",
                "wrongAnalysis": "단순극 공식을 적용하는 실수가 있습니다. $(z-i)^2$이므로 2차 극이며, 고차극 유수 공식을 사용해야 합니다."
            }
        ],
        "summary": {
            "keyPoints": [
                "삼각함수 적분: $z = e^{i\\theta}$ 치환으로 단위원 경로적분으로 변환.",
                "실수 전체 적분: 반원 경로를 붙여 닫고 유수 정리 적용.",
                "핵심: 보조 경로(반원 호)의 기여가 $0$으로 사라짐을 확인."
            ],
            "formulas": [
                "\\cos\\theta = \\frac{z+z^{-1}}{2},\\quad \\sin\\theta = \\frac{z-z^{-1}}{2i}",
                "\\int_{-\\infty}^{\\infty} f(x)\\,dx = 2\\pi i \\sum_{\\text{Im}(z_k)>0} \\text{Res}(f, z_k)",
                "\\int_0^{\\infty} \\frac{dx}{1+x^2} = \\frac{\\pi}{2}"
            ],
            "commonMistakes": [
                "$\\cos\\theta$와 $\\sin\\theta$의 치환 공식을 혼동하는 실수",
                "반원 호의 기여가 사라짐을 확인하지 않는 실수",
                "$\\int_0^{\\infty}$와 $\\int_{-\\infty}^{\\infty}$를 혼동하는 실수"
            ],
            "nextConnection": "유수 정리의 실수 적분 응용을 다루었습니다. 다음 레슨에서는 유수 정리를 활용하여 해석함수의 영점과 극점의 개수를 세는 편각원리와 루셰 정리를 배웁니다."
        }
    }
];
