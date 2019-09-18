function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    if (m < 10) {
        m = "0" + m;
    }

    var s = today.getSeconds();
    if (s < 10) {
        s = "0" + s;
    }

    var ampm = ""
    if (h <= 11) {
        ampm = "AM"
    } else if (h >= 12) {
        ampm = "PM"
    }


    if (h == 24) {
        h = 12
        ampm = "AM"
    } else if (h > 12) {
        h = h % 12;
    }

    document.getElementById('clock').innerHTML = h + ":" + m + ":" + s;
    document.getElementById('clock').innerHTML += " " + ampm;


}

startTime();

setInterval(startTime, 1000);

function getDate() {
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; 
var yyyy = today.getFullYear();

if(dd<10) {
    dd = '0'+dd
} 

if(mm<10) {
    mm = '0'+mm
} 

today = mm + '/' + dd + '/' + yyyy;
document.getElementById('date').innerHTML = today;
}

getDate();


