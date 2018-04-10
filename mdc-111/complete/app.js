const MDCRipple = require('@material/ripple').MDCRipple;
const MDCSelect = require('@material/select').MDCSelect;
const MDCTextField = require('@material/textfield').MDCTextField;

const buttonElements = [].slice.call(document.querySelectorAll('.mdc-button'));
buttonElements.forEach((buttonEl) => {
  MDCRipple.attachTo(buttonEl);
});

const selectElements = [].slice.call(document.querySelectorAll('.mdc-select'));
selectElements.forEach((selectEl) => {
  MDCSelect.attachTo(selectEl);
});

const textFieldElements = [].slice.call(document.querySelectorAll('.mdc-text-field'));
textFieldElements.forEach((textFieldEl) => {
  MDCTextField.attachTo(textFieldEl);
});

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
