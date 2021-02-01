const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine,world;


function setup(){
    var canvas = createCanvas(800,550);
    engine = Engine.create();
    world = engine.world;
    

    paper=new Paper(50,500,50);
    ground=new Ground(400,530,800,20);
    box1=new Dustbin(640,580,110,120);
    box2=new Dustbin(695,470,20,120);
    box3=new Dustbin(600,470,20,120);

}

function draw(){
    background(255);
    Engine.update(engine);

    box1.display();
    box2.display();
    box3.display(); 
    paper.display();
    ground.display();

}
function keyPressed(){ 
    if(keyCode===UP_ARROW){ 
        Matter.Body.applyForce(paper.body,paper.body.position,{x:50,y:-50})
     } 
    }