function setup() {
	createCanvas(640, 360);
}

function draw() {
    var w = width/2;
    var h = height/2;
    var w1 = width;
    var h1 = height;
    var str1 = "What has";
    var str1X = 155;
    var str1Y = 170;
    var str2 = "hands but";
    var str2X = 320;
    var str2Y = 170;
    var str3 = "can not";
    var str3X = 190;
    var str3Y = 210;
    var str4 = "clap?";
    var str4X = 323; 
    var str4Y = 210;
    var strSize = 20;
	background("maroon");
	
	// Quadrant Lines
	strokeWeight(11);
	stroke("black");
	line(w, 0, w, height);
	line(0, h, width, h);

	
    
	// Quadrant 4
    if (mouseX > width/2 && mouseY > h) {
        fill("yellow");
		rect(w, h, w1, h1);
        fill("red");
        noStroke();
        text(str4, str4X, str4Y);
	}
    // Quadrant 3
    else if (mouseX < w && mouseY > h) {
        fill("blue");
		rect(0, h, w, h1);
        fill("orange");
        text(str3, str3X, str3Y);
	}
    // Quadrant 1
    else if (mouseX > w && mouseY < h) {
        fill("silver");
		rect(w, 0, w1, h);
        textSize(strSize);
        fill("pink");
        text(str2, str2X, str2Y);
	} 
    // Quadrant 2
    else {
        fill("green");
		rect(0, 0, w, h);
        textSize(strSize);
        fill("brown");
        noStroke();
		text(str1, str1X, str1Y);
	}
}
