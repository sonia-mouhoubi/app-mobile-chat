const User = require('../models/Users');

const bcrypt = require('bcrypt');
// Importer le token d'authentification
const jwt = require('jsonwebtoken');

// S'inscrire
exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
      .then(hash => {
        const user = new User({
            email: req.body.email,
            password: hash,
            firstname: req.body.firstname, 
            lastname: req.body.lastname
        });
        user.save()
          .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
          .catch(error => res.status(400).json({ error }));
      })
      .catch(error => res.status(500).json({ error }));
  };

// Se connecter
exports.login = (req, res, next) => {
    User.findOne({ email: req.body.email })
        .then(user => {
            if (!user) {
                return res.status(401).json({ message: 'Paire login/mot de passe incorrecte'});
            }
            bcrypt.compare(req.body.password, user.password)
                .then(valid => {
                    if (!valid) {
                        return res.status(401).json({ message: 'Paire login/mot de passe incorrecte' });
                    }
                    res.status(200).json({
                        userId: user._id,
                        token: jwt.sign(
                            { userId: user._id, admin: user.admin },
                            'RANDOM_TOKEN_SECRET',
                            { expiresIn: '24h' }
                        )
                    });
                })
                .catch(error => res.status(500).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
 };

// Afficher tous les utilisateurs
exports.getAllUsers = (req, res, next) => {
    User.find().sort("-_id").select("firstname lastname").then(
      (resultat) => {
        res.status(200).json(resultat);
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  };

// Afficher un utilisateur
exports.getUser = (req, res, next) => {
  User.findOne({ _id: req.params.id }).select("-_id email firstname lastname").then(
    (resultat) => {
      res.status(200).json(resultat);
    }
  ).catch(
    (error) => {
      res.status(404).json({
        error: error
      });
    }
  );
};

// PROFIL
// Afficher son profil
exports.getProfil = (req, res, next) => {
  User.findOne({ _id: req.auth.userId} ).select("-_id email firstname lastname").then(
    (resultat) => {
      res.status(200).json(resultat);
    }
  ).catch(
    (error) => {
      res.status(404).json({
        error: error
      });
    }
  );
};

// Modifier son profil
exports.updateProfil = (req, res, next) => {
  User.updateOne({ _id: req.auth.userId}, { 
    $set: { 
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      password: req.body.password
    } })
    .then(
    (resultat) => {
      res.status(200).json(resultat);
    }
  ).catch(
    (error) => {
      res.status(404).json({
        error: error
      });
    }
  );
};

// Supprimer son profil
exports.deleteProfil = (req, res, next) => {
  User.deleteOne({ _id: req.auth.userId} ).then(
    (resultat) => {
      res.status(200).json(resultat);
    }
  ).catch(
    (error) => {
      res.status(404).json({
        error: error
      });
    }
  );
};

// ADMIN
// Modifier un utilisateur 
exports.updateUser = (req, res, next) => {
  User.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id }).then(
    (resultat) => {
      res.status(200).json(resultat);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

// Supprimer un utilisateur 
exports.deleteUser = (req, res, next) => {
  User.deleteOne({ _id: req.params.id }).then(
    (resultat) => {
      res.status(200).json(resultat);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};
