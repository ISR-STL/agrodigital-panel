// ============================
// PAINEL ADMIN - AGRODIGITAL5.0™
// ============================

// Lista de senhas de administradores
const adminPasswords = ["Agro@2025!", "OutroAdmin123"]; // Pode adicionar mais senhas

function openAdmin() {
  const senha = prompt("Digite a senha de acesso:");
  if (!senha) return; // Usuário cancelou

  // Remove espaços extras e faz comparação segura
  const senhaLimpa = senha.trim();

  if (adminPasswords.includes(senhaLimpa)) {
    // Sucesso: redireciona para o painel admin
    window.location.href = "admin-panel.html";
  } else {
    alert("Acesso negado.");
  }
}
