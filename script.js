const root = document.getElementById("root");
const bomb = document.getElementById("bomb");
const present = document.getElementById("present");
const explosionSound = new Audio("./audio/explosion.mp3");
const screamSound = new Audio("./audio/scream.mp3");

present.addEventListener("click", startAnimation);

function startAnimation() {
  present.style.animation = "byepresent 3s";
  setTimeout(() => {
    present.style.display = "none";
  }, 2900);
  setTimeout(() => {
    bomb.textContent = "💥";
    explosionSound.play();
  }, 4500);
  bomb.style.animation = "explosion 1s 4.5s";
  setTimeout(() => {
    bomb.textContent = "☠️";
    screamSound.play();
    bomb.style.fontSize = "500px";
    root.style.backgroundColor = "black";
  }, 5450);
}
