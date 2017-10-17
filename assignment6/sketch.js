var sz = 200;
var x = 0;
function setup() {
	createCanvas(640, 360);
    fill(255);
    rectMode(CENTER);
    
  noStroke();
    textSize(50);
    textFont("Comic Sans MS");
}

function draw() {
    background(220, 20);
    fill(255);
    push();
    translate(width/4,height/2);
    rotate(frameCount * PI / 100);
    rect(x, 0, sz, sz);
    pop();
    
     push();
    translate(width/3/4,height/2);
    rotate(frameCount * PI / 100);
    rect(x, 0, sz, sz);
    pop();
    
    fill(0, 255, 255);
    translate(width/4,height/2);
    rotate(frameCount * PI / 100);

    
}
