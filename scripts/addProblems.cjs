const fs = require('fs');
const path = require('path');

const BASE = path.join(__dirname, '..', 'src', 'data', 'setTheoryLessons');

function prob(p) {
  let s = '    {\n';
  s += '      "id": "' + p.id + '",\n';
  s += '      "type": "' + p.type + '",\n';
  s += '      "difficulty": ' + p.difficulty + ',\n';
  s += '      "question": ' + JSON.stringify(p.question) + ',\n';
  if (p.choices) {
    s += '      "choices": [\n';
    p.choices.forEach((c, i) => {
      s += '        ' + JSON.stringify(c) + (i < p.choices.length - 1 ? ',' : '') + '\n';
    });
    s += '      ],\n';
  }
  s += '      "answer": ' + JSON.stringify(p.answer) + ',\n';
  s += '      "hints": [\n';
  p.hints.forEach((h, i) => {
    s += '        ' + JSON.stringify(h) + (i < p.hints.length - 1 ? ',' : '') + '\n';
  });
  s += '      ],\n';
  s += '      "explanation": ' + JSON.stringify(p.explanation) + ',\n';
  s += '      "wrongAnalysis": ' + JSON.stringify(p.wrongAnalysis) + '\n';
  s += '    }';
  return s;
}

function addProblemsToFile(filename, lessonProblems) {
  const filepath = path.join(BASE, filename);
  let content = fs.readFileSync(filepath, 'utf8');

  const sortedIds = Object.keys(lessonProblems).map(Number).sort((a, b) => b - a);

  for (const lessonId of sortedIds) {
    const problems = lessonProblems[lessonId];
    const idPattern = '"' + lessonId + '-3"';
    const idx = content.indexOf(idPattern);
    if (idx === -1) {
      console.error('Could not find ' + idPattern + ' in ' + filename);
      continue;
    }

    let startBrace = content.lastIndexOf('{', idx);
    let braceCount = 0;
    let pos = startBrace;
    for (let i = startBrace; i < content.length; i++) {
      if (content[i] === '{') braceCount++;
      if (content[i] === '}') {
        braceCount--;
        if (braceCount === 0) {
          pos = i;
          break;
        }
      }
    }

    let insertion = '';
    for (const p of problems) {
      insertion += ',\n' + prob(p);
    }

    content = content.substring(0, pos + 1) + insertion + content.substring(pos + 1);
  }

  fs.writeFileSync(filepath, content, 'utf8');
  console.log('Updated ' + filename);
}

