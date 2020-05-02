/**
 * DECORATOR: Uma funçào Decorator recebe uma outra função como parâmetro e estende o seu comportamento sem modificá-la explicitamente.
 */

let loggedIn = false;


function callIfAutheticated(fn) { //Controla a execução da função que é passada, pois só vai executar a função se uma pré-condição for estabelecida ou verdadeira.
    return !!loggedIn && fn(); //Como loggedIn foi iniciado como false, então ele não executará a função passada por parâmetro, apenas executará se loggedIn for true, por isso retorna false ao usar !!.
}

function sum(a, b) {
    return a + b;
}

console.log(callIfAutheticated(() => sum(2, 3)));
loggedIn = true;
console.log(callIfAutheticated(() => sum(2, 3)));
loggedIn = false;
console.log(callIfAutheticated(() => sum(2, 3)));