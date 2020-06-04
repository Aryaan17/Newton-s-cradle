var bob1, bob2, bob3, bob4, bob5;
var rope1, rope2, rope3, rope4, rope5 ,roof;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
function preload() {
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	
	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	//World.add(world, ground);
	 
	bob1 = new Bob(300, 400, 25);
	bob2 = new Bob(350, 400, 25);
	bob3 = new Bob(400, 400, 25 );
	bob4 = new Bob(450, 400, 25 );
	bob5 = new Bob(500, 400, 25);

	roof = new Roof(400, 200, 400, 30);

	rope1 = new Rope(bob1.body, roof.body, -100, 0);
	rope2 = new Rope(bob2.body, roof.body, -50, 0);
	rope3 = new Rope(bob3.body, roof.body, 0, 0);
	rope4 = new Rope(bob4.body, roof.body, 50, 0);
	rope5 = new Rope(bob5.body, roof.body, 100, 0);

	Engine.run(engine);

	console.log(bob5.body.position.y);
  
}


function draw() {
	Engine.update(engine);
	background("black");
  	rectMode(CENTER);
  	background(0);
	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();
	roof.display();
	bob2.display();
	bob4.display();
	bob3.display();
	bob1.display();
	bob5.display();



  	drawSprites();
}

function keyPressed() {
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bob1.body, bob1.body.position,{x:-50,y:-45});
	}
}



