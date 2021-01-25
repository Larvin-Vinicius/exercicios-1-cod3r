function fatorial (numero) {
    for (let i = numero - 1 ; i >= 1 ; i--) {
        numero *= i;
    }
    console.log(numero);
}

fatorial(4);
fatorial(5);
fatorial(6);
fatorial(7);
