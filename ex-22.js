function jurosCompostos(capitalInicial,tempo , taxa = 5) {
    return (capitalInicial * (1 + (taxa / 100)) ** tempo).toFixed(2);
}


function anuidade (valor, mes) {
    switch(mes) {
        case 1:
            break;
        case 2: // fevereiro
            console.log(jurosCompostos(valor, mes));
            break;
        case 3: // março
            console.log(jurosCompostos(valor, mes));
            break;
        case 4: // abril
            console.log(jurosCompostos(valor, mes));
            break;
        case 5: // maio
            console.log(jurosCompostos(valor, mes));
            break;
        case 6: // junho
            console.log(jurosCompostos(valor, mes));
            break;
        case 7: // julho
            console.log(jurosCompostos(valor, mes));
            break;
        case 8: // agosto
            console.log(jurosCompostos(valor, mes));
            break;
        case 9: // setembro
            console.log(jurosCompostos(valor, mes));
            break;
        case 10: // outubro
            console.log(jurosCompostos(valor, mes));
            break;
        case 11: // novembro
            console.log(jurosCompostos(valor, mes));
            break;
        case 12: // dezembro
            console.log(jurosCompostos(valor, mes));
            break;

    }
}
anuidade(19, 12);
anuidade(1000, 3);
anuidade(10, 9);
anuidade(28, 8);
anuidade(20, 10);
anuidade(100, 2);
