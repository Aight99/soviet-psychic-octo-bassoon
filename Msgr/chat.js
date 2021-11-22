
let answers = ["Поставте работяге GL", "GL ради пролетариата!",
    "Пятилетку за 4 года, а GL - за день!", "Расстреляйте GL-ами!", "GL при мне не было, а жаль"];
let count = 0;

function foo (text) {
    let parent = document.querySelector('#chat-window');
    let msg = document.createElement('p');
    msg.classList.add("question", "text-right");
    msg.innerHTML = text.toString();
    parent.append(msg);
}

function bar () {
    let parent = document.querySelector('#chat-window');
    let ans = document.createElement('p');
    ans.classList.add("answer", "text-left");
    if (count === 0) {
        ans.innerHTML = "Здравствуй, товарищ!"
    }
    else {
        ans.innerHTML = answers[Math.floor(Math.random() * answers.length)];
    }
    parent.append(ans);
}

function baz () {
    let textLine = document.getElementById("textForm");
    let value = textLine.value;
    textLine.value = "";
    console.log(value)
    foo(value)
    bar()
    count++;
}

function gotoBottom(){
    let element = document.getElementById("chat-window");
    element.scrollTop = element.scrollHeight - element.clientHeight;
}

let input = document.getElementById("textForm");

input.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("myBtn").click();
        gotoBottom()
    }
});

