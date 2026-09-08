/**
 * mario-icons.js
 * Biblioteca de Ícones Pixel Art 16-Bits autênticos no estilo Super Mario World (SNES).
 * Substitui emojis padrão do sistema operacional por gráficos vetoriais pixel-perfect.
 */

const MARIO_ICONS = {
    // 1. Mario (Cogumelo Super / Vermelho)
    mario: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="24" height="24" shape-rendering="crispEdges">
        <path fill="#000" d="M5 1h6v1h2v1h1v1h1v3h-1v1h-1v1h-1v3h-1v1H5v-1H4V9H3V8H2V7H1V4h1V3h1V2h2V1z"/>
        <path fill="#f82800" d="M5 2h6v1h1v1h1v3h-1V7h-1V6h-1V5H9v2h2v1h1v1h-2V8H6v1H4V8h1V7H3V6H2V5h1v1h1v1h1V5H4V4h1V3h1V2H5z"/>
        <path fill="#a80000" d="M6 7h4v1H6zM4 8h2v1H4zM10 8h2v1h-2z"/>
        <path fill="#fff" d="M6 3h4v1h1v1h1v1h-2V5H9v2H7V5H6v1H4V6h1V5h1V4zM2 5h1v1h1v1H3V6H2V5zM13 5h1v1h-1v1h-1V6h1V5z"/>
        <path fill="#fce0a8" d="M5 9h6v1h2v2h-1v1H4v-1H3v-2h2V9z"/>
        <path fill="#000" d="M6 10h1v2H6v-2zM9 10h1v2H9v-2z"/>
    </svg>`,

    // 2. Luigi (Cogumelo 1-UP Verde)
    luigi: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="24" height="24" shape-rendering="crispEdges">
        <path fill="#000" d="M5 1h6v1h2v1h1v1h1v3h-1v1h-1v1h-1v3h-1v1H5v-1H4V9H3V8H2V7H1V4h1V3h1V2h2V1z"/>
        <path fill="#00a800" d="M5 2h6v1h1v1h1v3h-1V7h-1V6h-1V5H9v2h2v1h1v1h-2V8H6v1H4V8h1V7H3V6H2V5h1v1h1v1h1V5H4V4h1V3h1V2H5z"/>
        <path fill="#005800" d="M6 7h4v1H6zM4 8h2v1H4zM10 8h2v1h-2z"/>
        <path fill="#fff" d="M6 3h4v1h1v1h1v1h-2V5H9v2H7V5H6v1H4V6h1V5h1V4zM2 5h1v1h1v1H3V6H2V5zM13 5h1v1h-1v1h-1V6h1V5z"/>
        <path fill="#fce0a8" d="M5 9h6v1h2v2h-1v1H4v-1H3v-2h2V9z"/>
        <path fill="#000" d="M6 10h1v2H6v-2zM9 10h1v2H9v-2z"/>
    </svg>`,

    // 3. Yoshi (Ovo do Yoshi Super Mario World)
    yoshi: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="24" height="24" shape-rendering="crispEdges">
        <path fill="#000" d="M6 1h4v1h2v1h1v2h1v5h-1v2h-1v1h-1v1h-1v1H5v-1H4v-1H3v-1H2V7h1V5h1V3h2V1z"/>
        <path fill="#fff" d="M6 2h4v1h2v2h1v5h-1v2h-1v1H5v-1H4v-2H3V7h1V5h1V3h1V2z"/>
        <path fill="#e0dcd0" d="M9 12h2v1h-2zM4 11h2v1H4zM11 9h1v2h-1z"/>
        <path fill="#00b800" d="M7 3h2v1h1v2H8V5H7V3zM4 6h2v3H4V8H3V7h1V6zM10 7h2v3h-1v1h-2v-1h-1V8h2V7zM6 10h3v2H6v-2z"/>
        <path fill="#58e858" d="M7 4h1v1H7zM4 7h1v1H4zM10 8h1v1h-1zM7 11h1v1H7z"/>
    </svg>`,

    // 4. Peach (Coroa Dourada da Princesa Peach)
    peach: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="24" height="24" shape-rendering="crispEdges">
        <path fill="#000" d="M2 3h2v2h1v2h2V5h2V3h2v2h1v2h2v5h-1v1H3v-1H2V3z"/>
        <path fill="#f8b800" d="M2 4h1v3h1v1h1V6h1V4h4v2h1v2h1V7h1V4h1v7H3V4z"/>
        <path fill="#ffe880" d="M2 4h1v2H2zM7 4h2v2H7zM13 4h1v2h-1zM3 10h10v1H3z"/>
        <path fill="#f82800" d="M7 7h2v2H7z"/>
        <path fill="#ff8080" d="M7 7h1v1H7z"/>
        <path fill="#0058f8" d="M3 7h1v2H3zM12 7h1v2h-1z"/>
        <path fill="#fff" d="M4 11h1v1H4zM7 11h2v1H7zM11 11h1v1h-1z"/>
    </svg>`,

    // 5. Bowser (Casco com Espinhos do Bowser)
    bowser: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="24" height="24" shape-rendering="crispEdges">
        <path fill="#000" d="M5 2h6v1h2v1h1v2h1v5h-1v1h-1v1h-1v1H4v-1H3v-1H2v-1H1V6h1V4h1V3h2V2z"/>
        <path fill="#00a800" d="M5 3h6v1h1v1h1v5h-1V9h-1V8h-1V6h-1V5H7v1H6v2H5v1H4v1H3V5h1V4h1V3z"/>
        <path fill="#005800" d="M6 6h4v1H6zM5 8h6v1H5z"/>
        <path fill="#fff" d="M7 4h2v2H7zM4 7h2v2H4zM10 7h2v2h-2z"/>
        <path fill="#000" d="M8 5h1v1H8zM5 8h1v1H5zM11 8h1v1h-1z"/>
        <path fill="#f87800" d="M3 11h10v1h-1v1H4v-1H3v-1z"/>
        <path fill="#f8d800" d="M4 11h8v1H4z"/>
    </svg>`,

    // 6. Toad (Cogumelo do Toad)
    toad: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="24" height="24" shape-rendering="crispEdges">
        <path fill="#000" d="M5 1h6v1h2v1h1v1h1v4h-1v1h-1v1h-1v2h-1v1H5v-1H4v-2H3V9H2V8H1V4h1V3h1V2h2V1z"/>
        <path fill="#fff" d="M5 2h6v1h2v2h1v3h-1V7h-1V6h-1V5H9v2h2v1h1v1h-2V8H6v1H4V8h1V7H3V6H2V5h1v1h1v1h1V5H4V4h1V3h1V2H5z"/>
        <path fill="#f82800" d="M6 3h4v4H6zM1 5h2v3H1zM13 5h2v3h-2zM6 8h4v1H6z"/>
        <path fill="#fce0a8" d="M5 9h6v2h1v1H4v-1h1V9z"/>
        <path fill="#000" d="M6 10h1v1H6zM9 10h1v1H9z"/>
        <path fill="#0058f8" d="M4 12h8v1H4z"/>
        <path fill="#f8b800" d="M7 12h2v1H7z"/>
    </svg>`,

    // 7. Bob-omb (Bomba 50:50 16-Bits)
    bobomb: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="24" height="24" shape-rendering="crispEdges">
        <path fill="#f8b800" d="M1 5h2v4H1zM2 6h1v2H2zM8 1h1v2H8zM9 1h2v1H9z"/>
        <path fill="#f82800" d="M10 0h1v1h-1zM11 1h1v1h-1zM10 2h1v1h-1z"/>
        <path fill="#fff" d="M10 1h1v1h-1z"/>
        <path fill="#000" d="M6 3h5v1h2v1h1v1h1v5h-1v1h-1v1h-2v1H6v-1H4v-1H3v-1H2V6h1V5h1V4h2V3z"/>
        <path fill="#242434" d="M6 4h5v1h2v1h1v5h-1v1h-2v1H6v-1H4v-1H3V6h1V5h2V4z"/>
        <path fill="#505070" d="M5 5h2v1H5zM4 6h1v3H4zM5 6h1v1H5z"/>
        <path fill="#fff" d="M8 6h2v4H8zM11 6h2v4h-2z"/>
        <path fill="#000" d="M9 7h1v2H9zM12 7h1v2h-1z"/>
        <path fill="#f87800" d="M4 14h3v1h1v1H4v-2zM9 14h3v1h1v1H9v-2z"/>
        <path fill="#fce0a8" d="M5 14h2v1H5zM10 14h2v1h-2z"/>
    </svg>`,

    // 8. Cogumelo 1-UP (Chance Dupla)
    oneup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="24" height="24" shape-rendering="crispEdges">
        <path fill="#000" d="M5 1h6v1h2v1h1v1h1v3h-1v1h-1v1h-1v3h-1v1H5v-1H4V9H3V8H2V7H1V4h1V3h1V2h2V1z"/>
        <path fill="#00a800" d="M5 2h6v1h1v1h1v3h-1V7h-1V6h-1V5H9v2h2v1h1v1h-2V8H6v1H4V8h1V7H3V6H2V5h1v1h1v1h1V5H4V4h1V3h1V2H5z"/>
        <path fill="#005800" d="M6 7h4v1H6zM4 8h2v1H4zM10 8h2v1h-2z"/>
        <path fill="#fff" d="M6 3h4v1h1v1h1v1h-2V5H9v2H7V5H6v1H4V6h1V5h1V4zM2 5h1v1h1v1H3V6H2V5zM13 5h1v1h-1v1h-1V6h1V5z"/>
        <path fill="#fce0a8" d="M5 9h6v1h2v2h-1v1H4v-1H3v-2h2V9z"/>
        <path fill="#000" d="M6 10h1v2H6v-2zM9 10h1v2H9v-2z"/>
    </svg>`,

    // 9. Super Star (Estrela / Duelo)
    star: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="24" height="24" shape-rendering="crispEdges">
        <path fill="#000" d="M7 1h2v2h2v2h3v2h-1v2h-1v2h2v2h-2v1h-2v-2H8v2H6v-1H4v-2H2v-2h2V9H3V7h3V5h2V3H7V1z"/>
        <path fill="#f8d800" d="M7 2h2v2h2v2h2v1h-1v2h-1v2h1v1h-2v-1H9v-1H7v1H6v1H4v-1h1v-2H4V9H3V7h2V6h2V4h1V2z"/>
        <path fill="#f8b800" d="M7 11h2v1H7zM5 12h1v1H5zM10 12h1v1h-1z"/>
        <path fill="#fff" d="M7 3h1v2H7zM8 5h1v1H8z"/>
        <path fill="#000" d="M6 6h1v3H6zM9 6h1v3H9z"/>
        <path fill="#fff" d="M6 6h1v1H6zM9 6h1v1H9z"/>
    </svg>`,

    // 10. Moeda Mario Gold (Pontuação)
    coin: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="24" height="24" shape-rendering="crispEdges">
        <path fill="#000" d="M6 1h4v1h2v2h1v8h-1v2h-2v1H6v-1H4v-2H3V4h1V2h2V1z"/>
        <path fill="#f8b800" d="M6 2h4v1h2v2h1v6h-1v2h-2v1H6v-1H4v-2H3V5h1V3h2V2z"/>
        <path fill="#fff080" d="M6 3h3v1H6zM4 5h2v6H4zM6 11h3v1H6z"/>
        <path fill="#fff" d="M6 3h2v1H6zM5 5h1v2H5z"/>
        <path fill="#b86800" d="M7 5h2v6H7zM10 5h1v6h-1z"/>
        <path fill="#000" d="M8 5h1v6H8z"/>
    </svg>`,

    // 11. Coroa da Vitória / Casa Coroa
    crown: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="24" height="24" shape-rendering="crispEdges">
        <path fill="#000" d="M2 3h2v2h1v2h2V5h2V3h2v2h1v2h2v5h-1v1H3v-1H2V3z"/>
        <path fill="#f8b800" d="M2 4h1v3h1v1h1V6h1V4h4v2h1v2h1V7h1V4h1v7H3V4z"/>
        <path fill="#ffe880" d="M2 4h1v2H2zM7 4h2v2H7zM13 4h1v2h-1zM3 10h10v1H3z"/>
        <path fill="#f82800" d="M7 7h2v2H7z"/>
        <path fill="#ff8080" d="M7 7h1v1H7z"/>
        <path fill="#0058f8" d="M3 7h1v2H3zM12 7h1v2h-1z"/>
        <path fill="#fff" d="M4 11h1v1H4zM7 11h2v1H7zM11 11h1v1h-1z"/>
    </svg>`,

    // 12. Troféu (Vencedor)
    trophy: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="24" height="24" shape-rendering="crispEdges">
        <path fill="#000" d="M4 1h8v1h1v1h2v3h-1v1h-1v1h-1V7h-1v2h-1v2h2v1h1v2H3v-2h1v-1h2V9H5V7H4v1H3V7H2V6H1V3h2V2h1V1z"/>
        <path fill="#f8b800" d="M5 2h6v5h-1v2H9v2h2v1H5v-1h2V9H6V7H5V2zM2 3h1v3H2V3zM13 3h1v3h-1V3z"/>
        <path fill="#fff080" d="M5 2h2v5H6V2zM5 13h6v1H5z"/>
        <path fill="#b86800" d="M9 2h2v5h-1V2z"/>
        <path fill="#884000" d="M4 14h8v1H4z"/>
    </svg>`,

    // 13. Bloco de Interrogação [?]
    block: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="24" height="24" shape-rendering="crispEdges">
        <path fill="#000" d="M0 0h16v16H0z"/>
        <path fill="#f8b800" d="M1 1h14v14H1z"/>
        <path fill="#fce0a8" d="M1 1h14v2H1zM1 1h2v14H1z"/>
        <path fill="#b86800" d="M1 13h14v2H1zM13 1h2v14h-2z"/>
        <path fill="#000" d="M2 2h2v2H2zM12 2h2v2h-2zM2 12h2v2H2zM12 12h2v2h-2z"/>
        <path fill="#fff" d="M2 2h1v1H2zM12 2h1v1h-1zM2 12h1v1H2zM12 12h1v1h-1z"/>
        <path fill="#000" d="M6 4h4v3H8v2H7V6h2V5H7v1H5V4h1zM7 10h2v2H7z"/>
        <path fill="#fff" d="M6 3h4v3H8v2H7V5h2V4H7v1H5V3h1zM7 9h2v2H7z"/>
    </svg>`,

    // 14. Engrenagem Retrô (Configurações)
    gear: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="24" height="24" shape-rendering="crispEdges">
        <path fill="#000" d="M6 1h4v2h1v1h2v2h-1v1h1v2h-2v1h-1v1h-2v2H6v-2H5v-1H3v-1h1V9H2V7h1V6H2V4h3V3h1V1z"/>
        <path fill="#f8b800" d="M6 2h4v1h1v2h2v2h-1v2h1v1h-2v1h-1v1H6v-1H5v-1H3V9h1V7H3V6h1V5h1V3h1V2z"/>
        <path fill="#fff080" d="M6 2h2v1H7v2h1V4h2v1H9v1h2v1h-1v2h1v1H9v-1H8v1H7v-1H6V9H5V8h1V7H4V6h2V5H5V3h1V2z"/>
        <path fill="#000" d="M7 7h2v2H7z"/>
    </svg>`,

    // 15. Pergaminho Retrô (Regras)
    scroll: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="24" height="24" shape-rendering="crispEdges">
        <path fill="#000" d="M4 1h8v1h1v1h1v9h-1v1h-1v1H3v-1H2V9h1V3h1V1z"/>
        <path fill="#fffbf0" d="M4 2h7v1h1v8h-1v1H4V2z"/>
        <path fill="#fce0a8" d="M3 3h1v8H3V3zM11 3h1v8h-1V3zM4 11h7v1H4v-1z"/>
        <path fill="#000" d="M5 4h5v1H5zM5 6h5v1H5zM5 8h4v1H5z"/>
    </svg>`,

    // 16. Livro de Questões (Banco)
    book: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="24" height="24" shape-rendering="crispEdges">
        <path fill="#000" d="M3 1h10v1h1v12H2V2h1V1z"/>
        <path fill="#0058f8" d="M3 2h9v11H3V2z"/>
        <path fill="#fff080" d="M7 4h2v3H7zM6 6h4v1H6z"/>
        <path fill="#fff" d="M12 3h1v10h-1V3z"/>
        <path fill="#b86800" d="M2 13h11v1H2z"/>
    </svg>`,

    // 17. Acerto Retrô (Check Verde)
    check: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="24" height="24" shape-rendering="crispEdges">
        <path fill="#000" d="M12 3h3v2h-1v2h-1v2h-1v2h-1v2h-1v1H7v-1H6v-2H5v-2H3V8h1V6h2v2h1v2h1v-2h1V6h1V4h1V3z"/>
        <path fill="#00e800" d="M12 4h2v1h-1v2h-1v2h-1v2h-1v1H8v-1H7v-2H6v-2H4V8h2v2h1v-1h1V7h1V5h1V4z"/>
    </svg>`,

    // 18. Erro Retrô (X Vermelho)
    cross: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="24" height="24" shape-rendering="crispEdges">
        <path fill="#000" d="M3 2h3v1h1v1h2V3h1V2h3v3h-1v1h-1v2h1v1h1v3h-3v-1h-1v-1H9v-1H7v1H6v1H5v1H2v-3h1v-1h1V8H3V7H2V4h1V2z"/>
        <path fill="#f82800" d="M3 3h2v1h1v1h1v1h2V5h1V4h1V3h2v2h-1v1h-1v1H9v2h1v1h1v1h1v2h-2v-1h-1v-1H9v-1H7v1H6v1H5v1H2v-3h1v-1h1V9H4V8H3V7H2V5h1V3z"/>
    </svg>`,

    // 19. Balança da Justiça (Livre Concorrência)
    law: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="24" height="24" shape-rendering="crispEdges">
        <path fill="#000" d="M7 1h2v1h1v1h4v1H9v9h2v2H5v-2h2V4H2V3h4V2h1V1z"/>
        <path fill="#f8b800" d="M7 2h2v2h1v1h3v1h-1v2h-1V7H9v5H7V7H6v1H5V6H4V5h3V2z"/>
        <path fill="#fff" d="M3 6h2v1H3V6zM11 6h2v1h-2V6z"/>
        <path fill="#0058f8" d="M2 7h4v1H2V7zM10 7h4v1h-4V7z"/>
    </svg>`,

    // 20. Fábrica / Empresa (Tratamento PMEs)
    pme: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="24" height="24" shape-rendering="crispEdges">
        <path fill="#000" d="M1 4h3v2h2V4h3v2h2V2h4v12H1V4z"/>
        <path fill="#00a800" d="M2 5h2v3H2V5zM5 5h2v3H5V5zM8 5h2v3H8V5zM11 3h3v10H2V9h12V3z"/>
        <path fill="#fff" d="M12 5h1v2h-1V5zM12 8h1v2h-1V8z"/>
        <path fill="#f8b800" d="M6 10h4v3H6v-3z"/>
    </svg>`,

    // 21. Selo Estrela Vermelha (Modelo China)
    china: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="24" height="24" shape-rendering="crispEdges">
        <path fill="#000" d="M2 1h12v14H2V1z"/>
        <path fill="#dc2626" d="M3 2h10v12H3V2z"/>
        <path fill="#f8b800" d="M8 4h1v1h1v1h-1v1h1v1H8V7H7v1H6V7h1V6H6V5h1V4h1z"/>
        <path fill="#fff" d="M8 5h1v1H8z"/>
    </svg>`,

    // 22. Brasão / Águia Ordoliberal (Ordem Alemanha)
    germany: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="24" height="24" shape-rendering="crispEdges">
        <path fill="#000" d="M2 2h12v7l-2 3-4 2-4-2-2-3V2z"/>
        <path fill="#f8b800" d="M3 3h10v6l-2 2-3 1-3-1-2-2V3z"/>
        <path fill="#000" d="M7 4h2v2H7V4zM5 5h1v3H5V5zM10 5h1v3h-1V5zM6 7h4v2H6V7zM7 9h2v2H7V9z"/>
        <path fill="#dc2626" d="M6 8h4v1H6V8z"/>
    </svg>`
};

