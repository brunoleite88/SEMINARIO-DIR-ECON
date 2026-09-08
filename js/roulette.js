/**
 * roulette.js
 * Motor de renderização e física vetorial da Roleta 16-Bits Super Mario
 * - Seta de seleção posicionada à DIREITA (exatamente a 90º do topo / 3 horas / 0 radianos),
 *   apontando para dentro da roleta.
 * - Quando o tema é sorteado, o texto fica 100% HORIZONTAL (leitura natural da esquerda para a direita).
 * - Arraste interativo com mouse e botão de parada imparcial.
 */

class RouletteWheel {
    constructor(canvasId, options = {}) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext("2d");
        this.onSpinComplete = options.onSpinComplete || (() => {});
        this.onSectorChange = options.onSectorChange || (() => {});
        this.onSpinStateChange = options.onSpinStateChange || (() => {});

        // 5 Quadrantes Oficiais - Textos Limpos em 2 Linhas
        this.sectors = [
            {
                id: "livre_concorrencia",
                name: "Livre Concorrência",
                line1: "LIVRE",
                line2: "CONCORRÊNCIA",
                color: "#0058f8",
                textColor: "#ffffff"
            },
            {
                id: "tratamento_pme",
                name: "Tratamento PMEs",
                line1: "TRATAMENTO",
                line2: "PMEs",
                color: "#00a800",
                textColor: "#ffffff"
            },
            {
                id: "modelo_china",
                name: "Modelo China",
                line1: "MODELO DA",
                line2: "CHINA",
                color: "#e40028",
                textColor: "#ffffff"
            },
            {
                id: "ordem_alemanha",
                name: "Ordem Alemanha",
                line1: "ORDEM NA",
                line2: "ALEMANHA",
                color: "#f89800",
                textColor: "#ffffff"
            },
            {
                id: "coroa",
                name: "CASA COROA",
                line1: "CASA",
                line2: "COROA",
                color: "#940088",
                textColor: "#fce0a8"
            }
        ];

        this.numSectors = this.sectors.length;
        this.arc = (2 * Math.PI) / this.numSectors;

        // Estado da rotação e física
        this.currentAngle = 0;
        this.isSpinning = false;
        this.isDecelerating = false;
        this.currentSpeed = 0;
        this.pointerBounce = 0;
        this.lastSectorIndex = -1;

        // Estado de arraste com mouse
        this.isDragging = false;
        this.lastMouseAngle = 0;
        this.velocityHistory = [];
        this.animFrameId = null;

        this.setupCanvas();
        this.setupMouseEvents();
        this.draw();

