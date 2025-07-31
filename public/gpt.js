<script src="app.js"></script>
<script>
  async function traduzirGPT(texto, idioma) {
    const resp = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer SUA_API_KEY_OPENAI', // <---- Substitua aqui pela sua chave API (ou ideal: chame backend)
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
</script>
</body>
</html>
