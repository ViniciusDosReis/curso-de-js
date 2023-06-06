for (let i = 0; i <= 5; i++) {
    document.write(i + " ")
}

for (let i = 5; i >= 1; i--) {
    document.write(i + " ")
}

let carros = ['Fusca', 'Brasília', 'Gurgel']

for (let i = 0; i < carros.length; i++) {
    document.write(`<li>${carros[i]}</li>`)
}

let frutas = ['Pera', 'Uva', 'Maçã', 'Banana', 'Melancia']

frutas.forEach(function(fruta, i) {
    document.write(`${i} ${fruta} <br>`)
})

carros.forEach(function(carro) {
    document.write(`${carro} <br>`)
})

/* WHILE enquanto */

// criar variavel de contador fora do lado
let contador = 0

while(contador < frutas.length) {
    console.log(frutas[contador])
    contador++
}

/* DO WHILE faca enquanto */

// criar variavel de contador fora do laco
let iterador = 0

do {
    console.log(carros[iterador])
    iterador++
} while(iterador < carros.length)

console.log(iterador)