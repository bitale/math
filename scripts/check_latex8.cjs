const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'src', 'data', 'setTheoryLessons');
const files = ['basics.ts', 'axioms.ts', 'operations.ts', 'relations.ts', 'functions.ts', 'induction.ts', 'infinity.ts', 'cardinals.ts', 'applications.ts'];

let totalIssues = 0;

function extractStrings(content) {
  const results = [];
  let inStr = false;
  let strContent = '';
  let strStartLine = 0;

  const lines = content.split('\n');
  for (let lineNum = 0; lineNum < lines.length; lineNum++) {
    const line = lines[lineNum];
    for (let i = 0; i < line.length; i++) {
      if (!inStr) {
        if (line[i] === '"') {
          inStr = true;
          strContent = '';
          strStartLine = lineNum + 1;
        }
      } else {
        if (line[i] === '\\' && i + 1 < line.length) {
          strContent += line[i] + line[i + 1];
          i++;
        } else if (line[i] === '"') {
          inStr = false;
          let actual;
          try {
            actual = JSON.parse('"' + strContent + '"');
          } catch (e) {
            continue;
          }
          results.push({ value: actual, line: strStartLine, raw: strContent });
        } else {
          strContent += line[i];
        }
      }
    }
  }
  return results;
}

function tokenize(input) {
  const segments = [];
  let buffer = '';
  let i = 0;
  while (i < input.length) {
    const ch = input[i];
    if (ch === '\\' && (input[i + 1] === '$' || input[i + 1] === '\\')) {
      buffer += input[i + 1]; i += 2; continue;
    }
    if (ch === '$' && input[i + 1] === '$') {
      const end = input.indexOf('$$', i + 2);
      if (end === -1) { buffer += input.slice(i); i = input.length; }
      else {
        if (buffer) segments.push({ type: 'text', content: buffer, display: false }); buffer = '';
        segments.push({ type: 'math', content: input.slice(i + 2, end), display: true }); i = end + 2;
      }
      continue;
    }
    if (ch === '$') {
      const end = input.indexOf('$', i + 1);
      if (end === -1) { buffer += input.slice(i); i = input.length; }
      else {
        if (buffer) segments.push({ type: 'text', content: buffer, display: false }); buffer = '';
        segments.push({ type: 'math', content: input.slice(i + 1, end), display: false }); i = end + 1;
      }
      continue;
    }
    buffer += ch; i += 1;
  }
  if (buffer) segments.push({ type: 'text', content: buffer, display: false });
  return segments;
}

