import { Component, OnInit ,ViewEncapsulation, ViewChild} from '@angular/core';
import SwiperCore, {Navigation} from "swiper";
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MainComponent implements OnInit {

 public swiperConfig = {
   Pagination:true,
 };
  constructor() { }

  ngOnInit(): void {
    SwiperCore.use([Navigation]);
  }

}
