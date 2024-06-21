  // canvas
// let width = document.querySelector("#canvas-container").width;
// let height = document.querySelector("#canvas-container").height;
let width = 600;
let height = 600;

// counter
let t = 0.1;
let dt = 0.01;

// system
let spring1;

// graphs
// let position_graph1;
// let position_graph2;
let magFac;
let magFac1;
let magFac2;



// factor
let factor = 1;

// images
// let img;
let button1;
let button2;
let button3;
let button4;
let button5;
let spr;

// pages
let page1 = true;
let page2 = false;
let page3 = false;
// let graphStep = 0;

// animation
let animation = true;
let touch = false;
let simTimeId;
// Buttons
let clear;


function preload() {
   
  spr = loadImage("images/spring.png");
  dia= loadImage("images/dimg270.gif");
  $('#playpausebutton').css({
    "opacity":1,
    "pointer-events":"auto"
  });
  $('#graphbutton').css({
    "opacity":0.5,
    "pointer-events":"none"
  
  });
}

function setup() {
  l1 = new NumberInput(620, 140, "l1(m)",0.050, 0.130,0.080 ,0.001,1, true); //(x, y, label, min, max, iniVal, change,fine_change, ifSlider)
  l2= new NumberInput(620, 190, "l2(m)", 0.050, 0.130,0.080 ,0.001,1, true);
    a1 = new NumberInput(620, 240, "θ1 (degrees)",10,60 , 30, 1,1, true);
    m1 = new NumberInput(620, 290, "m1(kg)", 25, 60, 40, 1,1, true);
    a2 = new NumberInput(620, 340, "θ2 (degrees)", 10, 60 ,40, 1,1, true);
    m2 = new NumberInput(620, 380, "m2(kg)", 25, 60, 40, 1,1, true);
    spring1 = new System(300, 150, 90, 25, a1, a2);
 
  var sketchCanvas = createCanvas(600, 400);
  sketchCanvas.parent("canvas-container");

  spring1 = new System(300, 150, 90, 25, a1, a2);

  position_graph1 = new Graph(50, 295, 100, 220, "x1", "t");
    position_graph2 = new Graph(50, 210, 100, 220, "x2", "t");
    magFac1 = new DynamicGraph(50, 400, 300, 220, "X1/Xst", "ω/ω2", 0,7,0,10, System.mag_func1);
    magFac2 = new DynamicGraph(50, 400, 300, 220, "X2/Xst", "ω/ω2",0, 7,0,10, System.mag_func2);

    varinit();
    l1 = $("#fSpinner").spinner("value");
    l2 = $("#omegaSpinner").spinner("value");
    a1 = $("#k1Spinner").spinner("value");
    m1 = $("#m1Spinner").spinner("value");
    a2 = $("#k2Spinner").spinner("value");
    m2 = $("#m2Spinner").spinner("value");
    spring1 = new System(300, 150, 90, 25, a1, a2);

  magFac1 = new DynamicGraph(50,
    400,
    300,
    220,
    "X1/Xst",
    "ω/ω2",
    0,
    7,
    0,
    10,
    System.mag_func1
  );
  magFac2 = new DynamicGraph(
    50,
    400,
    300,
    220,
    "X2/Xst",
    "ω/ω2",
    0,
    7,
    0,
    10,
    System.mag_func2
  );
  
   
}

