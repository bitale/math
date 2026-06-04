"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.analyticityLessons = void 0;
exports.analyticityLessons = [
    {
        "id": 4,
        "title": "복소미분과 해석함수",
        "category": "해석함수",
        "level": "중급",
        "question": "복소함수의 미분은 실수 함수의 미분과 어떻게 다르며, '해석적(analytic)'이라는 것은 무엇을 뜻하는가?",
        "concept": {
            "intro": ":::definition[복소미분]\n실함수의 미분은 $f'(x_0) = \\lim_{h \\to 0} \\frac{f(x_0+h)-f(x_0)}{h}$로 정의됩니다. 복소미분은 형식적으로 동일합니다:\n$$f'(z_0) = \\lim_{h \\to 0} \\frac{f(z_0 + h) - f(z_0)}{h}$$\n그러나 결정적 차이가 있습니다: $h$는 복소수이므로 **모든 방향**에서 $0$에 접근할 수 있습니다. 이 극한이 존재하려면 **어떤 경로로 접근하든 같은 값**을 가져야 합니다.\n:::\n\n이 조건은 극도로 강력합니다. 실수에서 '미분가능'은 비교적 쉽게 달성되지만, 복소수에서 미분가능하려면 함수가 매우 '규칙적'이어야 합니다.\n\n:::definition[해석함수 (정칙함수)]\n한 점 $z_0$에서 복소미분이 존재하면 그 점에서 **복소미분가능(complex differentiable)**이라 하고, 영역 $D$ 위의 모든 점에서 복소미분가능하면 **정칙(holomorphic)** 또는 **해석적(analytic)**이라 합니다.\n:::\n\n:::note[해석함수의 놀라운 성질]\n해석함수는 놀라운 성질들을 가집니다. 한 번 미분가능하면 무한 번 미분가능하고, 테일러 급수로 전개 가능하며, 경로에 무관한 적분 성질을 갖습니다. 이런 풍부한 결과들이 복소해석학을 아름답고 강력하게 만드는 원천입니다. 반면 $f(z) = \\bar{z}$ (켤레함수)처럼 아무리 '매끄러워' 보여도 복소미분이 존재하지 않는 함수도 있습니다.\n:::",
            "intuition": "실수 미분에서 좌극한과 우극한이 같아야 하듯이, 복소미분에서는 모든 방향의 극한이 같아야 합니다. 실수에서는 2개 방향만 확인하면 되지만 복소수에서는 무한히 많은 방향이 있으므로, 이 조건을 만족하는 것이 훨씬 어렵습니다.\n\n비유하자면, 산꼭대기에서 기울기를 잴 때 실수 함수는 '동서 방향'만 재면 되지만, 복소함수는 '모든 나침반 방향'에서 잰 기울기가 하나의 규칙으로 완벽히 정해져야 합니다.",
            "formula": "f'(z_0) = \\lim_{h \\to 0} \\frac{f(z_0+h) - f(z_0)}{h}\\quad (h \\in \\mathbb{C})\n\\text{정칙(holomorphic):}\\ f'(z)\\text{가 영역 }D\\text{의 모든 점에서 존재}\n(z^n)' = nz^{n-1},\\quad (e^z)' = e^z,\\quad (\\sin z)' = \\cos z\n\\bar{z}\\text{는 어디서도 복소미분 불가능}",
            "summary": ":::note[핵심 정리]\n• 복소미분: 실수 미분과 같은 형태이나, $h$가 모든 방향에서 접근\n• 해석함수(정칙함수): 영역 위 모든 점에서 복소미분 가능\n• 한 번 미분가능 → 무한 번 미분가능 (실수에서는 성립하지 않음)\n• $\\bar{z}$는 매끄럽지만 복소미분 불가능\n:::"
        },
        "examples": [
            {
                "title": "$f(z) = \\bar{z}$의 복소미분 불가능성",
                "problem": "$f(z) = \\bar{z}$가 어떤 점에서도 복소미분가능하지 않음을 보이시오.",
                "steps": [
                    "$\\frac{f(z_0+h)-f(z_0)}{h} = \\frac{\\overline{z_0+h}-\\bar{z_0}}{h} = \\frac{\\bar{h}}{h}$.",
                    "$h = t$ (실수, $t \\to 0$)로 접근: $\\frac{\\bar{t}}{t} = \\frac{t}{t} = 1$.",
                    "$h = it$ (허수, $t \\to 0$)로 접근: $\\frac{\\overline{it}}{it} = \\frac{-it}{it} = -1$.",
                    "두 방향에서 극한값이 $1 \\neq -1$이므로 극한이 존재하지 않는다.",
                    "따라서 $f(z) = \\bar{z}$는 어떤 점에서도 복소미분 불가능하다."
                ],
                "answer": "실수축 방향 극한 $= 1$, 허수축 방향 극한 $= -1$이므로 미분 불가능",
                "lesson": "$\\bar{z}$는 $\\mathbb{R}^2 \\to \\mathbb{R}^2$ 함수로 보면 완벽히 매끄럽지만(사실 선형사상), 복소미분의 관점에서는 전혀 미분가능하지 않습니다. '실수적 매끄러움'과 '복소적 미분가능성'은 본질적으로 다른 개념입니다."
            },
            {
                "title": "[기본] 다항함수의 복소미분",
                "problem": "$f(z) = z^4 + 2z^2 - z + 3$의 도함수 $f'(z)$를 구하시오.",
                "steps": [
                    "다항함수의 미분은 실수에서와 동일한 규칙을 따른다.",
                    "$(z^4)' = 4z^3$, $(2z^2)' = 4z$, $(-z)' = -1$, $(3)' = 0$.",
                    "따라서 $f'(z) = 4z^3 + 4z - 1$."
                ],
                "answer": "$f'(z) = 4z^3 + 4z - 1$",
                "lesson": "다항함수는 전체 $\\mathbb{C}$에서 해석적이며, 미분 규칙은 실수에서와 완전히 동일합니다. 이것은 가장 친숙한 해석함수 클래스입니다."
            },
            {
                "title": "[응용] $f(z) = |z|^2$의 복소미분가능성 분석",
                "problem": "$f(z) = |z|^2 = x^2 + y^2$가 복소미분가능한 점을 모두 구하시오.",
                "steps": [
                    "$f(z) = x^2 + y^2$이므로 $u = x^2 + y^2$, $v = 0$.",
                    "$u_x = 2x$, $u_y = 2y$, $v_x = 0$, $v_y = 0$.",
                    "CR 방정식: $u_x = v_y \\Rightarrow 2x = 0 \\Rightarrow x = 0$.",
                    "CR 방정식: $u_y = -v_x \\Rightarrow 2y = 0 \\Rightarrow y = 0$.",
                    "두 조건이 동시에 성립하는 점은 $z = 0$뿐. 편미분이 연속이므로 $z = 0$에서 복소미분가능.",
                    "한 점에서만 미분가능하므로 어떤 영역에서도 해석적이지 않다."
                ],
                "answer": "$z = 0$에서만 복소미분가능, 어디서도 해석적이지 않음",
                "lesson": "한 점에서 복소미분가능해도 '해석적'이 되려면 영역 전체에서 미분가능해야 합니다. $|z|^2$은 이 차이를 보여주는 중요한 반례입니다."
            },
            {
                "title": "[응용] 합성함수의 복소미분",
                "problem": "$f(z) = e^{z^2}$의 도함수를 구하고, $f$가 전함수임을 설명하시오.",
                "steps": [
                    "연쇄법칙(chain rule)은 복소미분에서도 성립한다.",
                    "$f(z) = e^{g(z)}$에서 $g(z) = z^2$이면 $f'(z) = e^{g(z)} \\cdot g'(z)$.",
                    "$g'(z) = 2z$이므로 $f'(z) = 2z e^{z^2}$.",
                    "$z^2$은 전함수이고, $e^w$도 전함수이므로 합성 $e^{z^2}$도 전함수이다.",
                    "따라서 $f'(z) = 2ze^{z^2}$은 모든 $z \\in \\mathbb{C}$에서 존재한다."
                ],
                "answer": "$f'(z) = 2ze^{z^2}$, $f$는 전함수",
                "lesson": "복소 미적분학에서 곱의 법칙, 몫의 법칙, 연쇄법칙이 모두 실수에서와 동일하게 성립합니다. 전함수의 합성은 다시 전함수입니다."
            },
            {
                "title": "[심화] 해석함수의 무한번 미분가능성",
                "problem": "복소함수가 한 번 복소미분가능하면 무한 번 미분가능함을 $f(z) = e^z$로 예시하고, 실수 함수 $g(x) = x|x|$와 비교하시오.",
                "steps": [
                    "$f(z) = e^z$: $f'(z) = e^z$, $f''(z) = e^z$, ..., $f^{(n)}(z) = e^z$. 무한 번 미분가능.",
                    "이것은 복소해석학의 일반적 정리: $f$가 영역에서 한 번 복소미분가능하면, 그 도함수 $f'$도 해석적이므로 무한 번 미분가능.",
                    "반면 실수 함수 $g(x) = x|x|$는 $g'(x) = 2|x|$로 1번 미분가능.",
                    "$g'(x) = 2|x|$는 $x = 0$에서 미분불가능 — 2번 미분가능하지 않다.",
                    "실수에서는 '1번 미분가능 ↛ 2번 미분가능'이지만, 복소에서는 '1번 ⇒ 무한 번'."
                ],
                "answer": "복소에서 $f'$ 존재 $\\Rightarrow$ $f^{(n)}$ 존재 ($\\forall n$), 실수에서는 성립 안 함",
                "lesson": "복소미분가능성이 실수미분가능성보다 훨씬 강한 이유는, '모든 방향에서의 미분가능성'이라는 조건 자체가 함수를 극도로 규칙적으로 만들기 때문입니다. 이것이 복소해석학의 핵심적인 경직성(rigidity)입니다."
            }
        ],
        "problems": [
            {
                "id": "4-1",
                "type": "choice",
                "difficulty": 1,
                "question": "복소미분 $f'(z_0) = \\lim_{h \\to 0} \\frac{f(z_0+h)-f(z_0)}{h}$에서 $h$는?",
                "choices": [
                    "양의 실수만 가능",
                    "실수만 가능 (양, 음 모두)",
                    "순허수만 가능",
                    "모든 복소수 방향에서 접근 가능"
                ],
                "answer": "모든 복소수 방향에서 접근 가능",
                "hints": [
                    "$h \\in \\mathbb{C}$이므로 평면 위 모든 방향이 가능합니다.",
                    "이것이 실수 미분과 복소미분의 핵심 차이입니다.",
                    "극한이 존재하려면 모든 방향에서 같은 값이어야 합니다."
                ],
                "explanation": "$h$는 복소수이므로 실수축, 허수축, 대각선, 나선 등 모든 방향에서 $0$에 접근할 수 있습니다. 극한이 존재하려면 이 모든 경로에서 같은 값을 가져야 합니다.",
                "wrongAnalysis": "실수 미분에서의 습관으로 '$h$는 실수'라고 생각하는 실수가 흔합니다. 복소미분에서 $h \\in \\mathbb{C}$라는 점이 핵심입니다."
            },
            {
                "id": "4-2",
                "type": "text",
                "difficulty": 2,
                "question": "$f(z) = z^3$의 도함수 $f'(z)$는? (예: 3z^2)",
                "answer": "3z^2",
                "hints": [
                    "실수에서의 미분 공식 $(x^n)' = nx^{n-1}$이 복소수에서도 동일하게 성립합니다.",
                    "$n = 3$을 대입하세요.",
                    "다항함수는 전체 복소평면에서 해석적입니다."
                ],
                "explanation": "$f'(z) = 3z^2$. 다항함수의 미분 공식은 실수에서와 동일합니다: $(z^n)' = nz^{n-1}$. 다항함수는 모든 점에서 복소미분 가능하므로 전함수(entire function)입니다.",
                "wrongAnalysis": "복소미분이 특별한 공식을 사용한다고 생각하는 실수가 있습니다. 다항함수에 대해서는 실수와 동일한 미분 규칙이 적용됩니다."
            },
            {
                "id": "4-4",
                "type": "choice",
                "difficulty": 1,
                "question": "다음 중 복소미분가능의 정의에서 올바른 설명은?",
                "choices": [
                    "$h$가 실수일 때만 극한이 존재하면 된다",
                    "$h$가 모든 복소수 방향에서 접근해도 같은 극한이어야 한다",
                    "$f(z)$가 연속이면 자동으로 복소미분가능하다",
                    "실수부만 미분가능하면 된다"
                ],
                "answer": "$h$가 모든 복소수 방향에서 접근해도 같은 극한이어야 한다",
                "hints": [
                    "복소미분에서 $h \\in \\mathbb{C}$이므로 무한히 많은 방향이 가능합니다.",
                    "모든 방향에서 극한이 일치해야 합니다."
                ],
                "explanation": "복소미분 $f'(z_0) = \\lim_{h \\to 0} \\frac{f(z_0+h)-f(z_0)}{h}$에서 $h$는 복소수이므로, 실수축·허수축·대각선 등 모든 방향에서 같은 극한값을 가져야 합니다. 이것이 실수 미분보다 훨씬 강한 조건입니다.",
                "wrongAnalysis": "연속성과 미분가능성을 혼동하는 실수가 흔합니다. $f(z) = |z|^2$은 모든 곳에서 연속이지만 $z=0$에서만 복소미분가능합니다."
            },
            {
                "id": "4-5",
                "type": "text",
                "difficulty": 2,
                "question": "$f(z) = e^z$의 도함수 $f'(z)$는? (예: e^z)",
                "answer": "e^z",
                "hints": [
                    "실수에서 $(e^x)' = e^x$인 것처럼, 복소수에서도 같은 공식이 성립합니다.",
                    "$e^z$는 전함수(entire function)이므로 모든 점에서 해석적입니다."
                ],
                "explanation": "복소 지수함수의 도함수는 실수에서와 동일하게 $(e^z)' = e^z$입니다. $e^z = e^x(\\cos y + i\\sin y)$에서 CR 방정식을 확인하면 실제로 성립합니다. $e^z$는 전체 복소평면에서 해석적인 전함수입니다.",
                "wrongAnalysis": "복소 지수함수의 미분이 실수와 다를 것이라 생각하는 실수가 있습니다. 기본 초등함수의 미분 공식은 복소수에서도 동일합니다."
            },
            {
                "id": "4-3",
                "type": "choice",
                "difficulty": 3,
                "question": "다음 중 전체 복소평면에서 해석적인 함수(전함수)가 아닌 것은?",
                "choices": [
                    "$e^z$",
                    "$z^2 + 3z + 1$",
                    "$1/z$",
                    "$\\sin z$"
                ],
                "answer": "$1/z$",
                "hints": [
                    "전함수는 $\\mathbb{C}$ 전체에서 해석적인 함수입니다.",
                    "$1/z$는 어디에서 정의되지 않나요?",
                    "$z = 0$에서 $1/z$는 정의되지 않으므로 $\\mathbb{C}$ 전체에서 해석적이지 않습니다."
                ],
                "explanation": "$1/z$는 $z = 0$에서 정의되지 않으므로 전함수가 아닙니다. $z \\neq 0$인 영역에서는 해석적이지만, 전체 $\\mathbb{C}$에서는 아닙니다. 반면 $e^z$, 다항함수, $\\sin z$는 모든 복소수에서 해석적인 전함수입니다.",
                "wrongAnalysis": "$\\sin z$가 전함수가 아니라고 생각하는 경우가 있습니다. 실수에서는 유계였지만, 복소수에서 $\\sin z$는 유계가 아니면서도 전체 $\\mathbb{C}$에서 해석적입니다."
            }
        ],
        "summary": {
            "keyPoints": [
                "복소미분은 $h$가 모든 방향에서 접근해도 같은 극한을 가져야 한다.",
                "해석함수(정칙함수)는 영역 위에서 복소미분가능한 함수이다.",
                "복소미분가능성은 실수적 매끄러움보다 훨씬 강한 조건이다."
            ],
            "formulas": [
                "f'(z_0) = \\lim_{h \\to 0} \\frac{f(z_0+h)-f(z_0)}{h},\\quad h \\in \\mathbb{C}",
                "(z^n)' = nz^{n-1},\\quad (e^z)' = e^z"
            ],
            "commonMistakes": [
                "실수 미분과 복소미분의 차이를 간과하는 실수",
                "$\\bar{z}$가 '매끄러우니 미분가능하다'고 판단하는 실수",
                "'미분가능'과 '해석적'을 혼동하는 실수 (해석적은 영역 전체에서 미분가능)"
            ],
            "nextConnection": "복소미분가능의 조건이 강력하다는 것을 보았습니다. 다음 레슨에서는 이 조건을 실수부·허수부의 편미분으로 번역한 코시-리만 방정식을 배웁니다. 이것이 해석함수를 판별하는 실용적 도구가 됩니다."
        }
    },
    {
        "id": 5,
        "title": "코시-리만 방정식",
        "category": "해석함수",
        "level": "중급",
        "question": "복소함수가 해석적인지를 실수부와 허수부의 편미분으로 어떻게 판정하는가?",
        "concept": {
            "intro": "이전 레슨에서 복소미분이 '모든 방향에서 같은 극한'을 요구한다는 것을 배웠습니다. 이 조건을 구체적으로 풀어내면 **코시-리만(Cauchy-Riemann) 방정식**이 나옵니다.\n\n$f(z) = u(x,y) + iv(x,y)$가 $z_0 = x_0 + iy_0$에서 복소미분가능하다고 합시다. 극한을 두 특수한 방향에서 계산해 봅니다.\n• **실수축 방향** ($h = t \\in \\mathbb{R}$): $f'(z_0) = \\frac{\\partial u}{\\partial x} + i\\frac{\\partial v}{\\partial x}$\n• **허수축 방향** ($h = it$): $f'(z_0) = \\frac{\\partial v}{\\partial y} - i\\frac{\\partial u}{\\partial y}$\n\n:::theorem[코시-리만 방정식]\n두 결과가 같아야 하므로 실수부·허수부를 비교하면:\n$$\\frac{\\partial u}{\\partial x} = \\frac{\\partial v}{\\partial y},\\qquad \\frac{\\partial u}{\\partial y} = -\\frac{\\partial v}{\\partial x}$$\n이것이 코시-리만 방정식입니다. 편미분이 연속이면, CR 방정식 성립은 해석성의 **필요충분조건**이 됩니다.\n:::\n\n:::definition[조화함수]\nCR 방정식의 중요한 귀결이 **조화함수(harmonic function)**입니다. CR 방정식에서 $u$에 대해 라플라시안을 계산하면 $\\Delta u = \\frac{\\partial^2 u}{\\partial x^2} + \\frac{\\partial^2 u}{\\partial y^2} = 0$이 성립합니다. 마찬가지로 $\\Delta v = 0$. 즉 해석함수의 실수부와 허수부는 모두 **조화방정식(라플라스 방정식)**을 만족합니다. 이 성질이 유체역학, 전자기학, 열전도 등 물리 응용의 토대입니다.\n:::",
            "intuition": "CR 방정식은 '복소미분이 방향에 무관하다'는 조건의 편미분 번역입니다. 두 방향(실수·허수)에서 같은 값을 얻는다는 것만으로 모든 방향의 일치가 보장되는 이유는, 임의의 방향이 실수축과 허수축의 선형결합으로 표현되기 때문입니다.\n\n$\\Delta u = 0$(조화)이라는 결론은, 해석함수의 실수부가 '극값을 내부에서 갖지 않는다'는 뜻입니다. 온도 분포에 비유하면, 열원이 없는 영역 내부에서 온도의 최대·최소는 반드시 경계에서 달성됩니다.",
            "formula": "\\frac{\\partial u}{\\partial x} = \\frac{\\partial v}{\\partial y},\\qquad \\frac{\\partial u}{\\partial y} = -\\frac{\\partial v}{\\partial x}\\quad \\text{(코시-리만 방정식)}\nf'(z) = \\frac{\\partial u}{\\partial x} + i\\frac{\\partial v}{\\partial x} = \\frac{\\partial v}{\\partial y} - i\\frac{\\partial u}{\\partial y}\n\\Delta u = \\frac{\\partial^2 u}{\\partial x^2} + \\frac{\\partial^2 u}{\\partial y^2} = 0\\quad (u\\text{는 조화함수})\n\\Delta v = 0\\quad (v\\text{도 조화함수})",
            "summary": ":::note[핵심 정리]\n• CR 방정식: $u_x = v_y$, $u_y = -v_x$ — 해석성의 필요충분조건 (편미분 연속 시)\n• 두 방향(실수, 허수)에서의 극한 일치에서 유도\n• 해석함수의 실수부·허수부는 조화함수 ($\\Delta u = 0$, $\\Delta v = 0$)\n:::",
            "visuals": [{
                    "type": "function",
                    "title": "해석함수 f(z) = z² 의 실수부 u = x²−y²",
                    "xRange": [-3, 3],
                    "yRange": [-5, 5],
                    "functions": [
                        { "expr": "x^2 - 1", "color": "#6366f1", "label": "u(x,1) = x²−1" },
                        { "expr": "x^2 - 4", "color": "#ef4444", "label": "u(x,2) = x²−4" }
                    ],
                    "annotations": [
                        { "x": -2, "y": 4, "text": "y 고정 후 x에 대한 단면", "color": "#334155" },
                        { "x": 1.5, "y": -3, "text": "∂u/∂x = ∂v/∂y (C-R)", "color": "#6366f1" }
                    ]
                }]
        },
        "examples": [
            {
                "title": "$f(z) = z^2$의 CR 방정식 확인",
                "problem": "$f(z) = z^2$이 코시-리만 방정식을 만족하는지 확인하시오.",
                "steps": [
                    "$f(z) = (x+iy)^2 = (x^2-y^2) + 2xyi$이므로 $u = x^2-y^2$, $v = 2xy$.",
                    "$u_x = 2x$, $u_y = -2y$, $v_x = 2y$, $v_y = 2x$.",
                    "CR 방정식 확인: $u_x = 2x = v_y$ ✓, $u_y = -2y = -v_x$ ✓.",
                    "편미분이 모두 연속이므로 $f(z) = z^2$은 전체 $\\mathbb{C}$에서 해석적이다.",
                    "$f'(z) = u_x + iv_x = 2x + 2yi = 2z$."
                ],
                "answer": "$u_x = v_y = 2x$, $u_y = -v_x = -2y$ — CR 방정식 만족. $f'(z) = 2z$.",
                "lesson": "CR 방정식을 직접 계산해 확인하는 것이 가장 확실한 방법입니다. 결과 $f'(z) = 2z$는 실수에서의 $(x^2)' = 2x$와 자연스럽게 일치합니다."
            },
            {
                "title": "[기본] $f(z) = e^z$의 CR 방정식 확인",
                "problem": "$f(z) = e^z$가 코시-리만 방정식을 만족하는지 확인하시오.",
                "steps": [
                    "$e^z = e^{x+iy} = e^x \\cos y + i e^x \\sin y$이므로 $u = e^x \\cos y$, $v = e^x \\sin y$.",
                    "$u_x = e^x \\cos y$, $u_y = -e^x \\sin y$.",
                    "$v_x = e^x \\sin y$, $v_y = e^x \\cos y$.",
                    "CR 확인: $u_x = e^x \\cos y = v_y$ ✓, $u_y = -e^x \\sin y = -v_x$ ✓."
                ],
                "answer": "CR 방정식 성립: $u_x = v_y = e^x\\cos y$, $u_y = -v_x = -e^x\\sin y$",
                "lesson": "복소 지수함수 $e^z$는 CR 방정식을 만족하여 전체 복소평면에서 해석적입니다. $f'(z) = u_x + iv_x = e^x\\cos y + ie^x\\sin y = e^z$."
            },
            {
                "title": "[응용] 조화함수에서 해석함수 복원",
                "problem": "$u(x,y) = 2x - x^3 + 3xy^2$가 조화함수임을 확인하고, 대응하는 해석함수 $f(z)$를 구하시오.",
                "steps": [
                    "$u_{xx} = -6x$, $u_{yy} = 6x$. $u_{xx} + u_{yy} = 0$ ✓ (조화).",
                    "CR: $v_y = u_x = 2 - 3x^2 + 3y^2$ → $v = 2y - 3x^2 y + y^3 + g(x)$.",
                    "CR: $v_x = -u_y = -6xy$ → $\\frac{\\partial}{\\partial x}(2y - 3x^2 y + y^3 + g(x)) = -6xy + g'(x)$.",
                    "$-6xy + g'(x) = -6xy$이므로 $g'(x) = 0$, $g(x) = C$.",
                    "$v = 2y - 3x^2 y + y^3$ ($C = 0$).",
                    "$f(z) = u + iv = (2x - x^3 + 3xy^2) + i(2y - 3x^2 y + y^3) = 2z - z^3$."
                ],
                "answer": "$v = 2y - 3x^2 y + y^3$, $f(z) = 2z - z^3$",
                "lesson": "조화함수 $u$로부터 켤레조화함수 $v$를 구해 해석함수를 복원하는 과정은 CR 방정식의 적분으로 이루어집니다. 결과를 $z$로 통합하면 간결한 형태가 됩니다."
            },
            {
                "title": "[응용] CR 방정식이 실패하는 함수",
                "problem": "$f(z) = z\\bar{z} = |z|^2$에 대해 CR 방정식을 확인하고, 해석성을 판정하시오.",
                "steps": [
                    "$f(z) = x^2 + y^2$이므로 $u = x^2 + y^2$, $v = 0$.",
                    "$u_x = 2x$, $v_y = 0$. $u_x = v_y$는 $x = 0$에서만 성립.",
                    "$u_y = 2y$, $v_x = 0$. $u_y = -v_x$는 $y = 0$에서만 성립.",
                    "두 조건이 동시에 성립하는 점은 $z = 0$뿐.",
                    "한 점에서만 CR이 성립하므로 어떤 열린 영역에서도 해석적이지 않다."
                ],
                "answer": "$z = 0$에서만 CR 성립, 해석적이지 않음",
                "lesson": "함수가 아무리 매끄러워도(심지어 $C^\\infty$여도), CR 방정식이 영역 전체에서 성립하지 않으면 해석적이 아닙니다. $|z|^2$은 이 사실을 보여주는 교과서적 반례입니다."
            },
            {
                "title": "[심화] 극좌표에서의 CR 방정식",
                "problem": "극좌표 $z = re^{i\\theta}$에서 코시-리만 방정식을 유도하고, $f(z) = z^2$으로 확인하시오.",
                "steps": [
                    "$f(z) = U(r,\\theta) + iV(r,\\theta)$로 쓰면, 극좌표 CR 방정식은:",
                    "$\\frac{\\partial U}{\\partial r} = \\frac{1}{r}\\frac{\\partial V}{\\partial \\theta}$, $\\frac{\\partial V}{\\partial r} = -\\frac{1}{r}\\frac{\\partial U}{\\partial \\theta}$.",
                    "$f(z) = z^2 = r^2 e^{2i\\theta} = r^2 \\cos 2\\theta + ir^2 \\sin 2\\theta$이므로 $U = r^2\\cos 2\\theta$, $V = r^2\\sin 2\\theta$.",
                    "$U_r = 2r\\cos 2\\theta$, $\\frac{1}{r}V_\\theta = \\frac{1}{r}(2r^2\\cos 2\\theta) = 2r\\cos 2\\theta$ ✓.",
                    "$V_r = 2r\\sin 2\\theta$, $-\\frac{1}{r}U_\\theta = -\\frac{1}{r}(-2r^2\\sin 2\\theta) = 2r\\sin 2\\theta$ ✓."
                ],
                "answer": "극좌표 CR: $U_r = \\frac{1}{r}V_\\theta$, $V_r = -\\frac{1}{r}U_\\theta$. $z^2$에서 확인됨.",
                "lesson": "극좌표 CR 방정식은 원형 대칭이 있는 문제에서 직교좌표보다 편리합니다. 추가 인수 $1/r$이 나타나는 것은 극좌표의 스케일 팩터 때문입니다."
            }
        ],
        "problems": [
            {
                "id": "5-1",
                "type": "choice",
                "difficulty": 1,
                "question": "코시-리만 방정식은 다음 중 어느 것인가?",
                "choices": [
                    "$u_x = v_x$, $u_y = v_y$",
                    "$u_x = v_y$, $u_y = -v_x$",
                    "$u_x = -v_y$, $u_y = v_x$",
                    "$u_x + v_y = 0$, $u_y + v_x = 0$"
                ],
                "answer": "$u_x = v_y$, $u_y = -v_x$",
                "hints": [
                    "실수축 방향 극한과 허수축 방향 극한을 같다고 놓으면 나옵니다.",
                    "부호에 주의: 허수축 방향에서는 $-$ 부호가 나타납니다.",
                    "CR: $\\partial u/\\partial x = \\partial v/\\partial y$, $\\partial u/\\partial y = -\\partial v/\\partial x$."
                ],
                "explanation": "실수축 방향 극한 $u_x + iv_x$와 허수축 방향 극한 $v_y - iu_y$를 같다고 놓으면, 실수부 비교 $u_x = v_y$, 허수부 비교 $v_x = -u_y$, 즉 $u_y = -v_x$.",
                "wrongAnalysis": "부호를 잊고 $u_x = v_y$, $u_y = v_x$로 적는 실수가 매우 흔합니다. $-$ 부호가 핵심입니다."
            },
            {
                "id": "5-2",
                "type": "text",
                "difficulty": 2,
                "question": "$f(z) = e^z$에서 $u(x,y)$와 $v(x,y)$를 구하고, $u$가 조화함수임을 확인하시오. $u_{xx} + u_{yy}$의 값은? (예: 0)",
                "answer": "0",
                "hints": [
                    "$e^z = e^{x+iy} = e^x(\\cos y + i\\sin y)$.",
                    "$u = e^x \\cos y$, $v = e^x \\sin y$.",
                    "$u_{xx} = e^x \\cos y$, $u_{yy} = -e^x \\cos y$.",
                    "합하면?"
                ],
                "explanation": "$u = e^x \\cos y$이므로 $u_x = e^x \\cos y$, $u_{xx} = e^x \\cos y$. 또 $u_y = -e^x \\sin y$, $u_{yy} = -e^x \\cos y$. 따라서 $u_{xx} + u_{yy} = e^x \\cos y - e^x \\cos y = 0$. 해석함수의 실수부는 반드시 조화함수입니다.",
                "wrongAnalysis": "$u_{yy}$를 계산할 때 부호 실수가 흔합니다. $\\cos y$를 두 번 미분하면 $-\\cos y$입니다."
            },
            {
                "id": "5-3",
                "type": "choice",
                "difficulty": 3,
                "question": "$f(z) = |z|^2 = x^2 + y^2$은 해석적인가?",
                "choices": [
                    "전체 $\\mathbb{C}$에서 해석적",
                    "$z = 0$에서만 복소미분가능 (해석적이지는 않음)",
                    "원점을 제외한 곳에서 해석적",
                    "어디서도 복소미분 불가능"
                ],
                "answer": "$z = 0$에서만 복소미분가능 (해석적이지는 않음)",
                "hints": [
                    "$f(z) = x^2 + y^2$이므로 $u = x^2 + y^2$, $v = 0$.",
                    "CR: $u_x = 2x = v_y = 0$, $u_y = 2y = -v_x = 0$.",
                    "두 조건 모두 $x = 0$, $y = 0$, 즉 $z = 0$에서만 성립.",
                    "한 점에서만 미분가능하므로 어떤 영역에서도 해석적이지 않습니다."
                ],
                "explanation": "$u = x^2+y^2$, $v = 0$에서 $u_x = 2x$, $v_y = 0$이므로 $u_x = v_y$는 $x = 0$에서만 성립. 마찬가지로 $u_y = 2y = -v_x = 0$은 $y = 0$에서만 성립. 따라서 CR이 성립하는 곳은 원점뿐입니다. 해석적이려면 영역 전체에서 성립해야 하므로, $|z|^2$은 해석적이지 않습니다.",
                "wrongAnalysis": "'$|z|^2$은 실수이므로 해석적이다'라고 판단하거나, '연속이니 해석적이다'라고 잘못 추론하는 경우가 있습니다. 해석성은 연속성보다 훨씬 강한 조건입니다."
            },
            {
                "id": "5-4",
                "type": "text",
                "difficulty": 1,
                "question": "코시-리만 방정식 $u_x = v_y$, $u_y = -v_x$에서, $f(z) = z^2$일 때 $u_x$의 값을 $x$와 $y$로 표현하시오. (예: 2x)",
                "answer": "2x",
                "hints": [
                    "$z^2 = (x+iy)^2 = x^2 - y^2 + 2xyi$이므로 $u = x^2 - y^2$입니다.",
                    "$u_x = \\frac{\\partial}{\\partial x}(x^2 - y^2) = 2x$입니다."
                ],
                "explanation": "$f(z) = z^2$에서 $u = x^2 - y^2$이므로 $u_x = 2x$입니다. CR 방정식에 의해 $v_y = u_x = 2x$도 성립하며, 실제로 $v = 2xy$이므로 $v_y = 2x$으로 확인됩니다.",
                "wrongAnalysis": "$u = x^2 + y^2$으로 잘못 전개하는 실수가 있습니다. $(iy)^2 = -y^2$이므로 부호에 주의해야 합니다."
            },
            {
                "id": "5-5",
                "type": "choice",
                "difficulty": 2,
                "question": "$f(z) = z^3$의 실수부 $u(x,y)$가 조화함수인지 확인하려면 어떤 조건을 검증해야 하는가?",
                "choices": [
                    "$u_{xx} + u_{yy} = 1$",
                    "$u_{xx} \\cdot u_{yy} = 0$",
                    "$u_{xx} + u_{yy} = 0$",
                    "$u_{xx} - u_{yy} = 0$"
                ],
                "answer": "$u_{xx} + u_{yy} = 0$",
                "hints": [
                    "조화함수는 라플라스 방정식 $\\nabla^2 u = 0$을 만족합니다.",
                    "$\\nabla^2 u = u_{xx} + u_{yy}$입니다."
                ],
                "explanation": "조화함수의 정의는 라플라스 방정식 $\\nabla^2 u = u_{xx} + u_{yy} = 0$을 만족하는 것입니다. $z^3$의 실수부 $u = x^3 - 3xy^2$에 대해 $u_{xx} = 6x$, $u_{yy} = -6x$이므로 $u_{xx} + u_{yy} = 0$이 성립합니다.",
                "wrongAnalysis": "$u_{xx} - u_{yy} = 0$과 혼동하는 실수가 있습니다. 라플라스 방정식은 이계편미분의 합이 $0$입니다."
            }
        ],
        "summary": {
            "keyPoints": [
                "CR 방정식 $u_x = v_y$, $u_y = -v_x$는 해석성의 핵심 조건이다.",
                "편미분이 연속이면, CR 방정식 성립 ↔ 해석적.",
                "해석함수의 실수부·허수부는 조화함수($\\Delta u = 0$)이다."
            ],
            "formulas": [
                "u_x = v_y,\\quad u_y = -v_x",
                "f'(z) = u_x + iv_x",
                "\\Delta u = u_{xx} + u_{yy} = 0"
            ],
            "commonMistakes": [
                "CR 방정식의 부호($-$)를 잊는 실수",
                "'한 점에서 미분가능'과 '해석적(영역에서 미분가능)'을 혼동하는 실수",
                "조화함수 조건 확인 시 이계도함수의 부호 실수"
            ],
            "nextConnection": "CR 방정식으로 해석함수를 판별하는 도구를 갖추었습니다. 다음 레슨에서는 $e^z$, $\\log z$, $\\sin z$ 등 초등함수의 해석적 성질을 체계적으로 정리합니다."
        }
    },
    {
        "id": 6,
        "title": "초등함수의 해석적 성질",
        "category": "해석함수",
        "level": "중급",
        "question": "복소 지수함수, 로그함수, 삼각함수는 실수에서와 어떻게 다르며, 서로 어떤 관계로 연결되는가?",
        "concept": {
            "intro": "미적분학에서 $e^x$, $\\sin x$, $\\log x$는 독립적인 함수였습니다. 그러나 복소수로 확장하면 이들이 하나의 거대한 구조로 통합됩니다. 그 열쇠는 오일러 공식 $e^{i\\theta} = \\cos\\theta + i\\sin\\theta$입니다.\n\n:::definition[복소 지수함수]\n$e^z = e^{x+iy} = e^x(\\cos y + i\\sin y)$는 가장 기본적인 해석함수입니다. 실수에서 $e^x$는 항상 양수이고 단사(일대일)였지만, 복소수에서 $e^z$는 **주기함수**입니다: $e^{z+2\\pi i} = e^z$. 즉 $y$ 방향으로 주기 $2\\pi$를 가집니다. 또한 $e^z \\neq 0$ (모든 $z$에서), 그리고 $|e^z| = e^x$이므로 모듈러스는 오직 실수부에만 의존합니다.\n:::\n\n:::warning[복소 로그함수의 다가성]\n**복소 로그함수**는 $e^w = z$인 $w$를 찾는 것입니다. $z = re^{i\\theta}$이면 $w = \\ln r + i\\theta$인데, $e^z$의 주기성 때문에 $\\theta + 2n\\pi$ ($n \\in \\mathbb{Z}$)가 모두 가능합니다. 따라서 $\\log z = \\ln|z| + i(\\text{Arg}\\,z + 2n\\pi)$로 **다가함수**입니다. 한 가지(branch)를 선택해야 하며, 보통 $\\text{Arg}\\,z \\in (-\\pi, \\pi]$인 주가지를 사용합니다. 음의 실수축에서 불연속이 생기며, 이 선을 **분지선(branch cut)**이라 합니다.\n:::\n\n:::note[삼각함수와 쌍곡함수의 통합]\n**복소 삼각·쌍곡함수**는 지수함수로 정의됩니다: $\\sin z = \\frac{e^{iz}-e^{-iz}}{2i}$, $\\cos z = \\frac{e^{iz}+e^{-iz}}{2}$. 놀라운 사실은 삼각함수와 쌍곡함수가 $i$를 매개로 연결된다는 것입니다: $\\sin(iz) = i\\sinh z$, $\\cos(iz) = \\cosh z$. 실수에서 $|\\sin x| \\leq 1$이었지만, 복소수에서 $\\sin z$는 **유계가 아닙니다** — $\\sin(iy) = i\\sinh y$이므로 $|\\sin(iy)| \\to \\infty$ ($y \\to \\infty$).\n:::",
            "intuition": "$e^z$의 주기성은 '수직 이동이 회전'이라는 사실의 귀결입니다. $e^{x+iy}$에서 $x$를 고정하고 $y$를 $2\\pi$ 만큼 움직이면 한 바퀴 회전해 원위치 — 그래서 주기함수입니다. $\\log z$가 다가인 이유도 같습니다: 같은 점에 도달하는 회전 각도가 $\\theta, \\theta+2\\pi, \\theta+4\\pi, \\ldots$로 무한히 많습니다.\n\n삼각함수와 쌍곡함수의 연결은 '실수에서 서로 다른 두 함수가 사실 같은 함수의 다른 단면'이라는 뜻입니다. 실수축에서 보면 $\\sin$과 $\\sinh$은 전혀 다르지만, 복소평면 전체로 확장하면 $i$만큼 회전한 관계입니다.",
            "formula": "e^z = e^x(\\cos y + i\\sin y),\\quad e^{z+2\\pi i} = e^z\n\\log z = \\ln|z| + i(\\text{Arg}\\,z + 2n\\pi),\\quad n \\in \\mathbb{Z}\n\\sin z = \\frac{e^{iz} - e^{-iz}}{2i},\\quad \\cos z = \\frac{e^{iz} + e^{-iz}}{2}\n\\sin(iz) = i\\sinh z,\\quad \\cos(iz) = \\cosh z\n\\sinh z = \\frac{e^z - e^{-z}}{2},\\quad \\cosh z = \\frac{e^z + e^{-z}}{2}",
            "summary": ":::note[핵심 정리]\n• $e^z$는 주기 $2\\pi i$를 가지며, $e^z \\neq 0$\n• $\\log z$는 다가함수 — 분지선(보통 음의 실수축)에서 불연속\n• $\\sin z$, $\\cos z$는 유계가 아님 — 삼각함수와 쌍곡함수가 $i$로 연결\n:::"
        },
        "examples": [
            {
                "title": "$e^z$의 주기성 확인",
                "problem": "$e^{z+2\\pi i} = e^z$임을 보이시오.",
                "steps": [
                    "$e^{z+2\\pi i} = e^z \\cdot e^{2\\pi i}$.",
                    "오일러 공식: $e^{2\\pi i} = \\cos 2\\pi + i\\sin 2\\pi = 1$.",
                    "따라서 $e^{z+2\\pi i} = e^z \\cdot 1 = e^z$."
                ],
                "answer": "$e^{2\\pi i} = 1$이므로 $e^{z+2\\pi i} = e^z$",
                "lesson": "실수에서 $e^x$는 단사(일대일)였지만, 복소수에서 $e^z$는 주기함수이므로 단사가 아닙니다. 이 주기성이 $\\log z$를 다가함수로 만드는 원인입니다."
            },
            {
                "title": "[기본] $|e^z|$의 계산",
                "problem": "$z = 2 - 3i$일 때 $|e^z|$를 구하시오.",
                "steps": [
                    "$e^z = e^{x+iy} = e^x(\\cos y + i\\sin y)$.",
                    "$|e^z| = e^x \\cdot |\\cos y + i\\sin y| = e^x \\cdot 1 = e^x$.",
                    "$z = 2 - 3i$이므로 $x = 2$.",
                    "$|e^{2-3i}| = e^2 \\approx 7.389$."
                ],
                "answer": "$|e^{2-3i}| = e^2 \\approx 7.389$",
                "lesson": "$|e^z| = e^{\\text{Re}(z)}$입니다. 모듈러스는 실수부에만 의존하고, 허수부는 회전(방향)만 결정합니다. 이것이 $e^z$의 기본 성질입니다."
            },
            {
                "title": "[응용] $\\log z$의 가지 구조",
                "problem": "$\\log(1-i)$의 모든 값을 구하고, 주가지 값과 $n=1$에 대응하는 값을 명시하시오.",
                "steps": [
                    "$1-i$의 극형식: $|1-i| = \\sqrt{2}$, $\\text{Arg}(1-i) = -\\pi/4$.",
                    "$\\log(1-i) = \\ln\\sqrt{2} + i(-\\pi/4 + 2n\\pi) = \\frac{1}{2}\\ln 2 + i(-\\pi/4 + 2n\\pi)$.",
                    "주가지 ($n = 0$): $\\text{Log}(1-i) = \\frac{1}{2}\\ln 2 - \\frac{\\pi}{4}i$.",
                    "$n = 1$: $\\frac{1}{2}\\ln 2 + i(- \\pi/4 + 2\\pi) = \\frac{1}{2}\\ln 2 + \\frac{7\\pi}{4}i$."
                ],
                "answer": "주가지: $\\frac{1}{2}\\ln 2 - \\frac{\\pi}{4}i$, $n=1$: $\\frac{1}{2}\\ln 2 + \\frac{7\\pi}{4}i$",
                "lesson": "$\\log z$의 각 가지는 편각이 $2\\pi$씩 차이 나는 서로 다른 '층'입니다. 실수부 $\\ln|z|$는 모든 가지에서 같고, 허수부만 $2\\pi$의 정수배씩 달라집니다."
            },
            {
                "title": "[응용] 삼각함수와 쌍곡함수의 관계",
                "problem": "$\\cosh(i\\theta) = \\cos\\theta$임을 보이시오.",
                "steps": [
                    "$\\cosh z = \\frac{e^z + e^{-z}}{2}$에 $z = i\\theta$를 대입.",
                    "$\\cosh(i\\theta) = \\frac{e^{i\\theta} + e^{-i\\theta}}{2}$.",
                    "오일러 공식: $e^{i\\theta} = \\cos\\theta + i\\sin\\theta$, $e^{-i\\theta} = \\cos\\theta - i\\sin\\theta$.",
                    "$\\frac{e^{i\\theta} + e^{-i\\theta}}{2} = \\frac{2\\cos\\theta}{2} = \\cos\\theta$."
                ],
                "answer": "$\\cosh(i\\theta) = \\cos\\theta$ (증명 완료)",
                "lesson": "삼각함수와 쌍곡함수는 $i$를 매개로 연결됩니다: $\\cosh(iz) = \\cos z$, $\\sinh(iz) = i\\sin z$. 실수에서 독립적이었던 두 함수 클래스가 복소수에서 하나로 통합됩니다."
            },
            {
                "title": "[심화] $e^z = -2$의 모든 해",
                "problem": "$e^z = -2$의 모든 해를 구하시오.",
                "steps": [
                    "$e^z = -2$에서 $z = \\log(-2)$.",
                    "$-2 = 2 \\cdot e^{i\\pi}$이므로 $|-2| = 2$, $\\arg(-2) = \\pi + 2n\\pi$.",
                    "$z = \\ln 2 + i(\\pi + 2n\\pi)$, $n \\in \\mathbb{Z}$.",
                    "주가지 해: $z_0 = \\ln 2 + i\\pi$.",
                    "일반해: $z_n = \\ln 2 + i(2n+1)\\pi$, $n \\in \\mathbb{Z}$."
                ],
                "answer": "$z = \\ln 2 + i(2n+1)\\pi$, $n \\in \\mathbb{Z}$",
                "lesson": "실수에서 $e^x = -2$는 해가 없지만, 복소수에서는 무한히 많은 해를 가집니다. $e^z$의 주기성($2\\pi i$)에 의해, 해들은 허수부가 $2\\pi$씩 차이 나며 등간격으로 배치됩니다."
            }
        ],
        "problems": [
            {
                "id": "6-1",
                "type": "choice",
                "difficulty": 1,
                "question": "복소 지수함수 $e^z$의 주기는?",
                "choices": [
                    "$2\\pi$",
                    "$2\\pi i$",
                    "$\\pi i$",
                    "주기가 없다"
                ],
                "answer": "$2\\pi i$",
                "hints": [
                    "$e^{z+T} = e^z$를 만족하는 최소 양의 $T$를 찾으세요.",
                    "$e^T = 1$이어야 합니다.",
                    "$e^{2\\pi i} = \\cos 2\\pi + i\\sin 2\\pi = 1$."
                ],
                "explanation": "$e^{z+2\\pi i} = e^z \\cdot e^{2\\pi i} = e^z \\cdot 1 = e^z$. 따라서 주기는 $2\\pi i$입니다. 실수 $2\\pi$가 아님에 주의하세요 — 허수축 방향으로의 주기입니다.",
                "wrongAnalysis": "$2\\pi$로 답하는 실수가 흔합니다. $e^{z+2\\pi} = e^z \\cdot e^{2\\pi} \\neq e^z$ ($e^{2\\pi} \\neq 1$)이므로 $2\\pi$는 주기가 아닙니다."
            },
            {
                "id": "6-2",
                "type": "text",
                "difficulty": 2,
                "question": "$\\sin(i)$를 실수로 표현하시오. (예: i*sinh(1))",
                "answer": "i*sinh(1)",
                "hints": [
                    "$\\sin(iz) = i\\sinh z$에서 $z$에 적절한 값을 대입하세요.",
                    "$\\sin(i) = \\sin(i \\cdot 1) = i\\sinh(1)$.",
                    "$\\sinh(1) = \\frac{e - e^{-1}}{2} \\approx 1.1752$."
                ],
                "explanation": "$\\sin(i) = \\frac{e^{i \\cdot i} - e^{-i \\cdot i}}{2i} = \\frac{e^{-1} - e^1}{2i} = \\frac{-(e - e^{-1})}{2i} = \\frac{(e - e^{-1})}{2} \\cdot i = i\\sinh(1)$. 또는 직접 $\\sin(iz) = i\\sinh z$에 $z = 1$을 대입하면 $\\sin(i) = i\\sinh(1)$.",
                "wrongAnalysis": "$\\sin(i) = 0$이라고 답하거나, 실수 삼각함수의 값 범위 $[-1, 1]$에 갇혀 혼란을 겪는 경우가 있습니다. 복소수에서 $\\sin z$는 유계가 아닙니다."
            },
            {
                "id": "6-3",
                "type": "choice",
                "difficulty": 3,
                "question": "$\\text{Log}(i)$의 값은? ($\\text{Log}$는 주가지)",
                "choices": [
                    "$\\frac{\\pi}{2}i$",
                    "$\\frac{\\pi}{2}$",
                    "$\\pi i$",
                    "$\\ln 2 + \\frac{\\pi}{2}i$"
                ],
                "answer": "$\\frac{\\pi}{2}i$",
                "hints": [
                    "$i = 1 \\cdot e^{i\\pi/2}$이므로 $|i| = 1$, $\\text{Arg}(i) = \\pi/2$.",
                    "$\\text{Log}(i) = \\ln|i| + i\\,\\text{Arg}(i) = \\ln 1 + i \\cdot \\pi/2$.",
                    "$\\ln 1 = 0$."
                ],
                "explanation": "$i = e^{i\\pi/2}$이므로 $\\text{Log}(i) = \\ln 1 + i \\cdot \\frac{\\pi}{2} = \\frac{\\pi}{2}i$. 일반 로그는 $\\log(i) = i(\\frac{\\pi}{2} + 2n\\pi)$로 무한히 많은 값을 가집니다.",
                "wrongAnalysis": "'$i$의 로그는 정의되지 않는다'고 답하는 실수가 있습니다. 복소 로그에서는 모든 $z \\neq 0$에 대해 $\\log z$가 정의됩니다."
            },
            {
                "id": "6-4",
                "type": "choice",
                "difficulty": 1,
                "question": "$|e^z|$는 $z = x + iy$일 때 어떤 값인가?",
                "choices": [
                    "$e^{x+y}$",
                    "$e^x$",
                    "$e^y$",
                    "$e^{|z|}$"
                ],
                "answer": "$e^x$",
                "hints": [
                    "$e^z = e^x(\\cos y + i\\sin y)$입니다.",
                    "$|e^z| = e^x \\cdot |\\cos y + i\\sin y|$이고, $|\\cos y + i\\sin y| = 1$입니다."
                ],
                "explanation": "$e^z = e^{x+iy} = e^x(\\cos y + i\\sin y)$이므로, $|e^z| = e^x \\cdot \\sqrt{\\cos^2 y + \\sin^2 y} = e^x \\cdot 1 = e^x$입니다. 모듈러스는 실수부에만 의존합니다.",
                "wrongAnalysis": "$|e^z| = e^{|z|}$로 잘못 계산하는 실수가 흔합니다. $|e^z| = e^{\\text{Re}(z)} = e^x$이지 $e^{|z|}$가 아닙니다."
            },
            {
                "id": "6-5",
                "type": "text",
                "difficulty": 2,
                "question": "$e^{2+i\\pi/3}$의 모듈러스를 소수 둘째자리까지 구하시오. (예: 7.39)",
                "answer": "7.39",
                "hints": [
                    "$|e^z| = e^{\\text{Re}(z)}$를 이용하세요.",
                    "$\\text{Re}(2 + i\\pi/3) = 2$이므로 $|e^{2+i\\pi/3}| = e^2$입니다."
                ],
                "explanation": "$|e^{2+i\\pi/3}| = e^{\\text{Re}(2+i\\pi/3)} = e^2 \\approx 7.39$입니다. 허수부 $\\pi/3$는 회전에만 관여하고 크기에는 영향을 주지 않습니다.",
                "wrongAnalysis": "$e^{2+\\pi/3}$을 계산하는 실수가 있습니다. 지수의 허수부는 모듈러스에 기여하지 않고 회전만 담당합니다."
            }
        ],
        "summary": {
            "keyPoints": [
                "$e^z$는 주기 $2\\pi i$를 가지며 $e^z \\neq 0$ — 실수의 $e^x$와 근본적으로 다르다.",
                "$\\log z$는 다가함수이며, 분지선을 선택해 단가로 만든다.",
                "삼각함수와 쌍곡함수는 $i$를 매개로 연결된다: $\\sin(iz) = i\\sinh z$."
            ],
            "formulas": [
                "e^{z+2\\pi i} = e^z",
                "\\text{Log}\\,z = \\ln|z| + i\\,\\text{Arg}\\,z",
                "\\sin(iz) = i\\sinh z,\\quad \\cos(iz) = \\cosh z"
            ],
            "commonMistakes": [
                "$e^z$의 주기를 $2\\pi$($2\\pi i$가 아닌)로 적는 실수",
                "$\\log z$가 단가함수라고 생각하는 실수",
                "$|\\sin z| \\leq 1$이 복소수에서도 성립한다고 생각하는 실수"
            ],
            "nextConnection": "초등함수의 해석적 성질을 정리했으니, 다음 레슨에서 $\\log z$와 $z^\\alpha$ 같은 다가함수의 가지와 가지자름을 다룹니다."
        }
    }
];
