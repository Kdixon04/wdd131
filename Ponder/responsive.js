// 1. Select Menu from the DOM
let menuButton = document.querySelector('.menu-btn');

// 2. Add an even listener to the menu button

// unamed or anonymous function
menuButton.addEventListener("click", (e) => {
    
    //3. toggle whether the links are displayed or not
    let nav = document.querySelector('nav');

    // if(nav.style.display === ''){
    //     nav.style.display = 'flex';
    // }
    // else{
    //     nav.style.display = '';
    // }
    //ternanry operator
    // essentially same thing done as step 3
    nav.style.display = nav.style.display === '' ? 'flex' : '';

    //4. Toggle X animation for menu button
    menuButton.classList.toggle('change');
});


// named function
// function toggleMenuLinks(event) {

// }
