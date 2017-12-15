//global variables
var numSpaceships = 20;
var speed = 2;
var spaceShipX = [];
var spaceShipY = [];
var spaceShipSize = [];
var spaceShipColor = [];

function setup() {
	createCanvas(640, 360);
    background(0);
    noStroke();
    fill(255);
    
    //create 20 spaceships
    for (var i = 0; i < numSpaceships; i++){
        var x = random(0, width);
        spaceShipX.push(x);
        var y = random(0, height);
        spaceShipY.push(y);
        var s = random(50, 90);
        spaceShipSize.push(s);
        spaceShipColor.push(color(
            random(0, 255),
            random(0, 255),
            random(0, 255)
        ));    }
    
}

function draw() {
    background(0);
    for (var i = 0; i < numSpaceships; i++){
        fill(spaceShipColor [i]);
        ellipse(spaceShipX[i], spaceShipY[i],
    spaceShipSize[i]);
        spaceShipX[i] += spaceShipSpeed[i];
        if (spaceShipX[i] - spaceShipSize[i]/2 > width){
            spaceShipX[i] = -spaceShipSize[i]/2;
        }
        
    }
}