// ===== BASICS.TS =====
addProblemsToFile('basics.ts', {
  1: [
    { id: '1-4', type: 'choice', difficulty: 1, question: '다음 중 집합 $\\{1, 1, 2, 3\\}$과 같은 집합을 모두 고르면?', choices: ['$\\{1, 2, 3\\}$만', '$\\{3, 2, 1\\}$만', '$\\{1, 2, 3\\}$과 $\\{3, 2, 1\\}$ 모두', '어느 것도 같지 않다'], answer: '$\\{1, 2, 3\\}$과 $\\{3, 2, 1\\}$ 모두', hints: ['집합에서 원소의 중복은 무시됩니다.', '집합에서 원소의 순서는 상관없습니다.'], explanation: '집합에서는 중복 원소를 하나로 취급하고 순서도 무시하므로, $\\{1, 1, 2, 3\\} = \\{1, 2, 3\\} = \\{3, 2, 1\\}$입니다.', wrongAnalysis: '중복을 허용하여 $\\{1, 1, 2, 3\\}$이 4개의 원소를 가진다고 오해하는 경우가 있습니다.' },
    { id: '1-5', type: 'choice', difficulty: 2, question: '$C = \\{x \\mid x\\text{는 자연수이고 } x^2 < 20\\}$의 원소의 개수는?', choices: ['$3$', '$4$', '$5$', '$6$'], answer: '$5$', hints: ['자연수 $0, 1, 2, 3, \\ldots$ 중 $x^2 < 20$인 것을 찾으세요.', '$4^2 = 16 < 20$이고 $5^2 = 25 \\geq 20$입니다.'], explanation: '$0^2=0, 1^2=1, 2^2=4, 3^2=9, 4^2=16$은 모두 20보다 작고, $5^2=25 \\geq 20$이므로 $C = \\{0,1,2,3,4\\}$, 원소 개수는 5입니다.', wrongAnalysis: '$0$을 자연수에서 제외하여 $4$로 답하는 경우가 있습니다. 집합론에서는 보통 $0$을 자연수에 포함합니다.' }
  ],
  2: [
    { id: '2-4', type: 'choice', difficulty: 1, question: '집합 $\\{2, 4, 6, 8, 10\\}$을 조건제시법으로 올바르게 나타낸 것은?', choices: ['$\\{x \\mid x\\text{는 10 이하의 짝수}\\}$', '$\\{x \\mid x\\text{는 10 이하의 홀수}\\}$', '$\\{x \\mid x\\text{는 10 이하의 자연수}\\}$', '$\\{x \\mid x\\text{는 짝수}\\}$'], answer: '$\\{x \\mid x\\text{는 10 이하의 짝수}\\}$', hints: ['원소 $2, 4, 6, 8, 10$의 공통 성질을 찾으세요.', '모두 짝수이며 10 이하입니다.'], explanation: '원소가 모두 10 이하의 짝수이므로 $\\{x \\mid x\\text{는 10 이하의 짝수}\\}$입니다.', wrongAnalysis: '$\\{x \\mid x\\text{는 짝수}\\}$를 선택하면 10보다 큰 짝수도 모두 포함됩니다.' },
    { id: '2-5', type: 'text', difficulty: 2, question: '집합 $\\{1, 4, 9, 16, 25\\}$를 조건제시법으로 나타내시오.', answer: '$\\{n^2 \\mid 1 \\leq n \\leq 5,\\; n \\in \\mathbb{N}\\}$', hints: ['각 원소가 어떤 수의 제곱인지 확인하세요.', '$1=1^2, 4=2^2, 9=3^2, 16=4^2, 25=5^2$입니다.'], explanation: '$1=1^2, 4=2^2, 9=3^2, 16=4^2, 25=5^2$이므로 $\\{n^2 \\mid 1 \\leq n \\leq 5\\}$로 나타낼 수 있습니다.', wrongAnalysis: '조건에 범위를 명시하지 않으면 $36, 49, \\ldots$ 등도 포함되므로 주의하세요.' }
  ],
  3: [
    { id: '3-4', type: 'choice', difficulty: 1, question: '공집합 $\\emptyset$에 대한 설명으로 옳은 것은?', choices: ['$\\emptyset$은 원소가 없는 집합이다', '$\\emptyset = \\{0\\}$이다', '$\\emptyset$은 집합이 아니다', '$|\\emptyset| = 1$이다'], answer: '$\\emptyset$은 원소가 없는 집합이다', hints: ['공집합은 원소가 하나도 없는 집합입니다.', '$\\{0\\}$은 원소 $0$을 하나 가진 집합으로 공집합과 다릅니다.'], explanation: '$\\emptyset$은 원소가 없는 집합입니다. $\\{0\\}$은 원소 $0$을 가진 집합이므로 $\\emptyset \\neq \\{0\\}$이고, $|\\emptyset| = 0$입니다.', wrongAnalysis: '$\\emptyset = \\{0\\}$으로 착각하는 경우가 많습니다. $0$은 숫자이고 $\\emptyset$은 원소가 없는 집합입니다.' },
    { id: '3-5', type: 'number', difficulty: 2, question: '$A = \\{1, 2, 3\\}$의 부분집합의 개수를 구하시오.', answer: '8', hints: ['$n$개의 원소를 가진 집합의 부분집합 수는 $2^n$입니다.', '$|A| = 3$이므로 $2^3$을 계산하세요.'], explanation: '원소가 $n$개인 집합의 부분집합 수는 $2^n$입니다. $|A| = 3$이므로 $2^3 = 8$개입니다.', wrongAnalysis: '공집합이나 $A$ 자신을 제외하여 $6$이나 $7$로 답하는 경우가 있습니다. 공집합과 $A$ 자신도 부분집합입니다.' }
  ],
  4: [
    { id: '4-4', type: 'choice', difficulty: 1, question: '$A = \\{1, 2\\}$, $B = \\{1, 2, 3\\}$일 때, $A$와 $B$의 관계로 옳은 것은?', choices: ['$A = B$', '$A \\subseteq B$', '$B \\subseteq A$', '$A$와 $B$는 서로소'], answer: '$A \\subseteq B$', hints: ['$A$의 모든 원소가 $B$에 속하는지 확인하세요.', '$1 \\in B$이고 $2 \\in B$이므로 $A$의 모든 원소가 $B$에 속합니다.'], explanation: '$A$의 원소 $1, 2$가 모두 $B$에 속하므로 $A \\subseteq B$입니다.', wrongAnalysis: '$B \\subseteq A$를 선택하면 안 됩니다. $3 \\in B$이지만 $3 \\notin A$이므로 $B$는 $A$의 부분집합이 아닙니다.' },
    { id: '4-5', type: 'number', difficulty: 2, question: '$A = \\{a, b, c, d\\}$일 때, $A$의 진부분집합의 개수를 구하시오.', answer: '15', hints: ['부분집합의 수는 $2^{|A|} = 2^4 = 16$개입니다.', '진부분집합은 $A$ 자신을 제외하므로 $16 - 1$입니다.'], explanation: '$|A| = 4$이므로 부분집합 수는 $2^4 = 16$, 진부분집합은 $A$ 자체를 제외한 $15$개입니다.', wrongAnalysis: '공집합을 제외하여 $14$로 답하는 경우가 있습니다. 공집합도 진부분집합입니다.' }
  ],
  5: [
    { id: '5-4', type: 'choice', difficulty: 1, question: '멱집합 $\\mathcal{P}(\\{a\\})$의 원소를 모두 나열하면?', choices: ['$\\{a\\}$', '$\\{\\emptyset, a\\}$', '$\\{\\emptyset, \\{a\\}\\}$', '$\\{a, \\{a\\}\\}$'], answer: '$\\{\\emptyset, \\{a\\}\\}$', hints: ['멱집합은 주어진 집합의 모든 부분집합을 원소로 가집니다.', '$\\{a\\}$의 부분집합은 $\\emptyset$과 $\\{a\\}$입니다.'], explanation: '$\\mathcal{P}(\\{a\\}) = \\{\\emptyset, \\{a\\}\\}$입니다. 멱집합의 원소는 부분집합이므로 $a$가 아니라 $\\{a\\}$입니다.', wrongAnalysis: '$\\{\\emptyset, a\\}$를 선택하면 안 됩니다. 멱집합의 원소는 집합(부분집합)이어야 합니다.' },
    { id: '5-5', type: 'number', difficulty: 2, question: '$|\\mathcal{P}(\\mathcal{P}(\\emptyset))|$을 구하시오.', answer: '2', hints: ['$\\mathcal{P}(\\emptyset) = \\{\\emptyset\\}$이므로 원소가 1개입니다.', '$\\mathcal{P}(\\{\\emptyset\\})$의 원소 수는 $2^1 = 2$입니다.'], explanation: '$\\mathcal{P}(\\emptyset) = \\{\\emptyset\\}$이고, $\\mathcal{P}(\\{\\emptyset\\}) = \\{\\emptyset, \\{\\emptyset\\}\\}$이므로 원소 수는 $2$입니다.', wrongAnalysis: '$\\mathcal{P}(\\emptyset) = \\emptyset$으로 착각하면 안 됩니다. 공집합도 부분집합을 가집니다.' }
  ],
  6: [
    { id: '6-4', type: 'choice', difficulty: 1, question: '유한집합 $A$의 원소의 개수를 나타내는 기호는?', choices: ['$\\mathcal{P}(A)$', '$|A|$', '$A^c$', '$\\bigcup A$'], answer: '$|A|$', hints: ['원소의 개수를 집합의 크기(cardinality)라고 합니다.', '절대값과 같은 기호 $|\\cdot|$를 사용합니다.'], explanation: '$|A|$는 집합 $A$의 원소 개수를 나타냅니다. $\\mathcal{P}(A)$는 멱집합, $A^c$는 여집합입니다.', wrongAnalysis: '$\\mathcal{P}(A)$는 원소 개수가 아니라 모든 부분집합의 모임입니다.' },
    { id: '6-5', type: 'number', difficulty: 2, question: '$A = \\{x \\mid x\\text{는 20 이하의 자연수 중 3의 배수}\\}$일 때, $|A|$를 구하시오.', answer: '7', hints: ['20 이하의 3의 배수: $0, 3, 6, 9, 12, 15, 18$.', '$0$도 $3$의 배수($0 = 3 \\times 0$)이므로 포함합니다.'], explanation: '20 이하의 자연수 중 3의 배수는 $0, 3, 6, 9, 12, 15, 18$로 7개입니다.', wrongAnalysis: '$0$을 제외하면 $6$, $21$을 포함하면 $8$로 잘못 답할 수 있습니다.' }
  ],
  7: [
    { id: '7-4', type: 'choice', difficulty: 1, question: '$\\{1, 2\\} \\in \\{1, 2, 3\\}$은 참인가 거짓인가?', choices: ['참', '거짓'], answer: '거짓', hints: ['$\\{1, 2, 3\\}$의 원소는 $1$, $2$, $3$이지 $\\{1, 2\\}$가 아닙니다.', '$\\in$은 원소 관계이고 $\\subseteq$는 부분집합 관계입니다.'], explanation: '$\\{1, 2, 3\\}$의 원소는 $1, 2, 3$이므로 $\\{1, 2\\} \\notin \\{1, 2, 3\\}$입니다. $\\{1, 2\\} \\subseteq \\{1, 2, 3\\}$은 참이지만 $\\in$과 $\\subseteq$는 다릅니다.', wrongAnalysis: '$\\in$과 $\\subseteq$를 혼동하면 안 됩니다.' },
    { id: '7-5', type: 'choice', difficulty: 2, question: '$A = \\{\\emptyset, \\{1\\}, \\{1, 2\\}\\}$일 때, 다음 중 참인 것은?', choices: ['$1 \\in A$', '$\\{1\\} \\in A$', '$\\{1, 2\\} \\subseteq A$', '$\\emptyset \\notin A$'], answer: '$\\{1\\} \\in A$', hints: ['$A$의 원소: $\\emptyset$, $\\{1\\}$, $\\{1, 2\\}$.', '$\\{1\\}$이 $A$의 원소 목록에 있는지 확인하세요.'], explanation: '$\\{1\\}$은 $A$의 원소이므로 $\\{1\\} \\in A$는 참입니다. $1$은 $A$의 원소가 아니고, $\\emptyset \\in A$입니다.', wrongAnalysis: '$1$과 $\\{1\\}$은 전혀 다른 대상입니다. $1 \\in A$를 선택하면 안 됩니다.' }
  ],
  8: [
    { id: '8-4', type: 'choice', difficulty: 1, question: '전체집합 $U$에 대해 항상 성립하는 것은?', choices: ['$U \\subseteq A$', '$A \\subseteq U$', '$U = A$', '$U \\cap A = \\emptyset$'], answer: '$A \\subseteq U$', hints: ['전체집합은 모든 대상을 포함하는 집합입니다.', '어떤 집합 $A$든 전체집합의 부분집합입니다.'], explanation: '전체집합 $U$는 모든 원소를 포함하므로 $A \\subseteq U$가 항상 성립합니다.', wrongAnalysis: '$U \\subseteq A$는 $A = U$인 경우에만 성립합니다.' },
    { id: '8-5', type: 'text', difficulty: 2, question: '$A \\subseteq B$이고 $B \\subseteq A$이면 $A$와 $B$의 관계를 서술하시오.', answer: '$A = B$', hints: ['$A$의 모든 원소가 $B$에, $B$의 모든 원소가 $A$에 속합니다.', '양쪽 포함이 성립하면 두 집합은 같습니다.'], explanation: '$A \\subseteq B$이고 $B \\subseteq A$이면 두 집합은 같은 원소를 가지므로 $A = B$입니다.', wrongAnalysis: '$A \\subset B$(진부분집합)와 $A \\subseteq B$(부분집합)를 혼동하면 안 됩니다.' }
  ],
  9: [
    { id: '9-4', type: 'choice', difficulty: 1, question: '$A = \\{1, 2\\}$, $B = \\{3, 4\\}$일 때, $A$와 $B$는 서로소인가?', choices: ['예, 서로소이다', '아니오, 서로소가 아니다'], answer: '예, 서로소이다', hints: ['서로소란 $A \\cap B = \\emptyset$인 경우입니다.', '$A$와 $B$에 공통 원소가 있는지 확인하세요.'], explanation: '$A \\cap B = \\emptyset$이므로 $A$와 $B$는 서로소입니다.', wrongAnalysis: '$A \\neq B$라서 서로소라고 판단하면 안 됩니다. 서로소는 교집합이 공집합인 것입니다.' },
    { id: '9-5', type: 'number', difficulty: 2, question: '$A$와 $B$가 서로소이고 $|A| = 6$, $|B| = 8$일 때, $|A \\cup B|$를 구하시오.', answer: '14', hints: ['서로소이면 $|A \\cap B| = 0$입니다.', '$|A \\cup B| = |A| + |B| - |A \\cap B| = 6 + 8 - 0$을 계산하세요.'], explanation: '$A$와 $B$가 서로소이면 $|A \\cap B| = 0$이므로 $|A \\cup B| = 6 + 8 = 14$입니다.', wrongAnalysis: '서로소가 아닌 경우와 혼동하여 교집합을 빼려고 하면 안 됩니다. 서로소이면 교집합이 없으므로 단순 합산입니다.' }
  ],
  10: [
    { id: '10-4', type: 'choice', difficulty: 1, question: '"$A$의 모든 원소가 $B$에 속한다"를 기호로 나타내면?', choices: ['$A \\in B$', '$A \\subseteq B$', '$A = B$', '$A \\cap B = B$'], answer: '$A \\subseteq B$', hints: ['"모든 원소가 속한다"는 부분집합 관계의 정의입니다.', '$A \\in B$는 $A$가 $B$의 원소라는 뜻으로 다릅니다.'], explanation: '$A \\subseteq B$는 "$A$의 모든 원소가 $B$에 속한다"는 뜻입니다.', wrongAnalysis: '$A \\in B$는 $A$가 $B$의 "원소"라는 뜻이지 부분집합 관계가 아닙니다.' },
    { id: '10-5', type: 'text', difficulty: 2, question: '$A \\subseteq B$이고 $B \\subseteq C$일 때, $A$와 $C$의 관계를 서술하시오.', answer: '$A \\subseteq C$', hints: ['$A$의 원소 $a$에 대해 $a \\in B$, 그리고 $a \\in C$가 성립합니다.', '이것을 부분집합 관계의 추이성이라 합니다.'], explanation: '$A \\subseteq B$이고 $B \\subseteq C$이면, $A$의 모든 원소는 $B$를 거쳐 $C$에도 속하므로 $A \\subseteq C$입니다.', wrongAnalysis: '$A = C$라고 단정하면 안 됩니다. $A \\subseteq C$가 성립하지만 등호는 보장되지 않습니다.' }
  ]
});

