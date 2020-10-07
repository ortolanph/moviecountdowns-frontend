import {Injectable} from '@angular/core';
import {CountDownTimer} from "../entities/count-down-timer";

@Injectable({
  providedIn: 'root'
})
export class CountDownTimerService {


  constructor() { }

  public calculateCountdown(releaseDate: string) : CountDownTimer {
    let startDate = new Date();
    let endDate = new Date(releaseDate);

    if (startDate > endDate) {
        let swap = startDate;
        startDate = endDate;
        endDate = swap;
    }

    const startYear = startDate.getFullYear();
    const february = (startYear % 4 === 0 && startYear % 100 !== 0) || startYear % 400 === 0 ? 29 : 28;
    const daysInMonth = [31, february, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    let yearDiff = endDate.getFullYear() - startYear;
    let monthDiff = endDate.getMonth() - startDate.getMonth();
    if (monthDiff < 0) {
        yearDiff--;
        monthDiff += 12;
    }
    let dayDiff = endDate.getDate() - startDate.getDate();
    if (dayDiff < 0) {
        if (monthDiff > 0) {
            monthDiff--;
        } else {
            yearDiff--;
            monthDiff = 11;
        }
        dayDiff += daysInMonth[startDate.getMonth()];
    }

    let timer = new CountDownTimer();

    timer.days = dayDiff;
    timer.months = monthDiff;
    timer.years = yearDiff;

    return timer;
  }

}
