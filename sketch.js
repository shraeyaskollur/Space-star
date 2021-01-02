var theHawk
function setup() {
  createCanvas(windowWidth,windowHeight);
  theHawk = createSprite(100, 200, 50, 50);
}

function draw() {
  background(200,200,200);
  if(keyDown(UP_ARROW)){
theHawk.y= theHawk.y-5;
  }
  if(keyDown(DOWN_ARROW)){
    theHawk.y= theHawk.y+5;
      }
   Asteroids();   
  drawSprites();
}

function Asteroids(){
  if(frameCount%60===0){
    var asteroid1= createSprite(width-100,random(50,height-100));
    asteroid1.velocityX= -3;  
  }
  
}














