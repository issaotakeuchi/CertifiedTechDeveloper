let timePipoca = 10;
let timeMacarrao = 8;
let timeCarne = 15;
let timeFeijao = 12;
let timeBrigadeiro = 8;

let pipocaChoice = 'pipoca';
let macarraoChoice = 'macarrao';
let carneChoice = 'carne';
let feijaoChoice = 'feijao';
let brigadeiroChoice = 'brigadeiro';

function selectOptionMenuMicrowave(meal, time){
     if(
         (meal === pipocaChoice && (time === timePipoca || ( time > timePipoca && time < timePipoca  * 2))) ||
         (meal === macarraoChoice && (time === timeMacarrao || ( time > timeMacarrao && time < timeMacarrao  * 2))) ||
         (meal === carneChoice && (time === timeCarne || ( time > timeCarne && time < timeCarne  * 2))) ||
         (meal === feijaoChoice && (time === timeFeijao || ( time > timeFeijao && time < timeFeijao  * 2))) ||
         (meal === brigadeiroChoice && (time === timeBrigadeiro || ( time > timeBrigadeiro && time < timeBrigadeiro  * 2)))){
             return 'Prato pronto, bom apetite!!!';
         } else if(
            (meal === pipocaChoice && (time === timePipoca * 2 || ( time > timePipoca && time < timePipoca  * 3))) ||
            (meal === macarraoChoice && (time === timeMacarrao * 2 || ( time > timeMacarrao && time < timeMacarrao  * 3))) ||
            (meal === carneChoice && (time === timeCarne * 2 || ( time > timeCarne && time < timeCarne  * 3))) ||
            (meal === feijaoChoice && (time === timeFeijao * 2 || ( time > timeFeijao && time < timeFeijao  * 3))) ||
            (meal === brigadeiroChoice && (time === timeBrigadeiro * 2 || ( time > timeBrigadeiro && time < timeBrigadeiro  * 3)))){
                return 'A comida queimou';
            } else if(
            (meal === pipocaChoice && (time < timePipoca)) ||
            (meal === macarraoChoice && (time < timeMacarrao)) ||
            (meal === carneChoice && (time < timeCarne)) ||
            (meal === feijaoChoice && (time < timeFeijao)) ||
            (meal === brigadeiroChoice && (time < timeBrigadeiro))){
                return 'Tempo insuficiente';
            } else if(
            (meal === pipocaChoice && (time >= timePipoca * 3)) ||
            (meal === macarraoChoice && (time >= timeMacarrao * 3)) ||
            (meal === carneChoice && (time >= timeCarne * 3)) ||
            (meal === feijaoChoice && (time >= timeFeijao * 3)) ||
            (meal === brigadeiroChoice && (time >= timeBrigadeiro * 3))){
                return 'KABUMM';
            } else
            return 'prato inexistente';
        }

console.log('brigadeiro')
console.log(selectOptionMenuMicrowave('brigadeiro', 5));
console.log(selectOptionMenuMicrowave('brigadeiro', 6));
console.log(selectOptionMenuMicrowave('brigadeiro', 7));
console.log(selectOptionMenuMicrowave('brigadeiro', 8));
console.log(selectOptionMenuMicrowave('brigadeiro', 9));
console.log(selectOptionMenuMicrowave('brigadeiro', 10));
console.log(selectOptionMenuMicrowave('brigadeiro', 11));
console.log(selectOptionMenuMicrowave('brigadeiro', 12));
console.log(selectOptionMenuMicrowave('brigadeiro', 13));
console.log(selectOptionMenuMicrowave('brigadeiro', 14));
console.log(selectOptionMenuMicrowave('brigadeiro', 15));
console.log(selectOptionMenuMicrowave('brigadeiro', 16));
console.log(selectOptionMenuMicrowave('brigadeiro', 17));
console.log(selectOptionMenuMicrowave('brigadeiro', 18));
console.log(selectOptionMenuMicrowave('brigadeiro', 19));
console.log(selectOptionMenuMicrowave('brigadeiro', 20));
console.log(selectOptionMenuMicrowave('brigadeiro', 21));
console.log(selectOptionMenuMicrowave('brigadeiro', 22));
console.log(selectOptionMenuMicrowave('brigadeiro', 23));
console.log(selectOptionMenuMicrowave('brigadeiro', 24));
console.log(selectOptionMenuMicrowave('brigadeiro', 25));
console.log(selectOptionMenuMicrowave('brigadeiro', 26));


