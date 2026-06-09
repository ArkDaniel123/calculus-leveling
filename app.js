// ============================================================
//  CALCULUS LEVELING SYSTEM — App Logic
//  Modo automático: PHP/MySQL (Local) ou localStorage (Web/GitHub Pages)
// ============================================================

// ── Detecção de ambiente ─────────────────────────────────────
const IS_LOCAL = window.location.hostname.endsWith('.local')
              || window.location.hostname === 'localhost'
              || window.location.hostname === '127.0.0.1';

const LS_KEY = 'cls_progress_v2';

// ── Camada localStorage ──────────────────────────────────────
const LocalStore = {
  load()               { try { return JSON.parse(localStorage.getItem(LS_KEY) || '{}'); } catch { return {}; } },
  save(data)           { localStorage.setItem(LS_KEY, JSON.stringify(data)); },
  mark(mod, sk, les)   { const d = this.load(); d[`${mod}_${sk}_${les}`] = true; this.save(d); },
  reset()              { localStorage.removeItem(LS_KEY); },
};

// ── Progress API — usa PHP se local, localStorage se web ─────
const API = {
  async getAll() {
    if (!IS_LOCAL) return LocalStore.load();
    try {
      const r = await fetch('api.php?action=get_all');
      const json = await r.json();
      return json.ok ? json.data : LocalStore.load();
    } catch { return LocalStore.load(); }
  },

  async mark(moduleId, skillId, lessonId, xp = 0) {
    LocalStore.mark(moduleId, skillId, lessonId);        // sempre salva local
    if (!IS_LOCAL) return;
    try {
      await fetch('api.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'mark', module_id: moduleId, skill_id: skillId, lesson_id: lessonId, xp }),
      });
    } catch { /* silently ignore — localStorage already saved */ }
  },

  async reset() {
    LocalStore.reset();
    if (!IS_LOCAL) return;
    try {
      await fetch('api.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'reset' }),
      });
    } catch { /* ok */ }
  },
};

// ── State ────────────────────────────────────────────────────
const STATE = {
  screen: 'loading',
  activeModule: null,
  activeSkill: null,
  activeLesson: null,
  progress: {},   // { "moduleId_skillId_lessonId": true }
};

// ── Progress helpers ─────────────────────────────────────────
function isSkillUnlocked(moduleId, skillIndex) {
  if (skillIndex === 0) return true;
  const mod = GAME_DATA.modules.find(m => m.id === moduleId);
  return isSkillCompleted(moduleId, mod.skills[skillIndex - 1].id);
}

function isSkillCompleted(moduleId, skillId) {
  const mod = GAME_DATA.modules.find(m => m.id === moduleId);
  const skill = mod.skills.find(s => s.id === skillId);
  return skill.lessons.every(l => STATE.progress[`${moduleId}_${skillId}_${l.id}`] === true);
}

function isLessonCompleted(moduleId, skillId, lessonId) {
  return STATE.progress[`${moduleId}_${skillId}_${lessonId}`] === true;
}

async function markLessonComplete(moduleId, skillId, lessonId, xp) {
  const key = `${moduleId}_${skillId}_${lessonId}`;
  STATE.progress[key] = true;
  await API.mark(moduleId, skillId, lessonId, xp);
}

function getModuleXP(moduleId) {
  const mod = GAME_DATA.modules.find(m => m.id === moduleId);
  let xp = 0;
  mod.skills.forEach(skill => {
    skill.lessons.forEach(lesson => {
      if (isLessonCompleted(moduleId, skill.id, lesson.id))
        xp += Math.floor(skill.xp / skill.lessons.length);
    });
  });
  return xp;
}

function getTotalCompleted() {
  let n = 0;
  GAME_DATA.modules.forEach(mod =>
    mod.skills.forEach(skill =>
      skill.lessons.forEach(lesson => {
        if (isLessonCompleted(mod.id, skill.id, lesson.id)) n++;
      })
    )
  );
  return n;
}

