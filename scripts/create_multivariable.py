import re
import os

base = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

with open(os.path.join(base, 'src/data/linearAndVector/multivariable.ts'), 'r', encoding='utf-8') as f:
    content = f.read()

inner = content.split('= [', 1)[1].rsplit('];', 1)[0].strip()

# Renumber in reverse
remap = {27:11, 26:9, 25:8, 24:6, 23:4, 22:2, 21:1}
for old_id in sorted(remap.keys(), reverse=True):
    new_id = remap[old_id]
    inner = inner.replace('"id": {},'.format(old_id), '"id": {},'.format(new_id))
    for p in range(1,4):
        inner = inner.replace('"id": "{}-{}"'.format(old_id, p), '"id": "{}-{}"'.format(new_id, p))

# Fix nextConnections
nc_fixes = {
    "다음 단원이 편미분입니다.": "다음 단원에서 한 변수씩 변화율을 구하는 편미분을 배웁니다.",
    "다음 단원의 그래디언트입니다.": "다음 단원에서 모든 방향의 변화를 한꺼번에 표현하는 전미분과 연쇄법칙을 배웁니다.",
    "다음 단원은 중적분입니다.": "다음 단원에서 다변수 함수의 극값과 라그랑주 승수법을 배웁니다.",
    "벡터장 입문으로 넘어갑니다.": "좌표변환과 야코비안을 배웁니다.",
    "미분방정식 입문으로 들어갑니다.": "선적분과 그린 정리를 배웁니다.",
    "발산 정리와 스토크스 정리를 배웁니다.": "3차원 면적분을 배운 뒤 발산 정리와 스토크스 정리로 나아갑니다.",
    "다음 레슨부터는 미분방정식의 세계로 들어갑니다.": "이제 미분방정식의 세계로 넘어갑니다!",
}
for old, new in nc_fixes.items():
    inner = inner.replace(old, new)

# Parse individual lessons
lessons = []
depth = 0
start = None
for i, ch in enumerate(inner):
    if ch == '{' and depth == 0:
        start = i
    if ch == '{': depth += 1
    if ch == '}':
        depth -= 1
        if depth == 0 and start is not None:
            lessons.append(inner[start:i+1])
            start = None

lesson_map = {}
for l in lessons:
    m = re.search(r'"id": (\d+),', l)
    if m:
        lesson_map[int(m.group(1))] = l

