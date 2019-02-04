import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../helper/layoutService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public layoutService: LayoutService) { 
    this.layoutService.setStaus(false);
  }

  ngOnInit() {
  }

}