// ── Renderer ─────────────────────────────────────────────────
const app = document.getElementById('app');

function render(html) {
  app.innerHTML = `<div class="animate-fade">${html}</div>`;
}

// ── Loading screen ───────────────────────────────────────────
function renderLoading() {
  app.innerHTML = `
    <div class="min-h-screen flex flex-col items-center justify-center gap-4">
      <div class="spinner"></div>
      <p class="font-mono-tech text-xs text-cyan-500/60 tracking-widest">CARREGANDO DADOS DO SISTEMA...</p>
    </div>`;
}

// ── Dashboard ────────────────────────────────────────────────
function renderDashboard() {
  STATE.screen = 'dashboard';
  const done = getTotalCompleted();

  const cards = GAME_DATA.modules.map((mod, i) => {
    const earnedXP = getModuleXP(mod.id);
    const pct = Math.round((earnedXP / mod.totalXP) * 100);

    const prevMod = GAME_DATA.modules[i - 1];
    const isLocked = i > 0 && prevMod && !prevMod.skills.every(
      (_, si) => isSkillCompleted(prevMod.id, prevMod.skills[si].id)
    );

    const rankClr = { F: '#ec4899', E: '#00e5ff', D: '#a855f7', C: '#f59e0b' }[mod.rank] ?? '#00e5ff';
    const isExam  = mod.rank === 'F';

    return `
    <div class="relative panel rounded-sm p-6 transition-all duration-300
      ${isLocked ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer hover:glow-cyan-intense'}
      ${isExam && !isLocked ? 'border-pink-500/60' : ''}"
      style="${isExam && !isLocked ? 'box-shadow:0 0 30px rgba(236,72,153,0.3)' : ''}"
      ${isLocked ? '' : `onclick="openModule('${mod.id}')"`}>
      ${isExam ? `<div class="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-pink-500 to-transparent"></div>` : ''}
      ${isExam ? `<div class="absolute top-2 left-3 font-mono-tech text-xs text-pink-400/70 tracking-widest">★ PROVA</div>` : ''}

      <div class="absolute top-3 right-4 font-orbitron font-black text-2xl"
           style="color:${rankClr}; text-shadow:0 0 20px ${rankClr}; opacity:.7">
        RANK ${mod.rank}
      </div>

      <div class="text-5xl text-cyan-300 mb-3 leading-none"
           style="text-shadow:0 0 30px rgba(0,229,255,0.7)">${mod.icon}</div>

      <h2 class="font-orbitron text-xl font-bold text-white mb-1 text-glow-sm">${mod.title}</h2>
      <p class="text-cyan-300/60 text-sm font-mono-tech mb-4">${mod.subtitle}</p>
      <p class="text-slate-400 text-xs mb-4 font-mono-tech">
        ${mod.skills.length} HABILIDADES · ${mod.skills.reduce((a, s) => a + s.lessons.length, 0)} LIÇÕES
      </p>

      <div class="mb-1">
        <div class="flex justify-between text-xs font-mono-tech text-cyan-400/60 mb-1">
          <span>XP</span><span>${earnedXP} / ${mod.totalXP}</span>
        </div>
        <div class="h-1.5 rounded-full bg-cyan-900/30 overflow-hidden">
          <div class="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-400 xp-fill"
               style="width:${pct}%"></div>
        </div>
      </div>

      ${isLocked ? `<div class="absolute inset-0 flex items-center justify-center rounded-sm">
        <span class="font-orbitron text-xs text-slate-500 tracking-widest">[ BLOQUEADO ]</span>
      </div>` : ''}
    </div>`;
  }).join('');

  render(`
    <header class="border-b border-cyan-500/20 bg-slate-950/80 backdrop-blur sticky top-0 z-20">
      <div class="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <div class="flex items-center gap-3">
          <span class="text-2xl" style="text-shadow:0 0 20px rgba(0,229,255,0.8)">⚔</span>
          <span class="font-orbitron font-bold text-cyan-400 text-sm tracking-widest text-glow-sm">
            CALCULUS LEVELING SYSTEM
          </span>
        </div>
        <div class="flex items-center gap-4">
          <div class="flex items-center gap-2 font-mono-tech text-xs text-slate-400">
            <span class="text-cyan-400">✦</span>
            <span>${done} LIÇÕES CONCLUÍDAS</span>
          </div>
          <button onclick="confirmReset()"
            class="font-mono-tech text-xs text-slate-600 hover:text-red-400 transition-colors
                   px-2 py-1 border border-transparent hover:border-red-500/30 rounded">
            RESET
          </button>
        </div>
      </div>
    </header>

    <div class="max-w-5xl mx-auto px-4 pt-12 pb-8 text-center">
      <div class="font-mono-tech text-xs text-cyan-500/60 tracking-widest mb-3">[ SISTEMA INICIADO ]</div>
      <h1 class="font-orbitron text-3xl md:text-5xl font-black text-white leading-tight">
        <span style="text-shadow:0 0 40px rgba(0,229,255,0.5)">CALCULUS</span><br/>
        <span class="text-cyan-400 text-glow">LEVELING SYSTEM</span>
      </h1>
      <p class="text-slate-400 font-mono-tech text-sm mt-4">Selecione um módulo para iniciar sua progressão</p>
    </div>

    <div class="max-w-5xl mx-auto px-4 mb-8">
      <div class="panel rounded-sm px-4 py-3 flex items-center gap-3 border-cyan-500/20">
        <div class="w-6 h-6 border border-cyan-500 flex items-center justify-center text-cyan-400 text-xs flex-shrink-0">ℹ</div>
        <p class="font-mono-tech text-xs text-cyan-300/70">
          Você adquiriu as qualificações para ser um
          <span class="text-cyan-400 font-bold">Estudante de Cálculo</span>.
          Deseja aceitar? <span class="text-slate-500">[ Selecione um módulo abaixo ]</span>
        </p>
      </div>
    </div>

    <div class="max-w-5xl mx-auto px-4 pb-16">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">${cards}</div>
    </div>
  `);
}

