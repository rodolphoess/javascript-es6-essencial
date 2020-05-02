/**
 * MODULE: É um pattern que possibilita a melhor organização do código ao separar por responsabilidades, sem a necessidade de expor variáveis globais.
 */

let name = 'default';

function getName() {
    return name;
}

function setName(newName) {
    name = newName;
}

module.exports = {
    getName,
    setName
};