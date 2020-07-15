var dog, happyDog;
var database;
var foodS, foodStock;
var dogHappy;
var dog_Img;

function preload()
{
  dog = loadImage("../images/Dog.png");
  happyDog = loadImage("../images/happydog.png");
  dogHappy = loadImage("../images/happydog.png");
}
//car2_img = loadImage("../images/car2.png");
function setup() {
  createCanvas(500, 500);
  database = firebase.database();

  var dog = createSprite(250,250,30,30);
  dog.addImage("image/Dog.png", dog_Img)

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
  //add styles here

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





/*

car1 = createSprite(100,200);
car1.addImage("car1",car1_img);
*/