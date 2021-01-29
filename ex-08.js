/**
 * Comparar os valores [ ]
 * Numeros de vezes que um numero fica maior que o anterior [ ]
 * Qual é o menor numero [ ] 
 */

function comparaPontos (pontuacao) {
    pontuacao = pontuacao.split(' ');
    let recorde = 0;
    let maiorPontuacao = pontuacao[0];
    let menorPontuacao = pontuacao[0];

    for (let i of pontuacao) {
        if (i > maiorPontuacao) {
            maiorPontuacao = i;
            recorde++;
        }

        if (i < menorPontuacao) {
            menorPontuacao = i;
        }
    }
    console.log('Maior Pontuação : ', maiorPontuacao)
    console.log('Quantidade de Quebra de recordes : ', recorde)
    console.log('Menor Pontuação : ', menorPontuacao)
}


let p = "10 10 10 10 21 20 32 2 99 54 32 2";
comparaPontos(p)
