const Message = require('../models/Message');


// Envoyer un message
exports.sendMessage = (req, res, next) => {
    const message = new Message({ 
      idUser: req.auth.userId,
      message: req.body.message
  });
  message.save()
  .then(() => res.status(201).json({ message: 'Message envoyé !' }))
  .catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  };
  
  // Afficher un message
  exports.getMessages = (req, res, next) => {
    Message.find().select("message _id").populate('idUser',  'firstname lastname createdAt').then(
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
  
  // Supprimer un message 
  exports.deleteMessage = (req, res, next) => {
    Message.deleteOne({ _id: req.params.id }).then(
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
  