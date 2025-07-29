// Função de login admin
function openAdmin() {
  const senha = prompt("Digite a senha de acesso:");
  // Lista de senhas de administradores (permite múltiplos admins)
  const adminPasswords = ["Agro@2025!", "OutroAdmin123"]; // Inclua outras senhas se quiser

  // Check sem espaços e case sensitive
  if (adminPasswords.includes(senha)) {
    // Sucesso: redireciona para o painel admin (ajuste o caminho se necessário)
    window.location.href = "/admin-panel.html";
  } else {
    alert("Acesso negado.");
  }
}
