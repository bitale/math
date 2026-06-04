"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tripleIntegralLessons = void 0;
exports.tripleIntegralLessons = [
    {
        "id": 7,
        "title": "삼중적분",
        "category": "적분",
        "level": "중급",
        "question": "3차원 영역 위에서의 적분, 삼중적분은 어떻게 계산할까?",
        "concept": {
            "intro": ":::definition[삼중적분의 정의]\n삼중적분 $\\displaystyle\\iiint_E f(x,y,z)\\,dV$ 는 3차원 영역 $E$ 위에서 함수 $f$ 를 적분하는 것입니다.\n:::\n\n:::note[반복적분과 좌표계]\n실제 계산은 반복적분(iterated integral)으로 바꾸어 수행합니다. 적분 순서를 정하고 각 변수에 대한 적분 한계를 설정하는 것이 핵심입니다.\n\n영역의 대칭성에 따라 좌표계를 바꾸면 계산이 크게 단순해집니다.\n• 직교좌표: $dV = dx\\,dy\\,dz$\n• 원기둥좌표 $(r, \\theta, z)$: $dV = r\\,dr\\,d\\theta\\,dz$\n• 구면좌표 $(\\rho, \\phi, \\theta)$: $dV = \\rho^2 \\sin\\phi\\,d\\rho\\,d\\phi\\,d\\theta$\n:::\n\n:::note[응용]\n삼중적분의 응용으로 부피, 질량, 질량중심 등을 구할 수 있습니다.\n:::",
            "intuition": "이중적분이 2차원 영역 위의 '쌓기'였다면, 삼중적분은 3차원 영역 안을 '채우기'입니다. 좌표계를 잘 선택하면 적분 계산이 크게 단순해집니다. 예를 들어 구 모양 영역에서는 구면좌표를, 원기둥 모양에서는 원기둥좌표를 쓰는 것이 자연스럽습니다.",
            "formula": "\\iiint_E f(x,y,z)\\,dV\n\\text{직교: }dV = dx\\,dy\\,dz\n\\text{원기둥: }dV = r\\,dr\\,d\\theta\\,dz\n\\text{구면: }dV = \\rho^2 \\sin\\phi\\,d\\rho\\,d\\phi\\,d\\theta\n\\text{부피: }V = \\iiint_E 1\\,dV",
            "summary": ":::note[핵심 요약]\n• 삼중적분 $=$ 3차원 영역에서의 적분\n• 반복적분으로 변환하여 계산\n• 대칭성에 맞는 좌표계 선택이 핵심\n• 응용: 부피, 질량, 질량중심\n:::"
        },
        "examples": [
            {
                "title": "구면좌표를 이용한 구의 부피",
                "problem": "반지름 $R$ 인 구의 부피를 구면좌표 삼중적분으로 구하시오.",
                "steps": [
                    "구의 영역: $0 \\le \\rho \\le R$, $0 \\le \\phi \\le \\pi$, $0 \\le \\theta \\le 2\\pi$.",
                    "$V = \\displaystyle\\iiint_E 1\\,dV = \\int_0^{2\\pi}\\int_0^{\\pi}\\int_0^R \\rho^2 \\sin\\phi\\,d\\rho\\,d\\phi\\,d\\theta$.",
                    "$\\displaystyle\\int_0^R \\rho^2\\,d\\rho = \\frac{R^3}{3}$.",
                    "$\\displaystyle\\int_0^{\\pi} \\sin\\phi\\,d\\phi = [-\\cos\\phi]_0^{\\pi} = 2$.",
                    "$\\displaystyle\\int_0^{2\\pi} d\\theta = 2\\pi$.",
                    "$V = \\dfrac{R^3}{3} \\times 2 \\times 2\\pi = \\dfrac{4}{3}\\pi R^3$."
                ],
                "answer": "$\\dfrac{4}{3}\\pi R^3$",
                "lesson": "구 대칭인 영역에서는 구면좌표를 사용하면 적분 한계가 상수가 되어 계산이 매우 깔끔해집니다. 각 변수를 분리하여 따로 적분할 수 있는 것이 큰 장점입니다."
            },
            {
                "title": "[기본] 직교좌표 삼중적분",
                "problem": "직육면체 $0 \\le x \\le 1$, $0 \\le y \\le 2$, $0 \\le z \\le 3$ 위에서 $\\displaystyle\\iiint_E xyz\\,dV$ 를 구하시오.",
                "steps": [
                    "반복적분으로 변환: $\\displaystyle\\int_0^1 \\int_0^2 \\int_0^3 xyz\\,dz\\,dy\\,dx$.",
                    "$z$ 적분: $\\displaystyle\\int_0^3 xyz\\,dz = xy \\cdot \\frac{z^2}{2}\\Big|_0^3 = \\frac{9xy}{2}$.",
                    "$y$ 적분: $\\displaystyle\\int_0^2 \\frac{9xy}{2}\\,dy = \\frac{9x}{2} \\cdot \\frac{y^2}{2}\\Big|_0^2 = 9x$.",
                    "$x$ 적분: $\\displaystyle\\int_0^1 9x\\,dx = \\frac{9x^2}{2}\\Big|_0^1 = \\frac{9}{2}$."
                ],
                "answer": "$\\dfrac{9}{2}$",
                "lesson": "직육면체 영역에서는 각 변수의 적분 한계가 모두 상수이므로, 어느 순서로 적분해도 결과가 같습니다."
            },
            {
                "title": "[응용] 원기둥좌표를 이용한 삼중적분",
                "problem": "원기둥 영역 $x^2 + y^2 \\le 1$, $0 \\le z \\le 2$ 위에서 $\\displaystyle\\iiint_E (x^2 + y^2)\\,dV$ 를 원기둥좌표로 구하시오.",
                "steps": [
                    "원기둥좌표로 변환: $x^2 + y^2 = r^2$, $dV = r\\,dr\\,d\\theta\\,dz$.",
                    "적분 범위: $0 \\le r \\le 1$, $0 \\le \\theta \\le 2\\pi$, $0 \\le z \\le 2$.",
                    "$\\displaystyle\\iiint_E r^2 \\cdot r\\,dr\\,d\\theta\\,dz = \\int_0^{2\\pi} d\\theta \\int_0^1 r^3\\,dr \\int_0^2 dz$.",
                    "$\\displaystyle\\int_0^1 r^3\\,dr = \\frac{1}{4}$, $\\displaystyle\\int_0^{2\\pi} d\\theta = 2\\pi$, $\\displaystyle\\int_0^2 dz = 2$.",
                    "결과: $2\\pi \\times \\dfrac{1}{4} \\times 2 = \\pi$."
                ],
                "answer": "$\\pi$",
                "lesson": "피적분함수가 $x^2 + y^2$ 형태이고 영역이 원기둥이면, 원기둥좌표를 사용하여 $r^2 \\cdot r = r^3$ 으로 깔끔하게 정리할 수 있습니다."
            },
            {
                "title": "[응용] 삼중적분으로 질량 구하기",
                "problem": "밀도 $\\rho(x,y,z) = z$ 인 반구 $x^2 + y^2 + z^2 \\le 4$, $z \\ge 0$ 의 질량을 구하시오.",
                "steps": [
                    "질량 $M = \\displaystyle\\iiint_E z\\,dV$. 구면좌표: $z = \\rho\\cos\\phi$, $dV = \\rho^2 \\sin\\phi\\,d\\rho\\,d\\phi\\,d\\theta$.",
                    "적분 범위: $0 \\le \\rho \\le 2$, $0 \\le \\phi \\le \\dfrac{\\pi}{2}$, $0 \\le \\theta \\le 2\\pi$.",
                    "$M = \\displaystyle\\int_0^{2\\pi} d\\theta \\int_0^{\\pi/2} \\cos\\phi \\sin\\phi\\,d\\phi \\int_0^2 \\rho^3\\,d\\rho$.",
                    "$\\displaystyle\\int_0^2 \\rho^3\\,d\\rho = 4$, $\\displaystyle\\int_0^{\\pi/2} \\cos\\phi \\sin\\phi\\,d\\phi = \\frac{1}{2}$, $\\displaystyle\\int_0^{2\\pi} d\\theta = 2\\pi$.",
                    "$M = 2\\pi \\times \\dfrac{1}{2} \\times 4 = 4\\pi$."
                ],
                "answer": "$4\\pi$",
                "lesson": "삼중적분은 부피뿐만 아니라 밀도가 주어진 물체의 질량도 구할 수 있습니다. 반구 영역에서는 $\\phi$ 의 범위를 $0$ 에서 $\\pi/2$ 로 제한합니다."
            },
            {
                "title": "[심화] 적분 순서 변경과 비정형 영역",
                "problem": "$\\displaystyle\\iiint_E z\\,dV$ 를 구하시오. $E$는 포물면 $z = x^2 + y^2$ 과 평면 $z = 4$ 로 둘러싸인 영역이다.",
                "steps": [
                    "영역 $E$: $x^2 + y^2 \\le z \\le 4$. 원기둥좌표로 $r^2 \\le z \\le 4$, $0 \\le r \\le 2$.",
                    "$\\displaystyle\\iiint_E z\\,dV = \\int_0^{2\\pi} \\int_0^2 \\int_{r^2}^4 z \\cdot r\\,dz\\,dr\\,d\\theta$.",
                    "$z$ 적분: $\\displaystyle\\int_{r^2}^4 z\\,dz = \\frac{z^2}{2}\\Big|_{r^2}^4 = 8 - \\frac{r^4}{2}$.",
                    "$r$ 적분: $\\displaystyle\\int_0^2 r\\left(8 - \\frac{r^4}{2}\\right)dr = \\int_0^2 \\left(8r - \\frac{r^5}{2}\\right)dr = \\left[4r^2 - \\frac{r^6}{12}\\right]_0^2 = 16 - \\frac{16}{3} = \\frac{32}{3}$.",
                    "$\\theta$ 적분: $\\displaystyle\\int_0^{2\\pi} d\\theta = 2\\pi$.",
                    "결과: $2\\pi \\times \\dfrac{32}{3} = \\dfrac{64\\pi}{3}$."
                ],
                "answer": "$\\dfrac{64\\pi}{3}$",
                "lesson": "포물면과 평면으로 둘러싸인 영역에서는 $z$ 의 적분 한계가 $r$ 에 의존합니다. 적분 한계를 정확히 설정하는 것이 삼중적분의 핵심입니다."
            }
        ],
        "problems": [
            {
                "id": "7-1",
                "type": "choice",
                "difficulty": 1,
                "question": "구면좌표 $(\\rho, \\phi, \\theta)$ 에서의 체적소(volume element) $dV$ 는?",
                "choices": [
                    "$\\rho^2 \\sin\\phi\\,d\\rho\\,d\\phi\\,d\\theta$",
                    "$\\rho\\,d\\rho\\,d\\phi\\,d\\theta$",
                    "$\\rho^2\\,d\\rho\\,d\\phi\\,d\\theta$",
                    "$\\sin\\phi\\,d\\rho\\,d\\phi\\,d\\theta$"
                ],
                "answer": "$\\rho^2 \\sin\\phi\\,d\\rho\\,d\\phi\\,d\\theta$",
                "hints": [
                    "야코비안을 생각하세요.",
                    "$x = \\rho\\sin\\phi\\cos\\theta$ 등의 좌표 변환에서 야코비안의 절댓값은?"
                ],
                "explanation": "직교좌표에서 구면좌표로의 변환 야코비안은 $\\rho^2 \\sin\\phi$ 이므로 $dV = \\rho^2 \\sin\\phi\\,d\\rho\\,d\\phi\\,d\\theta$ 입니다.",
                "wrongAnalysis": "$\\rho^2$ 만 쓰고 $\\sin\\phi$ 를 빠뜨리는 실수가 매우 흔합니다. $\\phi$ 방향의 '좁아짐'을 반영하는 $\\sin\\phi$ 를 잊지 마세요."
            },
            {
                "id": "7-2",
                "type": "number",
                "difficulty": 2,
                "question": "원기둥 $x^2 + y^2 \\le 4$, $0 \\le z \\le 3$ 인 영역의 부피를 구하시오.",
                "answer": "12pi",
                "hints": [
                    "원기둥좌표를 사용하세요: $0 \\le r \\le 2$, $0 \\le \\theta \\le 2\\pi$, $0 \\le z \\le 3$.",
                    "$V = \\displaystyle\\int_0^{2\\pi}\\int_0^2\\int_0^3 r\\,dz\\,dr\\,d\\theta$.",
                    "각 변수를 분리하여 적분하세요."
                ],
                "explanation": "$V = \\displaystyle\\int_0^{2\\pi}d\\theta \\int_0^2 r\\,dr \\int_0^3 dz = 2\\pi \\times 2 \\times 3 = 12\\pi$.\n(밑면 반지름 $2$, 높이 $3$ 인 원기둥이므로 $\\pi r^2 h = 4\\pi \\times 3 = 12\\pi$ 와 일치합니다.)",
                "wrongAnalysis": "$dV = r\\,dr\\,d\\theta\\,dz$ 에서 $r$ 을 빠뜨리고 $dV = dr\\,d\\theta\\,dz$ 로 계산하면 $6\\pi$ 가 나오는 실수가 있습니다."
            },
            {
                "id": "7-3",
                "type": "text",
                "difficulty": 3,
                "question": "원기둥좌표를 이용하여 $\\displaystyle\\iiint_E z\\,dV$ 를 구하시오. 여기서 $E$ 는 $x^2 + y^2 \\le 1$, $0 \\le z \\le 2$ 인 영역입니다. (답은 pi를 포함한 식으로, 예: 5pi/3)",
                "answer": "2pi",
                "hints": [
                    "원기둥좌표: $0 \\le r \\le 1$, $0 \\le \\theta \\le 2\\pi$, $0 \\le z \\le 2$.",
                    "$\\displaystyle\\iiint_E z\\,dV = \\int_0^{2\\pi}\\int_0^1\\int_0^2 z \\cdot r\\,dz\\,dr\\,d\\theta$.",
                    "$\\displaystyle\\int_0^2 z\\,dz = 2$, $\\displaystyle\\int_0^1 r\\,dr = \\dfrac{1}{2}$, $\\displaystyle\\int_0^{2\\pi} d\\theta = 2\\pi$."
                ],
                "explanation": "$\\displaystyle\\int_0^{2\\pi}d\\theta \\int_0^1 r\\,dr \\int_0^2 z\\,dz = 2\\pi \\times \\frac{1}{2} \\times 2 = 2\\pi$.\n이 적분은 영역 $E$ 에서의 $z$ 좌표의 '가중 합'으로, 질량중심의 $z$ 성분 계산 등에 활용됩니다.",
                "wrongAnalysis": "원기둥좌표의 $dV = r\\,dr\\,d\\theta\\,dz$ 에서 $r$ 인수를 빠뜨리면 $\\pi$ 가 아닌 $2\\pi$ 가 아닌 잘못된 값이 나옵니다. 또한 적분 순서를 바꿀 때 적분 한계를 그대로 두는 실수에 주의하세요."
            },
            {
                "id": "7-4",
                "type": "number",
                "difficulty": 1,
                "question": "직교좌표에서 $\\displaystyle\\iiint_E 1\\,dV$ 를 구하시오. 여기서 $E$ 는 $0 \\le x \\le 2$, $0 \\le y \\le 3$, $0 \\le z \\le 1$ 인 직육면체입니다.",
                "answer": "6",
                "hints": [
                    "$\\displaystyle\\int_0^2 dx \\int_0^3 dy \\int_0^1 dz$ 를 각각 계산하세요.",
                    "$f = 1$ 의 삼중적분은 영역의 부피와 같습니다."
                ],
                "explanation": "$\\displaystyle\\int_0^2 dx \\int_0^3 dy \\int_0^1 dz = 2 \\times 3 \\times 1 = 6$. 상수 $1$ 의 삼중적분은 영역의 부피이며, 이 직육면체의 부피는 $2 \\times 3 \\times 1 = 6$ 입니다.",
                "wrongAnalysis": "삼중적분에서 각 변수의 적분 범위를 혼동하거나, 적분 순서를 바꿀 때 범위를 잘못 설정하는 실수가 있습니다."
            },
            {
                "id": "7-5",
                "type": "choice",
                "difficulty": 2,
                "question": "원기둥좌표 $(r, \\theta, z)$ 에서 $\\displaystyle\\iiint_E r^2\\,dV$ 를 구하시오. 영역은 $0 \\le r \\le 1$, $0 \\le \\theta \\le 2\\pi$, $0 \\le z \\le 1$ 입니다.",
                "choices": [
                    "$\\dfrac{\\pi}{2}$",
                    "$\\pi$",
                    "$\\dfrac{\\pi}{4}$",
                    "$2\\pi$"
                ],
                "answer": "$\\dfrac{\\pi}{2}$",
                "hints": [
                    "$dV = r\\,dr\\,d\\theta\\,dz$ 이므로 피적분함수는 $r^2 \\cdot r = r^3$ 이 됩니다.",
                    "$\\displaystyle\\int_0^{2\\pi}d\\theta \\int_0^1 r^3\\,dr \\int_0^1 dz = 2\\pi \\times \\frac{1}{4} \\times 1$ 을 계산하세요."
                ],
                "explanation": "$\\displaystyle\\int_0^{2\\pi}d\\theta \\int_0^1 r^3\\,dr \\int_0^1 dz = 2\\pi \\times \\frac{1}{4} \\times 1 = \\frac{\\pi}{2}$. 원기둥좌표에서 $dV = r\\,dr\\,d\\theta\\,dz$ 이므로 $r^2 \\cdot r = r^3$ 을 적분합니다.",
                "wrongAnalysis": "$dV$ 의 $r$ 인수를 빠뜨리고 $r^2$ 만 적분하면 $\\displaystyle\\int_0^1 r^2\\,dr = \\frac{1}{3}$ 이 되어 $\\frac{2\\pi}{3}$ 으로 잘못된 답이 나옵니다."
            }
        ],
        "summary": {
            "keyPoints": [
                "삼중적분은 3차원 영역에서 함수를 적분",
                "반복적분으로 변환하여 한 변수씩 차례로 계산",
                "영역의 대칭성에 맞는 좌표계(직교, 원기둥, 구면)를 선택하면 계산이 단순해짐"
            ],
            "formulas": [
                "\\iiint_E f\\,dV\\ \\text{(삼중적분)}",
                "dV = r\\,dr\\,d\\theta\\,dz\\ \\text{(원기둥좌표)}",
                "dV = \\rho^2 \\sin\\phi\\,d\\rho\\,d\\phi\\,d\\theta\\ \\text{(구면좌표)}"
            ],
            "commonMistakes": [
                "좌표 변환 시 야코비안($r$ 또는 $\\rho^2\\sin\\phi$) 누락",
                "적분 한계를 좌표계에 맞게 변환하지 않음",
                "적분 순서를 바꿀 때 한계를 재설정하지 않음"
            ],
            "nextConnection": "적분 영역이 복잡할 때 좌표를 변환하면 계산이 쉬워집니다. 야코비안을 배웁니다."
        }
    }
];
