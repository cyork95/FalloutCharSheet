/* =============================================================================
   ROBCO UNIFIED OPERATING SYSTEM // TERMLINK JAVASCRIPT ENGINE
   Interactive Character Dossiers & Sound Synthesizer
   ============================================================================= */

// --- 1. DOSSIER DATABASE ---
const DOSSIER_DATA = {
  nate: {
    id: "nate",
    recordId: "FO4-EXP-088194",
    name: "Commander Nate",
    modTitle: "Fallout 4: LoreOut / You Are Exceptional",
    archetype: "Field Commander / Militia General",
    avatarIcon: "🎖️",
    badge: "MIL-GEN // V111",
    level: 1,
    morality: "Principled Lawbringer (Good / Minutemen Aligned)",
    origin: "Pre-War Military Veteran / Vault 111",
    companions: "Dogmeat & Preston Garvey",
    loadout: [
      "10mm Standard Semi-Auto Pistol",
      "Militia Service Rifle (M16A1 / Carbine)",
      "Military Combat Knife (Trench Edge)",
      "Standard Pre-War Army Fatigues & Webbing"
    ],
    special: [
      { key: "S", name: "Strength", score: 4, desc: "Armor handling baseline & Lunar carry weight threshold regulation." },
      { key: "P", name: "Perception", score: 6, desc: "Rifle discipline, designated marksman focus & explosive trajectories." },
      { key: "E", name: "Endurance", score: 4, desc: "Field grit, sprint conservation & environmental hazard resilience." },
      { key: "C", name: "Charisma", score: 7, desc: "Command presence, Inspirational squad buffs & RED speech triumph." },
      { key: "I", name: "Intelligence", score: 6, desc: "Skill point yields, Science & Repair for ECO workbench modifications." },
      { key: "A", name: "Agility", score: 5, desc: "Tactical repositioning, combat stamina & low-profile rapid reloads." },
      { key: "L", name: "Luck", score: 2, desc: "Deterministic tactical superiority prioritized over VATS critical RNG." }
    ],
    traits: [
      { name: "Trigger Discipline", type: "Combat Trait", effect: "+20% Accuracy with firearms, -20% Fire Rate. Enforces deliberate, lethal shot placement." },
      { name: "Good Natured", type: "Social Trait", effect: "+5 to Speech, Medicine, Repair, Barter; -5 to starting combat weapon proficiencies." }
    ],
    tags: ["Guns", "Speech", "Repair"],
    targets: [
      { skill: "Explosives", current: 15, goal: "30+", pct: 50, note: "Crucial for Minutemen field artillery accuracy & grenade arcs." },
      { skill: "Science!", current: 20, goal: "30+", pct: 66, note: "Settlement power grids, industrial water purifiers & laser defenses." },
      { skill: "Medicine", current: 18, goal: "30+", pct: 60, note: "Immersive Animation Framework (IAF) stimpak stabilization & triage." }
    ],
    perks: [
      { level: 2, name: "Rifleman (Rank 1)", detail: "Non-automatic rifles deal +20% damage and ignore 15% armor." },
      { level: 4, name: "Inspirational (Rank 1)", detail: "Companions deal +20% damage and cannot harm the Commander in crossfire." },
      { level: 6, name: "Demolition Expert", detail: "Explosives do +25% damage; grants grenade throw trajectory line arc." },
      { level: 8, name: "Gun Nut / Repair Specialist", detail: "Enables Tier 2 firearm mods & ECO battlefield equipment servicing." },
      { level: 10, name: "Local Leader (Rank 1)", detail: "Allows creation of supply lines between Minutemen settlement nodes." }
    ],
    directives: [
      {
        title: "The Tri-Faction Cold Peace",
        text: "Establish the Minutemen as the sovereign territorial backbone, utilize Brotherhood heavy armor for specialized muscle against super mutants, and maintain covert Railroad channels for synth reconnaissance."
      },
      {
        title: "Fire Support Doctrine",
        text: "Never assault fortified hostile compounds or raider strongholds without prior artillery / mortar barrage preparation or elevated sniper overwatch."
      },
      {
        title: "Militia Trade Network",
        text: "Establish synchronized caravan trade routes to deploy patrolling militia squads across the Commonwealth sectors, ensuring civilian trade safety."
      },
      {
        title: "Pre-War Composure",
        text: "Strict refusal of unprescribed street chems (Jet, Psycho). Rely solely on field-grade rations, clean water, triage stimpaks, and disciplined tactical drills."
      }
    ]
  },

  reeve: {
    id: "reeve",
    recordId: "TTW-JS-101783",
    name: "Reeve Sawyer",
    modTitle: "Tale of Two Wastelands: Best of Both Worlds / JSawyer",
    archetype: "Naive Vault Expatriate / Aspiring White-Hat Lawman",
    avatarIcon: "🤠",
    badge: "EXILE-101 // COURIER",
    level: 1,
    morality: "Very Good (Saintly / White Hat)",
    origin: "Vault 101 Exiled Wanderer (Capital Wasteland to Mojave)",
    companions: "None (Solo Wanderer / Occasional Local Allies)",
    loadout: [
      "10mm Standard Pistol (Vault 101 Issue)",
      "Standard Vault Security Baton / Switchblade",
      "Armored Vault 101 Jumpsuit",
      "Worn Leather Duster & Silver Sheriff Star"
    ],
    special: [
      { key: "S", name: "Strength", score: 5, desc: "Melee baseline & standard foundation for lever-actions and shotguns." },
      { key: "P", name: "Perception", score: 3, desc: "Low eyesight baseline; qualifies for 'Four Eyes' eyewear correction." },
      { key: "E", name: "Endurance", score: 6, desc: "High organic stamina and resilience against JSawyer HP penalties." },
      { key: "C", name: "Charisma", score: 8, desc: "Effortless charm, magnetic swagger and peaceful conflict resolution." },
      { key: "I", name: "Intelligence", score: 3, desc: "Simpleton baseline; relies on folk wisdom and gut instinct over academic theory." },
      { key: "A", name: "Agility", score: 5, desc: "Balanced holster draw reflexes, hip-fire mobility and sprint stamina." },
      { key: "L", name: "Luck", score: 9, desc: "Guardian angel tier; massive critical frequency and fortunate windfall." }
    ],
    traits: [
      { name: "Simpleton", type: "JSawyer Trait", effect: "+10% Damage Resistance; permanent -2 penalty to Intelligence skill calculations." },
      { name: "Four Eyes", type: "Sensory Trait", effect: "+2 Perception when wearing glasses/goggles; -1 Perception without eyewear." }
    ],
    tags: ["Guns", "Survival", "Speech"],
    targets: [
      { skill: "Explosives", current: 12, goal: "30", pct: 40, note: "Requirement for Cowboy perk & defusing Megaton's central atomic bomb." },
      { skill: "Melee Weapons", current: 14, goal: "30", pct: 46, note: "Prerequisite for Cowboy perk (+25% damage with revolvers, lever-actions, knives)." },
      { skill: "Repair", current: 15, goal: "30+", pct: 50, note: "Crucial for patching Megaton's leaking water pipes and equipment maintenance." }
    ],
    perks: [
      { level: 2, name: "Confirmed Bachelor", detail: "+10% damage vs male opponents & unlocks unique diplomatic dialogue options with men." },
      { level: 4, name: "Lady Killer", detail: "+10% damage vs female opponents & unlocks unique seductive dialogue options with women." },
      { level: 6, name: "Toughness (Rank 1)", detail: "+3 Damage Threshold (DT) to counteract JSawyer's punishing combat lethality." },
      { level: 8, name: "Rapid Reload", detail: "All weapon reload times reduced by 25%, essential for tubular-fed lever actions." },
      { level: 10, name: "Cowboy", detail: "+25% damage with revolvers, lever-actions, dynamite, knives, and hatchets." }
    ],
    directives: [
      {
        title: "The White Hat",
        text: "Always seek fair, peaceful, and honest resolutions for downtrodden settlers; adopt and protect strays, orphans, and enslaved wanderers."
      },
      {
        title: "The Hard Chem Line",
        text: "Strict and unbreakable refusal of hard narcotics (Jet, Psycho, Buffout, Med-X). Never succumb to chemical addiction."
      },
      {
        title: "Saloon Habit",
        text: "Indulge freely in cold Sunset Sarsaparilla, whiskey, beer, and tobacco at wasteland saloons to process the trauma of wasteland combat."
      },
      {
        title: "Diplomat's Swagger",
        text: "Always attempt to flirt, charm, de-escalate, or bluff through tense confrontations before drawing a sidearm."
      }
    ]
  }
};

