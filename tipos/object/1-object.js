let user = {
    name: 'Rodolpho'
};
console.log('Objeto inicial: ', user);
console.log('Propriedade interna inicial do primeiro parâmetro: ', user.name);

// Alterando a propriedade de um objeto.
user.name = 'Outro nome';
console.log('\nObjeto após modificação da linha 8: ', user);

user['name'] = 'Outro nome 2'; //Forma alternativa, como array, de acessar propriedade do objeto.
console.log('Objeto após modificação da linha 11: ', user);

const prop = 'name';
user[prop] = 'Outro nome 3'; //Forma alternativa de acessar propriedade do objeto definindo o nome da propriedade em uma const. No final é algo muito parecido com o que aconteceu na linha 11.
console.log('Objeto após modificação da linha 15: ', user);

// Criando uma propriedade.
user.lastName = 'Erick Soares de Sousa';
console.log('\nObjeto após criação de uma propriedade na linha 19: ', user);

// Deletando uma propriedade.
delete user.name;
console.log('\nObjeto após deleção de propriedade na linha 23: ', user);