var frame = {
    w:1000, 
    h:500
};

var birdHeight = 64;
var gravity = 0.8;


var pipeGap = function(){
    return  128 +  Math.floor(Math.random()*birdHeight + 1);
}     



var pipeHeight = function (){
    var ph = Math.floor(Math.random()*frame.h + 1);
    if(ph >= 8*frame.h/10){
        ph = 4*frame.h/10;
    }

    if(ph <= 2*frame.h/10){
        ph = 3* ph;
    }
    
    return ph;
}







