import {Component, OnInit} from '@angular/core';
import {CountDownService} from "../../services/count-down.service";

@Component({
  selector: 'app-count-down-panel',
  templateUrl: './count-down-panel.component.html',
  styleUrls: ['./count-down-panel.component.css']
})
export class CountDownPanelComponent implements OnInit {

  countdowns: any;

  constructor(private countdownService: CountDownService) {
  }

  ngOnInit() {
    const currentYear = (new Date()).getUTCFullYear().toString();

    this.countdownService
      .countdownsByYear(currentYear)
      .subscribe(res => {
        this.countdowns = res;
      });
  }

}
