const texto = document.querySelector('#textoCompleto')
const botao = document.querySelector('#btnLeiaMais')


botao.addEventListener('click', () => {

    if (texto.hidden) {
        texto.hidden = false
    } else {
        texto.hidden = true
    }

})

const clarear = document.querySelector('#btnTema')

clarear.addEventListener('click', () => {

    if (document.body.classList.contains('claro')) {
        document.body.classList.remove('claro')
        clarear.innerText = '☀'
    } else {
        document.body.classList.add('claro')
         clarear.innerText = '☾'
    }

})