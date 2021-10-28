function somar (a,b){
    console.log("dentro da function");
    return (a + b);
}
console.log(somar(5,5));

function nomePessoa (nome, idade){
    return nome+" tem a idade de "+idade;
}

console.log(nomePessoa('Issao', 32));

let sub = function(x, y){
    console.log(x - y);

}

sub(10,5);