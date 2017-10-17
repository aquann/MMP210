function setup() { 
createCanvas (640, 360); 
background(200);
fill(255);


 var space = 100;
    for (var x = 50; x < width; x += space) {
        ellipse(x,height/2, 40);
    }
    
    var columnSize = width/6;
    var rowSize = height/6;
    for (var x = 0; x <= width; x += columnSize); {
         line(x, 0, x, height);
         ellipse(x, y, 50);
        for (var y = 0; y <= height; y += rowSize) {
            line(0, y, width, y);
            fill(x, y, y-x);
            ellipse(x, y, x/10);
            rect(x, y/10, y/10,);
        
    
        }
    
        }
}

