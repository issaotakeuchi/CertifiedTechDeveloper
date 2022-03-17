let avoidLoad = document.getElementById('submit');

avoidLoad.addEventListener('click', function(event){
    alert('vc clicou');
    event.preventDefault();
});

function loadFinished(){
    alert('página carregada');
}

let color = document.getElementById('color');

color.onmouseenter = function() {
    color.style.color = 'blue';
};

color.onmouseleave = function() {
    color.style.color = 'red';
};

let counter = document.getElementById ('counter')
let inputUserName = document.getElementById ('username')


inputUserName.addEventListener ('keyup', function () {
    color.innerHTML = inputUserName.value
	counter.innerHTML = inputUserName.value.length;
});