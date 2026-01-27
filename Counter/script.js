var decreaseButton = document.getElementById("dec");
var increaseButton = document.getElementById("inc");
var decreaseButton10 = document.getElementById("dec10");
var increaseButton10 = document.getElementById("inc10");
var counterDisplay = document.getElementById("value");

var counter = 0;

decreaseButton.addEventListener("click", function () {
  counter -= 1;
  counterDisplay.innerHTML = counter;
});

increaseButton.addEventListener("click", function () {
  counter += 1;
  counterDisplay.innerHTML = counter;
});

decreaseButton10.addEventListener("click", function () {
  counter -= 10;
  counterDisplay.innerHTML = counter;
});

increaseButton10.addEventListener("click", function () {
  counter += 10;
  counterDisplay.innerHTML = counter;
});
