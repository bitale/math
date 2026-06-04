import { Lesson } from "../../types";

export const engPreschoolAge5Lessons: Lesson[] = [
  // ────────────────────────────────────────────
  // Lesson 1: 알파벳 A-F 인식
  // ────────────────────────────────────────────
  {
    id: 1001,
    title: "알파벳 A~F 배우기",
    category: "영어 5세",
    level: "입문",
    question: "알파벳 A, B, C, D, E, F를 알아볼 수 있을까요?",
    concept: {
      intro:
        "영어에는 알파벳이라는 글자가 있어요!\n\n오늘은 처음 여섯 글자를 배워 볼 거예요.\n\n:::note[기억해요!]\nA, B, C, D, E, F — 순서대로 외워 봐요!\n:::\n\n🍎 A는 Apple(사과), 🐻 B는 Bear(곰), 🐱 C는 Cat(고양이)으로 시작해요!",
      intuition:
        "노래로 불러 본 적 있죠? '에이, 비, 씨, 디, 이, 에프~' 알파벳 노래의 첫 부분이에요! 각 글자에는 친구 같은 단어가 있어요.",
      formula:
        "A — Apple 🍎\nB — Bear 🐻\nC — Cat 🐱\nD — Dog 🐶\nE — Egg 🥚\nF — Fish 🐟",
      summary:
        ":::note[핵심 정리]\n알파벳의 첫 여섯 글자는 A, B, C, D, E, F예요. 각 글자로 시작하는 영어 단어를 함께 기억해요!\n:::",
    },
    examples: [
      {
        title: "A는 Apple!",
        problem: "🍎 이 과일의 영어 이름은 'Apple'이에요. 어떤 글자로 시작할까요?",
        steps: [
          "'Apple'을 천천히 읽어 봐요: A-p-p-l-e",
          "맨 처음에 오는 글자를 찾아요.",
          "바로 'A'예요!",
        ],
        answer: "Apple은 알파벳 'A'로 시작해요!",
        lesson: "영어 단어의 첫 글자를 보면 어떤 알파벳인지 알 수 있어요!",
      },
      {
        title: "알파벳 순서 맞추기",
        problem: "A, B, ?, D — 빈칸에 들어갈 알파벳은 무엇일까요?",
        steps: [
          "알파벳을 순서대로 불러 봐요: A, B, ...",
          "B 다음에 오는 글자는 뭘까요?",
          "바로 'C'예요!",
        ],
        answer: "A, B, C, D — 빈칸에는 'C'가 들어가요!",
        lesson: "알파벳은 순서가 정해져 있어요. 노래로 외우면 쉬워요!",
      },
      {
        title: "그림으로 알파벳 찾기",
        problem: "🐶 이 동물은 'Dog'이에요. 어떤 알파벳으로 시작할까요?",
        steps: [
          "'Dog'을 소리 내어 읽어 봐요.",
          "첫 소리는 '드'예요.",
          "'드' 소리를 내는 알파벳은 'D'예요!",
        ],
        answer: "Dog은 알파벳 'D'로 시작해요!",
        lesson: "영어 단어의 첫 소리를 듣고 알파벳을 찾을 수 있어요!",
      },
    ],
    problems: [
      {
        id: "eng-pre5-1-1",
        type: "choice",
        difficulty: 1,
        question: "🍎 'Apple'은 어떤 알파벳으로 시작할까요?",
        choices: ["A", "B", "C", "D"],
        answer: "A",
        hints: [
          "'Apple'을 천천히 소리 내어 읽어 봐요.",
          "첫 소리가 '애'예요. '애'로 시작하는 알파벳은?",
        ],
        explanation: "Apple(사과)은 알파벳 'A'로 시작해요! 🍎 A is for Apple!",
        wrongAnalysis: "영어 단어의 맨 처음 글자를 잘 봐야 해요. Apple의 첫 글자는 A예요.",
      },
      {
        id: "eng-pre5-1-2",
        type: "choice",
        difficulty: 1,
        question: "알파벳 순서로 A, B, C 다음에 오는 글자는 무엇일까요?",
        choices: ["E", "F", "D", "B"],
        answer: "D",
        hints: [
          "알파벳 노래를 불러 봐요: A, B, C, ...",
          "C 다음에 오는 글자를 생각해 봐요!",
        ],
        explanation: "알파벳 순서는 A, B, C, D, E, F예요. C 다음에는 D가 와요!",
        wrongAnalysis: "알파벳 순서를 헷갈리면 노래로 다시 불러 봐요.",
      },
      {
        id: "eng-pre5-1-3",
        type: "choice",
        difficulty: 1,
        question: "🐱 'Cat'은 어떤 알파벳으로 시작할까요?",
        choices: ["B", "D", "C", "F"],
        answer: "C",
        hints: [
          "'Cat'을 소리 내어 읽어 봐요.",
          "첫 소리가 '크'예요. 어떤 알파벳일까요?",
        ],
        explanation: "Cat(고양이)은 알파벳 'C'로 시작해요! 🐱 C is for Cat!",
        wrongAnalysis: "B와 C, D를 헷갈리지 않도록 각각의 소리를 기억해요.",
      },
      {
        id: "eng-pre5-1-4",
        type: "choice",
        difficulty: 2,
        question: "🐟 'Fish'는 어떤 알파벳으로 시작할까요?",
        choices: ["E", "D", "B", "F"],
        answer: "F",
        hints: [
          "'Fish'를 소리 내어 읽어 봐요.",
          "첫 소리가 '프'예요. '프' 소리가 나는 알파벳은?",
        ],
        explanation: "Fish(물고기)는 알파벳 'F'로 시작해요! 🐟 F is for Fish!",
        wrongAnalysis: "E와 F를 헷갈리지 않도록 주의해요. Fish의 첫 소리는 '프'예요.",
      },
      {
        id: "eng-pre5-1-5",
        type: "choice",
        difficulty: 2,
        question: "다음 중 알파벳 A~F에 포함되지 않는 글자는 무엇일까요?",
        choices: ["A", "C", "G", "E"],
        answer: "G",
        hints: [
          "A부터 F까지의 알파벳을 떠올려 봐요.",
          "A, B, C, D, E, F — 여기에 G가 있나요?",
        ],
        explanation: "A, B, C, D, E, F 중에 G는 없어요! G는 F 다음에 오는 글자예요.",
        wrongAnalysis: "A~F에 포함된 글자를 하나씩 확인해 보면 쉽게 찾을 수 있어요.",
      },
    ],
    summary: {
      keyPoints: [
        "알파벳의 처음 여섯 글자는 A, B, C, D, E, F예요.",
        "각 알파벳으로 시작하는 영어 단어를 함께 기억하면 좋아요.",
        "알파벳 노래를 부르면 순서를 쉽게 외울 수 있어요.",
      ],
      formulas: [
        "A - Apple 🍎",
        "B - Bear 🐻",
        "C - Cat 🐱",
        "D - Dog 🐶",
        "E - Egg 🥚",
        "F - Fish 🐟",
      ],
      commonMistakes: [
        "B와 D의 모양을 헷갈리는 경우가 많아요.",
        "E와 F의 소리를 혼동하지 않도록 주의해요.",
      ],
      nextConnection: "G부터 L까지의 알파벳을 배워 볼 거예요!",
    },
  },

  // ────────────────────────────────────────────
  // Lesson 2: 색깔 - red, blue, yellow, green
  // ────────────────────────────────────────────
  {
    id: 1002,
    title: "색깔을 영어로 말해요",
    category: "영어 5세",
    level: "입문",
    question: "빨강, 파랑, 노랑, 초록을 영어로 말할 수 있을까요?",
    concept: {
      intro:
        "우리 주변에는 알록달록한 색깔이 가득해요!\n\n오늘은 네 가지 색깔의 영어 이름을 배워 볼 거예요.\n\n:::note[기억해요!]\n🔴 Red(빨강), 🔵 Blue(파랑), 🟡 Yellow(노랑), 🟢 Green(초록)\n:::\n\n좋아하는 색깔의 영어 이름을 기억해 봐요!",
      intuition:
        "신호등을 본 적 있죠? 빨간 불은 Red, 초록 불은 Green이에요! 하늘은 Blue, 바나나는 Yellow예요. 이렇게 주변 물건의 색깔로 영어를 배워요.",
      formula:
        "🔴 빨강 = Red\n🔵 파랑 = Blue\n🟡 노랑 = Yellow\n🟢 초록 = Green",
      summary:
        ":::note[핵심 정리]\n네 가지 기본 색깔의 영어 이름: Red(빨강), Blue(파랑), Yellow(노랑), Green(초록)을 기억해요!\n:::",
    },
    examples: [
      {
        title: "사과는 무슨 색?",
        problem: "🍎 사과의 색깔을 영어로 말해 볼까요?",
        steps: [
          "사과를 봐요. 무슨 색일까요?",
          "빨간색이에요!",
          "빨간색은 영어로 'Red'예요!",
        ],
        answer: "사과는 Red(빨간색)이에요!",
        lesson: "빨간 물건을 볼 때마다 'Red!'라고 말해 봐요.",
      },
      {
        title: "하늘은 무슨 색?",
        problem: "☀️ 맑은 날 하늘의 색깔을 영어로 말해 볼까요?",
        steps: [
          "맑은 날 하늘을 올려다봐요.",
          "파란색이에요!",
          "파란색은 영어로 'Blue'예요!",
        ],
        answer: "하늘은 Blue(파란색)이에요!",
        lesson: "바다도 Blue예요! 파란 것들을 찾아봐요.",
      },
      {
        title: "나뭇잎은 무슨 색?",
        problem: "🌿 나뭇잎의 색깔을 영어로 말해 볼까요?",
        steps: [
          "나뭇잎을 봐요. 무슨 색일까요?",
          "초록색이에요!",
          "초록색은 영어로 'Green'이에요!",
        ],
        answer: "나뭇잎은 Green(초록색)이에요!",
        lesson: "풀과 나무도 Green이에요!",
      },
    ],
    problems: [
      {
        id: "eng-pre5-2-1",
        type: "choice",
        difficulty: 1,
        question: "🔴 빨간색은 영어로 무엇일까요?",
        choices: ["Blue", "Red", "Green", "Yellow"],
        answer: "Red",
        hints: [
          "빨간 사과 🍎를 떠올려 봐요.",
          "'레드'라고 읽는 단어를 찾아봐요!",
        ],
        explanation: "빨간색은 영어로 'Red'예요! 🔴 빨간 사과도 Red apple이에요!",
        wrongAnalysis: "Blue(파랑)와 Red(빨강)를 헷갈리지 않도록 색깔과 함께 기억해요.",
      },
      {
        id: "eng-pre5-2-2",
        type: "choice",
        difficulty: 1,
        question: "🔵 파란색은 영어로 무엇일까요?",
        choices: ["Yellow", "Green", "Blue", "Red"],
        answer: "Blue",
        hints: [
          "파란 하늘을 떠올려 봐요.",
          "'블루'라고 읽는 단어를 찾아봐요!",
        ],
        explanation: "파란색은 영어로 'Blue'예요! 🔵 파란 하늘도 Blue sky예요!",
        wrongAnalysis: "Green(초록)과 Blue(파랑)를 잘 구별해야 해요.",
      },
      {
        id: "eng-pre5-2-3",
        type: "choice",
        difficulty: 1,
        question: "🍌 바나나는 무슨 색일까요? 영어로 골라 보세요!",
        choices: ["Red", "Blue", "Green", "Yellow"],
        answer: "Yellow",
        hints: [
          "바나나의 색깔을 생각해 봐요. 노란색이죠?",
          "노란색은 영어로 '옐로'예요!",
        ],
        explanation: "바나나는 노란색이에요! 노란색은 영어로 'Yellow'예요! 🍌",
        wrongAnalysis: "바나나의 색깔을 먼저 생각한 다음 영어 단어를 찾아요.",
      },
      {
        id: "eng-pre5-2-4",
        type: "choice",
        difficulty: 2,
        question: "🌿 나뭇잎의 색깔을 영어로 말하면?",
        choices: ["Yellow", "Red", "Green", "Blue"],
        answer: "Green",
        hints: [
          "나뭇잎은 무슨 색일까요? 초록색이에요!",
          "초록색은 영어로 '그린'이에요!",
        ],
        explanation: "나뭇잎은 초록색이에요! 초록색은 영어로 'Green'이에요! 🌿",
        wrongAnalysis: "Yellow(노랑)와 Green(초록)을 헷갈리지 않도록 주의해요.",
      },
      {
        id: "eng-pre5-2-5",
        type: "choice",
        difficulty: 2,
        question: "다음 중 'Blue'의 뜻은 무엇일까요?",
        choices: ["빨간색", "노란색", "초록색", "파란색"],
        answer: "파란색",
        hints: [
          "'Blue'는 하늘이나 바다의 색이에요.",
          "'블루'라고 읽어요. 어떤 색일까요?",
        ],
        explanation: "'Blue'는 파란색이에요! 하늘과 바다의 색이죠! 🔵",
        wrongAnalysis: "영어 단어를 한국어 뜻과 짝지어서 기억하면 쉬워요.",
      },
    ],
    summary: {
      keyPoints: [
        "빨강은 Red, 파랑은 Blue, 노랑은 Yellow, 초록은 Green이에요.",
        "주변의 색깔을 보면서 영어로 말해 보면 잘 외워져요.",
        "신호등, 과일, 하늘 등으로 색깔 영어를 연습해요.",
      ],
      formulas: [
        "🔴 Red = 빨강",
        "🔵 Blue = 파랑",
        "🟡 Yellow = 노랑",
        "🟢 Green = 초록",
      ],
      commonMistakes: [
        "Blue(파랑)와 Green(초록)을 헷갈리는 경우가 있어요.",
        "Yellow의 철자가 길어서 어렵게 느낄 수 있지만 '옐로'로 기억해요.",
      ],
      nextConnection: "더 많은 색깔(주황, 보라, 분홍, 하양, 검정)을 배워 볼 거예요!",
    },
  },

  // ────────────────────────────────────────────
  // Lesson 3: 동물 - cat, dog, bird, fish
  // ────────────────────────────────────────────
  {
    id: 1003,
    title: "동물을 영어로 말해요",
    category: "영어 5세",
    level: "입문",
    question: "고양이, 강아지, 새, 물고기를 영어로 말할 수 있을까요?",
    concept: {
      intro:
        "동물 친구들의 영어 이름을 알아봐요!\n\n:::note[기억해요!]\n🐱 Cat(고양이), 🐶 Dog(강아지), 🐦 Bird(새), 🐟 Fish(물고기)\n:::\n\n동물원이나 집에서 만나는 동물들의 영어 이름을 함께 배워 봐요!",
      intuition:
        "집에서 키우는 반려동물을 생각해 봐요! 고양이는 Cat, 강아지는 Dog이에요. 하늘을 나는 새는 Bird, 물속에 사는 물고기는 Fish예요!",
      formula:
        "🐱 고양이 = Cat\n🐶 강아지 = Dog\n🐦 새 = Bird\n🐟 물고기 = Fish",
      summary:
        ":::note[핵심 정리]\n네 가지 동물의 영어 이름: Cat(고양이), Dog(강아지), Bird(새), Fish(물고기)를 기억해요!\n:::",
    },
    examples: [
      {
        title: "야옹! 이 동물은?",
        problem: "🐱 '야옹~' 하고 울어요. 이 동물의 영어 이름은 무엇일까요?",
        steps: [
          "'야옹' 하고 우는 동물은 고양이예요!",
          "고양이는 영어로 뭘까요?",
          "바로 'Cat'이에요!",
        ],
        answer: "고양이는 영어로 'Cat'이에요!",
        lesson: "Cat은 짧고 쉬운 단어예요. '캣'이라고 발음해요!",
      },
      {
        title: "멍멍! 이 동물은?",
        problem: "🐶 '멍멍!' 하고 짖어요. 이 동물의 영어 이름은 무엇일까요?",
        steps: [
          "'멍멍' 하고 짖는 동물은 강아지예요!",
          "강아지는 영어로 뭘까요?",
          "바로 'Dog'이에요!",
        ],
        answer: "강아지는 영어로 'Dog'이에요!",
        lesson: "Dog도 세 글자! Cat과 Dog을 함께 기억해요!",
      },
      {
        title: "물속에 사는 동물",
        problem: "🐟 물속에서 헤엄치는 이 동물의 영어 이름은?",
        steps: [
          "물속에서 헤엄치는 동물은 물고기예요!",
          "물고기는 영어로 뭘까요?",
          "바로 'Fish'예요!",
        ],
        answer: "물고기는 영어로 'Fish'예요!",
        lesson: "Fish는 '피시'라고 발음해요!",
      },
    ],
    problems: [
      {
        id: "eng-pre5-3-1",
        type: "choice",
        difficulty: 1,
        question: "🐱 고양이를 영어로 무엇이라고 할까요?",
        choices: ["Dog", "Fish", "Cat", "Bird"],
        answer: "Cat",
        hints: [
          "고양이는 '야옹' 하고 울어요.",
          "'캣'이라고 읽는 단어를 찾아봐요!",
        ],
        explanation: "고양이는 영어로 'Cat'이에요! 🐱 야옹~",
        wrongAnalysis: "Dog(강아지)와 Cat(고양이)을 헷갈리지 않도록 주의해요.",
      },
      {
        id: "eng-pre5-3-2",
        type: "choice",
        difficulty: 1,
        question: "🐶 강아지를 영어로 무엇이라고 할까요?",
        choices: ["Cat", "Dog", "Bird", "Fish"],
        answer: "Dog",
        hints: [
          "강아지는 '멍멍' 하고 짖어요.",
          "'도그'라고 읽는 단어를 찾아봐요!",
        ],
        explanation: "강아지는 영어로 'Dog'이에요! 🐶 멍멍!",
        wrongAnalysis: "Cat(고양이)과 Dog(강아지)를 구별해서 기억해요.",
      },
      {
        id: "eng-pre5-3-3",
        type: "choice",
        difficulty: 1,
        question: "다음 중 'Bird'의 뜻은 무엇일까요?",
        choices: ["물고기", "강아지", "새", "고양이"],
        answer: "새",
        hints: [
          "'Bird'는 하늘을 나는 동물이에요.",
          "'버드'라고 읽어요!",
        ],
        explanation: "'Bird'는 새예요! 🐦 하늘을 자유롭게 날아다니는 동물이에요!",
        wrongAnalysis: "Fish(물고기)와 Bird(새)를 헷갈리지 않도록 주의해요.",
      },
      {
        id: "eng-pre5-3-4",
        type: "choice",
        difficulty: 2,
        question: "🐟 물속에서 헤엄치는 동물은 영어로 무엇일까요?",
        choices: ["Bird", "Cat", "Fish", "Dog"],
        answer: "Fish",
        hints: [
          "물속에서 사는 동물은 물고기예요!",
          "물고기는 영어로 '피시'예요!",
        ],
        explanation: "물고기는 영어로 'Fish'예요! 🐟 물속에서 헤엄쳐요!",
        wrongAnalysis: "Bird(새)는 하늘, Fish(물고기)는 물속이에요. 사는 곳으로 구별해요.",
      },
      {
        id: "eng-pre5-3-5",
        type: "choice",
        difficulty: 2,
        question: "다음 중 하늘을 날 수 있는 동물의 영어 이름은?",
        choices: ["Fish", "Dog", "Cat", "Bird"],
        answer: "Bird",
        hints: [
          "하늘을 나는 동물은 새예요!",
          "새는 영어로 무엇일까요?",
        ],
        explanation: "하늘을 나는 동물은 새! 새는 영어로 'Bird'예요! 🐦",
        wrongAnalysis: "Fish(물고기)는 물속, Bird(새)는 하늘에 살아요. 헷갈리지 마세요!",
      },
    ],
    summary: {
      keyPoints: [
        "고양이는 Cat, 강아지는 Dog, 새는 Bird, 물고기는 Fish예요.",
        "동물의 특징(우는 소리, 사는 곳)과 함께 기억하면 좋아요.",
        "Cat과 Dog은 셋 글자, Bird와 Fish는 넷 글자예요.",
      ],
      formulas: [
        "🐱 Cat = 고양이",
        "🐶 Dog = 강아지",
        "🐦 Bird = 새",
        "🐟 Fish = 물고기",
      ],
      commonMistakes: [
        "Cat(고양이)과 Dog(강아지)를 바꿔서 말하는 경우가 있어요.",
        "Bird(새)와 Fish(물고기)를 혼동하지 않도록 사는 곳을 함께 기억해요.",
      ],
      nextConnection: "더 많은 동물(토끼, 코끼리, 사자, 원숭이 등)의 영어 이름을 배워 볼 거예요!",
    },
  },

  // ────────────────────────────────────────────
  // Lesson 4: 고난도 종합 문제 (Difficulty 3)
  // ────────────────────────────────────────────
  {
    id: 1028,
    title: "헷갈리는 영어 단어 도전!",
    category: "영어 5세",
    level: "심화",
    question: "비슷하게 생기거나 비슷한 소리를 가진 영어 단어를 구별할 수 있을까요?",
    concept: {
      intro:
        "영어에는 비슷하게 생겼거나 소리가 비슷한 단어들이 있어요!\n\n:::note[기억해요!]\n비슷한 단어를 잘 구별하면 영어 실력이 쑥쑥 올라가요!\n:::\n\n오늘은 헷갈리기 쉬운 단어들을 모아서 도전해 볼 거예요!",
      intuition:
        "b와 d, p와 q처럼 비슷하게 생긴 글자들이 있어요. 또 cat과 cap, dog과 dig처럼 한 글자만 달라도 뜻이 완전히 달라져요. 잘 구별하는 연습을 해 봐요!",
      formula:
        "비슷한 단어 구별하기:\ncat(고양이) vs cap(모자)\ndog(강아지) vs dig(파다)\nbed(침대) vs bad(나쁜)\nred(빨강) vs rod(막대기)",
      summary:
        ":::note[핵심 정리]\n영어 단어는 글자 하나만 달라도 뜻이 완전히 달라져요. 꼼꼼히 살펴보는 습관이 중요해요!\n:::",
    },
    examples: [
      {
        title: "cat vs cap",
        problem: "'cat'과 'cap'은 어떻게 다를까요?",
        steps: [
          "cat은 C-A-T로 끝이 't'예요. 고양이라는 뜻이에요.",
          "cap은 C-A-P로 끝이 'p'예요. 모자라는 뜻이에요.",
          "마지막 글자 하나가 다르면 뜻이 완전히 달라져요!",
        ],
        answer: "cat은 고양이, cap은 모자예요!",
        lesson: "영어 단어의 글자 하나하나를 꼼꼼히 봐야 해요!",
      },
      {
        title: "b와 d 구별하기",
        problem: "'bed'를 보면 b와 d를 헷갈리지 않을 수 있어요!",
        steps: [
          "b는 막대기가 왼쪽, 동그라미가 오른쪽이에요.",
          "d는 동그라미가 왼쪽, 막대기가 오른쪽이에요.",
          "'bed'라는 단어를 떠올리면 b와 d를 구별할 수 있어요!",
        ],
        answer: "b는 왼쪽에 막대, d는 오른쪽에 막대!",
        lesson: "'bed(침대)' 모양을 떠올리면 b와 d를 쉽게 구별해요!",
      },
      {
        title: "색깔 이름 함정",
        problem: "red, blue, green 중에 과일 이름이기도 한 색깔은?",
        steps: [
          "red는 빨강이에요. 과일 이름은 아니에요.",
          "blue는 파랑이에요. 과일 이름은 아니에요.",
          "orange는 주황색이면서 오렌지(과일)라는 뜻도 있어요!",
        ],
        answer: "orange는 색깔 이름이면서 과일 이름이기도 해요!",
        lesson: "영어에서는 한 단어가 여러 뜻을 가질 수 있어요!",
      },
    ],
    problems: [
      {
        id: "eng-pre5-hard-1",
        type: "choice",
        difficulty: 3,
        question: "'cap'의 뜻은 무엇일까요? (cat이 아니에요! 잘 보세요!)",
        choices: ["고양이", "모자", "컵", "차"],
        answer: "모자",
        hints: [
          "cat(고양이)과 헷갈리지 않도록 마지막 글자를 잘 봐요.",
          "cap의 마지막 글자는 'p'예요. 머리에 쓰는 것이에요.",
        ],
        explanation: "cap은 '모자'예요! cat(고양이)과 마지막 글자만 다르지만 뜻은 완전히 달라요.",
        wrongAnalysis: "cat(고양이)과 cap(모자)은 글자가 비슷하지만 다른 단어예요. t와 p를 잘 구별해요.",
      },
      {
        id: "eng-pre5-hard-2",
        type: "choice",
        difficulty: 3,
        question: "다음 중 'b'로 시작하는 동물은 무엇일까요? (d가 아니에요!)",
        choices: ["Dog", "Duck", "Bird", "Deer"],
        answer: "Bird",
        hints: [
          "보기의 첫 글자를 잘 봐요. b와 d를 헷갈리지 마세요!",
          "'Bird'는 'B'로 시작하고, 새라는 뜻이에요.",
        ],
        explanation: "Bird(새)만 'B'로 시작해요! Dog, Duck, Deer는 모두 'D'로 시작해요.",
        wrongAnalysis: "b와 d는 모양이 비슷해서 헷갈리기 쉬워요. b는 막대가 왼쪽, d는 막대가 오른쪽이에요.",
      },
      {
        id: "eng-pre5-hard-3",
        type: "choice",
        difficulty: 3,
        question: "🐶 'Dog'의 첫 소리와 같은 소리로 시작하는 것은?",
        choices: ["Bear", "Door", "Fish", "Grape"],
        answer: "Door",
        hints: [
          "Dog의 첫 글자는 'D'예요. 'd' 소리가 나요.",
          "'D'로 시작하는 단어를 찾아봐요!",
        ],
        explanation: "Dog와 Door는 모두 'D'로 시작해서 같은 소리가 나요! Bear는 B, Fish는 F, Grape는 G로 시작해요.",
        wrongAnalysis: "같은 소리란 첫 글자가 같다는 뜻이에요. D소리(드)와 B소리(브)를 잘 구별해요.",
      },
      {
        id: "eng-pre5-hard-4",
        type: "choice",
        difficulty: 3,
        question: "'Orange'는 어떤 뜻이 있을까요? (두 가지 뜻이 있어요!)",
        choices: [
          "과일 이름만",
          "색깔 이름만",
          "과일 이름이면서 색깔 이름",
          "동물 이름이면서 색깔 이름",
        ],
        answer: "과일 이름이면서 색깔 이름",
        hints: [
          "Orange 주스의 orange는 과일이에요.",
          "orange color라고 하면 주황색이에요.",
        ],
        explanation: "Orange는 오렌지(과일)라는 뜻도 있고 주황색(색깔)이라는 뜻도 있어요! 한 단어에 두 가지 뜻이에요.",
        wrongAnalysis: "영어에서는 한 단어가 여러 뜻을 가질 수 있어요. orange는 과일과 색깔 두 가지 뜻이에요.",
      },
      {
        id: "eng-pre5-hard-5",
        type: "choice",
        difficulty: 3,
        question: "다음 중 알파벳 순서가 올바른 것은?",
        choices: ["A, C, B, D", "B, A, C, D", "A, B, C, D", "A, B, D, C"],
        answer: "A, B, C, D",
        hints: [
          "알파벳 노래를 떠올려 봐요: 에이, 비, 씨, 디...",
          "A 다음은 B, B 다음은 C, C 다음은 D예요.",
        ],
        explanation: "올바른 알파벳 순서는 A, B, C, D예요! 나머지는 순서가 뒤바뀌어 있어요.",
        wrongAnalysis: "A, C, B, D는 B와 C가 바뀌었고, B, A, C, D는 A와 B가 바뀌었어요.",
      },
      {
        id: "eng-pre5-hard-6",
        type: "choice",
        difficulty: 3,
        question: "🥚 'Egg'는 어떤 알파벳으로 시작할까요? (비슷한 소리에 주의!)",
        choices: ["A", "E", "I", "O"],
        answer: "E",
        hints: [
          "Egg를 소리 내어 읽어 봐요: '에그'",
          "'에' 소리로 시작하는 알파벳은?",
        ],
        explanation: "Egg는 'E'로 시작해요! '에' 소리가 나요. A(에이)와 헷갈리지 마세요!",
        wrongAnalysis: "A는 '에이'라고 읽고, E는 '이'라고 읽어요. Egg의 '에'는 E의 소리예요.",
      },
      {
        id: "eng-pre5-hard-7",
        type: "choice",
        difficulty: 3,
        question: "다음 중 나머지 셋과 종류가 다른 하나는?",
        choices: ["Red", "Cat", "Blue", "Green"],
        answer: "Cat",
        hints: [
          "Red, Blue, Green은 공통점이 있어요.",
          "Cat은 동물 이름인데, 나머지는 뭘까요?",
        ],
        explanation: "Red(빨강), Blue(파랑), Green(초록)은 모두 색깔 이름이에요. Cat(고양이)만 동물 이름이에요!",
        wrongAnalysis: "같은 종류끼리 묶는 문제예요. 색깔 3개와 동물 1개를 구별해야 해요.",
      },
      {
        id: "eng-pre5-hard-8",
        type: "choice",
        difficulty: 3,
        question: "'bed'에서 첫 글자 'b'를 'r'로 바꾸면 무슨 뜻이 될까요?",
        choices: ["빨강", "막대기", "읽다", "침대"],
        answer: "빨강",
        hints: [
          "bed에서 b를 r로 바꾸면 'red'가 돼요.",
          "red는 무슨 뜻일까요?",
        ],
        explanation: "bed(침대)에서 b를 r로 바꾸면 red(빨강)가 돼요! 첫 글자 하나로 뜻이 완전히 바뀌어요.",
        wrongAnalysis: "bed → red: 첫 글자만 바꿨는데 침대가 빨강이 되었어요! 영어는 글자 하나하나가 중요해요.",
      },
      {
        id: "eng-pre5-hard-9",
        type: "choice",
        difficulty: 3,
        question: "🐟 Fish와 같은 글자(F)로 시작하는 것은?",
        choices: ["Pig", "Frog", "Cat", "Dog"],
        answer: "Frog",
        hints: [
          "Fish의 첫 글자는 'F'예요.",
          "보기 중에서 'F'로 시작하는 단어를 찾아봐요!",
        ],
        explanation: "Fish(물고기)와 Frog(개구리)는 둘 다 'F'로 시작해요! Pig는 P, Cat은 C, Dog는 D로 시작해요.",
        wrongAnalysis: "P와 F를 헷갈리는 경우가 있어요. Pig는 P, Frog는 F로 시작해요.",
      },
      {
        id: "eng-pre5-hard-10",
        type: "choice",
        difficulty: 3,
        question: "다음 중 그림과 영어 단어가 잘못 연결된 것은?",
        choices: [
          "🍎 - Apple",
          "🐶 - Cat",
          "🐟 - Fish",
          "🐦 - Bird",
        ],
        answer: "🐶 - Cat",
        hints: [
          "강아지 그림(🐶)에 어떤 단어가 연결되어 있나요?",
          "🐶는 강아지인데, Cat은 고양이예요!",
        ],
        explanation: "🐶는 강아지인데 Cat(고양이)이라고 되어 있어요! 🐶는 Dog이 맞아요. 나머지는 모두 올바르게 연결되었어요.",
        wrongAnalysis: "그림과 단어가 맞는지 하나씩 확인해야 해요. 🐶 = Dog이지 Cat이 아니에요!",
      },
    ],
    summary: {
      keyPoints: [
        "비슷한 영어 단어도 글자 하나 차이로 뜻이 완전히 달라져요.",
        "b와 d, p와 q처럼 비슷한 알파벳을 잘 구별해야 해요.",
        "한 단어가 여러 뜻을 가질 수 있어요 (예: orange).",
      ],
      formulas: [
        "cat(고양이) ≠ cap(모자)",
        "bed(침대) ≠ red(빨강)",
        "b는 왼쪽에 막대, d는 오른쪽에 막대",
      ],
      commonMistakes: [
        "b와 d를 바꿔서 읽는 경우가 많아요.",
        "비슷한 단어의 뜻을 혼동하기 쉬워요.",
      ],
      nextConnection: "더 많은 영어 단어를 배우면서 파닉스(발음 규칙)도 함께 익혀 봐요!",
    },
  },
];
