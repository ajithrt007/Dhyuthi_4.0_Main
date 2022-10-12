var days = document.querySelector('#days');
var hours = document.querySelector('#hours');
var mins = document.querySelector('#mins');
var secs = document.querySelector('#secs');
var currentDateTime;
const deadline = new Date("2022-11-11 18:00:00");
function findDifference(){    
    const date = new Date();
    currentDateTime = new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds());
    var difference = (deadline - currentDateTime)/1000;
    var dayValue = Math.floor(difference/(60*60*24));
    var dayRemainder = difference%(60*60*24);
    var hourValue = Math.floor(dayRemainder/(60*60));
    var hourRemainder = difference%(60*60);
    var minsValue = Math.floor(hourRemainder/60);
    var minsRemainder = difference%60;
    var secsValue = Math.floor(minsRemainder);
    days.innerHTML = dayValue;
    hours.innerHTML = hourValue;
    mins.innerHTML = minsValue;
    secs.innerHTML = secsValue;
    // console.log(dayValue + ":" + hourValue + ":" + minsValue + ":" + secsValue);
}
setInterval(findDifference,1000);