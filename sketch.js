class Bubble {

    //Constructor, intialising x and y coordinates, speed and a random value for the 'g' and 'b' values.
    constructor() {
        this.col1 = random(0, 100);
        this.col2 = random(0, 100);
        this.x = 200;
        this.y = 150;
        this.speed = 1;
    }

    //Move function to move the bubbles from top left to bottom right, in the direction of the portal.
    move() {
        this.x = this.x + random(-1, 5 * this.speed);
        this.y = this.y + random(-1, 3 * this.speed);

    }

    //Show function to actually display each bubble on the screen
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

    //get method to return the x-coordinate of bubble
    get xcoord() {
        return this.x;
    }

    //Set method to change the velocity of bubble based on slider value
    set movement(speed) {
        if (speed > 0) {
            this.speed = speed;
        }
    }
}