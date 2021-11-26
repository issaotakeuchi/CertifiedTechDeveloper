/*
SEGUINDO A MESA DE TRABALHO DA AULA 13. DESENVOLVA ESSE ALGORITMO 
1 - CRIE UMA FUNÇÃO CONSTRUTORA PARA O OBJETO CONTA BANCARIA COM AS SEGUINTES PROPRIEDADES:

● Número da conta (somente números)
● Tipo de conta (conta corrente ou poupança em $)
● Saldo em $ (valor apenas)
● Titular da conta (nome completo)

*/


function BankAccount(accountNumber, accountType, ammount, accountHolder) {
    this.accountNumber = accountNumber;
    this.accountType = accountType;
    this.ammount = ammount;
    this.accountHolder = accountHolder;
}



module.exports = BankAccount;