function draw() {
  if (page1) {
    runPage1();
    if(animation==true){
   
  }
  else{
    
        spring1.a1v=0;
        spring1.a2v=0;
        spring1.a1a=0.01;
        spring1.a2a=0.01;
        t=0.1;
        spring1 = new System(300, 150, 90, 25, a1, a2);     
 }
  }

  if (page2) {
    runPage2();
  }

  if (page3) {
    runPage3();
  }
}
function simstate()
{
  var imgfilename=document.getElementById('playpausebutton').src;
  imgfilename = imgfilename.substring(imgfilename.lastIndexOf('/') + 1, imgfilename.lastIndexOf('.'));
  if (imgfilename=="bluepausedull")
  {
    animation = false;
    document.getElementById('playpausebutton').src="images/blueplaydull.svg";
	 clearInterval(simTimeId);
    simstatus=0;
    // $('#theta2spinner').spinner("value",theta2);			//to set simulation parameters on pause
    pauseTime=setInterval("varupdate();",'100');
    document.querySelector(".playPause").textContent = "Play";
    $('.variables-sections').css({
          "opacity":1,
          "pointer-events":"auto"
        });
        $('#graphbutton').css({
          "opacity":1,
          "pointer-events":"auto"
        
        });
  }
    if (imgfilename=="blueplaydull")
  {
    animation = true;
  	 time=0;			
  	 clearInterval(pauseTime);
    document.getElementById('playpausebutton').src="images/bluepausedull.svg";
    simTimeId=setInterval("time=time+0.1; varupdate(); ",'100');    
    simstatus=1;
    document.querySelector(".playPause").textContent = "Pause";
    $('.variables-sections').css({
        "opacity":0.5,
        "pointer-events":"none"
      });
      $('#graphbutton').css({
        "opacity":0.5,
        "pointer-events":"none"
      });
  } 
}


function graphPlot() {
  graphStep = 1;
  document.querySelector(".graph-one").classList.remove("display-hide");
  document.querySelector(".graph-two").classList.remove("display-hide");
  document.querySelector(".graph-div span").textContent = "Prev/Next";
  document.querySelector(".graph-button").style.display = "none";
  screenchangePhase();
  page1=false;
  page2=true;
  page3=false;
  runPage2();
  console.log("nextN")
  $('#playpausebutton').css({
    "opacity":0.5,
    "pointer-events":"none"
  });

}

function screenchangePhase() {
 
  phaseAngleGraph();
  
}

function screenchangeMag() {
  magnitudeGraph();
  // page1=false;
  // page2=false;
  // page3=true;
  // runPage3();
  graphStep += 1;
 
  document.querySelector(".graph-two").classList.add("display-hide");
  document.querySelector(".graph-div span").textContent = "Prev";

}

function screenChangePrevious() {
  graphStep -= 1;
  if (graphStep > 0) {
    phaseAngleGraph();
    $('#playpausebutton').css({
      "opacity":0.5,
      "pointer-events":"none"
    });
    document.querySelector(".graph-two").classList.remove("display-hide");
    document.querySelector(".graph-div span").textContent = "Prev/Next";
    console.log("a");
    // page1 = true;
    // page2 = false;
    // page3 = false;
    // runPage1();
  } 
  
  else {
    document.querySelector(".graph-div span").textContent = "";
    document.querySelector(".graph-button").style.display = "flex";
    document.querySelector(".graph-one").classList.add("display-hide");
    document.querySelector(".graph-two").classList.add("display-hide"); 
    console.log("b");
     $('#playpausebutton').css({
      "opacity":1,
      "pointer-events":"auto"
    });

    page1 = true;
    page2 = false;
    page3 = false;
    runPage1();
    // console.log("page2")


    document.querySelector(".graph-zero").classList.remove("display-hide");
    document.querySelector(".graph-button span").textContent = "Next";
    //  document.querySelector(".graph-button").classList.remove("display-hide");
    document.querySelector(".graph-div").classList.add("display-hide");
  }
}

function phaseAngleGraph() {
  // resetGraphs();
  page1 = false;
  page2 = true;
  page3 = false;
  runPage2();
  $('#playpausebutton').css({
    "opacity":0.5,
    "pointer-events":"none"
  });

  magFac1.initialise();
  // phaseAng.initialise();
}

function magnitudeGraph() {
  // resetGraphs();
  page1 = false;
  page2 = false;
  page3 = true;
  runPage3();
  $('#playpausebutton').css({
    "opacity":0.5,
    "pointer-events":"none"
  });
console.log("SECOND")
  magFac2.initialise();
  // phaseAng.initialise();
}
function mousePressed() {
 
}
