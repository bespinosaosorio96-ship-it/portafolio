/**
 * ========================================================
 * BRAYAN ESPINOSA OSORIO - PORTFOLIO INTERACTIVITY
 * Matrix Rain, Terminal Logic, Spotlight & Dynamic Typing
 * ========================================================
 */

// 1. MATRIX DIGITAL RAIN (Canvas de lluvia de código)
const mCanvas = document.getElementById('matrix-canvas');
const mCtx = mCanvas ? mCanvas.getContext('2d') : null;
let mWidth, mHeight;
const chars = '0123456789ABCDEF01BRAYANPYTHONREACTJAVAAI0123456789日ﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾃﾏｹﾒｴｶｷﾑﾕﾗｾﾈｽﾀﾇﾍ';
const fontSize = 15;
let columns;
let drops = [];

function initMatrix() {
  if (!mCanvas || !mCtx) return;
  mWidth = mCanvas.width = window.innerWidth;
  mHeight = mCanvas.height = window.innerHeight;
  columns = Math.floor(mWidth / fontSize);
  drops = [];
  for (let i = 0; i < columns; i++) {
    drops[i] = Math.random() * -100;
  }
}

if (mCanvas) {
  window.addEventListener('resize', initMatrix);
  initMatrix();
}

function drawMatrix() {
  if (!mCanvas || !mCtx) return;
  const isMatrix = document.body.classList.contains('matrix-active');
  mCtx.fillStyle = isMatrix ? 'rgba(2, 6, 3, 0.12)' : 'rgba(7, 10, 19, 0.2)';
  mCtx.fillRect(0, 0, mWidth, mHeight);

  mCtx.fillStyle = isMatrix ? '#00ff66' : '#10b981';
  mCtx.font = fontSize + 'px monospace';

  for (let i = 0; i < drops.length; i++) {
    const text = chars.charAt(Math.floor(Math.random() * chars.length));

    // Destello blanco en la cabeza de la gota
    if (Math.random() > 0.88) {
      mCtx.fillStyle = '#ffffff';
    } else {
      mCtx.fillStyle = isMatrix ? '#00ff66' : 'rgba(56, 189, 248, 0.6)';
    }

    mCtx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > mHeight && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
  requestAnimationFrame(drawMatrix);
}

if (mCanvas) {
  drawMatrix();
}

// 2. TOGGLE MATRIX MODE & CAMBIO DINÁMICO DE PALETA
let matrixActive = false;

function toggleMatrixMode() {
  matrixActive = !matrixActive;
  document.body.classList.toggle('matrix-active', matrixActive);

  const navBtnText = document.getElementById('matrixBtnText');
  const heroBtnText = document.getElementById('heroMatrixBtnText');

  if (matrixActive) {
    if (navBtnText) navBtnText.textContent = "Modo Matrix: ON 🟢";
    if (heroBtnText) heroBtnText.textContent = "Salir de la Matrix";
    execCommand('matrix-enter');
  } else {
    if (navBtnText) navBtnText.textContent = "Modo Matrix: OFF";
    if (heroBtnText) heroBtnText.textContent = "Entrar a la Matrix";
    execCommand('matrix-exit');
  }
}

// 3. CURSOR GLOW
window.addEventListener('mousemove', (e) => {
  const glow = document.getElementById('cursor-glow');
  if (glow) {
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
  }
});

// 4. SPOTLIGHT EFECTO 3D EN TARJETAS
const cards = document.querySelectorAll('.magic-card');
cards.forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  });
});

// 5. EFECTO TYPING DINÁMICO EN HERO
const words = [
  "Backend Developer (Python & Java)",
  "Automatizador de Procesos (n8n & Bots)",
  "Constructor Web & Experimentos IA",
  "Arquitecto de Soluciones Escalables"
];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typedElem = document.getElementById('typed-text');

function typeEffect() {
  if (!typedElem) return;
  const currentWord = words[wordIndex];
  if (isDeleting) {
    typedElem.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typedElem.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;
  }

  let speed = isDeleting ? 30 : 60;
  if (!isDeleting && charIndex === currentWord.length) {
    speed = 2200;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    speed = 500;
  }
  setTimeout(typeEffect, speed);
}
typeEffect();

// 6. COPIAR CORREO CON FEEDBACK
function copyEmail(e) {
  navigator.clipboard.writeText('bespinosaosorio96@gmail.com');
  const toast = document.getElementById('copiedToast');
  if (toast) {
    toast.style.display = 'inline';
    setTimeout(() => { toast.style.display = 'none'; }, 2500);
  }
  if (!matrixActive) {
    toggleMatrixMode();
  }
}

// 7. FILTROS DE PROYECTOS
function filterProjects(cat, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  document.querySelectorAll('.magic-card').forEach(card => {
    if (cat === 'all' || card.getAttribute('data-cat').includes(cat)) {
      card.style.display = 'flex';
      card.style.animation = 'fadeIn 0.3s ease';
    } else {
      card.style.display = 'none';
    }
  });
}

