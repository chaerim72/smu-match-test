const typeCardMap = {
  D: "카드-D.png",
  i: "카드-i.png",
  S: "카드-S.png",
  C: "카드-C.png",
  Di: "카드-Di.png",
  DS: "카드-DS.png",
  DC: "카드-DC.png",
  iS: "카드-iS.png",
  iC: "카드-iC.png",
  SC: "카드-SC.png",
  DiS: "카드-DiS.png",
  DiC: "카드-DiC.png",
  iSC: "카드-iSC.png",
};

const app = document.getElementById("app");

const BLUE = "#3DA9FF";

const professorOptions = [
  "이원제 교수님",
  "유동관 교수님",
  "방경란 교수님",
  "신윤진 교수님",
  "서승연 교수님",
  "손우성 교수님",
  "김한솔 교수님",
  "남정 교수님",
];

const professorImageMap = {
  "이원제 교수님": "이원제-교수님.png",
  "서승연 교수님": "서승연-교수님.png",
  "남정 교수님": "남정-교수님.png",
  "신윤진 교수님": "신윤진-교수님.png",
  "김한솔 교수님": "김한솔-교수님.png",
  "방경란 교수님": "방경란-교수님.png",
  "유동관 교수님": "유동관-교수님.png",
  "손우성 교수님": "손우성-교수님.png",
};

const professorDetails = {
  "이원제 교수님": {
    subtitle: "논리와 완성도를 중시하는 피드백형 교수님",
    D: 25,
    i: 12.5,
    S: 12.5,
    C: 50,
    points: [
      "시각성과 설득력 중심의 완성도 평가",
      "강력한 주도성으로 프로젝트 방향 제시",
      "수업 시간 외에도 피드백 제공",
      "완곡하기보다는 직설적이고 통제적인 성향",
      "결과보다 과정의 논리를 중시",
    ],
  },
  "서승연 교수님": {
    subtitle: "공감과 소통으로 가능성을 이끌어주는 교수님",
    D: 10,
    i: 10,
    S: 45,
    C: 35,
    points: [
      "정서적 페이크메이커",
      "따뜻한 격려와 책임감 있는 지도",
      "편안하고 수평적인 소통 분위기",
      "완성도에 대한 기준 제시와 함께 가이드 제공",
      "강압적인 통제가 전무",
    ],
  },
  "남정 교수님": {
    subtitle: "논리적 분석과 현실적인 조언을 해주시는 교수님",
    D: 40,
    i: 12.5,
    S: 12.5,
    C: 35,
    points: [
      "명확한 이유와 근거 기반의 논리 피드백",
      "시장성과 설득력이 주요 완성도 기준",
      "개별보다는 조별 피드백 선호",
      "학생별 맞춤형 진행",
      "여러 시안 중 최종 선택은 집단에 의해 결정",
    ],
  },
  "신윤진 교수님": {
    subtitle: "학생의 성장을 기다리며 방향을 잡아주는 교수님",
    D: 30,
    i: 10,
    S: 10,
    C: 50,
    points: [
      "상황의 심각성을 알리는 경고성 직설 화법",
      "수동적인 의존성에 대한 엄격한 경계",
      "의도와 눈에 보이는 결과물의 일치성 검증",
      "그룹으로 보완적 피드백을 유도하는 시스템",
      "실전 중심의 완성도 평가",
    ],
  },
  "김한솔 교수님": {
    subtitle: "높은 기준과 피드백으로 완성도를 중요시하는 교수님",
    D: 45,
    i: 35,
    S: 0,
    C: 20,
    points: [
      "가감없는 비판과 직설적 상황 고지",
      "강력한 시장 중심적 설득력 유도",
      "정답을 주지 않고 스스로 정답을 찾게 유도",
      "긴장감 있는 사수 - 부사수 관계",
      "의미 기반의 정교한 시각적 프로세스 요구",
    ],
  },
  "손우성 교수님": {
    subtitle: "강한 추진력과 명확한 기준을 제시하는 교수님",
    D: 50,
    i: 5,
    S: 5,
    C: 40,
    points: [
      "강한 추진력을 지님",
      "명확한 기준과 목표를 중요시",
      "직설적이고 빠른 피드백 제공",
      "논리를 중요하게 생각",
      "학생들에게 현실적인 조언 제공",
    ],
  },
  "방경란 교수님": {
    subtitle: "무드와 감성을 중시하는 교수님",
    D: 15,
    i: 30,
    S: 20,
    C: 35,
    points: [
      "계획된 프로세스 중시",
      "작업 방향을 자유롭게 구성",
      "1:1 개인 피드백을 지속적으로 유지",
      "결과보다는 탐색 과정과 실험을 우선시 함",
      "피드백은 직설적이나 강한 압박과 통제는 적음",
    ],
  },
  "유동관 교수님": {
    subtitle: "무드와 감성을 중시하는 교수님",
    D: 15,
    i: 5,
    S: 30,
    C: 50,
    points: [
      "기초 실력과 기본기를 중요시",
      "개개인에게 세심한 피드백 제공",
      "완성도 향상을 위해 반복적인 수정 요구",
      "성실하게 따라오는 학생 선호",
      "교육 / 지도 중심",
    ],
  },
};

const careerOptions = [
  "브랜드시스템디자인",
  "일러스트레이션",
  "인터랙션디자인",
  "편집디자인",
  "패키지디자인",
  "커뮤니케이션디자인",
  "소셜이노베이션",
];

const professors = [
  { name: "이원제 교수님", D: 25, i: 12.5, S: 12.5, C: 50 },
  { name: "서승연 교수님", D: 10, i: 10, S: 45, C: 35 },
  { name: "남정 교수님", D: 40, i: 12.5, S: 12.5, C: 35 },
  { name: "신윤진 교수님", D: 30, i: 10, S: 10, C: 50 },
  { name: "김한솔 교수님", D: 45, i: 35, S: 0, C: 20 },
  { name: "방경란 교수님", D: 15, i: 30, S: 20, C: 35 },
  { name: "손우성 교수님", D: 50, i: 5, S: 5, C: 40 },
  { name: "유동관 교수님", D: 15, i: 5, S: 30, C: 50 },
];

