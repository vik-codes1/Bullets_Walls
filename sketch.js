//creating the car and wall variables
var wall, thickness;

//creating the speed, weight and force variables
var bullet, weight, speed;

function setup() {
  //making the canvas
  createCanvas(1600,400); 
  
  //making the random variable numbers
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);

  //making the sprites
  bullet = createSprite(50,200,50,20);
  bullet.shapeColor ="white";
  bullet.velocityX = speed;

  wall = createSprite(1200,200,thickness, height/2);
  wall.shapeColor = color(80,80,80);

}

function draw() {
  //setting the bg color
  background(0);

  //checking the collision
  if(hasCollided(bullet, wall)){
    bullet.velocityX = 0;

    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);

    if(damage > 10){
        bullet.shapeColor = color(0,255,0);
    }
    
    if(damage < 10){
      bullet.shapeColor = color(255,0,0);
    }
  }

  //displaying the sprites
  drawSprites();
}