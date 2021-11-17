let peliculas = ["star wars", "totoro",  "rocky", "pulp fiction",  "la vida es bella"]

// function convertirAMayusculas(array){
//       array[0] = array[0].toUpperCase()
//       array[1] = array[1].toUpperCase()
//       return array
//     }

function converterEmMaiusculas(array){
for(var arrayPosicao = 0; arrayPosicao < array.length; arrayPosicao++){
    console.log(array[arrayPosicao] = array[arrayPosicao].toUpperCase());
    }
}

converterEmMaiusculas(peliculas);

// function pasajeDeElementos(array1, array2) { 
//     array1.push(array2.pop().  toUpperCase()) 
//     array1.push(array2.pop(). toUpperCase()) 
//    }
 
   let filmes = ["TOY STORY"];

function passagemDeElementos(arrayParaInserirElemento, arrayDeOndeExtrairElemento){   
   for(var arrayPosicionado = arrayDeOndeExtrairElemento.length; arrayPosicionado >= 1; arrayPosicionado--){
       arrayParaInserirElemento.push(arrayDeOndeExtrairElemento.pop()) 
   }
   console.log(arrayParaInserirElemento)
}

passagemDeElementos(filmes, peliculas);

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5]; 

// function compararCalificaciones(asia, europa) {
//   let comparacionesAsiaEuropa = []
//   comparacionesAsiaEuropa[0] = asia[0] === europa[0]
//   comparacionesAsiaEuropa[1] = asia[1] === europa[1]

function compararCladdificacao(arrayComparador1, arrayComparador2){
for(arrayPosicaoComparar = 0; arrayPosicaoComparar < arrayComparador1.length; arrayPosicaoComparar++){
    console.log("elementos na posição ", arrayPosicaoComparar, arrayComparador1[arrayPosicaoComparar] === arrayComparador2[arrayPosicaoComparar])
    }
} 

compararCladdificacao(asiaScores, euroScores)