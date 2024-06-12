const experiments = [
  {
    title: "Free Vibration Analysis of Two Degree of Freedom System",
    path: "exp-free-vibration-analysis-nitk",
    number: 1,
  },
  {
    title: "Impulse Response Analysis of Two Degree of Freedom System",
    path: "exp-impulse-response-analysis-nitk",
    number: 2,
  },
  {
    title: "Tuned Dynamic Vibration Absorber",
    path: "exp-tuned-dynamic-vibration-absorber-nitk",
    number: 3,
  },
  {
    title:
      "Motor on a Foundation as a Two Degree of Freedom System - Free vibration",
    path: "exp-two-degree-freedom-system-nitk",
    number: 4,
  },
  {
    title:
      "Motor on a Foundation as a Two Degree of Freedom System-Forced vibration with rotating unbalance",
    path: "exp-freedom-system-forced-vibration-nitk",
    number: 5,
  },
  {
    title: "Forging hammer as a Two Degree of Freedom System - Free vibration",
    path: "exp-forging-hammer-nitk",
    number: 6,
  },
  {
    title:
      "Forging hammer as a Two Degree of Freedom System - Impulse excitation",
    path: "exp-forging-hammer-impulse-excitation-nitk",
    number: 7,
  },
  {
    title:
      "Automotive vehicle as a Two Degree of Freedom System - Static and Dynamics coupling",
    path: "exp-static-dynamics-coupling-nitk",
    number: 8,
  },
  {
    title: "Torsional System of Two Degree of Freedom",
    path: "exp-torsional-system-nitk",
    number: 9,
  },
  {
    title: "Compound Pendulum",
    path: "exp-compound-pendulum-nitk",
    number: 10,
  },
];
const row = document.querySelector(".row");
const search = document.querySelector(".search");
search.addEventListener("input", (e) => seachExperiments(e));

function seachExperiments(e) {
  e.preventDefault();
  const searchedExperiments = experiments.filter((exp) =>
    exp.title.toLowerCase().includes(e.target.value.toLowerCase())
  );
  displayExperiments(searchedExperiments);
}

function displayExperiments(expts = experiments) {
  row.innerHTML = "";
  expts.map((experiment, index) => {
    row.innerHTML += `
     <a href=${experiment.path} class="col" target="_blank"
            >${experiment.title}
            <span class='number'>${experiment.number}</span></a
          >
    `;
  });
}

displayExperiments();
