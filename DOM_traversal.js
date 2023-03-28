// let element = document.body;
// let child = element.firstElementChild;
// child.style.backgroundColor = "red";

let element = document.querySelector("#vegetables");
// let child = element.children[0];
let child = Array.from(element.children);
child.forEach(element => {
    element.style.backgroundColor = "red";
});
// child.style.backgroundColor = "red";