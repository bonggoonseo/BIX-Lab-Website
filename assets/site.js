/* BIX Lab — 공통 헤더/푸터와 목록 렌더링 */
(function () {
  const NAV = [
    ["index.html", "Home"],
    ["research.html", "Research"],
    ["members.html", "Members"],
    ["publications.html", "Publications"],
    ["news.html", "News"],
    // ["daily.html", "Daily Paper"],  // 잠시 닫아 둠 — 다시 열려면 맨 앞 // 를 지우면 됨
    ["contact.html", "Contact"]
  ];
  const here = (location.pathname.split("/").pop() || "index.html").toLowerCase();

  // 로고 (Woven X) — 남색 획은 글자색을 따라가서 어두운 바탕에서는 흰색이 됨
  const LOGO =
    '<svg class="logo" viewBox="0 0 100 100" aria-hidden="true"><g stroke-linecap="round" stroke-width="17" fill="none">' +
    '<path d="M16 16 L33 33 M67 67 L84 84" stroke="currentColor"/>' +
    '<path d="M18 82 L82 18" stroke="#ff7a59"/></g></svg>';
  // 글자 X도 로고처럼 엮인 모양: "/" 획은 이어지고 "\" 획은 교차점에서 끊김
  const XGLYPH =
    '<svg class="xg" viewBox="0 0 70 72" aria-hidden="true">' +
    '<polygon points="0,72 20,72 70,0 50,0"/>' +
    '<polygon points="0,0 20,0 33,18.72 23,33.12"/>' +
    '<polygon points="47,38.88 70,72 50,72 37,53.28"/></svg>';
  const WORD = 'BI<span class="x" role="img" aria-label="X">' + XGLYPH + '</span> Lab';

  const header = document.getElementById("site-header");
  if (header) {
    header.className = "site-header";
    header.innerHTML =
      '<div class="wrap">' +
      '<a class="brand" href="index.html">' +
      LOGO +
      '<span class="brand-text"><strong>' + WORD + '</strong><small>Hannam University</small></span></a>' +
      '<button class="nav-toggle" aria-label="Menu"><span></span><span></span><span></span></button>' +
      '<nav class="nav">' +
      NAV.map(([href, label]) =>
        '<a href="' + href + '"' + (href === here ? ' class="active"' : "") + ">" + label + "</a>"
      ).join("") +
      "</nav></div>";
    header.querySelector(".nav-toggle").addEventListener("click", () =>
      header.querySelector(".nav").classList.toggle("open")
    );
  }

  const footer = document.getElementById("site-footer");
  if (footer) {
    footer.className = "site-footer";
    footer.innerHTML =
      '<div class="wrap"><div><div class="foot-brand">' + LOGO + '<strong>' + WORD + '</strong></div>' +
      '지능형 사용자경험 연구실 · Behavior · Intelligence · eXperience<br>' +
      "Department of Management Information Systems, Hannam University<br>" +
      "Room 312, College of Business and Economics (경상대학 312호)<br>" +
      "70 Hannam-ro, Daedeok-gu, Daejeon 34430, Korea</div>" +
      '<div><a href="mailto:bgseo@hnu.kr">bgseo@hnu.kr</a> · Tel. <a href="tel:+82426297621">+82-42-629-7621</a><br>' +
      '<a href="https://scholar.google.com/citations?user=8DEgQB0AAAAJ&amp;hl=en" target="_blank" rel="noopener">Google Scholar</a> · ' +
      '<a href="https://orcid.org/0000-0002-8636-1530" target="_blank" rel="noopener">ORCID</a> · ' +
      '<a href="https://my.hnu.kr/html/profDetail.html?param=4803516" target="_blank" rel="noopener">HNU Profile</a> · ' +
      '<a href="https://sites.google.com/view/bgseo" target="_blank" rel="noopener">CV</a><br>© ' +
      new Date().getFullYear() + " BIX Lab. All rights reserved.</div></div>";
  }

  // 저자 목록에서 교수님 이름을 굵게 표시
  const ME = /(Seo, B\. ?G\.\*?|서봉군\*?)/g;

  // numbered: false = 번호 없음, true = [1]부터, 숫자 = 그 숫자만큼 더해서 이어 매김
  window.renderPubs = function (id, list, numbered) {
    const offset = typeof numbered === "number" ? numbered : 0;
    const el = document.getElementById(id);
    if (!el) return;
    // numbered=true 이면 최신 논문이 가장 큰 번호 (목록은 최신순으로 정렬되어 있음)
    el.innerHTML = list.map((p, i) =>
      "<li" + (numbered ? " class=\"numbered\"><span class=\"pub-no\">[" + (offset + list.length - i) + "]</span" : "") + ">" +
      "<div class=\"pub-title\">" + p.t + "</div>" +
      "<div class=\"pub-authors\">" + p.a.replace(ME, "<b class=\"me\">$1</b>") + "</div>" +
      // 저널명 바로 뒤(권·호 앞)에 (SSCI), (KCI) 등을 붙임
      "<div class=\"pub-venue\">" +
      (p.idx ? p.v.replace(/(,\s*\d|$)/, " <b class=\"idx-text\">(" + p.idx + ")</b>$1") : p.v) +
      (p.url ? "<a class=\"pub-link\" href=\"" + p.url + "\" target=\"_blank\" rel=\"noopener\">" +
        (p.url.indexOf("doi.org/") > -1 ? "DOI" : "LINK") + " ↗</a>" : "") +
      "</div></li>"
    ).join("");
  };

  window.renderNews = function (id, limit) {
    const el = document.getElementById(id);
    if (!el) return;
    const list = limit ? NEWS.slice(0, limit) : NEWS;
    el.innerHTML = list.map(n =>
      "<li><span class=\"news-date\">" + n.date + "</span>" +
      "<span class=\"tag " + n.tag + "\">" + n.tag + "</span>" +
      "<span class=\"news-text\">" + n.text + "</span></li>"
    ).join("");
  };
})();
