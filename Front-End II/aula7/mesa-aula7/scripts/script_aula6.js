//let container1 = document.getElementById('container1');
//console.log(container1);

//et h4 = document.createElement('h4');

//h4.innerHTML = "TITULO 4";

//let h4ElementoTextual = document.createTextNode ("titulo 4");

//h4.appendChild(h4ElementoTextual);
//console.log(h4);



//container1.appendChild(h4);

//console.log(h4.parentElement);

// container1.removeChild(h4)




let listaFelinos = document.querySelectorAll('.item');

listaFelinos.forEach(item => {
    console.log(item);
})

let container2 = document.getElementById('container2');

// container2.firstElementChild.remove()

// container2.removeChild(listaFelinos[1]);


let novaDiv = document.createElement('div');

novaDiv.innerHTML = "<h1> Novo elemento </h1>";

//container2.appendChild(novaDiv);
// container2.insertBefore(novaDiv, container2.firstChild);