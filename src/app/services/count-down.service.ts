import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CountDownService {

  defaultHeaders : HttpHeaders;

  constructor(private http: HttpClient) {
    this.defaultHeaders = new HttpHeaders({
      "mc-api-key": environment.apiKey,
      "Cache-Control": ["no-cache", "must-revalidate"],
      "Expires": new Date().toUTCString()
    })
  }

  allCountdowns(){
    return this.http
    .get(`${environment.baseURL}/countdowns`, {
      headers: this.defaultHeaders
    });
  }

  newCountdowns() {
    return this.http
      .get(`${environment.baseURL}/countdowns/new`, {
        headers: this.defaultHeaders
      });
  }

  countdownsByYear(year: string) {
    return this.http
    .get(`${environment.baseURL}/countdowns/year/${year}`, {
      headers: this.defaultHeaders
    });
  }

  allYears() {
    return this.http
      .get(`${environment.baseURL}/countdowns/years`, {
        headers: this.defaultHeaders
      });
  }
}
