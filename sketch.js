var dog, happyDog;
var database;
var foodS, foodStock;
var dogHappy;
var dog_Img;

function preload()
{
  dog_Img = loadImage("../images/Dog.png");
  happyDog_Img = loadImage("../images/happydog.png");
  dogHappy_Img = loadImage("../images/happydog.png");
}
//car2_img = loadImage("../images/car2.png");
function setup() {
  createCanvas(500, 500);
  database = firebase.database();

  var dog = createSprite(250, 250, 10, 10);
  
  dog.addImage("image/Dog.png", dog_Img);
  


  foodStock = database.ref('Food');
  foodStock.on("value", readStock);
  
}


function draw() {  
  background(46, 139, 87);
  
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogHappy)
  }
  
  drawSprites();
  
  textSize(15);
  fill("yellow");
  stroke(10);
  text("Note: Press UP_ARROW key to feed milk to your dog.", 80,480);

}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  if(x <= 0){
    x = 0;
  }
  else{
    x = x-1;
  }
  
  database.ref('/').update({
    Food : x
  })
}





