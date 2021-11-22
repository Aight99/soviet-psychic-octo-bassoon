
const time = 10;
let score;
let pikas = [];
let speed;
let columnsRows;
let isStarted = false;
let veryImportantLink;
let veryImportantLink2;
let pointsInfo = document.getElementById("pointsInfo");

function setDifficult() {
    stopDiglett();
    let grid = document.getElementById("grid");
    let slider = document.getElementById("customRange");
    let difficult = slider.value;
    columnsRows = 2 + parseInt(difficult);
    speed = Math.floor(1500 / difficult);
    pikas = [];
    grid.innerHTML = '';

    let scale = Math.floor(90 / columnsRows);
    let param = "";
    for (i = 0; i < columnsRows; i++) {
        param += scale.toString() + "% ";
    }
    grid.style.gridTemplateColumns = param;

    for (i = 0; i < columnsRows * columnsRows; i++) {
        let pika = document.createElement('img');
        pika.src = "../imgs/Pikachu.png";
        pikas.push(pika);
        grid.append(pika);
    }
}

function caught() {
    score++;
    pointsInfo.innerText = score;
}

function newDiglett() {
    return setInterval(() => {
            let targetPika = pikas[Math.floor(Math.random() * pikas.length)];
            targetPika.src = "../imgs/Diglett.png";
            targetPika.onclick = caught;
            setTimeout(()=> {
                    targetPika.src = "../imgs/Pikachu.png";
                    targetPika.onclick = null;
                },
                speed
            );
        },
        speed
    )
}

function stopDiglett() {
    clearTimeout(veryImportantLink);
    clearInterval(veryImportantLink2);
    isStarted = false;
}

function setTimer() {
    let timeInfo = document.getElementById("timeInfo");
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    let timer = setInterval(() => {
        if (seconds === 0) {
            if (minutes === 0) {
                clearInterval(timer);
                stopDiglett();
                alert("Время вышло! Твой счёт: " + score);
            } else {
                minutes--;
                seconds = 59;
            }
        } else {
            seconds--;
        }
        timeInfo.innerText = timeToString(minutes, seconds);
    },
        1000
    );

    return timer;
}

function timeToString(minutes, seconds) {
    let result;
    if (minutes < 10) {
        if (seconds < 10) {
            result = "0" + minutes + ":0"+ seconds;
        }
    } else if (seconds < 10) {
        result = minutes + ":0"+ seconds;
    } else {
        result = minutes + ":"+ seconds;
    }

    return result;
}

function startGame() {
    if (!isStarted) {
        score = 0;
        pointsInfo.innerText = score;
        veryImportantLink = newDiglett();
        veryImportantLink2 = setTimer();
        isStarted = true;
    } else {
        stopDiglett();
    }
}
