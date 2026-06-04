import re, os

base = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
path = os.path.join(base, 'src/data/multivariable/lessons.ts')

with open(path, 'r', encoding='utf-8') as f:
    c = f.read()

# 1. Swap IDs: 11(미분형식) <-> 12(발산스토크스)
c = c.replace('"id": 11,', '"id": 99,')
c = c.replace('"id": "11-1"', '"id": "99-1"')
c = c.replace('"id": "11-2"', '"id": "99-2"')
c = c.replace('"id": "11-3"', '"id": "99-3"')

c = c.replace('"id": 12,', '"id": 11,')
c = c.replace('"id": "12-1"', '"id": "11-1"')
c = c.replace('"id": "12-2"', '"id": "11-2"')
c = c.replace('"id": "12-3"', '"id": "11-3"')

c = c.replace('"id": 99,', '"id": 12,')
c = c.replace('"id": "99-1"', '"id": "12-1"')
c = c.replace('"id": "99-2"', '"id": "12-2"')
c = c.replace('"id": "99-3"', '"id": "12-3"')

print("IDs swapped: 11<->12")

# 2. Fix double-escaped newlines in the 미분형식 lesson (now id 12)
# The intro and intuition have \\n where they should have \n
idx = c.find('"id": 12,\n  "title": "\xeb\xaf\xb8\xeb\xb6\x84')  # "미분" in UTF-8
if idx < 0:
    # Try another way to find it
    idx = c.find('"id": 12,')
    # Find the second occurrence (first is 발산 정리 which was just renumbered)
    all_12 = [m.start() for m in re.finditer('"id": 12,', c)]
    print(f"Found 'id: 12' at positions: {all_12}")
    # The 미분형식 lesson should be the one with "외미분" in it
    for pos in all_12:
        if '외미분' in c[pos:pos+200]:
            idx = pos
            break

if idx > 0:
    # Find boundaries of intro and intuition
    intro_start = c.find('"intro":', idx)
    intuition_start = c.find('"intuition":', idx)
    formula_start = c.find('"formula":', idx)

    if intro_start > 0 and intuition_start > 0 and formula_start > 0:
        intro_chunk = c[intro_start:intuition_start]
        intuition_chunk = c[intuition_start:formula_start]

        # Replace \\n (double-escaped, shows as literal \n) with \n (proper newline escape)
        # In the file: \\n appears as two chars (backslash, n)
        # We want: \n which is a single newline escape
        # But we must NOT break \\nabla, \\neq etc

        # Strategy: replace \\n followed by \\n, **, $$, ', (, space, or capital letter
        # These are clearly newlines, not LaTeX commands
        import re

        def fix_newlines(text):
            # \\n\\n -> \n\n (double newline)
            text = text.replace('\\\\n\\\\n', '\\n\\n')
            # \\n followed by non-LaTeX: \\n** \\n$$ \\n( etc
            text = re.sub(r'\\\\n(\*\*)', r'\\n\1', text)
            text = re.sub(r'\\\\n(\$\$)', r'\\n\1', text)
            text = re.sub(r'\\\\n(\$[^$])', r'\\n\1', text)
            text = re.sub(r'\\\\n(이|지|여|라|웨)', r'\\n\1', text)
            # Any remaining \\n not followed by a-z (LaTeX command) -> \n
            text = re.sub(r'\\\\n(?![a-z])', r'\\n', text)
            return text

        fixed_intro = fix_newlines(intro_chunk)
        fixed_intuition = fix_newlines(intuition_chunk)

        c = c[:intro_start] + fixed_intro + fixed_intuition + c[formula_start:]
        print("Fixed newlines in 미분형식 lesson")
    else:
        print(f"Could not find field boundaries: intro={intro_start}, intuition={intuition_start}, formula={formula_start}")
else:
    print("Could not find 미분형식 lesson")

# 3. Fix nextConnections
old_nc = [
    ('면적분을 알았으니, 다음 단원에서 미분형식과 외미분을 배워 그린\xc2\xb7스토크스\xc2\xb7발산 정리를 하나로 통합합니다.',
     '면적분을 알았으니, 다음 단원에서 발산 정리와 스토크스 정리를 배웁니다.'),
]

for old, new in old_nc:
    if old in c:
        c = c.replace(old, new)
        print(f"Fixed nextConnection: {old[:30]}...")

# Also fix the 미분형식 -> 발산스토크스 connection
c = c.replace(
    '미분형식으로 통합된 시각을 갖추었으니, 다음 단원에서 발산 정리와 스토크스 정리를 구체적으로 증명하고 계산합니다.',
    '발산 정리와 스토크스 정리를 배웠으니, 다음 단원에서 미분형식과 외미분으로 이 모든 정리를 대통합합니다.'
)

# Fix the final nextConnection
c = c.replace(
    '이제 미분방정식의 세계로 넘어갑니다!',
    '미분형식과 외미분으로 벡터 미적분을 대통합했습니다!'
)

with open(path, 'w', encoding='utf-8') as f:
    f.write(c)

ids = re.findall(r'"id": (\d+),', c)
print(f"\nFinal IDs: {ids}")
