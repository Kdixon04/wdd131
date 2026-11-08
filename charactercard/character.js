
let health = document.querySelector("#health");
let attacked = document.querySelector("#attacked");
let levelUp = document.querySelector("#levelUp");
let characterImg = document.querySelector("#image");

let character = {
    image: "snortleblat.webp",
    name: "Snortleblat",
    class: "Swamp Beast Diplomat",
    level: 1,
    health: 100,
    

    attackAction(){
        this.health -= 20;
        health.textContent = `Health: ${character.health}`;
        if (this.health === 0) {
            alert("Snortleblat has bought the farm!");
            // this.health = 100;
        } 
    },

    levelingUp(){
        this.level += 1;
        level.textContent = `Level: ${character.level}`;
    }
    
};

characterImg.src = character.image;

attacked.addEventListener("click", () =>{
    character.attackAction();
});

levelUp.addEventListener("click", () =>{
    character.levelingUp();
});

