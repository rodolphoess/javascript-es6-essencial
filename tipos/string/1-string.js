// Retorna o tamanho de uma String
const textSize = 'Texto'.length;
console.log(`Quantidade de letras: ${textSize}`);

// Retorna um array quebrando a string por um delimitador
const splittedText = 'Texto'.split('x');
console.log('\nArray com as posições separadas pelo delimitador: ', splittedText);

// Busca por um valor e substitui por outro
const replacedText = 'Texto'.replace('Text', 'txeT');
console.log('\nSubstituição de valor: ', replacedText);

// Retorna a "fatia" de um valor. Caso passe dois parâmetros, pega a letra a partir do primeiro parâmetro e exclui a letra correspondente ao último parâmetro passado.
const lastChar = 'Texto'.slice(-1);
console.log('\nÚltima letra de uma string: ', lastChar);

const allWithoutLastChar = 'Texto'.slice(0, -1);
console.log('\nValor da string da primeira letra menos a última: ', allWithoutLastChar);

const secondToEnd = 'Texto'.slice(1);
console.log('\nValor da string da segunda letra até a última: ', secondToEnd);

// Retorna N caracteres a partir de uma posição. Os parâmetros do substring é o começo e a quantidade de caracteres.
const twoCharsBeforeFirtPosit = 'Texto'.substr(0, 2);
console.log('\nAs duas primeiras letras são: ', twoCharsBeforeFirtPosit);