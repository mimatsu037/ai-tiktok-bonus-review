const bonuses = [
  { id: "01", glyph: "診", short: "ジャンルAI診断", file: "01_ジャンルAI診断.md", image: "assets/cards/bonus-01.png", visualTitle: "自分に合う発信テーマを3候補まで絞る", steps: [["INPUT", "好き・経験・条件"], ["AI CHECK", "6基準で相性診断"], ["OUTPUT", "候補3つ＋動画ネタ"]], note: "迷ったまま投稿を始めず、90日続けやすい土台を先に決めます。" },
  { id: "02", glyph: "選", short: "AI商品選定リサーチ", file: "02_AI商品選定リサーチ.md", image: "assets/cards/bonus-02.png", visualTitle: "“売れそう”を感覚ではなく8項目で判断", steps: [["CANDIDATE", "紹介したい商品"], ["SCORE", "8項目・40点で採点"], ["DECIDE", "試す／保留／見送る"]], note: "商品を変え続ける前に、動画で価値を伝えやすいかを見極めます。" },
  { id: "03", glyph: "析", short: "競合バズ動画AI分析", file: "03_競合バズ動画AI分析.md", image: "assets/cards/bonus-03.png", visualTitle: "競合の表現ではなく、伸びた“構造”を学ぶ", steps: [["WATCH", "競合動画を記録"], ["BREAKDOWN", "フック・実演・CTA"], ["REBUILD", "自分の企画へ変換"]], note: "固有の言い回しや素材はコピーせず、再現できる型だけを抽出します。" },
  { id: "04", glyph: "掴", short: "TikTokバズフック100選", file: "04_TikTokバズフック100選.md", image: "assets/cards/bonus-04.png", visualTitle: "冒頭3秒で“自分向け”だと伝える", steps: [["TARGET", "視聴者の悩み"], ["HOOK", "10カテゴリから選択"], ["3 SEC", "続きを見たい冒頭"]], note: "同じ本編にフックを3種類作ると、反応の違いを比較できます。" },
  { id: "05", glyph: "台", short: "売れるTikTok台本AIメーカー", file: "05_売れるTikTok台本AIメーカー.md", image: "assets/cards/bonus-05.png", visualTitle: "商品情報を30秒の撮れる台本へ変換", steps: [["FACT", "特徴・体験・注意点"], ["SCRIPT", "秒数ごとに構成"], ["SHOOT", "セリフ＋撮影カット"]], note: "事実と感想を分け、メリットだけでなく注意点も伝える台本です。" },
  { id: "06", glyph: "撮", short: "顔出し不要・勝ちパターン10選", file: "06_顔出し不要_勝ちパターン10選.md", image: "assets/cards/bonus-06.png", visualTitle: "顔を出さずに商品の魅力を見せる", steps: [["STYLE", "10パターンから選ぶ"], ["SCENE", "手元・画面・比較"], ["VIDEO", "伝わる商品紹介"]], note: "商品と撮影環境に合った見せ方を選び、制作の迷いを減らします。" },
  { id: "07", glyph: "量", short: "週末60分・動画量産", file: "07_週末60分_動画量産プロンプト.md", image: "assets/cards/bonus-07.png", visualTitle: "1商品から7日分の切り口をまとめて作る", steps: [["1 ITEM", "商品情報を整理"], ["7 ANGLES", "悩み・実演・比較"], ["1 WEEK", "7本分の企画と台本"]], note: "共通カットをまとめ撮りし、毎日ゼロから作る負担を減らします。" },
  { id: "08", glyph: "誘", short: "売り込み感ゼロ・CTA50選", file: "08_売り込み感ゼロ_CTA50選.md", image: "assets/cards/bonus-08.png", visualTitle: "投稿の目的に合わせて行動を1つだけ促す", steps: [["GOAL", "保存・質問・確認"], ["CTA", "50例から1つ選ぶ"], ["ACTION", "自然な次の一歩"]], note: "強く売り込まず、判断材料を渡して視聴者自身に選んでもらいます。" },
  { id: "09", glyph: "改", short: "数字を貼るだけ・AI改善診断", file: "09_数字を貼るだけ_AI改善診断.md", image: "assets/cards/bonus-09.png", visualTitle: "投稿データを次の1本の改善へつなげる", steps: [["DATA", "再生・視聴・クリック"], ["DIAGNOSE", "事実と仮説を分離"], ["NEXT", "変える要素を1つ決定"]], note: "一度に全部変えず、影響が大きそうな1要素だけを検証します。" },
  { id: "10", glyph: "走", short: "30日・初成果ロードマップ", file: "10_30日_初成果ロードマップ.md", image: "assets/cards/bonus-10.png", visualTitle: "30日で発信と改善のサイクルを作る", steps: [["WEEK 1", "土台と商品選定"], ["WEEK 2–3", "調査・制作・投稿"], ["WEEK 4", "量産・分析・改善"]], note: "成果の保証ではなく、迷わず実践を続けるための行動計画です。" }
];