// --- 2. RETRO SOUND SYNTHESIZER (WEB AUDIO API) ---
let audioCtx = null;
let soundEnabled = true;

function initAudio() {
  if (!audioCtx) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) {
      audioCtx = new AudioContext();
    }
  }
}

function playTerminalTone(freq = 800, duration = 0.04, type = "sine") {
  if (!soundEnabled) return;
  try {
    initAudio();
    if (!audioCtx) return;
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    
    osc.type = type;
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
    
    gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
    
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    
    osc.start();
    osc.stop(audioCtx.currentTime + duration);
  } catch (e) {
    // Audio context may be restricted before user gesture
  }
}

function playKeyClick() {
  playTerminalTone(1200 + Math.random() * 400, 0.025, "triangle");
}

function playBeepOk() {
  playTerminalTone(900, 0.08, "sine");
  setTimeout(() => playTerminalTone(1400, 0.08, "sine"), 60);
}

function toggleAudio() {
  soundEnabled = !soundEnabled;
  const btn = document.getElementById("btn-sound");
  if (soundEnabled) {
    btn.innerHTML = `<span class="ctrl-icon">🔊</span> <span class="ctrl-text">AUDIO: ON</span>`;
    playBeepOk();
  } else {
    btn.innerHTML = `<span class="ctrl-icon">🔇</span> <span class="ctrl-text">AUDIO: OFF</span>`;
  }
}

