import os, re, sys

files = [
    'src/data/complexAnalysis/basics.ts',
    'src/data/complexAnalysis/analyticity.ts',
    'src/data/complexAnalysis/integration.ts',
    'src/data/complexAnalysis/residues.ts',
    'src/data/complexAnalysis/conformal.ts',
    'src/data/complexAnalysis/advanced1.ts',
    'src/data/complexAnalysis/advanced2.ts',
]

# Check 1: Odd dollar signs per line
print("=== CHECK 1: Odd dollar sign count per line ===")
found_issues = False
for fpath in files:
    with open(fpath, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    fname = os.path.basename(fpath)
    for i, line in enumerate(lines, 1):
        count = line.count('$')
        if count % 2 != 0:
            found_issues = True
            print(f'{fname}:{i}: ODD dollar count ({count})')
if not found_issues:
    print("No issues found.")

# Check 2: Look for LaTeX commands with only single backslash in the source
# In the TS source, correct LaTeX escaping means \\frac (double backslash)
# A single \frac would be a bug
print("\n=== CHECK 2: Single-backslash LaTeX commands ===")
found_issues = False

# These are common LaTeX commands that should appear with \\ not \
latex_cmds = [
    'overline', 'operatorname', 'frac', 'oint', 'partial', 'nabla',
    'sqrt', 'mathbb', 'text', 'sin', 'cos', 'tan', 'log', 'ln',
    'exp', 'lim', 'sum', 'prod', 'infty', 'alpha', 'beta', 'gamma',
    'delta', 'theta', 'quad', 'qquad', 'cdot', 'cdots', 'ldots',
    'neq', 'leq', 'geq', 'Rightarrow', 'Leftarrow', 'subset', 'supset',
    'cup', 'cap', 'forall', 'exists', 'bar', 'hat', 'vec', 'tilde',
    'times', 'equiv', 'approx', 'sim', 'cong',
    'sinh', 'cosh', 'tanh', 'cot', 'sec', 'csc', 'arctan',
    'deg', 'det', 'dim', 'ker', 'limsup', 'liminf', 'Res',
]

for fpath in files:
    with open(fpath, 'r', encoding='utf-8') as f:
        content = f.read()
    fname = os.path.basename(fpath)
    lines = content.split('\n')
    for i, line in enumerate(lines, 1):
        for cmd in latex_cmds:
            # Search for \cmd that is not preceded by another backslash
            # i.e., find positions where we have exactly one backslash before cmd
            idx = 0
            while True:
                pos = line.find('\\' + cmd, idx)
                if pos == -1:
                    break
                # Check if preceded by another backslash
                if pos > 0 and line[pos-1] == '\\':
                    # This is \\cmd - correct (double backslash)
                    idx = pos + len(cmd) + 1
                    continue
                else:
                    # Single backslash - potential issue
                    # But check if this is in a comment or import line
                    stripped = line.strip()
                    if stripped.startswith('//') or stripped.startswith('import'):
                        idx = pos + len(cmd) + 1
                        continue
                    found_issues = True
                    ctx_start = max(0, pos - 15)
                    ctx_end = min(len(line), pos + len(cmd) + 16)
                    ctx = line[ctx_start:ctx_end]
                    print(f'{fname}:{i}: Single \\ before {cmd}')
                    print(f'  ...{ctx}...')
                idx = pos + len(cmd) + 1

if not found_issues:
    print("No issues found.")

# Check 3: Check for \\left without matching \\right and vice versa
print("\n=== CHECK 3: \\left/\\right balance in inline math ===")
found_issues = False
for fpath in files:
    with open(fpath, 'r', encoding='utf-8') as f:
        content = f.read()
    fname = os.path.basename(fpath)
    # Find all inline math expressions $...$
    # Simple approach: find $ pairs
    # Count \\left and \\right in each line
    lines = content.split('\n')
    for i, line in enumerate(lines, 1):
        left_count = line.count('\\\\left')
        right_count = line.count('\\\\right')
        if left_count != right_count:
            found_issues = True
            print(f'{fname}:{i}: \\left ({left_count}) != \\right ({right_count})')
if not found_issues:
    print("No issues found.")

# Check 4: Check for unmatched braces in inline math
print("\n=== CHECK 4: Brace balance check in inline math ===")
found_issues = False
for fpath in files:
    with open(fpath, 'r', encoding='utf-8') as f:
        content = f.read()
    fname = os.path.basename(fpath)
    lines = content.split('\n')
    for i, line in enumerate(lines, 1):
        # Extract text between $ signs
        parts = line.split('$')
        # Math parts are at indices 1, 3, 5, etc.
        for j in range(1, len(parts), 2):
            math = parts[j]
            opens = math.count('{')
            closes = math.count('}')
            if opens != closes:
                found_issues = True
                if len(math) > 100:
                    math = math[:100] + '...'
                print(f'{fname}:{i}: Brace mismatch in math ({{ {opens} vs }} {closes})')
                print(f'  ${math}$')
if not found_issues:
    print("No issues found.")

# Check 5: \\operatorname usage
print("\n=== CHECK 5: operatorname usage ===")
for fpath in files:
    with open(fpath, 'r', encoding='utf-8') as f:
        content = f.read()
    fname = os.path.basename(fpath)
    count = content.count('\\\\operatorname')
    text_res = content.count('\\\\text{Res}')
    op_res = content.count('\\\\operatorname{Res}')
    op_re = content.count('\\\\operatorname{Re}')
    op_im = content.count('\\\\operatorname{Im}')
    text_re2 = content.count('\\\\text{Re}')
    text_im2 = content.count('\\\\text{Im}')
    text_log = content.count('\\\\text{Log}')
    text_arg = content.count('\\\\text{Arg}')
    if any([count, text_res, text_re2, text_im2, text_log, text_arg]):
        print(f'{fname}: \\operatorname: {count}, \\text{{Res}}: {text_res}, \\operatorname{{Res}}: {op_res}, \\text{{Re}}: {text_re2}, \\text{{Im}}: {text_im2}, \\text{{Log}}: {text_log}, \\text{{Arg}}: {text_arg}')

# Check 6: Alignment \\\\ in begin/end environments
print("\n=== CHECK 6: Alignment environments ===")
for fpath in files:
    with open(fpath, 'r', encoding='utf-8') as f:
        content = f.read()
    fname = os.path.basename(fpath)
    if '\\\\begin{' in content:
        print(f'{fname}: Contains \\begin environments')
        # Check for cases in JS
        cases_count = content.count('\\\\begin{cases}')
        print(f'  \\begin{{cases}} count: {cases_count}')
        # Check that \\\\ (4 backslashes in source = \\\\ in JS = \\ in LaTeX) is used
        # for line breaks in cases environment
        align_breaks = content.count('\\\\\\\\')
        double_breaks = content.count('\\\\\\\\\\\\\\\\')
        print(f'  Four-backslash (\\\\\\\\) count: {align_breaks}')

print("\nAudit complete.")
