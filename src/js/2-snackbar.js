// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";


let form = document.querySelector('form');
let delayInput = form.querySelector('input[name="delay"]');
let radioButtons = form.querySelectorAll('input[type="radio"]');

form.addEventListener('submit', function(event) {

  event.preventDefault();


  let delay = Number(delayInput.value);
  let selectedRadioButton = Array.from(radioButtons).find(radioButton => radioButton.checked);
  // Створюємо обіцянку
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (selectedRadioButton.value === 'fulfilled') {
        resolve(`Fulfilled promise in ${delay}ms`);
      } else {
        reject(`Rejected promise in ${delay}ms`);
      }
    }, delay);
  });

  promise
  .then(value => {
      
      iziToast.success({
        title: 'Success',
        message: value,
      });
    },
    error => {
      
      iziToast.error({
        title: 'Error',
        message: error,
      });
    }
  );
  delayInput.value = '';
  radioButtons.forEach(radioButton => {
    radioButton.checked = false;
  });
});