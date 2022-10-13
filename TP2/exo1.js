var sat = document.getElementById("start");
var but = document.getElementById("end");
var moss = document.getElementById("maze");
var boundaries = document.querySelectorAll(".boundary");
var stclick = false;
var mousecur = false;

moss.addEventListener('"mouseenter"', function outofdiv() {
  mousecur = false;
});
sat.addEventListener("click", function start() {
  console.log("element clicked 1");
  for (var i = 0; i < boundaries.length; i++) {
    console.log("element clicked3");
    boundaries[i].onmouseover = changecolor;
    boundaries[i].onmousleave = changecolor;
  }
  mousecur = true;
  stclick = true;
  ondiv = true;
});

function changecolor() {
  stclick = false;
  var x = document.querySelector('[id="boundary1"]');
  x.style.backgroundColor = "red";
}
