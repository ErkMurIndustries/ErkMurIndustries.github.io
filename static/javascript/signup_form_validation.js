/* Signup Form Validation scripts */
// Get DOM elements
const emailInput = document.getElementById("email");
const emailErrorMessage = document.getElementById("email-error-message");


emailInput.addEventListener("input", function() {
  emailErrorMessage.style=""
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailPattern.test(emailInput.value)) {
    emailErrorMessage.textContent = ""; // clear error message if email is valid
    check_database_for_email(emailInput.value)
  } else {
    emailErrorMessage.textContent = "Please enter a valid email address";
  }
});


function check_database_for_email(email) {
    fetch(`/check_email?email=${encodeURIComponent(email)}`)
    .then(response => response.json())
    .then(data => {
      if (data.exists) {
        emailErrorMessage.textContent = "Email is already in use";
        emailErrorMessage.style = 'background-color: yellow;'
      } else {
        emailErrorMessage.textContent = "";
      }
    });
}
