// ===== IA CAEL - Simulação Executiva =====

// Responde comandos do assistente cliente
function sendIACommand() {
  const command = document.getElementById('iaCommand').value;
  if (!command) return;
  // Simulação – em produção, integre com OpenAI API/Telegram
  let resposta;
  if (/token|compra|buy/i.test(command)) {
    resposta = "Para comprar tokens, conecte sua wallet e clique no botão BUY.";
  } else if (/nft/i.test(command)) {
    resposta = "Nossos NFTs ESG são únicos. Clique em 'Donate & Get NFT' após conectar sua wallet!";
  } else if (/admin|painel|dashboard/i.test(command)) {
    resposta = "Para acessar o painel administrativo, clique em ADMIN no menu superior.";
  } else if (/market|parceiro|partner/i.test(command)) {
    resposta = "Na área Marketplace, parceiros podem listar e negociar ativos diretamente.";
  } else if (/telegram/i.test(command)) {
    resposta = "Nosso Telegram está integrado ao bot: @SeuBotTelegram. Entre em contato!";
  } else if (/idioma|lang|language/i.test(command)) {
    resposta = "Para trocar de idioma, use o botão de tradução no topo do site.";
  } else {
    resposta = "Em breve, Cael responderá com IA avançada e integrações OpenAI!";
  }
  document.getElementById('iaResponse').innerText = resposta;
  document.getElementById('iaCommand').value = "";
}

// Responde comandos do painel ADMIN
function sendAdminIACommand() {
  const command = document.getElementById('adminIACommand').value;
  if (!command) return;
  let resposta;
  if (/relatório|report/i.test(command)) {
    resposta = "Relatório executivo: Tokens vendidos, volume marketplace e receita ESG atualizados no dashboard.";
  } else if (/alerta|alert/i.test(command)) {
    resposta = "Alerta gerado! Todos os administradores foram notificados por e-mail e Telegram.";
  } else if (/partner|parceiro/i.test(command)) {
    resposta = "Novos parceiros podem ser cadastrados na área de parceiros.";
  } else if (/segurança|security/i.test(command)) {
    resposta = "Painel protegido por senha, FaceID em desenvolvimento, logs e API protegidos.";
  } else if (/openai|api/i.test(command)) {
    resposta = "A integração OpenAI está preparada, basta inserir sua API Key para ativar respostas dinâmicas!";
  } else {
    resposta = "Admin AI: Módulo avançado de IA e automação para multinacional – upgrades em andamento.";
  }
  document.getElementById('adminIAResponse').innerText = resposta;
  document.getElementById('adminIACommand').value = "";
}

// Futura integração OpenAI:
// async function sendIACommand() {
//   // Use fetch/axios para POST na API do OpenAI, retornando resposta dinâmica
// }

