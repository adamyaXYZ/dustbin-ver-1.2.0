const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var ground;

var PaperBall1;

var bin
var wall1,wall2,wall3,ground1
var opti = {
  isStatic:true,
}
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  
  bin = new Dustbin(100,110,1,1)

  ground1 = Bodies.rectangle(400,200,800,30,opti);
  ground = Bodies.rectangle(400,390,800,30,opti);
  wall1 = new wall(100,150,10,150);
  wall2 = new wall(170,200,10,100)
  World.add(world,ground1)
  World.add(world,ground)
  World.add(world,wall1)

  PaperBall1 = new PaperBallZ(10);
  
Engine.update(engine);

}

function draw() {
  Engine.update(engine);
  //console.log(wall1);
  background("blue");
  fill("green")
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,30)
  
  PaperBall1.display()

  bin.display();
  bounce();

}
function bounce () {
  if (keyWentDown(UP_ARROW)){
    Matter.Body.applyForce(PaperBall1.body,PaperBall1.body.position,{x:-5,y:-11})
  }
}
