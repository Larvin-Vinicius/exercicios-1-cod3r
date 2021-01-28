function troca (arrayA, arrayB) {
    if (arrayA.length !== arrayB.length) {
        console.log('Os arrays não tem o mesmo tamanho');
    } else {
        arrayA.push(...arrayB);
        arrayB.push(...((arrayA.splice(0, (arrayA.length / 2)))));
        arrayB.splice(0, (arrayB.length / 2));

        console.log('1° array', arrayA);
        console.log('2° array', arrayB);

    }
}

let a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let b = [10, 11, 12, 13, 14, 15, 16, 17, 18];

troca(a, b)