# Fix lesson 3-2 answer
LESSON3 = r"""{
  "id": 3,
  "title": "전미분과 연쇄법칙",
  "category": "다변수 미적분",
  "level": "고급",
  "question": "다변수 함수의 전체 변화량은 어떻게 표현하고, 합성함수의 미분은 어떻게 할까?",
  "concept": {
    "intro": "편미분은 한 변수만 변할 때의 변화율입니다. 그런데 실제로는 $x$와 $y$가 동시에 변합니다. 이때 $F(x,y)$의 전체 변화량을 나타내는 것이 전미분(total differential)입니다:\n$$dF = \frac{\partial F}{\partial x}\,dx + \frac{\partial F}{\partial y}\,dy = F_x\,dx + F_y\,dy$$\n여기서 $dx$, $dy$는 각각 $x$, $y$의 미소 변화량입니다. 전미분은 '각 방향의 편미분 기여를 합산'한 것입니다.\n\n**다변수 연쇄법칙:** $z = f(x,y)$에서 $x = x(t)$, $y = y(t)$이면:\n$$\frac{dz}{dt} = \frac{\partial f}{\partial x}\frac{dx}{dt} + \frac{\partial f}{\partial y}\frac{dy}{dt}$$\n더 일반적으로 $x = x(s,t)$, $y = y(s,t)$이면:\n$$\frac{\partial z}{\partial s} = f_x \frac{\partial x}{\partial s} + f_y \frac{\partial y}{\partial s}$$\n\n전미분은 미분방정식에서 $M\,dx + N\,dy = 0$ 형태의 완전미분방정식과 직결됩니다. $dF = M\,dx + N\,dy$이면 해는 $F(x,y) = C$입니다.",
    "intuition": "산의 높이 $h(x,y)$에서 동쪽으로 $dx$, 북쪽으로 $dy$ 만큼 이동하면, 높이 변화는 '동쪽 경사 $\\times$ 동쪽 이동 $+$ 북쪽 경사 $\\times$ 북쪽 이동'입니다. 이것이 $dh = h_x\,dx + h_y\,dy$입니다.",
    "formula": "dF = F_x\,dx + F_y\,dy\n\frac{dz}{dt} = \frac{\partial f}{\partial x}\frac{dx}{dt} + \frac{\partial f}{\partial y}\frac{dy}{dt}",
    "summary": "전미분 $dF = F_x\,dx + F_y\,dy$는 다변수 함수의 전체 변화량이다. 다변수 연쇄법칙은 합성함수의 미분을 편미분의 합으로 표현한다."
  },
  "examples": [
    {
      "title": "전미분 계산",
      "problem": "$F(x,y) = x^2y + y^3$의 전미분 $dF$를 구하시오.",
      "steps": [
        "$F_x = 2xy$, $F_y = x^2 + 3y^2$.",
        "$dF = 2xy\,dx + (x^2 + 3y^2)\,dy$."
      ],
      "answer": "$dF = 2xy\,dx + (x^2 + 3y^2)\,dy$",
      "lesson": "전미분은 각 편미분에 해당 미분소를 곱해 합산한 것입니다."
    }
  ],
  "problems": [
    {
      "id": "3-1",
      "type": "choice",
      "difficulty": 1,
      "question": "$f(x,y) = x^2 + xy$의 전미분 $df$는?",
      "choices": [
        "$(2x+y)\,dx + x\,dy$",
        "$2x\,dx + y\,dy$",
        "$(2x+y)\,dx + (x+1)\,dy$",
        "$x\,dx + (2x+y)\,dy$"
      ],
      "answer": "$(2x+y)\,dx + x\,dy$",
      "hints": [
        "$f_x = 2x + y$, $f_y = x$.",
        "$df = f_x\,dx + f_y\,dy$."
      ],
      "explanation": "$f_x = 2x+y$, $f_y = x$이므로 $df = (2x+y)\,dx + x\,dy$.",
      "wrongAnalysis": "$f_y$에서 $y$를 미분하여 $1$을 추가하는 실수가 있습니다. $xy$를 $y$로 미분하면 $x$이지 $x+1$이 아닙니다."
    },
    {
      "id": "3-2",
      "type": "text",
      "difficulty": 2,
      "question": "$z = x^2y$, $x = t^2$, $y = t^3$일 때 $\\frac{dz}{dt}$를 $t$로 나타내시오. (예: 5t^6)",
      "answer": "7t^6",
      "hints": [
        "$\\frac{\\partial z}{\\partial x} = 2xy$, $\\frac{\\partial z}{\\partial y} = x^2$.",
        "$\\frac{dx}{dt} = 2t$, $\\frac{dy}{dt} = 3t^2$.",
        "대입 후 정리: $2(t^2)(t^3)(2t) + (t^4)(3t^2) = 4t^6 + 3t^6$."
      ],
      "explanation": "연쇄법칙: $\\frac{dz}{dt} = 2xy \\cdot 2t + x^2 \\cdot 3t^2 = 2t^5 \\cdot 2t + t^4 \\cdot 3t^2 = 4t^6 + 3t^6 = 7t^6$. 검산: $z = t^4 \\cdot t^3 = t^7$이므로 $dz/dt = 7t^6$.",
      "wrongAnalysis": "편미분과 일반 미분을 섞어서 계산하는 실수가 있습니다."
    },
    {
      "id": "3-3",
      "type": "number",
      "difficulty": 3,
      "question": "$f(x,y) = e^{xy}$에서 $(1,1)$, $dx = 0.1$, $dy = -0.1$일 때 $df$의 근삿값은?",
      "answer": "0",
      "hints": [
        "$f_x = ye^{xy}$, $f_y = xe^{xy}$.",
        "$(1,1)$에서 $f_x = e$, $f_y = e$.",
        "$df = e(0.1) + e(-0.1) = 0$."
      ],
      "explanation": "$df = e \\cdot 0.1 + e \\cdot (-0.1) = 0$. $dx$와 $dy$의 기여가 정확히 상쇄.",
      "wrongAnalysis": "$f_x$와 $f_y$의 값이 같은 점에서 $dx = -dy$이면 $df = 0$이 됩니다."
    }
  ],
  "summary": {
    "keyPoints": [
      "전미분 $dF = F_x\,dx + F_y\,dy$는 전체 변화량.",
      "다변수 연쇄법칙: $\\frac{dz}{dt} = f_x \\frac{dx}{dt} + f_y \\frac{dy}{dt}$.",
      "전미분은 미분방정식의 완전미분과 직결된다."
    ],
    "formulas": [
      "dF = F_x\,dx + F_y\,dy",
      "\\frac{dz}{dt} = f_x \\frac{dx}{dt} + f_y \\frac{dy}{dt}"
    ],
    "commonMistakes": [
      "전미분에서 편미분 계산 실수",
      "연쇄법칙에서 항을 빠뜨리는 실수"
    ],
    "nextConnection": "전미분을 알았으니, 다음 단원에서 편미분을 벡터로 모은 그래디언트와 방향도함수를 배웁니다."
  }
}"""

