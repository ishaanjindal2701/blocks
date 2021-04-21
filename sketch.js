var fixedRect, movingRect,object3;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
 
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
 
  movingRect.velocityX=3
  fixedRect.velocityX=3
  
object3=createSprite(300,300,50,90);
object3.shapeColor="orange"

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 
  
    

   



   touching(movingRect,object3);
  bounceOff(movingRect,object3);
touching(movingRect,fixedRect);
  drawSprites();
}













