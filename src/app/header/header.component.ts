import { Component, OnInit,Inject,HostBinding } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @HostBinding('class.fixed') navIsFixed: boolean;
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

    /* throwing together a liitle stab in the dark*/

    if (typeof window !== undefined) {
      window.addEventListener('scroll', () => this._checkScroll());
    }
    
  }

  private _checkScroll() {
    if (typeof window !== undefined) {
      this.navIsFixed = (window.pageYOffset > 50);
    }
  }

  ngOnDestroy() {
    if (typeof window !== undefined) {
      window.removeEventListener('scroll', () => this._checkScroll());
    }
  }
 

  status: boolean = false;
  toggleclick(){
    this.status = !this.status;       
}

}
