
function jurosSimples (capitalInicial, taxa, tempo) {
    let montante = capitalInicial * (1 + (taxa / 100) * tempo);
    console.log(montante);
}

function jurosCompostos(capitalInicial, taxa, tempo) {
    let montante = capitalInicial * (1 + (taxa / 100)) ** tempo
}
jurosSimples(1000, 2.5, 1);
jurosSimples(20000, 6, 3);
jurosCompostos(20000, 6, 12);