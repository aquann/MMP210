
function setup() {
     createCanvas(600, 600);
     rectMode(CENTER);
} 
function draw() {
   var recW = 300;
   var recH = 300;
   var recRadi = 15;
   var str1 = "Alexander Quann";
   var str2 = "Is";
   var str3 = "TopConfidential";
   var str1x = 70;
   var str1y = 45;
   var str2x = 70;
   var str2y = 5;
   var str3x = 70;
   var str3y = 50;
   var instruction = "Press and See";
    
    background(150, 50);
    
    text(instruction, width/2, height/2);
   
    stroke("white");
    rect(mouseX, mouseY, recW, recH, recRadi);
   
   rect(mouseX, mouseY, recW - 50,recH - 50, recRadi);
   
   rect(mouseX, mouseY, recW - 100,recH - 100, recRadi);
   
   rect(mouseX, mouseY, recW - 150,recH - 150, recRadi);
 
   stroke("white");
   strokeWeight(3);
   textSize(19);
   text(str1, mouseX-str1x, mouseY-str1y);
   
   stroke("white");
   strokeWeight(3);
   textSize(20);
   text(str2, mouseX-str2x, mouseY+str2y);
   
   stroke("white");
   strokeWeight(3);
   textSize(20);
   text(str3, mouseX-str3x, mouseY+str3y);
    
}

function mousePressed(){
   
   fill(
       mouseX/2,  
       mouseX/4,
       mouseY/2,  
   )
}