// Currying é uma técnica que permite tornar uma função que recebe N parâmetros em apenas uma função que recebe 1 parâmetro, e para cada parâmetro retorna-se uma nova função.

function soma(a, b) {
    return a + b;
}

soma(2, 2);
soma(2, 3);
soma(2, 4);
soma(2, 5);

function somaComCurrying(a) {
    return function(b) {
        return a + b;
    }
}

const soma2 = somaComCurrying(2); //Primeiro parâmetro. Quando executar somaComCurrying retornará a primeira função, e dentro da primeira função tem uma outra função que pode receber um outro valor. Ou seja, a const recebeu a segunda função de somaComCurrying(a).
console.log(soma2(2)); //Segundo parâmetro recebido dentro da segunda função que foi herdada em soma2.
console.log(soma2(3)); //Execução igual a linha 19.
console.log(soma2(4)); //Execução igual a linha 19.
console.log(soma2(5)); //Execução igual a linha 19.