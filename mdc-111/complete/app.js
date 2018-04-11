const MDCRipple = require('@material/ripple').MDCRipple;
const MDCSelect = require('@material/select').MDCSelect;
const MDCTextField = require('@material/textfield').MDCTextField;

const shippingForm = document.querySelector('#crane-shipping-form');

shippingForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  alert('Success!');
});

const buttonElements = [].slice.call(document.querySelectorAll('.crane-button'));
buttonElements.forEach((buttonEl) => {
  MDCRipple.attachTo(buttonEl);
});

const selectElements = [].slice.call(document.querySelectorAll('.crane-select'));
selectElements.forEach((selectEl) => {
  MDCSelect.attachTo(selectEl);
  const nativeEl = selectEl.querySelector('.crane-select__native-control');

  ['input', 'blur'].forEach((eventName) => {
    nativeEl.addEventListener(eventName, () => checkSelectValidity(selectEl));
  });

  nativeEl.addEventListener('invalid', (evt) => evt.preventDefault());
});

const textFieldElements = [].slice.call(document.querySelectorAll('.crane-text-field'));
textFieldElements.forEach((textFieldEl) => {
  const tf = MDCTextField.attachTo(textFieldEl);
  const nativeEl = textFieldEl.querySelector('.crane-text-field__input');

  ['input', 'blur'].forEach((eventName) => {
    nativeEl.addEventListener(eventName, () => checkTextFieldValidity(textFieldEl, tf));
  });

  nativeEl.addEventListener('invalid', (evt) => evt.preventDefault());
});

function checkSelectValidity(selectEl) {
  const nativeEl = selectEl.querySelector('.crane-select__native-control');
  const helperEl = selectEl.parentElement.querySelector('.crane-helper-text');

  if (nativeEl.checkValidity()) {
    selectEl.classList.remove('crane-select--invalid');
    helperEl.classList.remove('crane-helper-text--showing');
  } else {
    selectEl.classList.add('crane-select--invalid');
    helperEl.classList.add('crane-helper-text--showing');
  }
}

function checkTextFieldValidity(textFieldEl, tf) {
  const nativeEl = textFieldEl.querySelector('.crane-text-field__input');
  const helperEl = textFieldEl.parentElement.querySelector('.crane-helper-text');

  if (nativeEl.checkValidity()) {
    helperEl.classList.remove('crane-helper-text--showing');
    tf.valid = true;
  } else {
    helperEl.classList.add('crane-helper-text--showing');
    tf.valid = false;
  }
}
