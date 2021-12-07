// sort pra maior e menor altura
// media de altura usar if ou filter


arrayPessoas = [
    {
        "sexo": "F",
        "nome": "Abigael Natte",
        "altura": "1.61"
    },
    {
        
        "sexo": "M",
        "nome": "Ramon Connell",
        "altura": "1.75"
    },
    {
        
        "sexo": "M",
        "nome": "Jarret Lafuente",
        "altura": "1.55"
    },
    {
        
        "sexo": "F",
        "nome": "Ansel Ardley",
        "altura": "1.67"
    },
    {
        
        "sexo": "F",
        "nome": "Jacki Shurmer",
        "altura": "1.75"
    },
    {
        
        "sexo": "M",
        "nome": "Jobi Mawtus",
        "altura": "1.88"
    },
    {
        
        "sexo": "M",
        "nome": "Thomasin Latour",
        "altura": "1.67"
    },
    {
        
        "sexo": "F",
        "nome": "Lonnie Verheijden",
        "altura": "1.63"
    },
    {
        
        "sexo": "M",
        "nome": "Alonso Wannan",
        "altura": "1.92"
    },
    {
        
        "sexo": "F",
        "nome": "Bendite Huggett",
        "altura": "1.80"
    }
  ];


//   a maior e a menor altura do grupo;
  function maxArray (arr) {
        let arrayNewMax = arr.sort(function(a, b){
            return b.altura - a.altura;
        });
        console.log(arrayNewMax[0].altura);
    }

    function minArray (arr) {
    let arrayNewMin = arr.sort(function(a, b){
        return a.altura - b.altura;
    });
    console.log(arrayNewMin[0].altura);
}



  minArray(arrayPessoas);
  maxArray(arrayPessoas);


// //   a média de altura das mulheres;
function averageFemale(arr) {
    const females = arr.filter(person => person.sexo === "F");
    const average = females.reduce((total, next) => parseFloat(total) + parseFloat(next.altura), 0) / females.length;
    return average;
}

console.log(averageFemale(arrayPessoas));


// // o número de homens.
function menInArray (arr) {
    const male = arr.filter(person => person.sexo === "M");
    return male.length;
}

console.log(menInArray(arrayPessoas));
