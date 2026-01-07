var duck = document.querySelector('.duck');
var sun = document.querySelector('.sun');
var sky = document.querySelector('.sky');
var divider = document.querySelector('.shape-fill');
var gunshot_mp3 = document.getElementById('gunshot_mp3');
var duck_mp3 = document.getElementById('duck_mp3');
var win = document.querySelector('.win');
var lose = document.querySelector('.lose');
var bullets= document.querySelector('.bullets');
var root = document.querySelector(':root');

/*Funciones listas para ejecutarse*/
var lost = setInterval(function(){
if(!document.getElementById("b1") ){
lose.style.display="block";
}},1);

var random = setInterval(function(){
keyframe();
},5000);


/*Keyframe aleatorio*/

function keyframe(){
    root.style.setProperty('--top1', (Math.floor(Math.random() * 550) + 100) + 'px');
    root.style.setProperty('--left1', (Math.floor(Math.random() * 1200) + 100) + 'px');
    root.style.setProperty('--top2', (Math.floor(Math.random() * 550) + 100) + 'px');
    root.style.setProperty('--left2', (Math.floor(Math.random() * 1200) + 200) + 'px');
    root.style.setProperty('--top3', (Math.floor(Math.random() * 550) + 100) + 'px');
    root.style.setProperty('--left3', (Math.floor(Math.random() * 1200) + 100) + 'px');
}

window.onload = keyframe;


/*Funciones onClick*/
duck.onclick = function(){
    duck.style.filter='grayscale(100%) brightness(40%) sepia(100%) hue-rotate(-50deg) saturate(600%) contrast(0.8)';
    kill();
    win.style.display="block";
};

sun.onclick = function(){
    sun.style.background="white";
    sun.style.boxShadow="0px 0px 35px yellow;"
    sky.style.background="black";
    divider.style.fill="black";
};


/*Funciones normales*/
function kill(){
    gunshot_mp3.play();
    duck_mp3.play();
	var styles;
    styles = duck.style;
    styles.webkitAnimationPlayState = 'paused';

        setTimeout(function(){ 
        duck.style.transform="translateY(500px)";
        duck.style.transition="all 1s ease-in-out";
    }, 1000);  
}

function gunshot(){
    bullets.removeChild(bullets.lastElementChild);
    gunshot_mp3.play();
}

window.addEventListener('click', gunshot , false);
