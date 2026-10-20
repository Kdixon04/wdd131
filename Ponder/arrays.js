// arrays in javascript
let courses = ["Wdd131", "Wdd130", "Cse110", "Cse210"];

// display the first course
console.log(courses[0]);
console.log(courses[3]);
// if you don't know the last array but you want to call it
// console.log(course[courses.length - 1]);

// normal for i loop
for(let i = 0; i < courses.length; i++) {
    console.log(courses[i]);
}

// array methods/functions 
courses.forEach((item) =>{
    console.log(item);
});

// Javascript Objects
//Ex: const car = {type:"Fiat", model:"500", color:"white"};
let course = {
    // varName: content
    name: "Dynamic Web Fundamentals",
    code: "WDD131",
    credits: 3,
    instructor: "Brother Warner"
}

console.log(course.instructor);

// array of objects (array uses square brackets)
let coursesArrayOfObjects = [
   {
    name: "Dynamic Web Fundamentals",
    code: "WDD131",
    credits: 3,
    instructor: "Brother Warner"
   },
   {
    name: "Web Fundamentals",
    code: "WDD130",
    credits: 2,
    instructor: "Brother Warner"
   }
];
// Challenege: Print out the name and code of the second course in this array
console.log(coursesArrayOfObjects[1].name);
console.log(coursesArrayOfObjects[1].code);

let body = document.querySelector('body');

coursesArrayOfObjects.forEach((course) => {
    // build out an HTML div with course contents
    let courseDiv = `
        <div>
            <h2>${course.name}</h2>
            <p>Code: ${course.code}</p>
            <p>Credits: ${course.credits}</p>
            <p>Instructor: ${course.instructor}</p>
        </div>
    `
    // add that div to the body
    body.innerHTML += courseDiv;
})