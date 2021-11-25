// Version 1.0 etape 1 : démarrage du serveur backend

// Application framework Express

// import application Epress 
const express = require('express');

// application express
const app = express();

// recupere toutes les requêtes application/json et mete à disposition leur body sur l'objet req
app.use(express.json());

// connection à la base de données Mongoose
const mongoose = require('mongoose');

// gestion de la connection à Mongoose
mongoose.connect('mongodb+srv://arno:arno@cluster0.owgus.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

// gestion des erreurs CORS qui bloque les appels HTTP entre des serveurs différent
app.use((req, res, next) => {
  // accés à l'API depuis n'importe quelle origine 
  res.setHeader('Access-Control-Allow-Origin', '*');
  // ajout des headers mentionnés aux requêtes envoyées vers l'API
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  // envoie des requêtes avec les différentes méthodes mentionnées
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

// middelware
// utilisation de la methode use pour envoi et retour de la reponse au format json et de next pour renvoi à la prochiane fonction 

app.post('/api/sauces', (req, res, next) => {
  console.log(req.body);
  res.status(201).json({
    message: 'Objet créé !'
  });
});


app.get('/api/sauces', (req, res, next) => {
  const sauces = [
    {
      userId: 'arnaud1',
      name: 'hot spicy',
      manufcturer: 'Spicy Corporation',
      description: 'Sauce aux piments de Cayenne',
      mainPepper : 'Piments de Cayenne',
      imageUrl: 'https://www.sauce-piquante.fr/736-large_default/sauce-classic-cayenne-cajohns.jpg',
      heat : 7,
      likes: 400,
      dislikes: 200,
      usersLiked : [arnaud, thomas],
      usersDisliked: [angelique, julien],
    },
    {
      userId: 'arnaud2',
      name: 'Carolina Reaper Hellicious',
      manufcturer: 'Spicy Corporation',
      description: 'Purée de piments',
      mainPepper : 'Piments Carolina Reaper frais',
      imageUrl: 'https://www.sauce-piquante.fr/605-large_default/puree-de-piment-carolina-reaper-hellicious.jpg',
      heat : 9,
      likes: 800,
      dislikes: 400,
      usersLiked : [arnaud, thomas],
      usersDisliked: [angelique, julien],
    },
  ];
  res.status(200).json(stuff);
});

// export de l'application
module.exports = app;