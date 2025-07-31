// i18n.js – Multilíngue plugável, preparado para GPT/OpenAI auto-update
const translations = {
  en: {
    "menu.home": "Home",
    "menu.invest": "Invest",
    "menu.tokens": "Tokens",
    "menu.presale": "Pre-sale",
    "menu.farming": "Farming",
    "menu.esg": "ESG",
    "menu.impact": "Impact",
    "menu.sustainability_seal": "Sustainability Seal",
    "menu.compliance": "Compliance",
    "menu.marketplace": "Marketplace",
    "menu.nfts": "NFTs",
    "menu.investtokens": "InvestTokens",
    "menu.pulseplay": "PulsePlay",
    "menu.vip": "VIP Club",
    "menu.about": "About",
    "menu.contact": "Contact",
    "menu.bscscan": "BscScan / Token Data",
    "main.title": "Global ESG Investment Board",
    "main.desc": "Invest with trust. Earn with impact.",
    "main.buyTokens": "Buy Tokens",
    "main.verifyContracts": "Verify Smart Contracts",
    "main.marketTrend": "Market Trend",
    "main.sustainability": "Sustainability Board",
    "main.sustainabilityDesc": "ESG impact in every investment. Responsible, global and innovative.",
    "main.lgpdMsg": "All data is protected by LGPD and global privacy standards. Use exclusively for transaction and investor access. <b>Strict confidentiality. Trusted by global investors.</b>",
    "main.tokenContracts": "Token Contracts & BscScan",
    "main.viewOnBscscan": "View on BscScan",
    "main.contractDetailsMsg": "After registration/login, Board can consult advanced technical details.",
    "main.loginAlert": "To buy tokens, please login or register.",
  },
  pt: {
    "menu.home": "Início",
    "menu.invest": "Investir",
    "menu.tokens": "Tokens",
    "menu.presale": "Pré-venda",
    "menu.farming": "Farming",
    "menu.esg": "ESG",
    "menu.impact": "Impacto",
    "menu.sustainability_seal": "Selo Sustentabilidade",
    "menu.compliance": "Compliance",
    "menu.marketplace": "Marketplace",
    "menu.nfts": "NFTs",
    "menu.investtokens": "InvestTokens",
    "menu.pulseplay": "PulsePlay",
    "menu.vip": "Clube VIP",
    "menu.about": "Sobre",
    "menu.contact": "Contato",
    "menu.bscscan": "BscScan / Dados do Token",
    "main.title": "Conselho Global de Investimento ESG",
    "main.desc": "Invista com confiança. Ganhe com impacto.",
    "main.buyTokens": "Comprar Tokens",
    "main.verifyContracts": "Verificar Contratos Inteligentes",
    "main.marketTrend": "Tendência de Mercado",
    "main.sustainability": "Conselho ESG",
    "main.sustainabilityDesc": "Impacto ESG em cada investimento. Responsável, global e inovador.",
    "main.lgpdMsg": "Todos os dados protegidos pela LGPD e normas globais de privacidade. Uso exclusivo para transações e acesso de investidores. <b>Confidencialidade total. Confiado por investidores globais.</b>",
    "main.tokenContracts": "Contratos dos Tokens & BscScan",
    "main.viewOnBscscan": "Ver no BscScan",
    "main.contractDetailsMsg": "Após cadastro/login, Board pode consultar detalhes técnicos avançados.",
    "main.loginAlert": "Para comprar tokens, faça login ou registre-se.",
  },
  // ... Adicione outros idiomas: es, ru, ja, cn, etc.
};

// Troca idioma global (executivo)
window.i18nSetLang = function(lang) {
  document.getElementById('currentLang').innerText = lang.toUpperCase();
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    let value = (translations[lang] && translations[lang][key]) || translations['en'][key] || el.innerHTML;
    if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") el.placeholder = value;
    else el.innerHTML = value;
  });
  localStorage.setItem('lang', lang);
};
// Função para traduzir texto via js
window.i18n = function(key) {
  var lang = localStorage.getItem('lang') || 'en';
  return (translations[lang] && translations[lang][key]) || translations['en'][key] || key;
};
