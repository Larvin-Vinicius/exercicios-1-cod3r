/*
Construa uma função para um sistema de notas de uma instituição que possui a seguinte política de
classificação: Todo aluno recebe uma nota de 0 a 100. Alunos com nota abaixo de 40 são reprovados. As notas
possuem a seguinte regra de arredondamento: Se a diferença entre a nota e o próximo múltiplo de 5 for menor
que 3, arredondar a nota para esse próximo múltiplo de 5. Se a nota for abaixo de 38, não é feito nenhum
arredondamento pois esta nota resulta na reprovação do aluno. Por exemplo, a nota 84 será arredondada para
85, mas a nota 29 não será arredondada por ser abaixo de 40 e não ser possível arredondamento eficiente, ou
seja, que evite a reprovação do aluno. No caso de a nota ser 38, o arredondamento é possível pois atingirá 40
e o aluno será aprovado.

[x] - Receber Nota de 0 a 100
[x] - Nota menor que 40 Reprova
[x] - Arredondamento da nota proximo a um multiplo de 5
[x] - Arredondamento não funciona para abaixo de 40

*/

function verificaNota (nota = 0) {
    if (nota > 40) {
        for (let i = 0 ; i <= 100 ; i++) {
            if (i % 5 === 0) {
                if ((nota + 2) == i) {
                    nota = i;
                }
            } 
        }
        console.log(`Sua nota é ${nota}, você está aprovado`);
    } else {
        console.log(`Sua nota é ${nota}, você está reprovado`);
    }

}

function arredondamento(nota) {
    
}


verificaNota(44);
verificaNota(30);
verificaNota(43);
verificaNota(1);
verificaNota(43);
verificaNota(38);
verificaNota(60)
