let lutador = "Fedor Vladimirovich Emelianenko"
let Nacionalidade = 'Russo'
let idade = 44
let peso = 106
let altura = 1.83

document.write(`<div class="card">
                <h2>Lutador</h2>
                <img src="lutador.jpg" alt="imglutar">
                <p>${lutador}</p>
                <p>${Nacionalidade}</p>
                <p>${idade} anos</p>
                <p>${peso} Kg</p>
                <p>${altura} m</p>
                </div>`)

const dia = 10
const mes = 9
const ano = 2021
const frase = 'Seja curioso. Leia de Tudo. Tente coisas novas. O que as pessoas chamam de inteligência se resume a curiosidade.'
const autor = 'Aaron Swartz'

document.write(`<div class="frase">
                <h2>Frase do Dia</h2>
                <sup>${dia}/${mes}/${ano}</sup>
                <blockquote> &quot;${frase} &quot;</blockquote>
                <cite>${autor}</cite>
                </div>`)

let meses = ['Janeiro', ' Fevereiro', ' Março ']
document.write(`<div class="mes">
                <h2>Array de Meses do Ano</h2>
                <p>${meses} ...</p>
                </div>`)


let jogo = {
    titulo : 'League Of Legends - LOL',
    Desenvolvedor : 'Riot Games',
    Lancamento : 2009
            }
document.write(`<div class="jogo">
                <h2>Jogo</h2>
                <h5>Título</h5>
                <p>${jogo.titulo}</p>
                <h5>Desenvolvedor</h5>
                <p>${jogo.Desenvolvedor}</p>
                <h5>Ano do Lançamento</h5>
                <p>${jogo.Lancamento}</p>
                </div>`)
