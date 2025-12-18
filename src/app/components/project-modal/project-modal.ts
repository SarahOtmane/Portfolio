import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Project } from '../project-card/project-card';
import { Icons } from '../icons/icons';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-project-modal',
  standalone: true,
  imports: [],
  templateUrl: './project-modal.html',
  styleUrls: ['./project-modal.css']
})
export class ProjectModal {
  @Input() project: Project | null = null;
  @Input() isOpen: boolean = false;
  @Output() close = new EventEmitter<void>();

  constructor(private sanitizer: DomSanitizer) {}

  getIconSvg(iconId: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(Icons.getIcon(iconId));
  }

  onClose() {
    this.close.emit();
  }

  onBackdropClick(event: MouseEvent) {
    if (event.target === event.currentTarget) {
      this.onClose();
    }
  }
}
