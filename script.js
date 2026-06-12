```javascript
const screen1 = document.getElementById("screen1");
const screen2 = document.getElementById("screen2");
const screen3 = document.getElementById("screen3");
const screen4 = document.getElementById("screen4");

const startBtn = document.getElementById("startBtn");
const scanBar = document.getElementById("scanBar");
const logs = document.getElementById("logs");

const hackBar = document.getElementById("hackBar");
const hackText = document.getElementById("hackText");

const playBtn = document.getElementById("playBtn");
const voice = document.getElementById("voice");

startBtn.onclick = () => {

    let progress = 0;

    const messages = [
        "Scanning contacts...",
        "Reading messages...",
        "Checking gallery...",
        "Uploading secrets...",
        "Target identified..."
    ];

    let index = 0;

    const interval = setInterval(() => {

        progress += 5;

        scanBar.style.width = progress + "%";

        if(progress % 20 === 0 && index < messages.length){
            logs.innerHTML += `<p>${messages[index]}</p>`;
            index++;
        }

        if(progress >= 100){

            clearInterval(interval);

            screen1.classList.remove("active");
            screen2.classList.add("active");

            startHack();
        }

    },100);

};

function startHack(){

    let progress = 0;

    const interval = setInterval(() => {

        progress += 2;

        hackBar.style.width = progress + "%";

        hackText.innerText =
            `Extracting data... ${progress}%`;

        if(progress >= 100){

            clearInterval(interval);

            screen2.classList.remove("active");
            screen3.classList.add("active");
        }

    },80);

}

playBtn.onclick = () => {

    voice.play();

    voice.onended = () => {

        screen3.classList.remove("active");
        screen4.classList.add("active");
    };

};
```
