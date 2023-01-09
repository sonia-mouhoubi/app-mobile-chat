const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const ctrlUsers = require('../controllers/controller-users');

router.post('/signup', ctrlUsers.signup);
router.post('/login', ctrlUsers.login);
router.get('/users', auth, ctrlUsers.getAllUsers);
router.get('/users/:id', auth, ctrlUsers.getUser);
router.put('/users/:id', auth, ctrlUsers.updateUser);
router.delete('/users/:id', auth, ctrlUsers.deleteUser);




// router.get('/:id', ctrlUsers.getOneUser);
// router.put('/:id', ctrlUsers.modifyUser);
// router.delete('/:id', ctrlUsers.deleteUser);

module.exports = router;