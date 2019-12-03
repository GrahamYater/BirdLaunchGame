//create an empty array called balls
let logs = [];

//create a variable to hold your avatar
let me;



function setup() {


  //make one avatar called me
  me = new Avatar(width/10, 300, 5, true);

}

function draw(){
  createCanvas(500, 400);
  background("white");



  me.drawMe();
  me.moveMe();
  me.die();

  if (frameCount % 80 == 0) {
      let  b = new Log(500, random(0,290), random(4,6), random(-4,4), 97, 37, 19, false);
      logs.push(b);
    //  console.log(logs); //print the balls array to the console
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

	constructor(x,y, speed,alive){ //every avatar needs an x value, a y value, and a speed
		    this.x = x;
    		this.y = y;
        this.speed = speed;
        this.alive=alive;
	}

	drawMe(){  // draw the running person
    if(this.alive==true){
         noFill();

    }
    if(this.alive==false){
        fill("red");
    }
    		 rect(this.x,this.y,100,30);

	}

	moveMe(){
    if (keyIsDown(UP_ARROW)&&this.alive==true) { //if you hold the up arrow, move up by speed
       this.y -= this.speed;
    }

    if (keyIsDown(DOWN_ARROW)&&this.alive==true) { // if you hold the down arrow, move down by speed
        this.y += this.speed;
    }
    if (keyIsDown(LEFT_ARROW)&&this.alive==true) { //if you hold the up arrow, move up by speed
       this.x -= this.speed;
    }

    if (keyIsDown(RIGHT_ARROW)&&this.alive==true) { // if you hold the down arrow, move down by speed
        this.x += this.speed;
    }
    if (this.alive==false) {
      this.y=this.y+3
    }
	}

  die(){
    if (this.alive==false){
    text("game over",200,200);
  }
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
      strokeWeight(0);
    	fill(this.r, this.g, this.b);
		  rect(this.x,this.y,100,30);
      fill("yellow");
      triangle(this.x, this.y, this.x+25, this.y-55, this.x+56, this.y);
      triangle(this.x+25, this.y+10, this.x-25, this.y-75, this.x+76, this.y-25);

	}

	//update the location of the log, so it moves across the screen
	moveLog(){
		this.x = this.x+ this.speed;
		this.y = this.y+this.yspeed;
	}

	//if the ball hits the person, change the speed value to negative (send it in the opposite direction)
  	bounceLog(){
    	  if (this.x >= me.x-25 && this.x <= me.x+25 && this.y > me.y-75 && this.y < me.y+75 && this.flipped == false){
      			this.speed = -this.speed;
            this.flipped = true
            me.alive=false
            print("died")
    		}
        // else if(this.x < 3){
        //   this.speed *=-1
        //   this.flipped = false
        // }
        else if(this.x > 500){
          this.speed = -this.speed
          this.flipped = false
        }
        else if(this.y < 0){
         this.yspeed = -this.yspeed
          this.flipped = false
        }
        else if(this.y > 370){
          this.yspeed = -this.yspeed
          this.flipped = false

        }
  	}

}
