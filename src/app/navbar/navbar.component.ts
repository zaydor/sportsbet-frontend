import { AfterContentChecked, AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CurrentSportService } from '../current-sport.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isHamburgerActive: boolean = false;


  constructor() {

  }

  ngOnInit(): void {
    document.getElementById("navbarBasic").style.marginRight =
      document.getElementById("brand").offsetWidth.toString() + "px";

    console.log(document.getElementById("brand").offsetWidth);
  }

  test() {
    console.log(document.getElementById("brand").style.width);
    if (!this.isHamburgerActive) {
      document.getElementById("hamburger-menu").classList.add("is-active");
      this.isHamburgerActive = true;
    } else {
      document.getElementById("hamburger-menu").classList.remove("is-active");
      this.isHamburgerActive = false;
    }
  }

}
