// DOM Manipulation 

let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        // code for changes to colors and logo
        document.body.style.backgroundColor = "grey";
        document.querySelector("p").style.color = "white";
        document.querySelector("h1").style.color = "white";
        document.querySelector("h5").style.color = "#9dd3ff";
        document.getElementById("italics").style.color = "white";
        document.querySelector("ol").style.color = "white";
        logo.src = "byui-logo-white.png";
    } else {
        // code for changes to colors and logo
        document.body.style.backgroundColor = "white";
        document.querySelector("p").style.color = "black";
        document.querySelector("h1").style.color = "black";
        document.querySelector("h5").style.color = " rgb(0, 130, 251);"
        document.getElementById("italics").style.color = "black";
        document.querySelector("ol").style.color = "black";
        logo.src = "byui-logo-blue.webp";
    }
}           
                    