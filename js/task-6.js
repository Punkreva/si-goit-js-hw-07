function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("input");

const btnCreate = document.querySelector('button[data-create]');

const btnDstroy = document.querySelector('button[data-destroy]');

input.addEventListener("input", (event) => {
  
  const inputNum = event.currentTarget.value;
  
  btnCreate.addEventListener("click", () => {
  
    if (inputNum >= 1 && inputNum <= 100) {
      boxes.innerHTML = "";
      let boxsize = 30;

    for (let i = 0; i < inputNum; i++) { 
      let div = `<div style = "width: ${boxsize}px; height: ${boxsize}px; background-color: ${getRandomHexColor()}"></div>`;
      boxes.insertAdjacentHTML("beforeend", div);
      boxsize += 10;
    }
  } else {
  boxes.innerHTML = "";
}
  }); 
});

btnDstroy.addEventListener("click", () => {
  boxes.innerHTML = "";
});