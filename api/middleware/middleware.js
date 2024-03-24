// middleware.js

const express = require('express');
const router = express.Router();

// Middleware de journalisation
router.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next(); // Appeler la fonction suivante dans le cycle de requête-réponse
});

// Middleware d'authentification (exemple simple)
const authenticate = (req, res, next) => {
    const isAuthenticated = false; // Votre logique d'authentification ici
    if (isAuthenticated) {
        next(); // Passer à la fonction suivante si l'utilisateur est authentifié
    } else {
        res.status(401).send('Non authentifié'); // Sinon, renvoyer une erreur 401
    }
};

module.exports = {
    authenticate
}