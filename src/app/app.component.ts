import { Component } from '@angular/core';
import { LayoutService } from './helper/layoutService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  layoutStatus : true;

  constructor(private layoutService: LayoutService){
    this.layoutStatusmethod();
      this.layoutService.setStaus(true);
  }

  layoutStatusmethod() {
    this.layoutService.getStatus().subscribe((status) => {
        this.layoutStatus = status;
    });
}
}
