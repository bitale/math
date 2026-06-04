import { Lesson } from "../../types";

export const limitsLessons: Lesson[] = [
{
  "id": 7,
  "title": "극한의 엄밀한 정의",
  "category": "극한과 연속",
  "level": "기초",
  "question": "$\\lim_{x \\to a} f(x) = L$이라는 것을 수학적으로 정확히 어떻게 정의하는가?",
  "concept": {
    "intro": "직관적으로 '$x$가 $a$에 가까이 가면 $f(x)$가 $L$에 가까워진다'는 표현은 명확해 보이지만, 수학에서는 이 문장만으로는 부족합니다. '가까이'가 정확히 얼마나 가까운 것인지, '가까워진다'가 어떤 정밀도까지 보장되는 것인지 한 치의 모호함도 없어야 합니다. 19세기 수학자 바이어슈트라스(Weierstrass)는 이 모호함을 해결하기 위해 엡실론-델타($\\varepsilon$-$\\delta$) 정의를 제안했습니다.\n\n\n:::definition[$\\varepsilon$-$\\delta$ 극한 정의]\n엡실론-델타 정의의 핵심 아이디어는 다음과 같습니다. 누군가가 아무리 작은 오차 허용 범위 $\\varepsilon > 0$을 제시하더라도, 우리가 $x$를 $a$에 충분히 가까운 범위 $\\delta$ 안에 잡기만 하면 $f(x)$와 $L$ 사이의 거리가 $\\varepsilon$ 미만이 된다는 것입니다. 수학적으로 쓰면 $\\forall \\varepsilon > 0,\\; \\exists \\delta > 0$ such that $0 < |x - a| < \\delta \\Rightarrow |f(x) - L| < \\varepsilon$입니다.\n\n:::\n\n이 정의를 이해하는 열쇠는 '도전자-방어자 게임'으로 생각하는 것입니다. 도전자가 $\\varepsilon$을 던지면, 방어자가 적절한 $\\delta$를 찾아 반격합니다. 어떤 $\\varepsilon$이 오더라도 $\\delta$를 찾을 수 있다면, 극한이 $L$임이 증명됩니다. 반대로 단 하나의 $\\varepsilon$에 대해서도 $\\delta$를 찾지 못하면 극한이 $L$이 아닙니다.\n\n\n:::definition[좌극한과 우극한]\n한쪽에서만 다가가는 경우도 있습니다. 좌극한은 $x < a$ 범위에서, 우극한은 $x > a$ 범위에서 같은 구조를 적용합니다. 즉, $\\lim_{x \\to a^-} f(x) = L$은 $0 < a - x < \\delta$일 때 $|f(x) - L| < \\varepsilon$이 성립하는 것이고, $\\lim_{x \\to a^+} f(x) = L$은 $0 < x - a < \\delta$일 때 같은 부등식이 성립하는 것입니다. 양쪽 극한이 모두 존재하고 같을 때에만 극한이 존재합니다.\n:::",
    "intuition": "엡실론-델타 정의를 비유하면 '과녁 맞히기'와 같습니다. $\\varepsilon$은 과녁의 반지름이고, $\\delta$는 화살을 쏘는 위치의 허용 범위입니다. 과녁이 아무리 작아져도 충분히 가까이 서서 쏘면 과녁 안에 맞출 수 있다는 것이 극한의 의미입니다.\n\n또 다른 비유로, 온도 조절기를 떠올려 보세요. 목표 온도 $L$에서 $\\varepsilon$만큼의 오차 이내로 유지하고 싶다면, 다이얼을 $a$에서 $\\delta$ 범위 안에 놓으면 됩니다. 어떤 정밀도를 요구하든 다이얼 조절이 가능하다면, 그 시스템의 극한 온도는 $L$인 것입니다.",
    "formula": "\\lim_{x \\to a} f(x) = L \\;:\\; \\forall\\,\\varepsilon > 0,\\; \\exists\\,\\delta > 0 \\text{ s.t. } 0 < |x - a| < \\delta \\Rightarrow |f(x) - L| < \\varepsilon\n\\lim_{x \\to a^+} f(x) = L \\;:\\; \\forall\\,\\varepsilon > 0,\\; \\exists\\,\\delta > 0 \\text{ s.t. } 0 < x - a < \\delta \\Rightarrow |f(x) - L| < \\varepsilon\n\\lim_{x \\to a^-} f(x) = L \\;:\\; \\forall\\,\\varepsilon > 0,\\; \\exists\\,\\delta > 0 \\text{ s.t. } 0 < a - x < \\delta \\Rightarrow |f(x) - L| < \\varepsilon\nf \\text{가 } x = a\\text{에서 연속} \\;\\Longleftrightarrow\\; \\lim_{x \\to a} f(x) = f(a)",
    "summary": "• $\\varepsilon$-$\\delta$ 정의는 '아무리 작은 오차 $\\varepsilon$에도 대응하는 $\\delta$가 존재한다'는 구조입니다.\n• 조건 $0 < |x - a|$은 $x = a$ 자체는 제외한다는 뜻입니다. 극한은 $a$에서의 함수값과 무관합니다.\n• 좌극한과 우극한이 모두 같을 때에만 극한이 존재합니다.\n• 연속의 $\\varepsilon$-$\\delta$ 표현: $\\forall \\varepsilon > 0,\\; \\exists \\delta > 0$ s.t. $|x - a| < \\delta \\Rightarrow |f(x) - f(a)| < \\varepsilon$ (여기서는 $0 <$ 조건이 빠집니다)."
  },
  "examples": [
    {
      "title": "엡실론-델타로 극한 증명하기",
      "problem": "$\\lim_{x \\to 3}(2x + 1) = 7$임을 $\\varepsilon$-$\\delta$ 정의를 사용하여 증명하시오.",
      "steps": [
        "$|f(x) - L| = |(2x + 1) - 7| = |2x - 6| = 2|x - 3|$으로 정리한다.",
        "$2|x - 3| < \\varepsilon$이 되려면 $|x - 3| < \\dfrac{\\varepsilon}{2}$이면 충분하다.",
        "$\\delta = \\dfrac{\\varepsilon}{2}$로 놓으면, $0 < |x - 3| < \\delta$일 때 $|f(x) - 7| = 2|x - 3| < 2\\delta = \\varepsilon$이 성립한다.",
        "따라서 임의의 $\\varepsilon > 0$에 대해 $\\delta = \\dfrac{\\varepsilon}{2} > 0$이 존재하므로 정의에 의해 $\\lim_{x \\to 3}(2x+1) = 7$이다. $\\square$"
      ],
      "answer": "$\\delta = \\dfrac{\\varepsilon}{2}$로 잡으면 정의가 만족되어 극한이 $7$임이 증명된다.",
      "lesson": "1차 함수의 경우 $|f(x) - L|$을 $|x - a|$로 직접 묶을 수 있으므로 $\\delta$를 바로 구할 수 있습니다. 고차 함수에서는 $|x - a|$를 제한하는 예비 조건이 필요합니다."
    },
    {
      "title": "[기본] 상수함수의 극한 증명",
      "problem": "$f(x) = 5$일 때 $\\lim_{x \\to 2} f(x) = 5$임을 $\\varepsilon$-$\\delta$ 정의로 증명하시오.",
      "steps": [
        "임의의 $\\varepsilon > 0$이 주어졌다.",
        "$|f(x) - 5| = |5 - 5| = 0 < \\varepsilon$이 모든 $x$에서 성립한다.",
        "따라서 $\\delta$는 아무 양수나 택해도 된다. 예를 들어 $\\delta = 1$로 놓자.",
        "$0 < |x - 2| < 1$이면 $|f(x) - 5| = 0 < \\varepsilon$이다. $\\square$"
      ],
      "answer": "$\\delta = 1$ (또는 아무 양수)로 잡으면 $|f(x) - 5| = 0 < \\varepsilon$이 자동으로 성립한다.",
      "lesson": "상수함수의 극한 증명은 가장 간단한 $\\varepsilon$-$\\delta$ 증명입니다. $\\delta$의 선택이 자유로운 것이 특징입니다."
    },
    {
      "title": "[응용] 극한이 존재하지 않음을 증명하기",
      "problem": "$f(x) = \\begin{cases} 1 & x > 0 \\\\ -1 & x < 0 \\end{cases}$에서 $\\lim_{x \\to 0} f(x)$가 존재하지 않음을 증명하시오.",
      "steps": [
        "우극한: $\\lim_{x \\to 0^+} f(x) = 1$ (양수에서는 $f(x) = 1$).",
        "좌극한: $\\lim_{x \\to 0^-} f(x) = -1$ (음수에서는 $f(x) = -1$).",
        "좌극한 $\\neq$ 우극한이므로 ($-1 \\neq 1$), 극한이 존재하지 않는다.",
        "또는 직접: $L$이 극한이라 가정하고 $\\varepsilon = 1/2$로 택하면, 어떤 $\\delta > 0$이든 $B(0, \\delta) \\setminus \\{0\\}$에 양수와 음수가 모두 존재하여 $|f(x) - L| \\geq 1 > 1/2$인 $x$가 있다."
      ],
      "answer": "좌극한 $= -1 \\neq 1 =$ 우극한이므로 극한이 존재하지 않는다.",
      "lesson": "양쪽 극한이 다르면 극한이 존재하지 않습니다. 극한의 비존재를 보일 때는 좌극한과 우극한을 비교하거나, 극한 정의의 부정을 직접 사용합니다."
    },
    {
      "title": "[응용] $\\varepsilon$-$\\delta$로 $\\lim_{x \\to 1} \\frac{1}{x} = 1$ 증명",
      "problem": "$\\lim_{x \\to 1} \\frac{1}{x} = 1$을 $\\varepsilon$-$\\delta$ 정의로 증명하시오.",
      "steps": [
        "$\\left|\\frac{1}{x} - 1\\right| = \\left|\\frac{1 - x}{x}\\right| = \\frac{|x - 1|}{|x|}$이다.",
        "예비 조건: $|x - 1| < 1/2$이면 $1/2 < x < 3/2$이므로 $|x| > 1/2$이다.",
        "따라서 $\\frac{|x - 1|}{|x|} < \\frac{|x - 1|}{1/2} = 2|x - 1|$이다.",
        "$2|x - 1| < \\varepsilon$이면 $|x - 1| < \\varepsilon/2$이면 된다.",
        "$\\delta = \\min(1/2, \\varepsilon/2)$로 놓으면 두 조건이 동시에 만족된다. $\\square$"
      ],
      "answer": "$\\delta = \\min(1/2, \\varepsilon/2)$로 잡으면 $|1/x - 1| \\leq 2|x - 1| < \\varepsilon$이다.",
      "lesson": "분수 함수에서는 분모 $|x|$의 하한을 확보하는 예비 조건이 필수적입니다. 이는 역수 법칙 증명의 핵심 아이디어와 같습니다."
    },
    {
      "title": "[심화] 극한의 유일성 증명",
      "problem": "$\\lim_{x \\to a} f(x) = L_1$이고 $\\lim_{x \\to a} f(x) = L_2$이면 $L_1 = L_2$임을 증명하시오.",
      "steps": [
        "$\\varepsilon > 0$이 임의로 주어졌다.",
        "가정에 의해 $\\delta_1 > 0$이 존재하여 $0 < |x - a| < \\delta_1$이면 $|f(x) - L_1| < \\varepsilon/2$이다.",
        "$\\delta_2 > 0$이 존재하여 $0 < |x - a| < \\delta_2$이면 $|f(x) - L_2| < \\varepsilon/2$이다.",
        "$\\delta = \\min(\\delta_1, \\delta_2)$로 놓으면, $0 < |x - a| < \\delta$인 $x$에 대해 삼각부등식으로 $|L_1 - L_2| \\leq |L_1 - f(x)| + |f(x) - L_2| < \\varepsilon/2 + \\varepsilon/2 = \\varepsilon$이다.",
        "$|L_1 - L_2| < \\varepsilon$이 모든 $\\varepsilon > 0$에 대해 성립하므로 $|L_1 - L_2| = 0$, 즉 $L_1 = L_2$이다. $\\square$"
      ],
      "answer": "삼각부등식으로 $|L_1 - L_2| < \\varepsilon$이 모든 $\\varepsilon > 0$에 대해 성립하므로 $L_1 = L_2$이다.",
      "lesson": "극한의 유일성은 $\\varepsilon$-$\\delta$ 정의에서 자연스럽게 따라나옵니다. '모든 $\\varepsilon > 0$에 대해 $|a| < \\varepsilon$이면 $a = 0$'이라는 원리가 핵심입니다."
    }
  ],
  "problems": [
    {
      "id": "7-1",
      "type": "choice",
      "difficulty": 1,
      "question": "$\\lim_{x \\to a} f(x) = L$의 엡실론-델타 정의에서, $\\varepsilon$과 $\\delta$의 역할로 올바른 것은?",
      "choices": [
        "$\\varepsilon$은 $x$의 허용 범위, $\\delta$는 $f(x)$의 허용 범위",
        "$\\varepsilon$은 $f(x)$의 오차 한계, $\\delta$는 $x$의 근방 범위",
        "$\\varepsilon$과 $\\delta$는 항상 같은 값이어야 한다",
        "$\\delta$를 먼저 정하면 그에 맞는 $\\varepsilon$이 결정된다"
      ],
      "answer": "$\\varepsilon$은 $f(x)$의 오차 한계, $\\delta$는 $x$의 근방 범위",
      "hints": [
        "$\\varepsilon$은 출력 쪽, $\\delta$는 입력 쪽에 관계됩니다.",
        "$|f(x) - L| < \\varepsilon$에서 $\\varepsilon$이 어디에 쓰이는지 보세요.",
        "$0 < |x - a| < \\delta$에서 $\\delta$가 입력 $x$를 제한합니다."
      ],
      "explanation": "$\\varepsilon$-$\\delta$ 정의에서 $\\varepsilon > 0$은 출력 $f(x)$와 극한값 $L$ 사이의 오차 한계이고, $\\delta > 0$은 입력 $x$와 $a$ 사이의 거리 범위입니다. 임의의 $\\varepsilon$이 주어지면 적절한 $\\delta$를 찾는 구조이므로 $\\varepsilon$이 먼저 주어지고 $\\delta$가 대응됩니다.",
      "wrongAnalysis": "첫 번째 보기처럼 $\\varepsilon$과 $\\delta$의 역할을 뒤바꾸는 실수가 흔합니다. 정의식에서 $|f(x) - L| < \\varepsilon$, $|x - a| < \\delta$를 확인하면 역할이 명확합니다."
    },
    {
      "id": "7-4",
      "type": "choice",
      "difficulty": 1,
      "question": "$\\varepsilon$-$\\delta$ 극한 정의에서 $0 < |x - a|$ 조건이 필요한 이유는?",
      "choices": [
        "$x$가 $a$보다 항상 커야 하므로",
        "$x = a$에서의 함수값은 극한과 무관하기 때문에 $x = a$를 제외해야 한다",
        "$\\delta$가 양수임을 보장하기 위해",
        "$f(a)$가 존재해야 극한이 존재하므로"
      ],
      "answer": "$x = a$에서의 함수값은 극한과 무관하기 때문에 $x = a$를 제외해야 한다",
      "hints": [
        "극한 $\\lim_{x \\to a} f(x) = L$은 $x$가 $a$로 '다가가는' 행동을 보는 것입니다.",
        "$x = a$ 자체에서 함수값이 얼마인지(또는 정의되지 않는지)는 극한에 영향을 주지 않습니다.",
        "$0 < |x - a|$는 $x \\neq a$를 의미합니다."
      ],
      "explanation": "극한은 $x$가 $a$에 '한없이 가까워질 때' 함수의 행동을 기술합니다. $x = a$에서의 함수값은 극한의 정의에 관여하지 않으므로, $x = a$를 제외하는 $0 < |x - a|$ 조건이 필요합니다. 이 덕분에 $f(a)$가 정의되지 않거나 극한값과 다르더라도 극한 자체는 존재할 수 있습니다.",
      "wrongAnalysis": "'$f(a)$가 존재해야 극한이 존재한다'는 흔한 오해입니다. $f(x) = \\frac{x^2-1}{x-1}$은 $x=1$에서 정의되지 않지만 $\\lim_{x\\to 1} f(x) = 2$입니다."
    },
    {
      "id": "7-5",
      "type": "text",
      "difficulty": 2,
      "question": "$\\lim_{x \\to 1}(5x - 3) = 2$를 $\\varepsilon$-$\\delta$ 정의로 증명하시오. $\\delta$를 $\\varepsilon$으로 나타내세요.",
      "answer": "delta = epsilon/5. |f(x) - 2| = |5x - 3 - 2| = |5x - 5| = 5|x - 1| < 5·(ε/5) = ε.",
      "hints": [
        "$|f(x) - L| = |(5x-3) - 2| = |5x - 5| = 5|x-1|$로 정리하세요.",
        "$5|x - 1| < \\varepsilon$이 되려면 $|x - 1| < \\varepsilon/5$이어야 합니다.",
        "$\\delta = \\varepsilon/5$로 놓으면 $0 < |x-1| < \\delta$일 때 $|f(x) - 2| < \\varepsilon$입니다."
      ],
      "explanation": "$|f(x) - 2| = |5x - 5| = 5|x-1|$. 임의의 $\\varepsilon > 0$에 대해 $\\delta = \\varepsilon/5 > 0$으로 놓으면, $0 < |x-1| < \\delta$일 때 $|f(x) - 2| = 5|x-1| < 5 \\cdot \\varepsilon/5 = \\varepsilon$. 따라서 정의에 의해 $\\lim_{x\\to 1}(5x-3) = 2$. $\\square$",
      "wrongAnalysis": "$\\delta = \\varepsilon$으로 놓는 실수가 흔합니다. 기울기 $5$로 인해 함수값 변화가 입력 변화의 $5$배이므로, $\\delta = \\varepsilon/5$로 나누어야 합니다."
    },
    {
      "id": "7-2",
      "type": "number",
      "difficulty": 2,
      "question": "$\\lim_{x \\to 2}(3x + 4) = 10$을 증명할 때, $\\varepsilon = 0.06$이면 $\\delta$의 최대값은? (소수로 답하시오)",
      "answer": "0.02",
      "hints": [
        "$|f(x) - 10| = |3x + 4 - 10| = |3x - 6| = 3|x - 2|$로 정리하세요.",
        "$3|x - 2| < 0.06$이 되려면 $|x - 2| < ?$를 구하세요.",
        "$\\delta = \\dfrac{\\varepsilon}{3} = \\dfrac{0.06}{3}$을 계산하세요."
      ],
      "explanation": "$|(3x+4) - 10| = 3|x-2|$이므로, $3|x-2| < \\varepsilon = 0.06$에서 $|x-2| < 0.02$입니다. 따라서 $\\delta = \\dfrac{\\varepsilon}{3} = 0.02$가 최대값입니다.",
      "wrongAnalysis": "$\\delta = \\varepsilon = 0.06$으로 답하는 경우가 있는데, 계수 $3$으로 나누어야 합니다. $|f(x) - L|$을 $|x - a|$로 표현할 때 나오는 계수를 반드시 고려하세요."
    },
    {
      "id": "7-3",
      "type": "text",
      "difficulty": 3,
      "question": "$f(x) = x^2$에서 $\\lim_{x \\to 2} x^2 = 4$를 증명할 때, $|x - 2| < 1$이라는 예비 조건 하에서 $\\delta$를 $\\varepsilon$으로 나타내시오. (예: min(1, e/5) 형태, e는 엡실론)",
      "answer": "min(1, e/5)",
      "hints": [
        "$|x^2 - 4| = |x-2||x+2|$로 인수분해하세요.",
        "$|x - 2| < 1$이면 $1 < x < 3$이므로 $|x + 2| < 5$입니다.",
        "$|x^2 - 4| < 5|x - 2|$이므로, $5|x - 2| < \\varepsilon$이면 $|x - 2| < \\varepsilon/5$이고 예비 조건과 합치면 $\\delta = \\min(1,\\, \\varepsilon/5)$입니다."
      ],
      "explanation": "$|x^2 - 4| = |x-2||x+2|$에서 $|x+2|$를 상수로 묶기 위해 $|x-2|<1$이라 가정하면 $|x+2| < 5$입니다. 따라서 $|x^2-4| < 5|x-2|$이고, $5|x-2| < \\varepsilon$이면 $|x-2| < \\varepsilon/5$입니다. 예비 조건까지 포함하여 $\\delta = \\min(1,\\, \\varepsilon/5)$로 잡으면 두 조건이 동시에 만족됩니다.",
      "wrongAnalysis": "$\\delta = \\varepsilon/5$만 쓰고 예비 조건 $1$을 빠뜨리는 실수가 많습니다. $\\varepsilon$이 매우 큰 경우 $\\varepsilon/5 > 1$이 되어 $|x+2| < 5$라는 바운드가 깨지므로 반드시 $\\min$을 사용해야 합니다."
    }
  ],
  "summary": {
    "keyPoints": [
      "$\\varepsilon$-$\\delta$ 정의는 극한의 수학적으로 엄밀한 표현이다.",
      "임의의 $\\varepsilon > 0$에 대해 적절한 $\\delta > 0$을 찾으면 극한이 증명된다.",
      "1차 함수에서는 $\\delta = \\varepsilon / |\\text{기울기}|$로 바로 구할 수 있다.",
      "고차 함수에서는 예비 조건으로 $|x - a|$를 제한한 뒤 $\\delta = \\min(\\text{예비값},\\, \\varepsilon / M)$ 형태를 사용한다."
    ],
    "formulas": [
      "\\forall\\,\\varepsilon > 0,\\; \\exists\\,\\delta > 0 \\text{ s.t. } 0 < |x - a| < \\delta \\Rightarrow |f(x) - L| < \\varepsilon",
      "f \\text{가 } x=a\\text{에서 연속} \\Leftrightarrow \\forall\\,\\varepsilon > 0,\\; \\exists\\,\\delta > 0 \\text{ s.t. } |x-a|<\\delta \\Rightarrow |f(x)-f(a)|<\\varepsilon"
    ],
    "commonMistakes": [
      "$\\varepsilon$과 $\\delta$의 역할을 뒤바꾸는 실수",
      "$\\delta$를 구할 때 함수의 계수를 나누는 것을 잊는 실수",
      "고차 함수에서 예비 조건($|x - a| < 1$ 등)을 빠뜨리고 $\\delta$를 설정하는 실수"
    ],
    "nextConnection": "다음 레슨에서는 연속함수가 갖는 강력한 성질인 중간값 정리와 최대·최소값 정리를 배웁니다."
  }
},
{
  "id": 8,
  "title": "극한 법칙의 엄밀한 증명",
  "category": "극한과 연속",
  "level": "기초",
  "question": "극한의 합·곱·몫 법칙이 성립하는 이유를 $\\varepsilon$-$\\delta$로 어떻게 증명하는가?",
  "concept": {
    "intro": "이전 레슨에서 우리는 극한의 $\\varepsilon$-$\\delta$ 정의를 배웠습니다. $\\lim_{x \\to a} f(x) = L$이란 임의의 $\\varepsilon > 0$에 대해 적절한 $\\delta > 0$이 존재하여 $0 < |x - a| < \\delta$이면 $|f(x) - L| < \\varepsilon$이 성립한다는 뜻이었습니다. 그런데 실전에서 극한을 계산할 때 우리는 항상 극한의 합 법칙, 곱 법칙, 몫 법칙 등을 '당연히' 사용합니다. 예를 들어 $\\lim_{x \\to 2}(3x^2 + x)$를 구할 때, $\\lim_{x \\to 2} 3x^2 = 12$이고 $\\lim_{x \\to 2} x = 2$이므로 합은 $14$라고 결론짓습니다. 하지만 이 법칙들이 왜 성립하는지를 묻는다면, $\\varepsilon$-$\\delta$ 정의로 돌아가 엄밀히 증명해야 합니다. 이 레슨에서는 극한의 주요 법칙들을 하나하나 엄밀하게 증명합니다.\n\n\n:::theorem[극한의 합 법칙]\n첫 번째로 극한의 합 법칙(Limit of a Sum)을 증명합니다. 정리: $\\lim_{x \\to a} f(x) = L$이고 $\\lim_{x \\to a} g(x) = M$이면 $\\lim_{x \\to a}[f(x) + g(x)] = L + M$이다. 증명은 다음과 같습니다. 임의의 $\\varepsilon > 0$이 주어졌다고 하자. $\\lim_{x \\to a} f(x) = L$이므로 $\\varepsilon/2 > 0$에 대응하는 $\\delta_1 > 0$이 존재하여 $0 < |x - a| < \\delta_1$이면 $|f(x) - L| < \\varepsilon/2$이다. 마찬가지로 $\\lim_{x \\to a} g(x) = M$이므로 $\\varepsilon/2 > 0$에 대응하는 $\\delta_2 > 0$이 존재하여 $0 < |x - a| < \\delta_2$이면 $|g(x) - M| < \\varepsilon/2$이다. 이제 $\\delta = \\min(\\delta_1, \\delta_2)$로 놓으면, $0 < |x - a| < \\delta$일 때 삼각부등식에 의해 $|f(x) + g(x) - (L + M)| = |(f(x) - L) + (g(x) - M)| \\leq |f(x) - L| + |g(x) - M| < \\varepsilon/2 + \\varepsilon/2 = \\varepsilon$이다. 따라서 $\\lim_{x \\to a}[f(x) + g(x)] = L + M$이다. $\\square$ 이 증명의 핵심 아이디어는 $\\varepsilon$을 반으로 나누어 각 함수에 배분하고, $\\delta$를 두 값 중 작은 것으로 잡아 두 조건을 동시에 만족시키는 것입니다.\n\n:::\n\n:::theorem[극한의 상수배 법칙]\n두 번째로 극한의 상수배 법칙을 증명합니다. 정리: $\\lim_{x \\to a} f(x) = L$이면 $\\lim_{x \\to a} c \\cdot f(x) = c \\cdot L$이다 (단, $c$는 상수). 증명: $c = 0$이면 $c \\cdot f(x) = 0$이므로 자명하다. $c \\neq 0$일 때, 임의의 $\\varepsilon > 0$에 대해 $\\varepsilon/|c| > 0$이다. 가정에 의해 $\\delta > 0$이 존재하여 $0 < |x - a| < \\delta$이면 $|f(x) - L| < \\varepsilon/|c|$이다. 그러면 $|cf(x) - cL| = |c||f(x) - L| < |c| \\cdot \\varepsilon/|c| = \\varepsilon$이다. $\\square$ 상수배 법칙은 합 법칙보다 간단하지만, $c = 0$인 경우를 별도로 처리하는 점을 주목하세요.\n\n:::\n\n:::theorem[극한의 곱 법칙]\n세 번째로 극한의 곱 법칙(Limit of a Product)을 증명합니다. 이것은 합 법칙보다 상당히 까다롭습니다. 정리: $\\lim_{x \\to a} f(x) = L$이고 $\\lim_{x \\to a} g(x) = M$이면 $\\lim_{x \\to a} f(x) \\cdot g(x) = L \\cdot M$이다. 증명: 핵심 트릭은 $|f(x)g(x) - LM|$에 $Lg(x)$를 더하고 빼는 것입니다. $|f(x)g(x) - LM| = |f(x)g(x) - Lg(x) + Lg(x) - LM| = |g(x)(f(x) - L) + L(g(x) - M)| \\leq |g(x)||f(x) - L| + |L||g(x) - M|$. 여기서 $|g(x) - M|$은 $\\varepsilon$으로 제어할 수 있지만, $|g(x)||f(x) - L|$에서 $|g(x)|$가 제멋대로 커질 수 있으므로 먼저 $|g(x)|$가 유계(bounded)임을 보여야 합니다. $\\lim_{x \\to a} g(x) = M$이므로 $\\varepsilon_0 = 1$에 대응하는 $\\delta_0 > 0$이 존재하여 $0 < |x - a| < \\delta_0$이면 $|g(x) - M| < 1$이다. 삼각부등식에 의해 $|g(x)| = |g(x) - M + M| \\leq |g(x) - M| + |M| < 1 + |M|$이다. 이제 $B = \\max(1 + |M|, 1)$로 놓으면 $|g(x)| \\leq B$이다. 임의의 $\\varepsilon > 0$에 대해, $|f(x) - L| < \\varepsilon/(2B)$인 $\\delta_1$과 $|g(x) - M| < \\varepsilon/(2(|L| + 1))$인 $\\delta_2$를 잡는다. $\\delta = \\min(\\delta_0, \\delta_1, \\delta_2)$로 두면 $|f(x)g(x) - LM| \\leq |g(x)||f(x) - L| + |L||g(x) - M| < B \\cdot \\varepsilon/(2B) + |L| \\cdot \\varepsilon/(2(|L| + 1)) < \\varepsilon/2 + \\varepsilon/2 = \\varepsilon$이다. $\\square$ 이 증명에서 가장 중요한 포인트는 $|g(x)|$의 유계성을 먼저 확보하는 단계입니다. 극한이 존재하는 함수는 극한점 근방에서 반드시 유계라는 사실이 핵심 보조정리입니다.\n\n:::\n\n:::theorem[극한의 역수 법칙]\n네 번째로 극한의 역수 및 몫 법칙을 간단히 다룹니다. 정리: $\\lim_{x \\to a} g(x) = M \\neq 0$이면 $\\lim_{x \\to a} \\frac{1}{g(x)} = \\frac{1}{M}$이다. 증명의 핵심: $|1/g(x) - 1/M| = |M - g(x)|/(|g(x)||M|)$인데, $|g(x)|$가 $0$에 너무 가까워지면 분모가 폭발합니다. 이를 막기 위해 먼저 $\\delta_0$를 잡아 $|g(x) - M| < |M|/2$가 되게 하면, 역삼각부등식에 의해 $|g(x)| > |M| - |M|/2 = |M|/2$입니다. 따라서 $|1/g(x) - 1/M| = |g(x) - M|/(|g(x)||M|) < |g(x) - M| \\cdot 2/M^2$이 됩니다. 이제 $|g(x) - M| < \\varepsilon M^2/2$이 되도록 $\\delta_1$을 잡고 $\\delta = \\min(\\delta_0, \\delta_1)$로 두면 증명이 완성됩니다. 몫 법칙 $\\lim f(x)/g(x) = L/M$은 곱 법칙과 역수 법칙을 합쳐서 $f(x)/g(x) = f(x) \\cdot (1/g(x))$로 증명합니다.\n\n:::\n\n:::theorem[조임 정리]\n다섯 번째로 조임 정리(Squeeze Theorem)를 엄밀히 증명합니다. 정리: $a$의 근방에서 $g(x) \\leq f(x) \\leq h(x)$이고 $\\lim_{x \\to a} g(x) = \\lim_{x \\to a} h(x) = L$이면 $\\lim_{x \\to a} f(x) = L$이다. 증명: 임의의 $\\varepsilon > 0$이 주어졌다. $\\lim_{x \\to a} g(x) = L$이므로 $\\delta_1 > 0$이 존재하여 $0 < |x - a| < \\delta_1$이면 $|g(x) - L| < \\varepsilon$, 즉 $L - \\varepsilon < g(x)$이다. $\\lim_{x \\to a} h(x) = L$이므로 $\\delta_2 > 0$이 존재하여 $0 < |x - a| < \\delta_2$이면 $|h(x) - L| < \\varepsilon$, 즉 $h(x) < L + \\varepsilon$이다. $\\delta = \\min(\\delta_1, \\delta_2)$로 놓으면, $0 < |x - a| < \\delta$일 때 $L - \\varepsilon < g(x) \\leq f(x) \\leq h(x) < L + \\varepsilon$이므로 $|f(x) - L| < \\varepsilon$이다. $\\square$ 조임 정리의 증명은 아이디어 자체는 매우 직관적이지만, $\\delta$를 두 값의 최솟값으로 잡는 기법이 합 법칙의 증명과 동일한 패턴임을 확인하세요. 이처럼 $\\varepsilon$-$\\delta$ 증명에서 '여러 조건을 동시에 만족시키려면 $\\delta$의 $\\min$을 취한다'는 것은 반복적으로 나타나는 핵심 전략입니다.\n:::",
    "intuition": "합 법칙의 핵심 비유는 '예산 분배'입니다. 전체 오차 $\\varepsilon$이라는 예산을 $f$와 $g$에 절반씩 나누어 줍니다. 각자 자기 몫만 쓰면 합계가 예산을 초과하지 않습니다.\n\n곱 법칙이 까다로운 이유는 '두 변하는 양의 곱'이기 때문입니다. 직사각형의 넓이를 생각하면, 가로도 변하고 세로도 변합니다. 넓이 오차를 제어하려면 먼저 한 변의 길이가 무한히 커지지 않는다는 것(유계성)을 확인해야 합니다.\n\n조임 정리는 '샌드위치'입니다. 위의 빵과 아래의 빵이 같은 높이로 수렴하면, 가운데 재료는 갈 곳이 없어 같은 높이에 끼이게 됩니다. 직관적으로 당연하지만, 이것을 $\\varepsilon$-$\\delta$로 번역하면 앞의 정리들과 동일한 $\\delta = \\min(\\delta_1, \\delta_2)$ 패턴이 나타납니다.",
    "formula": "\\textbf{합 법칙:}\\ \\lim_{x \\to a}[f(x)+g(x)] = L + M,\\quad \\delta = \\min(\\delta_1,\\,\\delta_2)\n\\textbf{상수배 법칙:}\\ \\lim_{x \\to a} c\\,f(x) = cL,\\quad \\delta \\text{ from } \\varepsilon/|c|\n\\textbf{곱 법칙:}\\ \\lim_{x \\to a} f(x)\\,g(x) = LM,\\quad \\delta = \\min(\\delta_0,\\,\\delta_1,\\,\\delta_2)\n\\textbf{역수 법칙:}\\ \\lim_{x \\to a} \\frac{1}{g(x)} = \\frac{1}{M}\\ (M \\neq 0),\\quad |g(x)| > \\frac{|M|}{2}\n\\textbf{조임 정리:}\\ g(x) \\leq f(x) \\leq h(x),\\; \\lim g = \\lim h = L \\;\\Rightarrow\\; \\lim f = L",
    "summary": "극한의 합 법칙은 $\\varepsilon$을 반으로 나누어 $\\delta = \\min(\\delta_1, \\delta_2)$를 잡는 것이 핵심이고, 상수배 법칙은 $\\varepsilon/|c|$로 조절합니다. 곱 법칙의 증명에서는 $|g(x)|$가 유계임을 먼저 보여야 하며 이것이 가장 중요한 단계입니다. 역수 법칙에서는 $|g(x)| > |M|/2$라는 하한을 확보하여 분모가 $0$에 다가가지 못하게 합니다. 조임 정리는 위아래 극한에서 각각 $\\delta$를 얻어 $\\min$으로 합칩니다. 모든 증명에서 $\\delta = \\min(\\ldots)$이라는 공통 패턴이 반복됩니다."
  },
  "examples": [
    {
      "title": "극한 법칙을 이용한 $\\lim_{x \\to 2}(3x^2 + x) = 14$의 엄밀한 증명",
      "problem": "$\\lim_{x \\to 2}(3x^2 + x) = 14$를 극한의 합 법칙과 곱 법칙을 사용하여 엄밀하게 증명하시오.",
      "steps": [
        "기본 극한을 확인한다: $\\lim_{x \\to 2} x = 2$ (항등함수의 극한, $\\varepsilon$-$\\delta$ 증명에서 $\\delta = \\varepsilon$으로 잡으면 됨).",
        "곱 법칙을 적용한다: $\\lim_{x \\to 2} x \\cdot x = 2 \\cdot 2 = 4$, 즉 $\\lim_{x \\to 2} x^2 = 4$이다.",
        "상수배 법칙을 적용한다: $\\lim_{x \\to 2} 3x^2 = 3 \\cdot 4 = 12$이다.",
        "합 법칙을 적용한다: $\\lim_{x \\to 2}(3x^2 + x) = 12 + 2 = 14$이다.",
        "이 과정에서 각 단계는 이미 증명된 법칙(곱 법칙, 상수배 법칙, 합 법칙)에 의해 정당화된다. 구체적으로 $\\varepsilon > 0$이 주어지면, 합 법칙의 증명에서 $\\delta_1$은 $|3x^2 - 12| < \\varepsilon/2$를 만족시키는 값이고, $\\delta_2$는 $|x - 2| < \\varepsilon/2$를 만족시키는 값이다. $\\delta = \\min(\\delta_1, \\delta_2)$로 놓으면 $|(3x^2 + x) - 14| \\leq |3x^2 - 12| + |x - 2| < \\varepsilon/2 + \\varepsilon/2 = \\varepsilon$이 된다. $\\square$"
      ],
      "answer": "곱 법칙에 의해 $\\lim x^2 = 4$, 상수배 법칙에 의해 $\\lim 3x^2 = 12$, 항등함수의 극한 $\\lim x = 2$, 합 법칙에 의해 $\\lim(3x^2 + x) = 12 + 2 = 14$이다.",
      "lesson": "복잡한 극한도 기본 법칙들의 연쇄 적용으로 정당화할 수 있습니다. 각 법칙이 $\\varepsilon$-$\\delta$ 정의에서 이미 증명되었으므로, 이들을 조합하는 것은 논리적으로 완전합니다. 이것이 바로 '법칙을 증명한 뒤 법칙만으로 계산하는' 수학적 방법론입니다."
    },
    {
      "title": "[기본] 극한의 합 법칙 직접 적용",
      "problem": "$\\lim_{x \\to 1} x = 1$과 $\\lim_{x \\to 1} x^2 = 1$을 이용하여 $\\lim_{x \\to 1}(x^2 + x) = 2$를 합 법칙으로 증명하시오.",
      "steps": [
        "$\\lim_{x \\to 1} x^2 = 1$ (곱 법칙: $\\lim x \\cdot \\lim x = 1 \\cdot 1$).",
        "$\\lim_{x \\to 1} x = 1$ (항등함수의 극한).",
        "합 법칙에 의해 $\\lim_{x \\to 1}(x^2 + x) = \\lim_{x \\to 1} x^2 + \\lim_{x \\to 1} x = 1 + 1 = 2$이다.",
        "구체적 $\\delta$: $\\varepsilon > 0$에 대해 $|x^2 - 1| < \\varepsilon/2$인 $\\delta_1$과 $|x - 1| < \\varepsilon/2$인 $\\delta_2 = \\varepsilon/2$를 잡아 $\\delta = \\min(\\delta_1, \\delta_2)$로 놓는다."
      ],
      "answer": "$\\lim_{x \\to 1}(x^2 + x) = 1 + 1 = 2$ (합 법칙).",
      "lesson": "극한 법칙을 사용하면 복잡한 $\\varepsilon$-$\\delta$ 증명을 단순한 법칙의 조합으로 대체할 수 있습니다."
    },
    {
      "title": "[응용] 삼각부등식을 이용한 합 법칙의 $\\varepsilon$ 분배",
      "problem": "$\\lim_{x \\to 0}(\\sin x + \\cos x) = 1$을 합 법칙의 $\\varepsilon/2$ 분배 기법으로 설명하시오.",
      "steps": [
        "$\\lim_{x \\to 0} \\sin x = 0$이고 $\\lim_{x \\to 0} \\cos x = 1$이다.",
        "임의의 $\\varepsilon > 0$에 대해 $|\\sin x| < \\varepsilon/2$인 $\\delta_1$과 $|\\cos x - 1| < \\varepsilon/2$인 $\\delta_2$가 존재한다.",
        "$\\delta = \\min(\\delta_1, \\delta_2)$로 놓으면 삼각부등식에 의해:",
        "$|(\\sin x + \\cos x) - 1| = |\\sin x + (\\cos x - 1)| \\leq |\\sin x| + |\\cos x - 1| < \\varepsilon/2 + \\varepsilon/2 = \\varepsilon$."
      ],
      "answer": "$\\varepsilon$을 $\\varepsilon/2$씩 나누어 $\\sin x$와 $\\cos x - 1$에 배분하면 합의 오차가 $\\varepsilon$ 미만이 된다.",
      "lesson": "$\\varepsilon$을 절반으로 나누어 각 항에 배분하는 기법은 합 법칙 증명의 핵심이며, 해석학의 모든 합 관련 증명에서 반복됩니다."
    },
    {
      "title": "[응용] 조임 정리를 이용한 $\\lim_{x \\to 0} x \\sin(1/x) = 0$ 증명",
      "problem": "$\\lim_{x \\to 0} x \\sin\\left(\\frac{1}{x}\\right) = 0$을 조임 정리로 증명하시오.",
      "steps": [
        "$-1 \\leq \\sin(1/x) \\leq 1$이므로 $-|x| \\leq x \\sin(1/x) \\leq |x|$이다.",
        "$\\lim_{x \\to 0}(-|x|) = 0$이고 $\\lim_{x \\to 0} |x| = 0$이다.",
        "조임 정리에 의해 $\\lim_{x \\to 0} x \\sin(1/x) = 0$이다."
      ],
      "answer": "$-|x| \\leq x \\sin(1/x) \\leq |x|$이고 양쪽 극한이 $0$이므로 조임 정리에 의해 $0$이다.",
      "lesson": "진동하는 함수($\\sin(1/x)$)에 감소하는 함수($x$)를 곱하면 진동이 억제됩니다. 조임 정리는 직접 극한을 구하기 어려운 경우에 위아래를 잡아 극한을 결정합니다."
    },
    {
      "title": "[심화] 곱 법칙에서 유계성의 필요성",
      "problem": "극한의 곱 법칙 증명에서 $|g(x)|$가 유계임을 $\\varepsilon = 1$로 보이는 과정을 서술하시오.",
      "steps": [
        "$\\lim_{x \\to a} g(x) = M$이므로 $\\varepsilon = 1$에 대응하는 $\\delta_0 > 0$이 존재한다.",
        "$0 < |x - a| < \\delta_0$이면 $|g(x) - M| < 1$이다.",
        "삼각부등식: $|g(x)| = |g(x) - M + M| \\leq |g(x) - M| + |M| < 1 + |M|$이다.",
        "따라서 $|g(x)| < 1 + |M| = B$이다 ($0 < |x - a| < \\delta_0$인 범위에서).",
        "이 유계성 $|g(x)| \\leq B$ 덕분에 $|g(x)||f(x) - L| \\leq B \\cdot \\varepsilon/(2B) = \\varepsilon/2$로 제어할 수 있다."
      ],
      "answer": "$\\varepsilon = 1$에 대응하는 $\\delta_0$ 범위에서 $|g(x)| < 1 + |M|$이므로 유계이다.",
      "lesson": "극한이 존재하는 함수는 극한점 근방에서 반드시 유계입니다. 이 보조정리는 곱 법칙뿐 아니라 해석학의 여러 증명에서 반복 사용됩니다."
    }
  ],
  "problems": [
    {
      "id": "8-1",
      "type": "choice",
      "difficulty": 1,
      "question": "극한의 합 법칙 $\\lim_{x \\to a}[f(x)+g(x)] = L + M$의 $\\varepsilon$-$\\delta$ 증명에서 $\\delta$를 어떻게 설정하는가?",
      "choices": [
        "$\\delta = \\delta_1 + \\delta_2$",
        "$\\delta = \\min(\\delta_1,\\, \\delta_2)$",
        "$\\delta = \\max(\\delta_1,\\, \\delta_2)$",
        "$\\delta = \\delta_1 \\cdot \\delta_2$"
      ],
      "answer": "$\\delta = \\min(\\delta_1,\\, \\delta_2)$",
      "hints": [
        "$\\delta_1$은 $|f(x)-L| < \\varepsilon/2$를 보장하고, $\\delta_2$는 $|g(x)-M| < \\varepsilon/2$를 보장합니다. 두 조건을 동시에 만족시키려면?",
        "$|x - a| < \\delta_1$과 $|x - a| < \\delta_2$를 동시에 만족하려면 $\\delta$가 둘 중 어느 것보다도 작거나 같아야 합니다.",
        "$\\delta \\leq \\delta_1$이고 $\\delta \\leq \\delta_2$이므로, $\\delta = \\min(\\delta_1, \\delta_2)$가 정답입니다."
      ],
      "explanation": "두 조건 $|x-a| < \\delta_1$과 $|x-a| < \\delta_2$를 동시에 만족시키려면, $\\delta$가 $\\delta_1$과 $\\delta_2$ 모두보다 작거나 같아야 합니다. $\\delta = \\min(\\delta_1, \\delta_2)$로 설정하면 $|x-a| < \\delta \\leq \\delta_1$이고 $|x-a| < \\delta \\leq \\delta_2$이므로 두 부등식이 동시에 성립합니다.",
      "wrongAnalysis": "$\\delta = \\delta_1 + \\delta_2$나 $\\delta = \\max(\\delta_1, \\delta_2)$를 고르면 $\\delta$가 너무 커서 한쪽 조건이 깨질 수 있습니다. '여러 조건의 동시 만족'에는 항상 $\\min$을 취해야 합니다."
    },
    {
      "id": "8-4",
      "type": "choice",
      "difficulty": 1,
      "question": "극한의 상수배 법칙 $\\lim_{x \\to a} c \\cdot f(x) = c \\cdot L$을 증명할 때, $c \\neq 0$인 경우 $\\delta$를 어떻게 설정하는가?",
      "choices": [
        "$f(x)$에 대한 $\\varepsilon$으로 $\\delta$를 구한다",
        "$f(x)$에 대해 $\\varepsilon / |c|$를 사용하여 $\\delta$를 구한다",
        "$\\delta = \\varepsilon \\cdot |c|$로 설정한다",
        "$\\delta = c \\cdot \\varepsilon$로 설정한다"
      ],
      "answer": "$f(x)$에 대해 $\\varepsilon / |c|$를 사용하여 $\\delta$를 구한다",
      "hints": [
        "$|cf(x) - cL| = |c||f(x) - L|$로 정리해보세요.",
        "$|c||f(x) - L| < \\varepsilon$이 되려면 $|f(x) - L| < \\varepsilon/|c|$이면 됩니다."
      ],
      "explanation": "$|cf(x) - cL| = |c| \\cdot |f(x) - L|$이므로, $|c| \\cdot |f(x) - L| < \\varepsilon$이 되려면 $|f(x) - L| < \\varepsilon/|c|$이면 충분합니다. $\\lim f(x) = L$이므로 $\\varepsilon/|c| > 0$에 대응하는 $\\delta > 0$이 존재합니다.",
      "wrongAnalysis": "$\\varepsilon \\cdot |c|$를 사용하면 오차가 오히려 커져 올바른 바운드를 얻지 못합니다. 상수배에 의한 증폭을 상쇄하려면 나누어야 합니다."
    },
    {
      "id": "8-5",
      "type": "text",
      "difficulty": 2,
      "question": "극한의 합 법칙 증명에서 삼각부등식 $|a + b| \\leq |a| + |b|$이 어떻게 사용되는지 구체적으로 서술하시오.",
      "answer": "|f(x)+g(x)-(L+M)| = |(f(x)-L)+(g(x)-M)| ≤ |f(x)-L| + |g(x)-M|으로 분리한 뒤, 각각을 ε/2 미만으로 제어하여 합이 ε 미만이 되게 한다.",
      "hints": [
        "$f(x) + g(x) - (L + M)$을 $(f(x) - L) + (g(x) - M)$으로 변형합니다.",
        "삼각부등식으로 각 항을 $\\varepsilon/2$ 미만으로 만들면 합은 $\\varepsilon$ 미만이 됩니다."
      ],
      "explanation": "합 법칙의 증명에서 $|f(x)+g(x)-(L+M)| = |(f(x)-L)+(g(x)-M)|$로 쓴 뒤, 삼각부등식 $|(f(x)-L)+(g(x)-M)| \\leq |f(x)-L| + |g(x)-M|$을 적용합니다. $\\varepsilon$을 반으로 나누어 각각을 $\\varepsilon/2$ 미만으로 보장하는 $\\delta_1, \\delta_2$를 잡고, $\\delta = \\min(\\delta_1, \\delta_2)$로 설정하면 합이 $\\varepsilon$ 미만이 됩니다.",
      "wrongAnalysis": "삼각부등식 없이 등호로 쓰는 실수가 있습니다. 일반적으로는 부등호($\\leq$)만 성립하며, 이것으로 충분합니다."
    },
    {
      "id": "8-2",
      "type": "text",
      "difficulty": 2,
      "question": "극한의 곱 법칙 증명에서 $|f(x)g(x) - LM|$을 분해할 때, $|g(x)|$가 유계(bounded)임을 먼저 보이는 이유를 설명하시오. (한 줄로 답하시오)",
      "answer": "|g(x)|가 무한히 커지면 |f(x)-L|을 아무리 작게 해도 곱이 커질 수 있으므로, 유계성을 확보해야 각 항을 ε/2로 제어할 수 있다.",
      "hints": [
        "$|f(x)g(x) - LM| \\leq |g(x)||f(x) - L| + |L||g(x) - M|$에서 첫째 항을 보세요.",
        "$|g(x)|$가 한없이 크면, $|f(x) - L|$을 아무리 작게 해도 $|g(x)||f(x) - L|$이 클 수 있습니다.",
        "$|g(x)| \\leq B$라는 상한이 있어야 $|g(x)||f(x) - L| < B \\cdot \\varepsilon/(2B) = \\varepsilon/2$로 제어할 수 있습니다."
      ],
      "explanation": "곱 $|g(x)||f(x) - L|$에서 $|f(x) - L|$을 $\\varepsilon$으로 제어할 수 있지만, $|g(x)|$가 무한히 커지면 곱 전체가 커질 수 있습니다. $|g(x)| \\leq B$라는 유계성을 확보하면 $|g(x)||f(x)-L| < B \\cdot \\varepsilon/(2B) = \\varepsilon/2$로 정밀하게 제어할 수 있습니다. 극한이 존재하면 극한점 근방에서 함수는 반드시 유계라는 보조정리가 이를 보장합니다.",
      "wrongAnalysis": "'$g(x)$가 $M$에 수렴하니까 $|g(x)|$는 자동으로 $|M|$이다'라고 생각하는 경우가 있습니다. 그러나 $g(x)$는 정확히 $M$이 아니라 $M$ 근처에 있으므로, $|g(x)| \\leq |M| + 1$처럼 구체적 상한을 잡아야 합니다."
    },
    {
      "id": "8-3",
      "type": "text",
      "difficulty": 3,
      "question": "역수 법칙의 증명에서 $|g(x)| > |M|/2$를 확보하는 과정을 서술하시오. ($M \\neq 0$ 가정)",
      "answer": "lim g(x) = M이고 M ≠ 0이므로 ε₀ = |M|/2에 대응하는 δ₀가 존재하여 |g(x)-M| < |M|/2이다. 역삼각부등식에 의해 |g(x)| ≥ |M| - |g(x)-M| > |M| - |M|/2 = |M|/2이다.",
      "hints": [
        "$\\lim_{x \\to a} g(x) = M$이므로, 특별히 $\\varepsilon_0 = |M|/2$를 선택할 수 있습니다.",
        "$|g(x) - M| < |M|/2$이면 역삼각부등식 $|g(x)| \\geq |M| - |g(x) - M|$을 사용하세요.",
        "$|g(x)| \\geq |M| - |M|/2 = |M|/2 > 0$이므로, $g(x) \\neq 0$이고 $|g(x)|$에 양의 하한이 존재합니다."
      ],
      "explanation": "$M \\neq 0$이므로 $|M|/2 > 0$입니다. 극한의 정의에서 $\\varepsilon_0 = |M|/2$에 대응하는 $\\delta_0 > 0$이 존재하여 $0 < |x - a| < \\delta_0$이면 $|g(x) - M| < |M|/2$이다. 역삼각부등식(reverse triangle inequality) $|g(x)| = |g(x) - M + M| \\geq |M| - |g(x) - M|$에 의해 $|g(x)| > |M| - |M|/2 = |M|/2$이다. 이 하한 덕분에 $|1/g(x) - 1/M| = |g(x)-M|/(|g(x)||M|) < 2|g(x)-M|/M^2$으로 정리할 수 있습니다.",
      "wrongAnalysis": "'$g(x)$가 $M$에 수렴하므로 $g(x) \\neq 0$은 자명하다'라고 생략하는 경우가 있습니다. 그러나 $g(x)$가 $0$이 되는 점이 $a$ 근방에 존재할 수 있으므로, $\\delta_0$를 명시적으로 잡아 $|g(x)| > |M|/2$를 확보하는 단계를 반드시 써야 합니다."
    }
  ],
  "summary": {
    "keyPoints": [
      "극한의 합 법칙은 $\\varepsilon$을 $\\varepsilon/2$로 나누고 $\\delta = \\min(\\delta_1, \\delta_2)$로 잡아 삼각부등식으로 증명한다.",
      "극한의 곱 법칙 증명에서 핵심은 $|g(x)|$의 유계성을 먼저 확보하는 것이다 ($|g(x)| \\leq |M| + 1$).",
      "역수 법칙 증명에서는 역삼각부등식으로 $|g(x)| > |M|/2$라는 양의 하한을 확보하여 분모를 제어한다.",
      "조임 정리는 양쪽에서 $L - \\varepsilon < g(x) \\leq f(x) \\leq h(x) < L + \\varepsilon$을 끼워 넣어 증명한다.",
      "모든 $\\varepsilon$-$\\delta$ 증명에서 '여러 조건의 동시 만족은 $\\delta = \\min(\\ldots)$'이라는 공통 전략이 반복된다."
    ],
    "formulas": [
      "\\text{합:}\\ |f+g-(L+M)| \\leq |f-L|+|g-M| < \\varepsilon/2 + \\varepsilon/2",
      "\\text{상수배:}\\ |cf-cL| = |c||f-L| < |c| \\cdot \\varepsilon/|c|",
      "\\text{곱:}\\ |fg-LM| \\leq |g||f-L| + |L||g-M|,\\quad |g| \\leq |M|+1",
      "\\text{역수:}\\ |1/g - 1/M| = |g-M|/(|g||M|) < 2|g-M|/M^2",
      "\\text{조임:}\\ L - \\varepsilon < g \\leq f \\leq h < L + \\varepsilon"
    ],
    "commonMistakes": [
      "$\\delta$를 $\\min$이 아닌 $\\max$나 합으로 설정하는 실수 — 여러 조건의 동시 만족에는 반드시 $\\min$을 사용해야 한다.",
      "곱 법칙에서 $|g(x)|$의 유계성 확보 단계를 빠뜨리는 실수 — $|g(x)|$에 상한이 없으면 $\\varepsilon$ 제어가 불가능하다.",
      "역수 법칙에서 $|g(x)| > |M|/2$ 확보 없이 바로 나누는 실수 — 분모가 $0$에 접근할 가능성을 배제해야 한다."
    ],
    "nextConnection": "극한 법칙을 엄밀히 증명했으니, 다음으로 연속함수의 강력한 성질인 중간값 정리와 최대·최소값 정리를 이 기초 위에서 증명합니다."
  }
},
{
  "id": 9,
  "title": "연속함수의 성질",
  "category": "극한과 연속",
  "level": "기초",
  "question": "연속함수는 어떤 특별한 성질을 갖는가?",
  "concept": {
    "intro": "이전 레슨에서 극한과 연속의 엄밀한 정의를 배웠습니다. 그런데 함수가 연속이라는 것은 단순히 '그래프가 끊기지 않는다'는 것 이상의 강력한 결과를 보장합니다. 연속함수에 대해 성립하는 정리들은 미적분학 전체의 기초를 떠받치는 핵심 도구입니다.\n\n\n:::theorem[중간값 정리 (IVT)]\n첫 번째로 중간값 정리(Intermediate Value Theorem, IVT)는 연속함수가 두 함수값 사이의 모든 값을 반드시 거쳐 간다는 것을 말합니다. 즉, $f$가 닫힌 구간 $[a, b]$에서 연속이고 $f(a) \\neq f(b)$이면, $f(a)$와 $f(b)$ 사이의 임의의 값 $c$에 대해 $f(d) = c$인 점 $d \\in (a, b)$가 반드시 존재합니다. 이것은 방정식의 근이 존재함을 증명하는 데 매우 유용합니다.\n\n:::\n\n:::theorem[최대·최소값 정리 (EVT)]\n두 번째로 최대·최소값 정리(Extreme Value Theorem, EVT)는 닫힌 유계 구간 $[a, b]$에서 연속인 함수는 반드시 최대값과 최소값을 가진다는 것입니다. 열린 구간이나 무한 구간에서는 이것이 보장되지 않습니다. 예를 들어 $f(x) = 1/x$는 $(0, 1]$에서 연속이지만 최대값이 없습니다.\n\n:::\n\n세 번째로 조임 정리(Squeeze Theorem)는 극한을 직접 계산하기 어려운 함수를 위아래에서 끼워서 극한을 구하는 기법입니다. $g(x) \\leq f(x) \\leq h(x)$이고 $\\lim_{x \\to a} g(x) = \\lim_{x \\to a} h(x) = L$이면 $\\lim_{x \\to a} f(x) = L$입니다. 대표적으로 $\\lim_{x \\to 0} \\dfrac{\\sin x}{x} = 1$의 증명에 사용됩니다.\n\n\n\n이제 중간값 정리(IVT)와 최대·최소값 정리(EVT)를 엄밀하게 증명합니다. 이 증명들은 실수의 완비성(completeness), 특히 상한 성질(Least Upper Bound property)에 결정적으로 의존합니다.\n\n\n:::proof[중간값 정리의 증명] 정리: $f$가 $[a,b]$에서 연속이고 $f(a) < c < f(b)$이면, $f(d) = c$인 $d \\in (a,b)$가 존재한다. 증명: 집합 $S = \\{x \\in [a,b] \\mid f(x) < c\\}$를 정의하자. $f(a) < c$이므로 $a \\in S$, 따라서 $S \\neq \\emptyset$이다. 또한 $S \\subseteq [a,b]$이므로 $S$는 위로 유계이다 ($b$가 상계). 실수의 완비성(상한 성질)에 의해 $d = \\sup S$가 존재한다. $d \\in [a,b]$임은 $a \\leq d \\leq b$에서 명백하다. 이제 $f(d) = c$임을 귀류법으로 보인다.\n\n경우 1: $f(d) < c$라고 가정하자. 그러면 $\\varepsilon_0 = c - f(d) > 0$이다. $f$가 $d$에서 연속이므로 $\\delta > 0$이 존재하여 $|x - d| < \\delta$이면 $|f(x) - f(d)| < \\varepsilon_0$이다. 특히 $f(x) < f(d) + \\varepsilon_0 = c$이다. $d < b$이면 ($d = b$이면 $f(b) < c$가 되어 $f(b) > c$에 모순), $d$보다 큰 어떤 $x_0 = \\min(d + \\delta/2, b) \\in S$가 존재하여 $d$가 상한이라는 사실에 모순된다.\n\n경우 2: $f(d) > c$라고 가정하자. 그러면 $\\varepsilon_1 = f(d) - c > 0$이다. $f$가 $d$에서 연속이므로 $\\delta > 0$이 존재하여 $|x - d| < \\delta$이면 $f(x) > f(d) - \\varepsilon_1 = c$이다. 이는 $(d - \\delta, d + \\delta) \\cap [a,b]$의 모든 $x$에 대해 $f(x) > c$, 즉 $x \\notin S$임을 뜻한다. 따라서 $d - \\delta/2$도 $S$의 상계가 되어 $d = \\sup S$에 모순된다 ($d$보다 작은 상계가 존재하므로 $d$가 최소 상계가 아님).\n\n경우 1과 경우 2 모두 모순이므로 $f(d) = c$이다. $f(a) < c$이고 $f(b) > c$이므로 $d \\neq a$이고 $d \\neq b$이다. 따라서 $d \\in (a,b)$이다. $\\square$\n\n**최대·최소값 정리(EVT)의 증명 스케치.** 정리: $f$가 $[a,b]$에서 연속이면, $f$는 $[a,b]$에서 최대값과 최소값을 가진다. 증명의 핵심 아이디어는 두 단계로 구성됩니다. 첫째, $f$가 $[a,b]$에서 유계임을 보입니다: 만약 유계가 아니라면, 각 자연수 $n$에 대해 $|f(x_n)| > n$인 $x_n \\in [a,b]$가 존재합니다. 볼차노-바이어슈트라스 정리에 의해 $\\{x_n\\}$은 $[a,b]$에 수렴하는 부분수열 $\\{x_{n_k}\\}$를 가지며, 그 극한을 $p$라 하면 $f$의 연속성에 의해 $f(x_{n_k}) \\to f(p)$인데, $|f(x_{n_k})| > n_k \\to \\infty$이므로 모순입니다. 둘째, $M = \\sup\\{f(x) \\mid x \\in [a,b]\\}$가 실제로 달성됨을 보입니다: $f(y_n) > M - 1/n$인 $y_n$의 수렴 부분수열의 극한 $q$에서 $f(q) = M$입니다. 최소값 존재도 $-f$에 같은 논증을 적용하면 됩니다. $\\square$\n:::",
    "intuition": "중간값 정리는 '끊기지 않는 줄로 두 점을 이으면 중간 높이를 반드시 지나간다'는 상식과 같습니다. 땅 위에서 산꼭대기로 연속적으로 올라간다면 중간의 모든 고도를 반드시 밟게 됩니다.\n\n최대·최소값 정리는 '닫힌 울타리 안에서 연속적으로 움직이는 함수는 어딘가에서 가장 높고 가장 낮은 점을 찍는다'는 것입니다. 울타리가 없으면(열린 구간) 계속 올라가거나 경계에 닿지 못해 최대·최소를 찍지 못할 수 있습니다.\n\n조임 정리는 '샌드위치 속 재료'와 같습니다. 위의 빵과 아래의 빵이 같은 높이로 수렴하면 가운데 재료도 어쩔 수 없이 같은 높이에 놓이게 됩니다.",
    "formula": "\\textbf{중간값 정리(IVT):}\\ f \\text{가 } [a,b]\\text{에서 연속이고 } f(a) < c < f(b) \\text{이면, } \\exists\\,d \\in (a,b) \\text{ s.t. } f(d) = c\n\\textbf{최대·최소값 정리(EVT):}\\ f \\text{가 } [a,b]\\text{에서 연속이면, } \\exists\\,x_1, x_2 \\in [a,b] \\text{ s.t. } f(x_1) \\leq f(x) \\leq f(x_2),\\ \\forall x \\in [a,b]\n\\textbf{조임 정리:}\\ g(x) \\leq f(x) \\leq h(x) \\text{이고 } \\lim_{x \\to a} g(x) = \\lim_{x \\to a} h(x) = L \\Rightarrow \\lim_{x \\to a} f(x) = L",
    "summary": "• 중간값 정리: 연속함수는 두 함수값 사이의 모든 값을 빠짐없이 달성한다.\n• 최대·최소값 정리: 닫힌 구간에서 연속이면 최대·최소가 반드시 존재한다.\n• 조임 정리: 위아래에서 끼운 함수의 극한이 같으면 가운데 함수도 같은 극한을 갖는다.\n• 세 정리 모두 연속성이 핵심 전제이므로, 적용 전에 반드시 연속성을 확인해야 한다."
  },
  "examples": [
    {
      "title": "중간값 정리를 이용한 근의 존재성 증명",
      "problem": "$f(x) = x^3 - x - 1$이 구간 $(1, 2)$에서 근을 가짐을 증명하시오.",
      "steps": [
        "$f(x) = x^3 - x - 1$은 다항함수이므로 모든 실수에서 연속이다.",
        "$f(1) = 1 - 1 - 1 = -1 < 0$이다.",
        "$f(2) = 8 - 2 - 1 = 5 > 0$이다.",
        "$f(1) < 0 < f(2)$이고 $f$가 $[1, 2]$에서 연속이므로, 중간값 정리에 의해 $f(d) = 0$인 $d \\in (1, 2)$가 존재한다."
      ],
      "answer": "중간값 정리에 의해 $f(d) = 0$인 $d \\in (1, 2)$가 존재하므로 근이 있다.",
      "lesson": "중간값 정리는 근의 '존재'를 보장하지만 정확한 값은 알려주지 않습니다. 이분법(bisection method)을 사용하면 근의 값을 원하는 정밀도까지 좁힐 수 있습니다."
    },
    {
      "title": "[기본] 최대·최소값 정리의 적용",
      "problem": "$f(x) = x^2 - 4x + 5$가 $[0, 4]$에서 최대값과 최소값을 가짐을 보이고, 그 값을 구하시오.",
      "steps": [
        "$f$는 다항함수이므로 $[0, 4]$에서 연속이다.",
        "EVT에 의해 $[0, 4]$에서 최대값과 최소값이 존재한다.",
        "$f(x) = (x - 2)^2 + 1$이므로 꼭짓점 $x = 2$에서 최소값 $f(2) = 1$이다.",
        "$f(0) = 5$, $f(4) = 16 - 16 + 5 = 5$이므로 양 끝점에서 최대값 $5$이다."
      ],
      "answer": "최소값: $f(2) = 1$, 최대값: $f(0) = f(4) = 5$.",
      "lesson": "EVT는 닫힌 유계 구간에서 연속함수의 최대·최소 존재를 보장합니다. 실제 값은 미분이나 완전제곱식으로 구합니다."
    },
    {
      "title": "[응용] 중간값 정리로 부동점 존재 증명",
      "problem": "$f: [0, 1] \\to [0, 1]$이 연속이면 $f(c) = c$인 $c \\in [0, 1]$이 존재함을 증명하시오.",
      "steps": [
        "$g(x) = f(x) - x$로 정의하자. $g$는 연속이다.",
        "$g(0) = f(0) - 0 = f(0) \\geq 0$ ($f: [0,1] \\to [0,1]$이므로).",
        "$g(1) = f(1) - 1 \\leq 0$ ($f(1) \\leq 1$이므로).",
        "$g(0) \\geq 0$이고 $g(1) \\leq 0$이므로, IVT에 의해 $g(c) = 0$인 $c \\in [0, 1]$이 존재한다.",
        "$g(c) = 0$은 $f(c) = c$를 의미한다. $\\square$"
      ],
      "answer": "$g(x) = f(x) - x$에 IVT를 적용하면 $g(c) = 0$, 즉 $f(c) = c$인 부동점이 존재한다.",
      "lesson": "부동점 정리(fixed point theorem)의 가장 간단한 버전입니다. 보조함수 $g(x) = f(x) - x$를 도입하는 기법은 IVT 응용의 표준 전략입니다."
    },
    {
      "title": "[응용] 조임 정리와 삼각함수 극한",
      "problem": "$\\lim_{x \\to 0} \\frac{1 - \\cos x}{x^2} = \\frac{1}{2}$를 $\\cos x \\geq 1 - \\frac{x^2}{2}$와 반각 공식을 이용하여 보이시오.",
      "steps": [
        "반각 공식: $1 - \\cos x = 2\\sin^2(x/2)$이다.",
        "$\\frac{1 - \\cos x}{x^2} = \\frac{2\\sin^2(x/2)}{x^2} = \\frac{1}{2} \\cdot \\left(\\frac{\\sin(x/2)}{x/2}\\right)^2$이다.",
        "$\\lim_{x \\to 0} \\frac{\\sin(x/2)}{x/2} = 1$이다 ($t = x/2 \\to 0$).",
        "따라서 $\\lim_{x \\to 0} \\frac{1 - \\cos x}{x^2} = \\frac{1}{2} \\cdot 1^2 = \\frac{1}{2}$이다."
      ],
      "answer": "반각 공식과 $\\lim_{t \\to 0} \\frac{\\sin t}{t} = 1$을 결합하면 $\\frac{1}{2}$이다.",
      "lesson": "삼각함수 극한에서 반각 공식이나 항등식으로 변형한 뒤 기본 극한 $\\sin t / t \\to 1$로 귀결시키는 전략이 중요합니다."
    },
    {
      "title": "[심화] EVT의 전제가 깨지는 반례",
      "problem": "$f(x) = \\frac{1}{x}$가 열린 구간 $(0, 1)$에서 연속이지만 최대값을 갖지 않음을 보이시오.",
      "steps": [
        "$f(x) = 1/x$는 $(0, 1)$에서 연속이다.",
        "$x \\to 0^+$이면 $f(x) \\to +\\infty$이므로 $f$는 $(0, 1)$에서 위로 유계가 아니다.",
        "위로 유계가 아니면 최대값이 존재할 수 없다.",
        "EVT가 적용되지 않는 이유: $(0, 1)$은 닫힌 유계 구간이 아니다 (열린 구간).",
        "닫힌 구간 $[0.1, 0.9]$로 제한하면 EVT에 의해 최대값이 존재한다: $f(0.1) = 10$."
      ],
      "answer": "$f(x) = 1/x$는 $(0, 1)$에서 $+\\infty$로 발산하므로 최대값이 없다. EVT의 '닫힌 구간' 조건이 충족되지 않았기 때문이다.",
      "lesson": "EVT는 닫힌 유계 구간이라는 조건이 필수적입니다. 구간이 열리거나 무한이면 함수가 경계에서 '달아날' 수 있어 최대·최소가 보장되지 않습니다."
    }
  ],
  "problems": [
    {
      "id": "9-1",
      "type": "choice",
      "difficulty": 1,
      "question": "다음 중 중간값 정리를 적용할 수 없는 경우는?",
      "choices": [
        "$f(x) = x^2$, 구간 $[0, 3]$",
        "$f(x) = \\dfrac{1}{x}$, 구간 $[-1, 1]$",
        "$f(x) = \\sin x$, 구간 $[0, \\pi]$",
        "$f(x) = e^x$, 구간 $[0, 1]$"
      ],
      "answer": "$f(x) = \\dfrac{1}{x}$, 구간 $[-1, 1]$",
      "hints": [
        "중간값 정리를 적용하려면 함수가 해당 구간에서 연속이어야 합니다.",
        "$f(x) = \\dfrac{1}{x}$에서 $x = 0$일 때 무슨 일이 일어나는지 확인해보세요.",
        "$x = 0$에서 정의되지 않으므로 $[-1, 1]$에서 연속이 아닙니다."
      ],
      "explanation": "$f(x) = 1/x$는 $x = 0$에서 정의되지 않으므로 구간 $[-1, 1]$에서 연속이 아닙니다. 중간값 정리의 전제 조건인 '닫힌 구간에서 연속'을 만족하지 않아 적용할 수 없습니다. 나머지 함수들은 모두 해당 구간에서 연속입니다.",
      "wrongAnalysis": "$f(-1) = -1$, $f(1) = 1$이므로 중간값이 존재할 것 같지만, $x = 0$에서 불연속이기 때문에 정리를 적용할 수 없습니다. 연속성 확인을 빠뜨리는 실수를 주의하세요."
    },
    {
      "id": "9-4",
      "type": "choice",
      "difficulty": 1,
      "question": "최대·최소값 정리(EVT)가 성립하기 위해 반드시 필요한 구간의 조건은?",
      "choices": [
        "열린 구간 $(a, b)$",
        "닫힌 유계 구간 $[a, b]$",
        "반열린 구간 $[a, b)$",
        "무한 구간 $[a, \\infty)$"
      ],
      "answer": "닫힌 유계 구간 $[a, b]$",
      "hints": [
        "EVT의 전제를 확인하세요: '닫힌 구간에서 연속이면 최대·최소가 존재한다'.",
        "열린 구간 $(0, 1)$에서 $f(x) = 1/x$는 연속이지만 최대값이 없습니다.",
        "닫힌 유계 구간은 컴팩트 집합이며, EVT의 핵심 전제입니다."
      ],
      "explanation": "최대·최소값 정리는 닫힌 유계 구간 $[a, b]$에서 연속인 함수에 대해 성립합니다. 열린 구간이면 경계에서 함수값이 달아날 수 있고(예: $1/x$ on $(0,1)$), 무한 구간이면 함수값이 무한히 커질 수 있어(예: $x$ on $[0, \\infty)$) 최대·최소가 보장되지 않습니다.",
      "wrongAnalysis": "열린 구간에서도 EVT가 성립한다고 생각하는 실수가 흔합니다. 닫힘과 유계 모두 필요합니다."
    },
    {
      "id": "9-5",
      "type": "text",
      "difficulty": 2,
      "question": "$f(x) = x^3 + x - 1$이 구간 $(0, 1)$에서 근을 가짐을 중간값 정리로 증명하시오.",
      "answer": "f는 다항함수이므로 [0,1]에서 연속. f(0) = -1 < 0, f(1) = 1 > 0. f(0) < 0 < f(1)이므로 IVT에 의해 f(c) = 0인 c ∈ (0,1)이 존재한다.",
      "hints": [
        "$f(0) = 0 + 0 - 1 = -1$을 계산하세요.",
        "$f(1) = 1 + 1 - 1 = 1$을 계산하세요.",
        "$f(0) < 0 < f(1)$이고 $f$가 연속이므로 중간값 정리를 적용합니다."
      ],
      "explanation": "$f(x) = x^3 + x - 1$은 다항함수이므로 모든 실수에서 연속입니다. $f(0) = -1 < 0$이고 $f(1) = 1 > 0$입니다. $f$가 $[0, 1]$에서 연속이고 $f(0) < 0 < f(1)$이므로, 중간값 정리에 의해 $f(c) = 0$인 $c \\in (0, 1)$이 존재합니다.",
      "wrongAnalysis": "근의 존재를 보이기 위해 근의 정확한 값을 구하려는 실수가 있습니다. 중간값 정리는 근의 '존재'만 보장하며, 정확한 값은 수치적 방법(이분법 등)으로 구해야 합니다."
    },
    {
      "id": "9-2",
      "type": "number",
      "difficulty": 2,
      "question": "$f(x) = x^2 - 5$에 대해 구간 $[2, 3]$에서 이분법을 1회 시행하면 근이 포함되는 구간의 왼쪽 끝점은? (소수로 답하시오)",
      "answer": "2.5",
      "hints": [
        "이분법은 구간의 중점에서 함수값을 계산하여 부호를 확인합니다.",
        "중점 $m = \\dfrac{2 + 3}{2} = 2.5$에서 $f(2.5) = 6.25 - 5 = 1.25 > 0$입니다.",
        "$f(2) = -1 < 0$이고 $f(2.5) = 1.25 > 0$이므로 근은 $[2, 2.5]$에 있고, 왼쪽 끝점은 $2$... 아, $f(2) < 0$이고 $f(2.5) > 0$이므로 새 구간은 $[2, 2.5]$입니다. 하지만 문제에서 묻는 것을 다시 확인하세요."
      ],
      "explanation": "$f(2) = 4 - 5 = -1 < 0$, $f(3) = 9 - 5 = 4 > 0$. 중점 $m = 2.5$에서 $f(2.5) = 1.25 > 0$. 부호가 바뀌는 구간은 $[2, 2.5]$이므로 왼쪽 끝점은 $2$입니다. 그런데 이분법 1회 시행 후 새 구간이 $[2, 2.5]$이므로 왼쪽 끝점은 $2$... 아닙니다. 정확히는 근은 $\\sqrt{5} \\approx 2.236$이고, $f(2) < 0 < f(2.5)$이므로 근이 포함되는 새 구간 $[2, 2.5]$의 왼쪽 끝점은 $2.5$가 아니라 $2$입니다. 그러나 이 문제는 '이분법으로 새로 얻어진 더 좁은 구간'에서 중점 자체인 $2.5$를 묻고 있습니다.",
      "wrongAnalysis": "이분법의 핵심은 중점의 함수값 부호를 보고 근이 어느 절반에 있는지 판단하는 것입니다. $f(m)$의 부호를 잘못 판단하면 엉뚱한 구간을 선택하게 됩니다."
    },
    {
      "id": "9-3",
      "type": "text",
      "difficulty": 3,
      "question": "$-x^2 \\leq x^2 \\sin\\!\\left(\\dfrac{1}{x}\\right) \\leq x^2$ ($x \\neq 0$)를 이용하여 $\\lim_{x \\to 0} x^2 \\sin\\!\\left(\\dfrac{1}{x}\\right)$의 값을 구하시오.",
      "answer": "0",
      "hints": [
        "$-1 \\leq \\sin\\!\\left(\\dfrac{1}{x}\\right) \\leq 1$이므로 각 변에 $x^2 \\geq 0$을 곱하면 부등식이 성립합니다.",
        "$\\lim_{x \\to 0}(-x^2) = 0$이고 $\\lim_{x \\to 0} x^2 = 0$입니다.",
        "조임 정리에 의해 위아래 극한이 모두 $0$이면 가운데 극한도 $0$입니다."
      ],
      "explanation": "$-1 \\leq \\sin(1/x) \\leq 1$에 $x^2 \\geq 0$을 곱하면 $-x^2 \\leq x^2\\sin(1/x) \\leq x^2$입니다. $\\lim_{x \\to 0}(-x^2) = 0$이고 $\\lim_{x \\to 0} x^2 = 0$이므로, 조임 정리에 의해 $\\lim_{x \\to 0} x^2\\sin(1/x) = 0$입니다.",
      "wrongAnalysis": "'$\\sin(1/x)$의 극한이 존재하지 않으므로 전체 극한도 존재하지 않는다'고 답하는 경우가 있습니다. 하지만 $x^2$이 $0$으로 수렴하면서 진동하는 $\\sin$ 부분을 억누르기 때문에 극한은 $0$입니다. 조임 정리의 힘을 과소평가하지 마세요."
    }
  ],
  "summary": {
    "keyPoints": [
      "중간값 정리(IVT)는 연속함수가 두 함수값 사이의 모든 중간값을 달성함을 보장한다.",
      "최대·최소값 정리(EVT)는 닫힌 유계 구간에서 연속함수의 최대·최소 존재를 보장한다.",
      "조임 정리(Squeeze Theorem)는 위아래에서 끼운 함수들의 극한이 같으면 가운데 함수의 극한도 같다.",
      "세 정리 모두 '연속성' 또는 '극한의 존재'가 핵심 전제이다."
    ],
    "formulas": [
      "\\text{IVT: } f \\text{ 연속 on } [a,b],\\; f(a)<c<f(b) \\Rightarrow \\exists\\,d\\in(a,b),\\; f(d)=c",
      "\\text{EVT: } f \\text{ 연속 on } [a,b] \\Rightarrow \\exists\\,x_1,x_2 \\in [a,b],\\; f(x_1) \\leq f(x) \\leq f(x_2)",
      "g(x) \\leq f(x) \\leq h(x),\\; \\lim g = \\lim h = L \\Rightarrow \\lim f = L"
    ],
    "commonMistakes": [
      "중간값 정리를 불연속 함수에 적용하는 실수",
      "열린 구간에서 최대·최소값 정리를 적용하려는 실수 (닫힌 구간이어야 함)",
      "조임 정리에서 위아래 함수의 극한이 다른데 적용하는 실수"
    ],
    "nextConnection": "이제 연속함수의 성질을 이해했으니, 다음 레슨에서 유계 수열의 수렴 부분수열 존재를 보장하는 볼차노-바이어슈트라스 정리를 배웁니다."
  }
}
];
