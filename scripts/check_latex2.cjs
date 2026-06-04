const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'src', 'data', 'setTheoryLessons');
const files = ['basics.ts', 'axioms.ts', 'operations.ts', 'relations.ts', 'functions.ts', 'induction.ts', 'infinity.ts', 'cardinals.ts', 'applications.ts'];

for (const fname of files) {
  const filepath = path.join(dir, fname);
  const content = fs.readFileSync(filepath, 'utf8');
  const issues = [];

  // Extract all string literals from the TS file
  // We look for quoted strings (both single and double quotes)
  // For this analysis, we'll check line by line for $ signs
  const lines = content.split('\n');

  for (let lineNum = 0; lineNum < lines.length; lineNum++) {
    const line = lines[lineNum];

    // Check 1: Count $ signs that are not escaped (not \$)
    // In LaTeX inline math, $ should come in pairs
    let dollarCount = 0;
    for (let i = 0; i < line.length; i++) {
      if (line[i] === '$') {
        // Check if preceded by backslash (escaped)
        if (i > 0 && line[i-1] === '\\') continue;
        // Check if it's part of template literal ${...}
        // Actually in these files, strings use double quotes, so $ inside is literal
        dollarCount++;
      }
    }
    if (dollarCount % 2 !== 0) {
      issues.push(`L${lineNum + 1}: ODD number of $ signs (${dollarCount}): ${line.substring(0, 120)}`);
    }

    // Check 2: Inside $...$ segments, check for unescaped braces
    // In the raw TS source, LaTeX set braces should be \\{ and \\}
    // but regular LaTeX grouping braces are just { and }
    // This is harder to automate, so let's look for common broken patterns

    // Check 3: Look for common broken patterns
    // Pattern: $...\t... (tab character from \t being interpreted)
    if (line.includes('\t') && line.includes('$')) {
      // Check if tab is inside a LaTeX expression
      const tabIdx = line.indexOf('\t');
      let inDollar = false;
      let dollarPositions = [];
      for (let i = 0; i < line.length; i++) {
        if (line[i] === '$' && (i === 0 || line[i-1] !== '\\')) {
          inDollar = !inDollar;
          dollarPositions.push(i);
        }
      }
      // Check if any tab is between dollar signs
      for (let i = 0; i < line.length; i++) {
        if (line[i] === '\t') {
          let precedingDollars = 0;
          for (const pos of dollarPositions) {
            if (pos < i) precedingDollars++;
          }
          if (precedingDollars % 2 === 1) {
            issues.push(`L${lineNum + 1}: TAB inside LaTeX $...$: ${line.substring(Math.max(0, i - 30), Math.min(line.length, i + 30))}`);
          }
        }
      }
    }
  }

  // Check 4: Parse string values and look for unbalanced braces inside LaTeX
  // Extract content between $ pairs and check brace balance
  const allText = content;
  let inString = false;
  let stringChar = '';
  let currentString = '';
  let stringStart = 0;

  // Simple approach: find all $...$ in the file content and check brace balance
  const dollarRegex = /\$([^$]*)\$/g;
  let match;
  while ((match = dollarRegex.exec(content)) !== null) {
    const latex = match[1];
    let braceDepth = 0;
    let unbalanced = false;
    for (let i = 0; i < latex.length; i++) {
      const ch = latex[i];
      if (ch === '\\' && i + 1 < latex.length) {
        const next = latex[i + 1];
        if (next === '{' || next === '}' || next === '\\') {
          i++; // skip escaped char
          continue;
        }
      }
      if (ch === '{') braceDepth++;
      if (ch === '}') {
        braceDepth--;
        if (braceDepth < 0) { unbalanced = true; break; }
      }
    }
    if (braceDepth !== 0 || unbalanced) {
      const lineNum = content.substring(0, match.index).split('\n').length;
      issues.push(`L${lineNum}: UNBALANCED BRACES in $${latex.substring(0, 80)}$ (depth=${braceDepth})`);
    }
  }

  if (issues.length > 0) {
    console.log(`\n=== ${fname} (${issues.length} issues) ===`);
    issues.forEach(i => console.log(i));
  } else {
    console.log(`\n=== ${fname}: OK ===`);
  }
}
