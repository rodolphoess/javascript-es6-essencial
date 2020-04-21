//Declaração de função de execução imediata.
(() => {
    let test = 'valor função';
    console.log(`Valor dentro da função "${test}"`);

    if (true) {
        let test = 'valor if';
        console.log(`Valor dentro do if "${test}"`);
    }

    console.log(`Valor após a execução do if "${test}"`);
})();

/*
Como o tipo let respeita o escopo global, o escopo de função e o escopo de bloco {}, então o comportamento das variáveis ocorre conforme o esperado, fazendo com que todas as variáveis possuam os valores dentro do seu escopo.
*/