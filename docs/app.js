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
  const q = QUOTES[Math.floor(Math.random() * QUOTES.length)];
  const parts = q.split('，');
  const mid = Math.ceil(parts.length / 2);
  sloganEl.innerHTML = parts.slice(0, mid).join('，') + '，<br>' + parts.slice(mid).join('，');
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

/* ===== Orbital Particles Background ===== */
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
    const cx = w / 2;
    const cy = h / 2;
    const maxR = Math.min(w, h) * 0.48;
    particles = [];
    for (let i = 0; i < count; i++) {
      const p = PALETTES[Math.floor(Math.random() * PALETTES.length)];
      particles.push({
        radius: 15 + Math.random() * maxR,
        angle: Math.random() * Math.PI * 2,
        speed: (0.3 + Math.random() * 0.7) * 0.006,
        size: Math.random() * 2.5 + 1,
        hue: p.h + (Math.random() - 0.5) * 15,
        sat: p.s + (Math.random() - 0.5) * 8,
        light: 55 + Math.random() * 25,
        a: 0.5 + Math.random() * 0.5,
      });
    }
  }

  function draw() {
    ctx.fillStyle = 'rgba(11,14,23,0.03)';
    ctx.fillRect(0, 0, w, h);

    const cx = w / 2;
    const cy = h / 2;

    for (const p of particles) {
      p.angle += p.speed;
      const x = cx + Math.cos(p.angle) * p.radius;
      const y = cy + Math.sin(p.angle) * p.radius;

      ctx.beginPath();
      ctx.arc(x, y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(${p.hue},${p.sat}%,${p.light}%,${p.a})`;
      ctx.fill();
    }
    requestAnimationFrame(draw);
  }

  resize();
  create(350);
  draw();
  window.addEventListener('resize', () => { resize(); create(350); });
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