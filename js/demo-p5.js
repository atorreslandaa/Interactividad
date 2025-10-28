function setup (){
    createCanvas  (windowWidth, windowHeight);
}

function draw (){
    //background(0, 10);
}
function windowResized(){
    resizeCanva(windowWidth, windowHeight)
}
function mouseMoved(){
    stroke(255);
    fill(0);
    const size = Math.abs(Math.sin(frameCount * 0.01)) *100;
    ellipse(mouseX, mouseY,size, size);
}
