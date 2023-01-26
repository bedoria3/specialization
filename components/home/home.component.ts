import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeimg = 'assets/home.png';
  aboutimg = 'assets/unnamed.png';

  constructor(){

  }
   ngOnInit(): void {

   }
}
