const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world , background , backgroundImage;




function setup(){
    var canvas = createCanvas(1200,400);

    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
   
   rock = new Rock(200,300,50,50)
box1 = new Box(300,315,100,150);
box2 = new Box(400,315,100,150);
box3 = new Box(500,315,100,150);
box4 = new Box(600,315,100,150);
  
    slingshot = new SlingShot(rock.body,{x:200, y:50});
}
function preload(){
  backgroundImage = loadImage("images/GamingBackground.png")
}

function draw(){
  background(backgroundImage);
    
    
    Engine.update(engine);
    //strokeWeight(4);
  box1.display();
  box2.display();
  box3.display();
  box4.display();
    ground.display();
 rock.display();
    //slingshot.display();    
}

function mouseDragged(){

        Matter.Body.setPosition(rock.body, {x: mouseX , y: mouseY});
    }


