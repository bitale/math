import re
import sys

files = [
    'C:/Users/USER/Desktop/project/math/src/data/algebraLessons/algebraBasics.ts',
    'C:/Users/USER/Desktop/project/math/src/data/algebraLessons/groups.ts',
    'C:/Users/USER/Desktop/project/math/src/data/algebraLessons/groupAdvanced.ts',
    'C:/Users/USER/Desktop/project/math/src/data/algebraLessons/ringsAndFields.ts',
]

for fpath in files:
    with open(fpath, 'r', encoding='utf-8') as f:
        content = f.read()
        lines = content.split('\n')

    fname = fpath.split('/')[-1]
    print(f'\n{"="*60}')
    print(f'FILE: {fname}')
    print(f'{"="*60}')

    found_issues = False

    for i, line in enumerate(lines, 1):
        if '"' not in line:
            continue

        # In raw .ts source file:
        # A single \ before t,b,f,r,v,n means JS will interpret it as an escape
        # We need \\ (two chars in source) to get a literal backslash
        # So \\times in source = \times in runtime = correct LaTeX
        # But \times in source = <tab>imes = BROKEN

        # In the source file, let's look for patterns where a backslash
        # is NOT preceded by another backslash, followed by problematic letters

        # Check character by character
        j = 0
        while j < len(line):
            if line[j] == '\\' and j + 1 < len(line):
                # Check if preceded by another backslash (making it an escaped backslash)
                if j > 0 and line[j-1] == '\\':
                    j += 2  # skip, this is \\x which is fine
                    continue

                next_char = line[j+1]
                rest = line[j+1:]

                # Check for JS-problematic escapes followed by LaTeX command continuations
                if next_char == 't':
                    for cmd in ['times', 'text', 'to', 'trianglelefteq', 'triangleleft', 'theta', 'tau']:
                        if rest.startswith(cmd):
                            # But check it's not already double-escaped
                            if j > 0 and line[j-1] == '\\':
                                break
                            print(f'  Line {i}: SINGLE \\{cmd} (should be \\\\{cmd})')
                            found_issues = True
                            break

                elif next_char == 'b':
                    for cmd in ['begin', 'binom', 'blacksquare', 'bullet', 'bot', 'bar']:
                        if rest.startswith(cmd):
                            if j > 0 and line[j-1] == '\\':
                                break
                            print(f'  Line {i}: SINGLE \\{cmd} (should be \\\\{cmd})')
                            found_issues = True
                            break

                elif next_char == 'f':
                    for cmd in ['frac', 'forall']:
                        if rest.startswith(cmd):
                            if j > 0 and line[j-1] == '\\':
                                break
                            print(f'  Line {i}: SINGLE \\{cmd} (should be \\\\{cmd})')
                            found_issues = True
                            break

                elif next_char == 'r':
                    for cmd in ['rangle', 'right']:
                        if rest.startswith(cmd):
                            if j > 0 and line[j-1] == '\\':
                                break
                            print(f'  Line {i}: SINGLE \\{cmd} (should be \\\\{cmd})')
                            found_issues = True
                            break

                elif next_char == 'v':
                    for cmd in ['varphi', 'varepsilon', 'vdots', 'vee', 'vert']:
                        if rest.startswith(cmd):
                            if j > 0 and line[j-1] == '\\':
                                break
                            print(f'  Line {i}: SINGLE \\{cmd} (should be \\\\{cmd})')
                            found_issues = True
                            break
            j += 1

    # Check $ balance in each string literal
    string_pat = re.compile(r'"((?:[^"\\]|\\.)*)"')
    for i, line in enumerate(lines, 1):
        for m in string_pat.finditer(line):
            s = m.group(1)
            dollar_count = s.count('$')
            if dollar_count % 2 != 0:
                truncated = s[:120] + ('...' if len(s) > 120 else '')
                print(f'  Line {i}: ODD $ count ({dollar_count}): {truncated}')
                found_issues = True

    if not found_issues:
        print('  No issues found.')

print('\n\nDone.')
