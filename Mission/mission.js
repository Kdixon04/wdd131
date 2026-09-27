// DOM Manipulation 


let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        // code for changes to colors and logo
        document.body.style.backgroundColor = "grey";
        document.getElementById("p").style.color = "white";

    } else {
        // code for changes to colors and logo
    }
}           
                    