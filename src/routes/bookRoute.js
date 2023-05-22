const express = require('express');
const router = express.Router();
const {bookController} = require('../controllers')
const {authIsAdmin} = require('../meddleware/index')


router.post('/', authIsAdmin, bookController.postBook);
router.get('/:id', bookController.getBook);
router.put('/:id', authIsAdmin, bookController.putBook);
router.get('/', bookController.getBooks);
router.delete('/:id', authIsAdmin, bookController.deleteBook);

module.exports = router;