import {EventEmitter, Injectable, Output} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class YearChangerService {

  constructor() { }

  @Output() changeCountdownYear : EventEmitter<string> = new EventEmitter<string>();

  changeYear(year) {
    this.changeCountdownYear.emit(year);
  }
}