const list = document.querySelector("#bonus-list");
const content = document.querySelector("#reader-content");
const documentRoot = document.querySelector("#document");
const backButton = document.querySelector("#back-button");
const prevButton = document.querySelector("#prev-button");
const nextButton = document.querySelector("#next-button");
const toast = document.querySelector("#toast");
let currentIndex = -1;

bonuses.forEach((bonus, index) => {
  const button = document.createElement("button");
  button.className = "bonus-card";
  button.type = "button";
  button.dataset.index = index;
  button.innerHTML = `<span class="card-media"><img src="${bonus.image}" alt="" loading="lazy"><span class="card-shade"></span><span class="bonus-number">BONUS ${bonus.id}</span><span class="bonus-icon" aria-hidden="true">${bonus.glyph}</span></span><span class="card-copy"><span class="bonus-title">${bonus.short}</span><span class="bonus-summary">${bonus.visualTitle}</span><span class="card-cta">教材を見る <b aria-hidden="true">→</b></span></span>`;
  button.addEventListener("click", () => openBonus(index));
  list.appendChild(button);
});

function escapeHtml(value) {
  return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

function inline(text) {
  return escapeHtml(text)
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
}

function renderDiagram(bonus) {
  const steps = bonus.steps.map((step, index) => `
    <div class="diagram-step">
      <span class="diagram-index">0${index + 1}</span>
      <small>${step[0]}</small>
      <strong>${step[1]}</strong>
    </div>${index < bonus.steps.length - 1 ? '<span class="diagram-arrow" aria-hidden="true">→</span>' : ''}`
  ).join("");
  return `<figure class="bonus-diagram">
    <div class="diagram-title-row">
      <span class="diagram-glyph" aria-hidden="true">${bonus.glyph}</span>
      <div><p>AT A GLANCE / 特典${bonus.id}</p><h2>${bonus.visualTitle}</h2></div>
    </div>
    <div class="diagram-flow">${steps}</div>
    <figcaption>${bonus.note}</figcaption>
  </figure>`;
}

function renderMarkdown(source) {
  const lines = source.replace(/\r/g, "").split("\n");
  let html = "";
  let inCode = false;
  let code = [];
  let listType = null;

  const closeList = () => {
    if (listType) html += `</${listType}>`;
    listType = null;
  };

  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i];
    if (line.startsWith("```")) {
      closeList();
      if (!inCode) { inCode = true; code = []; }
      else {
        html += `<section class="copy-panel"><div class="copy-panel-head"><span><i aria-hidden="true">✦</i> コピペ用プロンプト</span><button class="prompt-copy" type="button">プロンプトをコピー</button></div><pre><code>${escapeHtml(code.join("\n"))}</code></pre></section>`;
        inCode = false;
      }
      continue;
    }
    if (inCode) { code.push(line); continue; }
    if (!line.trim()) { closeList(); continue; }

    if (line.startsWith("|")) {
      closeList();
      const rows = [];
      while (i < lines.length && lines[i].startsWith("|")) {
        rows.push(lines[i].split("|").slice(1, -1).map(cell => cell.trim()));
        i += 1;
      }
      i -= 1;
      const usable = rows.filter((row, idx) => idx !== 1 || !row.every(cell => /^:?-+:?$/.test(cell)));
      html += "<table>" + usable.map((row, rowIndex) => `<tr>${row.map(cell => rowIndex === 0 ? `<th>${inline(cell)}</th>` : `<td>${inline(cell)}</td>`).join("")}</tr>`).join("") + "</table>";
      continue;
    }

    const heading = line.match(/^(#{1,3})\s+(.+)$/);
    if (heading) { closeList(); const level = heading[1].length; html += `<h${level}>${inline(heading[2])}</h${level}>`; continue; }
    const ordered = line.match(/^\d+\.\s+(.+)$/);
    const unordered = line.match(/^[-*]\s+(.+)$/);
    if (ordered || unordered) {
      const type = ordered ? "ol" : "ul";
      if (listType !== type) { closeList(); listType = type; html += `<${type}>`; }
      html += `<li>${inline((ordered || unordered)[1])}</li>`;
      continue;
    }
    if (line.startsWith("> ")) { closeList(); html += `<blockquote>${inline(line.slice(2))}</blockquote>`; continue; }
    closeList();
    html += `<p>${inline(line)}</p>`;
  }
  closeList();
  if (inCode) html += `<section class="copy-panel"><div class="copy-panel-head"><span><i aria-hidden="true">✦</i> コピペ用テキスト</span><button class="prompt-copy" type="button">テキストをコピー</button></div><pre><code>${escapeHtml(code.join("\n"))}</code></pre></section>`;
  return html;
}

async function copyText(text, successMessage) {
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const field = document.createElement("textarea");
    field.value = text;
    field.setAttribute("readonly", "");
    field.style.position = "fixed";
    field.style.opacity = "0";
    document.body.appendChild(field);
    field.select();
    document.execCommand("copy");
    field.remove();
  }
  showToast(successMessage);
}

