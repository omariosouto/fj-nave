;(function() {
    const $btnAjuda = document.querySelector('#btnAjuda')


    // Usuario
    // Clica
    // Ajuda aparece

    // Dev
    // Cadastrar um evento: Event Listener
    $btnAjuda.addEventListener('click', () => {
        const ajudas = ['Voce pode add cartao',
                        'Remover cartao',
                        'Mudar a cor',
                        'Você pode arrumar a coluna',
                        '"Acessivelzaodaporra"']

        ajudas.forEach(ajuda => alert(ajuda))

        // function forEach(array, funcaoCallback) {
        //     for(item of array) {
        //         funcaoCallback(item)
        //     }
        // }
    })
    $btnAjuda.classList.remove('no-js')
})()