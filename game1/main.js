var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var x = 0;
var y = 20;
var dx = 1;
var dy = 1;

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.font = ctx.font.replace(/\d+px/, "28px");
  ctx.fillText("Happy Halloween!", x, y, 200);

  x = x + dx;
  y = y + dy;

  if (x < 0 || x + 200 > canvas.width) {
    dx = -dx;
    ctx.fillStyle = "hsl(" + 360 * Math.random() + ", 50%, 50%)";
  }

  if (y < 20 || y + 4 > canvas.height) {
    dy = -dy;
    ctx.fillStyle = "hsl(" + 360 * Math.random() + ", 50%, 50%)";
  }
}

setInterval(draw, 10);
