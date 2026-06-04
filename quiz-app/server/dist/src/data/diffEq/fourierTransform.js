"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fourierTransformLessons = void 0;
exports.fourierTransformLessons = [
    {
        "id": 31,
        "title": "푸리에 급수와 푸리에 변환",
        "category": "적분변환",
        "level": "기초",
        "question": "주기함수를 삼각함수의 합으로 분해하는 푸리에 급수와, 이를 비주기 함수로 확장한 푸리에 변환은 어떻게 정의되는가?",
        "concept": {
            "intro": ":::definition[푸리에 급수 (Fourier Series)]\n주기 $T$인 함수 $f(x)$는 삼각함수의 무한급수로 표현할 수 있습니다:\n$$f(x) = \\frac{a_0}{2} + \\sum_{n=1}^{\\infty}\\left(a_n \\cos \\frac{2\\pi n x}{T} + b_n \\sin \\frac{2\\pi n x}{T}\\right)$$\n여기서 계수는 다음과 같이 구합니다:\n$$a_n = \\frac{2}{T}\\int_0^T f(x)\\cos\\frac{2\\pi nx}{T}\\,dx, \\quad b_n = \\frac{2}{T}\\int_0^T f(x)\\sin\\frac{2\\pi nx}{T}\\,dx$$\n:::\n\n이 급수는 복소 지수 형태로도 쓸 수 있습니다:\n$$f(x) = \\sum_{n=-\\infty}^{\\infty} c_n e^{i 2\\pi nx/T}, \\quad c_n = \\frac{1}{T}\\int_0^T f(x) e^{-i 2\\pi nx/T}\\,dx$$\n\n:::theorem[디리클레 수렴 조건]\n$f(x)$가 한 주기에서 유한 개의 불연속점과 유한 개의 극값을 가지면, 푸리에 급수는 연속점에서 $f(x)$로 수렴하고, 불연속점에서는 좌극한과 우극한의 평균 $\\frac{f(x^-)+f(x^+)}{2}$으로 수렴합니다.\n:::\n\n:::note[라플라스 변환에서 푸리에 변환으로]\n이전 단원에서 배운 라플라스 변환을 떠올려 봅시다:\n$$\\mathcal{L}\\{f\\}(s) = \\int_0^\\infty f(t)e^{-st}\\,dt, \\quad s = \\sigma + i\\omega$$\n\n여기서 $\\sigma = 0$으로 놓으면 $s = i\\omega$가 되어:\n$$\\mathcal{L}\\{f\\}(i\\omega) = \\int_0^\\infty f(t)e^{-i\\omega t}\\,dt$$\n\n이것은 푸리에 변환의 한쪽(단측) 버전입니다! 라플라스 변환이 복소평면 전체($s = \\sigma + i\\omega$)에서 정의되는 반면, 푸리에 변환은 허수축($\\sigma = 0$)에만 국한됩니다. 라플라스는 $t \\geq 0$인 한쪽(단측) 적분이지만, 푸리에는 전체 실수축 $(-\\infty, \\infty)$에서 적분합니다. 라플라스의 수렴 영역(ROC)이 허수축을 포함할 때, 두 변환은 정확히 일치합니다.\n:::\n\n:::definition[푸리에 변환 (Fourier Transform)]\n비주기 함수 $f(x)$에 대한 푸리에 변환은 다음과 같이 정의됩니다:\n$$\\hat{f}(\\xi) = \\mathcal{F}\\{f\\}(\\xi) = \\int_{-\\infty}^{\\infty} f(x) e^{-2\\pi i x\\xi}\\,dx$$\n역변환(Inverse Fourier Transform):\n$$f(x) = \\mathcal{F}^{-1}\\{\\hat{f}\\}(x) = \\int_{-\\infty}^{\\infty} \\hat{f}(\\xi) e^{2\\pi i x\\xi}\\,d\\xi$$\n:::\n\n:::note[$\\omega$ 컨벤션]\n물리학에서는 $\\omega = 2\\pi\\xi$를 사용하여 다음과 같이 쓰기도 합니다:\n$$\\hat{f}(\\omega) = \\int_{-\\infty}^{\\infty} f(x) e^{-i\\omega x}\\,dx, \\quad f(x) = \\frac{1}{2\\pi}\\int_{-\\infty}^{\\infty} \\hat{f}(\\omega) e^{i\\omega x}\\,d\\omega$$\n컨벤션마다 $2\\pi$ 인수의 위치가 달라지므로 주의가 필요합니다.\n:::\n\n:::theorem[푸리에 변환의 주요 성질]\n1. **선형성**: $\\mathcal{F}\\{af + bg\\} = a\\hat{f} + b\\hat{g}$\n2. **이동**: $\\mathcal{F}\\{f(x - a)\\}(\\xi) = e^{-2\\pi i a\\xi}\\hat{f}(\\xi)$\n3. **스케일링**: $\\mathcal{F}\\{f(ax)\\}(\\xi) = \\frac{1}{|a|}\\hat{f}\\left(\\frac{\\xi}{a}\\right)$\n4. **미분 → 곱셈**: $\\widehat{f'}(\\xi) = 2\\pi i\\xi\\,\\hat{f}(\\xi)$\n5. **곱셈 → 미분**: $\\widehat{xf(x)}(\\xi) = \\frac{1}{2\\pi i}\\hat{f}'(\\xi)$\n:::\n\n:::theorem[파시발/플랑쉐렐 정리 (Parseval/Plancherel)]\n$$\\int_{-\\infty}^{\\infty} |f(x)|^2\\,dx = \\int_{-\\infty}^{\\infty} |\\hat{f}(\\xi)|^2\\,d\\xi$$\n즉, $\\|f\\|_{L^2} = \\|\\hat{f}\\|_{L^2}$입니다. 이는 시간 영역의 에너지와 주파수 영역의 에너지가 동일함을 의미합니다.\n:::",
            "intuition": "푸리에 급수는 주기함수를 '순수한 음'(삼각함수)의 합으로 분해하는 것입니다. 악기의 음색이 기본 주파수와 배음(overtone)의 조합으로 결정되는 것과 같습니다. 주기 $T \\to \\infty$로 보내면 이산적인 주파수($n/T$)가 연속적인 주파수($\\xi$)로 바뀌고, 급수가 적분으로 전환됩니다 — 이것이 바로 푸리에 변환입니다.\n\n라플라스 변환과의 관계를 비유하면, 라플라스는 복소평면 전체를 내려다보는 위성 사진이고, 푸리에는 그 중 허수축($s = i\\omega$)이라는 한 줄만 잘라낸 파노라마입니다. 라플라스의 실수부 $\\sigma$가 '감쇠율'을 담당하므로, 감쇠 없이($\\sigma = 0$) 순수한 주파수 정보만 추출하면 푸리에 변환이 됩니다.\n\n파시발 정리는 '에너지 보존'의 수학적 표현입니다. 시간 영역에서 잰 총 에너지와 주파수 영역에서 잰 총 에너지가 같다는 뜻으로, 푸리에 변환이 $L^2$ 공간의 등거리 변환(isometry)임을 보장합니다.",
            "formula": "\\text{푸리에 급수:}\\ f(x) = \\frac{a_0}{2} + \\sum_{n=1}^{\\infty}\\left(a_n \\cos \\frac{2\\pi nx}{T} + b_n \\sin \\frac{2\\pi nx}{T}\\right)\na_n = \\frac{2}{T}\\int_0^T f(x)\\cos\\frac{2\\pi nx}{T}\\,dx,\\quad b_n = \\frac{2}{T}\\int_0^T f(x)\\sin\\frac{2\\pi nx}{T}\\,dx\n\\text{복소 형태:}\\ c_n = \\frac{1}{T}\\int_0^T f(x)e^{-i2\\pi nx/T}\\,dx\n\\text{푸리에 변환:}\\ \\hat{f}(\\xi) = \\int_{-\\infty}^{\\infty} f(x)e^{-2\\pi i x\\xi}\\,dx\n\\text{역변환:}\\ f(x) = \\int_{-\\infty}^{\\infty} \\hat{f}(\\xi)e^{2\\pi i x\\xi}\\,d\\xi\n\\text{미분:}\\ \\widehat{f'} = 2\\pi i\\xi\\,\\hat{f}\n\\text{파시발:}\\ \\|f\\|_{L^2} = \\|\\hat{f}\\|_{L^2}\n\\text{라플라스-푸리에 관계:}\\ \\mathcal{F}\\{f\\}(\\xi) = \\mathcal{L}\\{f\\}(s)\\big|_{s=2\\pi i\\xi} \\ (\\text{단측, ROC가 허수축 포함 시})",
            "summary": ":::note[요약]\n• 푸리에 급수: 주기함수 → 삼각함수의 합 (이산 주파수)\n• 푸리에 변환: 비주기함수 → 연속 주파수 분해\n• 라플라스에서 $s = i\\omega$ 놓으면 푸리에 (허수축 제한)\n• 파시발 정리: 시간/주파수 영역의 에너지 보존\n:::"
        },
        "examples": [
            {
                "title": "[기본] 사각파의 푸리에 급수",
                "problem": "주기 $T = 2\\pi$인 사각파 $f(x) = \\begin{cases} 1, & 0 < x < \\pi \\\\ -1, & \\pi < x < 2\\pi \\end{cases}$의 푸리에 급수를 구하시오.",
                "steps": [
                    "$f(x)$는 기함수(odd function)이므로 $a_n = 0$ (코사인 계수가 모두 0)입니다.",
                    "$b_n = \\dfrac{2}{2\\pi}\\displaystyle\\int_0^{2\\pi} f(x)\\sin(nx)\\,dx = \\dfrac{1}{\\pi}\\left[\\int_0^{\\pi} \\sin(nx)\\,dx - \\int_{\\pi}^{2\\pi} \\sin(nx)\\,dx\\right]$.",
                    "각 적분을 계산하면: $\\int_0^{\\pi} \\sin(nx)\\,dx = \\dfrac{1 - \\cos(n\\pi)}{n} = \\dfrac{1 - (-1)^n}{n}$.",
                    "마찬가지로 $\\int_{\\pi}^{2\\pi} \\sin(nx)\\,dx = \\dfrac{\\cos(n\\pi) - \\cos(2n\\pi)}{n} = \\dfrac{(-1)^n - 1}{n}$.",
                    "따라서 $b_n = \\dfrac{1}{\\pi} \\cdot \\dfrac{2(1-(-1)^n)}{n}$. $n$이 홀수이면 $b_n = \\dfrac{4}{n\\pi}$, 짝수이면 $b_n = 0$.",
                    "$f(x) = \\dfrac{4}{\\pi}\\displaystyle\\sum_{k=0}^{\\infty} \\dfrac{\\sin((2k+1)x)}{2k+1} = \\dfrac{4}{\\pi}\\left(\\sin x + \\dfrac{\\sin 3x}{3} + \\dfrac{\\sin 5x}{5} + \\cdots\\right)$."
                ],
                "answer": "$f(x) = \\dfrac{4}{\\pi}\\displaystyle\\sum_{k=0}^{\\infty} \\dfrac{\\sin((2k+1)x)}{2k+1}$",
                "lesson": "기함수는 사인 급수만, 우함수는 코사인 급수만 가집니다. 사각파의 불연속점에서는 급수가 좌·우 극한의 평균인 0으로 수렴합니다 (디리클레 조건). 또한 $x = \\pi/2$를 대입하면 라이프니츠 급수 $\\frac{\\pi}{4} = 1 - \\frac{1}{3} + \\frac{1}{5} - \\cdots$를 얻습니다."
            },
            {
                "title": "[기본] 가우시안의 푸리에 변환",
                "problem": "$f(x) = e^{-\\pi x^2}$의 푸리에 변환을 구하시오.",
                "steps": [
                    "$\\hat{f}(\\xi) = \\displaystyle\\int_{-\\infty}^{\\infty} e^{-\\pi x^2} e^{-2\\pi i x\\xi}\\,dx$.",
                    "지수를 합치면: $-\\pi x^2 - 2\\pi i x\\xi = -\\pi(x^2 + 2ix\\xi) = -\\pi(x + i\\xi)^2 - \\pi\\xi^2$.",
                    "$\\hat{f}(\\xi) = e^{-\\pi\\xi^2} \\displaystyle\\int_{-\\infty}^{\\infty} e^{-\\pi(x+i\\xi)^2}\\,dx$.",
                    "적분 경로를 실수축으로 이동(복소 해석학의 정리에 의해 정당화): $\\displaystyle\\int_{-\\infty}^{\\infty} e^{-\\pi u^2}\\,du = 1$.",
                    "따라서 $\\hat{f}(\\xi) = e^{-\\pi\\xi^2}$."
                ],
                "answer": "$\\hat{f}(\\xi) = e^{-\\pi\\xi^2}$ (가우시안은 푸리에 변환의 고유함수)",
                "lesson": "$e^{-\\pi x^2}$는 푸리에 변환에 의해 자기 자신으로 변환되는 특별한 함수(고유함수, eigenfunction)입니다. $\\pi$ 인수를 정확히 맞추면 이 아름다운 결과가 나옵니다. 가우시안의 이 성질은 양자역학과 신호처리에서 핵심적인 역할을 합니다."
            },
            {
                "title": "[응용] 라플라스-푸리에 관계 확인",
                "problem": "$f(t) = e^{-at}\\,(a > 0,\\, t \\geq 0)$에 대해 라플라스 변환에서 $s = i\\omega$를 대입한 결과와 (단측) 푸리에 변환이 일치함을 확인하시오.",
                "steps": [
                    "라플라스 변환: $\\mathcal{L}\\{e^{-at}\\}(s) = \\dfrac{1}{s+a}$. 수렴 조건: $\\text{Re}(s) > -a$.",
                    "$a > 0$이므로 ROC는 $\\text{Re}(s) > -a$이고, 이는 허수축 $\\text{Re}(s) = 0$을 포함합니다.",
                    "$s = i\\omega$를 대입: $\\mathcal{L}\\{e^{-at}\\}(i\\omega) = \\dfrac{1}{i\\omega + a} = \\dfrac{a - i\\omega}{a^2 + \\omega^2}$.",
                    "단측 푸리에 변환을 직접 계산: $\\displaystyle\\int_0^{\\infty} e^{-at} e^{-i\\omega t}\\,dt = \\int_0^{\\infty} e^{-(a+i\\omega)t}\\,dt = \\dfrac{1}{a + i\\omega}$.",
                    "두 결과가 정확히 일치합니다. $\\dfrac{1}{a + i\\omega} = \\dfrac{a - i\\omega}{a^2 + \\omega^2}$."
                ],
                "answer": "$\\mathcal{L}\\{e^{-at}\\}(i\\omega) = \\dfrac{1}{a + i\\omega}$ (라플라스와 푸리에 일치)",
                "lesson": "라플라스 변환의 수렴 영역(ROC)이 허수축을 포함하면 $s = i\\omega$ 대입이 유효하고, 그 결과가 푸리에 변환과 동일합니다. $a > 0$이면 $e^{-at}$가 충분히 빨리 감쇠하므로 ROC가 허수축을 포함합니다. 만약 $a \\leq 0$이면 ROC가 허수축을 포함하지 않아 대입이 불가능합니다."
            },
            {
                "title": "[응용] 미분 성질을 이용한 변환",
                "problem": "$f(x) = -2\\pi i x\\, e^{-\\pi x^2}$의 푸리에 변환을 미분 성질을 이용하여 구하시오.",
                "steps": [
                    "$g(x) = e^{-\\pi x^2}$로 놓으면, $g'(x) = -2\\pi x\\, e^{-\\pi x^2}$입니다.",
                    "따라서 $f(x) = i\\, g'(x)$.",
                    "푸리에 변환의 미분 성질: $\\widehat{g'}(\\xi) = 2\\pi i\\xi\\, \\hat{g}(\\xi)$.",
                    "앞선 예제에서 $\\hat{g}(\\xi) = e^{-\\pi\\xi^2}$이므로:",
                    "$\\hat{f}(\\xi) = i \\cdot 2\\pi i\\xi\\, e^{-\\pi\\xi^2} = -2\\pi\\xi\\, e^{-\\pi\\xi^2}$."
                ],
                "answer": "$\\hat{f}(\\xi) = -2\\pi\\xi\\, e^{-\\pi\\xi^2}$",
                "lesson": "푸리에 변환의 미분 성질 $\\widehat{f'} = 2\\pi i\\xi\\, \\hat{f}$를 이용하면, 복잡한 적분을 직접 계산하지 않고도 이미 알고 있는 변환에서 새로운 변환을 유도할 수 있습니다."
            },
            {
                "title": "[심화] 파시발 정리의 검증",
                "problem": "$f(x) = e^{-|x|}$에 대해 $\\|f\\|_{L^2}^2$와 $\\|\\hat{f}\\|_{L^2}^2$를 각각 계산하여 파시발 정리를 검증하시오.",
                "steps": [
                    "시간 영역 에너지: $\\displaystyle\\int_{-\\infty}^{\\infty} |e^{-|x|}|^2\\,dx = \\int_{-\\infty}^{\\infty} e^{-2|x|}\\,dx = 2\\int_0^{\\infty} e^{-2x}\\,dx = 2 \\cdot \\dfrac{1}{2} = 1$.",
                    "먼저 $\\hat{f}(\\xi)$를 구합니다: $\\hat{f}(\\xi) = \\displaystyle\\int_{-\\infty}^{\\infty} e^{-|x|} e^{-2\\pi i x\\xi}\\,dx$.",
                    "$= \\displaystyle\\int_{-\\infty}^{0} e^{x} e^{-2\\pi i x\\xi}\\,dx + \\int_{0}^{\\infty} e^{-x} e^{-2\\pi i x\\xi}\\,dx = \\dfrac{1}{1 - 2\\pi i\\xi} + \\dfrac{1}{1 + 2\\pi i\\xi} = \\dfrac{2}{1 + 4\\pi^2\\xi^2}$.",
                    "주파수 영역 에너지: $\\displaystyle\\int_{-\\infty}^{\\infty} \\left|\\dfrac{2}{1 + 4\\pi^2\\xi^2}\\right|^2 d\\xi = 4\\int_{-\\infty}^{\\infty} \\dfrac{d\\xi}{(1 + 4\\pi^2\\xi^2)^2}$.",
                    "$u = 2\\pi\\xi$로 치환하면 $= \\dfrac{4}{2\\pi}\\displaystyle\\int_{-\\infty}^{\\infty} \\dfrac{du}{(1+u^2)^2} = \\dfrac{2}{\\pi} \\cdot \\dfrac{\\pi}{2} = 1$.",
                    "양쪽 모두 1로 동일합니다. 파시발 정리가 성립합니다."
                ],
                "answer": "$\\|f\\|_{L^2}^2 = \\|\\hat{f}\\|_{L^2}^2 = 1$ (파시발 정리 검증 완료)",
                "lesson": "파시발 정리는 푸리에 변환이 $L^2$ 공간의 등거리 변환(isometry)임을 보장합니다. 이는 신호처리에서 '시간 영역의 총 에너지 = 주파수 영역의 총 에너지'로 해석되며, 변환 과정에서 정보가 손실되지 않음을 의미합니다."
            }
        ],
        "problems": [
            {
                "id": "31-1",
                "type": "choice",
                "difficulty": 1,
                "question": "주기 $2\\pi$인 함수 $f(x) = \\cos 3x$의 푸리에 급수에서 $a_3$의 값은?",
                "choices": [
                    "$1$",
                    "$0$",
                    "$3$",
                    "$\\dfrac{1}{2}$"
                ],
                "answer": "$1$",
                "hints": [
                    "$\\cos 3x$는 이미 하나의 코사인 항입니다.",
                    "삼각함수의 직교성을 생각해 보세요."
                ],
                "explanation": "$f(x) = \\cos 3x$는 그 자체가 $n=3$인 코사인 항이므로, $a_3 = 1$이고 다른 모든 계수는 0입니다. 직접 적분으로 확인: $a_3 = \\frac{1}{\\pi}\\int_0^{2\\pi} \\cos 3x \\cdot \\cos 3x\\,dx = \\frac{1}{\\pi} \\cdot \\pi = 1$.",
                "wrongAnalysis": "계수 공식의 $\\frac{2}{T}$ 인수를 $\\frac{1}{T}$로 잘못 쓰거나, $T = 2\\pi$일 때의 정규화를 혼동하는 실수가 있습니다. $T = 2\\pi$에서 $a_n = \\frac{1}{\\pi}\\int_0^{2\\pi} f(x)\\cos(nx)\\,dx$입니다."
            },
            {
                "id": "31-2",
                "type": "choice",
                "difficulty": 2,
                "question": "라플라스 변환 $\\mathcal{L}\\{f\\}(s)$에서 $s = i\\omega$로 놓으면 무엇이 되는가?",
                "choices": [
                    "푸리에 변환 (단측, ROC가 허수축 포함 시)",
                    "Z-변환",
                    "라플라스 역변환",
                    "이산 푸리에 변환"
                ],
                "answer": "푸리에 변환 (단측, ROC가 허수축 포함 시)",
                "hints": [
                    "$s = \\sigma + i\\omega$에서 $\\sigma$는 감쇠율, $\\omega$는 주파수입니다.",
                    "$\\sigma = 0$으로 놓으면 감쇠 없이 순수 주파수 성분만 남습니다."
                ],
                "explanation": "라플라스 변환 $F(s) = \\int_0^\\infty f(t)e^{-st}dt$에서 $s = i\\omega$를 대입하면 $F(i\\omega) = \\int_0^\\infty f(t)e^{-i\\omega t}dt$로, 이는 단측 푸리에 변환입니다. 단, 이 대입이 유효하려면 ROC가 허수축을 포함해야 합니다.",
                "wrongAnalysis": "ROC 조건을 무시하고 모든 함수에 $s = i\\omega$ 대입이 가능하다고 생각하는 것이 흔한 오류입니다. 예를 들어 $f(t) = e^{t}$의 라플라스 변환 ROC는 $\\text{Re}(s) > 1$이므로 허수축을 포함하지 않아 대입이 불가능합니다."
            },
            {
                "id": "31-3",
                "type": "text",
                "difficulty": 2,
                "question": "$\\hat{f}(\\xi) = \\int_{-\\infty}^{\\infty} f(x)e^{-2\\pi ix\\xi}dx$일 때, $\\widehat{f'}(\\xi)$를 $\\hat{f}(\\xi)$로 나타내시오. (식을 입력하세요)",
                "answer": "2\\pi i\\xi \\hat{f}(\\xi)",
                "hints": [
                    "부분적분을 적용하거나, $f'(x)$의 푸리에 변환 정의에서 출발하세요.",
                    "$e^{-2\\pi ix\\xi}$를 $x$로 미분하면 $-2\\pi i\\xi \\cdot e^{-2\\pi ix\\xi}$입니다."
                ],
                "explanation": "부분적분을 적용합니다: $\\widehat{f'}(\\xi) = \\int_{-\\infty}^{\\infty} f'(x)e^{-2\\pi ix\\xi}dx = [f(x)e^{-2\\pi ix\\xi}]_{-\\infty}^{\\infty} + 2\\pi i\\xi \\int_{-\\infty}^{\\infty} f(x)e^{-2\\pi ix\\xi}dx$. $f$가 충분히 빨리 감쇠하면 경계항이 0이므로 $\\widehat{f'} = 2\\pi i\\xi \\hat{f}$.",
                "wrongAnalysis": "$2\\pi i$ 인수를 빠뜨리거나 부호를 잘못 쓰는 실수가 흔합니다. $\\omega$ 컨벤션에서는 $\\widehat{f'} = i\\omega \\hat{f}$이므로 컨벤션 혼동에 주의하세요."
            },
            {
                "id": "31-4",
                "type": "choice",
                "difficulty": 3,
                "question": "파시발 정리 $\\|f\\|_{L^2} = \\|\\hat{f}\\|_{L^2}$의 물리적 의미로 가장 적절한 것은?",
                "choices": [
                    "시간 영역의 총 에너지와 주파수 영역의 총 에너지가 같다",
                    "푸리에 변환은 함수의 최댓값을 보존한다",
                    "시간 영역과 주파수 영역에서 함수의 형태가 같다",
                    "푸리에 변환은 미분 가능성을 보존한다"
                ],
                "answer": "시간 영역의 총 에너지와 주파수 영역의 총 에너지가 같다",
                "hints": [
                    "$\\|f\\|_{L^2}^2 = \\int |f(x)|^2 dx$는 '에너지'로 해석됩니다.",
                    "등거리 변환(isometry)의 의미를 생각하세요."
                ],
                "explanation": "파시발 정리 $\\int |f|^2 dx = \\int |\\hat{f}|^2 d\\xi$는 시간 영역에서 계산한 신호의 총 에너지와 주파수 영역에서 계산한 총 에너지가 동일함을 말합니다. 이는 푸리에 변환이 $L^2$ 공간 위의 유니터리(등거리) 변환임을 의미하며, 변환 과정에서 정보가 손실되지 않음을 보장합니다.",
                "wrongAnalysis": "파시발 정리는 $L^2$ 노름(제곱 적분)의 보존이지, $L^\\infty$ 노름(최댓값)이나 함수의 형태 보존이 아닙니다. 예를 들어 $e^{-\\pi x^2}$와 $e^{-\\pi\\xi^2}$는 같은 형태이지만, 이는 가우시안의 특수한 성질이지 일반적인 것은 아닙니다."
            }
        ],
        "summary": {
            "keyPoints": [
                "푸리에 급수: 주기 $T$ 함수를 $\\sin, \\cos$의 급수로 분해 (계수 $a_n, b_n$ 공식)",
                "푸리에 변환: $T \\to \\infty$로 확장하여 비주기 함수에 적용",
                "라플라스 변환에서 $s = i\\omega$ (허수축 제한)이 곧 푸리에 변환",
                "파시발 정리: $\\|f\\|_{L^2} = \\|\\hat{f}\\|_{L^2}$ (에너지 보존)"
            ],
            "formulas": [
                "f(x) = \\frac{a_0}{2} + \\sum_{n=1}^{\\infty}(a_n\\cos\\frac{2\\pi nx}{T} + b_n\\sin\\frac{2\\pi nx}{T})",
                "\\hat{f}(\\xi) = \\int_{-\\infty}^{\\infty} f(x)e^{-2\\pi ix\\xi}\\,dx",
                "f(x) = \\int_{-\\infty}^{\\infty} \\hat{f}(\\xi)e^{2\\pi ix\\xi}\\,d\\xi",
                "\\widehat{f'} = 2\\pi i\\xi\\,\\hat{f}",
                "\\|f\\|_{L^2} = \\|\\hat{f}\\|_{L^2}"
            ],
            "commonMistakes": [
                "$2\\pi$ 인수의 컨벤션 혼동 ($\\xi$ vs $\\omega$ 컨벤션)",
                "라플라스에서 $s = i\\omega$ 대입 시 ROC 조건 무시",
                "푸리에 급수 계수에서 $a_0$의 $1/2$ 인수 누락",
                "기함수/우함수에 따른 급수 형태 혼동"
            ],
            "nextConnection": "다음 단원에서는 푸리에 변환을 이용하여 ODE/PDE를 풀고, 합성곱 정리·불확정성 원리·DFT/FFT를 배웁니다."
        }
    },
    {
        "id": 32,
        "title": "푸리에 변환의 응용",
        "category": "적분변환",
        "level": "기초",
        "question": "푸리에 변환으로 미분방정식을 어떻게 풀고, 신호처리와 PDE에 어떻게 활용하는가?",
        "concept": {
            "intro": ":::note[복습: 핵심 도구]\n푸리에 변환의 미분 성질 $\\widehat{f'} = 2\\pi i\\xi\\,\\hat{f}$에 의해, 미분방정식을 주파수 영역의 대수방정식으로 바꿀 수 있습니다. 이는 라플라스 변환이 ODE를 대수 방정식으로 바꾸는 것과 같은 원리입니다.\n:::\n\n:::definition[ODE에의 응용]\n상수계수 ODE $a y'' + b y' + c y = f(x)$에 양변 푸리에 변환을 적용하면:\n$$a(2\\pi i\\xi)^2 \\hat{y} + b(2\\pi i\\xi)\\hat{y} + c\\hat{y} = \\hat{f}$$\n$$\\hat{y}(\\xi) = \\frac{\\hat{f}(\\xi)}{c - 4\\pi^2 a\\xi^2 + 2\\pi i b\\xi}$$\n$\\hat{y}$를 역변환하면 해 $y(x)$를 얻습니다.\n:::\n\n:::theorem[PDE에의 응용 — 열방정식]\n무한 막대에서의 열방정식 $u_t = k\\,u_{xx}$, $u(x,0) = \\phi(x)$를 풀어봅시다.\n\n$x$에 대해 푸리에 변환을 적용하면:\n$$\\hat{u}_t(\\xi, t) = k(2\\pi i\\xi)^2 \\hat{u}(\\xi, t) = -4\\pi^2 k\\xi^2 \\hat{u}(\\xi, t)$$\n\n이것은 $\\xi$를 파라미터로 갖는 1계 ODE입니다! 해는:\n$$\\hat{u}(\\xi, t) = \\hat{\\phi}(\\xi)\\, e^{-4\\pi^2 k\\xi^2 t}$$\n\n역변환하면:\n$$u(x,t) = \\int_{-\\infty}^{\\infty} \\hat{\\phi}(\\xi)\\, e^{-4\\pi^2 k\\xi^2 t}\\, e^{2\\pi i x\\xi}\\, d\\xi$$\n\n이는 합성곱으로 다시 쓸 수 있습니다: $u(x,t) = \\phi * G_t$, 여기서 $G_t(x) = \\frac{1}{\\sqrt{4\\pi kt}}\\, e^{-x^2/(4kt)}$는 열핵(heat kernel)입니다.\n:::\n\n:::note[파동방정식에의 적용]\n파동방정식 $u_{tt} = c^2 u_{xx}$에 같은 방법을 적용하면:\n$$\\hat{u}_{tt} = -4\\pi^2 c^2 \\xi^2 \\hat{u}$$\n\n이것은 $\\hat{u}(\\xi, t) = A(\\xi)\\cos(2\\pi c\\xi t) + B(\\xi)\\sin(2\\pi c\\xi t)$ 형태의 해를 가집니다. 초기조건 $u(x,0) = \\phi(x)$, $u_t(x,0) = \\psi(x)$에서 $A = \\hat{\\phi}$, $B = \\frac{\\hat{\\psi}}{2\\pi c\\xi}$를 결정하고 역변환하면 달랑베르 공식과 동치인 해를 얻습니다.\n:::\n\n:::theorem[합성곱 정리 (Convolution Theorem)]\n두 함수의 합성곱 $(f * g)(x) = \\int_{-\\infty}^{\\infty} f(\\tau)\\,g(x - \\tau)\\,d\\tau$에 대해:\n$$\\widehat{f * g} = \\hat{f} \\cdot \\hat{g}$$\n\n즉, **시간 영역의 합성곱은 주파수 영역의 곱셈**에 대응합니다.\n\n역으로, **시간 영역의 곱셈은 주파수 영역의 합성곱**에 대응합니다:\n$$\\widehat{f \\cdot g} = \\hat{f} * \\hat{g}$$\n:::\n\n:::note[LTI 시스템과의 연결]\n선형 시불변(Linear Time-Invariant, LTI) 시스템에서 입력 $x(t)$에 대한 출력은 $y(t) = x * h(t)$입니다. 여기서 $h(t)$는 임펄스 응답입니다. 합성곱 정리에 의해 주파수 영역에서는 $\\hat{y} = \\hat{x} \\cdot \\hat{h}$로 간단히 곱셈이 됩니다. $\\hat{h}(\\xi)$를 전달함수(transfer function)라 합니다. 이 관점은 라플라스 변환에서의 전달함수 $H(s)$와 직접 연결됩니다: $H(i\\omega) = \\hat{h}(\\omega)$.\n:::\n\n:::theorem[하이젠베르크 불확정성 원리]\n$$\\Delta x \\cdot \\Delta \\xi \\geq \\frac{1}{4\\pi}$$\n\n여기서 $\\Delta x$는 시간 영역에서의 표준편차, $\\Delta \\xi$는 주파수 영역에서의 표준편차입니다. 이 부등식은 시간(또는 공간)과 주파수를 동시에 임의로 정밀하게 국소화할 수 없음을 말합니다.\n\n등호는 가우시안 $f(x) = Ce^{-\\alpha x^2}$일 때만 성립합니다. 이것이 가우시안이 '가장 효율적인' 시간-주파수 국소화를 갖는 이유입니다.\n:::\n\n:::definition[이산 푸리에 변환(DFT)과 FFT]\n유한 개의 이산 데이터 $\\{x_0, x_1, \\ldots, x_{N-1}\\}$에 대한 이산 푸리에 변환은:\n$$X_k = \\sum_{n=0}^{N-1} x_n\\, e^{-2\\pi i kn/N}, \\quad k = 0, 1, \\ldots, N-1$$\n\n직접 계산하면 $O(N^2)$이지만, **고속 푸리에 변환(FFT, Fast Fourier Transform)**은 분할 정복(divide and conquer) 전략으로 $O(N \\log N)$에 계산합니다. 쿨리-튜키(Cooley-Tukey) 알고리즘이 가장 유명합니다. 디지털 신호처리, 이미지 압축(JPEG), 오디오 코덱(MP3) 등 현대 기술의 핵심입니다.\n:::",
            "intuition": "ODE/PDE에서 푸리에 변환의 역할은 라플라스 변환과 같습니다 — 미분을 곱셈으로 바꾸어 어려운 미분방정식을 쉬운 대수방정식으로 변환합니다. 차이점은 라플라스가 초기값 문제(반직선 $t \\geq 0$)에 강한 반면, 푸리에는 전체 실수축 문제에 적합하다는 것입니다.\n\n합성곱 정리는 '섞기 vs 곱하기'의 이중성입니다. 시간 영역에서 복잡한 합성곱 연산이 주파수 영역에서는 단순한 곱셈이 됩니다. 이 때문에 FFT를 이용한 합성곱 계산이 직접 계산보다 훨씬 빠릅니다.\n\n불확정성 원리는 음악에서 직관적으로 이해됩니다. 아주 짧은 '틱' 소리($\\Delta t$ 작음)는 많은 주파수를 포함하고($\\Delta \\xi$ 큼), 순수한 하나의 음($\\Delta \\xi$ 작음)은 끝없이 지속되어야 합니다($\\Delta t$ 큼). 시간 정밀도와 주파수 정밀도는 동시에 최적화할 수 없는 트레이드오프 관계입니다.",
            "formula": "\\text{열방정식 해:}\\ u(x,t) = \\phi * G_t,\\quad G_t(x) = \\frac{1}{\\sqrt{4\\pi kt}}e^{-x^2/(4kt)}\n\\text{합성곱 정리:}\\ \\widehat{f * g} = \\hat{f} \\cdot \\hat{g}\n\\text{불확정성 원리:}\\ \\Delta x \\cdot \\Delta \\xi \\geq \\frac{1}{4\\pi}\n\\text{DFT:}\\ X_k = \\sum_{n=0}^{N-1} x_n e^{-2\\pi i kn/N}\n\\text{FFT 복잡도:}\\ O(N\\log N)\n\\text{LTI 출력:}\\ \\hat{y} = \\hat{x} \\cdot \\hat{h}",
            "summary": ":::note[요약]\n• ODE/PDE: 미분 → 대수 (열방정식 $\\hat{u}_t = -4\\pi^2 k\\xi^2 \\hat{u}$)\n• 합성곱 정리: 시간 합성곱 ↔ 주파수 곱셈\n• 불확정성 원리: $\\Delta x \\cdot \\Delta \\xi \\geq 1/(4\\pi)$\n• DFT/FFT: 이산 데이터의 주파수 분석, $O(N\\log N)$\n:::"
        },
        "examples": [
            {
                "title": "[기본] 열방정식의 푸리에 변환 풀이",
                "problem": "무한 막대에서 $u_t = u_{xx}$, $u(x,0) = e^{-x^2}$을 푸리에 변환으로 풀어라.",
                "steps": [
                    "$x$에 대해 양변 푸리에 변환: $\\hat{u}_t = (2\\pi i\\xi)^2 \\hat{u} = -4\\pi^2\\xi^2 \\hat{u}$.",
                    "이것은 $\\xi$를 파라미터로 하는 1계 ODE: $\\dfrac{d\\hat{u}}{dt} = -4\\pi^2\\xi^2 \\hat{u}$.",
                    "해: $\\hat{u}(\\xi, t) = \\hat{u}(\\xi, 0) \\cdot e^{-4\\pi^2\\xi^2 t}$.",
                    "초기조건: $\\hat{u}(\\xi, 0) = \\widehat{e^{-x^2}}(\\xi)$. $e^{-\\pi(x/\\sqrt{\\pi})^2}$이므로 스케일링 성질에 의해 $\\hat{u}(\\xi,0) = \\sqrt{\\pi}\\, e^{-\\pi^2\\xi^2}$.",
                    "$\\hat{u}(\\xi, t) = \\sqrt{\\pi}\\, e^{-\\pi^2\\xi^2} \\cdot e^{-4\\pi^2\\xi^2 t} = \\sqrt{\\pi}\\, e^{-\\pi^2\\xi^2(1+4t)}$.",
                    "역변환 (가우시안의 역변환): $u(x,t) = \\dfrac{1}{\\sqrt{1+4t}}\\, e^{-x^2/(1+4t)}$."
                ],
                "answer": "$u(x,t) = \\dfrac{1}{\\sqrt{1+4t}}\\, e^{-x^2/(1+4t)}$",
                "lesson": "열방정식에 푸리에 변환을 적용하면 $x$-편미분이 대수적 곱셈으로 바뀌어, 각 주파수 성분 $\\xi$에 대한 독립적인 1계 ODE가 됩니다. 해는 시간이 지남에 따라 가우시안이 점점 넓어지고 낮아지는(확산하는) 형태입니다."
            },
            {
                "title": "[기본] 합성곱 정리 활용",
                "problem": "$f(x) = e^{-|x|}$, $g(x) = e^{-|x|}$일 때, $(f * g)(x)$의 푸리에 변환을 구하시오.",
                "steps": [
                    "합성곱 정리: $\\widehat{f * g} = \\hat{f} \\cdot \\hat{g}$.",
                    "앞서 구한 바와 같이 $\\hat{f}(\\xi) = \\dfrac{2}{1 + 4\\pi^2\\xi^2}$.",
                    "$f = g$이므로 $\\hat{g}(\\xi) = \\dfrac{2}{1 + 4\\pi^2\\xi^2}$.",
                    "$\\widehat{f * g}(\\xi) = \\hat{f}(\\xi) \\cdot \\hat{g}(\\xi) = \\dfrac{4}{(1 + 4\\pi^2\\xi^2)^2}$.",
                    "직접 합성곱을 계산하는 것보다 훨씬 간단합니다."
                ],
                "answer": "$\\widehat{f * g}(\\xi) = \\dfrac{4}{(1 + 4\\pi^2\\xi^2)^2}$",
                "lesson": "합성곱을 직접 계산하려면 $\\int_{-\\infty}^{\\infty} e^{-|\\tau|} e^{-|x-\\tau|} d\\tau$를 구간별로 나누어야 하지만, 주파수 영역에서는 단순 곱셈입니다. 이것이 합성곱 정리의 실용적 가치입니다."
            },
            {
                "title": "[응용] ODE를 푸리에 변환으로 풀기",
                "problem": "$y'' - y = e^{-|x|}$ ($x \\in \\mathbb{R}$)을 푸리에 변환으로 풀어라.",
                "steps": [
                    "양변 푸리에 변환: $(2\\pi i\\xi)^2 \\hat{y} - \\hat{y} = \\widehat{e^{-|x|}}$.",
                    "$(-4\\pi^2\\xi^2 - 1)\\hat{y} = \\dfrac{2}{1 + 4\\pi^2\\xi^2}$.",
                    "$\\hat{y}(\\xi) = \\dfrac{2}{(1 + 4\\pi^2\\xi^2)(-1 - 4\\pi^2\\xi^2)} = \\dfrac{-2}{(1 + 4\\pi^2\\xi^2)^2}$.",
                    "부분분수로 쓰면: $\\hat{y}(\\xi) = \\dfrac{-2}{(1 + 4\\pi^2\\xi^2)^2}$.",
                    "역변환: 이 형태의 역변환을 구하면 $y(x) = -\\frac{1}{2}(1 + |x|)e^{-|x|}$.",
                    "검증: $y' = -\\frac{1}{2}(-|x|)e^{-|x|} \\cdot \\text{sgn}(x)$ 등을 통해 원래 방정식을 만족함을 확인합니다."
                ],
                "answer": "$y(x) = -\\dfrac{1}{2}(1 + |x|)e^{-|x|}$",
                "lesson": "전체 실수축에서 정의된 비동차 ODE를 푸리에 변환으로 풀면, 경계조건 대신 $|x| \\to \\infty$에서 해가 감쇠한다는 자연스러운 조건이 자동으로 부과됩니다. 이는 라플라스 변환이 초기조건을 자동 포함하는 것과 유사합니다."
            },
            {
                "title": "[응용] 불확정성 원리의 검증",
                "problem": "$f(x) = e^{-\\alpha x^2}$ ($\\alpha > 0$)에 대해 $\\Delta x \\cdot \\Delta \\xi$를 구하고 불확정성 원리를 검증하시오.",
                "steps": [
                    "$|f(x)|^2 = e^{-2\\alpha x^2}$의 분산: $\\sigma_x^2 = \\dfrac{\\int x^2 e^{-2\\alpha x^2} dx}{\\int e^{-2\\alpha x^2} dx} = \\dfrac{1}{4\\alpha}$.",
                    "따라서 $\\Delta x = \\sigma_x = \\dfrac{1}{2\\sqrt{\\alpha}}$.",
                    "푸리에 변환: $\\hat{f}(\\xi) = \\sqrt{\\dfrac{\\pi}{\\alpha}} e^{-\\pi^2\\xi^2/\\alpha}$.",
                    "$|\\hat{f}(\\xi)|^2 = \\dfrac{\\pi}{\\alpha} e^{-2\\pi^2\\xi^2/\\alpha}$의 분산: $\\sigma_\\xi^2 = \\dfrac{\\alpha}{4\\pi^2}$.",
                    "따라서 $\\Delta \\xi = \\sigma_\\xi = \\dfrac{\\sqrt{\\alpha}}{2\\pi}$.",
                    "$\\Delta x \\cdot \\Delta \\xi = \\dfrac{1}{2\\sqrt{\\alpha}} \\cdot \\dfrac{\\sqrt{\\alpha}}{2\\pi} = \\dfrac{1}{4\\pi}$.",
                    "이는 불확정성 원리 $\\Delta x \\cdot \\Delta \\xi \\geq \\dfrac{1}{4\\pi}$에서 등호가 성립하는 경우입니다."
                ],
                "answer": "$\\Delta x \\cdot \\Delta \\xi = \\dfrac{1}{4\\pi}$ (등호 성립, 가우시안은 최적)",
                "lesson": "가우시안은 불확정성 원리의 등호를 달성하는 유일한 함수입니다. 이는 가우시안이 시간-주파수 동시 국소화를 최적으로 달성함을 의미하며, 양자역학에서 최소 불확정성 파동 묶음(coherent state)에 해당합니다."
            },
            {
                "title": "[심화] LTI 시스템과 전달함수",
                "problem": "임펄스 응답이 $h(t) = e^{-2t}u(t)$ ($u(t)$: 헤비사이드 함수)인 LTI 시스템에 입력 $x(t) = e^{-t}u(t)$가 들어올 때, 출력의 푸리에 변환 $\\hat{y}(\\xi)$를 구하시오.",
                "steps": [
                    "LTI 시스템: $y = x * h$이므로 $\\hat{y} = \\hat{x} \\cdot \\hat{h}$.",
                    "$\\hat{x}(\\xi) = \\displaystyle\\int_0^{\\infty} e^{-t} e^{-2\\pi i\\xi t}\\,dt = \\dfrac{1}{1 + 2\\pi i\\xi}$.",
                    "$\\hat{h}(\\xi) = \\displaystyle\\int_0^{\\infty} e^{-2t} e^{-2\\pi i\\xi t}\\,dt = \\dfrac{1}{2 + 2\\pi i\\xi}$.",
                    "$\\hat{y}(\\xi) = \\dfrac{1}{(1 + 2\\pi i\\xi)(2 + 2\\pi i\\xi)}$.",
                    "이는 라플라스 영역에서 $Y(s) = \\dfrac{1}{(s+1)(s+2)}$에서 $s = 2\\pi i\\xi$를 대입한 것과 일치합니다."
                ],
                "answer": "$\\hat{y}(\\xi) = \\dfrac{1}{(1 + 2\\pi i\\xi)(2 + 2\\pi i\\xi)}$",
                "lesson": "LTI 시스템의 주파수 응답 $\\hat{h}(\\xi)$는 라플라스 전달함수 $H(s)$의 허수축 제한입니다: $\\hat{h}(\\xi) = H(2\\pi i\\xi)$. 라플라스와 푸리에 관점은 같은 시스템을 다른 창으로 보는 것입니다."
            }
        ],
        "problems": [
            {
                "id": "32-1",
                "type": "choice",
                "difficulty": 1,
                "question": "합성곱 정리에 의하면 $\\widehat{f * g}$는 무엇과 같은가?",
                "choices": [
                    "$\\hat{f} \\cdot \\hat{g}$",
                    "$\\hat{f} * \\hat{g}$",
                    "$\\hat{f} + \\hat{g}$",
                    "$\\hat{f} / \\hat{g}$"
                ],
                "answer": "$\\hat{f} \\cdot \\hat{g}$",
                "hints": [
                    "시간 영역의 합성곱은 주파수 영역에서 어떤 연산에 대응하는지 떠올려 보세요.",
                    "라플라스 변환에서도 같은 성질이 있었습니다: $\\mathcal{L}\\{f * g\\} = F \\cdot G$."
                ],
                "explanation": "합성곱 정리: $\\widehat{f * g} = \\hat{f} \\cdot \\hat{g}$. 시간 영역에서의 합성곱은 주파수 영역에서의 단순한 곱셈에 대응합니다. 이는 라플라스 변환의 합성곱 정리와 동일한 구조입니다.",
                "wrongAnalysis": "합성곱 정리와 곱 정리를 혼동하는 실수가 있습니다. 시간 영역 합성곱 → 주파수 영역 곱셈이고, 반대로 시간 영역 곱셈 → 주파수 영역 합성곱입니다."
            },
            {
                "id": "32-2",
                "type": "choice",
                "difficulty": 2,
                "question": "열방정식 $u_t = k u_{xx}$에 $x$-방향 푸리에 변환을 적용하면 $\\hat{u}(\\xi,t)$에 대한 방정식은?",
                "choices": [
                    "$\\hat{u}_t = -4\\pi^2 k\\xi^2 \\hat{u}$",
                    "$\\hat{u}_t = k\\xi^2 \\hat{u}$",
                    "$\\hat{u}_t = 2\\pi ik\\xi \\hat{u}$",
                    "$\\hat{u}_t = -k\\xi \\hat{u}$"
                ],
                "answer": "$\\hat{u}_t = -4\\pi^2 k\\xi^2 \\hat{u}$",
                "hints": [
                    "$u_{xx}$에 푸리에 변환을 두 번 적용하면 $(2\\pi i\\xi)^2$가 곱해집니다.",
                    "$(2\\pi i\\xi)^2 = -4\\pi^2\\xi^2$입니다."
                ],
                "explanation": "$\\widehat{u_{xx}} = (2\\pi i\\xi)^2 \\hat{u} = -4\\pi^2\\xi^2 \\hat{u}$이므로, 열방정식 $u_t = ku_{xx}$는 $\\hat{u}_t = -4\\pi^2 k\\xi^2 \\hat{u}$가 됩니다. 이것은 $\\xi$를 파라미터로 갖는 1계 ODE로, 해는 $\\hat{u} = \\hat{\\phi}(\\xi)e^{-4\\pi^2k\\xi^2 t}$입니다.",
                "wrongAnalysis": "$(2\\pi i\\xi)^2$를 계산할 때 $i^2 = -1$을 빠뜨려 부호를 틀리거나, $2\\pi$ 인수를 누락하는 실수가 흔합니다."
            },
            {
                "id": "32-3",
                "type": "text",
                "difficulty": 3,
                "question": "불확정성 원리 $\\Delta x \\cdot \\Delta \\xi \\geq C$에서 상수 $C$의 값은? ($\\xi$ 컨벤션 기준, 분수로 답하시오)",
                "answer": "1/(4pi)",
                "hints": [
                    "이 부등식은 시간과 주파수의 동시 국소화에 한계를 줍니다.",
                    "등호는 가우시안 $e^{-\\alpha x^2}$일 때 성립합니다."
                ],
                "explanation": "하이젠베르크 불확정성 원리에 의하면 $\\Delta x \\cdot \\Delta \\xi \\geq \\frac{1}{4\\pi}$입니다. 여기서 $\\Delta x, \\Delta \\xi$는 각각 $|f|^2, |\\hat{f}|^2$를 확률밀도로 본 표준편차입니다. 등호는 가우시안일 때만 성립합니다.",
                "wrongAnalysis": "$\\omega$ 컨벤션($\\omega = 2\\pi\\xi$)에서는 $\\Delta x \\cdot \\Delta \\omega \\geq \\frac{1}{2}$이 됩니다. 컨벤션에 따라 상수가 달라지므로 주의하세요."
            },
            {
                "id": "32-4",
                "type": "choice",
                "difficulty": 2,
                "question": "DFT의 직접 계산 복잡도가 $O(N^2)$일 때, FFT를 사용하면 복잡도는?",
                "choices": [
                    "$O(N \\log N)$",
                    "$O(N)$",
                    "$O(N^{3/2})$",
                    "$O(\\log N)$"
                ],
                "answer": "$O(N \\log N)$",
                "hints": [
                    "FFT는 분할 정복(divide and conquer) 전략을 사용합니다.",
                    "$N$개의 데이터를 반으로 나누어 재귀적으로 처리합니다."
                ],
                "explanation": "FFT(고속 푸리에 변환)는 쿨리-튜키 알고리즘 등을 이용하여 DFT를 $O(N \\log N)$에 계산합니다. $N$-점 DFT를 두 개의 $N/2$-점 DFT로 분할하는 재귀적 구조입니다. $N = 10^6$일 때 직접 계산($10^{12}$ 연산)과 FFT($2 \\times 10^7$ 연산)의 차이는 약 5만 배입니다.",
                "wrongAnalysis": "FFT가 $O(N)$이라고 착각하는 경우가 있지만, $\\log N$ 인수는 재귀 깊이에서 필연적으로 발생합니다."
            }
        ],
        "summary": {
            "keyPoints": [
                "ODE/PDE에서 미분 → 대수적 곱셈으로 변환 (라플라스와 동일 원리)",
                "열방정식: $\\hat{u}_t = -4\\pi^2 k\\xi^2 \\hat{u}$ → 열핵(heat kernel)과 합성곱",
                "합성곱 정리: $\\widehat{f*g} = \\hat{f} \\cdot \\hat{g}$ (LTI 시스템의 기초)",
                "불확정성 원리: $\\Delta x \\cdot \\Delta \\xi \\geq 1/(4\\pi)$ (시간-주파수 트레이드오프)",
                "DFT/FFT: $O(N^2) \\to O(N\\log N)$ (디지털 신호처리의 핵심)"
            ],
            "formulas": [
                "u(x,t) = \\phi * G_t,\\quad G_t(x) = \\frac{1}{\\sqrt{4\\pi kt}} e^{-x^2/(4kt)}",
                "\\widehat{f * g} = \\hat{f} \\cdot \\hat{g}",
                "\\Delta x \\cdot \\Delta \\xi \\geq \\frac{1}{4\\pi}",
                "X_k = \\sum_{n=0}^{N-1} x_n e^{-2\\pi ikn/N}"
            ],
            "commonMistakes": [
                "열방정식 변환 시 $(2\\pi i\\xi)^2$의 부호 오류",
                "합성곱 정리와 곱 정리의 혼동",
                "불확정성 원리의 $\\xi$ vs $\\omega$ 컨벤션 혼동",
                "FFT 복잡도를 $O(N)$으로 잘못 기억"
            ],
            "nextConnection": "푸리에 변환은 PDE 풀이의 핵심 도구입니다. 이후 열방정식·파동방정식·라플라스 방정식의 체계적 풀이에서 반복적으로 활용됩니다."
        }
    }
];
