const express = require('express');
const router = express.Router();
const productCtrl = require('../controllers/variantsCtrl');

// The order MATTERS!
router.get('/', productCtrl.index); //show all
router.post('/', productCtrl.create); //new
router.get('/new', productCtrl.form); //get form to create product
router.get('/:id/delete', productCtrl.remove);
router.post('/:id', productCtrl.update); //update
router.get('/:id', productCtrl.show); //show product by id
router.get('/:id/:edit', productCtrl.form); //edit form
router.delete('/:id', productCtrl.remove);

module.exports = router;
