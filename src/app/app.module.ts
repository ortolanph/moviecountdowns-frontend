import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import {YearSelectComponent} from "./components/year-select/year-select.component";
import {CountDownCardComponent} from "./components/count-down-card/count-down-card.component";
import {CountDownPanelComponent} from "./components/count-down-panel/count-down-panel.component";
import {CountDownCardPanelComponent} from './components/count-down-card-panel/count-down-card-panel.component';
import {CountDownTimerComponent} from './components/count-down-timer/count-down-timer.component';
import { LinksComponent } from './components/links/links.component';


@NgModule({
  declarations: [
    AppComponent,
    CountDownPanelComponent,
    CountDownCardComponent,
    /*TimerComponent,*/
    YearSelectComponent,
    CountDownCardPanelComponent,
    CountDownTimerComponent,
    LinksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
