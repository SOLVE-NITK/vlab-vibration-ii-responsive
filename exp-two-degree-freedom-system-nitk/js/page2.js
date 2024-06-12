function runPage2() {
  if (!page2 || page3 || page4) {
    return;
  }
  background(255);
  // image(bg, 0, 0);

  stroke(0);
  fill(0);

  strokeWeight(0.5);
  push();
  // textSize(21);
  // textFont("Comic Sans MS");
  // text('Motor on a Foundation  as 2DOF System ',200, 40);
  // text('Free Vibration with rotating unbalance' , 210 , 60);

  // textSize(16);
  // text("CONTROLS", 655, 417);
  // text("VARIABLES", 655, 107);
  // pop();

  textFont("'Nunito', sans-serif");
  textSize(14.5);

  strokeWeight(0.7);
  // textSize(10);
  text(
    "The first natural frequency of the system (ω1) : " +
      spring1.w1.toFixed(4) +
      " rad/s",
    30,
    80
  );
  text(
    "The second natural frequency of the system (ω2) : " +
      spring1.w2.toFixed(4) +
      " rad/s",
    30,
    130
  );
  text(
    "The first mode shape ratio [(X1/X2) AT ω1] : " + spring1.ar1.toFixed(4),
    30,
    180
  );
  text(
    "The second mode shape ratio [(X1/X2) AT ω2] : " + spring1.ar2.toFixed(4),
    30,
    230
  );

  // console.log(spring1.x2.toFixed(2));
  if (spring1.x1 == spring1.x2) {
    // console.log(spring1.x2.toFixed(2));
    // text('THE EQUATION OF MOTION OF M1 : '+spring1.ar1.toFixed(4) * spring1.x2.toFixed(4)+' cos('+spring1.w1.toFixed(4)+'t)',30,280);
    // text('THE EQUATION OF MOTION OF M2 : '+spring1.x2.toFixed(2)+' cos('+spring1.w2.toFixed(4)+'t)',30,330);
    text(
      "The Equation of motion of M1 : " +
        spring1.ar1.toFixed(4) * spring1.x2.toFixed(4) +
        " cos(" +
        spring1.w1.toFixed(4) +
        "t)",
      30,
      280
    );
    text(
      "The Equation of motion of M2 : " +
        spring1.x2.toFixed(2) +
        " cos(" +
        spring1.w2.toFixed(4) +
        "t)",
      30,
      330
    );
  } else if (spring1.x1 == -spring1.x2) {
    // console.log(spring1.x1);

    text(
      "The Equation of motion of M1: " +
        spring1.ar2.toFixed(4) * spring1.x2.toFixed(4) +
        " cos(" +
        spring1.w1.toFixed(4) +
        "t)",
      30,
      280
    );
    text(
      "The Equation of motion of M2: " +
        spring1.x2.toFixed(2) +
        " cos(" +
        spring1.w2.toFixed(4) +
        "t)",
      30,
      330
    );
  } else {
    text(
      "The Equation of motion of M1: " +
        spring1.x1d.toFixed(4) +
        " cos(" +
        spring1.w1.toFixed(4) +
        "t) + (" +
        spring1.x1dd.toFixed(4) +
        ") cos(" +
        spring1.w2.toFixed(4) +
        "t)",
      30,
      280
    );
    text(
      "The Equation of motion of M2: " +
        spring1.x2d.toFixed(4) +
        " cos(" +
        spring1.w1.toFixed(4) +
        "t) + (" +
        spring1.x2dd.toFixed(4) +
        ") cos(" +
        spring1.w2.toFixed(4) +
        "t)",
      30,
      330
    );
  }

  x1 = $("#fSpinner").spinner("value");
  x2 = $("#omegaSpinner").spinner("value");
  k1 = $("#k1Spinner").spinner("value");
  m1 = $("#m1Spinner").spinner("value");
  k2 = $("#k2Spinner").spinner("value");
  m2 = $("#m2Spinner").spinner("value");

  strokeWeight(1);
  spring1.initialise(x1, x2, k1, m1, k2, m2);
  spring1.update(t, factor);
  // spring1.show(0, 1, 0);
  // magFac1.initialise();
  // magFac1.draw();
  // button3.draw()
  // button4.draw()
  // x1.draw();
  // x2.draw();
  // k1.draw();
  // m1.draw();
  // k2.draw();
  // m2.draw();
  t = t + dt;
  //clear.mousePressed(clearMe);
}
