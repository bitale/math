"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dispersiveResearchLessons = void 0;
exports.dispersiveResearchLessons = [
    {
        id: 33,
        title: "분산형 PDE 최신 연구 문제",
        category: "분산형 PDE 연구",
        level: "심화",
        question: "2018-2025년 분산형 PDE 분야의 핵심 돌파구와 미해결 문제에는 어떤 것들이 있는가?",
        concept: {
            intro: ":::theorem[Deng-Hani 파동 난류 — 파동 운동론적 극한 (2021-2024)]\n비선형 슈뢰딩거 방정식(NLS)\n$$i\\partial_t u + \\Delta u = \\lambda |u|^2 u, \\quad x \\in \\mathbb{T}^d_L$$\n에서 $\\lambda \\to 0$, 상자 크기 $L \\to \\infty$인 약한 비선형 극한(weak nonlinearity limit)을 생각합니다. 랜덤 초기 데이터에 대해 2차 상관함수(second-order correlation) $\\mathbb{E}[|\\hat{u}_k(t)|^2]$의 시간 진화가 **파동 운동론적 방정식(wave kinetic equation, WKE)**\n$$\\partial_t n_k = \\mathcal{C}[n](k) = \\int \\delta(k_1 - k_2 + k_3 - k) \\delta(|k_1|^2 - |k_2|^2 + |k_3|^2 - |k|^2)\\, n_1 n_2 n_3 n_k \\left(\\frac{1}{n_k} + \\frac{1}{n_2} - \\frac{1}{n_1} - \\frac{1}{n_3}\\right) dk_{123}$$\n에 의해 기술됩니다. Yu Deng과 Zaher Hani는 이 파동 운동론적 극한을 3D 토러스 위 3차 NLS에 대해 **엄밀하게** 정당화하였습니다. 이는 Zakharov (1960년대)의 약한 난류 이론(weak turbulence theory)에 대한 최초의 완전한 수학적 정당화이며, Inventiones Mathematicae (2024)에 출판되었습니다. 핵심 기술은 파인만 다이어그램(Feynman diagram)의 조합론적 전개와 정수론적 격자점 계수(lattice point counting) 기법입니다.\n:::\n\n:::theorem[Merle-Raphaël-Rodnianski-Szeftel 자기유사 내파 (2022)]\n3차원 비점성 압축성 오일러(Euler) 방정식\n$$\\partial_t \\rho + \\nabla \\cdot (\\rho v) = 0, \\quad \\partial_t (\\rho v) + \\nabla \\cdot (\\rho v \\otimes v) + \\nabla p = 0$$\n에서 **매끄러운($C^\\infty$) 초기값**으로부터 유한 시간 내에 특이점이 형성되는 자기유사 내파(self-similar implosion) 해를 구성하였습니다. Merle, Raphaël, Rodnianski, Szeftel의 결과(Annals of Mathematics 2022)는 기존의 Guderley (1942) 자기유사 해가 불안정하다는 통념을 깨고, 안정적인(codimension-0) 매끄러운 폭발 메커니즘을 발견하였습니다. 이 결과는 비압축성 Navier-Stokes 방정식의 매끄러움 문제에도 새로운 관점을 제시합니다.\n:::\n\n:::theorem[Collot-Merle-Raphaël 초임계 블로업 동역학 (2020-2024)]\n에너지 초임계(energy supercritical) 비선형 파동방정식(NLW) 및 NLS에서의 **Type II 블로업**과 **솔리톤 버블링(soliton bubbling)** 현상이 엄밀하게 구성되었습니다. Type II 블로업이란 블로업 시점 $T$에서\n$$\\|\\nabla u(t)\\|_{L^2} \\ll (T - t)^{-\\alpha_{\\text{ODE}}}$$\n와 같이 자기유사 속도(ODE 블로업 속도 $\\alpha_{\\text{ODE}}$)보다 느리게 발산하는 현상입니다. 이때 해는 블로업 시점 근처에서 정지 솔리톤(ground state soliton)의 재조정된 복사본으로 분해됩니다. Collot-Merle-Raphaël은 다중 버블(multi-bubble) 블로업, 즉 여러 스케일에서 동시에 솔리톤이 분리되는 동역학을 구성하였습니다.\n:::\n\n:::theorem[Ionescu-Pausader 수면파의 전역 적정성 (2022-2024)]\n중력-모세관 수면파(gravity-capillary water waves) 방정식의 **2D 전역 적정성**이 Alexandru Ionescu와 Fabio Pausader에 의해 확립되었습니다. 이들은 비회전(irrotational) 2차원 수면파가 충분히 작고 국소화된 초기 교란에 대해 전역적으로 존재하며, 시간이 지남에 따라 분산에 의해 산란(scattering)함을 증명하였습니다. 핵심 난점은 수면파 방정식의 준선형(quasilinear) 구조와 2D에서의 느린 분산 감쇠($t^{-1/2}$)입니다.\n:::\n\n:::theorem[불변 기브스 측도와 확률론적 적정성 (2020-2024)]\nBringmann, Deng-Nahmod-Yue 등의 연구자들이 분산형 PDE의 **기브스 측도(Gibbs measure) 불변성**과 **확률론적 적정성(probabilistic well-posedness)**에서 획기적 진전을 이루었습니다. 예를 들어, 2D 3차 NLS의 기브스 측도\n$$d\\mu = Z^{-1} \\exp\\left(-\\frac{1}{2}\\int |\\nabla u|^2\\,dx - \\frac{1}{4}\\int |u|^4\\,dx\\right) \\prod_x du(x)$$\n는 형식적으로 해의 흐름 아래 불변입니다(Liouville 정리의 무한차원 아날로그). $d \\ge 3$에서는 $|u|^4$ 항이 기브스 측도의 지지(support)에서 발산하므로, **위크 정칙화(Wick renormalization)**가 필수적입니다. Bringmann (2024)은 3D에서 정칙화된 기브스 측도의 불변성을 NLS 흐름 아래에서 증명하였습니다.\n:::\n\n:::note[주요 미해결 문제들]\n1. **솔리톤 분해 예상(Soliton Resolution Conjecture)**: 일반적인 에너지 임계/초임계 분산형 방정식의 해가 시간이 지남에 따라 유한 개의 탈결합(decoupled) 솔리톤과 복사(radiation) 항으로 분해된다는 예상. 방사대칭 경우에 Duyckaerts-Kenig-Merle (2013)가 에너지 임계 파동방정식에 대해 증명하였으나, 비방사대칭 일반적 경우는 미해결입니다.\n2. **3D 에너지 초임계 NLS/NLW의 전역 동역학**: $\\dot{H}^{s_c}$ ($s_c > 1$) 초임계 문제의 전역적 적정성 및 산란은 거의 알려진 바가 없습니다.\n3. **Navier-Stokes 정칙성과의 관계**: MRRS의 내파 메커니즘이 비압축성 Navier-Stokes 방정식에도 적용 가능한지는 핵심적 미해결 문제입니다. 점성(viscosity)의 역할이 결정적입니다.\n4. **NLS의 난류 전이(turbulent transfer)**: Deng-Hani의 결과를 넘어서, 운동론적 시간 규모($T \\gg \\lambda^{-2}$) 이후의 동역학은 완전히 열린 문제입니다.\n:::",
            intuition: "2018-2025년의 분산형 PDE 연구는 크게 세 가지 흐름으로 요약됩니다.\n\n첫째, **블로업 동역학의 정밀 분석**입니다. MRRS의 내파 구성과 Collot-Merle-Raphaël의 Type II 블로업은 '특이점이 어떻게 형성되는가'에 대한 이해를 혁명적으로 깊게 했습니다. 핵심 아이디어는 자기유사 변환(self-similar transformation)을 통해 블로업 근방의 동역학을 정상 상태(steady state)의 안정성 문제로 환원하는 것입니다.\n\n둘째, **통계역학적 관점**입니다. Deng-Hani의 파동 운동론과 기브스 측도 이론은 PDE를 '전형적(typical)' 초기값에 대해 연구합니다. 결정론적 방법이 실패하는 저정칙성(low regularity) 영역에서 확률론적 방법이 강력한 도구가 됩니다.\n\n셋째, **장시간 동역학과 산란**입니다. 솔리톤 분해 예상과 수면파의 전역 적정성은 '해가 결국 어떻게 행동하는가'라는 근본 질문에 답합니다. 분산(dispersion)과 비선형 상호작용의 경쟁이 장시간 행동을 결정합니다.\n\n이 세 흐름은 서로 깊이 연결되어 있으며, 현대 분산형 PDE 이론의 가장 활발한 전선(frontier)을 형성합니다.",
            formula: "\\text{WKE: } \\partial_t n_k = \\mathcal{C}[n](k) \\quad \\text{(Deng-Hani, 2024)}\n\n\\text{자기유사 변수: } u(t,x) = (T-t)^\\alpha U\\!\\left(\\frac{x}{(T-t)^\\beta}\\right) \\quad \\text{(MRRS 내파)}\n\n\\text{Type I: } \\|\\nabla u(t)\\|_{L^2} \\sim (T-t)^{-\\alpha_{\\text{ODE}}}, \\quad \\text{Type II: } \\|\\nabla u(t)\\|_{L^2} \\ll (T-t)^{-\\alpha_{\\text{ODE}}}\n\n\\text{기브스 측도: } d\\mu = Z^{-1} e^{-H(u)} \\prod_x du(x), \\quad H(u) = \\frac{1}{2}\\|\\nabla u\\|_{L^2}^2 + \\frac{1}{4}\\|u\\|_{L^4}^4\n\n\\text{솔리톤 분해: } u(t) \\to \\sum_{j=1}^{J} Q_{\\lambda_j(t)}(\\cdot - x_j(t)) + v_L(t) \\quad (t \\to T \\text{ 또는 } t \\to \\infty)",
            summary: ":::note[요약]\n* Deng-Hani (2024): 3차 NLS로부터 파동 운동론적 방정식의 완전한 유도 — 약한 난류 이론의 최초 엄밀 정당화\n* MRRS (2022): 3D 압축성 오일러에서 매끄러운 초기값으로부터의 자기유사 내파 구성\n* Collot-Merle-Raphaël: 초임계 NLW/NLS에서 Type II 블로업과 다중 솔리톤 버블링 구성\n* Ionescu-Pausader: 2D 중력-모세관 수면파의 전역 적정성\n* Bringmann, Deng-Nahmod-Yue: 기브스 측도 불변성과 확률론적 적정성의 돌파\n* 미해결: 솔리톤 분해의 일반적 증명, 에너지 초임계 전역 이론, NS 정칙성 관계\n:::"
        },
        examples: [
            {
                title: "[연구] 파동 운동론적 방정식 유도 (Deng-Hani)",
                problem: "3차 NLS $i\\partial_t u + \\Delta u = \\lambda |u|^2 u$ ($\\lambda \\ll 1$)에서 랜덤 초기 데이터 $u_0 = \\sum_k \\hat{c}_k e^{ik \\cdot x}$ ($\\hat{c}_k$는 독립 가우시안)의 4점 상관함수(four-point correlation)의 시간 진화를 형식적으로 유도하고, Wick 정리와 공명 분석을 통해 충돌 적분(collision integral)이 나타남을 보이시오.",
                steps: [
                    "Duhamel 공식을 적용합니다: $\\hat{u}_k(t) = e^{-i|k|^2 t} \\hat{c}_k + \\lambda \\int_0^t e^{-i|k|^2(t-s)} \\sum_{k_1-k_2+k_3=k} \\hat{u}_{k_1} \\overline{\\hat{u}_{k_2}} \\hat{u}_{k_3}(s)\\,ds$.",
                    "2차 상관함수 $n_k(t) = \\mathbb{E}[|\\hat{u}_k(t)|^2]$의 시간 미분을 구합니다.",
                    "$\\partial_t n_k$를 전개하면 4점 상관함수 $\\mathbb{E}[\\hat{u}_{k_1} \\overline{\\hat{u}_{k_2}} \\hat{u}_{k_3} \\overline{\\hat{u}_k}]$가 나타납니다.",
                    "Wick 정리(가우시안 모멘트 분해)를 적용합니다: $\\mathbb{E}[\\hat{u}_1 \\bar{\\hat{u}}_2 \\hat{u}_3 \\bar{\\hat{u}}_4] \\approx n_{k_1} n_{k_2} (\\delta_{12}\\delta_{34} + \\delta_{14}\\delta_{23}) + \\text{cumulant}$.",
                    "누적율(cumulant)의 시간 진화를 추적하면, 위상 인자 $e^{i\\Omega t}$ ($\\Omega = |k_1|^2 - |k_2|^2 + |k_3|^2 - |k|^2$)의 시간 적분에서 **공명 조건**(resonance condition) $\\Omega = 0$만이 장시간 기여함을 알 수 있습니다.",
                    "공명 기여를 모으면 $\\partial_t n_k = \\lambda^2 \\int \\delta(k_1-k_2+k_3-k)\\,\\delta(\\Omega)\\,n_1 n_2 n_3 n_k (n_k^{-1} + n_2^{-1} - n_1^{-1} - n_3^{-1})\\,dk_{123}$을 얻습니다.",
                    "이것이 Zakharov의 4파 충돌 적분(4-wave collision integral)이며, 시간 규모 $t \\sim \\lambda^{-2}$(운동론적 시간 규모)에서 유효합니다."
                ],
                answer: "충돌 적분 $\\mathcal{C}[n](k) = \\lambda^2 \\int \\delta(k_1-k_2+k_3-k)\\,\\delta(|k_1|^2 - |k_2|^2 + |k_3|^2 - |k|^2)\\,n_1 n_2 n_3 n_k (n_k^{-1} + n_2^{-1} - n_1^{-1} - n_3^{-1})\\,dk_{123}$이 운동론적 시간 규모 $T \\sim \\lambda^{-2}$에서 나타납니다.",
                lesson: "Deng-Hani의 핵심 기여는 이 형식적 유도를 엄밀하게 만든 것입니다. 파인만 다이어그램 전개에서 나타나는 무한히 많은 항들의 수렴성을 조합론적 방법과 정수론적 격자점 계수를 통해 제어하였습니다. 이는 통계역학의 볼츠만 방정식 유도(Lanford 정리)의 파동 아날로그입니다."
            },
            {
                title: "[연구] 자기유사 내파 프로파일 방정식 (MRRS 2022)",
                problem: "3D 압축성 오일러 방정식에서 자기유사 해 $\\rho(t,x) = (T-t)^a R(y)$, $v(t,x) = (T-t)^b V(y)$ ($y = x/(T-t)^c$)의 프로파일 방정식을 유도하고, 지수 $a, b, c$의 관계를 차원 분석으로 결정하시오.",
                steps: [
                    "등엔트로피(isentropic) 압축성 오일러를 고려합니다: $\\partial_t \\rho + \\nabla \\cdot (\\rho v) = 0$, $\\partial_t v + (v \\cdot \\nabla)v + \\rho^{-1} \\nabla p = 0$, 상태방정식 $p = \\rho^\\gamma$.",
                    "자기유사 변수 $y = x/(T-t)^c$를 도입하고, $\\tau = -\\log(T-t)$로 놓으면, $\\partial_t = (T-t)^{-1}(\\partial_\\tau + cy \\cdot \\nabla_y)$입니다.",
                    "연속 방정식에 대입: $(T-t)^{a-1}[-aR + cy \\cdot \\nabla_y R] + (T-t)^{a+b-c} \\nabla_y \\cdot (RV) = 0$.",
                    "시간 멱급수가 상쇄되려면 $a - 1 = a + b - c$, 즉 $b = c - 1$이어야 합니다.",
                    "운동량 방정식에 대입하면: $(T-t)^{b-1}[-bV + cy \\cdot \\nabla_y V] + (T-t)^{2b-c}(V \\cdot \\nabla_y)V + (T-t)^{a(\\gamma-1)-2c+c} \\gamma \\rho^{\\gamma-2} \\nabla_y R = 0$.",
                    "지수 일치 조건: $b - 1 = 2b - c$에서 $c = b + 1$, 이는 $b = c-1$과 일치합니다. 또한 $b - 1 = a(\\gamma-1) - c$에서 $a = \\frac{c}{\\gamma - 1} = \\frac{b+1}{\\gamma-1}$을 얻습니다.",
                    "구대칭 경우 $V(y) = W(|y|) \\hat{y}$, $R(y) = R(|y|)$로 놓으면 $r = |y|$에 대한 상미분방정식 시스템이 됩니다.",
                    "MRRS의 핵심은 이 ODE 시스템의 매끄러운 해가 존재하며, 이것이 원래 PDE의 **안정적** 블로업 프로파일임을 보인 것입니다."
                ],
                answer: "지수 관계: $b = c - 1$, $a = (b+1)/(\\gamma-1) = c/(\\gamma-1)$. 프로파일 $(R, V)$는 자기유사 변수 $y = x/(T-t)^c$에서의 ODE 시스템을 만족합니다.",
                lesson: "MRRS의 결과에서 기존 Guderley 해와의 결정적 차이는 **초기값의 정칙성**입니다. Guderley 해는 원점에서 특이한 초기값을 필요로 하지만, MRRS는 $C^\\infty$ 초기값으로부터 안정적 내파를 구성했습니다. 이는 비점성 3D 오일러 블로업의 첫 번째 '안정적' 예입니다."
            },
            {
                title: "[연구] Type II 블로업과 솔리톤 버블링 (Collot-Merle-Raphaël)",
                problem: "에너지 초임계 비선형 파동방정식 $\\partial_{tt} u - \\Delta u = |u|^{p-1}u$ ($p > p_{\\text{conf}}(d)$)에서 Type I과 Type II 블로업의 차이를 블로업 속도 $\\|\\nabla u(t)\\|_{L^2}$의 증가율로 설명하고, Type II 블로업에서 솔리톤이 분리되는 메커니즘을 스케일링 관점에서 서술하시오.",
                steps: [
                    "**스케일링 분석**: 방정식 $\\partial_{tt}u - \\Delta u = |u|^{p-1}u$는 스케일링 $u \\mapsto \\lambda^{2/(p-1)} u(\\lambda t, \\lambda x)$ 아래 불변입니다.",
                    "**임계 소볼레프 지수**: $s_c = d/2 - 2/(p-1)$이며, $\\dot{H}^{s_c} \\times \\dot{H}^{s_c - 1}$이 스케일링 불변 공간입니다. 에너지 초임계란 $s_c > 1$을 의미합니다.",
                    "**Type I 블로업**: 자기유사(ODE) 속도로 폭발합니다: $\\|\\nabla u(t)\\|_{L^2} \\sim C(T-t)^{-(s_c - 1)}$. 이는 $u \\sim (T-t)^{-2/(p-1)}$에서 나오는 자연스러운 속도입니다.",
                    "**Type II 블로업**: 블로업 속도가 자기유사 속도보다 **엄격히 느립니다**: $\\|\\nabla u(t)\\|_{L^2} (T-t)^{s_c - 1} \\to 0$ as $t \\to T$. 에너지는 유계로 남습니다.",
                    "**솔리톤 버블링 메커니즘**: Type II 블로업에서 해는 다음과 같이 분해됩니다:\n$u(t, x) \\approx Q_{\\lambda(t)}(x - x_0) + \\tilde{u}(t, x)$\n여기서 $Q$는 정지 솔리톤($-\\Delta Q + Q = |Q|^{p-1}Q$), $\\lambda(t) \\to 0$ ($t \\to T$)은 집중 스케일, $\\tilde{u}$는 정칙 나머지항입니다.",
                    "스케일 $\\lambda(t)$가 0으로 수렴하면서, 솔리톤 $Q_{\\lambda(t)}$는 점점 작은 영역에 에너지를 집중시킵니다. 블로업 시점에서 정확히 '한 개의 버블'이 분리(decouple)됩니다.",
                    "**다중 버블**: Collot-Merle-Raphaël은 $J$개의 서로 다른 스케일 $\\lambda_1(t) \\ll \\lambda_2(t) \\ll \\cdots \\ll \\lambda_J(t) \\to 0$에서 동시에 솔리톤이 버블링하는 해를 구성했습니다."
                ],
                answer: "Type I: $\\|\\nabla u(t)\\|_{L^2} \\sim (T-t)^{-(s_c-1)}$ (자기유사 속도). Type II: $\\|\\nabla u(t)\\|_{L^2}(T-t)^{s_c-1} \\to 0$ (자기유사보다 느림). Type II에서는 스케일 $\\lambda(t) \\to 0$인 솔리톤이 분리되며, 에너지가 유계로 남습니다.",
                lesson: "Type II 블로업은 '에너지의 집중(concentration)'이 솔리톤에 의해 매개되는 현상입니다. 이는 솔리톤 분해 예상과 깊이 연결되어 있으며, 블로업 시점에서의 해의 구조를 정밀하게 기술합니다. 에너지 초임계 상황에서 이러한 동역학이 일반적(generic)인지는 여전히 열린 문제입니다."
            },
            {
                title: "[연구] 확률론적 적정성과 기브스 측도 불변성 (Bringmann)",
                problem: "2D 3차 NLS의 기브스 측도 $d\\mu = Z^{-1} e^{-H(u)} \\prod_x du(x)$에서 해밀토니안 $H$를 명시하고, Bourgain의 불변 측도 정리의 핵심 단계를 서술하시오. 왜 정칙화(renormalization)가 $d \\ge 3$에서 필수적인지 설명하시오.",
                steps: [
                    "2D 토러스 $\\mathbb{T}^2$ 위의 집속(focusing) 3차 NLS: $i\\partial_t u + \\Delta u = -|u|^2 u$를 고려합니다.",
                    "해밀토니안은 $H(u) = \\frac{1}{2}\\int_{\\mathbb{T}^2} |\\nabla u|^2\\,dx - \\frac{1}{4}\\int_{\\mathbb{T}^2} |u|^4\\,dx$입니다 (집속이므로 $-$ 부호).",
                    "기브스 측도: $d\\mu = Z^{-1} \\exp\\left(-\\frac{1}{2}\\|\\nabla u\\|_{L^2}^2 + \\frac{1}{4}\\|u\\|_{L^4}^4\\right) \\prod_x du(x)$.",
                    "**Bourgain의 접근법 (1996)**: (i) 유한차원 절단(truncation) $P_{\\le N} u$에 대해 기브스 측도 $\\mu_N$을 구성합니다. (ii) 절단된 NLS의 흐름 $\\Phi_N^t$가 $\\mu_N$을 보존함을 리우빌 정리로 보입니다. (iii) $N \\to \\infty$ 극한에서 $\\mu_N \\to \\mu$의 수렴과 $\\Phi_N^t \\to \\Phi^t$의 수렴을 동시에 보입니다.",
                    "핵심 단계는 (iii)에서의 **확률론적 국소 적정성**: 기브스 측도의 전형적 초기값은 $u_0 \\in H^{s}$ ($s < 1$, $d = 2$)에 속하므로, 결정론적 적정성이 보장하는 것보다 낮은 정칙성입니다. $u = e^{it\\Delta}\\phi + v$로 분해하여 랜덤 선형 해를 빼고 나머지 $v$의 정칙성을 높이는 기법을 사용합니다.",
                    "**$d \\ge 3$에서의 정칙화 필요성**: $d = 3$에서 가우시안 자유장(Gaussian free field)은 $H^s$ ($s < 1/2$)에 속합니다. $|u|^4$은 이 정칙성에서 $\\mu$-거의 어디서나 **발산**합니다. 따라서 $\\|u\\|_{L^4}^4$을 $\\|u\\|_{L^4}^4 - 6C_N \\|u\\|_{L^2}^2 + 3C_N^2|\\mathbb{T}^3|$ (위크 순서화, Wick ordering)으로 교체하는 정칙화가 필수적입니다.",
                    "Bringmann (2024)은 3D에서 이 정칙화된 기브스 측도의 불변성을 확립하기 위해 파라제어 해석학(paracontrolled calculus)과 확률론적 대칭 추정(probabilistic symmetry estimates)을 결합하였습니다."
                ],
                answer: "해밀토니안: $H(u) = \\frac{1}{2}\\|\\nabla u\\|_{L^2}^2 - \\frac{1}{4}\\|u\\|_{L^4}^4$. Bourgain 정리의 핵심은 유한차원 절단의 불변성 + 확률론적 적정성을 통한 극한 이행입니다. $d \\ge 3$에서는 가우시안 자유장의 낮은 정칙성 때문에 비선형 항이 발산하여 위크 정칙화가 필수적입니다.",
                lesson: "확률론적 적정성은 '대부분의' 초기값에 대해서는 해가 존재한다는 관점입니다. 결정론적 이론이 요구하는 정칙성보다 낮은 수준에서도, 기브스 측도가 지지하는 전형적 함수에 대해 해를 구성할 수 있습니다. 이는 해의 존재성에 대한 패러다임의 전환입니다."
            },
            {
                title: "[연구] 솔리톤 분해 예상의 현황 (Duyckaerts-Kenig-Merle)",
                problem: "에너지 임계 파동방정식 $\\partial_{tt}u - \\Delta u = |u|^{4/(d-2)}u$ ($d = 3, 4, 5$)에서 Duyckaerts-Kenig-Merle (2013)의 솔리톤 분해 정리를 정확히 진술하고, 일반적인 (비방사대칭) 경우에서의 미해결 난점 두 가지를 서술하시오.",
                steps: [
                    "**에너지 임계 NLW**: $\\partial_{tt}u - \\Delta u = |u|^{4/(d-2)}u$은 스케일링 불변 소볼레프 공간이 에너지 공간 $\\dot{H}^1 \\times L^2$와 일치하는 임계 문제입니다.",
                    "**정지 솔리톤(ground state)**: $W(x) = (1 + |x|^2/d(d-2))^{-(d-2)/2}$는 타원형 방정식 $-\\Delta W = |W|^{4/(d-2)}W$의 양의 해이며, Aubin-Talenti 함수입니다.",
                    "**DKM 솔리톤 분해 정리 (2013, 방사대칭)**: $u$가 방사대칭 에너지 유계 해이면, 블로업 시점 $T$ (또는 $T = \\infty$)에서 다음 분해가 성립합니다:\n$u(t) = \\sum_{j=1}^{J} \\frac{\\iota_j}{\\lambda_j(t)^{(d-2)/2}} W\\!\\left(\\frac{x}{\\lambda_j(t)}\\right) + v_L(t) + o_{\\dot{H}^1}(1)$\n여기서 $\\iota_j \\in \\{\\pm 1\\}$, $\\lambda_1(t) \\ll \\lambda_2(t) \\ll \\cdots \\ll \\lambda_J(t)$, $v_L$은 자유 파동(linear radiation)입니다.",
                    "**미해결 난점 1 — 채널 에너지(channel of energy) 방법의 비방사대칭 확장**: DKM 증명의 핵심 도구인 채널 에너지 부등식은 방사대칭 자유 파동에 대해 $\\|\\nabla_{t,x} v_L(t)\\|_{L^2(|x|>|t|)} \\ge c \\|(v_L(0), \\partial_t v_L(0))\\|_{\\dot{H}^1 \\times L^2}$를 말합니다. 이 부등식의 비방사대칭 버전은 모든 차원에서 성립하지 않으며 (짝수 차원에서 반례 존재), 대체 방법이 필요합니다.",
                    "**미해결 난점 2 — 스케일 매개변수의 분리(decoupling)**: 비방사대칭 경우 솔리톤들의 공간 위치 $x_j(t)$도 추적해야 합니다. 서로 다른 솔리톤의 위치와 스케일이 상호작용하는 '비직교(non-orthogonal)' 상황의 처리가 극도로 어렵습니다.",
                    "**현재 상황**: $d = 3$ 방사대칭에서 DKM (2013)이 완전 증명. $d = 3, 4, 5$ 비방사대칭에서 type II 블로업 분류는 Jendrej (2019), Jendrej-Lawrie (2023) 등이 부분적 진전을 이루었습니다. 일반적 초기값에 대한 완전한 솔리톤 분해는 미해결입니다."
                ],
                answer: "DKM 정리: 방사대칭 에너지 유계 해는 유한 개의 재조정된 솔리톤 $W$와 자유 복사(radiation)로 분해됩니다. 비방사대칭 난점: (1) 채널 에너지 부등식의 비방사대칭 확장 실패, (2) 다중 솔리톤의 위치-스케일 상호작용 제어 어려움.",
                lesson: "솔리톤 분해 예상은 분산형 PDE의 '최종 상태'에 대한 가장 근본적인 질문입니다. 이는 '비선형 해 = 비선형 속박 상태(솔리톤) + 선형 복사'라는 구조적 분해를 제시하며, 적분가능 시스템의 역산란 이론(inverse scattering)의 비적분가능 일반화로 볼 수 있습니다."
            }
        ],
        problems: [
            {
                id: "33-1",
                type: "text",
                difficulty: 3,
                question: "Deng-Hani의 파동 운동론적 방정식 유도에서 '파인만 다이어그램 전개(Feynman diagram expansion)'가 왜 핵심적인 역할을 하는지 설명하시오. 특히 시간 규모 $T \\sim \\lambda^{-2}$의 의미를 물리적으로 해석하시오.",
                answer: "Duhamel 반복을 통해 NLS의 해를 $\\lambda$의 멱급수로 전개하면, 각 항은 트리(tree) 또는 그래프 구조로 표현됩니다. 이것이 파인만 다이어그램입니다. 운동론적 방정식을 유도하려면 $\\lambda^{-2}$ 시간까지의 모든 다이어그램의 기여를 합산해야 하는데, 이 시간 규모에서 비공명(non-resonant) 항들은 빠른 진동에 의해 상쇄되고 공명 항만 살아남습니다. $T \\sim \\lambda^{-2}$는 비선형 상호작용이 누적되어 에너지 스펙트럼에 $O(1)$ 변화를 일으키는 '운동론적 시간 규모'입니다. 이는 희박 기체의 볼츠만 방정식에서 평균 자유 시간(mean free time)에 대응합니다. Deng-Hani의 핵심 기여는 이 다이어그램 합의 절대 수렴성을 격자 위의 정수론적 계수(lattice point counting)와 조합론적 소거(combinatorial cancellation)를 통해 증명한 것입니다.",
                hints: [
                    "Duhamel 공식을 반복 적용하면 $\\hat{u}_k(t)$의 멱급수 전개가 나옵니다. 각 항의 구조를 그래프로 그려보시오.",
                    "$\\lambda^2 T \\sim 1$이라는 스케일링이 의미하는 바를 생각해 보시오: 비선형성의 세기($\\lambda^2$)와 시간($T$)의 곱이 $O(1)$입니다.",
                    "비공명 항이 왜 상쇄되는지 정상위상(stationary phase) 관점에서 생각하시오."
                ],
                explanation: "파인만 다이어그램 전개는 비선형 항의 반복 적용을 체계적으로 추적하는 조합론적 도구입니다. 3차 NLS의 Duhamel 반복에서 $n$번째 항은 $2n+1$개의 자유장의 곱으로, 이를 그래프(다이어그램)로 표현합니다. 운동론적 시간 $T \\sim \\lambda^{-2}$에서 $n$번째 항의 기여는 $O(\\lambda^{2n} T^n) = O(1)$이므로 모든 차수의 다이어그램이 동등하게 기여합니다. 이것이 급수의 수렴성 증명을 어렵게 만드는 핵심 난점이며, Deng-Hani는 다이어그램 간의 미묘한 소거(cancellation)를 이용하여 이를 극복했습니다.",
                wrongAnalysis: "흔한 오류: (1) 파인만 다이어그램을 양자장론의 것과 혼동하는 경우 — 여기서는 고전 파동의 비선형 상호작용을 나타냅니다. (2) $T \\sim \\lambda^{-2}$ 규모를 단순히 '약한 비선형성이므로 오래 걸린다'고만 이해하는 경우 — 이는 에너지 전달(energy cascade)이 일어나는 최소 시간 규모라는 정확한 물리적 의미가 있습니다. (3) 수렴성이 자명하다고 생각하는 경우 — 각 차수의 기여가 $O(1)$이므로 급수의 절대 수렴은 전혀 자명하지 않습니다."
            },
            {
                id: "33-2",
                type: "text",
                difficulty: 3,
                question: "Merle-Raphaël-Rodnianski-Szeftel (MRRS)의 자기유사 내파 결과가 Guderley (1942)의 고전적 자기유사 해와 어떻게 다른지 세 가지 관점에서 비교하시오. 특히 '매끄러운 초기값'의 수학적 의미와 그것이 왜 핵심적인 돌파인지 설명하시오.",
                answer: "(1) 초기값의 정칙성: Guderley 해는 $t = T$에서의 특이점으로부터 시간을 거꾸로 추적하면 $t = 0$의 초기값이 원점에서 특이합니다(비매끄러움). 반면 MRRS는 $C^\\infty$ (매끄러운) 초기값으로부터 출발하여 유한 시간 내 특이점이 형성됩니다. (2) 안정성: Guderley 해는 불안정(unstable)합니다 — 초기 교란에 의해 해가 완전히 달라집니다. MRRS의 내파 프로파일은 안정적(codimension-0)이며, 초기값의 열린 집합에서 동일한 블로업 행동이 나타납니다. (3) 적용 대상: Guderley는 등엔트로피 압축성 오일러를 다루지만, MRRS의 프레임워크는 비압축성 Navier-Stokes, 결함 집속(defocusing) NLS 등으로 확장됩니다. '매끄러운 초기값으로부터의 폭발'은 밀레니엄 문제(Navier-Stokes 정칙성)와 직접적으로 관련됩니다.",
                hints: [
                    "Guderley 해의 초기값($t = 0$)에서의 프로파일을 생각해 보시오: 원점에서 어떤 행동을 보이는가?",
                    "'안정성'이란 초기값의 작은 교란에 대한 블로업 행동의 지속성(persistence)을 의미합니다.",
                    "MRRS 결과가 비압축성 Navier-Stokes에 주는 함의를 생각해 보시오."
                ],
                explanation: "Guderley (1942)의 자기유사 해는 3D 등엔트로피 압축성 오일러에서 구면 충격파가 원점으로 수렴하는 해입니다. 이 해의 초기 데이터는 원점에서 특이하며 (비매끄러움), 물리적으로는 '이미 수렴하고 있는 충격파'를 기술합니다. 따라서 '매끄러운 유체가 자발적으로 특이점을 형성하는가?'라는 근본 질문에는 답하지 못합니다. MRRS는 이 질문에 최초로 긍정적 답을 준 것이며, 이는 PDE 이론에서의 패러다임 전환입니다. 안정성(codimension-0)은 이 블로업 메커니즘이 물리적으로 관측 가능한(generic) 현상임을 의미합니다.",
                wrongAnalysis: "흔한 오류: (1) '자기유사 해이므로 같은 것'이라고 단순화하는 경우 — 초기값의 정칙성과 안정성이 근본적으로 다릅니다. (2) MRRS를 단순히 '새로운 폭발 해'로 이해하는 경우 — 핵심은 매끄러운 초기값과 안정성이지, 자기유사 해의 존재 자체가 아닙니다. (3) 비압축성 Navier-Stokes로의 함의를 과대평가하는 경우 — MRRS의 직접 결과는 압축성 오일러에 대한 것이며, 비압축성 및 점성 효과는 별도의 분석이 필요합니다."
            },
            {
                id: "33-3",
                type: "text",
                difficulty: 3,
                question: "솔리톤 분해 예상(soliton resolution conjecture)을 수학적으로 정확히 진술하시오. 이 예상이 현재 어떤 방정식과 어떤 조건 아래에서 증명되어 있는지 기술하시오.",
                answer: "솔리톤 분해 예상: 에너지 임계(또는 아임계) 분산형 방정식의 에너지 유계 해 $u(t)$에 대해, 블로업 시점 $T$ (유한 또는 무한) 근처에서 다음 분해가 $\\dot{H}^1$에서 성립한다: $u(t) = \\sum_{j=1}^{J} Q_{j,\\lambda_j(t)}(\\cdot - x_j(t)) e^{i\\gamma_j(t)} + v_L(t) + o_{\\dot{H}^1}(1)$. 여기서 $Q_j$는 (가능하면 서로 다른) 정지 솔리톤, $\\lambda_j(t)$는 스케일 매개변수, $x_j(t)$는 위치, $\\gamma_j(t)$는 위상, $v_L$은 자유 해(선형 산란)이며, 솔리톤들은 서로 탈결합(decoupled)됩니다.\n\n증명된 경우: (1) 에너지 임계 NLW, $d = 3$, 방사대칭: Duyckaerts-Kenig-Merle (2013). (2) 에너지 임계 파동 사상(wave maps) $\\mathbb{R}^2 \\to \\mathbb{S}^2$, 등변(equivariant): Côte-Kenig-Lawrie-Schlag (2015), Jendrej-Lawrie (2023). (3) 적분가능 방정식 (KdV, 1D 3차 NLS): 역산란 이론에 의한 고전적 결과. (4) 에너지 아임계 NLW, $d = 3$, 방사대칭: Duyckaerts-Jia-Kenig-Merle (2017). 일반적(비대칭, 비적분가능, 고차원) 경우는 미해결입니다.",
                hints: [
                    "분해에 등장하는 각 요소(솔리톤, 스케일, 위치, 복사)의 역할을 명확히 구분하시오.",
                    "'탈결합(decoupled)'의 수학적 의미는 무엇인가?",
                    "적분가능 시스템의 경우를 떠올리시오 — KdV의 $N$-솔리톤 해가 어떻게 행동하는가?"
                ],
                explanation: "솔리톤 분해 예상의 핵심 내용은 '비선형 분산형 방정식의 일반 해는 결국 비선형 속박 상태(솔리톤)와 선형 복사의 중첩으로 분해된다'는 것입니다. '탈결합'이란 $\\lambda_i(t)/\\lambda_j(t) + \\lambda_j(t)/\\lambda_i(t) + |x_i(t) - x_j(t)|/(\\lambda_i(t) + \\lambda_j(t)) \\to \\infty$를 의미합니다. 이 예상은 적분가능 시스템에서는 역산란 변환에 의해 자연스럽게 성립하지만, 비적분가능 방정식에서의 증명은 완전히 새로운 방법을 요구합니다. DKM의 방사대칭 증명은 채널 에너지(channel of energy) 방법과 프로파일 분해(profile decomposition, 또는 집중 콤팩트성)를 핵심 도구로 사용합니다.",
                wrongAnalysis: "흔한 오류: (1) 솔리톤 분해를 모든 분산형 방정식에 대해 진술하는 경우 — 이 예상은 주로 에너지 임계 또는 아임계 경우에 해당하며, 초임계에서는 진술 자체가 수정되어야 합니다. (2) $J = 0$ (솔리톤 없이 순수 산란)인 경우를 배제하는 것 — 이 경우도 분해에 포함됩니다. (3) 적분가능 시스템의 결과를 비적분가능 시스템으로 자동 확장하는 오류 — 역산란 이론은 비적분가능 방정식에 적용되지 않습니다."
            },
            {
                id: "33-4",
                type: "text",
                difficulty: 3,
                question: "확률론적 적정성(probabilistic well-posedness)이 결정론적 적정성(deterministic well-posedness)과 어떻게 다른지 $H^s$ 정칙성 관점에서 구체적으로 설명하시오. 어떤 상황에서 확률론적 방법이 결정론적 방법보다 더 강한 결과를 줄 수 있는가?",
                answer: "결정론적 적정성은 주어진 소볼레프 공간 $H^s$의 모든 초기값에 대해 해의 존재, 유일성, 연속 의존성을 보장합니다. 이는 $s \\ge s_{\\text{det}}$ (결정론적 임계 정칙성) 이상에서만 성립합니다. 예를 들어, 2D 3차 NLS는 $s \\ge 0$에서 결정론적으로 적정합니다.\n\n확률론적 적정성은 $H^s$의 '대부분의' 초기값 — 정확히는 기브스 측도 $\\mu$ 또는 가우시안 측도 $\\nu$에 대해 $\\mu$-거의 모든 ($\\nu$-거의 모든) 초기값에 대해 해가 존재함을 보장합니다. 이는 $s < s_{\\text{det}}$에서도 가능합니다. 예를 들어, 3D 3차 NLS는 결정론적으로 $s \\ge 1/2$에서 적정하지만, 확률론적으로는 $s < 1/2$인 기브스 측도의 지지에서도 해가 구성됩니다.\n\n핵심 기법은 Bourgain의 랜덤화(randomization)입니다: 초기값 $u_0 = \\sum_k c_k e_k$의 계수 $c_k$에 독립 랜덤 부호 $\\epsilon_k \\in \\{\\pm 1\\}$를 곱하면, $u_0^\\omega = \\sum_k \\epsilon_k c_k e_k$의 $H^s$ 노름은 변하지 않지만, Strichartz 추정이 확률적으로 개선됩니다. 이 개선은 비선형 항의 추정에서 결정적인 이득을 줍니다.\n\n대가(tradeoff): 확률론적 적정성은 유일성과 연속 의존성이 약해질 수 있으며, '예외 집합'(측도 0)이 존재합니다.",
                hints: [
                    "결정론적 임계 정칙성 $s_{\\text{det}}$은 스케일링으로 결정됩니다. $s_c = d/2 - 2/(p-1)$을 생각하시오.",
                    "랜덤화된 초기값 $u_0^\\omega$의 Strichartz 노름이 왜 개선되는지 대수의 법칙(law of large numbers) 관점에서 생각하시오.",
                    "기브스 측도의 지지(support)가 어떤 $H^s$에 속하는지 계산해 보시오."
                ],
                explanation: "결정론적 적정성에서는 $H^s$의 '최악의' 초기값에 대해서도 해가 존재해야 합니다. 스케일링 제약에 의해 $s \\ge s_c$ (임계 정칙성) 미만에서는 비적정(ill-posedness)이 나타날 수 있습니다 (Christ-Colliander-Tao의 노름 인플레이션). 확률론적 적정성은 이 '최악의 경우'가 측도론적으로 예외적(측도 0)임을 보이고, 전형적(typical) 초기값에 집중합니다. 기법의 핵심은 랜덤화에 의한 확률론적 Strichartz 추정의 개선이며, 이는 랜덤 푸리에 급수의 대수의 법칙적 소거(cancellation)에 기인합니다.",
                wrongAnalysis: "흔한 오류: (1) '확률론적 적정성 = 거의 모든 초기값에서 적정'으로 오해하는 경우 — 여기서 '거의 모든'은 르베그 측도가 아니라 특정 가우시안/기브스 측도에 대한 것입니다. (2) 확률론적 방법이 항상 더 강하다고 생각하는 경우 — 유일성과 연속 의존성의 약화가 대가입니다. (3) 랜덤화가 $H^s$ 정칙성을 향상시킨다고 오해하는 경우 — 소볼레프 정칙성은 변하지 않으며, 개선되는 것은 Strichartz형 시공간 추정(분산적 추정)입니다."
            },
            {
                id: "33-5",
                type: "choice",
                difficulty: 2,
                question: "다음 중 2020년 이후에 수학적으로 엄밀하게 증명된 결과는 어느 것인가?",
                choices: [
                    "3D 비압축성 Navier-Stokes 방정식의 매끄러운 초기값으로부터의 유한시간 폭발 (blow-up)",
                    "3D 비점성 압축성 오일러 방정식의 매끄러운 초기값으로부터의 안정적 자기유사 내파 (Merle-Raphaël-Rodnianski-Szeftel, 2022)",
                    "일반적 (비방사대칭) 에너지 임계 NLW에 대한 솔리톤 분해 예상의 완전 증명",
                    "4차원 이상에서의 양-밀스(Yang-Mills) 질량 간극 문제의 해결"
                ],
                answer: "3D 비점성 압축성 오일러 방정식의 매끄러운 초기값으로부터의 안정적 자기유사 내파 (Merle-Raphaël-Rodnianski-Szeftel, 2022)",
                hints: [
                    "각 선택지의 문제가 현재 해결되었는지, 미해결인지를 구분하시오.",
                    "Navier-Stokes 폭발 문제는 밀레니엄 문제 중 하나임을 기억하시오.",
                    "MRRS의 결과는 '압축성' 오일러에 대한 것이지, '비압축성' Navier-Stokes에 대한 것이 아닙니다."
                ],
                explanation: "MRRS (2022)는 3D 비점성 압축성 오일러 방정식에서 $C^\\infty$ 초기값으로부터 유한시간 내에 특이점이 형성되는 안정적 자기유사 내파를 엄밀하게 구성하였습니다 (Annals of Mathematics 2022). 이는 2020년 이후 분산형/유체 PDE 분야의 가장 중요한 결과 중 하나입니다.\n\n다른 선택지들은 모두 미해결 문제입니다: (1) 비압축성 Navier-Stokes의 폭발 문제는 밀레니엄 문제로 미해결, (3) 비방사대칭 솔리톤 분해는 미해결, (4) 양-밀스 질량 간극은 밀레니엄 문제로 미해결.",
                wrongAnalysis: "가장 흔한 오류는 MRRS의 결과를 비압축성 Navier-Stokes에 대한 것으로 혼동하는 것입니다. MRRS의 직접적 결과는 '압축성'(compressible) '비점성'(inviscid) 오일러 방정식에 대한 것이며, 비압축성 Navier-Stokes는 점성(viscosity)과 비압축성 조건이 추가되므로 완전히 다른 문제입니다. 또한 솔리톤 분해가 '방사대칭에서 증명됨'을 알고 있는 경우, (3)이 맞다고 착각할 수 있으나, 문제는 '비방사대칭 일반적 경우'를 묻고 있습니다."
            }
        ],
        summary: {
            keyPoints: [
                "Deng-Hani (2024): 3차 NLS로부터 파동 운동론적 방정식의 완전한 수학적 유도 (Inventiones Mathematicae)",
                "MRRS (2022): 3D 압축성 오일러에서 매끄러운 초기값 → 안정적 자기유사 내파, 유한시간 블로업의 첫 안정적 메커니즘 (Annals of Mathematics)",
                "Collot-Merle-Raphaël: 초임계 NLW/NLS의 Type II 블로업, 다중 솔리톤 버블링 동역학 구성",
                "Ionescu-Pausader: 2D 중력-모세관 수면파의 전역 적정성 확립",
                "Bringmann, Deng-Nahmod-Yue: 3D 기브스 측도 불변성, 확률론적 적정성의 결정론적 한계 돌파",
                "솔리톤 분해 예상은 방사대칭 에너지 임계에서 증명, 일반적 경우 미해결"
            ],
            formulas: [
                "\\text{WKE: } \\partial_t n_k = \\int \\delta(k_1-k_2+k_3-k)\\,\\delta(\\Omega)\\,n_1 n_2 n_3 n_k (n_k^{-1}+n_2^{-1}-n_1^{-1}-n_3^{-1})\\,dk_{123}",
                "\\text{자기유사 내파: } u(t,x) = (T-t)^\\alpha U(x/(T-t)^\\beta),\\quad \\text{지수 관계 } b = c-1,\\; a = c/(\\gamma-1)",
                "\\text{Type II 블로업: } \\|\\nabla u(t)\\|_{L^2}(T-t)^{s_c - 1} \\to 0 \\text{ as } t \\to T",
                "\\text{기브스 측도: } d\\mu = Z^{-1}e^{-H(u)}\\prod_x du(x),\\quad H = \\tfrac{1}{2}\\|\\nabla u\\|_2^2 + \\tfrac{1}{4}\\|u\\|_4^4",
                "\\text{솔리톤 분해: } u(t) = \\sum_{j=1}^{J} Q_{\\lambda_j(t)}(\\cdot - x_j(t))e^{i\\gamma_j(t)} + v_L(t) + o_{\\dot{H}^1}(1)"
            ],
            commonMistakes: [
                "MRRS의 압축성 오일러 결과를 비압축성 Navier-Stokes 블로업으로 혼동하는 것 — 점성과 비압축성 조건이 결정적 차이를 만듭니다",
                "파동 운동론적 방정식의 유도에서 수렴성을 자명하게 여기는 것 — 운동론적 시간 규모에서 모든 차수의 다이어그램이 $O(1)$로 기여합니다",
                "솔리톤 분해의 방사대칭 증명을 일반적 경우로 자동 확장하는 오류 — 채널 에너지 방법의 비방사대칭 확장이 핵심 난점입니다",
                "확률론적 적정성에서 '거의 모든'의 의미를 르베그 측도로 오해하는 것 — 이는 특정 가우시안/기브스 측도에 대한 것입니다",
                "Type I과 Type II 블로업을 단순히 속도 차이로만 이해하는 것 — Type II는 솔리톤 버블링이라는 질적으로 다른 메커니즘에 의합니다"
            ],
            nextConnection: "이 연구 수준의 문제들은 분산형 PDE의 세 가지 근본 질문 — (1) 특이점 형성 (블로업), (2) 장시간 동역학 (산란과 솔리톤 분해), (3) 통계역학적 기술 (난류와 기브스 측도) — 을 관통합니다. 이들은 조화해석학, 미분기하, 확률론, 수론과의 심층적 상호작용을 통해 발전하고 있으며, 현대 수학의 가장 활발한 연구 전선 중 하나입니다."
        }
    }
];
