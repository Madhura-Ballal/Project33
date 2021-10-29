var bg
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world;
var snow=[]


function preload(){
bg=loadImage("snow3.jpg");
}

function setup() {
  createCanvas(800,400);

  engine=Engine.create();
  world=engine.world;

  
}


function draw() {
  background(bg); 
  
  Engine.update(engine);
 
  if (frameCount%5===0){
    var s=new Snow(random(0,800),30,30)
    snow.push(s)
  }

  for(var i=0;i<snow.length;i++){
    snow[i].display();
  }
}