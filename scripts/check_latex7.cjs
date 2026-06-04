const fs = require('fs');
const path = require('path');
const katex = require('../node_modules/katex');

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
      buffer += input[i + 1];
      i += 2;
      continue;
    }
    if (ch === '$' && input[i + 1] === '$') {
      const end = input.indexOf('$$', i + 2);
      if (end === -1) {
        buffer += input.slice(i);
        i = input.length;
      } else {
        if (buffer) segments.push({ type: 'text', content: buffer, display: false });
        buffer = '';
        segments.push({ type: 'math', content: input.slice(i + 2, end), display: true });
        i = end + 2;
      }
      continue;
    }
    if (ch === '$') {
      const end = input.indexOf('$', i + 1);
      if (end === -1) {
        buffer += input.slice(i);
        i = input.length;
      } else {
        if (buffer) segments.push({ type: 'text', content: buffer, display: false });
        buffer = '';
        segments.push({ type: 'math', content: input.slice(i + 1, end), display: false });
        i = end + 1;
      }
      continue;
    }
    buffer += ch;
    i += 1;
  }
  if (buffer) segments.push({ type: 'text', content: buffer, display: false });
  return segments;
}

// Check if KaTeX output contains error spans (red text, katex-error class)
function checkKatexOutput(tex, display) {
  try {
    const html = katex.renderToString(tex, { displayMode: display, throwOnError: false, strict: false });
    // Check for error indicators in the output
    if (html.includes('katex-error') || html.includes('color:#cc0000') || html.includes('color:red')) {
      return { hasError: true, html: html.substring(0, 200) };
    }
    return { hasError: false };
  } catch (e) {
    return { hasError: true, error: e.message };
  }
}

for (const fname of files) {
  const filepath = path.join(dir, fname);
  const content = fs.readFileSync(filepath, 'utf8');
  const issues = [];

  // 1. Check "formula": "..." lines (rendered as display LaTeX)
  const formulaRe = /"formula"\s*:\s*"((?:[^"\\]|\\.)*)"/g;
  let m;
  while ((m = formulaRe.exec(content)) !== null) {
    let actual;
    try { actual = JSON.parse('"' + m[1] + '"'); } catch (e) { continue; }
    const lineNum = content.substring(0, m.index).split('\n').length;

    const formulaLines = actual.split('\n').filter(l => l.trim().length > 0);
    for (const fl of formulaLines) {
      if (!fl.includes('$')) {
        const result = checkKatexOutput(fl, true);
        if (result.hasError) {
          issues.push(`L${lineNum} [formula]: "${fl.substring(0, 100)}"`);
        }
      } else {
        const segs = tokenize(fl);
        for (const seg of segs) {
          if (seg.type === 'math') {
            const result = checkKatexOutput(seg.content, seg.display);
            if (result.hasError) {
              issues.push(`L${lineNum} [formula/$]: "${seg.content.substring(0, 100)}"`);
            }
          }
        }
      }
    }
  }

  // 2. Check "formulas": [...] entries
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

      if (!actual.includes('$')) {
        const result = checkKatexOutput(actual, true);
        if (result.hasError) {
          issues.push(`L${lineNum} [formulas]: "${actual.substring(0, 100)}"`);
        }
      }
    }
  }

  // 3. Check all inline $...$ in all strings
  const strings = extractStrings(content);
  for (const s of strings) {
    if (!s.value.includes('$')) continue;
    const segs = tokenize(s.value);
    for (const seg of segs) {
      if (seg.type === 'math') {
        const result = checkKatexOutput(seg.content, seg.display);
        if (result.hasError) {
          issues.push(`L${s.line} [inline $]: "${seg.content.substring(0, 100)}"`);
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
