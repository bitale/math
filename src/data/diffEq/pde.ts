import { Lesson } from "../../types";

export const pdeLessons: Lesson[] = [
{
  "id": 17,
  "title": "PDE 입문과 분류",
  "category": "편미분방정식",
  "level": "심화",
  "question": "편미분방정식은 무엇이고, 어떤 기준으로 분류할까?",
  "concept": {
    "intro": ":::definition[편미분방정식(PDE)]\n편미분방정식(PDE, Partial Differential Equation)은 두 개 이상의 독립변수에 대한 편미분을 포함하는 미지함수의 방정식입니다. ODE가 $y(x)$처럼 하나의 독립변수만 다루는 반면, PDE는 $u(x,y)$, $u(x,t)$, $u(x,y,z,t)$ 등 여러 변수에 동시에 의존하는 함수를 다룹니다.\n:::\n\nPDE의 **차수(order)**는 등장하는 편미분의 최고 계수입니다. $u_t = \\alpha u_{xx}$에서 가장 높은 미분은 $u_{xx}$(2계)이므로 2계 PDE입니다. **선형성(linearity)**도 중요합니다. 미지함수 $u$와 그 편미분들이 1차식으로만 등장하면 선형 PDE이고, $u \\cdot u_x$처럼 곱이 나타나거나 $u^2$같은 비선형 항이 있으면 비선형 PDE입니다. 선형 PDE에서는 중첩 원리(superposition principle)가 성립하여, 두 해의 합도 해가 됩니다. 이것이 푸리에 급수 풀이의 근거입니다.\n\n:::theorem[PDE 유형 분류]\n2계 선형 PDE $Au_{xx} + Bu_{xy} + Cu_{yy} + Du_x + Eu_y + Fu = G$는 판별식 $\\Delta = B^2 - 4AC$에 의해 세 가지 유형으로 분류됩니다. 이 분류는 2차 곡선(원뿔곡선) $Ax^2 + Bxy + Cy^2 + \\cdots = 0$의 분류와 동일한 수학적 구조입니다:\n\n$$\\Delta = B^2 - 4AC \\begin{cases} < 0 & \\text{타원형(elliptic)} \\\\ = 0 & \\text{포물선형(parabolic)} \\\\ > 0 & \\text{쌍곡선형(hyperbolic)} \\end{cases}$$\n\n**타원형(elliptic)** PDE의 대표는 라플라스 방정식 $u_{xx} + u_{yy} = 0$입니다. 여기서 $A=1, B=0, C=1$이므로 $\\Delta = 0 - 4 = -4 < 0$입니다. 타원형 PDE는 시간 변수가 없는 정상상태(steady-state) 문제를 기술하며, 해는 매우 매끄럽습니다(해석적). **포물선형(parabolic)** PDE의 대표는 열방정식 $u_t = \\alpha u_{xx}$입니다. 시간 $t$를 $y$로 보면 $A=\\alpha, B=0, C=0$이므로 $\\Delta = 0$입니다. 포물선형은 확산 현상을 기술하며, 초기 불연속이 즉시 매끄러워지는 평활화(smoothing) 효과가 특징입니다. **쌍곡선형(hyperbolic)** PDE의 대표는 파동방정식 $u_{tt} = c^2 u_{xx}$입니다. $A=c^2, B=0, C=-1$로 보면 $\\Delta = 0 + 4c^2 > 0$입니다. 쌍곡선형은 파동 전파를 기술하며, 초기 불연속이 보존되어 전파됩니다.\n:::\n\n:::definition[경계조건]\nPDE의 해를 결정하려면 **경계조건(boundary conditions)**과 **초기조건(initial conditions)**이 필요합니다. 경계조건은 공간 영역의 경계에서 부과되는 조건으로, 세 가지 주요 유형이 있습니다. **디리클레(Dirichlet) 조건**은 경계에서 함수값 자체를 지정합니다: $u|_{\\partial\\Omega} = f$. 예를 들어 막대 양 끝의 온도를 0으로 고정하는 것입니다. **노이만(Neumann) 조건**은 경계에서 법선 방향 도함수를 지정합니다: $\\dfrac{\\partial u}{\\partial n}\\Big|_{\\partial\\Omega} = g$. 이는 경계에서의 열 유출량을 지정하는 것에 해당합니다. **로빈(Robin) 조건**은 함수값과 도함수의 선형결합을 지정합니다: $\\alpha u + \\beta \\dfrac{\\partial u}{\\partial n}\\Big|_{\\partial\\Omega} = h$. 이는 뉴턴의 냉각 법칙처럼 경계에서 대류 열전달이 일어나는 상황을 모델링합니다.\n:::\n\n초기조건은 시간 방향의 출발점 정보입니다. 열방정식($u_t$ 포함)은 1계 시간미분이므로 초기조건 $u(x,0) = \\phi(x)$ 하나가 필요합니다. 파동방정식($u_{tt}$ 포함)은 2계 시간미분이므로 초기 변위 $u(x,0) = \\phi(x)$와 초기 속도 $u_t(x,0) = \\psi(x)$ 두 개가 필요합니다. 라플라스 방정식은 시간이 없으므로 초기조건 없이 경계조건만으로 해가 결정됩니다.\n\n:::theorem[적정조건(well-posedness)]\nPDE 이론에서 근본적으로 중요한 개념이 **적정조건(well-posedness)**입니다. 아다마르(Hadamard)가 제안한 이 개념에 따르면, 문제가 적정(well-posed)하려면 세 가지를 만족해야 합니다: (1) **해의 존재(existence)**: 주어진 조건 아래 해가 적어도 하나 존재해야 합니다. (2) **해의 유일성(uniqueness)**: 해가 둘 이상 존재하지 않아야 합니다. (3) **해의 안정성(stability)**: 초기조건이나 경계조건의 작은 변화가 해의 작은 변화만을 야기해야 합니다. 이 세 조건이 모두 충족되면 물리적으로 의미 있는 모델이라 할 수 있습니다. 타원형+디리클레, 포물선형+초기-디리클레, 쌍곡선형+초기-디리클레 조합은 모두 적정 문제의 대표적 예시입니다.\n:::",
    "intuition": "PDE의 세 유형을 직관적으로 이해하는 방법이 있습니다. 타원형(라플라스)은 '평형 상태'입니다 — 고무막을 경계에 고정하고 놓아두면 최종적으로 도달하는 형태입니다. 포물선형(열)은 '확산'입니다 — 잉크 한 방울을 물에 떨어뜨리면 시간이 지남에 따라 퍼져나가는 과정입니다. 쌍곡선형(파동)은 '전파'입니다 — 호수에 돌을 던지면 파문이 퍼져나가는 것입니다. 경계조건은 '울타리'이고 초기조건은 '출발점'입니다. 디리클레는 울타리 높이를 고정, 노이만은 울타리에서의 기울기를 고정, 로빈은 높이와 기울기의 혼합 조건을 부과합니다.",
    "formula": "\\text{2계 선형 PDE:}\\ Au_{xx} + Bu_{xy} + Cu_{yy} + \\cdots = 0\n\\text{판별식:}\\ \\Delta = B^2 - 4AC\n\\Delta < 0:\\ \\text{타원형 (라플라스}\\ u_{xx}+u_{yy}=0\\text{)}\n\\Delta = 0:\\ \\text{포물선형 (열}\\ u_t = \\alpha u_{xx}\\text{)}\n\\Delta > 0:\\ \\text{쌍곡선형 (파동}\\ u_{tt} = c^2 u_{xx}\\text{)}\n\\text{디리클레:}\\ u|_{\\partial\\Omega} = f\n\\text{노이만:}\\ \\frac{\\partial u}{\\partial n}\\Big|_{\\partial\\Omega} = g\n\\text{로빈:}\\ \\alpha u + \\beta \\frac{\\partial u}{\\partial n}\\Big|_{\\partial\\Omega} = h",
    "summary": ":::note[요약]\n• PDE = 편미분이 포함된 미지함수의 방정식\n• $B^2 - 4AC$로 타원/포물선/쌍곡선 분류\n• 경계조건: 디리클레(값), 노이만(미분), 로빈(혼합)\n• 적정조건: 존재, 유일, 안정\n:::"
  },
  "examples": [
    {
      "title": "[기본] PDE의 유형 분류",
      "problem": "$3u_{xx} + 4u_{xy} + u_{yy} - 2u_x + u = 0$의 유형을 판별하시오.",
      "steps": [
        "$A = 3$, $B = 4$, $C = 1$을 확인합니다.",
        "판별식 $\\Delta = B^2 - 4AC = 16 - 12 = 4$를 계산합니다.",
        "$\\Delta = 4 > 0$이므로 이 PDE는 쌍곡선형(hyperbolic)입니다.",
        "쌍곡선형 PDE는 파동 전파와 같은 현상을 기술하며, 특성곡선(characteristics)이 두 개 존재합니다."
      ],
      "answer": "쌍곡선형(hyperbolic), $\\Delta = B^2 - 4AC = 4 > 0$",
      "lesson": "2계 선형 PDE의 유형은 최고차 항의 계수 $A, B, C$만으로 결정됩니다. 저차 항($Du_x, Eu_y, Fu$)이나 우변은 유형 분류에 영향을 주지 않습니다."
    },
    {
      "title": "[기본] 대표적인 PDE의 유형 확인",
      "problem": "라플라스 방정식 $u_{xx} + u_{yy} = 0$의 유형을 판별하시오.",
      "steps": [
        "$A = 1$, $B = 0$, $C = 1$.",
        "$\\Delta = 0^2 - 4(1)(1) = -4 < 0$.",
        "$\\Delta < 0$이므로 타원형(elliptic)입니다.",
        "타원형 PDE는 정상상태 문제를 기술하며, 해가 매우 매끄럽습니다."
      ],
      "answer": "타원형(elliptic), $\\Delta = -4 < 0$",
      "lesson": "라플라스 방정식은 타원형의 대표입니다. 시간 변수가 없는 평형 상태를 기술합니다."
    },
    {
      "title": "[응용] 경계조건의 종류 식별",
      "problem": "막대의 양 끝에서 $u(0,t) = 100$, $\\dfrac{\\partial u}{\\partial x}(L,t) = 0$이 주어졌을 때, 각각 어떤 종류의 경계조건인지 식별하시오.",
      "steps": [
        "$u(0,t) = 100$: 경계에서 함수값 자체를 지정 → 디리클레(Dirichlet) 조건.",
        "$\\dfrac{\\partial u}{\\partial x}(L,t) = 0$: 경계에서 법선 도함수를 지정 → 노이만(Neumann) 조건.",
        "물리적 의미: $x=0$에서 온도를 100℃로 고정, $x=L$에서 열 유출이 0(단열).",
        "혼합 경계조건: 한쪽은 디리클레, 다른 쪽은 노이만."
      ],
      "answer": "$x=0$: 디리클레, $x=L$: 노이만 (단열 조건)",
      "lesson": "디리클레는 값 자체를, 노이만은 미분값을 지정합니다. 물리적으로 디리클레는 온도 고정, 노이만은 열 유출량 제어에 해당합니다."
    },
    {
      "title": "[응용] 선형성과 중첩 원리",
      "problem": "$u_1$과 $u_2$가 모두 열방정식 $u_t = \\alpha u_{xx}$의 해일 때, $3u_1 - 2u_2$도 해인지 확인하시오.",
      "steps": [
        "$v = 3u_1 - 2u_2$로 놓습니다.",
        "$v_t = 3(u_1)_t - 2(u_2)_t = 3\\alpha(u_1)_{xx} - 2\\alpha(u_2)_{xx}$.",
        "$\\alpha v_{xx} = \\alpha(3(u_1)_{xx} - 2(u_2)_{xx})$.",
        "$v_t = \\alpha v_{xx}$ ✓. $v$도 열방정식의 해입니다.",
        "이것이 선형 PDE의 중첩 원리(superposition principle)입니다."
      ],
      "answer": "$3u_1 - 2u_2$도 열방정식의 해 (중첩 원리)",
      "lesson": "선형 PDE에서 해의 임의의 선형결합도 해입니다. 이 원리가 푸리에 급수 풀이의 근거입니다."
    },
    {
      "title": "[심화] 적정 조건(well-posedness) 분석",
      "problem": "파동방정식 $u_{tt} = c^2 u_{xx}$에 경계조건 $u(0,t) = u(L,t) = 0$만 주고 초기조건을 주지 않으면 문제가 적정(well-posed)한가?",
      "steps": [
        "적정 조건: (1) 존재, (2) 유일, (3) 안정.",
        "파동방정식은 $u_{tt}$(2계 시간미분)를 포함합니다.",
        "2계이므로 초기조건 2개 필요: $u(x,0) = \\phi(x)$, $u_t(x,0) = \\psi(x)$.",
        "초기조건이 없으면: 무한히 많은 해가 존재 → 유일성 위반.",
        "예: $u = A\\sin(n\\pi x/L)\\cos(n\\pi ct/L)$이 모든 $A, n$에 대해 해.",
        "따라서 적정하지 않습니다."
      ],
      "answer": "적정하지 않음 (초기조건 부재로 유일성 위반)",
      "lesson": "적정 문제가 되려면 PDE의 유형에 맞는 적절한 개수의 초기/경계조건이 필요합니다. 열은 초기조건 1개, 파동은 2개, 라플라스는 경계조건만 필요합니다."
    }
  ],
  "problems": [
    {
      "id": "17-1",
      "type": "choice",
      "difficulty": 1,
      "question": "다음 중 편미분방정식(PDE)인 것은?",
      "choices": [
        "$\\dfrac{d^2y}{dx^2} + y = 0$",
        "$u_{xx} + u_{yy} = 0$",
        "$y' + 3y = e^x$",
        "$x^2 + y^2 = r^2$"
      ],
      "answer": "$u_{xx} + u_{yy} = 0$",
      "hints": [
        "편미분방정식은 두 개 이상의 독립변수에 대한 편미분을 포함해야 합니다.",
        "$u_{xx}$는 $x$에 대한 2계 편미분, $u_{yy}$는 $y$에 대한 2계 편미분입니다."
      ],
      "explanation": "$u_{xx} + u_{yy} = 0$은 미지함수 $u(x,y)$가 $x$와 $y$ 두 독립변수에 대한 편미분을 포함하므로 PDE(라플라스 방정식)입니다. 나머지는 ODE이거나 대수방정식입니다.",
      "wrongAnalysis": "ODE와 PDE의 구분 핵심: 독립변수가 하나이면 ODE, 둘 이상이면 PDE입니다. $\\dfrac{d^2y}{dx^2}$는 상미분(ordinary derivative)이지 편미분이 아닙니다."
    },
    {
      "id": "17-2",
      "type": "choice",
      "difficulty": 2,
      "question": "PDE $2u_{xx} + 3u_{xy} + u_{yy} = 0$의 유형은?",
      "choices": [
        "타원형(elliptic)",
        "포물선형(parabolic)",
        "쌍곡선형(hyperbolic)",
        "분류 불가"
      ],
      "answer": "쌍곡선형(hyperbolic)",
      "hints": [
        "$A = 2$, $B = 3$, $C = 1$을 대입하세요.",
        "판별식 $\\Delta = B^2 - 4AC$를 계산하세요."
      ],
      "explanation": "$\\Delta = 3^2 - 4(2)(1) = 9 - 8 = 1 > 0$이므로 쌍곡선형입니다.",
      "wrongAnalysis": "$B$의 값을 잘못 읽거나 $B^2 - 4AC$ 공식에서 부호를 실수하는 경우가 많습니다. 특히 $u_{xy}$ 항의 계수가 $B$임을 확인하세요."
    },
    {
      "id": "17-3",
      "type": "choice",
      "difficulty": 3,
      "question": "막대의 양 끝에서 온도를 0으로 고정하고 ($u(0,t) = u(L,t) = 0$), 초기 온도 분포 $u(x,0) = f(x)$가 주어진 열방정식 $u_t = \\alpha u_{xx}$에 대해 올바른 설명은?",
      "choices": [
        "경계조건은 노이만 조건이고, 초기조건은 불필요하다.",
        "경계조건은 디리클레 조건이고, 이것만으로 해가 유일하게 결정된다.",
        "경계조건은 디리클레 조건이고, 초기조건과 함께 적정 문제를 이룬다.",
        "경계조건은 로빈 조건이고, 초기조건 두 개가 필요하다."
      ],
      "answer": "경계조건은 디리클레 조건이고, 초기조건과 함께 적정 문제를 이룬다.",
      "hints": [
        "함수값 자체를 지정하면 디리클레 조건입니다.",
        "열방정식은 $u_t$(1계 시간미분)를 포함하므로 초기조건이 하나 필요합니다.",
        "적정 문제란 해의 존재, 유일성, 안정성이 보장되는 것입니다."
      ],
      "explanation": "$u(0,t) = 0$, $u(L,t) = 0$은 경계에서 함수값을 지정하므로 디리클레 조건입니다. 열방정식은 $u_t$가 1계이므로 초기조건 $u(x,0)=f(x)$ 하나가 필요하며, 이 조합은 해의 존재, 유일성, 안정성이 모두 보장되는 적정(well-posed) 문제입니다.",
      "wrongAnalysis": "흔한 실수: (1) 경계에서 값을 지정하는 것(디리클레)과 미분값을 지정하는 것(노이만)을 혼동. (2) 열방정식에는 초기조건 하나면 충분한데 파동방정식처럼 두 개를 요구. (3) 경계조건만으로 해가 결정된다고 착각 — 초기조건도 반드시 필요합니다."
    },
    {
      "id": "17-4",
      "type": "number",
      "difficulty": 1,
      "question": "PDE $u_{xx} + u_{yy} = 0$의 차수(order)는?",
      "answer": "2",
      "hints": [
        "차수는 등장하는 편미분의 최고 계수입니다.",
        "$u_{xx}$와 $u_{yy}$는 각각 2계 편미분입니다."
      ],
      "explanation": "$u_{xx}$는 $x$에 대한 2계 편미분, $u_{yy}$는 $y$에 대한 2계 편미분입니다. 등장하는 편미분 중 최고 계수가 $2$이므로 이 PDE는 2계입니다.",
      "wrongAnalysis": "편미분의 개수(2개)를 차수로 착각하는 실수가 있습니다. 차수는 각 편미분의 계수 중 최고값입니다."
    },
    {
      "id": "17-5",
      "type": "choice",
      "difficulty": 2,
      "question": "PDE $u_{xx} + 2u_{xy} + u_{yy} = 0$의 유형은?",
      "choices": [
        "타원형(elliptic)",
        "포물선형(parabolic)",
        "쌍곡선형(hyperbolic)",
        "분류 불가"
      ],
      "answer": "포물선형(parabolic)",
      "hints": [
        "$A = 1$, $B = 2$, $C = 1$을 대입하세요.",
        "판별식 $\\Delta = B^2 - 4AC$를 계산하세요."
      ],
      "explanation": "$\\Delta = 2^2 - 4(1)(1) = 4 - 4 = 0$이므로 포물선형(parabolic)입니다.",
      "wrongAnalysis": "$u_{xy}$ 항의 계수를 $B$로 잘못 읽어 $B = 1$로 계산하는 실수가 있습니다. 표준형에서 $Bu_{xy}$이므로 $B = 2$입니다."
    }
  ],
  "summary": {
    "keyPoints": [
      "PDE는 두 개 이상의 독립변수에 대한 편미분을 포함하는 방정식",
      "판별식 $B^2 - 4AC$: 음수 → 타원형, 0 → 포물선형, 양수 → 쌍곡선형",
      "경계조건 3종: 디리클레(값), 노이만(법선미분), 로빈(혼합)",
      "적정조건: 해의 존재 + 유일성 + 안정성"
    ],
    "formulas": [
      "\\Delta = B^2 - 4AC\\ (\\text{PDE 유형 판별식})",
      "u_{xx} + u_{yy} = 0\\ (\\text{타원형, 라플라스})",
      "u_t = \\alpha u_{xx}\\ (\\text{포물선형, 열})",
      "u_{tt} = c^2 u_{xx}\\ (\\text{쌍곡선형, 파동})"
    ],
    "commonMistakes": [
      "ODE와 PDE 혼동 — 독립변수 개수가 핵심",
      "판별식 $B^2 - 4AC$에서 부호 실수",
      "디리클레(값 지정)와 노이만(미분 지정) 혼동",
      "열방정식에 초기조건 두 개를 부과하는 실수"
    ],
    "nextConnection": "PDE의 분류와 경계조건을 알았으니, 다음 레슨에서 PDE를 ODE로 환원하는 변수분리법을 배웁니다."
  }
},
{
  "id": 18,
  "title": "PDE의 변수분리법",
  "category": "편미분방정식",
  "level": "심화",
  "question": "PDE를 ODE 여러 개로 쪼개서 풀 수 있을까?",
  "concept": {
    "intro": ":::definition[PDE의 변수분리법]\n변수분리법(Separation of Variables)은 PDE를 풀기 위한 가장 기본적이면서 강력한 기법입니다. ODE에서의 변수분리법이 $\\dfrac{dy}{dx} = f(x)g(y)$를 $\\dfrac{dy}{g(y)} = f(x)\\,dx$로 분리한 것처럼, PDE에서는 미지함수를 각 변수만의 함수의 곱으로 가정하여 PDE를 여러 개의 ODE로 환원합니다.\n:::\n\n핵심 아이디어는 다음과 같습니다. 예를 들어 $u_t = \\alpha u_{xx}$에서 $u(x,t) = X(x)\\,T(t)$로 놓으면, $X(x)\\,T'(t) = \\alpha\\,X''(x)\\,T(t)$가 됩니다. 양변을 $\\alpha\\,X(x)\\,T(t)$로 나누면\n\n$$\\frac{T'(t)}{\\alpha\\,T(t)} = \\frac{X''(x)}{X(x)}$$\n\n좌변은 $t$만의 함수이고 우변은 $x$만의 함수입니다. 서로 다른 독립변수만의 함수가 항등적으로 같으려면, 양변이 모두 같은 **상수**여야 합니다. 이 상수를 **분리상수(separation constant)**라 하고 관례적으로 $-\\lambda$로 둡니다.\n\n:::theorem[분리상수와 ODE 분리]\n분리상수 $-\\lambda$를 도입하면 원래 PDE가 두 개의 ODE로 분리됩니다:\n$$X''(x) + \\lambda X(x) = 0, \\quad T'(t) + \\alpha\\lambda\\,T(t) = 0$$\n:::\n\n여기서 경계조건이 결정적 역할을 합니다. 예를 들어 $u(0,t) = u(L,t) = 0$이면 $X(0) = 0$, $X(L) = 0$이 됩니다. 이 조건과 $X'' + \\lambda X = 0$을 결합하면 **고유값 문제(eigenvalue problem)**가 됩니다. 즉, 자명하지 않은 해 $X \\neq 0$이 존재하는 $\\lambda$ 값(고유값)을 찾아야 합니다.\n\n$X'' + \\lambda X = 0$, $X(0) = 0$, $X(L) = 0$의 풀이를 $\\lambda$의 부호에 따라 분석하면: $\\lambda < 0$이면 해가 지수함수이므로 양 끝 0 조건을 만족하려면 $X \\equiv 0$ (자명해)뿐입니다. $\\lambda = 0$이면 $X = ax + b$인데 경계조건에서 역시 $X \\equiv 0$뿐입니다. $\\lambda > 0$일 때만 $X = A\\cos(\\sqrt{\\lambda}\\,x) + B\\sin(\\sqrt{\\lambda}\\,x)$에서 $X(0)=0 \\Rightarrow A = 0$이고, $X(L) = B\\sin(\\sqrt{\\lambda}\\,L) = 0$에서 $B \\neq 0$이려면 $\\sqrt{\\lambda}\\,L = n\\pi$ ($n = 1,2,3,\\ldots$)이어야 합니다. 따라서 고유값은 $\\lambda_n = \\left(\\dfrac{n\\pi}{L}\\right)^2$이고, 대응하는 고유함수는 $X_n(x) = \\sin\\dfrac{n\\pi x}{L}$입니다.\n\n:::theorem[고유함수의 직교성]\n고유함수 $\\sin\\dfrac{n\\pi x}{L}$들은 구간 $[0, L]$에서 **직교성(orthogonality)**을 가집니다:\n$$\\int_0^L \\sin\\frac{m\\pi x}{L}\\sin\\frac{n\\pi x}{L}\\,dx = \\begin{cases} 0 & m \\neq n \\\\ L/2 & m = n \\end{cases}$$\n:::\n\n이 직교성 덕분에 초기조건 $u(x,0) = f(x)$를 푸리에 사인 급수로 전개할 수 있습니다: $f(x) = \\sum_{n=1}^{\\infty} B_n \\sin\\dfrac{n\\pi x}{L}$, 여기서 $B_n = \\dfrac{2}{L}\\int_0^L f(x)\\sin\\dfrac{n\\pi x}{L}\\,dx$입니다.\n\n최종적으로, 각 $n$에 대한 해 $X_n(x)\\,T_n(t)$를 모두 합한 것이 PDE의 일반해입니다. 선형 PDE에서 중첩 원리가 성립하므로, $u(x,t) = \\sum_{n=1}^{\\infty} B_n\\,X_n(x)\\,T_n(t)$가 일반해가 됩니다. 이것이 변수분리법의 전체 구조입니다: PDE → 곱 형태 가정 → 분리상수 도입 → ODE들로 분리 → 경계조건으로 고유값 결정 → 초기조건으로 계수 결정 → 무한급수 해.",
    "intuition": "변수분리법의 핵심 직관은 '복잡한 PDE를 익숙한 ODE로 돌아가자'는 것입니다. $u(x,t) = X(x)T(t)$로 놓으면 $x$에 대한 ODE와 $t$에 대한 ODE를 각각 따로 풀면 됩니다. 분리상수가 등장하는 이유는 간단합니다: $t$만의 함수 = $x$만의 함수가 모든 $x, t$에서 성립하려면 양변 모두 상수여야 합니다. 경계조건이 '허용되는 진동 모드'를 골라주고, 초기조건이 각 모드의 '진폭'을 결정합니다. 마치 기타 줄에서 양 끝이 고정되면 특정 파장의 진동만 가능하고, 줄을 튕기는 방식에 따라 각 모드의 크기가 결정되는 것과 같습니다.",
    "formula": "u(x,t) = X(x)\\,T(t)\\ (\\text{곱 형태 가정})\n\\frac{T'}{\\alpha T} = \\frac{X''}{X} = -\\lambda\\ (\\text{분리상수})\nX'' + \\lambda X = 0,\\quad X(0) = X(L) = 0\n\\lambda_n = \\left(\\frac{n\\pi}{L}\\right)^2,\\quad X_n(x) = \\sin\\frac{n\\pi x}{L}\nB_n = \\frac{2}{L}\\int_0^L f(x)\\sin\\frac{n\\pi x}{L}\\,dx\nu(x,t) = \\sum_{n=1}^{\\infty} B_n\\,X_n(x)\\,T_n(t)",
    "summary": ":::note[요약]\n• $u = X(x)T(t)$로 PDE를 ODE 두 개로 분리\n• 분리상수: 서로 다른 변수의 함수가 같으면 상수\n• 경계조건 → 고유값 $\\lambda_n$, 고유함수 $X_n$\n• 초기조건 → 푸리에 계수 $B_n$\n• 일반해 = 고유함수의 무한합\n:::"
  },
  "examples": [
    {
      "title": "[기본] 변수분리법의 완전한 풀이 과정",
      "problem": "$u_t = u_{xx}$, $u(0,t) = u(\\pi,t) = 0$, $u(x,0) = 3\\sin 2x$의 해를 구하시오.",
      "steps": [
        "$u(x,t) = X(x)T(t)$로 놓으면 $XT' = X''T$이므로 $\\dfrac{T'}{T} = \\dfrac{X''}{X} = -\\lambda$.",
        "$X'' + \\lambda X = 0$, $X(0) = X(\\pi) = 0$: 여기서 $L = \\pi$이므로 $\\lambda_n = n^2$, $X_n = \\sin(nx)$.",
        "$T' + n^2 T = 0$이므로 $T_n(t) = e^{-n^2 t}$.",
        "일반해: $u(x,t) = \\sum_{n=1}^{\\infty} B_n \\sin(nx)\\,e^{-n^2 t}$.",
        "초기조건: $u(x,0) = \\sum B_n \\sin(nx) = 3\\sin 2x$이므로 $B_2 = 3$, 나머지 $B_n = 0$.",
        "따라서 $u(x,t) = 3\\sin(2x)\\,e^{-4t}$."
      ],
      "answer": "$u(x,t) = 3\\sin(2x)\\,e^{-4t}$",
      "lesson": "초기조건이 하나의 고유함수와 일치하면 급수가 유한항으로 줄어듭니다. 일반적으로는 $f(x)$의 푸리에 사인 급수 전개가 필요합니다."
    },
    {
      "title": "[기본] 고유값 문제의 분석",
      "problem": "$X'' + \\lambda X = 0$, $X(0) = 0$, $X(2) = 0$의 고유값과 고유함수를 구하시오.",
      "steps": [
        "$\\lambda > 0$일 때 $X = A\\cos(\\sqrt{\\lambda}\\,x) + B\\sin(\\sqrt{\\lambda}\\,x)$.",
        "$X(0) = 0$: $A = 0$. $X = B\\sin(\\sqrt{\\lambda}\\,x)$.",
        "$X(2) = B\\sin(2\\sqrt{\\lambda}) = 0$. $B \\neq 0$이면 $2\\sqrt{\\lambda} = n\\pi$.",
        "$\\lambda_n = \\left(\\dfrac{n\\pi}{2}\\right)^2$, $X_n(x) = \\sin\\dfrac{n\\pi x}{2}$ ($n = 1, 2, 3, \\ldots$)."
      ],
      "answer": "$\\lambda_n = (n\\pi/2)^2$, $X_n = \\sin(n\\pi x/2)$",
      "lesson": "구간 길이 $L$에 따라 고유값이 $\\lambda_n = (n\\pi/L)^2$으로 결정됩니다. $L$을 놓치지 않도록 주의하세요."
    },
    {
      "title": "[응용] 확산계수가 있는 열방정식",
      "problem": "$u_t = 3u_{xx}$, $u(0,t) = u(\\pi,t) = 0$, $u(x,0) = 2\\sin x + \\sin 3x$의 해를 구하시오.",
      "steps": [
        "$\\alpha = 3$, $L = \\pi$이므로 $\\lambda_n = n^2$.",
        "$T_n' + 3n^2 T_n = 0$에서 $T_n = e^{-3n^2 t}$.",
        "일반해: $u = \\sum B_n \\sin(nx)\\,e^{-3n^2 t}$.",
        "초기조건: $B_1 = 2$, $B_3 = 1$, 나머지 0.",
        "$u(x,t) = 2\\sin(x)\\,e^{-3t} + \\sin(3x)\\,e^{-27t}$."
      ],
      "answer": "$u(x,t) = 2\\sin(x)\\,e^{-3t} + \\sin(3x)\\,e^{-27t}$",
      "lesson": "감쇠율이 $\\alpha n^2$이므로 $\\alpha$가 클수록, $n$이 클수록 빠르게 감쇠합니다. $\\alpha$를 지수에 넣는 것을 잊지 마세요."
    },
    {
      "title": "[응용] 푸리에 계수 계산",
      "problem": "$u_t = u_{xx}$, $u(0,t) = u(1,t) = 0$, $u(x,0) = x(1-x)$의 해에서 $B_n$을 구하시오.",
      "steps": [
        "$L = 1$이므로 $B_n = 2\\int_0^1 x(1-x)\\sin(n\\pi x)\\,dx$.",
        "$\\int_0^1 x(1-x)\\sin(n\\pi x)\\,dx$를 부분적분으로 계산합니다.",
        "$= \\dfrac{2(1-\\cos(n\\pi))}{(n\\pi)^3} = \\dfrac{2(1-(-1)^n)}{n^3 \\pi^3}$.",
        "$n$ 짝수: $B_n = 0$. $n$ 홀수: $B_n = 2 \\cdot \\dfrac{4}{n^3 \\pi^3} = \\dfrac{8}{n^3 \\pi^3}$.",
        "$u(x,t) = \\sum_{\\text{홀수 } n} \\dfrac{8}{n^3\\pi^3}\\sin(n\\pi x)\\,e^{-n^2\\pi^2 t}$."
      ],
      "answer": "$B_n = \\dfrac{8}{n^3\\pi^3}$ ($n$ 홀수), $B_n = 0$ ($n$ 짝수)",
      "lesson": "초기조건이 단일 고유함수가 아닌 일반 함수이면 푸리에 계수를 적분으로 계산해야 합니다. 대칭성 활용이 계산을 줄여줍니다."
    },
    {
      "title": "[심화] 분리상수의 부호 결정",
      "problem": "열방정식 $u_t = u_{xx}$에서 분리상수를 $+\\lambda$로 놓으면 왜 물리적으로 부적절한지 설명하시오.",
      "steps": [
        "$u = X(x)T(t)$, $\\dfrac{T'}{T} = \\dfrac{X''}{X} = +\\lambda$로 놓는다고 가정.",
        "$T' = \\lambda T$이므로 $T = e^{\\lambda t}$. $\\lambda > 0$이면 시간에 따라 발산!",
        "물리적으로 열은 확산(감쇠)해야 하므로 $T$가 발산하면 안 됩니다.",
        "$X'' - \\lambda X = 0$, $X(0)=X(L)=0$: $\\lambda > 0$이면 $X = A\\cosh + B\\sinh$이고 비자명해 없음.",
        "따라서 $-\\lambda$로 놓아야 $T = e^{-\\lambda t}$ (감쇠)이고 $X$에서 비자명 고유함수가 존재합니다."
      ],
      "answer": "$+\\lambda$로 놓으면 시간 발산 + 비자명 공간해 부재",
      "lesson": "분리상수의 부호 관례 $-\\lambda$는 물리적 조건(감쇠)과 경계조건(비자명해 존재)에 의해 결정됩니다. 관례가 아니라 필연입니다."
    }
  ],
  "problems": [
    {
      "id": "18-1",
      "type": "choice",
      "difficulty": 1,
      "question": "$u_t = u_{xx}$에 $u(x,t) = X(x)T(t)$를 대입하면 나오는 분리된 등식은?",
      "choices": [
        "$X'T' = X''T$",
        "$\\dfrac{T'}{T} = \\dfrac{X''}{X} = -\\lambda$",
        "$X + T = \\lambda$",
        "$X''T'' = \\lambda$"
      ],
      "answer": "$\\dfrac{T'}{T} = \\dfrac{X''}{X} = -\\lambda$",
      "hints": [
        "$u_t = X T'$, $u_{xx} = X'' T$를 대입하세요.",
        "양변을 $XT$로 나누면 변수가 분리됩니다."
      ],
      "explanation": "$XT' = X''T$에서 양변을 $XT$로 나누면 $\\dfrac{T'}{T} = \\dfrac{X''}{X}$. 좌변은 $t$만, 우변은 $x$만의 함수이므로 양변은 상수 $-\\lambda$입니다.",
      "wrongAnalysis": "양변을 $XT$로 나누는 과정을 빠뜨리거나, 분리상수의 부호 관례($-\\lambda$)를 놓치는 실수가 흔합니다."
    },
    {
      "id": "18-2",
      "type": "choice",
      "difficulty": 2,
      "question": "$X'' + \\lambda X = 0$, $X(0) = 0$, $X(L) = 0$에서 고유값 $\\lambda_n$은?",
      "choices": [
        "$\\lambda_n = n\\pi / L$",
        "$\\lambda_n = (n\\pi / L)^2$",
        "$\\lambda_n = n^2$",
        "$\\lambda_n = n / L$"
      ],
      "answer": "$\\lambda_n = (n\\pi / L)^2$",
      "hints": [
        "$\\lambda > 0$일 때 $X = A\\cos(\\sqrt{\\lambda}\\,x) + B\\sin(\\sqrt{\\lambda}\\,x)$.",
        "$X(0) = 0 \\Rightarrow A = 0$. $X(L) = B\\sin(\\sqrt{\\lambda}\\,L) = 0$에서 $\\sqrt{\\lambda}\\,L = n\\pi$."
      ],
      "explanation": "$X(0) = 0$에서 $A = 0$. $X(L) = B\\sin(\\sqrt{\\lambda}\\,L) = 0$이고 $B \\neq 0$이려면 $\\sqrt{\\lambda}\\,L = n\\pi$, 즉 $\\lambda_n = (n\\pi/L)^2$. ($n = 1,2,3,\\ldots$)",
      "wrongAnalysis": "$\\sqrt{\\lambda}$와 $\\lambda$를 혼동하여 $\\lambda_n = n\\pi/L$로 답하는 실수가 매우 흔합니다. $\\sqrt{\\lambda}L = n\\pi$이므로 양변을 제곱해야 $\\lambda_n$을 얻습니다."
    },
    {
      "id": "18-3",
      "type": "text",
      "difficulty": 3,
      "question": "$u_t = 4u_{xx}$, $u(0,t)=u(\\pi,t)=0$, $u(x,0) = 5\\sin 3x$일 때 $u(x,t)$는? (식, 예: 5sin(3x)e^{-36t})",
      "answer": "5sin(3x)e^{-36t}",
      "hints": [
        "$\\alpha = 4$, $L = \\pi$이므로 $\\lambda_n = n^2$입니다.",
        "초기조건이 $5\\sin 3x$이므로 $n = 3$만 살아남습니다.",
        "$T_3(t) = e^{-4 \\cdot 9 \\cdot t} = e^{-36t}$."
      ],
      "explanation": "변수분리법으로 $u(x,t) = \\sum B_n \\sin(nx)\\,e^{-4n^2 t}$. 초기조건에서 $B_3 = 5$, 나머지 0. 따라서 $u(x,t) = 5\\sin(3x)\\,e^{-36t}$.",
      "wrongAnalysis": "$\\alpha$를 지수에 반영하지 않아 $e^{-9t}$로 답하는 실수가 흔합니다. $T' + \\alpha\\lambda_n T = 0$이므로 감쇠율은 $\\alpha\\lambda_n = 4 \\times 9 = 36$입니다."
    },
    {
      "id": "18-4",
      "type": "choice",
      "difficulty": 1,
      "question": "PDE의 변수분리법에서 $u(x,t) = X(x)T(t)$로 놓는 가정의 의미는?",
      "choices": [
        "해가 $x$와 $t$의 합 형태이다",
        "해가 $x$만의 함수와 $t$만의 함수의 곱 형태이다",
        "해가 상수이다",
        "$x$와 $t$가 독립이 아니다"
      ],
      "answer": "해가 $x$만의 함수와 $t$만의 함수의 곱 형태이다",
      "hints": [
        "$X(x)$는 공간 변수만의 함수, $T(t)$는 시간 변수만의 함수입니다.",
        "이 가정으로 PDE를 두 개의 ODE로 분리합니다."
      ],
      "explanation": "변수분리법의 핵심 가정은 해를 $u = X(x) \\cdot T(t)$, 즉 공간 함수와 시간 함수의 곱으로 놓는 것입니다. 이 형태를 PDE에 대입하면 변수를 분리할 수 있습니다.",
      "wrongAnalysis": "합 형태 $X(x) + T(t)$와 곱 형태 $X(x) \\cdot T(t)$를 혼동하는 실수가 있습니다. 변수분리법은 곱 형태를 가정합니다."
    },
    {
      "id": "18-5",
      "type": "choice",
      "difficulty": 2,
      "question": "$X'' + \\lambda X = 0$, $X(0) = 0$, $X(L) = 0$에서 $\\lambda < 0$이면 비자명해가 존재하는가?",
      "choices": [
        "존재한다 — $X = e^{\\sqrt{|\\lambda|}x}$",
        "존재하지 않는다 — 경계조건을 만족시킬 수 없다",
        "존재한다 — $X = \\cos(\\sqrt{|\\lambda|}x)$",
        "경우에 따라 다르다"
      ],
      "answer": "존재하지 않는다 — 경계조건을 만족시킬 수 없다",
      "hints": [
        "$\\lambda < 0$이면 $\\lambda = -\\mu^2$으로 놓을 때 $X'' - \\mu^2 X = 0$.",
        "일반해: $X = A\\cosh(\\mu x) + B\\sinh(\\mu x)$. 양 끝 0 조건을 대입해 보세요."
      ],
      "explanation": "$\\lambda = -\\mu^2$이면 $X = A\\cosh(\\mu x) + B\\sinh(\\mu x)$. $X(0) = 0$에서 $A = 0$, $X(L) = B\\sinh(\\mu L) = 0$에서 $\\sinh(\\mu L) \\neq 0$이므로 $B = 0$. 따라서 $X \\equiv 0$ (자명해)만 가능합니다.",
      "wrongAnalysis": "$\\sinh$가 0이 되는 점이 $\\mu L = 0$ 외에는 없다는 사실을 모르면 비자명해가 있다고 착각할 수 있습니다."
    }
  ],
  "summary": {
    "keyPoints": [
      "$u = X(x)T(t)$로 가정하여 PDE를 ODE로 환원",
      "분리상수: 서로 다른 변수만의 함수가 같으면 반드시 상수",
      "경계조건이 고유값과 고유함수를 결정",
      "고유함수의 직교성을 이용해 푸리에 계수 산출",
      "일반해 = 고유함수의 무한급수"
    ],
    "formulas": [
      "\\lambda_n = \\left(\\frac{n\\pi}{L}\\right)^2,\\quad X_n = \\sin\\frac{n\\pi x}{L}",
      "B_n = \\frac{2}{L}\\int_0^L f(x)\\sin\\frac{n\\pi x}{L}\\,dx",
      "\\int_0^L \\sin\\frac{m\\pi x}{L}\\sin\\frac{n\\pi x}{L}\\,dx = \\frac{L}{2}\\delta_{mn}"
    ],
    "commonMistakes": [
      "$\\sqrt{\\lambda}$와 $\\lambda$ 혼동 — 항상 양변 제곱 확인",
      "분리상수 부호 관례($-\\lambda$) 무시",
      "$\\alpha$(확산계수)를 시간 해에 반영 안 함"
    ],
    "nextConnection": "변수분리법의 틀을 갖추었으니, 다음 레슨에서 가장 중요한 PDE 중 하나인 열방정식에 본격적으로 적용합니다."
  }
},
{
  "id": 19,
  "title": "열방정식",
  "category": "편미분방정식",
  "level": "심화",
  "question": "열이 시간과 공간에 따라 어떻게 퍼지는지를 수학적으로 기술하려면?",
  "concept": {
    "intro": ":::definition[열방정식]\n열방정식(heat equation)은 열전도, 확산 현상을 기술하는 PDE로, 물리학의 에너지 보존 법칙에서 유도됩니다. 1차원 막대에서 위치 $x$, 시간 $t$에서의 온도를 $u(x,t)$라 하면, 푸리에의 열전도 법칙에 따라 열 유속(heat flux)은 $q = -k\\dfrac{\\partial u}{\\partial x}$입니다. 여기서 $k$는 열전도도(thermal conductivity)로, 열이 잘 전달되는 정도를 나타냅니다. 미소 구간 $[x, x+\\Delta x]$에서 에너지 보존을 적용하면:\n\n$$\\rho c_p \\frac{\\partial u}{\\partial t} = k \\frac{\\partial^2 u}{\\partial x^2}$$\n\n양변을 $\\rho c_p$로 나누면 1차원 열방정식을 얻습니다:\n\n$$u_t = \\alpha\\,u_{xx}, \\quad \\alpha = \\frac{k}{\\rho c_p}$$\n\n여기서 $\\alpha$는 **열확산계수(thermal diffusivity)**로, 단위는 $\\text{m}^2/\\text{s}$입니다. $k$는 열전도도, $\\rho$는 밀도, $c_p$는 비열용량입니다. $\\alpha$가 클수록 열이 빨리 퍼집니다.\n::: 구리($\\alpha \\approx 1.11 \\times 10^{-4}$)가 나무($\\alpha \\approx 1.3 \\times 10^{-7}$)보다 약 1000배 빨리 열을 전달하는 이유입니다.\n\n가장 표준적인 문제는 길이 $L$인 막대의 양 끝 온도를 0으로 고정(디리클레 경계조건)하고 초기 온도 분포 $u(x,0) = f(x)$가 주어진 경우입니다:\n\n$$u_t = \\alpha\\,u_{xx}, \\quad u(0,t) = 0,\\quad u(L,t) = 0, \\quad u(x,0) = f(x)$$\n\n변수분리법을 적용하면, 이전 레슨에서 배운 대로 고유값 $\\lambda_n = (n\\pi/L)^2$, 고유함수 $X_n(x) = \\sin(n\\pi x/L)$을 얻고, $T_n' + \\alpha\\lambda_n T_n = 0$에서 $T_n(t) = e^{-\\alpha(n\\pi/L)^2 t}$가 됩니다. 일반해는:\n\n$$u(x,t) = \\sum_{n=1}^{\\infty} B_n \\sin\\frac{n\\pi x}{L}\\,e^{-\\alpha(n\\pi/L)^2 t}$$\n\n여기서 $B_n = \\dfrac{2}{L}\\int_0^L f(x)\\sin\\dfrac{n\\pi x}{L}\\,dx$입니다.\n\n이 해의 물리적 의미를 살펴보겠습니다. 지수 감쇠 인자 $e^{-\\alpha(n\\pi/L)^2 t}$에서 감쇠율은 $\\alpha(n\\pi/L)^2$이므로, $n$이 클수록 (고차 모드일수록) 감쇠가 훨씬 빠릅니다. $n=1$의 감쇠율이 $\\alpha(\\pi/L)^2$인데, $n=2$는 $4\\alpha(\\pi/L)^2$, $n=10$은 $100\\alpha(\\pi/L)^2$으로 기하급수적으로 빨라집니다. 이것은 초기 온도 분포가 아무리 울퉁불퉁해도, 시간이 지나면 고차 모드가 먼저 사라지고 가장 기본 모드 $\\sin(\\pi x/L)$만 남아 매끄러운 형태가 된다는 뜻입니다. 열방정식의 **평활화(smoothing) 효과**입니다.\n\n시간이 충분히 지나면 ($t \\to \\infty$) 모든 지수항이 0으로 수렴하므로 $u(x,t) \\to 0$입니다. 이것이 양 끝 온도가 0인 경우의 **정상상태 해(steady-state solution)**입니다. 일반적으로 양 끝 온도가 $u(0,t) = T_1$, $u(L,t) = T_2$이면 정상상태 해는 $u_s(x) = T_1 + (T_2 - T_1)x/L$ (선형 보간)이 되고, 과도 상태(transient) 부분이 시간에 따라 감쇠합니다.\n\n:::theorem[최대값 원리]\n열방정식의 중요한 성질로 **최대값 원리(maximum principle)**가 있습니다. 이 원리에 따르면, 열방정식의 해 $u(x,t)$의 최대값(최소값)은 반드시 초기 시각($t=0$) 또는 공간 경계($x=0$ 또는 $x=L$)에서 달성됩니다. 내부 점에서 새로운 극값이 생기지 않습니다. 이것은 열이 확산되어 농도가 균일해지는 방향으로만 흐른다는 물리적 사실의 수학적 표현입니다. 최대값 원리는 해의 유일성 증명에도 핵심적으로 사용됩니다.\n:::",
    "intuition": "뜨거운 커피를 방에 놓으면, 시간이 지남에 따라 커피 온도는 실온에 가까워집니다. 이 과정을 수학으로 쓴 것이 열방정식입니다. 초기에 복잡한 온도 분포가 있어도, 고주파 성분(울퉁불퉁한 부분)이 먼저 사라지고 결국 매끈하게 됩니다. 이는 감쇠율이 $n^2$에 비례하기 때문입니다. 최대값 원리는 '열은 높은 데서 낮은 데로만 흐른다'는 상식의 수학적 표현입니다 — 내부에서 주변보다 더 뜨거워지는 일은 외부 열원 없이는 불가능합니다.",
    "formula": "u_t = \\alpha\\,u_{xx}, \\quad \\alpha = \\frac{k}{\\rho c_p}\nu(x,t) = \\sum_{n=1}^{\\infty} B_n \\sin\\frac{n\\pi x}{L}\\,e^{-\\alpha(n\\pi/L)^2 t}\nB_n = \\frac{2}{L}\\int_0^L f(x)\\sin\\frac{n\\pi x}{L}\\,dx\n\\text{정상상태:}\\ u_s(x) = T_1 + \\frac{T_2 - T_1}{L}x\n\\text{감쇠율:}\\ \\alpha\\left(\\frac{n\\pi}{L}\\right)^2\\ (n\\text{이 클수록 빠른 감쇠})",
    "summary": ":::note[요약]\n• 열방정식: $u_t = \\alpha u_{xx}$, 에너지 보존에서 유도\n• $\\alpha = k/(\\rho c_p)$: 열확산계수\n• 변수분리 → 지수감쇠 $\\times$ 사인 급수\n• 고차 모드 빠른 감쇠 → 평활화\n• 최대값 원리: 극값은 경계 또는 초기 시각에서\n:::"
  },
  "examples": [
    {
      "title": "[기본] 1차원 열전도 문제의 풀이",
      "problem": "길이 $\\pi$인 막대, $u(0,t) = u(\\pi,t) = 0$, $u(x,0) = 2\\sin x - \\sin 3x$일 때 $u_t = u_{xx}$의 해를 구하시오.",
      "steps": [
        "변수분리법에 의해 $u(x,t) = \\sum_{n=1}^{\\infty} B_n \\sin(nx)\\,e^{-n^2 t}$ ($\\alpha = 1$, $L = \\pi$).",
        "초기조건 $u(x,0) = \\sum B_n \\sin(nx) = 2\\sin x - \\sin 3x$.",
        "비교하면 $B_1 = 2$, $B_3 = -1$, 나머지 $B_n = 0$.",
        "각 모드의 시간 감쇠: $n=1$ → $e^{-t}$, $n=3$ → $e^{-9t}$.",
        "$u(x,t) = 2\\sin(x)\\,e^{-t} - \\sin(3x)\\,e^{-9t}$."
      ],
      "answer": "$u(x,t) = 2\\sin(x)\\,e^{-t} - \\sin(3x)\\,e^{-9t}$",
      "lesson": "고차 모드($n=3$)의 감쇠율($e^{-9t}$)이 기본 모드($n=1$, $e^{-t}$)보다 9배 빠릅니다. 시간이 조금만 지나도 $\\sin 3x$ 성분은 거의 사라지고 $2\\sin x$ 형태만 남습니다."
    },
    {
      "title": "[기본] 확산계수가 다른 경우",
      "problem": "$u_t = 4u_{xx}$, $u(0,t) = u(\\pi,t) = 0$, $u(x,0) = \\sin x$의 해를 구하시오.",
      "steps": [
        "$\\alpha = 4$, $L = \\pi$. 일반해: $u = \\sum B_n \\sin(nx)\\,e^{-4n^2 t}$.",
        "초기조건: $B_1 = 1$, 나머지 0.",
        "$u(x,t) = \\sin(x)\\,e^{-4t}$."
      ],
      "answer": "$u(x,t) = \\sin(x)\\,e^{-4t}$",
      "lesson": "$\\alpha$는 감쇠 속도를 조절합니다. $\\alpha = 4$이면 $\\alpha = 1$일 때보다 4배 빠르게 열이 확산됩니다."
    },
    {
      "title": "[응용] 비동차 경계조건의 정상상태 분리",
      "problem": "$u_t = u_{xx}$, $u(0,t) = 0$, $u(1,t) = 50$, $u(x,0) = 50x$의 해를 구하시오.",
      "steps": [
        "정상상태: $u_s'' = 0$, $u_s(0) = 0$, $u_s(1) = 50$ → $u_s(x) = 50x$.",
        "과도 상태: $v = u - u_s$. $v_t = v_{xx}$, $v(0,t) = v(1,t) = 0$.",
        "$v(x,0) = u(x,0) - u_s(x) = 50x - 50x = 0$.",
        "$v(x,0) = 0$이므로 $v \\equiv 0$.",
        "$u(x,t) = 50x$ (처음부터 정상상태!)."
      ],
      "answer": "$u(x,t) = 50x$",
      "lesson": "초기조건이 정상상태와 일치하면 과도 상태가 없습니다. 비동차 경계에서는 정상상태 분리가 핵심 기법입니다."
    },
    {
      "title": "[응용] 시간에 따른 온도 프로파일 변화",
      "problem": "$u_t = u_{xx}$, $u(0,t) = u(\\pi,t) = 0$, $u(x,0) = x(\\pi - x)$에서 $t$가 클 때 해의 근사를 구하시오.",
      "steps": [
        "일반해: $u = \\sum B_n \\sin(nx)\\,e^{-n^2 t}$.",
        "$B_n = \\dfrac{2}{\\pi}\\int_0^{\\pi} x(\\pi-x)\\sin(nx)\\,dx = \\dfrac{4(1-(-1)^n)}{n^3}$.",
        "$n$ 짝수: $B_n = 0$. $n = 1$: $B_1 = 8/1 = 8$.",
        "$t$가 충분히 크면 $n \\geq 3$인 항은 $e^{-9t}$ 이상의 감쇠로 거의 0.",
        "근사: $u(x,t) \\approx 8\\sin(x)\\,e^{-t}$ ($t$ 클 때)."
      ],
      "answer": "$u \\approx 8\\sin(x)\\,e^{-t}$ (기본 모드 근사)",
      "lesson": "시간이 지나면 고차 모드는 빠르게 사라지고 기본 모드($n=1$)만 남습니다. 이것이 열방정식의 평활화 효과입니다."
    },
    {
      "title": "[심화] 최대값 원리의 적용",
      "problem": "$u_t = u_{xx}$, $u(0,t) = u(2,t) = 0$, $u(x,0) = \\sin(\\pi x/2)$에서 $0 < x < 2$, $t > 0$인 내부에서 $u$의 최대값이 1을 넘을 수 있는가?",
      "steps": [
        "초기조건에서 $\\max u(x,0) = \\sin(\\pi/2) = 1$ ($x=1$일 때).",
        "경계조건: $u(0,t) = u(2,t) = 0$.",
        "최대값 원리: 해의 최대값은 초기 시각($t=0$) 또는 경계에서만 달성.",
        "경계에서 $u = 0$, 초기에서 $\\max = 1$.",
        "따라서 $0 \\leq u(x,t) \\leq 1$ (모든 $x, t > 0$). 1을 넘을 수 없습니다."
      ],
      "answer": "$u \\leq 1$ (최대값 원리에 의해 초기 최대값을 넘지 못함)",
      "lesson": "최대값 원리는 해를 직접 구하지 않고도 해의 상한/하한을 알 수 있는 강력한 도구입니다. 외부 열원이 없으면 내부에서 새로운 극값이 생기지 않습니다."
    }
  ],
  "problems": [
    {
      "id": "19-1",
      "type": "choice",
      "difficulty": 1,
      "question": "열방정식 $u_t = \\alpha u_{xx}$에서 $\\alpha$의 의미는?",
      "choices": [
        "열의 총량",
        "열확산계수 ($k/(\\rho c_p)$)",
        "초기 온도",
        "경계 온도"
      ],
      "answer": "열확산계수 ($k/(\\rho c_p)$)",
      "hints": [
        "$k$는 열전도도, $\\rho$는 밀도, $c_p$는 비열용량입니다.",
        "$\\alpha$가 클수록 열이 빨리 퍼집니다."
      ],
      "explanation": "$\\alpha = k/(\\rho c_p)$는 열확산계수로, 물질이 얼마나 빨리 열을 전달하는지를 나타냅니다. 단위는 $\\text{m}^2/\\text{s}$입니다.",
      "wrongAnalysis": "$\\alpha$를 온도나 열량과 혼동하는 실수가 있습니다. $\\alpha$는 '속도'에 해당하는 물성치입니다."
    },
    {
      "id": "19-2",
      "type": "choice",
      "difficulty": 2,
      "question": "열방정식 해 $u(x,t) = \\sum B_n \\sin(n\\pi x/L)\\,e^{-\\alpha(n\\pi/L)^2 t}$에서 시간이 충분히 지나면 남는 성분은?",
      "choices": [
        "고차 모드($n$이 큰 항)만 남는다",
        "모든 모드가 같은 비율로 감쇠한다",
        "기본 모드($n=1$)가 가장 오래 남는다",
        "해가 발산한다"
      ],
      "answer": "기본 모드($n=1$)가 가장 오래 남는다",
      "hints": [
        "감쇠율은 $\\alpha(n\\pi/L)^2$이므로 $n$에 따라 어떻게 변하나요?",
        "$n$이 클수록 감쇠가 빠릅니다."
      ],
      "explanation": "감쇠율이 $n^2$에 비례하므로 고차 모드가 훨씬 빨리 사라집니다. $n=1$ 모드의 감쇠율이 가장 작으므로 가장 오래 살아남아, 충분한 시간이 지나면 해는 대략 $B_1 \\sin(\\pi x/L)\\,e^{-\\alpha(\\pi/L)^2 t}$ 형태가 됩니다.",
      "wrongAnalysis": "고차 모드가 더 오래 남는다고 생각하는 실수가 있습니다. 감쇠 지수가 $-n^2$에 비례하므로 $n$이 클수록 빨리 0에 수렴합니다."
    },
    {
      "id": "19-3",
      "type": "choice",
      "difficulty": 3,
      "question": "열방정식 $u_t = u_{xx}$, $u(0,t) = u(2,t) = 0$, $u(x,0) = f(x) \\geq 0$인 경우, 최대값 원리에 의해 $t > 0$인 내부에서 반드시 성립하는 것은?",
      "choices": [
        "$u(x,t) > \\max f(x)$가 가능하다",
        "$0 \\leq u(x,t) \\leq \\max_{0 \\leq x \\leq 2} f(x)$",
        "$u(x,t) < 0$이 될 수 있다",
        "$u(x,t)$는 시간에 무관하다"
      ],
      "answer": "$0 \\leq u(x,t) \\leq \\max_{0 \\leq x \\leq 2} f(x)$",
      "hints": [
        "최대값 원리: 최대/최소는 경계 또는 초기 시각에서 달성됩니다.",
        "경계에서 $u = 0 \\geq 0$이고 초기에서 $f(x) \\geq 0$입니다.",
        "따라서 내부에서 음수가 되거나 초기 최대값을 넘을 수 없습니다."
      ],
      "explanation": "최대값 원리에 의해 $u$의 최대값은 초기($t=0$) 또는 경계($x=0, x=2$)에서 달성됩니다. 초기에 $f(x) \\geq 0$이고 경계에서 $u=0$이므로 내부 최대값은 $\\max f(x)$ 이하, 최소값은 $0$ 이상입니다.",
      "wrongAnalysis": "최대값 원리를 모르면 내부에서 새로운 극값이 생길 수 있다고 오해합니다. 열방정식은 확산이므로 극값을 '퍼뜨리기만' 하지, 새로 만들지 않습니다."
    },
    {
      "id": "19-4",
      "type": "number",
      "difficulty": 1,
      "question": "열방정식 $u_t = 3u_{xx}$에서 열확산계수 $\\alpha$의 값은?",
      "answer": "3",
      "hints": [
        "열방정식의 표준형은 $u_t = \\alpha u_{xx}$입니다.",
        "$u_{xx}$ 앞의 계수가 $\\alpha$입니다."
      ],
      "explanation": "$u_t = \\alpha u_{xx}$에서 $u_{xx}$의 계수가 열확산계수이므로 $\\alpha = 3$.",
      "wrongAnalysis": "$\\alpha$를 $\\sqrt{3}$이나 $3^2 = 9$로 바꾸는 실수가 있습니다. 표준형에서 $\\alpha$는 $u_{xx}$ 앞의 계수 그대로입니다."
    },
    {
      "id": "19-5",
      "type": "choice",
      "difficulty": 2,
      "question": "열방정식 $u_t = u_{xx}$, $u(0,t) = u(\\pi,t) = 0$, $u(x,0) = 4\\sin x + 2\\sin 3x$일 때 $t \\to \\infty$에서 $u(x,t)$는?",
      "choices": [
        "$4\\sin x$",
        "$2\\sin 3x$",
        "$0$",
        "$4\\sin x + 2\\sin 3x$"
      ],
      "answer": "$0$",
      "hints": [
        "양 끝 경계조건이 0이므로 정상상태 해는 $u_s = 0$입니다.",
        "모든 모드 $e^{-n^2 t}$는 $t \\to \\infty$에서 $0$으로 수렴합니다."
      ],
      "explanation": "해는 $u(x,t) = 4\\sin(x)e^{-t} + 2\\sin(3x)e^{-9t}$입니다. $t \\to \\infty$에서 모든 지수 감쇠 항이 0이 되므로 $u \\to 0$. 양 끝이 0℃로 고정된 막대의 온도는 결국 0℃가 됩니다.",
      "wrongAnalysis": "기본 모드($n=1$)가 오래 남으므로 $4\\sin x$가 남는다고 착각하기 쉽지만, 충분한 시간이 지나면 그것도 사라집니다."
    }
  ],
  "summary": {
    "keyPoints": [
      "열방정식 $u_t = \\alpha u_{xx}$는 에너지 보존에서 유도",
      "$\\alpha = k/(\\rho c_p)$가 클수록 빠른 확산",
      "해의 고차 모드($n$ 큰 항)가 먼저 감쇠 → 평활화 효과",
      "$t \\to \\infty$에서 정상상태 해로 수렴",
      "최대값 원리: 극값은 초기 시각이나 경계에서만 달성"
    ],
    "formulas": [
      "u_t = \\alpha\\,u_{xx},\\quad \\alpha = k/(\\rho c_p)",
      "u(x,t) = \\sum_{n=1}^{\\infty} B_n \\sin\\frac{n\\pi x}{L}\\,e^{-\\alpha(n\\pi/L)^2 t}",
      "\\text{감쇠율} = \\alpha(n\\pi/L)^2"
    ],
    "commonMistakes": [
      "감쇠 지수에 $\\alpha$를 빠뜨림",
      "고차 모드가 오래 남는다고 착각 (실제는 가장 빨리 사라짐)",
      "정상상태 해를 $u=0$으로만 생각 (비동차 경계조건에서는 선형 함수)"
    ],
    "nextConnection": "열이 확산(감쇠)하는 현상을 배웠으니, 다음 레슨에서는 에너지가 보존되며 진동하는 파동방정식을 공부합니다."
  }
},
{
  "id": 20,
  "title": "파동방정식",
  "category": "편미분방정식",
  "level": "심화",
  "question": "줄의 진동이나 소리의 전파는 어떤 수학으로 기술될까?",
  "concept": {
    "intro": ":::definition[파동방정식]\n파동방정식(wave equation)은 줄의 진동, 소리의 전파, 전자기파 등 파동 현상을 기술하는 PDE입니다. 장력 $\\tau$로 팽팽하게 당긴 줄의 미소 구간에 뉴턴의 제2법칙을 적용하면, 변위 $u(x,t)$에 대해:\n\n$$u_{tt} = c^2\\,u_{xx}, \\quad c = \\sqrt{\\frac{\\tau}{\\rho_L}}$$\n\n여기서 $c$는 **파동 전파 속도(wave speed)**이고, $\\tau$는 장력, $\\rho_L$은 선밀도(단위 길이당 질량)입니다. 기타 줄이 팽팽할수록($\\tau$ 큼) 파동이 빨리 전파되고, 무거울수록($\\rho_L$ 큼) 느리게 전파됩니다. 이것이 기타의 줄 튜닝 원리입니다.\n:::\n\n:::theorem[달랑베르 해]\n파동방정식의 가장 아름다운 해법은 **달랑베르(d'Alembert) 해**입니다. 무한 직선 위의 파동방정식 $u_{tt} = c^2 u_{xx}$의 일반해는:\n\n$$u(x,t) = f(x + ct) + g(x - ct)$$\n\n여기서 $f$와 $g$는 임의의 (두 번 미분 가능한) 함수입니다. $g(x - ct)$는 원래 형태 $g(x)$가 오른쪽으로 속도 $c$로 이동하는 **우행파(right-traveling wave)**이고, $f(x + ct)$는 왼쪽으로 이동하는 **좌행파(left-traveling wave)**입니다. 즉, 파동방정식의 해는 좌행파와 우행파의 합입니다. 열방정식에서 형태가 시간에 따라 변하는(평탄해지는) 것과 달리, 파동방정식에서는 각 성분의 형태가 보존되며 이동만 합니다.\n:::\n\n유한 구간 $0 \\leq x \\leq L$, 양 끝 고정($u(0,t) = u(L,t) = 0$)인 경우에는 변수분리법을 적용합니다. $u(x,t) = X(x)T(t)$로 놓으면:\n\n$$\\frac{T''}{c^2 T} = \\frac{X''}{X} = -\\lambda$$\n\n$X'' + \\lambda X = 0$, $X(0)=X(L)=0$에서 고유값 $\\lambda_n = (n\\pi/L)^2$, 고유함수 $X_n = \\sin(n\\pi x/L)$. 시간 ODE는 $T'' + c^2\\lambda_n T = 0$이므로 $T_n(t) = A_n\\cos(\\omega_n t) + B_n\\sin(\\omega_n t)$, 여기서 $\\omega_n = cn\\pi/L$는 **고유진동수(natural frequency)**입니다. 따라서:\n\n$$u(x,t) = \\sum_{n=1}^{\\infty}\\left[A_n\\cos\\frac{n\\pi ct}{L} + B_n\\sin\\frac{n\\pi ct}{L}\\right]\\sin\\frac{n\\pi x}{L}$$\n\n각 항 $\\sin(n\\pi x/L)\\cdot[A_n\\cos(\\omega_n t) + B_n\\sin(\\omega_n t)]$는 **정상파(standing wave)**입니다. 공간적으로는 $\\sin(n\\pi x/L)$ 모양으로 고정되어 있고, 시간적으로는 $\\omega_n$의 진동수로 진동합니다. $n=1$이 기본 진동(fundamental), $n=2,3,\\ldots$가 배음(overtone/harmonic)입니다. 이것이 악기의 음색을 결정합니다.\n\n파동방정식에서는 초기조건 두 개가 필요합니다: 초기 변위 $u(x,0) = \\phi(x)$와 초기 속도 $u_t(x,0) = \\psi(x)$. $u(x,0)$에서 $A_n$을, $u_t(x,0)$에서 $B_n$을 결정합니다:\n\n$$A_n = \\frac{2}{L}\\int_0^L \\phi(x)\\sin\\frac{n\\pi x}{L}\\,dx, \\quad B_n = \\frac{2}{n\\pi c}\\int_0^L \\psi(x)\\sin\\frac{n\\pi x}{L}\\,dx$$\n\n열방정식과 파동방정식의 가장 근본적인 차이를 정리하겠습니다. 열방정식에서 시간 부분은 $e^{-\\alpha\\lambda_n t}$ (지수감쇠)이지만, 파동방정식에서는 $\\cos(\\omega_n t)$, $\\sin(\\omega_n t)$ (진동)입니다. 열은 시간이 지나면 사라지지만 파동은 영원히 진동합니다(에너지가 보존되기 때문입니다). 열방정식은 초기의 불연속을 즉시 매끄럽게 만들지만, 파동방정식은 초기의 불연속을 보존하며 전파합니다. 이 차이가 포물선형과 쌍곡선형 PDE의 본질적 차이입니다.",
    "intuition": "기타 줄을 튕기면 파동이 양 끝까지 달려가서 반사되고, 좌행파와 우행파가 겹쳐서 정상파가 됩니다. 양 끝이 고정되어 있으므로 줄 길이의 정수 배에 해당하는 파장만 허용됩니다 — 이것이 고유진동수입니다. $n=1$이 가장 낮은 음(기본음)이고, $n=2,3,\\ldots$는 배음입니다. 열방정식과의 핵심 차이는 시간 부분입니다: 열은 $e^{-\\text{감쇠율}\\cdot t}$이므로 시간이 지나면 사라지지만, 파동은 $\\cos(\\omega t)$이므로 영원히 진동합니다. 뜨거운 물은 식지만, 기타 줄은 (마찰이 없다면) 영원히 진동합니다.",
    "formula": "u_{tt} = c^2 u_{xx},\\quad c = \\sqrt{\\tau/\\rho_L}\n\\text{달랑베르 해:}\\ u(x,t) = f(x+ct) + g(x-ct)\nu(x,t) = \\sum_{n=1}^{\\infty}\\left[A_n\\cos\\frac{n\\pi ct}{L} + B_n\\sin\\frac{n\\pi ct}{L}\\right]\\sin\\frac{n\\pi x}{L}\n\\omega_n = \\frac{n\\pi c}{L}\\ (\\text{고유진동수})\nA_n = \\frac{2}{L}\\int_0^L \\phi(x)\\sin\\frac{n\\pi x}{L}\\,dx\nB_n = \\frac{2}{n\\pi c}\\int_0^L \\psi(x)\\sin\\frac{n\\pi x}{L}\\,dx",
    "summary": ":::note[요약]\n• 파동방정식: $u_{tt} = c^2 u_{xx}$, 뉴턴 법칙에서 유도\n• 달랑베르 해: 좌행파 + 우행파, 형태 보존\n• 유한 구간 변수분리: 정상파와 고유진동수\n• 열과 비교: 열은 감쇠, 파동은 진동 유지\n• 초기조건 두 개 필요 (변위 + 속도)\n:::"
  },
  "examples": [
    {
      "title": "[기본] 유한 구간 파동방정식의 풀이",
      "problem": "$u_{tt} = 4u_{xx}$, $u(0,t)=u(\\pi,t)=0$, $u(x,0) = \\sin 2x$, $u_t(x,0) = 0$의 해를 구하시오.",
      "steps": [
        "$c^2 = 4$이므로 $c = 2$, $L = \\pi$.",
        "변수분리: $\\lambda_n = n^2$, $X_n = \\sin(nx)$, $\\omega_n = cn = 2n$.",
        "일반해: $u(x,t) = \\sum [A_n\\cos(2nt) + B_n\\sin(2nt)]\\sin(nx)$.",
        "$u(x,0) = \\sum A_n \\sin(nx) = \\sin 2x$ → $A_2 = 1$, 나머지 $A_n = 0$.",
        "$u_t(x,0) = \\sum 2n\\,B_n \\sin(nx) = 0$ → 모든 $B_n = 0$.",
        "$u(x,t) = \\sin(2x)\\cos(4t)$."
      ],
      "answer": "$u(x,t) = \\sin(2x)\\cos(4t)$",
      "lesson": "$\\cos(4t)$가 보여주듯, 해는 영원히 진동하며 감쇠하지 않습니다. 이것이 열방정식($e^{-\\alpha n^2 t}$ 감쇠)과의 본질적 차이입니다. 또한 초기 속도가 0이면 $B_n = 0$이므로 $\\cos$ 항만 살아남습니다."
    },
    {
      "title": "[기본] 달랑베르 해의 구성",
      "problem": "무한 직선에서 $u_{tt} = u_{xx}$, $u(x,0) = e^{-x^2}$, $u_t(x,0) = 0$의 해를 달랑베르 공식으로 구하시오.",
      "steps": [
        "$c = 1$. 달랑베르 공식: $u(x,t) = \\dfrac{\\phi(x+ct) + \\phi(x-ct)}{2} + \\dfrac{1}{2c}\\int_{x-ct}^{x+ct}\\psi(s)\\,ds$.",
        "$\\phi(x) = e^{-x^2}$, $\\psi(x) = 0$이므로 적분항 소멸.",
        "$u(x,t) = \\dfrac{e^{-(x+t)^2} + e^{-(x-t)^2}}{2}$."
      ],
      "answer": "$u(x,t) = \\dfrac{e^{-(x+t)^2} + e^{-(x-t)^2}}{2}$",
      "lesson": "달랑베르 해는 초기 파형이 좌우로 반씩 나뉘어 전파하는 것을 보여줍니다. 형태는 보존되며 감쇠 없이 이동합니다."
    },
    {
      "title": "[응용] 초기 속도가 주어진 경우",
      "problem": "$u_{tt} = u_{xx}$, $u(0,t) = u(\\pi,t) = 0$, $u(x,0) = 0$, $u_t(x,0) = \\sin x$의 해를 구하시오.",
      "steps": [
        "$c = 1$, $L = \\pi$. 고유진동수 $\\omega_n = n$.",
        "일반해: $u = \\sum [A_n\\cos(nt) + B_n\\sin(nt)]\\sin(nx)$.",
        "$u(x,0) = 0$: 모든 $A_n = 0$.",
        "$u_t(x,0) = \\sum n\\,B_n\\sin(nx) = \\sin x$: $1 \\cdot B_1 = 1$, $B_1 = 1$.",
        "$u(x,t) = \\sin(x)\\sin(t)$."
      ],
      "answer": "$u(x,t) = \\sin(x)\\sin(t)$",
      "lesson": "초기 변위가 0이면 $A_n = 0$이고, 초기 속도가 해의 모양을 결정합니다. $B_n$의 공식에 $1/(n\\omega_n)$이 곱해지는 것에 주의하세요."
    },
    {
      "title": "[응용] 열방정식과의 비교",
      "problem": "같은 조건 $u(0,t) = u(\\pi,t) = 0$, $u(x,0) = \\sin x$에서 열방정식 $u_t = u_{xx}$와 파동방정식 $u_{tt} = u_{xx}$의 해를 비교하시오.",
      "steps": [
        "열방정식: $u_H(x,t) = \\sin(x)\\,e^{-t}$ (지수감쇠).",
        "파동방정식 ($u_t(x,0) = 0$): $u_W(x,t) = \\sin(x)\\cos(t)$ (진동).",
        "$t = \\pi$일 때: 열 $u_H = \\sin(x)\\,e^{-\\pi} \\approx 0.043\\sin x$ (거의 소멸).",
        "$t = \\pi$일 때: 파동 $u_W = \\sin(x)\\cos(\\pi) = -\\sin(x)$ (반전, 진폭 유지)."
      ],
      "answer": "열: 감쇠 $e^{-t}$, 파동: 진동 $\\cos t$ (에너지 보존 vs 소산)",
      "lesson": "열은 에너지가 소산(dissipation)되고, 파동은 에너지가 보존(conservation)됩니다. 이것이 포물선형과 쌍곡선형의 본질적 차이입니다."
    },
    {
      "title": "[심화] 다중 모드 정상파의 해석",
      "problem": "$u_{tt} = 9u_{xx}$, $u(0,t) = u(\\pi,t) = 0$, $u(x,0) = \\sin x + 2\\sin 3x$, $u_t(x,0) = 0$의 해를 구하고 물리적 의미를 해석하시오.",
      "steps": [
        "$c = 3$. $\\omega_n = 3n$.",
        "일반해: $u = \\sum A_n \\cos(3nt)\\sin(nx)$ ($B_n = 0$: 초기속도 0).",
        "$A_1 = 1$, $A_3 = 2$. $u = \\sin(x)\\cos(3t) + 2\\sin(3x)\\cos(9t)$.",
        "기본 진동($n=1$): 진동수 $\\omega_1 = 3$, 파장 $2\\pi$.",
        "3차 배음($n=3$): 진동수 $\\omega_3 = 9$, 파장 $2\\pi/3$. 3배 빠르게 진동.",
        "두 모드가 독립적으로 영원히 진동합니다 (에너지 교환 없음)."
      ],
      "answer": "$u = \\sin(x)\\cos(3t) + 2\\sin(3x)\\cos(9t)$",
      "lesson": "각 정상파 모드는 독립적으로 진동하며 에너지를 교환하지 않습니다. 이것이 고유함수의 직교성의 물리적 의미입니다. 악기의 기본음과 배음도 이 원리입니다."
    }
  ],
  "problems": [
    {
      "id": "20-1",
      "type": "choice",
      "difficulty": 1,
      "question": "파동방정식 $u_{tt} = c^2 u_{xx}$에서 달랑베르 해의 형태는?",
      "choices": [
        "$u = e^{-ct}\\sin x$",
        "$u = f(x+ct) + g(x-ct)$",
        "$u = f(x)\\cos(ct)$",
        "$u = (x+ct)^2$"
      ],
      "answer": "$u = f(x+ct) + g(x-ct)$",
      "hints": [
        "파동방정식의 일반해는 두 방향으로 진행하는 파의 합입니다.",
        "$g(x-ct)$는 오른쪽으로, $f(x+ct)$는 왼쪽으로 이동합니다."
      ],
      "explanation": "달랑베르 공식: $u(x,t) = f(x+ct) + g(x-ct)$. $f$는 좌행파, $g$는 우행파입니다. $f, g$는 초기조건에 의해 결정됩니다.",
      "wrongAnalysis": "$e^{-ct}$가 포함된 선택지를 고르면 열방정식과 혼동한 것입니다. 파동은 감쇠하지 않습니다."
    },
    {
      "id": "20-2",
      "type": "choice",
      "difficulty": 2,
      "question": "양 끝 고정($u(0,t) = u(L,t) = 0$)인 파동방정식에서 $n$번째 고유진동수 $\\omega_n$은?",
      "choices": [
        "$\\omega_n = n\\pi/L$",
        "$\\omega_n = n\\pi c/L$",
        "$\\omega_n = n^2\\pi c/L$",
        "$\\omega_n = nc/L$"
      ],
      "answer": "$\\omega_n = n\\pi c/L$",
      "hints": [
        "$T'' + c^2\\lambda_n T = 0$에서 $\\lambda_n = (n\\pi/L)^2$입니다.",
        "$T'' + \\omega_n^2 T = 0$이므로 $\\omega_n^2 = c^2\\lambda_n$."
      ],
      "explanation": "$T'' + c^2(n\\pi/L)^2 T = 0$에서 $\\omega_n = c\\sqrt{\\lambda_n} = c \\cdot n\\pi/L = n\\pi c/L$. $n=1$이 기본 진동수, $n=2,3,\\ldots$가 배음입니다.",
      "wrongAnalysis": "$c$를 빠뜨려 $\\omega_n = n\\pi/L$로 답하는 실수가 흔합니다. 파동 속도 $c$가 진동수에 반드시 포함됩니다."
    },
    {
      "id": "20-3",
      "type": "choice",
      "difficulty": 3,
      "question": "열방정식과 파동방정식의 근본적 차이로 올바른 것은?",
      "choices": [
        "열방정식은 2계, 파동방정식은 1계 PDE이다",
        "열방정식의 해는 시간에 따라 감쇠하고, 파동방정식의 해는 영원히 진동한다",
        "열방정식은 초기조건 2개, 파동방정식은 1개가 필요하다",
        "열방정식은 쌍곡선형, 파동방정식은 포물선형이다"
      ],
      "answer": "열방정식의 해는 시간에 따라 감쇠하고, 파동방정식의 해는 영원히 진동한다",
      "hints": [
        "열방정식의 시간 부분: $e^{-\\alpha\\lambda_n t}$ (감쇠).",
        "파동방정식의 시간 부분: $\\cos(\\omega_n t)$, $\\sin(\\omega_n t)$ (진동).",
        "열방정식은 포물선형, 파동방정식은 쌍곡선형입니다."
      ],
      "explanation": "열방정식의 시간 부분은 지수감쇠 $e^{-\\alpha\\lambda_n t}$이므로 시간이 지나면 해가 사라집니다(확산, 에너지 소산). 파동방정식의 시간 부분은 $\\cos(\\omega_n t)$, $\\sin(\\omega_n t)$이므로 영원히 진동합니다(에너지 보존). 이것이 포물선형과 쌍곡선형 PDE의 가장 본질적인 차이입니다.",
      "wrongAnalysis": "흔한 혼동: (1) 열방정식은 1계 시간미분이므로 초기조건 1개, 파동방정식은 2계이므로 2개 필요 (선택지와 반대). (2) 열은 포물선형, 파동은 쌍곡선형 (선택지와 반대). 분류와 물리적 성질을 정확히 연결하세요."
    },
    {
      "id": "20-4",
      "type": "choice",
      "difficulty": 1,
      "question": "파동방정식 $u_{tt} = c^2 u_{xx}$에서 초기조건이 몇 개 필요한가?",
      "choices": [
        "0개",
        "1개",
        "2개",
        "3개"
      ],
      "answer": "2개",
      "hints": [
        "$u_{tt}$는 시간에 대한 2계 미분입니다.",
        "2계 시간미분이므로 초기 변위와 초기 속도가 필요합니다."
      ],
      "explanation": "파동방정식은 $u_{tt}$(2계 시간미분)를 포함하므로 초기조건 2개가 필요합니다: 초기 변위 $u(x,0) = \\phi(x)$와 초기 속도 $u_t(x,0) = \\psi(x)$.",
      "wrongAnalysis": "열방정식($u_t$, 1계)과 혼동하여 초기조건 1개로 충분하다고 착각하는 실수가 있습니다."
    },
    {
      "id": "20-5",
      "type": "choice",
      "difficulty": 2,
      "question": "$u_{tt} = 9u_{xx}$, $u(0,t)=u(\\pi,t)=0$, $u(x,0) = 2\\sin x$, $u_t(x,0) = 0$의 해는?",
      "choices": [
        "$2\\sin(x)\\cos(3t)$",
        "$2\\sin(x)e^{-9t}$",
        "$2\\sin(3x)\\cos(t)$",
        "$2\\sin(x)\\cos(t)$"
      ],
      "answer": "$2\\sin(x)\\cos(3t)$",
      "hints": [
        "$c^2 = 9$이므로 $c = 3$. 고유진동수 $\\omega_n = cn\\pi/L = 3n$이고 $n=1$이면 $\\omega_1 = 3$.",
        "초기 속도 0이므로 $B_n = 0$이고, 초기 변위에서 $n=1$만 살아남아 $\\cos(3t)$ 항만 남습니다."
      ],
      "explanation": "$c = 3$, $L = \\pi$. 일반해: $\\sum [A_n\\cos(3nt) + B_n\\sin(3nt)]\\sin(nx)$. 초기조건 $u(x,0) = 2\\sin x$에서 $A_1 = 2$. $u_t(x,0) = 0$에서 모든 $B_n = 0$. 따라서 $u = 2\\sin(x)\\cos(3t)$.",
      "wrongAnalysis": "파동방정식인데 열방정식의 감쇠 $e^{-9t}$를 적용하는 실수가 흔합니다. 파동은 $\\cos, \\sin$으로 진동합니다."
    }
  ],
  "summary": {
    "keyPoints": [
      "파동방정식 $u_{tt} = c^2 u_{xx}$, 뉴턴 법칙에서 유도",
      "달랑베르 해: $f(x+ct) + g(x-ct)$ (좌행파 + 우행파)",
      "유한 구간: 정상파, 고유진동수 $\\omega_n = n\\pi c/L$",
      "열과의 핵심 차이: 감쇠 vs 진동",
      "초기조건 두 개 (변위 $\\phi$ + 속도 $\\psi$) 필요"
    ],
    "formulas": [
      "u_{tt} = c^2 u_{xx},\\quad c = \\sqrt{\\tau/\\rho_L}",
      "u(x,t) = f(x+ct) + g(x-ct)",
      "\\omega_n = n\\pi c / L",
      "u = \\sum [A_n\\cos(\\omega_n t) + B_n\\sin(\\omega_n t)]\\sin(n\\pi x/L)"
    ],
    "commonMistakes": [
      "열방정식 해법의 $e^{-\\alpha\\lambda t}$를 파동방정식에도 적용하는 실수",
      "고유진동수에 $c$를 빠뜨림",
      "초기 속도 조건($u_t(x,0) = \\psi$)을 무시하고 $B_n$을 결정하지 않음"
    ],
    "nextConnection": "열방정식과 파동방정식을 배웠으니, 다음 레슨에서는 시간이 없는 정상상태 문제를 기술하는 라플라스 방정식과 푸아송 방정식을 공부합니다."
  }
}
];
