// Funcao
// Executa
// Imediamtamente
// Instantaneamente
// (IIFE)
;(function () {
    // 1 - REMOVE OS: onclick="this.parentNode.parentNode.remove();"
    // Pega o elemento
    const btns = document.querySelectorAll('.opcoesDoCartao-remove')
    console.log(btns)
    for(let btn of btns) { // let i = 0; i < btns.length; i++
        console.log(btn)
        btn.addEventListener('click', function () {
            const cartao = btn.parentNode.parentNode

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




