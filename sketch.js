var START = 0
var PLAY = 1;
var END = 2;
var WIN = 3;
var FREEZE = 4;
var gameState = START;

var road;
var mason_running, mason_reloading;
var bullet;
var enemyGroup;
var enemy1, enemy2, enemy3;
var bg;
var tank1, tank2, tank3, tank4, tank5;
var inst;
var aim;
var bar1, bar2, bar3;
var edge1, edge2, edge3, edge4;
var score;
var ukrFlag, rusFlag;
var general;
var box1, box2;
var exp;
var wire1, wire2, wire3, wire4, wire5;
var tent1, tent2;
var ledge, ledge2;
var sidebar;
var pause;
var bt1;
var bt2;

function preload() {
masonRun = loadAnimation("a.png");
masonRel = loadAnimation("b.png","c.png","d.png","e.png","f.png");
bullet1 = loadAnimation("bullet.png");

enemyA = loadAnimation("enemy.png");
enemyB = loadAnimation("enemy2.png");
enemyC = loadAnimation("enemy3.png");

road1 = loadAnimation("road.jpeg");
bg1 = loadAnimation("wl.webp");

bta = loadAnimation("bt1.png");
btb = loadAnimation("bt2.png")
pause1 = loadAnimation("pause.png")

tanka = loadAnimation("tank1.png");
tankb = loadAnimation("tank2.png");

inst1 = loadAnimation("inst.png");
aim1 = loadAnimation("aim.png");

uflag = loadAnimation("f1.png","f2.png");
rflag = loadAnimation("rf.png");

ugeneral = loadAnimation("general1.png");

boxa = loadAnimation("box1.png");
sidebar1 = loadAnimation("sidebar.png");

wirea = loadAnimation("bw.png");
tenta = loadAnimation("tent.png");

ledge1 = loadAnimation("ledge.png");
}

function setup() {
  createCanvas(1800,700);
  
  bg = createSprite(700,400,1500,400);
  bg.addAnimation("bg",bg1);
  bg.scale = 2.5;
 
  road = createSprite(700,400,400,400);
  road.addAnimation("road",road1);
  road.scale = 2.51;

  bar1 = createSprite(692,400,1600,4);
  bar2 = createSprite(692,500,1600,4);
  bar3 = createSprite(692,600,1600,4);

  tent1 = createSprite(1250,60,400,400);
  tent1.addAnimation("tent1",tenta);
  tent1.scale = 1.7;

  sidebar = createSprite(1578,349,100,1000);
  sidebar.addAnimation("sidebar",sidebar1);
  sidebar.scale = 2.2;

  bt1 = createSprite(1578,50,100,1000);
  bt1.addAnimation("bt1",bta);
  bt1.scale = 0.3;

  bt2 = createSprite(1630,50,100,1000);
  bt2.addAnimation("bt2",btb);
  bt2.scale = 0.09;

  ledge = createSprite(300,850,200,200);
  ledge.addAnimation("ledge",ledge1);
  ledge.scale = 3;

  ledge2 = createSprite(950,850,200,200);
  ledge2.addAnimation("ledge2",ledge1);
  ledge2.scale = 3;

  bar1.visible = false;
  bar2.visible = false;
  bar3.visible = false;

  ukrFlag = createSprite(200,400,400,400)
  ukrFlag.addAnimation("ukrFlag", uflag);
  ukrFlag.scale = 0.3;

  rusFlag = createSprite(900,50,400,400)
  rusFlag.addAnimation("rusFlag", rflag);
  rusFlag.scale = 0.1;

  wire1 = createSprite(550,400,400,400);
  wire1.addAnimation("wire1",wirea);
  wire1.scale = 0.5;

  wire2 = createSprite(650,350,400,400);
  wire2.addAnimation("wire2",wirea);
  wire2.scale = 0.5;

  wire3 = createSprite(750,300,400,400);
  wire3.addAnimation("wire3",wirea);
  wire3.scale = 0.5;

  wire4 = createSprite(850,250,400,400);
  wire4.addAnimation("wire4",wirea);
  wire4.scale = 0.5;

  wire5 = createSprite(950,200,400,400);
  wire5.addAnimation("wire5",wirea);
  wire5.scale = 0.5;

  tank1 = createSprite(200,160,400,400);
  tank1.addAnimation("tank1",tanka);
  tank1.scale = 0.5;

  tank2 = createSprite(400,100,400,400);
  tank2.addAnimation("tank2",tanka);
  tank2.scale = 0.5;

  tank4 = createSprite(650,140,400,400);
  tank4.addAnimation("tank4",tanka);
  tank4.scale = 0.5;

  tank3 = createSprite(450,200,400,400);
  tank3.addAnimation("tank3",tanka);
  tank3.scale = 0.5;

  tank5 = createSprite(1200,400,400,400);
  tank5.addAnimation("tank5",tankb);
  tank5.scale = 0.35;

  mason_running = createSprite(500,350,400,400);
  mason_running.addAnimation("mason1", masonRun);
  mason_running.scale = 2;
  mason_running.visible = false;

  mason_reloading = createSprite(500,500,400,400);
  mason_reloading.addAnimation("mason2", masonRel);
  mason_reloading.scale = 2;
  mason_reloading.visible = false;
  
  inst = createSprite(190,50,400,400);
  inst.addAnimation("inst",inst1);
  inst.scale = 0.3;
  
  general = createSprite(1350,470,400,400);
  general.addAnimation("general",ugeneral);
  general.scale = 2;
  general.visible = false;

  box1 = createSprite(600,550,200,200);
  box1.addAnimation("box1",boxa);
  box1.scale = 2;

  aim = createSprite(700,350);
  aim.addAnimation("aim",aim1);
  aim.scale = 1;
  aim.visible = false;

  pause = createSprite(700,400,400,400);
  pause.addAnimation("pause",pause1);
  pause.scale = 2;

  enemyGroup = createGroup();

}


