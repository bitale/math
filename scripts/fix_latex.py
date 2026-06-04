import re, os

base = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
path = os.path.join(base, 'src/data/multivariable/lessons.ts')

with open(path, 'r', encoding='utf-8') as f:
    c = f.read()

# Find boundaries of new lessons (3, 5, 7, 10) which have broken LaTeX
new_ids = [3, 5, 7, 10]
all_ids = [1,2,3,4,5,6,7,8,9,10,11]

fixes_made = 0

for lid in new_ids:
    start = c.find('"id": {},'.format(lid))
    if start < 0:
        print("Lesson {}: NOT FOUND".format(lid))
        continue

    # Find next lesson
    end = len(c)
    for nid in all_ids:
        if nid <= lid:
            continue
        ns = c.find('"id": {},'.format(nid), start + 20)
        if ns > 0:
            # Go back to find the },\n{ boundary
            boundary = c.rfind('},\n{', start, ns)
            if boundary > 0:
                end = boundary + 2  # include the }
            break

    chunk = c[start:end]
    original = chunk

    # LaTeX commands to fix (single \ -> double \\)
    cmds = [
        'frac', 'partial', 'times', 'cdot', 'sqrt', 'div', 'leq', 'geq', 'neq',
        'text', 'nabla', 'mathbf', 'quad', 'pm', 'infty', 'ldots', 'approx',
        'square', 'triangle', 'bigcirc', 'Rightarrow', 'oint', 'lim', 'sum',
        'iint', 'iiint', 'left', 'right', 'begin', 'end', 'sec', 'csc', 'cot',
        'sin', 'cos', 'tan', 'pi', 'rho', 'phi', 'theta', 'ln', 'log',
    ]

    for cmd in cmds:
        # Replace \cmd with \\cmd, but not \\cmd (already escaped)
        # Strategy: first find all \cmd that aren't preceded by another \
        old = '\\' + cmd
        new = '\\\\' + cmd
        # Only replace if not already doubled
        chunk = chunk.replace('\\\\' + cmd, '\x00PLACEHOLDER_' + cmd + '\x00')
        chunk = chunk.replace('\\' + cmd, '\\\\' + cmd)
        chunk = chunk.replace('\x00PLACEHOLDER_' + cmd + '\x00', '\\\\' + cmd)

    # Fix \, (thin space)
    chunk = chunk.replace('\\\\,', '\x00THINSPACE\x00')
    chunk = chunk.replace('\\,', '\\\\,')
    chunk = chunk.replace('\x00THINSPACE\x00', '\\\\,')

    if chunk != original:
        c = c[:start] + chunk + c[end:]
        fixes_made += 1
        print("Lesson {}: FIXED".format(lid))
    else:
        print("Lesson {}: no changes needed".format(lid))

with open(path, 'w', encoding='utf-8') as f:
    f.write(c)

print("\nTotal lessons fixed: {}".format(fixes_made))
