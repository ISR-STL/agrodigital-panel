// i18n.js
// Internationalization (i18n) engine – Agile, Scalable, Executive

const LANGUAGES = {
  en: {
    mainTitle: "Global ESG Investment Board",
    mainDesc: "Invest with trust. Earn with impact.",
    tokenSaleTitle: "Available Tokens",
    esgTitle: "Sustainability Board",
    esgDesc: "ESG impact in every investment. Responsible, global and innovative.",
    buyTokens: "Buy Tokens",
    verifyContracts: "Verify Smart Contracts",
    privacy: "All data is protected by LGPD and global privacy standards. Use exclusively for transaction and investor access. <b>Strict confidentiality. Trusted by global investors.</b>"
  },
  pt: {
    mainTitle: "Board Global de Investimento ESG",
    mainDesc: "Invista com confiança. Ganhe com impacto.",
    tokenSaleTitle: "Tokens Disponíveis",
    esgTitle: "Conselho de Sustentabilidade",
    esgDesc: "Impacto ESG em cada investimento. Responsável, global e inovador.",
    buyTokens: "Comprar Tokens",
    verifyContracts: "Verificar Smart Contracts",
    privacy: "Todos os dados são protegidos pela LGPD e padrões globais de privacidade. Uso exclusivo para transações e acesso do investidor. <b>Sigilo absoluto. Confiado por investidores globais.</b>"
  },
  es: {
    mainTitle: "Junta Global de Inversión ESG",
    mainDesc: "Invierte con confianza. Gana con impacto.",
    tokenSaleTitle: "Tokens Disponibles",
    esgTitle: "Junta de Sostenibilidad",
    esgDesc: "Impacto ESG en cada inversión. Responsable, global e innovador.",
    buyTokens: "Comprar Tokens",
    verifyContracts: "Verificar Smart Contracts",
    privacy: "Todos los datos están protegidos por la LGPD y los estándares globales de privacidad. Uso exclusivo para transacciones y acceso de inversores. <b>Confidencialidad absoluta. Confiado por inversores globales.</b>"
  },
  ru: {
    mainTitle: "Глобальный ESG Инвестиционный Совет",
    mainDesc: "Инвестируйте с доверием. Зарабатывайте с эффектом.",
    tokenSaleTitle: "Доступные Токены",
    esgTitle: "Совет по устойчивому развитию",
    esgDesc: "Влияние ESG в каждом вложении. Ответственно, глобально и инновационно.",
    buyTokens: "Купить токены",
    verifyContracts: "Проверить Smart Contracts",
    privacy: "Все данные защищены LGPD и мировыми стандартами конфиденциальности. Использование исключительно для транзакций и доступа инвесторов. <b>Абсолютная конфиденциальность. Доверие мировых инвесторов.</b>"
  },
  ja: {
    mainTitle: "グローバルESG投資ボード",
    mainDesc: "信頼して投資し、インパクトで稼ぐ。",
    tokenSaleTitle: "利用可能なトークン",
    esgTitle: "サステナビリティボード",
    esgDesc: "すべての投資にESGインパクト。責任・グローバル・革新。",
    buyTokens: "トークンを購入",
    verifyContracts: "スマートコントラクトを確認",
    privacy: "すべてのデータはLGPDおよび世界的なプライバシー基準で保護されています。トランザクションと投資家アクセスのみに使用。<b>厳格な機密性。世界の投資家に信頼されています。</b>"
  },
  cn: {
    mainTitle: "全球ESG投资董事会",
    mainDesc: "信任投资。影响收益。",
    tokenSaleTitle: "可用代币",
    esgTitle: "可持续发展委员会",
    esgDesc: "每一笔投资都具有ESG影响。负责任、全球化和创新。",
    buyTokens: "购买代币",
    verifyContracts: "验证智能合约",
    privacy: "所有数据均受LGPD和全球隐私标准保护。仅供交易和投资者访问。<b>严格保密。深受全球投资者信赖。</b>"
  }
};

function setLang(lang) {
  const L = LANGUAGES[lang] || LANGUAGES.en;
  document.getElementById('mainTitle').innerHTML = L.mainTitle;
  document.getElementById('mainDesc').innerHTML = L.mainDesc;
  document.getElementById('tokenSaleTitle').innerHTML = L.tokenSaleTitle;
  document.getElementById('esgTitle').innerHTML = L.esgTitle;
  document.getElementById('esgDesc').innerHTML = L.esgDesc;
  document.querySelector('button.btn-success').innerHTML = L.buyTokens;
  document.querySelector('button.btn-outline-info').innerHTML = L.verifyContracts;
  document.querySelector('.alert-info').innerHTML = `<i class="bi bi-shield-lock"></i> ${L.privacy}`;
}

// Detectar e aplicar idioma do navegador ao carregar
document.addEventListener("DOMContentLoaded", function () {
  let userLang = (navigator.language || navigator.userLanguage || "en").substring(0,2);
  if (!LANGUAGES[userLang]) userLang = "en";
  setLang(userLang);
  document.getElementById("currentLang").innerText = userLang.toUpperCase();
});
