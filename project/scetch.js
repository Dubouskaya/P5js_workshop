var rectH;
var rectW;


function setup(){
    createCanvas(500, 500);
    background(0);

    rectMode(CENTER); //change all rect centers to the middle point

    fill(255);
    //rect(100, 100, 50, 200); //rect(x, y, width. height);
    rectH = height/3;
    rectW = width/3;

    rect(width/2, height/2, rectW, rectH);
}

function draw(){

}
