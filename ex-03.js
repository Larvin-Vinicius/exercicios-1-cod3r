/*
Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.
*/

let pot = (b, e) => b ** e ;

console.log(pot(2, 5));
console.log(pot(7, 9));

/*
let pot = function(b, e) {
    let x = 1;
    for(let i = 1 ; i <= e ; i++ ) {
        x = x * b;
    }
    console.log(x);
}

pot(2, 5);
pot(5, 8);

*/
