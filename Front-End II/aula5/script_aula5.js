let nomeUsuario = "Paulo";

console.log(`Olá, usuário ${nomeUsuario}`);
console.log(`A soma dos valores foi ${4+4}`);

//modificar os elementos do DOM

let h1 = document.querySelector('h1');
// console.log(h1.childNodes[0].data);

// console.log(h1.innerText);

h1.innerText = "novo tituloooo";

h1.innerText = "<h6>Novo Titulo</h6>"

h1.innerHTML = "<h6>Novo Titulo</h6>"


//modificar estilos

let body = document.querySelector('body');

body.style.backgroundColor = "#88e690";