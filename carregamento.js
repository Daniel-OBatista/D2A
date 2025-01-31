// Função para simular o progresso de carregamento
function carregarPagina() {
    let progresso = 0;
    const interval = setInterval(() => {
      progresso += 1; // Incrementa o progresso em 1% a cada intervalo
      if (progresso >= 100) {
        clearInterval(interval); // Para o intervalo quando atingir 100%
        window.location.href = "index.html"; // Redireciona para a página index
      }
    }, 50); // A cada 50ms, o progresso aumenta 1%
  }
  
  // Inicia a simulação de carregamento quando a página é carregada
  window.onload = carregarPagina;
  