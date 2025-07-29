// Cael Intelligence v1.0 – Simulação de IA local

function toggleIA() {
  const iaBox = document.getElementById("iaBox");
  iaBox.style.display = iaBox.style.display === "none" ? "block" : "none";
}

function sendIACommand() {
  const input = document.getElementById("iaCommand").value.trim();
  if (!input) return;

  // Simulação de resposta local da IA
  const output = `🤖 Cael: "${input}"\n🔍 Processing request...\n✔️ Strategic response will be tailored to AgroDigital's global goals.`;
  document.getElementById("iaResponse").innerText = output;

  // No futuro: integração com API OpenAI ou modelo local de NLP
}
