// Idiomas e troca dinâmica
const resources = {
  en: {
    translation: {
      "mainTitle": "Welcome to AgroDigital5.0™",
      "mainDesc": "Secure, Global & ESG Certified Token Sales",
      "tokenSaleTitle": "Buy Tokens",
      "walletBtn": "Connect Wallet",
      "buyTokenBtn": "Buy",
      "donateNFTBtn": "Donate & Get NFT",
      "metricsTitle": "Live Metrics",
      "esgTitle": "ESG Impact",
      "esgDesc": "Automatic donation to green causes for every sale",
      "governanceTitle": "Governance",
      "governanceDesc": "On-chain DAO, voting and real-time auditing",
      "partnersTitle": "Partners & VIP",
      "partnersDesc": "VIP area and exclusive perks for major investors"
    }
  },
  pt: {
    translation: {
      "mainTitle": "Bem-vindo ao AgroDigital5.0™",
      "mainDesc": "Venda de Tokens Segura, Global e Certificada ESG",
      "tokenSaleTitle": "Comprar Tokens",
      "walletBtn": "Conectar Carteira",
      "buyTokenBtn": "Comprar",
      "donateNFTBtn": "Doar e Receber NFT",
      "metricsTitle": "Métricas em Tempo Real",
      "esgTitle": "Impacto ESG",
      "esgDesc": "Doação automática para causas ambientais a cada venda",
      "governanceTitle": "Governança",
      "governanceDesc": "DAO On-chain, votação e auditoria em tempo real",
      "partnersTitle": "Parceiros & VIP",
      "partnersDesc": "Área VIP e benefícios exclusivos para grandes investidores"
    }
  },
  es: {
    translation: {
      "mainTitle": "Bienvenido a AgroDigital5.0™",
      "mainDesc": "Venta de tokens segura, global y certificada ESG",
      "tokenSaleTitle": "Comprar Tokens",
      "walletBtn": "Conectar Billetera",
      "buyTokenBtn": "Comprar",
      "donateNFTBtn": "Donar y Recibir NFT",
      "metricsTitle": "Métricas en Vivo",
      "esgTitle": "Impacto ESG",
      "esgDesc": "Donación automática a causas verdes por cada venta",
      "governanceTitle": "Gobernanza",
      "governanceDesc": "DAO on-chain, votación y auditoría en tiempo real",
      "partnersTitle": "Socios & VIP",
      "partnersDesc": "Área VIP y beneficios exclusivos para grandes inversores"
    }
  }
};
i18next.init({ lng: 'en', resources }, (err, t) => updateContent());

function changeLang(lng) {
  i18next.changeLanguage(lng, updateContent);
  document.getElementById('currentLang').textContent = lng.toUpperCase();
}
function updateContent() {
  for (let key of Object.keys(resources['en'].translation)) {
    if (document.getElementById(key)) {
      document.getElementById(key).textContent = i18next.t(key);
    }
  }
}

// Atalho instalar PWA
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  document.getElementById('installAppBtn').style.display = 'inline-block';
});
document.getElementById('installAppBtn').onclick = async function() {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    deferredPrompt = null;
  }
};

// Login (ajuste para integrar com Firebase/Auth0)
document.getElementById('loginBtn').onclick = () => {
  alert('Login via FaceID/Biometrics coming soon. Integration with Firebase/Auth0 recommended!');
};

// Exemplo conexão Web3
async function connectWallet() {
  if (window.ethereum) {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      const address = await signer.getAddress();
      document.getElementById('walletAddress').textContent = "Wallet: " + address;
    } catch (e) {
      alert('Access denied.');
    }
  } else {
    alert('Please install MetaMask!');
  }
}
function buyToken() {
  alert('Token purchase flow – integrate with contract and backend.');
}
function donateAmazonNFT() {
  alert('NFT minting flow – integrate with contract and backend.');
}

// Exemplo gráfico dinâmico (mock)
const ctx = document.getElementById('cryptoChart').getContext('2d');
new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Jan','Feb','Mar','Apr','May','Jun'],
    datasets: [{
      label: 'Token Price USD',
      data: [1, 2.5, 2, 3, 4.5, 5.2],
      borderColor: '#00a86b',
      backgroundColor: 'rgba(0, 168, 107, 0.1)'
    }]
  }
});

// Link BscScan
document.getElementById('bscscanLink').href = 'https://bscscan.com/address/0xYOUR_CONTRACT_ADDRESS';
