import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { 

  }

  ngOnInit() {
    var $menu= $('#main_menu');
    $('.hamburger').on('click', function () {
      $menu.toggleClass('show');
      $menu.find('nav').toggleClass('animated fadeIn');
      $menu.find('.follow_us').toggleClass('animated fadeInUp');
      $('.header').toggleClass('sticky_menu_active');
    });
    var hamburgers = document.querySelectorAll(".hamburger");
    // hamburgers.addEventListener('click', function() {
    //   this.classList.toggle('is-active');
    // }
   
  }
  status: boolean = false;
  toggleclick(){
    this.status = !this.status;       
}

}
