function comparaPalavra (a, b) {
    if (a.toUpperCase() === b.toUpperCase()) {
        console.log(`A palavra ${a} e ${b} tem os mesmos caracteres`);
    } else {
        console.log(`A palavra ${a} e ${b} não tem os mesmos caracteres`);
    }
}

comparaPalavra('ABC', 'abcd')