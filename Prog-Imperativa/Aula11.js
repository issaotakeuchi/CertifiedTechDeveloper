for(var contador = 0; contador <= 10; contador++){
    console.log("olá mundo ", contador)
}

let contad = 1
while(contad <= 5){
    console.log(contad, "olá pessoal ")
    contad++;
}

cont = 1;

do{
    console.log(cont, "olá pessoal ");
    cont++;
} while(cont <= 5);

// Repetir como um papagaio
// Crie um loop utilizando for que se repita 5 vezes. Dentro de cada repetição se deve mostrar no console a mensagem “Olá mundo”.

for(var repetidor = 1; repetidor <= 5; repetidor++){
    if(repetidor % 2 !== 0){
        console.log("papagaio falando " + repetidor + " vez")
    }
}

// Contando números ímpares
// Crie um loop for de 1 a 10, em que exiba no console apenas o valor das repetições de números ímpares. Dica: A ideia é que nas repetições ímpares de 0 ao 10 (1,3,5,7,9) sejam mostrados os números das repetições no console.

for(var numerosImpares = 1; numerosImpares <= 10; numerosImpares = numerosImpares +2){
    console.log("numero " + numerosImpares + " é impar")    
}

// Criando a tabuada
// Crie uma tabuada utilizando o for. Dica: Para essa tarefa você irá precisar utilizar dois loops (for).

let tabuadaDoNumero = 5
for(var tabuada = 0; tabuada <= 10; tabuada++){
    console.log(tabuadaDoNumero, " vezes ", tabuada, " igual a ", tabuadaDoNumero*tabuada)
}