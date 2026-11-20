/* BIX Lab — Daily Paper
   AI 요약 없이, 방문자의 브라우저가 OpenAlex(무료 공개 학술 데이터)에서
   최신 오픈액세스 논문을 불러와 날짜별로 한 편을 고릅니다. 비용·서버 없음.

   학술지를 바꾸려면 JOURNALS 목록의 ISSN을 고치세요.
   주제를 좁히려면 KEYWORDS를 고치세요. */
(function () {
  const JOURNALS = {
    "0747-5632": "Computers in Human Behavior",
    "2451-9588": "Computers in Human Behavior Reports",
    "0144-929X": "Behaviour & Information Technology",
    "0718-1876": "J. of Theoretical and Applied Electronic Commerce Research",
    "1567-4223": "Electronic Commerce Research and Applications",
    "1066-2243": "Internet Research",
    "0268-4012": "International Journal of Information Management",
    "0378-7206": "Information & Management",
    "0167-9236": "Decision Support Systems",
    "0736-5853": "Telematics and Informatics",
    "0040-1625": "Technological Forecasting and Social Change",
    "0740-624X": "Government Information Quarterly",
    "1094-6705": "Journal of Service Research",
    "2662-9992": "Humanities and Social Sciences Communications"
  };
  // 제목·초록에 이 단어 중 하나가 있어야 선정 (연구실 주제와 관련된 논문만)
  const KEYWORDS = /\b(digital|online|user|consumer|customer|AI|artificial intelligence|generative|chatbot|robot|platform|data|analytics|service|e-?commerce|information system|technology|algorithm|recommend|social media|app|policy|innovation|experience|UX)\b/i;
  const DAYS_BACK = 150;

  const today = document.getElementById("daily-today");
  const more = document.getElementById("daily-more");
  const esc = s => String(s == null ? "" : s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

  // OpenAlex는 초록을 '단어 → 위치' 형태로 주므로 문장으로 복원
  function abstractText(inv) {
    if (!inv) return "";
    const words = [];
    Object.keys(inv).forEach(w => inv[w].forEach(i => { words[i] = w; }));
    return words.join(" ").trim();
  }
  function authors(w) {
    const a = (w.authorships || []).map(x => x.author && x.author.display_name).filter(Boolean);
    return a.length > 6 ? a.slice(0, 6).join(", ") + ", et al." : a.join(", ");
  }
  function journal(w) {
    const s = w.primary_location && w.primary_location.source;
    return s ? s.display_name : "";
  }
  // 날짜(한국 시간) → 매일 바뀌는 고정 번호
  function dayNumber() {
    const kst = new Date(Date.now() + 9 * 3600e3);
    return Math.floor(kst.getTime() / 864e5);
  }
  function dateLabel() {
    return new Date(Date.now() + 9 * 3600e3).toISOString().slice(0, 10);
  }

  const from = new Date(Date.now() - DAYS_BACK * 864e5).toISOString().slice(0, 10);
  const url = "https://api.openalex.org/works?filter=" +
    "primary_location.source.issn:" + Object.keys(JOURNALS).join("|") +
    ",open_access.is_oa:true,has_abstract:true,type:article,from_publication_date:" + from +
    "&sort=publication_date:desc&per_page=200" +
    "&select=id,doi,title,publication_date,primary_location,authorships,abstract_inverted_index,open_access";

  fetch(url)
    .then(r => { if (!r.ok) throw new Error(r.status); return r.json(); })
    .then(j => {
      const pool = (j.results || []).filter(w =>
        w.title && w.doi && KEYWORDS.test(w.title + " " + abstractText(w.abstract_inverted_index).slice(0, 1500))
      );
      if (!pool.length) throw new Error("empty");

      // 같은 날에는 누구에게나 같은 논문, 다음 날에는 다른 논문
      const pick = pool[(dayNumber() * 7919) % pool.length];
      const abs = abstractText(pick.abstract_inverted_index);
      const doi = pick.doi.replace("https://doi.org/", "");
      const oaUrl = (pick.open_access && pick.open_access.oa_url) || pick.doi;

      today.innerHTML =
        '<article class="daily-card">' +
        '<div class="daily-meta"><span class="tag LAB">' + dateLabel() + '</span>' +
        '<span>' + esc(journal(pick)) + ' · ' + esc(pick.publication_date) + '</span></div>' +
        '<h2 class="daily-title">' + esc(pick.title) + '</h2>' +
        '<p class="pub-authors">' + esc(authors(pick)) + '</p>' +
        '<h3 class="daily-h">Abstract</h3>' +
        '<p class="daily-abs">' + esc(abs) + '</p>' +
        '<div class="btns">' +
        '<a class="btn btn-dark" href="' + esc(oaUrl) + '" target="_blank" rel="noopener">Read the full paper ↗</a>' +
        '<a class="btn btn-line" href="' + esc(pick.doi) + '" target="_blank" rel="noopener">DOI: ' + esc(doi) + '</a>' +
        '</div></article>';

      const rest = pool.filter(w => w !== pick).slice(0, 10);
      more.innerHTML = rest.map(w =>
        '<li><div class="pub-title">' + esc(w.title) + '</div>' +
        '<div class="pub-authors">' + esc(authors(w)) + '</div>' +
        '<div class="pub-venue">' + esc(journal(w)) + ', ' + esc(w.publication_date) +
        '<a class="pub-link" href="' + esc(w.doi) + '" target="_blank" rel="noopener">DOI ↗</a></div></li>'
      ).join("");
    })
    .catch(() => {
      today.innerHTML = '<p>Today\'s paper could not be loaded. Please try again later. ' +
        '<span class="ko">논문을 불러오지 못했습니다. 잠시 후 다시 시도해 주세요.</span></p>';
      more.innerHTML = "";
    });
})();
