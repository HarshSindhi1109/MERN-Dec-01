document.getElementById('myForm').addEventListener('submit', (e) => {
  let isValid = true;

  // Name Validation
  let name = document.getElementById('name').value.trim();
  if (name.length < 3) {
    document.getElementById('nameError').textContent =
      'Name must contain at least 3 characters.';
    isValid = false;
  } else {
    document.getElementById('nameError').textContent = '';
  }

  // Email Validation
  let email = document.getElementById('email').value.trim();
  let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!emailPattern.test(email)) {
    document.getElementById('emailError').textContent =
      'Enter valid email address';
    isValid = false;
  } else {
    document.getElementById('emailError').textContent = '';
  }

  // Password Validation
  let password = document.getElementById('password').value.trim();

  if (password.length < 6) {
    document.getElementById('passwordError').textContent =
      'Password must be greater than 6 characters long.';
    isValid = false;
  } else {
    document.getElementById('passwordError').textContent = '';
  }

  // Phone Validation
  let phone = document.getElementById('phone').value.trim();
  let phonePattern = /^\d{10}$/;

  if (!phonePattern.test(phone)) {
    document.getElementById('phoneError').textContent =
      'Enter a valid phone number';
    isValid = false;
  } else {
    document.getElementById('phoneError').textContent = '';
  }

  if (!isValid) {
    e.preventDefault();
  }
});
