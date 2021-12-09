const AlunoImported = require('./construtor');

let aluno1 = new AlunoImported("Thábata Carrion", 1,[9, 9, 9, 9]);
let aluno2 = new AlunoImported("Danielle Alves", 1,[9, 9, 9, 9]);
let aluno3 = new AlunoImported("Maryanne Carvalho", 1,[9, 9, 9, 9]);
let aluno4 = new AlunoImported("Issao Takeuchi", 1,[9, 9, 9, 9]);
let aluno5 = new AlunoImported("Luiz de Souza", 1,[9, 9, 9, 9]);
let aluno6 = new AlunoImported("Patricio Silva", 1,[9, 9, 9, 9]);

const arrayEstudantes = [aluno1, aluno2, aluno3, aluno4, aluno5, aluno6];

// console.log(arrayEstudantes);
// aluno6.faltas();
// console.log(arrayEstudantes);
// aluno6.faltas();
// console.log(arrayEstudantes);
// aluno6.faltas();
// console.log(arrayEstudantes);


module.exports = arrayEstudantes;