// ==========================
// ELEMENTS
// ==========================

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

// ==========================
// SCANNER LOGS
// ==========================

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

// ==========================
// SCAN SCREEN
// ==========================

let scanWidth = 0;
let logIndex = 0;

const scanInterval = setInterval(() => {

    scanWidth++;

    scanProgress.style.width = scanWidth + "%";

    if(
        scanWidth % 10 === 0 &&
        logIndex < logs.length
    ){

        const p = document.createElement("p");

        p.innerText = logs[logIndex];

        scanLogs.appendChild(p);

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

// ==========================
// HACK SEQUENCE
// ==========================

function startHackSequence(){

    let hackWidth = 0;

    const hackMessages = [

        "Initializing backdoor access...",

        "Bypassing security...",

        "Downloading contacts...",

        "Reading messages...",

        "Uploading gallery...",

        "Extracting sensitive files...",

        "Synchronizing data...",

        "Access granted."

    ];

    let msgIndex = 0;

    const hackInterval = setInterval(() => {

        hackWidth++;

        hackProgress.style.width =
        hackWidth + "%";

        if(
            hackWidth % 12 === 0 &&
            msgIndex < hackMessages.length
        ){

            hackStatus.innerText =
            hackMessages[msgIndex];

            msgIndex++;
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

```
// ==========================
// VOICE NOTE
// ==========================

if (playBtn && voice) {

    playBtn.addEventListener("click", () => {

        voice.play();

        playBtn.innerText =
        "PLAYING MESSAGE...";

        playBtn.disabled = true;

    });

    // ==========================
    // END OF AUDIO
    // ==========================

    voice.addEventListener("ended", () => {

        screen3.classList.remove("active");

        screen4.classList.add("active");

    });

}

// ==========================
// OPTIONAL PHONE VIBRATION
// ==========================

if(navigator.vibrate){

    setTimeout(() => {

        navigator.vibrate([
            300,
            100,
            300,
            100,
            600
        ]);

    },9000);

}
```
