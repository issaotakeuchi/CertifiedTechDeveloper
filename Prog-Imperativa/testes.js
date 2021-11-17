function podeSeAposentar(idade, sexo, tempoContribuição){
    if((sexo = 'F' || (idade >= 60 && tempoContribuição >= 30)) || (sexo = 'M' || (idade >= 60 && tempoContribuição >= 30))){
        return true;
    } else return false;
}
  console.log(podeSeAposentar(62,'F',40));
  console.log(podeSeAposentar(63,'F',25));
  console.log(podeSeAposentar(58,'F',35));
  console.log(podeSeAposentar(69,'F',40));
  console.log(podeSeAposentar(66,'M',40));
  console.log(podeSeAposentar(63,'M',35));
  console.log(podeSeAposentar(68,'M',26));
  console.log(podeSeAposentar(58,'M',35));
