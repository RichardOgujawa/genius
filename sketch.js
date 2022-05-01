let x = 100;
let y = x;


function setup() {
  createCanvas(710, 400);
}

function draw() {
  clear();
  x = mouseX;
  y = mouseY;
  let c; 
  //

  blendMode(MULTIPLY);
    c = color(255, 0, 0);
    ellipse(x, y, 30, 30).fill(c);
}

