function qualFruta(fruta) {
    switch(fruta) {
        case 'maçã':
            console.log('Não vendemos esta fruta aqui');
            break;
        case 'kiwi':
            console.log('Estamos com escassez de kiwis');
            break;
        case 'melância':
            console.log('Aqui está, são 3 reais o quilo');
            break;
        default:
            console.log('ERRO');
    }
}

qualFruta('maçã');
qualFruta('kiwi');
qualFruta('melância');
qualFruta('abacate')