let circleY = 350;
let circleSize;

// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(20)
  //basing scale of circle width on drums of song
circleSize = drum*4;

  fill (255, 171, 216); //light pink
  ellipse(300,circleY, circleSize);
  
  //making circleY consistently increase by Y, moving down thje page everytime it loops
  circleY = circleY + 1

  //adding if statement for loop
  //if it reaches the bottom of the page, make it go back to the top of the page
  if (circleY > 1000) {
   circleY = 0
  }
}