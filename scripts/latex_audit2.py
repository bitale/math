import re
import sys

files = [
    'C:/Users/USER/Desktop/project/math/src/data/algebraLessons/algebraBasics.ts',
    'C:/Users/USER/Desktop/project/math/src/data/algebraLessons/groups.ts',
    'C:/Users/USER/Desktop/project/math/src/data/algebraLessons/groupAdvanced.ts',
    'C:/Users/USER/Desktop/project/math/src/data/algebraLessons/ringsAndFields.ts',
]

# LaTeX commands that MUST have double backslash in JS/TS strings
# because single backslash + first letter creates a JS escape sequence
JS_ESCAPE_COMMANDS = {
    't': ['times', 'text', 'to', 'trianglelefteq', 'triangleleft', 'triangleright',
          'theta', 'tau', 'tilde'],
    'b': ['begin', 'binom', 'blacksquare', 'bullet', 'bot', 'bar', 'bf'],
    'f': ['frac', 'forall'],
    'r': ['rangle', 'right', 'rhd'],
    'v': ['varphi', 'varepsilon', 'vdots', 'vee', 'vert'],
    'n': ['neq', 'notin', 'not', 'neg', 'nmid', 'nsubseteq'],
    '0': [],
}

# LaTeX commands that DON'T collide with JS escapes but still need \\
# (In strict mode or template literals, \m is just \m, so these work with single \)
# But best practice is still to double-escape. Let's check what the file actually does.

def extract_strings(content):
    """Extract all string literals from the TS file content with line numbers."""
    strings = []
    lines = content.split('\n')
    for i, line in enumerate(lines, 1):
        # Find all double-quoted strings
        in_string = False
        start = -1
        j = 0
        while j < len(line):
            if not in_string and line[j] == '"':
                in_string = True
                start = j + 1
            elif in_string:
                if line[j] == '\\' and j + 1 < len(line):
                    j += 1  # skip escaped char
                elif line[j] == '"':
                    strings.append((i, line[start:j], line))
                    in_string = False
            j += 1
    return strings


def check_backslash_escaping(content, fname):
    """Check that all LaTeX commands use double backslashes."""
    lines = content.split('\n')
    issues = []

    for i, line in enumerate(lines, 1):
        if '"' not in line:
            continue

        # Look at the raw characters
        j = 0
        while j < len(line):
            if line[j] == '\\':
                # Count consecutive backslashes
                bs_start = j
                while j < len(line) and line[j] == '\\':
                    j += 1
                bs_count = j - bs_start

                if j >= len(line):
                    break

                next_part = line[j:]

                # If odd number of backslashes, the last one is an actual escape
                if bs_count % 2 == 1:
                    first_char = line[j] if j < len(line) else ''
                    if first_char in JS_ESCAPE_COMMANDS:
                        for cmd in JS_ESCAPE_COMMANDS[first_char]:
                            if next_part.startswith(cmd):
                                ctx = line[max(0, bs_start-20):min(len(line), j+len(cmd)+20)]
                                issues.append((i, f'SINGLE \\{cmd} -> JS escape issue', ctx))
                                break
            else:
                j += 1

    return issues


def check_dollar_balance(content, fname):
    """Check that $ signs are balanced within each string."""
    issues = []
    strings = extract_strings(content)

    for lineno, s, full_line in strings:
        # Count $ that are not escaped
        count = 0
        j = 0
        while j < len(s):
            if s[j] == '\\' and j + 1 < len(s):
                j += 2  # skip escaped char
                continue
            if s[j] == '$':
                count += 1
            j += 1

        if count % 2 != 0:
            truncated = s[:150] + ('...' if len(s) > 150 else '')
            issues.append((lineno, f'ODD $ count ({count})', truncated))

    return issues


def check_brace_balance(content, fname):
    """Check for unmatched braces in LaTeX expressions within strings."""
    issues = []
    strings = extract_strings(content)

    for lineno, s, full_line in strings:
        # Only check strings that contain LaTeX (have $ or \\)
        if '$' not in s and '\\\\' not in s:
            continue

        open_count = 0
        close_count = 0
        for ch in s:
            if ch == '{':
                open_count += 1
            elif ch == '}':
                close_count += 1

        if open_count != close_count:
            truncated = s[:150] + ('...' if len(s) > 150 else '')
            issues.append((lineno, f'BRACE mismatch (open={open_count}, close={close_count})', truncated))

    return issues


def check_left_right_matching(content, fname):
    """Check that \\left and \\right are properly paired."""
    issues = []
    strings = extract_strings(content)

    for lineno, s, full_line in strings:
        left_count = len(re.findall(r'\\\\left[^a-zA-Z]', s))
        right_count = len(re.findall(r'\\\\right[^a-zA-Z]', s))

        if left_count != right_count:
            truncated = s[:150] + ('...' if len(s) > 150 else '')
            issues.append((lineno, f'\\left/\\right mismatch (left={left_count}, right={right_count})', truncated))

    return issues


def check_alignment_newlines(content, fname):
    """Check that alignment environments use \\\\\\\\ (four backslashes in source) for line breaks."""
    issues = []
    strings = extract_strings(content)

    for lineno, s, full_line in strings:
        # Check if string contains alignment environments
        if '\\\\begin{' in s:
            env_match = re.search(r'\\\\begin\{(array|align|pmatrix|bmatrix|cases|matrix)', s)
            if env_match:
                env = env_match.group(1)
                # In these environments, line breaks should be \\\\ which in source is \\\\\\\\
                # But if there's only \\\\ (two backslashes in source), that's just a literal backslash
                # Let me check: between \\begin{...} and \\end{...}, look for \\\\ that aren't \\\\\\\\
                # Actually, the convention may vary. Let me just check.
                pass

    return issues


def check_common_latex_issues(content, fname):
    """Check for common LaTeX syntax problems."""
    issues = []
    lines = content.split('\n')

    for i, line in enumerate(lines, 1):
        if '"' not in line:
            continue

        # Check for \\checkmark outside of $ (should be in math mode or use unicode)
        # This is just informational

        # Check for common misspellings
        if '\\\\timse' in line or '\\\\tmes' in line:
            issues.append((i, 'Misspelled LaTeX command', line.strip()[:100]))

        # Check for \\\\ at end of last row in array/matrix (causes extra blank row)
        # This is style, not necessarily broken

    return issues


for fpath in files:
    with open(fpath, 'r', encoding='utf-8') as f:
        content = f.read()

    fname = fpath.split('/')[-1]
    print(f'\n{"="*60}')
    print(f'FILE: {fname}')
    print(f'{"="*60}')

    all_issues = []

    all_issues.extend(check_backslash_escaping(content, fname))
    all_issues.extend(check_dollar_balance(content, fname))
    all_issues.extend(check_brace_balance(content, fname))
    all_issues.extend(check_left_right_matching(content, fname))
    all_issues.extend(check_common_latex_issues(content, fname))

    if not all_issues:
        print('  No issues found.')
    else:
        for lineno, msg, ctx in sorted(all_issues, key=lambda x: x[0]):
            print(f'  Line {lineno}: {msg}')
            print(f'    Context: {ctx[:200]}')

print('\n\nDone.')
