// i18n.js – Minimalista, expansível, preparado para API
const LANGS = ['en', 'pt', 'es', 'ja', 'cn', 'ru'];

const translations = {
  en: {
    mainTitle: "Global ESG Investment Board",
    mainDesc: "Invest with trust. Earn with impact.",
    tokenSaleTitle: "Available Tokens",
    esgTitle: "Sustainability Board",
    esgDesc: "ESG impact in every investment. Responsible, global and innovative.",
    currentLang: "EN"
  },
  pt: {
    mainTitle: "Conselho Global de Investimentos ESG",
    mainDesc: "Invista com confiança. Ganhe com impacto.",
    tokenSaleTitle: "Tokens Disponíveis",
    esgTitle: "Conselho de Sustentabilidade",
    esgDesc: "Impacto ESG em cada investimento. Responsável, global e inovador.",
    currentLang: "PT"
  },
  es: {
    mainTitle: "Junta Global de Inversiones ESG",
    mainDesc: "Invierte con confianza. Gana con impacto.",
    tokenSaleTitle: "Tokens Disponibles",
    esgTitle: "Consejo de Sostenibilidad",
    esgDesc: "Impacto ESG en cada inversión. Responsable, global e innovador.",
    currentLang: "ES"
  },
  ja: {
    mainTitle: "グローバルESG投資ボード",
    mainDesc: "信頼して投資し、インパクトで稼ぐ。",
    tokenSaleTitle: "利用可能なトークン",
    esgTitle: "サステナビリティ委員会",
    esgDesc: "すべての投資でESGの影響。責任感、グローバル、革新的。",
    currentLang: "JA"
  },
  cn: {
    mainTitle: "全球ESG投资委员会",
    mainDesc: "信任投资，收获影响力。",
    tokenSaleTitle: "可用代币",
    esgTitle: "可持续发展委员会",
    esgDesc: "每项投资均具备ESG影响。负责、全球、创新。",
    currentLang: "CN"
  },
  ru: {
    mainTitle: "Глобальный ESG инвестиционный совет",
    mainDesc: "Инвестируйте с доверием. Зарабатывайте с воздействием.",
    tokenSaleTitle: "Доступные токены",
    esgTitle: "Совет по устойчивому развитию",
    esgDesc: "ESG-эффект в каждом инвестиции. Ответственно, глобально, инновационно.",
    currentLang: "RU"
  }
};

let currentLang = 'en';

function changeLang(lang) {
  if (!LANGS.includes(lang)) lang = 'en';
  currentLang = lang;
  document.getElementById('mainTitle').innerText = translations[lang].mainTitle;
  document.getElementById('mainDesc').innerText = translations[lang].mainDesc;
  document.getElementById('tokenSaleTitle').innerText = translations[lang].tokenSaleTitle;
  document.getElementById('esgTitle').innerText = translations[lang].esgTitle;
  document.getElementById('esgDesc').innerText = translations[lang].esgDesc;
  document.getElementById('currentLang').innerText = translations[lang].currentLang;
  // Opcional: salvar preferencia no localStorage
  localStorage.setItem('lang', lang);
}

// On load, set idioma default
window.addEventListener('DOMContentLoaded', function () {
  let savedLang = localStorage.getItem('lang');
  if (!LANGS.includes(savedLang)) savedLang = 'en';
  changeLang(savedLang);
});
