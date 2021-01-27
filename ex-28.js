let vetor = [1, 2, 3, 4, 5, 9, 10, 55, 632, 77, 777];

for (let i of vetor) {
    if (i % 2 !== 0) {
        console.log('impar: ', i);
    } else {
        console.log('par: ', i)
    }
}

