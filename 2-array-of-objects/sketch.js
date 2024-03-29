
//create an empty array called balls

let balls = [];

function setup() {
  createCanvas(800, 400);

}

function draw(){
	background(220);

//	draw all the balls in that array
	for (let i = 0; i < balls.length; i++) {
	    balls[i].drawBall();
      balls[i].moveBall();
	  }
}

function keyPressed(){
  if(keyCode === LEFT_ARROW){ //every time you push a key, make a new ball from the ball class and add it to the balls array
  let  b = new Ball(100, 100,"blue");
  balls.push(b);
  console.log(balls);

}

else if(keyCode === RIGHT_ARROW) {
  let  b = new laser(100, 200,"red");
  balls.push(b);
  console.log(balls);
}
}

//ball class from which to create new balls with similar properties.
class Ball {

	constructor(x,y,color){ //every ball needs an x value and a y value
		    this.x = x;
    		this.y = y;
        this.color = color;

	}

	drawBall(){  // draw a ball on the screen at x,y
    		stroke(0);
    		fill(this.color);
		    ellipse(this.x,this.y,10,10);
	}

	moveBall(){ //update the location of the ball, so it moves across the screen
		this.x = this.x+2;
		this.y = this.y+.5;
	}


}

class laser {

	constructor(x,y,color){ //every ball needs an x value and a y value
		    this.x = x;
    		this.y = y;
        this.color = color;

	}

	drawBall(){  // draw a ball on the screen at x,y
    		fill(this.color);
		    rect(this.x,this.y,60,1);
	}

	moveBall(){ //update the location of the ball, so it moves across the screen
		this.x = this.x+2;
		this.y = this.y+.5;
	}


}
