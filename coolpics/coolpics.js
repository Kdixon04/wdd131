let gallerySection = document.querySelector("#gallery")
let modal = document.querySelector("#modal");
let modalImg = modal.querySelector("img"); 
const closeButton = modal.querySelector('#closeButton');

gallerySection.addEventListener('click', (event) =>{
    if(!event.target.src) return;
        // set the src image of modal
        console.log(event.target);
        modalImg.src = event.target.src.replace("wdd131", "hgres");
        modalImg.alt = event.target.alt;
         // display modal
        modal.showModal();
    });

closeButton.addEventListener("click", () =>{
    modal.close();
});

let menuButton = document.querySelector("#menu");
const linkList = document.querySelector("#linkList");

menuButton.addEventListener('click', (event) =>{
    linkList.classList.toggle("hide");
    linkList.style.display = "none";
});

