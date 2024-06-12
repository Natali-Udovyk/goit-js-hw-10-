// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";
// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

let userSelectedDate;
let picker;
const button = document.querySelector('[data-start]');
button.disabled = true;
button.addEventListener('click', ()=> {
    // Clear any existing timer
    if (userSelectedDate) {
        startCountdown(userSelectedDate);
    }
})
function startCountdown(targetDate) {
    const timerElement = document.querySelector('.timer');

    function updateTimer() {
        const now = new Date();
        const timeRemaining = userSelectedDate - now;

        if (timeRemaining <= 0) {
            clearInterval(interval);
            timerElement.textContent = "Час вичерпано!";
            return;
        }
        const time = convertMs(timeRemaining);
        
timerElement.innerHTML = `<div class = "timer-2" ><span class="days">${addLeadingZero(time.days)}</span><span class='calendar'>days</span></div><div class = "timer-2" ><span class="hours">${addLeadingZero(time.hours)}</span><span class='calendar'>hours</span></div><div class = "timer-2" ><span class="minutes">${addLeadingZero(time.minutes)}</span><span class='calendar'>minutes</span></div><div class = "timer-2" ><span class="seconds">${addLeadingZero(time.seconds)}</span><span class='calendar'>seconds</span></div>`;
        
        // Встановлення дати/часу
        picker.setDate(new Date(Date.now() + timeRemaining));
    }
    updateTimer();
    const interval = setInterval(updateTimer, 1000);
}


const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);
       userSelectedDate = selectedDates[0]; 
  if(userSelectedDate < new Date()){
   
    iziToast.error({message: "Please choose a date in the future"})
  button.disabled = true; 
 } else {
    button.disabled = false;
 }
    },
  };
  picker = flatpickr("#datetime-picker", options);
//   flatpickr('#datetime-picker', options);
  

    function convertMs(ms) {
        // Number of milliseconds per unit of time
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;
      
        // Remaining days
        const days = Math.floor(ms / day);
        // Remaining hours
        const hours = Math.floor((ms % day) / hour);
        // Remaining minutes
        const minutes = Math.floor(((ms % day) % hour) / minute);
        // Remaining seconds
        const seconds = Math.floor((((ms % day) % hour) % minute) / second);
      
        return { days, hours, minutes, seconds };
      }
      function addLeadingZero(value){
        return String(value).padStart(2,'0')
      }
   
  
  console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
  console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
  console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
  