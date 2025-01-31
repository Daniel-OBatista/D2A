document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#whatsappButton_footer').addEventListener('click', function() {
        console.log('Botão WhatsApp clicado!');  // Verifique se o clique é detectado

        // Criar a mensagem para o WhatsApp
        const mensagem = `Olá, gostaria de mais informações.`;

        // Substitua 'seunumerowhatsapp' pelo número do WhatsApp
        const numeroWhatsApp = '5516982620915';

        // Codificar a mensagem para garantir que caracteres especiais sejam tratados corretamente
        const url = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${encodeURIComponent(mensagem)}`;
        console.log(url);  // Verifique a URL gerada

        // Redirecionar para o WhatsApp (abrindo em uma nova aba)
        window.open(url, '_blank');
    });
});