        window.addEventListener("resize", () => {
            this.setupCanvas();
            this.draw();
        });
    }

    updateSectors(newSectorsConfig) {
        if (!newSectorsConfig) return;
        this.sectors.forEach(sec => {
            if (newSectorsConfig[sec.id]) {
                const conf = newSectorsConfig[sec.id];
                if (conf.name) sec.name = conf.name;
                if (conf.line1) sec.line1 = conf.line1.toUpperCase();
                if (conf.line2) sec.line2 = conf.line2.toUpperCase();
            }
        });
        this.draw();
    }

    setupCanvas() {
        const rect = this.canvas.getBoundingClientRect();
        const dpr = window.devicePixelRatio || 1;
        const size = Math.min(rect.width || 460, rect.height || 460);

        this.canvas.width = size * dpr;
        this.canvas.height = size * dpr;
        this.ctx.scale(dpr, dpr);

        this.width = size;
        this.height = size;
        this.centerX = size / 2;
        this.centerY = size / 2;
        this.radius = size / 2 - 28; // Margem para a seta na direita
    }

    setupMouseEvents() {
        const getAngleFromEvent = (e) => {
            const rect = this.canvas.getBoundingClientRect();
            const clientX = e.clientX || (e.touches && e.touches[0] ? e.touches[0].clientX : 0);
            const clientY = e.clientY || (e.touches && e.touches[0] ? e.touches[0].clientY : 0);
            const x = clientX - rect.left - this.centerX;
            const y = clientY - rect.top - this.centerY;
            return {
                angle: Math.atan2(y, x),
                distance: Math.hypot(x, y)
            };
        };

        const onPointerDown = (e) => {
            if (this.isSpinning && !this.isDecelerating) {
                return;
            }

            const { angle, distance } = getAngleFromEvent(e);
            if (distance > this.radius + 18) return;

            sounds.init();
            this.isDragging = true;
            this.lastMouseAngle = angle;
            this.velocityHistory = [];
            this.canvas.style.cursor = "grabbing";

            if (this.animFrameId) {
                cancelAnimationFrame(this.animFrameId);
                this.animFrameId = null;
            }
            this.isSpinning = false;
            this.isDecelerating = false;
        };

        const onPointerMove = (e) => {
            if (!this.isDragging) return;

            const { angle } = getAngleFromEvent(e);
            let delta = angle - this.lastMouseAngle;

            if (delta > Math.PI) delta -= 2 * Math.PI;
            if (delta < -Math.PI) delta += 2 * Math.PI;

            this.currentAngle += delta;
            this.lastMouseAngle = angle;

            const now = performance.now();
            this.velocityHistory.push({ delta, time: now });
            if (this.velocityHistory.length > 5) {
                this.velocityHistory.shift();
            }

            this.checkSectorTick();
            this.draw();
        };

        const onPointerUp = () => {
            if (!this.isDragging) return;
            this.isDragging = false;
            this.canvas.style.cursor = "grab";

            if (this.velocityHistory.length >= 2) {
                const first = this.velocityHistory[0];
                const last = this.velocityHistory[this.velocityHistory.length - 1];
                const dt = (last.time - first.time) || 16;
                let totalDelta = 0;
                this.velocityHistory.forEach(v => totalDelta += v.delta);
                const avgVelocity = totalDelta / (dt / 16);

                if (Math.abs(avgVelocity) > 0.05) {
                    this.startSpin(avgVelocity * 1.5);
                    return;
                }
            }

            this.pointerBounce = 0;
            this.draw();
        };

        this.canvas.style.cursor = "grab";
        this.canvas.addEventListener("pointerdown", onPointerDown);
        window.addEventListener("pointermove", onPointerMove);
        window.addEventListener("pointerup", onPointerUp);
        window.addEventListener("pointercancel", onPointerUp);
    }

    checkSectorTick() {
        const currentSec = this.getCurrentSector();
        const currentIdx = this.sectors.indexOf(currentSec);

        if (currentIdx !== this.lastSectorIndex) {
            this.lastSectorIndex = currentIdx;
            this.pointerBounce = (Math.random() > 0.5 ? 0.28 : -0.28);
            sounds.playTick(1.0);
            this.onSectorChange(currentSec);
        } else {
            this.pointerBounce *= 0.82;
        }
    }

    draw() {
        const ctx = this.ctx;
        const cx = this.centerX;
        const cy = this.centerY;
        const r = this.radius;

        ctx.clearRect(0, 0, this.width, this.height);

        // 1. Sombra sólida retrô
        ctx.save();
        ctx.beginPath();
        ctx.arc(cx + 6, cy + 6, r + 12, 0, 2 * Math.PI);
        ctx.fillStyle = "#000000";
        ctx.fill();
        ctx.restore();

        // 2. Aro metálico amarelo Mario com contorno preto
        ctx.beginPath();
        ctx.arc(cx, cy, r + 12, 0, 2 * Math.PI);
        ctx.fillStyle = "#000000";
        ctx.fill();

        ctx.beginPath();
        ctx.arc(cx, cy, r + 8, 0, 2 * Math.PI);
        ctx.fillStyle = "#f8b800";
        ctx.fill();

        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, 2 * Math.PI);
        ctx.fillStyle = "#000000";
        ctx.fill();

        // Pinos decorativos no aro
        const numPegs = 20;
        for (let p = 0; p < numPegs; p++) {
            const pegAngle = (p * 2 * Math.PI) / numPegs;
            const px = cx + Math.cos(pegAngle) * (r + 4);
            const py = cy + Math.sin(pegAngle) * (r + 4);

            ctx.fillStyle = "#ffffff";
            ctx.fillRect(px - 2.5, py - 2.5, 5, 5);
            ctx.fillStyle = "#000000";
            ctx.strokeRect(px - 2.5, py - 2.5, 5, 5);
        }

        // 3. Fatias da Roleta
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(this.currentAngle);

        for (let i = 0; i < this.numSectors; i++) {
            const angle = i * this.arc;
            const sector = this.sectors[i];

            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.arc(0, 0, r, angle, angle + this.arc);
            ctx.closePath();
            ctx.fillStyle = sector.color;
            ctx.fill();

            ctx.strokeStyle = "#000000";
            ctx.lineWidth = 4;
            ctx.stroke();

            // Texto em 2 linhas afastadas do centro
            ctx.save();
            ctx.rotate(angle + this.arc / 2);

            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.font = "900 14px 'Inter', -apple-system, BlinkMacSystemFont, sans-serif";

            const textDistance = r * 0.65;

            ctx.strokeStyle = "#000000";
            ctx.lineWidth = 5;
            ctx.lineJoin = "round";

            ctx.strokeText(sector.line1, textDistance, -10);
            ctx.fillStyle = sector.textColor;
            ctx.fillText(sector.line1, textDistance, -10);

            ctx.strokeText(sector.line2, textDistance, +11);
            ctx.fillStyle = sector.textColor;
            ctx.fillText(sector.line2, textDistance, +11);

            ctx.restore();
        }

        ctx.restore();

        // 4. Centro da Roleta: Bloco de Interrogação '?'
        this.drawQuestionBlock(cx, cy);

        // 5. PONTEIRO SELETOR À DIREITA (A 90º do topo / 3 horas / 0 radianos)
        this.drawRightPixelPointer(cx + r + 2, cy);
    }

    drawQuestionBlock(x, y) {
        const ctx = this.ctx;
        const size = 52;
        const half = size / 2;

        ctx.save();
        ctx.translate(x - half, y - half);

        ctx.fillStyle = "#000000";
        ctx.fillRect(-3, -3, size + 6, size + 6);

        ctx.fillStyle = "#f8b800";
        ctx.fillRect(0, 0, size, size);

        ctx.fillStyle = "#fce0a8";
        ctx.fillRect(0, 0, size, 4);
        ctx.fillRect(0, 0, 4, size);

        ctx.fillStyle = "#b86800";
        ctx.fillRect(0, size - 4, size, 4);
        ctx.fillRect(size - 4, 0, 4, size);

        ctx.fillStyle = "#000000";
        ctx.fillRect(4, 4, 4, 4);
        ctx.fillRect(size - 8, 4, 4, 4);
        ctx.fillRect(4, size - 8, 4, 4);
        ctx.fillRect(size - 8, size - 8, 4, 4);

        ctx.fillStyle = "#ffffff";
        ctx.fillRect(5, 5, 2, 2);
        ctx.fillRect(size - 7, 5, 2, 2);

        ctx.fillStyle = "#ffffff";
        ctx.font = "900 26px 'Press Start 2P', monospace, sans-serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        ctx.shadowColor = "#663300";
        ctx.shadowOffsetX = 3;
        ctx.shadowOffsetY = 3;
        ctx.shadowBlur = 0;
        ctx.fillText("?", half, half + 2);

        ctx.restore();
    }

    // Desenha a agulha na borda DIREITA apontando para a ESQUERDA (em direção ao centro)
    drawRightPixelPointer(x, y) {
        const ctx = this.ctx;
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(this.pointerBounce);

        // Sombra sólida preta da seta
        ctx.fillStyle = "#000000";
        ctx.beginPath();
        ctx.moveTo(20, -18);
        ctx.lineTo(20, 18);
        ctx.lineTo(-18, 0); // Ponta apontando para a esquerda (centro da roleta)
        ctx.closePath();
        ctx.fill();

        // Corpo vermelho da seta
        ctx.fillStyle = "#f82800";
        ctx.beginPath();
        ctx.moveTo(18, -14);
        ctx.lineTo(18, 14);
        ctx.lineTo(-14, 0);
        ctx.closePath();
        ctx.fill();

        // Miolo amarelo clássico
        ctx.fillStyle = "#f8b800";
        ctx.beginPath();
        ctx.moveTo(15, -7);
        ctx.lineTo(15, 7);
        ctx.lineTo(-8, 0);
        ctx.closePath();
        ctx.fill();

        // Rebite/Pino de fixação
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(13, -3, 6, 6);
        ctx.strokeStyle = "#000000";
        ctx.lineWidth = 2;
        ctx.strokeRect(13, -3, 6, 6);

        ctx.restore();
    }

    // Determina o setor selecionado na DIREITA (ângulo 0 radianos)
    getCurrentSector() {
        const pointerAngle = 0; // Posição exata na direita (3 horas)
        let normalizedAngle = (pointerAngle - (this.currentAngle % (2 * Math.PI))) % (2 * Math.PI);
        if (normalizedAngle < 0) {
            normalizedAngle += 2 * Math.PI;
        }
        const sectorIndex = Math.floor(normalizedAngle / this.arc) % this.numSectors;
        return this.sectors[sectorIndex];
    }

    startSpin(initialSpeed = null) {
        if (this.isSpinning) return;

        this.isSpinning = true;
        this.isDecelerating = false;
        sounds.init();

        this.currentSpeed = initialSpeed || (0.16 + Math.random() * 0.06);
        if (Math.abs(this.currentSpeed) < 0.12) {
            this.currentSpeed = 0.16;
        }

        this.onSpinStateChange({ isSpinning: true, isDecelerating: false });

        let lastTime = performance.now();
        const spinLoop = (now) => {
            const dt = Math.min((now - lastTime) / 16.66, 2.0);
            lastTime = now;

            this.currentAngle += this.currentSpeed * dt;
            this.checkSectorTick();
            this.draw();

            if (!this.isDecelerating) {
                this.animFrameId = requestAnimationFrame(spinLoop);
            } else {
                this.currentSpeed *= Math.pow(0.965, dt);

                if (Math.abs(this.currentSpeed) > 0.003) {
                    this.animFrameId = requestAnimationFrame(spinLoop);
                } else {
                    this.isSpinning = false;
                    this.isDecelerating = false;
                    this.pointerBounce = 0;
                    this.draw();
                    sounds.playWheelStop();

                    const finalSector = this.getCurrentSector();
                    this.onSpinStateChange({ isSpinning: false, isDecelerating: false });

                    setTimeout(() => {
                        this.onSpinComplete(finalSector);
                    }, 400);
                }
            }
        };

        this.animFrameId = requestAnimationFrame(spinLoop);
    }

    requestStop() {
        if (!this.isSpinning || this.isDecelerating) return;

        this.isDecelerating = true;
        this.onSpinStateChange({ isSpinning: true, isDecelerating: true });
    }
}
