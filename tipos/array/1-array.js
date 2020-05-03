/**
 * ADICIONAR E DELETAR ELEMENTOS DE UM ARRAY: 
 * 
 * Para ADICIONAR um elemento no final do array utilize a função PUSH, ao utilizar a função push ela retornará a quantidade de itens que o array ficou após a adição;
 * Para DELETAR o último elemento de um array utilize a função POP, ao utilizar a função pop ela retornará o item que foi removido do array;
 * Para ADICIONAR um elemento no início do array utilize a função UNSHIFT, ao utilizá-la ela retornará o tamanho do array após a adição do novo elemento;
 * Para DELETAR um elemento no início do array utilize a função SHIFT, ao utilizá-la ela retornará o item que foi removido do array;
 * 
 * Para CONCATENAR dois ou mais arrays retornar um novo array utiliza-se a função CONCAT. Ao utilizar o CONCAT, os arrays raízes não são alterados, seguindo o princípio da imutabilidade;
 * Para FATIAR um array utiliza-se a função SLICE. AO utilizar o SLICE, diz-se os índices do array raíz no qual quer fatiar, ele pega o índice inicial e final e cria um novo array sem alterar o array raíz;
 * Para ADICIONAR OU REMOVER vários itens do array utiliza-se a função SPLICE, diz-se os índices ou o índice do array raíz no qual deseja-se alterar, ele pega o intervalo e cria um novo array sem alterar o array raíz;
 * 
 */

// Array simples de tipos primitivos.
const users = ['Guilherme', 'Pedro', 'Jennifer'];
console.log(users);

// Implementação de array semelhante a um ENUM.
const gender = {
    MAN: Symbol('M'),
    WOMAN: Symbol('W')
}
console.log('\n', gender);

// Array de pessoas com propriedades para cada pessoa.
const persons = [{
        name: 'Guilherme',
        age: 26,
        gender: gender.MAN
    },
    {
        name: 'Pedro',
        age: 43,
        gender: gender.MAN
    },
    {
        name: 'Jennifer',
        age: 18,
        gender: gender.WOMAN
    }
];
console.log('\n', persons);

// Retornar a quantidade de itens de um array.
console.log('\nQuantidade de items no array de pessoas: ', persons.length);

// Verificar se uma variável é um array.
console.log('\nA variável persons é um array? ', Array.isArray(persons), '\n');

// Iterar os itens do array
persons.forEach(person => {
    console.log(`Nome: ${person.name}`);
});

// Filtrar array, seguindo o princípio da imutabilidade, não modificando a referência do objeto raíz, mas sim retornando um novo objeto com o que se deseja.
const mens = persons.filter(person => person.gender === gender.MAN); // === significa mesmo tipo e mesmo conteúdo/referência.
console.log('\nNova lista apenas com homens: ', mens);

// Retornar um novo array, que já está diretamente ligado ao princípio da imutabilidade.
const personsWithCourse = persons.map(person => {
    person.course = 'Introdução ao JavaScript';
    return person;
});
console.log('\nPessoas com a adição do course na linha 47: ', personsWithCourse);

// Transformar um array em outro tipo
const totalAge = persons.reduce((age, person) => { // age = o parâmetro que você quer retornar, será recebido por totalAge e servirá para realizar operaçoes dentro do bloco; person = o elemento de persons que está sendo iterado.
    age += person.age;
    return age;
}, 0); // 0 = valor inicial de age.
console.log('\nSoma da idade das pessoas: ', totalAge);

// Encadeamento das operações filter, map e reduce
const totalEvenAges = persons
    .filter(person => person.age % 2 === 0) // Filtra somente as pessoas com idade par.
    .reduce((age, person) => { // Das pessoas com idade par, atribui um parâmetro age; diz que cada elemento iterado será inserido em person.
        age += person.age; // Ao parâmetro declarado na linha anterior, soma-se à idade do elemento que está sendo iterado.
        return age;
    }, 0); // O valor inicial de age, declarado na linha 63, é 0.
console.log('\nSoma de idades das pessoas que possuem idade par: ', totalEvenAges);

// Cria uma array com 3 posições vazias.
const arr = Array(3);
console.log(arr);

// Nesse caso, cria um array com somente o item 3 inserido nele.
const arr2 = Array.of(3);
console.log(arr2);

// Assim como arr, cria um array com 3 posições vazias.
const arr3 = new Array(3);
console.log(arr3);

// SPLICE: Adicionando e/ou removendo um ou mais itens com a função splice.
const frutas = ['banana', 'melancia'];
console.log(frutas);
frutas.splice(1, 0, 'acerola', 'goiaba'); // Parâmetros: A partir da posição 1; remova 0 elementos; adicione os elementos 'acerola' e 'goiaba'
console.log(frutas);
frutas.splice(3, 1, 'pêssego'); // Parâmetros: A partir da posição 3; remova 0 elementos; adicione o item 'pêssego'
console.log(frutas);