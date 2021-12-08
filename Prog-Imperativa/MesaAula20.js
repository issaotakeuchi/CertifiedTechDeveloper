let dadosUsuarios = [
    {
        "nome": "Abigael Natte",
        "opniao":1,
        "idade":29
    },
    {

        "nome": "Ramon Connell",
        "opniao":2,
        "idade":45
    },
    {

        "nome": "Jarret Lafuente",
        "opniao":3,
        "idade":21
    },
    {

        "nome": "Ansel Ardley",
        "opniao":3,
        "idade":15
    },
    {

        "nome": "Jacki Shurmer",
        "opniao":1,
        "idade":24
    },
    {

        "nome": "Jobi Mawtus",
        "opniao":1,
        "idade":48
    },
    {

        "nome": "Thomasin Latour",
        "opniao":2,
        "idade":18
    },
    {

        "nome": "Lonnie Verheijden",
        "opniao":3,
        "idade":37
    },
    {

        "nome": "Alonso Wannan",
        "opniao":2,
        "idade":22
    },
    {

        "nome": "Bendite Huggett",
        "opniao":1,
        "idade":44
    }
  ]

// Cada espectador de um cinema respondeu a um questionário no qual constava sua idade e a sua opinião em relação ao filme: ótimo - 3, bom - 2, regular -1.
// Faça um programa que receba a idade e a opinião de 15 espectadores, calcule e imprima:
// a média das idades das pessoas que responderam ótimo;
function averageAges(arr) {
        const evaluation3 = arr.filter(user => user.opniao === 3);
        const average = evaluation3.reduce((total, next) => total + next.idade, 0) / evaluation3.length;
        return average;
    }
    
console.log(averageAges(dadosUsuarios));

// a quantidade de pessoas que responderam regular;
function regularEvaluation (arr) {
    const evaluation1 = arr.filter(user => user.opniao === 1);
    return evaluation1.length;
}

console.log(regularEvaluation(dadosUsuarios));

// a porcentagem de pessoas que responderam bom entre todos os espectadores analisados.
function evaluation2 (arr) {
    const evaluation2 = arr.filter(user => user.opniao === 2);
    return ((evaluation2.length*100) / dadosUsuarios.length) + "%";
    
}

console.log(evaluation2(dadosUsuarios));
