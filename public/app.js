// ========== GLOBAL ==========
let walletAddress = '';
let unitsSold = 0;

// ========== WALLET ==========
async function connectWallet() {
  if (window.ethereum) {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    walletAddress = accounts[0];
    document.getElementById("walletAddress").innerText = "Connected: " + walletAddress;
    return walletAddress;
  } else {
    alert("Please install MetaMask to continue!");
    return null;
  }
}

// ========== BUY TOKEN ==========
function buyToken() {
  if (!walletAddress) {
    alert("Connect your wallet first.");
    return;
  }
  unitsSold++;
  alert("Token purchased successfully!");
  updateUnits();
}

// ========== DONATE + NFT ==========
function donateAmazonNFT() {
  if (!walletAddress) {
    alert("Connect your wallet first.");
    return;
  }
  alert("Thank you for your donation! ESG NFT will be sent to your wallet.");
}

// ========== DASHBOARD & CHART ==========
document.addEventListener('DOMContentLoaded', () => {
  // Chart.js minimalista
  const ctx = document.getElementById('cryptoChart');
  if (ctx) {
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['CornToken', 'BNB', 'ETH', 'BTC'],
        datasets: [{
          label: 'Token/Commodity',
          data: [12, 5, 3, 9],
          borderColor: '#00c6ff',
          borderWidth: 2,
          fill: true,
          backgroundColor: 'rgba(0,198,255,0.09)'
        }]
      },
      options: {
        plugins: { legend: { display: false } },
        scales: { x: { display: true }, y: { display: true } },
        responsive: true
      }
    });
  }
  updateUnits();
});

function updateUnits() {
  if (document.getElementById("unitsSold")) {
    document.getElementById("unitsSold").innerText = unitsSold;
  }
  if (document.getElementById("totalTokensSold")) {
    document.getElementById("totalTokensSold").innerText = unitsSold;
  }
}

// ========== BSC SCAN ==========
if (document.getElementById("bscscanLink")) {
  document.getElementById("bscscanLink").href = "https://bscscan.com/address/SEU_CONTRATO_AQUI";
}

// ========== ADMIN AI / ASSISTENTE ==========
function toggleIA() {
  const box = document.getElementById('iaBox');
  if (box) box.style.display = box.style.display === 'none' ? 'block' : 'none';
}
function sendIACommand() {
  const command = document.getElementById('iaCommand').value;
  if (!command) return;
  document.getElementById('iaResponse').innerText = "AI: Feature available soon (OpenAI Key required).";
  document.getElementById('iaCommand').value = "";
}

// ========== ADMIN PANEL ==========
function toggleAdminIA() {
  const box = document.getElementById('adminIABox');
  if (box) box.style.display = box.style.display === 'none' ? 'block' : 'none';
}
function sendAdminIACommand() {
  const command = document.getElementById('adminIACommand').value;
  if (!command) return;
  document.getElementById('adminIAResponse').innerText = "Admin AI: Feature available soon (OpenAI Key required).";
  document.getElementById('adminIACommand').value = "";
}

// ========== MARKETPLACE / PARTNER ==========
let offers = [];
let trades = [];

function openAddTokenModal() {
  const modal = new bootstrap.Modal(document.getElementById('addTokenModal'));
  modal.show();
}

function addToken() {
  let name = document.getElementById('newTokenName').value.trim();
  let price = parseFloat(document.getElementById('newTokenPrice').value);
  let available = parseInt(document.getElementById('newTokenAvailable').value);
  if (!name || !price || !available) return alert("Fill in all fields!");
  offers.push({ name, price, available });
  updateOffersTable();
  bootstrap.Modal.getInstance(document.getElementById('addTokenModal')).hide();
}

function updateOffersTable() {
  let table = document.querySelector("#offersTable tbody");
  if (!table) return;
  table.innerHTML = "";
  offers.forEach((offer, idx) => {
    let row = `<tr>
      <td>${offer.name}</td>
      <td>$${offer.price}</td>
      <td>${offer.available}</td>
      <td><button class="btn btn-sm btn-info" onclick="updateOffer(${idx})">Update</button></td>
      <td><button class="btn btn-sm btn-danger" onclick="removeOffer(${idx})">Remove</button></td>
    </tr>`;
    table.innerHTML += row;
  });
}

function updateOffer(idx) {
  let offer = offers[idx];
  let price = prompt("Update price:", offer.price);
  let available = prompt("Update available:", offer.available);
  if (!price || !available) return;
  offers[idx].price = parseFloat(price);
  offers[idx].available = parseInt(available);
  updateOffersTable();
}
function removeOffer(idx) {
  offers.splice(idx, 1);
  updateOffersTable();
}

// MARKETPLACE
function openAddOfferModal() {
  const modal = new bootstrap.Modal(document.getElementById('addOfferModal'));
  modal.show();
}
function addOffer() {
  let seller = document.getElementById('sellerName').value.trim();
  let token = document.getElementById('offerToken').value.trim();
  let amount = parseInt(document.getElementById('offerAmount').value);
  let price = parseFloat(document.getElementById('offerPrice').value);
  if (!seller || !token || !amount || !price) return alert("Fill in all fields!");
  let offer = { seller, token, amount, price };
  if (!window.marketOffers) window.marketOffers = [];
  window.marketOffers.push(offer);
  updateMarketOffersTable();
  bootstrap.Modal.getInstance(document.getElementById('addOfferModal')).hide();
}
function updateMarketOffersTable() {
  let table = document.querySelector("#marketOffersTable tbody");
  if (!table) return;
  table.innerHTML = "";
  (window.marketOffers || []).forEach((offer, idx) => {
    let row = `<tr>
      <td>${offer.seller}</td>
      <td>${offer.token}</td>
      <td>${offer.amount}</td>
      <td>$${offer.price}</td>
      <td><button class="btn btn-sm btn-success" onclick="buyMarketOffer(${idx})">Buy</button></td>
    </tr>`;
    table.innerHTML += row;
  });
}
function buyMarketOffer(idx) {
  let offer = window.marketOffers[idx];
  trades.push({ ...offer, time: new Date().toLocaleString() });
  alert("Offer purchased successfully!");
  window.marketOffers.splice(idx, 1);
  updateMarketOffersTable();
  updateTradeHistory();
}
function updateTradeHistory() {
  let list = document.getElementById('tradeHistoryList');
  if (!list) return;
  list.innerHTML = "";
  trades.slice().reverse().forEach(trade => {
    let item = `<li class="list-group-item">
      ${trade.time} – <strong>${trade.amount}</strong> ${trade.token} bought from <em>${trade.seller}</em> at $${trade.price} each.
    </li>`;
    list.innerHTML += item;
  });
}

// PARTNERS SIMULADO
document.addEventListener('DOMContentLoaded', () => {
  updateOffersTable();
  updateMarketOffersTable();
  updateTradeHistory();
  if (document.getElementById('partnersList')) {
    document.getElementById('partnersList').innerHTML = `
      <ul>
        <li>Prime Agro Fund (VIP)</li>
        <li>AgroGlobal Exchange</li>
        <li>BNB Investors Club</li>
      </ul>
    `;
  }
});
