let numeroSecreto = gerarNumeroAleatorio();
let numeroTentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

function verificarChute() {
    let chute = document.querySelector('input').value;
    let palavraTentativa = numeroTentativas == 1 ? 'Tentativa' : 'Tentativas';
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Parabens!!');
        exibirTextoNaTela('p', `Você vençeu o jogo do número secreto com ${numeroTentativas} ${palavraTentativa}.`);
    } else {
        let ajuda = chute < numeroSecreto ? 'MAIOR' : 'MENOR';
        exibirTextoNaTela('p', `O numero secreto é ${ajuda} que o chute`);
        numeroTentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}

function limparCampo() {
    
}
