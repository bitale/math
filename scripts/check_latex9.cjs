const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'src', 'data', 'setTheoryLessons');
const files = ['basics.ts', 'axioms.ts', 'operations.ts', 'relations.ts', 'functions.ts', 'induction.ts', 'infinity.ts', 'cardinals.ts', 'applications.ts'];

let totalIssues = 0;

function removeTextBlocks(str) {
  // Remove \text{...} blocks (handling nested braces)
  let result = '';
  let i = 0;
  while (i < str.length) {
    if (str.substring(i, i + 6) === '\\text{') {
      i += 5; // skip to {
      let depth = 0;
      while (i < str.length) {
        if (str[i] === '{') depth++;
        else if (str[i] === '}') {
          depth--;
          if (depth === 0) { i++; break; }
        }
        i++;
      }
    } else {
      result += str[i];
      i++;
    }
  }
  return result;
}

for (const fname of files) {
  const filepath = path.join(dir, fname);
  const content = fs.readFileSync(filepath, 'utf8');
  const issues = [];

  // Check formula fields
  const formulaRe = /"formula"\s*:\s*"((?:[^"\\]|\\.)*)"/g;
  let m;
  while ((m = formulaRe.exec(content)) !== null) {
    let actual;
    try { actual = JSON.parse('"' + m[1] + '"'); } catch (e) { continue; }
    const lineNum = content.substring(0, m.index).split('\n').length;

    const formulaLines = actual.split('\n').filter(l => l.trim().length > 0);
    for (const fl of formulaLines) {
      // Remove \text{...} blocks and check for Korean
      const cleaned = removeTextBlocks(fl);
      if (/[\uAC00-\uD7A3]/.test(cleaned)) {
        issues.push(`L${lineNum} [formula]: KOREAN outside \\text{}: "${fl.substring(0, 100)}"`);
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
    let formulaIdx = 0;
    while ((sm = strRe.exec(arrayContent)) !== null) {
      let actual;
      try { actual = JSON.parse('"' + sm[1] + '"'); } catch (e) { continue; }
      formulaIdx++;

      const cleaned = removeTextBlocks(actual);
      if (/[\uAC00-\uD7A3]/.test(cleaned)) {
        issues.push(`L${lineNum} [formulas[${formulaIdx-1}]]: KOREAN outside \\text{}: "${actual.substring(0, 100)}"`);
      }
    }
  }

  // Check $...$ inline math for Korean text outside \text{}
  const strings = [];
  {
    let inStr = false;
    let strContent = '';
    let strStartLine = 0;
    const lines = content.split('\n');
    for (let lineNum = 0; lineNum < lines.length; lineNum++) {
      const line = lines[lineNum];
      for (let i = 0; i < line.length; i++) {
        if (!inStr) {
          if (line[i] === '"') { inStr = true; strContent = ''; strStartLine = lineNum + 1; }
        } else {
          if (line[i] === '\\' && i + 1 < line.length) { strContent += line[i] + line[i + 1]; i++; }
          else if (line[i] === '"') {
            inStr = false;
            let actual;
            try { actual = JSON.parse('"' + strContent + '"'); } catch (e) { continue; }
            strings.push({ value: actual, line: strStartLine });
          }
          else { strContent += line[i]; }
        }
      }
    }
  }

  for (const s of strings) {
    if (!s.value.includes('$')) continue;

    // Extract math segments
    let val = s.value;
    let inMath = false;
    let mathContent = '';
    let i = 0;
    while (i < val.length) {
      if (val[i] === '$') {
        if (inMath) {
          // end of math
          const cleaned = removeTextBlocks(mathContent);
          if (/[\uAC00-\uD7A3]/.test(cleaned)) {
            issues.push(`L${s.line} [inline $]: KOREAN outside \\text{} in $${mathContent.substring(0, 60)}$`);
          }
          mathContent = '';
        }
        inMath = !inMath;
        i++;
      } else {
        if (inMath) mathContent += val[i];
        i++;
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
