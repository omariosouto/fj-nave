// onclick="this.parentNode.parentNode.remove();"
// Pega o elemento
const btnRemove = document.querySelector('.opcoesDoCartao-remove')

btnRemove.addEventListener('click', removeCartao)


// Cria a função
function removeCartao() {
    const cartao = this.parentNode.parentNode
    // 1 é o add
    cartao.classList.add('cartao--somePeixinho')

    cartao.addEventListener('transitionend', function() {
        cartao.remove()
    })
    // setTimeout(function() { // Função Anonima/ Anoneminmomina
    //     // quando esse roda? Depois de 200 milisegundos
    //     console.log('Ver como isso funciona')
    //     cartao.remove()
    // }, 300)
}





