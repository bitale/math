import { Lesson } from "../../types";

export const engGrade1Lessons: Lesson[] = [
{
  id: 1010,
  title: "가족을 영어로 말해요",
  category: "영어 1학년",
  level: "기초",
  question: "가족을 영어로 어떻게 말할 수 있을까요?",
  concept: {
    intro: "우리 가족을 영어로 불러 봐요!\n\n가족은 우리에게 가장 소중한 사람들이에요. 영어로 가족을 부르는 말을 배워 볼 거예요.\n\n:::note[기억해요!]\n- mom (맘) = 엄마\n- dad (대드) = 아빠\n- brother (브라더) = 남자 형제\n- sister (시스터) = 여자 형제\n- baby (베이비) = 아기\n:::\n\n가족 이름을 영어로 말할 수 있으면, 영어 동화책을 읽을 때 누가 나오는지 바로 알 수 있어요!",
    intuition: "우리 집에 누가 살고 있나요? 엄마는 'mom', 아빠는 'dad'이에요. 영어 나라 친구들도 엄마, 아빠를 부를 때 이 말을 써요. 오빠나 형은 'brother', 언니나 누나는 'sister'라고 해요. 갓 태어난 아기는 'baby'라고 불러요!",
    formula: "mom = 엄마\ndad = 아빠\nbrother = 남자 형제 (형, 오빠, 남동생)\nsister = 여자 형제 (언니, 누나, 여동생)\nbaby = 아기",
    summary: ":::note[핵심 정리]\n가족을 영어로 말할 수 있어요! mom(엄마), dad(아빠), brother(남자 형제), sister(여자 형제), baby(아기)를 기억해요.\n:::"
  },
  examples: [
    {
      title: "그림 보고 영어로 말하기",
      problem: "가족 사진을 보고 영어로 말해 봐요. 엄마는 영어로 뭘까요?",
      steps: [
        "엄마를 영어로 'mom'이라고 해요.",
        "'mom'은 '맘'이라고 읽어요.",
        "\"This is my mom.\" (이것은 나의 엄마예요.)"
      ],
      answer: "엄마는 영어로 'mom'이에요.",
      lesson: "가족 사진을 보면서 영어 이름을 말해 보면 쉽게 외울 수 있어요!"
    },
    {
      title: "가족 소개하기",
      problem: "아빠를 영어로 소개해 봐요.",
      steps: [
        "아빠는 영어로 'dad'이에요.",
        "'dad'은 '대드'라고 읽어요.",
        "\"This is my dad.\" (이것은 나의 아빠예요.)"
      ],
      answer: "아빠는 영어로 'dad'이에요.",
      lesson: "'This is my ___.'를 사용하면 가족을 소개할 수 있어요!"
    },
    {
      title: "남자 형제와 여자 형제",
      problem: "오빠와 언니를 영어로 말해 봐요.",
      steps: [
        "오빠나 형은 남자 형제이므로 'brother'예요.",
        "언니나 누나는 여자 형제이므로 'sister'예요.",
        "'brother'는 '브라더', 'sister'는 '시스터'라고 읽어요."
      ],
      answer: "오빠/형은 'brother', 언니/누나는 'sister'예요.",
      lesson: "남자 형제는 모두 brother, 여자 형제는 모두 sister라고 해요!"
    }
  ],
  problems: [
    {
      id: "eng-el1-1-1",
      type: "choice",
      difficulty: 1,
      question: "'mom'의 뜻은 무엇일까요?",
      choices: ["엄마", "아빠", "언니", "아기"],
      answer: "엄마",
      hints: [
        "'mom'은 '맘'이라고 읽어요.",
        "우리를 낳아 주신 분이에요."
      ],
      explanation: "'mom'은 '엄마'라는 뜻이에요. 영어 나라에서도 엄마를 'mom'이라고 불러요!",
      wrongAnalysis: "'dad'(아빠)과 헷갈리지 않도록 해요. 'mom'은 엄마, 'dad'은 아빠예요."
    },
    {
      id: "eng-el1-1-2",
      type: "choice",
      difficulty: 1,
      question: "아빠를 영어로 뭐라고 할까요?",
      choices: ["dad", "mom", "baby", "sister"],
      answer: "dad",
      hints: [
        "아빠는 남자예요.",
        "'대드'라고 읽는 말이에요."
      ],
      explanation: "아빠는 영어로 'dad'이에요. '대드'라고 읽어요!",
      wrongAnalysis: "'mom'은 엄마예요. 아빠는 'dad'이라는 것을 기억해요."
    },
    {
      id: "eng-el1-1-3",
      type: "choice",
      difficulty: 2,
      question: "남자 형제를 영어로 뭐라고 할까요?",
      choices: ["brother", "sister", "baby", "mom"],
      answer: "brother",
      hints: [
        "형, 오빠, 남동생을 모두 이 말로 불러요.",
        "'브라더'라고 읽어요."
      ],
      explanation: "남자 형제(형, 오빠, 남동생)는 모두 영어로 'brother'예요!",
      wrongAnalysis: "'sister'는 여자 형제(언니, 누나, 여동생)예요. 남자 형제는 'brother'예요."
    },
    {
      id: "eng-el1-1-4",
      type: "choice",
      difficulty: 2,
      question: "'sister'의 뜻으로 알맞은 것은?",
      choices: ["여자 형제", "남자 형제", "엄마", "아기"],
      answer: "여자 형제",
      hints: [
        "'시스터'라고 읽어요.",
        "언니, 누나, 여동생을 모두 이 말로 불러요."
      ],
      explanation: "'sister'는 여자 형제라는 뜻이에요. 언니, 누나, 여동생 모두 'sister'예요!",
      wrongAnalysis: "'brother'와 헷갈리지 마세요. 'brother'는 남자 형제, 'sister'는 여자 형제예요."
    },
    {
      id: "eng-el1-1-5",
      type: "choice",
      difficulty: 3,
      question: "빈칸에 알맞은 말은? \"This is my ___. She is very small.\" (이것은 나의 ___예요. 그녀는 아주 작아요.)",
      choices: ["baby", "dad", "brother", "mom"],
      answer: "baby",
      hints: [
        "아주 작다고 했어요. 가족 중에 가장 작은 사람은 누구일까요?",
        "갓 태어난 아이를 영어로 뭐라고 할까요?"
      ],
      explanation: "아주 작은 가족이니까 'baby'(아기)가 알맞아요! 'baby'는 '베이비'라고 읽어요.",
      wrongAnalysis: "문장에서 'very small'(아주 작다)이라는 단서를 잘 봐야 해요. 아기가 가장 작으니까 'baby'가 정답이에요."
    }
  ],
  summary: {
    keyPoints: [
      "mom은 엄마, dad은 아빠예요.",
      "brother는 남자 형제, sister는 여자 형제예요.",
      "baby는 아기라는 뜻이에요."
    ],
    formulas: [
      "mom = 엄마",
      "dad = 아빠",
      "brother = 남자 형제",
      "sister = 여자 형제",
      "baby = 아기"
    ],
    commonMistakes: [
      "mom과 dad을 헷갈리는 경우가 있어요.",
      "brother(남자 형제)와 sister(여자 형제)를 바꿔서 쓰지 않도록 해요."
    ],
    nextConnection: "가족 이름을 배웠으니, 다음에는 학교에서 쓰는 물건을 영어로 배워 봐요!"
  }
},
{
  id: 1011,
  title: "학교 물건을 영어로 말해요",
  category: "영어 1학년",
  level: "기초",
  question: "학교에서 쓰는 물건을 영어로 어떻게 말할까요?",
  concept: {
    intro: "학교에서 매일 쓰는 물건들을 영어로 배워 봐요!\n\n책상 위에 있는 물건들, 가방 속에 있는 물건들을 영어로 말할 수 있으면 정말 멋져요.\n\n:::note[기억해요!]\n- book (북) = 책\n- pencil (펜슬) = 연필\n- desk (데스크) = 책상\n- bag (백) = 가방\n:::\n\n매일 학교에서 이 물건들을 보면서 영어 이름을 떠올려 보세요!",
    intuition: "학교에 가면 무엇이 필요할까요? 먼저 'bag'(가방)을 메고 가요. 교실에 가면 'desk'(책상)에 앉아요. 가방에서 'book'(책)을 꺼내고, 'pencil'(연필)로 글씨를 써요. 이렇게 매일 보는 물건이니까 금방 외울 수 있어요!",
    formula: "book = 책\npencil = 연필\ndesk = 책상\nbag = 가방",
    summary: ":::note[핵심 정리]\n학교 물건을 영어로 말할 수 있어요! book(책), pencil(연필), desk(책상), bag(가방)을 기억해요.\n:::"
  },
  examples: [
    {
      title: "책상 위에 무엇이 있나요?",
      problem: "책상 위에 책이 있어요. '책'을 영어로 말해 봐요.",
      steps: [
        "책을 영어로 'book'이라고 해요.",
        "'book'은 '북'이라고 읽어요.",
        "\"This is a book.\" (이것은 책이에요.)"
      ],
      answer: "책은 영어로 'book'이에요.",
      lesson: "책을 볼 때마다 'book'이라고 말해 보면 잘 외워져요!"
    },
    {
      title: "필통 속에 무엇이 있나요?",
      problem: "필통에서 연필을 꺼냈어요. '연필'을 영어로 말해 봐요.",
      steps: [
        "연필을 영어로 'pencil'이라고 해요.",
        "'pencil'은 '펜슬'이라고 읽어요.",
        "\"I have a pencil.\" (나는 연필이 있어요.)"
      ],
      answer: "연필은 영어로 'pencil'이에요.",
      lesson: "연필로 글씨를 쓸 때 'pencil'을 떠올려 봐요!"
    },
    {
      title: "가방에 무엇을 넣나요?",
      problem: "가방에 책을 넣어요. '가방'을 영어로 말해 봐요.",
      steps: [
        "가방을 영어로 'bag'이라고 해요.",
        "'bag'은 '백'이라고 읽어요.",
        "\"I have a bag.\" (나는 가방이 있어요.)"
      ],
      answer: "가방은 영어로 'bag'이에요.",
      lesson: "학교 갈 때 가방을 메면서 'bag!'이라고 말해 봐요!"
    }
  ],
  problems: [
    {
      id: "eng-el1-2-1",
      type: "choice",
      difficulty: 1,
      question: "'pencil'의 뜻은 무엇일까요?",
      choices: ["연필", "지우개", "가위", "풀"],
      answer: "연필",
      hints: [
        "'펜슬'이라고 읽어요.",
        "글씨를 쓸 때 사용해요."
      ],
      explanation: "'pencil'은 '연필'이라는 뜻이에요. 글씨를 쓸 때 사용하는 물건이에요!",
      wrongAnalysis: "지우개는 'eraser', 가위는 'scissors', 풀은 'glue'예요. 'pencil'은 연필이에요."
    },
    {
      id: "eng-el1-2-2",
      type: "choice",
      difficulty: 1,
      question: "책을 영어로 뭐라고 할까요?",
      choices: ["book", "bag", "desk", "pencil"],
      answer: "book",
      hints: [
        "읽을 수 있는 것이에요.",
        "'북'이라고 읽어요."
      ],
      explanation: "책은 영어로 'book'이에요. '북'이라고 읽어요!",
      wrongAnalysis: "'bag'은 가방, 'desk'는 책상이에요. 책은 'book'이에요."
    },
    {
      id: "eng-el1-2-3",
      type: "choice",
      difficulty: 2,
      question: "'desk'의 뜻으로 알맞은 것은?",
      choices: ["책상", "의자", "칠판", "창문"],
      answer: "책상",
      hints: [
        "'데스크'라고 읽어요.",
        "교실에서 앉아서 공부하는 곳이에요."
      ],
      explanation: "'desk'는 책상이에요. 교실에서 앉아서 공부할 때 사용하는 가구예요!",
      wrongAnalysis: "의자는 'chair', 칠판은 'board', 창문은 'window'예요. 'desk'는 책상이에요."
    },
    {
      id: "eng-el1-2-4",
      type: "choice",
      difficulty: 2,
      question: "가방을 영어로 뭐라고 할까요?",
      choices: ["bag", "book", "box", "bed"],
      answer: "bag",
      hints: [
        "학교에 갈 때 메고 가는 것이에요.",
        "'백'이라고 읽어요."
      ],
      explanation: "가방은 영어로 'bag'이에요. 학교 가방을 'school bag'이라고도 해요!",
      wrongAnalysis: "'book'은 책, 'box'는 상자, 'bed'는 침대예요. 가방은 'bag'이에요."
    },
    {
      id: "eng-el1-2-5",
      type: "choice",
      difficulty: 3,
      question: "다음 중 학교 물건이 아닌 것은?",
      choices: ["pillow", "book", "pencil", "desk"],
      answer: "pillow",
      hints: [
        "학교에서 공부할 때 필요한 것을 생각해 봐요.",
        "잠을 잘 때 머리를 대는 것은 학교 물건이 아니에요."
      ],
      explanation: "'pillow'는 '베개'라는 뜻이에요. 베개는 학교 물건이 아니라 집에서 잘 때 쓰는 거예요!",
      wrongAnalysis: "book(책), pencil(연필), desk(책상)은 모두 학교에서 쓰는 물건이에요. pillow(베개)는 학교 물건이 아니에요."
    }
  ],
  summary: {
    keyPoints: [
      "book은 책, pencil은 연필이에요.",
      "desk는 책상, bag은 가방이에요.",
      "학교에서 매일 보는 물건으로 영어를 연습해요."
    ],
    formulas: [
      "book = 책",
      "pencil = 연필",
      "desk = 책상",
      "bag = 가방"
    ],
    commonMistakes: [
      "book(책)과 bag(가방)이 둘 다 'b'로 시작해서 헷갈릴 수 있어요.",
      "desk(책상)와 door(문)을 혼동하지 않도록 해요."
    ],
    nextConnection: "학교 물건을 배웠으니, 다음에는 움직이는 말(동작)을 영어로 배워 봐요!"
  }
},
{
  id: 1012,
  title: "움직이는 말을 영어로 해요",
  category: "영어 1학년",
  level: "기초",
  question: "달리기, 먹기, 자기, 놀기를 영어로 어떻게 말할까요?",
  concept: {
    intro: "우리가 매일 하는 행동을 영어로 말해 봐요!\n\n아침에 일어나서 밤에 잠들 때까지 우리는 많은 행동을 해요. 이 행동들을 영어로 어떻게 말하는지 배워 봐요.\n\n:::note[기억해요!]\n- run (런) = 달리다\n- eat (잇) = 먹다\n- sleep (슬립) = 자다\n- play (플레이) = 놀다\n:::\n\n행동을 할 때마다 영어로 말해 보면 금방 외울 수 있어요!",
    intuition: "아침에 눈을 뜨면 밥을 먹어요. 영어로 'eat'! 학교에서 친구들과 놀아요. 영어로 'play'! 체육 시간에 달려요. 영어로 'run'! 밤에 잠을 자요. 영어로 'sleep'! 이렇게 하루 동안 하는 일을 영어로 말할 수 있어요.",
    formula: "run = 달리다\neat = 먹다\nsleep = 자다\nplay = 놀다",
    summary: ":::note[핵심 정리]\n행동을 나타내는 영어 단어를 배웠어요! run(달리다), eat(먹다), sleep(자다), play(놀다)를 기억해요.\n:::"
  },
  examples: [
    {
      title: "체육 시간에 뭐 하나요?",
      problem: "체육 시간에 운동장에서 달려요. '달리다'를 영어로 말해 봐요.",
      steps: [
        "달리다는 영어로 'run'이에요.",
        "'run'은 '런'이라고 읽어요.",
        "\"I run fast.\" (나는 빨리 달려요.)"
      ],
      answer: "달리다는 영어로 'run'이에요.",
      lesson: "달릴 때 'run, run, run!'이라고 말해 봐요!"
    },
    {
      title: "점심시간에 뭐 하나요?",
      problem: "점심시간에 밥을 먹어요. '먹다'를 영어로 말해 봐요.",
      steps: [
        "먹다는 영어로 'eat'이에요.",
        "'eat'은 '잇'이라고 읽어요.",
        "\"I eat lunch.\" (나는 점심을 먹어요.)"
      ],
      answer: "먹다는 영어로 'eat'이에요.",
      lesson: "밥을 먹을 때 'eat'을 떠올려 봐요!"
    },
    {
      title: "쉬는 시간에 뭐 하나요?",
      problem: "쉬는 시간에 친구들과 놀아요. '놀다'를 영어로 말해 봐요.",
      steps: [
        "놀다는 영어로 'play'예요.",
        "'play'는 '플레이'라고 읽어요.",
        "\"I play with friends.\" (나는 친구들과 놀아요.)"
      ],
      answer: "놀다는 영어로 'play'예요.",
      lesson: "친구들과 놀 때 'Let's play!'라고 말해 봐요!"
    }
  ],
  problems: [
    {
      id: "eng-el1-3-1",
      type: "choice",
      difficulty: 1,
      question: "'run'의 뜻은 무엇일까요?",
      choices: ["달리다", "먹다", "자다", "놀다"],
      answer: "달리다",
      hints: [
        "'런'이라고 읽어요.",
        "운동장에서 빠르게 움직이는 거예요."
      ],
      explanation: "'run'은 '달리다'라는 뜻이에요. 빠르게 뛰는 것을 영어로 'run'이라고 해요!",
      wrongAnalysis: "'eat'은 먹다, 'sleep'은 자다, 'play'는 놀다예요. 'run'은 달리다예요."
    },
    {
      id: "eng-el1-3-2",
      type: "choice",
      difficulty: 1,
      question: "먹다를 영어로 뭐라고 할까요?",
      choices: ["eat", "run", "sleep", "play"],
      answer: "eat",
      hints: [
        "밥, 과자, 과일을 입에 넣을 때 하는 행동이에요.",
        "'잇'이라고 읽어요."
      ],
      explanation: "먹다는 영어로 'eat'이에요. 음식을 먹는 것을 'eat'이라고 해요!",
      wrongAnalysis: "'run'은 달리다, 'sleep'은 자다예요. 먹다는 'eat'이에요."
    },
    {
      id: "eng-el1-3-3",
      type: "choice",
      difficulty: 2,
      question: "'sleep'의 뜻으로 알맞은 것은?",
      choices: ["자다", "일어나다", "걷다", "앉다"],
      answer: "자다",
      hints: [
        "'슬립'이라고 읽어요.",
        "밤에 눈을 감고 침대에서 하는 거예요."
      ],
      explanation: "'sleep'은 '자다'라는 뜻이에요. 밤에 잠을 자는 것을 'sleep'이라고 해요!",
      wrongAnalysis: "일어나다는 'wake up', 걷다는 'walk', 앉다는 'sit'이에요. 'sleep'은 자다예요."
    },
    {
      id: "eng-el1-3-4",
      type: "choice",
      difficulty: 2,
      question: "놀다를 영어로 뭐라고 할까요?",
      choices: ["play", "eat", "run", "sleep"],
      answer: "play",
      hints: [
        "친구들과 함께 즐겁게 하는 거예요.",
        "'플레이'라고 읽어요."
      ],
      explanation: "놀다는 영어로 'play'예요. 친구들과 재미있게 노는 것을 'play'라고 해요!",
      wrongAnalysis: "'eat'은 먹다, 'run'은 달리다, 'sleep'은 자다예요. 놀다는 'play'예요."
    },
    {
      id: "eng-el1-3-5",
      type: "choice",
      difficulty: 3,
      question: "\"I ___ with my friends.\" (나는 친구들과 ___.) 빈칸에 가장 알맞은 말은?",
      choices: ["play", "sleep", "eat", "run"],
      answer: "play",
      hints: [
        "친구들과 함께 하는 것 중에 가장 자연스러운 말을 골라 봐요.",
        "친구들과 즐겁게 하는 행동이에요."
      ],
      explanation: "친구들과 함께 하는 행동은 '놀다'가 가장 자연스러워요. 'play with friends'는 '친구들과 놀다'라는 뜻이에요!",
      wrongAnalysis: "친구들과 함께 자거나(sleep) 달리는(run) 것보다 노는(play) 것이 가장 자연스러운 표현이에요."
    }
  ],
  summary: {
    keyPoints: [
      "run은 달리다, eat은 먹다예요.",
      "sleep은 자다, play는 놀다예요.",
      "행동을 할 때마다 영어로 말해 보면 잘 외워져요."
    ],
    formulas: [
      "run = 달리다",
      "eat = 먹다",
      "sleep = 자다",
      "play = 놀다"
    ],
    commonMistakes: [
      "run(달리다)과 play(놀다)를 헷갈리는 경우가 있어요.",
      "eat(먹다)과 sleep(자다)를 바꿔서 쓰지 않도록 해요."
    ],
    nextConnection: "움직이는 말을 배웠으니, 다음에는 음식과 음료를 영어로 배워 봐요!"
  }
},
// ────────────────────────────────────────────
// Lesson 4: 고난도 종합 문제 (Difficulty 3)
// ────────────────────────────────────────────
{
  id: 1031,
  title: "헷갈리는 영어 문법과 단어 도전!",
  category: "영어 1학년",
  level: "심화",
  question: "is/are, 불규칙 복수형, 헷갈리는 단어를 구별할 수 있을까요?",
  concept: {
    intro: "영어에는 헷갈리기 쉬운 규칙들이 있어요!\n\n:::note[기억해요!]\n- 하나일 때: is (It is a cat.)\n- 여럿일 때: are (They are cats.)\n- 특별한 복수형: fish → fish, mouse → mice\n:::\n\n이런 규칙을 잘 알면 영어를 더 정확하게 말할 수 있어요!",
    intuition: "한국어에서는 '고양이 한 마리'나 '고양이 세 마리'나 '고양이' 자체는 안 변하죠? 하지만 영어에서는 cat → cats처럼 변해요. 그리고 더 어려운 건 fish처럼 안 변하는 것도 있고, mouse → mice처럼 완전히 다르게 변하는 것도 있어요!",
    formula: "하나: is / a + 단어\n여럿: are / 단어 + s\n특별: fish → fish (안 변함)\nmouse → mice (완전히 변함)\ntooth → teeth (완전히 변함)",
    summary: ":::note[핵심 정리]\nis/are를 구별하고, 특별한 복수형을 기억하면 영어 실력이 한 단계 올라가요!\n:::"
  },
  examples: [
    {
      title: "is와 are 구별하기",
      problem: "\"It ___ a dog.\" 빈칸에 is가 올까요, are가 올까요?",
      steps: [
        "It은 하나를 가리켜요.",
        "하나일 때는 'is'를 써요.",
        "\"It is a dog.\" (그것은 강아지예요.)",
      ],
      answer: "It is a dog.",
      lesson: "하나일 때는 is, 여럿일 때는 are를 써요!"
    },
    {
      title: "특별한 복수형",
      problem: "물고기 두 마리를 영어로 어떻게 말할까요?",
      steps: [
        "보통은 단어 뒤에 s를 붙여요: cat → cats",
        "하지만 fish는 특별해요! 여러 마리여도 fish예요.",
        "two fish (두 마리 물고기) - fishs가 아니에요!",
      ],
      answer: "물고기 두 마리는 'two fish'예요!",
      lesson: "fish는 하나여도 fish, 여러 마리여도 fish예요!"
    },
    {
      title: "mouse의 복수형",
      problem: "생쥐 한 마리는 mouse, 그럼 여러 마리는?",
      steps: [
        "보통은 s를 붙이지만, mouse는 특별해요.",
        "mouse → mice (마우스 → 마이스)",
        "mouses가 아니라 mice예요!",
      ],
      answer: "생쥐 여러 마리는 'mice'예요!",
      lesson: "mouse → mice는 꼭 외워야 하는 특별한 복수형이에요!"
    }
  ],
  problems: [
    {
      id: "eng-el1-hard-1",
      type: "choice",
      difficulty: 3,
      question: "빈칸에 알맞은 말은?\n\"They ___ my brothers.\"",
      choices: ["is", "are", "am", "a"],
      answer: "are",
      hints: [
        "They는 '그들'이에요. 여러 명이죠?",
        "여러 명일 때는 is가 아니라?"
      ],
      explanation: "They(그들)는 여러 명이므로 'are'를 써요. \"They are my brothers.\" (그들은 나의 형제들이에요.)",
      wrongAnalysis: "is는 하나(he, she, it), are는 여럿(they, we) 또는 you에 써요. am은 I에만 써요."
    },
    {
      id: "eng-el1-hard-2",
      type: "choice",
      difficulty: 3,
      question: "'mouse'가 여러 마리이면 영어로 뭐라고 할까요?",
      choices: ["mouses", "mice", "mouse", "mousey"],
      answer: "mice",
      hints: [
        "mouse는 특별한 복수형이 있어요.",
        "mouses가 아니라 완전히 다른 모양이에요!"
      ],
      explanation: "mouse(생쥐) 한 마리 → mice(생쥐) 여러 마리! mouses가 아니에요. 특별한 복수형이에요.",
      wrongAnalysis: "mouse는 불규칙 복수형이에요. -s를 붙이는 게 아니라 mice로 완전히 바뀌어요."
    },
    {
      id: "eng-el1-hard-3",
      type: "choice",
      difficulty: 3,
      question: "\"I ___ happy.\" 빈칸에 알맞은 말은?",
      choices: ["is", "are", "am", "be"],
      answer: "am",
      hints: [
        "I(나)와 함께 쓰는 특별한 말이 있어요.",
        "I 다음에는 am, He/She 다음에는 is, They 다음에는 are!"
      ],
      explanation: "I(나) 다음에는 항상 'am'을 써요! \"I am happy.\" (나는 행복해요.)",
      wrongAnalysis: "I → am, He/She/It → is, You/We/They → are. 이 규칙을 기억해요!"
    },
    {
      id: "eng-el1-hard-4",
      type: "choice",
      difficulty: 3,
      question: "물고기 세 마리를 영어로 바르게 쓴 것은?",
      choices: ["three fishs", "three fishes", "three fish", "three fishy"],
      answer: "three fish",
      hints: [
        "fish는 특별한 단어예요.",
        "fish는 한 마리여도 fish, 여러 마리여도 fish예요!"
      ],
      explanation: "fish는 하나여도 여러 마리여도 모양이 안 변해요! three fish가 맞아요.",
      wrongAnalysis: "fishs, fishes, fishy는 모두 틀려요. fish는 복수형이 fish 그대로예요."
    },
    {
      id: "eng-el1-hard-5",
      type: "choice",
      difficulty: 3,
      question: "다음 중 틀린 문장은?",
      choices: [
        "She is my sister.",
        "They are dogs.",
        "He are my dad.",
        "I am a student."
      ],
      answer: "He are my dad.",
      hints: [
        "He(그)와 함께 쓸 수 있는 말은 is일까요, are일까요?",
        "He는 한 사람이에요!"
      ],
      explanation: "He(그)는 한 사람이므로 'is'를 써야 해요. \"He is my dad.\"이 맞아요. He are는 틀린 표현이에요!",
      wrongAnalysis: "He/She/It → is, You/We/They → are. He are는 규칙에 맞지 않아요."
    },
    {
      id: "eng-el1-hard-6",
      type: "choice",
      difficulty: 3,
      question: "다음 중 'run'과 반대되는 행동은?",
      choices: ["eat", "stop", "play", "sleep"],
      answer: "stop",
      hints: [
        "run은 '달리다'예요. 달리는 것의 반대는?",
        "달리는 것을 그만두는 행동이에요."
      ],
      explanation: "run(달리다)의 반대는 stop(멈추다)예요! 달리다 ↔ 멈추다",
      wrongAnalysis: "eat(먹다), play(놀다), sleep(자다)는 run의 반대가 아니라 다른 종류의 행동이에요."
    },
    {
      id: "eng-el1-hard-7",
      type: "choice",
      difficulty: 3,
      question: "이(tooth) 하나는 tooth, 그럼 이 여러 개는?",
      choices: ["tooths", "toothes", "teeth", "toothy"],
      answer: "teeth",
      hints: [
        "tooth도 mouse처럼 특별한 복수형이 있어요.",
        "tooth → teeth! 완전히 모양이 바뀌어요."
      ],
      explanation: "tooth(이) 하나 → teeth(이) 여러 개! tooths가 아니라 teeth로 바뀌는 불규칙 복수형이에요.",
      wrongAnalysis: "tooth → teeth는 mouse → mice처럼 특별한 복수형이에요. -s를 붙이면 안 돼요."
    },
    {
      id: "eng-el1-hard-8",
      type: "choice",
      difficulty: 3,
      question: "\"___ is my mom. ___ is kind.\" 빈칸에 들어갈 말은?",
      choices: ["He / He", "She / She", "They / They", "It / It"],
      answer: "She / She",
      hints: [
        "mom은 엄마예요. 엄마는 여자죠?",
        "여자를 가리킬 때 쓰는 영어 단어는?"
      ],
      explanation: "mom(엄마)은 여자이므로 'She'를 써요. \"She is my mom. She is kind.\" (그녀는 나의 엄마예요. 그녀는 친절해요.)",
      wrongAnalysis: "He는 남자(아빠, 형), She는 여자(엄마, 언니)에 써요. They는 여러 명일 때, It은 물건/동물에 써요."
    },
    {
      id: "eng-el1-hard-9",
      type: "choice",
      difficulty: 3,
      question: "다음 중 학교(school)에서 할 수 있는 행동을 모두 포함하는 것은?",
      choices: [
        "eat, sleep",
        "run, play, eat",
        "sleep, sleep, sleep",
        "run, cook, drive"
      ],
      answer: "run, play, eat",
      hints: [
        "학교에서 할 수 있는 것을 생각해 봐요.",
        "체육 시간에 달리고(run), 쉬는 시간에 놀고(play), 점심에 먹어요(eat)!"
      ],
      explanation: "학교에서는 run(달리기-체육), play(놀기-쉬는 시간), eat(먹기-점심)을 모두 할 수 있어요! cook(요리)이나 drive(운전)는 학교에서 하기 어려워요.",
      wrongAnalysis: "cook(요리)과 drive(운전)는 보통 학교에서 하지 않아요. sleep만 계속 하는 것도 학교 활동이 아니죠!"
    },
    {
      id: "eng-el1-hard-10",
      type: "choice",
      difficulty: 3,
      question: "\"The cat ___ on the desk.\" 빈칸에 알맞은 말은?",
      choices: ["are", "is", "am", "be"],
      answer: "is",
      hints: [
        "The cat은 고양이 한 마리예요.",
        "한 마리(하나)일 때는 어떤 말을 쓸까요?"
      ],
      explanation: "The cat(고양이 한 마리)은 하나이므로 'is'를 써요. \"The cat is on the desk.\" (고양이가 책상 위에 있어요.)",
      wrongAnalysis: "am은 I에만, are는 여럿에, is는 하나에 써요. cat 한 마리는 하나이므로 is가 맞아요."
    }
  ],
  summary: {
    keyPoints: [
      "I → am, He/She/It → is, You/We/They → are",
      "fish는 하나여도 여럿이어도 fish예요 (복수형 없음).",
      "mouse → mice, tooth → teeth는 특별한 복수형이에요."
    ],
    formulas: [
      "I am / He is / She is / It is",
      "We are / You are / They are",
      "mouse → mice, tooth → teeth, fish → fish"
    ],
    commonMistakes: [
      "He are (✗) → He is (✓)",
      "three fishs (✗) → three fish (✓)",
      "mouses (✗) → mice (✓)"
    ],
    nextConnection: "is/are와 특별한 복수형을 배웠으니, 더 다양한 영어 문장을 만들어 봐요!"
  }
}
];
