let tenista = {
    nome: 'Roger', /*propriedade*/
    idade: 38, /*propriedade*/
    ativo: true, /*propriedade*/
    /*metodo*/saudacao: function() /*função anonima*/{
        return 'Olá, me chamo ' + this.nome;
    }
};

console.log(tenista.saudacao());
console.log(tenista.idade);

let strTenista = JSON.stringify(tenista);
console.log(strTenista)

// função construtora - geralmente (por convencao) essas funcoes comecam com letra maiuscula --- conhecido como método
function Carro(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
};

// instanciar
let meuCarro = new Carro('ford', 'falcon');

// json - javascript object notation: formato de texto simples usado para trocar dados entre diferentes sistemas
// dados sempre enviados em JSON
// JSON.parse ou JSON.stringify(objetoLiteral)


