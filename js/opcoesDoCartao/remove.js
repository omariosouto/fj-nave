// Funcao
// Executa
// Imediamtamente
// Instantaneamente
// (IIFE)
(function () {

    // 1 - REMOVE OS: onclick="this.parentNode.parentNode.remove();"
    // Pega o elemento
    const btn = document.querySelector('.opcoesDoCartao-remove')

    btn.addEventListener('click', function () {
        const cartao = this.parentNode.parentNode
        // 1 é o add
        cartao.classList.add('cartao--somePeixinho')
        // .cartao--somePeixinho {
        //     transform: translate(0px, -200px) rotate(900deg);
        //     opacity: 0;
        //     transition: .3s;
        // }

        cartao.addEventListener('transitionend', function() {
            cartao.remove()
        })
        // setTimeout(function() { // Função Anonima/ Anoneminmomina
        //     // quando esse roda? Depois de 200 milisegundos
        //     console.log('Ver como isso funciona')
        //     cartao.remove()
        // }, 300)
    })

})()




