
function bounceOff(movingRect,fixedRect){
    if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
      && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2){
        movingRect.velocityX=(-1)*movingRect.velocityX;
  fixedRect.velocityX=(-1)*fixedRect.velocityX;
}

else if (movingRect.y - fixedRect.y< fixedRect.height/2 + movingRect.height/2
    && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
      movingRect.velocityY=(-1)*movingRect.velocityY;
fixedRect.velocityY=(-1)*fixedRect.velocityY;
}



}
function touching(movingRect,fixedRect){
    
if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
    && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
    && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2) {
  movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red";
}
else{
    movingRect.shapeColor="green"
    fixedRect.shapeColor="green"
    
}


}
  