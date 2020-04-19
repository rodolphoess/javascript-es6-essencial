/*HOISTING: Conceito de linguagem funcional presente no JS. Significa levantar ou suspender algo, comportamento que ocorre no JS em declarações de variáveis e funções. Essas declarações são levadas para cima no escopo que ela está, por exemplo, ao usar uma variável dentro de uma função,
 a linguagem buscará a declaração da variável dentro do escopo da função, seja escopo de bloco, função ou global.*/

/* Pode-se separar o hoisting em dois tipos: de variáveis e funções. A diferença é que o hoisting de variável só eleva a criação da variável, e não a atribuição. Já a função é elevada ao topo como um todo, até a sua assinatura. */

//--------------------EXEMPLO PARA HOISTING DE VARIÁVEL---------------------------

function hoistingVariavel() {
    /* Está sendo uma variável que ainda não foi declarada. Entretanto, o JavaScript eleva a declaração para antes do console.log() de forma a fazer com que todas as variáveis da função sejam elevadas para o topo da função, 
    evitando dar problema de reference error. Entretanto, nesse caso vai retornar na verdade undefined por a variável é içada sem ser inicializada */
    console.log(text);

    var text = 'Linha 13: Exemplo hoisting variável';

    console.log(text); //Depois de declarada a variável e ela ter sido inicializada, aí sim retorna o conteúdo da variável no lugar de undefined.
}

/* Por baixo, é como se a função estivesse da seguinte forma:
 function fn() {
     var text;
     console.log(text);

     text = 'Exemplo hoisting variável';

     console.log(text);
 }

*/

hoistingVariavel();

//--------------------EXEMPLO PARA HOISTING DE FUNÇÃO---------------------------

/* A grande diferença é que a função é içada como um todo, inclusive a sua assinatura juntamente com o corpo. Por isso, nesse caso dará certo pq a assinatura e corpo da função ficarão acima da chamada dela com o texto, 
conforme trecho comentado abaixo. */

function fn() {
    log('Linha 38: Hoisting de função.');

    function log(value) {
        console.log(value);
    }
}

/* Por baixo é como se estivesse da seguinte forma
function fn() {
    function log(value) {
        console.log(value);
    }

    log('Hoisting de função.');
}

*/

fn();

/*
OBS.: É preferível que não se use práticas como Hoisting em projetos reais, desse modo evita que a compreensão do código torne-se difícil e custosa. Para evitar práticas como essa é possível criar um Linter (ESLint, por exemplo) 
que validará o código em JS/ES6 em busca de erros, warnings, códigos esquecidos e com tudo isso melhore a qualidade do código JSbundleRenderer.renderToStream
Para algumas informações a mais, segue artigo: https://willianjusten.com.br/analisando-seu-codigo-js-com-linter/
*/