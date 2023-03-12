const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const year = document.getElementById("year");
const month = document.getElementById("month");
const currentYear = new Date().getFullYear()




const newYearTime = new Date(`january 01 ${currentYear + 1} 00:00:00`)
// console.log(newYearTime)
 const different = newYearTime - currentYear
// console.log(different)


const d = Math.floor(different/1000/60/60/24)
const m = Math.floor(different/1000/60/60) % 24
console.log(m)

// console.log(currentYear)
function App() {

  const date = new Date();
  month.innerHTML = date.getMonth() + 1;
  year.innerHTML = date.getFullYear();
  days.innerHTML = date.getDate();
  hours.innerHTML = date.getHours();
  minutes.innerHTML = date.getMinutes();
  seconds.innerHTML = date.getSeconds();
}

setInterval(() => {
  App();
}, 1000);
