const bonuses = [
  { id: "01", glyph: "診", format: "診断＋AI壁打ち", short: "わたし向きジャンル診断", titleParts: ["わたし向き", "ジャンル診断"], file: "01_ジャンルAI診断.md", image: "assets/cards/bonus-01-v2.png", visualTitle: "得意・暮らし・続けやすさから方向性を見つける", steps: [["CHECK", "今の自分を棚卸し"], ["NOTICE", "相性のよい方向を発見"], ["NEXT", "試すテーマを1つ選ぶ"]], note: "正解を決める診断ではなく、発信テーマを考える入口として使います。" },
  { id: "02", glyph: "選", format: "商品比較シート", short: "商品選びチェックシート", titleParts: ["商品選び", "チェックシート"], file: "02_AI商品選定リサーチ.md", image: "assets/cards/bonus-02-v2.png", visualTitle: "紹介しやすさを5つの視点で比べてみる", steps: [["LIST", "候補を3つ並べる"], ["CHECK", "5項目を○△×で確認"], ["TRY", "まず1商品を観察"]], note: "売れる商品を断定せず、[br]自分が誠実に紹介できる候補を見つけます。" },
  { id: "03", glyph: "観", format: "観察＋AI分析", short: "伸びる動画の観察ワーク", titleParts: ["伸びる動画の", "観察ワーク"], file: "03_競合バズ動画AI分析.md", image: "assets/cards/bonus-03-v2.png", visualTitle: "なんとなく見るを、気づける観察に変える", steps: [["WATCH", "1本だけ丁寧に見る"], ["MEMO", "3つの場面を記録"], ["NOTICE", "気づきを1つ残す"]], note: "答え合わせではなく、[br]自分の見る力を育てるためのミニワークです。" },
  { id: "04", glyph: "掴", format: "見本帳", short: "3秒フック見本帳", titleParts: ["3秒フック", "見本帳"], file: "04_TikTokバズフック100選.md", image: "assets/cards/bonus-04-v2.png", visualTitle: "伝え方の違いを見比べて、[br]自分の言葉にする", steps: [["PICK", "5タイプから選ぶ"], ["ARRANGE", "自分の体験に置き換える"], ["TEST", "1案だけ試してみる"]], note: "完成文をそのまま使わず、[br]誠実な自分の言葉へ整える見本帳です。" },
  { id: "05", glyph: "台", format: "台本＋AI添削", short: "伝わる台本キャンバス", titleParts: ["伝わる台本", "キャンバス"], file: "05_売れるTikTok台本AIメーカー.md", image: "assets/cards/bonus-05-v2.png", visualTitle: "伝えたいことを4つの枠に整理する", steps: [["FACT", "事実と体験を分ける"], ["STORY", "4つの枠に配置"], ["TALK", "自分の言葉で話す"]], note: "自動完成ではなく、[br]添削しやすい台本のたたき台を作ります。" },
  { id: "06", glyph: "撮", format: "撮影レシピ", short: "顔出しなし撮影レシピ", titleParts: ["顔出しなし", "撮影レシピ"], file: "06_顔出し不要_勝ちパターン10選.md", image: "assets/cards/bonus-06-v2.png", visualTitle: "手元と商品の見せ方を、5つのレシピから選ぶ", steps: [["STYLE", "無理のない撮り方を選ぶ"], ["SHOT", "必要な3カットを確認"], ["TRY", "15秒だけ撮ってみる"]], note: "機材よりも、[br]商品の使い方が見えることを大切にします。" },
  { id: "07", glyph: "週", format: "週間プランナー", short: "週末60分プランナー", titleParts: ["週末60分", "プランナー"], file: "07_週末60分_動画量産プロンプト.md", image: "assets/cards/bonus-07-v2.png", visualTitle: "たくさん作るより、[br]続けられる3本を計画する", steps: [["CHOOSE", "今週のテーマを1つ"], ["PLAN", "3本の役割を分ける"], ["BLOCK", "60分の予定を確保"]], note: "7本の自動量産ではなく、[br]無理のない投稿リズムを作るプランナーです。" },
  { id: "08", glyph: "誘", format: "フレーズ50選", short: "自然なCTAフレーズ50選", titleParts: ["自然なCTA", "フレーズ50選"], file: "08_売り込み感ゼロ_CTA50選.md", image: "assets/cards/bonus-08-v2.png", visualTitle: "押しつけず、次の一歩をそっと案内する", steps: [["GOAL", "投稿の目的を選ぶ"], ["PHRASE", "5タイプを見比べる"], ["TONE", "自分の話し方に整える"]], note: "売るための決め台詞ではなく、視聴者の判断を助ける言葉を集めました。" },
  { id: "09", glyph: "見", format: "早見表＋AI診断", short: "数字の見方・早見表", titleParts: ["数字の見方", "早見表"], file: "09_数字を貼るだけ_AI改善診断.md", image: "assets/cards/bonus-09-v2.png", visualTitle: "数字を評価ではなく、次のヒントとして読む", steps: [["OBSERVE", "まず事実だけを見る"], ["GUESS", "仮説は1つに絞る"], ["TEST", "次の投稿で確かめる"]], note: "数字だけで原因を断定せず、添削や検証につなげるための早見表です。" },
  { id: "10", glyph: "歩", format: "行動マップ", short: "初めの7日間ロードマップ", titleParts: ["初めの7日間", "ロードマップ"], file: "10_30日_初成果ロードマップ.md", image: "assets/cards/bonus-10-v2.png", visualTitle: "完成を急がず、最初の一週間で土台を作る", steps: [["DAY 1–2", "方向性を仮決め"], ["DAY 3–5", "観察と小さな準備"], ["DAY 6–7", "相談できる形にする"]], note: "ひとりで30日を走り切る計画ではなく、伴走を受ける準備を整えます。" }
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
  const titleLines = bonus.titleParts.map(part => `<span>${part}</span>`).join("");
  button.innerHTML = `<span class="card-media"><img src="${bonus.image}" alt="" loading="lazy"><span class="card-shade"></span><span class="bonus-number">BONUS ${bonus.id}</span><span class="card-overlay"><small>${bonus.format}</small><strong>${titleLines}</strong><em>${inline(bonus.visualTitle)}</em></span></span><span class="card-cta">中身を見る <b aria-hidden="true">→</b></span>`;
  button.addEventListener("click", () => openBonus(index));
  list.appendChild(button);
});

