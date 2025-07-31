// app.js
// Integração de Wallet, Interações, Segurança e IA Lite para AgroDigital5.0™

document.addEventListener("DOMContentLoaded", function () {
  // Wallet Connect Simples (Metamask)
  window.connectWallet = async function () {
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        alert("Wallet connected: " + accounts[0]);
      } catch (err) {
        alert("Wallet connection failed.");
      }
    } else {
      alert("MetaMask not detected. Please install.");
    }
  };

  // Troca de idioma (padrão i18n.js)
  window.changeLang = function(lang) {
    if (typeof setLang === "function") setLang(lang);
    document.getElementById("currentLang").innerText = lang.toUpperCase();
  };

  // Exemplo de automação: atualização fake de acessos (painel admin)
  if (document.getElementById('access-count')) {
    setTimeout(() => {
      document.getElementById('access-count').innerText = "2,317";
      document.getElementById('investor-count').innerText = "381";
      document.getElementById('top-search').innerText = "SoByenToken";
    }, 1200);
  }

  // Botão Privacy (simulação)
  const btnPrivacy = document.querySelector('.manage-privacy');
  if (btnPrivacy) {
    btnPrivacy.onclick = () => alert('All data handled in compliance with LGPD and GDPR. Your privacy is our priority.');
  }
});

// Exemplo IA Lite (mensagem proativa)
setTimeout(() => {
  if (window.location.pathname.endsWith('index.html')) {
    const msg = document.createElement('div');
    msg.style.position = 'fixed';
    msg.style.bottom = '25px';
    msg.style.right = '25px';
    msg.style.background = '#222';
    msg.style.color = '#fff';
    msg.style.padding = '16px 24px';
    msg.style.borderRadius = '16px';
    msg.style.zIndex = 9999;
    msg.style.boxShadow = '0 1px 8px #00c6ff99';
    msg.innerHTML = "<b>AgroDigital5.0™ Board:</b> <br>Ready to invest with global impact? <span style='color:#65c948'>Buy your token now!</span>";
    document.body.appendChild(msg);
    setTimeout(() => { msg.remove(); }, 8500);
  }
}, 3000);
