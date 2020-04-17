/* 
IMUTABILIDADE: Conceito de linguagem funcional presente no JS. Em linguagens funcionais, os dados que são criados nunca mudam, com isso fala-se que os dados são imutáveis. Segue-se o princípio que a variável nunca irá mudar, e se ela for mudar
então é necessário criar uma nova variável. 

Por exemplo, ao necessitar alterar/excluir um item de um Array, a boa prática é criar um novo Array baseado naquele que está sendo alterado, se for adicionar um novo item, concatena os dois Arrays, se for para remover, filtra o que tem no
novo Array e remove o cara que se deseja. O mesmo acontece para Objetos. Isso é possível realizar nos Arrays com funções concat, map, filter, reduce, por exemplo. Já nos objetos é possível realizar esse tipo de operação com o Object.assign().
*/

const user = { //Cria-se um Array com nome e sobrebome.
    name: 'Rodolpho',
    lastName: 'Erick Soares de Sousa'
};

//Cria-se uma função que recebe um Array e retorna tudo que tem nele, e também retorna o nome completo concatenando o user.name e o user.lastName.
function getUserWithFullName(user) { // O conceito de imutabilidade defende que não pegue-se o user e altere diretamente a referência dele
    return {
        ...user, // A '...' é o Spread Operator, que surgiu no ES2018, e representa o Array como um todo. Para cada propriedade dentro do Array recebido, ele colocará dentro do novo objeto que chamará a função.
        fullName: `${user.name} ${user.lastName}` // As `` representam uma String Literal, e é a mesma coisa de concatenar com o + como já é comumente conhecido.
    }
}

const userWithFullName = getUserWithFullName(user); //A função é chamada passando o Array 'user'. O resultado é armazenado em userWithFullName e em seguida exibido na linha 24.

console.log(userWithFullName);

/* OBS.: Toda vez que é passado um objeto ou uma estrutura como um Array para uma função, está passando-se a referência do conteúdo em memória. Então caso o conteúdo da referência passada seja alterada, ela é alterada também em memória, fazendo
com que a informação se perca. */