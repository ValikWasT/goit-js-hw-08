var throttle = require('lodash.throttle');

const onEmailInput = document.querySelector('#email');
const onMessageInput = document.querySelector('#message');
const onBtnSubmit = document.querySelector('.feedback-form');

const formValue = {
  email: '',
  message: '',
};

try {
  const storageValue = JSON.parse(localStorage.getItem('feedback-form-state'));
  onEmailInput.value = storageValue.email;
  onMessageInput.value = storageValue.message;
} catch (error) {
  console.log(error.name);
}

onEmailInput.addEventListener(
  'input',
  throttle(e => {
    formValue.email = e.target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(formValue));
  }, 500)
);

onMessageInput.addEventListener(
  'input',
  throttle(e => {
    formValue.message = e.target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(formValue));
  }, 500)
);

onBtnSubmit.addEventListener('submit', e => {
  e.preventDefault();
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  onBtnSubmit.reset();
  localStorage.clear();
});
