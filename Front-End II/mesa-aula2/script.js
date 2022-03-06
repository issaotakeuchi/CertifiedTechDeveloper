
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


var userScore = 0
var computerScore = 0

while(userScore < 2 || computerScore < 2){
    var userChoice = prompt('digite a sua escolha para: pedra(1), papel(2) ou tesoura(3)')
    var computerChoice = getRandomIntInclusive(1,3);
    alert('sua escolha foi '+userChoice);
    alert('a escolha do computador foi '+computerChoice);
    
    if(userChoice == computerChoice){
        alert('empate. ninguém pontual');
        alert('sua pontuação' + userScore);
        alert('pontuação do computador' + computerScore);
    } else if(userChoice == 1 && computerChoice == 2){
        alert('pedra perde de papel. computador pontua');
        computerScore++;
        alert('sua pontuação' + userScore);
        alert('pontuação do computador' + computerScore);
    } else if(userChoice == 1 && computerChoice == 3){
        alert('pedra ganha de tesoura. você pontua');
        userScore++;
        alert('sua pontuação' + userScore);
        alert('pontuação do computador' + computerScore);    
    } else if(userChoice == 2 && computerChoice == 1){
        alert('papel ganha de pedra. você pontua');
        userScore++;
        alert('sua pontuação' + userScore);
        alert('pontuação do computador' + computerScore);
    } else if(userChoice == 2 && computerChoice == 3){
        alert('papel perde de tesoura. computador pontua');
        computerScore++;
        alert('sua pontuação' + userScore);
        alert('pontuação do computador' + computerScore);
    } else if(userChoice == 3 && computerChoice == 1){
        alert('tesoura perde de pedra. computador pontua');
        computerScore++;
        alert('sua pontuação' + userScore);
        alert('pontuação do computador' + computerScore);
    } else if(userChoice == 3 && computerChoice == 2){
        alert('tesoura ganha de papel. você pontua');
        userScore++;
        alert('sua pontuação' + userScore);
        alert('pontuação do computador' + computerScore);
    } 
}
    


