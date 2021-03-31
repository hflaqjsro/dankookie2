const start_img = document.querySelector('.start_img');


function paintImage(imgNumber){
    const image = new Image();
    image.src = './img/0'+(imgNumber)+'.png';
    image.classList.add("start_png");
    start_img.appendChild(image);
}

function genRandom(){
    const number = Math.floor(Math.random() * 10);
    return number;
}

function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();