function attachPromptCopyButtons() {
  documentRoot.querySelectorAll(".prompt-copy").forEach(button => {
    button.addEventListener("click", () => {
      const code = button.closest(".copy-panel")?.querySelector("code")?.textContent || "";
      if (code) copyText(code, "プロンプトをコピーしました");
    });
  });
}

async function openBonus(index, updateHash = true) {
  const bonus = bonuses[index];
  if (!bonus) return;
  currentIndex = index;
  documentRoot.innerHTML = "<p>読み込み中です…</p>";
  document.querySelectorAll(".bonus-card").forEach((card, i) => card.classList.toggle("active", i === index));
  prevButton.disabled = index === 0;
  nextButton.disabled = index === bonuses.length - 1;
  try {
    const response = await fetch(`content/${encodeURIComponent(bonus.file)}`);
    if (!response.ok) throw new Error("load failed");
    const markdown = await response.text();
    documentRoot.innerHTML = renderDiagram(bonus) + renderMarkdown(markdown);
    attachPromptCopyButtons();
    if (updateHash) history.replaceState(null, "", `#${bonus.id}`);
    if (updateHash) document.querySelector("#reader").scrollIntoView({ behavior: "smooth", block: "start" });
  } catch {
    documentRoot.innerHTML = "<h1>読み込めませんでした</h1><p>プレビュー用ファイルの配置を確認してください。</p>";
  }
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 1800);
}

backButton.addEventListener("click", () => document.querySelector("#bonus-nav").scrollIntoView({ behavior: "smooth" }));
prevButton.addEventListener("click", () => openBonus(currentIndex - 1));
nextButton.addEventListener("click", () => openBonus(currentIndex + 1));

const initialId = location.hash.replace("#", "");
const initialIndex = bonuses.findIndex(item => item.id === initialId);
openBonus(initialIndex >= 0 ? initialIndex : 0, false);