// ── Skill Tree ───────────────────────────────────────────────
function openModule(moduleId) {
  STATE.activeModule = moduleId;
  renderSkillTree();
}

function renderSkillTree() {
  STATE.screen = 'skillTree';
  const mod = GAME_DATA.modules.find(m => m.id === STATE.activeModule);
  const earnedXP = getModuleXP(STATE.activeModule);
  const pct = Math.round((earnedXP / mod.totalXP) * 100);

  const nodes = mod.skills.map((skill, i) => {
    const unlocked  = isSkillUnlocked(STATE.activeModule, i);
    const completed = isSkillCompleted(STATE.activeModule, skill.id);
    const state = completed ? 'completed' : (unlocked ? 'available' : 'locked');

    const doneLessons = skill.lessons.filter(l =>
      isLessonCompleted(STATE.activeModule, skill.id, l.id)
    ).length;

    const ringCls = completed
      ? 'border-cyan-400 bg-cyan-500/10'
      : unlocked
        ? 'border-cyan-500/70 bg-cyan-500/5 animate-pulse-cyan'
        : 'border-slate-700 bg-slate-900/50';

    const iconCls = completed ? 'text-cyan-300' : unlocked ? 'text-cyan-500/70' : 'text-slate-600';

    return `
      ${i > 0 ? `<div class="connector ${completed ? 'done' : ''} h-8 w-0.5"></div>` : ''}
      <div class="skill-node ${state} flex flex-col items-center"
           ${state !== 'locked' ? `onclick="openSkill('${skill.id}')"` : ''}>
        <div class="relative w-20 h-20 rounded-full border-2 ${ringCls} flex items-center justify-center transition-all duration-300">
          <span class="text-2xl ${iconCls}" style="${completed ? 'text-shadow:0 0 15px rgba(0,229,255,.7)' : ''}">${skill.icon}</span>
          ${completed ? `<div class="absolute -top-1 -right-1 w-5 h-5 bg-cyan-500 rounded-full flex items-center justify-center text-xs text-black font-bold">✓</div>` : ''}
          ${state === 'available' ? `<div class="absolute inset-0 rounded-full border border-cyan-400/30 animate-ping" style="animation-duration:2s"></div>` : ''}
        </div>
        <div class="mt-2 text-center max-w-28">
          <p class="font-orbitron text-xs font-bold ${state === 'locked' ? 'text-slate-600' : 'text-cyan-300'} leading-tight">${skill.title}</p>
          <p class="font-mono-tech text-xs ${state === 'locked' ? 'text-slate-700' : 'text-slate-500'} mt-0.5">
            ${doneLessons}/${skill.lessons.length} · ${skill.xp}XP
          </p>
        </div>
      </div>`;
  }).join('');

  render(`
    <header class="border-b border-cyan-500/20 bg-slate-950/80 backdrop-blur sticky top-0 z-20">
      <div class="max-w-3xl mx-auto px-4 py-3 flex items-center gap-4">
        <button onclick="renderDashboard()" class="btn-primary px-3 py-1.5 rounded-sm">← VOLTAR</button>
        <div>
          <span class="font-orbitron font-bold text-cyan-400 text-sm">${mod.title}</span>
          <span class="font-mono-tech text-xs text-slate-500 ml-3">${mod.subtitle}</span>
        </div>
      </div>
    </header>

    <div class="max-w-3xl mx-auto px-4 pt-8 pb-4">
      <div class="panel rounded-sm p-5 mb-8">
        <div class="flex items-center justify-between mb-3">
          <div>
            <div class="font-mono-tech text-xs text-cyan-500/60 tracking-widest mb-1">MÓDULO RANK</div>
            <div class="font-orbitron font-black text-4xl"
                 style="color:${mod.rankColor}; text-shadow:0 0 30px ${mod.rankColor}">${mod.rank}</div>
          </div>
          <div class="text-right">
            <div class="font-mono-tech text-xs text-slate-400 mb-1">PROGRESSO TOTAL</div>
            <div class="font-orbitron text-2xl text-white">${pct}<span class="text-cyan-400 text-lg">%</span></div>
            <div class="font-mono-tech text-xs text-slate-500">${earnedXP} / ${mod.totalXP} XP</div>
          </div>
        </div>
        <div class="h-2 bg-slate-800 rounded-full overflow-hidden">
          <div class="h-full rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-400 xp-fill"
               style="width:${pct}%"></div>
        </div>
      </div>

      <div class="flex flex-col items-center pb-16">${nodes}</div>
    </div>
  `);
}

