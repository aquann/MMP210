
var r = 255; g= 255; b = 255;
function setup() { 
createCanvas (840, 420); 
} 
  
function draw() { 
    var rectFlX = 0;
    var rectFlY = 400;
    var rectFlW = 840;
    var rectFlH = 30;
    var leafh = 70;
    var leafw = 70;
      
    background("lightblue"); 
    
    //floor
    fill("grey");
    rect(rectFlX, rectFlY, rectFlW, rectFlH);
    
    //treeLeafs
    noStroke();
    fill("green");
    ellipse(70, 300, leafw, leafh);
    ellipse(100, 250, leafw, leafh);
    ellipse(130, 300, leafw, leafh);
     
    //treeBase
    noStroke();
    fill("brown");
    rect(95, 318, 10, 83);
    
    //house
    stroke(0);
    fill("tan");
    rect(170, 200, 250, 200);
    
    //houseRoof
    fill("brown");
    triangle(170, 200,170+250, 200,170+126, 100);
    
    //houseWindow
    fill("lightblue");
    rect(330, 260, 60, 60);
    line(360, 260, 360, 320);
    line(330, 290, 390, 290);
    
    
    //houseDoor
    fill("red");
    rect(230, 300, 50, 100);
    fill("black");
    line(255, 300, 255, 400);
    line(230, 350, 280, 350);
    ellipse(277, 350, 7);
    
    //houseMill
    fill("lightgrey");
    rect(420, 100, 100, 300);
    
    //millRoof
    triangle(420, 100, 520, 100, 470, 50);
   
}