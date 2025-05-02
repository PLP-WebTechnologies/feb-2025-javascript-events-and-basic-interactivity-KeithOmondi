// Button click event
const button = document.getElementById("button");
button.addEventListener("click", function() {
  alert("Button was clicked!");
  button.textContent = "Clicked!";
  button.style.backgroundColor = "lightgreen";
});

// Hover effect for image
const image = document.getElementById("image");
image.addEventListener("mouseover", function() {
  image.style.border = "2px solid red";
});
image.addEventListener("mouseout", function() {
  image.style.border = "none";
});

// Keypress detection
document.addEventListener("keypress", function(event) {
  console.log(`Key pressed: ${event.key}`);
});

// Bonus: Double-click or long press (secret action)
let pressTimer;
image.addEventListener("mousedown", function(event) {
  pressTimer = setTimeout(() => {
    alert("Long press detected!");
  }, 1000); // 1-second long press
});

image.addEventListener("mouseup", function() {
  clearTimeout(pressTimer);
});

image.addEventListener("dblclick", function() {
  alert("Double-clicked on the image!");
});

// Form validation
const form = document.getElementById("form");
form.addEventListener("submit", function(event) {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  
  // Basic email format check
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    event.preventDefault();
  }

  // Password rule: min 8 characters
  if (password.length < 8) {
    alert("Password must be at least 8 characters.");
    event.preventDefault();
  }
});

// Real-time password feedback
const passwordField = document.getElementById("password");
const passwordError = document.getElementById("passwordError");
passwordField.addEventListener("input", function() {
  if (passwordField.value.length < 8) {
    passwordError.textContent = "Password must be at least 8 characters.";
  } else {
    passwordError.textContent = "";
  }
});
