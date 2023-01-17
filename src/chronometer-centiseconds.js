class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      if (printTimeCallback) printTimeCallback();
    }, 10);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 6000);
  }

  getSeconds() {
    return Math.floor((this.currentTime / 100) % 60);
  }

  getCentiseconds() {
    return (this.currentTime % 100) % 1000;
  }

  computeTwoDigitNumber(value) {
    if (value.toString().length === 2) {
      return value.toString();
    } else {
      return `0${value.toString()}`;
    }
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    return `${this.computeTwoDigitNumber(
      this.getMinutes(this.currentTime)
    )}:${this.computeTwoDigitNumber(
      this.getSeconds(this.currentTime)
    )}.${this.computeTwoDigitNumber(this.getCentiseconds(this.currentTime))}`;
  }
}