// ===== OPERATIONS.TS =====
addProblemsToFile('operations.ts', {
  11: [
    { id: '11-4', type: 'choice', difficulty: 1, question: '$A = \\{1,2,3,4,5\\}$, $B = \\{4,5,6,7\\}$일 때, $A \\cup B$는?', choices: ['$\\{4,5\\}$', '$\\{1,2,3,4,5,6,7\\}$', '$\\{1,2,3,6,7\\}$', '$\\{1,2,3\\}$'], answer: '$\\{1,2,3,4,5,6,7\\}$', hints: ['합집합은 두 집합의 원소를 모두 모읍니다.', '중복 원소는 한 번만 포함합니다.'], explanation: '$A \\cup B = \\{1,2,3,4,5,6,7\\}$입니다.', wrongAnalysis: '교집합 $\\{4,5\\}$과 혼동하지 마세요.' },
    { id: '11-5', type: 'number', difficulty: 2, question: '$|A| = 15$, $|B| = 12$, $|A \\cup B| = 20$일 때, $|A \\cap B|$를 구하시오.', answer: '7', hints: ['$|A \\cup B| = |A| + |B| - |A \\cap B|$', '$20 = 15 + 12 - |A \\cap B|$에서 구하세요.'], explanation: '$|A \\cap B| = 15 + 12 - 20 = 7$입니다.', wrongAnalysis: '공식을 잘못 적용하지 않도록 주의하세요.' }
  ],
  12: [
    { id: '12-4', type: 'choice', difficulty: 1, question: '$A = \\{a,b,c,d\\}$, $B = \\{c,d,e\\}$일 때, $B \\setminus A$는?', choices: ['$\\{a,b\\}$', '$\\{e\\}$', '$\\{c,d\\}$', '$\\{a,b,e\\}$'], answer: '$\\{e\\}$', hints: ['$B \\setminus A$는 $B$에 속하지만 $A$에 속하지 않는 원소입니다.', '$B$에서 $A$와 공통인 $c, d$를 제거합니다.'], explanation: '$B$의 원소 중 $A$에 없는 것은 $e$뿐이므로 $B \\setminus A = \\{e\\}$입니다.', wrongAnalysis: '$A \\setminus B = \\{a,b\\}$와 혼동하지 마세요. 차집합은 방향이 중요합니다.' },
    { id: '12-5', type: 'number', difficulty: 2, question: '$U = \\{1,2,\\ldots,15\\}$, $A = \\{x \\mid x\\text{는 15 이하의 짝수}\\}$일 때, $|A^c|$를 구하시오.', answer: '8', hints: ['$A = \\{2,4,6,8,10,12,14\\}$이므로 $|A| = 7$.', '$|A^c| = 15 - 7 = 8$입니다.'], explanation: '15 이하의 짝수는 7개이므로 $|A^c| = 15 - 7 = 8$입니다.', wrongAnalysis: '15는 홀수이므로 $A$에 포함되지 않습니다.' }
  ],
  13: [
    { id: '13-4', type: 'choice', difficulty: 1, question: '다음 중 집합 연산에서 결합법칙이 성립하는 것은?', choices: ['$\\cup$와 $\\cap$ 모두', '$\\cup$만', '$\\cap$만', '$\\setminus$만'], answer: '$\\cup$와 $\\cap$ 모두', hints: ['합집합과 교집합 모두 결합법칙이 성립합니다.', '차집합은 결합법칙이 성립하지 않습니다.'], explanation: '$(A \\cup B) \\cup C = A \\cup (B \\cup C)$이고 $(A \\cap B) \\cap C = A \\cap (B \\cap C)$가 성립합니다.', wrongAnalysis: '차집합은 $(\\{1,2,3\\} \\setminus \\{2,3\\}) \\setminus \\{1\\} \\neq \\{1,2,3\\} \\setminus (\\{2,3\\} \\setminus \\{1\\})$입니다.' },
    { id: '13-5', type: 'text', difficulty: 2, question: '$A \\cap (A \\cup B)$를 흡수법칙으로 간단히 하시오.', answer: '$A$', hints: ['흡수법칙: $A \\cap (A \\cup B) = A$.', '$A \\subseteq A \\cup B$이므로 교집합은 $A$ 자체입니다.'], explanation: '흡수법칙에 의해 $A \\cap (A \\cup B) = A$입니다.', wrongAnalysis: '$A \\cup (A \\cap B) = A$와 혼동하지 마세요. 결과는 같지만 형태가 다릅니다.' }
  ],
  14: [
    { id: '14-4', type: 'choice', difficulty: 1, question: '드모르간의 법칙에 의해 $(A \\cap B)^c$는?', choices: ['$A^c \\cap B^c$', '$A^c \\cup B^c$', '$A \\cup B$', '$(A \\cup B)^c$'], answer: '$A^c \\cup B^c$', hints: ['여집합을 취하면 $\\cup$와 $\\cap$가 바뀝니다.', '$(A \\cap B)^c$에서 $\\cap$가 $\\cup$로 바뀝니다.'], explanation: '$(A \\cap B)^c = A^c \\cup B^c$입니다.', wrongAnalysis: '$A^c \\cap B^c$를 선택하면 연산 기호를 바꾸지 않은 것입니다.' },
    { id: '14-5', type: 'text', difficulty: 2, question: '$U = \\{1,2,3,4,5,6,7,8\\}$, $A = \\{1,2,3,4\\}$, $B = \\{3,4,5,6\\}$일 때, $(A \\cup B)^c$를 구하시오.', answer: '$\\{7,8\\}$', hints: ['$A \\cup B = \\{1,2,3,4,5,6\\}$입니다.', '$(A \\cup B)^c = U \\setminus \\{1,2,3,4,5,6\\}$입니다.'], explanation: '$(A \\cup B)^c = \\{7,8\\}$입니다. 드모르간의 법칙으로도 확인: $A^c \\cap B^c = \\{5,6,7,8\\} \\cap \\{1,2,7,8\\} = \\{7,8\\}$.', wrongAnalysis: '드모르간의 법칙을 잘못 적용하여 $A^c \\cup B^c$로 계산하면 안 됩니다.' }
  ],
  15: [
    { id: '15-4', type: 'choice', difficulty: 1, question: '$A = \\{a,b,c\\}$, $B = \\{b,c,d\\}$일 때, $A \\triangle B$는?', choices: ['$\\{a,d\\}$', '$\\{b,c\\}$', '$\\{a,b,c,d\\}$', '$\\emptyset$'], answer: '$\\{a,d\\}$', hints: ['대칭차집합은 한쪽에만 속하는 원소입니다.', '$A$에만 속한 것: $a$, $B$에만 속한 것: $d$.'], explanation: '$A \\triangle B = \\{a\\} \\cup \\{d\\} = \\{a,d\\}$입니다.', wrongAnalysis: '합집합이나 교집합과 혼동하지 마세요.' },
    { id: '15-5', type: 'text', difficulty: 2, question: '임의의 집합 $A$에 대해 $A \\triangle \\emptyset$을 구하시오.', answer: '$A$', hints: ['$A \\triangle \\emptyset = (A \\setminus \\emptyset) \\cup (\\emptyset \\setminus A)$', '$A \\setminus \\emptyset = A$이고 $\\emptyset \\setminus A = \\emptyset$입니다.'], explanation: '$A \\triangle \\emptyset = A \\cup \\emptyset = A$입니다. 공집합은 대칭차의 항등원입니다.', wrongAnalysis: '$A \\triangle A = \\emptyset$과 혼동하지 마세요.' }
  ],
  16: [
    { id: '16-4', type: 'number', difficulty: 1, question: '$\\mathcal{F} = \\{\\{1,2,3\\}, \\{3,4,5\\}, \\{5,6,7\\}\\}$일 때, $|\\bigcup \\mathcal{F}|$를 구하시오.', answer: '7', hints: ['모든 집합의 원소를 합치세요.', '중복을 제거하면 $\\{1,2,3,4,5,6,7\\}$입니다.'], explanation: '$\\bigcup \\mathcal{F} = \\{1,2,3,4,5,6,7\\}$이므로 원소 수는 7입니다.', wrongAnalysis: '각 집합의 원소 수를 합산하면 $9$가 되지만, 중복을 제거해야 합니다.' },
    { id: '16-5', type: 'text', difficulty: 2, question: '$B_n = \\{n, n+1, n+2\\}$ ($n \\in \\mathbb{N}$)일 때, $\\bigcap_{n=0}^{\\infty} B_n$을 구하시오.', answer: '$\\emptyset$', hints: ['모든 $B_n$에 동시에 속하는 원소가 있는지 확인하세요.', '자연수 $k$는 $B_{k+1}$에 속하지 않습니다.'], explanation: '어떤 자연수 $k$도 $B_{k+1} = \\{k+1,k+2,k+3\\}$에 속하지 않으므로 $\\bigcap_{n=0}^{\\infty} B_n = \\emptyset$입니다.', wrongAnalysis: '$\\bigcap$과 $\\bigcup$을 혼동하지 마세요.' }
  ]
});