// ── Skill / Lesson selector ───────────────────────────────────
function openSkill(skillId) {
  STATE.activeSkill = skillId;
  const mod   = GAME_DATA.modules.find(m => m.id === STATE.activeModule);
  const skill = mod.skills.find(s => s.id === skillId);

  if (skill.lessons.length === 1) { openLesson(skill.lessons[0].id); return; }
  showLessonSelectModal(skill);
}

function showLessonSelectModal(skill) {
  const items = skill.lessons.map((lesson, i) => {
    const done = isLessonCompleted(STATE.activeModule, skill.id, lesson.id);
    return `
    <div class="panel rounded-sm p-4 cursor-pointer hover:border-cyan-400/50 transition-all flex items-center gap-4"
         onclick="closeLessonModal(); openLesson('${lesson.id}')">
      <div class="w-10 h-10 rounded-full border ${done ? 'border-cyan-400 bg-cyan-500/10' : 'border-slate-600'}
                  flex items-center justify-center flex-shrink-0">
        <span class="${done ? 'text-cyan-400' : 'text-slate-500'} text-sm">${done ? '✓' : i + 1}</span>
      </div>
      <div>
        <p class="font-orbitron text-sm font-bold ${done ? 'text-cyan-300' : 'text-slate-300'}">${lesson.theory.title}</p>
        <p class="font-mono-tech text-xs text-slate-500">${done ? 'CONCLUÍDA' : 'DISPONÍVEL'}</p>
      </div>
    </div>`;
  }).join('');

  const modal = document.createElement('div');
  modal.id = 'lessonModal';
  modal.className = 'modal-overlay';
  modal.innerHTML = `
    <div class="modal-box rounded-sm p-6">
      <div class="notif-header -mx-6 -mt-6 px-6 py-3 mb-6 flex items-center justify-between">
        <div class="flex items-center gap-3">
          <div class="notif-icon"><span class="text-cyan-400 font-bold text-xs z-10 relative">⚡</span></div>
          <span class="font-orbitron text-xs text-cyan-400 tracking-widest">SELECIONAR LIÇÃO</span>
        </div>
        <button onclick="closeLessonModal()" class="text-slate-500 hover:text-cyan-400 transition-colors text-lg leading-none">✕</button>
      </div>
      <h3 class="font-orbitron text-lg text-white mb-4">${skill.title}</h3>
      <div class="flex flex-col gap-3">${items}</div>
    </div>`;
  document.body.appendChild(modal);
}

