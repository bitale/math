const fs = require('fs');

const BASE = 'src/data';

// [file, oldId, newId]
const changes = [
  // ─── Elementary: 부피(22)를 측정 영역(18번)으로 이동 ───
  [`${BASE}/elementary/measurement.ts`, 22, 18],
  [`${BASE}/elementary/measurement.ts`, 18, 19],
  [`${BASE}/elementary/patterns.ts`, 19, 20],
  [`${BASE}/elementary/patterns.ts`, 20, 21],
  [`${BASE}/elementary/patterns.ts`, 21, 22],

  // ─── Calculus 1: 로피탈(28→5), 역삼각(27→22) ───
  // lhopital → 5
  [`${BASE}/calculus1/lhopital.ts`, 28, 5],
  // limitCalc: 5→6, 6→7, 7→8
  [`${BASE}/calculus1/limitCalc.ts`, 5, 6],
  [`${BASE}/calculus1/limitCalc.ts`, 6, 7],
  [`${BASE}/calculus1/limitCalc.ts`, 7, 8],
  // differentiation: 8→9 ... 20→21
  [`${BASE}/calculus1/differentiation.ts`, 8, 9],
  [`${BASE}/calculus1/differentiation.ts`, 9, 10],
  [`${BASE}/calculus1/differentiation.ts`, 10, 11],
  [`${BASE}/calculus1/differentiation.ts`, 11, 12],
  [`${BASE}/calculus1/differentiation.ts`, 12, 13],
  [`${BASE}/calculus1/differentiation.ts`, 13, 14],
  [`${BASE}/calculus1/differentiation.ts`, 14, 15],
  [`${BASE}/calculus1/differentiation.ts`, 15, 16],
  [`${BASE}/calculus1/differentiation.ts`, 16, 17],
  [`${BASE}/calculus1/differentiation.ts`, 17, 18],
  [`${BASE}/calculus1/differentiation.ts`, 18, 19],
  [`${BASE}/calculus1/differentiation.ts`, 19, 20],
  [`${BASE}/calculus1/differentiation.ts`, 20, 21],
  // inverseTrig: 27→22
  [`${BASE}/calculus1/inverseTrig.ts`, 27, 22],
  // differentiationApps: 21→23 ... 26→28
  [`${BASE}/calculus1/differentiationApps.ts`, 21, 23],
  [`${BASE}/calculus1/differentiationApps.ts`, 22, 24],
  [`${BASE}/calculus1/differentiationApps.ts`, 23, 25],
  [`${BASE}/calculus1/differentiationApps.ts`, 24, 26],
  [`${BASE}/calculus1/differentiationApps.ts`, 25, 27],
  [`${BASE}/calculus1/differentiationApps.ts`, 26, 28],

  // ─── Calculus 2: 적분기법을 앞으로, 급수를 뒤로 ───
  // trigIntegration: 16→5, 17→6
  [`${BASE}/calculus2/trigIntegration.ts`, 16, 5],
  [`${BASE}/calculus2/trigIntegration.ts`, 17, 6],
  // integration: 5→7, 6→8, 7→9, 8→12
  [`${BASE}/calculus2/integration.ts`, 5, 7],
  [`${BASE}/calculus2/integration.ts`, 6, 8],
  [`${BASE}/calculus2/integration.ts`, 7, 9],
  [`${BASE}/calculus2/integration.ts`, 8, 12],
  // arcLength: 18→10
  [`${BASE}/calculus2/arcLength.ts`, 18, 10],
  // parametric: 19→11
  [`${BASE}/calculus2/parametric.ts`, 19, 11],
  // seriesCalc: 9→13, 10→14, 11→15, 12→16
  [`${BASE}/calculus2/seriesCalc.ts`, 9, 13],
  [`${BASE}/calculus2/seriesCalc.ts`, 10, 14],
  [`${BASE}/calculus2/seriesCalc.ts`, 11, 15],
  [`${BASE}/calculus2/seriesCalc.ts`, 12, 16],
  // series: 13→17, 14→18, 15→19
  [`${BASE}/calculus2/series.ts`, 13, 17],
  [`${BASE}/calculus2/series.ts`, 14, 18],
  [`${BASE}/calculus2/series.ts`, 15, 19],

  // ─── Multivariable: 삼중적분(13→7), 나머지 +1 ───
  [`${BASE}/multivariable/tripleIntegral.ts`, 13, 7],
  [`${BASE}/multivariable/lessons.ts`, 7, 8],
  [`${BASE}/multivariable/lessons.ts`, 8, 9],
  [`${BASE}/multivariable/lessons.ts`, 9, 10],
  [`${BASE}/multivariable/lessons.ts`, 10, 11],
  [`${BASE}/multivariable/lessons.ts`, 11, 12],
  [`${BASE}/multivariable/lessons.ts`, 12, 13],
];

// Group by file
const byFile = {};
for (const [f, o, n] of changes) {
  if (!byFile[f]) byFile[f] = [];
  byFile[f].push([o, n]);
}

let totalEdits = 0;
for (const [file, maps] of Object.entries(byFile)) {
  let c = fs.readFileSync(file, 'utf-8');

  // Phase 1: old → temp (old + 10000)
  for (const [oldId] of maps) {
    const t = oldId + 10000;
    c = c.replaceAll(`"id": ${oldId},`, `"id": ${t},`);
    c = c.replaceAll(`"id": "${oldId}-`, `"id": "${t}-`);
  }

  // Phase 2: temp → new
  for (const [oldId, newId] of maps) {
    const t = oldId + 10000;
    c = c.replaceAll(`"id": ${t},`, `"id": ${newId},`);
    c = c.replaceAll(`"id": "${t}-`, `"id": "${newId}-`);
  }

  fs.writeFileSync(file, c, 'utf-8');
  totalEdits += maps.length;
  console.log(`✓ ${file} — ${maps.length} lessons renumbered`);
}

console.log(`\nDone: ${totalEdits} total changes across ${Object.keys(byFile).length} files`);
