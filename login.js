document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!email || !password) {
    alert("Please fill out all fields.");
    return;
  }

  // Simulated login logic
  if (email === "test@example.com" && password === "123456") {
    alert("Login successful!");
    window.location.href = "dashboard.html"; // redirect to dashboard or homepage
  } else {
    alert("Invalid email or password.");
  }
});
