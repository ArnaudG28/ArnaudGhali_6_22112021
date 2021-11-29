// Version 2.0 etape 2 : construire un parcours utilisateur

// logique des routes utilisateur


// import application Epress pour créer un routeur
const express = require('express');


// création d'un routeur Express 
const router = express.Router();

// import du controlleur métier des utilisateurs pour associer les fonctions aux différentes routes
const userCtrl = require('../controllers/user');

// création des routes POST car le front end va renvoyer des informations

// route pour la creation d'un utilisateur
router.post('/signup',userCtrl.signup);
// route pour identifier l'utilisateur
router.post('/login',userCtrl.login);


// export du router
module.exports = router;