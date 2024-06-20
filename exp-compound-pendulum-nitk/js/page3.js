function runPage3() {
  background(255);
  // image(bg, 0, 0);

  stroke(0);
  fill(0);

  push();
  strokeWeight(3);
    textSize(36);
    textFont("Times");
  // textSize(36);
  // textFont("Times");
  // text("TWO DEGREE OF FREEDOM SYSTEM", 100, 40);

  textSize(16);
  // text("CONTROLS", 655, 417);
  // text("VARIABLES", 655, 107);
  pop();
  textSize(15);
  text('X\u2081',20,265);
  text('X\u2082',20,385);
  strokeWeight(0.3);
  line(45,260,590,260);
  line(45,380,590,380);
  if(spring1.k1==spring1.k2){
  textFont("'Nunito', sans-serif");
  textSize(20);
  text("MODE SHAPE", 250, 20);
  textSize(15);
  text("When the initial excitation is given same to both masses in same direction, it",30,50);
  text("gives only the first mode shape of the system",150,70);
  strokeWeight(3);
  stroke(0);
  line(300,78,300,378);
  stroke(0,0,255);
  line(300,260,300+(spring1.x1d),260);
  line(300,380,300+(spring1.x2d),380);
  stroke(255,0,0);
  line(300,78,300+(spring1.x1d),260);
  line(300+(spring1.x1d),260,300+(spring1.x2d),380);
  // line(300+(spring1.x2d),400,300,500);
  }
  else if(spring1.k1==(-spring1.k2)){
    textFont("'Nunito', sans-serif");
    textSize(20);
    strokeWeight(3);
    text("MODE SHAPE", 250, 20);
    textSize(15);
    text("When the initial excitation is given same to both masses in different direction, it",30,50)
    text("gives only the second mode shape of the system",150,70);
    strokeWeight(0.3);
    stroke(0);
    line(300,78,300,378);
    stroke(0,0,255);
    line(300,260,300+(spring1.x1dd),260);
    line(300,380,300+(spring1.x2dd),380);
    stroke(55,0,0);
    line(300,78,300+(spring1.x1dd),260);
    line(300+(spring1.x1dd),260,300+(spring1.x2dd),380);
    // line(300+(spring1.x2dd),400,300,500);

    }
    else{
      textFont("'Nunito', sans-serif");
      textSize(20);
      strokeWeight(0.3);
      text("MODE SHAPES", 250, 20);
      textSize(15);
      text("FIRST MODE SHAPE",90,50);
      text("SECOND MODE SHAPE",370,50);
      strokeWeight(3);
      stroke(0);
      line(120,78,120,378); // black straight line
      stroke(0,0,255);
      line(120,260,120+(spring1.x1d),260); // blue1 line
      stroke(0,0,255);
      line(120,380,120+(spring1.x2d),380); // blue2 line
      stroke(255,0,0);
      line(120,78,120+(spring1.x1d),260); // red1
      line(120+(spring1.x1d),260,120+(spring1.x2d),380);
      // line(120+(spring1.x2d),400,120,500);
      
      // second graph
      strokeWeight(3);
      stroke(0);
      line(400,78,400,378); // black straight line
      stroke(0,0,255);
      line(400,260,400+(spring1.x1dd),260); // blue1 line
      stroke(0,0,255);
      line(400,380,400+(spring1.x2dd),380); // blue2 line
      stroke(255,0,0);
      line(400,78,400+(spring1.x1dd),260);
      line(400+(spring1.x1dd),260,400+(spring1.x2dd),380);
      // line(400+(spring1.x2dd),400,400,500);
      
  
      }
      strokeWeight(0.3);
      spring1.initialise(l1,l2,a1,m1,a2,m2);
      spring1.update(t, factor);
      l1 = $("#fSpinner").spinner("value");
      l2 = $("#omegaSpinner").spinner("value");
      a1 = $("#k1Spinner").spinner("value");
      m1 = $("#m1Spinner").spinner("value");
      a2 = $("#k2Spinner").spinner("value");
      m2 = $("#m2Spinner").spinner("value");
      // t = t+dt;
  
}