function closeLessonModal() {
  document.getElementById('lessonModal')?.remove();
}

// ── Lesson ────────────────────────────────────────────────────
function openLesson(lessonId) {
  const mod   = GAME_DATA.modules.find(m => m.id === STATE.activeModule);
  const skill = mod.skills.find(s => s.id === STATE.activeSkill);
  const lesson = skill.lessons.find(l => l.id === lessonId);

  STATE.activeLesson = lessonId;
  renderLessonView(lesson, skill, mod);
}

function renderLessonView(lesson, skill, mod) {
  render(`
    <header class="border-b border-cyan-500/20 bg-slate-950/80 backdrop-blur sticky top-0 z-20">
      <div class="max-w-3xl mx-auto px-4 py-3 flex items-center gap-4">
        <button onclick="openModule('${mod.id}')" class="btn-primary px-3 py-1.5 rounded-sm">← SAIR</button>
        <div class="flex-1">
          <div class="flex items-center gap-2">
            <span class="font-mono-tech text-xs text-slate-500">${mod.title}</span>
            <span class="text-slate-700">›</span>
            <span class="font-orbitron text-xs text-cyan-400">${skill.title}</span>
          </div>
        </div>
        <div class="font-mono-tech text-xs text-cyan-500/60">${skill.xp} XP</div>
      </div>
      <div class="max-w-3xl mx-auto px-4 pb-2 flex gap-2">
        <div class="flex-1 h-0.5 rounded-full bg-cyan-500"></div>
        <div class="flex-1 h-0.5 rounded-full bg-slate-700" id="step2bar"></div>
      </div>
    </header>

    <div class="max-w-3xl mx-auto px-4 pt-6 pb-16 flex flex-col gap-5">

      <!-- THEORY CARD -->
      <div class="theory-card rounded-sm p-5 relative">
        <div class="corner-tl corner-br"></div>
        <div class="flex items-center gap-2 mb-4">
          <div class="w-1.5 h-5 bg-cyan-400 rounded-full"></div>
          <span class="font-mono-tech text-xs text-cyan-400/70 tracking-widest">TEORIA &amp; EXEMPLO</span>
        </div>
        <h2 class="font-orbitron text-xl font-bold text-white mb-3">${lesson.theory.title}</h2>
        <div class="math-display text-sm whitespace-pre-wrap mb-4">${lesson.theory.explanation}</div>
        <div class="border-t border-cyan-500/10 pt-4">
          <div class="flex items-center gap-2 mb-3">
            <span class="font-mono-tech text-xs text-blue-400/60">► EXEMPLO RESOLVIDO</span>
          </div>
          <div class="math-display text-sm whitespace-pre-wrap">${lesson.theory.example}</div>
          <div class="mt-3 flex items-center gap-2">
            <span class="font-mono-tech text-xs text-slate-500">RESULTADO:</span>
            <span class="font-mono-tech text-xs text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded">${lesson.theory.result}</span>
          </div>
        </div>
      </div>

      <!-- PRACTICE CARD -->
      <div class="practice-card rounded-sm p-5 relative">
        <div class="flex items-center gap-2 mb-4">
          <div class="w-1.5 h-5 bg-purple-400 rounded-full"></div>
          <span class="font-mono-tech text-xs text-purple-400/70 tracking-widest">ATIVIDADE PRÁTICA</span>
        </div>
        <div class="math-display text-sm whitespace-pre-wrap mb-5">${lesson.practice.question}</div>
        <div id="practiceForm">
          <label class="font-mono-tech text-xs text-slate-400 mb-2 block">SUA RESPOSTA (valor numérico):</label>
          <div class="flex gap-3">
            <input id="answerInput" type="number" step="any" placeholder="0"
              class="sys-input flex-1 px-4 py-2.5 rounded-sm text-sm"
              onkeydown="if(event.key==='Enter') checkAnswer()" />
            <button id="confirmBtn" onclick="checkAnswer()" class="btn-primary px-5 py-2.5 rounded-sm">
              CONFIRMAR
            </button>
          </div>
          <div id="hintBox" class="hidden mt-3 p-3 border border-amber-500/30 bg-amber-500/5 rounded-sm">
            <p class="font-mono-tech text-xs text-amber-300/80">💡 ${lesson.practice.hint}</p>
          </div>
          <div id="feedbackBox" class="mt-3"></div>
        </div>
      </div>
    </div>
  `);

  window._currentLesson = lesson;
  window._currentSkill  = skill;
  window._currentMod    = mod;

  setTimeout(() => document.getElementById('answerInput')?.focus(), 300);
}