for (const fname of files) {
  const filepath = path.join(dir, fname);
  const content = fs.readFileSync(filepath, 'utf8');
  const issues = [];
  const strings = extractStrings(content);

  for (const s of strings) {
    const val = s.value;
    if (!val.includes('$') && !val.includes('\\')) continue;

    // Check for common issues in string content:

    // 1. Check for bare \to that became a tab + "o"
    // In runtime string, \t becomes tab char, so "\\to" -> "\to" (correct), but "\to" -> tab+"o" (broken)
    // We already confirmed this isn't happening. But let's double check by looking for tab chars
    if (val.includes('\t')) {
      issues.push(`L${s.line}: STRING CONTAINS TAB CHARACTER: "${val.substring(0, 80)}..."`);
    }

    // 2. Check for text fields that have formulas without proper $ wrapping
    // e.g. "A \\cup B" without being inside $...$
    // This would render as literal text "A \cup B" instead of math

    // 3. Check for \text{} with unmatched braces
    const textBlocks = val.match(/\\text\{/g);
    if (textBlocks) {
      // Count \text{ vs matching }
      let idx = 0;
      while ((idx = val.indexOf('\\text{', idx)) !== -1) {
        let depth = 0;
        let j = idx + 5; // position of {
        let foundClose = false;
        for (; j < val.length; j++) {
          if (val[j] === '{') depth++;
          else if (val[j] === '}') {
            depth--;
            if (depth === 0) { foundClose = true; break; }
          }
          else if (val[j] === '\\' && j + 1 < val.length) j++; // skip escaped
        }
        if (!foundClose) {
          issues.push(`L${s.line}: UNCLOSED \\text{: "${val.substring(idx, Math.min(idx + 60, val.length))}..."`);
        }
        idx += 6;
      }
    }

    // 4. Check for $...$ containing just spaces or empty
    const segs = tokenize(val);
    for (const seg of segs) {
      if (seg.type === 'math' && seg.content.trim() === '') {
        issues.push(`L${s.line}: EMPTY MATH $$ in: "${val.substring(0, 80)}..."`);
      }
    }

    // 5. Check for unbalanced $...$ that swallows text
    // If a $ is opened but the closing $ is very far away, it might be swallowing text

    // 6. Check for \\{...\\} set notation issues
    // In formulas, set braces should use \\{ and \\}
    // If someone wrote \{ in source, it becomes just { in runtime (grouping, not visible brace)
    // Let's check for patterns like = {1, 2, 3} inside $...$ that should be = \{1, 2, 3\}
    for (const seg of segs) {
      if (seg.type !== 'math') continue;
      const math = seg.content;

      // Look for number lists in bare braces: {1, 2, 3} should be \{1, 2, 3\}
      // Pattern: { followed by numbers/commas/spaces and } without preceding \
      const bareSetRe = /(?<!\\)\{(\s*\d[\d\s,]*)\}(?!\\)/g;
      let bm;
      // Actually this is tricky - { } are valid LaTeX grouping.
      // Only report if it looks like it should be a set: {a, b, c} pattern
    }

    // 7. Check for formulas/formula summary fields containing plain Korean without \text{}
    // (These are rendered as display LaTeX)
  }

  // Check formula and formulas fields specifically
  // Find all "formula" fields and check each line
  const formulaRe = /"formula"\s*:\s*"((?:[^"\\]|\\.)*)"/g;
  let m;
  while ((m = formulaRe.exec(content)) !== null) {
    let actual;
    try { actual = JSON.parse('"' + m[1] + '"'); } catch (e) { continue; }
    const lineNum = content.substring(0, m.index).split('\n').length;

    const formulaLines = actual.split('\n').filter(l => l.trim().length > 0);
    for (let fl of formulaLines) {
      // Check if this is pure Korean text that should have \text{} or not be in formula
      const hasLatexCmd = /\\[a-zA-Z]/.test(fl);
      const hasKorean = /[\uAC00-\uD7A3]/.test(fl);
      const hasMathSymbols = /[=+\-*/^_{}\\|<>]/.test(fl);

      if (hasKorean && !hasLatexCmd && !fl.includes('$')) {
        // Pure Korean text in formula field - will render poorly
        issues.push(`L${lineNum}: PLAIN KOREAN in formula (needs \\text{}): "${fl.substring(0, 80)}"`);
      }

      // Check for Korean text mixed with LaTeX but not in \text{}
      if (hasKorean && hasLatexCmd) {
        // Find Korean segments not inside \text{...}
        let cleaned = fl;
        // Remove \text{...} blocks
        cleaned = cleaned.replace(/\\text\{[^}]*\}/g, '');
        if (/[\uAC00-\uD7A3]/.test(cleaned)) {
          // Korean text outside \text{} in LaTeX formula
          issues.push(`L${lineNum}: KOREAN outside \\text{} in formula: "${fl.substring(0, 80)}"`);
        }
      }
    }
  }

  // Check formulas arrays
  const formulasRe = /"formulas"\s*:\s*\[/g;
  while ((m = formulasRe.exec(content)) !== null) {
    const lineNum = content.substring(0, m.index).split('\n').length;
    let i = m.index + m[0].length;
    let depth = 1;
    let arrayContent = '';
    while (i < content.length && depth > 0) {
      if (content[i] === '[') depth++;
      if (content[i] === ']') depth--;
      if (depth > 0) arrayContent += content[i];
      i++;
    }

    const strRe = /"((?:[^"\\]|\\.)*)"/g;
    let sm;
    while ((sm = strRe.exec(arrayContent)) !== null) {
      let actual;
      try { actual = JSON.parse('"' + sm[1] + '"'); } catch (e) { continue; }

      const hasLatexCmd = /\\[a-zA-Z]/.test(actual);
      const hasKorean = /[\uAC00-\uD7A3]/.test(actual);

      if (hasKorean && !hasLatexCmd && !actual.includes('$')) {
        issues.push(`L${lineNum}: PLAIN KOREAN in formulas[] (needs \\text{}): "${actual.substring(0, 80)}"`);
      }

      if (hasKorean && hasLatexCmd) {
        let cleaned = actual.replace(/\\text\{[^}]*\}/g, '');
        if (/[\uAC00-\uD7A3]/.test(cleaned)) {
          issues.push(`L${lineNum}: KOREAN outside \\text{} in formulas[]: "${actual.substring(0, 80)}"`);
        }
      }
    }
  }

  if (issues.length > 0) {
    const unique = [...new Set(issues)];
    console.log(`\n=== ${fname} (${unique.length} issues) ===`);
    unique.forEach(i => console.log('  ' + i));
    totalIssues += unique.length;
  } else {
    console.log(`\n=== ${fname}: OK ===`);
  }
}

console.log(`\nTotal issues: ${totalIssues}`);
