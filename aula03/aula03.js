/* Arquivo JS aula 03 Operadores e Operacoes */
let n1 = 10   // number inteiro
let n2 = 2    // number inteiro
let n3 = "2"  // string texto

document.write(`N1 ${n1} <br>`)
document.write(`N2 ${n2} <br>`)
document.write(`N3 ${n3} <br>`)

console.log(n1 + n2) // adição
console.log(n1 - n2) // subtração
console.log(n1 * n2) // multiplicação
console.log(n1 / n2) // divisão
console.log(n1 % n2) // resto ou modulo

console.log(n2 == n3)  // igual a
console.log(n2 === n3) // identico a
console.log(n2 != n3)  // diferente de Nao=
console.log(n2 !== n3) // Nao e identico

console.log(n1 > n2) // maior que
console.log(n1 < n2)  // menor que 
console.log(n1 >= n2)  // maior ou igual a
console.log(n1 <= n2) // menorou igual a

let a = true
let b = false
console.log(a && b) // E   AND
console.log(a || b) // OU  OR
console.log(!a)     // NOT NAO negacao
console.log(!b)