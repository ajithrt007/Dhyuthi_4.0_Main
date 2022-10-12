// Music Island 
const music = document.querySelector('.sound-container').children;
const child1 = music[0];
const child2 = music[1];
const child3 = music[2];
const maxHeight = 25;
const minHeight = 13;
var musicState = 'On';
var intervalId;
var song = document.getElementById('song');
//Play
function on(){
    song.play();
    function randomheights(){
        var randomInteger = Math.floor(Math.random() * (maxHeight - minHeight)) + minHeight;
        return randomInteger;
    }

    function changeHeights(){
        child1.style.height = randomheights() + 'px';
        child2.style.height = randomheights() + 'px';
        child3.style.height = randomheights() + 'px';
    }
    musicState = 'On';
    intervalId = setInterval(changeHeights,500);
}
//Mute
function off(){
    song.pause();
    musicState = 'Off';
    clearInterval(intervalId);
    child1.style.height = minHeight + 'px';
    child2.style.height = minHeight + 'px';
    child3.style.height = minHeight + 'px';
}

off();

//Switch States
document.querySelector('.sound-island').addEventListener('click',function(){
    if(musicState === 'On'){
        off();
    }
    else{
        on();
    }
});


//Logos Island
const navIslandNo = document.querySelector('.logos-island').childElementCount;
const navIsland = document.querySelector('.logos-island');
const navIslandChildren = document.querySelector('.logos-island').children;
var navIslandState = 'expanded';
var scrollHeight;
function compressIsland(){
    var i;
    for (i = 0; i< navIslandNo; i++){
        navIslandChildren[i].children[1].style.display = 'none';
    }
}
function expandIsland(){
    var i;
    for (i = 0; i< navIslandNo; i++){
        navIslandChildren[i].children[1].style.display = 'block';
    }
}  
window.addEventListener('scroll',function(){
    scrollHeight = this.window.scrollY;
    if(scrollHeight > 0 && (this.screen.width >=726)){
            compressIsland();
    }
    if(scrollHeight == 0 && (this.screen.width >=726)){
            expandIsland();
    }
});
navIsland.addEventListener('mouseover',function(){
    if(screen.width >=726){
        expandIsland();
    }   
});
navIsland.addEventListener('mouseout',function(){
    if(screen.width >=726){
        compressIsland();
    }  
});    

function mobExpandedfState(){
    navIsland.classList.add('mobExpand');
    expandIsland();
    hideSoundIsland();
    makeATagClickable();
}
function mobCompressedState(){
    navIsland.classList.remove('mobExpand');
    compressIsland();
    displaySoundIsland();
    makeATagUnclickable();
}
const soundIsland = document.querySelector('.sound-island');
function hideSoundIsland(){
    soundIsland.style.position = 'absolute';
    soundIsland.style.zIndex = -10;
}
function displaySoundIsland(){
    soundIsland.style.position = 'unset';
    soundIsland.style.zIndex = 'unset';
}
function makeATagUnclickable(){
    var i;
    for (i = 0; i< navIslandNo; i++){
        navIslandChildren[i].style.pointerEvents = "none";
        navIslandChildren[i].style.cursor = "default";
    }
}
function makeATagClickable(){
    var i;
    for (i = 0; i< navIslandNo; i++){
        navIslandChildren[i].style.pointerEvents = "unset";
        navIslandChildren[i].style.cursor = "unset";
    }
}
if(screen.width < 726){
    compressIsland();
    makeATagUnclickable();
    navIsland.addEventListener('click',function(){
        console.log(screen.width);
        mobExpandedfState();
    });
    document.addEventListener("click", (evt) => {
        let target = evt.target;
        if(target != navIsland) {            
            mobCompressedState();
        }
    });
}