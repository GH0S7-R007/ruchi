function login(event) {
  event.preventDefault(); // prevent the default form submission behavior

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Check if username and password are correct
  if (username === "vishnu" && password === "237620") {
    // Login successful, show chat window
    document.getElementById("chat-window").style.display = "block";

    // Save username in a variable
    window.currentUser = "vishnu";
  } else if (username === "aswani" && password === "237620") {
    // Login successful, show chat window
    document.getElementById("chat-window").style.display = "block";

    // Save username in a variable
    window.currentUser = "aswani";
  } else {
    document.getElementById("message").innerHTML = "Invalid username or password";
  }
}

function sendMessage(event) {
  event.preventDefault(); // prevent the default form submission behavior

  const message = document.getElementById("message").value;

  // Create a new message element
  const messageElement = document.createElement("div");
  messageElement.innerHTML = "<strong>" + window.currentUser + ":</strong> " + message;

  // Add the message element to the chat window
  const chatWindow = document.getElementById("chat-window");
  chatWindow.appendChild(messageElement);

  // Clear the message input box
  document.getElementById("message").value = "";
}

const form = document.querySelector("form");
form.addEventListener("submit", sendMessage); // attach the event listener to the form submit event

const loginForm = document.querySelector("form:first-of-type");
loginForm.addEventListener("submit", login); // attach the event listener to the login form submit event
