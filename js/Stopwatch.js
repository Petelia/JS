let
    getStopwatch = getS(".stopwatch__date-field"),
    startStopwatch = getS(".timepiece__stopwatch-btn_start");

function stopwatch() {
    let
        stop = getS(".timepiece__stopwatch-btn_stop"),
        reset = getS(".timepiece__stopwatch-btn_reset"),
        loop = getS(".timepiece__stopwatch-btn_loop"),
        loopBlock = getS(".loop-block");

    const interval = setInterval(millisecond, 10);

    loop.onclick = () => {
        if (startStopwatch.classList.contains("run")) loopBlock.insertAdjacentHTML("beforeend", `<p>${getStopwatch.outerText}</p>`);
        if (loopBlock.childElementCount === 12) loopBlock.firstElementChild.remove();
    }

    stop.onclick = () => {
        clearInterval(interval);
        startStopwatch.classList.remove("run");
    };

    reset.onclick = () => {
        stop.onclick()
        for (let item of getStopwatch.children) if (item.hasAttribute("class")) item.innerHTML = '00';
        loopBlock.innerText = "";
    }
}

function millisecond() {
    let
        ms = getStopwatch.lastElementChild,
        counter = ms.textContent;
    counter++;

    ms.innerHTML = counter < 10 ? `0${counter}` : counter;

    if (counter === 100) {
        ms.innerHTML = '00';
        seconds();
    }
}

function seconds() {
    let
        s = getStopwatch.children[4],
        m = getStopwatch.children[2],
        h = getStopwatch.firstElementChild,
        counter1 = parseInt(s.innerHTML),
        counter2 = parseInt(m.innerHTML),
        counter3 = parseInt(h.innerHTML);

    counter1++;

    s.innerHTML = counter1 < 10 ? `0${counter1}` : counter1;

    if (counter1 == 60) {
        s.innerHTML = '00';
        counter2++;
        m.innerHTML = counter2 < 10 ? `0${counter2}` : counter2;
    }
    if (counter2 == 60) {
        m.innerHTML = '00';
        counter3++;
        h.innerHTML = counter3 < 10 ? `0${counter3}` : counter3;
    }
}

startStopwatch.onclick = e => {
    if (!e.target.classList.contains("run")) {
        stopwatch();
        e.target.classList.add("run");
    }
}

