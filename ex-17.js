function aumentoSalario (salario, planoDeAumento) {
    let novoSalario = 0;
    switch (planoDeAumento) {
        case 'A':
           novoSalario =  salario * (1+(10/100));
           console.log(`Seu novo salario será: R$${novoSalario}`);
           break;
        case 'B':
            novoSalario = salario * (1+(15/100));
            console.log(`Seu novo salario será: R$${novoSalario}`);
            break;
        case 'C':
            novoSalario =  salario * (1+(20/100));
            console.log(`Seu novo salario será: R$${novoSalario}`);
            break;
        default:
            console.log('Plano de salario invalido')
    }
}

aumentoSalario(2080, 'A');
aumentoSalario(2080, 'B');
aumentoSalario(2080, 'C');
aumentoSalario(2080, 'D');