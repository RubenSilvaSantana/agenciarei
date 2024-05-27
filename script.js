document.addEventListener("DOMContentLoaded", function() {
    // Seleciona o botão
    const backToTopButton = document.getElementById("backToTopBtn");

    // Adiciona um ouvinte de evento para quando o usuário rola a página
    window.onscroll = function() {
        scrollFunction();
    };

    function scrollFunction() {
        // Verifica se a página foi rolada para baixo mais de 20px
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            backToTopButton.style.display = "block"; // Mostra o botão
        } else {
            backToTopButton.style.display = "none"; // Esconde o botão
        }
    }

    // Adiciona um ouvinte de evento para o clique no botão
    backToTopButton.addEventListener("click", function() {
        // Usa o scroll-behavior do CSS para uma transição suave
        window.scrollTo({top: 0, behavior: 'smooth'});
    });
});