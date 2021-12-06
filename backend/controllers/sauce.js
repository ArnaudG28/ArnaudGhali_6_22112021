// Version 3.0 etapes 3 et 4 : demarrer le middleware et construire la route API

// logique métier des fonctions sauce

// import du schema de données sauce
const Sauce = require('../models/sauce');

// import du package filesystem
const fs = require('fs');
const sauce = require('../models/sauce');

// fonctions métiers pour les sauces
// on va exporter les différentes fonctions metiers 
// utilisation des methodes pour envoi et retour de la reponse au format json et de next pour renvoi à la prochaine fonction 

// création d'une sauce
exports.createSauce = (req, res, next) => {
    //  on recupere l'objet JSON de la requete
    const sauceObject = JSON.parse(req.body.sauce);
    // suppression du faux id
    delete sauceObject._id;
    // recupération de toutes les données
    const sauce = new Sauce({
      ...sauceObject,
      // recuperation de l'url de l'image
      imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    });
    // enregistrement dans la base de données
    sauce.save()
      .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
      .catch(error => res.status(400).json({ error }));
};

// modification d'une sauce
exports.modifySauce =(req, res, next) => {
  // creation d'un objet pour voir si il y a ou pas une nouvelle image à la place de l'ancienne
  const sauceObject = req.file ?
  {
    // si il existe idem creation sauce
    ...JSON.parse(req.body.sauce),
    imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    // si il n'existe pas
  } : { ...req.body };
    Sauce.updateOne({ _id: req.params.id }, { ...sauceObject, _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Objet modifié !'}))
      .catch(error => res.status(400).json({ error }));
};

// suppression d'une sauce
exports.deleteSauce = (req, res, next) => {
  // suppression du fichier image correspondant
  // recherche du fichier image correspondant
  Sauce.findOne({ _id: req.params.id })
  .then(sauce => {
    const filename = sauce.imageUrl.split('/images/')[1];
    // suppression du fichier
    fs.unlink(`images/${filename}`, () => {
      // suppression de la sauce
      Sauce.deleteOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
        .catch(error => res.status(400).json({ error }));
      });
  })
  .catch(error => res.status(500).json({ error }));
};

// renvoie une sauce
exports.getOneSauce =  (req, res, next) => {
    Sauce.findOne()
        .then(sauce => res.status(200).json(sauce))
        .catch(error => res.status(400).json({ error }));
};

// renvoie toutes les sauces
exports.getAllSauces =  (req, res, next) => {
    // renvoi un tableau contenant la totalité des objets sauce
    Sauce.find()
      .then(sauces => res.status(200).json(sauces))
      .catch(error => res.status(400).json({ error }));
};






