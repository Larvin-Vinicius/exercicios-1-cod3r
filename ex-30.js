let vetor = [22, 2, 3, 4, 5, 9, 10, 50, 11, 12, 1, 21, 19, 166];

let maior = 0;
let menor = vetor[0];

for (let i of vetor) {
    if (i > maior) {
        maior = i;
    }
    if (i < menor) {
        menor = i;
    }
}

console.log(maior)
console.log(menor)