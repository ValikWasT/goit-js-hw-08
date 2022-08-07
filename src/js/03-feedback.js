var throttle = require('lodash.throttle');

const onFormInput = document.querySelector('.feedback-form');
const onEmailInput = document.querySelector('#email');
const onMessageInput = document.querySelector('#message');
const LOCALSTORAGE_KEY = 'feedback-form-state';

let formValue = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));

if (formValue === null) {
  formValue = {};
}

savedValues();

onFormInput.addEventListener('input', throttle(onInput, 500));
onFormInput.addEventListener('submit', onFormSubmit);

function onInput(e) {
  formValue[e.target.name] = e.target.value;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formValue));
  console.log(formValue);
}

function savedValues() {
  if (formValue.email) {
    onEmailInput.value = formValue.email;
  } else {
    onEmailInput.value = '';
  }
  if (formValue.message) {
    onMessageInput.value = formValue.message;
  } else {
    onMessageInput.value = '';
  }
}

function onFormSubmit(e) {
  e.preventDefault();
  console.log(JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)));
  e.currentTarget.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
}
