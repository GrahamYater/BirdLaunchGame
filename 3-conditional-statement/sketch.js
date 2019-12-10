//create an empty array called balls
let balls = [];

//create a variable to hold your avatar
let me;



function setup() {
  createCanvas(500, 400);
  background(random(0,255), random(0,255), random(0,255));

  //make one avatar called me
  me = new Avatar(width/10, 300, 5);

}

function draw(){
<<<<<<< Updated upstream


=======
  createCanvas(850, 650);
  background("skyblue");
fill("green")
rect(0, 600, 950, 950);
text("Move With Up, Down, Left, Right, Arrows", 800,50);
>>>>>>> Stashed changes

  me.drawMe();
  me.moveMe();

  if (frameCount % 15 == 0) {
      let  b = new Ball(width, random(0,height), -3, random(-2,2), random(0,255), random(0,255), random(0,255), false);
      balls.push(b);
      console.log(balls); //print the balls array to the console
    }

//	draw all the balls in that array
	for (let i = 0; i < balls.length; i++) {
	 	      balls[i].drawBall();
       	  balls[i].moveBall();
        	balls[i].bounceBall();
	  }

}

//avatar class
class Avatar {

	constructor(x,y, speed){ //every avatar needs an x value, a y value, and a speed
		    this.x = x;
    		this.y = y;
        this.speed = speed;
	}

	drawMe(){  // draw the running person
    		stroke(random(0,255), random(0,255), random(0,255));
        strokeWeight(3);
    		fill(random(0,255), random(0,255), random(0,255));
		    ellipse(this.x,this.y,20,20);
        line(this.x,this.y, this.x, this.y+40);
        line(this.x, this.y+40, this.x-20, this.y+60);
        line(this.x, this.y+40, this.x+10, this.y+50);
        line(this.x+10, this.y+50, this.x+5, this.y+60);
        line(this.x, this.y+15, this.x-10, this.y+25);
        line(this.x-10, this.y+25, this.x+10, this.y+35);
	}

	moveMe(){
    if (keyIsDown(UP_ARROW)) { //if you hold the up arrow, move up by speed
       this.y -= this.speed;
    }

    if (keyIsDown(DOWN_ARROW)) { // if you hold the down arrow, move down by speed
        this.y += this.speed;
    }
    if (keyIsDown(LEFT_ARROW)) { //if you hold the up arrow, move up by speed
       this.x -= this.speed;
    }

    if (keyIsDown(RIGHT_ARROW)) { // if you hold the down arrow, move down by speed
        this.x += this.speed;
    }
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
