var astronaut
var bg , bath , brush  , eat , gym , move , sleep

function preload(){
  bg = loadImage("images/iss.png");
  sleep = loadAnimation("images/sleep.png");
  bath = loadAnimation("images/bath1.png","images/bath2.png");
  brush = loadAnimation("images/brush.png");
  
  eat = loadAnimation("images/eat1.png","images/eat2.png");
  gym = loadAnimation("images/gym1.png","images/gym2.png","images/gym11.png","images/gym12.png");
  move = loadAnimation("images/move1.png","images/move2.png");
}

function setup() {
  createCanvas(400, 400);
  astronaut = createSprite(300,230)
  atronaut.addAnimation("sleeping",sleep)
  astronaut.scale=0.1;
}

function draw() {
  background(220);
  
  edges=createEdgeSprites();
  astronaut.bounceOff(edges);
  
  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing", brush);
    astronaut.changeAnimation("brushing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  
  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gymming", gym);
    astronaut.changeAnimation("gymming");
    astronaut.y = 350;
    astronaut.x = 120;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  
  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("eating", eat);
    astronaut.changeAnimation("eating");
    astronaut.y = 350;
    astronaut.x = 150;
    astronaut.velocityX = 0.6;
    astronaut.velocityY = 0.6;
  }
  
  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("bathing", bath);
    astronaut.changeAnimation("bathing");
    astronaut.x = 300;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("m")){
    astronaut.addAnimation("moving", move);
    astronaut.changeAnimation("moving");
    astronaut.velocityX = 2;
    astronaut.velocityY = 2;
  }


  

  fill("white")
  textSize(25);
  text("Instructions:,20,35")
  textSize(20);
  text("Up Arrow = Brushing")
  text("Down Arrow = Gymming")
  text("Left Arrow = Eatig")
  text("Right Arrow = Bathing")
  text("m Arrow = Moving")

 drawSprites();
}







  