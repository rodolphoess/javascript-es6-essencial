console.log('Questão 1: ');
let personagem = {
    velocidade: 9,
    poder: 15,
    sorte: 20
}

//   console.log(Object.personagem(velocidade));
console.log('Assign: ', Object.assign(personagem, { esquiva: 2 }));
console.log('Keys: ', Object.keys(personagem));
console.log('Freeze: ', Object.freeze(personagem));
console.log('Entries: ', Object.entries(personagem));

/**
 * -----------------------------
 */

console.log('\nQuestão 2: ');

const bandas = [{
        name: 'The Who',
        genero: 'Rock'
    },
    {
        name: 'Queen',
        genero: 'Rock'
    },
    {
        name: 'Lenine',
        genero: 'MPB'
    },
    {
        name: 'Tim Maia',
        genero: 'MPB'
    }
];

const soul = bandas.filter(banda => banda.genero === 'Rock');
console.log(soul);