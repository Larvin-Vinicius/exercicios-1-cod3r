function trocarDinheiro (valor) {
    while(valor > 0) {
        if((valor - 100) >= 0) { 
            valor -= 100;
            console.log('R$',100);
        } else if ((valor - 50) >= 0) {
            valor -=  50;
            console.log('R$',50);
        } else if ((valor - 10) >= 0) {
            valor -= 10;
            console.log('R$',10);
        } else if ((valor - 5) >= 0) {
            valor -= 5;
            console.log('R$',5);
        } else if ((valor - 1) >= 0) {
            valor -= 1;
            console.log('R$',1);
        }
    }
}

trocarDinheiro(18);