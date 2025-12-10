import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCard, Project } from '../project-card/project-card';
import { TechIcons } from '../../tech-icons.component';

@Component({
  selector: 'app-section-projet',
  standalone: true,
  imports: [CommonModule, ProjectCard, TechIcons],
  templateUrl: './section-projet.html',
  styleUrls: ['./section-projet.css']
})
export class SectionProjet {
  projects: Project[] = [
    {
      title: 'Hive2work platform',
      description: 'Hive2work is the first 100% work-study platform that matches digital talents with the right company assignments by valuing skills.',
      image: 'assets/hive2work.png',
      siteLink: 'https://www.hive2work.fr/',
      frontRepo: 'https://github.com/SarahOtmane/H2W_web',
      backRepo: 'https://github.com/SarahOtmane/H2W_api',
      techIcons: ['icon-react', 'icon-tailwind', 'icon-typescript', 'icon-nestjs', 'icon-angular']
    },
    {
      title: 'P10 App',
      description: 'P10 App is an online betting platform dedicated to Formula 1. It allows you to manage private and public leagues, place bets and display results in real time.',
      image: 'assets/p10app.png',
      frontRepo: 'https://github.com/SarahOtmane/p10_app_front',
      backRepo: 'https://github.com/SarahOtmane/p10_app',
      techIcons: ['icon-react', 'icon-nestjs']
    },
    {
      title: 'Stage Connect',
      description: 'StageConnect is a platform developed during a workshop for an institutional client (BetaGouv / Government). It aims to facilitate connections between vocational high schools and businesses.',
      image: 'assets/betaGouv.png',
      frontRepo: 'https://github.com/SarahOtmane/BetaGouv_front',
      backRepo: 'https://github.com/SarahOtmane/BetaGouv_back',
      techIcons: ['icon-react', 'icon-nestjs']
    }
  ];
}