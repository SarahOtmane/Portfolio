import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  isMenuOpen = false;

  menuItems = [
    { label: 'About', route: '/' },
    { label: 'Experiences', route: '/experiences' },
    { label: 'Projects', route: '/projects' },
    { label: 'Skills', route: '/skills' },
    { label: 'Contact', route: '/contact' }
  ];

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
