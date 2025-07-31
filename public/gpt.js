<script src="app.js"></script>
<script>
  // Função de tradução GPT
  async function traduzirGPT(texto, idioma) {
    const resp = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer SUA_API_KEY_OPENAI',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'gpt-4o',
        messages: [
          {role:'system',content:`Traduza para ${idioma} sem alterar a formatação original`},
          {role:'user',content: texto}
        ]
      })
    });
    let out = await resp.json();
    return out.choices[0].message.content;
  }

  // Aciona ao clicar nos botões de idioma
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.onclick = async function() {
      const idioma = this.dataset.lang; // ex: 'en', 'es', etc.
      // Troca o título principal, e pode repetir para mais campos
      const textoOriginal = document.getElementById('mainTitle').innerText;
      const traducao = await traduzirGPT(textoOriginal, idioma);
      document.getElementById('mainTitle').innerText = traducao;
      // Repita aqui para outros elementos que quer traduzir
    }
  });
</script>
</body>
</html>
