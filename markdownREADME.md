# p5.Bubble
## Description
This is a class which acts as a blueprint for the bubble object. A bubble is a small circular ellipse that has no fill colour but has a small stroke. The class contains information about the movement of each of the 50 bubbles. Each of the bubbles are created in the the setup function. The stroke of each bubble contains a random gradient of the purple colour. The movement of each bubble goes in the general direction from top left to bottom right. 

If any of bubbles come into contact with the green oval shape (portal), it will relocate itself back to the gun and carry on moving. If any of the bubbles don't come into contact with the portal, it will carry on floating off the screen. The theme of this class is to represent a portal that teleports each bubble back to the gun if the bubble comes into contact with it.
# index.js
## Methods
Declaring an array which each of the 50 bubbles will be stored. Created a p5.renderer object, pg. A variable called angle that stores 45. This will be used to rotate the grey rectangle (gun). 
```
var bubbles = [];
var pg;
var angle = 45;
var rSlider;
```
Setup function to create a canvas, of width 1300 and height 800 pixels. The pg variable stores the graphics for the rectangle with coordinates (70, 30). A for loop to create a bubble object with each iteration between 0 and 49. 
```
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
```
Draw function to set the colour of the canvas to light blue. It also calls the move and show function for each bubble object using a for loop. The function draws an ellipse which acts as a portal for the bubble. If the bubble comes into contact with the portal, it will relocate itself back to its starting position at the gun. If a key is pressed, an x-coordinate of a random bubble will be printed to  the console. The colour of the renderer graphic is set to dark grey and is rotated by an angle of 45 degrees. 
```
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
```
# sketch.js

- **col1** - random value between 0 and 100. Deciding the green value of a bubble.

- **col2** - random value between 0 and 100. Deciding the blue value of a bubble.

-  **x** - the x-coordinate of the bubble.

- **y** - the y-coordinate of the bubble.

- **speed** - speed at which the bubble is moving.
- ---
The **constructor** in this class initializes the object, bubble with the fields col1, col2, x, y and speed. Initially, the value of col1 and col2 are random and speed is set to 1. As speed is changed through form controls, the movement of the bubble is multiplied by the speed, increasing its velocity. The x and y coordinate of the bubble is set to (200, 150) which is changed by the **move()** method.
```
    constructor() {
        this.col1 = random(0, 100);
        this.col2 = random(0, 100);
        this.x = 200;
        this.y = 150;
        this.speed = 1;
    }
```
----
The **move method** gradually moves the bubble from the top left of the screen to the bottom right by changing it's x and y coordinates constantly. It occasionally will go back 1 pixel and up 1 pixel to give the bubble effect. The rate at which the bubble moves is dependant on the value of speed which is changed by form controls. Once the new value of the x and y coordinate is calculated, the **draw()** method is called, to actually visibly sketch the bubble on the screen.

```
    move() {
        this.x = this.x + random(-1, 5 * this.speed);
        this.y = this.y + random(-1, 3 * this.speed);

    }
```
---
The **show method** draws an ellipse at coordinates (this.x, this.y) which was calculated by the move method. The G and B value for its colour is determined by the random value of col1 and col2, which is calculated as soon as the object is created. Both values remain the same throughout the program until the webpage is refreshed. If the bubble has gone passed the 900th pixel on the x axis and is between the 375th and 625th pixel on the y axis, it will relocate itself to (200, 150), its starting position.
```
    show() {
        stroke(100, this.col1, this.col2);
        strokeWeight(3);
        noFill();
        ellipse(this.x, this.y, 24, 24);
        if (this.x > 900 && this.y < 625 && this.y > 375) {
            this.x = 200;
            this.y = 150;
        }
    }
```
---
The **get** method returns the x-coordinate of the bubble that is being requested. 
```
    get xcoord() {
        return this.x;
    }
```
---
The **set** method changes the this.speed value based on the value that's passed into it. 
```
    set movement(speed) {
        if (speed > 0) {
            this.speed = speed;
        }
```
---
"Simple purple bubble" by Jason Bournehttp://www.openprocessing.org/sketch/651338Licensed under Creative Commons Attribution ShareAlikehttps://creativecommons.org/licenses/by-sa/3.0https://creativecommons.org/licenses/GPL/2.0/


---
Kevin Irvanipour
wpdf55
Hatfield College - Durham University

---

