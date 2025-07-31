// ---- Idioma Automático + Troca Manual ----
const langs = ['en','pt','es','ru','ja','cn'];
const langNames = {en:'EN',pt:'PT',es:'ES',ru:'RU',ja:'JA',cn:'CN'};
function setLang(lang) {
  localStorage.setItem('lang', lang);
  document.getElementById('currentLang').innerText = langNames[lang]||'EN';
  window.i18n && window.i18n(lang); // suporte ao i18n.js
  document.documentElement.lang = lang;
}
function changeLang(lang) { setLang(lang); location.reload(); }
window.onload = () => {
  let saved = localStorage.getItem('lang');
  if (!saved) {
    let userLang = (navigator.language||'en').slice(0,2);
    saved = langs.includes(userLang) ? userLang : 'en';
  }
  setLang(saved);
};

// ---- Wallet Connect (placeholder) ----
function connectWallet() {
  alert("Coming soon: Connect your wallet (MetaMask, WalletConnect, etc)");
}

// ---- Stealth Admin (proteção extra) ----
document.getElementById('adminStealth').onclick = function(e){
  e.preventDefault();
  let pass = prompt("Enter Admin Password:");
  if (pass === 'board2025') { window.location = this.href; }
  else alert('Access denied.');
};

// ---- Menu ativo visual ----
document.querySelectorAll('.nav-link').forEach(el=>{
  el.onclick = function() {
    document.querySelectorAll('.nav-link').forEach(e=>e.classList.remove('active'));
    this.classList.add('active');
  }
});
