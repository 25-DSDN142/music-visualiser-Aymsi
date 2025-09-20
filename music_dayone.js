let angle = 0 //for rotating circle points!
let speed = 0.01

let smooth = 1; //consistency for scale 
let rotationAngle = 0 //base angle no rotation

//copied for backstar
let backstarsmooth = 1; //consistency for scale 
let backstarrotationAngle = 0 //base angle no rotation

let rotationMinimum = 40 //lots of adjustment to number //40 is good

//copied for backstar
let backstarrotationMinimum = 80 //lots of adjustment to number

let r = 400

//for rainbow colourshift!
let hueValue = 0

// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(0)
angleMode(RADIANS);
  translate(500,500);

//for rainbow colour shift - colorMode must be inside draw function!
colorMode(HSB, 360, 100, 100);

//circle code - drawn based off of bass
strokeWeight(6);
noFill();

//adding pastel rainbow shift when bass is high!
hueValue = (hueValue += 2) % 360;
if (bass < 75) {
  stroke(hueValue, 40, 95); //pastel rainbow shift on high bass
} else {
  stroke(255); //white otherwise!
}

//let increment = map(bass, 0, 100, 0.01, PI);
let increment = 0.1;

//controlling how the bass pulses in the shape
let bassStrength = map(bass, 80, 100, 0, 100);

beginShape();
//drawing circle shape, telling it to constantly draw to a full circle
for (let a = 0; a < TWO_PI; a += increment) {

  //basspulse and bassstrength effect how it is moved by bass
  let bassPulse = sin(a * 6 + frameCount * 0.1) * bassStrength;

  let radius = r + bassPulse;

  let x = radius * cos(a);
  let y = radius * sin(a);
  vertex(x, y);
}

endShape(CLOSE);

//adding background reference circle outline
//noFill();
//strokeWeight(5);
//rotating point around circle
//let r = 400
//circle (0, 0, r * 2);

//strokeWeight(50);
//stroke(255);
//let x = r * cos(angle);
//let y = r * sin(angle);
//point(x, y);

//angle += speed 

let backstarscaleFactor = map(bass, 80, 100, 1, 2); //drum input to scale range

backstarsmooth = lerp(backstarsmooth, backstarscaleFactor, 0.1); //adding smoothing to make scaling not jittery

//let targetAngle = map(vocal, rotationMinimum, 1, 0, TWO_PI);

let backstartargetAngle;
if (bass > backstarrotationMinimum) {
  backstartargetAngle = map(bass, backstarrotationMinimum, 1, 0, TWO_PI);
} else {
  backstartargetAngle = 0;
}
backstarrotationAngle = lerp(backstarrotationAngle, backstartargetAngle, 0.05);

rotate(backstarrotationAngle);
scale(backstarsmooth);

beginShape();

hueValue = (hueValue += 2) % 360;
if (bass < 75) {
  fill(hueValue, 40, 95); //pastel rainbow shift on high bass
} else {
  fill(255); //white otherwise!
}

stroke(255);
strokeWeight(6);
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
let scaleFactor = map(drum, 70, 100, 1, 2); //drum input to scale range

smooth = lerp(smooth, scaleFactor, 0.15); //adding smoothing to make scaling not jittery

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
strokeWeight(5);

//adding pastel rainbow shift when bass is high!
hueValue = (hueValue += 2) % 360;
if (bass > 80) {
  stroke(hueValue, 40, 95); //pastel rainbow shift on high bass
} else {
  stroke(255); //white otherwise!
}

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



