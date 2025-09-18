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



beginShape();
  vertex(500, 250);
  vertex(750, 500);
  vertex(500, 750);
  vertex()

endShape(CLOSE);

}