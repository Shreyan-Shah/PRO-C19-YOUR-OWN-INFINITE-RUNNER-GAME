var bgImg,bg
var catImg,cat
var coinImg,coin
var enemiesImg,enemies
var ground

function preload(){
bgImg = loadImage("images/scratch_background.png");
catImg = loadImage("images/scratch_cat.png");
coinImg = loadImage("images/scratch_coin.png");
enemiesImg = loadImage("images/scratch_enemies.png")
}

function setup() {
 createCanvas(windowWidth,windowHeight);
 bg = createSprite(width/2,height/2,windowWidth,windowHeight);
 bg.addImage("bgImg",bgImg);
 bg.scale=2.3;

 cat = createSprite(400,810,20,30);
 cat.addImage("catImg",catImg);
 cat.scale = 0.5

 ground = createSprite(920,920,2300,100);
 ground.shapeColor = "white";
}

function draw() {
background("black");

if (gameState===PLAY){
    ground.velocityX = -(6 + 3*score/100);
  }
 drawSprites()
}