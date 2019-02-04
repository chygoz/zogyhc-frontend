import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../helper/layoutService';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public layoutService: LayoutService) { 
    this.layoutService.setStaus(false);
  }

  ngOnInit() {
  }

}
