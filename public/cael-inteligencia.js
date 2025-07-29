function toggleIA() {
  const box = document.getElementById('iaBox');
  box.style.display = box.style.display === 'none' ? 'block' : 'none';
}
async function sendIACommand() {
  const command = document.getElementById('iaCommand').value;
  document.getElementById('iaResponse').innerText = 'Thinking...';
  // Aqui, chame seu backend/API para respostas reais – exemplo fake:
  setTimeout(() => {
    document.getElementById('iaResponse').innerText = 'IA (demo): This will be integrated with OpenAI or your backend securely!';
  }, 1000);
}
