// 2 - MOLDE AS INFORMAÇÕES DO ARQUIVO https://drive.google.com/file/d/16L2NejZU49mCLbo6RTmSKtuElOTOYUXv/view
// PARA O FORMATO JSON, E EXPORTE ESSE JSON COMO MODULO

// const funcBankAccount = require('./Mesa15BankAccount');

// let account1 = new funcBankAccount(5486273622, 'Conta Corrente', 27771, 'Abigael Natte');
// let account2 = new funcBankAccount(1183971869, 'Conta Poupança', 8675, 'Ramon Connell');
// let account3 = new funcBankAccount(9582019689, 'Conta Poupança', 27363, 'Jarret Lafuente');
// let account4 = new funcBankAccount(1761924656, 'Conta Poupança', 32415, 'Ansel Ardley');
// let account5 = new funcBankAccount(7401971607, 'Conta Poupança', 18789, 'Jacki Shurmer');
// let account6 = new funcBankAccount(630841470, 'Conta Corrente', 28776, 'Jobi Mawtus');
// let account7 = new funcBankAccount(4223508636, 'Conta Corrente', 2177, 'Thomasin Latour');
// let account8 = new funcBankAccount(185979521	, 'Conta Poupança', 25994, 'Lonnie Verheijden');
// let account9 = new funcBankAccount(3151956165, 'Conta Corrente', 7601, 'Alonso Wannan');
// let account10 = new funcBankAccount(2138105881, 'Conta Poupança', 33196, 'Bendite Huggett');

// const accounts = [account1, account2, account3, account4, account5, account6, account7, account8, account9, account10];
// const accountsToJSON = JSON.stringify(accounts);

// console.log(accounts);
// console.log(accountsToJSON)



const accountList = [
    {"accountNumber":"5486273622","accountType":"Conta Corrente","ammount":"27771","accountHolder":"Abigael Natte"},
    {"accountNumber":"1183971869","accountType":"Conta Poupança","ammount":"8675","accountHolder":"Ramon Connell"},
    {"accountNumber":"9582019689","accountType":"Conta Poupança","ammount":"27363","accountHolder":"Jarret Lafuente"},
    {"accountNumber":"1761924656","accountType":"Conta Poupança","ammount":"32415","accountHolder":"Ansel Ardley"},
    {"accountNumber":"7401971607","accountType":"Conta Poupança","ammount":"18789","accountHolder":"Jacki Shurmer"},
    {"accountNumber":"630841470","accountType":"Conta Corrente","ammount":"28776","accountHolder":"Jobi Mawtus"},
    {"accountNumber":"4223508636","accountType":"Conta Corrente","ammount":"2177","accountHolder":"Thomasin Latour"},
    {"accountNumber":"185979521","accountType":"Conta Poupança","ammount":"25994","accountHolder":"Lonnie Verheijden"},
    {"accountNumber":"3151956165","accountType":"Conta Corrente","ammount":"7601","accountHolder":"Alonso Wannan"},
    {"accountNumber":"2138105881","accountType":"Conta Poupança","ammount":"33196","accountHolder":"Bendite Huggett"}
]

module.exports = accountList;