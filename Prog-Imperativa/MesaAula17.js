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


// Temos que fazer um sistema para um Agricultor controlar suas vendas. Ele tem um controle de vendas em um caderno, onde os produtos estão organizados por nome, preço e quantidade vendida. 
// Portanto, crie um array de objetos literais com essas informações. No sistema, você tem que adicionar uma função (ou várias) que realize os seguintes passos:
let sales = [
    {name: 'maçã', unitPrice: 1, totalSale: 10},
    {name: 'banana', unitPrice: 1, totalSale: 20},
    {name: 'pera', unitPrice: 2, totalSale: 5},
    {name: 'melancia', unitPrice: 5, totalSale: 5},

];

// 1. Calcular o lucro total de todos os produtos;
let  totalProfit = sales.reduce(function(init, currency){
    return init + currency.totalSale;
}, 0)

console.log(totalProfit);

// 2. Permitir pesquisar um produto pelo nome e calcular seu lucro total;

function filterByProduct(productToFind){
    let productFound = sales.filter(function(item){
        return item.name === productToFind;
    })
    return productFound;
}

console.log(filterByProduct('maçã'));

// 3. Permite receber um valor e indicar todos os produtos que venderam mais que esse valor;

function filterMoreThan(value){
    let productMoreThan = sales.filter(function(item){
        return item.totalSale >= value;
    })
    return productMoreThan;
}

console.log(filterMoreThan(10));
// 4. Classifique todos os produtos pela quantidade de dinheiro que geraram.
function orderByProfit (arrayToInput){
    let arrayToOrder = arrayToInput.sort(function(a,b){
        return b.totalSale - a.totalSale;
    })
    return arrayToOrder;
}
console.log(orderByProfit(sales));

// 5. Encontre um produto e atribua a ele um novo valor (reutilize o código que permite encontrar o produto pelo nome).
function changeSalesValue(productToFind, valueToChange){
    let productFound = sales.filter(function(item){
        return item.name === productToFind;
    })
    return item.totalSale === valueToChange;
}

console.log(filterByProduct('maçã', 20));



// 6. Calcule o lucro total após pagar 45% do lucro em impostos.
function afterTaxes (arrayToInput){
    let  totalProfitAfterTaxes = sales.reduce(function(init, currency){
        return init + currency.totalSale;
    }, 0)
    return totalProfitAfterTaxes*0.55;  
}
console.log(afterTaxes(sales));