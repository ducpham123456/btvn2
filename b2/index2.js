const stopwatchContainer = document.querySelector("#stopwatch");
const btnAddStopwatch = document.querySelector("#addStopwatch")
const convertSecondToTime = (seconds) => {
    let s = seconds % 60;
    let m = Math.floor(seconds / 60);

    if (s < 10) s = "0" + s;
    if (m < 10) m = "0" + m;

    return m + ":" + s 
}

btnAddStopwatch.addEventListener("click", () => {
    const stopwatch1 = new Stopwatch();
    stopwatchContainer.appendChild(stopwatch1.container);

    const stopwatch2 = new Stopwatch();
    stopwatchContainer.appendChild(stopwatch2.container);

    const stopwatch3 = new Stopwatch();
    stopwatchContainer.appendChild(stopwatch3.container);

    const stopwatch4 = new Stopwatch();
    stopwatchContainer.appendChild(stopwatch4.container);

    const stopwatch5 = new Stopwatch();
    stopwatchContainer.appendChild(stopwatch5.container);


    const btnStartAll = document.createElement("button");
    btnStartAll.innerHTML = "Start All";
    btnStartAll.addEventListener("click", () => {
        stopwatch1.handleStart();
        stopwatch2.handleStart();
        stopwatch3.handleStart();
        stopwatch4.handleStart();
        stopwatch5.handleStart();
    })
    stopwatchContainer.appendChild(btnStartAll);

    const btnStopAll = document.createElement("button");
    btnStopAll.innerHTML = "Stop All";
    btnStopAll.addEventListener("click", () => {
        stopwatch1.handleStop();
        stopwatch2.handleStop();
        stopwatch3.handleStop();
        stopwatch4.handleStop();
        stopwatch5.handleStop();
    })
    stopwatchContainer.appendChild(btnStopAll);

})
class Stopwatch {
        count = 0;
        interval = null;
    
        container;
        txtTime;
        btnStart;
        btnPause;
        isStarted = false;
    
        constructor() {
            this.container = document.createElement("div");
            this.txtTime = document.createElement("span");
            this.txtTime.innerHTML = "00:00";
    
            this.btnStart = document.createElement("button");
            this.btnStart.innerHTML = "Start";
            this.btnStart.addEventListener("click", this.handleStart);
    
            this.btnPause = document.createElement("button");
            this.btnPause.innerHTML = "Pause";
            this.btnPause.addEventListener("click", this.handlePause);

            this.btnStop = document.createElement("button");
            this.btnStop.innerHTML = "Stop";
            this.btnStop.addEventListener("click", this.handleStop);
    
            this.container.appendChild(this.txtTime);
            this.container.appendChild(this.btnStart);
            this.container.appendChild(this.btnPause);
            this.container.appendChild(this.btnStop);
        }
    
        handleStart = () => {
            if(!this.isStarted){
            this.interval = setInterval(() => {
                this.count++;
                this.txtTime.innerHTML = convertSecondToTime(this.count)
            }, 1000)
    
            this.isStarted = true;
        }else {
            alert("Started!")
            return;
        }
        }   
    
        handlePause = () => {
            clearInterval(this.interval)
            this.isStarted = false;
        }

        handleStop = () => {
            clearInterval(this.interval)
            this.count = 0;
            this.txtTime.innerHTML = "00:00";
            this.isStarted = false;

        }
    }