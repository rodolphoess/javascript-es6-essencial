- JavaScript foi lançado em Setembro de 1995, juntamente com a versão beta do NetScape. Foi lançado com o nome Mocha, passou a ser LiveScript e depois JavaScript. Passou a se chamar JavaScript na mesma época em que a linguagem Java passou a ter 
suporte por parte do NetScape por meio de applets. Para muitos, a mudança de nomenclatura para JavaScript foi um movimento de marketing para pegar carona no sucesso em que Java fazia em 1995;

- JavaScript foi criada por Brendan Eich;

- ECMAScript é uma especificação de linguagem de scripts padronizada pelo projeto ECMA-262. As linguagens JavaScript, JScript e ActionScript seguem a ECMAScript, porém cada uma provê recursos não descritos na especificação ECMA;

- O comitê responsável pela evolução do ECMAScript é conhecido como TC39;

- ECMAScript é uma especificação de linguagem de programação baseada em scripts, usada em tecnologias para internet para a crição de scripts executados no cliente, sendo criada para padronizar linguagens como JavaScript, além de permitir outras implementações independentes;

- Transpilador: Transforma uma versão mais nova de uma tecnologia/linguagem em uma versão mais antiga que é suportada por mais clientes, sejam eles browsers, servidores, entre outros. Por exemplo, o BABEL é um transpilador JavaScript que transforma ES2019 em ES2015, entre outras transpilações;

- JavaScript é uma linguagem interpretada. Ou seja, o código é executado e o resultado é imediatamente exibido sem que haja a transformação em uma linguagem de mais baixo nível (Assembly). Essa interpretação ocorre por um programa ou sistema, tais como os browsers, por exemplo, que atuam como interpretadores de linguagens script;

- JavaScript possui uma tipagem fraca e dinâmica: É possível utilizar variáveis e operações no JavaScript operando variáveis de tipos diferentes e esses mesmos operadores podem servir para mais de um fim (tipagem fraca) e as variáveis não possuem um tipo fixo, ou seja, var pode ser String, int, long, double, etc (tipagem dinâmica). Por exemplo, um var pode ser desde uma String até um Long ou Double, assim como o operador + pode servir tanto para somar variáveis de um mesmo tipo quanto para concatenar variáveis de tipos diferentes, String e int, por exemplo;

- TypeScript: adiciona ferramentas ao JavaScript, tais como interfaces, enums, facilitando o desenvolvimento em JavaScript devido a checagem de tipos e estruturas bem conhecidas da OO, tais como classes;

- Escopo (Closure): Hoje tem-se 3 escopos disponíveis no JavaScript; o escopo global, o escopo de função, e o escopo de bloco que surgiu com o ES6 devido a adição do let e do const;

- O fluxo para submeter uma proposta ao TC39 é o seguinte: > 
Stage 0: strawman; > 
Stage 1: proposal; > 
Stage 2: draft; > 
Stage 3: candidate; e > 
Stage 4: finished.

**OBS.: Não é uma boa prática escrever variáveis do tipo 'var' em escopo global, pois se o usuário for buscar no browser as variáveis globais 'var' ele tem acesso e consegue exibir o conteúdo delas no console do próprio browser, o que tras problemas de segurança. Isso já não acontece com o tipo 'let'.**