// ===== RELATIONS.TS =====
addProblemsToFile('relations.ts', {
  17: [
    { id: '17-4', type: 'choice', difficulty: 1, question: '순서쌍 $(3, 5)$와 $(5, 3)$의 관계로 옳은 것은?', choices: ['같다', '다르다', '원소가 같으므로 같다', '판단할 수 없다'], answer: '다르다', hints: ['순서쌍에서는 순서가 중요합니다.', '$(a, b) = (c, d)$이려면 $a = c$이고 $b = d$여야 합니다.'], explanation: '$(3, 5)$에서 첫 번째 성분은 $3$, 두 번째는 $5$이고, $(5, 3)$은 반대이므로 $(3, 5) \\neq (5, 3)$입니다.', wrongAnalysis: '집합 $\\{3, 5\\} = \\{5, 3\\}$이지만, 순서쌍에서는 순서가 의미를 가집니다.' },
    { id: '17-5', type: 'number', difficulty: 2, question: '$|A| = 4$, $|B| = 5$일 때, $|A \\times B|$를 구하시오.', answer: '20', hints: ['$|A \\times B| = |A| \\cdot |B|$입니다.', '$4 \\times 5$를 계산하세요.'], explanation: '$|A \\times B| = |A| \\cdot |B| = 4 \\times 5 = 20$입니다.', wrongAnalysis: '$|A| + |B| = 9$로 답하면 안 됩니다. 곱집합의 크기는 곱입니다.' }
  ],
  18: [
    { id: '18-4', type: 'choice', difficulty: 1, question: '관계 $R \\subseteq A \\times B$에서 $R$의 정의로 옳은 것은?', choices: ['$A$와 $B$의 합집합', '$A \\times B$의 부분집합', '$A$에서 $B$로의 전단사 함수', '$A$의 멱집합'], answer: '$A \\times B$의 부분집합', hints: ['관계는 곱집합의 부분집합으로 정의됩니다.', '관계의 원소는 순서쌍 $(a, b)$입니다.'], explanation: '관계 $R$은 곱집합 $A \\times B$의 부분집합으로 정의됩니다. 즉, 순서쌍들의 집합입니다.', wrongAnalysis: '관계를 함수와 혼동하면 안 됩니다. 함수는 특별한 조건을 만족하는 관계입니다.' },
    { id: '18-5', type: 'number', difficulty: 2, question: '$A = \\{1, 2, 3\\}$일 때, $A$ 위의 관계($A \\times A$의 부분집합)의 총 개수를 구하시오.', answer: '512', hints: ['$|A \\times A| = 9$이므로 부분집합의 수는 $2^9$입니다.', '$2^9 = 512$입니다.'], explanation: '$A \\times A$의 원소 수는 $3^2 = 9$이고, 관계는 $A \\times A$의 부분집합이므로 $2^9 = 512$개입니다.', wrongAnalysis: '$2^3 = 8$이나 $3^3 = 27$로 답하면 안 됩니다. 관계는 곱집합의 부분집합입니다.' }
  ],
  19: [
    { id: '19-4', type: 'choice', difficulty: 1, question: '관계 $R$이 반사적(reflexive)이란 무엇인가?', choices: ['모든 $a$에 대해 $(a, a) \\in R$', '$(a, b) \\in R$이면 $(b, a) \\in R$', '$(a, b), (b, c) \\in R$이면 $(a, c) \\in R$', '$(a, b) \\in R$이고 $(b, a) \\in R$이면 $a = b$'], answer: '모든 $a$에 대해 $(a, a) \\in R$', hints: ['반사적이란 모든 원소가 자기 자신과 관계를 맺는 것입니다.', '"자기 자신을 반사한다"고 생각하세요.'], explanation: '반사적 관계란 집합의 모든 원소 $a$에 대해 $(a, a) \\in R$인 관계입니다.', wrongAnalysis: '대칭적($aRb \\Rightarrow bRa$)이나 추이적($aRb, bRc \\Rightarrow aRc$)과 혼동하지 마세요.' },
    { id: '19-5', type: 'choice', difficulty: 2, question: '$A = \\{1, 2, 3\\}$에서 $R = \\{(1,1), (2,2), (3,3), (1,2), (2,1)\\}$이 대칭적인지 판별하면?', choices: ['대칭적이다', '대칭적이지 않다'], answer: '대칭적이다', hints: ['대칭적: $(a, b) \\in R$이면 $(b, a) \\in R$인지 확인하세요.', '$(1,2) \\in R$이면 $(2,1) \\in R$인지 확인합니다.'], explanation: '$(1,2) \\in R$이고 $(2,1) \\in R$, 나머지 순서쌍은 $(a,a)$ 형태이므로 자동으로 대칭 조건을 만족합니다. 따라서 $R$은 대칭적입니다.', wrongAnalysis: '대칭성은 $R$에 있는 모든 순서쌍에 대해 확인해야 합니다. $(1,3)$은 $R$에 없으므로 $(3,1)$의 존재 여부를 확인할 필요가 없습니다.' }
  ],
  20: [
    { id: '20-4', type: 'choice', difficulty: 1, question: '동치관계가 되기 위한 세 가지 조건은?', choices: ['반사적, 대칭적, 추이적', '반사적, 반대칭적, 추이적', '대칭적, 반대칭적, 추이적', '반사적, 대칭적, 반대칭적'], answer: '반사적, 대칭적, 추이적', hints: ['동치관계는 "같음"의 일반화입니다.', '"같음"은 반사적($a = a$), 대칭적($a = b \\Rightarrow b = a$), 추이적($a = b, b = c \\Rightarrow a = c$)입니다.'], explanation: '동치관계는 반사적, 대칭적, 추이적 세 조건을 모두 만족하는 관계입니다.', wrongAnalysis: '반대칭적은 순서관계(부분순서)의 조건이지 동치관계의 조건이 아닙니다.' },
    { id: '20-5', type: 'number', difficulty: 2, question: '$\\mathbb{Z}$에서 $a \\sim b \\iff 3 \\mid (a - b)$로 정의된 동치관계의 동치류의 개수를 구하시오.', answer: '3', hints: ['나머지가 같은 수끼리 동치류를 이룹니다.', '3으로 나눈 나머지는 $0, 1, 2$ 세 가지입니다.'], explanation: '$3$으로 나눈 나머지에 따라 $[0] = \\{\\ldots, -3, 0, 3, 6, \\ldots\\}$, $[1] = \\{\\ldots, -2, 1, 4, 7, \\ldots\\}$, $[2] = \\{\\ldots, -1, 2, 5, 8, \\ldots\\}$의 3개 동치류가 존재합니다.', wrongAnalysis: '동치류의 수를 무한으로 답하면 안 됩니다. 각 동치류의 원소는 무한하지만, 동치류의 수는 유한(3개)입니다.' }
  ],
  21: [
    { id: '21-4', type: 'choice', difficulty: 1, question: '부분순서(partial order)가 되기 위한 세 가지 조건은?', choices: ['반사적, 대칭적, 추이적', '반사적, 반대칭적, 추이적', '대칭적, 반대칭적, 추이적', '반사적, 대칭적, 반대칭적'], answer: '반사적, 반대칭적, 추이적', hints: ['부분순서는 "크기 비교"의 일반화입니다.', '대칭적이 아니라 반대칭적이 필요합니다.'], explanation: '부분순서는 반사적, 반대칭적($a \\leq b$이고 $b \\leq a$이면 $a = b$), 추이적 세 조건을 만족합니다.', wrongAnalysis: '동치관계의 조건(대칭적)과 혼동하지 마세요. 순서관계는 반대칭적이 필요합니다.' },
    { id: '21-5', type: 'choice', difficulty: 2, question: '집합 $\\{1, 2, 3, 4, 5, 6\\}$에서 "약수" 관계 $a \\mid b$는 부분순서인가?', choices: ['부분순서이다', '부분순서가 아니다'], answer: '부분순서이다', hints: ['반사적: $a \\mid a$, 반대칭적: $a \\mid b$이고 $b \\mid a$이면 $a = b$를 확인하세요.', '추이적: $a \\mid b$이고 $b \\mid c$이면 $a \\mid c$인지 확인하세요.'], explanation: '약수 관계는 반사적($a \\mid a$), 반대칭적(양의 정수에서 $a \\mid b$, $b \\mid a$이면 $a = b$), 추이적($a \\mid b$, $b \\mid c$이면 $a \\mid c$)이므로 부분순서입니다.', wrongAnalysis: '약수 관계는 전순서가 아닙니다(예: $2$와 $3$은 비교 불가). 하지만 부분순서는 맞습니다.' }
  ],
  22: [
    { id: '22-4', type: 'choice', difficulty: 1, question: '집합 $\\{a, b, c\\}$의 분할(partition)이 될 수 있는 것은?', choices: ['$\\{\\{a\\}, \\{b\\}, \\{c\\}\\}$', '$\\{\\{a, b\\}, \\{b, c\\}\\}$', '$\\{\\{a, c\\}\\}$', '$\\{\\{a\\}, \\emptyset, \\{b, c\\}\\}$'], answer: '$\\{\\{a\\}, \\{b\\}, \\{c\\}\\}$', hints: ['분할은 서로소인 공집합이 아닌 부분집합들의 모임으로, 합집합이 전체집합이어야 합니다.', '원소가 겹치면 안 되고 빠지면 안 됩니다.'], explanation: '$\\{\\{a\\}, \\{b\\}, \\{c\\}\\}$는 서로소이고 합집합이 $\\{a,b,c\\}$이며 공집합이 없으므로 분할입니다.', wrongAnalysis: '$\\{\\{a,b\\}, \\{b,c\\}\\}$는 $b$가 겹치므로 분할이 아닙니다. $\\{\\{a,c\\}\\}$는 $b$가 빠지고, 공집합을 포함하는 것도 분할이 아닙니다.' },
    { id: '22-5', type: 'number', difficulty: 2, question: '집합 $\\{1, 2, 3\\}$의 서로 다른 분할의 개수를 구하시오.', answer: '5', hints: ['분할의 개수는 벨 수(Bell number) $B_3$입니다.', '가능한 분할: $\\{\\{1\\},\\{2\\},\\{3\\}\\}$, $\\{\\{1,2\\},\\{3\\}\\}$, $\\{\\{1,3\\},\\{2\\}\\}$, $\\{\\{1\\},\\{2,3\\}\\}$, $\\{\\{1,2,3\\}\\}$.'], explanation: '$\\{1,2,3\\}$의 분할은 5개입니다. 이 수를 벨 수 $B_3 = 5$라 합니다.', wrongAnalysis: '부분집합의 수 $2^3 = 8$이나 순열의 수 $3! = 6$과 혼동하지 마세요.' }
  ]
});

