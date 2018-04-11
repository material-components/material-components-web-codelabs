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
shippingForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  alert('Success!');
});
