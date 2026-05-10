let form = document.querySelector('form');
let submitButton = document.getElementById('submit_button');
let fullName = document.getElementById('fullname');
let email = document.getElementById('email');
let password = document.getElementById('password');
let confirmPassword = document.getElementById('confirm_password');
let age = document.getElementById('age');

const validForm = {
  fullname: false,
  email: false,
  password: false,
  confirmPassword: false,
  age: false,
};

// Event listeners
fullName.addEventListener('blur', validateName);
email.addEventListener('blur', validateEmail);
password.addEventListener('blur', validatePassword);
confirmPassword.addEventListener('blur', validateConfirmPassword);
age.addEventListener('blur', validateAge);

// Helper function
function toggleValidation(input, isValid) {
  if (isValid) {
    input.classList.add('valid');
    input.classList.remove('invalid');
  } else {
    input.classList.add('invalid');
    input.classList.remove('valid');
  }
}

// Validate Name
function validateName() {
  const isValid = fullName.value.trim().length > 2;

  validForm.fullname = isValid;

  toggleValidation(fullName, isValid);

  if (!isValid) {
    alert('Full name must be greater than 2 characters');
  }

  checkFormValidity();
}

// Validate Email
function validateEmail() {
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  const isValid = emailPattern.test(email.value);

  validForm.email = isValid;

  toggleValidation(email, isValid);

  if (!isValid) {
    alert('Enter a valid email');
  }

  checkFormValidity();
}

// Validate Password
function validatePassword() {
  const passwordRegex =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const isValid = passwordRegex.test(password.value);

  validForm.password = isValid;

  toggleValidation(password, isValid);

  if (!isValid) {
    alert(
      'Password must be 8 characters, with one uppercase letter, one number, and one special character',
    );
  }

  checkFormValidity();
}

// Confirm Password
function validateConfirmPassword() {
  const isValid = password.value === confirmPassword.value;

  validForm.confirmPassword = isValid;

  toggleValidation(confirmPassword, isValid);

  if (!isValid) {
    alert('Passwords must match');
  }

  checkFormValidity();
}

// Validate Age
function validateAge() {
  const isValid = +age.value >= 18;

  validForm.age = isValid;

  toggleValidation(age, isValid);

  if (!isValid) {
    alert('Age must be 18 or above');
  }

  checkFormValidity();
}

// Centralized form validity checker
function checkFormValidity() {
  const allValid = Object.values(validForm).every(Boolean);

  console.log(validForm);
  console.log('Form Valid:', allValid);

  // Example:
  submitButton.disabled = !allValid;
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  alert('User successfully register');
  e.target.reset();
});
