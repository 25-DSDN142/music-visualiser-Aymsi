let circleY = 350;
let circleSize;

let smooth = 1; //consistency for scale 

// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(200)
  //basing scale of circle width on drums of song
  //map(what you're mapping, minimum of range, maximum of range, your custom minimum range, your custom maximum range)
//circleSize = map(drum, 0, 100, 50, 400);

  //fill (255, 171, 216); //light pink
  //ellipse(300,circleY, circleSize);
  
  //making circleY consistently increase by Y, moving down thje page everytime it loops
  //circleY = circleY + 1

  //adding if statement for loop
  //if it reaches the bottom of the page, make it go back to the top of the page
 // if (circleY > 1000) {
  // circleY = 0
// }

//idea behind this: scale changing dependant on quiet vs loud drum
//map(drum, minimum drum range, *max drum range to hit edge on loudest part*, 0.25 of full 1000,1000 res star shape being 1, 4 being largest size reaching 1000,1000 edge of canvas)
let scaleFactor = map(drum, 50, 100, 1, 4); //drum input to scale range

smooth = lerp(smooth, scaleFactor, 0.35); //adding smoothing to make scaling not jittery

translate(500,500);
scale(smooth);

beginShape();
fill(0);
stroke(255);
strokeWeight(10);

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