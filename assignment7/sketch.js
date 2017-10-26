var space;
var windw;
var windh;

function setup() {
	createCanvas(640, 360);
}

function draw() {
    
    windw = 50;
    windh = 50;

    background("maroon");
    let space = 150;
    for (let x = 50; x <= width; x += space) {
    
        //windowframe
        stroke("black");
        fill("black");
        rect(x, 50, 100, 200);

        //firstwindow
        noStroke();
        fill("white");
        rect(x, 50, windw, windh);

        //secondwindow
        //noStroke();
        fill("white");
        rect(x+windw, 100, windw, windh);

        //thirdwindow
        //noStroke();
        fill("white");
        rect(x, 150, windw, windh);

        //fourthwindow
        //noStroke();
        fill("white");
        rect(x + windw, 200, windw, windh);
        
        
            //decorations
        stroke("black");
        var dec = 5;
        for (let dx = 0; dx <= windw*2; dx += dec) {
            ellipse(x + dx, 45, 5, 10);
        }
        for (let dx = 0; dx <= windw*2; dx += dec) {
            ellipse(x + dx, 255, 5, 10);
        }
    }
    
    
    
   
    
//    ellipse(50, 45, 5, 10);
//    ellipse(55, 45, 5, 10);
//    ellipse(60, 45, 5, 10);
//    ellipse(65, 45, 5, 10);
//    ellipse(70, 45, 5, 10);
//    ellipse(75, 45, 5, 10);
//    ellipse(80, 45, 5, 10);
//    ellipse(85, 45, 5, 10);
//    ellipse(90, 45, 5, 10);
//    ellipse(95, 45, 5, 10);
//    ellipse(100, 45, 5, 10);
//    ellipse(105, 45, 5, 10);
//    ellipse(110, 45, 5, 10);
//    ellipse(115, 45, 5, 10);
//    ellipse(120, 45, 5, 10);
//    ellipse(125, 45, 5, 10);
//    ellipse(130, 45, 5, 10);
//    ellipse(135, 45, 5, 10);
//    ellipse(140, 45, 5, 10);
//    ellipse(145, 45, 5, 10);
//    ellipse(150, 45, 5, 10);
    

    

    
    
}
