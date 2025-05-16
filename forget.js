document.getElementById('forgotForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const mobile = document.getElementById('mobile').value.trim();
  const error = document.getElementById('error');

  // Basic validation for 10-digit mobile number
  if (!/^\d{10}$/.test(mobile)) {
    error.textContent = "Please enter a valid 10-digit mobile number.";
    return;
  }

  // Clear error and redirect
  error.textContent = "";
  alert("Reset link sent to your mobile number!");
  window.location.href = "otp.html";
});
