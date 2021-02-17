var fixed,moving;
function setup() {
  createCanvas(1200,800);
  fixed = createSprite(200,200,50,80);
  fixed.shapeColor = "Green"
  moving = createSprite(400,200,80,30);
  moving.shapeColor = "Red"
}
function draw() {
  background(0,0,0);
  moving.x = World.mouseX
  moving.y = World.mouseY
  if(moving.x-fixed.x < fixed.width/2+moving.width/2
     && fixed.x-moving.x < fixed.width/2+moving.width/2) {
    moving.shapeColor = "Red"
    fixed.shapeColor = "Blue"
  }
  else{
    moving.shapeColor = "Yellow"
    fixed.shapeColor = "Orange" 
  }
  drawSprites();
}