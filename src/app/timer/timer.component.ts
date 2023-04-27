import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent implements OnInit, OnDestroy {
  minutes: number = 25;
  seconds: number = 0;
  isRunning: boolean = false;
  timerId?: any;

  ngOnInit() {}

  ngOnDestroy() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  startTimer() {
    if (this.isRunning) {
      clearInterval(this.timerId);
    } else {
      this.timerId = setInterval(() => {
        if (this.seconds === 0) {
          if (this.minutes === 0) {
            clearInterval(this.timerId);
            this.isRunning = false;
            return;
          } else {
            this.minutes--;
            this.seconds = 59;
          }
        } else {
          this.seconds--;
        }
      }, 1000);
    }

    this.isRunning = !this.isRunning;
  }

  resetTimer() {
    clearInterval(this.timerId);
    this.isRunning = false;
    this.minutes = 25;
    this.seconds = 0;
  }

  setBreak(minutes: number) {
    clearInterval(this.timerId);
    this.isRunning = false;
    this.minutes = minutes;
    this.seconds = 0;
  }
}
