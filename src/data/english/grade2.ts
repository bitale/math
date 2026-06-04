import { Lesson } from "../../types";

export const engGrade2Lessons: Lesson[] = [
{
  id: 1013,
  title: "음식과 음료를 영어로 말해요",
  category: "영어 2학년",
  level: "기초",
  question: "음식과 음료를 영어로 어떻게 말할 수 있을까요?",
  concept: {
    intro: "맛있는 음식과 음료를 영어로 배워 봐요!\n\n우리가 매일 먹고 마시는 것들을 영어로 말할 수 있으면 외국 식당에서도 주문할 수 있어요.\n\n:::note[기억해요!]\n- milk (밀크) = 우유\n- bread (브레드) = 빵\n- water (워터) = 물\n- rice (라이스) = 밥\n- juice (주스) = 주스\n:::\n\n먹을 때마다 영어 이름을 말해 보세요!",
    intuition: "아침에 일어나면 'milk'(우유)를 마시고 'bread'(빵)를 먹어요. 목이 마르면 'water'(물)을 마셔요. 점심에는 'rice'(밥)를 먹고, 간식으로 'juice'(주스)를 마셔요. 매일 먹는 것들이니까 영어로 쉽게 외울 수 있어요!",
    formula: "milk = 우유\nbread = 빵\nwater = 물\nrice = 밥\njuice = 주스",
    summary: ":::note[핵심 정리]\n음식과 음료를 영어로 말할 수 있어요! milk(우유), bread(빵), water(물), rice(밥), juice(주스)를 기억해요.\n:::"
  },
  examples: [
    {
      title: "아침 식사",
      problem: "아침에 우유를 마시고 빵을 먹어요. 영어로 말해 봐요.",
      steps: [
        "우유는 영어로 'milk'예요. '밀크'라고 읽어요.",
        "빵은 영어로 'bread'예요. '브레드'라고 읽어요.",
        "\"I drink milk.\" (나는 우유를 마셔요.)",
        "\"I eat bread.\" (나는 빵을 먹어요.)"
      ],
      answer: "우유는 'milk', 빵은 'bread'예요.",
      lesson: "마시는 것에는 'drink'를, 먹는 것에는 'eat'를 사용해요!"
    },
    {
      title: "목이 마를 때",
      problem: "운동 후 목이 말라요. '물'을 영어로 말해 봐요.",
      steps: [
        "물은 영어로 'water'예요.",
        "'water'는 '워터'라고 읽어요.",
        "\"I want water.\" (나는 물을 원해요.)"
      ],
      answer: "물은 영어로 'water'예요.",
      lesson: "목이 마를 때 'Water, please!'라고 말해 봐요!"
    },
    {
      title: "점심 식사",
      problem: "점심에 밥을 먹어요. '밥'을 영어로 말해 봐요.",
      steps: [
        "밥은 영어로 'rice'예요.",
        "'rice'는 '라이스'라고 읽어요.",
        "\"I eat rice.\" (나는 밥을 먹어요.)"
      ],
      answer: "밥은 영어로 'rice'예요.",
      lesson: "한국 사람들이 매일 먹는 밥은 영어로 'rice'예요!"
    }
  ],
  problems: [
    {
      id: "eng-el2-1-1",
      type: "choice",
      difficulty: 1,
      question: "'milk'의 뜻은 무엇일까요?",
      choices: ["우유", "물", "주스", "콜라"],
      answer: "우유",
      hints: [
        "'밀크'라고 읽어요.",
        "소에서 나오는 하얀 음료예요."
      ],
      explanation: "'milk'는 '우유'라는 뜻이에요. 하얀 색의 영양 가득한 음료예요!",
      wrongAnalysis: "'water'는 물, 'juice'는 주스예요. 'milk'는 우유예요."
    },
    {
      id: "eng-el2-1-2",
      type: "choice",
      difficulty: 1,
      question: "빵을 영어로 뭐라고 할까요?",
      choices: ["bread", "rice", "milk", "juice"],
      answer: "bread",
      hints: [
        "밀가루로 만든 음식이에요.",
        "'브레드'라고 읽어요."
      ],
      explanation: "빵은 영어로 'bread'예요. '브레드'라고 읽어요!",
      wrongAnalysis: "'rice'는 밥이에요. 빵은 'bread'라는 것을 기억해요."
    },
    {
      id: "eng-el2-1-3",
      type: "choice",
      difficulty: 2,
      question: "'water'의 뜻으로 알맞은 것은?",
      choices: ["물", "우유", "빵", "밥"],
      answer: "물",
      hints: [
        "'워터'라고 읽어요.",
        "투명하고 맛이 없는 음료예요."
      ],
      explanation: "'water'는 '물'이라는 뜻이에요. 우리가 매일 마시는 가장 기본적인 음료예요!",
      wrongAnalysis: "'milk'는 우유예요. 투명한 음료인 물은 'water'예요."
    },
    {
      id: "eng-el2-1-4",
      type: "choice",
      difficulty: 2,
      question: "밥을 영어로 뭐라고 할까요?",
      choices: ["rice", "bread", "milk", "water"],
      answer: "rice",
      hints: [
        "한국 사람들이 매일 먹는 주식이에요.",
        "'라이스'라고 읽어요."
      ],
      explanation: "밥은 영어로 'rice'예요. 쌀로 만든 음식을 모두 'rice'라고 해요!",
      wrongAnalysis: "'bread'는 빵이에요. 밥은 'rice'라는 것을 기억해요."
    },
    {
      id: "eng-el2-1-5",
      type: "choice",
      difficulty: 3,
      question: "\"I drink ___ in the morning.\" (나는 아침에 ___를 마셔요.) 빈칸에 알맞은 것은?",
      choices: ["milk", "rice", "bread", "desk"],
      answer: "milk",
      hints: [
        "'drink'는 '마시다'라는 뜻이에요. 마실 수 있는 것을 골라야 해요.",
        "아침에 마시는 하얀 음료를 생각해 봐요."
      ],
      explanation: "'drink'(마시다) 다음에는 마실 수 있는 것이 와야 해요. rice(밥)와 bread(빵)는 먹는 것, desk(책상)는 음식이 아니에요. milk(우유)가 정답이에요!",
      wrongAnalysis: "rice(밥)와 bread(빵)는 마시는 것이 아니라 먹는 것이에요. 마실 수 있는 것은 milk(우유)예요."
    }
  ],
  summary: {
    keyPoints: [
      "milk는 우유, bread는 빵이에요.",
      "water는 물, rice는 밥, juice는 주스예요.",
      "마시는 것에는 'drink', 먹는 것에는 'eat'을 써요."
    ],
    formulas: [
      "milk = 우유",
      "bread = 빵",
      "water = 물",
      "rice = 밥",
      "juice = 주스"
    ],
    commonMistakes: [
      "rice(밥)와 bread(빵)을 헷갈리는 경우가 있어요.",
      "milk(우유)와 water(물)을 혼동하지 않도록 해요."
    ],
    nextConnection: "음식과 음료를 배웠으니, 다음에는 날씨를 영어로 배워 봐요!"
  }
},
{
  id: 1014,
  title: "날씨를 영어로 말해요",
  category: "영어 2학년",
  level: "기초",
  question: "오늘 날씨를 영어로 어떻게 말할 수 있을까요?",
  concept: {
    intro: "오늘 날씨가 어때요? 영어로 말해 봐요!\n\n밖에 나가기 전에 날씨를 확인하죠? 날씨를 영어로 말할 수 있으면 외국 친구에게도 오늘 날씨를 알려 줄 수 있어요.\n\n:::note[기억해요!]\n- sunny (써니) = 맑은\n- rainy (레이니) = 비 오는\n- cloudy (클라우디) = 흐린\n- snowy (스노이) = 눈 오는\n:::\n\n매일 아침 창밖을 보면서 영어로 날씨를 말해 봐요!",
    intuition: "창문 밖을 봐요! 해가 쨍쨍하면 'sunny'! 비가 주룩주룩 오면 'rainy'! 구름이 잔뜩 끼면 'cloudy'! 눈이 펑펑 내리면 'snowy'! 날씨를 보면서 영어로 말하면 재미있어요!",
    formula: "sunny = 맑은, 햇살이 좋은\nrainy = 비 오는\ncloudy = 흐린, 구름이 많은\nsnowy = 눈 오는",
    summary: ":::note[핵심 정리]\n날씨를 영어로 말할 수 있어요! sunny(맑은), rainy(비 오는), cloudy(흐린), snowy(눈 오는)를 기억해요.\n:::"
  },
  examples: [
    {
      title: "맑은 날",
      problem: "오늘 해가 쨍쨍해요. 이 날씨를 영어로 말해 봐요.",
      steps: [
        "해가 나오면 'sunny'라고 해요.",
        "'sunny'는 '써니'라고 읽어요.",
        "\"It's sunny today.\" (오늘은 맑아요.)"
      ],
      answer: "맑은 날씨는 영어로 'sunny'예요.",
      lesson: "해가 나오면 'It's sunny!'라고 말해 봐요!"
    },
    {
      title: "비 오는 날",
      problem: "비가 와서 우산을 써야 해요. 이 날씨를 영어로 말해 봐요.",
      steps: [
        "비가 오면 'rainy'라고 해요.",
        "'rainy'는 '레이니'라고 읽어요.",
        "\"It's rainy today.\" (오늘은 비가 와요.)"
      ],
      answer: "비 오는 날씨는 영어로 'rainy'예요.",
      lesson: "우산을 쓸 때 'It's rainy!'라고 말해 봐요!"
    },
    {
      title: "눈 오는 날",
      problem: "겨울에 눈이 와요. 이 날씨를 영어로 말해 봐요.",
      steps: [
        "눈이 오면 'snowy'라고 해요.",
        "'snowy'는 '스노이'라고 읽어요.",
        "\"It's snowy today.\" (오늘은 눈이 와요.)"
      ],
      answer: "눈 오는 날씨는 영어로 'snowy'예요.",
      lesson: "눈이 오면 'It's snowy!'라고 말해 봐요. 눈사람은 'snowman'이에요!"
    }
  ],
  problems: [
    {
      id: "eng-el2-2-1",
      type: "choice",
      difficulty: 1,
      question: "'sunny'의 뜻은 무엇일까요?",
      choices: ["맑은", "비 오는", "흐린", "눈 오는"],
      answer: "맑은",
      hints: [
        "'써니'라고 읽어요.",
        "'sun'은 '해'라는 뜻이에요. 해가 나오면?"
      ],
      explanation: "'sunny'는 '맑은'이라는 뜻이에요. 'sun'(해)에서 나온 말이에요!",
      wrongAnalysis: "'rainy'는 비 오는, 'cloudy'는 흐린, 'snowy'는 눈 오는 날씨예요."
    },
    {
      id: "eng-el2-2-2",
      type: "choice",
      difficulty: 1,
      question: "비 오는 날씨를 영어로 뭐라고 할까요?",
      choices: ["rainy", "sunny", "snowy", "cloudy"],
      answer: "rainy",
      hints: [
        "'rain'은 '비'라는 뜻이에요.",
        "'레이니'라고 읽어요."
      ],
      explanation: "비 오는 날씨는 영어로 'rainy'예요. 'rain'(비)에서 나온 말이에요!",
      wrongAnalysis: "'snowy'는 눈 오는 날씨예요. 비 오는 날씨는 'rainy'예요."
    },
    {
      id: "eng-el2-2-3",
      type: "choice",
      difficulty: 2,
      question: "'cloudy'의 뜻으로 알맞은 것은?",
      choices: ["흐린", "맑은", "더운", "추운"],
      answer: "흐린",
      hints: [
        "'cloud'는 '구름'이라는 뜻이에요.",
        "구름이 많으면 어떤 날씨일까요?"
      ],
      explanation: "'cloudy'는 '흐린'이라는 뜻이에요. 'cloud'(구름)가 많으면 흐린 날씨예요!",
      wrongAnalysis: "맑은 날은 'sunny'예요. 구름이 많은 흐린 날은 'cloudy'예요."
    },
    {
      id: "eng-el2-2-4",
      type: "choice",
      difficulty: 2,
      question: "눈이 오는 날씨를 영어로 뭐라고 할까요?",
      choices: ["snowy", "rainy", "sunny", "cloudy"],
      answer: "snowy",
      hints: [
        "'snow'는 '눈'이라는 뜻이에요.",
        "'스노이'라고 읽어요."
      ],
      explanation: "눈 오는 날씨는 영어로 'snowy'예요. 'snow'(눈)에서 나온 말이에요!",
      wrongAnalysis: "'rainy'는 비 오는 날씨예요. 눈 오는 날씨는 'snowy'예요."
    },
    {
      id: "eng-el2-2-5",
      type: "choice",
      difficulty: 3,
      question: "\"It's ___. I need an umbrella.\" (___해요. 우산이 필요해요.) 빈칸에 알맞은 말은?",
      choices: ["rainy", "sunny", "snowy", "cloudy"],
      answer: "rainy",
      hints: [
        "우산은 언제 필요한지 생각해 봐요.",
        "하늘에서 물방울이 떨어질 때 우산을 써요."
      ],
      explanation: "우산이 필요한 날씨는 비가 올 때예요! 'rainy'(비 오는)가 정답이에요. \"It's rainy.\"는 '비가 와요.'라는 뜻이에요.",
      wrongAnalysis: "맑은 날(sunny)이나 흐린 날(cloudy)에는 보통 우산이 필요 없어요. 비가 올 때(rainy) 우산을 써요."
    }
  ],
  summary: {
    keyPoints: [
      "sunny는 맑은, rainy는 비 오는 날씨예요.",
      "cloudy는 흐린, snowy는 눈 오는 날씨예요.",
      "\"It's ___ today.\"로 오늘 날씨를 말할 수 있어요."
    ],
    formulas: [
      "sunny = 맑은 (sun + ny)",
      "rainy = 비 오는 (rain + y)",
      "cloudy = 흐린 (cloud + y)",
      "snowy = 눈 오는 (snow + y)"
    ],
    commonMistakes: [
      "rainy(비)와 snowy(눈)를 헷갈리는 경우가 있어요.",
      "cloudy(흐린)는 비가 오는 게 아니라 구름만 많은 거예요."
    ],
    nextConnection: "날씨를 배웠으니, 다음에는 크다, 작다 같은 모양이나 느낌을 나타내는 말을 영어로 배워 봐요!"
  }
},
{
  id: 1015,
  title: "모양과 느낌을 영어로 말해요",
  category: "영어 2학년",
  level: "기초",
  question: "크다, 작다, 기쁘다, 슬프다를 영어로 어떻게 말할까요?",
  concept: {
    intro: "사물의 모양이나 사람의 기분을 영어로 표현해 봐요!\n\n물건의 크기나 사람의 기분을 영어로 말할 수 있으면, 영어로 더 많은 이야기를 할 수 있어요.\n\n:::note[기억해요!]\n- big (빅) = 큰\n- small (스몰) = 작은\n- happy (해피) = 행복한, 기쁜\n- sad (새드) = 슬픈\n- fast (패스트) = 빠른\n- slow (슬로)) = 느린\n:::\n\n이런 말들을 '형용사'라고 해요. 물건이나 사람이 어떤지 설명할 때 사용해요!",
    intuition: "코끼리는 'big'(크다)하고, 개미는 'small'(작다)해요. 선물을 받으면 'happy'(행복하다)하고, 친구가 이사 가면 'sad'(슬프다)해요. 토끼는 'fast'(빠르다)하고, 거북이는 'slow'(느리다)해요. 이렇게 비교하면 쉽게 외울 수 있어요!",
    formula: "big = 큰 (반대: small)\nsmall = 작은 (반대: big)\nhappy = 행복한, 기쁜 (반대: sad)\nsad = 슬픈 (반대: happy)\nfast = 빠른 (반대: slow)\nslow = 느린 (반대: fast)",
    summary: ":::note[핵심 정리]\n형용사를 영어로 말할 수 있어요! big-small, happy-sad, fast-slow처럼 반대말을 함께 외우면 좋아요.\n:::"
  },
  examples: [
    {
      title: "크기를 영어로 말해요",
      problem: "코끼리는 크고 개미는 작아요. 영어로 말해 봐요.",
      steps: [
        "큰 것은 영어로 'big'이에요.",
        "작은 것은 영어로 'small'이에요.",
        "\"The elephant is big.\" (코끼리는 커요.)",
        "\"The ant is small.\" (개미는 작아요.)"
      ],
      answer: "'big'은 크다, 'small'은 작다예요.",
      lesson: "big과 small은 반대말이에요! 함께 외우면 좋아요!"
    },
    {
      title: "기분을 영어로 말해요",
      problem: "생일 파티에서 기뻐요. 영어로 말해 봐요.",
      steps: [
        "기쁜 것은 영어로 'happy'예요.",
        "'happy'는 '해피'라고 읽어요.",
        "\"I am happy.\" (나는 행복해요.)"
      ],
      answer: "'happy'는 행복한, 기쁜이라는 뜻이에요.",
      lesson: "기분이 좋을 때 'I'm happy!'라고 말해 봐요!"
    },
    {
      title: "빠르기를 영어로 말해요",
      problem: "토끼는 빠르고 거북이는 느려요. 영어로 말해 봐요.",
      steps: [
        "빠른 것은 영어로 'fast'예요.",
        "느린 것은 영어로 'slow'예요.",
        "\"The rabbit is fast.\" (토끼는 빨라요.)",
        "\"The turtle is slow.\" (거북이는 느려요.)"
      ],
      answer: "'fast'는 빠른, 'slow'는 느린이라는 뜻이에요.",
      lesson: "fast와 slow는 반대말이에요! 토끼와 거북이를 생각하면 돼요!"
    }
  ],
  problems: [
    {
      id: "eng-el2-3-1",
      type: "choice",
      difficulty: 1,
      question: "'big'의 뜻은 무엇일까요?",
      choices: ["큰", "작은", "빠른", "느린"],
      answer: "큰",
      hints: [
        "'빅'이라고 읽어요.",
        "코끼리처럼 크기가 클 때 쓰는 말이에요."
      ],
      explanation: "'big'은 '큰'이라는 뜻이에요. 크기가 클 때 사용하는 말이에요!",
      wrongAnalysis: "'small'이 작은이에요. 'big'은 큰이라는 것을 기억해요."
    },
    {
      id: "eng-el2-3-2",
      type: "choice",
      difficulty: 1,
      question: "작다를 영어로 뭐라고 할까요?",
      choices: ["small", "big", "sad", "happy"],
      answer: "small",
      hints: [
        "개미처럼 크기가 작을 때 쓰는 말이에요.",
        "'스몰'이라고 읽어요."
      ],
      explanation: "작다는 영어로 'small'이에요. 'big'(크다)의 반대말이에요!",
      wrongAnalysis: "'big'은 크다예요. 작다는 'small'이에요."
    },
    {
      id: "eng-el2-3-3",
      type: "choice",
      difficulty: 2,
      question: "'happy'의 뜻으로 알맞은 것은?",
      choices: ["행복한", "슬픈", "화난", "무서운"],
      answer: "행복한",
      hints: [
        "'해피'라고 읽어요.",
        "생일 파티에서 느끼는 좋은 기분이에요."
      ],
      explanation: "'happy'는 '행복한, 기쁜'이라는 뜻이에요. 기분이 좋을 때 사용해요!",
      wrongAnalysis: "슬픈 것은 'sad'예요. 'happy'는 행복한이에요."
    },
    {
      id: "eng-el2-3-4",
      type: "choice",
      difficulty: 2,
      question: "'sad'의 반대말은 무엇일까요?",
      choices: ["happy", "big", "fast", "slow"],
      answer: "happy",
      hints: [
        "'sad'은 '슬픈'이라는 뜻이에요.",
        "슬픈 것의 반대는 무엇일까요?"
      ],
      explanation: "'sad'(슬픈)의 반대말은 'happy'(행복한)예요! 반대말을 함께 외우면 좋아요.",
      wrongAnalysis: "'big'은 크다의 뜻이라 'sad'의 반대말이 아니에요. 슬픈의 반대는 행복한, 즉 'happy'예요."
    },
    {
      id: "eng-el2-3-5",
      type: "choice",
      difficulty: 3,
      question: "\"The turtle is ___.\" (거북이는 ___.) 빈칸에 가장 알맞은 말은?",
      choices: ["slow", "fast", "big", "happy"],
      answer: "slow",
      hints: [
        "거북이는 어떻게 움직이나요?",
        "토끼와 반대로 천천히 움직여요."
      ],
      explanation: "거북이는 천천히 움직이므로 'slow'(느린)가 알맞아요! 토끼는 'fast'(빠른)이에요.",
      wrongAnalysis: "'fast'는 빠른이에요. 거북이는 느리니까 'slow'가 정답이에요."
    }
  ],
  summary: {
    keyPoints: [
      "big은 큰, small은 작은이에요. 서로 반대말이에요.",
      "happy는 행복한, sad는 슬픈이에요. 서로 반대말이에요.",
      "fast는 빠른, slow는 느린이에요. 서로 반대말이에요."
    ],
    formulas: [
      "big (큰) <-> small (작은)",
      "happy (행복한) <-> sad (슬픈)",
      "fast (빠른) <-> slow (느린)"
    ],
    commonMistakes: [
      "big(큰)과 small(작은)을 헷갈리는 경우가 있어요.",
      "fast(빠른)와 slow(느린)를 바꿔서 기억하지 않도록 해요."
    ],
    nextConnection: "형용사를 배웠으니, 다음에는 위치를 나타내는 전치사를 영어로 배워 봐요!"
  }
},
// ────────────────────────────────────────────
// Lesson 4: 고난도 종합 문제 (Difficulty 3)
// ────────────────────────────────────────────
{
  id: 1032,
  title: "헷갈리는 영어 규칙에 도전!",
  category: "영어 2학년",
  level: "심화",
  question: "불규칙 복수형, 전치사, 헷갈리는 표현을 정확히 사용할 수 있을까요?",
  concept: {
    intro: "영어에는 규칙을 따르지 않는 특별한 단어들이 있어요!\n\n:::note[기억해요!]\n- foot(발) → feet(발 여러 개)\n- child(아이) → children(아이들)\n- in, on, under를 정확히 구별해요!\n:::\n\n이런 어려운 규칙에 도전해 볼까요?",
    intuition: "영어에서는 보통 's'를 붙여서 여러 개를 나타내요 (cat → cats). 하지만 foot → feet, child → children처럼 완전히 달라지는 단어도 있어요. 또 'in(안에)', 'on(위에)', 'under(아래에)' 같은 위치 말도 정확히 알아야 해요!",
    formula: "특별한 복수형:\nfoot → feet (발)\nchild → children (아이)\nman → men (남자)\nwoman → women (여자)\n\n위치: in(안에) / on(위에) / under(아래에)",
    summary: ":::note[핵심 정리]\n불규칙 복수형과 전치사를 정확히 사용하면 영어 표현이 더 자연스러워져요!\n:::"
  },
  examples: [
    {
      title: "foot → feet",
      problem: "발이 두 개이면 영어로 뭐라고 할까요?",
      steps: [
        "발 하나는 foot이에요.",
        "발 두 개는 foots가 아니에요!",
        "foot → feet! 두 발은 'two feet'이에요.",
      ],
      answer: "두 발은 'two feet'이에요!",
      lesson: "foot → feet는 특별한 복수형이에요. foots가 아니에요!"
    },
    {
      title: "in, on, under 구별",
      problem: "공이 상자 안에 있어요. 영어로 말해 봐요.",
      steps: [
        "안에 = in",
        "위에 = on",
        "아래에 = under",
        "상자 안에 = in the box",
      ],
      answer: "\"The ball is in the box.\"",
      lesson: "안에는 in, 위에는 on, 아래에는 under예요!"
    },
    {
      title: "child → children",
      problem: "아이 한 명은 child, 여러 명은?",
      steps: [
        "child는 아이 한 명이에요.",
        "여러 명은 childs가 아니에요!",
        "child → children이에요!",
      ],
      answer: "아이 여러 명은 'children'이에요!",
      lesson: "child → children은 특별한 복수형이에요!"
    }
  ],
  problems: [
    {
      id: "eng-el2-hard-1",
      type: "choice",
      difficulty: 3,
      question: "'foot'의 복수형(여러 개)은 무엇일까요?",
      choices: ["foots", "footes", "feet", "feets"],
      answer: "feet",
      hints: [
        "foot는 특별한 복수형이 있어요.",
        "s를 붙이는 게 아니라 완전히 바뀌어요!"
      ],
      explanation: "foot(발) → feet(발 여러 개)! foots가 아니에요. tooth → teeth처럼 변하는 불규칙 복수형이에요.",
      wrongAnalysis: "foot → feet, tooth → teeth는 비슷한 패턴의 불규칙 복수형이에요. -s를 붙이면 안 돼요."
    },
    {
      id: "eng-el2-hard-2",
      type: "choice",
      difficulty: 3,
      question: "\"The book is ___ the desk.\" (책이 책상 위에 있어요.) 빈칸에 알맞은 말은?",
      choices: ["in", "on", "under", "behind"],
      answer: "on",
      hints: [
        "'위에'를 나타내는 영어 단어는?",
        "책상 표면 위에 놓여 있다는 뜻이에요."
      ],
      explanation: "'위에'는 영어로 'on'이에요. \"The book is on the desk.\"는 '책이 책상 위에 있어요.'라는 뜻이에요.",
      wrongAnalysis: "in은 안에, on은 위에, under는 아래에예요. 책상 위에 있으니까 on이 맞아요."
    },
    {
      id: "eng-el2-hard-3",
      type: "choice",
      difficulty: 3,
      question: "child(아이)가 여러 명이면?",
      choices: ["childs", "childes", "children", "childrens"],
      answer: "children",
      hints: [
        "child도 특별한 복수형이에요.",
        "s를 붙이는 게 아니라 뒷부분이 변해요!"
      ],
      explanation: "child(아이 한 명) → children(아이 여러 명)! childs가 아니에요. childrens도 틀려요!",
      wrongAnalysis: "child → children으로 바뀌어요. children에 다시 s를 붙인 childrens도 틀린 표현이에요."
    },
    {
      id: "eng-el2-hard-4",
      type: "choice",
      difficulty: 3,
      question: "\"It is ___ today. I need a coat.\" (오늘은 ___. 코트가 필요해요.) 알맞은 날씨는?",
      choices: ["sunny", "rainy", "cold", "cloudy"],
      answer: "cold",
      hints: [
        "코트(coat)는 언제 필요할까요?",
        "추울 때 두꺼운 옷을 입어요!"
      ],
      explanation: "코트가 필요하다는 것은 추운 날씨라는 뜻이에요! cold(추운)가 알맞아요. rainy(비 오는)일 때는 우산이 필요하죠.",
      wrongAnalysis: "sunny(맑은)일 때는 코트가 필요 없어요. rainy(비)일 때는 우산이, cold(추운)일 때는 코트가 필요해요."
    },
    {
      id: "eng-el2-hard-5",
      type: "choice",
      difficulty: 3,
      question: "'fast'의 반대말은 'slow'예요. 그럼 'hot'의 반대말은?",
      choices: ["big", "small", "cold", "warm"],
      answer: "cold",
      hints: [
        "hot은 '뜨겁다'예요.",
        "뜨겁다의 진짜 반대는?"
      ],
      explanation: "hot(뜨거운)의 반대말은 cold(차가운)예요! warm(따뜻한)은 비슷하지만 정확한 반대말은 아니에요.",
      wrongAnalysis: "warm(따뜻한)은 hot의 약한 형태이지 반대말이 아니에요. 정확한 반대는 cold(차가운)예요."
    },
    {
      id: "eng-el2-hard-6",
      type: "choice",
      difficulty: 3,
      question: "고양이가 의자 아래에 숨었어요. 영어로 어떻게 말할까요?",
      choices: [
        "The cat is on the chair.",
        "The cat is in the chair.",
        "The cat is under the chair.",
        "The cat is behind the chair."
      ],
      answer: "The cat is under the chair.",
      hints: [
        "'아래에'를 나타내는 영어 단어는?",
        "under는 '~아래에'라는 뜻이에요."
      ],
      explanation: "'아래에'는 under예요. \"The cat is under the chair.\"는 '고양이가 의자 아래에 있어요.'라는 뜻이에요.",
      wrongAnalysis: "on(위에), in(안에), behind(뒤에)는 모두 다른 위치예요. 아래에는 under!"
    },
    {
      id: "eng-el2-hard-7",
      type: "choice",
      difficulty: 3,
      question: "man(남자) 한 명 → men(남자 여러 명). 그럼 woman(여자) 여러 명은?",
      choices: ["womans", "womens", "women", "womanes"],
      answer: "women",
      hints: [
        "man → men처럼 a가 e로 바뀌어요.",
        "woman에서도 같은 변화가 일어나요!"
      ],
      explanation: "woman(여자 한 명) → women(여자 여러 명)! man → men처럼 a → e로 바뀌어요.",
      wrongAnalysis: "man → men, woman → women은 같은 패턴이에요. -s를 붙이는 게 아니라 a가 e로 바뀌어요."
    },
    {
      id: "eng-el2-hard-8",
      type: "choice",
      difficulty: 3,
      question: "\"I drink water ___ the morning.\" (나는 아침에 물을 마셔요.) 빈칸에 알맞은 말은?",
      choices: ["on", "in", "at", "under"],
      answer: "in",
      hints: [
        "'아침에'는 영어로 'in the morning'이에요.",
        "시간을 말할 때 아침(morning), 오후(afternoon), 저녁(evening)에는 'in'을 써요."
      ],
      explanation: "'아침에'는 'in the morning'이에요. morning, afternoon, evening 앞에는 'in'을 써요!",
      wrongAnalysis: "on은 요일(on Monday)에, at은 시각(at 3 o'clock)에 써요. 아침/오후/저녁에는 in을 써요."
    },
    {
      id: "eng-el2-hard-9",
      type: "choice",
      difficulty: 3,
      question: "다음 중 복수형(여러 개)이 틀린 것은?",
      choices: ["cats", "dogs", "mouses", "books"],
      answer: "mouses",
      hints: [
        "대부분의 단어는 -s를 붙이면 돼요.",
        "하지만 mouse는 특별해요! 복수형이 뭐였죠?"
      ],
      explanation: "cats, dogs, books는 -s를 붙여서 맞지만, mouses는 틀려요! mouse → mice가 맞아요.",
      wrongAnalysis: "mouse → mice는 불규칙 복수형이에요. mouses라고 쓰면 안 돼요!"
    },
    {
      id: "eng-el2-hard-10",
      type: "choice",
      difficulty: 3,
      question: "\"The ___ is slow, but the rabbit is fast.\" 빈칸에 알맞은 동물은?",
      choices: ["cat", "turtle", "dog", "bird"],
      answer: "turtle",
      hints: [
        "느린(slow) 동물은 무엇일까요?",
        "토끼와 반대로 아주 천천히 움직이는 동물이에요."
      ],
      explanation: "거북이(turtle)는 느리고(slow) 토끼(rabbit)는 빨라요(fast)! 이솝우화의 토끼와 거북이를 떠올려 봐요.",
      wrongAnalysis: "cat(고양이), dog(강아지), bird(새)는 다 비교적 빨라요. 느린 동물의 대표는 turtle(거북이)이에요."
    }
  ],
  summary: {
    keyPoints: [
      "foot → feet, child → children, man → men, woman → women은 특별한 복수형이에요.",
      "in(안에), on(위에), under(아래에)를 정확히 구별해요.",
      "시간 표현: in the morning, in the afternoon, in the evening"
    ],
    formulas: [
      "foot → feet, child → children",
      "man → men, woman → women",
      "in(안에/아침에), on(위에/요일에), under(아래에)"
    ],
    commonMistakes: [
      "foots (✗) → feet (✓)",
      "childs (✗) → children (✓)",
      "mouses (✗) → mice (✓)"
    ],
    nextConnection: "불규칙 복수형과 전치사를 배웠으니, 더 다양한 영어 문장을 만들어 봐요!"
  }
}
];
