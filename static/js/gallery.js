const galleryImg = document.getElementsByTagName("figcaption");

for(var i = 0;i<9;i++){
    galleryImg[i].addEventListener("mouseover",function(){
        if(screen.width > 820 ){
            this.style.opacity = "0";
            this.parentElement.children[1].classList.add("animatedPicture");
            this.parentElement.children[1].scrollIntoView({behavior: "smooth", block: "center", inline: "center"});  
        }
    });
}

for(var i = 0;i<9;i++){
    galleryImg[i].addEventListener("mouseout",function(){
        if(screen.width > 820 ){
            this.style.opacity = "1";  
            this.parentElement.children[1].classList.remove("animatedPicture");  
        }
    });
}
var flagArray = [0, 0, 0, 0, 0, 0, 0, 0, 0];
function check_for_ones(){
    let i;
    for(i =0;i<9;i++){
        if(flagArray[i] == 1){
            galleryImg[i].parentElement.children[1].classList.remove("animatedPicture");
            galleryImg[i].style.opacity = "1";
        }
    }
}
for(var i = 0;i<9;i++){
    galleryImg[i].addEventListener("click",function(){
        if(screen.width < 820 ){
            if(flagArray[i] == 0){                
                this.style.opacity = "0";
                this.parentElement.children[1].classList.add("animatedPicture");  
                check_for_ones();
                flagArray[i] = 1;
            }
            else{
                this.style.opacity = "1";
                this.parentElement.children[1].classList.remove("animatedPicture"); 
                flagArray[i] = 0; 
            }
        }
    });
}
