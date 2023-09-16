const express = require('express');
const router = express.Router();
const imageCtrl = require('../controllers/variantsCtrl');

// The order MATTERS!
router.get('/', imageCtrl.index); //show all
router.post('/', imageCtrl.create); //new
router.get('/new', imageCtrl.form); //get form to create image
router.get('/:id/delete', imageCtrl.remove);
router.post('/:id', imageCtrl.update); //update
router.get('/:id', imageCtrl.show); //show image by id
router.get('/:id/:edit', imageCtrl.form); //edit form
router.delete('/:id', imageCtrl.remove);

module.exports = router;
