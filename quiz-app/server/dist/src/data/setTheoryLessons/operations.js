"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.operationsLessons = void 0;
exports.operationsLessons = [
    {
        "id": 11,
        "title": "합집합과 교집합",
        "category": "집합의 연산",
        "level": "기초",
        "question": "두 집합을 합치거나 겹치는 부분만 뽑으면 어떻게 되는가?",
        "concept": {
            "intro": "집합 연산은 기존의 집합들로부터 새로운 집합을 만들어내는 방법입니다. 가장 기본적인 두 가지 연산이 **합집합(union)**과 **교집합(intersection)**입니다.\n\n:::definition[합집합]\n**합집합** $A \\cup B$는 집합 $A$ 또는 집합 $B$에 속하는 모든 원소를 모은 집합입니다. '또는'은 수학에서 '적어도 하나'를 의미하므로, 양쪽 모두에 속하는 원소도 포함됩니다. 형식적으로 $A \\cup B = \\{x \\mid x \\in A \\text{ 또는 } x \\in B\\}$입니다. 예를 들어, $\\{1, 2, 3\\} \\cup \\{3, 4, 5\\} = \\{1, 2, 3, 4, 5\\}$입니다. $3$은 양쪽 모두에 속하지만 합집합에는 한 번만 나타납니다.\n:::\n\n:::definition[교집합]\n**교집합** $A \\cap B$는 집합 $A$와 집합 $B$에 동시에 속하는 모든 원소를 모은 집합입니다. 형식적으로 $A \\cap B = \\{x \\mid x \\in A \\text{ 그리고 } x \\in B\\}$입니다. 예를 들어, $\\{1, 2, 3\\} \\cap \\{3, 4, 5\\} = \\{3\\}$입니다. 만약 두 집합에 공통 원소가 없으면, 교집합은 공집합이 됩니다: $A \\cap B = \\emptyset$. 이때 두 집합을 **서로소(disjoint)**라고 합니다.\n:::\n\n:::theorem[포함-배제 원리]\n합집합과 교집합의 원소 개수 사이에는 중요한 관계가 있습니다. 이를 **포함-배제 원리(inclusion-exclusion principle)**라 합니다: $|A \\cup B| = |A| + |B| - |A \\cap B|$. 이 공식에서 $|A \\cap B|$를 빼는 이유는, $|A| + |B|$를 계산할 때 교집합에 속하는 원소가 두 번 세어지기 때문입니다.\n:::\n\n벤 다이어그램으로 이해하면 더 직관적입니다. 합집합은 두 원의 전체 영역이고, 교집합은 두 원이 겹치는 영역입니다.",
            "intuition": "합집합은 두 반의 학생을 모두 모으는 것과 같습니다. 1반 학생과 2반 학생을 전부 모으되, 양쪽 반에 모두 속한 학생(예: 전학 온 학생)은 한 번만 셉니다. 교집합은 두 반에 모두 속한 학생만 찾는 것과 같습니다.",
            "formula": "A \\cup B = \\{x \\mid x \\in A \\text{ 또는 } x \\in B\\} \\text{: 합집합}\nA \\cap B = \\{x \\mid x \\in A \\text{ 그리고 } x \\in B\\} \\text{: 교집합}\n|A \\cup B| = |A| + |B| - |A \\cap B| \\text{: 포함-배제 원리}",
            "summary": "합집합 $A \\cup B$는 두 집합의 원소를 모두 모은 것이고, 교집합 $A \\cap B$는 공통 원소만 모은 것입니다."
        },
        "examples": [
            {
                "title": "합집합과 교집합 구하기",
                "problem": "$A = \\{1, 2, 3, 4\\}$, $B = \\{3, 4, 5, 6\\}$일 때, $A \\cup B$와 $A \\cap B$를 구하시오.",
                "steps": [
                    "$A \\cup B$: $A$ 또는 $B$에 속하는 모든 원소를 모읍니다.",
                    "$A$의 원소: $1, 2, 3, 4$ / $B$의 원소: $3, 4, 5, 6$ → 합치면 $\\{1, 2, 3, 4, 5, 6\\}$",
                    "$A \\cap B$: $A$와 $B$에 동시에 속하는 원소를 찾습니다.",
                    "$3$과 $4$가 양쪽 모두에 속하므로 $A \\cap B = \\{3, 4\\}$"
                ],
                "answer": "$A \\cup B = \\{1, 2, 3, 4, 5, 6\\}$, $A \\cap B = \\{3, 4\\}$",
                "lesson": "합집합은 두 집합의 원소를 빠짐없이 모으되 중복은 한 번만 쓰고, 교집합은 공통 원소만 찾습니다."
            },
            {
                "title": "[기본] 서로소 집합의 판별",
                "problem": "$A = \\{1, 3, 5\\}$, $B = \\{2, 4, 6\\}$일 때, $A$와 $B$가 서로소인지 판별하시오.",
                "steps": [
                    "$A \\cap B$를 구합니다: $A$와 $B$에 공통으로 속하는 원소를 찾습니다.",
                    "$A$의 원소 $1, 3, 5$ 중 $B = \\{2, 4, 6\\}$에 속하는 것은 없습니다.",
                    "$A \\cap B = \\emptyset$이므로 $A$와 $B$는 서로소입니다."
                ],
                "answer": "$A \\cap B = \\emptyset$이므로 서로소이다.",
                "lesson": "두 집합이 서로소(disjoint)란 교집합이 공집합, 즉 공통 원소가 없다는 뜻입니다."
            },
            {
                "title": "[응용] 포함-배제 원리 활용",
                "problem": "학생 50명 중 영어를 수강하는 학생 30명, 수학을 수강하는 학생 25명, 둘 다 수강하는 학생 10명일 때, 둘 중 하나도 수강하지 않는 학생 수를 구하시오.",
                "steps": [
                    "$|E| = 30$, $|M| = 25$, $|E \\cap M| = 10$으로 놓습니다.",
                    "포함-배제 원리: $|E \\cup M| = |E| + |M| - |E \\cap M| = 30 + 25 - 10 = 45$",
                    "둘 중 하나도 수강하지 않는 학생: $50 - |E \\cup M| = 50 - 45 = 5$명"
                ],
                "answer": "$5$명",
                "lesson": "포함-배제 원리는 합집합의 크기를 구할 때 중복 세기를 보정하는 핵심 도구입니다."
            },
            {
                "title": "[응용] 교환법칙과 결합법칙",
                "problem": "$A \\cup (B \\cup C) = (A \\cup B) \\cup C$임을 원소 판별로 보이시오.",
                "steps": [
                    "$x \\in A \\cup (B \\cup C)$이면 $x \\in A$ 또는 $x \\in B \\cup C$입니다.",
                    "$x \\in B \\cup C$이면 $x \\in B$ 또는 $x \\in C$입니다.",
                    "따라서 $x \\in A$ 또는 $x \\in B$ 또는 $x \\in C$입니다.",
                    "이는 $x \\in A \\cup B$ 또는 $x \\in C$, 즉 $x \\in (A \\cup B) \\cup C$와 동치입니다.",
                    "역방향도 동일하게 성립하므로 두 집합은 같습니다."
                ],
                "answer": "양쪽 모두 '$x \\in A$ 또는 $x \\in B$ 또는 $x \\in C$'와 동치이므로 $A \\cup (B \\cup C) = (A \\cup B) \\cup C$.",
                "lesson": "합집합의 결합법칙은 논리합(OR)의 결합법칙에 대응합니다."
            },
            {
                "title": "[심화] 세 집합의 포함-배제 원리",
                "problem": "$|A| = 20$, $|B| = 15$, $|C| = 18$, $|A \\cap B| = 8$, $|A \\cap C| = 7$, $|B \\cap C| = 6$, $|A \\cap B \\cap C| = 3$일 때, $|A \\cup B \\cup C|$를 구하시오.",
                "steps": [
                    "세 집합의 포함-배제: $|A \\cup B \\cup C| = |A| + |B| + |C| - |A \\cap B| - |A \\cap C| - |B \\cap C| + |A \\cap B \\cap C|$",
                    "$= 20 + 15 + 18 - 8 - 7 - 6 + 3$",
                    "$= 53 - 21 + 3 = 35$"
                ],
                "answer": "$|A \\cup B \\cup C| = 35$",
                "lesson": "세 집합의 포함-배제에서는 교집합을 빼되, 세 집합의 공통 부분을 다시 더해야 합니다."
            }
        ],
        "problems": [
            {
                "id": "11-1",
                "type": "choice",
                "difficulty": 1,
                "question": "$A = \\{1, 3, 5\\}$, $B = \\{2, 3, 4\\}$일 때, $A \\cap B$는?",
                "choices": [
                    "$\\{1, 2, 3, 4, 5\\}$",
                    "$\\{3\\}$",
                    "$\\{1, 5\\}$",
                    "$\\emptyset$"
                ],
                "answer": "$\\{3\\}$",
                "hints": [
                    "교집합은 두 집합에 동시에 속하는 원소의 집합입니다.",
                    "$A$와 $B$의 원소를 비교하여 공통 원소를 찾으세요.",
                    "$3$이 $A$에도 $B$에도 속하는 유일한 원소입니다."
                ],
                "explanation": "$A \\cap B$는 $A$와 $B$ 모두에 속하는 원소의 집합입니다. $A = \\{1, 3, 5\\}$와 $B = \\{2, 3, 4\\}$에서 공통 원소는 $3$뿐이므로 $A \\cap B = \\{3\\}$입니다.",
                "wrongAnalysis": "합집합과 교집합을 혼동하여 $\\{1, 2, 3, 4, 5\\}$를 답하는 경우가 있습니다. $\\cup$는 합집합(합치기), $\\cap$는 교집합(겹치는 부분)임을 기억하세요."
            },
            {
                "id": "11-2",
                "type": "number",
                "difficulty": 2,
                "question": "$|A| = 10$, $|B| = 8$, $|A \\cap B| = 3$일 때, $|A \\cup B|$를 구하시오.",
                "answer": "15",
                "hints": [
                    "포함-배제 원리를 사용하세요: $|A \\cup B| = |A| + |B| - |A \\cap B|$",
                    "주어진 값을 대입하세요: $|A \\cup B| = 10 + 8 - 3$",
                    "$10 + 8 - 3 = 15$"
                ],
                "explanation": "포함-배제 원리에 의해 $|A \\cup B| = |A| + |B| - |A \\cap B| = 10 + 8 - 3 = 15$입니다.",
                "wrongAnalysis": "$|A \\cap B|$를 빼지 않고 $10 + 8 = 18$로 답하는 실수에 주의하세요. 교집합의 원소는 $|A|$와 $|B|$ 양쪽에서 중복 계산되므로 한 번 빼주어야 합니다."
            },
            {
                "id": "11-3",
                "type": "number",
                "difficulty": 3,
                "question": "어떤 반 학생 40명 중 수학 동아리에 속한 학생이 25명, 과학 동아리에 속한 학생이 20명이고, 둘 다 속하지 않은 학생이 5명이다. 두 동아리 모두에 속한 학생은 몇 명인가?",
                "answer": "10",
                "hints": [
                    "전체 학생 40명 중 둘 다 속하지 않은 5명을 빼면, 적어도 하나의 동아리에 속한 학생 수가 나옵니다.",
                    "적어도 하나에 속한 학생: $40 - 5 = 35$명. 이것이 $|A \\cup B|$입니다.",
                    "$|A \\cup B| = |A| + |B| - |A \\cap B|$에서 $35 = 25 + 20 - |A \\cap B|$를 풀어보세요."
                ],
                "explanation": "적어도 하나의 동아리에 속한 학생 수는 $40 - 5 = 35$명입니다. 포함-배제 원리에 의해 $35 = 25 + 20 - |A \\cap B|$이므로 $|A \\cap B| = 25 + 20 - 35 = 10$명입니다.",
                "wrongAnalysis": "전체에서 '둘 다 속하지 않은 학생'을 빼는 과정을 빠뜨리고, $40 = 25 + 20 - |A \\cap B|$로 잘못 세워 $|A \\cap B| = 5$로 답하는 실수가 많습니다. $|A \\cup B| = 40$이 아니라 $|A \\cup B| = 40 - 5 = 35$입니다."
            },
            {
                "id": "11-4",
                "type": "choice",
                "difficulty": 1,
                "question": "$A = \\{1,2,3,4,5\\}$, $B = \\{4,5,6,7\\}$일 때, $A \\cup B$는?",
                "choices": [
                    "$\\{4,5\\}$",
                    "$\\{1,2,3,4,5,6,7\\}$",
                    "$\\{1,2,3,6,7\\}$",
                    "$\\{1,2,3\\}$"
                ],
                "answer": "$\\{1,2,3,4,5,6,7\\}$",
                "hints": [
                    "합집합은 두 집합의 원소를 모두 모읍니다.",
                    "중복 원소는 한 번만 포함합니다."
                ],
                "explanation": "$A \\cup B = \\{1,2,3,4,5,6,7\\}$입니다.",
                "wrongAnalysis": "교집합 $\\{4,5\\}$과 혼동하지 마세요."
            },
            {
                "id": "11-5",
                "type": "number",
                "difficulty": 2,
                "question": "$|A| = 15$, $|B| = 12$, $|A \\cup B| = 20$일 때, $|A \\cap B|$를 구하시오.",
                "answer": "7",
                "hints": [
                    "$|A \\cup B| = |A| + |B| - |A \\cap B|$",
                    "$20 = 15 + 12 - |A \\cap B|$에서 구하세요."
                ],
                "explanation": "$|A \\cap B| = 15 + 12 - 20 = 7$입니다.",
                "wrongAnalysis": "공식을 잘못 적용하지 않도록 주의하세요."
            }
        ],
        "summary": {
            "keyPoints": [
                "$A \\cup B$는 $A$ 또는 $B$에 속하는 모든 원소의 집합이다.",
                "$A \\cap B$는 $A$와 $B$ 모두에 속하는 원소의 집합이다.",
                "$|A \\cup B| = |A| + |B| - |A \\cap B|$ (포함-배제 원리)"
            ],
            "formulas": [
                "A \\cup B = \\{x \\mid x \\in A \\text{ 또는 } x \\in B\\}",
                "A \\cap B = \\{x \\mid x \\in A \\text{ 그리고 } x \\in B\\}",
                "|A \\cup B| = |A| + |B| - |A \\cap B|"
            ],
            "commonMistakes": [
                "$\\cup$와 $\\cap$ 기호를 혼동하는 것",
                "포함-배제 원리에서 $|A \\cap B|$를 빼지 않는 것",
                "서로소인 집합의 교집합이 $\\emptyset$임을 잊는 것"
            ],
            "nextConnection": "다음 레슨에서는 한 집합에서 다른 집합의 원소를 제거하는 차집합과, 전체집합에서의 여집합을 배웁니다."
        }
    },
    {
        "id": 12,
        "title": "차집합과 여집합",
        "category": "집합의 연산",
        "level": "기초",
        "question": "한 집합에서 다른 집합을 빼면 무엇이 남는가?",
        "concept": {
            "intro": "집합 연산에서 합집합과 교집합이 '합치기'와 '겹치기'를 나타낸다면, **차집합(set difference)**은 :::definition[차집합]\n'빼기'에 해당하는 연산입니다. 집합 $A$에서 집합 $B$를 뺀 차집합 $A \\setminus B$는, $A$에는 속하지만 $B$에는 속하지 않는 원소들의 집합입니다.\n\n형식적으로, $A \\setminus B = \\{x \\mid x \\in A \\text{ 그리고 } x \\notin B\\}$입니다. 예를 들어, $A = \\{1, 2, 3, 4, 5\\}$이고 $B = \\{3, 4, 5, 6, 7\\}$이면, $A \\setminus B = \\{1, 2\\}$입니다. $3, 4, 5$는 $B$에도 속하므로 제거되고, $6, 7$은 애초에 $A$에 속하지 않으므로 관계없습니다. 차집합에서 주의할 점은 $A \\setminus B \\neq B \\setminus A$라는 것입니다. 같은 예에서 $B \\setminus A = \\{6, 7\\}$으로 서로 다릅니다.\n:::\n\n:::definition[여집합]\n**여집합(complement)**은 차집합의 특수한 경우입니다. 전체집합 $U$가 주어져 있을 때, 집합 $A$의 여집합 $A^c$ (또는 $\\overline{A}$)는 전체집합에서 $A$를 뺀 것입니다: $A^c = U \\setminus A = \\{x \\mid x \\in U \\text{ 그리고 } x \\notin A\\}$. 즉, $A$에 속하지 않는 전체집합의 원소들로 이루어진 집합입니다.\n:::\n\n:::theorem[여집합의 성질]\n여집합의 중요한 성질들이 있습니다. $(A^c)^c = A$ (여집합의 여집합은 원래 집합), $U^c = \\emptyset$ (전체집합의 여집합은 공집합), $\\emptyset^c = U$ (공집합의 여집합은 전체집합), 그리고 $A \\cup A^c = U$, $A \\cap A^c = \\emptyset$입니다. 이 성질들은 논리학의 부정(NOT) 연산과 깊은 관련이 있습니다.\n:::\n\n벤 다이어그램에서 차집합 $A \\setminus B$는 $A$의 영역 중 $B$와 겹치지 않는 부분이고, 여집합 $A^c$는 전체 사각형에서 $A$의 원 바깥 부분입니다.",
            "intuition": "차집합은 사과 바구니에서 썩은 사과를 골라내는 것과 같습니다. 전체 사과($A$) 중 썩은 사과($B$)를 빼면 좋은 사과($A \\setminus B$)가 남습니다. 여집합은 '~가 아닌 것 전부'를 의미합니다. 교실(전체집합)에서 남학생($A$)의 여집합은 여학생($A^c$)입니다.",
            "formula": "A \\setminus B = \\{x \\mid x \\in A \\text{ 그리고 } x \\notin B\\} \\text{: 차집합}\nA^c = U \\setminus A \\text{: 여집합}\n(A^c)^c = A\nA \\cup A^c = U \\text{,} A \\cap A^c = \\emptyset",
            "summary": "차집합 $A \\setminus B$는 $A$에만 속하는 원소의 집합이고, 여집합 $A^c$는 전체집합 $U$에서 $A$를 뺀 집합입니다."
        },
        "examples": [
            {
                "title": "차집합과 여집합 구하기",
                "problem": "$U = \\{1, 2, 3, 4, 5, 6, 7, 8, 9, 10\\}$, $A = \\{1, 2, 3, 4, 5\\}$, $B = \\{4, 5, 6, 7\\}$일 때, $A \\setminus B$와 $A^c$를 구하시오.",
                "steps": [
                    "$A \\setminus B$: $A$의 원소 중 $B$에 속하지 않는 것을 찾습니다.",
                    "$A = \\{1, 2, 3, 4, 5\\}$에서 $B = \\{4, 5, 6, 7\\}$에도 속하는 $4, 5$를 제거하면 $\\{1, 2, 3\\}$",
                    "$A^c = U \\setminus A$: $U$의 원소 중 $A$에 속하지 않는 것을 찾습니다.",
                    "$U = \\{1, \\ldots, 10\\}$에서 $A = \\{1, 2, 3, 4, 5\\}$를 빼면 $A^c = \\{6, 7, 8, 9, 10\\}$"
                ],
                "answer": "$A \\setminus B = \\{1, 2, 3\\}$, $A^c = \\{6, 7, 8, 9, 10\\}$",
                "lesson": "차집합은 빼는 순서가 중요하고($A \\setminus B \\neq B \\setminus A$), 여집합은 전체집합이 무엇인지 반드시 확인해야 합니다."
            },
            {
                "title": "[기본] 차집합의 비대칭성",
                "problem": "$A = \\{1, 2, 3, 4\\}$, $B = \\{3, 4, 5, 6\\}$일 때, $A \\setminus B$와 $B \\setminus A$를 각각 구하시오.",
                "steps": [
                    "$A \\setminus B$: $A$의 원소 중 $B$에 속하지 않는 것 → $1, 2$만 남음. $A \\setminus B = \\{1, 2\\}$.",
                    "$B \\setminus A$: $B$의 원소 중 $A$에 속하지 않는 것 → $5, 6$만 남음. $B \\setminus A = \\{5, 6\\}$.",
                    "$A \\setminus B \\neq B \\setminus A$이므로 차집합은 교환법칙이 성립하지 않습니다."
                ],
                "answer": "$A \\setminus B = \\{1, 2\\}$, $B \\setminus A = \\{5, 6\\}$",
                "lesson": "차집합은 순서가 중요합니다. $A \\setminus B$와 $B \\setminus A$는 일반적으로 다른 집합입니다."
            },
            {
                "title": "[응용] 여집합의 이중 부정",
                "problem": "$U = \\{1, 2, 3, 4, 5\\}$, $A = \\{2, 4\\}$일 때, $(A^c)^c$를 구하고 $A$와 비교하시오.",
                "steps": [
                    "$A^c = U \\setminus A = \\{1, 3, 5\\}$",
                    "$(A^c)^c = U \\setminus A^c = U \\setminus \\{1, 3, 5\\} = \\{2, 4\\}$",
                    "$(A^c)^c = \\{2, 4\\} = A$",
                    "이는 논리에서 이중 부정 제거 $\\neg\\neg P = P$에 대응합니다."
                ],
                "answer": "$(A^c)^c = A = \\{2, 4\\}$",
                "lesson": "여집합을 두 번 취하면 원래 집합으로 돌아옵니다: $(A^c)^c = A$."
            },
            {
                "title": "[응용] 차집합과 교집합의 관계",
                "problem": "$A \\setminus B = A \\cap B^c$임을 원소 판별로 보이시오. ($U$는 전체집합)",
                "steps": [
                    "$x \\in A \\setminus B \\Leftrightarrow x \\in A \\text{ 그리고 } x \\notin B$",
                    "$x \\notin B \\Leftrightarrow x \\in B^c$ (여집합의 정의)",
                    "따라서 $x \\in A \\setminus B \\Leftrightarrow x \\in A \\text{ 그리고 } x \\in B^c \\Leftrightarrow x \\in A \\cap B^c$",
                    "양방향 포함이 성립하므로 $A \\setminus B = A \\cap B^c$입니다."
                ],
                "answer": "$A \\setminus B = A \\cap B^c$",
                "lesson": "차집합은 여집합과 교집합으로 표현할 수 있으며, 이 관계는 집합 연산을 변환할 때 자주 쓰입니다."
            },
            {
                "title": "[심화] 차집합의 분배법칙",
                "problem": "$A \\setminus (B \\cup C) = (A \\setminus B) \\cap (A \\setminus C)$임을 증명하시오.",
                "steps": [
                    "$x \\in A \\setminus (B \\cup C) \\Leftrightarrow x \\in A \\text{ 그리고 } x \\notin B \\cup C$",
                    "$x \\notin B \\cup C \\Leftrightarrow x \\notin B \\text{ 그리고 } x \\notin C$ (드모르간)",
                    "따라서 $x \\in A \\text{ 그리고 } x \\notin B \\text{ 그리고 } x \\notin C$",
                    "이는 $(x \\in A \\text{ 그리고 } x \\notin B) \\text{ 그리고 } (x \\in A \\text{ 그리고 } x \\notin C)$와 동치",
                    "즉 $x \\in (A \\setminus B) \\cap (A \\setminus C)$"
                ],
                "answer": "$A \\setminus (B \\cup C) = (A \\setminus B) \\cap (A \\setminus C)$",
                "lesson": "차집합에서 합집합을 빼는 것은 각각을 빼서 교집합을 취하는 것과 같습니다."
            }
        ],
        "problems": [
            {
                "id": "12-1",
                "type": "choice",
                "difficulty": 1,
                "question": "$A = \\{1, 2, 3, 4\\}$, $B = \\{3, 4, 5, 6\\}$일 때, $A \\setminus B$는?",
                "choices": [
                    "$\\{1, 2\\}$",
                    "$\\{5, 6\\}$",
                    "$\\{3, 4\\}$",
                    "$\\{1, 2, 5, 6\\}$"
                ],
                "answer": "$\\{1, 2\\}$",
                "hints": [
                    "$A \\setminus B$는 $A$에는 속하지만 $B$에는 속하지 않는 원소의 집합입니다.",
                    "$A$의 원소 $1, 2, 3, 4$ 중 $B = \\{3, 4, 5, 6\\}$에 속하는 것은 $3, 4$입니다.",
                    "$3, 4$를 제외하면 남는 것은 $1, 2$입니다."
                ],
                "explanation": "$A \\setminus B$는 $A$의 원소 중 $B$에 속하지 않는 것만 모은 집합입니다. $A$의 원소 중 $3, 4$는 $B$에 속하므로 제거하면 $A \\setminus B = \\{1, 2\\}$입니다.",
                "wrongAnalysis": "$B \\setminus A = \\{5, 6\\}$과 혼동하거나, $A$와 $B$에서 공통이 아닌 원소를 모두 모아 $\\{1, 2, 5, 6\\}$으로 답하는 경우가 있습니다. $A \\setminus B$는 $A$ 기준으로 $B$에 속하는 것만 빼는 것입니다."
            },
            {
                "id": "12-2",
                "type": "text",
                "difficulty": 2,
                "question": "$U = \\{1, 2, 3, 4, 5, 6, 7, 8, 9, 10\\}$, $A = \\{2, 4, 6, 8, 10\\}$일 때, $A^c$를 원소나열법으로 구하시오.",
                "answer": "$\\{1, 3, 5, 7, 9\\}$",
                "hints": [
                    "$A^c = U \\setminus A$, 즉 전체집합에서 $A$를 뺀 것입니다.",
                    "$U$의 원소 중 $A = \\{2, 4, 6, 8, 10\\}$에 속하지 않는 것을 찾으세요.",
                    "$U$에서 짝수를 모두 빼면 남는 것은 홀수입니다."
                ],
                "explanation": "$A^c = U \\setminus A$이므로, $\\{1, 2, \\ldots, 10\\}$에서 $\\{2, 4, 6, 8, 10\\}$을 빼면 $A^c = \\{1, 3, 5, 7, 9\\}$입니다. $A$가 $10$ 이하 짝수의 집합이므로, $A^c$는 $10$ 이하 홀수의 집합입니다.",
                "wrongAnalysis": "전체집합 $U$를 확인하지 않고 여집합을 구하면 잘못된 답을 얻습니다. 여집합은 반드시 전체집합 $U$가 무엇인지에 따라 달라집니다."
            },
            {
                "id": "12-3",
                "type": "number",
                "difficulty": 3,
                "question": "$U = \\{1, 2, 3, \\ldots, 20\\}$, $A = \\{x \\mid x\\text{는 20 이하의 3의 배수}\\}$일 때, $|A^c|$를 구하시오.",
                "answer": "14",
                "hints": [
                    "먼저 $A$의 원소를 구하세요: $20$ 이하의 $3$의 배수는 $3, 6, 9, 12, 15, 18$입니다.",
                    "$|A| = 6$이므로 $|A^c| = |U| - |A|$입니다.",
                    "$|A^c| = 20 - 6 = 14$"
                ],
                "explanation": "$A = \\{3, 6, 9, 12, 15, 18\\}$이므로 $|A| = 6$입니다. $|U| = 20$이므로 $|A^c| = 20 - 6 = 14$입니다.",
                "wrongAnalysis": "$21$을 $3$의 배수에 포함시키거나, $|U| = 20$을 잘못 세는 실수에 주의하세요. 또한 $A^c$를 구할 때 $A$의 원소 개수를 빼야 하는데, 더하는 실수를 하기도 합니다."
            },
            {
                "id": "12-4",
                "type": "choice",
                "difficulty": 1,
                "question": "$A = \\{a,b,c,d\\}$, $B = \\{c,d,e\\}$일 때, $B \\setminus A$는?",
                "choices": [
                    "$\\{a,b\\}$",
                    "$\\{e\\}$",
                    "$\\{c,d\\}$",
                    "$\\{a,b,e\\}$"
                ],
                "answer": "$\\{e\\}$",
                "hints": [
                    "$B \\setminus A$는 $B$에 속하지만 $A$에 속하지 않는 원소입니다.",
                    "$B$에서 $A$와 공통인 $c, d$를 제거합니다."
                ],
                "explanation": "$B$의 원소 중 $A$에 없는 것은 $e$뿐이므로 $B \\setminus A = \\{e\\}$입니다.",
                "wrongAnalysis": "$A \\setminus B = \\{a,b\\}$와 혼동하지 마세요. 차집합은 방향이 중요합니다."
            },
            {
                "id": "12-5",
                "type": "number",
                "difficulty": 2,
                "question": "$U = \\{1,2,\\ldots,15\\}$, $A = \\{x \\mid x\\text{는 15 이하의 짝수}\\}$일 때, $|A^c|$를 구하시오.",
                "answer": "8",
                "hints": [
                    "$A = \\{2,4,6,8,10,12,14\\}$이므로 $|A| = 7$.",
                    "$|A^c| = 15 - 7 = 8$입니다."
                ],
                "explanation": "15 이하의 짝수는 7개이므로 $|A^c| = 15 - 7 = 8$입니다.",
                "wrongAnalysis": "15는 홀수이므로 $A$에 포함되지 않습니다."
            }
        ],
        "summary": {
            "keyPoints": [
                "$A \\setminus B$는 $A$에만 속하는 원소의 집합이다.",
                "$A^c = U \\setminus A$는 $A$에 속하지 않는 전체집합의 원소 집합이다.",
                "$(A^c)^c = A$, $A \\cup A^c = U$, $A \\cap A^c = \\emptyset$"
            ],
            "formulas": [
                "A \\setminus B = \\{x \\mid x \\in A,\\; x \\notin B\\}",
                "A^c = U \\setminus A",
                "|A^c| = |U| - |A|"
            ],
            "commonMistakes": [
                "$A \\setminus B$와 $B \\setminus A$를 같다고 오해하는 것",
                "여집합을 구할 때 전체집합 $U$를 확인하지 않는 것",
                "차집합에서 $B$의 원소 중 $A$에 없는 것까지 포함시키는 것"
            ],
            "nextConnection": "다음 레슨에서는 합집합, 교집합, 차집합에 적용되는 다양한 연산 법칙(교환법칙, 결합법칙, 분배법칙 등)을 배웁니다."
        }
    },
    {
        "id": 13,
        "title": "집합 연산의 법칙",
        "category": "집합의 연산",
        "level": "기초",
        "question": "집합의 합·교·차 연산에도 교환법칙이나 분배법칙이 성립하는가?",
        "concept": {
            "intro": "수의 사칙연산에 교환법칙, 결합법칙, 분배법칙 등이 있듯이, 집합의 연산에도 유사한 법칙들이 성립합니다. 이 법칙들을 이해하면 복잡한 집합 표현을 간단히 정리할 수 있습니다.\n\n:::theorem[교환법칙]\n**교환법칙(Commutative Law)**: 합집합과 교집합은 순서를 바꾸어도 결과가 같습니다. $A \\cup B = B \\cup A$이고 $A \\cap B = B \\cap A$입니다. 그러나 차집합에는 교환법칙이 성립하지 않습니다: 일반적으로 $A \\setminus B \\neq B \\setminus A$입니다.\n:::\n\n:::theorem[결합법칙]\n**결합법칙(Associative Law)**: 세 집합의 합집합이나 교집합을 구할 때, 어떤 두 집합을 먼저 연산해도 결과가 같습니다. $(A \\cup B) \\cup C = A \\cup (B \\cup C)$이고 $(A \\cap B) \\cap C = A \\cap (B \\cap C)$입니다.\n:::\n\n:::theorem[분배법칙]\n**분배법칙(Distributive Law)**: 합집합과 교집합 사이에 분배법칙이 성립합니다. $A \\cap (B \\cup C) = (A \\cap B) \\cup (A \\cap C)$이고, $A \\cup (B \\cap C) = (A \\cup B) \\cap (A \\cup C)$입니다. 수의 연산에서는 곱셈이 덧셈에 대해 분배되지만 반대는 일반적으로 성립하지 않는 반면, 집합에서는 양방향 분배법칙이 모두 성립한다는 점이 특별합니다.\n:::\n\n이 외에도 **멱등법칙**(Idempotent: $A \\cup A = A$, $A \\cap A = A$), **항등법칙**(Identity: $A \\cup \\emptyset = A$, $A \\cap U = A$), **흡수법칙**(Absorption: $A \\cup (A \\cap B) = A$, $A \\cap (A \\cup B) = A$), **지배법칙**(Domination: $A \\cup U = U$, $A \\cap \\emptyset = \\emptyset$) 등이 있습니다.",
            "intuition": "집합 연산 법칙은 논리 연산과 대응됩니다. $\\cup$는 'OR', $\\cap$는 'AND'에 대응하므로, 이미 알고 있는 논리적 직관을 활용할 수 있습니다. '수학 또는 과학을 좋아하는 학생'과 '과학 또는 수학을 좋아하는 학생'이 같은 것처럼(교환법칙), 논리적으로 당연한 결과들이 법칙으로 정리된 것입니다.",
            "formula": "\\text{교환법칙:} A \\cup B = B \\cup A \\text{,} A \\cap B = B \\cap A\n\\text{결합법칙:} (A \\cup B) \\cup C = A \\cup (B \\cup C) \\text{,} (A \\cap B) \\cap C = A \\cap (B \\cap C)\n\\text{분배법칙:} A \\cap (B \\cup C) = (A \\cap B) \\cup (A \\cap C)\nA \\cup (B \\cap C) = (A \\cup B) \\cap (A \\cup C)\n\\text{멱등법칙:} A \\cup A = A \\text{,} A \\cap A = A\n\\text{항등법칙:} A \\cup \\emptyset = A \\text{,} A \\cap U = A",
            "summary": "집합의 합집합과 교집합에는 교환법칙, 결합법칙, 분배법칙, 멱등법칙, 항등법칙, 흡수법칙 등이 성립하며, 이를 통해 복잡한 집합 식을 간단히 할 수 있습니다."
        },
        "examples": [
            {
                "title": "분배법칙 확인하기",
                "problem": "$A = \\{1, 2, 3\\}$, $B = \\{2, 3, 4\\}$, $C = \\{3, 4, 5\\}$일 때, $A \\cap (B \\cup C) = (A \\cap B) \\cup (A \\cap C)$가 성립하는지 확인하시오.",
                "steps": [
                    "좌변: $B \\cup C = \\{2, 3, 4, 5\\}$이므로 $A \\cap (B \\cup C) = \\{1, 2, 3\\} \\cap \\{2, 3, 4, 5\\} = \\{2, 3\\}$",
                    "우변: $A \\cap B = \\{2, 3\\}$, $A \\cap C = \\{3\\}$이므로 $(A \\cap B) \\cup (A \\cap C) = \\{2, 3\\} \\cup \\{3\\} = \\{2, 3\\}$",
                    "좌변 $= \\{2, 3\\}$ $=$ 우변이므로, 분배법칙이 성립합니다."
                ],
                "answer": "좌변 $= \\{2, 3\\} =$ 우변이므로 분배법칙이 성립한다.",
                "lesson": "집합의 분배법칙은 직접 원소를 대입하여 양변을 계산하면 확인할 수 있습니다."
            },
            {
                "title": "[기본] 교집합에 대한 합집합의 분배",
                "problem": "$A = \\{1, 2, 3\\}$, $B = \\{2, 3, 4\\}$, $C = \\{3, 4, 5\\}$일 때, $A \\cup (B \\cap C)$와 $(A \\cup B) \\cap (A \\cup C)$가 같은지 확인하시오.",
                "steps": [
                    "좌변: $B \\cap C = \\{3, 4\\}$이므로 $A \\cup (B \\cap C) = \\{1, 2, 3\\} \\cup \\{3, 4\\} = \\{1, 2, 3, 4\\}$",
                    "우변: $A \\cup B = \\{1, 2, 3, 4\\}$, $A \\cup C = \\{1, 2, 3, 4, 5\\}$",
                    "$(A \\cup B) \\cap (A \\cup C) = \\{1, 2, 3, 4\\} \\cap \\{1, 2, 3, 4, 5\\} = \\{1, 2, 3, 4\\}$",
                    "좌변 $= \\{1, 2, 3, 4\\} =$ 우변"
                ],
                "answer": "$A \\cup (B \\cap C) = (A \\cup B) \\cap (A \\cup C) = \\{1, 2, 3, 4\\}$",
                "lesson": "합집합도 교집합에 대해 분배되며, 두 분배법칙은 서로 쌍대(dual)입니다."
            },
            {
                "title": "[응용] 흡수법칙 증명",
                "problem": "$A \\cup (A \\cap B) = A$임을 원소 판별로 증명하시오.",
                "steps": [
                    "($\\supseteq$) $x \\in A$이면 $x \\in A \\cup (A \\cap B)$ (합집합 정의). 따라서 $A \\subseteq A \\cup (A \\cap B)$.",
                    "($\\subseteq$) $x \\in A \\cup (A \\cap B)$이면 $x \\in A$ 또는 $x \\in A \\cap B$.",
                    "$x \\in A \\cap B$이면 $x \\in A$이므로, 어느 경우든 $x \\in A$.",
                    "따라서 $A \\cup (A \\cap B) \\subseteq A$.",
                    "이중 포함에 의해 $A \\cup (A \\cap B) = A$."
                ],
                "answer": "$A \\cup (A \\cap B) = A$ (흡수법칙)",
                "lesson": "흡수법칙은 합집합과 교집합이 상호작용하여 원래 집합으로 '흡수'되는 현상을 나타냅니다."
            },
            {
                "title": "[응용] 멱등법칙과 항등법칙",
                "problem": "$A \\cup A = A$, $A \\cap U = A$, $A \\cup U = U$를 각각 원소 판별로 보이시오.",
                "steps": [
                    "$A \\cup A$: $x \\in A \\cup A \\Leftrightarrow x \\in A$ 또는 $x \\in A \\Leftrightarrow x \\in A$. 따라서 $A \\cup A = A$.",
                    "$A \\cap U$: $x \\in A \\cap U \\Leftrightarrow x \\in A$ 그리고 $x \\in U$. $A \\subseteq U$이므로 $x \\in A$와 동치. 따라서 $A \\cap U = A$.",
                    "$A \\cup U$: $x \\in A \\cup U \\Leftrightarrow x \\in A$ 또는 $x \\in U$. $A \\subseteq U$이므로 항상 $x \\in U$와 동치. 따라서 $A \\cup U = U$."
                ],
                "answer": "$A \\cup A = A$ (멱등), $A \\cap U = A$ (항등), $A \\cup U = U$ (지배)",
                "lesson": "멱등법칙, 항등법칙, 지배법칙은 집합 연산의 기본 법칙으로, 증명의 간소화에 자주 활용됩니다."
            },
            {
                "title": "[심화] 분배법칙의 일반적 증명",
                "problem": "$A \\cap (B \\cup C) = (A \\cap B) \\cup (A \\cap C)$를 원소 판별로 엄밀하게 증명하시오.",
                "steps": [
                    "($\\subseteq$) $x \\in A \\cap (B \\cup C)$이면 $x \\in A$이고 ($x \\in B$ 또는 $x \\in C$).",
                    "$x \\in B$이면 $x \\in A \\cap B \\subseteq (A \\cap B) \\cup (A \\cap C)$.",
                    "$x \\in C$이면 $x \\in A \\cap C \\subseteq (A \\cap B) \\cup (A \\cap C)$.",
                    "($\\supseteq$) $x \\in (A \\cap B) \\cup (A \\cap C)$이면 $x \\in A \\cap B$ 또는 $x \\in A \\cap C$.",
                    "어느 경우든 $x \\in A$이고, $x \\in B$ 또는 $x \\in C$이므로 $x \\in A \\cap (B \\cup C)$.",
                    "이중 포함에 의해 등식 성립."
                ],
                "answer": "이중 포함법으로 $A \\cap (B \\cup C) = (A \\cap B) \\cup (A \\cap C)$가 성립함을 보였다.",
                "lesson": "집합 등식의 증명은 '임의의 원소에 대해 양쪽 소속이 동치'임을 보이는 것이 표준 방법입니다."
            }
        ],
        "problems": [
            {
                "id": "13-1",
                "type": "choice",
                "difficulty": 1,
                "question": "다음 중 항상 성립하는 법칙은?",
                "choices": [
                    "$A \\setminus B = B \\setminus A$",
                    "$A \\cup B = B \\cup A$",
                    "$A \\cup B = A \\cap B$",
                    "$A \\setminus B = A \\cap B$"
                ],
                "answer": "$A \\cup B = B \\cup A$",
                "hints": [
                    "교환법칙이 성립하는 연산을 생각해 보세요.",
                    "합집합은 '또는'이므로, '$A$ 또는 $B$'와 '$B$ 또는 $A$'는 같습니다.",
                    "차집합에는 교환법칙이 성립하지 않습니다."
                ],
                "explanation": "$A \\cup B = B \\cup A$는 합집합의 교환법칙으로 항상 성립합니다. 차집합은 교환법칙이 성립하지 않고($A \\setminus B \\neq B \\setminus A$ 일반적), 합집합과 교집합은 일반적으로 같지 않습니다.",
                "wrongAnalysis": "차집합의 교환법칙을 성립한다고 오해하지 마세요. 예를 들어 $\\{1,2\\} \\setminus \\{2,3\\} = \\{1\\}$이고 $\\{2,3\\} \\setminus \\{1,2\\} = \\{3\\}$으로 서로 다릅니다."
            },
            {
                "id": "13-2",
                "type": "choice",
                "difficulty": 2,
                "question": "$A \\cap (B \\cup C)$를 분배법칙으로 전개한 것은?",
                "choices": [
                    "$(A \\cap B) \\cup C$",
                    "$(A \\cap B) \\cup (A \\cap C)$",
                    "$(A \\cup B) \\cap (A \\cup C)$",
                    "$A \\cap B \\cap C$"
                ],
                "answer": "$(A \\cap B) \\cup (A \\cap C)$",
                "hints": [
                    "분배법칙은 $\\cap$이 $\\cup$에 대해 분배되는 것입니다.",
                    "수의 연산에서 $a \\times (b + c) = ab + ac$와 유사하게 생각하세요.",
                    "$\\cap$이 $\\times$, $\\cup$가 $+$에 대응합니다."
                ],
                "explanation": "분배법칙에 의해 $A \\cap (B \\cup C) = (A \\cap B) \\cup (A \\cap C)$입니다. $\\cap$이 $\\cup$ 안으로 분배됩니다.",
                "wrongAnalysis": "$A \\cup (B \\cap C) = (A \\cup B) \\cap (A \\cup C)$와 혼동하지 마세요. $\\cap$이 밖에 있으면 $\\cup$로 연결하고, $\\cup$가 밖에 있으면 $\\cap$으로 연결합니다. 연산 기호가 바뀌는 점에 주의하세요."
            },
            {
                "id": "13-3",
                "type": "text",
                "difficulty": 3,
                "question": "$A \\cup (A \\cap B)$를 흡수법칙을 이용하여 간단히 하시오.",
                "answer": "$A$",
                "hints": [
                    "흡수법칙은 $A \\cup (A \\cap B) = A$, $A \\cap (A \\cup B) = A$입니다.",
                    "$A \\cap B \\subseteq A$이므로, $A$와 합집합해도 새로운 원소가 추가되지 않습니다.",
                    "따라서 $A \\cup (A \\cap B)$는 단순히 $A$입니다."
                ],
                "explanation": "흡수법칙에 의해 $A \\cup (A \\cap B) = A$입니다. 이는 $A \\cap B \\subseteq A$이므로, $A \\cap B$의 모든 원소가 이미 $A$에 포함되어 있어 합집합을 해도 $A$ 그대로이기 때문입니다.",
                "wrongAnalysis": "흡수법칙을 모르면 분배법칙 등을 복잡하게 적용하려 할 수 있습니다. $A \\cup (A \\cap B) = (A \\cup A) \\cap (A \\cup B) = A \\cap (A \\cup B) = A$로도 증명 가능하지만, 흡수법칙을 바로 적용하는 것이 가장 간결합니다."
            },
            {
                "id": "13-4",
                "type": "choice",
                "difficulty": 1,
                "question": "다음 중 집합 연산에서 결합법칙이 성립하는 것은?",
                "choices": [
                    "$\\cup$와 $\\cap$ 모두",
                    "$\\cup$만",
                    "$\\cap$만",
                    "$\\setminus$만"
                ],
                "answer": "$\\cup$와 $\\cap$ 모두",
                "hints": [
                    "합집합과 교집합 모두 결합법칙이 성립합니다.",
                    "차집합은 결합법칙이 성립하지 않습니다."
                ],
                "explanation": "$(A \\cup B) \\cup C = A \\cup (B \\cup C)$이고 $(A \\cap B) \\cap C = A \\cap (B \\cap C)$가 성립합니다.",
                "wrongAnalysis": "차집합은 $(\\{1,2,3\\} \\setminus \\{2,3\\}) \\setminus \\{1\\} \\neq \\{1,2,3\\} \\setminus (\\{2,3\\} \\setminus \\{1\\})$입니다."
            },
            {
                "id": "13-5",
                "type": "text",
                "difficulty": 2,
                "question": "$A \\cap (A \\cup B)$를 흡수법칙으로 간단히 하시오.",
                "answer": "$A$",
                "hints": [
                    "흡수법칙: $A \\cap (A \\cup B) = A$.",
                    "$A \\subseteq A \\cup B$이므로 교집합은 $A$ 자체입니다."
                ],
                "explanation": "흡수법칙에 의해 $A \\cap (A \\cup B) = A$입니다.",
                "wrongAnalysis": "$A \\cup (A \\cap B) = A$와 혼동하지 마세요. 결과는 같지만 형태가 다릅니다."
            }
        ],
        "summary": {
            "keyPoints": [
                "$\\cup$와 $\\cap$에는 교환법칙, 결합법칙이 성립한다.",
                "$\\cap$은 $\\cup$에 대해, $\\cup$는 $\\cap$에 대해 분배된다.",
                "흡수법칙: $A \\cup (A \\cap B) = A$, $A \\cap (A \\cup B) = A$"
            ],
            "formulas": [
                "A \\cup B = B \\cup A \\text{,} A \\cap B = B \\cap A",
                "A \\cap (B \\cup C) = (A \\cap B) \\cup (A \\cap C)",
                "A \\cup (B \\cap C) = (A \\cup B) \\cap (A \\cup C)",
                "A \\cup (A \\cap B) = A \\text{,} A \\cap (A \\cup B) = A"
            ],
            "commonMistakes": [
                "차집합에 교환법칙이 성립한다고 오해하는 것",
                "분배법칙 적용 시 연산 기호를 바꾸지 않는 것",
                "수의 분배법칙과 혼동하여 한 방향만 성립한다고 생각하는 것"
            ],
            "nextConnection": "다음 레슨에서는 여집합과 합·교집합의 관계를 설명하는 드모르간의 법칙을 배웁니다."
        }
    },
    {
        "id": 14,
        "title": "드모르간의 법칙",
        "category": "집합의 연산",
        "level": "기초",
        "question": "여집합을 취하면 합집합과 교집합이 서로 바뀐다?",
        "concept": {
            "intro": "**드모르간의 법칙(De Morgan's Laws)**은 여집합과 합집합·교집합 사이의 핵심적인 관계를 나타내는 법칙입니다. 19세기 영국의 수학자 오거스터스 드모르간(Augustus De Morgan)의 이름을 딴 이 법칙은 집합론, 논리학, 컴퓨터 과학 전반에 걸쳐 광범위하게 사용됩니다.\n\n드모르간의 법칙은 두 가지입니다:\n\n:::theorem[드모르간 제1법칙]\n**제1법칙**: $(A \\cup B)^c = A^c \\cap B^c$\n합집합의 여집합은 각 여집합의 교집합과 같습니다. 즉, '$A$ 또는 $B$에 속하지 않는 것'은 '$A$에도 속하지 않고 $B$에도 속하지 않는 것'과 같습니다.\n:::\n\n:::theorem[드모르간 제2법칙]\n**제2법칙**: $(A \\cap B)^c = A^c \\cup B^c$\n교집합의 여집합은 각 여집합의 합집합과 같습니다. 즉, '$A$와 $B$ 모두에 속하지는 않는 것'은 '$A$에 속하지 않거나 $B$에 속하지 않는 것'과 같습니다.\n:::\n\n핵심 패턴은 여집합을 취하면 $\\cup$와 $\\cap$가 서로 뒤바뀐다는 것입니다. 이 법칙은 복잡한 집합 식을 변환하거나 증명할 때 매우 유용합니다. 특히 여집합이 포함된 식을 정리할 때 드모르간의 법칙 없이는 해결하기 어려운 경우가 많습니다.\n\n논리학에서 드모르간의 법칙은 $\\neg(P \\lor Q) = (\\neg P) \\land (\\neg Q)$, $\\neg(P \\land Q) = (\\neg P) \\lor (\\neg Q)$로 표현되며, 프로그래밍에서도 조건문을 단순화할 때 자주 활용됩니다.",
            "intuition": "교실에서 '수학 또는 영어를 좋아하는 학생'에 속하지 않으려면, '수학을 좋아하지 않고' 동시에 '영어도 좋아하지 않아야' 합니다 (제1법칙). '수학 그리고 영어를 모두 좋아하는 학생'에 속하지 않으려면, '수학을 좋아하지 않거나' '영어를 좋아하지 않으면' 됩니다 (제2법칙). 여집합은 '~아닌'으로 바꾸는데, 이때 '또는'과 '그리고'가 뒤바뀌는 것입니다.",
            "formula": "(A \\cup B)^c = A^c \\cap B^c \\text{: 합집합의 여집합 = 여집합의 교집합}\n(A \\cap B)^c = A^c \\cup B^c \\text{: 교집합의 여집합 = 여집합의 합집합}",
            "summary": "드모르간의 법칙에 의해 여집합을 취하면 $\\cup \\leftrightarrow \\cap$가 서로 바뀝니다: $(A \\cup B)^c = A^c \\cap B^c$, $(A \\cap B)^c = A^c \\cup B^c$."
        },
        "examples": [
            {
                "title": "드모르간의 법칙 검증",
                "problem": "$U = \\{1, 2, 3, 4, 5, 6, 7, 8\\}$, $A = \\{1, 2, 3, 4\\}$, $B = \\{3, 4, 5, 6\\}$일 때, $(A \\cup B)^c = A^c \\cap B^c$가 성립하는지 확인하시오.",
                "steps": [
                    "좌변: $A \\cup B = \\{1, 2, 3, 4, 5, 6\\}$이므로 $(A \\cup B)^c = \\{7, 8\\}$",
                    "우변: $A^c = \\{5, 6, 7, 8\\}$, $B^c = \\{1, 2, 7, 8\\}$이므로 $A^c \\cap B^c = \\{7, 8\\}$",
                    "좌변 $= \\{7, 8\\} =$ 우변이므로, 드모르간의 법칙이 성립합니다."
                ],
                "answer": "$(A \\cup B)^c = \\{7, 8\\} = A^c \\cap B^c$이므로 성립한다.",
                "lesson": "드모르간의 법칙을 검증할 때는 좌변과 우변을 각각 구하여 비교합니다."
            },
            {
                "title": "[기본] 드모르간 제2법칙 검증",
                "problem": "$U = \\{1,2,3,4,5\\}$, $A = \\{1,2,3\\}$, $B = \\{2,3,4\\}$일 때, $(A \\cap B)^c = A^c \\cup B^c$를 확인하시오.",
                "steps": [
                    "좌변: $A \\cap B = \\{2,3\\}$이므로 $(A \\cap B)^c = \\{1,4,5\\}$",
                    "우변: $A^c = \\{4,5\\}$, $B^c = \\{1,5\\}$이므로 $A^c \\cup B^c = \\{1,4,5\\}$",
                    "좌변 $= \\{1,4,5\\} =$ 우변"
                ],
                "answer": "$(A \\cap B)^c = \\{1,4,5\\} = A^c \\cup B^c$이므로 성립한다.",
                "lesson": "교집합의 여집합은 각 여집합의 합집합입니다."
            },
            {
                "title": "[응용] 드모르간의 법칙을 이용한 식 변환",
                "problem": "$(A^c \\cup B)^c$를 드모르간의 법칙으로 간소화하시오.",
                "steps": [
                    "드모르간 제1법칙 적용: $(A^c \\cup B)^c = (A^c)^c \\cap B^c$",
                    "이중 여집합 제거: $(A^c)^c = A$",
                    "따라서 $(A^c \\cup B)^c = A \\cap B^c = A \\setminus B$"
                ],
                "answer": "$(A^c \\cup B)^c = A \\cap B^c = A \\setminus B$",
                "lesson": "드모르간의 법칙과 이중 여집합을 결합하면 복잡한 집합 식을 간결하게 변환할 수 있습니다."
            },
            {
                "title": "[응용] 드모르간의 법칙 증명",
                "problem": "$(A \\cup B)^c = A^c \\cap B^c$를 원소 판별로 증명하시오.",
                "steps": [
                    "$x \\in (A \\cup B)^c \\Leftrightarrow x \\notin A \\cup B$",
                    "$\\Leftrightarrow \\neg(x \\in A \\text{ 또는 } x \\in B)$",
                    "$\\Leftrightarrow x \\notin A \\text{ 그리고 } x \\notin B$ (논리의 드모르간)",
                    "$\\Leftrightarrow x \\in A^c \\text{ 그리고 } x \\in B^c$",
                    "$\\Leftrightarrow x \\in A^c \\cap B^c$"
                ],
                "answer": "논리적 동치 변환에 의해 $(A \\cup B)^c = A^c \\cap B^c$가 성립한다.",
                "lesson": "집합의 드모르간 법칙은 논리의 드모르간 법칙($\\neg(P \\vee Q) = \\neg P \\wedge \\neg Q$)과 정확히 대응합니다."
            },
            {
                "title": "[심화] 일반화된 드모르간의 법칙",
                "problem": "집합족 $\\{A_i\\}_{i \\in I}$에 대해 $(\\bigcup_{i \\in I} A_i)^c = \\bigcap_{i \\in I} A_i^c$임을 증명하시오.",
                "steps": [
                    "$x \\in (\\bigcup_{i \\in I} A_i)^c \\Leftrightarrow x \\notin \\bigcup_{i \\in I} A_i$",
                    "$\\Leftrightarrow$ 모든 $i \\in I$에 대해 $x \\notin A_i$",
                    "$\\Leftrightarrow$ 모든 $i \\in I$에 대해 $x \\in A_i^c$",
                    "$\\Leftrightarrow x \\in \\bigcap_{i \\in I} A_i^c$",
                    "따라서 $(\\bigcup_{i \\in I} A_i)^c = \\bigcap_{i \\in I} A_i^c$"
                ],
                "answer": "$(\\bigcup_{i \\in I} A_i)^c = \\bigcap_{i \\in I} A_i^c$",
                "lesson": "드모르간의 법칙은 유한 개뿐 아니라 임의 개수(무한 포함)의 집합에 대해서도 성립합니다."
            }
        ],
        "problems": [
            {
                "id": "14-1",
                "type": "choice",
                "difficulty": 1,
                "question": "드모르간의 법칙에 의해 $(A \\cup B)^c$는 무엇과 같은가?",
                "choices": [
                    "$A^c \\cup B^c$",
                    "$A^c \\cap B^c$",
                    "$(A^c \\cup B)^c$",
                    "$A \\cap B$"
                ],
                "answer": "$A^c \\cap B^c$",
                "hints": [
                    "드모르간의 법칙: 여집합을 취하면 $\\cup$와 $\\cap$가 바뀝니다.",
                    "$(A \\cup B)^c$에서 $\\cup$가 $\\cap$로 바뀌고, 각 집합에 여집합이 붙습니다.",
                    "$(A \\cup B)^c = A^c \\cap B^c$"
                ],
                "explanation": "드모르간의 제1법칙에 의해 $(A \\cup B)^c = A^c \\cap B^c$입니다. 합집합의 여집합은 여집합의 교집합과 같습니다.",
                "wrongAnalysis": "여집합을 취할 때 $\\cup$를 $\\cap$로 바꾸지 않고 그대로 두어 $A^c \\cup B^c$로 답하는 실수가 많습니다. 드모르간의 법칙의 핵심은 연산 기호가 바뀐다는 것입니다."
            },
            {
                "id": "14-2",
                "type": "text",
                "difficulty": 2,
                "question": "$U = \\{1, 2, 3, 4, 5, 6, 7, 8, 9, 10\\}$, $A = \\{1, 3, 5, 7, 9\\}$, $B = \\{1, 2, 3, 4, 5\\}$일 때, $(A \\cap B)^c$를 원소나열법으로 구하시오.",
                "answer": "$\\{2, 4, 6, 7, 8, 9, 10\\}$",
                "hints": [
                    "먼저 $A \\cap B$를 구하세요: $A$와 $B$의 공통 원소는 $\\{1, 3, 5\\}$입니다.",
                    "$(A \\cap B)^c$는 $U$에서 $A \\cap B$를 뺀 것입니다.",
                    "$U \\setminus \\{1, 3, 5\\} = \\{2, 4, 6, 7, 8, 9, 10\\}$"
                ],
                "explanation": "$A \\cap B = \\{1, 3, 5\\}$이므로, $(A \\cap B)^c = U \\setminus \\{1, 3, 5\\} = \\{2, 4, 6, 7, 8, 9, 10\\}$입니다. 드모르간의 법칙으로도 같은 결과를 얻습니다: $A^c = \\{2, 4, 6, 8, 10\\}$, $B^c = \\{6, 7, 8, 9, 10\\}$이므로 $A^c \\cup B^c = \\{2, 4, 6, 7, 8, 9, 10\\}$.",
                "wrongAnalysis": "$(A \\cap B)^c$를 구할 때 $A^c \\cap B^c$(드모르간 법칙 오적용)로 계산하면 $\\{6, 8, 10\\}$이 되어 틀립니다. $(A \\cap B)^c = A^c \\cup B^c$이지 $A^c \\cap B^c$가 아닙니다."
            },
            {
                "id": "14-3",
                "type": "choice",
                "difficulty": 3,
                "question": "드모르간의 법칙을 이용하여 $(A^c \\cup B^c)^c$를 간단히 한 것은?",
                "choices": [
                    "$A \\cup B$",
                    "$A \\cap B$",
                    "$A^c \\cap B^c$",
                    "$(A \\cup B)^c$"
                ],
                "answer": "$A \\cap B$",
                "hints": [
                    "드모르간의 법칙을 $(A^c \\cup B^c)^c$에 적용해 보세요.",
                    "$(X \\cup Y)^c = X^c \\cap Y^c$에서 $X = A^c$, $Y = B^c$로 놓으세요.",
                    "$(A^c)^c = A$, $(B^c)^c = B$임을 이용하세요."
                ],
                "explanation": "드모르간의 법칙에 의해 $(A^c \\cup B^c)^c = (A^c)^c \\cap (B^c)^c = A \\cap B$입니다. 여집합을 두 번 취하면 원래 집합으로 돌아오는 성질($(X^c)^c = X$)을 함께 사용합니다.",
                "wrongAnalysis": "드모르간의 법칙을 한 번 적용한 후 $(A^c)^c = A$를 적용하지 않아 $(A^c)^c \\cap (B^c)^c$에서 멈추는 경우가 있습니다. 이중 여집합은 반드시 원래 집합으로 되돌려야 합니다."
            },
            {
                "id": "14-4",
                "type": "choice",
                "difficulty": 1,
                "question": "드모르간의 법칙에 의해 $(A \\cap B)^c$는?",
                "choices": [
                    "$A^c \\cap B^c$",
                    "$A^c \\cup B^c$",
                    "$A \\cup B$",
                    "$(A \\cup B)^c$"
                ],
                "answer": "$A^c \\cup B^c$",
                "hints": [
                    "여집합을 취하면 $\\cup$와 $\\cap$가 바뀝니다.",
                    "$(A \\cap B)^c$에서 $\\cap$가 $\\cup$로 바뀝니다."
                ],
                "explanation": "$(A \\cap B)^c = A^c \\cup B^c$입니다.",
                "wrongAnalysis": "$A^c \\cap B^c$를 선택하면 연산 기호를 바꾸지 않은 것입니다."
            },
            {
                "id": "14-5",
                "type": "text",
                "difficulty": 2,
                "question": "$U = \\{1,2,3,4,5,6,7,8\\}$, $A = \\{1,2,3,4\\}$, $B = \\{3,4,5,6\\}$일 때, $(A \\cup B)^c$를 구하시오.",
                "answer": "$\\{7,8\\}$",
                "hints": [
                    "$A \\cup B = \\{1,2,3,4,5,6\\}$입니다.",
                    "$(A \\cup B)^c = U \\setminus \\{1,2,3,4,5,6\\}$입니다."
                ],
                "explanation": "$(A \\cup B)^c = \\{7,8\\}$입니다. 드모르간의 법칙으로도 확인: $A^c \\cap B^c = \\{5,6,7,8\\} \\cap \\{1,2,7,8\\} = \\{7,8\\}$.",
                "wrongAnalysis": "드모르간의 법칙을 잘못 적용하여 $A^c \\cup B^c$로 계산하면 안 됩니다."
            }
        ],
        "summary": {
            "keyPoints": [
                "$(A \\cup B)^c = A^c \\cap B^c$ (합집합의 여집합 = 여집합의 교집합)",
                "$(A \\cap B)^c = A^c \\cup B^c$ (교집합의 여집합 = 여집합의 합집합)",
                "여집합을 취하면 $\\cup \\leftrightarrow \\cap$가 바뀐다."
            ],
            "formulas": [
                "(A \\cup B)^c = A^c \\cap B^c",
                "(A \\cap B)^c = A^c \\cup B^c",
                "(A^c)^c = A"
            ],
            "commonMistakes": [
                "여집합을 취할 때 $\\cup$와 $\\cap$를 바꾸지 않는 것",
                "$(A \\cap B)^c = A^c \\cap B^c$로 잘못 적용하는 것",
                "이중 여집합 $(A^c)^c = A$를 적용하지 않고 멈추는 것"
            ],
            "nextConnection": "다음 레슨에서는 두 집합 중 정확히 하나에만 속하는 원소를 모으는 대칭차집합을 배웁니다."
        }
    },
    {
        "id": 15,
        "title": "대칭차집합",
        "category": "집합의 연산",
        "level": "중급",
        "question": "두 집합 중 정확히 하나에만 속하는 원소를 어떻게 모으는가?",
        "concept": {
            "intro": "지금까지 합집합, 교집합, 차집합을 배웠습니다. 이제 이 연산들을 조합하여 만들어지는 새로운 연산인 **대칭차집합(symmetric difference)**을 소개합니다.\n\n:::definition[대칭차집합]\n대칭차집합 $A \\triangle B$는 두 집합 중 정확히 하나에만 속하는 원소들의 집합입니다.\n\n형식적으로 대칭차집합은 두 가지 동치 표현이 있습니다:\n$$A \\triangle B = (A \\setminus B) \\cup (B \\setminus A)$$\n$$A \\triangle B = (A \\cup B) \\setminus (A \\cap B)$$\n첫 번째 표현은 '$A$에만 속하는 것'과 '$B$에만 속하는 것'을 합친 것이고, 두 번째 표현은 '$A$ 또는 $B$에 속하는 것'에서 '양쪽 모두에 속하는 것'을 뺀 것입니다. 두 표현은 같은 집합을 나타냅니다.\n:::\n\n예를 들어, $A = \\{1, 2, 3, 4\\}$, $B = \\{3, 4, 5, 6\\}$이면, $A \\triangle B = \\{1, 2, 5, 6\\}$입니다. $3, 4$는 양쪽 모두에 속하므로 제외됩니다.\n\n대칭차집합의 주요 성질은 다음과 같습니다. **교환법칙**이 성립합니다: $A \\triangle B = B \\triangle A$. **결합법칙**도 성립합니다: $(A \\triangle B) \\triangle C = A \\triangle (B \\triangle C)$. $A \\triangle \\emptyset = A$ (공집합은 항등원), $A \\triangle A = \\emptyset$ (자기 자신과의 대칭차는 공집합)입니다. 이 성질들은 대칭차집합이 대수적으로 매우 깔끔한 구조를 가짐을 보여줍니다.\n\n대칭차집합은 XOR(배타적 논리합) 연산과 정확히 대응됩니다. 프로그래밍에서 비트 XOR 연산, 암호학에서의 응용, 그래프 이론에서 변의 대칭차 등 다양한 분야에서 활용됩니다.",
            "intuition": "대칭차집합을 직관적으로 이해하려면 벤 다이어그램을 떠올리세요. 두 원이 겹치는 가운데 부분을 제외하고, 양쪽 초승달 모양의 부분만 취하는 것이 대칭차집합입니다. '한쪽에만 있는 것'을 모으는 연산이므로, 이름에 '대칭'이 들어간 것처럼 $A$와 $B$의 역할이 대칭적입니다.",
            "formula": "A \\triangle B = (A \\setminus B) \\cup (B \\setminus A)\nA \\triangle B = (A \\cup B) \\setminus (A \\cap B)\nA \\triangle B = B \\triangle A \\text{(교환법칙)}\nA \\triangle \\emptyset = A \\text{,} A \\triangle A = \\emptyset",
            "summary": "대칭차집합 $A \\triangle B$는 두 집합 중 정확히 하나에만 속하는 원소의 집합이며, $(A \\setminus B) \\cup (B \\setminus A)$로 구합니다."
        },
        "examples": [
            {
                "title": "대칭차집합 구하기",
                "problem": "$A = \\{1, 2, 3, 4, 5\\}$, $B = \\{4, 5, 6, 7, 8\\}$일 때, $A \\triangle B$를 구하시오.",
                "steps": [
                    "$A \\setminus B$: $A$에서 $B$에도 속하는 원소 $4, 5$를 제거하면 $\\{1, 2, 3\\}$",
                    "$B \\setminus A$: $B$에서 $A$에도 속하는 원소 $4, 5$를 제거하면 $\\{6, 7, 8\\}$",
                    "$A \\triangle B = (A \\setminus B) \\cup (B \\setminus A) = \\{1, 2, 3\\} \\cup \\{6, 7, 8\\} = \\{1, 2, 3, 6, 7, 8\\}$",
                    "검증: $(A \\cup B) \\setminus (A \\cap B) = \\{1,2,3,4,5,6,7,8\\} \\setminus \\{4,5\\} = \\{1,2,3,6,7,8\\}$ ✓"
                ],
                "answer": "$A \\triangle B = \\{1, 2, 3, 6, 7, 8\\}$",
                "lesson": "대칭차집합은 두 가지 방법으로 구할 수 있으며, 둘 다 같은 결과를 줍니다. 검산에 활용하면 좋습니다."
            },
            {
                "title": "[기본] 대칭차집합의 기본 성질",
                "problem": "$A = \\{1, 2, 3\\}$일 때, $A \\triangle A$와 $A \\triangle \\emptyset$을 각각 구하시오.",
                "steps": [
                    "$A \\triangle A = (A \\setminus A) \\cup (A \\setminus A) = \\emptyset \\cup \\emptyset = \\emptyset$",
                    "$A \\triangle \\emptyset = (A \\setminus \\emptyset) \\cup (\\emptyset \\setminus A) = A \\cup \\emptyset = A = \\{1, 2, 3\\}$"
                ],
                "answer": "$A \\triangle A = \\emptyset$, $A \\triangle \\emptyset = \\{1, 2, 3\\}$",
                "lesson": "대칭차에서 자기 자신은 상쇄되어 공집합이 되고, 공집합은 항등원 역할을 합니다."
            },
            {
                "title": "[응용] 대칭차집합의 원소 개수",
                "problem": "$|A| = 7$, $|B| = 5$, $|A \\cap B| = 3$일 때, $|A \\triangle B|$를 구하시오.",
                "steps": [
                    "$|A \\setminus B| = |A| - |A \\cap B| = 7 - 3 = 4$",
                    "$|B \\setminus A| = |B| - |A \\cap B| = 5 - 3 = 2$",
                    "$|A \\triangle B| = |A \\setminus B| + |B \\setminus A| = 4 + 2 = 6$",
                    "또는: $|A \\triangle B| = |A \\cup B| - |A \\cap B| = (7 + 5 - 3) - 3 = 6$"
                ],
                "answer": "$|A \\triangle B| = 6$",
                "lesson": "$|A \\triangle B| = |A| + |B| - 2|A \\cap B|$로 계산할 수 있습니다."
            },
            {
                "title": "[응용] 대칭차집합과 여집합 표현",
                "problem": "$A \\triangle B = (A \\cap B^c) \\cup (A^c \\cap B)$임을 보이시오.",
                "steps": [
                    "$A \\setminus B = A \\cap B^c$ (차집합과 여집합의 관계)",
                    "$B \\setminus A = B \\cap A^c = A^c \\cap B$",
                    "$A \\triangle B = (A \\setminus B) \\cup (B \\setminus A) = (A \\cap B^c) \\cup (A^c \\cap B)$"
                ],
                "answer": "$A \\triangle B = (A \\cap B^c) \\cup (A^c \\cap B)$",
                "lesson": "대칭차집합은 XOR($\\oplus$) 연산에 대응하며, 여집합을 이용한 표현이 논리적 분석에 유용합니다."
            },
            {
                "title": "[심화] 대칭차집합의 결합법칙 증명",
                "problem": "$(A \\triangle B) \\triangle C = A \\triangle (B \\triangle C)$임을 증명하시오.",
                "steps": [
                    "$x \\in A \\triangle B \\Leftrightarrow$ $x$가 $A, B$ 중 정확히 하나에 속합니다.",
                    "$x \\in (A \\triangle B) \\triangle C \\Leftrightarrow$ $x$가 $A \\triangle B$와 $C$ 중 정확히 하나에 속합니다.",
                    "이를 분석하면: $x$가 $A, B, C$ 중 홀수 개에 속하는 것과 동치입니다.",
                    "마찬가지로 $x \\in A \\triangle (B \\triangle C) \\Leftrightarrow$ $x$가 $A, B, C$ 중 홀수 개에 속합니다.",
                    "양쪽이 같은 조건이므로 $(A \\triangle B) \\triangle C = A \\triangle (B \\triangle C)$."
                ],
                "answer": "양쪽 모두 '$A, B, C$ 중 홀수 개에 속하는 원소의 집합'이므로 결합법칙이 성립한다.",
                "lesson": "대칭차의 결합법칙은 XOR의 결합법칙과 동일하며, '홀수 개에 속하는지'로 특징지어집니다."
            }
        ],
        "problems": [
            {
                "id": "15-1",
                "type": "choice",
                "difficulty": 1,
                "question": "$A = \\{1, 2, 3\\}$, $B = \\{2, 3, 4\\}$일 때, $A \\triangle B$는?",
                "choices": [
                    "$\\{1, 4\\}$",
                    "$\\{2, 3\\}$",
                    "$\\{1, 2, 3, 4\\}$",
                    "$\\emptyset$"
                ],
                "answer": "$\\{1, 4\\}$",
                "hints": [
                    "대칭차집합은 정확히 한쪽에만 속하는 원소의 집합입니다.",
                    "$A$에만 속하는 원소: $1$ / $B$에만 속하는 원소: $4$ / 양쪽 모두: $2, 3$",
                    "양쪽 모두에 속하는 $2, 3$은 제외하고, $A$에만 속하는 $1$과 $B$에만 속하는 $4$를 모으세요."
                ],
                "explanation": "$A \\setminus B = \\{1\\}$, $B \\setminus A = \\{4\\}$이므로 $A \\triangle B = \\{1\\} \\cup \\{4\\} = \\{1, 4\\}$입니다.",
                "wrongAnalysis": "합집합 $\\{1,2,3,4\\}$과 혼동하거나, 교집합 $\\{2,3\\}$과 혼동하는 경우가 있습니다. 대칭차집합은 '양쪽 모두에 속하는 원소를 제외'한다는 점이 핵심입니다."
            },
            {
                "id": "15-2",
                "type": "number",
                "difficulty": 2,
                "question": "$|A| = 7$, $|B| = 5$, $|A \\cap B| = 2$일 때, $|A \\triangle B|$를 구하시오.",
                "answer": "8",
                "hints": [
                    "$A \\triangle B = (A \\cup B) \\setminus (A \\cap B)$이므로, $|A \\triangle B| = |A \\cup B| - |A \\cap B|$입니다.",
                    "먼저 $|A \\cup B| = |A| + |B| - |A \\cap B| = 7 + 5 - 2 = 10$을 구합니다.",
                    "$|A \\triangle B| = |A \\cup B| - |A \\cap B| = 10 - 2 = 8$"
                ],
                "explanation": "$|A \\cup B| = 7 + 5 - 2 = 10$이고, $|A \\triangle B| = |A \\cup B| - |A \\cap B| = 10 - 2 = 8$입니다. 또는 $|A \\triangle B| = |A| + |B| - 2|A \\cap B| = 7 + 5 - 4 = 8$로도 구할 수 있습니다.",
                "wrongAnalysis": "$|A \\triangle B| = |A| + |B| - |A \\cap B|$로 잘못 계산하여 $10$으로 답하는 경우가 있습니다. 대칭차집합에서는 교집합의 원소가 양쪽에서 모두 빠지므로 $|A \\cap B|$를 두 번 빼야 합니다: $|A \\triangle B| = |A| + |B| - 2|A \\cap B|$."
            },
            {
                "id": "15-3",
                "type": "text",
                "difficulty": 3,
                "question": "임의의 집합 $A$에 대해 $A \\triangle A$의 결과를 구하고, 그 이유를 설명하시오.",
                "answer": "$\\emptyset$",
                "hints": [
                    "$A \\triangle A = (A \\setminus A) \\cup (A \\setminus A)$을 계산해 보세요.",
                    "$A \\setminus A$는 $A$에서 $A$ 자신을 뺀 것이므로 원소가 남지 않습니다.",
                    "$A \\setminus A = \\emptyset$이므로 $A \\triangle A = \\emptyset \\cup \\emptyset = \\emptyset$"
                ],
                "explanation": "$A \\triangle A = (A \\setminus A) \\cup (A \\setminus A) = \\emptyset \\cup \\emptyset = \\emptyset$입니다. 모든 원소가 양쪽 집합 모두에 속하므로, '정확히 하나에만 속하는 원소'는 없습니다. 이는 대칭차집합에서 자기 자신이 역원임을 의미합니다.",
                "wrongAnalysis": "$A \\triangle A = A$로 답하는 경우가 있습니다. 이는 대칭차집합의 정의를 잘못 이해한 것입니다. 대칭차집합은 '양쪽 모두에 속하는 원소를 제외'하므로, 같은 집합끼리의 대칭차는 모든 원소가 제외되어 공집합이 됩니다."
            },
            {
                "id": "15-4",
                "type": "choice",
                "difficulty": 1,
                "question": "$A = \\{a,b,c\\}$, $B = \\{b,c,d\\}$일 때, $A \\triangle B$는?",
                "choices": [
                    "$\\{a,d\\}$",
                    "$\\{b,c\\}$",
                    "$\\{a,b,c,d\\}$",
                    "$\\emptyset$"
                ],
                "answer": "$\\{a,d\\}$",
                "hints": [
                    "대칭차집합은 한쪽에만 속하는 원소입니다.",
                    "$A$에만 속한 것: $a$, $B$에만 속한 것: $d$."
                ],
                "explanation": "$A \\triangle B = \\{a\\} \\cup \\{d\\} = \\{a,d\\}$입니다.",
                "wrongAnalysis": "합집합이나 교집합과 혼동하지 마세요."
            },
            {
                "id": "15-5",
                "type": "text",
                "difficulty": 2,
                "question": "임의의 집합 $A$에 대해 $A \\triangle \\emptyset$을 구하시오.",
                "answer": "$A$",
                "hints": [
                    "$A \\triangle \\emptyset = (A \\setminus \\emptyset) \\cup (\\emptyset \\setminus A)$",
                    "$A \\setminus \\emptyset = A$이고 $\\emptyset \\setminus A = \\emptyset$입니다."
                ],
                "explanation": "$A \\triangle \\emptyset = A \\cup \\emptyset = A$입니다. 공집합은 대칭차의 항등원입니다.",
                "wrongAnalysis": "$A \\triangle A = \\emptyset$과 혼동하지 마세요."
            }
        ],
        "summary": {
            "keyPoints": [
                "$A \\triangle B$는 정확히 한 집합에만 속하는 원소의 집합이다.",
                "$A \\triangle B = (A \\setminus B) \\cup (B \\setminus A) = (A \\cup B) \\setminus (A \\cap B)$",
                "$A \\triangle A = \\emptyset$, $A \\triangle \\emptyset = A$"
            ],
            "formulas": [
                "A \\triangle B = (A \\setminus B) \\cup (B \\setminus A)",
                "A \\triangle B = (A \\cup B) \\setminus (A \\cap B)",
                "|A \\triangle B| = |A| + |B| - 2|A \\cap B|"
            ],
            "commonMistakes": [
                "대칭차집합과 합집합을 혼동하는 것",
                "$|A \\triangle B|$를 구할 때 $|A \\cap B|$를 한 번만 빼는 것 (두 번 빼야 함)",
                "$A \\triangle A = A$로 잘못 계산하는 것 (정답은 $\\emptyset$)"
            ],
            "nextConnection": "다음 레슨에서는 집합을 원소로 가지는 '집합족'과, 여러 집합의 합·교집합을 한꺼번에 다루는 일반화된 연산을 배웁니다."
        }
    },
    {
        "id": 16,
        "title": "집합족과 일반화된 합집합·교집합",
        "category": "집합의 연산",
        "level": "중급",
        "question": "집합이 여러 개일 때 합집합과 교집합을 어떻게 일반화하는가?",
        "concept": {
            "intro": "지금까지 두 집합 $A$, $B$에 대해 $A \\cup B$, $A \\cap B$를 정의했습니다. 그런데 수학에서는 집합이 3개, 10개, 무한히 많은 경우도 자주 등장합니다. 이를 체계적으로 다루기 위해 **집합족(family of sets)**과 **일반화된 합·교집합**의 개념이 필요합니다.\n\n:::definition[집합족]\n**집합족**이란 집합을 원소로 가지는 집합입니다. 예를 들어 $\\mathcal{F} = \\{\\{1,2\\}, \\{2,3\\}, \\{3,4\\}\\}$는 세 집합을 원소로 가지는 집합족입니다. 집합족은 보통 $\\mathcal{F}$, $\\mathcal{G}$ 등 캘리그래피 문자로 표기합니다.\n\n집합족의 원소에 이름표(인덱스)를 붙이면 **첨수 집합족(indexed family)**이 됩니다. 인덱스 집합 $I$의 각 원소 $i$에 집합 $A_i$를 대응시킨 것을 $\\{A_i\\}_{i \\in I}$ 또는 $\\{A_i : i \\in I\\}$로 씁니다. 예를 들어 $I = \\{1, 2, 3\\}$이고 $A_1 = \\{a, b\\}$, $A_2 = \\{b, c\\}$, $A_3 = \\{c, d\\}$이면, $\\{A_i\\}_{i \\in I}$는 이 세 집합을 모은 것입니다. 인덱스 집합은 유한일 수도, 무한일 수도 있습니다. $I = \\mathbb{N}$이면 가산 무한 개의 집합을 다룰 수 있습니다.\n:::\n\n:::definition[일반화된 합집합과 교집합]\n이제 **일반화된 합집합**을 정의합니다. 첨수 집합족 $\\{A_i\\}_{i \\in I}$에 대해,\n$$\\bigcup_{i \\in I} A_i = \\{x \\mid \\exists i \\in I,\\; x \\in A_i\\}$$\n즉, 적어도 하나의 $A_i$에 속하는 원소 전체의 집합입니다. 마찬가지로 **일반화된 교집합**은\n$$\\bigcap_{i \\in I} A_i = \\{x \\mid \\forall i \\in I,\\; x \\in A_i\\}$$\n즉, 모든 $A_i$에 동시에 속하는 원소 전체의 집합입니다.\n\n집합족 $\\mathcal{F}$ 자체에 대해서도 $\\bigcup \\mathcal{F} = \\{x \\mid \\exists A \\in \\mathcal{F},\\; x \\in A\\}$로 쓸 수 있습니다. 이 표기는 인덱스 없이 집합족 전체의 합집합을 나타냅니다.\n:::\n\n마지막으로, 집합족의 원소들이 서로소(pairwise disjoint)일 때, 즉 $i \\neq j$이면 $A_i \\cap A_j = \\emptyset$일 때, 이를 강조하기 위해 **분리합집합(disjoint union)** $\\bigsqcup_{i \\in I} A_i$로 씁니다. 분리합집합은 나중에 동치관계의 분할에서 핵심적으로 쓰입니다.",
            "intuition": "집합족은 '서랍장'에 비유할 수 있습니다. 각 서랍($A_i$)에 물건이 들어 있고, 서랍장 전체($\\mathcal{F}$)가 집합족입니다. $\\bigcup$은 '모든 서랍을 열고 물건을 한 바닥에 쏟아 놓는 것'이고, $\\bigcap$은 '모든 서랍에 공통으로 들어 있는 물건만 골라내는 것'입니다. 분리합집합은 '서랍끼리 겹치는 물건이 하나도 없다'는 조건이 추가된 것입니다.",
            "formula": "\\text{집합족:} \\mathcal{F} = \\{A_i\\}_{i \\in I}\n\\bigcup_{i \\in I} A_i = \\{x \\mid \\exists i \\in I,\\; x \\in A_i\\}\n\\bigcap_{i \\in I} A_i = \\{x \\mid \\forall i \\in I,\\; x \\in A_i\\}\n\\bigcup \\mathcal{F} = \\{x \\mid \\exists A \\in \\mathcal{F},\\; x \\in A\\}\n\\text{분리합집합:} \\bigsqcup_{i \\in I} A_i \\;(A_i \\cap A_j = \\emptyset,\\; i \\neq j)",
            "summary": "집합족 $\\mathcal{F} = \\{A_i\\}_{i \\in I}$은 집합을 원소로 가지는 집합이며, $\\bigcup_{i \\in I} A_i$는 적어도 하나에 속하는 원소, $\\bigcap_{i \\in I} A_i$는 모두에 속하는 원소의 집합입니다."
        },
        "examples": [
            {
                "title": "첨수 집합족의 합집합과 교집합",
                "problem": "$I = \\{1, 2, 3\\}$, $A_1 = \\{1, 2, 3\\}$, $A_2 = \\{2, 3, 4\\}$, $A_3 = \\{3, 4, 5\\}$일 때, $\\bigcup_{i \\in I} A_i$와 $\\bigcap_{i \\in I} A_i$를 각각 구하시오.",
                "steps": [
                    "$\\bigcup_{i \\in I} A_i$: 적어도 하나의 $A_i$에 속하는 원소를 모두 모읍니다.",
                    "$A_1 \\cup A_2 \\cup A_3 = \\{1,2,3\\} \\cup \\{2,3,4\\} \\cup \\{3,4,5\\} = \\{1,2,3,4,5\\}$",
                    "$\\bigcap_{i \\in I} A_i$: 모든 $A_i$에 동시에 속하는 원소만 남깁니다.",
                    "$A_1 \\cap A_2 \\cap A_3 = \\{3\\}$ ($3$만이 세 집합 모두에 속합니다)"
                ],
                "answer": "$\\bigcup_{i \\in I} A_i = \\{1,2,3,4,5\\}$, $\\bigcap_{i \\in I} A_i = \\{3\\}$",
                "lesson": "$\\bigcup$은 '하나라도 속하면 포함', $\\bigcap$은 '모두에 속해야 포함'입니다. 유한 개의 첨수 합·교집합은 순서대로 합·교를 구한 것과 같습니다."
            },
            {
                "title": "[기본] 집합족의 합집합",
                "problem": "$\\mathcal{F} = \\{\\{a, b\\}, \\{b, c\\}, \\{c, d\\}\\}$일 때, $\\bigcup \\mathcal{F}$와 $\\bigcap \\mathcal{F}$를 구하시오.",
                "steps": [
                    "$\\bigcup \\mathcal{F}$: 적어도 하나의 원소 집합에 속하는 것을 모읍니다.",
                    "$\\{a,b\\} \\cup \\{b,c\\} \\cup \\{c,d\\} = \\{a, b, c, d\\}$",
                    "$\\bigcap \\mathcal{F}$: 세 집합 모두에 속하는 것을 찾습니다.",
                    "세 집합 모두에 공통인 원소는 없으므로 $\\bigcap \\mathcal{F} = \\emptyset$"
                ],
                "answer": "$\\bigcup \\mathcal{F} = \\{a, b, c, d\\}$, $\\bigcap \\mathcal{F} = \\emptyset$",
                "lesson": "집합 수가 늘어날수록 합집합은 커지고 교집합은 작아지는 경향이 있습니다."
            },
            {
                "title": "[응용] 무한 첨수 집합족의 합·교집합",
                "problem": "$A_n = \\{x \\in \\mathbb{R} \\mid -\\frac{1}{n} < x < \\frac{1}{n}\\}$ ($n = 1, 2, 3, \\ldots$)일 때, $\\bigcap_{n=1}^{\\infty} A_n$을 구하시오.",
                "steps": [
                    "$A_n = (-\\frac{1}{n}, \\frac{1}{n})$은 $0$을 중심으로 한 개구간입니다.",
                    "$n$이 커질수록 $A_n$은 점점 좁아져 $0$에 가까워집니다.",
                    "$x \\neq 0$이면 $|x| > 0$이므로, $n > \\frac{1}{|x|}$인 $n$이 존재하여 $x \\notin A_n$.",
                    "$x = 0$이면 모든 $n$에 대해 $0 \\in A_n$.",
                    "따라서 $\\bigcap_{n=1}^{\\infty} A_n = \\{0\\}$."
                ],
                "answer": "$\\bigcap_{n=1}^{\\infty} A_n = \\{0\\}$",
                "lesson": "무한 교집합은 유한 교집합과 다른 결과를 줄 수 있으며, 극한적 행동을 반영합니다."
            },
            {
                "title": "[응용] 분리합집합과 분할",
                "problem": "$A_1 = \\{1, 3, 5\\}$, $A_2 = \\{2, 4, 6\\}$, $A_3 = \\{7, 8, 9\\}$이 $\\{1, 2, \\ldots, 9\\}$의 분할인지 확인하시오.",
                "steps": [
                    "분할 조건 1: $A_1, A_2, A_3$가 쌍마다 서로소인지 확인합니다.",
                    "$A_1 \\cap A_2 = \\emptyset$, $A_1 \\cap A_3 = \\emptyset$, $A_2 \\cap A_3 = \\emptyset$. 쌍마다 서로소 확인.",
                    "분할 조건 2: $A_1 \\cup A_2 \\cup A_3 = \\{1,2,\\ldots,9\\}$인지 확인합니다.",
                    "$\\{1,3,5\\} \\cup \\{2,4,6\\} \\cup \\{7,8,9\\} = \\{1,2,3,4,5,6,7,8,9\\}$. 합집합 확인.",
                    "두 조건 모두 만족하므로 분할입니다."
                ],
                "answer": "$\\{A_1, A_2, A_3\\}$은 $\\{1, 2, \\ldots, 9\\}$의 분할이다.",
                "lesson": "분할은 전체를 빈틈 없이, 겹침 없이 나누는 것으로, 분리합집합 $\\bigsqcup$으로 표현됩니다."
            },
            {
                "title": "[심화] 무한 합집합과 교집합의 단조성",
                "problem": "$A_n = \\{x \\in \\mathbb{N} \\mid x \\leq n\\}$ ($n = 1, 2, 3, \\ldots$)일 때, $\\bigcup_{n=1}^{\\infty} A_n$을 구하시오.",
                "steps": [
                    "$A_1 = \\{1\\}$, $A_2 = \\{1,2\\}$, $A_3 = \\{1,2,3\\}$, ... 이므로 $A_1 \\subseteq A_2 \\subseteq A_3 \\subseteq \\cdots$ (단조 증가).",
                    "임의의 자연수 $k$에 대해 $k \\in A_k \\subseteq \\bigcup_{n=1}^{\\infty} A_n$.",
                    "따라서 모든 자연수가 합집합에 포함됩니다.",
                    "$\\bigcup_{n=1}^{\\infty} A_n = \\mathbb{N}$ (자연수 전체)."
                ],
                "answer": "$\\bigcup_{n=1}^{\\infty} A_n = \\mathbb{N}$",
                "lesson": "단조 증가하는 집합열의 합집합은 극한적으로 모든 원소를 포함하게 됩니다."
            }
        ],
        "problems": [
            {
                "id": "16-1",
                "type": "choice",
                "difficulty": 1,
                "question": "$\\mathcal{F} = \\{\\{1,2\\}, \\{2,3\\}, \\{3,4\\}\\}$일 때, $\\bigcup \\mathcal{F}$는?",
                "choices": [
                    "$\\{2\\}$",
                    "$\\{1, 2, 3, 4\\}$",
                    "$\\{2, 3\\}$",
                    "$\\{\\{1,2\\}, \\{2,3\\}, \\{3,4\\}\\}$"
                ],
                "answer": "$\\{1, 2, 3, 4\\}$",
                "hints": [
                    "$\\bigcup \\mathcal{F}$는 $\\mathcal{F}$에 속하는 모든 집합의 원소를 합친 것입니다.",
                    "$\\{1,2\\} \\cup \\{2,3\\} \\cup \\{3,4\\}$를 구하면 됩니다.",
                    "중복을 제거하면 $\\{1, 2, 3, 4\\}$가 됩니다."
                ],
                "explanation": "$\\bigcup \\mathcal{F} = \\{1,2\\} \\cup \\{2,3\\} \\cup \\{3,4\\} = \\{1, 2, 3, 4\\}$입니다. $\\bigcup \\mathcal{F}$는 집합족의 모든 원소(집합)에 속하는 대상을 하나로 모은 것입니다.",
                "wrongAnalysis": "$\\bigcup \\mathcal{F}$를 $\\mathcal{F}$ 자체로 혼동하는 경우가 있습니다. $\\mathcal{F}$는 집합의 집합이고, $\\bigcup \\mathcal{F}$는 그 안의 원소들을 '풀어놓은' 것입니다."
            },
            {
                "id": "16-2",
                "type": "text",
                "difficulty": 2,
                "question": "$A_n = \\{1, 2, \\ldots, n\\}$ ($n \\in \\mathbb{N}$)일 때, $\\bigcap_{n=1}^{\\infty} A_n$을 구하고 이유를 설명하시오.",
                "answer": "$\\{1\\}$",
                "hints": [
                    "$\\bigcap_{n=1}^{\\infty} A_n$은 모든 $A_n$에 동시에 속하는 원소의 집합입니다.",
                    "$A_1 = \\{1\\}$, $A_2 = \\{1, 2\\}$, $A_3 = \\{1, 2, 3\\}$, $\\ldots$이므로, $A_1$이 가장 작습니다.",
                    "$1$은 모든 $A_n$에 속하지만, $2$는 $A_1$에 속하지 않습니다."
                ],
                "explanation": "모든 $A_n$에 속하는 원소는 가장 작은 집합인 $A_1 = \\{1\\}$의 원소여야 합니다. $1 \\in A_n$은 모든 $n \\geq 1$에서 성립하므로 $\\bigcap_{n=1}^{\\infty} A_n = \\{1\\}$입니다.",
                "wrongAnalysis": "$\\bigcap$과 $\\bigcup$을 혼동하여 $\\mathbb{N}$으로 답하는 경우가 있습니다. $\\bigcup_{n=1}^{\\infty} A_n = \\mathbb{N}$이지만, $\\bigcap_{n=1}^{\\infty} A_n = \\{1\\}$입니다."
            },
            {
                "id": "16-3",
                "type": "choice",
                "difficulty": 3,
                "question": "$A_1 = \\{a, b\\}$, $A_2 = \\{c, d\\}$, $A_3 = \\{e\\}$일 때, $\\{A_1, A_2, A_3\\}$은 분리합집합 $\\bigsqcup$의 조건을 만족하는가?",
                "choices": [
                    "만족한다: 세 집합이 쌍마다 서로소이다",
                    "만족하지 않는다: $A_1 \\cap A_2 \\neq \\emptyset$이다",
                    "만족하지 않는다: $A_3$의 원소가 하나뿐이다",
                    "판단할 수 없다: 전체집합이 주어지지 않았다"
                ],
                "answer": "만족한다: 세 집합이 쌍마다 서로소이다",
                "hints": [
                    "분리합집합의 조건은 $i \\neq j$이면 $A_i \\cap A_j = \\emptyset$인 것입니다.",
                    "$A_1 \\cap A_2$, $A_1 \\cap A_3$, $A_2 \\cap A_3$을 각각 구해 보세요.",
                    "세 교집합이 모두 공집합인지 확인합니다."
                ],
                "explanation": "$A_1 \\cap A_2 = \\emptyset$, $A_1 \\cap A_3 = \\emptyset$, $A_2 \\cap A_3 = \\emptyset$이므로 세 집합은 쌍마다 서로소(pairwise disjoint)입니다. 따라서 $\\bigsqcup_{i=1}^{3} A_i = \\{a,b,c,d,e\\}$로 쓸 수 있습니다.",
                "wrongAnalysis": "분리합집합의 조건은 '쌍마다 서로소'이지, 원소 개수나 전체집합과는 무관합니다. 세 집합에 공통 원소가 하나도 없으므로 조건을 만족합니다."
            },
            {
                "id": "16-4",
                "type": "number",
                "difficulty": 1,
                "question": "$\\mathcal{F} = \\{\\{1,2,3\\}, \\{3,4,5\\}, \\{5,6,7\\}\\}$일 때, $|\\bigcup \\mathcal{F}|$를 구하시오.",
                "answer": "7",
                "hints": [
                    "모든 집합의 원소를 합치세요.",
                    "중복을 제거하면 $\\{1,2,3,4,5,6,7\\}$입니다."
                ],
                "explanation": "$\\bigcup \\mathcal{F} = \\{1,2,3,4,5,6,7\\}$이므로 원소 수는 7입니다.",
                "wrongAnalysis": "각 집합의 원소 수를 합산하면 $9$가 되지만, 중복을 제거해야 합니다."
            },
            {
                "id": "16-5",
                "type": "text",
                "difficulty": 2,
                "question": "$B_n = \\{n, n+1, n+2\\}$ ($n \\in \\mathbb{N}$)일 때, $\\bigcap_{n=0}^{\\infty} B_n$을 구하시오.",
                "answer": "$\\emptyset$",
                "hints": [
                    "모든 $B_n$에 동시에 속하는 원소가 있는지 확인하세요.",
                    "자연수 $k$는 $B_{k+1}$에 속하지 않습니다."
                ],
                "explanation": "어떤 자연수 $k$도 $B_{k+1} = \\{k+1,k+2,k+3\\}$에 속하지 않으므로 $\\bigcap_{n=0}^{\\infty} B_n = \\emptyset$입니다.",
                "wrongAnalysis": "$\\bigcap$과 $\\bigcup$을 혼동하지 마세요."
            }
        ],
        "summary": {
            "keyPoints": [
                "집합족 $\\mathcal{F}$은 집합을 원소로 가지는 집합이며, 캘리그래피 문자로 표기한다.",
                "첨수 집합족 $\\{A_i\\}_{i \\in I}$에서 $I$는 인덱스 집합이다.",
                "$\\bigcup_{i \\in I} A_i$는 적어도 하나에 속하는 원소, $\\bigcap_{i \\in I} A_i$는 모두에 속하는 원소의 집합이다.",
                "분리합집합 $\\bigsqcup$은 쌍마다 서로소인 집합족의 합집합이다."
            ],
            "formulas": [
                "\\bigcup_{i \\in I} A_i = \\{x \\mid \\exists i \\in I,\\; x \\in A_i\\}",
                "\\bigcap_{i \\in I} A_i = \\{x \\mid \\forall i \\in I,\\; x \\in A_i\\}",
                "\\bigcup \\mathcal{F} = \\{x \\mid \\exists A \\in \\mathcal{F},\\; x \\in A\\}",
                "\\bigsqcup_{i \\in I} A_i \\;(A_i \\cap A_j = \\emptyset,\\; i \\neq j)"
            ],
            "commonMistakes": [
                "집합족 $\\mathcal{F}$와 그 합집합 $\\bigcup \\mathcal{F}$를 혼동하는 것",
                "$\\bigcup$(적어도 하나)과 $\\bigcap$(모두)의 양화사 방향을 반대로 쓰는 것",
                "무한 교집합에서 가장 작은 집합의 역할을 간과하는 것"
            ],
            "nextConnection": "이후 레슨에서는 집합의 순서쌍과 곱집합(데카르트 곱)으로 나아가, 집합 위의 관계와 함수의 기초를 배웁니다."
        }
    },
];
