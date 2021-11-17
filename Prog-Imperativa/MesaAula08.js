// exercicio 1 - função podeSubir()

function podeSubir(altura, acompanhado){
    if(altura > 1.40 && altura < 2.00){
        return true;
    // } else if(altura > 1.40 && altura < 2.00 && acompanhado === false){
    //     return true;
    } else if(altura<1.40 && altura>1.20 && acompanhado === true){
        return true;
    // } else if(altura<1.40 && altura>1.20 && acompanhado === false){
    //     return false;
    // }else if(altura < 1.20 && acompanhado === true){
    //     return false;
    // } else if(altura < 1.20 && acompanhado === false){
    //     return false;
    // }
    }else{
        return false;
    }
}
console.log(podeSubir(1.1, true));
console.log(podeSubir(1.1, false));
console.log(podeSubir(1.5, false));
console.log(podeSubir(1.5, true));
console.log(podeSubir(2.1, true));
console.log(podeSubir(2.1, false));

// exercicio 2 - alterar função podeSubir()

function podeSubirAlterado(altura, acompanhado){
    if(altura > 1.40 && altura < 2.00){
        console.log('Acesso autorizado');
    } else if(altura<1.40 && altura>1.20 && acompanhado === true){
        console.log('“Acesso autorizado somente com acompanhante');
    }else{
    console.log('“Acesso negado');
    }
}
podeSubirAlterado(1.1, true);
podeSubirAlterado(1.1, false);
podeSubirAlterado(1.5, false);
podeSubirAlterado(1.3, true);
podeSubirAlterado(2.1, true);
podeSubirAlterado(2.1, false);


