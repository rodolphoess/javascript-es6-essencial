/**
 * SINGLETON: O objetivo desse pattern é criar uma única instância de uma função construtora e retorná-la toda vez em que for necessário utilizá-la. Um padrão muito popular de singleton no JS é o jQuery.
 */

function Pessoa() {
    if (!Pessoa.instance) {
        Pessoa.instance = this;
    }

    return Pessoa.instance;
}

const p = Pessoa.call({ name: 'Rodolpho' });
const p2 = Pessoa.call({ name: 'Custom Name' }); //Como já foi instanciado a pessoa na linha anterior, então de acordo com o padrão Singleton será retornado sempre a mesma instância inicial. Por isso, retorna 2x a primeira instância que é Rodolpho.

console.log(p);
console.log(p2);