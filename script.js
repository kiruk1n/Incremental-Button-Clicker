var score = 0;
var upgradeCost = 10;
var clickValue = 1;

function clickButton() {
  score += clickValue;
  document.getElementById("score").innerHTML = score;
}

function buyUpgrade() {
  if (score >= upgradeCost) {
    score -= upgradeCost;
    document.getElementById("score").innerHTML = score;
    clickValue++;
    upgradeCost *= 2;
    document.getElementById("upgradeCost").innerHTML = upgradeCost;
  }
}

document.getElementById("clickBtn").addEventListener("click", clickButton);
document.getElementById("upgradeBtn").addEventListener("click", buyUpgrade);
