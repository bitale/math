import { Lesson } from "../../types";

export const engGrade3Lessons: Lesson[] = [
{
  id: 1016,
  title: "위치를 나타내는 말을 배워요",
  category: "영어 3학년",
  level: "중급",
  question: "물건이 어디에 있는지 영어로 어떻게 말할까요?",
  concept: {
    intro: "물건이 어디에 있는지 영어로 말해 봐요!\n\n\"고양이가 어디에 있어요?\" 이런 질문에 영어로 대답하려면 위치를 나타내는 말(전치사)을 알아야 해요.\n\n:::note[기억해요!]\n- in (인) = ~안에\n- on (온) = ~위에\n- under (언더) = ~아래에\n- behind (비하인드) = ~뒤에\n- next to (넥스트 투) = ~옆에\n:::\n\n이 말들을 사용하면 물건이 어디에 있는지 정확하게 설명할 수 있어요!",
    intuition: "방 안을 둘러봐요! 연필이 필통 '안에(in)' 있어요. 책이 책상 '위에(on)' 있어요. 고양이가 의자 '아래에(under)' 숨었어요. 가방이 문 '뒤에(behind)' 있어요. 인형이 베개 '옆에(next to)' 있어요. 이렇게 위치를 영어로 말할 수 있어요!",
    formula: "in = ~안에 (상자 안, 방 안)\non = ~위에 (책상 위, 의자 위)\nunder = ~아래에 (침대 아래, 책상 아래)\nbehind = ~뒤에 (문 뒤, 나무 뒤)\nnext to = ~옆에 (학교 옆, 친구 옆)",
    summary: ":::note[핵심 정리]\n위치를 나타내는 전치사를 배웠어요! in(안에), on(위에), under(아래에), behind(뒤에), next to(옆에)를 기억해요.\n:::"
  },
  examples: [
    {
      title: "고양이는 어디에 있나요?",
      problem: "고양이가 상자 안에 있어요. 영어로 말해 봐요.",
      steps: [
        "'안에'는 영어로 'in'이에요.",
        "\"The cat is in the box.\"",
        "(고양이가 상자 안에 있어요.)"
      ],
      answer: "\"The cat is in the box.\" (고양이가 상자 안에 있어요.)",
      lesson: "무언가의 안쪽에 있을 때 'in'을 사용해요!"
    },
    {
      title: "책은 어디에 있나요?",
      problem: "책이 책상 위에 있어요. 영어로 말해 봐요.",
      steps: [
        "'위에'는 영어로 'on'이에요.",
        "\"The book is on the desk.\"",
        "(책이 책상 위에 있어요.)"
      ],
      answer: "\"The book is on the desk.\" (책이 책상 위에 있어요.)",
      lesson: "무언가의 표면 위에 있을 때 'on'을 사용해요!"
    },
    {
      title: "공은 어디에 있나요?",
      problem: "공이 의자 아래에 있어요. 영어로 말해 봐요.",
      steps: [
        "'아래에'는 영어로 'under'예요.",
        "\"The ball is under the chair.\"",
        "(공이 의자 아래에 있어요.)"
      ],
      answer: "\"The ball is under the chair.\" (공이 의자 아래에 있어요.)",
      lesson: "무언가의 아래쪽에 있을 때 'under'를 사용해요!"
    }
  ],
  problems: [
    {
      id: "eng-el3-1-1",
      type: "choice",
      difficulty: 1,
      question: "'on'의 뜻은 무엇일까요?",
      choices: ["~위에", "~안에", "~아래에", "~옆에"],
      answer: "~위에",
      hints: [
        "'온'이라고 읽어요.",
        "책상 위에 책이 있을 때 쓰는 말이에요."
      ],
      explanation: "'on'은 '~위에'라는 뜻이에요. 무언가의 표면 위에 있을 때 사용해요!",
      wrongAnalysis: "'in'은 ~안에, 'under'는 ~아래에예요. 'on'은 ~위에예요."
    },
    {
      id: "eng-el3-1-2",
      type: "choice",
      difficulty: 1,
      question: "'~안에'를 영어로 뭐라고 할까요?",
      choices: ["in", "on", "under", "behind"],
      answer: "in",
      hints: [
        "상자 안에 물건이 있을 때 쓰는 말이에요.",
        "'인'이라고 읽어요."
      ],
      explanation: "'~안에'는 영어로 'in'이에요. 무언가의 안쪽에 있을 때 사용해요!",
      wrongAnalysis: "'on'은 ~위에, 'under'는 ~아래에예요. ~안에는 'in'이에요."
    },
    {
      id: "eng-el3-1-3",
      type: "choice",
      difficulty: 2,
      question: "\"The cat is ___ the table.\" (고양이가 탁자 아래에 있어요.) 빈칸에 알맞은 말은?",
      choices: ["under", "on", "in", "next to"],
      answer: "under",
      hints: [
        "'아래에'라는 뜻의 영어 단어를 찾아봐요.",
        "'언더'라고 읽는 말이에요."
      ],
      explanation: "'아래에'는 영어로 'under'예요. \"The cat is under the table.\"은 '고양이가 탁자 아래에 있어요.'라는 뜻이에요!",
      wrongAnalysis: "'on'을 쓰면 '위에'가 되어 뜻이 반대가 돼요. '아래에'는 'under'예요."
    },
    {
      id: "eng-el3-1-4",
      type: "choice",
      difficulty: 2,
      question: "'behind'의 뜻으로 알맞은 것은?",
      choices: ["~뒤에", "~앞에", "~위에", "~안에"],
      answer: "~뒤에",
      hints: [
        "'비하인드'라고 읽어요.",
        "무언가의 뒷쪽에 숨어 있을 때 쓰는 말이에요."
      ],
      explanation: "'behind'는 '~뒤에'라는 뜻이에요. 무언가의 뒷쪽에 있을 때 사용해요!",
      wrongAnalysis: "~앞에는 'in front of'예요. 'behind'는 ~뒤에예요."
    },
    {
      id: "eng-el3-1-5",
      type: "choice",
      difficulty: 3,
      question: "\"The dog is ___ the house.\" (개가 집 옆에 있어요.) 빈칸에 알맞은 말은?",
      choices: ["next to", "in", "under", "on"],
      answer: "next to",
      hints: [
        "'옆에'라는 뜻의 영어 표현을 찾아봐요.",
        "두 단어로 이루어진 표현이에요."
      ],
      explanation: "'옆에'는 영어로 'next to'예요. \"The dog is next to the house.\"는 '개가 집 옆에 있어요.'라는 뜻이에요!",
      wrongAnalysis: "'in'은 안에, 'under'는 아래에, 'on'은 위에예요. 옆에는 'next to'예요."
    }
  ],
  summary: {
    keyPoints: [
      "in은 ~안에, on은 ~위에예요.",
      "under는 ~아래에, behind는 ~뒤에예요.",
      "next to는 ~옆에라는 뜻이에요."
    ],
    formulas: [
      "in = ~안에",
      "on = ~위에",
      "under = ~아래에",
      "behind = ~뒤에",
      "next to = ~옆에"
    ],
    commonMistakes: [
      "on(위에)과 in(안에)을 헷갈리는 경우가 있어요.",
      "under(아래에)와 behind(뒤에)를 혼동하지 않도록 해요."
    ],
    nextConnection: "위치를 나타내는 말을 배웠으니, 다음에는 시간을 영어로 말하는 법을 배워 봐요!"
  }
},
{
  id: 1017,
  title: "시간을 영어로 말해요",
  category: "영어 3학년",
  level: "중급",
  question: "아침, 오후, 저녁과 시각을 영어로 어떻게 말할까요?",
  concept: {
    intro: "하루의 시간을 영어로 말해 봐요!\n\n아침부터 저녁까지, 하루의 시간을 영어로 말할 수 있으면 일상을 영어로 이야기할 수 있어요.\n\n:::note[기억해요!]\n- morning (모닝) = 아침\n- afternoon (애프터눈) = 오후\n- evening (이브닝) = 저녁\n- o'clock (어클락) = ~시 정각\n:::\n\n시계를 볼 때마다 영어로 시간을 말해 보세요!",
    intuition: "해가 뜨면 'morning'(아침)이에요. 점심을 먹고 나면 'afternoon'(오후)이에요. 해가 지면 'evening'(저녁)이에요. 시계가 딱 정각을 가리키면 'o'clock'을 써요. 3시면 'three o'clock'이에요!",
    formula: "morning = 아침 (해 뜰 때 ~ 점심 전)\nafternoon = 오후 (점심 후 ~ 해 질 때)\nevening = 저녁 (해 진 후 ~ 밤)\no'clock = ~시 정각 (one o'clock = 1시)",
    summary: ":::note[핵심 정리]\n하루의 시간을 영어로 말할 수 있어요! morning(아침), afternoon(오후), evening(저녁)을 기억하고, 정각을 말할 때는 숫자 + o'clock을 써요.\n:::"
  },
  examples: [
    {
      title: "아침 인사",
      problem: "아침에 선생님을 만났어요. 영어로 인사해 봐요.",
      steps: [
        "아침은 영어로 'morning'이에요.",
        "아침 인사는 'Good morning!'이에요.",
        "\"Good morning, teacher!\" (선생님, 좋은 아침이에요!)"
      ],
      answer: "'Good morning!'은 아침 인사예요.",
      lesson: "아침에 만나면 'Good morning!', 오후에 만나면 'Good afternoon!', 저녁에 만나면 'Good evening!'이라고 해요!"
    },
    {
      title: "시각 말하기",
      problem: "지금 3시예요. 영어로 말해 봐요.",
      steps: [
        "3은 영어로 'three'예요.",
        "정각이니까 'o'clock'을 붙여요.",
        "\"It's three o'clock.\" (3시예요.)"
      ],
      answer: "3시는 영어로 'three o'clock'이에요.",
      lesson: "정각을 말할 때는 숫자 뒤에 'o'clock'을 붙여요!"
    },
    {
      title: "하루 일과",
      problem: "오후에 친구와 놀아요. 영어로 말해 봐요.",
      steps: [
        "오후는 영어로 'afternoon'이에요.",
        "\"in the afternoon\"은 '오후에'라는 뜻이에요.",
        "\"I play with friends in the afternoon.\" (나는 오후에 친구들과 놀아요.)"
      ],
      answer: "'in the afternoon'은 '오후에'라는 뜻이에요.",
      lesson: "시간 앞에 'in the'를 붙여요: in the morning(아침에), in the afternoon(오후에), in the evening(저녁에)"
    }
  ],
  problems: [
    {
      id: "eng-el3-2-1",
      type: "choice",
      difficulty: 1,
      question: "'morning'의 뜻은 무엇일까요?",
      choices: ["아침", "오후", "저녁", "밤"],
      answer: "아침",
      hints: [
        "'모닝'이라고 읽어요.",
        "해가 뜨고 학교에 가는 시간이에요."
      ],
      explanation: "'morning'은 '아침'이라는 뜻이에요. 'Good morning!'은 아침 인사예요!",
      wrongAnalysis: "'afternoon'은 오후, 'evening'은 저녁이에요. 'morning'은 아침이에요."
    },
    {
      id: "eng-el3-2-2",
      type: "choice",
      difficulty: 1,
      question: "오후를 영어로 뭐라고 할까요?",
      choices: ["afternoon", "morning", "evening", "night"],
      answer: "afternoon",
      hints: [
        "점심을 먹고 난 뒤의 시간이에요.",
        "'애프터눈'이라고 읽어요."
      ],
      explanation: "오후는 영어로 'afternoon'이에요. 'after'(뒤) + 'noon'(정오)으로, 정오 뒤라는 뜻이에요!",
      wrongAnalysis: "'morning'은 아침, 'evening'은 저녁이에요. 오후는 'afternoon'이에요."
    },
    {
      id: "eng-el3-2-3",
      type: "choice",
      difficulty: 2,
      question: "'evening'의 뜻으로 알맞은 것은?",
      choices: ["저녁", "아침", "새벽", "점심"],
      answer: "저녁",
      hints: [
        "'이브닝'이라고 읽어요.",
        "해가 지고 어두워지기 시작하는 시간이에요."
      ],
      explanation: "'evening'은 '저녁'이라는 뜻이에요. 해가 진 후부터 밤까지의 시간이에요!",
      wrongAnalysis: "아침은 'morning'이에요. 해가 지는 시간인 저녁은 'evening'이에요."
    },
    {
      id: "eng-el3-2-4",
      type: "choice",
      difficulty: 2,
      question: "\"It's five o'clock.\"을 우리말로 바르게 옮긴 것은?",
      choices: ["5시예요.", "5개예요.", "5번이에요.", "5월이에요."],
      answer: "5시예요.",
      hints: [
        "'o'clock'은 시간을 말할 때 쓰는 말이에요.",
        "'five'는 5라는 뜻이에요."
      ],
      explanation: "\"It's five o'clock.\"은 '5시예요.'라는 뜻이에요. 'o'clock'은 정각을 나타내요!",
      wrongAnalysis: "'o'clock'은 ~개나 ~번이 아니라 시간의 '~시'를 뜻해요."
    },
    {
      id: "eng-el3-2-5",
      type: "choice",
      difficulty: 3,
      question: "해가 지고 저녁을 먹는 시간에 하는 인사는?",
      choices: ["Good evening!", "Good morning!", "Good afternoon!", "Good night!"],
      answer: "Good evening!",
      hints: [
        "해가 진 후 시간을 영어로 뭐라고 했나요?",
        "저녁은 'evening'이에요."
      ],
      explanation: "저녁 시간에는 'Good evening!'이라고 인사해요. 'Good night!'은 잠자리에 들 때 하는 인사예요.",
      wrongAnalysis: "'Good morning!'은 아침 인사, 'Good afternoon!'은 오후 인사예요. 'Good night!'은 잠잘 때 인사이고, 저녁에 만났을 때는 'Good evening!'이에요."
    }
  ],
  summary: {
    keyPoints: [
      "morning은 아침, afternoon은 오후, evening은 저녁이에요.",
      "정각을 말할 때는 숫자 + o'clock을 써요.",
      "인사할 때 시간에 맞게 Good morning/afternoon/evening!을 써요."
    ],
    formulas: [
      "morning = 아침",
      "afternoon = 오후",
      "evening = 저녁",
      "숫자 + o'clock = ~시 정각"
    ],
    commonMistakes: [
      "afternoon(오후)과 evening(저녁)의 구분이 헷갈릴 수 있어요.",
      "Good evening(저녁 인사)과 Good night(잠잘 때 인사)을 혼동하지 않도록 해요."
    ],
    nextConnection: "시간 표현을 배웠으니, 다음에는 간단한 영어 문장 만들기를 배워 봐요!"
  }
},
{
  id: 1018,
  title: "간단한 영어 문장을 만들어요",
  category: "영어 3학년",
  level: "중급",
  question: "'I like ___', 'She is ___', 'They have ___' 같은 간단한 문장을 만들 수 있을까요?",
  concept: {
    intro: "영어로 간단한 문장을 만들어 봐요!\n\n영어 단어를 많이 알아도 문장으로 만들지 못하면 의미를 전달하기 어려워요. 간단한 문장 틀을 배우면 여러 가지 말을 할 수 있어요.\n\n:::note[기억해요!]\n- \"I like ___.\" = 나는 ___을/를 좋아해요.\n- \"She is ___.\" = 그녀는 ___해요. / 그녀는 ___이에요.\n- \"They have ___.\" = 그들은 ___을/를 가지고 있어요.\n:::\n\n빈칸에 알맞은 단어를 넣으면 다양한 문장을 만들 수 있어요!",
    intuition: "문장 만들기는 블록 놀이와 비슷해요! 'I like'라는 블록에 'apples'를 붙이면 \"I like apples.\"(나는 사과를 좋아해요.)가 돼요. 'She is'에 'happy'를 붙이면 \"She is happy.\"(그녀는 행복해요.)가 돼요. 이렇게 블록을 붙이면 문장이 완성돼요!",
    formula: "I like + 명사 = 나는 ~을 좋아해요\n  예: I like apples. (나는 사과를 좋아해요.)\n\nShe is + 형용사 = 그녀는 ~해요\n  예: She is happy. (그녀는 행복해요.)\n\nThey have + 명사 = 그들은 ~이 있어요/키워요\n  예: They have a dog. (그들은 개를 키워요.)",
    summary: ":::note[핵심 정리]\n간단한 문장 틀을 배웠어요! 'I like ___', 'She is ___', 'They have ___'에 단어를 넣으면 다양한 문장을 만들 수 있어요.\n:::"
  },
  examples: [
    {
      title: "좋아하는 것 말하기",
      problem: "\"나는 사과를 좋아해요.\"를 영어로 말해 봐요.",
      steps: [
        "'나는 ~을 좋아해요'는 'I like ___.'예요.",
        "사과는 영어로 'apples'예요.",
        "빈칸에 'apples'를 넣으면 완성!",
        "\"I like apples.\" (나는 사과를 좋아해요.)"
      ],
      answer: "\"I like apples.\"",
      lesson: "'I like' 뒤에 좋아하는 것을 넣으면 돼요! I like cats. I like pizza."
    },
    {
      title: "상태 설명하기",
      problem: "\"그녀는 키가 커요.\"를 영어로 말해 봐요.",
      steps: [
        "'그녀는 ~해요'는 'She is ___.'예요.",
        "키가 큰은 영어로 'tall'이에요.",
        "빈칸에 'tall'을 넣으면 완성!",
        "\"She is tall.\" (그녀는 키가 커요.)"
      ],
      answer: "\"She is tall.\"",
      lesson: "'She is' 뒤에 어떤 상태인지를 넣으면 돼요! She is kind. She is smart."
    },
    {
      title: "가지고 있는 것 말하기",
      problem: "\"그들은 고양이를 가지고 있어요.\"를 영어로 말해 봐요.",
      steps: [
        "'그들은 ~을 가지고 있어요'는 'They have ___.'예요.",
        "고양이는 영어로 'a cat'이에요.",
        "빈칸에 'a cat'을 넣으면 완성!",
        "\"They have a cat.\" (그들은 고양이를 가지고 있어요.)"
      ],
      answer: "\"They have a cat.\"",
      lesson: "'They have' 뒤에 가진 것을 넣으면 돼요! They have a ball. They have books."
    }
  ],
  problems: [
    {
      id: "eng-el3-3-1",
      type: "choice",
      difficulty: 1,
      question: "\"I like apples.\"를 우리말로 바르게 옮긴 것은?",
      choices: ["나는 사과를 좋아해요.", "나는 사과를 먹어요.", "나는 사과가 있어요.", "나는 사과를 원해요."],
      answer: "나는 사과를 좋아해요.",
      hints: [
        "'like'는 '좋아하다'라는 뜻이에요.",
        "'apples'는 '사과들'이에요."
      ],
      explanation: "\"I like apples.\"는 '나는 사과를 좋아해요.'라는 뜻이에요. 'like'는 '좋아하다'예요!",
      wrongAnalysis: "'먹어요'는 'eat', '있어요'는 'have', '원해요'는 'want'예요. 'like'는 '좋아하다'예요."
    },
    {
      id: "eng-el3-3-2",
      type: "choice",
      difficulty: 1,
      question: "\"She is happy.\"의 뜻으로 알맞은 것은?",
      choices: ["그녀는 행복해요.", "그녀는 슬퍼요.", "그녀는 먹어요.", "그녀는 달려요."],
      answer: "그녀는 행복해요.",
      hints: [
        "'she'는 '그녀'라는 뜻이에요.",
        "'happy'는 '행복한'이라는 뜻이에요."
      ],
      explanation: "\"She is happy.\"는 '그녀는 행복해요.'라는 뜻이에요. 'She is ___.'로 상태를 말할 수 있어요!",
      wrongAnalysis: "'sad'가 슬픈이에요. 'happy'는 행복한이므로 '그녀는 행복해요.'가 정답이에요."
    },
    {
      id: "eng-el3-3-3",
      type: "choice",
      difficulty: 2,
      question: "\"나는 고양이를 좋아해요.\"를 영어로 바르게 쓴 것은?",
      choices: ["I like cats.", "I am cats.", "I have cats.", "I eat cats."],
      answer: "I like cats.",
      hints: [
        "'좋아해요'를 영어로 뭐라고 했나요?",
        "'like'는 '좋아하다'라는 뜻이에요."
      ],
      explanation: "'좋아해요'는 'like'이므로 \"I like cats.\"가 정답이에요!",
      wrongAnalysis: "'I am'은 '나는 ~이에요', 'I have'는 '나는 ~을 가지고 있어요', 'I eat'은 '나는 ~을 먹어요'예요."
    },
    {
      id: "eng-el3-3-4",
      type: "choice",
      difficulty: 2,
      question: "\"They have a dog.\"을 우리말로 바르게 옮긴 것은?",
      choices: ["그들은 개를 키워요.", "그들은 개를 좋아해요.", "그들은 개처럼 생겼어요.", "그들은 개를 먹어요."],
      answer: "그들은 개를 키워요.",
      hints: [
        "'they'는 '그들'이라는 뜻이에요.",
        "반려동물에 대해 have를 쓰면 '키우다/있다'로 자연스럽게 옮겨요."
      ],
      explanation: "\"They have a dog.\"은 반려동물 문맥에서 '그들은 개가 있어요/개를 키워요'로 자연스럽게 옮깁니다. '좋아하다'는 like를 써요.",
      wrongAnalysis: "'좋아해요'는 'like'이에요. have는 물건에는 '가지고 있다', 반려동물에는 '있다/키우다'로 옮기면 자연스러워요."
    },
    {
      id: "eng-el3-3-5",
      type: "choice",
      difficulty: 3,
      question: "빈칸에 알맞은 말은? \"She ___ kind.\" (그녀는 친절해요.)",
      choices: ["is", "like", "have", "are"],
      answer: "is",
      hints: [
        "'그녀는 ~해요'를 영어로 어떻게 쓰나요?",
        "'She' 뒤에는 어떤 말이 와야 할까요?"
      ],
      explanation: "'She'(그녀는) 뒤에 상태를 설명할 때는 'is'를 써요. \"She is kind.\"는 '그녀는 친절해요.'라는 뜻이에요!",
      wrongAnalysis: "'like'는 '좋아하다', 'have'는 '가지다'예요. 'are'는 'you', 'we', 'they'와 함께 쓰고, 'she'에는 'is'를 써야 해요."
    }
  ],
  summary: {
    keyPoints: [
      "\"I like ___.\"으로 좋아하는 것을 말할 수 있어요.",
      "\"She is ___.\"으로 상태를 설명할 수 있어요.",
      "\"They have ___.\"으로 가지고 있는 것을 말할 수 있어요."
    ],
    formulas: [
      "I like + 명사 = 나는 ~을 좋아해요",
      "She is + 형용사 = 그녀는 ~해요",
      "They have + 명사 = 그들은 ~을 가지고 있어요"
    ],
    commonMistakes: [
      "like(좋아하다)와 have(가지다)를 헷갈리는 경우가 있어요.",
      "She 뒤에는 'is'를 쓰고, They 뒤에는 'are'를 써야 해요. 바꿔 쓰지 않도록 주의해요."
    ],
    nextConnection: "간단한 문장을 배웠으니, 다음에는 더 다양한 문장 구조를 배워 봐요!"
  }
},
// ────────────────────────────────────────────
// Lesson 4: 고난도 종합 문제 (Difficulty 3)
// ────────────────────────────────────────────
{
  id: 1033,
  title: "헷갈리는 영어 문법 도전!",
  category: "영어 3학년",
  level: "심화",
  question: "is/are 사용, 전치사 혼동, 문장 구조 실수를 잡아낼 수 있을까요?",
  concept: {
    intro: "영어 문장을 만들 때 자주 실수하는 부분을 집중 연습해 봐요!\n\n:::note[기억해요!]\n- She/He → is, They/We → are\n- in(안에), on(위에), at(장소/시간 한 점)\n- 'I like ~' vs 'I am ~' 구별하기\n:::\n\n실수를 줄이면 영어 실력이 크게 올라가요!",
    intuition: "영어를 배울 때 가장 많이 실수하는 부분이 있어요. is/are를 바꿔 쓰거나, in/on/at를 헷갈리거나, 문장 구조를 잘못 만드는 거예요. 이런 실수를 잡는 연습을 하면 영어를 더 정확하게 말할 수 있어요!",
    formula: "주어와 be 동사 짝짓기:\nI → am\nHe/She/It → is\nYou/We/They → are\n\n전치사:\nin the morning (아침에)\non Monday (월요일에)\nat 3 o'clock (3시에)\nat school (학교에서)",
    summary: ":::note[핵심 정리]\n주어에 맞는 be 동사를 쓰고, 전치사를 정확히 사용하면 영어 문장이 완벽해져요!\n:::"
  },
  examples: [
    {
      title: "is와 are 정확히 쓰기",
      problem: "\"The dogs ___ big.\" is일까요, are일까요?",
      steps: [
        "The dogs는 개 여러 마리예요.",
        "여러 개(복수)일 때는 'are'를 써요.",
        "\"The dogs are big.\" (그 개들은 커요.)",
      ],
      answer: "The dogs are big.",
      lesson: "dogs처럼 -s가 붙은 복수 명사에는 are를 써요!"
    },
    {
      title: "전치사 구별",
      problem: "'월요일에'를 영어로 하면?",
      steps: [
        "요일에는 'on'을 써요!",
        "on Monday (월요일에)",
        "아침에는 in (in the morning), 시각에는 at (at 9 o'clock)",
      ],
      answer: "'on Monday'가 맞아요!",
      lesson: "요일 → on, 아침/오후/저녁 → in, 시각 → at"
    },
    {
      title: "like vs am 구별",
      problem: "\"나는 고양이를 좋아해요\"와 \"나는 행복해요\"의 차이는?",
      steps: [
        "좋아해요 → I like cats. (like + 명사)",
        "행복해요 → I am happy. (am + 형용사)",
        "like(좋아하다)와 am(~이다)은 다른 동사예요!",
      ],
      answer: "I like cats. / I am happy.",
      lesson: "좋아하는 것을 말할 때는 like, 상태를 말할 때는 am/is/are!"
    }
  ],
  problems: [
    {
      id: "eng-el3-hard-1",
      type: "choice",
      difficulty: 3,
      question: "\"The children ___ playing in the park.\" 빈칸에 알맞은 말은?",
      choices: ["is", "are", "am", "be"],
      answer: "are",
      hints: [
        "children은 child(아이)의 복수형이에요.",
        "여러 명이면 어떤 be 동사를 쓸까요?"
      ],
      explanation: "children(아이들)은 복수이므로 'are'를 써요. \"The children are playing in the park.\"",
      wrongAnalysis: "children은 여러 명이에요. 한 명(a child)이면 is, 여러 명(children)이면 are를 써요."
    },
    {
      id: "eng-el3-hard-2",
      type: "choice",
      difficulty: 3,
      question: "\"I go to school ___ Monday.\" 빈칸에 알맞은 전치사는?",
      choices: ["in", "on", "at", "under"],
      answer: "on",
      hints: [
        "요일 앞에는 어떤 전치사를 쓸까요?",
        "in the morning, on Monday, at 3 o'clock!"
      ],
      explanation: "요일(Monday, Tuesday 등) 앞에는 'on'을 써요. \"I go to school on Monday.\" (나는 월요일에 학교에 가요.)",
      wrongAnalysis: "in은 아침/오후/저녁에, at은 시각이나 특정 장소에 써요. 요일에는 항상 on!"
    },
    {
      id: "eng-el3-hard-3",
      type: "choice",
      difficulty: 3,
      question: "다음 중 문법적으로 올바른 문장은?",
      choices: [
        "She like cats.",
        "She likes cats.",
        "She liking cats.",
        "She is like cats."
      ],
      answer: "She likes cats.",
      hints: [
        "She(그녀)는 한 명이에요.",
        "he, she, it 다음에 일반 동사가 오면 -s를 붙여요!"
      ],
      explanation: "She/He/It 다음에 일반 동사가 오면 -s를 붙여요! like → likes. \"She likes cats.\"가 맞아요.",
      wrongAnalysis: "She like (✗) → She likes (✓). 3인칭 단수(he/she/it) 주어에서는 동사에 -s를 붙여요."
    },
    {
      id: "eng-el3-hard-4",
      type: "choice",
      difficulty: 3,
      question: "\"They have a dog.\"의 주어를 'He'로 바꾸면?",
      choices: [
        "He have a dog.",
        "He has a dog.",
        "He haves a dog.",
        "He having a dog."
      ],
      answer: "He has a dog.",
      hints: [
        "have도 he/she/it 다음에서는 변해요.",
        "have → has! 특별한 변화예요."
      ],
      explanation: "have는 he/she/it 다음에서 has로 변해요! \"He has a dog.\" (그는 개를 가지고 있어요.)",
      wrongAnalysis: "have → has는 특별한 변화예요. haves는 틀린 표현이에요. have → has를 기억해요!"
    },
    {
      id: "eng-el3-hard-5",
      type: "choice",
      difficulty: 3,
      question: "\"The ball is ___ the box.\" (공이 상자 안에 있어요.) 빈칸에 알맞은 말은?",
      choices: ["on", "under", "in", "next to"],
      answer: "in",
      hints: [
        "'안에'를 나타내는 전치사는?",
        "in은 무언가의 내부를 뜻해요."
      ],
      explanation: "'안에'는 in이에요. \"The ball is in the box.\"는 '공이 상자 안에 있어요.'라는 뜻이에요.",
      wrongAnalysis: "on(위에), under(아래에), next to(옆에)는 모두 '안에'가 아니에요. 안에는 in!"
    },
    {
      id: "eng-el3-hard-6",
      type: "choice",
      difficulty: 3,
      question: "\"It's five o'clock ___ the afternoon.\" 빈칸에 알맞은 말은?",
      choices: ["on", "in", "at", "to"],
      answer: "in",
      hints: [
        "afternoon(오후) 앞에는 어떤 전치사를 쓸까요?",
        "morning, afternoon, evening 앞에는 같은 전치사를 써요!"
      ],
      explanation: "morning, afternoon, evening 앞에는 'in'을 써요! \"in the afternoon\" (오후에)",
      wrongAnalysis: "at은 시각(at five o'clock)에, on은 요일에, in은 아침/오후/저녁에 써요. afternoon 앞에는 in!"
    },
    {
      id: "eng-el3-hard-7",
      type: "choice",
      difficulty: 3,
      question: "다음 중 올바른 영어 문장은?",
      choices: [
        "I am like pizza.",
        "I like pizza.",
        "I is like pizza.",
        "I likes pizza."
      ],
      answer: "I like pizza.",
      hints: [
        "'좋아하다'를 말할 때 am/is/are가 필요할까요?",
        "I like ~ 는 '나는 ~을 좋아해요'예요."
      ],
      explanation: "'좋아해요'는 'I like ~'예요. am을 넣으면 안 돼요! \"I am like\"는 \"나는 ~와 비슷해요\"라는 다른 뜻이 돼요.",
      wrongAnalysis: "I like(좋아하다) ≠ I am like(~와 비슷하다). like 앞에 am/is/are를 넣으면 뜻이 달라져요!"
    },
    {
      id: "eng-el3-hard-8",
      type: "choice",
      difficulty: 3,
      question: "\"Good evening!\"은 언제 하는 인사일까요?",
      choices: [
        "아침에 만났을 때",
        "점심에 만났을 때",
        "저녁에 만났을 때",
        "잠자러 갈 때"
      ],
      answer: "저녁에 만났을 때",
      hints: [
        "evening은 '저녁'이에요.",
        "Good morning(아침), Good afternoon(오후), Good evening(저녁)!"
      ],
      explanation: "Good evening!은 저녁에 만났을 때 하는 인사예요. 잠자러 갈 때는 'Good night!'이에요.",
      wrongAnalysis: "Good evening(저녁 인사) ≠ Good night(잠자리 인사). 만날 때는 Good evening, 잠잘 때는 Good night!"
    },
    {
      id: "eng-el3-hard-9",
      type: "choice",
      difficulty: 3,
      question: "\"We ___ students.\" 빈칸에 알맞은 말은?",
      choices: ["am", "is", "are", "has"],
      answer: "are",
      hints: [
        "We는 '우리'예요. 여러 명이에요.",
        "We 다음에는 어떤 be 동사가 올까요?"
      ],
      explanation: "We(우리) 다음에는 'are'를 써요. \"We are students.\" (우리는 학생들이에요.)",
      wrongAnalysis: "I → am, He/She/It → is, We/You/They → are. We는 항상 are와 짝이에요."
    },
    {
      id: "eng-el3-hard-10",
      type: "choice",
      difficulty: 3,
      question: "다음 대화에서 빈칸에 알맞은 말은?\n\nA: \"Do you like apples?\"\nB: \"No, I ___.\"",
      choices: ["do", "don't", "am not", "isn't"],
      answer: "don't",
      hints: [
        "\"Do you ~?\"로 물으면 \"Yes, I do.\" 또는 \"No, I don't.\"로 대답해요.",
        "Do로 물었으니 do로 대답!"
      ],
      explanation: "\"Do you ~?\"라고 물으면 \"Yes, I do.\" 또는 \"No, I don't.\"로 대답해요. Do 질문에는 do로 대답!",
      wrongAnalysis: "am not, isn't는 be 동사의 부정이에요. like(좋아하다)의 질문에는 do/don't로 대답해요."
    }
  ],
  summary: {
    keyPoints: [
      "He/She/It 다음에 일반 동사가 오면 -s를 붙여요 (likes, has).",
      "요일 → on, 아침/오후/저녁 → in, 시각 → at",
      "I like(좋아해요) ≠ I am like(비슷해요). 구별해야 해요!"
    ],
    formulas: [
      "She likes / He has (3인칭 단수 -s)",
      "on Monday / in the morning / at 3 o'clock",
      "Do you ~? → Yes, I do. / No, I don't."
    ],
    commonMistakes: [
      "She like (✗) → She likes (✓)",
      "He have (✗) → He has (✓)",
      "Good evening(저녁 인사) ≠ Good night(잠자리 인사)"
    ],
    nextConnection: "문법 규칙을 잘 익히면 더 복잡한 영어 문장도 자신 있게 만들 수 있어요!"
  }
}
];
