 
var r = g = b = 0;
function setup() {
	createCanvas(640, 360);
}

function draw() {
	background(r, g, b);
	
	/* draw lines for quadrants */
	strokeWeight(1);
	stroke("white");
	line(width/2, 0, width/2, height);
	line(0, height/2, width, height/2);

	/* if mouse is on right half, else left */
	if (mouseX > width/2) {
		r += 1;
	} else {
		r -= 1;
	}
	
	/* if mouse on left half, else right */
	if (mouseX < width/2) {
		g += 1;
	} else {
		g -= 1;
	}
	/* could i combine previous two 
	if/else statments? */

	/* if mouse is on bottom half of canvas
	else top half */
	if (mouseY > height/2) {
		b += 1;
	} else {
		b -= 1;
	}
}
mouseIsPressed system var