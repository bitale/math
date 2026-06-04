import { Lesson } from "../../types";

export const engPreschoolAge6Lessons: Lesson[] = [
  // ────────────────────────────────────────────
  // Lesson 1: 과일 - apple, banana, grape, orange
  // ────────────────────────────────────────────
  {
    id: 1004,
    title: "과일을 영어로 말해요",
    category: "영어 6세",
    level: "입문",
    question: "사과, 바나나, 포도, 오렌지를 영어로 말할 수 있을까요?",
    concept: {
      intro:
        "맛있는 과일의 영어 이름을 알아봐요!\n\n:::note[기억해요!]\n🍎 Apple(사과), 🍌 Banana(바나나), 🍇 Grape(포도), 🍊 Orange(오렌지)\n:::\n\n과일 가게에 가면 이 과일들을 영어로 말해 봐요!",
      intuition:
        "간식으로 먹는 과일들! 사과는 Apple, 바나나는 Banana예요. '바나나'는 한국어랑 영어 발음이 비슷하죠? 포도는 Grape, 오렌지도 한국어에서 이미 쓰고 있는 말이에요!",
      formula:
        "🍎 사과 = Apple\n🍌 바나나 = Banana\n🍇 포도 = Grape\n🍊 오렌지 = Orange",
      summary:
        ":::note[핵심 정리]\n네 가지 과일의 영어 이름: Apple(사과), Banana(바나나), Grape(포도), Orange(오렌지)를 기억해요!\n:::",
    },
    examples: [
      {
        title: "빨간 과일은?",
        problem: "🍎 빨갛고 동그란 이 과일의 영어 이름은 무엇일까요?",
        steps: [
          "빨갛고 동그란 과일은 사과예요!",
          "사과는 영어로 뭘까요?",
          "바로 'Apple'이에요! '애플'이라고 읽어요.",
        ],
        answer: "사과는 영어로 'Apple'이에요!",
        lesson: "Apple은 알파벳 A로 시작하는 대표적인 단어예요!",
      },
      {
        title: "길쭉한 과일은?",
        problem: "🍌 노랗고 길쭉한 이 과일의 영어 이름은?",
        steps: [
          "노랗고 길쭉한 과일은 바나나예요!",
          "바나나는 영어로도 비슷하게 발음해요.",
          "'Banana' — '바나나'라고 읽어요!",
        ],
        answer: "바나나는 영어로 'Banana'예요!",
        lesson: "한국어 '바나나'와 영어 'Banana'는 발음이 비슷해요!",
      },
      {
        title: "알알이 달린 과일",
        problem: "🍇 알맹이가 여러 개 달린 보라색 과일의 영어 이름은?",
        steps: [
          "알맹이가 여러 개 달린 보라색 과일은 포도예요!",
          "포도는 영어로 'Grape'이에요.",
          "'그레이프'라고 읽어요!",
        ],
        answer: "포도는 영어로 'Grape'이에요!",
        lesson: "포도 한 알은 a grape, 여러 개는 grapes예요!",
      },
    ],
    problems: [
      {
        id: "eng-pre6-1-1",
        type: "choice",
        difficulty: 1,
        question: "다음 중 'Apple'의 뜻은 무엇일까요? 🍎",
        choices: ["사과", "바나나", "포도", "딸기"],
        answer: "사과",
        hints: [
          "'Apple'은 빨갛고 동그란 과일이에요.",
          "'애플'이라고 읽어요. 어떤 과일일까요?",
        ],
        explanation: "'Apple'은 사과예요! 🍎 빨갛고 맛있는 과일이에요!",
        wrongAnalysis: "Banana(바나나)와 Apple(사과)을 헷갈리지 않도록 모양으로 기억해요.",
      },
      {
        id: "eng-pre6-1-2",
        type: "choice",
        difficulty: 1,
        question: "🍌 바나나는 영어로 무엇일까요?",
        choices: ["Orange", "Grape", "Banana", "Apple"],
        answer: "Banana",
        hints: [
          "바나나는 한국어와 영어 발음이 비슷해요!",
          "'바나나'와 비슷하게 읽히는 단어를 찾아봐요.",
        ],
        explanation: "바나나는 영어로 'Banana'예요! 🍌 발음이 비슷해서 쉽죠?",
        wrongAnalysis: "Orange(오렌지)와 Banana(바나나)를 색깔로 구별해요. 바나나는 노란색!",
      },
      {
        id: "eng-pre6-1-3",
        type: "choice",
        difficulty: 1,
        question: "🍇 포도는 영어로 무엇일까요?",
        choices: ["Apple", "Grape", "Orange", "Banana"],
        answer: "Grape",
        hints: [
          "포도는 알맹이가 여러 개 달린 과일이에요.",
          "'그레이프'라고 읽는 단어를 찾아봐요!",
        ],
        explanation: "포도는 영어로 'Grape'이에요! 🍇 보라색 알맹이가 맛있어요!",
        wrongAnalysis: "Apple(사과)과 Grape(포도)는 모양이 다르죠? 포도는 알알이 달려 있어요.",
      },
      {
        id: "eng-pre6-1-4",
        type: "choice",
        difficulty: 2,
        question: "다음 중 'Orange'의 뜻은 무엇일까요? 🍊",
        choices: ["포도", "사과", "오렌지", "바나나"],
        answer: "오렌지",
        hints: [
          "'Orange'는 동그랗고 주황색인 과일이에요.",
          "'오렌지'라고 읽어요!",
        ],
        explanation: "'Orange'는 오렌지예요! 🍊 주황색 과일이에요!",
        wrongAnalysis: "Orange는 과일 이름이기도 하고 주황색을 뜻하기도 해요.",
      },
      {
        id: "eng-pre6-1-5",
        type: "choice",
        difficulty: 2,
        question: "노란색이고 길쭉한 과일의 영어 이름은 무엇일까요? 🍌",
        choices: ["Grape", "Apple", "Orange", "Banana"],
        answer: "Banana",
        hints: [
          "노란색이고 길쭉한 과일을 떠올려 봐요.",
          "바나나의 영어 이름은 한국어와 비슷해요!",
        ],
        explanation: "노란색이고 길쭉한 과일은 바나나! 영어로 'Banana'예요! 🍌",
        wrongAnalysis: "과일의 색깔과 모양을 함께 생각하면 답을 찾기 쉬워요.",
      },
    ],
    summary: {
      keyPoints: [
        "사과는 Apple, 바나나는 Banana, 포도는 Grape, 오렌지는 Orange예요.",
        "Banana와 Orange는 한국어 발음과 비슷해서 기억하기 쉬워요.",
        "과일을 먹을 때마다 영어 이름을 말해 보면 좋아요.",
      ],
      formulas: [
        "🍎 Apple = 사과",
        "🍌 Banana = 바나나",
        "🍇 Grape = 포도",
        "🍊 Orange = 오렌지",
      ],
      commonMistakes: [
        "Apple(사과)과 Orange(오렌지)를 헷갈리는 경우가 있어요. 색깔로 구별해요!",
        "Grape(포도)는 '그레이프'로 읽어요. '그래프'가 아니에요!",
      ],
      nextConnection: "딸기(Strawberry), 수박(Watermelon) 등 더 많은 과일 이름을 배워 볼 거예요!",
    },
  },

  // ────────────────────────────────────────────
  // Lesson 2: 신체 부위 - head, hand, eye, mouth
  // ────────────────────────────────────────────
  {
    id: 1005,
    title: "우리 몸을 영어로 말해요",
    category: "영어 6세",
    level: "입문",
    question: "머리, 손, 눈, 입을 영어로 말할 수 있을까요?",
    concept: {
      intro:
        "우리 몸의 이름을 영어로 알아봐요!\n\n:::note[기억해요!]\n👤 Head(머리), ✋ Hand(손), 👁️ Eye(눈), 👄 Mouth(입)\n:::\n\n'Head, Shoulders, Knees and Toes' 노래 알죠? 오늘은 우리 몸의 영어 이름을 배워요!",
      intuition:
        "머리를 만지면서 'Head!', 손을 흔들면서 'Hand!', 눈을 가리키면서 'Eye!', 입을 가리키면서 'Mouth!'라고 말해 봐요. 몸으로 하면 더 잘 기억나요!",
      formula:
        "👤 머리 = Head\n✋ 손 = Hand\n👁️ 눈 = Eye\n👄 입 = Mouth",
      summary:
        ":::note[핵심 정리]\n네 가지 신체 부위의 영어 이름: Head(머리), Hand(손), Eye(눈), Mouth(입)를 기억해요!\n:::",
    },
    examples: [
      {
        title: "머리를 가리키며!",
        problem: "👤 모자를 쓰는 곳은 어디일까요? 영어로 말해 봐요!",
        steps: [
          "모자를 쓰는 곳은 머리예요!",
          "머리는 영어로 뭘까요?",
          "바로 'Head'예요! '헤드'라고 읽어요.",
        ],
        answer: "머리는 영어로 'Head'예요!",
        lesson: "Head는 '헤드'라고 발음해요. 머리를 만지며 말해 봐요!",
      },
      {
        title: "잡을 때 쓰는 곳",
        problem: "✋ 물건을 잡을 때 쓰는 곳은? 영어로 말해 봐요!",
        steps: [
          "물건을 잡을 때 쓰는 곳은 손이에요!",
          "손은 영어로 'Hand'예요!",
          "'핸드'라고 읽어요.",
        ],
        answer: "손은 영어로 'Hand'예요!",
        lesson: "Hand는 '핸드'라고 읽어요. 손을 흔들며 'Hand!'라고 말해 봐요!",
      },
      {
        title: "볼 때 쓰는 곳",
        problem: "👁️ 예쁜 것을 볼 때 쓰는 곳은? 영어로 말해 봐요!",
        steps: [
          "예쁜 것을 볼 때 쓰는 곳은 눈이에요!",
          "눈은 영어로 'Eye'예요!",
          "'아이'라고 읽어요.",
        ],
        answer: "눈은 영어로 'Eye'예요!",
        lesson: "Eye는 '아이'라고 읽어요. 눈이 두 개이면 Eyes예요!",
      },
    ],
    problems: [
      {
        id: "eng-pre6-2-1",
        type: "choice",
        difficulty: 1,
        question: "👤 머리는 영어로 무엇일까요?",
        choices: ["Hand", "Head", "Eye", "Mouth"],
        answer: "Head",
        hints: [
          "머리를 만져 봐요!",
          "'헤드'라고 읽는 단어를 찾아봐요!",
        ],
        explanation: "머리는 영어로 'Head'예요! 👤 '헤드'라고 발음해요!",
        wrongAnalysis: "Head(머리)와 Hand(손)는 비슷하게 시작하지만 다른 뜻이에요.",
      },
      {
        id: "eng-pre6-2-2",
        type: "choice",
        difficulty: 1,
        question: "✋ 손은 영어로 무엇일까요?",
        choices: ["Mouth", "Eye", "Hand", "Head"],
        answer: "Hand",
        hints: [
          "손으로 물건을 잡을 수 있어요!",
          "'핸드'라고 읽는 단어를 찾아봐요!",
        ],
        explanation: "손은 영어로 'Hand'예요! ✋ 손을 흔들며 'Hand!'라고 말해 봐요!",
        wrongAnalysis: "Hand(손)와 Head(머리)를 잘 구별해요. Hand는 물건을 잡는 곳이에요.",
      },
      {
        id: "eng-pre6-2-3",
        type: "choice",
        difficulty: 1,
        question: "다음 중 'Eye'의 뜻은 무엇일까요? 👁️",
        choices: ["입", "머리", "손", "눈"],
        answer: "눈",
        hints: [
          "'Eye'는 '아이'라고 읽어요.",
          "무언가를 볼 때 쓰는 곳이에요!",
        ],
        explanation: "'Eye'는 눈이에요! 👁️ 예쁜 것을 볼 때 쓰는 곳이에요!",
        wrongAnalysis: "Eye(눈)는 보는 곳, Mouth(입)는 말하는 곳이에요.",
      },
      {
        id: "eng-pre6-2-4",
        type: "choice",
        difficulty: 2,
        question: "👄 맛있는 음식을 먹을 때 쓰는 곳은 영어로 무엇일까요?",
        choices: ["Eye", "Head", "Mouth", "Hand"],
        answer: "Mouth",
        hints: [
          "음식을 먹을 때 쓰는 곳은 입이에요!",
          "입은 영어로 '마우스'예요!",
        ],
        explanation: "입은 영어로 'Mouth'예요! 👄 '마우스'라고 발음해요!",
        wrongAnalysis: "Hand(손)로 음식을 잡고, Mouth(입)로 먹어요. 역할이 달라요!",
      },
      {
        id: "eng-pre6-2-5",
        type: "choice",
        difficulty: 2,
        question: "노래를 부를 때 쓰는 곳과 글씨를 쓸 때 쓰는 곳을 영어로 바르게 짝지은 것은?",
        choices: [
          "노래: Eye, 글씨: Head",
          "노래: Mouth, 글씨: Hand",
          "노래: Hand, 글씨: Mouth",
          "노래: Head, 글씨: Eye",
        ],
        answer: "노래: Mouth, 글씨: Hand",
        hints: [
          "노래를 부를 때는 입을 쓰고, 글씨를 쓸 때는 손을 써요.",
          "입은 Mouth, 손은 Hand예요!",
        ],
        explanation: "노래를 부를 때는 입(Mouth)을 쓰고, 글씨를 쓸 때는 손(Hand)을 써요!",
        wrongAnalysis: "각 신체 부위의 역할을 생각하면 쉽게 답할 수 있어요.",
      },
    ],
    summary: {
      keyPoints: [
        "머리는 Head, 손은 Hand, 눈은 Eye, 입은 Mouth예요.",
        "몸을 만지면서 영어로 말하면 더 잘 기억나요.",
        "Head와 Hand는 비슷하게 시작하지만 다른 뜻이에요.",
      ],
      formulas: [
        "👤 Head = 머리",
        "✋ Hand = 손",
        "👁️ Eye = 눈",
        "👄 Mouth = 입",
      ],
      commonMistakes: [
        "Head(머리)와 Hand(손)를 첫 글자가 같아서 헷갈릴 수 있어요.",
        "Eye(눈)의 발음 '아이'를 잘 기억해요.",
      ],
      nextConnection: "어깨(Shoulder), 무릎(Knee), 발(Foot) 등 더 많은 신체 부위를 배워 볼 거예요!",
    },
  },

  // ────────────────────────────────────────────
  // Lesson 3: 인사 - Hello, Goodbye, Thank you, Sorry
  // ────────────────────────────────────────────
  {
    id: 1006,
    title: "영어로 인사해요",
    category: "영어 6세",
    level: "입문",
    question: "안녕, 잘 가, 고마워, 미안해를 영어로 말할 수 있을까요?",
    concept: {
      intro:
        "영어로 인사하는 법을 배워 봐요!\n\n:::note[기억해요!]\n👋 Hello(안녕), 👋 Goodbye(잘 가), 🙏 Thank you(고마워), 😔 Sorry(미안해)\n:::\n\n친구를 만나면 'Hello!', 헤어질 때는 'Goodbye!'라고 말해요!",
      intuition:
        "아침에 친구를 만나면 '안녕!' 하죠? 영어로는 'Hello!'라고 해요. 헤어질 때는 'Goodbye!', 선물을 받으면 'Thank you!', 실수했을 때는 'Sorry!'라고 말해요.",
      formula:
        "👋 안녕 = Hello\n👋 잘 가 = Goodbye\n🙏 고마워 = Thank you\n😔 미안해 = Sorry",
      summary:
        ":::note[핵심 정리]\n네 가지 기본 인사: Hello(안녕), Goodbye(잘 가), Thank you(고마워), Sorry(미안해)를 기억해요!\n:::",
    },
    examples: [
      {
        title: "아침 인사",
        problem: "👋 아침에 친구를 만났어요. 영어로 뭐라고 인사할까요?",
        steps: [
          "친구를 만나면 '안녕!'이라고 하죠?",
          "'안녕'은 영어로 'Hello'예요!",
          "'헬로!'라고 밝게 인사해 봐요!",
        ],
        answer: "친구를 만나면 'Hello!'라고 인사해요!",
        lesson: "Hello는 가장 기본적인 영어 인사예요. 'Hi!'도 같은 뜻이에요!",
      },
      {
        title: "선물을 받았을 때",
        problem: "🎁 생일 선물을 받았어요! 영어로 뭐라고 말할까요?",
        steps: [
          "선물을 받으면 '고마워!'라고 하죠?",
          "'고마워'는 영어로 'Thank you'예요!",
          "'땡큐!'라고 말해 봐요!",
        ],
        answer: "선물을 받으면 'Thank you!'라고 말해요!",
        lesson: "Thank you는 고마운 마음을 표현하는 말이에요!",
      },
      {
        title: "집에 갈 때",
        problem: "🏠 놀이터에서 놀다가 집에 갈 시간이에요. 영어로 뭐라고 말할까요?",
        steps: [
          "헤어질 때는 '잘 가!'라고 하죠?",
          "'잘 가'는 영어로 'Goodbye'예요!",
          "'굿바이!'라고 손 흔들며 말해 봐요!",
        ],
        answer: "헤어질 때는 'Goodbye!'라고 말해요!",
        lesson: "Goodbye는 '굿바이'라고 읽어요. 'Bye!'라고 짧게 말해도 돼요!",
      },
    ],
    problems: [
      {
        id: "eng-pre6-3-1",
        type: "choice",
        difficulty: 1,
        question: "👋 친구를 만났을 때 영어로 뭐라고 인사할까요?",
        choices: ["Sorry", "Goodbye", "Hello", "Thank you"],
        answer: "Hello",
        hints: [
          "친구를 만나면 '안녕!'이라고 하죠?",
          "'헬로'라고 읽는 단어를 찾아봐요!",
        ],
        explanation: "친구를 만나면 'Hello!'라고 인사해요! 👋 '헬로!'",
        wrongAnalysis: "Hello(안녕)는 만날 때, Goodbye(잘 가)는 헤어질 때 써요.",
      },
      {
        id: "eng-pre6-3-2",
        type: "choice",
        difficulty: 1,
        question: "다음 중 'Goodbye'의 뜻은 무엇일까요? 👋",
        choices: ["안녕", "고마워", "잘 가", "미안해"],
        answer: "잘 가",
        hints: [
          "'Goodbye'는 헤어질 때 하는 인사예요.",
          "'굿바이'라고 읽어요!",
        ],
        explanation: "'Goodbye'는 '잘 가'라는 뜻이에요! 👋 헤어질 때 'Goodbye!'라고 해요!",
        wrongAnalysis: "Hello(안녕)와 Goodbye(잘 가)를 구별해요. 만날 때와 헤어질 때가 달라요!",
      },
      {
        id: "eng-pre6-3-3",
        type: "choice",
        difficulty: 1,
        question: "🙏 고마운 마음을 영어로 표현하면 무엇일까요?",
        choices: ["Hello", "Sorry", "Goodbye", "Thank you"],
        answer: "Thank you",
        hints: [
          "도움을 받으면 '고마워'라고 하죠?",
          "'땡큐'라고 읽는 단어를 찾아봐요!",
        ],
        explanation: "고마운 마음은 'Thank you'로 표현해요! 🙏 '땡큐!'",
        wrongAnalysis: "Thank you(고마워)와 Sorry(미안해)를 혼동하지 않도록 주의해요.",
      },
      {
        id: "eng-pre6-3-4",
        type: "choice",
        difficulty: 2,
        question: "😔 친구 장난감을 실수로 떨어뜨렸어요. 영어로 뭐라고 말할까요?",
        choices: ["Hello", "Thank you", "Goodbye", "Sorry"],
        answer: "Sorry",
        hints: [
          "실수했을 때는 '미안해'라고 하죠?",
          "'쏘리'라고 읽는 단어를 찾아봐요!",
        ],
        explanation: "실수했을 때는 'Sorry'라고 말해요! 😔 '쏘리'라고 발음해요!",
        wrongAnalysis: "Sorry(미안해)는 실수하거나 잘못했을 때 쓰는 말이에요.",
      },
      {
        id: "eng-pre6-3-5",
        type: "choice",
        difficulty: 2,
        question: "학교에 가서 선생님을 만나면 뭐라고 하고, 집에 갈 때는 뭐라고 할까요?",
        choices: [
          "만날 때: Sorry, 헤어질 때: Thank you",
          "만날 때: Goodbye, 헤어질 때: Hello",
          "만날 때: Hello, 헤어질 때: Goodbye",
          "만날 때: Thank you, 헤어질 때: Sorry",
        ],
        answer: "만날 때: Hello, 헤어질 때: Goodbye",
        hints: [
          "만날 때는 '안녕!' = Hello",
          "헤어질 때는 '잘 가!' = Goodbye",
        ],
        explanation: "만날 때는 'Hello!', 헤어질 때는 'Goodbye!'라고 해요! 👋",
        wrongAnalysis: "Hello와 Goodbye는 서로 반대 상황에서 쓰는 인사예요.",
      },
    ],
    summary: {
      keyPoints: [
        "만날 때 Hello, 헤어질 때 Goodbye라고 해요.",
        "고마울 때 Thank you, 미안할 때 Sorry라고 해요.",
        "Hi(안녕)와 Bye(잘 가)는 짧은 인사예요.",
      ],
      formulas: [
        "👋 Hello = 안녕 (만날 때)",
        "👋 Goodbye = 잘 가 (헤어질 때)",
        "🙏 Thank you = 고마워",
        "😔 Sorry = 미안해",
      ],
      commonMistakes: [
        "Hello(만날 때)와 Goodbye(헤어질 때)를 바꿔 쓰지 않도록 주의해요.",
        "Thank you(고마워)와 Sorry(미안해)는 다른 상황에서 써요.",
      ],
      nextConnection: "Please(부탁해요), Excuse me(실례합니다) 등 더 많은 예절 표현을 배워 볼 거예요!",
    },
  },

  // ────────────────────────────────────────────
  // Lesson 4: 고난도 종합 문제 (Difficulty 3)
  // ────────────────────────────────────────────
  {
    id: 1029,
    title: "헷갈리는 영어 표현 도전!",
    category: "영어 6세",
    level: "심화",
    question: "비슷한 영어 단어와 표현을 정확히 구별할 수 있을까요?",
    concept: {
      intro:
        "영어에는 비슷해 보이지만 뜻이 다른 단어들이 많아요!\n\n:::note[기억해요!]\n비슷한 단어를 잘 구별하면 영어 실력이 쑥쑥 올라가요!\n:::\n\n과일, 몸, 인사 표현에서 헷갈리기 쉬운 것들을 도전해 봐요!",
      intuition:
        "Apple과 Orange는 둘 다 과일이지만 모양과 색이 다르죠? 영어 단어도 비슷해 보이지만 뜻이 다른 것들이 있어요. 잘 구별하는 연습을 해 봐요!",
      formula:
        "비슷한 단어 구별하기:\nHand(손) vs Head(머리)\nHello(안녕) vs Goodbye(잘 가)\nApple(사과) vs Orange(오렌지)\nEye(눈) vs Ear(귀)",
      summary:
        ":::note[핵심 정리]\n비슷하게 시작하는 단어들을 잘 구별하고, 상황에 맞는 표현을 사용하는 것이 중요해요!\n:::",
    },
    examples: [
      {
        title: "Hand vs Head",
        problem: "Hand와 Head를 어떻게 구별할까요?",
        steps: [
          "Hand(핸드)는 손이에요. 물건을 잡을 때 써요.",
          "Head(헤드)는 머리예요. 모자를 쓰는 곳이에요.",
          "둘 다 H로 시작하지만 뜻이 달라요!",
        ],
        answer: "Hand는 손, Head는 머리예요!",
        lesson: "같은 글자로 시작하는 단어도 뜻이 다를 수 있어요!",
      },
      {
        title: "상황에 맞는 인사",
        problem: "친구가 넘어져서 아파해요. 뭐라고 할까요?",
        steps: [
          "아픈 친구에게 'Thank you'라고 하면 안 돼요!",
          "미안하거나 걱정될 때는 'Sorry'라고 해요.",
          "'Sorry'는 미안할 때뿐 아니라 걱정될 때도 써요.",
        ],
        answer: "'Sorry'라고 말해요!",
        lesson: "상황에 맞는 표현을 사용하는 것이 중요해요!",
      },
      {
        title: "Eye vs Ear",
        problem: "Eye와 Ear의 차이를 알아봐요!",
        steps: [
          "Eye(아이)는 눈이에요. 보는 데 써요.",
          "Ear(이어)는 귀예요. 듣는 데 써요.",
          "둘 다 E로 시작하고 비슷하지만 다른 신체 부위예요!",
        ],
        answer: "Eye는 눈(보는 것), Ear는 귀(듣는 것)!",
        lesson: "E로 시작하는 신체 부위: Eye(눈), Ear(귀)를 구별해요!",
      },
    ],
    problems: [
      {
        id: "eng-pre6-hard-1",
        type: "choice",
        difficulty: 3,
        question: "'Head'와 'Hand' 중 물건을 잡을 때 쓰는 것은?",
        choices: ["Head", "Hand", "Mouth", "Eye"],
        answer: "Hand",
        hints: [
          "물건을 잡는 곳은 머리일까요, 손일까요?",
          "Hand는 '핸드', Head는 '헤드'예요.",
        ],
        explanation: "물건을 잡을 때 쓰는 것은 Hand(손)예요! Head(머리)는 생각하는 곳이에요.",
        wrongAnalysis: "Head(머리)와 Hand(손)는 H로 시작해서 헷갈리지만 하는 일이 완전히 달라요.",
      },
      {
        id: "eng-pre6-hard-2",
        type: "choice",
        difficulty: 3,
        question: "친구가 선물을 줬어요. 'Sorry'라고 하면 맞을까요?",
        choices: [
          "맞아요, Sorry는 고마울 때 써요",
          "아니요, Thank you라고 해야 해요",
          "아니요, Goodbye라고 해야 해요",
          "맞아요, Sorry는 모든 상황에서 써요",
        ],
        answer: "아니요, Thank you라고 해야 해요",
        hints: [
          "선물을 받으면 고마운 마음이 들죠?",
          "고마울 때 하는 영어 표현은?",
        ],
        explanation: "선물을 받으면 고마운 마음을 표현해야 해요! 'Thank you'가 맞아요. Sorry는 미안할 때 써요.",
        wrongAnalysis: "Sorry(미안해)와 Thank you(고마워)는 다른 상황에서 써요. 고마울 때는 Thank you!",
      },
      {
        id: "eng-pre6-hard-3",
        type: "choice",
        difficulty: 3,
        question: "다음 중 과일이 아닌 것은 무엇일까요?",
        choices: ["Apple", "Grape", "Mouth", "Banana"],
        answer: "Mouth",
        hints: [
          "Apple(사과), Grape(포도), Banana(바나나)는 뭘까요?",
          "Mouth는 입이에요. 먹는 것이 아니라 먹는 곳이에요!",
        ],
        explanation: "Mouth(입)는 신체 부위이지 과일이 아니에요! Apple(사과), Grape(포도), Banana(바나나)가 과일이에요.",
        wrongAnalysis: "과일과 신체 부위를 구별해야 해요. Mouth는 입이에요.",
      },
      {
        id: "eng-pre6-hard-4",
        type: "choice",
        difficulty: 3,
        question: "'Eye'와 소리가 비슷한 영어 단어는 무엇일까요?",
        choices: ["Ear", "I (나)", "Eat", "Air"],
        answer: "I (나)",
        hints: [
          "Eye는 '아이'라고 읽어요.",
          "'나'를 영어로 하면 'I'인데, 어떻게 읽을까요?",
        ],
        explanation: "Eye(눈)와 I(나)는 둘 다 '아이'라고 읽어요! 소리는 같지만 뜻은 완전히 달라요.",
        wrongAnalysis: "Ear(이어)와 Eye(아이)는 비슷해 보이지만 소리가 달라요. I(아이)가 Eye와 같은 소리예요.",
      },
      {
        id: "eng-pre6-hard-5",
        type: "choice",
        difficulty: 3,
        question: "학교에서 집에 갈 때 선생님께 뭐라고 해야 할까요?",
        choices: ["Hello!", "Sorry!", "Thank you!", "Goodbye!"],
        answer: "Goodbye!",
        hints: [
          "집에 간다는 것은 선생님과 헤어진다는 뜻이에요.",
          "헤어질 때 하는 인사는?",
        ],
        explanation: "헤어질 때는 'Goodbye!'라고 해요. Hello는 만날 때, Sorry는 미안할 때, Thank you는 고마울 때 써요.",
        wrongAnalysis: "상황에 따라 다른 인사를 해야 해요. 만날 때 Hello, 헤어질 때 Goodbye!",
      },
      {
        id: "eng-pre6-hard-6",
        type: "choice",
        difficulty: 3,
        question: "Head(머리)와 Bread(빵)는 둘 다 'ead'로 끝나요. 앞에 붙는 글자/글자묶음으로 맞는 것은?",
        choices: ["H와 Br", "H와 H", "B와 R", "M와 B"],
        answer: "H와 Br",
        hints: [
          "머리는 Head, 빵은 Bread예요.",
          "Head는 H + ead, Bread는 Br + ead예요.",
        ],
        explanation: "H+ead = Head(머리), Br+ead = Bread(빵)! 같은 'ead'로 끝나지만 앞 글자에 따라 뜻이 달라요.",
        wrongAnalysis: "Head(머리)와 Bread(빵)는 'ead'가 같지만 앞 부분이 달라서 뜻이 다른 단어예요.",
      },
      {
        id: "eng-pre6-hard-7",
        type: "choice",
        difficulty: 3,
        question: "노래를 부를 때 쓰는 곳은 Mouth(입)예요. 그럼 음악을 들을 때 쓰는 곳은?",
        choices: ["Eye", "Hand", "Ear", "Head"],
        answer: "Ear",
        hints: [
          "음악은 소리예요. 소리를 듣는 곳은 어디일까요?",
          "Ear는 '이어'라고 읽어요. 귀라는 뜻이에요.",
        ],
        explanation: "음악을 들을 때 쓰는 곳은 Ear(귀)예요! Mouth(입)로 노래하고 Ear(귀)로 들어요.",
        wrongAnalysis: "Eye(눈)는 보는 곳, Hand(손)는 잡는 곳, Head(머리)는 생각하는 곳이에요. 듣는 곳은 Ear(귀)!",
      },
      {
        id: "eng-pre6-hard-8",
        type: "choice",
        difficulty: 3,
        question: "🍇 Grape의 첫 글자 'G'로 시작하는 색깔은 무엇일까요?",
        choices: ["Red", "Blue", "Green", "Yellow"],
        answer: "Green",
        hints: [
          "Grape와 같은 'G'로 시작하는 색깔을 찾아봐요.",
          "'G'로 시작하는 색깔... 초록색이에요!",
        ],
        explanation: "Grape(포도)와 Green(초록)은 모두 'G'로 시작해요! 다른 색깔들은 R, B, Y로 시작해요.",
        wrongAnalysis: "Red는 R, Blue는 B, Yellow는 Y로 시작해요. G로 시작하는 건 Green뿐이에요.",
      },
      {
        id: "eng-pre6-hard-9",
        type: "choice",
        difficulty: 3,
        question: "친구에게 실수로 부딪혔어요. 그리고 나서 친구가 괜찮다고 했어요. 어떤 순서로 말해야 할까요?",
        choices: [
          "Thank you → Sorry",
          "Sorry → Thank you",
          "Hello → Goodbye",
          "Goodbye → Hello",
        ],
        answer: "Sorry → Thank you",
        hints: [
          "먼저 부딪혀서 미안하다고 해야 해요.",
          "친구가 괜찮다고 하면 고맙다고 해요.",
        ],
        explanation: "먼저 'Sorry'(미안해)라고 한 다음, 친구가 괜찮다고 하면 'Thank you'(고마워)라고 해요!",
        wrongAnalysis: "상황의 순서가 중요해요. 실수 → Sorry(미안해) → 괜찮다는 대답 → Thank you(고마워)",
      },
      {
        id: "eng-pre6-hard-10",
        type: "choice",
        difficulty: 3,
        question: "다음 단어들의 공통점은 무엇일까요?\nApple, Banana, Grape, Orange",
        choices: [
          "모두 색깔 이름이에요",
          "모두 동물 이름이에요",
          "모두 과일 이름이에요",
          "모두 신체 부위 이름이에요",
        ],
        answer: "모두 과일 이름이에요",
        hints: [
          "Apple은 사과, Banana는 바나나, Grape는 포도, Orange는 오렌지...",
          "이것들은 모두 무엇일까요?",
        ],
        explanation: "Apple(사과), Banana(바나나), Grape(포도), Orange(오렌지)는 모두 과일 이름이에요!",
        wrongAnalysis: "Orange는 색깔 이름이기도 하지만, 여기서는 네 단어 모두의 공통점을 찾아야 해요. 모두 과일이에요!",
      },
    ],
    summary: {
      keyPoints: [
        "같은 글자로 시작하는 단어도 뜻이 다를 수 있어요 (Head vs Hand).",
        "상황에 맞는 표현을 사용해야 해요 (Sorry vs Thank you).",
        "비슷한 소리의 단어를 구별하는 연습이 중요해요 (Eye vs I).",
      ],
      formulas: [
        "Hand(손) ≠ Head(머리)",
        "Eye(눈) = I(나) 소리가 같아요",
        "Sorry(미안) → Thank you(고마워) 순서",
      ],
      commonMistakes: [
        "Hand와 Head를 헷갈리는 경우가 있어요.",
        "Sorry와 Thank you를 바꿔서 쓰는 실수가 있어요.",
      ],
      nextConnection: "더 많은 영어 단어와 상황별 표현을 배워 봐요!",
    },
  },
];
