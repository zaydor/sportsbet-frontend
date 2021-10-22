import { Component, Input, OnInit } from '@angular/core';
import { oddsCard } from '../objects';

@Component({
  selector: 'app-oddscard',
  templateUrl: './oddscard.component.html',
  styleUrls: ['./oddscard.component.css']
})
export class OddscardComponent implements OnInit {

  @Input()
  odds: oddsCard;

  constructor() { }

  ngOnInit(): void {
  }

}
