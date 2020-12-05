var wall,thickness;
var bullet,speed,weight;


function setup() {
createCanvas(1600,400);
bullet=createSprite(1500,200,60,10);
bullet.shapeColor=color(80,80,80); 
speed=random(223,321);  
weight=random(30,52); 

wall=createSprite(1200,200,thickness,height/2);
wall.shapeColor=color(80,80,80);
thickness=random(22,83); 
}

function draw() {
  background(0);  
  function hascollided(bullet,wall)
{
   bulletRightEdges=bullet.x +bullet.width;
   wallLeftEdges=wall.x;
   if (bulletRightEdges>=wallLeftEdges)
   {
     return true
   }
   return false;
}

if(hasCollided(bullet,wall))
{
  bullet.velocityX=0;
  var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness);
  if(damage>10)
{
  wall.shapecolor=Color(255,0,0);
}

if(damage<10)
{
  wall.shapecolor=Color(0,255,0);
}

}


drawSprites();   }