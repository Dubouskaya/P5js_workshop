var rectW;
var rectH;

function setup(){
    createCanvas(500, 500);
    background(0);
    colorMode(HSL);
}

function draw(){
  for(var i=0; i<100; i++){
    ellipse(random(width), random(height), 10, random(20));
    fill(random(360), 100, 50);
  }
}
