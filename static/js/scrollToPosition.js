//back-to-top button 
const home = document.querySelector("#home");
const goToHome = () => {
    home.scrollIntoView({behavior: "smooth", block: "start", inline: "start"});
};


//go to about section code
const about = document.querySelector(".aboutSection");
const goToAbout = () => {
    about.scrollIntoView({behavior: "smooth", block: "start", inline: "start"});
};


//go to teams section code
const campusambassador = document.querySelector("#campussambassador");
const goToCA = () => {
    campusambassador.scrollIntoView({behavior: "smooth", block: "start", inline: "start"});
};


//go to events section code
const contact = document.querySelector("#contact");
const goToContact = () => {
    contact.scrollIntoView({behavior: "smooth", block: "start", inline: "start"});
};
