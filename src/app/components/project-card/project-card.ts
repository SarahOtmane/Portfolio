import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

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
  imports: [CommonModule],
  templateUrl: './project-card.html',
  styleUrls: ['./project-card.css']
})
export class ProjectCard {
  @Input() project!: Project;
}