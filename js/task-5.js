function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const buttonChenge = document.querySelector(".change-color");

const chengeColor = (click) => {
  const body =  document.querySelector("body");
  const colorBody = getRandomHexColor();
  body.style = `background-color: ${colorBody}`;
  const colorSpan = document.querySelector(".color");
  colorSpan.textContent = colorBody;
}

buttonChenge.addEventListener("click", chengeColor);