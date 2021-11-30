let fizz = () => console.log('fizz');

let buzz = () => console.log('buzz');

let fizzBuzz = () => console.log('fizzBuzz');


function completeFizzBuzz(firstNumber, secondNumber) {
    for (var i = 1; i <= 100; i++) {
        if (i % firstNumber === 0 && i % secondNumber === 0) {
            fizzBuzz();
        } else if (i % firstNumber === 0) {
            fizz();
        } else if (i % secondNumber === 0) {
            buzz();
        } else {
            console.log(i);
        }
    }
}


completeFizzBuzz(10, 20);

// function fizzBuzz(firstNumber, secondNumber) {
//     for (var i = 1; i <= 100; i++) {
//         if (i % firstNumber === 0 && i % secondNumber === 0) {
//             console.log('fizzbuzz');
//         } else if (i % firstNumber === 0) {
//             console.log('fizz');
//         } else if (i % secondNumber === 0) {
//             console.log('buzz');
//         } else {
//             console.log(i);
//         }
//     }
// }

// fizzBuzz(10, 30);

// let fizz = (firstNumber) => {
//      for(var i = 1; i <= 100; i++){
//         if (i % firstNumber === 0) {
//             console.log('fizz');
//          }
//     }
// }