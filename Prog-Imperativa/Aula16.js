let bemVindo = () => 'Olá Mundo!';

let dobro = numero => numero * 2;

let soma = (a, b) => a + b;

let horaAtual = () => {
    let data = new Date();
    return data.getHours() + ':' + data.getMinutes();
}

console.log(horaAtual());

function acaoCarro(callBack) {
    console.log(callBack());
} 

function andar(){
    return 'o carro está andando';
}

function parar(){
    return'o carro parou';
}

acaoCarro(andar);
acaoCarro(parar);