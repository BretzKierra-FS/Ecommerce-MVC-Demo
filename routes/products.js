const express = require('express');
const router = express.Router();
const productCtrl = require('../controllers/productsCtrl');

// The order MATTERS!
router.get('/', productCtrl.index); //show all
router.post('/', productCtrl.create); //new
router.get('/:id', productCtrl.show); //show product by id
router.get('/new', productCtrl.form); //get form to create product
router.get('/:id/:edit', productCtrl.form); //edit form
router.post('/:id', productCtrl.update); //update
router.get('/:id/delete', productCtrl.remove);
router.delete('/:id', productCtrl.remove);

module.exports = router;
