# ArnaudGhali_6_22112021
Guide pour l'installation de l'application :

Telecharger et dezipper le fichier contenant le code source (P6_01_code_source)
A partir de VisualStudio for windows ouvrir le dossier zippé : 2 repertoires sont presents sous sa racine : backend et frontend

Ouvrir une fenetre terminal et installer NPM (Node Package Manager) à partir de ce dossier : npm install,

Pour faire fonctionner le backend :
- se positionner sous le repertoire backend dans une fenetre terminal (cd backend à partir de la racine du dossier),
- installer les différents packages suivants :
  - pour utiliser le serveur nodemon : npm install -g nodemon,
  - le framework Express : npm install express,
  - le package Mongoose : npm install mongoose,
  - le package de de validation  : npm install mongoose-unique-validator,
  - le package de chiffrement bcrypt pour la fonction signup : npm install bcrypt,
  - le package pour creer et valider les tokens d'authentification : npm install jsonwebtoken,
  - le package mluter pour telecharger les fichiers : npm install multer,

Pour faire fonctionner le frontend :
- se positionner sous le repertoire frontend dans une fenetre terminal (cd frontend à partir de la racine du dossier),
  - installer les dépendances : npm install,
  - Démarrer le serveur par : npm start pour avoir accès au serveur de développement,
  L'application va se charger automatiquement .


Vous pouvez à présent utiliser l'application.
