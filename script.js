//LOAD SIDEN//

window.addEventListener("load", pageLoad);
//LOAD SIDEN SLUT//



function pageLoad() {
    console.log('pageLoad');


    document.querySelector(".slider").classList.add("slide");

    document.querySelector(".hero").classList.add("slide");

    document.querySelector(".landing_header").classList.add("splash");

}



function onClickMenu() {
    document.querySelector("#menuknap").classList.toggle("change");
    document.querySelector("#mobilenav").classList.toggle("change");

    document.querySelector("#menu_bg").classList.toggle("change_bg");
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
