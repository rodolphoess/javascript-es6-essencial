/* Symbol representa a criação de um objeto único. A grande proposta do symbol era permitir a criação de atributos privados dentro de objetos ou classes, mas como o JS não tem modificador de acesso, então acabou mudando a proposta com o tempo 
e passou a ser a criação de um objeto único. A inicialização dos sumbols podem até ser iguais, como nas linhas 5 e 6, mas eles serão totalmente diferentes e únicos. Além disso, não é possível sobrescrever um symbol, e também como há modificador
de acesso, também não é possível acessar as propriedades do symbol pelas estruturas de repetição comumente usadas, tais como for e while, é necessário utilizar funções como proxy para poder ter acesso ao conteúdo do symbol.
*/

const symbol1 = Symbol('Nome');
const symbol2 = Symbol('Nome');

// Symbols são únicos
console.log('symbol1 é igual a symbol2? ', symbol1 === symbol2); // O operador === compara se as variáveis são do mesmo tipo e com mesmo conteúdo. Como symbol é único, apesar de ter o mesmo tipo e conteído em symbol1 e symbol2, então retorna false.