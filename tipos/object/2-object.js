let user = [
    { name: 'Rodolpho' },
    { name: 'Marianna' }
];
console.log('Objeto inicial: ', user);
console.log('Propriedade interna inicial do primeiro parâmetro: ', user[0].name);

// Alterando a propriedade de um objeto.
user[0].name = 'Outro nome';
console.log('\nObjeto após modificação da linha 9: ', user);

user[0]['name'] = 'Outro nome 2'; //Forma alternativa, como array, de acessar propriedade do objeto.
console.log('Objeto após modificação da linha 12: ', user);

const prop = 'name';
user[0][prop] = 'Outro nome 3'; //Forma alternativa de acessar propriedade do objeto definindo o nome da propriedade em uma const.
console.log('Objeto após modificação da linha 16: ', user);

// Adicionando novo objeto.
user.name = 'User adicionado';
console.log('\nObjeto após adição de um novo user na linha 20: ', user);

// Criando uma propriedade.
user.lastName = 'Erick Soares de Sousa';
console.log('\nObjeto após criação de uma propriedade na linha 24: ', user);

// Deletando uma propriedade.
delete user.name;
console.log('\nObjeto após deleção de propriedade na linha 28: ', user);