var dog, happyDog, database, foodS, foodStock,dogimg,doghappyimg

function preload(){
dogimg = loadImage("images/dogImg.png")
doghappyimg = loadImage("images/dogImg1.png")
}



function setup() {
	createCanvas(800, 700);
  database = firebase.database()
  dog = createSprite(400,350,50,50)
  dog.addImage(dogimg)
  dog.scale = 0.2
  foodStock = database.ref("food")
  foodStock.on("value",readStock)  

  
}


function draw() {  

  background("green")

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS)
    dog.addImage(doghappyimg)
  }

  drawSprites();
  text("gesiho;hgs;GEHSI;gsssssssssssssssssssshewgj'gwklrgklgskl"+foodS,500,400)

  
}

function readStock(data){
  foodS = data.val()
  
}
function writeStock(greninja){
  if(greninja<=0){
    greninja = 0
  }

  else{
    greninja=greninja-1

  }
  database.ref('/').update({
    food:greninja
  })

}



