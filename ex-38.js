function impares (inicio = 0, fim = 100) {
    if (inicio > fim) {
        let inicio2 = fim;
        let fim2 = inicio;
        inicio = inicio2;
        fim = fim2;
    }

    for (let i = inicio ; inicio <= fim ; inicio++) {
        if (inicio % 2 !== 0) {
            console.log('Numeros impares: ',inicio);
        }
    }
}

impares(1, 5);
impares(33, 5);