// ── Answer check ─────────────────────────────────────────────
async function checkAnswer() {
  const lesson = window._currentLesson;
  const skill  = window._currentSkill;
  const mod    = window._currentMod;
  const input  = document.getElementById('answerInput');
  const btn    = document.getElementById('confirmBtn');
  const val    = parseFloat(input.value);

  if (isNaN(val)) { setFeedback('error', 'Digite um valor numérico válido.'); return; }

  btn.disabled = true;
  btn.textContent = '...';

  const correct = Math.abs(val - lesson.practice.answer) <= lesson.practice.tolerance;

  if (correct) {
    const xpEarned = Math.floor(skill.xp / skill.lessons.length);
    await markLessonComplete(mod.id, skill.id, lesson.id, xpEarned);
    document.getElementById('step2bar')?.classList.replace('bg-slate-700', 'bg-cyan-500');
    showQuestCleared(skill, xpEarned);
  } else {
    btn.disabled = false;
    btn.textContent = 'TENTAR NOVAMENTE';
    document.getElementById('hintBox').classList.remove('hidden');
    setFeedback('error', 'Resposta incorreta. Verifique os cálculos e tente novamente.');
  }
}

function setFeedback(type, msg) {
  const fb = document.getElementById('feedbackBox');
  if (!fb) return;
  if (type === 'error') {
    fb.innerHTML = `<div class="p-3 border border-red-500/30 bg-red-500/5 rounded-sm">
      <p class="font-mono-tech text-xs text-red-400">✕ ${msg}</p></div>`;
  }
}

// ── Quest Cleared ─────────────────────────────────────────────
function showQuestCleared(skill, xpEarned) {
  const overlay = document.createElement('div');
  overlay.className = 'quest-overlay';
  overlay.innerHTML = `
    <div class="quest-box text-center">
      <div class="font-mono-tech text-xs text-cyan-500/60 mb-2 tracking-widest">[ QUEST ]</div>
      <div class="font-orbitron text-4xl font-black text-cyan-400 text-glow mb-2">CLEARED!</div>
      <div class="font-mono-tech text-sm text-slate-300">+ ${xpEarned} XP obtidos</div>
    </div>`;
  document.body.appendChild(overlay);
  setTimeout(() => { overlay.remove(); showCompletionModal(skill); }, 2200);
}

