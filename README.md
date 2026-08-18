# RobCo Unified Operating System // Character Dossiers Web Application

A responsive, retro-futuristic single-page character tracking dossier web application styled after an authentic RobCo Pip-Boy / Unified Operating System CRT terminal.

## Live Application URL
- **Production URL:** [https://yorkdevelops.com/FalloutCharSheet/](https://yorkdevelops.com/FalloutCharSheet/)
- **Fallback URL:** [https://cyork95.github.io/FalloutCharSheet/](https://cyork95.github.io/FalloutCharSheet/)

---

## Playthrough Dossiers Included
1. **Commander Nate** — *Fallout 4 (LoreOut / You Are Exceptional modded run)*
   - Principled Minutemen General & Pre-War Military Veteran.
   - S.P.E.C.I.A.L. baseline, Rifleman / Inspirational build, Tri-Faction Cold Peace doctrine, fire support artillery rules.
   - **Auto-switches to Classic P31 Pip-Boy Green (`#18ff62`)**.
   - Includes **The Tri-Faction Cold Peace Survival Matrix** (avoiding BoS hostility at *Mass Fusion*, preventing Railroad hostility by avoiding Kells after *Blind Betrayal*, and properly diverting into the Minutemen ending).
2. **Reeve Sawyer** — *Tale of Two Wastelands (Best of Both Worlds / JSawyer modded run)*
   - Naive Vault 101 Expatriate / Aspiring White-Hat Lawman.
   - High Luck/Charisma, Cowboy / DT build, strict hard chem bans, saloon habits, and diplomatic de-escalation directives.
   - **Auto-switches to New Vegas P13 Amber (`#ffb642`)**.
   - Includes **Wasteland & Mojave Diplomatic Cutoff Guide** (Megaton bomb defusal, 3-strike faction infamy rules, BoS-NCR peace treaty negotiations).

---

## Core Features

### 1. In-Browser Live Edit Mode
- Toggle top status button: `[ACCESS: ARCHIVE (READ)]` vs `[ACCESS: OVERRIDE (EDIT)]`.
- In **Edit Mode**, easily modify:
  - Character Level & Archetype.
  - S.P.E.C.I.A.L. attribute values (with live interactive pip bars).
  - Active weapons, armor, and equipment loadout (add/delete requisitions).
  - Faction standings, Karma, and Companion assignments.

### 2. Automatic Browser Persistence (`localStorage`)
- Automatically saves all stats, checked perks, skill milestones, equipment, and field logs as you play.
- Namespaced per character (`fallout_dossier_nate` and `fallout_dossier_reeve`) so switching tabs maintains independent states.
- Reverts to Level 1 Factory Genesis defaults if storage is reset.

### 3. Interactive Perk & Milestone Checkboxes
- Click on any Level 1–10 Perk or Skill Target milestone to toggle acquired status with visual strikethrough/badges and illuminated 100% progress tracks.

### 4. Field Terminal Logs / Session Journal
- Timestamped session journal cards at the bottom of each dossier.
- Add notes like `[2287-10-24 16:40: Castle Armory unlocked, Ronnie Shaw secured]` to chronicle your playthrough journey.

### 5. JSON Export, Import & Reset Controls
- **`[EXPORT DOSSIER (.JSON)]`**: Download full JSON backups of active character dossiers.
- **`[RESTORE FROM JSON]`**: Paste or upload JSON backups to restore character states anytime.
- **`[COPY JSON TO CLIPBOARD]`**: Fast clipboard backup.
- **`[PURGE / RESET TO FACTORY]`**: Restore clean Level 1 Genesis state with a RobCo security confirmation dialog.

### 6. Authentic RobCo CRT Aesthetic & Sound FX
- Scanlines, CRT curvature/vignette overlay, monospace typography (`Share Tech Mono` & `VT323`), text glow bloom, and favicon.
- Web Audio API procedural retro mechanical clicks and terminal tones.
- CRT FX toggle button for clean reading mode.
- Print stylesheet for high-contrast character sheets.
