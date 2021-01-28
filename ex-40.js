function conceitosNotas (notas) {
    for(let i of notas) {
        if (i >= 0 && i <= 4.9) {
            console.log(`${i} -> D`);
        } else if (i >= 5 && i <= 6.9) {
            console.log(`${i} -> C`);
        } else if (i >= 7 && i <= 8.9) {
            console.log(`${i} -> B`);
        } else if (i >= 9 && i <= 10) {
            console.log(`${i} -> A`);
        }
    }
}

let notas = [4, 9, 2, 3, 3.5, 6, 5.2, 4.9, 7.6];

conceitosNotas(notas);