LESSON5 = r"""{
  "id": 5,
  "title": "극값과 라그랑주 승수법",
  "category": "다변수 미적분",
  "level": "고급",
  "question": "다변수 함수의 최대·최소는 어떻게 찾고, 제약 조건이 있으면 어떻게 할까?",
  "concept": {
    "intro": "일변수에서 극값은 $f'(x) = 0$인 점에서 찾았습니다. 다변수에서는 $\\nabla f = \\mathbf{0}$, 즉 모든 편미분이 $0$인 점이 임계점(critical point)입니다.\n\n**2차 판별법:** 이변수 함수 $f(x,y)$의 임계점 $(a,b)$에서 $D = f_{xx}f_{yy} - (f_{xy})^2$를 계산합니다.\n- $D > 0$이고 $f_{xx} > 0$: 극소\n- $D > 0$이고 $f_{xx} < 0$: 극대\n- $D < 0$: 안장점(saddle point)\n- $D = 0$: 판별 불가\n\n**라그랑주 승수법:** 제약 조건 $g(x,y) = 0$ 하에서 $f(x,y)$의 극값을 찾으려면, $\\nabla f = \\lambda \\nabla g$와 $g = 0$을 연립하여 풉니다. $\\lambda$를 라그랑주 승수라 합니다.",
    "intuition": "산 위에서 가장 높은 곳은 모든 방향의 경사가 $0$인 곳입니다. 안장점은 한 방향으로는 올라가고 다른 방향으로는 내려가는 '말 안장' 모양입니다. 라그랑주 승수법은 '도로(제약 조건) 위에서만 움직일 때 가장 높은 곳'을 찾는 것입니다.",
    "formula": "\\nabla f = \\mathbf{0}\\ (\\text{임계점})\nD = f_{xx}f_{yy} - (f_{xy})^2\n\\text{라그랑주:}\\ \\nabla f = \\lambda \\nabla g,\\ g(x,y) = 0",
    "summary": "다변수 극값은 $\\nabla f = 0$인 임계점에서 2차 판별법($D = f_{xx}f_{yy} - f_{xy}^2$)으로 분류한다. 제약 조건이 있으면 라그랑주 승수법 $\\nabla f = \\lambda \\nabla g$를 사용한다."
  },
  "examples": [
    {
      "title": "2차 판별법으로 극값 분류",
      "problem": "$f(x,y) = x^2 + y^2 - 2x$의 극값을 구하시오.",
      "steps": [
        "$f_x = 2x - 2 = 0$, $f_y = 2y = 0$ → 임계점 $(1, 0)$.",
        "$f_{xx} = 2$, $f_{yy} = 2$, $f_{xy} = 0$.",
        "$D = 4 > 0$이고 $f_{xx} > 0$ → 극소.",
        "$f(1,0) = -1$."
      ],
      "answer": "극소 $f(1,0) = -1$",
      "lesson": "$D > 0$이면 극값이 존재하고, $f_{xx}$의 부호로 극대/극소를 구별합니다."
    }
  ],
  "problems": [
    {
      "id": "5-1",
      "type": "choice",
      "difficulty": 2,
      "question": "$f(x,y) = x^2 - y^2$의 원점 $(0,0)$은?",
      "choices": ["극대", "극소", "안장점", "판별 불가"],
      "answer": "안장점",
      "hints": ["$f_{xx} = 2$, $f_{yy} = -2$, $f_{xy} = 0$.", "$D = -4 < 0$."],
      "explanation": "$D = -4 < 0$이므로 안장점.",
      "wrongAnalysis": "$f(0,0) = 0$이므로 극소라고 착각하는 실수가 있습니다."
    },
    {
      "id": "5-2",
      "type": "number",
      "difficulty": 2,
      "question": "$f(x,y) = x^2 + 2y^2 - 4x$의 극소값은?",
      "answer": "-4",
      "hints": ["$f_x = 2x-4 = 0$, $f_y = 4y = 0$.", "임계점 $(2,0)$.", "$f(2,0) = 4+0-8$"],
      "explanation": "임계점 $(2,0)$에서 $D = 8 > 0$, $f_{xx} = 2 > 0$이므로 극소. $f(2,0) = -4$.",
      "wrongAnalysis": "$f_{xx}$와 $f_{yy}$를 곱하지 않고 더하는 실수가 있습니다."
    },
    {
      "id": "5-3",
      "type": "number",
      "difficulty": 3,
      "question": "제약 조건 $x + y = 1$ 하에서 $f(x,y) = xy$의 최대값은?",
      "answer": "0.25",
      "hints": ["$\\nabla f = (y, x)$, $\\nabla g = (1, 1)$.", "$y = \\lambda$, $x = \\lambda$ → $x = y$.", "$x + y = 1$에서 $x = y = 1/2$."],
      "explanation": "$x = y = 1/2$, $f(1/2,1/2) = 1/4 = 0.25$.",
      "wrongAnalysis": "대입법으로도 풀 수 있지만, 변수가 3개 이상이면 라그랑주가 필수입니다."
    }
  ],
  "summary": {
    "keyPoints": [
      "임계점: $\\nabla f = 0$.",
      "2차 판별법: $D = f_{xx}f_{yy} - f_{xy}^2$.",
      "라그랑주 승수법: $\\nabla f = \\lambda \\nabla g$, $g = 0$."
    ],
    "formulas": ["D = f_{xx}f_{yy} - (f_{xy})^2", "\\nabla f = \\lambda \\nabla g"],
    "commonMistakes": ["$D$ 공식에서 $f_{xy}^2$ 빠뜨리기", "안장점과 극값 혼동"],
    "nextConnection": "극값을 알았으니, 다음 단원에서 다변수 함수의 적분인 중적분을 배웁니다."
  }
}"""