// --- 3. CRT FX & THEME SWITCHER ---
function toggleCRT() {
  const isCrt = document.body.classList.toggle("crt-enabled");
  const btn = document.getElementById("btn-crt");
  btn.innerHTML = isCrt 
    ? `<span class="ctrl-icon">📺</span> <span class="ctrl-text">CRT FX: ON</span>`
    : `<span class="ctrl-icon">🖥️</span> <span class="ctrl-text">CRT FX: OFF</span>`;
  playTerminalTone(600, 0.05, "square");
}

function changeTheme(themeClass) {
  document.body.classList.remove("theme-green", "theme-amber", "theme-cyan", "theme-red");
  document.body.classList.add(themeClass);
  playBeepOk();
}

// --- 4. PERK PROGRESS TRACKER (LOCALSTORAGE) ---
function getPerkStorageKey(charId, perkIndex) {
  return `robco_perk_${charId}_${perkIndex}`;
}

function togglePerk(charId, perkIndex) {
  const key = getPerkStorageKey(charId, perkIndex);
  const current = localStorage.getItem(key) === "true";
  localStorage.setItem(key, (!current).toString());
  playTerminalTone(current ? 450 : 1350, 0.05, "sine");
  
  const stepElem = document.getElementById(`perk-step-${charId}-${perkIndex}`);
  const statusElem = document.getElementById(`perk-status-${charId}-${perkIndex}`);
  if (stepElem && statusElem) {
    if (!current) {
      stepElem.classList.add("completed");
      statusElem.textContent = "[STATUS: ACQUIRED]";
    } else {
      stepElem.classList.remove("completed");
      statusElem.textContent = "[STATUS: PLANNED]";
    }
  }
}

// --- 5. RENDER DOSSIER VIEW ---
let activeCharId = "nate";

