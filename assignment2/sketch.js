var x = 10;
var y = 10;
var xSpeed = 2;
var ySpeed = 2;
var r = 255; g= 255; b = 255;
function setup() { 
    createCanvas (640, 360);
    background(100);
    fill(255);
    //noStroke();
} 
  
function draw() { 
    //background(100);
    var sz = random(40, 60);
    ellipse(x, y, 100);
    
    var r = random(0,255);
    var g = random(0,255);
    var b = random(0,255);
    fill(r, g, b);
    
    var r = random(1, 10);
    
    x += xSpeed;
    y += ySpeed;
    if (x > width || x < 0) {
        xSpeed *= -1;
        
    }
      if(y > height || x < 0){
          ySpeed *= -1;
      }
    
} 
  
 

