var leafh = 70;
var leafw = 70;
var r = 255; g= 255; b = 255;
function setup() { 
createCanvas (840, 420); 
} 
  
function draw() { 
      
    background("lightblue"); 
    
    //floor
    rect(0, 400, 840, 30);
    
    //treeleafs
    ellipse(70, 300, leafw, leafh);
    ellipse(100, 250, leafw, leafh);
    ellipse(130, 300, leafw, leafh);
     
    //treebase
    rect(95, 220, 10, 400);
    
    //house
    fill(5, 89, 200);
    rect(170, 200, 250, 300);
    
    //housemill
    rect(420, 100, 100, 300);
    
    
    
    
    
     
     
}