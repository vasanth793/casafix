// Automatically move to next input
const inputs = document.querySelectorAll('.otp-input input');

inputs.forEach((input, index) => {
  input.addEventListener('input', () => {
    if (input.value && index < inputs.length - 1) {
      inputs[index + 1].focus();
    }
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === "Backspace" && input.value === '' && index > 0) {
      inputs[index - 1].focus();
    }
  });
});

// OTP verification (dummy)
function verifyOTP() {
  const otp = Array.from(inputs).map(input => input.value).join('');
  const message = document.getElementById('message');

  if (otp.length === 4 && /^\d{4}$/.test(otp)) {
    message.textContent = "OTP Verified Successfully!";
    message.style.color = "green";
  } else {
    message.textContent = "Invalid OTP. Please try again.";
    message.style.color = "red";
  }
}
