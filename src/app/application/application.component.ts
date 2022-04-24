import { Component, OnInit } from '@angular/core';
import { AccountService } from '../servisi/account/account.service';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {

  constructor(public account:AccountService) { }

  ngOnInit(): void {
  }

}
