const express = require('express');
const router = express.Router();
const {userController} = require('../controllers/index')

router.post('/',userController.postUser);
router.get('/:id', userController.getUser);
router.put('/:id', userController.putUser);
router.get('/', userController.getUsers);


module.exports = router;