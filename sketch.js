const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;


var engine, world;
var box1 , box2 , box3 , box4 , box5 , box6 , box7 , box8 , box9 , box10 , box11 , box12 , box13 , box14 ; 
var ball, rope

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2,750,width, 20);

  box1 = new Box(125 , 215 , 100 , 100);
  box2 = new Box(125 , 215 , 100 , 100);
  box3 = new Box(125 , 215 , 100 , 100);
  box4 = new Box(125 , 215 , 100 , 100);
  box5 = new Box(125 , 215 , 100 , 100);
  box6 = new Box(125 , 215 , 100 , 100);
  box6 = new Box(125 , 215 , 100 , 100);
  box7 = new Box(125 , 215 , 100 , 100);
  box8 = new Box(125 , 215 , 100 , 100);
  box9 = new Box(125 , 215 , 100 , 100);
  box10 = new Box(125 ,215 , 100 , 100);
  box11 = new Box(125 , 215 , 100 , 100);
  box12 = new Box(125 , 215 , 100 , 100);
  box13 = new Box(125 , 215 , 100 , 100);
  box14= new Box(125 , 215 , 100 , 100);
  ball = new Ball(200, 215 , 80, 80);
  rope = new Rope(ball.body, { x: 500, y: 50 });

}

function draw() {
  background(180);
  Engine.update(engine);
  ground.display();
  
  

  ball.display();
  rope.show();
  box1.display();
  box2.display();
  box3.display(); 
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();

}


function mouseDragged() {
  Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY });
}


