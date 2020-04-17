/*
JavaScript possui uma tipagem fraca e dinâmica: É possível utilizar variáveis e operações no JavaScript operando variáveis de tipos diferentes e esses mesmos operadores podem servir para mais de um fim (tipagem fraca) e as 
variáveis não possuem um tipo fixo, ou seja, var pode ser String, int, long, double, etc (tipagem dinâmica). Por exemplo, um var pode ser desde uma String até um Long ou Double, assim como o operador + pode servir tanto para somar variáveis 
de um mesmo tipo quanto para concatenar variáveis de tipos diferentes, String e int, por exemplo.

*/

var minhaVariavel = 30; //Inferência de tipo. var do tipo int.

minhaVariavel = 'Texto';

console.log(minhaVariavel);