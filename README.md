# miniBookshelf

Créer une petite API Express en TypeScript qui expose un système de recherche dans une collection MongoDB, en respectant une architecture MVC orientée objet :

- Model (schéma + type),
  - Service (logique métier, classes, méthodes),
  - Controller (orchestration requêtes/réponses),
  - Router (déclaration des routes),
  - Config (connexion DB)

Le thème est libre (mangas, recettes, plantes, jeux vidéo, films, bestiaire, etc.).

Exigences fonctionnelles

Choix d’un thème et définition d’une entité principale (ex. Recette, Livre, Jeu, Plante, Personnage).

CRUD minimal (au moins Create + Read): - POST /items (créer un document) - GET /items/:id (lire un document) - GET /items (liste paginée facultatif)

Recherche (obligatoire) : - GET /search?keyword=... cherche sur au moins deux champs (ex. nom, description) via $regex (insensible à la casse).

- au moins un filtre additionnel (ex. genre=action, rareté=R, difficulté<=3).

POO/MVC : - Une classe Service avec des méthodes métiers claires (create, findById, search, list, etc.). - Des Controllers fins (pas de logique métier dedans). - Models Mongoose + types/interfaces TypeScript.
– README clair (comment lancer, routes, exemples de requêtes).

npm init -y
npm install express mongoose dotenv cors
npm install -D typescript @types/express @types/node @types/cors ts-node nodemon
npm install dotenv
npm install --save-dev jest
npm install --save-dev @swc/jest @swc/core
npm install --save-dev supertest @types/supertest
npm install --save swagger-ui-express swagger-jsdoc
npm i --save-dev @types/swagger-jsdoc
