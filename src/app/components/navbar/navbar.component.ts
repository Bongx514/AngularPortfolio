import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [NgFor],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.less'
})
export class NavbarComponent {
  navItems = [
    { label: 'Home', link: '/home' },
    { label: 'Education', link: '/education' },
    { label: 'Experience', link: '/experience' },
    { label: 'Projects', link: '/projects' }
  ];

  toggleMenu(): void {
    const menu = document.querySelector('.mobile-nav') as HTMLElement,
          menuicon = document.querySelector('.menu-icon') as HTMLElement;
    if (menu) {
      menu.classList.toggle('open');
      menuicon.classList.toggle('menu-close');
      console.log('Menu toggled!');
    }
  }
}
