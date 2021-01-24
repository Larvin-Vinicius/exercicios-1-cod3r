function quatro (ano) {
    for(let i = 0 ; i <= ano ; i += 4) {
        if (ano === i) {
            return true;
        }
    }
    return true;
}

function cem (ano) {
    for (let i = 0 ; i<= ano; i += 100) {
        if (ano === i) {
            return (true);
        }
    }
}

function quatrocentos (ano) {
    for (let i = 0 ; i <= ano ; i += 400) {
        if (ano === i) {
            return true;
        }
    }
} 

function confereAno(ano) {
    if (quatrocentos(ano) === true) {
        console.log(`O ano ${ano} é bisexto, conforme a regra dos 400`);     
    } else if (cem(ano) === true) {
        console.log(`O ano de ${ano} não é bisexto conforme a regra dos 100`);
    } else if (quatro(ano) === true) {
        console.log(`O ano ${ano} é bisexto, conforme a regra dos 4`);
    }
}

confereAno(2020);