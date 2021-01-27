let vetor = [1, 2, 3, 4, 5, 9, 10, 50, 11, 12, 21, 19, 16];

for (let i = 0 ; i < vetor.length ; i++) {
    if (vetor[i] < 10 || vetor[i] > 20){
        console.log('Fora do intervalo de 10 e 20 =>', vetor[i]);
    }else if (vetor[i] >= 10 && vetor[i] <= 20) {
        console.log('Entre 10 e 20 =>', vetor[i]);
    }
}