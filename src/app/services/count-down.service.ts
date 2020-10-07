import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CountDownService {

  constructor(private http: HttpClient) { }

  allCountdowns(){
    return this.http
    .get(`${environment.baseURL}/countdowns`);
  }

  newCountdowns() {
    return this.http
      .get(`${environment.baseURL}/countdowns/new`);
  }

  countdownsByYear(year: string) {
    return this.http
    .get(`${environment.baseURL}/countdowns/year/${year}`);
  }

  allYears() {
    return this.http
      .get(`${environment.baseURL}/countdowns/years`);
  }
}
