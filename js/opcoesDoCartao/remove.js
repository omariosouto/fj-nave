// Funcao
// Executa
// Imediamtamente
// Instantaneamente
// (IIFE)
console.log('This na vida real', this)
;(function () {

    // 1 - REMOVE OS: onclick="this.parentNode.parentNode.remove();"
    // Pega o elemento
    const btns = document.querySelectorAll('.opcoesDoCartao-remove')

    for(let i = 0; i < btns.length; i++) {
        btns[i].addEventListener('click', function () {
            console.log(i)
            const cartao = btns[i].parentNode.parentNode

            cartao.classList.add('cartao--somePeixinho')

            cartao.addEventListener('transitionend', function() {
                cartao.remove()
            })
            // setTimeout(function() { // Função Anonima/ Anoneminmomina
            //     // quando esse roda? Depois de 200 milisegundos
            //     console.log('Ver como isso funciona')
            //     cartao.remove()
            // }, 300)
        })        
    }


})()