function spawnEnemies(){
    if (frameCount % 180 === 0){
    var enemy = createSprite(1200,100,-1,-1);
    enemy.velocityY = 0.5;
    enemy.velocityX = -1;
    enemy.scale = 0.3;
     //generate random obstacles
     var rand = Math.round(random(1,3));
     switch(rand) {
       case 1: enemy.addAnimation("enemy1", enemyA);
               break;
       case 2: enemy.addAnimation("enemy2", enemyB);
               break;
       case 3: enemy.addAnimation("enemy3", enemyC);
               break;
       default: break;
     }
     enemy.lifetime = 1200;
  }


}



function draw() {

if(gameState === PLAY) {

  spawnEnemies();
  mason_running.visible = true;
  box1.visible = false;
  general.visible = false;
  inst.visible = true;
  tent1.visible = true; 
  ledge.visible = true;
  ledge2.visible = true;

// Reloading and Aiming.

if(keyDown("space")) {
  mason_running.visible = false;
  mason_reloading.visible = true;
}

if(keyWentUp("space")) {
  mason_running.visible = true;
  mason_reloading.visible = false;
}

if(keyDown("shift")) {
  mason_running.visible = false;
  mason_reloading.visible = false;
  aim.visible = true;
  ledge.visible = false;
  ledge2.visible = false;
}

if(keyWentUp("shift")) {
  mason_running.visible = true;
  mason_reloading.visible = false;
  aim.visible = false;
  aim.x = mason_running.x
  ledge.visible = true;
  ledge2.visible = true;
}



// Movement

if(keyDown("LEFT_ARROW")) {
  mason_running.velocityX = -20;
  aim.x = mason_running.x
}
  
if(keyWentUp("LEFT_ARROW")) {
  mason_running.velocityX = 0;
  aim.x = mason_running.x
}

if(keyDown("RIGHT_ARROW")) {
  mason_running.velocityX = 20;
  aim.x = mason_running.x
}
  
if(keyWentUp("RIGHT_ARROW")) {
  mason_running.velocityX = 0;
  aim.x = mason_running.x
}

if(keyDown("UP_ARROW")) {
  aim.velocityY = -20;
}

if(keyWentUp("UP_ARROW")) {
  aim.velocityY = 0;
}

if(keyDown("DOWN_ARROW")) {
  aim.velocityY = 20;
}

if(keyWentUp("DOWN_ARROW")) {
  aim.velocityY = 0;
}


// Edges

if(aim.x < 0) {
  aim.x = 0;
  } 

if(aim.x > 1385) {
  aim.x = 1385;
  } 

if(aim.y < 100) {
  aim.y = 110;
  } 

if(aim.y > 595) {
  aim.y = 595;
  } 

if(mason_running.x < 200) {
  mason_running.x = 200;
  } 

if(mason_running.x > 1270) {
  mason_running.x = 1270;
  } 
}

if(gameState === PLAY && keyDown("R")) {
  gameState = START;
}

if(gameState === PLAY && keyDown("R")) {
  gameState = START;
}

if(gameState === START && mousePressedOver(bt1)) {
  gameState = FREEZE;
}


if(gameState === START && keyDown("space")) {
  gameState = PLAY;
}

if(gameState === START) {
  
mason_running.visible = false;
inst.visible = false;
mason_reloading.visible = false;
general.visible = true;
box1.visible = true;
tent1.visible = false;
ledge.visible = false;
ledge2.visible = false;
pause.visible = false;

}

if(gameState === FREEZE) {

  mason_running.visible = false;
  inst.visible = false;
  mason_reloading.visible = false;
  general.visible = false;
  box1.visible = false;
  tent1.visible = false;
  ledge.visible = false;
  ledge2.visible = false;
  pause.visible = true;

}

  


drawSprites();

}

function shoot() {

}
   
