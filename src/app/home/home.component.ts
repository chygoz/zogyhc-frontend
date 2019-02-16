import { Component, OnInit,HostListener,ViewChild } from '@angular/core';
import { WOW } from 'wowjs/dist/wow.min';
import {OwlCarousel} from 'ngx-owl-carousel';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('owlElement') owlElement: OwlCarousel

  fun() {
    this.owlElement.next([200])
    //duration 200ms
  }
  images = [
    {name:'assets/img/math.jpg'},
    {name:'assets/img/eng.jpeg'},
    {name:'assets/img/art.jpg'},
    {name:'assets/img/eng.jpeg'},
    {name:'assets/img/art.jpg'},
    {name:'http://via.placeholder.com/800x533/ccc/fff/course__list_4.jpg'}
  ];

  constructor() {
    
   }

  ngOnInit() {

  }
   ngAfterViewInit(){

    new WOW().init();
  }
}
