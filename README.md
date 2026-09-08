# ⚖️ Dinâmica de Direito Econômico: A Constituição Econômica e o Poder Judiciário

> **Livre Concorrência e Tratamento Favorecido às Empresas de Pequeno Porte (Brasil, China e Alemanha)**  
> Jogo didático interativo para seminário acadêmico desenvolvido em estética retrô 16-bit (Super Mario World / SNES).

---

## 🎮 Acesso Online (GitHub Pages)

O jogo pode ser executado diretamente pelo navegador através do link oficial:
👉 **[Jogar Dinâmica Online](https://brunoleite88.github.io/SEMINARIO-DIR-ECON/)**

---

## 🕹️ Funcionalidades e Mecânicas

* **Estética 16-Bit SNES**: HUD pixelizado, fontes retrô, animações de moedas e coroas, efeitos sonoros em chiptune sintetizados nativamente via Web Audio API.
* **Roleta Temática com Ponteiro a 90° (Direita)**:
  * ⚖️ **Livre Concorrência** (Brasil - Art. 170, IV da CF/88, Lei 12.529/11 e CADE)
  * 🏢 **Tratamento Favorecido a PMEs** (Brasil - Art. 170, IX e Art. 179 da CF/88, LC 123/06)
  * 🇨🇳 **Modelo Concorrencial da China** (Socialismo de mercado, empresas estatais SOEs, Little Giants e AML 2022)
  * 🇩🇪 **Ordem Econômica da Alemanha** (Economia Social de Mercado, Escola de Freiburg, GWB e Mittelstand)
  * 👑 **Casa Coroa (Sorte)**: A equipe escolhe o tema da pergunta ou ganha 1 Coroa de bônus!
* **Giro Interativo e Imparcial**: O mediador pode arrastar a roleta com o mouse para apresentar os temas e clicar em **`PARAR ROLETA`** em qualquer momento a pedido da turma.
* **Sistema de Vidas e Coroas**:
  * Cada equipe inicia com 3 vidas (1-UP).
  * Erros acionam animações com Bob-omb e dedução de vidas.
  * O objetivo é conquistar as 4 Coroas Temáticas ou atingir a meta no tempo limite.
* **Morte Súbita (Desempate)**: Rodada de perguntas discursivas com julgamento pelo docente/mediador caso haja empate.
* **Gerenciador e Editor de Questões Integrado**:
  * Permite visualizar e filtrar todas as questões.
  * Permite cadastrar novas perguntas com gabarito e justificativa doutrinária diretamente pela interface.
  * **Exportação e Importação via JSON** para compartilhamento rápido entre os membros da equipe.

---

## 📚 Banco de Questões

O dossiê completo contendo todas as 32 questões detalhadas (enunciados, alternativas, gabaritos oficiais e justificativas doutrinárias) está documentado no arquivo:
👉 [BANCO_DE_QUESTOES.md](./BANCO_DE_QUESTOES.md)

---

## 🛠️ Tecnologias Utilizadas

* **HTML5 Canvas 2D**: Renderização suave e de alta fidelidade da roleta.
* **Vanilla CSS**: Sistema de design retrô 16-bit com layout responsivo para projetores e notebooks.
* **Vanilla JavaScript (ES6+)**: Lógica completa do jogo, controle de turnos, pontuação e persistência via `localStorage`.
* **Web Audio API**: Síntese procedural de efeitos sonoros chiptune sem arquivos pesados externos.
