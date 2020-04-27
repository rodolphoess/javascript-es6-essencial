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
const totalAge = persons.reduce((age, person) => { // age = o parâmetro que você quer retornar e será recebido por totalAge; person = o elemento de persons que está sendo iterado.
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