document.addEventListener('DOMContentLoaded', function() {
    let progress = 0;
    const endTime = Date.now() + 3000; // 3 segundos
    const percentElement = document.getElementById('percent');
    const seenPercentages = []; // Array para rastrear porcentagens já exibidas
    let currentPercentage = 0; // Valor atual da porcentagem exibida

    function updateProgress() {
        const now = Date.now();
        if (now < endTime) {
            const timePassed = now - (endTime - 3000);
            let newProgress;
            do {
                newProgress = Math.floor(Math.random() * (100 * timePassed / 3000));
            } while (seenPercentages.includes(newProgress)); // Verifica se o número já foi exibido

            if (newProgress > currentPercentage) { // Exibe apenas números maiores que o anterior
                progress = newProgress;
                seenPercentages.push(progress); // Adiciona a porcentagem exibida ao array
                percentElement.innerText = `${progress}%`;
                currentPercentage = progress; // Atualiza o valor atual da porcentagem
            }

            requestAnimationFrame(updateProgress);
        } else {
            percentElement.innerText = '100%';
            window.location.href = "home.html";
        }
    }

    updateProgress();
});