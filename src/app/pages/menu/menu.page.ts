import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  selectedPath = '';
 
  pages = [
    {
      title: 'Home',
      url: '/menu/home'
    },
    {
      title: 'Profile',
      url: '/menu/profile'
    },
    {
      title: 'Meets',
      url: '/menu/meets'
    },
    {
      title: 'Settings & Terms',
      url: '/menu/settings'
    },
    {
      title: 'Help',
      url: '/menu/help'
    }
  ];

  constructor(private router: Router) {
    this.router.events.subscribe((event: RouterEvent) => {
      if (event && event.url) {
        this.selectedPath = event.url;
      }
    });
   }

  ngOnInit() {
  }

}
