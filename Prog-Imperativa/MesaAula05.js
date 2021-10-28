/*1. Crie uma função que converta polegadas em centímetros.
Recebe pelo parâmetro polegadas e retorna seu equivalente em centímetros.*/

function polegadasEmCentimetros(polegada){
    return polegada * 2.54 + " centímetros"
}

console.log(polegadasEmCentimetros(50));

/*2. Crie uma função que receba uma string e a converta em um URL.
ex: "funcaojs" é retornado como "http://www.funcaojs.com.br"*/

function converteEmUrl(x){
    return "http://www."+x+".com.br"
}

console.log(converteEmUrl("issao"));

/*3. Crie uma função que recebe uma string e retorna a mesma frase, mas com o caracter de exclamação ( ! ).*/

function fraseExclamativa(x){
    return x+"!"
}

console.log(fraseExclamativa("que sono"));

/*4. Crie uma função que calcule a idade dos cachorros, considerando que 1 ano humano, equivale a 7 anos para eles.*/

function idadeCachorro(idade){
    console.log(idade+" anos humano")
    console.log(idade*7 + " anos para os cachorros")
}

idadeCachorro(10);

/*5. Crie uma função que calcule o valor da sua hora de trabalho, tendo como parâmetro o seu salário mensal.
PS: considere que você trabalhe 160 horas no mês.*/

function horaDeTrabalho(salarioMensal){
    return salarioMensal / 160
}

console.log(horaDeTrabalho(3500));

/*6. Crie a função calculadora de IMC* de uma pessoa, que recebe a altura em centímetros e o peso em quilogramas. Em seguida, execute a função, testando diferentes valores. 
*IMC, significa Índice de Massa Corporal e é um parâmetro utilizado para saber se o peso está de acordo com a altura.*/

function calcularIMC(altura, peso){
    return peso / (altura*altura)
}

console.log(calcularIMC(1.60,75));

/*7. Crie uma função que receba uma string em minúsculas, converta-a em maiúsculas e as retorne. 
Investigue o que o método de .toUpperCase() faz.*/

function converterMaiuscula(texto){
    return texto.toUpperCase()
}
console.log(converterMaiuscula("issao"));

/*8. Crie uma função que receba um parâmetro e retorne o tipo de dado deste parâmetro.
Dica: Isso te ajudará a entender o que o operador typeof faz.*/

function identificaTipo(x){
    return typeof x
}

console.log(identificaTipo(234245));

/*9. Crie uma função pela qual passamos o raio de um círculo e ela retorna a circunferência.
Dica: Investigue se o objeto Math tem entre suas propriedades o número Pi.*/

function circunferencia(raio){
    return 2*3.14159265359*raio
}

console.log(circunferencia(5));
