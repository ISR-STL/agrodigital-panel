// =========================
// AgroDigital5.0™ - app.js
// =========================

// Simulação de conexão Web3 (ethers.js)
async function connectWallet() {
  if (window.ethereum) {
    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      document.getElementById('walletAddress').innerText = '🟢 Connected: ' + accounts[0];
    } catch (err) {
      alert('🛑 Connection rejected.');
    }
  } else {
    alert('⚠️ MetaMask not found.');
  }
}

// Simulação de compra de tokens
function buyToken() {
  alert('✅ Token purchase simulated. Integrate smart contract here.');
}

// Simulação de doação + NFT
function donateAmazonNFT() {
  alert('🎁 NFT Donation confirmed! You’ll receive an Amazon NFT soon.');
}

// IA Cael Toggle
function toggleIA() {
  const box = document.getElementById('iaBox');
  box.style.display = box.style.display === 'none' ? 'block' : 'none';
}

// IA Cael Resposta
function sendIACommand() {
  const input = document.getElementById('iaCommand').value;
  const output = document.getElementById('iaResponse');
  output.innerHTML = `<i>Cael is thinking...</i>`;
  setTimeout(() => {
    output.innerHTML = `<b>Cael:</b> "${input}" processed. Full AI logic coming soon. 🚀`;
  }, 1500);
}

// Gráfico de Métricas (simulado)
const chart = new Chart(document.getElementById('cryptoChart'), {
  type: 'bar',
  data: {
    labels: ['Goal', 'Sold', 'Remaining'],
    datasets: [{
      label: 'Tokens (milhões)',
      data: [6, 2.5, 3.5],
      backgroundColor: ['#0d6efd', '#198754', '#ffc107']
    }]
  },
  options: {
    responsive: true,
    plugins: { legend: { display: false } }
  }
});

// Atualização ao vivo
document.getElementById('realTimeStatus').innerHTML = `
  <p><strong>Total Sold:</strong> 2,582,000 PX</p>
  <p><strong>Raised:</strong> $342,100 USD</p>
  <p><strong>Last Transaction:</strong> 0xAB...93e7</p>
`;

// Troca de idioma
function changeLang(lang) {
  const current = document.getElementById('currentLang');
  if (lang === 'pt') {
    current.innerText = 'PT';
    document.getElementById('mainTitle').innerText = 'Bem-vindo à AgroDigital5.0™';
    document.getElementById('mainDesc').innerText = 'Venda de Tokens Segura, Global e ESG';
    document.getElementById('tokenSaleTitle').innerText = 'Comprar Tokens';
    document.getElementById('walletBtn').innerText = 'Conectar Carteira';
    document.getElementById('buyTokenBtn').innerText = 'Comprar';
    document.getElementById('donateNFTBtn').innerText = 'Doar & NFT';
    document.getElementById('metricsTitle').innerText = 'Métricas em Tempo Real';
    document.getElementById('esgTitle').innerText = 'Impacto ESG';
    document.getElementById('esgDesc').innerText = 'Doação automática para causas verdes a cada venda';
    document.getElementById('governanceTitle').innerText = 'Governança';
    document.getElementById('governanceDesc').innerText = 'DAO on-chain, votação e auditoria em tempo real';
    document.getElementById('partnersTitle').innerText = 'Parceiros & VIP';
    document.getElementById('partnersDesc').innerText = 'Área VIP e benefícios exclusivos';
  } else if (lang === 'es') {
    current.innerText = 'ES';
    document.getElementById('mainTitle').innerText = 'Bienvenido a AgroDigital5.0™';
    document.getElementById('mainDesc').innerText = 'Venta de Tokens Segura, Global y ESG';
    // Outras traduções podem ser adicionadas
  } else {
    current.innerText = 'EN';
    location.reload(); // Recarrega o texto padrão em inglês
  }
}

// Autodetecção inicial de idioma
const userLang = navigator.language || navigator.userLanguage;
if (userLang.startsWith('pt')) changeLang('pt');
else if (userLang.startsWith('es')) changeLang('es');
else changeLang('en');
