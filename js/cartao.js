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

        cartao.addEventListener('change', function(event) {
            console.log('Testzinho maroto')
            const $elementoAtual = event.target
            const isRadioTipo = $elementoAtual.classList.contains('opcoesDoCartao-radioTipo')
            
            // Delegate:
            if(isRadioTipo) {
                const novaCor = $elementoAtual.value
                cartao.style.background = novaCor
            }
        })

        cartao.addEventListener('keydown', function(event) {
            const $elementoAtual = event.target
            const isLabel = $elementoAtual.classList.contains('opcoesDoCartao-opcao')
            console.log(event)
            // Quando? 
            if(isLabel && ( event.key === 'Enter' || event.key === ' ' )) {
                $elementoAtual.click()
            }
        })

        // Implementar o Remove com Delegate
        cartao.addEventListener('click', function (event) {
            const $elementoAtual = event.target
            const isRemove = $elementoAtual.classList.contains('opcoesDoCartao-remove')

            if(isRemove) {
                cartao.classList.add('cartao--somePeixinho')
                cartao.addEventListener('transitionend', function() {
                    cartao.remove()
                })
            }
        })        
    }



})()


















