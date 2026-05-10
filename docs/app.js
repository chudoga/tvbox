/* ============ Data ============ */
// 多仓接口 - 每个仓可以有多条线路
const SOURCES_DATA = [
  {
    "name": "裤佬",
    "desc": "TG频道 @stymei",
    "urls": [
      { "label": "接口", "url": "https://jsnzkpg.github.io/" },
      { "label": "备用", "url": "https://pastebin.com/raw/enF00p5e" }
    ]
  },
  {
    "name": "欧歌",
    "desc": "",
    "urls": [
      { "label": "接口", "url": "https://xn--5jj5-wn6lw489o.v.nxog.top/apia?id=1" }
    ]
  },
  {
    "name": "游魂",
    "desc": "",
    "urls": [
      { "label": "接口", "url": "https://app.iyouhun.com/detail.php?id=888" },
      { "label": "接口2", "url": "https://www.iyouhun.com/tv/dc" }
    ]
  },
  {
    "name": "自建拾光在线",
    "desc": "",
    "urls": [
      { "label": "接口", "url": "https://gitee.com/chudogb/tvbox/raw/master/shiguang" },
      { "label": "备用", "url": "https://xmbjm.fh4u.org/dc.txt" }
    ]
  }
];

/* ============ State ============ */
let allCards = [];
let totalSourceCount = 0;

/* ============ DOM Refs ============ */
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

const categoriesEl = $('#categories');
const searchInput = $('#searchInput');
const searchClear = $('#searchClear');
const emptyState = $('#emptyState');
const totalCount = $('#totalCount');
const toast = $('#toast');

/* ============ Theme ============ */
function initTheme() {
  const saved = localStorage.getItem('theme');
  const html = document.documentElement;
  if (saved === 'dark' || saved === 'light') {
    html.setAttribute('data-theme', saved);
  } else {
    html.setAttribute('data-theme', 'auto');
  }
}

function toggleTheme() {
  const html = document.documentElement;
  const current = html.getAttribute('data-theme');
  let next;
  if (current === 'auto' || current === 'light') {
    next = 'dark';
  } else {
    next = 'light';
  }
  html.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
}

/* ============ Render ============ */
function render() {
  totalSourceCount = SOURCES_DATA.length;
  let html = '';

  SOURCES_DATA.forEach((entry, idx) => {
    const cardId = `card-${idx}`;
    const urlsHtml = entry.urls.map((u, ui) => {
      const urlId = `${cardId}-url-${ui}`;
      return `
        <div class="card-url-row" id="${urlId}">
          <span class="url-label">${escapeHtml(u.label)}</span>
          <span class="url-text" title="${escapeHtml(u.url)}">${escapeHtml(u.url)}</span>
          <div class="url-actions">
            <button class="btn btn-copy" onclick="copyUrl('${escapeHtml(u.url)}', this)" title="复制链接">复制</button>
            <button class="btn btn-check" onclick="checkUrl('${escapeHtml(u.url)}', '${urlId}')" title="检测可用性">检测</button>
          </div>
        </div>
      `;
    }).join('');

    html += `
      <div class="source-card" id="${cardId}" data-name="${entry.name}">
        <div class="card-header">
          <span class="card-name">${entry.name}</span>
          ${entry.desc ? `<span class="card-desc">${entry.desc}</span>` : ''}
          <span class="card-badge">${entry.urls.length} 条线路</span>
        </div>
        <div class="card-urls">${urlsHtml}</div>
      </div>
    `;
  });

  categoriesEl.innerHTML = html;
  totalCount.textContent = totalSourceCount;
  updateStats();
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

/* ============ Copy ============ */
async function copyUrl(url, btn) {
  try {
    await navigator.clipboard.writeText(url);
    btn.textContent = '已复制';
    btn.classList.add('copied');
    setTimeout(() => {
      btn.textContent = '复制';
      btn.classList.remove('copied');
    }, 2000);
    showToast('✅ 已复制到剪贴板');
  } catch {
    // Fallback
    const ta = document.createElement('textarea');
    ta.value = url;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    btn.textContent = '已复制';
    btn.classList.add('copied');
    setTimeout(() => {
      btn.textContent = '复制';
      btn.classList.remove('copied');
    }, 2000);
    showToast('✅ 已复制到剪贴板');
  }
}

/* ============ Status Check ============ */
async function checkUrl(url, urlId) {
  const row = document.getElementById(urlId);
  const btn = row.querySelector('.btn-check');
  btn.disabled = true;
  btn.textContent = '检测中...';

  try {
    await fetch(url, {
      method: 'HEAD',
      mode: 'no-cors',
      signal: AbortSignal.timeout(8000)
    });
    btn.textContent = '✓ 正常';
    btn.style.color = 'var(--status-online)';
    showToast(`✅ ${url} 可达`);
  } catch {
    btn.textContent = '✗ 超时';
    btn.style.color = 'var(--status-offline)';
    showToast(`⚠️ ${url} 不可达（可能被CORS限制）`);
  }
  btn.disabled = false;
  setTimeout(() => {
    btn.textContent = '检测';
    btn.style.color = '';
  }, 3000);
}

/* ============ Search ============ */
function filterSources(query) {
  const q = query.trim().toLowerCase();
  let visibleCount = 0;

  SOURCES_DATA.forEach((entry, idx) => {
    const card = document.getElementById(`card-${idx}`);
    if (!card) return;
    if (!q || entry.name.toLowerCase().includes(q)) {
      card.classList.remove('hidden');
      visibleCount++;
    } else {
      card.classList.add('hidden');
    }
  });

  emptyState.hidden = visibleCount > 0;
  searchClear.classList.toggle('visible', q.length > 0);
  totalCount.textContent = visibleCount;
  updateStats(visibleCount);
}

function updateStats(visible) {
  const el = document.querySelector('.stat-total');
  if (visible !== undefined) {
    el.innerHTML = `显示 <strong>${visible}</strong> / 共 <strong>${totalSourceCount}</strong> 个多仓`;
  } else {
    el.innerHTML = `共 <strong>${totalSourceCount}</strong> 个多仓`;
  }
}

/* ============ Toast ============ */
let toastTimer;

function showToast(msg) {
  clearTimeout(toastTimer);
  toast.textContent = msg;
  toast.classList.add('show');
  toastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 2500);
}

/* ============ Init ============ */
function init() {
  initTheme();
  render();

  document.getElementById('themeToggle').addEventListener('click', toggleTheme);

  searchInput.addEventListener('input', (e) => {
    filterSources(e.target.value);
  });

  searchClear.addEventListener('click', () => {
    searchInput.value = '';
    filterSources('');
    searchInput.focus();
  });
}

document.addEventListener('DOMContentLoaded', init);
