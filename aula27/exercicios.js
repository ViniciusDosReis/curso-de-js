// Exercicio 1 --------------------------------------
ed()

function ed() {
    console.log('Bom dia, Mundo!!!')
}

// Exercicio 2--------------------------------------
let cubo = (c) => {
    let res = c * c *c
    return res
}
console.log(cubo(5))

// Exercicio 3--------------------------------------
let conversor = (f) => {
    /*let tc = 5 * [(f - 32) / 9]
    return `${tc}°`*/
    let res = (f - 32) * 5 / 9
    return res
} 
console.log(conversor(68))

// Exercicio 4 -------------------------------------
let calcPct = (...val) => {
    return val.reduce((acc, next) =>next / acc * 100)
}

let x = 40
let y = 10
let pct = calcPct(x, y)
console.log(`${pct}% de ${x} é ${y}`)

// Exercicio 5 -------------------------------------
/*let calcularImovel = (...valores) => {
    let m2 = 3000
    let res = valores.reduce((metragem,quartos) => {
        if (quartos == 1) {
            return metragem * (m2 * 1)
        } else if (quartos == 2) {
            return metragem * (m2 * 1.2)
        } else if (quartos == 3) {
            return metragem * (m2 * 1.5)
        }
        return res
    })
}
*/

let calcularImovel = (metragem,quartos) => {
    let m2 = 3000
    if (quartos == 1) {
        return metragem * (m2 * 1)
    } else if (quartos == 2) {
        return metragem * (m2 * 1.2)
    } else if (quartos == 3) {
        return metragem * (m2 * 1.5)
    }
}

let metragem = 123
let quartos = 2
let preco = calcularImovel(metragem, quartos)
console.log(`A casa custa R$ ${preco}`)

// Exercicio 6 -----------------------------------
let validar = (usu,sen) => {
    if (usu == 'Pedro' && sen == 123) {
        return true
    } else {
        return false
    }
}

let usuario = 'Pedro'
let senha = '123'
let validacao = validar(usuario, senha)
if (validacao) {
    console.log('Acesso concedido.')
} else {
    console.log('Acesso NEGADO!')
}