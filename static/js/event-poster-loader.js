const noOfEventPosters = document.getElementsByClassName("classForJs").length;
var i;
for (i=0;i<noOfEventPosters;i++){
    console.log(i + "not loaded");
    document.getElementsByClassName("classForJs")[i].addEventListener("load",function(){
        document.getElementsByClassName("classForJs")[i].style.opacity = "1";
        console.log(i + "is loaded");
    });
}