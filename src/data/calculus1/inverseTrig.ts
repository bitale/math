import { Lesson } from "../../types";

export const inverseTrigLessons: Lesson[] = [
{
  "id": 22,
  "title": "역삼각함수의 미분",
  "category": "미분 기법",
  "level": "중급",
  "question": "역삼각함수 $\\arcsin x$, $\\arccos x$, $\\arctan x$의 도함수는 어떻게 구할까?",
  "concept": {
    "intro": "삼각함수 $\\sin$, $\\cos$, $\\tan$에는 각각 역함수 $\\arcsin$, $\\arccos$, $\\arctan$이 있습니다. 이 역삼각함수들을 미분하려면, 먼저 **역함수 미분법**을 복습해야 합니다.\n\n:::theorem[역함수 미분법]\n$y = f^{-1}(x)$이면 $f(y) = x$이고, 양변을 $x$에 대해 미분하면\n$$[f^{-1}]'(x) = \\frac{1}{f'(f^{-1}(x))}$$\n이 됩니다. 이 공식이 역삼각함수 미분의 출발점입니다.\n:::\n\n:::proof[$\\arcsin x$의 도함수 유도]\n$y = \\arcsin x$라 놓으면 $\\sin y = x$이고 $-\\frac{\\pi}{2} \\le y \\le \\frac{\\pi}{2}$입니다. 양변을 $x$에 대해 미분하면 $\\cos y \\cdot y' = 1$이므로 $y' = \\dfrac{1}{\\cos y}$입니다. $\\cos y = \\sqrt{1 - \\sin^2 y} = \\sqrt{1 - x^2}$이므로\n$$\\frac{d}{dx}\\arcsin x = \\frac{1}{\\sqrt{1-x^2}} \\quad (-1 < x < 1)$$\n:::\n\n:::proof[$\\arccos x$의 도함수 유도]\n$y = \\arccos x$이면 $\\cos y = x$, $0 \\le y \\le \\pi$입니다. 양변을 미분하면 $-\\sin y \\cdot y' = 1$이므로 $y' = -\\dfrac{1}{\\sin y}$입니다. $\\sin y = \\sqrt{1 - x^2}$이므로\n$$\\frac{d}{dx}\\arccos x = -\\frac{1}{\\sqrt{1-x^2}} \\quad (-1 < x < 1)$$\n$\\arcsin x$의 도함수와 부호만 다릅니다. 이는 $\\arcsin x + \\arccos x = \\dfrac{\\pi}{2}$ 항등식에서도 확인됩니다.\n:::\n\n:::proof[$\\arctan x$의 도함수 유도]\n$y = \\arctan x$이면 $\\tan y = x$, $-\\frac{\\pi}{2} < y < \\frac{\\pi}{2}$입니다. 양변을 미분하면 $\\sec^2 y \\cdot y' = 1$이므로 $y' = \\dfrac{1}{\\sec^2 y}$입니다. $\\sec^2 y = 1 + \\tan^2 y = 1 + x^2$이므로\n$$\\frac{d}{dx}\\arctan x = \\frac{1}{1+x^2}$$\n정의역은 모든 실수 $(-\\infty, \\infty)$입니다.\n:::\n\n:::note[연쇄법칙과의 결합]\n역삼각함수 안에 합성함수가 들어가면 연쇄법칙을 적용합니다:\n$$\\frac{d}{dx}\\arcsin(g(x)) = \\frac{g'(x)}{\\sqrt{1-(g(x))^2}}, \\quad \\frac{d}{dx}\\arctan(g(x)) = \\frac{g'(x)}{1+(g(x))^2}$$\n내부 함수 $g(x)$의 도함수 $g'(x)$를 분자에 곱하는 것을 잊지 마세요.\n:::",
    "intuition": "직각삼각형을 그려 역삼각함수의 기하학적 의미를 파악하면, 피타고라스 정리로 자연스럽게 도함수가 유도됩니다. 예를 들어 $y = \\arcsin x$일 때, 빗변이 $1$이고 대변이 $x$인 직각삼각형을 그리면 인접변은 $\\sqrt{1 - x^2}$가 됩니다. 이 인접변이 바로 $\\cos y$이고, 이것이 도함수의 분모에 등장합니다. 마찬가지로 $y = \\arctan x$이면 대변이 $x$, 인접변이 $1$인 직각삼각형에서 빗변은 $\\sqrt{1 + x^2}$이고, $\\sec^2 y = 1 + x^2$이 자연스럽게 나옵니다. 삼각함수의 도함수를 직접 외우기보다 직각삼각형 하나를 그려 유도하면 공식을 까먹을 일이 없습니다.",
    "formula": "\\frac{d}{dx}\\arcsin x = \\frac{1}{\\sqrt{1-x^2}} \\quad (-1 < x < 1)\n\\frac{d}{dx}\\arccos x = -\\frac{1}{\\sqrt{1-x^2}} \\quad (-1 < x < 1)\n\\frac{d}{dx}\\arctan x = \\frac{1}{1+x^2} \\quad (-\\infty < x < \\infty)\n\\frac{d}{dx}\\arcsin(g(x)) = \\frac{g'(x)}{\\sqrt{1-(g(x))^2}}\n\\frac{d}{dx}\\arctan(g(x)) = \\frac{g'(x)}{1+(g(x))^2}",
    "summary": ":::note[역삼각함수 미분 공식]\n• $\\dfrac{d}{dx}\\arcsin x = \\dfrac{1}{\\sqrt{1-x^2}}$\n• $\\dfrac{d}{dx}\\arccos x = -\\dfrac{1}{\\sqrt{1-x^2}}$\n• $\\dfrac{d}{dx}\\arctan x = \\dfrac{1}{1+x^2}$\n:::\n\n역삼각함수의 도함수는 역함수 미분법과 피타고라스 항등식으로 유도됩니다. 합성함수일 때는 연쇄법칙에 의해 내부 함수의 도함수를 분자에 곱해야 합니다."
  },
  "examples": [
    {
      "title": "음함수 미분법으로 $\\arctan x$의 도함수 유도하기",
      "problem": "$y = \\arctan x$일 때, 음함수 미분법을 사용하여 $\\dfrac{dy}{dx}$를 구하시오.",
      "steps": [
        "$y = \\arctan x$이므로 양변에 탄젠트를 취하면 $\\tan y = x$이다.",
        "양변을 $x$에 대해 미분한다: $\\sec^2 y \\cdot \\dfrac{dy}{dx} = 1$.",
        "$\\dfrac{dy}{dx} = \\dfrac{1}{\\sec^2 y}$.",
        "$\\sec^2 y = 1 + \\tan^2 y$이고 $\\tan y = x$이므로 $\\sec^2 y = 1 + x^2$.",
        "$\\dfrac{dy}{dx} = \\dfrac{1}{1 + x^2}$."
      ],
      "answer": "$\\dfrac{d}{dx}\\arctan x = \\dfrac{1}{1+x^2}$",
      "lesson": "역삼각함수의 미분은 '역함수 관계로 고쳐 쓴 뒤 양변을 미분하고, 삼각함수 항등식으로 $x$만의 식으로 변환'하는 세 단계로 이루어집니다. $\\arcsin$, $\\arccos$도 동일한 전략으로 유도할 수 있습니다."
    },
    {
      "title": "[기본] $\\arcsin x$ 의 도함수",
      "problem": "$f(x) = \\arcsin x$ 일 때, $f'\\!\\left(\\dfrac{1}{2}\\right)$ 의 값을 구하시오.",
      "steps": [
        "$\\dfrac{d}{dx}\\arcsin x = \\dfrac{1}{\\sqrt{1 - x^2}}$.",
        "$x = \\dfrac{1}{2}$ 대입: $\\dfrac{1}{\\sqrt{1 - 1/4}} = \\dfrac{1}{\\sqrt{3/4}}$.",
        "$\\sqrt{3/4} = \\dfrac{\\sqrt{3}}{2}$ 이므로 $f'\\!\\left(\\dfrac{1}{2}\\right) = \\dfrac{2}{\\sqrt{3}} = \\dfrac{2\\sqrt{3}}{3}$."
      ],
      "answer": "$\\dfrac{2\\sqrt{3}}{3}$",
      "lesson": "$\\arcsin x$ 의 도함수는 $\\dfrac{1}{\\sqrt{1-x^2}}$ 입니다. 대입 시 분모의 제곱근 계산에서 분수를 정확히 처리하는 것이 관건입니다."
    },
    {
      "title": "[응용] $\\arccos x$ 와 $\\arcsin x$ 의 관계",
      "problem": "$\\dfrac{d}{dx}\\arccos x$ 를 $\\arcsin x + \\arccos x = \\dfrac{\\pi}{2}$ 항등식을 이용하여 구하시오.",
      "steps": [
        "$\\arcsin x + \\arccos x = \\dfrac{\\pi}{2}$ 의 양변을 $x$ 로 미분한다.",
        "$\\dfrac{1}{\\sqrt{1-x^2}} + \\dfrac{d}{dx}\\arccos x = 0$.",
        "따라서 $\\dfrac{d}{dx}\\arccos x = -\\dfrac{1}{\\sqrt{1-x^2}}$."
      ],
      "answer": "$-\\dfrac{1}{\\sqrt{1-x^2}}$",
      "lesson": "$\\arcsin x + \\arccos x = \\dfrac{\\pi}{2}$ 를 알면 $\\arccos x$ 의 도함수를 별도로 유도할 필요 없이 부호만 바꾸면 됩니다. 수학에서 항등식은 풀이의 지름길입니다."
    },
    {
      "title": "[응용] 연쇄법칙과 결합한 역삼각함수 미분",
      "problem": "$f(x) = \\arctan(x^2)$ 의 도함수를 구하시오.",
      "steps": [
        "바깥 함수: $\\arctan u$, 안쪽 함수: $u = x^2$.",
        "바깥 미분: $\\dfrac{1}{1 + u^2}$.",
        "안쪽 미분: $2x$.",
        "연쇄법칙 적용: $f'(x) = \\dfrac{2x}{1 + x^4}$."
      ],
      "answer": "$\\dfrac{2x}{1 + x^4}$",
      "lesson": "역삼각함수 안에 합성함수가 들어가면 반드시 연쇄법칙을 적용해야 합니다. 안쪽 함수의 도함수를 분자에 곱하는 것을 잊으면 오답이 됩니다."
    },
    {
      "title": "[심화] 역삼각함수의 합성과 삼각 치환",
      "problem": "$f(x) = \\arcsin\\!\\left(\\dfrac{2x}{1 + x^2}\\right)$ 일 때, $|x| < 1$ 에서 $f'(x)$ 를 구하시오.",
      "steps": [
        "$g(x) = \\dfrac{2x}{1+x^2}$ 로 놓으면 $f(x) = \\arcsin(g(x))$ 이다.",
        "$g'(x)$ 를 몫의 미분으로 구한다: $g'(x) = \\dfrac{2(1+x^2) - 2x \\cdot 2x}{(1+x^2)^2} = \\dfrac{2 - 2x^2}{(1+x^2)^2} = \\dfrac{2(1-x^2)}{(1+x^2)^2}$.",
        "$1 - (g(x))^2 = 1 - \\dfrac{4x^2}{(1+x^2)^2} = \\dfrac{(1+x^2)^2 - 4x^2}{(1+x^2)^2} = \\dfrac{(1-x^2)^2}{(1+x^2)^2}$.",
        "$\\sqrt{1 - (g(x))^2} = \\dfrac{|1-x^2|}{1+x^2}$. $|x| < 1$ 이면 $1 - x^2 > 0$ 이므로 $= \\dfrac{1-x^2}{1+x^2}$.",
        "$f'(x) = \\dfrac{g'(x)}{\\sqrt{1-(g(x))^2}} = \\dfrac{\\frac{2(1-x^2)}{(1+x^2)^2}}{\\frac{1-x^2}{1+x^2}} = \\dfrac{2}{1+x^2}$."
      ],
      "answer": "$\\dfrac{2}{1+x^2}$",
      "lesson": "이 결과는 $\\arcsin\\!\\left(\\dfrac{2x}{1+x^2}\\right) = 2\\arctan x$ ($|x| < 1$) 라는 항등식의 미분적 증명입니다. 복잡한 합성함수도 끝까지 정리하면 의외로 깔끔한 결과가 나올 수 있습니다."
    }
  ],
  "problems": [
    {
      "id": "22-1",
      "type": "choice",
      "difficulty": 1,
      "question": "$\\dfrac{d}{dx}\\arcsin x$의 값으로 올바른 것은?",
      "choices": [
        "$\\dfrac{1}{\\sqrt{1-x^2}}$",
        "$-\\dfrac{1}{\\sqrt{1-x^2}}$",
        "$\\dfrac{1}{1+x^2}$",
        "$\\dfrac{1}{\\sqrt{1+x^2}}$"
      ],
      "answer": "$\\dfrac{1}{\\sqrt{1-x^2}}$",
      "hints": [
        "$y = \\arcsin x$이면 $\\sin y = x$입니다. 양변을 $x$에 대해 미분해보세요.",
        "$\\cos y \\cdot y' = 1$이므로 $y' = \\dfrac{1}{\\cos y}$입니다.",
        "$\\cos y = \\sqrt{1 - \\sin^2 y} = \\sqrt{1 - x^2}$이므로 $y' = \\dfrac{1}{\\sqrt{1-x^2}}$입니다."
      ],
      "explanation": "$y = \\arcsin x$에서 $\\sin y = x$. 양변을 미분하면 $\\cos y \\cdot y' = 1$이므로 $y' = \\dfrac{1}{\\cos y}$. $\\cos y = \\sqrt{1 - \\sin^2 y} = \\sqrt{1 - x^2}$ ($-\\frac{\\pi}{2} \\le y \\le \\frac{\\pi}{2}$에서 $\\cos y \\ge 0$)이므로 $\\dfrac{d}{dx}\\arcsin x = \\dfrac{1}{\\sqrt{1-x^2}}$.",
      "wrongAnalysis": "$\\arccos x$의 도함수 $-\\dfrac{1}{\\sqrt{1-x^2}}$와 혼동하기 쉽습니다. $\\arcsin$은 양수, $\\arccos$는 음수라는 부호 차이를 확실히 기억하세요. 또한 $\\arctan x$의 도함수 $\\dfrac{1}{1+x^2}$와도 구별해야 합니다. 분모가 $\\sqrt{1-x^2}$인지 $1+x^2$인지 주의하세요."
    },
    {
      "id": "22-2",
      "type": "text",
      "difficulty": 2,
      "question": "$f(x) = \\arctan(3x)$일 때, $f'(x)$를 구하시오.",
      "answer": "$\\dfrac{3}{1+9x^2}$",
      "hints": [
        "$\\dfrac{d}{dx}\\arctan(g(x)) = \\dfrac{g'(x)}{1+(g(x))^2}$ 공식을 사용하세요.",
        "여기서 $g(x) = 3x$이므로 $g'(x) = 3$입니다.",
        "분모는 $1 + (3x)^2 = 1 + 9x^2$이 됩니다."
      ],
      "explanation": "$\\arctan$의 도함수 공식에 연쇄법칙을 적용합니다. $g(x) = 3x$로 놓으면 $g'(x) = 3$이고,\n$$f'(x) = \\frac{g'(x)}{1+(g(x))^2} = \\frac{3}{1+(3x)^2} = \\frac{3}{1+9x^2}$$",
      "wrongAnalysis": "연쇄법칙을 빠뜨리고 $\\dfrac{1}{1+9x^2}$로 답하는 실수가 가장 흔합니다. 내부 함수 $3x$의 도함수 $3$을 분자에 반드시 곱해야 합니다. 또한 분모를 $1 + 3x^2$으로 적는 실수도 있는데, $(3x)^2 = 9x^2$이지 $3x^2$이 아닙니다."
    },
    {
      "id": "22-3",
      "type": "text",
      "difficulty": 3,
      "question": "$a > 0$일 때, $f(x) = \\arcsin\\!\\left(\\dfrac{x}{a}\\right)$의 도함수 $f'(x)$를 구하시오.",
      "answer": "$\\dfrac{1}{\\sqrt{a^2-x^2}}$",
      "hints": [
        "$\\arcsin$의 도함수 공식에 연쇄법칙을 적용하세요. $g(x) = \\dfrac{x}{a}$입니다.",
        "$g'(x) = \\dfrac{1}{a}$이고, 분모는 $\\sqrt{1 - \\left(\\dfrac{x}{a}\\right)^2} = \\sqrt{1 - \\dfrac{x^2}{a^2}}$입니다.",
        "$\\sqrt{1 - \\dfrac{x^2}{a^2}} = \\sqrt{\\dfrac{a^2 - x^2}{a^2}} = \\dfrac{\\sqrt{a^2 - x^2}}{a}$이므로, $\\dfrac{1/a}{\\sqrt{a^2-x^2}/a} = \\dfrac{1}{\\sqrt{a^2-x^2}}$."
      ],
      "explanation": "$g(x) = \\dfrac{x}{a}$로 놓으면 $g'(x) = \\dfrac{1}{a}$이고,\n$$f'(x) = \\frac{g'(x)}{\\sqrt{1-(g(x))^2}} = \\frac{1/a}{\\sqrt{1 - x^2/a^2}}$$\n분모를 정리하면 $\\sqrt{1 - \\dfrac{x^2}{a^2}} = \\dfrac{\\sqrt{a^2 - x^2}}{a}$이므로\n$$f'(x) = \\frac{1/a}{\\sqrt{a^2 - x^2}/a} = \\frac{1}{\\sqrt{a^2 - x^2}}$$\n이 결과는 적분에서 $\\displaystyle\\int \\frac{1}{\\sqrt{a^2 - x^2}}\\,dx = \\arcsin\\!\\left(\\frac{x}{a}\\right) + C$라는 중요한 공식으로 이어집니다.",
      "wrongAnalysis": "분모의 $a$와 분자의 $\\dfrac{1}{a}$가 약분되는 과정에서 실수가 자주 발생합니다. $\\sqrt{\\dfrac{a^2 - x^2}{a^2}} = \\dfrac{\\sqrt{a^2 - x^2}}{\\sqrt{a^2}} = \\dfrac{\\sqrt{a^2 - x^2}}{a}$ ($a > 0$이므로)임을 단계별로 정리하세요. 또한 연쇄법칙의 $\\dfrac{1}{a}$를 빠뜨리면 답이 $\\dfrac{a}{\\sqrt{a^2 - x^2}}$가 되어 틀립니다."
    },
    {
      "id": "22-4",
      "type": "choice",
      "difficulty": 1,
      "question": "$\\dfrac{d}{dx}\\arctan x$ 의 값으로 올바른 것은?",
      "choices": [
        "$\\dfrac{1}{\\sqrt{1-x^2}}$",
        "$-\\dfrac{1}{\\sqrt{1-x^2}}$",
        "$\\dfrac{1}{1+x^2}$",
        "$\\dfrac{x}{1+x^2}$"
      ],
      "answer": "$\\dfrac{1}{1+x^2}$",
      "hints": [
        "$y = \\arctan x$ 이면 $\\tan y = x$ 입니다.",
        "양변을 미분하면 $\\sec^2 y \\cdot y' = 1$ 이므로 $y' = \\dfrac{1}{\\sec^2 y}$ 입니다."
      ],
      "explanation": "$\\tan y = x$ 의 양변을 미분하면 $\\sec^2 y \\cdot y' = 1$. $\\sec^2 y = 1 + \\tan^2 y = 1 + x^2$ 이므로 $\\dfrac{d}{dx}\\arctan x = \\dfrac{1}{1+x^2}$.",
      "wrongAnalysis": "$\\dfrac{1}{\\sqrt{1-x^2}}$ 은 $\\arcsin x$ 의 도함수입니다. $\\arctan x$ 와 $\\arcsin x$ 의 도함수를 혼동하지 않도록 분모의 형태를 주의하세요."
    },
    {
      "id": "22-5",
      "type": "text",
      "difficulty": 2,
      "question": "$f(x) = \\arcsin(2x)$ 일 때, $f'(x)$ 를 구하시오.",
      "answer": "$\\dfrac{2}{\\sqrt{1-4x^2}}$",
      "hints": [
        "$\\arcsin$ 의 도함수 공식에 연쇄법칙을 적용하세요. $g(x) = 2x$ 입니다.",
        "$g'(x) = 2$ 이고 분모는 $\\sqrt{1 - (2x)^2} = \\sqrt{1 - 4x^2}$ 입니다."
      ],
      "explanation": "$g(x) = 2x$, $g'(x) = 2$ 이므로 $f'(x) = \\dfrac{g'(x)}{\\sqrt{1-(g(x))^2}} = \\dfrac{2}{\\sqrt{1-4x^2}}$.",
      "wrongAnalysis": "연쇄법칙을 빠뜨리고 $\\dfrac{1}{\\sqrt{1-4x^2}}$ 으로 답하는 실수가 흔합니다. 내부 함수 $2x$ 의 도함수 $2$ 를 분자에 반드시 곱해야 합니다."
    }
  ],
  "summary": {
    "keyPoints": [
      "역삼각함수의 미분은 역함수 관계($\\sin y = x$ 등)를 세운 뒤 양변을 미분하고, 삼각함수 항등식으로 $x$만의 식으로 변환하여 유도한다.",
      "$\\arcsin x$와 $\\arccos x$의 도함수는 부호만 다르다: 이는 $\\arcsin x + \\arccos x = \\dfrac{\\pi}{2}$ 항등식에서 비롯된다.",
      "합성함수의 경우 연쇄법칙에 의해 내부 함수의 도함수를 반드시 곱해야 한다."
    ],
    "formulas": [
      "\\frac{d}{dx}\\arcsin x = \\frac{1}{\\sqrt{1-x^2}}",
      "\\frac{d}{dx}\\arccos x = -\\frac{1}{\\sqrt{1-x^2}}",
      "\\frac{d}{dx}\\arctan x = \\frac{1}{1+x^2}",
      "\\frac{d}{dx}\\arcsin(g(x)) = \\frac{g'(x)}{\\sqrt{1-(g(x))^2}}",
      "\\frac{d}{dx}\\arctan(g(x)) = \\frac{g'(x)}{1+(g(x))^2}"
    ],
    "commonMistakes": [
      "$\\arcsin x$와 $\\arccos x$의 도함수 부호를 혼동하는 실수 (양수/음수)",
      "합성함수에서 연쇄법칙을 빠뜨려 내부 함수의 도함수를 곱하지 않는 실수",
      "$\\sqrt{1-x^2}$와 $1+x^2$를 혼동하여 $\\arcsin$과 $\\arctan$의 도함수를 섞는 실수"
    ],
    "nextConnection": "미분 공식을 모두 익혔으니, 이제 미분의 응용으로 넘어갑니다. 접선의 방정식과 선형근사부터 시작합니다."
  }
}
];