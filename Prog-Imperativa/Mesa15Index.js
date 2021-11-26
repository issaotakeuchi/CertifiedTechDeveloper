// 3 - DESENVOLVA UM ALGORITOMO QUE IRA RECEBER O MODULO ARRAY DE JSON E CRIE DINAMICAMENTE OS 
// OBJETOS CONTA BANCARIA EM UM SEGUNDO ARRAY LISTA USUARIOS ARMAZENE ESSE OBJETOS 

// 4 - CRIE DE UM OBJETO LITERAL CHAMADO BANCO QUE TERÁ UMA PROPRIEDADE CHAMADA CLIENTES, ELE SERÁ COMPOSTO 
// PELA LISTA DE OBJETOS GERADOS NO PONTO ANTERIOR.

// 5 - O OBJETO DO BANCO CRIARÁ UM MÉTODO CHAMADO CONSULTARCLIENTE QUE RECEBERÁ UM
// NOME (TITULAR) POR PARÂMETRO E DEVE PESQUISAR NA LISTA DE CONTAS E RETORNAR AO
// OBJETO DO CLIENTE QUE CORRESPONDE A ESSE NOME INSERIDO.

const accountList = require('./Mesa15AccountList');
const funcBankAccount = require('./Mesa15BankAccount');

var user = [];

for(var i = 0; i < accountList.length; i++) {
    user.push(new funcBankAccount(accountList[i].accountNumber, accountList[i].accountType, accountList[i].ammount, accountList[i].accountHolder));
}


let bank = {
    clients: user,
    verifyAccount: function (name) {
        for (var i = 0; i < this.clients.length; i++) {
            if (this.clients[i].accountHolder == name) {
                return this.clients[i];
            }
        }
    }
}


console.log(bank.verifyAccount('Bendite Huggett'));