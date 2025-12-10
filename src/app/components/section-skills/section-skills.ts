import { Component } from '@angular/core';

@Component({
  selector: 'app-section-skills',
  standalone: true,
  imports: [],
  templateUrl: './section-skills.html',
  styleUrl: './section-skills.css',
})
export class SectionSkills {
  skillsCategories = [
    {
      title: 'Frontend',
      skills: ['ReactJs', 'TypeScript', 'Angular', 'Tailwind']
    },
    {
      title: 'Backend',
      skills: ['NodeJs', 'NestJs', 'Express', 'Python', 'Django', 'Flask', 'Java', 'Spring Boot']
    },
    {
      title: 'DevOps',
      skills: ['Docker', 'Kubernetes', 'AWS', 'Azure', 'Git', 'CI/CD']
    },
    {
      title: 'Databases',
      skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Firebase']
    },
    {
      title: 'Supervision',
      skills: ['Prometheus', 'Grafana', 'ELK Stack']
    },
    {
      title: 'Gestion projet',
      skills: ['Jira', 'Confluence', 'Asana']
    }
  ];
}