import {Component} from '@angular/core';
import {YearChangerService} from "./services/year-changer.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'Movies Countdowns';

  constructor(private yearChangerService: YearChangerService) {
  }
}
