// app.js
// AgroDigital5.0 – Board Automations & Investor Experience

// ======== Internationalization
window.changeLang = function (lang) {
  setLang(lang);
  document.getElementById("currentLang").innerText = lang.toUpperCase();
};

// ======== MetaMask Integration
window.connectWallet = async function() {
  if (typeof window.ethereum === 'undefined') {
    alert('MetaMask or compatible wallet not found. Please install.');
    return;
  }
  try {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    alert('Wallet connected: ' + accounts[0]);
    // Futuro: exibir endereço no painel, liberar funções VIP, etc.
  } catch (err) {
    alert('Wallet connection denied.');
  }
};

// ======== BscScan Direct Link (Tokens & Contracts)
window.openBscScan = function(address) {
  window.open('https://bscscan.com/address/' + address, '_blank');
};

// ======== Stealth Admin Button
document.addEventListener("DOMContentLoaded", function () {
  // Foco automático no botão de admin (acessível só pra Board)
  document.getElementById("adminStealth").addEventListener("click", function(e){
    // Futuro: autenticação, FaceID, etc
    // Por enquanto, só redireciona
  });
});