/**
 * Retorna o código HTML do ícone solicitado ou ícone padrão.
 * Mapeia tanto nomes de personagens/itens ("mario", "bobomb") quanto emojis legados.
 */
function getMarioIcon(keyOrEmoji, size = 24, extraClass = "") {
    if (!keyOrEmoji) return "";

    const emojiMap = {
        "🍄": "mario",
        "⚡": "luigi",
        "⭐": "yoshi",
        "👑": "peach",
        "🦖": "bowser",
        "💣": "bobomb",
        "🟡": "coin",
        "🏆": "trophy",
        "⚖️": "law",
        "🏢": "pme",
        "🇨🇳": "china",
        "🇩🇪": "germany",
        "⚙️": "gear",
        "📜": "scroll",
        "📚": "book",
        "✅": "check",
        "❌": "cross"
    };

    const cleanKey = emojiMap[keyOrEmoji] || String(keyOrEmoji).toLowerCase().trim();
    const rawSvg = MARIO_ICONS[cleanKey] || MARIO_ICONS.block;

    const sizedSvg = rawSvg
        .replace(/width="\d+"/, `width="${size}"`)
        .replace(/height="\d+"/, `height="${size}"`);

    return `<span class="mario-icon-sprite ${extraClass}" style="display:inline-flex;align-items:center;justify-content:center;width:${size}px;height:${size}px;vertical-align:middle;line-height:1;">${sizedSvg}</span>`;
}

