function runPage2() {
  background(255);
  
  stroke(0);
  fill(0);

  strokeWeight(1);
    push();
    textFont("'Nunito', sans-serif");
    textSize(13);
    strokeWeight(0.3);
    let q1=spring1.w1.toFixed(4)/(2*Math.PI);
    let q2=spring1.w2.toFixed(4)/(2*Math.PI);
    text('THE FIRST NATURAL FREQUENCY OF SYSTEM (ω1) : '+q1.toFixed(6)+' Hz',30,150);
    text('THE SECOND NATURAL FREQUENCY OF SYSTEM (ω2) : '+q2.toFixed(6)+' Hz',30,200);
    text('THE FIRST MODE SHAPE RATIO [(X1/X2) AT ω1] : '+spring1.ar1.toFixed(4),30,250);
    text('THE SECOND MODE SHAPE RATIO [(X1/X2) AT ω2] : '+spring1.ar2.toFixed(4),30,300);
    strokeWeight();
    spring1.initialise(l1,l2,a1,m1,a2,m2);
    spring1.update(t, factor);
    l1 = $("#fSpinner").spinner("value");
  l2 = $("#omegaSpinner").spinner("value");
  a1 = $("#k1Spinner").spinner("value");
  m1 = $("#m1Spinner").spinner("value");
  a2 = $("#k2Spinner").spinner("value");
  m2 = $("#m2Spinner").spinner("value");

    

 

  magFac1.initialise();
  // magFac1.draw();
 
  // t = t + dt;
 
}
