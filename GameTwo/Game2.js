
let pekos = [];
let columnsRows;

function startGame() {
    let grid = document.getElementById("grid");
    let slider = document.getElementById("customRange");
    let difficult = slider.value;
    columnsRows = 2 + parseInt(difficult);
    speed = Math.floor(1500 / difficult);
    pekos = [];
    grid.innerHTML = '';

    let scale = Math.floor(90 / columnsRows);
    let param = "";
    for (i = 0; i < columnsRows; i++) {
        param += scale.toString() + "% ";
    }
    grid.style.gridTemplateColumns = param;

    for (i = 0; i < columnsRows; i++) {
        let tempPekos = [];
        for (j = 0; j < columnsRows; j++) {
            let morpeko = document.createElement('img');
            morpeko.id = `${i}${j}`;
            morpeko.src = "../imgs/MorpekoY.png";
            morpeko.classList = "Yellow";
            morpeko.onclick = ()=> {
                let id = morpeko.id;
                feed(id[0], id[1]);

            };
            tempPekos.push(morpeko);
            grid.append(morpeko);
        }
        pekos.push(tempPekos);
    }

    for (i = 0; i < columnsRows; i++) {
        addHungry(pekos[i]);
    }

}

function feed(n, m) {
    for (i = 0; i < columnsRows; i++) {
        changeImage(pekos[n][i]);
        changeImage(pekos[i][m]);
    }
    changeImage(pekos[n][m]);
    check();
}

function changeImage(img) {
    if (img.classList.contains("Purple")) {
        img.classList = "Yellow";
        img.src = "../imgs/MorpekoY.png";
    } else {
        img.classList = "Purple";
        img.src = "../imgs/MorpekoP.png";
    }
}

function addHungry(array) {
    let targetPeko = array[Math.floor(Math.random() * array.length)];
    targetPeko.classList = "Purple";
    targetPeko.src = "../imgs/MorpekoP.png";
}

function check() {
    let targetClass = pekos[0][0].classList[0];
    for (i = 0; i < columnsRows; i++) {
        for (j = 0; j < columnsRows; j++) {
            // console.log(targetClass + " " + pekos[0][0].classList[0]);
            if (targetClass !== pekos[i][j].classList[0]) {
                console.log("эээ слыш");
                return;
            }
        }
    }
    setTimeout(()=> {
            alert("Вы самый лучший победитель!");
            startGame();
    },
        50
    );
}