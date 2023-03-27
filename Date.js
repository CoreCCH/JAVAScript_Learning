// Date object

let date = new Date();
// let date = new Date(100000000000); // 多少毫秒在初始時間後
// let date = new Date(2023, 1 ,2, 3, 4, 5); // 年月日小時分秒
// let date = new Date("March 27, 2023 00:00:00");

// let year = date.getFullYear();
// let dateOfMonth = date.getDate();
// let dayOfWeek = date.getDay();
// let month = date.getMonth();
// let hour = date.getHours();
// let second = date.getSeconds();

// date.setFullYear(2055);
// date.setHours(12);

// date = date.toLocaleString();
document.getElementById("myLabel").innerHTML = formatDate(date) + formatTime(date);

function formatDate(date) {
    let year = date.getFullYear();
    let month = date.getMonth()+1;
    let day = date.getDate();

    return `${month}/${day}/${year}`
}

function formatTime(date) {
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let amPm = hour >= 12 ? "pm" : "am";

    hour = hour % 12 || 12;

    return ` ${hour}:${minute}:${second} ${amPm}`
}
