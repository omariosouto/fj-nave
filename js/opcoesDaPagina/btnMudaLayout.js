// onclick="mudaTexto(this)"

// Todas as funções são camelCase


// Capitulo 9 **DO PDF PÁGINA 77**: Manda bala \o/ 

// Pegar elemento
const btn = document.querySelector('#btnMudaLayout') // ES6

function mudaTexto() {
    if(this.textContent == 'Blocos') {
        this.textContent = 'Linhas'
    } else {
        this.textContent = 'Blocos'
    }
}

btn.addEventListener('click', mudaTexto)

// btn.onclick = mudaTexto
// btn.onclick = mudaLayout



// - Adicionar a classe
const mural = document.querySelector('.mural')
// - Se clicar de novo remove a clase ou muda sla
function mudaLayout() {
    mural.classList.toggle('mural--linha')
    // if(mural.classList.contains('mural--linha')) {
    //     mural.classList.remove('mural--linha')
    // } else {
    //     mural.classList.add('mural--linha')
    // }
}

btn.addEventListener('click', mudaLayout)

// - Cria o evento: click

// Progressive Enhancement = Carregamento Progressivo (Oferecer quando tem disponivel)
// - Muda layout 
// - Busca
// - Ajudas
// - Sync
btn.classList.remove('no-js')









































