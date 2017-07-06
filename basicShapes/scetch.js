var rectW;
var rectH;

function setup(){
    createCanvas(500, 500);
    background(0);
    //noStroke();

    rectW = width/20;
    rectH = height;

    colorMode(HSL);//hue(1-360), Sat(0-100), light(0-100)

    //fill(7, 207, 201, 255); //fill(r, g, b, opacity);
    //fill(10, 100, 50);

    for(var i=0; i<20; i++){
      fill(i*(360/20), 100, 50);
      //rect(i*(width/20), 0, rectW, rectH);
      //ellipse(i*(width/20), 0, rectW, rectH);
      //triangle(100, 150, 200, 200, 100, 100);
    }

    stroke(0, 100, 50);
    strokeWeight(5);
    line(100, 100, 400, 400);
    //rect(width/2, height/2, width/4, height/4);
}

function draw(){
}
