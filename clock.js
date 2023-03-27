const myLabel = document.getElementById("myLabel");

setInterval(update, 1000);

function update(){
    let date = new Date();
    myLabel.innerHTML = formatTime(date);

    function formatTime(){
        let hour = date.getHours();
        let minute = date.getMinutes();
        let second = date.getSeconds();
        let amPm = hour >= 12 ? "pm" : "am";

        hour = hour % 12 || 12;

        hour = formatZero(hour);
        minute = formatZero(minute);
        second = formatZero(second);

        return `${hour}:${minute}:${second} ${amPm}`
    }

    function formatZero(time){
        time = time.toString();
        return time.length < 2 ? "0"+time : time;
    }
}