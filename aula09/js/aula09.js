let titulo = document.querySelector('h1')
titulo.textContent = 'Aula 09 Manipular CSS'

let imagem = document.querySelector('#foto')
imagem.setAttribute('src', 'pride-fc.png')
imagem.setAttribute('width', '280px')

titulo.style.color = 'orange';
titulo.style.backgroundColor = 'black'

let box = document.querySelectorAll('.box')
box[0].setAttribute('class', 'escura')
//box[0].removeAttribute('class')

let tela = document.querySelector('main')

let btlight = document.querySelector('#btlight')
let btdark = document.querySelector('#btdark')

btlight.addEventListener('click', light)
btdark.addEventListener('click', dark)

function dark() {
    console.log('modo dark')
    tela.classList.add("dark")
    tela.classList.remove("light")
}
function light() {
    console.log('modo light')
    tela.classList.add("light")
    tela.classList.remove("dark")

}