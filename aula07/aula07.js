let Titulo = document.querySelector('h1')

Titulo.textContent = 'DOM'

let Testando = document.querySelectorAll('.box')
document.write(Testando[0].textContent)
document.write(Testando[1].textContent)
document.write(Testando[2].textContent)
Testando[0].textContent = "Texto qualquer"

let testeTag = document.getElementsByTagName('div')

let testeId = document.getElementById('Titulo')

let testeClass = document.getElementsByClassName