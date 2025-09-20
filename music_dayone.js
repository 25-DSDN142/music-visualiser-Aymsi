let angle = 0 //for rotating circle points!
let speed = 0.01

let smooth = 1; //consistency for scale 
let rotationAngle = 0 //base angle no rotation

//copied for backstar
let backstarsmooth = 1; //consistency for scale 
let backstarrotationAngle = 0 //base angle no rotation

const rotationMinimum = 40 //lots of adjustment to number //40 is good

//copied for backstar
const backstarrotationMinimum = 40 //lots of adjustment to number //40 is good

// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(0)
angleMode(RADIANS);
  translate(500,500);

//let R = color('#ffc9de')
//let O = color('#fdd97c')
//let Y = color('#fbfdaa')
//let G = color('#c1f0b2')
//let B = color('#b2e4f0')
//let P = color('#d6b2f0')

//adding background reference circle outline
noFill();
strokeWeight(5);
//rotating point around circle
let r = 400
circle (0, 0, r * 2);

strokeWeight(50);
stroke(255);
let x = r * cos(angle);
let y = r * sin(angle);
point(x, y);

angle += speed 
//fill(255);
//strokeWeight(1);

//top ellipse
//ellipse(0, 400, 50, 50);
//bottom ellipse
//ellipse(0, -400, 50, 50);
//right top ellipse
//ellipse(400, -150, 50, 50);
//right bottom ellipse
//ellipse(400, 150, 50, 50);
//left top ellipse
//ellipse(-400, -150, 50, 50);
//left bottom ellipse
//ellipse(-400, 150, 50, 50);

let backstarscaleFactor = map(drum, 50, 100, 1, 3.5); //drum input to scale range

backstarsmooth = lerp(backstarsmooth, backstarscaleFactor, 0.35); //adding smoothing to make scaling not jittery

//let targetAngle = map(vocal, rotationMinimum, 1, 0, TWO_PI);

let backstartargetAngle;
if (vocal > backstarrotationMinimum) {
  backstartargetAngle = map(vocal, backstarrotationMinimum, 1, 0, TWO_PI);
} else {
  backstartargetAngle = 0;
}
backstarrotationAngle = lerp(backstarrotationAngle, backstartargetAngle, 0.05);

rotate(backstarrotationAngle);
scale(backstarsmooth);

beginShape();
fill(0);
stroke(255);
strokeWeight(10);
//strokeColor(strokeColor)

//strokeColor = lerpColor()

//comments are original points of star before translation 500,500 and changing points to be based off of centre point of canvas being 0
  vertex(0, -150); //was 500, 350
  vertex(25, -50); //was 525, 450
  vertex(125, -75); //was 625, 425
  vertex(50, 0); //was 550, 500
  vertex(125, 75); //was 625, 575
  vertex(25, 50); //was 525, 550
  vertex(0, 150); //was 500, 650
  vertex(-25, 50); //was 475, 550
  vertex(-125, 75); //was 375, 575
  vertex(-50, 0); //was 450, 500
  vertex(-125, -75); //was 375, 425
  vertex(-25, -50); //was 475, 450

endShape(CLOSE);

//idea behind this: scale changing dependant on quiet vs loud drum
//map(drum, minimum drum range, *max drum range to hit edge on loudest part*, 0.25 of full 1000,1000 res star shape being 1, 4 being largest size reaching 1000,1000 edge of canvas)
let scaleFactor = map(drum, 50, 100, 1, 3.5); //drum input to scale range

smooth = lerp(smooth, scaleFactor, 0.35); //adding smoothing to make scaling not jittery

//let targetAngle = map(vocal, rotationMinimum, 1, 0, TWO_PI);

let targetAngle;
if (vocal > rotationMinimum) {
  targetAngle = map(vocal, rotationMinimum, 1, 0, TWO_PI);
} else {
  targetAngle = 0;
}
rotationAngle = lerp(rotationAngle, targetAngle, 0.05);

rotate(rotationAngle);
scale(smooth);

beginShape();
fill(0);
stroke(255);
strokeWeight(10);
//strokeColor(strokeColor)

//strokeColor = lerpColor()

//comments are original points of star before translation 500,500 and changing points to be based off of centre point of canvas being 0
  vertex(0, -150); //was 500, 350
  vertex(25, -50); //was 525, 450
  vertex(125, -75); //was 625, 425
  vertex(50, 0); //was 550, 500
  vertex(125, 75); //was 625, 575
  vertex(25, 50); //was 525, 550
  vertex(0, 150); //was 500, 650
  vertex(-25, 50); //was 475, 550
  vertex(-125, 75); //was 375, 575
  vertex(-50, 0); //was 450, 500
  vertex(-125, -75); //was 375, 425
  vertex(-25, -50); //was 475, 450

endShape(CLOSE);

}