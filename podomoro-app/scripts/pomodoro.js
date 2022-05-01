const playBtn = document.getElementById("play");
const stopBtn = document.getElementById("stop");
const timerDp = document.getElementById("timer");
const playImg = document.getElementById("play-img");

var isPlay = false;

var timer;
var audio = new Audio(__dirname + '/assets/timeout.mp3');
var timeout = false; 


const startTimer = () => {
    timer = setInterval(() => {
        let time = timerDp.innerHTML.split(":");
        let min = parseInt(time[0]);
        let sec = parseInt(time[1]);
        sec--;
        if (sec < 0) {
            min--;
            sec = 59;
        }
        if (min < 0) {
            min = 0;
            sec = 0;
        }
        if (min < 10) {
            min = "0" + min;
        }

        if (sec < 10) {
            sec = "0" + sec;
        }
        
        timerDp.innerHTML = min + ":" + sec;
        console.log(min)
        if (min == 0 && sec == 0) {
            audio.play();
            timeout = true;
            playImg.src = __dirname + "/assets/play.png";
            restartTimer();
            clearInterval(timer); 
        }
    }, 1000);

    
}

const stopTimer = () => {
    clearInterval(timer);
}

const restartTimer = () => {
    timerDp.innerHTML = "25:00";
}


playBtn.addEventListener("click", (e) => { 
    e.preventDefault();
    isPlay = !isPlay;
    if (isPlay) {
        playImg.src = __dirname + "/assets/pause.png";  
        startTimer();
    }
    else {
        playImg.src = __dirname + "/assets/play.png";
        stopTimer();
    }

});

stopBtn.addEventListener("click", (e) => {
    e.preventDefault();
    isPlay = false;
    restartTimer();
});


