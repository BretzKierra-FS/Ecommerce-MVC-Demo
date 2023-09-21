const express = require('express');
const router = express.Router();
const productRoutes = require('./products');
const variantRoutes = require('./variants');
const imageRoutes = require('./images');


router.use('/products', productRoutes);
router.use('/variants', variantRoutes);
router.use('/images', imageRoutes);

module.exports = router;