function escapeHtml(value) {
  return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

function inline(text) {
  return escapeHtml(text)
    .replace(/\[br\]/g, '<br class="manual-break">')
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
      <div><p>AT A GLANCE / 特典${bonus.id}</p><h2>${inline(bonus.visualTitle)}</h2></div>
    </div>
    <div class="diagram-flow">${steps}</div>
    <figcaption>${inline(bonus.note)}</figcaption>
  </figure>`;
}

function renderRecipeGallery() {
  const recipes = [
    ["手元で実演", "困りごと → 使う瞬間 → 使用後", "水滴を拭く手元から、乾いた面まで見せる", "assets/illustrations/recipe-hand-demo-v2.png", "クロスで水滴を拭く手元"],
    ["大きさを比較", "商品全体 → 手と並べる → 収納", "バッグを手やノートと並べ、サイズ感を伝える", "assets/illustrations/recipe-size-compare-v2.png", "バッグとノートを並べた大きさ比較"],
    ["画面を実演", "困った画面 → 1操作 → 完了", "指の動きと操作後の変化を同じ画角で見せる", "assets/illustrations/recipe-screen-demo-v2.png", "スマートフォンを指で操作する様子"],
    ["A・Bを比較", "比較条件 → 同じ画角 → 向く人", "同じ量・同じ角度で違いをひとつ見せる", "assets/illustrations/recipe-ab-compare-v2.png", "2つの商品を同じ条件で比較する様子"],
    ["写真＋声", "結果写真 → 使用場面 → 注意点", "3枚の写真に声を重ね、最後に注意点を添える", "assets/illustrations/recipe-photo-voice-v3.png", "同じ収納商品の結果・使用場面・注意点を3枚で見せる動画づくり"]
  ];
  return `<div class="recipe-gallery">${recipes.map((recipe, index) => `
    <article class="recipe-card recipe-${index + 1}">
      <img src="${recipe[3]}" alt="${recipe[4]}" loading="lazy" decoding="async">
      <div class="recipe-card-body">
        <div class="recipe-card-title"><span>0${index + 1}</span><h3>${recipe[0]}</h3></div>
        <p class="recipe-cuts">${recipe[1]}</p>
        <p>${recipe[2]}</p>
      </div>
    </article>`).join("")}</div>`;
}

function renderMarkdown(source) {
  const lines = source.replace(/\r/g, "").split("\n");
  let html = "";
  let inCode = false;
  let code = [];
  let codeKind = "text";
  let listType = null;
  let tableIndex = 0;

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
        if (isPrompt) {
          html += `<details class="copy-panel prompt-panel"><summary><span><i aria-hidden="true">✦</i> AIプロンプトを見る</span><span class="prompt-toggle">表示する ＋</span></summary><div class="copy-panel-body"><div class="copy-actions"><button class="prompt-copy" type="button">${buttonLabel}</button></div><pre><code>${escapeHtml(code.join("\n"))}</code></pre></div></details>`;
        } else {
          html += `<section class="copy-panel template-panel"><div class="copy-panel-head"><span><i aria-hidden="true">✦</i> ${panelLabel}</span><button class="prompt-copy" type="button">${buttonLabel}</button></div><pre><code>${escapeHtml(code.join("\n"))}</code></pre></section>`;
        }
        inCode = false;
      }
      continue;
    }
    if (inCode) { code.push(line); continue; }
    if (!line.trim()) { closeList(); continue; }

    if (line.trim() === "{{recipe-gallery}}") {
      closeList();
      html += renderRecipeGallery();
      continue;
    }

    if (line.startsWith("|")) {
      closeList();
      const rows = [];
      while (i < lines.length && lines[i].startsWith("|")) {
        rows.push(lines[i].split("|").slice(1, -1).map(cell => cell.trim()));
        i += 1;
      }
      i -= 1;
      const usable = rows.filter((row, idx) => idx !== 1 || !row.every(cell => /^:?-+:?$/.test(cell)));
      const labels = usable[0] || [];
      const tableClass = labels.includes("商品A") ? "compare-table" : labels.includes("場面") && labels.includes("見えたもの") ? "scene-table" : "standard-table";
      const currentTableIndex = tableIndex;
      tableIndex += 1;
      html += `<div class="table-wrap ${tableClass}"><table>` + usable.map((row, rowIndex) => `<tr>${row.map((cell, cellIndex) => {
        if (rowIndex === 0) return `<th>${inline(cell)}</th>`;
        const isRatingCell = tableClass === "compare-table" && cellIndex > 0 && !cell;
        const value = isRatingCell
          ? `<div class="rating-group" aria-label="${escapeHtml(labels[cellIndex])}の評価"><button type="button" aria-pressed="false">○</button><button type="button" aria-pressed="false">△</button><button type="button" aria-pressed="false">×</button></div>`
          : (cell ? inline(cell) : `<textarea class="note-input" rows="2" data-field="${currentTableIndex}-${rowIndex}-${cellIndex}" aria-label="${escapeHtml(labels[cellIndex] || "メモ")}の記入欄" placeholder="ここに入力"></textarea>`);
        return `<td data-label="${escapeHtml(labels[cellIndex] || "項目")}">${value}</td>`;
      }).join("")}</tr>`).join("") + "</table></div>";
      continue;
    }

    const imageBlock = line.match(/^!\[([^\]]*)\]\(([^\s)]+)(?:\s+"([^"]*)")?\)$/);
    if (imageBlock) {
      closeList();
      const alt = escapeHtml(imageBlock[1]);
      const src = escapeHtml(imageBlock[2]);
      const caption = imageBlock[3] ? `<figcaption>${inline(imageBlock[3])}</figcaption>` : "";
      html += `<figure class="lesson-visual"><img src="${src}" alt="${alt}" loading="lazy" decoding="async">${caption}</figure>`;
      continue;
    }

    const heading = line.match(/^(#{1,3})\s+(.+)$/);
    if (heading) {
      closeList();
      const level = heading[1].length;
      const titleParts = level === 1 ? heading[2].split("｜") : [];
      if (titleParts.length === 2) {
        html += `<h1 class="bonus-heading"><span>${inline(titleParts[0])}</span><strong>${inline(titleParts[1])}</strong></h1>`;
      } else {
        html += `<h${level}>${inline(heading[2])}</h${level}>`;
      }
      continue;
    }
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

function formatJapaneseText(root) {
  const selector = "h1, h2, h3, p, li, th, td, blockquote, figcaption, .diagram-step strong";
  const quotePattern = /(「[^」]*」|『[^』]*』)/g;
  const quoteSuffixPattern = /^(ことではなく|ではなく|という|では|とは|には|から|まで|より|だけ|は|が|を|に|へ|と|で|も|の|や)/;
  root.querySelectorAll(selector).forEach(element => {
    if (element.closest("pre, code, textarea, button, .rating-group")) return;
    const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(node => {
      const value = node.nodeValue || "";
      if (!/[ぁ-んァ-ヶ一-龠々ー。]/.test(value)) return;
      const sentences = value.match(/[^。]*。|[^。]+/g) || [value];
      const fragment = document.createDocumentFragment();
      sentences.forEach((sentence, sentenceIndex) => {
        const parts = sentence.split(quotePattern).filter(Boolean);
        parts.forEach((part, partIndex) => {
          if (!/^(?:「[^」]*」|『[^』]*』)$/.test(part)) {
            fragment.appendChild(document.createTextNode(part));
            return;
          }

          let quoteText = part;
          const following = parts[partIndex + 1] || "";
          const suffix = following.match(quoteSuffixPattern)?.[0] || "";
          if (suffix && Array.from(`${quoteText}${suffix}`).length <= 18) {
            quoteText += suffix;
            parts[partIndex + 1] = following.slice(suffix.length);
          }
          const quote = document.createElement("span");
          quote.className = `jp-quote${Array.from(quoteText).length > 18 ? " is-long" : ""}`;
          quote.textContent = quoteText;
          fragment.appendChild(quote);
        });
        if (sentence.endsWith("。") && sentenceIndex < sentences.length - 1) {
          const lineBreak = document.createElement("br");
          lineBreak.className = "sentence-break";
          fragment.appendChild(lineBreak);
        }
      });
      node.replaceWith(fragment);
    });
    element.querySelectorAll("strong").forEach(strong => {
      const next = strong.nextSibling;
      if (!next || next.nodeType !== Node.TEXT_NODE) return;
      const match = (next.nodeValue || "").match(/^(\s*)(ではなく|という|では|とは|には|から|まで|より|だけ|は|が|を|に|へ|と|で|も|の|や)/);
      if (!match) return;
      const particle = document.createElement("span");
      particle.textContent = `${match[1]}${match[2]}`;
      next.nodeValue = (next.nodeValue || "").slice(match[0].length);
      const inlineBind = document.createElement("span");
      inlineBind.className = "inline-bind";
      strong.before(inlineBind);
      inlineBind.append(strong, particle);
    });
    if (element.tagName === "H2" && element.parentElement === root && !element.querySelector(":scope > .heading-copy")) {
      const headingCopy = document.createElement("span");
      headingCopy.className = "heading-copy";
      while (element.firstChild) headingCopy.appendChild(element.firstChild);
      element.appendChild(headingCopy);
    }
  });
}

function attachEditableFields(bonusId) {
  documentRoot.querySelectorAll(".note-input").forEach(field => {
    const storageKey = `ai-tiktok-bonus-${bonusId}-${field.dataset.field}`;
    const resize = () => {
      field.style.height = "auto";
      field.style.height = `${Math.max(72, field.scrollHeight)}px`;
    };
    try { field.value = localStorage.getItem(storageKey) || ""; } catch {}
    field.addEventListener("input", () => {
      try { localStorage.setItem(storageKey, field.value); } catch {}
      resize();
    });
    resize();
  });
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
  documentRoot.querySelectorAll(".prompt-panel").forEach(panel => {
    panel.addEventListener("toggle", () => {
      const label = panel.querySelector(".prompt-toggle");
      if (label) label.textContent = panel.open ? "閉じる −" : "表示する ＋";
    });
  });
  documentRoot.querySelectorAll(".prompt-copy").forEach(button => {
    button.addEventListener("click", () => {
      const code = button.closest(".copy-panel")?.querySelector("code")?.textContent || "";
      if (code) {
        const label = button.textContent?.includes("プロンプト") ? "プロンプト" : "テンプレート";
        copyText(code, `${label}をコピーしました`);
      }
    });
  });
  documentRoot.querySelectorAll(".rating-group button").forEach(button => {
    button.addEventListener("click", () => {
      button.parentElement.querySelectorAll("button").forEach(item => item.setAttribute("aria-pressed", String(item === button)));
    });
  });
}

function enhanceGenreQuiz() {
  const questionHeadings = Array.from(documentRoot.querySelectorAll("h3")).filter(heading => /^Q[1-5]\./.test(heading.textContent.trim()));
  const resultHeading = Array.from(documentRoot.querySelectorAll("h2")).find(heading => heading.textContent.trim() === "結果の見方");
  if (questionHeadings.length !== 5 || !resultHeading) return;

  const scoreboard = document.createElement("section");
  scoreboard.className = "quiz-scoreboard";
  scoreboard.innerHTML = `
    <div class="quiz-score-head"><div><small>YOUR RESULT</small><h2>回答の多さを見える化</h2></div><button class="quiz-reset" type="button">選び直す</button></div>
    <div class="score-cards">
      <div class="score-card" data-score="A"><span>A</span><div><strong>0</strong><small>/ 5</small><em>暮らし・実演</em></div><i></i></div>
      <div class="score-card" data-score="B"><span>B</span><div><strong>0</strong><small>/ 5</small><em>比較・整理</em></div><i></i></div>
      <div class="score-card" data-score="C"><span>C</span><div><strong>0</strong><small>/ 5</small><em>経験・共感</em></div><i></i></div>
    </div>
    <p class="quiz-summary" aria-live="polite">5問に答えると、いちばん多いタイプが<br class="manual-break">ここに表示されます。</p>`;
  resultHeading.before(scoreboard);

  const updateScore = () => {
    const counts = { A: 0, B: 0, C: 0 };
    documentRoot.querySelectorAll(".quiz-choice[aria-pressed='true']").forEach(button => { counts[button.dataset.choice] += 1; });
    const max = Math.max(counts.A, counts.B, counts.C);
    const leaders = Object.keys(counts).filter(key => counts[key] === max && max > 0);
    scoreboard.querySelectorAll(".score-card").forEach(card => {
      const key = card.dataset.score;
      card.querySelector("strong").textContent = counts[key];
      card.querySelector("i").style.setProperty("--score", `${counts[key] * 20}%`);
      card.classList.toggle("is-leading", leaders.includes(key));
    });
    const summary = scoreboard.querySelector(".quiz-summary");
    if (!max) summary.innerHTML = '5問に答えると、いちばん多いタイプが<br class="manual-break">ここに表示されます。';
    else if (leaders.length > 1) summary.textContent = `${leaders.join("・")}が同数です。今週いちばん撮りやすい方向から試してみましょう。`;
    else summary.textContent = `${leaders[0]}がいちばん多い結果です。下の「結果の見方」で方向性を確認しましょう。`;
  };

  questionHeadings.forEach((heading, questionIndex) => {
    const list = heading.nextElementSibling;
    if (!list || list.tagName !== "UL") return;
    list.classList.add("quiz-options");
    list.dataset.question = questionIndex + 1;
    Array.from(list.children).forEach(item => {
      const match = item.textContent.trim().match(/^([ABC])：(.+)$/);
      if (!match) return;
      const choiceHtml = item.innerHTML.replace(/^[ABC]：/, "");
      item.innerHTML = `<button class="quiz-choice" type="button" data-choice="${match[1]}" aria-pressed="false"><span>${match[1]}</span><em>${choiceHtml}</em></button>`;
      item.querySelector("button").addEventListener("click", event => {
        list.querySelectorAll(".quiz-choice").forEach(button => button.setAttribute("aria-pressed", String(button === event.currentTarget)));
        updateScore();
      });
    });
  });
  scoreboard.querySelector(".quiz-reset").addEventListener("click", () => {
    documentRoot.querySelectorAll(".quiz-choice").forEach(button => button.setAttribute("aria-pressed", "false"));
    updateScore();
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
    const response = await fetch(`content/${encodeURIComponent(bonus.file)}`, { cache: "no-store" });
    if (!response.ok) throw new Error("load failed");
    const markdown = await response.text();
    documentRoot.innerHTML = renderDiagram(bonus) + renderMarkdown(markdown);
    if (bonus.id === "01") enhanceGenreQuiz();
    formatJapaneseText(documentRoot);
    attachEditableFields(bonus.id);
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
