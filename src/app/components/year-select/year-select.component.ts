import {Component, OnInit} from '@angular/core';
import {CountDownService} from "../../services/count-down.service";
import {YearChangerService} from "../../services/year-changer.service";
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-year-select',
  templateUrl: './year-select.component.html',
  styleUrls: ['./year-select.component.css']
})
export class YearSelectComponent implements OnInit {

  public years : any;
  public buyMeACodffeeProfile: string;
  public menuTitle: string = environment.menuTitle;

  constructor(private countdownService: CountDownService, private yearchangerService : YearChangerService) {
    this.buyMeACodffeeProfile = environment.buyMeACoffeeProfile;
  }

  ngOnInit() {
    this.countdownService
      .allYears()
      .subscribe(
        res => {
          this.years = res;
        }
      );
  }

  changeYear(year) {
    this.yearchangerService.changeYear(year);
  }

}
