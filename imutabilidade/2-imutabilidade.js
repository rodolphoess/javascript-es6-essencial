const students = [{ // Array de alunos com dois atributos, o nome e a nota de cada de cada aluno do Array.
        name: 'Grace',
        grade: 6
    },
    {
        name: 'Jennifer',
        grade: 4
    },
    {
        name: 'Paul',
        grade: 10
    }
];

//Funçào que recebe a lista de alunos e retorna somente os alunos aprovados, através da filtragem de estudantes que possuem nota >= 7.
function getApprovedStudents(studentsList) {
    return studentsList.filter(student => student.grade >= 7);
}

//Imprime os alunos aprovados ao chamar a função getApprovedStudents() passando o Array de estudantes anteriormente criado.
console.log('Alunos aprovados: ');
console.log(getApprovedStudents(students));

console.log();

/* Imprime o conteúdo do Array com os estudantes sem nenhuma filtragem. Ao imprimir a lista e ver que ela continua íntegra, sem ter sido alterada com a chamada da função, segue-se o princípio da imutabilidade. Isso evita side-effects, que podem
vir a ser as alterações indesejadas nos atributos. */
console.log('Lista de alunos: ');
console.log(students);