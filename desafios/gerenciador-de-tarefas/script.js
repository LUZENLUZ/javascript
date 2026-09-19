
const caixa = document.querySelector('#CXadc')
const button = document.querySelector('#botao')
const lista = document.querySelector('#lista')
let tarefas = JSON.parse(localStorage.getItem('tarefas')) || []


button.addEventListener('click', () => {
    if (caixa.value) {
const novaTarefa = {
    texto: caixa.value,
    concluida: false
}

tarefas.push(novaTarefa)



        
 const tarefaadd = document.createElement('li')
 const texto = document.createElement('span')
texto.innerText = caixa.value
tarefaadd.appendChild(texto)    

 const checkbox = document.createElement('input')
checkbox.type = 'checkbox'

tarefaadd.appendChild(checkbox)
lista.appendChild(tarefaadd)

checkbox.addEventListener('click', () => {
    if (checkbox.checked) {
texto.style.textDecoration = 'line-through'
    } else {
       texto.style.textDecoration = 'none'
    }

        novaTarefa.concluida = checkbox.checked
localStorage.setItem('tarefas', JSON.stringify(tarefas))


        
} )
const excluir = document.createElement('button')
excluir.innerText = 'Apagar'
tarefaadd.appendChild(excluir)

excluir.addEventListener('click', () => {
    tarefas = tarefas.filter(item => item !== novaTarefa)

localStorage.setItem('tarefas', JSON.stringify(tarefas))

tarefaadd.remove()

    localStorage.setItem('tarefas', JSON.stringify(tarefas))

    tarefaadd.remove()
})




 caixa.value =  ''
      
    } else {
        alert('adione algo')
    }


})

tarefas.forEach((tarefa) => {

    const tarefaadd = document.createElement('li')
    tarefaadd.innerText = tarefa.texto

    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.checked = tarefa.concluida

    if (checkbox.checked) {
        tarefaadd.style.textDecoration = 'line-through'
    }

    tarefaadd.appendChild(checkbox)
    lista.appendChild(tarefaadd)

    const excluir = document.createElement('button')
    excluir.innerText = 'Apagar'

    tarefaadd.appendChild(excluir)

  excluir.addEventListener('click', () => {
    tarefas = tarefas.filter(item => item !== tarefa)

    localStorage.setItem('tarefas', JSON.stringify(tarefas))

    tarefaadd.remove()
})
})




