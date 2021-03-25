const Engine = Matter.Engine;
const World = Matter.World; 
 const Bodies = Matter.Bodies;


function preload(){
    
}

var drops = []
var maxDrops = 100

function setup(){
   engine = Engine.create()
   world = engine.world
    createCanvas(400,700)
    if(frameCount % 150 === 0)
    { for(var i=0; i<maxDrops; i++){
     drops.push(new Drops(random(0,400), random(0,400))); } }
     umbrella = new Umbrella(200,500);


}

function draw(){
    Engine.update(engine)
    background(0)
    //displaying rain drops
     for(var i = 0; i<maxDrops; i++){
     drops[i].display();
      drops[i].updateY() }

      umbrella.display()

     
}   



