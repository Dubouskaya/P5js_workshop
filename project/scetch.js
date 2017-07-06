var rectH;
var rectW;


function setup(){
    createCanvas(500, 500);
    background(0);

    rectMode(CENTER); //change all rect centers to the middle point

    fill(255);
    //rect(100, 100, 50, 200); //rect(x, y, width. height);
    rectH = height/4;
    rectW = width/20;

    for(var i=0; i<10; i++){
      rect((i+0.5)*(width/10), height/2, rectW, rectH);
    }
}

function draw(){
/////////////////////
}
