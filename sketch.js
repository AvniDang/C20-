var Rect1, movingRect;

function setup() {
  createCanvas(1200,800);
   Rect1 = createSprite(400,100,50,80);
   Rect1.shapeColor = "green";
   Rect1.debug = true;

movingRect = createSprite(400,800,80,30);
movingRect.shapeColor = "green";
movingRect.debug = true;

Rect1.velocityY = 5;
movingRect.velocityY = -5;

}

function draw() {
  background(0,0,0);  


if(movingRect.x - Rect1.x < Rect1.width/2 + movingRect.width/2
  && Rect1.x- movingRect.x  < Rect1.width/2 + movingRect.width/2 ){

    movingRect.velocityX = movingRect.velocityX * (-1);
    Rect1.velocityX = Rect1.velocityX * (-1);

}
if( movingRect.y - Rect1.y  < Rect1.height/2 + movingRect.height/2
  && Rect1.y - movingRect.y  < Rect1.height/2 + movingRect.height/2 ){
    movingRect.velocityY = movingRect.velocityY * (-1);
    Rect1.velocityY = Rect1.velocityY * (-1);

    
}

  drawSprites();
}