// ===== FUNCTIONS.TS =====
addProblemsToFile('functions.ts', {
  23: [
    { id: '23-4', type: 'choice', difficulty: 1, question: '$A = \\{1, 2\\}$, $B = \\{a, b\\}$일 때, 다음 중 $A$에서 $B$로의 함수인 것은?', choices: ['$\\{(1,a), (1,b)\\}$', '$\\{(1,a), (2,b)\\}$', '$\\{(1,a)\\}$', '$\\{(a,1), (b,2)\\}$'], answer: '$\\{(1,a), (2,b)\\}$', hints: ['함수는 정의역의 모든 원소에 대해 정확히 하나의 값을 대응시켜야 합니다.', '$A$의 모든 원소 $1, 2$가 첫째 성분으로 한 번씩 나타나야 합니다.'], explanation: '$\\{(1,a),(2,b)\\}$는 $1 \\mapsto a, 2 \\mapsto b$로 정의역의 모든 원소에 유일한 값을 대응시키므로 함수입니다.', wrongAnalysis: '$\\{(1,a),(1,b)\\}$는 $1$에 두 값이 대응되어 유일성을 위반합니다.' },
    { id: '23-5', type: 'number', difficulty: 2, question: '$|A| = 3$, $|B| = 4$일 때, $A$에서 $B$로의 함수의 개수를 구하시오.', answer: '64', hints: ['함수의 수는 $|B|^{|A|}$입니다.', '$4^3 = 64$를 계산하세요.'], explanation: '함수의 수는 $|B|^{|A|} = 4^3 = 64$입니다.', wrongAnalysis: '$|A|^{|B|} = 3^4 = 81$로 계산하면 밑과 지수를 뒤바꾼 것입니다.' }
  ],
  24: [
    { id: '24-4', type: 'choice', difficulty: 1, question: '$f: \\{1,2,3\\} \\to \\{a,b,c\\}$, $f = \\{(1,a),(2,a),(3,b)\\}$는 단사인가?', choices: ['단사이다', '단사가 아니다'], answer: '단사가 아니다', hints: ['단사란 서로 다른 입력이 서로 다른 출력을 내는 것입니다.', '$f(1) = a = f(2)$인데 $1 \\neq 2$입니다.'], explanation: '$f(1) = f(2) = a$이지만 $1 \\neq 2$이므로 $f$는 단사가 아닙니다.', wrongAnalysis: '전사와 단사를 혼동하지 마세요. 단사는 "서로 다른 입력 → 서로 다른 출력"입니다.' },
    { id: '24-5', type: 'number', difficulty: 2, question: '$|A| = 4$, $|B| = 6$일 때, $A$에서 $B$로의 단사함수의 개수를 구하시오.', answer: '360', hints: ['단사함수 수는 $P(n,m) = \\frac{n!}{(n-m)!}$입니다.', '$P(6,4) = 6 \\times 5 \\times 4 \\times 3 = 360$입니다.'], explanation: '$P(6,4) = \\frac{6!}{2!} = \\frac{720}{2} = 360$입니다.', wrongAnalysis: '$6^4 = 1296$은 모든 함수의 수입니다. 단사함수만 셀 때는 이미 사용된 값을 제외합니다.' }
  ],
  25: [
    { id: '25-4', type: 'choice', difficulty: 1, question: '$|A| = |B| = 5$일 때, $A$에서 $B$로의 전단사함수의 개수는?', choices: ['$5$', '$25$', '$120$', '$3125$'], answer: '$120$', hints: ['전단사함수의 수는 $n!$입니다.', '$5! = 5 \\times 4 \\times 3 \\times 2 \\times 1$을 계산하세요.'], explanation: '$5! = 120$입니다.', wrongAnalysis: '$5^5 = 3125$는 모든 함수의 수이고, $25$는 $5^2$입니다.' },
    { id: '25-5', type: 'text', difficulty: 2, question: '$f: \\mathbb{R} \\to \\mathbb{R}$, $f(x) = 2x + 3$의 역함수를 구하시오.', answer: '$f^{-1}(y) = \\frac{y - 3}{2}$', hints: ['$y = 2x + 3$에서 $x$를 $y$로 표현하세요.', '$x = \\frac{y - 3}{2}$입니다.'], explanation: '$y = 2x + 3$에서 $x = \\frac{y-3}{2}$이므로 $f^{-1}(y) = \\frac{y-3}{2}$입니다.', wrongAnalysis: '$f^{-1}(y) = \\frac{1}{2y+3}$처럼 역수와 혼동하면 안 됩니다. 역함수는 $f$를 되돌리는 함수입니다.' }
  ],
  26: [
    { id: '26-4', type: 'choice', difficulty: 1, question: '$f(x) = x + 3$, $g(x) = 2x$일 때, $(g \\circ f)(1)$은?', choices: ['$5$', '$6$', '$7$', '$8$'], answer: '$8$', hints: ['$g \\circ f$는 $f$를 먼저 적용합니다.', '$f(1) = 4$이고 $g(4) = 8$입니다.'], explanation: '$(g \\circ f)(1) = g(f(1)) = g(4) = 8$입니다.', wrongAnalysis: '$(f \\circ g)(1) = f(2) = 5$와 혼동하지 마세요. 적용 순서가 중요합니다.' },
    { id: '26-5', type: 'number', difficulty: 2, question: '$f(x) = x^2$, $g(x) = x + 1$일 때, $(f \\circ g)(3) - (g \\circ f)(3)$의 값은?', answer: '6', hints: ['$(f \\circ g)(3) = f(g(3)) = f(4) = 16$', '$(g \\circ f)(3) = g(f(3)) = g(9) = 10$'], explanation: '$(f \\circ g)(3) = f(4) = 16$, $(g \\circ f)(3) = g(9) = 10$이므로 $16 - 10 = 6$입니다.', wrongAnalysis: '합성 순서를 혼동하면 값이 바뀝니다.' }
  ],
  27: [
    { id: '27-4', type: 'choice', difficulty: 1, question: '$f(x) = x^2$이고 $T = \\{4, 9\\}$일 때, $f^{-1}(T)$는?', choices: ['$\\{2, 3\\}$', '$\\{-2, 2, -3, 3\\}$', '$\\{16, 81\\}$', '$\\{4, 9\\}$'], answer: '$\\{-2, 2, -3, 3\\}$', hints: ['역상 $f^{-1}(T)$는 $f(x) \\in T$인 모든 $x$의 집합입니다.', '$x^2 = 4$이면 $x = \\pm 2$, $x^2 = 9$이면 $x = \\pm 3$입니다.'], explanation: '$f^{-1}(\\{4,9\\}) = \\{x \\mid x^2 \\in \\{4,9\\}\\} = \\{-3, -2, 2, 3\\}$입니다.', wrongAnalysis: '양수만 포함하여 $\\{2, 3\\}$으로 답하면 안 됩니다. 음수도 제곱하면 양수가 됩니다.' },
    { id: '27-5', type: 'number', difficulty: 2, question: '$f: \\{1,2,3,4\\} \\to \\{a,b\\}$, $f = \\{(1,a),(2,a),(3,b),(4,b)\\}$일 때, $|f^{-1}(\\{a\\})|$를 구하시오.', answer: '2', hints: ['$f^{-1}(\\{a\\})$는 $f(x) = a$인 모든 $x$의 집합입니다.', '$f(1) = a$, $f(2) = a$이므로 $f^{-1}(\\{a\\}) = \\{1, 2\\}$입니다.'], explanation: '$f(1) = a, f(2) = a$이므로 $f^{-1}(\\{a\\}) = \\{1, 2\\}$, 원소 수는 $2$입니다.', wrongAnalysis: '역상의 크기를 $|\\{a\\}| = 1$로 답하면 안 됩니다. 역상은 원래 집합에서의 원소들입니다.' }
  ]
});

