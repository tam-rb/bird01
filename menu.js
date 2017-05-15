function Menu(){    
    this.w = 100;
    this.h = 50;
    this.x = frame.w - this.w;  
    this.y = frame.h -this.h;
    var newgame;

    this. preload =function (){
        newgame = loadImage("images/NewGameButton.png");
    }

    this.show = function(){
        image(newgame, this.x, this.y, this.w, this.h);        
    };       
}