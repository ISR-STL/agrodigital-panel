i18next.init({
  lng: 'en',
  debug: true,
  resources: {
    en: {
      translation: {
        mainTitle: "Welcome to AgroDigital5.0™",
        walletBtn: "Connect Wallet",
        buyTokenBtn: "Buy"
      }
    },
    pt: {
      translation: {
        mainTitle: "Bem-vindo à AgroDigital5.0™",
        walletBtn: "Conectar Carteira",
        buyTokenBtn: "Comprar"
      }
    }
  }
}, function() {
  updateContent();
});

function updateContent() {
  document.getElementById("mainTitle").innerText = i18next.t("mainTitle");
  document.getElementById("walletBtn").innerText = i18next.t("walletBtn");
  document.getElementById("buyTokenBtn").innerText = i18next.t("buyTokenBtn");
}
