// capturando elementos via querySelector
let inputTarefa = document.querySelector('input')
const toast = document.querySelector('.toast')
const botaoCadastro = document.querySelector('#botaoCadastro')
const lista = document.querySelector('#lista')

//atribuindo função de controle 
botaoCadastro.onclick = function mostrarToast () {
    // validação para cadastro de tarefas
    if (inputTarefa.value == '') {
        toast.classList.add('visiblebg')
        toast.innerHTML = `<div>Cadastre uma tarefa!</div>`

        setTimeout (() => {
            toast.classList.remove('visiblebg')
        }, 4000)

    } else {
        toast.classList.add('visible')
        toast.innerHTML = `<div>Tarefa ${inputTarefa.value} cadastrada com sucesso!</div>`
        inserirLista()
        limparInput()
        
        // tempo de visualização do toast
        setTimeout (() => {
            toast.classList.remove('visible')
        }, 5000)
    }
    
}  

// função para inserir lista
function inserirLista() {
    lista.innerHTML += `<li>${inputTarefa.value}</li>`
}

// função para limpeza do input
function limparInput () {
    inputTarefa.value = ''
}
