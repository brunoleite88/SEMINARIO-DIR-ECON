/**
 * audio.js
 * Sintetizador Chiptune 16-Bits Procedural (Web Audio API)
 * Reproduz com fidelidade a sonoridade clássica do SNES (Super Mario World).
 * Utiliza ondas quadradas (square), triangulares e gerador de ruído branco para explosões.
 */

class ChiptuneAudio {
    constructor() {
        this.ctx = null;
        this.muted = false;
        this.initialized = false;
    }

    init() {
        if (!this.initialized) {
            try {
                const AudioCtx = window.AudioContext || window.webkitAudioContext;
                if (AudioCtx) {
                    this.ctx = new AudioCtx();
                    this.initialized = true;
                }
            } catch (e) {
                console.warn("Web Audio API não disponível:", e);
            }
        }
        if (this.ctx && this.ctx.state === "suspended") {
            this.ctx.resume();
        }
    }

    toggleMute() {
        this.muted = !this.muted;
        return this.muted;
    }

    // Tique da Roleta / Minigame do Toad (Salto curto em onda quadrada)
    playTick(pitchShift = 1.0) {
        if (this.muted) return;
        this.init();
        if (!this.ctx) return;

        try {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();

            osc.type = "square";
            const freq = 440 * pitchShift;
            osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
            osc.frequency.setValueAtTime(freq * 1.5, this.ctx.currentTime + 0.02);

            gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.04);

            osc.connect(gain);
            gain.connect(this.ctx.destination);

            osc.start();
            osc.stop(this.ctx.currentTime + 0.045);
        } catch (e) {}
    }

    // Parada da Roleta / Revelação de Item do Bloco '?'
    playWheelStop() {
        if (this.muted) return;
        this.init();
        if (!this.ctx) return;

        // Efeito de Power-up / Item surgindo do bloco
        const notes = [330, 392, 659, 523, 587, 784];
        notes.forEach((freq, idx) => {
            setTimeout(() => {
                try {
                    const osc = this.ctx.createOscillator();
                    const gain = this.ctx.createGain();
                    osc.type = "square";
                    osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

                    gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
                    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.08);

                    osc.connect(gain);
                    gain.connect(this.ctx.destination);
                    osc.start();
                    osc.stop(this.ctx.currentTime + 0.085);
                } catch (e) {}
            }, idx * 45);
        });
    }

    // Resposta Correta: O clássico som de MOEDA DO MARIO (B5 -> E6)
    playCorrect() {
        if (this.muted) return;
        this.init();
        if (!this.ctx) return;

        try {
            const now = this.ctx.currentTime;
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();

            osc.type = "square";
            // Nota B5 (987.77 Hz) seguida instantaneamente por E6 (1318.51 Hz)
            osc.frequency.setValueAtTime(987.77, now);
            osc.frequency.setValueAtTime(1318.51, now + 0.07);

            gain.gain.setValueAtTime(0.25, now);
            gain.gain.setValueAtTime(0.25, now + 0.07);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.38);

            osc.connect(gain);
            gain.connect(this.ctx.destination);

            osc.start(now);
            osc.stop(now + 0.40);
        } catch (e) {}
    }

    // 1-UP Fanfare: Usado quando ganha insígnia decisiva
    play1Up() {
        if (this.muted) return;
        this.init();
        if (!this.ctx) return;

        // Notas da fanfarra 1-UP do Mario: E5, G5, E6, C6, D6, G6
        const notes = [
            { f: 659.25, d: 0.1 },
            { f: 783.99, d: 0.1 },
            { f: 1318.51, d: 0.1 },
            { f: 1046.50, d: 0.1 },
            { f: 1174.66, d: 0.1 },
            { f: 1567.98, d: 0.25 }
        ];

        let timeOffset = 0;
        notes.forEach((n) => {
            setTimeout(() => {
                try {
                    const osc = this.ctx.createOscillator();
                    const gain = this.ctx.createGain();
                    osc.type = "square";
                    osc.frequency.setValueAtTime(n.f, this.ctx.currentTime);

                    gain.gain.setValueAtTime(0.2, this.ctx.currentTime);
                    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + n.d);

                    osc.connect(gain);
                    gain.connect(this.ctx.destination);
                    osc.start();
                    osc.stop(this.ctx.currentTime + n.d);
                } catch (e) {}
            }, timeOffset * 1000);
            timeOffset += n.d * 0.9;
        });
    }

    // Resposta Errada: Som clássico de dano / descida cromática de 8-bits
    playWrong() {
        if (this.muted) return;
        this.init();
        if (!this.ctx) return;

        try {
            const now = this.ctx.currentTime;
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();

            osc.type = "triangle";
            // Escala descendente rápida de erro
            osc.frequency.setValueAtTime(300, now);
            osc.frequency.setValueAtTime(280, now + 0.08);
            osc.frequency.setValueAtTime(260, now + 0.16);
            osc.frequency.setValueAtTime(220, now + 0.24);
            osc.frequency.setValueAtTime(160, now + 0.32);

            gain.gain.setValueAtTime(0.25, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.45);

            osc.connect(gain);
            gain.connect(this.ctx.destination);

            osc.start(now);
            osc.stop(now + 0.46);
        } catch (e) {}
    }

    // Curinga Bomba (Bob-omb): Explosão Chiptune com Ruído Branco sintetizado
    playLifeline() {
        if (this.muted) return;
        this.init();
        if (!this.ctx) return;

        try {
            // Sintetiza uma explosão gerando buffer de ruído branco
            const bufferSize = this.ctx.sampleRate * 0.35;
            const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
            const data = buffer.getChannelData(0);
            for (let i = 0; i < bufferSize; i++) {
                data[i] = Math.random() * 2 - 1;
            }

            const noise = this.ctx.createBufferSource();
            noise.buffer = buffer;

            // Filtro passa-baixa para dar peso de explosão ao ruído
            const filter = this.ctx.createBiquadFilter();
            filter.type = "lowpass";
            filter.frequency.setValueAtTime(1200, this.ctx.currentTime);
            filter.frequency.exponentialRampToValueAtTime(80, this.ctx.currentTime + 0.35);

            const gain = this.ctx.createGain();
            gain.gain.setValueAtTime(0.35, this.ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.35);

            noise.connect(filter);
            filter.connect(gain);
            gain.connect(this.ctx.destination);

            noise.start();
        } catch (e) {}
    }

    // Alerta de Contagem Regressiva (Bip urgente de fase do Mario)
    playTimerWarning() {
        if (this.muted) return;
        this.init();
        if (!this.ctx) return;

        try {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = "square";
            osc.frequency.setValueAtTime(880, this.ctx.currentTime);
            osc.frequency.setValueAtTime(990, this.ctx.currentTime + 0.04);

            gain.gain.setValueAtTime(0.18, this.ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.08);

            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.start();
            osc.stop(this.ctx.currentTime + 0.085);
        } catch (e) {}
    }

    // Fanfarra Final de Vitória (Course Clear Fanfare do Super Mario World)
    playVictory() {
        if (this.muted) return;
        this.init();
        if (!this.ctx) return;

        const fanfare = [
            { f: 523.25, d: 0.12, t: 0 },
            { f: 659.25, d: 0.12, t: 0.12 },
            { f: 783.99, d: 0.12, t: 0.24 },
            { f: 1046.50, d: 0.24, t: 0.36 },
            { f: 880.00, d: 0.14, t: 0.65 },
            { f: 987.77, d: 0.14, t: 0.80 },
            { f: 1046.50, d: 0.50, t: 0.95 }
        ];

        fanfare.forEach(note => {
            setTimeout(() => {
                try {
                    const osc = this.ctx.createOscillator();
                    const gain = this.ctx.createGain();
                    osc.type = "square";
                    osc.frequency.setValueAtTime(note.f, this.ctx.currentTime);

                    gain.gain.setValueAtTime(0.22, this.ctx.currentTime);
                    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + note.d);

                    osc.connect(gain);
                    gain.connect(this.ctx.destination);
                    osc.start();
                    osc.stop(this.ctx.currentTime + note.d);
                } catch (e) {}
            }, note.t * 1000);
        });
    }
}

const sounds = new ChiptuneAudio();
