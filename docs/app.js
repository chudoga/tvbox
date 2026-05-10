/* ============ Data ============ */
const SOURCES_DATA = {
  "categories": [
    {
      "name": "影视",
      "icon": "🎬",
      "description": "电影、电视剧、综艺综合源",
      "sources": [
        { "name": "SVIP", "url": "https://gh-proxy.com/https://raw.githubusercontent.com/xmbjm/svip/refs/heads/main/svip.json" },
        { "name": "备用", "url": "https://gh.jasonzeng.dev/https://raw.githubusercontent.com/xmbjm/svip/refs/heads/main/svip.json" },
        { "name": "VIP", "url": "https://jiekou.netlify.app/svip.json" },
        { "name": "小米", "url": "http://miqk.cc/小米/DEMO.json" },
        { "name": "潇洒", "url": "https://9877.kstore.space/AnotherD/api.json" },
        { "name": "肥猫", "url": "http://肥猫.com" },
        { "name": "欧歌", "url": "https://欧歌.v.nxog.top/m/" },
        { "name": "乐哥", "url": "https://乐哥.xyz/TV/Zy.json" },
        { "name": "老虎", "url": "http://tv.laohu.cool/tvbox.json" },
        { "name": "Clun", "url": "https://clun.top/box.json" },
        { "name": "O K", "url": "http://ok321.top/ok" },
        { "name": "俊佬", "url": "http://home.jundie.top:81/top98.json" },
        { "name": "驸马", "url": "http://fmys.top/fmys.json" },
        { "name": "南风", "url": "https://gh-proxy.com/https://raw.githubusercontent.com/yoursmile66/TVBox/main/XC.json" },
        { "name": "二小", "url": "http://tvbox.王二小放牛娃.top" },
        { "name": "毒盒", "url": "https://xn--8owq8u.com/tv/" },
        { "name": "心魔", "url": "https://gh-proxy.com/raw.githubusercontent.com/yw88075/tvbox/main/yw.json" },
        { "name": "D佬", "url": "http://2883.kstore.space/nzk/nzk0722.json" },
        { "name": "小马", "url": "http://szyyds.cn/tv/x.json" },
        { "name": "星辰", "url": "https://fmbox.cc" },
        { "name": "龙伊", "url": "https://龙伊.top" },
        { "name": "寳盒", "url": "https://gh-proxy.com/https://raw.githubusercontent.com/guot55/yg/main/pg/bh.json" },
        { "name": "挺好", "url": "https://ztha.top/TVBox/thdjk.json" },
        { "name": "传说", "url": "https://chuanshuo.77blog.cn/tv.json" },
        { "name": "多多", "url": "https://gh-proxy.com/raw.githubusercontent.com/leevi0709/one/main/jsm.json" },
        { "name": "分享", "url": "http://hucongrong.web3v.work/风水/fxz/fxz.json" },
        { "name": "蓝天", "url": "https://gitee.com/lukei7/lib/raw/Luck/%E8%87%AA%E5%BB%BA.json" },
        { "name": "青龙", "url": "https://gitee.com/yiwu369/6758/raw/master/%E9%9D%92%E9%BE%99/1.json" },
        { "name": "黄金", "url": "https://gitlab.com/lzc1021lzc/hjfggzs.hjys/-/raw/main/hjys.free.json" },
        { "name": "道长", "url": "https://gitlab.com/duomv/dzhipy/-/raw/main/index.json" },
        { "name": "PG", "url": "https://cnb.cool/fish2018/pg/-/git/raw/master/jsm.json" },
        { "name": "真訫", "url": "https://cnb.cool/fish2018/zx/-/git/raw/master/FongMi.json" },
        { "name": "琉芸", "url": "https://git.acwing.com/999/tvbox/-/raw/main/%E5%BD%B1%E8%A7%86.json" },
        { "name": "月光", "url": "https://gh-proxy.com/https://raw.githubusercontent.com/guot55/yg/main/max.json" },
        { "name": "雷霆", "url": "https://gh-proxy.com/https://raw.githubusercontent.com/n3rddd/N3RD/master/JN/lemj.json" },
        { "name": "小凯", "url": "https://jihulab.com/jyqhkd/kd/-/raw/main/kai.json" },
        { "name": "公子", "url": "http://xn--b9w.l5.ca/" },
        { "name": "特别", "url": "https://gh-proxy.com/raw.githubusercontent.com/yuanwangokk-1/TV-BOX/refs/heads/main/drpys/jsm.json" },
        { "name": "蜂蜜", "url": "https://qu.ax/uanw.json" },
        { "name": "传说2", "url": "http://tjf1100.serv00.net/" },
        { "name": "多多2", "url": "https://yydsys.top/duo" },
        { "name": "CandyMu", "url": "https://gitlab.com/noimank/tvbox/-/raw/main/tvbox1.json" },
        { "name": "欧歌备用", "url": "https://xn--biib-rp5imh.v.nxog.top/apitv.php" },
        { "name": "请勿贩卖", "url": "http://zhangqun1818.serv00.net/zq/api.json" }
      ]
    },
    {
      "name": "动漫",
      "icon": "📺",
      "description": "动漫、二次元资源",
      "sources": [
        { "name": "动漫城", "url": "https://www.yingm.cc/dm/dm.json" },
        { "name": "喵影视", "url": "https://bitbucket.org/xduo/duoapi/raw/master/xpg.json" }
      ]
    },
    {
      "name": "短剧",
      "icon": "🎭",
      "description": "短剧、微剧资源",
      "sources": [
        { "name": "短剧", "url": "http://74.120.175.78/JK/XYQTVBox/dj.json" },
        { "name": "剧场", "url": "https://乐哥.xyz/dj.json" },
        { "name": "短剧2", "url": "http://jiduo.3116598.xyz" }
      ]
    },
    {
      "name": "听书",
      "icon": "🎧",
      "description": "有声书、评书资源",
      "sources": [
        { "name": "听书", "url": "https://乐哥.xyz/Ting/Tshu.json" }
      ]
    },
    {
      "name": "音乐",
      "icon": "🎵",
      "description": "音乐资源",
      "sources": [
        { "name": "刺刺", "url": "https://d.kstore.dev/download/8975/刺刺专用音乐接口.json" }
      ]
    },
    {
      "name": "网盘",
      "icon": "💾",
      "description": "网盘资源聚合",
      "sources": [
        { "name": "各种网盘", "url": "https://gh-proxy.com/https://raw.githubusercontent.com/PizazzGY/TVBox/main/api.json" }
      ]
    },
    {
      "name": "综合",
      "icon": "📦",
      "description": "其他综合资源",
      "sources": [
        { "name": "小脑斧", "url": "https://6492.kstore.space/xnf/xnf.json" },
        { "name": "小虎斑", "url": "http://hb.小虎斑.site:25252/仅供测试" }
      ]
    }
  ]
};

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
  let total = 0;
  let html = '';

  SOURCES_DATA.categories.forEach((cat) => {
    const sourcesHtml = cat.sources.map((s, idx) => {
      const cardId = `card-${cat.name}-${idx}`;
      return `
        <div class="source-card" id="${cardId}" data-name="${s.name}" data-category="${cat.name}">
          <span class="status-indicator" id="status-${cardId}" title="点击检测状态"></span>
          <div class="source-info">
            <div class="source-name">${s.name}</div>
            <div class="source-url" title="${escapeHtml(s.url)}">${escapeHtml(s.url)}</div>
          </div>
          <div class="source-actions">
            <button class="btn btn-copy" onclick="copyUrl('${escapeHtml(s.url)}', this)" title="复制订阅链接">复制</button>
            <button class="btn btn-check" onclick="checkStatus('${cardId}')" title="检测源是否可用">检测</button>
          </div>
        </div>
      `;
    }).join('');

    total += cat.sources.length;
    html += `
      <section class="category" data-category="${cat.name}">
        <div class="category-header">
          <span class="category-icon">${cat.icon}</span>
          <span class="category-name">${cat.name}</span>
          ${cat.description ? `<span class="category-desc">${cat.description}</span>` : ''}
          <span class="category-count">${cat.sources.length}</span>
        </div>
        <div class="sources-grid">${sourcesHtml}</div>
      </section>
    `;
  });

  categoriesEl.innerHTML = html;
  totalSourceCount = total;
  totalCount.textContent = total;
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
async function checkStatus(cardId) {
  const card = document.getElementById(cardId);
  const statusEl = document.getElementById(`status-${cardId}`);
  const urlEl = card.querySelector('.source-url');
  const btn = card.querySelector('.btn-check');
  if (!urlEl) return;

  const url = urlEl.textContent.trim();
  btn.disabled = true;
  btn.textContent = '检测中...';

  try {
    const resp = await fetch(url, {
      method: 'HEAD',
      mode: 'no-cors',
      signal: AbortSignal.timeout(8000)
    });
    statusEl.className = 'status-indicator online';
    btn.textContent = '检测';
    showToast(`✅ ${card.querySelector('.source-name').textContent} 响应正常`);
  } catch {
    statusEl.className = 'status-indicator offline';
    btn.textContent = '检测';
    showToast(`⚠️ ${card.querySelector('.source-name').textContent} 不可达（可能被CORS限制）`);
  }
  btn.disabled = false;
}

/* ============ Search ============ */
function filterSources(query) {
  const q = query.trim().toLowerCase();
  let visibleCount = 0;

  SOURCES_DATA.categories.forEach((cat) => {
    const catSection = document.querySelector(`section[data-category="${cat.name}"]`);
    let catHasVisible = false;

    cat.sources.forEach((s, idx) => {
      const card = document.getElementById(`card-${cat.name}-${idx}`);
      if (!card) return;
      if (!q || s.name.toLowerCase().includes(q)) {
        card.classList.remove('hidden');
        catHasVisible = true;
        visibleCount++;
      } else {
        card.classList.add('hidden');
      }
    });

    if (catSection) {
      catSection.style.display = catHasVisible ? 'block' : 'none';
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
    el.innerHTML = `显示 <strong>${visible}</strong> / 共 <strong>${totalSourceCount}</strong> 个订阅源`;
  } else {
    el.innerHTML = `共 <strong>${totalSourceCount}</strong> 个订阅源`;
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
