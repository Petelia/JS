let
getTimer = getS(".timepiece__timer-field"),
startTimer = getS(".timepiece__timer-btn_start");


function timer() {
    let
        stop = getS(".timepiece__timer-btn_stop"),
        reset = getS(".timepiece__timer-btn_reset");

    const interval = setInterval(tSecond, 1000);

    stop.onclick = () => {
        clearInterval(interval);
        startTimer.classList.remove("run");
        startTimer.classList.add("stoped");
    };
    reset.onclick = () => {
        startTimer.classList.remove("run");
        startTimer.classList.remove("stoped");
        clearInterval(interval);
        for (let item of getTimer.children) if (item.hasAttribute("class")) item.innerHTML = '00';
    }
}

function tSecond() {
    let
        s = getTimer.lastElementChild,
        counter = s.textContent;

    if (counter == "00") {
        s.innerHTML = "59"
        tMinute()
    }
    else {
        counter--;
        s.innerHTML = counter < 10 ? `0${counter}` : counter;
    }
}

function tMinute() {
    let
        m = getTimer.firstElementChild,
        counter = m.textContent;

    if (counter === "00") {
        getS(".timepiece__timer-btn_reset").click()
        return;
    }
    counter--;
    m.innerHTML = counter < 10 ? `0${counter}` : counter;
}

startTimer.onclick = e => {
    let
        value = getS(".timer-settings").firstElementChild.textContent,
        time = getTimer.firstElementChild;

    if (!e.target.classList.contains("run") && !e.target.classList.contains("stoped")) {
        timer();
        e.target.classList.add("run");
        time.innerHTML = parseInt(value) < 10 ? `0${value}` : value;
    }

    else if (startTimer.classList.contains("stoped")) {
        timer();
        startTimer.classList.remove("stoped");
        startTimer.classList.add("run");
    }
}

getS(".timer-settings__buttons").firstElementChild.onclick = () => {
    getS(".timer-settings").firstElementChild.innerText++;

}

getS(".timer-settings__buttons").lastElementChild.onclick = () => {
    if (getS(".timer-settings").firstElementChild.innerText > 1) getS(".timer-settings").firstElementChild.innerText--;
}