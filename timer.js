class Timer{
  constructor(){
    this.startTime = null;
    this.elapsed = 0;
    this.interval = null;
    this.timeout = null;
    this.isRunning = false;
  }

    start() {

    
    if (this.isRunning) {
      console.log("Timer is already running");
      return;
    }

    this.isRunning = true;

    this.startTime = Date.now() - this.elapsed;

    console.log("Timer started");

   
    this.interval = setInterval(() => {


      this.elapsed = Date.now()- this.startTime;

     
      console.log(this.getTime());

    }, 1000);


    this.timeout = setTimeout(() => {

      console.log("Auto stop after 20 seconds");

      this.stop();

    }, 20000);
  }

  pause() {

    if (!this.isRunning) {
      console.log("Timer is not running");
      return;
    }

    clearInterval(this.interval);
    clearTimeout(this.timeout);

    this.interval = null;
    this.timeout = null;

    this.isRunning = false;

    console.log("Timer paused at:", this.getTime());
  }

  stop() {

    clearInterval(this.interval);
    clearTimeout(this.timeout);

    this.interval = null;
    this.timeout = null;

    this.isRunning = false;

    console.log("Timer stopped");
  }

  reset() {

    clearInterval(this.interval);
    clearTimeout(this.timeout);

    this.interval = null;
    this.timeout = null;

    this.seconds = 0;

    this.isRunning = false;

    console.log("Timer reset:", this.getTime());
  }

  getTime() {

    const hours = Math.floor(this.seconds / 3600);

    const minutes = Math.floor((this.seconds % 3600) / 60);

    const seconds = this.seconds % 60;

    return (
      String(hours).padStart(2, "0") + ":" +
      String(minutes).padStart(2, "0") + ":" +
      String(seconds).padStart(2, "0")
    );
  }
}




const timer = new Timer()


timer.start();

console.log(setTimeout(() => {
  timer.pause();
}, 5000));


console.log(setTimeout(() => {
  timer.start();
}, 8000));


console.log(setTimeout(() => {
  timer.reset();
}, 13000));



