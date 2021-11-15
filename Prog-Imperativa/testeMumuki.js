function eMaiorDeIdade(idade){
    if(idade >= 18){
    return true;
    }else if(idade < 18){
        return false;
    }
}

console.log(eMaiorDeIdade(18));
console.log(eMaiorDeIdade(17));
console.log(eMaiorDeIdade(35));