/**
 * Inicializa os seletores visuais de personagens e ícones estáticos no DOM.
 */
function initMarioAvatarPickers() {
    // 1. Seletores de avatar de bancadas
    document.querySelectorAll('.mario-avatar-picker').forEach(picker => {
        const targetId = picker.getAttribute('data-target');
        const hiddenInput = document.getElementById(targetId);
        const currentValue = hiddenInput ? (hiddenInput.value || 'mario') : 'mario';

        picker.querySelectorAll('.avatar-pick-btn').forEach(btn => {
            const avatar = btn.getAttribute('data-avatar');
            const iconSpan = btn.querySelector('.avatar-pick-icon');
            if (iconSpan) {
                iconSpan.innerHTML = getMarioIcon(avatar, 20);
            }

            if (avatar === currentValue) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }

            btn.onclick = (e) => {
                e.preventDefault();
                picker.querySelectorAll('.avatar-pick-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                if (hiddenInput) {
                    hiddenInput.value = avatar;
                }
                if (window.sounds && typeof window.sounds.playCoin === 'function') {
                    window.sounds.playCoin();
                }
            };
        });
    });

    // 2. Elementos com atributo data-mario-icon (ex: botões do header)
    document.querySelectorAll('[data-mario-icon]').forEach(el => {
        const iconKey = el.getAttribute('data-mario-icon');
        const size = parseInt(el.getAttribute('data-mario-size') || '16', 10);
        if (!el.querySelector('.mario-icon-sprite')) {
            const iconHtml = getMarioIcon(iconKey, size, 'mario-btn-icon');
            el.insertAdjacentHTML('afterbegin', iconHtml + ' ');
        }
    });

    // 3. Ícones heróicos nos modais (Coroa e Troféu de Vitória)
    const crownHero = document.getElementById('crown-hero-icon');
    if (crownHero) {
        crownHero.innerHTML = getMarioIcon('crown', 64);
    }
    const trophyHero = document.getElementById('victory-trophy-icon');
    if (trophyHero) {
        trophyHero.innerHTML = getMarioIcon('trophy', 72);
    }
}

/**
 * Sincroniza o estado dos botões com o valor dos inputs ocultos.
 */
function syncMarioAvatarPickers() {
    document.querySelectorAll('.mario-avatar-picker').forEach(picker => {
        const targetId = picker.getAttribute('data-target');
        const hiddenInput = document.getElementById(targetId);
        if (!hiddenInput) return;
        const currentValue = hiddenInput.value || 'mario';

        picker.querySelectorAll('.avatar-pick-btn').forEach(btn => {
            const avatar = btn.getAttribute('data-avatar');
            const iconSpan = btn.querySelector('.avatar-pick-icon');
            if (iconSpan && (!iconSpan.innerHTML || iconSpan.innerHTML.trim() === "")) {
                iconSpan.innerHTML = getMarioIcon(avatar, 20);
            }
            if (avatar === currentValue) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    });
}

window.MARIO_ICONS = MARIO_ICONS;
window.getMarioIcon = getMarioIcon;
window.initMarioAvatarPickers = initMarioAvatarPickers;
window.syncMarioAvatarPickers = syncMarioAvatarPickers;
