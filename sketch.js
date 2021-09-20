function preload() {
  //load game assets
 
}
var player;

function setup() {
  createCanvas(600,600);
  player=createSprite(40,550,30,30);
 
}

function draw() {
  background("black");  
  stroke("red");
  noFill();
  ellipse(100,350,40,30);
  player.x=mouseX;
  player.y=mouseY;
  generateWorms();

  for(var i=0; i>(snake grou))
}
