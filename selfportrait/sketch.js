function setup() {
createCanvas (640, 460);
}
function draw() {
    background("white"); 
    noStroke();
    fill("saddlebrown");
    
    ellipse(125, 220, 300, 350) ;
    
    fill(180, 50, 250, 127)
    ellipse(150,200,50,100);
    ellipse(250,200,50,100);
    
    fill(200)   
    

    stroke("black");
    line(85,75,30,75);
    arc(150,200,50,100, 0, PI+QUARTER_PI, OPEN);
    arc(250,200,50,100, 0, PI+QUARTER_PI, OPEN);
    
    

}
