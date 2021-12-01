// 1. Crie uma função que receba um array composto por números e retorna uma nova matriz (array) com todos os valores divididos pela soma de toda a matriz, usando map() e reduce().

 function activity01(numbers){
     let arraySum = numbers.reduce(function(init, currentValue) {
         return init + currentValue;
     })
     let result = numbers.map(function(item){
         return item / arraySum;
     })
     return result;
 }

 console.log(activity01([1,2,3,4,5]));

// 2. Crie uma função que receba um array de palavras e um número, e que retorna uma matriz (array) com apenas as palavras que têm mais do que uma quantidade de letras maior do que o número informado. (verifique como funciona o método filter ())

function selectWords(array, wordQuantity){
    let selectedWords = array.filter(function(item){
        return item.length > wordQuantity;
    })
    return selectedWords;
}


console.log(selectWords(['joao', 'jo', 'bia', 'mia', 'issao'], 3));


// 3. Crie um array de objetos literais, onde cada objeto será um aluno e terá dois atributos: nome e nota. Crie duas funções que ordenam o array: uma ordenará os alunos em ordem alfabética e a outra o fará por nota, da mais alta para a mais baixa. (Analise qual método seria apropriado para este caso. Recomendamos que você consulte a documentação do MDN: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array)

let students = [
    {
        name: 'issao',
        score: 5
    },
    {
        name: 'joao',
        score: 10
    }
]

function orderByName (arrayStudents){
    let arrayOrderByName = arrayStudents.sort(function(a, b){
        return a.name - b.name;
    });
    return arrayOrderByName;
}
console.log(orderByName(students));

function orderByScore (arrayStudents){
    let arrayOrderByScore = arrayStudents.sort(function(a, b){
        return b.score - a.score;
    });
    return arrayOrderByScore;
}
console.log(orderByScore(students));