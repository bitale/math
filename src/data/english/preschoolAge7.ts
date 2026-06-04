import { Lesson } from "../../types";

export const engPreschoolAge7Lessons: Lesson[] = [
  // ────────────────────────────────────────────
  // Lesson 1: 숫자 1-10 영어로 말하기
  // ────────────────────────────────────────────
  {
    id: 1007,
    title: "숫자를 영어로 말해요",
    category: "영어 7세",
    level: "기초",
    question: "숫자 1부터 10까지 영어로 말할 수 있을까요?",
    concept: {
      intro:
        "숫자를 영어로 말해 봐요!\n\n:::note[기억해요!]\n1 = One, 2 = Two, 3 = Three, 4 = Four, 5 = Five\n6 = Six, 7 = Seven, 8 = Eight, 9 = Nine, 10 = Ten\n:::\n\n손가락을 펴면서 영어로 숫자를 세어 봐요! ✋",
      intuition:
        "한국어로 '하나, 둘, 셋...'하고 세는 것처럼, 영어로는 'One, Two, Three...'라고 세요! 숫자를 영어로 세는 것은 아주 유용한 능력이에요.",
      formula:
        "1 = One (원)\n2 = Two (투)\n3 = Three (쓰리)\n4 = Four (포)\n5 = Five (파이브)\n6 = Six (식스)\n7 = Seven (세븐)\n8 = Eight (에잇)\n9 = Nine (나인)\n10 = Ten (텐)",
      summary:
        ":::note[핵심 정리]\n1부터 10까지 영어로: One, Two, Three, Four, Five, Six, Seven, Eight, Nine, Ten!\n:::",
    },
    examples: [
      {
        title: "손가락으로 세기",
        problem: "✋ 손가락을 3개 펴고 영어로 세어 볼까요?",
        steps: [
          "첫 번째 손가락을 펴며 'One!'",
          "두 번째 손가락을 펴며 'Two!'",
          "세 번째 손가락을 펴며 'Three!'",
        ],
        answer: "손가락 3개는 'Three'예요!",
        lesson: "손가락을 펴면서 세면 영어 숫자를 쉽게 배울 수 있어요!",
      },
      {
        title: "사과 세기",
        problem: "🍎🍎🍎🍎🍎 사과가 다섯 개 있어요. 영어로 뭐라고 할까요?",
        steps: [
          "사과를 하나씩 영어로 세어 봐요.",
          "One, Two, Three, Four, Five!",
          "다섯 개는 'Five'예요!",
        ],
        answer: "사과 다섯 개는 'Five apples'예요!",
        lesson: "Five는 한 손의 손가락 수와 같아요!",
      },
      {
        title: "열까지 세기",
        problem: "🌟 별을 10개까지 세어 볼까요?",
        steps: [
          "One, Two, Three, Four, Five...",
          "Six, Seven, Eight, Nine...",
          "Ten! 열 개를 모두 세었어요!",
        ],
        answer: "1부터 10까지: One, Two, Three, Four, Five, Six, Seven, Eight, Nine, Ten!",
        lesson: "Ten은 양손 손가락을 모두 편 수예요! ✋✋",
      },
    ],
    problems: [
      {
        id: "eng-pre7-1-1",
        type: "choice",
        difficulty: 1,
        question: "숫자 '1'은 영어로 무엇일까요? ☝️",
        choices: ["Two", "One", "Three", "Ten"],
        answer: "One",
        hints: [
          "손가락 하나를 펴 봐요!",
          "'원'이라고 읽는 단어를 찾아봐요!",
        ],
        explanation: "숫자 1은 영어로 'One'이에요! ☝️ '원'이라고 읽어요!",
        wrongAnalysis: "One(1)과 Two(2)를 헷갈리지 않도록 손가락으로 확인해요.",
      },
      {
        id: "eng-pre7-1-2",
        type: "choice",
        difficulty: 1,
        question: "다음 중 'Three'는 숫자 몇을 뜻할까요? 🤟",
        choices: ["2", "4", "3", "5"],
        answer: "3",
        hints: [
          "'Three'는 '쓰리'라고 읽어요.",
          "손가락 세 개를 펴 봐요!",
        ],
        explanation: "'Three'는 숫자 3이에요! 🤟 손가락 세 개!",
        wrongAnalysis: "Three(3)와 Four(4)를 헷갈리지 않도록 주의해요.",
      },
      {
        id: "eng-pre7-1-3",
        type: "choice",
        difficulty: 1,
        question: "✋ 한 손의 손가락 수 '5'는 영어로 무엇일까요?",
        choices: ["Four", "Six", "Five", "Three"],
        answer: "Five",
        hints: [
          "한 손의 손가락은 5개예요!",
          "'파이브'라고 읽는 단어를 찾아봐요!",
        ],
        explanation: "숫자 5는 영어로 'Five'예요! ✋ 한 손의 손가락 수!",
        wrongAnalysis: "Five(5)와 Four(4)는 비슷한 발음이지만 다른 숫자예요.",
      },
      {
        id: "eng-pre7-1-4",
        type: "choice",
        difficulty: 2,
        question: "One, Two, Three, ?, Five — 빈칸에 들어갈 영어 숫자는?",
        choices: ["Six", "Four", "Five", "Seven"],
        answer: "Four",
        hints: [
          "영어 숫자를 순서대로 세어 봐요: One, Two, Three, ...",
          "Three(3) 다음에 오는 숫자는?",
        ],
        explanation: "Three(3) 다음은 Four(4)예요! One, Two, Three, Four, Five!",
        wrongAnalysis: "영어 숫자도 한국어처럼 순서가 있어요. 순서대로 외우면 쉬워요.",
      },
      {
        id: "eng-pre7-1-5",
        type: "choice",
        difficulty: 2,
        question: "✋✋ 양손 손가락을 모두 펴면 몇 개일까요? 영어로 고르세요!",
        choices: ["Eight", "Nine", "Five", "Ten"],
        answer: "Ten",
        hints: [
          "한 손은 5개, 양손이면 5 + 5 = ?",
          "10은 영어로 '텐'이에요!",
        ],
        explanation: "양손 손가락은 모두 10개! 10은 영어로 'Ten'이에요! ✋✋",
        wrongAnalysis: "Five(5)는 한 손, Ten(10)은 양손이에요. 헷갈리지 마세요!",
      },
    ],
    summary: {
      keyPoints: [
        "1부터 10까지 영어: One, Two, Three, Four, Five, Six, Seven, Eight, Nine, Ten",
        "손가락을 하나씩 펴면서 세면 쉽게 외울 수 있어요.",
        "Five(5)는 한 손, Ten(10)은 양손의 손가락 수예요.",
      ],
      formulas: [
        "1 = One, 2 = Two, 3 = Three",
        "4 = Four, 5 = Five, 6 = Six",
        "7 = Seven, 8 = Eight, 9 = Nine, 10 = Ten",
      ],
      commonMistakes: [
        "Four(4)와 Five(5)의 발음이 비슷해서 헷갈릴 수 있어요.",
        "Eight(8)의 발음 '에잇'을 정확히 기억해요.",
      ],
      nextConnection: "11부터 20까지의 영어 숫자와 간단한 영어 덧셈을 배워 볼 거예요!",
    },
  },

  // ────────────────────────────────────────────
  // Lesson 2: 요일 - Days of the week
  // ────────────────────────────────────────────
  {
    id: 1008,
    title: "요일을 영어로 말해요",
    category: "영어 7세",
    level: "기초",
    question: "월요일부터 일요일까지 영어로 말할 수 있을까요?",
    concept: {
      intro:
        "일주일은 7일이에요! 영어로 요일 이름을 알아봐요.\n\n:::note[기억해요!]\n월요일 = Monday, 화요일 = Tuesday, 수요일 = Wednesday\n목요일 = Thursday, 금요일 = Friday\n토요일 = Saturday, 일요일 = Sunday\n:::\n\n영어 요일은 모두 'day'로 끝나요! 📅",
      intuition:
        "일주일은 7일이에요. 학교 가는 날(Monday~Friday)과 쉬는 날(Saturday, Sunday)이 있어요. 모든 영어 요일은 'day(날)'로 끝난다는 공통점이 있어요!",
      formula:
        "📅 월요일 = Monday (먼데이)\n📅 화요일 = Tuesday (튜즈데이)\n📅 수요일 = Wednesday (웬즈데이)\n📅 목요일 = Thursday (써즈데이)\n📅 금요일 = Friday (프라이데이)\n📅 토요일 = Saturday (새터데이)\n📅 일요일 = Sunday (선데이)",
      summary:
        ":::note[핵심 정리]\n일주일 7일의 영어 이름을 기억해요! 모두 '-day'로 끝나요!\nMonday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday\n:::",
    },
    examples: [
      {
        title: "한 주의 시작",
        problem: "📅 한 주의 시작, 월요일은 영어로 뭘까요?",
        steps: [
          "월요일은 학교에 가는 첫 번째 날이에요!",
          "월요일은 영어로 'Monday'예요!",
          "'먼데이'라고 읽어요.",
        ],
        answer: "월요일은 영어로 'Monday'예요!",
        lesson: "Monday는 'Mon(달 Moon)' + 'day(날)'에서 왔어요!",
      },
      {
        title: "신나는 금요일",
        problem: "🎉 내일부터 주말! 금요일은 영어로 뭘까요?",
        steps: [
          "금요일은 학교 가는 마지막 날이에요!",
          "금요일은 영어로 'Friday'예요!",
          "'프라이데이'라고 읽어요.",
        ],
        answer: "금요일은 영어로 'Friday'예요!",
        lesson: "Friday 다음에는 Saturday(토요일)가 와요!",
      },
      {
        title: "쉬는 날",
        problem: "☀️ 일요일에는 쉬어요! 일요일은 영어로 뭘까요?",
        steps: [
          "일요일은 가족과 함께 쉬는 날이에요!",
          "일요일은 영어로 'Sunday'예요!",
          "'선데이'라고 읽어요. Sun(태양)의 날이에요!",
        ],
        answer: "일요일은 영어로 'Sunday'예요!",
        lesson: "Sunday는 'Sun(해)' + 'day(날)' = 해의 날이에요! ☀️",
      },
    ],
    problems: [
      {
        id: "eng-pre7-2-1",
        type: "choice",
        difficulty: 1,
        question: "📅 월요일은 영어로 무엇일까요?",
        choices: ["Sunday", "Friday", "Monday", "Tuesday"],
        answer: "Monday",
        hints: [
          "월요일은 한 주의 시작이에요!",
          "'먼데이'라고 읽는 단어를 찾아봐요!",
        ],
        explanation: "월요일은 영어로 'Monday'예요! 📅 한 주의 첫날!",
        wrongAnalysis: "Monday(월)와 Sunday(일)를 헷갈리지 않도록 주의해요.",
      },
      {
        id: "eng-pre7-2-2",
        type: "choice",
        difficulty: 1,
        question: "☀️ 다음 중 'Sunday'의 뜻은 무엇일까요?",
        choices: ["월요일", "금요일", "토요일", "일요일"],
        answer: "일요일",
        hints: [
          "'Sunday'에는 'Sun(해)'이 들어가요!",
          "'선데이'라고 읽어요. 쉬는 날이에요!",
        ],
        explanation: "'Sunday'는 일요일이에요! ☀️ Sun(태양)의 날!",
        wrongAnalysis: "Saturday(토요일)와 Sunday(일요일)를 구별해요. 둘 다 주말이지만 달라요!",
      },
      {
        id: "eng-pre7-2-3",
        type: "choice",
        difficulty: 2,
        question: "🎉 학교 가는 마지막 날, 금요일은 영어로 무엇일까요?",
        choices: ["Thursday", "Saturday", "Wednesday", "Friday"],
        answer: "Friday",
        hints: [
          "금요일 다음은 토요일, 주말이 시작돼요!",
          "'프라이데이'라고 읽는 단어를 찾아봐요!",
        ],
        explanation: "금요일은 영어로 'Friday'예요! 🎉 내일부터 주말!",
        wrongAnalysis: "Thursday(목요일)와 Friday(금요일)를 순서로 구별해요.",
      },
      {
        id: "eng-pre7-2-4",
        type: "choice",
        difficulty: 2,
        question: "Monday, Tuesday, ?, Thursday — 빈칸에 들어갈 요일은?",
        choices: ["Friday", "Wednesday", "Sunday", "Saturday"],
        answer: "Wednesday",
        hints: [
          "영어 요일을 순서대로 말해 봐요: Monday, Tuesday, ...",
          "화요일(Tuesday) 다음에 오는 요일은?",
        ],
        explanation: "Tuesday(화) 다음은 Wednesday(수)예요! '웬즈데이'라고 읽어요!",
        wrongAnalysis: "요일 순서를 외우면 빈칸을 쉽게 채울 수 있어요.",
      },
      {
        id: "eng-pre7-2-5",
        type: "choice",
        difficulty: 3,
        question: "영어 요일은 모두 어떤 단어로 끝날까요?",
        choices: ["night", "time", "day", "week"],
        answer: "day",
        hints: [
          "Monday, Tuesday, Wednesday... 끝부분을 잘 봐요!",
          "모두 같은 세 글자로 끝나요!",
        ],
        explanation: "영어 요일은 모두 'day(날)'로 끝나요! Mon-day, Tues-day, Wednes-day... 📅",
        wrongAnalysis: "'day'는 '날'이라는 뜻이에요. 모든 요일 이름에 들어 있어요!",
      },
    ],
    summary: {
      keyPoints: [
        "일주일 7일: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday",
        "모든 영어 요일은 'day(날)'로 끝나요.",
        "Monday~Friday는 학교 가는 날, Saturday~Sunday는 주말이에요.",
      ],
      formulas: [
        "월 = Monday, 화 = Tuesday, 수 = Wednesday",
        "목 = Thursday, 금 = Friday",
        "토 = Saturday, 일 = Sunday",
      ],
      commonMistakes: [
        "Wednesday의 발음이 어려워요. '웬즈데이'라고 기억해요.",
        "Tuesday(화)와 Thursday(목)가 비슷하게 시작해서 헷갈릴 수 있어요.",
      ],
      nextConnection: "달(January~December)의 영어 이름과 날짜 읽는 법을 배워 볼 거예요!",
    },
  },

  // ────────────────────────────────────────────
  // Lesson 3: 반대말 - big/small, hot/cold
  // ────────────────────────────────────────────
  {
    id: 1009,
    title: "반대말을 영어로 말해요",
    category: "영어 7세",
    level: "기초",
    question: "크다/작다, 뜨겁다/차갑다 등 반대말을 영어로 말할 수 있을까요?",
    concept: {
      intro:
        "영어에도 반대말이 있어요!\n\n:::note[기억해요!]\n🐘 Big(크다) ↔ 🐭 Small(작다)\n🔥 Hot(뜨겁다) ↔ ❄️ Cold(차갑다)\n⬆️ Up(위) ↔ ⬇️ Down(아래)\n😊 Happy(행복한) ↔ 😢 Sad(슬픈)\n:::\n\n반대말을 짝으로 외우면 두 배로 빠르게 배울 수 있어요!",
      intuition:
        "코끼리는 크니까 Big, 생쥐는 작으니까 Small이에요! 여름의 태양은 Hot, 겨울의 눈은 Cold! 반대말을 짝으로 기억하면 한 번에 두 단어를 배울 수 있어요.",
      formula:
        "🐘 크다 = Big ↔ 🐭 작다 = Small\n🔥 뜨겁다 = Hot ↔ ❄️ 차갑다 = Cold\n⬆️ 위 = Up ↔ ⬇️ 아래 = Down\n😊 행복한 = Happy ↔ 😢 슬픈 = Sad",
      summary:
        ":::note[핵심 정리]\n반대말 짝: Big↔Small, Hot↔Cold, Up↔Down, Happy↔Sad를 기억해요!\n:::",
    },
    examples: [
      {
        title: "코끼리와 생쥐",
        problem: "🐘🐭 코끼리는 크고 생쥐는 작아요. 영어로 말해 볼까요?",
        steps: [
          "코끼리는 아주 커요! 크다는 영어로 'Big'이에요.",
          "생쥐는 아주 작아요! 작다는 영어로 'Small'이에요.",
          "Big ↔ Small, 서로 반대말이에요!",
        ],
        answer: "코끼리는 Big, 생쥐는 Small이에요!",
        lesson: "Big과 Small은 크기를 나타내는 반대말이에요!",
      },
      {
        title: "뜨거운 것과 차가운 것",
        problem: "🔥❄️ 뜨거운 수프와 차가운 아이스크림! 영어로 말해 볼까요?",
        steps: [
          "수프는 뜨거워요! 뜨겁다는 영어로 'Hot'이에요.",
          "아이스크림은 차가워요! 차갑다는 영어로 'Cold'예요.",
          "Hot ↔ Cold, 서로 반대말이에요!",
        ],
        answer: "뜨거운 것은 Hot, 차가운 것은 Cold예요!",
        lesson: "Hot과 Cold는 온도를 나타내는 반대말이에요!",
      },
      {
        title: "위와 아래",
        problem: "⬆️⬇️ 하늘은 위에, 땅은 아래에 있어요. 영어로 말해 볼까요?",
        steps: [
          "하늘은 위에 있어요! 위는 영어로 'Up'이에요.",
          "땅은 아래에 있어요! 아래는 영어로 'Down'이에요.",
          "Up ↔ Down, 서로 반대말이에요!",
        ],
        answer: "위는 Up, 아래는 Down이에요!",
        lesson: "Up과 Down은 방향을 나타내는 반대말이에요!",
      },
    ],
    problems: [
      {
        id: "eng-pre7-3-1",
        type: "choice",
        difficulty: 1,
        question: "🐘 코끼리는 아주 커요! '크다'는 영어로 무엇일까요?",
        choices: ["Small", "Cold", "Big", "Hot"],
        answer: "Big",
        hints: [
          "코끼리처럼 큰 것을 영어로 뭐라고 할까요?",
          "'빅'이라고 읽는 단어를 찾아봐요!",
        ],
        explanation: "'크다'는 영어로 'Big'이에요! 🐘 코끼리는 Big!",
        wrongAnalysis: "Big(크다)과 Small(작다)은 반대말이에요. 크기를 잘 생각해 봐요.",
      },
      {
        id: "eng-pre7-3-2",
        type: "choice",
        difficulty: 1,
        question: "❄️ 겨울에 눈이 오면 아주 추워요! '차갑다'는 영어로 무엇일까요?",
        choices: ["Hot", "Big", "Small", "Cold"],
        answer: "Cold",
        hints: [
          "눈이 오면 차갑죠? 차갑다는 영어로?",
          "'콜드'라고 읽는 단어를 찾아봐요!",
        ],
        explanation: "'차갑다'는 영어로 'Cold'예요! ❄️ 겨울은 Cold!",
        wrongAnalysis: "Hot(뜨겁다)과 Cold(차갑다)는 반대말이에요.",
      },
      {
        id: "eng-pre7-3-3",
        type: "choice",
        difficulty: 1,
        question: "다음 중 'Small'의 뜻은 무엇일까요? 🐭",
        choices: ["크다", "뜨겁다", "작다", "차갑다"],
        answer: "작다",
        hints: [
          "'Small'은 생쥐처럼 작은 것을 말해요.",
          "'스몰'이라고 읽어요!",
        ],
        explanation: "'Small'은 '작다'라는 뜻이에요! 🐭 생쥐는 Small!",
        wrongAnalysis: "Small(작다)의 반대말은 Big(크다)예요.",
      },
      {
        id: "eng-pre7-3-4",
        type: "choice",
        difficulty: 2,
        question: "'Big'의 반대말은 무엇일까요?",
        choices: ["Hot", "Cold", "Small", "Happy"],
        answer: "Small",
        hints: [
          "Big은 '크다'라는 뜻이에요.",
          "'크다'의 반대는 '작다'예요. '작다'는 영어로?",
        ],
        explanation: "Big(크다)의 반대말은 Small(작다)예요! 🐘↔🐭",
        wrongAnalysis: "반대말을 짝으로 기억해요: Big↔Small, Hot↔Cold",
      },
      {
        id: "eng-pre7-3-5",
        type: "choice",
        difficulty: 2,
        question: "😊 웃고 있는 아이는 행복해요! 😢 울고 있는 아이는 슬퍼요! '행복한'과 '슬픈'을 영어로 바르게 짝지은 것은?",
        choices: [
          "행복한: Sad, 슬픈: Happy",
          "행복한: Hot, 슬픈: Cold",
          "행복한: Big, 슬픈: Small",
          "행복한: Happy, 슬픈: Sad",
        ],
        answer: "행복한: Happy, 슬픈: Sad",
        hints: [
          "행복한 = Happy(해피), 슬픈 = Sad(새드)",
          "😊 = Happy, 😢 = Sad",
        ],
        explanation: "행복한은 'Happy', 슬픈은 'Sad'예요! 😊↔😢 서로 반대말!",
        wrongAnalysis: "Happy(행복한)와 Sad(슬픈)는 감정을 나타내는 반대말이에요.",
      },
    ],
    summary: {
      keyPoints: [
        "반대말을 짝으로 외우면 한 번에 두 단어를 배울 수 있어요.",
        "Big↔Small(크다↔작다), Hot↔Cold(뜨겁다↔차갑다)는 기본 반대말이에요.",
        "Up↔Down(위↔아래), Happy↔Sad(행복한↔슬픈)도 알아 두세요.",
      ],
      formulas: [
        "🐘 Big ↔ 🐭 Small (크다 ↔ 작다)",
        "🔥 Hot ↔ ❄️ Cold (뜨겁다 ↔ 차갑다)",
        "⬆️ Up ↔ ⬇️ Down (위 ↔ 아래)",
        "😊 Happy ↔ 😢 Sad (행복한 ↔ 슬픈)",
      ],
      commonMistakes: [
        "Big과 Small의 뜻을 바꿔서 기억하는 경우가 있어요.",
        "Hot(뜨겁다)과 Cold(차갑다)를 반대로 말하지 않도록 주의해요.",
      ],
      nextConnection: "Fast(빠르다)↔Slow(느리다), Long(길다)↔Short(짧다) 등 더 많은 반대말을 배워 볼 거예요!",
    },
  },

  // ────────────────────────────────────────────
  // Lesson 4: 고난도 종합 문제 (Difficulty 3)
  // ────────────────────────────────────────────
  {
    id: 1030,
    title: "어려운 영어 퀴즈에 도전!",
    category: "영어 7세",
    level: "심화",
    question: "숫자, 요일, 반대말을 종합적으로 활용할 수 있을까요?",
    concept: {
      intro:
        "지금까지 배운 숫자, 요일, 반대말을 모두 활용하는 어려운 문제에 도전해 봐요!\n\n:::note[기억해요!]\n여러 가지를 한꺼번에 생각하면 영어 실력이 쑥쑥 올라가요!\n:::\n\n잘 생각하고 꼼꼼히 풀어 봐요!",
      intuition:
        "숫자(One~Ten), 요일(Monday~Sunday), 반대말(Big↔Small, Hot↔Cold)을 모두 기억하고 있나요? 이것들을 함께 사용하는 연습을 하면 영어가 더 자연스러워져요!",
      formula:
        "종합 연습:\n숫자 + 단어: Two cats, Five dogs\n요일 특징: 모두 -day로 끝남\n반대말 짝: Big↔Small, Hot↔Cold, Up↔Down, Happy↔Sad",
      summary:
        ":::note[핵심 정리]\n숫자, 요일, 반대말을 종합적으로 활용할 수 있으면 영어 기초가 탄탄해져요!\n:::",
    },
    examples: [
      {
        title: "숫자와 단어 합치기",
        problem: "'고양이 세 마리'를 영어로 말해 봐요.",
        steps: [
          "고양이는 cat이에요.",
          "세 마리이니까 cats(여러 마리)라고 해요.",
          "3은 three예요.",
          "합치면 'three cats'!",
        ],
        answer: "고양이 세 마리는 'three cats'예요!",
        lesson: "영어에서는 숫자가 앞에 오고, 물건 이름이 뒤에 와요!",
      },
      {
        title: "요일 규칙 찾기",
        problem: "영어 요일의 공통점은 무엇일까요?",
        steps: [
          "Monday, Tuesday, Wednesday...",
          "Thursday, Friday, Saturday, Sunday",
          "모두 'day'로 끝나요!",
        ],
        answer: "영어 요일은 모두 'day'(날)로 끝나요!",
        lesson: "규칙을 찾으면 외우기 쉬워요!",
      },
      {
        title: "반대말 응용",
        problem: "'not big'은 무슨 뜻일까요?",
        steps: [
          "big은 '크다'예요.",
          "'not'은 '아니다'예요.",
          "크지 않다 = 작다 = small!",
        ],
        answer: "'not big'은 small(작다)이에요!",
        lesson: "'not + 단어'는 그 단어의 반대 뜻이에요!",
      },
    ],
    problems: [
      {
        id: "eng-pre7-hard-1",
        type: "choice",
        difficulty: 3,
        question: "일주일은 며칠일까요? 영어 숫자로 고르세요!",
        choices: ["Five", "Six", "Seven", "Ten"],
        answer: "Seven",
        hints: [
          "요일을 세어 봐요: Monday, Tuesday, Wednesday...",
          "7은 영어로 뭘까요?",
        ],
        explanation: "일주일은 7일이에요! 7은 영어로 Seven이에요. Monday부터 Sunday까지 세면 7일!",
        wrongAnalysis: "학교 가는 날(5일)과 일주일(7일)을 헷갈리면 안 돼요. 주말(토, 일)도 포함해요!",
      },
      {
        id: "eng-pre7-hard-2",
        type: "choice",
        difficulty: 3,
        question: "'Cold'의 반대말은 무엇일까요?",
        choices: ["Big", "Small", "Hot", "Sad"],
        answer: "Hot",
        hints: [
          "Cold는 '차갑다'라는 뜻이에요.",
          "차갑다의 반대는?",
        ],
        explanation: "Cold(차갑다)의 반대말은 Hot(뜨겁다)예요! 온도의 반대말이에요.",
        wrongAnalysis: "Big↔Small은 크기, Hot↔Cold는 온도, Happy↔Sad는 감정의 반대말이에요. 종류별로 기억해요!",
      },
      {
        id: "eng-pre7-hard-3",
        type: "choice",
        difficulty: 3,
        question: "Tuesday와 Thursday 사이에 있는 요일은?",
        choices: ["Monday", "Wednesday", "Friday", "Saturday"],
        answer: "Wednesday",
        hints: [
          "요일을 순서대로 말해 봐요: Monday, Tuesday, ..., Thursday",
          "Tuesday 다음에 오는 요일은?",
        ],
        explanation: "Tuesday(화) 다음은 Wednesday(수), 그다음이 Thursday(목)예요! 사이에 있는 건 Wednesday!",
        wrongAnalysis: "Tuesday(화)와 Thursday(목)를 첫 글자가 비슷해서 헷갈릴 수 있어요. 순서를 정확히 기억해요.",
      },
      {
        id: "eng-pre7-hard-4",
        type: "choice",
        difficulty: 3,
        question: "손가락 8개를 영어로 하면?",
        choices: ["Six fingers", "Seven fingers", "Eight fingers", "Nine fingers"],
        answer: "Eight fingers",
        hints: [
          "8은 영어로 무엇일까요?",
          "'에잇'이라고 읽는 숫자를 찾아봐요.",
        ],
        explanation: "8은 Eight이에요! 그래서 손가락 8개는 'Eight fingers'예요.",
        wrongAnalysis: "Seven(7)과 Eight(8)을 헷갈리지 마세요. Eight은 '에잇'이라고 읽어요.",
      },
      {
        id: "eng-pre7-hard-5",
        type: "choice",
        difficulty: 3,
        question: "다음 중 요일이 아닌 것은?",
        choices: ["Monday", "Funday", "Sunday", "Friday"],
        answer: "Funday",
        hints: [
          "영어 요일 7개를 떠올려 봐요.",
          "'Funday'라는 요일이 있나요? Fun은 '재미'라는 뜻이에요.",
        ],
        explanation: "Funday는 진짜 요일이 아니에요! Fun(재미) + day로 만든 가짜 요일이에요. 진짜 요일은 Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday예요.",
        wrongAnalysis: "Sunday(일요일)와 Funday를 헷갈리면 안 돼요. 영어 요일 7개를 정확히 외워야 해요!",
      },
      {
        id: "eng-pre7-hard-6",
        type: "choice",
        difficulty: 3,
        question: "'not happy'와 같은 뜻의 영어 단어는?",
        choices: ["Big", "Hot", "Sad", "Cold"],
        answer: "Sad",
        hints: [
          "Happy는 행복한이에요. Not happy는 행복하지 않다는 뜻이에요.",
          "행복하지 않다 = 슬프다. 슬프다는 영어로?",
        ],
        explanation: "'not happy'(행복하지 않은)은 Sad(슬픈)과 같은 뜻이에요! Happy↔Sad는 반대말이에요.",
        wrongAnalysis: "not은 '아니다'라는 뜻이에요. not happy = 행복하지 않은 = sad(슬픈)!",
      },
      {
        id: "eng-pre7-hard-7",
        type: "choice",
        difficulty: 3,
        question: "Three + Four는 영어로 몇일까요?",
        choices: ["Six", "Seven", "Eight", "Five"],
        answer: "Seven",
        hints: [
          "Three는 3, Four는 4예요.",
          "3 + 4 = ? 그 숫자를 영어로!",
        ],
        explanation: "Three(3) + Four(4) = Seven(7)이에요! 영어 숫자로 더하기를 할 수 있어요.",
        wrongAnalysis: "3 + 4 = 7이에요. Six(6)이나 Eight(8)과 헷갈리지 마세요!",
      },
      {
        id: "eng-pre7-hard-8",
        type: "choice",
        difficulty: 3,
        question: "주말(쉬는 날)에 해당하는 영어 요일을 모두 포함하는 것은?",
        choices: [
          "Monday, Tuesday",
          "Friday, Saturday",
          "Saturday, Sunday",
          "Sunday, Monday",
        ],
        answer: "Saturday, Sunday",
        hints: [
          "주말은 학교에 가지 않는 날이에요.",
          "토요일과 일요일이 주말이에요!",
        ],
        explanation: "주말은 Saturday(토요일)와 Sunday(일요일)예요! Monday~Friday는 학교 가는 날(평일)이에요.",
        wrongAnalysis: "Friday(금요일)는 학교 가는 날이에요. 주말은 Saturday와 Sunday만이에요!",
      },
      {
        id: "eng-pre7-hard-9",
        type: "choice",
        difficulty: 3,
        question: "코끼리는 Big, 얼음은 Cold. 그럼 토끼는 영어로 뭐라고 표현할 수 있을까요?",
        choices: ["Big and Hot", "Small and Fast", "Big and Slow", "Small and Cold"],
        answer: "Small and Fast",
        hints: [
          "토끼는 크기가 어때요? 코끼리보다 작죠?",
          "토끼는 빠르게 뛸 수 있어요!",
        ],
        explanation: "토끼는 작고(Small) 빠른(Fast) 동물이에요! Big(큰)은 코끼리, Slow(느린)는 거북이가 더 어울려요.",
        wrongAnalysis: "동물의 특징을 생각해 봐요. 토끼는 작고 빠르니까 Small and Fast가 맞아요!",
      },
      {
        id: "eng-pre7-hard-10",
        type: "choice",
        difficulty: 3,
        question: "다음 중 반대말 짝이 잘못된 것은?",
        choices: [
          "Big ↔ Small",
          "Hot ↔ Cold",
          "Up ↔ Down",
          "Happy ↔ Big",
        ],
        answer: "Happy ↔ Big",
        hints: [
          "반대말은 같은 종류에서 반대되는 뜻이에요.",
          "Happy(행복한)의 진짜 반대말은 뭘까요?",
        ],
        explanation: "Happy(행복한)의 반대말은 Sad(슬픈)이지 Big(큰)이 아니에요! Happy와 Big은 반대말 관계가 아니에요.",
        wrongAnalysis: "Big↔Small(크기), Hot↔Cold(온도), Up↔Down(방향), Happy↔Sad(감정)처럼 같은 종류끼리 반대예요.",
      },
    ],
    summary: {
      keyPoints: [
        "일주일은 Seven(7)일이에요.",
        "영어 숫자로 간단한 덧셈도 할 수 있어요.",
        "반대말은 같은 종류끼리 짝을 이뤄요 (크기, 온도, 감정 등).",
      ],
      formulas: [
        "일주일 = Seven days",
        "주말 = Saturday + Sunday",
        "not + 단어 = 그 단어의 반대",
      ],
      commonMistakes: [
        "Tuesday와 Thursday를 첫 글자가 비슷해서 헷갈릴 수 있어요.",
        "Seven(7)과 Six(6)을 바꿔 쓰지 않도록 주의해요.",
      ],
      nextConnection: "이제 더 어려운 영어 문장과 표현을 배울 준비가 되었어요!",
    },
  },
];
