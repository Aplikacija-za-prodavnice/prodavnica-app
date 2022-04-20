import { Component, OnInit } from '@angular/core';
import { NizService } from '../serivsi/niz/niz.service';
@Component({
  selector: 'app-select-markets',
  templateUrl: './select-markets.component.html',
  styleUrls: ['./select-markets.component.css']
})
export class SelectMarketsComponent  {

  constructor(public nizKlasa: NizService) { 
  }
  
  
}
