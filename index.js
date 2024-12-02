
countdown();
let timer = setInterval(countdown, 1000);

function countdown(){

    let todayDate = new Date();

    //dynamically get new year
    let nextYear = todayDate.getFullYear() + 1;
    document.getElementById("newYear").textContent = nextYear;

    //Dynamically get new years full date
    const newYearDate = new Date(nextYear, 0, 1);
    
    let difference = newYearDate - todayDate; //output in milliseconds

    let difDays = difference / 1000 / 60 / 60 / 24;
    let difHours = (difDays - Math.floor(difDays)) * 24;
    let difMinutes = (difHours - Math.floor(difHours)) * 60;
    let difSeconds = (difMinutes - Math.floor(difMinutes)) * 60;

    document.getElementById("days").textContent = String(Math.floor(difDays)).padStart(2, '0') ;
    document.getElementById("hours").textContent = String(Math.floor(difHours)).padStart(2, '0') ;
    document.getElementById("minutes").textContent = String(Math.floor(difMinutes)).padStart(2, '0') ;
    document.getElementById("seconds").textContent = String(Math.floor(difSeconds)).padStart(2, '0');
 
}