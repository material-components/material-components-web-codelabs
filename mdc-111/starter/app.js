const shippingForm = document.querySelector('#crane-shipping-form');
const zipCodeInput = document.querySelector('#crane-zip-code-input');
const submitButton = document.querySelector('#crane-submit-button');

shippingForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  if (/^[0-9]{5}$/.test(zipCodeInput.value)) {
    handleValidZipCode();
  } else {
    handleInvalidZipCode();
  }
});

zipCodeInput.addEventListener('input', hideZipCodeValidationMessage);

function handleValidZipCode() {
  hideZipCodeValidationMessage();
  alert('Success!');
}

function handleInvalidZipCode() {
  zipCodeInput.setCustomValidity('Please enter a valid 5-digit ZIP code (e.g., 94043)');

  setTimeout(() => {
    submitButton.click();
  });
}

function hideZipCodeValidationMessage() {
  zipCodeInput.setCustomValidity('');
}