const careerMap = {
  브랜드시스템디자인: ["이원제 교수님", "남정 교수님"],
  일러스트레이션: ["유동관 교수님"],
  인터랙션디자인: ["손우성 교수님"],
  편집디자인: ["서승연 교수님"],
  패키지디자인: ["신윤진 교수님"],
  커뮤니케이션디자인: ["김한솔 교수님"],
  소셜이노베이션: ["방경란 교수님"],
};

const typeResults = {
  D: {
    name: "컨펌 폭주기관차",
    desc: "목표 중심적이고 빠른 실행을 선호하는 추진형",
    points: [
      "목표가 생기면 빠르게 실행",
      "핵심만 파악하는 효율형",
      "강한 컨셉과 명확한 메시지 선호",
      "결론이 명확한 크리틱, 직설적인 피드백 환영",
      "결과물의 임팩트와 효율을 중요",
      "기록이나 디테일 정리가 부족할 가능성",
    ],
  },
  i: {
    name: "아이디어 뱅크",
    desc: "감각적 가능성이 중요한 아이디어와 표현 중심형",
    points: [
      "아이디어와 감각 중심의 창의형",
      "스토리와 비주얼 컨셉에 강함",
      "자유로운 토론과 열린 수업에서 몰입",
      "칭찬과 확장 제안형 피드백 선호",
      "마감 직전까지 방향이 계속 바뀔 수 있음",
      "팀에 활력을 주는 활력소",
    ],
  },
  S: {
    name: "마감엄수",
    desc: "성실하고 안정적인 협업형",
    points: [
      "안정적인 흐름을 선호하는 페이스 메이커",
      "계획적인 꾸준함과 뚝심 있는 마감 완수",
      "균형감이 필요한 사용자 경험 디자인 특화",
      "팀 내 갈등 중재 및 친절한 피드백 선호",
      "친절하고 단계적인 분위기 선호",
      "수업 구조가 명확해야 안정감을 느낌",
    ],
  },
  C: {
    name: "그리드 집착",
    desc: "논리, 근거, 정확성을 중시하는 분석형",
    points: [
      "논리와 근거, 디테일을 중시하는 분석형",
      "명확한 기준과 이론 중심의 수업 선호",
      "치밀한 리서치와 깊은 고민의 과제 스타일",
      "구조와 시스템 중심의 정보·편집 디자인 특화",
      "시작이 늦거나 결정을 오래 고민할 수 있음",
      "객관적이며 근거 있는 피드백 선호",
    ],
  },
  Di: {
    name: "컨셉질주",
    desc: "추진력과 창의성이 동시에 강한 유형",
    points: [
      "아이디어를 현실로 만드는 추진형",
      "강한 컨셉과 임팩트 추구",
      "표현력과 설득력이 뛰어남",
      "팀을 움직이는 리더형",
      "자신감 넘치는 아이디어 드라이버",
      "아이디어 확장을 열어주는 피드백 선호",
    ],
  },
  DS: {
    name: "팀장본능",
    desc: "책임감 있고 결과를 끝까지 완수하려는 유형",
    points: [
      "목표와 완성도를 중시하는 책임형",
      "계획적이고 안정적인 실행력",
      "신뢰를 주는 성실한 협업가",
      "팀의 마감을 책임지는 관리자형",
      "성실하고 책임감이 강하다",
      "결과물이 다소 안전해질 수 있는 단점",
    ],
  },
  DC: {
    name: "브레인 담당",
    desc: "추진력과 분석력이 강한 전략형",
    points: [
      "문제를 해결하는 전략가형",
      "논리와 효율을 중시함",
      "구조적 사고와 분석에 강함",
      "팀의 방향을 설계하는 리더형",
      "논리적이고 직설적인 피드백 선호",
      "다른 사람들에게 비판적으로 보일 수 있음",
    ],
  },
  iS: {
    name: "스토리텔러",
    desc: "감성과 협업 능력이 좋은 유형",
    points: [
      "감성과 공감 능력이 뛰어남",
      "사람과 경험을 중요하게 생각",
      "따뜻한 협업에 강한 조율자",
      "감성적 스토리텔링에 강점",
      "격려와 방향 제안이 함께 있는 피드백 선호",
      "강한 경쟁이나 압박에는 위축될 수 있음",
    ],
  },
  iC: {
    name: "레퍼런스 수집광",
    desc: "창의성과 분석력을 함께 가진 유형",
    points: [
      "레퍼런스 수집이 취미이자 특기",
      "컨셉과 비주얼을 동시에 고민",
      "아이디어를 논리적으로 정리하는 편",
      '"왜?"라는 질문을 중요하게 생각',
      "섬세하고 생각이 많아 실행 속도 저하 가능성",
      "가능성과 논리적 보완점을 함께한 피드백 선호",
    ],
  },
  SC: {
    name: "완벽주의 마법사",
    desc: "안정성과 정확성을 모두 중시하는 유형",
    points: [
      "계획된 순서대로 움직이는 편",
      "완성도 높은 결과물을 추구",
      "디테일 하나까지 꼼꼼하게 확인",
      "작은 실수도 그냥 지나치지 못함",
      "차분하고 구체적으로 가이드하는 피드백 선호",
      "작업 방향 전환에 대해 시간이 걸림",
    ],
  },
  DiS: {
    name: "발표 무대 체질",
    desc: "창의성과 추진력이 좋은 유형",
    points: [
      "창의적인 아이디어와 추진력이 있는 편",
      "새로운 시도를 좋아하고 실행이 빠름",
      "사람들과 협업하는 과정을 중요하게 생각함",
      "팀 분위기를 밝게 만들고 이끄는 역할에 강함",
      "아이디어가 많아 방향이 자주 바뀔 수 있음",
      "긍정적이고 방향을 잡아주는 피드백 선호",
    ],
  },
  DiC: {
    name: "두뇌 풀가동",
    desc: "논리에 집중하는 유형",
    points: [
      "창의성과 분석력 강점",
      "아이디어를 논리적으로 구조화하는 능력",
      "프로젝트의 방향과 논리를 잡는 역할에 강함",
      "생각이 많아 결정이 늦어질 수 있음",
      "논리에 집중하다 감성 설득이 약해질 가능성",
      "가능성과 보완점을 함께한 피드백을 선호함",
    ],
  },
  iSC: {
    name: "마감캐리",
    desc: "자유로움과 체계성이 공존하는 유형",
    points: [
      "자유로움과 체계성이 함께 있어야 몰입",
      "선택지가 많으면 결정이 늦어질 수 있음",
      "격려와 구체적 개선 방향이 지닌 피드백 선호",
      "다른 사람의 의견을 잘 수용",
      "자유로움과 체계성이 적절히 공존 시 집중",
      "팀원과 협력해 결과물을 만드는 데에 강함",
    ],
  },
};

