import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f,i as h}from"./assets/vendor-77e16229.js";let a,l;const o=document.querySelector("[data-start]");o.disabled=!0;o.addEventListener("click",()=>{a&&v()});function v(e){const c=document.querySelector(".timer");function i(){const n=a-new Date;if(n<=0){clearInterval(d),c.textContent="Час вичерпано!";return}const t=r(n);c.innerHTML=`<div class = "timer-2" ><span class="days">${s(t.days)}</span><span class='calendar'>days</span></div><div class = "timer-2" ><span class="hours">${s(t.hours)}</span><span class='calendar'>hours</span></div><div class = "timer-2" ><span class="minutes">${s(t.minutes)}</span><span class='calendar'>minutes</span></div><div class = "timer-2" ><span class="seconds">${s(t.seconds)}</span><span class='calendar'>seconds</span></div>`,l.setDate(new Date(Date.now()+n))}i();const d=setInterval(i,1e3)}const y={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){console.log(e[0]),a=e[0],a<new Date?(h.error({message:"Please choose a date in the future"}),o.disabled=!0):o.disabled=!1}};l=f("#datetime-picker",y);function r(e){const n=Math.floor(e/864e5),t=Math.floor(e%864e5/36e5),m=Math.floor(e%864e5%36e5/6e4),p=Math.floor(e%864e5%36e5%6e4/1e3);return{days:n,hours:t,minutes:m,seconds:p}}function s(e){return String(e).padStart(2,"0")}console.log(r(2e3));console.log(r(14e4));console.log(r(2414e4));
//# sourceMappingURL=commonHelpers.js.map
