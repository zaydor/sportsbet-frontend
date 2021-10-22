import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { CurrentSportService } from '../current-sport.service';
import { scoreCard } from '../objects';

@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.css'],
  animations: [
    trigger('slideLeftRight', [
      state('idle', style({
        position: 'relative',
        left: '0%'
      })),
      state('right', style({
        position: 'relative',
        left: '100%'
      })),
      state('left', style({
        position: 'relative',
        left: '-100%'
      })),
      transition('left => idle', [
        animate('0.3s')
      ]),
      transition('idle => right', [
        animate('0.3s')
      ]),
      transition('right => idle', [
        animate('0.3s')
      ]),
      transition('idle => left', [
        animate('0.3s')
      ])
    ]),
    trigger('grow', [
      transition('void <=> *', []),
      transition('* <=> *', [
        style({ opacity: 0 }),
        animate('.5s ease'),
      ], { params: { startHeight: 0 } })
    ])
  ]
})
export class ScoresComponent implements OnInit {

  public footballScorecards: scoreCard[] = [{
    gameTime: "10AM",
    homeTeamName: "Vikings",
    awayTeamName: "Lions",
    homeTeamScore: "10",
    awayTeamScore: "0"
  },
  {
    gameTime: "10AM",
    homeTeamName: "Vikings",
    awayTeamName: "Lions",
    homeTeamScore: "12",
    awayTeamScore: "0"
  },
  {
    gameTime: "10AM",
    homeTeamName: "Vikings",
    awayTeamName: "Lions",
    homeTeamScore: "14",
    awayTeamScore: "0"
  },
  {
    gameTime: "10AM",
    homeTeamName: "Vikings",
    awayTeamName: "Lions",
    homeTeamScore: "10",
    awayTeamScore: "0"
  },
  {
    gameTime: "10AM",
    homeTeamName: "Vikings",
    awayTeamName: "Lions",
    homeTeamScore: "12",
    awayTeamScore: "0"
  },
  {
    gameTime: "10AM",
    homeTeamName: "Vikings",
    awayTeamName: "Lions",
    homeTeamScore: "14",
    awayTeamScore: "0"
  },
  {
    gameTime: "10AM",
    homeTeamName: "Vikings",
    awayTeamName: "Lions",
    homeTeamScore: "10",
    awayTeamScore: "0"
  },
  {
    gameTime: "10AM",
    homeTeamName: "Vikings",
    awayTeamName: "Lions",
    homeTeamScore: "12",
    awayTeamScore: "0"
  },
  {
    gameTime: "10AM",
    homeTeamName: "Vikings",
    awayTeamName: "Lions",
    homeTeamScore: "14",
    awayTeamScore: "0"
  },
  {
    gameTime: "10AM",
    homeTeamName: "Vikings",
    awayTeamName: "Lions",
    homeTeamScore: "10",
    awayTeamScore: "0"
  },
  {
    gameTime: "10AM",
    homeTeamName: "Vikings",
    awayTeamName: "Lions",
    homeTeamScore: "12",
    awayTeamScore: "0"
  },
  {
    gameTime: "10AM",
    homeTeamName: "Vikings",
    awayTeamName: "Lions",
    homeTeamScore: "14",
    awayTeamScore: "0"
  }];

  public baseballScorecards: scoreCard[] = [{
    gameTime: "5PM",
    homeTeamName: "Dodgers",
    awayTeamName: "Braves",
    homeTeamScore: "3",
    awayTeamScore: "2"
  },
  {
    gameTime: "5PM",
    homeTeamName: "Dodgers",
    awayTeamName: "Braves",
    homeTeamScore: "3",
    awayTeamScore: "2"
  },
  {
    gameTime: "5PM",
    homeTeamName: "Dodgers",
    awayTeamName: "Braves",
    homeTeamScore: "3",
    awayTeamScore: "2"
  },
  {
    gameTime: "5PM",
    homeTeamName: "Dodgers",
    awayTeamName: "Braves",
    homeTeamScore: "3",
    awayTeamScore: "2"
  }];


  activeSport: number;

  currentAnimationState = true;

  getCurrentAnimationState() {
    return this.currentAnimationState;
  }

  setAnimationState(oldId, sportId) {
    // console.log(this.currentAnimationState);
  }

  constructor() {
  }

  ngOnInit(): void {
  }

  getCurrentSportScoreCards() {
    if (CurrentSportService.getCurrentSport() === 0) {
      if (this.activeSport !== 0) {
        this.changeAnimationState();
        this.activeSport = 0;
      }
      return this.footballScorecards;
    } else if (CurrentSportService.getCurrentSport() === 1) {
      if (this.activeSport !== 1) {
        this.changeAnimationState();
        this.activeSport = 1;
      }
      return this.baseballScorecards;
    } else if (CurrentSportService.getCurrentSport() === 2) {

    } else if (CurrentSportService.getCurrentSport() === 3) {

    } else {
      console.log(CurrentSportService.getCurrentSport());
    }
  }

  changeAnimationState() {
    this.currentAnimationState = !this.currentAnimationState;
  }

}
