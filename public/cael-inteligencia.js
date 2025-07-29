// =============================
// AgroDigital5.0™ – IA Cael
// cael-inteligencia.js
// =============================

// Simulações de respostas da IA Cael com base em palavras-chave
function sendIACommand() {
  const input = document.getElementById('iaCommand').value.toLowerCase().trim();
  const output = document.getElementById('iaResponse');

  if (!input) {
    output.innerHTML = `<i>⚠️ Por favor, digite algo para que a IA Cael possa responder.</i>`;
    return;
  }

  output.innerHTML = `<i>🤖 Cael está analisando sua pergunta...</i>`;

  setTimeout(() => {
    let response = '';

    if (input.includes('token') || input.includes('comprar')) {
      response = 'Você pode comprar tokens clicando no botão "Buy". A carteira precisa estar conectada.';
    } else if (input.includes('meta') || input.includes('objetivo')) {
      response = 'Nosso objetivo é arrecadar US$ 1.000.000,00 na fase atual de pré-venda com impacto ESG.';
    } else if (input.includes('nft')) {
      response = 'Os NFTs são gerados automaticamente após sua doação. Clique em "Donate & Get NFT".';
    } else if (input.includes('ajuda') || input.includes('suporte')) {
      response = 'Estou aqui para te ajudar! Você pode perguntar sobre tokens, NFTs, métricas ou roadmap.';
    } else if (input.includes('governança') || input.includes('dao')) {
      response = 'A governança será 100% on-chain, com votação aberta para holders após o lançamento completo.';
    } else {
      response = `Ainda estou aprendendo sobre isso. Em breve responderei com dados ao vivo. ✅`;
    }

    output.innerHTML = `<b>🧠 Cael:</b> ${response}`;
  }, 1200);
}
