import { Component, Input } from '@angular/core';
import { Icons } from '../icons/icons';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

export interface Project {
  title: string;
  description: string;
  image: string;
  siteLink?: string;
  frontRepo?: string;
  backRepo?: string;
  mobileRepo?: string;
  techIcons: string[];
}

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [],
  templateUrl: './project-card.html',
  styleUrls: ['./project-card.css']
})
export class ProjectCard {
  @Input() project!: Project;

  constructor(private sanitizer: DomSanitizer) {}

  getIconSvg(iconId: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(Icons.getIcon(iconId));
  }
}