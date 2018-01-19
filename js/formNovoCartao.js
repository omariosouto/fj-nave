;(function() { // IIFE   
    const form = document.querySelector('.formNovoCartao')

    // Add EventListener
    form.addEventListener('submit', function(event) {
        event.preventDefault()
        const $campoDeConteudo = document.querySelector('.formNovoCartao-conteudo')
        const conteudo = $campoDeConteudo.value.trim()

        //console.log('Hey ho lets go', conteudo)
        if(!conteudo) {
            console.log('Não tem conteúdo seu vacilaum')
            // <div class="formNovoCartao-msg">
            //     Formulário inválido. Não digite vários nada!!!!
            // </div>
            const $msgErro = document.createElement('div')

            $msgErro.classList.add('formNovoCartao-msg')
            $msgErro.textContent = 'Formulário inválido. Não digite vários nada!!!!'

            document.querySelector('.formNovoCartao-salvar')
                    .insertAdjacentElement('beforebegin', $msgErro)

            $msgErro.addEventListener('animationend', function() {
                $msgErro.remove()
            })

        } else {
            console.log('Criar cartao em construção', conteudo)
        }
        $campoDeConteudo.value = ''
    })
    // Conteudo importa, sem conteudo, tem varios nada
    form.classList.remove('no-js')
})()