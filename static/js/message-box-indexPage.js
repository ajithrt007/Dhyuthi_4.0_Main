const message = document.querySelector('.message-box');
const marquee = document.getElementsByTagName('marquee')[0];
message.style.display = 'none';
function showCoords(event){
    console.log('thudangi makkale');    
    message.style.display = 'block';
    var x = event.clientX;
    var y = event.clientY;
    if(window.scrollY > 0){
        y = y + window.scrollY;
    }
    message.style.position = 'absolute';
    message.style.top = y + 'px';
    message.style.left = x + 'px';
}
marquee.addEventListener("mousemove", (evt) => {
    showCoords(evt);
});
marquee.addEventListener("mouseout", function(){
    message.style.display = 'none';
});