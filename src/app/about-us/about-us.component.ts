import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  stickyFixed: true;

  constructor() { }

  ngOnInit() {
  }


  // @HostListener("window:scroll", [])
  // onWindowScroll() {
  //   let num = this.doc.body.scrollTop;
  //   if ( num > 50 ) {
  //       this.fixed = true;
  //   }else if (this.fixed && num < 5) {
  //       this.fixed = false;
  //   }
  // }

}


