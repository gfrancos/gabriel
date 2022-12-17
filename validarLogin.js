function validarLogin() {
    // Lê os valores digitados pelo usuário
    var usuario = document.getElementById('text').value;
    var senha = document.getElementById('password').value;
  
    // Verifica se os valores digitados correspondem aos valores válidos
    if ((usuario == 'gabriel' && senha == 'gabriel') ||
        (usuario == 'geovanna' && senha == 'geovanna') ||
        (usuario == 'pedro' && senha == 'pedro') ||
        (usuario == 'zilmar' && senha == 'zilmar') ||
        (usuario == 'stanley' && senha == 'stanley')) {
      // Redireciona para a página da área restrita
      window.location.href = 'inicio.html';
    } else {
      // Mostra uma mensagem de erro e joga o foco para o campo de usuário
      alert('Usuário ou senha inválidos');
      document.getElementById('text').focus();
    }
  }
  