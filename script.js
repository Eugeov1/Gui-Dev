
// =====================================
// GUI DEV — ANIMAÇÕES AO ROLAR A PÁGINA
// =====================================

// Seleciona todos os elementos com a classe animar
const elementosAnimados = document.querySelectorAll(".animar");

// Cria o observador
const observador = new IntersectionObserver((entradas, observadorAtual) => {

    // Percorre os elementos observados
    entradas.forEach((entrada) => {

        // Verifica se o elemento apareceu na tela
        if (entrada.isIntersecting) {

            // Adiciona a classe que inicia a animação
            entrada.target.classList.add("mostrar");

            // Para de observar o elemento
            observadorAtual.unobserve(entrada.target);
        }

    });

}, {
    threshold: 0.15
});

// Observa cada elemento selecionado
elementosAnimados.forEach((elemento) => {
    observador.observe(elemento);
});

