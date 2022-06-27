const daysCon = document.getElementById('days');
const hoursCon = document.getElementById('hours');
const minutesCon = document.getElementById('minutes');
const secondsCon = document.getElementById('seconds');

const secondYear = "27 Aug 2022";

function countDate() {
    const secondYearDate = new Date(secondYear);
    const currentDate = new Date();

    const summedTime = (secondYearDate - currentDate) / 1000;

    const days = Math.floor(summedTime / 3600 / 24);
    const hours = Math.floor(summedTime / 3600) % 24;
    const minutes = (Math.floor(summedTime / 60) % 60);
    const seconds = Math.floor(summedTime % 60);

    console.log(days, hours, minutes, seconds);

    daysCon.innerHTML = days;
    hoursCon.innerHTML = hours;
    minutesCon.innerHTML = timeFormat(minutes);
    secondsCon.innerHTML = timeFormat(seconds);
}

function timeFormat(time){
    return time < 10 ? (`0${time}`) : time;
}

countDate();

setInterval(countDate, 1000);