// add / change HTML elements

// const nameTag = document.createElement("h1");
// nameTag.innerHTML = window.prompt("enter your name.");
// document.body.append(nameTag);

const myList = document.getElementById("fruits");
const listItem = document.createElement("li");
listItem.textContent = "mango";
// myList.append(listItem);
myList.insertBefore(listItem, myList.getElementsByTagName("li")[1]); // (要放進去的資料, 取得要放在哪裡)
