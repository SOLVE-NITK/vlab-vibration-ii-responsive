function clearMe() {
    magFac.graphs = [];
    phaseAng.graphs = [];
    magFac.initialise();
    phaseAng.initialise();
}

// function runPage2() {
//     background(255);


//     stroke(0);
//     fill(0);



//     push();
//     stroke(0, 100);
//     for (let i = 20; i < 591; i++) {
//         point(i, 505);
//         i += 4;
//     }
//     for (let i = 510; i < 570; i++) {
//         point(300, i);
//         i += 4;
//     }
//     pop();

   

//     magFac.draw();
//     phaseAng.draw();


//     k = $("#stiffnessSpinner").spinner("value");
//     m = $("#massSpinner").spinner("value");
//     z = $("#dampingSpinner").spinner("value");
//     y = $("#magnitudeSpinner").spinner("value");
//     w = $("#frequencySpinner").spinner("value");
//     position_graph.update(spring1.y);
// //   position_graph.draw(0, 0, 255);
//   document.querySelector("#mass").textContent =
//   spring1.wn.toFixed(4) + " rad/s"; //Displaying values
// document.querySelector("#k").textContent = (w / spring1.wn).toFixed(4);
// document.querySelector("#c").textContent = z.toFixed(4);
// }
function runPage2() {
    background(255);
    // image(bg, 0, 0);
    strokeWeight(0)
    //fill(0);
   // fill(0);
    push();
    textSize(20);
    textFont("'Nunito', sans-serif ");
  
    fill(0,0,0)
    stroke(0,0,0);
    strokeWeight(0.8);
    text('Motor on a Foundation  as 2DOF System ',280, 50);
    text('Forced Vibration with rotating unbalance' , 280 , 80);

    textSize(16);
    //fill(250, 114, 43);
    // text("CONTROLS", 750, 540);
    // text("VARIABLES", 730, 130);
    pop();
    
    // textSize(16);
    // textFont("Comic Sans MS")
    // fill(250, 114, 43);

    // text('Xst = ' + ((spring1.F0/spring1.k1)).toFixed(4) , 100, 710)
    // text('X1 = ' + (abs(spring1.x1)).toFixed(4) , 100, 680)
    // text('X2 = ' + (abs(spring1.x2)).toFixed(4) , 350 , 680)
    // text('X1/X2 = '  + (spring1.x1/spring1.x2).toFixed(2) , 350 , 710)
    document.getElementById("wd").textContent=spring1.w1.toFixed(4);
    document.getElementById("wn").textContent=spring1.w2.toFixed(4);
    document.getElementById("ww1").textContent=(spring1.w / spring1.w1).toFixed(4)
    document.getElementById("wn1").textContent=(spring1.w / spring1.w2).toFixed(4)
    document.getElementById("x1").textContent= abs(spring1.x1).toFixed(4);
    document.getElementById("x2").textContent= abs(spring1.x2).toFixed(4);
    document.getElementById("xst").textContent= (spring1.F0 / spring1.k1).toFixed(4),
    document.getElementById("x1st").textContent= ((spring1.x1/spring1.x2)).toFixed(2),
    // document.getElementById("x2st").textContent= abs(spring1.x1 / (spring1.F0 / spring1.k1)).toFixed(4),

    // strokeWeight(0.5);   
    // line(0, 650, 680, 650)
    // line(300,650,300,750) 
    F0 = $("#stiffnessSpinner").spinner("value");
    w = $("#massSpinner").spinner("value");
    m1 = $("#dampingSpinner").spinner("value");
    k1 = $("#magnitudeSpinner").spinner("value");
    m2 = $("#frequencySpinner").spinner("value");
    k2 = $("#k2Spinner").spinner("value");
    spring1.initialise(F0,w,m1,k1,m2 , k2);
    spring1.update(t,factor)
    
   

        
    textFont("'Nunito', sans-serif ");
    textSize(20);
    strokeWeight(0.5);
    stroke(0,0,0);
    text("MODE SHAPE", 395, 150);
    textSize(15);


    

    if(abs(spring1.w-spring1.w1)<=0.5 || abs(spring1.w - spring1.w2)<=0.5)
    {

    strokeWeight(2.5);
    //stroke(0);
    line(480,200,480,600);
    stroke(0,0,255);
    
    line(480,300,480+(spring1.x1*400),300);
    line(480,500,480+(spring1.x2)*400,500);
    stroke(255,0,0);
    line(480,200,480+(spring1.x1*400),300);
    line(480+(spring1.x1*400),300,480+(spring1.x2*400),500);
    line(480+(spring1.x2)*400,500,480,600);
    }
    else{
    
    strokeWeight(2.5);
    stroke(0);
    line(480,200,480,600);
   stroke(0,0,255);
    // console.log("the  value of x1 in spring  1 " , spring1.x1);
    // console.log("the value of  x2 in  spring 2 " , spring1.x2);
    line(480,300,480+(spring1.x1*400),300);
    line(480,500,480+(spring1.x2*400),500);
    stroke(255,0,0);
    line(480,200,480+(spring1.x1*400),300);
    line(480+(spring1.x1*400),300,480+(spring1.x2*400),500);
    line(480+(spring1.x2*400),500,480,600);

    }

   
    if(abs(spring1.w-spring1.w2)<=0.1)
    {

        text("SECOND MODE SHAPE",415,180);
        text("X1/X2 = "  + (spring1.x1/spring1.x2).toFixed(0) , 300 , 300 );
    }

    if(abs(spring1.w-spring1.w1)<=0.1)
    {
        text("FIRST MODE SHAPE",415,180);
        text("X1/X2 = "  + (spring1.x1/spring1.x2).toFixed(0) , 300 , 300 );
    }
    

    // button3.draw()
    // button4.draw()

//     F0.draw();
//     w.draw();
//    // k0.draw();
//     m1.draw();
//     k1.draw();
//     m2.draw();
//     k2.draw();
    t = t+dt;
   
}
