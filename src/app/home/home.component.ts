import { Component, OnInit,HostListener,ViewChild } from '@angular/core';
import { WOW } from 'wowjs/dist/wow.min';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  images = [
    {name:'assets/img/math.jpg'},
    {name:'assets/img/eng.jpeg'},
    {name:'assets/img/art.jpg'},
    {name:'assets/img/eng.jpeg'},
    {name:'assets/img/art.jpg'},
    {name:'http://via.placeholder.com/800x533/ccc/fff/course__list_4.jpg'}
  ];

 // myInnerHeight: window.innerHeight;

  constructor() {
   }

  ngOnInit() {

  }
   ngAfterViewInit(){

    new WOW().init();
  }
}