// ===== INDUCTION.TS =====
addProblemsToFile('induction.ts', {
  28: [
    { id: '28-4', type: 'number', difficulty: 1, question: '폰 노이만 구성에서 $3 = \\{0, 1, 2\\}$입니다. $|3|$은 얼마인가?', answer: '3', hints: ['폰 노이만 구성에서 자연수 $n$은 정확히 $n$개의 원소를 가집니다.', '$3 = \\{0, 1, 2\\}$의 원소를 세어 보세요.'], explanation: '$3 = \\{0, 1, 2\\}$이므로 원소의 개수는 $3$입니다. 폰 노이만 구성에서 $|n| = n$이 항상 성립합니다.', wrongAnalysis: '$3$을 일반적인 숫자 $3$으로만 생각하고 원소 개수를 $1$로 답하면 안 됩니다.' },
    { id: '28-5', type: 'choice', difficulty: 2, question: '폰 노이만 구성에서 후속자 함수 $S(n)$의 정의는?', choices: ['$S(n) = n + 1$', '$S(n) = n \\cup \\{n\\}$', '$S(n) = \\{n\\}$', '$S(n) = \\mathcal{P}(n)$'], answer: '$S(n) = n \\cup \\{n\\}$', hints: ['후속자 함수는 집합론적 연산으로 정의됩니다.', '$n$에 $n$ 자체를 원소로 추가하는 연산입니다.'], explanation: '$S(n) = n \\cup \\{n\\}$입니다. 예: $S(2) = \\{0,1\\} \\cup \\{\\{0,1\\}\\} = \\{0, 1, 2\\} = 3$입니다.', wrongAnalysis: '$S(n) = n + 1$은 덧셈을 이미 전제하므로 순환 정의가 됩니다. 집합론적 정의 $n \\cup \\{n\\}$이 올바릅니다.' }
  ],
  29: [
    { id: '29-4', type: 'choice', difficulty: 1, question: '수학적 귀납법에서 "귀납 가설"이란?', choices: ['$P(0)$이 참이라는 것', '$P(n)$이 참이라고 가정하는 것', '$P(n+1)$을 증명하는 것', '모든 $n$에 대해 $P(n)$이 참이라는 결론'], answer: '$P(n)$이 참이라고 가정하는 것', hints: ['귀납 단계에서 사용하는 조건부 가정입니다.', '$P(n)$이 참이라는 가정 하에 $P(n+1)$을 유도합니다.'], explanation: '귀납 가설은 특정 $n$에서 $P(n)$이 참이라고 가정하는 것입니다. 이 가정을 이용하여 $P(n+1)$을 유도하는 것이 귀납 단계입니다.', wrongAnalysis: '귀납 가설은 증명하려는 것을 가정하는 것이 아니라, 특정 $n$에서의 조건부 가정입니다.' },
    { id: '29-5', type: 'number', difficulty: 2, question: '수학적 귀납법으로 $1 + 2 + \\cdots + n = \\frac{n(n+1)}{2}$을 증명할 때, $n = 10$에서의 공식 값은?', answer: '55', hints: ['$\\frac{n(n+1)}{2}$에 $n = 10$을 대입하세요.', '$\\frac{10 \\times 11}{2} = 55$입니다.'], explanation: '$\\frac{10 \\times 11}{2} = \\frac{110}{2} = 55$입니다.', wrongAnalysis: '$\\frac{10 \\times 10}{2} = 50$으로 계산하면 $n+1 = 11$을 $n = 10$으로 잘못 대입한 것입니다.' }
  ],
  30: [
    { id: '30-4', type: 'number', difficulty: 1, question: '재귀적 정의 $a_0 = 1$, $a_{n+1} = 2a_n$에서 $a_3$의 값을 구하시오.', answer: '8', hints: ['$a_1 = 2a_0 = 2$, $a_2 = 2a_1 = 4$를 먼저 구하세요.', '$a_3 = 2a_2 = 8$입니다.'], explanation: '$a_0 = 1, a_1 = 2, a_2 = 4, a_3 = 8$입니다.', wrongAnalysis: '재귀식을 한 번만 적용하여 $a_1 = 2$를 $a_3$으로 답하면 안 됩니다.' },
    { id: '30-5', type: 'number', difficulty: 2, question: '피보나치 수열에서 $F(8)$의 값을 구하시오. ($F(0) = 0$, $F(1) = 1$, $F(n) = F(n-1) + F(n-2)$)', answer: '21', hints: ['$F(0)=0, F(1)=1, F(2)=1, F(3)=2, F(4)=3, F(5)=5, F(6)=8, F(7)=13$를 순서대로 구하세요.', '$F(8) = F(7) + F(6) = 13 + 8$입니다.'], explanation: '$F(8) = F(7) + F(6) = 13 + 8 = 21$입니다.', wrongAnalysis: '$F(n) = 2F(n-1)$로 잘못 계산하면 안 됩니다. 반드시 직전 두 항의 합입니다.' }
  ]
});

// ===== INFINITY.TS =====
addProblemsToFile('infinity.ts', {
  31: [
    { id: '31-4', type: 'choice', difficulty: 1, question: '두 집합이 대등($A \\sim B$)하다는 것을 보이려면 무엇이 필요한가?', choices: ['단사 함수', '전사 함수', '전단사 함수', '상수 함수'], answer: '전단사 함수', hints: ['대등은 두 집합의 크기가 같다는 것입니다.', '빠짐없이 겹침 없이 짝지으려면 전단사가 필요합니다.'], explanation: '$A \\sim B$는 전단사 함수 $f: A \\to B$가 존재한다는 뜻입니다.', wrongAnalysis: '단사만으로는 $|A| \\leq |B|$이고, 전사만으로는 $|A| \\geq |B|$입니다.' },
    { id: '31-5', type: 'text', difficulty: 2, question: '$\\mathbb{N}$과 $\\{0, 2, 4, 6, \\ldots\\}$(음이 아닌 짝수의 집합)가 대등함을 보이는 전단사 함수를 구하시오.', answer: '$f(n) = 2n$', hints: ['$\\mathbb{N}$의 각 원소 $n$을 짝수 $2n$에 대응시킵니다.', '$f(n) = 2n$이 단사이고 전사인지 확인하세요.'], explanation: '$f(n) = 2n$은 단사($2m = 2n \\Rightarrow m = n$)이고 전사(짝수 $2k$에 대해 $f(k) = 2k$)이므로 전단사입니다.', wrongAnalysis: '$f(n) = n$으로 답하면 치역이 모든 짝수가 아니라 $\\mathbb{N}$ 전체가 됩니다.' }
  ],
  32: [
    { id: '32-4', type: 'choice', difficulty: 1, question: '유한집합의 정의로 올바른 것은?', choices: ['원소가 100개 이하인 집합', '자연수 $n$에 대해 $\\{0,1,\\ldots,n-1\\}$과 대등한 집합', '부분집합이 유한한 집합', '셀 수 있는 집합'], answer: '자연수 $n$에 대해 $\\{0,1,\\ldots,n-1\\}$과 대등한 집합', hints: ['유한집합은 어떤 자연수 $n$과 대등한 집합입니다.', '폰 노이만 구성에서 $n = \\{0, 1, \\ldots, n-1\\}$입니다.'], explanation: '유한집합은 어떤 자연수 $n$에 대해 $\\{0,1,\\ldots,n-1\\}$과 전단사가 존재하는 집합입니다.', wrongAnalysis: '"100개 이하"는 임의적인 기준이지 수학적 정의가 아닙니다.' },
    { id: '32-5', type: 'choice', difficulty: 2, question: '무한집합의 특성으로 올바른 것은?', choices: ['자신의 진부분집합과 대등할 수 없다', '자신의 진부분집합과 대등할 수 있다', '항상 비가산이다', '원소를 셀 수 없다'], answer: '자신의 진부분집합과 대등할 수 있다', hints: ['$\\mathbb{N}$과 $\\{0, 2, 4, \\ldots\\}$의 관계를 생각하세요.', '데데킨트의 정의: 무한집합은 진부분집합과 대등한 집합입니다.'], explanation: '무한집합은 자신의 진부분집합과 대등할 수 있으며, 이것이 데데킨트 무한의 정의입니다.', wrongAnalysis: '"항상 비가산"은 틀립니다. $\\mathbb{N}$은 무한이지만 가산입니다.' }
  ],
  33: [
    { id: '33-4', type: 'choice', difficulty: 1, question: '가산 집합(countable set)의 정의로 올바른 것은?', choices: ['원소가 유한한 집합', '$\\mathbb{N}$과 대등한 집합', '유한이거나 $\\mathbb{N}$과 대등한 집합', '$\\mathbb{R}$의 부분집합'], answer: '유한이거나 $\\mathbb{N}$과 대등한 집합', hints: ['가산은 유한 또는 가산무한을 포함합니다.', '원소를 자연수로 번호를 매길 수 있는 집합입니다.'], explanation: '가산 집합은 유한집합이거나 $\\mathbb{N}$과 대등한(가산무한) 집합입니다.', wrongAnalysis: '"$\\mathbb{N}$과 대등한 집합만"이라고 하면 유한집합을 제외하게 됩니다.' },
    { id: '33-5', type: 'choice', difficulty: 2, question: '다음 중 가산무한인 집합은?', choices: ['$\\mathbb{R}$', '$\\mathbb{Q}$', '$\\mathcal{P}(\\mathbb{N})$', '$(0, 1)$'], answer: '$\\mathbb{Q}$', hints: ['유리수 집합은 자연수와 대등함이 알려져 있습니다.', '$\\mathbb{R}$은 칸토어의 대각선 논법에 의해 비가산입니다.'], explanation: '$\\mathbb{Q}$는 가산무한입니다. $\\mathbb{R}$, $\\mathcal{P}(\\mathbb{N})$, $(0,1)$은 모두 비가산입니다.', wrongAnalysis: '$\\mathbb{Q}$가 조밀하므로 비가산이라고 착각하면 안 됩니다. 조밀성과 가산성은 별개 개념입니다.' }
  ],
  34: [
    { id: '34-4', type: 'choice', difficulty: 1, question: '칸토어의 대각선 논법이 증명하는 것은?', choices: ['$\\mathbb{N}$이 무한하다', '$\\mathbb{R}$이 가산이다', '$\\mathbb{R}$이 비가산이다', '$\\mathbb{Q}$가 비가산이다'], answer: '$\\mathbb{R}$이 비가산이다', hints: ['대각선 논법은 $\\mathbb{N}$에서 $\\mathbb{R}$로의 전단사가 없음을 보입니다.', '어떤 나열에서도 빠지는 실수를 구성합니다.'], explanation: '칸토어의 대각선 논법은 실수 집합 $\\mathbb{R}$이 자연수 집합 $\\mathbb{N}$보다 크다(비가산)는 것을 증명합니다.', wrongAnalysis: '$\\mathbb{Q}$는 가산이므로 "$\\mathbb{Q}$가 비가산이다"는 거짓입니다.' },
    { id: '34-5', type: 'choice', difficulty: 2, question: '칸토어의 정리 "$|A| < |\\mathcal{P}(A)|$"에서 $A = \\{1, 2, 3\\}$일 때, $|A|$와 $|\\mathcal{P}(A)|$는 각각?', choices: ['$3$과 $6$', '$3$과 $8$', '$3$과 $9$', '$8$과 $3$'], answer: '$3$과 $8$', hints: ['$|A| = 3$이고 $|\\mathcal{P}(A)| = 2^{|A|}$입니다.', '$2^3 = 8$입니다.'], explanation: '$|A| = 3$이고 $|\\mathcal{P}(A)| = 2^3 = 8$이므로 $3 < 8$으로 칸토어의 정리가 성립합니다.', wrongAnalysis: '$|\\mathcal{P}(A)| = 2 \\times 3 = 6$으로 계산하면 안 됩니다. 멱집합의 크기는 $2^n$입니다.' }
  ],
  35: [
    { id: '35-4', type: 'choice', difficulty: 1, question: '$|\\mathbb{N}|$을 나타내는 기수는?', choices: ['$0$', '$1$', '$\\aleph_0$', '$\\aleph_1$'], answer: '$\\aleph_0$', hints: ['$\\aleph_0$(알레프 제로)는 가장 작은 무한 기수입니다.', '자연수 집합의 크기를 나타냅니다.'], explanation: '$\\aleph_0 = |\\mathbb{N}|$은 가장 작은 무한 기수입니다.', wrongAnalysis: '$\\aleph_1$은 $\\aleph_0$ 다음의 무한 기수로, 자연수의 크기와는 다릅니다.' },
    { id: '35-5', type: 'number', difficulty: 2, question: '서수(ordinal)로서 $\\omega + 1$의 원소의 개수를 구하시오. (즉, $|\\omega + 1|$은?)', answer: '$\\omega + 1$은 무한집합이므로 원소 수를 자연수로 나타낼 수 없다', hints: ['$\\omega = \\{0, 1, 2, 3, \\ldots\\}$이고 $\\omega + 1 = \\omega \\cup \\{\\omega\\}$입니다.', '$\\omega + 1$은 가산무한 집합이므로 기수는 $\\aleph_0$입니다.'], explanation: '서수 $\\omega + 1 = \\{0, 1, 2, \\ldots, \\omega\\}$는 가산무한이므로 $|\\omega + 1| = \\aleph_0$입니다. 서수로서 $\\omega \\neq \\omega + 1$이지만 기수로서 $|\\omega| = |\\omega + 1| = \\aleph_0$입니다.', wrongAnalysis: '서수와 기수를 혼동하면 안 됩니다. 서수로서 $\\omega + 1 > \\omega$이지만, 기수(크기)로서는 같습니다.' }
  ],
  36: [
    { id: '36-4', type: 'choice', difficulty: 1, question: '초한 귀납법(transfinite induction)은 어디까지 확장된 귀납법인가?', choices: ['자연수까지', '정수까지', '모든 서수까지', '실수까지'], answer: '모든 서수까지', hints: ['초한 귀납법은 자연수를 넘어 무한 서수에도 적용됩니다.', '"초한"이란 "유한을 넘어선"이라는 뜻입니다.'], explanation: '초한 귀납법은 수학적 귀납법을 모든 서수(자연수, $\\omega$, $\\omega+1$, ...)로 확장한 것입니다.', wrongAnalysis: '실수에 대해서는 정렬 순서가 자명하지 않으므로, 일반적으로 실수에 직접 적용하지 않습니다.' },
    { id: '36-5', type: 'choice', difficulty: 2, question: '초한 귀납법에서 극한 서수(limit ordinal) 단계에서 확인해야 하는 것은?', choices: ['$P(0)$이 참인지', '$P(\\alpha)$이면 $P(\\alpha+1)$인지', '모든 $\\beta < \\lambda$에 대해 $P(\\beta)$이면 $P(\\lambda)$인지', '$P(\\omega)$만 확인하면 된다'], answer: '모든 $\\beta < \\lambda$에 대해 $P(\\beta)$이면 $P(\\lambda)$인지', hints: ['극한 서수는 후속자가 아닌 서수입니다 (예: $\\omega$).', '극한 단계에서는 이전의 모든 서수에서 성립함을 가정하고 극한 서수에서의 성립을 보입니다.'], explanation: '초한 귀납법의 극한 단계: 극한 서수 $\\lambda$에 대해, $\\beta < \\lambda$인 모든 $\\beta$에서 $P(\\beta)$가 성립하면 $P(\\lambda)$도 성립함을 보입니다.', wrongAnalysis: '$P(\\omega)$만 확인하면 된다고 생각하면 안 됩니다. 모든 극한 서수에 대해 확인해야 합니다.' }
  ]
});

