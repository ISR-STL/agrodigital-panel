// Versão AgroDigital5.0™ – by Cael //

// ==== 1. CONEXÃO COM CARTEIRA ====
async function connectWallet() {
  if (typeof window.ethereum !== 'undefined') {
    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      document.getElementById('walletAddress').innerText = `✅ Connected: ${accounts[0]}`;
    } catch (err) {
      alert("❌ Wallet connection rejected.");
    }
  } else {
    alert("❌ MetaMask not installed.");
  }
}

// ==== 2. COMPRAR TOKEN ====
async function buyToken() {
  alert("✅ Token purchased (demo). Smart contract integration pending.");
  // Em breve: integração com contrato via ethers.js
}

// ==== 3. DOAÇÃO E NFT ====
function donateAmazonNFT() {
  alert("🌱 Thank you! You will receive an Amazon NFT soon.");
  // Em breve: mint real via contrato NFT
}

// ==== 4. MUDAR IDIOMA ====
function changeLang(lang) {
  i18next.changeLanguage(lang).then(() => {
    document.getElementById('currentLang').innerText = lang.toUpperCase();
    // Tradução dinâmica (opcional) de textos aqui com i18next.t()
  });
}

// ==== 5. SUPORTE IA ====
function toggleIA() {
  const iaBox = document.getElementById("iaBox");
  iaBox.style.display = iaBox.style.display === "none" ? "block" : "none";
}

function sendIACommand() {
  const input = document.getElementById("iaCommand").value.trim();
  if (!input) return;
  const output = `🤖 Cael: "${input}"\n👉 Análise iniciada... resposta em breve!`;
  document.getElementById("iaResponse").innerText = output;
  // Pode futuramente enviar para API backend ou IA local
}

// ==== 6. GRÁFICO DE PREÇO ====
window.addEventListener("DOMContentLoaded", () => {
  const ctx = document.getElementById('cryptoChart').getContext('2d');
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
      datasets: [{
        label: 'PX / AGD Token',
        data: [0.22, 0.33, 0.45, 0.58],
        borderWidth: 2,
        tension: 0.4
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: { beginAtZero: true }
      }
    }
  });
});
// Função de login admin
function openAdmin() {
  const senha = prompt("Digite a senha de acesso:");
  // Lista de senhas de administradores (permite múltiplos admins)
  const adminPasswords = ["Agro@2025!", "OutroAdmin123"]; // Inclua outras senhas se quiser

  // Check sem espaços e case sensitive
  if (adminPasswords.includes(senha)) {
    // Sucesso: redireciona para o painel admin (ajuste o caminho se necessário)
    window.location.href = "/admin-panel.html";
  } else {
    alert("Acesso negado.");
  }
}
