let listaDeNumerosSorteados = [];
let numerolimite = 50;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 50');     
}
    
exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if(chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto){
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio(){
    let NumeroEscolhido = parseInt(Math.random() * numerolimite + 1);
    let quantidadeElementosNaLista = listaDeNumerosSorteados.length;

if(quantidadeElementosNaLista == numerolimite) {
    listaDeNumerosSorteados = [];
}
    if (listaDeNumerosSorteados.includes(NumeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(NumeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return NumeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true)
}






//Essa é uma nameira de fazer só que nemos usada, é e a mesma coisa de a linha 1 até 7.
//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do número secreto';

//let paragrafo = document. querySelector('p');
//paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

//sempre que criar uma função vai precisar do nome function e tambem vai precisar do nome da função 'NOMECLATURA É IMPORTANTE'.
//Função é responsavel por determinar alguma ação dentro do nosso programa e nosso codigo.
//
//innerHTML = dentro do HTML daquele titulo.
//let titulo usou só para criar a variavel.
//geralmente usam h1 para dar nomes a titulos das paginas.
//vai até o h6 mas o h1 é o mais principal.

//input = entrada de usuário

// = é atribuir um valor e == é comparando um valor.

//String que é texto
//Number que é número
//Boolean que é vedadeiro ou falso
//Arry = lista
//push = adiciona item ao final da lista