
function setup() {
	createCanvas(640, 480);
//    background("black");
    
}

function draw(){
    var str1 = "Alexander"; 
    
    //horizontal rect
    var rectW = 435;
    var rectH = 115;
    
    //vertical rect
    var rect2W = 110;
    var rect2H = 400;
    
    //hidden
    var rect3W = 105;
    var rect3H = 395; 
    
    var centerW = width/2;
    var centerY = height/2;
    
    
    rectMode(CENTER);
    stroke("red");
    rect(centerW, centerY, 110, 400);
    
    fill("black");
    //noStroke();
    rectMode(CENTER);
    rect(centerW, centerY - 23, rectW, rectH);
    
    noStroke();
    rect(centerW, centerY, rect3W, rect3H);
    
    fill("red");
    strokeWeight(3);
    textSize(80);
    textFont("cursive");
    textStyle("italic")
    text(str1, width/2 - 190, height/2);
    fill("black");
    text(str1, width/2 - 186, height/2);
    
    
}
