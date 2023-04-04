function login(event) {
  event.preventDefault(); // prevent the default form submission behavior

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Check if username and password are correct
  if (username === "vishnu" && password === "237620") {
    document.getElementById("message").innerHTML = "Login successful!";
    const chatInput = document.createElement("input");
    chatInput.setAttribute("type", "text");
    chatInput.setAttribute("id", "chat-input");
    document.body.appendChild(chatInput);
  } else if (username === "aswani" && password === "237620") {
    document.getElementById("message").innerHTML = "Login successful!";
    const chatInput = document.createElement("input");
    chatInput.setAttribute("type", "text");
    chatInput.setAttribute("id", "chat-input");
    document.body.appendChild(chatInput);
  } else {
    document.getElementById("message").innerHTML = "Invalid username or password";
  }
}

const form = document.querySelector("form");
form.addEventListener("submit", login); // attach the event listener to the form submit event
