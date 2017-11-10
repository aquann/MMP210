
function setup() {
	createCanvas(640, 360);
    backgroung(200);
//    twoCircle(100, 200, 100, 100);
//    twoCircle(200, 100, 20, 200);
//    twoCircle(500, 200, 50, 20);
    noStroke();
    
    myWindow(10, 10, 20, 50, 2);
    myWindow(300, 100, 200, 300, 20);
    myWindow(350, 10, 200, 300, 20);
    
    
}

function myWindow(x, y, w, h, m){
    fill(0);
    rect(x, y, w, h);
    
//    window panes
    fill(255);
}


function twoCircles(x, y, d, s) {
        ellipse(x, y, s);
        ellipse(x + d, y, s);
}       
