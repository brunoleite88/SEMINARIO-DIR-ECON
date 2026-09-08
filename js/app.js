/**
 * app.js
 * Controlador Central do Jogo Didático "Concorrência & Ordem: 16-Bits Edition"
 * Gerencia ciclo de vida dos turnos, equipes com líderes oficiais,
 * roleta interativa (com arraste e parada imparcial), sons chiptune, modais e atalhos.
 */

// ==========================================================================
// SPRITES E AVATARES 16-BITS SUPER MARIO WORLD (SNES)
// ==========================================================================
const MARIO_AVATARS = {
    mario: {
        name: "Mario",
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="20" height="20" shape-rendering="crispEdges"><rect x="5" y="1" width="6" height="1" fill="#000"/><rect x="3" y="2" width="2" height="1" fill="#000"/><rect x="5" y="2" width="6" height="1" fill="#e52521"/><rect x="11" y="2" width="2" height="1" fill="#000"/><rect x="2" y="3" width="1" height="2" fill="#000"/><rect x="3" y="3" width="3" height="2" fill="#ffffff"/><rect x="6" y="3" width="4" height="2" fill="#e52521"/><rect x="10" y="3" width="3" height="2" fill="#ffffff"/><rect x="13" y="3" width="1" height="2" fill="#000"/><rect x="1" y="5" width="1" height="4" fill="#000"/><rect x="2" y="5" width="4" height="4" fill="#ffffff"/><rect x="6" y="5" width="4" height="1" fill="#ffffff"/><rect x="6" y="6" width="4" height="3" fill="#e52521"/><rect x="10" y="5" width="4" height="4" fill="#ffffff"/><rect x="14" y="5" width="1" height="4" fill="#000"/><rect x="2" y="9" width="1" height="1" fill="#000"/><rect x="3" y="9" width="10" height="1" fill="#000"/><rect x="13" y="9" width="1" height="1" fill="#000"/><rect x="2" y="10" width="2" height="4" fill="#000"/><rect x="4" y="10" width="8" height="4" fill="#fcd8a8"/><rect x="12" y="10" width="2" height="4" fill="#000"/><rect x="5" y="11" width="1" height="2" fill="#000"/><rect x="10" y="11" width="1" height="2" fill="#000"/><rect x="4" y="14" width="8" height="1" fill="#000"/></svg>`
    },
    luigi: {
        name: "Luigi",
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="20" height="20" shape-rendering="crispEdges"><rect x="5" y="1" width="6" height="1" fill="#000"/><rect x="3" y="2" width="2" height="1" fill="#000"/><rect x="5" y="2" width="6" height="1" fill="#00a800"/><rect x="11" y="2" width="2" height="1" fill="#000"/><rect x="2" y="3" width="1" height="2" fill="#000"/><rect x="3" y="3" width="3" height="2" fill="#ffffff"/><rect x="6" y="3" width="4" height="2" fill="#00a800"/><rect x="10" y="3" width="3" height="2" fill="#ffffff"/><rect x="13" y="3" width="1" height="2" fill="#000"/><rect x="1" y="5" width="1" height="4" fill="#000"/><rect x="2" y="5" width="4" height="4" fill="#ffffff"/><rect x="6" y="5" width="4" height="1" fill="#ffffff"/><rect x="6" y="6" width="4" height="3" fill="#00a800"/><rect x="10" y="5" width="4" height="4" fill="#ffffff"/><rect x="14" y="5" width="1" height="4" fill="#000"/><rect x="2" y="9" width="1" height="1" fill="#000"/><rect x="3" y="9" width="10" height="1" fill="#000"/><rect x="13" y="9" width="1" height="1" fill="#000"/><rect x="2" y="10" width="2" height="4" fill="#000"/><rect x="4" y="10" width="8" height="4" fill="#fcd8a8"/><rect x="12" y="10" width="2" height="4" fill="#000"/><rect x="5" y="11" width="1" height="2" fill="#000"/><rect x="10" y="11" width="1" height="2" fill="#000"/><rect x="4" y="14" width="8" height="1" fill="#000"/></svg>`
    },
    yoshi: {
        name: "Yoshi",
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="20" height="20" shape-rendering="crispEdges"><rect x="6" y="1" width="4" height="1" fill="#000"/><rect x="4" y="2" width="2" height="1" fill="#000"/><rect x="6" y="2" width="4" height="1" fill="#ffffff"/><rect x="10" y="2" width="2" height="1" fill="#000"/><rect x="3" y="3" width="1" height="2" fill="#000"/><rect x="4" y="3" width="8" height="2" fill="#ffffff"/><rect x="12" y="3" width="1" height="2" fill="#000"/><rect x="2" y="5" width="1" height="6" fill="#000"/><rect x="3" y="5" width="10" height="6" fill="#ffffff"/><rect x="13" y="5" width="1" height="6" fill="#000"/><rect x="4" y="6" width="3" height="3" fill="#00a800"/><rect x="8" y="4" width="3" height="2" fill="#00a800"/><rect x="8" y="8" width="3" height="3" fill="#00a800"/><rect x="3" y="11" width="1" height="2" fill="#000"/><rect x="4" y="11" width="8" height="2" fill="#ffffff"/><rect x="12" y="11" width="1" height="2" fill="#000"/><rect x="4" y="13" width="2" height="1" fill="#000"/><rect x="6" y="13" width="4" height="1" fill="#ffffff"/><rect x="10" y="13" width="2" height="1" fill="#000"/><rect x="6" y="14" width="4" height="1" fill="#000"/></svg>`
    },
    peach: {
        name: "Peach",
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="20" height="20" shape-rendering="crispEdges"><rect x="2" y="4" width="2" height="2" fill="#000"/><rect x="7" y="2" width="2" height="2" fill="#000"/><rect x="12" y="4" width="2" height="2" fill="#000"/><rect x="2" y="6" width="12" height="1" fill="#000"/><rect x="2" y="7" width="1" height="5" fill="#000"/><rect x="13" y="7" width="1" height="5" fill="#000"/><rect x="3" y="7" width="10" height="5" fill="#f8b800"/><rect x="6" y="5" width="4" height="4" fill="#e52521"/><rect x="7" y="8" width="2" height="2" fill="#ffffff"/><rect x="7" y="9" width="2" height="1" fill="#e52521"/><rect x="4" y="9" width="1" height="2" fill="#0058f8"/><rect x="11" y="9" width="1" height="2" fill="#0058f8"/><rect x="2" y="12" width="12" height="1" fill="#ffffff"/><rect x="2" y="13" width="12" height="1" fill="#000000"/></svg>`
    },
    bowser: {
        name: "Bowser",
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="20" height="20" shape-rendering="crispEdges"><rect x="6" y="2" width="4" height="1" fill="#000"/><rect x="4" y="3" width="2" height="1" fill="#000"/><rect x="10" y="3" width="2" height="1" fill="#000"/><rect x="7" y="3" width="2" height="2" fill="#ffffff"/><rect x="3" y="4" width="1" height="8" fill="#000"/><rect x="12" y="4" width="1" height="8" fill="#000"/><rect x="4" y="4" width="8" height="7" fill="#00a800"/><rect x="5" y="5" width="2" height="2" fill="#f8b800"/><rect x="6" y="5" width="1" height="1" fill="#ffffff"/><rect x="9" y="5" width="2" height="2" fill="#f8b800"/><rect x="10" y="5" width="1" height="1" fill="#ffffff"/><rect x="7" y="8" width="2" height="2" fill="#f8b800"/><rect x="8" y="8" width="1" height="1" fill="#ffffff"/><rect x="2" y="11" width="12" height="2" fill="#f87800"/><rect x="2" y="10" width="1" height="3" fill="#000"/><rect x="13" y="10" width="1" height="3" fill="#000"/><rect x="3" y="13" width="10" height="1" fill="#000"/></svg>`
    }
};

function normalizeAvatarKey(key) {
    if (!key) return "mario";
    const k = String(key).toLowerCase().trim();
    if (k === "🍄" || k === "mario") return "mario";
    if (k === "⚡" || k === "luigi") return "luigi";
    if (k === "⭐" || k === "yoshi") return "yoshi";
    if (k === "👑" || k === "peach") return "peach";
    if (k === "🦖" || k === "bowser") return "bowser";
    return "mario";
}

function getAvatarSprite(key, size = 20) {
    const norm = normalizeAvatarKey(key);
    const item = MARIO_AVATARS[norm] || MARIO_AVATARS.mario;
    if (size === 20) return item.svg;
    return item.svg.replace('width="20" height="20"', `width="${size}" height="${size}"`);
}

function getLeaderCrownSvg(size = 12) {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="${size}" height="${size}" shape-rendering="crispEdges" style="vertical-align: middle; flex-shrink: 0;"><rect x="2" y="4" width="2" height="2" fill="#000"/><rect x="7" y="2" width="2" height="2" fill="#000"/><rect x="12" y="4" width="2" height="2" fill="#000"/><rect x="2" y="6" width="12" height="1" fill="#000"/><rect x="2" y="7" width="1" height="5" fill="#000"/><rect x="13" y="7" width="1" height="5" fill="#000"/><rect x="3" y="7" width="10" height="5" fill="#f8b800"/><rect x="6" y="5" width="4" height="4" fill="#e52521"/><rect x="7" y="8" width="2" height="2" fill="#ffffff"/><rect x="7" y="9" width="2" height="1" fill="#e52521"/><rect x="4" y="9" width="1" height="2" fill="#0058f8"/><rect x="11" y="9" width="1" height="2" fill="#0058f8"/><rect x="2" y="12" width="12" height="1" fill="#ffffff"/><rect x="2" y="13" width="12" height="1" fill="#000000"/></svg>`;
}

class DidacticGame {
    constructor() {
        this.mode = "EXPRESS"; // "EXPRESS" (15 min) ou "CLASSIC" (25-30 min)
        this.maxRounds = 3;
        this.currentRound = 1;
        this.currentTeamIndex = 0;

        // Configurações padrão do jogo
        this.defaultConfig = {
            timerDuration: 20,
            optionsCount: 4,
            bombsCount: 1,
            correctsPerBadge: 1,
            priorityQuestionId: "",
            brandTitle: "CONCORRÊNCIA & ORDEM",
            brandSubtitle: "SUPER DIREITO ECONÔMICO • 16-BITS SNES EDITION",
            themes: {
                livre_concorrencia: { name: "Livre Concorrência", line1: "LIVRE", line2: "CONCORRÊNCIA" },
                tratamento_pme: { name: "Tratamento PMEs", line1: "TRATAMENTO", line2: "PMEs" },
                modelo_china: { name: "Modelo China", line1: "MODELO DA", line2: "CHINA" },
                ordem_alemanha: { name: "Ordem Alemanha", line1: "ORDEM NA", line2: "ALEMANHA" }
            }
        };
        this.config = JSON.parse(JSON.stringify(this.defaultConfig));
        this.loadSettingsFromStorage();

        this.timerDuration = this.config.timerDuration;
        this.timerRemaining = this.timerDuration;
        this.timerInterval = null;
        this.isTimerPaused = false;

        this.teams = [
            {
                id: 0,
                name: "Equipe Adam Smith",
                leader: "Anna Clara",
                subtitle: "PLAYER 1",
                color: "#0058f8",
                avatar: "mario",
                badges: new Set(),
                categoryProgress: {},
                score: 0,
                lifelines: { bomba: this.config.bombsCount, chanceDupla: 0, duelo: 0 }
            },
            {
                id: 1,
                name: "Equipe Joseph Schumpeter",
                leader: "Bruno",
                subtitle: "PLAYER 2",
                color: "#00a800",
                avatar: "luigi",
                badges: new Set(),
                categoryProgress: {},
                score: 0,
                lifelines: { bomba: this.config.bombsCount, chanceDupla: 0, duelo: 0 }
            },
            {
                id: 2,
                name: "Equipe Celso Furtado",
                leader: "Natália & Arralys",
                subtitle: "PLAYER 3",
                color: "#f8b800",
                avatar: "yoshi",
                badges: new Set(),
                categoryProgress: {},
                score: 0,
                lifelines: { bomba: this.config.bombsCount, chanceDupla: 0, duelo: 0 }
            }
        ];

        this.usedQuestions = new Set();
        this.currentQuestion = null;
        this.activeLifelineActive = null;
        this.hasAnswered = false;
        this.selectedOptionIndex = null;
        this.chanceDuplaUsedForCurrent = false;

        this.initElements();
        this.initRoulette();
        this.bindEvents();
        this.updateUI();
    }

    initElements() {
        this.el = {
            // Header e HUD
            currentRoundDisplay: document.getElementById("current-round-display"),
            gameModeBadge: document.getElementById("game-mode-badge"),
            activeTeamBanner: document.getElementById("active-team-banner"),
            quickTeamsBtn: document.getElementById("btn-quick-teams"),
            openTeamsSetupBtn: document.getElementById("btn-open-teams-setup"),
            muteBtn: document.getElementById("btn-mute"),
            fullscreenBtn: document.getElementById("btn-fullscreen"),
            newGameBtn: document.getElementById("btn-new-game"),
            suddenDeathBtn: document.getElementById("btn-sudden-death"),

            // Roleta e palco principal
            spinBtn: document.getElementById("btn-spin-wheel"),
            spinHint: document.getElementById("spin-hint"),
            teamsContainer: document.getElementById("teams-grid"),

            // Modal de Pergunta
            questionModal: document.getElementById("question-modal"),
            modalCategoryBadge: document.getElementById("modal-category-badge"),
            modalQuestionText: document.getElementById("modal-question-text"),
            optionsContainer: document.getElementById("modal-options-grid"),
            timerSvgCircle: document.getElementById("timer-svg-circle"),
            timerText: document.getElementById("timer-text"),
            btnBomba: document.getElementById("btn-lifeline-bomba"),
            btnChanceDupla: document.getElementById("btn-lifeline-chance"),
            btnDuelo: document.getElementById("btn-lifeline-duelo"),
            pauseTimerBtn: document.getElementById("btn-pause-timer"),

            // Comentário Relâmpago e encerramento de turno
            commentaryCard: document.getElementById("commentary-card"),
            commentaryText: document.getElementById("commentary-text"),
            commentaryStatus: document.getElementById("commentary-status"),
            btnNextTurn: document.getElementById("btn-next-turn"),

            // Modal Coroa (Escolha livre de tema)
            crownModal: document.getElementById("crown-modal"),
            crownChoicesContainer: document.getElementById("crown-choices-grid"),

            // Modal Morte Súbita (Boss Battle / Desempate)
            suddenDeathModal: document.getElementById("sudden-death-modal"),
            sdQuestionText: document.getElementById("sd-question-text"),
            sdAnswerText: document.getElementById("sd-answer-text"),
            sdRationaleText: document.getElementById("sd-rationale-text"),
            btnRevealSd: document.getElementById("btn-reveal-sd"),
            btnNextSd: document.getElementById("btn-next-sd"),
            sdTeamsAward: document.getElementById("sd-teams-award"),
            btnCloseSd: document.getElementById("btn-close-sd"),

            // Modal de Vitória / Course Clear
            victoryModal: document.getElementById("victory-modal"),
            victoryTeamName: document.getElementById("victory-team-name"),
            victoryTeamBadges: document.getElementById("victory-team-badges"),
            victoryPodiumContainer: document.getElementById("victory-podium"),
            btnPlayAgain: document.getElementById("btn-play-again"),

            // Modal de Banco de Questões & Editor
            openQmBtn: document.getElementById("btn-open-questions-mgr"),
            qmModal: document.getElementById("questions-manager-modal"),
            closeQmBtn: document.getElementById("btn-close-qm"),
            toggleAddFormBtn: document.getElementById("btn-toggle-add-form"),
            cancelAddFormBtn: document.getElementById("btn-cancel-add-form"),
            formNewQ: document.getElementById("form-new-question"),
            resetQuestionsBtn: document.getElementById("btn-reset-questions"),
            exportQuestionsBtn: document.getElementById("btn-export-questions"),
            importQuestionsInput: document.getElementById("input-import-questions"),
            qmTabs: document.querySelectorAll(".qm-tab-btn"),
            qmQuestionsList: document.getElementById("qm-questions-list"),
            newQCategory: document.getElementById("new-q-category"),
            mcFields: document.getElementById("qm-multiple-choice-fields"),
            sdFields: document.getElementById("qm-sudden-death-fields"),
            lblCommentary: document.getElementById("lbl-q-commentary"),

            // Modal de Configurações Avançadas do Jogo (16-Bits)
            btnOpenSettings: document.getElementById("btn-open-settings"),
            settingsModal: document.getElementById("settings-modal"),
            btnCloseSettings: document.getElementById("btn-close-settings"),
            btnCancelSettings: document.getElementById("btn-cancel-settings"),
            btnSaveSettings: document.getElementById("btn-save-settings"),
            btnResetSettings: document.getElementById("btn-reset-settings"),
            settingsTabs: document.querySelectorAll(".settings-tab-btn"),
            modalPriorityBanner: document.getElementById("modal-priority-banner"),
            mainBrandTitle: document.getElementById("main-brand-title"),
            mainBrandSubtitle: document.getElementById("main-brand-subtitle"),

            // Modal de Configuração e Registro das Equipes
            setupModal: document.getElementById("setup-modal"),
            btnStartGame: document.getElementById("btn-start-game"),
            modeSelectRadios: document.getElementsByName("game-mode-select"),
            inputs: {
                team1: document.getElementById("input-team-1"),
                leader1: document.getElementById("input-leader-1"),
                avatar1: document.getElementById("input-avatar-1"),
                team2: document.getElementById("input-team-2"),
                leader2: document.getElementById("input-leader-2"),
                avatar2: document.getElementById("input-avatar-2"),
                team3: document.getElementById("input-team-3"),
                leader3: document.getElementById("input-leader-3"),
                avatar3: document.getElementById("input-avatar-3")
            }
        };

        this.qmActiveFilter = "all";
        this.loadCustomQuestionsFromStorage();
    }

    initRoulette() {
        this.wheel = new RouletteWheel("roulette-canvas", {
            onSpinComplete: (sector) => this.handleRouletteStop(sector),
            onSectorChange: (sector) => {},
            onSpinStateChange: (state) => this.handleSpinStateChange(state)
        });
        this.applyConfigVisuals();
    }

    handleSpinStateChange(state) {
        if (!state.isSpinning) {
            // Roleta parada
            this.el.spinBtn.disabled = false;
            this.el.spinBtn.className = "btn-spin-master";
            this.el.spinBtn.innerHTML = `<span class="spin-icon">🎲</span><span>GIRAR ROLETA</span>`;
            this.el.spinHint.innerHTML = `Arraste com o mouse para girar/apresentar, ou pressione <span class="spin-shortcut-kbd">ESPAÇO</span>!`;
        } else if (state.isSpinning && !state.isDecelerating) {
            // Girando em velocidade constante - botão vira PARADA IMPARCIAL
            this.el.spinBtn.disabled = false;
            this.el.spinBtn.className = "btn-spin-master btn-stop-active";
            this.el.spinBtn.innerHTML = `<span class="spin-icon">🛑</span><span>PARAR ROLETA</span>`;
            this.el.spinHint.innerHTML = `Girando! Clique em <strong>PARAR</strong> (ou aperte <span class="spin-shortcut-kbd">ESPAÇO</span>) para a escolha imparcial!`;
        } else if (state.isDecelerating) {
            // Desacelerando
            this.el.spinBtn.disabled = true;
            this.el.spinBtn.className = "btn-spin-master btn-stopping";
            this.el.spinBtn.innerHTML = `<span class="spin-icon">⌛</span><span>PARANDO...</span>`;
            this.el.spinHint.innerHTML = `Desacelerando... Veja onde vai parar!`;
        }
    }

    bindEvents() {
        // Inicializar dropdowns retrô de avatares com sprites do Mario
        this.initRetroAvatarSelects();

        // Giro / Parada da Roleta
        this.el.spinBtn.addEventListener("click", () => this.handleSpinButtonClick());

        // Botões de Registro de Equipes e Líderes
        if (this.el.quickTeamsBtn) {
            this.el.quickTeamsBtn.addEventListener("click", () => this.openSetupModal());
        }
        if (this.el.openTeamsSetupBtn) {
            this.el.openTeamsSetupBtn.addEventListener("click", () => this.openSetupModal());
        }
        this.el.newGameBtn.addEventListener("click", () => this.openSetupModal());

        // Banco de Questões & Editor
        if (this.el.openQmBtn) {
            this.el.openQmBtn.addEventListener("click", () => this.openQuestionsManager());
        }
        if (this.el.closeQmBtn) {
            this.el.closeQmBtn.addEventListener("click", () => this.closeQuestionsManager());
        }
        if (this.el.toggleAddFormBtn) {
            this.el.toggleAddFormBtn.addEventListener("click", () => this.toggleAddQuestionForm());
        }
        if (this.el.cancelAddFormBtn) {
            this.el.cancelAddFormBtn.addEventListener("click", () => this.hideAddQuestionForm());
        }
        if (this.el.formNewQ) {
            this.el.formNewQ.addEventListener("submit", (e) => this.handleSaveNewQuestion(e));
        }
        if (this.el.resetQuestionsBtn) {
            this.el.resetQuestionsBtn.addEventListener("click", () => this.handleResetQuestions());
        }
        if (this.el.exportQuestionsBtn) {
            this.el.exportQuestionsBtn.addEventListener("click", () => this.handleExportQuestions());
        }
        if (this.el.importQuestionsInput) {
            this.el.importQuestionsInput.addEventListener("change", (e) => this.handleImportQuestions(e));
        }
        if (this.el.newQCategory) {
            this.el.newQCategory.addEventListener("change", (e) => this.handleCategoryChange(e.target.value));
        }
        if (this.el.qmTabs) {
            this.el.qmTabs.forEach(tab => {
                tab.addEventListener("click", () => {
                    this.el.qmTabs.forEach(t => t.classList.remove("active"));
                    tab.classList.add("active");
                    this.qmActiveFilter = tab.getAttribute("data-category");
                    this.renderQuestionsManagerList();
                });
            });
        }

        // Configurações Avançadas do Jogo
        if (this.el.btnOpenSettings) {
            this.el.btnOpenSettings.addEventListener("click", () => this.openSettingsModal());
        }
        if (this.el.btnCloseSettings) {
            this.el.btnCloseSettings.addEventListener("click", () => this.closeSettingsModal());
        }
        if (this.el.btnCancelSettings) {
            this.el.btnCancelSettings.addEventListener("click", () => this.closeSettingsModal());
        }
        if (this.el.btnSaveSettings) {
            this.el.btnSaveSettings.addEventListener("click", () => this.handleSaveSettings());
        }
        if (this.el.btnResetSettings) {
            this.el.btnResetSettings.addEventListener("click", () => this.handleResetSettings());
        }
        if (this.el.settingsTabs) {
            this.el.settingsTabs.forEach(tab => {
                tab.addEventListener("click", () => {
                    this.el.settingsTabs.forEach(t => t.classList.remove("active"));
                    tab.classList.add("active");
                    const targetPane = tab.getAttribute("data-tab");
                    document.querySelectorAll(".settings-tab-pane").forEach(pane => {
                        pane.style.display = (pane.id === targetPane) ? "block" : "none";
                    });
                });
            });
        }

        // Salvar Equipes e Iniciar Jogo
        this.el.btnStartGame.addEventListener("click", () => this.startGameFromSetup());

        // Mute / Som Chiptune
        this.el.muteBtn.addEventListener("click", () => {
            const isMuted = sounds.toggleMute();
            this.el.muteBtn.innerHTML = isMuted ? "🔇 MUTE" : "🔊 SOM ON";
            this.el.muteBtn.classList.toggle("muted", isMuted);
        });

        // Modo Tela Cheia
        this.el.fullscreenBtn.addEventListener("click", () => this.toggleFullscreen());

        // Morte Súbita
        this.el.suddenDeathBtn.addEventListener("click", () => this.openSuddenDeath());
        this.el.btnCloseSd.addEventListener("click", () => this.closeSuddenDeath());
        this.el.btnRevealSd.addEventListener("click", () => this.revealSuddenDeathAnswer());
        this.el.btnNextSd.addEventListener("click", () => this.loadNextSuddenDeath());

        // Curingas
        this.el.btnBomba.addEventListener("click", () => this.useLifelineBomba());
        this.el.btnChanceDupla.addEventListener("click", () => this.useLifelineChanceDupla());
        this.el.btnDuelo.addEventListener("click", () => this.useLifelineDuelo());

        // Pausa no Temporizador
        this.el.pauseTimerBtn.addEventListener("click", () => this.togglePauseTimer());

        // Avançar Turno
        this.el.btnNextTurn.addEventListener("click", () => this.nextTurn());

        // Jogar Novamente
        this.el.btnPlayAgain.addEventListener("click", () => {
            this.el.victoryModal.classList.remove("active");
            this.openSetupModal();
        });

        // Atalhos Globais de Teclado
        window.addEventListener("keydown", (e) => this.handleKeyboardShortcuts(e));
    }

    handleSpinButtonClick() {
        if (!this.wheel.isSpinning) {
            this.wheel.startSpin();
        } else if (this.wheel.isSpinning && !this.wheel.isDecelerating) {
            this.wheel.requestStop();
        }
    }

    handleKeyboardShortcuts(e) {
        if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA" || e.target.tagName === "SELECT") return;

        const key = e.key.toUpperCase();

        if (e.code === "Space") {
            e.preventDefault();
            if (!this.el.questionModal.classList.contains("active") && !this.el.setupModal.classList.contains("active")) {
                if (!this.wheel.isSpinning) {
                    this.wheel.startSpin();
                } else if (this.wheel.isSpinning && !this.wheel.isDecelerating) {
                    this.wheel.requestStop();
                }
            } else if (this.el.commentaryCard.classList.contains("active")) {
                this.nextTurn();
            }
        } else if (["1", "2", "3", "4", "A", "B", "C", "D"].includes(key) && this.el.questionModal.classList.contains("active") && !this.hasAnswered) {
            let idx = -1;
            if (key === "1" || key === "A") idx = 0;
            if (key === "2" || key === "B") idx = 1;
            if (key === "3" || key === "C") idx = 2;
            if (key === "4" || key === "D") idx = 3;

            const optButtons = this.el.optionsContainer.querySelectorAll(".option-btn");
            if (optButtons[idx] && !optButtons[idx].disabled) {
                this.selectAnswer(idx);
            }
        } else if (key === "B" && this.el.questionModal.classList.contains("active") && !this.hasAnswered) {
            this.useLifelineBomba();
        } else if (key === "P" && this.el.questionModal.classList.contains("active")) {
            this.togglePauseTimer();
        } else if (key === "F") {
            this.toggleFullscreen();
        } else if (key === "M") {
            const isMuted = sounds.toggleMute();
            this.el.muteBtn.innerHTML = isMuted ? "🔇 MUTE" : "🔊 SOM ON";
        }
    }

    toggleFullscreen() {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch(err => {
                console.warn("Fullscreen falhou:", err);
            });
            this.el.fullscreenBtn.innerHTML = "🗗 EXIT FULL";
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
            this.el.fullscreenBtn.innerHTML = "🗖 FULLSCREEN";
        }
    }

    openSetupModal() {
        if (this.el.inputs.team1) {
            this.el.inputs.team1.value = this.teams[0].name;
            this.el.inputs.leader1.value = this.teams[0].leader;
            this.el.inputs.avatar1.value = this.teams[0].avatar;
            const wrap1 = document.querySelector('.retro-avatar-select[data-target="input-avatar-1"]');
            if (wrap1) this.updateRetroAvatarTrigger(wrap1, this.teams[0].avatar);

            this.el.inputs.team2.value = this.teams[1].name;
            this.el.inputs.leader2.value = this.teams[1].leader;
            this.el.inputs.avatar2.value = this.teams[1].avatar;
            const wrap2 = document.querySelector('.retro-avatar-select[data-target="input-avatar-2"]');
            if (wrap2) this.updateRetroAvatarTrigger(wrap2, this.teams[1].avatar);

            this.el.inputs.team3.value = this.teams[2].name;
            this.el.inputs.leader3.value = this.teams[2].leader;
            this.el.inputs.avatar3.value = this.teams[2].avatar;
            const wrap3 = document.querySelector('.retro-avatar-select[data-target="input-avatar-3"]');
            if (wrap3) this.updateRetroAvatarTrigger(wrap3, this.teams[2].avatar);
        }

        this.el.setupModal.classList.add("active");
    }

    initRetroAvatarSelects() {
        // Preencher ícones nas opções dos dropdowns
        document.querySelectorAll('.retro-avatar-option').forEach(opt => {
            const val = opt.getAttribute('data-value');
            const iconEl = opt.querySelector('.retro-opt-icon');
            if (iconEl) {
                iconEl.innerHTML = getAvatarSprite(val, 20);
            }
        });

        // Configurar triggers para abrir/fechar e seleção
        document.querySelectorAll('.retro-avatar-select').forEach(wrap => {
            const trigger = wrap.querySelector('.retro-avatar-trigger');
            const dropdown = wrap.querySelector('.retro-avatar-dropdown');
            const input = wrap.querySelector('input[type="hidden"]');

            if (trigger && dropdown) {
                trigger.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const isOpen = dropdown.classList.contains('open');
                    document.querySelectorAll('.retro-avatar-dropdown.open').forEach(d => d.classList.remove('open'));
                    if (!isOpen) {
                        dropdown.classList.add('open');
                    }
                });

                dropdown.querySelectorAll('.retro-avatar-option').forEach(opt => {
                    opt.addEventListener('click', (e) => {
                        e.stopPropagation();
                        const val = opt.getAttribute('data-value');
                        if (input) input.value = val;
                        this.updateRetroAvatarTrigger(wrap, val);
                        dropdown.classList.remove('open');
                    });
                });
            }
        });

        // Fechar dropdowns ao clicar fora
        document.addEventListener('click', () => {
            document.querySelectorAll('.retro-avatar-dropdown.open').forEach(d => d.classList.remove('open'));
        });

        // Inicializar display com valores atuais
        const wrap1 = document.querySelector('.retro-avatar-select[data-target="input-avatar-1"]');
        if (wrap1) this.updateRetroAvatarTrigger(wrap1, this.teams[0].avatar);
        const wrap2 = document.querySelector('.retro-avatar-select[data-target="input-avatar-2"]');
        if (wrap2) this.updateRetroAvatarTrigger(wrap2, this.teams[1].avatar);
        const wrap3 = document.querySelector('.retro-avatar-select[data-target="input-avatar-3"]');
        if (wrap3) this.updateRetroAvatarTrigger(wrap3, this.teams[2].avatar);
    }

    updateRetroAvatarTrigger(wrap, avatarKey) {
        const norm = normalizeAvatarKey(avatarKey);
        const item = MARIO_AVATARS[norm] || MARIO_AVATARS.mario;
        const iconEl = wrap.querySelector('.avatar-selected-icon');
        const nameEl = wrap.querySelector('.avatar-selected-name');
        const input = wrap.querySelector('input[type="hidden"]');

        if (iconEl) iconEl.innerHTML = getAvatarSprite(norm, 20);
        if (nameEl) nameEl.textContent = item.name;
        if (input) input.value = norm;

        wrap.querySelectorAll('.retro-avatar-option').forEach(opt => {
            if (opt.getAttribute('data-value') === norm) {
                opt.classList.add('selected');
            } else {
                opt.classList.remove('selected');
            }
        });
    }

    getAvatarHtml(avatar, size = 20) {
        return getAvatarSprite(avatar, size);
    }

    startGameFromSetup() {
        if (this.el.inputs.team1) {
            this.teams[0].name = this.el.inputs.team1.value.trim() || "Equipe 1";
            this.teams[0].leader = this.el.inputs.leader1.value.trim() || "Líder 1";
            this.teams[0].avatar = this.el.inputs.avatar1.value;

            this.teams[1].name = this.el.inputs.team2.value.trim() || "Equipe 2";
            this.teams[1].leader = this.el.inputs.leader2.value.trim() || "Líder 2";
            this.teams[1].avatar = this.el.inputs.avatar2.value;

            this.teams[2].name = this.el.inputs.team3.value.trim() || "Equipe 3";
            this.teams[2].leader = this.el.inputs.leader3.value.trim() || "Líder 3";
            this.teams[2].avatar = this.el.inputs.avatar3.value;
        }

        let selectedMode = "EXPRESS";
        for (const radio of this.el.modeSelectRadios) {
            if (radio.checked) {
                selectedMode = radio.value;
                break;
            }
        }
        this.mode = selectedMode;

        if (this.mode === "EXPRESS") {
            this.maxRounds = 3;
            this.timerDuration = 20;
            this.el.gameModeBadge.innerHTML = "⚡ TIME ATTACK (15 MIN)";
            this.el.gameModeBadge.className = "badge-mode mode-express";
        } else {
            this.maxRounds = 6;
            this.timerDuration = 30;
            this.el.gameModeBadge.innerHTML = "🏆 WORLD TOUR (30 MIN)";
            this.el.gameModeBadge.className = "badge-mode mode-classic";
        }

        this.currentRound = 1;
        this.currentTeamIndex = 0;
        this.usedQuestions.clear();

        this.teams.forEach(t => {
            t.badges.clear();
            t.score = 0;
            if (this.mode === "EXPRESS") {
                t.lifelines = { bomba: 1, chanceDupla: 0, duelo: 0 };
            } else {
                t.lifelines = { bomba: 2, chanceDupla: 1, duelo: 1 };
            }
        });

        this.el.setupModal.classList.remove("active");
        this.updateUI();
        sounds.playWheelStop();
    }

    handleRouletteStop(sector) {
        this.el.spinHint.innerText = `SORTEADO: ${sector.name.toUpperCase()}!`;

        if (sector.id === "coroa") {
            this.handleCrownSector();
        } else {
            this.openQuestion(sector.id);
        }
    }

    handleCrownSector() {
        const activeTeam = this.teams[this.currentTeamIndex];
        sounds.play1Up();

        this.el.crownChoicesContainer.innerHTML = "";
        Object.values(CATEGORIES).forEach(cat => {
            const hasBadge = activeTeam.badges.has(cat.id);
            const choiceCard = document.createElement("button");
            choiceCard.className = `crown-choice-btn ${hasBadge ? 'already-owned' : 'needed'}`;
            choiceCard.innerHTML = `
                <span class="cat-icon">${cat.badgeIcon}</span>
                <span class="cat-title">${cat.name}</span>
                <span class="cat-sub">${hasBadge ? '✓ ITEM JÁ CONQUISTADO' : '⭐ ITEM FALTANTE!'}</span>
            `;
            choiceCard.addEventListener("click", () => {
                this.el.crownModal.classList.remove("active");
                this.openQuestion(cat.id, true);
            });
            this.el.crownChoicesContainer.appendChild(choiceCard);
        });

        this.el.crownModal.classList.add("active");
    }

    openQuestion(categoryId, isCrownChoice = false) {
        const category = CATEGORIES[categoryId];
        const activeTeam = this.teams[this.currentTeamIndex];

        let selectedQ = null;
        let isPriority = false;

        // 1. Verifica se existe pergunta prioritária solicitada pelo professor
        if (this.config.priorityQuestionId && !this.usedQuestions.has(this.config.priorityQuestionId)) {
            const prioCandidate = (QUESTIONS_BANK[categoryId] || []).find(q => q.id === this.config.priorityQuestionId);
            if (prioCandidate) {
                selectedQ = prioCandidate;
                isPriority = true;
            }
        }

        if (!selectedQ) {
            const availableQuestions = QUESTIONS_BANK[categoryId].filter(q => !this.usedQuestions.has(q.id));
            if (availableQuestions.length > 0) {
                const randIdx = Math.floor(Math.random() * availableQuestions.length);
                selectedQ = availableQuestions[randIdx];
            } else {
                const allCatQuestions = QUESTIONS_BANK[categoryId];
                selectedQ = allCatQuestions[Math.floor(Math.random() * allCatQuestions.length)];
            }
        }

        this.usedQuestions.add(selectedQ.id);
        this.currentQuestion = selectedQ;
        this.hasAnswered = false;
        this.chanceDuplaUsedForCurrent = false;

        this.el.modalCategoryBadge.style.backgroundColor = category.color;
        this.el.modalCategoryBadge.innerHTML = `
            ${category.badgeIcon} ${category.name.toUpperCase()} 
            ${isCrownChoice ? '• 👑 ESCOLHA LIVRE DA COROA' : ''} 
            • ${activeTeam.name} (Líder: ${activeTeam.leader})
        `;
        this.el.modalQuestionText.innerText = selectedQ.question;

        this.el.optionsContainer.innerHTML = "";
        const letters = ["A", "B", "C", "D"];

        // 2. Ajusta quantidade de alternativas visíveis (optionsCount: 2, 3 ou 4)
        const optCount = parseInt(this.config.optionsCount || 4, 10);
        let optionsToRender = [];
        const correctIdx = selectedQ.correctIndex;

        if (optCount >= 4 || selectedQ.options.length <= optCount) {
            selectedQ.options.forEach((optText, index) => {
                optionsToRender.push({ text: optText, originalIndex: index });
            });
        } else {
            // Mantém obrigatoriamente o gabarito correto e seleciona (optCount - 1) erradas
            const wrongIndices = [];
            selectedQ.options.forEach((_, idx) => {
                if (idx !== correctIdx) wrongIndices.push(idx);
            });
            wrongIndices.sort(() => Math.random() - 0.5);
            const keptWrong = wrongIndices.slice(0, optCount - 1);
            const keptIndices = [correctIdx, ...keptWrong].sort((a, b) => a - b);

            keptIndices.forEach(idx => {
                optionsToRender.push({ text: selectedQ.options[idx], originalIndex: idx });
            });
        }

        optionsToRender.forEach((item, displayIdx) => {
            const btn = document.createElement("button");
            btn.className = "option-btn";
            btn.setAttribute("data-index", item.originalIndex);
            btn.innerHTML = `
                <span class="opt-letter">${letters[displayIdx]}</span>
                <span class="opt-text">${item.text}</span>
            `;
            btn.addEventListener("click", () => this.selectAnswer(item.originalIndex, btn));
            this.el.optionsContainer.appendChild(btn);
        });

        this.el.commentaryCard.classList.remove("active");
        this.el.commentaryCard.className = "commentary-card";

        this.updateLifelineButtons();
        this.el.questionModal.classList.add("active");
        this.startTimer();
    }

    updateLifelineButtons() {
        const team = this.teams[this.currentTeamIndex];

        this.el.btnBomba.innerHTML = `💣 BOB-OMB (50:50) [${team.lifelines.bomba}]`;
        this.el.btnBomba.disabled = team.lifelines.bomba <= 0 || this.hasAnswered;

        if (this.mode === "CLASSIC") {
            this.el.btnChanceDupla.style.display = "inline-flex";
            this.el.btnChanceDupla.innerHTML = `🍄 1-UP (CHANCE) [${team.lifelines.chanceDupla}]`;
            this.el.btnChanceDupla.disabled = team.lifelines.chanceDupla <= 0 || this.hasAnswered;

            this.el.btnDuelo.style.display = "inline-flex";
            this.el.btnDuelo.innerHTML = `⭐ DUELO [${team.lifelines.duelo}]`;
            this.el.btnDuelo.disabled = team.lifelines.duelo <= 0 || this.hasAnswered;
        } else {
            this.el.btnChanceDupla.style.display = "none";
            this.el.btnDuelo.style.display = "none";
        }
    }

    useLifelineBomba() {
        const team = this.teams[this.currentTeamIndex];
        if (team.lifelines.bomba <= 0 || this.hasAnswered) return;

        // Seleciona botões de alternativas incorretas que ainda estão visíveis e não eliminadas
        const wrongBtns = Array.from(this.el.optionsContainer.querySelectorAll(".option-btn:not(.eliminated)"))
            .filter(btn => parseInt(btn.getAttribute("data-index"), 10) !== this.currentQuestion.correctIndex);

        if (wrongBtns.length === 0) return;

        team.lifelines.bomba--;
        sounds.playLifeline();

        // Embaralha e elimina até 2 alternativas erradas (ou 1 se restar apenas 1)
        wrongBtns.sort(() => Math.random() - 0.5);
        const toEliminate = wrongBtns.slice(0, Math.min(2, wrongBtns.length));

        toEliminate.forEach(btn => {
            btn.classList.add("eliminated");
            btn.disabled = true;
        });

        this.updateLifelineButtons();
    }

    useLifelineChanceDupla() {
        const team = this.teams[this.currentTeamIndex];
        if (team.lifelines.chanceDupla <= 0 || this.hasAnswered) return;

        team.lifelines.chanceDupla--;
        sounds.play1Up();
        this.activeLifelineActive = "chanceDupla";
        this.el.btnChanceDupla.classList.add("active-used");
        this.updateLifelineButtons();
    }

    useLifelineDuelo() {
        const team = this.teams[this.currentTeamIndex];
        if (team.lifelines.duelo <= 0 || this.hasAnswered) return;

        team.lifelines.duelo--;
        sounds.play1Up();
        alert(`⭐ SUPER STAR DUEL!\nA ${team.name} (Líder: ${team.leader}) desafia uma bancada rival para responder!`);
        this.updateLifelineButtons();
    }

    startTimer() {
        this.clearIntervalTimer();
        if (this.timerDuration <= 0) {
            this.el.timerText.innerText = "∞";
            this.el.timerSvgCircle.style.strokeDashoffset = 0;
            this.el.timerSvgCircle.classList.remove("danger");
            this.el.pauseTimerBtn.style.display = "none";
            return;
        }

        this.el.pauseTimerBtn.style.display = "inline-flex";
        this.timerRemaining = this.timerDuration;
        this.isTimerPaused = false;
        this.el.pauseTimerBtn.innerHTML = "⏸ PAUSE";
        this.updateTimerVisual();

        this.timerInterval = setInterval(() => {
            if (!this.isTimerPaused) {
                this.timerRemaining--;
                this.updateTimerVisual();

                if (this.timerRemaining <= 5 && this.timerRemaining > 0) {
                    sounds.playTimerWarning();
                }

                if (this.timerRemaining <= 0) {
                    this.clearIntervalTimer();
                    this.handleTimeExpired();
                }
            }
        }, 1000);
    }

    togglePauseTimer() {
        this.isTimerPaused = !this.isTimerPaused;
        this.el.pauseTimerBtn.innerHTML = this.isTimerPaused ? "▶ RESUME" : "⏸ PAUSE";
    }

    clearIntervalTimer() {
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
            this.timerInterval = null;
        }
    }

    updateTimerVisual() {
        if (this.timerDuration <= 0) {
            this.el.timerText.innerText = "∞";
            this.el.timerSvgCircle.style.strokeDashoffset = 0;
            this.el.timerSvgCircle.classList.remove("danger");
            return;
        }

        this.el.timerText.innerText = this.timerRemaining;

        const circumference = 2 * Math.PI * 40;
        const offset = circumference - (this.timerRemaining / this.timerDuration) * circumference;
        this.el.timerSvgCircle.style.strokeDashoffset = offset;

        if (this.timerRemaining <= 5) {
            this.el.timerSvgCircle.classList.add("danger");
        } else {
            this.el.timerSvgCircle.classList.remove("danger");
        }
    }

    handleTimeExpired() {
        sounds.playWrong();
        this.hasAnswered = true;
        this.disableAllOptions();

        const correctBtn = this.el.optionsContainer.querySelector(`.option-btn[data-index="${this.currentQuestion.correctIndex}"]`);
        if (correctBtn) {
            correctBtn.classList.add("correct");
        }

        this.showCommentary(false, "⏰ TIME UP! O tempo esgotou sem resposta da bancada.");
    }

    selectAnswer(originalIndex, clickedBtn) {
        if (this.hasAnswered) return;

        const isCorrect = (originalIndex === this.currentQuestion.correctIndex);
        const selectedBtn = clickedBtn || this.el.optionsContainer.querySelector(`.option-btn[data-index="${originalIndex}"]`);
        const correctBtn = this.el.optionsContainer.querySelector(`.option-btn[data-index="${this.currentQuestion.correctIndex}"]`);

        if (!isCorrect && this.activeLifelineActive === "chanceDupla" && !this.chanceDuplaUsedForCurrent) {
            this.chanceDuplaUsedForCurrent = true;
            this.activeLifelineActive = null;
            sounds.playWrong();
            if (selectedBtn) {
                selectedBtn.classList.add("wrong");
                selectedBtn.disabled = true;
            }
            alert(`🍄 1-UP COGUMELO ATIVADO!\nA ${this.teams[this.currentTeamIndex].name} tem direito a uma segunda tentativa imediata!`);
            return;
        }

        this.clearIntervalTimer();
        this.hasAnswered = true;
        this.disableAllOptions();

        const activeTeam = this.teams[this.currentTeamIndex];

        if (isCorrect) {
            sounds.playCorrect();
            if (selectedBtn) selectedBtn.classList.add("correct");
            activeTeam.score += 100;

            if (!activeTeam.categoryProgress) {
                activeTeam.categoryProgress = {};
            }
            const cat = this.currentQuestion.category;
            activeTeam.categoryProgress[cat] = (activeTeam.categoryProgress[cat] || 0) + 1;

            const needed = parseInt(this.config.correctsPerBadge || 1, 10);
            if (activeTeam.categoryProgress[cat] >= needed) {
                activeTeam.badges.add(cat);
                this.showCommentary(true, `✅ RESPOSTA CORRETA! A ${activeTeam.name} atingiu a meta (${needed}/${needed}) e conquistou o selo de ${CATEGORIES[cat].name}! 👑`);
            } else {
                const current = activeTeam.categoryProgress[cat];
                this.showCommentary(true, `✅ RESPOSTA CORRETA! Progresso: ${current}/${needed} acertos para conquistar o selo de ${CATEGORIES[cat].name}! ⭐`);
            }
        } else {
            sounds.playWrong();
            if (selectedBtn) selectedBtn.classList.add("wrong");
            if (correctBtn) {
                correctBtn.classList.add("correct");
            }
            this.showCommentary(false, `❌ RESPOSTA INCORRETA! Vez da próxima bancada.`);
        }

        this.updateUI();
    }

    disableAllOptions() {
        const optionButtons = this.el.optionsContainer.querySelectorAll(".option-btn");
        optionButtons.forEach(btn => btn.disabled = true);
        this.el.btnBomba.disabled = true;
        this.el.btnChanceDupla.disabled = true;
        this.el.btnDuelo.disabled = true;
    }

    showCommentary(isCorrect, statusTitle) {
        this.el.commentaryStatus.innerText = statusTitle;
        this.el.commentaryText.innerText = this.currentQuestion.commentary;
        this.el.commentaryCard.classList.add("active");
        this.el.commentaryCard.classList.add(isCorrect ? "card-correct" : "card-wrong");
    }

    nextTurn() {
        this.el.questionModal.classList.remove("active");
        this.clearIntervalTimer();

        const teamWithAllBadges = this.teams.find(t => t.badges.size === 4);
        if (teamWithAllBadges) {
            this.triggerVictory(teamWithAllBadges, "CONQUISTOU TODOS OS 4 ITENS TEMÁTICOS!");
            return;
        }

        this.currentTeamIndex = (this.currentTeamIndex + 1) % this.teams.length;

        if (this.currentTeamIndex === 0) {
            this.currentRound++;

            if (this.currentRound > this.maxRounds) {
                this.handleGameEndByRounds();
                return;
            }
        }

        this.updateUI();
    }

    handleGameEndByRounds() {
        const sortedTeams = [...this.teams].sort((a, b) => {
            if (b.badges.size !== a.badges.size) {
                return b.badges.size - a.badges.size;
            }
            return b.score - a.score;
        });

        const topBadges = sortedTeams[0].badges.size;
        const topScore = sortedTeams[0].score;
        const tiedWinners = sortedTeams.filter(t => t.badges.size === topBadges && t.score === topScore);

        if (tiedWinners.length > 1) {
            alert(`⚠️ EMPATE NO 1º LUGAR entre ${tiedWinners.map(t => `${t.name} (Líder: ${t.leader})`).join(" e ")}!\nBOSS BATTLE: MORTE SÚBITA!`);
            this.openSuddenDeath(tiedWinners);
        } else {
            this.triggerVictory(sortedTeams[0], "CAMPEÃO PELO MAIOR NÚMERO DE ITENS!");
        }
    }

    triggerVictory(winningTeam, victoryReason) {
        sounds.playVictory();
        this.el.victoryTeamName.innerText = `🏆 ${winningTeam.name}`;
        this.el.victoryTeamBadges.innerHTML = `Líder / Porta-Voz: <strong>${winningTeam.leader}</strong><br>Motivo: <strong>${victoryReason}</strong><br>Itens Conquistados: ${winningTeam.badges.size}/4 | Moedas: ${winningTeam.score} pts`;

        const sortedTeams = [...this.teams].sort((a, b) => {
            if (b.badges.size !== a.badges.size) return b.badges.size - a.badges.size;
            return b.score - a.score;
        });

        this.el.victoryPodiumContainer.innerHTML = "";
        const medals = ["🥇 1ST PLACE", "🥈 2ND PLACE", "🥉 3RD PLACE"];

        sortedTeams.forEach((team, idx) => {
            const card = document.createElement("div");
            card.className = `podium-card rank-${idx + 1}`;
            card.innerHTML = `
                <div class="podium-rank">${medals[idx]}</div>
                <div class="podium-avatar">${this.getAvatarHtml(team.avatar, 36)}</div>
                <div class="podium-name">${team.name}</div>
                <div class="podium-leader">${getLeaderCrownSvg(12)} <span>LÍDER: <strong>${team.leader}</strong></span></div>
                <div class="podium-stats">
                    <span>🎖️ ${team.badges.size} ITENS</span>
                    <span>🟡 ${team.score} PTS</span>
                </div>
            `;
            this.el.victoryPodiumContainer.appendChild(card);
        });

        this.el.victoryModal.classList.add("active");
    }

    // Morte Súbita (Boss Battle)
    openSuddenDeath(participatingTeams = null) {
        sounds.play1Up();
        this.sdIndex = 0;
        this.sdParticipatingTeams = participatingTeams || this.teams;

        this.renderSuddenDeathCard();
        this.el.suddenDeathModal.classList.add("active");
    }

    renderSuddenDeathCard() {
        const q = SUDDEN_DEATH_QUESTIONS[this.sdIndex % SUDDEN_DEATH_QUESTIONS.length];
        this.el.sdQuestionText.innerText = q.question;
        this.el.sdAnswerText.innerText = q.answer;
        this.el.sdRationaleText.innerText = q.rationale;

        document.getElementById("sd-answer-panel").classList.remove("revealed");
        this.el.btnRevealSd.style.display = "inline-block";

        this.el.sdTeamsAward.innerHTML = "<strong>CONCEDER VITÓRIA NA MORTE SÚBITA PARA:</strong><br>";
        this.sdParticipatingTeams.forEach(t => {
            const btn = document.createElement("button");
            btn.className = "btn-sd-award";
            btn.style.borderColor = t.color;
            btn.innerHTML = `${this.getAvatarHtml(t.avatar, 18)} ${t.name} (${getLeaderCrownSvg(11)} LÍDER: ${t.leader})`;
            btn.addEventListener("click", () => {
                this.closeSuddenDeath();
                this.triggerVictory(t, "CAMPEÃO NA MORTE SÚBITA!");
            });
            this.el.sdTeamsAward.appendChild(btn);
        });
    }

    revealSuddenDeathAnswer() {
        sounds.playCorrect();
        document.getElementById("sd-answer-panel").classList.add("revealed");
        this.el.btnRevealSd.style.display = "none";
    }

    loadNextSuddenDeath() {
        this.sdIndex++;
        this.renderSuddenDeathCard();
    }

    closeSuddenDeath() {
        this.el.suddenDeathModal.classList.remove("active");
    }

    updateUI() {
        this.el.currentRoundDisplay.innerText = `WORLD ${Math.min(this.currentRound, this.maxRounds)}-${this.maxRounds}`;

        const activeTeam = this.teams[this.currentTeamIndex];
        this.el.activeTeamBanner.innerHTML = `
            <span class="team-dot" style="background-color: ${activeTeam.color}"></span>
            ${activeTeam.subtitle}: <strong>${activeTeam.name}</strong> • 👑 Líder: <strong>${activeTeam.leader}</strong>
        `;

        this.el.teamsContainer.innerHTML = "";
        this.teams.forEach((team, idx) => {
            const isCurrent = (idx === this.currentTeamIndex);
            const teamCard = document.createElement("div");
            teamCard.className = `team-card ${isCurrent ? 'active-turn' : ''}`;
            teamCard.style.setProperty("--team-accent", team.color);

            let badgesHtml = "";
            const needed = parseInt(this.config.correctsPerBadge || 1, 10);
            Object.values(CATEGORIES).forEach(cat => {
                const has = team.badges.has(cat.id);
                const count = (team.categoryProgress && team.categoryProgress[cat.id]) || 0;
                const progressText = (needed > 1 && !has) ? ` (${count}/${needed})` : '';
                badgesHtml += `
                    <div class="badge-item ${has ? 'earned' : 'locked'}" title="${cat.name}${progressText}">
                        <span class="badge-icon">${cat.badgeIcon}</span>
                        <span class="badge-label">${cat.name.split(' ')[0]}${progressText}</span>
                    </div>
                `;
            });

            teamCard.innerHTML = `
                <div class="team-header">
                    <span class="team-avatar">${this.getAvatarHtml(team.avatar, 24)}</span>
                    <div class="team-info">
                        <div class="team-name">${team.name}</div>
                        <div class="team-leader-label">${getLeaderCrownSvg(12)} <span>LÍDER: <strong>${team.leader}</strong></span></div>
                    </div>
                    <div class="team-score">🟡 ${team.score}</div>
                </div>
                <div class="team-badges-rack">
                    ${badgesHtml}
                </div>
                <div class="team-lifelines-rack">
                    <span class="lifeline-badge" title="Bob-omb (50:50)">💣 ${team.lifelines.bomba}</span>
                    ${this.mode === "CLASSIC" ? `<span class="lifeline-badge" title="1-UP Mushroom">🍄 ${team.lifelines.chanceDupla}</span>` : ''}
                    ${this.mode === "CLASSIC" ? `<span class="lifeline-badge" title="Super Star Duelo">⭐ ${team.lifelines.duelo}</span>` : ''}
                </div>
            `;
            this.el.teamsContainer.appendChild(teamCard);
        });
    }

    // ==========================================
    // CONFIGURAÇÕES AVANÇADAS DO JOGO (16-BITS)
    // ==========================================
    loadSettingsFromStorage() {
        try {
            const raw = localStorage.getItem("seminar_game_config");
            if (raw) {
                const parsed = JSON.parse(raw);
                this.config = Object.assign({}, this.defaultConfig, parsed);
                if (parsed.themes) {
                    this.config.themes = Object.assign({}, this.defaultConfig.themes, parsed.themes);
                }
            } else {
                this.config = JSON.parse(JSON.stringify(this.defaultConfig));
            }
        } catch (e) {
            console.warn("Erro ao carregar configurações do jogo:", e);
            this.config = JSON.parse(JSON.stringify(this.defaultConfig));
        }
    }

    applyConfigVisuals() {
        // 1. Título e Subtítulo no Cabeçalho
        if (this.el && this.el.mainBrandTitle && this.config.brandTitle) {
            this.el.mainBrandTitle.innerText = this.config.brandTitle;
        }
        if (this.el && this.el.mainBrandSubtitle && this.config.brandSubtitle) {
            this.el.mainBrandSubtitle.innerText = this.config.brandSubtitle;
        }

        // 2. Nomes das Categorias Doutrinárias
        if (typeof updateCategoryNames === "function" && this.config.themes) {
            updateCategoryNames(this.config.themes);
        }

        // 3. Fatias e Textos da Roleta
        if (this.wheel && typeof this.wheel.updateSectors === "function" && this.config.themes) {
            this.wheel.updateSectors(this.config.themes);
        }
    }

    openSettingsModal() {
        sounds.play1Up();

        // 1. Preenche Aba 1: Regras e Tempos
        const timerInput = document.getElementById("cfg-timer-duration");
        const optionsInput = document.getElementById("cfg-options-count");
        const bombsInput = document.getElementById("cfg-bombs-count");
        const correctsInput = document.getElementById("cfg-corrects-per-badge");

        if (timerInput) timerInput.value = this.config.timerDuration ?? 20;
        if (optionsInput) optionsInput.value = this.config.optionsCount ?? 4;
        if (bombsInput) bombsInput.value = this.config.bombsCount ?? 1;
        if (correctsInput) correctsInput.value = this.config.correctsPerBadge ?? 1;

        // 2. Preenche Aba 2: Pergunta Prioritária / do Professor
        const prioSelect = document.getElementById("cfg-priority-question");
        if (prioSelect) {
            prioSelect.innerHTML = `<option value="">-- NENHUMA (Sorteio Aleatório Padrão) --</option>`;
            
            Object.keys(QUESTIONS_BANK).forEach(catId => {
                const cat = CATEGORIES[catId];
                const optGroup = document.createElement("optgroup");
                optGroup.label = `${cat ? cat.badgeIcon : ''} ${cat ? cat.name : catId}`;

                QUESTIONS_BANK[catId].forEach((q, idx) => {
                    const opt = document.createElement("option");
                    opt.value = q.id;
                    const truncatedQ = q.question.length > 80 ? q.question.substring(0, 77) + "..." : q.question;
                    opt.innerText = `[${catId.toUpperCase().substring(0, 4)}-#${idx + 1}] ${truncatedQ}`;
                    if (q.id === this.config.priorityQuestionId) {
                        opt.selected = true;
                    }
                    optGroup.appendChild(opt);
                });
                prioSelect.appendChild(optGroup);
            });
        }

        // 3. Preenche Aba 3: Nomes e Textos Visíveis
        const brandTitleInput = document.getElementById("cfg-brand-title");
        const brandSubInput = document.getElementById("cfg-brand-subtitle");
        if (brandTitleInput) brandTitleInput.value = this.config.brandTitle || "";
        if (brandSubInput) brandSubInput.value = this.config.brandSubtitle || "";

        const th = this.config.themes || this.defaultConfig.themes;
        if (th.livre_concorrencia) {
            const elN = document.getElementById("cfg-theme-lc-name");
            const el1 = document.getElementById("cfg-theme-lc-l1");
            const el2 = document.getElementById("cfg-theme-lc-l2");
            if (elN) elN.value = th.livre_concorrencia.name || "";
            if (el1) el1.value = th.livre_concorrencia.line1 || "";
            if (el2) el2.value = th.livre_concorrencia.line2 || "";
        }
        if (th.tratamento_pme) {
            const elN = document.getElementById("cfg-theme-pme-name");
            const el1 = document.getElementById("cfg-theme-pme-l1");
            const el2 = document.getElementById("cfg-theme-pme-l2");
            if (elN) elN.value = th.tratamento_pme.name || "";
            if (el1) el1.value = th.tratamento_pme.line1 || "";
            if (el2) el2.value = th.tratamento_pme.line2 || "";
        }
        if (th.modelo_china) {
            const elN = document.getElementById("cfg-theme-ch-name");
            const el1 = document.getElementById("cfg-theme-ch-l1");
            const el2 = document.getElementById("cfg-theme-ch-l2");
            if (elN) elN.value = th.modelo_china.name || "";
            if (el1) el1.value = th.modelo_china.line1 || "";
            if (el2) el2.value = th.modelo_china.line2 || "";
        }
        if (th.ordem_alemanha) {
            const elN = document.getElementById("cfg-theme-de-name");
            const el1 = document.getElementById("cfg-theme-de-l1");
            const el2 = document.getElementById("cfg-theme-de-l2");
            if (elN) elN.value = th.ordem_alemanha.name || "";
            if (el1) el1.value = th.ordem_alemanha.line1 || "";
            if (el2) el2.value = th.ordem_alemanha.line2 || "";
        }

        // Ativa primeira aba por padrão
        if (this.el.settingsTabs) {
            this.el.settingsTabs.forEach((tab, i) => {
                tab.classList.toggle("active", i === 0);
            });
        }
        document.querySelectorAll(".settings-tab-pane").forEach((pane, i) => {
            pane.style.display = (i === 0) ? "block" : "none";
        });

        if (this.el.settingsModal) {
            this.el.settingsModal.classList.add("active");
        }
    }

    closeSettingsModal() {
        if (this.el.settingsModal) {
            this.el.settingsModal.classList.remove("active");
        }
    }

    handleSaveSettings() {
        const timerDuration = parseInt(document.getElementById("cfg-timer-duration").value, 10);
        const optionsCount = parseInt(document.getElementById("cfg-options-count").value, 10);
        const bombsCount = parseInt(document.getElementById("cfg-bombs-count").value, 10);
        const correctsPerBadge = parseInt(document.getElementById("cfg-corrects-per-badge").value, 10);
        const priorityQuestionId = document.getElementById("cfg-priority-question").value;

        const brandTitle = document.getElementById("cfg-brand-title").value.trim() || this.defaultConfig.brandTitle;
        const brandSubtitle = document.getElementById("cfg-brand-subtitle").value.trim() || this.defaultConfig.brandSubtitle;

        const themes = {
            livre_concorrencia: {
                name: document.getElementById("cfg-theme-lc-name").value.trim() || "Livre Concorrência",
                line1: (document.getElementById("cfg-theme-lc-l1").value.trim() || "LIVRE").toUpperCase(),
                line2: (document.getElementById("cfg-theme-lc-l2").value.trim() || "CONCORRÊNCIA").toUpperCase()
            },
            tratamento_pme: {
                name: document.getElementById("cfg-theme-pme-name").value.trim() || "Tratamento PMEs",
                line1: (document.getElementById("cfg-theme-pme-l1").value.trim() || "TRATAMENTO").toUpperCase(),
                line2: (document.getElementById("cfg-theme-pme-l2").value.trim() || "PMEs").toUpperCase()
            },
            modelo_china: {
                name: document.getElementById("cfg-theme-ch-name").value.trim() || "Modelo China",
                line1: (document.getElementById("cfg-theme-ch-l1").value.trim() || "MODELO DA").toUpperCase(),
                line2: (document.getElementById("cfg-theme-ch-l2").value.trim() || "CHINA").toUpperCase()
            },
            ordem_alemanha: {
                name: document.getElementById("cfg-theme-de-name").value.trim() || "Ordem Alemanha",
                line1: (document.getElementById("cfg-theme-de-l1").value.trim() || "ORDEM NA").toUpperCase(),
                line2: (document.getElementById("cfg-theme-de-l2").value.trim() || "ALEMANHA").toUpperCase()
            },
            coroa: {
                name: "CASA COROA",
                line1: "CASA",
                line2: "COROA"
            }
        };

        this.config = {
            timerDuration: isNaN(timerDuration) ? 20 : Math.max(0, timerDuration),
            optionsCount: optionsCount || 4,
            bombsCount: isNaN(bombsCount) ? 1 : Math.max(0, bombsCount),
            correctsPerBadge: correctsPerBadge || 1,
            priorityQuestionId: priorityQuestionId,
            brandTitle: brandTitle,
            brandSubtitle: brandSubtitle,
            themes: themes
        };

        localStorage.setItem("seminar_game_config", JSON.stringify(this.config));

        this.timerDuration = this.config.timerDuration;
        this.timerRemaining = this.timerDuration;

        // Atualiza bombas das equipes
        this.teams.forEach(t => {
            t.lifelines.bomba = this.config.bombsCount;
        });

        this.applyConfigVisuals();
        this.updateUI();

        sounds.playCoin();
        this.closeSettingsModal();
        alert("✅ Configurações salvas e aplicadas com sucesso!");
    }

    handleResetSettings() {
        if (!confirm("Deseja restaurar todas as configurações do jogo para os padrões oficiais originais?")) {
            return;
        }

        localStorage.removeItem("seminar_game_config");
        this.config = JSON.parse(JSON.stringify(this.defaultConfig));
        this.timerDuration = this.config.timerDuration;
        this.timerRemaining = this.timerDuration;

        this.teams.forEach(t => {
            t.lifelines.bomba = this.config.bombsCount;
        });

        this.applyConfigVisuals();
        this.updateUI();
        this.openSettingsModal(); // recarrega os campos no modal

        sounds.playWrong();
        alert("🔄 Configurações restauradas com sucesso para os padrões originais!");
    }

    // ==========================================
    // BANCO DE QUESTÕES & EDITOR
    // ==========================================
    loadCustomQuestionsFromStorage() {
        try {
            // 1. Carrega edições / alterações feitas em questões legadas oficiais
            const overridesRaw = localStorage.getItem("seminar_questions_overrides");
            if (overridesRaw) {
                const overrides = JSON.parse(overridesRaw);
                Object.keys(QUESTIONS_BANK).forEach(cat => {
                    QUESTIONS_BANK[cat].forEach(q => {
                        if (overrides[q.id]) {
                            Object.assign(q, overrides[q.id]);
                            q.isEdited = true;
                        }
                    });
                });
                if (overrides.morte_subita && Array.isArray(SUDDEN_DEATH_QUESTIONS)) {
                    SUDDEN_DEATH_QUESTIONS.forEach(q => {
                        if (overrides.morte_subita[q.id]) {
                            Object.assign(q, overrides.morte_subita[q.id]);
                            q.isEdited = true;
                        }
                    });
                }
            }

            // 2. Carrega novas questões personalizadas criadas pela equipe
            const raw = localStorage.getItem("custom_seminar_questions");
            if (raw) {
                const parsed = JSON.parse(raw);
                Object.keys(parsed).forEach(cat => {
                    if (cat === "morte_subita") {
                        if (Array.isArray(parsed.morte_subita)) {
                            parsed.morte_subita.forEach(q => {
                                if (!SUDDEN_DEATH_QUESTIONS.some(existing => existing.id === q.id)) {
                                    q.isCustom = true;
                                    SUDDEN_DEATH_QUESTIONS.push(q);
                                }
                            });
                        }
                    } else if (QUESTIONS_BANK[cat]) {
                        parsed[cat].forEach(q => {
                            if (!QUESTIONS_BANK[cat].some(existing => existing.id === q.id)) {
                                q.isCustom = true;
                                QUESTIONS_BANK[cat].push(q);
                            }
                        });
                    }
                });
            }
        } catch (e) {
            console.warn("Erro ao carregar questões personalizadas ou edições:", e);
        }
    }

    saveOverridesToStorage() {
        try {
            const overrides = {};
            Object.keys(QUESTIONS_BANK).forEach(cat => {
                QUESTIONS_BANK[cat].forEach(q => {
                    if (q.isEdited && !q.isCustom) {
                        overrides[q.id] = {
                            question: q.question,
                            options: q.options,
                            correctIndex: q.correctIndex,
                            commentary: q.commentary
                        };
                    }
                });
            });
            overrides.morte_subita = {};
            SUDDEN_DEATH_QUESTIONS.forEach(q => {
                if (q.isEdited && !q.isCustom) {
                    overrides.morte_subita[q.id] = {
                        question: q.question,
                        answer: q.answer,
                        rationale: q.rationale
                    };
                }
            });
            localStorage.setItem("seminar_questions_overrides", JSON.stringify(overrides));
        } catch (e) {
            console.warn("Erro ao salvar edições de questões:", e);
        }
    }

    saveCustomQuestionsToStorage() {
        try {
            const customOnly = {};
            Object.keys(QUESTIONS_BANK).forEach(cat => {
                customOnly[cat] = QUESTIONS_BANK[cat].filter(q => q.isCustom);
            });
            customOnly.morte_subita = SUDDEN_DEATH_QUESTIONS.filter(q => q.isCustom);
            localStorage.setItem("custom_seminar_questions", JSON.stringify(customOnly));
        } catch (e) {
            console.warn("Erro ao salvar questões personalizadas:", e);
        }
    }

    handleCategoryChange(catId) {
        if (!this.el.mcFields || !this.el.sdFields) return;
        const isSd = (catId === "morte_subita");
        this.el.mcFields.style.display = isSd ? "none" : "block";
        this.el.sdFields.style.display = isSd ? "block" : "none";

        if (this.el.lblCommentary) {
            this.el.lblCommentary.innerText = isSd 
                ? "Critério de Avaliação / Justificativa Doutrinária:" 
                : "Comentário Relâmpago do Mediador (Justificativa doutrinária/jurisprudencial):";
        }
    }

    openQuestionsManager() {
        sounds.play1Up();
        this.updateQuestionCounts();
        this.renderQuestionsManagerList();
        this.el.qmModal.classList.add("active");
    }

    closeQuestionsManager() {
        this.el.qmModal.classList.remove("active");
        this.hideAddQuestionForm();
    }

    toggleAddQuestionForm() {
        const isHidden = this.el.formNewQ.style.display === "none";
        if (isHidden) {
            this.resetFormToNew();
            this.el.formNewQ.style.display = "block";
            this.el.toggleAddFormBtn.innerHTML = "✕ FECHAR FORMULÁRIO";
            document.getElementById("new-q-statement").focus();
        } else {
            this.hideAddQuestionForm();
        }
    }

    resetFormToNew() {
        this.el.formNewQ.reset();
        const idInput = document.getElementById("edit-q-id");
        const catInput = document.getElementById("edit-q-cat");
        if (idInput) idInput.value = "";
        if (catInput) catInput.value = "";

        const catSelect = document.getElementById("new-q-category");
        if (catSelect) {
            catSelect.disabled = false;
            catSelect.value = "livre_concorrencia";
        }
        this.handleCategoryChange("livre_concorrencia");

        const titleEl = document.getElementById("form-question-title");
        const submitBtn = document.getElementById("btn-submit-question-form");
        if (titleEl) titleEl.innerText = "➕ CADASTRAR NOVA PERGUNTA";
        if (submitBtn) submitBtn.innerText = "💾 SALVAR NO JOGO";
    }

    hideAddQuestionForm() {
        this.resetFormToNew();
        this.el.formNewQ.style.display = "none";
        this.el.toggleAddFormBtn.innerHTML = "➕ CADASTRAR NOVA QUESTÃO";
    }

    startEditQuestion(catId, qId) {
        let q = null;
        if (catId === "morte_subita") {
            q = SUDDEN_DEATH_QUESTIONS.find(item => item.id === qId);
        } else if (QUESTIONS_BANK[catId]) {
            q = QUESTIONS_BANK[catId].find(item => item.id === qId);
        }

        if (!q) return;

        this.el.formNewQ.style.display = "block";
        this.el.toggleAddFormBtn.innerHTML = "✕ FECHAR FORMULÁRIO";

        const idInput = document.getElementById("edit-q-id");
        const catInput = document.getElementById("edit-q-cat");
        if (idInput) idInput.value = q.id;
        if (catInput) catInput.value = catId;

        const catSelect = document.getElementById("new-q-category");
        if (catSelect) {
            catSelect.value = catId;
            catSelect.disabled = true; // Fixa categoria durante a edição
        }

        this.handleCategoryChange(catId);

        document.getElementById("new-q-statement").value = q.question || "";

        if (catId === "morte_subita") {
            const sdAns = document.getElementById("new-q-sd-answer");
            const comm = document.getElementById("new-q-commentary");
            if (sdAns) sdAns.value = q.answer || "";
            if (comm) comm.value = q.rationale || "";
        } else {
            if (q.options) {
                document.getElementById("new-q-opt-0").value = q.options[0] || "";
                document.getElementById("new-q-opt-1").value = q.options[1] || "";
                document.getElementById("new-q-opt-2").value = q.options[2] || "";
                document.getElementById("new-q-opt-3").value = q.options[3] || "";
            }
            document.getElementById("new-q-correct").value = q.correctIndex ?? 0;
            document.getElementById("new-q-commentary").value = q.commentary || "";
        }

        const titleEl = document.getElementById("form-question-title");
        const submitBtn = document.getElementById("btn-submit-question-form");
        if (titleEl) titleEl.innerText = `✏️ EDITANDO QUESTÃO (${q.id.toUpperCase()})`;
        if (submitBtn) submitBtn.innerText = "💾 SALVAR ALTERAÇÕES";

        sounds.playCoin();
        this.el.formNewQ.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    restoreSingleQuestion(catId, qId) {
        if (!confirm("Deseja restaurar esta questão ao seu texto original oficial do seminário?")) {
            return;
        }

        if (catId === "morte_subita") {
            const orig = ORIGINAL_SUDDEN_DEATH_QUESTIONS.find(q => q.id === qId);
            const target = SUDDEN_DEATH_QUESTIONS.find(q => q.id === qId);
            if (orig && target) {
                target.question = orig.question;
                target.answer = orig.answer;
                target.rationale = orig.rationale;
                delete target.isEdited;
            }
        } else if (QUESTIONS_BANK[catId]) {
            const orig = ORIGINAL_QUESTIONS_BANK[catId].find(q => q.id === qId);
            const target = QUESTIONS_BANK[catId].find(q => q.id === qId);
            if (orig && target) {
                target.question = orig.question;
                target.options = [...orig.options];
                target.correctIndex = orig.correctIndex;
                target.commentary = orig.commentary;
                delete target.isEdited;
            }
        }

        this.saveOverridesToStorage();
        sounds.playCoin();
        this.updateQuestionCounts();
        this.renderQuestionsManagerList();
        alert("✅ Questão restaurada para a versão oficial com sucesso!");
    }

    handleSaveNewQuestion(e) {
        e.preventDefault();
        const editId = document.getElementById("edit-q-id").value;
        const editCat = document.getElementById("edit-q-cat").value;
        const cat = editId ? editCat : document.getElementById("new-q-category").value;
        const statement = document.getElementById("new-q-statement").value.trim();
        const commentary = document.getElementById("new-q-commentary").value.trim();

        if (cat === "morte_subita") {
            const answer = document.getElementById("new-q-sd-answer").value.trim();
            if (!statement || !answer || !commentary) {
                alert("Por favor, preencha todos os campos da questão discursiva!");
                return;
            }

            if (editId) {
                const target = SUDDEN_DEATH_QUESTIONS.find(q => q.id === editId);
                if (target) {
                    target.question = statement;
                    target.answer = answer;
                    target.rationale = commentary;
                    target.isEdited = true;
                }
                if (target && target.isCustom) {
                    this.saveCustomQuestionsToStorage();
                } else {
                    this.saveOverridesToStorage();
                }
                sounds.play1Up();
                alert(`✅ Questão de Morte Súbita (${editId.toUpperCase()}) atualizada com sucesso!`);
            } else {
                const newQ = {
                    id: `custom_sd_${Date.now()}`,
                    title: "Questão Personalizada da Equipe",
                    question: statement,
                    answer: answer,
                    rationale: commentary,
                    isCustom: true
                };
                SUDDEN_DEATH_QUESTIONS.push(newQ);
                this.saveCustomQuestionsToStorage();
                sounds.play1Up();
                alert("✅ Nova questão de Morte Súbita cadastrada com sucesso!");
            }
        } else {
            const opt0 = document.getElementById("new-q-opt-0").value.trim();
            const opt1 = document.getElementById("new-q-opt-1").value.trim();
            const opt2 = document.getElementById("new-q-opt-2").value.trim();
            const opt3 = document.getElementById("new-q-opt-3").value.trim();
            const correctIdx = parseInt(document.getElementById("new-q-correct").value, 10);

            if (!statement || !opt0 || !opt1 || !opt2 || !opt3 || !commentary) {
                alert("Por favor, preencha o enunciado, todas as 4 alternativas e o comentário!");
                return;
            }

            if (editId) {
                const target = QUESTIONS_BANK[cat].find(q => q.id === editId);
                if (target) {
                    target.question = statement;
                    target.options = [opt0, opt1, opt2, opt3];
                    target.correctIndex = correctIdx;
                    target.commentary = commentary;
                    target.isEdited = true;
                }
                if (target && target.isCustom) {
                    this.saveCustomQuestionsToStorage();
                } else {
                    this.saveOverridesToStorage();
                }
                sounds.play1Up();
                alert(`✅ Questão (${editId.toUpperCase()}) atualizada com sucesso! As alterações já estão ativas na roleta.`);
            } else {
                const newQ = {
                    id: `custom_${cat}_${Date.now()}`,
                    category: cat,
                    question: statement,
                    options: [opt0, opt1, opt2, opt3],
                    correctIndex: correctIdx,
                    commentary: commentary,
                    isCustom: true
                };
                if (!QUESTIONS_BANK[cat]) QUESTIONS_BANK[cat] = [];
                QUESTIONS_BANK[cat].push(newQ);
                this.saveCustomQuestionsToStorage();
                sounds.playCorrect();
                alert(`✅ Questão cadastrada com sucesso no tema ${CATEGORIES[cat].name}!\nEla já está ativa e poderá ser sorteada na roleta.`);
            }
        }

        this.hideAddQuestionForm();
        this.updateQuestionCounts();
        this.renderQuestionsManagerList();
    }

    handleResetQuestions() {
        if (confirm("Deseja realmente restaurar o banco para as questões originais do seminário? Todas as edições e perguntas personalizadas serão removidas.")) {
            localStorage.removeItem("custom_seminar_questions");
            localStorage.removeItem("seminar_questions_overrides");
            location.reload();
        }
    }

    handleExportQuestions() {
        try {
            const dataToExport = {
                exportedAt: new Date().toISOString(),
                overrides: JSON.parse(localStorage.getItem("seminar_questions_overrides") || "{}"),
                customQuestions: JSON.parse(localStorage.getItem("custom_seminar_questions") || "{}"),
                fullBank: QUESTIONS_BANK,
                suddenDeath: SUDDEN_DEATH_QUESTIONS
            };
            const blob = new Blob([JSON.stringify(dataToExport, null, 2)], { type: "application/json" });
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = "questoes_seminario_direito_economico.json";
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
            sounds.playCoin();
            alert("📥 Arquivo JSON exportado com sucesso contendo todas as questões, edições e novidades da equipe!");
        } catch (err) {
            console.error(err);
            alert("Erro ao exportar questões.");
        }
    }

    handleImportQuestions(e) {
        const file = e.target.files && e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (event) => {
            try {
                const parsed = JSON.parse(event.target.result);
                let importedOverrides = parsed.overrides || {};
                let importedCustom = parsed.customQuestions || {};

                // 1. Aplica edições/overrides
                Object.keys(importedOverrides).forEach(key => {
                    if (key === "morte_subita") {
                        Object.keys(importedOverrides.morte_subita).forEach(sdId => {
                            const target = SUDDEN_DEATH_QUESTIONS.find(q => q.id === sdId);
                            if (target) {
                                Object.assign(target, importedOverrides.morte_subita[sdId]);
                                target.isEdited = true;
                            }
                        });
                    } else {
                        Object.keys(QUESTIONS_BANK).forEach(cat => {
                            const target = QUESTIONS_BANK[cat].find(q => q.id === key);
                            if (target) {
                                Object.assign(target, importedOverrides[key]);
                                target.isEdited = true;
                            }
                        });
                    }
                });
                this.saveOverridesToStorage();

                // 2. Aplica novas questões customizadas
                let addedCount = 0;
                Object.keys(importedCustom).forEach(cat => {
                    if (cat === "morte_subita" && Array.isArray(importedCustom.morte_subita)) {
                        importedCustom.morte_subita.forEach(q => {
                            if (!SUDDEN_DEATH_QUESTIONS.some(existing => existing.id === q.id || existing.question === q.question)) {
                                q.isCustom = true;
                                SUDDEN_DEATH_QUESTIONS.push(q);
                                addedCount++;
                            }
                        });
                    } else if (QUESTIONS_BANK[cat] && Array.isArray(importedCustom[cat])) {
                        importedCustom[cat].forEach(q => {
                            if (!QUESTIONS_BANK[cat].some(existing => existing.id === q.id || existing.question === q.question)) {
                                q.isCustom = true;
                                QUESTIONS_BANK[cat].push(q);
                                addedCount++;
                            }
                        });
                    }
                });
                this.saveCustomQuestionsToStorage();

                sounds.play1Up();
                this.updateQuestionCounts();
                this.renderQuestionsManagerList();
                alert(`🎉 Importação concluída!\nEdições aplicadas e ${addedCount} nova(s) questão(ões) incorporadas com sucesso.`);
            } catch (err) {
                console.error(err);
                alert("Erro ao ler o arquivo JSON. Certifique-se de que é um formato válido exportado pelo jogo.");
            } finally {
                e.target.value = "";
            }
        };
        reader.readAsText(file);
    }

    deleteCustomQuestion(cat, id) {
        if (confirm("Tem certeza que deseja remover esta questão personalizada da equipe?")) {
            if (cat === "morte_subita") {
                const idx = SUDDEN_DEATH_QUESTIONS.findIndex(q => q.id === id);
                if (idx !== -1) SUDDEN_DEATH_QUESTIONS.splice(idx, 1);
            } else if (QUESTIONS_BANK[cat]) {
                QUESTIONS_BANK[cat] = QUESTIONS_BANK[cat].filter(q => q.id !== id);
            }
            this.saveCustomQuestionsToStorage();
            sounds.playWrong();
            this.updateQuestionCounts();
            this.renderQuestionsManagerList();
        }
    }

    updateQuestionCounts() {
        const lc = QUESTIONS_BANK.livre_concorrencia ? QUESTIONS_BANK.livre_concorrencia.length : 0;
        const pme = QUESTIONS_BANK.tratamento_pme ? QUESTIONS_BANK.tratamento_pme.length : 0;
        const ch = QUESTIONS_BANK.modelo_china ? QUESTIONS_BANK.modelo_china.length : 0;
        const de = QUESTIONS_BANK.ordem_alemanha ? QUESTIONS_BANK.ordem_alemanha.length : 0;
        const sd = SUDDEN_DEATH_QUESTIONS.length;
        const total = lc + pme + ch + de + sd;

        const countAll = document.getElementById("count-all");
        const countLc = document.getElementById("count-lc");
        const countPme = document.getElementById("count-pme");
        const countCh = document.getElementById("count-ch");
        const countDe = document.getElementById("count-de");
        const countSd = document.getElementById("count-sd");

        if (countAll) countAll.innerText = total;
        if (countLc) countLc.innerText = lc;
        if (countPme) countPme.innerText = pme;
        if (countCh) countCh.innerText = ch;
        if (countDe) countDe.innerText = de;
        if (countSd) countSd.innerText = sd;
    }

    renderQuestionsManagerList() {
        const container = this.el.qmQuestionsList;
        if (!container) return;
        container.innerHTML = "";

        const filter = this.qmActiveFilter;
        let itemsToRender = [];

        if (filter === "morte_subita") {
            SUDDEN_DEATH_QUESTIONS.forEach((q, idx) => {
                const card = document.createElement("div");
                card.className = "qm-card";
                const isEdited = q.isEdited;
                const isCustom = q.isCustom;

                const editBtn = `<button class="btn-ctrl btn-ctrl-gold" style="font-size:0.55rem; padding:4px 8px;" onclick="gameInstance.startEditQuestion('morte_subita', '${q.id}')">✏️ Editar</button>`;
                const restoreBtn = (isEdited && !isCustom) 
                    ? `<button class="btn-ctrl" style="background:#fef3c7; color:#92400e; border-color:#f59e0b; font-size:0.55rem; padding:4px 8px;" onclick="gameInstance.restoreSingleQuestion('morte_subita', '${q.id}')" title="Reverter para o texto original">↩️ Restaurar</button>` 
                    : '';
                const deleteBtn = isCustom
                    ? `<button class="btn-ctrl" style="background:#fee2e2; color:#b91c1c; border-color:#ef4444; font-size:0.55rem; padding:4px 8px;" onclick="gameInstance.deleteCustomQuestion('morte_subita', '${q.id}')">🗑️ Excluir</button>`
                    : '';

                card.innerHTML = `
                    <div class="qm-card-header">
                        <div style="display:flex; align-items:center; gap:6px; flex-wrap:wrap;">
                            <span class="qm-cat-tag" style="background: #ef4444;">⚡ MORTE SÚBITA #${idx + 1}</span>
                            ${isEdited ? '<span style="background:#2563eb; color:#fff; font-family:var(--font-pixel); font-size:0.5rem; padding:2px 6px; border-radius:3px;">EDITADA</span>' : ''}
                            ${isCustom ? '<span style="background:#10b981; color:#fff; font-family:var(--font-pixel); font-size:0.5rem; padding:2px 6px; border-radius:3px;">EQUIPE</span>' : ''}
                        </div>
                        <div style="display:flex; gap:6px;">
                            ${editBtn}
                            ${restoreBtn}
                            ${deleteBtn}
                        </div>
                    </div>
                    <div class="qm-card-q">${q.question}</div>
                    <div class="qm-card-options">
                        <div class="qm-card-opt is-correct">✅ RESPOSTA ESPERADA: ${q.answer}</div>
                    </div>
                    <div class="qm-card-comm"><strong>Gabarito e Justificativa:</strong> ${q.rationale}</div>
                `;
                container.appendChild(card);
            });
            return;
        }

        Object.keys(QUESTIONS_BANK).forEach(catId => {
            if (filter === "all" || filter === catId) {
                QUESTIONS_BANK[catId].forEach((q, idx) => {
                    itemsToRender.push({ q, catId, index: idx + 1 });
                });
            }
        });

        if (itemsToRender.length === 0) {
            container.innerHTML = `<div style="text-align:center; padding: 30px; font-family: var(--font-reading); color: #6b7280;">Nenhuma questão encontrada nesta categoria.</div>`;
            return;
        }

        const letters = ["A", "B", "C", "D"];
        itemsToRender.forEach(({ q, catId, index }) => {
            const cat = CATEGORIES[catId];
            const card = document.createElement("div");
            card.className = "qm-card";

            let optionsHtml = "";
            q.options.forEach((opt, oIdx) => {
                const isCorrect = (oIdx === q.correctIndex);
                optionsHtml += `
                    <div class="qm-card-opt ${isCorrect ? 'is-correct' : ''}">
                        <strong>${letters[oIdx]})</strong> ${opt} ${isCorrect ? '⭐ (GABARITO CORRETO)' : ''}
                    </div>
                `;
            });

            const isEdited = q.isEdited;
            const isCustom = q.isCustom;

            const editBtn = `<button class="btn-ctrl btn-ctrl-gold" style="font-size:0.55rem; padding:4px 8px;" onclick="gameInstance.startEditQuestion('${catId}', '${q.id}')">✏️ Editar</button>`;
            const restoreBtn = (isEdited && !isCustom)
                ? `<button class="btn-ctrl" style="background:#fef3c7; color:#92400e; border-color:#f59e0b; font-size:0.55rem; padding:4px 8px;" onclick="gameInstance.restoreSingleQuestion('${catId}', '${q.id}')" title="Reverter para o texto original">↩️ Restaurar</button>`
                : '';
            const deleteBtn = isCustom
                ? `<button class="btn-ctrl" style="background:#fee2e2; color:#b91c1c; border-color:#ef4444; font-size:0.55rem; padding:4px 8px;" onclick="gameInstance.deleteCustomQuestion('${catId}', '${q.id}')">🗑️ Excluir</button>`
                : '';

            card.innerHTML = `
                <div class="qm-card-header">
                    <div style="display:flex; align-items:center; gap:6px; flex-wrap:wrap;">
                        <span class="qm-cat-tag" style="background: ${cat.color};">${cat.badgeIcon} ${cat.name.toUpperCase()}</span>
                        <span style="font-family: var(--font-pixel); font-size: 0.55rem; color:#6b7280;">#${index}</span>
                        ${isEdited ? '<span style="background:#2563eb; color:#fff; font-family:var(--font-pixel); font-size:0.5rem; padding:2px 6px; border-radius:3px;">EDITADA</span>' : ''}
                        ${isCustom ? '<span style="background:#10b981; color:#fff; font-family:var(--font-pixel); font-size:0.5rem; padding:2px 6px; border-radius:3px;">EQUIPE</span>' : ''}
                    </div>
                    <div style="display:flex; gap:6px;">
                        ${editBtn}
                        ${restoreBtn}
                        ${deleteBtn}
                    </div>
                </div>
                <div class="qm-card-q">${q.question}</div>
                <div class="qm-card-options">
                    ${optionsHtml}
                </div>
                <div class="qm-card-comm">
                    <strong>🎙️ Comentário Relâmpago do Mediador:</strong> ${q.commentary}
                </div>
            `;
            container.appendChild(card);
        });
    }
}

let gameInstance = null;
window.addEventListener("DOMContentLoaded", () => {
    gameInstance = new DidacticGame();
});
