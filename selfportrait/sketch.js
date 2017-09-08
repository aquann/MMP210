function setup() {
createCanvas (640, 460);
}

function draw() {
    
    var faceColor = color("saddlebrown");
    var eyelidColor = color(180, 50, 250, 127);
    var mouth = 
    background("white"); 
    noStroke();
    
    /*face color*/
    fill(faceColor); //color for the face
    ellipse(125, 220, 300, 350); // shape for the face
    
    // eyes
    fill(eyelidColor);
    
    ellipse(150,200,50,100);
    ellipse(250,200,50,100);
    
    fill(200)   
    stroke("black");
    line(85,75,30,75);
    
    arc(150,200,50,100, 0, PI+QUARTER_PI, OPEN);
    arc(250,200,50,100, 0, PI+QUARTER_PI, OPEN);

}

