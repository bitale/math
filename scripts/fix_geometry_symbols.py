"""
geometry.ts에서 초등학생에게 맞지 않는 기호를 한글로 변환하는 스크립트.
- $\pi$ → 원주율(3.14) 또는 3.14
- $V = abc$ → (부피) = (가로) × (세로) × (높이)
- $V = \pi r^2 h$ → (부피) = (반지름) × (반지름) × 3.14 × (높이)
- $S = 2(ab + bc + ca)$ → 겉넓이 풀어쓰기
- $r$, $h$, $a$, $b$, $c$ → 반지름, 높이, 가로, 세로, 높이
"""
import os

base = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
path = os.path.join(base, 'src/data/elementary/geometry.ts')

with open(path, 'r', encoding='utf-8') as f:
    c = f.read()

# === 원 레슨 (lesson 13) ===
# $\pi$ in non-formula contexts → 원주율(3.14)
c = c.replace('원주율($\\pi$)', '원주율(3.14)')
c = c.replace('원주율($\\pi \\approx 3.14$)', '원주율(3.14)')
c = c.replace('($\\pi \\approx 3.14$)', '(3.14)')

# Circle formulas: replace letter-based with word-based
c = c.replace('$C = 2\\pi r$', '(둘레) $=$ (반지름) $\\times 2 \\times 3.14$')
c = c.replace('$C = \\pi d$', '(둘레) $= $ (지름) $\\times 3.14$')
c = c.replace('$A = \\pi r^2$', '(넓이) $=$ (반지름) $\\times$ (반지름) $\\times 3.14$')
c = c.replace('$C = 2 \\times 3.14 \\times', '(둘레) $= 2 \\times 3.14 \\times')
c = c.replace('$A = 3.14 \\times', '(넓이) $= 3.14 \\times')

# $d = 2r$ → (지름) = (반지름) × 2
c = c.replace('$d = 2r$', '(지름) $=$ (반지름) $\\times 2$')
c = c.replace('$r = \\frac{d}{2}$', '(반지름) $=$ (지름) $\\div 2$')

# Replace standalone $r$ with (반지름) in circle context
c = c.replace('$r = 3$', '반지름 $= 3$')
c = c.replace('$r = 5$', '반지름 $= 5$')
c = c.replace('$r^2 = 9$', '반지름의 제곱 $= 9$')
c = c.replace('$r^2$', '반지름$^2$')
c = c.replace('$r$을', '반지름을')
c = c.replace('$r$을', '반지름을')

# === 입체도형 레슨 (lesson 15) ===
# Volume formulas
c = c.replace('$V = abc$', '(부피) $=$ (가로) $\\times$ (세로) $\\times$ (높이)')
c = c.replace('$V = abc = ', '(부피) $= $ ')
c = c.replace('$V = \\pi r^2 h$', '(부피) $=$ (반지름) $\\times$ (반지름) $\\times 3.14 \\times$ (높이)')
c = c.replace('$V = 3.14 \\times 2^2 \\times 5', '(부피) $= 3.14 \\times 2^2 \\times 5')
c = c.replace('$V = \\pi r^2 h = 3.14', '(부피) $= 3.14')
c = c.replace('$V = 2 \\times 3 \\times 4$', '(부피) $= 2 \\times 3 \\times 4$')

# Surface area formulas
c = c.replace('$S = 2(ab + bc + ca)$', '(겉넓이) $= 2 \\times$ ((가로$\\times$세로) $+$ (세로$\\times$높이) $+$ (높이$\\times$가로))')
c = c.replace('$S = 2(ab + bc + ca) = ', '(겉넓이) $= ')
c = c.replace('$S = 2\\pi r^2 + 2\\pi rh$', '(겉넓이) $=$ (밑면 넓이 $\\times 2$) $+$ (옆면 넓이)')
c = c.replace('\\text{직육면체 겉넓이: } S = 2(ab + bc + ca)', '\\text{직육면체 겉넓이} = 2 \\times ((\\text{가로}\\times\\text{세로}) + (\\text{세로}\\times\\text{높이}) + (\\text{높이}\\times\\text{가로}))')
c = c.replace('\\text{직육면체 부피: } V = abc', '\\text{직육면체 부피} = \\text{가로} \\times \\text{세로} \\times \\text{높이}')
c = c.replace('\\text{원기둥 겉넓이: } S = 2\\pi r^2 + 2\\pi rh', '\\text{원기둥 겉넓이} = (\\text{밑면 넓이}) \\times 2 + (\\text{옆면 넓이})')
c = c.replace('\\text{원기둥 부피: } V = \\pi r^2 h', '\\text{원기둥 부피} = \\text{반지름} \\times \\text{반지름} \\times 3.14 \\times \\text{높이}')
c = c.replace('\\text{원기둥 부피: } V = \\pi r^2 h', '\\text{원기둥 부피} = \\text{반지름} \\times \\text{반지름} \\times 3.14 \\times \\text{높이}')

# Remaining $\pi r^2$ in explanations
c = c.replace('$\\pi r^2$', '(반지름 $\\times$ 반지름 $\\times 3.14$)')
c = c.replace('$\\pi \\times r$', '$3.14 \\times$ 반지름')
c = c.replace('$\\pi \\times 3$', '$3.14 \\times 3$')

# $r = 2$ in cylinder problem
c = c.replace('$r = 2$', '반지름 $= 2$')
c = c.replace('$r^3$', '반지름$^3$')

with open(path, 'w', encoding='utf-8') as f:
    f.write(c)

# Count remaining issues
import re
remaining_pi = len(re.findall(r'\\pi', c))
remaining_vars = len(re.findall(r'\$[VCSrhab]\$', c))
print(f"Remaining \\pi: {remaining_pi}, Remaining single-letter vars: {remaining_vars}")
print("Done")
