function setup() { 
createCanvas (840, 660); 
} 
  
function draw() { 
      
    background("lightblue"); 
     
     
    var textS = 40; 
     
    var textstroke 
     
    var facex = 140; 
     
    var facey = 220; 
     
    var faceColor = color("saddlebrown"); 
     
    var facewidth = 200; 
     
    var faceheight = 300; 
         
    var eyelidColor = color(180, 50, 250, 127); 
     
    var eyewidth = 30; 
     
    var righteye = (250,200,50,100); 
     
    var eyelidleft = (150,200,50,100, 0,  
    PI+QUARTER_PI, OPEN); 
     
    var eyehight = 100; 
     
    var eyelidright = (250,200,50,100, 0, PI+QUARTER_PI, OPEN); 
     
    var eyeposition = 200 
  
     
    textSize(textS); 
text("Alexander", 10, 30); 
text("Alexander", 11, 31); 
text("Alexander", 12, 32); 
text("Alexander", 13, 33); 
text("Alexander", 14, 34); 
text("Alexander", 15, 35); 
stroke("Alexander",14,80); 
fill("Alexander", 70, 40); 
  
   var w = 80;
         
     
    ellipse(420, 330, 200, 300); 
    
     ellipse(width/2, 330, w/2, 100); 
    //face color 
    noStroke(); 
    fill(faceColor); //color for the face 
    ellipse(facex, facey,facewidth, faceheight); // shape for the face 
     
    // eyes 
    fill(eyelidColor); 
     
    // lefteye 
    ellipse(150,eyeposition,eyewidth,eyehight); 
     
    //righteye 
    ellipse(250,eyeposition,eyewidth,eyehight); 
    
    //eyelidleft 
    arc(150,200,50,100, 0, PI+QUARTER_PI, OPEN); 
    
    //eyelidright 
    arc(250,200,50,100, 0, PI+QUARTER_PI, OPEN); 
  
} 
  
 

