
function setup() {
	createCanvas(640, 480);
//    background("black");
    rectMode(CENTER);
    
}

function draw(){
    var str1 = "Alexander"; 
    
    //horizontal rect
    var rectW = 435;
    var rectH = 115;
    
    //vertical rect
    var rect2W = 110;
    var rect2H = 400;
    
    //hiddenrect
    var rect3W = 105;
    var rect3H = 395; 
    
    //center
    var centerW = width/2;
    var centerY = height/2;
    
    //ellispeSize
    var circlesize = 300;
    var circlesize2 = 150;
    var circlesize3 = 100;
    
    //shift
    var movex = 150;
    var movex2 = 75;
    var movey = 100;
    var movey2 = 10;
    var movey3 = 5;
    
    //text
    var font = "script";
    var style = "bold";
    
    noStroke();
    fill("green");
    ellipse(centerW - movex, centerY, circlesize);
    
    noStroke();
    fill("blue");
    ellipse(centerW + movex, centerY, circlesize);
    
    noStroke();
    fill("red");
    ellipse(centerW, centerY - movey, circlesize);
    
    noStroke();
    fill("yellow");
    ellipse(centerW - movex2, centerY - movey2, circlesize2);
    
    noStroke();
    fill("magenta");
    ellipse(centerW + movex2, centerY - movey2, circlesize2);
    
    noStroke();
    fill("cyan");
    ellipse(centerW, centerY + movey, circlesize2);
    
    noStroke();
    fill("white");
    ellipse(centerW, centerY - movey3, circlesize3);
    
    

    fill("red");
    strokeWeight(3);
    textSize(80);
    textFont(font);
    textStyle(style);
    text(str1, centerW - 190, centerY);
    fill("black");
    text(str1, centerW - 186, centerY);
    
    
    
    
    
}
