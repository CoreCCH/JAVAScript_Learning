// Canvas API = a means for drawing graphics
//              used for animations, games, data visualizations

let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");

//Draw lines
// context.strokeStyle = "purple";
// context.lineWidth = 10;
// context.beginPath();
// context.moveTo(0,0);
// context.lineTo(250, 250);
// context.lineTo(250, 500);
// context.moveTo(500, 0);
// context.lineTo(250, 250);
// context.stroke();

// Draw triangles
// context.fillStyle = "yellow";
// context.lineWidth = 10;
// context.beginPath();
// context.moveTo(250,0);
// context.lineTo(0,250);
// context.lineTo(500,250);
// context.moveTo(500,250);
// context.lineTo(250,0);
// context.stroke();
// context.fill();

// Draw rectangles
// context.fillStyle = "black";
// context.fillRect(0,0,250,250);
// context.strokeStyle = "black";
// context.strokeRect(0,0,250,250);

// context.fillStyle = "red";
// context.fillRect(0,250,250,250);
// context.strokeStyle = "black";
// context.strokeRect(0,250,250,250);

// context.fillStyle = "green";
// context.fillRect(250,250,250,250);
// context.strokeStyle = "black";
// context.strokeRect(250,250,250,250);

// context.fillStyle = "blue";
// context.fillRect(250,0,250,250);
// context.strokeStyle = "black";
// context.strokeRect(250,0,250,250);

// Draw circle
// context.fillStyle = "lightblue"
// context.strokeStyle = "red";
// context.beginPath();
// context.arc(250, 250, 200, 0, 2*Math.PI); // (圓心x, 圓心y, 半徑, 弧的起始角度，用弧度表示，0 表示 3 點鐘方向，π/2 表示 12 點鐘方向，π 表示 9 點鐘方向，3π/2 表示 6 點鐘方向，2π 表示 3 點鐘方向, 弧的結束角度，用弧度表示，和起始角度一樣，2π 表示一個完整的圓形)
// context.stroke();
// context.fill();

// Draw text
context.font = "50px Mv Boli";
context.fillStyle = "grey";
context.textAlign = "center"
context.fillText("You Win!", canvas.width / 2, canvas.width / 2);