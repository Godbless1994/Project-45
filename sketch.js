//const Engine = Matter.Engine;
//const World = Matter.World;
//const Bodies = Matter.Bodies;
//const Body = Matter.Body;
 //var jumpingImg;
 var runnerImg;
 var player;
 var bg, bgImg;
 var enemy, enemyImg;
 var lazer, lazerImg;
 function preload(){
   runnerImg= loadAnimation("1.png","2.png","3.png","4.png","5.png","6.png","7.png","8.png","9.png");
   bgImg = loadImage("bg.jpg");
   enemyImg = loadImage("enemy.png");
   lazerImg = loadImage("lazer.png");
 }

function setup() {
  createCanvas(1200,1200);
   bg=createSprite(100,300,1000,700);
   bg.addImage(bgImg);
   bg.scale=4;

   player = createSprite(100,700,30,50);
   player.addAnimation("runner",runnerImg);
   player.scale=1;
  //engine = Engine.create();
  //world = engine.world;
  invisibleGround=createSprite(100,790,2200,20);
  invisibleGround.visible=false;

  
}


function draw() 
{
  background(0);
  //Engine.update(engine);
  bg.velocityX=-3;
  if(bg.x<0){
    bg.x=bg.width/2;
  }
 spawnEnemy();
 spawnLazer();

  player.collide(invisibleGround);
  drawSprites();
}

function spawnEnemy(){
  if(frameCount%200===0){
   enemy = createSprite(1200,720,50,50);
   enemy.addImage(enemyImg);
   enemy.velocityX=-3;
   enemy.scale=0.5;
  }
}
function spawnLazer(){
  if(frameCount%60===0){
  lazer = createSprite(900,500,40,20);
  lazer.addImage(lazerImg);
  lazer.scale=0.5;
  lazer.x=1200;
  //lazer.x=enemy.x;
  //lazer.velocityX=-5;
}
}