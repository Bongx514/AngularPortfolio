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
}
