
let time = 3724;
let clicksNeed;
let veryImportantLink;
let disabler = document.getElementById("disabler");

function stopTimer() {
    if (clicksNeed !== 0) {
        if (disabler.style.textAlign !== "left") {
            disabler.style.textAlign = "left";
        }
        else {
            disabler.style.textAlign = "right";
        }
        clicksNeed--;
    } else {
        clearInterval(veryImportantLink);

        setTimeout(()=> {
            window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", '_blank');
        }, 1000);
    }
}

function setTimer() {
    let timeInfo = document.getElementById("timeInfo");
    timeInfo.innerText = timeToString(time);

    return setInterval(() => {
            if (time === 0) {
                stopTimer();
                alert("Время вышло! Твой счёт: " + score);
            } else {
                time--;
            }
            timeInfo.innerText = timeToString(time);
        },
        1000
    );
}

function timeToString(time) {
    let hours = Math.floor(time / 3600);
    let minutes = Math.floor((time % 3600) / 60);
    let seconds = (time % 3600) % 60;
    return handleDigits(hours) + ":" + handleDigits(minutes) + ":" + handleDigits(seconds);
}

function handleDigits(numb) {
    if (numb < 10) {
        return "0" + numb;
    }
    return numb;
}

function startGame() {
    clicksNeed = 5;
    veryImportantLink = setTimer();
}

let timer = new Promise((resolve, reject) => {
    startGame();
})

