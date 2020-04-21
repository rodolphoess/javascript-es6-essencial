//Declaração de função de execução imediata.
(() => {
    const test = 'valor função';
    console.log(`Valor de const dentro da função "${test}"`);

    if (true) {
        const test = 'valor if';
        console.log(`Valor de const dentro do if "${test}"`);
    }

    console.log(`Valor de const após a execução do if "${test}"\n`);
})();

/*
 Assim como o tipo let, o const respeita o escopo global, o escopo de função e o escopo de bloco {}, então o comportamento das variáveis ocorre conforme o esperado, fazendo com que todas as variáveis possuam os valores dentro do seu escopo.
 A diferença entre const e let é que o const a idéia dele é para criar constantes, como o próprio nome diz. Só que ele possui algumas particularidades:

 1 - Quando é atribuído const a um tipo primitivo, como String, não é permitido que haja troca de valor. Entretanto, caso seja criado um objeto (tipo por referência), tal como um Array, é permitido que sejam alterados os conteúdos das 
 propriedadas contidas no Array do tipo const, o que é imutável nesse caso é a referência do ponteiro em memória.

 Mas qual é a vantagem de utilizar objetos como const? É possível congelar inclusive o conteúdo dentro do const, não sendo possível alterar nem a referência nem o conteúdo do objeto.
*/

console.log(`------------------`);

const name = `Guilherme`;

//Não podemos alterar o valor por ser uma const de tipo primitivo. Se executar descomentado, dará um erro na interpretação/execução.
// name = `Guilherme`;

const user = {
    name: 'Guilherme'
};

//Mas se for um objeto conseguimos trocar as propriedades.
user.name = 'Outro nome';

//Não podemos fazer o objeto "apontar" para outro lugar. Por isso, se esse trecho de código for executado sem estar comentado, dará erro na interpretação/execução.
// user = {
//     name: 'Guilherme'
// };

const persons = ['Guilherme', 'Pedro', 'Jennifer'];

//Não podemos fazer o objeto "apontar" para outro lugar, conforme linha 38-41. Por isso, se esse trecho de código for executado sem estar comentado, dará erro na interpretação/execução.
// persons = [];

//Podemos adicionar novos itens.
persons.push('João');
console.log('\nArray após a adição de João: ', persons);

//Podemos remover algum item. Nesse caso foi removido o primeiro item do Array.
persons.shift();
console.log('\nArray após a exclusão da primeira posição do Array: ', persons);

//Conseguimos alterar diretamente.
persons[1] = 'James';
console.log('\nArray após a adição de James na posição 1: ', persons);