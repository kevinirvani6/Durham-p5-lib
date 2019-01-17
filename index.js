//Declaring variables
var bubbles = [];
var pg;
var angle = 45;
var rSlider, gSlider, bSlider;

function setup() {

	//Creates a canvas with 1300 pixels of wide and 800 pixels of height
    createCanvas(1300, 800);

    //Creates a graphics using the draw(g) function. A rotated rectangle acting as a gun
    pg = createGraphics(70, 30);

    //Create an array of 50 bubble objects
    for (var i = 0; i < 50; i++) {
        bubbles[i] = new Bubble();
    }
}

//Draw function that employs each bubble with each iteration
function draw() {

	//Sets the background colour to light blue 
    background(0, 150, 150);

    //move and show each of these bubbles
    for (var i = 0; i < bubbles.length; i++) {
        bubbles[i].move();
        bubbles[i].show();
    }

    //create portal
    stroke(100, 220, 90);
    strokeWeight(4);
    noFill();
    ellipse(900, 500, 80, 250);

    //if Key is pressed, print location of a random bubble to the console
    if (keyIsPressed) {
        i = random(0, 50);
        j = ~~i;
        console.log(bubbles[j].xcoord);
    }

    //set the image graphic to a dark grey colour (gun)
    pg.background(51);

    //rotate the angle of the rectangle (gun) in the direction of the portal
    let c = cos(angle);
    rotate(c);
    image(pg, 180, 15)
}

//Add event listener to change the velocity of each bubble according to the value of the slider writtten in html
document.addEventListener("DOMContentLoaded", function() {

    var cc = document.getElementById("speed");

    function changeSpeed(event) {
        print('speed changed')
        let speed = document.getElementById("speed").value;
        
        for (var i = 0; i < bubbles.length; i++) {
            bubbles[i].movement = speed;
        }
    }

    cc.addEventListener("input", changeSpeed);


    var cf = document.getElementById("form");

    cf.addEventListener("submit", function(event) {
        event.preventDefault()
    });
});