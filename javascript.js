// hide nav for mobile size
var navLinks = document.getElementById("navLinks");

function showNav() {
    navLinks.style.right = "0";
}

function hideNav() {
    navLinks.style.right = "-200px";
}




// Get the button:
let mybutton = document.getElementById("myBtn");

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
    // document.documentElement.scrollTop = 0;  // For Chrome, Firefox, IE and Opera  
    window.scrollTo({ top: 0, behavior: 'smooth' });
}



function msgFunction() {
    alert("Message submitted");
}

function subscribeFunction() {
    alert("Thank you for subscribing");
}



function lastUpdate() {
    var x = document.lastModified;
    document.getElementById("demo").innerHTML = x;
}



let tabHeader = document.getElementsByClassName("tab-header")[0];
let tabIndicator = document.getElementsByClassName("tab-indicator")[0];
let tabBody = document.getElementsByClassName("tab-body")[0];

let tabsPane = tabHeader.getElementsByTagName("div");

for (let i = 0; i < tabsPane.length; i++) {
    tabsPane[i].addEventListener("click", function () {
        tabHeader.getElementsByClassName("active")[0].classList.remove("active");
        tabsPane[i].classList.add("active");

        tabBody.getElementsByClassName("active")[0].classList.remove("active");
        tabBody.getElementsByTagName("div")[i].classList.add("active");

        tabIndicator.style.left = 'calc(calc(100% / 4) * ${i})'
    });
}
