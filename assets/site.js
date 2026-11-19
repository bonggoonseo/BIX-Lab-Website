/* BIX Lab — 공통 헤더/푸터와 목록 렌더링 */
(function () {
  const NAV = [
    ["index.html", "Home"],
    ["research.html", "Research"],
    ["members.html", "Members"],
    ["publications.html", "Publications"],
    ["news.html", "News"],
    ["contact.html", "Contact"]
  ];
  const here = (location.pathname.split("/").pop() || "index.html").toLowerCase();

  const header = document.getElementById("site-header");
  if (header) {
    header.className = "site-header";
    header.innerHTML =
      '<div class="wrap">' +
      '<a class="brand" href="index.html">' +
      '<span class="brand-mark">BI<span>X</span></span>' +
      '<span class="brand-text"><strong>BIX Lab</strong><small>Hannam University</small></span></a>' +
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
      '<div class="wrap"><div><strong>BIX Lab</strong> · Behavior · Insight · eXperience<br>' +
      "Department of Management Information Systems, Hannam University<br>" +
      "Room 312, College of Business and Economics (경상대학 312호)<br>" +
      "70 Hannam-ro, Daedeok-gu, Daejeon 34430, Korea</div>" +
      '<div><a href="mailto:bgseo@hnu.kr">bgseo@hnu.kr</a> · Tel. <a href="tel:+82426297621">+82-42-629-7621</a><br>' +
      '<a href="https://orcid.org/0000-0002-8636-1530" target="_blank" rel="noopener">ORCID</a> · ' +
      '<a href="https://sites.google.com/view/bgseo" target="_blank" rel="noopener">CV</a><br>© ' +
      new Date().getFullYear() + " BIX Lab. All rights reserved.</div></div>";
  }

  // 저자 목록에서 교수님 이름을 굵게 표시
  const ME = /(Seo, B\. ?G\.\*?|서봉군\*?)/g;

  window.renderPubs = function (id, list) {
    const el = document.getElementById(id);
    if (!el) return;
    el.innerHTML = list.map(p =>
      "<li><div class=\"pub-title\">" + p.t + "</div>" +
      "<div class=\"pub-authors\">" + p.a.replace(ME, "<b class=\"me\">$1</b>") + "</div>" +
      "<div class=\"pub-venue\">" + p.v +
      (p.idx ? "<span class=\"idx\">" + p.idx + "</span>" : "") +
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
