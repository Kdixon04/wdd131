let gallerySection = document.querySelector("img")


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
