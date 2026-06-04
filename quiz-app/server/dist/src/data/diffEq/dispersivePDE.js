"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dispersivePDELessons = void 0;
exports.dispersivePDELessons = [
    {
        id: 24,
        title: "고전 조화해석학 핵심",
        category: "분산형 PDE 기초",
        level: "심화",
        question: "비선형 PDE를 다루기 위해 필요한 $L^p$ 추정과 Calderón-Zygmund 특이적분 이론이란 무엇인가?",
        concept: {
            intro: ":::definition[푸리에 변환과 완화 분포]\n분산형 PDE의 해석에서 가장 기본이 되는 도구는 푸리에 변환(Fourier transform)입니다. $f \\in L^1(\\mathbb{R}^n)$에 대해 푸리에 변환은 다음과 같이 정의됩니다:\n$$\\hat{f}(\\xi) = \\int_{\\mathbb{R}^n} f(x)\\,e^{-2\\pi i x \\cdot \\xi}\\,dx$$\n이 정의는 $L^1$을 넘어서 완화 분포(tempered distributions) $\\mathcal{S}'(\\mathbb{R}^n)$로 확장됩니다. 슈바르츠 공간(Schwartz space) $\\mathcal{S}(\\mathbb{R}^n)$은 모든 도함수가 다항식보다 빨리 감소하는 매끄러운 함수들의 공간이며, 푸리에 변환은 $\\mathcal{S}$에서 $\\mathcal{S}$로의 위상동형사상입니다.\n:::\n\n:::theorem[보간 정리]\n$L^p$ 추정에서 핵심적인 역할을 하는 것이 보간 정리(interpolation theorems)입니다.\n\n**Riesz-Thorin 보간 정리**: 선형 작용소 $T$가 $L^{p_0} \\to L^{q_0}$와 $L^{p_1} \\to L^{q_1}$에서 유계이면, 모든 $0 < \\theta < 1$에 대해 $T$는 $L^p \\to L^q$에서도 유계입니다. 여기서 $\\frac{1}{p} = \\frac{1-\\theta}{p_0} + \\frac{\\theta}{p_1}$, $\\frac{1}{q} = \\frac{1-\\theta}{q_0} + \\frac{\\theta}{q_1}$이며, $\\|T\\|_{L^p \\to L^q} \\le \\|T\\|_{L^{p_0} \\to L^{q_0}}^{1-\\theta}\\,\\|T\\|_{L^{p_1} \\to L^{q_1}}^{\\theta}$입니다.\n\n**Marcinkiewicz 보간 정리**: 약형(weak-type) 추정만으로도 보간이 가능합니다. $T$가 약형 $(p_0, q_0)$과 약형 $(p_1, q_1)$이면, 중간 지수에서 강형(strong-type) 유계성을 얻습니다.\n:::\n\n:::definition[Hardy-Littlewood 극대함수]\nHardy-Littlewood 극대함수는 $Mf(x) = \\sup_{r > 0} \\frac{1}{|B(x,r)|} \\int_{B(x,r)} |f(y)|\\,dy$로 정의됩니다. 이 작용소는 $L^1 \\to L^{1,\\infty}$(약형 $(1,1)$)이며, $1 < p \\le \\infty$에서 $L^p \\to L^p$ 유계입니다. Marcinkiewicz 보간 정리를 적용하면 약형 $(1,1)$과 강형 $(\\infty, \\infty)$로부터 $L^p$ 유계성을 얻습니다.\n:::\n\n:::theorem[Calderón-Zygmund 특이적분]\nCalderón-Zygmund(CZ) 이론은 특이적분 작용소의 $L^p$ 유계성을 체계적으로 다룹니다. CZ 커널 $K$는 다음 조건을 만족합니다:\n1. **크기 조건**: $|K(x)| \\le \\frac{C}{|x|^n}$, $x \\neq 0$\n2. **정칙성 조건(Hörmander 조건)**: $|K(x-y) - K(x)| \\le \\frac{C|y|^\\delta}{|x|^{n+\\delta}}$, $|x| > 2|y|$\n3. **$L^2$ 유계성**: $\\|Tf\\|_{L^2} \\le C\\|f\\|_{L^2}$\n\nCZ 정리에 의하면, 이 세 조건을 만족하는 작용소는 모든 $1 < p < \\infty$에서 $L^p$ 유계이며, $p = 1$에서 약형 $(1,1)$입니다.\n:::\n\n:::note[참고문헌]\nGrafakos, *Classical Fourier Analysis*; Stein-Shakarchi, *Fourier Analysis*; Stein, *Singular Integrals and Differentiability Properties of Functions*\n:::",
            intuition: "조화해석학의 핵심 아이디어는 '함수를 주파수 성분으로 분해하여 각 성분을 따로 추정한 뒤 다시 합치는' 것입니다. 푸리에 변환은 이 분해의 도구이고, 보간 정리는 '극단적인 경우의 추정을 알면 중간 경우도 자동으로 따라온다'는 원리입니다. Hardy-Littlewood 극대함수는 '함수의 국소 평균이 얼마나 커질 수 있는가'를 제어하는 보편적 도구이며, CZ 이론은 '특이점을 가진 적분 작용소도 올바른 조건 아래에서는 $L^p$에서 잘 행동한다'는 것을 보장합니다. 이 모든 도구가 분산형 PDE의 해 추정에 기초가 됩니다.",
            formula: "\\hat{f}(\\xi) = \\int_{\\mathbb{R}^n} f(x)\\,e^{-2\\pi i x \\cdot \\xi}\\,dx\n\n\\text{Riesz-Thorin: } \\frac{1}{p} = \\frac{1-\\theta}{p_0} + \\frac{\\theta}{p_1},\\quad \\|T\\|_{p \\to q} \\le \\|T\\|_{p_0 \\to q_0}^{1-\\theta}\\|T\\|_{p_1 \\to q_1}^{\\theta}\n\nMf(x) = \\sup_{r>0} \\frac{1}{|B(x,r)|} \\int_{B(x,r)} |f(y)|\\,dy\n\n\\text{CZ 커널: } |K(x)| \\le \\frac{C}{|x|^n},\\quad |K(x-y) - K(x)| \\le \\frac{C|y|^\\delta}{|x|^{n+\\delta}}",
            summary: ":::note[요약]\n* 푸리에 변환은 $\\mathcal{S} \\to \\mathcal{S}$ 위상동형이며, $\\mathcal{S}'$로 확장 가능\n* Riesz-Thorin: 복소 보간법, 끝점 유계 $\\Rightarrow$ 중간점 유계\n* Marcinkiewicz: 약형 추정에서 강형 추정 유도\n* Hardy-Littlewood $M$: 약형 $(1,1)$, 강형 $(p,p)$ ($p > 1$)\n* CZ 특이적분: $L^2$ 유계 + 커널 조건 $\\Rightarrow$ $L^p$ 유계 ($1 < p < \\infty$)\n:::"
        },
        examples: [
            {
                title: "[기본] 푸리에 변환과 Plancherel 정리",
                problem: "$f(x) = e^{-\\pi|x|^2}$의 푸리에 변환을 계산하고, Plancherel 정리 $\\|\\hat{f}\\|_{L^2} = \\|f\\|_{L^2}$를 검증하시오.",
                steps: [
                    "$\\hat{f}(\\xi) = \\int_{\\mathbb{R}^n} e^{-\\pi|x|^2} e^{-2\\pi i x \\cdot \\xi}\\,dx$를 계산합니다.",
                    "지수를 완전제곱식으로 정리: $-\\pi|x|^2 - 2\\pi i x \\cdot \\xi = -\\pi|x + i\\xi|^2 - \\pi|\\xi|^2$.",
                    "가우스 적분 $\\int_{\\mathbb{R}^n} e^{-\\pi|x+i\\xi|^2}\\,dx = 1$ (등고선 이동 정당화 가능).",
                    "따라서 $\\hat{f}(\\xi) = e^{-\\pi|\\xi|^2}$. 즉, 가우스 함수는 푸리에 변환의 고정점입니다.",
                    "Plancherel 검증: $\\|f\\|_{L^2}^2 = \\int e^{-2\\pi|x|^2}\\,dx = \\frac{1}{2^{n/2}}$.",
                    "$\\|\\hat{f}\\|_{L^2}^2 = \\int e^{-2\\pi|\\xi|^2}\\,d\\xi = \\frac{1}{2^{n/2}}$.",
                    "두 값이 동일하므로 Plancherel 정리가 성립합니다."
                ],
                answer: "$\\hat{f}(\\xi) = e^{-\\pi|\\xi|^2}$이며, Plancherel 정리 $\\|\\hat{f}\\|_2 = \\|f\\|_2$ 성립",
                lesson: "가우스 함수 $e^{-\\pi|x|^2}$는 푸리에 변환의 고정점이라는 사실은 조화해석학에서 매우 기본적입니다. Plancherel 정리는 푸리에 변환이 $L^2$에서 등거리 사상(isometry)임을 보장합니다."
            },
            {
                title: "[응용] Riesz-Thorin 보간으로 Young 합성곱 부등식 증명",
                problem: "$1 \\le p, q, r \\le \\infty$이고 $\\frac{1}{p} + \\frac{1}{q} = 1 + \\frac{1}{r}$일 때, $\\|f * g\\|_{L^r} \\le \\|f\\|_{L^p}\\,\\|g\\|_{L^q}$를 Riesz-Thorin 보간으로 증명하시오.",
                steps: [
                    "$g$를 고정하고 선형 작용소 $T_g f = f * g$를 고려합니다.",
                    "끝점 1: $p = 1$이면 $\\|f * g\\|_{L^q} \\le \\|f\\|_{L^1}\\|g\\|_{L^q}$ (Minkowski 부등식).",
                    "끝점 2: $p = q'$ (켤레 지수)이면 $\\|f * g\\|_{L^\\infty} \\le \\|f\\|_{L^{q'}}\\|g\\|_{L^q}$ (Hölder 부등식).",
                    "Riesz-Thorin 보간을 적용하면, $0 < \\theta < 1$에 대해 $\\frac{1}{p} = (1-\\theta) \\cdot 1 + \\theta \\cdot \\frac{1}{q'}$로 정해지는 $p$에서",
                    "$\\|T_g f\\|_{L^r} \\le \\|g\\|_{L^q}\\,\\|f\\|_{L^p}$를 얻습니다.",
                    "여기서 $\\frac{1}{r} = \\frac{1-\\theta}{q} + \\frac{\\theta}{\\infty} = \\frac{1-\\theta}{q}$이므로 지수 관계 $\\frac{1}{p} + \\frac{1}{q} = 1 + \\frac{1}{r}$이 복원됩니다.",
                    "이로써 Young 합성곱 부등식이 증명됩니다."
                ],
                answer: "$\\|f * g\\|_{L^r} \\le \\|f\\|_{L^p}\\|g\\|_{L^q}$ ($\\frac{1}{p} + \\frac{1}{q} = 1 + \\frac{1}{r}$)",
                lesson: "보간 정리의 강력함을 보여주는 전형적 예입니다. 극단적인 두 경우(Minkowski, Hölder)만 증명하면 Riesz-Thorin이 모든 중간 지수를 자동으로 처리합니다."
            },
            {
                title: "[심화] CZ 작용소의 약형 $(1,1)$ 추정 — Calderón-Zygmund 분해",
                problem: "$T$가 $L^2$ 유계인 CZ 작용소이고 커널이 Hörmander 조건을 만족할 때, $T$가 약형 $(1,1)$임을 Calderón-Zygmund 분해를 이용하여 보이시오.",
                steps: [
                    "주어진 $\\lambda > 0$에 대해 $f = g + b$로 Calderón-Zygmund 분해를 수행합니다.",
                    "좋은 부분(good part) $g$: $\\|g\\|_{L^\\infty} \\le C\\lambda$, $\\|g\\|_{L^1} \\le \\|f\\|_{L^1}$.",
                    "나쁜 부분(bad part) $b = \\sum_j b_j$: 각 $b_j$는 큐브 $Q_j$에 지지되며, $\\int b_j = 0$, $\\sum_j |Q_j| \\le \\frac{C}{\\lambda}\\|f\\|_{L^1}$.",
                    "$|\\{|Tg| > \\lambda/2\\}| \\le \\frac{4}{\\lambda^2}\\|Tg\\|_{L^2}^2 \\le \\frac{4C_T^2}{\\lambda^2}\\|g\\|_{L^2}^2 \\le \\frac{4C_T^2}{\\lambda^2} \\cdot C\\lambda\\|f\\|_{L^1} = \\frac{C'}{\\lambda}\\|f\\|_{L^1}$.",
                    "$Tb$의 추정: $\\Omega^* = \\bigcup_j Q_j^*$ (확대 큐브)라 하면, $|\\Omega^*| \\le C\\sum_j |Q_j| \\le \\frac{C}{\\lambda}\\|f\\|_{L^1}$.",
                    "$\\Omega^*$ 밖에서 Hörmander 조건 사용: $\\int_{(\\Omega^*)^c} |Tb_j(x)|\\,dx \\le C\\|b_j\\|_{L^1}$.",
                    "합산하면 $|\\{|Tb| > \\lambda/2\\} \\setminus \\Omega^*| \\le \\frac{2}{\\lambda}\\sum_j C\\|b_j\\|_{L^1} \\le \\frac{C''}{\\lambda}\\|f\\|_{L^1}$.",
                    "따라서 $|\\{|Tf| > \\lambda\\}| \\le \\frac{C}{\\lambda}\\|f\\|_{L^1}$."
                ],
                answer: "$|\\{|Tf| > \\lambda\\}| \\le \\frac{C}{\\lambda}\\|f\\|_{L^1}$ (약형 $(1,1)$)",
                lesson: "Calderón-Zygmund 분해는 함수를 '좋은 부분'(크기가 제어됨)과 '나쁜 부분'(적분이 0이고 지지가 제한됨)으로 나눕니다. 좋은 부분은 $L^2$ 추정으로, 나쁜 부분은 커널의 정칙성(Hörmander 조건)으로 처리합니다. 이것이 CZ 기계의 핵심입니다."
            }
        ],
        problems: [
            {
                id: "24-1",
                type: "choice",
                difficulty: 1,
                question: "Hardy-Littlewood 극대함수 $M$에 대한 설명으로 올바른 것은?",
                choices: [
                    "$M$은 $L^1(\\mathbb{R}^n)$에서 $L^1(\\mathbb{R}^n)$으로 유계이다.",
                    "$M$은 약형 $(1,1)$이며, $1 < p \\le \\infty$에서 강형 $(p,p)$이다.",
                    "$M$은 선형 작용소이다.",
                    "$M$은 $L^p$에서 $p < 1$일 때도 유계이다."
                ],
                answer: "$M$은 약형 $(1,1)$이며, $1 < p \\le \\infty$에서 강형 $(p,p)$이다.",
                hints: [
                    "$Mf$가 $L^1$에 속하지 않는 간단한 예를 생각해 보세요: $f = \\chi_{[0,1]}$일 때 $Mf(x) \\sim \\frac{1}{|x|}$.",
                    "극대함수는 $\\max$를 포함하므로 선형이 아닙니다."
                ],
                explanation: "$M$은 $L^1 \\to L^1$ 유계가 아닙니다 (반례: $f = \\chi_{[0,1]}$이면 $Mf(x) \\ge c/|x|$로 적분 불가). 하지만 약형 $(1,1)$ 추정 $|\\{Mf > \\lambda\\}| \\le \\frac{C}{\\lambda}\\|f\\|_1$은 성립하며, Marcinkiewicz 보간으로 $p > 1$에서 강형 유계성을 얻습니다.",
                wrongAnalysis: "$L^1$ 유계성과 약형 $(1,1)$을 혼동하기 쉽습니다. 약형은 초위(super-level set)의 측도를 제어하는 것이며, 강형($L^p$ 노름 자체의 제어)보다 약한 조건입니다."
            },
            {
                id: "24-2",
                type: "text",
                difficulty: 2,
                question: "Riesz-Thorin 보간 정리에서, 선형 작용소 $T$가 $L^1 \\to L^1$에서 노름 $M_0 = 1$이고 $L^\\infty \\to L^\\infty$에서 노름 $M_1 = 1$일 때, $T$의 $L^2 \\to L^2$ 노름의 상계를 구하시오.",
                answer: "1",
                hints: [
                    "$\\theta = 1/2$로 놓으면 $\\frac{1}{p} = \\frac{1-\\theta}{1} + \\frac{\\theta}{\\infty} = \\frac{1}{2}$입니다.",
                    "Riesz-Thorin에 의해 $\\|T\\|_{L^2 \\to L^2} \\le M_0^{1-\\theta} M_1^{\\theta}$입니다."
                ],
                explanation: "$\\theta = 1/2$일 때, $\\frac{1}{p} = \\frac{1}{2}$이므로 $p = 2$입니다. Riesz-Thorin 부등식에 의해 $\\|T\\|_{L^2 \\to L^2} \\le M_0^{1/2} \\cdot M_1^{1/2} = 1^{1/2} \\cdot 1^{1/2} = 1$입니다.",
                wrongAnalysis: "보간 지수 $\\theta$를 잘못 설정하거나, 노름의 거듭제곱에서 $1-\\theta$와 $\\theta$를 혼동하는 실수가 흔합니다."
            },
            {
                id: "24-3",
                type: "text",
                difficulty: 3,
                question: "CZ 작용소 $T$에 대해, $T$가 $L^2$ 유계이고 커널이 Hörmander 조건 $\\int_{|x|>2|y|} |K(x-y) - K(x)|\\,dx \\le C$를 만족할 때, Marcinkiewicz 보간 정리를 사용하여 $T$가 모든 $1 < p \\le 2$에서 $L^p$ 유계임을 증명하는 논증의 핵심 두 단계를 서술하시오.",
                answer: "1단계: CZ 분해로 약형 (1,1) 증명, 2단계: 약형 (1,1)과 강형 (2,2)에 Marcinkiewicz 보간 적용",
                hints: [
                    "CZ 분해를 사용하여 먼저 어떤 종류의 추정을 얻는지 생각하세요.",
                    "Marcinkiewicz 보간의 입력으로 필요한 것은 두 끝점에서의 (약형) 추정입니다."
                ],
                explanation: "1단계: Calderón-Zygmund 분해 ($f = g + b$)를 사용하여 $T$가 약형 $(1,1)$임을 증명합니다. $g$ 부분은 $L^2$ 유계성으로, $b$ 부분은 Hörmander 조건과 $\\int b_j = 0$을 활용하여 처리합니다. 2단계: $T$는 강형 $(2,2)$(가정)이고 약형 $(1,1)$(1단계)이므로, Marcinkiewicz 보간 정리에 의해 $1 < p < 2$에서 강형 $(p,p)$, 즉 $L^p$ 유계성을 얻습니다. $p > 2$는 쌍대성(duality)으로 처리합니다.",
                wrongAnalysis: "CZ 분해 없이 직접 $L^p$ 추정을 시도하면 특이점 근방에서의 발산을 제어할 수 없습니다. Hörmander 조건은 나쁜 부분의 취소(cancellation)를 활용할 때 핵심적입니다."
            }
        ],
        summary: {
            keyPoints: [
                "푸리에 변환은 $\\mathcal{S}(\\mathbb{R}^n)$에서 자기 자신으로의 위상동형이며, Plancherel 정리에 의해 $L^2$ 등거리 사상",
                "Riesz-Thorin(복소 보간)과 Marcinkiewicz(실수 보간)는 끝점 추정에서 중간 추정을 유도하는 핵심 도구",
                "Hardy-Littlewood 극대함수 $M$: 약형 $(1,1)$, 강형 $(p,p)$ ($p > 1$)",
                "CZ 이론: $L^2$ 유계 + Hörmander 커널 조건 $\\Rightarrow$ $L^p$ 유계 ($1 < p < \\infty$) 및 약형 $(1,1)$"
            ],
            formulas: [
                "$\\hat{f}(\\xi) = \\int_{\\mathbb{R}^n} f(x)\\,e^{-2\\pi i x \\cdot \\xi}\\,dx$",
                "$Mf(x) = \\sup_{r>0} \\frac{1}{|B(x,r)|}\\int_{B(x,r)} |f(y)|\\,dy$",
                "Riesz-Thorin: $\\|T\\|_{p \\to q} \\le \\|T\\|_{p_0 \\to q_0}^{1-\\theta}\\|T\\|_{p_1 \\to q_1}^{\\theta}$",
                "CZ 커널: $|K(x)| \\le C|x|^{-n}$, Hörmander 조건 $\\int_{|x|>2|y|}|K(x-y)-K(x)|\\,dx \\le C$"
            ],
            commonMistakes: [
                "$M$의 $L^1 \\to L^1$ 유계성과 약형 $(1,1)$ 혼동",
                "Riesz-Thorin은 선형 작용소에만 적용 가능 — 준선형(sublinear)에는 Marcinkiewicz 사용",
                "CZ 분해에서 '나쁜 부분'의 적분이 0인 조건($\\int b_j = 0$)을 간과",
                "Hörmander 조건의 '정칙성'은 커널의 미분가능성이 아닌, 차이에 대한 적분 조건임을 혼동"
            ],
            nextConnection: "이 $L^p$ 추정 기계는 다음 단원의 리틀우드-페일리 이론에서 주파수별 추정으로 정밀화되며, 분산형 PDE의 비선형 항을 다루는 데 필수적입니다."
        }
    },
    {
        id: 25,
        title: "리틀우드-페일리 이론과 함수공간",
        category: "분산형 PDE 기초",
        level: "심화",
        question: "비선형 PDE의 주파수 국소화 분석을 위한 리틀우드-페일리 분해와 현대적 함수공간이란 무엇인가?",
        concept: {
            intro: ":::definition[리틀우드-페일리 분해]\n리틀우드-페일리(Littlewood-Paley, LP) 분해는 함수를 서로 다른 주파수 대역(dyadic frequency bands)으로 분해하는 방법입니다. 이중 분해 $\\{\\varphi_j\\}_{j \\ge 0}$를 구성합니다: $\\varphi_0$은 저주파 부분($|\\xi| \\lesssim 1$), 그리고 $j \\ge 1$일 때 $\\varphi_j(\\xi) = \\varphi(2^{-j}\\xi)$는 $|\\xi| \\sim 2^j$ 대역을 추출합니다. 핵심 조건은 $\\sum_{j=0}^{\\infty} \\varphi_j(\\xi) = 1$ (모든 $\\xi$에 대해)입니다.\n\n$\\Delta_j f = (\\varphi_j \\hat{f})^{\\vee}$로 정의하면 $f = \\sum_{j=0}^{\\infty} \\Delta_j f$ (주파수 분해)입니다.\n:::\n\n:::theorem[리틀우드-페일리 정리]\n$1 < p < \\infty$일 때, 다음의 동치가 성립합니다:\n$$\\|f\\|_{L^p} \\sim \\left\\|\\left(\\sum_{j \\ge 0} |\\Delta_j f|^2\\right)^{1/2}\\right\\|_{L^p}$$\n이를 리틀우드-페일리 제곱함수 추정이라 합니다. 이 동치는 벡터값 CZ 이론으로부터 증명됩니다.\n:::\n\n:::theorem[번스타인 부등식]\n주파수가 $|\\xi| \\sim 2^j$에 국소화된 함수 $\\Delta_j f$에 대해 번스타인 부등식(Bernstein inequalities)이 성립합니다:\n1. $\\|\\nabla^k \\Delta_j f\\|_{L^p} \\lesssim 2^{jk} \\|\\Delta_j f\\|_{L^p}$ (미분 $\\leftrightarrow$ 주파수 곱셈)\n2. $\\|\\Delta_j f\\|_{L^q} \\lesssim 2^{jn(1/p - 1/q)} \\|\\Delta_j f\\|_{L^p}$ ($p \\le q$, 소볼레프 임베딩의 주파수 국소 버전)\n이 부등식들은 주파수가 제한되면 미분과 적분 지수 교환이 정밀하게 가능함을 보여줍니다.\n:::\n\n:::definition[베조프 공간과 트리벨-리조킨 공간]\n리틀우드-페일리 분해를 이용하여 현대적 함수공간을 정의합니다.\n\n**베조프 공간(Besov space)**: $\\|f\\|_{B^s_{p,q}} = \\left(\\sum_{j \\ge 0} 2^{jsq} \\|\\Delta_j f\\|_{L^p}^q\\right)^{1/q}$\n\n**트리벨-리조킨 공간(Triebel-Lizorkin space)**: $\\|f\\|_{F^s_{p,q}} = \\left\\|\\left(\\sum_{j \\ge 0} 2^{jsq} |\\Delta_j f|^q\\right)^{1/q}\\right\\|_{L^p}$\n\n특별한 경우: $F^s_{p,2} = H^s_p$ (소볼레프 공간), $B^s_{p,p} = F^s_{p,p}$, $B^s_{2,2} = H^s$ (고전적 소볼레프).\n:::\n\n:::definition[파라곱 분해]\nBony의 파라곱(paraproduct) 분해는 두 함수의 곱을 주파수 상호작용으로 분해합니다:\n$$fg = T_f g + T_g f + R(f,g)$$\n여기서 $T_f g = \\sum_j S_{j-1}f \\cdot \\Delta_j g$ (파라곱, 저주파 $\\times$ 고주파), $R(f,g) = \\sum_{|j-k| \\le 1} \\Delta_j f \\cdot \\Delta_k g$ (나머지, 유사 주파수 상호작용).\n\n이 분해는 비선형 항의 정칙성 분석에 핵심적입니다.\n:::\n\n:::theorem[분수 라이프니츠 규칙 (Kato-Ponce)]\n$s > 0$, $1 < p < \\infty$일 때:\n$$\\|D^s(fg)\\|_{L^p} \\lesssim \\|D^s f\\|_{L^{p_1}}\\|g\\|_{L^{p_2}} + \\|f\\|_{L^{p_3}}\\|D^s g\\|_{L^{p_4}}$$\n여기서 $\\frac{1}{p} = \\frac{1}{p_1} + \\frac{1}{p_2} = \\frac{1}{p_3} + \\frac{1}{p_4}$이며 $D^s = (-\\Delta)^{s/2}$입니다.\n:::\n\n:::note[참고문헌]\nBahouri-Chemin-Danchin, *Fourier Analysis and Nonlinear PDEs* Ch.2-3; Muscalu-Schlag, *Classical and Multilinear Harmonic Analysis*\n:::",
            intuition: "리틀우드-페일리 분해의 직관은 '라디오 주파수 분리'와 같습니다. FM 라디오에서 각 방송국이 서로 다른 주파수 대역을 사용하듯, 함수의 각 주파수 대역 $\\Delta_j f$를 개별적으로 분석합니다. 번스타인 부등식은 '주파수가 제한되면 미분은 단순히 주파수 크기를 곱하는 것과 같다'는 것을 정밀화합니다. 파라곱은 '두 함수를 곱할 때, 각 주파수 대역 간의 상호작용을 분리하여 추정한다'는 아이디어입니다. 이 모든 도구는 비선형 PDE에서 $u \\cdot \\nabla u$나 $|u|^{p-1}u$ 같은 비선형 항의 정칙성을 분석하는 데 사용됩니다.",
            formula: "\\Delta_j f = (\\varphi_j \\hat{f})^\\vee,\\quad f = \\sum_{j=0}^\\infty \\Delta_j f\n\n\\|f\\|_{L^p} \\sim \\left\\|\\left(\\sum_j |\\Delta_j f|^2\\right)^{1/2}\\right\\|_{L^p} \\quad (1 < p < \\infty)\n\n\\|\\nabla^k \\Delta_j f\\|_{L^p} \\lesssim 2^{jk}\\|\\Delta_j f\\|_{L^p} \\quad (\\text{Bernstein})\n\n\\|f\\|_{B^s_{p,q}} = \\left(\\sum_j 2^{jsq}\\|\\Delta_j f\\|_{L^p}^q\\right)^{1/q}\n\nfg = T_f g + T_g f + R(f,g) \\quad (\\text{Bony paraproduct})",
            summary: ":::note[요약]\n* LP 분해: $f = \\sum \\Delta_j f$, 이중(dyadic) 주파수 대역 분리\n* LP 제곱함수: $\\|f\\|_{L^p} \\sim \\|(\\sum|\\Delta_j f|^2)^{1/2}\\|_{L^p}$\n* Bernstein: 주파수 국소화 $\\Rightarrow$ 미분과 적분 지수 교환 정밀 제어\n* $B^s_{p,q}$, $F^s_{p,q}$: LP로 정의되는 현대적 함수공간\n* Bony paraproduct: 곱의 주파수별 분해, 비선형 추정의 핵심\n* Kato-Ponce: 분수 라이프니츠로 비선형 항 제어\n:::"
        },
        examples: [
            {
                title: "[기본] 번스타인 부등식의 적용",
                problem: "$\\text{supp}\\,\\hat{f} \\subset \\{|\\xi| \\le R\\}$일 때 (저주파 국소화), $\\|\\nabla f\\|_{L^p} \\le CR\\|f\\|_{L^p}$를 번스타인 부등식에서 유도하시오.",
                steps: [
                    "$\\hat{f}$의 지지가 $\\{|\\xi| \\le R\\}$에 포함되므로 $f$는 주파수가 $R$ 이하로 제한됩니다.",
                    "$R \\sim 2^j$인 단일 이중 블록에 포함된다고 볼 수 있습니다.",
                    "번스타인 부등식 $\\|\\nabla^k \\Delta_j f\\|_{L^p} \\lesssim 2^{jk}\\|\\Delta_j f\\|_{L^p}$에서 $k=1$을 적용합니다.",
                    "$\\|\\nabla f\\|_{L^p} \\lesssim 2^j \\|f\\|_{L^p} \\sim R\\|f\\|_{L^p}$.",
                    "이는 주파수 측에서 $|\\xi| \\le R$이므로 $|\\widehat{\\nabla f}| = |2\\pi i \\xi \\hat{f}| \\le 2\\pi R |\\hat{f}|$와 일치합니다.",
                    "즉 미분은 주파수 영역에서의 곱셈이며, 주파수가 제한되면 곱하는 인자의 크기가 유한합니다."
                ],
                answer: "$\\|\\nabla f\\|_{L^p} \\le CR\\|f\\|_{L^p}$",
                lesson: "번스타인 부등식의 본질은 '주파수가 제한된 함수에서는 미분이 유계 작용소가 된다'는 것입니다. 이는 소볼레프 공간의 임베딩 정리를 주파수 국소적으로 정밀화한 것입니다."
            },
            {
                title: "[응용] 베조프 공간에서의 소볼레프 임베딩",
                problem: "$B^s_{p,1}(\\mathbb{R}^n) \\hookrightarrow L^q(\\mathbb{R}^n)$이 성립하기 위한 지수 조건 $s = n(\\frac{1}{p} - \\frac{1}{q})$를 LP 분해로 유도하시오 ($s > 0$, $p < q$).",
                steps: [
                    "$f = \\sum_j \\Delta_j f$이므로 $\\|f\\|_{L^q} \\le \\sum_j \\|\\Delta_j f\\|_{L^q}$.",
                    "각 블록에 번스타인 부등식 적용: $\\|\\Delta_j f\\|_{L^q} \\lesssim 2^{jn(1/p - 1/q)} \\|\\Delta_j f\\|_{L^p}$.",
                    "$\\|f\\|_{L^q} \\lesssim \\sum_j 2^{jn(1/p - 1/q)} \\|\\Delta_j f\\|_{L^p}$.",
                    "$s = n(1/p - 1/q)$로 놓으면 $\\|f\\|_{L^q} \\lesssim \\sum_j 2^{js} \\|\\Delta_j f\\|_{L^p}$.",
                    "우변은 정확히 $\\|f\\|_{B^s_{p,1}}$의 정의입니다.",
                    "따라서 $\\|f\\|_{L^q} \\lesssim \\|f\\|_{B^s_{p,1}}$, 즉 $B^s_{p,1} \\hookrightarrow L^q$."
                ],
                answer: "$B^s_{p,1} \\hookrightarrow L^q$ ($s = n(1/p - 1/q)$, $s > 0$, $p < q$)",
                lesson: "고전적 소볼레프 임베딩 $W^{s,p} \\hookrightarrow L^q$의 LP 증명입니다. $B^s_{p,1}$에서의 $\\ell^1$ 합산 가능성이 핵심이며, $B^s_{p,q}$ ($q > 1$)일 때는 추가 분석이 필요합니다."
            },
            {
                title: "[심화] Bony 파라곱을 이용한 곱의 정칙성 추정",
                problem: "$f \\in H^{s_1}$, $g \\in H^{s_2}$이고 $s_1 + s_2 > 0$, $s_1, s_2 < n/2$일 때, $fg \\in H^{s_1 + s_2 - n/2}$임을 파라곱 분해로 증명의 개요를 서술하시오.",
                steps: [
                    "Bony 분해: $fg = T_f g + T_g f + R(f,g)$.",
                    "$T_f g = \\sum_j S_{j-1}f \\cdot \\Delta_j g$의 추정: $S_{j-1}f$의 주파수는 $\\lesssim 2^j$, $\\Delta_j g$의 주파수는 $\\sim 2^j$이므로 곱의 주파수도 $\\sim 2^j$.",
                    "$\\|S_{j-1}f\\|_{L^\\infty} \\lesssim \\|f\\|_{H^{s_1}} \\cdot 2^{j(n/2 - s_1)}$ (번스타인 + 소볼레프, $s_1 < n/2$).",
                    "$\\|\\Delta_j(T_f g)\\|_{L^2} \\lesssim \\|f\\|_{H^{s_1}} \\cdot 2^{j(n/2-s_1)} \\cdot \\|\\Delta_j g\\|_{L^2}$.",
                    "$\\|T_f g\\|_{H^{s_2 - n/2 + s_1}}$ 추정: $\\sum_j 2^{2j(s_2 - n/2 + s_1)} \\cdot \\|f\\|_{H^{s_1}}^2 \\cdot 2^{2j(n/2-s_1)} \\cdot \\|\\Delta_j g\\|_{L^2}^2 = \\|f\\|_{H^{s_1}}^2 \\sum_j 2^{2js_2}\\|\\Delta_j g\\|_{L^2}^2 \\sim \\|f\\|_{H^{s_1}}^2\\|g\\|_{H^{s_2}}^2$.",
                    "$R(f,g)$ 추정: $s_1 + s_2 > 0$ 조건이 합산 가능성을 보장합니다.",
                    "대칭성에 의해 $T_g f$도 유사하게 처리됩니다."
                ],
                answer: "$fg \\in H^{s_1 + s_2 - n/2}$이며, $\\|fg\\|_{H^{s_1+s_2-n/2}} \\lesssim \\|f\\|_{H^{s_1}}\\|g\\|_{H^{s_2}}$",
                lesson: "파라곱 분해는 곱의 정칙성을 주파수 상호작용의 관점에서 분석합니다. 파라곱 $T_f g$에서 $f$의 저주파가 $g$의 정칙성을 그대로 보존하고, 나머지 $R(f,g)$에서 $s_1 + s_2 > 0$ 조건이 핵심적으로 사용됩니다."
            }
        ],
        problems: [
            {
                id: "25-1",
                type: "choice",
                difficulty: 1,
                question: "리틀우드-페일리 분해 $f = \\Delta_0 f + \\sum_{j \\ge 1} \\Delta_j f$에서 $j \\ge 1$인 고주파 블록 $\\Delta_j f$의 주파수 지지(support)는?",
                choices: [
                    "$|\\xi| \\le 2^j$",
                    "$|\\xi| \\sim 2^j$ (이중 환형 대역)",
                    "$|\\xi| = 2^j$ (정확히)",
                    "$|\\xi| \\ge 2^j$"
                ],
                answer: "$|\\xi| \\sim 2^j$ (이중 환형 대역)",
                hints: [
                    "LP 분해에서 $j \\ge 1$의 $\\varphi_j$는 $|\\xi| \\sim 2^j$ 대역을 추출하는 함수입니다.",
                    "'$\\sim$'는 $c \\cdot 2^j \\le |\\xi| \\le C \\cdot 2^j$를 의미합니다."
                ],
                explanation: "$j \\ge 1$에서 $\\Delta_j f = (\\varphi_j \\hat{f})^\\vee$이고, $\\varphi_j$는 $|\\xi| \\sim 2^j$ 환형(annular) 대역에 지지됩니다. 이는 이중(dyadic) 분해이므로 연속적인 블록 사이에 약간의 겹침은 있지만, 핵심적으로 $|\\xi| \\sim 2^j$에 집중됩니다. $j = 0$ 블록은 저주파 $|\\xi| \\lesssim 1$에 해당하므로 별도로 취급합니다.",
                wrongAnalysis: "'$|\\xi| \\le 2^j$'는 $S_j f$ (부분합 연산자)의 주파수 지지이며, $\\Delta_j f$는 환형 대역입니다. 이 두 가지를 혼동하지 않아야 합니다."
            },
            {
                id: "25-2",
                type: "text",
                difficulty: 2,
                question: "$f$의 푸리에 지지가 $\\{|\\xi| \\le R\\}$일 때, 번스타인 부등식을 이용하여 $\\|f\\|_{L^\\infty(\\mathbb{R}^n)}$을 $\\|f\\|_{L^2(\\mathbb{R}^n)}$으로 추정하시오. ($R > 0$)",
                answer: "$\\|f\\|_{L^\\infty} \\lesssim R^{n/2} \\|f\\|_{L^2}$",
                hints: [
                    "번스타인 부등식에서 $p = 2$, $q = \\infty$를 대입합니다.",
                    "$n(1/p - 1/q) = n(1/2 - 0) = n/2$입니다."
                ],
                explanation: "번스타인 부등식 $\\|\\Delta_j f\\|_{L^q} \\lesssim 2^{jn(1/p-1/q)}\\|\\Delta_j f\\|_{L^p}$에서 주파수 지지가 $\\{|\\xi| \\le R\\}$이고 $p = 2$, $q = \\infty$이면 $\\|f\\|_{L^\\infty} \\lesssim R^{n/2}\\|f\\|_{L^2}$입니다. 이는 소볼레프 임베딩 $H^{n/2+\\varepsilon} \\hookrightarrow L^\\infty$의 주파수 국소 버전입니다.",
                wrongAnalysis: "지수 $n(1/p - 1/q)$에서 $n$을 빼먹거나 $1/p - 1/q$의 부호를 혼동하는 실수가 흔합니다. 항상 '높은 적분 지수 = 더 많은 주파수 인자'로 기억하세요."
            },
            {
                id: "25-3",
                type: "text",
                difficulty: 3,
                question: "Bony 파라곱 $T_f g = \\sum_j S_{j-1}f \\cdot \\Delta_j g$에서 $T_f g$의 주파수 지지가 왜 대략 $g$의 주파수 지지와 같은 대역에 있는지 설명하시오.",
                answer: "S_{j-1}f의 주파수는 |xi| < 2^{j-1}이고 Delta_j g의 주파수는 |xi| ~ 2^j이므로, 곱의 주파수 지지는 합성곱에 의해 |xi| ~ 2^j 부근에 유지됨",
                hints: [
                    "두 함수의 곱의 푸리에 변환은 개별 푸리에 변환의 합성곱(convolution)입니다.",
                    "$S_{j-1}f$의 주파수는 $|\\xi| \\lesssim 2^{j-1}$, $\\Delta_j g$의 주파수는 $|\\xi| \\sim 2^j$입니다."
                ],
                explanation: "$S_{j-1}f$의 스펙트럼 지지는 $\\{|\\xi| \\lesssim 2^{j-1}\\}$이고, $\\Delta_j g$의 스펙트럼 지지는 $\\{|\\xi| \\sim 2^j\\}$입니다. 곱 $S_{j-1}f \\cdot \\Delta_j g$의 푸리에 변환은 $\\widehat{S_{j-1}f} * \\widehat{\\Delta_j g}$이므로, 그 지지는 두 지지의 Minkowski 합에 포함됩니다. $2^{j-1} \\ll 2^j$이므로 합은 여전히 $|\\xi| \\sim 2^j$ 대역에 있습니다. 이것이 파라곱이 $g$의 '주파수 구조를 보존'하는 이유이며, $T_f g$의 정칙성이 $g$의 정칙성에 의해 결정되는 근거입니다.",
                wrongAnalysis: "곱의 주파수 지지를 개별 지지의 합집합으로 오해하면 안 됩니다. 정확히는 Minkowski 합(점별 합의 집합)이며, 이것이 파라곱의 구조를 결정합니다."
            }
        ],
        summary: {
            keyPoints: [
                "LP 분해는 이중 주파수 대역으로 함수를 분해하며, LP 제곱함수 추정이 $L^p$ 동치를 제공",
                "번스타인 부등식: 주파수 국소화된 함수에서 미분과 적분 지수 변환을 정밀 제어",
                "베조프 $B^s_{p,q}$와 트리벨-리조킨 $F^s_{p,q}$: LP로 정의되는 현대 함수공간, 소볼레프 공간을 일반화",
                "Bony 파라곱: 곱의 주파수별 분해, 비선형 항 정칙성 추정의 표준 도구",
                "Kato-Ponce 분수 라이프니츠: NLS/NLW 비선형 추정에 직접 활용"
            ],
            formulas: [
                "$\\Delta_j f = (\\varphi_j \\hat{f})^\\vee$, $f = \\sum_j \\Delta_j f$",
                "$\\|\\nabla^k \\Delta_j f\\|_{L^p} \\lesssim 2^{jk}\\|\\Delta_j f\\|_{L^p}$",
                "$\\|\\Delta_j f\\|_{L^q} \\lesssim 2^{jn(1/p-1/q)}\\|\\Delta_j f\\|_{L^p}$",
                "$\\|f\\|_{B^s_{p,q}} = (\\sum_j 2^{jsq}\\|\\Delta_j f\\|_{L^p}^q)^{1/q}$",
                "$fg = T_f g + T_g f + R(f,g)$"
            ],
            commonMistakes: [
                "LP 분해의 $\\Delta_j$(환형 대역)와 $S_j$(저주파 누적)의 혼동",
                "번스타인 부등식은 주파수가 제한된 함수에만 적용 가능 — 일반 $L^p$ 함수에 직접 적용 불가",
                "베조프 공간과 트리벨-리조킨 공간에서 $\\ell^q$ 합산과 $L^p$ 적분의 순서 차이를 간과",
                "파라곱에서 $S_{j-1}f$와 $\\Delta_j g$의 주파수 분리가 곱의 주파수 지지 결정에 핵심적임을 놓침"
            ],
            nextConnection: "LP 분해와 번스타인 부등식은 다음 단원의 진동적분 및 분산 추정에서, 주파수별로 진동 크기를 추정하는 데 직접 사용됩니다."
        }
    },
    {
        id: 26,
        title: "진동적분과 분산 추정",
        category: "분산형 PDE",
        level: "심화",
        question: "슈뢰딩거 방정식과 파동방정식의 해가 시간이 지남에 따라 왜 분산(disperse)하며, 그 감쇠율은 어떻게 유도되는가?",
        concept: {
            intro: ":::definition[진동적분]\n분산형 PDE의 해는 푸리에 표현을 통해 진동적분(oscillatory integral)의 형태로 나타납니다. 일반적인 형태는 다음과 같습니다:\n$$I(\\lambda) = \\int_{\\mathbb{R}^n} e^{i\\lambda \\phi(x)} a(x)\\,dx$$\n여기서 $\\phi$는 위상함수(phase function), $a$는 진폭함수(amplitude function), $\\lambda$는 큰 매개변수입니다. $\\lambda \\to \\infty$일 때 $I(\\lambda)$의 점근 행동을 분석하는 것이 핵심 문제입니다.\n:::\n\n:::theorem[정류위상법 (Stationary Phase Method)]\n위상함수 $\\phi$의 기울기가 $0$이 아닌 곳에서는 빠른 진동으로 인해 적분이 상쇄(cancellation)됩니다. 따라서 적분의 주된 기여는 정류점(stationary point, $\\nabla\\phi(x_0) = 0$) 근방에서만 옵니다.\n\n**비퇴화 정류점** ($\\det \\text{Hess}(\\phi)(x_0) \\neq 0$)이 하나일 때:\n$$I(\\lambda) \\sim \\left(\\frac{2\\pi}{\\lambda}\\right)^{n/2} \\frac{e^{i\\lambda\\phi(x_0)}}{|\\det \\text{Hess}(\\phi)(x_0)|^{1/2}}\\,a(x_0) \\quad (\\lambda \\to \\infty)$$\n즉, $|I(\\lambda)| \\lesssim \\lambda^{-n/2}$의 감쇠를 얻습니다.\n\n**정류점이 없을 때** ($\\nabla\\phi \\neq 0$ everywhere on supp $a$): 반복 부분적분에 의해 $|I(\\lambda)| \\le C_N \\lambda^{-N}$ (모든 $N$에 대해).\n:::\n\n:::theorem[슈뢰딩거 전파자의 분산 추정]\n자유 슈뢰딩거 방정식 $i\\partial_t u + \\Delta u = 0$의 해는 $u(t,x) = e^{it\\Delta}f(x) = (2\\pi)^{-n} \\int_{\\mathbb{R}^n} e^{ix \\cdot \\xi - it|\\xi|^2} \\hat{f}(\\xi)\\,d\\xi$로 표현됩니다.\n\n직접 계산으로 전파자의 핵을 구하면:\n$$e^{it\\Delta}f(x) = \\frac{1}{(4\\pi it)^{n/2}} \\int_{\\mathbb{R}^n} e^{i|x-y|^2/(4t)} f(y)\\,dy$$\n\n이로부터 **분산 추정**(dispersive estimate)을 얻습니다:\n$$\\|e^{it\\Delta}f\\|_{L^\\infty} \\le \\frac{C}{|t|^{n/2}}\\|f\\|_{L^1}$$\n이 $|t|^{-n/2}$ 감쇠가 바로 분산 현상의 정량적 표현입니다.\n:::\n\n:::theorem[파동방정식의 분산 추정]\n파동방정식 $\\partial_{tt}u - \\Delta u = 0$의 해는 $\\hat{u}(t,\\xi) = \\cos(t|\\xi|)\\hat{f}(\\xi) + \\frac{\\sin(t|\\xi|)}{|\\xi|}\\hat{g}(\\xi)$로 표현됩니다.\n\n파동 전파자의 분산 감쇠는 슈뢰딩거보다 약합니다:\n$$\\|e^{\\pm it|D|} P_j f\\|_{L^\\infty} \\lesssim (2^j t)^{-(n-1)/2} 2^{jn}\\|P_j f\\|_{L^1}$$\n여기서 $P_j$는 주파수 $|\\xi| \\sim 2^j$에 대한 LP 투영입니다. 감쇠율이 $|t|^{-(n-1)/2}$인 것은 파동 전파자의 분산 관계 $\\omega = |\\xi|$가 방사 방향으로만 진동을 제공하기 때문입니다.\n:::\n\n:::note[참고문헌]\nStein, *Harmonic Analysis: Real-Variable Methods, Orthogonality, and Oscillatory Integrals* Ch.8-9; Muscalu-Schlag Vol II\n:::",
            intuition: "돌을 연못에 던지면 물결이 원형으로 퍼져 나가면서 점점 낮아집니다. 이것이 분산(dispersion)입니다. 수학적으로, 슈뢰딩거 방정식의 해는 각 주파수 성분이 서로 다른 속도($v = 2\\xi$)로 이동하기 때문에 초기에 집중된 파동이 시간이 지나면서 공간적으로 퍼집니다. 이 '퍼짐'은 에너지 보존($L^2$ 노름 보존)과 결합하면 $L^\\infty$ 노름의 감쇠로 나타납니다. 정류위상법은 이 감쇠율을 '위상함수의 곡률(헤시안)이 결정한다'는 것으로 정량화합니다.",
            formula: "I(\\lambda) = \\int e^{i\\lambda\\phi(x)} a(x)\\,dx \\sim \\left(\\frac{2\\pi}{\\lambda}\\right)^{n/2} \\frac{a(x_0)\\,e^{i\\lambda\\phi(x_0)}}{|\\det \\text{Hess}\\,\\phi(x_0)|^{1/2}}\n\ne^{it\\Delta}f(x) = \\frac{1}{(4\\pi it)^{n/2}} \\int e^{i|x-y|^2/(4t)} f(y)\\,dy\n\n\\|e^{it\\Delta}f\\|_{L^\\infty} \\le C|t|^{-n/2}\\|f\\|_{L^1}\n\n\\text{파동: } \\|e^{\\pm it|D|}P_j f\\|_{L^\\infty} \\lesssim (2^j t)^{-(n-1)/2} 2^{jn}\\|P_j f\\|_{L^1}",
            summary: ":::note[요약]\n* 진동적분: $\\lambda \\to \\infty$에서의 점근 분석, 정류위상법이 핵심\n* 정류점 없음 $\\Rightarrow$ 급속 감쇠 ($O(\\lambda^{-N})$)\n* 비퇴화 정류점 $\\Rightarrow$ $O(\\lambda^{-n/2})$ 감쇠, 헤시안이 결정\n* 슈뢰딩거: $\\|e^{it\\Delta}f\\|_{\\infty} \\lesssim |t|^{-n/2}\\|f\\|_1$\n* 파동: $|t|^{-(n-1)/2}$ 감쇠 (슈뢰딩거보다 약함)\n* 분산 관계의 곡률이 감쇠율을 결정\n:::"
        },
        examples: [
            {
                title: "[기본] 1차원 자유 슈뢰딩거 전파자의 명시적 계산",
                problem: "$n = 1$에서 $e^{it\\partial_{xx}} f$의 적분 핵을 계산하고, $L^1 \\to L^\\infty$ 분산 추정을 유도하시오.",
                steps: [
                    "푸리에 표현: $e^{it\\partial_{xx}}f(x) = \\int_{\\mathbb{R}} e^{ix\\xi - it\\xi^2} \\hat{f}(\\xi)\\,d\\xi$ (적절한 정규화).",
                    "핵 $K_t(x) = \\int e^{ix\\xi - it\\xi^2}\\,d\\xi$를 계산합니다.",
                    "완전제곱식: $-it\\xi^2 + ix\\xi = -it(\\xi - x/(2t))^2 + ix^2/(4t)$.",
                    "가우스 적분: $\\int e^{-it(\\xi - x/(2t))^2}\\,d\\xi = \\sqrt{\\pi/(it)}$ (Fresnel 적분).",
                    "$K_t(x) = \\frac{1}{\\sqrt{4\\pi it}}\\,e^{ix^2/(4t)}$.",
                    "$|K_t(x)| = \\frac{1}{\\sqrt{4\\pi|t|}}$이므로 $\\|e^{it\\partial_{xx}}f\\|_{L^\\infty} = \\|K_t * f\\|_{L^\\infty} \\le \\|K_t\\|_{L^\\infty}\\|f\\|_{L^1}$.",
                    "$\\|e^{it\\partial_{xx}}f\\|_{L^\\infty} \\le \\frac{C}{|t|^{1/2}}\\|f\\|_{L^1}$. ($n=1$이므로 감쇠율 $|t|^{-1/2}$.)"
                ],
                answer: "$\\|e^{it\\partial_{xx}}f\\|_{L^\\infty} \\le \\frac{C}{|t|^{1/2}}\\|f\\|_{L^1}$",
                lesson: "슈뢰딩거 전파자의 핵은 가우스 적분(Fresnel 적분)으로 명시적으로 계산됩니다. 핵의 절대값이 $|t|^{-n/2}$으로 균일하게 유계인 것이 $L^1 \\to L^\\infty$ 분산 추정의 직접적 근거입니다."
            },
            {
                title: "[응용] 정류위상법으로 진동적분의 점근 전개",
                problem: "$I(\\lambda) = \\int_{-\\infty}^{\\infty} e^{i\\lambda x^2} \\chi(x)\\,dx$의 $\\lambda \\to \\infty$ 점근 행동을 정류위상법으로 구하시오. ($\\chi \\in C_c^\\infty$, $\\chi(0) = 1$)",
                steps: [
                    "위상함수 $\\phi(x) = x^2$, 정류점 $\\nabla\\phi(x_0) = 2x_0 = 0$이므로 $x_0 = 0$.",
                    "$\\text{Hess}(\\phi)(0) = \\phi''(0) = 2$ (비퇴화).",
                    "정류위상법 ($n = 1$): $I(\\lambda) \\sim \\sqrt{\\frac{2\\pi}{\\lambda}} \\cdot \\frac{e^{i\\lambda \\cdot 0}}{|2|^{1/2}} \\cdot \\chi(0) \\cdot e^{i\\pi/4}$.",
                    "부호 결정: $\\phi'' > 0$이므로 위상 인자 $e^{i\\pi\\text{sgn}(\\phi'')/4} = e^{i\\pi/4}$.",
                    "$I(\\lambda) \\sim \\sqrt{\\frac{\\pi}{\\lambda}}\\,e^{i\\pi/4}$ ($\\lambda \\to \\infty$).",
                    "$|I(\\lambda)| \\sim C\\lambda^{-1/2}$. 이는 1차원에서의 $\\lambda^{-n/2}$ 감쇠와 일치합니다."
                ],
                answer: "$I(\\lambda) \\sim \\sqrt{\\frac{\\pi}{\\lambda}}\\,e^{i\\pi/4}$, 즉 $|I(\\lambda)| \\sim C\\lambda^{-1/2}$",
                lesson: "정류위상법의 감쇠율 $\\lambda^{-n/2}$은 정류점에서의 헤시안의 행렬식에 의해 결정됩니다. 슈뢰딩거 전파자의 분산 추정 $|t|^{-n/2}$은 위상함수 $\\phi(\\xi) = |\\xi|^2$에 정류위상법을 적용한 결과와 본질적으로 동일합니다."
            },
            {
                title: "[심화] 슈뢰딩거 전파자의 $L^p$ 보간 추정",
                problem: "$e^{it\\Delta}$의 $L^1 \\to L^\\infty$ 분산 추정과 $L^2 \\to L^2$ 보존 법칙을 Riesz-Thorin으로 보간하여 $\\|e^{it\\Delta}f\\|_{L^{p'}} \\le C|t|^{-n(1/2 - 1/p')}\\|f\\|_{L^p}$를 유도하시오. ($2 \\le p' \\le \\infty$, $\\frac{1}{p} + \\frac{1}{p'} = 1$)",
                steps: [
                    "끝점 1: $\\|e^{it\\Delta}f\\|_{L^\\infty} \\le C|t|^{-n/2}\\|f\\|_{L^1}$ (분산 추정).",
                    "끝점 2: $\\|e^{it\\Delta}f\\|_{L^2} = \\|f\\|_{L^2}$ (Plancherel / 에너지 보존).",
                    "Riesz-Thorin 보간: $\\theta \\in [0,1]$로 $\\frac{1}{p} = (1-\\theta) \\cdot 1 + \\theta \\cdot \\frac{1}{2} = 1 - \\frac{\\theta}{2}$.",
                    "$\\frac{1}{p'} = \\frac{\\theta}{2}$이므로 $\\theta = \\frac{2}{p'}$, $1 - \\theta = 1 - \\frac{2}{p'} = \\frac{p'-2}{p'}$.",
                    "노름 추정: $\\|e^{it\\Delta}f\\|_{L^{p'}} \\le (C|t|^{-n/2})^{1-\\theta} \\cdot 1^\\theta \\cdot \\|f\\|_{L^p}$.",
                    "$(1-\\theta) \\cdot n/2 = \\frac{p'-2}{p'} \\cdot \\frac{n}{2} = n\\left(\\frac{1}{2} - \\frac{1}{p'}\\right)$.",
                    "$\\|e^{it\\Delta}f\\|_{L^{p'}} \\le C|t|^{-n(1/2-1/p')}\\|f\\|_{L^p}$."
                ],
                answer: "$\\|e^{it\\Delta}f\\|_{L^{p'}} \\le C|t|^{-n(1/2-1/p')}\\|f\\|_{L^p}$ ($\\frac{1}{p} + \\frac{1}{p'} = 1$, $2 \\le p' \\le \\infty$)",
                lesson: "분산 추정($L^1 \\to L^\\infty$)과 에너지 보존($L^2 \\to L^2$)의 보간이 모든 $L^p \\to L^{p'}$ 추정을 제공합니다. 이 $L^p$-$L^{p'}$ 추정은 다음 단원의 스트리하르츠 추정을 유도하는 데 핵심 입력(input)이 됩니다."
            }
        ],
        problems: [
            {
                id: "26-1",
                type: "choice",
                difficulty: 1,
                question: "$n$차원 자유 슈뢰딩거 방정식 $i\\partial_t u + \\Delta u = 0$의 분산 추정에서 $\\|e^{it\\Delta}f\\|_{L^\\infty}$의 시간 감쇠율은?",
                choices: [
                    "$|t|^{-1}$",
                    "$|t|^{-n/2}$",
                    "$|t|^{-(n-1)/2}$",
                    "$e^{-t}$ (지수 감쇠)"
                ],
                answer: "$|t|^{-n/2}$",
                hints: [
                    "슈뢰딩거 전파자의 핵 $K_t(x) = (4\\pi it)^{-n/2} e^{i|x|^2/(4t)}$에서 절대값을 계산하세요.",
                    "정류위상법의 $\\lambda^{-n/2}$ 감쇠와 관련됩니다."
                ],
                explanation: "$e^{it\\Delta}$의 적분 핵은 $|K_t(x)| = (4\\pi|t|)^{-n/2}$으로 공간 변수 $x$에 무관하게 균일합니다. 따라서 $\\|K_t\\|_{L^\\infty} = C|t|^{-n/2}$이고, Young 합성곱 부등식에 의해 $\\|e^{it\\Delta}f\\|_{L^\\infty} \\le \\|K_t\\|_{L^\\infty}\\|f\\|_{L^1} = C|t|^{-n/2}\\|f\\|_{L^1}$입니다.",
                wrongAnalysis: "$|t|^{-(n-1)/2}$는 파동 방정식의 감쇠율입니다. 슈뢰딩거와 파동의 감쇠율 차이는 분산 관계의 곡률 차이에서 비롯됩니다. 슈뢰딩거는 $\\omega = |\\xi|^2$ (모든 방향으로 곡률), 파동은 $\\omega = |\\xi|$ (방사 방향 곡률 없음)."
            },
            {
                id: "26-2",
                type: "text",
                difficulty: 2,
                question: "1차원 진동적분 $I(\\lambda) = \\int_0^1 e^{i\\lambda x^3}\\,dx$에서, $x = 0$이 퇴화 정류점(degenerate stationary point, $\\phi'(0) = \\phi''(0) = 0$, $\\phi'''(0) \\neq 0$)일 때 $|I(\\lambda)|$의 감쇠율을 구하시오.",
                answer: "$|I(\\lambda)| \\sim C\\lambda^{-1/3}$",
                hints: [
                    "위상함수 $\\phi(x) = x^3$에서 $\\phi'(0) = 0$, $\\phi''(0) = 0$, $\\phi'''(0) = 6 \\neq 0$입니다.",
                    "정류점의 퇴화 차수(order of degeneracy)가 감쇠율을 결정합니다: 차수 $k$이면 $\\lambda^{-1/k}$."
                ],
                explanation: "$\\phi(x) = x^3$에서 $x = 0$은 차수 3의 정류점입니다 ($\\phi$의 첫 번째 비영 도함수가 3차). van der Corput 보조정리(lemma)에 의해, $\\phi^{(k)}(x) \\ge c > 0$ ($k$차 도함수 하계)이면 $|I(\\lambda)| \\lesssim \\lambda^{-1/k}$입니다. $k = 3$이므로 $|I(\\lambda)| \\lesssim \\lambda^{-1/3}$이며, 이 상계는 최적입니다.",
                wrongAnalysis: "비퇴화 정류위상법의 $\\lambda^{-n/2}$ ($n = 1$이면 $\\lambda^{-1/2}$) 공식을 직접 적용하면 틀립니다. 퇴화 정류점에서는 감쇠가 더 느리며, 퇴화 차수에 따라 van der Corput 보조정리를 적용해야 합니다."
            },
            {
                id: "26-3",
                type: "text",
                difficulty: 3,
                question: "슈뢰딩거 전파자의 분산 추정 $\\|e^{it\\Delta}f\\|_{L^\\infty} \\le C|t|^{-n/2}\\|f\\|_{L^1}$에서, 감쇠율의 지수 $n/2$이 왜 위상함수 $\\phi(\\xi) = |\\xi|^2$의 헤시안과 관련되는지 정류위상법의 관점에서 설명하시오.",
                answer: "phi(xi) = |xi|^2의 헤시안은 2I_n (n차 항등행렬의 2배)이므로 det Hess = 2^n이며, 정류위상법에 의해 감쇠율 지수가 n/2",
                hints: [
                    "$\\phi(\\xi) = |\\xi|^2 = \\xi_1^2 + \\cdots + \\xi_n^2$의 2차 도함수 행렬을 계산하세요.",
                    "정류위상법의 감쇠율은 $\\lambda^{-n/2} / |\\det \\text{Hess}|^{1/2}$입니다."
                ],
                explanation: "$\\phi(\\xi) = |\\xi|^2$에 대해 $\\partial^2\\phi / \\partial\\xi_i\\partial\\xi_j = 2\\delta_{ij}$이므로 $\\text{Hess}(\\phi) = 2I_n$입니다. $\\det(2I_n) = 2^n \\neq 0$이므로 비퇴화 정류점이며, 정류위상법의 $n$차원 공식 $|I| \\lesssim \\lambda^{-n/2} |\\det \\text{Hess}|^{-1/2}$에서 지수 $n/2$이 결정됩니다. 물리적으로 $\\text{Hess}(\\phi) = 2I_n$은 분산 관계 $\\omega = |\\xi|^2$이 모든 $n$개 방향으로 동일한 곡률을 가짐을 의미하며, 이는 파동이 모든 방향으로 균등하게 분산됨을 뜻합니다. 반면 파동방정식의 $\\phi(\\xi) = |\\xi|$는 방사 방향 곡률이 없어 감쇠가 $(n-1)/2$로 약해집니다.",
                wrongAnalysis: "감쇠 지수가 단순히 '차원 $n$'에 의해서만 결정된다고 오해하면 안 됩니다. 핵심은 위상함수의 곡률(헤시안)이며, 같은 차원이라도 분산 관계가 다르면 감쇠율이 달라집니다."
            }
        ],
        summary: {
            keyPoints: [
                "진동적분의 점근 분석에서 정류위상법이 핵심: 정류점 없으면 급속 감쇠, 비퇴화 정류점이면 $\\lambda^{-n/2}$ 감쇠",
                "퇴화 정류점은 van der Corput 보조정리로 처리: 차수 $k$이면 $\\lambda^{-1/k}$ 감쇠",
                "슈뢰딩거 분산 추정: $\\|e^{it\\Delta}f\\|_{L^\\infty} \\le C|t|^{-n/2}\\|f\\|_{L^1}$",
                "파동 분산 추정: $|t|^{-(n-1)/2}$ 감쇠 (슈뢰딩거보다 약함)",
                "분산 관계의 곡률(헤시안)이 감쇠율을 결정"
            ],
            formulas: [
                "$I(\\lambda) = \\int e^{i\\lambda\\phi(x)} a(x)\\,dx \\sim (2\\pi/\\lambda)^{n/2} |\\det\\text{Hess}\\,\\phi|^{-1/2} a(x_0) e^{i\\lambda\\phi(x_0)}$",
                "$\\|e^{it\\Delta}f\\|_{L^\\infty} \\le C|t|^{-n/2}\\|f\\|_{L^1}$",
                "$e^{it\\Delta}f(x) = (4\\pi it)^{-n/2} \\int e^{i|x-y|^2/(4t)} f(y)\\,dy$",
                "$\\|e^{it\\Delta}f\\|_{L^{p'}} \\le C|t|^{-n(1/2-1/p')}\\|f\\|_{L^p}$"
            ],
            commonMistakes: [
                "정류점이 없는 경우에도 $\\lambda^{-n/2}$ 감쇠만 기대 — 실제로는 급속 감쇠 $O(\\lambda^{-N})$",
                "퇴화 정류점에 비퇴화 공식을 직접 적용하면 감쇠율이 과대평가됨",
                "슈뢰딩거($|t|^{-n/2}$)와 파동($|t|^{-(n-1)/2}$)의 감쇠율 혼동",
                "분산 추정의 $L^1$ 조건을 간과 — $L^2$ 노름은 보존되므로 $L^2 \\to L^\\infty$ 감쇠는 없음"
            ],
            nextConnection: "분산 추정은 다음 단원의 스트리하르츠 추정의 핵심 입력이며, TT* 논법과 결합하여 시공간 추정으로 승급됩니다."
        }
    },
    {
        id: 27,
        title: "스트리하르츠 추정과 국소 적정성",
        category: "분산형 PDE",
        level: "심화",
        question: "비선형 슈뢰딩거 방정식(NLS)과 비선형 파동방정식(NLW)의 해가 적절한 함수공간에서 국소적으로 존재하고 유일함을 어떻게 증명하는가?",
        concept: {
            intro: ":::definition[스트리하르츠 추정]\n스트리하르츠 추정(Strichartz estimates)은 분산 추정($L^1 \\to L^\\infty$ 감쇠)을 시공간(space-time) $L^q_t L^r_x$ 추정으로 승급시킵니다.\n\n**허용쌍(admissible pair)**: $(q, r)$이 $\\frac{2}{q} + \\frac{n}{r} = \\frac{n}{2}$, $2 \\le q, r \\le \\infty$ (단 $(q,r,n) \\neq (2,\\infty,2)$)를 만족할 때 슈뢰딩거 허용쌍이라 합니다.\n\n슈뢰딩거 방정식에 대한 스트리하르츠 추정은 다음과 같습니다:\n\n**동차 추정**: $\\|e^{it\\Delta}f\\|_{L^q_t L^r_x} \\le C\\|f\\|_{L^2_x}$\n\n**비동차(Duhamel) 추정**: $\\left\\|\\int_0^t e^{i(t-s)\\Delta} F(s)\\,ds\\right\\|_{L^q_t L^r_x} \\le C\\|F\\|_{L^{\\tilde{q}'}_t L^{\\tilde{r}'}_x}$\n여기서 $(q,r)$과 $(\\tilde{q}, \\tilde{r})$는 임의의 허용쌍이고, $\\tilde{q}'$, $\\tilde{r}'$는 각각의 켤레 지수입니다.\n:::\n\n:::theorem[TT* 논법과 Keel-Tao 끝점]\n스트리하르츠 추정의 증명은 TT* 논법(duality argument)에 기반합니다. 핵심 아이디어는:\n1. $T: L^2_x \\to L^q_t L^r_x$를 $Tf = e^{it\\Delta}f$로 정의합니다.\n2. $T^*: L^{q'}_t L^{r'}_x \\to L^2_x$는 $T^*F = \\int e^{-is\\Delta} F(s)\\,ds$입니다.\n3. $TT^*: L^{\\tilde{q}'}_t L^{\\tilde{r}'}_x \\to L^q_t L^r_x$의 유계성은 $TT^*F(t) = \\int e^{i(t-s)\\Delta}F(s)\\,ds$의 추정으로 환원됩니다.\n4. 분산 추정 $\\|e^{i(t-s)\\Delta}\\|_{L^1 \\to L^\\infty} \\le C|t-s|^{-n/2}$을 대입하면, Hardy-Littlewood-Sobolev 부등식으로 귀결됩니다.\n\nKeel-Tao(1998)는 끝점(endpoint) $(q,r) = (2, \\frac{2n}{n-2})$ ($n \\ge 3$)에서도 추정이 성립함을 증명했습니다.\n:::\n\n:::definition[비선형 슈뢰딩거 방정식 (NLS)]\nNLS는 다음 형태입니다:\n$$i\\partial_t u + \\Delta u = \\lambda|u|^{p-1}u, \\quad u(0,x) = u_0(x)$$\n$\\lambda > 0$이면 초점(focusing), $\\lambda < 0$이면 발산(defocusing)입니다. Duhamel 공식에 의해 적분 방정식으로 변환됩니다:\n$$u(t) = e^{it\\Delta}u_0 - i\\lambda\\int_0^t e^{i(t-s)\\Delta}|u(s)|^{p-1}u(s)\\,ds$$\n:::\n\n:::theorem[국소 적정성 (Local Well-Posedness)]\n스트리하르츠 공간 $X = L^q([0,T]; L^r(\\mathbb{R}^n))$에서 Duhamel 적분 방정식의 우변이 축약사상(contraction mapping)임을 보여 Banach 고정점 정리로 국소 적정성을 증명합니다.\n\n핵심 단계:\n1. $\\Phi(u)(t) = e^{it\\Delta}u_0 - i\\lambda\\int_0^t e^{i(t-s)\\Delta}|u|^{p-1}u(s)\\,ds$를 정의.\n2. 스트리하르츠 추정 + 비선형 추정(Hölder, Kato-Ponce)으로 $\\|\\Phi(u)\\|_X \\le C\\|u_0\\|_{H^s} + CT^\\alpha\\|u\\|_X^p$.\n3. $T > 0$을 충분히 작게 잡으면 $\\Phi$가 $B_R = \\{\\|u\\|_X \\le R\\}$에서 축약.\n\n**스케일링과 임계 정칙성**: NLS는 스케일링 대칭 $u(t,x) \\mapsto \\lambda^{2/(p-1)}u(\\lambda^2 t, \\lambda x)$을 가집니다. $\\dot{H}^{s_c}$ 노름이 불변인 임계 지수는 $s_c = \\frac{n}{2} - \\frac{2}{p-1}$입니다.\n- $s > s_c$: 부임계(subcritical), 국소 적정성이 표준적으로 성립\n- $s = s_c$: 임계(critical), 소시간(small data) 전역 존재 또는 정밀 분석 필요\n- $s < s_c$: 초임계(supercritical), 적정성이 일반적으로 실패\n:::\n\n:::note[참고문헌]\nTao, *Nonlinear Dispersive Equations: Local and Global Analysis*; Cazenave, *Semilinear Schrödinger Equations*; Linares-Ponce, *Introduction to Nonlinear Dispersive Equations*\n:::",
            intuition: "스트리하르츠 추정의 핵심 직관은 '분산에 의한 시공간 평균화'입니다. 분산 추정은 특정 시각 $t$에서의 $L^\\infty$ 감쇠를 줍니다. 그러나 비선형 PDE에서는 시간과 공간을 동시에 제어해야 합니다. 스트리하르츠 추정은 분산 감쇠를 시간에 대해 적분하여, $L^q_t L^r_x$ 형태의 시공간 노름으로 변환합니다. TT* 논법은 쌍대성을 이용하여 이 과정을 깔끔하게 처리합니다. 국소 적정성의 전략은 간단합니다: 비선형 항을 '섭동(perturbation)'으로 보고, 충분히 짧은 시간 구간에서 비선형 기여가 선형 부분보다 작다면 축약사상 원리가 작동합니다.",
            formula: "\\frac{2}{q} + \\frac{n}{r} = \\frac{n}{2} \\quad (\\text{허용쌍 조건})\n\n\\|e^{it\\Delta}f\\|_{L^q_t L^r_x} \\le C\\|f\\|_{L^2}\n\n\\left\\|\\int_0^t e^{i(t-s)\\Delta}F(s)\\,ds\\right\\|_{L^q_t L^r_x} \\le C\\|F\\|_{L^{\\tilde{q}'}_t L^{\\tilde{r}'}_x}\n\ni\\partial_t u + \\Delta u = \\lambda|u|^{p-1}u\n\ns_c = \\frac{n}{2} - \\frac{2}{p-1} \\quad (\\text{임계 정칙성})",
            summary: ":::note[요약]\n* 스트리하르츠 추정: 분산 추정을 시공간 $L^q_t L^r_x$ 노름으로 승급\n* 허용쌍: $2/q + n/r = n/2$, Keel-Tao 끝점 포함\n* TT* 논법: $\\|TT^*\\| = \\|T\\|^2$ 원리와 분산 추정의 결합\n* NLS 국소 적정성: Duhamel + 스트리하르츠 + 축약사상\n* 임계 정칙성 $s_c = n/2 - 2/(p-1)$: 스케일링이 결정\n* $s > s_c$ 부임계, $s = s_c$ 임계, $s < s_c$ 초임계\n:::"
        },
        examples: [
            {
                title: "[기본] 허용쌍의 계산",
                problem: "$n = 3$에서 슈뢰딩거 허용쌍의 예를 세 가지 이상 구하고, 끝점 쌍을 확인하시오.",
                steps: [
                    "허용쌍 조건: $\\frac{2}{q} + \\frac{3}{r} = \\frac{3}{2}$, $2 \\le q \\le \\infty$.",
                    "$q = \\infty$: $\\frac{3}{r} = \\frac{3}{2}$ $\\Rightarrow$ $r = 2$. 쌍: $(\\infty, 2)$.",
                    "$q = 4$: $\\frac{2}{4} + \\frac{3}{r} = \\frac{3}{2}$ $\\Rightarrow$ $\\frac{3}{r} = 1$ $\\Rightarrow$ $r = 3$. 쌍: $(4, 3)$.",
                    "$q = \\frac{8}{3}$: $\\frac{2}{8/3} + \\frac{3}{r} = \\frac{3}{2}$ $\\Rightarrow$ $\\frac{3}{4} + \\frac{3}{r} = \\frac{3}{2}$ $\\Rightarrow$ $r = 4$. 쌍: $(8/3, 4)$.",
                    "$q = 2$: $1 + \\frac{3}{r} = \\frac{3}{2}$ $\\Rightarrow$ $r = 6$. 쌍: $(2, 6)$. 이것이 끝점(endpoint).",
                    "끝점 $(2, 6)$은 Keel-Tao 정리에 의해 허용됩니다 ($n = 3 \\ge 3$).",
                    "정리: $(\\infty, 2)$, $(4, 3)$, $(8/3, 4)$, $(2, 6)$ 등."
                ],
                answer: "$(\\infty,2)$, $(4,3)$, $(8/3,4)$, 끝점 $(2,6)$ 등",
                lesson: "허용쌍의 스케일링 관계 $2/q + n/r = n/2$는 슈뢰딩거 전파자의 스케일링 대칭에서 자연스럽게 나옵니다. $q$가 클수록 시간 적분성이 강하고 $r$은 작아지며, 반대도 마찬가지입니다."
            },
            {
                title: "[응용] 3차원 3차 NLS의 국소 적정성",
                problem: "$n = 3$에서 $i\\partial_t u + \\Delta u = |u|^2 u$ ($p = 3$)의 임계 정칙성을 계산하고, $H^1$ 초기값에서의 국소 적정성을 스트리하르츠 추정으로 증명의 개요를 서술하시오.",
                steps: [
                    "임계 정칙성: $s_c = \\frac{3}{2} - \\frac{2}{3-1} = \\frac{3}{2} - 1 = \\frac{1}{2}$.",
                    "$s = 1 > s_c = 1/2$이므로 $H^1$ 문제는 부임계(subcritical)입니다.",
                    "Duhamel 공식: $u(t) = e^{it\\Delta}u_0 - i\\int_0^t e^{i(t-s)\\Delta}|u|^2u(s)\\,ds$.",
                    "스트리하르츠 공간 $X = L^4([0,T]; L^3(\\mathbb{R}^3)) \\cap C([0,T]; H^1)$을 선택합니다.",
                    "동차 추정: $\\|e^{it\\Delta}u_0\\|_{L^4_t L^3_x} \\le C\\|u_0\\|_{L^2}$.",
                    "비선형 추정: $\\||u|^2u\\|_{L^{4/3}_t L^{3/2}_x} \\le \\|u\\|_{L^4_t L^3_x}^3$ (Hölder, $(4/3, 3/2)$는 $(4,3)$의 켤레쌍).",
                    "비동차 스트리하르츠: $\\left\\|\\int_0^t e^{i(t-s)\\Delta}|u|^2u\\,ds\\right\\|_{L^4_t L^3_x} \\le C\\|u\\|_{L^4_t L^3_x}^3$.",
                    "$\\|\\Phi(u)\\|_X \\le C\\|u_0\\|_{H^1} + CT^\\alpha\\|u\\|_X^3$. $T$를 충분히 작게 잡으면 축약.",
                    "Banach 고정점 정리에 의해 $[0,T]$에서 유일한 해 존재."
                ],
                answer: "$s_c = 1/2$, $H^1$ 초기값은 부임계이며, 스트리하르츠 + 축약사상으로 국소 적정성 성립",
                lesson: "$s > s_c$인 부임계 상황에서는 시간 $T$의 거듭제곱($T^\\alpha$, $\\alpha > 0$)이 비선형 항에 붙어 $T$를 줄이면 축약이 됩니다. 이 $\\alpha > 0$이 부임계의 '여유분(margin)'이며, 임계에서는 $\\alpha = 0$이 되어 소 데이터(small data) 조건이 필요합니다."
            },
            {
                title: "[심화] TT* 논법으로 동차 스트리하르츠 추정 증명",
                problem: "분산 추정 $\\|e^{it\\Delta}f\\|_{L^\\infty} \\le C|t|^{-n/2}\\|f\\|_{L^1}$로부터 TT* 논법을 사용하여 $\\|e^{it\\Delta}f\\|_{L^q_t L^r_x} \\le C\\|f\\|_{L^2}$를 유도하는 과정의 핵심 단계를 서술하시오.",
                steps: [
                    "$T: L^2_x \\to L^q_t L^r_x$를 $Tf(t) = e^{it\\Delta}f$로 정의합니다.",
                    "$\\|T\\|^2 = \\|TT^*\\|$이므로, $TT^*$의 유계성을 보이면 충분합니다.",
                    "$TT^*F(t) = \\int_{\\mathbb{R}} e^{i(t-s)\\Delta} F(s)\\,ds$.",
                    "$\\|e^{i(t-s)\\Delta}\\|_{L^{r'}_x \\to L^r_x}$를 분산 추정 + Riesz-Thorin 보간으로 추정합니다.",
                    "$\\|e^{i(t-s)\\Delta}G\\|_{L^r} \\le C|t-s|^{-n(1/2-1/r)}\\|G\\|_{L^{r'}}$.",
                    "$\\|TT^*F(t)\\|_{L^r_x} \\le \\int |t-s|^{-n(1/2-1/r)} \\|F(s)\\|_{L^{r'}_x}\\,ds$.",
                    "시간 적분에 Hardy-Littlewood-Sobolev(HLS) 부등식 적용: $\\|\\int |t-s|^{-\\gamma} g(s)\\,ds\\|_{L^q_t} \\le C\\|g\\|_{L^{q'}_t}$, 단 $\\gamma = n(1/2 - 1/r) = n/r'$ 이고 $1/q + 1 = 1/q' + \\gamma$.",
                    "허용쌍 조건 $2/q + n/r = n/2$가 HLS 지수 관계와 정확히 일치함을 확인.",
                    "따라서 $\\|TT^*F\\|_{L^q_t L^r_x} \\le C\\|F\\|_{L^{q'}_t L^{r'}_x}$, 즉 $\\|Tf\\|_{L^q_t L^r_x} \\le C\\|f\\|_{L^2}$."
                ],
                answer: "분산 추정 $\\to$ $L^{r'} \\to L^r$ 감쇠 $\\to$ TT* 합성 $\\to$ HLS 부등식 $\\to$ 스트리하르츠",
                lesson: "TT* 논법은 '선형 작용소의 노름을 그 쌍대 합성으로 환원'하는 보편적 기법입니다. 스트리하르츠 추정에서는 분산 감쇠 $|t-s|^{-\\gamma}$의 시간 적분을 HLS 부등식으로 처리하며, 허용쌍 조건이 정확히 HLS의 지수 조건과 일치합니다."
            }
        ],
        problems: [
            {
                id: "27-1",
                type: "choice",
                difficulty: 1,
                question: "$n = 2$에서 슈뢰딩거 허용쌍 $(q, r)$의 조건은?",
                choices: [
                    "$\\frac{2}{q} + \\frac{2}{r} = 1$",
                    "$\\frac{1}{q} + \\frac{2}{r} = 1$",
                    "$\\frac{2}{q} + \\frac{2}{r} = 2$",
                    "$\\frac{2}{q} + \\frac{1}{r} = 1$"
                ],
                answer: "$\\frac{2}{q} + \\frac{2}{r} = 1$",
                hints: [
                    "일반 조건은 $\\frac{2}{q} + \\frac{n}{r} = \\frac{n}{2}$입니다.",
                    "$n = 2$를 대입하세요."
                ],
                explanation: "일반 허용쌍 조건 $\\frac{2}{q} + \\frac{n}{r} = \\frac{n}{2}$에 $n = 2$를 대입하면 $\\frac{2}{q} + \\frac{2}{r} = 1$이 됩니다. 예를 들어 $(q, r) = (4, 4)$, $(\\infty, 2)$, $(3, 6)$ 등이 허용쌍입니다.",
                wrongAnalysis: "허용쌍 조건에서 $n$의 위치를 혼동하기 쉽습니다. $\\frac{2}{q} + \\frac{n}{r} = \\frac{n}{2}$에서 $q$ 앞의 계수는 항상 $2$(시간은 1차원)이고, $r$ 앞의 계수가 공간 차원 $n$에 의존합니다."
            },
            {
                id: "27-2",
                type: "text",
                difficulty: 2,
                question: "$n$차원 NLS $i\\partial_t u + \\Delta u = |u|^{p-1}u$에서 $n = 1$, $p = 5$일 때의 임계 소볼레프 정칙성 $s_c$를 구하시오.",
                answer: "0",
                hints: [
                    "$s_c = \\frac{n}{2} - \\frac{2}{p-1}$에 $n = 1$, $p = 5$를 대입하세요.",
                    "$s_c = \\frac{1}{2} - \\frac{2}{4}$를 계산하세요."
                ],
                explanation: "$s_c = \\frac{n}{2} - \\frac{2}{p-1} = \\frac{1}{2} - \\frac{2}{4} = \\frac{1}{2} - \\frac{1}{2} = 0$입니다. 이는 1차원 5차 NLS가 $L^2$-임계(에너지 부임계)임을 의미합니다. $L^2$ 노름은 NLS의 보존량이므로, 이 방정식은 질량(mass) 임계 문제로서 분산형 PDE의 핵심 모델입니다.",
                wrongAnalysis: "$s_c$의 부호를 혼동하여 $s_c = 1/2 + 1/2 = 1$로 계산하는 실수가 있습니다. $s_c$는 $n/2$에서 $2/(p-1)$을 빼는 것이며, 빼기를 더하기로 착각하지 마세요."
            },
            {
                id: "27-3",
                type: "text",
                difficulty: 3,
                question: "NLS의 국소 적정성 증명에서 축약사상 $\\Phi(u) = e^{it\\Delta}u_0 - i\\lambda\\int_0^t e^{i(t-s)\\Delta}|u|^{p-1}u\\,ds$가 $B_R = \\{u : \\|u\\|_X \\le R\\}$에서 자기 자신으로의 사상($\\Phi: B_R \\to B_R$)이 되기 위한 $T$와 $R$의 선택 전략을 서술하시오.",
                answer: "R = 2C||u_0||, T를 C*T^alpha*R^{p-1} <= 1/2가 되도록 선택하면 Phi가 B_R에서 자기 사상이 됨",
                hints: [
                    "동차 스트리하르츠에서 $\\|e^{it\\Delta}u_0\\|_X \\le C\\|u_0\\|_{H^s}$, 비동차에서 $\\|\\int_0^t e^{i(t-s)\\Delta}N(u)\\,ds\\|_X \\le CT^\\alpha\\|u\\|_X^p$를 사용합니다.",
                    "$\\|\\Phi(u)\\|_X \\le C\\|u_0\\|_{H^s} + CT^\\alpha R^p \\le R$이 되도록 $R$과 $T$를 잡으세요."
                ],
                explanation: "스트리하르츠 추정과 비선형 추정을 결합하면 $\\|\\Phi(u)\\|_X \\le C\\|u_0\\|_{H^s} + C'T^\\alpha\\|u\\|_X^p$입니다 ($\\alpha > 0$은 부임계 조건에서 보장). $R = 2C\\|u_0\\|_{H^s}$로 잡으면 $\\|\\Phi(u)\\|_X \\le R/2 + C'T^\\alpha R^p$입니다. $C'T^\\alpha R^{p-1} \\le 1/2$이 되도록 $T \\le (2C'R^{p-1})^{-1/\\alpha}$로 선택하면 $\\|\\Phi(u)\\|_X \\le R$이 됩니다. 축약성($\\|\\Phi(u) - \\Phi(v)\\|_X \\le \\frac{1}{2}\\|u - v\\|_X$)도 유사하게 $T$를 줄여 보장합니다. 핵심은 $\\alpha > 0$(부임계)이어서 $T$를 줄이면 비선형 기여를 임의로 작게 만들 수 있다는 점입니다.",
                wrongAnalysis: "$R$을 먼저 고정하지 않고 $T$만 줄이려 하면 $R$과의 관계가 불분명해집니다. 또한 임계 상황($\\alpha = 0$)에서는 $T$를 줄여도 비선형 항이 줄어들지 않으므로, 소 데이터 조건($\\|u_0\\|$ 자체가 작음)이 필요합니다."
            }
        ],
        summary: {
            keyPoints: [
                "스트리하르츠 추정: 분산 추정을 시공간 $L^q_t L^r_x$ 노름으로 승급, 허용쌍 $2/q + n/r = n/2$",
                "TT* 논법 + HLS 부등식이 스트리하르츠 증명의 핵심, Keel-Tao 끝점 포함",
                "NLS/NLW 국소 적정성: Duhamel 공식 + 스트리하르츠 추정 + Banach 고정점(축약사상)",
                "스케일링 임계 정칙성 $s_c = n/2 - 2/(p-1)$이 문제의 난이도를 결정",
                "부임계: $T$를 줄여 축약, 임계: 소 데이터 필요, 초임계: 적정성 일반적 실패"
            ],
            formulas: [
                "허용쌍: $\\frac{2}{q} + \\frac{n}{r} = \\frac{n}{2}$",
                "$\\|e^{it\\Delta}f\\|_{L^q_t L^r_x} \\le C\\|f\\|_{L^2}$",
                "$\\|\\int_0^t e^{i(t-s)\\Delta}F\\,ds\\|_{L^q_t L^r_x} \\le C\\|F\\|_{L^{\\tilde{q}'}_t L^{\\tilde{r}'}_x}$",
                "$i\\partial_t u + \\Delta u = \\lambda|u|^{p-1}u$",
                "$s_c = \\frac{n}{2} - \\frac{2}{p-1}$"
            ],
            commonMistakes: [
                "허용쌍 조건에서 $q$ 앞의 $2$와 $r$ 앞의 $n$을 혼동",
                "끝점 $(q,r) = (2, 2n/(n-2))$는 $n \\ge 3$에서만 의미 있음 ($n = 1,2$에서는 다른 처리 필요)",
                "축약사상에서 자기 사상($\\Phi: B_R \\to B_R$)과 축약성을 모두 확인해야 함 — 하나만으로는 부족",
                "부임계($\\alpha > 0$)와 임계($\\alpha = 0$)의 차이를 간과하면 국소 존재 시간의 의존성이 달라짐"
            ],
            nextConnection: "스트리하르츠 추정과 국소 적정성은 전역 적정성(global well-posedness), 산란(scattering), 폭발(blow-up) 분석의 출발점이며, 집중 콤팩트성(concentration compactness)과 프로파일 분해(profile decomposition) 등 현대 분산형 PDE의 핵심 주제로 연결됩니다."
        }
    }
];
