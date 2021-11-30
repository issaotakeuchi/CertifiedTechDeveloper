// function soma(a=1, b=3){
//     return a+b;
// }

// console.log(soma());
// console.log(soma(3));
// console.log(soma(1,2));


// function teste(x){
//     if(x> 9){
//     return "verdade";
// }
// }

// console.log(teste(1));

// let frutasAmarelas=['Melão', 'Mamão', 'Limão siciliano'];
// let frutasVermelhas=['Morango', 'Cereja', 'Maçã red'];
// let frutasVerdes=['Limão', 'Kiwi', 'Maçã verde'];

// frutasVermelhas1=frutasVermelhas.map(fruta => fruta.toUpperCase());
// let todasFrutas=[...frutasAmarelas,...frutasVermelhas1,...frutasVerdes]
// console.log(todasFrutas);

// let frutasAmarelas=['Melão', 'Mamão', 'Limão siciliano'];
// let [fruta1, fruta2, fruta3]= frutasAmarelas;
// console.log(fruta1);
// console.log(fruta2);
// console.log(fruta3);
// console.log(frutasAmarelas);

// let numeros= [10, 8, 7, 99, 0, 1, 6];
// console.log(numeros.sort(function(a,b){ return b-a;}));
// console.log(numeros.sort(function(a,b){ return a,b;}));
// console.log(numeros.sort(function(a,b){ a-b;}));

// for(var i=0; i<50; i+=10){
//     console.log(i);
// }
// console.log(i);

// let x=5;
// let y = x++ + ++x;
// console.log("y= "+y);
// x=3;
// y=x*(x+1)*x++;
// x=5;
// y=3;
// y*=x+1
// console.log("x= "+x);
// console.log("y= "+y);


// let x=50;
// let resto=50%2;
// resposta = resto==0 ? 'Par': 'Impar';
// console.log(resposta);

// var z=0;
// for (var i=20; i<50; i+=10){
//     z+=i;
// }

// console.log(z);

// function soletrar(texto){
//     console.log(texto.replace('-', '').toLocaleUpperCase().split("").join("-"));
// }
// soletrar("digital-house");
// soletrar("ctd");

// function testes(x){
//     if(x>10){
//     return 'verdadeiro';
// }
// }
// console.log(testes(5));

// let valor = 5;
// let fatorial =1;
// for(let i=valor; i>1; i--){
//     fatorial*=i;
// }
// console.log("fatorial opcao 1 = "+fatorial);

//  let valor = 5;
//  let fatorial =1;
//  for(let i=valor; i>1; i--){
//      fatorial=i;
//  }
//  console.log("fatorial opcao 2 = "+fatorial);

//  let valor = 5;
//  let fatorial =1;
//  for(let i=0; i<=5; i++){
//      fatorial*=i;
//  }
//  console.log("fatorial opção 3 = "+fatorial);

//  let valor = 5;
//  let fatorial =1;
//  for(let i=valor; i<=5; i++){
//      fatorial*=i;
//  }
//  console.log("fatorial opcao 4 = "+fatorial);

 let valor = 5;
 let fatorial =1;
 for(let i=valor; i<=5; i++){
     fatorial+=i;
 }
 console.log("fatorial opcao 5 = "+fatorial);
