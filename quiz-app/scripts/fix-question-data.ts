import { readFileSync, writeFileSync } from "node:fs";

type Replacement = {
  file: string;
  from: string;
  to: string;
};

const root = "C:/Users/USER/Desktop/project/math/src/data";

const replacements: Replacement[] = [
  {
    file: "english/grade5.ts",
    from: `      "question": "다음 빈칸에 공통으로 들어갈 수 없는 것은?\\n\\n\\"Mt. Everest is the ___ mountain in the world.\\"\\n\\"A cheetah is ___ than a horse.\\"",
      "choices": [
        "high",
        "highest / faster",
        "tallest / quicker",
        "biggest / stronger"
      ],
      "answer": "high",
      "hints": [
        "첫 문장은 최상급, 두 번째 문장은 비교급이 필요해요.",
        "하나의 원형 단어로 두 빈칸을 모두 채울 수 있을까요?"
      ],`,
    to: `      "question": "다음 두 문장의 빈칸에 각각 들어갈 말의 짝으로 알맞지 않은 것은?\\n\\n\\"Mt. Everest is the ___ mountain in the world.\\"\\n\\"A cheetah is ___ than a horse.\\"",
      "choices": [
        "highest / fast",
        "highest / faster",
        "tallest / quicker",
        "biggest / stronger"
      ],
      "answer": "highest / fast",
      "hints": [
        "첫 문장은 최상급, 두 번째 문장은 비교급이 필요해요.",
        "than이 있으면 비교급(-er 또는 more)이 와야 해요."
      ],`,
  },
  {
    file: "english/grade5.ts",
    from: `      "explanation": "첫 문장에는 최상급이 필요해서 highest/tallest/biggest가 가능해요. 두 번째 문장에는 비교급이 필요해서 faster/quicker/stronger가 가능해요. high는 원급이라 첫 번째 문장에도 두 번째 문장에도 맞지 않아요.",
      "wrongAnalysis": "highest는 최상급, faster는 비교급이에요. 문제에서 두 문장의 문법 형태가 다르다는 점을 확인해야 해요."`,
    to: `      "explanation": "첫 문장은 'the ___ in the world' 구조이므로 최상급 highest가 맞습니다. 두 번째 문장은 than이 있으므로 비교급 faster가 필요합니다. fast는 원급이라 두 번째 빈칸에 맞지 않습니다.",
      "wrongAnalysis": "첫 빈칸은 최상급, 둘째 빈칸은 비교급입니다. highest/faster처럼 두 문장에 맞는 형태를 각각 골라야 합니다."`,
  },
  {
    file: "english/grade6.ts",
    from: `      "question": "다음 중 문법적으로 올바른 문장은?",`,
    to: `      "question": "다음 중 미래 결과를 나타내는 1조건문으로 올바른 문장은?",`,
  },
  {
    file: "english/grade6.ts",
    from: `        "Because / will"`,
    to: `        "Because / are"`,
  },
  {
    file: "english/grade6.ts",
    from: `      wrongAnalysis: "will practice (✗): if절에 will 불가. practiced (✗): 과거 시제 사용. you improve (✗): 결과절에 will 필요."`,
    to: `      wrongAnalysis: "will practice (✗): if절에 will을 쓰지 않습니다. practiced (✗): 과거 시제입니다. you improve는 일반 사실을 말할 때는 가능하지만, 이 문제는 미래 결과를 나타내는 1조건문을 묻고 있으므로 will improve가 필요합니다."`,
  },
  {
    file: "english/grade3.ts",
    from: `They have + 명사 = 그들은 ~을 가지고 있어요\\n  예: They have a dog. (그들은 개를 가지고 있어요.)`,
    to: `They have + 명사 = 그들은 ~이 있어요/키워요\\n  예: They have a dog. (그들은 개를 키워요.)`,
  },
  {
    file: "generalKnowledge/age5.ts",
    from: `question: "펭귄은 어디에서 살까요?"`,
    to: `question: "황제펭귄이 사는 대표적인 곳은 어디일까요?"`,
  },
  {
    file: "generalKnowledge/age5.ts",
    from: `explanation: "펭귄은 남극의 차가운 얼음 위에서 살아요! 수영을 잘해요.",`,
    to: `explanation: "황제펭귄은 남극의 차가운 얼음 위에서 사는 대표적인 펭귄이에요. 모든 펭귄이 남극에 사는 것은 아니지만, 황제펭귄은 남극을 대표해요.",`,
  },
  {
    file: "generalKnowledge/age5.ts",
    from: `question: "씨가 겉에 있는 과일은 무엇일까요?"`,
    to: `question: "겉에 씨처럼 보이는 작은 점이 있는 과일은 무엇일까요?"`,
  },
  {
    file: "generalKnowledge/age5.ts",
    from: `question: "지하철은 어디를 달릴까요?"`,
    to: `question: "이름처럼 지하철은 주로 어디를 달린다고 배울까요?"`,
  },
  {
    file: "generalKnowledge/age6.ts",
    from: `choices: ["가수", "기자(아나운서)", "요리사", "화가"],
        answer: "기자(아나운서)",`,
    to: `choices: ["가수", "아나운서", "기자", "화가"],
        answer: "아나운서",`,
  },
  {
    file: "generalKnowledge/age6.ts",
    from: `question: "뉴스를 전달하는 사람을 무엇이라고 할까요?"`,
    to: `question: "뉴스를 읽어 전달하는 사람을 무엇이라고 할까요?"`,
  },
  {
    file: "generalKnowledge/age7.ts",
    from: `question: "울릉도에서 가장 가까운 다른 섬은 어디일까요?"`,
    to: `question: "울릉도에서 동쪽으로 약 87km 떨어진 우리나라 동쪽 끝 섬은 어디일까요?"`,
  },
  {
    file: "generalKnowledge/age7.ts",
    from: `question: "우리나라에서 벼(쌀)가 가장 많이 나는 지역은 어디일까요?"`,
    to: `question: "우리나라의 대표적인 곡창 지대로 배우는 지역은 어디일까요?"`,
  },
  {
    file: "generalKnowledge/age7.ts",
    from: `question: "비타민 C가 많아서 감기 예방에 좋은 과일은 무엇일까요?"`,
    to: `question: "비타민 C가 많아 건강 유지에 도움이 되는 과일은 무엇일까요?"`,
  },
  {
    file: "generalKnowledge/age8.ts",
    from: `question: "전구를 발명한 사람은 누구일까요?"`,
    to: `question: "실용적인 백열전구를 개발하고 널리 보급한 사람은 누구일까요?"`,
  },
  {
    file: "generalKnowledge/age8.ts",
    from: `question: "증기 기관차를 발명해 산업혁명에 기여한 사람은 누구일까요?"`,
    to: `question: "증기 기관차의 발전과 철도 보급에 크게 기여한 사람은 누구일까요?"`,
  },
  {
    file: "generalKnowledge/age8.ts",
    from: `question: "세균을 없앨 수 있는 백신을 처음 만든 사람은 누구일까요?"`,
    to: `question: "광견병 백신 개발과 세균 연구로 유명한 과학자는 누구일까요?"`,
  },
  {
    file: "generalKnowledge/age8.ts",
    from: `question: "세계 최초의 인쇄된 책으로 알려진 것은 무엇일까요?"`,
    to: `question: "현존하는 세계에서 가장 오래된 금속활자 인쇄본으로 알려진 것은 무엇일까요?"`,
  },
  {
    file: "generalKnowledge/age8.ts",
    from: `question: "아인슈타인이 발견한 유명한 공식은 무엇일까요?"`,
    to: `question: "아인슈타인이 세운 유명한 이론은 무엇일까요?"`,
  },
  {
    file: "generalKnowledge/age8.ts",
    from: `question: "우리나라 최초의 로켓 이름은 무엇일까요?"`,
    to: `question: "대한민국 최초 우주발사체의 이름은 무엇일까요?"`,
  },
  {
    file: "generalKnowledge/age9.ts",
    from: `question: "에스키모(이누이트)가 얼음과 눈으로 만든 전통 집의 이름은?"`,
    to: `question: "이누이트가 얼음과 눈으로 만든 전통 집의 이름은?"`,
  },
  {
    file: "generalKnowledge/age10.ts",
    from: `question: "세계에서 가장 긴 강의 이름은?"`,
    to: `question: "일반 교과서에서 보통 세계에서 가장 긴 강으로 배우는 강의 이름은?"`,
  },
  {
    file: "generalKnowledge/age10.ts",
    from: `question: "세계에서 가장 큰 사막은?"`,
    to: `question: "세계에서 가장 큰 더운 사막은?"`,
  },
  {
    file: "generalKnowledge/age10.ts",
    from: `question: "올림픽은 몇 년마다 열릴까요?"`,
    to: `question: "하계 올림픽은 몇 년마다 열릴까요?"`,
  },
  {
    file: "generalKnowledge/age11.ts",
    from: `question: "대한민국 국회의원 수는 약 몇 명인가요?"`,
    to: `question: "2024년 제22대 국회 기준 대한민국 국회의원 수는 몇 명인가요?"`,
  },
  {
    file: "generalKnowledge/age11.ts",
    from: `choices: ["자율 주행", "원격 조종", "수동 조작", "고정 프로그래밍"],
        answer: "자율 주행",`,
    to: `choices: ["자율 제어", "원격 조종", "수동 조작", "고정 프로그래밍"],
        answer: "자율 제어",`,
  },
  {
    file: "generalKnowledge/age11.ts",
    from: `choices: ["대기와의 마찰 때문에", "태양에 가까워져서", "엔진 과열 때문에", "우주 방사선 때문에"],
        answer: "대기와의 마찰 때문에",`,
    to: `choices: ["대기와 충돌하고 공기가 압축되어서", "태양에 가까워져서", "엔진 과열 때문에", "우주 방사선 때문에"],
        answer: "대기와 충돌하고 공기가 압축되어서",`,
  },
  {
    file: "generalKnowledge/age11.ts",
    from: `choices: ["연소 시 물만 생성되어 친환경적이다", "방사성 물질을 배출한다", "온실가스를 많이 배출한다", "한번 쓰면 재생이 불가능하다"],
        answer: "연소 시 물만 생성되어 친환경적이다",`,
    to: `choices: ["사용 과정의 이산화탄소 배출이 적다", "방사성 물질을 배출한다", "온실가스를 많이 배출한다", "한번 쓰면 재생이 불가능하다"],
        answer: "사용 과정의 이산화탄소 배출이 적다",`,
  },
  {
    file: "generalKnowledge/age11.ts",
    from: `question: "한국 최초의 우주발사체 이름은 무엇인가요?"`,
    to: `question: "한국이 독자 개발한 첫 우주발사체 이름은 무엇인가요?"`,
  },
  {
    file: "generalKnowledge/age12.ts",
    from: `question: "올림픽이 몇 년마다 개최되나요?"`,
    to: `question: "하계 올림픽은 몇 년마다 개최되나요?"`,
  },
  {
    file: "generalKnowledge/age12.ts",
    from: `choices: ["주요 20개국", "20개 기업", "20개 도시", "20가지 의제"],
        answer: "주요 20개국",`,
    to: `choices: ["주요 경제 협의체", "20개 기업", "20개 도시", "20가지 의제"],
        answer: "주요 경제 협의체",`,
  },
  {
    file: "generalKnowledge/age12.ts",
    from: `choices: ["이산화탄소 배출량과 흡수량을 같게 만드는 것", "탄소를 전혀 사용하지 않는 것", "탄소세를 내는 것", "화석연료만 사용하는 것"],
        answer: "이산화탄소 배출량과 흡수량을 같게 만드는 것",`,
    to: `choices: ["온실가스 순배출량을 0으로 만드는 것", "탄소를 전혀 사용하지 않는 것", "탄소세를 내는 것", "화석연료만 사용하는 것"],
        answer: "온실가스 순배출량을 0으로 만드는 것",`,
  },
  {
    file: "generalKnowledge/age12.ts",
    from: `choices: ["지구 평균 기온 상승을 1.5°C 이내로 억제", "모든 공장을 폐쇄", "화석연료 사용을 즉시 금지", "자동차 사용을 전면 금지"],
        answer: "지구 평균 기온 상승을 1.5°C 이내로 억제",`,
    to: `choices: ["2°C보다 훨씬 낮게 유지하고 1.5°C 제한을 위해 노력", "모든 공장을 폐쇄", "화석연료 사용을 즉시 금지", "자동차 사용을 전면 금지"],
        answer: "2°C보다 훨씬 낮게 유지하고 1.5°C 제한을 위해 노력",`,
  },
  {
    file: "generalKnowledge/age12.ts",
    from: `question: "시민의 4대 의무에 해당하는 것은?"`,
    to: `question: "국민의 4대 의무에 해당하는 것은?"`,
  },
];

const optionalReplacements: Replacement[] = [
  {
    file: "english/grade6.ts",
    from: `      "question": "다음 중 미래 결과를 나타내는 1조건문으로 올바른 문장은?",`,
    to: `      "question": "다음 중 미래 결과를 나타내는 1조건문으로 올바른 문장은?",`,
  },
];

let applied = 0;
const missed: Replacement[] = [];

for (const replacement of replacements) {
  const file = `${root}/${replacement.file}`;
  const source = readFileSync(file, "utf8");
  if (!source.includes(replacement.from)) {
    missed.push(replacement);
    continue;
  }
  writeFileSync(file, source.replace(replacement.from, replacement.to), "utf8");
  applied += 1;
}

for (const replacement of optionalReplacements) {
  const file = `${root}/${replacement.file}`;
  const source = readFileSync(file, "utf8");
  if (source.includes(replacement.from)) {
    writeFileSync(file, source.replace(replacement.from, replacement.to), "utf8");
  }
}

console.log(JSON.stringify({ applied, missed: missed.map((item) => item.file) }, null, 2));