LESSON7 = r"""{
  "id": 7,
  "title": "좌표변환과 야코비안",
  "category": "다변수 미적분",
  "level": "고급",
  "question": "극좌표나 구면좌표로 바꾸면 적분이 쉬워지는데, 변환할 때 왜 야코비안을 곱해야 할까?",
  "concept": {
    "intro": "중적분에서 영역이 원이나 구처럼 직교좌표로 표현하기 어려운 경우, 좌표를 바꾸면 간단해집니다.\n\n**극좌표:** $x = r\\cos\\theta$, $y = r\\sin\\theta$일 때 $dA = r\\,dr\\,d\\theta$.\n\n**야코비안(Jacobian):** 변환 $(u,v) \\to (x,y)$에서 넓이 요소의 비율입니다:\n$$\\frac{\\partial(x,y)}{\\partial(u,v)} = \\begin{vmatrix} x_u & x_v \\\\ y_u & y_v \\end{vmatrix}$$\n극좌표의 야코비안: $\\begin{vmatrix} \\cos\\theta & -r\\sin\\theta \\\\ \\sin\\theta & r\\cos\\theta \\end{vmatrix} = r$.\n\n**구면좌표:** $x = \\rho\\sin\\phi\\cos\\theta$, $y = \\rho\\sin\\phi\\sin\\theta$, $z = \\rho\\cos\\phi$. 야코비안 $= \\rho^2\\sin\\phi$이므로 $dV = \\rho^2\\sin\\phi\\,d\\rho\\,d\\phi\\,d\\theta$.",
    "intuition": "야코비안은 좌표 변환에 의한 '넓이 왜곡 비율'입니다. 극좌표에서 원점 근처는 면적이 작고 멀어질수록 커지므로 $r$을 곱해야 합니다.",
    "formula": "\\frac{\\partial(x,y)}{\\partial(u,v)} = \\begin{vmatrix} x_u & x_v \\\\ y_u & y_v \\end{vmatrix}\n\\text{극좌표:}\\ dA = r\\,dr\\,d\\theta\n\\text{구면좌표:}\\ dV = \\rho^2\\sin\\phi\\,d\\rho\\,d\\phi\\,d\\theta",
    "summary": "좌표변환 시 야코비안은 넓이/부피 요소의 변환 비율이다. 극좌표에서 $dA = r\\,dr\\,d\\theta$, 구면좌표에서 $dV = \\rho^2\\sin\\phi\\,d\\rho\\,d\\phi\\,d\\theta$."
  },
  "examples": [
    {
      "title": "극좌표 이중적분",
      "problem": "$\\iint_{x^2+y^2 \\leq 4} (x^2+y^2)\\,dA$를 극좌표로 구하시오.",
      "steps": [
        "$x^2+y^2 = r^2$, $dA = r\\,dr\\,d\\theta$.",
        "$\\int_0^{2\\pi}\\int_0^2 r^3\\,dr\\,d\\theta = 2\\pi \\cdot 4 = 8\\pi$."
      ],
      "answer": "$8\\pi$",
      "lesson": "원형 영역에서는 극좌표가 훨씬 간단합니다. $dA = r\\,dr\\,d\\theta$에서 $r$을 빠뜨리지 마세요."
    }
  ],
  "problems": [
    {
      "id": "7-1",
      "type": "text",
      "difficulty": 2,
      "question": "극좌표 변환의 야코비안 $\\frac{\\partial(x,y)}{\\partial(r,\\theta)}$의 값은? (문자로 답)",
      "answer": "r",
      "hints": ["$x = r\\cos\\theta$, $y = r\\sin\\theta$.", "$r\\cos^2\\theta + r\\sin^2\\theta$."],
      "explanation": "행렬식 = $r\\cos^2\\theta + r\\sin^2\\theta = r$.",
      "wrongAnalysis": "행렬식 부호를 잘못 처리하는 실수가 흔합니다."
    },
    {
      "id": "7-2",
      "type": "number",
      "difficulty": 2,
      "question": "단위원 위에서 $\\iint 1\\,dA$를 극좌표로 계산하면? ($\\pi$ 포함, 소수)",
      "answer": "3.1416",
      "hints": ["$\\int_0^{2\\pi}\\int_0^1 r\\,dr\\,d\\theta = \\pi$."],
      "explanation": "$2\\pi \\cdot 1/2 = \\pi \\approx 3.1416$.",
      "wrongAnalysis": "$r$을 빠뜨리면 $2\\pi$가 되어 틀립니다."
    },
    {
      "id": "7-3",
      "type": "choice",
      "difficulty": 3,
      "question": "구면좌표에서 $dV$는?",
      "choices": ["$d\\rho\\,d\\phi\\,d\\theta$", "$\\rho\\,d\\rho\\,d\\phi\\,d\\theta$", "$\\rho^2\\sin\\phi\\,d\\rho\\,d\\phi\\,d\\theta$", "$\\rho^2\\,d\\rho\\,d\\phi\\,d\\theta$"],
      "answer": "$\\rho^2\\sin\\phi\\,d\\rho\\,d\\phi\\,d\\theta$",
      "hints": ["구면좌표의 야코비안은 $\\rho^2\\sin\\phi$."],
      "explanation": "$dV = \\rho^2\\sin\\phi\\,d\\rho\\,d\\phi\\,d\\theta$.",
      "wrongAnalysis": "$\\sin\\phi$를 빠뜨리는 실수가 매우 흔합니다."
    }
  ],
  "summary": {
    "keyPoints": ["야코비안은 좌표변환의 넓이/부피 비율.", "극좌표: $dA = r\\,dr\\,d\\theta$.", "구면좌표: $dV = \\rho^2\\sin\\phi\\,d\\rho\\,d\\phi\\,d\\theta$."],
    "formulas": ["J = \\frac{\\partial(x,y)}{\\partial(u,v)}", "dA = r\\,dr\\,d\\theta"],
    "commonMistakes": ["극좌표에서 $r$ 누락", "구면좌표에서 $\\sin\\phi$ 누락"],
    "nextConnection": "좌표변환을 알았으니, 다음 단원에서 공간에 벡터가 분포하는 벡터장을 배웁니다."
  }
}"""

