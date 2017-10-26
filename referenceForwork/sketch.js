var leafh = 70;
var leafw = 70;
var r = 255; g= 255; b = 255;
function setup() { 
createCanvas (840, 420); 
} 
  
function draw() { 
      
    background("lightblue"); 
    
    //floor
    fill("grey");
    rect(0, 400, 840, 30);
    
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
    fill("yellow");
    rect(170, 200, 250, 200);
    
    //houseRoofmarker
    ellipse(170, 200, 10);
    ellipse(170+250, 200, 10);
    ellipse(170+126, 100, 10);
    
    //houseRoof
    triangle(170, 200,170+250, 200,170+126, 100);
    
    
    //houseWindow
    fill("brown");
    rect(330, 260, 60, 60);
    
    //doorLinemarker
    fill("black");
    ellipse(255, 298, 10);
    ellipse(255, 400, 10);
    ellipse(230, 350, 10);
    ellipse(280, 350, 10);
    
    
    //houseDoor
    fill("red");
    rect(230, 300, 50, 100);
    fill("black");
    line(255, 298, 255, 400);
    line(230, 350, 280, 350);
    
    //houseMill
    fill("yellow");
    rect(420, 100, 100, 300);
    
    //houseMillmarker
    ellipse(420,100,10);
    ellipse(520,100,10);
    ellipse(470, 50,10);
    
    //millRoof
    triangle(420, 100, 520, 100, 470, 50);
    
    
    
    
    //outHouse
    fill(yellow);
    rect(600, 320, 70, 80);
    
    
    
    
    
     
     
}