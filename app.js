const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/router');
require('dotenv').config();
const connectDB = process.env.MONGO 
// mongoose.connect();

// Connexion à la bdd 
mongoose.connect(`mongodb+srv://${connectDB}`,
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

const app = express();
// Encoder au format JSON (parser)
app.use(express.urlencoded({ extended: true}));
app.use(express.json()); 
// Sert à régler le problème de CORS)
app.use((req, res, next) => {
    // On donne l'autorisation à tous le monde d'utiliser notre API (Orign : qui à le droit d'accéder à notre API, * tous le mode)
    res.setHeader('Access-Control-Allow-Origin', '*');
    // On donne l'autorisation d'utiliser certaine entête, certain headers sur l'objet request
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    // Ainsi que certaine méthode
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use('/', router)

module.exports = app;