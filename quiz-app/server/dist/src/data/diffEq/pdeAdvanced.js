"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pdeAdvancedLessons = void 0;
exports.pdeAdvancedLessons = [
    {
        "id": 21,
        "title": "라플라스 방정식과 조화함수",
        "category": "편미분방정식",
        "level": "심화",
        "question": "시간이 변하지 않는 정상상태에서 온도나 전위의 분포는 어떤 방정식을 만족할까?",
        "concept": {
            "intro": ":::definition[라플라스 방정식]\n라플라스 방정식(Laplace's equation)은 편미분방정식 중에서 가장 아름다운 구조를 가진 방정식입니다. 2차원에서는 $\\Delta u = u_{xx} + u_{yy} = 0$, 일반적으로는 $\\nabla^2 u = 0$으로 쓰며, 열방정식에서 시간 변화가 사라진 정상상태($u_t = 0$)에 해당합니다. 즉, 더 이상 변하지 않는 평형 상태의 분포를 기술합니다.\n:::\n\n:::definition[조화함수]\n라플라스 방정식의 해를 조화함수(harmonic function)라 부릅니다. 조화함수는 놀라울 정도로 규칙적인 성질을 갖습니다. 가장 유명한 것이 평균값 성질(Mean Value Property)로, 조화함수의 한 점에서의 값은 그 점을 중심으로 한 임의의 원(또는 구) 위에서의 함숫값의 평균과 정확히 같습니다. 수식으로 쓰면 $u(x_0, y_0) = \\dfrac{1}{2\\pi} \\displaystyle\\int_0^{2\\pi} u(x_0 + r\\cos\\theta,\\, y_0 + r\\sin\\theta)\\,d\\theta$ 입니다.\n:::\n\n:::theorem[최대값 원리]\n평균값 성질로부터 최대값 원리(Maximum Principle)가 따라나옵니다. 만약 조화함수가 닫힌 영역의 내부에서 최대값(또는 최소값)을 가진다면, 그 함수는 상수함수여야 합니다. 다시 말해, 상수가 아닌 조화함수의 최대값과 최소값은 반드시 경계에서만 발생합니다. 이 성질은 해의 유일성 증명에 핵심적으로 사용됩니다.\n:::\n\n직사각형 영역 $0 \\le x \\le a,\\, 0 \\le y \\le b$ 에서 라플라스 방정식을 풀 때는 변수분리법 $u(x,y) = X(x)Y(y)$를 적용합니다. $\\dfrac{X''}{X} = -\\dfrac{Y''}{Y} = -\\lambda$ 로 분리하면 한쪽은 삼각함수, 다른 쪽은 쌍곡선함수($\\sinh$, $\\cosh$)가 됩니다. 경계조건이 0인 방향에서 고유값이 결정되고, 나머지 방향에서 쌍곡선함수의 계수를 결정합니다.\n\n원판 영역에서는 극좌표 $(r, \\theta)$로 변환하는 것이 자연스럽습니다. 라플라스 방정식은 극좌표에서 $u_{rr} + \\dfrac{1}{r}u_r + \\dfrac{1}{r^2}u_{\\theta\\theta} = 0$ 이 됩니다. 변수분리 $u(r,\\theta) = R(r)\\Theta(\\theta)$를 적용하면 $\\Theta$ 부분에서 $\\sin(n\\theta), \\cos(n\\theta)$가, $R$ 부분에서 $r^n, r^{-n}$이 나타납니다. 원판 내부에서 유한한 해를 요구하면 $r^{-n}$ 항이 사라지고, 경계 $r = a$에서의 조건으로 계수를 결정합니다.\n\n:::theorem[푸아송 적분 공식]\n이를 깔끔하게 정리한 것이 푸아송 적분 공식(Poisson integral formula)입니다: $u(r,\\theta) = \\dfrac{1}{2\\pi}\\displaystyle\\int_0^{2\\pi} \\dfrac{a^2 - r^2}{a^2 - 2ar\\cos(\\theta - \\phi) + r^2}\\,f(\\phi)\\,d\\phi$ (여기서 $f(\\phi)$는 원 경계에서의 값). 이 공식은 경계값만 알면 내부의 조화함수를 완전히 결정할 수 있음을 보여줍니다.\n:::\n\n물리적으로 라플라스 방정식은 정상상태 온도 분포(열 흐름이 평형에 도달), 정전기 퍼텐셜(전하가 없는 영역), 비압축성 유체의 속도 퍼텐셜 등을 기술합니다. 조화함수의 이론은 복소해석학과도 깊이 연결되어 있습니다: 해석함수의 실수부와 허수부는 각각 조화함수입니다.",
            "intuition": "얇은 금속판의 가장자리를 서로 다른 온도로 가열한 뒤 충분히 오래 기다리면, 내부의 온도 분포는 더 이상 시간에 따라 변하지 않는 정상상태에 도달합니다. 이때 각 점의 온도는 주변 온도들의 '평균'으로 결정되며, 뜨거운 곳도 차가운 곳도 항상 가장자리에만 존재합니다. 이것이 바로 조화함수의 평균값 성질과 최대값 원리를 직관적으로 보여주는 예시입니다.",
            "formula": "\\Delta u = u_{xx} + u_{yy} = 0 \\quad (\\text{2D 라플라스})\n\\nabla^2 u = u_{xx} + u_{yy} + u_{zz} = 0 \\quad (\\text{3D})\nu(x_0, y_0) = \\frac{1}{2\\pi}\\int_0^{2\\pi} u(x_0+r\\cos\\theta,\\, y_0+r\\sin\\theta)\\,d\\theta \\quad (\\text{평균값 성질})\nu(r,\\theta) = \\frac{a^2 - r^2}{2\\pi}\\int_0^{2\\pi} \\frac{f(\\phi)}{a^2 - 2ar\\cos(\\theta-\\phi) + r^2}\\,d\\phi \\quad (\\text{푸아송 적분})",
            "summary": ":::note[요약]\n* 라플라스 방정식 $\\nabla^2 u = 0$: 정상상태 PDE\n* 조화함수 = 라플라스 방정식의 해\n* 평균값 성질: 중심값 = 원 위 평균\n* 최대값 원리: 최대/최소는 경계에서만\n* 직사각형 $\\to$ 삼각함수 + 쌍곡선함수\n* 원판 $\\to$ 극좌표, 푸아송 적분\n:::"
        },
        "examples": [
            {
                "title": "[기본] 직사각형에서의 라플라스 방정식",
                "problem": "$0 \\le x \\le \\pi,\\, 0 \\le y \\le 1$ 에서 $u_{xx} + u_{yy} = 0$, 경계조건: $u(0,y) = u(\\pi,y) = 0$, $u(x,0) = 0$, $u(x,1) = \\sin(2x)$ 의 해를 구하시오.",
                "steps": [
                    "$u(x,y) = X(x)Y(y)$로 놓으면 $\\dfrac{X''}{X} = -\\dfrac{Y''}{Y} = -\\lambda$.",
                    "$X'' + \\lambda X = 0$, $X(0) = X(\\pi) = 0$ $\\Rightarrow$ $\\lambda_n = n^2$, $X_n(x) = \\sin(nx)$.",
                    "$Y'' - n^2 Y = 0$ $\\Rightarrow$ $Y_n(y) = A_n \\sinh(ny) + B_n \\cosh(ny)$.",
                    "$u(x,0) = 0$ $\\Rightarrow$ $B_n = 0$ (모든 $n$에 대해). 따라서 $Y_n(y) = A_n \\sinh(ny)$.",
                    "$u(x,1) = \\sin(2x)$ $\\Rightarrow$ $\\sum A_n \\sinh(n) \\sin(nx) = \\sin(2x)$.",
                    "$n = 2$만 살아남음: $A_2 \\sinh(2) = 1$ $\\Rightarrow$ $A_2 = \\dfrac{1}{\\sinh 2}$.",
                    "$u(x,y) = \\dfrac{\\sinh(2y)}{\\sinh 2} \\sin(2x)$."
                ],
                "answer": "$u(x,y) = \\dfrac{\\sinh(2y)}{\\sinh 2} \\sin(2x)$",
                "lesson": "직사각형 라플라스 문제에서 동차 경계조건 방향은 삼각함수(고유함수), 비제차 방향은 쌍곡선함수가 됩니다. $\\sinh$는 0에서 0이 되므로 $y=0$에서의 동차조건과 잘 맞습니다."
            },
            {
                "title": "[기본] 원판에서의 라플라스 방정식",
                "problem": "반지름 $a$인 원판 내부에서 $\\nabla^2 u = 0$, 경계조건 $u(a, \\theta) = \\cos(3\\theta)$ 의 해를 구하시오.",
                "steps": [
                    "극좌표 변수분리: $u(r,\\theta) = R(r)\\Theta(\\theta)$.",
                    "$\\Theta'' + n^2\\Theta = 0$ $\\Rightarrow$ $\\Theta_n = A_n \\cos(n\\theta) + B_n \\sin(n\\theta)$.",
                    "$R$ 방정식: $r^2 R'' + rR' - n^2 R = 0$ (오일러형) $\\Rightarrow$ $R_n = C_n r^n + D_n r^{-n}$.",
                    "원판 내부 유한성: $D_n = 0$. 따라서 $R_n = C_n r^n$.",
                    "일반해: $u(r,\\theta) = \\sum_{n=0}^{\\infty} r^n (a_n \\cos n\\theta + b_n \\sin n\\theta)$.",
                    "경계조건 $u(a,\\theta) = \\cos(3\\theta)$: $n=3$만 살아남음, $a^3 \\cdot a_3 = 1$.",
                    "$u(r,\\theta) = \\left(\\dfrac{r}{a}\\right)^3 \\cos(3\\theta)$."
                ],
                "answer": "$u(r,\\theta) = \\left(\\dfrac{r}{a}\\right)^3 \\cos(3\\theta)$",
                "lesson": "원판 문제에서 내부 유한성 조건이 $r^{-n}$ 항을 제거합니다. 경계값이 단일 모드이면 해도 단일 모드입니다."
            },
            {
                "title": "[응용] 조화함수의 검증",
                "problem": "$u(x,y) = e^x \\cos y$가 조화함수인지 확인하고, 평균값 성질을 $(0,0)$에서 반지름 $r$인 원으로 검증하시오.",
                "steps": [
                    "$u_{xx} = e^x \\cos y$, $u_{yy} = -e^x \\cos y$.",
                    "$u_{xx} + u_{yy} = e^x \\cos y - e^x \\cos y = 0$ ✓. 조화함수.",
                    "평균값 검증: $u(0,0) = e^0 \\cos 0 = 1$.",
                    "원 위의 평균 $= \\dfrac{1}{2\\pi}\\int_0^{2\\pi} e^{r\\cos\\theta}\\cos(r\\sin\\theta)\\,d\\theta$.",
                    "이것은 $\\text{Re}\\left[\\dfrac{1}{2\\pi}\\int_0^{2\\pi}e^{re^{i\\theta}}d\\theta\\right] = \\text{Re}[e^0] = 1$.",
                    "중심값 $1$ = 원 위 평균 $1$ ✓."
                ],
                "answer": "조화함수이며 평균값 성질 성립",
                "lesson": "$e^x\\cos y$는 $e^z = e^{x+iy}$의 실수부로, 해석함수의 실수부는 항상 조화함수입니다."
            },
            {
                "title": "[응용] 최대값 원리의 활용",
                "problem": "$\\nabla^2 u = 0$, 영역 $0 \\leq x \\leq 1$, $0 \\leq y \\leq 1$에서 경계값이 모두 $[0, 10]$ 범위에 있다면 내부에서 $u$의 범위를 결정하시오.",
                "steps": [
                    "최대값 원리: 상수가 아닌 조화함수의 최대/최소는 경계에서만 달성.",
                    "경계에서 $0 \\leq u \\leq 10$.",
                    "따라서 내부에서도 $0 \\leq u \\leq 10$.",
                    "더 나아가: 내부 점에서 $u = 0$이거나 $u = 10$이면 $u$는 상수함수.",
                    "상수가 아닌 한, 내부에서는 엄밀하게 $0 < u < 10$."
                ],
                "answer": "내부에서 $0 < u < 10$ (엄밀 부등식)",
                "lesson": "최대값 원리로 해를 직접 구하지 않고도 범위를 결정할 수 있습니다. 이는 수치 해의 검증에도 활용됩니다."
            },
            {
                "title": "[심화] 원환(annulus)에서의 라플라스 방정식",
                "problem": "$a < r < b$인 원환에서 $\\nabla^2 u = 0$, $u(a,\\theta) = 0$, $u(b,\\theta) = 1$ (상수)의 해를 구하시오.",
                "steps": [
                    "경계조건이 $\\theta$에 무관 → 해도 $\\theta$에 무관: $u = u(r)$.",
                    "극좌표 라플라시안: $u_{rr} + \\dfrac{1}{r}u_r = 0$ ($\\theta$ 항 소멸).",
                    "이것은 $\\dfrac{1}{r}\\dfrac{d}{dr}(r\\,u') = 0$, 즉 $r\\,u' = C_1$.",
                    "$u' = C_1/r$이므로 $u = C_1 \\ln r + C_2$.",
                    "$u(a) = 0$: $C_1 \\ln a + C_2 = 0$. $u(b) = 1$: $C_1 \\ln b + C_2 = 1$.",
                    "$C_1(\\ln b - \\ln a) = 1$이므로 $C_1 = \\dfrac{1}{\\ln(b/a)}$.",
                    "$u(r) = \\dfrac{\\ln(r/a)}{\\ln(b/a)}$."
                ],
                "answer": "$u(r) = \\dfrac{\\ln(r/a)}{\\ln(b/a)}$",
                "lesson": "원환 영역에서는 $r^{-n}$ 항을 제거할 수 없습니다 (내부 경계가 $r = a \\neq 0$). 축대칭 경우의 해는 $\\ln r$을 포함하는 로그 퍼텐셜입니다."
            }
        ],
        "problems": [
            {
                "id": "21-1",
                "type": "choice",
                "difficulty": 1,
                "question": "다음 중 조화함수(harmonic function)에 대한 설명으로 올바른 것은?",
                "choices": [
                    "열방정식의 해를 조화함수라 한다.",
                    "라플라스 방정식 $\\nabla^2 u = 0$의 해를 조화함수라 한다.",
                    "파동방정식의 해를 조화함수라 한다.",
                    "모든 연속함수는 조화함수이다."
                ],
                "answer": "라플라스 방정식 $\\nabla^2 u = 0$의 해를 조화함수라 한다.",
                "hints": [
                    "조화(harmonic)라는 이름은 조화진동에서 유래했지만, 정의는 라플라스 방정식과 관련됩니다.",
                    "$\\nabla^2 u = 0$을 만족하는 함수를 떠올려 보세요."
                ],
                "explanation": "조화함수는 라플라스 방정식 $\\nabla^2 u = 0$을 만족하는 (충분히 매끄러운) 함수로 정의됩니다. 열방정식이나 파동방정식의 해와는 다른 개념입니다.",
                "wrongAnalysis": "열방정식의 정상상태 해가 라플라스 방정식을 만족하므로 혼동하기 쉽지만, 시간 의존적인 열방정식의 일반 해는 조화함수가 아닙니다."
            },
            {
                "id": "21-2",
                "type": "choice",
                "difficulty": 2,
                "question": "닫힌 영역 $D$ 위에서 정의된 조화함수 $u$가 상수가 아닐 때, 최대값 원리에 의하면 $u$의 최대값은 어디에서 발생하는가?",
                "choices": [
                    "영역 $D$의 내부 임의의 점",
                    "영역 $D$의 중심",
                    "영역 $D$의 경계 $\\partial D$",
                    "영역 $D$의 내부와 경계 모두에서 동시에"
                ],
                "answer": "영역 $D$의 경계 $\\partial D$",
                "hints": [
                    "평균값 성질에서 출발: 중심값은 주변의 평균이므로 주변보다 클 수 없습니다.",
                    "이를 반복하면 극값은 어디로 밀려날까요?"
                ],
                "explanation": "최대값 원리(Maximum Principle): 상수가 아닌 조화함수의 최대값과 최소값은 반드시 영역의 경계에서만 달성됩니다. 내부의 어느 점에서든 그 값은 주변의 평균이므로, 주변 값 중 더 큰 것이 반드시 존재합니다.",
                "wrongAnalysis": "내부에서도 극대가 가능하다고 생각하기 쉽지만, 평균값 성질에 의해 내부 극대(또는 극소)가 존재하면 상수함수가 됩니다."
            },
            {
                "id": "21-3",
                "type": "text",
                "difficulty": 3,
                "question": "$0 \\le x \\le \\pi$, $0 \\le y \\le 1$에서 $u_{xx} + u_{yy} = 0$, 경계조건 $u(0,y) = u(\\pi,y) = 0$, $u(x,0) = 0$, $u(x,1) = \\sin x$일 때, $u(x,y)$를 구하시오. (답 형식: sinh(y)/sinh(1)*sin(x) 등)",
                "answer": "sinh(y)/sinh(1)*sin(x)",
                "hints": [
                    "$u(x,y) = X(x)Y(y)$로 놓고 변수분리하세요.",
                    "$X(0) = X(\\pi) = 0$ 조건에서 $X_n = \\sin(nx)$, $\\lambda_n = n^2$.",
                    "$Y'' - n^2 Y = 0$이고 $Y(0) = 0$이므로 $Y$는 $\\sinh$ 형태."
                ],
                "explanation": "변수분리: $X'' + \\lambda X = 0$, $Y'' - \\lambda Y = 0$. 경계조건 $X(0) = X(\\pi) = 0$에서 $\\lambda_n = n^2$, $X_n = \\sin(nx)$. $Y(0) = 0$에서 $Y_n = \\sinh(ny)$. $u(x,1) = \\sin x$에서 $n=1$만 남고 $A_1 \\sinh(1) = 1$. 따라서 $u(x,y) = \\dfrac{\\sinh y}{\\sinh 1} \\sin x$.",
                "wrongAnalysis": "$\\sinh$와 $\\cosh$를 혼동하는 실수가 많습니다. $\\sinh(0) = 0$이고 $\\cosh(0) = 1$임을 기억하세요. $Y(0) = 0$ 조건이면 $\\sinh$, $Y(0) = 1$ 조건이면 $\\cosh$."
            },
            {
                "id": "21-4",
                "type": "number",
                "difficulty": 1,
                "question": "2차원 라플라스 방정식 $u_{xx} + u_{yy} = 0$에서 $u(x,y) = x^2 - y^2$가 해인지 확인하시오. $u_{xx} + u_{yy}$의 값은?",
                "answer": "0",
                "hints": [
                    "$u_{xx} = \\dfrac{\\partial^2}{\\partial x^2}(x^2 - y^2) = 2$.",
                    "$u_{yy} = \\dfrac{\\partial^2}{\\partial y^2}(x^2 - y^2) = -2$."
                ],
                "explanation": "$u_{xx} = 2$, $u_{yy} = -2$이므로 $u_{xx} + u_{yy} = 2 + (-2) = 0$. 따라서 $u = x^2 - y^2$는 라플라스 방정식의 해, 즉 조화함수입니다.",
                "wrongAnalysis": "$y^2$의 2차 편미분에서 부호를 잘못 처리하는 실수가 있습니다. $\\partial^2(-y^2)/\\partial y^2 = -2$입니다."
            },
            {
                "id": "21-5",
                "type": "choice",
                "difficulty": 2,
                "question": "반지름 $a$인 원판 내부에서 라플라스 방정식을 극좌표로 변수분리할 때, $R(r) = C_n r^n + D_n r^{-n}$에서 원판 '내부'의 유한성 조건에 의해 제거되는 항은?",
                "choices": [
                    "$r^n$ 항",
                    "$r^{-n}$ 항",
                    "두 항 모두 유지",
                    "$\\cos(n\\theta)$ 항"
                ],
                "answer": "$r^{-n}$ 항",
                "hints": [
                    "$r \\to 0$에서 $r^{-n}$은 어떻게 되나요?",
                    "원판 중심($r = 0$)에서 해가 유한해야 합니다."
                ],
                "explanation": "$r^{-n}$은 $r \\to 0$에서 $\\infty$로 발산합니다. 원판 내부에서 해가 유한하려면 $D_n = 0$으로 놓아 $r^{-n}$ 항을 제거해야 합니다.",
                "wrongAnalysis": "$r^{-n}$이 $r \\to \\infty$에서 0으로 가므로 제거해야 한다고 잘못된 이유를 대는 경우가 있습니다. 원판 '내부'에서는 $r \\to 0$이 문제입니다."
            }
        ],
        "summary": {
            "keyPoints": [
                "라플라스 방정식 $\\nabla^2 u = 0$은 정상상태(시간 변화 없음)의 PDE",
                "조화함수 = 라플라스 방정식의 해",
                "평균값 성질: 조화함수의 점 값 = 그 점 주위 원 위의 평균",
                "최대값 원리: 최대/최소는 경계에서만 (상수가 아닌 한)",
                "직사각형: 삼각함수 + $\\sinh$/$\\cosh$",
                "원판: 극좌표 변수분리, 푸아송 적분 공식"
            ],
            "formulas": [
                "\\Delta u = u_{xx} + u_{yy} = 0",
                "u(x_0,y_0) = \\frac{1}{2\\pi}\\int_0^{2\\pi} u(x_0+r\\cos\\theta,\\,y_0+r\\sin\\theta)\\,d\\theta",
                "\\text{직사각형:}\\ u(x,y) = \\sum \\sin(n\\pi x/a)\\,[A_n\\sinh(n\\pi y/a) + B_n\\cosh(n\\pi y/a)]",
                "\\text{원판:}\\ u(r,\\theta) = \\frac{a_0}{2} + \\sum_{n=1}^{\\infty} r^n(a_n\\cos n\\theta + b_n\\sin n\\theta)"
            ],
            "commonMistakes": [
                "$\\sinh$와 $\\cosh$의 초기값 혼동: $\\sinh 0 = 0$, $\\cosh 0 = 1$",
                "극좌표 라플라시안에서 $1/r$ 항 빠뜨림",
                "원판 내부 유한성 조건($r^{-n}$ 제거) 누락",
                "최대값 원리를 '최대값이 경계에 있다'로만 기억하고 '상수함수가 아닌 경우'라는 전제 빠뜨림"
            ],
            "nextConnection": "다음 단원에서는 열원이나 외부 힘이 작용하는 비제차 PDE를 다룹니다. 고유함수 전개법을 이용해 비제차 항을 처리하는 방법을 배웁니다."
        }
    },
    {
        "id": 22,
        "title": "비제차 PDE와 고유함수 전개",
        "category": "편미분방정식",
        "level": "심화",
        "question": "열원이나 외부 힘이 있을 때 PDE는 어떻게 풀까?",
        "concept": {
            "intro": "지금까지 다룬 열방정식 $u_t = \\alpha^2 u_{xx}$나 파동방정식 $u_{tt} = c^2 u_{xx}$는 모두 제차(homogeneous) PDE였습니다. 하지만 현실에서는 외부 열원이 작용하거나, 줄에 외력이 가해지는 등 비제차(nonhomogeneous) 상황이 훨씬 흔합니다. 이러한 경우 방정식은 $u_t = \\alpha^2 u_{xx} + f(x,t)$ 처럼 소스항 $f(x,t)$가 추가됩니다.\n\n:::definition[고유함수 전개법]\n비제차 PDE를 푸는 핵심 전략은 고유함수 전개법(eigenfunction expansion)입니다. 먼저 대응하는 제차 문제의 고유함수 $\\{\\phi_n(x)\\}$를 구합니다. 예를 들어 양 끝이 고정된 열방정식이라면 $\\phi_n(x) = \\sin(n\\pi x/L)$입니다. 그 다음 해를 $u(x,t) = \\displaystyle\\sum_{n=1}^{\\infty} T_n(t)\\,\\phi_n(x)$로 놓고, 소스항도 같은 고유함수로 전개합니다: $f(x,t) = \\displaystyle\\sum_{n=1}^{\\infty} f_n(t)\\,\\phi_n(x)$.\n\n이를 원래 PDE에 대입하면, 각 모드 $n$에 대해 독립적인 ODE가 나옵니다: $T_n'(t) + \\alpha^2 \\lambda_n T_n(t) = f_n(t)$. 여기서 $\\lambda_n$은 고유값입니다. 이 1계 선형 ODE는 적분인자(integrating factor)를 사용해 쉽게 풀 수 있습니다: $T_n(t) = T_n(0)\\,e^{-\\alpha^2\\lambda_n t} + \\displaystyle\\int_0^t f_n(\\tau)\\,e^{-\\alpha^2\\lambda_n(t-\\tau)}\\,d\\tau$.\n:::\n\n:::note[비제차 경계조건 처리]\n경계조건이 비제차인 경우도 있습니다. 예를 들어 $u(0,t) = g_1(t)$, $u(L,t) = g_2(t)$처럼 경계값이 0이 아닐 때입니다. 이 경우 직접 변수분리를 적용할 수 없으므로, 해를 $u(x,t) = v(x,t) + w(x,t)$로 분해합니다. 여기서 $w(x,t)$는 비제차 경계조건을 만족하는 '보조 함수'(보통 선형 보간 등)이고, $v(x,t)$는 동차 경계조건을 만족하는 나머지 부분입니다. $v$에 대해서는 표준적인 고유함수 전개법을 적용할 수 있습니다.\n:::\n\n:::note[정상상태 해 분리]\n정상상태 해 분리도 중요한 기법입니다. 시간이 충분히 지난 후 도달하는 정상상태 해 $u_s(x)$를 먼저 구하고($u_s'' + f_s(x)/\\alpha^2 = 0$ 등), 과도 상태 $v = u - u_s$에 대한 제차 PDE를 풀면 됩니다. 이렇게 하면 비제차 경계조건과 비제차 소스항을 동시에 처리할 수 있습니다.\n:::\n\n:::theorem[듀아멜 원리]\n듀아멜 원리(Duhamel's principle)는 비제차 문제를 제차 문제의 '중첩'으로 이해하는 관점입니다. 시간 $\\tau$에서 순간적으로 소스가 작용한 효과가 시간 $t > \\tau$까지 전파되는 것으로 보고, 이를 모든 $\\tau$에 대해 적분합니다. 물리적으로는 \"과거의 모든 순간에 가해진 소스의 효과를 현재 시점에서 합산\"하는 것입니다.\n:::\n\n응용 예시로는 전기 히터가 막대 중앙을 가열하는 문제(강제 가열), 줄에 외부 진동 힘이 작용하는 문제(강제 진동), 화학 반응에 의한 열 생성 등이 있습니다. 이러한 문제들은 모두 고유함수 전개법을 통해 체계적으로 풀 수 있습니다.",
            "intuition": "제차 PDE가 '아무 자극 없이 자연스럽게 퍼지거나 진동하는' 상황이라면, 비제차 PDE는 '누군가 계속 에너지를 넣어주는' 상황입니다. 히터를 켜놓은 방의 온도 변화, 바람을 맞는 다리의 진동 등이 비제차 문제입니다. 고유함수 전개는 복잡한 소스를 '주파수별로 쪼개어' 각각 따로 처리하는 전략입니다.",
            "formula": "u_t = \\alpha^2 u_{xx} + f(x,t) \\quad (\\text{비제차 열방정식})\nu(x,t) = \\sum_{n=1}^{\\infty} T_n(t)\\,\\phi_n(x),\\quad f(x,t) = \\sum_{n=1}^{\\infty} f_n(t)\\,\\phi_n(x)\nT_n'(t) + \\alpha^2\\lambda_n T_n(t) = f_n(t) \\quad (\\text{각 모드의 ODE})\nT_n(t) = T_n(0)\\,e^{-\\alpha^2\\lambda_n t} + \\int_0^t f_n(\\tau)\\,e^{-\\alpha^2\\lambda_n(t-\\tau)}\\,d\\tau",
            "summary": ":::note[요약]\n* 비제차 PDE: 소스항 $f(x,t)$ 포함\n* 고유함수 전개: 해와 소스를 동일 기저로 전개\n* 각 모드별 1계 ODE로 환원\n* 비제차 경계조건: 보조함수 분리 또는 정상상태 해 분리\n* 듀아멜 원리: 순간 소스의 효과를 시간 적분\n:::"
        },
        "examples": [
            {
                "title": "[기본] 외부 열원이 있는 열방정식",
                "problem": "$u_t = u_{xx} + 2\\sin(\\pi x)$, $0 < x < 1$, $u(0,t) = u(1,t) = 0$, $u(x,0) = 0$ 을 풀어라.",
                "steps": [
                    "고유함수: $\\phi_n(x) = \\sin(n\\pi x)$, 고유값 $\\lambda_n = n^2\\pi^2$.",
                    "$u(x,t) = \\sum T_n(t)\\sin(n\\pi x)$로 놓는다.",
                    "소스항: $f(x,t) = 2\\sin(\\pi x)$ $\\Rightarrow$ $f_1(t) = 2$, $f_n(t) = 0$ ($n \\ge 2$).",
                    "$n=1$: $T_1'(t) + \\pi^2 T_1(t) = 2$, $T_1(0) = 0$.",
                    "적분인자: $T_1(t) = \\dfrac{2}{\\pi^2}(1 - e^{-\\pi^2 t})$.",
                    "$n \\ge 2$: $T_n'(t) + n^2\\pi^2 T_n(t) = 0$, $T_n(0) = 0$ $\\Rightarrow$ $T_n(t) = 0$.",
                    "$u(x,t) = \\dfrac{2}{\\pi^2}(1 - e^{-\\pi^2 t})\\sin(\\pi x)$."
                ],
                "answer": "$u(x,t) = \\dfrac{2}{\\pi^2}(1 - e^{-\\pi^2 t})\\sin(\\pi x)$",
                "lesson": "소스항이 단일 모드 $\\sin(n\\pi x)$에만 기여하면 해도 단일 모드만 살아남습니다. $t \\to \\infty$일 때 $u \\to \\dfrac{2}{\\pi^2}\\sin(\\pi x)$: 이것이 정상상태 해입니다."
            },
            {
                "title": "[기본] 비제차 경계조건 처리",
                "problem": "$u_t = u_{xx}$, $u(0,t) = 0$, $u(1,t) = 1$, $u(x,0) = x$ 를 풀어라.",
                "steps": [
                    "정상상태 해: $u_s''(x) = 0$, $u_s(0) = 0$, $u_s(1) = 1$ $\\Rightarrow$ $u_s(x) = x$.",
                    "과도 상태: $v = u - u_s = u - x$. 그러면 $v_t = v_{xx}$.",
                    "$v(0,t) = 0$, $v(1,t) = 0$ (동차 경계조건!).",
                    "$v(x,0) = u(x,0) - x = x - x = 0$.",
                    "$v(x,0) = 0$이므로 $v(x,t) = 0$ (자명해).",
                    "$u(x,t) = x$ (처음부터 정상상태였음!)."
                ],
                "answer": "$u(x,t) = x$",
                "lesson": "초기조건이 이미 정상상태와 일치하면 과도 상태가 0이 됩니다. 정상상태 분리법은 비제차 경계조건을 동차화하는 강력한 기법입니다."
            },
            {
                "title": "[응용] 과도 상태가 있는 비제차 경계",
                "problem": "$u_t = u_{xx}$, $u(0,t) = 0$, $u(1,t) = 1$, $u(x,0) = 0$를 풀어라.",
                "steps": [
                    "정상상태: $u_s(x) = x$.",
                    "과도 상태: $v = u - x$. $v_t = v_{xx}$, $v(0,t) = v(1,t) = 0$.",
                    "$v(x,0) = 0 - x = -x$.",
                    "$v(x,t) = \\sum B_n \\sin(n\\pi x)\\,e^{-n^2\\pi^2 t}$.",
                    "$B_n = 2\\int_0^1 (-x)\\sin(n\\pi x)\\,dx = \\dfrac{2(-1)^n}{n\\pi}$.",
                    "$u(x,t) = x + \\sum_{n=1}^{\\infty} \\dfrac{2(-1)^n}{n\\pi}\\sin(n\\pi x)\\,e^{-n^2\\pi^2 t}$."
                ],
                "answer": "$u(x,t) = x + \\sum \\dfrac{2(-1)^n}{n\\pi}\\sin(n\\pi x)\\,e^{-n^2\\pi^2 t}$",
                "lesson": "초기조건이 정상상태와 다르면 과도 상태가 0이 아니며, 시간이 지남에 따라 정상상태 $u_s = x$로 수렴합니다."
            },
            {
                "title": "[응용] 시간 의존 소스항",
                "problem": "$u_t = u_{xx} + e^{-t}\\sin(\\pi x)$, $u(0,t) = u(1,t) = 0$, $u(x,0) = 0$을 풀어라.",
                "steps": [
                    "고유함수 전개: $f_1(t) = e^{-t}$, $f_n = 0$ ($n \\geq 2$).",
                    "$n = 1$: $T_1' + \\pi^2 T_1 = e^{-t}$, $T_1(0) = 0$.",
                    "적분인자 $e^{\\pi^2 t}$: $(e^{\\pi^2 t}T_1)' = e^{(\\pi^2 - 1)t}$.",
                    "$e^{\\pi^2 t}T_1 = \\dfrac{e^{(\\pi^2-1)t}}{\\pi^2 - 1} + C$. $T_1(0) = 0$: $C = -\\dfrac{1}{\\pi^2-1}$.",
                    "$T_1(t) = \\dfrac{e^{-t} - e^{-\\pi^2 t}}{\\pi^2 - 1}$.",
                    "$u(x,t) = \\dfrac{e^{-t} - e^{-\\pi^2 t}}{\\pi^2 - 1}\\sin(\\pi x)$."
                ],
                "answer": "$u(x,t) = \\dfrac{e^{-t} - e^{-\\pi^2 t}}{\\pi^2 - 1}\\sin(\\pi x)$",
                "lesson": "소스항이 시간에 의존해도 고유함수 전개법은 동일하게 적용됩니다. 각 모드의 ODE가 비제차 1계 선형 ODE가 됩니다."
            },
            {
                "title": "[심화] 듀아멜 원리의 적용",
                "problem": "듀아멜 원리를 이용하여 $u_t = u_{xx} + f(x,t)$, $u(0,t) = u(L,t) = 0$, $u(x,0) = 0$의 해를 표현하시오.",
                "steps": [
                    "대응하는 제차 문제의 해를 $G(x,t;\\tau)$라 합니다: $G_t = G_{xx}$, $G(0,t;\\tau) = G(L,t;\\tau) = 0$, $G(x,\\tau;\\tau) = f(x,\\tau)$.",
                    "$G(x,t;\\tau) = \\sum_{n=1}^{\\infty} f_n(\\tau)\\sin\\dfrac{n\\pi x}{L}\\,e^{-(n\\pi/L)^2(t-\\tau)}$.",
                    "듀아멜 원리: $u(x,t) = \\int_0^t G(x,t;\\tau)\\,d\\tau$.",
                    "$= \\int_0^t \\sum_{n=1}^{\\infty} f_n(\\tau)\\sin\\dfrac{n\\pi x}{L}\\,e^{-(n\\pi/L)^2(t-\\tau)}\\,d\\tau$.",
                    "급수와 적분을 교환: $u = \\sum_{n=1}^{\\infty}\\left[\\int_0^t f_n(\\tau)e^{-(n\\pi/L)^2(t-\\tau)}d\\tau\\right]\\sin\\dfrac{n\\pi x}{L}$.",
                    "괄호 안이 바로 $T_n(t)$이며, 고유함수 전개법의 결과와 일치합니다."
                ],
                "answer": "$u(x,t) = \\int_0^t G(x,t;\\tau)\\,d\\tau$ (듀아멜 적분)",
                "lesson": "듀아멜 원리는 '시각 $\\tau$에 순간적으로 주어진 소스의 효과를 $t$까지 적분'합니다. 이는 ODE의 적분인자 해와 구조적으로 같습니다."
            }
        ],
        "problems": [
            {
                "id": "22-1",
                "type": "choice",
                "difficulty": 1,
                "question": "비제차 열방정식 $u_t = u_{xx} + f(x,t)$에서 $f(x,t)$의 물리적 의미는?",
                "choices": [
                    "초기 온도 분포",
                    "경계에서의 열 손실",
                    "외부 열원(열 생성/흡수)",
                    "열전도 계수"
                ],
                "answer": "외부 열원(열 생성/흡수)",
                "hints": [
                    "$f(x,t)$가 없으면 열이 스스로 확산만 합니다.",
                    "$f > 0$이면 그 지점에 열이 공급되고 있다는 뜻."
                ],
                "explanation": "$f(x,t)$는 외부에서 가해지는 열원입니다. $f > 0$이면 열 공급, $f < 0$이면 열 흡수. 초기 온도는 $u(x,0)$, 경계조건은 $u(0,t), u(L,t)$로 별도로 주어집니다.",
                "wrongAnalysis": "$f(x,t)$를 초기조건이나 경계조건과 혼동하는 실수가 있습니다. 소스항은 방정식 자체에 포함된 비제차 부분입니다."
            },
            {
                "id": "22-2",
                "type": "choice",
                "difficulty": 2,
                "question": "$u_t = u_{xx} + f(x,t)$를 고유함수 $\\phi_n(x) = \\sin(n\\pi x/L)$로 전개할 때, 각 모드 $T_n(t)$가 만족하는 ODE는?",
                "choices": [
                    "$T_n'' + n^2\\pi^2/L^2\\, T_n = f_n$",
                    "$T_n' + n^2\\pi^2/L^2\\, T_n = f_n$",
                    "$T_n' - n^2\\pi^2/L^2\\, T_n = f_n$",
                    "$T_n' + n\\pi/L\\, T_n = f_n$"
                ],
                "answer": "$T_n' + n^2\\pi^2/L^2\\, T_n = f_n$",
                "hints": [
                    "$u = \\sum T_n(t)\\phi_n(x)$를 열방정식에 대입하세요.",
                    "$\\phi_n'' = -(n\\pi/L)^2 \\phi_n$을 이용하세요."
                ],
                "explanation": "$\\sum T_n'\\phi_n = \\sum T_n \\phi_n'' + \\sum f_n\\phi_n = \\sum(-n^2\\pi^2/L^2)T_n\\phi_n + \\sum f_n\\phi_n$. 각 $n$에 대해: $T_n'(t) + (n\\pi/L)^2 T_n(t) = f_n(t)$. 이것은 1계 선형 ODE입니다.",
                "wrongAnalysis": "열방정식은 $u_t$(1계 시간 미분)이므로 $T_n$에 대한 ODE도 1계입니다. $T_n''$이 나오는 것은 파동방정식($u_{tt}$)의 경우입니다."
            },
            {
                "id": "22-3",
                "type": "text",
                "difficulty": 3,
                "question": "$u_t = u_{xx} + 6\\sin(2\\pi x)$, $0<x<1$, $u(0,t) = u(1,t) = 0$, $u(x,0) = 0$일 때 $t \\to \\infty$에서의 정상상태 해 $u_s(x)$를 구하시오. (답 형식: A*sin(B*pi*x) 형태의 계수, 예: 3/(2*pi^2)*sin(2*pi*x))",
                "answer": "6/(4*pi^2)*sin(2*pi*x)",
                "hints": [
                    "정상상태에서는 $u_t = 0$이므로 $u_{xx} + 6\\sin(2\\pi x) = 0$.",
                    "$u_s(x) = A\\sin(2\\pi x)$로 놓고 대입하세요.",
                    "$u_s'' = -4\\pi^2 A\\sin(2\\pi x)$."
                ],
                "explanation": "$u_t = 0$일 때: $u_s'' = -6\\sin(2\\pi x)$. $u_s = A\\sin(2\\pi x)$로 놓으면 $-4\\pi^2 A = -6$, $A = \\dfrac{6}{4\\pi^2} = \\dfrac{3}{2\\pi^2}$. 따라서 $u_s(x) = \\dfrac{3}{2\\pi^2}\\sin(2\\pi x)$.",
                "wrongAnalysis": "$\\sin(2\\pi x)$의 2차 도함수에서 $-(2\\pi)^2 = -4\\pi^2$를 잊고 $-2\\pi$ 등으로 계산하는 실수가 흔합니다."
            },
            {
                "id": "22-4",
                "type": "choice",
                "difficulty": 1,
                "question": "비제차 열방정식 $u_t = u_{xx} + f(x,t)$에서 $f(x,t) = 0$이면 이 방정식은?",
                "choices": [
                    "파동방정식",
                    "라플라스 방정식",
                    "제차 열방정식",
                    "비제차 파동방정식"
                ],
                "answer": "제차 열방정식",
                "hints": [
                    "$f(x,t) = 0$이면 소스항이 없어집니다.",
                    "소스항이 없는 열방정식이 됩니다."
                ],
                "explanation": "$f(x,t) = 0$이면 $u_t = u_{xx}$, 즉 외부 열원이 없는 제차(homogeneous) 열방정식입니다.",
                "wrongAnalysis": "$f = 0$이면 라플라스 방정식이라고 착각하는 실수가 있습니다. 라플라스 방정식은 $u_t = 0$인 정상상태입니다."
            },
            {
                "id": "22-5",
                "type": "choice",
                "difficulty": 2,
                "question": "비제차 경계조건 $u(0,t) = T_1$, $u(L,t) = T_2$를 처리하기 위해 정상상태 해 $u_s(x)$를 분리하는 방법에서, $u_s(x)$가 만족하는 조건은?",
                "choices": [
                    "$u_s'' = 0$, $u_s(0) = T_1$, $u_s(L) = T_2$",
                    "$u_s' = 0$, $u_s(0) = 0$",
                    "$u_s'' + u_s = 0$",
                    "$u_s = T_1 + T_2$"
                ],
                "answer": "$u_s'' = 0$, $u_s(0) = T_1$, $u_s(L) = T_2$",
                "hints": [
                    "정상상태에서는 시간 변화가 없으므로 $u_t = 0$입니다.",
                    "$u_t = 0$을 열방정식에 대입하면 $0 = \\alpha u_{xx}$, 즉 $u_s'' = 0$."
                ],
                "explanation": "정상상태($u_t = 0$)에서 열방정식은 $u_s'' = 0$이 됩니다. 경계조건 $u_s(0) = T_1$, $u_s(L) = T_2$와 함께 풀면 $u_s(x) = T_1 + \\dfrac{T_2 - T_1}{L}x$ (선형 보간).",
                "wrongAnalysis": "정상상태에서도 열방정식의 시간미분 항을 남기는 실수가 있습니다. 정상상태의 정의가 $u_t = 0$입니다."
            }
        ],
        "summary": {
            "keyPoints": [
                "비제차 PDE: 소스항 $f(x,t)$가 추가된 PDE",
                "고유함수 전개법: 해와 소스를 같은 고유함수 급수로 전개",
                "각 모드별로 독립적인 ODE가 나옴 ($T_n' + \\lambda_n T_n = f_n$)",
                "비제차 경계조건: 정상상태 해를 분리하여 동차화",
                "듀아멜 원리: 순간 소스의 효과를 시간 적분으로 중첩"
            ],
            "formulas": [
                "u(x,t) = \\sum T_n(t)\\,\\phi_n(x)",
                "T_n'(t) + \\alpha^2\\lambda_n T_n(t) = f_n(t)",
                "T_n(t) = T_n(0)e^{-\\alpha^2\\lambda_n t} + \\int_0^t f_n(\\tau)e^{-\\alpha^2\\lambda_n(t-\\tau)}d\\tau",
                "u = v + w \\quad (\\text{비제차 경계조건 분리})"
            ],
            "commonMistakes": [
                "소스항의 고유함수 전개 계수 $f_n(t)$ 계산에서 적분 실수",
                "열방정식의 $T_n$ ODE를 2계로 잘못 설정 (1계가 맞음)",
                "비제차 경계조건을 그대로 두고 변수분리 시도",
                "정상상태 해의 2차 도함수 계산 오류"
            ],
            "nextConnection": "다음 단원에서는 변수분리법과 고유함수 전개의 이론적 토대인 스튜름-리우빌 문제를 다룹니다. 왜 고유함수가 직교하는지, 왜 임의 함수를 전개할 수 있는지의 수학적 근거를 배웁니다."
        }
    },
    {
        "id": 23,
        "title": "스튜름-리우빌 문제",
        "category": "편미분방정식",
        "level": "심화",
        "question": "변수분리법에서 나타나는 고유값 문제의 일반적 이론은 무엇인가?",
        "concept": {
            "intro": "지금까지 PDE를 변수분리법으로 풀 때마다 $X'' + \\lambda X = 0$, $X(0) = X(L) = 0$ 같은 고유값 문제(eigenvalue problem)가 등장했습니다.\n\n:::definition[스튜름-리우빌 문제]\n스튜름-리우빌(Sturm-Liouville, SL) 이론은 이러한 고유값 문제를 통합적으로 다루는 프레임워크입니다. SL 문제의 표준형은 다음과 같습니다:\n$$\\frac{d}{dx}\\left[p(x)\\frac{dy}{dx}\\right] + [q(x) + \\lambda\\, r(x)]\\,y = 0, \\quad a \\le x \\le b$$\n여기에 적절한 경계조건이 붙습니다. $p(x) > 0$, $r(x) > 0$ (가중함수)이 구간 내에서 성립하는 경우를 정칙(regular) SL 문제라 합니다.\n:::\n\n:::theorem[SL 고유값의 성질]\n정칙 SL 문제의 고유값은 다음과 같은 놀라운 성질을 가집니다. 첫째, 모든 고유값은 실수입니다. 둘째, 고유값은 가산 무한개이며 $\\lambda_1 < \\lambda_2 < \\lambda_3 < \\cdots \\to \\infty$로 정렬됩니다. 셋째, 각 고유값에 대응하는 고유함수는 (상수배를 제외하면) 유일합니다.\n:::\n\n:::theorem[고유함수의 직교성]\n가장 중요한 성질은 고유함수의 직교성(orthogonality)입니다. 서로 다른 고유값에 대응하는 고유함수 $\\phi_m(x)$, $\\phi_n(x)$는 가중함수 $r(x)$에 대해 직교합니다:\n$$\\int_a^b \\phi_m(x)\\,\\phi_n(x)\\,r(x)\\,dx = 0 \\quad (m \\neq n)$$\n이 직교성이 바로 변수분리법에서 푸리에 계수를 결정할 수 있는 근본적 이유입니다. 임의의 함수 $f(x)$를 고유함수로 전개할 때 $c_n = \\dfrac{\\int_a^b f(x)\\phi_n(x)r(x)\\,dx}{\\int_a^b \\phi_n^2(x)r(x)\\,dx}$로 계수를 깔끔하게 구할 수 있는 것입니다.\n:::\n\n:::theorem[완비성]\n완비성(completeness) 정리는 더 나아가, '충분히 잘 행동하는' 함수 $f(x)$는 고유함수의 급수 $f(x) = \\sum_{n=1}^{\\infty} c_n\\,\\phi_n(x)$로 수렴하게 전개할 수 있음을 보장합니다. 이것이 푸리에 급수가 작동하는 이론적 근거입니다.\n:::\n\n대표적인 SL 문제의 예시를 살펴봅시다. 가장 간단한 경우는 $y'' + \\lambda y = 0$, $y(0) = y(L) = 0$으로, 고유값 $\\lambda_n = (n\\pi/L)^2$, 고유함수 $\\phi_n = \\sin(n\\pi x/L)$: 이것이 바로 푸리에 사인 급수의 근거입니다. 주기 경계조건을 쓰면 $\\cos$와 $\\sin$이 모두 등장하고, 이것이 완전 푸리에 급수입니다.\n\n$p(x)$나 $r(x)$가 구간의 끝점에서 0이 되는 경우를 특이(singular) SL 문제라 합니다. 대표적으로 베셀 방정식(원통 좌표에서 등장)과 르장드르 방정식(구면 좌표에서 등장)이 있습니다. 이들도 SL 이론의 틀 안에서 고유값과 직교 고유함수를 갖습니다. 베셀 함수 $J_n(x)$와 르장드르 다항식 $P_n(x)$는 각각 이들의 고유함수입니다.\n\nSL 이론의 핵심 메시지는, 변수분리법에서 왜 고유함수 전개가 가능한지, 왜 계수를 직교성으로 구할 수 있는지에 대한 완전한 이론적 정당화를 제공한다는 것입니다. 이 이론은 양자역학의 관측가능량(Observable)과 힐베르트 공간의 기초이기도 합니다.",
            "intuition": "악기의 현이 진동할 때 나타나는 기본음과 배음(overtone)을 떠올려 보세요. 각 진동 모드가 바로 고유함수이고, 각 모드의 진동수가 고유값입니다. 서로 다른 모드끼리는 '간섭하지 않는다'(직교)는 것은, 기본음의 에너지가 배음으로 저절로 흘러가지 않는다는 의미입니다. 그리고 어떤 복잡한 소리도 이 모드들의 합성으로 표현할 수 있다(완비성)는 것이 푸리에 분석의 핵심입니다.",
            "formula": "\\frac{d}{dx}\\left[p(x)y'\\right] + [q(x) + \\lambda\\,r(x)]y = 0 \\quad (\\text{SL 방정식})\n\\int_a^b \\phi_m(x)\\phi_n(x)\\,r(x)\\,dx = 0 \\quad (m \\neq n,\\; \\text{직교성})\nc_n = \\frac{\\int_a^b f(x)\\phi_n(x)r(x)\\,dx}{\\int_a^b \\phi_n^2(x)r(x)\\,dx} \\quad (\\text{고유함수 전개 계수})\nf(x) = \\sum_{n=1}^{\\infty} c_n\\,\\phi_n(x) \\quad (\\text{완비성})",
            "summary": ":::note[요약]\n* SL 문제: 변수분리에서 나오는 고유값 문제의 일반형\n* 고유값: 실수, 가산, 단조 증가\n* 고유함수: 가중 직교, 완비 (임의 함수 전개 가능)\n* 표준 예: 푸리에($\\sin/\\cos$), 베셀, 르장드르\n* 변수분리법의 이론적 정당화\n:::"
        },
        "examples": [
            {
                "title": "[기본] 가장 기본적인 SL 문제",
                "problem": "$y'' + \\lambda y = 0$, $y(0) = 0$, $y(\\pi) = 0$의 고유값과 고유함수를 구하시오.",
                "steps": [
                    "SL 표준형에서 $p(x) = 1$, $q(x) = 0$, $r(x) = 1$.",
                    "$\\lambda \\le 0$이면 비자명해 없음 (확인: $\\lambda = 0$ $\\Rightarrow$ $y = Ax+B$, BC $\\Rightarrow$ $y=0$).",
                    "$\\lambda > 0$: $y = A\\cos(\\sqrt{\\lambda}\\,x) + B\\sin(\\sqrt{\\lambda}\\,x)$.",
                    "$y(0) = 0$: $A = 0$. 따라서 $y = B\\sin(\\sqrt{\\lambda}\\,x)$.",
                    "$y(\\pi) = 0$: $B\\sin(\\sqrt{\\lambda}\\,\\pi) = 0$. $B \\neq 0$이려면 $\\sqrt{\\lambda}\\,\\pi = n\\pi$.",
                    "$\\lambda_n = n^2$ ($n = 1, 2, 3, \\ldots$), $\\phi_n(x) = \\sin(nx)$.",
                    "직교성 확인: $\\int_0^{\\pi} \\sin(mx)\\sin(nx)\\,dx = 0$ ($m \\neq n$)."
                ],
                "answer": "$\\lambda_n = n^2$, $\\phi_n(x) = \\sin(nx)$ ($n = 1, 2, 3, \\ldots$)",
                "lesson": "이것이 바로 푸리에 사인 급수의 이론적 근거입니다. $\\sin(nx)$가 직교하는 이유는 SL 이론의 일반적 결과의 특수한 경우입니다."
            },
            {
                "title": "[기본] 가중함수가 있는 SL 문제",
                "problem": "$(xy')' + \\dfrac{\\lambda}{x}\\,y = 0$, $1 \\le x \\le e^{\\pi}$, $y(1) = y(e^{\\pi}) = 0$ 의 고유값과 고유함수를 구하시오.",
                "steps": [
                    "SL 표준형: $p(x) = x$, $q(x) = 0$, $r(x) = 1/x$.",
                    "방정식 전개: $xy'' + y' + (\\lambda/x)y = 0$ $\\Rightarrow$ $x^2 y'' + xy' + \\lambda y = 0$ (오일러-코시 방정식).",
                    "$x = e^s$로 치환 ($s = \\ln x$): $\\dfrac{d^2y}{ds^2} + \\lambda y = 0$.",
                    "$s$ 범위: $x=1$일 때 $s=0$, $x=e^{\\pi}$일 때 $s=\\pi$.",
                    "$y(s=0) = 0$, $y(s=\\pi) = 0$: 이전 예제와 동일!",
                    "$\\lambda_n = n^2$, $y_n = \\sin(ns) = \\sin(n\\ln x)$.",
                    "직교성: $\\int_1^{e^{\\pi}} \\sin(m\\ln x)\\sin(n\\ln x)\\cdot\\dfrac{1}{x}\\,dx = 0$ ($m \\neq n$)."
                ],
                "answer": "$\\lambda_n = n^2$, $\\phi_n(x) = \\sin(n\\ln x)$ ($n = 1, 2, 3, \\ldots$)",
                "lesson": "가중함수 $r(x) = 1/x$가 직교 적분에 포함됩니다. 오일러-코시 방정식도 적절한 치환으로 SL 이론의 틀에 맞출 수 있습니다."
            },
            {
                "title": "[응용] 노이만 경계조건의 SL 문제",
                "problem": "$y'' + \\lambda y = 0$, $y'(0) = 0$, $y'(L) = 0$의 고유값과 고유함수를 구하시오.",
                "steps": [
                    "$\\lambda = 0$: $y = Ax + B$, $y' = A$. $y'(0) = A = 0$이므로 $y = B$ (상수). 비자명해 ✓.",
                    "$\\lambda_0 = 0$, $\\phi_0(x) = 1$.",
                    "$\\lambda > 0$: $y = A\\cos(\\sqrt{\\lambda}\\,x) + B\\sin(\\sqrt{\\lambda}\\,x)$.",
                    "$y'(0) = B\\sqrt{\\lambda} = 0$이므로 $B = 0$.",
                    "$y'(L) = -A\\sqrt{\\lambda}\\sin(\\sqrt{\\lambda}\\,L) = 0$. $A \\neq 0$이면 $\\sqrt{\\lambda}L = n\\pi$.",
                    "$\\lambda_n = (n\\pi/L)^2$, $\\phi_n(x) = \\cos(n\\pi x/L)$ ($n = 0, 1, 2, \\ldots$)."
                ],
                "answer": "$\\lambda_n = (n\\pi/L)^2$, $\\phi_n = \\cos(n\\pi x/L)$ ($n = 0, 1, 2, \\ldots$)",
                "lesson": "노이만 조건에서는 $n = 0$(상수 함수)이 고유함수에 포함됩니다. 이것이 푸리에 코사인 급수에서 상수항 $a_0/2$가 존재하는 이유입니다."
            },
            {
                "title": "[응용] 고유함수 전개 계수 계산",
                "problem": "$f(x) = x$를 $[0, \\pi]$에서 고유함수 $\\sin(nx)$로 전개할 때 계수 $c_n$을 구하시오.",
                "steps": [
                    "SL 이론에 의한 전개: $f(x) = \\sum_{n=1}^{\\infty} c_n \\sin(nx)$.",
                    "$c_n = \\dfrac{\\int_0^{\\pi} x\\sin(nx)\\,dx}{\\int_0^{\\pi}\\sin^2(nx)\\,dx} = \\dfrac{\\int_0^{\\pi} x\\sin(nx)\\,dx}{\\pi/2}$.",
                    "분자: $\\int_0^{\\pi}x\\sin(nx)\\,dx = \\left[-\\dfrac{x\\cos(nx)}{n}\\right]_0^{\\pi} + \\dfrac{1}{n}\\int_0^{\\pi}\\cos(nx)\\,dx$.",
                    "$= -\\dfrac{\\pi\\cos(n\\pi)}{n} + 0 = \\dfrac{\\pi(-1)^{n+1}}{n}$.",
                    "$c_n = \\dfrac{2}{\\pi} \\cdot \\dfrac{\\pi(-1)^{n+1}}{n} = \\dfrac{2(-1)^{n+1}}{n}$."
                ],
                "answer": "$c_n = \\dfrac{2(-1)^{n+1}}{n}$",
                "lesson": "고유함수의 직교성 덕분에 계수를 내적(적분)으로 깔끔하게 구할 수 있습니다. 이것이 SL 이론의 가장 실용적인 결과입니다."
            },
            {
                "title": "[심화] 직교성의 증명",
                "problem": "SL 문제의 서로 다른 고유값 $\\lambda_m \\neq \\lambda_n$에 대응하는 고유함수 $\\phi_m, \\phi_n$이 가중함수 $r(x)$에 대해 직교함을 증명하시오.",
                "steps": [
                    "$\\phi_m$은 $[p\\phi_m']' + [q + \\lambda_m r]\\phi_m = 0$을 만족.",
                    "$\\phi_n$은 $[p\\phi_n']' + [q + \\lambda_n r]\\phi_n = 0$을 만족.",
                    "첫 식에 $\\phi_n$을, 둘째에 $\\phi_m$을 곱하고 빼면:",
                    "$(\\lambda_m - \\lambda_n)r\\,\\phi_m\\phi_n = \\phi_n[p\\phi_m']' - \\phi_m[p\\phi_n']' = [p(\\phi_m'\\phi_n - \\phi_n'\\phi_m)]'$.",
                    "$a$에서 $b$까지 적분: $(\\lambda_m - \\lambda_n)\\int_a^b r\\,\\phi_m\\phi_n\\,dx = [p(\\phi_m'\\phi_n - \\phi_n'\\phi_m)]_a^b$.",
                    "경계조건에 의해 우변 $= 0$. $\\lambda_m \\neq \\lambda_n$이므로 $\\int_a^b r\\,\\phi_m\\phi_n\\,dx = 0$."
                ],
                "answer": "$\\int_a^b r(x)\\,\\phi_m(x)\\,\\phi_n(x)\\,dx = 0$ ($m \\neq n$)",
                "lesson": "이 증명은 '자기수반(self-adjoint) 연산자의 고유함수는 직교한다'는 일반적 결과의 특수한 경우입니다. 라그랑주 항등식이 핵심 도구입니다."
            }
        ],
        "problems": [
            {
                "id": "23-1",
                "type": "choice",
                "difficulty": 1,
                "question": "스튜름-리우빌 문제의 고유값에 대한 설명 중 올바른 것은?",
                "choices": [
                    "고유값은 복소수일 수 있다.",
                    "고유값은 유한 개만 존재한다.",
                    "고유값은 모두 실수이며 $\\lambda_1 < \\lambda_2 < \\cdots \\to \\infty$로 정렬된다.",
                    "고유값은 항상 양수이다."
                ],
                "answer": "고유값은 모두 실수이며 $\\lambda_1 < \\lambda_2 < \\cdots \\to \\infty$로 정렬된다.",
                "hints": [
                    "SL 이론의 핵심 결과 중 하나입니다.",
                    "고유값의 개수와 정렬 방식을 생각해 보세요."
                ],
                "explanation": "정칙 SL 문제의 고유값은 (1) 모두 실수, (2) 가산 무한개, (3) $\\lambda_1 < \\lambda_2 < \\cdots$로 단조 증가하며 $\\infty$로 발산합니다. $q(x)$의 부호에 따라 음의 고유값도 가능합니다.",
                "wrongAnalysis": "고유값이 '항상 양수'라고 기억하는 실수가 있지만, 이는 $q(x) = 0$인 특수한 경우에만 성립합니다. 또한 유한 개가 아니라 가산 무한 개입니다."
            },
            {
                "id": "23-2",
                "type": "choice",
                "difficulty": 2,
                "question": "SL 문제 $y'' + \\lambda y = 0$, $y(0) = 0$, $y(L) = 0$의 고유함수에 대해, $\\int_0^L \\sin\\left(\\dfrac{m\\pi x}{L}\\right)\\sin\\left(\\dfrac{n\\pi x}{L}\\right)dx$의 값은? ($m \\neq n$)",
                "choices": [
                    "$L$",
                    "$L/2$",
                    "$0$",
                    "$1$"
                ],
                "answer": "$0$",
                "hints": [
                    "서로 다른 고유값에 대응하는 고유함수는 어떤 관계?",
                    "SL 이론에서 가장 중요한 성질."
                ],
                "explanation": "SL 이론에 의해 서로 다른 고유값에 대응하는 고유함수는 직교합니다. 이 경우 가중함수 $r(x) = 1$이므로 $\\int_0^L \\sin(m\\pi x/L)\\sin(n\\pi x/L)\\,dx = 0$ ($m \\neq n$). 참고로 $m = n$이면 값은 $L/2$.",
                "wrongAnalysis": "$m = n$인 경우($L/2$)와 $m \\neq n$인 경우($0$)를 혼동하는 실수. 직교성은 서로 다른 모드 사이의 관계임을 기억하세요."
            },
            {
                "id": "23-3",
                "type": "text",
                "difficulty": 3,
                "question": "$y'' + \\lambda y = 0$, $y'(0) = 0$, $y'(L) = 0$ (노이만 경계조건)의 고유값 $\\lambda_n$과 고유함수 $\\phi_n(x)$를 구하시오. ($n = 0, 1, 2, \\ldots$) (답 형식: lambda_n = ..., phi_n = ...)",
                "answer": "lambda_n = (n*pi/L)^2, phi_n = cos(n*pi*x/L)",
                "hints": [
                    "$y' = 0$ 조건은 양 끝에서 기울기가 0이라는 뜻.",
                    "$\\lambda = 0$일 때 $y = \\text{const}$는 조건을 만족합니다 ($n=0$ 모드).",
                    "$\\lambda > 0$일 때 미분하면 어떤 삼각함수의 도함수가 0이 되는지 생각하세요."
                ],
                "explanation": "$\\lambda > 0$: $y = A\\cos(\\sqrt{\\lambda}x) + B\\sin(\\sqrt{\\lambda}x)$. $y'(0) = 0$: $B = 0$. $y'(L) = -A\\sqrt{\\lambda}\\sin(\\sqrt{\\lambda}L) = 0$: $\\sqrt{\\lambda}L = n\\pi$. 따라서 $\\lambda_n = (n\\pi/L)^2$, $\\phi_n = \\cos(n\\pi x/L)$. $n=0$일 때 $\\lambda_0 = 0$, $\\phi_0 = 1$ (상수함수)도 고유함수. 이것이 푸리에 코사인 급수의 근거.",
                "wrongAnalysis": "노이만 조건에서 $n=0$ ($\\lambda_0 = 0$, $\\phi_0 = 1$)을 빠뜨리는 실수가 매우 흔합니다. 디리클레($\\sin$)와 노이만($\\cos$) 조건의 고유함수를 혼동하지 마세요."
            },
            {
                "id": "23-4",
                "type": "choice",
                "difficulty": 1,
                "question": "스튜름-리우빌 문제에서 서로 다른 고유값에 대응하는 고유함수 $\\phi_m$과 $\\phi_n$ ($m \\neq n$)의 관계는?",
                "choices": [
                    "서로 같다",
                    "서로 직교한다",
                    "하나가 다른 하나의 도함수이다",
                    "서로의 역수이다"
                ],
                "answer": "서로 직교한다",
                "hints": [
                    "SL 이론의 가장 중요한 성질을 떠올려 보세요.",
                    "직교성: $\\int_a^b \\phi_m \\phi_n\\,r(x)\\,dx = 0$ ($m \\neq n$)."
                ],
                "explanation": "SL 이론에 의해 서로 다른 고유값에 대응하는 고유함수는 가중함수 $r(x)$에 대해 직교합니다. 이 직교성이 푸리에 계수를 결정할 수 있는 근거입니다.",
                "wrongAnalysis": "직교성을 '수직'이라는 기하학적 의미로만 생각하고, 함수의 내적(적분)이 0이라는 의미를 이해하지 못하는 경우가 있습니다."
            },
            {
                "id": "23-5",
                "type": "choice",
                "difficulty": 2,
                "question": "SL 문제 $y'' + \\lambda y = 0$, $y(0) = 0$, $y(\\pi) = 0$에서 첫 번째(가장 작은) 고유값 $\\lambda_1$은?",
                "choices": [
                    "$\\lambda_1 = 0$",
                    "$\\lambda_1 = 1$",
                    "$\\lambda_1 = \\pi$",
                    "$\\lambda_1 = \\pi^2$"
                ],
                "answer": "$\\lambda_1 = 1$",
                "hints": [
                    "$\\lambda_n = (n\\pi/L)^2$이고 $L = \\pi$입니다.",
                    "$n = 1$을 대입하세요."
                ],
                "explanation": "$\\lambda_n = (n\\pi/\\pi)^2 = n^2$이므로 $\\lambda_1 = 1^2 = 1$. 대응하는 고유함수는 $\\phi_1(x) = \\sin(x)$.",
                "wrongAnalysis": "$\\lambda_1 = 0$으로 답하는 실수가 있지만, 디리클레 경계조건에서 $\\lambda = 0$이면 $y = 0$뿐(자명해)이므로 고유값이 아닙니다."
            }
        ],
        "summary": {
            "keyPoints": [
                "SL 문제는 변수분리법에서 나타나는 고유값 문제의 일반적 형태",
                "고유값: 실수, 가산, 단조 증가 $\\lambda_1 < \\lambda_2 < \\cdots$",
                "고유함수: 가중함수 $r(x)$에 대해 직교",
                "완비성: 임의의 함수를 고유함수 급수로 전개 가능",
                "푸리에 급수, 베셀 급수, 르장드르 급수 모두 SL 이론의 특수한 경우",
                "양자역학의 관측가능량과 힐베르트 공간의 수학적 기초"
            ],
            "formulas": [
                "[p(x)y']' + [q(x) + \\lambda\\,r(x)]y = 0",
                "\\int_a^b \\phi_m(x)\\phi_n(x)\\,r(x)\\,dx = 0 \\quad (m \\neq n)",
                "c_n = \\frac{\\int_a^b f(x)\\phi_n(x)r(x)\\,dx}{\\int_a^b \\phi_n^2(x)r(x)\\,dx}",
                "\\text{디리클레:}\\ \\lambda_n = (n\\pi/L)^2,\\ \\phi_n = \\sin(n\\pi x/L)",
                "\\text{노이만:}\\ \\lambda_n = (n\\pi/L)^2,\\ \\phi_n = \\cos(n\\pi x/L)"
            ],
            "commonMistakes": [
                "직교 적분에서 가중함수 $r(x)$를 빠뜨림",
                "노이만 경계조건에서 $\\lambda_0 = 0$, $\\phi_0 = 1$ 모드 누락",
                "디리클레($\\sin$)와 노이만($\\cos$) 고유함수 혼동",
                "특이 SL 문제(베셀, 르장드르)를 정칙 SL과 동일하게 취급"
            ],
            "nextConnection": "편미분방정식의 기초 과정을 마쳤습니다. 변수분리법, 푸리에 급수, 열/파동/라플라스 방정식, 비제차 문제, 그리고 그 이론적 기초인 스튜름-리우빌 이론까지 배웠습니다. 다음 단계로는 수치해석(유한차분법, 유한요소법으로 PDE를 컴퓨터로 풀기), 응용 PDE(유체역학의 나비에-스토크스 방정식, 양자역학의 슈뢰딩거 방정식), 그리고 함수해석학(힐베르트 공간, 약해 이론)이 기다리고 있습니다."
        }
    }
];
