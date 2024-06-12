let showCodeBlock = true;
function runPage1() {
  background(255);
  // image(bg, 0, 0);
  stroke(0);
  fill(0);
  strokeWeight(0.5);
  push();

  pop();

  push();
  stroke(0, 100);
 
  pop();
  l1 = $("#fSpinner").spinner("value");
  l2 = $("#omegaSpinner").spinner("value");
  a1 = $("#k1Spinner").spinner("value");
  m1 = $("#m1Spinner").spinner("value");
  a2 = $("#k2Spinner").spinner("value");
  m2 = $("#m2Spinner").spinner("value");
// console.log(l1)
  spring1.initialise(l1,l2,a1,m1,a2,m2);
    spring1.update(t, factor);
    spring1.show(0, 1, 0);
    strokeWeight(0.5);
    line (spring1.masscoordinates[  0], spring1.masscoordinates[1], position_graph1.graphend[0], position_graph1.graphend[1])
    line (spring1.masscoordinates[2], spring1.masscoordinates[3], position_graph2.graphend[0], position_graph2.graphend[1])
    fill(0,0,0);
   
    if(animation==false){
    // button2.draw();
    }
    image(dia, 30,210,150,160);
    fill(0);
    strokeWeight(0.5);
    arc(spring1.x_equilibrium,spring1.y_equilibrium-119 , 15, 15, 0, PI);
    $('#playpausebutton').css({
      "opacity":1,
      "pointer-events":"auto"
    });
  
// varchange();
  line(
    spring1.masscoordinates[0],
    spring1.masscoordinates[1],
    position_graph1.graphend[0],
    position_graph1.graphend[1]
  );
  line(
    spring1.masscoordinates[2],
    spring1.masscoordinates[3],
    position_graph2.graphend[0],
    position_graph2.graphend[1]
  );
 
  // t = t + dt;
}

