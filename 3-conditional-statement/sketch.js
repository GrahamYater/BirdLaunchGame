//create an empty array called balls
let logs = [];

//create a variable to hold your avatar
let me;



function setup() {


  //make one avatar called me
  me = new Avatar(width/10, 30, 8, true);

}

function draw(){

  createCanvas(850, 650);
  background("skyblue");
fill("green")
rect(0, 600, 950, 950);
let s = 'Move With Up, Down, Left, Right Arrows        AVOID THE STARS';
fill("black");
text(s, 10, 10, 100, 180);


  me.drawMe();
  me.moveMe();
  me.die();

  if (frameCount % 50 == 0) {
      let  b = new Log(850, random(0,620), random(4,6), random(-4,4), 97, 37, 19, false);
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

let BirdSprite;

function preload() {
    BirdSprite = loadImage('BirdSprite.png');
}
//avatar class
class Avatar {

	constructor(x,y, speed,alive){ //every avatar needs an x value, a y value, and a speed
		    this.x = x;
    		this.y = y;
        this.speed = speed;
        this.alive=alive;
	}

	drawMe(){  // draw the bird
    if(this.alive==true){
         noFill();
    }
    if(this.alive==false){
        fill("red");
    }
    		 image(BirdSprite, this.x, this.y);

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
    if(this.y > 410){
      this.y=410
    }
    if(this.y < 0){
      this.y=0
    }
    if(this.x > 695){
      this.x=695
    }
    if(this.x < 0){
      this.x=0
    }
    this.y=this.y+1
	}


  die(){
    if (this.alive==false){
    text("game over",400,300);
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
      fill("yellow");
      triangle(this.x, this.y, this.x+25, this.y-55, this.x+56, this.y);
      triangle(this.x+30, this.y+10, this.x-5, this.y-35, this.x+60, this.y-35);

	}

	//update the location of the log, so it moves across the screen
	moveLog(){
		this.x = this.x+ this.speed;
		this.y = this.y+this.yspeed;
	}

	//if the ball hits the person, change the speed value to negative (send it in the opposite direction)
  	bounceLog(){
    	  if (this.x >= me.x-25 && this.x <= me.x+120 && this.y > me.y-1 && this.y < me.y+205 && this.flipped == false){
      			this.speed = -this.speed;
            this.flipped = true
            me.alive=false
            print("died")
    		}
        // else if(this.x < 3){
        //   this.speed *=-1
        //   this.flipped = false
        // }
        else if(this.x > 850){
          this.speed = -this.speed
          this.flipped = false
        }
        else if(this.y < 30){
         this.yspeed = -this.yspeed
          this.flipped = false
        }
        else if(this.y > 590){
          this.yspeed = -this.yspeed
          this.flipped = false
        }
}

}
