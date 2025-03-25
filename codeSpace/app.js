let numeroSecreto = gerarNumeroAleatorio();
let numeroTentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        let palavraTentativa = numeroTentativas == 1 ? 'Tentativa' : 'Tentativas';
        exibirTextoNaTela('h1', 'Parabens!!');
        exibirTextoNaTela('p', `Você vençeu o jogo do número secreto com ${numeroTentativas} ${palavraTentativa}.`);
        document.getElementById('reiniciar').removeAttribute('Disabled');
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
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroTentativas = 1;
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    exibirMensagemInicial();  
    document.getElementById('reiniciar').setAttribute('disabled', true); 
}