// ===== CARDINALS.TS =====
addProblemsToFile('cardinals.ts', {
  37: [
    { id: '37-4', type: 'choice', difficulty: 1, question: '슈뢰더-베른슈타인 정리에 의해 $|A| = |B|$를 보이려면?', choices: ['$A \\to B$ 전사만 필요', '$A \\to B$ 단사만 필요', '$A \\to B$ 단사와 $B \\to A$ 단사 모두 필요', '$A = B$이어야 한다'], answer: '$A \\to B$ 단사와 $B \\to A$ 단사 모두 필요', hints: ['슈뢰더-베른슈타인: 양방향 단사가 있으면 전단사가 존재합니다.', '$|A| \\leq |B|$이고 $|B| \\leq |A|$이면 $|A| = |B|$입니다.'], explanation: '슈뢰더-베른슈타인 정리: $A \\to B$ 단사와 $B \\to A$ 단사가 모두 존재하면 $|A| = |B|$입니다.', wrongAnalysis: '한 방향의 단사만으로는 $|A| \\leq |B|$만 보입니다.' },
    { id: '37-5', type: 'choice', difficulty: 2, question: '알레프 수의 순서로 올바른 것은?', choices: ['$\\aleph_1 < \\aleph_0 < \\aleph_2$', '$\\aleph_0 < \\aleph_1 < \\aleph_2$', '$\\aleph_0 = \\aleph_1 < \\aleph_2$', '$\\aleph_2 < \\aleph_1 < \\aleph_0$'], answer: '$\\aleph_0 < \\aleph_1 < \\aleph_2$', hints: ['$\\aleph_0$은 가장 작은 무한 기수입니다.', '알레프 수는 첨자가 커질수록 증가합니다.'], explanation: '알레프 수는 $\\aleph_0 < \\aleph_1 < \\aleph_2 < \\cdots$로 단조증가합니다.', wrongAnalysis: '알레프 수는 서로 다른 무한 기수이므로 등호가 성립하지 않습니다.' }
  ],
  38: [
    { id: '38-4', type: 'choice', difficulty: 1, question: '기수의 덧셈 $|A| + |B|$의 정의는?', choices: ['$|A \\cap B|$', '$|A \\cup B|$ (단, $A$와 $B$는 서로소)', '$|A \\times B|$', '$|A^B|$'], answer: '$|A \\cup B|$ (단, $A$와 $B$는 서로소)', hints: ['기수의 덧셈은 서로소인 두 집합의 합집합 크기입니다.', '$A \\cap B = \\emptyset$일 때 $|A \\cup B| = |A| + |B|$입니다.'], explanation: '기수의 덧셈 $\\kappa + \\lambda$는 서로소인 집합 $A$, $B$($|A| = \\kappa$, $|B| = \\lambda$)에 대해 $|A \\cup B|$로 정의됩니다.', wrongAnalysis: '$|A \\times B|$는 기수의 곱셈 $\\kappa \\cdot \\lambda$의 정의입니다.' },
    { id: '38-5', type: 'choice', difficulty: 2, question: '무한 기수 $\\kappa$에 대해 $\\kappa + \\kappa$의 값은?', choices: ['$2\\kappa$', '$\\kappa^2$', '$\\kappa$', '$2^\\kappa$'], answer: '$\\kappa$', hints: ['무한 기수에서는 $\\kappa + \\kappa = \\kappa$가 성립합니다.', '예: $\\aleph_0 + \\aleph_0 = \\aleph_0$ ($\\mathbb{N}$의 두 복사본을 합쳐도 가산)'], explanation: '무한 기수 $\\kappa$에 대해 $\\kappa + \\kappa = \\kappa$입니다. 유한 산술과 달리 무한 기수 산술에서는 자기 자신과의 합이 변하지 않습니다.', wrongAnalysis: '유한 산술의 직관으로 $2\\kappa > \\kappa$라고 답하면 안 됩니다. 무한 기수 산술은 유한과 다릅니다.' }
  ],
  39: [
    { id: '39-4', type: 'number', difficulty: 1, question: '$2^3$을 기수의 거듭제곱으로 해석하면, 이는 $|B^A|$에서 $|A| = 3$, $|B| = 2$일 때의 값입니다. $2^3$을 구하시오.', answer: '8', hints: ['$|B^A| = |B|^{|A|}$는 $A$에서 $B$로의 함수의 수입니다.', '$2^3 = 8$입니다.'], explanation: '$|B^A| = 2^3 = 8$이며, 이는 $3$개의 원소를 가진 집합에서 $2$개의 원소를 가진 집합으로의 함수의 수입니다.', wrongAnalysis: '$3^2 = 9$로 계산하면 밑과 지수를 뒤바꾼 것입니다.' },
    { id: '39-5', type: 'choice', difficulty: 2, question: '칸토어의 정리에 의해 항상 성립하는 것은?', choices: ['$|A| = |\\mathcal{P}(A)|$', '$|A| > |\\mathcal{P}(A)|$', '$|A| < |\\mathcal{P}(A)|$', '$|A| \\leq |\\mathcal{P}(A)|$이지만 등호가 성립할 수 있다'], answer: '$|A| < |\\mathcal{P}(A)|$', hints: ['칸토어의 정리: 어떤 집합이든 멱집합이 엄격히 더 큽니다.', '$|\\mathcal{P}(A)| = 2^{|A|} > |A|$입니다.'], explanation: '칸토어의 정리에 의해 모든 집합 $A$에 대해 $|A| < |\\mathcal{P}(A)|$입니다.', wrongAnalysis: '등호가 성립할 수 있다고 생각하면 안 됩니다. 칸토어의 정리는 엄격한 부등식입니다.' }
  ],
  40: [
    { id: '40-4', type: 'choice', difficulty: 1, question: '서수(ordinal number)의 역할은?', choices: ['집합의 크기를 나타낸다', '정렬 집합의 순서 유형을 나타낸다', '실수의 순서를 나타낸다', '함수의 정의역을 나타낸다'], answer: '정렬 집합의 순서 유형을 나타낸다', hints: ['서수는 "몇 번째"와 관련된 개념입니다.', '기수가 "얼마나 많은가"라면 서수는 "어떤 순서 구조인가"입니다.'], explanation: '서수는 정렬 집합(well-ordered set)의 순서 유형(order type)을 나타내는 수입니다.', wrongAnalysis: '기수(cardinal)와 서수(ordinal)를 혼동하면 안 됩니다. 기수는 크기, 서수는 순서 구조입니다.' },
    { id: '40-5', type: 'choice', difficulty: 2, question: '서수 $\\omega$에 대한 설명으로 옳은 것은?', choices: ['가장 큰 자연수', '가장 작은 무한 서수', '가장 작은 비가산 서수', '$\\aleph_1$과 같다'], answer: '가장 작은 무한 서수', hints: ['$\\omega = \\{0, 1, 2, 3, \\ldots\\}$는 모든 자연수의 집합입니다.', '$\\omega$보다 작은 서수는 모두 유한(자연수)입니다.'], explanation: '$\\omega$는 가장 작은 무한 서수이며, 기수로서 $|\\omega| = \\aleph_0$입니다.', wrongAnalysis: '$\\omega$는 "가장 큰 자연수"가 아닙니다. 자연수 중 가장 큰 것은 없으며, $\\omega$는 모든 자연수보다 큰 첫 번째 서수입니다.' }
  ],
  41: [
    { id: '41-4', type: 'choice', difficulty: 1, question: '서수의 후속자 $\\alpha + 1$의 정의는?', choices: ['$\\alpha \\cup \\{\\alpha\\}$', '$\\alpha + \\alpha$', '$\\mathcal{P}(\\alpha)$', '$\\alpha \\times \\{0, 1\\}$'], answer: '$\\alpha \\cup \\{\\alpha\\}$', hints: ['자연수에서의 후속자 정의와 동일합니다.', '$S(n) = n \\cup \\{n\\}$의 서수로의 확장입니다.'], explanation: '서수의 후속자는 $\\alpha + 1 = \\alpha \\cup \\{\\alpha\\}$로 정의됩니다.', wrongAnalysis: '$\\alpha + \\alpha$는 서수의 덧셈으로, 후속자와는 다른 연산입니다.' },
    { id: '41-5', type: 'choice', difficulty: 2, question: '극한 서수(limit ordinal)의 예로 올바른 것은?', choices: ['$0$', '$5$', '$\\omega$', '$\\omega + 1$'], answer: '$\\omega$', hints: ['극한 서수는 $0$이 아니면서 어떤 서수의 후속자도 아닌 서수입니다.', '$\\omega$는 어떤 자연수의 후속자도 아닙니다.'], explanation: '$\\omega = \\{0, 1, 2, \\ldots\\}$는 어떤 서수의 후속자가 아닌 극한 서수입니다. $5 = 4 + 1$은 후속자이고, $\\omega + 1$도 $\\omega$의 후속자입니다.', wrongAnalysis: '$0$은 극한 서수로 분류하지 않습니다. $\\omega + 1$은 $\\omega$의 후속자이므로 극한 서수가 아닙니다.' }
  ]
});

