let circleY = 350;
let circleSize;

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
//map(drum, minimum drum range, *need to figure out maximum drum range*, 0.25 of full 1000,1000 res star shape being 1, 4 being largest size reaching 1000,1000 edge of canvas)
let scaleFactor = map(drum, 1, 1, 1, 4);

translate(500,500);
scale(scaleFactor);

beginShape();
fill(0);
stroke(255);
strokeWeight(10);

  vertex(500, 350); //Y was 375
  vertex(525, 450); //Y was 475
  //adjust below vertex to sit higher for better distribution of star points
  vertex(625, 425); //Y was 450, changed to 425!
  vertex(550, 500);
  vertex(625, 575); //Y was 550
  vertex(525, 550);
  vertex(500, 650); //Y was 625
  vertex(475, 550);
  vertex(375, 575); //Y was 550
  vertex(450, 500);
  vertex(375, 425); //Y was 450
  vertex(475, 450);

endShape(CLOSE);

}