const fs = require('fs');
const path = require('path');
const katex = require('../node_modules/katex');

const dir = path.join(__dirname, '..', 'src', 'data', 'setTheoryLessons');
const files = ['basics.ts', 'axioms.ts', 'operations.ts', 'relations.ts', 'functions.ts', 'induction.ts', 'infinity.ts', 'cardinals.ts', 'applications.ts'];

let totalIssues = 0;

// Extract all strings from the TS file
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

// Tokenize string same as MathText component
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

for (const fname of files) {
  const filepath = path.join(dir, fname);
  const content = fs.readFileSync(filepath, 'utf8');
  const strings = extractStrings(content);
  const issues = [];

  // Identify formula fields by looking at context
  const lines = content.split('\n');

  for (const s of strings) {
    const val = s.value;

    // Check if this is a formula field (appears after "formula": or in "formulas": array)
    // We'll just check: if the string has no $ but has LaTeX commands, it might be formula
    // Better: check the line context
    const lineContent = lines[s.line - 1] || '';
    const isFormulaField = lineContent.includes('"formula"') ||
      (s.line > 1 && (lines[s.line - 2] || '').includes('"formula"')) ||
      (s.line > 1 && (lines[s.line - 2] || '').includes('"formulas"'));

    if (isFormulaField && !val.includes('$')) {
      // This is a formula field - each \n-separated line is display LaTeX
      const formulaLines = val.split('\n').filter(l => l.trim().length > 0);
      for (const fl of formulaLines) {
        try {
          katex.renderToString(fl, { displayMode: true, throwOnError: true, strict: 'error' });
        } catch (e) {
          issues.push(`L${s.line}: KATEX ERROR in formula: "${fl.substring(0, 80)}" => ${e.message.substring(0, 100)}`);
        }
      }
    }

    // If string contains $, tokenize and check math segments
    if (val.includes('$')) {
      const segments = tokenize(val);
      for (const seg of segments) {
        if (seg.type === 'math') {
          try {
            katex.renderToString(seg.content, { displayMode: seg.display, throwOnError: true, strict: 'error' });
          } catch (e) {
            issues.push(`L${s.line}: KATEX ERROR in $${seg.content.substring(0, 60)}$ => ${e.message.substring(0, 120)}`);
          }
        }
      }
    }
  }

  if (issues.length > 0) {
    console.log(`\n=== ${fname} (${issues.length} issues) ===`);
    // Deduplicate
    const unique = [...new Set(issues)];
    unique.forEach(i => console.log(i));
    totalIssues += unique.length;
  } else {
    console.log(`\n=== ${fname}: OK ===`);
  }
}

console.log(`\nTotal issues: ${totalIssues}`);
