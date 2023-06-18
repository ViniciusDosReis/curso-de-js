// programa principal
// POO = PROGRAMAÇÃO ORIENTADA A OBJETOS

// classes = são modelos ou moldes de objetos
// objetos = são abstrações ou representações de 'coisas' que existem no mundo
// objeto = instância ou objeto do tipo | objeto é um tipo de dados

class Pessoa 
{
    // atributos = variáveis ou características
    _nome     // tipo String
    _idade    // tipo Integer
    _peso     // tipo Float ou Real
    _altura
    _imc

    // métodos = funções ou comportamentos

    // método construtor
    constructor (nome, idade, altura, peso) {
        this._nome = nome
        this._idade = idade
        this._altura = altura
        this._peso = peso
        this._imc = this._peso / (this._altura * this._altura)
    }

    calculaImc() {
        return (this._peso / (this._altura * this._altura)).toFixed(2)
    }

    // get = pegar
    get nome() {
        return this._nome
    }

    get idade() {
        return this._idade
    }

    get imc() {
        return this._imc
    }

    get peso() {
        return this._peso
    }

    get altura() {
        return this.altura
    }
    
    // set = configurar, editar, alterar
    set nome(novoNome) {
        this._nome = novoNome
    }

    set idade(novaIdade) {
        this._idade = novaIdade
    }

    set peso(novoPeso) {
        this._peso = novoPeso
    }

}

// criar novo objeto a partir da class, instanciar
let pessoa1 = new Pessoa('Edson', 40, 1.75, 84.5)
let pessoa2 = new Pessoa('Vinicius', 17, 1.65, 51)
let pessoa3 = new Pessoa('Ana', 20, 1.41, 42.3)
let pessoa4 = new Pessoa('Bia', 50, 1.52, 98)

console.log(`Nome: ${pessoa1._nome}`)
console.log(`Idade: ${pessoa1._idade}`)
console.log(pessoa1._imc)
console.log(pessoa1._peso)

pessoa1.nome = 'Edson Lopes'
pessoa1.idade = 39
pessoa1.peso = 80.0

console.log(pessoa1._nome)
console.log(pessoa1._idade)
console.log(pessoa1._peso)

/* atribuir valores para os atributos de um objeto
pessoa1._idade = 40
pessoa1._nome = 'Edson'
pessoa1._peso = 84.5
pessoa1._altura = 1.75 */

/*pessoa2._idade = 17
pessoa2._nome = 'Vinicius'
pessoa2._peso = 51
pessoa2._altura = 1.65 */

console.log(pessoa1)
console.log(pessoa2)
console.log(pessoa3)
console.log(pessoa4)

console.log(pessoa1.calculaImc())
console.log(pessoa2.calculaImc())
console.log(pessoa3.calculaImc())