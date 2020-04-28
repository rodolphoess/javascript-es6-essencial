let arr = [3, 5, 7];
arr.foo = "hello"; // Pelo array ser um objeto, é possível inserir propriedades.

for (let i in arr) { // O 'in' itera sobre cada propriedade que o array ou objeto possuir.
    console.log(i); // logs 0, 1, 2, foo
}

console.log('');

for (let i of arr) { // O 'of' itera sobre cada elemento que o array ou objeto possuir.
    console.log(i); //logs 3, 5, 7
}