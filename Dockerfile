FROM node:20-alpine

WORKDIR /app

RUN npm install -g @angular/cli@latest

# Copier les fichiers de dépendances
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste des fichiers (sera fait via volume en dev)
COPY . .

EXPOSE 4200

CMD ["ng", "serve", "--host", "0.0.0.0"]