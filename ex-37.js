function progrecaoAritmetica (primeiroNumero, numeroDeTermos, razao) {
    let somaDosTermos = 0;
    for (let i = primeiroNumero ; primeiroNumero <= numeroDeTermos ; primeiroNumero += razao) {
        console.log(primeiroNumero);
        somaDosTermos += primeiroNumero;
    }
    console.log('A soma dos termos é: ', somaDosTermos);
}


function progrecaoGeometrica (primeiroNumero, numeroDeTermos, razao) {
    let somaDosTermos = 0;
    for (let i = primeiroNumero ; primeiroNumero <= numeroDeTermos ; primeiroNumero *= razao) {
        console.log(primeiroNumero);
        somaDosTermos += primeiroNumero;
    }
    console.log('A soma dos termos é: ', somaDosTermos);
}

progrecaoAritmetica(2, 20, 2);

progrecaoGeometrica(2, 20, 2);