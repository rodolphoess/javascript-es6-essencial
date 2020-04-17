// EXEMPLO DE FUNÇÃO DE PRIMEIRA CLASSE E ORDEM MAIOR:

function getName() {
    return 'Rodolpho Erick';
}

function logFn(fn) { //Recebe uma função por parâmetro.
    console.log(fn()); //console.log aplicado no que a função retorna.
}

const logFnResult = logFn; //logFnResult passa a se comportar como a função logFn(), e na linha 13 é passado como argumento a função getName(). Esse é o conceito chave de uma função de primeira classe, o fato de poder atribuir ela para uma variável ou estrutura de dados.

logFnResult(getName); //Uma função de primeira classe também pode ser passada por argumento, assim como pode ser retornada.