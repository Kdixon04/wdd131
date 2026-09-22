// select an HTML element from the DOM
// save it to ta local variable called heading
// now we can call it later in the program
let heading = document.querySelector("h1");

console.log(heading);

heading.style.color = "#0000FF";
heading.style.fontSize = "3em";
// CSS: font-size, any time there is a dash in the CSS name, it is camel cased in JS: fontSize


// 2 Minute Challenge
heading.style.fontFamily = "Arial";
heading.style.textDecoration = "underline wavy";
// Other Examples
// heading.style.boarder = "2px solid black";
// heading.style.display = "grid";

// do everything one line 
document.querySelector("p").style.color = "blue";
// save it to a variable when you want to make more than one change

// there are different ways to select from the DOM
// getElementById only calls IDs, don't need the hashtag
document.getElementById("topics");

// you can select more than one element at a time
// Selects a class which is called multiple times in the HTML file
console.log(document.querySelectorAll(".list")); //[0].style)

// apply a class to an element
let topicsClassList = document.querySelector("#topics").classList;

topicsClassList.add("special");
// toggle turns it off and on 
topicsClassList.toggle("special");

// Practice Code to add and understand nothing about how it works (LOL)
let selectElem = document.getElementById('webdevlist');

selectElem.addEventListener('change', function(){
    let codeValue = selectElem.value;
    console.log(codeValue);
    heading.textContent = codeValue;
})
                