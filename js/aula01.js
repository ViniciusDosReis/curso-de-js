/* 
arquivo js externo
*/

document.write("Olá mundo!")
console.log("Outro olá mundo!") // comentario
// alert("Olá mundo com Alerta")

let mensagem = "Minha mensagem"
let mensagem2 = "Outra mensagem"
let meuPeso = 52
let minhaAltura = 1.65
let minhaIdade = 16
let ehDoador = false
let test = null

/* CRIAR CONSTANTES E atribuir valor */
const PI = 3.1415
const TAXA = 0.5

test = "Algum conteúdo"

/* ESCREVER O CONTEUDO DE VARIAVEIS e CONSTANTES */
document.write("<p>Mensagem " + mensagem + "</p>")

document.write(`Mensagem2: ${mensagem2}`)

document.write("<p>Peso: " + meuPeso + "Kg</p>")

document.write(`Altura: ${minhaAltura} m`)

document.write("<p>Idade: " + minhaIdade + " anos</p>")

document.write("<p>Doador?" + ehDoador + "</p>")

document.write("<p>Teste:" + test + "</p>")

document.write("<p>PI " + PI + "</p>")

document.write("<p>TAXA " + TAXA + "</p>")