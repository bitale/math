const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'src', 'data', 'setTheoryLessons');
const files = ['basics.ts', 'axioms.ts', 'operations.ts', 'relations.ts', 'functions.ts', 'induction.ts', 'infinity.ts', 'cardinals.ts', 'applications.ts'];

let totalIssues = 0;

for (const fname of files) {
  const filepath = path.join(dir, fname);
  const content = fs.readFileSync(filepath, 'utf8');
  const lines = content.split('\n');
  const issues = [];

  // ==========================================
  // TEST 1: Check for JS escape sequences that would break LaTeX
  // In the source, look for patterns where a single backslash creates
  // a JS escape sequence instead of LaTeX
  // ==========================================

  // Extract all string literals and parse them
  // Then look for control characters (tab, backspace, formfeed) inside $...$
  let inStr = false;
  let strContent = '';
  let strStartLine = 0;

  for (let lineNum = 0; lineNum < lines.length; lineNum++) {
    const line = lines[lineNum];
    for (let i = 0; i < line.length; i++) {
      if (!inStr) {
        if (line[i] === '"') {
          inStr = true;
          strContent = '';
          strStartLine = lineNum;
        }
      } else {
        if (line[i] === '\\' && i + 1 < line.length) {
          strContent += line[i] + line[i + 1];
          i++;
        } else if (line[i] === '"') {
          inStr = false;
          // Parse the string
          let actual;
          try {
            actual = JSON.parse('"' + strContent + '"');
          } catch (e) {
            continue;
          }

          // Check for control characters inside $...$
          let inMath = false;
          for (let j = 0; j < actual.length; j++) {
            if (actual[j] === '$') {
              inMath = !inMath;
              continue;
            }
            if (inMath) {
              const ch = actual.charCodeAt(j);
              if (ch === 9) { // tab from \t
                const ctx = actual.substring(Math.max(0, j - 20), Math.min(actual.length, j + 20));
                issues.push(`L${strStartLine + 1}: TAB (\\t) inside LaTeX: ...${ctx}...`);
              }
              if (ch === 8) { // backspace from \b
                const ctx = actual.substring(Math.max(0, j - 20), Math.min(actual.length, j + 20));
                issues.push(`L${strStartLine + 1}: BACKSPACE (\\b) inside LaTeX: ...${ctx}...`);
              }
              if (ch === 12) { // formfeed from \f
                const ctx = actual.substring(Math.max(0, j - 20), Math.min(actual.length, j + 20));
                issues.push(`L${strStartLine + 1}: FORMFEED (\\f) inside LaTeX: ...${ctx}...`);
              }
            }
          }

          // Check for odd number of $ (unmatched)
          let dollarCount = 0;
          for (let j = 0; j < actual.length; j++) {
            if (actual[j] === '$') dollarCount++;
          }
          if (dollarCount % 2 !== 0) {
            issues.push(`L${strStartLine + 1}: UNMATCHED $ (count=${dollarCount}): "${actual.substring(0, 100)}"`);
          }

          // Check brace balance inside each $...$ segment
          let inM = false;
          let mathStr = '';
          let mathStart = 0;
          for (let j = 0; j < actual.length; j++) {
            if (actual[j] === '$') {
              if (inM) {
                // Check brace balance in mathStr
                let depth = 0;
                let ok = true;
                for (let k = 0; k < mathStr.length; k++) {
                  if (mathStr[k] === '\\' && k + 1 < mathStr.length) {
                    k++; // skip escaped char
                    continue;
                  }
                  if (mathStr[k] === '{') depth++;
                  if (mathStr[k] === '}') {
                    depth--;
                    if (depth < 0) { ok = false; break; }
                  }
                }
                if (!ok) {
                  issues.push(`L${strStartLine + 1}: EXTRA } in math: $${mathStr.substring(0, 80)}$`);
                } else if (depth > 0) {
                  issues.push(`L${strStartLine + 1}: MISSING } (${depth}) in math: $${mathStr.substring(0, 80)}$`);
                }
                mathStr = '';
              } else {
                mathStart = j;
              }
              inM = !inM;
            } else if (inM) {
              mathStr += actual[j];
            }
          }
        } else {
          strContent += line[i];
        }
      }
    }
  }

  // ==========================================
  // TEST 2: Check formula fields specifically
  // formula fields contain raw LaTeX (not in $...$)
  // ==========================================

  // Find "formula": "..." and "formulas": [...] fields
  const formulaRegex = /"formula"\s*:\s*"/g;
  let fmatch;
  while ((fmatch = formulaRegex.exec(content)) !== null) {
    // Extract the string value
    let startIdx = fmatch.index + fmatch[0].length;
    let strVal = '';
    let i = startIdx;
    while (i < content.length) {
      if (content[i] === '\\' && i + 1 < content.length) {
        strVal += content[i] + content[i + 1];
        i += 2;
      } else if (content[i] === '"') {
        break;
      } else {
        strVal += content[i];
        i++;
      }
    }
    // Parse the formula string
    let actual;
    try {
      actual = JSON.parse('"' + strVal + '"');
    } catch (e) {
      const lineNum = content.substring(0, fmatch.index).split('\n').length;
      issues.push(`L${lineNum}: PARSE ERROR in formula field`);
      continue;
    }

    const lineNum = content.substring(0, fmatch.index).split('\n').length;

    // Check for control characters
    if (actual.includes('\t')) {
      issues.push(`L${lineNum}: TAB in formula field: "${actual.substring(0, 80)}"`);
    }
    if (actual.includes('\b')) {
      issues.push(`L${lineNum}: BACKSPACE in formula field: "${actual.substring(0, 80)}"`);
    }
    if (actual.includes('\f')) {
      issues.push(`L${lineNum}: FORMFEED in formula field: "${actual.substring(0, 80)}"`);
    }

    // Check brace balance (treating the whole thing as LaTeX)
    let depth = 0;
    for (let k = 0; k < actual.length; k++) {
      if (actual[k] === '\\' && k + 1 < actual.length) {
        k++;
        continue;
      }
      if (actual[k] === '{') depth++;
      if (actual[k] === '}') {
        depth--;
        if (depth < 0) {
          issues.push(`L${lineNum}: EXTRA } in formula: "${actual.substring(0, 80)}"`);
          break;
        }
      }
    }
    if (depth > 0) {
      issues.push(`L${lineNum}: MISSING } (${depth}) in formula: "${actual.substring(0, 80)}"`);
    }
  }

  // ==========================================
  // TEST 3: Check for \\n that should be \\\\ (alignment newlines)
  // In LaTeX align environments, \\\\ is needed for line breaks
  // In JS source, this means \\\\\\\\
  // But sometimes people write \\n which becomes \+newline
  // ==========================================

  // TEST 4: Check for set braces in LaTeX
  // Inside $...$, set braces need to be \{ and \}
  // In source: \\{ and \\}
  // If we see just { } inside math where sets are being defined, that's wrong
  // This is hard to automate reliably, so skip

  // ==========================================
  // TEST 5: Check formula arrays in "formulas": [...]
  // ==========================================
  const formulasRegex = /"formulas"\s*:\s*\[/g;
  let fmatch2;
  while ((fmatch2 = formulasRegex.exec(content)) !== null) {
    let startIdx = fmatch2.index + fmatch2[0].length;
    let depth2 = 1; // we've seen the opening [
    let i = startIdx;
    let arrayContent = '';
    while (i < content.length && depth2 > 0) {
      if (content[i] === '[') depth2++;
      if (content[i] === ']') depth2--;
      if (depth2 > 0) arrayContent += content[i];
      i++;
    }

    // Extract strings from the array
    const strRegex = /"((?:[^"\\]|\\.)*)"/g;
    let smatch;
    while ((smatch = strRegex.exec(arrayContent)) !== null) {
      let actual;
      try {
        actual = JSON.parse('"' + smatch[1] + '"');
      } catch (e) { continue; }

      const lineNum = content.substring(0, fmatch2.index).split('\n').length;

      if (actual.includes('\t')) {
        issues.push(`L${lineNum}: TAB in formulas array: "${actual.substring(0, 80)}"`);
      }
      if (actual.includes('\b')) {
        issues.push(`L${lineNum}: BACKSPACE in formulas array: "${actual.substring(0, 80)}"`);
      }
      if (actual.includes('\f')) {
        issues.push(`L${lineNum}: FORMFEED in formulas array: "${actual.substring(0, 80)}"`);
      }
    }
  }

  if (issues.length > 0) {
    console.log(`\n=== ${fname} (${issues.length} issues) ===`);
    issues.forEach(i => console.log(i));
    totalIssues += issues.length;
  } else {
    console.log(`\n=== ${fname}: OK ===`);
  }
}

console.log(`\nTotal issues: ${totalIssues}`);