const questions = [
  {
    title: "졸업전시 주제를 최종 선정할 때 내가 가장 중요하게 생각하는 기준은?",
    highlight: "가장 중요",
    boldHighlight: "주제를 최종 선정",
    options: [
      { text: "남들이 하지 않은 과감하고 도전적인 주제인가?", type: "D" },
      {
        text: "내 개성과 아이디어를 마음껏 뽐낼 수 있는 주제인가?",
        type: "i",
      },
      {
        text: "지치지 않고 안정적으로 완성도 있게 끌고 갈 수 있는 주제인가?",
        type: "S",
      },
      {
        text: "철저한 리서치와 데이터 분석을 통해 논리적 명분이 확실한 주제인가?",
        type: "C",
      },
    ],
  },
  {
    title: "졸전 프로세스 중 내가 가장 자신 있고 몰입하는 단계는?",
    highlight: "자신 있고 몰입하는 단계",
    boldHighlight: "프로세스",
    options: [
      {
        text: "메인 비주얼을 확정 짓고 빠르게 결과물을 뽑아내는 실행 단계",
        type: "D",
      },
      {
        text: "아이디어를 발상하고 콘셉트와 스토리를 기획하는 초기 단계",
        type: "i",
      },
      {
        text: "타임라인에 맞춰 계획대로 꼼꼼하게 완성도를 높이는 마무리 단계",
        type: "S",
      },
      {
        text: "그리드를 맞추고, 폰트 시스템을 설계하고 디테일을 교정하는 정밀 작업 단계",
        type: "C",
      },
    ],
  },
  {
    title:
      "교수님이 내 시안에 대해 방향성이 모호하니 전면 수정하라고 하셨을 때 나의 반응은?",
    highlight: "전면 수정",
    boldHighlight: ["방향성이 모호하니", "하라고"],
    options: [
      {
        text: "교수님의 지적 중 핵심만 빠르게 파악해 완전히 새로운 대안(B안)을 과감히 치고 나간다.",
        type: "D",
      },
      {
        text: "교수님과 대화를 통해 내 아이디어를 더 매력적으로 설득할 방법을 찾는다.",
        type: "i",
      },
      {
        text: " 멘탈이 흔들리지만, 우선 교수님이 말씀하신 가이드라인을 중심으로 차근차근 수정 계획을 세운다.",
        type: "S",
      },
      {
        text: "교수님이 왜 그렇게 판단하셨는지 출처나 리서치 자료 등 논리적 근거를 치밀하게 분석한다.",
        type: "C",
      },
    ],
  },
  {
    title: "졸업작품을 진행할 때 내가 가장 선호하는 작업 스타일과 분야는?",
    highlight: ["작업 스타일", "분야"],
    boldHighlight: "내가 가장 선호하는",
    options: [
      {
        text: "브랜드 아이덴티티나 공간처럼 큰 틀을 짜고 빠르게 실행에 옮기는 작업",
        type: "D",
      },
      {
        text: "영상, 미디어, 인터랙티브 등 시각적인 실험과 스토리텔링이 중요한 작업",
        type: "i",
      },
      {
        text: "패키지나 서비스 기획처럼 사용자의 정서적 경험과 조화가 중요한 작업",
        type: "S",
      },
      {
        text: "타이포그래피, 편집 디자인처럼 정교한 레이아웃과 데이터 시스템 설계가 필요한 작업",
        type: "C",
      },
    ],
  },
  {
    title: "크리틱 강의 시간에 내가 가장 선호하는 교수님의 피드백 스타일은?",
    highlight: "피드백 스타일",
    boldHighlight: ["크리틱", "가장 선호하는 교수님의"],
    options: [
      {
        text: '"이건 빼고 A안으로 밀고 가라"처럼 명확한 결론과 방향을 주는 스타일',
        type: "D",
      },
      {
        text: '"아이디어가 참 참신하다!"라며 칭찬과 함께 열린 가능성을 열어주는 스타일',
        type: "i",
      },
      {
        text: '“지금까지 잘해왔으니까 조금만 더 힘내자"라는 다정한 격려와 공감',
        type: "S",
      },
      {
        text: '"타깃 분석 데이터와 시각 결과물이 일치하지 않아"처럼 객관적인 수치와 이론적 근거를 짚어주는 스타일',
        type: "C",
      },
    ],
  },
  {
    title:
      "졸전 심사가 다가와 극심한 스트레스를 받을 때 나에게 가장 위로가 되는 소통은?",
    highlight: "가장 위로가 되는 소통",
    boldHighlight: "극심한 스트레스를 받을 때",
    options: [
      {
        text: '"너 속도면 마감 전에 무조건 끝내고도 남는다"는 효율성에 대한 확신',
        type: "D",
      },
      {
        text: '"네 작품 전시장에 걸리면 진짜 주목받을 거야"라는 결과물에 대한 기대와 인정',
        type: "i",
      },
      {
        text: '"지금까지 잘 해왔고, 남은 건 차근차근 정리하면 돼"라는 과정에 대한 인정과 안정적인 격려',
        type: "S",
      },
      {
        text: '“통과 기준인 이 3가지만 완벽히 보완하면 탈락할 확률은 제로야"라는 명확한 분석',
        type: "C",
      },
    ],
  },
  {
    title: "교수님과의 크리틱 약속이나 소통 방식을 선택할 수 있다면?",
    highlight: "선택",
    boldHighlight: ["크리틱 약속", "소통 방식"],
    options: [
      {
        text: "정해진 시간 외에도 급한 시안이 나오면 피드백을 빠르게 주고받는 역동적인 방식",
        type: "D",
      },
      {
        text: "크리틱 중간중간 편하게 농담도 주고받으며 유연하고 캐주얼하게 진행되는 방식",
        type: "i",
      },
      {
        text: "매주 정해진 요일과 시간에 규칙적으로 진행되며 중간에 변수가 없는 안정적인 방식",
        type: "S",
      },
      {
        text: "구글 드라이브나 노션 등을 통해 텍스트로 명확한 피드백 기록을 남기며 진행하는 방식",
        type: "C",
      },
    ],
  },
  {
    title: "내가 생각하는 가장 최악의 교수님 크리틱 스타일은?",
    highlight: "최악의 교수님 크리틱",
    boldHighlight: ["가장", "스타일"],
    options: [
      {
        text: '"일단 다 해와 봐"라며 결론을 내리지 않고 질질 끌며 내 시간을 낭비하게 만드는 것',
        type: "D",
      },
      {
        text: '"이건 좀 지루하네"라며 내 창의적인 아이디어나 콘셉트를 무시하고 기를 죽이는 것',
        type: "i",
      },
      {
        text: '"다음 주까지 시안 완전히 엎고 새로 해와"라며 예고 없이 계획을 전면 수정하라는 것',
        type: "S",
      },
      {
        text: '"이건 그냥 별로야"라며 명확한 이유나 논리적 근거 없이 감정적으로 지적하는 것',
        type: "C",
      },
    ],
  },
  {
    title: "팀플에서 의견 충돌이 발생했을 때 나는?",
    highlight: "의견 충돌이 발생",
    boldHighlight: "팀플",
    options: [
      {
        text: "감정 소모하며 시간 끌지 않고, 빠르게 결론을 내려서 다음 실행 단계로 방향을 정한다.",
        type: "D",
      },
      {
        text: '"일단 다들 진정하고!"라며 모두의 이야기를 들어주고, 팀 분위기가 상하지 않게 부드럽게 조율한다.',
        type: "i",
      },
      {
        text: "서로 얼굴 붉히는 상황 자체가 불편하므로, 팀원들이 모두 상처받지 않고 수용할 수 있는 합의점을 찾는다.",
        type: "S",
      },
      {
        text: "충돌하는 의견들의 현실적인 실현 가능성과 데이터 유효성을 철저히 따져본다.",
        type: "C",
      },
    ],
  },
  {
    title:
      "공동 프로젝트나 활동에서 내가 가장 자연스럽고 자주 맡게 되는 역할은?",
    highlight: "자주 맡게 되는 역할",
    boldHighlight: "공동 프로젝트나 활동",
    options: [
      {
        text: "전체적인 진행 상황을 장악하고 결단력을 발휘하는 팀장, 프로젝트 리더",
        type: "D",
      },
      {
        text: "메인 콘셉트를 던지고 화려하게 무대를 여는 크리에이티브 발표자, 아이디어 제안자",
        type: "i",
      },
      {
        text: " 묵묵히 타임라인을 챙기고 펑크 난 곳을 메우는 일정 관리 및 실무·서포트 담당",
        type: "S",
      },
      {
        text: "그리드 엇나간 것과 텍스트 오타를 잡아내며 퀄리티를 높이는 자료 조사 및 품질 검수 담당",
        type: "C",
      },
    ],
  },
  {
    title: "디자인 결과물의 지향점에 대한 나의 가치관은?",
    highlight: "나의 가치관",
    boldHighlight: "디자인 결과물의 지향점",
    options: [
      {
        text: "실무에서 바로 쓰일 수 있는, 대중적이고 시장성이 높은 '기업가적 디자인'이 정답이다.",
        type: "D",
      },
      {
        text: "시장성보다는 내 실험적인 시도와 개성이 듬뿍 담긴 '작가적 디자인'이 더 가치 있다.",
        type: "i",
      },
      {
        text: "주변 사람들에게 선한 영향력을 주거나 일상의 문제를 조화롭게 해결하는 디자인이 좋다.",
        type: "S",
      },
      {
        text: "소비자의 시선과 문제 해결, 차별화 포인트를 논리적으로 촘촘하게 설계한 디자인이 맞다.",
        type: "C",
      },
    ],
  },
  {
    title: "크리틱 도중 교수님에게 강한 지적을 받았을 때 나의 정서적 멘탈은?",
    highlight: "정서적 멘탈",
    boldHighlight: "강한 지적",
    options: [
      {
        text: '"성장에 필요한 채찍질일 뿐"이라며 감정을 분리하고, 지적받은 결과물을 갈아엎을 전투력을 얻는다.',
        type: "D",
      },
      {
        text: "순간적으로 기가 죽고 상처를 받지만, 맛있는 걸 먹거나 동기들과 수다를 떨며 금방 회복하는 편이다.",
        type: "i",
      },
      {
        text: '"나를 싫어하시나? 나랑 안 맞나?" 하는 생각이 머릿속을 떠나지 않아 다음 작업을 시작하기가 두렵다.',
        type: "S",
      },
      {
        text: "교수님의 피드백에 논리적 근거가 부족하다고 느껴지면 속으로 납득이 안 돼 답답하다.",
        type: "C",
      },
    ],
  },
  {
    title: "내 작업이 막혀서 진도가 전혀 안 나갈 때, 내가 선택하는 행동은?",
    highlight: "선택하는 행동",
    boldHighlight: "진도가 전혀 안 나갈 때",
    options: [
      {
        text: "완벽하지 않은 상태라도 상관없으니, 일단 메일이나 톡으로 교수님께 바로 연락해 빠른 피드백을 요구한다.",
        type: "D",
      },
      {
        text: "동기들과 아이디어를 공유하며 '집단지성'으로 네이밍이나 콘셉트를 먼저 다듬은 뒤 교수님께 간다.",
        type: "i",
      },
      {
        text: "혼자 끙끙 앓으며 고민하다가, 정기 수업 시간이나 약속된 크리틱 날짜가 되어서야 조심스럽게 꺼내놓는다.",
        type: "S",
      },
      {
        text: "교수님이 납득할 만한 리서치 데이터와 대안 시안 3개를 완벽하게 준비하기 전까지는 질문을 미룬다.",
        type: "C",
      },
    ],
  },
  {
    title:
      "다른 친구들과 다 함께 모여 피드백을 주고받는 '그룹 크리틱' 수업을 할 때 내 모습은?",
    highlight: "내 모습",
    boldHighlight: "'그룹 크리틱'",
    options: [
      {
        text: "한정된 수업시간으로 다른 친구들 얘기는 빠르게 듣고 내 피드백 시간에 집중해 효율을 챙긴다.",
        type: "D",
      },
      {
        text: "내 작업뿐만 아니라 다른 친구들의 작업에도 함께 아이디어를 내주고 네이밍을 도와주며 참여한다.",
        type: "i",
      },
      {
        text: '문제를 공유하며 "나만 겪는 어려움이 아니구나" 하는 정서적 위안과 안정감을 얻는다.',
        type: "S",
      },
      {
        text: "타인의 작업 과정을 지켜보면서 어떤 기준과 논리로 오케이를 주시는지 정량적인 데이터를 수집한다.",
        type: "C",
      },
    ],
  },
  {
    title: "가장 이상적인 피드백 수용범위는?",
    highlight: "수용범위",
    boldHighlight: "이상적인 피드백",
    options: [
      {
        text: "내 생각을 고집하기보다 졸업전시라는 목표를 위해 교수님의 스타일과 디렉션을 확실하게 수용한다.",
        type: "D",
      },
      {
        text: "교수님의 가이드를 따르되, 포기할 수 없는 핵심 개성이나 비주얼 톤앤매너는 끝까지 타협하여 지켜낸다.",
        type: "i",
      },
      {
        text: "잘못된 방향으로 가고 있을 때 명확하게 브레이크를 걸어주고 올바른 길로 인도해 주는 피드백이 좋다.",
        type: "S",
      },
      {
        text: "프로젝트에 대한 이해도가 높은 상태에서 그래픽을 써야 하는 '논리적 이유'를 제시할 때만 수용한다.",
        type: "C",
      },
    ],
  },
  {
    title: "내가 생각하는 가장 이상적인 개입 수준은?",
    highlight: "이상적인 개입 수준",
    boldHighlight: "가장",
    options: [
      {
        text: '내가 갈팡질팡 흐려질 때마다 “이걸로 밀고 가"라며 중요한 순간에 강하게 방향을 때려 박아주는 스타일',
        type: "D",
      },
      {
        text: "내 작업 방식을 터치하지 않고 온전히 자유를 주되, 가끔 툭 던지는 한마디로 신선한 영감을 주는 스타일",
        type: "i",
      },
      {
        text: "너무 급격한 변화를 요구하지 않고, 주차별 완성도를 체크하며 안정적으로 페이스를 관리해 주는 스타일",
        type: "S",
      },
      {
        text: "감정적인 칭찬이나 비판을 빼고, 내가 막힌 부분에 대해 필요할 때마다 논리적인 가이드를 제공하는 스타일",
        type: "C",
      },
    ],
  },
  {
    title: "스스로 진짜 성장하고 있다고 느끼는 피드백은?",
    highlight: "성장하고 있다",
    boldHighlight: ["진짜", "피드백"],
    options: [
      {
        text: '“비주얼 임팩트가 확실하네"처럼 결과물의 성과와 아웃풋을 직설적으로 꽂아주는 피드백',
        type: "D",
      },
      {
        text: '"와, 이 생각을 어떻게 했어?"라며 내 잠재된 독창성과 강점을 짜릿하게 발견해 주는 피드백',
        type: "i",
      },
      {
        text: '“이번 주에 밤샘하느라 고생 많았네"라며 내가 들인 노력과 발전 과정을 따뜻하게 인정해주는 피드백',
        type: "S",
      },
      {
        text: '"이 레이아웃은 그리드 시스템에 맞지 않아"라며 문제점을 정밀하고 분석적으로 짚어주는 피드백',
        type: "C",
      },
    ],
  },
  {
    title: "1년의 과정을 거쳐 졸업작품에서, 내가 가장 손에 쥐고싶은 결과물은?",
    highlight: "손에 쥐고싶은 결과물",
    boldHighlight: "가장",
    options: [
      {
        text: "취업 시장이나 필드에서 단번에 시선을 사로잡을 수 있는 강력한 아웃풋과 1등 포트폴리오",
        type: "D",
      },
      {
        text: "남들의 뻔한 졸전 작품들 사이에서 독보적으로 튀는 나만의 독창적이고 실험적인 디자인 경험",
        type: "i",
      },
      {
        text: "누구에게 내놓아도 부끄럽지 않은 균형 잡힌 완성도와 스스로 한계를 깨부순 후회 없는 성장 경험",
        type: "S",
      },
      {
        text: "탄탄한 이론적 리서치를 바탕으로 정교하게 설계된 전문성과 깊이가 돋보이는 학술적 연구 결과",
        type: "C",
      },
    ],
  },
  {
    title: "최종적으로 내가 도달하고 싶은 좋은 디자이너의 정의는?",
    highlight: "좋은 디자이너",
    boldHighlight: ["도달하고 싶은", "정의"],
    options: [
      {
        text: "세상을 바꾸는 강력한 시각적 임팩트와 실질적인 성과를 반드시 증명해 내는 디자이너",
        type: "D",
      },
      {
        text: "뻔한 세상에 신선한 충격을 주며, 많은 사람에게 영감의 원천이 되는  크리에이티브한 디자이너",
        type: "i",
      },
      {
        text: "화려함에 집착하기보다 사람의 마음을 깊이 이해하고 사회와 조화를 이루는 따뜻한 디자이너",
        type: "S",
      },
      {
        text: "그 어떤 크리틱 앞에서도 완벽한 논리와 촘촘한 근거로 대중과 클라이언트를 설득하는 디자이너",
        type: "C",
      },
    ],
  },
];

