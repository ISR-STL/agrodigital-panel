// ==== Multi-idioma (EN/PT/ES) AgroDigital 5.0 ====

const translations = {
  en: {
    mainTitle: "Welcome to AgroDigital5.0™",
    mainDesc: "Secure, Global & ESG Certified Token Sales",
    tokenSaleTitle: "Buy Tokens",
    walletBtn: "Connect Wallet",
    buyTokenBtn: "Buy",
    donateNFTBtn: "Donate & Get NFT",
    metricsTitle: "Live Metrics",
    esgTitle: "ESG Impact",
    esgDesc: "Automatic donation to green causes for every sale.",
    governanceTitle: "Governance",
    governanceDesc: "On-chain DAO, voting, and real-time auditing.",
    partnersTitle: "Partners & VIP",
    partnersDesc: "VIP area and exclusive perks for major investors.",
    bscscanBtn: "Verify on BscScan"
  },
  pt: {
    mainTitle: "Bem-vindo à AgroDigital5.0™",
    mainDesc: "Vendas de tokens seguras, globais e ESG certificadas",
    tokenSaleTitle: "Comprar Tokens",
    walletBtn: "Conectar Carteira",
    buyTokenBtn: "Comprar",
    donateNFTBtn: "Doar & Receber NFT",
    metricsTitle: "Métricas em Tempo Real",
    esgTitle: "Impacto ESG",
    esgDesc: "Doação automática para causas verdes a cada venda.",
    governanceTitle: "Governança",
    governanceDesc: "DAO on-chain, votação e auditoria em tempo real.",
    partnersTitle: "Parceiros & VIP",
    partnersDesc: "Área VIP e benefícios exclusivos para grandes investidores.",
    bscscanBtn: "Verificar na BscScan"
  },
  es: {
    mainTitle: "Bienvenido a AgroDigital5.0™",
    mainDesc: "Ventas de tokens seguras, globales y certificadas ESG",
    tokenSaleTitle: "Comprar Tokens",
    walletBtn: "Conectar Cartera",
    buyTokenBtn: "Comprar",
    donateNFTBtn: "Donar y Recibir NFT",
    metricsTitle: "Métricas en Vivo",
    esgTitle: "Impacto ESG",
    esgDesc: "Donación automática a causas verdes en cada venta.",
    governanceTitle: "Gobernanza",
    governanceDesc: "DAO on-chain, votación y auditoría en tiempo real.",
    partnersTitle: "Socios & VIP",
    partnersDesc: "Área VIP y beneficios exclusivos para grandes inversores.",
    bscscanBtn: "Verificar en BscScan"
  }
};

function setLang(lang) {
  const t = translations[lang] || translations['en'];
  for (const key in t) {
    const el = document.getElementById(key);
    if (el) el.innerText = t[key];
  }
  // Atualizar botão/label (caso tenha customização)
  if (document.getElementById("currentLang")) {
    document.getElementById("currentLang").innerText = lang.toUpperCase();
  }
  localStorage.setItem('lang', lang);
}

function changeLang(lang) {
  setLang(lang);
}

document.addEventListener('DOMContentLoaded', () => {
  let lang = localStorage.getItem('lang') || 'en';
  setLang(lang);
});

// Exemplo de chamada no botão:
// <button onclick="changeLang('pt')">PT</button>
