function iniciaJogo() {

    var url = window.location.search;
    //alert(url);

    var nivel_jogo = url.replace("?", "");
    //alert(nivel_jogo);

    var tempo_segundos = 0;

    // Fácil -> 120segundos
    if (nivel_jogo == 1) {
        tempo_segundos = 120;

    }

    // Normal -> 60segundos
    if (nivel_jogo == 2) {
        tempo_segundos = 60;

    }

    // Difícil -> 30segundos
    if (nivel_jogo == 3) {
        tempo_segundos = 30;

    }

    // Inserindo segundos no span
    document.getElementById('cronometro').innerHTML = tempo_segundos;

    // Quantidade de balões
    var qtde_baloes = 30;

    cria_baloes(qtde_baloes);

    // Imprimir quantidade de balões inteiros
    document.getElementById('baloes_inteiros').innerHTML = qtde_baloes;
    document.getElementById('baloes_estourados').innerHTML = 0;

    contagem_tempo(tempo_segundos + 1);
}

function contagem_tempo(segundos) {

    segundos = segundos - 1;

    if (segundos == -1) {
        clearTimeout();
        fim_de_jogo();
        return false;
    }

    document.getElementById('cronometro').innerHTML = segundos;
    timerId = setTimeout("contagem_tempo(" + segundos + ")", 1000);

}

function fim_de_jogo() {
    alert('Você Perdeu!!!!');
}

function cria_baloes(qtde_baloes) {

    for (var i = 1; i <= qtde_baloes; i++) {
        var balao = document.createElement("img"); // Cria as tags img onde serão setados os elementos de balão
        balao.src = 'imagens/balao_azul_pequeno.png';
        balao.style.margin = '10px'; // Espaçamento entre os baloes
        balao.id = 'b' + i; // Id de cada balao
        balao.onclick = function() { estourar(this); }

        document.getElementById('cenario').appendChild(balao); // Insere o elemento balao dentro do cenario
    }

}

function estourar(e) {
    var id_balao = e.id;
    document.getElementById(id_balao).setAttribute("onclick", "");
    document.getElementById(id_balao).src = 'imagens/balao_azul_pequeno_estourado.png';

    pontuacao(-1);

}

function pontuacao(acao) {

    var baloes_inteiros = document.getElementById('baloes_inteiros').innerHTML;
    var baloes_estourados = document.getElementById('baloes_estourados').innerHTML;

    baloes_inteiros = parseInt(baloes_inteiros);
    baloes_estourados = parseInt(baloes_estourados);

    baloes_inteiros = baloes_inteiros + acao;
    baloes_estourados = baloes_estourados - acao;

    document.getElementById('baloes_inteiros').innerHTML = baloes_inteiros;
    document.getElementById('baloes_estourados').innerHTML = baloes_estourados;
    resultado_jogo(baloes_inteiros);

}

function resultado_jogo(baloes_inteiros) {
    if (baloes_inteiros == 0) {
        alert('Você Ganhou!!!');
        parar_jogo();

    }

}

function parar_jogo() {
    clearTimeout(timerId);
}