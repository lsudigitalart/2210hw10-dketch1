var r;
var sparks;
var sparks_vel;
var sparks_acc;
var num = 60;
var x = [];
var y = [];

function setup() {
  createCanvas(400, 320);
  r = height * .45;
  sparks = 0;
  sparks_vel = 0;
  sparks_acc = .0001;
  noStroke();

  for (var i = 0; i < 22; i++) {
    x[i] = random(width);
    y[i] = random(height);
  }
}

function draw() {
background(0);
for (var i = num-3; i > 0; i--) {
x[i] = x[i-2];
y[i] = y[i-2];
  }
x[0] = mouseX;
y[0] = mouseY;
for (var i = 0; i < num; i++) {
  ellipseMode(CENTER);
  fill(i * 4);
  ellipse(x[i], y[i], 10, 10);
  sparks_vel += sparks_acc
  sparks_acc += sparks_vel;
}
}

function mouseReleased() {
  
}
