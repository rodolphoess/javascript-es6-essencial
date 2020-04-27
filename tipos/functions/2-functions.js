(() => {
    this.name = 'arrow function';
    const getNameArrowFn = () => this.name;
    /* Na arrow function, na criação dela, o this da arrow function sempre vai referenciar o escopo como um todo desde a criação da arrow function. 
    Ou seja, a referência será para o escopo da função da linha 1 a 17. */

    function getName() {
        return this.name; // Já funções que não arrow functions vai sempre referenciar para o contexto em que ela foi executada.
    }

    const user = {
        name: 'Nome no objeto de execução',
        getNameArrowFn, // = getNameArrowFn: getNameArrowFn
        getName // = getName: getName
    }

    console.log(user.getNameArrowFn()); // Como trata-se de uma arrow function, então ela sempre vai apontar para o escopo da função.
    console.log(user.getName()); // Como a função getName foi executada dentro de user, então ela referencia para o contexto interno de user, fazendo com que seja exibido o valor interno de user.name
})();