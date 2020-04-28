// Spread = ...
var partes = ['ombro', 'joelhos'];
var musica = ['cabeca', ...partes, 'e', 'pes'];
/* 
O Spread consegue pegar o array no qual está se relacionando e iterar sobre esse array. É como se ele pegasse o array partes e jogasse dentro do array musica, fazendo com que 
musica = ['cabeca', 'ombro', 'joelhos', 'e', 'pes'];

Isso faz com que o Spread seja muito utilizado quando deseja-se concatenar arrays
*/

function fn(x, y, z) {}
var args = [0, 1, 2];
fn(...args); // Nesse caso, ao passar o args como parâmetro de uma função que recebe três parâmetros, o Spread faz com que x = 0, y = 1 e z = 2.