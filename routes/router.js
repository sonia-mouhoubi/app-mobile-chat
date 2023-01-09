const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const ctrlUsers = require('../controllers/controller-users');

router.post('/signup', ctrlUsers.signup);
router.post('/login', ctrlUsers.login);
router.get('/users', auth, ctrlUsers.getAllUsers);

// router.get('/:id', ctrlUsers.getOneUser);
// router.put('/:id', ctrlUsers.modifyUser);
// router.delete('/:id', ctrlUsers.deleteUser);

module.exports = router;