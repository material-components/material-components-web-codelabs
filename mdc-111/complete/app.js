const shippingForm = document.querySelector('#crane-shipping-form');
shippingForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  alert('Success!');
});

const MDCRipple = require('@material/ripple').MDCRipple;
const MDCSelect = require('@material/select').MDCSelect;
const MDCTextField = require('@material/textfield').MDCTextField;

MDCRipple.attachTo(document.querySelector('.mdc-button'));
MDCSelect.attachTo(document.querySelector('.mdc-select'));

const textFieldElements = [].slice.call(document.querySelectorAll('.mdc-text-field'));
textFieldElements.forEach((textFieldEl) => {
  MDCTextField.attachTo(textFieldEl);
});