let page = "main";
let selectedProfessors = [];
let selectedCareers = [];
let currentQuestion = 0;
let answers = [];
let selectedProfessorDetail = null;

function render() {
  if (page === "main") renderMain();
  if (page === "professor") renderProfessor();
  if (page === "career") renderCareer();
  if (page === "quiz") renderQuiz();
  if (page === "loading") renderLoading();
  if (page === "result") renderResult();
  if (page === "professorDetail") renderProfessorDetail();
}

// 메인화면
function renderMain() {
  app.className = "phone main-screen";
  app.innerHTML = `
    <img 
      class="main-logo" 
      src="./images/상명대학교-로고.png" 
      alt="상명대학교 로고" 
    />

    <h1 class="main-title">SMU<br />MATCH TEST</h1>

    <img 
      class="main-character" 
      src="./images/메인-수뭉이.png" 
      alt="메인화면 수뭉이 이미지" 
    />

    <button class="white-button" onclick="goTo('professor')">
      매칭하러가기
    </button>
  `;
}

// 교수님 선택 화면
function renderProfessor() {
  app.className = "phone page";
  app.innerHTML = `
    <button class="back-button" onclick="goTo('main')">‹</button>

    <section class="page-content">
      <h1 class="page-title">어떤 교수님의 수업을 들었었나요?</h1>
      <p class="page-subtitle">2,3학년 때 수강한 교수님을 모두 선택해주세요.</p>

      <div class="professor-grid">
        ${professorOptions
          .map(
            (name) => `
          <button 
            class="professor-chip ${selectedProfessors.includes(name) ? "active" : ""}"
            onclick="toggleProfessor('${name}')"
          >
            ${name}
          </button>
        `,
          )
          .join("")}
      </div>
    </section>

    <button class="bottom-button" onclick="goTo('career')">테스트 시작하기</button>
  `;
}

