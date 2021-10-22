import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrentSportService {

  static currentSport = 0;

  public static getCurrentSport(): number {
    return this.currentSport;
  }


  public static setCurrentSport(v: number) {
    this.currentSport = v;
  }


  constructor() {
    CurrentSportService.currentSport = 0;
  }
}
