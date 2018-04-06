const shippingForm = document.querySelector('#crane-shipping-form');
const zipCodeInput = document.querySelector('#crane-zip-code-input');

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
  alert('Success!');
}

function handleInvalidZipCode() {
  zipCodeInput.setCustomValidity('Please enter a valid 5-digit ZIP code (e.g., 94043)');

  setTimeout(() => {
    // TODO(acdvorak): Which browsers do we support?
    // Cross-browser alternative (less elegant): https://stackoverflow.com/a/11867013/467582
    shippingForm.reportValidity();
  });
}

function hideZipCodeValidationMessage() {
  zipCodeInput.setCustomValidity('');
}
