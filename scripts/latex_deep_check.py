import re
import sys

files = [
    'C:/Users/USER/Desktop/project/math/src/data/algebraLessons/algebraBasics.ts',
    'C:/Users/USER/Desktop/project/math/src/data/algebraLessons/groups.ts',
    'C:/Users/USER/Desktop/project/math/src/data/algebraLessons/groupAdvanced.ts',
    'C:/Users/USER/Desktop/project/math/src/data/algebraLessons/ringsAndFields.ts',
]

latex_commands = [
    'times', 'to', 'text', 'mathbb', 'langle', 'rangle', 'trianglelefteq',
    'left', 'right', 'frac', 'begin', 'end', 'hline', 'cdot', 'cdots',
    'ldots', 'neq', 'leq', 'geq', 'notin', 'subset', 'supset',
    'Rightarrow', 'Leftarrow', 'forall', 'exists', 'equiv', 'pmod',
    'mod', 'oplus', 'circ', 'checkmark', 'blacksquare', 'infty',
    'varphi', 'phi', 'varepsilon', 'quad', 'qquad',
    'min', 'max', 'gcd', 'log', 'ker', 'operatorname',
    'mathbf', 'mathrm', 'overline',
    'vdots', 'ddots', 'pm', 'cap', 'cup', 'setminus',
    'cong', 'sim', 'approx', 'iff', 'implies',
    'triangleleft', 'triangleright',
    'subseteq', 'supseteq', 'subsetneq',
    'otimes', 'bigoplus',
    'mathcal', 'binom', 'sqrt', 'sum', 'prod',
    'vert', 'mid', 'nmid',
    'vee', 'wedge', 'neg',
    'div', 'star',
]

BACKSLASH = chr(92)  # backslash character

for fpath in files:
    with open(fpath, 'r', encoding='utf-8') as f:
        content = f.read()

    fname = fpath.split('/')[-1]
    issues = []

    for cmd in latex_commands:
        # Find all occurrences of the command text
        start = 0
        while True:
            pos = content.find(cmd, start)
            if pos == -1:
                break
            start = pos + 1

            # Count consecutive backslashes immediately before this occurrence
            bs_count = 0
            p = pos - 1
            while p >= 0 and content[p] == BACKSLASH:
                bs_count += 1
                p -= 1

            # Check if this is actually part of a longer word
            # (e.g., 'times' could appear in 'sometimes')
            if pos + len(cmd) < len(content) and content[pos + len(cmd)].isalpha():
                # Check if the char after cmd is alpha - might be part of longer word
                # But only skip if there's NO backslash prefix
                if bs_count == 0:
                    continue

            # Also check char before backslashes to make sure we're in a string
            char_before_bs = content[p] if p >= 0 else ''

            if bs_count == 1:
                # Single backslash before command
                first = cmd[0]
                # JS escape sequences: \t \b \f \r \v \n \0 \u \x
                if first in 'tbfrvn':
                    lineno = content[:pos].count('\n') + 1
                    ctx_start = max(0, pos - 25)
                    ctx_end = min(len(content), pos + len(cmd) + 15)
                    ctx = content[ctx_start:ctx_end].replace('\n', '\\n')
                    issues.append((lineno, cmd, 'BROKEN: single backslash causes JS escape', repr(ctx)))

            elif bs_count == 2:
                # Double backslash = \\cmd in source = \cmd in runtime string = CORRECT
                pass

            elif bs_count == 0:
                # No backslash - not a LaTeX command, just regular text
                pass

    if issues:
        print(f'\n=== {fname} ===')
        for lineno, cmd, msg, ctx in sorted(set(issues)):
            print(f'  Line {lineno}: \\{cmd} - {msg}')
            print(f'    Context: {ctx}')
    else:
        print(f'\n=== {fname} === NO backslash issues found')


# Now check for alignment \\  in environments
print("\n\n=== ALIGNMENT NEWLINE CHECK ===")
for fpath in files:
    with open(fpath, 'r', encoding='utf-8') as f:
        content = f.read()

    fname = fpath.split('/')[-1]

    # Find begin{array}, begin{pmatrix}, begin{align} etc.
    env_pattern = re.compile(r'\\\\begin\{(array|align|pmatrix|bmatrix|cases|matrix)\}')
    for m in env_pattern.finditer(content):
        env = m.group(1)
        env_start = m.end()
        # Find matching end
        end_pattern = '\\\\end{' + env + '}'
        env_end = content.find(end_pattern, env_start)
        if env_end == -1:
            continue

        env_content = content[env_start:env_end]

        # In the source, line breaks in LaTeX environments need \\\\
        # which in source file is \\\\\\\\  (4 backslashes)
        # If there's only \\\\ (2 backslashes), that's just a literal \, not a line break

        # Count \\\\\\\\ (4 consecutive backslashes) - these are correct line breaks
        four_bs = env_content.count(BACKSLASH * 4)
        # Count \\\\ (2 consecutive backslashes) that aren't part of 4
        # Actually, let me just check if the env content has the right pattern

        lineno = content[:env_start].count('\n') + 1
        # Show the environment content for manual review
        short_content = env_content[:200].replace('\n', '\\n')
        print(f'\n  {fname} Line {lineno}: \\begin{{{env}}}')
        print(f'    Content: {repr(short_content)}')

print("\n\nDone.")
