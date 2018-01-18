;(function(){ // IIFE

    const cartoes = document.querySelectorAll('.cartao')
    // Adicionar o cartao--focado
    
    for(let cartao of cartoes) {
        // Tabindex
        // CSS defeituoso 
        // E correção com Bubbling
        cartao.addEventListener('focusin', function() {
            console.log('bagulhos')
            //console.log('Fazendo os bagulhos funcionarem')
            cartao.classList.add('cartao--focado')
        })

        cartao.addEventListener('focusout', function() {
            //console.log('Fazendo os bagulhos funcionarem')
            cartao.classList.remove('cartao--focado')
        })
    }



})()
