
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper
var options
var ground
var kupathoti
var kupathoti1
var kupathoti2
var world
function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);
	
	
	engine = Engine.create();
	world = engine.world;
	ground = new Ground(600,height,1200,20)
	kupathoti=new Ground(345,230,20,50);
	kupathoti1=new Ground(390,230,70,10);
	kupathoti2=new Ground(430,230,20,50);
	options={
isStatic:false,
restitution:0.3,
friction:0.5,
density:1.2

	}
	//Create the Bodies Here.
	paper = Bodies.circle(100,100,50,options);
World.add (world,paper)
	
  
}


function draw() {
	Engine.update(engine)
  rectMode(CENTER);
  background(0);
  ellipse(paper.position.x,paper.position.y,50)

  kupathoti.display();
  kupathoti1.display();
  kupathoti2.display();
  drawSprites();
 
}

function keyPressed(){
	if (keyCode===UP_ARROW) {
		Matter.Body.applyForce(paper,paper.position,{x:85,y:-85})
	
	}






}

