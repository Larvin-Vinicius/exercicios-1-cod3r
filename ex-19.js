function cardapio (id, quantidade) {
    let valor = 0;
    switch (id) {
        case 100:
            valor = 3.00;
            console.log(`Cachorro quente, R$ 3,00. Unidades pedidas: ${quantidade}, total R$${valor * quantidade.toFixed(2)}`);
            break;
        case 200:
            valor = 4.00;
            console.log(`Hamburguer simples, R$ 4,00.Unidades pedidas: ${quantidade},  total R$${valor * quantidade}`);
            break;
        case 300:
            valor = 5.50;
            console.log(`Cheeseburger, R$ 5,50.Unidades pedidas: ${quantidade},  total R$${valor * quantidade}`);
            break;
        case 400:
            valor = 7.50;
            console.log(`Bauru, R$ 7,50. Unidades pedidas: ${quantidade},  total R$${valor * quantidade}`);
            break;
        case 500:
            valor = 3.50;
            console.log(`Refrigerante, R$ 3,50. Unidades pedidas: ${quantidade}, total R$${valor * quantidade}`);
            break;
        case 600:
            valor = 2.80;
            console.log(`Suco, R$ 2,80. Unidades pedidas: ${quantidade}, total R$${valor * quantidade}`);
            break;
        default:
            console.log('Produto não existe')
    }
}

cardapio(100, 2);
cardapio(10, 2);
cardapio(300, 5);
cardapio(500, 3);
cardapio(400, 6);
cardapio(200, 9);