// 희망 진로 분야 선택 화면
function renderCareer() {
  app.className = "phone page";
  app.innerHTML = `
    <button class="back-button" onclick="goTo('professor')">‹</button>

    <section class="page-content">
      <h1 class="page-title">현재 희망 진로 분야는 어디인가요?</h1>
      <p class="page-subtitle">최대 3개까지 선택 가능합니다.</p>

      <div class="career-grid">
        ${careerOptions
          .map(
            (name) => `
          <button 
            class="career-card ${selectedCareers.includes(name) ? "active" : ""}"
            onclick="toggleCareer('${name}')"
          >
            <span>${name}</span>
            <span class="icon">${selectedCareers.includes(name) ? "✓" : "+"}</span>
          </button>
        `,
          )
          .join("")}
      </div>
    </section>

    <button class="bottom-button" onclick="startQuiz()">테스트 시작하기</button>
  `;
}

// 질문 화면
function renderQuiz() {
  const q = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const currentNumber = String(currentQuestion + 1).padStart(2, "0");
  const totalNumber = questions.length;

  app.className = "phone quiz-page";
  app.innerHTML = `
    <header class="quiz-header">
        <h1>SMU MATCH TEST</h1>
        <div class="progress">
            <span class="progress-fill" style="width:${progress}%"></span>
        </div>

        <div class="question-count">
            <span>${currentNumber}</span> / ${totalNumber}
        </div>
    </header>

    <section class="quiz-content">
      <h2 class="question-number">Q${currentQuestion + 1}.</h2>
      <h1 class="question-title">${highlightText(q.title, q.highlight, q.boldHighlight)}</h1>

      <div class="answer-list">
        ${q.options
          .map(
            (option, index) => `
          <button 
            class="answer-button ${answers[currentQuestion] === option.type ? "active" : ""}"
            onclick="selectAnswer('${option.type}')"
          >
            ${option.text}
          </button>
        `,
          )
          .join("")}
      </div>
    </section>

    <div class="quiz-bottom-buttons">
        <button 
            class="quiz-nav-button quiz-prev-button"
            onclick="prevQuestion()"
        >
            이전
        </button>

        <button 
            class="quiz-nav-button quiz-next-button"
            onclick="nextQuestion()"
        >
            ${currentQuestion === questions.length - 1 ? "결과보기" : "다음"}
        </button>
    </div>
  `;
}

