/* BIX Lab — 내용 데이터
   소식·논문을 추가/수정하려면 이 파일만 고치면 됩니다.
   새 항목은 각 목록의 맨 위에 추가하세요. */

const NEWS = [
  { date: "2027", tag: "LAB", text: "BIX Lab is preparing to open with a pilot program in the 2027 academic year at the Department of Management Information Systems, Hannam University." },
  { date: "2026.05", tag: "AWARD", text: "Excellent Paper Award at the Korea Credit Guarantee Fund (KODIT) 50th Anniversary Paper Competition (신용보증기금 창립 50주년 기념 논문 공모전 우수논문상)." },
  { date: "2026", tag: "PAPER", text: "New paper in Journal of Electronic Commerce Research (SSCI): Color Strategy in E-Commerce — Leveraging Regulatory Focus for Optimized Product Page Design." },
  { date: "2026", tag: "PAPER", text: "New paper in 정보관리학회지 (KCI): 연구데이터 공유의 의도-행동 격차와 국가연구데이터법 적용 범위 인식." },
  { date: "2026", tag: "CONFERENCE", text: "Presented studies on digital inclusion in non-face-to-face public financial services (한국빅데이터학회) and digital remittance app adoption among migrant workers in Korea (한국IT서비스학회)." },
  { date: "2026.03", tag: "LAB", text: "Prof. Bong-Goon Seo joins the Department of Management Information Systems, Hannam University, as Assistant Professor." },
  { date: "2025.01", tag: "AWARD", text: "Minister of Science and ICT Commendation for contributions to science and technology innovation — S&T policy (과학기술정보통신부 장관 표창)." }
];

const PUBS_INTL = [
  { t: "Color Strategy in E-Commerce: Leveraging Regulatory Focus for Optimized Product Page Design", a: "Seo, B. G., Park, K. H., & Park, D. H. (2026)", v: "Journal of Electronic Commerce Research, 27(1), 62–77", idx: "SSCI", url: "http://www.jecr.org/node/758", sel: true },
  { t: "From Free to Fee: Psychological Ownership and Advertising Appeals in Freemium Conversion", a: "Seo, B. G., & Park, D. H. (2025)", v: "IEEE Access, 13, 92008–92018", idx: "SCIE", url: "https://doi.org/10.1109/ACCESS.2025.3572311", sel: true },
  { t: "Evaluating employee performance in smart work environment with focus on psychological distance and process versus outcome-centric approaches", a: "Seo, B. G., & Park, D. H. (2025)", v: "Scientific Reports, 15(1), 9089", idx: "SCIE", url: "https://doi.org/10.1038/s41598-025-94254-0", sel: true },
  { t: "The co-evolution of AI technology and information environment: Diagnosing social impacts and exploring governance strategies", a: "Cha, S., Seo, B. G., Kim, T., & Kim, J. (2024)", v: "Journal of Infrastructure, Policy and Development, 8(8), 6605", idx: "Scopus", url: "https://doi.org/10.24294/jipd.v8i8.6605", sel: true },
  { t: "The impact of budget allocation by research service and platform providers on R&D outcomes: Reassessing the value of investment in research infrastructure in a knowledge-based society", a: "Cha, S., Seo, B. G., Kim, T., & Kim, J. (2024)", v: "Journal of Infrastructure, Policy and Development, 8(8), 6924", idx: "Scopus", url: "https://doi.org/10.24294/jipd.v8i8.6924" },
  { t: "The effective recommendation approaches depending on user’s psychological ownership in online content service: user-centric versus content-centric recommendations", a: "Seo, B. G., & Park, D. H. (2024)", v: "Behaviour & Information Technology, 1–13", idx: "SSCI", url: "https://doi.org/10.1080/0144929X.2022.2161414", sel: true },
  { t: "Effective strategies for contents recommendation based on psychological ownership of over the top services in cyberspace", a: "Seo, B. G., & Park, D. H. (2021)", v: "Journal of Theoretical and Applied Electronic Commerce Research, 16(4), 976–991", idx: "SSCI", url: "https://doi.org/10.3390/jtaer16040055" },
  { t: "The effective type of information categorization in online curation service depending on psychological ownership", a: "Seo, B. G., & Park, D. H. (2020)", v: "Sustainability, 12(8), 3321", idx: "SSCI", url: "https://doi.org/10.3390/su12083321" },
  { t: "Did You Invest Less Than Me? The Effect of Other’s Share of Investment on Psychological Ownership of Crowdfunding Projects", a: "Seo, B. G., & Park, D. H. (2020)", v: "Sustainability, 12(5), 2025", idx: "SSCI", url: "https://doi.org/10.3390/su12052025" },
  { t: "The effect of message framing on security behavior in online services: Focusing on the shift of time orientation via psychological ownership", a: "Seo, B. G., & Park, D. H. (2019)", v: "Computers in Human Behavior, 93, 357–369", idx: "SSCI", url: "https://doi.org/10.1016/j.chb.2018.12.035", sel: true }
];

