function escolhaTipoDeVeiculo (tipo) {
    switch (tipo) {
        case 'hatch':
            console.log('Compra efetuada com sucesso');
            break;
        case 'sedam':
        case 'motocicleta':
        case 'caminhonete':
            console.log('Tem certeza que não prefere este modelo?');
            break;
        default:
            console.log('Não trabalhamos com este tipo de veiculo aqui')
    }
}

escolhaTipoDeVeiculo('hatch');
escolhaTipoDeVeiculo('sedam');
escolhaTipoDeVeiculo('motocicleta');
escolhaTipoDeVeiculo('caminhonete');
escolhaTipoDeVeiculo('Rabeta');