function renderLoading() {
  app.className = "phone loading-page";
  app.innerHTML = `
    <header class="result-header">
      <button class="quiz-back" onclick="goTo('quiz')">‹</button>
      <h1>SMU MATCH TEST</h1>
    </header>

    <section class="loading-content">
      <h1>나와 맞는 교수님을<br />찾고 있어요!</h1>

      <img 
        class="loading-character" 
        src="./images/로딩중-수뭉이얼굴.png" 
        alt="로딩중 수뭉이"
        onerror="this.onerror=null; this.src='./images/로딩중-수뭉이얼굴.png';"
      />

      <div class="loading-spinner"></div>
      <p>로딩중 ...</p>
    </section>
  `;
}

// 결과 페이지
function renderResult() {
  const score = getScore();
  const typeCode = getTypeCode(score);
  const result = typeResults[typeCode] || typeResults.D;
  const bestProfessor = getBestProfessor(score);
  const careerProfessor = getCareerProfessor(score);

  app.className = "phone result-page";
  app.innerHTML = `
    <header class="result-header">
      <button class="quiz-back" onclick="goTo('quiz')">‹</button>
      <h1>SMU MATCH TEST</h1>
    </header>

    <div class="result-hero-fixed">
      <div class="result-card-wrap">
        <img 
          id="resultCardImage"
          class="result-card-image" 
          src="./images/${typeCardMap[typeCode] || "카드-D.png"}" 
          alt="${result.name}"
          onerror="this.onerror=null; this.src='./images/카드-D.png';"
        />
      </div>

      <button class="save-card-button" onclick="saveTypeCardImage()">
        ⬇ 이미지 저장
      </button>
    </div>

    <main class="result-scroll-area">
      <section class="result-section">
        <h2>나의 <span>유형</span>은?</h2>

        <div class="bars">
          ${renderBar("D", "주도형", score.D)}
          ${renderBar("i", "사교형", score.i)}
          ${renderBar("S", "안정형", score.S)}
          ${renderBar("C", "신중형", score.C)}
        </div>

        <div class="info-card">
          <ul>
            ${result.points.map((point) => `<li>${point}</li>`).join("")}
          </ul>
        </div>

        <h2 class="professor-title">나와 맞는 <span>교수님</span>은?</h2>

        ${renderProfessorResultCard(
          "내 진로와 어울리는 교수님은?",
          careerProfessor.name,
        )}

        ${renderProfessorResultCard(
          "내 성향과 어울리는 교수님은?",
          bestProfessor.name,
        )}

        <button class="restart-button" onclick="restart()">테스트 다시하기</button>
      </section>
    </main>
  `;
}

