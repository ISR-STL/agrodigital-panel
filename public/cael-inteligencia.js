function toggleIA() {
  const iaBox = document.getElementById('iaBox');
  iaBox.style.display = iaBox.style.display === "none" ? "block" : "none";
}

function sendIACommand() {
  const input = document.getElementById('iaCommand').value.trim();
  if (!input) return;

  // Mensagem de processamento e resposta simulada
  document.getElementById('iaResponse').innerText = "Processing request...";
  setTimeout(() => {
    const output = "Cael: " + input + " | Strategic response tailored to AgroDigital's global goals.";
    document.getElementById('iaResponse').innerText = output;
  }, 800);
}
