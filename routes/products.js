const express = require('express');
const router = express.Router();
const productCtrl = require('../controllers/productsCtrl');

router.get('/', productCtrl.index); //show all
router.get('/new', productCtrl.form); //get form to create product
router.get('/:id', productCtrl.show); //show product by id
router.get('/:id/:edit', productCtrl.form); //edit form
router.post('/', productCtrl.create); //new
router.post('/:id', productCtrl.update); //update
router.delete('/:id', productCtrl.remove); //delete
router.post('/:id/remove', productCtrl.remove); //delete

module.exports = router;