function renderDossier(charId) {
  const data = DOSSIER_DATA[charId];
  if (!data) return;

  const container = document.getElementById("dossier-content");
  
  // Build S.P.E.C.I.A.L. rows
  const specialHtml = data.special.map(stat => {
    let pips = "";
    for (let i = 1; i <= 10; i++) {
      pips += `<div class="special-pip ${i <= stat.score ? 'filled' : ''}"></div>`;
    }
    return `
      <div class="special-row">
        <div class="special-letter">${stat.key}</div>
        <div class="special-score">${stat.score}</div>
        <div class="special-bar-container">${pips}</div>
        <div class="special-desc"><strong>${stat.name}:</strong> ${stat.desc}</div>
      </div>
    `;
  }).join("");

  // Build Tag Skills & Targets
  const tagPills = data.tags.map(t => `<span class="tag-badge">★ TAGGED: ${t.toUpperCase()}</span>`).join("");
  const targetItems = data.targets.map(tar => `
    <div class="target-item">
      <div class="target-header">
        <span class="target-skill-name">${tar.skill}</span>
        <span class="target-goal">TARGET: ${tar.goal}</span>
      </div>
      <div class="progress-track">
        <div class="progress-fill" style="width: ${tar.pct}%"></div>
      </div>
      <div class="target-rationale">${tar.note}</div>
    </div>
  `).join("");

  // Build Traits
  const traitsHtml = data.traits.map(tr => `
    <div class="trait-box">
      <div class="trait-header">
        <span>${tr.name}</span>
        <span class="trait-type">${tr.type}</span>
      </div>
      <div class="trait-effect">${tr.effect}</div>
    </div>
  `).join("");

  // Build Loadout
  const loadoutHtml = data.loadout.map(item => `
    <li class="loadout-item"><span style="color:var(--term-color-dim)">►</span> ${item}</li>
  `).join("");

  // Build Perks Timeline
  const perksHtml = data.perks.map((p, idx) => {
    const isAcquired = localStorage.getItem(getPerkStorageKey(charId, idx)) === "true";
    return `
      <div class="perk-step ${isAcquired ? 'completed' : ''}" id="perk-step-${charId}-${idx}" onclick="togglePerk('${charId}', ${idx})" title="Click to toggle acquired status">
        <div class="perk-lvl-box">
          <span>LVL</span>
          <span style="font-size:1.3rem;">${p.level}</span>
          <span class="lvl-sub">TIER</span>
        </div>
        <div class="perk-info">
          <div class="perk-title-row">
            <span class="perk-name">${p.name}</span>
            <span class="perk-status" id="perk-status-${charId}-${idx}">[STATUS: ${isAcquired ? 'ACQUIRED' : 'PLANNED'}]</span>
          </div>
          <div class="perk-detail">${p.detail}</div>
        </div>
      </div>
    `;
  }).join("");

  // Build Directives
  const directivesHtml = data.directives.map(dir => `
    <div class="directive-card">
      <div class="directive-name">${dir.title}</div>
      <div class="directive-text">${dir.text}</div>
    </div>
  `).join("");

  // Inject full template
  container.innerHTML = `
    <div class="dossier-grid">
      
      <!-- HERO CARD: IDENTITY & PROFILE -->
      <section class="robco-card col-12" aria-labelledby="sec-identity">
        <div class="card-title">
          <span id="sec-identity">SUBJECT DOSSIER // IDENTIFICATION FILE</span>
          <span class="card-tag">REF: ${data.recordId}</span>
        </div>
        <div class="identity-hero">
          <div class="avatar-frame">
            <span class="avatar-icon">${data.avatarIcon}</span>
            <span class="avatar-badge">${data.badge}</span>
          </div>
          
          <div class="identity-details">
            <div class="subject-name">
              ${data.name}
              <span class="mod-tag">${data.modTitle}</span>
            </div>
            <div class="subject-archetype">ROLE: ${data.archetype}</div>
            
            <div class="subject-meta-chips">
              <div class="meta-chip">ORIGIN: <strong>${data.origin}</strong></div>
              <div class="meta-chip">KARMA: <strong>${data.morality}</strong></div>
              <div class="meta-chip">COMPANIONS: <strong>${data.companions}</strong></div>
            </div>
          </div>

          <div class="quick-stats-box">
            <div class="stat-row">
              <span class="stat-label">START LEVEL:</span>
              <span class="stat-value">LEVEL ${data.level}</span>
            </div>
            <div class="stat-row">
              <span class="stat-label">HEALTH STATUS:</span>
              <span class="stat-value">OPTIMAL</span>
            </div>
            <div class="stat-row">
              <span class="stat-label">RADIATION:</span>
              <span class="stat-value">0 RADS</span>
            </div>
            <div class="stat-row">
              <span class="stat-label">HOLOTAPE LOG:</span>
              <span class="stat-value">AUTHENTICATED</span>
            </div>
          </div>
        </div>
      </section>

      <!-- S.P.E.C.I.A.L. ATTRIBUTE SYSTEM -->
      <section class="robco-card col-7" aria-labelledby="sec-special">
        <div class="card-title">
          <span id="sec-special">S.P.E.C.I.A.L. BASELINE ATTRIBUTES</span>
          <span class="card-tag">ALLOCATION SCORE: 34 PTS</span>
        </div>
        <div class="special-grid">
          ${specialHtml}
        </div>
      </section>

      <!-- TAG SKILLS & MILESTONES -->
      <section class="robco-card col-5" aria-labelledby="sec-skills">
        <div class="card-title">
          <span id="sec-skills">TAG SKILLS & PRIORITY MILESTONES</span>
          <span class="card-tag">TACTICAL TARGETS</span>
        </div>
        <div class="tags-container">
          <div class="tagged-skill-pills">
            ${tagPills}
          </div>
          <div class="targets-list">
            ${targetItems}
          </div>
        </div>
      </section>

      <!-- TRAITS & STARTING LOADOUT -->
      <section class="robco-card col-4" aria-labelledby="sec-traits">
        <div class="card-title">
          <span id="sec-traits">TRAITS & GEAR LOADOUT</span>
          <span class="card-tag">FIELD INVENTORY</span>
        </div>
        <div style="display:flex; flex-direction:column; gap:0.75rem;">
          <div>
            <div style="font-size:0.8rem; font-weight:bold; color:var(--term-color-dim); margin-bottom:0.35rem;">BIOLOGICAL & PSYCH TRAITS</div>
            <div class="trait-card-list">
              ${traitsHtml}
            </div>
          </div>
          <div style="border-top:1px dashed var(--term-border-dim); padding-top:0.6rem;">
            <div style="font-size:0.8rem; font-weight:bold; color:var(--term-color-dim); margin-bottom:0.35rem;">STARTING REQUISITIONS</div>
            <ul class="loadout-list">
              ${loadoutHtml}
            </ul>
          </div>
        </div>
      </section>

      <!-- PERK BLUEPRINT (LVL 1 - 10) -->
      <section class="robco-card col-8" aria-labelledby="sec-perks">
        <div class="card-title">
          <span id="sec-perks">PERK PROGRESSION BLUEPRINT (LEVELS 1–10)</span>
          <span class="card-tag">INTERACTIVE TRACKER (CLICK TO MARK)</span>
        </div>
        <div class="perk-timeline">
          ${perksHtml}
        </div>
      </section>

      <!-- ROLEPLAY DIRECTIVES & MORAL COMPASS -->
      <section class="robco-card col-12" aria-labelledby="sec-directives">
        <div class="card-title">
          <span id="sec-directives">ROLEPLAY DIRECTIVES // MORAL COMPASS & DOCTRINE</span>
          <span class="card-tag">STANDING ORDERS</span>
        </div>
        <div class="directives-grid">
          ${directivesHtml}
        </div>
      </section>

    </div>
  `;

  // Update status footer message
  const statusMsg = document.getElementById("terminal-status-msg");
  if (statusMsg) {
    statusMsg.textContent = `RECORD MOUNTED: ${data.recordId} (${data.name.toUpperCase()}). INTEGRITY CHECK 100% OK.`;
  }
}

