let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function clicarConsole() {
   console.log('O console foi clicado') 
}

function clicarAlerta() {
    alert("Eu amo JS")
}

function clicarPrompt() {
    console.log('o prompt foi clicado')
    let nomeDaCidade = prompt('Digite o nome de uma cidade brasilera:')
    alert(`Estive em ${nomeDaCidade} e lembrei de você!`)
}

function clicarSoma() {
    let primeiroNumero = parseInt(prompt('Digite o primeiro número'));
    let segundoNumero = parseInt(prompt('Digite o segundo número'));
    let resultado = primeiroNumero + segundoNumero;
    alert(`${primeiroNumero} + ${segundoNumero} = ${resultado}`)
}