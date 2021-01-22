/*
[ ] - Função que recebe os lados do triangulo
[ ] - Condição para a existencia do triangulo
[ ] - Equilatero (3 lados iguais.)
[ ] - Isósceles (2 lados iguais)
[ ] - Escaleno (todos os lados diferentes)
*/

function validarTriangulo (ladoA, ladoB, ladoC) {
    if (ladoA === ladoB && ladoA === ladoC && ladoB === ladoC) {
        console.log('Triângulo Equilatero');
    } else if (ladoA === ladoB || ladoB === ladoC || ladoC == ladoA) {
        console.log('Triângulo isósceles');
    } else if (ladoA !== ladoB && ladoA !== ladoC && ladoB !== ladoC){
        console.log('Triângulo Escaleno')
    }
}

function criarTriangulo(ladoA, ladoB, ladoC) {
    if ((ladoA + ladoB) > ladoC &&
        (ladoA + ladoC) > ladoB &&
        (ladoC + ladoB) > ladoA) {
            console.log("Um triângulo pode ser formado");
            
            validarTriangulo(ladoA, ladoB, ladoC);

        } else {
            console.log('Não é possível formar um triangulo')
        }
}


criarTriangulo(16, 20, 30);
criarTriangulo(2, 5, 1);