// ===== APPLICATIONS.TS =====
addProblemsToFile('applications.ts', {
  46: [
    { id: '46-4', type: 'choice', difficulty: 1, question: '러셀의 역설에서 발생하는 모순은?', choices: ['$R = \\emptyset$이면서 $R \\neq \\emptyset$', '$R \\in R \\Leftrightarrow R \\notin R$', '$|R| = 0$이면서 $|R| = 1$', '$R \\subseteq R$이면서 $R \\not\\subseteq R$'], answer: '$R \\in R \\Leftrightarrow R \\notin R$', hints: ['$R = \\{x \\mid x \\notin x\\}$에 $R$ 자체를 대입합니다.', '$R \\in R$이면 정의에 의해 $R \\notin R$이고, 반대도 마찬가지입니다.'], explanation: '$R \\in R$이면 $R$의 정의에 의해 $R \\notin R$이고, $R \\notin R$이면 $R \\in R$이어야 합니다.', wrongAnalysis: '이 역설은 원소 관계($\\in$)에 관한 모순이지 부분집합이나 크기에 관한 것이 아닙니다.' },
    { id: '46-5', type: 'choice', difficulty: 2, question: 'ZF 공리계에서 러셀의 역설을 방지하는 핵심 공리는?', choices: ['외연 공리', '분리 공리', '무한 공리', '선택 공리'], answer: '분리 공리', hints: ['분리 공리는 기존 집합에서만 부분집합을 분리합니다.', '무제한적 내포 대신 "$A$ 안에서 조건을 만족하는 것"만 허용합니다.'], explanation: '분리 공리는 $\\{x \\in A \\mid \\varphi(x)\\}$만 허용하여 $\\{x \\mid x \\notin x\\}$ 같은 무제한적 구성을 방지합니다.', wrongAnalysis: '선택 공리는 러셀의 역설과 무관합니다. 핵심은 집합 구성을 제한하는 분리 공리입니다.' }
  ],
  47: [
    { id: '47-4', type: 'choice', difficulty: 1, question: '부울 대수에서 집합의 합집합 $\\cup$에 대응하는 논리 연산은?', choices: ['$\\land$ (AND)', '$\\lor$ (OR)', '$\\neg$ (NOT)', '$\\rightarrow$ (조건문)'], answer: '$\\lor$ (OR)', hints: ['합집합은 "적어도 하나에 속하는" 것입니다.', '"적어도 하나"는 논리적 "또는"에 해당합니다.'], explanation: '$x \\in A \\cup B$는 "$x \\in A$ 또는 $x \\in B$"이므로, $\\cup$는 $\\lor$(OR)에 대응합니다.', wrongAnalysis: '$\\land$(AND)는 교집합 $\\cap$에 대응합니다. 합집합은 $\\lor$입니다.' },
    { id: '47-5', type: 'text', difficulty: 2, question: '집합론의 분배법칙 $A \\cap (B \\cup C) = (A \\cap B) \\cup (A \\cap C)$를 논리학으로 번역하시오.', answer: '$p \\land (q \\lor r) = (p \\land q) \\lor (p \\land r)$', hints: ['$\\cap \\to \\land$, $\\cup \\to \\lor$로 대응시킵니다.', '집합 $A, B, C$를 명제 $p, q, r$로 바꿉니다.'], explanation: '$\\cap \\to \\land$, $\\cup \\to \\lor$를 적용하면 $p \\land (q \\lor r) = (p \\land q) \\lor (p \\land r)$이 됩니다.', wrongAnalysis: '대응을 반대로 적용하여 $\\cap \\to \\lor$로 바꾸면 안 됩니다.' }
  ],
  48: [
    { id: '48-4', type: 'choice', difficulty: 1, question: '이산 위상(discrete topology)의 정의는?', choices: ['$\\tau = \\{\\emptyset, X\\}$', '$\\tau = \\mathcal{P}(X)$', '$\\tau = \\{X\\}$', '$\\tau = \\emptyset$'], answer: '$\\tau = \\mathcal{P}(X)$', hints: ['이산 위상에서는 모든 부분집합이 열린집합입니다.', '가능한 가장 많은 열린집합을 가지는 위상입니다.'], explanation: '이산 위상은 $\\tau = \\mathcal{P}(X)$, 즉 $X$의 모든 부분집합이 열린집합인 위상입니다.', wrongAnalysis: '$\\tau = \\{\\emptyset, X\\}$는 비이산 위상(indiscrete topology)입니다.' },
    { id: '48-5', type: 'number', difficulty: 2, question: '$X = \\{a, b, c\\}$에서 이산 위상의 열린집합의 개수는?', answer: '8', hints: ['이산 위상에서 $\\tau = \\mathcal{P}(X)$입니다.', '$|\\mathcal{P}(X)| = 2^3 = 8$입니다.'], explanation: '이산 위상에서 $\\tau = \\mathcal{P}(X)$이므로 열린집합의 개수는 $2^3 = 8$입니다.', wrongAnalysis: '비이산 위상의 열린집합 수 $2$와 혼동하지 마세요.' }
  ],
  49: [
    { id: '49-4', type: 'choice', difficulty: 1, question: '다음 중 거대 기수(large cardinal)의 예는?', choices: ['$\\aleph_0$', '$\\aleph_1$', '도달 불가능 기수(inaccessible cardinal)', '$2^{\\aleph_0}$'], answer: '도달 불가능 기수(inaccessible cardinal)', hints: ['거대 기수는 ZFC에서 존재를 증명할 수 없는 매우 큰 기수입니다.', '$\\aleph_0$이나 $\\aleph_1$은 ZFC에서 존재가 보장됩니다.'], explanation: '도달 불가능 기수는 ZFC에서 존재를 증명할 수 없는 거대 기수의 가장 기본적인 예입니다.', wrongAnalysis: '$\\aleph_0$이나 $\\aleph_1$은 ZFC에서 존재가 보장되므로 거대 기수가 아닙니다.' },
    { id: '49-5', type: 'choice', difficulty: 2, question: '강제법(forcing)의 주요 용도는?', choices: ['함수의 연속성을 증명한다', '집합론의 모형을 확장하여 독립성을 증명한다', '기수의 크기를 계산한다', '서수의 순서를 결정한다'], answer: '집합론의 모형을 확장하여 독립성을 증명한다', hints: ['코엔이 CH의 독립성을 증명하기 위해 발명했습니다.', '기존 모형에 새로운 집합을 추가하여 원하는 성질의 모형을 만듭니다.'], explanation: '강제법은 집합론의 기존 모형을 확장하여 특정 명제가 성립하거나 성립하지 않는 새 모형을 구성하는 기법입니다.', wrongAnalysis: '강제법은 기수 계산이나 함수의 연속성과는 관련이 없습니다.' }
  ]
});

console.log('All files processed!');
