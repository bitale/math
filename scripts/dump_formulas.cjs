const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'src', 'data', 'setTheoryLessons');
const files = ['basics.ts', 'axioms.ts', 'operations.ts', 'relations.ts', 'functions.ts', 'induction.ts', 'infinity.ts', 'cardinals.ts', 'applications.ts'];

for (const fname of files) {
  const filepath = path.join(dir, fname);
  const content = fs.readFileSync(filepath, 'utf8');

  console.log(`\n${'='.repeat(60)}`);
  console.log(`FILE: ${fname}`);
  console.log(`${'='.repeat(60)}`);

  // 1. Dump all "formula": "..." values
  const formulaRe = /"formula"\s*:\s*"((?:[^"\\]|\\.)*)"/g;
  let m;
  let idx = 0;
  while ((m = formulaRe.exec(content)) !== null) {
    let actual;
    try { actual = JSON.parse('"' + m[1] + '"'); } catch (e) { continue; }
    const lineNum = content.substring(0, m.index).split('\n').length;
    idx++;

    console.log(`\n--- formula #${idx} (L${lineNum}) ---`);
    const lines = actual.split('\n');
    lines.forEach((l, i) => {
      if (l.trim()) console.log(`  [${i}] ${l}`);
    });
  }

  // 2. Dump all "formulas": [...] arrays
  const formulasRe = /"formulas"\s*:\s*\[/g;
  idx = 0;
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
    idx++;

    console.log(`\n--- formulas[] #${idx} (L${lineNum}) ---`);
    const strRe = /"((?:[^"\\]|\\.)*)"/g;
    let sm;
    let fIdx = 0;
    while ((sm = strRe.exec(arrayContent)) !== null) {
      let actual;
      try { actual = JSON.parse('"' + sm[1] + '"'); } catch (e) { continue; }
      console.log(`  [${fIdx}] ${actual}`);
      fIdx++;
    }
  }
}
