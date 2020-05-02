class Pessoa {#
    nome = '';

    constructor(nome) {
        this.#nome = nome;
    }

    get nome() {
        return `Seu nome é: ${this.#nome}.`;
    }

    set nome(novoNome) {
        this.#nome = novoNome;
    }
}

const pessoa = new Pessoa();

console.log(pessoa);
console.log(pessoa.nome);
pessoa.nome = 'Foo';
console.log(pessoa.nome);