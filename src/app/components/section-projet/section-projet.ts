import { Component } from '@angular/core';
import { ProjectCard, Project } from '../project-card/project-card';
import { ProjectModal } from '../project-modal/project-modal';

@Component({
  selector: 'app-section-projet',
  standalone: true,
  imports: [ProjectCard, ProjectModal],
  templateUrl: './section-projet.html',
  styleUrls: ['./section-projet.css']
})
export class SectionProjet {
  selectedProject: Project | null = null;
  isModalOpen: boolean = false;

  projects: Project[] = [
    {
      title: 'PECA platform',
      description: 'Crédit Agricole Assurances intranet portal dedicated to test automation and centralization. Maintenance and integration of new features.',
      descriptionComplete: 'PECA is an intranet portal developed for Crédit Agricole Assurances that simplifies test automation. This application centralizes all tests and their results through a comprehensive administration system. As an apprentice developer, I handle platform maintenance and integrate new features to improve testing team efficiency and ensure application quality.',
      image: 'assets/peca.svg',
      techIcons: ['icon-react', 'icon-tailwind', 'icon-redux', 'icon-jenkins', 'icon-python'],
      media: [],
      technos: ['react', 'redux', 'tailwindcss', 'python', 'fastApi', 'jenkins', 'MySQL']
    },
    {
      title: 'JADD platform',
      description: 'End-to-end intranet application developed for Crédit Agricole Assurances, enabling centralized test data management and a test case reservation system.',
      descriptionComplete: 'JADD is an intranet application that I designed and developed from scratch for Crédit Agricole Assurances. It revolutionizes test data management that was previously scattered across Excel files. The platform centralizes all test data and integrates a test case reservation system, allowing teams to collaborate more efficiently. This solution significantly improves traceability and organization of testing processes within the company.',
      image: 'assets/jdd.svg',
      techIcons: ['icon-react', 'icon-tailwind', 'icon-redux', 'icon-jenkins', 'icon-python', 'icon-mongo'],
      media: [],
      technos: ['react', 'redux', 'tailwindcss', 'python', 'fastApi', 'jenkins', 'MongoDB']
    },
    {
      title: 'Hive2work platform',
      description: 'The first 100% work-study platform that matches digital talents with the right company assignments by valuing skills.',
      descriptionComplete: 'Hive2work is the first 100% work-study platform that matches digital talents with the right company assignments by valuing skills. The platform simplifies the recruitment process for companies and helps students find work-study opportunities that align with their career goals. Features include skill-based matching, application tracking, and personalized recommendations.',
      image: 'assets/hive2work.png',
      siteLink: 'https://www.hive2work.fr/',
      techIcons: ['icon-react', 'icon-tailwind', 'icon-typescript', 'icon-nestjs', 'icon-docker'],
      technos: ['react', 'typescript', 'tailwindcss', 'nestjs', 'docker', 'mySQL'],
      media: []
    },
    {
      title: 'Le Végétal platform',
      description: 'Website developed for a vegetarian restaurant including a custom-built online reservation system. Created during my apprenticeship at L\'Éléphant Rose.',
      descriptionComplete: 'Le Végétal is a website I developed for a vegetarian restaurant during my apprenticeship at L\'Éléphant Rose. The site showcases the establishment, its concept, and menu, while integrating a custom-built online reservation module that allows customers to easily book their table. The modern and intuitive interface reflects the restaurant\'s identity and provides a smooth user experience across all devices.',
      image: 'assets/leVegetal.svg',
      siteLink: 'https://restaurant-vegetal.fr/accueil',
      techIcons: ['icon-react', 'icon-tailwind', 'icon-typescript', 'icon-nestjs', 'icon-docker'],
      technos: ['react', 'typescript', 'tailwindcss', 'nestjs', 'docker', 'mySQL'],
      media: []
    },
    {
      title: 'P10 App',
      description: 'P10 App is an online betting platform dedicated to Formula 1. It allows you to manage private and public leagues, place bets and display results in real time.',
      descriptionComplete: 'P10 App is an online betting platform dedicated to Formula 1. It allows you to manage private and public leagues, place bets and display results in real time. Users can create or join leagues with friends, compete for the best predictions, and stay updated with live race results. The app features a user-friendly interface, real-time notifications, and detailed statistics to enhance the betting experience for F1 enthusiasts.',
      image: 'assets/p10app.png',
      frontRepo: 'https://github.com/SarahOtmane/p10_app_front',
      backRepo: 'https://github.com/SarahOtmane/p10_app',
      techIcons: ['icon-react-native', 'icon-expo', 'icon-sequelize', 'icon-postgresql', 'icon-graphql'],
      technos: ['react native', 'expo', 'graphql', 'sequelize', 'postgresql'],
      media: []
    },
    {
      title: 'Stage Connect',
      description: 'StageConnect is a platform developed during a workshop for an institutional client (BetaGouv / Government). It aims to facilitate connections between vocational high schools and businesses.',
      descriptionComplete: 'StageConnect is a platform developed during a workshop for an institutional client (BetaGouv / Government). It aims to facilitate connections between vocational high schools and businesses. The platform allows students to create profiles showcasing their skills and interests, while companies can post internship opportunities and search for suitable candidates. Features include a matching algorithm, messaging system, and application tracking to streamline the internship search process for both students and employers.',
      image: 'assets/betaGouv.png',
      frontRepo: 'https://github.com/SarahOtmane/BetaGouv_front',
      backRepo: 'https://github.com/SarahOtmane/BetaGouv_back',
      techIcons: ['icon-react', 'icon-tailwind', 'icon-node', 'icon-docker'],
      technos: ['react', 'tailwindcss', 'nodeJS', 'docker'],
      media: []
    },
    {
      title: 'E-commerce App',
      description: 'ShopFlutter is an e-commerce MVP developed in 5 days by a pair of people. It allows users to browse products, add them to their cart, and proceed to checkout.',
      descriptionComplete: 'ShopFlutter is an e-commerce MVP developed in 5 days by a pair of people. It allows users to browse products, add them to their cart, and proceed to checkout. The app features a streamlined shopping experience with a focus on simplicity and usability. Users can easily navigate through product categories, view detailed product information, and complete their purchases securely.',
      image: 'assets/shopFlutter.png',
      siteLink: 'https://shopflutter.web.app/',
      frontRepo: 'https://github.com/SarahOtmane/e_commerce_flutter',
      techIcons: ['icon-flutter', 'icon-firebase'],
      technos: ['flutter', 'firebase'],
      media: []
    },
    {
      title: 'Renowear platform',
      description: 'RenoWear is a web and mobile application that facilitates the buying, reselling, and customization of clothing within a circular economy framework. It allows users to give their clothes a second life through a system of resale, swapping, and customization, all while integrating a modern and intuitive user experience.',
      descriptionComplete: 'RenoWear is a web and mobile application that facilitates the buying, reselling, and customization of clothing within a circular economy framework. It allows users to give their clothes a second life through a system of resale, swapping, and customization, all while integrating a modern and intuitive user experience. The platform promotes sustainable fashion by encouraging users to recycle and upcycle their garments, reducing waste and environmental impact. Features include user profiles, item listings, secure transactions, and customization options to personalize clothing items.',
      image: 'assets/renowear.png',
      frontRepo: 'https://github.com/SarahOtmane/MDS',
      backRepo: 'https://github.com/SarahOtmane/backMDS',
      mobileRepo: 'https://github.com/SarahOtmane/mobileMDS',
      techIcons: ['icon-search', 'icon-react', 'icon-expo', 'icon-node', 'icon-docker'],
      technos: ['react', 'expo', 'nodeJS', 'docker', 'mongodb'],
      media: []
    }
  ];

  openProjectDetails(project: Project) {
    this.selectedProject = project;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.selectedProject = null;
  }
}