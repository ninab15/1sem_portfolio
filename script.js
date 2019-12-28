//BURGERMENU//

window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");
    document.querySelector("#menuknap").addEventListener("click", toggleMenu);
}


function toggleMenu() {
    console.log("toggleMenu");
    document.querySelector("#menu").classList.toggle("hidden");

    let erSkjult = document.querySelector("#menu").classList.contains("hidden");

    if (erSkjult == true) {
        document.querySelector("#menuknap").textContent = "☰";
    } else {
        document.querySelector("#menuknap").textContent = "X";
    }
}

//BURGERMENU SLUT//

//TO THE TOP BUTTON//


//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//TO THE TOP BUTTON SLUT//

//CAROUSEL//


//Når man klikker på venstra, rykker slides sig til venstre
//Når man klikker på venstra, rykker slides sig til venstre
//Når man klikker på nav indicators, ryk til det rette slide


//----------SPLASH BILLEDE--------------//

const hero = document.querySelector('.hero');
const slider = document.querySelector('.slider');
const headline = document.querySelector('.hero');


const tl = new TimelineMax();

tl.fromTo(hero, 1, {
        height: "0%"
    }, {
        height: "80%",
        ease: Power2.easeInOut
    }).fromTo(hero, 1.2, {
        width: "100%"
    }, {
        width: "80%",
        ease: Power2.easeInOut
    }).fromTo(slider, 1.2, {
        x: "-100%"
    }, {
        x: "0%",
        ease: Power2.easeInOut
    }, "-=1.2")
    .fromTo(headline, 0.5, {
        opacity: 0,
        x: 30
    }, {
        opacity: 1,
        x: 0
    }, "-=0.5");
