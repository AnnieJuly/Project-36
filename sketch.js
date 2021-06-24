var dog, dogHappy;
var food, foodstock;

function preload(){
  dogImg=loadImage("images/dogImg.png");
  dogImg1=loadImage("images/dogImg1.png"); 
}

function setup() {
	database= firebase.database();
  createCanvas(800, 700);
  dog = createSprite(250,250,10,10);
  dog = addImage("dogImg",dogImg);

  dog.scale=0.15;
 

  foodStock=database.ref('Food');
 foodStock.on("value",readStock);
 textSize(20); 
}


function draw() {  
 if(keyDown(UP_ARROW)){
    writeStock(food);
    dog.addImage(dogHappy);
}
  drawSprites();

}

    



