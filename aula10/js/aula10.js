let titulo = document.querySelector('h1')
titulo.textContent = 'Funções no JS'
let box = document.querySelectorAll('box')

function olaMundo() {
    document.write('Olá Mundo sem retorno<br>')
}

function olaMundo2() {
    return 'Olá Mundo com retorno<br>'
}