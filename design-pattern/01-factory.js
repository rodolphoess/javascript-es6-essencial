function Pessoa() {
    return {
        name: 'Rodolpho',
        lastName: 'Erick'
    }
}

//Por não invocar o 'new' na hora de instanciar a função/objeto pessoa, então trata-se do padrão de projeto Factory.
const p = Pessoa();
console.log(p);

function Pessoa2(customProperties) {
    return {
        name: 'Rodolpho',
        lastName: 'Erick',
        ...customProperties
    }
}

//Por não invocar o 'new' na hora de instanciar a função/objeto pessoa2, então trata-se do padrão de projeto Factory.
const p2 = Pessoa2({ name: 'Custom Name', age: 29 });
console.log(p2);