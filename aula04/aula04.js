/* Arquivo JS aula 04 Array */

let produtos = ['Arroz', 'Feijão', 'Leite']
var codigos = Array(10, 20, 30)
let meses = ['Jan', 'Fev', 'Mar', 'Abr']

// ADICIONAR no final push = empurre
produtos.push('Açúcar', 'trigo')
codigos.push(40, 50, 60, 70)
meses.push('Mai', 'Jun', 'Ago', '07')

// REMOVER do final pop = estourar
produtos.pop()
codigos.pop()
meses.pop()
meses.pop()

// ADICIONAR no inicio unshift
produtos.unshift('Uva', 'Maçã')

// REMOVER do inicio shift
produtos.shift()

// Remover de uma posicao especifica splice
// splice = emendar
// posicao inicial, quantos remover
codigos.splice(3, 2)

// COPIAR array slice = fatiar porção
// posição inicial, quantos copiar
let meses1 = meses.slice()
let meses2 = meses.slice(0,3)

// 