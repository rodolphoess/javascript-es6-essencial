- HERANÇA: Baseada em protótipos/prototype. O fluxo é, baseado em um construtor, é criado um prototype de um tipo genérico e a referência para o prototype é guardada no __proto__. Tudo isso é feito por baixo dos panos pelo JS.

Então, toda vez que cria-se alguma variável através de uma função construtora, está sendo criado um prototype que é guardado por baixo em __proto__. Por exemplo, ao criar uma variável do tipo String é enviado o texto por função construtora, com isso é criado o prototype e a referência para o prototype é guardada no __proto__ que pode ser visualizado no navegador.

OBS.: __proto__ -> aponta para o **prototype** de algo. Então, o __proto__ é igual ao prototype -> E o prototype é criado a partir de um **constructor** de uma função construtora

- Criação de objeto:

new Foo(...); -> O que ocorre?

1 - Um novo objeto é criado, herdando Foo.prototype;
1 - A função construtora Foo é chamada com os argumentos especificados e com o 'this' vinculado ao novo objeto criado;
1 - Caso a função construtora tenha um retorno explícito, será respeitado o seu 'return'. Senão, será retornado o objeto criado no passo 1. Ou seja, se houver um retorno explícito dentro do construtor, será retornado o retorno explícito no lugar do parâmetro passado.