const bonuses = [
  { id: "01", short: "ジャンルAI診断", file: "01_ジャンルAI診断.md" },
  { id: "02", short: "AI商品選定リサーチ", file: "02_AI商品選定リサーチ.md" },
  { id: "03", short: "競合バズ動画AI分析", file: "03_競合バズ動画AI分析.md" },
  { id: "04", short: "TikTokバズフック100選", file: "04_TikTokバズフック100選.md" },
  { id: "05", short: "売れるTikTok台本AIメーカー", file: "05_売れるTikTok台本AIメーカー.md" },
  { id: "06", short: "顔出し不要・勝ちパターン10選", file: "06_顔出し不要_勝ちパターン10選.md" },
  { id: "07", short: "週末60分・動画量産", file: "07_週末60分_動画量産プロンプト.md" },
  { id: "08", short: "売り込み感ゼロ・CTA50選", file: "08_売り込み感ゼロ_CTA50選.md" },
  { id: "09", short: "数字を貼るだけ・AI改善診断", file: "09_数字を貼るだけ_AI改善診断.md" },
  { id: "10", short: "30日・初成果ロードマップ", file: "10_30日_初成果ロードマップ.md" }
];

const list = document.querySelector("#bonus-list");
const placeholder = document.querySelector("#reader-placeholder");
const content = document.querySelector("#reader-content");
const documentRoot = document.querySelector("#document");
const copyButton = document.querySelector("#copy-button");
const backButton = document.querySelector("#back-button");
const prevButton = document.querySelector("#prev-button");
const nextButton = document.querySelector("#next-button");
const toast = document.querySelector("#toast");
let currentIndex = -1;
let currentMarkdown = "";

bonuses.forEach((bonus, index) => {
  const button = document.createElement("button");
  button.className = "bonus-card";
  button.type = "button";
  button.dataset.index = index;
  button.innerHTML = `<span class="bonus-number">${bonus.id}</span><span class="bonus-title">${bonus.short}</span><span class="bonus-arrow">→</span>`;
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
      else { html += `<pre><code>${escapeHtml(code.join("\n"))}</code></pre>`; inCode = false; }
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
  if (inCode) html += `<pre><code>${escapeHtml(code.join("\n"))}</code></pre>`;
  return html;
}

async function openBonus(index, updateHash = true) {
  const bonus = bonuses[index];
  if (!bonus) return;
  currentIndex = index;
  documentRoot.innerHTML = "<p>読み込み中です…</p>";
  placeholder.hidden = true;
  content.hidden = false;
  document.querySelectorAll(".bonus-card").forEach((card, i) => card.classList.toggle("active", i === index));
  prevButton.disabled = index === 0;
  nextButton.disabled = index === bonuses.length - 1;
  try {
    const response = await fetch(`content/${encodeURIComponent(bonus.file)}`);
    if (!response.ok) throw new Error("load failed");
    currentMarkdown = await response.text();
    documentRoot.innerHTML = renderMarkdown(currentMarkdown);
    if (updateHash) history.replaceState(null, "", `#${bonus.id}`);
    if (window.innerWidth <= 900) documentRoot.scrollIntoView({ behavior: "smooth", block: "start" });
  } catch {
    currentMarkdown = "";
    documentRoot.innerHTML = "<h1>読み込めませんでした</h1><p>プレビュー用ファイルの配置を確認してください。</p>";
  }
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 1800);
}

copyButton.addEventListener("click", async () => {
  if (!currentMarkdown) return;
  await navigator.clipboard.writeText(currentMarkdown);
  showToast("本文をコピーしました");
});
backButton.addEventListener("click", () => document.querySelector(".bonus-nav").scrollIntoView({ behavior: "smooth" }));
prevButton.addEventListener("click", () => openBonus(currentIndex - 1));
nextButton.addEventListener("click", () => openBonus(currentIndex + 1));

const initialId = location.hash.replace("#", "");
const initialIndex = bonuses.findIndex(item => item.id === initialId);
if (initialIndex >= 0) openBonus(initialIndex, false);
