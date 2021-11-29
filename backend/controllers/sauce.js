// Version 2.0 etape 2 : construire un parcours utilisateur

// logique métier des fonctions sauce

// import du schema de données sauce
const Sauce = require('../models/sauce');

// fonctions métiers pour les sauces
// on va exporter les différentes fonctions metiers 
// utilisation des methodes pour envoi et retour de la reponse au format json et de next pour renvoi à la prochaine fonction 

// création d'une sauce
exports.createSauce = (req, res, next) => {
    // suppression du faux id
    delete req.body._id;
    // recupération de toutes les données
    const sauce = new Sauce({
      ...req.body
    });
    // enregistrement dans la base de données
    sauce.save()
      .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
      .catch(error => res.status(400).json({ error }));
};

// modification d'une sauce
exports.modifySauce =(req, res, next) => {
    Sauce.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Objet modifié !'}))
      .catch(error => res.status(400).json({ error }));
};

// suppression d'une sauce
exports.deleteSauce = (req, res, next) => {
    Sauce.deleteOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
      .catch(error => res.status(400).json({ error }));
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






