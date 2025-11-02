const DecreaseBtn = document.getElementById("decreaseBtn");
const ResetBtn = document.getElementById("resetBtn");
const IncreaseBtn = document.getElementById("increaseBtn");
const CountLabel = document.getElementById("Countlabel");
let count = 0;

DecreaseBtn.onclick = function() {
  count--;
  CountLabel.textContent = count;
}
ResetBtn.onclick = function() {
  count = 0;
  CountLabel.textContent = count;
}
IncreaseBtn.onclick = function() {
  count++;
  CountLabel.textContent = count;
}
