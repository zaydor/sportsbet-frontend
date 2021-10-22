import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { ScoresComponent } from './scores/scores.component';
import { ScorecardComponent } from './scorecard/scorecard.component';
import { MatButtonModule } from '@angular/material/button';
import { OddsComponent } from './odds/odds.component';
import { NewsComponent } from './news/news.component';
import { NewscardComponent } from './newscard/newscard.component';
import { OddscardComponent } from './oddscard/oddscard.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { RouteReuseStrategy } from '@angular/router';
import { CustomReuseStrategy } from '../app/CustomReuseStrategy';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ScoresComponent,
    ScorecardComponent,
    OddsComponent,
    NewsComponent,
    NewscardComponent,
    OddscardComponent,
    PageHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [/*{ provide: RouteReuseStrategy, useClass: CustomReuseStrategy }*/],
  bootstrap: [AppComponent]
})
export class AppModule { }
