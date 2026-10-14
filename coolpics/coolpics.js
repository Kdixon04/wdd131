let gallery = document.querySelector("#gallery")
let modal = document.querySelector("#image-viewer");
let modalImg = modal.querySelector("img"); // broken
const closeButton = modal.querySelector('.close-viewer');

gallerySection.addEventListener('click', (event) =>{
    if(event.target.src != "IMG") return;
        // set the src image of modal
        modalImg.src = event.target.src;
        modalImg.alt = event.target.alt;
         // display modal
        modal.showModal();
    });

closeButton.addEventListener("click", () =>{
    modal.close
});
