// Two steps:
// 1. Declaration (var, let, const)
// 2. Assignment

let firstName = "James"; // strings
let student = true; // booleans
let age = 21; // numbers

age = age + 1;

console.log("Hello",firstName);
console.log("You are",age,"years old");
console.log("Enrolled:",student);

document.getElementById("p1").innerHTML = "Hello " + firstName;
document.getElementById("p2").innerHTML = "You are " + age + "years old";
document.getElementById("p3").innerHTML = "Enrolled: " + student;

