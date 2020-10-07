import {Component, Input} from '@angular/core';
import {Countdown} from '../../entities/countdown'
import {MovieStatus} from "../../entities/movie-status";
import {faBars} from "@fortawesome/free-solid-svg-icons/faBars";

@Component({
  selector: 'app-count-down-card',
  templateUrl: './count-down-card.component.html',
  styleUrls: ['./count-down-card.component.css']
})
export class CountDownCardComponent {
  @Input() countdown: Countdown;
  barIcon = faBars;

  constructor() { }

  public isNew(countdown: Countdown) {
    return countdown.status == MovieStatus.NEW;
  }

}
