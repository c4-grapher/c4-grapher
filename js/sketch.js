let persona = new Persona(200, 200);

function setup() {
 // put setup code here
 createCanvas(displayWidth, displayHeight);
}

function draw() {
  //background(255, 204, 0);
  background('#ffffeb');
  // put drawing code here
  line(50,50,100,100);
  persona.draw();
}
