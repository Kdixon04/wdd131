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