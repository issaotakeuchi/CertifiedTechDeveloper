let tigre = {
  title: "O tigre",
  image: "./imagens/tiger.jpg",
  description: "O tigre (Panthera tigris) é uma das espécies da subfamília Pantherinae (família Felidae) pertencente ao gênero Panthera. É encontrado de forma nativa apenas no continente asiático; é um predador carnívoro e é a maior espécie de felino do mundo junto com o leão."
};

let jaguar = {
  title: "O jaguar",
  image: "./imagens/jaguar.jpg",
  description: "O tigre (Panthera tigris) é uma das espécies da subfamília Pantherinae (família Felidae) pertencente ao gênero Panthera. É encontrado de forma nativa apenas no continente asiático; é um predador carnívoro e é a maior espécie de felino do mundo junto com o leão."
};

let leao = {
  title: "O leão",
  image: "./imagens/leon.jpg",
  description: "O leão (Panthera leo) é um mamífero carnívoro da família dos felinos é uma das cinco espécies do gênero gênero Panthera. Os leões selvagens vivem em populações cada vez mais dispersas e fragmentadas na África subsahariana (com exceção das regiões florestais e das regiões de selva da Bacia do Congo) e uma pequena área do noroeste da Índia."
};

let leopardo = {
  title: "O leopardo",
  image: "./imagens/leopardo.jpg",
  description: "O leopardo (Panthera pardus) é um mamífero carnívoro da família dos felinos. Como três dos outros felinos do gênero Panthera: o leão, o tigre e a onça-pintada, são caracterizados por uma modificação do osso hióide que lhes permite rugir. É também conhecido como pantera marrom e, quando tem a pelagem completamente escura, como pantera negra (melanista)."
};

let panteraNegra = {
  title: "A pantera negra",
  image: "./imagens/pantera-negra.jpg",
  description: "A pantera negra é uma variação escura (melanismo) de várias espécies de felinos grandes, especialmente o leopardo (Panthera pardus) e a onça-pintada (Panthera onca). Mas deve-se ressaltar que não se trata de uma espécie nova, nem mesmo de uma subespécie, é simplesmente uma variação negra destes animais."
};

let guepardo = {
  title: "O guepardo",
  image: "./imagens/chita.jpg",
  description: "O guepardo, ou chita (Acinonyx jubatus) é um membro atípico da família felina. É o único representante vivo do gênero Acinonyx. Ele caça graças à sua visão e grande velocidade. É o animal terrestre mais rápido do mundo, atingindo uma velocidade máxima de 115 km/h em corridas de até quinhentos metros."
};


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







