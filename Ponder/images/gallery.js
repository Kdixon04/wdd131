// 1. Grab our HTML elements
let gallerySection = document.querySelector(".gallery");
let modal = document.querySelector("diaglog");
let modalImg = modal.querySelector("img");
const closeButton = modal.querySelector('.close-viewer');

// 2. Add an event listener, when img clicked open modal
gallerySection.addEventListener('click', (event) =>{
    console.log(event.target.src);
    // check to see if something is undefined
    if(event.target.src != undefined){
        // set the src image of modal
        modalImg.src = event.target.src.replace("-sm", "-full");

         // display modal
        modal.showModal();
    }
    
});



// 3.
// const gallery = document.querySelector('.gallery');
// const modal = document.querySelector('dialog');
// const modalImage = modal.querySelector('img');


// // Event listener for opening the modal
// gallery.addEventListener('click', openModal);

// function openModal(e) {
    
// // Code to show modal  - Use event parameter 'e'   
    
// }
// Close modal on button click
closeButton.addEventListener('click', () => {
    modal.close();
});

// Close modal if clicking outside the image
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});
          