const PUBS_KR = [
  { t: "연구데이터 공유의 의도-행동 격차와 국가연구데이터법 적용 범위 인식: 연구수행주체를 중심으로", a: "서봉군, 이원희, & 임형준 (2026)", v: "정보관리학회지, 43(3), 31–55" },
  { t: "인공지능 기반 사회에서의 정보 격차 양상과 사회적 포용에 관한 미래 전망 연구", a: "차석기, 정도범, & 서봉군 (2024)", v: "지식경영연구, 25(3), 173–200" },
  { t: "혁신 사업화 여정 기반의 중소기업 규제 대응 전략 연구", a: "서봉군, 조성민, 이준식, & 박도형 (2023)", v: "기술혁신학회지, 26(2), 169–189" },
  { t: "이미지 기반의 경험재, 텍스트 기반의 탐색재: 조절초점에 따른 제품 정보 구성 방식과 제품 유형의 일치 효과", a: "박경희, 서봉군, & 박도형 (2022)", v: "지능정보연구, 28(2), 75–100" },
  { t: "모바일 쇼핑몰 상세페이지 콘텐츠 레이아웃 형태가 제품태도 및 구매의도에 미치는 영향: 조절초점에 따른 소비자 인지 반응 중심으로", a: "박경희, 서봉군, & 박도형 (2022)", v: "지식경영연구, 23(2), 193–210" },
  { t: "경제적, 산업구조적, 문화적 요인을 기반으로 한 주요국가의 한국 품목별 수입액 예측 모형 개발: 한국의, 한국에 대한 문화적 요인을 중심으로", a: "전승표, 서봉군, & 박도형 (2021)", v: "지능정보연구, 27(4), 23–48" },
  { t: "융합산업 규제영향분석 프레임워크 개발: 신산업 분야별 규제이슈 사례 연구", a: "송혜림, 서봉군, & 조성민 (2021)", v: "지능정보연구, 27(3), 199–230" },
  { t: "온라인 메신저 서비스에서의 이모티콘 사용 동기: 조절초점 성향을 중심으로", a: "서봉군, & 박도형 (2020)", v: "지식경영연구, 21(2), 101–118" },
  { t: "기업의 SNS 마케팅 활동이 이용자 행동에 미치는 영향: 페이스북 팬페이지 애널리틱스를 중심으로", a: "전형준, 서봉군, & 박도형 (2020)", v: "지능정보연구, 26(1), 75–95" },
  { t: "사용자 니즈 기반의 챗봇 개발 프로세스: 디자인 사고방법론을 중심으로", a: "김무성, 서봉군, & 박도형 (2019)", v: "지능정보연구, 25(3), 221–238" },
  { t: "소비자 감성 기반 뷰티 경험 패턴 맵 개발: 화장품을 중심으로", a: "서봉군, 김건우, & 박도형 (2019)", v: "지능정보연구, 25(1), 179–196" },
  { t: "Smart Store in Smart City: 소비자 감성기반 상권분석 시스템 개발", a: "유인진, 서봉군, & 박도형 (2018)", v: "지능정보연구, 24(1), 25–52" },
  { t: "심리적 소유감에 따른 메시지 프레이밍 효과: 온라인 서비스에서의 사용자 정보보안 행동을 중심으로", a: "서봉군, & 박도형 (2018)", v: "지식경영연구, 19(1), 1–18" },
  { t: "중소기업 R&D 성공에 있어서 개방형 혁신의 효과에 관한 연구", a: "유인진, 서봉군, & 박도형 (2018)", v: "지능정보연구, 24(3), 89–117" },
  { t: "소비자 감성 분석 기반의 음악 추천 알고리즘 개발", a: "이승준, 서봉군, & 박도형 (2018)", v: "지능정보연구, 24(4), 197–217" },
  { t: "온라인 협업 시스템을 통한 프로젝트 성과 창출 메커니즘 연구: 개인특성, 관계특성, 시스템특성을 중심으로", a: "박준영, 서봉군, & 박도형 (2018)", v: "Journal of Information Technology Applications & Management, 25(1), 47–66" },
  { t: "기술가치 평가를 위한 기술사업화 기간 및 비용 추정체계 개발", a: "전승표, 최대헌, 박현우, 서봉군, & 박도형 (2017)", v: "지능정보연구, 23(2), 139–160" },
  { t: "중소기업 기술 유출에 대한 조기경보시스템 개발에 대한 연구", a: "서봉군, & 박도형 (2017)", v: "지능정보연구, 23(1), 143–159" }
];

