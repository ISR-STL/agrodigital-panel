window.i18n = function(lang) {
  // Dicionário ultra-simplificado
  const t = {
    en: {
      mainTitle: "Global ESG Investment Board",
      mainDesc: "Invest with trust. Earn with impact.",
      tokenSaleTitle: "Available Tokens",
      esgTitle: "Sustainability Board",
      esgDesc: "ESG impact in every investment. Responsible, global and innovative."
    },
    pt: {
      mainTitle: "Conselho Global de Investimento ESG",
      mainDesc: "Invista com confiança. Ganhe com impacto.",
      tokenSaleTitle: "Tokens Disponíveis",
      esgTitle: "Conselho de Sustentabilidade",
      esgDesc: "Impacto ESG em cada investimento. Responsável, global e inovador."
    },
    es: {
      mainTitle: "Consejo Global de Inversión ESG",
      mainDesc: "Invierte con confianza. Gana con impacto.",
      tokenSaleTitle: "Tokens Disponibles",
      esgTitle: "Consejo de Sostenibilidad",
      esgDesc: "Impacto ESG en cada inversión. Responsable, global e innovador."
    },
    ru: {
      mainTitle: "Глобальный ESG-инвестиционный совет",
      mainDesc: "Инвестируйте с доверием. Зарабатывайте с пользой.",
      tokenSaleTitle: "Доступные токены",
      esgTitle: "Совет по устойчивому развитию",
      esgDesc: "ESG-эффект в каждой инвестиции. Ответственно, глобально, инновационно."
    },
    ja: {
      mainTitle: "グローバルESG投資ボード",
      mainDesc: "信頼で投資、インパクトで収益。",
      tokenSaleTitle: "利用可能なトークン",
      esgTitle: "サステナビリティボード",
      esgDesc: "すべての投資にESGの影響。責任ある、グローバル、革新的。"
    },
    cn: {
      mainTitle: "全球ESG投资委员会",
      mainDesc: "信任投资，收获影响力。",
      tokenSaleTitle: "可用代币",
      esgTitle: "可持续发展委员会",
      esgDesc: "每一项投资皆具ESG影响。责任、全球、创新。"
    }
  }[lang||'en'];
  if(!t) return;
  for (let k in t) {
    let el = document.getElementById(k);
    if (el) el.innerText = t[k];
  }
};
