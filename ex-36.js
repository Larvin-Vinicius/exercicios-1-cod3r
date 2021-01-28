let vetor = [22, 2, 3, 4, 5, 9, 10, 50, 11, 12, 1, 21, 19, 166];

function multiplicaValores (vetor, valor) {
    let novoVetor = [];
    for (let i of vetor) {
        novoVetor.push(i * valor);
    }
    console.log(novoVetor)
}

function multiplicaValoresMaiorCinco (vetor, valor) {
    let novoVetor = [];
    for (let i of vetor) {
        if (i >= 5) {
            novoVetor.push(i * valor);
        }
    }
    console.log(novoVetor)
}

multiplicaValores(vetor, 2);
multiplicaValoresMaiorCinco(vetor, 2)