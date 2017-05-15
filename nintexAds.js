function NintexAds(){    
    this.w = 320;
    this.h = 200;
    this.x = width/2 - this.w/2;  
    this.y = height / 2 - this.h/2;  
    

    this.show = function (){
        fill(0, 0, 0, 100)   ;
        rect(this.x, this.y, this.w, this.h);
    }

    this.update = function(){

    }
}