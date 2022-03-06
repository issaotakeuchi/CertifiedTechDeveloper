let nome = "Issao Takeuchi";
console.log("Olá eu sou " + nome);

var idade = 32;
console.log("olá, eu sou " + nome + " e tenho " + idade + " anos");

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sum(arrayToSum) {
  var sumResult = 0;

  for(var i = 0; i < array.length; i++) {
    console.log('o resultado do valor prévio com o ítem ' + array[i] + ' é igual a ' + (sumResult + array[i]));
    sumResult = sumResult + array[i]
  }
}
sum(array);