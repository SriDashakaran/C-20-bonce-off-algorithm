var movingRect;
var fixedRect;


function setup() {
  createCanvas(400,400);
  movingRect = createSprite(300, 200, 50, 50);
  movingRect.shapeColor = "red";
  movingRect.velocityX=-1;
  fixedRect = createSprite(200, 200, 50, 50);
  fixedRect.shapeColor = "red";
  fixedRect.velocityX=1;
}

function draw() {
  background(255,255,255);  
 // movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;
  if(
    (movingRect.x - fixedRect.x<movingRect.width/2+fixedRect.width/2)
    &&(fixedRect.x - movingRect.x<movingRect.width/2+fixedRect.width/2)
    
  ){
    //movingRect.shapeColor = "green"
//fixedRect.shapeColor = "green"
movingRect.velocityX = movingRect.velocityX *(-1);
fixedRect.velocityX = fixedRect.velocityX *(-1);
}
if(
   (movingRect.y - fixedRect.y<movingRect.height/2+fixedRect.height/2)
  &&(fixedRect.y - movingRect.y<movingRect.height/2+fixedRect.height/2)
  
){
  //movingRect.shapeColor = "green"
//fixedRect.shapeColor = "green"
movingRect.velocityY = movingRect.velocityY *(-1);
fixedRect.velocityY = fixedRect.velocityY *(-1);
}
//else{
  //movingRect.shapeColor = "red"
  //fixedRect.shapeColor = "red"

//}



  drawSprites();
}