
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var llamma;
var llammaImg;
var Mountains;
var cloud;

var ground;
var PLAY=1;
var END=0;
var gameState=PLAY;
var score=0;




function preload()
{
llammaImg=loadImage("llamma3.png")
MountainsImg=loadImage("Mountains.png");
cloudsImg= loadImage ("cloud.png");
candyImg = loadImage("candy.png")
}

function setup() {
	createCanvas(windowWidth, windowHeight);

	Mountains=createSprite(windowWidth/2, windowHeight/2, windowWidth, windowHeight);
	Mountains.addImage (MountainsImg);
	Mountains.scale=3
	//Mountains.velocityY = 2

	llamma=createSprite(windowWidth/10, windowHeight/4+300, 50, 50);
	llamma.addImage (llammaImg)
    llamma.scale=0.3;

	ground=createSprite (windowWidth/2, windowHeight/2+400, windowWidth, 10);
ground.visible=false;

	cloudsGroup=new Group()
	candyGroup= new Group()

	

	//Engine.run(engine);
  
}


function draw() {
 
  background(255);

  //if (Mountains.y>displayHeight/2+400) {

	//Mountains.y = displayHeight/2

 // }

if(gameState===PLAY){

  if (keyDown ("space")){

llamma.velocityY=-10;
//camera.position.y=llamma.y;


  }

  llamma.velocityY =  llamma.velocityY + 0.8;

  if (keyDown ("LEFT_ARROW")){

	// llamma.velocityX=-10;
	// camera.position.x=llamma.x;

	llamma.x = llamma.x-5
	
	
	  }

	  if (keyDown ("RIGHT_ARROW")){

		// llamma.velocityX=-10;
		// camera.position.x=llamma.x;
	
		llamma.x = llamma.x+5
		
		
		  }
		  llamma.collide(cloudsGroup)
if (llamma.collide(candyGroup)){


//llamma.velocityY=0;
//candy.remove();
candy.destroy();
//candyGroup.visible=false;
//gameState=END;
}

  createEdgeSprites();
 llamma.collide(ground)
spawnClouds();
}
else if (gameState===END){
//	llamma.velocityY=0;
//	candy.destroy();
}
 drawSprites();
 textSize (50);
 text ("score " + score, windowWidth-200, windowHeight-800)
}


function spawnClouds() {
	//write code here to spawn the clouds
	if (frameCount % 60 === 0) {
	   cloud = createSprite(600,120,40,10);
	  cloud.x = Math.round(random(windowWidth-windowWidth, windowWidth));
	  cloud.addImage(cloudsImg);
	  cloud.scale = 1.5;
	   cloud.velocityY = 3;
	  
	   //assign lifetime to the variable
	  cloud.lifetime = 200;
	  
	  //adjust the depth
	  cloud.depth = llamma.depth;
	  llamma.depth = llamma.depth + 1;
	  
	  //add each cloud to the group
	  cloudsGroup.add(cloud);

	  candy = createSprite(600,90,40,10);
	  candy.x = Math.round(random(windowWidth-windowWidth, windowWidth));
	  candy.addImage(candyImg)
	  candy.x = cloud.x
	  candy.scale = 0.1;
	   candy.velocityY = 3;
	  
	   //assign lifetime to the variable
	  candy.lifetime = 200;
	  candyGroup.add(candy)
     
	  


	//    Donut1 = createSprite(600,120,40,10);
	//   candy.x = Math.round(random(windowWidth-windowWidth, windowWidth));
	//   candy.addImage(candyImg)
	//   candy.x = cloud.x
	//   candy.scale = 1.5;
	//    candy.velocityY = 3;
	  
	//    //assign lifetime to the variable
	//   candy.lifetime = 200;
	//   candyGroup.add(candy)
	  
	  
	}
	




  }