LESSON10 = r"""{
  "id": 10,
  "title": "면적분",
  "category": "다변수 미적분",
  "level": "심화",
  "question": "3차원 곡면 위에서 스칼라 함수나 벡터장을 적분하려면 어떻게 할까?",
  "concept": {
    "intro": "선적분이 곡선 위의 적분이라면, 면적분(surface integral)은 곡면 위의 적분입니다.\n\n**스칼라 면적분:** 곡면 $S$가 $\\mathbf{r}(u,v)$로 매개변수화되면:\n$$\\iint_S f\\,dS = \\iint_D f(\\mathbf{r}(u,v))\\,\\|\\mathbf{r}_u \\times \\mathbf{r}_v\\|\\,du\\,dv$$\n\n**벡터 면적분(유량):** 벡터장 $\\mathbf{F}$가 곡면을 통과하는 유량(flux)은:\n$$\\iint_S \\mathbf{F} \\cdot d\\mathbf{S} = \\iint_D \\mathbf{F} \\cdot (\\mathbf{r}_u \\times \\mathbf{r}_v)\\,du\\,dv$$\n\n$z = g(x,y)$로 주어진 곡면이면 $dS = \\sqrt{1 + g_x^2 + g_y^2}\\,dA$로 간단해집니다.",
    "intuition": "비가 지붕(곡면)에 쏟아질 때, 지붕을 통과하는 빗물의 총량이 벡터 면적분입니다.",
    "formula": "\\iint_S f\\,dS = \\iint_D f\\,\\|\\mathbf{r}_u \\times \\mathbf{r}_v\\|\\,du\\,dv\n\\iint_S \\mathbf{F} \\cdot d\\mathbf{S} = \\iint_D \\mathbf{F} \\cdot (\\mathbf{r}_u \\times \\mathbf{r}_v)\\,du\\,dv\nz = g(x,y):\\  dS = \\sqrt{1+g_x^2+g_y^2}\\,dA",
    "summary": "면적분은 곡면 위에서 함수나 벡터장을 적분한다. 미소 넓이 $dS = \\|\\mathbf{r}_u \\times \\mathbf{r}_v\\|\\,du\\,dv$이며, 벡터 면적분(유량)은 발산 정리와 스토크스 정리의 핵심 구성요소다."
  },
  "examples": [
    {
      "title": "평면 위 유량",
      "problem": "$\\mathbf{F} = (0,0,1)$의 $z=0$ 평면 $[0,1]^2$ 위로의 유량을 구하시오.",
      "steps": ["법선 $(0,0,1)$.", "$\\mathbf{F} \\cdot \\mathbf{n} = 1$.", "유량 $= 1$."],
      "answer": "$1$",
      "lesson": "평면의 면적분은 법선과 벡터장의 내적을 영역 위에서 적분한 것입니다."
    }
  ],
  "problems": [
    {
      "id": "10-1",
      "type": "number",
      "difficulty": 1,
      "question": "$\\mathbf{F} = (0,0,3)$이 $z=0$ 평면의 $[0,2] \\times [0,3]$ 영역을 통과하는 유량은?",
      "answer": "18",
      "hints": ["법선 $(0,0,1)$.", "$\\mathbf{F} \\cdot \\mathbf{n} = 3$.", "$3 \\times 6 = 18$."],
      "explanation": "법선 내적 $3$, 넓이 $6$, 유량 $18$.",
      "wrongAnalysis": "법선 방향을 반대로 잡으면 $-18$이 됩니다."
    },
    {
      "id": "10-2",
      "type": "choice",
      "difficulty": 2,
      "question": "곡면의 미소 넓이 요소 $dS$를 구할 때 필요한 것은?",
      "choices": ["매개변수 편미분의 합", "매개변수 편미분의 외적의 크기", "매개변수 편미분의 내적", "야코비안의 행렬식"],
      "answer": "매개변수 편미분의 외적의 크기",
      "hints": ["$dS = \\|\\mathbf{r}_u \\times \\mathbf{r}_v\\|\\,du\\,dv$."],
      "explanation": "외적의 크기가 미소 평행사변형의 넓이이므로 $dS = \\|\\mathbf{r}_u \\times \\mathbf{r}_v\\|\\,du\\,dv$.",
      "wrongAnalysis": "내적과 외적을 혼동하면 안 됩니다."
    },
    {
      "id": "10-3",
      "type": "number",
      "difficulty": 3,
      "question": "$z = x^2+y^2$, $x^2+y^2 \\leq 1$ 위에서 $\\iint_S 1\\,dS$(곡면 넓이)는? (소수 넷째자리)",
      "answer": "5.3304",
      "hints": ["$dS = \\sqrt{1+4x^2+4y^2}\\,dA$.", "극좌표: $\\int_0^{2\\pi}\\int_0^1 r\\sqrt{1+4r^2}\\,dr\\,d\\theta$."],
      "explanation": "$2\\pi \\cdot \\frac{1}{12}(5\\sqrt{5}-1) \\approx 5.3304$.",
      "wrongAnalysis": "$dS = dA$로 놓으면 $\\pi$가 되어 틀립니다."
    }
  ],
  "summary": {
    "keyPoints": ["스칼라 면적분: $\\iint_S f\\,dS$.", "벡터 면적분(유량): $\\iint_S \\mathbf{F} \\cdot d\\mathbf{S}$.", "$z=g(x,y)$이면 $dS = \\sqrt{1+g_x^2+g_y^2}\\,dA$."],
    "formulas": ["dS = \\|\\mathbf{r}_u \\times \\mathbf{r}_v\\|\\,du\\,dv"],
    "commonMistakes": ["$dS$에서 외적의 크기 누락", "법선 방향(안/밖) 혼동"],
    "nextConnection": "면적분을 알았으니, 다음 단원에서 발산 정리와 스토크스 정리를 배웁니다."
  }
}"""

new_lessons = {3: LESSON3, 5: LESSON5, 7: LESSON7, 10: LESSON10}

all_lessons = []
for lid in range(1, 12):
    if lid in new_lessons:
        all_lessons.append(new_lessons[lid])
    elif lid in lesson_map:
        all_lessons.append(lesson_map[lid])
    else:
        print(f"WARNING: Missing lesson {lid}")

full_content = 'import { Lesson } from "../../types";\n\nexport const multivariableCalculusLessons: Lesson[] = [\n' + ',\n'.join(all_lessons) + '\n];\n'

outpath = os.path.join(base, 'src/data/multivariable/lessons.ts')
with open(outpath, 'w', encoding='utf-8') as f:
    f.write(full_content)

ids_found = re.findall(r'"id": (\d+),', full_content)
print(f"Total lessons: {len(ids_found)}, IDs: {ids_found}")
print(f"File written: {outpath}")
