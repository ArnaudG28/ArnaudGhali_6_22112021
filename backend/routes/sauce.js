// Version 2.0 etape 2 : construire un parcours utilisateur

// logique des routes sauce


// import application Epress pour créer un router
const express = require('express');
// import du controlleur métier des sauces
const sauceCtrl = require('../controllers/sauce');
// import du middelware de protection des routes authentification
const auth = require ('../middleware/auth');


// création d'un routeur Express 
const router = express.Router();


// enregistrement des differentes routes en fonction des logiques métiers (création, suppresion, modification, ...) avec protection auth
// dans le router express avant enregistrament dans l'application

// route pour la creation d'une sauce
router.post('/', auth, sauceCtrl.createSauce);

// route pour la modification d'une sauce
router.put('/:id', auth, sauceCtrl.modifySauce);

// suppression d'une sauce avec l'id fourni
router.delete('/:id', auth, sauceCtrl.deleteSauce);

// renvoie la sauce fourni avec l'id
router.get('/:id', auth, sauceCtrl.getOneSauce);

// renvoie sous forme de tableau la liste de tous les objets sauce de la base de données
router.get('/' + '', auth, sauceCtrl.getAllSauces);
  
  
// export du router
module.exports = router;