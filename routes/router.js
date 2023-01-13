const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const authAdmin = require('../middleware/auth-admin');

const ctrlUsers = require('../controllers/controller-users');
const ctrlMessages = require('../controllers/controller-messages');


router.post('/signup', ctrlUsers.signup);
router.post('/login', ctrlUsers.login);
// Utilisateur connecté / Annuaire
router.get('/users', auth, ctrlUsers.getAllUsers);
router.get('/users/:id', auth, ctrlUsers.getUser);
// Chat
router.post('/send', auth, ctrlMessages.sendMessage);
router.get('/messages', auth, ctrlMessages.getMessages);
// Profil
router.get('/profil/me', auth, ctrlUsers.getProfil);
router.put('/profil/me', auth, ctrlUsers.updateProfil);
router.delete('/profil/me', auth, ctrlUsers.deleteProfil);

// Route accessible par l'Admin
router.put('/users/:id', auth, authAdmin, ctrlUsers.updateUser);
router.delete('/users/:id', auth, authAdmin, ctrlUsers.deleteUser);
router.delete('/messages/:id', auth, authAdmin, ctrlMessages.deleteMessage);

module.exports = router;