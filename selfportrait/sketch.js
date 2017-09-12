function setup() {
createCanvas (640, 460);
}

function draw() {
    
    var faceColor = color("saddlebrown");
    var eyelidColor = color(180, 50, 250, 127);
    var lefteye = (150,200,50,100);
    var righteye = (250,200,50,100);
    var eyelidright = (150,200,50,100, 0, PI+QUARTER_PI, OPEN);
    var eyelidleft = (250,200,50,100, 0, PI+QUARTER_PI, OPEN);
    background("white");
    
    //face color
    noStroke();
    fill(faceColor); //color for the face
    ellipse(125, 220, 300, 350); // shape for the face
    
    // eyes
    fill(eyelidColor);
    
    // lefteye
    ellipse(150,200,50,100);
    
    //righteye
    ellipse(250,200,50,100);
    
    fill(200)   
    stroke("black");
    line(50,75,30,75);
    
    fill(51);
rect(25, 25, 100, 100);
    
    //eyelidright
    arc(150,200,50,100, 0, PI+QUARTER_PI, OPEN);
   
    //eyelidleft
    arc(250,200,50,100, 0, PI+QUARTER_PI, OPEN);

}

