const myNumber = 12.4032;

// Transformar número para String
const numberAsString = myNumber.toString();
console.log('Número transformado em String. Valor em String: ', numberAsString, ', e valor com typeof: ', typeof numberAsString); // typeof retorna o tipo da variável de forma literal, nesse caso fará com que retorne uma String devido ao parse na linha 4.

// Retorna o número com uma quantidade pré-definida de casas decimais
const fixedTwoDecimals = myNumber.toFixed(2);
console.log('\nNúmero com duas casas decimais: ', fixedTwoDecimals);

// Transforma uma string em float
console.log('\nString parseada para float: ', parseFloat('13.22'));
console.log('String parseada para float com typeof: ', typeof parseFloat('13.22'));

// Transforma uma string em int
console.log('\nString parseada para int: ', parseInt('13.20'));
console.log('String parseada para int com typeof: ', typeof parseInt('13.20'));

/*
OBS.: Não existe diferenciação entre int e float/double, só existe o type Number, então todos esses números são Number.

*/