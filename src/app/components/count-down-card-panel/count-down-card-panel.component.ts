import {Component, Input, OnInit} from '@angular/core';
import {CountDownService} from "../../services/count-down.service";
import {YearChangerService} from "../../services/year-changer.service";

@Component({
  selector: 'app-count-down-card-panel',
  templateUrl: './count-down-card-panel.component.html',
  styleUrls: ['./count-down-card-panel.component.css']
})
export class CountDownCardPanelComponent implements OnInit {

  @Input() countdowns: any;

  private static ALL_COUNTDOWNS: string = 'ALL';
  private static NEW_COUNTDOWNS: string = 'NEW';

  constructor(private countdownService: CountDownService,
              private yearChangerService: YearChangerService) { }

  ngOnInit() {
    this.yearChangerService
      .changeCountdownYear
      .subscribe(selectedYear => {
        switch (selectedYear) {
          case CountDownCardPanelComponent.ALL_COUNTDOWNS:
            this.countdownService
              .allCountdowns()
              .subscribe(res => {
                this.countdowns = res;
              });
            break;
          case CountDownCardPanelComponent.NEW_COUNTDOWNS:
            this.countdownService
              .newCountdowns()
              .subscribe(res => {
                this.countdowns = res;
              });
            break;
          default:
            this.countdownService
              .countdownsByYear(selectedYear)
              .subscribe(res => {
                this.countdowns = res;
              });
        }
      });
  }

}
