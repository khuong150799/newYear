const dayNow = document.getElementById('day');
const hoursNow = document.getElementById('hours');
const minsNow = document.getElementById('mins');
const secondsNow = document.getElementById('seconds');
function counttime() {
    const date = new Date();
    const newYear = new Date('1 january 2023');
    
    const totalDate = ((newYear - date) / 1000);

    const days = Math.floor(totalDate / (24 * 60 *60));
    const hours = Math.floor((totalDate / 3600) % 24);
    const minuts = Math.floor((totalDate /60) % 60 );
    const seconds = Math.floor(totalDate % 60 );

    dayNow.innerHTML = formatTime(days); 
    hoursNow.innerHTML = formatTime(hours); 
    minsNow.innerHTML = formatTime(minuts); 
    secondsNow.innerHTML = formatTime(seconds); 

}
function formatTime(time) {
    return time < 10 ? `0${time}` : time
}

counttime()
setInterval(counttime, 1000)