const getS = element => document.querySelector(element);

function startClock() {
    let
        getTime = getS(".timepiece__time"),
        today = new Date(),
        h = today.getHours(),
        m = today.getMinutes(),
        s = today.getSeconds();

    m < 10 ? m = '0' + m : m;
    s < 10 ? m = '0' + s : s;

    getTime.innerHTML = h + ":" + m + ":" + s;
    t = setTimeout(function () {
        startClock();
    }, 500);

    if (h === "0" && m === "0" && s === "0") startDate();
}

function startDate() {
    let
        getDate = getS(".timepiece__calendar-date"),
        today = new Date(),
        y = today.getFullYear(),
        m = today.getMonth() + 1,
        d = today.getDate();

    m < 10 ? m = '0' + m : m;
    d < 10 ? d = '0' + d : d;

    getDate.innerHTML = y + "." + m + "." + d;
}

startDate();
startClock();