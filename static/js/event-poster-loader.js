const eventPoster = document.getElementsByClassName("classForJs");
const noOfEventPosters = eventPoster.length;
var i;
for (i=0;i<noOfEventPosters;i++){
    eventPoster[i].addEventListener("load",function(){
        eventPoster[i].style.opacity = "1";
        console.log(i + "is loaded");
    });
}