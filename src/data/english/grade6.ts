import { Lesson } from "../../types";

export const engGrade6Lessons: Lesson[] = [
{
  "id": 1025,
  "title": "미래 시제 (Future Tense: will & be going to)",
  "category": "영어 6학년",
  "level": "고급",
  "question": "영어에서 미래에 일어날 일은 어떻게 표현할까요? will과 be going to의 차이를 알아봅시다!",
  "concept": {
    "intro": "영어에서 미래를 표현하는 방법은 크게 두 가지가 있어요.\n\n**1. will + 동사원형**\n- 즉석에서 결정하거나 예측할 때 사용\n- I will help you. (내가 도와줄게.)\n- It will rain tomorrow. (내일 비가 올 거야.)\n\n**2. be going to + 동사원형**\n- 이미 계획한 것이나 확실한 예측을 말할 때 사용\n- I am going to visit my grandma this weekend. (이번 주말에 할머니를 방문할 거야.)\n- Look at those clouds! It is going to rain. (저 구름 좀 봐! 비가 올 거야.)\n\n부정문: will not (won't) / be not going to\n의문문: Will + 주어 ~? / Be + 주어 + going to ~?",
    "intuition": "will과 be going to의 차이를 쉽게 이해해 볼까요?\n\n**will** = 지금 막 결정한 것\n친구: \"I'm hungry.\" (배고파.)\n나: \"I will make you a sandwich.\" (내가 샌드위치 만들어 줄게.) ← 지금 막 결정!\n\n**be going to** = 미리 계획한 것\n\"I am going to study English tonight.\" (오늘 밤에 영어 공부할 거야.) ← 이미 계획함!\n\n또 다른 차이:\n**will** = 개인적인 생각, 추측\n\"I think it will be sunny tomorrow.\" (내일 맑을 것 같아.)\n\n**be going to** = 근거가 있는 예측\n\"Look at those dark clouds. It is going to rain.\" (저 먹구름 봐. 비가 올 거야.) ← 구름이라는 근거!",
    "formula": "will 문장 구조:\n- 긍정: 주어 + will + 동사원형\n- 부정: 주어 + will not(won't) + 동사원형\n- 의문: Will + 주어 + 동사원형?\n\nbe going to 문장 구조:\n- 긍정: 주어 + am/is/are + going to + 동사원형\n- 부정: 주어 + am/is/are + not + going to + 동사원형\n- 의문: Am/Is/Are + 주어 + going to + 동사원형?\n\nbe 동사 선택: I → am, He/She/It → is, We/You/They → are",
    "summary": "미래 시제는 will 또는 be going to로 표현해요. will은 즉석 결정이나 추측에, be going to는 미리 계획한 일이나 근거 있는 예측에 사용합니다. 둘 다 뒤에 동사원형이 와요."
  },
  "examples": [
    {
      "title": "will로 즉석 결정 표현하기",
      "problem": "전화벨이 울리고 있어요. \"내가 받을게!\"를 영어로 말해 보세요.",
      "steps": [
        "지금 막 결정한 것이므로 will을 사용",
        "주어: I",
        "will + 동사원형: will answer",
        "목적어: it (전화를)",
        "완성: I will answer it! 또는 I'll answer it!"
      ],
      "answer": "I'll answer it!",
      "lesson": "지금 이 순간 결정한 것은 will을 사용해요. I will은 줄여서 I'll이라고 자주 써요!"
    },
    {
      "title": "be going to로 계획 표현하기",
      "problem": "\"우리는 이번 여름에 제주도에 갈 거예요.\"를 영어로 써 보세요.",
      "steps": [
        "이미 계획한 것이므로 be going to를 사용",
        "주어: We → are",
        "are going to + 동사원형: are going to visit",
        "장소: Jeju Island",
        "시간: this summer",
        "완성: We are going to visit Jeju Island this summer."
      ],
      "answer": "We are going to visit Jeju Island this summer.",
      "lesson": "미리 계획한 미래의 일은 be going to를 사용해요. 주어에 따라 am/is/are를 맞춰 쓰세요!"
    },
    {
      "title": "미래 부정문 만들기",
      "problem": "\"그녀는 내일 파티에 오지 않을 거예요.\"를 영어로 써 보세요.",
      "steps": [
        "주어: She",
        "will 부정: will not = won't",
        "won't + 동사원형: won't come",
        "장소/시간: to the party tomorrow",
        "완성: She won't come to the party tomorrow."
      ],
      "answer": "She won't come to the party tomorrow.",
      "lesson": "will not의 줄임말은 won't예요. 부정문에서도 will 뒤에 동사원형이 와요!"
    },
    {
      "title": "미래 의문문 만들기",
      "problem": "\"너는 대학교에서 무엇을 공부할 거니?\"를 영어로 물어보세요.",
      "steps": [
        "의문사: What (무엇을)",
        "will 의문문: Will + 주어 + 동사원형",
        "의문사가 있으므로: What + will + 주어 + 동사원형",
        "완성: What will you study in college?"
      ],
      "answer": "What will you study in college?",
      "lesson": "의문사가 있는 미래 의문문은 '의문사 + will + 주어 + 동사원형?' 순서예요!"
    }
  ],
  "problems": [
    {
      "id": "eng-el6-1-1",
      "type": "choice",
      "difficulty": 1,
      "question": "빈칸에 알맞은 말은?\n\n\"I ___ be a scientist when I grow up.\"",
      "choices": [
        "will",
        "am",
        "was",
        "did"
      ],
      "answer": "will",
      "hints": [
        "\"내가 자라면\"은 미래의 일이에요.",
        "미래 시제를 나타내는 조동사는?"
      ],
      "explanation": "\"when I grow up\"(내가 자라면)은 미래의 일이므로 미래 시제 will이 필요합니다. \"I will be a scientist.\" = 나는 과학자가 될 거예요.",
      "wrongAnalysis": "am은 현재, was는 과거, did는 과거 조동사예요. 미래를 나타내려면 will 또는 be going to를 사용해야 해요."
    },
    {
      "id": "eng-el6-1-2",
      "type": "choice",
      "difficulty": 1,
      "question": "빈칸에 알맞은 말은?\n\n\"She ___ going to visit her uncle next Sunday.\"",
      "choices": [
        "is",
        "will",
        "are",
        "am"
      ],
      "answer": "is",
      "hints": [
        "be going to 구조에서 She에 맞는 be 동사는?",
        "She는 3인칭 단수예요."
      ],
      "explanation": "be going to 구조에서 She(3인칭 단수)에 맞는 be 동사는 is입니다. \"She is going to visit her uncle next Sunday.\"",
      "wrongAnalysis": "be going to에서 be 동사는 주어에 맞춰야 해요. I → am, He/She/It → is, We/You/They → are. will은 be going to와 함께 쓰지 않아요."
    },
    {
      "id": "eng-el6-1-3",
      "type": "choice",
      "difficulty": 2,
      "question": "다음 상황에서 가장 자연스러운 표현은?\n\n(친구가 무거운 가방을 들고 있어요. 당신이 도와주기로 합니다.)",
      "choices": [
        "I'll carry your bag.",
        "I'm going to carry your bag.",
        "I carried your bag.",
        "I carry your bag."
      ],
      "answer": "I'll carry your bag.",
      "hints": [
        "지금 이 순간 결정한 것인가요, 아니면 미리 계획한 것인가요?",
        "즉석에서 결정한 것은 will을 사용해요."
      ],
      "explanation": "친구의 상황을 보고 지금 막 도와주기로 결정한 것이므로 will(I'll)이 자연스럽습니다. be going to는 미리 계획한 것에 사용해요.",
      "wrongAnalysis": "be going to는 이미 전부터 계획한 것에 적합해요. 이 상황에서는 지금 막 결정한 것이므로 will이 더 자연스러워요."
    },
    {
      "id": "eng-el6-1-4",
      "type": "choice",
      "difficulty": 2,
      "question": "빈칸에 알맞은 말은?\n\n\"A: Will you come to my birthday party?\nB: Yes, I ___.\"",
      "choices": [
        "will",
        "do",
        "am",
        "going to"
      ],
      "answer": "will",
      "hints": [
        "Will로 물으면 will로 대답해요.",
        "Yes, I will. / No, I won't."
      ],
      "explanation": "Will ~?로 물은 질문에는 will로 대답합니다. \"Yes, I will.\" (네, 갈 거예요.) 또는 \"No, I won't.\" (아니요, 안 갈 거예요.)",
      "wrongAnalysis": "Will로 시작하는 의문문에는 반드시 will로 대답해요. do, am, going to로는 대답할 수 없어요."
    },
    {
      "id": "eng-el6-1-5",
      "type": "choice",
      "difficulty": 3,
      "question": "다음 중 be going to를 사용하는 것이 가장 자연스러운 상황은?",
      "choices": [
        "이미 비행기 표를 사 놓고 여행 계획을 말할 때",
        "갑자기 전화벨이 울려서 받겠다고 할 때",
        "내일 날씨가 어떨지 개인적으로 추측할 때",
        "식당에서 메뉴를 보고 주문을 결정할 때"
      ],
      "answer": "이미 비행기 표를 사 놓고 여행 계획을 말할 때",
      "hints": [
        "be going to는 미리 계획한 일에 사용해요.",
        "즉석에서 결정하는 상황은 will이 자연스러워요."
      ],
      "explanation": "be going to는 이미 계획하고 준비한 것을 말할 때 사용합니다. 비행기 표까지 산 것은 확실한 계획이므로 be going to가 가장 자연스러워요. 나머지는 모두 즉석 결정이나 추측이므로 will이 더 적합해요.",
      "wrongAnalysis": "전화 받기, 날씨 추측, 메뉴 주문은 모두 그 자리에서 결정하는 것이므로 will이 적합해요. be going to는 사전에 계획된 일에 사용합니다."
    }
  ],
  "summary": {
    "keyPoints": [
      "will + 동사원형: 즉석 결정, 개인적 추측, 약속에 사용",
      "be going to + 동사원형: 미리 계획한 일, 근거 있는 예측에 사용",
      "will의 줄임: I'll, you'll, he'll, she'll, we'll, they'll",
      "will의 부정: won't (will not)",
      "be going to의 be 동사: I-am, He/She/It-is, We/You/They-are"
    ],
    "formulas": [
      "will 긍정: 주어 + will + 동사원형",
      "will 부정: 주어 + won't + 동사원형",
      "will 의문: Will + 주어 + 동사원형?",
      "be going to 긍정: 주어 + am/is/are + going to + 동사원형",
      "be going to 부정: 주어 + am/is/are + not + going to + 동사원형"
    ],
    "commonMistakes": [
      "will 뒤에 동사에 -s를 붙이는 실수 (will goes ✗ → will go ✓)",
      "be going to에서 be 동사를 빼먹는 실수 (I going to ✗ → I am going to ✓)",
      "will과 be going to의 상황을 구분하지 못하는 실수",
      "won't를 willn't로 쓰는 실수"
    ],
    "nextConnection": "미래 시제를 잘 익히면 미래진행형(will be ~ing), 시간/조건 부사절(If/When + 현재시제) 같은 고급 표현도 배울 수 있어요!"
  }
},
{
  "id": 1026,
  "title": "조건문 기초 (If-clauses: If + 현재, will + 동사원형)",
  "category": "영어 6학년",
  "level": "고급",
  "question": "\"만약 ~하면, ~할 거야\"라는 조건문을 영어로 어떻게 표현할까요?",
  "concept": {
    "intro": "영어에서 \"만약 ~하면\"은 **if**를 사용해요. 이것을 **조건문(If-clause)**이라고 합니다.\n\n기본 구조: **If + 현재 시제, 주어 + will + 동사원형**\n\n예시:\n- If it rains, I will take an umbrella. (비가 오면, 우산을 가져갈 거야.)\n- If you study hard, you will pass the test. (열심히 공부하면, 시험에 합격할 거야.)\n- If she comes early, we will go together. (그녀가 일찍 오면, 함께 갈 거야.)\n\n주의: if절(조건절)에는 현재 시제를 쓰고, 주절(결과절)에는 will을 써요!\n- If it will rain (✗) → If it rains (✓)",
    "intuition": "조건문은 \"도미노\"와 같아요. 첫 번째 일이 일어나면(if절), 두 번째 일이 따라 일어나요(주절).\n\n도미노 1이 쓰러지면(If it rains) → 도미노 2가 쓰러진다(I will stay home)\n\n재미있는 점: if절은 미래의 일인데도 현재 시제를 써요!\n- If it rains tomorrow (✓) ← 내일 일인데 현재 시제!\n- If it will rain tomorrow (✗) ← will을 쓰면 안 돼요!\n\n이것은 영어의 특별한 규칙이에요. \"~하면\"이라는 조건을 말할 때는 아직 확실하지 않으니까 will을 안 쓰고, 결과를 말할 때만 will을 써요.\n\nif절은 문장 앞에 와도 되고 뒤에 와도 돼요:\n- If it rains, I will stay home. (앞 → 쉼표 필요)\n- I will stay home if it rains. (뒤 → 쉼표 불필요)",
    "formula": "조건문 기본 구조 (1st Conditional):\n\nIf + 주어 + 현재 시제, 주어 + will + 동사원형\n\n- If it rains, I will take an umbrella.\n- If you are kind, people will like you.\n- If he doesn't hurry, he will be late.\n\n순서 바꾸기:\n- 주어 + will + 동사원형 + if + 주어 + 현재 시제\n- I will take an umbrella if it rains.\n\n부정 조건:\n- If you don't study, you won't pass. (공부 안 하면, 합격 못 할 거야.)",
    "summary": "조건문은 'If + 현재 시제, will + 동사원형' 구조예요. if절에는 미래의 일이라도 현재 시제를 쓰고, 결과절에만 will을 써요. if절이 앞에 오면 쉼표를 찍어요."
  },
  "examples": [
    {
      "title": "기본 조건문 만들기",
      "problem": "\"날씨가 좋으면, 우리는 소풍을 갈 거야.\"를 영어로 써 보세요.",
      "steps": [
        "조건(if절): 날씨가 좋으면 → If the weather is nice",
        "결과(주절): 소풍을 갈 거야 → we will go on a picnic",
        "if절이 앞이므로 쉼표 사용",
        "완성: If the weather is nice, we will go on a picnic."
      ],
      "answer": "If the weather is nice, we will go on a picnic.",
      "lesson": "if절에는 현재 시제(is)를, 결과절에는 will을 사용해요!"
    },
    {
      "title": "부정 조건문",
      "problem": "\"서두르지 않으면, 버스를 놓칠 거야.\"를 영어로 써 보세요.",
      "steps": [
        "조건: 서두르지 않으면 → If you don't hurry",
        "결과: 버스를 놓칠 거야 → you will miss the bus",
        "if절의 부정: do not(don't) + 동사원형",
        "완성: If you don't hurry, you will miss the bus."
      ],
      "answer": "If you don't hurry, you will miss the bus.",
      "lesson": "if절의 부정은 don't + 동사원형이에요. if절에서도 will을 쓰지 않아요!"
    },
    {
      "title": "if절을 뒤에 놓기",
      "problem": "\"If I have time, I will read a book.\"의 순서를 바꿔 보세요.",
      "steps": [
        "원래: If I have time, I will read a book.",
        "if절을 뒤로 보내기: I will read a book if I have time.",
        "if절이 뒤에 오면 쉼표를 쓰지 않아요",
        "의미는 완전히 같아요"
      ],
      "answer": "I will read a book if I have time.",
      "lesson": "if절은 앞에 와도 되고 뒤에 와도 돼요. 뒤에 오면 쉼표가 필요 없어요!"
    },
    {
      "title": "조건문 의문문",
      "problem": "\"비가 오면 너는 뭘 할 거니?\"를 영어로 물어보세요.",
      "steps": [
        "의문사: What (무엇을)",
        "주절 의문문: will you do",
        "if절: if it rains",
        "완성: What will you do if it rains?"
      ],
      "answer": "What will you do if it rains?",
      "lesson": "조건문 의문문에서 if절은 보통 뒤에 와요. 의문사 + will + 주어 + 동사원형 + if절 순서예요!"
    }
  ],
  "problems": [
    {
      "id": "eng-el6-2-1",
      "type": "choice",
      "difficulty": 1,
      "question": "빈칸에 알맞은 말은?\n\n\"If it rains, I ___ stay home.\"",
      "choices": [
        "will",
        "am",
        "do",
        "was"
      ],
      "answer": "will",
      "hints": [
        "if절의 결과를 말하는 부분이에요.",
        "미래의 결과를 나타내는 조동사는?"
      ],
      "explanation": "조건문에서 결과절에는 will + 동사원형을 사용합니다. \"If it rains, I will stay home.\" (비가 오면 집에 있을 거야.)",
      "wrongAnalysis": "조건문의 결과절에는 will이 필요해요. am, do, was는 미래 결과를 나타내지 못해요."
    },
    {
      "id": "eng-el6-2-2",
      "type": "choice",
      "difficulty": 1,
      "question": "다음 중 미래 결과를 나타내는 1조건문으로 올바른 문장은?",
      "choices": [
        "If you study hard, you will pass the test.",
        "If you will study hard, you will pass the test.",
        "If you study hard, you pass the test.",
        "If you studied hard, you will pass the test."
      ],
      "answer": "If you study hard, you will pass the test.",
      "hints": [
        "if절에는 어떤 시제를 써야 할까요?",
        "if절에는 현재 시제, 결과절에는 will을 써요."
      ],
      "explanation": "조건문의 기본 구조는 'If + 현재 시제, will + 동사원형'입니다. if절에 will을 쓰거나, 결과절에 will을 빼면 틀려요.",
      "wrongAnalysis": "if절에 will을 쓰는 것은 가장 흔한 실수예요. 미래의 일이라도 if절에서는 현재 시제를 써야 해요."
    },
    {
      "id": "eng-el6-2-3",
      "type": "choice",
      "difficulty": 2,
      "question": "빈칸에 알맞은 말은?\n\n\"If she ___ early, we can go to the movie together.\"",
      "choices": [
        "comes",
        "will come",
        "came",
        "coming"
      ],
      "answer": "comes",
      "hints": [
        "if절에는 어떤 시제를 써야 하나요?",
        "she는 3인칭 단수이므로 동사에 -s가 붙어요."
      ],
      "explanation": "if절에는 현재 시제를 사용합니다. she는 3인칭 단수이므로 come에 -s를 붙여 comes가 됩니다.",
      "wrongAnalysis": "if절에 will come을 쓰면 안 돼요. if절에서는 미래의 일이라도 현재 시제(comes)를 사용해야 합니다."
    },
    {
      "id": "eng-el6-2-4",
      "type": "choice",
      "difficulty": 2,
      "question": "다음 문장을 올바르게 완성하세요.\n\n\"___ you don't eat breakfast, you ___ be hungry at school.\"",
      "choices": [
        "If / will",
        "If / are",
        "When / did",
        "Because / are"
      ],
      "answer": "If / will",
      "hints": [
        "\"~하지 않으면, ~할 것이다\"라는 조건문이에요.",
        "조건절에는 If, 결과절에는 will을 써요."
      ],
      "explanation": "\"만약 아침을 안 먹으면, 학교에서 배가 고플 거야\"는 조건문이므로 If + 현재 시제, will + 동사원형 구조를 써요.",
      "wrongAnalysis": "Because(왜냐하면)는 이유를 나타내지 조건을 나타내지 않아요. When(~할 때)도 가능하지만, 이 문맥에서는 If(만약 ~하면)가 가장 적합해요."
    },
    {
      "id": "eng-el6-2-5",
      "type": "choice",
      "difficulty": 3,
      "question": "다음 대화에서 빈칸에 가장 알맞은 것은?\n\nA: \"What will you do if you find a wallet on the street?\"\nB: \"___\"",
      "choices": [
        "If I find a wallet, I will take it to the police station.",
        "If I will find a wallet, I take it to the police station.",
        "If I found a wallet, I will took it to the police station.",
        "If I find a wallet, I took it to the police station."
      ],
      "answer": "If I find a wallet, I will take it to the police station.",
      "hints": [
        "if절에는 현재 시제, 결과절에는 will + 동사원형을 써요.",
        "find의 현재형은 find, will 뒤에는 take(동사원형)가 와요."
      ],
      "explanation": "올바른 조건문: If + 현재 시제(find), will + 동사원형(take). \"지갑을 발견하면, 경찰서에 가져다줄 거예요.\"",
      "wrongAnalysis": "will find(if절에 will), took(과거형), take without will(will 빠짐) 등은 모두 조건문 구조에 맞지 않아요. if절은 현재 시제, 결과절은 will + 동사원형을 지켜야 해요."
    }
  ],
  "summary": {
    "keyPoints": [
      "조건문 기본 구조: If + 현재 시제, will + 동사원형",
      "if절에는 미래의 일이라도 현재 시제를 사용해요",
      "결과절에는 will + 동사원형을 사용해요",
      "if절이 앞에 오면 쉼표(,)를 찍어요",
      "if절이 뒤에 오면 쉼표가 필요 없어요"
    ],
    "formulas": [
      "If + 현재 시제, 주어 + will + 동사원형",
      "주어 + will + 동사원형 + if + 현재 시제",
      "부정: If + 주어 + don't/doesn't + 동사원형, 주어 + won't + 동사원형"
    ],
    "commonMistakes": [
      "if절에 will을 쓰는 실수 (If it will rain ✗ → If it rains ✓)",
      "결과절에 will을 빼먹는 실수 (you pass ✗ → you will pass ✓)",
      "if절 앞에 올 때 쉼표를 빼먹는 실수",
      "if절에서 3인칭 단수 -s를 빼먹는 실수 (if she come ✗ → if she comes ✓)"
    ],
    "nextConnection": "기본 조건문(1st conditional)을 익히면 가정법(2nd conditional: If I were ~, I would ~) 같은 더 고급 조건문도 배울 수 있어요!"
  }
},
{
  "id": 1027,
  "title": "긴 지문 읽기와 추론 (Long Reading & Inference)",
  "category": "영어 6학년",
  "level": "고급",
  "question": "4~5문장의 영어 지문을 읽고 직접 언급되지 않은 내용까지 추론해 봅시다!",
  "concept": {
    "intro": "6학년 읽기에서는 글에 직접 나온 정보뿐만 아니라 **추론(Inference)**하는 능력이 중요해요.\n\n**추론**이란 글에 직접 쓰여 있지 않지만, 단서들을 모아서 알아내는 것이에요.\n\n예를 들어:\n\"Sarah looked out the window and sighed. The streets were wet and gray. She put her umbrella back in her bag and smiled.\"\n\n직접 나온 정보: 거리가 젖어있고 회색이다. Sarah가 우산을 가방에 넣고 미소 지었다.\n추론: 비가 그쳤다! (우산을 가방에 넣었으니까)\n\n이렇게 글 속 단서를 연결해서 숨겨진 의미를 찾는 것이 추론이에요.",
    "intuition": "추론은 \"탐정의 눈\"으로 글을 읽는 거예요!\n\n탐정은 직접 보지 못한 일도 단서를 통해 알아내죠? 읽기에서의 추론도 마찬가지예요.\n\n단서 + 내가 아는 상식 = 추론\n\n예시:\n\"Tom's eyes were red. He kept yawning during class.\"\n단서: 눈이 빨갛다 + 수업 중에 계속 하품했다\n상식: 잠을 못 자면 눈이 빨개지고 하품을 한다\n추론: Tom은 어젯밤에 잠을 잘 못 잤을 것이다!\n\n추론할 때 주의할 점:\n- 반드시 글의 단서에 근거해야 해요\n- 상상이나 추측만으로 답하면 안 돼요\n- 여러 단서를 연결해서 생각해 보세요",
    "formula": "추론 읽기 전략:\n1. 글을 꼼꼼히 읽고 핵심 단서 찾기\n2. 단서들을 서로 연결하기\n3. 내가 아는 상식과 결합하기\n4. 가장 논리적인 결론 도출하기\n5. 선택지 중 글의 단서로 뒷받침되는 것 고르기\n\n추론 질문 유형:\n- \"이 글에서 알 수 있는 것은?\"\n- \"글쓴이는 어떤 기분일까요?\"\n- \"다음에 무엇이 일어날까요?\"\n- \"이 글의 교훈은 무엇인가요?\"",
    "summary": "추론은 글에 직접 나오지 않은 내용을 단서와 상식을 결합해서 알아내는 것이에요. 글의 감정, 원인, 다음 사건 등을 추론할 때는 반드시 글 속 단서에 근거해야 합니다."
  },
  "examples": [
    {
      "title": "감정 추론하기",
      "problem": "다음 글을 읽고 Jiwoo의 기분을 추론하세요.\n\n\"Jiwoo practiced the piano for three months for the school concert. When she finished playing on stage, everyone stood up and clapped. Her teacher gave her a big smile.\"",
      "steps": [
        "단서 1: 3개월 동안 피아노 연습함",
        "단서 2: 무대에서 연주를 마침",
        "단서 3: 모두가 일어나서 박수침 (기립박수)",
        "단서 4: 선생님이 큰 미소를 지음",
        "추론: Jiwoo는 자랑스럽고 행복했을 것이다"
      ],
      "answer": "Jiwoo는 자랑스럽고 행복했을 것이다. (proud and happy)",
      "lesson": "기립박수와 선생님의 미소는 연주가 훌륭했다는 단서예요. 이 단서들을 모으면 Jiwoo의 감정을 추론할 수 있어요!"
    },
    {
      "title": "상황 추론하기",
      "problem": "다음 글을 읽고 어떤 계절인지 추론하세요.\n\n\"The trees had no leaves. Minho wore a thick jacket and a scarf. He could see his breath in the cold air. The ground was covered with frost.\"",
      "steps": [
        "단서 1: 나무에 잎이 없다",
        "단서 2: 두꺼운 재킷과 목도리를 입었다",
        "단서 3: 차가운 공기에서 입김이 보였다",
        "단서 4: 땅이 서리로 덮여 있다",
        "추론: 겨울이다!"
      ],
      "answer": "겨울 (winter)이다.",
      "lesson": "글에 \"겨울\"이라는 단어가 직접 나오지 않아도, 여러 단서를 모으면 계절을 추론할 수 있어요!"
    },
    {
      "title": "원인 추론하기",
      "problem": "다음 글을 읽고 Yuna가 왜 그런 행동을 했는지 추론하세요.\n\n\"Yuna looked at the clock. It was 8:50 AM. She grabbed her backpack quickly and ran out the door without eating breakfast.\"",
      "steps": [
        "단서 1: 시계를 봤다 → 시간을 확인",
        "단서 2: 8시 50분이다",
        "단서 3: 급히 가방을 챙김",
        "단서 4: 아침도 안 먹고 뛰어나감",
        "상식: 학교는 보통 9시에 시작",
        "추론: 학교에 늦을 것 같아서 서둘렀다"
      ],
      "answer": "학교에 늦을 것 같아서 서둘러 나간 것이다.",
      "lesson": "시간(8:50), 급한 행동(grabbed quickly, ran), 아침 거름 등의 단서를 상식(학교 9시 시작)과 결합하면 원인을 추론할 수 있어요!"
    },
    {
      "title": "다음 사건 추론하기",
      "problem": "다음 글을 읽고 다음에 일어날 일을 추론하세요.\n\n\"The children gathered around the table. There was a big cake with 10 candles on it. Everyone started singing 'Happy Birthday to You.' The birthday girl closed her eyes and took a deep breath.\"",
      "steps": [
        "단서 1: 큰 케이크에 초 10개",
        "단서 2: 생일 축하 노래를 부르기 시작",
        "단서 3: 생일 주인공이 눈을 감음",
        "단서 4: 깊은 숨을 들이쉼",
        "상식: 생일 초를 불기 전에 소원을 빌고 숨을 깊이 쉰다",
        "추론: 소원을 빌고 초를 불 것이다"
      ],
      "answer": "소원을 빌고 생일 케이크의 초를 불 것이다.",
      "lesson": "\"눈을 감고 깊은 숨을 들이쉼\"은 초를 불기 직전의 행동이에요. 이런 행동 단서로 다음 사건을 예측할 수 있어요!"
    }
  ],
  "problems": [
    {
      "id": "eng-el6-3-1",
      "type": "choice",
      "difficulty": 1,
      "question": "다음 글을 읽고 질문에 답하세요.\n\n\"Every morning, Mr. Kim opens the shop at 9 AM. He arranges fresh bread and cakes on the shelves. The whole street smells wonderful. Many people come to buy his bread.\"\n\nMr. Kim의 직업은 무엇일까요?",
      "choices": [
        "빵집 주인 (baker)",
        "선생님 (teacher)",
        "의사 (doctor)",
        "경찰관 (police officer)"
      ],
      "answer": "빵집 주인 (baker)",
      "hints": [
        "Mr. Kim이 하는 일을 잘 보세요: 가게를 열고, 빵과 케이크를 진열해요.",
        "사람들이 그의 빵을 사러 와요."
      ],
      "explanation": "Mr. Kim이 가게를 열고(opens the shop), 신선한 빵과 케이크를 진열하며(arranges fresh bread and cakes), 사람들이 빵을 사러 온다는(come to buy his bread) 단서들을 모으면 빵집 주인임을 추론할 수 있어요.",
      "wrongAnalysis": "글에 직접 '빵집 주인'이라고 나오지 않지만, 빵과 케이크를 진열하고 파는 행동에서 추론할 수 있어요. 단서를 종합하는 연습이 중요해요."
    },
    {
      "id": "eng-el6-3-2",
      "type": "choice",
      "difficulty": 1,
      "question": "다음 글을 읽고 질문에 답하세요.\n\n\"Emma put on her helmet and knee pads. She got on her new skateboard carefully. She fell down twice but got up and tried again. By the end of the day, she could ride without falling.\"\n\nEmma에 대해 알 수 있는 것은?",
      "choices": [
        "포기하지 않고 끈기가 있다",
        "운동을 싫어한다",
        "스케이트보드를 오래 탔다",
        "친구와 함께 탔다"
      ],
      "answer": "포기하지 않고 끈기가 있다",
      "hints": [
        "Emma는 두 번 넘어졌는데 어떻게 했나요?",
        "\"got up and tried again\"이 핵심 단서예요."
      ],
      "explanation": "Emma는 두 번 넘어졌지만 일어나서 다시 시도했고(got up and tried again), 결국 넘어지지 않고 탈 수 있게 되었어요. 이것은 포기하지 않는 끈기를 보여줍니다.",
      "wrongAnalysis": "운동을 싫어한다는 단서가 없고, 오래 탔다거나 친구와 함께 탔다는 내용도 지문에 없어요. 추론은 반드시 글의 단서에 근거해야 해요."
    },
    {
      "id": "eng-el6-3-3",
      "type": "choice",
      "difficulty": 2,
      "question": "다음 글을 읽고 질문에 답하세요.\n\n\"The park was full of people. Children were playing with water guns. Families were sitting on blankets eating watermelon. The sun was shining brightly, and the cicadas were singing loudly in the trees.\"\n\n이 글의 계절은 언제일까요?",
      "choices": [
        "여름 (summer)",
        "봄 (spring)",
        "가을 (fall)",
        "겨울 (winter)"
      ],
      "answer": "여름 (summer)",
      "hints": [
        "물총, 수박, 밝은 햇빛, 매미 소리... 어떤 계절의 특징인가요?",
        "cicadas = 매미"
      ],
      "explanation": "물총 놀이(water guns), 수박(watermelon), 밝은 햇빛(sun shining brightly), 매미(cicadas) 소리는 모두 여름의 특징입니다. 글에 '여름'이라는 단어 없이도 계절을 추론할 수 있어요.",
      "wrongAnalysis": "봄은 꽃, 가을은 낙엽, 겨울은 눈과 관련된 단서가 나와요. 물총, 수박, 매미는 모두 여름을 나타내는 단서예요."
    },
    {
      "id": "eng-el6-3-4",
      "type": "choice",
      "difficulty": 2,
      "question": "다음 글을 읽고 질문에 답하세요.\n\n\"Minsu studied very hard for the math test. He reviewed all the problems and practiced every night. When the teacher returned the tests, Minsu looked at his paper and his face turned bright red. He quickly put the test in his bag.\"\n\nMinsu의 시험 결과를 추론하면?",
      "choices": [
        "결과가 좋지 않았을 것이다",
        "만점을 받았을 것이다",
        "시험을 보지 않았을 것이다",
        "친구에게 보여줬을 것이다"
      ],
      "answer": "결과가 좋지 않았을 것이다",
      "hints": [
        "얼굴이 빨개진 것은 어떤 감정일까요?",
        "시험지를 빨리 가방에 넣은 행동은 무엇을 의미할까요?"
      ],
      "explanation": "열심히 공부했지만 얼굴이 빨개지고(부끄러움/당황) 시험지를 빨리 가방에 숨긴 행동은 결과가 좋지 않았음을 보여줘요. 좋은 결과였다면 기뻐하며 보여줬을 거예요.",
      "wrongAnalysis": "만점을 받았다면 기뻐하며 보여줬을 거예요. 얼굴이 빨개지고(embarrassed) 서둘러 숨기는 행동은 실망스러운 결과에 대한 반응이에요."
    },
    {
      "id": "eng-el6-3-5",
      "type": "choice",
      "difficulty": 3,
      "question": "다음 글을 읽고 질문에 답하세요.\n\n\"Soyoung and Hana were best friends. One day, Soyoung saw Hana talking and laughing with a new student during lunch. Soyoung ate her lunch alone that day. After school, Hana came to Soyoung and said, 'I want you to meet my cousin! She just transferred to our school.' Soyoung felt much better after hearing this.\"\n\nSoyoung이 점심을 혼자 먹은 이유는 무엇이었을까요?",
      "choices": [
        "Hana가 새 친구와 어울리는 것을 보고 서운했기 때문에",
        "배가 아파서 보건실에 있었기 때문에",
        "Hana와 싸웠기 때문에",
        "혼자 먹는 것을 좋아하기 때문에"
      ],
      "answer": "Hana가 새 친구와 어울리는 것을 보고 서운했기 때문에",
      "hints": [
        "Soyoung이 Hana와 새 학생이 웃으며 얘기하는 것을 본 후 어떻게 했나요?",
        "나중에 사촌이라는 걸 알고 나서 기분이 좋아진 이유를 생각해 보세요."
      ],
      "explanation": "Soyoung은 절친 Hana가 다른 학생과 즐겁게 얘기하는 것을 보고 서운함(질투)을 느꼈어요. 그래서 혼자 점심을 먹었죠. 나중에 그 학생이 Hana의 사촌이라는 걸 알고 오해가 풀려 기분이 좋아졌어요.",
      "wrongAnalysis": "배 아픔이나 싸움은 지문에 언급되지 않았어요. 혼자 먹는 걸 좋아한다면 나중에 기분이 좋아질 이유가 없죠. 행동의 변화(혼자 먹음 → 사촌이라는 걸 알고 기분 나아짐)가 핵심 단서예요."
    }
  ],
  "summary": {
    "keyPoints": [
      "추론은 글에 직접 나오지 않은 내용을 단서를 통해 알아내는 것이에요",
      "단서 + 상식 = 추론",
      "감정, 계절, 직업, 원인 등을 추론할 수 있어요",
      "추론은 반드시 글의 단서에 근거해야 해요",
      "상상이나 지문에 없는 정보로 답하면 안 돼요"
    ],
    "formulas": [
      "추론 = 글 속 단서 + 배경지식",
      "감정 추론: 행동과 표정 단서를 연결",
      "상황 추론: 여러 세부 묘사를 종합",
      "원인 추론: 결과로부터 역으로 원인을 찾기"
    ],
    "commonMistakes": [
      "글에 없는 내용을 상상으로 만들어내는 실수",
      "단서 하나만 보고 성급하게 결론 짓는 실수",
      "직접 나온 정보와 추론을 혼동하는 실수",
      "자신의 경험만으로 판단하고 글의 단서를 무시하는 실수"
    ],
    "nextConnection": "추론 능력이 길러지면 글의 주제 파악, 글쓴이의 의도 파악, 비판적 읽기 같은 더 높은 수준의 읽기 능력도 발전시킬 수 있어요!"
  }
},
// ────────────────────────────────────────────
// Lesson 4: 고난도 종합 문제 (Difficulty 3)
// ────────────────────────────────────────────
{
  id: 1036,
  title: "고급 관용 표현과 오류 교정 도전!",
  category: "영어 6학년",
  level: "심화",
  question: "영어 관용 표현, 구동사, 문법 오류 교정, 추론이 필요한 지문을 다룰 수 있을까요?",
  concept: {
    intro: "6학년 심화 영어에서는 관용 표현, 구동사, 문법 오류 찾기, 그리고 추론 독해를 종합적으로 다뤄요.\n\n:::note[기억해요!]\n- 관용 표현은 글자 그대로 해석하면 안 돼요!\n- if절에 will을 쓰지 않아요!\n- will과 be going to의 차이를 정확히 알아야 해요!\n:::\n\n이 모든 것을 정확히 알면 중학교 영어도 자신 있게 할 수 있어요!",
    intuition: "영어 고급 실력을 위해서는 세 가지가 중요해요:\n\n1. 관용 표현 이해: 'break the ice' = 어색한 분위기를 깨다 (얼음을 깬다가 아니에요!)\n2. 문법 오류 교정: 틀린 부분을 찾아 고칠 수 있어야 해요.\n3. 추론 독해: 글에 직접 나오지 않은 내용을 단서로 추론해요.\n\n이 세 가지를 잘하면 영어 상급자예요!",
    formula: "관용 표현:\n- break the ice = 어색한 분위기를 깨다\n- make up one's mind = 결심하다\n- run out of = ~이 다 떨어지다\n- figure out = 알아내다, 이해하다\n- look forward to = ~을 기대하다\n\n조건문 오류:\n- If it will rain (✗) → If it rains (✓)\n- If she will come (✗) → If she comes (✓)",
    summary: ":::note[핵심 정리]\n관용 표현, 문법 오류 교정, 추론 독해를 모두 할 수 있으면 중학교 영어 준비 완료!\n:::"
  },
  examples: [
    {
      title: "관용 표현 이해하기",
      problem: "\"She finally made up her mind.\"는 무슨 뜻일까요?",
      steps: [
        "make up = 만들다 + 위? 아니에요!",
        "make up one's mind = 결심하다, 마음을 정하다",
        "made는 make의 과거형",
        "그녀는 마침내 결심했어요.",
      ],
      answer: "\"그녀는 마침내 결심했어요.\"",
      lesson: "make up one's mind = 결심하다. 글자 그대로 해석하면 안 돼요!"
    },
    {
      title: "조건문 오류 교정",
      problem: "\"If it will rain, I will stay home.\" 틀린 부분은?",
      steps: [
        "if절에는 will을 쓰지 않아요!",
        "if절 → 현재 시제, 결과절 → will",
        "If it will rain (✗) → If it rains (✓)",
        "올바른 문장: If it rains, I will stay home.",
      ],
      answer: "\"If it rains, I will stay home.\"이 맞아요!",
      lesson: "if절에는 미래의 일이라도 현재 시제를 써요! will을 쓰면 안 돼요!"
    },
    {
      title: "추론 독해",
      problem: "\"The streets were empty and dark. Not a single car passed by. Only the sound of crickets could be heard.\" 이때는 언제일까요?",
      steps: [
        "거리가 비어있고 어두움 → 밤",
        "차가 한 대도 지나가지 않음 → 아주 늦은 시간",
        "귀뚜라미 소리만 들림 → 조용한 밤",
        "추론: 깊은 밤(late at night)이에요!",
      ],
      answer: "깊은 밤(late at night)이에요!",
      lesson: "여러 단서(어두움, 빈 거리, 귀뚜라미)를 종합하면 시간을 추론할 수 있어요!"
    }
  ],
  problems: [
    {
      id: "eng-el6-hard-1",
      type: "choice",
      difficulty: 3,
      question: "\"We ran out of milk.\"에서 'ran out of'의 뜻은?",
      choices: [
        "우유를 가지고 달렸다",
        "우유가 다 떨어졌다",
        "우유 밖으로 나갔다",
        "우유를 쏟았다"
      ],
      answer: "우유가 다 떨어졌다",
      hints: [
        "run out of는 하나의 관용 표현이에요.",
        "run(달리다) + out of(밖으로)가 아니라 '~이 다 떨어지다'예요!"
      ],
      explanation: "run out of = ~이 다 떨어지다. \"We ran out of milk.\" = 우유가 다 떨어졌어요. ran은 run의 과거형이에요.",
      wrongAnalysis: "run(달리다)과 run out of(다 떨어지다)는 완전히 다른 의미예요. 관용 표현은 전체를 하나의 뜻으로 외워야 해요."
    },
    {
      id: "eng-el6-hard-2",
      type: "choice",
      difficulty: 3,
      question: "다음 문장에서 틀린 부분을 찾으세요.\n\n\"If she will come tomorrow, we will go to the movies.\"",
      choices: [
        "will come → comes",
        "we will → we are",
        "to the movies → to movies",
        "tomorrow → yesterday"
      ],
      answer: "will come → comes",
      hints: [
        "if절에는 will을 쓸 수 있을까요?",
        "if절에는 현재 시제를 써야 해요!"
      ],
      explanation: "if절에는 will을 쓰지 않아요! \"If she comes tomorrow, we will go to the movies.\" she는 3인칭 단수이므로 comes.",
      wrongAnalysis: "if절에 will을 쓰는 것은 가장 흔한 조건문 실수예요. if절 → 현재 시제, 결과절 → will이 규칙이에요."
    },
    {
      id: "eng-el6-hard-3",
      type: "choice",
      difficulty: 3,
      question: "다음 중 'be going to'를 사용해야 하는 상황은?",
      choices: [
        "갑자기 전화벨이 울려서 받겠다고 할 때",
        "이미 항공권을 예약해 놓고 여행 계획을 말할 때",
        "식당에서 메뉴판을 보고 즉석에서 주문할 때",
        "누가 도와달라고 해서 즉석에서 도와주겠다고 할 때"
      ],
      answer: "이미 항공권을 예약해 놓고 여행 계획을 말할 때",
      hints: [
        "be going to는 미리 계획한 것에 사용해요.",
        "즉석에서 결정한 것은 will이에요."
      ],
      explanation: "be going to는 이미 계획한 일에 사용해요. 항공권까지 예약한 것은 확실한 계획이므로 be going to가 맞아요. 나머지는 모두 즉석 결정이라 will이 적합해요.",
      wrongAnalysis: "will: 즉석 결정(전화 받기, 주문, 도움). be going to: 사전 계획(항공권 예약). 이 차이를 정확히 알아야 해요."
    },
    {
      id: "eng-el6-hard-4",
      type: "choice",
      difficulty: 3,
      question: "\"I can't figure out this math problem.\"에서 'figure out'의 뜻은?",
      choices: [
        "그림을 그리다",
        "숫자를 세다",
        "알아내다, 이해하다",
        "밖으로 나가다"
      ],
      answer: "알아내다, 이해하다",
      hints: [
        "figure out은 구동사예요.",
        "figure(숫자/모양)와 figure out(알아내다)은 다른 뜻이에요!"
      ],
      explanation: "figure out = 알아내다, 이해하다. \"I can't figure out this math problem.\" = 이 수학 문제를 이해할 수 없어요.",
      wrongAnalysis: "figure(숫자/모양)와 figure out(알아내다)은 다른 뜻이에요. 구동사는 전체 의미를 외워야 해요."
    },
    {
      id: "eng-el6-hard-5",
      type: "choice",
      difficulty: 3,
      question: "다음 글을 읽고 추론하세요.\n\n\"The old man sat alone on the park bench. He was holding a small, faded photograph. A tear rolled down his cheek as he whispered a name.\"\n\n노인에 대해 추론할 수 있는 것은?",
      choices: [
        "공원에서 운동을 하고 있다",
        "소중한 사람을 그리워하고 있다",
        "새 사진을 찍고 싶어한다",
        "벤치가 불편하다"
      ],
      answer: "소중한 사람을 그리워하고 있다",
      hints: [
        "바랜 사진, 눈물, 이름을 속삭임... 이 단서들을 연결해 봐요.",
        "faded(바랜) 사진은 오래된 사진이에요."
      ],
      explanation: "바랜(오래된) 사진을 들고, 눈물을 흘리며, 이름을 속삭이는 행동에서 소중한 사람을 그리워하고 있음을 추론할 수 있어요.",
      wrongAnalysis: "여러 단서(faded photograph, tear, whispered a name)를 종합하면 그리움이라는 감정을 추론할 수 있어요. 운동이나 사진 촬영과는 관련 없어요."
    },
    {
      id: "eng-el6-hard-6",
      type: "choice",
      difficulty: 3,
      question: "다음 중 미래 결과를 나타내는 조건문은?",
      choices: [
        "If you will practice, you will improve.",
        "If you practice, you will improve.",
        "If you practiced, you will improve.",
        "If you practice, you improve."
      ],
      answer: "If you practice, you will improve.",
      hints: [
        "if절에는 현재 시제, 결과절에는 will + 동사원형!",
        "if절에 will을 쓰면 안 돼요."
      ],
      explanation: "올바른 조건문: If + 현재 시제, will + 동사원형. \"If you practice, you will improve.\" (연습하면 실력이 나아질 거야.)",
      wrongAnalysis: "will practice (✗): if절에 will을 쓰지 않습니다. practiced (✗): 과거 시제입니다. you improve는 일반 사실을 말할 때는 가능하지만, 이 문제는 미래 결과를 나타내는 1조건문을 묻고 있으므로 will improve가 필요합니다."
    },
    {
      id: "eng-el6-hard-7",
      type: "choice",
      difficulty: 3,
      question: "\"I'm looking forward to the school trip.\"에서 'looking forward to'의 뜻은?",
      choices: [
        "앞을 보고 있다",
        "기대하고 있다",
        "찾고 있다",
        "돌보고 있다"
      ],
      answer: "기대하고 있다",
      hints: [
        "look forward to는 하나의 관용 표현이에요.",
        "forward(앞으로)를 따로 해석하면 안 돼요!"
      ],
      explanation: "look forward to = ~을 기대하다. \"I'm looking forward to the school trip.\" = 나는 수학여행을 기대하고 있어요.",
      wrongAnalysis: "look forward to(기대하다) ≠ look for(찾다) ≠ look after(돌보다). 세 가지를 정확히 구별해야 해요!"
    },
    {
      id: "eng-el6-hard-8",
      type: "choice",
      difficulty: 3,
      question: "다음 대화에서 빈칸에 가장 자연스러운 것은?\n\nA: \"I have a terrible headache.\"\nB: \"___\"",
      choices: [
        "I'm going to get you some medicine.",
        "I'll get you some medicine.",
        "I get you some medicine.",
        "I got you some medicine."
      ],
      answer: "I'll get you some medicine.",
      hints: [
        "A가 두통이 있다고 하자 B가 즉석에서 결정하고 있어요.",
        "즉석에서 결정한 것은 will을 써요!"
      ],
      explanation: "A의 두통을 보고 즉석에서 약을 가져다주겠다고 결정한 것이므로 will(I'll)이 자연스러워요. be going to는 미리 계획한 것에 써요.",
      wrongAnalysis: "be going to: 사전 계획. will(I'll): 즉석 결정. 이 상황은 지금 막 결정한 것이므로 I'll이 맞아요."
    },
    {
      id: "eng-el6-hard-9",
      type: "choice",
      difficulty: 3,
      question: "다음 글을 읽고 답하세요.\n\n\"Every student in the class got their test back. Most students were smiling and showing their scores to friends. But Jake quickly put his test face-down on the desk and didn't say anything.\"\n\nJake의 시험 결과를 추론하면?",
      choices: [
        "아주 좋은 점수를 받았다",
        "좋지 않은 점수를 받았다",
        "아직 시험을 안 봤다",
        "시험지를 잃어버렸다"
      ],
      answer: "좋지 않은 점수를 받았다",
      hints: [
        "다른 학생들은 미소 지으며 점수를 보여줬어요.",
        "Jake는 시험지를 뒤집어 놓고 아무 말도 안 했어요. 왜일까요?"
      ],
      explanation: "다른 학생들은 기뻐하며 보여줬지만, Jake는 시험지를 뒤집어 숨기고 아무 말을 하지 않았어요. 좋은 점수였다면 숨기지 않았을 거예요.",
      wrongAnalysis: "face-down(뒤집어 놓기) + didn't say anything(아무 말 안 함) = 결과를 숨기고 싶은 행동. 이는 좋지 않은 결과에 대한 반응이에요."
    },
    {
      id: "eng-el6-hard-10",
      type: "choice",
      difficulty: 3,
      question: "다음 문장에서 문법적으로 틀린 것은?",
      choices: [
        "If she comes early, we will start.",
        "I will help you if you needs it.",
        "We are going to visit Seoul next week.",
        "He won't come to the party tomorrow."
      ],
      answer: "I will help you if you needs it.",
      hints: [
        "각 문장의 주어와 동사가 맞는지 확인해 봐요.",
        "you 다음에 needs가 올 수 있을까요?"
      ],
      explanation: "you 다음에는 need(동사원형)가 와야 해요. needs는 he/she/it에만 붙어요. 올바른 문장: \"I will help you if you need it.\"",
      wrongAnalysis: "you need (✓) / he needs (✓). you needs (✗). 주어에 맞게 동사 형태를 쓰는 것이 중요해요!"
    }
  ],
  summary: {
    keyPoints: [
      "관용 표현: run out of(다 떨어지다), figure out(알아내다), look forward to(기대하다)",
      "조건문: if절에는 현재 시제! will을 쓰면 안 돼요!",
      "will(즉석 결정) vs be going to(사전 계획) 구별",
      "추론 독해: 여러 단서를 종합해서 숨겨진 의미를 찾아요"
    ],
    formulas: [
      "run out of = 다 떨어지다",
      "figure out = 알아내다",
      "look forward to = 기대하다",
      "If + 현재 시제, will + 동사원형 (조건문)"
    ],
    commonMistakes: [
      "If she will come (✗) → If she comes (✓)",
      "you needs (✗) → you need (✓)",
      "관용 표현을 글자 그대로 해석하는 실수",
      "will과 be going to를 구별하지 못하는 실수"
    ],
    nextConnection: "이 모든 것을 마스터하면 중학교 영어도 자신 있게 시작할 수 있어요!"
  }
}
];
