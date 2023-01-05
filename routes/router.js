const express = require('express');
const router = express.Router();

const ctrlUsers = require('../controllers/controllers-users');

router.get('/', ctrlUsers.getAllUsers);
router.post('/', ctrlUsers.createUser);
router.get('/:id', ctrlUsers.getOneUser);
router.put('/:id', ctrlUsers.modifyUser);
router.delete('/:id', ctrlUsers.deleteUser);

module.exports = router;