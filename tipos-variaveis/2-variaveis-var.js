var test = 'example out scope';

//Declaração de função de execução imediata, sem que seja necessário a chamada da função pelo nome dela posteriormente.
(() => { //=> representa uma Arrow Function.
    console.log(`Valor dentro da função "${test}"`); //Dentro do escopo da função, essa variável test não existe, por isso ela imprimirá undefined.

    if (true) {
        var test = 'example';
        /* A mesma variável está sendo declarada de novo dentro do bloco do if, ou seja, será que a variável será modificada? Não, a primeira test está fora do escopo da função. Nesse caso essa var irá subir para o escopo da função, 
        mas se ela já está dentro do bloco do if, então porque ela não fica dentro desse escopo? Porque o tipo 'var' só entende o escopo de função e o escopo global, ela não entende o escopo de bloco. Por isso aqui será aplicado o conceito de
        Hoisting e a variável do tipo var será içada para o topo da função. */
        console.log(`Valor dentro do if "${test}"`);
    }

    console.log(`Valor após a execução do if "${test}"`);
})();

/* 
O caso acima ficaria como esse trecho de código abaixo comentado, após aplicado o Hoisting:

var test = 'example out scope';

(() => {
    var test;
    console.log(`Valor dentro da função "${test}"`);

    if (true) {
        test = 'example';
        console.log(`Valor dentro do if "${test}"`);
    }

    console.log(`Valor após a execução do if "${test}"`);
})();
*/