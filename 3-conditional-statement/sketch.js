//create an empty array called balls
let logs = [];

//create a variable to hold your avatar
let me;



function setup() {
  createCanvas(500, 400);
  background(random(0,255), random(0,255), random(0,255));

  //make one avatar called me
  me = new Avatar(width/10, 300, 5);

}

function draw(){



  me.drawMe();
  me.moveMe();

  if (frameCount % 15 == 0) {
      let  b = new Log(500, 400, 15, random(-4,4), 97, 37, 19, false);
      logs.push(b);
      console.log(logs); //print the balls array to the console
    }

//	draw all the balls in that array
	for (let i = 0; i < logs.length; i++) {
	 	      logs[i].drawLog();
       	  logs[i].moveLog();
        	logs[i].bounceLog();
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
    		 rect(this.x,this.y,100,30);
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
class Log {

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
	drawLog(){
    	stroke(0);
      strokeWeight(2);
    	fill(this.r, this.g, this.b);
		  rect(this.x,this.y,100,30);
	}

	//update the location of the ball, so it moves across the screen
	moveLog(){
		this.x = this.x+ this.speed;
		this.y = this.y+this.yspeed;
	}

	//if the ball hits the person, change the speed value to negative (send it in the opposite direction)
  	bounceLog(){
    	 if (this.x >= me.x-15 && this.x <= me.x+15 && this.y > me.y-15 && this.y < me.y+15 && this.flipped == false){
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
