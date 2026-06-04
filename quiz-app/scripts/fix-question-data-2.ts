import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

type Replacement = {
  file: string;
  from: string;
  to: string;
};

const dataRoot = "C:/Users/USER/Desktop/project/math/src/data";

const replacements: Replacement[] = [
  {
    file: "preschool/age5.ts",
    from: String.raw`        question: "동물원에 다리가 $4$개인 동물이 $2$마리 있어요. 다리는 모두 몇 개일까요?",
        choices: ["$4$개", "$6$개", "$8$개", "$10$개"],
        answer: "$8$개",
        hints: [
          "동물 한 마리의 다리가 $4$개예요.",
          "두 마리이니까 $4$개 + $4$개를 해야 해요!",
        ],
        explanation:
          "다리 $4$개짜리 동물이 $2$마리: $4 + 4 = 8$개! 같은 수를 반복해서 더하는 문제예요.",
        wrongAnalysis:
          "동물 수와 다리 수를 헷갈리지 마세요. 한 마리당 $4$개씩이에요!",`,
    to: String.raw`        question: "새 $2$마리가 있어요. 새 한 마리의 다리는 $2$개예요. 다리는 모두 몇 개일까요?",
        choices: ["$2$개", "$3$개", "$4$개", "$5$개"],
        answer: "$4$개",
        hints: [
          "새 한 마리의 다리가 $2$개예요.",
          "두 마리이니까 $2$개 + $2$개를 해요!",
        ],
        explanation:
          "새 한 마리의 다리는 $2$개이고, 새가 $2$마리이므로 $2 + 2 = 4$개예요.",
        wrongAnalysis:
          "새의 수와 다리 수를 헷갈리지 마세요. 한 마리마다 다리 $2$개씩 있어요!",`,
  },
  {
    file: "preschool/age5.ts",
    from: String.raw`        question: "접시 위에 과자가 있어요. 동그라미 과자는 $2$개, 세모 과자는 동그라미보다 $1$개 더 많고, 네모 과자는 세모보다 $1$개 더 많아요. 과자는 모두 몇 개일까요?",
        choices: ["$6$개", "$7$개", "$8$개", "$9$개"],
        answer: "$9$개",
        hints: [
          "동그라미 $2$개, 세모는 $2 + 1 = 3$개, 네모는 $3 + 1 = 4$개",
          "전부 합하면: $2 + 3 + 4 = ?$",
        ],
        explanation:
          "동그라미 $2$개, 세모 $3$개, 네모 $4$개. 전부 합하면 $2 + 3 + 4 = 9$개! 단계별로 수를 구한 뒤 모두 더해야 해요.",
        wrongAnalysis:
          "각 과자의 수를 먼저 하나씩 구하고, 마지막에 전부 합해야 해요.",`,
    to: String.raw`        question: "접시 위에 동그라미 과자 $2$개가 있어요. 세모 과자는 동그라미 과자보다 $1$개 더 많아요. 과자는 모두 몇 개일까요?",
        choices: ["$3$개", "$4$개", "$5$개", "$6$개"],
        answer: "$5$개",
        hints: [
          "세모 과자는 $2 + 1 = 3$개예요.",
          "동그라미 $2$개와 세모 $3$개를 합해요.",
        ],
        explanation:
          "동그라미 과자는 $2$개, 세모 과자는 $3$개예요. 모두 합하면 $2 + 3 = 5$개예요.",
        wrongAnalysis:
          "먼저 세모 과자 수를 구한 뒤, 동그라미 과자와 세모 과자를 모두 더해야 해요.",`,
  },
  {
    file: "preschool/age6.ts",
    from: String.raw`        question: "어떤 수에서 $3$을 빼면 $4$가 돼요. 어떤 수는 무엇일까요?",
        choices: ["$1$", "$5$", "$7$", "$9$"],
        answer: "$7$",
        hints: [
          "거꾸로 생각해요: $4$에 $3$을 다시 더하면?",
          "$4 + 3 = ?$",
        ],
        explanation:
          "$? - 3 = 4$ → 거꾸로: $4 + 3 = 7$! 어떤 수는 $7$이에요. 확인: $7 - 3 = 4$ ✓",
        wrongAnalysis:
          "빼기의 거꾸로는 더하기! 결과에 뺀 수를 다시 더하면 원래 수가 나와요.",`,
    to: String.raw`        question: "사과가 몇 개 있었는데 $3$개를 먹었더니 $4$개가 남았어요. 처음 사과는 몇 개였을까요?",
        choices: ["$1$", "$5$", "$7$", "$9$"],
        answer: "$7$",
        hints: [
          "남은 $4$개에 먹은 $3$개를 다시 더해요.",
          "$4 + 3 = ?$",
        ],
        explanation:
          "처음 사과 수는 남은 사과 $4$개와 먹은 사과 $3$개를 합하면 돼요. $4 + 3 = 7$개예요.",
        wrongAnalysis:
          "남은 수만 보거나 $4 - 3$을 하면 처음 수가 나오지 않아요. 남은 것과 먹은 것을 합해야 해요.",`,
  },
  {
    file: "preschool/age6.ts",
    from: String.raw`        question: "나는 어떤 수예요. $2$를 더하면 $6$이 되고, $1$을 빼면 $3$이 돼요. 나는 누구일까요?",
        choices: ["$3$", "$4$", "$5$", "$6$"],
        answer: "$4$",
        hints: [
          "첫 번째 단서: $? + 2 = 6$ → $? = 6 - 2$",
          "두 번째 단서로 확인: $? - 1 = 3$도 맞는지 확인!",
        ],
        explanation:
          "$6 - 2 = 4$! 확인: $4 + 2 = 6$ ✓, $4 - 1 = 3$ ✓ 두 조건 모두 맞으니 답은 $4$예요!",
        wrongAnalysis:
          "조건이 두 개일 때는 하나로 답을 구하고, 다른 하나로 확인해요.",`,
    to: String.raw`        question: "나는 어떤 수예요. $2$를 더하면 $6$이 돼요. 나는 누구일까요?",
        choices: ["$3$", "$4$", "$5$", "$6$"],
        answer: "$4$",
        hints: [
          "$4$에 $2$를 더하면 얼마인지 확인해요.",
          "$6$에서 $2$를 빼면 처음 수를 알 수 있어요.",
        ],
        explanation:
          "$6$이 되려면 처음 수에 $2$를 더했어요. 그래서 $6 - 2 = 4$이고, 확인하면 $4 + 2 = 6$이에요.",
        wrongAnalysis:
          "더한 뒤의 수 $6$을 답으로 고르면 안 돼요. 더하기 전의 수를 찾아야 해요.",`,
  },
  {
    file: "preschool/age7.ts",
    from: String.raw`        wrongAnalysis: "왼쪽부터 차례대로 계산하세요!",`,
    to: String.raw`        wrongAnalysis: "덧셈과 뺄셈이 섞여 있을 때 $5 + 4$를 먼저 하면 순서가 바뀌어요. 왼쪽부터 $8 - 5$를 먼저 계산해야 해요.",`,
  },
  {
    file: "preschool/age7.ts",
    from: String.raw`        question: "지우개 $3$개의 값은 연필 $6$자루의 값과 같아요. 지우개 $1$개는 연필 몇 자루와 같은 값일까요?",
        choices: ["$1$자루", "$2$자루", "$3$자루", "$4$자루"],
        answer: "$2$자루",
        hints: [
          "지우개 $3$개 = 연필 $6$자루",
          "지우개 $1$개 = 연필 $?$자루 (연필 $6$자루를 $3$으로 나눠요)",
        ],
        explanation:
          "연필 $6$자루를 지우개 $3$개로 나누면 = $2$자루! 한 개당 얼마인지 구하는 나눗셈의 기초예요.",
        wrongAnalysis:
          "전체를 똑같이 나누는 문제예요. $6$을 $3$묶음으로 나누면 각 묶음은 $2$개!",`,
    to: String.raw`        question: "연필 $6$자루를 상자 $3$개에 똑같이 나누어 넣었어요. 한 상자에 몇 자루씩 들어갈까요?",
        choices: ["$1$자루", "$2$자루", "$3$자루", "$4$자루"],
        answer: "$2$자루",
        hints: [
          "연필 $6$자루를 $3$묶음으로 나누어요.",
          "$2 + 2 + 2 = 6$인지 확인해요.",
        ],
        explanation:
          "연필 $6$자루를 상자 $3$개에 똑같이 나누면 $2$자루씩 들어가요. $6 \\div 3 = 2$예요.",
        wrongAnalysis:
          "상자 수를 답으로 고르면 안 돼요. 한 상자에 들어가는 연필 수를 묻고 있어요.",`,
  },
  {
    file: "preschool/age7.ts",
    from: String.raw`        choices: ["$1$시", "$2$시", "$3$시", "$4$시"],
        answer: "$2$시",`,
    to: String.raw`        choices: ["오후 $1$시", "오후 $2$시", "오후 $3$시", "오후 $4$시"],
        answer: "오후 $2$시",`,
  },
  {
    file: "preschool/age7.ts",
    from: String.raw`          "$9 + 4 = 13$, 하지만 $12$시 넘으면 오후! $13$시 = 오후 $1$시, $1 + 1 = 2$시! 시간 계산에서 $12$를 넘기는 것이 핵심이에요.",`,
    to: String.raw`          "$9 + 4 = 13$, 즉 오후 $1$시예요. 집에 오는 데 $1$시간 더 걸리므로 오후 $2$시에 도착해요.",`,
  },
  {
    file: "preschool/age7.ts",
    from: String.raw`          "시간이 $12$를 넘으면 오후로 바뀌어요. $13$시 = 오후 $1$시예요.",`,
    to: String.raw`          "오전과 오후를 구분해야 해요. $13$시는 오후 $1$시이고, 한 시간 더 지나면 오후 $2$시예요.",`,
  },
  {
    file: "preschool/age7.ts",
    from: String.raw`        question: "상자 안에 빨간 공, 파란 공, 노란 공이 있어요. 빨간 공은 $3$개, 전체는 $15$개, 파란 공은 노란 공보다 $2$개 더 많아요. 파란 공은 몇 개일까요?",
        choices: ["$5$개", "$6$개", "$7$개", "$8$개"],
        answer: "$7$개",
        hints: [
          "빨간 공을 빼면: $15 - 3 = 12$ (파란 + 노란 = $12$)",
          "파란이 노란보다 $2$개 더 많아요. $12$에서 $2$를 빼면 $10$, 반으로 나누면 노란 수가 나와요.",
        ],
        explanation:
          "파란 + 노란 = $15 - 3 = 12$. 파란이 $2$개 더 많으니 노란 = $(12 - 2) \\div 2 = 5$개, 파란 = $5 + 2 = 7$개! 검산: $3 + 7 + 5 = 15$ ✓",
        wrongAnalysis:
          "먼저 빨간 공을 빼서 나머지를 구하고, 조건에 맞게 나눠야 해요.",`,
    to: String.raw`        question: "상자 안에 빨간 공과 파란 공이 모두 $10$개 있어요. 빨간 공은 $3$개예요. 파란 공은 몇 개일까요?",
        choices: ["$5$개", "$6$개", "$7$개", "$8$개"],
        answer: "$7$개",
        hints: [
          "전체 $10$개에서 빨간 공 $3$개를 빼요.",
          "$10 - 3 = ?$",
        ],
        explanation:
          "전체 공은 $10$개이고 빨간 공은 $3$개예요. 파란 공은 $10 - 3 = 7$개예요.",
        wrongAnalysis:
          "전체 수와 한 부분을 알 때는 전체에서 아는 부분을 빼면 나머지 부분을 찾을 수 있어요.",`,
  },
  {
    file: "elementary/grade1.ts",
    from: String.raw`      question: "수 카드 $3$, $7$, $5$로 만들 수 있는 가장 큰 수와 가장 작은 수의 차이는 얼마일까요?",
      choices: ["$396$", "$297$", "$594$", "$504$"],
      answer: "$396$",
      hints: [
        "가장 큰 수: 큰 숫자부터 나열 → $753$",
        "가장 작은 수: 작은 숫자부터 나열 → $357$"
      ],
      explanation: "가장 큰 수: $753$, 가장 작은 수: $357$. $753 - 357 = 396$이에요.",
      wrongAnalysis: "숫자를 순서대로 나열하지 않으면 틀릴 수 있어요. 가장 큰 수는 내림차순, 가장 작은 수는 오름차순으로 만들어요."`,
    to: String.raw`      question: "수 카드 $3$, $7$로 만들 수 있는 가장 큰 두 자리 수와 가장 작은 두 자리 수의 차이는 얼마일까요?",
      choices: ["$34$", "$36$", "$40$", "$73$"],
      answer: "$36$",
      hints: [
        "가장 큰 두 자리 수는 $73$이에요.",
        "가장 작은 두 자리 수는 $37$이에요."
      ],
      explanation: "가장 큰 수는 $73$, 가장 작은 수는 $37$이에요. $73 - 37 = 36$입니다.",
      wrongAnalysis: "두 숫자를 한 번씩 써서 두 자리 수를 만들어야 해요. 큰 수와 작은 수를 만든 뒤 빼기를 합니다."`,
  },
  {
    file: "elementary/grade1.ts",
    from: String.raw`      question: "연필 $6$자루의 값이 사탕 $12$개의 값과 같아요. 연필 $1$자루는 사탕 몇 개의 값과 같을까요?",
      choices: ["$2$개", "$3$개", "$4$개", "$6$개"],
      answer: "$2$개",
      hints: [
        "연필 $6$자루 $=$ 사탕 $12$개",
        "연필 $1$자루는 $12$를 $6$으로 나눈 것이에요."
      ],
      explanation: "연필 $6$자루 $=$ 사탕 $12$개이므로, 연필 $1$자루 $=$ 사탕 $12 \\div 6 = 2$개예요.",
      wrongAnalysis: "$6 + 12 = 18$처럼 더하면 안 돼요. '같은 값'이라는 것은 나눗셈으로 연결해야 해요."`,
    to: String.raw`      question: "연필 $6$자루를 $3$자루씩 묶으면 몇 묶음이 될까요?",
      choices: ["$2$묶음", "$3$묶음", "$4$묶음", "$6$묶음"],
      answer: "$2$묶음",
      hints: [
        "$3$자루씩 한 묶음을 만들어요.",
        "$3 + 3 = 6$이므로 몇 묶음인지 세어 봐요."
      ],
      explanation: "연필 $3$자루씩 $2$묶음을 만들면 $6$자루가 됩니다. 그래서 $2$묶음이에요.",
      wrongAnalysis: "연필 전체 수 $6$자루를 답으로 쓰는 문제가 아니에요. $3$자루씩 나누어 만든 묶음 수를 묻고 있어요."`,
  },
  {
    file: "elementary/grade2.ts",
    from: String.raw`      question: "한 상자에 초콜릿이 $8$개씩 들어 있어요. $5$상자를 사서 $7$명에게 똑같이 나눠 주면 한 명에게 몇 개씩 줄 수 있고, 몇 개가 남나요?",
      choices: ["$5$개씩, $5$개 남음", "$6$개씩, $2$개 남음", "$5$개씩, $2$개 남음", "$4$개씩, $12$개 남음"],
      answer: "$5$개씩, $5$개 남음",
      hints: [
        "먼저 전체 초콜릿 수를 구해요: $8 \\times 5 = ?$",
        "$40 \\div 7$의 몫과 나머지를 구해요."
      ],
      explanation: "전체: $8 \\times 5 = 40$개. $40 \\div 7 = 5$ 나머지 $5$. 한 명에게 $5$개씩, $5$개 남음.",
      wrongAnalysis: "곱셈과 나눗셈 두 단계를 모두 정확히 해야 해요. 나머지를 구하는 것도 잊지 마세요."`,
    to: String.raw`      question: "한 상자에 초콜릿이 $8$개씩 들어 있어요. $3$상자에는 초콜릿이 모두 몇 개일까요?",
      choices: ["$11$개", "$16$개", "$24$개", "$32$개"],
      answer: "$24$개",
      hints: [
        "한 상자에 $8$개씩 있어요.",
        "$8 + 8 + 8$ 또는 $8 \\times 3$을 계산해요."
      ],
      explanation: "한 상자에 $8$개씩 있고 $3$상자이므로 $8 \\times 3 = 24$개예요.",
      wrongAnalysis: "$8 + 3 = 11$처럼 상자 수를 더하면 안 돼요. 같은 수가 여러 묶음 있을 때는 곱셈으로 구해요."`,
  },
  {
    file: "elementary/grade3.ts",
    from: String.raw`      "question": "큰 원의 반지름이 $12$cm이고, 큰 원 안에 같은 크기의 작은 원 $4$개가 빈틈없이 들어 있어요. 작은 원의 지름은 몇 cm인가요?",
      "choices": ["$6$cm", "$8$cm", "$10$cm", "$12$cm"],
      "answer": "$12$cm",
      "hints": [
        "작은 원 $4$개가 큰 원 안에 빈틈없이 $2 \\times 2$ 배열로 들어 있다고 생각해요.",
        "작은 원의 지름 $2$개가 큰 원의 지름과 같아요."
      ],
      "explanation": "큰 원의 지름 $= 12 \\times 2 = 24$cm. 작은 원이 한 줄에 $2$개씩이므로 작은 원의 지름 $= 24 \\div 2 = 12$cm.",
      "wrongAnalysis": "큰 원의 반지름과 지름을 혼동하면 틀려요. 반지름 $12$cm는 지름 $24$cm이에요."`,
    to: String.raw`      "question": "큰 원의 지름을 따라 같은 크기의 작은 원 $2$개가 나란히 놓여 있어요. 큰 원의 지름이 $12$cm라면 작은 원의 지름은 몇 cm인가요?",
      "choices": ["$3$cm", "$4$cm", "$6$cm", "$12$cm"],
      "answer": "$6$cm",
      "hints": [
        "작은 원 $2$개의 지름을 합하면 큰 원의 지름이 돼요.",
        "$12 \\div 2$를 계산해요."
      ],
      "explanation": "큰 원의 지름 $12$cm가 작은 원 지름 $2$개와 같아요. 그래서 작은 원의 지름은 $12 \\div 2 = 6$cm예요.",
      "wrongAnalysis": "큰 원의 지름 전체를 작은 원 하나의 지름으로 보면 안 돼요. 작은 원 두 개가 나란히 있으므로 둘로 나누어야 해요."`,
  },
  {
    file: "elementary/grade3.ts",
    from: String.raw`      "question": "$\\frac{1}{3}$과 $\\frac{1}{4}$ 중 어느 쪽이 얼마나 더 큰가요?",
      "choices": ["$\\frac{1}{3}$이 $\\frac{1}{12}$만큼 더 크다", "$\\frac{1}{4}$이 $\\frac{1}{12}$만큼 더 크다", "같다", "$\\frac{1}{3}$이 $\\frac{1}{7}$만큼 더 크다"],
      "answer": "$\\frac{1}{3}$이 $\\frac{1}{12}$만큼 더 크다",
      "hints": [
        "분모를 통일해요. $3$과 $4$의 최소공배수는 $12$예요.",
        "$\\frac{1}{3} = \\frac{4}{12}$, $\\frac{1}{4} = \\frac{3}{12}$"
      ],
      "explanation": "$\\frac{1}{3} = \\frac{4}{12}$, $\\frac{1}{4} = \\frac{3}{12}$. 차이: $\\frac{4}{12} - \\frac{3}{12} = \\frac{1}{12}$. $\\frac{1}{3}$이 $\\frac{1}{12}$만큼 더 커요.",
      "wrongAnalysis": "단위분수에서 분모가 작을수록 큰 수라는 것만으로는 '얼마나' 더 큰지 알 수 없어요. 통분해야 정확한 차이를 구할 수 있어요."`,
    to: String.raw`      "question": "$\\frac{1}{3}$과 $\\frac{1}{4}$ 중 어느 쪽이 더 큰가요?",
      "choices": ["$\\frac{1}{3}$", "$\\frac{1}{4}$", "같다", "비교할 수 없다"],
      "answer": "$\\frac{1}{3}$",
      "hints": [
        "분자가 같은 분수에서는 분모가 작을수록 한 조각이 커요.",
        "$3$등분한 한 조각과 $4$등분한 한 조각을 떠올려요."
      ],
      "explanation": "같은 전체를 $3$등분한 한 조각은 $4$등분한 한 조각보다 커요. 그래서 $\\frac{1}{3} > \\frac{1}{4}$입니다.",
      "wrongAnalysis": "분모가 큰 $\\frac{1}{4}$를 더 크다고 생각하면 안 돼요. 단위분수에서는 분모가 작을수록 한 조각이 큽니다."`,
  },
  {
    file: "elementary/grade3.ts",
    from: String.raw`      "question": "직사각형의 가로가 $15$cm, 세로가 $8$cm예요. 이 직사각형의 둘레와 같은 둘레를 가진 정사각형의 한 변의 길이는?",
      "choices": ["$11$cm", "$11.5$cm", "$12$cm", "$23$cm"],
      "answer": "$11.5$cm",
      "hints": [
        "직사각형 둘레: $(15 + 8) \\times 2 = ?$",
        "정사각형 둘레 $=$ 한 변 $\\times 4$이므로 둘레를 $4$로 나눠요."
      ],
      "explanation": "직사각형 둘레: $(15 + 8) \\times 2 = 46$cm. 정사각형 한 변: $46 \\div 4 = 11.5$cm.",
      "wrongAnalysis": "둘레를 $(15 + 8) = 23$cm로만 계산하고 $2$를 곱하지 않으면 틀려요. 직사각형 둘레는 $(가로 + 세로) \\times 2$예요."`,
    to: String.raw`      "question": "직사각형의 가로가 $14$cm, 세로가 $10$cm예요. 이 직사각형의 둘레와 같은 둘레를 가진 정사각형의 한 변의 길이는?",
      "choices": ["$10$cm", "$11$cm", "$12$cm", "$24$cm"],
      "answer": "$12$cm",
      "hints": [
        "직사각형 둘레: $(14 + 10) \\times 2 = ?$",
        "정사각형 둘레 $=$ 한 변 $\\times 4$이므로 둘레를 $4$로 나눠요."
      ],
      "explanation": "직사각형 둘레는 $(14 + 10) \\times 2 = 48$cm예요. 정사각형 한 변은 $48 \\div 4 = 12$cm입니다.",
      "wrongAnalysis": "가로와 세로를 더한 $24$cm는 둘레가 아니에요. 직사각형 둘레는 $(가로 + 세로) \\times 2$입니다."`,
  },
  {
    file: "elementary/grade4.ts",
    from: String.raw`      "answer": "1과 2/6",`,
    to: String.raw`      "answer": "1\\frac{2}{6}",`,
  },
  {
    file: "elementary/grade4.ts",
    from: String.raw`      "choices": ["$5\\frac{5}{5}$", "$6$", "$5\\frac{5}{10}$", "$5\\frac{1}{5}$"],`,
    to: String.raw`      "choices": ["$5\\frac{4}{5}$", "$6$", "$5\\frac{5}{10}$", "$5\\frac{1}{5}$"],`,
  },
  {
    file: "elementary/grade4.ts",
    from: String.raw`      "wrongAnalysis": "$\\frac{5}{5}$를 $1$로 바꾸지 않고 $5\\frac{5}{5}$로 쓰면 틀려요. $\\frac{5}{5} = 1$이므로 자연수 부분에 $1$을 더해야 해요."`,
    to: String.raw`      "wrongAnalysis": "$\\frac{5}{5}$는 $1$이므로 자연수 부분에 더해야 해요. 분수 부분만 보고 자연수 올림을 놓치면 틀립니다."`,
  },
  {
    file: "elementary/grade5.ts",
    from: String.raw`      "choices": ["$\\frac{1}{3}$", "$\\frac{2}{3}$", "$\\frac{5}{15}$", "$\\frac{2}{5}$"],`,
    to: String.raw`      "choices": ["$\\frac{1}{3}$", "$\\frac{2}{3}$", "$\\frac{3}{5}$", "$\\frac{2}{5}$"],`,
  },
  {
    file: "elementary/grade5.ts",
    from: String.raw`      "question": "물 $\\frac{5}{6}$L의 $\\frac{3}{10}$은 몇 L인가요?",`,
    to: String.raw`      "question": "물 $\\frac{5}{6}$L의 $\\frac{3}{10}$은 기약분수로 몇 L인가요?",`,
  },
  {
    file: "elementary/grade5.ts",
    from: String.raw`      "question": "$0.4 \\times 0.5$의 값은?",`,
    to: String.raw`      "question": "$0.4 \\times 0.5$의 값을 소수 둘째 자리까지 나타내면?",`,
  },
  {
    file: "elementary/grade5.ts",
    from: String.raw`      "choices": ["$\\frac{15}{60}$", "$\\frac{1}{4}$", "$\\frac{1}{2}$", "$\\frac{3}{12}$"],`,
    to: String.raw`      "choices": ["$\\frac{15}{16}$", "$\\frac{1}{4}$", "$\\frac{1}{2}$", "$\\frac{2}{5}$"],`,
  },
  {
    file: "elementary/grade5.ts",
    from: String.raw`      "wrongAnalysis": "약분 없이 $\\frac{15}{60}$까지만 계산하는 경우가 있어요. $\\frac{15}{60} = \\frac{1}{4}$로 기약분수를 만들어야 해요."`,
    to: String.raw`      "wrongAnalysis": "분자끼리 곱하고 분모끼리 곱한 뒤 반드시 약분해야 해요. 계산하면 $\\frac{15}{60}$이고, 이를 기약분수로 줄이면 $\\frac{1}{4}$입니다."`,
  },
  {
    file: "elementary/grade6.ts",
    from: String.raw`      "question": "$\\frac{2}{3} \\div \\frac{4}{9}$의 값은?",`,
    to: String.raw`      "question": "$\\frac{2}{3} \\div \\frac{4}{9}$의 값을 대분수로 나타내면?",`,
  },
  {
    file: "elementary/grade6.ts",
    from: String.raw`      "question": "동전 $4$개를 동시에 던질 때, 나올 수 있는 모든 경우의 수는?",`,
    to: String.raw`      "question": "서로 구별되는 동전 $4$개를 동시에 던질 때, 앞면과 뒷면이 나오는 모든 배열의 수는?",`,
  },
  {
    file: "elementary/grade6.ts",
    from: String.raw`      "question": "빨간 공 $3$개, 파란 공 $2$개, 노란 공 $1$개가 들어 있는 주머니에서 공 $1$개를 꺼낼 때, 빨간 공이 나올 확률은?",`,
    to: String.raw`      "question": "빨간 공 $3$개, 파란 공 $2$개, 노란 공 $1$개가 들어 있는 주머니에서 빨간 공의 비율은?",`,
  },
  {
    file: "elementary/grade6.ts",
    from: String.raw`      "explanation": "전체: $3 + 2 + 1 = 6$개. 빨간 공: $3$개. 확률: $\\frac{3}{6} = \\frac{1}{2}$.",`,
    to: String.raw`      "explanation": "전체 공은 $3 + 2 + 1 = 6$개이고, 빨간 공은 $3$개예요. 빨간 공의 비율은 $\\frac{3}{6} = \\frac{1}{2}$입니다.",`,
  },
  {
    file: "elementary/grade6.ts",
    from: String.raw`      "wrongAnalysis": "색깔이 $3$종류이므로 $\\frac{1}{3}$이라고 생각하면 안 돼요. 각 색의 공 개수가 다르므로 개수로 확률을 구해야 해요."`,
    to: String.raw`      "wrongAnalysis": "색깔이 $3$종류라고 해서 각 비율이 모두 $\\frac{1}{3}$이 되는 것은 아니에요. 전체 개수 중 빨간 공의 개수로 비율을 구해야 합니다."`,
  },
  {
    file: "english/grade5.ts",
    from: String.raw`      "explanation": "첫 문장에는 최상급(the + ~est)이, 두 번째에는 비교급(~er + than)이 필요합니다. 'high'는 원형이므로 어느 빈칸에도 바로 넣을 수 없어요.",
      "wrongAnalysis": "원형 형용사는 비교급이나 최상급 자리에 그대로 올 수 없어요. the가 있으면 최상급, than이 있으면 비교급이 필요합니다."`,
    to: String.raw`      "explanation": "첫 문장에는 최상급이 필요하므로 the highest가 자연스럽습니다. 두 번째 문장에는 than이 있으므로 비교급 faster가 필요해요. 따라서 highest / fast는 두 번째 빈칸이 원형이라 알맞지 않습니다.",
      "wrongAnalysis": "fast는 원형이라 than 앞의 비교급 자리에 맞지 않아요. than이 있으면 faster처럼 비교급을 써야 합니다."`,
  },
  {
    file: "english/grade6.ts",
    from: String.raw`      question: "다음 중 올바른 조건문은?",`,
    to: String.raw`      question: "다음 중 미래 결과를 나타내는 조건문은?",`,
  },
  {
    file: "generalKnowledge/age5.ts",
    from: String.raw`        explanation: "펭귄은 남극처럼 아주 추운 곳에서 살아요. 날지는 못하지만 수영을 잘해요.",
        wrongAnalysis: "사막은 더운 곳이에요. 펭귄은 추운 남극에서 살아요.",`,
    to: String.raw`        explanation: "황제펭귄은 남극에 사는 대표적인 펭귄이에요. 펭귄은 종류에 따라 사는 곳이 다르지만, 황제펭귄은 남극으로 배우면 좋아요.",
        wrongAnalysis: "사막과 숲속, 강은 황제펭귄이 사는 대표적인 곳이 아니에요. 황제펭귄은 남극의 추운 환경에서 살아요.",`,
  },
  {
    file: "generalKnowledge/age5.ts",
    from: String.raw`        explanation: "딸기는 씨가 겉에 있는 특별한 과일이에요! 작은 점처럼 보이는 게 씨예요.",
        wrongAnalysis: "사과, 수박, 포도의 씨는 안에 있어요. 씨가 겉에 있는 건 딸기예요.",`,
    to: String.raw`        explanation: "딸기 겉에는 씨처럼 보이는 작은 점들이 많이 있어요. 그래서 모양을 보고 딸기를 고를 수 있어요.",
        wrongAnalysis: "사과, 수박, 포도는 겉에 딸기처럼 작은 점들이 많이 보이지 않아요.",`,
  },
  {
    file: "generalKnowledge/age5.ts",
    from: String.raw`        explanation: "지하철은 땅 아래(지하)를 달리는 기차예요! 도시에서 빠르게 이동할 수 있어요.",
        wrongAnalysis: "하늘은 비행기가 날아요. 지하철은 이름처럼 지하를 달려요.",`,
    to: String.raw`        explanation: "지하철은 이름처럼 주로 땅 아래의 길을 달린다고 배워요. 도시와 노선에 따라 땅 위로 달리는 구간도 있어요.",
        wrongAnalysis: "하늘은 비행기가 다니는 곳이에요. 지하철은 이름의 '지하'처럼 땅 아래를 떠올리면 됩니다.",`,
  },
  {
    file: "generalKnowledge/age6.ts",
    from: String.raw`        explanation: "기자와 아나운서는 세상의 소식을 사람들에게 전달해요!",
        wrongAnalysis: "가수는 노래를 불러요. 뉴스를 전달하는 건 기자나 아나운서예요.",`,
    to: String.raw`        explanation: "아나운서는 방송에서 뉴스를 읽고 전달하는 일을 해요. 기자는 현장에서 취재하고 기사를 쓰는 일을 주로 합니다.",
        wrongAnalysis: "가수는 노래를 부르고, 화가는 그림을 그려요. 이 문제처럼 뉴스를 읽어 전달하는 사람은 아나운서예요.",`,
  },
  {
    file: "generalKnowledge/age7.ts",
    from: String.raw`        explanation: "독도는 울릉도에서 약 87km 떨어져 있는 가장 가까운 섬이에요.",
        wrongAnalysis: "독도는 울릉도에서 가장 가까운 섬이에요. 제주도는 남쪽에 있어서 멀어요."`,
    to: String.raw`        explanation: "독도는 울릉도에서 동쪽으로 약 87km 떨어져 있으며, 우리나라의 동쪽 끝 섬으로 배워요.",
        wrongAnalysis: "제주도와 거제도, 백령도는 독도가 아니에요. '울릉도 동쪽'과 '우리나라 동쪽 끝'이라는 단서가 독도를 가리켜요."`,
  },
  {
    file: "generalKnowledge/age7.ts",
    from: String.raw`        explanation: "귤에는 비타민 C가 많아서 감기 예방에 좋아요. 레몬, 오렌지도 비타민 C가 풍부해요.",
        wrongAnalysis: "바나나는 칼륨이, 포도는 포도당이 많아요. 비타민 C는 귤, 레몬, 오렌지에 많아요."`,
    to: String.raw`        explanation: "귤에는 비타민 C가 많아 건강 유지에 도움이 돼요. 레몬과 오렌지도 비타민 C가 풍부한 과일이에요.",
        wrongAnalysis: "바나나, 포도, 수박도 좋은 과일이지만 이 보기에서 비타민 C가 많은 대표 과일은 귤이에요."`,
  },
  {
    file: "generalKnowledge/age8.ts",
    from: String.raw`        explanation: "에디슨은 실용적인 전구를 발명해서 밤에도 밝게 생활할 수 있게 해줬어요.",
        wrongAnalysis: "뉴턴은 만유인력, 라이트 형제는 비행기, 벨은 전화기를 만든 사람이에요."`,
    to: String.raw`        explanation: "에디슨은 오래 쓸 수 있는 실용적인 백열전구를 개발하고 널리 보급한 인물로 유명해요.",
        wrongAnalysis: "뉴턴은 만유인력, 라이트 형제는 비행, 벨은 전화기 발명으로 알려져 있어요."`,
  },
  {
    file: "generalKnowledge/age8.ts",
    from: String.raw`        hints: ["기차를 처음 만든 사람이에요.", "영국의 발명가예요."],
        explanation: "스티븐슨은 증기 기관차를 발명해서 사람과 물건을 빠르게 운반할 수 있게 했어요.",
        wrongAnalysis: "와트는 증기 기관을 개선했고, 스티븐슨은 그것을 이용해 기관차를 만들었어요."`,
    to: String.raw`        hints: ["증기 기관차의 발전과 철도 보급으로 유명해요.", "영국의 기술자예요."],
        explanation: "스티븐슨은 증기 기관차의 성능을 높이고 철도 보급에 크게 기여한 인물로 알려져 있어요.",
        wrongAnalysis: "와트는 증기 기관 개선으로 유명하고, 스티븐슨은 증기 기관차와 철도 발전으로 유명해요."`,
  },
  {
    file: "generalKnowledge/age8.ts",
    from: String.raw`        wrongAnalysis: "다윈은 진화론, 뉴턴은 만유인력이에요. 백신은 파스퇴르가 만들었어요."`,
    to: String.raw`        wrongAnalysis: "다윈은 진화론, 뉴턴은 만유인력으로 유명해요. 광견병 백신과 세균 연구는 파스퇴르와 관련이 깊어요."`,
  },
  {
    file: "generalKnowledge/age8.ts",
    from: String.raw`        explanation: "직지심체요절은 고려시대에 금속 활자로 인쇄된 세계에서 가장 오래된 금속 활자 인쇄물이에요.",`,
    to: String.raw`        explanation: "직지심체요절은 현존하는 세계에서 가장 오래된 금속활자 인쇄본으로 알려져 있어요.",`,
  },
  {
    file: "generalKnowledge/age8.ts",
    from: String.raw`        explanation: "아인슈타인은 상대성 이론을 발견했어요. 시간과 공간, 에너지에 대한 혁명적인 이론이에요.",
        wrongAnalysis: "만유인력은 뉴턴, 진화론은 다윈이에요. 아인슈타인은 상대성 이론을 발견했어요."`,
    to: String.raw`        explanation: "아인슈타인은 상대성 이론을 세운 과학자로 유명해요. 시간과 공간, 에너지에 대한 중요한 이론이에요.",
        wrongAnalysis: "만유인력은 뉴턴, 진화론은 다윈과 관련이 깊어요. 아인슈타인은 상대성 이론으로 유명합니다."`,
  },
  {
    file: "generalKnowledge/age8.ts",
    from: String.raw`        question: "대한민국 최초 우주발사체의 이름은 무엇일까요?",`,
    to: String.raw`        question: "대한민국에서 발사에 성공한 첫 우주발사체의 이름은 무엇일까요?",`,
  },
  {
    file: "generalKnowledge/age8.ts",
    from: String.raw`        explanation: "나로호는 대한민국 최초의 우주발사체예요. 2013년에 나로 우주센터에서 발사에 성공했어요.",`,
    to: String.raw`        explanation: "나로호는 대한민국에서 발사에 성공한 첫 우주발사체예요. 2013년에 나로 우주센터에서 발사에 성공했어요.",`,
  },
  {
    file: "generalKnowledge/age9.ts",
    from: String.raw`      explanation: "이글루는 이누이트(에스키모)가 눈과 얼음으로 만든 반구형 집이에요. 바깥보다 안이 따뜻해요.",`,
    to: String.raw`      explanation: "이글루는 이누이트 등 북극 지역 사람들이 눈과 얼음으로 만든 반구형 집이에요. 바깥보다 안이 따뜻해요.",`,
  },
  {
    file: "generalKnowledge/age10.ts",
    from: String.raw`      explanation: "나일강은 아프리카에 있는 세계에서 가장 긴 강으로, 약 6,650km예요.",
      wrongAnalysis: "아마존강은 수량이 가장 많은 강이고, 길이가 가장 긴 강은 나일강이에요."`,
    to: String.raw`      explanation: "나일강은 일반 교과서에서 세계에서 가장 긴 강으로 자주 배워요. 다만 길이를 재는 기준에 따라 아마존강을 더 길게 보는 자료도 있어요.",
      wrongAnalysis: "아마존강은 수량이 매우 많은 강이에요. 이 문제는 일반 교과서에서 보통 배우는 가장 긴 강을 묻고 있으므로 나일강이 정답입니다."`,
  },
  {
    file: "generalKnowledge/age10.ts",
    from: String.raw`      explanation: "사하라 사막은 아프리카 북부에 있는 세계에서 가장 큰 사막이에요. 면적이 약 900만 km²예요.",
      wrongAnalysis: "고비 사막은 몽골과 중국에 있어요. 가장 큰 사막은 아프리카의 사하라 사막이에요."`,
    to: String.raw`      explanation: "사하라 사막은 아프리카 북부에 있는 세계에서 가장 큰 더운 사막이에요. 얼음 사막까지 포함하면 남극이 더 큽니다.",
      wrongAnalysis: "고비 사막은 몽골과 중국에 있어요. 이 문제는 '가장 큰 더운 사막'을 묻고 있으므로 사하라 사막이 정답입니다."`,
  },
  {
    file: "generalKnowledge/age10.ts",
    from: String.raw`      hints: ["여름 올림픽과 겨울 올림픽이 번갈아 열려요.", "최근 열린 올림픽을 생각해 봐요."],`,
    to: String.raw`      hints: ["하계 올림픽은 같은 종류끼리 $4$년마다 열려요.", "동계 올림픽도 같은 종류끼리 $4$년마다 열려요."],`,
  },
  {
    file: "generalKnowledge/age11.ts",
    from: String.raw`        hints: ["300석 내외입니다.", "지역구 의원과 비례대표 의원으로 구성됩니다."],`,
    to: String.raw`        hints: ["제22대 국회 기준 $300$명입니다.", "지역구 의원과 비례대표 의원으로 구성됩니다."],`,
  },
  {
    file: "generalKnowledge/age11.ts",
    from: String.raw`        explanation: "자율 주행은 로봇이나 자동차가 센서와 AI를 이용해 스스로 판단하고 움직이는 기술입니다.",
        wrongAnalysis: "원격 조종은 사람이 멀리서 조종하는 것이므로 자율 주행과 다릅니다."`,
    to: String.raw`        explanation: "자율 제어는 로봇이 센서와 프로그램, AI 등을 이용해 스스로 판단하고 움직이도록 하는 기술입니다.",
        wrongAnalysis: "원격 조종은 사람이 멀리서 조종하는 것이고, 수동 조작은 사람이 직접 다루는 것입니다. 스스로 판단하고 움직이면 자율 제어입니다."`,
  },
  {
    file: "generalKnowledge/age11.ts",
    from: String.raw`        explanation: "우주선이 지구 대기에 빠른 속도로 진입할 때 공기와의 마찰로 엄청난 열이 발생합니다. 이를 위해 내열 소재로 만듭니다.",
        wrongAnalysis: "태양에 가까워져서 뜨거워진다고 생각할 수 있지만, 실제로는 대기와의 마찰이 원인입니다."`,
    to: String.raw`        explanation: "우주선이 빠르게 대기에 진입하면 앞쪽 공기가 강하게 압축되고 대기와 상호작용하면서 큰 열이 생깁니다. 그래서 열 보호 장치가 필요합니다.",
        wrongAnalysis: "태양에 가까워져서가 아니라 지구 대기에 매우 빠르게 들어오며 공기와 충돌하고 압축되기 때문에 뜨거워집니다."`,
  },
  {
    file: "generalKnowledge/age11.ts",
    from: String.raw`        explanation: "수소는 연소할 때 산소와 결합하여 물(H₂O)만 생성하므로 오염 물질을 배출하지 않는 친환경 에너지입니다.",
        wrongAnalysis: "수소 에너지를 원자력과 혼동하면 방사성 물질을 배출한다고 착각할 수 있지만, 수소 연소는 물만 생성합니다."`,
    to: String.raw`        explanation: "수소는 사용하는 과정에서 이산화탄소를 거의 직접 배출하지 않고 물을 주로 만듭니다. 다만 수소를 만드는 방식에 따라 전체 배출량은 달라질 수 있어요.",
        wrongAnalysis: "수소 에너지는 원자력처럼 방사성 물질을 배출하는 방식이 아니에요. 또 사용 과정에서 온실가스를 많이 배출한다는 설명도 맞지 않습니다."`,
  },
  {
    file: "generalKnowledge/age12.ts",
    from: String.raw`        hints: ["하계 올림픽과 동계 올림픽이 번갈아 열립니다.", "가장 최근의 올림픽 개최 간격을 생각해 보세요."],`,
    to: String.raw`        hints: ["하계 올림픽은 같은 종류끼리 $4$년마다 열립니다.", "동계 올림픽도 같은 종류끼리 $4$년마다 열립니다."],`,
  },
  {
    file: "generalKnowledge/age12.ts",
    from: String.raw`        explanation: "G20은 세계 경제에 큰 영향을 미치는 주요 20개국(Group of 20)의 정상들이 모여 경제 문제를 논의하는 회의입니다.",
        wrongAnalysis: "G는 Group의 약자이고, 20은 참여 국가의 수를 나타냅니다."`,
    to: String.raw`        explanation: "G20은 세계 경제에 큰 영향을 미치는 주요 경제권들이 모여 경제와 국제 현안을 논의하는 협의체입니다.",
        wrongAnalysis: "G는 Group의 약자입니다. 20은 이름에 남아 있는 숫자이며, 현재 구성은 국가와 국제기구를 포함하는 주요 경제 협의체로 이해하면 됩니다."`,
  },
  {
    file: "generalKnowledge/age12.ts",
    from: String.raw`        explanation: "탄소중립은 이산화탄소 배출량을 최대한 줄이고, 남은 배출량은 산림 등으로 흡수하여 실질 배출량을 0으로 만드는 것입니다.",
        wrongAnalysis: "탄소를 전혀 사용하지 않는 것은 현실적으로 불가능합니다. 탄소중립은 배출과 흡수의 균형을 맞추는 것입니다."`,
    to: String.raw`        explanation: "탄소중립은 온실가스 배출을 최대한 줄이고, 남은 배출량은 흡수나 제거로 상쇄해 순배출량을 0으로 맞추는 것입니다.",
        wrongAnalysis: "탄소를 전혀 사용하지 않는다는 뜻이 아니에요. 배출량과 흡수·제거량의 균형을 맞추는 개념입니다."`,
  },
  {
    file: "generalKnowledge/age12.ts",
    from: String.raw`        explanation: "2015년 파리협정은 산업화 이전 대비 지구 평균 기온 상승을 2°C 이하, 가급적 1.5°C 이내로 억제하는 것을 목표로 합니다.",`,
    to: String.raw`        explanation: "2015년 파리협정은 산업화 이전 대비 지구 평균 기온 상승을 2°C보다 훨씬 낮게 유지하고, 1.5°C 이내로 제한하기 위해 노력하는 것을 목표로 합니다.",`,
  },
];

const missed: Replacement[] = [];
let applied = 0;

for (const replacement of replacements) {
  const filePath = join(dataRoot, replacement.file);
  const before = readFileSync(filePath, "utf8");
  if (!before.includes(replacement.from)) {
    missed.push(replacement);
    continue;
  }

  const after = before.split(replacement.from).join(replacement.to);
  writeFileSync(filePath, after, "utf8");
  applied += 1;
}

console.log(
  JSON.stringify(
    {
      applied,
      missed: missed.map((item) => item.file),
    },
    null,
    2,
  ),
);
