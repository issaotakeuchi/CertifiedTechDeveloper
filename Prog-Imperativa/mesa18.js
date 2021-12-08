// Loop de Pares
// Você deve criar uma função chamada loopDePares que receba um número como parâmetro e faça loops de 0 a 100 mostrando cada número do loop no console.
// Caso o número da iteração somado com o número passado pelo parâmetro seja par, aparecerá no console: "O número x é par"

// function loopDePares(number){
//     for(var i = 0; i <= 100; i++){
//         if((i + number) % 2 === 0){
//             return 'o numero é par';
//         } else {
//             return i;
//         }
//     }
// }

// console.log(loopDePares(1));



// String.split()
// Você deve criar uma função chamada split que receba uma string e simule o comportamento da função split original. Se você não sabe como funciona, o Google pode ajudá-lo.
// Importante: Você não pode usar o String.split()
// Exemplo: 
// split(“olá”) deve retornar [”o”,”l”,”á”]
// split(“tchau”) deve retornar [“t”,“c”,”h”,”a”,”u”]


function split(word) {
      for(var init = 0; init < word.length; init++){
          var finalArray = [];
          return finalArray.push(word[init])
      }
      return finalArray;
}

//  function split(word) {
//        for(var init = 0; init < word.length; init++){
//            var wordAsArray = [ ];
//            return (wordAsArray.push(word.slice[init]));
//        }
//        return wordAsArray;
//  }


console.log(split('issao'));

function split(word) {
    word.length;
     console.log(word.length);
      for(var init = 0; init < word.length; init++){
          console.log(word[init]);
      }
}