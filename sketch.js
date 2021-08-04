var path,pathImg;
var Character,Character_running;
var boundary1,boundary2;
function preload(){
  //pre-load images
  Character_running = loadAnimation("Runner-1.png","Runner-2.png")
pathImg = loadImage("path.png")
}

function setup(){
  createCanvas(400,400);
 path=createSprite(200,200);
 path.addImage(pathImg);
 path.velocityY = 20;
 path.scale=1.2;

 boundary1 = createSprite(30,200,30,400);
 boundary2 = createSprite(370,200,30,400);
boundary1.visible = false;
boundary2.visible = false;
Character = createSprite(200,300);
Character.addAnimation("running",Character_running);
Character.scale = 0.1;


}

function draw() {
  background(0);
if(path.y > 400){
  path.y = height/4
}
Character.x = mouseX;
Character.collide(boundary1);
Character.collide(boundary2);
drawSprites();
}