// 8. TERMINAL INTELIGENTE
function typeAndRun(cmd) {
  const input = document.getElementById('termInput');
  if (input) {
    input.value = cmd;
    execCommand(cmd);
    input.value = '';
  }
}

function execCommand(cmd) {
  const container = document.getElementById('dynamicOutputs');
  const log = document.getElementById('terminalLog');
  if (!container || !log) return;
  let outHtml = '';

  if (cmd === 'clear') {
    container.innerHTML = '';
    return;
  } else if (cmd === 'matrix' || cmd === 'matrix-enter') {
    if (!matrixActive && cmd === 'matrix') {
      toggleMatrixMode();
      return;
    }
    outHtml = `
      <div class="term-line"><span class="prompt">brayan@dev:~$</span> <span class="command">matrix protocol --override</span></div>
      <div class="output" style="color: #00ff66; font-weight: bold;">
        [OVERRIDE ACCEPTED]: Despierta, Neo... La Matrix verde se ha desplegado. Cascada de código activa. Escribe 'exit' para salir. 🕶️
      </div>
    `;
  } else if (cmd === 'exit' || cmd === 'quit' || cmd === 'matrix-off' || cmd === 'matrix off' || cmd === 'matrix-exit' || cmd === 'unmatrix') {
    if (matrixActive) {
      toggleMatrixMode();
      outHtml = `
        <div class="term-line"><span class="prompt">brayan@dev:~$</span> <span class="command">matrix protocol --disconnect</span></div>
        <div class="output" style="color: #38bdf8; font-weight: bold;">
          [DISCONNECTED]: Sesión de Matrix finalizada. Retornando al entorno Cyber Dark estándar.
        </div>
      `;
    } else {
      outHtml = `
        <div class="term-line"><span class="prompt">brayan@dev:~$</span> <span class="command">matrix protocol --status</span></div>
        <div class="output" style="color: #94a3b8;">
          El modo Matrix ya se encuentra apagado. Escribe 'matrix' para entrar.
        </div>
      `;
    }
  } else if (cmd === 'matrix-exit') {
    outHtml = `
      <div class="term-line"><span class="prompt">brayan@dev:~$</span> <span class="command">matrix protocol --restore</span></div>
      <div class="output" style="color: #38bdf8;">
        [RESTORED]: Regresando al entorno Cyber Dark estándar.
      </div>
    `;
  } else if (cmd === 'skills') {
    outHtml = `
      <div class="term-line"><span class="prompt">brayan@dev:~$</span> <span class="command">brayan.skills</span></div>
      <div class="output" style="color: var(--accent-primary);">
        ├── 🐍 Backend: Python, Java, Node.js, Express<br>
        ├── 🗄 Databases: MySQL, PostgreSQL, Modelado ER<br>
        ├── ⚛ Frontend: React.js, Vite, Tailwind CSS, JavaScript ES6+<br>
        └── ⚡ Automation & Cloud: GitHub Actions, n8n, Git Flow
      </div>
    `;
  } else if (cmd === 'projects') {
    outHtml = `
      <div class="term-line"><span class="prompt">brayan@dev:~$</span> <span class="command">brayan.projects</span></div>
      <div class="output" style="color: var(--accent-secondary);">
        ⚡ <strong>HelpDesktopBot</strong> · Python & Chatbot Automatizado<br>
        🤖 <strong>Proyecto IA</strong> · Modelos & CI/CD GitHub Actions<br>
        🛒 <strong>Fake Store</strong> · E-commerce con APIs REST en JS<br>
        🌱 <strong>CultuVivo</strong> · Plataforma Comunitaria y Sostenible
      </div>
    `;
  } else if (cmd === 'contact') {
    outHtml = `
      <div class="term-line"><span class="prompt">brayan@dev:~$</span> <span class="command">brayan.contact</span></div>
      <div class="output" style="color: var(--accent-primary);">
        ✉ Email: bespinosaosorio96@gmail.com<br>
        🔗 LinkedIn: in/brayan-espinosa-osorio-0ba521443<br>
        🐙 GitHub: github.com/bespinosaosorio96-ship-it
      </div>
    `;
  } else if (cmd === 'help') {
    outHtml = `
      <div class="term-line"><span class="prompt">brayan@dev:~$</span> <span class="command">help</span></div>
      <div class="output">
        Comandos disponibles: 'skills', 'projects', 'matrix' (activar modo), 'exit' (finalizar modo), 'contact', 'clear'
      </div>
    `;
  } else {
    outHtml = `
      <div class="term-line"><span class="prompt">brayan@dev:~$</span> <span class="command">${cmd}</span></div>
      <div class="output" style="color: #ef4444;">Comando no reconocido. Prueba 'help' o pulsa los botones interactivos.</div>
    `;
  }

  container.innerHTML += outHtml;
  log.scrollTop = log.scrollHeight;
}

function handleTermKey(e) {
  if (e.key === 'Enter') {
    const val = e.target.value.trim().toLowerCase();
    if (val) {
      execCommand(val);
      e.target.value = '';
    }
  }
}