function showCompletionModal(skill) {
  const mod         = window._currentMod;
  const skillDone   = isSkillCompleted(mod.id, skill.id);
  const lesson      = window._currentLesson;

  const modal = document.createElement('div');
  modal.className = 'modal-overlay';
  modal.innerHTML = `
    <div class="modal-box rounded-sm p-6 text-center">
      <div class="notif-header -mx-6 -mt-6 px-6 py-3 mb-6">
        <div class="flex items-center justify-center gap-3">
          <div class="notif-icon"><span class="text-cyan-400 font-bold z-10 relative">✦</span></div>
          <span class="font-orbitron text-xs text-cyan-400 tracking-widest">NOTIFICAÇÃO DO SISTEMA</span>
        </div>
      </div>
      <div class="font-orbitron text-5xl font-black text-cyan-400 text-glow mb-2">✓</div>
      <h3 class="font-orbitron text-xl font-bold text-white mb-1">Lição Concluída!</h3>
      <p class="font-mono-tech text-sm text-slate-400 mb-2">${lesson.theory.title}</p>
      ${skillDone ? `
        <div class="mt-4 mb-4 p-3 border border-cyan-500/30 bg-cyan-500/5 rounded-sm">
          <p class="font-orbitron text-sm text-cyan-400">HABILIDADE DESBLOQUEADA</p>
          <p class="font-mono-tech text-xs text-slate-400 mt-1">"${skill.title}" concluída — próxima área liberada!</p>
        </div>` : ''}
      <div class="flex gap-3 mt-6">
        <button onclick="closeModal(); renderSkillTree()"
          class="btn-primary flex-1 px-4 py-3 rounded-sm">VER ÁRVORE</button>
        <button onclick="closeModal(); goNextLesson()"
          class="btn-success flex-1 px-4 py-3 rounded-sm">CONTINUAR →</button>
      </div>
    </div>`;
  document.body.appendChild(modal);
  window._activeModal = modal;
}

function closeModal() { window._activeModal?.remove(); }

function goNextLesson() {
  const mod    = window._currentMod;
  const skill  = mod.skills.find(s => s.id === STATE.activeSkill);
  const idx    = skill.lessons.findIndex(l => l.id === STATE.activeLesson);
  const next   = skill.lessons[idx + 1];
  if (next) { openLesson(next.id); }
  else       { renderSkillTree(); }
}

// ── Reset ─────────────────────────────────────────────────────
function confirmReset() {
  const modal = document.createElement('div');
  modal.className = 'modal-overlay';
  modal.innerHTML = `
    <div class="modal-box rounded-sm p-6 text-center" style="max-width:400px">
      <div class="font-orbitron text-3xl text-red-400 mb-3">⚠</div>
      <h3 class="font-orbitron text-lg text-white mb-2">Resetar Progresso?</h3>
      <p class="font-mono-tech text-xs text-slate-400 mb-6">Todo o progresso será apagado do banco de dados. Esta ação não pode ser desfeita.</p>
      <div class="flex gap-3">
        <button onclick="this.closest('.modal-overlay').remove()"
          class="btn-primary flex-1 px-4 py-3 rounded-sm">CANCELAR</button>
        <button onclick="doReset()"
          class="flex-1 px-4 py-3 rounded-sm font-orbitron text-xs tracking-widest cursor-pointer
                 bg-red-500/10 border border-red-500/60 text-red-400 hover:bg-red-500/20 transition-all">
          CONFIRMAR RESET
        </button>
      </div>
    </div>`;
  document.body.appendChild(modal);
  window._activeModal = modal;
}

async function doReset() {
  closeModal();
  renderLoading();
  await API.reset();
  STATE.progress = {};
  renderDashboard();
}

// ── Boot ──────────────────────────────────────────────────────
(async () => {
  renderLoading();
  STATE.progress = await API.getAll();
  renderDashboard();
})();
