// classes = 類似python的class，是一個模板，也具有繼承、多型等功能

class player{
    score = 0; // init
    pause() {
        console.log("You pause the game.");
    }
    exit() {
        console.log("You exit the game");
    }
}

// 繼承
class superPlayer extends player {
    score = 1000;

    fly() {
        console.log("You are flying.");
    }
    
}

const player1 = new player(); // 用new來創建對象
player1.score = 100;
console.log(player1.score);
player1.pause();

const player2 = new superPlayer();
console.log(`player2 score: ${player2.score}`);
player2.exit();
player2.fly();

