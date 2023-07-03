let x = 10
let y = 5
console.log(x > y)

let w = "10"
let z = 10
console.log(w === z)

let a = 10
let b = 5
console.log(x != y)

let preco
if (preco <= 45) {
    console.log("O preço da carne está barato.")
} else {
    console.log("O preço da carne está Caro.")
}

let diaDeSemana = "Segunda"
/*
if (diaDeSemana == "Domingo") {
    console.log("Hoje é dia de futebol!!!")
} else {
    console.log("Aff! Tenho que trabalhar!")
}
*/
hojeSeJoga(diaDeSemana)

function hojeSeJoga(diaDeSemana) {
    if (diaDeSemana == "Domingo") {
        console.log("Hoje é dia de futebol!!!")
    } else {
        console.log("Aff! tenho que trabalhar!")
    }
}

let num = -10
sinal(num)

function sinal(num) {
    if (num >= 1) {
        console.log("1")
        console.log("É Positivo")
        if (num % 2 === 0) {
            console.log("É multiplo de 2")
        } else if (num % 3 === 0) {
            console.log("É multiplo de 3")
        } else if (num != 15) {
            console.log("Não é 15")
        }
    } else if (num == 0) {
        console.log('0');
    } else {
        console.log('-1');
    }
}