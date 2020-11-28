const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;

var box1,ball,string;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(600,height,1200,20,ground_options);
    World.add(world,ground);

    //side1
    box11 = new Box(900,550)
    box12 = new Box(900,500)
    box13 = new Box(900,450)
    box14 = new Box(900,400)
    box15 = new Box(900,350)
    box16 = new Box(900,300)
    box17 = new Box(900,250)

    //side2
    box21 = new Box(950,550)
    box22 = new Box(950,500)
    box23 = new Box(950,450)
    box24 = new Box(950,400)
    box25 = new Box(950,350)
    box26 = new Box(950,300)
    box27 = new Box(950,250)

    //side3
    box31 = new Box(1000,550)
    box32 = new Box(1000,500)
    box33 = new Box(1000,450)
    box34 = new Box(1000,400)
    box35 = new Box(1000,350)
    box36 = new Box(1000,300)
    box37 = new Box(1000,250)

    ball = new Ball(400,300)
    string = new String(ball.body,{x:750,y:10})

    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,1200,20);

    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();

    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();
    box26.display();
    box27.display();

    box31.display();
    box32.display();
    box33.display();
    box34.display();
    box35.display();
    box36.display();
    box37.display();


    ball.display();
    string.display();
}
function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}