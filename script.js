
function showTime() {
    var date = new Date();
    var hour = date.getHours(); 
    var min = date.getMinutes(); 
    var sec = date.getSeconds();
    var session = "AM";

    if (hour == 0) {
        hour = 12;
    }

    if (hour > 12) {
        hour = hour - 12 ;
        session = "PM"
    }

    if (hour < 10 ) {
        hour = "0" + hour;
    }

    if (min < 10 ) {
        min = "0" + min;
    }

    if (sec < 10 ) {
        sec = "0" + sec;
    }

    var time = hour + ":" + min + ":" + sec +" " + session;

    document.getElementById("myClock").innerText = time;
    document.getElementById("myClock").textContent = time;

}

setInterval(showTime, 1000);

showtime()