const registerForm = document.querySelector(".login-form");

registerForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const registerForm = event.target;
  const email = registerForm.email.value.trim();
  const password = registerForm.password.value.trim();
  
  if (email === "" || password === "") {
    return alert("All form fields must be filled in");
  }
    const user = {
        email,
        password,
    };
  console.log(user);
  registerForm.reset();
}