
function startsim() {
  console.log(1); 
}

// switches state of simulation between 0:Playing & 1:Paused

function varinit() {
  varchange();

  $("#fSlider").slider("value", 0.08);
  $("#fSpinner").spinner("value", 0.08);

  $("#omegaSlider").slider("value", 0.08);
  $("#omegaSpinner").spinner("value", 0.08);

  $("#k1Slider").slider("value", 30);
  $("#k1Spinner").spinner("value", 30);

  $("#m1Slider").slider("value", 40);
  $("#m1Spinner").spinner("value", 40);

  $("#k2Slider").slider("value", 40);
  $("#k2Spinner").spinner("value", 40);

  $("#m2Slider").slider("value", 40);
  $("#m2Spinner").spinner("value", 40);
}

function varchange() {
  //Link AB
  // slider initialisation : jQuery widget
  $("#fSlider").slider({ max: 0.13, min: 0.050, step: 0.001 });

  // number initialisation : jQuery widget
  $("#fSpinner").spinner({ max: 0.13, min: 0.050, step: 0.001 });
  // monitoring change in value and connecting slider and number
  // setting trace point coordinate arrays to empty on change of link length
  $("#fSlider").on("slide", function (c, ui) {
    $("#fSpinner").spinner("value", ui.value);
    ptx = [];
    pty = [];
  });
  $("#fSpinner").on("spin", function (c, ui) {
    $("#fSlider").slider("value", ui.value);
    ptx = [];
    pty = [];
  });
  $("#fSpinner").on("change", function () {
    varchange();
  });

  $("#omegaSlider").slider({ max: 0.13, min: 0.050, step: 0.001 });

  // number initialisation : jQuery widget
  $("#omegaSpinner").spinner({ max: 0.13, min: 0.050, step: 0.001 });
  // monitoring change in value and connecting slider and number
  // setting trace point coordinate arrays to empty on change of link length
  $("#omegaSlider").on("slide", function (c, ui) {
    $("#omegaSpinner").spinner("value", ui.value);
    ptx = [];
    pty = [];
  });
  $("#omegaSpinner").on("spin", function (c, ui) {
    $("#omegaSlider").slider("value", ui.value);
    ptx = [];
    pty = [];
  });
  $("#omegaSpinner").on("change", function () {
    varchange();
  });

  $("#k1Slider").slider({ max: 60, min: 10, step: 1 });
  // number initialisation : jQuery widget
  $("#k1Spinner").spinner({ max: 60, min: 10, step: 1 });
  // monitoring change in value and connecting slider and number
  // setting trace point coordinate arrays to empty on change of link length
  $("#k1Slider").on("slide", function (c, ui) {
    $("#k1Spinner").spinner("value", ui.value);
    ptx = [];
    pty = [];
  });
  $("#k1Spinner").on("spin", function (c, ui) {
    $("#k1Slider").slider("value", ui.value);
    ptx = [];
    pty = [];
  });
  $("#k1Spinner").on("change", function () {
    varchange();
  });

  $("#m1Slider").slider({ max: 60, min: 25, step: 1 });
  // number initialisation : jQuery widget
  $("#m1Spinner").spinner({ max: 60, min: 25, step: 1 });
  // monitoring change in value and connecting slider and number
  // setting trace point coordinate arrays to empty on change of linm length
  $("#m1Slider").on("slide", function (c, ui) {
    $("#m1Spinner").spinner("value", ui.value);
    ptx = [];
    pty = [];
  });
  $("#m1Spinner").on("spin", function (c, ui) {
    $("#m1Slider").slider("value", ui.value);
    ptx = [];
    pty = [];
  });
  $("#m1Spinner").on("change", function () {
    varchange();
  });

  $("#k2Slider").slider({ max: 60, min: 10, step: 1 });
  // number initialisation : jQuery widget
  $("#k2Spinner").spinner({ max: 60, min: 10, step: 1 });
  // monitoring change in value and connecting slider and number
  // setting trace point coordinate arrays to empty on change of link length
  $("#k2Slider").on("slide", function (c, ui) {
    $("#k2Spinner").spinner("value", ui.value);
    ptx = [];
    pty = [];
  });
  $("#k2Spinner").on("spin", function (c, ui) {
    $("#k2Slider").slider("value", ui.value);
    ptx = [];
    pty = [];
  });
  $("#k2Spinner").on("change", function () {
    varchange();
  });

  $("#m2Slider").slider({ max: 60, min: 25, step: 1 });
  // number initialisation : jQuery widget
  $("#m2Spinner").spinner({ max: 60, min: 25, step: 1 });
  // monitoring change in value and connecting slider and number
  // setting trace point coordinate arrays to empty on change of linm length
  $("#m2Slider").on("slide", function (c, ui) {
    $("#m2Spinner").spinner("value", ui.value);
    ptx = [];
    pty = [];
  });
  $("#m2Spinner").on("spin", function (c, ui) {
    $("#m2Slider").slider("value", ui.value);
    ptx = [];
    pty = [];
  });
  $("#m2Spinner").on("change", function () {
    varchange();
  });

  varupdate();
}

function varupdate() {
  $("#fSlider").slider("value", $("#fSpinner").spinner("value"));
  $("#omegaSlider").slider("value", $("#omegaSpinner").spinner("value"));
  $("#k1Slider").slider("value", $("#k1Spinner").spinner("value"));
  $("#m1Slider").slider("value", $("#m1Spinner").spinner("value"));
  $("#k2Slider").slider("value", $("#k2Spinner").spinner("value"));
  $("#m2Slider").slider("value", $("#m2Spinner").spinner("value"));
  l1 = $("#fSpinner").spinner("value");
  l2 = $("#omegaSpinner").spinner("value");
  a1 = $("#k1Spinner").spinner("value");
  m1 = $("#m1Spinner").spinner("value");
  a2 = $("#k2Spinner").spinner("value");
  m2 = $("#m2Spinner").spinner("value");

}
