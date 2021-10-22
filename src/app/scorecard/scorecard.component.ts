import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-scorecard',
  templateUrl: './scorecard.component.html',
  styleUrls: ['./scorecard.component.css']
})
export class ScorecardComponent implements OnInit {

  @Input()
  public scoreCardData: {
    gameTime: string,
    homeTeamName: string,
    awayTeamName: string,
    homeTeamScore: string,
    awayTeamScore: string
  };

  gameTime: string;

  homeTeamName: string;

  awayTeamName: string;

  homeTeamScore: string;

  awayTeamScore: string;

  constructor() {
  }

  ngOnInit(): void {
    if (!this.scoreCardData) throw new Error('there is no scorecard data!');

    this.gameTime = this.scoreCardData.gameTime;
    this.homeTeamName = this.scoreCardData.homeTeamName;
    this.homeTeamScore = this.scoreCardData.homeTeamScore;
    this.awayTeamName = this.scoreCardData.awayTeamName;
    this.awayTeamScore = this.scoreCardData.awayTeamScore;
  }

}
