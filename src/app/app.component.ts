import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prvi_projekat';
  ime:string="Moje ime je Janko";
  objekat= document.getElementById("naslov");
}
