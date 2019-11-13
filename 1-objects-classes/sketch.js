//create a variable to hold one ball
let b;
let anotherDog;
let anotherDog2
let cat

function setup() {
  createCanvas(800, 400);
  // b = new Ball(0, 100,"red"); //make a new ball from the Ball class and call it b.
  // anotherBall = new Ball(200,20,"green");
  b = new Dog(0, 100,"red",5);
  anotherDog = new Dog(200,20,"green",30);
  anotherDog2 = new Dog(300,30,"blue",15);
  cat = new Cat(250,0,"yellow",30)
}


function draw(){
	background(220);
    b.drawBall(); //draw the ball called b (go look in the Ball class for the drawBall function)
    b.moveBall(); //move the ball called b (go look in the Ball class for the moveBall function)
    anotherDog.drawBall();
    anotherDog.moveBall();
    anotherDog2.drawBall();
    anotherDog2.moveBall();
    cat.drawBall()
    cat.moveBall()

}


//ball class from which to create new balls with similar properties.
class Dog {

	constructor(x,y,color,diameter){ //every ball needs an x value and a y value
		    this.x = x;
    		this.y = y;
        this.color= color;
        this.diameter = diameter;
	}
	drawBall(){  // draw a ball on the screen at x,y
    		stroke(0);
    		fill(this.color);
		    ellipse(this.x,this.y,this.diameter,this.diameter);
	}
	moveBall(){ //update the location of the ball, so it moves across the screen
		this.x = this.x+2;
		this.y = this.y+.5;
	}
}

class Cat {

	constructor(x,y,color,diameter){ //every ball needs an x value and a y value
		    this.x = x;
    		this.y = y;
        this.color= color;
        this.diameter = diameter;
	}
	drawBall(){  // draw a ball on the screen at x,y
    		stroke(0);
    		fill(this.color);
		    rect(this.x,this.y,this.diameter,this.diameter);
	}
	moveBall(){ //update the location of the ball, so it moves across the screen
		this.x = this.x+2;
		this.y = this.y+.5;
	}
}
