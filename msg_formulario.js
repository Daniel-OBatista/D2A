document.querySelector('#whatsappButton_enviar').addEventListener('click', function() {
    // Captura os dados do formulário
    const nome = document.getElementById('floatingNome').value;
    const email = document.getElementById('floatingEmail').value;
    const telefone = document.getElementById('floatingTelefone').value;
    const preferenciaContato = document.querySelector('select').value;
    const satisfacao = document.getElementById('nivel-satisfacao').value;
    const recebeNovidades = document.getElementById('flexCheckDefault').checked ? 'Sim' : 'Não';
  
    // Formata a mensagem a ser enviada no WhatsApp
    const mensagem = `
      Nome: ${nome}
      Email: ${email}
      Telefone: ${telefone}
      Preferência de contato: ${preferenciaContato === '1' ? 'WhatsApp' : preferenciaContato === '2' ? 'Email' : 'Ligação'}
      Nível de satisfação: ${satisfacao}
      Deseja receber novidades por email? ${recebeNovidades}
    `;
  
    // Converte a mensagem para a URL do WhatsApp
    const numeroWhatsApp = '5516982620915'; // Insira o número do destinatário
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
  
    // Abre o link no navegador (isso irá abrir o WhatsApp Web com a mensagem)
    window.open(url, '_blank');
  });
  