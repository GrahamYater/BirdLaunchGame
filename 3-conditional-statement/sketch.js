//create an empty array called balls
let balls = [];

//create a variable to hold your avatar
let me;



function setup() {
  createCanvas(500, 400);


  //make one avatar called me
  me = new Avatar(30, 30, 5);

}

function draw(){
background("red");


  me.drawMe();
  me.moveMe();




}

//avatar class
class Avatar {

	constructor(x,y, speed){ //every avatar needs an x value, a y value, and a speed
		    this.x = x;
    		this.y = y;
        this.speed = speed;
	}

	drawMe(){  // draw the running person

        strokeWeight(0);
    		fill("green"), ("red"), ("Gray");
		    ellipse(this.x,this.y,20,20);
      }

	moveMe(){
    if (keyIsDown(DOWN_ARROW)) { //if you hold the up arrow, move up by speed
       this.y += this.speed;
    }
    if (keyIsDown(UP_ARROW)) {
      this.y -= this.speed;
    }
// this.y=this.y+.5
   this.y=this.y+.5
	}

  die(){

  }

}


//ball class from which to create new balls with similar properties.
class Ball {

	//every ball needs an x value, a y value, and a speed
	constructor(x,y, speed, yspeed, r, g, b, flipped){
		this.x = x;
    this.y = y;
    this.speed = speed;
    this.yspeed = yspeed;
    this.r = r;
    this.g = g;
    this.b = b;
    this.flipped =flipped;
	}

	// draw a ball on the screen at x,y
	drawBall(){
    	stroke(0);
      strokeWeight(2);
    	fill(this.r, this.g, this.b);
		  rect(this.x,this.y,10,20);
	}

	//update the location of the ball, so it moves across the screen
	moveBall(){
		this.x = this.x+ this.speed;
		this.y = this.y+this.yspeed;
	}

	//if the ball hits the person, change the speed value to negative (send it in the opposite direction)
  	bounceBall(){
    	 if (this.x >= me.x-75 && this.x <= me.x+75 && this.y > me.y-80 && this.y < me.y+80 && this.flipped == false){
      			this.speed = -this.speed;
            this.flipped = true
    		}
        else if(this.x < 3){
          this.speed *=-1
          this.flipped = false
        }
        else if(this.x > 500){
          this.speed = -this.speed
          this.flipped = false
        }
        else if(this.y < 0){
          this.yspeed = -this.yspeed
          this.flipped = false
        }
        else if(this.y > 380){
          this.yspeed = -this.yspeed
          this.flipped = false
        }
  	}

}
