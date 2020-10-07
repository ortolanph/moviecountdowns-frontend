import {Component, Input, OnInit} from '@angular/core';
import {CountDownTimer} from "../../entities/count-down-timer";
import {CountDownTimerService} from "../../services/count-down-timer.service";

@Component({
  selector: 'app-count-down-timer',
  templateUrl: './count-down-timer.component.html',
  styleUrls: ['./count-down-timer.component.css']
})
export class CountDownTimerComponent implements OnInit {

  @Input() releaseDate: string;
  timer: CountDownTimer;
  isToday: boolean = false;
  isTomorrow: boolean = false;
  threeMonthsFromNow: boolean = false;
  oneMonthFromNow: boolean = false;

  constructor(private timerService: CountDownTimerService) { }

  ngOnInit() {
    this.timer = this.timerService.calculateCountdown(this.releaseDate);

    this.isToday = (
      this.timer.years == 0 && this.timer.months == 0 && this.timer.days == 0
    );

    this.isTomorrow = (
      this.timer.years == 0 && this.timer.months == 0 && this.timer.days == 1
    );

    this.threeMonthsFromNow =  (
      this.timer.years == 0 && this.timer.months == 3 && this.timer.days == 0
    );

    this.oneMonthFromNow =  (
      this.timer.years == 0 && this.timer.months == 1 && this.timer.days == 0
    );
  }

}
