// Função de troca de idioma dinâmica
function changeLang(lng) {
  i18next.changeLanguage(lng, updateContent);
  document.getElementById('currentLang').textContent = lng.toUpperCase();
}

// Atualiza o conteúdo dos elementos com base no idioma ativo
function updateContent() {
  for (let key of Object.keys(i18next.getResourceBundle('en', 'translation'))) {
    if (document.getElementById(key)) {
      document.getElementById(key).textContent = i18next.t(key);
    }
  }
}

// Adicione o listener para dropdown de idioma (se não estiver no HTML):
document.querySelectorAll('.dropdown-item').forEach(item => {
  item.addEventListener('click', function() {
    const lang = this.getAttribute('onclick').match(/'(.+?)'/)[1];
    changeLang(lang);
  });
});
