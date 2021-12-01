// let numeros = [1, 2, 3, 5];

// let dobro = numeros.map(function(item){
//     return item * 2;
// });

// console.log(dobro);

//  let idades = [22, 8, 17, 14, 30];

//  let maiores = idades.filter(function(idade){
//      return idade > 18;
//  });

// console.log(maiores);

//  let numeros1 = [5, 7, 16];

//  let soma = numeros1.reduce(
//      function(acumulador, valor1){
//          return acumulador+valor1;
//      }
//  );

// console.log(soma);

// var paises = ['brasil', 'cuba', 'peru'];

// paises.forEach(function(item){
//     console.log(item)
// });


// 1. Crie um array de números pares, e utilizando a função .map() nesse array, crie um novo array com apenas números ímpares.
let numerosPares = [2, 4, 6, 8];
let numerosImpares = numerosPares.map(function(item){
    return item + 1;
});

console.log(numerosImpares);


// 2. Crie um array de nomes, que possua dois índices com o nome Maria. Utilize o .filter() para obter apenas esses dois índices com o nome Maria.
let nomes = ['issao', 'joao', 'maria', 'jose', 'maria'];
let nomesIguais = nomes.filter(function(item){
    return item === 'maria';
});

console.log(nomesIguais);


// 3. Crie um array de números e utilize a função .reduce() para devolver uma string com os números formatados.

// Exemplo [1,5,9,3,7] => “1 – 5 – 9 – 3 – 7”

let numeros = [1, 2, 3, 4, 5, 6, 7, 8];
let numerosFormatado = numeros.reduce(
    function(acumulador, valor){
        return acumulador + '-' + valor;
    });

    console.log(numerosFormatado);


// 4. Crie um array de animais, após isso passe por cada índice utilizando o .forEach() e imprima a frase “O animal é NOME_DO_ANIMAL”.
let animais = ['leao', 'tigre', 'elefante'];

animais.forEach(function(item){
     console.log('o animal é ' + item);
 });
