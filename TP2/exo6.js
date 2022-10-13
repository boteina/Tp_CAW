var sat = document.getElementById("start");
var but = document.getElementById("end");
var moss = document.getElementById("maze");
var boundaries = document.querySelectorAll(".boundary");
var alerted = false;
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
  var x = document.getElementsByClassName("boundary");
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].style.backgroundColor = "#eeeeee";
  }
  if (alerted == true) {
    window.alerted = false;
  }
});
var news = document.querySelector('[id="status"]');
but.addEventListener("click", function end() {
  if (stclick && mousecur) {
    news.textContent = "You win! :)";
  }
});

function changecolor() {
  stclick = false;

  var x = document.getElementsByClassName("boundary");
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].style.backgroundColor = "red";
  }
  news.textContent = "You lost! :(";
}
