import { Component, OnInit } from '@angular/core';
import { oddsCard } from '../objects';

@Component({
  selector: 'app-odds',
  templateUrl: './odds.component.html',
  styleUrls: ['./odds.component.css']
})
export class OddsComponent implements OnInit {

  oddsCard: oddsCard[] = [{
    hometeam: 'Vikings',
    awayteam: 'bye',
    homeMoneyLine: "+400",
    awayMoneyLine: "-200",
    homeSpread: {
      odds: "-110",
      points: "+2"
    },
    awaySpread: {
      odds: "-110",
      points: "-2"
    },
    overUnder: "41"
  }, {
    hometeam: 'Vikings',
    awayteam: 'bye',
    homeMoneyLine: "+400",
    awayMoneyLine: "-200",
    homeSpread: {
      odds: "-110",
      points: "+2"
    },
    awaySpread: {
      odds: "-110",
      points: "-2"
    },
    overUnder: "41"
  }, {
    hometeam: 'Vikings',
    awayteam: 'bye',
    homeMoneyLine: "+400",
    awayMoneyLine: "-200",
    homeSpread: {
      odds: "-110",
      points: "+2"
    },
    awaySpread: {
      odds: "-110",
      points: "-2"
    },
    overUnder: "41"
  }, {
    hometeam: 'Vikings',
    awayteam: 'bye',
    homeMoneyLine: "+400",
    awayMoneyLine: "-200",
    homeSpread: {
      odds: "-110",
      points: "+2"
    },
    awaySpread: {
      odds: "-110",
      points: "-2"
    },
    overUnder: "41"
  }, {
    hometeam: 'Vikings',
    awayteam: 'bye',
    homeMoneyLine: "+400",
    awayMoneyLine: "-200",
    homeSpread: {
      odds: "-110",
      points: "+2"
    },
    awaySpread: {
      odds: "-110",
      points: "-2"
    },
    overUnder: "41"
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
