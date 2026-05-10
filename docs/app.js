const SOURCES = [
  {
    name: '裤佬',
    url: 'https://pastebin.com/raw/enF00p5e',
    color: '#28a9e0',
    icon: '📦'
  },
  {
    name: '游魂',
    url: 'https://www.iyouhun.com/tv/dc',
    color: '#db1f76',
    icon: '👻'
  },
  {
    name: '拾光',
    url: 'https://xmbjm.fh4u.org/dc.txt',
    color: '#F7DC6F',
    icon: '✨'
  }
];

const QUOTES = [
  'Hi~',
  '生活明朗，万物可爱',
  '保持热爱，奔赴山海',
  '心之所向，素履以往',
  '不期而遇，如期而至',
  '且听风吟，静待花开',
  '眼里有光，心中有火',
  '山高路远，看世界也找自己',
  '愿日子清透，世事皆温柔',
  '时光知味，岁月沉香',
  '一半烟火，一半诗意',
  '把期望降低，把依赖变少',
  '日子常新，未来不远',
  '心有山海，静而无边',
  '做自己的光，不需要太亮'
];

const toast = document.getElementById('toast');
let toastTimer;

function showToast(msg) {
  clearTimeout(toastTimer);
  toast.textContent = msg;
  toast.classList.add('show');
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2500);
}

function setRandomQuote() {
  const el = document.getElementById('slogan');
  el.textContent = QUOTES[Math.floor(Math.random() * QUOTES.length)];
}

function renderSources() {
  const list = document.getElementById('sourceList');
  list.innerHTML = SOURCES.map((s, i) => `
    <div class="link-item" id="item-${i}" onclick="handleCopy(${i})">
      <div class="link-bg" style="background:${s.color}"></div>
      <div class="link-inner">
        <div class="link-icon" style="background:${s.color}33; color:${s.color}">${s.icon}</div>
        <span class="link-name">${s.name}</span>
        <span class="copy-hint">点击复制</span>
      </div>
    </div>
  `).join('');
}

async function handleCopy(idx) {
  const s = SOURCES[idx];
  const item = document.getElementById(`item-${idx}`);
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
  item.classList.add('copied');
  showToast(`✅ ${s.name} 已复制`);
  setTimeout(() => item.classList.remove('copied'), 2000);
}

const canvas = document.getElementById('starfield');
const ctx = canvas.getContext('2d');
let stars = [];
let w, h;

function resize() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
}

function createStars(count) {
  stars = [];
  for (let i = 0; i < count; i++) {
    stars.push({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.8 + 0.2,
      dx: (Math.random() - 0.5) * 0.3,
      dy: (Math.random() - 0.5) * 0.3,
      a: Math.random() * 0.8 + 0.2,
      da: (Math.random() - 0.5) * 0.005
    });
  }
}

function drawStars() {
  ctx.clearRect(0, 0, w, h);
  for (const s of stars) {
    s.x += s.dx;
    s.y += s.dy;
    s.a += s.da;
    if (s.a > 1 || s.a < 0.1) s.da = -s.da;
    if (s.x < 0) s.x = w;
    if (s.x > w) s.x = 0;
    if (s.y < 0) s.y = h;
    if (s.y > h) s.y = 0;
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255,255,255,${s.a})`;
    ctx.fill();
  }
  requestAnimationFrame(drawStars);
}

function initCanvas() {
  resize();
  createStars(180);
  drawStars();
  window.addEventListener('resize', () => {
    resize();
    createStars(250);
  });
}

setRandomQuote();
renderSources();
initCanvas();
