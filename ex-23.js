function media (alunoId, primeiraNota, segundaNota, terceiraNota) {
    
    let mediaPonderada = ((4 * primeiraNota) + (3 * segundaNota) + (3 * terceiraNota)) / (4 + 3 + 3);
    console.log(`Codigo do aluno: ${alunoId}, 1° nota ${primeiraNota}, 2° nota ${segundaNota}, 3° nota ${terceiraNota}`)
    
    if (mediaPonderada >= 5) {
        console.log(`A média de notas do aluno ${alunoId} é ${mediaPonderada}, APROVADO!`);
    } else {
        console.log(`A média de notas do aluno ${alunoId} é ${mediaPonderada}, REPROVADO`);
    }
}

media(1, 10, 5, 6);
media(2, 3, 4, 8);
media(3, 9, 2, 5);
media(4, 10, 9, 9.5);