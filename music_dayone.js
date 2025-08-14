let circleY = 350

// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(20)

  fill (255, 171, 216); //light pink
  ellipse(300,circleY,50);
  
  circleY = circleY + 1

  //adding if statement for loop
  //if it reaches the bottom of the page, make it go back to the top of the page
  if (circleY > 100) {
   sunY = 0
  }
}