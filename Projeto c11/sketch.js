var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;


function preload(){
pathImg = loadImage("path.png");
boyImg = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
 createCanvas(400,400);
 
// Movendo o fundo 
path = createSprite (200,0)
path.addImage("asfalto",pathImg)
path.velocityY = 9
path.scale = 1.2



//Criando menino que corre 
boy = createSprite(200,300)
boy.addAnimation("corre",boyImg)
boy.scale = 0.1

// Criando Boundary (Limite) esquerdo  
leftBoundary=createSprite(10,0,10,800);
leftBoundary.visible = false;


//Crie Boundary direito 
rightBoundary=createSprite(390,0,10,800);
rightBoundary.visible = false;
}


function draw() {
background(0);
path.velocityY = 9;
// Menino se movendo no eixo X com o mouse
boy.x = World.mouseX
edges= createEdgeSprites();
boy.collide(edges[3]);



 //Reiniciar o fundo
 if(path.y > 210) {
    path.y = 0
 }



 drawSprites();

 }




