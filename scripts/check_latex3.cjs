const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'src', 'data', 'setTheoryLessons');
const files = ['basics.ts', 'axioms.ts', 'operations.ts', 'relations.ts', 'functions.ts', 'induction.ts', 'infinity.ts', 'cardinals.ts', 'applications.ts'];

// Known LaTeX commands that need double-backslash in JS strings
const latexCmds = [
  'in','notin','subseteq','supseteq','subset','supset','emptyset',
  'to','text','forall','exists','cup','cap','setminus','mid',
  'mathbb','mathcal','ldots','cdots','cdot','times','neq','leq','geq',
  'varphi','alpha','beta','gamma','delta','lambda','omega','Omega',
  'aleph','infty','rightarrow','Rightarrow','leftrightarrow','Leftrightarrow',
  'land','lor','lnot','neg','equiv','sim','overline','underline',
  'bigcup','bigcap','frac','sqrt','left','right','triangle','mapsto',
  'langle','rangle','prod','sum','oplus','otimes','cong','approx',
  'iff','implies','therefore','because','quad','qquad','not',
  'le','ge','lt','gt','pm','mp','circ','bullet','star',
  'wedge','vee','bot','top','models','vdash','dashv',
  'phi','psi','theta','epsilon','sigma','pi','rho','tau','mu','nu','chi','eta','zeta','kappa','iota','xi'
];

let totalIssues = 0;

