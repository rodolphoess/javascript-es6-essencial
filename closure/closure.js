//Esse é um exemplo meramente ilustrativo para entender como funciona o Closure. Na prática, ao programar profissionalmente, é preferível que programe-se funções puras, em que são aquelas que recebem um parâmetro e retornem algo, ficando mais fácil saber de onde vem a variável.

function init() {
    const exemplo = 'Essa variável';

    return function() {
        console.log(`1 - O valor da variável exemplo é: ${exemplo}.`);

        return function() {
            console.log(`2 - O valor da variável exemplo é: ${exemplo}.`);

            return function() {
                console.log(`3 - O valor da variável exemplo é: ${exemplo}.`);
            }
        }
    }
}

const initFn1 = init();

const initFn2 = initFn1();

const initFn3 = initFn2();

initFn3();