const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'src', 'data', 'setTheoryLessons');
const files = ['basics.ts', 'axioms.ts', 'operations.ts', 'relations.ts', 'functions.ts', 'induction.ts', 'infinity.ts', 'cardinals.ts', 'applications.ts'];

const latexCmds = ['in','notin','subseteq','supseteq','subset','supset','emptyset','to','text','forall','exists','cup','cap','setminus','mid','mathbb','mathcal','ldots','cdots','cdot','times','neq','leq','geq','varphi','alpha','beta','gamma','delta','lambda','omega','Omega','aleph','infty','rightarrow','Rightarrow','leftrightarrow','Leftrightarrow','land','lor','lnot','neg','equiv','sim','overline','bigcup','bigcap','frac','sqrt','left','right','triangle','mapsto','langle','rangle','prod','sum','oplus','otimes','cong','approx'];

for (const fname of files) {
  const filepath = path.join(dir, fname);
  const content = fs.readFileSync(filepath, 'utf8');
  const lines = content.split('\n');
  const issues = [];

  for (let lineNum = 0; lineNum < lines.length; lineNum++) {
    const line = lines[lineNum];

    for (let i = 0; i < line.length; i++) {
      if (line.charCodeAt(i) === 92) { // backslash
        // Check if preceded by another backslash
        if (i > 0 && line.charCodeAt(i - 1) === 92) {
          // This is the second backslash of a pair - skip
          continue;
        }
        // Check if followed by another backslash (this is start of a double-backslash)
        if (i + 1 < line.length && line.charCodeAt(i + 1) === 92) {
          // Double backslash - this is correctly escaped, skip both
          i++; // skip the next backslash too
          continue;
        }
        // Single backslash - check what follows
        const rest = line.substring(i + 1);
        for (const cmd of latexCmds) {
          if (rest.startsWith(cmd)) {
            // Make sure it's a complete command (not prefix of longer word)
            const afterCmd = rest.length > cmd.length ? rest[cmd.length] : '';
            if (afterCmd === '' || !/[a-zA-Z]/.test(afterCmd)) {
              const ctx = line.substring(Math.max(0, i - 30), Math.min(line.length, i + cmd.length + 31));
              issues.push(`L${lineNum + 1}: single backslash before "${cmd}": ...${ctx}...`);
              break;
            }
          }
        }
      }
    }
  }

  if (issues.length > 0) {
    console.log(`\n=== ${fname} (${issues.length} issues) ===`);
    issues.forEach(i => console.log(i));
  } else {
    console.log(`\n=== ${fname}: OK ===`);
  }
}
