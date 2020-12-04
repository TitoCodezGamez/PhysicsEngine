const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;

var engine, world;
var ball, ground;
function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  var ballOptions = {
    restitution : 0.7
  }

  var options = {
    isStatic : true
    
  }

  ground = Bodies.rectangle(200,390,400,20,options);
  World.add(world, ground);

  ball = Bodies.circle(200, 100,20,ballOptions);
  World.add(world, ball);

  console.log(ball);
}

function draw() {
  background(0);  
  
  Engine.update(engine);

  //ball
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);

  //ground
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);

  
  drawSprites();
}
