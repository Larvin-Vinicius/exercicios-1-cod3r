function valorPlanoDeSaude (idade, taxa = 100) {
        if (idade < 10) {
            taxa = taxa + 80;
            console.log(`Devido sua idade de ${idade} anos, o valor será R$${taxa}`);
        } else if (idade >= 10 && idade <= 30) {
            taxa = taxa + 50;
            console.log(`Devido sua idade de ${idade} anos, o valor será R$${taxa}`);
        } else if (idade > 30 && idade <= 60) {
            taxa = taxa + 95;
            console.log(`Devido sua idade de ${idade} anos, o valor será R$${taxa}`);
        } else if (idade > 60) {
            taxa = taxa + 130;
            console.log(`Devido sua idade de ${idade} anos, o valor será R$${taxa}`);
        }
}

valorPlanoDeSaude(5);
valorPlanoDeSaude(11);
valorPlanoDeSaude(22);
valorPlanoDeSaude(44);
valorPlanoDeSaude(90);




