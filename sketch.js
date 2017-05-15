// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/cXgA1d_E-jY&


var bird;
var pipes;
var bg;
var ads;
var menu;


function setup() {  
  bg = loadImage("images/background.jpg"); 
  menu = new Menu();
  menu.preload();
  createCanvas(frame.w, frame.h);
  this.newGame();
}

function newGame(){
  pipes = [];
  pipes.push(new Pipe());
  bird = new Bird();
  ads = new NintexAds();  
}

function draw() {
  background(bg);

  for (var i = pipes.length-1; i >= 0; i--) {
    pipes[i].show();
    pipes[i].update();

    if (pipes[i].hits(bird)) {
      console.log("HIT");            
    }

    if (pipes[i].offscreen()) {
      pipes.splice(i, 1);
    }
  }

  bird.update();
  bird.show();
  menu.show();
  

  if(!bird.alive){
      ads.show();
  }

  if (frameCount % 100 == 0 && bird.alive) {
    pipes.push(new Pipe());
  }
  
}

function keyPressed() {
  if (key == ' ') {
    bird.up();
    //console.log("SPACE");
  }
}

function mousePressed(){
  if(mouseX > menu.x){
    this.newGame();
  }
}
