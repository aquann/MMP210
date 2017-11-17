 var faceWidth;
function setup() { 
createCanvas (640 , 360); 
    rectMode(CENTER);
} 
  
function draw() { 
      
   faceWidth = 150;
    
    ellipse();
    
    //face
    fill('#FFFB58');
    noStroke();
    ellipse(width/2, height/2 + 50,faceWidth);
    
    //leftEar
    push();
    ellipse(width/2 - 80,height/2, 120, 150);
    translate(width/2, height/2);
    rotate(PI/3);
    pop();
  
     //rightEar
    push();
    ellipse(width/2 + 80,height/2, 120, 150);
    translate(width/2, height/2);
    rotate(PI/3);
    pop();
    
    //leftEye
    fill('black');
    arc(width/2 - 30, height/2 + 20, 30, 80, 0, PI+QUARTER_PI, OPEN);
    
    //rightEye
     fill('black');
    arc(width/2 + 30, height/2 + 20, 30, 80,0, PI+QUARTER_PI, OPEN);
    
    //mouth
      fill('black');
    arc(width/2, height/2 + 80, 30, 80,0, PI+QUARTER_PI , OPEN);
    
}
  
