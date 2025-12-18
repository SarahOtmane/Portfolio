import { Component, Input, Output, EventEmitter } from '@angular/core';
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
  descriptionComplete?: string;
  media?: string[];
  technos?: string[];
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
  @Output() showDetails = new EventEmitter<Project>();

  constructor(private sanitizer: DomSanitizer) {}

  getIconSvg(iconId: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(Icons.getIcon(iconId));
  }

  onShowDetails() {
    this.showDetails.emit(this.project);
  }
}