const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const authAdmin = require('../middleware/auth-admin');

const ctrlUsers = require('../controllers/controller-users');

router.post('/signup', ctrlUsers.signup);
router.post('/login', ctrlUsers.login);
router.get('/users', auth, authAdmin, ctrlUsers.getAllUsers);
router.get('/users/:id', ctrlUsers.getUser);
router.put('/users/:id', auth, authAdmin, ctrlUsers.updateUser);
router.delete('/users/:id', auth, authAdmin, ctrlUsers.deleteUser);
router.post('/send', ctrlUsers.sendMessage);





// router.get('/:id', ctrlUsers.getOneUser);
// router.put('/:id', ctrlUsers.modifyUser);
// router.delete('/:id', ctrlUsers.deleteUser);

module.exports = router;