for (const fname of files) {
  const filepath = path.join(dir, fname);
  const content = fs.readFileSync(filepath, 'utf8');
  const lines = content.split('\n');
  const issues = [];

  // Now we need to parse the actual string content.
  // The files have JSON-like string literals with "..."
  // Inside those strings, \\ is an escaped backslash (literal \)
  // \n is a newline, \t is a tab, etc.
  //
  // For LaTeX to work correctly:
  //   In source: \\in  -> JS string: \in  -> LaTeX renders: \in (CORRECT)
  //   In source: \in   -> JS string: (tab)n  -> LaTeX renders broken (WRONG)
  //   In source: \\{   -> JS string: \{   -> LaTeX renders: \{ (CORRECT - set brace)
  //   In source: \{    -> JS string: {    -> LaTeX renders: { (grouping, not set brace - MIGHT BE WRONG)
  //   In source: \\\\  -> JS string: \\   -> LaTeX renders: \\ (newline in align - CORRECT)
  //   In source: \\    -> JS string: \    -> LaTeX renders: \ (WRONG - dangling backslash)

  // Let's look for problematic escape sequences in the source
  // Bad patterns in source:
  // \t (tab), \n (newline - ok in string for line breaks),
  // \b (backspace), \f (form feed), \r (carriage return)
  // Basically, single backslash followed by a letter that forms a JS escape sequence
  // instead of double backslash for LaTeX

  for (let lineNum = 0; lineNum < lines.length; lineNum++) {
    const line = lines[lineNum];

    // Skip lines that don't have string content with LaTeX
    if (!line.includes('$') && !line.includes('\\\\')) continue;

    // Parse the line character by character
    for (let i = 0; i < line.length; i++) {
      if (line[i] === '\\') {
        // Check if this is inside a string (rough heuristic: line contains quotes)
        const prevBackslash = (i > 0 && line[i - 1] === '\\');

        if (!prevBackslash) {
          // Single backslash - what follows?
          const nextChar = line[i + 1];

          if (nextChar === 'n' || nextChar === 't' || nextChar === 'b' || nextChar === 'f' || nextChar === 'r') {
            // Check if this is intended as JS escape or broken LaTeX
            // Look at context - is it inside a LaTeX $...$ expression?
            // Check for $ before this position on the same string segment
            const before = line.substring(0, i);
            const after = line.substring(i);

            // Count unescaped $ signs before this position
            let dollarCount = 0;
            for (let j = 0; j < before.length; j++) {
              if (before[j] === '$' && (j === 0 || before[j-1] !== '\\')) {
                dollarCount++;
              }
            }

            // If odd number of $ before, we're inside LaTeX
            if (dollarCount % 2 === 1) {
              // Inside LaTeX - this \t or \n is likely a broken LaTeX command
              const context = line.substring(Math.max(0, i - 20), Math.min(line.length, i + 20));
              if (nextChar === 't') {
                // \t -> could be intended as \to, \text, \times, \theta, \tau, \triangle
                const rest = line.substring(i + 1);
                if (rest.match(/^(o |o\\b|o\$|o[^a-zA-Z]|ext|imes|heta|au|riangle)/)) {
                  issues.push(`L${lineNum + 1}: BROKEN LaTeX \\${nextChar}... inside $: ${context}`);
                }
              } else if (nextChar === 'n') {
                // \n inside LaTeX could be \neq, \neg, \notin, \not, \nu
                const rest = line.substring(i + 1);
                if (rest.match(/^(eq|eg|otin|ot |u[^a-zA-Z])/)) {
                  issues.push(`L${lineNum + 1}: BROKEN LaTeX \\${nextChar}... inside $: ${context}`);
                }
              } else if (nextChar === 'b') {
                // \b inside LaTeX could be \beta, \bigcup, \bigcap, \bot, \bullet
                const rest = line.substring(i + 1);
                if (rest.match(/^(eta|igcup|igcap|ot|ullet)/)) {
                  issues.push(`L${lineNum + 1}: BROKEN LaTeX \\${nextChar}... inside $: ${context}`);
                }
              } else if (nextChar === 'f') {
                // \f could be \forall, \frac
                const rest = line.substring(i + 1);
                if (rest.match(/^(orall|rac)/)) {
                  issues.push(`L${lineNum + 1}: BROKEN LaTeX \\${nextChar}... inside $: ${context}`);
                }
              }
            }

            // Also check if it's in a formula field (not inside $...$ but the whole value is LaTeX)
            // Formula fields have raw LaTeX without $ delimiters
            if (line.includes('"formula"') || line.includes('"formulas"')) {
              // Lines after formula: are all LaTeX content
            }
          }
        }
      }
    }
  }

  // Check 2: Look for formula fields and check LaTeX there
  // Formula content is rendered as LaTeX directly, so all commands need \\

  // Check 3: Look for unmatched $ on multi-line strings
  // Actually, the strings in these files use \n for newlines inside the string
  // Let's extract all string values and check them

  // Parse the TypeScript to find string values
  // Simple approach: find all "..." strings (the files use double quotes)
  let inString = false;
  let currentString = '';
  let stringStartLine = 0;

  for (let lineNum = 0; lineNum < lines.length; lineNum++) {
    const line = lines[lineNum];
    for (let i = 0; i < line.length; i++) {
      if (!inString) {
        if (line[i] === '"') {
          inString = true;
          currentString = '';
          stringStartLine = lineNum;
        }
      } else {
        if (line[i] === '\\' && i + 1 < line.length) {
          currentString += line[i] + line[i + 1];
          i++; // skip next char
        } else if (line[i] === '"') {
          inString = false;
          // Now analyze currentString
          // This is the raw source string (with \\ escapes still in place)
          // Convert to actual string value
          let actual;
          try {
            actual = JSON.parse('"' + currentString + '"');
          } catch(e) {
            // Can't parse - skip
            continue;
          }

          // Now 'actual' is the runtime string value
          // Check for LaTeX issues in actual string

          // Check: count $ signs (should be even)
          let dollarCount = 0;
          for (let j = 0; j < actual.length; j++) {
            if (actual[j] === '$') dollarCount++;
          }
          if (dollarCount % 2 !== 0) {
            issues.push(`L${stringStartLine + 1}: ODD $ count (${dollarCount}) in string: "${currentString.substring(0, 100)}..."`);
          }

          // Check: inside $...$ segments, look for problematic single backslashes
          // that don't form valid LaTeX commands
          let inMath = false;
          let mathContent = '';
          for (let j = 0; j < actual.length; j++) {
            if (actual[j] === '$') {
              if (inMath) {
                // End of math - check mathContent
                checkMathContent(mathContent, stringStartLine + 1, issues, currentString);
                mathContent = '';
              }
              inMath = !inMath;
            } else if (inMath) {
              mathContent += actual[j];
            }
          }
        } else {
          currentString += line[i];
        }
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

function checkMathContent(math, lineNum, issues, rawString) {
  // Check for characters that suggest broken LaTeX
  // Tab character (from \t not being \\t)
  if (math.includes('\t')) {
    issues.push(`L${lineNum}: TAB CHAR in math: $${math.substring(0, 60)}$`);
  }
  // Backspace (from \b)
  if (math.includes('\b')) {
    issues.push(`L${lineNum}: BACKSPACE CHAR in math: $${math.substring(0, 60)}$`);
  }
  // Form feed (from \f)
  if (math.includes('\f')) {
    issues.push(`L${lineNum}: FORMFEED CHAR in math: $${math.substring(0, 60)}$`);
  }

  // Check for single backslash followed by unknown command
  for (let i = 0; i < math.length; i++) {
    if (math[i] === '\\') {
      const rest = math.substring(i + 1);
      // Check if it's a known LaTeX command
      let found = false;
      for (const cmd of latexCmds) {
        if (rest.startsWith(cmd)) {
          const afterCmd = rest.length > cmd.length ? rest[cmd.length] : '';
          if (afterCmd === '' || !/[a-zA-Z]/.test(afterCmd)) {
            found = true;
            i += cmd.length; // skip past command
            break;
          }
        }
      }
      // Also check for \{ \} \\ \, \; \: \! \| \  (space)
      if (!found) {
        const next = math[i + 1];
        if (next === '{' || next === '}' || next === '\\' || next === ',' ||
            next === ';' || next === ':' || next === '!' || next === '|' ||
            next === ' ' || next === '(' || next === ')' || next === '[' || next === ']' ||
            next === '.' || next === '#' || next === '%' || next === '&' || next === '_' ||
            next === '^' || next === '~' || next === '\'' || next === '"' || next === '`') {
          found = true;
          i++; // skip next char
        }
      }
      if (!found) {
        const context = math.substring(Math.max(0, i - 10), Math.min(math.length, i + 20));
        // Only report if it looks like it could be a real issue
        if (rest.length > 0 && /[a-zA-Z]/.test(rest[0])) {
          issues.push(`L${lineNum}: UNKNOWN LaTeX cmd "\\${rest.match(/^[a-zA-Z]+/)?.[0] || rest[0]}" in: ...${context}...`);
        }
      }
    }
  }

  // Check brace balance
  let depth = 0;
  for (let i = 0; i < math.length; i++) {
    if (math[i] === '\\' && i + 1 < math.length) {
      i++; // skip escaped char
      continue;
    }
    if (math[i] === '{') depth++;
    if (math[i] === '}') depth--;
    if (depth < 0) {
      issues.push(`L${lineNum}: EXTRA } in math: $${math.substring(0, 80)}$`);
      break;
    }
  }
  if (depth > 0) {
    issues.push(`L${lineNum}: MISSING } (${depth} unclosed) in math: $${math.substring(0, 80)}$`);
  }
}

console.log(`\nTotal issues: ${totalIssues}`);
