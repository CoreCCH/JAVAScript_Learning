// nests function

let userName = "Bro";
let userInbox = 0;

login();

function login() {
    displayUserName();
    displayUserInbox();

    // 將function寫在function內部外部就無法呼叫
    function displayUserName() {
        console.log(`welcome ${userName}`);
    }
    
    function displayUserInbox() {
        console.log(`You have ${userInbox} new messages!`);
    }
}


