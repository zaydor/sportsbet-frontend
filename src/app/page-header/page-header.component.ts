import { Component, Input, OnInit } from '@angular/core';
import { CurrentSportService } from '../current-sport.service';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent implements OnInit {

  @Input()
  title;

  activeSport: number;

  footballIcon: HTMLElement;
  baseballIcon: HTMLElement;
  basketballIcon: HTMLElement;
  soccerIcon: HTMLElement;

  notActiveButton: string = "black";
  activeButton: string = "white";

  constructor() {
  }


  async ngOnInit(): Promise<void> {
    this.activeSport = await CurrentSportService.getCurrentSport();
    this.changeSport(0, this.activeSport);
  }

  changeSport(oldId: number, sportId: number) {
    const sportMap = [
      { id: 0, sport: "football" },
      { id: 1, sport: "baseball" },
      { id: 2, sport: "basketball" },
      { id: 3, sport: "soccer" }
    ];

    this.footballIcon = document.getElementById("football");
    this.baseballIcon = document.getElementById("baseball");
    this.basketballIcon = document.getElementById("basketball");
    this.soccerIcon = document.getElementById("soccer");

    this.activeSport = sportId;

    this.footballIcon.style.color = this.notActiveButton;
    this.baseballIcon.style.color = this.notActiveButton;
    this.basketballIcon.style.color = this.notActiveButton;
    this.soccerIcon.style.color = this.notActiveButton;

    if (sportId === 0) {
      this.footballIcon.style.color = this.activeButton;
    } else if (sportId === 1) {
      this.baseballIcon.style.color = this.activeButton;
    } else if (sportId === 2) {
      this.basketballIcon.style.color = this.activeButton;
      console.log("howdy");
    } else if (sportId === 3) {
      this.soccerIcon.style.color = this.activeButton;
    }

    CurrentSportService.setCurrentSport(this.activeSport);
  }

}