const CONF_INTL = [
  { t: "What sentiment attracts tourists? Analysis of tourist attractions based on consumer's sentiment", a: "Yoo, I. J., Seo, B. G., & Park, D. H. (2019)", v: "PACIS 2019, p. 145", url: "https://aisel.aisnet.org/pacis2019/145/" },
  { t: "Development of diagnostic method and algorithm for skin type based on consumer language and sentiment", a: "Seo, B. G., Kim, K. W., Yoo, I. J., Park, J. Y., & Park, D. H. (2018)", v: "3rd Technology Innovation Management and Engineering Science International Conference (TIMES-iCON), IEEE, pp. 1–3", url: "https://doi.org/10.1109/TIMES-iCON.2018.8621838" },
  { t: "Innovative service concept generation based on integrated framework of design thinking and VRIO: the case of information supporting system for SMEs in Korea", a: "Seo, B. G., Park, D. H., & Choi, D. (2016)", v: "Proceedings of the 18th Annual International Conference on Electronic Commerce (ICEC), pp. 1–5", url: "https://doi.org/10.1145/2971603.2971626" }
];

const CONF_KR = [
  { t: "디지털 포용 관점에서 본 비대면 공공 금융서비스의 지역별 이용 차이: 신용보증 상품을 중심으로", a: "곽영, & 서봉군 (2026)", v: "한국빅데이터학회" },
  { t: "한국 내 이주노동자의 디지털 송금앱 수용요인 연구", a: "Tenver Ahmed Mozaed, & 서봉군 (2026)", v: "한국IT서비스학회" },
  { t: "생성형 AI 윤리 이슈 분류 및 다차원 분석 프레임워크 개발", a: "서봉군 (2025)", v: "한국인터넷정보학회" },
  { t: "The Effect of the Bright and Dark Sides of Telecommuting on Job Satisfaction", a: "서봉군, & 박도형 (2023)", v: "한국경영과학회 학술대회논문집, 641–645" },
  { t: "소셜 로봇의 인간 유사성과 맥락이 로봇 인식 및 태도에 미치는 영향", a: "서봉군, 이준식, & 박도형 (2023)", v: "한국경영정보학회 정기 학술대회, 1194–1200" },
  { t: "데이터 기반 UX 컨셉 개발 방법론 연구", a: "박준영, 이준식, 서봉군, 김건우, 유인진, 전형준, ... & 박도형 (2019)", v: "한국 HCI 학회 학술대회, 633–637" },
  { t: "스마트워크 환경 하에서의 팀원 평가: 심리적 거리에 따른 과정 vs. 결과 중심 평가", a: "박도형, 서봉군, & 유인진 (2017)", v: "한국경영정보학회 정기 학술대회, 60–67" },
  { t: "자원기반이론 관점에서의 벤처기업 성과에 관한 연구: 기술주도 vs. 경영주도의 차이를 중심으로", a: "유인진, 서봉군, & 박도형 (2017)", v: "한국기술혁신학회 학술대회, 537" },
  { t: "디자인 사고 기반의 혁신 플랫폼 서비스 창출 방법론 개발: 운동 멘토링 플랫폼 서비스 사례를 중심으로", a: "서봉군, & 박도형 (2015)", v: "한국기술혁신학회 학술대회, 54–61" }
];

const BOOKS = [
  { t: "중국 학술적 성과의 영향력 변화: 헤게모니와 효율성을 중심으로", a: "Report · 공저 (2025.01)", v: "KISTI Data Insight 제42호", url: "https://www.kisti.re.kr/post/data-insight/6621" },
  { t: "설득력 있는 UX 설계를 위한 사회과학의 가르침 Vol. 2", a: "Book · 공저 (2021.03)", v: "퍼플", url: "https://product.kyobobook.co.kr/detail/S000060615777" },
  { t: "설득력 있는 UX 설계를 위한 사회과학의 가르침 Vol. 1", a: "Book · 공저 (2019.08)", v: "퍼플", url: "https://product.kyobobook.co.kr/detail/S000060609261" },
  { t: "개인 맞춤형 화장품 정보 제공 시스템 및 방법", a: "Patent application · 출원번호 10-2018-0154156 (2018.12)", v: "출원인: (주)비즈인원" }
];
