
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var trash;
var dustbin1,dustbin2,dustbin3,dustbinImage,dustbin;
var ground;

function preload(){
	dustbinImage = loadImage("dustbin.png");
}

function setup() {
	createCanvas(1350, 600);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(675,500,1350,25);

	trash = new Paper(200,200,PI/2);
	
	dustbin1 = new Dustbin(1200,478,200,20);
	dustbin2 = new Dustbin(1310,438,20,100);
	dustbin3 = new Dustbin(1100,438,20,100);

	dustbin = createSprite(1200,380,20,20);
	dustbin.addImage(dustbinImage);
	dustbin.scale = 0.6;

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();
  
  trash.display();

  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

  keyPressed();
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW) {
		Matter.Body.appyForce(trash.body,trash.body.position,{x:85,y:-85});
	}
}