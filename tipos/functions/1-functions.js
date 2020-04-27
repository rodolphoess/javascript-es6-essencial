function fn() {
    return 'Return of the Tradictional Function';
}

const arrowFn = () => 'Return of the Arrow Function'; // A declaração dessa Arrow Function tem a mesma semântica da função declarada na linha 1.

console.log(fn());
console.log(arrowFn());

const arrowFn2 = () => {
    // Caso seja necessário haver mais tratamentos na função.
    return 'Return of the arrow function 2';
}

console.log(arrowFn2());

// Funções também são objetos, por isso pode-se adicionar propriedades a elas.
fn.prop = 'Posso criar propriedades';
console.log(fn());
console.log('Retorno de fn() após adicionar uma propriedade na linha 18: ', fn.prop);

// Funções podem receber parâmetros, que inclusive caso esses parâmetros repitam-se pode-se aplicar o conceito de Currying para não precisar ficar repetindo sempre os mesmos valores de parâmetros.
const logValue = value => console.log(value); // O value nesse caso representa um parâmetro que é recebido na Arrow Function.
const logFnResult = fnParam => console.log(fnParam()); // O fnParam nesse caso representa uma função que é recebida na Arrow Function.

logFnResult(fn);