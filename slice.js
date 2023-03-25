// slice() extrcat a section of a string 
//          and returns it as a new string

let fullName = "James Chiu";
let firstName;
let lastName;

// firstName = fullName.slice(0, 5);
// lastName = fullName.slice(4);

firstName = fullName.slice(0, fullName.indexOf(" "));
lastName = fullName.slice(fullName.indexOf(" ") + 1);

console.log(firstName)