function saveTypeCardImage() {
  const image = document.getElementById("resultCardImage");

  if (!image) {
    alert("저장할 결과 카드 이미지를 찾을 수 없습니다.");
    return;
  }

  const imageSrc = image.getAttribute("src");

  const link = document.createElement("a");
  link.href = imageSrc;
  link.download = "SMU-MATCH-CARD.png";

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function renderProfessorResultCard(label, professorName) {
  const image = professorImageMap[professorName] || "로딩중_수뭉이.png";

  return `
    <div class="professor-result-card">
      <img 
        src="./images/${image}" 
        alt="${professorName}"
        onerror="this.onerror=null; this.src='./images/로딩중-수뭉이얼굴.png';"
      />

      <div class="professor-result-text">
        <p>${label}</p>
        <strong>${professorName}</strong>
      </div>

      <button onclick="openProfessorDetail('${professorName}')">
        설명보기 ›
      </button>
    </div>
  `;
}

function openProfessorDetail(professorName) {
  selectedProfessorDetail = professorName;
  page = "professorDetail";
  render();
}

function renderProfessorDetail() {
  const professor = professorDetails[selectedProfessorDetail];
  const image =
    professorImageMap[selectedProfessorDetail] || "로딩중-수뭉이얼굴.png";

  if (!professor) {
    page = "result";
    render();
    return;
  }

  app.className = "phone professor-detail-page";
  app.innerHTML = `
    <header class="result-header">
      <button class="quiz-back" onclick="goTo('result')">‹</button>
      <h1>SMU MATCH TEST</h1>
    </header>

    <section class="professor-detail-content">
      <img 
        class="professor-detail-image"
        src="./images/${image}" 
        alt="${selectedProfessorDetail}"
        onerror="this.onerror=null; this.src='./images/로딩중-수뭉이얼굴.png';"
      />

      <h1>${selectedProfessorDetail}</h1>
      <p>${professor.subtitle}</p>

      <div class="bars professor-bars">
        ${renderBar("D", "주도형", professor.D)}
        ${renderBar("i", "사교형", professor.i)}
        ${renderBar("S", "안정형", professor.S)}
        ${renderBar("C", "신중형", professor.C)}
      </div>

      <div class="professor-detail-card">
        <ul>
          ${professor.points.map((point) => `<li>${point}</li>`).join("")}
        </ul>
      </div>

      <button class="bottom-detail-button" onclick="goTo('result')">
        내 유형으로 돌아가기
      </button>
    </section>
  `;
}

function renderBar(type, label, value) {
  return `
    <div class="bar-row">
      <span>${type} (${label})</span>
      <div class="bar">
        <b class="bar-fill" style="width:${value}%"></b>
      </div>
      <em>${value}%</em>
    </div>
  `;
}

function highlightText(text, blueKeyword, boldKeyword) {
  let result = text;

  const applyHighlight = (target, className) => {
    if (!target) return;

    const keywords = Array.isArray(target) ? target : [target];

    keywords.forEach((keyword) => {
      if (!keyword) return;

      result = result.replace(
        keyword,
        `<span class="${className}">${keyword}</span>`,
      );
    });
  };

  // 검은색 볼드 강조 먼저
  applyHighlight(boldKeyword, "bold-highlight");

  // 파란색 강조 나중에
  applyHighlight(blueKeyword, "highlight");

  return result;
}

function goTo(targetPage) {
  page = targetPage;
  render();
}

function toggleProfessor(name) {
  if (selectedProfessors.includes(name)) {
    selectedProfessors = selectedProfessors.filter((item) => item !== name);
  } else {
    selectedProfessors.push(name);
  }
  renderProfessor();
}

function toggleCareer(name) {
  if (selectedCareers.includes(name)) {
    selectedCareers = selectedCareers.filter((item) => item !== name);
  } else {
    if (selectedCareers.length >= 3) {
      alert("희망 진로 분야는 최대 3개까지 선택 가능합니다.");
      return;
    }
    selectedCareers.push(name);
  }
  renderCareer();
}

function startQuiz() {
  page = "quiz";
  currentQuestion = 0;
  answers = [];
  render();
}

function selectAnswer(type) {
  answers[currentQuestion] = type;
  renderQuiz();
}

function nextQuestion() {
  if (!answers[currentQuestion]) {
    alert("답변을 선택해주세요!");
    return;
  }

  if (currentQuestion === questions.length - 1) {
    showLoading();
    return;
  } else {
    currentQuestion += 1;
  }

  render();
}

// 로딩화면
function showLoading() {
  page = "loading";
  render();

  setTimeout(() => {
    page = "result";
    render();
  }, 2000); //2초
}

function prevQuestion() {
  if (page === "quiz" && currentQuestion > 0) {
    currentQuestion -= 1;
    renderQuiz();
  } else if (page === "quiz") {
    page = "career";
    render();
  }
}

function getScore() {
  const raw = { D: 0, i: 0, S: 0, C: 0 };

  answers.forEach((type) => {
    if (raw[type] !== undefined) raw[type] += 1;
  });

  const total = answers.length || questions.length;

  return {
    D: Math.round((raw.D / total) * 100),
    i: Math.round((raw.i / total) * 100),
    S: Math.round((raw.S / total) * 100),
    C: Math.round((raw.C / total) * 100),
    raw,
  };
}

function getOrderedCode(types) {
  const order = ["D", "i", "S", "C"];
  return order.filter((type) => types.includes(type)).join("");
}

function getTypeCode(score) {
  const sorted = [
    ["D", score.D],
    ["i", score.i],
    ["S", score.S],
    ["C", score.C],
  ].sort((a, b) => b[1] - a[1]);

  const first = sorted[0];
  const second = sorted[1];
  const third = sorted[2];

  const gap12 = first[1] - second[1];
  const gap13 = first[1] - third[1];

  if (gap12 >= 15) {
    return first[0];
  }

  if (third[1] >= 20 && gap13 <= 10) {
    const tripleCode = getOrderedCode([first[0], second[0], third[0]]);

    if (typeResults[tripleCode]) {
      return tripleCode;
    }
  }

  const pairCode = getOrderedCode([first[0], second[0]]);

  if (typeResults[pairCode]) {
    return pairCode;
  }

  return first[0];
}

function getProfessorDistance(score, professor) {
  return (
    Math.abs(score.D - professor.D) +
    Math.abs(score.i - professor.i) +
    Math.abs(score.S - professor.S) +
    Math.abs(score.C - professor.C)
  );
}

function getProfessorMatchPercent(score, professor) {
  const diff = getProfessorDistance(score, professor);

  // 최대 차이는 대략 200으로 보고 100점 기준으로 환산
  const match = Math.round(100 - diff / 2);

  return Math.max(0, Math.min(100, match));
}

function getProfessorDistance(score, professor) {
  return (
    Math.abs(score.D - professor.D) +
    Math.abs(score.i - professor.i) +
    Math.abs(score.S - professor.S) +
    Math.abs(score.C - professor.C)
  );
}

function getProfessorMatchPercent(score, professor) {
  const diff = getProfessorDistance(score, professor);
  const match = Math.round(100 - diff / 2);

  return Math.max(0, Math.min(100, match));
}

function pickMostSimilarProfessor(score, candidates) {
  const targetList = candidates.length > 0 ? candidates : professors;

  const matched = targetList.map((professor) => ({
    ...professor,
    match: getProfessorMatchPercent(score, professor),
    distance: getProfessorDistance(score, professor),
  }));

  return matched.sort((a, b) => {
    if (b.match !== a.match) return b.match - a.match;
    return a.distance - b.distance;
  })[0];
}

// DiSC유형이 제일 비슷한 교수님
function getBestProfessor(score) {
  return pickMostSimilarProfessor(score, professors);
}

// 선택한진로 + DiSC유형이 제일 비슷 + 수업수강여부
function getCareerProfessor(score) {
  const careerProfessorNames = new Set();

  selectedCareers.forEach((career) => {
    const relatedProfessors = careerMap[career] || [];

    relatedProfessors.forEach((professorName) => {
      careerProfessorNames.add(professorName);
    });
  });

  // 1순위: 희망진로 분야에도 해당하고, 내가 수업도 들은 교수님
  let candidates = professors.filter((professor) => {
    const isCareerRelated = careerProfessorNames.has(professor.name);
    const isTaken = selectedProfessors.includes(professor.name);

    return isCareerRelated && isTaken;
  });

  // 2순위: 둘 다 만족하는 교수가 없으면,
  // 희망진로는 무시하고 내가 수업 들은 교수님 중에서 성향이 가장 비슷한 교수님
  if (candidates.length === 0) {
    candidates = professors.filter((professor) =>
      selectedProfessors.includes(professor.name),
    );
  }

  // 3순위: 수업 들은 교수님 선택이 아예 없으면,
  // 희망진로 분야에 해당하는 교수님 중에서 성향이 가장 비슷한 교수님
  if (candidates.length === 0) {
    candidates = professors.filter((professor) =>
      careerProfessorNames.has(professor.name),
    );
  }

  // 4순위: 그래도 없으면 전체 교수님 중 성향이 가장 비슷한 교수님
  if (candidates.length === 0) {
    candidates = professors;
  }

  return pickMostSimilarProfessor(score, candidates);
}

function restart() {
  page = "main";
  selectedProfessors = [];
  selectedCareers = [];
  currentQuestion = 0;
  answers = [];
  render();
}

render();

//캡쳐
function saveResultImage() {
  const target = document.getElementById("captureArea");

  if (!target) {
    alert("저장할 결과 화면을 찾을 수 없습니다.");
    return;
  }

  // 저장용 여백 박스 생성
  const wrapper = document.createElement("div");
  wrapper.style.position = "fixed";
  wrapper.style.left = "-9999px";
  wrapper.style.top = "0";
  wrapper.style.background = "#ffffff";
  wrapper.style.padding = "28px";
  wrapper.style.width = `${target.offsetWidth + 56}px`;
  wrapper.style.boxSizing = "border-box";

  // 결과 화면 복제
  const clone = target.cloneNode(true);
  clone.style.width = `${target.offsetWidth}px`;
  clone.style.margin = "0";
  clone.style.paddingTop = "40px";
  clone.style.paddingBottom = "40px";
  clone.style.background = "#ffffff";

  wrapper.appendChild(clone);
  document.body.appendChild(wrapper);

  html2canvas(wrapper, {
    backgroundColor: "#ffffff",
    scale: 2,
    useCORS: true,
  }).then((canvas) => {
    const link = document.createElement("a");
    link.download = "SMU-MATCH-RESULT.png";
    link.href = canvas.toDataURL("image/png");
    link.click();

    document.body.removeChild(wrapper);
  });
}

function updateResultHeroSpace() {
  const hero = document.querySelector(".result-hero-fixed");

  if (!hero) return;

  // 살짝 여유값 추가
  const heroHeight = hero.offsetHeight + 8;

  app.style.setProperty("--result-hero-space", `${heroHeight}px`);
}
