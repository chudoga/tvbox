const SOURCES = [
  { name: '裤佬', url: 'https://pastebin.com/raw/enF00p5e', color: '#28a9e0', icon: '📦' },
  { name: '游魂', url: 'https://www.iyouhun.com/tv/dc', color: '#db1f76', icon: '👻' },
  { name: '拾光', url: 'https://xmbjm.fh4u.org/dc.txt', color: '#F7DC6F', icon: '✨' }
];

const QUOTES = [
  '生活明朗，万物可爱，人间值得，未来可期',
  '保持热爱，奔赴山海，忠于自己，热爱生活',
  '心之所向，素履以往，生如逆旅，一苇以航',
  '不期而遇，如期而至，来日方长，未来可期',
  '且听风吟，静待花开，不问归期，只争朝夕',
  '眼里有光，心中有火，脚下有路，未来可期',
  '山高路远，看世界也找自己，做最好的自己',
  '愿日子清透，世事皆温柔，岁月皆可回首',
  '时光知味，岁月沉香，不负韶华，不负自己',
  '一半烟火，一半诗意，一半争取，一半随缘',
  '把期望降低，把依赖变少，把心放平放宽',
  '日子常新，未来不远，万事胜意，来日可期',
  '心有山海，静而无边，行而无疆，爱而无畏',
  '做自己的光，不需要太亮，足以温暖自己就好',
  '与其互为人间，不如自成宇宙，各自发光发热'
];

/* ===== Toast ===== */
const toast = document.getElementById('toast');
let toastTimer;

function showToast(msg) {
  clearTimeout(toastTimer);
  toast.textContent = msg;
  toast.classList.add('show');
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2500);
}

/* ===== Greeting → Random Quote ===== */
const greetingEl = document.querySelector('.greeting');
const sloganEl = document.getElementById('slogan');
function setQuote() {
  greetingEl.classList.add('fade');
  sloganEl.textContent = QUOTES[Math.floor(Math.random() * QUOTES.length)];
  sloganEl.classList.add('visible');
}

/* ===== Render Sources ===== */
function renderSources() {
  const list = document.getElementById('sourceList');
  if (!list) return;
  list.innerHTML = SOURCES.map((s, i) => `
    <div class="link-item" id="item-${i}" onclick="handleCopy(${i})">
      <div class="link-bg" style="background:${s.color}"></div>
      <div class="link-inner">
        <div class="link-icon" style="background:${s.color}33; color:${s.color}">${s.icon}</div>
        <span class="link-name">${s.name}</span>
        ${i === 0 ? '<span class="copy-hint">点击复制</span>' : ''}
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
  showToast('\u2705 ' + s.name + ' \u5df2\u590d\u5236');
  setTimeout(() => item.classList.remove('copied'), 2000);
}

/* ===== Colorful Particles Background ===== */
const PALETTES = [
  { h: 220, s: 75 }, { h: 260, s: 70 }, { h: 330, s: 65 },
  { h: 190, s: 70 }, { h: 280, s: 60 }, { h: 350, s: 55 },
  { h: 210, s: 65 }, { h: 300, s: 55 }
];

function initParticles() {
  const canvas = document.getElementById('bgCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  let particles = [];
  let w, h;

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }

  function create(count) {
    particles = [];
    for (let i = 0; i < count; i++) {
      const p = PALETTES[Math.floor(Math.random() * PALETTES.length)];
      const big = Math.random() < 0.05;
      particles.push({
        x: Math.random() * w, y: Math.random() * h,
        r: big ? Math.random() * 3 + 2 : Math.random() * 2 + 0.8,
        dx: (Math.random() - 0.5) * 0.3, dy: (Math.random() - 0.5) * 0.3 - 0.08,
        hue: p.h + (Math.random() - 0.5) * 15,
        sat: p.s + (Math.random() - 0.5) * 8,
        light: 60 + Math.random() * 20,
        a: 0.4 + Math.random() * 0.5,
        da: (Math.random() - 0.5) * 0.007,
        big: big
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);
    for (const p of particles) {
      p.x += p.dx; p.y += p.dy; p.a += p.da;
      if (p.a > 0.95 || p.a < 0.15) p.da = -p.da;
      if (p.x < -10) p.x = w + 10;
      if (p.x > w + 10) p.x = -10;
      if (p.y < -10) p.y = h + 10;
      if (p.y > h + 10) p.y = -10;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      if (p.big) {
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 5);
        g.addColorStop(0, `hsla(${p.hue},${p.sat}%,${p.light}%,${p.a * 0.5})`);
        g.addColorStop(1, `hsla(${p.hue},${p.sat}%,${p.light}%,0)`);
        ctx.fillStyle = g;
        ctx.fill();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 0.5, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue},${p.sat}%,${p.light + 20}%,${p.a})`;
        ctx.fill();
      } else {
        ctx.fillStyle = `hsla(${p.hue},${p.sat}%,${p.light}%,${p.a})`;
        ctx.fill();
      }
    }
    requestAnimationFrame(draw);
  }

  resize();
  create(450);
  draw();
  window.addEventListener('resize', () => { resize(); create(450); });
}

/* ===== Music Toggle ===== */
const musicBtn = document.getElementById('musicBtn');
const bgMusic = document.getElementById('bgMusic');
let musicPlaying = false;

musicBtn.addEventListener('click', () => {
  if (musicPlaying) {
    bgMusic.pause();
    musicBtn.classList.remove('playing');
    musicBtn.textContent = '♫';
  } else {
    bgMusic.play().catch(() => {});
    musicBtn.classList.add('playing');
    musicBtn.textContent = '♩';
  }
  musicPlaying = !musicPlaying;
});

/* ===== Init ===== */
renderSources();
setTimeout(setQuote, 2000);
initParticles();