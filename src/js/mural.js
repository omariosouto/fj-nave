;(function($) {


// ${ cor ? '' : 'checked' }
let contador = document.querySelectorAll('.cartao').length

const listaCartoes = []
                            // Parametro padrao: Default parameters
function criarCartao({conteudo, cor = ''}) {

    listaCartoes.push({conteudo, cor})

    contador++
    // console.log('Criar cartao em construção', conteudo)

    // Criar o elemento
    // const $cartao = document.createElement('article')
    // $cartao.classList.add('cartao')
    // $cartao.setAttribute('tabindex', '0')

    // const $tagConteudo = document.createElement('p')
    // $tagConteudo.classList.add('cartao-conteudo')

    // Criar elemento de forma sonhadora: Declarativa
    const $cartao = $(`
    <article id="cartao_${contador}" style="background: ${cor};" class="cartao" tabindex="0">
        <div class="opcoesDoCartao">
            <button class="opcoesDoCartao-remove opcoesDoCartao-opcao" tabindex="0">
            <svg><use xlink:href="#iconeRemover"></use></svg>
            </button>            
            <input type="radio" name="corDoCartao${contador}" value="#EBEF40" id="corPadrão-cartao${contador}" class="opcoesDoCartao-radioTipo" ${ cor ? '' : 'checked' }>
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
    `)

    $cartao.on('focusin', function() {
        console.log('bagulhos')
        //console.log('Fazendo os bagulhos funcionarem')
        $cartao.addClass('cartao--focado')
    })

    $cartao.on('focusout', function() {
        //console.log('Fazendo os bagulhos funcionarem')
        $cartao.removeClass('cartao--focado')
    })

    // Adiciona evento e faz delegate
    $cartao.on('change', '.opcoesDoCartao-radioTipo',function(event) {
        const $elementoAtual = $(event.target)
        const novaCor = $elementoAtual.val()
        $cartao.css('background', novaCor)
    })

    $cartao.on('keydown', function(event) {
        const $elementoAtual = $(event.target)
        const isLabel = $elementoAtual.hasClass('opcoesDoCartao-opcao')
        // Quando? 

        console.log("Tecla: ", event.key)
        if(isLabel && ( event.key === 'Enter' || event.key === ' ' )) {
            $elementoAtual.click()
        }
    })

    // Implementar o Remove com Delegate
    $cartao.on('click', function (event) {
        const $elementoAtual = $(event.target)
        const isRemove = $elementoAtual.hasClass('opcoesDoCartao-remove')

        if(isRemove) {
            $cartao.addClass('cartao--somePeixinho')
            $cartao.on('transitionend', function() {
                $cartao.remove()
            })
        }
    })        

    $('.mural').prepend($cartao)
}

window.criarCartao = criarCartao

window.listaCartoes = listaCartoes

$.ajax({
    url: "http://ceep.herokuapp.com/cartoes/carregar/"
    ,method: "GET"
    ,dataType: "jsonp"
    ,data: {
        usuario: "art"
    }
    ,success: function(resposta){
        const ajudas = resposta.cartoes

        ajudas.reverse().forEach(ajuda => criarCartao(ajuda))
    }
})

// //  handler
// // callback

})(jQuery)


// PWA
// fetch
// Cache
// m.uber.com


// Build


// Arquitetura