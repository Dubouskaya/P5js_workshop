var rectW;
var rectH;
var numCircles = 10;
var circle = [];


function setup(){
    createCanvas(500, 500);
    background(50);
    //colorMode(HSL);
    frameRate(50);//1-60
    // for(var i=0; i<numCircles; i++){
    //   fill(random(255));
    //   circle.push(ellipse(random(width), random(height), 20, 20);
    // }
}

function draw(){//60 times per second
  fill(255);
  ellipse(mouseX, mouseY, 50, 50);
  // background(100);
  // noStroke();
  // numCircles = map(mouseX, 0, width, 0, 300);//map 0->width to 0-100 by the mouseX
  // for(var i=0; i<numCircles; i++){
  //   ellipse(random(width), random(height), 30, 30);
  //   fill(random(360), 30, 50);
  // }
}

function keyPressed(){
  if(keyCode == LEFT_ARROW){

  }
}
