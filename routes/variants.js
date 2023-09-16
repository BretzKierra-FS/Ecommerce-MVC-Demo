const express = require('express');
const router = express.Router();
const variantCtrl = require('../controllers/variantsCtrl');

// The order MATTERS!
router.get('/', variantCtrl.index); //show all
router.post('/', variantCtrl.create); //new
router.get('/new', variantCtrl.form); //get form to create variant
router.get('/:id/delete', variantCtrl.remove);
router.post('/:id', variantCtrl.update); //update
router.get('/:id', variantCtrl.show); //show variant by id
router.get('/:id/:edit', variantCtrl.form); //edit form
router.delete('/:id', variantCtrl.remove);

module.exports = router;