console.log('macarrao')
console.log(selectOptionMenuMicrowave('macarrao', 5));
console.log(selectOptionMenuMicrowave('macarrao', 6));
console.log(selectOptionMenuMicrowave('macarrao', 7));
console.log(selectOptionMenuMicrowave('macarrao', 8));
console.log(selectOptionMenuMicrowave('macarrao', 9));
console.log(selectOptionMenuMicrowave('macarrao', 10));
console.log(selectOptionMenuMicrowave('macarrao', 11));
console.log(selectOptionMenuMicrowave('macarrao', 12));
console.log(selectOptionMenuMicrowave('macarrao', 13));
console.log(selectOptionMenuMicrowave('macarrao', 14));
console.log(selectOptionMenuMicrowave('macarrao', 15));
console.log(selectOptionMenuMicrowave('macarrao', 16));
console.log(selectOptionMenuMicrowave('macarrao', 17));
console.log(selectOptionMenuMicrowave('macarrao', 18));
console.log(selectOptionMenuMicrowave('macarrao', 19));
console.log(selectOptionMenuMicrowave('macarrao', 20));
console.log(selectOptionMenuMicrowave('macarrao', 21));
console.log(selectOptionMenuMicrowave('macarrao', 22));
console.log(selectOptionMenuMicrowave('macarrao', 23));
console.log(selectOptionMenuMicrowave('macarrao', 24));
console.log(selectOptionMenuMicrowave('macarrao', 25));
console.log(selectOptionMenuMicrowave('macarrao', 26));


console.log('pipoca')
console.log(selectOptionMenuMicrowave('pipoca', 5));
console.log(selectOptionMenuMicrowave('pipoca', 6));
console.log(selectOptionMenuMicrowave('pipoca', 7));
console.log(selectOptionMenuMicrowave('pipoca', 8));
console.log(selectOptionMenuMicrowave('pipoca', 9));
console.log(selectOptionMenuMicrowave('pipoca', 10));
console.log(selectOptionMenuMicrowave('pipoca', 11));
console.log(selectOptionMenuMicrowave('pipoca', 12));
console.log(selectOptionMenuMicrowave('pipoca', 13));
console.log(selectOptionMenuMicrowave('pipoca', 14));
console.log(selectOptionMenuMicrowave('pipoca', 15));
console.log(selectOptionMenuMicrowave('pipoca', 16));
console.log(selectOptionMenuMicrowave('pipoca', 17));
console.log(selectOptionMenuMicrowave('pipoca', 18));
console.log(selectOptionMenuMicrowave('pipoca', 19));
console.log(selectOptionMenuMicrowave('pipoca', 20));
console.log(selectOptionMenuMicrowave('pipoca', 21));
console.log(selectOptionMenuMicrowave('pipoca', 22));
console.log(selectOptionMenuMicrowave('pipoca', 23));
console.log(selectOptionMenuMicrowave('pipoca', 24));
console.log(selectOptionMenuMicrowave('pipoca', 25));
console.log(selectOptionMenuMicrowave('pipoca', 26));
console.log(selectOptionMenuMicrowave('pipoca', 27));
console.log(selectOptionMenuMicrowave('pipoca', 28));
console.log(selectOptionMenuMicrowave('pipoca', 29));
console.log(selectOptionMenuMicrowave('pipoca', 30));
console.log(selectOptionMenuMicrowave('pipoca', 31));



console.log('feijao')
console.log(selectOptionMenuMicrowave('feijao', 10));
console.log(selectOptionMenuMicrowave('feijao', 11));
console.log(selectOptionMenuMicrowave('feijao', 12));
console.log(selectOptionMenuMicrowave('feijao', 13));
console.log(selectOptionMenuMicrowave('feijao', 14));
console.log(selectOptionMenuMicrowave('feijao', 15));
console.log(selectOptionMenuMicrowave('feijao', 16));
console.log(selectOptionMenuMicrowave('feijao', 17));
console.log(selectOptionMenuMicrowave('feijao', 18));
console.log(selectOptionMenuMicrowave('feijao', 19));
console.log(selectOptionMenuMicrowave('feijao', 20));
console.log(selectOptionMenuMicrowave('feijao', 21));
console.log(selectOptionMenuMicrowave('feijao', 22));
console.log(selectOptionMenuMicrowave('feijao', 23));
console.log(selectOptionMenuMicrowave('feijao', 24));
console.log(selectOptionMenuMicrowave('feijao', 25));
console.log(selectOptionMenuMicrowave('feijao', 26));
console.log(selectOptionMenuMicrowave('feijao', 27));
console.log(selectOptionMenuMicrowave('feijao', 28));
console.log(selectOptionMenuMicrowave('feijao', 28));
console.log(selectOptionMenuMicrowave('feijao', 30));
console.log(selectOptionMenuMicrowave('feijao', 31));
console.log(selectOptionMenuMicrowave('feijao', 32));
console.log(selectOptionMenuMicrowave('feijao', 33));
console.log(selectOptionMenuMicrowave('feijao', 34));
console.log(selectOptionMenuMicrowave('feijao', 35));
console.log(selectOptionMenuMicrowave('feijao', 36));
console.log(selectOptionMenuMicrowave('feijao', 37));

console.log(selectOptionMenuMicrowave('sorvete', 37));

