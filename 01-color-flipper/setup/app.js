const colors = ["green", "red", "blue", "orange", "purple"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
    const newColor = colors[randomNumber];
  document.body.style.backgroundColor = newColor;
  color.textContent = newColor;
  color.style.color = newColor;// Cambia el color del texto del span
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}