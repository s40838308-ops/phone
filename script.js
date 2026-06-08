const progress = document.getElementById("progress");
const btn = document.getElementById("startBtn");
const voice = document.getElementById("voice");

btn.addEventListener("click", () => {

    voice.play();

    btn.style.display = "none";

    document.getElementById("line2").innerText =
        "Accessing photos...";

    setTimeout(()=>{
        document.getElementById("line3").innerText =
        "Downloading contacts...";
    },2000);

    setTimeout(()=>{
        document.getElementById("line4").innerText =
        "Uploading data...";
    },4000);

    let width = 0;

    let interval = setInterval(() => {

        width++;

        progress.style.width = width + "%";

        if(width >= 100){

            clearInterval(interval);

            setTimeout(() => {

                document.body.innerHTML = `
                <div style="
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    height:100vh;
                    background:black;
                    color:lime;
                    font-family:monospace;
                    text-align:center;
                    font-size:3rem;
                ">
                    😂 JUST KIDDING 😂<br>
                    YOUR PHONE IS FINE
                </div>
                `;

            },1500);
        }

    },100);

});