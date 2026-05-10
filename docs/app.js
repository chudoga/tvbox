/* ===== CC0 Chiptune Tracks ===== */
const CHIPTUNE_TRACKS = [
  { name: 'Game Travel 1', url: 'https://files.freemusicarchive.org/storage-freemusicarchive-org/tracks/xfM1AiGFIMxEojwwcjWk4cLxdhBSyqLHTtWqGyWo.mp3' },
  { name: 'Dark Forest', url: 'https://files.freemusicarchive.org/storage-freemusicarchive-org/tracks/aiFgUzkuMGYZZsSPzE6lknpNHFY9Oew8ciaAbAoO.mp3' },
  { name: 'Comfort Game 1', url: 'https://files.freemusicarchive.org/storage-freemusicarchive-org/tracks/662zS7xARjpO2oCvK0HLvb7GyHMVyiDCiUz39HfA.mp3' },
  { name: 'Atmosphere 1', url: 'https://files.freemusicarchive.org/storage-freemusicarchive-org/tracks/r0JS2sNigLgxxr0ZgV6jzFjSeRB13u3ygJ9kYQsh.mp3' },
  { name: 'Starships', url: 'https://files.freemusicarchive.org/storage-freemusicarchive-org/tracks/mczFstI7D8DOfLNeTB2XWffjLioCixVisvdIR3Pz.mp3' },
  { name: 'Deus Ex Machina', url: 'https://files.freemusicarchive.org/storage-freemusicarchive-org/tracks/ILAx0IRAisEEHh6X8KJaoP9jUMBKrHsc3rX4pnwB.mp3' },
  { name: 'Game Travel V3', url: 'https://files.freemusicarchive.org/storage-freemusicarchive-org/tracks/k5nyqYLvmqn5VYt0Pvi2LF8tILui6LqAS2tV2Ygz.mp3' },
  { name: 'Jump!', url: 'https://files.freemusicarchive.org/storage-freemusicarchive-org/tracks/kQ3qDA0qADr19BJzyl5wMMrdy51wiBL7U0HIQtW6.mp3' },
  { name: 'Mini Boss', url: 'https://files.freemusicarchive.org/storage-freemusicarchive-org/tracks/jdM1QIY8TIhsh4lVyzT5sp00BnDG5alcdNb4pqKI.mp3' },
  { name: 'Magic Orb', url: 'https://files.freemusicarchive.org/storage-freemusicarchive-org/tracks/OWgH1bGhwePp1JrRArfSPATqIyZ56jIXbpGL4MDp.mp3' },
  { name: 'A Fight In the Dark', url: 'https://files.freemusicarchive.org/storage-freemusicarchive-org/tracks/e1HTJmRjeQqtEOsEJJEOlV8N2shJ9nbjJbsxkhq1.mp3' },
  { name: 'Quickly!', url: 'https://files.freemusicarchive.org/storage-freemusicarchive-org/tracks/EoLqNzoS0ZDbaWDVHEj9SU7GmV5c5jmMBky164pP.mp3' },
];

const SOURCES = [
  { name: '裤佬', url: 'https://pastebin.com/raw/enF00p5e', color: '#28a9e0', icon: '📦' },
  { name: '游魂', url: 'https://www.iyouhun.com/tv/dc', color: '#db1f76', icon: '👻' },
  { name: '拾光', url: 'https://xmbjm.fh4u.org/dc.txt', color: '#F7DC6F', icon: '✨' }
];

