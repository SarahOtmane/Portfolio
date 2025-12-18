import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  isMenuOpen = false;

  menuItems = [
    { label: 'About', route: '/', fragment: 'home' },
    { label: 'Experiences', route: '/', fragment: 'experiences' },
    { label: 'Projects', route: '/', fragment: 'projects' },
    { label: 'Skills', route: '/', fragment: 'skills' },
    { label: 'Contact', route: '/', fragment: 'contact' }
  ];

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  scrollToSection(fragment: string) {
    const element = document.getElementById(fragment);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    if (this.isMenuOpen) {
      this.toggleMenu();
    }
  }
}
