import { Lesson } from "../../types";

export const seriesRigorousLessons: Lesson[] = [
{
  "id": 18,
  "title": "급수 수렴의 엄밀한 기초",
  "category": "급수의 엄밀한 기초",
  "level": "심화",
  "question": "무한급수의 수렴을 엄밀하게 정의하고, 절대수렴과 조건부수렴은 어떻게 다른가?",
  "concept": {
    "intro": "이전 레슨에서 리만 적분의 엄밀한 이론을 완성했습니다. 이제 '무한히 많은 항을 더하는 것'의 엄밀한 의미를 다룹니다. 무한급수(infinite series) $\\sum_{n=1}^{\\infty} a_n$은 수열 $\\{a_n\\}$의 항을 무한히 더한 것이지만, 실제로 무한 번의 덧셈을 수행하는 것은 불가능합니다. 따라서 급수의 값은 부분합(partial sum)의 극한으로 정의됩니다.\n\n\n:::definition[급수의 수렴] 부분합 $S_N = \\sum_{n=1}^{N} a_n$으로 정의합니다. 급수 $\\sum_{n=1}^{\\infty} a_n$이 수렴한다는 것은 $\\lim_{N \\to \\infty} S_N$이 실수로 존재하는 것입니다. 이 극한값을 급수의 합이라 합니다. $\\varepsilon$-$N$ 정의로 풀어 쓰면: $\\forall \\varepsilon > 0$, $\\exists N_0 \\in \\mathbb{N}$ such that $N \\geq N_0 \\Rightarrow |S_N - S| < \\varepsilon$. 극한이 존재하지 않으면 급수는 발산합니다.\n\n:::\n\n:::theorem[급수의 코시 판정법] $\\sum a_n$이 수렴할 필요충분조건은 다음의 코시 조건이 성립하는 것입니다: $\\forall \\varepsilon > 0$, $\\exists N_0$ such that $m > n \\geq N_0 \\Rightarrow |a_{n+1} + a_{n+2} + \\cdots + a_m| < \\varepsilon$.\n\n**증명.** $\\sum a_n$이 수렴 $\\iff$ 부분합 수열 $\\{S_N\\}$이 수렴 $\\iff$ $\\{S_N\\}$이 코시 수열 (실수의 완비성) $\\iff$ $\\forall \\varepsilon > 0$, $\\exists N_0$: $m > n \\geq N_0 \\Rightarrow |S_m - S_n| < \\varepsilon$. 그런데 $S_m - S_n = a_{n+1} + a_{n+2} + \\cdots + a_m$이므로 코시 조건과 동치입니다. $\\square$\n\n:::\n\n:::theorem[발산 판정법] $\\sum a_n$이 수렴하면 $\\lim_{n \\to \\infty} a_n = 0$이다. 증명: 코시 조건에서 $m = n+1$로 놓으면 $|a_{n+1}| < \\varepsilon$. 대우: $a_n \\not\\to 0$이면 $\\sum a_n$은 발산한다.\n\n:::\n\n:::definition[절대수렴과 조건부수렴] $\\sum |a_n|$이 수렴하면 $\\sum a_n$은 절대수렴(absolutely convergent)한다고 합니다. $\\sum a_n$은 수렴하지만 $\\sum |a_n|$이 발산하면 조건부수렴(conditionally convergent)한다고 합니다.\n\n:::\n\n:::theorem[절대수렴이면 수렴] 증명: $\\sum |a_n|$이 수렴하면 코시 조건에 의해 $|a_{n+1}| + \\cdots + |a_m| < \\varepsilon$. 삼각부등식에 의해 $|a_{n+1} + \\cdots + a_m| \\leq |a_{n+1}| + \\cdots + |a_m| < \\varepsilon$. 따라서 $\\sum a_n$도 코시 조건을 만족하여 수렴합니다. $\\square$\n:::\n\n역은 성립하지 않습니다: $\\sum \\frac{(-1)^{n+1}}{n} = \\ln 2$ (조건부수렴)이지만 $\\sum \\frac{1}{n}$은 발산합니다.\n\n\n:::theorem[리만 재배열 정리] 급수 $\\sum a_n$이 조건부수렴하면, 임의의 실수 $S$ (또는 $\\pm \\infty$)에 대해 항의 순서를 적절히 재배열하여 재배열된 급수의 합이 $S$가 되게 할 수 있습니다. 이는 조건부수렴의 '불안정성'을 보여주는 놀라운 결과입니다. 절대수렴하는 급수는 어떤 재배열에 대해서도 같은 값으로 수렴합니다 — 이것이 절대수렴이 중요한 이유입니다.\n:::",
    "intuition": "무한급수의 수렴을 이해하려면, 끝없이 돈을 더하는 상황을 떠올리세요. 매번 더하는 금액이 빠르게 줄어들어 총액이 어떤 값에 수렴하면(예: 1 + 0.5 + 0.25 + ... = 2) 급수가 수렴하는 것입니다.\n\n코시 판정법은 '뒤쪽 항들의 합이 아무리 길게 잡아도 작다'는 것으로, 부분합이 정착(settle down)한다는 뜻입니다.\n\n절대수렴과 조건부수렴의 차이는 중요합니다. 절대수렴은 양수·음수 항 모두의 크기를 합해도 유한하므로 '안전하게' 수렴합니다. 조건부수렴은 양수 항과 음수 항의 상쇄 덕분에 수렴하는 것이므로, 항의 순서를 바꾸면 상쇄 패턴이 달라져 다른 값으로 수렴할 수 있습니다. 이것이 리만 재배열 정리의 핵심입니다.\n\n비유하자면, 절대수렴은 '수입과 지출을 각각 합산해도 둘 다 유한한 가계부'이고, 조건부수렴은 '수입도 무한, 지출도 무한인데 순서대로 합산하면 잔고가 어떤 값에 수렴하는 가계부'입니다. 후자는 기장 순서를 바꾸면 잔고가 완전히 달라집니다.",
    "formula": "S_N = \\sum_{n=1}^{N} a_n,\\quad \\sum_{n=1}^{\\infty} a_n = \\lim_{N \\to \\infty} S_N\n\\text{코시 조건: } \\forall \\varepsilon > 0,\\; \\exists N_0:\\; m > n \\geq N_0 \\Rightarrow |a_{n+1} + \\cdots + a_m| < \\varepsilon\n\\text{절대수렴: } \\sum |a_n| < \\infty \\Rightarrow \\sum a_n \\text{ 수렴}\n\\text{조건부수렴: } \\sum a_n \\text{ 수렴},\\; \\sum |a_n| = \\infty",
    "summary": "급수 $\\sum a_n$의 수렴은 부분합 수열의 극한 존재로 정의된다.\n코시 판정법: $\\sum a_n$ 수렴 $\\iff$ 부분합이 코시 수열 $\\iff$ 뒤쪽 항들의 합이 임의로 작아진다.\n절대수렴($\\sum |a_n| < \\infty$)이면 수렴하지만, 역은 성립하지 않는다 (조건부수렴의 존재).\n리만 재배열 정리: 조건부수렴 급수는 재배열로 아무 값이나 만들 수 있다. 절대수렴 급수는 재배열에 불변이다."
  },
  "examples": [
    {
      "title": "절대수렴이 수렴을 함의함을 코시 조건으로 증명하기",
      "problem": "$\\sum |a_n|$이 수렴하면 $\\sum a_n$도 수렴함을 코시 판정법으로 증명하시오.",
      "steps": [
        "$\\sum |a_n|$이 수렴하므로 코시 조건을 만족한다: $\\forall \\varepsilon > 0$, $\\exists N_0$: $m > n \\geq N_0 \\Rightarrow |a_{n+1}| + |a_{n+2}| + \\cdots + |a_m| < \\varepsilon$.",
        "삼각부등식에 의해: $|a_{n+1} + a_{n+2} + \\cdots + a_m| \\leq |a_{n+1}| + |a_{n+2}| + \\cdots + |a_m| < \\varepsilon$.",
        "따라서 $\\sum a_n$도 코시 조건을 만족한다.",
        "실수의 완비성에 의해 코시 조건을 만족하는 수열은 수렴하므로, $\\sum a_n$은 수렴한다. $\\square$"
      ],
      "answer": "삼각부등식 $|a_{n+1} + \\cdots + a_m| \\leq |a_{n+1}| + \\cdots + |a_m|$과 $\\sum |a_n|$의 코시 조건으로부터 $\\sum a_n$의 코시 조건이 따라나와 수렴이 보장된다.",
      "lesson": "이 증명의 핵심은 삼각부등식과 코시 조건의 결합입니다. 절대값을 벗기면 크기가 줄어들거나 같으므로, 절대값 급수의 수렴이 원래 급수의 수렴을 함의합니다."
    },
    {
      "title": "[기본] 발산 판정법의 적용",
      "problem": "$\\sum_{n=1}^{\\infty} \\frac{n}{n+1}$이 발산함을 발산 판정법으로 보이시오.",
      "steps": [
        "$a_n = \\frac{n}{n+1}$이다.",
        "$\\lim_{n \\to \\infty} a_n = \\lim_{n \\to \\infty} \\frac{n}{n+1} = 1 \\neq 0$이다.",
        "발산 판정법: $\\lim a_n \\neq 0$이면 $\\sum a_n$은 발산한다.",
        "따라서 $\\sum \\frac{n}{n+1}$은 발산한다."
      ],
      "answer": "$\\lim \\frac{n}{n+1} = 1 \\neq 0$이므로 발산 판정법에 의해 급수는 발산한다.",
      "lesson": "$a_n \\to 0$은 수렴의 필요조건입니다. $a_n \\not\\to 0$이면 급수는 반드시 발산합니다. 단, $a_n \\to 0$이라고 수렴이 보장되지는 않습니다 (조화급수 반례)."
    },
    {
      "title": "[응용] 등비급수의 코시 조건 확인",
      "problem": "$\\sum_{n=0}^{\\infty} r^n$ ($|r| < 1$)이 코시 조건을 만족함을 보이시오.",
      "steps": [
        "$|a_{n+1} + a_{n+2} + \\cdots + a_m| = |r^{n+1} + r^{n+2} + \\cdots + r^m|$이다.",
        "$\\leq |r|^{n+1} + |r|^{n+2} + \\cdots + |r|^m = |r|^{n+1} \\cdot \\frac{1 - |r|^{m-n}}{1 - |r|}$이다.",
        "$\\leq \\frac{|r|^{n+1}}{1 - |r|}$이다.",
        "$|r| < 1$이므로 $|r|^{n+1} \\to 0$이다. 따라서 $N$을 $\\frac{|r|^{N+1}}{1 - |r|} < \\varepsilon$이 되도록 택하면 코시 조건이 만족된다."
      ],
      "answer": "$|r^{n+1} + \\cdots + r^m| \\leq \\frac{|r|^{n+1}}{1 - |r|} \\to 0$이므로 코시 조건을 만족한다.",
      "lesson": "등비급수의 코시 조건은 등비급수 부분합 공식으로 직접 확인할 수 있습니다. 수렴반경 내에서 급수의 꼬리가 기하급수적으로 줄어듭니다."
    },
    {
      "title": "[응용] 교대급수 판정법(라이프니츠)",
      "problem": "$\\sum_{n=1}^{\\infty} \\frac{(-1)^{n+1}}{\\sqrt{n}}$이 수렴함을 교대급수 판정법으로 보이시오.",
      "steps": [
        "$b_n = \\frac{1}{\\sqrt{n}}$으로 놓으면 $\\sum \\frac{(-1)^{n+1}}{\\sqrt{n}} = \\sum (-1)^{n+1} b_n$이다.",
        "$b_n > 0$이고 $b_n = 1/\\sqrt{n}$은 단조감소이다.",
        "$\\lim_{n \\to \\infty} b_n = 0$이다.",
        "교대급수 판정법의 세 조건 (양수, 단조감소, $0$으로 수렴)이 모두 만족되므로 수렴한다.",
        "절대수렴 여부: $\\sum 1/\\sqrt{n}$은 $p$-급수 ($p = 1/2 < 1$)로 발산. 따라서 조건부수렴이다."
      ],
      "answer": "교대급수 판정법에 의해 수렴한다. $\\sum 1/\\sqrt{n}$은 발산하므로 조건부수렴이다.",
      "lesson": "교대급수 판정법은 양수·음수가 교대하는 급수의 수렴을 판별하는 핵심 도구입니다. 절대수렴이 아닌 조건부수렴임을 확인하는 것도 중요합니다."
    },
    {
      "title": "[심화] 리만 재배열의 구체적 예시",
      "problem": "$\\sum_{n=1}^{\\infty} \\frac{(-1)^{n+1}}{n} = \\ln 2$인 급수를 재배열하여 합이 $\\frac{3}{2}\\ln 2$가 되는 과정을 개략적으로 설명하시오.",
      "steps": [
        "원래 급수: $1 - \\frac{1}{2} + \\frac{1}{3} - \\frac{1}{4} + \\cdots = \\ln 2$이다.",
        "재배열 전략: 양수 항을 $\\frac{3}{2}\\ln 2$를 넘을 때까지 더하고, 음수 항을 $\\frac{3}{2}\\ln 2$ 아래로 내릴 때까지 더한다.",
        "양수 항: $1 + \\frac{1}{3} + \\frac{1}{5} + \\cdots$ (발산하므로 어떤 목표든 넘길 수 있다).",
        "음수 항: $-\\frac{1}{2} - \\frac{1}{4} - \\cdots$ (역시 $-\\infty$로 발산하므로 어떤 목표 아래로 내릴 수 있다).",
        "이 과정을 반복하면 부분합이 $\\frac{3}{2}\\ln 2$ 주위를 진동하며 수렴한다."
      ],
      "answer": "양수 항과 음수 항이 각각 $\\pm\\infty$로 발산하므로, 적절히 교대 배치하면 임의의 목표 $S = \\frac{3}{2}\\ln 2$로 수렴하게 할 수 있다.",
      "lesson": "리만 재배열 정리는 조건부수렴의 '불안정성'을 극적으로 보여줍니다. 절대수렴하는 급수에서는 이런 현상이 불가능합니다."
    }
  ],
  "problems": [
    {
      "id": "18-1",
      "type": "choice",
      "difficulty": 1,
      "question": "$\\sum a_n$이 수렴하면 반드시 성립하는 것은?",
      "choices": [
        "$\\sum |a_n|$도 수렴한다",
        "$\\lim_{n \\to \\infty} a_n = 0$이다",
        "$a_n > 0$이다",
        "$S_N$이 단조증가한다"
      ],
      "answer": "$\\lim_{n \\to \\infty} a_n = 0$이다",
      "hints": [
        "코시 조건에서 $m = n + 1$로 놓으면 어떻게 되는지 생각해보세요.",
        "$|a_{n+1}| < \\varepsilon$이 되므로 $a_n \\to 0$입니다.",
        "절대수렴은 수렴보다 강한 조건이므로 반드시 성립하지는 않습니다 (예: 교대급수)."
      ],
      "explanation": "$\\sum a_n$이 수렴하면 코시 조건에서 $m = n+1$로 놓으면 $|a_{n+1}| < \\varepsilon$이므로 $a_n \\to 0$입니다. 그러나 $\\sum |a_n|$의 수렴은 보장되지 않습니다: $\\sum (-1)^{n+1}/n = \\ln 2$이지만 $\\sum 1/n = \\infty$. $a_n$의 부호나 부분합의 단조성도 보장되지 않습니다.",
      "wrongAnalysis": "수렴하면 절대수렴도 한다고 착각하는 실수가 흔합니다. 조건부수렴하는 급수가 대표적 반례입니다."
    },
    {
      "id": "18-4",
      "type": "choice",
      "difficulty": 1,
      "question": "$a_n = \\frac{1}{n}$일 때 $\\sum_{n=1}^{\\infty} a_n$은?",
      "choices": [
        "수렴한다 ($a_n \\to 0$이므로)",
        "발산한다 (조화급수)",
        "절대수렴한다",
        "조건부수렴한다"
      ],
      "answer": "발산한다 (조화급수)",
      "hints": [
        "$a_n \\to 0$은 수렴의 필요조건이지 충분조건이 아닙니다.",
        "$\\sum 1/n$은 조화급수로, 대표적인 발산 급수입니다.",
        "$S_{2n} - S_n = \\frac{1}{n+1} + \\cdots + \\frac{1}{2n} \\geq n \\cdot \\frac{1}{2n} = \\frac{1}{2}$이므로 코시 조건이 실패합니다."
      ],
      "explanation": "$\\sum 1/n$은 조화급수로 발산합니다. $a_n = 1/n \\to 0$이지만, 이것은 수렴의 필요조건일 뿐 충분조건이 아닙니다. 코시 조건을 확인하면 $\\sum_{k=n+1}^{2n} 1/k \\geq n \\cdot 1/(2n) = 1/2$이므로 $\\varepsilon = 1/2$ 이하로 줄어들지 않아 발산합니다.",
      "wrongAnalysis": "'$a_n \\to 0$이면 급수도 수렴한다'는 가장 흔한 오류입니다. 조화급수 $\\sum 1/n$이 대표적 반례입니다."
    },
    {
      "id": "18-5",
      "type": "text",
      "difficulty": 2,
      "question": "절대수렴이 수렴보다 강한 조건인 이유를 예시를 들어 설명하시오.",
      "answer": "절대수렴은 Σ|a_n| < ∞을 의미하고, 이것은 Σa_n의 수렴을 함의한다. 역은 성립하지 않는다: Σ(-1)^{n+1}/n = ln2 (수렴)이지만 Σ1/n = ∞ (절대수렴 아님). 이러한 급수를 조건부수렴이라 한다.",
      "hints": [
        "절대수렴 $\\Rightarrow$ 수렴 (삼각부등식 + 코시 조건으로 증명).",
        "그러나 수렴 $\\not\\Rightarrow$ 절대수렴입니다.",
        "교대 조화급수 $\\sum (-1)^{n+1}/n$이 대표적 반례입니다."
      ],
      "explanation": "절대수렴($\\sum |a_n| < \\infty$)이면 삼각부등식에 의해 $\\sum a_n$도 수렴합니다. 그러나 역은 성립하지 않습니다: $\\sum (-1)^{n+1}/n = \\ln 2$로 수렴하지만, $\\sum 1/n = \\infty$이므로 절대수렴하지 않습니다. 이처럼 수렴하지만 절대수렴하지 않는 급수를 조건부수렴이라 합니다. 절대수렴은 재배열에 불변이지만, 조건부수렴은 재배열로 아무 값이나 될 수 있어 '불안정'합니다.",
      "wrongAnalysis": "수렴과 절대수렴을 같은 개념으로 혼동하는 실수가 많습니다. 차이를 보이려면 반드시 구체적 반례(교대 조화급수)를 제시해야 합니다."
    },
    {
      "id": "18-2",
      "type": "choice",
      "difficulty": 2,
      "question": "$\\sum \\frac{(-1)^{n+1}}{n}$에 대한 설명으로 올바른 것은?",
      "choices": [
        "절대수렴한다",
        "조건부수렴한다",
        "발산한다",
        "수렴하지만 합을 구할 수 없다"
      ],
      "answer": "조건부수렴한다",
      "hints": [
        "$\\sum \\frac{1}{n}$은 조화급수로 발산합니다.",
        "$\\sum \\frac{(-1)^{n+1}}{n} = 1 - \\frac{1}{2} + \\frac{1}{3} - \\cdots$는 라이프니츠 판정법에 의해 수렴합니다.",
        "수렴하지만 절대값 급수가 발산하므로 조건부수렴입니다."
      ],
      "explanation": "$\\sum \\frac{(-1)^{n+1}}{n}$은 교대급수로, $1/n$이 단조감소하고 $0$으로 수렴하므로 라이프니츠 판정법에 의해 수렴합니다 (합은 $\\ln 2$). 그러나 $\\sum |(-1)^{n+1}/n| = \\sum 1/n$은 조화급수로 발산합니다. 따라서 수렴하지만 절대수렴하지 않으므로 조건부수렴입니다.",
      "wrongAnalysis": "'$1/n \\to 0$이므로 $\\sum 1/n$도 수렴한다'는 흔한 착각입니다. $a_n \\to 0$은 수렴의 필요조건이지 충분조건이 아닙니다. 조화급수가 대표적 반례입니다."
    },
    {
      "id": "18-3",
      "type": "text",
      "difficulty": 3,
      "question": "리만 재배열 정리가 말하는 핵심 내용을 서술하고, 이것이 절대수렴과 조건부수렴의 차이를 어떻게 보여주는지 설명하시오.",
      "answer": "조건부수렴 급수는 항의 순서를 재배열하여 임의의 실수(또는 ±∞)로 수렴하게 만들 수 있다. 반면 절대수렴 급수는 어떤 재배열에도 같은 값으로 수렴한다. 따라서 절대수렴은 '안전한' 수렴이고, 조건부수렴은 양수·음수 항의 상쇄에 의존하는 '불안정한' 수렴이다.",
      "hints": [
        "조건부수렴에서는 양수 항의 합과 음수 항의 합이 모두 $\\pm\\infty$입니다.",
        "양수 항과 음수 항을 적절히 섞으면 어떤 목표값에도 도달할 수 있습니다.",
        "절대수렴에서는 양수 항의 합도, 음수 항의 합도 유한하므로 순서에 무관합니다."
      ],
      "explanation": "리만 재배열 정리: $\\sum a_n$이 조건부수렴하면 양수 항만의 급수 $\\sum a_n^+$와 음수 항만의 급수 $\\sum a_n^-$가 모두 발산합니다 (둘 다 유한이면 절대수렴이 되어 모순). 따라서 양수 항을 더해 원하는 값 $S$를 넘기고, 음수 항을 더해 $S$ 아래로 내리고, 다시 양수 항을 더하는 과정을 반복하면 임의의 $S$로 수렴하는 재배열을 구성할 수 있습니다. 절대수렴 급수는 양수 항과 음수 항 각각의 합이 유한하므로 재배열에 영향받지 않습니다.",
      "wrongAnalysis": "'모든 수렴 급수는 재배열에 불변이다'라고 생각하는 실수가 있습니다. 이는 절대수렴에만 해당하며, 조건부수렴 급수는 재배열에 극도로 민감합니다."
    }
  ],
  "summary": {
    "keyPoints": [
      "급수의 수렴은 부분합 수열 $S_N$의 극한 존재로 정의된다.",
      "코시 판정법: $\\sum a_n$ 수렴 $\\iff$ $|a_{n+1} + \\cdots + a_m| < \\varepsilon$ (코시 조건).",
      "절대수렴 $\\Rightarrow$ 수렴 (삼각부등식 + 코시 조건). 역은 성립하지 않음.",
      "리만 재배열 정리: 조건부수렴 급수는 재배열로 아무 값이나 될 수 있다. 절대수렴은 재배열에 불변."
    ],
    "formulas": [
      "\\sum a_n = \\lim_{N \\to \\infty} S_N = \\lim_{N \\to \\infty} \\sum_{n=1}^{N} a_n",
      "\\text{코시: } |a_{n+1} + \\cdots + a_m| < \\varepsilon \\;(m > n \\geq N_0)",
      "\\sum |a_n| < \\infty \\Rightarrow \\sum a_n \\text{ 수렴 (절대수렴 \\Rightarrow 수렴)}",
      "a_n \\to 0 \\text{은 수렴의 필요조건 (충분조건 아님)}"
    ],
    "commonMistakes": [
      "$a_n \\to 0$이면 $\\sum a_n$이 수렴한다고 착각하는 것 — 조화급수 $\\sum 1/n$이 반례",
      "수렴하면 절대수렴이라고 착각하는 것 — 조건부수렴 급수가 존재",
      "급수의 재배열이 항상 같은 값을 준다고 생각하는 것 — 조건부수렴에서는 틀림"
    ],
    "nextConnection": "급수 수렴의 기초를 세웠으니, 다음 레슨에서 함수열의 점별 수렴과 균등 수렴을 배웁니다."
  }
},
{
  "id": 19,
  "title": "함수열의 점별 수렴과 균등 수렴",
  "category": "급수",
  "level": "심화",
  "question": "함수열이 '각 점에서' 수렴하는 것과 '균등하게' 수렴하는 것은 어떻게 다른가?",
  "concept": {
    "intro": "지금까지 수열 $a_n \\to L$ 의 수렴을 다루었습니다. 이제 각 $n$ 마다 함수 $f_n$ 이 주어지는 **함수열(sequence of functions)** $\\{f_n\\}$ 의 수렴을 생각합니다. 함수열의 수렴에는 근본적으로 다른 두 가지 개념이 있으며, 그 차이가 해석학 전체를 관통합니다.\n\n**점별 수렴(pointwise convergence):** 정의역의 **각 점 $x$ 를 고정한 뒤**, 수열 $f_n(x)$ 가 수렴하면 됩니다. 엄밀하게는\n$$\\forall x \\in D,\\quad \\forall \\varepsilon > 0,\\quad \\exists N \\in \\mathbb{N} \\text{ s.t. } n \\geq N \\Rightarrow |f_n(x) - f(x)| < \\varepsilon.$$\n여기서 $N$ 은 $x$ 와 $\\varepsilon$ **모두에** 의존할 수 있습니다. 즉 점마다 수렴 속도가 다를 수 있습니다.\n\n**균등 수렴(uniform convergence):** $N$ 이 $\\varepsilon$ **에만** 의존하고 **모든 $x$ 에 대해 동시에** 성립합니다:\n$$\\forall \\varepsilon > 0,\\quad \\exists N \\in \\mathbb{N} \\text{ s.t. } n \\geq N \\Rightarrow \\sup_{x \\in D}|f_n(x) - f(x)| < \\varepsilon.$$\n즉 한 번 $N$ 을 잡으면 정의역의 어느 점에서나 오차가 $\\varepsilon$ 미만입니다.\n\n두 정의의 유일한 차이는 **한정사(quantifier)의 순서**입니다:\n• 점별: $\\forall x\\ \\forall \\varepsilon\\ \\exists N$ — $x$ 를 먼저 고정하고 $N$ 을 찾음\n• 균등: $\\forall \\varepsilon\\ \\exists N\\ \\forall x$ — $N$ 을 먼저 잡고 모든 $x$ 에 적용\n\n균등 수렴은 점별 수렴보다 강한 조건이므로, 균등 수렴이면 반드시 점별 수렴합니다. 역은 성립하지 않습니다.\n\n**핵심 예제:** $f_n(x) = x^n$ 을 $[0, 1]$ 에서 생각합니다.\n• $0 \\leq x < 1$ 이면 $x^n \\to 0$, $x = 1$ 이면 $x^n = 1 \\to 1$.\n• 따라서 점별 극한은 $f(x) = \\begin{cases} 0 & (0 \\leq x < 1) \\\\ 1 & (x = 1) \\end{cases}$ 로 **불연속**.\n• 각 $f_n$ 은 연속이지만 극한 $f$ 는 불연속 — 점별 수렴은 연속성을 보존하지 못합니다.\n• 균등 수렴 여부: $\\sup_{x \\in [0,1]}|x^n - f(x)| = \\sup_{x \\in [0,1)}x^n = 1$ (상한이 $1$ 에 가까이에서 아무리 크게 잡아도 $x^n$ 이 $1$ 가까이 됨) 이므로 $\\to 0$ 이 아닙니다. 따라서 **균등 수렴이 아닙니다**.\n\n**sup-노름 판정:** $\\|f_n - f\\|_\\infty = \\sup_{x \\in D}|f_n(x) - f(x)|$ 로 정의하면, $f_n \\to f$ 균등 $\\iff$ $\\|f_n - f\\|_\\infty \\to 0$ 입니다. 이것이 균등 수렴의 가장 실용적인 판정법입니다.",
    "intuition": "점별 수렴은 '각 관객이 제 자리에서 결국 조용해지는 것', 균등 수렴은 '공연장 전체의 소음이 동시에 기준 이하로 내려가는 것' 에 비유할 수 있습니다. 점별 수렴에서는 뒷줄 관객이 매우 느리게 조용해져도 상관없지만, 균등 수렴은 모든 좌석에서 동시에 조용해야 합니다.\n\n그래프로 보면, $f_n$ 의 그래프가 $f$ 의 그래프를 중심으로 폭 $2\\varepsilon$ 의 '띠(band)' 안에 **전체적으로** 들어가면 균등 수렴입니다. 점별 수렴은 각 $x$ 좌표에서 띠 안에 들어가기만 하면 되므로, 어떤 곳에서는 띠 밖으로 삐져나갈 수 있습니다.",
    "formula": "\\text{점별 수렴:}\\ \\forall x\\,\\forall \\varepsilon > 0\\,\\exists N:\\ n \\geq N \\Rightarrow |f_n(x) - f(x)| < \\varepsilon\n\\text{균등 수렴:}\\ \\forall \\varepsilon > 0\\,\\exists N:\\ n \\geq N \\Rightarrow \\sup_x |f_n(x) - f(x)| < \\varepsilon\n\\|f_n - f\\|_\\infty = \\sup_{x \\in D}|f_n(x) - f(x)|\nf_n \\to f\\ \\text{균등}\\ \\iff\\ \\|f_n - f\\|_\\infty \\to 0",
    "summary": "• 점별 수렴: $N$ 이 $x$ 와 $\\varepsilon$ 에 의존 (점마다 속도 다름)\n• 균등 수렴: $N$ 이 $\\varepsilon$ 에만 의존 (전체 동시 수렴)\n• sup-노름 $\\|f_n - f\\|_\\infty \\to 0$ 이 균등 수렴의 판정 기준\n• $f_n(x) = x^n$ on $[0,1]$: 점별 수렴하지만 균등 수렴 아님"
  },
  "examples": [
    {
      "title": "$f_n(x) = x^n$ 이 $[0, 1]$ 에서 균등 수렴하지 않음을 증명",
      "problem": "$f_n(x) = x^n$ 이 $[0, 1]$ 에서 점별 극한 $f(x)$ 로 점별 수렴하지만 균등 수렴하지 않음을 보이시오.",
      "steps": [
        "점별 극한 구하기: $x \\in [0, 1)$ 이면 $|x| < 1$ 이므로 $x^n \\to 0$. $x = 1$ 이면 $1^n = 1$.",
        "따라서 $f(x) = \\begin{cases} 0 & 0 \\leq x < 1 \\\\ 1 & x = 1 \\end{cases}$.",
        "균등 수렴 여부: $\\|f_n - f\\|_\\infty = \\sup_{x \\in [0,1]}|x^n - f(x)|$.",
        "$x \\in [0, 1)$ 에서 $|x^n - 0| = x^n$, $x = 1$ 에서 $|1 - 1| = 0$.",
        "$\\sup_{x \\in [0,1)} x^n$: $x^n$ 은 $[0,1)$ 에서 $x = 1$ 에 가까울수록 $1$ 에 가까워지므로 $\\sup = 1$.",
        "$\\|f_n - f\\|_\\infty = 1 \\not\\to 0$. 따라서 균등 수렴이 아니다. $\\blacksquare$"
      ],
      "answer": "$\\|f_n - f\\|_\\infty = 1 \\neq 0$ 이므로 균등 수렴하지 않는다.",
      "lesson": "각 $f_n$ 은 연속이지만 점별 극한 $f$ 는 불연속입니다. 이는 점별 수렴이 연속성을 보존하지 못한다는 대표적 반례이며, 균등 수렴이 왜 필요한지를 보여줍니다."
    },
    {
      "title": "$g_n(x) = \\dfrac{x}{n}$ 이 $[0, 1]$ 에서 균등 수렴함을 증명",
      "problem": "$g_n(x) = \\dfrac{x}{n}$ 이 $[0, 1]$ 에서 $g(x) = 0$ 으로 균등 수렴함을 보이시오.",
      "steps": [
        "점별 극한: 모든 $x \\in [0, 1]$ 에 대해 $\\dfrac{x}{n} \\to 0$. 따라서 $g(x) = 0$.",
        "$\\|g_n - g\\|_\\infty = \\sup_{x \\in [0,1]}\\left|\\dfrac{x}{n} - 0\\right| = \\sup_{x \\in [0,1]}\\dfrac{x}{n} = \\dfrac{1}{n}$.",
        "$\\dfrac{1}{n} \\to 0$ 이므로 $\\|g_n - g\\|_\\infty \\to 0$.",
        "따라서 $g_n \\to 0$ 균등. $\\blacksquare$"
      ],
      "answer": "$\\|g_n - g\\|_\\infty = \\dfrac{1}{n} \\to 0$ 이므로 균등 수렴한다.",
      "lesson": "sup-노름을 직접 계산하여 $0$ 으로 가는지 확인하는 것이 균등 수렴 판정의 표준 방법입니다."
    },
    {
      "title": "[응용] 점별 극한 구하기",
      "problem": "$f_n(x) = \\frac{x}{1 + nx}$ ($x \\geq 0$)의 점별 극한을 구하시오.",
      "steps": [
        "$x = 0$: $f_n(0) = 0$이므로 $f(0) = 0$이다.",
        "$x > 0$: $f_n(x) = \\frac{x}{1 + nx} = \\frac{1}{1/x + n} \\to 0$ ($n \\to \\infty$).",
        "따라서 점별 극한 $f(x) = 0$이다 (모든 $x \\geq 0$)."
      ],
      "answer": "$f(x) = 0$ (모든 $x \\geq 0$).",
      "lesson": "점별 극한은 $x$를 고정한 뒤 $n \\to \\infty$ 극한을 취합니다. 이 함수열은 $[0, \\infty)$에서 $0$으로 점별 수렴하며, sup-노름 $\\|f_n\\|_\\infty = 1/(1+n \\cdot 1/n) \\to$ 확인이 필요합니다."
    },
    {
      "title": "[응용] 균등 수렴의 부정 활용",
      "problem": "$f_n(x) = nx e^{-nx^2}$이 $[0, 1]$에서 $f(x) = 0$으로 점별 수렴하지만 균등 수렴하지 않음을 보이시오.",
      "steps": [
        "점별: $x = 0$이면 $f_n(0) = 0$. $x > 0$이면 $nx e^{-nx^2} \\to 0$ ($e^{-nx^2}$이 지배).",
        "sup-노름: $f_n'(x) = n e^{-nx^2}(1 - 2nx^2) = 0$에서 $x = 1/\\sqrt{2n}$이다.",
        "$f_n(1/\\sqrt{2n}) = n \\cdot \\frac{1}{\\sqrt{2n}} \\cdot e^{-1/2} = \\frac{\\sqrt{n}}{\\sqrt{2}} e^{-1/2}$이다.",
        "$\\|f_n\\|_\\infty = \\frac{\\sqrt{n}}{\\sqrt{2e}} \\to \\infty \\neq 0$이므로 균등 수렴이 아니다."
      ],
      "answer": "$\\|f_n\\|_\\infty = \\frac{\\sqrt{n}}{\\sqrt{2e}} \\to \\infty$이므로 균등 수렴하지 않는다.",
      "lesson": "점별로 $0$에 수렴하지만 sup-노름이 $\\infty$로 발산하는 극단적 예입니다. 함수의 '스파이크'가 점점 높아지면서 좁아지는 형태입니다."
    },
    {
      "title": "[심화] 균등 수렴과 연속성 보존의 반례",
      "problem": "$f_n(x) = x^n$이 $[0, 1]$에서 불연속 극한을 가지는 것이 균등 수렴의 실패와 어떻게 연결되는지 설명하시오.",
      "steps": [
        "점별 극한: $f(x) = 0$ ($0 \\leq x < 1$), $f(1) = 1$. $f$는 $x = 1$에서 불연속이다.",
        "각 $f_n(x) = x^n$은 연속이다.",
        "연속 함수열의 극한이 불연속이므로, 연속성 보존 정리의 대우에 의해 수렴은 균등이 아니다.",
        "직접 확인: $\\|f_n - f\\|_\\infty = \\sup_{x \\in [0,1)} x^n = 1 \\not\\to 0$.",
        "균등 수렴이었다면 극한이 연속이어야 하므로 모순이다."
      ],
      "answer": "극한이 불연속이므로 연속성 보존 정리의 대우에 의해 균등 수렴이 아니다.",
      "lesson": "'연속 함수의 균등 극한은 연속'의 대우를 사용하면, 극한의 불연속성만으로 비균등 수렴을 판별할 수 있습니다."
    }
  ],
  "problems": [
    {
      "id": "19-1",
      "type": "choice",
      "difficulty": 1,
      "question": "점별 수렴과 균등 수렴의 정의에서 가장 핵심적인 차이는?",
      "choices": [
        "$\\varepsilon$ 의 크기가 다르다",
        "한정사(quantifier)의 순서가 다르다: $N$ 이 $x$ 에 의존하느냐 아니냐",
        "정의역이 유한이냐 무한이냐",
        "함수가 연속이냐 불연속이냐"
      ],
      "answer": "한정사(quantifier)의 순서가 다르다: $N$ 이 $x$ 에 의존하느냐 아니냐",
      "hints": [
        "점별 수렴의 정의: $\\forall x\\ \\forall \\varepsilon\\ \\exists N \\ldots$",
        "균등 수렴의 정의: $\\forall \\varepsilon\\ \\exists N\\ \\forall x \\ldots$",
        "$N$ 이 $x$ 에 의존할 수 있느냐 없느냐가 핵심입니다."
      ],
      "explanation": "점별 수렴에서 $N = N(x, \\varepsilon)$ 은 $x$ 에도 의존할 수 있지만, 균등 수렴에서 $N = N(\\varepsilon)$ 은 $\\varepsilon$ 에만 의존합니다. 이 한정사의 순서 차이가 두 개념의 유일한 차이이자 본질입니다.",
      "wrongAnalysis": "$\\varepsilon$ 의 크기나 정의역의 성질이 차이라고 오해하기 쉽습니다. 두 정의 모두 같은 $\\varepsilon > 0$ 을 사용하며, 정의역이 같아도 수렴 방식이 다를 수 있습니다."
    },
    {
      "id": "19-4",
      "type": "choice",
      "difficulty": 1,
      "question": "$f_n(x) = \\dfrac{1}{n}$ (상수함수열)은 $\\mathbb{R}$에서 $f(x) = 0$으로 어떤 종류의 수렴을 하는가?",
      "choices": [
        "점별 수렴만 한다",
        "균등 수렴한다",
        "수렴하지 않는다",
        "조건부 수렴한다"
      ],
      "answer": "균등 수렴한다",
      "hints": [
        "$\\|f_n - 0\\|_\\infty = \\sup_{x \\in \\mathbb{R}} |1/n - 0| = 1/n$을 계산하세요.",
        "$1/n \\to 0$이므로 sup-노름이 $0$으로 수렴합니다.",
        "$N$이 $x$에 의존하지 않으므로 균등 수렴입니다."
      ],
      "explanation": "$f_n(x) = 1/n$은 모든 $x$에서 같은 값을 가지므로 $\\|f_n - 0\\|_\\infty = 1/n \\to 0$입니다. sup-노름이 $0$으로 수렴하므로 균등 수렴합니다. 상수함수열에서는 함수값이 $x$에 의존하지 않으므로 점별 수렴과 균등 수렴이 동치입니다.",
      "wrongAnalysis": "상수함수열에서 수렴 속도가 $x$에 따라 다를 수 있다고 착각하는 실수가 있습니다. 함수값이 $x$에 무관하므로 모든 점에서 동일한 속도로 수렴합니다."
    },
    {
      "id": "19-5",
      "type": "text",
      "difficulty": 2,
      "question": "$f_n(x) = x^n$이 $[0, 1)$에서 $f(x) = 0$으로 균등 수렴하지 않음을 sup-노름을 이용하여 보이시오.",
      "answer": "||f_n - 0||_∞ = sup_{x∈[0,1)} x^n. x^n은 [0,1)에서 x=1에 가까울수록 1에 가까워지므로 sup = 1 (상한이지 최대가 아님). ||f_n||_∞ = 1 → 0이 아니므로 균등 수렴이 아니다.",
      "hints": [
        "$\\sup_{x \\in [0,1)} x^n$을 구해야 합니다.",
        "$x^n$은 $[0,1)$에서 $x$가 $1$에 가까울수록 $1$에 가까워집니다.",
        "$\\sup_{x \\in [0,1)} x^n = 1$ (상한)이므로 $\\|f_n\\|_\\infty = 1 \\not\\to 0$."
      ],
      "explanation": "$[0, 1)$에서 $x^n$은 $x$가 $1$에 가까워지면 $1$에 가까워집니다. $\\sup_{x \\in [0,1)} x^n = 1$ (상한은 $1$이지만 $x = 1$은 포함되지 않으므로 달성되지 않음). 따라서 $\\|f_n - 0\\|_\\infty = 1$이고 $1 \\not\\to 0$이므로 균등 수렴이 아닙니다.",
      "wrongAnalysis": "'$x < 1$이면 $x^n \\to 0$이므로 $\\sup$ 도 $0$이다'라고 추론하는 실수가 있습니다. 점별로 $0$으로 가지만 $x = 1 - 1/n$ 같은 점에서 $x^n \\approx 1/e$이므로 $\\sup$은 $0$으로 가지 않습니다."
    },
    {
      "id": "19-2",
      "type": "text",
      "difficulty": 2,
      "question": "$f_n(x) = \\dfrac{nx}{1 + n^2 x^2}$ 의 $[0, \\infty)$ 에서의 점별 극한 $f(x)$ 를 구하시오. (예: 0)",
      "answer": "0",
      "hints": [
        "$x = 0$ 이면 $f_n(0) = 0$ 이므로 $f(0) = 0$.",
        "$x > 0$ 이면 $\\dfrac{nx}{1 + n^2 x^2} = \\dfrac{1}{1/(nx) + nx}$.",
        "$n \\to \\infty$ 이면 $nx \\to \\infty$ 이므로 분모 $\\to \\infty$."
      ],
      "explanation": "$x = 0$: $f_n(0) = 0 \\to 0$. $x > 0$: $\\dfrac{nx}{1 + n^2 x^2} \\leq \\dfrac{nx}{n^2 x^2} = \\dfrac{1}{nx} \\to 0$. 따라서 모든 $x \\geq 0$ 에서 $f(x) = 0$. 그러나 $\\sup_x f_n(x) = f_n(1/n) = \\dfrac{1}{2}$ 이므로 균등 수렴은 아닙니다.",
      "wrongAnalysis": "$x = 1/n$ 을 대입하면 $f_n(1/n) = \\dfrac{1}{2}$ 로 $0$ 이 아닌 값이 남아, 균등 수렴이라고 착각하면 안 됩니다. 점별 극한 자체는 $0$ 이지만 sup-노름이 $0$ 으로 가지 않습니다."
    },
    {
      "id": "19-3",
      "type": "choice",
      "difficulty": 3,
      "question": "$h_n(x) = \\dfrac{\\sin(nx)}{n}$ 은 $\\mathbb{R}$ 에서 $h(x) = 0$ 으로 균등 수렴하는가?",
      "choices": [
        "균등 수렴한다",
        "점별 수렴하지만 균등 수렴하지 않는다",
        "점별 수렴조차 하지 않는다",
        "조건부로만 수렴한다"
      ],
      "answer": "균등 수렴한다",
      "hints": [
        "$|\\sin(nx)| \\leq 1$ 을 이용하세요.",
        "$\\left|\\dfrac{\\sin(nx)}{n} - 0\\right| \\leq \\dfrac{1}{n}$ 이 모든 $x$ 에서 성립합니다.",
        "sup-노름: $\\|h_n - 0\\|_\\infty \\leq \\dfrac{1}{n} \\to 0$."
      ],
      "explanation": "$\\sup_{x \\in \\mathbb{R}}\\left|\\dfrac{\\sin(nx)}{n}\\right| = \\dfrac{1}{n}$ ($\\sin$ 의 최댓값이 $1$). $\\dfrac{1}{n} \\to 0$ 이므로 균등 수렴합니다. $N$ 을 $\\varepsilon$ 에만 의존하게 잡을 수 있습니다: $N > \\dfrac{1}{\\varepsilon}$ 이면 모든 $x$ 에서 $|h_n(x)| < \\varepsilon$.",
      "wrongAnalysis": "$\\sin(nx)$ 가 진동하므로 수렴하지 않을 것이라 직감하기 쉽습니다. 하지만 진폭이 $\\dfrac{1}{n}$ 으로 줄어들어 진동이 '잠재워지는' 것입니다. sup-노름을 계산하면 명확히 확인됩니다."
    }
  ],
  "summary": {
    "keyPoints": [
      "점별 수렴: $\\forall x\\ \\forall \\varepsilon\\ \\exists N(x, \\varepsilon)$ — 점마다 수렴 속도가 다를 수 있음",
      "균등 수렴: $\\forall \\varepsilon\\ \\exists N(\\varepsilon)\\ \\forall x$ — 모든 점에서 동시에 수렴",
      "$\\|f_n - f\\|_\\infty = \\sup_x|f_n(x) - f(x)| \\to 0$ 이 균등 수렴의 판정 기준",
      "$f_n(x) = x^n$ on $[0,1]$: 점별 수렴 O, 균등 수렴 X — 연속성 보존 실패"
    ],
    "formulas": [
      "\\text{점별:}\\ \\forall x\\ \\forall \\varepsilon > 0\\ \\exists N:\\ n \\geq N \\Rightarrow |f_n(x) - f(x)| < \\varepsilon",
      "\\text{균등:}\\ \\forall \\varepsilon > 0\\ \\exists N:\\ n \\geq N \\Rightarrow \\sup_x|f_n(x) - f(x)| < \\varepsilon",
      "\\|f_n - f\\|_\\infty \\to 0 \\iff \\text{균등 수렴}"
    ],
    "commonMistakes": [
      "점별 수렴과 균등 수렴을 같은 것으로 혼동하는 실수",
      "sup-노름 계산 시 $\\sup$ 을 특정 $x$ 에서의 값으로 대체하는 실수",
      "$f_n$ 이 모두 연속이면 극한도 연속이라 가정하는 실수 (점별 수렴만으로는 보장 안 됨)"
    ],
    "nextConnection": "점별 수렴은 연속성을 보존하지 못했습니다. 균등 수렴이면 어떨까요? 다음 단원에서 균등 수렴이 보장하는 세 가지 핵심 성질 — 연속성 보존, 적분과 극한의 교환, 미분과 극한의 교환 — 을 증명합니다."
  }
},
{
  "id": 20,
  "title": "균등 수렴의 해석학적 성질",
  "category": "급수",
  "level": "심화",
  "question": "균등 수렴이면 극한과 적분, 극한과 미분을 바꿀 수 있을까?",
  "concept": {
    "intro": "이전 단원에서 점별 수렴은 연속성을 보존하지 못한다는 것을 보았습니다. 균등 수렴은 이 문제를 해결하며, 세 가지 근본적인 **교환 정리(interchange theorem)**를 보장합니다.\n\n**정리 1 (연속성 보존):** $f_n$ 이 모두 연속이고 $f_n \\to f$ 균등이면, $f$ 도 연속이다.\n\n**증명 ($\\varepsilon/3$ 논법):** 임의의 $x_0 \\in D$ 와 $\\varepsilon > 0$ 이 주어졌다고 하자.\n(i) 균등 수렴이므로 $\\exists N$ s.t. $n \\geq N \\Rightarrow |f_n(x) - f(x)| < \\varepsilon/3$ (모든 $x$).\n(ii) $f_N$ 은 연속이므로 $\\exists \\delta > 0$ s.t. $|x - x_0| < \\delta \\Rightarrow |f_N(x) - f_N(x_0)| < \\varepsilon/3$.\n(iii) 삼각부등식:\n$|f(x) - f(x_0)| \\leq |f(x) - f_N(x)| + |f_N(x) - f_N(x_0)| + |f_N(x_0) - f(x_0)| < \\varepsilon/3 + \\varepsilon/3 + \\varepsilon/3 = \\varepsilon$.\n따라서 $f$ 는 $x_0$ 에서 연속. $x_0$ 이 임의이므로 $f$ 는 $D$ 에서 연속. $\\blacksquare$\n\n**정리 2 (적분과 극한의 교환):** $f_n$ 이 $[a, b]$ 에서 연속이고 $f_n \\to f$ 균등이면,\n$$\\lim_{n \\to \\infty} \\int_a^b f_n(x)\\,dx = \\int_a^b \\lim_{n \\to \\infty} f_n(x)\\,dx = \\int_a^b f(x)\\,dx.$$\n\n**증명:** $\\left|\\int_a^b f_n\\,dx - \\int_a^b f\\,dx\\right| = \\left|\\int_a^b (f_n - f)\\,dx\\right| \\leq \\int_a^b |f_n - f|\\,dx \\leq (b - a)\\|f_n - f\\|_\\infty$.\n균등 수렴이므로 $\\|f_n - f\\|_\\infty \\to 0$, 따라서 $(b-a)\\|f_n - f\\|_\\infty \\to 0$. $\\blacksquare$\n\n**정리 3 (미분과 극한의 교환):** $f_n$ 이 미분가능하고, $f_n'$ 이 $[a, b]$ 에서 균등 수렴하며, 어떤 한 점 $x_0$ 에서 $f_n(x_0)$ 이 수렴하면,\n$$\\left(\\lim_{n \\to \\infty} f_n\\right)' = \\lim_{n \\to \\infty} f_n'.$$\n즉 $f_n \\to f$ 균등이고, $f'(x) = \\lim f_n'(x)$.\n\n**반례 — 점별 수렴만으로는 실패:**\n• 연속성 실패: $f_n(x) = x^n$ on $[0,1]$ (이전 단원).\n• 적분 교환 실패: $f_n(x) = n^2 x(1-x^2)^n$ on $[0,1]$. 점별 $\\to 0$ 이지만 $\\int_0^1 f_n\\,dx = \\dfrac{n^2}{2(n+1)} \\to \\infty$.\n• 미분 교환 실패: $f_n(x) = \\dfrac{\\sin(nx)}{\\sqrt{n}}$ on $\\mathbb{R}$. $f_n \\to 0$ 균등이지만 $f_n'(x) = \\sqrt{n}\\cos(nx)$ 는 발산.",
    "intuition": "$\\varepsilon/3$ 논법은 해석학에서 가장 자주 등장하는 기법입니다. 목표 오차 $\\varepsilon$ 을 세 조각으로 나누어, 각각을 $f \\to f_N$, $f_N$ 의 연속성, $f_N \\to f$ 로 통제합니다. 마치 여행에서 출발지→중간역, 중간역→중간역, 중간역→목적지의 세 구간 거리를 각각 제한하는 것과 같습니다.\n\n적분 교환이 성립하는 이유는 직관적으로 명확합니다: 균등 수렴이면 $f_n$ 과 $f$ 사이의 '면적 차이' 가 최대 $(b-a) \\times \\|f_n - f\\|_\\infty$ 인데, 이것이 $0$ 으로 가므로 적분값도 일치하게 됩니다.",
    "formula": "\\text{연속 보존:}\\ f_n \\text{ 연속},\\ f_n \\to f\\ \\text{균등} \\Rightarrow f\\ \\text{연속}\n\\text{적분 교환:}\\ \\lim \\int f_n = \\int \\lim f_n\\ \\ (\\text{균등 수렴 하에서})\n\\left|\\int_a^b (f_n - f)\\right| \\leq (b-a)\\|f_n - f\\|_\\infty\n\\text{미분 교환:}\\ f_n' \\to g\\ \\text{균등},\\ f_n(x_0)\\ \\text{수렴} \\Rightarrow (\\lim f_n)' = \\lim f_n'",
    "summary": "• 균등 수렴 $\\Rightarrow$ 연속 함수의 극한도 연속 ($\\varepsilon/3$ 증명)\n• 균등 수렴 $\\Rightarrow$ $\\lim \\int = \\int \\lim$ (적분과 극한 교환)\n• 도함수가 균등 수렴 $+$ 함수가 한 점에서 수렴 $\\Rightarrow$ $\\lim f_n' = (\\lim f_n)'$\n• 점별 수렴만으로는 세 성질 모두 보장 안 됨"
  },
  "examples": [
    {
      "title": "연속성 보존의 $\\varepsilon/3$ 증명 적용",
      "problem": "$g_n(x) = \\dfrac{x}{1 + nx^2}$ 이 $[0, 1]$ 에서 균등 수렴하고, 극한 함수가 연속임을 보이시오.",
      "steps": [
        "점별 극한: $x = 0$ 이면 $g_n(0) = 0$. $x > 0$ 이면 $\\dfrac{x}{1 + nx^2} \\leq \\dfrac{1}{nx} \\to 0$. 따라서 $g(x) = 0$.",
        "sup-노름: $|g_n(x)| = \\dfrac{x}{1 + nx^2}$. 최댓값을 구하기 위해 미분: $g_n'(x) = \\dfrac{1 - nx^2}{(1+nx^2)^2} = 0$ 에서 $x = \\dfrac{1}{\\sqrt{n}}$.",
        "$g_n\\left(\\dfrac{1}{\\sqrt{n}}\\right) = \\dfrac{1/\\sqrt{n}}{1 + 1} = \\dfrac{1}{2\\sqrt{n}}$.",
        "$\\|g_n - 0\\|_\\infty = \\dfrac{1}{2\\sqrt{n}} \\to 0$. 균등 수렴 확인.",
        "각 $g_n$ 은 연속이고 균등 수렴하므로, 정리 1에 의해 극한 $g(x) = 0$ 은 연속. $\\blacksquare$"
      ],
      "answer": "$\\|g_n\\|_\\infty = \\dfrac{1}{2\\sqrt{n}} \\to 0$ 이므로 균등 수렴하고, 극한 $g = 0$ 은 연속.",
      "lesson": "sup-노름을 구하려면 $|f_n(x) - f(x)|$ 를 $x$ 의 함수로 보고 최댓값을 구합니다. 미분을 이용한 최대·최솟값 탐색이 핵심 기술입니다."
    },
    {
      "title": "적분과 극한의 교환 실패 — 점별 수렴의 반례",
      "problem": "$f_n(x) = 2n^2 x \\cdot e^{-n^2 x^2}$ 이 $[0, \\infty)$ 에서 점별 $\\to 0$ 이지만 $\\lim \\int \\neq \\int \\lim$ 임을 보이시오.",
      "steps": [
        "점별 극한: $x = 0$ 이면 $f_n(0) = 0$. $x > 0$ 이면 $n^2 x^2 \\to \\infty$ 이므로 $e^{-n^2 x^2} \\to 0$ 이 $n^2 x$ 보다 빨라 $f_n(x) \\to 0$.",
        "$\\int_0^\\infty \\lim f_n\\,dx = \\int_0^\\infty 0\\,dx = 0$.",
        "$\\int_0^\\infty f_n(x)\\,dx = \\int_0^\\infty 2n^2 x e^{-n^2 x^2}dx$. $u = n^2 x^2$ 으로 치환하면 $du = 2n^2 x\\,dx$.",
        "$= \\int_0^\\infty e^{-u}\\,du = 1$.",
        "$\\lim \\int f_n = 1 \\neq 0 = \\int \\lim f_n$. 적분과 극한이 교환되지 않음."
      ],
      "answer": "$\\lim \\int f_n = 1 \\neq 0 = \\int \\lim f_n$",
      "lesson": "점별 수렴만으로는 적분과 극한의 순서를 바꿀 수 없습니다. 이 반례에서 $f_n$ 은 점점 좁고 높은 '스파이크' 형태가 되어, 각 점에서는 $0$ 으로 가지만 면적은 항상 $1$ 입니다."
    },
    {
      "title": "[응용] 적분과 극한의 교환 — 균등 수렴 사용",
      "problem": "$f_n(x) = \\frac{\\sin(x)}{n}$이 $[0, \\pi]$에서 균등 수렴함을 보이고, $\\lim \\int_0^\\pi f_n = \\int_0^\\pi \\lim f_n$을 확인하시오.",
      "steps": [
        "$\\|f_n - 0\\|_\\infty = \\sup_{x \\in [0,\\pi]} \\frac{|\\sin x|}{n} = \\frac{1}{n} \\to 0$. 균등 수렴이다.",
        "교환 정리: $\\lim \\int_0^\\pi f_n = \\int_0^\\pi \\lim f_n = \\int_0^\\pi 0\\,dx = 0$이다.",
        "직접 확인: $\\int_0^\\pi \\frac{\\sin x}{n}\\,dx = \\frac{1}{n}[-\\cos x]_0^\\pi = \\frac{2}{n} \\to 0$이다.",
        "두 방법의 결과가 일치한다."
      ],
      "answer": "$\\lim \\int f_n = 0 = \\int \\lim f_n$. 균등 수렴이 교환을 보장한다.",
      "lesson": "균등 수렴이면 $\\lim \\int = \\int \\lim$이 성립합니다. 이것이 리만 적분에서 점별 수렴만으로 보장되지 않는 것과 대비됩니다."
    },
    {
      "title": "[응용] $\\varepsilon/3$ 논법의 구체적 적용",
      "problem": "$g_n(x) = \\frac{x^2}{n}$이 $[0, 1]$에서 $g(x) = 0$으로 균등 수렴할 때, 극한 $g = 0$이 연속임을 $\\varepsilon/3$ 논법으로 확인하시오.",
      "steps": [
        "$\\|g_n - 0\\|_\\infty = 1/n \\to 0$이므로 균등 수렴이다.",
        "연속성 보존 정리에 의해 $g(x) = 0$은 연속이다 (자명).",
        "$\\varepsilon/3$ 적용: 임의의 $x_0$와 $\\varepsilon > 0$에 대해, $N$을 $1/N < \\varepsilon/3$이 되도록 잡는다.",
        "$|g(x) - g(x_0)| \\leq |g(x) - g_N(x)| + |g_N(x) - g_N(x_0)| + |g_N(x_0) - g(x_0)| < \\varepsilon/3 + \\varepsilon/3 + \\varepsilon/3 = \\varepsilon$.",
        "둘째 항은 $g_N(x) = x^2/N$의 연속성으로 제어한다."
      ],
      "answer": "$\\varepsilon/3$ 논법: $|g - g_N| < \\varepsilon/3$ (균등 수렴), $|g_N(x) - g_N(x_0)| < \\varepsilon/3$ (연속성)으로 극한의 연속성이 보장된다.",
      "lesson": "$\\varepsilon/3$ 논법은 중간 다리 $g_N$을 경유하여 $g$의 연속성을 보이는 해석학의 표준 기법입니다."
    },
    {
      "title": "[심화] 미분과 극한의 교환이 실패하는 예",
      "problem": "$f_n(x) = \\frac{\\sin(n^2 x)}{n}$이 $\\mathbb{R}$에서 $0$으로 균등 수렴하지만, $f_n'(x) = n\\cos(n^2 x)$가 수렴하지 않음을 보이시오.",
      "steps": [
        "$\\|f_n\\|_\\infty = 1/n \\to 0$이므로 $f_n \\to 0$ 균등.",
        "$f_n'(x) = n \\cos(n^2 x)$이다.",
        "$\\|f_n'\\|_\\infty = n \\to \\infty$이므로 $f_n'$은 균등 수렴은 물론 점별 수렴도 하지 않는다.",
        "미분 교환 정리의 전제($f_n'$이 균등 수렴)가 만족되지 않는다.",
        "따라서 $(\\lim f_n)' = 0'= 0$이지만 $\\lim f_n' = n\\cos(n^2 x)$는 발산한다."
      ],
      "answer": "$f_n \\to 0$ 균등이지만 $f_n' = n\\cos(n^2 x)$는 $\\|f_n'\\|_\\infty = n \\to \\infty$이므로 수렴하지 않는다.",
      "lesson": "함수의 균등 수렴이 도함수의 수렴을 보장하지 않습니다. 미분 교환에는 $f_n'$의 균등 수렴이 별도로 필요합니다."
    }
  ],
  "problems": [
    {
      "id": "20-1",
      "type": "choice",
      "difficulty": 1,
      "question": "연속 함수열 $\\{f_n\\}$ 이 $f$ 로 균등 수렴하면 반드시 성립하는 것은?",
      "choices": [
        "$f$ 는 미분가능하다",
        "$f$ 는 연속이다",
        "$f$ 는 단조증가한다",
        "$f_n$ 의 최댓값이 감소한다"
      ],
      "answer": "$f$ 는 연속이다",
      "hints": [
        "균등 수렴의 세 가지 교환 정리 중 첫 번째를 기억하세요.",
        "연속 함수의 균등 극한은 연속입니다.",
        "$\\varepsilon/3$ 논법으로 증명됩니다."
      ],
      "explanation": "정리 1에 의해, 연속 함수열의 균등 극한은 반드시 연속입니다. 미분가능성은 보장되지 않으며(바이어슈트라스의 모든 점에서 미분 불가능한 연속함수가 연속 함수열의 균등 극한), 단조성이나 최댓값 감소와는 무관합니다.",
      "wrongAnalysis": "'균등 수렴이면 미분가능'이라고 오해하기 쉽습니다. 균등 수렴은 연속성만 보존하며, 미분가능성 보존에는 도함수의 균등 수렴이라는 추가 조건이 필요합니다."
    },
    {
      "id": "20-4",
      "type": "choice",
      "difficulty": 1,
      "question": "연속성 보존 정리의 증명에서 사용되는 '$\\varepsilon/3$ 논법'의 세 부분은?",
      "choices": [
        "$|f - f_N|$, $|f_N(x) - f_N(x_0)|$, $|f_N - f|$의 세 항으로 분리",
        "$|f_1|$, $|f_2|$, $|f_3|$의 세 함수를 비교",
        "$\\delta_1$, $\\delta_2$, $\\delta_3$의 세 값 중 최솟값을 택함",
        "구간을 세 등분하여 각각 분석"
      ],
      "answer": "$|f - f_N|$, $|f_N(x) - f_N(x_0)|$, $|f_N - f|$의 세 항으로 분리",
      "hints": [
        "삼각부등식: $|f(x) - f(x_0)| \\leq |f(x) - f_N(x)| + |f_N(x) - f_N(x_0)| + |f_N(x_0) - f(x_0)|$.",
        "첫째와 셋째 항은 균등 수렴으로 $\\varepsilon/3$ 미만으로 제어합니다.",
        "둘째 항은 $f_N$의 연속성으로 $\\varepsilon/3$ 미만으로 제어합니다."
      ],
      "explanation": "$\\varepsilon/3$ 논법은 $|f(x) - f(x_0)|$를 삼각부등식으로 세 항으로 분리합니다: (1) $|f(x) - f_N(x)| < \\varepsilon/3$ (균등 수렴), (2) $|f_N(x) - f_N(x_0)| < \\varepsilon/3$ ($f_N$의 연속성), (3) $|f_N(x_0) - f(x_0)| < \\varepsilon/3$ (균등 수렴). 합하면 $|f(x) - f(x_0)| < \\varepsilon$.",
      "wrongAnalysis": "구간을 세 등분하는 것이 아닙니다. 오차 $\\varepsilon$을 세 조각으로 분배하여 각 항을 별도로 제어하는 기법입니다."
    },
    {
      "id": "20-5",
      "type": "text",
      "difficulty": 2,
      "question": "적분과 극한의 교환 정리에서 $\\left|\\int_a^b(f_n - f)\\,dx\\right| \\leq (b-a)\\|f_n - f\\|_\\infty$가 성립하는 이유를 설명하시오.",
      "answer": "|∫(f_n-f)dx| ≤ ∫|f_n-f|dx ≤ ∫||f_n-f||_∞ dx = ||f_n-f||_∞ · (b-a). sup-노름은 상수이므로 적분 밖으로 나온다.",
      "hints": [
        "적분의 삼각부등식: $|\\int g| \\leq \\int |g|$.",
        "$|f_n(x) - f(x)| \\leq \\|f_n - f\\|_\\infty$ (sup-노름의 정의).",
        "$\\int_a^b \\|f_n - f\\|_\\infty\\, dx = \\|f_n - f\\|_\\infty \\cdot (b-a)$."
      ],
      "explanation": "적분의 삼각부등식에 의해 $|\\int_a^b(f_n - f)| \\leq \\int_a^b |f_n - f|\\,dx$입니다. 모든 $x$에서 $|f_n(x) - f(x)| \\leq \\|f_n - f\\|_\\infty$이므로 $\\int_a^b |f_n - f| \\leq \\int_a^b \\|f_n - f\\|_\\infty\\, dx = \\|f_n - f\\|_\\infty \\cdot (b-a)$입니다. 균등 수렴이면 $\\|f_n - f\\|_\\infty \\to 0$이므로 적분 차이도 $0$으로 수렴합니다.",
      "wrongAnalysis": "sup-노름이 적분 안에서 $x$에 의존한다고 착각하는 실수가 있습니다. $\\|f_n - f\\|_\\infty$는 $x$에 대한 $\\sup$이므로 상수이고, 따라서 적분 밖으로 나올 수 있습니다."
    },
    {
      "id": "20-2",
      "type": "number",
      "difficulty": 2,
      "question": "$f_n(x) = \\dfrac{x}{n}$ 일 때 $\\displaystyle\\lim_{n \\to \\infty} \\int_0^1 f_n(x)\\,dx$ 의 값은?",
      "answer": "0",
      "hints": [
        "이전 단원에서 $f_n(x) = x/n \\to 0$ 균등임을 보았습니다.",
        "균등 수렴이므로 $\\lim \\int = \\int \\lim$ 이 성립합니다.",
        "$\\int_0^1 0\\,dx = 0$. 또는 직접: $\\int_0^1 \\dfrac{x}{n}\\,dx = \\dfrac{1}{2n} \\to 0$."
      ],
      "explanation": "방법 1 (교환 정리): $f_n \\to 0$ 균등이므로 $\\lim \\int_0^1 f_n = \\int_0^1 \\lim f_n = \\int_0^1 0\\,dx = 0$.\n방법 2 (직접 계산): $\\int_0^1 \\dfrac{x}{n}\\,dx = \\dfrac{1}{2n} \\to 0$.\n두 방법의 답이 일치하며, 이는 균등 수렴 하에서 교환이 올바르게 작동함을 확인합니다.",
      "wrongAnalysis": "극한과 적분의 교환이 항상 성립한다고 무비판적으로 사용하는 실수가 있습니다. 교환이 정당화되려면 균등 수렴(또는 다른 충분조건)을 반드시 확인해야 합니다."
    },
    {
      "id": "20-3",
      "type": "choice",
      "difficulty": 3,
      "question": "$f_n(x) = \\dfrac{\\sin(nx)}{\\sqrt{n}}$ 에 대해 다음 중 올바른 것은?",
      "choices": [
        "$f_n \\to 0$ 균등이고, $f_n' \\to 0$ 균등이다",
        "$f_n \\to 0$ 균등이지만, $f_n'$ 은 균등 수렴하지 않는다",
        "$f_n$ 은 점별 수렴하지 않는다",
        "$f_n \\to 0$ 점별이지만 균등 수렴은 아니다"
      ],
      "answer": "$f_n \\to 0$ 균등이지만, $f_n'$ 은 균등 수렴하지 않는다",
      "hints": [
        "$\\|f_n\\|_\\infty = \\dfrac{1}{\\sqrt{n}} \\to 0$ 이므로 $f_n \\to 0$ 균등.",
        "$f_n'(x) = \\dfrac{n \\cos(nx)}{\\sqrt{n}} = \\sqrt{n}\\cos(nx)$.",
        "$\\|f_n'\\|_\\infty = \\sqrt{n} \\to \\infty$."
      ],
      "explanation": "$\\|f_n - 0\\|_\\infty = \\dfrac{1}{\\sqrt{n}} \\to 0$ 이므로 $f_n \\to 0$ 균등 수렴합니다. 그러나 $f_n'(x) = \\sqrt{n}\\cos(nx)$ 이고 $\\|f_n'\\|_\\infty = \\sqrt{n} \\to \\infty$ 이므로 $f_n'$ 은 수렴조차 하지 않습니다. 이 예는 함수의 균등 수렴이 도함수의 수렴을 보장하지 않음을 보여줍니다.",
      "wrongAnalysis": "'$f_n$ 이 균등 수렴하면 $f_n'$ 도 수렴할 것' 이라 오해하기 쉽습니다. 미분 교환 정리(정리 3)의 가정은 $f_n'$ 이 균등 수렴하는 것이지, $f_n$ 의 균등 수렴으로부터 $f_n'$ 의 수렴이 따라 나오는 것이 아닙니다."
    }
  ],
  "summary": {
    "keyPoints": [
      "연속 함수의 균등 극한은 연속 ($\\varepsilon/3$ 논법)",
      "균등 수렴 하에서 $\\lim \\int = \\int \\lim$ (적분과 극한 교환)",
      "$f_n'$ 균등 수렴 $+$ $f_n$ 한 점 수렴 $\\Rightarrow$ $(\\lim f_n)' = \\lim f_n'$ (미분과 극한 교환)",
      "점별 수렴만으로는 세 성질 모두 실패할 수 있음"
    ],
    "formulas": [
      "|f(x) - f(x_0)| \\leq |f - f_N| + |f_N(x) - f_N(x_0)| + |f_N - f| < \\varepsilon/3 \\times 3",
      "\\left|\\int_a^b (f_n - f)\\right| \\leq (b-a)\\|f_n - f\\|_\\infty \\to 0",
      "f_n' \\to g\\ \\text{균등},\\ f_n(x_0)\\ \\text{수렴} \\Rightarrow f_n \\to f\\ \\text{균등},\\ f' = g"
    ],
    "commonMistakes": [
      "점별 수렴만으로 극한과 적분/미분을 교환하는 실수",
      "함수의 균등 수렴에서 도함수의 균등 수렴을 추론하는 실수",
      "$\\varepsilon/3$ 증명에서 $N$ 선택 순서를 잘못 잡는 실수"
    ],
    "nextConnection": "균등 수렴의 중요성을 확인했으니, 다음 질문은 '어떻게 균등 수렴을 보장할 수 있는가?' 입니다. 다음 단원의 바이어슈트라스 M-판정법은 함수 급수 $\\sum f_n$ 의 균등 수렴을 판정하는 가장 강력하고 실용적인 도구입니다."
  }
},
{
  "id": 21,
  "title": "바이어슈트라스 M-판정법",
  "category": "급수",
  "level": "심화",
  "question": "함수 급수 $\\sum f_n(x)$ 의 균등 수렴을 어떻게 체계적으로 판정하는가?",
  "concept": {
    "intro": "이전 두 단원에서 균등 수렴의 정의와 해석학적 성질을 배웠습니다. 하지만 실전에서 sup-노름 $\\|S_n - S\\|_\\infty \\to 0$ 을 직접 확인하기는 어렵습니다. **바이어슈트라스 M-판정법(Weierstrass M-test)**은 함수 급수 $\\sum_{n=1}^{\\infty} f_n(x)$ 의 균등 수렴을 판정하는 가장 실용적인 도구입니다.\n\n**정리 (바이어슈트라스 M-판정법):** 정의역 $D$ 위의 함수열 $\\{f_n\\}$ 에 대해, 양의 상수열 $\\{M_n\\}$ 이 존재하여\n(i) $|f_n(x)| \\leq M_n$ 이 모든 $x \\in D$ 와 모든 $n$ 에서 성립하고,\n(ii) $\\displaystyle\\sum_{n=1}^{\\infty} M_n$ 이 수렴하면,\n$\\displaystyle\\sum_{n=1}^{\\infty} f_n(x)$ 는 $D$ 에서 **균등 절대수렴**한다.\n\n**증명 (코시 판정법 이용):** 균등 수렴의 코시 조건을 사용합니다. $\\sum M_n$ 이 수렴하므로 코시 조건에 의해, $\\forall \\varepsilon > 0$, $\\exists N$ s.t. $m > n \\geq N \\Rightarrow M_{n+1} + M_{n+2} + \\cdots + M_m < \\varepsilon$.\n이제 임의의 $x \\in D$ 에 대해:\n$$\\left|\\sum_{k=n+1}^{m} f_k(x)\\right| \\leq \\sum_{k=n+1}^{m} |f_k(x)| \\leq \\sum_{k=n+1}^{m} M_k < \\varepsilon.$$\n이 부등식이 **모든 $x$ 에 대해** 성립하므로 (부등식에 $x$ 가 남지 않음), $\\sum f_n$ 은 코시 조건을 **균등하게** 만족합니다. 따라서 $\\sum f_n$ 은 $D$ 에서 균등 수렴합니다. 절대수렴도 같은 부등식에서 따라 나옵니다. $\\blacksquare$\n\n**멱급수에의 응용:** 수렴반경 $R$ 인 멱급수 $\\sum a_n x^n$ 을 생각합니다. $0 < r < R$ 인 임의의 $r$ 에 대해, $|x| \\leq r$ 이면\n$|a_n x^n| \\leq |a_n| r^n = M_n$.\n$\\sum |a_n| r^n$ 은 $r < R$ 이므로 수렴합니다 (수렴반경의 정의). 따라서 M-판정법에 의해 $\\sum a_n x^n$ 은 $[-r, r]$ 에서 **균등 수렴**합니다.\n\n이 결과의 의미: 멱급수는 수렴반경 **내부의 임의의 닫힌 구간**에서 균등 수렴하므로, 이전 단원의 교환 정리에 의해 항별 적분, 항별 미분이 가능합니다. 테일러 급수의 미분·적분 성질이 이렇게 정당화됩니다.\n\n**기존 판정법과의 연결:** 레슨 48의 비교판정법이 수열에 대해 $0 \\leq a_n \\leq b_n$ 으로 수렴을 비교했다면, M-판정법은 **모든 $x$ 에 대해 동시에** $|f_n(x)| \\leq M_n$ 으로 비교하는 것입니다. 비교판정법의 '균등 버전' 이라 할 수 있습니다.",
    "intuition": "M-판정법의 핵심 아이디어는 단순합니다: 각 $f_n(x)$ 의 크기를 $x$ 에 무관한 상수 $M_n$ 으로 눌러놓고, 그 상수들의 합 $\\sum M_n$ 이 수렴하면 원래 급수도 (균등하게) 수렴한다는 것입니다.\n\n비유하면, 각 악기($f_n$)의 최대 볼륨($M_n$)을 제한해 놓고, 최대 볼륨의 총합이 유한하면 전체 합주의 음량이 폭발하지 않는다는 뜻입니다. 어떤 자리(어떤 $x$)에서 들어도 총 음량은 유한합니다.",
    "formula": "|f_n(x)| \\leq M_n\\ (\\forall x \\in D),\\quad \\sum M_n < \\infty \\Rightarrow \\sum f_n(x)\\ \\text{균등 절대수렴}\n\\text{멱급수:}\\ |x| \\leq r < R \\Rightarrow |a_n x^n| \\leq |a_n|r^n = M_n,\\quad \\sum M_n < \\infty\n\\text{코시 판정:}\\ \\left|\\sum_{k=n+1}^{m} f_k(x)\\right| \\leq \\sum_{k=n+1}^{m} M_k < \\varepsilon\\ (\\forall x)",
    "summary": "• $|f_n(x)| \\leq M_n$ (모든 $x$) 이고 $\\sum M_n < \\infty$ 이면 $\\sum f_n$ 균등 절대수렴\n• 증명: 코시 조건을 $x$ 에 무관하게 만족시킴\n• 멱급수: 수렴반경 내부의 닫힌 구간에서 균등 수렴 $\\to$ 항별 미분·적분 가능\n• 비교판정법의 '균등 버전'"
  },
  "examples": [
    {
      "title": "$\\sum \\dfrac{\\cos(nx)}{n^2}$ 의 균등 수렴",
      "problem": "$\\displaystyle\\sum_{n=1}^{\\infty} \\dfrac{\\cos(nx)}{n^2}$ 이 $\\mathbb{R}$ 전체에서 균등 수렴함을 M-판정법으로 보이시오.",
      "steps": [
        "$f_n(x) = \\dfrac{\\cos(nx)}{n^2}$ 으로 놓는다.",
        "$|\\cos(nx)| \\leq 1$ 이므로 $|f_n(x)| = \\dfrac{|\\cos(nx)|}{n^2} \\leq \\dfrac{1}{n^2} = M_n$.",
        "$\\displaystyle\\sum_{n=1}^{\\infty} M_n = \\sum_{n=1}^{\\infty} \\dfrac{1}{n^2} = \\dfrac{\\pi^2}{6} < \\infty$ ($p$-급수, $p = 2 > 1$).",
        "M-판정법의 두 조건이 모두 만족되므로, $\\sum \\dfrac{\\cos(nx)}{n^2}$ 은 $\\mathbb{R}$ 에서 균등 절대수렴. $\\blacksquare$"
      ],
      "answer": "$M_n = \\dfrac{1}{n^2}$, $\\sum M_n = \\dfrac{\\pi^2}{6} < \\infty$ 이므로 균등 수렴.",
      "lesson": "삼각함수가 포함된 급수에서 $|\\cos|, |\\sin| \\leq 1$ 로 바운드하는 것이 M-판정법 적용의 전형적 첫 단계입니다."
    },
    {
      "title": "멱급수의 균등 수렴 — $e^x = \\sum \\dfrac{x^n}{n!}$ 을 $[-r, r]$ 에서",
      "problem": "임의의 $r > 0$ 에 대해 $\\displaystyle\\sum_{n=0}^{\\infty} \\dfrac{x^n}{n!}$ 이 $[-r, r]$ 에서 균등 수렴함을 보이시오.",
      "steps": [
        "$f_n(x) = \\dfrac{x^n}{n!}$. $|x| \\leq r$ 이면 $|f_n(x)| \\leq \\dfrac{r^n}{n!} = M_n$.",
        "$\\displaystyle\\sum_{n=0}^{\\infty} M_n = \\sum_{n=0}^{\\infty} \\dfrac{r^n}{n!} = e^r < \\infty$.",
        "M-판정법에 의해 $\\sum \\dfrac{x^n}{n!}$ 은 $[-r, r]$ 에서 균등 절대수렴. $\\blacksquare$",
        "$r$ 이 임의이므로, $\\mathbb{R}$ 의 모든 유계 구간에서 균등 수렴."
      ],
      "answer": "$M_n = \\dfrac{r^n}{n!}$, $\\sum M_n = e^r < \\infty$. 균등 수렴.",
      "lesson": "레슨 48에서 $e^x$ 의 수렴반경이 $R = \\infty$ 임을 보았습니다. M-판정법은 그 수렴이 '균등' 임을 추가로 보장하여, $e^x$ 의 테일러 급수를 항별 미분·적분할 수 있음을 정당화합니다."
    },
    {
      "title": "[응용] M-판정법의 기본 적용",
      "problem": "$\\sum_{n=1}^{\\infty} \\frac{x^n}{n!}$이 $[-1, 1]$에서 균등 수렴함을 M-판정법으로 보이시오.",
      "steps": [
        "$|x| \\leq 1$이면 $\\left|\\frac{x^n}{n!}\\right| \\leq \\frac{1}{n!} = M_n$이다.",
        "$\\sum M_n = \\sum \\frac{1}{n!} = e - 1 < \\infty$이다.",
        "M-판정법의 조건이 만족되므로 $\\sum \\frac{x^n}{n!}$은 $[-1, 1]$에서 균등 절대수렴한다."
      ],
      "answer": "$M_n = 1/n!$, $\\sum M_n = e - 1 < \\infty$. M-판정법에 의해 균등 수렴.",
      "lesson": "계승의 빠른 증가($n!$)가 $M_n$의 빠른 감소를 보장하여 $\\sum M_n$이 수렴합니다."
    },
    {
      "title": "[응용] M-판정법이 적용 불가능한 경우",
      "problem": "$\\sum_{n=1}^{\\infty} \\frac{(-1)^n}{n}x^n$이 $(-1, 1)$에서 점별 수렴하지만, $M_n = \\sup_{|x|<1} |(-1)^n x^n / n|$로 M-판정법을 적용할 수 없는 이유를 설명하시오.",
      "steps": [
        "$f_n(x) = \\frac{(-1)^n x^n}{n}$이다.",
        "$\\sup_{x \\in (-1,1)} |f_n(x)| = \\sup_{x \\in (-1,1)} \\frac{|x|^n}{n}$이다.",
        "$|x|$는 $1$에 임의로 가까워지므로 $\\sup = \\frac{1}{n}$이다.",
        "$M_n = 1/n$으로 놓으면 $\\sum M_n = \\sum 1/n = \\infty$이므로 M-판정법 적용 불가.",
        "그러나 이 급수는 교대급수이므로 각 $x$에서 수렴한다. M-판정법이 실패해도 수렴은 가능하다."
      ],
      "answer": "$M_n = 1/n$이고 $\\sum 1/n$은 발산하므로 M-판정법을 적용할 수 없다. 그러나 급수는 점별 수렴한다.",
      "lesson": "M-판정법은 충분조건이지 필요조건이 아닙니다. M-판정법이 실패하더라도 급수가 균등 수렴할 수 있으며, 다른 방법으로 판정해야 합니다."
    },
    {
      "title": "[심화] 멱급수의 항별 미분 정당화",
      "problem": "$f(x) = \\sum_{n=0}^{\\infty} \\frac{x^n}{n!} = e^x$에서 항별 미분이 가능함을 M-판정법과 균등 수렴의 미분 교환 정리로 정당화하시오.",
      "steps": [
        "임의의 $r > 0$에 대해 $[-r, r]$에서 $\\sum x^n/n!$은 균등 수렴한다 (M-판정법: $M_n = r^n/n!$).",
        "도함수: $\\frac{d}{dx}\\frac{x^n}{n!} = \\frac{nx^{n-1}}{n!} = \\frac{x^{n-1}}{(n-1)!}$이다.",
        "$\\sum \\frac{x^{n-1}}{(n-1)!}$도 $[-r, r]$에서 균등 수렴한다 ($M_n = r^{n-1}/(n-1)!$).",
        "미분 교환 정리: $f_n' \\to g$ 균등이고 $f_n(0) \\to e^0 = 1$ 수렴이므로 $f'(x) = \\sum \\frac{x^{n-1}}{(n-1)!} = e^x = f(x)$이다.",
        "따라서 $\\frac{d}{dx}e^x = e^x$가 항별 미분으로 정당화된다."
      ],
      "answer": "M-판정법으로 도함수 급수의 균등 수렴을 보이고, 미분 교환 정리를 적용하면 $(e^x)' = e^x$이다.",
      "lesson": "멱급수의 항별 미분은 '수렴반경 내부의 닫힌 구간에서 도함수 급수가 균등 수렴'하기 때문에 가능합니다. M-판정법이 이를 보장합니다."
    }
  ],
  "problems": [
    {
      "id": "21-1",
      "type": "choice",
      "difficulty": 1,
      "question": "바이어슈트라스 M-판정법에서 $M_n$ 이 만족해야 하는 조건은?",
      "choices": [
        "$M_n \\to 0$ 이면 충분하다",
        "$|f_n(x)| \\leq M_n$ (모든 $x$) 이고 $\\sum M_n$ 이 수렴해야 한다",
        "$M_n = \\sup_x |f_n(x)|$ 이어야만 한다",
        "$M_n$ 이 단조감소해야 한다"
      ],
      "answer": "$|f_n(x)| \\leq M_n$ (모든 $x$) 이고 $\\sum M_n$ 이 수렴해야 한다",
      "hints": [
        "M-판정법의 두 가지 조건을 정확히 떠올려 보세요.",
        "첫째: $|f_n(x)| \\leq M_n$ 이 모든 $x$ 에서 성립.",
        "둘째: $\\sum M_n < \\infty$."
      ],
      "explanation": "M-판정법은 (i) $|f_n(x)| \\leq M_n$ (모든 $x$)과 (ii) $\\sum M_n < \\infty$ 두 조건을 요구합니다. $M_n \\to 0$ 만으로는 $\\sum M_n$ 이 수렴하지 않을 수 있고 (예: $M_n = 1/n$), $M_n$ 이 반드시 $\\sup|f_n|$ 일 필요는 없으며 (더 큰 값도 가능), 단조감소는 요구되지 않습니다.",
      "wrongAnalysis": "$M_n \\to 0$ 이면 충분하다는 오해가 흔합니다. 조화급수 $\\sum 1/n$ 처럼 $M_n \\to 0$ 이어도 $\\sum M_n$ 이 발산하면 M-판정법을 적용할 수 없습니다."
    },
    {
      "id": "21-4",
      "type": "choice",
      "difficulty": 1,
      "question": "M-판정법에서 '균등 절대수렴'이란 무엇을 의미하는가?",
      "choices": [
        "$\\sum f_n$이 일부 $x$에서만 수렴한다",
        "$\\sum f_n$이 균등 수렴하고 $\\sum |f_n|$도 균등 수렴한다",
        "$\\sum |f_n|$만 수렴한다",
        "$M_n$이 $0$으로 수렴한다"
      ],
      "answer": "$\\sum f_n$이 균등 수렴하고 $\\sum |f_n|$도 균등 수렴한다",
      "hints": [
        "'절대수렴'은 $\\sum |f_n|$이 수렴한다는 뜻입니다.",
        "'균등'은 모든 $x$에 대해 동시에 수렴한다는 뜻입니다.",
        "M-판정법은 두 성질을 동시에 보장합니다."
      ],
      "explanation": "균등 절대수렴이란 $\\sum f_n(x)$이 정의역의 모든 점에서 동시에(균등하게) 수렴하고, $\\sum |f_n(x)|$도 마찬가지로 균등 수렴하는 것입니다. M-판정법은 $|f_n(x)| \\leq M_n$과 $\\sum M_n < \\infty$로부터 이 두 성질을 동시에 보장합니다.",
      "wrongAnalysis": "$M_n \\to 0$이면 충분하다고 생각하는 실수가 있습니다. $M_n \\to 0$은 $\\sum M_n$ 수렴의 필요조건이지 충분조건이 아닙니다."
    },
    {
      "id": "21-5",
      "type": "text",
      "difficulty": 2,
      "question": "$\\sum_{n=1}^{\\infty} \\frac{e^{inx}}{n^2}$이 $\\mathbb{R}$에서 균등 수렴함을 M-판정법으로 보이시오. (핵심 부등식과 $M_n$을 서술하세요)",
      "answer": "|e^{inx}/n²| = |e^{inx}|/n² = 1/n² = M_n. Σ1/n²은 p-급수(p=2>1)로 수렴. M-판정법에 의해 균등 절대수렴.",
      "hints": [
        "$|e^{inx}| = 1$ (복소 지수함수의 절대값)을 이용하세요.",
        "$|e^{inx}/n^2| = 1/n^2 = M_n$으로 바운드됩니다.",
        "$\\sum 1/n^2 = \\pi^2/6 < \\infty$이므로 M-판정법 적용 가능."
      ],
      "explanation": "$|e^{inx}| = |\\cos(nx) + i\\sin(nx)| = 1$이므로 $\\left|\\frac{e^{inx}}{n^2}\\right| = \\frac{1}{n^2} = M_n$입니다. $\\sum M_n = \\sum 1/n^2 = \\pi^2/6 < \\infty$이므로 M-판정법에 의해 $\\sum e^{inx}/n^2$은 $\\mathbb{R}$에서 균등 절대수렴합니다.",
      "wrongAnalysis": "$e^{inx}$의 절대값이 $x$에 따라 변한다고 생각하는 실수가 있습니다. 복소 지수함수 $e^{i\\theta}$의 절대값은 항상 $1$입니다."
    },
    {
      "id": "21-2",
      "type": "text",
      "difficulty": 2,
      "question": "$\\displaystyle\\sum_{n=1}^{\\infty} \\dfrac{\\sin(nx)}{n^3}$ 이 $\\mathbb{R}$ 에서 균등 수렴함을 M-판정법으로 보이려 할 때, 적절한 $M_n$ 은? (예: 1/n^2)",
      "answer": "1/n^3",
      "hints": [
        "$|\\sin(nx)| \\leq 1$ 을 이용하세요.",
        "$\\left|\\dfrac{\\sin(nx)}{n^3}\\right| \\leq \\dfrac{1}{n^3}$.",
        "$\\sum \\dfrac{1}{n^3}$ 은 $p$-급수 ($p = 3 > 1$) 로 수렴합니다."
      ],
      "explanation": "$|\\sin(nx)| \\leq 1$ 이므로 $\\left|\\dfrac{\\sin(nx)}{n^3}\\right| \\leq \\dfrac{1}{n^3} = M_n$. $\\sum \\dfrac{1}{n^3}$ 은 $p$-급수에서 $p = 3 > 1$ 이므로 수렴합니다. M-판정법의 두 조건이 만족되어 원래 급수는 $\\mathbb{R}$ 에서 균등 절대수렴합니다.",
      "wrongAnalysis": "$M_n = \\dfrac{1}{n}$ 이나 $\\dfrac{1}{n^2}$ 을 쓰는 것도 부등식은 만족하지만, M-판정법의 핵심은 $\\sum M_n < \\infty$ 이므로 가능한 한 타이트한 바운드를 잡는 것이 좋습니다. $1/n^3$ 이 자연스러운 선택입니다."
    },
    {
      "id": "21-3",
      "type": "choice",
      "difficulty": 3,
      "question": "수렴반경 $R$ 인 멱급수 $\\sum a_n x^n$ 에 대해, M-판정법이 보장하는 것은?",
      "choices": [
        "$|x| < R$ 인 모든 $x$ 에서 균등 수렴한다",
        "$|x| \\leq r < R$ 인 임의의 닫힌 구간 $[-r, r]$ 에서 균등 수렴한다",
        "$|x| = R$ 에서도 균등 수렴한다",
        "$|x| > R$ 에서도 조건부 수렴한다"
      ],
      "answer": "$|x| \\leq r < R$ 인 임의의 닫힌 구간 $[-r, r]$ 에서 균등 수렴한다",
      "hints": [
        "$|x| \\leq r$ 이면 $|a_n x^n| \\leq |a_n| r^n = M_n$ 으로 바운드됩니다.",
        "$r < R$ 이면 $\\sum |a_n| r^n$ 이 수렴합니다.",
        "$(-R, R)$ 전체에서는? $r$ 을 $R$ 에 가까이 잡으면 되지만, 열린 구간 전체에서의 **균등** 수렴은 보장되지 않습니다."
      ],
      "explanation": "$0 < r < R$ 이면 $M_n = |a_n| r^n$ 으로 놓을 때 $\\sum M_n$ 이 수렴하므로, M-판정법에 의해 $[-r, r]$ 에서 균등 수렴합니다. 그러나 열린 구간 $(-R, R)$ 전체에서의 균등 수렴은 일반적으로 보장되지 않습니다 ($x \\to R$ 로 가면 바운드가 무너질 수 있음). 이 '수렴반경 내부의 닫힌 부분구간에서 균등 수렴' 이라는 결과가 멱급수의 항별 미분·적분을 정당화합니다.",
      "wrongAnalysis": "'$|x| < R$ 전체에서 균등 수렴' 이라고 답하는 실수가 많습니다. M-판정법은 닫힌 구간 $[-r, r]$ ($r < R$)에서의 균등 수렴을 보장하며, 이를 열린 구간 전체로 무비판적으로 확장하면 안 됩니다."
    }
  ],
  "summary": {
    "keyPoints": [
      "$|f_n(x)| \\leq M_n$ (모든 $x$) 이고 $\\sum M_n < \\infty$ 이면 $\\sum f_n$ 균등 절대수렴",
      "증명은 코시 판정법을 $x$ 에 무관하게 적용하는 것",
      "멱급수는 수렴반경 내부의 닫힌 구간에서 균등 수렴 $\\to$ 항별 미분·적분 정당화",
      "비교판정법(레슨 48)의 '균등 버전' — $x$ 에 무관한 상수로 비교"
    ],
    "formulas": [
      "|f_n(x)| \\leq M_n\\ (\\forall x),\\quad \\sum M_n < \\infty \\Rightarrow \\sum f_n\\ \\text{균등 절대수렴}",
      "\\text{멱급수:}\\ M_n = |a_n|r^n,\\quad r < R \\Rightarrow \\sum M_n < \\infty",
      "\\left|\\sum_{k=n+1}^{m} f_k(x)\\right| \\leq \\sum_{k=n+1}^{m} M_k < \\varepsilon"
    ],
    "commonMistakes": [
      "$M_n \\to 0$ 만 확인하고 $\\sum M_n$ 수렴을 확인하지 않는 실수",
      "멱급수의 균등 수렴을 열린 구간 $(-R, R)$ 전체로 잘못 확장하는 실수",
      "M-판정법의 역이 성립한다고 오해하는 실수 (M-판정법 실패해도 균등 수렴할 수 있음)"
    ],
    "nextConnection": "지금까지 급수 단원에서 수열·급수의 수렴, 테일러 급수, 복소수, 오일러 공식, 푸리에 급수, 그리고 함수열의 수렴까지 다루었습니다. 다변수 미적분으로 확장하기 전에, 그 무대가 될 '벡터'와 '행렬'을 먼저 다집니다. 다음 단원부터 선형대수의 핵심을 정리합니다."
  }
}
];
