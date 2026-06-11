const screen1 = document.getElementById("screen1");
const screen2 = document.getElementById("screen2");
const screen3 = document.getElementById("screen3");
const screen4 = document.getElementById("screen4");

const scanProgress = document.getElementById("scanProgress");
const hackProgress = document.getElementById("hackProgress");
const scanLogs = document.getElementById("scanLogs");
const hackStatus = document.getElementById("hackStatus");

const playBtn = document.getElementById("playBtn");
const voice = document.getElementById("voice");

const logs = [
    "Checking birthday database...",
    "Verifying recipient...",
    "Checking contacts...",
    "Checking WhatsApp backups...",
    "Checking gallery access...",
    "Checking device identity...",
    "Reading local storage...",
    "Matching birthday profile...",
    "Recipient confirmed.",
    "Preparing surprise..."
];

let scanWidth = 0;
let logIndex = 0;

const scanInterval = setInterval(() => {

    scanWidth++;

    if(scanProgress){
        scanProgress.style.width = scanWidth + "%";
    }

    if(scanWidth % 10 === 0 && logIndex < logs.length){

        const p = document.createElement("p");
        p.innerText = logs[logIndex];

        if(scanLogs){
            scanLogs.appendChild(p);
        }

        logIndex++;
    }

    if(scanWidth >= 100){

        clearInterval(scanInterval);

        setTimeout(() => {

            screen1.classList.remove("active");
            screen2.classList.add("active");

            startHackSequence();

        },1500);

    }

},70);

function startHackSequence(){

    let hackWidth = 0;

    const hackInterval = setInterval(() => {

        hackWidth++;

        if(hackProgress){
            hackProgress.style.width = hackWidth + "%";
        }

        if(hackStatus){

            hackStatus.innerText =
            "Initializing backdoor access... " +
            hackWidth + "%";

        }

        if(hackWidth >= 100){

            clearInterval(hackInterval);

            setTimeout(() => {

                screen2.classList.remove("active");
                screen3.classList.add("active");

            },2000);

        }

    },50);

}

if(playBtn && voice){

    playBtn.addEventListener("click", () => {

        voice.play();

        playBtn.innerText =
        "PLAYING MESSAGE...";

        playBtn.disabled = true;

    });

    voice.addEventListener("ended", () => {

        screen3.classList.remove("active");
        screen4.classList.add("active");

    });

}
