const typeChoice = 
document.querySelector("#whoareYou");
const studentDetails = 
document.querySelector("#student-details");
const guestDetails = 
document.querySelector("#guest-details");

typeChoice.addEventListener("change", () => {
    studentDetails.hidden = typeChoice.value 
    !== "Student";

    guestDetails.hidden = typeChoice.value 
    !== "Guest";
});

//Make sure that they don't select today's date:
if (isPastDate(availableDate)) {
    output.textContent = "Please choose a later date.";
    return;
  }

if(studentDetails.length < 8){
        // add an error message
        output.textContent = 
        "Student I# needs to be 8 digits. Please check I# and try again.";
        // exit function so the rest of the forum doesn't submit

        return;
    };

if(guestDetails.length < 8){
    // add an error message
    output.textContent =
    "Guest access code needs to contain 'EVENT' and following 3 digits.";
    // Exit function so rest of forum doesn't submit
    return;
};