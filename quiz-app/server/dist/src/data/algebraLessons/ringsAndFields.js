"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ringsAndFieldsLessons = void 0;
exports.ringsAndFieldsLessons = [
    {
        "id": 14,
        "title": "환 — 두 연산의 만남",
        "category": "환론",
        "level": "중급",
        "question": "군에 곱셈을 더하면 어떤 구조가 탄생하는가?",
        "concept": {
            "intro": "지금까지 군이라는 하나의 연산을 다루었습니다. 이번에는 두 개의 연산이 분배법칙으로 엮인 대수 구조, 환(ring)을 배웁니다.\n\n:::definition[환의 정의]\n집합 $R$과 두 이항연산 $+$, $\\cdot$에 대해, $(R, +, \\cdot)$이 **환(ring)**이 되려면:\n(1) $(R, +)$는 아벨군이다 (교환법칙, 결합법칙, 항등원 $0$, 역원 $-a$).\n(2) 곱셈 $\\cdot$은 결합법칙을 만족한다: $(a \\cdot b) \\cdot c = a \\cdot (b \\cdot c)$.\n(3) 분배법칙이 성립한다: $a(b + c) = ab + ac$, $(b + c)a = ba + ca$.\n:::\n\n:::definition[가환환과 단위원]\n곱셈이 교환법칙을 만족하는 환을 **가환환(commutative ring)**이라 한다. 곱셈의 항등원 $1$이 존재하는 환을 **단위원이 있는 환(unital ring)**이라 한다.\n:::\n\n$\\mathbb{Z}$는 가환환이면서 단위원도 있습니다. $M_n(\\mathbb{R})$(행렬환)은 비가환환의 대표적 예입니다.\n\n:::definition[영인자]\n$a \\neq 0$이고 $b \\neq 0$인데 $a \\cdot b = 0$이 되는 원소 $a$, $b$를 **영인자(zero divisor)**라 한다.\n:::\n\n:::note[참고]\n$\\mathbb{Z}/6\\mathbb{Z}$에서 $2 \\cdot 3 = 6 \\equiv 0 \\pmod{6}$이지만 $2 \\neq 0$이고 $3 \\neq 0$이므로, $2$와 $3$은 영인자이다.\n:::",
            "intuition": "군이 '한 가지 연산의 세계'라면, 환은 '두 가지 연산이 공존하는 세계'입니다. 우리가 일상에서 숫자를 다룰 때 덧셈과 곱셈을 자유롭게 섞어 쓰듯이, 환은 그 두 연산의 상호작용을 수학적으로 포착합니다.\n\n분배법칙 $a(b+c) = ab + ac$은 두 연산을 잇는 다리입니다. 이 다리 덕분에 우리는 곱셈 안에서 덧셈을 '풀어헤칠' 수 있고, 이것이 인수분해나 전개 같은 대수적 조작의 근본입니다. 분배법칙이 없으면 두 연산은 서로 아무 관계 없는 별개의 구조가 되어버립니다.\n\n영인자는 직관적으로 '0이 아닌 것끼리 곱해서 0이 되는 이상한 현상'입니다. 시계 산술을 떠올려보세요. 12시간 시계에서 $3 \\times 4 = 12 \\equiv 0$이 됩니다. 3도 4도 0이 아닌데 곱하면 0이 됩니다. 이런 현상은 '나눗셈을 할 수 없게 만드는' 원인이 됩니다.",
            "formula": "\\text{환 } (R, +, \\cdot): \\quad (R, +) \\text{는 아벨군}, \\quad (a \\cdot b) \\cdot c = a \\cdot (b \\cdot c), \\quad a(b+c) = ab + ac,\\; (b+c)a = ba + ca\n\\text{가환환:}\\ a \\cdot b = b \\cdot a \\quad \\forall\\, a, b \\in R\n\\text{단위원이 있는 환:}\\ \\exists\\, 1 \\in R,\\; 1 \\cdot a = a \\cdot 1 = a \\quad \\forall\\, a \\in R\n\\text{영인자:}\\ a \\neq 0,\\; b \\neq 0 \\text{인데 } a \\cdot b = 0",
            "summary": ":::note[핵심 요약]\n• 환 $(R, +, \\cdot)$: 아벨군 $(R, +)$ + 결합적 곱셈 + 분배법칙.\n• 가환환: 곱셈이 교환적. 단위원이 있는 환: 곱셈의 항등원 $1$ 존재.\n• 영인자: $a \\neq 0$, $b \\neq 0$이면서 $ab = 0$. 예: $\\mathbb{Z}/6\\mathbb{Z}$에서 $2 \\cdot 3 = 0$.\n:::"
        },
        "examples": [
            {
                "title": "$\\mathbb{Z}/6\\mathbb{Z}$에서 영인자 찾기",
                "problem": "$\\mathbb{Z}/6\\mathbb{Z} = \\{0, 1, 2, 3, 4, 5\\}$에서 모든 영인자 쌍을 찾으시오.",
                "steps": [
                    "$\\mathbb{Z}/6\\mathbb{Z}$에서 곱셈은 $\\pmod{6}$으로 계산한다.",
                    "$2 \\cdot 3 = 6 \\equiv 0 \\pmod{6}$이므로 $2$와 $3$은 영인자이다.",
                    "$3 \\cdot 4 = 12 \\equiv 0 \\pmod{6}$이므로 $3$과 $4$도 영인자 쌍이다.",
                    "$4 \\cdot 3 = 12 \\equiv 0$, $2 \\cdot 3 = 6 \\equiv 0$을 확인했다.",
                    "0이 아닌 원소 중 영인자가 아닌 것: $1 \\cdot k \\neq 0$ ($k \\neq 0$), $5 \\cdot k \\neq 0$ ($k \\neq 0$). 실제로 $5$는 $\\mathbb{Z}/6\\mathbb{Z}$에서 가역원($5 \\cdot 5 = 25 \\equiv 1$)이므로 영인자가 아니다.",
                    "영인자인 원소: $2, 3, 4$. 영인자가 아닌 0이 아닌 원소: $1, 5$."
                ],
                "answer": "영인자 쌍은 $(2, 3)$과 $(3, 4)$이며, 영인자인 원소는 $2, 3, 4$이다.",
                "lesson": "6의 약수(1, 6 제외)와 관련된 원소들이 영인자가 됩니다. 일반적으로 $\\mathbb{Z}/n\\mathbb{Z}$에서 $\\gcd(a, n) > 1$인 0이 아닌 원소 $a$가 영인자입니다."
            },
            {
                "title": "[기본] 분배법칙을 이용한 계산",
                "problem": "$\\mathbb{Z}/5\\mathbb{Z}$에서 $3 \\cdot (2 + 4)$를 분배법칙으로 계산하고, 직접 계산한 결과와 비교하시오.",
                "steps": [
                    "직접 계산: $2 + 4 = 6 \\equiv 1 \\pmod{5}$이므로 $3 \\cdot 1 = 3$.",
                    "분배법칙: $3 \\cdot (2 + 4) = 3 \\cdot 2 + 3 \\cdot 4 = 6 + 12 \\equiv 1 + 2 = 3 \\pmod{5}$.",
                    "두 결과가 $3$으로 일치. \\checkmark",
                    "분배법칙이 $\\mathbb{Z}/n\\mathbb{Z}$에서도 성립함을 확인했습니다."
                ],
                "answer": "$3 \\cdot (2 + 4) = 3 = 3 \\cdot 2 + 3 \\cdot 4$. 분배법칙 확인.",
                "lesson": "분배법칙은 두 연산을 연결하는 다리입니다. 곱셈 안에서 덧셈을 '풀어헤치는' 도구로, 인수분해와 전개의 근본 원리입니다."
            },
            {
                "title": "[응용] 행렬환의 비가환성 확인하기",
                "problem": "$M_2(\\mathbb{R})$에서 $A = \\begin{pmatrix} 0 & 1 \\\\ 0 & 0 \\end{pmatrix}$, $B = \\begin{pmatrix} 0 & 0 \\\\ 1 & 0 \\end{pmatrix}$에 대해 $AB \\neq BA$임을 보이시오.",
                "steps": [
                    "$AB = \\begin{pmatrix} 0 & 1 \\\\ 0 & 0 \\end{pmatrix} \\begin{pmatrix} 0 & 0 \\\\ 1 & 0 \\end{pmatrix} = \\begin{pmatrix} 1 & 0 \\\\ 0 & 0 \\end{pmatrix}$.",
                    "$BA = \\begin{pmatrix} 0 & 0 \\\\ 1 & 0 \\end{pmatrix} \\begin{pmatrix} 0 & 1 \\\\ 0 & 0 \\end{pmatrix} = \\begin{pmatrix} 0 & 0 \\\\ 0 & 1 \\end{pmatrix}$.",
                    "$AB = \\begin{pmatrix} 1 & 0 \\\\ 0 & 0 \\end{pmatrix} \\neq \\begin{pmatrix} 0 & 0 \\\\ 0 & 1 \\end{pmatrix} = BA$.",
                    "$M_2(\\mathbb{R})$는 비가환환입니다."
                ],
                "answer": "$AB \\neq BA$이므로 $M_2(\\mathbb{R})$는 비가환환이다.",
                "lesson": "행렬환은 비가환환의 대표 예입니다. 환의 기본 정의는 곱셈의 교환법칙을 요구하지 않으며, 비가환환은 대수학과 물리학에서 중요한 역할을 합니다."
            },
            {
                "title": "[응용] $a \\cdot 0 = 0$의 증명",
                "problem": "환 $(R, +, \\cdot)$에서 임의의 원소 $a$에 대해 $a \\cdot 0 = 0$임을 분배법칙을 이용하여 증명하시오.",
                "steps": [
                    "$0 = 0 + 0$ (덧셈의 항등원 성질).",
                    "$a \\cdot 0 = a \\cdot (0 + 0) = a \\cdot 0 + a \\cdot 0$ (분배법칙).",
                    "양변에서 $a \\cdot 0$의 덧셈 역원 $-(a \\cdot 0)$을 더합니다.",
                    "$0 = a \\cdot 0$. $\\blacksquare$"
                ],
                "answer": "$a \\cdot 0 = a \\cdot (0 + 0) = a \\cdot 0 + a \\cdot 0$이므로, 소거하면 $a \\cdot 0 = 0$.",
                "lesson": "이 증명은 환의 공리(분배법칙 + 덧셈 아벨군)만으로 $a \\cdot 0 = 0$을 보여줍니다. 곱셈의 교환법칙이나 단위원의 존재는 필요하지 않습니다."
            },
            {
                "title": "[심화] $\\mathbb{Z}/12\\mathbb{Z}$에서 가역원과 영인자 분류하기",
                "problem": "$\\mathbb{Z}/12\\mathbb{Z}$에서 가역원(unit)과 영인자를 모두 찾으시오.",
                "steps": [
                    "가역원: $\\gcd(a, 12) = 1$인 원소. $\\{1, 5, 7, 11\\}$.",
                    "확인: $1 \\cdot 1 = 1$, $5 \\cdot 5 = 25 \\equiv 1$, $7 \\cdot 7 = 49 \\equiv 1$, $11 \\cdot 11 = 121 \\equiv 1$ \\checkmark.",
                    "영인자: $\\gcd(a, 12) > 1$인 $0$이 아닌 원소. $\\{2, 3, 4, 6, 8, 9, 10\\}$.",
                    "확인: $2 \\cdot 6 = 12 \\equiv 0$, $3 \\cdot 4 = 12 \\equiv 0$, $4 \\cdot 3 = 12 \\equiv 0$ 등.",
                    "핵심 관계: $\\mathbb{Z}/n\\mathbb{Z}$에서 $0$이 아닌 원소는 가역원이거나 영인자 중 정확히 하나입니다."
                ],
                "answer": "가역원: $\\{1, 5, 7, 11\\}$. 영인자: $\\{2, 3, 4, 6, 8, 9, 10\\}$. $0$이 아닌 원소는 가역원이거나 영인자이다.",
                "lesson": "$\\mathbb{Z}/n\\mathbb{Z}$에서 원소 $a$의 성질은 $\\gcd(a, n)$으로 완전히 결정됩니다. $\\gcd(a, n) = 1$이면 가역원, $\\gcd(a, n) > 1$이면 영인자. 이 분류는 정수론과 환론의 핵심 연결고리입니다."
            }
        ],
        "problems": [
            {
                "id": "14-1",
                "type": "choice",
                "difficulty": 1,
                "question": "다음 중 환(ring)의 정의에 반드시 포함되는 조건이 아닌 것은?",
                "choices": [
                    "$(R, +)$는 아벨군이다",
                    "곱셈은 결합법칙을 만족한다",
                    "분배법칙이 성립한다",
                    "곱셈은 교환법칙을 만족한다"
                ],
                "answer": "곱셈은 교환법칙을 만족한다",
                "hints": [
                    "환의 기본 정의 세 가지 조건을 떠올려보세요: 아벨군(덧셈), 결합법칙(곱셈), 분배법칙.",
                    "곱셈의 교환법칙은 '가환환'의 추가 조건입니다. 행렬환은 곱셈이 비가환이지만 환입니다.",
                    "$M_n(\\mathbb{R})$에서 $AB \\neq BA$인 경우가 많지만, 행렬환은 환의 모든 공리를 만족합니다."
                ],
                "explanation": "환의 기본 정의는 세 가지입니다: (1) $(R, +)$가 아벨군, (2) 곱셈이 결합적, (3) 분배법칙 성립. 곱셈의 교환법칙은 기본 정의에 포함되지 않으며, 이것이 추가로 성립하는 환을 특별히 '가환환(commutative ring)'이라 부릅니다. $n \\times n$ 행렬환 $M_n(\\mathbb{R})$은 곱셈이 비가환이지만 환의 세 공리를 모두 만족하는 대표적인 예입니다.",
                "wrongAnalysis": "군론에서 아벨군의 교환법칙을 배웠기 때문에 환에서도 곱셈의 교환법칙이 기본 공리라고 착각하기 쉽습니다. 하지만 환에서 교환법칙이 요구되는 것은 덧셈뿐이며, 곱셈의 교환법칙은 선택적 조건입니다."
            },
            {
                "id": "14-2",
                "type": "choice",
                "difficulty": 2,
                "question": "$\\mathbb{Z}/8\\mathbb{Z}$에서 $4 \\cdot 6$의 값은 무엇이며, 이로부터 알 수 있는 사실은?",
                "choices": [
                    "$4 \\cdot 6 = 0$이므로 $4$와 $6$은 영인자이다",
                    "$4 \\cdot 6 = 2$이므로 영인자가 아니다",
                    "$4 \\cdot 6 = 4$이므로 $6$은 항등원이다",
                    "$4 \\cdot 6 = 24$이므로 환이 아니다"
                ],
                "answer": "$4 \\cdot 6 = 0$이므로 $4$와 $6$은 영인자이다",
                "hints": [
                    "$4 \\times 6 = 24$를 먼저 계산하세요.",
                    "$24$를 $8$로 나눈 나머지를 구하세요: $24 = 8 \\times 3 + 0$.",
                    "$24 \\equiv 0 \\pmod{8}$이므로 $4 \\cdot 6 = 0$입니다. $4 \\neq 0$이고 $6 \\neq 0$이므로 이들은 영인자입니다."
                ],
                "explanation": "$\\mathbb{Z}/8\\mathbb{Z}$에서 $4 \\cdot 6 = 24 \\equiv 0 \\pmod{8}$입니다. $4 \\neq 0$이고 $6 \\neq 0$인데 곱이 $0$이므로, $4$와 $6$은 영인자입니다. 이것은 $\\gcd(4, 8) = 4 > 1$이고 $\\gcd(6, 8) = 2 > 1$이라는 사실과 일치합니다.",
                "wrongAnalysis": "$4 \\times 6 = 24$까지 계산한 후 $\\pmod{8}$을 적용하지 않고 $24$ 자체를 답으로 쓰면 안 됩니다. $\\mathbb{Z}/n\\mathbb{Z}$에서의 모든 연산은 $n$으로 나눈 나머지로 계산해야 합니다."
            },
            {
                "id": "14-3",
                "type": "text",
                "difficulty": 3,
                "question": "환 $(R, +, \\cdot)$에서 임의의 원소 $a$에 대해 $a \\cdot 0 = 0$임을 분배법칙을 이용하여 증명하시오. (핵심 등식을 서술하시오)",
                "answer": "a·0 = a·(0+0) = a·0 + a·0이므로 양변에서 a·0을 빼면 0 = a·0",
                "hints": [
                    "$0$은 덧셈의 항등원이므로 $0 = 0 + 0$입니다.",
                    "분배법칙을 사용하면 $a \\cdot 0 = a \\cdot (0 + 0) = a \\cdot 0 + a \\cdot 0$입니다.",
                    "$(R, +)$는 아벨군이므로 모든 원소에 덧셈 역원이 존재합니다. 양변에서 $a \\cdot 0$의 덧셈 역원을 더하세요."
                ],
                "explanation": "$0 = 0 + 0$이므로 $a \\cdot 0 = a \\cdot (0 + 0) = a \\cdot 0 + a \\cdot 0$ (분배법칙). 양변에서 $a \\cdot 0$의 덧셈 역원 $-(a \\cdot 0)$을 더하면 $0 = a \\cdot 0$. 이것은 환의 공리(분배법칙 + 아벨군)만으로 증명되는 결과이며, 곱셈의 교환법칙이나 단위원의 존재는 필요하지 않습니다.",
                "wrongAnalysis": "'$0$을 곱하면 당연히 $0$이다'라고 직관적으로만 답하면 증명이 아닙니다. 반드시 분배법칙과 덧셈 역원의 존재를 사용하는 논증이 필요합니다. 이 증명은 환론에서 가장 기본적이고 중요한 논증 중 하나입니다."
            },
            {
                "id": "14-4",
                "type": "choice",
                "difficulty": 1,
                "question": "다음 중 환(ring)의 예가 아닌 것은?",
                "choices": [
                    "$\\mathbb{Z}$ (정수)",
                    "$\\mathbb{Z}/6\\mathbb{Z}$",
                    "$\\mathbb{N}$ (자연수, 덧셈과 곱셈)",
                    "$\\mathbb{Q}$ (유리수)"
                ],
                "answer": "$\\mathbb{N}$ (자연수, 덧셈과 곱셈)",
                "hints": [
                    "환이 되려면 $(R, +)$가 아벨군이어야 합니다.",
                    "자연수에서 $3$의 덧셈 역원 $-3$이 자연수인가요?"
                ],
                "explanation": "$(\\mathbb{N}, +)$는 아벨군이 아닙니다. 자연수에는 덧셈의 역원이 존재하지 않습니다($3$의 역원 $-3 \\notin \\mathbb{N}$). 환이 되려면 덧셈에 대해 아벨군이어야 하므로 $\\mathbb{N}$은 환이 아닙니다. $\\mathbb{Z}$, $\\mathbb{Z}/6\\mathbb{Z}$, $\\mathbb{Q}$는 모두 환입니다.",
                "wrongAnalysis": "$\\mathbb{N}$도 닫혀있고 결합법칙이 성립하므로 환이라고 착각할 수 있지만, 환의 첫 번째 조건인 '$(R, +)$가 아벨군'을 만족하지 못합니다."
            },
            {
                "id": "14-5",
                "type": "choice",
                "difficulty": 2,
                "question": "$\\mathbb{Z}/6\\mathbb{Z}$에서 $3 \\cdot 4$의 값과 이것이 의미하는 바는?",
                "choices": [
                    "$3 \\cdot 4 = 12$이므로 $\\mathbb{Z}/6\\mathbb{Z}$는 환이 아니다",
                    "$3 \\cdot 4 = 0$이므로 $3$과 $4$는 영인자이다",
                    "$3 \\cdot 4 = 2$이므로 영인자가 아니다",
                    "$3 \\cdot 4 = 6$이므로 $4$는 $3$의 역원이다"
                ],
                "answer": "$3 \\cdot 4 = 0$이므로 $3$과 $4$는 영인자이다",
                "hints": [
                    "$3 \\times 4 = 12$이고 $12 \\mod 6 = 0$입니다.",
                    "$3 \\neq 0$이고 $4 \\neq 0$인데 곱이 $0$이면 영인자입니다."
                ],
                "explanation": "$3 \\cdot 4 = 12 \\equiv 0 \\pmod{6}$입니다. $3 \\neq 0$이고 $4 \\neq 0$이지만 곱이 $0$이므로, $3$과 $4$는 영인자입니다. 이것은 $\\gcd(3, 6) = 3 > 1$이고 $\\gcd(4, 6) = 2 > 1$이라는 사실과 일치합니다.",
                "wrongAnalysis": "$12$를 그대로 답으로 쓰면 안 됩니다. $\\mathbb{Z}/6\\mathbb{Z}$의 원소는 $\\{0,1,2,3,4,5\\}$이므로, 반드시 $\\mod 6$을 적용해야 합니다."
            }
        ],
        "summary": {
            "keyPoints": [
                "환 $(R, +, \\cdot)$은 아벨군 $(R, +)$에 결합적 곱셈과 분배법칙을 추가한 대수 구조이다.",
                "가환환은 곱셈이 교환법칙을 만족하고, 단위원이 있는 환은 곱셈의 항등원 $1$이 존재한다.",
                "대표적인 환: $\\mathbb{Z}$(가환, 단위원 있음), $M_n(\\mathbb{R})$(비가환, 단위원 있음), $\\mathbb{Z}/n\\mathbb{Z}$(가환, 단위원 있음).",
                "영인자란 $a \\neq 0$, $b \\neq 0$이면서 $ab = 0$인 원소이다. $\\mathbb{Z}/6\\mathbb{Z}$의 $2 \\cdot 3 = 0$이 대표적 예이다."
            ],
            "formulas": [
                "(R, +, \\cdot) \\text{ 환}: (R,+) \\text{ 아벨군},\\; (ab)c = a(bc),\\; a(b+c)=ab+ac",
                "\\text{가환환: } ab = ba \\quad \\forall a,b \\in R",
                "\\text{단위원: } \\exists 1 \\in R,\\; 1a = a1 = a \\quad \\forall a \\in R",
                "\\text{영인자: } a \\neq 0,\\; b \\neq 0,\\; ab = 0"
            ],
            "commonMistakes": [
                "곱셈의 교환법칙이 환의 기본 공리라고 착각하는 것 (교환법칙은 가환환의 추가 조건)",
                "영인자의 정의에서 $a = 0$ 또는 $b = 0$인 경우를 포함하는 것 (영인자는 반드시 $a \\neq 0$, $b \\neq 0$이어야 함)",
                "$a \\cdot 0 = 0$이 공리라고 생각하는 것 (이것은 분배법칙에서 유도되는 정리임)"
            ],
            "nextConnection": "환에서 영인자가 없으면 어떤 좋은 성질이 생길까요? 다음 레슨에서는 영인자가 없는 가환환인 '정역(integral domain)'과, 환의 부분구조인 '이데알(ideal)'을 배웁니다."
        }
    },
    {
        "id": 15,
        "title": "정역과 이데알",
        "category": "환론",
        "level": "심화",
        "question": "영인자가 없는 환은 왜 특별하고, 이데알은 환에서 어떤 역할을 하는가?",
        "concept": {
            "intro": "이번에는 영인자가 없는 환, 즉 정역과 환론의 핵심 도구인 이데알을 배웁니다.\n\n:::definition[정역의 정의]\n**정역(integral domain)**은 가환환이면서 단위원 $1 \\neq 0$이 있고, 영인자가 없는 환이다. 즉, $a \\cdot b = 0$이면 반드시 $a = 0$이거나 $b = 0$이다.\n:::\n\n$\\mathbb{Z}$는 가장 친숙한 정역입니다. $\\mathbb{Z}/p\\mathbb{Z}$ ($p$가 소수)도 정역입니다. $p$가 소수이면 $p \\mid ab$일 때 $p \\mid a$ 또는 $p \\mid b$이므로 영인자가 없습니다.\n\n:::definition[이데알의 정의]\n환 $R$의 부분집합 $I$가 **이데알(ideal)**이 되려면:\n(1) $I$는 $(R, +)$의 부분군이다: $a, b \\in I \\Rightarrow a - b \\in I$.\n(2) 흡수 성질: $r \\in R$, $i \\in I \\Rightarrow ri \\in I$이고 $ir \\in I$.\n:::\n\n:::definition[주이데알]\n가환환 $R$에서 원소 $a$로 생성된 **주이데알(principal ideal)**은 $(a) = \\{r \\cdot a \\mid r \\in R\\}$이다. $\\mathbb{Z}$의 모든 이데알은 주이데알이다 (PID).\n:::\n\n:::definition[잉여환]\n이데알 $I$가 있으면 **잉여환** $R/I = \\{a + I \\mid a \\in R\\}$을 만들 수 있다. 연산: $(a + I) + (b + I) = (a + b) + I$, $(a + I)(b + I) = ab + I$.\n:::",
            "intuition": "정역은 '나눗셈의 논리가 건전한 환'입니다. $ab = 0$이면 $a = 0$이거나 $b = 0$이라는 것은, 곱셈에서 '아무것도 아닌 것'이 나오려면 적어도 하나가 '아무것도 아닌 것'이어야 한다는 뜻입니다. 이 성질 덕분에 방정식의 양변을 0이 아닌 것으로 나누는 것이 합법적이 됩니다.\n\n이데알은 군론의 정규부분군과 같은 역할을 합니다. 정규부분군이 잉여군을 만들었듯이, 이데알은 잉여환을 만듭니다. 이데알의 '흡수 성질'($r \\cdot i \\in I$)은 잉여환에서 곱셈이 잘 정의되기 위해 반드시 필요한 조건입니다.\n\n주이데알을 직관적으로 이해하려면: $(3) = 3\\mathbb{Z}$는 '3의 배수 세계'입니다. 3의 배수에 어떤 정수를 곱해도 3의 배수이고, 3의 배수끼리 더하거나 빼도 3의 배수입니다. 잉여환 $\\mathbb{Z}/(3)$은 '3의 배수를 0으로 취급한 세계', 즉 $\\mathbb{Z}/3\\mathbb{Z}$와 같습니다.",
            "formula": "\\text{정역(Integral Domain):}\\ R \\text{는 가환환},\\; 1 \\neq 0,\\; ab = 0 \\Rightarrow a = 0 \\text{ or } b = 0\n\\text{이데알 } I \\subseteq R:\\ (1)\\; a, b \\in I \\Rightarrow a - b \\in I \\quad (2)\\; r \\in R,\\; i \\in I \\Rightarrow ri \\in I,\\; ir \\in I\n\\text{주이데알:}\\ (a) = \\{ra \\mid r \\in R\\}\n\\text{잉여환:}\\ R/I = \\{a + I \\mid a \\in R\\},\\; (a+I)+(b+I) = (a+b)+I,\\; (a+I)(b+I) = (ab)+I",
            "summary": ":::note[핵심 요약]\n• 정역: 가환환 + 단위원 + 영인자 없음. 소거법칙이 성립한다.\n• 이데알: $(R, +)$의 부분군 + 곱셈 흡수 성질. 잉여환 $R/I$를 만드는 핵심 재료.\n• 주이데알 $(a) = \\{ra \\mid r \\in R\\}$. $\\mathbb{Z}$는 PID이다.\n:::"
        },
        "examples": [
            {
                "title": "$\\mathbb{Z}$에서 이데알 $(6)$과 잉여환 $\\mathbb{Z}/(6)$",
                "problem": "$\\mathbb{Z}$에서 이데알 $(6)$을 구체적으로 서술하고, 잉여환 $\\mathbb{Z}/(6)$의 원소와 연산을 설명하시오.",
                "steps": [
                    "$(6) = 6\\mathbb{Z} = \\{\\ldots, -12, -6, 0, 6, 12, \\ldots\\}$, 즉 $6$의 배수 전체의 집합이다.",
                    "이것이 이데알인지 확인: (1) $6a - 6b = 6(a-b) \\in 6\\mathbb{Z}$ ✓, (2) $r \\cdot 6a = 6(ra) \\in 6\\mathbb{Z}$ ✓.",
                    "잉여환 $\\mathbb{Z}/(6) = \\{0 + (6),\\; 1 + (6),\\; 2 + (6),\\; 3 + (6),\\; 4 + (6),\\; 5 + (6)\\}$, 이것은 $\\mathbb{Z}/6\\mathbb{Z} = \\{0, 1, 2, 3, 4, 5\\}$와 같다.",
                    "덧셈 예시: $(2 + (6)) + (5 + (6)) = 7 + (6) = 1 + (6)$.",
                    "곱셈 예시: $(2 + (6)) \\cdot (4 + (6)) = 8 + (6) = 2 + (6)$.",
                    "이 잉여환은 정역이 아니다: $(2 + (6))(3 + (6)) = 6 + (6) = 0 + (6)$이므로 영인자가 존재한다."
                ],
                "answer": "$(6) = 6\\mathbb{Z}$이고, $\\mathbb{Z}/(6) \\cong \\mathbb{Z}/6\\mathbb{Z} = \\{0, 1, 2, 3, 4, 5\\}$이다. 영인자 $2 \\cdot 3 = 0$이 존재하므로 정역이 아니다.",
                "lesson": "잉여환 $\\mathbb{Z}/(n)$과 $\\mathbb{Z}/n\\mathbb{Z}$는 같은 것입니다. $n$이 소수이면 정역이 되고, 합성수이면 영인자가 존재하여 정역이 되지 않습니다."
            },
            {
                "title": "[기본] 이데알의 정의 확인하기",
                "problem": "$\\mathbb{Z}$에서 $I = (4) = 4\\mathbb{Z}$가 이데알인지 확인하시오.",
                "steps": [
                    "이데알 조건 1: $a, b \\in I$이면 $a - b \\in I$.",
                    "$a = 4m$, $b = 4n$이면 $a - b = 4(m - n) \\in 4\\mathbb{Z}$. \\checkmark",
                    "이데알 조건 2: $r \\in \\mathbb{Z}$, $i \\in I$이면 $ri \\in I$.",
                    "$r \\cdot 4m = 4(rm) \\in 4\\mathbb{Z}$. \\checkmark",
                    "두 조건을 모두 만족하므로 $4\\mathbb{Z}$는 $\\mathbb{Z}$의 이데알입니다."
                ],
                "answer": "$4\\mathbb{Z}$는 $\\mathbb{Z}$의 이데알이다. 덧셈에 대해 부분군이고, 정수와의 곱에 대해 닫혀 있다.",
                "lesson": "이데알은 '곱셈에 대한 흡수 성질'을 가집니다. 4의 배수에 어떤 정수를 곱해도 4의 배수가 됩니다. 이것이 부분환과 이데알의 핵심 차이입니다."
            },
            {
                "title": "[응용] $\\mathbb{Z}/4\\mathbb{Z}$가 정역이 아님을 보이기",
                "problem": "$\\mathbb{Z}/4\\mathbb{Z}$가 정역이 아닌 이유를 구체적으로 보이시오.",
                "steps": [
                    "$\\mathbb{Z}/4\\mathbb{Z} = \\{0, 1, 2, 3\\}$에서 영인자를 찾습니다.",
                    "$2 \\cdot 2 = 4 \\equiv 0 \\pmod{4}$.",
                    "$2 \\neq 0$인데 $2 \\cdot 2 = 0$이므로, $2$는 영인자입니다.",
                    "$4 = 2^2$은 소수가 아니므로, 영인자가 존재합니다.",
                    "따라서 $\\mathbb{Z}/4\\mathbb{Z}$는 정역이 아닙니다."
                ],
                "answer": "$\\mathbb{Z}/4\\mathbb{Z}$는 정역이 아니다. $2 \\cdot 2 = 0$이므로 $2$가 영인자이다.",
                "lesson": "$n$이 합성수이면 $\\mathbb{Z}/n\\mathbb{Z}$에는 영인자가 존재하여 정역이 되지 않습니다. $n = p^2$ 같은 소수의 거듭제곱도 마찬가지입니다."
            },
            {
                "title": "[응용] 잉여환의 구조 분석: $\\mathbb{Z}/(5)$ vs $\\mathbb{Z}/(6)$",
                "problem": "$\\mathbb{Z}/(5)$와 $\\mathbb{Z}/(6)$의 대수적 구조 차이를 비교하시오.",
                "steps": [
                    "$\\mathbb{Z}/(5) \\cong \\mathbb{Z}/5\\mathbb{Z}$: $5$는 소수이므로 정역이며, 사실 체이다.",
                    "체인 이유: 모든 $0$이 아닌 원소가 역원을 가진다. $2 \\cdot 3 = 6 \\equiv 1$, $4 \\cdot 4 = 16 \\equiv 1$.",
                    "$\\mathbb{Z}/(6) \\cong \\mathbb{Z}/6\\mathbb{Z}$: $6 = 2 \\times 3$은 합성수이므로 영인자 존재.",
                    "$2 \\cdot 3 = 6 \\equiv 0$이므로 $2$와 $3$은 영인자.",
                    "핵심 차이: $5$ 소수 $\\to$ 체, $6$ 합성수 $\\to$ 영인자 존재, 정역 아님."
                ],
                "answer": "$\\mathbb{Z}/(5)$는 체(정역이자 모든 원소에 역원 존재), $\\mathbb{Z}/(6)$는 영인자가 있어 정역이 아니다.",
                "lesson": "잉여환의 구조는 $n$의 소인수분해에 의해 완전히 결정됩니다. 소수이면 체, 합성수이면 영인자가 존재합니다. 이것이 정수론과 환론의 깊은 연결입니다."
            },
            {
                "title": "[심화] 극대이데알과 소이데알의 관계",
                "problem": "$\\mathbb{Z}$에서 이데알 $(p)$ ($p$는 소수)가 극대이데알임을 보이고, $\\mathbb{Z}/(p)$가 체임을 설명하시오.",
                "steps": [
                    "극대이데알: $I$를 포함하는 이데알이 $I$와 $R$뿐인 이데알.",
                    "$(p) \\subsetneq J \\subseteq \\mathbb{Z}$인 이데알 $J$를 가정합니다.",
                    "$\\mathbb{Z}$는 PID이므로 $J = (d)$, 어떤 $d \\mid p$.",
                    "$p$는 소수이므로 $d = 1$ 또는 $d = p$.",
                    "$J \\neq (p)$이면 $d = 1$이므로 $J = (1) = \\mathbb{Z}$.",
                    "따라서 $(p)$는 극대이데알이고, 정리에 의해 $\\mathbb{Z}/(p)$는 체입니다. $\\blacksquare$"
                ],
                "answer": "$(p)$는 $\\mathbb{Z}$의 극대이데알이다. 극대이데알로 나눈 잉여환은 체이므로 $\\mathbb{Z}/(p) = \\mathbb{Z}/p\\mathbb{Z}$는 체이다.",
                "lesson": "'극대이데알 $\\iff$ 잉여환이 체'라는 정리는 환론의 가장 중요한 결과 중 하나입니다. 소수와 극대이데알의 대응은 대수적 정수론의 출발점입니다."
            }
        ],
        "problems": [
            {
                "id": "15-1",
                "type": "choice",
                "difficulty": 1,
                "question": "다음 중 정역(integral domain)인 것은?",
                "choices": [
                    "$\\mathbb{Z}/4\\mathbb{Z}$",
                    "$\\mathbb{Z}/7\\mathbb{Z}$",
                    "$\\mathbb{Z}/9\\mathbb{Z}$",
                    "$\\mathbb{Z}/15\\mathbb{Z}$"
                ],
                "answer": "$\\mathbb{Z}/7\\mathbb{Z}$",
                "hints": [
                    "정역은 영인자가 없는 가환환(단위원 포함)입니다.",
                    "$\\mathbb{Z}/n\\mathbb{Z}$가 정역이 되려면 $n$이 어떤 수여야 할까요? 합성수이면 영인자가 생깁니다.",
                    "$7$은 소수이므로 $\\mathbb{Z}/7\\mathbb{Z}$에서 $ab \\equiv 0 \\pmod{7}$이면 $7 \\mid a$ 또는 $7 \\mid b$입니다."
                ],
                "explanation": "$\\mathbb{Z}/n\\mathbb{Z}$가 정역이 되려면 $n$이 소수여야 합니다. $4 = 2 \\times 2$ (합성수: $2 \\cdot 2 = 0$), $9 = 3 \\times 3$ (합성수: $3 \\cdot 3 = 0$), $15 = 3 \\times 5$ (합성수: $3 \\cdot 5 = 0$)는 모두 영인자가 존재합니다. $7$은 소수이므로 $\\mathbb{Z}/7\\mathbb{Z}$는 정역이며, 사실 체(field)이기도 합니다.",
                "wrongAnalysis": "$\\mathbb{Z}/4\\mathbb{Z}$에서 $2 \\cdot 2 = 4 \\equiv 0$이므로 $2$는 영인자입니다. $4$가 소수가 아니기 때문입니다. $n$이 소수인지 합성수인지가 정역 여부를 결정합니다."
            },
            {
                "id": "15-2",
                "type": "choice",
                "difficulty": 2,
                "question": "$\\mathbb{Z}$에서 이데알 $(2)$와 $(3)$의 합 $(2) + (3) = \\{2a + 3b \\mid a, b \\in \\mathbb{Z}\\}$는 어떤 이데알인가?",
                "choices": [
                    "$(6) = 6\\mathbb{Z}$",
                    "$(1) = \\mathbb{Z}$",
                    "$(5) = 5\\mathbb{Z}$",
                    "$(2) \\cap (3) = 6\\mathbb{Z}$"
                ],
                "answer": "$(1) = \\mathbb{Z}$",
                "hints": [
                    "$(2) + (3)$은 $2a + 3b$ 형태의 모든 정수입니다. 베주 항등식(Bezout's identity)을 떠올려보세요.",
                    "$\\gcd(2, 3) = 1$이고, $2 \\cdot 2 + 3 \\cdot (-1) = 1$이므로 $1 \\in (2) + (3)$입니다.",
                    "$1 \\in (2) + (3)$이면 모든 정수 $n = n \\cdot 1 \\in (2) + (3)$이므로 $(2) + (3) = \\mathbb{Z} = (1)$입니다."
                ],
                "explanation": "$\\gcd(2, 3) = 1$이므로 베주 항등식에 의해 $2a + 3b = 1$인 정수 $a, b$가 존재합니다 (예: $a = 2, b = -1$). 따라서 $1 \\in (2) + (3)$이고, $1$이 포함된 이데알은 전체 환 $\\mathbb{Z}$입니다. 일반적으로 $\\mathbb{Z}$에서 $(m) + (n) = (\\gcd(m, n))$이 성립합니다.",
                "wrongAnalysis": "$(2) + (3) = (6)$이라고 답하는 경우가 많은데, 이것은 이데알의 '합'이 아니라 '곱'이나 '교집합'과 혼동한 것입니다. $(2) \\cap (3) = (6)$이고 $(2)(3) = (6)$이지만, $(2) + (3) = (1) = \\mathbb{Z}$입니다."
            },
            {
                "id": "15-3",
                "type": "text",
                "difficulty": 3,
                "question": "$R$이 정역이고 $a, b \\in R$에서 $ab = ac$이고 $a \\neq 0$이면, $b = c$임을 증명하시오. (핵심 논증을 서술하시오)",
                "answer": "ab = ac이면 ab - ac = a(b-c) = 0이고, a ≠ 0이고 정역이므로 b - c = 0, 즉 b = c",
                "hints": [
                    "$ab = ac$의 양변에서 $ac$를 빼면 $ab - ac = 0$입니다.",
                    "분배법칙을 사용하면 $a(b - c) = 0$입니다.",
                    "정역의 정의를 사용하세요: $a \\neq 0$이고 $a(b-c) = 0$이면 $b - c = 0$, 즉 $b = c$입니다."
                ],
                "explanation": "$ab = ac$에서 $ab - ac = 0$, 즉 $a(b - c) = 0$. $R$이 정역이므로 영인자가 없습니다. $a \\neq 0$이므로 $b - c = 0$, 따라서 $b = c$. 이것이 소거법칙(cancellation law)이며, 정역에서 자유롭게 '양변을 0이 아닌 원소로 나눌 수 있는' 이유입니다. 영인자가 있는 환에서는 이 논증이 실패합니다.",
                "wrongAnalysis": "양변을 $a$로 '나누어' $b = c$를 얻으려 하면, 나눗셈(역원)이 존재하는지 보장되지 않습니다. 정역에서는 곱셈 역원이 반드시 있는 것이 아닙니다(체에서만 보장). 소거법칙은 역원 없이 영인자 부재만으로 증명됩니다."
            },
            {
                "id": "15-4",
                "type": "choice",
                "difficulty": 1,
                "question": "$\\mathbb{Z}$에서 이데알 $(5)$의 원소가 아닌 것은?",
                "choices": [
                    "$0$",
                    "$10$",
                    "$-15$",
                    "$7$"
                ],
                "answer": "$7$",
                "hints": [
                    "$(5) = 5\\mathbb{Z} = \\{\\ldots, -10, -5, 0, 5, 10, 15, \\ldots\\}$, 즉 $5$의 배수 전체입니다.",
                    "$7$은 $5$의 배수인가요?"
                ],
                "explanation": "$(5) = 5\\mathbb{Z}$는 $5$의 배수 전체의 집합입니다. $0 = 5 \\times 0$, $10 = 5 \\times 2$, $-15 = 5 \\times (-3)$은 모두 $5$의 배수이므로 $(5)$에 속합니다. $7$은 $5$의 배수가 아니므로 $(5)$에 속하지 않습니다.",
                "wrongAnalysis": "$0$이 이데알에 속하지 않는다고 생각하면 안 됩니다. $0 = 5 \\times 0$이므로 $0$은 모든 이데알에 속합니다. 이데알은 덧셈 부분군이므로 항등원 $0$을 반드시 포함합니다."
            },
            {
                "id": "15-5",
                "type": "text",
                "difficulty": 2,
                "question": "$\\mathbb{Z}/4\\mathbb{Z}$에서 $2 \\cdot 2$의 값을 구하고, 이것이 정역이 아님을 보이시오. (핵심 계산과 결론을 서술하시오)",
                "answer": "$2 \\cdot 2 = 4 \\equiv 0 \\pmod{4}$이므로 $2$는 영인자이고, $\\mathbb{Z}/4\\mathbb{Z}$는 정역이 아니다",
                "hints": [
                    "$2 \\times 2 = 4$이고 $4 \\mod 4 = 0$입니다.",
                    "$2 \\neq 0$인데 $2 \\cdot 2 = 0$이므로 $2$는 영인자입니다."
                ],
                "explanation": "$\\mathbb{Z}/4\\mathbb{Z}$에서 $2 \\cdot 2 = 4 \\equiv 0 \\pmod{4}$입니다. $2 \\neq 0$인데 $2 \\cdot 2 = 0$이므로 $2$는 영인자입니다. 정역은 영인자가 없는 환이므로, $\\mathbb{Z}/4\\mathbb{Z}$는 정역이 아닙니다. $4$가 소수가 아닌 합성수($4 = 2^2$)이기 때문입니다.",
                "wrongAnalysis": "$4$는 $2^2$이므로 $\\mathbb{Z}/4\\mathbb{Z}$에서 $2$가 영인자가 됩니다. $n$이 소수가 아니면 $\\mathbb{Z}/n\\mathbb{Z}$는 정역이 아닙니다."
            }
        ],
        "summary": {
            "keyPoints": [
                "정역은 가환환 + 단위원($1 \\neq 0$) + 영인자 없음. $\\mathbb{Z}$와 $\\mathbb{Z}/p\\mathbb{Z}$($p$ 소수)가 대표적이다.",
                "정역에서는 소거법칙이 성립한다: $a \\neq 0$이고 $ab = ac$이면 $b = c$.",
                "이데알은 덧셈에 대한 부분군이면서 환 원소와의 곱에 닫힌 집합이다. 정규부분군의 환 버전이다.",
                "주이데알 $(a) = \\{ra \\mid r \\in R\\}$. $\\mathbb{Z}$는 PID(모든 이데알이 주이데알)이다.",
                "잉여환 $R/I$에서 $(a+I) + (b+I) = (a+b)+I$, $(a+I)(b+I) = (ab)+I$."
            ],
            "formulas": [
                "\\text{정역: } ab = 0 \\Rightarrow a = 0 \\text{ or } b = 0",
                "\\text{이데알 } I: a,b \\in I \\Rightarrow a-b \\in I;\\; r \\in R, i \\in I \\Rightarrow ri \\in I",
                "(a) = \\{ra \\mid r \\in R\\} \\quad (\\text{주이데알})",
                "R/I:\\; (a+I)(b+I) = ab + I"
            ],
            "commonMistakes": [
                "정역에서 소거법칙을 '곱셈 역원으로 나누기'로 증명하려는 것 (정역은 체가 아니므로 역원이 없을 수 있음)",
                "이데알의 합 $(m) + (n)$과 교집합 $(m) \\cap (n)$을 혼동하는 것 ($\\mathbb{Z}$에서 $(m)+(n) = (\\gcd(m,n))$, $(m) \\cap (n) = (\\text{lcm}(m,n))$)",
                "$\\mathbb{Z}/n\\mathbb{Z}$가 정역인지 판별할 때 $n$의 소수 여부를 확인하지 않는 것"
            ],
            "nextConnection": "정역에서 모든 0이 아닌 원소에 곱셈 역원까지 부여하면 어떻게 될까요? 다음 레슨에서 '체(field)'를 도입하고, 나눗셈이 자유로운 세계로 진입합니다."
        }
    },
    {
        "id": 16,
        "title": "체 — 나눗셈이 가능한 세계",
        "category": "체론",
        "level": "중급",
        "question": "사칙연산이 모두 가능한 대수 구조인 체(field)는 무엇이고, 체 확장은 왜 중요한가?",
        "concept": {
            "intro": "정역에서는 곱셈의 역원이 항상 존재하지 않았습니다. 이번에는 사칙연산이 모두 가능한 구조, 체(field)를 배웁니다.\n\n:::definition[체의 정의]\n**체(field)** $(F, +, \\cdot)$는 다음을 만족하는 대수 구조이다:\n(1) $(F, +)$는 아벨군이다.\n(2) $(F \\setminus \\{0\\}, \\cdot)$도 아벨군이다 (0이 아닌 모든 원소가 곱셈 역원을 가진다).\n(3) 분배법칙이 성립한다.\n:::\n\n체의 대표적 예: $\\mathbb{Q}$, $\\mathbb{R}$, $\\mathbb{C}$(무한체), $\\mathbb{Z}/p\\mathbb{Z}$ ($p$ 소수, 유한체).\n\n:::definition[체 확장]\n체 $F \\subseteq K$이면서 같은 연산을 공유할 때, $K$를 $F$의 **확장체(field extension)**라 한다. 예: $\\mathbb{Q} \\subset \\mathbb{R} \\subset \\mathbb{C}$.\n:::\n\n:::note[참고]\n$\\mathbb{Q}(\\sqrt{2}) = \\{a + b\\sqrt{2} \\mid a, b \\in \\mathbb{Q}\\}$는 $\\mathbb{Q}$의 확장체이다. 역원: $(a + b\\sqrt{2})^{-1} = \\frac{a - b\\sqrt{2}}{a^2 - 2b^2}$.\n:::\n\n:::theorem[유한 정역은 체이다]\n유한 정역은 반드시 체이다.\n:::\n\n:::proof[증명 (개요)]\n유한 정역 $D$에서 $a \\neq 0$인 원소를 잡고 $\\varphi(x) = ax$를 정의하면, 소거법칙에 의해 단사이다. 유한집합이므로 단사 $\\Rightarrow$ 전사. 따라서 $ax = 1$인 $x$가 존재한다. $\\blacksquare$\n:::",
            "intuition": "환에서 체로의 발전은 '나눗셈의 자유'를 얻는 과정입니다. 정수에서는 $2 \\div 3$을 할 수 없지만, 유리수에서는 $\\frac{2}{3}$이 존재합니다. 체는 0으로 나누는 것만 빼면 아무 원소로나 자유롭게 나눌 수 있는 세계입니다.\n\n체 확장 $\\mathbb{Q}(\\sqrt{2})$를 직관적으로 이해하려면: $\\mathbb{Q}$라는 '유리수 세계'에서 $\\sqrt{2}$라는 '새로운 원소'를 초대했더니, 사칙연산을 닫히게 하려면 $a + b\\sqrt{2}$ 형태의 수를 모두 받아들여야 하는 것입니다. 마치 실수에 $i = \\sqrt{-1}$을 초대하여 복소수 $a + bi$를 만드는 것과 같은 원리입니다.\n\n유한 정역이 체라는 정리는 '비둘기집 원리(pigeonhole principle)'의 힘을 보여줍니다. 유한집합에서 단사 함수는 전사 함수이므로, 소거법칙(단사성)만으로 역원의 존재(전사성)가 보장됩니다.",
            "formula": "\\text{체 } (F, +, \\cdot):\\ (F,+) \\text{ 아벨군},\\; (F \\setminus \\{0\\}, \\cdot) \\text{ 아벨군},\\; \\text{분배법칙}\n\\text{체 확장:}\\ F \\subseteq K \\text{이면 } K/F \\text{는 체 확장}\n\\mathbb{Q}(\\sqrt{2}) = \\{a + b\\sqrt{2} \\mid a, b \\in \\mathbb{Q}\\}\n(a + b\\sqrt{2})^{-1} = \\frac{a - b\\sqrt{2}}{a^2 - 2b^2} \\quad (a^2 - 2b^2 \\neq 0)\n\\text{유한 정역} \\Rightarrow \\text{체}",
            "summary": ":::note[핵심 요약]\n• 체: $(F, +)$ 아벨군, $(F \\setminus \\{0\\}, \\cdot)$ 아벨군, 분배법칙.\n• 예: $\\mathbb{Q}$, $\\mathbb{R}$, $\\mathbb{C}$, $\\mathbb{Z}/p\\mathbb{Z}$. $\\mathbb{Z}$는 체가 아니다.\n• 유한 정역은 반드시 체이다.\n• 체 확장은 갈루아 이론의 기초이며, 방정식의 풀이 가능성과 직결된다.\n:::"
        },
        "examples": [
            {
                "title": "$\\mathbb{Q}(\\sqrt{2})$에서 역원 계산",
                "problem": "$\\mathbb{Q}(\\sqrt{2})$에서 $3 + 2\\sqrt{2}$의 곱셈 역원을 구하시오.",
                "steps": [
                    "$(3 + 2\\sqrt{2})$의 역원을 $\\frac{1}{3 + 2\\sqrt{2}}$로 쓴다.",
                    "유리화: 분모와 분자에 켤레 $3 - 2\\sqrt{2}$를 곱한다.",
                    "분모: $(3 + 2\\sqrt{2})(3 - 2\\sqrt{2}) = 9 - 4 \\cdot 2 = 9 - 8 = 1$.",
                    "따라서 $(3 + 2\\sqrt{2})^{-1} = \\frac{3 - 2\\sqrt{2}}{1} = 3 - 2\\sqrt{2}$.",
                    "검산: $(3 + 2\\sqrt{2})(3 - 2\\sqrt{2}) = 9 - 8 = 1$ ✓.",
                    "$3 - 2\\sqrt{2} = 3 + (-2)\\sqrt{2}$이고 $3, -2 \\in \\mathbb{Q}$이므로 $3 - 2\\sqrt{2} \\in \\mathbb{Q}(\\sqrt{2})$ ✓."
                ],
                "answer": "$(3 + 2\\sqrt{2})^{-1} = 3 - 2\\sqrt{2}$. 이것은 $\\mathbb{Q}(\\sqrt{2})$의 원소이다.",
                "lesson": "$a + b\\sqrt{2}$의 역원을 구할 때 '켤레(conjugate)' $a - b\\sqrt{2}$를 이용합니다. 분모가 $a^2 - 2b^2$이 되는데, $a + b\\sqrt{2} \\neq 0$이면 $a^2 - 2b^2 \\neq 0$이므로 ($\\sqrt{2}$가 무리수이기 때문) 항상 역원이 존재합니다."
            },
            {
                "title": "[기본] $\\mathbb{Z}$가 체가 아닌 이유",
                "problem": "정수환 $\\mathbb{Z}$가 체가 아닌 이유를 구체적으로 설명하시오.",
                "steps": [
                    "체의 조건: $(\\mathbb{Z} \\setminus \\{0\\}, \\times)$가 아벨군이어야 합니다.",
                    "곱셈에서 $2$의 역원은 $\\frac{1}{2}$이어야 합니다: $2 \\times \\frac{1}{2} = 1$.",
                    "그런데 $\\frac{1}{2} \\notin \\mathbb{Z}$입니다.",
                    "사실 곱셈 역원이 정수인 원소는 $1$과 $-1$뿐입니다: $1 \\cdot 1 = 1$, $(-1) \\cdot (-1) = 1$.",
                    "따라서 $(\\mathbb{Z} \\setminus \\{0\\}, \\times)$는 군이 아니므로 $\\mathbb{Z}$는 체가 아닙니다."
                ],
                "answer": "$\\mathbb{Z}$는 체가 아니다. $2$의 곱셈 역원 $\\frac{1}{2}$이 정수가 아니므로 곱셈군 조건이 실패한다.",
                "lesson": "$\\mathbb{Z}$는 정역이지만 체는 아닙니다. $\\mathbb{Z}$의 분수체(field of fractions)가 $\\mathbb{Q}$이며, 이것이 '정수를 체로 확장하는' 자연스러운 방법입니다."
            },
            {
                "title": "[응용] $\\mathbb{Q}(\\sqrt{3})$에서 곱셈 수행하기",
                "problem": "$\\mathbb{Q}(\\sqrt{3})$에서 $(1 + \\sqrt{3})(2 - \\sqrt{3})$을 계산하시오.",
                "steps": [
                    "전개: $(1 + \\sqrt{3})(2 - \\sqrt{3}) = 1 \\cdot 2 + 1 \\cdot (-\\sqrt{3}) + \\sqrt{3} \\cdot 2 + \\sqrt{3} \\cdot (-\\sqrt{3})$.",
                    "$= 2 - \\sqrt{3} + 2\\sqrt{3} - (\\sqrt{3})^2$.",
                    "$= 2 - \\sqrt{3} + 2\\sqrt{3} - 3$.",
                    "$= (2 - 3) + (-1 + 2)\\sqrt{3} = -1 + \\sqrt{3}$.",
                    "$-1 + \\sqrt{3} = (-1) + 1 \\cdot \\sqrt{3} \\in \\mathbb{Q}(\\sqrt{3})$ \\checkmark."
                ],
                "answer": "$(1 + \\sqrt{3})(2 - \\sqrt{3}) = -1 + \\sqrt{3} \\in \\mathbb{Q}(\\sqrt{3})$.",
                "lesson": "$\\mathbb{Q}(\\sqrt{d})$에서의 곱셈은 $(\\sqrt{d})^2 = d$라는 규칙을 사용하여 항상 $a + b\\sqrt{d}$ 형태로 정리됩니다."
            },
            {
                "title": "[응용] 유한 정역이 체임을 보이기",
                "problem": "유한 정역 $D$에서 $0$이 아닌 원소 $a$가 곱셈 역원을 가짐을 증명하시오.",
                "steps": [
                    "함수 $\\varphi: D \\to D$를 $\\varphi(x) = ax$로 정의합니다.",
                    "$\\varphi$가 단사(injective)임을 보입니다: $ax = ay$이면 $a(x - y) = 0$.",
                    "$D$는 정역이고 $a \\neq 0$이므로 $x - y = 0$, 즉 $x = y$. 따라서 단사. \\checkmark",
                    "$D$가 유한집합이면, 유한집합 위의 단사 함수는 전사입니다 (비둘기집 원리).",
                    "따라서 $\\varphi(x) = ax = 1$인 $x \\in D$가 존재하고, 이 $x$가 $a$의 역원입니다."
                ],
                "answer": "유한 정역에서 $\\varphi(x) = ax$는 단사이고, 유한성에 의해 전사이므로 $ax = 1$인 $x$가 존재한다.",
                "lesson": "이 증명은 비둘기집 원리와 소거법칙의 결합입니다. 무한 정역($\\mathbb{Z}$)에서는 단사가 전사를 보장하지 않으므로 이 논증이 적용되지 않습니다."
            },
            {
                "title": "[심화] 체 확장의 차수 계산: $[\\mathbb{Q}(\\sqrt{2}) : \\mathbb{Q}]$",
                "problem": "체 확장 $\\mathbb{Q}(\\sqrt{2})/\\mathbb{Q}$의 차수를 구하시오.",
                "steps": [
                    "$\\mathbb{Q}(\\sqrt{2}) = \\{a + b\\sqrt{2} \\mid a, b \\in \\mathbb{Q}\\}$.",
                    "$\\mathbb{Q}(\\sqrt{2})$는 $\\mathbb{Q}$ 위의 벡터공간으로 볼 수 있습니다.",
                    "기저(basis): $\\{1, \\sqrt{2}\\}$. 모든 원소가 $a \\cdot 1 + b \\cdot \\sqrt{2}$로 유일하게 표현됩니다.",
                    "일차독립 확인: $a + b\\sqrt{2} = 0$이고 $a, b \\in \\mathbb{Q}$이면, $\\sqrt{2}$가 무리수이므로 $a = b = 0$.",
                    "따라서 $[\\mathbb{Q}(\\sqrt{2}) : \\mathbb{Q}] = \\dim_{\\mathbb{Q}} \\mathbb{Q}(\\sqrt{2}) = 2$."
                ],
                "answer": "$[\\mathbb{Q}(\\sqrt{2}) : \\mathbb{Q}] = 2$. 기저는 $\\{1, \\sqrt{2}\\}$.",
                "lesson": "체 확장의 차수는 확장체를 기저체 위의 벡터공간으로 볼 때의 차원입니다. $\\sqrt{2}$를 추가하면 차원이 $2$가 되는데, 이는 $\\sqrt{2}$의 최소다항식 $x^2 - 2$의 차수와 일치합니다."
            }
        ],
        "problems": [
            {
                "id": "16-1",
                "type": "choice",
                "difficulty": 1,
                "question": "다음 중 체(field)가 아닌 것은?",
                "choices": [
                    "$\\mathbb{Q}$ (유리수)",
                    "$\\mathbb{Z}$ (정수)",
                    "$\\mathbb{R}$ (실수)",
                    "$\\mathbb{Z}/5\\mathbb{Z}$"
                ],
                "answer": "$\\mathbb{Z}$ (정수)",
                "hints": [
                    "체가 되려면 $0$이 아닌 모든 원소에 곱셈 역원이 있어야 합니다.",
                    "정수 $\\mathbb{Z}$에서 $2$의 곱셈 역원, 즉 $2a = 1$인 정수 $a$가 있나요?",
                    "$\\frac{1}{2}$은 유리수이지 정수가 아닙니다. 따라서 $\\mathbb{Z}$는 체가 아닙니다."
                ],
                "explanation": "$\\mathbb{Z}$(정수)에서 $2 \\cdot a = 1$을 만족하는 정수 $a$는 존재하지 않습니다. $a = \\frac{1}{2}$이 필요한데 이는 정수가 아닙니다. 따라서 $\\mathbb{Z}$는 체가 아니며, 정역(integral domain)에 머무릅니다. 나머지 $\\mathbb{Q}$, $\\mathbb{R}$, $\\mathbb{Z}/5\\mathbb{Z}$는 모두 체입니다.",
                "wrongAnalysis": "$\\mathbb{Z}/5\\mathbb{Z}$가 체인지 의심하는 경우가 있지만, $5$는 소수이므로 $\\mathbb{Z}/5\\mathbb{Z}$의 모든 0이 아닌 원소는 곱셈 역원을 가집니다. 유한체의 존재를 기억하세요."
            },
            {
                "id": "16-2",
                "type": "choice",
                "difficulty": 2,
                "question": "$\\mathbb{Z}/5\\mathbb{Z}$에서 $3$의 곱셈 역원은?",
                "choices": [
                    "$1$",
                    "$2$",
                    "$3$",
                    "$4$"
                ],
                "answer": "$2$",
                "hints": [
                    "$3 \\cdot a \\equiv 1 \\pmod{5}$를 만족하는 $a$를 찾으세요.",
                    "$3 \\cdot 1 = 3$, $3 \\cdot 2 = 6 \\equiv 1 \\pmod{5}$.",
                    "$6 = 5 + 1$이므로 $6 \\equiv 1 \\pmod{5}$. 따라서 $3^{-1} = 2$."
                ],
                "explanation": "$3 \\cdot 2 = 6 \\equiv 1 \\pmod{5}$이므로 $3$의 곱셈 역원은 $2$입니다. $\\mathbb{Z}/5\\mathbb{Z}$에서 각 원소의 역원: $1^{-1} = 1$, $2^{-1} = 3$, $3^{-1} = 2$, $4^{-1} = 4$. 모든 0이 아닌 원소가 역원을 가지므로 체입니다.",
                "wrongAnalysis": "$3 \\cdot 3 = 9 \\equiv 4 \\pmod{5} \\neq 1$이므로 $3$은 자기 자신의 역원이 아닙니다. 모든 원소를 대입하여 확인하거나, 확장 유클리드 알고리즘을 사용합니다."
            },
            {
                "id": "16-3",
                "type": "text",
                "difficulty": 3,
                "question": "$\\mathbb{Q}(\\sqrt{2})$에서 $1 + \\sqrt{2}$의 곱셈 역원을 $a + b\\sqrt{2}$ ($a, b \\in \\mathbb{Q}$) 형태로 구하시오.",
                "answer": "-1 + √2",
                "hints": [
                    "$(1 + \\sqrt{2})$의 켤레는 $1 - \\sqrt{2}$입니다.",
                    "$(1 + \\sqrt{2})(1 - \\sqrt{2}) = 1 - 2 = -1$.",
                    "$\\frac{1}{1 + \\sqrt{2}} = \\frac{1 - \\sqrt{2}}{-1} = -1 + \\sqrt{2}$."
                ],
                "explanation": "$(1 + \\sqrt{2})^{-1} = \\frac{1}{1 + \\sqrt{2}} = \\frac{1 - \\sqrt{2}}{(1 + \\sqrt{2})(1 - \\sqrt{2})} = \\frac{1 - \\sqrt{2}}{1 - 2} = \\frac{1 - \\sqrt{2}}{-1} = -1 + \\sqrt{2}$. 검산: $(1 + \\sqrt{2})(-1 + \\sqrt{2}) = -1 + \\sqrt{2} - \\sqrt{2} + 2 = 1$ ✓. 따라서 $(1 + \\sqrt{2})^{-1} = -1 + \\sqrt{2}$이며, $-1, 1 \\in \\mathbb{Q}$이므로 $-1 + \\sqrt{2} \\in \\mathbb{Q}(\\sqrt{2})$입니다.",
                "wrongAnalysis": "역원 공식에서 분모 $a^2 - 2b^2$의 부호에 주의하세요. $a = 1, b = 1$이면 $a^2 - 2b^2 = 1 - 2 = -1$이므로 음수가 됩니다. 부호 실수가 가장 흔한 오류입니다."
            },
            {
                "id": "16-4",
                "type": "choice",
                "difficulty": 1,
                "question": "$\\mathbb{Z}/7\\mathbb{Z}$에서 $1$의 곱셈 역원은?",
                "choices": [
                    "$0$",
                    "$1$",
                    "$6$",
                    "$7$"
                ],
                "answer": "$1$",
                "hints": [
                    "곱셈의 항등원은 $1$입니다.",
                    "$1 \\cdot 1 = 1$이므로 $1$은 자기 자신의 역원입니다."
                ],
                "explanation": "$1 \\cdot 1 = 1$이므로 $1$의 곱셈 역원은 $1$ 자신입니다. 이것은 모든 환에서 성립합니다. 단위원 $1$은 항상 자기 자신의 역원(즉 가역원)입니다.",
                "wrongAnalysis": "$7$을 답으로 고르면 안 됩니다. $\\mathbb{Z}/7\\mathbb{Z}$의 원소는 $\\{0, 1, 2, 3, 4, 5, 6\\}$이므로 $7$은 이 집합에 없습니다. $7 \\equiv 0 \\pmod{7}$이므로 $7$은 $0$에 해당합니다."
            },
            {
                "id": "16-5",
                "type": "choice",
                "difficulty": 2,
                "question": "$\\mathbb{Z}/7\\mathbb{Z}$에서 $5$의 곱셈 역원은?",
                "choices": [
                    "$2$",
                    "$3$",
                    "$4$",
                    "$5$"
                ],
                "answer": "$3$",
                "hints": [
                    "$5 \\cdot a \\equiv 1 \\pmod{7}$를 만족하는 $a$를 찾으세요.",
                    "$5 \\cdot 3 = 15 = 2 \\times 7 + 1$이므로 $15 \\equiv 1 \\pmod{7}$입니다."
                ],
                "explanation": "$5 \\cdot 3 = 15 \\equiv 1 \\pmod{7}$ ($15 = 2 \\times 7 + 1$)이므로 $5^{-1} = 3$입니다. $\\mathbb{Z}/7\\mathbb{Z}$는 $7$이 소수이므로 체이며, 모든 $0$이 아닌 원소가 곱셈 역원을 가집니다.",
                "wrongAnalysis": "$5$가 자기 자신의 역원이라고 생각할 수 있지만, $5 \\cdot 5 = 25 \\equiv 4 \\pmod{7} \\neq 1$이므로 $5$는 자기 자신의 역원이 아닙니다. 직접 대입하여 확인하세요."
            }
        ],
        "summary": {
            "keyPoints": [
                "체 $(F, +, \\cdot)$에서는 사칙연산이 모두 가능하다: $(F,+)$ 아벨군, $(F \\setminus \\{0\\}, \\cdot)$ 아벨군.",
                "$\\mathbb{Q}$, $\\mathbb{R}$, $\\mathbb{C}$, $\\mathbb{Z}/p\\mathbb{Z}$($p$ 소수)는 체이다. $\\mathbb{Z}$는 체가 아니다.",
                "유한 정역은 반드시 체이다.",
                "체 확장 $\\mathbb{Q}(\\sqrt{2}) = \\{a + b\\sqrt{2} \\mid a, b \\in \\mathbb{Q}\\}$는 $\\mathbb{Q}$에 $\\sqrt{2}$를 추가한 최소 체이다.",
                "체 확장은 갈루아 이론의 무대이며, 다항식의 근을 이해하는 열쇠이다."
            ],
            "formulas": [
                "(F, +, \\cdot):\\ (F,+) \\text{ 아벨군},\\; (F^\\times, \\cdot) \\text{ 아벨군},\\; \\text{분배법칙}",
                "\\mathbb{Q}(\\sqrt{2}) = \\{a + b\\sqrt{2} \\mid a,b \\in \\mathbb{Q}\\}",
                "(a + b\\sqrt{2})^{-1} = \\frac{a - b\\sqrt{2}}{a^2 - 2b^2}",
                "\\text{유한 정역} \\Rightarrow \\text{체}"
            ],
            "commonMistakes": [
                "$\\mathbb{Z}$를 체라고 착각하는 것 (정수에는 곱셈 역원이 없는 원소가 있다)",
                "$\\mathbb{Q}(\\sqrt{2})$에서 역원 계산 시 분모 $a^2 - 2b^2$의 부호를 틀리는 것",
                "유한체가 $\\mathbb{Z}/p\\mathbb{Z}$ 형태만 있다고 생각하는 것 (크기 $p^n$인 유한체 $\\text{GF}(p^n)$도 있다)"
            ],
            "nextConnection": "체와 체 확장의 기초를 배웠으니, 다음 레슨에서는 다항식환 $F[x]$와 기약다항식을 이용해 체 확장을 '만드는 방법'을 배웁니다."
        }
    },
    {
        "id": 17,
        "title": "다항식환과 기약다항식",
        "category": "체론",
        "level": "심화",
        "question": "다항식으로 어떻게 새로운 체를 만들 수 있는가?",
        "concept": {
            "intro": "체 확장을 체계적으로 구성하는 방법을 배웁니다. 핵심은 다항식환과 기약다항식입니다.\n\n:::definition[다항식환]\n체 $F$ 위의 **다항식환** $F[x]$는 $F$의 원소를 계수로 가지는 모든 다항식의 집합이다. $F[x]$는 가환환이며, 나눗셈 알고리즘 $f(x) = g(x)q(x) + r(x)$, $\\deg r < \\deg g$이 성립한다.\n:::\n\n$F[x]$는 유클리드 정역이며, 따라서 주이데알 정역(PID)이기도 합니다.\n\n:::definition[기약다항식]\n**기약다항식(irreducible polynomial)**이란 상수가 아니면서 더 낮은 차수의 다항식들의 곱으로 인수분해할 수 없는 다항식이다. 기약성은 기저체에 따라 달라진다.\n:::\n\n:::warning[주의]\n$x^2 + 1$은 $\\mathbb{R}[x]$에서 기약이지만, $\\mathbb{C}[x]$에서는 $x^2 + 1 = (x + i)(x - i)$로 분해되므로 기약이 아닙니다!\n:::\n\n:::theorem[기약다항식에 의한 체 확장]\n$p(x)$가 $F[x]$에서 기약다항식이면, 잉여환 $F[x]/(p(x))$는 체이다.\n:::\n\n:::note[참고]\n$\\mathbb{R}[x]/(x^2 + 1)$에서 $x^2 = -1$이므로 $x$는 $i$의 역할을 한다. 원소는 $a + bx$ 형태이고, 곱셈은 $(a + bx)(c + dx) = (ac - bd) + (ad + bc)x$. 이것이 복소수의 곱셈이다! 따라서 $\\mathbb{R}[x]/(x^2 + 1) \\cong \\mathbb{C}$.\n:::",
            "intuition": "다항식환 $F[x]$를 정수 $\\mathbb{Z}$와의 유비로 이해하면 매우 효과적입니다. 정수에서 소수가 곱셈의 기본 단위이듯, 다항식환에서 기약다항식이 곱셈의 기본 단위입니다. 정수에서 $\\mathbb{Z}/p\\mathbb{Z}$가 체이듯, $F[x]/(p(x))$가 체입니다.\n\n$\\mathbb{R}[x]/(x^2 + 1) \\cong \\mathbb{C}$를 직관적으로 이해하려면: '$x^2 + 1 = 0$이 된다고 선언하는 세계'를 만든 것입니다. 실수 세계에서 $x^2 = -1$인 수는 없지만, $x^2 + 1$로 나눈 나머지의 세계로 가면 $x^2 \\equiv -1$이 강제됩니다. 이 $x$가 바로 $i$입니다. 존재하지 않는 근을 '있게 만드는' 마법이 잉여환 구성입니다.\n\n같은 방식으로 $\\mathbb{Q}[x]/(x^2 - 2) \\cong \\mathbb{Q}(\\sqrt{2})$도 이해할 수 있습니다. $x^2 - 2 = 0$, 즉 $x^2 = 2$라고 선언하면 $x$는 $\\sqrt{2}$의 역할을 하고, $a + bx$ 형태의 원소들이 $a + b\\sqrt{2}$에 대응합니다.",
            "formula": "F[x] = \\{a_0 + a_1 x + \\cdots + a_n x^n \\mid a_i \\in F,\\; n \\geq 0\\}\n\\text{나눗셈 알고리즘:}\\ f(x) = g(x)q(x) + r(x),\\; \\deg r < \\deg g\n\\text{기약다항식:}\\ p(x) \\in F[x],\\; \\deg p \\geq 1,\\; p(x) = f(x)g(x) \\Rightarrow \\deg f = 0 \\text{ or } \\deg g = 0\np(x) \\text{ 기약} \\Rightarrow F[x]/(p(x)) \\text{는 체}\n\\mathbb{R}[x]/(x^2+1) \\cong \\mathbb{C}",
            "summary": ":::note[핵심 요약]\n• 다항식환 $F[x]$는 가환환이며, 나눗셈 알고리즘이 성립한다.\n• 기약다항식: 더 낮은 차수로 인수분해할 수 없는 다항식. 기약성은 기저체에 따라 달라진다.\n• 기약다항식 $p(x)$에 대해 $F[x]/(p(x))$는 체이다.\n• $\\mathbb{R}[x]/(x^2+1) \\cong \\mathbb{C}$: 다항식으로 복소수를 구성할 수 있다.\n:::"
        },
        "examples": [
            {
                "title": "$\\mathbb{R}[x]/(x^2+1)$에서 곱셈 수행하기",
                "problem": "$\\mathbb{R}[x]/(x^2+1)$에서 $(2 + 3x)(1 - x)$를 계산하시오.",
                "steps": [
                    "먼저 보통의 다항식 곱셈을 수행: $(2 + 3x)(1 - x) = 2 - 2x + 3x - 3x^2 = 2 + x - 3x^2$.",
                    "$x^2 + 1 \\equiv 0$이므로 $x^2 \\equiv -1$. 따라서 $-3x^2 \\equiv -3(-1) = 3$.",
                    "$2 + x - 3x^2 \\equiv 2 + x + 3 = 5 + x$.",
                    "따라서 $(2 + 3x)(1 - x) = 5 + x$ in $\\mathbb{R}[x]/(x^2+1)$.",
                    "복소수로 대응: $2 + 3x \\leftrightarrow 2 + 3i$, $1 - x \\leftrightarrow 1 - i$.",
                    "$(2 + 3i)(1 - i) = 2 - 2i + 3i - 3i^2 = 2 + i + 3 = 5 + i$ ✓."
                ],
                "answer": "$(2 + 3x)(1 - x) = 5 + x$ in $\\mathbb{R}[x]/(x^2+1)$, 이는 복소수 $(2+3i)(1-i) = 5+i$에 대응한다.",
                "lesson": "$\\mathbb{R}[x]/(x^2+1)$에서의 계산은 복소수의 곱셈과 정확히 일치합니다. $x^2$이 나타날 때마다 $-1$로 바꾸면 됩니다. 이것이 $\\mathbb{R}[x]/(x^2+1) \\cong \\mathbb{C}$인 이유입니다."
            },
            {
                "title": "[기본] $x^2 + 1$이 $\\mathbb{R}[x]$에서 기약인지 확인하기",
                "problem": "$x^2 + 1 \\in \\mathbb{R}[x]$가 기약다항식인지 판별하시오.",
                "steps": [
                    "2차 다항식이 기약인지 확인하려면, 근이 있는지 봅니다.",
                    "$x^2 + 1 = 0$이면 $x^2 = -1$인데, 실수에서 $x^2 \\geq 0$이므로 근이 없습니다.",
                    "2차 이하 다항식은 근이 없으면 기약입니다 (일차식의 곱으로 분해 불가).",
                    "따라서 $x^2 + 1$은 $\\mathbb{R}[x]$에서 기약입니다.",
                    "주의: $\\mathbb{C}[x]$에서는 $x^2 + 1 = (x + i)(x - i)$로 가약입니다."
                ],
                "answer": "$x^2 + 1$은 $\\mathbb{R}[x]$에서 기약이다. 실수 근이 존재하지 않기 때문이다.",
                "lesson": "기약성은 어떤 체 위에서 보는가에 달려 있습니다. $\\mathbb{R}$에서 기약인 다항식이 $\\mathbb{C}$에서는 가약일 수 있습니다."
            },
            {
                "title": "[응용] $\\mathbb{Q}[x]/(x^2 - 2)$에서 덧셈과 곱셈 수행하기",
                "problem": "$\\mathbb{Q}[x]/(x^2 - 2)$에서 $(1 + x) + (3 - 2x)$와 $(1 + x)(3 - 2x)$를 계산하시오.",
                "steps": [
                    "덧셈: $(1 + x) + (3 - 2x) = 4 - x$.",
                    "곱셈: $(1 + x)(3 - 2x) = 3 - 2x + 3x - 2x^2 = 3 + x - 2x^2$.",
                    "$x^2 - 2 \\equiv 0$이므로 $x^2 \\equiv 2$. 따라서 $-2x^2 \\equiv -4$.",
                    "$3 + x - 2x^2 \\equiv 3 + x - 4 = -1 + x$.",
                    "$\\mathbb{Q}(\\sqrt{2})$와의 대응: $x \\leftrightarrow \\sqrt{2}$이면 $(1 + \\sqrt{2})(3 - 2\\sqrt{2}) = 3 + \\sqrt{2} - 4 = -1 + \\sqrt{2}$ \\checkmark."
                ],
                "answer": "$(1+x) + (3-2x) = 4 - x$, $(1+x)(3-2x) = -1 + x$ in $\\mathbb{Q}[x]/(x^2-2)$.",
                "lesson": "$\\mathbb{Q}[x]/(x^2 - 2) \\cong \\mathbb{Q}(\\sqrt{2})$입니다. 잉여환에서 $x$는 $\\sqrt{2}$의 역할을 하고, $x^2 = 2$라는 관계식에 의해 계산이 결정됩니다."
            },
            {
                "title": "[응용] 아이젠슈타인 판정법으로 기약성 판별하기",
                "problem": "$f(x) = x^3 + 6x^2 + 9x + 3 \\in \\mathbb{Q}[x]$가 기약인지 아이젠슈타인 판정법으로 판별하시오.",
                "steps": [
                    "아이젠슈타인 판정법: 소수 $p$가 존재하여 $p \\mid a_{n-1}, \\ldots, p \\mid a_0$이고, $p \\nmid a_n$이며 $p^2 \\nmid a_0$이면 기약.",
                    "$f(x) = x^3 + 6x^2 + 9x + 3$. 최고차항 계수 $a_3 = 1$.",
                    "$p = 3$으로 시도: $3 \\mid 6$ ✓, $3 \\mid 9$ ✓, $3 \\mid 3$ ✓.",
                    "$3 \\nmid 1$ (최고차항 계수) ✓.",
                    "$3^2 = 9 \\nmid 3$ (상수항) ✓.",
                    "아이젠슈타인 판정법의 모든 조건이 성립하므로 $f(x)$는 $\\mathbb{Q}[x]$에서 기약입니다."
                ],
                "answer": "$p = 3$에 대해 아이젠슈타인 판정법이 적용되므로, $f(x) = x^3 + 6x^2 + 9x + 3$은 $\\mathbb{Q}[x]$에서 기약이다.",
                "lesson": "아이젠슈타인 판정법은 기약성을 빠르게 판별하는 강력한 도구입니다. 적절한 소수 $p$만 찾으면 됩니다."
            },
            {
                "title": "[심화] $\\mathbb{F}_2[x]/(x^2 + x + 1)$이 위수 $4$인 체임을 보이기",
                "problem": "$\\mathbb{F}_2 = \\mathbb{Z}/2\\mathbb{Z} = \\{0, 1\\}$에서 $x^2 + x + 1$이 기약임을 보이고, $\\mathbb{F}_2[x]/(x^2 + x + 1)$의 원소와 곱셈을 서술하시오.",
                "steps": [
                    "기약성: $\\mathbb{F}_2$에서 $f(0) = 0 + 0 + 1 = 1 \\neq 0$, $f(1) = 1 + 1 + 1 = 1 \\neq 0$. 근이 없으므로 기약.",
                    "원소: $\\{0, 1, x, x+1\\}$ (차수 $< 2$인 다항식). 총 $4$개.",
                    "곱셈 예: $x \\cdot x = x^2 \\equiv x + 1$ ($x^2 + x + 1 = 0$에서 $x^2 = -x - 1 = x + 1$ ($\\mathbb{F}_2$에서 $-1 = 1$)).",
                    "$x \\cdot (x+1) = x^2 + x = (x+1) + x = 1$. 따라서 $x^{-1} = x + 1$.",
                    "$(x+1) \\cdot (x+1) = x^2 + 2x + 1 = x^2 + 1 = (x+1) + 1 = x$.",
                    "가역원: $1^{-1} = 1$, $x^{-1} = x+1$, $(x+1)^{-1} = x$. 모든 $0$이 아닌 원소에 역원 존재. 체 \\checkmark."
                ],
                "answer": "$\\mathbb{F}_2[x]/(x^2+x+1)$는 $\\{0, 1, x, x+1\\}$로 이루어진 위수 $4$의 체 $\\mathbb{F}_4$이다.",
                "lesson": "유한체의 위수는 항상 소수의 거듭제곱($p^n$)입니다. $\\mathbb{F}_4$는 $\\mathbb{F}_2[x]/(x^2+x+1)$로 구성되며, 기약다항식을 이용한 체 확장의 유한체 버전입니다."
            }
        ],
        "problems": [
            {
                "id": "17-1",
                "type": "choice",
                "difficulty": 1,
                "question": "다항식 $x^2 + 1$은 다음 중 어떤 체 위에서 기약인가?",
                "choices": [
                    "$\\mathbb{C}$ (복소수체)",
                    "$\\mathbb{R}$ (실수체)",
                    "$\\mathbb{Z}/2\\mathbb{Z}$ (원소가 $\\{0, 1\\}$인 체)",
                    "$\\mathbb{C}$와 $\\mathbb{R}$ 모두"
                ],
                "answer": "$\\mathbb{R}$ (실수체)",
                "hints": [
                    "$\\mathbb{C}$에서 $x^2 + 1 = (x + i)(x - i)$로 인수분해되므로 기약이 아닙니다.",
                    "$\\mathbb{R}$에서 $x^2 + 1 = 0$의 실수 근이 없으므로 일차식의 곱으로 분해 불가합니다. 이차식이 실수에서 기약이려면 판별식이 음수여야 합니다.",
                    "$\\mathbb{Z}/2\\mathbb{Z}$에서 $x = 1$을 대입: $1 + 1 = 0$. 따라서 $x + 1$이 인수입니다."
                ],
                "explanation": "$\\mathbb{R}$에서 $x^2 + 1$의 판별식은 $0 - 4 = -4 < 0$이므로 실수 근이 없고, 따라서 $\\mathbb{R}[x]$에서 기약입니다. $\\mathbb{C}$에서는 $x^2 + 1 = (x+i)(x-i)$이므로 가약입니다. $\\mathbb{Z}/2\\mathbb{Z}$에서는 $1^2 + 1 = 2 \\equiv 0$이므로 $x = 1$이 근이고, $x^2 + 1 = (x+1)^2$으로 분해됩니다.",
                "wrongAnalysis": "$\\mathbb{Z}/2\\mathbb{Z}$에서 $x^2 + 1$이 기약이라고 생각할 수 있지만, 이 체에서는 $-1 = 1$이므로 $x^2 + 1 = x^2 - 1 = (x-1)(x+1) = (x+1)^2$입니다. 기약성은 기저체에 따라 달라집니다."
            },
            {
                "id": "17-2",
                "type": "choice",
                "difficulty": 2,
                "question": "$\\mathbb{R}[x]/(x^2+1)$에서 $x$의 곱셈 역원은?",
                "choices": [
                    "$x$",
                    "$-x$",
                    "$x + 1$",
                    "$x - 1$"
                ],
                "answer": "$-x$",
                "hints": [
                    "$x$의 역원 $y$는 $x \\cdot y \\equiv 1 \\pmod{x^2+1}$을 만족해야 합니다.",
                    "$x \\cdot (-x) = -x^2$. $x^2 \\equiv -1$이므로 $-x^2 \\equiv -(-1) = 1$.",
                    "따라서 $x \\cdot (-x) \\equiv 1$이고, $x^{-1} = -x$입니다."
                ],
                "explanation": "$x \\cdot (-x) = -x^2$인데, $x^2 + 1 \\equiv 0$이므로 $x^2 \\equiv -1$, 따라서 $-x^2 \\equiv 1$. 즉 $x \\cdot (-x) = 1$이므로 $x^{-1} = -x$. 복소수 대응으로 확인: $x \\leftrightarrow i$이고 $i^{-1} = \\frac{1}{i} = \\frac{-i}{1} = -i$이므로 $-x \\leftrightarrow -i$ ✓.",
                "wrongAnalysis": "$x \\cdot x = x^2 \\equiv -1 \\neq 1$이므로 $x$는 자기 자신의 역원이 아닙니다. $x + 1$이나 $x - 1$을 곱해보면 $x^2 + x \\equiv -1 + x$, $x^2 - x \\equiv -1 - x$으로 $1$이 되지 않습니다."
            },
            {
                "id": "17-3",
                "type": "text",
                "difficulty": 3,
                "question": "$\\mathbb{Q}[x]/(x^2 - 2)$의 원소 $a + bx$ ($a, b \\in \\mathbb{Q}$)에서 $x$는 어떤 수의 역할을 하는가? 이 체가 이전 레슨에서 배운 어떤 체와 동형(isomorphic)인지 답하시오.",
                "answer": "ℚ(√2)",
                "hints": [
                    "$x^2 - 2 \\equiv 0$이므로 $x^2 \\equiv 2$, 즉 $x$는 '$2$의 제곱근' 역할을 합니다.",
                    "$a + bx$ 형태의 원소는 $a + b\\sqrt{2}$에 대응합니다.",
                    "이전 레슨에서 배운 체 확장 $\\mathbb{Q}(\\sqrt{2}) = \\{a + b\\sqrt{2} \\mid a, b \\in \\mathbb{Q}\\}$와 비교해보세요."
                ],
                "explanation": "$\\mathbb{Q}[x]/(x^2-2)$에서 $x^2 \\equiv 2$이므로 $x$는 $\\sqrt{2}$의 역할을 합니다. 원소 $a + bx$는 $a + b\\sqrt{2}$에 대응하고, 연산 구조가 완전히 일치합니다. 따라서 $\\mathbb{Q}[x]/(x^2-2) \\cong \\mathbb{Q}(\\sqrt{2})$입니다. 이것은 기약다항식 $x^2-2$를 이용하여 체 확장을 구성하는 일반적 방법의 구체적 예입니다.",
                "wrongAnalysis": "$\\mathbb{Q}(\\sqrt{2})$가 아니라 $\\mathbb{R}$이나 $\\mathbb{Q}(i)$를 답하는 경우가 있습니다. $x^2 \\equiv 2$이므로 $x = \\sqrt{2}$이지 $x = i$가 아닙니다. $x^2 - 2$와 $x^2 + 1$을 혼동하지 마세요."
            },
            {
                "id": "17-4",
                "type": "choice",
                "difficulty": 1,
                "question": "다항식 $x^2 - 1$은 $\\mathbb{R}[x]$에서 기약인가?",
                "choices": [
                    "기약이다: 실수 근이 없으므로",
                    "기약이 아니다: $x^2 - 1 = (x-1)(x+1)$로 인수분해된다",
                    "기약이다: 이차식은 항상 기약이다",
                    "기약인지 판단할 수 없다"
                ],
                "answer": "기약이 아니다: $x^2 - 1 = (x-1)(x+1)$로 인수분해된다",
                "hints": [
                    "$x^2 - 1 = 0$의 근을 찾아보세요: $x = 1$ 또는 $x = -1$.",
                    "근이 존재하면 일차 인수로 분해됩니다."
                ],
                "explanation": "$x^2 - 1 = (x - 1)(x + 1)$로 두 일차식의 곱으로 인수분해되므로 기약이 아닙니다. 이차식이 기약이려면 판별식이 음수여야 합니다(실수체에서). 여기서 판별식은 $0 - 4(1)(-1) = 4 > 0$이므로 실수 근이 두 개 존재하고, 따라서 가약입니다.",
                "wrongAnalysis": "이차식이 항상 기약이라고 생각하면 안 됩니다. 실수 범위에서 이차식이 기약인 것은 판별식이 음수일 때($x^2 + 1$ 등)뿐입니다."
            },
            {
                "id": "17-5",
                "type": "text",
                "difficulty": 2,
                "question": "$\\mathbb{R}[x]/(x^2+1)$에서 $(1 + x) + (2 - x)$를 계산하시오.",
                "answer": "$3$",
                "hints": [
                    "다항식의 덧셈은 같은 차수의 계수끼리 더합니다.",
                    "$(1 + x) + (2 - x) = (1+2) + (1-1)x = 3 + 0x = 3$."
                ],
                "explanation": "$(1 + x) + (2 - x) = 3 + 0 \\cdot x = 3$. 잉여환에서의 덧셈은 보통의 다항식 덧셈과 같습니다. $x^2$ 이상의 항이 나타나지 않았으므로 $x^2 + 1$로 나눈 나머지를 구할 필요도 없습니다. 복소수로 대응하면 $(1+i) + (2-i) = 3$입니다.",
                "wrongAnalysis": "잉여환에서 $x^2 \\equiv -1$ 관계식은 곱셈에서만 사용됩니다. 덧셈에서는 그냥 다항식 덧셈을 하면 됩니다."
            }
        ],
        "summary": {
            "keyPoints": [
                "다항식환 $F[x]$는 가환환이며 나눗셈 알고리즘이 성립한다 (유클리드 정역, PID).",
                "기약다항식은 더 낮은 차수의 곱으로 분해되지 않는 다항식이며, 소수의 다항식 버전이다.",
                "기약성은 기저체에 의존한다: $x^2+1$은 $\\mathbb{R}$에서 기약, $\\mathbb{C}$에서 가약.",
                "$p(x)$가 $F[x]$에서 기약이면 $F[x]/(p(x))$는 체이다.",
                "$\\mathbb{R}[x]/(x^2+1) \\cong \\mathbb{C}$, $\\mathbb{Q}[x]/(x^2-2) \\cong \\mathbb{Q}(\\sqrt{2})$."
            ],
            "formulas": [
                "f(x) = g(x)q(x) + r(x),\\; \\deg r < \\deg g \\quad (\\text{나눗셈 알고리즘})",
                "p(x) \\text{ 기약} \\Rightarrow F[x]/(p(x)) \\text{는 체}",
                "\\mathbb{R}[x]/(x^2+1) \\cong \\mathbb{C}",
                "\\mathbb{Q}[x]/(x^2-2) \\cong \\mathbb{Q}(\\sqrt{2})"
            ],
            "commonMistakes": [
                "기약성이 기저체에 무관하다고 착각하는 것 ($x^2+1$은 $\\mathbb{R}$에서 기약, $\\mathbb{C}$에서 가약)",
                "$F[x]/(p(x))$에서 $p(x)$가 기약이 아니어도 체가 된다고 생각하는 것",
                "$\\mathbb{R}[x]/(x^2+1)$에서 $x^2$을 $-1$로 바꾸는 것을 잊고 일반 다항식처럼 계산하는 것"
            ],
            "nextConnection": "기약다항식으로 체 확장을 만드는 방법을 배웠습니다. 다음 레슨에서는 이 도구를 활용하여, 다항식 방정식의 풀이 가능성을 판별하는 갈루아 이론에 입문합니다."
        }
    },
    {
        "id": 18,
        "title": "갈루아 이론 입문",
        "category": "체론",
        "level": "심화",
        "question": "5차 이상의 일반 다항식 방정식은 왜 근의 공식으로 풀 수 없는가?",
        "concept": {
            "intro": "수학 역사에서 가장 드라마틱한 문제 중 하나인 다항식 방정식의 풀이 가능성을 다룹니다.\n\n:::theorem[아벨-루피니 정리]\n5차 이상의 일반 다항식 방정식에 대해, 계수의 사칙연산과 거듭제곱근만으로 근을 표현하는 일반적인 공식은 존재하지 않는다.\n:::\n\n이 결과를 더 깊이 이해하고 일반화한 사람이 에바리스트 갈루아(Evariste Galois)입니다.\n\n:::definition[갈루아 군]\n다항식 $f(x) \\in F[x]$의 모든 근을 $F$에 추가한 분해체(splitting field)를 $K$라 할 때, $K$에서 $F$의 원소를 모두 고정하는 자기동형사상들의 군을 **갈루아 군(Galois group)** $\\text{Gal}(K/F)$이라 한다.\n:::\n\n:::theorem[갈루아 대응]\n체 확장 $K/F$의 중간체들과 갈루아 군 $\\text{Gal}(K/F)$의 부분군들 사이에 일대일 대응이 존재한다. 큰 부분군은 작은 중간체에, 작은 부분군은 큰 중간체에 대응한다.\n:::\n\n:::theorem[갈루아의 근호 풀이 가능성 정리]\n다항식 $f(x)$의 근이 거듭제곱근으로 표현 가능한 것(근호에 의한 풀이 가능)은, 갈루아 군 $\\text{Gal}(K/F)$이 **가해군(solvable group)**인 것과 동치이다.\n:::\n\n:::note[왜 5차에서 실패하는가]\n$x^5 - x - 1$의 갈루아 군은 $S_5$이다. $S_5$는 가해군이 아니다 -- $A_5$(교대군)가 단순군이기 때문이다. 따라서 이 방정식의 근은 거듭제곱근으로 표현할 수 없다. $S_n$은 $n \\leq 4$일 때 가해군이고, $n \\geq 5$일 때 비가해군이다.\n:::",
            "intuition": "갈루아 이론의 핵심 직관은 '대칭성이 풀이 가능성을 결정한다'는 것입니다. 다항식의 근들은 서로 뒤바뀔 수 있는 '대칭'을 가지고 있고, 이 대칭의 구조(갈루아 군)가 '충분히 단순한'(가해군) 경우에만 근호로 풀 수 있습니다.\n\n갈루아 대응을 직관적으로 이해하려면: 큰 건물(분해체 $K$)이 있고, 기초(기저체 $F$)가 있습니다. 건물의 각 층(중간체)은 대칭의 일부를 깨뜨린 것에 대응합니다. 전체 대칭 그룹의 부분군이 작아질수록, 더 많은 대칭이 깨지고, 더 큰 중간체를 얻습니다.\n\n왜 5차에서 실패하는가? 4차까지는 대칭군 $S_n$이 가해군이어서 단계적으로 대칭을 깰 수 있었습니다. 하지만 $S_5$부터는 $A_5$가 단순군으로 등장하여 더 이상 깰 수 없는 '단단한 핵'이 생깁니다. 이 깨지지 않는 대칭이 근의 공식의 존재를 막는 것입니다.",
            "formula": "\\text{갈루아 군:}\\ \\text{Gal}(K/F) = \\{\\sigma: K \\to K \\mid \\sigma \\text{는 자기동형사상},\\; \\sigma(a) = a\\; \\forall a \\in F\\}\n\\text{갈루아 대응:}\\ \\{\\text{중간체 } F \\subseteq E \\subseteq K\\} \\longleftrightarrow \\{\\text{부분군 } H \\leq \\text{Gal}(K/F)\\}\n\\text{근호 풀이 가능} \\iff \\text{Gal}(K/F) \\text{가 가해군}\nS_n \\text{은 } n \\leq 4 \\text{일 때 가해군},\\; n \\geq 5 \\text{일 때 비가해군}",
            "summary": ":::note[핵심 요약]\n• 아벨-루피니 정리: 5차 이상의 일반 다항식은 근호로 풀 수 없다.\n• 갈루아 군 $\\text{Gal}(K/F)$: 분해체에서 기저체를 고정하는 자기동형사상들의 군.\n• 갈루아 대응: 중간체 $\\longleftrightarrow$ 갈루아 군의 부분군.\n• 근호 풀이 가능 $\\iff$ 갈루아 군이 가해군.\n:::"
        },
        "examples": [
            {
                "title": "$x^2 - 2$의 갈루아 군 구하기",
                "problem": "$f(x) = x^2 - 2 \\in \\mathbb{Q}[x]$의 분해체와 갈루아 군을 구하시오.",
                "steps": [
                    "$f(x) = x^2 - 2$의 근은 $\\sqrt{2}$와 $-\\sqrt{2}$이다.",
                    "분해체는 $\\mathbb{Q}$에 이 근들을 추가한 것: $K = \\mathbb{Q}(\\sqrt{2})$.",
                    "$K$에서 $\\mathbb{Q}$를 고정하는 자기동형사상을 찾는다.",
                    "항등사상 $\\text{id}$: $\\sqrt{2} \\mapsto \\sqrt{2}$ (모든 원소 고정).",
                    "켤레사상 $\\sigma$: $\\sigma(a + b\\sqrt{2}) = a - b\\sqrt{2}$, 즉 $\\sqrt{2} \\mapsto -\\sqrt{2}$.",
                    "$\\sigma$는 $\\mathbb{Q}$의 원소를 고정하고, 환 준동형: $\\sigma((a+b\\sqrt{2})(c+d\\sqrt{2})) = \\sigma(a+b\\sqrt{2})\\sigma(c+d\\sqrt{2})$ ✓.",
                    "$\\text{Gal}(\\mathbb{Q}(\\sqrt{2})/\\mathbb{Q}) = \\{\\text{id}, \\sigma\\} \\cong \\mathbb{Z}/2\\mathbb{Z}$.",
                    "$\\mathbb{Z}/2\\mathbb{Z}$는 아벨군이므로 가해군이다. 따라서 $x^2 - 2 = 0$은 근호로 풀 수 있다 (실제로 $x = \\pm\\sqrt{2}$)."
                ],
                "answer": "분해체는 $\\mathbb{Q}(\\sqrt{2})$이고, $\\text{Gal}(\\mathbb{Q}(\\sqrt{2})/\\mathbb{Q}) = \\{\\text{id}, \\sigma\\} \\cong \\mathbb{Z}/2\\mathbb{Z}$ ($\\sigma: \\sqrt{2} \\mapsto -\\sqrt{2}$). 가해군이므로 근호로 풀 수 있다.",
                "lesson": "이차방정식의 갈루아 군은 $\\mathbb{Z}/2\\mathbb{Z}$이며, 이것은 근의 부호를 바꾸는 대칭($\\sqrt{2} \\leftrightarrow -\\sqrt{2}$)을 반영합니다. 이 군이 가해군이므로 근의 공식이 존재합니다."
            },
            {
                "title": "[기본] 자기동형사상의 의미 이해하기",
                "problem": "$\\mathbb{Q}(\\sqrt{3})$에서 $\\mathbb{Q}$를 고정하는 자기동형사상을 모두 찾으시오.",
                "steps": [
                    "자기동형사상 $\\sigma: \\mathbb{Q}(\\sqrt{3}) \\to \\mathbb{Q}(\\sqrt{3})$는 $\\mathbb{Q}$의 원소를 고정합니다.",
                    "$\\sigma$는 환 준동형이므로 $\\sigma(\\sqrt{3})^2 = \\sigma((\\sqrt{3})^2) = \\sigma(3) = 3$.",
                    "따라서 $\\sigma(\\sqrt{3}) = \\sqrt{3}$ 또는 $\\sigma(\\sqrt{3}) = -\\sqrt{3}$.",
                    "항등사상 $\\text{id}$: $\\sigma(\\sqrt{3}) = \\sqrt{3}$, 즉 $\\sigma(a + b\\sqrt{3}) = a + b\\sqrt{3}$.",
                    "켤레사상 $\\tau$: $\\sigma(\\sqrt{3}) = -\\sqrt{3}$, 즉 $\\tau(a + b\\sqrt{3}) = a - b\\sqrt{3}$.",
                    "$\\text{Gal}(\\mathbb{Q}(\\sqrt{3})/\\mathbb{Q}) = \\{\\text{id}, \\tau\\} \\cong \\mathbb{Z}/2\\mathbb{Z}$."
                ],
                "answer": "자기동형사상은 $\\text{id}$와 $\\tau(a + b\\sqrt{3}) = a - b\\sqrt{3}$의 $2$개이다. 갈루아 군은 $\\mathbb{Z}/2\\mathbb{Z}$.",
                "lesson": "갈루아 군의 원소는 '근을 뒤바꾸는 대칭'입니다. $\\sqrt{3} \\mapsto -\\sqrt{3}$는 근의 부호를 바꾸는 것이고, 이것이 유일한 비자명 대칭입니다."
            },
            {
                "title": "[응용] $x^3 - 2$의 분해체와 갈루아 군의 크기",
                "problem": "$f(x) = x^3 - 2 \\in \\mathbb{Q}[x]$의 분해체를 구하고, 갈루아 군의 위수를 밝히시오.",
                "steps": [
                    "$x^3 - 2$의 근: $\\sqrt[3]{2}$, $\\omega\\sqrt[3]{2}$, $\\omega^2\\sqrt[3]{2}$ ($\\omega = e^{2\\pi i/3}$는 원시 $3$차 단위근).",
                    "분해체: $K = \\mathbb{Q}(\\sqrt[3]{2}, \\omega)$.",
                    "$[\\mathbb{Q}(\\sqrt[3]{2}) : \\mathbb{Q}] = 3$ ($x^3 - 2$은 $\\mathbb{Q}$에서 기약).",
                    "$[K : \\mathbb{Q}(\\sqrt[3]{2})] = 2$ ($\\omega$는 $x^2 + x + 1$의 근).",
                    "$[K : \\mathbb{Q}] = 3 \\times 2 = 6$.",
                    "$|\\text{Gal}(K/\\mathbb{Q})| = [K : \\mathbb{Q}] = 6$이고, $\\text{Gal}(K/\\mathbb{Q}) \\cong S_3$."
                ],
                "answer": "분해체는 $\\mathbb{Q}(\\sqrt[3]{2}, \\omega)$이고, $|\\text{Gal}(K/\\mathbb{Q})| = 6$, $\\text{Gal}(K/\\mathbb{Q}) \\cong S_3$.",
                "lesson": "$S_3$는 가해군이므로 $x^3 - 2 = 0$은 근호로 풀 수 있습니다. 실제로 $x = \\sqrt[3]{2}$, $\\omega\\sqrt[3]{2}$, $\\omega^2\\sqrt[3]{2}$로 거듭제곱근으로 표현됩니다."
            },
            {
                "title": "[응용] 가해군의 정의와 $S_4$가 가해군인 이유",
                "problem": "$S_4$가 가해군(solvable group)임을 보이시오.",
                "steps": [
                    "가해군: 정규부분군의 사슬 $\\{e\\} = G_0 \\trianglelefteq G_1 \\trianglelefteq \\cdots \\trianglelefteq G_n = G$이 존재하여, 각 $G_{i+1}/G_i$가 아벨군.",
                    "$S_4$의 사슬: $\\{e\\} \\trianglelefteq V_4 \\trianglelefteq A_4 \\trianglelefteq S_4$.",
                    "$V_4 = \\{e, (12)(34), (13)(24), (14)(23)\\}$ (클라인 사원군, 위수 $4$).",
                    "$V_4/\\{e\\} \\cong V_4 \\cong \\mathbb{Z}/2\\mathbb{Z} \\times \\mathbb{Z}/2\\mathbb{Z}$ (아벨) \\checkmark.",
                    "$A_4/V_4$: $|A_4/V_4| = 12/4 = 3$이므로 $\\cong \\mathbb{Z}/3\\mathbb{Z}$ (아벨) \\checkmark.",
                    "$S_4/A_4$: $|S_4/A_4| = 24/12 = 2$이므로 $\\cong \\mathbb{Z}/2\\mathbb{Z}$ (아벨) \\checkmark."
                ],
                "answer": "$\\{e\\} \\trianglelefteq V_4 \\trianglelefteq A_4 \\trianglelefteq S_4$이고 각 몫군이 아벨이므로, $S_4$는 가해군이다.",
                "lesson": "$S_4$가 가해군이므로 4차 방정식은 근호로 풀 수 있습니다. 이것이 카르다노-페라리 공식의 군론적 배경입니다."
            },
            {
                "title": "[심화] $S_5$가 가해군이 아닌 이유",
                "problem": "$S_5$가 가해군이 아닌 이유를 $A_5$의 단순성과 연결하여 설명하시오.",
                "steps": [
                    "$A_5$는 $S_5$의 정규부분군이고 $|A_5| = 60$.",
                    "핵심 정리: $A_5$는 단순군이다 (자명하지 않은 정규부분군이 없다).",
                    "$S_5$가 가해군이려면 $\\{e\\} \\trianglelefteq \\cdots \\trianglelefteq S_5$인 사슬에서 각 몫군이 아벨이어야 합니다.",
                    "$S_5$의 유일한 정규부분군은 $\\{e\\}$, $A_5$, $S_5$입니다.",
                    "$A_5/\\{e\\} \\cong A_5$는 아벨이 아닙니다 ($|A_5| = 60$이고 비가환).",
                    "$A_5$가 단순군이므로 $A_5$를 더 작은 조각으로 쪼갤 수 없어서, 아벨 몫군의 사슬을 만들 수 없습니다.",
                    "따라서 $S_5$는 가해군이 아니고, 5차 이상의 일반 다항식은 근호로 풀 수 없습니다."
                ],
                "answer": "$A_5$가 단순군(비가환, 비자명 정규부분군 없음)이므로 $S_5$의 정규부분군 사슬에서 아벨 몫군을 얻을 수 없다. 따라서 $S_5$는 가해군이 아니다.",
                "lesson": "$A_5$의 단순성이 5차 방정식의 근의 공식이 존재하지 않는 근본 이유입니다. 이것은 갈루아 이론의 가장 심오한 결론이며, 군론과 방정식론을 연결하는 핵심 고리입니다."
            }
        ],
        "problems": [
            {
                "id": "18-1",
                "type": "choice",
                "difficulty": 1,
                "question": "아벨-루피니 정리에 의하면, 다음 중 올바른 설명은?",
                "choices": [
                    "5차 이상의 다항식 방정식은 근이 존재하지 않는다",
                    "5차 이상의 일반 다항식 방정식은 근호(사칙연산과 거듭제곱근)로 풀 수 없다",
                    "4차 이하의 다항식 방정식만 근을 가진다",
                    "5차 이상의 다항식은 기약다항식이 아니다"
                ],
                "answer": "5차 이상의 일반 다항식 방정식은 근호(사칙연산과 거듭제곱근)로 풀 수 없다",
                "hints": [
                    "아벨-루피니 정리는 근의 '존재'가 아니라 '표현 방법'에 대한 정리입니다.",
                    "대수학의 기본정리에 의해 복소수 범위에서 모든 다항식은 근을 가집니다.",
                    "'근호로 풀 수 없다'는 것은 계수의 사칙연산과 거듭제곱근만으로는 근을 표현하는 일반 공식이 없다는 뜻입니다."
                ],
                "explanation": "아벨-루피니 정리는 '5차 이상의 일반 다항식에 대해 계수의 사칙연산과 거듭제곱근만으로 근을 표현하는 공식이 존재하지 않는다'는 것입니다. 근이 존재하지 않는 것이 아닙니다 — 대수학의 기본정리에 의해 복소수 범위에서 근은 항상 존재합니다. 문제는 그 근을 사칙연산과 거듭제곱근의 유한 조합으로 쓸 수 있는가입니다.",
                "wrongAnalysis": "'근이 존재하지 않는다'와 '근호로 표현할 수 없다'를 혼동하면 안 됩니다. $x^5 - x - 1 = 0$의 근은 분명히 존재하지만(대수학의 기본정리), $\\sqrt{\\phantom{a}}$, $\\sqrt[3]{\\phantom{a}}$ 등의 유한 조합으로 쓸 수 없을 뿐입니다."
            },
            {
                "id": "18-2",
                "type": "choice",
                "difficulty": 2,
                "question": "다항식 $f(x)$의 근이 근호로 풀리기 위한 필요충분조건은?",
                "choices": [
                    "$f(x)$의 차수가 4 이하이다",
                    "$f(x)$의 갈루아 군이 아벨군이다",
                    "$f(x)$의 갈루아 군이 가해군이다",
                    "$f(x)$가 기약다항식이다"
                ],
                "answer": "$f(x)$의 갈루아 군이 가해군이다",
                "hints": [
                    "갈루아의 핵심 정리를 떠올리세요: 근호 풀이 가능 $\\iff$ 갈루아 군의 어떤 성질.",
                    "아벨군은 가해군이지만, 가해군이 반드시 아벨군인 것은 아닙니다. 조건이 너무 강하면 안 됩니다.",
                    "차수가 5 이상이어도 갈루아 군이 가해군이면 근호로 풀 수 있습니다. 예: $x^5 - 2$는 풀 수 있습니다."
                ],
                "explanation": "갈루아의 정리: $f(x)$의 근이 근호로 표현 가능한 것은 갈루아 군 $\\text{Gal}(K/F)$이 가해군(solvable group)인 것과 동치입니다. 차수 4 이하이면 자동으로 가해군이지만, 5차 이상에서도 가해군인 경우가 있습니다 ($x^5 - 2$의 갈루아 군은 가해군). 아벨군이면 가해군이지만, 가해군이 아벨군일 필요는 없습니다.",
                "wrongAnalysis": "'차수 4 이하'는 충분조건이지 필요조건이 아닙니다. 5차 이상에서도 갈루아 군이 가해군이면 근호로 풀립니다. '아벨군'은 가해군보다 강한 조건이므로, 필요충분조건으로는 너무 제한적입니다."
            },
            {
                "id": "18-3",
                "type": "text",
                "difficulty": 3,
                "question": "$x^5 - x - 1$의 갈루아 군이 $S_5$일 때, 이 방정식이 근호로 풀 수 없는 이유를 '가해군'과 '$A_5$'의 성질을 이용하여 설명하시오.",
                "answer": "S₅의 정규열에서 A₅가 단순군이므로 S₅는 가해군이 아니고, 따라서 근호로 풀 수 없다",
                "hints": [
                    "가해군의 정의를 떠올리세요: 조성열(composition series)의 인자가 모두 아벨군인 군입니다.",
                    "$S_5$의 정규열은 $\\{e\\} \\trianglelefteq A_5 \\trianglelefteq S_5$입니다. $S_5/A_5 \\cong \\mathbb{Z}/2\\mathbb{Z}$는 아벨이지만...",
                    "$A_5$는 위수 60의 단순군(nontrivial 정규부분군이 없음)입니다. $A_5$가 아벨이 아니고 단순이므로 더 이상 분해할 수 없습니다."
                ],
                "explanation": "가해군이 되려면 조성열의 모든 인자(factor)가 아벨군이어야 합니다. $S_5$의 조성열은 $\\{e\\} \\trianglelefteq A_5 \\trianglelefteq S_5$입니다. $S_5/A_5 \\cong \\mathbb{Z}/2\\mathbb{Z}$는 아벨군이지만, $A_5$는 단순군(nontrivial 정규부분군이 없음)이면서 비아벨군(위수 60)입니다. 따라서 $A_5$를 더 분해할 수 없으므로 조성열의 인자 중 비아벨인 것($A_5/\\{e\\} = A_5$)이 존재합니다. 이것은 $S_5$가 가해군이 아님을 의미하고, 갈루아의 정리에 의해 $x^5 - x - 1 = 0$은 근호로 풀 수 없습니다.",
                "wrongAnalysis": "'5차 이상이므로 풀 수 없다'는 불완전한 답입니다. 모든 5차 방정식이 풀 수 없는 것이 아니라, 갈루아 군이 비가해군인 경우에만 풀 수 없습니다. $A_5$가 단순군이라는 구체적 이유를 제시해야 합니다."
            },
            {
                "id": "18-4",
                "type": "choice",
                "difficulty": 1,
                "question": "이차방정식 $x^2 - 5x + 6 = 0$은 근호로 풀 수 있는가?",
                "choices": [
                    "풀 수 있다: 4차 이하 방정식은 항상 근호로 풀 수 있다",
                    "풀 수 없다: 갈루아 군이 비가해군이다",
                    "풀 수 있다: 갈루아 군이 $S_2$이기 때문이다",
                    "판단할 수 없다"
                ],
                "answer": "풀 수 있다: 4차 이하 방정식은 항상 근호로 풀 수 있다",
                "hints": [
                    "$S_n$은 $n \\leq 4$일 때 가해군입니다.",
                    "갈루아 군이 가해군이면 근호로 풀 수 있습니다."
                ],
                "explanation": "4차 이하의 다항식 방정식은 갈루아 군이 $S_n$ ($n \\leq 4$)의 부분군이고, $S_n$은 $n \\leq 4$일 때 가해군이므로 항상 근호로 풀 수 있습니다. 실제로 $x^2 - 5x + 6 = (x-2)(x-3)$이므로 근은 $x = 2, 3$입니다.",
                "wrongAnalysis": "5차 이상에서만 근호로 풀 수 없는 경우가 발생합니다. 4차 이하는 갈루아 군이 항상 가해군이므로 근호로 풀리는 것이 보장됩니다."
            },
            {
                "id": "18-5",
                "type": "choice",
                "difficulty": 2,
                "question": "다음 중 가해군인 것은?",
                "choices": [
                    "$S_5$ (5개 원소의 대칭군)",
                    "$A_5$ (5개 원소의 교대군)",
                    "$\\mathbb{Z}/6\\mathbb{Z}$ (위수 6의 순환군)",
                    "$S_6$ (6개 원소의 대칭군)"
                ],
                "answer": "$\\mathbb{Z}/6\\mathbb{Z}$ (위수 6의 순환군)",
                "hints": [
                    "아벨군은 항상 가해군입니다.",
                    "순환군은 아벨군이므로 가해군입니다."
                ],
                "explanation": "$\\mathbb{Z}/6\\mathbb{Z}$는 순환군이므로 아벨군이고, 아벨군은 항상 가해군입니다. $S_5$는 $A_5$가 비아벨 단순군이므로 가해군이 아닙니다. $A_5$ 자체도 비아벨 단순군이므로 가해군이 아닙니다. $S_6$도 $A_5$를 부분군으로 포함하므로 가해군이 아닙니다.",
                "wrongAnalysis": "$S_5$나 $A_5$가 가해군이라고 착각하면 안 됩니다. $n \\geq 5$일 때 $S_n$과 $A_n$은 가해군이 아닙니다. $A_5$가 단순군이라는 사실이 핵심입니다."
            }
        ],
        "summary": {
            "keyPoints": [
                "아벨-루피니 정리: 5차 이상의 일반 다항식은 근호(사칙연산+거듭제곱근)로 풀 수 없다.",
                "갈루아 군 $\\text{Gal}(K/F)$은 분해체에서 기저체를 고정하는 자기동형사상들의 군이다.",
                "갈루아 대응: 중간체와 갈루아 군의 부분군이 일대일 대응한다.",
                "근호 풀이 가능 $\\iff$ 갈루아 군이 가해군. $S_5$는 $A_5$가 단순군이므로 비가해군이다.",
                "군론(갈루아 군), 환론(다항식환), 체론(체 확장)이 하나로 합쳐진 것이 갈루아 이론이다."
            ],
            "formulas": [
                "\\text{Gal}(K/F) = \\{\\sigma \\in \\text{Aut}(K) \\mid \\sigma|_F = \\text{id}_F\\}",
                "\\text{근호 풀이 가능} \\iff \\text{Gal}(K/F) \\text{이 가해군}",
                "S_n \\text{: 가해군 } (n \\leq 4),\\; \\text{비가해군 } (n \\geq 5)",
                "\\{e\\} \\trianglelefteq A_5 \\trianglelefteq S_5,\\; A_5 \\text{는 단순군}"
            ],
            "commonMistakes": [
                "아벨-루피니 정리를 '5차 이상은 근이 없다'고 오해하는 것 (근은 존재하지만 근호로 표현 불가)",
                "'모든 5차 방정식'이 풀 수 없다고 일반화하는 것 (갈루아 군이 가해군인 5차 방정식은 풀 수 있다)",
                "가해군과 아벨군을 혼동하는 것 (모든 아벨군은 가해군이지만 역은 성립하지 않는다)"
            ],
            "nextConnection": "환론과 체론, 그리고 갈루아 이론 입문까지 마치셨습니다. 축하합니다! 여기서부터 표현론(representation theory), 대수기하학(algebraic geometry), 가환대수학(commutative algebra) 등 현대 수학의 다양한 분야로 나아갈 수 있습니다. 군·환·체라는 대수적 구조의 언어는 수학 전반에 걸쳐 강력한 도구가 될 것입니다."
        }
    }
];
