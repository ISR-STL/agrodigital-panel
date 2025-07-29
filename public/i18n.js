// Inicialização do i18next
i18next.init({
  lng: 'en',
  fallbackLng: 'en',
  debug: false,
  resources: {
    en: {
      translation: {
        mainTitle: "Welcome to AgroDigital5.0™️",
        mainDesc: "Secure, Global & ESG Certified Token Sales",
        tokenSaleTitle: "Buy Tokens",
        walletBtn: "Connect Wallet",
        buyTokenBtn: "Buy",
        donateNFTBtn: "Donate & Get NFT",
        metricsTitle: "Live Metrics",
        esgTitle: "ESG Impact",
        esgDesc: "Automatic donation to green causes for every sale",
        governanceTitle: "Governance",
        governanceDesc: "On-chain DAO, voting and real-time auditing",
        partnersTitle: "Partners & VIP",
        partnersDesc: "VIP area and exclusive perks for major investors"
      }
    },
    pt: {
      translation: {
        mainTitle: "Bem-vindo à AgroDigital5.0™️",
        mainDesc: "Vendas de Token Seguras, Globais e Certificadas ESG",
        tokenSaleTitle: "Comprar Tokens",
        walletBtn: "Conectar Carteira",
        buyTokenBtn: "Comprar",
        donateNFTBtn: "Doar & Ganhar NFT",
        metricsTitle: "Métricas em Tempo Real",
        esgTitle: "Impacto ESG",
        esgDesc: "Doação automática para causas verdes em cada venda",
        governanceTitle: "Governança",
        governanceDesc: "DAO on-chain, votação e auditoria em tempo real",
        partnersTitle: "Parceiros & VIP",
        partnersDesc: "Área VIP e benefícios exclusivos para grandes investidores"
      }
    },
    es: {
      translation: {
        mainTitle: "Bienvenido a AgroDigital5.0™️",
        mainDesc: "Ventas de tokens seguras, globales y certificadas ESG",
        tokenSaleTitle: "Comprar Tokens",
        walletBtn: "Conectar Cartera",
        buyTokenBtn: "Comprar",
        donateNFTBtn: "Donar y Obtener NFT",
        metricsTitle: "Métricas en Vivo",
        esgTitle: "Impacto ESG",
        esgDesc: "Donación automática a causas verdes por cada venta",
        governanceTitle: "Gobernanza",
        governanceDesc: "DAO en cadena, votación y auditoría en tiempo real",
        partnersTitle: "Socios y VIP",
        partnersDesc: "Área VIP y beneficios exclusivos para grandes inversores"
      }
    }
  }
}, function() {
  updateContent();
});

// Atualiza os textos no DOM conforme o idioma
function updateContent() {
  document.getElementById("mainTitle").innerText = i18next.t("mainTitle");
  document.getElementById("mainDesc").innerText = i18next.t("mainDesc");
  document.getElementById("tokenSaleTitle").innerText = i18next.t("tokenSaleTitle");
  document.getElementById("walletBtn").innerText = i18next.t("walletBtn");
  document.getElementById("buyTokenBtn").innerText = i18next.t("buyTokenBtn");
  document.getElementById("donateNFTBtn").innerText = i18next.t("donateNFTBtn");
  document.getElementById("metricsTitle").innerText = i18next.t("metricsTitle");
  document.getElementById("esgTitle").innerText = i18next.t("esgTitle");
  document.getElementById("esgDesc").innerText = i18next.t("esgDesc");
  document.getElementById("governanceTitle").innerText = i18next.t("governanceTitle");
  document.getElementById("governanceDesc").innerText = i18next.t("governanceDesc");
  document.getElementById("partnersTitle").innerText = i18next.t("partnersTitle");
  document.getElementById("partnersDesc").innerText = i18next.t("partnersDesc");
}

// Função para troca de idioma via dropdown
function changeLang(lang) {
  i18next.changeLanguage(lang, updateContent);
  document.getElementById("currentLang").innerText = lang.toUpperCase();
}
window.changeLang = changeLang;
