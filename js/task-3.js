const textInput = document.querySelector("#name-input");

const output = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
    let trimmedValue = event.currentTarget.value.trim();
     output.textContent = trimmedValue.length > 0 ? trimmedValue : "Anonymous";
 });