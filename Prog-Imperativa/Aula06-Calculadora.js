function sum(firstNumber, secondNumber){
    return (firstNumber + secondNumber)
}

function subtr(firstNumber, secondNumber){
    return (firstNumber - secondNumber)
}

function mult(firstNumber, secondNumber){
    return (firstNumber * secondNumber)
}

function division(firstNumber, secondNumber){
    return (firstNumber / secondNumber)
}

function squared(number){
    firstNumber = number
    secondNumber = number
    return mult(firstNumber, secondNumber)
}

function averageOf3(firstNumber, secondNumber, thirdNumber){
    number = firstNumber + secondNumber + thirdNumber
    return division(number, 3)
}

function calcPercent(number, percentage){
    return number*(percentage/100)
}

function generatePercent(part, total){
    return (part*100)/total
}


console.log ("-------------- Teste de Operações / Calculadora --------------")


console.log(sum(10,2));
console.log(subtr(10,2));
console.log(mult(10,2));
console.log(division(10,2));
console.log(division(10,0));
console.log(squared(10));
console.log(averageOf3(10,10, 10));
console.log(calcPercent(15,300));
console.log(generatePercent(2,200));