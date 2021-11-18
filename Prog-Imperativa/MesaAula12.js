const alicia = [23, 69, 32];
const bob = [12, 67, 43];

function encontrarGanhador(a, b) {
    let pontosPrimeiroParticipante = 0;
    let pontosSegundoParticipante = 0;

    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            pontosPrimeiroParticipante += 1;
        } else if (b[i] > a[i]) {
            pontosSegundoParticipante += 1;
        }
    }
    console.log(pontosPrimeiroParticipante, pontosSegundoParticipante)

    if (pontosPrimeiroParticipante > pontosSegundoParticipante) {
        return 'alicia'
    } else {
        return "bob"
    }
}

console.log("o vencedor é " + encontrarGanhador(alicia, bob));



// Crie a função digitalHouse() que receberá 2 números como parâmetros. A função deve imprimir na tela os números de 1 a 100, mas levando em conta os seguintes critérios:
// ● Se o número a ser impresso for um múltiplo do primeiro parâmetro inserido, você deve exibir a string &quot;Digital&quot; em vez do número.
// ● Se o número a ser impresso for um múltiplo do segundo parâmetro inserido, você deve exibir a string &quot;House&quot; em vez disso.
// ● Se o número a ser imprimir for um múltiplo de ambos os parâmetros, você deve exibir a string &quot;Digital House&quot; em vez do número.

function digitalHouse(primeiroNumero, segundoNumero) {
    for (var i = 1; i < 100; i++) {
        if (i%primeiroNumero === 0 &&  i%segundoNumero === 0) {
            console.log("digital house");
        } else if (i%primeiroNumero === 0) {
            console.log("digital");
        } else if (i%segundoNumero === 0) {
            console.log("house");
        }
    }
}

digitalHouse(1, 3);

