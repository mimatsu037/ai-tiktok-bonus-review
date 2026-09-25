const bonuses = [
  { id: "01", glyph: "診", format: "診断＋AI壁打ち", short: "わたし向きジャンル診断", file: "01_ジャンルAI診断.md", image: "assets/cards/bonus-01-v2.png", visualTitle: "得意・暮らし・続けやすさから方向性を見つける", steps: [["CHECK", "今の自分を棚卸し"], ["NOTICE", "相性のよい方向を発見"], ["NEXT", "試すテーマを1つ選ぶ"]], note: "正解を決める診断ではなく、発信テーマを考える入口として使います。" },
  { id: "02", glyph: "選", format: "商品比較シート", short: "商品選びチェックシート", file: "02_AI商品選定リサーチ.md", image: "assets/cards/bonus-02-v2.png", visualTitle: "紹介しやすさを5つの視点で比べてみる", steps: [["LIST", "候補を3つ並べる"], ["CHECK", "5項目を○△×で確認"], ["TRY", "まず1商品を観察"]], note: "売れる商品を断定せず、自分が誠実に紹介できる候補を見つけます。" },
  { id: "03", glyph: "観", format: "観察＋AI分析", short: "伸びる動画の観察ワーク", file: "03_競合バズ動画AI分析.md", image: "assets/cards/bonus-03-v2.png", visualTitle: "なんとなく見るを、気づける観察に変える", steps: [["WATCH", "1本だけ丁寧に見る"], ["MEMO", "3つの場面を記録"], ["NOTICE", "気づきを1つ残す"]], note: "答え合わせではなく、自分の見る力を育てるためのミニワークです。" },
  { id: "04", glyph: "掴", format: "見本帳", short: "3秒フック見本帳", file: "04_TikTokバズフック100選.md", image: "assets/cards/bonus-04-v2.png", visualTitle: "伝え方の違いを見比べて、自分の言葉にする", steps: [["PICK", "5タイプから選ぶ"], ["ARRANGE", "自分の体験に置き換える"], ["TEST", "1案だけ試してみる"]], note: "完成文をそのまま使わず、誠実な自分の言葉へ整える見本帳です。" },
  { id: "05", glyph: "台", format: "台本＋AI添削", short: "伝わる台本キャンバス", file: "05_売れるTikTok台本AIメーカー.md", image: "assets/cards/bonus-05-v2.png", visualTitle: "伝えたいことを4つの枠に整理する", steps: [["FACT", "事実と体験を分ける"], ["STORY", "4つの枠に配置"], ["TALK", "自分の言葉で話す"]], note: "自動完成ではなく、添削しやすい台本のたたき台を作ります。" },
  { id: "06", glyph: "撮", format: "撮影レシピ", short: "顔出しなし撮影レシピ", file: "06_顔出し不要_勝ちパターン10選.md", image: "assets/cards/bonus-06-v2.png", visualTitle: "手元と商品の見せ方を、5つのレシピから選ぶ", steps: [["STYLE", "無理のない撮り方を選ぶ"], ["SHOT", "必要な3カットを確認"], ["TRY", "15秒だけ撮ってみる"]], note: "機材よりも、商品の使い方が見えることを大切にします。" },
  { id: "07", glyph: "週", format: "週間プランナー", short: "週末60分プランナー", file: "07_週末60分_動画量産プロンプト.md", image: "assets/cards/bonus-07-v2.png", visualTitle: "たくさん作るより、続けられる3本を計画する", steps: [["CHOOSE", "今週のテーマを1つ"], ["PLAN", "3本の役割を分ける"], ["BLOCK", "60分の予定を確保"]], note: "7本の自動量産ではなく、無理のない投稿リズムを作るプランナーです。" },
  { id: "08", glyph: "誘", format: "フレーズ50選", short: "自然なCTAフレーズ50選", file: "08_売り込み感ゼロ_CTA50選.md", image: "assets/cards/bonus-08-v2.png", visualTitle: "押しつけず、次の一歩をそっと案内する", steps: [["GOAL", "投稿の目的を選ぶ"], ["PHRASE", "5タイプを見比べる"], ["TONE", "自分の話し方に整える"]], note: "売るための決め台詞ではなく、視聴者の判断を助ける言葉を集めました。" },
  { id: "09", glyph: "見", format: "早見表＋AI診断", short: "数字の見方・早見表", file: "09_数字を貼るだけ_AI改善診断.md", image: "assets/cards/bonus-09-v2.png", visualTitle: "数字を評価ではなく、次のヒントとして読む", steps: [["OBSERVE", "まず事実だけを見る"], ["GUESS", "仮説は1つに絞る"], ["TEST", "次の投稿で確かめる"]], note: "数字だけで原因を断定せず、添削や検証につなげるための早見表です。" },
  { id: "10", glyph: "歩", format: "行動マップ", short: "初めの7日間ロードマップ", file: "10_30日_初成果ロードマップ.md", image: "assets/cards/bonus-10-v2.png", visualTitle: "完成を急がず、最初の一週間で土台を作る", steps: [["DAY 1–2", "方向性を仮決め"], ["DAY 3–5", "観察と小さな準備"], ["DAY 6–7", "相談できる形にする"]], note: "ひとりで30日を走り切る計画ではなく、伴走を受ける準備を整えます。" }
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
  button.innerHTML = `<span class="card-media"><img src="${bonus.image}" alt="" loading="lazy"><span class="card-shade"></span><span class="bonus-number">BONUS ${bonus.id}</span><span class="bonus-icon" aria-hidden="true">${bonus.glyph}</span></span><span class="card-copy"><small class="bonus-format">${bonus.format}</small><span class="bonus-title">${bonus.short}</span><span class="bonus-summary">${bonus.visualTitle}</span><span class="card-cta">中身を見る <b aria-hidden="true">→</b></span></span>`;
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
  let codeKind = "text";
  let listType = null;

  const closeList = () => {
    if (listType) html += `</${listType}>`;
    listType = null;
  };

  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i];
    if (line.startsWith("```")) {
      closeList();
      if (!inCode) { inCode = true; code = []; codeKind = line.slice(3).trim() || "text"; }
      else {
        const isPrompt = codeKind === "prompt";
        const panelLabel = isPrompt ? "AIへの相談プロンプト" : "書き込み用テンプレート";
        const buttonLabel = isPrompt ? "プロンプトをコピー" : "テンプレートをコピー";
        html += `<section class="copy-panel ${isPrompt ? "prompt-panel" : "template-panel"}"><div class="copy-panel-head"><span><i aria-hidden="true">✦</i> ${panelLabel}</span><button class="prompt-copy" type="button">${buttonLabel}</button></div><pre><code>${escapeHtml(code.join("\n"))}</code></pre></section>`;
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
      if (code) {
        const label = button.textContent?.includes("プロンプト") ? "プロンプト" : "テンプレート";
        copyText(code, `${label}をコピーしました`);
      }
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
