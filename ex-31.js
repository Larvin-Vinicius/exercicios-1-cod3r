let vetor = [22, 2, 3, 4, -5, 9, -10, 50, -11, -12, -1, 21, 19, 166];

let quantidade = 0
for (let i of vetor) {
    if (i < 0) {
        quantidade++;
        console.log(i)
    }
}

console.log('A quantidade de numeros negativos é: ', quantidade);