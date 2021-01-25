function calculadora (operacao, x, y) {
    switch (operacao) {
        case 'adição':
        case '+':
            console.log(`${x} + ${y} = ${x + y}`);
            break;
        case 'subtração':
        case '-':
            console.log(`${x} - ${y} = ${x - y}`);
            break;
        case 'multiplicação':
        case '*':
            console.log(`${x} * ${y} = ${x * y}`);
            break;
        case 'divisão':
        case '/':
            console.log(`${x} / ${y} = ${x / y}`);
            break;
        default:
            console.log('Operação indisponivel')
    }
}

calculadora('adição', 3, 5);
calculadora('subtração', 3, 5);
calculadora('multiplicação', 3, 5);
calculadora('noiasação', 3, 5);

calculadora('+', 2, 5);
calculadora('-', 7, 5);
calculadora('*', 3, 9);
calculadora('noiasação', 3, 5);
