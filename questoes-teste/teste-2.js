let personagem = {
    velocidade: 9,
    poder: 15,
    sorte: 20
}

//   console.log(Object.personagem(velocidade));
console.log(Object.assign(personagem, { esquiva: 2 }));
console.log(Object.keys(personagem));
console.log(Object.freeze(personagem));
console.log(Object.entries(personagem));

/**
 * -----------------------------
 */

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

const soul = bandas.filter(bandas => bandas.genero === 'Rock');
console.log(soul);