const QUOTES = [
  '给时光以生命<br>给岁月以文明',
  '凡心所向，素履所往<br>生如逆旅，一苇以航',
  '看尽天下好剧<br>心中自然无码',
  '还是当码农好混<br>Ctrl+C 就能当架构师',
  '人生有时就像看直播<br>卡得你想砸电脑却还得等缓冲',
  '愿你以渺小启程<br>以伟大结束<br>在星辰大海的征途中<br>遇到那个最想要的自己',
  '你可以选择 404<br>但不能放弃 200',
  '没有一个冬天不可逾越<br>没有一个春天不会来临',
  '不要以为全世界只有你的代码在报错<br>别人的只是比你会吞异常',
  '一个视频有多长<br>要看你是用二倍速还是原速',
  '人生有时就像解 Bug<br>明明感觉对了跑起来却一片红',
  '你永远不知道<br>下一个接口明天还能不能用<br>就像你不知道<br>明天和意外哪个先来'
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
  if (q.indexOf('<br>') !== -1) {
    sloganEl.innerHTML = q;
  } else {
    const parts = q.split('，');
    const mid = Math.ceil(parts.length / 2);
    sloganEl.innerHTML = parts.slice(0, mid).join('，') + '<br>' + parts.slice(mid).join('，');
  }
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
  { h: 210, s: 65 }, { h: 300, s: 55 }, { h: 180, s: 80 },
  { h: 15, s: 75 },  { h: 50, s: 80 },  { h: 120, s: 65 },
  { h: 340, s: 70 }, { h: 40, s: 60 },  { h: 160, s: 75 }
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
    const cx = w * 1.26;
    const cy = h * -0.26;
    const maxR = Math.max(w, h) * 0.9;
    const minR = Math.min(w, h) * 0.08;
    particles = [];
    for (let i = 0; i < count; i++) {
      const p = PALETTES[Math.floor(Math.random() * PALETTES.length)];
      const angle = Math.random() * Math.PI * 2;
      const radius = minR + Math.random() * maxR;
      particles.push({
        radius,
        angle,
        speed: (0.3 + Math.random() * 0.7) * 0.00125,
        size: Math.random() * 1.25 + 0.5,
        hue: p.h + (Math.random() - 0.5) * 15,
        sat: p.s + (Math.random() - 0.5) * 8,
        light: 55 + Math.random() * 25,
        a: 0.25 + Math.random() * 0.25,
        sx: cx + Math.cos(angle) * radius,
        sy: cy + Math.sin(angle) * radius,
        x: cx + Math.cos(angle) * radius,
        y: cy + Math.sin(angle) * radius,
      });
    }
  }

  function draw() {
    const cx = w * 1.26;
    const cy = h * -0.26;

    ctx.fillStyle = 'rgba(11,14,23,0.005)';
    ctx.fillRect(0, 0, w, h);

    for (const p of particles) {
      p.sx = p.x;
      p.sy = p.y;
      p.angle += p.speed;
      p.x = cx + Math.cos(p.angle) * p.radius;
      p.y = cy + Math.sin(p.angle) * p.radius;

      ctx.beginPath();
      ctx.moveTo(p.sx, p.sy);
      ctx.lineTo(p.x, p.y);
      ctx.strokeStyle = `hsla(${p.hue},${p.sat}%,${p.light}%,${p.a})`;
      ctx.lineWidth = p.size * 2;
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
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

/* ===== Music + Spectrum Visualizer ===== */
const musicBtn = document.getElementById('musicBtn');
const bgMusic = document.getElementById('bgMusic');
const spectrumCanvas = document.getElementById('spectrum');
let musicPlaying = false;
let audioCtx = null;
let analyser = null;
let spectAnimId = null;
let currentTrackIdx = -1;
let audioBuffer = null;

function pickTrack() {
  let idx;
  do {
    idx = Math.floor(Math.random() * CHIPTUNE_TRACKS.length);
  } while (idx === currentTrackIdx && CHIPTUNE_TRACKS.length > 1);
  currentTrackIdx = idx;
  return CHIPTUNE_TRACKS[idx];
}

function resizeSpectrum() {
  if (!spectrumCanvas) return;
  spectrumCanvas.width = spectrumCanvas.clientWidth || window.innerWidth;
  spectrumCanvas.height = spectrumCanvas.clientHeight || 72;
}

function drawSpectrum() {
  if (!spectrumCanvas || !analyser) return;
  const ctx = spectrumCanvas.getContext('2d');
  const w = spectrumCanvas.width;
  const h = spectrumCanvas.height;

  const bufferLength = analyser.frequencyBinCount;
  const dataArray = new Uint8Array(bufferLength);
  analyser.getByteFrequencyData(dataArray);

  ctx.clearRect(0, 0, w, h);

  const barCount = bufferLength;
  const barWidth = w / barCount;
  const grad = ctx.createLinearGradient(0, h, 0, 0);
  grad.addColorStop(0, '#60a5fa');
  grad.addColorStop(0.5, '#a78bfa');
  grad.addColorStop(1, '#f472b6');
  ctx.fillStyle = grad;

  for (let i = 0; i < barCount; i++) {
    const barHeight = Math.min((dataArray[i] / 255) * h, h);
    ctx.fillRect(i * barWidth, h - barHeight, Math.max(barWidth - 1, 1), barHeight);
  }

  spectAnimId = requestAnimationFrame(drawSpectrum);
}

async function initAudio() {
  if (audioCtx) return;
  audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  analyser = audioCtx.createAnalyser();
  analyser.fftSize = 512;
  analyser.smoothingTimeConstant = 0.2;
  analyser.connect(audioCtx.destination);
  resizeSpectrum();
  window.addEventListener('resize', resizeSpectrum);
}

async function loadTrack(url) {
  const resp = await fetch(url);
  const buf = await resp.arrayBuffer();
  audioBuffer = await audioCtx.decodeAudioData(buf);
}

function playBuffer(offset) {
  const source = audioCtx.createBufferSource();
  source.buffer = audioBuffer;
  source.loop = true;
  source.connect(analyser);
  source.start(0, offset || 0);
  return source;
}

async function startMusic() {
  try {
    await initAudio();
    if (audioCtx.state === 'suspended') await audioCtx.resume();
    if (!audioBuffer) {
      const track = pickTrack();
      await loadTrack(track.url);
    }
    playBuffer(0);
    musicBtn.classList.add('playing');
    musicBtn.textContent = '\u2669';
    spectrumCanvas.classList.add('visible');
    drawSpectrum();
    musicPlaying = true;
  } catch (e) {
    // Browser blocked or network error
  }
}

function stopMusic() {
  audioCtx && audioCtx.close();
  audioCtx = null;
  analyser = null;
  audioBuffer = null;
  musicBtn.classList.remove('playing');
  musicBtn.textContent = '\u266B';
  if (spectAnimId) cancelAnimationFrame(spectAnimId);
  spectrumCanvas.classList.remove('visible');
  musicPlaying = false;
}

musicBtn.addEventListener('click', async () => {
  if (musicPlaying) {
    stopMusic();
  } else {
    await startMusic();
  }
});

/* ===== Init ===== */
renderSources();
setTimeout(setQuote, 2000);
initParticles();

// Autoplay: start on first user click anywhere (browser policy)
const firstClick = () => {
  document.removeEventListener('click', firstClick);
  startMusic();
};
document.addEventListener('click', firstClick);