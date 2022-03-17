
function qualFelino(){
  let escolhaCardFelino = prompt("qual felino quer editar?");

  let felinosParaCard = [jaguar, leao, leopardo, panteraNegra, guepardo, tigre];

for(let i = 0; i <= felinosParaCard.length; i++){

  let container = document.getElementById('containerAtividadeMesa');
  let cardDeFelinos = document.createElement('div');
  
  cardDeFelinos.innerHTML = ` 
    <div class="item">
    <img src=${felinosParaCard[i].image}>
    <h2>${felinosParaCard[i].title}</h2>
    <p>
    ${felinosParaCard[i].description}
    </p>
    </div>`;
  container.appendChild(cardDeFelinos);
}


}