// --- 6. SWITCH CHARACTER TAB ---
function switchCharacter(charId) {
  if (charId === activeCharId) {
    playKeyClick();
    return;
  }
  activeCharId = charId;
  
  // Update Tab active states
  const btnNate = document.getElementById("tab-nate");
  const btnReeve = document.getElementById("tab-reeve");
  
  if (charId === "nate") {
    btnNate.classList.add("active");
    btnNate.setAttribute("aria-selected", "true");
    btnReeve.classList.remove("active");
    btnReeve.setAttribute("aria-selected", "false");
  } else {
    btnReeve.classList.add("active");
    btnReeve.setAttribute("aria-selected", "true");
    btnNate.classList.remove("active");
    btnNate.setAttribute("aria-selected", "false");
  }

  playBeepOk();
  renderDossier(charId);
}

// --- 7. DYNAMIC TERMINAL CLOCK ---
function updateClock() {
  const clockElem = document.getElementById("terminal-clock");
  if (!clockElem) return;
  const now = new Date();
  // Format with a retro Fallout lore year offset (e.g. 2287) or accurate time string
  const year = 2287;
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  clockElem.textContent = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

// --- 8. INITIALIZATION ---
document.addEventListener("DOMContentLoaded", () => {
  renderDossier("nate");
  setInterval(updateClock, 1000);
  updateClock();

  // Add click sound listeners to interactive elements
  document.addEventListener("click", (e) => {
    if (e.target.closest("button") || e.target.closest("select") || e.target.closest(".perk-step")) {
      initAudio();
    }
  });
});
