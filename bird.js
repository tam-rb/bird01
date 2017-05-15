// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/cXgA1d_E-jY&

function Bird() {
  this.alive = true;
  this.y = height/2;
  this.x = 128;

  this.gravity = gravity;
  this.lift = -15;
  this.velocity = 0;
  
  this.show = function() {
    fill(244, 149, 66);  
    ellipse(this.x, this.y, birdHeight, birdHeight);
  }

  this.up = function() {
    this.velocity += this.lift;
  }

  this.update = function() {
    this.velocity += this.gravity;
    this.velocity *= 0.9;
    this.y += this.velocity;

    if (this.y > height) {
      this.y = height;
      this.velocity = 0;
    }

    if (this.y < 0) {
      this.y = 0;
      this.velocity = 0;
    }

  }

  this.dead = function(){
    this.gravity= 0;
    this.lift = 0;
    this.alive = false;
  }
}
