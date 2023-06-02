let titulo = document.querySelector('h1')
titulo.textContent = 'Funções no JS'
let box = document.querySelectorAll('box')

function olaMundo() {
    document.write('Olá Mundo sem retorno<br>')
}

function olaMundo2() {
    return 'Olá Mundo com retorno<br>'
}

olaMundo()
document.write(olaMundo2())

let x = 2
let y = 1
let mensagem = 'Jesus Cristo é o Salvador.'

function somar(a, b) {
    document.write((a + b) + "<br>")
}

function somar2(a, b) {
    return a + b
}

somar(x, y)
somar(10, 5)

document.write(`<p>${somar2(x , y)}</p>`)
document.write(`<p>${somar2(2 , 5)}</p>`)

/* função anônima = não tem nome pode ou não ter parâmetros pode ou não ter retorno */

titulo.addEventListener('click', function () {
    console.log('Clicou no título')
})

/* Arrow Functions ES6 2015 em diante */

const olaMundoArrow = () => document.write("Olá mundo!!!!!!!!!!!")

// não precisa usar a palavra function
// não precisa usar a palavra return
// não se usa nome na função
// não precisa colocar { } se for so uma instrução

const olaMundo2Arrow = () => '<p>Olá mundo com arrow function</p>'

olaMundoArrow()
document.write(olaMundo2Arrow())