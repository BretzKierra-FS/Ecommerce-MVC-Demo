const express = require('express');
const router = express.Router();
const productCtrl = require('../controllers/productsCtrl');
const productValidator = require('../validators/products');

// The order MATTERS!
router.get('/', productCtrl.index); //show all
router.post('/', productValidator, productCtrl.create); //new
router.get('/new', productCtrl.form); //get form to create product
router.get('/:id/delete', productCtrl.remove);
router.post('/:id', productValidator, productCtrl.update); //update
router.get('/:id', productCtrl.show); //show product by id
router.get('/:id/:edit', productCtrl.form); //edit form
router.delete('/:id', productCtrl.remove);

module.exports = router;
