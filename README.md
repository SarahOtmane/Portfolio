# Portfolio - Sarah Otmane

Portfolio personnel présentant mes projets, compétences et expériences en développement full-stack.

🌐 **Live Demo**: [Déployé sur Vercel](https://votre-url-vercel.app)

## 📋 Table des matières

- [À propos](#à-propos)
- [Technologies](#technologies)
- [Fonctionnalités](#fonctionnalités)
- [Installation](#installation)
- [Lancement du projet](#lancement-du-projet)
- [Structure du projet](#structure-du-projet)
- [Déploiement](#déploiement)
- [Contact](#contact)

## 🎯 À propos

Portfolio moderne et responsive développé avec Angular 18, présentant mes projets professionnels et personnels, mes compétences techniques et mon parcours professionnel. Le site inclut un système de contact fonctionnel via EmailJS et une navigation fluide avec scroll animé.

## 🛠️ Technologies

### Frontend
- **Angular 18** - Framework principal
- **TypeScript** - Langage de programmation
- **Tailwind CSS** - Framework CSS utility-first
- **EmailJS** - Service d'envoi d'emails

### DevOps & Outils
- **Docker** - Containerisation
- **Docker Compose** - Orchestration des conteneurs
- **Vercel** - Plateforme de déploiement
- **GitHub** - Versioning et CI/CD

## ✨ Fonctionnalités

- **Design responsive** - Compatible mobile, tablette et desktop
- **Navigation fluide** - Scroll animé vers les sections
- **Portfolio de projets** - Affichage de 8+ projets avec modal détaillée
- **Formulaire de contact** - Envoi d'emails via EmailJS
- **Section compétences** - Présentation des technologies maîtrisées
- **Expériences professionnelles** - Timeline des alternances et missions
- **Mode sombre/clair** - Interface adaptée
- **Animations** - Transitions fluides et effets hover

## 🚀 Installation

### Prérequis

- Docker 

### Cloner le repository

```bash
git clone https://github.com/SarahOtmane/Portfolio.git
cd Portfolio
```

### Installer les dépendances

```bash
docker run -ti --rm -v $PWD:/app -w /app node:20-alpine /bin/sh
npm install
```

## 💻 Lancement du projet

```bash
# Lancer le projet
docker compose up --build

# En mode détaché
docker compose up --build -d

# Arrêter le projet
docker compose down

# Nettoyer les volumes
docker compose down -v
```

Le site sera accessible sur `http://localhost:4200`

## 📁 Structure du projet

```
portfolio/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── header/           # En-tête avec navigation
│   │   │   ├── footer/           # Pied de page
│   │   │   ├── project-card/     # Carte de projet
│   │   │   ├── project-modal/    # Modal détaillée des projets
│   │   │   ├── section-projet/   # Section portfolio
│   │   │   ├── section-skills/   # Section compétences
│   │   │   ├── section-alternance/ # Expériences
│   │   │   ├── section-contact/  # Formulaire de contact
│   │   │   └── icons/            # Composant d'icônes
│   │   └── pages/
│   │       └── home/             # Page d'accueil
│   ├── environments/             # Variables d'environnement
│   └── public/                   # Assets statiques
├── Dockerfile                    # Configuration Docker
├── compose.yml                   # Docker Compose
└── angular.json                  # Configuration Angular
```

## 🌐 Déploiement

### Vercel

Le projet est configuré pour être déployé automatiquement sur Vercel via GitHub.

1. Connecter le repository GitHub à Vercel
2. Configurer le projet (détecte automatiquement Angular)
3. Déployer

Les variables de build sont configurées automatiquement.


## 📧 Contact

**Sarah Otmane**
- Portfolio: [votre-url-vercel.app](https://votre-url-vercel.app)
- LinkedIn: [sarah-otmane](https://www.linkedin.com/in/sarah-otmane-b03212251/)
- GitHub: [@SarahOtmane](https://github.com/SarahOtmane)
- Email: contact@sarah-otmane.fr

## 📝 License

Ce projet est sous licence MIT - voir le fichier LICENSE pour plus de détails.

---

⭐ **N'hésitez pas à mettre une étoile si vous aimez ce projet !**
