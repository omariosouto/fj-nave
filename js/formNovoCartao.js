;(function() { // IIFE   
    const form = document.querySelector('.formNovoCartao')
    
    
    let contador = document.querySelectorAll('.cartao').length


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

            // Imperativa
            const $msgErro = document.createElement('div')

            $msgErro.classList.add('formNovoCartao-msg')
            $msgErro.textContent = 'Formulário inválido. Não digite vários nada!!!!'

            document.querySelector('.formNovoCartao-salvar')
                    .insertAdjacentElement('beforebegin', $msgErro)

            $msgErro.addEventListener('animationend', function() {
                $msgErro.remove()
            })

        } else {
            contador++
            // console.log('Criar cartao em construção', conteudo)

            // Criar o elemento
            // const $cartao = document.createElement('article')
            // $cartao.classList.add('cartao')
            // $cartao.setAttribute('tabindex', '0')

            // const $tagConteudo = document.createElement('p')
            // $tagConteudo.classList.add('cartao-conteudo')

            // Criar elemento de forma sonhadora: Declarativa
            const $tpl = document.createElement('tpl')
            $tpl.innerHTML = `
            <article id="cartao_${contador}" class="cartao" tabindex="0">
                <div class="opcoesDoCartao">
                    <!-- this em eventos de elementos = elemento -->
                    <!-- Exercicio 8 da apostila  do **PDF** -->
                    <button class="opcoesDoCartao-remove opcoesDoCartao-opcao" tabindex="0">
                    <svg><use xlink:href="#iconeRemover"></use></svg>
                    </button>
                
                    <input type="radio" name="corDoCartao${contador}" value="#EBEF40" id="corPadrão-cartao${contador}" class="opcoesDoCartao-radioTipo" checked>
                    <label for="corPadrão-cartao${contador}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #EBEF40;" tabindex="0">
                    Padrão
                    </label>
                
                    <input type="radio" name="corDoCartao${contador}" value="#F05450" id="corImportante-cartao${contador}" class="opcoesDoCartao-radioTipo">
                    <label for="corImportante-cartao${contador}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #F05450;" tabindex="0">
                    Importante
                    </label>
                
                    <input type="radio" name="corDoCartao${contador}" value="#92C4EC" id="corTarefa-cartao${contador}" class="opcoesDoCartao-radioTipo">
                    <label for="corTarefa-cartao${contador}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #92C4EC;" tabindex="0">
                    Tarefa
                    </label>
                
                    <input type="radio" name="corDoCartao${contador}" value="#76EF40" id="corInspiração-cartao${contador}" class="opcoesDoCartao-radioTipo">
                    <label for="corInspiração-cartao${contador}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #76EF40;" tabindex="0">
                    Inspiração
                    </label>
                </div>
                <p class="cartao-conteudo" contenteditable tabindex="0">${conteudo}</p>
            </article>
            `
            const $cartao = $tpl.querySelector('.cartao')

            document.querySelector('.mural').insertAdjacentElement('afterbegin', $cartao)


        }
        $campoDeConteudo.value = ''
    })
    // Conteudo importa, sem conteudo, tem varios nada
    form.classList.remove('no-js')
})()