const user = {
    name: 'Rodolpho',
    lastName: 'Erick Soares de Sousa'
};

// Recupera as chaves/propriedades do objeto
console.log('Propriedades do objeto user na linha 7: ', Object.keys(user));

// Recupera os valores das chaves/propriedades do objeto
console.log('\nValores das propriedades do objeto user na linha 10: ', Object.values(user));

// Retorna um array de arrays contendo [ nome_prop, valor_prop ]
console.log('\nLista de propriedades e valores na linha 13: ', Object.entries(user));

// Mergear propriedades de objetos.
Object.assign(user, { fullName: user.name + ' ' + user.lastName }); //O primeiro parâmetro é o objeto target do merge, e o segundo parâmetro é o que será adicionado/mergeado.
console.log('\nArray após ser mergeado as propriedades existentes do objeto na linha 16: ', user);

/*
Pensando no Princípio da Imutabilidade, a prática feita na linha 16 não é a recomendada. O ideal seria criar um novo Array, conforme primeiro parâmetro da linha 22, transferir o conteúdo do array existente para o novo para aí sim realizar 
o merge. Nessa linha, o primeiro parâmetro indica a criação de um novo array que passa a ser o objeto target, o segundo é o objeto com as informações do merge, e o segundo parâmetro é o que será adicionado/mergeado.
*/
console.log('\nCria um novo array e mergeia duas ou mais propriedades em um objeto na linha 19: ', Object.assign({}, user, { age: 26, birthday: '17/12/1990' }));
console.log('Apesar do merge ocorrindo anteriormente (linha 23), o array user original não sofre com o último merge e adição de age e birthday: ', user);

// O freeze previne todas as alterações em um objeto, sejam elas alterações, criação ou exclusão de propriedades.
const newObj = { foo: 'bar' };
Object.freeze(newObj);
console.log('\n\nCriação de um objeto/array e congelamento para qualquer tipo de alteração nele: ', newObj);

newObj.foo = 'change';
console.log('Tentativa de mudança (linha 31) do objeto congelado e resultado do objeto após a tentativa: ', newObj);

delete newObj.foo;
console.log('Tentativa de exclusão de propriedade existente (linha 34) no objeto congelado e resultado do objeto após a tentativa: ', newObj);

newObj.bar = 'foo';
console.log('Tentativa de adição de propriedade (linha 37) no objeto congelado e resultado do objeto após a tentativa: ', newObj);

// O seal permite apenas a alteração de propriedades existentes em um objeto, ou seja, não é possível adicionar nem excluir propriedades.
const person = { name: 'Rodolpho' };
Object.seal(person);
console.log('\n\nCriação de um objeto/array e aplicação do seal para permitir somente mudanças nas propriedades: ', person);

person.name = 'Rodolpho Erick';
console.log('Alteração de propriedade (linha 45) no array com aplicação do seal: ', person);

delete person.name;
console.log('Tentativa de deleção de propriedade (linha 48) no array com seal: ', person);

person.age = 26;
console.log('Tentativa de adição de propriedade (linha 51) no array com seal: ', person);