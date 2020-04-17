Há três formas de criar variáveis, através dos tipos; var, let e const.

VAR: 
Foi o primeiro tipo e único até o ES6. Quando tinha somente esse tipo existia apenas o escopo global e o escopo de função, com a chegada do let e const foi introduzido o escopo de bloco. Ou seja, toda vez que abre-se um if, um while, for, etc. Ou seja, toda vez que há um bloco delimitado por chaves {}, isso é um escopo de bloco.

LET:
O tipo let respeita o escopo global, o escopo de função e o escopo de bloco {}, então o comportamento das variáveis ocorre conforme o esperado, fazendo com que todas as variáveis possuam os valores dentro do seu escopo mesmo repetindo a declaração de variáveis em escopos internos ao anteriormente declarado. Segue exemplo em 2-variaveis-let.js

CONST: 
Assim como o tipo let, o const respeita o escopo global, o escopo de função e o escopo de bloco {}, então o comportamento das variáveis ocorre conforme o esperado, fazendo com que todas as variáveis possuam os valores dentro do seu escopo.
A diferença entre const e let é que o const a idéia dele é para criar constantes, como o próprio nome diz. Só que ele possui algumas particularidades:

 1 - Quando é atribuído const a um tipo primitivo, como String, não é permitido que haja troca de valor. Entretanto, caso seja criado um objeto (tipo por referência), tal como um Array, é permitido que sejam alterados os conteúdos das 
 propriedadas contidas no Array do tipo const, o que é imutável nesse caso é a referência do ponteiro em memória.

 Mas qual é a vantagem de utilizar objetos como const? É possível congelar inclusive o conteúdo dentro do const, não sendo possível alterar nem a referência nem o conteúdo do objeto.

OBS.: Não é uma boa prática escrever variáveis do tipo 'var' em escopo global, pois se o usuário for buscar no browser as variáveis globais 'var' ele tem acesso e consegue exibir o conteúdo delas no console do próprio browser, o 
que tras problemas de segurança. Isso já não acontece com os tipos 'let' e 'const'.

OBS.: O tipo 'var' não respeita o escopo de bloco.