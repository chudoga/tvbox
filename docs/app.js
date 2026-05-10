const SOURCES = [
  { name: "裤佬", url: "https://pastebin.com/raw/enF00p5e" },
  { name: "游魂", url: "https://www.iyouhun.com/tv/dc" },
  { name: "拾光", url: "https://xmbjm.fh4u.org/dc.txt" }
];

const sourcesEl = document.getElementById('sources');
const toast = document.getElementById('toast');
let toastTimer;

function escapeHtml(str) {
  const d = document.createElement('div');
  d.textContent = str;
  return d.innerHTML;
}

function render() {
  sourcesEl.innerHTML = SOURCES.map((s, i) => `
    <button class="source-btn" id="btn-${i}" onclick="handleClick(${i})" title="点击复制接口链接">
      <span class="name">${escapeHtml(s.name)}</span>
      <span class="url-display">${escapeHtml(s.url)}</span>
    </button>
  `).join('');
}

async function handleClick(idx) {
  const btn = document.getElementById(`btn-${idx}`);
  const s = SOURCES[idx];
  btn.classList.add('checking');

  // Copy to clipboard
  try {
    await navigator.clipboard.writeText(s.url);
  } catch {
    const ta = document.createElement('textarea');
    ta.value = s.url;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
  }

  // Quick health check
  try {
    await fetch(s.url, { method: 'HEAD', mode: 'no-cors', signal: AbortSignal.timeout(5000) });
    showToast(`✅ ${s.name} ✓ 已复制到剪贴板`);
    btn.classList.add('copied');
    btn.classList.remove('checking');
  } catch {
    showToast(`✅ ${s.name} ✓ 已复制到剪贴板`);
    btn.classList.add('copied');
    btn.classList.remove('checking');
  }

  setTimeout(() => {
    btn.classList.remove('copied');
  }, 2000);
}

function showToast(msg) {
  clearTimeout(toastTimer);
  toast.textContent = msg;
  toast.classList.add('show');
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2500);
}

render();
