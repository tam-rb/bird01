// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/cXgA1d_E-jY&

function Pipe() {
  var ph = pipeHeight();  
  var gap = pipeGap();
  this.topH = ph;

  this.bottomH = height - this.topH - gap;;
  this.x = width;
  this.w = 20;
  this.speed = 2;

  this.highlight = false;

  this.hits = function(bird) {
    if (bird.y - birdHeight/2 < this.topH || bird.y + birdHeight/2 > height - this.bottomH) {
      if (bird.x > this.x && bird.x < this.x + this.w) {
        this.highlight = true;
        bird.dead();
        return true;
      }
    }

    this.highlight = false;
    return false;
  }

  this.show = function() {
    fill(255);
    if (this.highlight) {
      fill(255, 0, 0);      
    }
    rect(this.x, 0, this.w, this.topH);
    rect(this.x, this.topH + gap, this.w, frame.h);
  }

  this.update = function() {    
      if(bird.alive){
        this.x -= this.speed;     
      }
  }  

  this.offscreen = function() {
    if (this.x < -this.w) {
      return true;
    } else {
      return false;
    }
  }
}
