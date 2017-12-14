var sz = 70;
var x = 0;
function setup() {
	createCanvas(800, 800);
    fill(255);
    rectMode(CENTER);
    
  noStroke();
    textSize(60);
    textFont("san serif");
   
}

function draw() {
    background("black");
    fill("black");
    push();
    translate(width/2,height/2);
    rotate(frameCount * - PI / 100);
    text("Quann", 30, 50);
    pop();
    
     push();
    fill("maroon");
    translate(width/2,height/2);
    rotate(frameCount * PI / 100);
    ellipse(x, 0, sz, sz);
    pop();
    
    fill(0, 255, 255);
    translate(width/2,height/2);
    rotate(frameCount * PI / 100);
    
    strokeWeight(4);
    stroke("purple");
    fill("red");
    text("Alexander", 20, 50);
    

    
}
