var moving,fixed;



function setup() {


  createCanvas(1200,800);
  fixed =createSprite(400, 100, 50, 80);
  moving=createSprite(400,800,80,20);
  
  moving.shapeColor="green";
  fixed.shapeColor="green";
moving.velocityY=-3;
fixed.velocityY=3;
}

function draw() {
  background(255,255,255);  

if(moving.x-fixed.x< moving.width/2+fixed.width/2 && 
  fixed.x-moving.x<moving.width/2+fixed.width/2 ){
moving.velocityX=moving.velocityX*(-1);
fixed.velocityX=fixed.velocityX*(-1);


  }

  if(moving.y-fixed.y< moving.height/2+fixed.height/2 && 
  fixed.y-moving.y<moving.height/2+fixed.height/2 ){
    moving.velocityY=moving.velocityY*(-1);
    fixed.velocityY=fixed.velocityY*(-1);
}


  drawSprites();
}


