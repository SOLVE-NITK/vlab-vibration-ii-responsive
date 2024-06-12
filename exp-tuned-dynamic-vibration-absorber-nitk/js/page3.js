function runPage3() {
    background(255);
    // image(bg, 0, 0);
    
    stroke(0);
    fill(0);

    fill(0);
    push();
    textSize(30);
    // textFont("Nunito");
    // text('Tuned Dynamic Vibration Absorber',200, 50);

    textSize(16);
    text("CONTROLS", 750, 540);
    text("VARIABLES", 730, 130);
    pop();

 
   // text('ω1 = ' + spring1.w1.toFixed(4) + " rad/s", 310, 680);
   // text('ω2 = ' + spring1.w2.toFixed(4) + " rad/s", 480, 680);
  //  text('ω1m = ' + (Math.pow((spring1.x , 0.5)).toFixed(4) + " rad/s", 310, 720)
    
    // text('X2/Xst = ' + (abs(spring1.x1/(spring1.F0/spring1.k1))).toFixed(4) , 350, 695)
    let sum  = 40
    textSize(21)
    text('Legend' , 400 , 170+sum)

    stroke('red');
   // text("Ω1" , 70+ 100*spring1.om1 +50, 450+10);
    strokeWeight(10);
    stroke('blue');
    point(70+ 100*spring1.om1 +50, 400+10);
    strokeWeight(10);
    stroke('green');
    point(70+ 100*spring1.om2+50 ,  400+10);
    strokeWeight(10);
    stroke('red');
    point(120 +  spring1.w1*100+50 ,  400+10);
 

    let sub = 60;
    strokeWeight(1.0);
    line(420-sub, 200+sum-10, 430-sub, 200+sum)
    stroke('black');
    textSize(16);
    text('Frequency response curve ' , 440-sub , 200+sum);
    text('with the absorber' , 440-sub , 220+sum)
    strokeWeight(0.5); 

    stroke('black');
    strokeWeight(1);
    line(420-sub, 230+sum-10, 430-sub, 230+sum)
    textSize(16);
    text('Frequency response curve' , 440-sub , 240+sum);
    text('wihtout the absorber' , 440-sub , 260+sum);
    textSize(10);
  //  fill(250, 114, 43);
    strokeWeight(0);

    stroke('red');
    strokeWeight(10)
    point(370 ,275+sum)
    textSize(16);
    strokeWeight(0);
    stroke('black');
    text('ω1' , 390 , 278+sum);

    strokeWeight(0);

    stroke('blue');
    strokeWeight(10)
    point(370 ,295+sum)
    textSize(16);
    strokeWeight(0);
    stroke('black');
    text('Ω1' , 390 , 298+sum);
    strokeWeight(0);

    stroke('green');
    strokeWeight(10)
    point(370 ,315+sum)
    textSize(16);
    strokeWeight(0);
    stroke('black');
    text('Ω2' , 390 , 318+sum);
    strokeWeight(0);

 



   // stroke(0,0,0)
//    text("Ω2" , 70+100*spring1.om2+50 , 440); //add blue colour
 //   text("ω1" , 120 +  spring1.w1*100+50 , 480); //add green colour
  // remove text near the points, let the colour and what it represent be in the legend
  // int he graph only colours should be there
    textSize(16);
    textFont("Nunito")
    fill(250, 114, 43);
    document.querySelector("#x22").textContent =+ (abs(spring1.x2)).toFixed(4) ;
    document.querySelector("#Xst").textContent =+ ((spring1.F0/spring1.k1)).toFixed(4);
    text('X2 = ' + (abs(spring1.x2)).toFixed(4) , 100, 695)
    text('Xst = ' + ((spring1.F0/spring1.k1)).toFixed(4) , 100, 720)

    strokeWeight(0.5);   
    line(0, 650, 680, 650)
    line(300,650,300,750) 
    spring1.initialise(F0,w,k1,m1,k2,m2);
    spring1.update(t, factor);
    //spring1.show(0, 1, 0);

    magFac1.initialise();
    magFac1.draw();
   // magFac3.initialise();
   // magFac3.draw();
 //   magFac2.initialise();
  //  magFac2.draw();
    magFac4.initialise();
    magFac4.draw();

    
    stroke(255);
    fill(255);
    rect(30, 125, 550, 55);
    // button5.draw()
    $('#p1, #p2, #p3,#p4,#p5,#p6').each(function() {
      // Perform actions on each element
      $(this).css('display', 'none');

  });
  $('#p7, #p8').each(function() {
    // Perform actions on each element
    $(this).css('display', 'block');

});



    // F0.draw();
    // w.draw();
    // k1.draw();

    // m1.draw();
    // k2.draw();
    // m2.draw();
    F0 = $("#FoSpinner").spinner("value");
    w = $("#wSpinner").spinner("value");
    k1 = $("#k1Spinner").spinner("value");
    m1= $("#m1Spinner").spinner("value");
    k2= $("#k2Spinner").spinner("value");
    m2= $("#m2Spinner").spinner("value");
    t = t+dt;
    //clear.mousePressed(clearMe);
}
