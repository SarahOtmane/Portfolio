import { Component } from '@angular/core';
import { ProjectCard, Project } from '../project-card/project-card';

@Component({
  selector: 'app-section-projet',
  standalone: true,
  imports: [ProjectCard],
  templateUrl: './section-projet.html',
  styleUrls: ['./section-projet.css']
})
export class SectionProjet {
  projects: Project[] = [
    {
      title: 'PECA platform',
      description: '',
      image: 'assets/peca.svg',
      techIcons: ['icon-react', 'icon-tailwind', 'icon-redux', 'icon-jenkins', 'icon-python']
    },
    {
      title: 'JADD platform',
      description: '',
      image: 'assets/jdd.svg',
      techIcons: ['icon-react', 'icon-tailwind', 'icon-redux', 'icon-jenkins', 'icon-python', 'icon-mongo']
    },
    {
      title: 'Hive2work platform',
      description: 'Hive2work is the first 100% work-study platform that matches digital talents with the right company assignments by valuing skills.',
      image: 'assets/hive2work.png',
      siteLink: 'https://www.hive2work.fr/',
      techIcons: ['icon-react', 'icon-tailwind', 'icon-typescript', 'icon-nestjs', 'icon-docker']
    },
    {
      title: 'P10 App',
      description: 'P10 App is an online betting platform dedicated to Formula 1. It allows you to manage private and public leagues, place bets and display results in real time.',
      image: 'assets/p10app.png',
      frontRepo: 'https://github.com/SarahOtmane/p10_app_front',
      backRepo: 'https://github.com/SarahOtmane/p10_app',
      techIcons: ['icon-react-native', 'icon-expo', 'icon-sequelize', 'icon-postgresql', 'icon-graphql']
    },
    {
      title: 'Stage Connect',
      description: 'StageConnect is a platform developed during a workshop for an institutional client (BetaGouv / Government). It aims to facilitate connections between vocational high schools and businesses.',
      image: 'assets/betaGouv.png',
      frontRepo: 'https://github.com/SarahOtmane/BetaGouv_front',
      backRepo: 'https://github.com/SarahOtmane/BetaGouv_back',
      techIcons: ['icon-react', 'icon-tailwind', 'icon-node', 'icon-docker']
    },
    {
      title: 'E-commerce App',
      description: 'ShopFlutter is an e-commerce MVP developed in 5 days by a pair of people. It allows users to browse products, add them to their cart, and proceed to checkout.',
      image: 'assets/shopFlutter.png',
      siteLink: 'https://shopflutter.web.app/',
      frontRepo: 'https://github.com/SarahOtmane/e_commerce_flutter',
      techIcons: ['icon-flutter', 'icon-firebase']
    },
    {
      title: 'Renowear platform',
      description: 'RenoWear is a web and mobile application that facilitates the buying, reselling, and customization of clothing within a circular economy framework. It allows users to give their clothes a second life through a system of resale, swapping, and customization, all while integrating a modern and intuitive user experience.',
      image: 'assets/renowear.png',
      frontRepo: 'https://github.com/SarahOtmane/MDS',
      backRepo: 'https://github.com/SarahOtmane/backMDS',
      mobileRepo: 'https://github.com/SarahOtmane/mobileMDS',
      techIcons: ['icon-search', 'icon-react', 'icon-expo', 'icon-node', 'icon-docker']
    }
  ];
}