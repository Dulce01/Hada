var starImg,bgImg;
var star, starBody;
//crea la variable para el sprite del hada y fairyImg
var hada, fairyImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3")
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png")
}

function setup() {
	createCanvas(800, 750);
	hada = createSprite(200,490,20,20);
	hada.addAnimation("fairy", fairyImg);
	hada.play(fairyVoice);
	hada.scale = 0.3;
	

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	

	Engine.run(engine);

}


function draw() {
  background(bgImg);

 hada.velocityX =0;

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  
  if(star.y > 470 && starBody.position.y > 470){
	  Matter.Body.setStatic(starBody,true);
	}

	keyPressed();

  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}
	
	if(keyDown("left_arrow")){
		hada.velocityX = -3;
	}

	if(keyDown("right_arrow")){
		hada.velocityX = 3;
	}
	
}
