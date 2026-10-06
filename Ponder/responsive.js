// 1. Select Menu from the DOM
let menuButton = document.querySelector('.menu-btn');

// 2. Add an even listener to the menu button

// unamed or anonymous function
menuButton.addEventListener("click", (e) => {
    
    //3. toggle whether the links are displayed or not

    //4. Toggle X animation for menu button
    menuButton.classList.toggle('change');
});


// named function
function toggleMenuLinks(event) {

}
