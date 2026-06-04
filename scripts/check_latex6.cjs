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

function tryKatex(tex, display) {
  try {
    katex.renderToString(tex, { displayMode: display, throwOnError: true, strict: 'error' });
    return null;
  } catch (e) {
    return e.message;
  }
}

// Also try with strict:false (which is what the app uses)
function tryKatexLoose(tex, display) {
  try {
    katex.renderToString(tex, { displayMode: display, throwOnError: true, strict: false });
    return null;
  } catch (e) {
    return e.message;
  }
}

for (const fname of files) {
  const filepath = path.join(dir, fname);
  const content = fs.readFileSync(filepath, 'utf8');
  const issues = [];

  // Parse the file to find specific fields
  // We need to identify: "formula": "...", elements of "formulas": [...]
  // These are rendered as display LaTeX

  // Strategy: find "formula": and "formulas": in the source and extract values

  // 1. Find "formula": "..." pattern
  const formulaRe = /"formula"\s*:\s*"((?:[^"\\]|\\.)*)"/g;
  let m;
  while ((m = formulaRe.exec(content)) !== null) {
    let actual;
    try {
      actual = JSON.parse('"' + m[1] + '"');
    } catch (e) { continue; }
    const lineNum = content.substring(0, m.index).split('\n').length;

    // FormulaCard splits by \n and renders each line as display LaTeX
    const formulaLines = actual.split('\n').filter(l => l.trim().length > 0);
    for (const fl of formulaLines) {
      // If the line has no $, MathText renders it as display LaTeX directly
      if (!fl.includes('$')) {
        const err = tryKatexLoose(fl, true);
        if (err) {
          issues.push({
            line: lineNum,
            field: 'concept.formula',
            latex: fl,
            error: err,
            type: 'formula-line'
          });
        }
      } else {
        // Has $ - tokenize
        const segs = tokenize(fl);
        for (const seg of segs) {
          if (seg.type === 'math') {
            const err = tryKatexLoose(seg.content, seg.display);
            if (err) {
              issues.push({
                line: lineNum,
                field: 'concept.formula (inline)',
                latex: seg.content,
                error: err,
                type: 'formula-inline'
              });
            }
          }
        }
      }
    }
  }

  // 2. Find "formulas": [...] and extract each string
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

    // Extract strings from array
    const strRe = /"((?:[^"\\]|\\.)*)"/g;
    let sm;
    while ((sm = strRe.exec(arrayContent)) !== null) {
      let actual;
      try {
        actual = JSON.parse('"' + sm[1] + '"');
      } catch (e) { continue; }

      // Each string in formulas array is rendered as display LaTeX
      if (!actual.includes('$')) {
        const err = tryKatexLoose(actual, true);
        if (err) {
          issues.push({
            line: lineNum,
            field: 'summary.formulas',
            latex: actual,
            error: err,
            type: 'formulas-entry'
          });
        }
      } else {
        const segs = tokenize(actual);
        for (const seg of segs) {
          if (seg.type === 'math') {
            const err = tryKatexLoose(seg.content, seg.display);
            if (err) {
              issues.push({
                line: lineNum,
                field: 'summary.formulas (inline)',
                latex: seg.content,
                error: err,
                type: 'formulas-inline'
              });
            }
          }
        }
      }
    }
  }

  // 3. Check all $...$ in all other string fields
  const strings = extractStrings(content);
  for (const s of strings) {
    if (!s.value.includes('$')) continue;
    const segs = tokenize(s.value);
    for (const seg of segs) {
      if (seg.type === 'math') {
        const err = tryKatexLoose(seg.content, seg.display);
        if (err) {
          issues.push({
            line: s.line,
            field: 'inline math',
            latex: seg.content,
            error: err,
            type: 'inline'
          });
        }
      }
    }
  }

  if (issues.length > 0) {
    // Deduplicate by latex content
    const seen = new Set();
    const unique = issues.filter(i => {
      const key = i.line + ':' + i.latex;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });

    console.log(`\n=== ${fname} (${unique.length} unique issues) ===`);
    unique.forEach(i => {
      console.log(`  L${i.line} [${i.field}]: "${i.latex.substring(0, 100)}"`);
      console.log(`    ERROR: ${i.error.substring(0, 150)}`);
    });
    totalIssues += unique.length;
  } else {
    console.log(`\n=== ${fname}: OK ===`);
  }
}

console.log(`\nTotal unique issues: ${totalIssues}`);
