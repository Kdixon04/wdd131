let age = 33;
let name = "Brother Warner";
let favoriteColor = "";

//Console.log = print in Python
/* 
Multiline comment
in Javascript
*/
console.log(age);

// When declaring a variable, use let, when calling it, you don't need to use let
age = 34;

console.log(age);

// Cannot reassign a constant variable
const eyeColor = "hazel";
const policyDisclaimers = "Exclusions apply to vehicles registered in Michigan";

// scope is where variables can be referenced 
if(age == 34) {
    // Now that we are in the curly braces, we are in a different scope
    // Inside this scope, we can reference variables declared outside this scope
    console.log(name);

    // declare a variable in  an inner scope
    let favoriteColor = "blue";
}

// Because the variable was declared within an inner scope, we cannot as easily declare it outside the inner scope

console.log(favoriteColor);

// pull something from the HTML page 
document.querySelector("h1").style.color = favoriteColor;