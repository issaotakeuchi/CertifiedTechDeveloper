let nome = " issao toribio takeuchi ";
console.log(nome.length);

console.log(nome);
console.log(nome.trim());
// respeita a partir do momento em que ele encontra um caractere
nome = nome.trim();
console.log(nome.split(" "));
// quebra nossa string - parametro é caractere onde queremos separar. Retorna array

// array organiza de uma forma melhor

//começando com o array. Obs.: separador são as virgulas.
let listaNomes = ["issao", "joão", "fulano", "ciclano", 25, true]
console.log(listaNomes);
//array pode acomodar variáveis diferentes. Outro ponto interessante é que podemos trabalhar com posições que se iniciam em 0. Abaixo, exibindo uma posição:
console.log(listaNomes[0]);
listaNomes[0] = "tomoyasu";
console.log(listaNomes);

// métodos de array. Primeiro método push (adicionar 1 ou mais elementos ao final de um array):
let cores = ["roxo", "laranja", "azul"]
cores.push("vermelho");
console.log(cores);

//método pop. Elimina o último elemento de um array
let x = listaNomes.pop();
console.log(listaNomes);
console.log(x);

// shift Elimina o primeiro elemento de um array

let y = listaNomes.shift();
console.log(listaNomes);
console.log(y);

// unshift Adiciona 1 ou mais elementos no inicio de um array
listaNomes.unshift("tomoyasu");
console.log(listaNomes);

// join junta os elementos de um array com um separador que especificamos. Default é uma virgula. É o contrário do SPLIT
let STRlISTA = listaNomes.join(" - ");
console.log(STRlISTA);

//lastIndexOf procura o elemento de tras para frente - casos em que tenha elementos similares no array. Caso não encontre, o resultado é -1, ou seja, fora da posição
console.log(listaNomes.lastIndexOf("fulano"));

//includes Similar ao indexOf, masretorna um booleano.
