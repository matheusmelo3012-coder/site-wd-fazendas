function mudarSlide(botao, direcao) {
    console.log('carrossel iniciado')
    // Encontra o container do carrossel onde o botão foi clicado
    const container = botao.parentElement;
    const faixaSlides = container.querySelector('.carrossel-slides');
    const totalSlides = faixaSlides.children.length;
    
    // Pega o índice atual salvo no próprio HTML (data-index)
    let indiceAtual = parseInt(faixaSlides.getAttribute('data-index')) || 0;
    
    // Calcula o próximo índice
    indiceAtual += direcao;
    
    // Se passar da última foto, volta para a primeira
    if (indiceAtual >= totalSlides) {
        indiceAtual = 0;
    }
    // Se voltar antes da primeira foto, vai para a última
    if (indiceAtual < 0) {
        indiceAtual = totalSlides - 1;
    }
    
    // Salva o novo índice no HTML para o próximo clique
    faixaSlides.setAttribute('data-index', indiceAtual);
    
    // Move a faixa horizontalmente (0%, -100%, -200%, etc.)
    faixaSlides.style.transform = `translateX(-${indiceAtual * 100}%)`;
    
}

window.mudarSlide = mudarSlide