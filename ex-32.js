let vetor = [22, 2, 3, 4, -5, 9, -10, 50, -11, -12, -1, 21, 19, 166];

let total = 0;

for (let i = 0 ; i < vetor.length ; i++) {
    total += vetor[i];
}

console.log("A média de valores do vetor é: ", (total / vetor.length).toFixed(2));
